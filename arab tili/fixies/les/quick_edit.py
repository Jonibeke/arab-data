#!/usr/bin/env python3
# ============================================================
# quick_edit.py — tahlil (lesson) js faylini tezkor tahrirlash.
#
# ISHLATISH:
#   python quick_edit.py 003C.js
#
# BUYRUQLAR:
#   list                        — barcha num'larni qisqacha ko'rsatish
#   show <num>                  — bitta num'ning to'liq mazmunini ko'rsatish
#   2+3                         — num 2 va num 3 ni birlashtirish (arabic,
#                                  full_uz, note, segs — barchasi qo'shiladi;
#                                  num 3 o'chadi, qolganlari qayta raqamlanadi)
#   a n=3, a="...", u="...", note="...", s=[("ar1","uz1"),("ar2","uz2")]
#                                — num=3 pozitsiyasiga YANGI yozuv qo'shish
#                                  (mavjud 3 va undan keyingilar +1 suriladi)
#   d <num>                     — shu num'ni o'chirish (qolganlari qayta
#                                  raqamlanadi)
#   undo                        — oxirgi o'zgarishni bekor qilish
#   save                        — o'zgarishlarni faylga yozish
#   help                        — shu ro'yxatni qayta ko'rsatish
#   exit / quit                 — chiqish (saqlanmagan o'zgarish bo'lsa so'raydi)
#
# MUHIM: barcha buyruqlar FAQAT XOTIRADA ishlaydi — diskka yozish uchun
# har doim "save" buyrug'ini alohida bering.
# ============================================================

import sys
import os
import re
import json
import ast
import copy

try:
    import json5
except ImportError:
    print("json5 o'rnatilmagan. O'rnatish uchun: pip install json5")
    sys.exit(1)


HELP_TEXT = """
Buyruqlar:
  list                         - barcha num'larni qisqacha ko'rsatish
  show <num>                   - bitta num'ning to'liq mazmuni
  <num1>+<num2>                - ikkita num'ni birlashtirish (masalan 2+3)
  a n=<num>, a="...", u="...", note="...", s=[("ar1","uz1"),...]
                                - yangi yozuv qo'shish (qisqa format)
  paste                         - to'liq obyektni (ko'p qatorli, "num"
                                  maydoni bilan) joylashtirib qo'shish —
                                  o'sha "num" pozitsiyasiga qo'yiladi,
                                  qolganlari avtomatik suriladi
  d <num>                       - num'ni o'chirish
  undo                          - oxirgi o'zgarishni bekor qilish
  save                          - faylga yozish
  help                          - shu ro'yxat
  exit / quit                   - chiqish
"""


def load_js_array(path):
    with open(path, encoding="utf-8") as f:
        content = f.read()
    match = re.search(r"const\s+(\w+)\s*=\s*(\[.*\])\s*;", content, re.S)
    if not match:
        raise ValueError("Faylda `const nomi = [...]` massivi topilmadi.")
    var_name = match.group(1)
    data = json5.loads(match.group(2))
    return var_name, data


def save_js_array(path, var_name, data):
    with open(path, "w", encoding="utf-8") as f:
        f.write(f"const {var_name} = " + json.dumps(data, indent=2, ensure_ascii=False) + ";\n\n")
        f.write('if (typeof module !== "undefined" && module.exports) {\n')
        f.write(f"    module.exports = {var_name};\n}}\n")


def renumber(lessons):
    for i, e in enumerate(lessons):
        e["num"] = i + 1


def short_preview(text, length=40):
    text = (text or "").replace("\n", " ")
    return text[:length] + ("…" if len(text) > length else "")


def print_list(lessons):
    for e in lessons:
        ar = short_preview(e.get("arabic") or e.get("english") or e.get("text") or "")
        print(f"  {e['num']:>3}  {ar}")


def print_show(lessons, num):
    entry = next((e for e in lessons if e["num"] == num), None)
    if not entry:
        print(f"  num={num} topilmadi.")
        return
    print(json.dumps(entry, indent=2, ensure_ascii=False))


