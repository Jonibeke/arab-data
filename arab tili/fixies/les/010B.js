const lessons = [
  {
    "num": 1,
    "time": "00:00:35,800 --> 00:00:55,320",
    "arabic": "الْقُفْلُ التَّوَافُقِيُّ",
    "segs": null,
    "full_uz": "Kombinatsiyali qulf",
    "note": "الْقُفْلُ التَّوَافُقِيُّ — kombinatsiyali (kod bilan ochiladigan) qulf. Bu yerda epizod nomi sifatida ishlatilgan."
  },
  {
    "num": 2,
    "time": "00:00:55,320 --> 00:01:01,000",
    "arabic": "إِنَّهُ تُوم! نُولِيك! أَيْنَ أَنْتُمْ؟ بِمَاذَا تَخَفَّيْتَ؟",
    "segs": [
      { "ar": "إِنَّهُ تُوم!", "uz": "bu men, Tom!" },
      { "ar": "نُولِيك!", "uz": "Nolik!" },
      { "ar": "أَيْنَ أَنْتُمْ؟", "uz": "qayerdasizlar?" },
      { "ar": "بِمَاذَا تَخَفَّيْتَ؟", "uz": "nimaning ortida yashiryapsan?" }
    ],
    "full_uz": "Bu men, Tom! Nolik! Qayerdasizlar? Nimaning ortida yashiryapsan?",
    "note": null
  },
  {
    "num": 3,
    "time": "00:01:01,000 --> 00:01:02,000",
    "arabic": "سَأَجِدُكَ",
    "segs": null,
    "full_uz": "Men seni topaman.",
    "note": null
  },
  {
    "num": 4,
    "time": "00:01:03,000 --> 00:01:05,000",
    "arabic": "نُولِك، هَلْ هَذَا أَنْتَ؟",
    "segs": null,
    "full_uz": "Nolik, bu senmisan?",
    "note": null
  },
  {
    "num": 5,
    "time": "00:01:06,000 --> 00:01:08,000",
    "arabic": "هَيَّا، هَذَا لَيْسَ عَدْلًا، لَقَدْ رَأَيْتَنِي",
    "segs": [
      { "ar": "هَيَّا، هَذَا لَيْسَ عَدْلًا", "uz": "qani, bu adolatsizlik" },
      { "ar": "لَقَدْ رَأَيْتَنِي", "uz": "sen meni ko'rib qolding" }
    ],
    "full_uz": "Qani, bu adolatsizlik, sen meni ko'rib qolding.",
    "note": null
  },
  {
    "num": 6,
    "time": "00:01:09,000 --> 00:01:10,000",
    "arabic": "دَعْنَا نُعِيدَ الْكَرَّةَ",
    "segs": null,
    "full_uz": "Keling, yana bir bor o'ynaymiz.",
    "note": null
  },
  {
    "num": 7,
    "time": "00:01:10,000 --> 00:01:15,000",
    "arabic": "هَلْ تُرِيدُونَنِي أَنْ أَلْعَبَ الْغُمَّيْضَةَ وَأَنَا لَدَيَّ لُعْبَةٌ جَدِيدَةٌ أَلْعَبُ بِهَا؟",
    "segs": [
      { "ar": "هَلْ تُرِيدُونَنِي أَنْ أَلْعَبَ الْغُمَّيْضَةَ", "uz": "mendan bekinmachoq o'ynashimni xohlaysizlarmi" },
      { "ar": "وَأَنَا لَدَيَّ لُعْبَةٌ جَدِيدَةٌ أَلْعَبُ بِهَا؟", "uz": "holbuki menda o'ynaydigan yangi o'yinchoq bor-ku?" }
    ],
    "full_uz": "Mendan bekinmachoq o'ynashimni xohlaysizlarmi, holbuki menda o'ynaydigan yangi o'yinchoq bor-ku?",
    "note": null
  },
  {
    "num": 8,
    "time": "00:01:16,000 --> 00:01:18,000",
    "arabic": "وَأَيْنَ هِيَ؟ أَنَا لَا أَرَاهَا فِي الْغُرْفَةِ",
    "segs": [
      { "ar": "وَأَيْنَ هِيَ؟", "uz": "va u qayerda?" },
      { "ar": "أَنَا لَا أَرَاهَا فِي الْغُرْفَةِ", "uz": "men uni xonada ko'rmayapman" }
    ],
    "full_uz": "Va u qayerda? Men uni xonada ko'rmayapman.",
    "note": null
  },
  {
    "num": 9,
    "time": "00:01:19,000 --> 00:01:21,000",
    "arabic": "لِأَنِّي أَخَذْتُهَا مَعِي إِلَى الْمَدْرَسَةِ",
    "segs": [
      { "ar": "لِأَنِّي أَخَذْتُهَا مَعِي", "uz": "chunki men uni olib ketgandim" },
      { "ar": "إِلَى الْمَدْرَسَةِ", "uz": "maktabga" }
    ],
    "full_uz": "Chunki men uni maktabga olib ketgandim.",
    "note": null
  },
  {
    "num": 10,
    "time": "00:01:21,000 --> 00:01:22,000",
    "arabic": "لِمَاذَا يَا تُوم؟",
    "segs": null,
    "full_uz": "Nega, Tom?",
    "note": null
  },
  {
    "num": 11,
    "time": "00:01:22,000 --> 00:01:23,000",
    "arabic": "لِأَتَبَاهَى بِهَا",
    "segs": null,
    "full_uz": "Maqtanish uchun.",
    "note": null
  },
  {
    "num": 12,
    "time": "00:01:23,000 --> 00:01:30,959",
    "arabic": "مُذْهِلٌ، إِنَّهَا رَائِعَةٌ",
    "segs": null,
    "full_uz": "Ajoyib, u zo'r ekan!",
    "note": null
  },
  {
    "num": 13,
    "time": "00:01:30,959 --> 00:01:35,019",
    "arabic": "تُوم، هَلْ أَسْتَطِيعُ تَجْرِبَتَهَا؟ أَرْجُوكَ وَافِقْ",
    "segs": [
      { "ar": "تُوم، هَلْ أَسْتَطِيعُ تَجْرِبَتَهَا؟", "uz": "Tom, uni sinab ko'rsam bo'ladimi?" },
      { "ar": "أَرْجُوكَ وَافِقْ", "uz": "iltimos, ruxsat ber" }
    ],
    "full_uz": "Tom, uni sinab ko'rsam bo'ladimi? Iltimos, ruxsat ber.",
    "note": null
  },
  {
    "num": 14,
    "time": "00:01:35,019 --> 00:01:37,680",
    "arabic": "لَا، لَمْ أَنْتَهِ مِنَ اللَّعِبِ بِهَا بَعْدُ",
    "segs": [
      { "ar": "لَا", "uz": "yo'q" },
      { "ar": "لَمْ أَنْتَهِ مِنَ اللَّعِبِ بِهَا بَعْدُ", "uz": "men u bilan o'ynab hali bo'lmadim" }
    ],
    "full_uz": "Yo'q, men u bilan o'ynab hali bo'lmadim.",
    "note": null
  },
  {
    "num": 15,
    "time": "00:01:37,680 --> 00:01:41,819",
    "arabic": "إِذَنْ إِيَّاكَ أَنْ تَطْلُبَ إِلَيَّ شَيْئًا بَعْدَ الْآنَ، فَهِمْتَ؟",
    "segs": [
      { "ar": "إِذَنْ إِيَّاكَ أَنْ تَطْلُبَ إِلَيَّ شَيْئًا بَعْدَ الْآنَ", "uz": "unda mendan bundan buyon hech narsa so'ramagin" },
      { "ar": "فَهِمْتَ؟", "uz": "tushundingmi?" }
    ],
    "full_uz": "Unda mendan bundan buyon hech narsa so'ramagin, tushundingmi?",
    "note": null
  },
  {
    "num": 16,
    "time": "00:01:41,819 --> 00:01:45,240",
    "arabic": "لَحْظَةً، هَلْ كَانَ ثَلَاثَةً أَمْ أَرْبَعَةً؟",
    "segs": [
      { "ar": "لَحْظَةً", "uz": "bir daqiqa" },
      { "ar": "هَلْ كَانَ ثَلَاثَةً أَمْ أَرْبَعَةً؟", "uz": "uch edimi yoki to'rtmi?" }
    ],
    "full_uz": "Bir daqiqa, uch edimi yoki to'rtmi?",
    "note": null
  },
  {
    "num": 17,
    "time": "00:01:45,240 --> 00:01:48,780",
    "arabic": "رُبَّمَا كَانَ خَمْسَةً، لَقَدْ نَسِيتُ",
    "segs": [
      { "ar": "رُبَّمَا كَانَ خَمْسَةً", "uz": "balki besh edi" },
      { "ar": "لَقَدْ نَسِيتُ", "uz": "unutibman" }
    ],
    "full_uz": "Balki besh edi, unutibman.",
    "note": null
  },
  {
    "num": 18,
    "time": "00:01:48,780 --> 00:01:51,500",
    "arabic": "مَاذَا نَسِيتَ؟",
    "segs": null,
    "full_uz": "Nimani unutding?",
    "note": null
  },
  {
    "num": 19,
    "time": "00:01:51,500 --> 00:01:55,599",
    "arabic": "لَقَدْ نَسِيتُ رَمْزَ الْقُفْلِ، وَلِذَا لَنْ أَسْتَطِيعَ إِنْهَاءَ فُرُوضِي",
    "segs": [
      { "ar": "لَقَدْ نَسِيتُ رَمْزَ الْقُفْلِ", "uz": "qulf kodini unutdim" },
      { "ar": "وَلِذَا لَنْ أَسْتَطِيعَ إِنْهَاءَ فُرُوضِي", "uz": "shuning uchun uy vazifamni tugata olmayman" }
    ],
    "full_uz": "Qulf kodini unutdim, shuning uchun uy vazifamni tugata olmayman.",
    "note": null
  },
  {
    "num": 20,
    "time": "00:01:55,599 --> 00:01:58,459",
    "arabic": "كُلُّ مَا عَلَيَّ إِنْهَاؤُهُ هُوَ الْمَوْضُوعُ فِي الدَّاخِلِ",
    "segs": [
      { "ar": "كُلُّ مَا عَلَيَّ إِنْهَاؤُهُ", "uz": "tugatishim kerak bo'lgan narsa" },
      { "ar": "هُوَ الْمَوْضُوعُ فِي الدَّاخِلِ", "uz": "ichkaridagi mavzu, xolos" }
    ],
    "full_uz": "Tugatishim kerak bo'lgan narsa ichkaridagi mavzu, xolos.",
    "note": null
  },
  {
    "num": 21,
    "time": "00:01:58,459 --> 00:02:02,500",
    "arabic": "لَنْ أَدْخُلَ إِلَى هُنَاكَ لِمُسَاعَدَتِكَ، لَا تُحَاوِلْ أَبَدًا",
    "segs": [
      { "ar": "لَنْ أَدْخُلَ إِلَى هُنَاكَ لِمُسَاعَدَتِكَ", "uz": "senga yordam berish uchun u yerga kirmayman" },
      { "ar": "لَا تُحَاوِلْ أَبَدًا", "uz": "hech urinma ham" }
    ],
    "full_uz": "Senga yordam berish uchun u yerga kirmayman, hech urinma ham.",
    "note": null
  },
  {
    "num": 22,
    "time": "00:02:03,159 --> 00:02:05,859",
    "arabic": "تُوم، لِمَاذَا تَبْدُو مُنْزَعِجًا؟",
    "segs": null,
    "full_uz": "Tom, nega xafa ko'rinyapsan?",
    "note": null
  },
  {
    "num": 23,
    "time": "00:02:05,859 --> 00:02:09,979",
    "arabic": "رَمْزُ الْقُفْلِ يَا سِيمْكَا، لَقَدْ نَسِيتُهُ",
    "segs": [
      { "ar": "رَمْزُ الْقُفْلِ يَا سِيمْكَا", "uz": "qulf kodi, Simka" },
      { "ar": "لَقَدْ نَسِيتُهُ", "uz": "uni unutib qo'ydim" }
    ],
    "full_uz": "Qulf kodi, Simka, uni unutib qo'ydim.",
    "note": null
  },
  {
    "num": 24,
    "time": "00:02:09,979 --> 00:02:14,400",
    "arabic": "لَا تَقْلَقْ، سَنَفْتَحُهُ، أَعْرِفُ كُلَّ مَا يَتَعَلَّقُ بِالْأَقْفَالِ",
    "segs": [
      { "ar": "لَا تَقْلَقْ، سَنَفْتَحُهُ", "uz": "xavotir olma, uni ochamiz" },
      { "ar": "أَعْرِفُ كُلَّ مَا يَتَعَلَّقُ بِالْأَقْفَالِ", "uz": "men qulflar haqida hamma narsani bilaman" }
    ],
    "full_uz": "Xavotir olma, uni ochamiz, men qulflar haqida hamma narsani bilaman.",
    "note": null
  },
  {
    "num": 25,
    "time": "00:02:14,400 --> 00:02:20,580",
    "arabic": "الْقُفْلُ التَّوَافُقِيُّ الْبَسِيطُ يَتَكَوَّنُ مِنْ أَقْرَاصٍ عَلَيْهَا أَرْقَامٌ",
    "segs": [
      { "ar": "الْقُفْلُ التَّوَافُقِيُّ الْبَسِيطُ", "uz": "oddiy kombinatsiyali qulf" },
      { "ar": "يَتَكَوَّنُ مِنْ أَقْرَاصٍ عَلَيْهَا أَرْقَامٌ", "uz": "ustida raqamlar bo'lgan disklardan tashkil topgan" }
    ],
    "full_uz": "Oddiy kombinatsiyali qulf ustida raqamlar bo'lgan disklardan tashkil topgan.",
    "note": null
  },
  {
    "num": 26,
    "time": "00:02:21,500 --> 00:02:23,879",
    "arabic": "وَفِي وَسَطِ كُلِّ قُرْصٍ حُفْرَةٌ لَهَا شَقٌّ",
    "segs": [
      { "ar": "وَفِي وَسَطِ كُلِّ قُرْصٍ", "uz": "har bir diskning o'rtasida" },
      { "ar": "حُفْرَةٌ لَهَا شَقٌّ", "uz": "tirqishi bo'lgan teshik bor" }
    ],
    "full_uz": "Har bir diskning o'rtasida tirqishi bo'lgan teshik bor.",
    "note": null
  },
  {
    "num": 27,
    "time": "00:02:23,879 --> 00:02:29,479",
    "arabic": "عِنْدَمَا تَتَوَضَّعُ جَمِيعُ الْأَقْرَاصِ بِحَيْثُ تَكُونُ شُقُوقُهَا عَلَى صَفٍّ وَاحِدٍ",
    "segs": [
      { "ar": "عِنْدَمَا تَتَوَضَّعُ جَمِيعُ الْأَقْرَاصِ", "uz": "barcha disklar shunday joylashganda" },
      { "ar": "بِحَيْثُ تَكُونُ شُقُوقُهَا عَلَى صَفٍّ وَاحِدٍ", "uz": "ularning tirqishlari bir qatorga tushib turadigan bo'lsa" }
    ],
    "full_uz": "Barcha disklarning tirqishlari bir qatorga tushib turganda,",
    "note": null
  },
  {
    "num": 28,
    "time": "00:02:29,479 --> 00:02:31,719",
    "arabic": "يَنْزَلِقُ مِسْمَارُ الْقُفْلِ بِحُرِّيَّةٍ",
    "segs": null,
    "full_uz": "qulfning mixi erkin sirg'alib chiqadi.",
    "note": null
  },
  {
    "num": 29,
    "time": "00:02:31,719 --> 00:02:39,379",
    "arabic": "وَلِوَضْعِ الشُّقُوقِ عَلَى صَفٍّ وَاحِدٍ",
    "segs": [
      { "ar": "وَلِوَضْعِ الشُّقُوقِ", "uz": "tirqishlarni qo'yish uchun" },
      { "ar": "عَلَى صَفٍّ وَاحِدٍ", "uz": "bir qatorga" }
    ],
    "full_uz": "Tirqishlarni bir qatorga qo'yish uchun esa —",
    "note": null
  },
  {
    "num": 30,
    "time": "00:02:39,379 --> 00:02:41,620",
    "arabic": "دَوِّرُوا الْأَقْرَاصَ عَلَى الرَّمْزِ",
    "segs": null,
    "full_uz": "— disklarni kodga qarab aylantiring.",
    "note": null
  },
  {
    "num": 31,
    "time": "00:02:41,620 --> 00:02:44,500",
    "arabic": "فَيُفَكُّ الْقُفْلُ بِبَسَاطَةٍ",
    "segs": null,
    "full_uz": "Shunda qulf oddiygina ochiladi.",
    "note": null
  },
  {
    "num": 32,
    "time": "00:02:45,259 --> 00:02:50,280",
    "arabic": "يَبْدُو أَنَّ عَلَيْنَا النَّظَرَ دَاخِلَ الْقُفْلِ",
    "segs": [
      { "ar": "يَبْدُو أَنَّ عَلَيْنَا النَّظَرَ", "uz": "shekilli, qarashimiz kerak" },
      { "ar": "دَاخِلَ الْقُفْلِ", "uz": "qulf ichiga" }
    ],
    "full_uz": "Shekilli, qulf ichiga qarashimiz kerak.",
    "note": null
  },
  {
    "num": 33,
    "time": "00:02:51,500 --> 00:02:53,500",
    "arabic": "هَاهَا، مَعَكَ حَقٌّ",
    "segs": null,
    "full_uz": "Haha, haqsan.",
    "note": null
  },
  {
    "num": 34,
    "time": "00:02:53,500 --> 00:02:56,500",
    "arabic": "نُولِيك، أَيْنَ أَنْتَ؟ لَدَيْنَا عَمَلٌ",
    "segs": [
      { "ar": "نُولِيك، أَيْنَ أَنْتَ؟", "uz": "Nolik, qayerdasan?" },
      { "ar": "لَدَيْنَا عَمَلٌ", "uz": "bizda ish bor" }
    ],
    "full_uz": "Nolik, qayerdasan? Bizda ish bor.",
    "note": null
  },
  {
    "num": 35,
    "time": "00:02:56,500 --> 00:02:59,500",
    "arabic": "لَنْ أَفْعَلَ، لَنْ أُسَاعِدَ وَلَدًا جَشِعًا مِثْلَهُ",
    "segs": [
      { "ar": "لَنْ أَفْعَلَ", "uz": "qilmayman" },
      { "ar": "لَنْ أُسَاعِدَ وَلَدًا جَشِعًا مِثْلَهُ", "uz": "uningdek ochko'z bolaga yordam bermayman" }
    ],
    "full_uz": "Qilmayman, uningdek ochko'z bolaga yordam bermayman.",
    "note": null
  },
  {
    "num": 36,
    "time": "00:02:59,500 --> 00:03:04,500",
    "arabic": "نُولِيك، هَلَّا سَاعَدْتَنِي، وَلَنْ أَكُونَ جَشِعًا بَعْدَ الْآنَ، صَدِّقْنِي",
    "segs": [
      { "ar": "نُولِيك، هَلَّا سَاعَدْتَنِي", "uz": "Nolik, menga yordam bersang-chi" },
      { "ar": "وَلَنْ أَكُونَ جَشِعًا بَعْدَ الْآنَ", "uz": "bundan buyon ochko'z bo'lmayman" },
      { "ar": "صَدِّقْنِي", "uz": "ishon menga" }
    ],
    "full_uz": "Nolik, menga yordam bersang-chi, bundan buyon ochko'z bo'lmayman, ishon menga.",
    "note": null
  },
  {
    "num": 37,
    "time": "00:03:04,500 --> 00:03:07,500",
    "arabic": "حَسَنًا يَا تُوم، لَقَدْ أَقْنَعْتَنِي",
    "segs": [
      { "ar": "حَسَنًا يَا تُوم", "uz": "xo'p, Tom" },
      { "ar": "لَقَدْ أَقْنَعْتَنِي", "uz": "meni ishontirding" }
    ],
    "full_uz": "Xo'p, Tom, meni ishontirding.",
    "note": null
  },
  {
    "num": 38,
    "time": "00:03:07,500 --> 00:03:10,500",
    "arabic": "لَكِنْ حِينَ نَنْتَهِي، سَتَتْرُكُنِي أَلْعَبُ بِلُعْبَتِكَ",
    "segs": [
      { "ar": "لَكِنْ حِينَ نَنْتَهِي", "uz": "lekin ishni tugatgach" },
      { "ar": "سَتَتْرُكُنِي أَلْعَبُ بِلُعْبَتِكَ", "uz": "o'yinchog'ing bilan o'ynashimga ruxsat berasan" }
    ],
    "full_uz": "Lekin ishni tugatgach, o'yinchog'ing bilan o'ynashimga ruxsat berasan.",
    "note": null
  },
  {
    "num": 39,
    "time": "00:03:10,500 --> 00:03:11,500",
    "arabic": "نَعَمْ",
    "segs": null,
    "full_uz": "Ha.",
    "note": null
  },
  {
    "num": 40,
    "time": "00:03:15,500 --> 00:03:17,500",
    "arabic": "أَيْ، الْمَكَانُ ضَيِّقٌ جِدًّا",
    "segs": null,
    "full_uz": "Voy, bu yer juda tor.",
    "note": null
  },
  {
    "num": 41,
    "time": "00:03:17,500 --> 00:03:23,180",
    "arabic": "تَمَاسَكْ، سَنُدِيرُ الْأَقْرَاصَ بِالتَّتَالِي وَأَنْتَ أَخْبِرْنَا عِنْدَمَا تَتَوَافَقُ",
    "segs": [
      { "ar": "تَمَاسَكْ", "uz": "chida" },
      { "ar": "سَنُدِيرُ الْأَقْرَاصَ بِالتَّتَالِي", "uz": "biz disklarni birma-bir aylantiramiz" },
      { "ar": "وَأَنْتَ أَخْبِرْنَا عِنْدَمَا تَتَوَافَقُ", "uz": "sen esa mos kelganda bizga ayt" }
    ],
    "full_uz": "Chida, biz disklarni birma-bir aylantiramiz, sen esa mos kelganda bizga ayt.",
    "note": null
  },
  {
    "num": 42,
    "time": "00:03:23,180 --> 00:03:26,219",
    "arabic": "تَوَقَّفْ، وَالْآنَ أَدِرِ التَّالِيَ",
    "segs": [
      { "ar": "تَوَقَّفْ", "uz": "to'xta" },
      { "ar": "وَالْآنَ أَدِرِ التَّالِيَ", "uz": "endi keyingisini aylantir" }
    ],
    "full_uz": "To'xta, endi keyingisini aylantir.",
    "note": null
  },
  {
    "num": 43,
    "time": "00:03:26,219 --> 00:03:27,800",
    "arabic": "تَوَقَّفْ",
    "segs": null,
    "full_uz": "To'xta.",
    "note": null
  },
  {
    "num": 44,
    "time": "00:03:27,800 --> 00:03:29,900",
    "arabic": "تَوَقَّفْ",
    "segs": null,
    "full_uz": "To'xta.",
    "note": null
  },
  {
    "num": 45,
    "time": "00:03:29,900 --> 00:03:32,099",
    "arabic": "جَرِّبِ الْآنَ",
    "segs": null,
    "full_uz": "Endi sinab ko'r.",
    "note": null
  },
  {
    "num": 46,
    "time": "00:03:32,099 --> 00:03:35,800",
    "arabic": "أَجَلْ",
    "segs": null,
    "full_uz": "Ha!",
    "note": null
  },
  {
    "num": 47,
    "time": "00:03:35,800 --> 00:03:38,659",
    "arabic": "نَجِيشْ",
    "segs": null,
    "full_uz": "Bo'ldi!",
    "note": "نَجِيشْ — asl so'zi noaniq, taxminan quvonch undovi sifatida tarjima qilindi."
  },
  {
    "num": 48,
    "time": "00:03:38,659 --> 00:03:40,400",
    "arabic": "مَرْحَى",
    "segs": null,
    "full_uz": "Ura!",
    "note": null
  },
  {
    "num": 49,
    "time": "00:03:40,400 --> 00:03:44,819",
    "arabic": "وَرَمْزُكَ كَانَ بَسِيطًا بَسِيطًا جِدًّا",
    "segs": [
      { "ar": "وَرَمْزُكَ كَانَ بَسِيطًا", "uz": "va kodlaring sodda ekan" },
      { "ar": "بَسِيطًا جِدًّا", "uz": "juda-juda sodda" }
    ],
    "full_uz": "Va kodlaring juda-juda sodda ekan.",
    "note": null
  },
  {
    "num": 50,
    "time": "00:03:47,500 --> 00:03:53,539",
    "arabic": "الْأَرْقَامُ وَالْحُرُوفُ الَّتِي تُسْتَعْمَلُ لِقَفْلِ شَيْءٍ مَا تُدْعَى بِالرَّمْزِ أَوْ كَلِمَةِ الْمُرُورِ",
    "segs": [
      { "ar": "الْأَرْقَامُ وَالْحُرُوفُ الَّتِي تُسْتَعْمَلُ لِقَفْلِ شَيْءٍ مَا", "uz": "biror narsani qulflash uchun ishlatiladigan raqam va harflar" },
      { "ar": "تُدْعَى بِالرَّمْزِ أَوْ كَلِمَةِ الْمُرُورِ", "uz": "kod yoki parol deb ataladi" }
    ],
    "full_uz": "Biror narsani qulflash uchun ishlatiladigan raqam va harflar kod yoki parol deb ataladi.",
    "note": null
  },
  {
    "num": 51,
    "time": "00:03:53,539 --> 00:03:56,240",
    "arabic": "وَلِتَكُونَ كَلِمَةُ مُرُورِكُمْ جَيِّدَةً",
    "segs": null,
    "full_uz": "Parolingiz yaxshi bo'lishi uchun,",
    "note": null
  },
  {
    "num": 52,
    "time": "00:03:56,240 --> 00:03:58,939",
    "arabic": "إِلَيْكُمْ بَعْضَ الْمُلَاحَظَاتِ",
    "segs": null,
    "full_uz": "mana bir nechta maslahatlar.",
    "note": null
  },
  {
    "num": 53,
    "time": "00:03:58,939 --> 00:04:03,199",
    "arabic": "إِيَّاكُمْ وَأَنْ تَخْتَارُوا كَلِمَةَ سِرٍّ بَسِيطَةً يَسْهُلُ تَخْمِينُهَا",
    "segs": [
      { "ar": "إِيَّاكُمْ وَأَنْ تَخْتَارُوا كَلِمَةَ سِرٍّ بَسِيطَةً", "uz": "sodda parol tanlamang" },
      { "ar": "يَسْهُلُ تَخْمِينُهَا", "uz": "oson topiladigan" }
    ],
    "full_uz": "Oson topiladigan sodda parol tanlamang.",
    "note": null
  },
  {
    "num": 54,
    "time": "00:04:03,199 --> 00:04:08,740",
    "arabic": "كَكَلِمَةِ سِرٍّ فِيهَا أَحْرُفٌ وَأَرْقَامٌ مُتَمَاثِلَةٌ أَوْ مُتَتَالِيَةٌ",
    "segs": [
      { "ar": "كَكَلِمَةِ سِرٍّ فِيهَا أَحْرُفٌ وَأَرْقَامٌ مُتَمَاثِلَةٌ", "uz": "masalan, bir xil harf va raqamlardan iborat parol" },
      { "ar": "أَوْ مُتَتَالِيَةٌ", "uz": "yoki ketma-ket" }
    ],
    "full_uz": "Masalan, bir xil yoki ketma-ket harf va raqamlardan iborat parol.",
    "note": null
  },
  {
    "num": 55,
    "time": "00:04:08,740 --> 00:04:13,979",
    "arabic": "إِنَّهَا أَيْضًا فِكْرَةٌ سَيِّئَةٌ أَنْ تَكُونَ مُكَوَّنَةً مِنْ يَوْمِ مِيلَادِكُمْ أَوِ اسْمِكُمْ",
    "segs": [
      { "ar": "إِنَّهَا أَيْضًا فِكْرَةٌ سَيِّئَةٌ", "uz": "bu ham yomon fikr" },
      { "ar": "أَنْ تَكُونَ مُكَوَّنَةً مِنْ يَوْمِ مِيلَادِكُمْ أَوِ اسْمِكُمْ", "uz": "tug'ilgan kuningiz yoki ismingizdan tuzilishi" }
    ],
    "full_uz": "Tug'ilgan kuningiz yoki ismingizdan tuzilgan parol ham yomon fikr.",
    "note": null
  },
  {
    "num": 56,
    "time": "00:04:13,979 --> 00:04:17,879",
    "arabic": "مِنَ الْأَفْضَلِ التَّفْكِيرُ فِي كَلِمَاتِ مُرُورٍ أَكْثَرَ تَعْقِيدًا",
    "segs": [
      { "ar": "مِنَ الْأَفْضَلِ التَّفْكِيرُ", "uz": "o'ylab ko'rgan ma'qul" },
      { "ar": "فِي كَلِمَاتِ مُرُورٍ أَكْثَرَ تَعْقِيدًا", "uz": "murakkabroq parollar haqida" }
    ],
    "full_uz": "Murakkabroq parollar haqida o'ylab ko'rgan ma'qul.",
    "note": null
  },
  {
    "num": 57,
    "time": "00:04:17,879 --> 00:04:20,699",
    "arabic": "وَلَا تَنْسَوْا كَلِمَةَ السِّرِّ بَعْدَ أَنْ تَبْتَكِرُوهَا",
    "segs": [
      { "ar": "وَلَا تَنْسَوْا كَلِمَةَ السِّرِّ", "uz": "va parolni unutmang" },
      { "ar": "بَعْدَ أَنْ تَبْتَكِرُوهَا", "uz": "uni o'ylab topgach" }
    ],
    "full_uz": "Va parolni o'ylab topgach, uni unutmang.",
    "note": null
  },
  {
    "num": 58,
    "time": "00:04:20,699 --> 00:04:23,719",
    "arabic": "اكْتُبُوا كَلِمَةَ الْمُرُورِ عَلَى قِطْعَةٍ مِنَ الْوَرَقِ",
    "segs": [
      { "ar": "اكْتُبُوا كَلِمَةَ الْمُرُورِ", "uz": "parolni yozib qo'ying" },
      { "ar": "عَلَى قِطْعَةٍ مِنَ الْوَرَقِ", "uz": "bir varaq qog'ozga" }
    ],
    "full_uz": "Parolni bir varaq qog'ozga yozib qo'ying,",
    "note": null
  },
  {
    "num": 59,
    "time": "00:04:23,719 --> 00:04:25,500",
    "arabic": "وَاحْفَظُوهَا فِي مَكَانٍ آمِنٍ",
    "segs": null,
    "full_uz": "va uni xavfsiz joyda saqlang.",
    "note": null
  },
  {
    "num": 60,
    "time": "00:04:25,500 --> 00:04:27,879",
    "arabic": "لَكِنْ لَا تُظْهِرُوهَا لِأَيِّ أَحَدٍ آخَرَ",
    "segs": [
      { "ar": "لَكِنْ لَا تُظْهِرُوهَا", "uz": "lekin uni ko'rsatmang" },
      { "ar": "لِأَيِّ أَحَدٍ آخَرَ", "uz": "boshqa hech kimga" }
    ],
    "full_uz": "Lekin uni boshqa hech kimga ko'rsatmang.",
    "note": null
  },
  {
    "num": 61,
    "time": "00:04:27,879 --> 00:04:31,039",
    "arabic": "وَعِنْدَهَا إِنْ نَسِيتُمْ كَلِمَةَ السِّرِّ أَوِ الرَّمْزَ",
    "segs": [
      { "ar": "وَعِنْدَهَا إِنْ نَسِيتُمْ", "uz": "va agar unutib qo'ysangiz" },
      { "ar": "كَلِمَةَ السِّرِّ أَوِ الرَّمْزَ", "uz": "parol yoki kodni" }
    ],
    "full_uz": "Va agar parol yoki kodni unutib qo'ysangiz,",
    "note": null
  },
  {
    "num": 62,
    "time": "00:04:31,039 --> 00:04:34,699",
    "arabic": "سَتَكُونُونَ قَادِرِينَ عَلَى التَّذَكُّرِ بِمُسَاعَدَةِ تِلْكَ الْوَرَقَةِ",
    "segs": [
      { "ar": "سَتَكُونُونَ قَادِرِينَ عَلَى التَّذَكُّرِ", "uz": "eslab olishingiz mumkin bo'ladi" },
      { "ar": "بِمُسَاعَدَةِ تِلْكَ الْوَرَقَةِ", "uz": "o'sha qog'oz yordamida" }
    ],
    "full_uz": "o'sha qog'oz yordamida uni eslab olishingiz mumkin bo'ladi.",
    "note": null
  },
  {
    "num": 63,
    "time": "00:04:43,980 --> 00:04:47,480",
    "arabic": "وَلِمَ وَضَعْتَ قُفْلًا عَلَى حَقِيبَتِكَ؟",
    "segs": [
      { "ar": "وَلِمَ وَضَعْتَ قُفْلًا", "uz": "nega qulf qo'yding" },
      { "ar": "عَلَى حَقِيبَتِكَ؟", "uz": "sumkangga?" }
    ],
    "full_uz": "Nega sumkangga qulf qo'yding?",
    "note": null
  },
  {
    "num": 64,
    "time": "00:04:47,480 --> 00:04:49,700",
    "arabic": "كَيْ أُخْفِيَ اللُّعْبَةَ عَنِ الْآخَرِينَ",
    "segs": [
      { "ar": "كَيْ أُخْفِيَ اللُّعْبَةَ", "uz": "o'yinchoqni yashirish uchun" },
      { "ar": "عَنِ الْآخَرِينَ", "uz": "boshqalardan" }
    ],
    "full_uz": "O'yinchoqni boshqalardan yashirish uchun.",
    "note": null
  },
  {
    "num": 65,
    "time": "00:04:49,700 --> 00:04:52,740",
    "arabic": "وَلِمَاذَا أَخَذْتَهَا إِلَى الْمَدْرَسَةِ؟",
    "segs": null,
    "full_uz": "Va nega uni maktabga olib bording?",
    "note": null
  },
  {
    "num": 66,
    "time": "00:04:52,740 --> 00:04:54,620",
    "arabic": "لِأَتَبَاهَى بِهَا أَمَامَ الصَّفِّ",
    "segs": null,
    "full_uz": "Sinf oldida maqtanish uchun.",
    "note": null
  },
  {
    "num": 67,
    "time": "00:04:54,620 --> 00:04:57,240",
    "arabic": "وَهَلْ فَعَلْتَ؟",
    "segs": null,
    "full_uz": "Va maqtandingmi?",
    "note": null
  },
  {
    "num": 68,
    "time": "00:04:57,240 --> 00:04:58,000",
    "arabic": "مُسْتَحِيلٌ",
    "segs": null,
    "full_uz": "Aslo.",
    "note": null
  },
  {
    "num": 69,
    "time": "00:04:58,000 --> 00:05:00,100",
    "arabic": "لَوْ رَأَوْهَا لَقَالُوا لِي",
    "segs": null,
    "full_uz": "Agar ko'rishganida, menga aytishardi.",
    "note": null
  },
  {
    "num": 70,
    "time": "00:05:00,100 --> 00:05:02,500",
    "arabic": "أُرِيدُ أَنْ أُجَرِّبَهَا وَأُرِيدُ أَنْ أَلْعَبَ بِهَا",
    "segs": [
      { "ar": "أُرِيدُ أَنْ أُجَرِّبَهَا", "uz": "men uni sinab ko'rmoqchiman" },
      { "ar": "وَأُرِيدُ أَنْ أَلْعَبَ بِهَا", "uz": "va u bilan o'ynamoqchiman" }
    ],
    "full_uz": "Men uni sinab ko'rmoqchiman va u bilan o'ynamoqchiman.",
    "note": null
  },
  {
    "num": 71,
    "time": "00:05:02,500 --> 00:05:05,040",
    "arabic": "لِذَا خَبَّأْتَهَا وَلَمْ تُرِهَا لِأَحَدٍ",
    "segs": [
      { "ar": "لِذَا خَبَّأْتَهَا", "uz": "shuning uchun uni yashirding" },
      { "ar": "وَلَمْ تُرِهَا لِأَحَدٍ", "uz": "va hech kimga ko'rsatmading" }
    ],
    "full_uz": "Shuning uchun uni yashirding va hech kimga ko'rsatmading.",
    "note": null
  },
  {
    "num": 72,
    "time": "00:05:05,040 --> 00:05:06,560",
    "arabic": "نَعَمْ، لَا أَحَدٍ",
    "segs": null,
    "full_uz": "Ha, hech kimga.",
    "note": null
  },
  {
    "num": 73,
    "time": "00:05:06,560 --> 00:05:10,980",
    "arabic": "إِذَنْ لِمَاذَا أَخَذْتَهَا مَعَكَ؟",
    "segs": null,
    "full_uz": "Unda nega uni o'zing bilan olib bording?",
    "note": null
  },
  {
    "num": 74,
    "time": "00:05:10,980 --> 00:05:12,160",
    "arabic": "لِأَتَبَاهَى بِهَا",
    "segs": null,
    "full_uz": "Maqtanish uchun.",
    "note": null
  },
  {
    "num": 75,
    "time": "00:05:12,160 --> 00:05:14,380",
    "arabic": "يَا لَكَ مِنْ مُتَبَاهٍ",
    "segs": null,
    "full_uz": "Sen naqadar maqtanchoqsan!",
    "note": null
  },
  {
    "num": 76,
    "time": "00:05:14,380 --> 00:05:15,980",
    "arabic": "يَا لَكَ مِنْ طَمَّاعٍ",
    "segs": null,
    "full_uz": "Sen naqadar ochko'zsan!",
    "note": null
  },
  {
    "num": 77,
    "time": "00:05:15,980 --> 00:05:19,020",
    "arabic": "أُوبْ آسِفٌ كُنْتُ طَمَّاعًا",
    "segs": [
      { "ar": "أُوبْ آسِفٌ", "uz": "voy, uzr" },
      { "ar": "كُنْتُ طَمَّاعًا", "uz": "men ochko'z bo'ldim" }
    ],
    "full_uz": "Voy, uzr, men ochko'z bo'ldim.",
    "note": null
  },
  {
    "num": 78,
    "time": "00:05:19,020 --> 00:05:20,720",
    "arabic": "هَيَّا نَلْعَبُ الْآنَ",
    "segs": null,
    "full_uz": "Qani, endi o'ynaymiz.",
    "note": null
  },
  {
    "num": 79,
    "time": "00:05:20,720 --> 00:05:24,640",
    "arabic": "الْعَبْ",
    "segs": null,
    "full_uz": "O'yna.",
    "note": null
  },
  {
    "num": 80,
    "time": "00:05:34,640 --> 00:05:37,700",
    "arabic": "هَلْ نَحْنُ نُزْعِجُكَ؟",
    "segs": null,
    "full_uz": "Biz senga xalaqit beryapmizmi?",
    "note": null
  },
  {
    "num": 81,
    "time": "00:05:37,700 --> 00:05:39,660",
    "arabic": "هَلْ قِفِ الصَّمْعِ بِهُدُوءٍ؟",
    "segs": null,
    "full_uz": "Jimgina turolmaysizlarmi?",
    "note": "هَلْ قِفِ الصَّمْعِ بِهُدُوءٍ؟ — asl matn noaniq (ehtimol 'هَلْ تَقِفُوا بِصَمْتٍ؟' nazarda tutilgan), mazmuniga ko'ra tarjima qilindi."
  },
  {
    "num": 82,
    "time": "00:05:39,660 --> 00:05:41,420",
    "arabic": "أَنْتُمَا تَهُزَّانِ الْمِنْضَدَةَ",
    "segs": null,
    "full_uz": "Sizlar stolni tebratyapsizlar.",
    "note": null
  }
];
if (typeof module !== "undefined" && module.exports) {
  module.exports = lessons;
}
