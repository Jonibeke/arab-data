const lessons = [
  {
    "num": 1,
    "time": "00:00:33,280 --> 00:00:34,960",
    "arabic": "مِيزَانُ الْحَرَارَةِ",
    "segs": null,
    "full_uz": "Termometr",
    "note": "مِيزَانُ الْحَرَارَةِ — termometr. Bu yerda epizod nomi sifatida ishlatilgan."
  },
  {
    "num": 2,
    "time": "00:00:34,960 --> 00:00:39,100",
    "arabic": "لَا أُصَدِّقُ أَنَّ مِيزَانَ الْحَرَارَةِ الْجَدِيدَةَ تَعَطَّلَ",
    "segs": [
      { "ar": "لَا أُصَدِّقُ", "uz": "ishonmayapman" },
      { "ar": "أَنَّ مِيزَانَ الْحَرَارَةِ الْجَدِيدَةَ تَعَطَّلَ", "uz": "yangi termometr buzilib qolganiga" }
    ],
    "full_uz": "Ishonmayapman, yangi termometr buzilib qoldi.",
    "note": null
  },
  {
    "num": 3,
    "time": "00:00:39,100 --> 00:00:44,259",
    "arabic": "تُوم، ابْقَ فِي السَّرِيرِ وَسَأُحَاوِلُ أَنْ أَجِدَ مِيزَانًا زِئْبَقِيًّا قَدِيمًا",
    "segs": [
      { "ar": "تُوم، ابْقَ فِي السَّرِيرِ", "uz": "Tom, to'shakda yot" },
      { "ar": "وَسَأُحَاوِلُ أَنْ أَجِدَ مِيزَانًا زِئْبَقِيًّا قَدِيمًا", "uz": "men eski simob termometrini topishga harakat qilaman" }
    ],
    "full_uz": "Tom, to'shakda yot, men eski simob termometrini topishga harakat qilaman.",
    "note": null
  },
  {
    "num": 4,
    "time": "00:00:44,259 --> 00:00:50,140",
    "arabic": "تُوم، هَلْ أَنْتَ مَرِيضٌ؟",
    "segs": null,
    "full_uz": "Tom, sen kasalmisan?",
    "note": null
  },
  {
    "num": 5,
    "time": "00:00:50,140 --> 00:00:54,299",
    "arabic": "تَسْتَطِيعُونَ الْقَوْلَ أُحَاوِلُ اجْتِيَازَ امْتِحَانِ الرِّيَاضِيَّاتِ الْيَوْمَ",
    "segs": [
      { "ar": "تَسْتَطِيعُونَ الْقَوْلَ", "uz": "aytish mumkinki" },
      { "ar": "أُحَاوِلُ اجْتِيَازَ امْتِحَانِ الرِّيَاضِيَّاتِ الْيَوْمَ", "uz": "men bugungi matematika imtihonidan qutulishga harakat qilyapman" }
    ],
    "full_uz": "Aytish mumkinki, men bugungi matematika imtihonidan qutulishga harakat qilyapman.",
    "note": null
  },
  {
    "num": 6,
    "time": "00:00:54,299 --> 00:00:56,820",
    "arabic": "لِذَلِكَ لَا تُرِيدُ الذَّهَابَ إِلَى الْمَدْرَسَةِ؟",
    "segs": [
      { "ar": "لِذَلِكَ لَا تُرِيدُ", "uz": "shuning uchun xohlamayapsanmi" },
      { "ar": "الذَّهَابَ إِلَى الْمَدْرَسَةِ؟", "uz": "maktabga borishni?" }
    ],
    "full_uz": "Shuning uchun maktabga borishni xohlamayapsanmi?",
    "note": null
  },
  {
    "num": 7,
    "time": "00:00:56,820 --> 00:00:57,740",
    "arabic": "حَسَنًا، نَعَمْ",
    "segs": null,
    "full_uz": "Xo'p, ha.",
    "note": null
  },
  {
    "num": 8,
    "time": "00:00:57,740 --> 00:01:01,820",
    "arabic": "وَتَتَظَاهَرُ بِالْمَرَضِ لِكَيْ تَخْدَعَ أُمَّكَ",
    "segs": [
      { "ar": "وَتَتَظَاهَرُ بِالْمَرَضِ", "uz": "va kasal bo'lib ko'rsatyapsan" },
      { "ar": "لِكَيْ تَخْدَعَ أُمَّكَ", "uz": "onangni aldash uchun" }
    ],
    "full_uz": "Va onangni aldash uchun kasal bo'lib ko'rsatyapsan.",
    "note": null
  },
  {
    "num": 9,
    "time": "00:01:01,820 --> 00:01:05,560",
    "arabic": "لَا، لَيْسَ تَمَامًا، أَقْصِدُ أَتَظَاهَرُ قَلِيلًا",
    "segs": [
      { "ar": "لَا، لَيْسَ تَمَامًا", "uz": "yo'q, unchalik emas" },
      { "ar": "أَقْصِدُ أَتَظَاهَرُ قَلِيلًا", "uz": "ya'ni, biroz o'zimni kasal qilib ko'rsatyapman" }
    ],
    "full_uz": "Yo'q, unchalik emas, ya'ni, biroz o'zimni kasal qilib ko'rsatyapman.",
    "note": null
  },
  {
    "num": 10,
    "time": "00:01:05,560 --> 00:01:09,540",
    "arabic": "تُوم، تَظُنُّ ذَلِكَ؟ لَكِنَّكَ لَنْ تَخْدَعَ مِيزَانَ الْحَرَارَةِ",
    "segs": [
      { "ar": "تُوم، تَظُنُّ ذَلِكَ؟", "uz": "Tom, shunday deb o'ylaysanmi?" },
      { "ar": "لَكِنَّكَ لَنْ تَخْدَعَ مِيزَانَ الْحَرَارَةِ", "uz": "lekin termometrni alday olmaysan" }
    ],
    "full_uz": "Tom, shunday deb o'ylaysanmi? Lekin termometrni alday olmaysan.",
    "note": null
  },
  {
    "num": 11,
    "time": "00:01:09,540 --> 00:01:11,760",
    "arabic": "سِيمْكَا، مَا مِيزَانُ الْحَرَارَةِ الزِّئْبَقِيُّ؟",
    "segs": [
      { "ar": "سِيمْكَا", "uz": "Simka" },
      { "ar": "مَا مِيزَانُ الْحَرَارَةِ الزِّئْبَقِيُّ؟", "uz": "simob termometri nima o'zi?" }
    ],
    "full_uz": "Simka, simob termometri nima o'zi?",
    "note": null
  },
  {
    "num": 12,
    "time": "00:01:11,760 --> 00:01:19,760",
    "arabic": "أَتَعْلَمُونَ أَنَّ الزِّئْبَقَ هُوَ مَعْدِنٌ سَائِلٌ ذُو لَوْنٍ فِضِّيٍّ؟",
    "segs": [
      { "ar": "أَتَعْلَمُونَ", "uz": "bilasizlarmi" },
      { "ar": "أَنَّ الزِّئْبَقَ هُوَ مَعْدِنٌ سَائِلٌ", "uz": "simob suyuq metall ekanini" },
      { "ar": "ذُو لَوْنٍ فِضِّيٍّ؟", "uz": "kumush rangli?" }
    ],
    "full_uz": "Simob kumush rangli suyuq metall ekanini bilasizlarmi?",
    "note": null
  },
  {
    "num": 13,
    "time": "00:01:19,760 --> 00:01:24,340",
    "arabic": "مَوَازِينُ الْحَرَارَةِ الْجَدِيدَةُ لَيْسَ فِيهَا زِئْبَقٌ فَهِيَ إِلِكْتْرُونِيَّةٌ",
    "segs": [
      { "ar": "مَوَازِينُ الْحَرَارَةِ الْجَدِيدَةُ لَيْسَ فِيهَا زِئْبَقٌ", "uz": "yangi termometrlarda simob yo'q" },
      { "ar": "فَهِيَ إِلِكْتْرُونِيَّةٌ", "uz": "ular elektron" }
    ],
    "full_uz": "Yangi termometrlarda simob yo'q, ular elektron.",
    "note": null
  },
  {
    "num": 14,
    "time": "00:01:24,340 --> 00:01:30,820",
    "arabic": "الْمَوَازِينُ الْقَدِيمَةُ كَانَتْ تُصْنَعُ مِنْ أُنْبُوبٍ زُجَاجِيٍّ مُدَرَّجٍ وَفِي دَاخِلِهِ بَعْضُ الزِّئْبَقِ",
    "segs": [
      { "ar": "الْمَوَازِينُ الْقَدِيمَةُ كَانَتْ تُصْنَعُ مِنْ أُنْبُوبٍ زُجَاجِيٍّ مُدَرَّجٍ", "uz": "eski termometrlar bo'linmali shisha naychadan yasalgan" },
      { "ar": "وَفِي دَاخِلِهِ بَعْضُ الزِّئْبَقِ", "uz": "va ichida biroz simob bo'lgan" }
    ],
    "full_uz": "Eski termometrlar bo'linmali shisha naychadan yasalgan bo'lib, ichida biroz simob bo'lgan.",
    "note": null
  },
  {
    "num": 15,
    "time": "00:01:30,820 --> 00:01:36,920",
    "arabic": "عِنْدَمَا تَسْخُنُ نِهَايَةُ الْأُنْبُوبِ يَتَمَدَّدُ الزِّئْبَقُ فِي دَاخِلِهَا وَيَصْعَدُ فِي الْأُنْبُوبِ",
    "segs": [
      { "ar": "عِنْدَمَا تَسْخُنُ نِهَايَةُ الْأُنْبُوبِ", "uz": "naycha uchi isitilganda" },
      { "ar": "يَتَمَدَّدُ الزِّئْبَقُ فِي دَاخِلِهَا", "uz": "ichidagi simob kengayadi" },
      { "ar": "وَيَصْعَدُ فِي الْأُنْبُوبِ", "uz": "va naycha bo'ylab ko'tariladi" }
    ],
    "full_uz": "Naycha uchi isitilganda, ichidagi simob kengayadi va naycha bo'ylab ko'tariladi.",
    "note": null
  },
  {
    "num": 16,
    "time": "00:01:36,920 --> 00:01:40,820",
    "arabic": "هَكَذَا تَقِيسُ الْمَوَازِينُ الْقَدِيمَةُ دَرَجَةَ الْحَرَارَةِ",
    "segs": [
      { "ar": "هَكَذَا تَقِيسُ", "uz": "shunday o'lchagan" },
      { "ar": "الْمَوَازِينُ الْقَدِيمَةُ دَرَجَةَ الْحَرَارَةِ", "uz": "eski termometrlar haroratni" }
    ],
    "full_uz": "Eski termometrlar haroratni shunday o'lchagan.",
    "note": null
  },
  {
    "num": 17,
    "time": "00:01:40,820 --> 00:01:44,820",
    "arabic": "وَكُلَّمَا ازْدَادَ ارْتِفَاعُ الزِّئْبَقِ دَلَّ هَذَا عَلَى حَرَارَةٍ أَعْلَى",
    "segs": [
      { "ar": "وَكُلَّمَا ازْدَادَ ارْتِفَاعُ الزِّئْبَقِ", "uz": "simob qanchalik yuqoriga ko'tarilsa" },
      { "ar": "دَلَّ هَذَا عَلَى حَرَارَةٍ أَعْلَى", "uz": "harorat shunchalik yuqori bo'lgan" }
    ],
    "full_uz": "Simob qanchalik yuqoriga ko'tarilsa, harorat shunchalik yuqori bo'lgan.",
    "note": null
  },
  {
    "num": 18,
    "time": "00:01:44,820 --> 00:01:49,120",
    "arabic": "هَذَا يَعْنِي أَنَّ عَلَيَّ تَسْخِينَ نِهَايَةِ الْمِيزَانِ",
    "segs": [
      { "ar": "هَذَا يَعْنِي", "uz": "demak" },
      { "ar": "أَنَّ عَلَيَّ تَسْخِينَ نِهَايَةِ الْمِيزَانِ", "uz": "men termometrning uchini isitishim kerak" }
    ],
    "full_uz": "Demak, men termometrning uchini isitishim kerak.",
    "note": null
  },
  {
    "num": 19,
    "time": "00:01:49,120 --> 00:01:53,120",
    "arabic": "أَنْتَ عَبْقَرِيٌّ يَا تُوم، وَلَكِنْ قُلْ لِي كَيْفَ سَتُسَخِّنُهُ؟",
    "segs": [
      { "ar": "أَنْتَ عَبْقَرِيٌّ يَا تُوم", "uz": "sen dohiysan, Tom" },
      { "ar": "وَلَكِنْ قُلْ لِي كَيْفَ سَتُسَخِّنُهُ؟", "uz": "lekin ayt-chi, uni qanday isitasan?" }
    ],
    "full_uz": "Sen dohiysan, Tom, lekin ayt-chi, uni qanday isitasan?",
    "note": null
  },
  {
    "num": 20,
    "time": "00:01:53,120 --> 00:01:55,420",
    "arabic": "أَخِيرًا وَجَدْتُهُ",
    "segs": null,
    "full_uz": "Nihoyat, topdim.",
    "note": null
  },
  {
    "num": 21,
    "time": "00:01:55,420 --> 00:01:58,700",
    "arabic": "حَسَنًا، لِنَنْظُرْ",
    "segs": null,
    "full_uz": "Xo'p, ko'raylik.",
    "note": null
  },
  {
    "num": 22,
    "time": "00:01:58,700 --> 00:02:01,240",
    "arabic": "أُمِّي، أَنَا جَائِعٌ",
    "segs": null,
    "full_uz": "Ona, men ochman.",
    "note": null
  },
  {
    "num": 23,
    "time": "00:02:01,240 --> 00:02:06,320",
    "arabic": "انْتَظِرْ عَزِيزِي، سَأُحْضِرُ لَكَ شَيْئًا لِتَأْكُلَهُ",
    "segs": [
      { "ar": "انْتَظِرْ عَزِيزِي", "uz": "kut, jonim" },
      { "ar": "سَأُحْضِرُ لَكَ شَيْئًا لِتَأْكُلَهُ", "uz": "senga yeydigan narsa olib kelaman" }
    ],
    "full_uz": "Kut, jonim, senga yeydigan narsa olib kelaman.",
    "note": null
  },
  {
    "num": 24,
    "time": "00:02:06,320 --> 00:02:12,599",
    "arabic": "أُوهْ، هَذَا سَاخِنٌ",
    "segs": null,
    "full_uz": "Voy, bu issiq.",
    "note": null
  },
  {
    "num": 25,
    "time": "00:02:12,599 --> 00:02:14,800",
    "arabic": "سَتَكُونُ حَرَارَتِي مُرْتَفِعَةً",
    "segs": null,
    "full_uz": "Haroratim yuqori bo'ladi.",
    "note": null
  },
  {
    "num": 26,
    "time": "00:02:14,800 --> 00:02:18,920",
    "arabic": "هَاي، مَا الَّذِي تَفْعَلُهُ يَا تُوم؟",
    "segs": [
      { "ar": "هَاي", "uz": "hey" },
      { "ar": "مَا الَّذِي تَفْعَلُهُ يَا تُوم؟", "uz": "nima qilyapsan, Tom?" }
    ],
    "full_uz": "Hey, nima qilyapsan, Tom?",
    "note": null
  },
  {
    "num": 27,
    "time": "00:02:18,920 --> 00:02:20,860",
    "arabic": "حَسَنًا، كَمْ أَصْبَحَتِ الْحَرَارَةُ؟",
    "segs": null,
    "full_uz": "Xo'p, harorat qancha bo'ldi?",
    "note": null
  },
  {
    "num": 28,
    "time": "00:02:20,860 --> 00:02:23,360",
    "arabic": "إِنَّهَا مِئَةٌ وَثَمَانِي دَرَجَاتٍ",
    "segs": null,
    "full_uz": "U yuz sakkiz gradus.",
    "note": null
  },
  {
    "num": 29,
    "time": "00:02:23,360 --> 00:02:24,580",
    "arabic": "يَا إِلَهِي",
    "segs": null,
    "full_uz": "Voy-buy.",
    "note": null
  },
  {
    "num": 30,
    "time": "00:02:24,580 --> 00:02:28,620",
    "arabic": "بِهَذِهِ الْحَرَارَةِ سَيُرْسِلُونَكَ بِسُرْعَةٍ إِلَى الْمُسْتَشْفَى",
    "segs": [
      { "ar": "بِهَذِهِ الْحَرَارَةِ", "uz": "shu haroratda" },
      { "ar": "سَيُرْسِلُونَكَ بِسُرْعَةٍ إِلَى الْمُسْتَشْفَى", "uz": "seni tezda kasalxonaga yuborishadi" }
    ],
    "full_uz": "Shu haroratda seni tezda kasalxonaga yuborishadi.",
    "note": null
  },
  {
    "num": 31,
    "time": "00:02:28,620 --> 00:02:30,760",
    "arabic": "مِنَ الْأَفْضَلِ أَنْ تَرُجَّ الْمِيزَانَ",
    "segs": [
      { "ar": "مِنَ الْأَفْضَلِ", "uz": "ma'qul" },
      { "ar": "أَنْ تَرُجَّ الْمِيزَانَ", "uz": "termometrni silkitgan" }
    ],
    "full_uz": "Termometrni silkitgan ma'qul.",
    "note": null
  },
  {
    "num": 32,
    "time": "00:02:30,760 --> 00:02:32,140",
    "arabic": "نَعَمْ، سَأَرُجُّهُ",
    "segs": null,
    "full_uz": "Ha, silkitaman.",
    "note": null
  },
  {
    "num": 33,
    "time": "00:02:32,140 --> 00:02:34,200",
    "arabic": "رُبَّمَا تَنْزِلُ الْحَرَارَةُ قَلِيلًا",
    "segs": null,
    "full_uz": "Balki harorat biroz pasayar.",
    "note": null
  },
  {
    "num": 34,
    "time": "00:02:34,200 --> 00:02:43,160",
    "arabic": "لَا",
    "segs": null,
    "full_uz": "Yo'q!",
    "note": null
  },
  {
    "num": 35,
    "time": "00:02:43,160 --> 00:02:46,920",
    "arabic": "هَذَا هُوَ جَزَاؤُكَ",
    "segs": null,
    "full_uz": "Bu sening jazoing.",
    "note": null
  },
  {
    "num": 36,
    "time": "00:02:46,920 --> 00:02:49,000",
    "arabic": "فَالْغِشُّ لَا يُجْدِي نَفْعًا",
    "segs": null,
    "full_uz": "Aldash foyda bermaydi.",
    "note": null
  },
  {
    "num": 37,
    "time": "00:02:49,000 --> 00:02:50,620",
    "arabic": "انْظُرْ يَا تُوم",
    "segs": null,
    "full_uz": "Qara, Tom.",
    "note": null
  },
  {
    "num": 38,
    "time": "00:02:50,620 --> 00:02:54,939",
    "arabic": "هَلْ تَرَى هَذَا؟ لَا تَلْمَسِ الزِّئْبَقَ يَا نُولِيك، إِنَّهُ سَامٌّ",
    "segs": [
      { "ar": "هَلْ تَرَى هَذَا؟", "uz": "buni ko'ryapsanmi?" },
      { "ar": "لَا تَلْمَسِ الزِّئْبَقَ يَا نُولِيك", "uz": "simobni ushlama, Nolik" },
      { "ar": "إِنَّهُ سَامٌّ", "uz": "u zaharli" }
    ],
    "full_uz": "Buni ko'ryapsanmi? Simobni ushlama, Nolik, u zaharli.",
    "note": null
  },
  {
    "num": 39,
    "time": "00:02:54,939 --> 00:03:00,800",
    "arabic": "تَوَقَّفْ عَنْ هَذَا، وَأَنْتَ أَيْضًا يَا تُوم، لَا تَلْمَسِ الزِّئْبَقَ، إِنَّهُ خَطِرٌ",
    "segs": [
      { "ar": "تَوَقَّفْ عَنْ هَذَا", "uz": "buni to'xtat" },
      { "ar": "وَأَنْتَ أَيْضًا يَا تُوم", "uz": "sen ham, Tom" },
      { "ar": "لَا تَلْمَسِ الزِّئْبَقَ، إِنَّهُ خَطِرٌ", "uz": "simobni ushlama, u xavfli" }
    ],
    "full_uz": "Buni to'xtat, sen ham, Tom, simobni ushlama, u xavfli.",
    "note": null
  },
  {
    "num": 40,
    "time": "00:03:00,800 --> 00:03:02,580",
    "arabic": "وَلَكِنْ كَيْفَ سَنَرْمِيهِ؟",
    "segs": null,
    "full_uz": "Lekin uni qanday tashlaymiz?",
    "note": null
  },
  {
    "num": 41,
    "time": "00:03:02,580 --> 00:03:04,060",
    "arabic": "نَادِي أُمَّكَ لِتُسَاعِدَكَ",
    "segs": null,
    "full_uz": "Onangni chaqir, yordam bersin.",
    "note": null
  },
  {
    "num": 42,
    "time": "00:03:04,060 --> 00:03:09,080",
    "arabic": "كَيْفَ؟ لَا أَسْتَطِيعُ ذَلِكَ، سَتَعْلَمُ أَنِّي كُنْتُ أُحَاوِلُ خِدَاعَهَا",
    "segs": [
      { "ar": "كَيْفَ؟ لَا أَسْتَطِيعُ ذَلِكَ", "uz": "qanday? buni qila olmayman" },
      { "ar": "سَتَعْلَمُ أَنِّي كُنْتُ أُحَاوِلُ خِدَاعَهَا", "uz": "u meni aldamoqchi bo'lganimni bilib qoladi" }
    ],
    "full_uz": "Qanday? Buni qila olmayman, u meni aldamoqchi bo'lganimni bilib qoladi.",
    "note": null
  },
  {
    "num": 43,
    "time": "00:03:09,080 --> 00:03:11,819",
    "arabic": "مِنَ الْأَفْضَلِ قَوْلُ الْحَقِيقَةِ",
    "segs": null,
    "full_uz": "Haqiqatni aytgan ma'qul.",
    "note": null
  },
  {
    "num": 44,
    "time": "00:03:11,819 --> 00:03:14,480",
    "arabic": "لَا، لَا أَسْتَطِيعُ",
    "segs": null,
    "full_uz": "Yo'q, qila olmayman.",
    "note": null
  },
  {
    "num": 45,
    "time": "00:03:14,480 --> 00:03:17,620",
    "arabic": "حَسَنًا، يَبْدُو أَنَّهُ لَا خِيَارَ آخَرَ",
    "segs": [
      { "ar": "حَسَنًا", "uz": "xo'p" },
      { "ar": "يَبْدُو أَنَّهُ لَا خِيَارَ آخَرَ", "uz": "shekilli, boshqa chora yo'q" }
    ],
    "full_uz": "Xo'p, shekilli, boshqa chora yo'q.",
    "note": null
  },
  {
    "num": 46,
    "time": "00:03:17,620 --> 00:03:20,000",
    "arabic": "نُولِيك، نَادِ بَابُوس وَمَاسِيَا",
    "segs": null,
    "full_uz": "Nolik, Bibusni va Masyani chaqir.",
    "note": "بَابُوس، مَاسِيَا — qahramonlarning (bobo va onaning) ismlari."
  },
  {
    "num": 47,
    "time": "00:03:20,000 --> 00:03:22,620",
    "arabic": "سَأُحْضِرُهُمَا وَأَنْتَ عُدْ إِلَى غُرْفَتِكَ وَانْتَظِرْ",
    "segs": [
      { "ar": "سَأُحْضِرُهُمَا", "uz": "men ularni olib kelaman" },
      { "ar": "وَأَنْتَ عُدْ إِلَى غُرْفَتِكَ وَانْتَظِرْ", "uz": "sen esa xonangga qaytib kut" }
    ],
    "full_uz": "Men ularni olib kelaman, sen esa xonangga qaytib kut.",
    "note": null
  },
  {
    "num": 48,
    "time": "00:03:50,000 --> 00:03:53,439",
    "arabic": "يَبْدُو أَنَّ الْعَمَلَ أُنْجِزَ",
    "segs": null,
    "full_uz": "Shekilli, ish bajarildi.",
    "note": null
  },
  {
    "num": 49,
    "time": "00:03:53,439 --> 00:03:57,939",
    "arabic": "لَيْسَ بَعْدُ، لَا يَزَالُ عَلَيْنَا عَزْلُ هَذَا الزِّئْبَقِ",
    "segs": [
      { "ar": "لَيْسَ بَعْدُ", "uz": "hali emas" },
      { "ar": "لَا يَزَالُ عَلَيْنَا عَزْلُ هَذَا الزِّئْبَقِ", "uz": "bu simobni ajratib olishimiz kerak" }
    ],
    "full_uz": "Hali emas, bu simobni ajratib olishimiz kerak.",
    "note": null
  },
  {
    "num": 50,
    "time": "00:03:57,939 --> 00:04:03,939",
    "arabic": "الْمَوَادُّ الْكِيمَاوِيَّةُ مَوْجُودَةٌ فِي جَمِيعِ الْمَنَازِلِ",
    "segs": [
      { "ar": "الْمَوَادُّ الْكِيمَاوِيَّةُ", "uz": "kimyoviy moddalar" },
      { "ar": "مَوْجُودَةٌ فِي جَمِيعِ الْمَنَازِلِ", "uz": "barcha uylarda mavjud" }
    ],
    "full_uz": "Kimyoviy moddalar barcha uylarda mavjud.",
    "note": null
  },
  {
    "num": 51,
    "time": "00:04:03,939 --> 00:04:09,099",
    "arabic": "إِنَّهَا تُسْتَعْمَلُ لِغَسْلِ الْأَطْبَاقِ وَالْمَلَابِسِ وَالْحَمَّامَاتِ وَالتَّخَلُّصِ مِنَ الْحَشَرَاتِ",
    "segs": [
      { "ar": "إِنَّهَا تُسْتَعْمَلُ لِغَسْلِ الْأَطْبَاقِ وَالْمَلَابِسِ وَالْحَمَّامَاتِ", "uz": "ular idish-tovoq, kiyim, hammomni yuvish uchun ishlatiladi" },
      { "ar": "وَالتَّخَلُّصِ مِنَ الْحَشَرَاتِ", "uz": "va hasharotlarni yo'qotish uchun" }
    ],
    "full_uz": "Ular idish-tovoq, kiyim, hammomni yuvish va hasharotlarni yo'qotish uchun ishlatiladi.",
    "note": null
  },
  {
    "num": 52,
    "time": "00:04:09,099 --> 00:04:13,159",
    "arabic": "هَذِهِ الْمَوَادُّ الْكِيمَاوِيَّةُ يُمْكِنُ أَنْ تُحْدِثَ ضَرَرًا لِصِحَّةِ الْإِنْسَانِ",
    "segs": [
      { "ar": "هَذِهِ الْمَوَادُّ الْكِيمَاوِيَّةُ", "uz": "bu kimyoviy moddalar" },
      { "ar": "يُمْكِنُ أَنْ تُحْدِثَ ضَرَرًا لِصِحَّةِ الْإِنْسَانِ", "uz": "inson sog'lig'iga zarar yetkazishi mumkin" }
    ],
    "full_uz": "Bu kimyoviy moddalar inson sog'lig'iga zarar yetkazishi mumkin.",
    "note": null
  },
  {
    "num": 53,
    "time": "00:04:13,159 --> 00:04:15,120",
    "arabic": "وَلَكِنَّ بَعْضَ النَّاسِ لَا يَفْهَمُونَ هَذَا",
    "segs": [
      { "ar": "وَلَكِنَّ بَعْضَ النَّاسِ", "uz": "lekin ba'zi odamlar" },
      { "ar": "لَا يَفْهَمُونَ هَذَا", "uz": "buni tushunishmaydi" }
    ],
    "full_uz": "Lekin ba'zi odamlar buni tushunishmaydi.",
    "note": null
  },
  {
    "num": 54,
    "time": "00:04:15,120 --> 00:04:18,620",
    "arabic": "فَقَدْ يَسْتَعْمِلُونَ مَوَادَّ خَطِرَةً أَوِ السَّوَائِلَ السَّامَّةَ",
    "segs": [
      { "ar": "فَقَدْ يَسْتَعْمِلُونَ مَوَادَّ خَطِرَةً", "uz": "ular xavfli moddalarni ishlatishlari mumkin" },
      { "ar": "أَوِ السَّوَائِلَ السَّامَّةَ", "uz": "yoki zaharli suyuqliklarni" }
    ],
    "full_uz": "Ular xavfli moddalar yoki zaharli suyuqliklarni ishlatishlari mumkin.",
    "note": null
  },
  {
    "num": 55,
    "time": "00:04:18,620 --> 00:04:21,139",
    "arabic": "وَيَنْسَوْنَ أَنْ يَغْسِلُوا أَيْدِيَهُمْ بَعْدَ ذَلِكَ",
    "segs": [
      { "ar": "وَيَنْسَوْنَ أَنْ يَغْسِلُوا أَيْدِيَهُمْ", "uz": "va qo'llarini yuvishni unutishadi" },
      { "ar": "بَعْدَ ذَلِكَ", "uz": "shundan keyin" }
    ],
    "full_uz": "Va shundan keyin qo'llarini yuvishni unutishadi.",
    "note": null
  },
  {
    "num": 56,
    "time": "00:04:21,139 --> 00:04:25,920",
    "arabic": "وَيَذْهَبُونَ بَعْدَهَا لِيَأْكُلُوا أَوْ يَقُومُونَ بِحَكِّ عُيُونِهِمْ بِأَيْدِيهِمْ",
    "segs": [
      { "ar": "وَيَذْهَبُونَ بَعْدَهَا لِيَأْكُلُوا", "uz": "keyin ovqat yeyishga borishadi" },
      { "ar": "أَوْ يَقُومُونَ بِحَكِّ عُيُونِهِمْ بِأَيْدِيهِمْ", "uz": "yoki ko'zlarini qo'llari bilan ishqalashadi" }
    ],
    "full_uz": "Keyin ovqat yeyishga borishadi yoki ko'zlarini qo'llari bilan ishqalashadi.",
    "note": null
  },
  {
    "num": 57,
    "time": "00:04:25,920 --> 00:04:29,939",
    "arabic": "وَهَذَا قَدْ يُسَبِّبُ ضَرَرًا كَبِيرًا لِعُيُونِهِمْ أَوْ مَعِدَتِهِمْ",
    "segs": [
      { "ar": "وَهَذَا قَدْ يُسَبِّبُ ضَرَرًا كَبِيرًا", "uz": "bu esa katta zarar yetkazishi mumkin" },
      { "ar": "لِعُيُونِهِمْ أَوْ مَعِدَتِهِمْ", "uz": "ko'zlariga yoki oshqozonlariga" }
    ],
    "full_uz": "Bu esa ko'zlariga yoki oshqozonlariga katta zarar yetkazishi mumkin.",
    "note": null
  },
  {
    "num": 58,
    "time": "00:04:29,939 --> 00:04:36,519",
    "arabic": "إِيَّاكُمْ وَأَنْ تَضَعُوا شَيْئًا يَبْدُو دَوَاءً فِي فَمِكُمْ إِلَّا بِإِذْنِ آبَائِكُمْ أَوِ الطَّبِيبِ",
    "segs": [
      { "ar": "إِيَّاكُمْ وَأَنْ تَضَعُوا شَيْئًا يَبْدُو دَوَاءً فِي فَمِكُمْ", "uz": "doriga o'xshagan hech narsani og'zingizga solmang" },
      { "ar": "إِلَّا بِإِذْنِ آبَائِكُمْ أَوِ الطَّبِيبِ", "uz": "ota-onangiz yoki shifokorning ruxsatisiz" }
    ],
    "full_uz": "Ota-onangiz yoki shifokorning ruxsatisiz doriga o'xshagan hech narsani og'zingizga solmang.",
    "note": null
  },
  {
    "num": 59,
    "time": "00:04:36,519 --> 00:04:41,379",
    "arabic": "وَإِذَا وَجَدْتُمْ شَيْئًا مَا عَلَى الْأَرْضِ كَقِطْعَةِ حَلْوَى فَإِيَّاكُمْ أَنْ تَضَعُوهَا فِي فَمِكُمْ",
    "segs": [
      { "ar": "وَإِذَا وَجَدْتُمْ شَيْئًا مَا عَلَى الْأَرْضِ كَقِطْعَةِ حَلْوَى", "uz": "va agar yerdan shirinlikka o'xshagan biror narsa topsangiz" },
      { "ar": "فَإِيَّاكُمْ أَنْ تَضَعُوهَا فِي فَمِكُمْ", "uz": "uni og'zingizga solmang" }
    ],
    "full_uz": "Va agar yerdan shirinlikka o'xshagan biror narsa topsangiz, uni og'zingizga solmang.",
    "note": null
  },
  {
    "num": 60,
    "time": "00:04:41,379 --> 00:04:43,519",
    "arabic": "قَدْ يُحْدِثُ هَذَا تَسَمُّمًا",
    "segs": null,
    "full_uz": "Bu zaharlanishga olib kelishi mumkin.",
    "note": null
  },
  {
    "num": 61,
    "time": "00:04:43,519 --> 00:04:45,879",
    "arabic": "يَاهْ يَا لِلْبَشَرِ",
    "segs": null,
    "full_uz": "Voy, odamlar-a.",
    "note": null
  },
  {
    "num": 62,
    "time": "00:04:45,879 --> 00:04:50,000",
    "arabic": "لَوْ يَتَذَكَّرُونَ هَذِهِ النَّصَائِحَ الْبَسِيطَةَ لَعَاشُوا فِي أَمَانٍ",
    "segs": [
      { "ar": "لَوْ يَتَذَكَّرُونَ هَذِهِ النَّصَائِحَ الْبَسِيطَةَ", "uz": "agar shu oddiy maslahatlarni esda tutishsa" },
      { "ar": "لَعَاشُوا فِي أَمَانٍ", "uz": "xavfsiz yashashardi" }
    ],
    "full_uz": "Agar shu oddiy maslahatlarni esda tutishsa, xavfsiz yashashardi.",
    "note": null
  },
  {
    "num": 63,
    "time": "00:04:50,000 --> 00:04:55,120",
    "arabic": "وَمَاذَا عَنِ الزُّجَاجِ الْمَكْسُورِ؟",
    "segs": null,
    "full_uz": "Sinigan shisha-chi?",
    "note": null
  },
  {
    "num": 64,
    "time": "00:04:55,120 --> 00:04:56,779",
    "arabic": "هَذَا لَيْسَ عَمَلَ الْفِيكْسِيزِ",
    "segs": null,
    "full_uz": "Bu Fiksiklarning ishi emas.",
    "note": null
  },
  {
    "num": 65,
    "time": "00:04:56,779 --> 00:05:01,399",
    "arabic": "تُوم، تَمَّتْ إِزَالَةُ كُلِّ الزِّئْبَقِ",
    "segs": [
      { "ar": "تُوم", "uz": "Tom" },
      { "ar": "تَمَّتْ إِزَالَةُ كُلِّ الزِّئْبَقِ", "uz": "hamma simob tozalandi" }
    ],
    "full_uz": "Tom, hamma simob tozalandi.",
    "note": null
  },
  {
    "num": 66,
    "time": "00:05:01,399 --> 00:05:01,879",
    "arabic": "وَالزُّجَاجُ؟",
    "segs": null,
    "full_uz": "Va shisha-chi?",
    "note": null
  },
  {
    "num": 67,
    "time": "00:05:02,600 --> 00:05:03,879",
    "arabic": "لَا، لَيْسَ الزُّجَاجَ",
    "segs": null,
    "full_uz": "Yo'q, shisha emas.",
    "note": null
  },
  {
    "num": 68,
    "time": "00:05:03,879 --> 00:05:04,879",
    "arabic": "وَهَلْ سَتَفْعَلُونَ؟",
    "segs": null,
    "full_uz": "Va siz qilasizmi?",
    "note": null
  },
  {
    "num": 69,
    "time": "00:05:05,839 --> 00:05:10,699",
    "arabic": "قَالَ بَابُوس هَذَا لَيْسَ اخْتِصَاصَنَا وَقَالَ عَلَيْكَ طَلَبُ ذَلِكَ إِلَى وَالِدَيْكَ",
    "segs": [
      { "ar": "قَالَ بَابُوس هَذَا لَيْسَ اخْتِصَاصَنَا", "uz": "Bibus aytdi, bu bizning ishimiz emas" },
      { "ar": "وَقَالَ عَلَيْكَ طَلَبُ ذَلِكَ إِلَى وَالِدَيْكَ", "uz": "va sendan buni ota-onangdan so'rashingni so'radi" }
    ],
    "full_uz": "Bibus aytdi, bu bizning ishimiz emas, va sendan buni ota-onangdan so'rashingni so'radi.",
    "note": null
  },
  {
    "num": 70,
    "time": "00:05:10,699 --> 00:05:12,719",
    "arabic": "هَذَا الْعَمَلُ أَنْتَ مَسْؤُولٌ عَنْهُ",
    "segs": [
      { "ar": "هَذَا الْعَمَلُ", "uz": "bu ish" },
      { "ar": "أَنْتَ مَسْؤُولٌ عَنْهُ", "uz": "uchun sen javobgarsan" }
    ],
    "full_uz": "Bu ish uchun sen javobgarsan.",
    "note": null
  },
  {
    "num": 71,
    "time": "00:05:15,879 --> 00:05:17,519",
    "arabic": "إِلَيْكَ بَعْضَ الطَّعَامِ",
    "segs": null,
    "full_uz": "Mana senga ovqat.",
    "note": null
  },
  {
    "num": 72,
    "time": "00:05:17,519 --> 00:05:19,519",
    "arabic": "مَا الْأَمْرُ؟",
    "segs": null,
    "full_uz": "Nima gap?",
    "note": null
  },
  {
    "num": 73,
    "time": "00:05:19,519 --> 00:05:22,980",
    "arabic": "أُمِّي، لَقَدْ كَسَرْتُ مِيزَانَ الْحَرَارَةِ",
    "segs": [
      { "ar": "أُمِّي", "uz": "ona" },
      { "ar": "لَقَدْ كَسَرْتُ مِيزَانَ الْحَرَارَةِ", "uz": "men termometrni sindirib qo'ydim" }
    ],
    "full_uz": "Ona, men termometrni sindirib qo'ydim.",
    "note": null
  },
  {
    "num": 74,
    "time": "00:05:22,980 --> 00:05:26,139",
    "arabic": "كَسَرْتَهُ؟ هَلْ آذَيْتَ نَفْسَكَ؟",
    "segs": [
      { "ar": "كَسَرْتَهُ؟", "uz": "sindirdingmi?" },
      { "ar": "هَلْ آذَيْتَ نَفْسَكَ؟", "uz": "o'zingga zarar yetkazmadingmi?" }
    ],
    "full_uz": "Sindirdingmi? O'zingga zarar yetkazmadingmi?",
    "note": null
  },
  {
    "num": 75,
    "time": "00:05:26,139 --> 00:05:26,459",
    "arabic": "لَا",
    "segs": null,
    "full_uz": "Yo'q.",
    "note": null
  },
  {
    "num": 76,
    "time": "00:05:26,459 --> 00:05:29,300",
    "arabic": "وَالزِّئْبَقُ، هَلْ لَمَسْتَهُ؟",
    "segs": null,
    "full_uz": "Simobni-chi, unga tegdingmi?",
    "note": null
  },
  {
    "num": 77,
    "time": "00:05:29,300 --> 00:05:30,159",
    "arabic": "لَمْ أَفْعَلْ",
    "segs": null,
    "full_uz": "Yo'q, tegmadim.",
    "note": null
  },
  {
    "num": 78,
    "time": "00:05:30,159 --> 00:05:33,819",
    "arabic": "سِيمْكَا، أَتَظُنِّينَهُ سَيُخْبِرُهَا؟",
    "segs": null,
    "full_uz": "Simka, unga aytadi deb o'ylaysanmi?",
    "note": null
  },
  {
    "num": 79,
    "time": "00:05:33,819 --> 00:05:35,959",
    "arabic": "وَأَيْنَ كَسَرْتَهُ؟",
    "segs": null,
    "full_uz": "Va uni qayerda sindirding?",
    "note": null
  },
  {
    "num": 80,
    "time": "00:05:35,959 --> 00:05:36,779",
    "arabic": "فِي الْحَمَّامِ",
    "segs": null,
    "full_uz": "Hammomda.",
    "note": null
  },
  {
    "num": 81,
    "time": "00:05:36,779 --> 00:05:39,339",
    "arabic": "لِمَاذَا ذَهَبْتَ إِلَى هُنَاكَ؟",
    "segs": null,
    "full_uz": "Nega u yerga bording?",
    "note": null
  },
  {
    "num": 82,
    "time": "00:05:39,339 --> 00:05:42,159",
    "arabic": "لَقَدْ كُنْتُ أُرِيدُ خِدَاعَكَ",
    "segs": null,
    "full_uz": "Men seni aldamoqchi edim.",
    "note": null
  },
  {
    "num": 83,
    "time": "00:05:42,159 --> 00:05:45,100",
    "arabic": "لَدَيَّ امْتِحَانٌ وَلَمْ أَدْرُسْ",
    "segs": null,
    "full_uz": "Menda imtihon bor va tayyorlanmadim.",
    "note": null
  },
  {
    "num": 84,
    "time": "00:05:45,100 --> 00:05:48,480",
    "arabic": "وَالْآنَ تَأَخَّرَ الْوَقْتُ",
    "segs": null,
    "full_uz": "Va endi vaqt kech bo'lib qoldi.",
    "note": null
  }
];
if (typeof module !== "undefined" && module.exports) {
  module.exports = lessons;
}