# ---- Top-darajadagi vergul bo'yicha bo'lish (qo'shtirnoq/qavslarni hisobga olib) ----
def split_top_level(s, sep=","):
    parts = []
    depth = 0
    in_quote = None
    current = []
    for ch in s:
        if in_quote:
            current.append(ch)
            if ch == in_quote:
                in_quote = None
        elif ch in ("'", '"'):
            in_quote = ch
            current.append(ch)
        elif ch in "([{":
            depth += 1
            current.append(ch)
        elif ch in ")]}":
            depth -= 1
            current.append(ch)
        elif ch == sep and depth == 0:
            parts.append("".join(current))
            current = []
        else:
            current.append(ch)
    if current:
        parts.append("".join(current))
    return [p.strip() for p in parts if p.strip()]


def parse_add_fields(raw):
    """"n=3, a="...", u="...", note="...", s=[("a","u"),...]" ni dict qiladi."""
    fields = {}
    for part in split_top_level(raw):
        if "=" not in part:
            continue
        key, val = part.split("=", 1)
        key = key.strip()
        val = val.strip()
        try:
            parsed = ast.literal_eval(val)
        except Exception as e:
            raise ValueError(f"'{key}={val}' qiymatini o'qib bo'lmadi: {e}")
        fields[key] = parsed
    return fields


def build_entry_from_fields(fields):
    entry = {}
    if "n" in fields:
        entry["num"] = fields["n"]
    if "a" in fields:
        entry["arabic"] = fields["a"]
    if "u" in fields:
        entry["full_uz"] = fields["u"]
    if "note" in fields:
        entry["note"] = fields["note"]
    if "s" in fields:
        segs = fields["s"]
        entry["segs"] = [{"ar": p[0], "uz": p[1]} for p in segs]
    else:
        entry.setdefault("segs", None)
    entry.setdefault("time", "")
    return entry


def merge_join(a, b, sep=" "):
    a = (a or "").strip()
    b = (b or "").strip()
    if a and b:
        return f"{a}{sep}{b}"
    return a or b


