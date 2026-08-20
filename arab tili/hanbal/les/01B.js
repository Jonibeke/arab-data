const lessons = [
  {
    "num": 1,
    "time": "00:01:30,000 --> 00:01:35,019",
    "arabic": "دُكَّانٌ لِلْإِكْتِرَاءِ؟ هَذِهِ الدُّكَّانُ لِلْإِكْتِرَاءِ",
    "segs": [
      { "ar": "دُكَّانٌ لِلْإِكْتِرَاءِ؟", "uz": "Ijaraga do'kon kerakmi?" },
      { "ar": "هَذِهِ الدُّكَّانُ لِلْإِكْتِرَاءِ", "uz": "Mana bu do'kon ijaraga beriladi!" }
    ],
    "full_uz": "Ijaraga do'kon kerakmi? Mana bu do'kon ijaraga beriladi!",
    "note": null
  },
  {
    "num": 2,
    "time": "00:01:40,000 --> 00:01:48,299",
    "arabic": "مَنْ يَكْتَرِي دُكَّانِي؟ دُكَّانٌ لِلْإِكْتِرَاءِ؟ هَذِهِ الدُّكَّانُ لِلْإِكْتِرَاءِ",
    "segs": [
      { "ar": "مَنْ يَكْتَرِي دُكَّانِي؟", "uz": "Do'konimni kim ijaraga oladi?" },
      { "ar": "دُكَّانٌ لِلْإِكْتِرَاءِ؟ هَذِهِ الدُّكَّانُ لِلْإِكْتِرَاءِ", "uz": "Ijaraga do'kon kerakmi? Mana bu do'kon ijaraga beriladi!" }
    ],
    "full_uz": "Do'konimni kim ijaraga oladi? Ijaraga do'kon kerakmi? Mana bu do'kon ijaraga beriladi!",
    "note": null
  },
  {
    "num": 3,
    "time": "00:02:29,560 --> 00:02:38,879",
    "arabic": "مِسْكِينٌ أَحْمَدُ بْنُ حَنْبَلٍ مُنْذُ أَيَّامٍ وَهُوَ يُنَادِي عَلَى دُكَّانِ أَبِيهِ",
    "segs": [
      { "ar": "مِسْكِينٌ أَحْمَدُ بْنُ حَنْبَلٍ", "uz": "Bechora Ahmad ibn Hanbal" },
      { "ar": "مُنْذُ أَيَّامٍ وَهُوَ يُنَادِي عَلَى دُكَّانِ أَبِيهِ", "uz": "necha kundan beri otasining do'konini chaqirib yuribdi" }
    ],
    "full_uz": "Bechora Ahmad ibn Hanbal, necha kundan beri otasining do'konini chaqirib yuribdi.",
    "note": null
  },
  {
    "num": 4,
    "time": "00:02:38,879 --> 00:02:41,180",
    "arabic": "لَعَلَّهُ يَجِدُ مُسْتَأْجِرًا لَهَا",
    "segs": null,
    "full_uz": "Balki unga ijarachi topar.",
    "note": null
  },
  {
    "num": 5,
    "time": "00:02:41,180 --> 00:02:47,180",
    "arabic": "وَمَاذَا تُرِيدُهُ أَنْ يَفْعَلَ يَا أَبَا سَرْحَانَ وَلَا يُوجَدُ مُعِينٌ لَهُمْ إِلَّا هَذِهِ الدُّكَّانُ",
    "segs": [
      { "ar": "وَمَاذَا تُرِيدُهُ أَنْ يَفْعَلَ يَا أَبَا سَرْحَانَ", "uz": "Xo'sh, undan yana nima qilishini xohlaysiz, Abu Sarhon" },
      { "ar": "وَلَا يُوجَدُ مُعِينٌ لَهُمْ إِلَّا هَذِهِ الدُّكَّانُ", "uz": "ularga bu do'kondan boshqa yordamchi manba yo'q-ku" }
    ],
    "full_uz": "Xo'sh, undan yana nima qilishini xohlaysiz, Abu Sarhon, ularga bu do'kondan boshqa yordamchi manba yo'q-ku.",
    "note": null
  },
  {
    "num": 6,
    "time": "00:02:47,180 --> 00:02:55,580",
    "arabic": "كَانَ اللَّهُ فِي عَوْنِهِ وَاللَّهِ إِنَّ حَالَهُ وَحَالَ أُمِّهِ لَتَفْطِرُ الْقَلْبَ يَا أَبَا دُلَامَةَ",
    "segs": [
      { "ar": "كَانَ اللَّهُ فِي عَوْنِهِ", "uz": "Alloh unga madad bersin" },
      { "ar": "وَاللَّهِ إِنَّ حَالَهُ وَحَالَ أُمِّهِ لَتَفْطِرُ الْقَلْبَ يَا أَبَا دُلَامَةَ", "uz": "vallohi, uning va onasining ahvoli yurakni ezadi, Abu Dulama" }
    ],
    "full_uz": "Alloh unga madad bersin. Vallohi, uning va onasining ahvoli yurakni ezadi, Abu Dulama.",
    "note": null
  },
  {
    "num": 7,
    "time": "00:02:55,580 --> 00:03:02,600",
    "arabic": "صَدَقْتَ يَا أَبَا سَرْحَانَ لَقَدْ عَلِمْتُ أَنَّ عَمَّهُ إِسْحَاقَ بْنَ حَنْبَلٍ حَاوَلَ مَدَّ الْعَوْنِ لَهُمْ",
    "segs": [
      { "ar": "صَدَقْتَ يَا أَبَا سَرْحَانَ", "uz": "To'g'ri aytasiz, Abu Sarhon" },
      { "ar": "لَقَدْ عَلِمْتُ أَنَّ عَمَّهُ إِسْحَاقَ بْنَ حَنْبَلٍ حَاوَلَ مَدَّ الْعَوْنِ لَهُمْ", "uz": "eshitishimcha, amakisi Ishoq ibn Hanbal ularga yordam qo'lini cho'zishga urinib ko'rgan" }
    ],
    "full_uz": "To'g'ri aytasiz, Abu Sarhon. Eshitishimcha, amakisi Ishoq ibn Hanbal ularga yordam qo'lini cho'zishga urinib ko'rgan.",
    "note": null
  },
  {
    "num": 8,
    "time": "00:03:02,600 --> 00:03:07,980",
    "arabic": "فَأَبَتْ عَلَى أَحْمَدَ عِزَّةُ نَفْسِهِ أَنْ يَقْبَلَ الْمُسَاعَدَةَ حَتَّى مِنْ عَمِّهِ",
    "segs": [
      { "ar": "فَأَبَتْ عَلَى أَحْمَدَ عِزَّةُ نَفْسِهِ", "uz": "Lekin Ahmadning izzat-nafsi unga yo'l qo'ymadi" },
      { "ar": "أَنْ يَقْبَلَ الْمُسَاعَدَةَ حَتَّى مِنْ عَمِّهِ", "uz": "amakisidan bo'lsa-da yordam qabul qilishga" }
    ],
    "full_uz": "Lekin Ahmadning izzat-nafsi unga amakisidan bo'lsa-da yordam qabul qilishga yo'l qo'ymadi.",
    "note": null
  },
  {
    "num": 9,
    "time": "00:03:07,980 --> 00:03:14,780",
    "arabic": "هَكَذَا رَبَّتْهُ صَفِيَّةُ الشَّيْبَانِيَّةُ أُمُّهُ عَلَى عِزَّةِ النَّفْسِ وَالتَّرَفُّعِ عَنِ الِافْتِقَارِ إِذَا غَيَّرَ اللَّهُ",
    "segs": [
      { "ar": "هَكَذَا رَبَّتْهُ صَفِيَّةُ الشَّيْبَانِيَّةُ أُمُّهُ عَلَى عِزَّةِ النَّفْسِ", "uz": "Onasi Safiya ash-Shaybaniya uni shunday — izzat-nafsga" },
      { "ar": "وَالتَّرَفُّعِ عَنِ الِافْتِقَارِ إِذَا غَيَّرَ اللَّهُ", "uz": "va Alloh o'zgartirguncha muhtojlikdan yuqori bo'lishga o'rgatgan" }
    ],
    "full_uz": "Onasi Safiya ash-Shaybaniya uni shunday — izzat-nafsga va Alloh o'zgartirguncha muhtojlikdan yuqori bo'lishga o'rgatgan.",
    "note": null
  },
  {
    "num": 10,
    "time": "00:03:14,780 --> 00:03:23,380",
    "arabic": "لَقَدْ أَخْبَرَتْنِي زَوْجَتِي أُمُّ سَرْحَانَ أَنَّ أُمَّ أَحْمَدَ صَفِيَّةَ هِيَ مَنْ رَفَضَتْ قَبُولَ الْمُسَاعَدَةِ مِنْ عَمِّهِ إِسْحَاقَ بْنِ حَنْبَلٍ",
    "segs": [
      { "ar": "لَقَدْ أَخْبَرَتْنِي زَوْجَتِي أُمُّ سَرْحَانَ", "uz": "Xotinim Umm Sarhon menga aytdi" },
      { "ar": "أَنَّ أُمَّ أَحْمَدَ صَفِيَّةَ هِيَ مَنْ رَفَضَتْ قَبُولَ الْمُسَاعَدَةِ مِنْ عَمِّهِ إِسْحَاقَ بْنِ حَنْبَلٍ", "uz": "Ahmadning onasi Safiya amakisi Ishoq ibn Hanbaldan yordam qabul qilishni rad etgan ekan" }
    ],
    "full_uz": "Xotinim Umm Sarhon menga aytdi: Ahmadning onasi Safiya amakisi Ishoq ibn Hanbaldan yordam qabul qilishni rad etgan ekan.",
    "note": null
  },
  {
    "num": 11,
    "time": "00:03:23,380 --> 00:03:25,160",
    "arabic": "إِبَاءً وَعِزَّةَ نَفْسٍ",
    "segs": null,
    "full_uz": "G'urur va izzat-nafs tufayli.",
    "note": "إِبَاء — bosh egmaslik, rad etish orqali namoyon bo'ladigan g'urur ma'nosini bildiradi."
  },
  {
    "num": 12,
    "time": "00:03:34,539 --> 00:03:58,539",
    "arabic": "لَقَدْ تَأَخَّرَ الرَّدُّ كَثِيرًا وَالْوَقْتُ يُدَاهِمُ وَلَا يَنْتَظِرُ",
    "segs": [
      { "ar": "لَقَدْ تَأَخَّرَ الرَّدُّ كَثِيرًا", "uz": "Javob juda kechikdi" },
      { "ar": "وَالْوَقْتُ يُدَاهِمُ وَلَا يَنْتَظِرُ", "uz": "vaqt esa shoshilib kelmoqda va kutmaydi" }
    ],
    "full_uz": "Javob juda kechikdi, vaqt esa shoshilib kelmoqda va kutmaydi.",
    "note": null
  },
  {
    "num": 13,
    "time": "00:03:58,539 --> 00:04:01,560",
    "arabic": "كَلَّا يَجِبُ أَنْ يَكُونَ الرَّدُّ بَيْنَ أَيْدِينَا الْآنَ",
    "segs": null,
    "full_uz": "Yo'q, javob hozir bizning qo'limizda bo'lishi kerak.",
    "note": null
  },
  {
    "num": 14,
    "time": "00:04:01,560 --> 00:04:05,039",
    "arabic": "سَيَأْتِي الرَّدُّ إِنْ شَاءَ اللَّهُ يَا سَيِّدِي",
    "segs": null,
    "full_uz": "Javob keladi, inshaalloh, xo'jayin.",
    "note": null
  },
  {
    "num": 15,
    "time": "00:04:05,039 --> 00:04:09,719",
    "arabic": "كُلُّ لَحْظَةٍ تَمُرُّ يُحْدِقُ الْخَطَرُ بِنَا أَكْثَرَ يَا مَسْعُودُ",
    "segs": null,
    "full_uz": "Har o'tayotgan lahza xavf bizga yaqinlashib bormoqda, Mas'ud.",
    "note": null
  },
  {
    "num": 16,
    "time": "00:04:09,719 --> 00:04:12,819",
    "arabic": "إِنَّ عُيُونَ هَارُونَ الرَّشِيدِ فِي كُلِّ مَكَانٍ",
    "segs": null,
    "full_uz": "Horun ar-Rashidning ko'zlari har yerda.",
    "note": null
  },
  {
    "num": 17,
    "time": "00:04:12,819 --> 00:04:18,420",
    "arabic": "إِنْ عَلِمَ هَارُونُ بِالْأَمْرِ طَارَتْ رِقَابُنَا أَسْرَعَ مِنْ طَيَرَانِ تِلْكَ الْحَمَامَةِ",
    "segs": [
      { "ar": "إِنْ عَلِمَ هَارُونُ بِالْأَمْرِ", "uz": "Agar Horun bu ishdan xabar topsa" },
      { "ar": "طَارَتْ رِقَابُنَا أَسْرَعَ مِنْ طَيَرَانِ تِلْكَ الْحَمَامَةِ", "uz": "boshlarimiz o'sha kaptarning uchishidan ham tezroq uchib ketadi" }
    ],
    "full_uz": "Agar Horun bu ishdan xabar topsa, boshlarimiz o'sha kaptarning uchishidan ham tezroq uchib ketadi.",
    "note": null
  },
  {
    "num": 18,
    "time": "00:04:18,420 --> 00:04:20,579",
    "arabic": "الَّتِي نَنْتَظِرُ رَسُولَهَا بِفَارِغِ الصَّبْرِ",
    "segs": null,
    "full_uz": "O'sha kaptarning xabarchisini biz sabrsizlik bilan kutayotgan edik.",
    "note": null
  },
  {
    "num": 19,
    "time": "00:04:20,579 --> 00:04:25,699",
    "arabic": "إِنْ لَمْ تَصِلْنَا الْأَوَامِرُ فَقَدْ ضَاعَ كُلُّ شَيْءٍ",
    "segs": [
      { "ar": "إِنْ لَمْ تَصِلْنَا الْأَوَامِرُ", "uz": "Agar buyruqlar bizga yetib kelmasa" },
      { "ar": "فَقَدْ ضَاعَ كُلُّ شَيْءٍ", "uz": "hammasi barbod bo'ladi" }
    ],
    "full_uz": "Agar buyruqlar bizga yetib kelmasa, hammasi barbod bo'ladi.",
    "note": null
  },
  {
    "num": 20,
    "time": "00:05:01,560 --> 00:05:07,079",
    "arabic": "سَحْقًا لِهَذَا الْفَتَى الْمَأْفُونِ",
    "segs": null,
    "full_uz": "La'nat shu ahmoq yigitga!",
    "note": "مَأْفُون — 'ahmoq, aqli noqis' ma'nosidagi kam uchraydigan so'z."
  },
  {
    "num": 21,
    "time": "00:05:07,079 --> 00:05:10,060",
    "arabic": "كَيْفَ يَسْرِقُ حَمَامَةَ زَاجِلٍ",
    "segs": null,
    "full_uz": "U qanday qilib xabarchi kaptarni o'g'irlaydi?",
    "note": "الْحَمَامُ الزَّاجِلُ — maxsus o'qitilgan, xat-xabar tashiydigan kaptar turi, o'zbekchada 'xabarchi kaptar' deyiladi."
  },
  {
    "num": 22,
    "time": "00:05:10,060 --> 00:05:12,560",
    "arabic": "أَلَا يَعْلَمُ أَنَّ ذَلِكَ مَحْظُورٌ",
    "segs": null,
    "full_uz": "U buning taqiqlanganini bilmasmikan?",
    "note": null
  },
  {
    "num": 23,
    "time": "00:05:14,560 --> 00:05:19,240",
    "arabic": "هَذِهِ لِهَذِهِ",
    "segs": null,
    "full_uz": "Bu — bunga.",
    "note": null
  },
  {
    "num": 24,
    "time": "00:05:19,240 --> 00:05:21,860",
    "arabic": "رَاحَ هُنَا يَا عَامِرُ",
    "segs": null,
    "full_uz": "Bu yerga qo'y, Omir.",
    "note": null
  },
  {
    "num": 25,
    "time": "00:05:27,920 --> 00:05:30,199",
    "arabic": "بَقِيَ هَذِهِ",
    "segs": null,
    "full_uz": "Bu qoldi.",
    "note": null
  },
  {
    "num": 26,
    "time": "00:05:30,199 --> 00:05:32,300",
    "arabic": "أَيُّهَا الْكَسُولُ الْأَحْمَقُ",
    "segs": null,
    "full_uz": "Hoy dangasa, ahmoq!",
    "note": null
  },
  {
    "num": 27,
    "time": "00:05:32,300 --> 00:05:32,759",
    "arabic": "أُمِّي",
    "segs": null,
    "full_uz": "Onajon.",
    "note": null
  },
  {
    "num": 28,
    "time": "00:05:32,759 --> 00:05:33,240",
    "arabic": "انْهَضْ",
    "segs": null,
    "full_uz": "Tur!",
    "note": null
  },
  {
    "num": 29,
    "time": "00:05:33,240 --> 00:05:36,639",
    "arabic": "قُلْتُ لَكَ غَيْرَ مَرَّةٍ اجْلِسْ فِي إِحْدَى زَوَايَا السُّوقِ",
    "segs": [
      { "ar": "قُلْتُ لَكَ غَيْرَ مَرَّةٍ", "uz": "Senga necha marta aytdim" },
      { "ar": "اجْلِسْ فِي إِحْدَى زَوَايَا السُّوقِ", "uz": "bozorning bir burchagida o'tir" }
    ],
    "full_uz": "Senga necha marta aytdim, bozorning bir burchagida o'tir.",
    "note": null
  },
  {
    "num": 30,
    "time": "00:05:36,639 --> 00:05:39,379",
    "arabic": "لِتُصْلِحَ نِعَالًا لِلْمَارَّةِ هُنَاكَ",
    "segs": null,
    "full_uz": "U yerda yo'lovchilarning poyabzalini tuzatib turishing uchun.",
    "note": null
  },
  {
    "num": 31,
    "time": "00:05:42,379 --> 00:05:48,300",
    "arabic": "أُمِّي لَمْ أَتْرُكْ مَكَانًا إِلَّا وَطَرَدَنِي مِنْهُ صَاحِبُ الشُّرْطَةِ",
    "segs": [
      { "ar": "أُمِّي لَمْ أَتْرُكْ مَكَانًا", "uz": "Onajon, qolmagan joy yo'q" },
      { "ar": "إِلَّا وَطَرَدَنِي مِنْهُ صَاحِبُ الشُّرْطَةِ", "uz": "hammasidan qorovul meni haydab yubordi" }
    ],
    "full_uz": "Onajon, qolmagan joy yo'q, hammasidan qorovul meni haydab yubordi.",
    "note": null
  },
  {
    "num": 32,
    "time": "00:05:48,300 --> 00:05:49,519",
    "arabic": "مَاذَا أَفْعَلُ؟",
    "segs": null,
    "full_uz": "Nima qilay?",
    "note": null
  },
  {
    "num": 33,
    "time": "00:05:49,519 --> 00:05:53,199",
    "arabic": "وَهَلْ خَلَتْ بَغْدَادُ مِنَ الْأَمَاكِنِ الَّتِي يُمْكِنُكَ الْعَمَلَ فِيهَا؟",
    "segs": null,
    "full_uz": "Bag'dodda ishlaydigan joy qolmadimi?",
    "note": null
  },
  {
    "num": 34,
    "time": "00:05:54,439 --> 00:05:57,000",
    "arabic": "أُمِّي وَأَيْنَ سَأَجِدُ هَذَا الْمَكَانَ يَا أُمِّي؟",
    "segs": null,
    "full_uz": "Onajon, men bu joyni qayerdan topaman, onajon?",
    "note": null
  },
  {
    "num": 35,
    "time": "00:05:57,000 --> 00:05:59,719",
    "arabic": "كُلَّمَا جَلَسْتُ قُرْبَ السُّوقِ جَاءَ رِجَالُ الشُّرْطَةِ وَطَرَدُونِي",
    "segs": [
      { "ar": "كُلَّمَا جَلَسْتُ قُرْبَ السُّوقِ", "uz": "Bozor yaqinida o'tirsam bo'ldi" },
      { "ar": "جَاءَ رِجَالُ الشُّرْطَةِ وَطَرَدُونِي", "uz": "qorovullar kelib meni haydaydi" }
    ],
    "full_uz": "Bozor yaqinida o'tirsam bo'ldi, qorovullar kelib meni haydaydi.",
    "note": null
  },
  {
    "num": 36,
    "time": "00:05:59,720 --> 00:06:04,140",
    "arabic": "وَفِي الْمَرَّةِ الْأَخِيرَةِ يَا أُمِّي كَانُوا يَقْبِضُونَ عَلَيَّ وَيَزُجُّونَ بِي فِي السِّجْنِ",
    "segs": [
      { "ar": "وَفِي الْمَرَّةِ الْأَخِيرَةِ يَا أُمِّي", "uz": "Va oxirgi safar, onajon" },
      { "ar": "كَانُوا يَقْبِضُونَ عَلَيَّ وَيَزُجُّونَ بِي فِي السِّجْنِ", "uz": "meni ushlab, qamoqqa tashlashayozdi" }
    ],
    "full_uz": "Va oxirgi safar, onajon, meni ushlab, qamoqqa tashlashayozdi.",
    "note": null
  },
  {
    "num": 37,
    "time": "00:06:04,140 --> 00:06:11,060",
    "arabic": "دَوْمًا لَا أَجِدُ مِنْكَ إِلَّا التَّذَمُّرَ وَالْحُجَجَ الَّتِي تُسَوِّغُ بِهَا كَسَلَكَ وَعَجْزَكَ",
    "segs": [
      { "ar": "دَوْمًا لَا أَجِدُ مِنْكَ إِلَّا التَّذَمُّرَ", "uz": "Sendan doim faqat nolish eshitaman" },
      { "ar": "وَالْحُجَجَ الَّتِي تُسَوِّغُ بِهَا كَسَلَكَ وَعَجْزَكَ", "uz": "va dangasaligu ojizligingni oqlaydigan bahonalarni" }
    ],
    "full_uz": "Sendan doim faqat nolish va dangasaligu ojizligingni oqlaydigan bahonalarni eshitaman.",
    "note": null
  },
  {
    "num": 38,
    "time": "00:06:11,060 --> 00:06:18,400",
    "arabic": "آهْ يَا أُمِّي آهْ لَوْ كَانَ لَدَيْنَا دُكَّانٌ فِي قَلْبِ السُّوقِ لَكَانَ حَالُنَا غَيْرَ هَذَا الْحَالِ",
    "segs": [
      { "ar": "آهْ يَا أُمِّي آهْ لَوْ كَانَ لَدَيْنَا دُكَّانٌ فِي قَلْبِ السُّوقِ", "uz": "Oh, onajon, oh, agar bizda bozorning markazida do'kon bo'lganida" },
      { "ar": "لَكَانَ حَالُنَا غَيْرَ هَذَا الْحَالِ", "uz": "ahvolimiz bunday bo'lmasdi" }
    ],
    "full_uz": "Oh, onajon, oh, agar bizda bozorning markazida do'kon bo'lganida, ahvolimiz bunday bo'lmasdi.",
    "note": null
  },
  {
    "num": 39,
    "time": "00:06:18,400 --> 00:06:27,720",
    "arabic": "أُمِّي مَا بِكِ يَا أُمِّي أُمِّي إِلَى أَيْنَ تَذْهَبِينَ؟ أُمِّي مَا بِكِ؟",
    "segs": [
      { "ar": "أُمِّي مَا بِكِ يَا أُمِّي", "uz": "Onajon, senga nima bo'ldi, onajon" },
      { "ar": "أُمِّي إِلَى أَيْنَ تَذْهَبِينَ؟", "uz": "onajon, qayerga ketyapsan?" },
      { "ar": "أُمِّي مَا بِكِ؟", "uz": "onajon, senga nima bo'ldi?" }
    ],
    "full_uz": "Onajon, senga nima bo'ldi, onajon? Onajon, qayerga ketyapsan? Onajon, senga nima bo'ldi?",
    "note": null
  },
  {
    "num": 40,
    "time": "00:06:27,720 --> 00:06:29,720",
    "arabic": "مَا بِيهَا أُمُّ عَامِرٍ",
    "segs": null,
    "full_uz": "Omirning onasiga nima bo'ldi?",
    "note": null
  },
  {
    "num": 41,
    "time": "00:06:30,720 --> 00:06:31,720",
    "arabic": "أُمِّي",
    "segs": null,
    "full_uz": "Onajon!",
    "note": null
  },
  {
    "num": 42,
    "time": "00:06:34,720 --> 00:06:35,720",
    "arabic": "أَيْنَ كُنَّا",
    "segs": null,
    "full_uz": "Biz qayerda edik?",
    "note": null
  },
  {
    "num": 43,
    "time": "00:06:39,720 --> 00:06:40,720",
    "arabic": "كُنَّا",
    "segs": null,
    "full_uz": "Edik...",
    "note": null
  },
  {
    "num": 44,
    "time": "00:06:47,720 --> 00:06:48,720",
    "arabic": "آهْ مِنْكِ يَا أُمَّ عَامِرٍ",
    "segs": null,
    "full_uz": "Oh, sendan charchadim-a, Omirning onasi!",
    "note": null
  },
  {
    "num": 45,
    "time": "00:06:49,720 --> 00:06:50,720",
    "arabic": "سَأَضْطَرُّ لِلْبَدْءِ مِنْ جَدِيدٍ",
    "segs": null,
    "full_uz": "Men yana boshidan boshlashga majbur bo'laman.",
    "note": null
  },
  {
    "num": 46,
    "time": "00:06:55,720 --> 00:07:11,000",
    "arabic": "مَا سَبَبُ عِنَادِكَ هَذَا؟ أَنَا عَمُّكَ، اعْتَبِرْنِي فِي مَقَامِ أَخِيكَ الْأَكْبَرِ، لَسْتُ رَجُلًا غَرِيبًا حَتَّى تَرْفُضَ مُسَاعَدَتِي لَكَ، إِنْ كَانَ ذَلِكَ يُضَيِّقُكَ فَاعْتَبِرْ مَا أُقَدِّمُهُ لَكَ دَيْنًا، تَرُدُّهُ لِي حِينَ يَفْتَحُ اللَّهُ لَكَ، لَكِنَّنِي أَرْغَبُ",
    "segs": [
      { "ar": "مَا سَبَبُ عِنَادِكَ هَذَا؟", "uz": "Bu qaysarliging sababi nima?" },
      { "ar": "أَنَا عَمُّكَ، اعْتَبِرْنِي فِي مَقَامِ أَخِيكَ الْأَكْبَرِ", "uz": "Men amakingman, meni katta akang o'rnida deb bil" },
      { "ar": "لَسْتُ رَجُلًا غَرِيبًا حَتَّى تَرْفُضَ مُسَاعَدَتِي لَكَ", "uz": "men senga yordamimni rad etadigan darajada begona odam emasman-ku" },
      { "ar": "إِنْ كَانَ ذَلِكَ يُضَيِّقُكَ فَاعْتَبِرْ مَا أُقَدِّمُهُ لَكَ دَيْنًا، تَرُدُّهُ لِي حِينَ يَفْتَحُ اللَّهُ لَكَ", "uz": "agar bu senga og'ir botsa, bergan narsamni qarz deb bil, Alloh senga imkon bergan payti qaytarib berasan" },
      { "ar": "لَكِنَّنِي أَرْغَبُ", "uz": "lekin men xohlaymanki..." }
    ],
    "full_uz": "Bu qaysarliging sababi nima? Men amakingman, meni katta akang o'rnida deb bil, men senga yordamimni rad etadigan darajada begona odam emasman-ku. Agar bu senga og'ir botsa, bergan narsamni qarz deb bil, Alloh senga imkon bergan payti qaytarib berasan, lekin men xohlaymanki...",
    "note": null
  },
  {
    "num": 47,
    "time": "00:07:11,000 --> 00:07:17,140",
    "arabic": "شَكَرَ اللَّهُ صَنِيعَكَ يَا عَمَّهْ، وَقَدْ تَحَدَّثْنَا فِي هَذَا الْأَمْرِ غَيْرَ مَرَّةٍ، وَأَنْتَ تَعْرِفُ رَأْيِي فِيهِ",
    "segs": [
      { "ar": "شَكَرَ اللَّهُ صَنِيعَكَ يَا عَمَّهْ", "uz": "Alloh yaxshiligingizni ko'p qilsin, amakijon" },
      { "ar": "وَقَدْ تَحَدَّثْنَا فِي هَذَا الْأَمْرِ غَيْرَ مَرَّةٍ، وَأَنْتَ تَعْرِفُ رَأْيِي فِيهِ", "uz": "biz bu masalada necha bor gaplashganmiz, va siz mening bu haqdagi fikrimni bilasiz" }
    ],
    "full_uz": "Alloh yaxshiligingizni ko'p qilsin, amakijon, biz bu masalada necha bor gaplashganmiz, va siz mening bu haqdagi fikrimni bilasiz.",
    "note": null
  },
  {
    "num": 48,
    "time": "00:07:17,139 --> 00:07:21,959",
    "arabic": "أَحْمَدُ، إِلَى مَتَى سَتَبْقَى عَلَى هَذِهِ الْحَالِ أَنْتَ وَأُمُّكَ؟",
    "segs": null,
    "full_uz": "Ahmad, sen va onang qachongacha shu ahvolda qolasizlar?",
    "note": null
  },
  {
    "num": 49,
    "time": "00:07:21,959 --> 00:07:27,039",
    "arabic": "هَأَنْتَ ذَا مُنْذُ أَيَّامٍ تُنَادِي عَلَى دُكَّانِ أَبِيكَ لَعَلَّكَ تَجِدُ مَنْ يَكْتَرِيهِ دُونَ فَائِدَةٍ",
    "segs": [
      { "ar": "هَأَنْتَ ذَا مُنْذُ أَيَّامٍ تُنَادِي عَلَى دُكَّانِ أَبِيكَ", "uz": "Mana, necha kundan beri otangning do'konini chaqirib yuribsan" },
      { "ar": "لَعَلَّكَ تَجِدُ مَنْ يَكْتَرِيهِ دُونَ فَائِدَةٍ", "uz": "ijaraga oladigan kishi topaman deb, natijasiz" }
    ],
    "full_uz": "Mana, necha kundan beri otangning do'konini chaqirib yuribsan, ijaraga oladigan kishi topaman deb, natijasiz.",
    "note": null
  },
  {
    "num": 50,
    "time": "00:07:27,039 --> 00:07:30,939",
    "arabic": "إِنَّ مَعَ الْعُسْرِ يُسْرًا يَا عَمَّاهْ، إِنَّ مَعَ الْعُسْرِ يُسْرًا",
    "segs": null,
    "full_uz": "Qiyinchilik bilan birga yengillik bor, amakijon, qiyinchilik bilan birga yengillik bor.",
    "note": "إِنَّ مَعَ الْعُسْرِ يُسْرًا — Qur'ondagi mashhur oyat (Sharh surasi, 6-oyat) bo'lib, 'har qiyinchilik bilan birga yengillik ham bor' ma'nosini bildiradi."
  },
  {
    "num": 51,
    "time": "00:07:30,939 --> 00:07:36,240",
    "arabic": "وَإِنْ لَمْ أَجِدْ مُسْتَأْجِرًا لِلدُّكَّانِ ضَرَبْتُ فِي الْأَرْضِ بَحْثًا عَنِ الْعَمَلِ",
    "segs": [
      { "ar": "وَإِنْ لَمْ أَجِدْ مُسْتَأْجِرًا لِلدُّكَّانِ", "uz": "Agar do'konga ijarachi topa olmasam" },
      { "ar": "ضَرَبْتُ فِي الْأَرْضِ بَحْثًا عَنِ الْعَمَلِ", "uz": "ish qidirib yer yuzini kezaman" }
    ],
    "full_uz": "Agar do'konga ijarachi topa olmasam, ish qidirib yer yuzini kezaman.",
    "note": "ضَرَبَ فِي الْأَرْضِ — 'yer yuzini kezmoq, sayohat qilmoq' ma'nosidagi klassik arabcha ibora."
  },
  {
    "num": 52,
    "time": "00:07:36,240 --> 00:07:40,959",
    "arabic": "كَمَا تَشَاءُ يَا أَحْمَدُ، كَمَا تَشَاءُ",
    "segs": null,
    "full_uz": "Qanday xohlasang shunday bo'lsin, Ahmad, qanday xohlasang.",
    "note": null
  },
  {
    "num": 53,
    "time": "00:07:40,959 --> 00:07:49,000",
    "arabic": "لَكِنْ عِدْنِي أَلَّا تَنْسَى إِنْ ضَاقَتْ بِكَ السُّبُلُ أَنَّ لَكَ عَمًّا يَحْفَظُهُ اللَّهُ وَيَصِلُ رَحِمَهُ مِنْ بَعْدِهِ",
    "segs": [
      { "ar": "لَكِنْ عِدْنِي أَلَّا تَنْسَى إِنْ ضَاقَتْ بِكَ السُّبُلُ", "uz": "Lekin va'da ber, yo'llar senga tor kelsa, unutmaysan" },
      { "ar": "أَنَّ لَكَ عَمًّا يَحْفَظُهُ اللَّهُ وَيَصِلُ رَحِمَهُ مِنْ بَعْدِهِ", "uz": "seni Alloh asrasin, undan keyin ham qarindoshlik rishtasini uzmaydigan amaking borligini" }
    ],
    "full_uz": "Lekin va'da ber, yo'llar senga tor kelsa, unutmaysan — seni Alloh asrasin, undan keyin ham qarindoshlik rishtasini uzmaydigan amaking borligini.",
    "note": null
  },
  {
    "num": 54,
    "time": "00:07:49,000 --> 00:07:51,079",
    "arabic": "جَزَاكَ اللَّهُ خَيْرًا",
    "segs": null,
    "full_uz": "Alloh sizga yaxshilik bilan mukofot bersin.",
    "note": null
  },
  {
    "num": 55,
    "time": "00:07:51,079 --> 00:07:53,219",
    "arabic": "أَنْتَ أَوْلَى بِي وَأَنَا أَوْلَى بِكَ",
    "segs": null,
    "full_uz": "Sen menga, men esa senga haqliroqmiz.",
    "note": null
  },
  {
    "num": 56,
    "time": "00:07:53,219 --> 00:07:56,979",
    "arabic": "وَلَكِنِّي رَاضٍ بِعَطَاءِ رَبِّي مُتَوَكِّلٌ عَلَيْهِ",
    "segs": null,
    "full_uz": "Lekin men Robbimning ato etganiga rozi, Unga tavakkal qilganman.",
    "note": null
  },
  {
    "num": 57,
    "time": "00:07:56,979 --> 00:07:58,219",
    "arabic": "لَا إِلَهَ إِلَّا اللَّهُ",
    "segs": null,
    "full_uz": "Allohdan boshqa iloh yo'q.",
    "note": null
  },
  {
    "num": 58,
    "time": "00:07:58,219 --> 00:08:00,679",
    "arabic": "أَحْمَدُ إِنْ طَرَأَ جَدِيدٌ فَأَخْبِرْنِي",
    "segs": null,
    "full_uz": "Ahmad, agar biror yangilik chiqsa, menga xabar ber.",
    "note": null
  },
  {
    "num": 59,
    "time": "00:08:00,679 --> 00:08:02,519",
    "arabic": "السَّلَامُ عَلَيْكَ",
    "segs": null,
    "full_uz": "Senga tinchlik-omonlik bo'lsin.",
    "note": null
  },
  {
    "num": 60,
    "time": "00:08:02,519 --> 00:08:04,299",
    "arabic": "وَعَلَيْكُمُ السَّلَامُ وَرَحْمَةُ اللَّهِ",
    "segs": null,
    "full_uz": "Sizga ham tinchlik va Allohning rahmati bo'lsin.",
    "note": null
  },
  {
    "num": 61,
    "time": "00:08:15,060 --> 00:08:15,719",
    "arabic": "يَا اللَّهُ",
    "segs": null,
    "full_uz": "Yo Alloh!",
    "note": null
  },
  {
    "num": 62,
    "time": "00:08:23,039 --> 00:08:27,339",
    "arabic": "مَا وَرَاءَكَ أَيُّهَا الْأَخُ؟",
    "segs": null,
    "full_uz": "Nima olib keldin, birodar?",
    "note": null
  },
  {
    "num": 63,
    "time": "00:08:27,339 --> 00:08:30,360",
    "arabic": "دَعْكَ مِنْ مَا وَرَائِي وَانْظُرْ مَا جِئْتُكَ بِهِ",
    "segs": [
      { "ar": "دَعْكَ مِنْ مَا وَرَائِي", "uz": "Meni ortimdagisi bilan ishing bo'lmasin" },
      { "ar": "وَانْظُرْ مَا جِئْتُكَ بِهِ", "uz": "va senga nima olib kelganimga qara" }
    ],
    "full_uz": "Meni ortimdagisi bilan ishing bo'lmasin, senga nima olib kelganimga qara.",
    "note": null
  },
  {
    "num": 64,
    "time": "00:08:30,360 --> 00:08:32,899",
    "arabic": "وَيْحًا مِنْ أَيْنَ جِئْتَ بِهَا؟",
    "segs": null,
    "full_uz": "Voy, buni qayerdan topding?",
    "note": null
  },
  {
    "num": 65,
    "time": "00:08:32,899 --> 00:08:33,699",
    "arabic": "سَرَقْتُهَا مِنَ السُّوقِ",
    "segs": null,
    "full_uz": "Bozordan o'g'irladim.",
    "note": null
  },
  {
    "num": 66,
    "time": "00:08:33,699 --> 00:08:38,779",
    "arabic": "حَاوَلَ الْحَرَسُ الْإِمْسَاكَ بِهِ وَلَكِنَّنِي ضَلَّلْتُهُمْ فِي الطَّرِيقِ",
    "segs": [
      { "ar": "حَاوَلَ الْحَرَسُ الْإِمْسَاكَ بِهِ", "uz": "Qorovullar uni ushlashga urinishdi" },
      { "ar": "وَلَكِنَّنِي ضَلَّلْتُهُمْ فِي الطَّرِيقِ", "uz": "lekin men ularni yo'lda adashtirib yubordim" }
    ],
    "full_uz": "Qorovullar uni ushlashga urinishdi, lekin men ularni yo'lda adashtirib yubordim.",
    "note": null
  },
  {
    "num": 67,
    "time": "00:08:38,779 --> 00:08:39,860",
    "arabic": "أَحْسَنْتَ الصَّنْعَةَ",
    "segs": null,
    "full_uz": "Ishni chiroyli qilibsan.",
    "note": null
  },
  {
    "num": 68,
    "time": "00:08:39,860 --> 00:08:42,959",
    "arabic": "هَيَّا اذْهَبْ وَأَشْعِلِ النَّارَ رَيْثَمَا أُجَهِّزُهَا",
    "segs": [
      { "ar": "هَيَّا اذْهَبْ وَأَشْعِلِ النَّارَ", "uz": "Bor, o'tni yoq" },
      { "ar": "رَيْثَمَا أُجَهِّزُهَا", "uz": "toki men uni tayyorlab bo'lguncha" }
    ],
    "full_uz": "Bor, o'tni yoq, toki men uni tayyorlab bo'lguncha.",
    "note": null
  },
  {
    "num": 69,
    "time": "00:08:42,959 --> 00:08:45,120",
    "arabic": "هَيَّا فَإِنَّنِي أَتَضَوَّرُ جُوعًا",
    "segs": null,
    "full_uz": "Tezroq, chunki men ochlikdan qiynalyapman.",
    "note": "يَتَضَوَّرُ جُوعًا — 'ochlikdan qiynalmoq, ochlikdan burishib-to'lg'onmoq' ma'nosidagi ibora."
  },
  {
    "num": 70,
    "time": "00:08:45,399 --> 00:09:02,319",
    "arabic": "لَوْ أَنَّهُمْ يُرْسِلُونَ الرَّسَائِلَ مَعَ الشِّيَاهِ بَدَلَ الْحَمَامِ لَأَتَيْتُكَ بِشَاةٍ",
    "segs": [
      { "ar": "لَوْ أَنَّهُمْ يُرْسِلُونَ الرَّسَائِلَ مَعَ الشِّيَاهِ بَدَلَ الْحَمَامِ", "uz": "Agar ular xatlarni kaptar o'rniga qo'y bilan yuborishsa edi" },
      { "ar": "لَأَتَيْتُكَ بِشَاةٍ", "uz": "senga bir qo'y olib kelardim" }
    ],
    "full_uz": "Agar ular xatlarni kaptar o'rniga qo'y bilan yuborishsa edi, senga bir qo'y olib kelardim.",
    "note": null
  },
  {
    "num": 71,
    "time": "00:09:45,559 --> 00:09:48,620",
    "arabic": "السَّلَامُ عَلَيْكُمْ",
    "segs": null,
    "full_uz": "Sizlarga tinchlik-omonlik bo'lsin.",
    "note": null
  },
  {
    "num": 72,
    "time": "00:09:48,620 --> 00:09:50,799",
    "arabic": "وَعَلَيْكُمُ السَّلَامُ وَرَحْمَةُ اللَّهِ وَبَرَكَاتُهُ",
    "segs": null,
    "full_uz": "Sizga ham tinchlik, Allohning rahmati va barakoti bo'lsin.",
    "note": null
  },
  {
    "num": 73,
    "time": "00:09:50,799 --> 00:09:52,959",
    "arabic": "مَا اسْمُكَ يَا فَتَى؟",
    "segs": null,
    "full_uz": "Isming nima, bolakay?",
    "note": null
  },
  {
    "num": 74,
    "time": "00:09:52,959 --> 00:09:55,360",
    "arabic": "أَحْمَدُ بْنُ مُحَمَّدِ بْنِ حَنْبَلٍ الشَّيْبَانِيُّ",
    "segs": null,
    "full_uz": "Ahmad ibn Muhammad ibn Hanbal ash-Shaybaniy.",
    "note": null
  },
  {
    "num": 75,
    "time": "00:09:55,360 --> 00:09:57,039",
    "arabic": "لِمَنْ هَذِهِ الدُّكَّانُ؟",
    "segs": null,
    "full_uz": "Bu do'kon kimniki?",
    "note": null
  },
  {
    "num": 76,
    "time": "00:09:57,039 --> 00:09:57,379",
    "arabic": "لِأَبِي",
    "segs": null,
    "full_uz": "Otamniki.",
    "note": null
  },
  {
    "num": 77,
    "time": "00:09:57,379 --> 00:09:59,579",
    "arabic": "أَيْنَ هُوَ؟ أُرِيدُ أَنْ أَرَاهُ الْآنَ",
    "segs": null,
    "full_uz": "U qayerda? Uni hozir ko'rmoqchiman.",
    "note": null
  },
  {
    "num": 78,
    "time": "00:09:59,579 --> 00:10:01,860",
    "arabic": "أَبِي تَوَفَّاهُ اللَّهُ مُنْذُ كُنْتُ صَغِيرًا",
    "segs": null,
    "full_uz": "Otam men kichkina bo'lganimda vafot etgan.",
    "note": null
  },
  {
    "num": 79,
    "time": "00:10:01,860 --> 00:10:05,519",
    "arabic": "تَغَمَّدَهُ اللَّهُ بِرَحْمَتِهِ وَبَارَكَ اللَّهُ فِيكَ يَا وَلَدِي",
    "segs": [
      { "ar": "تَغَمَّدَهُ اللَّهُ بِرَحْمَتِهِ", "uz": "Alloh rahmatiga g'arq etsin" },
      { "ar": "وَبَارَكَ اللَّهُ فِيكَ يَا وَلَدِي", "uz": "va senga baraka bersin, o'g'lim" }
    ],
    "full_uz": "Alloh rahmatiga g'arq etsin va senga baraka bersin, o'g'lim.",
    "note": null
  },
  {
    "num": 80,
    "time": "00:10:05,519 --> 00:10:08,759",
    "arabic": "خَيْرًا يَا خَالَةُ، أَلَكِ مِنْ حَاجَةٍ أَقْضِيهَا؟",
    "segs": null,
    "full_uz": "Xayrmi, xolajon? Bajarib beradigan ishingiz bormi?",
    "note": null
  },
  {
    "num": 81,
    "time": "00:10:08,759 --> 00:10:11,639",
    "arabic": "مَنْ يُرَاعِي شَأْنَ هَذَا الدُّكَّانِ؟",
    "segs": null,
    "full_uz": "Bu do'konning ishlarini kim boshqaradi?",
    "note": null
  },
  {
    "num": 82,
    "time": "00:10:11,639 --> 00:10:13,419",
    "arabic": "أُمِّي وَمَنْ يُخَاطِبُكَ يَا خَالِدُ",
    "segs": [
      { "ar": "أُمِّي", "uz": "Onam." },
      { "ar": "وَمَنْ يُخَاطِبُكَ يَا خَالِدُ", "uz": "Kim senga gapiryapti, Xolid?" }
    ],
    "full_uz": "Onam. Kim senga gapiryapti, Xolid?",
    "note": null
  },
  {
    "num": 83,
    "time": "00:10:13,419 --> 00:10:16,740",
    "arabic": "حَسَنًا، أُرِيدُ مُقَابَلَةَ أُمِّكَ",
    "segs": null,
    "full_uz": "Xo'p, men onang bilan uchrashmoqchiman.",
    "note": null
  },
  {
    "num": 84,
    "time": "00:10:16,740 --> 00:10:19,759",
    "arabic": "حَسَنًا يَا خَالِدُ، حَسَنًا",
    "segs": null,
    "full_uz": "Xo'p, Xolid, xo'p.",
    "note": null
  },
  {
    "num": 85,
    "time": "00:10:23,759 --> 00:10:26,039",
    "arabic": "بِشْرِي يَا أُمَّ خَالِدٍ",
    "segs": null,
    "full_uz": "Xushxabar, Umm Xolid!",
    "note": null
  },
  {
    "num": 86,
    "time": "00:10:26,039 --> 00:10:36,559",
    "arabic": "لَا أَدْرِي مَا أَقُولُ لَكِ، وَلَكِنَّ ابْنِي خَالِدًا أَخْبَرَنِي أَنَّ صَانِعَ السَّجَّادِ لَا يَحْتَاجُ الْآنَ لِمَنْ يَحِيكَ السَّجَّادَ",
    "segs": [
      { "ar": "لَا أَدْرِي مَا أَقُولُ لَكِ، وَلَكِنَّ ابْنِي خَالِدًا أَخْبَرَنِي", "uz": "Senga nima deyishni bilmayman, lekin o'g'lim Xolid menga aytdi" },
      { "ar": "أَنَّ صَانِعَ السَّجَّادِ لَا يَحْتَاجُ الْآنَ لِمَنْ يَحِيكَ السَّجَّادَ", "uz": "gilam ustasiga hozircha gilam to'quvchi kerak emas ekan" }
    ],
    "full_uz": "Senga nima deyishni bilmayman, lekin o'g'lim Xolid menga aytdi: gilam ustasiga hozircha gilam to'quvchi kerak emas ekan.",
    "note": null
  },
  {
    "num": 87,
    "time": "00:10:38,759 --> 00:10:42,720",
    "arabic": "تَحَلَّيْ بِالصَّبْرِ يَا أُمَّ أَحْمَدَ مَا بَعْدَ الضِّيقِ إِلَّا الْفَرَجُ",
    "segs": [
      { "ar": "تَحَلَّيْ بِالصَّبْرِ يَا أُمَّ أَحْمَدَ", "uz": "Sabr qiling, Umm Ahmad" },
      { "ar": "مَا بَعْدَ الضِّيقِ إِلَّا الْفَرَجُ", "uz": "tiqilinchdan keyin faqat yengillik keladi" }
    ],
    "full_uz": "Sabr qiling, Umm Ahmad, tiqilinchdan keyin faqat yengillik keladi.",
    "note": null
  },
  {
    "num": 88,
    "time": "00:10:42,720 --> 00:10:50,120",
    "arabic": "لَا أَدْرِي مَا أَقُولُ لَكِ يَا أُمَّ خَالِدٍ إِنَّمَا بُؤْسِي وَحُزْنِي عَلَى وَلَدِي أَحْمَدَ",
    "segs": [
      { "ar": "لَا أَدْرِي مَا أَقُولُ لَكِ يَا أُمَّ خَالِدٍ", "uz": "Senga nima deyishni bilmayman, Umm Xolid" },
      { "ar": "إِنَّمَا بُؤْسِي وَحُزْنِي عَلَى وَلَدِي أَحْمَدَ", "uz": "mening bor qayg'u-alamim o'g'lim Ahmad uchun" }
    ],
    "full_uz": "Senga nima deyishni bilmayman, Umm Xolid, mening bor qayg'u-alamim o'g'lim Ahmad uchun.",
    "note": null
  }
  ,
  {
    "num": 89,
    "time": "00:10:50,120 --> 00:10:56,080",
    "arabic": "فَإِنْ بَقِينَا عَلَى هَذِهِ الْحَالِ أَخْشَى أَنْ يَفُوتَهُ الْعِلْمُ لِانْشِغَالِهِ بِطَلَبِ الرِّزْقِ",
    "segs": [
      { "ar": "فَإِنْ بَقِينَا عَلَى هَذِهِ الْحَالِ", "uz": "Agar shu ahvolda qolsak" },
      { "ar": "أَخْشَى أَنْ يَفُوتَهُ الْعِلْمُ لِانْشِغَالِهِ بِطَلَبِ الرِّزْقِ", "uz": "qo'rqamanki, rizq izlash bilan band bo'lib, ilmdan mahrum bo'lib qoladi" }
    ],
    "full_uz": "Agar shu ahvolda qolsak, qo'rqamanki, rizq izlash bilan band bo'lib, ilmdan mahrum bo'lib qoladi.",
    "note": null
  },
  {
    "num": 90,
    "time": "00:10:56,080 --> 00:10:59,720",
    "arabic": "وَأَنَا قَدْ نَذَرْتُهُ لِطَلَبِ الْعِلْمِ وَالِاشْتِغَالِ بِهِ",
    "segs": null,
    "full_uz": "Men esa uni ilm izlash va shu bilan shug'ullanishga nazr qilganman.",
    "note": null
  },
  {
    "num": 91,
    "time": "00:10:59,720 --> 00:11:06,679",
    "arabic": "لَابُدَّ أَنَّهُ أَحْمَدُ أَدْعُو اللَّهَ أَنْ يَكُونَ قَدْ وَجَدَ مُكْتَرِيًا لِلدُّكَّانِ",
    "segs": [
      { "ar": "لَابُدَّ أَنَّهُ أَحْمَدُ", "uz": "Bu albatta Ahmad bo'lsa kerak" },
      { "ar": "أَدْعُو اللَّهَ أَنْ يَكُونَ قَدْ وَجَدَ مُكْتَرِيًا لِلدُّكَّانِ", "uz": "Allohdan do'konga ijarachi topgan bo'lishini so'rayman" }
    ],
    "full_uz": "Bu albatta Ahmad bo'lsa kerak, Allohdan do'konga ijarachi topgan bo'lishini so'rayman.",
    "note": null
  },
  {
    "num": 92,
    "time": "00:11:08,759 --> 00:11:15,299",
    "arabic": "السَّلَامُ عَلَيْكُمْ",
    "segs": null,
    "full_uz": "Sizlarga tinchlik-omonlik bo'lsin.",
    "note": null
  },
  {
    "num": 93,
    "time": "00:11:15,299 --> 00:11:17,539",
    "arabic": "وَعَلَيْكُمُ السَّلَامُ وَرَحْمَةُ اللَّهِ",
    "segs": null,
    "full_uz": "Sizga ham tinchlik va Allohning rahmati bo'lsin.",
    "note": null
  },
  {
    "num": 94,
    "time": "00:11:17,539 --> 00:11:19,720",
    "arabic": "أَنْتِ أُمُّ أَحْمَدَ؟",
    "segs": null,
    "full_uz": "Siz Ahmadning onasimisiz?",
    "note": null
  },
  {
    "num": 95,
    "time": "00:11:19,720 --> 00:11:20,120",
    "arabic": "أَجَلْ",
    "segs": null,
    "full_uz": "Ha.",
    "note": null
  },
  {
    "num": 96,
    "time": "00:11:20,120 --> 00:11:21,799",
    "arabic": "لِي حَاجَةٌ عِنْدَكِ إِذَنْ",
    "segs": null,
    "full_uz": "Unday bo'lsa, sizdan bir ishim bor.",
    "note": null
  },
  {
    "num": 97,
    "time": "00:11:21,799 --> 00:11:27,279",
    "arabic": "مَاذَا تَقُولُ؟",
    "segs": null,
    "full_uz": "Nima deyapsiz?",
    "note": null
  },
  {
    "num": 98,
    "time": "00:11:27,279 --> 00:11:29,279",
    "arabic": "هَذَا مَا حَدَثَ يَا سَيِّدِي",
    "segs": null,
    "full_uz": "Bo'lgan voqea shu, xo'jayin.",
    "note": null
  },
  {
    "num": 99,
    "time": "00:11:29,279 --> 00:11:32,659",
    "arabic": "الْوَيْلُ لَكَ إِنْ كَانَ هَذَا صَحِيحًا",
    "segs": null,
    "full_uz": "Agar bu rost bo'lsa, senga voy bo'lsin.",
    "note": null
  },
  {
    "num": 100,
    "time": "00:11:32,659 --> 00:11:37,179",
    "arabic": "بَلْ قُلْ الْوَيْلُ لَنَا جَمِيعًا إِنْ وَصَلَتِ الرِّسَالَةُ لِيَدِ هَارُونَ الرَّشِيدِ",
    "segs": [
      { "ar": "بَلْ قُلْ الْوَيْلُ لَنَا جَمِيعًا", "uz": "Yo'q, hammamizga voy bo'lsin, deng" },
      { "ar": "إِنْ وَصَلَتِ الرِّسَالَةُ لِيَدِ هَارُونَ الرَّشِيدِ", "uz": "agar xat Horun ar-Rashidning qo'liga yetib borsa" }
    ],
    "full_uz": "Yo'q, agar xat Horun ar-Rashidning qo'liga yetib borsa, hammamizga voy bo'lsin, deng.",
    "note": null
  },
  {
    "num": 101,
    "time": "00:11:37,179 --> 00:11:43,459",
    "arabic": "اذْهَبْ وَائْتِنِي بِذَلِكَ الْفَتَى الَّذِي اخْتَلَسَ الْحَمَامَةَ لَا تَعُدْ إِلَّا وَهُوَ فِي قَبْضَتِكَ",
    "segs": [
      { "ar": "اذْهَبْ وَائْتِنِي بِذَلِكَ الْفَتَى الَّذِي اخْتَلَسَ الْحَمَامَةَ", "uz": "Bor, kaptarni o'g'irlagan o'sha yigitni olib kel" },
      { "ar": "لَا تَعُدْ إِلَّا وَهُوَ فِي قَبْضَتِكَ", "uz": "faqat uni qo'lga olganingdan keyin qayt" }
    ],
    "full_uz": "Bor, kaptarni o'g'irlagan o'sha yigitni olib kel, faqat uni qo'lga olganingdan keyin qayt.",
    "note": null
  },
  {
    "num": 102,
    "time": "00:11:46,699 --> 00:11:51,899",
    "arabic": "أُرْسِلَتِ الْحَارِسَةُ لِلْبَحْثِ عَنْهُ لَا يَكْفِي أُرِيدُكَ أَنْ تَذْهَبَ بِنَفْسِكَ لِلْبَحْثِ عَنْهُ",
    "segs": [
      { "ar": "أُرْسِلَتِ الْحَارِسَةُ لِلْبَحْثِ عَنْهُ", "uz": "Qorovullar uni qidirish uchun yuborildi" },
      { "ar": "لَا يَكْفِي أُرِيدُكَ أَنْ تَذْهَبَ بِنَفْسِكَ لِلْبَحْثِ عَنْهُ", "uz": "yetarli emas, o'zing borib uni qidirishingni xohlayman" }
    ],
    "full_uz": "Qorovullar uni qidirish uchun yuborildi. Yetarli emas, o'zing borib uni qidirishingni xohlayman.",
    "note": null
  },
  {
    "num": 103,
    "time": "00:11:54,659 --> 00:11:58,099",
    "arabic": "إِنَّ مَصِيرًا رَهْنٌ بِمَضْمُونِ رِسَالَتِي يَا مَسْعُودُ لَا يَنْبَغِي لِمَخْلُوقٍ أَنْ يَعْلَمَ بِمُحْتَوَاهَا أَفَهِمْتَ؟",
    "segs": [
      { "ar": "إِنَّ مَصِيرًا رَهْنٌ بِمَضْمُونِ رِسَالَتِي يَا مَسْعُودُ", "uz": "Bir taqdir mening xatimning mazmuniga bog'liq, Mas'ud" },
      { "ar": "لَا يَنْبَغِي لِمَخْلُوقٍ أَنْ يَعْلَمَ بِمُحْتَوَاهَا أَفَهِمْتَ؟", "uz": "hech bir jonzod uning mazmunini bilmasligi kerak, tushundingmi?" }
    ],
    "full_uz": "Bir taqdir mening xatimning mazmuniga bog'liq, Mas'ud, hech bir jonzod uning mazmunini bilmasligi kerak, tushundingmi?",
    "note": null
  },
  {
    "num": 104,
    "time": "00:11:59,799 --> 00:12:01,279",
    "arabic": "هَيَّا اذْهَبْ سَمْعًا وَطَاعَةً يَا سَيِّدِي",
    "segs": [
      { "ar": "هَيَّا اذْهَبْ", "uz": "Bor, tezroq" },
      { "ar": "سَمْعًا وَطَاعَةً يَا سَيِّدِي", "uz": "eshitdim va bo'ysunaman, xo'jayin" }
    ],
    "full_uz": "Bor, tezroq. Eshitdim va bo'ysunaman, xo'jayin.",
    "note": null
  },
  {
    "num": 105,
    "time": "00:12:06,939 --> 00:12:10,899",
    "arabic": "إِنْ وَقَعَتْ رِسَالَةٌ بِيَدِ أَحَدِ رِجَالَاتِ الْقَصْرِ",
    "segs": null,
    "full_uz": "Agar xat saroy amaldorlaridan birining qo'liga tushsa,",
    "note": null
  },
  {
    "num": 106,
    "time": "00:12:10,899 --> 00:12:13,879",
    "arabic": "ضُرِبَتْ أَعْنَاقُنَا",
    "segs": null,
    "full_uz": "boshlarimiz kesiladi.",
    "note": null
  },
  {
    "num": 107,
    "time": "00:12:13,879 --> 00:12:24,379",
    "arabic": "أَحْمَدُ أَحْمَدُ",
    "segs": null,
    "full_uz": "Ahmad! Ahmad!",
    "note": null
  },
  {
    "num": 108,
    "time": "00:12:24,379 --> 00:12:26,799",
    "arabic": "السَّلَامُ عَلَيْكُمْ يَا عَمَّاهْ",
    "segs": null,
    "full_uz": "Assalomu alaykum, amakijon.",
    "note": null
  },
  {
    "num": 109,
    "time": "00:12:26,799 --> 00:12:28,199",
    "arabic": "وَعَلَيْكَ السَّلَامُ إِلَى أَيْنَ؟",
    "segs": [
      { "ar": "وَعَلَيْكَ السَّلَامُ", "uz": "Va alaykum salom" },
      { "ar": "إِلَى أَيْنَ؟", "uz": "Qayerga?" }
    ],
    "full_uz": "Va alaykum salom. Qayerga?",
    "note": null
  },
  {
    "num": 110,
    "time": "00:12:28,199 --> 00:12:29,480",
    "arabic": "إِلَى حَلْقَةِ شَيْخِي",
    "segs": null,
    "full_uz": "Ustozimning darsiga.",
    "note": null
  },
  {
    "num": 111,
    "time": "00:12:29,480 --> 00:12:34,120",
    "arabic": "آهْ مَا دُمْتَ تَذْهَبُ إِلَى حَلْقَةِ شَيْخِكَ إِذَنْ لَابُدَّ أَنَّكَ وَجَدْتَ مُكْتَرِيًا لِلدُّكَّانِ",
    "segs": [
      { "ar": "آهْ مَا دُمْتَ تَذْهَبُ إِلَى حَلْقَةِ شَيْخِكَ", "uz": "Oh, ustozingning darsiga borar ekansan" },
      { "ar": "إِذَنْ لَابُدَّ أَنَّكَ وَجَدْتَ مُكْتَرِيًا لِلدُّكَّانِ", "uz": "demak, do'konga ijarachi topgan bo'lishing kerak" }
    ],
    "full_uz": "Oh, ustozingning darsiga borar ekansan, demak, do'konga ijarachi topgan bo'lishing kerak.",
    "note": null
  },
  {
    "num": 112,
    "time": "00:12:34,120 --> 00:12:36,440",
    "arabic": "عَجِّلْ وَالْحَمْدُ لِلَّهِ اسْتَوْدَعَكَ اللَّهُ",
    "segs": [
      { "ar": "عَجِّلْ وَالْحَمْدُ لِلَّهِ", "uz": "Shoshil, alhamdulillah" },
      { "ar": "اسْتَوْدَعَكَ اللَّهُ", "uz": "Alloh senga omonat qilib qo'ysin" }
    ],
    "full_uz": "Shoshil, alhamdulillah, Alloh senga omonat qilib qo'ysin.",
    "note": null
  },
  {
    "num": 113,
    "time": "00:12:36,440 --> 00:12:38,759",
    "arabic": "فَلْيَضْحَكُوا قَلِيلًا وَلْيَبْكُوا كَثِيرًا",
    "segs": null,
    "full_uz": "Ular oz kulishsin-u, ko'p yig'lashsin.",
    "note": null
  },
  {
    "num": 114,
    "time": "00:12:38,759 --> 00:12:46,759",
    "arabic": "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ",
    "segs": null,
    "full_uz": "Mehribon va rahmli Alloh nomi bilan.",
    "note": null
  },
  {
    "num": 115,
    "time": "00:12:46,759 --> 00:12:50,519",
    "arabic": "السَّلَامُ عَلَى مَوْصُولِ الْجَاهِ ابْنِ الْأَيْهَمِ",
    "segs": null,
    "full_uz": "Yuksak martabali, Ibn al-Ayhamning nasliga salom bo'lsin.",
    "note": null
  },
  {
    "num": 116,
    "time": "00:12:50,519 --> 00:12:54,399",
    "arabic": "اسْقِ وَرْدَةَ الْبَيْتِ الشَّرِيفَةَ",
    "segs": null,
    "full_uz": "Sharafli uyning gulini sug'or.",
    "note": null
  },
  {
    "num": 117,
    "time": "00:12:54,399 --> 00:12:58,240",
    "arabic": "وَدَعِ الْأَمَانَةَ مُرْسَلَةً فِي مَاءِ دِجْلَةَ",
    "segs": null,
    "full_uz": "Va omonatni Dajla suvida yuborilgan holda qoldir.",
    "note": null
  },
  {
    "num": 118,
    "time": "00:12:58,240 --> 00:13:03,460",
    "arabic": "الْعَيْنُ الْبَاكِيَةُ تَنْتَظِرُ رُؤْيَةَ وَرْدَتِهَا فِي الْبَصْرَةِ",
    "segs": null,
    "full_uz": "Yig'layotgan ko'z o'z gulini Basrada ko'rishni kutmoqda.",
    "note": null
  },
  {
    "num": 119,
    "time": "00:13:03,460 --> 00:13:07,019",
    "arabic": "شَمْسٌ تَذْهَبُ وَأُخْرَى",
    "segs": null,
    "full_uz": "Bir quyosh ketadi, boshqasi...",
    "note": null
  },
  {
    "num": 120,
    "time": "00:13:07,019 --> 00:13:09,919",
    "arabic": "ثُمَّ أَطْلِقْ لِلْوَرْدَةِ الْهَوَاءَ",
    "segs": null,
    "full_uz": "So'ng gulga havo ber.",
    "note": null
  },
  {
    "num": 121,
    "time": "00:13:09,919 --> 00:13:14,740",
    "arabic": "وَارْحَلْ إِلَى مَيَّافَارِقِينَ عَلَى الْفَوْرِ وَالْعَجَلِ",
    "segs": null,
    "full_uz": "Va shoshilinch ravishda Mayyafariqinga jo'na.",
    "note": null
  },
  {
    "num": 122,
    "time": "00:13:14,740 --> 00:13:18,320",
    "arabic": "صَدِيقُكُمْ ثَوْبَةُ",
    "segs": null,
    "full_uz": "Do'stingiz Sawba.",
    "note": null
  },
  {
    "num": 123,
    "time": "00:13:18,320 --> 00:13:23,200",
    "arabic": "إِنَّهَا قَصِيدَةٌ رَائِعَةٌ",
    "segs": null,
    "full_uz": "Bu ajoyib qasida.",
    "note": null
  },
  {
    "num": 124,
    "time": "00:13:23,200 --> 00:13:28,019",
    "arabic": "أَهَذِهِ رُقْيَةُ سَاحِرٍ أَمْ زَجَلُ شَاعِرٍ يَا بَهْلُولُ؟",
    "segs": null,
    "full_uz": "Bu sehrgarning afsunimi yoki shoirning she'rimi, Bahlul?",
    "note": null
  },
  {
    "num": 125,
    "time": "00:13:28,240 --> 00:13:31,940",
    "arabic": "وَمَاذَا تَتَوَقَّعُونَ مِنَ الْمَجَانِينِ غَيْرَ الْهَذَيَانِ",
    "segs": null,
    "full_uz": "Jinnilardan sayrashdan boshqa nima kutasizlar?",
    "note": null
  },
  {
    "num": 126,
    "time": "00:13:43,039 --> 00:13:44,919",
    "arabic": "لَعَلَّهُ لَيْسَ هَذَيَانًا",
    "segs": null,
    "full_uz": "Balki bu sayrash emasdir.",
    "note": null
  },
  {
    "num": 127,
    "time": "00:13:44,919 --> 00:13:47,700",
    "arabic": "وَإِنْ لَمْ يَكُنْ هَذَيَانًا فَمَاذَا يَكُونُ إِذَنْ",
    "segs": null,
    "full_uz": "Agar sayrash bo'lmasa, unda nima bo'ladi?",
    "note": null
  },
  {
    "num": 128,
    "time": "00:14:15,740 --> 00:14:18,780",
    "arabic": "أَحْسَبُ أَنَّهُ كَلَامٌ مُلَغَّزٌ وَلَهُ مَا بَعْدَهُ",
    "segs": null,
    "full_uz": "Menimcha, bu topishmoqli gap, va uning davomi bor.",
    "note": null
  },
  {
    "num": 129,
    "time": "00:14:18,780 --> 00:14:22,560",
    "arabic": "وَمَا تَعْبِيرُكَ لَهُ يَا ابْنَ أَخِي؟",
    "segs": null,
    "full_uz": "Uning izohi qanday, jiyanim?",
    "note": null
  },
  {
    "num": 130,
    "time": "00:14:22,560 --> 00:14:26,460",
    "arabic": "يَبْدُو أَنَّ شَخْصًا مُهِمًّا سَيَهْرُبُ مِنَ الْقَصْرِ مِنْ خِلَالِ نَهْرِ دِجْلَةَ وَهُنَاكَ مَنْ يَنْتَظِرُهُ فِي الْبَصْرَةِ",
    "segs": [
      { "ar": "يَبْدُو أَنَّ شَخْصًا مُهِمًّا سَيَهْرُبُ مِنَ الْقَصْرِ مِنْ خِلَالِ نَهْرِ دِجْلَةَ", "uz": "Shekilli, muhim bir shaxs saroydan Dajla daryosi orqali qochadi" },
      { "ar": "وَهُنَاكَ مَنْ يَنْتَظِرُهُ فِي الْبَصْرَةِ", "uz": "va Basrada uni kutayotgan kishi bor" }
    ],
    "full_uz": "Shekilli, muhim bir shaxs saroydan Dajla daryosi orqali qochadi, va Basrada uni kutayotgan kishi bor.",
    "note": null
  },
  {
    "num": 131,
    "time": "00:14:26,460 --> 00:14:28,960",
    "arabic": "وَبَعْدَ يَوْمٍ وَلَيْلَةٍ سَيُطْلَقُ",
    "segs": null,
    "full_uz": "Va bir kecha-kunduzdan so'ng ozod bo'ladi.",
    "note": null
  },
  {
    "num": 132,
    "time": "00:14:28,960 --> 00:14:33,480",
    "arabic": "وَعَلَى مَنْ يَتَوَلَّى ذَلِكَ أَنْ يَهْرُبَ إِلَى مَدِينَةِ مَيَّافَارِقِينَ",
    "segs": null,
    "full_uz": "Buni uddalaydigan kishi Mayyafariqin shahriga qochishi lozim.",
    "note": null
  },
  {
    "num": 133,
    "time": "00:14:33,480 --> 00:14:36,560",
    "arabic": "أَحَقًّا تَتَكَلَّمُ يَا أَحْمَدُ أَمْ تَمْزَحُ؟",
    "segs": null,
    "full_uz": "Rostdan gapiryapsanmi, Ahmad, yoki hazillashyapsanmi?",
    "note": null
  },
  {
    "num": 134,
    "time": "00:14:36,560 --> 00:14:39,120",
    "arabic": "وَمُنْذُ مَتَى عَهِدْتَنِي أَمْزَحُ يَا عَمِّ؟",
    "segs": null,
    "full_uz": "Meni qachondan beri hazillashadigan deb bilasiz, amaki?",
    "note": null
  },
  {
    "num": 135,
    "time": "00:14:39,120 --> 00:14:42,900",
    "arabic": "إِنْ كَانَ تَأْوِيلُكَ لِلرِّسَالَةِ صَحِيحًا",
    "segs": null,
    "full_uz": "Agar xatni talqin qilishing to'g'ri bo'lsa,",
    "note": null
  },
  {
    "num": 136,
    "time": "00:14:42,900 --> 00:14:46,120",
    "arabic": "فَثَمَّ خَطَرٌ يُوشِكُ أَنْ يَضُرَّ الرَّاعِيَ وَالرَّعِيَّةَ",
    "segs": null,
    "full_uz": "demak, hukmdor va xalqqa zarar yetkazishi mumkin bo'lgan xavf bor,",
    "note": null
  },
  {
    "num": 137,
    "time": "00:14:46,120 --> 00:14:48,900",
    "arabic": "وَيَجِبُ أَنْ يَنْتَبِهَ إِلَيْهِ وُلَاةُ أُمُورِنَا",
    "segs": null,
    "full_uz": "va rahbarlarimiz bunga e'tibor qaratishlari kerak.",
    "note": null
  },
  {
    "num": 138,
    "time": "00:14:48,900 --> 00:14:51,720",
    "arabic": "وَمَنْ يَسْتَطِيعُ ذَلِكَ؟",
    "segs": null,
    "full_uz": "Kim buni uddalay oladi?",
    "note": null
  },
  {
    "num": 139,
    "time": "00:14:51,720 --> 00:14:55,420",
    "arabic": "أَنَا أَعْرِفُ شَخْصًا بِاسْتِطَاعَتِهِ أَنْ يُوصِلَنَا إِلَى الْقَصْرِ",
    "segs": null,
    "full_uz": "Men bizni saroyga yetkazib qo'ya oladigan bir odamni bilaman.",
    "note": null
  },
  {
    "num": 140,
    "time": "00:15:55,419 --> 00:16:02,419",
    "arabic": "إِلَى مَتَى سَنَظَلُّ هَكَذَا يَا أُمِّي؟",
    "segs": null,
    "full_uz": "Onajon, biz qachongacha shunday qolamiz?",
    "note": null
  },
  {
    "num": 141,
    "time": "00:16:02,419 --> 00:16:04,579",
    "arabic": "مَلِلْتُ هَذِهِ الْحَيَاةَ",
    "segs": null,
    "full_uz": "Bu hayotdan charchadim.",
    "note": null
  },
  {
    "num": 142,
    "time": "00:16:04,579 --> 00:16:08,199",
    "arabic": "مَنْ بِعُمْرِي تَزَوَّجُوا وَأَصْبَحُوا آبَاءً",
    "segs": [
      { "ar": "مَنْ بِعُمْرِي تَزَوَّجُوا", "uz": "Mening yoshimdagilar uylanib bo'lishdi" },
      { "ar": "وَأَصْبَحُوا آبَاءً", "uz": "va ota bo'lishdi" }
    ],
    "full_uz": "Mening yoshimdagilar uylanib, ota bo'lishdi.",
    "note": null
  },
  {
    "num": 143,
    "time": "00:16:08,199 --> 00:16:12,319",
    "arabic": "كَبِرْتَ وَأَصْبَحْتَ تُفَكِّرُ بِالزَّوَاجِ أَيْضًا",
    "segs": null,
    "full_uz": "Kattalashibsan, sen ham uylanish haqida o'ylay boshlabsan.",
    "note": null
  },
  {
    "num": 144,
    "time": "00:16:12,319 --> 00:16:15,559",
    "arabic": "لَوْ أَنَّنِي انْخَرَطْتُ فِي أَعْمَالٍ أَقْتَاتُ مِنْهَا",
    "segs": null,
    "full_uz": "Agar men tirikchilik qiladigan bir ishga kirishganimda,",
    "note": null
  },
  {
    "num": 145,
    "time": "00:16:15,559 --> 00:16:20,219",
    "arabic": "أَلَيْسَ أَفْضَلَ مِنْ حَيَاةِ اللُّصُوصِ هَذِهِ؟",
    "segs": null,
    "full_uz": "bu o'g'rilar hayotidan yaxshiroq bo'lmasmidi?",
    "note": null
  },
  {
    "num": 146,
    "time": "00:16:23,980 --> 00:16:27,480",
    "arabic": "وَمَاذَا تَعْرِفُ غَيْرَ السَّرِقَةِ؟ أَمْ أَنَّكَ خَجِلٌ مِنْ صَنْعَةِ أَبِيكَ؟",
    "segs": [
      { "ar": "وَمَاذَا تَعْرِفُ غَيْرَ السَّرِقَةِ؟", "uz": "O'g'irlikdan boshqa nimani bilasan?" },
      { "ar": "أَمْ أَنَّكَ خَجِلٌ مِنْ صَنْعَةِ أَبِيكَ؟", "uz": "Yoki otangning kasbidan uyalyapsanmi?" }
    ],
    "full_uz": "O'g'irlikdan boshqa nimani bilasan? Yoki otangning kasbidan uyalyapsanmi?",
    "note": null
  },
  {
    "num": 147,
    "time": "00:16:27,480 --> 00:16:30,879",
    "arabic": "يَا أُمَّاهْ، السَّرِقَةُ لَيْسَتْ صَنْعَةً، لَيْسَتْ صَنْعَةً",
    "segs": null,
    "full_uz": "Onajon, o'g'irlik kasb emas, kasb emas.",
    "note": null
  },
  {
    "num": 148,
    "time": "00:16:30,879 --> 00:16:35,800",
    "arabic": "وَهَذَا الْمَكَانُ لَيْسَ لِي",
    "segs": null,
    "full_uz": "Va bu joy ham menga tegishli emas.",
    "note": null
  },
  {
    "num": 149,
    "time": "00:16:35,800 --> 00:16:37,980",
    "arabic": "أَجَلْ، مَكَانُكَ عَلَى يَمِينِ هَارُونَ الرَّشِيدِ",
    "segs": null,
    "full_uz": "Ha, sening joying Horun ar-Rashidning o'ng tomonida-da.",
    "note": null
  },
  {
    "num": 150,
    "time": "00:16:38,980 --> 00:16:40,200",
    "arabic": "وَهَلْ تُجِيدُ شَيْئًا غَيْرَ السَّرِقَةِ؟",
    "segs": null,
    "full_uz": "O'g'irlikdan boshqa biror narsani uddalaysanmi?",
    "note": null
  },
  {
    "num": 151,
    "time": "00:16:40,200 --> 00:16:43,320",
    "arabic": "وَلَيْتَكَ تَفْرَحُ فِيهَا إِنَّكَ لَا تَسْرِقُ إِلَّا مَا لَا يُسْمِنُ وَلَا يُغْنِي مِنْ جُوعٍ",
    "segs": [
      { "ar": "وَلَيْتَكَ تَفْرَحُ فِيهَا", "uz": "Va undan xursand ham bo'lolmaysan" },
      { "ar": "إِنَّكَ لَا تَسْرِقُ إِلَّا مَا لَا يُسْمِنُ وَلَا يُغْنِي مِنْ جُوعٍ", "uz": "sen faqat och qornni to'ydirmaydigan, foyda bermaydigan narsalarnigina o'g'irlaysan" }
    ],
    "full_uz": "Va undan xursand ham bo'lolmaysan, sen faqat och qornni to'ydirmaydigan, foyda bermaydigan narsalarnigina o'g'irlaysan.",
    "note": "لَا يُسْمِنُ وَلَا يُغْنِي مِنْ جُوعٍ — Qur'ondagi (G'oshiya surasi, 7-oyat) iboraga ishora bo'lib, 'na to'ydiradi, na ochlikdan qutqaradi' ma'nosidagi, foydasiz narsani ifodalovchi ibora."
  },
  {
    "num": 152,
    "time": "00:16:43,320 --> 00:16:44,980",
    "arabic": "إِنَّكَ عَارٌ حَتَّى عَلَى اللُّصُوصِ",
    "segs": null,
    "full_uz": "Sen hatto o'g'rilarga ham sharmandasan.",
    "note": null
  },
  {
    "num": 153,
    "time": "00:16:45,580 --> 00:16:48,399",
    "arabic": "ذَلِكَ لِأَنَّنِي لَسْتُ مِنْهُمْ",
    "segs": null,
    "full_uz": "Bu — men ularga o'xshamaganim uchun.",
    "note": null
  },
  {
    "num": 154,
    "time": "00:16:50,700 --> 00:16:53,360",
    "arabic": "لَعَلَّ اللَّهَ لَمْ يَكْتُبْ لِي أَنْ أَكُونَ لِصًّا",
    "segs": null,
    "full_uz": "Balki Alloh mening o'g'ri bo'lishimni taqdir qilmagandir.",
    "note": null
  },
  {
    "num": 155,
    "time": "00:16:53,980 --> 00:17:00,539",
    "arabic": "لَعَلَّ مَا قُدِّرَ لِي أَكْثَرُ مِمَّا أَقْتَرِفُهُ مِنْ سَرِقَةٍ تُنْقِصُ الْمُرُوءَةَ وَتُغْضِبُ الرَّبَّ وَتَقْطَعُ الرِّزْقَ",
    "segs": [
      { "ar": "لَعَلَّ مَا قُدِّرَ لِي أَكْثَرُ مِمَّا أَقْتَرِفُهُ", "uz": "Balki menga taqdir qilingan narsa qilayotgan ishimdan ko'proqdir" },
      { "ar": "مِنْ سَرِقَةٍ تُنْقِصُ الْمُرُوءَةَ وَتُغْضِبُ الرَّبَّ وَتَقْطَعُ الرِّزْقَ", "uz": "chunki bu o'g'irlik or-nomusni kamaytiradi, Robbini g'azablantiradi va rizqni kesadi" }
    ],
    "full_uz": "Balki menga taqdir qilingan narsa, or-nomusni kamaytiradigan, Robbini g'azablantiradigan va rizqni kesadigan bu o'g'irlikdan ko'proqdir.",
    "note": null
  },
  {
    "num": 156,
    "time": "00:17:00,539 --> 00:17:04,720",
    "arabic": "لَا أَرَى أَنَّ الدُّنْيَا تُخَبِّئُ لَكَ إِلَّا مَزِيدًا مِنَ الْحَمَاقَاتِ",
    "segs": null,
    "full_uz": "Dunyo senga faqat ko'proq ahmoqona ishlarni saqlab qo'yganini ko'ryapman.",
    "note": null
  },
  {
    "num": 157,
    "time": "00:17:04,720 --> 00:17:06,740",
    "arabic": "وَلِي مَزِيدٌ مِنَ التَّعَاسَةِ",
    "segs": null,
    "full_uz": "Va menga ko'proq baxtsizlikni.",
    "note": null
  },
  {
    "num": 158,
    "time": "00:17:06,740 --> 00:17:09,839",
    "arabic": "اغْرُبْ عَنْ وَجْهِي فَقَدْ ذَهَبَ الشِّبَعُ بِعَقْلِكَ",
    "segs": null,
    "full_uz": "Ko'zimdan yo'qol, to'qlik aqlingni olib qo'yibdi.",
    "note": null
  },
  {
    "num": 159,
    "time": "00:17:09,839 --> 00:17:17,000",
    "arabic": "سَتَرَيْنَ أَنَّنِي أَهَمُّ مِمَّا تَتَوَسَّمِينَهُ فِيَّ يَا أُمَّ الْفَرْشِ",
    "segs": null,
    "full_uz": "Ko'rasan, men sen menda ko'rgan narsangdan ko'ra muhimroqman, Umm al-Farsh.",
    "note": null
  },
  {
    "num": 160,
    "time": "00:17:17,000 --> 00:17:23,720",
    "arabic": "يَا فَرْشُ",
    "segs": null,
    "full_uz": "Ey Farsh!",
    "note": null
  },
  {
    "num": 161,
    "time": "00:17:30,319 --> 00:17:33,660",
    "arabic": "هَلِ انْتَهَيْتُمْ مِنَ الدَّرْسِ؟",
    "segs": null,
    "full_uz": "Darsni tugatdinglarmi?",
    "note": null
  },
  {
    "num": 162,
    "time": "00:17:33,660 --> 00:17:35,240",
    "arabic": "نَعَمْ لَقَدِ انْتَهَيْنَا أَيْنَ كُنْتَ؟",
    "segs": null,
    "full_uz": "Ha, tugatdik. Sen qayerda eding?",
    "note": null
  },
  {
    "num": 163,
    "time": "00:17:36,200 --> 00:17:38,279",
    "arabic": "مَا أَكْثَرَ تَكَرُّرَ غِيَابِكَ يَا أَحْمَدُ",
    "segs": null,
    "full_uz": "Sening yo'qligingiz juda ko'p takrorlanyapti, Ahmad.",
    "note": null
  },
  {
    "num": 164,
    "time": "00:17:38,279 --> 00:17:41,259",
    "arabic": "يَا ابْنَ نُوحٍ تَعْلَمُ أَنْ لَا حِيلَةَ لِي بِذَلِكَ",
    "segs": null,
    "full_uz": "Ibn Nuh, bilasan-ku, bunga choram yo'q.",
    "note": null
  },
  {
    "num": 165,
    "time": "00:17:41,259 --> 00:17:43,200",
    "arabic": "أَخْشَى أَنَّ الشَّيْخَ حَانِقٌ عَلَيْكَ",
    "segs": null,
    "full_uz": "Qo'rqamanki, ustoz sendan xafa.",
    "note": null
  },
  {
    "num": 166,
    "time": "00:17:43,799 --> 00:17:46,200",
    "arabic": "أَتَحْسَبُ أَنَّ الشَّيْخَ سَيَطْرُدُنِي جَرَّاءَ ذَلِكَ؟",
    "segs": null,
    "full_uz": "Ustoz meni shu sababdan haydab yuboradi deb o'ylaysanmi?",
    "note": null
  },
  {
    "num": 167,
    "time": "00:17:47,000 --> 00:17:49,240",
    "arabic": "لَا لَا أَظُنُّ أَنَّ الْأُمُورَ سَتَصِلُ إِلَى هَذَا الْحَدِّ",
    "segs": null,
    "full_uz": "Yo'q, yo'q, ish shu darajaga yetadi deb o'ylamayman,",
    "note": null
  },
  {
    "num": 168,
    "time": "00:17:49,240 --> 00:17:51,319",
    "arabic": "فَأَنْتَ أَفْضَلُ طُلَّابِهِ وَالْأَثِيرُ عِنْدَهُ",
    "segs": null,
    "full_uz": "axir sen uning eng yaxshi shogirdi va suyuklisisan.",
    "note": null
  },
  {
    "num": 169,
    "time": "00:17:51,319 --> 00:17:53,799",
    "arabic": "لَكِنْ أَخْشَى إِنْ تَكَرَّرَ غِيَابُكَ أَنْ يَفْعَلَهَا",
    "segs": null,
    "full_uz": "Lekin qo'rqamanki, yo'qliging takrorlansa, u shunday qiladi.",
    "note": null
  },
  {
    "num": 170,
    "time": "00:17:53,799 --> 00:17:56,140",
    "arabic": "لَنْ يَتَكَرَّرَ غِيَابِي بَعْدَ ذَلِكَ إِنْ شَاءَ اللَّهُ",
    "segs": null,
    "full_uz": "Bundan keyin yo'qligim takrorlanmaydi, inshaalloh.",
    "note": null
  },
  {
    "num": 171,
    "time": "00:17:56,140 --> 00:17:58,619",
    "arabic": "فَقَدْ فَرَغْتُ مِمَّا كَانَ يَشْغَلُنِي مِنَ الدُّكَّانِ",
    "segs": null,
    "full_uz": "Chunki meni band qilib turgan do'kon masalasidan qutuldim.",
    "note": null
  },
  {
    "num": 172,
    "time": "00:17:58,619 --> 00:18:00,480",
    "arabic": "هَلْ وَجَدْتَ لَهَا مُكْتَرِيًا؟",
    "segs": null,
    "full_uz": "Unga ijarachi topdingmi?",
    "note": null
  },
  {
    "num": 173,
    "time": "00:18:00,480 --> 00:18:01,019",
    "arabic": "إِنْ شَاءَ اللَّهُ",
    "segs": null,
    "full_uz": "Inshaalloh.",
    "note": null
  },
  {
    "num": 174,
    "time": "00:18:01,019 --> 00:18:02,940",
    "arabic": "وَإِنْ تَمَّتِ الْأُمُورُ عَلَى خَيْرٍ",
    "segs": null,
    "full_uz": "Va agar ishlar yaxshi tugasa,",
    "note": null
  },
  {
    "num": 175,
    "time": "00:18:02,940 --> 00:18:05,019",
    "arabic": "لَنْ أَتَأَخَّرَ بَعْدَ ذَلِكَ إِنْ شَاءَ اللَّهُ",
    "segs": null,
    "full_uz": "bundan keyin kechikmayman, inshaalloh.",
    "note": null
  },
  {
    "num": 176,
    "time": "00:18:05,940 --> 00:18:10,359",
    "arabic": "انْظُرْ مَنْ جَاءَ",
    "segs": null,
    "full_uz": "Qara, kim keldi.",
    "note": null
  },
  {
    "num": 177,
    "time": "00:18:10,359 --> 00:18:12,720",
    "arabic": "السَّيِّدُ الْمُتَأَخِّرُ كَالْعَادَةِ",
    "segs": null,
    "full_uz": "Odatdagidek kechikkan janob.",
    "note": null
  },
  {
    "num": 178,
    "time": "00:18:12,720 --> 00:18:15,460",
    "arabic": "أَمْسِكْ عَلَيْكَ لِسَانَكَ يَا صُهَيْبُ",
    "segs": null,
    "full_uz": "Tilingni tiy, Suhayb.",
    "note": null
  },
  {
    "num": 179,
    "time": "00:18:15,460 --> 00:18:17,079",
    "arabic": "وَاهْتَمَّ بِأَمْرِكَ",
    "segs": null,
    "full_uz": "Va o'z ishing bilan shug'ullan.",
    "note": null
  },
  {
    "num": 180,
    "time": "00:18:17,079 --> 00:18:20,059",
    "arabic": "أَنَا مُهْتَمٌّ بِأَمْرِي",
    "segs": null,
    "full_uz": "Men o'z ishim bilan shug'ullanyapman,",
    "note": null
  },
  {
    "num": 181,
    "time": "00:18:20,059 --> 00:18:23,340",
    "arabic": "وَلَا أَنْقَطِعُ عَنْ حَلَقَاتِ الدَّرْسِ كَالْآخَرِينَ",
    "segs": null,
    "full_uz": "va boshqalar kabi dars halqalaridan uzilib qolmayman.",
    "note": null
  },
  {
    "num": 182,
    "time": "00:18:23,340 --> 00:18:27,039",
    "arabic": "عُدْ إِلَى حَانُوتِكَ وَاجِدْ لِنَفْسِكَ لُقْمَةً تَأْكُلُهَا",
    "segs": null,
    "full_uz": "Do'koningga qayt va o'zingga yeydigan bir luqma top.",
    "note": null
  },
  {
    "num": 183,
    "time": "00:18:27,039 --> 00:18:30,620",
    "arabic": "هَلْ تَحْسَبُ أَنَّ السَّمَاءَ سَتُمْطِرُ عَلَيْكَ خُبْزَةً؟",
    "segs": null,
    "full_uz": "Osmondan senga non yog'adi deb o'ylaysanmi?",
    "note": null
  },
  {
    "num": 184,
    "time": "00:18:30,620 --> 00:18:32,140",
    "arabic": "هَيَّا يَا ابْنَ حَنْبَلٍ هَيَّا دَعْهُ",
    "segs": null,
    "full_uz": "Qani, Ibn Hanbal, qani, uni qo'y.",
    "note": null
  },
  {
    "num": 185,
    "time": "00:18:34,059 --> 00:18:35,799",
    "arabic": "هَيَّا تَعَالَ نَذْهَبْ",
    "segs": null,
    "full_uz": "Qani, kel, ketamiz.",
    "note": null
  },
  {
    "num": 186,
    "time": "00:18:35,799 --> 00:18:40,660",
    "arabic": "مَا رَأْيُكَ أَنْ تُؤَجِّرَنِي نَفْسَكَ وَتَدَعَ الْعِلْمَ لِأَهْلِهِ؟",
    "segs": null,
    "full_uz": "O'zingni menga yollab, ilmni ahliga qoldirsang-chi?",
    "note": null
  },
  {
    "num": 187,
    "time": "00:18:45,460 --> 00:18:50,900",
    "arabic": "لَنْ تَجِدَ فِي خُرَاسَانَ كُلِّهَا وَلَا فِي بَاقِي الْأَمْصَارِ مَنْ يَأْتِيكَ بِبِضَاعَةٍ كَهَذِهِ",
    "segs": null,
    "full_uz": "Butun Xurosonda va boshqa shaharlarning birortasida ham senga shunday tovar keltiradigan odam topa olmaysan.",
    "note": null
  },
  {
    "num": 188,
    "time": "00:18:50,900 --> 00:18:57,680",
    "arabic": "إِنَّهَا جَمِيلَةٌ حَقًّا",
    "segs": null,
    "full_uz": "Bu haqiqatan ham chiroyli.",
    "note": null
  },
  {
    "num": 189,
    "time": "00:18:57,680 --> 00:19:00,460",
    "arabic": "مَا رَأْيُكَ أَنْ آخُذَ كُلَّ بِضَاعَتِكَ؟",
    "segs": null,
    "full_uz": "Butun tovaringni olsam-chi?",
    "note": null
  },
  {
    "num": 190,
    "time": "00:19:01,079 --> 00:19:04,220",
    "arabic": "كُنْتُ أَتَمَنَّى أَنْ لَا أَرُدَّ لَكَ طَلَبًا يَا أَبَا يَعْطُوهْ",
    "segs": null,
    "full_uz": "Sizning talabingizni rad etmaslikni istardim, Abu Ya'tuh.",
    "note": null
  },
  {
    "num": 191,
    "time": "00:19:04,220 --> 00:19:06,779",
    "arabic": "وَلَكِنَّ أَبَا جَعْفَرٍ أَوْصَانِي عَلَيْهَا",
    "segs": null,
    "full_uz": "Lekin Abu Ja'far menga bu haqda tayinlagan edi.",
    "note": null
  },
  {
    "num": 192,
    "time": "00:19:06,779 --> 00:19:11,500",
    "arabic": "يَبْدُو أَنَّ أَبَاكَ لَنْ يَنْتَهِيَ مِنَ الْعَمَلِ الْيَوْمَ",
    "segs": null,
    "full_uz": "Shekilli, otang bugun ishini tugatmaydi.",
    "note": null
  },
  {
    "num": 193,
    "time": "00:19:11,500 --> 00:19:16,059",
    "arabic": "وَأَنَا أَيْضًا يَبْدُو أَنَّنِي لَنْ أَنْتَهِيَ مِنْ إِلْحَاحِكَ",
    "segs": null,
    "full_uz": "Menimcha, men ham sening qistovingdan qutulmayman.",
    "note": null
  },
  {
    "num": 194,
    "time": "00:19:16,059 --> 00:19:23,880",
    "arabic": "فَوْزُ مَا رَأْيُكِ أَنْ نَذْهَبَ إِلَى السُّوقِ وَحْدَنَا وَنَشْتَرِيَ مَا نُرِيدُ أَرْجُوكِ",
    "segs": [
      { "ar": "فَوْزُ مَا رَأْيُكِ أَنْ نَذْهَبَ إِلَى السُّوقِ وَحْدَنَا", "uz": "Fawz, bozorga o'zimiz borsak-chi" },
      { "ar": "وَنَشْتَرِيَ مَا نُرِيدُ أَرْجُوكِ", "uz": "va xohlagan narsamizni sotib olsak, iltimos" }
    ],
    "full_uz": "Fawz, bozorga o'zimiz borsak-chi, va xohlagan narsamizni sotib olsak, iltimos.",
    "note": null
  }
  ,
  {
    "num": 195,
    "time": "00:19:23,880 --> 00:19:27,940",
    "arabic": "حَسَنًا حَسَنًا",
    "segs": null,
    "full_uz": "Xo'p, xo'p.",
    "note": null
  },
  {
    "num": 196,
    "time": "00:19:27,940 --> 00:19:36,779",
    "arabic": "أَبِي مَا رَأْيُكَ أَنْ نَذْهَبَ أَنَا وَأُخْتِي لِنَشْتَرِيَ الْأَقْمِشَةَ الَّتِي وَعَدْتُهَا بِهَا",
    "segs": null,
    "full_uz": "Ota, men va singlim, unga va'da qilgan matolarni sotib olgani borsak-chi?",
    "note": null
  },
  {
    "num": 197,
    "time": "00:19:36,779 --> 00:19:40,160",
    "arabic": "فَهِيَ لَنْ تَتَوَقَّفَ عَنْ إِلْحَاحِهَا حَتَّى تَحْصُلَ عَلَى مَا تُرِيدُ",
    "segs": null,
    "full_uz": "Chunki xohlaganini olmaguncha, u qistayverishdan to'xtamaydi.",
    "note": null
  },
  {
    "num": 198,
    "time": "00:19:40,160 --> 00:19:45,600",
    "arabic": "وَكَيْفَ أَتْرُكُكُمَا تَذْهَبَانِ لِوَحْدِكُمَا فِي هَذِهِ الْمَدِينَةِ؟",
    "segs": null,
    "full_uz": "Ikkovingizni bu shaharda yolg'iz qanday qo'yib yuboraman?",
    "note": "تَذْهَبَانِ / لِوَحْدِكُمَا — ikkilik (dual) shakllar, ikki qizga birdan qaratilgan."
  },
  {
    "num": 199,
    "time": "00:19:45,600 --> 00:19:48,800",
    "arabic": "وَهَلْ نَحْنُ صَغِيرَتَانِ يَا أَبِي حَتَّى تَخَافَ عَلَيْنَا؟",
    "segs": null,
    "full_uz": "Ota, biz kichkina qizchamizmi, bizdan xavotir olasiz?",
    "note": "صَغِيرَتَانِ — ikkilik (dual) shakl, 'ikki kichkina qiz' ma'nosini bildiradi."
  },
  {
    "num": 200,
    "time": "00:19:48,800 --> 00:19:50,960",
    "arabic": "نَشْتَرِي مَا نُرِيدُ وَنَلْتَقِي عِنْدَ الْقَافِلَةِ",
    "segs": null,
    "full_uz": "Xohlaganimizni sotib olib, karvon oldida uchrashamiz.",
    "note": null
  },
  {
    "num": 201,
    "time": "00:19:50,960 --> 00:19:55,279",
    "arabic": "حَسَنًا حَسَنًا كَمَا تُرِيدَانِ وَلَكِنْ لَا تَتَأَخَّرَا",
    "segs": null,
    "full_uz": "Xo'p, xo'p, ikkovingiz xohlaganday, lekin kechikmanglar.",
    "note": null
  },
  {
    "num": 202,
    "time": "00:19:55,279 --> 00:19:57,740",
    "arabic": "شُكْرًا لَكَ يَا أَبِي",
    "segs": null,
    "full_uz": "Rahmat, ota.",
    "note": null
  },
  {
    "num": 203,
    "time": "00:19:57,740 --> 00:20:03,240",
    "arabic": "انْتَظِرِي انْتَظِرِي",
    "segs": null,
    "full_uz": "Kut, kut!",
    "note": null
  },
  {
    "num": 204,
    "time": "00:20:32,699 --> 00:20:38,479",
    "arabic": "إِنْ كَانَ مَا تَقُولُهُ صَحِيحًا فَهَذَا يَعْنِي أَنَّ هُنَاكَ مُؤَامَرَةً تُحَاكُ بِلَيْلٍ فِي قَصْرِ الْخِلَافَةِ",
    "segs": [
      { "ar": "إِنْ كَانَ مَا تَقُولُهُ صَحِيحًا", "uz": "Agar aytganing to'g'ri bo'lsa" },
      { "ar": "فَهَذَا يَعْنِي أَنَّ هُنَاكَ مُؤَامَرَةً تُحَاكُ بِلَيْلٍ فِي قَصْرِ الْخِلَافَةِ", "uz": "demak, xalifalik saroyida tunda tuqilayotgan bir fitna bor" }
    ],
    "full_uz": "Agar aytganing to'g'ri bo'lsa, demak, xalifalik saroyida tunda tuqilayotgan bir fitna bor.",
    "note": null
  },
  {
    "num": 205,
    "time": "00:20:38,480 --> 00:20:46,059",
    "arabic": "وَأَظُنُّ أَنَّ الَّذِي سَيَهْرُبُ هُوَ مِنَ الطَّالِبِيِّينَ",
    "segs": null,
    "full_uz": "Va menimcha, qochmoqchi bo'lgan kishi Tolibiylardan.",
    "note": null
  },
  {
    "num": 206,
    "time": "00:20:46,059 --> 00:20:54,360",
    "arabic": "وَلَيْسَ هُنَاكَ غَيْرُ عُمَارَةَ بْنِ الْأَيْهَمِ مَنْ قَامَ بِحَبْكِ مِثْلِ هَذِهِ الْمُؤَامَرَةِ",
    "segs": null,
    "full_uz": "Va bunday fitnani uyushtiradigan Umara ibn al-Ayhamdan boshqa hech kim yo'q.",
    "note": null
  },
  {
    "num": 207,
    "time": "00:20:54,360 --> 00:20:56,880",
    "arabic": "مَوْلَايَ لَا أَدْرِي",
    "segs": null,
    "full_uz": "Xo'jayinim, bilmayman.",
    "note": null
  },
  {
    "num": 208,
    "time": "00:20:56,880 --> 00:20:59,960",
    "arabic": "لَكِنْ قُلْ لِي",
    "segs": null,
    "full_uz": "Lekin ayt-chi menga,",
    "note": null
  },
  {
    "num": 209,
    "time": "00:20:59,960 --> 00:21:04,500",
    "arabic": "كَيْفَ اسْتَطَعْتَ فَكَّ طَلَاسِمِ هَذِهِ الرِّسَالَةِ؟",
    "segs": null,
    "full_uz": "bu xatning sirlarini qanday yecha oldingiz?",
    "note": null
  },
  {
    "num": 210,
    "time": "00:21:04,500 --> 00:21:09,039",
    "arabic": "أَنَا لَا عِلْمَ لِي بِفَنِّ الرَّسَائِلِ وَلَا بِفَكِّ طَلَاسِمِهَا يَا مَوْلَايَ",
    "segs": null,
    "full_uz": "Mening xatlar san'ati va ularning sirlarini yechishda ilmim yo'q, xo'jayinim,",
    "note": null
  },
  {
    "num": 211,
    "time": "00:21:09,039 --> 00:21:11,900",
    "arabic": "إِنَّمَا هُوَ ابْنُ أَخِي أَحْمَدُ بْنُ حَنْبَلٍ",
    "segs": null,
    "full_uz": "buni qilgan jiyanim Ahmad ibn Hanbal.",
    "note": null
  },
  {
    "num": 212,
    "time": "00:21:11,900 --> 00:21:20,079",
    "arabic": "ابْنُ أَخِيكَ هَذَا يَسْتَحِقُّ مُكَافَأَةً كَبِيرَةً عَلَى ذَكَائِهِ وَنَبَاهَتِهِ",
    "segs": null,
    "full_uz": "Bu jiyaningiz o'zining zukkoligi va sezgirligi uchun katta mukofotga loyiq.",
    "note": null
  },
  {
    "num": 213,
    "time": "00:21:20,079 --> 00:21:24,799",
    "arabic": "ابْنُ أَخِي يَتِيمٌ وَوَهَبَهُ اللَّهُ حُسْنَ الْخَطِّ فَهُوَ يَصْلُحُ لِنَسْخِ الْكُتُبِ",
    "segs": [
      { "ar": "ابْنُ أَخِي يَتِيمٌ وَوَهَبَهُ اللَّهُ حُسْنَ الْخَطِّ", "uz": "Jiyanim yetim, Alloh unga chiroyli xat yozishni ato etgan" },
      { "ar": "فَهُوَ يَصْلُحُ لِنَسْخِ الْكُتُبِ", "uz": "shuning uchun u kitob ko'chirishga yaraydi" }
    ],
    "full_uz": "Jiyanim yetim, Alloh unga chiroyli xat yozishni ato etgan, shuning uchun u kitob ko'chirishga yaraydi.",
    "note": null
  },
  {
    "num": 214,
    "time": "00:21:24,799 --> 00:21:29,039",
    "arabic": "فَهَلْ يَأْمُرُ مَوْلَايَ بِعَمَلٍ لَهُ فِي بَيْتِ الْحِكْمَةِ؟",
    "segs": null,
    "full_uz": "Xo'jayinim unga Bayt al-Hikmada ish buyurarmikan?",
    "note": null
  },
  {
    "num": 215,
    "time": "00:21:29,039 --> 00:21:34,200",
    "arabic": "لَهُ ذَلِكَ وَلَكَ أَيْضًا جَزَاءُ مَا فَعَلْتَ",
    "segs": null,
    "full_uz": "Bo'ladi, va senga ham qilganing uchun mukofot bo'ladi.",
    "note": null
  },
  {
    "num": 216,
    "time": "00:21:34,200 --> 00:21:36,819",
    "arabic": "شَكَرَ اللَّهُ صَنِيعَكَ يَا مَوْلَايَ",
    "segs": null,
    "full_uz": "Alloh yaxshiligingizni ko'p qilsin, xo'jayinim.",
    "note": null
  },
  {
    "num": 217,
    "time": "00:21:36,819 --> 00:21:40,400",
    "arabic": "الْحَمْدُ لِلَّهِ قَدْ وَهَبَنِي اللَّهُ حَتَّى كَفَانِي",
    "segs": null,
    "full_uz": "Alhamdulillah, Alloh menga yetadigan darajada ato etgan.",
    "note": null
  },
  {
    "num": 218,
    "time": "00:21:40,400 --> 00:21:47,580",
    "arabic": "وَمَا فَعَلْتُ ذَلِكَ إِلَّا حِرْصًا عَلَى أُمَّتِي وَخَشْيَةً مِنْ فِتَنٍ قَدْ تَضُرُّ دِيَارَ الْإِسْلَامِ وَأَهْلَهَا",
    "segs": [
      { "ar": "وَمَا فَعَلْتُ ذَلِكَ إِلَّا حِرْصًا عَلَى أُمَّتِي", "uz": "Buni faqat ummatimga g'amxo'rlik qilib qildim" },
      { "ar": "وَخَشْيَةً مِنْ فِتَنٍ قَدْ تَضُرُّ دِيَارَ الْإِسْلَامِ وَأَهْلَهَا", "uz": "va Islom yurtlariga va aholisiga zarar yetkazishi mumkin bo'lgan fitnalardan qo'rqib" }
    ],
    "full_uz": "Buni faqat ummatimga g'amxo'rlik qilib va Islom yurtlariga hamda aholisiga zarar yetkazishi mumkin bo'lgan fitnalardan qo'rqib qildim.",
    "note": null
  },
  {
    "num": 219,
    "time": "00:21:47,580 --> 00:21:53,340",
    "arabic": "لَيْتَ النَّاسَ كُلَّهُمْ فِي مِثْلِ حِرْصِكَ عَلَى دِينِكَ وَأُمَّتِكَ",
    "segs": null,
    "full_uz": "Qaniydi barcha odamlar sening diniga va ummatingga bo'lgan g'amxo'rligingdek bo'lsa edi.",
    "note": null
  },
  {
    "num": 220,
    "time": "00:21:53,340 --> 00:21:58,319",
    "arabic": "أَبْوَابُنَا مَفْتُوحَةٌ لَكَ دَائِمًا يَا إِسْحَاقُ",
    "segs": null,
    "full_uz": "Eshiklarimiz senga doim ochiq, Ishoq.",
    "note": null
  },
  {
    "num": 221,
    "time": "00:21:58,319 --> 00:22:02,900",
    "arabic": "أَدَامَ اللَّهُ الْأَمْنَ وَالْأَمَانَ عَلَى أُمَّةِ الْإِسْلَامِ",
    "segs": null,
    "full_uz": "Alloh Islom ummatiga xotirjamlik va omonlikni doimiy qilsin,",
    "note": null
  },
  {
    "num": 222,
    "time": "00:22:02,900 --> 00:22:07,540",
    "arabic": "وَحَفِظَهَا مِنْ كُلِّ الْفِتَنِ مَا ظَهَرَ مِنْهَا وَمَا بَطَنَ يَا مَوْلَايَ",
    "segs": null,
    "full_uz": "va uni oshkor va yashirin barcha fitnalardan asrasin, xo'jayinim.",
    "note": null
  },
  {
    "num": 223,
    "time": "00:22:07,540 --> 00:22:12,380",
    "arabic": "بَارَكَ اللَّهُ فِيكَ يَا ابْنَ حَنْبَلٍ",
    "segs": null,
    "full_uz": "Alloh senga baraka bersin, Ibn Hanbal.",
    "note": null
  },
  {
    "num": 224,
    "time": "00:22:14,220 --> 00:22:16,420",
    "arabic": "أَيَأْذَنُ مَوْلَايَ لِي بِالِانْصِرَافِ",
    "segs": null,
    "full_uz": "Xo'jayinim, ketishimga ruxsat berasizmi?",
    "note": null
  },
  {
    "num": 225,
    "time": "00:22:16,420 --> 00:22:18,300",
    "arabic": "رَافَقَتْكَ السَّلَامَةُ",
    "segs": null,
    "full_uz": "Omonlik seni hamroh qilsin.",
    "note": null
  },
  {
    "num": 226,
    "time": "00:22:18,300 --> 00:22:19,960",
    "arabic": "السَّلَامُ عَلَيْكُمْ",
    "segs": null,
    "full_uz": "Sizlarga tinchlik-omonlik bo'lsin.",
    "note": null
  },
  {
    "num": 227,
    "time": "00:22:19,960 --> 00:22:24,560",
    "arabic": "وَعَلَيْكَ السَّلَامُ وَرَحْمَةُ اللَّهِ وَبَرَكَاتُهُ",
    "segs": null,
    "full_uz": "Senga ham tinchlik, Allohning rahmati va barakoti bo'lsin.",
    "note": null
  },
  {
    "num": 228,
    "time": "00:24:02,900 --> 00:24:10,800",
    "arabic": "كَيْفَ لَمْ تَأْتِيَا إِلَى الْآنَ؟",
    "segs": null,
    "full_uz": "Ikkovingiz nega hozirgacha kelmadinglar?",
    "note": "تَأْتِيَا — ikkilik (dual) fe'l shakli, ikki qizga birdan qaratilgan."
  },
  {
    "num": 229,
    "time": "00:24:10,800 --> 00:24:12,420",
    "arabic": "وَمَا أَدْرَانِي أَنَا يَا أَبَا فَوْزٍ؟",
    "segs": null,
    "full_uz": "Men qayerdan bilay, Abu Fawz?",
    "note": null
  },
  {
    "num": 230,
    "time": "00:24:12,420 --> 00:24:14,180",
    "arabic": "لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ",
    "segs": null,
    "full_uz": "Allohdan boshqa kuch-quvvat yo'q.",
    "note": null
  },
  {
    "num": 231,
    "time": "00:24:14,180 --> 00:24:15,540",
    "arabic": "أَيْنَ اخْتَفَتَا؟",
    "segs": null,
    "full_uz": "Ikkovi qayerga g'oyib bo'lishdi?",
    "note": null
  },
  {
    "num": 232,
    "time": "00:24:15,540 --> 00:24:17,840",
    "arabic": "مَا كَانَ عَلَيْكَ تَرْكُهُمَا وَحِيدَتَيْنِ؟",
    "segs": null,
    "full_uz": "Ularni yolg'iz qoldirmasliging kerak edi-ku?",
    "note": null
  },
  {
    "num": 233,
    "time": "00:24:17,840 --> 00:24:19,460",
    "arabic": "لَمْ أَتْرُكْهُمَا يَا أَبَا رُسْتُمَ",
    "segs": null,
    "full_uz": "Ularni tashlab ketmadim, Abu Rustam.",
    "note": null
  },
  {
    "num": 234,
    "time": "00:24:19,460 --> 00:24:20,880",
    "arabic": "لَقَدْ وَعَدْتُهُمَا هُنَا",
    "segs": null,
    "full_uz": "Ular bilan shu yerda ko'rishishga kelishgan edim.",
    "note": null
  },
  {
    "num": 235,
    "time": "00:24:20,880 --> 00:24:22,200",
    "arabic": "سَأَبْحَثُ عَنْهُمَا",
    "segs": null,
    "full_uz": "Men ularni qidiraman.",
    "note": null
  },
  {
    "num": 236,
    "time": "00:24:22,200 --> 00:24:23,160",
    "arabic": "هَيَّا هَيَّا بِسُرْعَةٍ",
    "segs": null,
    "full_uz": "Qani, qani, tezroq.",
    "note": null
  },
  {
    "num": 237,
    "time": "00:24:32,900 --> 00:24:43,340",
    "arabic": "إِذَنْ فَقَدْ بَدَأَتِ الْأَفْعَى الرَّقْطَاءُ تَخْرُجُ مِنْ جُحُورِهَا",
    "segs": null,
    "full_uz": "Demak, xoldor ilon o'z inidan chiqa boshladi.",
    "note": null
  },
  {
    "num": 238,
    "time": "00:24:43,340 --> 00:24:49,900",
    "arabic": "أَيَحْسَبُونَ أَنَّ هَارُونَ الرَّشِيدَ غَافِلٌ عَنْ دَسَائِسِهِمْ وَمَكَائِدِهِمْ؟",
    "segs": null,
    "full_uz": "Ular Horun ar-Rashid o'z fitna-hiylalaridan bexabar deb o'ylashadimi?",
    "note": null
  },
  {
    "num": 239,
    "time": "00:24:50,900 --> 00:24:55,220",
    "arabic": "وَالَّذِي نَفْسِي بِيَدِهِ لَأَجْعَلَنَّهُمْ عِبْرَةً لِمَنْ يَعْتَبِرُ",
    "segs": null,
    "full_uz": "Jonim qo'lida bo'lgan Zotga qasamki, ularni ibrat oladiganlarga ibrat qilib qo'yaman.",
    "note": null
  },
  {
    "num": 240,
    "time": "00:24:55,220 --> 00:24:59,600",
    "arabic": "هَوِّنْ عَلَيْكَ يَا مَوْلَايَ فَهُمْ أَعْجَزُ مِنْ قُرَادَةٍ",
    "segs": null,
    "full_uz": "O'zingizni bosing, xo'jayinim, ular kanadan ham ojiz.",
    "note": null
  },
  {
    "num": 241,
    "time": "00:24:59,599 --> 00:25:02,579",
    "arabic": "وَسَيَلْقَوْنَ جَزَاءَ مَا يَمْكُرُونَ",
    "segs": null,
    "full_uz": "Va qilgan makrlarining jazosini olishadi.",
    "note": null
  },
  {
    "num": 242,
    "time": "00:25:02,579 --> 00:25:05,379",
    "arabic": "إِنَّهُمْ لَا يَسْتَحِقُّونَ مِنْكَ كُلَّ هَذَا الْغَضَبَ",
    "segs": null,
    "full_uz": "Ular sizdan bunchalik g'azabga loyiq emas.",
    "note": null
  },
  {
    "num": 243,
    "time": "00:25:05,379 --> 00:25:08,839",
    "arabic": "كَيْفَ لَا يَسْتَحِقُّونَ كُلَّ هَذَا الْغَضَبَ يَا يَحْيَى؟",
    "segs": null,
    "full_uz": "Qanday qilib bunchalik g'azabga loyiq emas, Yahyo?",
    "note": null
  },
  {
    "num": 244,
    "time": "00:25:08,839 --> 00:25:09,879",
    "arabic": "كَيْفَ؟",
    "segs": null,
    "full_uz": "Qanday?",
    "note": null
  },
  {
    "num": 245,
    "time": "00:25:09,879 --> 00:25:13,859",
    "arabic": "وَهُمْ لَا يَكُفُّونَ عَنْ غَيِّهِمْ وَفَسَادِهِمْ وَإِفْسَادِهِمْ فِي الْأَرْضِ",
    "segs": null,
    "full_uz": "Ular o'z adashuvlari, fasodi va yer yuzida buzg'unchilik qilishdan to'xtamaydilar-ku,",
    "note": null
  },
  {
    "num": 246,
    "time": "00:25:13,859 --> 00:25:18,759",
    "arabic": "وَكُلَّمَا غَفَرْنَا لِأَحَدِهِمْ جَازَى إِحْسَانَنَا جُحُودًا وَنُكْرَانًا",
    "segs": null,
    "full_uz": "va biror birini kechirsak, yaxshiligimizga nonko'rlik va inkor bilan javob qaytaradi.",
    "note": null
  },
  {
    "num": 247,
    "time": "00:25:20,279 --> 00:25:23,719",
    "arabic": "هَا هُوَ الطَّالِبِيُّ يُدَبِّرُ الْآنَ الدَّسَائِسَ مِنْ سِجْنِهِ",
    "segs": null,
    "full_uz": "Mana, Tolibiy hozir o'z qamog'idan fitnalar uyushtiryapti.",
    "note": null
  },
  {
    "num": 248,
    "time": "00:25:23,719 --> 00:25:26,779",
    "arabic": "سَيَنَالُونَ جَزَاءَ مَا يَمْكُرُونَ بِعَوْنِ اللَّهِ",
    "segs": null,
    "full_uz": "Alloh yordami bilan qilgan makrlarining jazosini olishadi.",
    "note": null
  },
  {
    "num": 249,
    "time": "00:25:26,779 --> 00:25:33,259",
    "arabic": "أُرِيدُكَ أَنْ تَئِدَ هَذِهِ الْمُؤَامَرَةَ فِي مَهْدِهَا قَبْلَ أَنْ يَتَّسِعَ الْخَرْقُ عَلَى الرَّاقِعِ",
    "segs": [
      { "ar": "أُرِيدُكَ أَنْ تَئِدَ هَذِهِ الْمُؤَامَرَةَ فِي مَهْدِهَا", "uz": "Bu fitnani beshigida bo'g'ib tashlashingni xohlayman" },
      { "ar": "قَبْلَ أَنْ يَتَّسِعَ الْخَرْقُ عَلَى الرَّاقِعِ", "uz": "yirtiq yamoqchiga sig'maydigan darajaga yetmasdan turib" }
    ],
    "full_uz": "Bu fitnani beshigida bo'g'ib tashlashingni xohlayman, yirtiq yamoqchiga sig'maydigan darajaga yetmasdan turib.",
    "note": "قَبْلَ أَنْ يَتَّسِعَ الْخَرْقُ عَلَى الرَّاقِعِ — 'ish qo'ldan chiqib ketmasdan oldin' ma'nosidagi mashhur arabcha ibora, so'zma-so'z 'yirtiq yamoqchining kuchidan oshib ketmasdan oldin' degani."
  },
  {
    "num": 250,
    "time": "00:25:33,259 --> 00:25:38,920",
    "arabic": "كُنْ عَلَى ثِقَةٍ يَا مَوْلَايَ بِأَنَّ عُمَارَةَ بْنَ الْأَيْهَمِ وَكُلَّ مَنْ شَايَعَهُ وَتَبِعَهُ",
    "segs": null,
    "full_uz": "Ishonchingiz komil bo'lsin, xo'jayinim, Umara ibn al-Ayham va unga ergashib, tarafdor bo'lganlarning barchasi",
    "note": null
  },
  {
    "num": 251,
    "time": "00:25:38,920 --> 00:25:42,920",
    "arabic": "سَيَنَالُونَ الْجَزَاءَ الَّذِي يَرْدَعُهُمْ وَيَرْدَعُ أَمْثَالَهُمْ",
    "segs": null,
    "full_uz": "o'zlarini va o'zlariga o'xshaganlarni jilovlaydigan jazoga duchor bo'lishadi,",
    "note": null
  },
  {
    "num": 252,
    "time": "00:25:42,920 --> 00:25:45,920",
    "arabic": "مِمَّا يَعِيثُونَ فَسَادًا فِي دِيَارِ الْمُسْلِمِينَ",
    "segs": null,
    "full_uz": "musulmonlar yurtida qilib yurgan buzg'unchiliklari uchun.",
    "note": null
  },
  {
    "num": 253,
    "time": "00:25:45,920 --> 00:25:50,920",
    "arabic": "اشْدُدْ يَدَكَ عَلَى ابْنِ الْأَيْهَمِ حَتَّى يَعْتَرِفَ بِأَسْمَاءِ جَمِيعِ الْخَوَنَةِ",
    "segs": null,
    "full_uz": "Ibn al-Ayhamga qattiq turing, toki barcha xoinlarning ismlarini tan olguncha.",
    "note": null
  },
  {
    "num": 254,
    "time": "00:25:50,920 --> 00:25:53,299",
    "arabic": "جِئْنِي بِهَذَا الْمُجْرِمِ السَّاعَةَ",
    "segs": null,
    "full_uz": "Bu jinoyatchini hoziroq oldimga olib keling.",
    "note": null
  },
  {
    "num": 255,
    "time": "00:25:53,299 --> 00:25:56,440",
    "arabic": "أَمْرُكَ يَا مَوْلَايَ",
    "segs": null,
    "full_uz": "Buyuring, xo'jayinim.",
    "note": null
  },
  {
    "num": 256,
    "time": "00:26:10,879 --> 00:26:14,519",
    "arabic": "أَنَا الرَّجُلُ الصُّلْبُ الَّذِي تَعْرِفُونَهُ",
    "segs": null,
    "full_uz": "Men siz taniydigan mustahkam odamman.",
    "note": null
  },
  {
    "num": 257,
    "time": "00:26:18,519 --> 00:26:19,519",
    "arabic": "أَحْمَدُ",
    "segs": null,
    "full_uz": "Ahmad.",
    "note": null
  },
  {
    "num": 258,
    "time": "00:26:19,519 --> 00:26:24,920",
    "arabic": "أَنْتَ تَعْلَمُ أَنَّ صُهَيْبًا لَمْ يَقُلْ مَا قَالَ إِلَّا لِأَنَّهُ يَحْسُدُكَ لِمَكَانَتِكَ عِنْدَ الشَّيْخِ",
    "segs": [
      { "ar": "أَنْتَ تَعْلَمُ أَنَّ صُهَيْبًا لَمْ يَقُلْ مَا قَالَ", "uz": "Bilasan-ku, Suhayb aytganini shunchaki aytmagan" },
      { "ar": "إِلَّا لِأَنَّهُ يَحْسُدُكَ لِمَكَانَتِكَ عِنْدَ الشَّيْخِ", "uz": "balki ustoz oldidagi mavqeingga hasad qilgani uchun aytgan" }
    ],
    "full_uz": "Bilasan-ku, Suhayb aytganini shunchaki aytmagan, balki ustoz oldidagi mavqeingga hasad qilgani uchun aytgan.",
    "note": null
  },
  {
    "num": 259,
    "time": "00:26:24,920 --> 00:26:27,099",
    "arabic": "وَبَرَاعَتِكَ الَّتِي لَا يَمْلِكُ مِعْشَارَهَا",
    "segs": null,
    "full_uz": "va uning o'ndan biriga ham ega bo'lmagan mahoratingga.",
    "note": null
  },
  {
    "num": 260,
    "time": "00:26:27,099 --> 00:26:28,740",
    "arabic": "أَخِي مُحَمَّدُ",
    "segs": null,
    "full_uz": "Birodarim Muhammad,",
    "note": null
  },
  {
    "num": 261,
    "time": "00:26:28,740 --> 00:26:32,400",
    "arabic": "يَجِبُ أَنْ لَا نَذْكُرَ أَحَدًا بِسُوءٍ فِي غِيَابِهِ",
    "segs": null,
    "full_uz": "hech kim haqida uning yo'qligida yomon gapirmasligimiz kerak.",
    "note": null
  },
  {
    "num": 262,
    "time": "00:26:32,400 --> 00:26:33,440",
    "arabic": "هَذَا أَوَّلًا",
    "segs": null,
    "full_uz": "Bu — birinchidan.",
    "note": null
  },
  {
    "num": 263,
    "time": "00:26:33,440 --> 00:26:35,799",
    "arabic": "أَمَّا ثَانِيًا",
    "segs": null,
    "full_uz": "Ikkinchidan esa,",
    "note": null
  },
  {
    "num": 264,
    "time": "00:26:35,799 --> 00:26:39,420",
    "arabic": "إِنْ فَكَّرْتَ فِي كَلَامِ صُهَيْبٍ وَجَدْتَهُ صَحِيحًا",
    "segs": null,
    "full_uz": "Suhaybning gapi haqida o'ylab ko'rsang, uni to'g'ri deb topasan.",
    "note": null
  },
  {
    "num": 265,
    "time": "00:26:49,519 --> 00:26:55,559",
    "arabic": "لَعَلَّ أَمْثَالِي مِنَ الْأَفْضَلِ لَهُمْ",
    "segs": null,
    "full_uz": "Balki mendek odamlar uchun yaxshiroq bo'lardi,",
    "note": null
  },
  {
    "num": 266,
    "time": "00:26:55,559 --> 00:26:59,839",
    "arabic": "أَنْ يَنْشَغِلُوا بِقُوتِ يَوْمِهِمْ",
    "segs": null,
    "full_uz": "kunlik rizqlari bilan mashg'ul bo'lishlari",
    "note": null
  },
  {
    "num": 267,
    "time": "00:26:59,839 --> 00:27:02,279",
    "arabic": "وَلُقْمَةِ عَيْشِهِ",
    "segs": null,
    "full_uz": "va tirikchilik luqmasi bilan.",
    "note": null
  },
  {
    "num": 268,
    "time": "00:27:02,279 --> 00:27:07,139",
    "arabic": "كَيْفَ تَقُولُ ذَلِكَ يَا أَحْمَدُ",
    "segs": null,
    "full_uz": "Buni qanday aytasan, Ahmad?",
    "note": null
  },
  {
    "num": 269,
    "time": "00:27:07,139 --> 00:27:12,180",
    "arabic": "لَعَلَّهُ تَرَفٌ مِنِّي أَنْ أَسْعَى إِلَى طَلَبِ الْعِلْمِ",
    "segs": null,
    "full_uz": "Balki ilm izlashga urinishim mendan bir sarxushlikdir,",
    "note": null
  },
  {
    "num": 270,
    "time": "00:27:12,180 --> 00:27:15,299",
    "arabic": "وَأَنَا أَرَى الْفَاقَةَ الَّتِي نَحْنُ فِيهَا",
    "segs": null,
    "full_uz": "biz ichida bo'lgan qashshoqlikni ko'rib turib,",
    "note": null
  },
  {
    "num": 271,
    "time": "00:27:15,299 --> 00:27:18,180",
    "arabic": "وَالْعَوَزُ الَّذِي يُقِضُّ مَضْجَعَهُمْ",
    "segs": null,
    "full_uz": "va ularning tinchini olib qo'ygan muhtojlikni ko'rib.",
    "note": null
  },
  {
    "num": 272,
    "time": "00:27:18,180 --> 00:27:22,000",
    "arabic": "حَقِيقٌ بِي أَنْ لَا أُفَكِّرَ فِي نَفْسِي فَقَطْ",
    "segs": null,
    "full_uz": "Faqat o'zim haqida o'ylamasligim to'g'ri bo'lardi.",
    "note": null
  },
  {
    "num": 273,
    "time": "00:27:22,000 --> 00:27:28,740",
    "arabic": "أَحْمَدُ، الْفَقْرُ لَيْسَ عَيْبًا وَلَيْسَ عَقَبَةً أَمَامَ طَلَبِ الْعِلْمِ",
    "segs": [
      { "ar": "أَحْمَدُ، الْفَقْرُ لَيْسَ عَيْبًا", "uz": "Ahmad, qashshoqlik aybi emas" },
      { "ar": "وَلَيْسَ عَقَبَةً أَمَامَ طَلَبِ الْعِلْمِ", "uz": "va ilm izlashga to'siq ham emas" }
    ],
    "full_uz": "Ahmad, qashshoqlik aybi emas va ilm izlashga to'siq ham emas.",
    "note": null
  },
  {
    "num": 274,
    "time": "00:27:28,740 --> 00:27:33,380",
    "arabic": "الْفَقْرُ لَيْسَ عَيْبًا أَجَلْ",
    "segs": null,
    "full_uz": "Qashshoqlik aybi emas, ha.",
    "note": null
  },
  {
    "num": 275,
    "time": "00:27:33,380 --> 00:27:36,640",
    "arabic": "بَلْ هُوَ مَسْلَبَةٌ لِلْعَقْلِ وَالْمُرُوءَةِ",
    "segs": null,
    "full_uz": "Balki u aql va or-nomusni tortib oladi,",
    "note": null
  },
  {
    "num": 276,
    "time": "00:27:36,640 --> 00:27:38,740",
    "arabic": "وَمَذْهَبَةٌ لِلْعِلْمِ وَالْأَدَبِ",
    "segs": null,
    "full_uz": "va ilm-adabni yo'qotadi.",
    "note": null
  },
  {
    "num": 277,
    "time": "00:27:38,740 --> 00:27:42,340",
    "arabic": "الْحَمْدُ لِلَّهِ عَلَى كُلِّ حَالٍ",
    "segs": null,
    "full_uz": "Har holda, Allohga hamdlar bo'lsin,",
    "note": null
  },
  {
    "num": 278,
    "time": "00:27:42,340 --> 00:27:45,019",
    "arabic": "فَأَنَا رَاضٍ بِقَضَاءِ اللَّهِ عَلَيَّ",
    "segs": null,
    "full_uz": "men Allohning menga bo'lgan taqdiriga roziman.",
    "note": null
  },
  {
    "num": 279,
    "time": "00:27:45,019 --> 00:27:52,019",
    "arabic": "وَلَكِنَّنِي أَخْشَى أَنْ يَكُونَ انْصِرَافِي إِلَى الْعِلْمِ يَبْخَسُ حَقَّ أُمِّي",
    "segs": null,
    "full_uz": "Lekin ilmga berilib ketishim onamning haqiga zulm qilishidan qo'rqaman.",
    "note": null
  },
  {
    "num": 280,
    "time": "00:27:52,019 --> 00:27:58,160",
    "arabic": "لَا يَا رَجُلُ لَا يَا رَجُلُ وَاللَّهِ إِنَّ طَلَبَكَ الْعِلْمَ أَحَبُّ إِلَى أُمِّكَ مِنْ مَالِ الدُّنْيَا جَمِيعًا",
    "segs": [
      { "ar": "لَا يَا رَجُلُ لَا يَا رَجُلُ", "uz": "Yo'q, birodar, yo'q, birodar" },
      { "ar": "وَاللَّهِ إِنَّ طَلَبَكَ الْعِلْمَ أَحَبُّ إِلَى أُمِّكَ مِنْ مَالِ الدُّنْيَا جَمِيعًا", "uz": "vallohi, ilm izlashing onang uchun butun dunyo boyligidan ham azizroq" }
    ],
    "full_uz": "Yo'q, birodar, yo'q, birodar, vallohi, ilm izlashing onang uchun butun dunyo boyligidan ham azizroq.",
    "note": null
  },
  {
    "num": 281,
    "time": "00:27:58,160 --> 00:28:00,240",
    "arabic": "لَيْتَ الْأَمْرَ كَمَا تَقُولُ",
    "segs": null,
    "full_uz": "Qaniydi aytganingdek bo'lsa.",
    "note": null
  },
  {
    "num": 282,
    "time": "00:28:00,240 --> 00:28:05,119",
    "arabic": "لَيْتَ الْأَمْرَ كَمَا تَقُولُ يَا ابْنَ نُوحٍ",
    "segs": null,
    "full_uz": "Qaniydi aytganingdek bo'lsa, Ibn Nuh.",
    "note": null
  },
  {
    "num": 283,
    "time": "00:28:15,019 --> 00:28:31,279",
    "arabic": "السَّلَامُ عَلَى أَمِيرِ الْمُؤْمِنِينَ",
    "segs": null,
    "full_uz": "Mo'minlar amiriga tinchlik bo'lsin.",
    "note": null
  },
  {
    "num": 284,
    "time": "00:28:31,279 --> 00:28:32,460",
    "arabic": "عَلَيْكَ السَّلَامُ",
    "segs": null,
    "full_uz": "Senga ham tinchlik.",
    "note": null
  },
  {
    "num": 285,
    "time": "00:28:32,460 --> 00:28:35,779",
    "arabic": "الرَّحْمَةَ الرَّحْمَةَ يَا مَوْلَايَ الرَّحْمَةَ",
    "segs": null,
    "full_uz": "Rahm qiling, rahm qiling, xo'jayinim, rahm qiling.",
    "note": null
  },
  {
    "num": 286,
    "time": "00:28:37,200 --> 00:28:40,039",
    "arabic": "الْآنَ تَطْلُبُ الرَّحْمَةَ أَيُّهَا الْخَائِنُ",
    "segs": null,
    "full_uz": "Endi rahm so'rayapsan-a, xoin!",
    "note": null
  },
  {
    "num": 287,
    "time": "00:28:40,039 --> 00:28:41,700",
    "arabic": "إِنْ يَكُنْ ذَنْبِي كَبِيرًا",
    "segs": null,
    "full_uz": "Agar gunohim katta bo'lsa ham,",
    "note": null
  },
  {
    "num": 288,
    "time": "00:28:41,700 --> 00:28:44,339",
    "arabic": "فَإِنَّ عَفْوَكَ أَعْظَمُ يَا مَوْلَايَ",
    "segs": null,
    "full_uz": "afvingiz undan ham buyukroq, xo'jayinim.",
    "note": null
  },
  {
    "num": 289,
    "time": "00:28:44,339 --> 00:28:52,500",
    "arabic": "قَسَمًا بِاللَّهِ",
    "segs": null,
    "full_uz": "Alloh haqi qasam ichamanki,",
    "note": null
  },
  {
    "num": 290,
    "time": "00:28:52,500 --> 00:28:59,240",
    "arabic": "لَأَجْعَلَنَّكَ عِبْرَةً لِمَنْ تَسَوَّلُ لَهُ نَفْسُهُ نَقْضَ الْعَهْدِ وَخِيَانَةَ الْأُمَّةِ",
    "segs": null,
    "full_uz": "ahdni buzish va ummatga xiyonat qilishni ko'ngliga keltirgan har bir kishiga seni ibrat qilib qo'yaman.",
    "note": null
  },
  {
    "num": 291,
    "time": "00:28:59,240 --> 00:29:05,980",
    "arabic": "فِي الْمَرَّةِ الْمَاضِيَةِ سَبَقَتْ رَحْمَتِي غَضَبِي حِينَ عَفَوْتُ عَنْ يَحْيَى الطَّالِبِيِّ",
    "segs": null,
    "full_uz": "O'tgan safar Yahyo Tolibiyni afv etganimda, rahmim g'azabimdan o'zib ketgan edi,",
    "note": null
  },
  {
    "num": 292,
    "time": "00:29:05,980 --> 00:29:10,099",
    "arabic": "إِجْلَالًا لِنَسَبِهِ وَدَرْءًا لِلْفِتَنِ بَيْنَ الْمُسْلِمِينَ",
    "segs": null,
    "full_uz": "uning nasabini hurmat qilib va musulmonlar orasida fitna chiqmasligi uchun.",
    "note": null
  },
  {
    "num": 293,
    "time": "00:29:10,099 --> 00:29:17,939",
    "arabic": "أَمَّا هَذِهِ الْمَرَّةَ وَاللَّهِ وَاللَّهِ لَأَجْعَلَنَّكَ عِبْرَةً لِمَنْ يَعْتَبِرُ",
    "segs": null,
    "full_uz": "Lekin bu safar, Allohga qasamki, ibrat oladiganlarga seni ibrat qilib qo'yaman.",
    "note": null
  },
  {
    "num": 294,
    "time": "00:29:17,939 --> 00:29:23,299",
    "arabic": "خُذُوهُ إِلَى الْقَاضِي أَبِي يُوسُفَ لِيَحْكُمَ فِيهِ حُكْمَ اللَّهِ فِي الْخَائِنِينَ",
    "segs": null,
    "full_uz": "Uni qozi Abu Yusuf oldiga olib boringlar, xoinlar haqidagi Alloh hukmini chiqarsin.",
    "note": null
  },
  {
    "num": 295,
    "time": "00:29:24,339 --> 00:29:28,559",
    "arabic": "يَا أَمِيرَ الْمُؤْمِنِينَ",
    "segs": null,
    "full_uz": "Ey mo'minlar amiri!",
    "note": null
  },
  {
    "num": 296,
    "time": "00:29:33,639 --> 00:29:39,279",
    "arabic": "أَتَشَفَّعُ لَكَ بِقَرَابَتِكَ بِالرَّسُولِ اللَّهِ أَنْ تُسَامِحَنِي يَا مَوْلَايَ",
    "segs": null,
    "full_uz": "Alloh Rasuliga bo'lgan qarindoshligingiz haqi bilan meni kechirishingizni so'rayman, xo'jayinim.",
    "note": null
  },
  {
    "num": 297,
    "time": "00:29:39,279 --> 00:29:40,940",
    "arabic": "صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ",
    "segs": null,
    "full_uz": "Alloh unga salovot va salom yo'llasin.",
    "note": null
  },
  {
    "num": 298,
    "time": "00:29:40,940 --> 00:29:53,220",
    "arabic": "أَتَشَفَّعُ إِلَيْكَ بِابْنِ عَمِّكَ أَبِي الْقَاسِمِ مُحَمَّدٍ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ",
    "segs": null,
    "full_uz": "Amakivachchangiz Abul-Qosim Muhammad — Alloh unga salovot va salom yo'llasin — haqi bilan sizdan shafoat so'rayman.",
    "note": null
  },
  {
    "num": 299,
    "time": "00:30:09,279 --> 00:30:19,339",
    "arabic": "أَيْنَ أَنْتِ يَا فَوْزُ",
    "segs": null,
    "full_uz": "Qayerdasan, Fawz?",
    "note": null
  },
  {
    "num": 300,
    "time": "00:30:19,339 --> 00:30:22,720",
    "arabic": "أَيْنَ أَنْتِ يَا شَهْنَازُ",
    "segs": null,
    "full_uz": "Qayerdasan, Shahnoz?",
    "note": null
  },
  {
    "num": 301,
    "time": "00:30:22,720 --> 00:30:25,579",
    "arabic": "كَيْفَ اخْتَفَيْتُمَا يَا ابْنَتَيَّ",
    "segs": null,
    "full_uz": "Ikkovingiz qanday g'oyib bo'lib qoldinglar, qizlarim?",
    "note": "اخْتَفَيْتُمَا / ابْنَتَيَّ — ikkilik (dual) shakllar, ikki qizga birdan qaratilgan."
  },
  {
    "num": 302,
    "time": "00:30:25,579 --> 00:30:29,639",
    "arabic": "سَأَبْحَثُ عَنْكُمْ فِي بَغْدَادَ كُلِّهَا",
    "segs": null,
    "full_uz": "Butun Bag'dodda sizlarni qidiraman,",
    "note": null
  },
  {
    "num": 303,
    "time": "00:30:29,639 --> 00:30:31,279",
    "arabic": "حَتَّى أَجِدَكُمْ",
    "segs": null,
    "full_uz": "toki sizlarni topguncha.",
    "note": null
  },
  {
    "num": 304,
    "time": "00:31:39,279 --> 00:31:52,779",
    "arabic": "الْحَمْدُ لِلَّهِ أَنَّنِي نَجَوْتُ",
    "segs": null,
    "full_uz": "Alhamdulillah, qutulib qoldim.",
    "note": null
  },
  {
    "num": 305,
    "time": "00:31:52,779 --> 00:31:59,319",
    "arabic": "الْقَتْلُ قَلِيلٌ عَلَى أَمْثَالِهِ مِنَ الْخَوَنَةِ يَا مَوْلَايَ",
    "segs": null,
    "full_uz": "O'ldirish uning kabi xoinlarga oz jazo, xo'jayinim.",
    "note": null
  },
  {
    "num": 306,
    "time": "00:31:59,319 --> 00:32:04,740",
    "arabic": "لَقَدْ تَشَفَّعَ إِلَيَّ بِقَرَابَةٍ مِنْ رَسُولِ اللَّهِ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ",
    "segs": null,
    "full_uz": "U mendan Alloh Rasuli — unga salovot va salom bo'lsin — qarindoshligi orqali shafoat so'radi.",
    "note": null
  },
  {
    "num": 307,
    "time": "00:32:07,140 --> 00:32:12,740",
    "arabic": "وَلَكِنْ لَا أَدْرِي كَيْفَ مَنَعْتُ نَفْسِي عَنْ تَمْزِيقِهِ بِأَظَافِرِي عَلَى خِيَانَتِهِ",
    "segs": null,
    "full_uz": "Lekin xiyonati uchun uni tirnoqlarim bilan tilkalab tashlashdan o'zimni qanday tiyganimni bilmayman.",
    "note": null
  },
  {
    "num": 308,
    "time": "00:32:15,900 --> 00:32:22,860",
    "arabic": "عَلَى أَيِّ حَالٍ بَقَاؤُهُ الْآنَ حَيًّا أَفْضَلُ لَنَا حَتَّى يَعْتَرِفَ بِأَسْمَاءِ شُرَكَائِهِ مِنَ الْخَائِنِينَ",
    "segs": [
      { "ar": "عَلَى أَيِّ حَالٍ بَقَاؤُهُ الْآنَ حَيًّا أَفْضَلُ لَنَا", "uz": "Har holda, uning hozir tirik qolishi biz uchun yaxshiroq" },
      { "ar": "حَتَّى يَعْتَرِفَ بِأَسْمَاءِ شُرَكَائِهِ مِنَ الْخَائِنِينَ", "uz": "toki xoin sheriklarining ismlarini tan olguncha" }
    ],
    "full_uz": "Har holda, uning hozir tirik qolishi biz uchun yaxshiroq, toki xoin sheriklarining ismlarini tan olguncha.",
    "note": null
  },
  {
    "num": 309,
    "time": "00:32:22,860 --> 00:32:28,220",
    "arabic": "هَذِهِ الْمُؤَامَرَةُ وَرَاءَهَا شَرٌّ عَظِيمٌ يَا يَحْيَى",
    "segs": null,
    "full_uz": "Bu fitnaning ortida katta yovuzlik bor, Yahyo,",
    "note": null
  },
  {
    "num": 310,
    "time": "00:32:28,220 --> 00:32:31,960",
    "arabic": "وَالسُّؤَالُ الَّذِي يَفْتِكُ بِرَأْسِي",
    "segs": null,
    "full_uz": "va boshimni qotirayotgan savol —",
    "note": null
  },
  {
    "num": 311,
    "time": "00:32:31,960 --> 00:32:38,420",
    "arabic": "كَيْفَ اسْتَطَاعَ خَائِنٌ مِثْلُهُ أَنْ يَكُونَ رَئِيسَ الْحَرَسِ",
    "segs": null,
    "full_uz": "shunga o'xshash xoin qanday qilib qorovullar boshlig'i bo'la oldi?",
    "note": null
  },
  {
    "num": 312,
    "time": "00:32:38,420 --> 00:32:43,360",
    "arabic": "أَلَيْسَ هَذَا ذَنْبًا أَكْبَرَ مِنْ ذَنْبِهِ نَفْسِهِ",
    "segs": null,
    "full_uz": "Bu uning o'z gunohidan ham kattaroq gunoh emasmi?",
    "note": null
  },
  {
    "num": 313,
    "time": "00:32:43,360 --> 00:32:46,420",
    "arabic": "لَمْ نَرَ مِنْهُ إِلَّا الْوَلَاءَ يَا مَوْلَايَ",
    "segs": null,
    "full_uz": "Undan faqat sadoqatni ko'rgan edik, xo'jayinim.",
    "note": null
  }
  ,
  {
    "num": 314,
    "time": "00:32:53,559 --> 00:32:57,759",
    "arabic": "وَهُوَ يُبَيِّتُ لَنَا الشَّرَّ وَيُضْمِرُ لَنَا الْخَدِيعَةَ",
    "segs": null,
    "full_uz": "U bizga yovuzlikni tayyorlab, aldov niyatini yashirib yurgan edi.",
    "note": null
  },
  {
    "num": 315,
    "time": "00:32:57,759 --> 00:32:59,720",
    "arabic": "كَيْفَ يَكُونُ ذَلِكَ يَا يَحْيَى",
    "segs": null,
    "full_uz": "Bu qanday bo'lishi mumkin, Yahyo?",
    "note": null
  },
  {
    "num": 316,
    "time": "00:32:59,720 --> 00:33:02,960",
    "arabic": "لَا يَعْلَمُ الْخَبَايَا إِلَّا اللَّهُ يَا مَوْلَايَ",
    "segs": null,
    "full_uz": "Yashirin sirlarni faqat Alloh biladi, xo'jayinim.",
    "note": null
  },
  {
    "num": 317,
    "time": "00:33:02,960 --> 00:33:06,519",
    "arabic": "أَرْجُو أَلَّا نَجِدَ الْكَثِيرَ مِنْ أَمْثَالِهِ",
    "segs": null,
    "full_uz": "Umid qilamanki, unga o'xshaganlardan ko'pini topmaymiz,",
    "note": null
  },
  {
    "num": 318,
    "time": "00:33:06,519 --> 00:33:09,720",
    "arabic": "مِمَّنْ لَا يُظْهِرُونَ إِلَّا الْوَلَاءَ",
    "segs": null,
    "full_uz": "faqat sadoqatni namoyish qiladigan,",
    "note": null
  },
  {
    "num": 319,
    "time": "00:33:09,720 --> 00:33:12,640",
    "arabic": "وَيُبَيِّتُونَ لَنَا الْخَدِيعَةَ",
    "segs": null,
    "full_uz": "lekin ichida aldov tayyorlaydiganlardan.",
    "note": null
  },
  {
    "num": 320,
    "time": "00:33:12,640 --> 00:33:15,000",
    "arabic": "كُنْ عَلَى ثِقَةٍ يَا مَوْلَايَ",
    "segs": null,
    "full_uz": "Ishonchingiz komil bo'lsin, xo'jayinim,",
    "note": null
  },
  {
    "num": 321,
    "time": "00:33:15,000 --> 00:33:17,720",
    "arabic": "بِأَنَّ مِثْلَ هَذَا لَنْ يَحْدُثَ مَرَّةً أُخْرَى",
    "segs": null,
    "full_uz": "bunga o'xshash narsa boshqa takrorlanmaydi.",
    "note": null
  },
  {
    "num": 322,
    "time": "00:33:19,120 --> 00:33:24,720",
    "arabic": "لَقَدْ كُنْتَ عَلَى ثِقَةٍ مِنْ قَبْلُ يَا يَحْيَى",
    "segs": null,
    "full_uz": "Ilgari ham ishonching komil edi, Yahyo,",
    "note": null
  },
  {
    "num": 323,
    "time": "00:33:24,720 --> 00:33:27,440",
    "arabic": "وَحَدَثَ شَرٌّ",
    "segs": null,
    "full_uz": "va yovuzlik yuz berdi.",
    "note": null
  },
  {
    "num": 324,
    "time": "00:33:27,440 --> 00:33:32,480",
    "arabic": "سَنَكُونُ أَشَدَّ حِرْصًا وَأَكْثَرَ تَثَبُّتًا بِعَوْنِ اللَّهِ يَا مَوْلَايَ",
    "segs": null,
    "full_uz": "Alloh yordami bilan yanada ehtiyotkor va yanada diqqatli bo'lamiz, xo'jayinim.",
    "note": null
  },
  {
    "num": 325,
    "time": "00:33:32,480 --> 00:33:34,059",
    "arabic": "سَنَرَى",
    "segs": null,
    "full_uz": "Ko'ramiz.",
    "note": null
  },
  {
    "num": 326,
    "time": "00:33:52,880 --> 00:33:54,200",
    "arabic": "السَّلَامُ عَلَيْكُمْ",
    "segs": null,
    "full_uz": "Sizlarga tinchlik-omonlik bo'lsin.",
    "note": null
  },
  {
    "num": 327,
    "time": "00:33:54,200 --> 00:33:56,160",
    "arabic": "وَعَلَيْكُمُ السَّلَامُ وَرَحْمَةُ اللَّهِ",
    "segs": null,
    "full_uz": "Sizga ham tinchlik va Allohning rahmati bo'lsin.",
    "note": null
  },
  {
    "num": 328,
    "time": "00:33:56,160 --> 00:33:59,720",
    "arabic": "كُنْتُ أَبْحَثُ عَنْ أَبِي الَّذِي كَانَ يَبِيعُكَ أَمْشَاطًا مِنَ الْفِضَّةِ",
    "segs": null,
    "full_uz": "Sizga kumush taroqlar sotib yuradigan otamni izlayotgan edim.",
    "note": null
  },
  {
    "num": 329,
    "time": "00:33:59,720 --> 00:34:01,820",
    "arabic": "آهْ التَّاجِرُ أَبُو فَوْزٍ",
    "segs": null,
    "full_uz": "Oh, savdogar Abu Fawzmi?",
    "note": null
  },
  {
    "num": 330,
    "time": "00:34:01,820 --> 00:34:02,300",
    "arabic": "أَجَلْ",
    "segs": null,
    "full_uz": "Ha.",
    "note": null
  },
  {
    "num": 331,
    "time": "00:34:02,300 --> 00:34:03,660",
    "arabic": "لَقَدْ ذَهَبَ",
    "segs": null,
    "full_uz": "U ketdi.",
    "note": null
  },
  {
    "num": 332,
    "time": "00:34:03,660 --> 00:34:05,160",
    "arabic": "إِلَى أَيْنَ؟",
    "segs": null,
    "full_uz": "Qayerga?",
    "note": null
  },
  {
    "num": 333,
    "time": "00:34:05,160 --> 00:34:05,740",
    "arabic": "لَا أَدْرِي",
    "segs": null,
    "full_uz": "Bilmayman.",
    "note": null
  },
  {
    "num": 334,
    "time": "00:34:05,740 --> 00:34:23,500",
    "arabic": "لَقَدْ أُعْجِبَ الْأَمِيرُ يَحْيَى الْبَرْمَكِيُّ بِحِدَّةِ ذَكَائِكَ وَقُدْرَتِكَ عَلَى فَكِّ طَلَاسِمِ رِسَالَةٍ",
    "segs": [
      { "ar": "لَقَدْ أُعْجِبَ الْأَمِيرُ يَحْيَى الْبَرْمَكِيُّ بِحِدَّةِ ذَكَائِكَ", "uz": "Amir Yahyo al-Barmakiy zukkoligingdan hayratda qoldi" },
      { "ar": "وَقُدْرَتِكَ عَلَى فَكِّ طَلَاسِمِ رِسَالَةٍ", "uz": "va xatning sirlarini yechish qobiliyatingdan" }
    ],
    "full_uz": "Amir Yahyo al-Barmakiy zukkoligingdan va xatning sirlarini yechish qobiliyatingdan hayratda qoldi.",
    "note": null
  },
  {
    "num": 335,
    "time": "00:34:23,500 --> 00:34:28,519",
    "arabic": "وَمُكَافَأَةً لَكَ أَمَرَ بِتَعْيِينِكَ نَسَّاخًا لِلْكُتُبِ فِي دَارِ الْحِكْمَةِ",
    "segs": null,
    "full_uz": "Va sening mukofoting sifatida Bayt al-Hikmada kitob ko'chiruvchi bo'lib tayinlanishingga buyruq berdi.",
    "note": null
  },
  {
    "num": 336,
    "time": "00:34:28,519 --> 00:34:30,099",
    "arabic": "مَا رَأْيُكَ؟",
    "segs": null,
    "full_uz": "Fikring qanday?",
    "note": null
  },
  {
    "num": 337,
    "time": "00:34:30,099 --> 00:34:33,260",
    "arabic": "وَلَكِنْ كَيْفَ سَأُوَفِّقُ بَيْنَ هَذَا الْعَمَلِ وَطَلَبِ الْعِلْمِ؟",
    "segs": null,
    "full_uz": "Lekin bu ishni ilm izlash bilan qanday muvofiqlashtiraman?",
    "note": null
  },
  {
    "num": 338,
    "time": "00:34:33,260 --> 00:34:36,420",
    "arabic": "تَعْرِفُ أَنِّي حَرِيصٌ عَلَى طَلَبِكَ الْعِلْمَ حِرْصِي عَلَيْكَ",
    "segs": null,
    "full_uz": "Bilasan-ku, sen uchun qayg'urganimdek, ilm izlashing haqida ham qayg'uraman.",
    "note": null
  },
  {
    "num": 339,
    "time": "00:34:36,420 --> 00:34:40,119",
    "arabic": "لَا تَقْلَقْ سَنَجِدُ حَلًّا تُوَفِّقُ فِيهِ بَيْنَ طَلَبِ الْعِلْمِ وَالْعَمَلِ",
    "segs": null,
    "full_uz": "Xavotir olma, ilm izlash va ishni muvofiqlashtiradigan yechim topamiz.",
    "note": null
  },
  {
    "num": 340,
    "time": "00:34:40,119 --> 00:34:44,460",
    "arabic": "حَسَنًا يَا عَمِّ وَلَكِنْ لَمْ أَكُنْ لِأَقْطَعَ أَمْرًا حَتَّى أَسْتَشِيرَ أُمِّي",
    "segs": null,
    "full_uz": "Xo'p, amaki, lekin onamdan maslahat olmasdan biror ishga qat'iy qaror qilmayman.",
    "note": null
  },
  {
    "num": 341,
    "time": "00:34:44,460 --> 00:34:45,599",
    "arabic": "مَعَكَ كُلُّ الْحَقِّ",
    "segs": null,
    "full_uz": "To'liq haqlisan.",
    "note": null
  },
  {
    "num": 342,
    "time": "00:34:45,599 --> 00:34:52,000",
    "arabic": "رَأْيُ أُمِّكَ بَرَكَةٌ لَكَ لَكِنْ فَلْتَعْلَمْ فُرَصَ الْحَيَاةِ كَالطَّيْرِ لَيْسَ لَهَا قَرَارٌ",
    "segs": [
      { "ar": "رَأْيُ أُمِّكَ بَرَكَةٌ لَكَ", "uz": "Onangning fikri senga baraka" },
      { "ar": "لَكِنْ فَلْتَعْلَمْ فُرَصَ الْحَيَاةِ كَالطَّيْرِ لَيْسَ لَهَا قَرَارٌ", "uz": "lekin bilib qo'y, hayotdagi imkoniyatlar qushga o'xshaydi, bir joyda turmaydi" }
    ],
    "full_uz": "Onangning fikri senga baraka, lekin bilib qo'y, hayotdagi imkoniyatlar qushga o'xshaydi, bir joyda turmaydi.",
    "note": null
  },
  {
    "num": 343,
    "time": "00:34:52,000 --> 00:34:54,460",
    "arabic": "أَفْعَلُهُ إِنْ شَاءَ اللَّهُ",
    "segs": null,
    "full_uz": "Inshaalloh, shunday qilaman.",
    "note": null
  },
  {
    "num": 344,
    "time": "00:35:15,440 --> 00:35:19,320",
    "arabic": "السَّلَامُ عَلَيْكِ يَا خَالَةُ",
    "segs": null,
    "full_uz": "Sizga tinchlik-omonlik bo'lsin, xolajon.",
    "note": null
  },
  {
    "num": 345,
    "time": "00:35:19,320 --> 00:35:21,679",
    "arabic": "وَعَلَيْكِ السَّلَامُ وَرَحْمَةُ اللَّهِ وَبَرَكَاتُهُ",
    "segs": null,
    "full_uz": "Senga ham tinchlik, Allohning rahmati va barakoti bo'lsin.",
    "note": null
  },
  {
    "num": 346,
    "time": "00:35:21,679 --> 00:35:24,279",
    "arabic": "أُرِيدُ أَنْ أَسْأَلَكِ عَنْ أَمْرٍ إِنْ أَذِنْتِ لِي",
    "segs": null,
    "full_uz": "Ruxsat bersangiz, sizdan bir narsa haqida so'ramoqchiman.",
    "note": null
  },
  {
    "num": 347,
    "time": "00:35:24,279 --> 00:35:27,179",
    "arabic": "تَفَضَّلِي إِنِّي مُنْصِتَةٌ",
    "segs": null,
    "full_uz": "Marhamat, quloq solyapman.",
    "note": null
  },
  {
    "num": 348,
    "time": "00:35:27,179 --> 00:35:28,819",
    "arabic": "هَلْ رَأَيْتِ رَجُلًا خُرَاسَانِيًّا وَمَعَهُ فَتَاةٌ فِي مِثْلِ عُمْرِي",
    "segs": null,
    "full_uz": "Xurosonlik bir erkakni, yonida mening yoshimdagi bir qiz bilan ko'rdingizmi?",
    "note": null
  },
  {
    "num": 349,
    "time": "00:35:28,819 --> 00:35:33,419",
    "arabic": "مَا رَأَيْتُ وَلَا سَمِعْتُ قَطُّ عَنْ رَجُلٍ أَضَاعَ فَتَاةً",
    "segs": null,
    "full_uz": "Qizini yo'qotgan biror erkakni na ko'rganman, na eshitganman.",
    "note": null
  },
  {
    "num": 350,
    "time": "00:35:33,419 --> 00:35:35,019",
    "arabic": "لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ",
    "segs": null,
    "full_uz": "Allohdan boshqa kuch-quvvat yo'q.",
    "note": null
  },
  {
    "num": 351,
    "time": "00:35:35,019 --> 00:35:40,359",
    "arabic": "لِمَاذَا كُلُّ هَذَا الْخَوْفِ وَالْقَلَقِ فِي عَيْنَيْكِ",
    "segs": null,
    "full_uz": "Ko'zlaringdagi bu qo'rquv va tashvish nima uchun?",
    "note": null
  },
  {
    "num": 352,
    "time": "00:35:40,359 --> 00:35:41,500",
    "arabic": "مَا قِصَّتُكِ",
    "segs": null,
    "full_uz": "Voqeang nima?",
    "note": null
  },
  {
    "num": 353,
    "time": "00:35:41,500 --> 00:35:43,719",
    "arabic": "لَقَدْ أَضَعْتُ أَبِي وَأُخْتِي فِي سُوقِ بَغْدَادَ",
    "segs": null,
    "full_uz": "Bag'dod bozorida otam va singlimni yo'qotib qo'ydim,",
    "note": null
  },
  {
    "num": 354,
    "time": "00:35:43,719 --> 00:35:45,399",
    "arabic": "وَأَنَا غَرِيبَةُ الدَّارِ",
    "segs": null,
    "full_uz": "va men bu yerlik emasman.",
    "note": null
  },
  {
    "num": 355,
    "time": "00:35:45,399 --> 00:35:47,659",
    "arabic": "لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ",
    "segs": null,
    "full_uz": "Allohdan boshqa kuch-quvvat yo'q.",
    "note": null
  },
  {
    "num": 356,
    "time": "00:35:47,659 --> 00:35:50,779",
    "arabic": "كُلُّنَا أَهْلُكِ يَا أُخْتَاهْ تَفَضَّلِي",
    "segs": null,
    "full_uz": "Hammamiz sening yaqinlaring, singlim, marhamat, kir.",
    "note": null
  },
  {
    "num": 357,
    "time": "00:35:50,780 --> 00:35:53,460",
    "arabic": "لَا وَجَزَاكِ اللَّهُ خَيْرًا",
    "segs": null,
    "full_uz": "Yo'q, Alloh sizga yaxshilik bersin,",
    "note": null
  },
  {
    "num": 358,
    "time": "00:35:53,460 --> 00:35:56,120",
    "arabic": "يَجِبُ عَلَيَّ أَنْ أَذْهَبَ",
    "segs": null,
    "full_uz": "men ketishim kerak.",
    "note": null
  },
  {
    "num": 359,
    "time": "00:35:56,120 --> 00:35:59,880",
    "arabic": "إِلَى أَيْنَ؟ وَقَدِ اقْتَرَبَ اللَّيْلُ",
    "segs": null,
    "full_uz": "Qayerga? Tun yaqinlashib qolyapti-ku.",
    "note": null
  },
  {
    "num": 360,
    "time": "00:35:59,880 --> 00:36:01,840",
    "arabic": "أَلَمْ تَقُولِي إِنَّكِ غَرِيبَةٌ؟",
    "segs": null,
    "full_uz": "Bu yerlik emasman demovmiding?",
    "note": null
  },
  {
    "num": 361,
    "time": "00:36:01,840 --> 00:36:03,660",
    "arabic": "تَفَضَّلِي تَقْضِينَ اللَّيْلَةَ عِنْدِي",
    "segs": null,
    "full_uz": "Marhamat, kechani mening oldimda o'tkazasan,",
    "note": null
  },
  {
    "num": 362,
    "time": "00:36:03,660 --> 00:36:05,600",
    "arabic": "وَفِي الصَّبَاحِ تُعَاوِدِينَ الْبَحْثَ",
    "segs": null,
    "full_uz": "va ertalab qidiruvni davom ettirasan.",
    "note": null
  },
  {
    "num": 363,
    "time": "00:36:05,600 --> 00:36:08,780",
    "arabic": "أَحْسَنَ اللَّهُ إِلَيْكِ وَلَكِنْ يَجِبُ عَلَيَّ أَنْ أَذْهَبَ",
    "segs": null,
    "full_uz": "Alloh sizga yaxshilik qilsin, lekin men ketishim kerak,",
    "note": null
  },
  {
    "num": 364,
    "time": "00:36:08,780 --> 00:36:11,720",
    "arabic": "لَعَلَّنِي أَجِدُهُمَا فِي أَحَدِ النُّزُلِ أَوْ حَيْثُ تَرَكْنَا الْقَافِلَةَ",
    "segs": null,
    "full_uz": "balki ularni mehmonxonalardan birida yoki karvonni qoldirgan joyimizda topib olarman.",
    "note": null
  },
  {
    "num": 365,
    "time": "00:36:11,720 --> 00:36:15,200",
    "arabic": "كَمَا تُرِيدِينَ وَلَكِنْ أَنَا وَزَوْجِي رَهْنُ أَمْرِكِ",
    "segs": null,
    "full_uz": "Xohlaganingdek, lekin men va erim sening ixtiyoringdamiz.",
    "note": null
  },
  {
    "num": 366,
    "time": "00:36:15,200 --> 00:36:18,080",
    "arabic": "زَوْجِي يَعْرِفُ كُلَّ نُزُلِ بَغْدَادَ",
    "segs": null,
    "full_uz": "Erim Bag'dodning barcha mehmonxonalarini biladi,",
    "note": null
  },
  {
    "num": 367,
    "time": "00:36:18,080 --> 00:36:19,880",
    "arabic": "وَإِنْ لَمْ نَجِدْهُمَا فِي النُّزُلِ",
    "segs": null,
    "full_uz": "va agar ularni mehmonxonalardan topa olmasak,",
    "note": null
  },
  {
    "num": 368,
    "time": "00:36:19,880 --> 00:36:22,320",
    "arabic": "فَلْنَذْهَبْ إِلَى حَيْثُ تَقِفُ قَافِلَتُكُمْ",
    "segs": null,
    "full_uz": "karvoningiz to'xtaydigan joyga boramiz.",
    "note": null
  },
  {
    "num": 369,
    "time": "00:36:22,320 --> 00:36:24,119",
    "arabic": "أَكُونُ لَكُمْ مِنَ الشَّاكِرِينَ",
    "segs": null,
    "full_uz": "Sizlarga juda minnatdor bo'lardim.",
    "note": null
  },
  {
    "num": 370,
    "time": "00:36:24,119 --> 00:36:26,740",
    "arabic": "لَا دَاعِيَ لِلشُّكْرِ هَذَا وَاجِبُنَا",
    "segs": null,
    "full_uz": "Rahmatga hojat yo'q, bu bizning vazifamiz.",
    "note": null
  },
  {
    "num": 371,
    "time": "00:36:26,740 --> 00:36:31,079",
    "arabic": "تَفَضَّلِي تَفَضَّلِي إِلَى أَنْ يَتَجَهَّزَ زَوْجِي لِلْخُرُوجِ تَفَضَّلِي",
    "segs": null,
    "full_uz": "Marhamat, marhamat, erim chiqishga tayyorlangunicha, marhamat.",
    "note": null
  },
  {
    "num": 372,
    "time": "00:36:31,079 --> 00:36:35,460",
    "arabic": "أَهْلًا وَمَرْحَبًا أَهْلًا وَسَهْلًا أَهْلًا وَسَهْلًا تَفَضَّلِي",
    "segs": null,
    "full_uz": "Xush kelibsiz, xush kelibsiz, marhamat.",
    "note": null
  },
  {
    "num": 373,
    "time": "00:36:35,460 --> 00:36:42,360",
    "arabic": "تَفَضَّلِي إِلَى الدَّاخِلِ سَأَطْلُبُ مِنْ زَوْجِي أَنْ يَتَأَهَّبَ لِلْخُرُوجِ",
    "segs": null,
    "full_uz": "Ichkariga marhamat, erimdan chiqishga tayyorlanishini so'rayman.",
    "note": null
  },
  {
    "num": 374,
    "time": "00:37:49,880 --> 00:38:10,220",
    "arabic": "السَّلَامُ عَلَيْكُمْ يَا أَخِي",
    "segs": null,
    "full_uz": "Sizga tinchlik-omonlik bo'lsin, akajon.",
    "note": null
  },
  {
    "num": 375,
    "time": "00:38:10,220 --> 00:38:13,119",
    "arabic": "وَعَلَيْكُمُ السَّلَامُ",
    "segs": null,
    "full_uz": "Sizga ham tinchlik-omonlik bo'lsin.",
    "note": null
  },
  {
    "num": 376,
    "time": "00:38:13,119 --> 00:38:15,140",
    "arabic": "خَيْرًا يَا أُخْتَاهْ مَا خَطْبُكِ",
    "segs": null,
    "full_uz": "Xayrmi, singlim, senga nima bo'ldi?",
    "note": null
  },
  {
    "num": 377,
    "time": "00:38:15,140 --> 00:38:18,840",
    "arabic": "أَنَا غَرِيبَةٌ عَنْ بَغْدَادَ",
    "segs": null,
    "full_uz": "Men Bag'dodlik emasman,",
    "note": null
  },
  {
    "num": 378,
    "time": "00:38:19,880 --> 00:38:21,880",
    "arabic": "وَقَدْ أَضَعْتُ أَبِي وَأُخْتِي",
    "segs": null,
    "full_uz": "va otam bilan singlimni yo'qotib qo'ydim.",
    "note": null
  },
  {
    "num": 379,
    "time": "00:38:21,880 --> 00:38:24,880",
    "arabic": "أَضَعْتِهِمْ؟ وَكَيْفَ ذَاكَ؟",
    "segs": null,
    "full_uz": "Ularni yo'qotib qo'ydingmi? Bu qanday bo'ldi?",
    "note": null
  },
  {
    "num": 380,
    "time": "00:38:24,880 --> 00:38:32,880",
    "arabic": "لَا أَدْرِي نَسِيتُ نَفْسِي فَلَمْ أَجِدْ نَفْسِي إِلَّا بَعِيدَةً عَنْهُمْ تَائِهَةً فِي السُّوقِ",
    "segs": [
      { "ar": "لَا أَدْرِي نَسِيتُ نَفْسِي", "uz": "Bilmayman, o'zimni unutib qo'ygan ekanman" },
      { "ar": "فَلَمْ أَجِدْ نَفْسِي إِلَّا بَعِيدَةً عَنْهُمْ تَائِهَةً فِي السُّوقِ", "uz": "o'zimni bozorda ulardan uzoqda, adashib qolganimni bildim" }
    ],
    "full_uz": "Bilmayman, o'zimni unutib qo'ygan ekanman, o'zimni bozorda ulardan uzoqda, adashib qolganimni bildim.",
    "note": null
  },
  {
    "num": 381,
    "time": "00:38:32,880 --> 00:38:34,880",
    "arabic": "مِنْ أَيِّ الْبِلَادِ أَنْتِ؟",
    "segs": null,
    "full_uz": "Qaysi yurtdansan?",
    "note": null
  },
  {
    "num": 382,
    "time": "00:38:34,880 --> 00:38:36,880",
    "arabic": "خُرَاسَانَ",
    "segs": null,
    "full_uz": "Xurosondan.",
    "note": null
  },
  {
    "num": 383,
    "time": "00:38:36,880 --> 00:38:40,880",
    "arabic": "خُرَاسَانَ؟ لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ",
    "segs": null,
    "full_uz": "Xurosondanmi? Allohdan boshqa kuch-quvvat yo'q.",
    "note": null
  },
  {
    "num": 384,
    "time": "00:38:40,880 --> 00:38:47,820",
    "arabic": "هَلْ لَكَ أَنْ تُسَاعِدَنِي فِي الْبَحْثِ عَنْهُمَا؟",
    "segs": null,
    "full_uz": "Ikkovlarini qidirishda menga yordam bera olasizmi?",
    "note": null
  },
  {
    "num": 385,
    "time": "00:38:47,820 --> 00:38:49,900",
    "arabic": "لَقَدْ ضَلَلْتُ الطَّرِيقَ هُنَا",
    "segs": null,
    "full_uz": "Men shu yerda yo'lni yo'qotib qo'ydim.",
    "note": null
  },
  {
    "num": 386,
    "time": "00:38:49,900 --> 00:38:51,780",
    "arabic": "كَرَامَةً وَمُرُوءَةً يَا أَخِي",
    "segs": null,
    "full_uz": "Hurmat va olijanoblik yuzasidan, birodar,",
    "note": null
  },
  {
    "num": 387,
    "time": "00:38:51,780 --> 00:38:56,400",
    "arabic": "وَلَكِنْ هَا أَنْتِ تَرَيْنَ أَنَّ الْمَسَاءَ قَدْ حَلَّ",
    "segs": null,
    "full_uz": "lekin ko'ryapsanki, kech tushib qoldi,",
    "note": null
  },
  {
    "num": 388,
    "time": "00:38:56,400 --> 00:38:59,420",
    "arabic": "وَالسُّوقُ قَدْ أُغْلِقَ إِلَّا مِنْ بَعْضِ أَهْلِهِ",
    "segs": null,
    "full_uz": "va bozor deyarli yopilgan, faqat bir necha kishisi qolgan.",
    "note": null
  },
  {
    "num": 389,
    "time": "00:38:59,420 --> 00:39:01,820",
    "arabic": "فَأَيْنَ نَبْحَثُ عَنْهُمْ",
    "segs": null,
    "full_uz": "Ularni qayerdan qidiramiz?",
    "note": null
  },
  {
    "num": 390,
    "time": "00:39:01,820 --> 00:39:05,280",
    "arabic": "أَلَكِ قَرَابَةٌ هُنَا حَتَّى آخُذَكِ إِلَيْهِمْ",
    "segs": null,
    "full_uz": "Qarindoshing bormi shu yerda, seni ularning oldiga olib borsam?",
    "note": null
  },
  {
    "num": 391,
    "time": "00:39:05,280 --> 00:39:07,099",
    "arabic": "فَرُبَّمَا يَكُونُ أَهْلُكِ عِنْدَهُمْ",
    "segs": null,
    "full_uz": "Balki yaqinlaring ularning oldida bo'lar.",
    "note": null
  },
  {
    "num": 392,
    "time": "00:39:07,099 --> 00:39:09,220",
    "arabic": "لَا",
    "segs": null,
    "full_uz": "Yo'q.",
    "note": null
  },
  {
    "num": 393,
    "time": "00:39:09,219 --> 00:39:13,480",
    "arabic": "لَيْسَ لِي فِي بَغْدَادَ قَرَابَةٌ",
    "segs": null,
    "full_uz": "Bag'dodda hech qanday qarindoshim yo'q,",
    "note": null
  },
  {
    "num": 394,
    "time": "00:39:13,480 --> 00:39:16,279",
    "arabic": "لَقَدْ أَضَعْتُ أَبِي",
    "segs": null,
    "full_uz": "otamni yo'qotib qo'ydim,",
    "note": null
  },
  {
    "num": 395,
    "time": "00:39:16,279 --> 00:39:20,299",
    "arabic": "وَلَيْسَ لِي أَحَدٌ فِي هَذِهِ الْبِلَادِ",
    "segs": null,
    "full_uz": "va bu yurtda hech kimim yo'q.",
    "note": null
  },
  {
    "num": 396,
    "time": "00:39:20,299 --> 00:39:21,639",
    "arabic": "هَوِّنِي عَلَيْكِ يَا أُخْتَاهْ",
    "segs": null,
    "full_uz": "O'zingni bos, singlim,",
    "note": null
  },
  {
    "num": 397,
    "time": "00:39:22,939 --> 00:39:24,279",
    "arabic": "فَكُلُّ بَغْدَادَ أَهْلُكِ",
    "segs": null,
    "full_uz": "chunki butun Bag'dod sening yaqinlaring.",
    "note": null
  },
  {
    "num": 398,
    "time": "00:39:35,500 --> 00:39:38,259",
    "arabic": "مَا زِلْتُ مُنْتَظِرَةً كَلَامَكَ",
    "segs": null,
    "full_uz": "Hali ham gapingni kutyapman.",
    "note": null
  },
  {
    "num": 399,
    "time": "00:39:38,260 --> 00:39:42,340",
    "arabic": "كَلَامِي فِي مَاذَا؟",
    "segs": null,
    "full_uz": "Nima haqida gapiray?",
    "note": null
  },
  {
    "num": 400,
    "time": "00:39:42,340 --> 00:39:45,280",
    "arabic": "فِيمَا يَشْغَلُ عَقْلَكَ وَيَمْلِكُ عَلَيْكَ لُبَّكَ",
    "segs": null,
    "full_uz": "Aqlingni band qilib, fikringni egallab turgan narsa haqida.",
    "note": null
  },
  {
    "num": 401,
    "time": "00:39:45,280 --> 00:39:47,240",
    "arabic": "لَا شَيْءَ مُهِمٌّ",
    "segs": null,
    "full_uz": "Muhim narsa emas.",
    "note": null
  },
  {
    "num": 402,
    "time": "00:39:47,240 --> 00:39:52,860",
    "arabic": "أَخْبِرْ أُمَّكَ أَوَّلًا وَهِيَ مَنْ تُقَرِّرُ إِنْ كَانَ مُهِمًّا أَمْ لَا",
    "segs": null,
    "full_uz": "Avval onangga aytib qo'y, muhimmi yo'qmi — buni u hal qilsin.",
    "note": null
  },
  {
    "num": 403,
    "time": "00:39:52,860 --> 00:39:55,540",
    "arabic": "لَا أُرِيدُ أَنْ أَشْغَلَكِ بِهِ",
    "segs": null,
    "full_uz": "Seni bu bilan bezovta qilishni xohlamayman.",
    "note": null
  },
  {
    "num": 404,
    "time": "00:39:55,540 --> 00:39:57,400",
    "arabic": "أَحْمَدُ",
    "segs": null,
    "full_uz": "Ahmad!",
    "note": null
  },
  {
    "num": 405,
    "time": "00:39:57,400 --> 00:40:02,380",
    "arabic": "كَمَا تَشَائِينَ يَا أُمَّ أَحْمَدَ",
    "segs": null,
    "full_uz": "Xohlaganingdek bo'lsin, Ahmadning onasi.",
    "note": null
  },
  {
    "num": 406,
    "time": "00:40:03,640 --> 00:40:07,600",
    "arabic": "قَدْ عَرَضَ عَلَيَّ عَمِّي الْعَمَلَ فِي بَيْتِ الْحِكْمَةِ نَسَّاخًا لِلْكُتُبِ",
    "segs": null,
    "full_uz": "Amakim menga Bayt al-Hikmada kitob ko'chiruvchi bo'lib ishlashni taklif qildi.",
    "note": null
  }
];
if (typeof module !== "undefined" && module.exports) {
  module.exports = lessons;
}