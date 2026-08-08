const lessons = [
  {
    "num": 1,
    "time": "00:00:34,280 --> 00:00:36,119",
    "arabic": "الرُّسُومُ الْمُتَحَرِّكَةُ",
    "segs": null,
    "full_uz": "Multfilm.",
    "note": null
  },
  {
    "num": 2,
    "time": "00:00:48,900 --> 00:00:51,480",
    "arabic": "تُومْ أَلَمْ تَنْتَهِ بَعْدُ؟",
    "segs": null,
    "full_uz": "Tom, hali tugatmadingmi?",
    "note": null
  },
  {
    "num": 3,
    "time": "00:00:51,480 --> 00:00:53,939",
    "arabic": "نَعَمْ أَوْقِفِ الرَّسْمَ وَأَرِينَا الْمُفَاجَأَةَ",
    "segs": [
      { "ar": "نَعَمْ أَوْقِفِ الرَّسْمَ", "uz": "ha, chizishni to'xtat" },
      { "ar": "وَأَرِينَا الْمُفَاجَأَةَ", "uz": "va bizga sovg'ani ko'rsat" }
    ],
    "full_uz": "Ha, chizishni to'xtat va bizga sovg'ani ko'rsat.",
    "note": null
  },
  {
    "num": 4,
    "time": "00:00:53,939 --> 00:00:55,500",
    "arabic": "لَكِنْ هَذِهِ هِيَ الْمُفَاجَأَةُ",
    "segs": null,
    "full_uz": "Lekin sovg'a mana shu-ku.",
    "note": null
  },
  {
    "num": 5,
    "time": "00:00:55,500 --> 00:00:59,140",
    "arabic": "لِذَا اسْتَرِيحَا قَلِيلًا اسْتَعِدَّا",
    "segs": [
      { "ar": "لِذَا اسْتَرِيحَا قَلِيلًا", "uz": "shuning uchun biroz dam olinglar" },
      { "ar": "اسْتَعِدَّا", "uz": "tayyor turinglar" }
    ],
    "full_uz": "Shuning uchun biroz dam olinglar, tayyor turinglar.",
    "note": null
  },
  {
    "num": 6,
    "time": "00:00:59,140 --> 00:00:59,880",
    "arabic": "هَيَّا",
    "segs": null,
    "full_uz": "Qani.",
    "note": null
  },
  {
    "num": 7,
    "time": "00:00:59,880 --> 00:01:09,879",
    "arabic": "اصْطِدَامٌ كَبِيرٌ",
    "segs": null,
    "full_uz": "Katta to'qnashuv.",
    "note": null
  },
  {
    "num": 8,
    "time": "00:01:09,879 --> 00:01:12,840",
    "arabic": "يَجِبُ أَنْ تَرْسُمَ كَدْمَةً كَبِيرَةً عَلَى رَأْسِهِ",
    "segs": null,
    "full_uz": "Uning boshiga katta ko'k dog' chizishing kerak edi.",
    "note": null
  },
  {
    "num": 9,
    "time": "00:01:12,840 --> 00:01:15,400",
    "arabic": "الَّذِي رَسَمْتَهُ يُشْبِهُ الرُّسُومَ الْمُتَحَرِّكَةَ",
    "segs": null,
    "full_uz": "Chizganing multfilmga o'xshaydi.",
    "note": null
  },
  {
    "num": 10,
    "time": "00:01:15,400 --> 00:01:17,900",
    "arabic": "إِنَّهَا الرُّسُومُ الْمُتَحَرِّكَةُ حَقًّا",
    "segs": null,
    "full_uz": "U chindan ham multfilm-ku.",
    "note": null
  },
  {
    "num": 11,
    "time": "00:01:17,900 --> 00:01:21,579",
    "arabic": "لَا الرُّسُومُ الْحَقِيقِيَّةُ هِيَ كَالَّتِي تُعْرَضُ عَلَى التِّلْفَازِ",
    "segs": null,
    "full_uz": "Yo'q, haqiqiy multfilm televizorda ko'rsatiladigan kabi bo'ladi.",
    "note": null
  },
  {
    "num": 12,
    "time": "00:01:21,579 --> 00:01:24,280",
    "arabic": "لَكِنَّهَا تُصْنَعُ بِالطَّرِيقَةِ نَفْسِهَا",
    "segs": null,
    "full_uz": "Lekin ular xuddi shu usulda yaratiladi.",
    "note": null
  },
  {
    "num": 13,
    "time": "00:01:24,280 --> 00:01:32,019",
    "arabic": "الرُّسُومُ الْمُتَحَرِّكَةُ يُصْنَعُ مَشْهَدُهَا مِنْ عَدَدٍ كَبِيرٍ مِنَ الصُّوَرِ الْمُتَلَاحِقَةِ",
    "segs": null,
    "full_uz": "Multfilm sahnasi ketma-ket keladigan ko'plab rasmlardan yaratiladi,",
    "note": null
  },
  {
    "num": 14,
    "time": "00:01:32,019 --> 00:01:36,120",
    "arabic": "كُلُّ وَاحِدَةٍ مِنْ هَذِهِ الصُّوَرِ مُخْتَلِفَةٌ قَلِيلًا عَنِ الَّتِي قَبْلَهَا",
    "segs": null,
    "full_uz": "bu rasmlarning har biri o'zidan oldingisidan bir oz farq qiladi.",
    "note": null
  },
  {
    "num": 15,
    "time": "00:01:36,120 --> 00:01:40,960",
    "arabic": "مَثَلًا تَسْتَطِيعُ شَخْصِيَّةٌ مَا أَنْ تَرْفَعَ ذِرَاعَهَا قَلِيلًا فِي كُلِّ مَرَّةٍ",
    "segs": null,
    "full_uz": "Masalan, biror personaj har safar qo'lini bir oz ko'tarib turishi mumkin,",
    "note": null
  },
  {
    "num": 16,
    "time": "00:01:40,960 --> 00:01:46,400",
    "arabic": "وَبَعْدَهَا إِنْ رَأَيْتَ الصُّوَرَ وَاحِدَةً تِلْوَ الْأُخْرَى بِسُرْعَةٍ فَسَتَبْدُو كَأَنَّهَا تَتَحَرَّكُ حَقًّا",
    "segs": [
      { "ar": "وَبَعْدَهَا إِنْ رَأَيْتَ الصُّوَرَ وَاحِدَةً تِلْوَ الْأُخْرَى بِسُرْعَةٍ", "uz": "va agar rasmlarni tez ketma-ket ko'rsang" },
      { "ar": "فَسَتَبْدُو كَأَنَّهَا تَتَحَرَّكُ حَقًّا", "uz": "u chindan harakatlanayotgandek ko'rinadi" }
    ],
    "full_uz": "Va agar rasmlarni tez ketma-ket ko'rsang, u chindan harakatlanayotgandek ko'rinadi.",
    "note": null
  },
  {
    "num": 17,
    "time": "00:01:46,400 --> 00:01:49,799",
    "arabic": "أَرَأَيْتُمْ ذَلِكَ؟ وَهَكَذَا تُصْنَعُ الرُّسُومُ الْمُتَحَرِّكَةُ",
    "segs": [
      { "ar": "أَرَأَيْتُمْ ذَلِكَ", "uz": "ko'rdinglarmi" },
      { "ar": "وَهَكَذَا تُصْنَعُ الرُّسُومُ الْمُتَحَرِّكَةُ", "uz": "multfilm mana shunday yaratiladi" }
    ],
    "full_uz": "Ko'rdinglarmi? Multfilm mana shunday yaratiladi.",
    "note": null
  },
  {
    "num": 18,
    "time": "00:01:49,799 --> 00:01:56,259",
    "arabic": "وَتَذَكَّرُوا لِصُنْعِ دَقِيقَةٍ مِنَ الرُّسُومِ الْمُتَحَرِّكَةِ يَجِبُ رَسْمُ أَكْثَرَ مِنْ أَلْفِ صُورَةٍ",
    "segs": [
      { "ar": "وَتَذَكَّرُوا", "uz": "va esda tutinglar" },
      { "ar": "لِصُنْعِ دَقِيقَةٍ مِنَ الرُّسُومِ الْمُتَحَرِّكَةِ يَجِبُ رَسْمُ أَكْثَرَ مِنْ أَلْفِ صُورَةٍ", "uz": "bir daqiqalik multfilm uchun ming donadan ortiq rasm chizish kerak" }
    ],
    "full_uz": "Va esda tutinglar, bir daqiqalik multfilm uchun ming donadan ortiq rasm chizish kerak bo'ladi.",
    "note": null
  },
  {
    "num": 19,
    "time": "00:01:56,259 --> 00:02:02,239",
    "arabic": "أَلْفُ صُورَةٍ؟ لَا أَمْلِكُ صَبْرًا كَافِيًا لِرَسْمِهَا",
    "segs": [
      { "ar": "أَلْفُ صُورَةٍ", "uz": "ming rasmmi" },
      { "ar": "لَا أَمْلِكُ صَبْرًا كَافِيًا لِرَسْمِهَا", "uz": "buni chizishga sabr-toqatim yetmaydi" }
    ],
    "full_uz": "Ming rasmmi? Buni chizishga sabr-toqatim yetmaydi.",
    "note": null
  },
  {
    "num": 20,
    "time": "00:02:02,239 --> 00:02:06,679",
    "arabic": "صَحِيحٌ أَنَّ رُسُومَكَ الْمُتَحَرِّكَةَ قَصِيرَةٌ وَلَكِنَّهَا مُضْحِكَةٌ جِدًّا",
    "segs": [
      { "ar": "صَحِيحٌ أَنَّ رُسُومَكَ الْمُتَحَرِّكَةَ قَصِيرَةٌ", "uz": "to'g'ri, sening multfilming qisqa" },
      { "ar": "وَلَكِنَّهَا مُضْحِكَةٌ جِدًّا", "uz": "lekin juda kulgili" }
    ],
    "full_uz": "To'g'ri, sening multfilming qisqa, lekin juda kulgili.",
    "note": null
  },
  {
    "num": 21,
    "time": "00:02:06,679 --> 00:02:13,240",
    "arabic": "نَعَمْ إِنَّهَا مُضْحِكَةٌ وَلَكِنْ مَنْ ذَلِكَ الشَّخْصُ الْمُغَفَّلُ الَّذِي رَسَمْتَهُ؟",
    "segs": [
      { "ar": "نَعَمْ إِنَّهَا مُضْحِكَةٌ", "uz": "ha, kulgili" },
      { "ar": "وَلَكِنْ مَنْ ذَلِكَ الشَّخْصُ الْمُغَفَّلُ الَّذِي رَسَمْتَهُ", "uz": "lekin chizgan o'sha ahmoq shaxs kim" }
    ],
    "full_uz": "Ha, kulgili, lekin chizgan o'sha ahmoq shaxs kim?",
    "note": null
  },
  {
    "num": 22,
    "time": "00:02:13,919 --> 00:02:16,979",
    "arabic": "لَا شَكَّ أَنَّكَ تُمَازِحُنِي أَلَمْ تَعْرِفْ نَفْسَكَ؟",
    "segs": [
      { "ar": "لَا شَكَّ أَنَّكَ تُمَازِحُنِي", "uz": "shubhasiz, hazillashyapsan" },
      { "ar": "أَلَمْ تَعْرِفْ نَفْسَكَ", "uz": "o'zingni tanimadingmi" }
    ],
    "full_uz": "Shubhasiz, hazillashyapsan, o'zingni tanimadingmi?",
    "note": null
  },
  {
    "num": 23,
    "time": "00:02:16,979 --> 00:02:19,240",
    "arabic": "إِذَنْ مِنَ الْمُفْتَرَضِ أَنْ يَكُونَ هَذَا أَنَا؟",
    "segs": null,
    "full_uz": "Demak, bu men bo'lishim kerakmidi?",
    "note": null
  },
  {
    "num": 24,
    "time": "00:02:19,800 --> 00:02:23,480",
    "arabic": "وَهَلْ نَسِيتَ مَا حَدَثَ مَعَكَ هَذَا الصَّبَاحَ؟",
    "segs": null,
    "full_uz": "Bugun ertalab boshingdan o'tganini unutdingmi?",
    "note": null
  },
  {
    "num": 25,
    "time": "00:02:23,480 --> 00:02:28,280",
    "arabic": "سِيمْكَا دَوْرُكِ لَنْ تُمْسِكِي بِي",
    "segs": [
      { "ar": "سِيمْكَا دَوْرُكِ", "uz": "Simka, sening navbating" },
      { "ar": "لَنْ تُمْسِكِي بِي", "uz": "menga yetolmaysan" }
    ],
    "full_uz": "Simka, sening navbating, menga yetolmaysan.",
    "note": null
  },
  {
    "num": 26,
    "time": "00:02:28,280 --> 00:02:31,820",
    "arabic": "أَنَا أَسْرَعُ مِنْكِ",
    "segs": null,
    "full_uz": "Men sendan tezroqman.",
    "note": null
  },
  {
    "num": 27,
    "time": "00:02:31,820 --> 00:02:35,680",
    "arabic": "آهْ يَا رَأْسِي",
    "segs": null,
    "full_uz": "Voy, boshim.",
    "note": null
  },
  {
    "num": 28,
    "time": "00:02:35,680 --> 00:02:38,580",
    "arabic": "لَمْ تَكُنْ أَسْرَعَ مِنَ الْعَمُودِ",
    "segs": null,
    "full_uz": "Ustundan tez emas ekansan.",
    "note": null
  },
  {
    "num": 29,
    "time": "00:02:38,580 --> 00:02:42,880",
    "arabic": "سِيمْكَا لِمَ أَخْبَرْتِهِ بِهَذَا؟",
    "segs": null,
    "full_uz": "Simka, nega senga buni aytdim ekan?",
    "note": null
  },
  {
    "num": 30,
    "time": "00:02:42,880 --> 00:02:46,180",
    "arabic": "الْأَخَوَاتُ الْحَقِيقِيَّاتُ لَا يُعَامِلْنَ أَخَوَاتِهِنَّ هَكَذَا",
    "segs": null,
    "full_uz": "Haqiqiy opa-singillar bir-birlariga bunday munosabatda bo'lmaydi,",
    "note": null
  },
  {
    "num": 31,
    "time": "00:02:46,180 --> 00:02:50,219",
    "arabic": "وَالرُّسُومُ لَيْسَتْ مُضْحِكَةً كَمَا تَظُنُّ",
    "segs": null,
    "full_uz": "va rasmlar sen o'ylagancha kulgili emas.",
    "note": null
  },
  {
    "num": 32,
    "time": "00:02:50,219 --> 00:02:52,860",
    "arabic": "نُولِيكْ لَا تَذْهَبْ",
    "segs": null,
    "full_uz": "Nolik, ketma.",
    "note": null
  },
  {
    "num": 33,
    "time": "00:02:52,860 --> 00:02:55,780",
    "arabic": "لَا عَلَيْكِ سَيَكُونُ بِخَيْرٍ بَعْدَ قَلِيلٍ",
    "segs": null,
    "full_uz": "Xavotir olma, biroz vaqtdan keyin yaxshi bo'ladi.",
    "note": null
  },
  {
    "num": 34,
    "time": "00:02:55,780 --> 00:02:57,960",
    "arabic": "إِلَى أَنْ يَعُودَ أُرِيدُ أَنْ أُرِيَكِ شَيْئًا",
    "segs": null,
    "full_uz": "U qaytguncha senga bir narsa ko'rsatmoqchiman.",
    "note": null
  },
  {
    "num": 35,
    "time": "00:02:57,960 --> 00:03:00,580",
    "arabic": "أَلَدَيْكَ رُسُومٌ مُتَحَرِّكَةٌ نُتَابِعُهَا؟",
    "segs": null,
    "full_uz": "Tomosha qiladigan multfilming bormi?",
    "note": null
  },
  {
    "num": 36,
    "time": "00:03:00,580 --> 00:03:01,540",
    "arabic": "لَدَيَّ الْكَثِيرُ",
    "segs": null,
    "full_uz": "Ko'p bor.",
    "note": null
  },
  {
    "num": 37,
    "time": "00:03:05,500 --> 00:03:08,040",
    "arabic": "مَاذَا أَفْعَلُ؟",
    "segs": null,
    "full_uz": "Nima qilaman?",
    "note": null
  },
  {
    "num": 38,
    "time": "00:03:08,040 --> 00:03:13,540",
    "arabic": "تَابِعِيهَا ثَانِيَةً لَكِنْ هَذِهِ الْمَرَّةَ سَأُرِيكِ إِيَّاهَا صُورَةً بَعْدَ الْأُخْرَى",
    "segs": [
      { "ar": "تَابِعِيهَا ثَانِيَةً", "uz": "yana bir marta tomosha qil" },
      { "ar": "لَكِنْ هَذِهِ الْمَرَّةَ سَأُرِيكِ إِيَّاهَا صُورَةً بَعْدَ الْأُخْرَى", "uz": "lekin bu safar senga rasmni rasm ortidan ko'rsataman" }
    ],
    "full_uz": "Yana bir marta tomosha qil, lekin bu safar senga rasmni rasm ortidan ko'rsataman.",
    "note": null
  },
  {
    "num": 39,
    "time": "00:03:13,539 --> 00:03:16,539",
    "arabic": "هَيَّا انْظُرِي جَيِّدًا",
    "segs": null,
    "full_uz": "Qani, yaxshilab qara.",
    "note": null
  },
  {
    "num": 40,
    "time": "00:03:16,539 --> 00:03:21,259",
    "arabic": "هَذِهِ صُورَةٌ وَهَذِهِ أُخْرَى وَأُخْرَى",
    "segs": null,
    "full_uz": "Mana bu bir rasm, bu — yana bittasi, va yana bittasi.",
    "note": null
  },
  {
    "num": 41,
    "time": "00:03:21,259 --> 00:03:23,819",
    "arabic": "أَلَيْسَ رَائِعًا؟ إِنَّهَا مُدْهِشَةٌ",
    "segs": [
      { "ar": "أَلَيْسَ رَائِعًا", "uz": "ajoyib emasmi" },
      { "ar": "إِنَّهَا مُدْهِشَةٌ", "uz": "bu hayratlanarli" }
    ],
    "full_uz": "Ajoyib emasmi? Bu hayratlanarli.",
    "note": null
  },
  {
    "num": 42,
    "time": "00:03:23,819 --> 00:03:26,319",
    "arabic": "رَائِعٌ جِدًّا",
    "segs": null,
    "full_uz": "Juda ajoyib.",
    "note": null
  },
  {
    "num": 43,
    "time": "00:03:26,319 --> 00:03:30,560",
    "arabic": "ثُمَّ بِسُرْعَةٍ طَبِيعِيَّةٍ هُنَاكَ خَمْسٌ وَعِشْرُونَ صُورَةً فِي الثَّانِيَةِ",
    "segs": null,
    "full_uz": "So'ngra oddiy tezlikda soniyasiga yigirma besh rasm ko'rsatiladi,",
    "note": null
  },
  {
    "num": 44,
    "time": "00:03:30,560 --> 00:03:32,359",
    "arabic": "الْأَمْرُ عَجِيبٌ",
    "segs": null,
    "full_uz": "Bu ajoyib narsa.",
    "note": null
  },
  {
    "num": 45,
    "time": "00:03:32,359 --> 00:03:34,399",
    "arabic": "أَتَعْلَمِينَ؟",
    "segs": null,
    "full_uz": "Bilasanmi?",
    "note": null
  },
  {
    "num": 46,
    "time": "00:03:34,399 --> 00:03:38,079",
    "arabic": "أَشْعُرُ بِالذَّنْبِ اتِّجَاهَ نُولِيكْ",
    "segs": null,
    "full_uz": "Nolik oldida o'zimni aybdor his qilyapman.",
    "note": null
  },
  {
    "num": 47,
    "time": "00:03:38,079 --> 00:03:42,699",
    "arabic": "أَجَلْ وَأَنَا أَيْضًا أَشْعُرُ بِالذَّنْبِ",
    "segs": null,
    "full_uz": "Ha, men ham o'zimni aybdor his qilyapman.",
    "note": null
  },
  {
    "num": 48,
    "time": "00:03:42,699 --> 00:03:48,339",
    "arabic": "هُنَاكَ طَرَائِقُ كَثِيرَةٌ لِعَمَلِ الرُّسُومِ الْمُتَحَرِّكَةِ",
    "segs": null,
    "full_uz": "Multfilm yaratishning ko'plab usullari bor:",
    "note": null
  },
  {
    "num": 49,
    "time": "00:03:48,339 --> 00:03:51,819",
    "arabic": "الرُّسُومُ الْيَدَوِيَّةُ وَهِيَ مَرْسُومَةٌ بِالْيَدِ كَمَا نَعْلَمُ",
    "segs": null,
    "full_uz": "qo'lda chiziladigan animatsiya, bizga ma'lumki, qo'l bilan chiziladi,",
    "note": null
  },
  {
    "num": 50,
    "time": "00:03:51,819 --> 00:03:54,599",
    "arabic": "وَالتَّحْرِيكُ بِالْحَرَكَةِ الثَّابِتَةِ كَالْآتِي",
    "segs": null,
    "full_uz": "stop-motion animatsiya esa quyidagicha bo'ladi:",
    "note": null
  },
  {
    "num": 51,
    "time": "00:03:54,599 --> 00:03:57,299",
    "arabic": "يَصْنَعُ الْمُحَرِّكُ النَّمُوذَجَ وَيَلْتَقِطُ صُورَةً",
    "segs": null,
    "full_uz": "animator model yasaydi va bir rasm oladi,",
    "note": null
  },
  {
    "num": 52,
    "time": "00:03:57,299 --> 00:04:00,539",
    "arabic": "ثُمَّ يُحَرِّكُ النَّمُوذَجَ قَلِيلًا وَيَأْخُذُ صُورَةً أُخْرَى",
    "segs": null,
    "full_uz": "keyin modelni bir oz siljitib, yana bir rasm oladi,",
    "note": null
  },
  {
    "num": 53,
    "time": "00:04:00,539 --> 00:04:02,799",
    "arabic": "وَيَفْعَلُ هَذَا مِرَارًا وَتِكْرَارًا",
    "segs": null,
    "full_uz": "va buni qayta-qayta takrorlaydi,",
    "note": null
  },
  {
    "num": 54,
    "time": "00:04:02,799 --> 00:04:05,699",
    "arabic": "حَتَّى يُصْبِحَ لَدَيْهِ عَدَدٌ كَافٍ مِنَ الصُّوَرِ",
    "segs": null,
    "full_uz": "toki yetarli miqdorda rasm to'planguncha,",
    "note": null
  },
  {
    "num": 55,
    "time": "00:04:05,699 --> 00:04:09,979",
    "arabic": "لِجَعْلِ الشَّخْصِيَّةِ تَبْدُو كَأَنَّهَا تَتَحَرَّكُ بِسَلَاسَةٍ عَلَى الشَّاشَةِ",
    "segs": null,
    "full_uz": "shunda personaj ekranda silliq harakatlanayotgandek ko'rinadi.",
    "note": null
  },
  {
    "num": 56,
    "time": "00:04:09,979 --> 00:04:13,399",
    "arabic": "وَنَوْعٌ آخَرُ مَعْرُوفٌ مِنَ التَّحْرِيكِ هُوَ التَّحْرِيكُ بِالطِّينِ",
    "segs": null,
    "full_uz": "Yana bir mashhur animatsiya turi — plastilin animatsiyasi,",
    "note": null
  },
  {
    "num": 57,
    "time": "00:04:13,399 --> 00:04:19,459",
    "arabic": "وَفِي هَذِهِ الْأَفْلَامِ كُلُّ شَيْءٍ يُصْنَعُ وَيُعَادُ تَشْكِيلُهُ مِنْ طِينٍ خَاصٍّ بِالنَّمَاذِجِ",
    "segs": null,
    "full_uz": "bu filmlarda hamma narsa model uchun maxsus loydan yasalib, qayta shakllantiriladi.",
    "note": null
  },
  {
    "num": 58,
    "time": "00:04:19,459 --> 00:04:23,480",
    "arabic": "لَكِنِ الْيَوْمَ الرُّسُومُ الْمُتَحَرِّكَةُ تُصْنَعُ بِاسْتِعْمَالِ الْحَاسِبِ",
    "segs": null,
    "full_uz": "Lekin bugun multfilmlar kompyuter yordamida yaratiladi,",
    "note": null
  },
  {
    "num": 59,
    "time": "00:04:23,480 --> 00:04:26,399",
    "arabic": "فِي الْبِدَايَةِ يُصْنَعُ نَمُوذَجٌ رَقْمِيٌّ لِلشَّخْصِيَّةِ",
    "segs": null,
    "full_uz": "avval personaj uchun raqamli model yasaladi —",
    "note": null
  },
  {
    "num": 60,
    "time": "00:04:26,399 --> 00:04:29,860",
    "arabic": "دُمْيَةٌ رَقْمِيَّةٌ تُلَوَّنُ ثُمَّ نَقُومُ بِتَحْرِيكِهَا",
    "segs": null,
    "full_uz": "raqamli qo'g'irchoq bo'yaladi, so'ng uni harakatga keltiramiz,",
    "note": null
  },
  {
    "num": 61,
    "time": "00:04:29,860 --> 00:04:33,339",
    "arabic": "هَذَا هُوَ النَّوْعُ الْمُسْتَعْمَلُ فِي صِنَاعَةِ مُسَلْسَلِ الْفِيكْسِزِ",
    "segs": null,
    "full_uz": "aynan mana shu tur «Fiksiylar» seriali yaratilishida qo'llaniladi.",
    "note": null
  },
  {
    "num": 62,
    "time": "00:04:33,339 --> 00:04:40,679",
    "arabic": "تُومْ مَا الَّذِي تَفْعَلُهُ؟",
    "segs": null,
    "full_uz": "Tom, nima qilyapsan?",
    "note": null
  },
  {
    "num": 63,
    "time": "00:04:40,679 --> 00:04:42,259",
    "arabic": "أَتَرْسُمُ رُسُومًا جَدِيدًا؟",
    "segs": null,
    "full_uz": "Yangi rasm chizyapsanmi?",
    "note": null
  },
  {
    "num": 64,
    "time": "00:04:42,259 --> 00:04:44,479",
    "arabic": "لَا أَنَا أُصْلِحُ الرَّسْمَةَ الْقَدِيمَةَ",
    "segs": null,
    "full_uz": "Yo'q, eski rasmni tuzatyapman,",
    "note": null
  },
  {
    "num": 65,
    "time": "00:04:44,479 --> 00:04:46,659",
    "arabic": "حَتَّى أُهَدِّئَ مِنْ رَوْعِي نُولِيكْ",
    "segs": null,
    "full_uz": "Nolikning ko'nglini tinchlantirish uchun.",
    "note": null
  },
  {
    "num": 66,
    "time": "00:04:46,659 --> 00:04:47,919",
    "arabic": "جَيِّدٌ تَابِعْ",
    "segs": null,
    "full_uz": "Yaxshi, davom et.",
    "note": null
  },
  {
    "num": 67,
    "time": "00:04:47,919 --> 00:04:49,539",
    "arabic": "سَأَذْهَبُ لِأُحْضِرَهُ",
    "segs": null,
    "full_uz": "Men uni olib kelaman.",
    "note": null
  },
  {
    "num": 68,
    "time": "00:04:49,539 --> 00:04:51,359",
    "arabic": "نُولِيكْ",
    "segs": null,
    "full_uz": "Nolik!",
    "note": null
  },
  {
    "num": 69,
    "time": "00:04:51,359 --> 00:04:53,299",
    "arabic": "أَنَا لَسْتُ هُنَا",
    "segs": null,
    "full_uz": "Men bu yerda yo'qman.",
    "note": null
  },
  {
    "num": 70,
    "time": "00:04:53,299 --> 00:04:55,599",
    "arabic": "نُولِيكْ سَامِحْنِي",
    "segs": null,
    "full_uz": "Nolik, meni kechir.",
    "note": null
  },
  {
    "num": 71,
    "time": "00:04:55,599 --> 00:04:57,959",
    "arabic": "أَرْجُوكَ لَا تَغْضَبْ",
    "segs": null,
    "full_uz": "Iltimos, achchiqlanma.",
    "note": null
  },
  {
    "num": 72,
    "time": "00:04:57,959 --> 00:04:59,699",
    "arabic": "هُنَاكَ رُسُومٌ جَدِيدَةٌ",
    "segs": null,
    "full_uz": "Yangi rasm bor.",
    "note": null
  },
  {
    "num": 73,
    "time": "00:04:59,699 --> 00:05:02,079",
    "arabic": "لَقَدْ رَأَيْتُ رُسُومَكَ الْمُتَحَرِّكَةَ",
    "segs": null,
    "full_uz": "Multfilmingni ko'rdim-ku.",
    "note": null
  },
  {
    "num": 74,
    "time": "00:05:02,079 --> 00:05:05,039",
    "arabic": "وَمَا الَّذِي أَضَفْتُمَاهُ الْآنَ؟ كَدْمَةً كَبِيرَةً؟",
    "segs": [
      { "ar": "وَمَا الَّذِي أَضَفْتُمَاهُ الْآنَ", "uz": "endi nima qo'shdinglar" },
      { "ar": "كَدْمَةً كَبِيرَةً", "uz": "katta ko'k dog'nimi" }
    ],
    "full_uz": "Endi nima qo'shdinglar? Katta ko'k dog'nimi?",
    "note": null
  },
  {
    "num": 75,
    "time": "00:05:05,039 --> 00:05:09,159",
    "arabic": "أَبَدًا لَقَدْ أَعَدْتُ رَسْمَهَا مِنْ جَدِيدٍ أَظُنُّكَ سَتُحِبُّهَا",
    "segs": [
      { "ar": "أَبَدًا لَقَدْ أَعَدْتُ رَسْمَهَا مِنْ جَدِيدٍ", "uz": "yo'q, uni yangidan qayta chizdim" },
      { "ar": "أَظُنُّكَ سَتُحِبُّهَا", "uz": "menimcha, senga yoqadi" }
    ],
    "full_uz": "Yo'q, uni yangidan qayta chizdim, menimcha, senga yoqadi.",
    "note": null
  },
  {
    "num": 76,
    "time": "00:05:09,159 --> 00:05:10,339",
    "arabic": "وَاثِقٌ؟",
    "segs": null,
    "full_uz": "Ishonchingiz komilmi?",
    "note": null
  },
  {
    "num": 77,
    "time": "00:05:10,339 --> 00:05:14,819",
    "arabic": "حَسَنًا هَيَّا أَرِنِي مَا رَسَمْتَ",
    "segs": null,
    "full_uz": "Xo'p, qani, chizganingni ko'rsat.",
    "note": null
  },
  {
    "num": 78,
    "time": "00:05:14,819 --> 00:05:17,019",
    "arabic": "اسْتِعْدَادٌ؟ هَيَّا",
    "segs": null,
    "full_uz": "Tayyormisan? Qani.",
    "note": null
  },
  {
    "num": 79,
    "time": "00:05:17,019 --> 00:05:27,759",
    "arabic": "أَحْسَنْتَ صُنْعًا هَذِهِ الرُّسُومُ الْمُتَحَرِّكَةُ الَّتِي أُحِبُّهَا",
    "segs": [
      { "ar": "أَحْسَنْتَ صُنْعًا", "uz": "yaxshi bajarding" },
      { "ar": "هَذِهِ الرُّسُومُ الْمُتَحَرِّكَةُ الَّتِي أُحِبُّهَا", "uz": "mana men yoqtiradigan multfilm" }
    ],
    "full_uz": "Yaxshi bajarding, mana men yoqtiradigan multfilm.",
    "note": null
  },
  {
    "num": 80,
    "time": "00:05:27,759 --> 00:05:30,319",
    "arabic": "لِأَنَّ الْأَوْرَاقَ نَفِدَتْ مِنِّي",
    "segs": null,
    "full_uz": "Chunki qog'ozlarim tugab qoldi.",
    "note": null
  },
  {
    "num": 81,
    "time": "00:05:30,319 --> 00:05:32,599",
    "arabic": "أَظُنُّ أَنَّ الْأَوَّلَ كَانَ مُضْحِكًا أَكْثَرَ",
    "segs": null,
    "full_uz": "Menimcha, birinchisi ko'proq kulgili edi,",
    "note": null
  },
  {
    "num": 82,
    "time": "00:05:32,599 --> 00:05:36,939",
    "arabic": "لَكِنَّ هَذَا أَفْضَلُ بِكَثِيرٍ بِلَا شَكٍّ",
    "segs": null,
    "full_uz": "lekin bu shubhasiz ancha yaxshiroq.",
    "note": null
  },
  {
    "num": 83,
    "time": "00:05:36,939 --> 00:05:37,420",
    "arabic": "أَجَلْ",
    "segs": null,
    "full_uz": "Ha.",
    "note": null
  }
];
if (typeof module !== "undefined" && module.exports) {
  module.exports = lessons;
}