def main():
    if len(sys.argv) < 2:
        print("Ishlatish: python quick_edit.py <lesson.js>")
        sys.exit(1)

    path = sys.argv[1]
    if not os.path.exists(path):
        print(f"Fayl topilmadi: {path}")
        sys.exit(1)

    var_name, lessons = load_js_array(path)
    lessons.sort(key=lambda e: e["num"])
    renumber(lessons)

    history = []   # undo uchun (chuqur nusxalar)
    dirty = False

    print(f"Yuklandi: {path} ({len(lessons)} ta yozuv)")
    print(HELP_TEXT)

    while True:
        try:
            cmd = input(">> ").strip()
        except (EOFError, KeyboardInterrupt):
            print()
            break

        if not cmd:
            continue

        if cmd in ("exit", "quit", "q"):
            if dirty:
                confirm = input("Saqlanmagan o'zgarishlar bor. Chiqishdan oldin saqlaymi? (y/n): ").strip().lower()
                if confirm == "y":
                    save_js_array(path, var_name, lessons)
                    print("Saqlandi.")
            break

        if cmd == "help":
            print(HELP_TEXT)
            continue

        if cmd == "list":
            print_list(lessons)
            continue

        if cmd.startswith("show "):
            try:
                num = int(cmd.split(maxsplit=1)[1])
                print_show(lessons, num)
            except (IndexError, ValueError):
                print("Ishlatish: show <num>")
            continue

        if cmd == "save":
            save_js_array(path, var_name, lessons)
            dirty = False
            print(f"Saqlandi: {path}")
            continue

        if cmd == "undo":
            if not history:
                print("Bekor qiladigan narsa yo'q.")
            else:
                lessons = history.pop()
                dirty = True
                print("Oxirgi o'zgarish bekor qilindi.")
            continue

        # --- BIRLASHTIRISH: "2+3" ---
        merge_match = re.match(r"^(\d+)\s*\+\s*(\d+)$", cmd)
        if merge_match:
            n1, n2 = int(merge_match.group(1)), int(merge_match.group(2))
            if n1 == n2:
                print("Bir xil num'ni birlashtirib bo'lmaydi.")
                continue
            lo, hi = min(n1, n2), max(n1, n2)
            e1 = next((e for e in lessons if e["num"] == lo), None)
            e2 = next((e for e in lessons if e["num"] == hi), None)
            if not e1 or not e2:
                print(f"num={lo} yoki num={hi} topilmadi.")
                continue

            history.append(copy.deepcopy(lessons))

            e1["arabic"] = merge_join(e1.get("arabic"), e2.get("arabic"))
            e1["full_uz"] = merge_join(e1.get("full_uz"), e2.get("full_uz"))
            e1["note"] = merge_join(e1.get("note"), e2.get("note"))
            segs1, segs2 = e1.get("segs"), e2.get("segs")
            if segs1 and segs2:
                e1["segs"] = segs1 + segs2
            else:
                e1["segs"] = segs1 or segs2

            lessons.remove(e2)
            renumber(lessons)
            dirty = True
            print(f"num={lo} va num={hi} birlashtirildi -> yangi num={lo}:")
            print_show(lessons, lo)
            continue

        # --- O'CHIRISH: "d 3" ---
        del_match = re.match(r"^d\s+(\d+)$", cmd)
        if del_match:
            num = int(del_match.group(1))
            entry = next((e for e in lessons if e["num"] == num), None)
            if not entry:
                print(f"num={num} topilmadi.")
                continue
            history.append(copy.deepcopy(lessons))
            lessons.remove(entry)
            renumber(lessons)
            dirty = True
            print(f"num={num} o'chirildi, qolganlari qayta raqamlandi.")
            continue

        # --- KO'P QATORLI OBYEKT JOYLASHTIRISH: "paste" ---
        # MUHIM: ba'zan "paste" so'zidan keyin, alohida Enter bosilmasdan,
        # butun blok bir zumda kelib, birinchi qator ("{") "paste"ning
        # o'zi bilan qo'shilib "paste {" bo'lib qoladi. Shuning uchun aniq
        # "paste" emas, "paste" bilan BOSHLANGAN har qanday qatorni qabul
        # qilamiz, va undan keyingi qismni BIRINCHI qator sifatida olamiz.
        if cmd == "paste" or cmd.startswith("paste "):
            first_extra = cmd[len("paste"):].strip()
            print("Obyektni joylashtiring (ko'p qatorli bo'lishi mumkin).")
            print("Tugatgach, ALOHIDA qatorda faqat END yozing va Enter bosing:")
            lines = []
            if first_extra:
                lines.append(first_extra)
            while True:
                try:
                    line = input()
                except EOFError:
                    break
                if line.strip().upper() == "END":
                    break
                lines.append(line)
            raw = "\n".join(lines).strip()
            # Ehtiyot chorasi: ba'zi terminallar ko'p qatorli joylashtirishda
            # ko'rinmas "bracketed paste" belgilarini qo'shib yuborishi
            # mumkin — bularni tozalaymiz.
            raw = re.sub(r"\x1b\[20[01]~", "", raw)
            raw = raw.rstrip(",").strip()   # oxiridagi vergul (massiv ichidan
                                             # nusxalanganda qoladigan) olib tashlanadi
            if not raw:
                print("Bo'sh kiritildi, bekor qilindi.")
                continue
            try:
                obj = json5.loads(raw)
            except Exception as e:
                print(f"JSON5 xatosi: {e}")
                continue
            if not isinstance(obj, dict):
                print("Xato: bitta obyekt ({ ... }) kutilgan edi.")
                continue
            if "num" not in obj:
                print("Xato: obyektda 'num' maydoni bo'lishi shart.")
                continue

            history.append(copy.deepcopy(lessons))
            new_num = int(obj["num"])
            insert_at = min(max(new_num - 1, 0), len(lessons))
            lessons.insert(insert_at, obj)
            renumber(lessons)
            dirty = True
            print(f"Yangi yozuv num={new_num} pozitsiyasiga qo'shildi, qolganlari surildi:")
            print_show(lessons, new_num)
            continue

        # --- QO'SHISH: 'a n=3, a="...", u="...", ...' ---
        if cmd.startswith("a ") or cmd.startswith("a\t"):
            raw = cmd[2:].strip()
            try:
                fields = parse_add_fields(raw)
            except ValueError as e:
                print(f"Xato: {e}")
                continue
            if "n" not in fields:
                print("Xato: 'n=<num>' majburiy.")
                continue

            history.append(copy.deepcopy(lessons))

            new_num = int(fields["n"])
            new_entry = build_entry_from_fields(fields)
            insert_at = min(max(new_num - 1, 0), len(lessons))
            lessons.insert(insert_at, new_entry)
            renumber(lessons)
            dirty = True
            print(f"Yangi yozuv num={new_num} pozitsiyasiga qo'shildi:")
            print_show(lessons, new_num)
            continue

        print("Noma'lum buyruq. 'help' deb yozing.")


if __name__ == "__main__":
    main()
