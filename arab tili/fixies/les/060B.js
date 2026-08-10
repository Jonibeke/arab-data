const lessons = [
  {
    "num": 1,
    "time": "00:00:30,320 --> 00:00:35,320",
    "arabic": "الطَّرَفُ الِاصْطِنَاعِيُّ",
    "segs": null,
    "full_uz": "Sun'iy a'zo (protez).",
    "note": null
  },
  {
    "num": 2,
    "time": "00:00:35,399 --> 00:00:39,320",
    "arabic": "سِيمْكَا تَعَالَيْ انْظُرْ مَاذَا وَجَدْتُ",
    "segs": null,
    "full_uz": "Simka, kel, qara, nima topdim.",
    "note": null
  },
  {
    "num": 3,
    "time": "00:00:39,320 --> 00:00:40,159",
    "arabic": "إِنَّهُ دُبٌّ",
    "segs": null,
    "full_uz": "Bu ayiqcha.",
    "note": null
  },
  {
    "num": 4,
    "time": "00:00:40,159 --> 00:00:43,579",
    "arabic": "عَنْ أَيِّ دُبٍّ تَتَحَدَّثُ؟",
    "segs": null,
    "full_uz": "Qanaqa ayiqcha haqida gapiryapsan?",
    "note": null
  },
  {
    "num": 5,
    "time": "00:00:43,579 --> 00:00:44,640",
    "arabic": "نَسِيتِهِ؟",
    "segs": null,
    "full_uz": "Uni unutdingmi?",
    "note": null
  },
  {
    "num": 6,
    "time": "00:00:44,640 --> 00:00:46,560",
    "arabic": "الدُّبُّ الَّذِي أَخْبَرَنَا عَنْهُ تُومْ",
    "segs": null,
    "full_uz": "Tom bizga aytib bergan ayiqcha,",
    "note": null
  },
  {
    "num": 7,
    "time": "00:00:46,560 --> 00:00:49,000",
    "arabic": "كَانَ صَدِيقَهُ الْمُفَضَّلَ فِي الْعَالَمِ",
    "segs": null,
    "full_uz": "u dunyodagi eng sevimli do'sti edi,",
    "note": null
  },
  {
    "num": 8,
    "time": "00:00:49,000 --> 00:00:51,480",
    "arabic": "حَتَّى أَصْبَحَ صَدِيقًا لِي وَلَكِ",
    "segs": null,
    "full_uz": "toki u men va senga do'st bo'lguncha.",
    "note": null
  },
  {
    "num": 9,
    "time": "00:00:55,820 --> 00:01:00,539",
    "arabic": "آهْ لِنُحَاوِلْ تَشْغِيلَهُ",
    "segs": null,
    "full_uz": "Voy, uni ishga tushirishga urinib ko'raylik.",
    "note": null
  },
  {
    "num": 10,
    "time": "00:01:00,539 --> 00:01:10,960",
    "arabic": "هَيَّا هَيَّا هَيَّا لَقَدْ وَقَفَتْ",
    "segs": null,
    "full_uz": "Qani, qani, qani, tik turdi.",
    "note": null
  },
  {
    "num": 11,
    "time": "00:01:10,960 --> 00:01:13,400",
    "arabic": "وَالْآنَ أَمْشِي هَيَّا يَا دُبُّ",
    "segs": null,
    "full_uz": "Endi yur, qani, ayiqcha.",
    "note": null
  },
  {
    "num": 12,
    "time": "00:01:13,400 --> 00:01:19,420",
    "arabic": "لَا يَا إِلَهِي الدُّبُّ الْمِسْكِينُ اقْتُلِعَتْ قَدَمُهُ وَلَمْ يَكْتَرِثُوا",
    "segs": [
      { "ar": "لَا يَا إِلَهِي الدُّبُّ الْمِسْكِينُ", "uz": "voy xudoyim, bechora ayiqcha" },
      { "ar": "اقْتُلِعَتْ قَدَمُهُ وَلَمْ يَكْتَرِثُوا", "uz": "oyog'i sug'urib olindi va hech kim e'tibor bermadi" }
    ],
    "full_uz": "Voy xudoyim, bechora ayiqcha, oyog'i sug'urib olindi va hech kim e'tibor bermadi.",
    "note": null
  },
  {
    "num": 13,
    "time": "00:01:19,420 --> 00:01:23,240",
    "arabic": "لَمْ تُقْتَلَعْ قَدَمُهُ يَا سِيمْكَا بَلْ كَانَتْ مَكْسُورَةً",
    "segs": [
      { "ar": "لَمْ تُقْتَلَعْ قَدَمُهُ يَا سِيمْكَا", "uz": "oyog'i sug'urib olinmagan, Simka" },
      { "ar": "بَلْ كَانَتْ مَكْسُورَةً", "uz": "balki sinib qolgan" }
    ],
    "full_uz": "Oyog'i sug'urib olinmagan, Simka, balki sinib qolgan.",
    "note": null
  },
  {
    "num": 14,
    "time": "00:01:23,239 --> 00:01:26,479",
    "arabic": "هَذَا وَاضِحٌ إِنَّهُ كَسْرٌ مُرَكَّبٌ",
    "segs": null,
    "full_uz": "Bu aniq, bu murakkab sinish ekan.",
    "note": null
  },
  {
    "num": 15,
    "time": "00:01:26,479 --> 00:01:29,179",
    "arabic": "إِذَنْ لِمَاذَا لَا نُصْلِحُهُ؟",
    "segs": null,
    "full_uz": "Unda nega uni tuzatmaymiz?",
    "note": null
  },
  {
    "num": 16,
    "time": "00:01:29,179 --> 00:01:31,399",
    "arabic": "سَيَكُونُ تُومْ سَعِيدًا جِدًّا",
    "segs": null,
    "full_uz": "Tom juda xursand bo'ladi.",
    "note": null
  },
  {
    "num": 17,
    "time": "00:01:31,399 --> 00:01:33,459",
    "arabic": "اهْدَئِي لَيْسَ مِنَ السَّهْلِ إِصْلَاحُهُ",
    "segs": [
      { "ar": "اهْدَئِي", "uz": "tinchlan" },
      { "ar": "لَيْسَ مِنَ السَّهْلِ إِصْلَاحُهُ", "uz": "uni tuzatish oson emas" }
    ],
    "full_uz": "Tinchlan, uni tuzatish oson emas.",
    "note": null
  },
  {
    "num": 18,
    "time": "00:01:33,459 --> 00:01:36,099",
    "arabic": "نَحْتَاجُ إِلَى طَرَفٍ اصْطِنَاعِيٍّ",
    "segs": null,
    "full_uz": "Bizga sun'iy oyoq kerak.",
    "note": null
  },
  {
    "num": 19,
    "time": "00:01:36,099 --> 00:01:42,379",
    "arabic": "إِنَّ جِسْمَ الْإِنْسَانِ مَبْنِيٌّ حَوْلَ هَيْكَلٍ مِنَ الْعِظَامِ وَالْمَفَاصِلِ",
    "segs": null,
    "full_uz": "Inson tanasi suyaklar va bo'g'imlardan iborat skelet atrofida quriladi,",
    "note": null
  },
  {
    "num": 20,
    "time": "00:01:42,379 --> 00:01:44,239",
    "arabic": "وَإِنْ كَسَرَ أَحَدُ الْعِظَامِ",
    "segs": null,
    "full_uz": "va agar suyaklardan biri sinsa,",
    "note": null
  },
  {
    "num": 21,
    "time": "00:01:44,239 --> 00:01:48,259",
    "arabic": "يَلْتَئِمُ بِنَفْسِهِ عَادَةً وَيَنْمُو الْعَظْمُ الْمَكْسُورُ مُجَدَّدًا",
    "segs": null,
    "full_uz": "odatda o'z-o'zidan bitib ketadi, va singan suyak yana o'sadi,",
    "note": null
  },
  {
    "num": 22,
    "time": "00:01:48,259 --> 00:01:49,979",
    "arabic": "وَيَعُودُ إِلَى وَضْعِهِ الطَّبِيعِيِّ",
    "segs": null,
    "full_uz": "va o'z tabiiy holatiga qaytadi.",
    "note": null
  },
  {
    "num": 23,
    "time": "00:01:49,980 --> 00:01:55,980",
    "arabic": "لَكِنْ أَحْيَانًا تُكَسَّرُ الْعِظَامُ كَسْرًا سَيِّئًا جِدًّا وَيُصْبِحُ مِنَ الْمُسْتَحِيلِ أَنْ تَلْتَئِمَ",
    "segs": [
      { "ar": "لَكِنْ أَحْيَانًا تُكَسَّرُ الْعِظَامُ كَسْرًا سَيِّئًا جِدًّا", "uz": "lekin ba'zida suyaklar juda yomon sinadi" },
      { "ar": "وَيُصْبِحُ مِنَ الْمُسْتَحِيلِ أَنْ تَلْتَئِمَ", "uz": "va bitib ketishi mumkin bo'lmay qoladi" }
    ],
    "full_uz": "Lekin ba'zida suyaklar juda yomon sinadi va bitib ketishi mumkin bo'lmay qoladi.",
    "note": null
  },
  {
    "num": 24,
    "time": "00:01:55,980 --> 00:02:00,460",
    "arabic": "عِنْدَهَا يَجِبُ أَنْ يُسْتَبْدَلَ بِهَا جُزْءٌ اصْطِنَاعِيٌّ يُسَمَّى الطَّرَفَ الِاصْطِنَاعِيَّ",
    "segs": null,
    "full_uz": "Shunda uni sun'iy a'zo deb ataladigan sun'iy qism bilan almashtirish kerak bo'ladi,",
    "note": null
  },
  {
    "num": 25,
    "time": "00:02:00,460 --> 00:02:03,640",
    "arabic": "وَيُمْكِنُ اسْتِبْدَالُ أَكْثَرَ مِنْ مَفْصِلٍ أَوْ عَظْمَةٍ",
    "segs": null,
    "full_uz": "va bir nechta bo'g'im yoki suyakni almashtirish mumkin,",
    "note": null
  },
  {
    "num": 26,
    "time": "00:02:03,640 --> 00:02:06,980",
    "arabic": "فَفِي إِمْكَانِنَا أَنْ نَسْتَبْدِلَ ذِرَاعًا كَامِلًا أَوْ سَاقًا",
    "segs": null,
    "full_uz": "biz butun bir qo'l yoki oyoqni ham almashtirishimiz mumkin.",
    "note": null
  },
  {
    "num": 27,
    "time": "00:02:08,680 --> 00:02:12,020",
    "arabic": "وَأَيْنَ نَجِدُ هَذَا الطَّرَفَ؟",
    "segs": null,
    "full_uz": "Bu a'zoni qayerdan topamiz?",
    "note": null
  },
  {
    "num": 28,
    "time": "00:02:12,020 --> 00:02:15,640",
    "arabic": "أَنَا وَاثِقَةٌ بِأَنَّنَا سَنَجِدُهُ عِنْدَ الْعَلَّامَةِ يُوجِينِيُوسَ",
    "segs": null,
    "full_uz": "Uni olim Yevjeniusdan topamiz deb ishonaman.",
    "note": null
  },
  {
    "num": 29,
    "time": "00:02:15,640 --> 00:02:17,580",
    "arabic": "صَحِيحٌ",
    "segs": null,
    "full_uz": "To'g'ri.",
    "note": null
  },
  {
    "num": 30,
    "time": "00:02:19,979 --> 00:02:23,619",
    "arabic": "أَفْسِحِ الطَّرِيقَ",
    "segs": null,
    "full_uz": "Yo'lga bo'shliq qol.",
    "note": null
  },
  {
    "num": 31,
    "time": "00:02:30,870 --> 00:02:37,879",
    "arabic": "مَرْحَبًا أَيُّهَا الْعَلَّامَةُ يُوجِينِيُوسُ",
    "segs": null,
    "full_uz": "Salom, olim Yevjenius.",
    "note": null
  },
  {
    "num": 32,
    "time": "00:02:36,780 --> 00:02:41,019",
    "arabic": "أَنَا مَسْرُورٌ بِرُؤْيَتِكُمَا يَا عَزِيزَيَّ كَيْفَ حَالُكُمَا؟",
    "segs": [
      { "ar": "أَنَا مَسْرُورٌ بِرُؤْيَتِكُمَا يَا عَزِيزَيَّ", "uz": "sizlarni ko'rganimdan xursandman, azizlarim" },
      { "ar": "كَيْفَ حَالُكُمَا", "uz": "qandaysizlar" }
    ],
    "full_uz": "Sizlarni ko'rganimdan xursandman, azizlarim, qandaysizlar?",
    "note": null
  },
  {
    "num": 33,
    "time": "00:02:41,019 --> 00:02:45,199",
    "arabic": "مَرْحَبًا سَيِّدِي نُرِيدُ طَرَفًا اصْطِنَاعِيًّا",
    "segs": null,
    "full_uz": "Salom, janob, bizga sun'iy a'zo kerak.",
    "note": null
  },
  {
    "num": 34,
    "time": "00:02:45,199 --> 00:02:46,939",
    "arabic": "مَاذَا؟ هَلْ أُصِيبَ أَحَدُكُمَا؟",
    "segs": null,
    "full_uz": "Nima? Birortangiz jarohat oldingizmi?",
    "note": null
  },
  {
    "num": 35,
    "time": "00:02:46,939 --> 00:02:49,560",
    "arabic": "أَهْلًا لَيْسَ نَحْنُ بَلْ كُسِرَتْ سَاقُ الدُّبِّ",
    "segs": [
      { "ar": "أَهْلًا لَيْسَ نَحْنُ", "uz": "yo'q, biz emas" },
      { "ar": "بَلْ كُسِرَتْ سَاقُ الدُّبِّ", "uz": "balki ayiqchaning oyog'i sinib qolgan" }
    ],
    "full_uz": "Yo'q, biz emas, balki ayiqchaning oyog'i sinib qolgan.",
    "note": null
  },
  {
    "num": 36,
    "time": "00:02:49,560 --> 00:02:50,520",
    "arabic": "أَيُّ دُبٍّ؟",
    "segs": null,
    "full_uz": "Qanaqa ayiqcha?",
    "note": null
  },
  {
    "num": 37,
    "time": "00:02:50,520 --> 00:02:53,099",
    "arabic": "الدُّبُّ الَّذِي كَانَ الصَّدِيقَ الْمُفَضَّلَ لِتُومْ",
    "segs": null,
    "full_uz": "Tomning eng sevimli do'sti bo'lgan ayiqcha.",
    "note": null
  },
  {
    "num": 38,
    "time": "00:02:53,099 --> 00:02:55,759",
    "arabic": "آهْ، الْآنَ فَهِمْتُ",
    "segs": null,
    "full_uz": "Voy, endi tushundim.",
    "note": null
  },
  {
    "num": 39,
    "time": "00:02:55,759 --> 00:03:01,580",
    "arabic": "الْيَوْمَ بِالْأَطْرَافِ الصِّنَاعِيَّةِ الْحَدِيثَةِ",
    "segs": null,
    "full_uz": "Bugungi zamonaviy sun'iy a'zolar bilan",
    "note": null
  },
  {
    "num": 40,
    "time": "00:03:01,580 --> 00:03:04,300",
    "arabic": "يُمْكِنُ اسْتِبْدَالُ كَثِيرٍ غَيْرَ السِّيقَانِ وَالْأَذْرُعِ",
    "segs": null,
    "full_uz": "oyoq va qo'llardan tashqari ko'p narsalarni ham almashtirish mumkin,",
    "note": null
  },
  {
    "num": 41,
    "time": "00:03:04,300 --> 00:03:08,520",
    "arabic": "مَثَلًا إِنْ فَقَدْتَ سِنًّا فَإِنَّكَ تَسْتَبْدِلُ بِهَا سِنًّا اصْطِنَاعِيًّا",
    "segs": null,
    "full_uz": "masalan, agar tishingizni yo'qotsangiz, uni sun'iy tish bilan almashtirasiz,",
    "note": null
  },
  {
    "num": 42,
    "time": "00:03:08,520 --> 00:03:10,759",
    "arabic": "وَهَذِهِ تُدْعَى عُضْوًا اصْطِنَاعِيًّا",
    "segs": null,
    "full_uz": "va bu sun'iy a'zo deb ataladi.",
    "note": null
  },
  {
    "num": 43,
    "time": "00:03:10,759 --> 00:03:13,920",
    "arabic": "وَهُنَاكَ أَوْقَاتٌ يَبْدَأُ فِيهَا الشَّخْصُ بِفُقْدَانِ بَصَرِهِ",
    "segs": null,
    "full_uz": "Ba'zida odam ko'rish qobiliyatini yo'qota boshlaydi,",
    "note": null
  },
  {
    "num": 44,
    "time": "00:03:13,920 --> 00:03:17,000",
    "arabic": "لِأَنَّ الْعَدَسَةَ فِي عَيْنِهِ تَعِبَةٌ وَلَا يُمْكِنُهَا الْعَمَلَ",
    "segs": null,
    "full_uz": "chunki ko'zidagi linza charchagan va ishlay olmaydi,",
    "note": null
  },
  {
    "num": 45,
    "time": "00:03:17,000 --> 00:03:19,819",
    "arabic": "فَيُسْتَبْدَلُ نَوْعٌ آخَرُ مِنَ الْعَدَسَاتِ",
    "segs": null,
    "full_uz": "shunda boshqa turdagi linza bilan almashtiriladi —",
    "note": null
  },
  {
    "num": 46,
    "time": "00:03:19,819 --> 00:03:22,639",
    "arabic": "عَدَسَاتٌ صِنَاعِيَّةٌ جَدِيدَةٌ وَوَاضِحَةٌ",
    "segs": null,
    "full_uz": "yangi va aniq sun'iy linzalar bilan.",
    "note": null
  },
  {
    "num": 47,
    "time": "00:03:22,639 --> 00:03:26,719",
    "arabic": "وَيُمْكِنُ اسْتِعْمَالُ الْأَعْضَاءِ الِاصْطِنَاعِيَّةِ عِنْدَمَا يُعَانُونَ ضَعْفَ السَّمْعِ",
    "segs": null,
    "full_uz": "Sun'iy a'zolarni eshitish qobiliyati zaif bo'lganlarda ham ishlatish mumkin,",
    "note": null
  },
  {
    "num": 48,
    "time": "00:03:26,719 --> 00:03:29,699",
    "arabic": "جِهَازٌ صَغِيرٌ يُوضَعُ دَاخِلَ أُذُنِ الْإِنْسَانِ",
    "segs": null,
    "full_uz": "kichkina qurilma inson qulog'i ichiga joylashtiriladi,",
    "note": null
  },
  {
    "num": 49,
    "time": "00:03:29,699 --> 00:03:31,939",
    "arabic": "لِكَيْ يَسْتَطِيعَ سَمَاعَ مَا يَجْرِي",
    "segs": null,
    "full_uz": "u atrofda nima bo'layotganini eshitishi uchun.",
    "note": null
  },
  {
    "num": 50,
    "time": "00:03:31,939 --> 00:03:33,800",
    "arabic": "هَذَا لَيْسَ كُلَّ شَيْءٍ",
    "segs": null,
    "full_uz": "Bu hammasi emas.",
    "note": null
  },
  {
    "num": 51,
    "time": "00:03:33,800 --> 00:03:36,680",
    "arabic": "فَقَدْ تَعَلَّمَ النَّاسُ كَيْفَ يُعَالِجُونَ الْقَلْبَ الْمَرِيضَ",
    "segs": null,
    "full_uz": "Odamlar kasal yurakni davolashni o'rganib olishgan,",
    "note": null
  },
  {
    "num": 52,
    "time": "00:03:36,680 --> 00:03:40,039",
    "arabic": "بِاسْتِبْدَالِ أَجْزَاءٍ صِنَاعِيَّةٍ بِأَجْزَائِهِ الْمُنْهَكَةِ",
    "segs": null,
    "full_uz": "uning charchagan qismlarini sun'iy qismlar bilan almashtirish orqali.",
    "note": null
  },
  {
    "num": 53,
    "time": "00:03:40,039 --> 00:03:43,639",
    "arabic": "إِنَّ هَذِهِ الْأَعْضَاءَ الِاصْطِنَاعِيَّةَ اخْتِرَاعٌ رَائِعٌ حَقًّا",
    "segs": null,
    "full_uz": "Bu sun'iy a'zolar chindan ham ajoyib ixtiro,",
    "note": null
  },
  {
    "num": 54,
    "time": "00:03:43,639 --> 00:03:45,599",
    "arabic": "مُذْهِلٌ مَا يُمْكِنُهَا فِعْلُهُ",
    "segs": null,
    "full_uz": "ular qila oladigan narsalar hayratlanarli.",
    "note": null
  },
  {
    "num": 55,
    "time": "00:03:45,599 --> 00:03:48,759",
    "arabic": "تُسَاعِدُ النَّاسَ عَلَى أَنْ يَحْيَوْا حَيَاةً طَبِيعِيَّةً",
    "segs": null,
    "full_uz": "Ular odamlarga oddiy hayot kechirishga yordam beradi.",
    "note": null
  },
  {
    "num": 56,
    "time": "00:03:48,759 --> 00:03:52,859",
    "arabic": "سَيِّدِي، هَلْ نَجَحَ الْأَمْرُ؟",
    "segs": null,
    "full_uz": "Janob, ish o'ngidan keldimi?",
    "note": null
  },
  {
    "num": 57,
    "time": "00:03:52,859 --> 00:03:54,060",
    "arabic": "سَنَعْلَمُ عَمَّا قَرِيبٍ",
    "segs": null,
    "full_uz": "Yaqinda bilamiz.",
    "note": null
  },
  {
    "num": 58,
    "time": "00:04:12,840 --> 00:04:14,900",
    "arabic": "تَمَّتْ، هَيَّا خُذْهَا",
    "segs": [
      { "ar": "تَمَّتْ", "uz": "tayyor bo'ldi" },
      { "ar": "هَيَّا خُذْهَا", "uz": "qani, ol uni" }
    ],
    "full_uz": "Tayyor bo'ldi, qani, ol uni.",
    "note": null
  },
  {
    "num": 59,
    "time": "00:04:14,900 --> 00:04:18,300",
    "arabic": "شُكْرًا لِمُسَاعَدَتِكَ يَا عَلَّامَةَ يُوجِينِيُوسَ",
    "segs": null,
    "full_uz": "Yordamingiz uchun rahmat, olim Yevjenius.",
    "note": null
  },
  {
    "num": 60,
    "time": "00:04:18,300 --> 00:04:21,379",
    "arabic": "رَافَقَتْكُمَا السَّلَامَةُ",
    "segs": null,
    "full_uz": "Yaxshi boringlar.",
    "note": null
  },
  {
    "num": 61,
    "time": "00:04:44,399 --> 00:04:50,399",
    "arabic": "حَسَنًا يَا نُولِيكْ، صَارَ صَدِيقُ تُومْ الْقَدِيمُ كَالْجَدِيدِ تَمَامًا",
    "segs": [
      { "ar": "حَسَنًا يَا نُولِيكْ", "uz": "xo'p, Nolik" },
      { "ar": "صَارَ صَدِيقُ تُومْ الْقَدِيمُ كَالْجَدِيدِ تَمَامًا", "uz": "Tomning eski do'sti aynan yangisidek bo'lib qoldi" }
    ],
    "full_uz": "Xo'p, Nolik, Tomning eski do'sti aynan yangisidek bo'lib qoldi.",
    "note": null
  },
  {
    "num": 62,
    "time": "00:04:51,399 --> 00:04:57,399",
    "arabic": "سِيمْكَا، إِنْ أَصْبَحَ تُومْ صَدِيقًا لِلدُّبِّ فَعِنْدَهَا، هَلْ سَيَبْقَى صَدِيقًا لَنَا؟",
    "segs": [
      { "ar": "سِيمْكَا", "uz": "Simka" },
      { "ar": "إِنْ أَصْبَحَ تُومْ صَدِيقًا لِلدُّبِّ فَعِنْدَهَا", "uz": "agar Tom ayiqchaga do'st bo'lib qolsa" },
      { "ar": "هَلْ سَيَبْقَى صَدِيقًا لَنَا", "uz": "bizga ham do'st bo'lib qolarmikan" }
    ],
    "full_uz": "Simka, agar Tom ayiqchaga do'st bo'lib qolsa, bizga ham do'st bo'lib qolarmikan?",
    "note": null
  },
  {
    "num": 63,
    "time": "00:04:58,399 --> 00:04:59,399",
    "arabic": "مَرْحَبًا",
    "segs": null,
    "full_uz": "Salom.",
    "note": null
  },
  {
    "num": 64,
    "time": "00:04:59,399 --> 00:05:00,399",
    "arabic": "أَهْلًا",
    "segs": null,
    "full_uz": "Salom.",
    "note": null
  },
  {
    "num": 65,
    "time": "00:05:00,399 --> 00:05:08,399",
    "arabic": "آهْ، دُبِّي الْعَزِيزُ، لَقَدْ وَجَدْتُمَاهُ، رَائِعٌ، وَأَصْلَحْتُمَاهُ أَيْضًا، شُكْرًا",
    "segs": [
      { "ar": "آهْ، دُبِّي الْعَزِيزُ", "uz": "voy, azizim ayiqcham" },
      { "ar": "لَقَدْ وَجَدْتُمَاهُ", "uz": "topib olibsizlar" },
      { "ar": "رَائِعٌ، وَأَصْلَحْتُمَاهُ أَيْضًا", "uz": "ajoyib, va tuzatib ham qo'yibsizlar" },
      { "ar": "شُكْرًا", "uz": "rahmat" }
    ],
    "full_uz": "Voy, azizim ayiqcham, topib olibsizlar, ajoyib, va tuzatib ham qo'yibsizlar, rahmat.",
    "note": null
  },
  {
    "num": 66,
    "time": "00:05:14,399 --> 00:05:21,819",
    "arabic": "أَجَلْ كَمَا قَالَ جْرَانْدْ بُوسْ",
    "segs": null,
    "full_uz": "Ha, Grand Boss aytganidek.",
    "note": null
  },
  {
    "num": 67,
    "time": "00:05:21,819 --> 00:05:25,159",
    "arabic": "صَدِيقٌ قَدِيمٌ أَفْضَلُ مِنْ صَدِيقَيْنِ جَدِيدَيْنِ",
    "segs": null,
    "full_uz": "Eski do'st ikkita yangi do'stdan yaxshiroqdir.",
    "note": null
  },
  {
    "num": 68,
    "time": "00:05:25,159 --> 00:05:27,120",
    "arabic": "مَنِ الْجَدِيدُ وَمَنِ الْقَدِيمُ؟",
    "segs": null,
    "full_uz": "Kim yangi, kim eski?",
    "note": null
  },
  {
    "num": 69,
    "time": "00:05:27,120 --> 00:05:28,459",
    "arabic": "الدُّبُّ هُوَ الْقَدِيمُ",
    "segs": null,
    "full_uz": "Ayiqcha — eski,",
    "note": null
  },
  {
    "num": 70,
    "time": "00:05:28,459 --> 00:05:30,539",
    "arabic": "وَنَحْنُ الْجَدِيدَانِ",
    "segs": null,
    "full_uz": "biz esa — yangimiz.",
    "note": null
  },
  {
    "num": 71,
    "time": "00:05:30,539 --> 00:05:32,560",
    "arabic": "نُولِيكْ أَنْتَ مُخْطِئٌ",
    "segs": null,
    "full_uz": "Nolik, sen xato qilyapsan.",
    "note": null
  },
  {
    "num": 72,
    "time": "00:05:32,560 --> 00:05:34,620",
    "arabic": "أَنْتُمْ أَصْدِقَائِيَ الْأَوْفِيَاءُ",
    "segs": null,
    "full_uz": "Sizlar mening sodiq do'stlarimsiz.",
    "note": null
  },
  {
    "num": 73,
    "time": "00:05:34,620 --> 00:05:37,099",
    "arabic": "أَنْتُمْ أَصْدِقَائِيَ الْمُقَرَّبُونَ جِدًّا",
    "segs": null,
    "full_uz": "Sizlar mening juda yaqin do'stlarimsiz,",
    "note": null
  },
  {
    "num": 74,
    "time": "00:05:37,099 --> 00:05:39,739",
    "arabic": "الْمُقَرَّبُونَ جِدًّا فِي هَذَا الْعَالَمِ",
    "segs": null,
    "full_uz": "bu dunyodagi eng yaqin do'stlarim.",
    "note": null
  },
  {
    "num": 75,
    "time": "00:05:39,739 --> 00:05:41,459",
    "arabic": "تِدِيشْ",
    "segs": null,
    "full_uz": "Tidish.",
    "note": null
  }
];
if (typeof module !== "undefined" && module.exports) {
  module.exports = lessons;
}
