const lessons = [
  {
    "num": 1,
    "time": "00:00:34,320 --> 00:00:36,000",
    "arabic": "الْمِصْبَاحُ الْيَدَوِيُّ",
    "segs": null,
    "full_uz": "Qo'l fonari.",
    "note": null
  },
  {
    "num": 2,
    "time": "00:00:36,000 --> 00:00:38,440",
    "arabic": "أَيْنَ ذَلِكَ الشَّيْءُ؟",
    "segs": null,
    "full_uz": "O'sha narsa qayerda?",
    "note": null
  },
  {
    "num": 3,
    "time": "00:00:38,440 --> 00:00:41,800",
    "arabic": "مَرْحَبًا يَا تُومْ، عَمَّا تَبْحَثُ؟",
    "segs": [
      { "ar": "مَرْحَبًا يَا تُومْ", "uz": "salom, Tom" },
      { "ar": "عَمَّا تَبْحَثُ", "uz": "nimani qidiryapsan" }
    ],
    "full_uz": "Salom, Tom, nimani qidiryapsan?",
    "note": null
  },
  {
    "num": 4,
    "time": "00:00:41,800 --> 00:00:44,000",
    "arabic": "عَنْ مِصْبَاحٍ",
    "segs": null,
    "full_uz": "Fonarni.",
    "note": null
  },
  {
    "num": 5,
    "time": "00:00:44,000 --> 00:00:46,760",
    "arabic": "آهْ هَا هُوَ ذَا، وَلِمَ تُرِيدُهُ؟",
    "segs": [
      { "ar": "آهْ هَا هُوَ ذَا", "uz": "voy, mana u" },
      { "ar": "وَلِمَ تُرِيدُهُ", "uz": "nega senga kerak" }
    ],
    "full_uz": "Voy, mana u, nega senga kerak?",
    "note": null
  },
  {
    "num": 6,
    "time": "00:00:46,760 --> 00:00:48,500",
    "arabic": "لِلتَّحَدُّثِ إِلَى كَاتْيَا",
    "segs": null,
    "full_uz": "Katya bilan gaplashish uchun.",
    "note": null
  },
  {
    "num": 7,
    "time": "00:00:48,500 --> 00:00:50,239",
    "arabic": "اسْتَعْمِلِ الْهَاتِفَ",
    "segs": null,
    "full_uz": "Telefondan foydalan.",
    "note": null
  },
  {
    "num": 8,
    "time": "00:00:50,239 --> 00:00:54,320",
    "arabic": "هَذَا الَّذِي أَمَامَكَ مِصْبَاحٌ وَلَيْسَ هَاتِفًا",
    "segs": null,
    "full_uz": "Sening oldingdagi bu — fonar, telefon emas.",
    "note": null
  },
  {
    "num": 9,
    "time": "00:00:54,320 --> 00:00:58,920",
    "arabic": "لَا سَأَشْرَحُ لَكَ، ابْتَكَرْنَا أَنَا وَكَاتْيَا رُمُوزًا سِرِّيَّةً",
    "segs": [
      { "ar": "لَا سَأَشْرَحُ لَكَ", "uz": "yo'q, senga tushuntiraman" },
      { "ar": "ابْتَكَرْنَا أَنَا وَكَاتْيَا رُمُوزًا سِرِّيَّةً", "uz": "men va Katya maxfiy belgilar o'ylab topganmiz" }
    ],
    "full_uz": "Yo'q, senga tushuntiraman, men va Katya maxfiy belgilar o'ylab topganmiz.",
    "note": null
  },
  {
    "num": 10,
    "time": "00:00:58,920 --> 00:01:00,000",
    "arabic": "إِذَا أَوْمَضَ مَرَّةً وَاحِدَةً يَعْنِي مَرْحَبًا",
    "segs": null,
    "full_uz": "Agar bir marta yonib-o'chsa, «salom» degani.",
    "note": null
  },
  {
    "num": 11,
    "time": "00:01:00,000 --> 00:01:04,000",
    "arabic": "آهْ، كَاتْيَا أَيْضًا قَالَتْ مَرْحَبًا، أَلَمْ تُلَاحِظِي؟",
    "segs": [
      { "ar": "آهْ، كَاتْيَا أَيْضًا قَالَتْ مَرْحَبًا", "uz": "voy, Katya ham «salom» dedi" },
      { "ar": "أَلَمْ تُلَاحِظِي", "uz": "sezmadingmi" }
    ],
    "full_uz": "Voy, Katya ham «salom» dedi, sezmadingmi?",
    "note": null
  },
  {
    "num": 12,
    "time": "00:01:04,620 --> 00:01:06,920",
    "arabic": "وَمْضَتَانِ، مَا مَعْنَى هَذَا؟",
    "segs": null,
    "full_uz": "Ikki marta yonib-o'chdi, bu nima degani?",
    "note": null
  },
  {
    "num": 13,
    "time": "00:01:06,920 --> 00:01:10,900",
    "arabic": "كَاتْيَا تَسْأَلُ كَيْفَ الْحَالُ، الْآنَ سَأُخْبِرُهَا أَنَّنِي بِخَيْرٍ",
    "segs": [
      { "ar": "كَاتْيَا تَسْأَلُ كَيْفَ الْحَالُ", "uz": "Katya qandaysan deb so'rayapti" },
      { "ar": "الْآنَ سَأُخْبِرُهَا أَنَّنِي بِخَيْرٍ", "uz": "hozir unga yaxshiman deb aytaman" }
    ],
    "full_uz": "Katya qandaysan deb so'rayapti, hozir unga yaxshiman deb aytaman.",
    "note": null
  },
  {
    "num": 14,
    "time": "00:01:10,900 --> 00:01:14,000",
    "arabic": "آهْ، مَا خَطْبُ هَذَا؟",
    "segs": null,
    "full_uz": "Voy, bunga nima bo'ldi?",
    "note": null
  },
  {
    "num": 15,
    "time": "00:01:15,299 --> 00:01:16,879",
    "arabic": "أَظُنُّ أَنَّهُ قَدْ تَعَطَّلَ",
    "segs": null,
    "full_uz": "Menimcha, buzilib qolgan.",
    "note": null
  },
  {
    "num": 16,
    "time": "00:01:16,879 --> 00:01:19,000",
    "arabic": "أَرَى هَذَا يَا نُولِيكْ، لَكِنْ مَا الْعُطْلُ؟",
    "segs": [
      { "ar": "أَرَى هَذَا يَا نُولِيكْ", "uz": "buni ko'ryapman, Nolik" },
      { "ar": "لَكِنْ مَا الْعُطْلُ", "uz": "lekin nosozlik nimada" }
    ],
    "full_uz": "Buni ko'ryapman, Nolik, lekin nosozlik nimada?",
    "note": null
  },
  {
    "num": 17,
    "time": "00:01:20,280 --> 00:01:25,180",
    "arabic": "أَيُّ مِصْبَاحٍ يَدَوِيٍّ يَكُونُ مُؤَلَّفًا مِنْ مِدْخَرَةٍ وَمِصْبَاحٍ",
    "segs": null,
    "full_uz": "Har qanday qo'l fonari akkumulyator va lampochkadan tashkil topgan bo'ladi,",
    "note": null
  },
  {
    "num": 18,
    "time": "00:01:25,180 --> 00:01:28,740",
    "arabic": "مُتَّصِلَانِ بِمَجْمُوعَةٍ مِنَ الْأَسْلَاكِ بَيْنَهَا مِفْتَاحُ التَّشْغِيلِ",
    "segs": null,
    "full_uz": "ular orasida yoqish tugmasi joylashgan simlar to'plami orqali ulangan.",
    "note": null
  },
  {
    "num": 19,
    "time": "00:01:28,739 --> 00:01:31,879",
    "arabic": "لِتُشَغِّلَ كَشَّافًا عَلَيْكَ أَنْ تَقْلِبَ الْمِفْتَاحَ",
    "segs": null,
    "full_uz": "Chiroqni yoqish uchun tugmani bosishing kerak,",
    "note": null
  },
  {
    "num": 20,
    "time": "00:01:31,879 --> 00:01:38,119",
    "arabic": "وَهَذَا يَسْمَحُ لِلتَّيَّارِ الْكَهْرَبَائِيِّ بِالْعُبُورِ خِلَالَ الْأَسْلَاكِ مِنَ الْمِدْخَرَةِ إِلَى الْمِصْبَاحِ فَيُضِيءُ",
    "segs": [
      { "ar": "وَهَذَا يَسْمَحُ لِلتَّيَّارِ الْكَهْرَبَائِيِّ بِالْعُبُورِ خِلَالَ الْأَسْلَاكِ", "uz": "bu esa elektr tokining simlar orqali o'tishiga imkon beradi" },
      { "ar": "مِنَ الْمِدْخَرَةِ إِلَى الْمِصْبَاحِ فَيُضِيءُ", "uz": "akkumulyatordan lampochkaga, va u yonadi" }
    ],
    "full_uz": "Bu esa elektr tokining simlar orqali akkumulyatordan lampochkaga o'tishiga imkon beradi, va u yonadi.",
    "note": null
  },
  {
    "num": 21,
    "time": "00:01:38,119 --> 00:01:42,239",
    "arabic": "أَمَّا إِذَا لَمْ يُضِئْ فَهَذَا يَعْنِي أَنَّ الْمِدْخَرَةَ فَارِغَةٌ",
    "segs": null,
    "full_uz": "Agar yonmasa, bu akkumulyator tugagan degani,",
    "note": null
  },
  {
    "num": 22,
    "time": "00:01:42,239 --> 00:01:45,560",
    "arabic": "أَوْ أَنَّ الْمِصْبَاحَ احْتَرَقَ أَوْ أَنَّ الْمِفْتَاحَ مُعَطَّلٌ",
    "segs": [
      { "ar": "أَوْ أَنَّ الْمِصْبَاحَ احْتَرَقَ", "uz": "yoki lampochka kuyib qolgan" },
      { "ar": "أَوْ أَنَّ الْمِفْتَاحَ مُعَطَّلٌ", "uz": "yoki tugma buzilgan degani" }
    ],
    "full_uz": "yoki lampochka kuyib qolgan, yoki tugma buzilgan degani.",
    "note": null
  },
  {
    "num": 23,
    "time": "00:01:45,560 --> 00:01:50,879",
    "arabic": "وَالْآنَ لِنَجْعَلْ هَذِهِ النَّظَرِيَّةَ قَيْدَ التَّطْبِيقِ",
    "segs": null,
    "full_uz": "Endi bu nazariyani amaliyotga qo'llab ko'raylik.",
    "note": null
  },
  {
    "num": 24,
    "time": "00:01:51,459 --> 00:01:54,199",
    "arabic": "أَنَا آسِفٌ لَكِنْ لَا وَقْتَ لَدَيَّ الْآنَ",
    "segs": [
      { "ar": "أَنَا آسِفٌ", "uz": "kechirasiz" },
      { "ar": "لَكِنْ لَا وَقْتَ لَدَيَّ الْآنَ", "uz": "lekin hozir vaqtim yo'q" }
    ],
    "full_uz": "Kechirasiz, lekin hozir vaqtim yo'q.",
    "note": null
  },
  {
    "num": 25,
    "time": "00:01:54,200 --> 00:02:01,780",
    "arabic": "أَلَا تُدْرِكُونَ ذَلِكَ؟ إِذَا لَمْ أَرُدَّ عَلَيْهِ فَسَتَظُنُّ أَنِّي لَا أُرِيدُ مُحَادَثَتَهَا وَهَذَا تَصَرُّفٌ فَظٌّ",
    "segs": [
      { "ar": "أَلَا تُدْرِكُونَ ذَلِكَ", "uz": "buni tushunmayapsizlarmi" },
      { "ar": "إِذَا لَمْ أَرُدَّ عَلَيْهِ فَسَتَظُنُّ أَنِّي لَا أُرِيدُ مُحَادَثَتَهَا", "uz": "agar javob bermasam, u men u bilan gaplashishni xohlamayapman deb o'ylaydi" },
      { "ar": "وَهَذَا تَصَرُّفٌ فَظٌّ", "uz": "va bu qo'pol xatti-harakat bo'ladi" }
    ],
    "full_uz": "Buni tushunmayapsizlarmi? Agar javob bermasam, u men u bilan gaplashishni xohlamayapman deb o'ylaydi, bu esa qo'pol xatti-harakat bo'ladi.",
    "note": null
  },
  {
    "num": 26,
    "time": "00:02:01,780 --> 00:02:02,840",
    "arabic": "لَا تَنْزَعِجْ كَثِيرًا",
    "segs": null,
    "full_uz": "Juda ko'p xafa bo'lma.",
    "note": null
  },
  {
    "num": 27,
    "time": "00:02:02,840 --> 00:02:08,819",
    "arabic": "لَا نَنْزَعِجُ لَكِنْ أَوَّلًا نَحْتَاجُ إِلَى الْحَقِيبَةِ وَسَنَعُودُ فِي الْحَالِ إِلَى اللِّقَاءِ",
    "segs": [
      { "ar": "لَا نَنْزَعِجُ", "uz": "xafa bo'lmayapmiz" },
      { "ar": "لَكِنْ أَوَّلًا نَحْتَاجُ إِلَى الْحَقِيبَةِ", "uz": "lekin avval bizga sumka kerak" },
      { "ar": "وَسَنَعُودُ فِي الْحَالِ إِلَى اللِّقَاءِ", "uz": "va tezda qaytamiz, ko'rishguncha" }
    ],
    "full_uz": "Xafa bo'lmayapmiz, lekin avval bizga sumka kerak, va tezda qaytamiz, ko'rishguncha.",
    "note": null
  },
  {
    "num": 28,
    "time": "00:02:08,819 --> 00:02:13,400",
    "arabic": "مَاسِيَا أَسَمِعْتِ؟ إِنَّهُ صَوْتٌ غَرِيبٌ",
    "segs": [
      { "ar": "مَاسِيَا أَسَمِعْتِ", "uz": "Masya, eshitdingmi" },
      { "ar": "إِنَّهُ صَوْتٌ غَرِيبٌ", "uz": "bu g'alati ovoz" }
    ],
    "full_uz": "Masya, eshitdingmi? Bu g'alati ovoz.",
    "note": null
  },
  {
    "num": 29,
    "time": "00:02:13,400 --> 00:02:15,780",
    "arabic": "هَذَا جَدِيدٌ",
    "segs": null,
    "full_uz": "Bu yangilik.",
    "note": null
  },
  {
    "num": 30,
    "time": "00:02:16,699 --> 00:02:20,819",
    "arabic": "آهْ الْآنَ عَرَفْنَا مَصْدَرَ الضَّجَّةِ",
    "segs": null,
    "full_uz": "Voy, endi shovqinning manbaini bildik.",
    "note": null
  },
  {
    "num": 31,
    "time": "00:02:20,819 --> 00:02:24,939",
    "arabic": "بَابُوسْ هَلْ يُمْكِنُنَا اسْتِعْمَالُ حَقِيبَتِهِ؟",
    "segs": null,
    "full_uz": "Papus, uning sumkasidan foydalansak bo'ladimi?",
    "note": null
  },
  {
    "num": 32,
    "time": "00:02:24,939 --> 00:02:26,500",
    "arabic": "لِنُصْلِحَ مِصْبَاحًا يَدَوِيًّا",
    "segs": null,
    "full_uz": "Qo'l fonarini tuzatish uchun.",
    "note": null
  },
  {
    "num": 33,
    "time": "00:02:26,500 --> 00:02:28,599",
    "arabic": "هَلْ ذَكَرْتَ مِصْبَاحًا يَدَوِيًّا؟",
    "segs": null,
    "full_uz": "Qo'l fonari deding-a?",
    "note": null
  },
  {
    "num": 34,
    "time": "00:02:28,599 --> 00:02:33,459",
    "arabic": "آهْ أَتَذْكُرَانِ قِصَّةَ جَدِّنَا الْأَكْبَرِ عِنْدَمَا سَافَرَ أَمْيَالًا عَلَى ظَهْرِ كَلْبٍ؟",
    "segs": [
      { "ar": "آهْ أَتَذْكُرَانِ قِصَّةَ جَدِّنَا الْأَكْبَرِ", "uz": "voy, katta bobomizning voqeasini eslaysizlarmi" },
      { "ar": "عِنْدَمَا سَافَرَ أَمْيَالًا عَلَى ظَهْرِ كَلْبٍ", "uz": "it ustida bir necha mil safar qilganini" }
    ],
    "full_uz": "Voy, katta bobomizning it ustida bir necha mil safar qilgan voqeasini eslaysizlarmi?",
    "note": null
  },
  {
    "num": 35,
    "time": "00:02:33,459 --> 00:02:36,579",
    "arabic": "إِنَّهَا حَقِيقِيَّةٌ كَانَتِ الْمُهِمَّةُ كَبِيرَةً جِدًّا",
    "segs": [
      { "ar": "إِنَّهَا حَقِيقِيَّةٌ", "uz": "u haqiqiy voqea" },
      { "ar": "كَانَتِ الْمُهِمَّةُ كَبِيرَةً جِدًّا", "uz": "vazifa juda ulkan edi" }
    ],
    "full_uz": "U haqiqiy voqea, vazifa juda ulkan edi.",
    "note": null
  },
  {
    "num": 36,
    "time": "00:02:36,579 --> 00:02:38,120",
    "arabic": "إِصْلَاحُ مِصْبَاحٍ كَبِيرٍ",
    "segs": null,
    "full_uz": "Katta chiroqni tuzatish.",
    "note": null
  },
  {
    "num": 37,
    "time": "00:02:38,120 --> 00:02:39,819",
    "arabic": "وَمَا هَذَا الْمِصْبَاحُ؟",
    "segs": null,
    "full_uz": "Bu qanaqa chiroq?",
    "note": null
  },
  {
    "num": 38,
    "time": "00:02:39,819 --> 00:02:41,740",
    "arabic": "نَوْعٌ مُمَيَّزٌ يُدْعَى بِالْمَنَارَةِ",
    "segs": null,
    "full_uz": "Mayoq deb ataladigan alohida bir tur.",
    "note": null
  },
  {
    "num": 39,
    "time": "00:02:41,740 --> 00:02:48,259",
    "arabic": "الْمَنَارَةُ هِيَ بِنَاءٌ طَوِيلٌ بِكَشَّافَاتٍ كَبِيرَةٍ عَلَى قِمَّتِهِ",
    "segs": null,
    "full_uz": "Mayoq — cho'qqisida katta projektorlar joylashgan baland inshoot,",
    "note": null
  },
  {
    "num": 40,
    "time": "00:02:48,259 --> 00:02:51,659",
    "arabic": "وَتُسْتَعْمَلُ لِمُسَاعَدَةِ السُّفُنِ لِمَعْرِفَةِ وِجْهَتِهَا",
    "segs": null,
    "full_uz": "u kemalarga yo'nalishini bilishlariga yordam berish uchun ishlatiladi.",
    "note": null
  },
  {
    "num": 41,
    "time": "00:02:51,659 --> 00:02:54,819",
    "arabic": "لَقَدِ اسْتَعْمَلَ الْبَشَرُ الْمَنَارَةَ مُنْذُ الْعُصُورِ الْقَدِيمَةِ",
    "segs": null,
    "full_uz": "Odamlar mayoqlardan qadim zamonlardan beri foydalanib kelishgan,",
    "note": null
  },
  {
    "num": 42,
    "time": "00:02:54,819 --> 00:02:58,120",
    "arabic": "وَأَشْهَرُ مَنَارَةٍ يَذْكُرُهَا النَّاسُ هِيَ مَنَارَةُ الْإِسْكَنْدَرِيَّةِ",
    "segs": null,
    "full_uz": "va odamlar eslaydigan eng mashhur mayoq — Iskandariya mayog'idir.",
    "note": null
  },
  {
    "num": 43,
    "time": "00:02:58,120 --> 00:03:01,560",
    "arabic": "وَقَدْ بَنَاهَا الْمِصْرِيُّونَ قَبْلَ أَكْثَرَ مِنْ أَلْفَيْ عَامٍ",
    "segs": null,
    "full_uz": "Uni misrliklar ikki ming yildan ko'proq oldin qurishgan,",
    "note": null
  },
  {
    "num": 44,
    "time": "00:03:01,560 --> 00:03:04,519",
    "arabic": "وَكَانَ طُولُهَا أَكْثَرَ مِنْ مِئَةِ مِتْرٍ",
    "segs": null,
    "full_uz": "va uning bo'yi yuz metrdan ham baland bo'lgan.",
    "note": null
  },
  {
    "num": 45,
    "time": "00:03:04,519 --> 00:03:09,199",
    "arabic": "وَعَدَّ الْإِغْرِيقِيُّونَ الْقُدَمَاءُ هَذِهِ الْمَنَارَةَ وَاحِدَةً مِنْ عَجَائِبِ الدُّنْيَا السَّبْعِ",
    "segs": null,
    "full_uz": "Qadimgi yunonlar bu mayoqni dunyoning yetti mo''jizasidan biri deb hisoblashgan.",
    "note": null
  },
  {
    "num": 46,
    "time": "00:03:09,199 --> 00:03:13,699",
    "arabic": "وَفِي الْعُصُورِ الْقَدِيمَةِ كَانَ النَّاسُ يُشْعِلُونَ النَّارَ عَلَى قِمَّةِ الْمَنَارَةِ",
    "segs": null,
    "full_uz": "Qadim zamonlarda odamlar mayoqning cho'qqisida olov yoqishardi,",
    "note": null
  },
  {
    "num": 47,
    "time": "00:03:13,699 --> 00:03:17,599",
    "arabic": "أَمَّا الْيَوْمَ فَالضَّوْءُ يَأْتِي مِنْ كَشَّافَاتٍ كَهْرَبَائِيَّةٍ قَوِيَّةٍ",
    "segs": null,
    "full_uz": "hozir esa yorug'lik kuchli elektr projektorlardan keladi.",
    "note": null
  },
  {
    "num": 48,
    "time": "00:03:17,599 --> 00:03:21,620",
    "arabic": "لَا يَكْتَفِي كَثِيرٌ مِنَ الْمَنَارَاتِ الْيَوْمَ بِإِصْدَارِ الضَّوْءِ وَحْدَهُ",
    "segs": null,
    "full_uz": "Bugungi mayoqlarning ko'pchiligi faqat yorug'lik chiqarish bilan cheklanmaydi,",
    "note": null
  },
  {
    "num": 49,
    "time": "00:03:21,620 --> 00:03:24,719",
    "arabic": "بَلْ تُصْدِرُ إِشَارَاتٍ مَوْجِيَّةً أَيْضًا",
    "segs": null,
    "full_uz": "balki radio-to'lqin signallarini ham chiqaradi.",
    "note": null
  },
  {
    "num": 50,
    "time": "00:03:24,719 --> 00:03:25,079",
    "arabic": "أَجَلْ",
    "segs": null,
    "full_uz": "Ha.",
    "note": null
  },
  {
    "num": 51,
    "time": "00:03:25,079 --> 00:03:32,060",
    "arabic": "وَبِفَضْلِ الْمَنَارَاتِ تَسْتَطِيعُ الطَّائِرَاتُ وَالسُّفُنُ الْيَوْمَ أَنْ تَعْرِفَ وِجْهَتَهَا مِنْ عَلَى بُعْدِ أَمْيَالٍ حَتَّى تَبْقَى فِي أَمَانٍ",
    "segs": [
      { "ar": "وَبِفَضْلِ الْمَنَارَاتِ تَسْتَطِيعُ الطَّائِرَاتُ وَالسُّفُنُ الْيَوْمَ", "uz": "mayoqlar tufayli bugungi samolyot va kemalar" },
      { "ar": "أَنْ تَعْرِفَ وِجْهَتَهَا مِنْ عَلَى بُعْدِ أَمْيَالٍ حَتَّى تَبْقَى فِي أَمَانٍ", "uz": "xavfsiz bo'lishlari uchun bir necha mil masofadan yo'nalishini bilishlari mumkin" }
    ],
    "full_uz": "Mayoqlar tufayli bugungi samolyot va kemalar, xavfsiz bo'lishlari uchun bir necha mil masofadan yo'nalishini bilishlari mumkin.",
    "note": null
  },
  {
    "num": 52,
    "time": "00:03:32,060 --> 00:03:37,099",
    "arabic": "وَبِفَضْلِ أَعْمَالِ جَدِّكُمُ الْبُطُولِيَّةِ",
    "segs": null,
    "full_uz": "Bobongizning qahramonlik ishlari tufayli,",
    "note": null
  },
  {
    "num": 53,
    "time": "00:03:37,099 --> 00:03:39,680",
    "arabic": "بَدَأَتْ تِلْكَ الْمَنَارَةُ بِالْعَمَلِ",
    "segs": null,
    "full_uz": "o'sha mayoq ishlay boshladi,",
    "note": null
  },
  {
    "num": 54,
    "time": "00:03:39,680 --> 00:03:43,819",
    "arabic": "وَمُنْذُ ذَلِكَ الْوَقْتِ لَمْ تَضِعْ أَيُّ سَفِينَةٍ",
    "segs": null,
    "full_uz": "va o'shandan beri hech bir kema adashib qolmagan.",
    "note": null
  },
  {
    "num": 55,
    "time": "00:03:43,819 --> 00:03:45,419",
    "arabic": "سِيمْكَا",
    "segs": null,
    "full_uz": "Simka!",
    "note": null
  },
  {
    "num": 56,
    "time": "00:03:45,419 --> 00:03:49,299",
    "arabic": "مَا رَأْيُكَ أَنْ لَا نَكْتَفِيَ بِإِصْلَاحِ الْمِصْبَاحِ وَحْدَهُ",
    "segs": null,
    "full_uz": "Faqat chiroqni tuzatish bilan cheklanmasak-chi,",
    "note": null
  },
  {
    "num": 57,
    "time": "00:03:49,299 --> 00:03:51,019",
    "arabic": "وَأَنْ نَفْعَلَ أَمْرًا بُطُولِيًّا",
    "segs": null,
    "full_uz": "va qahramonlarcha bir ish qilsak,",
    "note": null
  },
  {
    "num": 58,
    "time": "00:03:51,019 --> 00:03:52,539",
    "arabic": "كَمَا فَعَلَ جَدُّنَا؟",
    "segs": null,
    "full_uz": "xuddi bobomiz qilgandek?",
    "note": null
  },
  {
    "num": 59,
    "time": "00:03:52,539 --> 00:03:52,819",
    "arabic": "آهْ",
    "segs": null,
    "full_uz": "Voy.",
    "note": null
  },
  {
    "num": 60,
    "time": "00:03:52,819 --> 00:03:55,560",
    "arabic": "حَسَنًا، مَا رَأْيُكَ؟",
    "segs": null,
    "full_uz": "Xo'p, sen nima deysan?",
    "note": null
  },
  {
    "num": 61,
    "time": "00:03:55,560 --> 00:03:57,919",
    "arabic": "لِنَقْفِزْ عَلَى ظَهْرِ هَذَا الْكَلْبِ وَنَنْطَلِقْ",
    "segs": null,
    "full_uz": "Keling, shu itning ustiga sakraymiz va yo'lga chiqamiz.",
    "note": null
  },
  {
    "num": 62,
    "time": "00:03:57,919 --> 00:04:08,379",
    "arabic": "تَوَقَّفْ، الْآنَ أَمْسِكْ بِيَدِي",
    "segs": [
      { "ar": "تَوَقَّفْ", "uz": "to'xta" },
      { "ar": "الْآنَ أَمْسِكْ بِيَدِي", "uz": "endi qo'limdan ushla" }
    ],
    "full_uz": "To'xta, endi qo'limdan ushla.",
    "note": null
  },
  {
    "num": 63,
    "time": "00:04:15,419 --> 00:04:45,419",
    "arabic": "هَاااااا....!",
    "segs": null,
    "full_uz": "Haaaa...!",
    "note": null
  },
  {
    "num": 64,
    "time": "00:04:45,420 --> 00:05:04,200",
    "arabic": "شُوسَاكَا أُخْرُجِي فِي الْحَالِ",
    "segs": null,
    "full_uz": "Shu-saka, hozir chiq.",
    "note": null
  },
  {
    "num": 65,
    "time": "00:05:04,200 --> 00:05:05,560",
    "arabic": "هَيَّا اخْرُجِي بِسُرْعَةٍ",
    "segs": null,
    "full_uz": "Qani, tezroq chiq.",
    "note": null
  },
  {
    "num": 66,
    "time": "00:05:05,560 --> 00:05:09,379",
    "arabic": "تِيدِيشْ",
    "segs": null,
    "full_uz": "Tidish!",
    "note": null
  },
  {
    "num": 67,
    "time": "00:05:09,379 --> 00:05:12,740",
    "arabic": "لَقَدْ كَانَ عَمَلًا بُطُولِيًّا حَقًّا",
    "segs": null,
    "full_uz": "Bu chindan ham qahramonlik ish edi.",
    "note": null
  },
  {
    "num": 68,
    "time": "00:05:12,740 --> 00:05:15,160",
    "arabic": "وَالْآنَ حَانَ الْوَقْتُ لِنُصْلِحَ تِلْكَ الْمَنَارَةَ",
    "segs": null,
    "full_uz": "Endi o'sha mayoqni tuzatish vaqti keldi.",
    "note": null
  },
  {
    "num": 69,
    "time": "00:05:15,160 --> 00:05:17,540",
    "arabic": "هَيَّا يَا تُومْ، سَلِّمْنَا الْمَنَارَةَ",
    "segs": [
      { "ar": "هَيَّا يَا تُومْ", "uz": "qani, Tom" },
      { "ar": "سَلِّمْنَا الْمَنَارَةَ", "uz": "mayoqni bizga ber" }
    ],
    "full_uz": "Qani, Tom, mayoqni bizga ber.",
    "note": null
  },
  {
    "num": 70,
    "time": "00:05:17,540 --> 00:05:18,700",
    "arabic": "أَيَّ مَنَارَةٍ؟",
    "segs": null,
    "full_uz": "Qanday mayoq?",
    "note": null
  },
  {
    "num": 71,
    "time": "00:05:18,700 --> 00:05:19,820",
    "arabic": "مِصْبَاحَكَ الْيَدَوِيَّ",
    "segs": null,
    "full_uz": "Sening qo'l fonaringni.",
    "note": null
  },
  {
    "num": 72,
    "time": "00:05:19,820 --> 00:05:21,800",
    "arabic": "آهْ، لَا أَحْتَاجُ إِلَيْهِ",
    "segs": null,
    "full_uz": "Voy, u menga kerak emas.",
    "note": null
  },
  {
    "num": 73,
    "time": "00:05:21,800 --> 00:05:23,480",
    "arabic": "مَا الَّذِي تَعْنِيهِ بِهَذَا؟",
    "segs": null,
    "full_uz": "Bu bilan nimani nazarda tutyapsan?",
    "note": null
  },
  {
    "num": 74,
    "time": "00:05:23,480 --> 00:05:26,500",
    "arabic": "لَكِنْ كَيْفَ سَتَسْتَطِيعُ أَنْ تَتَحَدَّثَ إِلَى كَاتْيَا؟",
    "segs": null,
    "full_uz": "Lekin Katya bilan qanday gaplasha olasan?",
    "note": null
  },
  {
    "num": 75,
    "time": "00:05:26,500 --> 00:05:28,340",
    "arabic": "لَقَدْ كَلَّمْتُهَا، انْظُرَا",
    "segs": [
      { "ar": "لَقَدْ كَلَّمْتُهَا", "uz": "u bilan gaplashib bo'ldim" },
      { "ar": "انْظُرَا", "uz": "qaranglar" }
    ],
    "full_uz": "U bilan gaplashib bo'ldim, qaranglar.",
    "note": null
  },
  {
    "num": 76,
    "time": "00:05:28,340 --> 00:05:33,120",
    "arabic": "لَا، هَذَا لَمْ يَكُنِ اتِّفَاقَنَا",
    "segs": [
      { "ar": "لَا", "uz": "yo'q" },
      { "ar": "هَذَا لَمْ يَكُنِ اتِّفَاقَنَا", "uz": "bu bizning kelishuvimiz emas edi" }
    ],
    "full_uz": "Yo'q, bu bizning kelishuvimiz emas edi.",
    "note": null
  },
  {
    "num": 77,
    "time": "00:05:33,120 --> 00:05:37,540",
    "arabic": "أَجَلْ، أَتَقُولُ إِنَّ أَعْمَالَنَا الْبُطُولِيَّةَ كَانَتْ بِلَا فَائِدَةٍ؟",
    "segs": [
      { "ar": "أَجَلْ", "uz": "ha" },
      { "ar": "أَتَقُولُ إِنَّ أَعْمَالَنَا الْبُطُولِيَّةَ كَانَتْ بِلَا فَائِدَةٍ", "uz": "bizning qahramonlik ishlarimiz befoyda edi demoqchimisan" }
    ],
    "full_uz": "Ha, bizning qahramonlik ishlarimiz befoyda edi demoqchimisan?",
    "note": null
  },
  {
    "num": 78,
    "time": "00:05:37,540 --> 00:05:41,220",
    "arabic": "إِذَا كَانَ عَمَلًا بُطُولِيًّا، فَأَصْلِحَاهُ فِي الْحَالِ",
    "segs": null,
    "full_uz": "Agar qahramonlik ish bo'lsa, uni hoziroq tuzatinglar.",
    "note": null
  },
  {
    "num": 79,
    "time": "00:05:41,220 --> 00:05:43,540",
    "arabic": "مَرْحَى",
    "segs": null,
    "full_uz": "Ura!",
    "note": null
  }
];
if (typeof module !== "undefined" && module.exports) {
  module.exports = lessons;
}
