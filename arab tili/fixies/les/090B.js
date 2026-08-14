const lessons = [
  {
    "num": 1,
    "time": "00:00:30,000 --> 00:00:35,240",
    "arabic": "الْكُرَةُ الْأَرْضِيَّةُ",
    "segs": null,
    "full_uz": "Globus.",
    "note": null
  },
  {
    "num": 2,
    "time": "00:00:35,240 --> 00:00:36,700",
    "arabic": "وَاحِدٌ",
    "segs": null,
    "full_uz": "Bir.",
    "note": null
  },
  {
    "num": 3,
    "time": "00:00:36,700 --> 00:00:38,439",
    "arabic": "اثْنَانِ",
    "segs": null,
    "full_uz": "Ikki.",
    "note": null
  },
  {
    "num": 4,
    "time": "00:00:38,439 --> 00:00:39,579",
    "arabic": "انْطَلِقْ",
    "segs": null,
    "full_uz": "Boshla!",
    "note": null
  },
  {
    "num": 5,
    "time": "00:00:39,579 --> 00:00:48,460",
    "arabic": "لَقَدْ أَخْفَقْتُ مُجَدَّدًا",
    "segs": null,
    "full_uz": "Yana muvaffaqiyatsizlikka uchradim.",
    "note": null
  },
  {
    "num": 6,
    "time": "00:00:48,460 --> 00:00:53,120",
    "arabic": "قُلْتُ لَكَ لَا مَجَالَ لِلْمُتَابَعَةِ وَالْكُرَةُ الْأَرْضِيَّةُ تَدُورُ بِهَذِهِ السُّرْعَةِ",
    "segs": [
      { "ar": "قُلْتُ لَكَ لَا مَجَالَ لِلْمُتَابَعَةِ", "uz": "senga aytdim, davom etishning iloji yo'q" },
      { "ar": "وَالْكُرَةُ الْأَرْضِيَّةُ تَدُورُ بِهَذِهِ السُّرْعَةِ", "uz": "globus shu tezlikda aylanarkan" }
    ],
    "full_uz": "Senga aytdim, globus shu tezlikda aylanarkan, davom etishning iloji yo'q.",
    "note": null
  },
  {
    "num": 7,
    "time": "00:00:53,120 --> 00:00:54,780",
    "arabic": "وَلَكِنِّي سَأَفْعَلُهَا",
    "segs": null,
    "full_uz": "Lekin men buni qilaman.",
    "note": null
  },
  {
    "num": 8,
    "time": "00:00:54,780 --> 00:00:58,620",
    "arabic": "أَعْطِنِي قِطْعَةَ الْحَبْلِ تِلْكَ",
    "segs": null,
    "full_uz": "Menga o'sha arqon bo'lagini ber.",
    "note": null
  },
  {
    "num": 9,
    "time": "00:00:58,619 --> 00:01:02,619",
    "arabic": "وَالْآنَ سَأَنْجَحُ",
    "segs": null,
    "full_uz": "Va endi muvaffaqiyatga erishaman.",
    "note": null
  },
  {
    "num": 10,
    "time": "00:01:02,619 --> 00:01:03,739",
    "arabic": "أَدِرْهَا",
    "segs": null,
    "full_uz": "Uni aylantir.",
    "note": null
  },
  {
    "num": 11,
    "time": "00:01:03,739 --> 00:01:05,939",
    "arabic": "أَسْرِعْ",
    "segs": null,
    "full_uz": "Tezroq.",
    "note": null
  },
  {
    "num": 12,
    "time": "00:01:23,780 --> 00:01:25,459",
    "arabic": "مَاذَا تَفْعَلُ؟",
    "segs": null,
    "full_uz": "Nima qilyapsan?",
    "note": null
  },
  {
    "num": 13,
    "time": "00:01:25,459 --> 00:01:27,439",
    "arabic": "تُحَاوِلُ أَنْ تَعْرِفَ جَاذِبِيَّةَ الْأَرْضِ؟",
    "segs": null,
    "full_uz": "Yerning tortish kuchini bilmoqchimisan?",
    "note": null
  },
  {
    "num": 14,
    "time": "00:01:27,439 --> 00:01:29,299",
    "arabic": "لَيْسَتِ الْأَرْضَ بَلْ كُرَةً أَرْضِيَّةً",
    "segs": null,
    "full_uz": "Yerni emas, balki globusni.",
    "note": null
  },
  {
    "num": 15,
    "time": "00:01:29,299 --> 00:01:31,620",
    "arabic": "الْكُرَةُ الْأَرْضِيَّةُ هِيَ نَمُوذَجٌ عَنِ الْأَرْضِ",
    "segs": null,
    "full_uz": "Globus — bu Yerning namunasi.",
    "note": null
  },
  {
    "num": 16,
    "time": "00:01:31,620 --> 00:01:33,099",
    "arabic": "لَا يَا سِيمْكَا",
    "segs": null,
    "full_uz": "Yo'q, Simka.",
    "note": null
  },
  {
    "num": 17,
    "time": "00:01:33,099 --> 00:01:34,819",
    "arabic": "نَمُوذَجُ الْأَرْضِ كَالْكُرَةِ",
    "segs": null,
    "full_uz": "Yerning namunasi to'p kabi.",
    "note": null
  },
  {
    "num": 18,
    "time": "00:01:34,819 --> 00:01:37,560",
    "arabic": "وَالْأَرْضُ مُسَطَّحَةٌ، أَلَا تَرَيْنَ؟",
    "segs": [
      { "ar": "وَالْأَرْضُ مُسَطَّحَةٌ", "uz": "Yer esa tekis" },
      { "ar": "أَلَا تَرَيْنَ؟", "uz": "ko'rmayapsanmi" }
    ],
    "full_uz": "Yer esa tekis, ko'rmayapsanmi?",
    "note": null
  },
  {
    "num": 19,
    "time": "00:01:37,560 --> 00:01:39,099",
    "arabic": "الْأَرْضُ أَيْضًا تَبْدُو كَالْكُرَةِ",
    "segs": null,
    "full_uz": "Yer ham to'pga o'xshaydi.",
    "note": null
  },
  {
    "num": 20,
    "time": "00:01:39,099 --> 00:01:41,640",
    "arabic": "لَكِنَّهَا كُرَةٌ كَبِيرَةٌ جِدًّا",
    "segs": null,
    "full_uz": "Lekin u juda katta to'p.",
    "note": null
  },
  {
    "num": 21,
    "time": "00:01:41,640 --> 00:01:42,900",
    "arabic": "غَيْرُ صَحِيحٍ",
    "segs": null,
    "full_uz": "Bu noto'g'ri.",
    "note": null
  },
  {
    "num": 22,
    "time": "00:01:42,900 --> 00:01:45,159",
    "arabic": "لَوْ كَانَ مَا تَقُولِينَهُ صَحِيحًا",
    "segs": null,
    "full_uz": "Agar aytganing to'g'ri bo'lganda.",
    "note": null
  },
  {
    "num": 23,
    "time": "00:01:45,159 --> 00:01:46,620",
    "arabic": "لَقَدْ طَفَا النَّاسُ عَنْهَا",
    "segs": null,
    "full_uz": "Odamlar undan uchib ketardi.",
    "note": "Srt matnida «طفت» deb yozilgan, mazmunga ko'ra to'g'ri shakli «طَفَا» («suzib/uchib ketdi») bo'lishi kerak — ko'plikda «طَفَوْا»."
  },
  {
    "num": 24,
    "time": "00:01:46,620 --> 00:01:48,420",
    "arabic": "كَمَا فَعَلَتْ هَذِهِ مَعِي",
    "segs": null,
    "full_uz": "Xuddi mana bu men bilan qilganidek.",
    "note": null
  },
  {
    "num": 25,
    "time": "00:01:48,420 --> 00:01:51,599",
    "arabic": "لَا تَقُومُ الْأَرْضُ بِجَذْبِ الْجَمِيعِ إِلَيْهَا",
    "segs": null,
    "full_uz": "Yer hammani o'ziga tortmaydi.",
    "note": null
  },
  {
    "num": 26,
    "time": "00:01:51,599 --> 00:01:53,759",
    "arabic": "وَاثِقَةٌ؟",
    "segs": null,
    "full_uz": "Ishonchingiz komilmi?",
    "note": null
  },
  {
    "num": 27,
    "time": "00:01:53,760 --> 00:01:59,580",
    "arabic": "كَوْكَبُ الْأَرْضِ الَّذِي نَعِيشُ عَلَيْهِ جِسْمٌ كُرَوِيٌّ كَبِيرٌ",
    "segs": null,
    "full_uz": "Biz yashayotgan Yer sayyorasi katta shar shaklidagi jismdir.",
    "note": null
  },
  {
    "num": 28,
    "time": "00:01:59,580 --> 00:02:04,160",
    "arabic": "تَدُورُ الْأَرْضُ حَوْلَ الشَّمْسِ وَيَدُورُ الْقَمَرُ حَوْلَ الْأَرْضِ",
    "segs": [
      { "ar": "تَدُورُ الْأَرْضُ حَوْلَ الشَّمْسِ", "uz": "Yer Quyosh atrofida aylanadi" },
      { "ar": "وَيَدُورُ الْقَمَرُ حَوْلَ الْأَرْضِ", "uz": "Oy esa Yer atrofida aylanadi" }
    ],
    "full_uz": "Yer Quyosh atrofida aylanadi, Oy esa Yer atrofida aylanadi.",
    "note": null
  },
  {
    "num": 29,
    "time": "00:02:04,160 --> 00:02:07,540",
    "arabic": "هَلْ تَعْلَمُ لِمَ لَا تَذْهَبُ بَعِيدًا؟",
    "segs": null,
    "full_uz": "Nega uzoqqa uchib ketmasligimizni bilasanmi?",
    "note": null
  },
  {
    "num": 30,
    "time": "00:02:07,540 --> 00:02:12,719",
    "arabic": "بِسَبَبِ قُوَّةٍ تُدْعَى الْجَاذِبِيَّةَ الَّتِي تَقُومُ بِجَذْبِ بَعْضِ الْأَشْيَاءِ نَحْوَ بَعْضِهَا",
    "segs": null,
    "full_uz": "Gravitatsiya deb ataladigan kuch tufayli, u ba'zi narsalarni bir-biriga tortadi.",
    "note": null
  },
  {
    "num": 31,
    "time": "00:02:12,719 --> 00:02:15,659",
    "arabic": "فَكُلَّمَا كَانَ الشَّيْءُ أَثْقَلَ كَانَ جَذْبُهُ أَقْوَى",
    "segs": null,
    "full_uz": "Narsa qanchalik og'ir bo'lsa, uning tortishi shunchalik kuchli bo'ladi.",
    "note": null
  },
  {
    "num": 32,
    "time": "00:02:15,659 --> 00:02:20,900",
    "arabic": "وَلِهَذَا يَنْجَذِبُ النَّاسُ وَالصُّخُورُ وَالْهَوَاءُ وَالْمَاءُ نَحْوَ الْأَرْضِ بَدَلَ أَنْ تَعُومَ فِي الْفَضَاءِ",
    "segs": [
      { "ar": "وَلِهَذَا يَنْجَذِبُ النَّاسُ وَالصُّخُورُ وَالْهَوَاءُ وَالْمَاءُ نَحْوَ الْأَرْضِ", "uz": "shuning uchun odamlar, tosh, havo va suv Yerga tortiladi" },
      { "ar": "بَدَلَ أَنْ تَعُومَ فِي الْفَضَاءِ", "uz": "fazoda suzib yurish o'rniga" }
    ],
    "full_uz": "Shuning uchun odamlar, tosh, havo va suv fazoda suzib yurish o'rniga Yerga tortiladi.",
    "note": null
  },
  {
    "num": 33,
    "time": "00:02:20,900 --> 00:02:23,939",
    "arabic": "بِفَضْلِ الْجَاذِبِيَّةِ نَتَمَكَّنُ مِنَ الْمَشْيِ عَلَى سَطْحِ الْأَرْضِ",
    "segs": null,
    "full_uz": "Tortishish kuchi tufayli Yer yuzasida yura olamiz.",
    "note": null
  },
  {
    "num": 34,
    "time": "00:02:23,939 --> 00:02:30,300",
    "arabic": "وَلِمَ لَا تَجْذِبُنِي هَذِهِ الْكُرَةُ كَمَا تَفْعَلُ الْأَرْضُ؟",
    "segs": null,
    "full_uz": "Nega bu to'p meni Yer kabi tortmaydi?",
    "note": null
  },
  {
    "num": 35,
    "time": "00:02:30,300 --> 00:02:33,540",
    "arabic": "لِأَنَّ هَذِهِ الْكُرَةَ خَفِيفَةٌ جِدًّا مُقَارَنَةً بِالْأَرْضِ",
    "segs": null,
    "full_uz": "Chunki bu to'p Yerga solishtirganda juda yengil.",
    "note": null
  },
  {
    "num": 36,
    "time": "00:02:33,540 --> 00:02:37,060",
    "arabic": "هَذِهِ الْكُرَةُ أَخَفُّ مِنْهَا بِمَلَايِينِ بَلَايِينِ الْمَرَّاتِ",
    "segs": null,
    "full_uz": "Bu to'p undan millionlab milliard marta yengilroq.",
    "note": null
  },
  {
    "num": 37,
    "time": "00:02:37,060 --> 00:02:40,120",
    "arabic": "بِالْمُقَارَنَةِ مَعَ الْأَرْضِ نَحْنُ كَذَرَّاتِ الْغُبَارِ",
    "segs": null,
    "full_uz": "Yerga solishtirganda biz chang zarralariga o'xshaymiz.",
    "note": null
  },
  {
    "num": 38,
    "time": "00:02:40,120 --> 00:02:40,840",
    "arabic": "هُوَ مُحِقٌّ",
    "segs": null,
    "full_uz": "U haq.",
    "note": null
  },
  {
    "num": 39,
    "time": "00:02:40,840 --> 00:02:42,060",
    "arabic": "انْظُرْ إِلَى الْخَيْطِ",
    "segs": null,
    "full_uz": "Ipga qara.",
    "note": null
  },
  {
    "num": 40,
    "time": "00:02:42,060 --> 00:02:45,040",
    "arabic": "يَلْتَصِقُ بِهَذِهِ الْكُرَةِ كَمَا نَلْتَصِقُ نَحْنُ بِالْأَرْضِ",
    "segs": null,
    "full_uz": "U bu to'pga xuddi bizning Yerga yopishganimizdek yopishadi.",
    "note": null
  },
  {
    "num": 41,
    "time": "00:02:45,040 --> 00:02:47,500",
    "arabic": "لَا، ذَلِكَ لِأَنَّ لَا أَحَدَ يُدِيرُهَا",
    "segs": [
      { "ar": "لَا", "uz": "yo'q" },
      { "ar": "ذَلِكَ لِأَنَّ لَا أَحَدَ يُدِيرُهَا", "uz": "bu hech kim uni aylantirmayotgani uchun" }
    ],
    "full_uz": "Yo'q, bu hech kim uni aylantirmayotgani uchun.",
    "note": null
  },
  {
    "num": 42,
    "time": "00:02:47,500 --> 00:02:50,000",
    "arabic": "وَلَكِنَّ الْأَرْضَ تَدُورُ وَنَحْنُ نَلْتَصِقُ بِهَا",
    "segs": null,
    "full_uz": "Lekin Yer aylanadi va biz unga yopishib qolamiz.",
    "note": null
  },
  {
    "num": 43,
    "time": "00:02:50,000 --> 00:02:52,099",
    "arabic": "مَاذَا؟ أَنَا لَنْ أُصَدِّقَكَ",
    "segs": [
      { "ar": "مَاذَا؟", "uz": "nima" },
      { "ar": "أَنَا لَنْ أُصَدِّقَكَ", "uz": "men senga ishonmayman" }
    ],
    "full_uz": "Nima? Men senga ishonmayman.",
    "note": null
  },
  {
    "num": 44,
    "time": "00:02:52,099 --> 00:02:54,300",
    "arabic": "مِنَ الْمُسْتَحِيلِ أَنْ تَكُونَ الْأَرْضُ تَدُورُ",
    "segs": null,
    "full_uz": "Yerning aylanishi mumkin emas.",
    "note": null
  },
  {
    "num": 45,
    "time": "00:02:54,300 --> 00:02:57,879",
    "arabic": "أَنْتَ لَيْسَ لَدَيْكَ أَدْنَى فِكْرَةٍ عَنْ تَنَاوُبِ اللَّيْلِ وَالنَّهَارِ",
    "segs": null,
    "full_uz": "Sening kecha-kunduz almashinuvi haqida zarracha tushunching yo'q.",
    "note": null
  },
  {
    "num": 46,
    "time": "00:02:57,879 --> 00:03:01,419",
    "arabic": "بَلْ أَعْلَمُ ذَلِكَ لِأَنَّ الشَّمْسَ تَصْعَدُ ثُمَّ تَهْبِطُ",
    "segs": null,
    "full_uz": "Aksincha, bilaman, chunki quyosh ko'tariladi, keyin pastga tushadi.",
    "note": null
  },
  {
    "num": 47,
    "time": "00:03:01,419 --> 00:03:09,659",
    "arabic": "رَاقِبْ هَذَا، شَمْسُنَا هُنَا وَأَنْتَ هُنَاكَ",
    "segs": [
      { "ar": "رَاقِبْ هَذَا", "uz": "shunga qara" },
      { "ar": "شَمْسُنَا هُنَا وَأَنْتَ هُنَاكَ", "uz": "quyoshimiz shu yerda, sen esa u yerdasan" }
    ],
    "full_uz": "Shunga qara, quyoshimiz shu yerda, sen esa u yerdasan.",
    "note": null
  },
  {
    "num": 48,
    "time": "00:03:09,659 --> 00:03:12,560",
    "arabic": "عَلَى الْأَرْضِ، هَلْ عِنْدَكَ ظَلَامٌ؟",
    "segs": null,
    "full_uz": "Yerda, sizda qorong'ilikmi?",
    "note": null
  },
  {
    "num": 49,
    "time": "00:03:12,560 --> 00:03:13,340",
    "arabic": "إِنَّهُ ظَلَامٌ",
    "segs": null,
    "full_uz": "Bu qorong'ilik.",
    "note": null
  },
  {
    "num": 50,
    "time": "00:03:13,340 --> 00:03:15,560",
    "arabic": "إِنَّهُ وَقْتُ اللَّيْلِ عَلَى جَانِبِكَ",
    "segs": null,
    "full_uz": "Sening tomoningda tun vaqti.",
    "note": null
  },
  {
    "num": 51,
    "time": "00:03:15,560 --> 00:03:16,819",
    "arabic": "وَهُنَا نَهَارٌ",
    "segs": null,
    "full_uz": "Bu yerda esa kunduz.",
    "note": null
  },
  {
    "num": 52,
    "time": "00:03:16,819 --> 00:03:19,520",
    "arabic": "حَسَنًا، وَالْآنَ تَدُورُ الْأَرْضُ",
    "segs": [
      { "ar": "حَسَنًا", "uz": "xo'p" },
      { "ar": "وَالْآنَ تَدُورُ الْأَرْضُ", "uz": "va endi Yer aylanadi" }
    ],
    "full_uz": "Xo'p, va endi Yer aylanadi.",
    "note": null
  },
  {
    "num": 53,
    "time": "00:03:19,520 --> 00:03:23,960",
    "arabic": "مَرْحَبًا، الْآنَ إِنَّهُ النَّهَارُ عِنْدِي وَاللَّيْلُ عِنْدِي هُنَا",
    "segs": [
      { "ar": "مَرْحَبًا", "uz": "salom" },
      { "ar": "الْآنَ إِنَّهُ النَّهَارُ عِنْدِي وَاللَّيْلُ عِنْدِي هُنَا", "uz": "hozir mening tomonimda kunduz, bu yerimda esa tun" }
    ],
    "full_uz": "Salom, hozir mening tomonimda kunduz, bu yerimda esa tun.",
    "note": null
  },
  {
    "num": 54,
    "time": "00:03:23,960 --> 00:03:30,260",
    "arabic": "آهْ، جَانِبِي مُظْلِمٌ مُجَدَّدًا وَهُنَا نَهَارٌ جَدِيدٌ",
    "segs": [
      { "ar": "آهْ، جَانِبِي مُظْلِمٌ مُجَدَّدًا", "uz": "voy, tomonim yana qorong'i" },
      { "ar": "وَهُنَا نَهَارٌ جَدِيدٌ", "uz": "bu yerda esa yangi kun" }
    ],
    "full_uz": "Voy, tomonim yana qorong'i, bu yerda esa yangi kun.",
    "note": null
  },
  {
    "num": 55,
    "time": "00:03:30,260 --> 00:03:33,040",
    "arabic": "حَسَنًا، جَيِّدٌ، أَنْتُمَا مُحِقَّانِ",
    "segs": [
      { "ar": "حَسَنًا، جَيِّدٌ", "uz": "xo'p, yaxshi" },
      { "ar": "أَنْتُمَا مُحِقَّانِ", "uz": "ikkalangiz ham haqsiz" }
    ],
    "full_uz": "Xo'p, yaxshi, ikkalangiz ham haqsiz.",
    "note": null
  },
  {
    "num": 56,
    "time": "00:03:33,040 --> 00:03:35,939",
    "arabic": "أُصَدِّقُكُمَا، الْأَرْضُ تَدُورُ",
    "segs": [
      { "ar": "أُصَدِّقُكُمَا", "uz": "sizlarga ishonaman" },
      { "ar": "الْأَرْضُ تَدُورُ", "uz": "Yer aylanadi" }
    ],
    "full_uz": "Sizlarga ishonaman, Yer aylanadi.",
    "note": null
  },
  {
    "num": 57,
    "time": "00:03:35,939 --> 00:03:42,060",
    "arabic": "تَدُورُ الْأَرْضُ وَتَدُورُ مِثْلَ قِمَّةِ الْمِغْزَلِ الْمَائِلِ",
    "segs": null,
    "full_uz": "Yer og'ma cho'g'irtakning uchidek aylanib turadi.",
    "note": "«قِمَّةُ الْمِغْزَلِ» — aylanib turadigan o'yinchoq cho'g'irtakning yuqori qismi."
  },
  {
    "num": 58,
    "time": "00:03:42,060 --> 00:03:48,040",
    "arabic": "وَبَيْنَمَا تَدُورُ تُشْرِقُ الشَّمْسُ بِنُورِهَا عَلَى أَيِّ نِصْفٍ كَانَتْ تُوَاجِهُهُ مِنَ الْأَرْضِ",
    "segs": null,
    "full_uz": "U aylanayotganda, quyosh Yerning qaysi yarmiga qarab tursa, o'sha yarmiga nur sochadi.",
    "note": null
  },
  {
    "num": 59,
    "time": "00:03:48,039 --> 00:03:55,099",
    "arabic": "وَبَيْنَمَا تَقُومُ الْأَرْضُ بِدَوْرَةٍ كَامِلَةٍ نَرَى كَيْفَ يُصْبِحُ اللَّيْلُ نَهَارًا وَيَعُودُ النَّهَارُ لَيْلًا مُجَدَّدًا",
    "segs": [
      { "ar": "وَبَيْنَمَا تَقُومُ الْأَرْضُ بِدَوْرَةٍ كَامِلَةٍ", "uz": "Yer to'liq bir aylanish qilayotganda" },
      { "ar": "نَرَى كَيْفَ يُصْبِحُ اللَّيْلُ نَهَارًا وَيَعُودُ النَّهَارُ لَيْلًا مُجَدَّدًا", "uz": "tun qanday kunduzga aylanib, kunduz esa yana tunga aylanishini ko'ramiz" }
    ],
    "full_uz": "Yer to'liq bir aylanish qilayotganda, tun qanday kunduzga aylanib, kunduz esa yana tunga aylanishini ko'ramiz.",
    "note": null
  },
  {
    "num": 60,
    "time": "00:03:55,099 --> 00:03:59,039",
    "arabic": "وَتَدُورُ الْأَرْضُ دَوْرَةً كَامِلَةً خِلَالَ أَرْبَعٍ وَعِشْرِينَ سَاعَةً",
    "segs": null,
    "full_uz": "Yer yigirma to'rt soat ichida to'liq bir aylanishni tugallaydi.",
    "note": null
  },
  {
    "num": 61,
    "time": "00:03:59,579 --> 00:04:07,500",
    "arabic": "وَهَذَا لَيْسَ كُلَّ شَيْءٍ فَالْأَرْضُ تَطُوفُ فِي الْفَضَاءِ حَوْلَ الشَّمْسِ وَتَسْتَغْرِقُ الْأَرْضُ سَنَةً وَاحِدَةً لِإِتْمَامِ دَوْرَةٍ كَامِلَةٍ",
    "segs": [
      { "ar": "وَهَذَا لَيْسَ كُلَّ شَيْءٍ", "uz": "bu hammasi emas" },
      { "ar": "فَالْأَرْضُ تَطُوفُ فِي الْفَضَاءِ حَوْلَ الشَّمْسِ", "uz": "Yer fazoda Quyosh atrofida aylanadi" },
      { "ar": "وَتَسْتَغْرِقُ الْأَرْضُ سَنَةً وَاحِدَةً لِإِتْمَامِ دَوْرَةٍ كَامِلَةٍ", "uz": "va bu to'liq aylanishni yakunlash uchun bir yil vaqt oladi" }
    ],
    "full_uz": "Bu hammasi emas, Yer fazoda Quyosh atrofida aylanadi va bu to'liq aylanishni yakunlash uchun bir yil vaqt oladi.",
    "note": null
  },
  {
    "num": 62,
    "time": "00:04:07,500 --> 00:04:14,699",
    "arabic": "وَبَيْنَمَا تَسِيرُ فِي طَرِيقِهَا يَتَنَاوَبُ الْجُزْءُ الْعُلْوِيُّ وَالسُّفْلِيُّ مِنَ الْأَرْضِ عَلَى الِاقْتِرَابِ مِنَ الشَّمْسِ",
    "segs": null,
    "full_uz": "Yer o'z yo'lida ketayotib, uning yuqori va quyi qismlari navbatma-navbat Quyoshga yaqinlashadi.",
    "note": null
  },
  {
    "num": 63,
    "time": "00:04:14,699 --> 00:04:16,319",
    "arabic": "لِأَنَّ الْأَرْضَ مَائِلَةٌ",
    "segs": null,
    "full_uz": "Chunki Yer og'gan holda turadi.",
    "note": null
  },
  {
    "num": 64,
    "time": "00:04:16,319 --> 00:04:19,539",
    "arabic": "فَعِنْدَمَا يَكُونُ النِّصْفُ الْعُلْوِيُّ أَقْرَبَ إِلَى الشَّمْسِ",
    "segs": null,
    "full_uz": "Yuqori yarim shar Quyoshga yaqinroq bo'lganda.",
    "note": null
  },
  {
    "num": 65,
    "time": "00:04:19,539 --> 00:04:22,420",
    "arabic": "يَكُونُ صَيْفًا وَيَكُونُ شِتَاءً فِي السُّفْلِيِّ",
    "segs": null,
    "full_uz": "U yerda yoz bo'ladi, quyi yarim sharda esa qish.",
    "note": null
  },
  {
    "num": 66,
    "time": "00:04:22,420 --> 00:04:24,500",
    "arabic": "وَعِنْدَمَا يَكُونُ شِتَاءً فِي الْعُلْوِيِّ",
    "segs": null,
    "full_uz": "Yuqorida qish bo'lganda.",
    "note": null
  },
  {
    "num": 67,
    "time": "00:04:24,500 --> 00:04:26,939",
    "arabic": "يَكُونُ صَيْفًا فِي الْأَسْفَلِ",
    "segs": null,
    "full_uz": "Pastda yoz bo'ladi.",
    "note": null
  },
  {
    "num": 68,
    "time": "00:04:26,939 --> 00:04:35,839",
    "arabic": "نُولِيكْ! نُولِيكْ! أَيْنَ أَنْتَ؟",
    "segs": null,
    "full_uz": "Nolik! Nolik! Qayerdasan?",
    "note": null
  },
  {
    "num": 69,
    "time": "00:04:35,839 --> 00:04:38,079",
    "arabic": "فِي مَكَانٍ مَا فِي كَازَاخِسْتَانَ",
    "segs": null,
    "full_uz": "Qozog'istonning biror joyida.",
    "note": null
  },
  {
    "num": 70,
    "time": "00:04:38,079 --> 00:04:41,639",
    "arabic": "إِنَّ قُوَّةَ الْجَاذِبِيَّةِ هُنَا قَوِيَّةٌ جِدًّا",
    "segs": null,
    "full_uz": "Bu yerda tortishish kuchi juda kuchli.",
    "note": null
  },
  {
    "num": 71,
    "time": "00:04:41,639 --> 00:04:42,539",
    "arabic": "هَيَّا أَدِرْهَا",
    "segs": null,
    "full_uz": "Qani, uni aylantir.",
    "note": null
  },
  {
    "num": 72,
    "time": "00:04:42,539 --> 00:04:44,579",
    "arabic": "وَلَكِنَّكَ سَتَقَعُ يَا نُولِيكْ",
    "segs": null,
    "full_uz": "Lekin yiqilib tushasan, Nolik.",
    "note": null
  },
  {
    "num": 73,
    "time": "00:04:44,579 --> 00:04:46,639",
    "arabic": "لَا تَقْلَقْ، أَدِرْهَا",
    "segs": [
      { "ar": "لَا تَقْلَقْ", "uz": "xavotirlanma" },
      { "ar": "أَدِرْهَا", "uz": "uni aylantir" }
    ],
    "full_uz": "Xavotirlanma, uni aylantir.",
    "note": null
  },
  {
    "num": 74,
    "time": "00:04:46,639 --> 00:04:50,779",
    "arabic": "قُمْ بِإِمَالَتِهَا إِنْ كُنْتَ تُرِيدُ",
    "segs": null,
    "full_uz": "Agar xohlasang, uni engashtir.",
    "note": null
  },
  {
    "num": 75,
    "time": "00:04:50,779 --> 00:04:53,599",
    "arabic": "قُلْتُ لَا",
    "segs": null,
    "full_uz": "Yo'q dedim.",
    "note": null
  },
  {
    "num": 76,
    "time": "00:04:53,599 --> 00:04:58,219",
    "arabic": "هَا، وَكُنْتَ وَاثِقًا بِأَنَّنِي سَأَقَعُ",
    "segs": [
      { "ar": "هَا", "uz": "mana" },
      { "ar": "وَكُنْتَ وَاثِقًا بِأَنَّنِي سَأَقَعُ", "uz": "yiqilaman deb o'ylagan edingmi" }
    ],
    "full_uz": "Mana, yiqilaman deb o'ylagan edingmi?",
    "note": null
  },
  {
    "num": 77,
    "time": "00:04:58,219 --> 00:05:00,740",
    "arabic": "هَذَا غَرِيبٌ",
    "segs": null,
    "full_uz": "Bu g'alati.",
    "note": null
  },
  {
    "num": 78,
    "time": "00:05:00,740 --> 00:05:02,519",
    "arabic": "نُولِيكْ، تَعَالَ إِلَى هُنَا",
    "segs": null,
    "full_uz": "Nolik, bu yoqqa kel.",
    "note": null
  },
  {
    "num": 79,
    "time": "00:05:02,519 --> 00:05:04,879",
    "arabic": "لِمَاذَا؟ سَتَرَى هُنَا",
    "segs": [
      { "ar": "لِمَاذَا؟", "uz": "nega" },
      { "ar": "سَتَرَى هُنَا", "uz": "bu yerda ko'rasan" }
    ],
    "full_uz": "Nega? Bu yerda ko'rasan.",
    "note": null
  },
  {
    "num": 80,
    "time": "00:05:04,879 --> 00:05:06,339",
    "arabic": "لَا أُرِيدُ",
    "segs": null,
    "full_uz": "Xohlamayman.",
    "note": null
  },
  {
    "num": 81,
    "time": "00:05:06,339 --> 00:05:08,839",
    "arabic": "لَا تُرِيدُ؟ أَمْ لَا تَسْتَطِيعُ؟",
    "segs": null,
    "full_uz": "Xohlamaysanmi? Yoki qila olmaysanmi?",
    "note": null
  },
  {
    "num": 82,
    "time": "00:05:08,839 --> 00:05:10,379",
    "arabic": "هَيَّا يَا تُومْ، أَلْقِ نَظْرَةً",
    "segs": null,
    "full_uz": "Qani, Tom, bir qarab qo'y.",
    "note": null
  },
  {
    "num": 83,
    "time": "00:05:10,379 --> 00:05:13,959",
    "arabic": "هَا، عَرَفْتُ، لَقَدْ أَلْصَقَ نَفْسَهُ بِالْكُرَةِ، صَحِيحٌ؟",
    "segs": [
      { "ar": "هَا، عَرَفْتُ", "uz": "mana, bildim" },
      { "ar": "لَقَدْ أَلْصَقَ نَفْسَهُ بِالْكُرَةِ، صَحِيحٌ؟", "uz": "o'zini to'pga yopishtirib qo'yibdi, to'g'rimi" }
    ],
    "full_uz": "Mana, bildim, o'zini to'pga yopishtirib qo'yibdi, to'g'rimi?",
    "note": null
  },
  {
    "num": 84,
    "time": "00:05:13,959 --> 00:05:16,859",
    "arabic": "أَجَلْ، بِالْعِلْكِ، أَلَمْ يَحِنْ وَقْتُ الذَّهَابِ؟",
    "segs": [
      { "ar": "أَجَلْ، بِالْعِلْكِ", "uz": "ha, saqich bilan" },
      { "ar": "أَلَمْ يَحِنْ وَقْتُ الذَّهَابِ؟", "uz": "ketish vaqti kelmadimi" }
    ],
    "full_uz": "Ha, saqich bilan, ketish vaqti kelmadimi?",
    "note": null
  },
  {
    "num": 85,
    "time": "00:05:16,859 --> 00:05:17,279",
    "arabic": "بَلَى",
    "segs": null,
    "full_uz": "Ha, keldi.",
    "note": null
  },
  {
    "num": 86,
    "time": "00:05:17,279 --> 00:05:20,959",
    "arabic": "وَأَنَا مَاذَا أَفْعَلُ؟",
    "segs": null,
    "full_uz": "Men-chi, men nima qilaman?",
    "note": null
  },
  {
    "num": 87,
    "time": "00:05:21,859 --> 00:05:26,259",
    "arabic": "سَاعِدَانِي، لَا تَتْرُكَانِي",
    "segs": [
      { "ar": "سَاعِدَانِي", "uz": "menga yordam beringlar" },
      { "ar": "لَا تَتْرُكَانِي", "uz": "meni tashlab ketmanglar" }
    ],
    "full_uz": "Menga yordam beringlar, meni tashlab ketmanglar.",
    "note": null
  },
  {
    "num": 88,
    "time": "00:05:26,259 --> 00:05:26,959",
    "arabic": "هَلْ نُسَاعِدُهُ؟",
    "segs": null,
    "full_uz": "Unga yordam beramizmi?",
    "note": null
  },
  {
    "num": 89,
    "time": "00:05:35,959 --> 00:05:41,099",
    "arabic": "لَمْ أَكُنْ لِأَصْرُخَ وَلَكِنَّ جَاذِبِيَّةَ الْعِلْكِ أَقْوَى مِنْ جَاذِبِيَّةِ الْأَرْضِ",
    "segs": [
      { "ar": "لَمْ أَكُنْ لِأَصْرُخَ", "uz": "qichqirmagan bo'lardim" },
      { "ar": "وَلَكِنَّ جَاذِبِيَّةَ الْعِلْكِ أَقْوَى مِنْ جَاذِبِيَّةِ الْأَرْضِ", "uz": "lekin saqichning tortish kuchi Yerning tortish kuchidan kuchliroq ekan" }
    ],
    "full_uz": "Qichqirmagan bo'lardim, lekin saqichning tortish kuchi Yerning tortish kuchidan kuchliroq ekan.",
    "note": null
  }
];
if (typeof module !== "undefined" && module.exports) {
  module.exports = lessons;
}
