const lessons = [
    {
  num: 1,
  time: "00:00:55,320 --> 00:01:01,000",
  arabic: "إِنَّهُ تُومْ! نُولِيكْ! أَيْنَ أَنْتُمْ؟ بِمَاذَا تَخَفَّيْتُمْ؟",
  segs: [
    { ar: "إِنَّهُ تُومْ", uz: "Bu Tom!" },
    { ar: "نُولِيكْ", uz: "Nolik!" },
    { ar: "أَيْنَ أَنْتُمْ؟", uz: "Qayerdasizlar?" },
    { ar: "بِمَاذَا تَخَفَّيْتُمْ؟", uz: "Nimaga yashirindingizlar?" }
  ],
  full_uz: "Bu Tom! Nolik! Qayerdasizlar? Nimaga yashirindingizlar?",
  note: null
},

{
  num: 2,
  time: "00:01:01,000 --> 00:01:02,000",
  arabic: "سَأَجِدُكَ",
  segs: [
    { ar: "سَأَجِدُكَ", uz: "Seni topaman." }
  ],
  full_uz: "Seni topaman.",
  note: null
},

{
  num: 3,
  time: "00:01:03,000 --> 00:01:05,000",
  arabic: "نُولِيكْ، هَلْ هَذَا أَنْتَ؟",
  segs: [
    { ar: "نُولِيكْ", uz: "Nolik." },
    { ar: "هَلْ هَذَا أَنْتَ؟", uz: "Bu senmisan?" }
  ],
  full_uz: "Nolik, bu senmisan?",
  note: null
},

{
  num: 4,
  time: "00:01:06,000 --> 00:01:08,000",
  arabic: "هَيَّا، هَذَا لَيْسَ عَدْلًا، لَقَدْ رَأَيْتَنِي",
  segs: [
    { ar: "هَيَّا", uz: "E-e!" },
    { ar: "هَذَا لَيْسَ عَدْلًا", uz: "Bu insofdan emas." },
    { ar: "لَقَدْ رَأَيْتَنِي", uz: "Axir meni ko'rding." }
  ],
  full_uz: "E-e, bu insofdan emas, axir meni ko'rding.",
  note: null
},

{
  num: 5,
  time: "00:01:09,000 --> 00:01:10,000",
  arabic: "دَعْنَا نُعِيدُ الْكَرَّةَ",
  segs: [
    { ar: "دَعْنَا", uz: "Qani" },
    { ar: "نُعِيدُ الْكَرَّةَ", uz: "yana boshidan o'ynaylik" }
  ],
  full_uz: "Qani, yana boshidan o'ynaylik.",
  note: null
},

{
  num: 6,
  time: "00:01:10,000 --> 00:01:15,000",
  arabic: "هَلْ تُرِيدُونِي أَنْ أَلْعَبَ الْغُمَّيْضَةَ وَأَنَا لَدَيَّ لُعْبَةٌ جَدِيدَةٌ أَلْعَبُ بِهَا؟",
  segs: [
    { ar: "هَلْ تُرِيدُونِي", uz: "Sizlar mendan" },
    { ar: "أَنْ أَلْعَبَ الْغُمَّيْضَةَ", uz: "bekinmachoq o'ynashimni xohlaysizlarmi" },
    { ar: "وَأَنَا لَدَيَّ", uz: "holbuki menda" },
    { ar: "لُعْبَةٌ جَدِيدَةٌ", uz: "yangi o'yinchoq bor" },
    { ar: "أَلْعَبُ بِهَا؟", uz: "o'ynaydigan?" }
  ],
  full_uz: "Sizlar mendan bekinmachoq o'ynashimni xohlaysizlarmi? Holbuki menda yangi o'yinchoq bor-ku.",
  note: null
},

{
  num: 7,
  time: "00:01:16,000 --> 00:01:18,000",
  arabic: "وَأَيْنَ هِيَ؟ أَنَا لَا أَرَاهَا فِي الْغُرْفَةِ",
  segs: [
    { ar: "وَأَيْنَ هِيَ؟", uz: "Qani u?" },
    { ar: "أَنَا لَا أَرَاهَا", uz: "Uni ko'rmayapman" },
    { ar: "فِي الْغُرْفَةِ", uz: "xonada" }
  ],
  full_uz: "Qani u? Uni xonada ko'rmayapman.",
  note: null
},

{
  num: 8,
  time: "00:01:19,000 --> 00:01:21,000",
  arabic: "لِأَنِّي أَخَذْتُهَا مَعِي إِلَى الْمَدْرَسَةِ",
  segs: [
    { ar: "لِأَنِّي", uz: "Chunki men" },
    { ar: "أَخَذْتُهَا مَعِي", uz: "uni o'zim bilan oldim" },
    { ar: "إِلَى الْمَدْرَسَةِ", uz: "maktabga" }
  ],
  full_uz: "Chunki uni o'zim bilan maktabga olib bordim.",
  note: null
},

{
  num: 9,
  time: "00:01:21,000 --> 00:01:22,000",
  arabic: "لِمَاذَا يَا تُومْ؟",
  segs: [
    { ar: "لِمَاذَا", uz: "Nima uchun" },
    { ar: "يَا تُومْ؟", uz: "Tom?" }
  ],
  full_uz: "Nima uchun, Tom?",
  note: null
},

{
  num: 10,
  time: "00:01:22,000 --> 00:01:23,000",
  arabic: "لِأَتَبَاهَى بِهَا",
  segs: [
    { ar: "لِأَتَبَاهَى", uz: "Maqtanish uchun" },
    { ar: "بِهَا", uz: "u bilan" }
  ],
  full_uz: "U bilan maqtanish uchun.",
  note: null
},
{
  num: 11,
  time: "00:01:23,000 --> 00:01:30,959",
  arabic: "مُذْهِلٌ، إِنَّهَا رَائِعَةٌ",
  segs: [
    { ar: "مُذْهِلٌ", uz: "Zo'r ekan!" },
    { ar: "إِنَّهَا", uz: "U" },
    { ar: "رَائِعَةٌ", uz: "ajoyib" }
  ],
  full_uz: "Zo'r ekan! U ajoyib!",
  note: null
},

{
  num: 12,
  time: "00:01:30,959 --> 00:01:35,019",
  arabic: "تُومْ، هَلْ أَسْتَطِيعُ تَجْرِبَتَهَا؟ أَرْجُوكَ وَافِقْ",
  segs: [
    { ar: "تُومْ", uz: "Tom." },
    { ar: "هَلْ أَسْتَطِيعُ", uz: "Sinab ko'rsam bo'ladimi" },
    { ar: "تَجْرِبَتَهَا؟", uz: "uni?" },
    { ar: "أَرْجُوكَ", uz: "Iltimos." },
    { ar: "وَافِقْ", uz: "Rozi bo'l." }
  ],
  full_uz: "Tom, uni sinab ko'rsam bo'ladimi? Iltimos, rozi bo'l.",
  note: null
},

{
  num: 13,
  time: "00:01:35,019 --> 00:01:37,680",
  arabic: "لَا، لَمْ أَنْتَهِ مِنَ اللَّعِبِ بِهَا بَعْدُ",
  segs: [
    { ar: "لَا", uz: "Yo'q." },
    { ar: "لَمْ أَنْتَهِ", uz: "Hali tugatganim yo'q" },
    { ar: "مِنَ اللَّعِبِ بِهَا", uz: "u bilan o'ynashni" },
    { ar: "بَعْدُ", uz: "hali" }
  ],
  full_uz: "Yo'q, hali u bilan o'ynab bo'lganim yo'q.",
  note: null
},

{
  num: 14,
  time: "00:01:37,680 --> 00:01:41,819",
  arabic: "إِذًا إِيَّاكَ أَنْ تَطْلُبَ إِلَيَّ شَيْئًا بَعْدَ الْآنِ، فَهِمْتَ؟",
  segs: [
    { ar: "إِذًا", uz: "Unda" },
    { ar: "إِيَّاكَ أَنْ تَطْلُبَ إِلَيَّ شَيْئًا", uz: "bundan keyin mendan hech narsa so'rama" },
    { ar: "بَعْدَ الْآنِ", uz: "endi" },
    { ar: "فَهِمْتَ؟", uz: "tushundingmi?" }
  ],
  full_uz: "Unda endi mendan hech narsa so'rama, tushundingmi?",
  note: null
},

{
  num: 15,
  time: "00:01:41,819 --> 00:01:45,240",
  arabic: "لَحْظَةً، هَلْ كَانَ ثَلَاثَةً أَمْ أَرْبَعَةً؟",
  segs: [
    { ar: "لَحْظَةً", uz: "Bir daqiqa." },
    { ar: "هَلْ كَانَ", uz: "U" },
    { ar: "ثَلَاثَةً أَمْ أَرْبَعَةً؟", uz: "uch edimi yoki to'rt?" }
  ],
  full_uz: "Bir daqiqa, uch edimi yoki to'rt?",
  note: null
},

{
  num: 16,
  time: "00:01:45,240 --> 00:01:48,780",
  arabic: "رُبَّمَا كَانَ خَمْسَةً، لَقَدْ نَسِيتُ",
  segs: [
    { ar: "رُبَّمَا", uz: "Balki" },
    { ar: "كَانَ خَمْسَةً", uz: "beshdir" },
    { ar: "لَقَدْ نَسِيتُ", uz: "esimdan chiqibdi" }
  ],
  full_uz: "Balki beshdir. Esimdan chiqibdi.",
  note: null
},

{
  num: 17,
  time: "00:01:48,780 --> 00:01:51,500",
  arabic: "مَاذَا نَسِيتَ؟",
  segs: [
    { ar: "مَاذَا", uz: "Nimani" },
    { ar: "نَسِيتَ؟", uz: "unutding?" }
  ],
  full_uz: "Nimani unutding?",
  note: null
},

{
  num: 18,
  time: "00:01:51,500 --> 00:01:55,599",
  arabic: "لَقَدْ نَسِيتُ رَمْزَ الْقُفْلِ، وَلِذَا لَنْ أَسْتَطِيعَ إِنْهَاءَ فُرُوضِي",
  segs: [
    { ar: "لَقَدْ نَسِيتُ", uz: "Esimdan chiqibdi" },
    { ar: "رَمْزَ الْقُفْلِ", uz: "qulfning kodi" },
    { ar: "وَلِذَا", uz: "shuning uchun" },
    { ar: "لَنْ أَسْتَطِيعَ", uz: "qila olmayman" },
    { ar: "إِنْهَاءَ فُرُوضِي", uz: "uy vazifamni tugatishni" }
  ],
  full_uz: "Qulfning kodi esimdan chiqibdi, shuning uchun uy vazifamni tugata olmayman.",
  note: null
},

{
  num: 19,
  time: "00:01:55,599 --> 00:01:58,459",
  arabic: "كُلُّ مَا عَلَيَّ إِنْهَاؤُهُ هُوَ الْمَوْضُوعُ فِي الدَّاخِلِ",
  segs: [
    { ar: "كُلُّ مَا عَلَيَّ", uz: "Menga kerak bo'lgan narsa" },
    { ar: "إِنْهَاؤُهُ", uz: "tugatishim" },
    { ar: "هُوَ الْمَوْضُوعُ", uz: "mavzu" },
    { ar: "فِي الدَّاخِلِ", uz: "ichkarida" }
  ],
  full_uz: "Tugatishim kerak bo'lgan mavzu ichkarida.",
  note: null
},

{
  num: 20,
  time: "00:01:58,459 --> 00:02:02,500",
  arabic: "لَنْ أَدْخُلَ إِلَى هُنَاكَ لِمُسَاعَدَتِكَ، لَا تُحَاوِلْ أَبَدًا",
  segs: [
    { ar: "لَنْ أَدْخُلَ", uz: "Men kirmayman" },
    { ar: "إِلَى هُنَاكَ", uz: "u yerga" },
    { ar: "لِمُسَاعَدَتِكَ", uz: "senga yordam berish uchun" },
    { ar: "لَا تُحَاوِلْ أَبَدًا", uz: "urinib ham ko'rma" }
  ],
  full_uz: "Senga yordam berish uchun u yerga kirmayman. Urinib ham ko'rma.",
  note: null
},
{
  num: 21,
  time: "00:02:03,159 --> 00:02:05,859",
  arabic: "تُومْ، لِمَاذَا تَبْدُو مُنْزَعِجًا؟",
  segs: [
    { ar: "تُومْ", uz: "Tom." },
    { ar: "لِمَاذَا", uz: "Nega" },
    { ar: "تَبْدُو", uz: "ko'rinyapsan" },
    { ar: "مُنْزَعِجًا؟", uz: "xavotirli?" }
  ],
  full_uz: "Tom, nega xavotirli ko'rinyapsan?",
  note: null
},

{
  num: 22,
  time: "00:02:05,859 --> 00:02:09,979",
  arabic: "رَمْزُ الْقُفْلِ يَا سِيمْكَا، لَقَدْ نَسِيتُهُ",
  segs: [
    { ar: "رَمْزُ الْقُفْلِ", uz: "Qulfning kodi" },
    { ar: "يَا سِيمْكَا", uz: "Simka" },
    { ar: "لَقَدْ نَسِيتُهُ", uz: "esimdan chiqibdi" }
  ],
  full_uz: "Simka, qulfning kodi esimdan chiqibdi.",
  note: null
},

{
  num: 23,
  time: "00:02:09,979 --> 00:02:14,400",
  arabic: "لَا تَقْلَقْ، سَنَفْتَحُهُ، أَعْرِفُ كُلَّ مَا يَتَعَلَّقُ بِالْأَقْفَالِ",
  segs: [
    { ar: "لَا تَقْلَقْ", uz: "Xavotir olma." },
    { ar: "سَنَفْتَحُهُ", uz: "Uni ochamiz." },
    { ar: "أَعْرِفُ", uz: "Men bilaman" },
    { ar: "كُلَّ مَا يَتَعَلَّقُ بِالْأَقْفَالِ", uz: "qulflarga oid hamma narsani" }
  ],
  full_uz: "Xavotir olma, uni ochamiz. Men qulflarga oid hamma narsani bilaman.",
  note: null
},

{
  num: 24,
  time: "00:02:14,400 --> 00:02:20,580",
  arabic: "الْقُفْلُ التَّوَافُقِيُّ الْبَسِيطُ يَتَكَوَّنُ مِنْ أَقْرَاصٍ عَلَيْهَا أَرْقَامٌ",
  segs: [
    { ar: "الْقُفْلُ التَّوَافُقِيُّ الْبَسِيطُ", uz: "Oddiy kombinatsion qulf" },
    { ar: "يَتَكَوَّنُ مِنْ", uz: "tashkil topadi" },
    { ar: "أَقْرَاصٍ", uz: "disklardan" },
    { ar: "عَلَيْهَا أَرْقَامٌ", uz: "ularda raqamlar bo'ladi" }
  ],
  full_uz: "Oddiy kombinatsion qulf ustida raqamlar bo'lgan disklardan tashkil topadi.",
  note: null
},

{
  num: 25,
  time: "00:02:21,500 --> 00:02:23,879",
  arabic: "وَفِي وَسَطِ كُلِّ قُرْصٍ حُفْرَةٌ لَهَا شَقٌّ",
  segs: [
    { ar: "وَفِي وَسَطِ", uz: "Har birining markazida" },
    { ar: "كُلِّ قُرْصٍ", uz: "diskning" },
    { ar: "حُفْرَةٌ", uz: "teshik bor" },
    { ar: "لَهَا شَقٌّ", uz: "unda tirqish bo'ladi" }
  ],
  full_uz: "Har bir diskning markazida tirqishli teshik bo'ladi.",
  note: null
},

{
  num: 26,
  time: "00:02:23,879 --> 00:02:29,479",
  arabic: "عِنْدَمَا تَتَوَضَّعُ جَمِيعُ الْأَقْرَاصِ بِحَيْثُ تَكُونُ شُقُوقُهَا عَلَى صَفٍّ وَاحِدٍ",
  segs: [
    { ar: "عِنْدَمَا", uz: "Qachonki" },
    { ar: "تَتَوَضَّعُ جَمِيعُ الْأَقْرَاصِ", uz: "barcha disklar joylashsa" },
    { ar: "بِحَيْثُ تَكُونُ شُقُوقُهَا", uz: "ularning tirqishlari" },
    { ar: "عَلَى صَفٍّ وَاحِدٍ", uz: "bir chiziqqa tushsa" }
  ],
  full_uz: "Barcha disklarning tirqishlari bir chiziqqa tushganda.",
  note: null
},

{
  num: 27,
  time: "00:02:29,479 --> 00:02:31,719",
  arabic: "يَنْزَلِقُ مِسْمَارُ الْقُفْلِ بِحُرِّيَّةٍ",
  segs: [
    { ar: "يَنْزَلِقُ", uz: "Sirg'anadi" },
    { ar: "مِسْمَارُ الْقُفْلِ", uz: "qulfning tili" },
    { ar: "بِحُرِّيَّةٍ", uz: "bemalol" }
  ],
  full_uz: "Qulfning tili bemalol sirg'anadi.",
  note: null
},

{
  num: 28,
  time: "00:02:31,719 --> 00:02:39,379",
  arabic: "وَلِوَضْعِ الشُّقُوقِ عَلَى صَفٍّ وَاحِدٍ",
  segs: [
    { ar: "وَلِوَضْعِ", uz: "Tirqishlarni joylashtirish uchun" },
    { ar: "الشُّقُوقِ", uz: "tirqishlarni" },
    { ar: "عَلَى صَفٍّ وَاحِدٍ", uz: "bir chiziqqa" }
  ],
  full_uz: "Tirqishlarni bir chiziqqa keltirish uchun.",
  note: null
},

{
  num: 29,
  time: "00:02:39,379 --> 00:02:41,620",
  arabic: "دَوِّرُوا الْأَقْرَاصَ عَلَى الرَّمْزِ",
  segs: [
    { ar: "دَوِّرُوا", uz: "Aylantiring" },
    { ar: "الْأَقْرَاصَ", uz: "disklarni" },
    { ar: "عَلَى الرَّمْزِ", uz: "kod bo'yicha" }
  ],
  full_uz: "Disklarni kod bo'yicha aylantiring.",
  note: null
},

{
  num: 30,
  time: "00:02:41,620 --> 00:02:44,500",
  arabic: "فَيُفَكُّ الْقُفْلُ بِبَسَاطَةٍ",
  segs: [
    { ar: "فَيُفَكُّ", uz: "Shunda ochiladi" },
    { ar: "الْقُفْلُ", uz: "qulf" },
    { ar: "بِبَسَاطَةٍ", uz: "osongina" }
  ],
  full_uz: "Shunda qulf osongina ochiladi.",
  note: null
},
{
  num: 31,
  time: "00:02:45,259 --> 00:02:50,280",
  arabic: "يَبْدُو أَنَّ عَلَيْنَا النَّظَرَ دَاخِلَ الْقُفْلِ",
  segs: [
    { ar: "يَبْدُو", uz: "Ko'rinishidan" },
    { ar: "أَنَّ عَلَيْنَا", uz: "bizga kerak" },
    { ar: "النَّظَرَ", uz: "qarash" },
    { ar: "دَاخِلَ الْقُفْلِ", uz: "qulfning ichiga" }
  ],
  full_uz: "Ko'rinishidan, qulfning ichiga qarashimiz kerak.",
  note: null
},

{
  num: 32,
  time: "00:02:51,500 --> 00:02:53,500",
  arabic: "هَاهَا، مَعَكَ حَقٌّ",
  segs: [
    { ar: "هَاهَا", uz: "Ha-ha." },
    { ar: "مَعَكَ حَقٌّ", uz: "To'g'ri aytyapsan." }
  ],
  full_uz: "Ha-ha, to'g'ri aytyapsan.",
  note: null
},

{
  num: 33,
  time: "00:02:53,500 --> 00:02:56,500",
  arabic: "نُولِيكْ، أَيْنَ أَنْتَ؟ لَدَيْنَا عَمَلٌ",
  segs: [
    { ar: "نُولِيكْ", uz: "Nolik." },
    { ar: "أَيْنَ أَنْتَ؟", uz: "Qayerdasan?" },
    { ar: "لَدَيْنَا عَمَلٌ", uz: "Bizni ish kutyapti." }
  ],
  full_uz: "Nolik, qayerdasan? Bizni ish kutyapti.",
  note: null
},

{
  num: 34,
  time: "00:02:56,500 --> 00:02:59,500",
  arabic: "لَنْ أَفْعَلَ، لَنْ أُسَاعِدَ وَلَدًا جَشِعًا مِثْلَهُ",
  segs: [
    { ar: "لَنْ أَفْعَلَ", uz: "Yo'q, qilmayman." },
    { ar: "لَنْ أُسَاعِدَ", uz: "Yordam bermayman" },
    { ar: "وَلَدًا جَشِعًا", uz: "ochko'z bolaga" },
    { ar: "مِثْلَهُ", uz: "unga o'xshagan" }
  ],
  full_uz: "Yo'q, qilmayman. Unga o'xshagan ochko'z bolaga yordam bermayman.",
  note: null
},

{
  num: 35,
  time: "00:02:59,500 --> 00:03:04,500",
  arabic: "نُولِيكْ، هَلَّا سَاعَدْتَنِي وَلَنْ أَكُونَ جَشِعًا بَعْدَ الْآنِ، صَدِّقْنِي",
  segs: [
    { ar: "نُولِيكْ", uz: "Nolik." },
    { ar: "هَلَّا سَاعَدْتَنِي", uz: "Menga yordam bersang-chi." },
    { ar: "وَلَنْ أَكُونَ جَشِعًا", uz: "Endi ochko'z bo'lmayman." },
    { ar: "بَعْدَ الْآنِ", uz: "bundan buyon" },
    { ar: "صَدِّقْنِي", uz: "Ishon menga." }
  ],
  full_uz: "Nolik, menga yordam bersang-chi. Bundan buyon ochko'z bo'lmayman, ishon menga.",
  note: null
},

{
  num: 36,
  time: "00:03:04,500 --> 00:03:07,500",
  arabic: "حَسَنًا يَا تُومْ، لَقَدْ أَقْنَعْتَنِي",
  segs: [
    { ar: "حَسَنًا", uz: "Mayli." },
    { ar: "يَا تُومْ", uz: "Tom." },
    { ar: "لَقَدْ أَقْنَعْتَنِي", uz: "Meni ishontirding." }
  ],
  full_uz: "Mayli, Tom. Meni ishontirding.",
  note: null
},

{
  num: 37,
  time: "00:03:07,500 --> 00:03:10,500",
  arabic: "لَكِنْ حِينَ نَنْتَهِي، سَتَتْرُكُنِي أَلْعَبُ بِلُعْبَتِكَ",
  segs: [
    { ar: "لَكِنْ", uz: "Lekin." },
    { ar: "حِينَ نَنْتَهِي", uz: "Ishimiz tugagach" },
    { ar: "سَتَتْرُكُنِي", uz: "menga ruxsat berasan" },
    { ar: "أَلْعَبُ بِلُعْبَتِكَ", uz: "o'yinchog'ing bilan o'ynashga" }
  ],
  full_uz: "Lekin ishimiz tugagach, o'yinchog'ing bilan o'ynashga ruxsat berasan.",
  note: null
},

{
  num: 38,
  time: "00:03:10,500 --> 00:03:11,500",
  arabic: "نَعَمْ",
  segs: [
    { ar: "نَعَمْ", uz: "Ha." }
  ],
  full_uz: "Ha.",
  note: null
},

{
  num: 39,
  time: "00:03:15,500 --> 00:03:17,500",
  arabic: "أَيْ، الْمَكَانُ ضَيِّقٌ جِدًّا",
  segs: [
    { ar: "أَيْ", uz: "Voy." },
    { ar: "الْمَكَانُ", uz: "Bu yer" },
    { ar: "ضَيِّقٌ جِدًّا", uz: "juda tor ekan" }
  ],
  full_uz: "Voy, bu yer juda tor ekan.",
  note: null
},

{
  num: 40,
  time: "00:03:17,500 --> 00:03:23,180",
  arabic: "تَمَاسَكْ، سَنُدِيرُ الْأَقْرَاصَ بِالتَّتَالِي وَأَنْتَ أَخْبِرْنَا عِنْدَمَا تَتَوَافَقُ",
  segs: [
    { ar: "تَمَاسَكْ", uz: "Mahkam tur." },
    { ar: "سَنُدِيرُ الْأَقْرَاصَ بِالتَّتَالِي", uz: "Biz disklarni navbat bilan aylantiramiz." },
    { ar: "وَأَنْتَ أَخْبِرْنَا", uz: "Sen esa bizga ayt" },
    { ar: "عِنْدَمَا تَتَوَافَقُ", uz: "ular mos kelganida" }
  ],
  full_uz: "Mahkam tur. Biz disklarni navbat bilan aylantiramiz, sen esa ular mos kelganida bizga ayt.",
  note: null
},
{
  num: 41,
  time: "00:03:23,180 --> 00:03:26,219",
  arabic: "تَوَقَّفْ، وَالْآنَ أَدِرِ التَّالِي",
  segs: [
    { ar: "تَوَقَّفْ", uz: "To'xta." },
    { ar: "وَالْآنَ", uz: "Endi esa" },
    { ar: "أَدِرِ التَّالِي", uz: "keyingisini aylantir" }
  ],
  full_uz: "To'xta. Endi esa keyingisini aylantir.",
  note: null
},

{
  num: 42,
  time: "00:03:26,219 --> 00:03:27,800",
  arabic: "تَوَقَّفْ",
  segs: [
    { ar: "تَوَقَّفْ", uz: "To'xta." }
  ],
  full_uz: "To'xta.",
  note: null
},

{
  num: 43,
  time: "00:03:27,800 --> 00:03:29,900",
  arabic: "تَوَقَّفْ",
  segs: [
    { ar: "تَوَقَّفْ", uz: "To'xta." }
  ],
  full_uz: "To'xta.",
  note: null
},

{
  num: 44,
  time: "00:03:29,900 --> 00:03:32,099",
  arabic: "جَرِّبِ الْآنَ",
  segs: [
    { ar: "جَرِّبِ", uz: "Sinab ko'r" },
    { ar: "الْآنَ", uz: "endi" }
  ],
  full_uz: "Endi sinab ko'r.",
  note: null
},

{
  num: 45,
  time: "00:03:32,099 --> 00:03:35,800",
  arabic: "أَجَلْ",
  segs: [
    { ar: "أَجَلْ", uz: "Ha." }
  ],
  full_uz: "Ha.",
  note: null
},

{
  num: 46,
  time: "00:03:35,800 --> 00:03:38,659",
  arabic: "نَجَحْنَا",
  segs: [
    { ar: "نَجَحْنَا", uz: "Muvaffaq bo'ldik!" }
  ],
  full_uz: "Muvaffaq bo'ldik!",
  note: null
},

{
  num: 47,
  time: "00:03:38,659 --> 00:03:40,400",
  arabic: "مَرْحَى",
  segs: [
    { ar: "مَرْحَى", uz: "Ura!" }
  ],
  full_uz: "Ura!",
  note: null
},

{
  num: 48,
  time: "00:03:40,400 --> 00:03:44,819",
  arabic: "وَرَمْزُكَ كَانَ بَسِيطًا، بَسِيطًا جِدًّا",
  segs: [
    { ar: "وَرَمْزُكَ", uz: "Sening koding esa" },
    { ar: "كَانَ بَسِيطًا", uz: "juda oddiy edi" },
    { ar: "بَسِيطًا جِدًّا", uz: "nihoyatda oddiy" }
  ],
  full_uz: "Sening koding juda oddiy, nihoyatda oddiy ekan.",
  note: null
},

{
  num: 49,
  time: "00:03:47,500 --> 00:03:53,539",
  arabic: "الْأَرْقَامُ وَالْحُرُوفُ الَّتِي تُسْتَعْمَلُ لِقَفْلِ شَيْءٍ مَا تُدْعَى بِالرَّمْزِ أَوْ كَلِمَةِ الْمُرُورِ",
  segs: [
    { ar: "الْأَرْقَامُ وَالْحُرُوفُ", uz: "Raqamlar va harflar" },
    { ar: "الَّتِي تُسْتَعْمَلُ", uz: "ishlatiladigan" },
    { ar: "لِقَفْلِ شَيْءٍ مَا", uz: "biror narsani qulflash uchun" },
    { ar: "تُدْعَى", uz: "deb ataladi" },
    { ar: "بِالرَّمْزِ أَوْ كَلِمَةِ الْمُرُورِ", uz: "kod yoki parol" }
  ],
  full_uz: "Biror narsani qulflash uchun ishlatiladigan raqamlar va harflar kod yoki parol deb ataladi.",
  note: null
},

{
  num: 50,
  time: "00:03:53,539 --> 00:03:56,240",
  arabic: "وَلِتَكُونَ كَلِمَةُ مُرُورِكُمْ جَيِّدَةً",
  segs: [
    { ar: "وَلِتَكُونَ", uz: "Parolingiz" },
    { ar: "كَلِمَةُ مُرُورِكُمْ", uz: "parolingiz" },
    { ar: "جَيِّدَةً", uz: "mustahkam bo'lishi uchun" }
  ],
  full_uz: "Parolingiz mustahkam bo'lishi uchun.",
  note: null
},
{
  num: 51,
  time: "00:03:56,240 --> 00:03:58,939",
  arabic: "إِلَيْكُمْ بَعْضُ الْمُلَاحَظَاتِ",
  segs: [
    { ar: "إِلَيْكُمْ", uz: "Mana sizlarga" },
    { ar: "بَعْضُ الْمُلَاحَظَاتِ", uz: "bir necha tavsiyalar" }
  ],
  full_uz: "Mana sizlarga bir necha tavsiyalar.",
  note: null
},

{
  num: 52,
  time: "00:03:58,939 --> 00:04:03,199",
  arabic: "إِيَّاكُمْ وَأَنْ تَخْتَارُوا كَلِمَةَ سِرٍّ بَسِيطَةً يَسْهُلُ تَخْمِينُهَا",
  segs: [
    { ar: "إِيَّاكُمْ", uz: "Aslo" },
    { ar: "وَأَنْ تَخْتَارُوا", uz: "tanlamang" },
    { ar: "كَلِمَةَ سِرٍّ بَسِيطَةً", uz: "oson parolni" },
    { ar: "يَسْهُلُ تَخْمِينُهَا", uz: "uni topish oson bo'ladigan" }
  ],
  full_uz: "Topish oson bo'ladigan oddiy parolni aslo tanlamang.",
  note: null
},

{
  num: 53,
  time: "00:04:03,199 --> 00:04:08,740",
  arabic: "كَكَلِمَةِ سِرٍّ فِيهَا أَحْرُفٌ وَأَرْقَامٌ مُمَاثِلَةٌ أَوْ مُتَتَالِيَةٌ",
  segs: [
    { ar: "كَكَلِمَةِ سِرٍّ", uz: "Masalan, shunday parol" },
    { ar: "فِيهَا", uz: "unda" },
    { ar: "أَحْرُفٌ وَأَرْقَامٌ", uz: "harflar va raqamlar" },
    { ar: "مُمَاثِلَةٌ أَوْ مُتَتَالِيَةٌ", uz: "bir xil yoki ketma-ket bo'lsa" }
  ],
  full_uz: "Masalan, bir xil yoki ketma-ket harf va raqamlardan iborat parol.",
  note: null
},

{
  num: 54,
  time: "00:04:08,740 --> 00:04:13,979",
  arabic: "إِنَّهَا أَيْضًا فِكْرَةٌ سَيِّئَةٌ أَنْ تَكُونَ مُكَوَّنَةً مِنْ يَوْمِ مِيلَادِكُمْ أَوِ اسْمِكُمْ",
  segs: [
    { ar: "إِنَّهَا أَيْضًا", uz: "Shuningdek" },
    { ar: "فِكْرَةٌ سَيِّئَةٌ", uz: "yomon fikr" },
    { ar: "أَنْ تَكُونَ مُكَوَّنَةً", uz: "parolning tuzilishi" },
    { ar: "مِنْ يَوْمِ مِيلَادِكُمْ أَوِ اسْمِكُمْ", uz: "tug'ilgan kuningiz yoki ismingizdan bo'lishi" }
  ],
  full_uz: "Parol tug'ilgan kuningiz yoki ismingizdan iborat bo'lishi ham yomon fikr.",
  note: null
},

{
  num: 55,
  time: "00:04:13,979 --> 00:04:17,879",
  arabic: "مِنَ الْأَفْضَلِ التَّفْكِيرُ فِي كَلِمَاتِ مُرُورٍ أَكْثَرَ تَعْقِيدًا",
  segs: [
    { ar: "مِنَ الْأَفْضَلِ", uz: "Eng yaxshisi" },
    { ar: "التَّفْكِيرُ", uz: "o'ylab topish" },
    { ar: "فِي كَلِمَاتِ مُرُورٍ", uz: "parollarni" },
    { ar: "أَكْثَرَ تَعْقِيدًا", uz: "murakkabroq" }
  ],
  full_uz: "Eng yaxshisi murakkabroq parollar o'ylab topishdir.",
  note: null
},

{
  num: 56,
  time: "00:04:17,879 --> 00:04:20,699",
  arabic: "وَلَا تَنْسَوْا كَلِمَةَ السِّرِّ بَعْدَ أَنْ تَبْتَكِرُوهَا",
  segs: [
    { ar: "وَلَا تَنْسَوْا", uz: "Unutmang" },
    { ar: "كَلِمَةَ السِّرِّ", uz: "parolni" },
    { ar: "بَعْدَ أَنْ تَبْتَكِرُوهَا", uz: "uni yaratganingizdan keyin" }
  ],
  full_uz: "Parolni yaratganingizdan keyin uni unutmang.",
  note: null
},

{
  num: 57,
  time: "00:04:20,699 --> 00:04:23,719",
  arabic: "اكْتُبُوا كَلِمَةَ الْمُرُورِ عَلَى قِطْعَةٍ مِنَ الْوَرَقِ",
  segs: [
    { ar: "اكْتُبُوا", uz: "Yozib qo'ying" },
    { ar: "كَلِمَةَ الْمُرُورِ", uz: "parolni" },
    { ar: "عَلَى قِطْعَةٍ مِنَ الْوَرَقِ", uz: "bir varaq qog'ozga" }
  ],
  full_uz: "Parolni bir varaq qog'ozga yozib qo'ying.",
  note: null
},

{
  num: 58,
  time: "00:04:23,719 --> 00:04:25,500",
  arabic: "وَاحْفَظُوهَا فِي مَكَانٍ آمِنٍ",
  segs: [
    { ar: "وَاحْفَظُوهَا", uz: "Uni saqlang" },
    { ar: "فِي مَكَانٍ آمِنٍ", uz: "xavfsiz joyda" }
  ],
  full_uz: "Uni xavfsiz joyda saqlang.",
  note: null
},

{
  num: 59,
  time: "00:04:25,500 --> 00:04:27,879",
  arabic: "لَكِنْ لَا تُظْهِرُوهَا لِأَيِّ أَحَدٍ آخَرَ",
  segs: [
    { ar: "لَكِنْ", uz: "Lekin" },
    { ar: "لَا تُظْهِرُوهَا", uz: "uni ko'rsatmang" },
    { ar: "لِأَيِّ أَحَدٍ آخَرَ", uz: "hech kimga" }
  ],
  full_uz: "Lekin uni hech kimga ko'rsatmang.",
  note: null
},

{
  num: 60,
  time: "00:04:27,879 --> 00:04:31,039",
  arabic: "وَعِنْدَهَا إِنْ نَسِيتُمْ كَلِمَةَ السِّرِّ أَوِ الرَّمْزَ",
  segs: [
    { ar: "وَعِنْدَهَا", uz: "Shunda" },
    { ar: "إِنْ نَسِيتُمْ", uz: "agar unutib qo'ysangiz" },
    { ar: "كَلِمَةَ السِّرِّ أَوِ الرَّمْزَ", uz: "parol yoki kodni" }
  ],
  full_uz: "Shunda, agar parol yoki kodni unutib qo'ysangiz.",
  note: null
},
{
  num: 61,
  time: "00:04:31,039 --> 00:04:34,699",
  arabic: "سَتَكُونُونَ قَادِرِينَ عَلَى التَّذَكُّرِ بِمُسَاعَدَةِ تِلْكَ الْوَرَقَةِ",
  segs: [
    { ar: "سَتَكُونُونَ قَادِرِينَ", uz: "eslay olasizlar" },
    { ar: "عَلَى التَّذَكُّرِ", uz: "yana eslashga" },
    { ar: "بِمُسَاعَدَةِ", uz: "yordamida" },
    { ar: "تِلْكَ الْوَرَقَةِ", uz: "o'sha qog'ozning" }
  ],
  full_uz: "O'sha qog'oz yordamida yana eslay olasizlar.",
  note: null
},

{
  num: 62,
  time: "00:04:43,980 --> 00:04:47,480",
  arabic: "وَلِمَ وَضَعْتَ قُفْلًا عَلَى حَقِيبَتِكَ؟",
  segs: [
    { ar: "وَلِمَ", uz: "Xo'sh, nega" },
    { ar: "وَضَعْتَ", uz: "qo'yding" },
    { ar: "قُفْلًا", uz: "qulf" },
    { ar: "عَلَى حَقِيبَتِكَ؟", uz: "sumkangga?" }
  ],
  full_uz: "Xo'sh, nega sumkangga qulf qo'yding?",
  note: null
},

{
  num: 63,
  time: "00:04:47,480 --> 00:04:49,700",
  arabic: "كَيْ أُخْفِيَ اللُّعْبَةَ عَنِ الْآخَرِينَ",
  segs: [
    { ar: "كَيْ", uz: "Shunda" },
    { ar: "أُخْفِيَ", uz: "yashiraman" },
    { ar: "اللُّعْبَةَ", uz: "o'yinchoqni" },
    { ar: "عَنِ الْآخَرِينَ", uz: "boshqalardan" }
  ],
  full_uz: "O'yinchoqni boshqalardan yashirish uchun.",
  note: null
},

{
  num: 64,
  time: "00:04:49,700 --> 00:04:52,740",
  arabic: "وَلِمَاذَا أَخَذْتَهَا إِلَى الْمَدْرَسَةِ؟",
  segs: [
    { ar: "وَلِمَاذَا", uz: "Unda nega" },
    { ar: "أَخَذْتَهَا", uz: "uni olib ketding" },
    { ar: "إِلَى الْمَدْرَسَةِ؟", uz: "maktabga?" }
  ],
  full_uz: "Unda nega uni maktabga olib ketding?",
  note: null
},

{
  num: 65,
  time: "00:04:52,740 --> 00:04:54,620",
  arabic: "لِأَتَبَاهَى بِهَا أَمَامَ الصَّفِّ",
  segs: [
    { ar: "لِأَتَبَاهَى", uz: "Maqtanish uchun" },
    { ar: "بِهَا", uz: "u bilan" },
    { ar: "أَمَامَ الصَّفِّ", uz: "sinf oldida" }
  ],
  full_uz: "Sinf oldida u bilan maqtanish uchun.",
  note: null
},

{
  num: 66,
  time: "00:04:54,620 --> 00:04:57,240",
  arabic: "وَهَلْ فَعَلْتَ؟",
  segs: [
    { ar: "وَهَلْ", uz: "Xo'sh" },
    { ar: "فَعَلْتَ؟", uz: "shunday qildingmi?" }
  ],
  full_uz: "Xo'sh, shunday qildingmi?",
  note: null
},

{
  num: 67,
  time: "00:04:57,240 --> 00:04:58,000",
  arabic: "مُسْتَحِيلٌ",
  segs: [
    { ar: "مُسْتَحِيلٌ", uz: "Aslo." }
  ],
  full_uz: "Aslo.",
  note: null
},

{
  num: 68,
  time: "00:04:58,000 --> 00:05:00,100",
  arabic: "لَوْ رَأَوْهَا لَقَالُوا لِي",
  segs: [
    { ar: "لَوْ رَأَوْهَا", uz: "Agar uni ko'rishganda" },
    { ar: "لَقَالُوا لِي", uz: "menga aytishardi" }
  ],
  full_uz: "Agar uni ko'rishganda, menga aytishardi.",
  note: null
},

{
  num: 69,
  time: "00:05:00,100 --> 00:05:02,500",
  arabic: "أُرِيدُ أَنْ أُجَرِّبَهَا وَأُرِيدُ أَنْ أَلْعَبَ بِهَا",
  segs: [
    { ar: "أُرِيدُ", uz: "Men xohlayman" },
    { ar: "أَنْ أُجَرِّبَهَا", uz: "uni sinab ko'rishni" },
    { ar: "وَأُرِيدُ", uz: "va xohlayman" },
    { ar: "أَنْ أَلْعَبَ بِهَا", uz: "u bilan o'ynashni" }
  ],
  full_uz: "«Uni sinab ko'rmoqchiman, u bilan o'ynamoqchiman», deyishardi.",
  note: null
},

{
  num: 70,
  time: "00:05:02,500 --> 00:05:05,040",
  arabic: "لِذَا خَبَّأْتَهَا وَلَمْ تُرِهَا لِأَحَدٍ",
  segs: [
    { ar: "لِذَا", uz: "Shuning uchun" },
    { ar: "خَبَّأْتَهَا", uz: "uni yashirding" },
    { ar: "وَلَمْ تُرِهَا", uz: "va ko'rsatmading" },
    { ar: "لِأَحَدٍ", uz: "hech kimga" }
  ],
 full_uz: "Shuning uchun uni yashirding va hech kimga ko'rsatmading.",
  note: null
},
{
  num: 71,
  time: "00:05:05,040 --> 00:05:06,560",
  arabic: "نَعَمْ، لَا أَحَدَ",
  segs: [
    { ar: "نَعَمْ", uz: "Ha." },
    { ar: "لَا أَحَدَ", uz: "Hech kimga." }
  ],
  full_uz: "Ha, hech kimga.",
  note: null
},

{
  num: 72,
  time: "00:05:06,560 --> 00:05:10,980",
  arabic: "إِذًا لِمَاذَا أَخَذْتَهَا مَعَكَ؟",
  segs: [
    { ar: "إِذًا", uz: "Unda" },
    { ar: "لِمَاذَا", uz: "nega" },
    { ar: "أَخَذْتَهَا", uz: "uni olib ketding" },
    { ar: "مَعَكَ؟", uz: "o'zing bilan?" }
  ],
  full_uz: "Unda nega uni o'zing bilan olib ketding?",
  note: null
},

{
  num: 73,
  time: "00:05:10,980 --> 00:05:12,160",
  arabic: "لِأَتَبَاهَى بِهَا",
  segs: [
    { ar: "لِأَتَبَاهَى", uz: "Maqtanish uchun" },
    { ar: "بِهَا", uz: "u bilan" }
  ],
  full_uz: "U bilan maqtanish uchun.",
  note: null
},

{
  num: 74,
  time: "00:05:12,160 --> 00:05:14,380",
  arabic: "يَا لَكَ مِنْ مُتَبَاهٍ",
  segs: [
    { ar: "يَا لَكَ", uz: "E, sen juda" },
    { ar: "مِنْ مُتَبَاهٍ", uz: "maqtanchoq ekansan" }
  ],
  full_uz: "E, sen juda maqtanchoq ekansan.",
  note: null
},

{
  num: 75,
  time: "00:05:14,380 --> 00:05:15,980",
  arabic: "يَا لَكَ مِنْ طَمَّاعٍ",
  segs: [
    { ar: "يَا لَكَ", uz: "E, sen juda" },
    { ar: "مِنْ طَمَّاعٍ", uz: "ochko'z ekansan" }
  ],
  full_uz: "E, sen juda ochko'z ekansan.",
  note: null
},

{
  num: 76,
  time: "00:05:15,980 --> 00:05:19,020",
  arabic: "أُوبْ، آسِفٌ، كُنْتُ طَمَّاعًا",
  segs: [
    { ar: "أُوبْ", uz: "Voy." },
    { ar: "آسِفٌ", uz: "Kechirasiz." },
    { ar: "كُنْتُ", uz: "Men" },
    { ar: "طَمَّاعًا", uz: "ochko'z edim" }
  ],
  full_uz: "Voy, kechirasiz. Men ochko'z edim.",
  note: null
},

{
  num: 77,
  time: "00:05:19,020 --> 00:05:20,720",
  arabic: "هَيَّا نَلْعَبِ الْآنَ",
  segs: [
    { ar: "هَيَّا", uz: "Qani." },
    { ar: "نَلْعَبِ", uz: "o'ynaylik" },
    { ar: "الْآنَ", uz: "endi" }
  ],
  full_uz: "Qani, endi o'ynaylik.",
  note: null
},

{
  num: 78,
  time: "00:05:20,720 --> 00:05:24,640",
  arabic: "اِلْعَبْ",
  segs: [
    { ar: "اِلْعَبْ", uz: "O'ynayver." }
  ],
  full_uz: "O'ynayver.",
  note: null
},

];
if (typeof module !== "undefined" && module.exports) {
  module.exports = lessons;
}