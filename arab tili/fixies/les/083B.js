const lessons = [
  {
    "num": 1,
    "time": "00:00:30,000 --> 00:00:35,380",
    "arabic": "التَّعْلِيمَاتُ",
    "segs": null,
    "full_uz": "Yo'riqnoma.",
    "note": null
  },
  {
    "num": 2,
    "time": "00:00:35,380 --> 00:00:45,140",
    "arabic": "إِنَّهَا لَا تَعْمَلُ",
    "segs": null,
    "full_uz": "U ishlamayapti.",
    "note": null
  },
  {
    "num": 3,
    "time": "00:00:45,140 --> 00:00:46,980",
    "arabic": "حَاوِلْ وَضْعَهَا فِي الِاتِّجَاهِ الْآخَرِ",
    "segs": null,
    "full_uz": "Uni boshqa tomonga qo'yib ko'r.",
    "note": null
  },
  {
    "num": 4,
    "time": "00:00:46,980 --> 00:00:48,500",
    "arabic": "هَلْ قَرَأْتَ التَّعْلِيمَاتِ؟",
    "segs": null,
    "full_uz": "Yo'riqnomani o'qidingmi?",
    "note": null
  },
  {
    "num": 5,
    "time": "00:00:48,500 --> 00:00:51,280",
    "arabic": "وَلِمَ أَفْعَلُ؟ التَّعْلِيمَاتُ هِيَ لِلْحَمْقَى",
    "segs": [
      { "ar": "وَلِمَ أَفْعَلُ؟", "uz": "Nega o'qishim kerak?" },
      { "ar": "التَّعْلِيمَاتُ هِيَ لِلْحَمْقَى", "uz": "yo'riqnoma ahmoqlar uchun-ku" }
    ],
    "full_uz": "Nega o'qishim kerak? Yo'riqnoma ahmoqlar uchun-ku.",
    "note": null
  },
  {
    "num": 6,
    "time": "00:00:51,280 --> 00:00:53,659",
    "arabic": "أَجَلْ يَا سِيمْكَا التَّعْلِيمَاتُ لِلْحَمْقَى",
    "segs": null,
    "full_uz": "Ha, Simka, yo'riqnoma ahmoqlar uchun.",
    "note": null
  },
  {
    "num": 7,
    "time": "00:00:53,659 --> 00:00:55,379",
    "arabic": "حَسَنًا",
    "segs": null,
    "full_uz": "Xo'p.",
    "note": null
  },
  {
    "num": 8,
    "time": "00:00:55,379 --> 00:00:56,920",
    "arabic": "هَيَّا عَمَلِي",
    "segs": null,
    "full_uz": "Qani, mening ishim.",
    "note": null
  },
  {
    "num": 9,
    "time": "00:00:56,920 --> 00:00:59,679",
    "arabic": "وَاوْ مُدْخَلَتِي",
    "segs": null,
    "full_uz": "Voy, mening kirim qismim!",
    "note": null
  },
  {
    "num": 10,
    "time": "00:00:59,679 --> 00:01:06,740",
    "arabic": "تُخْبِرُنَا التَّعْلِيمَاتُ كَيْفَ نُنَفِّذُ الْأُمُورَ تَنْفِيذًا صَحِيحًا",
    "segs": null,
    "full_uz": "Yo'riqnoma bizga ishlarni qanday to'g'ri bajarishni aytib beradi.",
    "note": null
  },
  {
    "num": 11,
    "time": "00:01:06,740 --> 00:01:10,400",
    "arabic": "فَتَعْلِيمَاتُ قِطْعَةٍ مِنَ الْأَثَاثِ تُوَضِّحُ طَرِيقَةَ تَرْكِيبِهَا",
    "segs": null,
    "full_uz": "Mebel qismining yo'riqnomasi uni qanday yig'ishni tushuntiradi,",
    "note": null
  },
  {
    "num": 12,
    "time": "00:01:10,400 --> 00:01:15,480",
    "arabic": "وَبِقِرَاءَةِ تَعْلِيمَاتِ التِّلْفَازِ يُمْكِنُنَا تَعْدِيلُ الصُّورَةِ وَالصَّوْتِ كَيْفَمَا نُرِيدُ",
    "segs": null,
    "full_uz": "televizor yo'riqnomasini o'qib esa tasvir va ovozni xohlagancha sozlashimiz mumkin.",
    "note": null
  },
  {
    "num": 13,
    "time": "00:01:15,480 --> 00:01:18,960",
    "arabic": "وَالطِّبَاعَةُ الَّتِي عَلَى عُلْبَةِ الدَّقِيقِ هِيَ عَنْ طَرِيقَةِ طَهْوِهِ",
    "segs": null,
    "full_uz": "Un qutisidagi yozuv esa uni qanday pishirish haqida.",
    "note": null
  },
  {
    "num": 14,
    "time": "00:01:18,960 --> 00:01:24,620",
    "arabic": "أَمَّا إِرْشَادَاتُ الدَّوَاءِ فَتُخْبِرُنَا عَنِ اسْتِطْبَابَاتِ هَذَا الدَّوَاءِ وَالطَّرِيقَةِ الْآمِنَةِ لِاسْتِعْمَالِهِ",
    "segs": [
      { "ar": "أَمَّا إِرْشَادَاتُ الدَّوَاءِ", "uz": "dori-darmon yo'riqnomasi esa" },
      { "ar": "فَتُخْبِرُنَا عَنِ اسْتِطْبَابَاتِ هَذَا الدَّوَاءِ وَالطَّرِيقَةِ الْآمِنَةِ لِاسْتِعْمَالِهِ", "uz": "bu dorining qo'llanilish ko'rsatmalari va uni xavfsiz ishlatish yo'lini bizga aytib beradi" }
    ],
    "full_uz": "Dori-darmon yo'riqnomasi esa bu dorining qo'llanilish ko'rsatmalari va uni xavfsiz ishlatish yo'lini bizga aytib beradi.",
    "note": "SRTda 'استثبابات' deb yozilgan, to'g'ri imlosi 'اسْتِطْبَابَات' (dorining tibbiy qo'llanilish ko'rsatmalari) bo'ladi."
  },
  {
    "num": 15,
    "time": "00:01:24,620 --> 00:01:29,520",
    "arabic": "إِذَنْ قُمْ بِقِرَاءَةِ التَّعْلِيمَاتِ وَنَفِّذْهَا إِنْ أَرَدْتَ أَنْ تَتَجَنَّبَ كَثِيرًا مِنَ الْمَتَاعِبِ",
    "segs": null,
    "full_uz": "Shuning uchun, agar ko'p muammolardan qochmoqchi bo'lsang, yo'riqnomani o'qib, unga amal qil.",
    "note": "SRTda 'تتجلب' deb yozilgan, mazmunga ko'ra to'g'risi 'تَتَجَنَّبَ' (qochmoq, saqlanmoq) bo'lishi kerak."
  },
  {
    "num": 16,
    "time": "00:01:29,520 --> 00:01:33,939",
    "arabic": "وَجَدْتُهَا، هَا هِيَ ذِي",
    "segs": [
      { "ar": "وَجَدْتُهَا", "uz": "Topdim!" },
      { "ar": "هَا هِيَ ذِي", "uz": "mana u" }
    ],
    "full_uz": "Topdim! Mana u.",
    "note": null
  },
  {
    "num": 17,
    "time": "00:01:33,939 --> 00:01:37,939",
    "arabic": "مَرْحَبًا يَا تُومُ",
    "segs": null,
    "full_uz": "Salom, Tom.",
    "note": null
  },
  {
    "num": 18,
    "time": "00:01:37,939 --> 00:01:41,620",
    "arabic": "أَحْضَرْتُ لَكَ كُرْسِيًّا، وَلَكِنْ يَجِبُ تَرْكِيبُهُ",
    "segs": [
      { "ar": "أَحْضَرْتُ لَكَ كُرْسِيًّا", "uz": "senga bir stul olib keldim" },
      { "ar": "وَلَكِنْ يَجِبُ تَرْكِيبُهُ", "uz": "lekin uni yig'ish kerak" }
    ],
    "full_uz": "Senga bir stul olib keldim, lekin uni yig'ish kerak.",
    "note": null
  },
  {
    "num": 19,
    "time": "00:01:42,180 --> 00:01:44,960",
    "arabic": "وَأَخْشَى أَنَّ فِعْلَ ذَلِكَ صَعْبٌ عَلَيْكَ قَلِيلًا",
    "segs": null,
    "full_uz": "Va qo'rqamanki, buni qilish senga biroz qiyinroq bo'lar.",
    "note": null
  },
  {
    "num": 20,
    "time": "00:01:44,960 --> 00:01:47,960",
    "arabic": "لَيْسَ صَعْبًا، لَا تَقْلَقْ يَا أَبِي، سَأَفْعَلُ ذَلِكَ",
    "segs": [
      { "ar": "لَيْسَ صَعْبًا", "uz": "Qiyin emas" },
      { "ar": "لَا تَقْلَقْ يَا أَبِي، سَأَفْعَلُ ذَلِكَ", "uz": "xavotir olma, ota, men qilaman" }
    ],
    "full_uz": "Qiyin emas. Xavotir olma, ota, men qilaman.",
    "note": null
  },
  {
    "num": 21,
    "time": "00:01:47,960 --> 00:01:50,840",
    "arabic": "أَنْهِهِ قَبْلَ الْعَشَاءِ لِتَحْصُلَ عَلَى الْمُثَلَّجَاتِ",
    "segs": null,
    "full_uz": "Kechki ovqatgacha tugat, shunda muzqaymoq olasan.",
    "note": null
  },
  {
    "num": 22,
    "time": "00:01:50,840 --> 00:01:53,000",
    "arabic": "بِالْكَرِيمَةِ، اثْنَتَانِ",
    "segs": null,
    "full_uz": "Qaymoqli, ikkitasini.",
    "note": "اثْنَتَانِ — ikkilik (dual) shakl, ayol jinsidagi ikkita narsaga ('ikkitasi') qaratilgan sanoq so'zi."
  },
  {
    "num": 23,
    "time": "00:01:53,000 --> 00:01:54,719",
    "arabic": "قُمْ بِتَرْكِيبِهِ أَوَّلًا",
    "segs": null,
    "full_uz": "Avval uni yig'ib ol.",
    "note": null
  },
  {
    "num": 24,
    "time": "00:01:54,719 --> 00:01:59,840",
    "arabic": "يَا تُومُ هَلْ يُمْكِنُنَا تَرْكِيبُهُ مَعًا؟",
    "segs": null,
    "full_uz": "Tom, uni birga yig'sak bo'ladimi?",
    "note": null
  },
  {
    "num": 25,
    "time": "00:01:59,840 --> 00:02:00,319",
    "arabic": "هَيَّا",
    "segs": null,
    "full_uz": "Mayli.",
    "note": null
  },
  {
    "num": 26,
    "time": "00:02:00,319 --> 00:02:03,400",
    "arabic": "لَحْظَةً عَلَيْكَ قِرَاءَةُ التَّعْلِيمَاتِ أَوَّلًا",
    "segs": [
      { "ar": "لَحْظَةً", "uz": "Bir daqiqa" },
      { "ar": "عَلَيْكَ قِرَاءَةُ التَّعْلِيمَاتِ أَوَّلًا", "uz": "avval yo'riqnomani o'qishing kerak" }
    ],
    "full_uz": "Bir daqiqa, avval yo'riqnomani o'qishing kerak.",
    "note": null
  },
  {
    "num": 27,
    "time": "00:02:03,400 --> 00:02:05,219",
    "arabic": "سِيمْكَا لَا تَكُونِي مُمِلَّةً",
    "segs": null,
    "full_uz": "Simka, zerikarli bo'lma.",
    "note": null
  },
  {
    "num": 28,
    "time": "00:02:05,219 --> 00:02:08,080",
    "arabic": "أَجَلْ وَكَأَنِّي لَمْ أَرَ كُرْسِيًّا مِنْ قَبْلُ",
    "segs": null,
    "full_uz": "Ha, xuddi men ilgari stul ko'rmagandek.",
    "note": null
  },
  {
    "num": 29,
    "time": "00:02:08,080 --> 00:02:10,860",
    "arabic": "أَوْ كَأَنِّي لَمْ أَرَ كُرْسِيًّا مِنْ قَبْلُ",
    "segs": null,
    "full_uz": "Yoki xuddi men ilgari stul ko'rmagandek.",
    "note": null
  },
  {
    "num": 30,
    "time": "00:02:23,000 --> 00:02:47,840",
    "arabic": "حَسَنًا يَا تُومُ هَلِ انْتَهَيْتَ؟",
    "segs": null,
    "full_uz": "Xo'p, Tom, tugatdingmi?",
    "note": null
  },
  {
    "num": 31,
    "time": "00:02:47,840 --> 00:02:49,420",
    "arabic": "الْعَشَاءُ مُهَيَّأٌ هَيَّا بِنَا",
    "segs": [
      { "ar": "الْعَشَاءُ مُهَيَّأٌ", "uz": "kechki ovqat tayyor" },
      { "ar": "هَيَّا بِنَا", "uz": "yuring, ketdik" }
    ],
    "full_uz": "Kechki ovqat tayyor, yuring, ketdik.",
    "note": null
  },
  {
    "num": 32,
    "time": "00:02:49,420 --> 00:02:51,759",
    "arabic": "لَا يَا أَبِي أَحْتَاجُ إِلَى دَقِيقَتَيْنِ",
    "segs": null,
    "full_uz": "Yo'q, ota, menga ikki daqiqa kerak.",
    "note": "دَقِيقَتَيْنِ — ikkilik (dual) shakl, 'ikki daqiqa' ma'nosini bildiradi."
  },
  {
    "num": 33,
    "time": "00:02:51,759 --> 00:02:55,359",
    "arabic": "سِيمْكَا سَاعِدِينِي",
    "segs": null,
    "full_uz": "Simka, menga yordam ber.",
    "note": null
  },
  {
    "num": 34,
    "time": "00:02:55,359 --> 00:02:57,000",
    "arabic": "كَيْفَ؟",
    "segs": null,
    "full_uz": "Qanday?",
    "note": null
  },
  {
    "num": 35,
    "time": "00:02:57,000 --> 00:02:59,219",
    "arabic": "مَا الَّذِي جَاءَ فِي تَعْلِيمَاتِ التَّرْكِيبِ؟",
    "segs": null,
    "full_uz": "Yig'ish yo'riqnomasida nima deyilgan edi?",
    "note": null
  },
  {
    "num": 36,
    "time": "00:02:59,219 --> 00:03:01,959",
    "arabic": "قُلْتَ إِنَّكَ سَتُرَكِّبُهُ بِنَفْسِكَ",
    "segs": null,
    "full_uz": "O'zim yig'aman deb aytding-ku.",
    "note": null
  },
  {
    "num": 37,
    "time": "00:03:01,959 --> 00:03:04,239",
    "arabic": "حَسَنًا سَأُسَاعِدُكَ",
    "segs": null,
    "full_uz": "Xo'p, senga yordam beraman.",
    "note": null
  },
  {
    "num": 38,
    "time": "00:03:04,239 --> 00:03:06,280",
    "arabic": "لِنَنْظُرْ",
    "segs": null,
    "full_uz": "Qani, qaraylik.",
    "note": null
  },
  {
    "num": 39,
    "time": "00:03:06,280 --> 00:03:09,180",
    "arabic": "خُذْ هَذَا الْجُزْءَ هُنَا وَذَاكَ هُنَاكَ",
    "segs": [
      { "ar": "خُذْ هَذَا الْجُزْءَ هُنَا", "uz": "bu qismni shu yerdan ol" },
      { "ar": "وَذَاكَ هُنَاكَ", "uz": "va anavini u yerdan" }
    ],
    "full_uz": "Bu qismni shu yerdan ol, va anavini u yerdan.",
    "note": null
  },
  {
    "num": 40,
    "time": "00:03:09,180 --> 00:03:11,500",
    "arabic": "نُولِيكْ أَحْضِرْ بَزَّالَكَ",
    "segs": null,
    "full_uz": "Nolik, o'z otvertkangni olib kel.",
    "note": null
  },
  {
    "num": 41,
    "time": "00:03:11,500 --> 00:03:14,699",
    "arabic": "بَلِ الْأَطْوَلَ إِنَّهُ هُنَاكَ",
    "segs": null,
    "full_uz": "Yo'q, uzunroqini, u anavi yerda.",
    "note": null
  },
  {
    "num": 42,
    "time": "00:03:16,500 --> 00:03:21,079",
    "arabic": "إِنَّ أَقْدَمَ الْكَرَاسِي وَالْمَقَاعِدِ كَانَ فِي مِصْرَ الْقَدِيمَةِ",
    "segs": null,
    "full_uz": "Eng qadimgi stul va o'rindiqlar Qadimgi Misrda bo'lgan.",
    "note": null
  },
  {
    "num": 43,
    "time": "00:03:21,080 --> 00:03:25,020",
    "arabic": "وَكَانَ مَقْعَدُ الْفِرْعَوْنِ مُمَيَّزًا لِأَنَّهُ كَانَ لَدَيْهِ ظَهْرٌ",
    "segs": [
      { "ar": "وَكَانَ مَقْعَدُ الْفِرْعَوْنِ مُمَيَّزًا", "uz": "fir'avnning o'rindig'i alohida ajralib turardi" },
      { "ar": "لِأَنَّهُ كَانَ لَدَيْهِ ظَهْرٌ", "uz": "chunki uning suyanchig'i bor edi" }
    ],
    "full_uz": "Fir'avnning o'rindig'i alohida ajralib turardi, chunki uning suyanchig'i bor edi.",
    "note": null
  },
  {
    "num": 44,
    "time": "00:03:25,020 --> 00:03:29,300",
    "arabic": "وَمِنَ الْمُعْتَقَدِ أَنَّ كُرْسِيَّ الْفِرْعَوْنِ كَانَ فِي الْوَاقِعِ أَوَّلَ كُرْسِيٍّ",
    "segs": null,
    "full_uz": "Fir'avnning stuli aslida birinchi stul bo'lgan degan taxmin bor.",
    "note": null
  },
  {
    "num": 45,
    "time": "00:03:29,300 --> 00:03:32,460",
    "arabic": "فَقَدْ عُدَّ الْكُرْسِيُّ رَفَاهِيَةً زَمَنًا طَوِيلًا",
    "segs": null,
    "full_uz": "Uzoq vaqt davomida stul hashamat hisoblangan.",
    "note": null
  },
  {
    "num": 46,
    "time": "00:03:32,460 --> 00:03:36,140",
    "arabic": "وَكَانَ الْأَغْنِيَاءُ يُحْضِرُونَ كَرَاسِيَّهُمُ الْخَاصَّةَ إِلَى الْحَفَلَاتِ",
    "segs": null,
    "full_uz": "Boylar o'z shaxsiy stullarini bazmlarga olib borishardi,",
    "note": null
  },
  {
    "num": 47,
    "time": "00:03:36,140 --> 00:03:40,000",
    "arabic": "وَكُلَّمَا كَانَ الشَّخْصُ مُهِمًّا كَانَ ظَهْرُ كُرْسِيِّهِ أَعْلَى",
    "segs": [
      { "ar": "وَكُلَّمَا كَانَ الشَّخْصُ مُهِمًّا", "uz": "shaxs qanchalik muhim bo'lsa" },
      { "ar": "كَانَ ظَهْرُ كُرْسِيِّهِ أَعْلَى", "uz": "uning stulining suyanchig'i shunchalik baland bo'lardi" }
    ],
    "full_uz": "Shaxs qanchalik muhim bo'lsa, uning stulining suyanchig'i shunchalik baland bo'lardi.",
    "note": null
  },
  {
    "num": 48,
    "time": "00:03:40,000 --> 00:03:44,939",
    "arabic": "وَلَمْ يُصْبِحِ الْكُرْسِيُّ جُزْءًا مِنْ كُلِّ بَيْتٍ حَتَّى الْقَرْنِ التَّاسِعَ عَشَرَ",
    "segs": null,
    "full_uz": "Stul har bir uyning ajralmas qismiga faqat XIX asrga kelib aylandi.",
    "note": null
  },
  {
    "num": 49,
    "time": "00:03:44,939 --> 00:03:49,000",
    "arabic": "الْيَوْمَ هُنَاكَ كَثِيرٌ مِنَ الْأَنْوَاعِ مِنَ الْكَرَاسِي",
    "segs": null,
    "full_uz": "Bugungi kunda stullarning juda ko'p turi bor.",
    "note": null
  },
  {
    "num": 50,
    "time": "00:03:49,000 --> 00:03:55,680",
    "arabic": "هُنَاكَ كَرَاسِي خَشَبِيَّةٌ وَبَلَاسْتِيكِيَّةٌ وَمَعْدِنِيَّةٌ وَمِنْهَا بِسِيقَانٍ أَوْ بِعَجَلَاتٍ",
    "segs": null,
    "full_uz": "Yog'och, plastik va metall stullar bor, ba'zilari oyoqli, ba'zilari g'ildirakli.",
    "note": null
  },
  {
    "num": 51,
    "time": "00:03:55,680 --> 00:03:59,080",
    "arabic": "وَمِنْهَا الْقَابِلَةُ لِلطَّيِّ وَمِنْهَا لِلرُّضَّعِ",
    "segs": null,
    "full_uz": "Ba'zilari yig'iladigan, ba'zilari esa chaqaloqlar uchun.",
    "note": null
  },
  {
    "num": 52,
    "time": "00:03:59,080 --> 00:04:00,819",
    "arabic": "أَيْ كُلُّ أَنْوَاعِ الْكَرَاسِي",
    "segs": null,
    "full_uz": "Ya'ni, stullarning barcha turi.",
    "note": null
  },
  {
    "num": 53,
    "time": "00:04:00,819 --> 00:04:04,000",
    "arabic": "كَيْفَ سَيَجْلِسُ النَّاسُ عَلَى الْمَنْضَدَةِ مِنْ غَيْرِ كَرَاسِيَّ؟",
    "segs": null,
    "full_uz": "Odamlar stulsiz stol atrofida qanday o'tirishadi?",
    "note": null
  },
  {
    "num": 54,
    "time": "00:04:06,879 --> 00:04:09,319",
    "arabic": "أَظُنُّ أَنَّنَا سَنَنْجَحُ",
    "segs": null,
    "full_uz": "Menimcha, uddalaymiz.",
    "note": null
  },
  {
    "num": 55,
    "time": "00:04:09,319 --> 00:04:10,500",
    "arabic": "أَدِرْهُ بِسُرْعَةٍ",
    "segs": null,
    "full_uz": "Uni tez burab qo'y.",
    "note": null
  },
  {
    "num": 56,
    "time": "00:04:10,500 --> 00:04:13,680",
    "arabic": "نُولِيكْ نَحْتَاجُ إِلَى بَزَّالٍ إِضَافِيٍّ",
    "segs": null,
    "full_uz": "Nolik, bizga qo'shimcha otvertka kerak.",
    "note": null
  },
  {
    "num": 57,
    "time": "00:04:13,680 --> 00:04:14,599",
    "arabic": "لَكِنْ لَيْسَ لَدَيْنَا",
    "segs": null,
    "full_uz": "Lekin bizda yo'q.",
    "note": null
  },
  {
    "num": 58,
    "time": "00:04:14,599 --> 00:04:16,060",
    "arabic": "بَلْ لَدَيْنَا ابْحَثْ عَنْهُ",
    "segs": [
      { "ar": "بَلْ لَدَيْنَا", "uz": "Yo'q, bor" },
      { "ar": "ابْحَثْ عَنْهُ", "uz": "uni qidir" }
    ],
    "full_uz": "Yo'q, bor, uni qidir.",
    "note": null
  },
  {
    "num": 59,
    "time": "00:04:16,060 --> 00:04:17,360",
    "arabic": "بَحَثْتُ فِي كُلِّ مَكَانٍ",
    "segs": null,
    "full_uz": "Hamma joyni qidirdim.",
    "note": null
  },
  {
    "num": 60,
    "time": "00:04:17,360 --> 00:04:19,480",
    "arabic": "هَيَّا يَا تُومُ انْتَهَى الْوَقْتُ",
    "segs": null,
    "full_uz": "Qani, Tom, vaqt tugadi.",
    "note": null
  },
  {
    "num": 61,
    "time": "00:04:19,480 --> 00:04:20,960",
    "arabic": "نُولِيكْ هَيَّا سَاعِدْنِي",
    "segs": null,
    "full_uz": "Nolik, qani, yordam ber.",
    "note": null
  },
  {
    "num": 62,
    "time": "00:04:20,960 --> 00:04:21,620",
    "arabic": "كَيْفَ؟",
    "segs": null,
    "full_uz": "Qanday?",
    "note": null
  },
  {
    "num": 63,
    "time": "00:04:21,620 --> 00:04:24,259",
    "arabic": "اظْهَرْ بِشَكْلِ بَزَّالٍ مُدَّةَ دَقِيقَةٍ فَقَطْ",
    "segs": null,
    "full_uz": "Faqat bir daqiqagina otvertka bo'lib ko'rin.",
    "note": null
  },
  {
    "num": 64,
    "time": "00:04:24,259 --> 00:04:26,439",
    "arabic": "إِنْ كَانَتْ دَقِيقَةً فَسَأَفْعَلُ لِأَجْلِكَ",
    "segs": [
      { "ar": "إِنْ كَانَتْ دَقِيقَةً", "uz": "agar bir daqiqa bo'lsa" },
      { "ar": "فَسَأَفْعَلُ لِأَجْلِكَ", "uz": "sen uchun qilaman" }
    ],
    "full_uz": "Agar bir daqiqa bo'lsa, sen uchun qilaman.",
    "note": null
  },
  {
    "num": 65,
    "time": "00:04:26,439 --> 00:04:32,520",
    "arabic": "انْتَهَيْتُ",
    "segs": null,
    "full_uz": "Tugatdim.",
    "note": null
  },
  {
    "num": 66,
    "time": "00:04:32,520 --> 00:04:34,020",
    "arabic": "لَقَدْ رَكَّبْتَهُ",
    "segs": null,
    "full_uz": "Sen uni yig'ib qo'yibsan!",
    "note": null
  },
  {
    "num": 67,
    "time": "00:04:34,020 --> 00:04:37,160",
    "arabic": "عَمَلٌ رَائِعٌ يَا بُنَيَّ",
    "segs": null,
    "full_uz": "Ajoyib ish, o'g'lim.",
    "note": null
  },
  {
    "num": 68,
    "time": "00:04:37,160 --> 00:04:40,300",
    "arabic": "أُمِّي لَقَدْ رَبِحْتُ التَّحَدِّيَ",
    "segs": null,
    "full_uz": "Onajon, men musobaqada g'olib chiqdim.",
    "note": null
  },
  {
    "num": 69,
    "time": "00:04:40,300 --> 00:04:43,460",
    "arabic": "هَلْ تُصَدِّقِينَ؟ لَقَدْ رَكَّبَهُ وَحْدَهُ",
    "segs": [
      { "ar": "هَلْ تُصَدِّقِينَ؟", "uz": "Ishonasanmi?" },
      { "ar": "لَقَدْ رَكَّبَهُ وَحْدَهُ", "uz": "uni yolg'iz o'zi yig'ib qo'ydi" }
    ],
    "full_uz": "Ishonasanmi? Uni yolg'iz o'zi yig'ib qo'ydi.",
    "note": null
  },
  {
    "num": 70,
    "time": "00:04:43,460 --> 00:04:45,400",
    "arabic": "أَنْتَ ذَكِيٌّ جِدًّا",
    "segs": null,
    "full_uz": "Sen juda aqllisan.",
    "note": null
  },
  {
    "num": 71,
    "time": "00:04:45,400 --> 00:04:46,620",
    "arabic": "هَيَّا اجْلِسِي",
    "segs": null,
    "full_uz": "Qani, o'tir.",
    "note": null
  },
  {
    "num": 72,
    "time": "00:04:47,360 --> 00:04:54,060",
    "arabic": "نَجَوْنَا",
    "segs": null,
    "full_uz": "Qutuldik!",
    "note": null
  },
  {
    "num": 73,
    "time": "00:04:54,060 --> 00:04:59,180",
    "arabic": "الْآنَ فَهِمْتُ، نَسِيتُ بَزَّالًا",
    "segs": [
      { "ar": "الْآنَ فَهِمْتُ", "uz": "endi tushundim" },
      { "ar": "نَسِيتُ بَزَّالًا", "uz": "bitta otvertkani unutib qo'yibman" }
    ],
    "full_uz": "Endi tushundim, bitta otvertkani unutib qo'yibman.",
    "note": null
  },
  {
    "num": 74,
    "time": "00:04:59,180 --> 00:05:02,879",
    "arabic": "وَلَكِنَّنِي أَدَرْتُهُ لَا شَكَّ أَنَّهُ لَا شَكَّ",
    "segs": null,
    "full_uz": "Lekin men uni buradim-ku, shubhasiz, shubhasiz.",
    "note": null
  },
  {
    "num": 75,
    "time": "00:05:02,879 --> 00:05:04,379",
    "arabic": "لَا شَكَّ أَنَّهُ مَاذَا",
    "segs": null,
    "full_uz": "Shubhasiz nima?",
    "note": null
  },
  {
    "num": 76,
    "time": "00:05:04,379 --> 00:05:09,139",
    "arabic": "انْظُرْ هَا هُوَ ذَا",
    "segs": null,
    "full_uz": "Qara, mana u.",
    "note": null
  },
  {
    "num": 77,
    "time": "00:05:09,139 --> 00:05:16,500",
    "arabic": "الْآنَ أَصْبَحَ كَمَا يَجِبُ وَتِلْكَ الْمُثَلَّجَاتُ لَقَدْ خَسِرْتَهَا",
    "segs": [
      { "ar": "الْآنَ أَصْبَحَ كَمَا يَجِبُ", "uz": "endi u kerakligidek bo'ldi" },
      { "ar": "وَتِلْكَ الْمُثَلَّجَاتُ لَقَدْ خَسِرْتَهَا", "uz": "va o'sha muzqaymoqni esa yo'qotding" }
    ],
    "full_uz": "Endi u kerakligidek bo'ldi, va o'sha muzqaymoqni esa yo'qotding.",
    "note": null
  },
  {
    "num": 78,
    "time": "00:05:16,500 --> 00:05:19,560",
    "arabic": "حَسَنًا يَا بَانِيَ الْكَرَاسِي، إِلَى الْعَشَاءِ",
    "segs": null,
    "full_uz": "Xo'p, stul quruvchi, kechki ovqatga marhamat.",
    "note": null
  },
  {
    "num": 79,
    "time": "00:05:19,560 --> 00:05:21,459",
    "arabic": "أَجَلْ، لَحْظَةً",
    "segs": null,
    "full_uz": "Ha, bir daqiqa.",
    "note": null
  },
  {
    "num": 80,
    "time": "00:05:21,459 --> 00:05:26,019",
    "arabic": "أَيْنَ ذَلِكَ النُّولِيكْ؟",
    "segs": null,
    "full_uz": "O'sha Nolik qayerda?",
    "note": null
  },
  {
    "num": 81,
    "time": "00:05:26,019 --> 00:05:26,800",
    "arabic": "لَقَدْ هَرَبَ",
    "segs": null,
    "full_uz": "U qochib ketdi.",
    "note": null
  },
  {
    "num": 82,
    "time": "00:05:26,800 --> 00:05:28,000",
    "arabic": "إِنَّهُ خَائِنٌ",
    "segs": null,
    "full_uz": "U xoin.",
    "note": null
  },
  {
    "num": 83,
    "time": "00:05:28,000 --> 00:05:34,379",
    "arabic": "لَيْسَ كَذَلِكَ، لَقَدْ وَعَدْتُهُ بِأَنْ يَظْهَرَ بِشَكْلِ بَزَّالٍ دَقِيقَةً وَاحِدَةً وَقَدِ انْتَهَتِ الدَّقِيقَةُ",
    "segs": [
      { "ar": "لَيْسَ كَذَلِكَ", "uz": "unday emas" },
      { "ar": "لَقَدْ وَعَدْتُهُ بِأَنْ يَظْهَرَ بِشَكْلِ بَزَّالٍ دَقِيقَةً وَاحِدَةً", "uz": "men unga bir daqiqagina otvertka bo'lib turishga va'da bergan edim" },
      { "ar": "وَقَدِ انْتَهَتِ الدَّقِيقَةُ", "uz": "va o'sha daqiqa tugadi" }
    ],
    "full_uz": "Unday emas, men unga bir daqiqagina otvertka bo'lib turishga va'da bergan edim, va o'sha daqiqa tugadi.",
    "note": null
  },
  {
    "num": 84,
    "time": "00:05:34,379 --> 00:05:35,220",
    "arabic": "أَيْنَ هُوَ؟",
    "segs": null,
    "full_uz": "U qayerda?",
    "note": null
  },
  {
    "num": 85,
    "time": "00:05:35,220 --> 00:05:38,540",
    "arabic": "هُنَاكَ، إِنَّهُ يَدْرُسُ التَّعْلِيمَاتِ الْخَاصَّةَ بِالسَّاعَةِ",
    "segs": [
      { "ar": "هُنَاكَ", "uz": "Ana u yerda" },
      { "ar": "إِنَّهُ يَدْرُسُ التَّعْلِيمَاتِ الْخَاصَّةَ بِالسَّاعَةِ", "uz": "soatga oid yo'riqnomani o'rganyapti" }
    ],
    "full_uz": "Ana u yerda, soatga oid yo'riqnomani o'rganyapti.",
    "note": null
  },
  {
    "num": 86,
    "time": "00:05:38,540 --> 00:05:42,160",
    "arabic": "تُومُ، لَقَدْ وَضَعْنَا النَّوْعَ الْخَطَأَ مِنَ الْمُدَّخَرَاتِ فِي السَّاعَةِ",
    "segs": null,
    "full_uz": "Tom, biz soatga noto'g'ri turdagi batareyani solib qo'yibmiz.",
    "note": null
  },
  {
    "num": 87,
    "time": "00:05:42,160 --> 00:05:44,279",
    "arabic": "عَلَيْنَا اسْتِعْمَالُ ذَاكَ النَّوْعِ",
    "segs": null,
    "full_uz": "Bizga o'sha turini ishlatishimiz kerak.",
    "note": null
  },
  {
    "num": 88,
    "time": "00:05:44,279 --> 00:05:46,240",
    "arabic": "أَرَأَيْتَ يَا تُومُ؟",
    "segs": null,
    "full_uz": "Ko'rdingmi, Tom?",
    "note": null
  },
  {
    "num": 89,
    "time": "00:05:46,500 --> 00:05:49,680",
    "arabic": "إِنْ كُنْتَ لَا تُرِيدُ أَنْ تَكُونَ أَحْمَقَ فَاتَّبِعِ التَّعْلِيمَاتِ",
    "segs": [
      { "ar": "إِنْ كُنْتَ لَا تُرِيدُ أَنْ تَكُونَ أَحْمَقَ", "uz": "agar ahmoq bo'lishni istamasang" },
      { "ar": "فَاتَّبِعِ التَّعْلِيمَاتِ", "uz": "yo'riqnomaga amal qil" }
    ],
    "full_uz": "Agar ahmoq bo'lishni istamasang, yo'riqnomaga amal qil.",
    "note": null
  }
];
if (typeof module !== "undefined" && module.exports) {
  module.exports = lessons;
}
