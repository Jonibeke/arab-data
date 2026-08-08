const lessons = [
  {
    "num": 1,
    "time": "00:00:33,520 --> 00:00:36,559",
    "arabic": "صُنْدُوقُ الْمُوسِيقَى",
    "segs": null,
    "full_uz": "Musiqa quticha.",
    "note": null
  },
  {
    "num": 2,
    "time": "00:00:46,559 --> 00:00:56,200",
    "arabic": "وَعِنْدَمَا بَدَأَ الْعَازِفُ الْمُنْقِذُ بِالْعَزْفِ بِالنَّايِ الْعَجِيبِ",
    "segs": [
      { "ar": "وَعِنْدَمَا بَدَأَ الْعَازِفُ الْمُنْقِذُ", "uz": "va qutqaruvchi navogar boshlaganida" },
      { "ar": "بِالْعَزْفِ بِالنَّايِ الْعَجِيبِ", "uz": "sehrli nay chalishni" }
    ],
    "full_uz": "Va qutqaruvchi navogar sehrli nay chalishni boshlaganida,",
    "note": null
  },
  {
    "num": 3,
    "time": "00:00:56,200 --> 00:01:08,400",
    "arabic": "خَرَجَتِ الْجُرْذَانُ مِنْ جُحُورِهَا وَتَبِعَتْهُ وَلَمْ يَرَهَا أَحَدٌ فِي هَامْلِينَ بَعْدَ هَذَا قَطُّ",
    "segs": [
      { "ar": "خَرَجَتِ الْجُرْذَانُ مِنْ جُحُورِهَا وَتَبِعَتْهُ", "uz": "kalamushlar inlaridan chiqib, uning ortidan ergashishdi" },
      { "ar": "وَلَمْ يَرَهَا أَحَدٌ فِي هَامْلِينَ بَعْدَ هَذَا قَطُّ", "uz": "va shundan keyin Gamelnda ularni hech kim ko'rmadi" }
    ],
    "full_uz": "kalamushlar inlaridan chiqib, uning ortidan ergashishdi, va shundan keyin Gamelnda ularni hech kim ko'rmadi.",
    "note": null
  },
  {
    "num": 4,
    "time": "00:01:08,400 --> 00:01:11,700",
    "arabic": "وَمَاذَا بَعْدَهَا؟",
    "segs": null,
    "full_uz": "Undan keyin-chi?",
    "note": null
  },
  {
    "num": 5,
    "time": "00:01:11,700 --> 00:01:15,120",
    "arabic": "لَمْ أَعُدْ أَسْتَطِيعُ الْقِرَاءَةَ فَقَطْ تَعِبَتْ قَدَمِي",
    "segs": [
      { "ar": "لَمْ أَعُدْ أَسْتَطِيعُ الْقِرَاءَةَ", "uz": "endi o'qiy olmayapman" },
      { "ar": "فَقَطْ تَعِبَتْ قَدَمِي", "uz": "shunchaki oyog'im charchadi" }
    ],
    "full_uz": "Endi o'qiy olmayapman, shunchaki oyog'im charchadi.",
    "note": null
  },
  {
    "num": 6,
    "time": "00:01:15,120 --> 00:01:19,859",
    "arabic": "سِيمْكَا نُولِيكْ شَيْءٌ مَا يُصْدِرُ صَوْتًا هُنَا",
    "segs": [
      { "ar": "سِيمْكَا نُولِيكْ", "uz": "Simka, Nolik" },
      { "ar": "شَيْءٌ مَا يُصْدِرُ صَوْتًا هُنَا", "uz": "bu yerda biror narsa tovush chiqaryapti" }
    ],
    "full_uz": "Simka, Nolik, bu yerda biror narsa tovush chiqaryapti.",
    "note": null
  },
  {
    "num": 7,
    "time": "00:01:19,859 --> 00:01:21,200",
    "arabic": "أَيْنَ؟",
    "segs": null,
    "full_uz": "Qayerda?",
    "note": null
  },
  {
    "num": 8,
    "time": "00:01:21,200 --> 00:01:23,060",
    "arabic": "فِي مَكْتَبِ وَالِدِي",
    "segs": null,
    "full_uz": "Dadamning ish xonasida.",
    "note": null
  },
  {
    "num": 9,
    "time": "00:01:23,060 --> 00:01:24,140",
    "arabic": "عَلَى مَكْتَبِهِ",
    "segs": null,
    "full_uz": "Uning stolida.",
    "note": null
  },
  {
    "num": 10,
    "time": "00:01:24,140 --> 00:01:26,180",
    "arabic": "إِنَّهُ دَاخِلَ الْعُلْبَةِ الْخَشَبِيَّةِ",
    "segs": null,
    "full_uz": "U yog'och qutichaning ichida.",
    "note": null
  },
  {
    "num": 11,
    "time": "00:01:26,180 --> 00:01:28,879",
    "arabic": "إِذَنْ قَدْ يَكُونُ فَأْرًا",
    "segs": null,
    "full_uz": "Demak, bu sichqon bo'lishi mumkin.",
    "note": null
  },
  {
    "num": 12,
    "time": "00:01:28,879 --> 00:01:30,520",
    "arabic": "ابْقَ هُنَا يَا تُومْ",
    "segs": null,
    "full_uz": "Shu yerda qol, Tom.",
    "note": null
  },
  {
    "num": 13,
    "time": "00:01:30,520 --> 00:01:33,120",
    "arabic": "سَنَذْهَبُ أَنَا وَنُولِيكْ لِنَتَحَقَّقَ هَذَا الْأَمْرَ",
    "segs": null,
    "full_uz": "Men va Nolik borib buni tekshiramiz,",
    "note": null
  },
  {
    "num": 14,
    "time": "00:01:33,120 --> 00:01:39,120",
    "arabic": "إِنْ كَانَ هُنَاكَ فَأْرًا حَقًّا",
    "segs": null,
    "full_uz": "agar u haqiqatan sichqon bo'lsa.",
    "note": null
  },
  {
    "num": 15,
    "time": "00:01:39,120 --> 00:01:41,420",
    "arabic": "فَكَيْفَ سَنُخْرِجُهُ؟",
    "segs": null,
    "full_uz": "Uni qanday chiqaramiz?",
    "note": null
  },
  {
    "num": 16,
    "time": "00:01:41,420 --> 00:01:43,980",
    "arabic": "هَذِهِ قَوَارِضُ كَبِيرَةٌ جِدًّا يَا سِيمْكَا",
    "segs": null,
    "full_uz": "Bular juda katta kemiruvchilar, Simka.",
    "note": null
  },
  {
    "num": 17,
    "time": "00:01:43,980 --> 00:01:46,579",
    "arabic": "وَلِمَ قَرَأْتُ لَكَ ذَلِكَ الْكِتَابَ؟",
    "segs": null,
    "full_uz": "Nega senga o'sha kitobni o'qib berdim ekan?",
    "note": null
  },
  {
    "num": 18,
    "time": "00:01:46,579 --> 00:01:47,200",
    "arabic": "هَا؟",
    "segs": null,
    "full_uz": "Ha?",
    "note": null
  },
  {
    "num": 19,
    "time": "00:01:47,840 --> 00:01:50,879",
    "arabic": "أَخْرِجْ نَايًا وَاعْزِفْ لَحْنًا لِتُهْرِبَ الْفِئْرَانَ",
    "segs": [
      { "ar": "أَخْرِجْ نَايًا", "uz": "nay chiqar" },
      { "ar": "وَاعْزِفْ لَحْنًا لِتُهْرِبَ الْفِئْرَانَ", "uz": "va sichqonlarni qochirish uchun kuy chal" }
    ],
    "full_uz": "Nay chiqar va sichqonlarni qochirish uchun kuy chal.",
    "note": null
  },
  {
    "num": 20,
    "time": "00:01:50,879 --> 00:01:53,099",
    "arabic": "وَلَكِنْ مِنْ أَيْنَ سَآتِي بِالنَّايِ؟",
    "segs": null,
    "full_uz": "Lekin nayni qayerdan topaman?",
    "note": null
  },
  {
    "num": 21,
    "time": "00:01:53,099 --> 00:01:53,879",
    "arabic": "سَنَصْنَعُ وَاحِدًا",
    "segs": null,
    "full_uz": "Bitta yasaymiz.",
    "note": null
  },
  {
    "num": 22,
    "time": "00:01:55,539 --> 00:01:57,879",
    "arabic": "أَفَهِمْتَ؟",
    "segs": null,
    "full_uz": "Tushundingmi?",
    "note": null
  },
  {
    "num": 23,
    "time": "00:01:58,640 --> 00:02:00,019",
    "arabic": "نَعَمْ فَهِمْتُ",
    "segs": null,
    "full_uz": "Ha, tushundim.",
    "note": null
  },
  {
    "num": 24,
    "time": "00:02:00,019 --> 00:02:00,879",
    "arabic": "انْتَظِرْ لَحْظَةً",
    "segs": null,
    "full_uz": "Bir daqiqa kut.",
    "note": null
  },
  {
    "num": 25,
    "time": "00:02:01,659 --> 00:02:02,879",
    "arabic": "لِنَقْتَرِبْ قَلِيلًا",
    "segs": null,
    "full_uz": "Biroz yaqinlashaylik.",
    "note": null
  },
  {
    "num": 26,
    "time": "00:02:06,319 --> 00:02:12,180",
    "arabic": "أَرَأَيْتَ؟",
    "segs": null,
    "full_uz": "Ko'rdingmi?",
    "note": null
  },
  {
    "num": 27,
    "time": "00:02:12,180 --> 00:02:13,479",
    "arabic": "كَمَا قُلْتُ لَكَ مِنْ قَبْلُ",
    "segs": null,
    "full_uz": "Senga avval aytganimdek,",
    "note": null
  },
  {
    "num": 28,
    "time": "00:02:13,479 --> 00:02:15,039",
    "arabic": "لَمْ يَعُدْ هُنَاكَ فِئْرَانٌ",
    "segs": null,
    "full_uz": "endi sichqonlar yo'q.",
    "note": null
  },
  {
    "num": 29,
    "time": "00:02:15,039 --> 00:02:17,659",
    "arabic": "لِنَعْزِفْ أَكْثَرَ حَتَّى لَا تَعُودَ الْفِئْرَانُ",
    "segs": null,
    "full_uz": "Sichqonlar qaytmasligi uchun yana chalaylik.",
    "note": null
  },
  {
    "num": 30,
    "time": "00:02:17,659 --> 00:02:17,879",
    "arabic": "حَسَنًا",
    "segs": null,
    "full_uz": "Xo'p.",
    "note": null
  },
  {
    "num": 31,
    "time": "00:02:17,879 --> 00:02:21,639",
    "arabic": "إِذَنْ أَنْتُمَا مَنْ كَانَ يَعْبَثُ هُنَا",
    "segs": null,
    "full_uz": "Demak, bu yerda o'ynab yurgan sizlar ekansizlar.",
    "note": null
  },
  {
    "num": 32,
    "time": "00:02:21,639 --> 00:02:23,340",
    "arabic": "هَا؟",
    "segs": null,
    "full_uz": "Ha?",
    "note": null
  },
  {
    "num": 33,
    "time": "00:02:23,340 --> 00:02:25,259",
    "arabic": "جْرَانْبُوسْ هَذَا أَنْتَ؟",
    "segs": null,
    "full_uz": "Granbos, bu senmisan?",
    "note": null
  },
  {
    "num": 34,
    "time": "00:02:25,259 --> 00:02:27,240",
    "arabic": "طُولَ النَّهَارِ لَمْ أَسْتَطِعْ أَنْ أُنْجِزَ عَمَلِي",
    "segs": null,
    "full_uz": "Kun bo'yi ishimni tugata olmadim,",
    "note": null
  },
  {
    "num": 35,
    "time": "00:02:27,240 --> 00:02:29,740",
    "arabic": "مُنْذُ الصَّبَاحِ حَاوَلَ أَحَدُهُمْ فَتْحَ الْغِطَاءِ",
    "segs": null,
    "full_uz": "ertalabdan beri kimdir qopqoqni ochishga urinardi,",
    "note": null
  },
  {
    "num": 36,
    "time": "00:02:29,740 --> 00:02:31,960",
    "arabic": "وَالْآنَ أَنْتُمَا تُصَفِّرَانِ هُنَا",
    "segs": null,
    "full_uz": "endi esa sizlar bu yerda hushtak chalyapsizlar.",
    "note": null
  },
  {
    "num": 37,
    "time": "00:02:31,960 --> 00:02:34,039",
    "arabic": "كَانَتْ هَذِهِ فِكْرَةَ سِيمْكَا",
    "segs": null,
    "full_uz": "Bu Simkaning fikri edi,",
    "note": null
  },
  {
    "num": 38,
    "time": "00:02:34,039 --> 00:02:35,840",
    "arabic": "لِأَنَّكَ خَائِفٌ مِنَ الْفِئْرَانِ",
    "segs": null,
    "full_uz": "chunki sen sichqonlardan qo'rqasan.",
    "note": null
  },
  {
    "num": 39,
    "time": "00:02:35,840 --> 00:02:39,159",
    "arabic": "رَائِعٌ مَا هَذِهِ الْآلَةُ",
    "segs": [
      { "ar": "رَائِعٌ", "uz": "ajoyib" },
      { "ar": "مَا هَذِهِ الْآلَةُ", "uz": "bu qanaqa asbob" }
    ],
    "full_uz": "Ajoyib, bu qanaqa asbob?",
    "note": null
  },
  {
    "num": 40,
    "time": "00:02:39,159 --> 00:02:41,819",
    "arabic": "مَاذَا تَظُنُّهَا يَا نُولِيكْ؟",
    "segs": null,
    "full_uz": "Nolik, sen nima deb o'ylaysan?",
    "note": null
  },
  {
    "num": 41,
    "time": "00:02:41,819 --> 00:02:43,939",
    "arabic": "مَطْحَنَةُ قَهْوَةٍ؟",
    "segs": null,
    "full_uz": "Qahva tegirmonimi?",
    "note": null
  },
  {
    "num": 42,
    "time": "00:02:43,939 --> 00:02:44,240",
    "arabic": "لَا",
    "segs": null,
    "full_uz": "Yo'q.",
    "note": null
  },
  {
    "num": 43,
    "time": "00:02:44,240 --> 00:02:46,219",
    "arabic": "إِذَنْ مِثْقَبٌ",
    "segs": null,
    "full_uz": "Unda burg'i.",
    "note": null
  },
  {
    "num": 44,
    "time": "00:02:46,219 --> 00:02:47,219",
    "arabic": "لَا",
    "segs": null,
    "full_uz": "Yo'q.",
    "note": null
  },
  {
    "num": 45,
    "time": "00:02:47,219 --> 00:02:50,699",
    "arabic": "حَكَّاكَةُ أَقْدَامٍ؟",
    "segs": null,
    "full_uz": "Oyoq qashovmi?",
    "note": null
  },
  {
    "num": 46,
    "time": "00:02:50,699 --> 00:02:51,759",
    "arabic": "مَاذَا؟",
    "segs": null,
    "full_uz": "Nima?",
    "note": null
  },
  {
    "num": 47,
    "time": "00:02:51,759 --> 00:02:53,860",
    "arabic": "حَسَنًا آلَةُ تَحُكُّ الْأَقْدَامَ",
    "segs": null,
    "full_uz": "Xo'p, oyoqni qashiydigan asbob.",
    "note": null
  },
  {
    "num": 48,
    "time": "00:02:53,860 --> 00:02:56,719",
    "arabic": "أَنْتَ لَا تَتَوَقَّفُ عَنِ الْمِزَاحِ",
    "segs": null,
    "full_uz": "Sen hazil qilishdan to'xtamaysan.",
    "note": null
  },
  {
    "num": 49,
    "time": "00:02:56,719 --> 00:03:00,259",
    "arabic": "إِنَّهَا صُنْدُوقُ مُوسِيقَى وَهِيَ رَائِعَةٌ جِدًّا",
    "segs": [
      { "ar": "إِنَّهَا صُنْدُوقُ مُوسِيقَى", "uz": "bu musiqa quticha" },
      { "ar": "وَهِيَ رَائِعَةٌ جِدًّا", "uz": "va u juda ajoyib" }
    ],
    "full_uz": "Bu musiqa quticha, va u juda ajoyib.",
    "note": null
  },
  {
    "num": 50,
    "time": "00:03:00,259 --> 00:03:05,259",
    "arabic": "لَقَدْ تَمَّ اخْتِرَاعُ صَنَادِيقِ الْمُوسِيقَى قَبْلَ مِئَتَيْ عَامٍ",
    "segs": null,
    "full_uz": "Musiqa quticharlar ikki yuz yil oldin ixtiro qilingan,",
    "note": null
  },
  {
    "num": 51,
    "time": "00:03:05,259 --> 00:03:08,460",
    "arabic": "وَتَحْوِي فِي الْعَادَةِ أُسْطُوَانَةً ذَاتَ نُتُوءَاتٍ بَارِزَةٍ",
    "segs": null,
    "full_uz": "va odatda ular bo'rtiq shishaklari bo'lgan silindrga ega bo'ladi,",
    "note": null
  },
  {
    "num": 52,
    "time": "00:03:08,460 --> 00:03:13,400",
    "arabic": "وَأَمَامَ تِلْكَ الْأُسْطُوَانَةِ مُشْطٌ ذُو أَسْنَانٍ مَعْدِنِيَّةٍ بِأَطْوَالٍ مُخْتَلِفَةٍ",
    "segs": null,
    "full_uz": "va o'sha silindr oldida turli uzunlikdagi metall tishlari bo'lgan taroq joylashadi.",
    "note": null
  },
  {
    "num": 53,
    "time": "00:03:13,400 --> 00:03:17,780",
    "arabic": "فَإِذَا مَا نُقِرَتْ عَلَى أَحَدِ الْأَسْنَانِ فَإِنَّهَا تُصْدِرُ صَوْتًا جَمِيلًا",
    "segs": null,
    "full_uz": "Agar tishlardan biriga urilsa, u chiroyli ovoz chiqaradi,",
    "note": null
  },
  {
    "num": 54,
    "time": "00:03:17,780 --> 00:03:22,640",
    "arabic": "الْأَسْنَانُ الْقَصِيرَةُ تُصْدِرُ أَصْوَاتًا أَعْلَى وَالطَّوِيلَةُ تُصْدِرُ أَصْوَاتًا أَخْفَضَ",
    "segs": [
      { "ar": "الْأَسْنَانُ الْقَصِيرَةُ تُصْدِرُ أَصْوَاتًا أَعْلَى", "uz": "qisqa tishlar balandroq ovoz chiqaradi" },
      { "ar": "وَالطَّوِيلَةُ تُصْدِرُ أَصْوَاتًا أَخْفَضَ", "uz": "uzunlari esa pastroq ovoz chiqaradi" }
    ],
    "full_uz": "Qisqa tishlar balandroq ovoz, uzunlari esa pastroq ovoz chiqaradi.",
    "note": null
  },
  {
    "num": 55,
    "time": "00:03:22,640 --> 00:03:27,780",
    "arabic": "عِنْدَمَا تَدُورُ الْأُسْطُوَانَةُ تَنْقُرُ النُّتُوءَاتُ عَلَى الْأَسْنَانِ وَتُصْدِرُ الْمُوسِيقَى",
    "segs": [
      { "ar": "عِنْدَمَا تَدُورُ الْأُسْطُوَانَةُ", "uz": "silindr aylanganda" },
      { "ar": "تَنْقُرُ النُّتُوءَاتُ عَلَى الْأَسْنَانِ وَتُصْدِرُ الْمُوسِيقَى", "uz": "bo'rtiqlar tishlarga urilib, musiqa chiqaradi" }
    ],
    "full_uz": "Silindr aylanganda, bo'rtiqlar tishlarga urilib, musiqa chiqaradi.",
    "note": null
  },
  {
    "num": 56,
    "time": "00:03:27,780 --> 00:03:31,400",
    "arabic": "إِنَّهُ صُنْدُوقُ الْمُوسِيقَى",
    "segs": null,
    "full_uz": "Bu — musiqa quticha.",
    "note": null
  },
  {
    "num": 57,
    "time": "00:03:32,360 --> 00:03:35,400",
    "arabic": "إِذَنْ مَا الْمُعَطَّلُ هُنَا؟",
    "segs": null,
    "full_uz": "Demak, bu yerda nima buzilgan?",
    "note": null
  },
  {
    "num": 58,
    "time": "00:03:35,960 --> 00:03:37,640",
    "arabic": "خَرَجَ النَّابِضُ مِنْ مَكَانِهِ",
    "segs": null,
    "full_uz": "Prujina o'z joyidan chiqib ketgan,",
    "note": null
  },
  {
    "num": 59,
    "time": "00:03:37,640 --> 00:03:40,400",
    "arabic": "عَلَيْنَا أَنْ نُعِيدَهُ إِلَى مَكَانِهِ الصَّحِيحِ",
    "segs": null,
    "full_uz": "uni o'z joyiga qaytarib qo'yishimiz kerak.",
    "note": null
  },
  {
    "num": 60,
    "time": "00:03:41,219 --> 00:03:42,099",
    "arabic": "أَلَمْ تَنْتَهِيَا بَعْدُ؟",
    "segs": null,
    "full_uz": "Hali tugatmadinglarmi?",
    "note": null
  },
  {
    "num": 61,
    "time": "00:03:43,400 --> 00:03:53,800",
    "arabic": "حَسَنًا لَقَدِ انْتَهَيْنَا",
    "segs": null,
    "full_uz": "Xo'p, tugatdik.",
    "note": null
  },
  {
    "num": 62,
    "time": "00:03:53,800 --> 00:03:56,400",
    "arabic": "لِمَاذَا لَا تَعْزِفُ الْمُوسِيقَى؟",
    "segs": null,
    "full_uz": "Nega musiqa chalinmayapti?",
    "note": null
  },
  {
    "num": 63,
    "time": "00:03:58,040 --> 00:04:01,120",
    "arabic": "عَلَيْكَ أَنْ تُدِيرَ النَّابِضَةَ أَوَّلًا بِاسْتِعْمَالِ الْمِفْتَاحِ",
    "segs": null,
    "full_uz": "Avval kalit yordamida prujinani burashing kerak.",
    "note": null
  },
  {
    "num": 64,
    "time": "00:04:01,120 --> 00:04:04,360",
    "arabic": "تِدِيشْ أَعْلَمُ مَنْ يَسْتَطِيعُ إِدَارَتَهُ",
    "segs": [
      { "ar": "تِدِيشْ", "uz": "tidish" },
      { "ar": "أَعْلَمُ مَنْ يَسْتَطِيعُ إِدَارَتَهُ", "uz": "buni kim aylantira olishini bilaman" }
    ],
    "full_uz": "Tidish, buni kim aylantira olishini bilaman.",
    "note": null
  },
  {
    "num": 65,
    "time": "00:04:04,360 --> 00:04:09,240",
    "arabic": "حَسَنًا يَا تُومْ أَيُمْكِنُكَ أَنْ تُخَمِّنَ مَا هَذِهِ الْآلَةُ؟",
    "segs": [
      { "ar": "حَسَنًا يَا تُومْ", "uz": "xo'sh, Tom" },
      { "ar": "أَيُمْكِنُكَ أَنْ تُخَمِّنَ مَا هَذِهِ الْآلَةُ", "uz": "bu qanday asbob ekanini taxmin qila olasanmi" }
    ],
    "full_uz": "Xo'sh, Tom, bu qanday asbob ekanini taxmin qila olasanmi?",
    "note": null
  },
  {
    "num": 66,
    "time": "00:04:09,240 --> 00:04:10,319",
    "arabic": "مِطْحَنَةٌ؟",
    "segs": null,
    "full_uz": "Tegirmonmi?",
    "note": null
  },
  {
    "num": 67,
    "time": "00:04:10,319 --> 00:04:10,640",
    "arabic": "لَا",
    "segs": null,
    "full_uz": "Yo'q.",
    "note": null
  },
  {
    "num": 68,
    "time": "00:04:10,640 --> 00:04:12,520",
    "arabic": "جِهَازُ تَثْقِيبٍ؟",
    "segs": null,
    "full_uz": "Teshuvchi asbobmi?",
    "note": null
  },
  {
    "num": 69,
    "time": "00:04:12,520 --> 00:04:15,760",
    "arabic": "دُعَابَةٌ جَمِيلَةٌ، لَا تَقُلْ إِنَّهَا حَكَّاكَةُ أَقْدَامٍ",
    "segs": [
      { "ar": "دُعَابَةٌ جَمِيلَةٌ", "uz": "chiroyli hazil" },
      { "ar": "لَا تَقُلْ إِنَّهَا حَكَّاكَةُ أَقْدَامٍ", "uz": "endi bu oyoq qashov deb aytma" }
    ],
    "full_uz": "Chiroyli hazil, endi bu oyoq qashov deb aytma.",
    "note": null
  },
  {
    "num": 70,
    "time": "00:04:15,760 --> 00:04:16,699",
    "arabic": "إِذَنْ لَا أَعْلَمُ",
    "segs": null,
    "full_uz": "Unda bilmayman.",
    "note": null
  },
  {
    "num": 71,
    "time": "00:04:16,699 --> 00:04:19,519",
    "arabic": "حَسَنًا، أَرْبِطْهُ بِهَذَا الْمِفْتَاحِ لِتَكْتَشِفَ",
    "segs": null,
    "full_uz": "Xo'p, bilib olish uchun buni shu kalit bilan ulab ko'r.",
    "note": null
  },
  {
    "num": 72,
    "time": "00:04:20,300 --> 00:04:33,019",
    "arabic": "أَتَعْلَمُ كَيْفَ تُصْدِرُ الْأَصْوَاتُ الْعَالِيَةُ وَالْمُنْخَفِضَةُ؟",
    "segs": null,
    "full_uz": "Baland va past ovozlar qanday hosil bo'lishini bilasanmi?",
    "note": null
  },
  {
    "num": 73,
    "time": "00:04:33,019 --> 00:04:35,519",
    "arabic": "ضَعْ مِسْطَرَةً عَلَى حَافَّةِ الْمِنْضَدَةِ",
    "segs": null,
    "full_uz": "Chizg'ichni stol chekkasiga qo'y,",
    "note": null
  },
  {
    "num": 74,
    "time": "00:04:35,519 --> 00:04:37,480",
    "arabic": "وَثَبِّتْ إِحْدَى نِهَايَتَيْهَا",
    "segs": null,
    "full_uz": "bir uchini mahkamlab qo'y,",
    "note": null
  },
  {
    "num": 75,
    "time": "00:04:37,480 --> 00:04:39,860",
    "arabic": "وَانْقُرْ عَلَى الْأُخْرَى",
    "segs": null,
    "full_uz": "va ikkinchisini urib ko'r.",
    "note": null
  },
  {
    "num": 76,
    "time": "00:04:39,860 --> 00:04:42,100",
    "arabic": "كُلَّمَا جَعَلْتَ الْقِسْمَ الْبَارِزَ أَقْصَرَ",
    "segs": null,
    "full_uz": "Bo'rtib chiqqan qismni qisqartirgan sari,",
    "note": null
  },
  {
    "num": 77,
    "time": "00:04:42,519 --> 00:04:43,579",
    "arabic": "كَانَ الصَّوْتُ أَعْلَى",
    "segs": null,
    "full_uz": "ovoz shunchalik balandlashadi.",
    "note": null
  },
  {
    "num": 78,
    "time": "00:04:43,579 --> 00:04:47,219",
    "arabic": "وَهَكَذَا تَعْمَلُ الْأَسْنَانُ دَاخِلَ صُنْدُوقِ الْمُوسِيقَى",
    "segs": null,
    "full_uz": "Musiqa quticha ichidagi tishlar ham shunday ishlaydi,",
    "note": null
  },
  {
    "num": 79,
    "time": "00:04:47,219 --> 00:04:49,620",
    "arabic": "وَالْأَجْرَاسُ تَعْمَلُ بِالطَّرِيقَةِ نَفْسِهَا",
    "segs": null,
    "full_uz": "qo'ng'iroqlar ham xuddi shunday ishlaydi —",
    "note": null
  },
  {
    "num": 80,
    "time": "00:04:49,620 --> 00:04:52,219",
    "arabic": "كُلَّمَا صَغُرَ الْجَرَسُ عَلَى رَنِينِهِ",
    "segs": null,
    "full_uz": "qo'ng'iroq kichraygan sari uning jiringlashi ham o'zgaradi.",
    "note": null
  },
  {
    "num": 81,
    "time": "00:04:52,219 --> 00:04:56,819",
    "arabic": "الْجِيتَارُ أَوِ الْكَمَانُ يَعْتَمِدَانِ عَلَى مَدَى سُخُونَةِ الْأَوْتَارِ",
    "segs": null,
    "full_uz": "Gitara yoki skripka torlarning qalinligiga bog'liq,",
    "note": "Bu yerda «سُخُونَة» so'zi torning qalinligi/yo'g'onligi ma'nosida ishlatilgan bo'lishi mumkin, tarjima shunga ko'ra berildi."
  },
  {
    "num": 82,
    "time": "00:04:56,819 --> 00:04:59,500",
    "arabic": "الْأَوْتَارُ السَّخِينَةُ لِأَصْوَاتٍ أَخْفَضَ",
    "segs": null,
    "full_uz": "yo'g'on torlar — pastroq ovozlar uchun,",
    "note": null
  },
  {
    "num": 83,
    "time": "00:04:59,500 --> 00:05:01,919",
    "arabic": "وَالْأَوْتَارُ الدَّقِيقَةُ لِأَصْوَاتٍ أَعْلَى",
    "segs": null,
    "full_uz": "ingichka torlar esa balandroq ovozlar uchun,",
    "note": null
  },
  {
    "num": 84,
    "time": "00:05:01,919 --> 00:05:04,120",
    "arabic": "وَشَدُّ الْأَوْتَارِ يُحْدِثُ فَارِقًا فِي الصَّوْتِ",
    "segs": null,
    "full_uz": "va torlarning tarangligi ham ovozga farq qiladi.",
    "note": null
  },
  {
    "num": 85,
    "time": "00:05:04,120 --> 00:05:06,799",
    "arabic": "خُذْ قِطْعَةَ حَبْلٍ أَوْ مَطَّاطَةٍ",
    "segs": null,
    "full_uz": "Bir bo'lak arqon yoki rezina ol,",
    "note": null
  },
  {
    "num": 86,
    "time": "00:05:06,799 --> 00:05:09,099",
    "arabic": "اِرْبِطْ إِحْدَى النِّهَايَتَيْنِ بِمَقْبَضِ الْبَابِ",
    "segs": null,
    "full_uz": "bir uchini eshik dastagiga bog'la,",
    "note": null
  },
  {
    "num": 87,
    "time": "00:05:09,099 --> 00:05:11,219",
    "arabic": "وَشُدَّ النِّهَايَةَ الْأُخْرَى بِإِحْدَى يَدَيْكَ",
    "segs": null,
    "full_uz": "ikkinchi uchini esa bir qo'ling bilan torty,",
    "note": null
  },
  {
    "num": 88,
    "time": "00:05:11,220 --> 00:05:13,300",
    "arabic": "ثُمَّ انْقُرْ عَلَى الْحَبْلِ بِيَدِكَ الْأُخْرَى",
    "segs": null,
    "full_uz": "so'ng ikkinchi qo'ling bilan arqonni chertib ko'r.",
    "note": null
  },
  {
    "num": 89,
    "time": "00:05:13,300 --> 00:05:15,540",
    "arabic": "كُلَّمَا ازْدَادَ الشَّدُّ عَلَى الْحَبْلِ عَلَى الصَّوْتِ",
    "segs": null,
    "full_uz": "Arqonni qanchalik ko'proq tortsang, ovoz shunchalik o'zgaradi,",
    "note": null
  },
  {
    "num": 90,
    "time": "00:05:15,540 --> 00:05:18,220",
    "arabic": "وَإِنْ أَرَدْتَ يُمْكِنُكَ أَنْ تَعْزِفَ",
    "segs": null,
    "full_uz": "va agar xohlasang, hatto chalishing ham mumkin.",
    "note": null
  },
  {
    "num": 91,
    "time": "00:05:18,860 --> 00:05:23,220",
    "arabic": "لَقَدْ فَهِمْتُ الْآنَ إِنَّهَا مُشَغِّلٌ قَدِيمٌ لِلْمُوسِيقَى",
    "segs": [
      { "ar": "لَقَدْ فَهِمْتُ الْآنَ", "uz": "endi tushundim" },
      { "ar": "إِنَّهَا مُشَغِّلٌ قَدِيمٌ لِلْمُوسِيقَى", "uz": "bu qadimiy musiqa pleyeri ekan" }
    ],
    "full_uz": "Endi tushundim, bu qadimiy musiqa pleyeri ekan.",
    "note": null
  },
  {
    "num": 92,
    "time": "00:05:23,740 --> 00:05:27,600",
    "arabic": "هَذَا قَرِيبٌ لَكِنْ يُسَمُّونَهَا بِصُنْدُوقِ الْمُوسِيقَى",
    "segs": [
      { "ar": "هَذَا قَرِيبٌ", "uz": "bu yaqinroq" },
      { "ar": "لَكِنْ يُسَمُّونَهَا بِصُنْدُوقِ الْمُوسِيقَى", "uz": "lekin uni musiqa quticha deb atashadi" }
    ],
    "full_uz": "Bu yaqinroq, lekin uni musiqa quticha deb atashadi.",
    "note": null
  },
  {
    "num": 93,
    "time": "00:05:27,600 --> 00:05:31,280",
    "arabic": "هَذَا مَا قُلْتُهُ إِذَنْ مَاذَا كَانَ فِي دَاخِلِهِ؟",
    "segs": [
      { "ar": "هَذَا مَا قُلْتُهُ", "uz": "men ham shuni aytdim" },
      { "ar": "إِذَنْ مَاذَا كَانَ فِي دَاخِلِهِ", "uz": "xo'sh, uning ichida nima bo'lgan edi" }
    ],
    "full_uz": "Men ham shuni aytdim, xo'sh, uning ichida nima bo'lgan edi?",
    "note": null
  },
  {
    "num": 94,
    "time": "00:05:31,280 --> 00:05:32,240",
    "arabic": "نَابِضٌ مَكْسُورٌ",
    "segs": null,
    "full_uz": "Sinib qolgan prujina.",
    "note": null
  },
  {
    "num": 95,
    "time": "00:05:32,240 --> 00:05:34,560",
    "arabic": "هَذَا لَيْسَ مَا أُرِيدُ مَعْرِفَتَهُ",
    "segs": null,
    "full_uz": "Bilmoqchi bo'lganim bu emas edi.",
    "note": null
  },
  {
    "num": 96,
    "time": "00:05:34,560 --> 00:05:36,220",
    "arabic": "مَنْ كَانَ يَتَحَرَّكُ هُنَاكَ؟",
    "segs": null,
    "full_uz": "U yerda kim harakatlanayotgan edi?",
    "note": null
  },
  {
    "num": 97,
    "time": "00:05:36,740 --> 00:05:40,020",
    "arabic": "لِنَقُلْ نَحْنُ كُنَّا هُنَاكَ يَا تُومْ",
    "segs": null,
    "full_uz": "Aytaylik, biz u yerda edik, Tom.",
    "note": null
  },
  {
    "num": 98,
    "time": "00:05:40,019 --> 00:05:42,019",
    "arabic": "لَا تَبُحْ بِالسِّرِّ، اتَّفَقْنَا؟",
    "segs": [
      { "ar": "لَا تَبُحْ بِالسِّرِّ", "uz": "sirni oshkor qilma" },
      { "ar": "اتَّفَقْنَا", "uz": "kelishdikmi" }
    ],
    "full_uz": "Sirni oshkor qilma, kelishdikmi?",
    "note": null
  },
  {
    "num": 99,
    "time": "00:05:42,019 --> 00:05:42,779",
    "arabic": "شُششش",
    "segs": null,
    "full_uz": "Sh-sh-sh.",
    "note": null
  }
];
if (typeof module !== "undefined" && module.exports) {
  module.exports = lessons;
}
