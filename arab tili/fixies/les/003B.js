const lessons = [
  {
    "num": 1,
    "time": "00:00:04,359 --> 00:00:09,519",
    "arabic": "الْفِيكْسِيزُ أَصْغَرُ كَائِنَاتٍ، مَخْلُوقَاتٌ مُثِيرَةٌ.",
    "segs": [
      { "ar": "الْفِيكْسِيزُ", "uz": "Fiksilar" },
      { "ar": "أَصْغَرُ كَائِنَاتٍ", "uz": "eng kichik mavjudotlardir" },
      { "ar": "مَخْلُوقَاتٌ مُثِيرَةٌ", "uz": "qiziqarli mavjudotlardir" }
    ],
    "full_uz": "Fiksilar eng kichik va qiziqarli mavjudotlardir.",
    "note": null
  },
  {
    "num": 2,
    "time": "00:00:09,519 --> 00:00:14,360",
    "arabic": "مَهْمَا جَلَبْتَ مُكَبِّرَاتٍ، صَعْبٌ رُؤْيَتُهَا.",
    "segs": [
      { "ar": "مَهْمَا جَلَبْتَ مُكَبِّرَاتٍ", "uz": "har qancha kattalashtirgich olib kelsang ham" },
      { "ar": "صَعْبٌ رُؤْيَتُهَا", "uz": "ularni ko'rish qiyin" }
    ],
    "full_uz": "Har qancha kattalashtirgich olib kelsang ham, ularni ko'rish qiyin.",
    "note": null
  },
  {
    "num": 3,
    "time": "00:00:14,360 --> 00:00:19,119",
    "arabic": "صَغِيرَةٌ، أَصْغَرُ مِنْ أَنْ تُصْغَى لَهُمْ، قَدْ تَنْفِي وُجُودَهُمْ.",
    "segs": [
      { "ar": "صَغِيرَةٌ", "uz": "ular kichkina" },
      { "ar": "أَصْغَرُ مِنْ أَنْ تُصْغَى لَهُمْ", "uz": "sezish mumkin bo'lganidan ham kichik" },
      { "ar": "قَدْ تَنْفِي وُجُودَهُمْ", "uz": "balki ularning mavjudligini inkor qilarsan" }
    ],
    "full_uz": "Ular juda kichik, hatto sezish mumkin bo'lganidan ham kichik. Balki ularning mavjudligini inkor qilarsan.",
    "note": null
  },
  {
    "num": 4,
    "time": "00:00:19,119 --> 00:00:24,400",
    "arabic": "مِنْ أَيْنَ أَتَوْا؟ مَا شَكْلُهُمْ؟ مَنْ يَعْرِفُ سِرَّهُمْ؟",
    "segs": [
      { "ar": "مِنْ أَيْنَ أَتَوْا", "uz": "ular qayerdan kelishgan" },
      { "ar": "مَا شَكْلُهُمْ", "uz": "ularning ko'rinishi qanday" },
      { "ar": "مَنْ يَعْرِفُ سِرَّهُمْ", "uz": "ularning sirini kim biladi" }
    ],
    "full_uz": "Ular qayerdan kelishgan? Ularning ko'rinishi qanday? Ularning sirini kim biladi?",
    "note": "سِرٌّ — sir."
  },
  {
    "num": 5,
    "time": "00:00:24,400 --> 00:00:31,960",
    "arabic": "مِنْ أَيْنَ أَتَوْا؟ مَا شَكْلُهُمْ؟ مَنْ يَعْرِفُ سِرَّهُمْ؟",
    "segs": [
      { "ar": "مِنْ أَيْنَ أَتَوْا", "uz": "ular qayerdan kelishgan" },
      { "ar": "مَا شَكْلُهُمْ", "uz": "ularning ko'rinishi qanday" },
      { "ar": "مَنْ يَعْرِفُ سِرَّهُمْ", "uz": "ularning sirini kim biladi" }
    ],
    "full_uz": "Ular qayerdan kelishgan? Ularning ko'rinishi qanday? Ularning sirini kim biladi?",
    "note": null
  },
  {
    "num": 6,
    "time": "00:00:35,160 --> 00:00:37,160",
    "arabic": "فُرْشَاةُ الْأَسْنَانِ",
    "segs": null,
    "full_uz": "Tish cho'tkasi.",
    "note": "فُرْشَاةٌ — cho'tka."
  },
  {
    "num": 7,
    "time": "00:00:38,000 --> 00:00:41,840",
    "arabic": "حِينَمَا أُنْهِي إِكْسِيرَ النُّمُوِّ الْبَالِغَ السِّرِّيَّ",
    "segs": [
      { "ar": "حِينَمَا", "uz": "qachonki" },
      { "ar": "أُنْهِي", "uz": "tugataman" },
      { "ar": "إِكْسِيرَ النُّمُوِّ", "uz": "o'sish eliksirini" },
      { "ar": "الْبَالِغَ السِّرِّيَّ", "uz": "kuchli va maxfiy" }
    ],
    "full_uz": "Kuchli va maxfiy o'sish eliksirini tugatganimda,",
    "note": "إِكْسِيرٌ — eliksir (sehrli suyuqlik)."
  },
  {
    "num": 8,
    "time": "00:00:41,840 --> 00:00:45,200",
    "arabic": "سَأَصْنَعُ جَيْشِي الْخَاصَّ مِنَ الْمُسْتَذْئِبِينَ",
    "segs": [
      { "ar": "سَأَصْنَعُ", "uz": "yasayman" },
      { "ar": "جَيْشِي الْخَاصَّ", "uz": "o'zimning qo'shinimni" },
      { "ar": "مِنَ الْمُسْتَذْئِبِينَ", "uz": "bo'rilardan" }
    ],
    "full_uz": "O'zimning bo'rilardan iborat qo'shinimni yasayman,",
    "note": "مُسْتَذْئِبٌ — odam-bo'ri (afsonaviy obraz)."
  },
  {
    "num": 9,
    "time": "00:00:45,200 --> 00:00:47,019",
    "arabic": "وَسَأَحْكُمُ الْعَالَمَ",
    "segs": [
      { "ar": "وَسَأَحْكُمُ", "uz": "va hukmronlik qilaman" },
      { "ar": "الْعَالَمَ", "uz": "dunyoga" }
    ],
    "full_uz": "va butun dunyoga hukmronlik qilaman.",
    "note": null
  },
  {
    "num": 10,
    "time": "00:00:47,019 --> 00:00:50,960",
    "arabic": "وَاوْ، يَا سَلَامْ! هَذَا رَائِعٌ",
    "segs": [
      { "ar": "وَاوْ", "uz": "voy" },
      { "ar": "يَا سَلَامْ", "uz": "ajoyib-ku" },
      { "ar": "هَذَا رَائِعٌ", "uz": "bu zo'r ekan" }
    ],
    "full_uz": "Voy, ajoyib-ku! Bu juda zo'r ekan.",
    "note": null
  },
  {
    "num": 11,
    "time": "00:00:50,960 --> 00:00:52,659",
    "arabic": "أَنْتَ أَفْضَلُ مِنَ التِّلِفَازِ",
    "segs": [
      { "ar": "أَنْتَ", "uz": "sen" },
      { "ar": "أَفْضَلُ", "uz": "yaxshiroqsan" },
      { "ar": "مِنَ التِّلِفَازِ", "uz": "televizordan" }
    ],
    "full_uz": "Sen televizordan ham qiziqroqsan.",
    "note": null
  },
  {
    "num": 12,
    "time": "00:00:52,659 --> 00:00:55,620",
    "arabic": "أَجَلْ، هَذَا مُمْتِعٌ وَلَكِنَّهُ غَيْرُ آمِنٍ",
    "segs": [
      { "ar": "أَجَلْ", "uz": "ha" },
      { "ar": "هَذَا مُمْتِعٌ", "uz": "bu qiziqarli" },
      { "ar": "وَلَكِنَّهُ غَيْرُ آمِنٍ", "uz": "lekin bu xavfsiz emas" }
    ],
    "full_uz": "Ha, bu qiziqarli, lekin xavfsiz emas.",
    "note": null
  },
  {
    "num": 13,
    "time": "00:00:55,619 --> 00:01:01,939",
    "arabic": "هَيَّا يَا تُومْ، حَانَ وَقْتُ النَّوْمِ",
    "segs": [
      { "ar": "هَيَّا يَا تُومْ", "uz": "qani, Tom" },
      { "ar": "حَانَ وَقْتُ النَّوْمِ", "uz": "uxlash vaqti bo'ldi" }
    ],
    "full_uz": "Qani, Tom, uxlash vaqti bo'ldi.",
    "note": null
  },
  {
    "num": 14,
    "time": "00:01:01,939 --> 00:01:03,439",
    "arabic": "حَسَنًا يَا أَبِي",
    "segs": [
      { "ar": "حَسَنًا", "uz": "xo'p" },
      { "ar": "يَا أَبِي", "uz": "dadajon" }
    ],
    "full_uz": "Xo'p, dadajon.",
    "note": null
  },
  {
    "num": 15,
    "time": "00:01:03,439 --> 00:01:06,840",
    "arabic": "أَوَّلًا سَأَصْنَعُ وَصْفَتِي السِّرِّيَّةَ",
    "segs": [
      { "ar": "أَوَّلًا", "uz": "avval" },
      { "ar": "سَأَصْنَعُ", "uz": "tayyorlayman" },
      { "ar": "وَصْفَتِي السِّرِّيَّةَ", "uz": "o'zimning maxfiy retseptimni" }
    ],
    "full_uz": "Avval o'zimning maxfiy retseptimni tayyorlayman.",
    "note": null
  },
  {
    "num": 16,
    "time": "00:01:06,840 --> 00:01:11,560",
    "arabic": "سَنَبْدَأُ بِقَلِيلٍ مِنَ الْفَحْمِ",
    "segs": [
      { "ar": "سَنَبْدَأُ", "uz": "boshlaymiz" },
      { "ar": "بِقَلِيلٍ مِنَ الْفَحْمِ", "uz": "bir oz ko'mirdan" }
    ],
    "full_uz": "Bir oz ko'mirdan boshlaymiz.",
    "note": null
  },
  {
    "num": 17,
    "time": "00:01:11,560 --> 00:01:13,239",
    "arabic": "الْبَيْضُ",
    "segs": null,
    "full_uz": "Tuxum.",
    "note": null
  },
  {
    "num": 18,
    "time": "00:01:13,239 --> 00:01:15,219",
    "arabic": "وَقَلِيلٌ مِنَ الْخُبْزِ",
    "segs": [
      { "ar": "وَقَلِيلٌ", "uz": "va bir oz" },
      { "ar": "مِنَ الْخُبْزِ", "uz": "nondan" }
    ],
    "full_uz": "Va bir oz non.",
    "note": null
  },
  {
    "num": 19,
    "time": "00:01:15,219 --> 00:01:18,640",
    "arabic": "وَالزُّبْدَةُ، وَأَخِيرًا رَغْوَةُ الْحِلَاقَةِ",
    "segs": [
      { "ar": "وَالزُّبْدَةُ", "uz": "va sariyog'" },
      { "ar": "وَأَخِيرًا", "uz": "va nihoyat" },
      { "ar": "رَغْوَةُ الْحِلَاقَةِ", "uz": "soqol qirish ko'pigi" }
    ],
    "full_uz": "Va sariyog', nihoyat esa — soqol qirish ko'pigi.",
    "note": "رَغْوَةُ الْحِلَاقَةِ — soqol qirish ko'pigi."
  },
  {
    "num": 20,
    "time": "00:01:18,640 --> 00:01:22,879",
    "arabic": "سَأُضِيفُ قَلِيلًا مِنْهَا",
    "segs": [
      { "ar": "سَأُضِيفُ", "uz": "qo'shaman" },
      { "ar": "قَلِيلًا مِنْهَا", "uz": "undan bir oz" }
    ],
    "full_uz": "Undan bir oz qo'shaman.",
    "note": null
  },
  {
    "num": 21,
    "time": "00:01:22,879 --> 00:01:27,079",
    "arabic": "تْشُو سَاكَا، لَا تَخَافِي يَا صَغِيرَتِي",
    "segs": [
      { "ar": "تْشُو سَاكَا", "uz": "Chu-saka" },
      { "ar": "لَا تَخَافِي", "uz": "qo'rqma" },
      { "ar": "يَا صَغِيرَتِي", "uz": "jonivorginam" }
    ],
    "full_uz": "Chu-saka, qo'rqma, jonivorginam.",
    "note": null
  },
  {
    "num": 22,
    "time": "00:01:27,079 --> 00:01:29,039",
    "arabic": "اشْرَبِي يَا صَغِيرَتِي",
    "segs": [
      { "ar": "اشْرَبِي", "uz": "ich" },
      { "ar": "يَا صَغِيرَتِي", "uz": "jonivorginam" }
    ],
    "full_uz": "Ich, jonivorginam.",
    "note": null
  },
  {
    "num": 23,
    "time": "00:01:29,039 --> 00:01:33,039",
    "arabic": "لَا تَخَافِي، سَيَزْدَادُ حَجْمُكِ عَشَرَةَ أَضْعَافٍ",
    "segs": [
      { "ar": "لَا تَخَافِي", "uz": "qo'rqma" },
      { "ar": "سَيَزْدَادُ حَجْمُكِ", "uz": "hajming ortadi" },
      { "ar": "عَشَرَةَ أَضْعَافٍ", "uz": "o'n barobar" }
    ],
    "full_uz": "Qo'rqma, hajming o'n barobar ortadi.",
    "note": null
  },
  {
    "num": 24,
    "time": "00:01:33,039 --> 00:01:35,039",
    "arabic": "مَاذَا؟ أَلَيْسَتْ لَذِيذَةً؟",
    "segs": [
      { "ar": "مَاذَا", "uz": "nima" },
      { "ar": "أَلَيْسَتْ لَذِيذَةً", "uz": "mazali emasmidi" }
    ],
    "full_uz": "Nima? Mazali emasmidi?",
    "note": null
  },
  {
    "num": 25,
    "time": "00:01:36,719 --> 00:01:40,120",
    "arabic": "وَجَدْتُهَا! نَسِيتُ أَنْ أُحَرِّكَهَا",
    "segs": [
      { "ar": "وَجَدْتُهَا", "uz": "topdim" },
      { "ar": "نَسِيتُ", "uz": "unutibman" },
      { "ar": "أَنْ أُحَرِّكَهَا", "uz": "uni aralashtirishni" }
    ],
    "full_uz": "Topdim! Uni aralashtirishni unutibman.",
    "note": null
  },
  {
    "num": 26,
    "time": "00:01:40,120 --> 00:01:43,219",
    "arabic": "هَذَا الْخَلَّاطُ فَوْقَ الصَّوْتِيِّ مُنَاسِبٌ",
    "segs": [
      { "ar": "هَذَا الْخَلَّاطُ", "uz": "mana bu blender" },
      { "ar": "فَوْقَ الصَّوْتِيِّ", "uz": "ultratovushli" },
      { "ar": "مُنَاسِبٌ", "uz": "mos keladi" }
    ],
    "full_uz": "Mana bu ultratovushli blender mos keladi.",
    "note": "خَلَّاطٌ — mikser, blender."
  },
  {
    "num": 27,
    "time": "00:01:43,219 --> 00:01:47,739",
    "arabic": "وَلَكِنْ يَا تُومْ، لَا يَجُوزُ أَنْ تَسْتَعْمِلَ مَا لَيْسَ لَكَ",
    "segs": [
      { "ar": "وَلَكِنْ يَا تُومْ", "uz": "lekin, Tom" },
      { "ar": "لَا يَجُوزُ أَنْ تَسْتَعْمِلَ", "uz": "ishlatishing mumkin emas" },
      { "ar": "مَا لَيْسَ لَكَ", "uz": "o'zingga tegishli bo'lmagan narsani" }
    ],
    "full_uz": "Lekin Tom, o'zingga tegishli bo'lmagan narsani ishlatishing mumkin emas.",
    "note": null
  },
  {
    "num": 28,
    "time": "00:01:47,739 --> 00:01:49,299",
    "arabic": "إِنَّهَا فُرْشَاةُ وَالِدِكَ",
    "segs": [
      { "ar": "إِنَّهَا", "uz": "bu" },
      { "ar": "فُرْشَاةُ وَالِدِكَ", "uz": "otangning cho'tkasi" }
    ],
    "full_uz": "Bu otangning cho'tkasi-ku.",
    "note": null
  },
  {
    "num": 29,
    "time": "00:01:49,299 --> 00:01:55,519",
    "arabic": "تَوَقَّفْ عَنْ هَذَا",
    "segs": null,
    "full_uz": "Bas qil buni.",
    "note": null
  },
  {
    "num": 30,
    "time": "00:01:55,519 --> 00:01:57,500",
    "arabic": "أَنْتَ تَتَصَرَّفُ بِتَهَوُّرٍ",
    "segs": [
      { "ar": "أَنْتَ تَتَصَرَّفُ", "uz": "sen ish tutyapsan" },
      { "ar": "بِتَهَوُّرٍ", "uz": "o'ylamasdan" }
    ],
    "full_uz": "Sen o'ylamasdan ish tutyapsan.",
    "note": "تَهَوُّرٌ — o'ylamasdan ish tutish."
  },
  {
    "num": 31,
    "time": "00:01:57,500 --> 00:02:14,120",
    "arabic": "أَنْتَ قُلْتَهَا",
    "segs": null,
    "full_uz": "To'g'ri aytding.",
    "note": null
  },
  {
    "num": 32,
    "time": "00:02:14,120 --> 00:02:17,259",
    "arabic": "أَنْتَ يَا تُومْ فَتًى كَبِيرٌ",
    "segs": [
      { "ar": "أَنْتَ يَا تُومْ", "uz": "sen, Tom" },
      { "ar": "فَتًى كَبِيرٌ", "uz": "katta yigitsan" }
    ],
    "full_uz": "Sen, Tom, katta yigit bo'lib qolibsan.",
    "note": null
  },
  {
    "num": 33,
    "time": "00:02:17,259 --> 00:02:18,879",
    "arabic": "بِعَقْلٍ كَعَقْلِ نُولِكْ",
    "segs": [
      { "ar": "بِعَقْلٍ", "uz": "aql bilan" },
      { "ar": "كَعَقْلِ نُولِكْ", "uz": "Nolikning aqli kabi" }
    ],
    "full_uz": "Aqling Nolikning aqlidek.",
    "note": null
  },
  {
    "num": 34,
    "time": "00:02:18,879 --> 00:02:19,879",
    "arabic": "شُكْرًا",
    "segs": null,
    "full_uz": "Rahmat.",
    "note": null
  },
  {
    "num": 35,
    "time": "00:02:19,879 --> 00:02:24,799",
    "arabic": "أَعِيدُ الْفُرْشَاةَ إِلَى مَكَانِهَا، وَتَظَاهَرْ بِأَنَّكَ لَمْ تَلْمِسْهَا",
    "segs": [
      { "ar": "أُعِيدُ الْفُرْشَاةَ", "uz": "cho'tkani qaytar" },
      { "ar": "إِلَى مَكَانِهَا", "uz": "o'z joyiga" },
      { "ar": "وَتَظَاهَرْ بِأَنَّكَ لَمْ تَلْمِسْهَا", "uz": "va senga tegmagandek qil" }
    ],
    "full_uz": "Cho'tkani joyiga qaytarib qo'y, sen esa unga tegmagandek qil.",
    "note": "تَظَاهَرَ بِـ — o'zini ... qilib ko'rsatmoq."
  },
  {
    "num": 36,
    "time": "00:02:24,799 --> 00:02:27,139",
    "arabic": "لَا، هَذَا غَيْرُ لَائِقٍ",
    "segs": [
      { "ar": "لَا", "uz": "yo'q" },
      { "ar": "هَذَا غَيْرُ لَائِقٍ", "uz": "bu to'g'ri emas" }
    ],
    "full_uz": "Yo'q, bu to'g'ri emas.",
    "note": null
  },
  {
    "num": 37,
    "time": "00:02:27,139 --> 00:02:29,639",
    "arabic": "هَيَّا يَا تُومْ، أَسْرِعْ، مَا الْأَمْرُ؟",
    "segs": [
      { "ar": "هَيَّا يَا تُومْ", "uz": "qani, Tom" },
      { "ar": "أَسْرِعْ", "uz": "tezroq" },
      { "ar": "مَا الْأَمْرُ", "uz": "nima bo'ldi" }
    ],
    "full_uz": "Qani Tom, tezroq, nima bo'ldi?",
    "note": null
  },
  {
    "num": 38,
    "time": "00:02:29,639 --> 00:02:33,599",
    "arabic": "انْتَهَيْتُ يَا أَبِي! سِيمْكَا، نُولِكْ، أَرْجُوكُمَا",
    "segs": [
      { "ar": "انْتَهَيْتُ يَا أَبِي", "uz": "tugatdim, dadajon" },
      { "ar": "سِيمْكَا، نُولِكْ", "uz": "Simka, Nolik" },
      { "ar": "أَرْجُوكُمَا", "uz": "iltimos" }
    ],
    "full_uz": "Tugatdim, dadajon! Simka, Nolik, iltimos!",
    "note": null
  },
  {
    "num": 39,
    "time": "00:02:33,599 --> 00:02:37,680",
    "arabic": "لَا تَفْزَعْ، أَوَّلًا عَلَيْنَا أَنْ نَعْرِفَ الْجُزْءَ الْمُعَطَّلَ فِيهَا",
    "segs": [
      { "ar": "لَا تَفْزَعْ", "uz": "vahima qilma" },
      { "ar": "أَوَّلًا عَلَيْنَا أَنْ نَعْرِفَ", "uz": "avval bilishimiz kerak" },
      { "ar": "الْجُزْءَ الْمُعَطَّلَ فِيهَا", "uz": "undagi buzilgan qismni" }
    ],
    "full_uz": "Vahima qilma, avval undagi buzilgan qismni aniqlashimiz kerak.",
    "note": null
  },
  {
    "num": 40,
    "time": "00:02:37,680 --> 00:02:44,099",
    "arabic": "الْفُرْشَاةُ الْكَهْرَبَائِيَّةُ بَسِيطَةٌ جِدًّا",
    "segs": [
      { "ar": "الْفُرْشَاةُ الْكَهْرَبَائِيَّةُ", "uz": "elektr cho'tka" },
      { "ar": "بَسِيطَةٌ جِدًّا", "uz": "juda oddiy" }
    ],
    "full_uz": "Elektr cho'tka juda oddiy tuzilgan.",
    "note": null
  },
  {
    "num": 41,
    "time": "00:02:44,099 --> 00:02:46,300",
    "arabic": "إِنْ كُنْتُمْ تَعْلَمُونَ أَجْزَاءَهَا الثَّلَاثَةَ",
    "segs": [
      { "ar": "إِنْ كُنْتُمْ تَعْلَمُونَ", "uz": "agar bilsangiz" },
      { "ar": "أَجْزَاءَهَا الثَّلَاثَةَ", "uz": "uning uch qismini" }
    ],
    "full_uz": "Agar uning uch qismini bilsangiz.",
    "note": null
  },
  {
    "num": 42,
    "time": "00:02:46,300 --> 00:02:52,860",
    "arabic": "الْمِدْخَرَةُ، وَالْمُحَرِّكُ، وَجُزْءًا ذَكِيًّا لِنَقْلِ الْحَرَكَةِ يَصِلُ الْمُحَرِّكَ بِرَأْسِ الشُّعَيْرَاتِ",
    "segs": [
      { "ar": "الْمِدْخَرَةُ", "uz": "akkumulyator" },
      { "ar": "وَالْمُحَرِّكُ", "uz": "va motor" },
      { "ar": "وَجُزْءًا ذَكِيًّا لِنَقْلِ الْحَرَكَةِ", "uz": "va harakatni uzatuvchi aqlli qism" },
      { "ar": "يَصِلُ الْمُحَرِّكَ بِرَأْسِ الشُّعَيْرَاتِ", "uz": "motorni tukcha boshiga ulaydigan" }
    ],
    "full_uz": "Akkumulyator, motor va motorni tukcha boshiga ulaydigan aqlli uzatuvchi qism.",
    "note": "مِدْخَرَةٌ — akkumulyator; شُعَيْرَاتٌ — tukchalar (cho'tka tolalari)."
  },
  {
    "num": 43,
    "time": "00:02:52,860 --> 00:02:56,620",
    "arabic": "هَذَا هُوَ سِرُّ الْفُرْشَاةِ الْكَهْرَبَائِيَّةِ",
    "segs": [
      { "ar": "هَذَا هُوَ سِرُّ", "uz": "mana shu sir" },
      { "ar": "الْفُرْشَاةِ الْكَهْرَبَائِيَّةِ", "uz": "elektr cho'tkaning" }
    ],
    "full_uz": "Elektr cho'tkaning siri mana shunda.",
    "note": null
  },
  {
    "num": 44,
    "time": "00:02:56,620 --> 00:03:06,560",
    "arabic": "يَأْخُذُ الْجُزْءُ الذَّكِيُّ الدَّوَرَانَ مِنَ الْمُحَرِّكِ لِيَجْعَلَ رَأْسَ الشُّعَيْرَاتِ يَدُورُ بِسُرْعَةٍ كَبِيرَةٍ، إِلَى الْخَلْفِ وَإِلَى الْأَمَامِ وَإِلَى الْيَمِينِ وَإِلَى الْيَسَارِ",
    "segs": [
      { "ar": "يَأْخُذُ الْجُزْءُ الذَّكِيُّ", "uz": "aqlli qism oladi" },
      { "ar": "الدَّوَرَانَ مِنَ الْمُحَرِّكِ", "uz": "motordan aylanishni" },
      { "ar": "لِيَجْعَلَ رَأْسَ الشُّعَيْرَاتِ يَدُورُ", "uz": "tukcha boshini aylantirish uchun" },
      { "ar": "بِسُرْعَةٍ كَبِيرَةٍ", "uz": "katta tezlikda" },
      { "ar": "إِلَى الْخَلْفِ وَإِلَى الْأَمَامِ", "uz": "orqaga va oldinga" },
      { "ar": "وَإِلَى الْيَمِينِ وَإِلَى الْيَسَارِ", "uz": "o'ngga va chapga" }
    ],
    "full_uz": "Aqlli qism motordan aylanish harakatini olib, tukcha boshini katta tezlikda oldinga-orqaga, o'ngga-chapga aylantiradi.",
    "note": null
  },
  {
    "num": 45,
    "time": "00:03:06,560 --> 00:03:08,340",
    "arabic": "وَهَكَذَا تُنَظَّفُ أَسْنَانُكُمْ",
    "segs": [
      { "ar": "وَهَكَذَا", "uz": "va shu tariqa" },
      { "ar": "تُنَظَّفُ أَسْنَانُكُمْ", "uz": "tishlaringiz tozalanadi" }
    ],
    "full_uz": "Va shu tariqa tishlaringiz tozalanadi.",
    "note": null
  },
  {
    "num": 46,
    "time": "00:03:08,340 --> 00:03:12,600",
    "arabic": "إِذَنْ، مَاذَا سَنَفْعَلُ؟",
    "segs": [
      { "ar": "إِذَنْ", "uz": "demak" },
      { "ar": "مَاذَا سَنَفْعَلُ", "uz": "nima qilamiz" }
    ],
    "full_uz": "Demak, endi nima qilamiz?",
    "note": null
  },
  {
    "num": 47,
    "time": "00:03:12,600 --> 00:03:13,860",
    "arabic": "إِلَيْكَ مَا سَنَفْعَلُهُ",
    "segs": [
      { "ar": "إِلَيْكَ", "uz": "mana" },
      { "ar": "مَا سَنَفْعَلُهُ", "uz": "nima qilishimiz" }
    ],
    "full_uz": "Mana, nima qilishimiz kerak.",
    "note": null
  },
  {
    "num": 48,
    "time": "00:03:13,860 --> 00:03:16,140",
    "arabic": "أَوَّلًا، نُخْرِجُ الْمُحَرِّكَ",
    "segs": [
      { "ar": "أَوَّلًا", "uz": "avval" },
      { "ar": "نُخْرِجُ الْمُحَرِّكَ", "uz": "motorni chiqaramiz" }
    ],
    "full_uz": "Avval motorni chiqaramiz.",
    "note": null
  },
  {
    "num": 49,
    "time": "00:03:16,140 --> 00:03:17,640",
    "arabic": "ثُمَّ الْمُسَنَّنَاتِ",
    "segs": [
      { "ar": "ثُمَّ", "uz": "keyin" },
      { "ar": "الْمُسَنَّنَاتِ", "uz": "tishli g'ildiraklarni" }
    ],
    "full_uz": "Keyin tishli g'ildiraklarni.",
    "note": "مُسَنَّنَةٌ — tishli g'ildirak (shester)."
  },
  {
    "num": 50,
    "time": "00:03:17,640 --> 00:03:19,640",
    "arabic": "ثُمَّ جُزْءَ نَقْلِ الْحَرَكَةِ",
    "segs": [
      { "ar": "ثُمَّ", "uz": "keyin" },
      { "ar": "جُزْءَ نَقْلِ الْحَرَكَةِ", "uz": "harakat uzatuvchi qismni" }
    ],
    "full_uz": "Keyin harakat uzatuvchi qismni.",
    "note": null
  },
  {
    "num": 51,
    "time": "00:03:19,640 --> 00:03:21,800",
    "arabic": "وَكَمْ مِنَ الْوَقْتِ يَكْفِي لِهَذَا؟",
    "segs": [
      { "ar": "وَكَمْ مِنَ الْوَقْتِ", "uz": "qancha vaqt" },
      { "ar": "يَكْفِي لِهَذَا", "uz": "bunga yetadi" }
    ],
    "full_uz": "Bunga qancha vaqt ketadi?",
    "note": null
  },
  {
    "num": 52,
    "time": "00:03:21,800 --> 00:03:22,420",
    "arabic": "سَاعَتَانِ",
    "segs": null,
    "full_uz": "Ikki soat.",
    "note": null
  },
  {
    "num": 53,
    "time": "00:03:22,420 --> 00:03:24,040",
    "arabic": "مَاذَا؟ لَا!",
    "segs": null,
    "full_uz": "Nima? Yo'q!",
    "note": null
  },
  {
    "num": 54,
    "time": "00:03:24,040 --> 00:03:26,220",
    "arabic": "هَيَّا، اسْتَمِعْ إِلَيَّ يَا تُومْ",
    "segs": [
      { "ar": "هَيَّا", "uz": "qani" },
      { "ar": "اسْتَمِعْ إِلَيَّ", "uz": "meni tingla" },
      { "ar": "يَا تُومْ", "uz": "Tom" }
    ],
    "full_uz": "Qani, Tom, meni tingla.",
    "note": null
  },
  {
    "num": 55,
    "time": "00:03:26,220 --> 00:03:28,260",
    "arabic": "وَافْتَحْ لِي غِطَاءَ الْمِدْخَرَاتِ",
    "segs": [
      { "ar": "وَافْتَحْ لِي", "uz": "va menga och" },
      { "ar": "غِطَاءَ الْمِدْخَرَاتِ", "uz": "akkumulyator qopqog'ini" }
    ],
    "full_uz": "Va menga akkumulyator qopqog'ini och.",
    "note": null
  },
  {
    "num": 56,
    "time": "00:03:28,260 --> 00:03:31,760",
    "arabic": "انْتَظِرْنِي هُنَا",
    "segs": null,
    "full_uz": "Meni shu yerda kut.",
    "note": null
  },
  {
    "num": 57,
    "time": "00:03:31,760 --> 00:03:38,620",
    "arabic": "هَذِهِ أَسْنَانُكُمْ",
    "segs": null,
    "full_uz": "Mana bu — sizning tishlaringiz.",
    "note": null
  },
  {
    "num": 58,
    "time": "00:03:38,620 --> 00:03:40,580",
    "arabic": "أَعْنِي، إِنَّهَا لَيْسَتْ أَسْنَانَكُمْ",
    "segs": [
      { "ar": "أَعْنِي", "uz": "ya'ni" },
      { "ar": "إِنَّهَا لَيْسَتْ أَسْنَانَكُمْ", "uz": "bu sizning tishlaringiz emas" }
    ],
    "full_uz": "Ya'ni, bu aynan sizning tishlaringiz emas.",
    "note": null
  },
  {
    "num": 59,
    "time": "00:03:40,580 --> 00:03:41,720",
    "arabic": "تَعْلَمُونَ قَصْدِي",
    "segs": null,
    "full_uz": "Nimani nazarda tutganimni tushunasiz.",
    "note": null
  },
  {
    "num": 60,
    "time": "00:03:41,719 --> 00:03:44,000",
    "arabic": "نَحْنُ الْآنَ نَسْتَعْمِلُ فُرْشَاةَ الْأَسْنَانِ",
    "segs": [
      { "ar": "نَحْنُ الْآنَ نَسْتَعْمِلُ", "uz": "biz hozir ishlatamiz" },
      { "ar": "فُرْشَاةَ الْأَسْنَانِ", "uz": "tish cho'tkasini" }
    ],
    "full_uz": "Biz hozir tish cho'tkasidan foydalanamiz.",
    "note": null
  },
  {
    "num": 61,
    "time": "00:03:44,000 --> 00:03:45,780",
    "arabic": "وَلَكِنْ فِي الْمَاضِي الْبَعِيدِ",
    "segs": [
      { "ar": "وَلَكِنْ", "uz": "lekin" },
      { "ar": "فِي الْمَاضِي الْبَعِيدِ", "uz": "qadim zamonlarda" }
    ],
    "full_uz": "Lekin qadim zamonlarda",
    "note": null
  },
  {
    "num": 62,
    "time": "00:03:45,780 --> 00:03:50,340",
    "arabic": "الْمِصْرِيُّونَ الْقُدَمَاءُ اسْتَعْمَلُوا عُودَ الْأَرَاكِ لِحَكِّ أَسْنَانِهِمْ",
    "segs": [
      { "ar": "الْمِصْرِيُّونَ الْقُدَمَاءُ", "uz": "qadimgi misrliklar" },
      { "ar": "اسْتَعْمَلُوا عُودَ الْأَرَاكِ", "uz": "arak novdasidan foydalanishgan" },
      { "ar": "لِحَكِّ أَسْنَانِهِمْ", "uz": "tishlarini ishqalash uchun" }
    ],
    "full_uz": "qadimgi misrliklar tishlarini tozalash uchun arak daraxti novdasidan foydalanishgan.",
    "note": "عُودُ الْأَرَاكِ — miswak (arak daraxti novdasi)."
  },
  {
    "num": 63,
    "time": "00:03:50,340 --> 00:03:54,699",
    "arabic": "وَالْإِغْرِيقِيُّونَ كَانُوا يَحُكُّونَ أَسْنَانَهُمْ بِقِطْعَةِ قُمَاشٍ",
    "segs": [
      { "ar": "وَالْإِغْرِيقِيُّونَ كَانُوا", "uz": "yunonlar esa" },
      { "ar": "يَحُكُّونَ أَسْنَانَهُمْ", "uz": "tishlarini ishqalashardi" },
      { "ar": "بِقِطْعَةِ قُمَاشٍ", "uz": "mato bo'lagi bilan" }
    ],
    "full_uz": "Yunonlar esa tishlarini mato bo'lagi bilan ishqalashgan.",
    "note": null
  },
  {
    "num": 64,
    "time": "00:03:54,699 --> 00:03:59,099",
    "arabic": "وَالْفَايْكِنْغُ، حَسَنًا، لَا أَحَدَ يَعْلَمُ مَا اسْتَعْمَلُوهُ",
    "segs": [
      { "ar": "وَالْفَايْكِنْغُ", "uz": "vikinglar esa" },
      { "ar": "حَسَنًا", "uz": "xo'sh" },
      { "ar": "لَا أَحَدَ يَعْلَمُ", "uz": "hech kim bilmaydi" },
      { "ar": "مَا اسْتَعْمَلُوهُ", "uz": "nima ishlatishganini" }
    ],
    "full_uz": "Vikinglar esa, xo'sh, ular nima ishlatishganini hech kim bilmaydi.",
    "note": null
  },
  {
    "num": 65,
    "time": "00:03:59,099 --> 00:04:04,780",
    "arabic": "وَلَكِنْ قَبْلَ مِئَتَيْ عَامٍ أَتَى رَجُلٌ إِنْجِلِيزِيٌّ اسْمُهُ وِلْيَامْ أَدِيسْ بِفِكْرَةٍ أَفْضَلَ",
    "segs": [
      { "ar": "وَلَكِنْ قَبْلَ مِئَتَيْ عَامٍ", "uz": "lekin ikki yuz yil avval" },
      { "ar": "أَتَى رَجُلٌ إِنْجِلِيزِيٌّ", "uz": "bir ingliz keldi" },
      { "ar": "اسْمُهُ وِلْيَامْ أَدِيسْ", "uz": "ismi Uilyam Addis" },
      { "ar": "بِفِكْرَةٍ أَفْضَلَ", "uz": "yaxshiroq g'oya bilan" }
    ],
    "full_uz": "Lekin ikki yuz yil avval Uilyam Addis ismli ingliz yaxshiroq g'oya bilan keldi.",
    "note": null
  },
  {
    "num": 66,
    "time": "00:04:04,780 --> 00:04:07,240",
    "arabic": "وَهِيَ حَفْرُ ثُقُوبٍ فِي قِطْعَةِ عَظْمٍ",
    "segs": [
      { "ar": "وَهِيَ", "uz": "u" },
      { "ar": "حَفْرُ ثُقُوبٍ", "uz": "teshiklar teshish" },
      { "ar": "فِي قِطْعَةِ عَظْمٍ", "uz": "suyak bo'lagida" }
    ],
    "full_uz": "U — suyak bo'lagida teshiklar teshish edi.",
    "note": null
  },
  {
    "num": 67,
    "time": "00:04:07,240 --> 00:04:11,439",
    "arabic": "وَأَدْخَلَ فِيهَا حُزَمًا مِنَ الشُّعَيْرَاتِ، فَحَصَلَ عَلَى فُرْشَاةِ الْأَسْنَانِ",
    "segs": [
      { "ar": "وَأَدْخَلَ فِيهَا", "uz": "va unga kiritdi" },
      { "ar": "حُزَمًا مِنَ الشُّعَيْرَاتِ", "uz": "tukcha tutamlarini" },
      { "ar": "فَحَصَلَ عَلَى فُرْشَاةِ الْأَسْنَانِ", "uz": "natijada tish cho'tkasini oldi" }
    ],
    "full_uz": "Unga tukcha tutamlarini kiritdi va natijada tish cho'tkasi hosil bo'ldi,",
    "note": null
  },
  {
    "num": 68,
    "time": "00:04:11,439 --> 00:04:12,840",
    "arabic": "كَهَذِهِ",
    "segs": null,
    "full_uz": "Mana shunga o'xshash.",
    "note": null
  },
  {
    "num": 69,
    "time": "00:04:12,840 --> 00:04:18,199",
    "arabic": "وَمَا عَلَيَّ أَنْ أُخْبِرَكُمْ بِهِ أَنَّ الْفِيكْسِي الْخَبِيرَ بِأَعْمَالِ الْإِصْلَاحِ",
    "segs": [
      { "ar": "وَمَا عَلَيَّ أَنْ أُخْبِرَكُمْ بِهِ", "uz": "sizga aytishim kerak bo'lgan narsa" },
      { "ar": "أَنَّ الْفِيكْسِي", "uz": "Fiksi" },
      { "ar": "الْخَبِيرَ بِأَعْمَالِ الْإِصْلَاحِ", "uz": "ta'mirlash ishlari bo'yicha mutaxassisning" }
    ],
    "full_uz": "Sizga aytishim kerak bo'lgan narsa shuki, ta'mirlash ishlari bo'yicha mutaxassis Fiksining maslahati —",
    "note": null
  },
  {
    "num": 70,
    "time": "00:04:18,199 --> 00:04:20,980",
    "arabic": "هُوَ أَنْ تُنَظِّفُوا أَسْنَانَكُمْ دَائِمًا",
    "segs": [
      { "ar": "هُوَ أَنْ تُنَظِّفُوا", "uz": "tozalashingiz kerak" },
      { "ar": "أَسْنَانَكُمْ دَائِمًا", "uz": "tishlaringizni doim" }
    ],
    "full_uz": "tishlaringizni doim tozalashdir.",
    "note": null
  },
  {
    "num": 71,
    "time": "00:04:20,980 --> 00:04:22,300",
    "arabic": "وَلَا سِيَّمَا بَعْدَ الطَّعَامِ",
    "segs": [
      { "ar": "وَلَا سِيَّمَا", "uz": "ayniqsa" },
      { "ar": "بَعْدَ الطَّعَامِ", "uz": "ovqatdan keyin" }
    ],
    "full_uz": "Ayniqsa, ovqatlanishdan keyin.",
    "note": "لَا سِيَّمَا — ayniqsa, xususan."
  },
  {
    "num": 72,
    "time": "00:04:22,300 --> 00:04:26,040",
    "arabic": "وَإِلَّا فَسَتَزُورُونَ طَبِيبَ الْأَسْنَانِ مُرْغَمِينَ",
    "segs": [
      { "ar": "وَإِلَّا", "uz": "aks holda" },
      { "ar": "فَسَتَزُورُونَ طَبِيبَ الْأَسْنَانِ", "uz": "stomatologga borishga to'g'ri keladi" },
      { "ar": "مُرْغَمِينَ", "uz": "majburan" }
    ],
    "full_uz": "Aks holda, majburan stomatologga borishga to'g'ri keladi.",
    "note": null
  },
  {
    "num": 73,
    "time": "00:04:29,919 --> 00:04:31,139",
    "arabic": "إِذَنْ، هَلْ هُنَاكَ عُطْلٌ فِي الْجُزْءِ الْآلِيِّ؟",
    "segs": [
      { "ar": "إِذَنْ", "uz": "demak" },
      { "ar": "هَلْ هُنَاكَ عُطْلٌ", "uz": "nosozlik bormi" },
      { "ar": "فِي الْجُزْءِ الْآلِيِّ", "uz": "mexanik qismda" }
    ],
    "full_uz": "Demak, mexanik qismida nosozlik bormi?",
    "note": null
  },
  {
    "num": 74,
    "time": "00:04:31,139 --> 00:04:32,459",
    "arabic": "لَا، إِنَّهُ جَيِّدٌ",
    "segs": [
      { "ar": "لَا", "uz": "yo'q" },
      { "ar": "إِنَّهُ جَيِّدٌ", "uz": "u yaxshi" }
    ],
    "full_uz": "Yo'q, u yaxshi holatda.",
    "note": null
  },
  {
    "num": 75,
    "time": "00:04:32,459 --> 00:04:34,199",
    "arabic": "هَلِ احْتَرَقَ الْمُحَرِّكُ؟",
    "segs": [
      { "ar": "هَلِ احْتَرَقَ", "uz": "kuydimikan" },
      { "ar": "الْمُحَرِّكُ", "uz": "motor" }
    ],
    "full_uz": "Motor kuydimikan?",
    "note": null
  },
  {
    "num": 76,
    "time": "00:04:34,199 --> 00:04:34,579",
    "arabic": "لَا",
    "segs": null,
    "full_uz": "Yo'q.",
    "note": null
  },
  {
    "num": 77,
    "time": "00:04:34,579 --> 00:04:37,379",
    "arabic": "إِذَنْ مَا الْمُشْكِلَةُ؟",
    "segs": null,
    "full_uz": "Demak, muammo nimada?",
    "note": null
  },
  {
    "num": 78,
    "time": "00:04:37,379 --> 00:04:38,620",
    "arabic": "لَنْ تُصَدِّقَ يَا تُومْ",
    "segs": [
      { "ar": "لَنْ تُصَدِّقَ", "uz": "ishonmaysan" },
      { "ar": "يَا تُومْ", "uz": "Tom" }
    ],
    "full_uz": "Tom, ishonmaysan.",
    "note": null
  },
  {
    "num": 79,
    "time": "00:04:38,620 --> 00:04:40,980",
    "arabic": "لَقَدْ فَرَغَتِ الْمِدْخَرَةُ",
    "segs": [
      { "ar": "لَقَدْ فَرَغَتِ", "uz": "tugab qolibdi" },
      { "ar": "الْمِدْخَرَةُ", "uz": "akkumulyator" }
    ],
    "full_uz": "Akkumulyator tugab qolibdi.",
    "note": null
  },
  {
    "num": 80,
    "time": "00:04:40,980 --> 00:04:45,000",
    "arabic": "مَاذَا؟ أَعْلَمُ مَا يَجِبُ فِعْلُهُ، سَنُبَدِّلُهَا",
    "segs": [
      { "ar": "مَاذَا", "uz": "nima" },
      { "ar": "أَعْلَمُ مَا يَجِبُ فِعْلُهُ", "uz": "nima qilish kerakligini bilaman" },
      { "ar": "سَنُبَدِّلُهَا", "uz": "uni almashtiramiz" }
    ],
    "full_uz": "Nima? Nima qilish kerakligini bilaman — uni almashtiramiz.",
    "note": null
  },
  {
    "num": 81,
    "time": "00:04:45,000 --> 00:04:55,439",
    "arabic": "شَغَّلَ وَالِدُكَ الْفُرْشَاةَ، كُلُّ شَيْءٍ عَلَى مَا يُرَامُ",
    "segs": [
      { "ar": "شَغَّلَ وَالِدُكَ الْفُرْشَاةَ", "uz": "otang cho'tkani ishga tushirdi" },
      { "ar": "كُلُّ شَيْءٍ عَلَى مَا يُرَامُ", "uz": "hammasi joyida" }
    ],
    "full_uz": "Otang cho'tkani ishga tushirdi, hammasi joyida.",
    "note": null
  },
  {
    "num": 82,
    "time": "00:04:55,439 --> 00:04:57,300",
    "arabic": "إِنَّهَا تَعْمَلُ",
    "segs": null,
    "full_uz": "U ishlayapti!",
    "note": null
  },
  {
    "num": 83,
    "time": "00:04:57,300 --> 00:04:59,819",
    "arabic": "الْحَمْدُ لِلَّهِ",
    "segs": null,
    "full_uz": "Alhamdulillah.",
    "note": null
  },
  {
    "num": 84,
    "time": "00:04:59,819 --> 00:05:03,980",
    "arabic": "مُمْتَازٌ، وَلَنْ يَكْتَشِفَ وَالِدُكَ الْقَذَارَةَ الَّتِي خَلَطَهَا بِفُرْشَاتِهِ",
    "segs": [
      { "ar": "مُمْتَازٌ", "uz": "ajoyib" },
      { "ar": "وَلَنْ يَكْتَشِفَ وَالِدُكَ", "uz": "va otang bilmaydi ham" },
      { "ar": "الْقَذَارَةَ الَّتِي خَلَطَهَا بِفُرْشَاتِهِ", "uz": "cho'tkasiga aralashtirilgan iflosliklarni" }
    ],
    "full_uz": "Ajoyib, otang cho'tkasiga nimalar aralashtirilganini bilmaydi ham.",
    "note": null
  },
  {
    "num": 85,
    "time": "00:05:04,759 --> 00:05:09,319",
    "arabic": "أَيُّ قَذَارَةٍ؟",
    "segs": null,
    "full_uz": "Qanday ifloslik?",
    "note": null
  },
  {
    "num": 86,
    "time": "00:05:10,980 --> 00:05:16,600",
    "arabic": "كَيْفَ تَجْرُؤُ يَا نُولِكْ؟ كَيْفَ تَصِفُ إِكْسِيرِي الْمُمَيَّزَ بِالْقَذَارَةِ؟",
    "segs": [
      { "ar": "كَيْفَ تَجْرُؤُ يَا نُولِكْ", "uz": "qanday jur'at etasan, Nolik" },
      { "ar": "كَيْفَ تَصِفُ إِكْسِيرِي الْمُمَيَّزَ", "uz": "ajoyib eliksirimni qanday atash mumkin" },
      { "ar": "بِالْقَذَارَةِ", "uz": "ifloslik deb" }
    ],
    "full_uz": "Qanday jur'at etasan, Nolik? Mening ajoyib eliksirimni ifloslik deysanmi?",
    "note": null
  },
  {
    "num": 87,
    "time": "00:05:16,600 --> 00:05:19,460",
    "arabic": "تُومْ، يَبْدُو أَنَّ الصَّابُونَ عَالِقٌ بِفُرْشَاتِي",
    "segs": [
      { "ar": "تُومْ", "uz": "Tom" },
      { "ar": "يَبْدُو أَنَّ", "uz": "shekilli" },
      { "ar": "الصَّابُونَ عَالِقٌ بِفُرْشَاتِي", "uz": "sovun mening cho'tkamga yopishib qolgan" }
    ],
    "full_uz": "Tom, shekilli, mening cho'tkamga sovun yopishib qolgan.",
    "note": null
  },
  {
    "num": 88,
    "time": "00:05:19,460 --> 00:05:20,980",
    "arabic": "هَلْ لَدَيْكَ تَفْسِيرٌ؟",
    "segs": null,
    "full_uz": "Buni tushuntira olasanmi?",
    "note": null
  },
  {
    "num": 89,
    "time": "00:05:22,640 --> 00:05:24,280",
    "arabic": "إِذَنْ، لَا تَعْرِفُ",
    "segs": null,
    "full_uz": "Demak, bilmaysan.",
    "note": null
  },
  {
    "num": 90,
    "time": "00:05:24,280 --> 00:05:28,660",
    "arabic": "حَسَنًا، لَقَدْ كُشِفَ أَمْرُكَ",
    "segs": [
      { "ar": "حَسَنًا", "uz": "xo'sh" },
      { "ar": "لَقَدْ كُشِفَ أَمْرُكَ", "uz": "siring fosh bo'ldi" }
    ],
    "full_uz": "Xo'sh, siring fosh bo'ldi.",
    "note": null
  },
  {
    "num": 91,
    "time": "00:05:28,660 --> 00:05:29,980",
    "arabic": "مَا قَوْلُكَ الْآنَ؟",
    "segs": null,
    "full_uz": "Endi nima deysan?",
    "note": null
  },
  {
    "num": 92,
    "time": "00:05:40,980 --> 00:05:52,759",
    "arabic": "مِنْ أَيْنَ أَتَوْا؟ مَا شَكْلُهُمْ؟ مَنْ يَعْرِفُ سِرَّهُمْ؟",
    "segs": [
      { "ar": "مِنْ أَيْنَ أَتَوْا", "uz": "ular qayerdan kelishgan" },
      { "ar": "مَا شَكْلُهُمْ", "uz": "ularning ko'rinishi qanday" },
      { "ar": "مَنْ يَعْرِفُ سِرَّهُمْ", "uz": "ularning sirini kim biladi" }
    ],
    "full_uz": "Ular qayerdan kelishgan? Ularning ko'rinishi qanday? Ularning sirini kim biladi?",
    "note": null
  }
];
if (typeof module !== "undefined" && module.exports) {
  module.exports = lessons;
}
