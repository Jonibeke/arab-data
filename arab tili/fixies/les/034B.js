const lessons = [
  {
    "num": 1,
    "time": "00:00:30,620 --> 00:00:34,340",
    "arabic": "فَتْحَةُ التَّهْوِيَةِ",
    "segs": null,
    "full_uz": "Ventilyatsiya teshigi",
    "note": "فَتْحَةُ التَّهْوِيَةِ — ventilyatsiya teshigi. Bu yerda epizod nomi sifatida ishlatilgan."
  },
  {
    "num": 2,
    "time": "00:00:34,340 --> 00:00:37,780",
    "arabic": "تُوم؟",
    "segs": null,
    "full_uz": "Tom?",
    "note": null
  },
  {
    "num": 3,
    "time": "00:00:37,780 --> 00:00:39,640",
    "arabic": "تُوم",
    "segs": null,
    "full_uz": "Tom!",
    "note": null
  },
  {
    "num": 4,
    "time": "00:00:39,640 --> 00:00:41,899",
    "arabic": "حَاضِرٌ",
    "segs": null,
    "full_uz": "Labbay.",
    "note": null
  },
  {
    "num": 5,
    "time": "00:00:41,899 --> 00:00:50,020",
    "arabic": "سِيمْكَا، تُولَا، انْظُرْ",
    "segs": null,
    "full_uz": "Simka, Tula, qara.",
    "note": "تُولَا — qahramon ismi."
  },
  {
    "num": 6,
    "time": "00:00:50,020 --> 00:00:51,700",
    "arabic": "أَلَيْسَتْ جَمِيلَةً؟",
    "segs": null,
    "full_uz": "Chiroyli emasmi?",
    "note": null
  },
  {
    "num": 7,
    "time": "00:00:51,700 --> 00:00:53,480",
    "arabic": "رَائِعَةٌ",
    "segs": null,
    "full_uz": "Ajoyib.",
    "note": null
  },
  {
    "num": 8,
    "time": "00:00:53,480 --> 00:00:54,880",
    "arabic": "إِنَّهَا حِلْيَةٌ عَادِيَّةٌ",
    "segs": null,
    "full_uz": "Bu oddiy taqinchoq-ku.",
    "note": null
  },
  {
    "num": 9,
    "time": "00:00:54,880 --> 00:00:56,620",
    "arabic": "إِنَّهَا بِلَا أَيِّ فَائِدَةٍ",
    "segs": null,
    "full_uz": "Undan hech qanday foyda yo'q.",
    "note": null
  },
  {
    "num": 10,
    "time": "00:00:56,620 --> 00:00:58,480",
    "arabic": "مَاذَا؟",
    "segs": null,
    "full_uz": "Nima?",
    "note": null
  },
  {
    "num": 11,
    "time": "00:00:58,479 --> 00:01:02,119",
    "arabic": "انْظُرِي كَمْ تُلَائِمُ مِشْبَكَ شَعْرِي",
    "segs": null,
    "full_uz": "Qara, u sochim uchun qanchalik mos.",
    "note": null
  },
  {
    "num": 12,
    "time": "00:01:02,119 --> 00:01:05,299",
    "arabic": "الْأَشْيَاءُ الْمُفِيدَةُ هِيَ الْأَشْيَاءُ الَّتِي تَحْتَاجِينَ إِلَيْهَا",
    "segs": null,
    "full_uz": "Foydali narsalar — bu senga kerak bo'ladigan narsalar.",
    "note": null
  },
  {
    "num": 13,
    "time": "00:01:05,299 --> 00:01:07,399",
    "arabic": "كَسُلَّمِ الْحِبَالِ الَّذِي أَمْلِكُهُ",
    "segs": null,
    "full_uz": "Menda bor arqon narvon kabi.",
    "note": null
  },
  {
    "num": 14,
    "time": "00:01:07,399 --> 00:01:08,959",
    "arabic": "إِنَّهُ رَائِعٌ",
    "segs": null,
    "full_uz": "U ajoyib.",
    "note": null
  },
  {
    "num": 15,
    "time": "00:01:08,959 --> 00:01:11,959",
    "arabic": "وَأَيْنَ سَتَتَسَلَّقِينَ بِهَذَا الشَّيْءِ؟",
    "segs": null,
    "full_uz": "Bu narsa bilan qayerga chiqasan?",
    "note": null
  },
  {
    "num": 16,
    "time": "00:01:12,959 --> 00:01:15,959",
    "arabic": "هَذِهِ الْمِرْآةُ أَكْثَرُ فَائِدَةً وَجَمَالًا",
    "segs": null,
    "full_uz": "Bu oyna esa foydaliroq va chiroyliroq.",
    "note": null
  },
  {
    "num": 17,
    "time": "00:01:16,500 --> 00:01:18,319",
    "arabic": "إِنَّهَا رَائِعَةٌ جِدًّا",
    "segs": null,
    "full_uz": "U juda ajoyib.",
    "note": null
  },
  {
    "num": 18,
    "time": "00:01:18,319 --> 00:01:19,959",
    "arabic": "تُولَا، تَصِفِينَ كُلَّ شَيْءٍ بِالرَّائِعِ",
    "segs": null,
    "full_uz": "Tula, sen hamma narsani 'ajoyib' deysan.",
    "note": null
  },
  {
    "num": 19,
    "time": "00:01:20,519 --> 00:01:25,120",
    "arabic": "وَلَكِنْ هُنَاكَ شَيْءٌ فَائِقُ الرَّوْعَةِ لَا شَكَّ أَنَّكِ لَا تَمْلِكِينَهُ",
    "segs": null,
    "full_uz": "Lekin bir juda ajoyib narsa bor, shubhasiz, senda yo'q.",
    "note": null
  },
  {
    "num": 20,
    "time": "00:01:25,120 --> 00:01:27,079",
    "arabic": "مَا هَذَا؟",
    "segs": null,
    "full_uz": "Bu nima?",
    "note": null
  },
  {
    "num": 21,
    "time": "00:01:27,079 --> 00:01:28,439",
    "arabic": "إِنَّهُ مِخْلَبٌ آلِيٌّ",
    "segs": null,
    "full_uz": "Bu avtomatik panja.",
    "note": null
  },
  {
    "num": 22,
    "time": "00:01:28,439 --> 00:01:32,379",
    "arabic": "لَا شَكَّ أَنَّهُ مِثَالِيٌّ لِحَكِّ ظَهْرِكِ",
    "segs": null,
    "full_uz": "Shubhasiz, u orqangni qashish uchun juda mos.",
    "note": null
  },
  {
    "num": 23,
    "time": "00:01:32,379 --> 00:01:34,700",
    "arabic": "الْآنَ انْظُرِي مَاذَا أَمْلِكُ",
    "segs": null,
    "full_uz": "Endi qara, menda nima bor.",
    "note": null
  },
  {
    "num": 24,
    "time": "00:01:34,700 --> 00:01:36,299",
    "arabic": "صُورَةٌ لِفِيكْتُور",
    "segs": null,
    "full_uz": "Viktorning surati.",
    "note": "فِيكْتُور — qahramon (mashhur Fiksik) ismi."
  },
  {
    "num": 25,
    "time": "00:01:36,299 --> 00:01:38,700",
    "arabic": "وَقَدْ وَقَّعَهَا لِي أَيْضًا",
    "segs": null,
    "full_uz": "Va u menga imzo ham chekkan.",
    "note": null
  },
  {
    "num": 26,
    "time": "00:01:38,700 --> 00:01:40,179",
    "arabic": "أَوَاثِقَةٌ بِأَنَّهُ فِيكْتُور؟",
    "segs": null,
    "full_uz": "Bu Viktor ekaniga ishonchingiz komilmi?",
    "note": null
  },
  {
    "num": 27,
    "time": "00:01:40,179 --> 00:01:44,200",
    "arabic": "فِرِدَا، هَلْ لَدَيْكِ صُورَةٌ لِأَشْجَعِ فِيكْسِيٍّ عَلَى وَجْهِ الْكَوْكَبِ؟",
    "segs": null,
    "full_uz": "Firda, sizda sayyoradagi eng jasur Fiksikning surati bormi?",
    "note": "فِرِدَا — qahramon ismi."
  },
  {
    "num": 28,
    "time": "00:01:44,200 --> 00:01:46,759",
    "arabic": "أَجَلْ، وَأَكْثَرُهُمْ مَرَحًا",
    "segs": null,
    "full_uz": "Ha, va eng quvnog'ining ham.",
    "note": null
  },
  {
    "num": 29,
    "time": "00:01:46,759 --> 00:01:48,060",
    "arabic": "هَلْ هَذَا هُوَ؟",
    "segs": null,
    "full_uz": "Shu-mi?",
    "note": null
  },
  {
    "num": 30,
    "time": "00:01:48,060 --> 00:01:49,700",
    "arabic": "مُسْتَحِيلٌ، دَعِينِي أُلْقِ نَظْرَةً",
    "segs": null,
    "full_uz": "Bo'lishi mumkin emas, menga ham qarashga ruxsat ber.",
    "note": null
  },
  {
    "num": 31,
    "time": "00:01:49,700 --> 00:01:51,579",
    "arabic": "لَا، سَتُفْسِدِينَهَا",
    "segs": null,
    "full_uz": "Yo'q, uni buzib qo'yasan.",
    "note": null
  },
  {
    "num": 32,
    "time": "00:01:51,579 --> 00:01:53,099",
    "arabic": "لَقَدْ خُدِعْتُ؟",
    "segs": null,
    "full_uz": "Aldandimmi?",
    "note": null
  },
  {
    "num": 33,
    "time": "00:01:53,099 --> 00:01:53,560",
    "arabic": "لَا",
    "segs": null,
    "full_uz": "Yo'q.",
    "note": null
  },
  {
    "num": 34,
    "time": "00:01:53,560 --> 00:01:54,259",
    "arabic": "بَلَى",
    "segs": null,
    "full_uz": "Ha, aldandim.",
    "note": null
  },
  {
    "num": 35,
    "time": "00:01:54,259 --> 00:01:55,480",
    "arabic": "غَيْرَ الْخِدَاعِ؟",
    "segs": null,
    "full_uz": "Aldashdan boshqami?",
    "note": null
  },
  {
    "num": 36,
    "time": "00:01:55,480 --> 00:01:56,439",
    "arabic": "أَيْنَ صُورَتِي؟",
    "segs": null,
    "full_uz": "Mening suratim qayerda?",
    "note": null
  },
  {
    "num": 37,
    "time": "00:01:56,439 --> 00:02:05,859",
    "arabic": "مَا هَذَا؟",
    "segs": null,
    "full_uz": "Bu nima?",
    "note": null
  },
  {
    "num": 38,
    "time": "00:02:05,859 --> 00:02:07,239",
    "arabic": "طَيَّارٌ هَوَائِيٌّ",
    "segs": null,
    "full_uz": "Havo samolyoti.",
    "note": "طَيَّارٌ هَوَائِيٌّ — asl matndagi ifoda noaniq, taxminan qog'oz samolyotcha nazarda tutilgan."
  },
  {
    "num": 39,
    "time": "00:02:07,239 --> 00:02:08,979",
    "arabic": "كَانَ هَذَا خَطَأَكِ",
    "segs": null,
    "full_uz": "Bu sening xatoing edi.",
    "note": null
  },
  {
    "num": 40,
    "time": "00:02:08,979 --> 00:02:12,340",
    "arabic": "إِنَّهُ لَيْسَ خَطَئِي، بَلْ أَنْتِ مَنْ تَتَفَاخَرِينَ كَثِيرًا",
    "segs": [
      { "ar": "إِنَّهُ لَيْسَ خَطَئِي", "uz": "bu mening xatoim emas" },
      { "ar": "بَلْ أَنْتِ مَنْ تَتَفَاخَرِينَ كَثِيرًا", "uz": "balki sen juda ko'p maqtanasan" }
    ],
    "full_uz": "Bu mening xatoim emas, balki sen juda ko'p maqtanasan.",
    "note": null
  },
  {
    "num": 41,
    "time": "00:02:12,340 --> 00:02:15,259",
    "arabic": "رَجَاءً بِلَا شِجَارٍ، لِنَبْحَثْ عَنْهَا الْآنَ",
    "segs": [
      { "ar": "رَجَاءً بِلَا شِجَارٍ", "uz": "iltimos, janjalsiz" },
      { "ar": "لِنَبْحَثْ عَنْهَا الْآنَ", "uz": "keling, uni hozir qidiraylik" }
    ],
    "full_uz": "Iltimos, janjalsiz, keling, uni hozir qidiraylik.",
    "note": null
  },
  {
    "num": 42,
    "time": "00:02:26,439 --> 00:02:37,939",
    "arabic": "شَيْءٌ مُؤْسِفٌ",
    "segs": null,
    "full_uz": "Achinarli holat.",
    "note": null
  },
  {
    "num": 43,
    "time": "00:02:37,939 --> 00:02:42,319",
    "arabic": "فِقْدَانُ صُورَةٍ عَلَيْهَا تَوْقِيعُ أَشْهَرِ فِيكْسِي عَلَى الْكَوْكَبِ",
    "segs": null,
    "full_uz": "Sayyoradagi eng mashhur Fiksikning imzosi bo'lgan suratni yo'qotish.",
    "note": null
  },
  {
    "num": 44,
    "time": "00:02:42,319 --> 00:02:46,539",
    "arabic": "سَيَكُونُ ذَلِكَ مُرَوِّعًا عِنْدَمَا يَجِدُ الْبَشَرُ تِلْكَ الصُّورَةَ",
    "segs": null,
    "full_uz": "Agar odamlar o'sha suratni topib olsa, bu dahshatli bo'lardi.",
    "note": null
  },
  {
    "num": 45,
    "time": "00:02:46,539 --> 00:02:48,939",
    "arabic": "إِذَنْ أَيْنَ يُمْكِنُ أَنْ تَكُونَ؟",
    "segs": null,
    "full_uz": "Unda u qayerda bo'lishi mumkin?",
    "note": null
  },
  {
    "num": 46,
    "time": "00:02:48,939 --> 00:02:51,740",
    "arabic": "أَعْلَمُ أَيْنَ يُمْكِنُنَا أَنْ نَجِدَهَا",
    "segs": null,
    "full_uz": "Uni qayerdan topishimiz mumkinligini bilaman.",
    "note": null
  },
  {
    "num": 47,
    "time": "00:02:51,740 --> 00:02:52,620",
    "arabic": "صَحِيحٌ",
    "segs": null,
    "full_uz": "To'g'ri.",
    "note": null
  },
  {
    "num": 48,
    "time": "00:02:52,620 --> 00:02:55,539",
    "arabic": "سَنَنْفُخُ فُقَاعَةً وَنَرَاهَا وَهِيَ تَطِيرُ بَعِيدًا",
    "segs": null,
    "full_uz": "Pufak puflaymiz va uning uzoqqa uchib ketishini ko'ramiz.",
    "note": null
  },
  {
    "num": 49,
    "time": "00:02:55,939 --> 00:02:57,539",
    "arabic": "وَنُلَاحِقُهَا وَنَجِدُ صُورَتَهَا",
    "segs": null,
    "full_uz": "Va uning ortidan borib, suratni topamiz.",
    "note": null
  },
  {
    "num": 50,
    "time": "00:02:58,060 --> 00:03:03,539",
    "arabic": "هَلْ تَعْلَمُ لِمَاذَا تُنْفَخُ الْفُقَاعَاتُ مِنَ الْمَاءِ وَالصَّابُونِ؟",
    "segs": null,
    "full_uz": "Nega pufaklar suv va sovundan puflab hosil qilinishini bilasanmi?",
    "note": null
  },
  {
    "num": 51,
    "time": "00:03:04,620 --> 00:03:07,299",
    "arabic": "إِنَّ عَلَى سَطْحِ أَيِّ سَائِلٍ غِشَاءً غَيْرَ مَرْئِيٍّ",
    "segs": null,
    "full_uz": "Har qanday suyuqlikning yuzasida ko'rinmas parda bor.",
    "note": null
  },
  {
    "num": 52,
    "time": "00:03:07,299 --> 00:03:10,060",
    "arabic": "رَقِيقًا جِدًّا وَلَكِنَّهُ قَوِيٌّ جِدًّا",
    "segs": null,
    "full_uz": "Juda yupqa, lekin juda mustahkam.",
    "note": null
  },
  {
    "num": 53,
    "time": "00:03:10,060 --> 00:03:14,979",
    "arabic": "إِنْ أَرَدْتَ أَنْ تَرَى ذَلِكَ فَامْلَأْ كَأْسًا بِالْمَاءِ حَتَّى حَافَتِهَا",
    "segs": null,
    "full_uz": "Agar buni ko'rmoqchi bo'lsang, stakanni chetigacha suvga to'ldir.",
    "note": null
  },
  {
    "num": 54,
    "time": "00:03:14,979 --> 00:03:19,479",
    "arabic": "ثُمَّ خُذْ قِطْعَةً نَقْدِيَّةً وَأَسْقِطْهَا بِحِرْصٍ فِي مُنْتَصَفِ كُوبِ الْمَاءِ",
    "segs": null,
    "full_uz": "Keyin bir tanga oling va uni ehtiyotlik bilan stakan o'rtasiga tashlang.",
    "note": null
  },
  {
    "num": 55,
    "time": "00:03:19,479 --> 00:03:23,659",
    "arabic": "وَبَعْدَ ذَلِكَ أَسْقِطْ قِطْعَةً أُخْرَى وَأُخْرَى وَأُخْرَى",
    "segs": null,
    "full_uz": "Shundan keyin yana bir, yana bir tanga tashlayvering.",
    "note": null
  },
  {
    "num": 56,
    "time": "00:03:23,659 --> 00:03:27,460",
    "arabic": "سَتَجِدُ أَنَّ الْمَاءَ لَا يَنْسَكِبُ بَلْ يَرْتَفِعُ وَيُشَكِّلُ حَدَبَةً",
    "segs": null,
    "full_uz": "Suv to'kilmasligini, aksincha, ko'tarilib do'ng shakl hosil qilishini ko'rasiz.",
    "note": null
  },
  {
    "num": 57,
    "time": "00:03:27,460 --> 00:03:30,659",
    "arabic": "وَذَلِكَ لِأَنَّ الْمَاءَ فِي أَعْلَى الْكُوبِ يَبْقَى مُتَمَاسِكًا",
    "segs": null,
    "full_uz": "Bu esa stakan tepasidagi suv bir-biriga yopishib qolgani uchun.",
    "note": null
  },
  {
    "num": 58,
    "time": "00:03:31,379 --> 00:03:34,579",
    "arabic": "لِمَاذَا؟ بِسَبَبِ قُوَّةٍ هِيَ التَّوَتُّرُ السَّطْحِيُّ",
    "segs": [
      { "ar": "لِمَاذَا؟", "uz": "nega?" },
      { "ar": "بِسَبَبِ قُوَّةٍ هِيَ التَّوَتُّرُ السَّطْحِيُّ", "uz": "yuza tarangligi deb ataladigan kuch tufayli" }
    ],
    "full_uz": "Nega? Yuza tarangligi deb ataladigan kuch tufayli.",
    "note": null
  },
  {
    "num": 59,
    "time": "00:03:34,579 --> 00:03:38,560",
    "arabic": "وَبِفَضْلِ التَّوَتُّرِ السَّطْحِيِّ يُمْكِنُ أَنْ تَتَشَكَّلَ قَطَرَاتُ الْمَاءِ",
    "segs": null,
    "full_uz": "Yuza tarangligi tufayli suv tomchilari hosil bo'lishi mumkin.",
    "note": null
  },
  {
    "num": 60,
    "time": "00:03:38,560 --> 00:03:42,120",
    "arabic": "وَهَذَا يُسَاعِدُ أَيْضًا عَلَى نَفْخِ فُقَاعَاتِ الصَّابُونِ",
    "segs": null,
    "full_uz": "Bu esa sovun pufaklarini puflashga ham yordam beradi.",
    "note": null
  },
  {
    "num": 61,
    "time": "00:03:42,120 --> 00:03:46,219",
    "arabic": "لِأَنَّنَا عِنْدَمَا نُضِيفُ الصَّابُونَ إِلَى الْمَاءِ تَزْدَادُ قُوَّةُ الْغِشَاءِ",
    "segs": null,
    "full_uz": "Chunki sovunni suvga qo'shganimizda, pardaning kuchi ortadi.",
    "note": null
  },
  {
    "num": 62,
    "time": "00:03:46,219 --> 00:03:49,659",
    "arabic": "وَلَكِنَّهُ لَيْسَ قَوِيًّا قُوَّةً تَكْفِي لِمَنْعِ انْفِجَارِ الْفُقَاعَاتِ",
    "segs": null,
    "full_uz": "Lekin u pufaklar portlashining oldini olish uchun yetarlicha mustahkam emas.",
    "note": null
  },
  {
    "num": 63,
    "time": "00:03:49,659 --> 00:03:55,299",
    "arabic": "حَسَنًا، مُسْتَعِدَّةٌ؟ عَلَيْنَا أَنْ نَنْفُخَ",
    "segs": [
      { "ar": "حَسَنًا، مُسْتَعِدَّةٌ؟", "uz": "xo'p, tayyormisan?" },
      { "ar": "عَلَيْنَا أَنْ نَنْفُخَ", "uz": "puflashimiz kerak" }
    ],
    "full_uz": "Xo'p, tayyormisan? Puflashimiz kerak.",
    "note": null
  },
  {
    "num": 64,
    "time": "00:03:55,299 --> 00:04:00,539",
    "arabic": "نَنْفُخُهَا مَعًا",
    "segs": null,
    "full_uz": "Uni birgalikda puflaymiz.",
    "note": null
  },
  {
    "num": 65,
    "time": "00:04:00,539 --> 00:04:06,699",
    "arabic": "لَا أَظُنُّ أَنَّ ذَلِكَ سَيَنْجَحُ",
    "segs": null,
    "full_uz": "Bu ish chiqadi deb o'ylamayman.",
    "note": null
  },
  {
    "num": 66,
    "time": "00:04:11,579 --> 00:04:14,340",
    "arabic": "انْظُرْ، نَجَحَ، تَصِيرُ",
    "segs": null,
    "full_uz": "Qara, chiqdi, ko'tarilyapti.",
    "note": "تَصِيرُ — bu joyda matn noaniq, mazmuniga ko'ra taxminan tarjima qilindi."
  },
  {
    "num": 67,
    "time": "00:04:14,340 --> 00:04:18,360",
    "arabic": "فَتْحَةُ التَّهْوِيَةِ",
    "segs": null,
    "full_uz": "Ventilyatsiya teshigi.",
    "note": null
  },
  {
    "num": 68,
    "time": "00:04:18,360 --> 00:04:22,400",
    "arabic": "صَحِيحٌ! لِمَ لَمْ أُفَكِّرْ فِي ذَلِكَ مِنْ قَبْلُ؟",
    "segs": null,
    "full_uz": "To'g'ri! Nega buni oldinroq o'ylamadim?",
    "note": null
  },
  {
    "num": 69,
    "time": "00:04:22,400 --> 00:04:28,420",
    "arabic": "هَلْ رَأَيْتَ فَتَحَاتٍ مُغَطَّاةً بِشَبَكَةٍ فِي الْحَمَّامِ أَوِ الْمَطْبَخِ؟",
    "segs": null,
    "full_uz": "Hammom yoki oshxonada to'r bilan qoplangan teshiklarni ko'rganmisan?",
    "note": null
  },
  {
    "num": 70,
    "time": "00:04:28,420 --> 00:04:30,540",
    "arabic": "إِنَّهَا تُدْعَى فَتَحَاتِ التَّهْوِيَةِ",
    "segs": null,
    "full_uz": "Ular ventilyatsiya teshiklari deb ataladi.",
    "note": null
  },
  {
    "num": 71,
    "time": "00:04:30,540 --> 00:04:34,420",
    "arabic": "وَمِنْ خَلْفِهَا أُنْبُوبٌ طَوِيلٌ يُدْعَى أُنْبُوبَ الْهَوَاءِ",
    "segs": null,
    "full_uz": "Ularning orqasida 'havo trubasi' deb ataladigan uzun quvur bor.",
    "note": null
  },
  {
    "num": 72,
    "time": "00:04:34,420 --> 00:04:41,900",
    "arabic": "يُدْفَعُ الْهَوَاءُ الْمُلَوَّثُ وَالرَّوَائِحُ الْكَرِيهَةُ نَحْوَ هَذِهِ الْأَنَابِيبِ وَيُرْسَلُ خَارِجَ الْمَنْزِلِ",
    "segs": [
      { "ar": "يُدْفَعُ الْهَوَاءُ الْمُلَوَّثُ وَالرَّوَائِحُ الْكَرِيهَةُ نَحْوَ هَذِهِ الْأَنَابِيبِ", "uz": "ifloslangan havo va yoqimsiz hidlar shu quvurlar tomon itariladi" },
      { "ar": "وَيُرْسَلُ خَارِجَ الْمَنْزِلِ", "uz": "va uydan tashqariga chiqariladi" }
    ],
    "full_uz": "Ifloslangan havo va yoqimsiz hidlar shu quvurlar tomon itariladi va uydan tashqariga chiqariladi.",
    "note": null
  },
  {
    "num": 73,
    "time": "00:04:41,900 --> 00:04:46,180",
    "arabic": "وَإِنْ أَرَدْتَ أَنْ يَخْرُجَ الْهَوَاءُ الْقَدِيمُ الْعَفِنُ مِنَ الْمَنْزِلِ خُرُوجًا أَسْرَعَ",
    "segs": null,
    "full_uz": "Va agar eski, mog'orlangan havo uydan tezroq chiqishini xohlasang,",
    "note": null
  },
  {
    "num": 74,
    "time": "00:04:46,180 --> 00:04:50,120",
    "arabic": "فَافْتَحِ النَّافِذَةَ وَدَعِ بَعْضَ الْهَوَاءِ النَّقِيِّ يَدْخُلُ مِنَ الْخَارِجِ",
    "segs": null,
    "full_uz": "derazani och va tashqaridan toza havo kirishiga yo'l qo'y.",
    "note": null
  },
  {
    "num": 75,
    "time": "00:04:50,120 --> 00:04:53,240",
    "arabic": "أَبْقِ الْهَوَاءَ فِي مَنْزِلِكَ مُنْعِشًا قَدْرَ الْإِمْكَانِ",
    "segs": null,
    "full_uz": "Uyingdagi havoni imkon qadar tetiklashtiruvchi holda saqla.",
    "note": null
  },
  {
    "num": 76,
    "time": "00:04:53,240 --> 00:04:59,960",
    "arabic": "هَاي، انْظُرَا، إِنَّهَا عَالِقَةٌ هُنَا",
    "segs": [
      { "ar": "هَاي، انْظُرَا", "uz": "hey, qaranglar" },
      { "ar": "إِنَّهَا عَالِقَةٌ هُنَا", "uz": "u shu yerda tiqilib qoldi" }
    ],
    "full_uz": "Hey, qaranglar, u shu yerda tiqilib qoldi.",
    "note": null
  },
  {
    "num": 77,
    "time": "00:04:59,960 --> 00:05:01,939",
    "arabic": "أَحْضِرِيهَا قَبْلَ أَنْ تَطِيرَ",
    "segs": null,
    "full_uz": "U uchib ketishidan oldin olib kel.",
    "note": null
  },
  {
    "num": 78,
    "time": "00:05:01,939 --> 00:05:03,300",
    "arabic": "كَيْفَ نُمْسِكُهَا؟",
    "segs": null,
    "full_uz": "Uni qanday ushlaymiz?",
    "note": null
  },
  {
    "num": 79,
    "time": "00:05:03,300 --> 00:05:06,180",
    "arabic": "مَاذَا تَعْنِي؟ أَلَا تَذْكُرِينَ مَا أَمْلِكُ؟",
    "segs": [
      { "ar": "مَاذَا تَعْنِي؟", "uz": "nima demoqchisan?" },
      { "ar": "أَلَا تَذْكُرِينَ مَا أَمْلِكُ؟", "uz": "menda nima borligini eslamayapsanmi?" }
    ],
    "full_uz": "Nima demoqchisan? Menda nima borligini eslamayapsanmi?",
    "note": null
  },
  {
    "num": 80,
    "time": "00:05:06,720 --> 00:05:07,920",
    "arabic": "تِتِنِيشْ",
    "segs": null,
    "full_uz": "Titnish!",
    "note": "تِتِنِيشْ — tovush effekti."
  },
  {
    "num": 81,
    "time": "00:05:07,920 --> 00:05:11,259",
    "arabic": "شُكْرًا سِيمْكَا",
    "segs": null,
    "full_uz": "Rahmat, Simka.",
    "note": null
  },
  {
    "num": 82,
    "time": "00:05:11,259 --> 00:05:13,899",
    "arabic": "مَاذَا كُنَّا سَنَفْعَلُ لَوْ لَمْ يَغْلِبْكِ الْآلِيُّ؟",
    "segs": null,
    "full_uz": "Agar avtomat panjang bo'lmaganida nima qilardik?",
    "note": null
  },
  {
    "num": 83,
    "time": "00:05:13,899 --> 00:05:16,100",
    "arabic": "وَسُلَّمُكِ الرَّائِعُ أَيْضًا",
    "segs": null,
    "full_uz": "Va sening ajoyib narvoning ham.",
    "note": null
  },
  {
    "num": 84,
    "time": "00:05:16,100 --> 00:05:18,100",
    "arabic": "إِذًا خُذِيهَا، إِنَّهَا هَدِيَّةٌ",
    "segs": null,
    "full_uz": "Unda buni ol, bu sovg'a.",
    "note": null
  },
  {
    "num": 85,
    "time": "00:05:18,100 --> 00:05:20,100",
    "arabic": "شُكْرًا، رَائِعٌ",
    "segs": null,
    "full_uz": "Rahmat, ajoyib.",
    "note": null
  },
  {
    "num": 86,
    "time": "00:05:20,100 --> 00:05:22,100",
    "arabic": "وَأَنَا سَأُعْطِيكِ هَذَا",
    "segs": null,
    "full_uz": "Men esa senga buni beraman.",
    "note": null
  },
  {
    "num": 87,
    "time": "00:05:22,100 --> 00:05:31,400",
    "arabic": "هَاهَا! إِنَّهَا رَائِعَةٌ حَقًّا!",
    "segs": null,
    "full_uz": "Haha! U rostdan ham ajoyib!",
    "note": null
  },
  {
    "num": 88,
    "time": "00:05:31,400 --> 00:05:37,000",
    "arabic": "سِيمْكَا، هَلْ أَنْتِ هُنَا؟ آهْ، مَا هَذَا الشَّيْءُ؟ أَلَا يَبْدُو جَمِيلًا؟ أَلَا تَظُنِّينَ ذَلِكَ؟",
    "segs": [
      { "ar": "سِيمْكَا، هَلْ أَنْتِ هُنَا؟", "uz": "Simka, shu yerdamisan?" },
      { "ar": "آهْ، مَا هَذَا الشَّيْءُ؟", "uz": "voy, bu narsa nima?" },
      { "ar": "أَلَا يَبْدُو جَمِيلًا؟ أَلَا تَظُنِّينَ ذَلِكَ؟", "uz": "chiroyli ko'rinmayaptimi? shunday deb o'ylamaysanmi?" }
    ],
    "full_uz": "Simka, shu yerdamisan? Voy, bu narsa nima? Chiroyli ko'rinmayaptimi? Shunday deb o'ylamaysanmi?",
    "note": null
  },
  {
    "num": 89,
    "time": "00:05:37,000 --> 00:05:46,199",
    "arabic": "تَقُولِينَ جَمِيلٌ؟ انْظُرِي إِلَى هَذَا... الْجَمَالُ!",
    "segs": [
      { "ar": "تَقُولِينَ جَمِيلٌ؟", "uz": "chiroyli deysanmi?" },
      { "ar": "انْظُرِي إِلَى هَذَا... الْجَمَالُ!", "uz": "mana bunga qara... go'zallik!" }
    ],
    "full_uz": "Chiroyli deysanmi? Mana bunga qara... go'zallik!",
    "note": null
  }
];
if (typeof module !== "undefined" && module.exports) {
  module.exports = lessons;
}
