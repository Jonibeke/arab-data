const lessons = [
  {
    "num": 1,
    "time": "00:00:04,400 --> 00:00:14,040",
    "arabic": "الْفِيكْسِيزُ هَذِهِ كَائِنَاتٌ صَغِيرَةٌ وَجَمِيلَةٌ",
    "segs": [
      { "ar": "الْفِيكْسِيزُ", "uz": "Fiksiylar" },
      { "ar": "هَذِهِ كَائِنَاتٌ صَغِيرَةٌ وَجَمِيلَةٌ", "uz": "bular kichkina va chiroyli mavjudotlardir" }
    ],
    "full_uz": "Fiksiylar — bular kichkina va chiroyli mavjudotlardir.",
    "note": "Bu qo'shiq matni oldingi epizodlarda yozilgan intro qo'shig'ining boshqa (muqobil) so'zlar bilan aytilgan varianti bo'lgani uchun yangi deb yozildi."
  },
  {
    "num": 2,
    "time": "00:00:08,120 --> 00:00:21,439",
    "arabic": "رُؤْيَتُهَا بِعَدَسَاتٍ شِبْهُ مُسْتَحِيلَةٍ، بِسَبَبِ صِغَرِ حَجْمِهَا يَصْعُبُ رُؤْيَتُهَا",
    "segs": [
      { "ar": "رُؤْيَتُهَا بِعَدَسَاتٍ شِبْهُ مُسْتَحِيلَةٍ", "uz": "ularni linzalar bilan ko'rish deyarli mumkin emas" },
      { "ar": "بِسَبَبِ صِغَرِ حَجْمِهَا يَصْعُبُ رُؤْيَتُهَا", "uz": "kichikligi sababli ularni ko'rish qiyin" }
    ],
    "full_uz": "Ularni linzalar bilan ko'rish deyarli mumkin emas, kichikligi sababli ularni ko'rish qiyin.",
    "note": null
  },
  {
    "num": 3,
    "time": "00:00:16,600 --> 00:00:30,000",
    "arabic": "الْفِيكْسِيزُ مَا هُوَ شَكْلُهَا وَمَا هُوَ سِرُّهَا؟",
    "segs": [
      { "ar": "الْفِيكْسِيزُ", "uz": "Fiksiylar" },
      { "ar": "مَا هُوَ شَكْلُهَا وَمَا هُوَ سِرُّهَا", "uz": "ularning ko'rinishi qanday va siri nima" }
    ],
    "full_uz": "Fiksiylar — ularning ko'rinishi qanday va siri nima?",
    "note": null
  },
  {
    "num": 4,
    "time": "00:00:21,439 --> 00:00:37,480",
    "arabic": "مَنْ يُصْلِحُ آلَاتِنَا وَكُلَّ الْكَائِنَاتِ، أَجْهِزَتَنَا هَوَاتِفَنَا وَأَيْضًا شَاشَاتِنَا",
    "segs": [
      { "ar": "مَنْ يُصْلِحُ آلَاتِنَا وَكُلَّ الْكَائِنَاتِ", "uz": "mashinalarimizni va barcha jihozlarimizni kim tuzatadi" },
      { "ar": "أَجْهِزَتَنَا هَوَاتِفَنَا وَأَيْضًا شَاشَاتِنَا", "uz": "jihozlarimiz, telefonlarimiz va ekranlarimizni ham" }
    ],
    "full_uz": "Mashinalarimizni va barcha jihozlarimizni — jihozlarimiz, telefonlarimiz va ekranlarimizni ham — kim tuzatadi?",
    "note": null
  },
  {
    "num": 5,
    "time": "00:00:30,000 --> 00:00:32,899",
    "arabic": "لَا وَقْتَ بِدُونِهَا",
    "segs": null,
    "full_uz": "Ularsiz vaqt yo'q.",
    "note": null
  },
  {
    "num": 6,
    "time": "00:00:32,899 --> 00:00:34,799",
    "arabic": "لَا شَمْسَ سَاطِعَةً",
    "segs": null,
    "full_uz": "Yorqin quyosh ham yo'q.",
    "note": null
  },
  {
    "num": 7,
    "time": "00:00:39,299 --> 00:00:46,480",
    "arabic": "رَأَيْتُهَا بِجَانِبِي",
    "segs": null,
    "full_uz": "Uni yonimda ko'rdim.",
    "note": null
  },
  {
    "num": 8,
    "time": "00:00:46,480 --> 00:00:48,340",
    "arabic": "كُنْتُ أُمْسِكُ بِهَا",
    "segs": null,
    "full_uz": "Uni ushlab turgan edim.",
    "note": null
  },
  {
    "num": 9,
    "time": "00:00:48,340 --> 00:00:50,920",
    "arabic": "ذَهَبْتُ وَقُلْتُ لِوَالِدِي",
    "segs": null,
    "full_uz": "Borib dadamga aytdim,",
    "note": null
  },
  {
    "num": 10,
    "time": "00:00:50,920 --> 00:00:53,079",
    "arabic": "قَالَ هَذَا خَيَالٌ",
    "segs": null,
    "full_uz": "u «bu xayolot» dedi,",
    "note": null
  },
  {
    "num": 11,
    "time": "00:00:53,079 --> 00:00:55,280",
    "arabic": "وَصَعْبٌ أَنْ تَرَاهَا",
    "segs": null,
    "full_uz": "va uni ko'rish qiyin,",
    "note": null
  },
  {
    "num": 12,
    "time": "00:00:55,280 --> 00:00:57,100",
    "arabic": "أَوْ نَتَتَبَّعَهَا",
    "segs": null,
    "full_uz": "yoki uni kuzatib borish qiyin.",
    "note": null
  },
  {
    "num": 13,
    "time": "00:01:01,519 --> 00:01:04,259",
    "arabic": "الْفِيكْسِيزُ يُمْكِنُهَا",
    "segs": null,
    "full_uz": "Fiksiylar uddasidan chiqadi,",
    "note": null
  },
  {
    "num": 14,
    "time": "00:01:04,259 --> 00:01:06,259",
    "arabic": "أَنْ تُصْبِحَ خَبِيرَةً",
    "segs": null,
    "full_uz": "mutaxassis bo'lishga,",
    "note": null
  },
  {
    "num": 15,
    "time": "00:01:06,259 --> 00:01:08,700",
    "arabic": "وَتَبْذُلُ مَجْهُودَهَا",
    "segs": null,
    "full_uz": "va o'z kuchini sarflaydi,",
    "note": null
  },
  {
    "num": 16,
    "time": "00:01:08,700 --> 00:01:10,840",
    "arabic": "وَأَقْصَى مَا عِنْدَهَا",
    "segs": null,
    "full_uz": "va bor imkoniyatini,",
    "note": null
  },
  {
    "num": 17,
    "time": "00:01:10,840 --> 00:01:13,060",
    "arabic": "تَذْهَبُ إِلَى الْمَدْرَسَةِ",
    "segs": null,
    "full_uz": "maktabga boradi,",
    "note": null
  },
  {
    "num": 18,
    "time": "00:01:13,060 --> 00:01:14,879",
    "arabic": "تَدْرُسُ فِي الْكُلِّيَّةِ",
    "segs": null,
    "full_uz": "kollejda o'qiydi.",
    "note": null
  },
  {
    "num": 19,
    "time": "00:01:23,780 --> 00:01:26,539",
    "arabic": "تُعْطِي إِشَارَةً لِلِّقَاءِ",
    "segs": null,
    "full_uz": "Uchrashuv uchun ishora beradi,",
    "note": null
  },
  {
    "num": 20,
    "time": "00:01:26,539 --> 00:01:28,620",
    "arabic": "عَلِمْتُ بِهَا بِالصُّدْفَةِ",
    "segs": null,
    "full_uz": "men buni tasodifan bilib qoldim,",
    "note": null
  },
  {
    "num": 21,
    "time": "00:01:28,620 --> 00:01:30,980",
    "arabic": "ثَلَاثُ أَصَابِعَ فِي الْهَوَاءِ",
    "segs": null,
    "full_uz": "havoda uch barmoq,",
    "note": null
  },
  {
    "num": 22,
    "time": "00:01:30,980 --> 00:01:33,160",
    "arabic": "سِرٌّ بَيْنَنَا يَبْقَى",
    "segs": null,
    "full_uz": "sir bizning oramizda qoladi,",
    "note": null
  },
  {
    "num": 23,
    "time": "00:01:33,160 --> 00:01:35,200",
    "arabic": "وَتُهْدِينَا حُبَّهَا",
    "segs": null,
    "full_uz": "va bizga o'z mehrini in'om etadi,",
    "note": null
  },
  {
    "num": 24,
    "time": "00:01:35,200 --> 00:01:37,040",
    "arabic": "مِنْ كُلِّ قَلْبِهَا",
    "segs": null,
    "full_uz": "butun qalbidan.",
    "note": null
  }
];
if (typeof module !== "undefined" && module.exports) {
  module.exports = lessons;
}
