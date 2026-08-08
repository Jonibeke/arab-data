const lessons = [
  {
    "num": 1,
    "time": "00:00:30,000 --> 00:00:49,100",
    "arabic": "هَاي، مَا الَّذِي جَرَى؟ لَقَدْ كَانَتْ تَعْمَلُ جَيِّدًا",
    "segs": [
      { "ar": "هَاي، مَا الَّذِي جَرَى؟", "uz": "hey, nima bo'ldi?" },
      { "ar": "لَقَدْ كَانَتْ تَعْمَلُ جَيِّدًا", "uz": "u yaxshi ishlayotgan edi-ku" }
    ],
    "full_uz": "Hey, nima bo'ldi? U yaxshi ishlayotgan edi-ku.",
    "note": null
  },
  {
    "num": 2,
    "time": "00:00:33,480 --> 00:00:39,050",
    "arabic": "قِطَعُ الْغِيَارِ",
    "segs": null,
    "full_uz": "Ehtiyot qismlar",
    "note": "قِطَعُ الْغِيَارِ — ehtiyot qismlar. Bu yerda epizod nomi sifatida ishlatilgan."
  },
  {
    "num": 3,
    "time": "00:00:49,100 --> 00:00:50,120",
    "arabic": "مَرْحَبًا يَا تُوم",
    "segs": null,
    "full_uz": "Salom, Tom.",
    "note": null
  },
  {
    "num": 4,
    "time": "00:00:50,120 --> 00:00:52,760",
    "arabic": "سِيمْكَا، نُولِيك، لَدَيَّ مُشْكِلَةٌ",
    "segs": null,
    "full_uz": "Simka, Nolik, menda muammo bor.",
    "note": null
  },
  {
    "num": 5,
    "time": "00:00:52,760 --> 00:00:55,240",
    "arabic": "آسِفٌ، لَا وَقْتَ لِلَّعِبِ، نَحْنُ مَشْغُولَانِ",
    "segs": [
      { "ar": "آسِفٌ، لَا وَقْتَ لِلَّعِبِ", "uz": "uzr, o'ynashga vaqt yo'q" },
      { "ar": "نَحْنُ مَشْغُولَانِ", "uz": "biz bandmiz" }
    ],
    "full_uz": "Uzr, o'ynashga vaqt yo'q, biz bandmiz.",
    "note": null
  },
  {
    "num": 6,
    "time": "00:00:55,240 --> 00:00:56,840",
    "arabic": "مَشْغُولَانِ؟ بِمَاذَا؟",
    "segs": null,
    "full_uz": "Bandmisizlar? Nima bilan?",
    "note": null
  },
  {
    "num": 7,
    "time": "00:00:56,840 --> 00:00:58,840",
    "arabic": "نَحْنُ مَسْؤُولَانِ عَنِ الْمَنْزِلِ الْيَوْمَ",
    "segs": null,
    "full_uz": "Biz bugun uy uchun javobgarmiz.",
    "note": null
  },
  {
    "num": 8,
    "time": "00:00:58,840 --> 00:01:01,340",
    "arabic": "وَنَحْنُ نَسْتَعْمِلُ حَقِيبَةَ الْأَدَوَاتِ",
    "segs": null,
    "full_uz": "Va biz asboblar sumkasidan foydalanyapmiz.",
    "note": null
  },
  {
    "num": 9,
    "time": "00:01:01,340 --> 00:01:04,000",
    "arabic": "بَابُوس وَمَاسِيَا يَزُورَانِ أَصْدِقَاءَنَا الْفِيكْسِيزَ",
    "segs": null,
    "full_uz": "Bibus va Masya bizning Fiksik do'stlarimizni ko'rgani ketishdi.",
    "note": null
  },
  {
    "num": 10,
    "time": "00:01:04,000 --> 00:01:07,280",
    "arabic": "لَقَدْ كَانُوا مَعَ بَابُوس فِي مَرْكَزِ الْفَضَاءِ قَبْلَ السَّنَوَاتِ",
    "segs": null,
    "full_uz": "Ular bir necha yil oldin Bibus bilan birga fazo markazida bo'lishgan edi.",
    "note": null
  },
  {
    "num": 11,
    "time": "00:01:07,280 --> 00:01:13,380",
    "arabic": "مُذْ كَانَ صَبِيًّا كَانَ بَابُوس يَحْلُمُ بِالذَّهَابِ إِلَى الْفَضَاءِ",
    "segs": null,
    "full_uz": "Bibus bolaligidan beri fazoga borishni orzu qilardi.",
    "note": null
  },
  {
    "num": 12,
    "time": "00:01:13,380 --> 00:01:14,800",
    "arabic": "وَلِمَ لَا؟",
    "segs": null,
    "full_uz": "Nega bo'lmasin?",
    "note": null
  },
  {
    "num": 13,
    "time": "00:01:14,800 --> 00:01:17,260",
    "arabic": "فَالْفِيكْسِيزُ يَعْمَلُونَ فِي الصَّوَارِيخِ أَيْضًا",
    "segs": null,
    "full_uz": "Fiksiklar raketalarda ham ishlashadi-ku.",
    "note": null
  },
  {
    "num": 14,
    "time": "00:01:17,260 --> 00:01:19,560",
    "arabic": "لَقَدْ عَمِلَ فِي مَرْكَزِ تَدْرِيبِ رُوَّادِ الْفَضَاءِ",
    "segs": null,
    "full_uz": "U kosmonavtlar tayyorlash markazida ishlagan edi.",
    "note": null
  },
  {
    "num": 15,
    "time": "00:01:19,560 --> 00:01:22,080",
    "arabic": "مَسْؤُولًا عَنِ الْآلَةِ النَّابِذَةِ الدَّوَّارَةِ",
    "segs": null,
    "full_uz": "Aylanuvchi sentrifuga mashinasi uchun javobgar bo'lib.",
    "note": null
  },
  {
    "num": 16,
    "time": "00:01:22,080 --> 00:01:25,200",
    "arabic": "وَبَذَلَ جُهْدَهُ لِتَعْمَلَ عَمَلًا مِثَالِيًّا",
    "segs": null,
    "full_uz": "Va uni mukammal ishlashi uchun bor kuchini sarfladi.",
    "note": null
  },
  {
    "num": 17,
    "time": "00:01:25,200 --> 00:01:29,280",
    "arabic": "الْآلَةُ النَّابِذَةُ هِيَ عَرَبَةٌ دَوَّارَةٌ سَرِيعَةٌ جِدًّا لِتَدْرِيبِ الرُّوَّادِ",
    "segs": [
      { "ar": "الْآلَةُ النَّابِذَةُ هِيَ عَرَبَةٌ دَوَّارَةٌ سَرِيعَةٌ جِدًّا", "uz": "sentrifuga — bu juda tez aylanadigan aravacha" },
      { "ar": "لِتَدْرِيبِ الرُّوَّادِ", "uz": "kosmonavtlarni tayyorlash uchun" }
    ],
    "full_uz": "Sentrifuga — bu kosmonavtlarni tayyorlash uchun juda tez aylanadigan aravacha.",
    "note": "الْآلَةُ النَّابِذَةُ — sentrifuga (markazdan qochirgich mashinasi)."
  },
  {
    "num": 18,
    "time": "00:01:29,280 --> 00:01:32,120",
    "arabic": "وَبَابُوس تَدَرَّبَ دَاخِلَهَا أَيْضًا",
    "segs": null,
    "full_uz": "Bibus ham uning ichida mashq qilgan.",
    "note": null
  },
  {
    "num": 19,
    "time": "00:01:32,120 --> 00:01:35,820",
    "arabic": "لَكِنَّهُ لَمْ يَكُنْ يَعْلَمُ أَنَّ مَوْعِدَ إِطْلَاقِ الصَّارُوخِ كَانَ فِي يَوْمِ عُطْلَتِهِ",
    "segs": null,
    "full_uz": "Lekin u raketa uchirish sanasi o'zining dam olish kuniga to'g'ri kelishini bilmagan edi.",
    "note": null
  },
  {
    "num": 20,
    "time": "00:01:35,820 --> 00:01:40,780",
    "arabic": "وَعِنْدَمَا عَلِمَ بِذَلِكَ كَانَ الْوَقْتُ قَدْ تَأَخَّرَ وَانْطَلَقَ الصَّارُوخُ وَتَرَكَهُ",
    "segs": [
      { "ar": "وَعِنْدَمَا عَلِمَ بِذَلِكَ كَانَ الْوَقْتُ قَدْ تَأَخَّرَ", "uz": "u buni bilganida, vaqt allaqachon o'tib ketgan edi" },
      { "ar": "وَانْطَلَقَ الصَّارُوخُ وَتَرَكَهُ", "uz": "va raketa uni tashlab uchib ketgan edi" }
    ],
    "full_uz": "U buni bilganida, vaqt allaqachon o'tib ketgan edi va raketa uni tashlab uchib ketgan edi.",
    "note": null
  },
  {
    "num": 21,
    "time": "00:01:40,780 --> 00:01:43,859",
    "arabic": "وَمُنْذُ ذَلِكَ الْوَقْتِ صَارَ يَكْرَهُ أَيَّامَ عُطْلَتِهِ",
    "segs": null,
    "full_uz": "Shundan buyon u dam olish kunlarini yomon ko'radigan bo'lib qoldi.",
    "note": null
  },
  {
    "num": 22,
    "time": "00:01:43,859 --> 00:01:47,920",
    "arabic": "لَكِنَّهُ لَا يَزَالُ يَرْغَبُ فِي إِصْلَاحِ كُلِّ مَا يُشْبِهُ الْآلَةَ النَّابِذَةَ",
    "segs": null,
    "full_uz": "Lekin u hali ham sentrifugaga o'xshagan hamma narsani ta'mirlashni xohlaydi.",
    "note": null
  },
  {
    "num": 23,
    "time": "00:01:47,920 --> 00:01:49,760",
    "arabic": "وَكُلُّ الْأَشْيَاءِ الَّتِي تَدُورُ",
    "segs": null,
    "full_uz": "Va aylanadigan barcha narsalarni.",
    "note": null
  },
  {
    "num": 24,
    "time": "00:01:49,760 --> 00:01:50,840",
    "arabic": "كَالْغَسَّالَةِ",
    "segs": null,
    "full_uz": "Kir yuvish mashinasi kabi.",
    "note": null
  },
  {
    "num": 25,
    "time": "00:01:50,840 --> 00:01:55,240",
    "arabic": "لِسُوءِ حَظِّ بَابُوس أَنَّ الْغَسَّالَةَ الَّتِي فِي بَيْتِهِ تَعْمَلُ دَوْمًا بِلَا عُطْلٍ",
    "segs": null,
    "full_uz": "Bibusning omadsizligiga qarab, uyidagi kir yuvish mashinasi hech qachon buzilmasdan ishlaydi.",
    "note": null
  },
  {
    "num": 26,
    "time": "00:01:55,240 --> 00:02:00,900",
    "arabic": "يَعْنِي أَنَّكُمْ تُصْلِحُونَ كُلَّ شَيْءٍ الْيَوْمَ؟",
    "segs": null,
    "full_uz": "Demak, sizlar bugun hamma narsani ta'mirlaysizlar-a?",
    "note": null
  },
  {
    "num": 27,
    "time": "00:02:00,900 --> 00:02:01,280",
    "arabic": "أَجَلْ",
    "segs": null,
    "full_uz": "Ha.",
    "note": null
  },
  {
    "num": 28,
    "time": "00:02:01,280 --> 00:02:03,920",
    "arabic": "حَسَنًا، لَقَدْ تَعَطَّلَتْ سَيَّارَتِي الْآنَ",
    "segs": null,
    "full_uz": "Xo'p, mana mening mashinam ham hozir buzilib qoldi.",
    "note": null
  },
  {
    "num": 29,
    "time": "00:02:03,920 --> 00:02:06,680",
    "arabic": "مَرْحَى، لَدَيْنَا عَمَلٌ نَقُومُ بِهِ",
    "segs": null,
    "full_uz": "Ura, bizda qiladigan ishimiz bor.",
    "note": null
  },
  {
    "num": 30,
    "time": "00:02:06,680 --> 00:02:08,039",
    "arabic": "هَيَّا بِنَا يَا نُولِيك",
    "segs": null,
    "full_uz": "Yur, Nolik.",
    "note": null
  },
  {
    "num": 31,
    "time": "00:02:08,039 --> 00:02:15,900",
    "arabic": "حَسَنًا، مَا الَّذِي تَعَطَّلَ هُنَا؟",
    "segs": null,
    "full_uz": "Xo'p, bu yerda nima buzilgan?",
    "note": null
  },
  {
    "num": 32,
    "time": "00:02:15,900 --> 00:02:17,000",
    "arabic": "انْتَظِرْ لَحْظَةً",
    "segs": null,
    "full_uz": "Bir daqiqa kut.",
    "note": null
  },
  {
    "num": 33,
    "time": "00:02:17,000 --> 00:02:21,120",
    "arabic": "هُنَا، هَذَا الْجُزْءُ مُعَطَّلٌ",
    "segs": null,
    "full_uz": "Mana, bu qism buzilgan.",
    "note": null
  },
  {
    "num": 34,
    "time": "00:02:21,120 --> 00:02:22,699",
    "arabic": "إِنَّهُ مُغَطًّى بِالْأَسْوَدِ",
    "segs": null,
    "full_uz": "U qora narsa bilan qoplangan.",
    "note": null
  },
  {
    "num": 35,
    "time": "00:02:22,699 --> 00:02:25,780",
    "arabic": "مِنْ أَيْنَ نَحْصُلُ عَلَى قِطْعَةٍ نَظِيفَةٍ بَدِيلَةٍ؟",
    "segs": null,
    "full_uz": "Qayerdan toza almashtirish qismi topamiz?",
    "note": null
  },
  {
    "num": 36,
    "time": "00:02:25,780 --> 00:02:27,020",
    "arabic": "نَظِيفَةٍ؟",
    "segs": null,
    "full_uz": "Tozami?",
    "note": null
  },
  {
    "num": 37,
    "time": "00:02:27,020 --> 00:02:29,319",
    "arabic": "نُولِيك، إِنَّهَا فِكْرَةٌ",
    "segs": null,
    "full_uz": "Nolik, bu fikr yaxshi ekan.",
    "note": null
  },
  {
    "num": 38,
    "time": "00:02:29,319 --> 00:02:32,360",
    "arabic": "ثَمَّتْ قِطْعَةٌ تُشْبِهُهَا فِي غَسَّالَةِ الصُّحُونِ",
    "segs": null,
    "full_uz": "Idish yuvish mashinasida shunga o'xshash qism bor.",
    "note": null
  },
  {
    "num": 39,
    "time": "00:02:32,360 --> 00:02:33,920",
    "arabic": "يُمْكِنُنَا أَخْذُهَا، هَيَّا",
    "segs": null,
    "full_uz": "Uni olishimiz mumkin, qani.",
    "note": null
  },
  {
    "num": 40,
    "time": "00:02:33,919 --> 00:02:49,339",
    "arabic": "هَلْ لَدَيْكَ أَيَّةُ فِكْرَةٍ عَنِ اتِّصَالِ بَعْضِ هَذِهِ الْأَجْزَاءِ بِبَعْضِهَا؟",
    "segs": [
      { "ar": "هَلْ لَدَيْكَ أَيَّةُ فِكْرَةٍ", "uz": "biror tasavvuring bormi" },
      { "ar": "عَنِ اتِّصَالِ بَعْضِ هَذِهِ الْأَجْزَاءِ بِبَعْضِهَا؟", "uz": "bu qismlarning bir-biriga qanday ulanishi haqida?" }
    ],
    "full_uz": "Bu qismlarning bir-biriga qanday ulanishi haqida biror tasavvuring bormi?",
    "note": null
  },
  {
    "num": 41,
    "time": "00:02:49,339 --> 00:02:50,560",
    "arabic": "فِي هَذَا الشَّيْءِ تَحْتَنَا",
    "segs": null,
    "full_uz": "Bizning ostimizdagi shu narsada.",
    "note": null
  },
  {
    "num": 42,
    "time": "00:02:50,560 --> 00:02:54,219",
    "arabic": "إِنَّهَا لَوْحَةٌ خَاصَّةٌ تُدْعَى لَوْحَةَ الدَّارَةِ",
    "segs": null,
    "full_uz": "Bu 'sxema platasi' deb ataladigan maxsus taxtacha.",
    "note": null
  },
  {
    "num": 43,
    "time": "00:02:54,219 --> 00:02:58,899",
    "arabic": "لَوْحَةُ الدَّارَةِ تُصْنَعُ هَكَذَا",
    "segs": null,
    "full_uz": "Sxema platasi shunday tayyorlanadi.",
    "note": null
  },
  {
    "num": 44,
    "time": "00:02:58,899 --> 00:03:02,579",
    "arabic": "أَوَّلًا يَتِمُّ تَغْطِيَةُ اللَّوْحَةِ بِطَبَقَةٍ مَعْدِنِيَّةٍ رَقِيقَةٍ",
    "segs": null,
    "full_uz": "Avval taxtacha yupqa metall qatlam bilan qoplanadi.",
    "note": null
  },
  {
    "num": 45,
    "time": "00:03:02,580 --> 00:03:06,840",
    "arabic": "وَبَعْدَهَا تُرْسَمُ الْمَسَارَاتُ الَّتِي سَيَتَدَفَّقُ التَّيَّارُ فِيهَا عَلَى اللَّوْحَةِ",
    "segs": [
      { "ar": "وَبَعْدَهَا تُرْسَمُ الْمَسَارَاتُ", "uz": "keyin esa yo'llar chiziladi" },
      { "ar": "الَّتِي سَيَتَدَفَّقُ التَّيَّارُ فِيهَا عَلَى اللَّوْحَةِ", "uz": "tok oqadigan, taxtachaga" }
    ],
    "full_uz": "Keyin esa taxtachaga tok oqadigan yo'llar chiziladi.",
    "note": null
  },
  {
    "num": 46,
    "time": "00:03:06,840 --> 00:03:11,860",
    "arabic": "وَبَعْدَ ذَلِكَ يَتِمُّ إِزَالَةُ الْمَعْدِنِ الزَّائِدِ بِسَائِلِ تَنْظِيفٍ خَاصٍّ",
    "segs": null,
    "full_uz": "Shundan keyin ortiqcha metall maxsus tozalash suyuqligi bilan olib tashlanadi.",
    "note": null
  },
  {
    "num": 47,
    "time": "00:03:11,860 --> 00:03:15,420",
    "arabic": "فَتَبْقَى الْمَسَارَاتُ الْمَرْسُومَةُ عَلَى اللَّوْحَةِ فَقَطْ",
    "segs": null,
    "full_uz": "Shunda taxtachada faqat chizilgan yo'llar qoladi.",
    "note": null
  },
  {
    "num": 48,
    "time": "00:03:15,420 --> 00:03:21,620",
    "arabic": "هَذِهِ الْمَسَارَاتُ تَعْمَلُ تَمَامًا كَالْأَسْلَاكِ وَتُوصِلُ بَعْضَ أَجْزَاءِ الدَّارَةِ بِبَعْضٍ",
    "segs": [
      { "ar": "هَذِهِ الْمَسَارَاتُ تَعْمَلُ تَمَامًا كَالْأَسْلَاكِ", "uz": "bu yo'llar xuddi simlar kabi ishlaydi" },
      { "ar": "وَتُوصِلُ بَعْضَ أَجْزَاءِ الدَّارَةِ بِبَعْضٍ", "uz": "va sxemaning ba'zi qismlarini bir-biriga ulaydi" }
    ],
    "full_uz": "Bu yo'llar xuddi simlar kabi ishlaydi va sxemaning ba'zi qismlarini bir-biriga ulaydi.",
    "note": null
  },
  {
    "num": 49,
    "time": "00:03:21,620 --> 00:03:26,000",
    "arabic": "وَيَبْقَى تَثْبِيتُ هَذِهِ الْأَجْزَاءِ فِي أَمَاكِنِهَا عَلَى الدَّارَةِ",
    "segs": null,
    "full_uz": "Endi bu qismlarni sxemadagi joylariga mahkamlash qoladi.",
    "note": null
  },
  {
    "num": 50,
    "time": "00:03:26,000 --> 00:03:30,500",
    "arabic": "اسْحَبْهَا!",
    "segs": null,
    "full_uz": "Tortib chiqar!",
    "note": null
  },
  {
    "num": 51,
    "time": "00:03:30,500 --> 00:03:33,280",
    "arabic": "تِيدِيشْ",
    "segs": null,
    "full_uz": "Tidish!",
    "note": "تِيدِيشْ — tovush effekti."
  },
  {
    "num": 52,
    "time": "00:03:33,280 --> 00:03:42,419",
    "arabic": "انْتَهَيْنَا يَا تُوم",
    "segs": null,
    "full_uz": "Tugatdik, Tom.",
    "note": null
  },
  {
    "num": 53,
    "time": "00:03:42,419 --> 00:03:43,280",
    "arabic": "تِيدِيشْ",
    "segs": null,
    "full_uz": "Tidish!",
    "note": "تِيدِيشْ — tovush effekti."
  },
  {
    "num": 54,
    "time": "00:03:43,280 --> 00:03:44,379",
    "arabic": "مَرْحَى",
    "segs": null,
    "full_uz": "Ura!",
    "note": null
  },
  {
    "num": 55,
    "time": "00:03:44,379 --> 00:03:45,879",
    "arabic": "سَأُجَرِّبُهَا الْآنَ",
    "segs": null,
    "full_uz": "Hozir sinab ko'raman.",
    "note": null
  },
  {
    "num": 56,
    "time": "00:03:45,879 --> 00:03:50,500",
    "arabic": "تُوم، أَنَا عَلَى وَشْكِ تَشْغِيلِي غَسَّالَةَ الصُّحُونِ",
    "segs": null,
    "full_uz": "Tom, men idish yuvish mashinasini ishga tushirmoqchiman.",
    "note": null
  },
  {
    "num": 57,
    "time": "00:03:50,500 --> 00:03:53,139",
    "arabic": "هَلْ هُنَاكَ أَيُّ صَحْنٍ وَسِخٍ فِي غُرْفَتِكَ؟",
    "segs": null,
    "full_uz": "Xonangda biror kir tovoq bormi?",
    "note": null
  },
  {
    "num": 58,
    "time": "00:03:53,139 --> 00:03:53,439",
    "arabic": "لَا",
    "segs": null,
    "full_uz": "Yo'q.",
    "note": null
  },
  {
    "num": 59,
    "time": "00:03:53,439 --> 00:03:55,240",
    "arabic": "أَخِّرْهَا",
    "segs": null,
    "full_uz": "Uni kechiktir.",
    "note": null
  },
  {
    "num": 60,
    "time": "00:03:55,240 --> 00:03:56,960",
    "arabic": "مَاذَا أُؤَخِّرُ؟",
    "segs": null,
    "full_uz": "Nimani kechiktiraman?",
    "note": null
  },
  {
    "num": 61,
    "time": "00:03:56,960 --> 00:03:58,340",
    "arabic": "حَاوِلْ تَأْخِيرَ أُمِّكَ",
    "segs": null,
    "full_uz": "Onangni kechiktirishga harakat qil.",
    "note": null
  },
  {
    "num": 62,
    "time": "00:03:58,340 --> 00:04:01,719",
    "arabic": "أَخَذْنَا الْقِطْعَةَ الْجَدِيدَةَ مِنْ غَسَّالَةِ الصُّحُونِ، أَفَهِمْتَ؟",
    "segs": [
      { "ar": "أَخَذْنَا الْقِطْعَةَ الْجَدِيدَةَ مِنْ غَسَّالَةِ الصُّحُونِ", "uz": "biz yangi qismni idish yuvish mashinasidan olganmiz" },
      { "ar": "أَفَهِمْتَ؟", "uz": "tushundingmi?" }
    ],
    "full_uz": "Biz yangi qismni idish yuvish mashinasidan olganmiz, tushundingmi?",
    "note": null
  },
  {
    "num": 63,
    "time": "00:04:01,719 --> 00:04:06,599",
    "arabic": "أُمِّي، انْتَظِرِي، لَا تُشَغِّلِيهَا، ضَعِي فِيهَا، ضَعِي",
    "segs": [
      { "ar": "أُمِّي، انْتَظِرِي", "uz": "ona, kut" },
      { "ar": "لَا تُشَغِّلِيهَا", "uz": "uni ishga tushirma" },
      { "ar": "ضَعِي فِيهَا، ضَعِي", "uz": "sol, ichiga sol" }
    ],
    "full_uz": "Ona, kut, uni ishga tushirma, sol, ichiga sol.",
    "note": null
  },
  {
    "num": 64,
    "time": "00:04:06,599 --> 00:04:09,960",
    "arabic": "أَجَلْ، ضَعِي هَذَا الْفِنْجَانَ الْوَسِخَ",
    "segs": null,
    "full_uz": "Ha, mana bu kir chashkani sol.",
    "note": null
  },
  {
    "num": 65,
    "time": "00:04:09,960 --> 00:04:13,939",
    "arabic": "نُولِيك، نُولِيك، اتَّبِعْنِي فَإِنَّ الْقِطْعَةَ نَفْسَهَا فِي التِّلْفَازِ",
    "segs": [
      { "ar": "نُولِيك، نُولِيك، اتَّبِعْنِي", "uz": "Nolik, Nolik, menga ergash" },
      { "ar": "فَإِنَّ الْقِطْعَةَ نَفْسَهَا فِي التِّلْفَازِ", "uz": "xuddi shunday qism televizorda ham bor" }
    ],
    "full_uz": "Nolik, Nolik, menga ergash, xuddi shunday qism televizorda ham bor.",
    "note": null
  },
  {
    "num": 66,
    "time": "00:04:13,939 --> 00:04:24,079",
    "arabic": "مِنَ التِّلْفَازِ، وَالْآنَ إِلَى غَسَّالَةِ الصُّحُونِ",
    "segs": [
      { "ar": "مِنَ التِّلْفَازِ", "uz": "televizordan" },
      { "ar": "وَالْآنَ إِلَى غَسَّالَةِ الصُّحُونِ", "uz": "va endi idish yuvish mashinasiga" }
    ],
    "full_uz": "Televizordan, va endi idish yuvish mashinasiga.",
    "note": null
  },
  {
    "num": 67,
    "time": "00:04:28,339 --> 00:04:29,659",
    "arabic": "انْتَهَيْنَا بِصُعُوبَةٍ",
    "segs": null,
    "full_uz": "Zo'rg'a tugatdik.",
    "note": null
  },
  {
    "num": 68,
    "time": "00:04:29,659 --> 00:04:32,699",
    "arabic": "لَقَدْ أَخَذْنَا الْقِطْعَةَ مِنْ تِلْفَازِ غُرْفَةِ الْجُلُوسِ",
    "segs": null,
    "full_uz": "Biz qismni mehmonxona televizoridan oldik.",
    "note": null
  },
  {
    "num": 69,
    "time": "00:04:32,699 --> 00:04:34,060",
    "arabic": "إِلَّا التِّلْفَازَ",
    "segs": null,
    "full_uz": "Faqat televizordan bo'lmasa edi.",
    "note": null
  },
  {
    "num": 70,
    "time": "00:04:34,060 --> 00:04:37,419",
    "arabic": "آهْ، بَرْنَامَجُ أُمِّي الْمُفَضَّلُ عَلَى وَشْكِ أَنْ يَبْدَأَ",
    "segs": null,
    "full_uz": "Voy, onamning sevimli dasturi hozir boshlanadi.",
    "note": null
  },
  {
    "num": 71,
    "time": "00:04:37,419 --> 00:04:47,399",
    "arabic": "التِّلْفَازُ يَعْمَلُ الْآنَ",
    "segs": null,
    "full_uz": "Televizor endi ishlayapti.",
    "note": null
  },
  {
    "num": 72,
    "time": "00:04:47,399 --> 00:04:49,259",
    "arabic": "وَمِنْ أَيْنَ أَخَذْتُمَا الْقِطْعَةَ؟",
    "segs": null,
    "full_uz": "Va qismni qayerdan olding sizlar?",
    "note": null
  },
  {
    "num": 73,
    "time": "00:04:49,259 --> 00:04:51,099",
    "arabic": "مِنْ حَاسُوبِ وَالِدِكَ فِي مَكْتَبِهِ",
    "segs": null,
    "full_uz": "Otangning ish xonasidagi kompyuteridan.",
    "note": null
  },
  {
    "num": 74,
    "time": "00:04:51,099 --> 00:04:54,399",
    "arabic": "مَرْحَبًا جَمِيعًا، هَا قَدْ عُدْتُ",
    "segs": null,
    "full_uz": "Salom hammaga, mana men qaytdim.",
    "note": null
  },
  {
    "num": 75,
    "time": "00:04:54,399 --> 00:04:57,019",
    "arabic": "مَرْحَبًا عَزِيزِي، هَلْ أَنْتَ مُسْتَعِدٌّ لِلْغَدَاءِ؟",
    "segs": null,
    "full_uz": "Salom, jonim, tushlikka tayyormisan?",
    "note": null
  },
  {
    "num": 76,
    "time": "00:04:57,019 --> 00:04:59,539",
    "arabic": "دَقِيقَةً، سَأُنْهِي بَعْضَ الْعَمَلِ عَلَى الْحَاسُوبِ",
    "segs": null,
    "full_uz": "Bir daqiqa, kompyuterda ozgina ishni tugataman.",
    "note": null
  },
  {
    "num": 77,
    "time": "00:04:59,539 --> 00:05:03,919",
    "arabic": "سِيمْكَا، أَسْرِعِي، أَيْنَ يُمْكِنُنَا أَنْ نَجِدَ الْقِطْعَةَ؟",
    "segs": [
      { "ar": "سِيمْكَا، أَسْرِعِي", "uz": "Simka, tezroq" },
      { "ar": "أَيْنَ يُمْكِنُنَا أَنْ نَجِدَ الْقِطْعَةَ؟", "uz": "qismni qayerdan topa olamiz?" }
    ],
    "full_uz": "Simka, tezroq, qismni qayerdan topa olamiz?",
    "note": null
  },
  {
    "num": 78,
    "time": "00:05:03,919 --> 00:05:06,039",
    "arabic": "تَوَقَّفَا، يَكْفِيكُمَا رَكْضًا",
    "segs": null,
    "full_uz": "To'xtanglar, yugurish yetadi sizlarga.",
    "note": null
  },
  {
    "num": 79,
    "time": "00:05:06,039 --> 00:05:09,819",
    "arabic": "هَيَّا، اسْتَعِيدَاهَا مِنَ السَّيَّارَةِ",
    "segs": null,
    "full_uz": "Qani, uni mashinadan qaytarib olinglar.",
    "note": null
  },
  {
    "num": 80,
    "time": "00:05:09,819 --> 00:05:15,500",
    "arabic": "وَبَعْدَهَا وَضَعْنَا الْقِطْعَةَ فِي الْحَاسُوبِ وَعَادَ إِلَى الْعَمَلِ ثَانِيَةً",
    "segs": [
      { "ar": "وَبَعْدَهَا وَضَعْنَا الْقِطْعَةَ فِي الْحَاسُوبِ", "uz": "shundan so'ng biz qismni kompyuterga qo'ydik" },
      { "ar": "وَعَادَ إِلَى الْعَمَلِ ثَانِيَةً", "uz": "va u yana ishga tushdi" }
    ],
    "full_uz": "Shundan so'ng biz qismni kompyuterga qo'ydik va u yana ishga tushdi.",
    "note": null
  },
  {
    "num": 81,
    "time": "00:05:15,500 --> 00:05:17,099",
    "arabic": "هَذَا مُضْحِكٌ حَقًّا",
    "segs": null,
    "full_uz": "Bu rostdan kulgili.",
    "note": null
  },
  {
    "num": 82,
    "time": "00:05:17,099 --> 00:05:22,379",
    "arabic": "تَذَكَّرْ أَيُّهَا الْخَبِيرَانِ أَلَّا تُصْلِحَ أَيَّ جِهَازٍ عَلَى حِسَابِ جِهَازٍ آخَرَ",
    "segs": [
      { "ar": "تَذَكَّرْ أَيُّهَا الْخَبِيرَانِ", "uz": "esda tuting, ey ustalar" },
      { "ar": "أَلَّا تُصْلِحَ أَيَّ جِهَازٍ عَلَى حِسَابِ جِهَازٍ آخَرَ", "uz": "bir qurilmani boshqasi hisobidan tuzatmang" }
    ],
    "full_uz": "Esda tuting, ey ustalar, bir qurilmani boshqasi hisobidan tuzatmang.",
    "note": null
  },
  {
    "num": 83,
    "time": "00:05:22,379 --> 00:05:23,680",
    "arabic": "لَقَدْ فَهِمْتُ الْآنَ",
    "segs": null,
    "full_uz": "Endi tushundim.",
    "note": null
  },
  {
    "num": 84,
    "time": "00:05:23,680 --> 00:05:24,779",
    "arabic": "أَنَا أَيْضًا فَهِمْتُ",
    "segs": null,
    "full_uz": "Men ham tushundim.",
    "note": null
  },
  {
    "num": 85,
    "time": "00:05:24,779 --> 00:05:28,779",
    "arabic": "لَوْ كُنْتُمَا ذَكِيَّيْنِ لَأَخَذْتُمَا الْقِطْعَةَ مِنَ الْمِذْيَاعِ الْقَدِيمِ فِي الْخِزَانَةِ",
    "segs": [
      { "ar": "لَوْ كُنْتُمَا ذَكِيَّيْنِ", "uz": "agar aqlli bo'lganingizda" },
      { "ar": "لَأَخَذْتُمَا الْقِطْعَةَ مِنَ الْمِذْيَاعِ الْقَدِيمِ فِي الْخِزَانَةِ", "uz": "qismni shkafdagi eski radiodan olardingiz" }
    ],
    "full_uz": "Agar aqlli bo'lganingizda, qismni shkafdagi eski radiodan olardingiz.",
    "note": null
  },
  {
    "num": 86,
    "time": "00:05:28,779 --> 00:05:31,779",
    "arabic": "بَابُوس، لَكِنَّكَ تَعْلَمُ أَنَّ الْمِذْيَاعَ سَيَتَعَطَّلُ",
    "segs": null,
    "full_uz": "Bibus, lekin bilasan-ku, radio buziladi.",
    "note": null
  },
  {
    "num": 87,
    "time": "00:05:32,299 --> 00:05:33,779",
    "arabic": "إِنَّهُ لَمْ يَعْمَلْ مُنْذُ سَنَوَاتٍ",
    "segs": null,
    "full_uz": "U necha yildan beri ishlamaydi.",
    "note": null
  },
  {
    "num": 88,
    "time": "00:05:34,299 --> 00:05:37,879",
    "arabic": "أَخَذْنَا أَنَا وَمَاسِيَا أَكْثَرَ مِنْ نِصْفِ قِطْعَةٍ",
    "segs": null,
    "full_uz": "Men va Masya yarim qismdan ko'prog'ini oldik.",
    "note": null
  }
];
if (typeof module !== "undefined" && module.exports) {
  module.exports = lessons;
}
