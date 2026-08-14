const lessons = [
  {
    "num": 1,
    "time": "00:00:32,000 --> 00:00:36,299",
    "arabic": "آلَةُ التَّصْوِيرِ",
    "segs": null,
    "full_uz": "Fotoapparat.",
    "note": null
  },
  {
    "num": 2,
    "time": "00:00:43,380 --> 00:00:46,990",
    "arabic": "تَوَقَّفِي هُنَا وَدَعِينِي أَرَى",
    "segs": [
      { "ar": "تَوَقَّفِي هُنَا", "uz": "shu yerda to'xta" },
      { "ar": "وَدَعِينِي أَرَى", "uz": "va menga ko'rsat" }
    ],
    "full_uz": "Shu yerda to'xta va menga ko'rsat.",
    "note": null
  },
  {
    "num": 3,
    "time": "00:00:46,299 --> 00:00:48,379",
    "arabic": "أَنْتِ أَنِيقَةٌ جِدًّا الْيَوْمَ",
    "segs": null,
    "full_uz": "Sen bugun juda chiroyli kiyingansan.",
    "note": null
  },
  {
    "num": 4,
    "time": "00:00:48,379 --> 00:00:51,299",
    "arabic": "نَعَمْ، وَلَكِنْ لَيْسَ كَأَنَاقَتِكَ",
    "segs": [
      { "ar": "نَعَمْ", "uz": "ha" },
      { "ar": "وَلَكِنْ لَيْسَ كَأَنَاقَتِكَ", "uz": "lekin seningdek emas" }
    ],
    "full_uz": "Ha, lekin seningdek emas.",
    "note": null
  },
  {
    "num": 5,
    "time": "00:00:51,299 --> 00:00:59,379",
    "arabic": "انْظُرْ يَا نُولِيكْ، أَلَيْسَتْ مُمْتَازَةً؟",
    "segs": [
      { "ar": "انْظُرْ يَا نُولِيكْ", "uz": "qara, Nolik" },
      { "ar": "أَلَيْسَتْ مُمْتَازَةً؟", "uz": "a'lo emasmi" }
    ],
    "full_uz": "Qara, Nolik, a'lo emasmi?",
    "note": null
  },
  {
    "num": 6,
    "time": "00:01:00,000 --> 00:01:04,980",
    "arabic": "أَلَنْ تُسَبِّبَ لَكَ مُشْكِلَةً؟",
    "segs": null,
    "full_uz": "Senga muammo tug'dirmaydimi?",
    "note": null
  },
  {
    "num": 7,
    "time": "00:01:04,980 --> 00:01:09,599",
    "arabic": "لَا، لَقَدْ سَمَحَ لِي أَبِي بِاسْتِعْمَالِ آلَةِ التَّصْوِيرِ الَّتِي تَخُصُّهُ",
    "segs": [
      { "ar": "لَا", "uz": "yo'q" },
      { "ar": "لَقَدْ سَمَحَ لِي أَبِي بِاسْتِعْمَالِ آلَةِ التَّصْوِيرِ الَّتِي تَخُصُّهُ", "uz": "dadam o'zining fotoapparatidan foydalanishimga ruxsat berdi" }
    ],
    "full_uz": "Yo'q, dadam o'zining fotoapparatidan foydalanishimga ruxsat berdi.",
    "note": null
  },
  {
    "num": 8,
    "time": "00:01:09,599 --> 00:01:11,480",
    "arabic": "لَا، أَنَا أَقْصِدُ الصُّورَةَ",
    "segs": [
      { "ar": "لَا", "uz": "yo'q" },
      { "ar": "أَنَا أَقْصِدُ الصُّورَةَ", "uz": "men rasmni nazarda tutyapman" }
    ],
    "full_uz": "Yo'q, men rasmni nazarda tutyapman.",
    "note": null
  },
  {
    "num": 9,
    "time": "00:01:11,480 --> 00:01:16,240",
    "arabic": "أَوَاثِقٌ بِأَنَّهُمَا لَنْ يَنْزَعِجَا لِأَنَّكَ صَوَّرْتَهُمَا مِنْ غَيْرِ إِذْنِهِمَا؟",
    "segs": null,
    "full_uz": "Ularning ruxsatisiz rasmga olganing uchun xafa bo'lishmaydi deb ishonchingiz komilmi?",
    "note": null
  },
  {
    "num": 10,
    "time": "00:01:16,240 --> 00:01:18,240",
    "arabic": "لَكِنِ انْظُرَا، إِنَّهَا جَيِّدَةٌ",
    "segs": [
      { "ar": "لَكِنِ انْظُرَا", "uz": "lekin qaranglar" },
      { "ar": "إِنَّهَا جَيِّدَةٌ", "uz": "bu yaxshi chiqibdi" }
    ],
    "full_uz": "Lekin qaranglar, bu yaxshi chiqibdi.",
    "note": null
  },
  {
    "num": 11,
    "time": "00:01:18,240 --> 00:01:21,519",
    "arabic": "هَلْ تَعْلَمُ يَا تُومْ، تَبْدُو مِثْلَ مُخْتَلِسِ الصُّوَرِ",
    "segs": [
      { "ar": "هَلْ تَعْلَمُ يَا تُومْ", "uz": "bilasanmi, Tom" },
      { "ar": "تَبْدُو مِثْلَ مُخْتَلِسِ الصُّوَرِ", "uz": "sen paparatsiga o'xshab qolibsan" }
    ],
    "full_uz": "Bilasanmi, Tom, sen paparatsiga o'xshab qolibsan.",
    "note": "«مُخْتَلِسُ الصُّوَرِ» — ruxsatsiz surat oluvchi, «paparatsi» ma'nosida."
  },
  {
    "num": 12,
    "time": "00:01:21,519 --> 00:01:23,579",
    "arabic": "الْمُخْتَلِسُونَ؟",
    "segs": null,
    "full_uz": "Paparatsilarmi?",
    "note": null
  },
  {
    "num": 13,
    "time": "00:01:23,579 --> 00:01:27,079",
    "arabic": "الْمُصَوِّرُونَ الَّذِينَ يُصَوِّرُونَ الْمَشَاهِيرَ بِلَا إِذْنِهِمْ؟",
    "segs": null,
    "full_uz": "Mashhurlarni ruxsatisiz suratga oladigan fotograflarmi?",
    "note": null
  },
  {
    "num": 14,
    "time": "00:01:27,079 --> 00:01:32,640",
    "arabic": "أَنْتَ مُحِقٌّ، وَلَا يَهْتَمُّونَ بِشَيْءٍ غَيْرِ صُوَرِهِمْ وَالْمَالِ الَّذِي سَيَجْنُونَهُ مِنْ وَرَاءِ ذَلِكَ",
    "segs": [
      { "ar": "أَنْتَ مُحِقٌّ", "uz": "siz haqsiz" },
      { "ar": "وَلَا يَهْتَمُّونَ بِشَيْءٍ غَيْرِ صُوَرِهِمْ وَالْمَالِ الَّذِي سَيَجْنُونَهُ مِنْ وَرَاءِ ذَلِكَ", "uz": "ular faqat o'z suratlari va shundan topadigan pullari bilangina qiziqishadi" }
    ],
    "full_uz": "Siz haqsiz, ular faqat o'z suratlari va shundan topadigan pullari bilangina qiziqishadi.",
    "note": null
  },
  {
    "num": 15,
    "time": "00:01:32,640 --> 00:01:37,079",
    "arabic": "هَلْ فَكَّرْتَ كَيْفَ تَعْمَلُ آلَةُ التَّصْوِيرِ؟",
    "segs": null,
    "full_uz": "Fotoapparat qanday ishlashi haqida o'ylab ko'rganmisan?",
    "note": null
  },
  {
    "num": 16,
    "time": "00:01:37,859 --> 00:01:40,079",
    "arabic": "لِنَفْتَرِضْ أَنَّكَ سَتَلْتَقِطُ صُورَةً لِلطَّبِيعَةِ",
    "segs": null,
    "full_uz": "Faraz qilaylik, tabiat manzarasidan rasm olmoqchisan.",
    "note": null
  },
  {
    "num": 17,
    "time": "00:01:40,659 --> 00:01:44,099",
    "arabic": "الضَّوْءُ فِي الْخَارِجِ يَدْخُلُ إِلَى عَدَسَةِ آلَةِ التَّصْوِيرِ",
    "segs": null,
    "full_uz": "Tashqaridagi yorug'lik fotoapparat linzasiga kiradi.",
    "note": null
  },
  {
    "num": 18,
    "time": "00:01:44,099 --> 00:01:46,079",
    "arabic": "إِنَّهَا الْعَيْنُ الزُّجَاجِيَّةُ الَّتِي فِي الْمُقَدِّمَةِ",
    "segs": null,
    "full_uz": "Bu old tomondagi shisha ko'z.",
    "note": null
  },
  {
    "num": 19,
    "time": "00:01:46,659 --> 00:01:53,140",
    "arabic": "تَأْخُذُ الْعَدَسَةُ الضَّوْءَ مِنَ الْمَشْهَدِ خَارِجَ آلَةِ التَّصْوِيرِ وَتُحَوِّلُهُ إِلَى صُورَةٍ صَغِيرَةٍ دَاخِلَهَا",
    "segs": [
      { "ar": "تَأْخُذُ الْعَدَسَةُ الضَّوْءَ مِنَ الْمَشْهَدِ خَارِجَ آلَةِ التَّصْوِيرِ", "uz": "linza fotoapparatdan tashqaridagi manzaradan yorug'likni oladi" },
      { "ar": "وَتُحَوِّلُهُ إِلَى صُورَةٍ صَغِيرَةٍ دَاخِلَهَا", "uz": "va uni ichkarida kichik tasvirga aylantiradi" }
    ],
    "full_uz": "Linza fotoapparatdan tashqaridagi manzaradan yorug'likni oladi va uni ichkarida kichik tasvirga aylantiradi.",
    "note": null
  },
  {
    "num": 20,
    "time": "00:01:53,140 --> 00:01:57,460",
    "arabic": "ثُمَّ تُسَجَّلُ الصُّورَةُ عَلَى مُسْتَشْعِرٍ إِلِكْتُرُونِيٍّ خَاصٍّ",
    "segs": null,
    "full_uz": "Keyin tasvir maxsus elektron sensorga yoziladi.",
    "note": null
  },
  {
    "num": 21,
    "time": "00:01:57,460 --> 00:02:00,760",
    "arabic": "يُدْعَى الْمُصْفُوفَةَ وَهُوَ حَسَّاسٌ لِلضَّوْءِ",
    "segs": null,
    "full_uz": "U matritsa deb ataladi va yorug'likka sezgir.",
    "note": null
  },
  {
    "num": 22,
    "time": "00:02:00,760 --> 00:02:02,960",
    "arabic": "اضْغَطْ، وَهَذِهِ الصُّورَةُ",
    "segs": [
      { "ar": "اضْغَطْ", "uz": "bos" },
      { "ar": "وَهَذِهِ الصُّورَةُ", "uz": "va mana bu rasm" }
    ],
    "full_uz": "Bos, va mana bu rasm.",
    "note": null
  },
  {
    "num": 23,
    "time": "00:02:02,960 --> 00:02:06,780",
    "arabic": "فِكْرَةٌ رَائِعَةٌ جِدًّا",
    "segs": null,
    "full_uz": "Juda ajoyib fikr.",
    "note": null
  },
  {
    "num": 24,
    "time": "00:02:06,780 --> 00:02:07,819",
    "arabic": "الْآنَ عَرَفْتُ",
    "segs": null,
    "full_uz": "Endi bildim.",
    "note": null
  },
  {
    "num": 25,
    "time": "00:02:07,819 --> 00:02:09,379",
    "arabic": "سَأُصْبِحُ مُخْتَلِسَ صُوَرٍ",
    "segs": null,
    "full_uz": "Men paparatsi bo'laman.",
    "note": null
  },
  {
    "num": 26,
    "time": "00:02:09,379 --> 00:02:11,379",
    "arabic": "هَاي، هَلْ نَسِيتَ وَعْدًا؟",
    "segs": [
      { "ar": "هَاي", "uz": "hey" },
      { "ar": "هَلْ نَسِيتَ وَعْدًا؟", "uz": "bir va'dani unutdingmi" }
    ],
    "full_uz": "Hey, bir va'dani unutdingmi?",
    "note": null
  },
  {
    "num": 27,
    "time": "00:02:11,379 --> 00:02:12,180",
    "arabic": "أَيَّ وَعْدٍ؟",
    "segs": null,
    "full_uz": "Qanday va'da?",
    "note": null
  },
  {
    "num": 28,
    "time": "00:02:12,180 --> 00:02:13,460",
    "arabic": "أَنَّكَ لَنْ تُصَوِّرَنَا",
    "segs": null,
    "full_uz": "Bizni suratga olmasliging haqida.",
    "note": null
  },
  {
    "num": 29,
    "time": "00:02:13,460 --> 00:02:14,960",
    "arabic": "نَحْنُ سَنَتَوَقَّفُ",
    "segs": null,
    "full_uz": "Biz to'xtaymiz.",
    "note": null
  },
  {
    "num": 30,
    "time": "00:02:14,960 --> 00:02:17,759",
    "arabic": "لَا تَخَافَا، سَأَحْذِفُهَا كُلَّهَا لَاحِقًا",
    "segs": [
      { "ar": "لَا تَخَافَا", "uz": "qo'rqmanglar" },
      { "ar": "سَأَحْذِفُهَا كُلَّهَا لَاحِقًا", "uz": "keyinroq hammasini o'chirib tashlayman" }
    ],
    "full_uz": "Qo'rqmanglar, keyinroq hammasini o'chirib tashlayman.",
    "note": null
  },
  {
    "num": 31,
    "time": "00:02:17,759 --> 00:02:18,039",
    "arabic": "تُومْ!",
    "segs": null,
    "full_uz": "Tom!",
    "note": null
  },
  {
    "num": 32,
    "time": "00:02:18,039 --> 00:02:22,259",
    "arabic": "تُومْ، تَوَقَّفْ الْآنَ سَرِيعًا",
    "segs": null,
    "full_uz": "Tom, hozir tezda to'xta.",
    "note": null
  },
  {
    "num": 33,
    "time": "00:02:22,259 --> 00:02:24,419",
    "arabic": "لَنْ أَتَوَقَّفَ حَتَّى أُصَوِّرَكُمْ",
    "segs": null,
    "full_uz": "Sizlarni suratga olmagunimcha to'xtamayman.",
    "note": null
  },
  {
    "num": 34,
    "time": "00:02:24,419 --> 00:02:26,019",
    "arabic": "نُولِيكْ، لِنَهْرُبْ",
    "segs": null,
    "full_uz": "Nolik, qochaylik.",
    "note": null
  },
  {
    "num": 35,
    "time": "00:02:28,019 --> 00:02:30,259",
    "arabic": "لَنْ تَهْرُبَا مِنِّي أَيُّهَا الْفِكْسِيزُ",
    "segs": null,
    "full_uz": "Mendan qochib qutulolmaysizlar, ey fiksilar.",
    "note": null
  },
  {
    "num": 36,
    "time": "00:02:52,259 --> 00:02:54,259",
    "arabic": "تْشُوسَاكَا؟",
    "segs": null,
    "full_uz": "Chosakami?",
    "note": "Srt matnida «جوساكا» deb yozilgan, to'g'ri shakli «تْشُوسَاكَا» (kuchuk ismi) bo'lishi kerak."
  },
  {
    "num": 37,
    "time": "00:02:54,259 --> 00:02:56,259",
    "arabic": "أَجَلْ، وَجَدْتُكُمَا",
    "segs": null,
    "full_uz": "Ha, sizlarni topdim.",
    "note": null
  },
  {
    "num": 38,
    "time": "00:02:56,259 --> 00:02:58,259",
    "arabic": "حِكَايَةُ الْقَرْنِ",
    "segs": null,
    "full_uz": "Asrning voqeasi.",
    "note": null
  },
  {
    "num": 39,
    "time": "00:02:58,259 --> 00:03:00,259",
    "arabic": "الْوَحْشُ وَضَحِيَّتُهُ",
    "segs": null,
    "full_uz": "Yirtqich hayvon va uning qurboni.",
    "note": null
  },
  {
    "num": 40,
    "time": "00:03:06,259 --> 00:03:08,259",
    "arabic": "دَارَ",
    "segs": null,
    "full_uz": "Aylandi.",
    "note": "Bu matnda mustaqil so'z bo'lib, boshning aylanib ketishini bildiradi, ehtimol gap qismi qirqilgan."
  },
  {
    "num": 41,
    "time": "00:03:08,259 --> 00:03:09,259",
    "arabic": "سَاعِدْنَا",
    "segs": null,
    "full_uz": "Bizga yordam ber.",
    "note": null
  },
  {
    "num": 42,
    "time": "00:03:09,259 --> 00:03:12,259",
    "arabic": "لَنْ يُسَاعِدَنَا لِأَنَّهُ مُخْتَلِسُ الصُّوَرِ",
    "segs": null,
    "full_uz": "U bizga yordam bermaydi, chunki u paparatsi.",
    "note": null
  },
  {
    "num": 43,
    "time": "00:03:12,259 --> 00:03:22,599",
    "arabic": "أَجَلْ، الْتَقَطْتُهَا",
    "segs": [
      { "ar": "أَجَلْ", "uz": "ha" },
      { "ar": "الْتَقَطْتُهَا", "uz": "uni suratga oldim" }
    ],
    "full_uz": "Ha, uni suratga oldim.",
    "note": null
  },
  {
    "num": 44,
    "time": "00:03:22,599 --> 00:03:24,519",
    "arabic": "إِنَّهَا أَفْضَلُ صُورَةٍ",
    "segs": null,
    "full_uz": "Bu eng yaxshi surat.",
    "note": null
  },
  {
    "num": 45,
    "time": "00:03:24,519 --> 00:03:30,280",
    "arabic": "مَا كُلُّ هَذِهِ الضَّجَّةِ؟",
    "segs": null,
    "full_uz": "Bu shovqin nimasi?",
    "note": "Srt matnida «الترجمة» deb yozilgan, mazmunga ko'ra to'g'ri shakli «الضَّجَّةِ» («shovqin, g'avg'o») bo'lishi kerak."
  },
  {
    "num": 46,
    "time": "00:03:30,280 --> 00:03:31,439",
    "arabic": "لَقْطَةٌ رَائِعَةٌ",
    "segs": null,
    "full_uz": "Ajoyib kadr.",
    "note": null
  },
  {
    "num": 47,
    "time": "00:03:31,439 --> 00:03:38,099",
    "arabic": "تَمَّ اخْتِرَاعُ أُولَى آلَاتِ التَّصْوِيرِ قَبْلَ مِئَتَيْ عَامٍ",
    "segs": null,
    "full_uz": "Ilk fotoapparatlar ikki yuz yil oldin ixtiro qilingan.",
    "note": null
  },
  {
    "num": 48,
    "time": "00:03:38,099 --> 00:03:41,340",
    "arabic": "وَلَكِنْ كَانَتْ تَعْمَلُ بِبُطْءٍ شَدِيدٍ",
    "segs": null,
    "full_uz": "Lekin ular juda sekin ishlagan.",
    "note": null
  },
  {
    "num": 49,
    "time": "00:03:41,340 --> 00:03:44,180",
    "arabic": "إِنْ أَرَدْتَ الْتِقَاطَ صُورَةٍ شَخْصِيَّةٍ لَكَ",
    "segs": null,
    "full_uz": "Agar o'zingning shaxsiy suratingni olmoqchi bo'lsang.",
    "note": null
  },
  {
    "num": 50,
    "time": "00:03:44,180 --> 00:03:47,280",
    "arabic": "فَعَلَيْكَ أَنْ تَجْلِسَ بِلَا حَرَاكٍ سَاعَةً كَامِلَةً",
    "segs": null,
    "full_uz": "Butun bir soat qimirlamasdan o'tirishing kerak edi.",
    "note": null
  },
  {
    "num": 51,
    "time": "00:03:47,280 --> 00:03:50,740",
    "arabic": "بَعْدَ اخْتِرَاعِ الْفِيلْمِ أَصْبَحَتْ آلَاتُ التَّصْوِيرِ أَسْرَعَ",
    "segs": null,
    "full_uz": "Plyonka ixtiro qilingandan keyin fotoapparatlar tezroq ishlaydigan bo'ldi.",
    "note": null
  },
  {
    "num": 52,
    "time": "00:03:50,740 --> 00:03:54,420",
    "arabic": "وَأَصْبَحَ مِنَ الْمُمْكِنِ الْتِقَاطُ نَحْوَ عَشْرِ صُوَرٍ فِي دَقِيقَةٍ",
    "segs": null,
    "full_uz": "Va bir daqiqada taxminan o'nta rasm olish imkoni paydo bo'ldi.",
    "note": null
  },
  {
    "num": 53,
    "time": "00:03:54,420 --> 00:03:57,000",
    "arabic": "وَيَظْهَرُ عَلَى الْفِيلْمِ كُلُّ شَيْءٍ مَعْكُوسًا",
    "segs": null,
    "full_uz": "Va plyonkada hamma narsa teskari ko'rinadi.",
    "note": null
  },
  {
    "num": 54,
    "time": "00:03:57,000 --> 00:04:00,000",
    "arabic": "فَالْأَجْزَاءُ السَّوْدَاءُ تَكُونُ بَيْضَاءَ وَالْبَيْضَاءُ سَوْدَاءَ",
    "segs": null,
    "full_uz": "Qora qismlar oq, oq qismlar esa qora bo'lib chiqadi.",
    "note": null
  },
  {
    "num": 55,
    "time": "00:04:00,000 --> 00:04:03,840",
    "arabic": "وَلَا تَبْدُو طَبِيعِيَّةً حَتَّى يَتِمَّ تَحْوِيلُ الصُّورَةِ مِنَ الْفِيلْمِ",
    "segs": null,
    "full_uz": "Rasm plyonkadan o'zgartirilmaguncha tabiiy ko'rinmaydi.",
    "note": null
  },
  {
    "num": 56,
    "time": "00:04:03,840 --> 00:04:06,080",
    "arabic": "إِلَى قِطْعَةٍ مِنَ الْوَرَقِ الْمُخَصَّصِ",
    "segs": null,
    "full_uz": "Maxsus qog'oz bo'lagiga.",
    "note": null
  },
  {
    "num": 57,
    "time": "00:04:06,080 --> 00:04:09,039",
    "arabic": "يَسْتَعْمِلُ النَّاسُ الْآنَ آلَاتِ التَّصْوِيرِ الرَّقْمِيَّةَ",
    "segs": null,
    "full_uz": "Odamlar hozir raqamli fotoapparatlardan foydalanishadi.",
    "note": null
  },
  {
    "num": 58,
    "time": "00:04:09,039 --> 00:04:10,860",
    "arabic": "الَّتِي لَا تَحْتَاجُ إِلَى فِيلْمٍ",
    "segs": null,
    "full_uz": "Ular plyonkaga muhtoj emas.",
    "note": null
  },
  {
    "num": 59,
    "time": "00:04:10,860 --> 00:04:14,640",
    "arabic": "يُمْكِنُكَ النَّظَرُ إِلَى مَا الْتَقَطْتَهُ خِلَالَ لَحَظَاتٍ عَلَى الشَّاشَةِ",
    "segs": null,
    "full_uz": "Olgan rasmingga ekranda bir necha soniyada qarab olishing mumkin.",
    "note": null
  },
  {
    "num": 60,
    "time": "00:04:14,640 --> 00:04:17,740",
    "arabic": "وَإِنْ لَمْ تُعْجِبْكَ تَلْتَقِطُ وَاحِدَةً أُخْرَى",
    "segs": null,
    "full_uz": "Agar yoqmasa, yana bittasini olasan.",
    "note": null
  },
  {
    "num": 61,
    "time": "00:04:17,740 --> 00:04:21,100",
    "arabic": "وَلَا تَحْتَاجُ الْيَوْمَ إِلَى آلَةِ تَصْوِيرٍ مُنْفَصِلَةٍ",
    "segs": null,
    "full_uz": "Bugun alohida fotoapparatga hojat yo'q.",
    "note": null
  },
  {
    "num": 62,
    "time": "00:04:21,100 --> 00:04:23,860",
    "arabic": "فَمُعْظَمُ الْهَوَاتِفِ فِيهَا وَاحِدَةٌ",
    "segs": null,
    "full_uz": "Chunki ko'pchilik telefonlarda o'zi bor.",
    "note": null
  },
  {
    "num": 63,
    "time": "00:04:23,860 --> 00:04:33,100",
    "arabic": "سِيمْكَا، نُولِيكْ، هَلْ أَنْتُمَا هُنَا؟",
    "segs": null,
    "full_uz": "Simka, Nolik, shu yerdamisizlar?",
    "note": null
  },
  {
    "num": 64,
    "time": "00:04:33,100 --> 00:04:37,319",
    "arabic": "هَيَّا أَخْرُجَا، سَأَتَوَقَّفُ عَنْ تَصْوِيرِكُمَا",
    "segs": [
      { "ar": "هَيَّا أَخْرُجَا", "uz": "chiqinglar" },
      { "ar": "سَأَتَوَقَّفُ عَنْ تَصْوِيرِكُمَا", "uz": "sizlarni suratga olishni to'xtataman" }
    ],
    "full_uz": "Chiqinglar, sizlarni suratga olishni to'xtataman.",
    "note": null
  },
  {
    "num": 65,
    "time": "00:04:37,319 --> 00:04:39,860",
    "arabic": "سَامِحَانِي، أَلَسْنَا أَصْدِقَاءَ؟",
    "segs": [
      { "ar": "سَامِحَانِي", "uz": "meni kechiringlar" },
      { "ar": "أَلَسْنَا أَصْدِقَاءَ؟", "uz": "do'st emasmizmi" }
    ],
    "full_uz": "Meni kechiringlar, do'st emasmizmi?",
    "note": null
  },
  {
    "num": 66,
    "time": "00:04:39,860 --> 00:04:42,920",
    "arabic": "كَادَتْ صَاحِبَتَاهَا تَأْكُلَانِنِي وَهُمَا حُوتَانِ",
    "segs": null,
    "full_uz": "Uning ikki do'sti — kit bo'lib — meni yeb qo'yishiga sal qoldi.",
    "note": "Srt matnida «كاد صديقاتها يؤكلاني وهما حيان» deb yozilgan, mazmunga ko'ra to'g'ri shakli «كَادَتْ صَاحِبَتَاهَا تَأْكُلَانِنِي وَهُمَا حُوتَانِ» bo'lishi kerak."
  },
  {
    "num": 67,
    "time": "00:04:42,920 --> 00:04:43,860",
    "arabic": "أَرْجُوكُمَا سَامِحَانِي",
    "segs": null,
    "full_uz": "Iltimos, meni kechiringlar.",
    "note": null
  },
  {
    "num": 68,
    "time": "00:04:44,480 --> 00:04:46,340",
    "arabic": "أَتُرِيدَانِ أَنْ تَرَيَا الصُّوَرَ؟",
    "segs": null,
    "full_uz": "Rasmlarni ko'rmoqchimisizlar?",
    "note": null
  },
  {
    "num": 69,
    "time": "00:04:46,340 --> 00:04:48,860",
    "arabic": "نَعَمْ، هَيَّا أَرِنَا مَا لَدَيْكَ",
    "segs": [
      { "ar": "نَعَمْ", "uz": "ha" },
      { "ar": "هَيَّا أَرِنَا مَا لَدَيْكَ", "uz": "keling, senda borini ko'rsat" }
    ],
    "full_uz": "Ha, keling, senda borini ko'rsat.",
    "note": null
  },
  {
    "num": 70,
    "time": "00:04:49,520 --> 00:04:53,500",
    "arabic": "لَسْنَا فِي هَذِهِ الصُّورَةِ وَلَا هَذِهِ",
    "segs": null,
    "full_uz": "Biz na bu rasmda, na bu rasmda bormiz.",
    "note": null
  },
  {
    "num": 71,
    "time": "00:04:53,500 --> 00:04:57,020",
    "arabic": "عَمَلٌ جَيِّدٌ يَا مُخْتَلِسَ الصُّوَرِ",
    "segs": null,
    "full_uz": "Yaxshi ish, paparatsi.",
    "note": null
  },
  {
    "num": 72,
    "time": "00:04:57,020 --> 00:04:59,580",
    "arabic": "لَحْظَةً، لَدَيَّ وَاحِدَةٌ أَنْتُمَا بِهَا",
    "segs": [
      { "ar": "لَحْظَةً", "uz": "bir daqiqa" },
      { "ar": "لَدَيَّ وَاحِدَةٌ أَنْتُمَا بِهَا", "uz": "menda ikkalangiz bor bittasi bor" }
    ],
    "full_uz": "Bir daqiqa, menda ikkalangiz bor bittasi bor.",
    "note": null
  },
  {
    "num": 73,
    "time": "00:04:59,580 --> 00:05:01,819",
    "arabic": "أَنَا وَاثِقٌ، انْظُرَا",
    "segs": [
      { "ar": "أَنَا وَاثِقٌ", "uz": "ishonchim komil" },
      { "ar": "انْظُرَا", "uz": "qaranglar" }
    ],
    "full_uz": "Ishonchim komil, qaranglar.",
    "note": null
  },
  {
    "num": 74,
    "time": "00:05:01,819 --> 00:05:03,860",
    "arabic": "سَأُكَبِّرُهَا",
    "segs": null,
    "full_uz": "Uni kattalashtiraman.",
    "note": null
  },
  {
    "num": 75,
    "time": "00:05:04,439 --> 00:05:07,860",
    "arabic": "هَذَا مُسْتَحِيلٌ، لَا أُصَدِّقُ",
    "segs": [
      { "ar": "هَذَا مُسْتَحِيلٌ", "uz": "bu mumkin emas" },
      { "ar": "لَا أُصَدِّقُ", "uz": "ishonmayapman" }
    ],
    "full_uz": "Bu mumkin emas, ishonmayapman.",
    "note": null
  },
  {
    "num": 76,
    "time": "00:05:07,860 --> 00:05:09,540",
    "arabic": "بَلْ مُمْكِنٌ",
    "segs": null,
    "full_uz": "Aksincha, mumkin.",
    "note": null
  },
  {
    "num": 77,
    "time": "00:05:09,540 --> 00:05:12,340",
    "arabic": "وَلَكِنْ مَتَى ظَهَرْتُمَا بِشَكْلٍ طَبِيعِيَّيْنِ؟",
    "segs": null,
    "full_uz": "Lekin qachon o'z (tabiiy) shaklingizda ko'ringandingiz?",
    "note": "Srt matnida «بزالين» deb yozilgan, mazmunga ko'ra bu «طَبِيعِيَّيْنِ» («tabiiy, o'z holida») so'zining buzilgan shakli bo'lishi mumkin."
  },
  {
    "num": 78,
    "time": "00:05:12,340 --> 00:05:13,960",
    "arabic": "فِي لَحْظَةِ ضَغْطِكَ عَلَى الزِّرِّ",
    "segs": null,
    "full_uz": "Sen tugmani bosgan lahzada.",
    "note": null
  },
  {
    "num": 79,
    "time": "00:05:13,960 --> 00:05:17,439",
    "arabic": "عِنْدَمَا نَخَافُ نُغَيِّرُ أَشْكَالَنَا فِي طَرْفَةِ عَيْنٍ",
    "segs": null,
    "full_uz": "Qo'rqqanimizda ko'z ochib yumguncha shaklimizni o'zgartiramiz.",
    "note": null
  },
  {
    "num": 80,
    "time": "00:05:17,439 --> 00:05:18,780",
    "arabic": "لَقَدْ خَسِرْتَ",
    "segs": null,
    "full_uz": "Sen yutqazding.",
    "note": null
  },
  {
    "num": 81,
    "time": "00:05:18,780 --> 00:05:20,700",
    "arabic": "يَا مُخْتَلِسَ الصُّوَرِ",
    "segs": null,
    "full_uz": "Ey paparatsi.",
    "note": null
  },
  {
    "num": 82,
    "time": "00:05:20,700 --> 00:05:22,620",
    "arabic": "وَمَاذَا سَتَفْعَلُ بِالْمَالِ؟",
    "segs": null,
    "full_uz": "Pul bilan nima qilmoqchi eding?",
    "note": null
  },
  {
    "num": 83,
    "time": "00:05:22,620 --> 00:05:24,180",
    "arabic": "سَيِّدُ مُخْتَلِسِ الصُّوَرِ",
    "segs": null,
    "full_uz": "Janob paparatsi.",
    "note": null
  },
  {
    "num": 84,
    "time": "00:05:24,180 --> 00:05:26,860",
    "arabic": "أَرْجُوكُمَا لَا تُنَادِيَانِي بِهَذَا",
    "segs": null,
    "full_uz": "Iltimos, meni shunday chaqirmanglar.",
    "note": null
  },
  {
    "num": 85,
    "time": "00:05:26,860 --> 00:05:30,220",
    "arabic": "لَكَ هَذَا، وَلَكِنْ بَعْدَ أَنْ تَحْذِفَ كُلَّ الصُّوَرِ",
    "segs": [
      { "ar": "لَكَ هَذَا", "uz": "xo'p, mayli" },
      { "ar": "وَلَكِنْ بَعْدَ أَنْ تَحْذِفَ كُلَّ الصُّوَرِ", "uz": "lekin barcha rasmlarni o'chirgandan keyin" }
    ],
    "full_uz": "Xo'p, mayli, lekin barcha rasmlarni o'chirgandan keyin.",
    "note": null
  },
  {
    "num": 86,
    "time": "00:05:30,220 --> 00:05:32,180",
    "arabic": "حَسَنًا، سَأَحْذِفُهَا",
    "segs": [
      { "ar": "حَسَنًا", "uz": "xo'p" },
      { "ar": "سَأَحْذِفُهَا", "uz": "ularni o'chiraman" }
    ],
    "full_uz": "Xo'p, ularni o'chiraman.",
    "note": null
  },
  {
    "num": 87,
    "time": "00:05:32,180 --> 00:05:36,080",
    "arabic": "وَهَلْ عَلَيَّ أَنْ أَحْذِفَ هَذِهِ أَيْضًا؟",
    "segs": null,
    "full_uz": "Buni ham o'chirishim kerakmi?",
    "note": null
  },
  {
    "num": 88,
    "time": "00:05:36,080 --> 00:05:37,960",
    "arabic": "لَا، أَبْقِهَا، إِنَّهَا رَائِعَةٌ",
    "segs": [
      { "ar": "لَا، أَبْقِهَا", "uz": "yo'q, uni qoldir" },
      { "ar": "إِنَّهَا رَائِعَةٌ", "uz": "bu ajoyib chiqibdi" }
    ],
    "full_uz": "Yo'q, uni qoldir, bu ajoyib chiqibdi.",
    "note": null
  },
  {
    "num": 89,
    "time": "00:05:37,959 --> 00:05:40,959",
    "arabic": "لَمْ أَرَكَ وَأَنْتَ تَلْتَقِطُهَا؟",
    "segs": null,
    "full_uz": "Uni olayotganingda seni ko'rmabman-a?",
    "note": null
  }
];
if (typeof module !== "undefined" && module.exports) {
  module.exports = lessons;
}