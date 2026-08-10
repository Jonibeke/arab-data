const lessons = [
  {
    "num": 1,
    "time": "00:00:30,000 --> 00:00:36,100",
    "arabic": "الْوِسَادَةُ الْهَوَائِيَّةُ",
    "segs": null,
    "full_uz": "Havo yostig'i.",
    "note": null
  },
  {
    "num": 2,
    "time": "00:00:36,440 --> 00:00:40,100",
    "arabic": "أَلَمْ نَصِلْ بَعْدُ؟",
    "segs": null,
    "full_uz": "Hali yetib kelmadikmi?",
    "note": "Srt matnida «باب» deb yozilgan, mazmunga ko'ra to'g'ri shakli «بَعْدُ» («hali») bo'lishi kerak."
  },
  {
    "num": 3,
    "time": "00:00:40,100 --> 00:00:40,719",
    "arabic": "سَنَصِلُ",
    "segs": null,
    "full_uz": "Yetib boramiz.",
    "note": null
  },
  {
    "num": 4,
    "time": "00:00:40,719 --> 00:00:51,980",
    "arabic": "عَلَى مَهْلِكَ",
    "segs": null,
    "full_uz": "Shoshilma (asta-sekin).",
    "note": "«عَلَى مَهْلِكَ» — «shoshilmasdan, asta-sekin» ma'nosidagi qolip ibora."
  },
  {
    "num": 5,
    "time": "00:00:51,980 --> 00:00:54,980",
    "arabic": "أَنَا فَايِرْ، الْمُتَسَابِقُ الْمُذْهِلُ",
    "segs": null,
    "full_uz": "Men Fayrman, ajoyib poyga ishtirokchisi.",
    "note": null
  },
  {
    "num": 6,
    "time": "00:00:57,840 --> 00:01:00,000",
    "arabic": "آهْ!",
    "segs": null,
    "full_uz": "Voy!",
    "note": null
  },
  {
    "num": 7,
    "time": "00:01:00,000 --> 00:01:06,680",
    "arabic": "حَسَنًا يَا فَايِرْ، إِنَّكَ تَتَهَوَّرُ ثَانِيَةً",
    "segs": null,
    "full_uz": "Xo'p, Fayr, sen yana beparvolik qilyapsan.",
    "note": "Srt matnida «يا خير» deb yozilgan, mazmunga ko'ra bu «يَا فَايِرْ» (Fayrga qaratilgan nido) bo'lishi kerak."
  },
  {
    "num": 8,
    "time": "00:01:06,680 --> 00:01:09,700",
    "arabic": "الْمُذْهِلُونَ مِثْلِي يَعْتَمِدُونَ عَلَى الْحَظِّ",
    "segs": null,
    "full_uz": "Men kabi ajoyiblar omadga tayanadi.",
    "note": null
  },
  {
    "num": 9,
    "time": "00:01:09,700 --> 00:01:13,620",
    "arabic": "أَتَعْلَمُ أَنَّ الِاعْتِمَادَ عَلَى الْحَظِّ تَصَرُّفٌ طَائِشٌ؟",
    "segs": null,
    "full_uz": "Omadga tayanish beparvolik ekanini bilasanmi?",
    "note": null
  },
  {
    "num": 10,
    "time": "00:01:13,620 --> 00:01:16,980",
    "arabic": "سَيَكُونُ مِنَ الْأَفْضَلِ لَوْ أَنَّكَ مُهْتَمٌّ بِالسَّلَامَةِ",
    "segs": null,
    "full_uz": "Xavfsizlikka e'tibor bersang, yaxshiroq bo'lardi.",
    "note": null
  },
  {
    "num": 11,
    "time": "00:01:16,980 --> 00:01:21,700",
    "arabic": "فِي الْوَاقِعِ لَدَى الْعَلَّامَةِ الْيَوْمَ شَيْءٌ مُمَيَّزٌ كَيْ يُرِيَنَا إِيَّاهُ",
    "segs": null,
    "full_uz": "Aslida, professorda bugun bizga ko'rsatmoqchi bo'lgan alohida bir narsasi bor.",
    "note": null
  },
  {
    "num": 12,
    "time": "00:01:21,700 --> 00:01:24,019",
    "arabic": "سَيَقُومُ بِاخْتِبَارِ وِسَادَةٍ هَوَائِيَّةٍ",
    "segs": null,
    "full_uz": "U havo yostig'ini sinab ko'radi.",
    "note": null
  },
  {
    "num": 13,
    "time": "00:01:24,019 --> 00:01:25,099",
    "arabic": "مَا هِيَ؟",
    "segs": null,
    "full_uz": "U nima?",
    "note": null
  },
  {
    "num": 14,
    "time": "00:01:25,099 --> 00:01:26,719",
    "arabic": "دِيجِيتْ، اشْرَحْ ذَلِكَ",
    "segs": null,
    "full_uz": "Dijit, buni tushuntirib ber.",
    "note": null
  },
  {
    "num": 15,
    "time": "00:01:26,719 --> 00:01:33,439",
    "arabic": "عَلَى كُلِّ مَنْ يَقُودُ سَيَّارَةً ارْتِدَاءُ حِزَامِ الْأَمَانِ",
    "segs": null,
    "full_uz": "Mashina haydaydigan har bir kishi xavfsizlik kamarini taqishi kerak.",
    "note": null
  },
  {
    "num": 16,
    "time": "00:01:33,439 --> 00:01:38,219",
    "arabic": "لِأَنَّهُ إِذَا تَوَقَّفَتِ السَّيَّارَةُ بِسُرْعَةٍ سَيُعِيدُ الْحِزَامُ الشَّخْصَ إِلَى الْخَلْفِ",
    "segs": null,
    "full_uz": "Chunki mashina tez to'xtasa, kamar odamni orqaga qaytaradi.",
    "note": null
  },
  {
    "num": 17,
    "time": "00:01:38,219 --> 00:01:43,019",
    "arabic": "وَلَكِنْ فِي بَعْضِ الْأَوْقَاتِ حَتَّى أَحْزِمَةُ الْأَمَانِ لَا تُؤَمِّنُ حِمَايَةً كَافِيَةً",
    "segs": null,
    "full_uz": "Lekin ba'zan xavfsizlik kamarlari ham yetarli himoya bermaydi.",
    "note": null
  },
  {
    "num": 18,
    "time": "00:01:43,019 --> 00:01:47,280",
    "arabic": "مَثَلًا عِنْدَمَا تَصْطَدِمُ سَيَّارَةٌ تَتَحَرَّكُ بِسُرْعَةٍ بِشَيْءٍ مَا",
    "segs": null,
    "full_uz": "Masalan, tez yurayotgan mashina biror narsaga urilganda.",
    "note": null
  },
  {
    "num": 19,
    "time": "00:01:47,280 --> 00:01:51,460",
    "arabic": "عِنْدَهَا تَتِمُّ حِمَايَةُ السَّائِقِ وَالْمُسَافِرِينَ بِالْوِسَادَةِ الْهَوَائِيَّةِ",
    "segs": null,
    "full_uz": "O'shanda haydovchi va yo'lovchilar havo yostig'i bilan himoyalanadi.",
    "note": null
  },
  {
    "num": 20,
    "time": "00:01:51,460 --> 00:01:54,900",
    "arabic": "لَا يُمْكِنُكَ رُؤْيَةُ الْوَسَائِدِ لِأَنَّهَا مُخْفِيَّةٌ",
    "segs": null,
    "full_uz": "Yostiqlarni ko'ra olmaysan, chunki ular yashiringan.",
    "note": null
  },
  {
    "num": 21,
    "time": "00:01:54,900 --> 00:02:00,900",
    "arabic": "وَلَكِنْ إِذَا حَصَلَ حَادِثٌ تَنْتَفِخُ الْوَسَائِدُ الْهَوَائِيَّةُ بِسُرْعَةٍ كَبِيرَةٍ وَيَصْطَدِمُ الشَّخْصُ بِالْوِسَادَةِ",
    "segs": null,
    "full_uz": "Lekin agar hodisa yuz bersa, havo yostiqlari juda tez shishadi va odam yostiqqa urilib qoladi.",
    "note": null
  },
  {
    "num": 22,
    "time": "00:02:02,260 --> 00:02:10,860",
    "arabic": "أَنَا مُسْتَعِدٌّ",
    "segs": null,
    "full_uz": "Men tayyorman.",
    "note": null
  },
  {
    "num": 23,
    "time": "00:02:10,860 --> 00:02:17,219",
    "arabic": "وَمَرَّةً أُخْرَى وَعِنْدَمَا يَجِبُ تَجْرِبَةُ شَيْءٍ خَطِيرٍ يَخْتَبِرُهُ الْعَلَّامَةُ عَلَى نَفْسِهِ",
    "segs": null,
    "full_uz": "Va yana bir bor, xavfli narsani sinab ko'rish kerak bo'lganda, professor buni o'zida sinaydi.",
    "note": null
  },
  {
    "num": 24,
    "time": "00:02:17,219 --> 00:02:21,520",
    "arabic": "وَلَكِنْ يَا جْرَانْدْ بُوسْ، أَلَسْتَ خَائِفًا أَنَّهَا قَدْ لَا تَنْتَفِخُ؟",
    "segs": null,
    "full_uz": "Lekin, Grand-Bos, u shishmasligidan qo'rqmayapsizmi?",
    "note": null
  },
  {
    "num": 25,
    "time": "00:02:21,520 --> 00:02:23,400",
    "arabic": "لَا تَكُنْ قَلِقًا",
    "segs": null,
    "full_uz": "Xavotirlanma.",
    "note": null
  },
  {
    "num": 26,
    "time": "00:02:23,400 --> 00:02:25,120",
    "arabic": "ثَلَاثَةٌ، اثْنَانِ، وَاحِدٌ",
    "segs": null,
    "full_uz": "Uch, ikki, bir.",
    "note": null
  },
  {
    "num": 27,
    "time": "00:02:25,120 --> 00:02:36,240",
    "arabic": "انْتَفَخَتِ الْوِسَادَةُ فِي غُضُونِ ثَانِيَةٍ",
    "segs": null,
    "full_uz": "Yostiq bir soniya ichida shishib ketdi.",
    "note": null
  },
  {
    "num": 28,
    "time": "00:02:36,240 --> 00:02:37,000",
    "arabic": "هَلْ لَاحَظْتُمْ؟",
    "segs": null,
    "full_uz": "Payqadingizmi?",
    "note": null
  },
  {
    "num": 29,
    "time": "00:02:37,000 --> 00:02:38,700",
    "arabic": "أَجَلْ، وَلَكِنْ كَيْفَ؟",
    "segs": null,
    "full_uz": "Ha, lekin qanday qilib?",
    "note": null
  },
  {
    "num": 30,
    "time": "00:02:38,700 --> 00:02:42,120",
    "arabic": "تُوضَعُ مَادَّةٌ كِيمْيَائِيَّةٌ دَاخِلَهَا وَهِيَ تَحْتَرِقُ بِسُرْعَةٍ",
    "segs": null,
    "full_uz": "Uning ichiga kimyoviy modda joylashtiriladi va u tez yonadi.",
    "note": null
  },
  {
    "num": 31,
    "time": "00:02:42,120 --> 00:02:46,360",
    "arabic": "وَتَتَحَوَّلُ مِنْ فَوْرِهَا إِلَى غَازٍ فِي اللَّحْظَةِ الَّتِي يَحْدُثُ فِيهَا الِاصْطِدَامُ",
    "segs": null,
    "full_uz": "To'qnashuv sodir bo'lgan lahzada u darhol gazga aylanadi.",
    "note": null
  },
  {
    "num": 32,
    "time": "00:02:46,360 --> 00:02:49,460",
    "arabic": "وَيَمْلَأُ الْغَازُ الْوِسَادَةَ الْهَوَائِيَّةَ فَتَنْتَفِخُ",
    "segs": null,
    "full_uz": "Gaz havo yostig'ini to'ldiradi va u shishib ketadi.",
    "note": null
  },
  {
    "num": 33,
    "time": "00:02:49,460 --> 00:02:51,400",
    "arabic": "أَلَيْسَ كَذَلِكَ أَيُّهَا الْعَلَّامَةُ؟",
    "segs": null,
    "full_uz": "Shundaymi, professor?",
    "note": null
  },
  {
    "num": 34,
    "time": "00:02:53,400 --> 00:02:58,900",
    "arabic": "يَجِبُ أَنْ نَخْرُجَ",
    "segs": null,
    "full_uz": "Chiqib ketishimiz kerak.",
    "note": null
  },
  {
    "num": 35,
    "time": "00:02:58,900 --> 00:03:02,159",
    "arabic": "تَوَقَّفُوا، مِنَ الْأَفْضَلِ أَنْ نَطْلُبَ الْمُسَاعَدَةَ",
    "segs": null,
    "full_uz": "To'xtang, yordam so'rasak yaxshiroq bo'ladi.",
    "note": null
  },
  {
    "num": 36,
    "time": "00:03:02,159 --> 00:03:09,900",
    "arabic": "سَيِّدِي، هَلْ تُرِيدُ مُسَاعَدَةً؟",
    "segs": null,
    "full_uz": "Janob, yordam kerakmi?",
    "note": null
  },
  {
    "num": 37,
    "time": "00:03:09,900 --> 00:03:13,879",
    "arabic": "شُكْرًا يَا لِيسَا، آسِفٌ عَلَى تَعْطِيلِكِ",
    "segs": null,
    "full_uz": "Rahmat, Lisa, bezovta qilganim uchun uzr.",
    "note": null
  },
  {
    "num": 38,
    "time": "00:03:13,879 --> 00:03:20,560",
    "arabic": "آسِفٌ يَا لِيسَا، آسِفٌ عَلَى تَعْطِيلِكِ",
    "segs": null,
    "full_uz": "Uzr, Lisa, bezovta qilganim uchun uzr.",
    "note": null
  },
  {
    "num": 39,
    "time": "00:03:20,560 --> 00:03:23,900",
    "arabic": "تَسْتَطِيعِينَ الذَّهَابَ",
    "segs": null,
    "full_uz": "Ketishing mumkin.",
    "note": null
  },
  {
    "num": 40,
    "time": "00:03:23,900 --> 00:03:29,379",
    "arabic": "سَيِّدِي، كَيْفَ تَمَكَّنْتَ مِنْ ضَغْطِ الزِّرِّ مِنْ هَذِهِ الْمَسَافَةِ؟",
    "segs": null,
    "full_uz": "Janob, tugmani bu masofadan qanday bosdingiz?",
    "note": null
  },
  {
    "num": 41,
    "time": "00:03:29,379 --> 00:03:31,860",
    "arabic": "رُبَّمَا وَقْتَ طَيَرَانِي",
    "segs": null,
    "full_uz": "Balki uchayotgan paytimda.",
    "note": null
  },
  {
    "num": 42,
    "time": "00:03:31,860 --> 00:03:34,379",
    "arabic": "أَنْتَ مُذْهِلٌ حَقًّا",
    "segs": null,
    "full_uz": "Siz haqiqatan ham ajoyibsiz.",
    "note": null
  },
  {
    "num": 43,
    "time": "00:03:34,379 --> 00:03:41,140",
    "arabic": "لِإِبْقَاءِ الْأَطْفَالِ الصِّغَارِ فِي أَمَانٍ خِلَالَ رُكُوبِهِمُ السَّيَّارَةَ",
    "segs": null,
    "full_uz": "Kichkina bolalarni mashinada o'tirganda xavfsiz saqlash uchun.",
    "note": null
  },
  {
    "num": 44,
    "time": "00:03:41,140 --> 00:03:45,280",
    "arabic": "يَجِبُ أَنْ يَتِمَّ رَبْطُ حِزَامِ الْأَمَانِ لَهُمْ دَاخِلَ الْكُرْسِيِّ الْمُعَزَّزِ",
    "segs": null,
    "full_uz": "Ularga bolalar o'rindig'i ichida xavfsizlik kamari bog'lanishi kerak.",
    "note": null
  },
  {
    "num": 45,
    "time": "00:03:45,280 --> 00:03:49,939",
    "arabic": "وَيَجِبُ عَلَى الْأَطْفَالِ أَنْ يَكُونُوا حَذِرِينَ أَيْضًا عِنْدَ رُكُوبِهِمُ الدَّرَّاجَةَ",
    "segs": null,
    "full_uz": "Bolalar velosipedda ham ehtiyot bo'lishlari kerak.",
    "note": null
  },
  {
    "num": 46,
    "time": "00:03:49,939 --> 00:03:53,139",
    "arabic": "أَوْ لَوْحَةِ التَّزَلُّجِ أَوِ الْمِزْلَجَةِ ذَاتِ الْعَجَلَاتِ",
    "segs": null,
    "full_uz": "Yoki skeytbord yoki g'ildirakli chana(roller)da ham.",
    "note": null
  },
  {
    "num": 47,
    "time": "00:03:53,139 --> 00:03:57,979",
    "arabic": "أَوَّلًا، مِنَ الْأَفْضَلِ الِابْتِعَادُ عَنِ الطُّرُقِ عِنْدَمَا يَكُونُ هُنَاكَ ازْدِحَامٌ",
    "segs": null,
    "full_uz": "Birinchidan, tirbandlik bo'lganda yo'llardan uzoqroq yurgan ma'qul.",
    "note": null
  },
  {
    "num": 48,
    "time": "00:03:57,979 --> 00:04:07,280",
    "arabic": "ثَانِيًا، ارْتَدِي مُعَدَّاتِ الْحِمَايَةِ وَوَاقِيَاتِ الْمَرَافِقِ وَالرُّكَبِ وَالْقُفَّازَاتِ مِنْ أَجْلِ ذِرَاعَيْكِ وَسَاقَيْكِ وَالْخُوذَةَ لِرَأْسِكِ",
    "segs": [
      { "ar": "ثَانِيًا، ارْتَدِي مُعَدَّاتِ الْحِمَايَةِ", "uz": "ikkinchidan, himoya jihozlarini kiying" },
      { "ar": "وَوَاقِيَاتِ الْمَرَافِقِ وَالرُّكَبِ وَالْقُفَّازَاتِ مِنْ أَجْلِ ذِرَاعَيْكِ وَسَاقَيْكِ", "uz": "tirsak va tizza qoplamalari hamda qo'llaringiz va oyoqlaringiz uchun qo'lqop" },
      { "ar": "وَالْخُوذَةَ لِرَأْسِكِ", "uz": "va boshingiz uchun dubulg'a" }
    ],
    "full_uz": "Ikkinchidan, himoya jihozlarini kiying — tirsak va tizza qoplamalari, qo'llaringiz va oyoqlaringiz uchun qo'lqop, boshingiz uchun esa dubulg'a.",
    "note": null
  },
  {
    "num": 49,
    "time": "00:04:07,280 --> 00:04:09,240",
    "arabic": "وَهَكَذَا تَحْمِي نَفْسَكَ",
    "segs": null,
    "full_uz": "Shunday qilib, o'zingni himoya qilasan.",
    "note": null
  },
  {
    "num": 50,
    "time": "00:04:09,240 --> 00:04:13,199",
    "arabic": "ثَالِثًا، تَحَقَّقْ أَنَّ النَّاسَ يَسْتَطِيعُونَ رُؤْيَتَكَ",
    "segs": null,
    "full_uz": "Uchinchidan, odamlar seni ko'ra olishiga ishonch hosil qil.",
    "note": null
  },
  {
    "num": 51,
    "time": "00:04:13,199 --> 00:04:19,199",
    "arabic": "إِنْ كُنْتَ تَقُودُ فِي الْمَسَاءِ يَجِبُ أَنْ يَكُونَ عَلَى مَلَابِسِكَ وَدَرَّاجَتِكَ عَاكِسَاتُ أَمَانٍ",
    "segs": null,
    "full_uz": "Agar kechqurun haydayotgan bo'lsang, kiyimingda va velosipedingda xavfsizlik aksettirgichlari bo'lishi kerak.",
    "note": null
  },
  {
    "num": 52,
    "time": "00:04:19,199 --> 00:04:24,899",
    "arabic": "فَهِيَ تَسْمَحُ لِلسَّائِقِينَ أَنْ يَرَوْكَ عَنْ طَرِيقِ عَكْسِ الضَّوْءِ الصَّادِرِ مِنَ الْمَصَابِيحِ الْأَمَامِيَّةِ",
    "segs": null,
    "full_uz": "Ular haydovchilarga fara nuridan aks etgan yorug'lik orqali seni ko'rish imkonini beradi.",
    "note": null
  },
  {
    "num": 53,
    "time": "00:04:24,899 --> 00:04:27,420",
    "arabic": "تَذَكَّرْ، الْحَذَرُ أَفْضَلُ مِنَ النَّدَمِ",
    "segs": null,
    "full_uz": "Esingda bo'lsin, ehtiyotkorlik afsuslanishdan yaxshiroq.",
    "note": null
  },
  {
    "num": 54,
    "time": "00:04:27,420 --> 00:04:33,159",
    "arabic": "حَسَنًا، أَرْجُو أَنْ أَنْجَحَ هَذِهِ الْمَرَّةَ",
    "segs": null,
    "full_uz": "Xo'p, bu safar muvaffaqiyatli chiqishini umid qilaman.",
    "note": null
  },
  {
    "num": 55,
    "time": "00:04:33,159 --> 00:04:35,800",
    "arabic": "لِلِاحْتِيَاطِ، هَلْ نُنَادِي مُسَاعَدَتَهُ الْآنَ؟",
    "segs": null,
    "full_uz": "Ehtiyot shart bo'lsin, hozir yordamini chaqiraylikmi?",
    "note": null
  },
  {
    "num": 56,
    "time": "00:04:35,800 --> 00:04:36,919",
    "arabic": "نَنْتَظِرُ وَسَنَرَى",
    "segs": null,
    "full_uz": "Kutamiz va ko'ramiz.",
    "note": null
  },
  {
    "num": 57,
    "time": "00:04:36,919 --> 00:04:37,919",
    "arabic": "اسْتِعْدَادٌ",
    "segs": null,
    "full_uz": "Tayyorlanish.",
    "note": null
  },
  {
    "num": 58,
    "time": "00:04:37,919 --> 00:04:39,419",
    "arabic": "انْطِلَاقٌ",
    "segs": null,
    "full_uz": "Boshlash!",
    "note": null
  },
  {
    "num": 59,
    "time": "00:04:39,419 --> 00:04:43,120",
    "arabic": "جْرَانْدْ بُوسْ، عَلَيْنَا إِنْقَاذُهُ",
    "segs": null,
    "full_uz": "Grand-Bos, uni qutqarishimiz kerak.",
    "note": null
  },
  {
    "num": 60,
    "time": "00:04:43,120 --> 00:04:44,399",
    "arabic": "لَا",
    "segs": null,
    "full_uz": "Yo'q.",
    "note": null
  },
  {
    "num": 61,
    "time": "00:04:44,399 --> 00:04:47,000",
    "arabic": "لَا دَاعِيَ لِذَلِكَ",
    "segs": null,
    "full_uz": "Buning hojati yo'q.",
    "note": null
  },
  {
    "num": 62,
    "time": "00:04:47,000 --> 00:04:50,240",
    "arabic": "الْآنَ لَنْ تَنْتَفِخَ الْوِسَادَةُ تِلْقَائِيًّا فَقَطْ",
    "segs": null,
    "full_uz": "Endi yostiq nafaqat o'zi shishib qolmaydi.",
    "note": null
  },
  {
    "num": 63,
    "time": "00:04:50,240 --> 00:04:52,120",
    "arabic": "بَلْ تُفَرِّغُ الْهَوَاءَ بِنَفْسِهَا",
    "segs": null,
    "full_uz": "Balki havoni o'zi ham chiqarib yuboradi.",
    "note": null
  },
  {
    "num": 64,
    "time": "00:04:52,120 --> 00:04:53,199",
    "arabic": "رَائِعٌ",
    "segs": null,
    "full_uz": "Ajoyib.",
    "note": null
  },
  {
    "num": 65,
    "time": "00:04:53,199 --> 00:04:55,180",
    "arabic": "وَكَمَا تَقُولُونَ",
    "segs": null,
    "full_uz": "Va siz aytganingizdek.",
    "note": null
  },
  {
    "num": 66,
    "time": "00:04:55,180 --> 00:04:56,319",
    "arabic": "تِيدِيشْ",
    "segs": null,
    "full_uz": "Tedish.",
    "note": null
  },
  {
    "num": 67,
    "time": "00:04:56,319 --> 00:04:58,060",
    "arabic": "لَقَدِ انْتَهَى دَرْسُ الْيَوْمِ",
    "segs": null,
    "full_uz": "Bugungi dars tugadi.",
    "note": null
  },
  {
    "num": 68,
    "time": "00:04:58,060 --> 00:04:59,160",
    "arabic": "مَرْحَبًا",
    "segs": null,
    "full_uz": "Salom.",
    "note": null
  },
  {
    "num": 69,
    "time": "00:04:59,160 --> 00:04:59,839",
    "arabic": "هَيَّا بِنَا",
    "segs": null,
    "full_uz": "Yuring, ketdik.",
    "note": null
  },
  {
    "num": 70,
    "time": "00:04:59,839 --> 00:05:02,000",
    "arabic": "أَيْنَ لَوْحِيَ الْفِكْسِيُّ؟",
    "segs": null,
    "full_uz": "Mening fiksi taxtam qayerda?",
    "note": "«لَوْحٌ فِكْسِيٌّ» — ertakdagi Fiksilarga xos, uchadigan taxta (skeytbordga o'xshash uchar moslama)."
  },
  {
    "num": 71,
    "time": "00:05:02,600 --> 00:05:04,420",
    "arabic": "أَنَا أَخَذْتُ لَوْحَكَ يَا فَايِرْ",
    "segs": null,
    "full_uz": "Men sening taxtangni oldim, Fayr.",
    "note": null
  },
  {
    "num": 72,
    "time": "00:05:04,420 --> 00:05:05,180",
    "arabic": "خُذْ",
    "segs": null,
    "full_uz": "Mana, ol.",
    "note": null
  },
  {
    "num": 73,
    "time": "00:05:05,180 --> 00:05:07,920",
    "arabic": "قُمْتُ بِتَزْوِيدِهِ بِوِسَادَةٍ هَوَائِيَّةٍ",
    "segs": null,
    "full_uz": "Uni havo yostig'i bilan jihozladim.",
    "note": null
  },
  {
    "num": 74,
    "time": "00:05:07,920 --> 00:05:09,439",
    "arabic": "حَقًّا؟",
    "segs": null,
    "full_uz": "Rostdanmi?",
    "note": null
  },
  {
    "num": 75,
    "time": "00:05:09,439 --> 00:05:10,399",
    "arabic": "لِمَاذَا؟",
    "segs": null,
    "full_uz": "Nega?",
    "note": null
  },
  {
    "num": 76,
    "time": "00:05:10,399 --> 00:05:12,439",
    "arabic": "أَنْتَ تَعْلَمُ أَنَّنِي مُتَسَابِقٌ مُذْهِلٌ",
    "segs": null,
    "full_uz": "Bilasan-ku, men ajoyib poyga ishtirokchisiman.",
    "note": null
  },
  {
    "num": 77,
    "time": "00:05:12,439 --> 00:05:13,000",
    "arabic": "أَتَرَى؟",
    "segs": null,
    "full_uz": "Ko'ryapsanmi?",
    "note": null
  },
  {
    "num": 78,
    "time": "00:05:13,720 --> 00:05:14,000",
    "arabic": "فَفْفْ!",
    "segs": null,
    "full_uz": "Pufff!",
    "note": "«فَفْفْ» — havo chiqib ketish ovozini ifodalovchi taqlidiy so'z."
  },
  {
    "num": 79,
    "time": "00:05:14,839 --> 00:05:16,000",
    "arabic": "وَلِهَذَا قُمْتُ بِتَرْكِيبِهَا",
    "segs": null,
    "full_uz": "Shuning uchun ham uni o'rnatdim.",
    "note": null
  },
  {
    "num": 80,
    "time": "00:05:17,000 --> 00:05:20,060",
    "arabic": "الْمُتَسَابِقُونَ الْمُذْهِلُونَ لَا يَحْتَاجُونَ إِلَيْهَا",
    "segs": null,
    "full_uz": "Ajoyib poyga ishtirokchilariga u kerak emas.",
    "note": null
  },
  {
    "num": 81,
    "time": "00:05:20,060 --> 00:05:23,399",
    "arabic": "لَا نَحْتَاجُهَا أَبَدًا أَبَدًا أَبَدًا",
    "segs": null,
    "full_uz": "Bizga u hech qachon, hech qachon, hech qachon kerak emas.",
    "note": null
  },
  {
    "num": 82,
    "time": "00:05:23,399 --> 00:05:24,000",
    "arabic": "انْتَبِهْ!",
    "segs": null,
    "full_uz": "Ehtiyot bo'l!",
    "note": null
  },
  {
    "num": 83,
    "time": "00:05:24,000 --> 00:05:31,560",
    "arabic": "وِسَادَةٌ هَوَائِيَّةٌ جَمِيلَةٌ",
    "segs": null,
    "full_uz": "Chiroyli havo yostig'i.",
    "note": null
  },
  {
    "num": 84,
    "time": "00:05:31,560 --> 00:05:34,000",
    "arabic": "تَمَّ اسْتِعْمَالُ تَصْمِيمٍ مُبْتَكَرٍ جِدًّا",
    "segs": null,
    "full_uz": "Juda ajoyib dizayn qo'llanilgan.",
    "note": null
  },
  {
    "num": 85,
    "time": "00:05:34,000 --> 00:05:35,720",
    "arabic": "إِنَّهُ تَصْمِيمِي أَيُّهَا الطُّلَّابُ",
    "segs": null,
    "full_uz": "Bu mening dizaynim, o'quvchilar.",
    "note": null
  },
  {
    "num": 86,
    "time": "00:05:35,720 --> 00:05:37,199",
    "arabic": "وَفَايِرْ قَامَ بِاخْتِبَارِهِ",
    "segs": null,
    "full_uz": "Fayr esa uni sinab ko'rdi.",
    "note": null
  },
  {
    "num": 87,
    "time": "00:05:37,199 --> 00:05:40,000",
    "arabic": "هَلْ تَصْنَعُ لِكُلِّ وَاحِدٍ مِنَّا وِسَادَةً هَوَائِيَّةً؟",
    "segs": null,
    "full_uz": "Har birimizga havo yostig'i tayyorlab berasizmi?",
    "note": null
  },
  {
    "num": 88,
    "time": "00:05:40,639 --> 00:05:43,519",
    "arabic": "سَتَحْصُلُونَ جَمِيعًا عَلَيْهَا قَرِيبًا جِدًّا",
    "segs": null,
    "full_uz": "Hammangiz uni tez orada olasiz.",
    "note": null
  },
  {
    "num": 89,
    "time": "00:05:43,519 --> 00:05:44,480",
    "arabic": "وَمَعَ ذَلِكَ",
    "segs": null,
    "full_uz": "Shunga qaramay.",
    "note": null
  },
  {
    "num": 90,
    "time": "00:05:44,480 --> 00:05:47,540",
    "arabic": "الْحِرْصُ وَالْحَذَرُ يَجْعَلَانِ الْحَوَادِثَ نَادِرَةً",
    "segs": null,
    "full_uz": "Diqqat va ehtiyotkorlik hodisalarni kamdan-kam qiladi.",
    "note": null
  }
];
if (typeof module !== "undefined" && module.exports) {
  module.exports = lessons;
}