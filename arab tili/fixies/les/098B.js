const lessons = [
  {
    "num": 1,
    "time": "00:00:30,000 --> 00:00:36,000",
    "arabic": "الْحِبْرُ السِّرِّيُّ",
    "segs": null,
    "full_uz": "Sirli siyoh.",
    "note": null
  },
  {
    "num": 2,
    "time": "00:01:00,000 --> 00:01:07,260",
    "arabic": "إِلَاتُو",
    "segs": null,
    "full_uz": "Ling-ling!",
    "note": "Bu joyning arabcha matni ('إلاتو') aniq ma'no bermaydi — ehtimol pochta qutisiga xat tushishi paytidagi tovushni ifodalovchi transkripsiya xatosi yoki onomatopeyadir."
  },
  {
    "num": 3,
    "time": "00:01:07,260 --> 00:01:09,219",
    "arabic": "مَا هَذَا؟",
    "segs": null,
    "full_uz": "Bu nima?",
    "note": null
  },
  {
    "num": 4,
    "time": "00:01:09,219 --> 00:01:10,799",
    "arabic": "رِسَالَةٌ؟",
    "segs": null,
    "full_uz": "Xatmi?",
    "note": null
  },
  {
    "num": 5,
    "time": "00:01:10,799 --> 00:01:11,980",
    "arabic": "مِمَّنْ؟",
    "segs": null,
    "full_uz": "Kimdan?",
    "note": null
  },
  {
    "num": 6,
    "time": "00:01:11,980 --> 00:01:13,040",
    "arabic": "لَيْسَتْ مِنْ أَحَدٍ",
    "segs": null,
    "full_uz": "Hech kimdan emas.",
    "note": null
  },
  {
    "num": 7,
    "time": "00:01:13,040 --> 00:01:15,560",
    "arabic": "هَلْ هُوَ صَدِيقٌ جَدِيدٌ؟",
    "segs": null,
    "full_uz": "U yangi do'stmi?",
    "note": null
  },
  {
    "num": 8,
    "time": "00:01:15,560 --> 00:01:17,900",
    "arabic": "هَيَّا أَخْبِرْنَا مَاذَا كَتَبَ لَكَ؟",
    "segs": null,
    "full_uz": "Qani, ayt-chi, senga nima yozibdi?",
    "note": null
  },
  {
    "num": 9,
    "time": "00:01:17,900 --> 00:01:18,439",
    "arabic": "لَا أَعْلَمُ",
    "segs": null,
    "full_uz": "Bilmayman.",
    "note": null
  },
  {
    "num": 10,
    "time": "00:01:18,439 --> 00:01:19,740",
    "arabic": "إِذَنْ دَعْنَا نُلْقِ نَظْرَةً",
    "segs": null,
    "full_uz": "Unday bo'lsa, bir qaraylik.",
    "note": null
  },
  {
    "num": 11,
    "time": "00:01:19,740 --> 00:01:21,219",
    "arabic": "مُسْتَحِيلٌ إِنَّهُ سِرٌّ",
    "segs": null,
    "full_uz": "Mumkin emas, bu sir.",
    "note": null
  },
  {
    "num": 12,
    "time": "00:01:21,219 --> 00:01:23,519",
    "arabic": "حَتَّى عَلَى أَصْدِقَائِكَ؟",
    "segs": null,
    "full_uz": "Hatto do'stlaringdan hammi?",
    "note": null
  },
  {
    "num": 13,
    "time": "00:01:23,519 --> 00:01:26,519",
    "arabic": "هَيَّا نَحْنُ لَسْنَا صَدِيقَيْنِ عَادِيَّيْنِ",
    "segs": null,
    "full_uz": "Qani, biz oddiy ikkita do'st emasmiz.",
    "note": "صَدِيقَيْنِ عَادِيَّيْنِ — ikkilik (dual) shakl, 'ikki oddiy do'st' ma'nosini bildiradi."
  },
  {
    "num": 14,
    "time": "00:01:26,519 --> 00:01:27,799",
    "arabic": "نَحْنُ سِرِّيَّانِ أَيْضًا",
    "segs": null,
    "full_uz": "Biz ham sirdoshmiz.",
    "note": "سِرِّيَّانِ — ikkilik (dual) shakl, ikki kishi haqida ('ikkovimiz ham sirdoshmiz') gap ketganda ishlatiladi."
  },
  {
    "num": 15,
    "time": "00:01:27,799 --> 00:01:29,280",
    "arabic": "وَلَنْ تُخْبِرَا أَحَدًا؟",
    "segs": null,
    "full_uz": "Va hech kimga aytmaysizlarmi?",
    "note": "تُخْبِرَا — ikkilik (dual) fe'l shakli, ikki kishiga qaratilgan savol."
  },
  {
    "num": 16,
    "time": "00:01:29,280 --> 00:01:30,739",
    "arabic": "لَا أَحَدَ، نَعِدُكَ",
    "segs": [
      { "ar": "لَا أَحَدَ", "uz": "Hech kimga" },
      { "ar": "نَعِدُكَ", "uz": "va'da beramiz" }
    ],
    "full_uz": "Hech kimga, va'da beramiz.",
    "note": null
  },
  {
    "num": 17,
    "time": "00:01:30,739 --> 00:01:36,280",
    "arabic": "هَا، هَلْ سَتَفْتَحُ هَذِهِ الْوَرَقَةَ أَوَّلًا؟",
    "segs": null,
    "full_uz": "Ha, avval shu qog'ozni ochasanmi?",
    "note": null
  },
  {
    "num": 18,
    "time": "00:01:37,939 --> 00:01:41,939",
    "arabic": "لَا شَيْءَ هُنَا",
    "segs": null,
    "full_uz": "Bu yerda hech narsa yo'q.",
    "note": null
  },
  {
    "num": 19,
    "time": "00:01:41,939 --> 00:01:44,320",
    "arabic": "هَلْ هَذِهِ مَسْحَةٌ؟",
    "segs": null,
    "full_uz": "Bu dog'mi?",
    "note": null
  },
  {
    "num": 20,
    "time": "00:01:44,320 --> 00:01:46,500",
    "arabic": "رُبَّمَا لَا يُرِيدُ أَنْ يَكْتُبَ لَكَ شَيْئًا",
    "segs": null,
    "full_uz": "Balki senga hech narsa yozmoqchi emasdir.",
    "note": null
  },
  {
    "num": 21,
    "time": "00:01:46,500 --> 00:01:48,579",
    "arabic": "إِذَنْ لِمَاذَا وَضَعَ الرِّسَالَةَ؟",
    "segs": null,
    "full_uz": "Unda nega xat solib qo'yibdi?",
    "note": null
  },
  {
    "num": 22,
    "time": "00:01:48,579 --> 00:01:53,319",
    "arabic": "انْتَظِرْ لَحْظَةً، قَدْ يَكُونُ كَتَبَ تِلْكَ الرِّسَالَةَ بِاسْتِعْمَالِ الْحِبْرِ السِّرِّيِّ",
    "segs": [
      { "ar": "انْتَظِرْ لَحْظَةً", "uz": "Bir daqiqa kut" },
      { "ar": "قَدْ يَكُونُ كَتَبَ تِلْكَ الرِّسَالَةَ بِاسْتِعْمَالِ الْحِبْرِ السِّرِّيِّ", "uz": "balki u xatni sirli siyoh bilan yozgandir" }
    ],
    "full_uz": "Bir daqiqa kut, balki u xatni sirli siyoh bilan yozgandir.",
    "note": null
  },
  {
    "num": 23,
    "time": "00:01:53,319 --> 00:01:54,280",
    "arabic": "وَمَا الْحِبْرُ السِّرِّيُّ؟",
    "segs": null,
    "full_uz": "Sirli siyoh nima o'zi?",
    "note": null
  },
  {
    "num": 24,
    "time": "00:01:54,280 --> 00:02:00,760",
    "arabic": "مَثَلًا أَرَادَتْ فَتَاةٌ أَنْ تَكْتُبَ رِسَالَةً سِرِّيَّةً إِلَى أَخِيهَا",
    "segs": null,
    "full_uz": "Masalan, bir qiz akasiga sirli xat yozmoqchi bo'ldi,",
    "note": null
  },
  {
    "num": 25,
    "time": "00:02:00,760 --> 00:02:06,340",
    "arabic": "وَلِذَلِكَ كَتَبَتْهَا بِسَائِلٍ خَاصٍّ يُسَمَّى الْحِبْرَ السِّرِّيَّ أَوِ الْحِبْرَ الْآمِيَّ",
    "segs": [
      { "ar": "وَلِذَلِكَ كَتَبَتْهَا بِسَائِلٍ خَاصٍّ", "uz": "shuning uchun uni maxsus suyuqlik bilan yozdi" },
      { "ar": "يُسَمَّى الْحِبْرَ السِّرِّيَّ أَوِ الْحِبْرَ الْآمِيَّ", "uz": "u 'sirli siyoh' yoki 'ko'rinmas siyoh' deb ataladi" }
    ],
    "full_uz": "Shuning uchun uni maxsus suyuqlik bilan yozdi, u 'sirli siyoh' yoki 'ko'rinmas siyoh' deb ataladi.",
    "note": null
  },
  {
    "num": 26,
    "time": "00:02:06,340 --> 00:02:13,180",
    "arabic": "يُمْكِنُكَ صُنْعُ الْحِبْرِ السِّرِّيِّ بِنَفْسِكَ عَنْ طَرِيقِ خَلْطِ عَصِيرِ اللَّيْمُونِ أَوِ الْحَلِيبِ أَوِ الصُّودَا مَعَ الْمَاءِ",
    "segs": null,
    "full_uz": "Limon sharbati, sut yoki soda bilan suvni aralashtirib, sirli siyohni o'zing tayyorlashing mumkin.",
    "note": null
  },
  {
    "num": 27,
    "time": "00:02:13,180 --> 00:02:17,460",
    "arabic": "ثُمَّ اغْمِسْ عَصًا أَوْ فُرْشَاةً فِيهِ وَاكْتُبْ عَلَى صَفْحَةٍ مِنَ الْوَرَقِ الْعَادِيِّ",
    "segs": [
      { "ar": "ثُمَّ اغْمِسْ عَصًا أَوْ فُرْشَاةً فِيهِ", "uz": "keyin unga tayoqcha yoki cho'tkani botir" },
      { "ar": "وَاكْتُبْ عَلَى صَفْحَةٍ مِنَ الْوَرَقِ الْعَادِيِّ", "uz": "va oddiy qog'oz varag'iga yoz" }
    ],
    "full_uz": "Keyin unga tayoqcha yoki cho'tkani botir, va oddiy qog'oz varag'iga yoz.",
    "note": null
  },
  {
    "num": 28,
    "time": "00:02:17,460 --> 00:02:18,320",
    "arabic": "هَكَذَا",
    "segs": null,
    "full_uz": "Mana shunday.",
    "note": null
  },
  {
    "num": 29,
    "time": "00:02:18,320 --> 00:02:20,120",
    "arabic": "أَلَا يُمْكِنُكَ رُؤْيَتَهُ؟",
    "segs": null,
    "full_uz": "Uni ko'rolmayapsanmi?",
    "note": null
  },
  {
    "num": 30,
    "time": "00:02:20,120 --> 00:02:21,820",
    "arabic": "لِجَعْلِ الْحِبْرِ السِّرِّيِّ مَرْئِيًّا",
    "segs": null,
    "full_uz": "Sirli siyohni ko'rinadigan qilish uchun,",
    "note": null
  },
  {
    "num": 31,
    "time": "00:02:21,820 --> 00:02:24,340",
    "arabic": "عَلَيْكَ أَنْ تُسَخِّنَ الْوَرَقَةَ بِشَيْءٍ كَالْمِكْوَاةِ",
    "segs": null,
    "full_uz": "qog'ozni dazmol kabi narsa bilan isitishing kerak.",
    "note": null
  },
  {
    "num": 32,
    "time": "00:02:24,340 --> 00:02:26,180",
    "arabic": "وَلَكِنْ هَذَا سِرٌّ",
    "segs": null,
    "full_uz": "Lekin bu sir.",
    "note": null
  },
  {
    "num": 33,
    "time": "00:02:26,180 --> 00:02:30,860",
    "arabic": "قَدْ تَكُونِينَ مُحِقَّةً يَا سِيمْكَا",
    "segs": null,
    "full_uz": "Sen haq bo'lishing mumkin, Simka.",
    "note": null
  },
  {
    "num": 34,
    "time": "00:02:30,860 --> 00:02:33,140",
    "arabic": "وَلَكِنْ لَا أَسْتَطِيعُ اسْتِعْمَالَ الْمِكْوَاةِ",
    "segs": null,
    "full_uz": "Lekin men dazmoldan foydalana olmayman.",
    "note": null
  },
  {
    "num": 35,
    "time": "00:02:33,140 --> 00:02:34,600",
    "arabic": "وَلَكِنْ أُمُّكَ تَسْتَطِيعُ",
    "segs": null,
    "full_uz": "Lekin onang esa foydalana oladi,",
    "note": null
  },
  {
    "num": 36,
    "time": "00:02:34,600 --> 00:02:36,100",
    "arabic": "وَهِيَ تَسْتَعْمِلُهَا الْآنَ",
    "segs": null,
    "full_uz": "va u hozir undan foydalanyapti.",
    "note": null
  },
  {
    "num": 37,
    "time": "00:02:36,100 --> 00:02:38,600",
    "arabic": "حَقًّا؟ هَذَا لَا يُغَيِّرُ شَيْئًا",
    "segs": null,
    "full_uz": "Rostdanmi? Bu hech narsani o'zgartirmaydi.",
    "note": null
  },
  {
    "num": 38,
    "time": "00:02:38,600 --> 00:02:39,159",
    "arabic": "انْتَظِرْ",
    "segs": null,
    "full_uz": "Kut.",
    "note": null
  },
  {
    "num": 39,
    "time": "00:02:39,159 --> 00:02:41,260",
    "arabic": "إِنْ كَانَتْ هَذِهِ رِسَالَةً سِرِّيَّةً",
    "segs": null,
    "full_uz": "Agar bu sirli xat bo'lsa,",
    "note": null
  },
  {
    "num": 40,
    "time": "00:02:41,260 --> 00:02:43,300",
    "arabic": "لَا يُسْمَحُ لِأَحَدٍ بِرُؤْيَتِهَا",
    "segs": null,
    "full_uz": "hech kimga uni ko'rishga ruxsat yo'q,",
    "note": null
  },
  {
    "num": 41,
    "time": "00:02:43,300 --> 00:02:44,500",
    "arabic": "حَتَّى أُمِّكَ",
    "segs": null,
    "full_uz": "hatto onangga ham.",
    "note": null
  },
  {
    "num": 42,
    "time": "00:02:44,500 --> 00:02:46,520",
    "arabic": "إِذَنْ مَاذَا أَفْعَلُ؟",
    "segs": null,
    "full_uz": "Unda nima qilaman?",
    "note": null
  },
  {
    "num": 43,
    "time": "00:02:46,520 --> 00:02:47,880",
    "arabic": "آهْ، لَدَيَّ فِكْرَةٌ",
    "segs": null,
    "full_uz": "Oh, menda bir fikr bor.",
    "note": null
  },
  {
    "num": 44,
    "time": "00:02:56,120 --> 00:02:59,200",
    "arabic": "أُمِّي، هَلْ يُمْكِنُكِ أَنْ تَكْوِي لِي قَمِيصِي؟",
    "segs": null,
    "full_uz": "Onajon, ko'ylagimni dazmollab bera olasizmi?",
    "note": null
  },
  {
    "num": 45,
    "time": "00:02:59,439 --> 00:03:00,120",
    "arabic": "مَا خَطْبُهُ؟",
    "segs": null,
    "full_uz": "Unga nima bo'ldi?",
    "note": null
  },
  {
    "num": 46,
    "time": "00:03:00,120 --> 00:03:01,280",
    "arabic": "لَا شَيْءَ يُذْكَرُ",
    "segs": null,
    "full_uz": "Aytarli hech narsa yo'q,",
    "note": null
  },
  {
    "num": 47,
    "time": "00:03:01,439 --> 00:03:03,480",
    "arabic": "جَيْبُهُ مُتَجَعِّدٌ لَيْسَ إِلَّا",
    "segs": null,
    "full_uz": "faqat cho'ntagi burishib qolgan, xolos.",
    "note": null
  },
  {
    "num": 48,
    "time": "00:03:03,640 --> 00:03:05,200",
    "arabic": "آهْ، سَأَكْوِيهِ",
    "segs": null,
    "full_uz": "Oh, dazmollab beraman.",
    "note": null
  },
  {
    "num": 49,
    "time": "00:03:06,360 --> 00:03:09,040",
    "arabic": "مُنْذُ مَتَى بَدَأْتَ تَهْتَمُّ بِأَشْيَاءَ كَهَذِهِ؟",
    "segs": null,
    "full_uz": "Qachondan beri shunday narsalarga qiziqa boshlading?",
    "note": null
  },
  {
    "num": 50,
    "time": "00:03:10,760 --> 00:03:11,480",
    "arabic": "انْتَهَيْتُ",
    "segs": null,
    "full_uz": "Tugatdim.",
    "note": null
  },
  {
    "num": 51,
    "time": "00:03:11,600 --> 00:03:12,800",
    "arabic": "شُكْرًا يَا أُمِّي",
    "segs": null,
    "full_uz": "Rahmat, onajon.",
    "note": null
  },
  {
    "num": 52,
    "time": "00:03:15,160 --> 00:03:16,120",
    "arabic": "تَمَّ الْأَمْرُ",
    "segs": null,
    "full_uz": "Ish bitdi.",
    "note": null
  },
  {
    "num": 53,
    "time": "00:03:16,520 --> 00:03:19,300",
    "arabic": "مَاذَا؟ مَا الْمَكْتُوبُ؟",
    "segs": null,
    "full_uz": "Nima? Nima yozilgan?",
    "note": null
  },
  {
    "num": 54,
    "time": "00:03:19,300 --> 00:03:23,300",
    "arabic": "اكْتَشَفْتُ السِّرَّ، هَلْ تُصَادِقُنِي؟",
    "segs": [
      { "ar": "اكْتَشَفْتُ السِّرَّ", "uz": "Sirni bilib oldim" },
      { "ar": "هَلْ تُصَادِقُنِي؟", "uz": "men bilan do'st bo'lasanmi?" }
    ],
    "full_uz": "Sirni bilib oldim: 'Men bilan do'st bo'lasanmi?'",
    "note": null
  },
  {
    "num": 55,
    "time": "00:03:24,560 --> 00:03:27,300",
    "arabic": "كِيفِينْ يَخْتَبِرُ ذَكَاءَكَ، أَلَيْسَ كَذَلِكَ؟",
    "segs": null,
    "full_uz": "Kevin aqlingni sinamoqda, shunday emasmi?",
    "note": null
  },
  {
    "num": 56,
    "time": "00:03:29,500 --> 00:03:31,640",
    "arabic": "هُوَ كَذَلِكَ، هَلْ سَتَرُدُّ؟",
    "segs": [
      { "ar": "هُوَ كَذَلِكَ", "uz": "Shunday, ha" },
      { "ar": "هَلْ سَتَرُدُّ؟", "uz": "javob berasanmi?" }
    ],
    "full_uz": "Shunday, ha. Javob berasanmi?",
    "note": null
  },
  {
    "num": 57,
    "time": "00:03:31,640 --> 00:03:35,680",
    "arabic": "أَنَا لَا أَعْلَمُ، إِنَّهُ مِنَ الْمُتَفَوِّقِينَ",
    "segs": [
      { "ar": "أَنَا لَا أَعْلَمُ", "uz": "Bilmayman" },
      { "ar": "إِنَّهُ مِنَ الْمُتَفَوِّقِينَ", "uz": "u a'lochilardan-ku" }
    ],
    "full_uz": "Bilmayman, u a'lochilardan-ku.",
    "note": null
  },
  {
    "num": 58,
    "time": "00:03:35,680 --> 00:03:38,620",
    "arabic": "أَنْتَ خَائِفٌ، أَنْتَ خَائِفٌ مِنَ الذَّكِيِّ",
    "segs": null,
    "full_uz": "Sen qo'rqyapsan, aqlli boladan qo'rqyapsan.",
    "note": null
  },
  {
    "num": 59,
    "time": "00:03:38,620 --> 00:03:40,740",
    "arabic": "يَا لَكَ مِنْ نُولِيكْ، لَا تَسْخَرْ",
    "segs": null,
    "full_uz": "Ha, sen ham Noliksan-a, masxara qilma.",
    "note": null
  },
  {
    "num": 60,
    "time": "00:03:40,740 --> 00:03:43,060",
    "arabic": "قُلْ لِي، هَلْ سَتَرُدُّ عَلَيْهِ؟",
    "segs": [
      { "ar": "قُلْ لِي", "uz": "Ayt-chi" },
      { "ar": "هَلْ سَتَرُدُّ عَلَيْهِ؟", "uz": "unga javob berasanmi?" }
    ],
    "full_uz": "Ayt-chi, unga javob berasanmi?",
    "note": null
  },
  {
    "num": 61,
    "time": "00:03:43,060 --> 00:03:43,920",
    "arabic": "هَلْ أَرُدُّ؟",
    "segs": null,
    "full_uz": "Javob beraymi?",
    "note": null
  },
  {
    "num": 62,
    "time": "00:03:43,920 --> 00:03:44,740",
    "arabic": "رُدَّ عَلَيْهِ",
    "segs": null,
    "full_uz": "Unga javob ber.",
    "note": null
  },
  {
    "num": 63,
    "time": "00:03:44,740 --> 00:03:46,700",
    "arabic": "أَخَافُ أَنْ يَقْرَأَهَا أَحَدٌ",
    "segs": null,
    "full_uz": "Kimdir uni o'qib qo'yishidan qo'rqaman.",
    "note": null
  },
  {
    "num": 64,
    "time": "00:03:46,700 --> 00:03:49,620",
    "arabic": "لِمَاذَا لَا تَكْتُبُ بِاسْتِعْمَالِ حِبْرٍ سِرِّيٍّ؟",
    "segs": null,
    "full_uz": "Nega sirli siyoh bilan yozmaysan?",
    "note": null
  },
  {
    "num": 65,
    "time": "00:03:49,620 --> 00:03:50,060",
    "arabic": "مِثْلَهُ؟",
    "segs": null,
    "full_uz": "Uningkidek?",
    "note": null
  },
  {
    "num": 66,
    "time": "00:03:50,060 --> 00:03:51,460",
    "arabic": "أَجَلْ، أَحْضِرْ لَيْمُونَةً",
    "segs": null,
    "full_uz": "Ha, limon olib kel.",
    "note": null
  },
  {
    "num": 67,
    "time": "00:03:51,460 --> 00:03:59,780",
    "arabic": "فِي هَذِهِ الْأَيَّامِ لَيْسَ مِنَ الشَّائِعِ بَيْنَ النَّاسِ كِتَابَةُ الرَّسَائِلِ بِخَطِّ الْيَدِ",
    "segs": null,
    "full_uz": "Hozirgi kunlarda odamlar orasida xatlarni qo'lda yozish odat emas,",
    "note": null
  },
  {
    "num": 68,
    "time": "00:03:59,780 --> 00:04:01,620",
    "arabic": "وَإِرْسَالُهَا بِالْبَرِيدِ الْعَادِيِّ",
    "segs": null,
    "full_uz": "va ularni oddiy pochta orqali jo'natish ham.",
    "note": null
  },
  {
    "num": 69,
    "time": "00:04:01,620 --> 00:04:04,800",
    "arabic": "فَالْيَوْمَ يَتَرَاسَلُ النَّاسُ عَنْ طَرِيقِ الشَّابَكَةِ",
    "segs": null,
    "full_uz": "Bugungi kunda odamlar internet orqali xat-xabar almashishadi,",
    "note": null
  },
  {
    "num": 70,
    "time": "00:04:04,800 --> 00:04:07,660",
    "arabic": "وَلَكِنْ حَتَّى الرَّسَائِلَ الْإِلِكْتْرُونِيَّةَ",
    "segs": null,
    "full_uz": "lekin elektron xatlar ham,",
    "note": null
  },
  {
    "num": 71,
    "time": "00:04:07,660 --> 00:04:11,400",
    "arabic": "يَجِبُ أَنْ تُكْتَبَ بِقَوَاعِدِ التَّهْذِيبِ الْبَسِيطَةِ نَفْسِهَا",
    "segs": null,
    "full_uz": "xuddi shu sodda odob-axloq qoidalariga rioya qilib yozilishi kerak,",
    "note": null
  },
  {
    "num": 72,
    "time": "00:04:11,400 --> 00:04:14,420",
    "arabic": "الْمُسْتَعْمَلَةِ فِي الرَّسَائِلِ الْمَكْتُوبَةِ بِخَطِّ الْيَدِ",
    "segs": null,
    "full_uz": "qo'lda yozilgan xatlarda qo'llaniladigan qoidalarga.",
    "note": null
  },
  {
    "num": 73,
    "time": "00:04:14,419 --> 00:04:20,620",
    "arabic": "مَثَلًا يَجِبُ أَنْ تَبْدَأَ رِسَالَتَكَ بِالتَّحِيَّةِ وَتُنْهِيَهَا بِبَعْضِ الْكَلِمَاتِ الرَّقِيقَةِ",
    "segs": [
      { "ar": "مَثَلًا يَجِبُ أَنْ تَبْدَأَ رِسَالَتَكَ بِالتَّحِيَّةِ", "uz": "masalan, xatingni salomlashish bilan boshlashing kerak" },
      { "ar": "وَتُنْهِيَهَا بِبَعْضِ الْكَلِمَاتِ الرَّقِيقَةِ", "uz": "va ba'zi mehribon so'zlar bilan yakunlashing kerak" }
    ],
    "full_uz": "Masalan, xatingni salomlashish bilan boshlashing va ba'zi mehribon so'zlar bilan yakunlashing kerak,",
    "note": null
  },
  {
    "num": 74,
    "time": "00:04:20,620 --> 00:04:25,819",
    "arabic": "بِشَيْءٍ مِثْلَ الصَّدِيقُ الْمُخْلِصُ أَوْ فِي أَمَانِ اللَّهِ أَوْ أَرَاكَ قَرِيبًا",
    "segs": null,
    "full_uz": "masalan, 'sadoqatli do'sting' yoki 'Xudo omon qilsin' yoki 'ko'rishguncha' kabi.",
    "note": null
  },
  {
    "num": 75,
    "time": "00:04:25,819 --> 00:04:29,439",
    "arabic": "وَقَبْلَ إِرْسَالِ رِسَالَتِكَ مِنَ الْأَفْضَلِ قِرَاءَتُهَا ثَانِيَةً",
    "segs": null,
    "full_uz": "Xatingni yuborishdan oldin uni yana bir bor o'qib chiqishing yaxshiroq,",
    "note": null
  },
  {
    "num": 76,
    "time": "00:04:29,439 --> 00:04:32,360",
    "arabic": "لِتَتَحَقَّقَ أَنَّهُ لَيْسَ فِيهَا أَيُّ خَطَأٍ",
    "segs": null,
    "full_uz": "unda hech qanday xato yo'qligiga ishonch hosil qilish uchun.",
    "note": null
  },
  {
    "num": 77,
    "time": "00:04:32,360 --> 00:04:33,819",
    "arabic": "وَهُنَاكَ شَيْءٌ آخَرُ",
    "segs": null,
    "full_uz": "Yana bir narsa bor.",
    "note": null
  },
  {
    "num": 78,
    "time": "00:04:33,819 --> 00:04:39,060",
    "arabic": "إِنْ تَلَقَّيْتَ رِسَالَةً مِنْ شَخْصٍ مَا فَلَا تَسْتَغْرِقْ وَقْتًا طَوِيلًا لِلرَّدِّ عَلَيْهَا",
    "segs": [
      { "ar": "إِنْ تَلَقَّيْتَ رِسَالَةً مِنْ شَخْصٍ مَا", "uz": "agar kimdandir xat olsang" },
      { "ar": "فَلَا تَسْتَغْرِقْ وَقْتًا طَوِيلًا لِلرَّدِّ عَلَيْهَا", "uz": "javob berish uchun uzoq vaqt sarflama" }
    ],
    "full_uz": "Agar kimdandir xat olsang, javob berish uchun uzoq vaqt sarflama,",
    "note": null
  },
  {
    "num": 79,
    "time": "00:04:39,060 --> 00:04:41,379",
    "arabic": "لِأَنَّهُ يَظُنُّ أَنَّكَ نَسِيتَ أَمْرَهُ",
    "segs": null,
    "full_uz": "chunki u seni o'zini unutib qo'yding deb o'ylashi mumkin,",
    "note": null
  },
  {
    "num": 80,
    "time": "00:04:41,379 --> 00:04:43,740",
    "arabic": "وَمِنَ الْمُمْكِنِ أَنْ تُؤْذِيَ شُعُورَهُ",
    "segs": null,
    "full_uz": "va bu uning ko'nglini og'ritishi mumkin.",
    "note": null
  },
  {
    "num": 81,
    "time": "00:04:43,740 --> 00:04:51,400",
    "arabic": "هَيَّا اكْتُبْ",
    "segs": null,
    "full_uz": "Qani, yoz.",
    "note": null
  },
  {
    "num": 82,
    "time": "00:04:51,400 --> 00:04:53,400",
    "arabic": "مَاذَا أَكْتُبُ؟",
    "segs": null,
    "full_uz": "Nima yozaman?",
    "note": null
  },
  {
    "num": 83,
    "time": "00:04:53,400 --> 00:04:55,280",
    "arabic": "هَيَّا أَخْبِرْهُ الْحَقِيقَةَ",
    "segs": null,
    "full_uz": "Qani, unga haqiqatni ayt.",
    "note": null
  },
  {
    "num": 84,
    "time": "00:04:55,280 --> 00:04:56,259",
    "arabic": "اكْتُبْ هَذَا",
    "segs": null,
    "full_uz": "Buni yoz.",
    "note": null
  },
  {
    "num": 85,
    "time": "00:04:56,259 --> 00:04:59,579",
    "arabic": "سَامِحْنِي يَا كِيفِينْ وَلَكِنْ لَدَيَّ صَدِيقِي",
    "segs": null,
    "full_uz": "Kechir, Kevin, lekin mening do'stlarim bor.",
    "note": null
  },
  {
    "num": 86,
    "time": "00:04:59,579 --> 00:05:01,079",
    "arabic": "هُمَا صَغِيرَانِ جِدًّا",
    "segs": null,
    "full_uz": "Ikkovi ham juda kichkina.",
    "note": "صَغِيرَانِ — ikkilik (dual) sifat shakli, ikki kishi ('ikkovi ham kichkina') haqida gap ketganda ishlatiladi."
  },
  {
    "num": 87,
    "time": "00:05:01,079 --> 00:05:02,280",
    "arabic": "نُولِيكْ وَسِيمْكَا",
    "segs": null,
    "full_uz": "Nolik va Simka.",
    "note": null
  },
  {
    "num": 88,
    "time": "00:05:02,280 --> 00:05:03,560",
    "arabic": "نُولِيكْ",
    "segs": null,
    "full_uz": "Nolik!",
    "note": null
  },
  {
    "num": 89,
    "time": "00:05:03,560 --> 00:05:04,740",
    "arabic": "لَا تُعْجِبُكَ؟",
    "segs": null,
    "full_uz": "Yoqmadimi?",
    "note": null
  },
  {
    "num": 90,
    "time": "00:05:04,740 --> 00:05:06,360",
    "arabic": "لِمَ لَا تُمْلِينَ عَلَيْهِ؟",
    "segs": null,
    "full_uz": "Nega o'zing unga aytib turmaysan?",
    "note": null
  },
  {
    "num": 91,
    "time": "00:05:06,360 --> 00:05:08,340",
    "arabic": "تُومُ لَا تَسْتَمِعْ إِلَى نُولِيكْ",
    "segs": null,
    "full_uz": "Tom, Nolikni tinglama.",
    "note": null
  },
  {
    "num": 92,
    "time": "00:05:08,340 --> 00:05:11,960",
    "arabic": "اكْتُبْ إِلَى كِيفِينْ أَنَّهُ عَزِيزٌ جِدًّا عَلَيْكَ",
    "segs": null,
    "full_uz": "Kevinga u senga juda aziz ekanini yoz.",
    "note": null
  },
  {
    "num": 93,
    "time": "00:05:11,960 --> 00:05:13,600",
    "arabic": "كِيفِينْ تُشَرِّفُنِي",
    "segs": null,
    "full_uz": "Kevin, meni sharaflaydi...",
    "note": null
  },
  {
    "num": 94,
    "time": "00:05:13,600 --> 00:05:16,280",
    "arabic": "صَدَاقَتُكَ هَلْ هَذَا مَا أَكْتُبُهُ؟",
    "segs": [
      { "ar": "صَدَاقَتُكَ", "uz": "sening do'stliging" },
      { "ar": "هَلْ هَذَا مَا أَكْتُبُهُ؟", "uz": "shuni yozaymi?" }
    ],
    "full_uz": "Sening do'stliging... Shuni yozaymi?",
    "note": null
  },
  {
    "num": 95,
    "time": "00:05:16,280 --> 00:05:17,220",
    "arabic": "هَلْ هَذَا جَيِّدٌ؟",
    "segs": null,
    "full_uz": "Bu yaxshimi?",
    "note": null
  },
  {
    "num": 96,
    "time": "00:05:17,220 --> 00:05:18,460",
    "arabic": "ذَلِكَ لَطِيفٌ",
    "segs": null,
    "full_uz": "Bu yoqimli.",
    "note": null
  },
  {
    "num": 97,
    "time": "00:05:18,460 --> 00:05:19,879",
    "arabic": "يَا لَكَ مِنْ",
    "segs": null,
    "full_uz": "Sen naqadar...",
    "note": null
  },
  {
    "num": 98,
    "time": "00:05:19,879 --> 00:05:22,460",
    "arabic": "أَصْمُتْ مُمْكِنٌ؟",
    "segs": null,
    "full_uz": "Jim tursam bo'ladimi?",
    "note": null
  },
  {
    "num": 99,
    "time": "00:05:26,320 --> 00:05:28,840",
    "arabic": "طَبْ هَلْ هَذَا كُلُّ شَيْءٍ؟",
    "segs": null,
    "full_uz": "Xo'p, shu bo'ldimi?",
    "note": null
  },
  {
    "num": 100,
    "time": "00:05:28,840 --> 00:05:31,860",
    "arabic": "وَهَلْ تَحَقَّقْتَ أَنَّكَ لَمْ تَرْتَكِبْ أَيَّ خَطَأٍ؟",
    "segs": null,
    "full_uz": "Va hech qanday xato qilmaganingga ishonch hosil qildingmi?",
    "note": null
  },
  {
    "num": 101,
    "time": "00:05:31,860 --> 00:05:33,960",
    "arabic": "لَا سَأَتَحَقَّقُ",
    "segs": [
      { "ar": "لَا", "uz": "Yo'q" },
      { "ar": "سَأَتَحَقَّقُ", "uz": "tekshiraman" }
    ],
    "full_uz": "Yo'q, tekshiraman.",
    "note": null
  },
  {
    "num": 102,
    "time": "00:05:33,960 --> 00:05:36,460",
    "arabic": "كُلُّ الْكَلِمَاتِ اخْتَفَتْ",
    "segs": null,
    "full_uz": "Barcha so'zlar g'oyib bo'ldi.",
    "note": null
  },
  {
    "num": 103,
    "time": "00:05:37,180 --> 00:05:40,640",
    "arabic": "حَسَنًا إِنْ كَانَ هُنَاكَ شَيْءٌ فَكِيفِينْ سَيَكْتَشِفُهُ",
    "segs": null,
    "full_uz": "Xo'p, agar biror narsa bo'lsa, Kevin uni topib oladi.",
    "note": null
  }
];
if (typeof module !== "undefined" && module.exports) {
  module.exports = lessons;
}
