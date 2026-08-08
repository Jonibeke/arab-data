const lessons = [
  {
    "num": 1,
    "time": "00:00:02,740 --> 00:00:09,820",
    "arabic": "نُولِكُ، أَنْتَ هُنَا؟",
    "segs": [
      {
        "ar": "نُولِكُ",
        "uz": "Nolik"
      },
      {
        "ar": "أَنْتَ هُنَا؟",
        "uz": "sen shu yerdamisan?"
      }
    ],
    "full_uz": "Nolik, sen shu yerdamisan?",
    "note": null
  },
  {
    "num": 2,
    "time": "00:00:09,820 --> 00:00:11,980",
    "arabic": "نَعَمْ، أَنَا هُنَا",
    "segs": [
      {
        "ar": "نَعَمْ",
        "uz": "Ha"
      },
      {
        "ar": "أَنَا هُنَا",
        "uz": "men shu yerdaman"
      }
    ],
    "full_uz": "Ha, men shu yerdaman.",
    "note": null
  },
  {
    "num": 3,
    "time": "00:00:11,980 --> 00:00:16,780",
    "arabic": "لَدَيَّ خُدْعَةٌ رَائِعَةٌ",
    "segs": [
      {
        "ar": "لَدَيَّ",
        "uz": "Menda"
      },
      {
        "ar": "خُدْعَةٌ رَائِعَةٌ",
        "uz": "ajoyib fokus bor"
      }
    ],
    "full_uz": "Menda ajoyib fokus bor.",
    "note": "خُدْعَةٌ — fokus, hiyla."
  },
  {
    "num": 4,
    "time": "00:00:17,260 --> 00:00:52,320",
    "arabic": "كَانَ ذَلِكَ شَيْئًا عَجِيبًا حَقًّا، هَلْ تَعَلَّمْتَهُ بِسُرْعَةٍ؟",
    "segs": [
      {
        "ar": "كَانَ ذَلِكَ شَيْئًا عَجِيبًا حَقًّا",
        "uz": "Bu rostdan ham ajoyib narsa edi."
      },
      {
        "ar": "هَلْ تَعَلَّمْتَهُ بِسُرْعَةٍ؟",
        "uz": "Uni juda tez o'rgandingmi?"
      }
    ],
    "full_uz": "Bu rostdan ham ajoyib edi. Uni juda tez o'rgandingmi?",
    "note": null
  },
  {
    "num": 5,
    "time": "00:00:55,360 --> 00:00:58,680",
    "arabic": "لَا، لَيْسَتْ هَذِهِ، إِنَّهَا خُدْعَةٌ بِالْهِلْيُومِ",
    "segs": [
      {
        "ar": "لَا، لَيْسَتْ هَذِهِ",
        "uz": "Yo'q, bu emas."
      },
      {
        "ar": "إِنَّهَا خُدْعَةٌ بِالْهِلْيُومِ",
        "uz": "Bu geliy bilan qilinadigan fokus."
      }
    ],
    "full_uz": "Yo'q, bu emas. Bu geliy bilan qilinadigan fokus.",
    "note": "الْهِلْيُومُ — geliy."
  },
  {
    "num": 6,
    "time": "00:00:58,680 --> 00:00:59,940",
    "arabic": "مَا مَعْنَى الْهِلْيُومِ؟",
    "segs": [
      {
        "ar": "مَا مَعْنَى",
        "uz": "Nima degani"
      },
      {
        "ar": "الْهِلْيُومِ؟",
        "uz": "geliy?"
      }
    ],
    "full_uz": "Geliy nima degani?",
    "note": null
  },
  {
    "num": 7,
    "time": "00:00:59,940 --> 00:01:05,260",
    "arabic": "الْهِلْيُومُ هُوَ غَازٌ خَفِيفٌ جِدًّا، تُمْلَأُ النَّفَّاخَةُ بِالْهِلْيُومِ فَتَعْلُو",
    "segs": [
      {
        "ar": "الْهِلْيُومُ هُوَ غَازٌ خَفِيفٌ جِدًّا",
        "uz": "Geliy juda yengil gaz."
      },
      {
        "ar": "تُمْلَأُ النَّفَّاخَةُ بِالْهِلْيُومِ",
        "uz": "Shar geliy bilan to'ldirilsa,"
      },
      {
        "ar": "فَتَعْلُو",
        "uz": "yuqoriga ko'tariladi."
      }
    ],
    "full_uz": "Geliy juda yengil gaz. Shar geliy bilan to'ldirilsa, yuqoriga ko'tariladi.",
    "note": "النَّفَّاخَةُ — shar."
  },
  {
    "num": 8,
    "time": "00:01:05,260 --> 00:02:24,150",
    "arabic": "هَذِهِ لَيْسَتْ بِخُدْعَةٍ فِيمَا أَرَى، مَنْ لَمْ يَرَ نَفَّاخَةً تَعْلُو مِنْ قَبْلُ؟",
    "segs": [
      {
        "ar": "هَذِهِ لَيْسَتْ بِخُدْعَةٍ فِيمَا أَرَى",
        "uz": "Menimcha, bu fokus emas."
      },
      {
        "ar": "مَنْ لَمْ يَرَ نَفَّاخَةً تَعْلُو مِنْ قَبْلُ؟",
        "uz": "Oldin yuqoriga ko'tarilgan sharni kim ko'rmagan?"
      }
    ],
    "full_uz": "Menimcha, bu fokus emas. Axir oldin yuqoriga ko'tarilgan sharni kim ko'rmagan?",
    "note": null
  },
  {
    "num": 9,
    "time": "00:02:24,150 --> 00:02:58,550",
    "arabic": "الْخُدْعَةُ لَيْسَتْ طَيَرَانَ النَّفَّاخَةِ، أَنَا أَحْتَاجُ إِلَى الْغَازِ، كَيْفَ سَأَسْتَطِيعُ إِنْزَالَهَا؟",
    "segs": [
      {
        "ar": "الْخُدْعَةُ لَيْسَتْ طَيَرَانَ النَّفَّاخَةِ",
        "uz": "Fokus sharning uchishida emas."
      },
      {
        "ar": "أَنَا أَحْتَاجُ إِلَى الْغَازِ",
        "uz": "Menga gaz kerak."
      },
      {
        "ar": "كَيْفَ سَأَسْتَطِيعُ إِنْزَالَهَا؟",
        "uz": "Uni qanday tushiraman?"
      }
    ],
    "full_uz": "Fokus sharning uchishida emas. Menga gaz kerak. Uni qanday tushiraman?",
    "note": null
  },
  {
    "num": 10,
    "time": "00:02:59,930 --> 00:03:33,850",
    "arabic": "لَدَيَّ طَرِيقَةٌ، أَحْضِرْ مُجَفِّفَ الشَّعْرِ",
    "segs": [
      {
        "ar": "لَدَيَّ طَرِيقَةٌ",
        "uz": "Menda bir usul bor."
      },
      {
        "ar": "أَحْضِرْ",
        "uz": "Olib kel."
      },
      {
        "ar": "مُجَفِّفَ الشَّعْرِ",
        "uz": "Soch quritgichni."
      }
    ],
    "full_uz": "Menda bir usul bor. Soch quritgichni olib kel.",
    "note": "مُجَفِّفُ الشَّعْرِ — soch quritgich."
  },
  {
    "num": 11,
    "time": "00:03:33,850 --> 00:03:37,790",
    "arabic": "حَسَنًا، وَلِمَ هَذَا؟",
    "segs": [
      {
        "ar": "حَسَنًا",
        "uz": "Mayli."
      },
      {
        "ar": "وَلِمَ هَذَا؟",
        "uz": "Bu nima uchun?"
      }
    ],
    "full_uz": "Mayli. Bu nima uchun?",
    "note": null
  },
  {
    "num": 12,
    "time": "00:03:37,790 --> 00:03:44,590",
    "arabic": "حَتَّى أُرِيَكَ خُدْعَةً",
    "segs": [
      {
        "ar": "حَتَّى",
        "uz": "Shunda"
      },
      {
        "ar": "أُرِيَكَ",
        "uz": "senga ko'rsataman"
      },
      {
        "ar": "خُدْعَةً",
        "uz": "bir fokusni"
      }
    ],
    "full_uz": "Shunda senga bir fokus ko'rsataman.",
    "note": null
  },
  {
    "num": 13,
    "time": "00:03:44,590 --> 00:04:20,730",
    "arabic": "حَسَنًا أُمِّي، هَلْ يُمْكِنُنَا اسْتِعْمَالُ مُجَفِّفِ الشَّعْرِ؟",
    "segs": [
      {
        "ar": "حَسَنًا أُمِّي",
        "uz": "Mayli, oyijon."
      },
      {
        "ar": "هَلْ يُمْكِنُنَا",
        "uz": "Biz mumkinmi"
      },
      {
        "ar": "اسْتِعْمَالُ مُجَفِّفِ الشَّعْرِ",
        "uz": "soch quritgichni ishlatishimiz?"
      }
    ],
    "full_uz": "Mayli, oyijon. Soch quritgichni ishlatsak bo'ladimi?",
    "note": null
  },
  {
    "num": 14,
    "time": "00:04:20,950 --> 00:04:28,330",
    "arabic": "إِنَّ مُجَفِّفَ الشَّعْرِ اخْتِرَاعٌ مُفِيدٌ وَبَسِيطٌ",
    "segs": [
      {
        "ar": "إِنَّ مُجَفِّفَ الشَّعْرِ",
        "uz": "Soch quritgich"
      },
      {
        "ar": "اخْتِرَاعٌ مُفِيدٌ",
        "uz": "foydali ixtirodir"
      },
      {
        "ar": "وَبَسِيطٌ",
        "uz": "va sodda"
      }
    ],
    "full_uz": "Soch quritgich foydali va sodda ixtirodir.",
    "note": "اخْتِرَاعٌ — ixtiro."
  },
  {
    "num": 15,
    "time": "00:04:28,330 --> 00:05:27,850",
    "arabic": "تُوضَعُ فِي دَاخِلِ مُجَفِّفِ الشَّعْرِ مِرْوَحَةٌ تَسْحَبُ الْهَوَاءَ مِنْ خَلْفِهَا وَتَدْفَعُهُ إِلَى الْأَمَامِ",
    "segs": [
      {
        "ar": "تُوضَعُ",
        "uz": "Joylashtirilgan"
      },
      {
        "ar": "فِي دَاخِلِ مُجَفِّفِ الشَّعْرِ",
        "uz": "soch quritgich ichida"
      },
      {
        "ar": "مِرْوَحَةٌ",
        "uz": "ventilyator"
      },
      {
        "ar": "تَسْحَبُ الْهَوَاءَ مِنْ خَلْفِهَا",
        "uz": "orqa tomondan havoni tortadi"
      },
      {
        "ar": "وَتَدْفَعُهُ إِلَى الْأَمَامِ",
        "uz": "va oldinga haydaydi"
      }
    ],
    "full_uz": "Soch quritgich ichida orqa tomondan havoni tortib, uni oldinga haydaydigan ventilyator joylashgan.",
    "note": "مِرْوَحَةٌ — ventilyator."
  },
  {
    "num": 16,
    "time": "00:05:27,850 --> 00:05:28,970",
    "arabic": "فَتُجَفِّفُ شَعْرَكَ",
    "segs": [
      {
        "ar": "فَتُجَفِّفُ",
        "uz": "Shunday qilib quritadi"
      },
      {
        "ar": "شَعْرَكَ",
        "uz": "sochingni"
      }
    ],
    "full_uz": "Shunday qilib sochingni quritadi.",
    "note": null
  },
  {
    "num": 17,
    "time": "00:05:28,970 --> 00:05:45,250",
    "arabic": "وَلِتَسْخِينِ الْهَوَاءِ تُوضَعُ وَشِيعَةٌ كَهْرَبَائِيَّةٌ فِي دَاخِلِهِ",
    "segs": [
      {
        "ar": "وَلِتَسْخِينِ الْهَوَاءِ",
        "uz": "Havoni isitish uchun"
      },
      {
        "ar": "تُوضَعُ",
        "uz": "joylashtirilgan"
      },
      {
        "ar": "وَشِيعَةٌ كَهْرَبَائِيَّةٌ",
        "uz": "elektr spiral"
      },
      {
        "ar": "فِي دَاخِلِهِ",
        "uz": "uning ichiga"
      }
    ],
    "full_uz": "Havoni isitish uchun uning ichiga elektr spirali joylashtirilgan.",
    "note": "وَشِيعَةٌ — spiral (qizdiruvchi sim)."
  },
  {
    "num": 18,
    "time": "00:05:45,250 --> 00:05:54,750",
    "arabic": "عِنْدَمَا تَسْخُنُ الْوَشِيعَةُ تَسْخُنُ مَعَهَا الْهَوَاءُ الْمَارُّ",
    "segs": [
      {
        "ar": "عِنْدَمَا تَسْخُنُ الْوَشِيعَةُ",
        "uz": "Spiral qiziganda"
      },
      {
        "ar": "تَسْخُنُ مَعَهَا",
        "uz": "birga qiziydi"
      },
      {
        "ar": "الْهَوَاءُ الْمَارُّ",
        "uz": "undan o'tayotgan havo"
      }
    ],
    "full_uz": "Spiral qiziganda, undan o'tayotgan havo ham qiziydi.",
    "note": null
  },
  {
    "num": 19,
    "time": "00:05:54,750 --> 00:05:57,270",
    "arabic": "وَهَكَذَا يُجَفِّفُ الْهَوَاءُ السَّاخِنُ شَعْرَكَ",
    "segs": [
      {
        "ar": "وَهَكَذَا",
        "uz": "Shunday qilib"
      },
      {
        "ar": "يُجَفِّفُ الْهَوَاءُ السَّاخِنُ",
        "uz": "issiq havo quritadi"
      },
      {
        "ar": "شَعْرَكَ",
        "uz": "sochingni"
      }
    ],
    "full_uz": "Shunday qilib issiq havo sochingni quritadi.",
    "note": null
  },
  {
    "num": 20,
    "time": "00:05:57,270 --> 00:05:58,990",
    "arabic": "تَشْغِيلُ الْحَرَارَةِ لَيْسَ إِلْزَامِيًّا",
    "segs": [
      {
        "ar": "تَشْغِيلُ الْحَرَارَةِ",
        "uz": "Issiqlikni yoqish"
      },
      {
        "ar": "لَيْسَ إِلْزَامِيًّا",
        "uz": "majburiy emas"
      }
    ],
    "full_uz": "Issiqlikni yoqish majburiy emas.",
    "note": "إِلْزَامِيٌّ — majburiy."
  },
  {
    "num": 21,
    "time": "00:05:58,990 --> 00:06:01,630",
    "arabic": "لَكِنْ مِنَ الْأَفْضَلِ عِنْدَئِذٍ أَنْ تَكُونَ مُعْتَادًا عَلَى الْهَوَاءِ الْبَارِدِ",
    "segs": [
      {
        "ar": "لَكِنْ مِنَ الْأَفْضَلِ",
        "uz": "Ammo yaxshisi"
      },
      {
        "ar": "عِنْدَئِذٍ",
        "uz": "bunday holda"
      },
      {
        "ar": "أَنْ تَكُونَ مُعْتَادًا",
        "uz": "o'rganib qolgan bo'lishing"
      },
      {
        "ar": "عَلَى الْهَوَاءِ الْبَارِدِ",
        "uz": "sovuq havoga"
      }
    ],
    "full_uz": "Ammo bunday holda sovuq havoga o'rganib qolgan bo'lishing yaxshiroq.",
    "note": "مُعْتَادٌ — o'rganib qolgan."
  },
  {
    "num": 22,
    "time": "00:06:01,730 --> 00:06:01,730",
    "arabic": "نُولِكُ",
    "segs": [
      {
        "ar": "نُولِكُ",
        "uz": "Nolik!"
      }
    ],
    "full_uz": "Nolik!",
    "note": null
  },
  {
    "num": 23,
    "time": "00:06:01,730 --> 00:06:01,730",
    "arabic": "أَنَا هُنَا",
    "segs": [
      {
        "ar": "أَنَا",
        "uz": "Men"
      },
      {
        "ar": "هُنَا",
        "uz": "shu yerdaman"
      }
    ],
    "full_uz": "Men shu yerdaman.",
    "note": null
  },
  {
    "num": 24,
    "time": "00:06:01,730 --> 00:06:01,750",
    "arabic": "الْمُجَفِّفُ، أَرِنِي خُدْعَتَكَ",
    "segs": [
      {
        "ar": "الْمُجَفِّفُ",
        "uz": "Quritgich tayyor."
      },
      {
        "ar": "أَرِنِي",
        "uz": "Menga ko'rsat"
      },
      {
        "ar": "خُدْعَتَكَ",
        "uz": "fokusingni"
      }
    ],
    "full_uz": "Quritgich tayyor. Menga fokusingni ko'rsat.",
    "note": null
  },
  {
    "num": 25,
    "time": "00:06:01,750 --> 00:06:01,770",
    "arabic": "حَسَنًا، شَغِّلْ",
    "segs": [
      {
        "ar": "حَسَنًا",
        "uz": "Mayli."
      },
      {
        "ar": "شَغِّلْ",
        "uz": "Yoq."
      }
    ],
    "full_uz": "Mayli, yoq.",
    "note": null
  },
  {
    "num": 26,
    "time": "00:06:01,770 --> 00:06:01,835",
    "arabic": "وَالْآنَ، ضَعِ الْكُرَةَ فِي مَجْرَى الْهَوَاءِ",
    "segs": [
      {
        "ar": "وَالْآنَ",
        "uz": "Endi"
      },
      {
        "ar": "ضَعِ الْكُرَةَ",
        "uz": "koptokni qo'y"
      },
      {
        "ar": "فِي مَجْرَى الْهَوَاءِ",
        "uz": "havo oqimiga"
      }
    ],
    "full_uz": "Endi koptokni havo oqimiga qo'y.",
    "note": "مَجْرَى الْهَوَاءِ — havo oqimi."
  },
  {
    "num": 27,
    "time": "00:06:01,835 --> 00:06:01,835",
    "arabic": "رَائِعٌ، الْكُرَةُ تَطِيرُ",
    "segs": [
      {
        "ar": "رَائِعٌ",
        "uz": "Zo'r!"
      },
      {
        "ar": "الْكُرَةُ",
        "uz": "Koptok"
      },
      {
        "ar": "تَطِيرُ",
        "uz": "uchyapti"
      }
    ],
    "full_uz": "Zo'r! Koptok uchyapti.",
    "note": null
  },
  {
    "num": 28,
    "time": "00:06:01,835 --> 00:06:01,835",
    "arabic": "وَالْآنَ حَانَ دَوْرِي لِأَطِيرَ",
    "segs": [
      {
        "ar": "وَالْآنَ",
        "uz": "Endi esa"
      },
      {
        "ar": "حَانَ دَوْرِي",
        "uz": "navbatim keldi"
      },
      {
        "ar": "لِأَطِيرَ",
        "uz": "uchishga"
      }
    ],
    "full_uz": "Endi uchish navbati menga keldi.",
    "note": null
  },
  {
    "num": 29,
    "time": "00:06:01,835 --> 00:06:01,835",
    "arabic": "حَقًّا؟",
    "segs": [
      {
        "ar": "حَقًّا؟",
        "uz": "Rostdanmi?"
      }
    ],
    "full_uz": "Rostdanmi?",
    "note": null
  },
  {
    "num": 30,
    "time": "00:06:01,835 --> 00:06:01,835",
    "arabic": "وَاو",
    "segs": [
      {
        "ar": "وَاو",
        "uz": "Voy!"
      }
    ],
    "full_uz": "Voy!",
    "note": null
  },
  {
    "num": 31,
    "time": "00:06:01,835 --> 00:06:01,835",
    "arabic": "أَجَلْ، سَأَنْطَلِقُ إِلَى السَّقْفِ حَتَّى أَسْتَطِيعَ أَنْ أُمْسِكَ بِالْخَيْطِ",
    "segs": [
      {
        "ar": "أَجَلْ",
        "uz": "Ha."
      },
      {
        "ar": "سَأَنْطَلِقُ إِلَى السَّقْفِ",
        "uz": "Shift tomon uchaman."
      },
      {
        "ar": "حَتَّى أَسْتَطِيعَ",
        "uz": "shunda men qila olaman"
      },
      {
        "ar": "أَنْ أُمْسِكَ بِالْخَيْطِ",
        "uz": "ipni ushlashni"
      }
    ],
    "full_uz": "Ha. Shift tomon uchaman, shunda ipni ushlay olaman.",
    "note": null
  },
  {
    "num": 32,
    "time": "00:06:01,835 --> 00:06:01,835",
    "arabic": "وَهَكَذَا أَسْحَبُ النَّفَّاخَةَ",
    "segs": [
      {
        "ar": "وَهَكَذَا",
        "uz": "Shunday qilib"
      },
      {
        "ar": "أَسْحَبُ",
        "uz": "tortaman"
      },
      {
        "ar": "النَّفَّاخَةَ",
        "uz": "sharni"
      }
    ],
    "full_uz": "Shunday qilib sharni tortib tushiraman.",
    "note": null
  },
  {
    "num": 33,
    "time": "00:06:01,835 --> 00:06:01,835",
    "arabic": "لِذَا أَوْقِفِ الْحَرَارَةَ حَتَّى أَنْطَلِقَ",
    "segs": [
      {
        "ar": "لِذَا",
        "uz": "Shuning uchun"
      },
      {
        "ar": "أَوْقِفِ الْحَرَارَةَ",
        "uz": "issiqlikni o'chir"
      },
      {
        "ar": "حَتَّى أَنْطَلِقَ",
        "uz": "uchib ketishim uchun"
      }
    ],
    "full_uz": "Shuning uchun uchib ketishim uchun issiqlikni o‘chir.",
    "note": null
  },
  {
    "num": 34,
    "time": "00:06:01,835 --> 00:06:01,835",
    "arabic": "انْطَلِقْ!",
    "segs": [
      {
        "ar": "انْطَلِقْ",
        "uz": "Uch!"
      }
    ],
    "full_uz": "Uch!",
    "note": null
  },
  {
    "num": 35,
    "time": "00:06:01,835 --> 00:06:01,835",
    "arabic": "اضْبِطْهُ عَلَى أَعْلَى مَا يُمْكِنُ",
    "segs": [
      {
        "ar": "اضْبِطْهُ",
        "uz": "Uni sozla"
      },
      {
        "ar": "عَلَى أَعْلَى مَا يُمْكِنُ",
        "uz": "eng yuqori darajaga"
      }
    ],
    "full_uz": "Uni eng yuqori darajaga sozla.",
    "note": null
  },
  {
    "num": 36,
    "time": "00:06:01,835 --> 00:06:01,835",
    "arabic": "أَمْسَكْتُهَا",
    "segs": [
      {
        "ar": "أَمْسَكْتُهَا",
        "uz": "Uni ushladim!"
      }
    ],
    "full_uz": "Uni ushladim!",
    "note": null
  },
  {
    "num": 37,
    "time": "00:06:01,835 --> 00:06:01,835",
    "arabic": "أَعْطِنِي إِيَّاهُ",
    "segs": [
      {
        "ar": "أَعْطِنِي",
        "uz": "Menga ber"
      },
      {
        "ar": "إِيَّاهُ",
        "uz": "uni"
      }
    ],
    "full_uz": "Uni menga ber.",
    "note": null
  },
  {
    "num": 38,
    "time": "00:06:01,835 --> 00:06:01,835",
    "arabic": "لَا أَسْتَطِيعُ إِنْزَالَهُ",
    "segs": [
      {
        "ar": "لَا أَسْتَطِيعُ",
        "uz": "Men eplay olmayapman"
      },
      {
        "ar": "إِنْزَالَهُ",
        "uz": "uni pastga tushirishni"
      }
    ],
    "full_uz": "Uni pastga tushira olmayapman.",
    "note": null
  },
  {
    "num": 39,
    "time": "00:06:01,835 --> 00:06:01,835",
    "arabic": "هَذَا لِأَنَّكَ صَغِيرٌ جِدًّا وَلَا تَكَادُ تَزِنُ شَيْئًا",
    "segs": [
      {
        "ar": "هَذَا لِأَنَّكَ",
        "uz": "Buning sababi sening"
      },
      {
        "ar": "صَغِيرٌ جِدًّا",
        "uz": "juda kichikliging"
      },
      {
        "ar": "وَلَا تَكَادُ تَزِنُ شَيْئًا",
        "uz": "va deyarli hech qanday vazning yo'qligi"
      }
    ],
    "full_uz": "Buning sababi sen juda kichiksan va deyarli hech qanday vazning yo‘q.",
    "note": "يَزِنُ — vaznga ega bo‘lmoq."
  },
  {
    "num": 40,
    "time": "00:06:01,835 --> 00:06:01,835",
    "arabic": "إِذَنْ مَاذَا؟ هَلْ عَلَيَّ أَنْ أَنْتَظِرَ حَتَّى أُصْبِحَ أَثْقَلَ لِأَنْزِلَ؟",
    "segs": [
      {
        "ar": "إِذَنْ مَاذَا؟",
        "uz": "Unda nima qilaman?"
      },
      {
        "ar": "هَلْ عَلَيَّ",
        "uz": "Men kerakmi"
      },
      {
        "ar": "أَنْ أَنْتَظِرَ",
        "uz": "kutishim"
      },
      {
        "ar": "حَتَّى أُصْبِحَ أَثْقَلَ",
        "uz": "og'irroq bo'lgunimcha"
      },
      {
        "ar": "لِأَنْزِلَ",
        "uz": "pastga tushish uchun"
      }
    ],
    "full_uz": "Unda nima qilaman? Pastga tushishim uchun og‘irroq bo‘lgunimcha kutishim kerakmi?",
    "note": "أَثْقَلُ — og‘irroq."
  },
  {
    "num": 41,
    "time": "00:06:01,835 --> 00:06:01,835",
    "arabic": "لَا أَدْرِي",
    "segs": [
      {
        "ar": "لَا أَدْرِي",
        "uz": "Bilmayman."
      }
    ],
    "full_uz": "Bilmayman.",
    "note": null
  },
  {
    "num": 42,
    "time": "00:06:01,835 --> 00:06:01,835",
    "arabic": "إِذَنْ اذْهَبْ وَأَحْضِرْ أُخْتِي، سَتُخْبِرُنَا بِمَا يَجِبُ فِعْلُهُ",
    "segs": [
      {
        "ar": "إِذَنْ اذْهَبْ",
        "uz": "Unda bor."
      },
      {
        "ar": "وَأَحْضِرْ أُخْتِي",
        "uz": "Opamni olib kel."
      },
      {
        "ar": "سَتُخْبِرُنَا",
        "uz": "U bizga aytadi."
      },
      {
        "ar": "بِمَا يَجِبُ فِعْلُهُ",
        "uz": "nima qilish kerakligini."
      }
    ],
    "full_uz": "Unda borib opamni olib kel. U bizga nima qilish kerakligini aytadi.",
    "note": null
  },
  {
    "num": 43,
    "time": "00:06:01,835 --> 00:06:01,835",
    "arabic": "سِيمْكَا، أَيْنَ أَنْتِ؟",
    "segs": [
      {
        "ar": "سِيمْكَا",
        "uz": "Simka!"
      },
      {
        "ar": "أَيْنَ أَنْتِ؟",
        "uz": "Qayerdasan?"
      }
    ],
    "full_uz": "Simka, qayerdasan?",
    "note": null
  },
  {
    "num": 44,
    "time": "00:06:01,835 --> 00:06:01,835",
    "arabic": "مَا الَّذِي يَجْرِي هُنَا؟",
    "segs": [
      {
        "ar": "مَا الَّذِي",
        "uz": "Nima"
      },
      {
        "ar": "يَجْرِي هُنَا؟",
        "uz": "bu yerda bo'lyapti?"
      }
    ],
    "full_uz": "Bu yerda nima bo'lyapti?",
    "note": null
  },
  {
    "num": 45,
    "time": "00:06:01,835 --> 00:06:01,835",
    "arabic": "انْظُرِي",
    "segs": [
      {
        "ar": "انْظُرِي",
        "uz": "Qara."
      }
    ],
    "full_uz": "Qara.",
    "note": null
  },
  {
    "num": 46,
    "time": "00:06:01,835 --> 00:06:01,835",
    "arabic": "حَسَنًا، كَيْفَ وَصَلْتَ إِلَى السَّقْفِ؟",
    "segs": [
      {
        "ar": "حَسَنًا",
        "uz": "Xo'sh."
      },
      {
        "ar": "كَيْفَ وَصَلْتَ",
        "uz": "Qanday chiqding"
      },
      {
        "ar": "إِلَى السَّقْفِ؟",
        "uz": "shiftga?"
      }
    ],
    "full_uz": "Xo'sh, shiftga qanday chiqding?",
    "note": null
  },
  {
    "num": 47,
    "time": "00:06:01,835 --> 00:06:01,835",
    "arabic": "كُنْتُ أُرِيهِ خُدْعَةَ مُجَفِّفِ الشَّعْرِ فَوَصَلْتُ",
    "segs": [
      {
        "ar": "كُنْتُ أُرِيهِ",
        "uz": "Men unga ko'rsatayotgandim."
      },
      {
        "ar": "خُدْعَةَ مُجَفِّفِ الشَّعْرِ",
        "uz": "Soch quritgich fokusini."
      },
      {
        "ar": "فَوَصَلْتُ",
        "uz": "Shu tariqa chiqib qoldim."
      }
    ],
    "full_uz": "Men unga soch quritgich fokusini ko'rsatayotgandim, shu tariqa shiftga chiqib qoldim.",
    "note": null
  },
  {
    "num": 48,
    "time": "00:06:01,835 --> 00:06:01,835",
    "arabic": "هَذَا مُضْحِكٌ جِدًّا",
    "segs": [
      {
        "ar": "هَذَا",
        "uz": "Bu"
      },
      {
        "ar": "مُضْحِكٌ جِدًّا",
        "uz": "juda kulgili"
      }
    ],
    "full_uz": "Bu juda kulgili.",
    "note": null
  },
  {
    "num": 49,
    "time": "00:06:01,835 --> 00:06:01,835",
    "arabic": "يُمْكِنُنِي أَنْ أُشَغِّلَ مُجَفِّفَ الشَّعْرِ وَأَرْفَعَكِ إِلَى نُولِك",
    "segs": [
      {
        "ar": "يُمْكِنُنِي",
        "uz": "Men qila olaman."
      },
      {
        "ar": "أَنْ أُشَغِّلَ مُجَفِّفَ الشَّعْرِ",
        "uz": "Soch quritgichni yoqishni."
      },
      {
        "ar": "وَأَرْفَعَكِ إِلَى نُولِك",
        "uz": "Va seni Nolikning oldiga ko'tarishni."
      }
    ],
    "full_uz": "Men soch quritgichni yoqib seni Nolikning oldiga ko'tara olaman.",
    "note": null
  },
  {
    "num": 50,
    "time": "00:06:01,835 --> 00:06:01,835",
    "arabic": "حَتَّى نَعْلَقَ مَعًا هُنَاكَ وَلَا نَنْزِلَ؟",
    "segs": [
      {
        "ar": "حَتَّى",
        "uz": "Shunda"
      },
      {
        "ar": "نَعْلَقَ مَعًا",
        "uz": "ikkalamiz ham osilib qolamiz"
      },
      {
        "ar": "هُنَاكَ",
        "uz": "u yerda"
      },
      {
        "ar": "وَلَا نَنْزِلَ؟",
        "uz": "va tusha olmaymizmi?"
      }
    ],
    "full_uz": "Shunda ikkalamiz ham u yerda osilib qolib, tusha olmaymizmi?",
    "note": null
  },
  {
    "num": 51,
    "time": "00:06:01,835 --> 00:06:01,835",
    "arabic": "لَا، شُكْرًا، لَا أُرِيدُ هَذَا",
    "segs": [
      {
        "ar": "لَا، شُكْرًا",
        "uz": "Yo'q, rahmat."
      },
      {
        "ar": "لَا أُرِيدُ هَذَا",
        "uz": "Buni xohlamayman."
      }
    ],
    "full_uz": "Yo'q, rahmat. Buni xohlamayman.",
    "note": null
  },
  {
    "num": 52,
    "time": "00:06:01,835 --> 00:06:01,835",
    "arabic": "إِذَنْ مَاذَا تُرِيدِينَ؟",
    "segs": [
      {
        "ar": "إِذَنْ",
        "uz": "Unda"
      },
      {
        "ar": "مَاذَا تُرِيدِينَ؟",
        "uz": "nimani xohlaysan?"
      }
    ],
    "full_uz": "Unda nimani xohlaysan?",
    "note": null
  },
  {
    "num": 53,
    "time": "00:06:01,835 --> 00:06:01,835",
    "arabic": "مِكْنَسَةً أَوْ مِمْسَحَةً",
    "segs": [
      {
        "ar": "مِكْنَسَةً",
        "uz": "Supurgi"
      },
      {
        "ar": "أَوْ",
        "uz": "yoki"
      },
      {
        "ar": "مِمْسَحَةً",
        "uz": "shvabra"
      }
    ],
    "full_uz": "Supurgi yoki shvabra.",
    "note": "مِمْسَحَةٌ — shvabra."
  },
  {
    "num": 54,
    "time": "00:06:01,835 --> 00:06:01,835",
    "arabic": "تَسْتَطِيعِينَ عَمَلَ خُدْعَةٍ بِالْمِمْسَحَةِ؟",
    "segs": [
      {
        "ar": "تَسْتَطِيعِينَ",
        "uz": "Sen qila olasanmi"
      },
      {
        "ar": "عَمَلَ خُدْعَةٍ",
        "uz": "fokus qilishni"
      },
      {
        "ar": "بِالْمِمْسَحَةِ؟",
        "uz": "shvabra bilan?"
      }
    ],
    "full_uz": "Shvabra bilan fokus qila olasanmi?",
    "note": null
  },
  {
    "num": 55,
    "time": "00:06:01,835 --> 00:06:01,835",
    "arabic": "أَجَلْ، أَحْضِرْهَا بِسُرْعَةٍ",
    "segs": [
      {
        "ar": "أَجَلْ",
        "uz": "Ha."
      },
      {
        "ar": "أَحْضِرْهَا",
        "uz": "Uni olib kel."
      },
      {
        "ar": "بِسُرْعَةٍ",
        "uz": "Tezroq."
      }
    ],
    "full_uz": "Ha. Uni tezroq olib kel.",
    "note": null
  },
  {
    "num": 56,
    "time": "00:06:01,835 --> 00:06:01,835",
    "arabic": "فِي بَعْضِ الْأَحْيَانِ يُفَكِّرُ الْبَشَرُ بِعَبْقَرِيَّةٍ",
    "segs": [
      {
        "ar": "فِي بَعْضِ الْأَحْيَانِ",
        "uz": "Ba'zan"
      },
      {
        "ar": "يُفَكِّرُ الْبَشَرُ",
        "uz": "odamlar o'ylashadi"
      },
      {
        "ar": "بِعَبْقَرِيَّةٍ",
        "uz": "juda topqirlik bilan"
      }
    ],
    "full_uz": "Ba'zan odamlar juda topqirlik bilan o'ylashadi.",
    "note": "عَبْقَرِيَّةٌ — daholik, topqirlik."
  },
  {
    "num": 57,
    "time": "00:06:01,835 --> 00:06:01,835",
    "arabic": "فَهُمْ يَجِدُونَ أَحْيَانًا طُرُقًا ذَكِيَّةً لِاسْتِعْمَالِ أَجْهِزَةٍ عَادِيَّةٍ",
    "segs": [
      {
        "ar": "فَهُمْ يَجِدُونَ أَحْيَانًا",
        "uz": "Ba'zan ular topishadi"
      },
      {
        "ar": "طُرُقًا ذَكِيَّةً",
        "uz": "aqlli usullarni"
      },
      {
        "ar": "لِاسْتِعْمَالِ أَجْهِزَةٍ عَادِيَّةٍ",
        "uz": "oddiy qurilmalardan foydalanish uchun"
      }
    ],
    "full_uz": "Ba'zan ular oddiy qurilmalardan foydalanishning aqlli usullarini topishadi.",
    "note": null
  },
  {
    "num": 58,
    "time": "00:06:01,835 --> 00:06:01,835",
    "arabic": "كَمُجَفِّفِ الشَّعْرِ",
    "segs": [
      {
        "ar": "كَمُجَفِّفِ الشَّعْرِ",
        "uz": "Masalan, soch quritgich kabi."
      }
    ],
    "full_uz": "Masalan, soch quritgich kabi.",
    "note": null
  },
  {
    "num": 59,
    "time": "00:06:01,835 --> 00:06:01,835",
    "arabic": "فَهُمْ يَسْتَعْمِلُونَهُ لِتَجْفِيفِ الشَّعْرِ",
    "segs": [
      {
        "ar": "فَهُمْ يَسْتَعْمِلُونَهُ",
        "uz": "Ular undan foydalanishadi"
      },
      {
        "ar": "لِتَجْفِيفِ الشَّعْرِ",
        "uz": "sochni quritish uchun"
      }
    ],
    "full_uz": "Ular undan sochni quritish uchun foydalanishadi.",
    "note": null
  },
  {
    "num": 60,
    "time": "00:06:01,835 --> 00:06:01,835",
    "arabic": "وَلَكِنْ يُمْكِنُهُمْ أَيْضًا تَجْفِيفُ بُقْعَةٍ مُبْتَلَّةٍ عَلَى الْمَلَابِسِ",
    "segs": [
      {
        "ar": "وَلَكِنْ يُمْكِنُهُمْ أَيْضًا",
        "uz": "Ammo ular yana"
      },
      {
        "ar": "تَجْفِيفُ بُقْعَةٍ مُبْتَلَّةٍ",
        "uz": "ho'l dog'ni quritishlari mumkin"
      },
      {
        "ar": "عَلَى الْمَلَابِسِ",
        "uz": "kiyim ustida"
      }
    ],
    "full_uz": "Ammo ular kiyimdagi ho'l dog'ni ham quritishlari mumkin.",
    "note": "مُبْتَلٌّ — ho'l."
  },
  {
    "num": 61,
    "time": "00:06:01,835 --> 00:06:01,835",
    "arabic": "أَوْ يُمْكِنُهُمْ اسْتِعْمَالُهُ لِإِزَالَةِ لَاصِقَةِ سِعْرٍ عَالِقَةٍ",
    "segs": [
      {
        "ar": "أَوْ",
        "uz": "Yoki"
      },
      {
        "ar": "يُمْكِنُهُمْ اسْتِعْمَالُهُ",
        "uz": "undan foydalanishlari mumkin"
      },
      {
        "ar": "لِإِزَالَةِ لَاصِقَةِ سِعْرٍ عَالِقَةٍ",
        "uz": "yopishib qolgan narx yorlig'ini olib tashlash uchun"
      }
    ],
    "full_uz": "Yoki undan yopishib qolgan narx yorlig'ini olib tashlash uchun foydalanishlari mumkin.",
    "note": "لَاصِقَةُ سِعْرٍ — narx yorlig'i."
  },
  {
    "num": 62,
    "time": "00:06:01,835 --> 00:06:01,835",
    "arabic": "لِنَفْتَرِضْ أَنَّكُمْ اشْتَرَيْتُمْ كُوبًا جَدِيدًا",
    "segs": [
      {
        "ar": "لِنَفْتَرِضْ",
        "uz": "Tasavvur qiling"
      },
      {
        "ar": "أَنَّكُمْ اشْتَرَيْتُمْ",
        "uz": "siz sotib oldingiz"
      },
      {
        "ar": "كُوبًا جَدِيدًا",
        "uz": "yangi krujkani"
      }
    ],
    "full_uz": "Tasavvur qiling, siz yangi krujka sotib oldingiz.",
    "note": null
  },
  {
    "num": 63,
    "time": "00:06:01,835 --> 00:06:01,835",
    "arabic": "عَلَيْهِ لَاصِقَةُ سِعْرٍ بَدَتْ إِزَالَتُهَا مُسْتَحِيلَةً",
    "segs": [
      {
        "ar": "عَلَيْهِ",
        "uz": "Uning ustida"
      },
      {
        "ar": "لَاصِقَةُ سِعْرٍ",
        "uz": "narx yorlig'i bor"
      },
      {
        "ar": "بَدَتْ إِزَالَتُهَا مُسْتَحِيلَةً",
        "uz": "uni olib tashlash imkonsizdek tuyuladi"
      }
    ],
    "full_uz": "Uning ustida olib tashlash imkonsizdek tuyuladigan narx yorlig'i bor.",
    "note": "مُسْتَحِيلٌ — imkonsiz."
  },
  {
    "num": 64,
    "time": "00:06:01,835 --> 00:06:01,835",
    "arabic": "جَرِّبُوا تَدْفِئَتَهَا بِمُجَفِّفِ الشَّعْرِ",
    "segs": [
      {
        "ar": "جَرِّبُوا",
        "uz": "Sinab ko'ringlar"
      },
      {
        "ar": "تَدْفِئَتَهَا",
        "uz": "uni isitishni"
      },
      {
        "ar": "بِمُجَفِّفِ الشَّعْرِ",
        "uz": "soch quritgich yordamida"
      }
    ],
    "full_uz": "Uni soch quritgich yordamida isitib ko'ringlar.",
    "note": null
  },
  {
    "num": 65,
    "time": "00:06:01,835 --> 00:06:01,835",
    "arabic": "سَيَجِفُّ الصَّمْغُ وَسَتَسْهُلُ إِزَالَةُ لَاصِقَةِ السِّعْرِ",
    "segs": [
      {
        "ar": "سَيَجِفُّ الصَّمْغُ",
        "uz": "Yelim quriydi"
      },
      {
        "ar": "وَسَتَسْهُلُ",
        "uz": "va osonlashadi"
      },
      {
        "ar": "إِزَالَةُ لَاصِقَةِ السِّعْرِ",
        "uz": "narx yorlig'ini olib tashlash"
      }
    ],
    "full_uz": "Yelim quriydi va narx yorlig'ini olib tashlash osonlashadi.",
    "note": "الصَّمْغُ — yelim."
  },
  {
    "num": 66,
    "time": "00:06:01,835 --> 00:06:01,835",
    "arabic": "لَا شَكَّ أَنَّ مُجَفِّفَ الشَّعْرِ مُفِيدٌ جِدًّا فِي أَيِّ مَنْزِلٍ",
    "segs": [
      {
        "ar": "لَا شَكَّ",
        "uz": "Shubhasiz"
      },
      {
        "ar": "أَنَّ مُجَفِّفَ الشَّعْرِ",
        "uz": "soch quritgich"
      },
      {
        "ar": "مُفِيدٌ جِدًّا",
        "uz": "juda foydali"
      },
      {
        "ar": "فِي أَيِّ مَنْزِلٍ",
        "uz": "har qanday uyda"
      }
    ],
    "full_uz": "Shubhasiz, soch quritgich har qanday uyda juda foydalidir.",
    "note": null
  },
  {
    "num": 67,
    "time": "00:06:01,835 --> 00:06:01,835",
    "arabic": "لَكِنْ عَلَيْكُمْ أَنْ تَكُونُوا حَذِرِينَ جِدًّا",
    "segs": [
      {
        "ar": "لَكِنْ",
        "uz": "Ammo"
      },
      {
        "ar": "عَلَيْكُمْ أَنْ تَكُونُوا",
        "uz": "sizlar bo'lishingiz kerak"
      },
      {
        "ar": "حَذِرِينَ جِدًّا",
        "uz": "juda ehtiyotkor"
      }
    ],
    "full_uz": "Ammo sizlar juda ehtiyotkor bo'lishingiz kerak.",
    "note": "حَذِرٌ — ehtiyotkor."
  },
  {
    "num": 68,
    "time": "00:06:01,835 --> 00:06:01,835",
    "arabic": "وَلَا سِيَّمَا فِي الْحَمَّامَاتِ",
    "segs": [
      {
        "ar": "وَلَا سِيَّمَا",
        "uz": "Ayniqsa"
      },
      {
        "ar": "فِي الْحَمَّامَاتِ",
        "uz": "hammomlarda"
      }
    ],
    "full_uz": "Ayniqsa hammomlarda.",
    "note": "لَا سِيَّمَا — ayniqsa."
  },
  {
    "num": 69,
    "time": "00:06:01,835 --> 00:06:01,835",
    "arabic": "إِذَا دَخَلَ الْمَاءُ إِلَى مُجَفِّفِ الشَّعْرِ",
    "segs": [
      {
        "ar": "إِذَا دَخَلَ الْمَاءُ",
        "uz": "Agar suv kirsa"
      },
      {
        "ar": "إِلَى مُجَفِّفِ الشَّعْرِ",
        "uz": "soch quritgich ichiga"
      }
    ],
    "full_uz": "Agar suv soch quritgich ichiga kirsa,",
    "note": null
  },
  {
    "num": 70,
    "time": "00:06:01,835 --> 00:06:01,835",
    "arabic": "فَسَيَكُونُ هُنَاكَ خَطَرٌ كَبِيرٌ مِنْ تَلَقِّي صَدْمَةٍ كَهْرَبَائِيَّةٍ عَنِيفَةٍ",
    "segs": [
      {
        "ar": "فَسَيَكُونُ هُنَاكَ",
        "uz": "unda bo'ladi"
      },
      {
        "ar": "خَطَرٌ كَبِيرٌ",
        "uz": "katta xavf"
      },
      {
        "ar": "مِنْ تَلَقِّي",
        "uz": "uchrash xavfi"
      },
      {
        "ar": "صَدْمَةٍ كَهْرَبَائِيَّةٍ عَنِيفَةٍ",
        "uz": "kuchli elektr toki urishiga"
      }
    ],
    "full_uz": "Unda kuchli elektr toki urishi xavfi yuzaga keladi.",
    "note": "صَدْمَةٌ كَهْرَبَائِيَّةٌ — elektr toki urishi."
  },
  {
    "num": 71,
    "time": "00:06:01,835 --> 00:06:01,835",
    "arabic": "وَالصَّدْمَةُ قَدْ تُؤْذِيكُمْ بِشِدَّةٍ وَتُفْسِدُ مُجَفِّفَ الشَّعْرِ",
    "segs": [
      {
        "ar": "وَالصَّدْمَةُ",
        "uz": "Elektr toki urishi esa"
      },
      {
        "ar": "قَدْ تُؤْذِيكُمْ بِشِدَّةٍ",
        "uz": "sizlarga qattiq zarar yetkazishi mumkin"
      },
      {
        "ar": "وَتُفْسِدُ مُجَفِّفَ الشَّعْرِ",
        "uz": "hamda soch quritgichni buzadi"
      }
    ],
    "full_uz": "Elektr toki urishi sizlarga qattiq zarar yetkazishi va soch quritgichni buzishi mumkin.",
    "note": "تُفْسِدُ — buzmoq, ishdan chiqarmoq."
  },
  {
    "num": 72,
    "time": "00:06:01,835 --> 00:06:01,835",
    "arabic": "تِيش",
    "segs": [
      {
        "ar": "تِيش",
        "uz": "Tish!"
      }
    ],
    "full_uz": "Tish!",
    "note": null
  },
  {
    "num": 73,
    "time": "00:06:01,835 --> 00:06:01,835",
    "arabic": "هَيَّا اسْحَبْهَا",
    "segs": [
      {
        "ar": "هَيَّا",
        "uz": "Qani"
      },
      {
        "ar": "اسْحَبْهَا",
        "uz": "uni tort"
      }
    ],
    "full_uz": "Qani, uni tort!",
    "note": null
  },
  {
    "num": 74,
    "time": "00:06:01,835 --> 00:06:01,835",
    "arabic": "مَرْحَى، إِنَّنَا نَهْبِطُ",
    "segs": [
      {
        "ar": "مَرْحَى",
        "uz": "Yashasin!"
      },
      {
        "ar": "إِنَّنَا",
        "uz": "Biz"
      },
      {
        "ar": "نَهْبِطُ",
        "uz": "pastga tushyapmiz"
      }
    ],
    "full_uz": "Yashasin! Biz pastga tushyapmiz!",
    "note": null
  },
  {
    "num": 75,
    "time": "00:06:01,835 --> 00:06:01,835",
    "arabic": "تُوم، لَا أَسْتَطِيعُ أَنْ أَصِفَ رَوْعَةَ الطَّيَرَانِ فِي تَيَّارٍ مِنَ الْهَوَاءِ",
    "segs": [
      {
        "ar": "تُوم",
        "uz": "Tom"
      },
      {
        "ar": "لَا أَسْتَطِيعُ أَنْ أَصِفَ",
        "uz": "tasvirlab bera olmayman"
      },
      {
        "ar": "رَوْعَةَ الطَّيَرَانِ",
        "uz": "uchishning naqadar zo'rligini"
      },
      {
        "ar": "فِي تَيَّارٍ مِنَ الْهَوَاءِ",
        "uz": "havo oqimida"
      }
    ],
    "full_uz": "Tom, havo oqimida uchish naqadar zo'r ekanini tasvirlab bera olmayman.",
    "note": "تَيَّارُ الْهَوَاءِ — havo oqimi."
  },
  {
    "num": 76,
    "time": "00:06:01,835 --> 00:06:01,835",
    "arabic": "مِنْ حُسْنِ حَظِّكَ",
    "segs": [
      {
        "ar": "مِنْ حُسْنِ حَظِّكَ",
        "uz": "Omading bor ekan."
      }
    ],
    "full_uz": "Omading bor ekan.",
    "note": null
  },
  {
    "num": 77,
    "time": "00:06:01,835 --> 00:06:01,835",
    "arabic": "أَجَلْ",
    "segs": [
      {
        "ar": "أَجَلْ",
        "uz": "Ha."
      }
    ],
    "full_uz": "Ha.",
    "note": null
  },
  {
    "num": 78,
    "time": "00:06:01,835 --> 00:06:01,835",
    "arabic": "رَاقِبْنِي",
    "segs": [
      {
        "ar": "رَاقِبْنِي",
        "uz": "Meni kuzat."
      }
    ],
    "full_uz": "Meni kuzat.",
    "note": null
  },
  {
    "num": 79,
    "time": "00:06:01,835 --> 00:06:01,835",
    "arabic": "لَحْظَةً يَا تُوم، مَاذَا تَفْعَلُ؟",
    "segs": [
      {
        "ar": "لَحْظَةً",
        "uz": "Bir daqiqa."
      },
      {
        "ar": "يَا تُوم",
        "uz": "Tom."
      },
      {
        "ar": "مَاذَا تَفْعَلُ؟",
        "uz": "Nima qilyapsan?"
      }
    ],
    "full_uz": "Bir daqiqa, Tom. Nima qilyapsan?",
    "note": null
  },
  {
    "num": 80,
    "time": "00:06:01,835 --> 00:06:01,835",
    "arabic": "انْظُرِي، سَآخُذُ نَفَسًا مِنَ الْهِلْيُومِ",
    "segs": [
      {
        "ar": "انْظُرِي",
        "uz": "Qara."
      },
      {
        "ar": "سَآخُذُ نَفَسًا",
        "uz": "Men nafas olaman."
      },
      {
        "ar": "مِنَ الْهِلْيُومِ",
        "uz": "geliydan."
      }
    ],
    "full_uz": "Qara, men geliydan nafas olaman.",
    "note": "نَفَسٌ — nafas."
  },
  {
    "num": 81,
    "time": "00:06:01,835 --> 00:06:01,835",
    "arabic": "أَلَا يَضُرُّ بِصِحَّتِكَ؟",
    "segs": [
      {
        "ar": "أَلَا يَضُرُّ",
        "uz": "Zarar qilmaydimi"
      },
      {
        "ar": "بِصِحَّتِكَ؟",
        "uz": "sog'lig'ingga?"
      }
    ],
    "full_uz": "Bu sog'lig'ingga zarar qilmaydimi?",
    "note": "ضَرَّ — zarar yetkazmoq."
  },
  {
    "num": 82,
    "time": "00:06:01,835 --> 00:06:01,835",
    "arabic": "سَأَسْتَنْشِقُ قَلِيلًا",
    "segs": [
      {
        "ar": "سَأَسْتَنْشِقُ",
        "uz": "Men nafas olaman"
      },
      {
        "ar": "قَلِيلًا",
        "uz": "birozgina"
      }
    ],
    "full_uz": "Men birozgina nafas olaman.",
    "note": "اِسْتَنْشَقَ — nafas olmoq."
  },
  {
    "num": 83,
    "time": "00:06:01,835 --> 00:06:01,835",
    "arabic": "مَرْحَبًا بِكُمْ",
    "segs": [
      {
        "ar": "مَرْحَبًا بِكُمْ",
        "uz": "Xush kelibsizlar!"
      }
    ],
    "full_uz": "Xush kelibsizlar!",
    "note": null
  },
  {
    "num": 84,
    "time": "00:06:01,835 --> 00:06:01,835",
    "arabic": "أَصْبَحْتَ فِيكْسِيًّا",
    "segs": [
      {
        "ar": "أَصْبَحْتَ",
        "uz": "Sen bo'lib qolding"
      },
      {
        "ar": "فِيكْسِيًّا",
        "uz": "fiksi"
      }
    ],
    "full_uz": "Sen fiksi bo'lib qolding.",
    "note": null
  },
  {
    "num": 85,
    "time": "00:06:01,835 --> 00:06:01,835",
    "arabic": "هَذِهِ هِيَ الْخُدْعَةُ، أَلَيْسَتْ مُضْحِكَةً؟",
    "segs": [
      {
        "ar": "هَذِهِ هِيَ الْخُدْعَةُ",
        "uz": "Mana shu fokus."
      },
      {
        "ar": "أَلَيْسَتْ مُضْحِكَةً؟",
        "uz": "Kulgili emasmi?"
      }
    ],
    "full_uz": "Mana shu fokus. Kulgili emasmi?",
    "note": null
  },
  {
    "num": 86,
    "time": "00:06:01,835 --> 00:06:01,835",
    "arabic": "هَذَا مُضْحِكٌ جِدًّا",
    "segs": [
      {
        "ar": "هَذَا",
        "uz": "Bu"
      },
      {
        "ar": "مُضْحِكٌ جِدًّا",
        "uz": "juda kulgili"
      }
    ],
    "full_uz": "Bu juda kulgili.",
    "note": null
  },
  {
    "num": 87,
    "time": "00:06:01,835 --> 00:06:01,835",
    "arabic": "يَا لَهُ مِنْ صَوْتٍ حَادٍّ وَمُضْحِكٍ حَقًّا!",
    "segs": [
      {
        "ar": "يَا لَهُ مِنْ",
        "uz": "Qanday ham"
      },
      {
        "ar": "صَوْتٍ حَادٍّ",
        "uz": "ingichka ovoz"
      },
      {
        "ar": "وَمُضْحِكٍ حَقًّا",
        "uz": "va rostdan ham kulgili"
      }
    ],
    "full_uz": "Qanday ingichka va rostdan ham kulgili ovoz!",
    "note": "حَادٌّ (الصوت) — baland/ingichka ovoz."
  },
  {
    "num": 88,
    "time": "00:06:01,835 --> 00:06:01,835",
    "arabic": "أَرَأَيْتَ، لَمْ أَعُدْ فِيكْسِيًّا",
    "segs": [
      {
        "ar": "أَرَأَيْتَ",
        "uz": "Ko'rdingmi"
      },
      {
        "ar": "لَمْ أَعُدْ",
        "uz": "endi men emasman"
      },
      {
        "ar": "فِيكْسِيًّا",
        "uz": "fiksi"
      }
    ],
    "full_uz": "Ko'rdingmi, endi men fiksi emasman.",
    "note": null
  },
  {
    "num": 89,
    "time": "00:06:01,835 --> 00:06:01,835",
    "arabic": "يَتَوَقَّفُ تَأْثِيرُ الْهِلْيُومِ بَعْدَ بِضْعِ ثَوَانٍ",
    "segs": [
      {
        "ar": "يَتَوَقَّفُ",
        "uz": "Tugaydi"
      },
      {
        "ar": "تَأْثِيرُ الْهِلْيُومِ",
        "uz": "geliyning ta'siri"
      },
      {
        "ar": "بَعْدَ بِضْعِ ثَوَانٍ",
        "uz": "bir necha soniyadan keyin"
      }
    ],
    "full_uz": "Geliyning ta'siri bir necha soniyadan keyin tugaydi.",
    "note": "تَأْثِيرٌ — ta'sir."
  },
  {
    "num": 90,
    "time": "00:06:01,835 --> 00:06:01,835",
    "arabic": "هَذَا جَيِّدٌ لِأَنَّ فِيكْسِيًّا بِهَذَا الْحَجْمِ",
    "segs": [
      {
        "ar": "هَذَا جَيِّدٌ",
        "uz": "Bu yaxshi"
      },
      {
        "ar": "لِأَنَّ",
        "uz": "chunki"
      },
      {
        "ar": "فِيكْسِيًّا بِهَذَا الْحَجْمِ",
        "uz": "bunday kattalikdagi fiksi"
      }
    ],
    "full_uz": "Bu yaxshi, chunki bunday kattalikdagi fiksi...",
    "note": null
  },
  {
    "num": 91,
    "time": "00:06:01,835 --> 00:06:01,835",
    "arabic": "لَنْ يَسْتَطِيعَ الْعَيْشَ دَاخِلَ أَيِّ آلَةٍ",
    "segs": [
      {
        "ar": "لَنْ يَسْتَطِيعَ",
        "uz": "yashay olmaydi"
      },
      {
        "ar": "الْعَيْشَ دَاخِلَ",
        "uz": "ichida yashashni"
      },
      {
        "ar": "أَيِّ آلَةٍ",
        "uz": "hech qanday qurilma"
      }
    ],
    "full_uz": "…hech qanday qurilma ichida yashay olmaydi.",
    "note": null
  },
  {
    "num": 92,
    "time": "00:06:01,835 --> 00:06:01,835",
    "arabic": "مِنْ أَيْنَ أَتَوْا؟ مَا شَكْلُهُمْ؟ مَنْ يَعْرِفُ سِرَّهُمْ؟",
    "segs": [
      {
        "ar": "مِنْ أَيْنَ أَتَوْا؟",
        "uz": "Ular qayerdan kelishgan?"
      },
      {
        "ar": "مَا شَكْلُهُمْ؟",
        "uz": "Ularning ko'rinishi qanday?"
      },
      {
        "ar": "مَنْ يَعْرِفُ سِرَّهُمْ؟",
        "uz": "Ularning sirini kim biladi?"
      }
    ],
    "full_uz": "Ular qayerdan kelishgan? Ularning ko'rinishi qanday? Ularning sirini kim biladi?",
    "note": null
  }
];

if (typeof module !== "undefined" && module.exports) {
    module.exports = lessons;
}
