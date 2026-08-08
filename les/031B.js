const lessons = [
  {
    "num": 1,
    "time": "00:00:30,300 --> 00:00:35,240",
    "arabic": "الِاخْتِفَاءُ",
    "segs": null,
    "full_uz": "Yashirinish.",
    "note": null
  },
  {
    "num": 2,
    "time": "00:00:35,240 --> 00:00:39,320",
    "arabic": "جَيِّدٌ",
    "segs": null,
    "full_uz": "Yaxshi.",
    "note": null
  },
  {
    "num": 3,
    "time": "00:00:39,320 --> 00:00:41,500",
    "arabic": "تُومْ مَا هَذَا؟",
    "segs": null,
    "full_uz": "Tom, bu nima?",
    "note": null
  },
  {
    "num": 4,
    "time": "00:00:41,500 --> 00:00:43,480",
    "arabic": "لِمَا حَوْضُ الْأَسْمَاكِ الثَّانِي؟",
    "segs": null,
    "full_uz": "Nega ikkinchi akvarium bor?",
    "note": null
  },
  {
    "num": 5,
    "time": "00:00:43,480 --> 00:00:45,280",
    "arabic": "وَلَا سِيَّمَا أَنَّهُ بِلَا أَسْمَاكٍ؟",
    "segs": null,
    "full_uz": "Va u baliqsiz-ku?",
    "note": null
  },
  {
    "num": 6,
    "time": "00:00:45,280 --> 00:00:47,140",
    "arabic": "أَوَّلًا إِنَّهَا حَوْضُ زَوَاحِفَ",
    "segs": null,
    "full_uz": "Avvalo, bu sudralib yuruvchilar uchun akvarium,",
    "note": null
  },
  {
    "num": 7,
    "time": "00:00:47,140 --> 00:00:50,380",
    "arabic": "وَلَيْسَ لِلسَّمَكِ بَلْ لِلْعَظَايَا وَالثَّعَابِينِ",
    "segs": [
      { "ar": "وَلَيْسَ لِلسَّمَكِ", "uz": "baliqlar uchun emas" },
      { "ar": "بَلْ لِلْعَظَايَا وَالثَّعَابِينِ", "uz": "balki kaltakesaklar va ilonlar uchun" }
    ],
    "full_uz": "Baliqlar uchun emas, balki kaltakesaklar va ilonlar uchun.",
    "note": null
  },
  {
    "num": 8,
    "time": "00:00:50,380 --> 00:00:54,180",
    "arabic": "طَلَبَتْ إِلَيَّ كَاتْيَا أَنْ أَعْتَنِيَ بِهَا مُدَّةَ غِيَابِهَا",
    "segs": null,
    "full_uz": "Katya u yo'q vaqtda unga qarashimni so'radi.",
    "note": null
  },
  {
    "num": 9,
    "time": "00:00:54,180 --> 00:00:55,500",
    "arabic": "وَلِذَلِكَ أَحْضَرْتُهَا",
    "segs": null,
    "full_uz": "Shuning uchun uni olib keldim.",
    "note": null
  },
  {
    "num": 10,
    "time": "00:00:55,500 --> 00:00:57,380",
    "arabic": "مَاذَا تَقْصِدُ؟",
    "segs": null,
    "full_uz": "Nimani nazarda tutyapsan?",
    "note": null
  },
  {
    "num": 11,
    "time": "00:00:57,380 --> 00:00:58,380",
    "arabic": "مَا مِنْ أَحَدٍ هُنَا؟",
    "segs": null,
    "full_uz": "Bu yerda hech kim yo'qmi?",
    "note": null
  },
  {
    "num": 12,
    "time": "00:00:58,619 --> 00:01:03,039",
    "arabic": "مَا هَذَا؟",
    "segs": null,
    "full_uz": "Bu nima?",
    "note": null
  },
  {
    "num": 13,
    "time": "00:01:03,039 --> 00:01:05,019",
    "arabic": "إِنَّهَا حِرْبَاءٌ يَا نُولِيكْ",
    "segs": null,
    "full_uz": "Bu bir buqalamun, Nolik.",
    "note": null
  },
  {
    "num": 14,
    "time": "00:01:05,019 --> 00:01:06,480",
    "arabic": "أَظُنُّ أَنَّهَا رَائِعَةٌ",
    "segs": null,
    "full_uz": "Menimcha, u ajoyib.",
    "note": null
  },
  {
    "num": 15,
    "time": "00:01:06,480 --> 00:01:08,379",
    "arabic": "إِنَّ إِخْرَاجَهَا فِكْرَةٌ سَيِّئَةٌ",
    "segs": null,
    "full_uz": "Uni chiqarish yomon fikr.",
    "note": null
  },
  {
    "num": 16,
    "time": "00:01:08,379 --> 00:01:09,219",
    "arabic": "فَقَطْ تَهْرَبُ",
    "segs": null,
    "full_uz": "U shunchaki qochib qoladi.",
    "note": null
  },
  {
    "num": 17,
    "time": "00:01:09,219 --> 00:01:11,019",
    "arabic": "لَا تَقْلَقِي أَنَا سَأُمْسِكُهَا",
    "segs": [
      { "ar": "لَا تَقْلَقِي", "uz": "xavotir olma" },
      { "ar": "أَنَا سَأُمْسِكُهَا", "uz": "men uni ushlayman" }
    ],
    "full_uz": "Xavotir olma, men uni ushlayman.",
    "note": null
  },
  {
    "num": 18,
    "time": "00:01:11,019 --> 00:01:12,719",
    "arabic": "يَا لَهَا مِنْ وَحْشٍ",
    "segs": null,
    "full_uz": "Naqadar vahshiy jonivor-a.",
    "note": null
  },
  {
    "num": 19,
    "time": "00:01:12,719 --> 00:01:15,700",
    "arabic": "لَكِنْ كَيْفَ لَمْ أَتَمَكَّنْ مِنْ رُؤْيَتِهَا؟",
    "segs": null,
    "full_uz": "Lekin men uni qanday qilib ko'ra olmadim?",
    "note": null
  },
  {
    "num": 20,
    "time": "00:01:15,700 --> 00:01:18,120",
    "arabic": "لِأَنَّ الْحِرْبَاءَ تَعْلَمُ كَيْفَ تُخْفِي نَفْسَهَا",
    "segs": null,
    "full_uz": "Chunki buqalamun o'zini qanday yashirishni biladi,",
    "note": null
  },
  {
    "num": 21,
    "time": "00:01:18,120 --> 00:01:20,759",
    "arabic": "عَنْ طَرِيقِ تَغْيِيرِ لَوْنِ جَسَدِهَا كَامِلًا",
    "segs": null,
    "full_uz": "tanasining rangini butunlay o'zgartirish orqali.",
    "note": null
  },
  {
    "num": 22,
    "time": "00:01:20,759 --> 00:01:25,299",
    "arabic": "هَلْ سَبَقَ لَكُمْ أَنْ رَأَيْتُمْ زِيًّا عَسْكَرِيًّا؟",
    "segs": null,
    "full_uz": "Harbiy kiyimni ko'rganmisiz?",
    "note": null
  },
  {
    "num": 23,
    "time": "00:01:25,299 --> 00:01:29,420",
    "arabic": "يُصَمَّمُ الزِّيُّ بِأَلْوَانٍ وَأَنْمَاطٍ مُخْتَلِفَةٍ تُسَاعِدُ الْجُنْدِيَّ عَلَى الِاخْتِبَاءِ",
    "segs": null,
    "full_uz": "Kiyim harbiyga yashirinishga yordam beradigan turli rang va naqshlar bilan tayyorlanadi.",
    "note": null
  },
  {
    "num": 24,
    "time": "00:01:29,420 --> 00:01:30,640",
    "arabic": "هَذَا يُدْعَى التَّمْوِيهُ",
    "segs": null,
    "full_uz": "Bu kamuflyaj deb ataladi.",
    "note": null
  },
  {
    "num": 25,
    "time": "00:01:30,640 --> 00:01:32,759",
    "arabic": "وَقَدْ تَعَلَّمَهُ النَّاسُ مِنَ الْحَيَوَانَاتِ",
    "segs": null,
    "full_uz": "Odamlar buni hayvonlardan o'rganishgan.",
    "note": null
  },
  {
    "num": 26,
    "time": "00:01:32,759 --> 00:01:35,359",
    "arabic": "مَثَلًا قَدْ تَبْدُو الْيَرَقَانَةُ كَغُصَيْنٍ",
    "segs": null,
    "full_uz": "Masalan, qurt shoxchaga o'xshab ko'rinishi mumkin,",
    "note": null
  },
  {
    "num": 27,
    "time": "00:01:35,359 --> 00:01:37,979",
    "arabic": "وَحِصَانُ الْبَحْرِ كَقِطْعَةٍ مِنَ الْمَرْجَانِ",
    "segs": null,
    "full_uz": "dengiz oti esa marjon bo'lagiga o'xshaydi,",
    "note": null
  },
  {
    "num": 28,
    "time": "00:01:37,979 --> 00:01:41,079",
    "arabic": "وَيُصْبِحُ الْأَرْنَبُ الرَّمَادِيُّ أَبْيَضَ فِي الشِّتَاءِ",
    "segs": null,
    "full_uz": "kulrang quyon esa qishda oq bo'lib qoladi,",
    "note": null
  },
  {
    "num": 29,
    "time": "00:01:41,079 --> 00:01:44,439",
    "arabic": "لِذَا يُوَاجِهُ الذِّئْبُ صُعُوبَةً فِي الْعُثُورِ عَلَيْهِ فِي الثَّلْجِ",
    "segs": null,
    "full_uz": "shuning uchun bo'ri uni qorda topishda qiynaladi.",
    "note": null
  },
  {
    "num": 30,
    "time": "00:01:44,439 --> 00:01:47,299",
    "arabic": "وَلَكِنْ بَطَلُ التَّمْوِيهِ هُوَ الْحِرْبَاءُ",
    "segs": null,
    "full_uz": "Lekin kamuflyaj bahodiri — bu buqalamun.",
    "note": null
  },
  {
    "num": 31,
    "time": "00:01:47,299 --> 00:01:52,159",
    "arabic": "فَسَيِّدَةُ التَّمْوِيهِ هَذِهِ يُمْكِنُهَا أَنْ تُغَيِّرَ لَوْنَهَا فِي ثَوَانٍ",
    "segs": null,
    "full_uz": "Bu kamuflyaj malikasi rangini bir necha soniyada o'zgartira oladi.",
    "note": null
  },
  {
    "num": 32,
    "time": "00:01:55,299 --> 00:01:58,819",
    "arabic": "هَاي، تُومْ، أَيْنَ ذَهَبَتِ الْحِرْبَاءُ؟",
    "segs": [
      { "ar": "هَاي، تُومْ", "uz": "hoy, Tom" },
      { "ar": "أَيْنَ ذَهَبَتِ الْحِرْبَاءُ", "uz": "buqalamun qayerga ketdi" }
    ],
    "full_uz": "Hoy, Tom, buqalamun qayerga ketdi?",
    "note": null
  },
  {
    "num": 33,
    "time": "00:01:58,819 --> 00:02:00,620",
    "arabic": "آهْ، لَقَدِ اخْتَفَتْ",
    "segs": null,
    "full_uz": "Voy, yo'qolib qoldi.",
    "note": null
  },
  {
    "num": 34,
    "time": "00:02:00,620 --> 00:02:03,899",
    "arabic": "لَمْ تَخْتَفِ، بَلِ اخْتَبَأَتْ",
    "segs": [
      { "ar": "لَمْ تَخْتَفِ", "uz": "yo'qolib qolmadi" },
      { "ar": "بَلِ اخْتَبَأَتْ", "uz": "balki yashirindi" }
    ],
    "full_uz": "Yo'qolib qolmadi, balki yashirindi.",
    "note": null
  },
  {
    "num": 35,
    "time": "00:02:03,899 --> 00:02:07,099",
    "arabic": "لَنْ تَخْتَبِئَ طَوِيلًا، لِنَبْحَثْ عَنْهَا",
    "segs": [
      { "ar": "لَنْ تَخْتَبِئَ طَوِيلًا", "uz": "uzoq yashirinolmaydi" },
      { "ar": "لِنَبْحَثْ عَنْهَا", "uz": "uni qidiraylik" }
    ],
    "full_uz": "Uzoq yashirinolmaydi, uni qidiraylik.",
    "note": null
  },
  {
    "num": 36,
    "time": "00:02:07,099 --> 00:02:21,240",
    "arabic": "شُوسَاكَا، هَلْ رَأَيْتَ الْحِرْبَاءَ؟",
    "segs": null,
    "full_uz": "Shu-saka, buqalamunni ko'rdingmi?",
    "note": null
  },
  {
    "num": 37,
    "time": "00:02:21,240 --> 00:02:22,300",
    "arabic": "أَيْنَ هِيَ؟",
    "segs": null,
    "full_uz": "U qayerda?",
    "note": null
  },
  {
    "num": 38,
    "time": "00:02:25,300 --> 00:02:30,300",
    "arabic": "أَيْنَ هِيَ؟",
    "segs": null,
    "full_uz": "U qayerda?",
    "note": null
  },
  {
    "num": 39,
    "time": "00:02:34,500 --> 00:02:39,300",
    "arabic": "أَرَأَيْتُمَاهَا؟",
    "segs": null,
    "full_uz": "Uni ko'rdinglarmi?",
    "note": null
  },
  {
    "num": 40,
    "time": "00:02:39,300 --> 00:02:41,420",
    "arabic": "لَا، لَنْ تَدَعَنَا نُمْسِكُ بِهَا",
    "segs": null,
    "full_uz": "Yo'q, bizga uni ushlashga imkon bermaydi.",
    "note": null
  },
  {
    "num": 41,
    "time": "00:02:41,420 --> 00:02:45,640",
    "arabic": "عَلَيْنَا أَنْ نَخْدَعَهَا كَيْ تَأْتِيَ إِلَيْنَا",
    "segs": null,
    "full_uz": "Uni bizga o'zi kelishi uchun aldashimiz kerak.",
    "note": null
  },
  {
    "num": 42,
    "time": "00:02:45,640 --> 00:02:49,420",
    "arabic": "نَعَمْ، نُعِدُّ لَهَا فَخًّا بِاسْتِعْمَالِ شَيْءٍ تُحِبُّهُ",
    "segs": null,
    "full_uz": "Ha, u yoqtiradigan biror narsadan foydalanib qopqon tayyorlaymiz.",
    "note": null
  },
  {
    "num": 43,
    "time": "00:02:49,420 --> 00:02:51,520",
    "arabic": "تُرَى مَا تُحِبُّ أَنْ تَأْكُلَ الْحِرْبَاءُ",
    "segs": null,
    "full_uz": "Qani ko'raylik, buqalamun nimani yeyishni yaxshi ko'radi.",
    "note": null
  },
  {
    "num": 44,
    "time": "00:02:51,520 --> 00:02:53,300",
    "arabic": "وَمَاذَا تُحِبُّ طَعَامَهَا؟",
    "segs": null,
    "full_uz": "Uning ovqati qanaqa bo'ladi?",
    "note": null
  },
  {
    "num": 45,
    "time": "00:02:53,300 --> 00:02:55,300",
    "arabic": "وَمَاذَا تَأْكُلُ الْحِرْبَاءُ؟",
    "segs": null,
    "full_uz": "Va buqalamun nima yeydi?",
    "note": null
  },
  {
    "num": 46,
    "time": "00:02:55,900 --> 00:02:58,300",
    "arabic": "الذُّبَابُ أَوِ الْيَرَقَانَاتُ أَوِ الصَّرَاصِيرُ",
    "segs": null,
    "full_uz": "Pashsha, qurtlar yoki tarakanlar.",
    "note": null
  },
  {
    "num": 47,
    "time": "00:02:58,880 --> 00:03:00,300",
    "arabic": "وَمِنْ أَيْنَ سَآتِي بِالذُّبَابِ؟",
    "segs": null,
    "full_uz": "Pashshalarni qayerdan topaman?",
    "note": null
  },
  {
    "num": 48,
    "time": "00:03:01,320 --> 00:03:03,300",
    "arabic": "حَسَنًا أَرَى أَنَّ...",
    "segs": null,
    "full_uz": "Xo'p, menimcha...",
    "note": null
  },
  {
    "num": 49,
    "time": "00:03:04,280 --> 00:03:05,300",
    "arabic": "مَاذَا؟",
    "segs": null,
    "full_uz": "Nima?",
    "note": null
  },
  {
    "num": 50,
    "time": "00:03:08,780 --> 00:03:11,260",
    "arabic": "سِيمْكَا انْتَظِرِي سَأَنَالُ مِنْكِ",
    "segs": [
      { "ar": "سِيمْكَا انْتَظِرِي", "uz": "Simka, kutib tur" },
      { "ar": "سَأَنَالُ مِنْكِ", "uz": "senga yetib olaman" }
    ],
    "full_uz": "Simka, kutib tur, senga yetib olaman.",
    "note": null
  },
  {
    "num": 51,
    "time": "00:03:11,260 --> 00:03:13,720",
    "arabic": "يَجِبُ أَنْ نُسَاعِدَ كَاتْيَا",
    "segs": null,
    "full_uz": "Katyaga yordam berishimiz kerak.",
    "note": null
  },
  {
    "num": 52,
    "time": "00:03:13,720 --> 00:03:16,460",
    "arabic": "كَمَا أَنَّنَا لَا نَرَى الْيَرَقَانَةَ تَتَزَمَّرُ",
    "segs": null,
    "full_uz": "Yana biz qurt vizillayotganini ko'rmaymiz-ku.",
    "note": null
  },
  {
    "num": 53,
    "time": "00:03:16,460 --> 00:03:20,300",
    "arabic": "هُدُوءٌ",
    "segs": null,
    "full_uz": "Jim!",
    "note": null
  },
  {
    "num": 54,
    "time": "00:03:20,300 --> 00:03:21,300",
    "arabic": "هُدُوءٌ؟",
    "segs": null,
    "full_uz": "Jimmi?",
    "note": null
  },
  {
    "num": 55,
    "time": "00:03:21,300 --> 00:03:23,420",
    "arabic": "نُولِيكْ ابْدَأْ بِالطَّنِينِ",
    "segs": null,
    "full_uz": "Nolik, vizillashni boshla.",
    "note": null
  },
  {
    "num": 56,
    "time": "00:03:23,420 --> 00:03:24,180",
    "arabic": "طَنِينٌ؟",
    "segs": null,
    "full_uz": "Vizillashmi?",
    "note": null
  },
  {
    "num": 57,
    "time": "00:03:24,180 --> 00:03:25,460",
    "arabic": "أَجَلْ كَذُبَابَةٍ",
    "segs": null,
    "full_uz": "Ha, pashshadek.",
    "note": null
  },
  {
    "num": 58,
    "time": "00:03:25,460 --> 00:03:27,939",
    "arabic": "نَعَمْ وَأَخْفِقْ بِجَنَاحَيْكَ أَيْضًا",
    "segs": null,
    "full_uz": "Ha, va qanotlaringni ham qoqib tur.",
    "note": null
  },
  {
    "num": 59,
    "time": "00:03:27,939 --> 00:03:36,540",
    "arabic": "سِيمْكَا كَمْ مِنَ الْوَقْتِ سَأَفْعَلُ هَذَا؟",
    "segs": null,
    "full_uz": "Simka, buni qancha vaqt qilishim kerak?",
    "note": null
  },
  {
    "num": 60,
    "time": "00:03:36,540 --> 00:03:38,920",
    "arabic": "تَابِعْ ذَلِكَ حَتَّى تَظْهَرَ الْحِرْبَاءُ",
    "segs": null,
    "full_uz": "Buqalamun paydo bo'lguncha davom ettir.",
    "note": null
  },
  {
    "num": 61,
    "time": "00:03:38,920 --> 00:03:40,160",
    "arabic": "تَابِعِ الطَّنِينَ",
    "segs": null,
    "full_uz": "Vizillashda davom et.",
    "note": null
  },
  {
    "num": 62,
    "time": "00:03:40,160 --> 00:03:48,400",
    "arabic": "هَيَّا بِي أُمْسِكْهَا",
    "segs": null,
    "full_uz": "Qani, ushla uni.",
    "note": null
  },
  {
    "num": 63,
    "time": "00:03:51,300 --> 00:04:07,760",
    "arabic": "مممم...",
    "segs": null,
    "full_uz": "Mmm...",
    "note": null
  },
  {
    "num": 64,
    "time": "00:04:07,760 --> 00:04:16,419",
    "arabic": "اتْرُكِي أَخِي تُومْ! هَيَّا بِسُرْعَةٍ!",
    "segs": [
      { "ar": "اتْرُكِي أَخِي تُومْ", "uz": "akam Tomni qo'yib yubor" },
      { "ar": "هَيَّا بِسُرْعَةٍ", "uz": "qani, tezroq" }
    ],
    "full_uz": "Akam Tomni qo'yib yubor! Qani, tezroq!",
    "note": null
  },
  {
    "num": 65,
    "time": "00:04:16,419 --> 00:04:23,560",
    "arabic": "لَقَدْ أَمْسَكْتُ! أَهَا، أَمْسَكْتُ بِكِ!",
    "segs": [
      { "ar": "لَقَدْ أَمْسَكْتُ", "uz": "ushladim" },
      { "ar": "أَهَا، أَمْسَكْتُ بِكِ", "uz": "aha, seni ushladim" }
    ],
    "full_uz": "Ushladim! Aha, seni ushladim!",
    "note": null
  },
  {
    "num": 66,
    "time": "00:04:26,440 --> 00:04:31,100",
    "arabic": "سَأُخْبِرُكُمْ شَيْئًا فِي الْجَيْشِ يَلْجَؤُونَ إِلَى التَّمْوِيهِ دَائِمًا",
    "segs": [
      { "ar": "سَأُخْبِرُكُمْ شَيْئًا", "uz": "sizlarga bir narsani aytaman" },
      { "ar": "فِي الْجَيْشِ يَلْجَؤُونَ إِلَى التَّمْوِيهِ دَائِمًا", "uz": "armiyada har doim kamuflyajga murojaat qilishadi" }
    ],
    "full_uz": "Sizlarga bir narsani aytaman, armiyada har doim kamuflyajga murojaat qilishadi.",
    "note": null
  },
  {
    "num": 67,
    "time": "00:04:31,100 --> 00:04:33,639",
    "arabic": "يَسْتَعْمِلُونَ الشِّبَاكَ الَّتِي تَبْدُو كَالشُّجَيْرَاتِ",
    "segs": null,
    "full_uz": "Ular butazorlarga o'xshab ko'rinadigan to'rlardan foydalanishadi,",
    "note": null
  },
  {
    "num": 68,
    "time": "00:04:33,639 --> 00:04:37,460",
    "arabic": "يَطْلُونَ الدَّبَّابَاتِ بِأَلْوَانٍ تَجْعَلُهَا تَتَّفِقُ مَعَ مُحِيطِهَا",
    "segs": null,
    "full_uz": "tanklarni atrof-muhitga mos keladigan ranglar bilan bo'yashadi,",
    "note": null
  },
  {
    "num": 69,
    "time": "00:04:37,460 --> 00:04:41,360",
    "arabic": "يُحَلِّقُونَ فِي طَائِرَاتٍ خَاصَّةٍ يَصْعُبُ كَشْفُهَا بِالْكَاشِفِ",
    "segs": null,
    "full_uz": "radar bilan aniqlash qiyin bo'lgan maxsus samolyotlarda uchishadi.",
    "note": null
  },
  {
    "num": 70,
    "time": "00:04:41,360 --> 00:04:44,160",
    "arabic": "يَفْعَلُونَ كُلَّ مَا فِي وُسْعِهِمْ لِإِخْفَاءِ مَكَانِهِمْ",
    "segs": null,
    "full_uz": "O'z joylarini yashirish uchun qo'lidan kelgan hamma narsani qilishadi.",
    "note": null
  },
  {
    "num": 71,
    "time": "00:04:44,160 --> 00:04:47,180",
    "arabic": "وَلَيْسَ الْجَيْشُ فَقَطْ مَنْ يَسْتَعْمِلُ هَذِهِ التَّمْوِيهَاتِ",
    "segs": null,
    "full_uz": "Bu kamuflyajlardan faqat armiyagina foydalanmaydi.",
    "note": null
  },
  {
    "num": 72,
    "time": "00:04:47,180 --> 00:04:51,120",
    "arabic": "فَالْمُصَوِّرُونَ يَتَخَفَّوْنَ لِالْتِقَاطِ صُوَرٍ لِلْحَيَوَانَاتِ الْبَرِّيَّةِ",
    "segs": null,
    "full_uz": "Fotograflar yovvoyi hayvonlarning rasmini olish uchun yashirinishadi,",
    "note": null
  },
  {
    "num": 73,
    "time": "00:04:51,120 --> 00:04:53,980",
    "arabic": "وَيَسْتَعْمِلُ النَّاسُ الزِّينَةَ لِإِخْفَاءِ عُيُوبِهِمْ",
    "segs": null,
    "full_uz": "odamlar esa o'z kamchiliklarini yashirish uchun bezakdan foydalanishadi,",
    "note": null
  },
  {
    "num": 74,
    "time": "00:04:53,980 --> 00:04:57,840",
    "arabic": "وَالْفَنَّانُونَ يُخْفُونَ عُيُوبَ الْحِيطَانِ الْقَدِيمَةِ بِصُوَرٍ مُشْرِقَةٍ",
    "segs": null,
    "full_uz": "rassomlar esa eski devorlarning kamchiliklarini yorqin rasmlar bilan yashirishadi.",
    "note": null
  },
  {
    "num": 75,
    "time": "00:04:57,840 --> 00:05:01,079",
    "arabic": "وَيُحِبُّ الْبَشَرُ أَنْ يَتَخَفَّوْا فِي حَفَلَاتِ التَّنَكُّرِ",
    "segs": null,
    "full_uz": "Odamlar niqob bayramlarida yashirinishni yaxshi ko'radi,",
    "note": null
  },
  {
    "num": 76,
    "time": "00:05:01,079 --> 00:05:03,759",
    "arabic": "إِذْ يَتَنَكَّرُونَ بِالْأَزْيَاءِ وَالْأَقْنِعَةِ",
    "segs": null,
    "full_uz": "kiyimlar va niqoblar bilan o'zlarini niqoblab olishadi.",
    "note": null
  },
  {
    "num": 77,
    "time": "00:05:03,759 --> 00:05:07,220",
    "arabic": "وَالْفِيكْسِزُ أَيْضًا لَدَيْهِمْ طَرِيقَتُهُمْ فِي التَّخَفِّي",
    "segs": null,
    "full_uz": "Fiksiyalarning ham yashirinish usuli bor.",
    "note": null
  },
  {
    "num": 78,
    "time": "00:05:07,220 --> 00:05:09,480",
    "arabic": "الْجَمِيعُ لَدَيْهِمْ أَسَالِيبُهُمْ",
    "segs": null,
    "full_uz": "Hammaning o'z usuli bor.",
    "note": null
  },
  {
    "num": 79,
    "time": "00:05:09,480 --> 00:05:13,699",
    "arabic": "وَالْفِيكْسِزُ أَيْضًا لَدَيْهِمْ طَرِيقَتُهُمْ فِي التَّخَفِّي",
    "segs": null,
    "full_uz": "Fiksiyalarning ham yashirinish usuli bor.",
    "note": null
  },
  {
    "num": 80,
    "time": "00:05:13,699 --> 00:05:15,560",
    "arabic": "أَتَذْكُرُونَ ذَلِكَ؟",
    "segs": null,
    "full_uz": "Esingizdami buni?",
    "note": null
  },
  {
    "num": 81,
    "time": "00:05:15,560 --> 00:05:17,120",
    "arabic": "حَسَنًا، مَا هِيَ؟",
    "segs": null,
    "full_uz": "Xo'p, u qanaqa usul?",
    "note": null
  },
  {
    "num": 82,
    "time": "00:05:17,120 --> 00:05:20,759",
    "arabic": "وَالْآنَ لَمْ تَهْرُبْ",
    "segs": null,
    "full_uz": "Endi qochib qutulmading.",
    "note": null
  },
  {
    "num": 83,
    "time": "00:05:20,759 --> 00:05:22,800",
    "arabic": "إِذَنْ يَا سَيِّدَةَ الِاخْتِفَاءِ",
    "segs": null,
    "full_uz": "Xo'sh, yashirinish malikasi,",
    "note": null
  },
  {
    "num": 84,
    "time": "00:05:22,800 --> 00:05:24,939",
    "arabic": "مَاذَا سَتَقُولِينَ الْآنَ؟",
    "segs": null,
    "full_uz": "endi nima deysan?",
    "note": null
  },
  {
    "num": 85,
    "time": "00:05:24,939 --> 00:05:27,139",
    "arabic": "لَيْتَنِي أَسْتَطِيعُ إِخْفَاءَ نَفْسِي مِثْلَهَا",
    "segs": null,
    "full_uz": "Qani edi men ham o'zimni undek yashira olsam.",
    "note": null
  },
  {
    "num": 86,
    "time": "00:05:27,139 --> 00:05:28,060",
    "arabic": "نُولِيكْ",
    "segs": null,
    "full_uz": "Nolik!",
    "note": null
  },
  {
    "num": 87,
    "time": "00:05:28,060 --> 00:05:30,379",
    "arabic": "مَا الَّذِي تَقُولُهُ أَنْتَ؟",
    "segs": null,
    "full_uz": "Sen o'zing nima deyapsan?",
    "note": null
  },
  {
    "num": 88,
    "time": "00:05:30,379 --> 00:05:33,899",
    "arabic": "أَنْتَ تَعْلَمُ كَيْفَ تُخْفِي نَفْسَكَ أَفْضَلَ مِنْهَا بِمِئَةِ مَرَّةٍ",
    "segs": null,
    "full_uz": "Sen o'zingni undan yuz baravar yaxshiroq yashirishni bilasan.",
    "note": null
  },
  {
    "num": 89,
    "time": "00:05:33,899 --> 00:05:35,639",
    "arabic": "آهْ أَنْتِ مُحِقَّةٌ",
    "segs": null,
    "full_uz": "Voy, sen haqsan.",
    "note": null
  },
  {
    "num": 90,
    "time": "00:05:35,639 --> 00:05:37,340",
    "arabic": "أَيَّتُهَا الْحِرْبَاءُ",
    "segs": null,
    "full_uz": "Ey buqalamun,",
    "note": null
  },
  {
    "num": 91,
    "time": "00:05:37,340 --> 00:05:40,139",
    "arabic": "انْظُرِي وَتَعَلَّمِي كَيْفَ يَكُونُ الْإِخْفَاءُ",
    "segs": null,
    "full_uz": "qara va yashirinish qanday bo'lishini o'rgan.",
    "note": null
  }
];
if (typeof module !== "undefined" && module.exports) {
  module.exports = lessons;
}
