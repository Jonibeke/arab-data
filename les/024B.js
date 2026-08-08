const lessons = [
  {
    "num": 1,
    "time": "00:00:30,000 --> 00:00:34,539",
    "arabic": "لَوْحَةُ الْمَفَاتِيحِ",
    "segs": null,
    "full_uz": "Klaviatura.",
    "note": null
  },
  {
    "num": 2,
    "time": "00:00:34,539 --> 00:00:36,679",
    "arabic": "أَرْبَعَةٌ، ثَلَاثَةٌ، اثْنَانِ، وَاحِدٌ",
    "segs": null,
    "full_uz": "To'rt, uch, ikki, bir.",
    "note": null
  },
  {
    "num": 3,
    "time": "00:00:36,679 --> 00:00:38,880",
    "arabic": "مُسْتَعِدُّونَ، قَادِمُونَ!",
    "segs": null,
    "full_uz": "Tayyormisiz, kelyapman!",
    "note": null
  },
  {
    "num": 4,
    "time": "00:00:40,060 --> 00:00:49,280",
    "arabic": "أَيْنَ اخْتَبَأَ هَذِهِ الْمَرَّةَ؟",
    "segs": null,
    "full_uz": "Bu safar qayerga yashiringan ekan?",
    "note": null
  },
  {
    "num": 5,
    "time": "00:00:46,740 --> 00:00:48,539",
    "arabic": "تُومْ، أَيْنَ أَنْتَ؟",
    "segs": null,
    "full_uz": "Tom, qayerdasan?",
    "note": null
  },
  {
    "num": 6,
    "time": "00:00:49,179 --> 00:00:54,659",
    "arabic": "تُومْ، لَمْ تَنْسَ يَوْمَ وِلَادَةِ جَدَّتِكَ، أَلَيْسَ كَذَلِكَ؟",
    "segs": [
      { "ar": "تُومْ، لَمْ تَنْسَ يَوْمَ وِلَادَةِ جَدَّتِكَ", "uz": "Tom, buvingning tug'ilgan kunini unutmadingmi" },
      { "ar": "أَلَيْسَ كَذَلِكَ", "uz": "shundaymi" }
    ],
    "full_uz": "Tom, buvingning tug'ilgan kunini unutmadingmi, shundaymi?",
    "note": null
  },
  {
    "num": 7,
    "time": "00:00:54,659 --> 00:00:57,179",
    "arabic": "لَا، آهْ، لَقَدْ نَسِيتُ",
    "segs": [
      { "ar": "لَا", "uz": "yo'q" },
      { "ar": "آهْ، لَقَدْ نَسِيتُ", "uz": "voy, unutibman" }
    ],
    "full_uz": "Yo'q, voy, unutibman.",
    "note": null
  },
  {
    "num": 8,
    "time": "00:00:57,179 --> 00:00:59,960",
    "arabic": "لَقَدْ وَجَدْنَاكَ",
    "segs": null,
    "full_uz": "Seni topdik.",
    "note": null
  },
  {
    "num": 9,
    "time": "00:00:59,960 --> 00:01:03,460",
    "arabic": "هَذَا لَيْسَ عَدْلًا أُمِّي وَجَدَتْنِي وَلَيْسَ أَنْتُمَا",
    "segs": [
      { "ar": "هَذَا لَيْسَ عَدْلًا", "uz": "bu adolatsizlik" },
      { "ar": "أُمِّي وَجَدَتْنِي وَلَيْسَ أَنْتُمَا", "uz": "meni oyim topdi, sizlar emas" }
    ],
    "full_uz": "Bu adolatsizlik, meni oyim topdi, sizlar emas.",
    "note": null
  },
  {
    "num": 10,
    "time": "00:01:03,460 --> 00:01:04,780",
    "arabic": "هَيَّا اخْتَبِئْ ثَانِيَةً",
    "segs": null,
    "full_uz": "Qani, yana yashirin.",
    "note": null
  },
  {
    "num": 11,
    "time": "00:01:04,780 --> 00:01:05,939",
    "arabic": "لَيْسَ الْآنَ",
    "segs": null,
    "full_uz": "Hozir emas.",
    "note": null
  },
  {
    "num": 12,
    "time": "00:01:05,939 --> 00:01:09,319",
    "arabic": "سَأَرْسُمُ بِطَاقَةَ يَوْمِ وِلَادَةٍ لِي",
    "segs": null,
    "full_uz": "Men tug'ilgan kun otkritkasini chizaman,",
    "note": null
  },
  {
    "num": 13,
    "time": "00:01:09,319 --> 00:01:12,319",
    "arabic": "لِجَدَّتِي",
    "segs": null,
    "full_uz": "buvimga.",
    "note": null
  },
  {
    "num": 14,
    "time": "00:01:12,319 --> 00:01:18,319",
    "arabic": "حَسَنًا نَحْتَاجُ إِلَى وَرَقَةٍ فَارِغَةٍ",
    "segs": null,
    "full_uz": "Xo'p, bo'sh qog'oz kerak.",
    "note": null
  },
  {
    "num": 15,
    "time": "00:01:18,319 --> 00:01:20,239",
    "arabic": "مَتَى يَوْمُ وِلَادَةِ جَدَّتِكَ؟",
    "segs": null,
    "full_uz": "Buvingning tug'ilgan kuni qachon?",
    "note": null
  },
  {
    "num": 16,
    "time": "00:01:20,239 --> 00:01:20,859",
    "arabic": "غَدًا",
    "segs": null,
    "full_uz": "Ertaga.",
    "note": null
  },
  {
    "num": 17,
    "time": "00:01:20,859 --> 00:01:22,519",
    "arabic": "لَنْ تَصِلَ فِي الْوَقْتِ الْمُنَاسِبِ",
    "segs": null,
    "full_uz": "O'z vaqtida yetib bormaydi.",
    "note": null
  },
  {
    "num": 18,
    "time": "00:01:22,519 --> 00:01:23,819",
    "arabic": "آهْ",
    "segs": null,
    "full_uz": "Voy.",
    "note": null
  },
  {
    "num": 19,
    "time": "00:01:23,819 --> 00:01:25,740",
    "arabic": "مَاذَا سَأَفْعَلُ؟",
    "segs": null,
    "full_uz": "Endi nima qilaman?",
    "note": null
  },
  {
    "num": 20,
    "time": "00:01:25,740 --> 00:01:26,920",
    "arabic": "هَيَّا اسْتَعْمِلْ عَقْلَكَ",
    "segs": null,
    "full_uz": "Qani, aqlingni ishlat.",
    "note": null
  },
  {
    "num": 21,
    "time": "00:01:26,920 --> 00:01:28,840",
    "arabic": "ارْفَعِي الْهَاتِفَ وَاتَّصِلْ بِهَا",
    "segs": null,
    "full_uz": "Telefonni ko'tarib, unga qo'ng'iroq qil.",
    "note": null
  },
  {
    "num": 22,
    "time": "00:01:28,840 --> 00:01:31,540",
    "arabic": "سَتَكُونُ جَدَّتُكَ سَعِيدَةً جِدًّا بِسَمَاعِ صَوْتِكَ",
    "segs": null,
    "full_uz": "Buving ovozingni eshitib juda xursand bo'ladi.",
    "note": null
  },
  {
    "num": 23,
    "time": "00:01:31,540 --> 00:01:33,519",
    "arabic": "لَا لَدَيْنَا تَقْلِيدٌ قَدِيمٌ",
    "segs": [
      { "ar": "لَا", "uz": "yo'q" },
      { "ar": "لَدَيْنَا تَقْلِيدٌ قَدِيمٌ", "uz": "bizda qadimiy an'ana bor" }
    ],
    "full_uz": "Yo'q, bizda qadimiy an'ana bor.",
    "note": null
  },
  {
    "num": 24,
    "time": "00:01:33,519 --> 00:01:36,040",
    "arabic": "يُرْسِلُ بَعْضُنَا بِطَاقَاتٍ إِلَى بَعْضٍ",
    "segs": null,
    "full_uz": "Biz bir-birimizga otkritkalar yuboramiz.",
    "note": null
  },
  {
    "num": 25,
    "time": "00:01:36,040 --> 00:01:37,740",
    "arabic": "لِمَا لَا تَسْتَعْمِلُ الشَّابِكَةَ؟",
    "segs": null,
    "full_uz": "Nega internetdan foydalanmaysan?",
    "note": null
  },
  {
    "num": 26,
    "time": "00:01:37,740 --> 00:01:39,980",
    "arabic": "أَرْسِلْ إِلَيْهَا بِطَاقَةً بِالشَّابِكَةِ",
    "segs": null,
    "full_uz": "Unga internet orqali otkritka yubor.",
    "note": null
  },
  {
    "num": 27,
    "time": "00:01:39,980 --> 00:01:42,159",
    "arabic": "سِيمْكَا أَنْتِ عَبْقَرِيَّةٌ",
    "segs": null,
    "full_uz": "Simka, sen dohiysan.",
    "note": null
  },
  {
    "num": 28,
    "time": "00:01:42,159 --> 00:01:45,840",
    "arabic": "أُوهْ هَذِهِ جَمِيلَةٌ",
    "segs": null,
    "full_uz": "Voy, bu chiroyli ekan.",
    "note": null
  },
  {
    "num": 29,
    "time": "00:01:45,840 --> 00:01:48,680",
    "arabic": "وَالْآنَ ابْدَأْ بِكِتَابَةِ رِسَالَتِكَ",
    "segs": null,
    "full_uz": "Endi xatingni yozishni boshla.",
    "note": null
  },
  {
    "num": 30,
    "time": "00:01:54,820 --> 00:01:56,859",
    "arabic": "الْحَرْفُ ج لَا يَعْمَلُ",
    "segs": null,
    "full_uz": "«J» harfi ishlamayapti.",
    "note": null
  },
  {
    "num": 31,
    "time": "00:01:56,859 --> 00:02:00,200",
    "arabic": "كَيْفَ سَأَكْتُبُ جَدَّتِي الْعَزِيزَةَ هَكَذَا؟",
    "segs": null,
    "full_uz": "Bunday holda «azizim buvijonim»ni qanday yozaman?",
    "note": null
  },
  {
    "num": 32,
    "time": "00:02:00,200 --> 00:02:02,640",
    "arabic": "اكْتُبْ عَزِيزَتِي وَلَا تَكْتُبْ جَدَّتِي يَا تُومْ",
    "segs": [
      { "ar": "اكْتُبْ عَزِيزَتِي", "uz": "«azizim» deb yoz" },
      { "ar": "وَلَا تَكْتُبْ جَدَّتِي يَا تُومْ", "uz": "«buvijonim» deb yozma, Tom" }
    ],
    "full_uz": "«Azizim» deb yoz, «buvijonim» deb yozma, Tom.",
    "note": null
  },
  {
    "num": 33,
    "time": "00:02:02,640 --> 00:02:05,500",
    "arabic": "الْحَرْفُ عَيْنٌ لَا يَعْمَلُ",
    "segs": null,
    "full_uz": "«Ayn» harfi ishlamayapti.",
    "note": null
  },
  {
    "num": 34,
    "time": "00:02:05,500 --> 00:02:08,620",
    "arabic": "رُبَّمَا نَحْتَاجُ إِلَى حَقِيبَةِ الْأَدَوَاتِ",
    "segs": null,
    "full_uz": "Balki bizga asboblar sumkasi kerakdir.",
    "note": null
  },
  {
    "num": 35,
    "time": "00:02:08,620 --> 00:02:10,919",
    "arabic": "إِلَى حَقِيبَةِ الْأَدَوَاتِ؟ لِمَا؟",
    "segs": [
      { "ar": "إِلَى حَقِيبَةِ الْأَدَوَاتِ", "uz": "asboblar sumkasimi" },
      { "ar": "لِمَا", "uz": "nega" }
    ],
    "full_uz": "Asboblar sumkasimi? Nega?",
    "note": null
  },
  {
    "num": 36,
    "time": "00:02:10,919 --> 00:02:13,659",
    "arabic": "لِنُنَظِّفَ نَوَاقِلَ لَوْحَةِ الْمَفَاتِيحِ الْوَسِخَةَ",
    "segs": null,
    "full_uz": "Klaviaturaning iflos kontaktlarini tozalash uchun.",
    "note": "نَاقِلٌ — kontakt, o'tkazgich."
  },
  {
    "num": 37,
    "time": "00:02:13,659 --> 00:02:14,860",
    "arabic": "وَأَيُّ نَوَاقِلَ؟",
    "segs": null,
    "full_uz": "Qanaqa kontaktlar?",
    "note": null
  },
  {
    "num": 38,
    "time": "00:02:16,079 --> 00:02:22,539",
    "arabic": "الزِّرُّ فِي لَوْحَةِ الْمَفَاتِيحِ يَعْمَلُ بِالطَّرِيقَةِ نَفْسِهَا فِي جَرَسِ الْبَيْتِ",
    "segs": [
      { "ar": "الزِّرُّ فِي لَوْحَةِ الْمَفَاتِيحِ", "uz": "klaviaturadagi tugma" },
      { "ar": "يَعْمَلُ بِالطَّرِيقَةِ نَفْسِهَا فِي جَرَسِ الْبَيْتِ", "uz": "uy qo'ng'irog'idagi kabi xuddi shu tarzda ishlaydi" }
    ],
    "full_uz": "Klaviaturadagi tugma uy qo'ng'irog'idagi kabi xuddi shu tarzda ishlaydi.",
    "note": null
  },
  {
    "num": 39,
    "time": "00:02:22,539 --> 00:02:27,039",
    "arabic": "عِنْدَمَا نَضْغَطُ زِرَّ جَرَسِ الْبَابِ تَتَلَامَسُ النَّوَاقِلُ دَاخِلَهُ",
    "segs": [
      { "ar": "عِنْدَمَا نَضْغَطُ زِرَّ جَرَسِ الْبَابِ", "uz": "eshik qo'ng'irog'i tugmasini bosganimizda" },
      { "ar": "تَتَلَامَسُ النَّوَاقِلُ دَاخِلَهُ", "uz": "uning ichidagi kontaktlar bir-biriga tegadi" }
    ],
    "full_uz": "Eshik qo'ng'irog'i tugmasini bosganimizda, uning ichidagi kontaktlar bir-biriga tegadi.",
    "note": null
  },
  {
    "num": 40,
    "time": "00:02:27,039 --> 00:02:30,699",
    "arabic": "وَهَذَا يَسْمَحُ لِلْكَهْرَبَاءِ بِالتَّدَفُّقِ فَيَرِنُّ الْجَرَسُ",
    "segs": [
      { "ar": "وَهَذَا يَسْمَحُ لِلْكَهْرَبَاءِ بِالتَّدَفُّقِ", "uz": "bu esa elektr oqishiga imkon beradi" },
      { "ar": "فَيَرِنُّ الْجَرَسُ", "uz": "shunda qo'ng'iroq jiringlaydi" }
    ],
    "full_uz": "Bu esa elektr oqishiga imkon beradi, shunda qo'ng'iroq jiringlaydi.",
    "note": null
  },
  {
    "num": 41,
    "time": "00:02:30,699 --> 00:02:34,000",
    "arabic": "وَعِنْدَمَا نَضْغَطُ زِرًّا عَلَى لَوْحَةِ الْمَفَاتِيحِ",
    "segs": null,
    "full_uz": "Klaviaturada tugmani bosganimizda,",
    "note": null
  },
  {
    "num": 42,
    "time": "00:02:34,000 --> 00:02:38,060",
    "arabic": "يَمُرُّ تَيَّارٌ كَهْرَبَائِيٌّ مِنْ لَوْحَةِ الْمَفَاتِيحِ إِلَى الْحَاسُوبِ",
    "segs": null,
    "full_uz": "klaviaturadan kompyuterga elektr toki o'tadi,",
    "note": null
  },
  {
    "num": 43,
    "time": "00:02:38,060 --> 00:02:40,699",
    "arabic": "فَيَظْهَرُ ذَلِكَ الْحَرْفُ عَلَى الشَّاشَةِ",
    "segs": null,
    "full_uz": "va o'sha harf ekranda paydo bo'ladi.",
    "note": null
  },
  {
    "num": 44,
    "time": "00:02:40,699 --> 00:02:44,039",
    "arabic": "لَكِنْ إِنْ كَانَتْ هُنَاكَ أَوْسَاخٌ تَمْنَعُ النَّوَاقِلَ مِنَ التَّمَاسِّ",
    "segs": null,
    "full_uz": "Lekin agar ifloslik kontaktlarning bir-biriga tegishiga to'sqinlik qilsa,",
    "note": null
  },
  {
    "num": 45,
    "time": "00:02:52,539 --> 00:03:02,120",
    "arabic": "تُومْ، مَا هَذَا الشَّيْءُ اللَّزِجُ الَّذِي سُكِبَ هُنَا؟",
    "segs": [
      { "ar": "تُومْ", "uz": "Tom" },
      { "ar": "مَا هَذَا الشَّيْءُ اللَّزِجُ الَّذِي سُكِبَ هُنَا", "uz": "bu yerga to'kilgan yopishqoq narsa nima" }
    ],
    "full_uz": "Tom, bu yerga to'kilgan yopishqoq narsa nima?",
    "note": null
  },
  {
    "num": 46,
    "time": "00:03:02,120 --> 00:03:03,479",
    "arabic": "عَلَيَّ؟",
    "segs": null,
    "full_uz": "Menmi?",
    "note": null
  },
  {
    "num": 47,
    "time": "00:03:03,479 --> 00:03:06,299",
    "arabic": "لَعَلَّهُ الْعَصِيرُ الَّذِي كُنْتُ أَشْرَبُهُ",
    "segs": null,
    "full_uz": "Balki ichayotgan sharbatimdir.",
    "note": null
  },
  {
    "num": 48,
    "time": "00:03:06,299 --> 00:03:08,539",
    "arabic": "وَشَارَكَتْ فِيهِ لَوْحَةُ الْمَفَاتِيحِ؟",
    "segs": null,
    "full_uz": "Va klaviatura ham unda hissa qo'shdimi?",
    "note": null
  },
  {
    "num": 49,
    "time": "00:03:11,579 --> 00:03:13,579",
    "arabic": "لِهَذَا السَّبَبِ لَا تَعْمَلُ",
    "segs": null,
    "full_uz": "Shu sababdan ishlamayapti.",
    "note": null
  },
  {
    "num": 50,
    "time": "00:03:13,579 --> 00:03:20,979",
    "arabic": "وَمِنْ أَيْنَ أَتَى فُتَاتُ الطَّعَامِ؟",
    "segs": null,
    "full_uz": "Va ovqat qirindilari qayerdan kelib qoldi?",
    "note": null
  },
  {
    "num": 51,
    "time": "00:03:20,979 --> 00:03:22,539",
    "arabic": "لَقَدْ سَقَطَ مِنْ شَطِيرَتِي",
    "segs": null,
    "full_uz": "Sendvichimdan tushib qolgan.",
    "note": null
  },
  {
    "num": 52,
    "time": "00:03:22,539 --> 00:03:48,219",
    "arabic": "وَمَاذَا يُمْكِنُ أَنْ يَكُونَ هَذَا الشَّيْءُ الْأَحْمَرُ هُنَا؟",
    "segs": null,
    "full_uz": "Va bu yerdagi qizil narsa nima bo'lishi mumkin?",
    "note": null
  },
  {
    "num": 53,
    "time": "00:03:48,219 --> 00:03:50,979",
    "arabic": "لَا شَكَّ أَنَّهَا مِنْ عُصَارَةِ شَطِيرَةِ الْفُطْرِ",
    "segs": null,
    "full_uz": "Shubhasiz, bu qo'ziqorinli sendvichning sharbatidan.",
    "note": null
  },
  {
    "num": 54,
    "time": "00:03:50,979 --> 00:03:56,240",
    "arabic": "نُولِيكْ يَبْدُو أَنَّنَا سَنَقُومُ بِجَوْلَةٍ لِجَمْعِ الْفُطْرِ",
    "segs": [
      { "ar": "نُولِيكْ", "uz": "Nolik" },
      { "ar": "يَبْدُو أَنَّنَا سَنَقُومُ بِجَوْلَةٍ لِجَمْعِ الْفُطْرِ", "uz": "shekilli, qo'ziqorin terish sayohatiga chiqishimiz kerak bo'ladi" }
    ],
    "full_uz": "Nolik, shekilli, qo'ziqorin terish sayohatiga chiqishimiz kerak bo'ladi.",
    "note": null
  },
  {
    "num": 55,
    "time": "00:04:01,560 --> 00:04:05,159",
    "arabic": "لَكِنْ هُنَاكَ بَعْضُ الْأَشْخَاصِ الَّذِينَ لَا نَرْغَبُ فِي مُسَاعَدَتِهِمْ",
    "segs": null,
    "full_uz": "Lekin yordam berishni xohlamaydigan ba'zi odamlar ham bor.",
    "note": null
  },
  {
    "num": 56,
    "time": "00:04:05,159 --> 00:04:08,120",
    "arabic": "أَذْكُرُ عِنْدَمَا كُنْتُ أَعْمَلُ فِكْسِيًّا فِي أَحَدِ الْمَنَازِلِ",
    "segs": null,
    "full_uz": "Bir uyda fiksiy bo'lib ishlagan paytim esimda.",
    "note": null
  },
  {
    "num": 57,
    "time": "00:04:08,120 --> 00:04:12,219",
    "arabic": "فِي أَحَدِ الْأَيَّامِ سَكَبَ الْمَالِكُ قَهْوَتَهُ عَلَى جِهَازِ تَحَكُّمِ التِّلْفَازِ",
    "segs": null,
    "full_uz": "Bir kuni uy egasi qahvasini televizor puldiga to'kib yubordi,",
    "note": null
  },
  {
    "num": 58,
    "time": "00:04:12,219 --> 00:04:16,560",
    "arabic": "وَحِينَمَا أَسْرَعْتُ لِأُنَظِّفَ جِهَازَ التَّحَكُّمِ بَدَأَ بِضَرْبِ التِّلْفَازِ",
    "segs": [
      { "ar": "وَحِينَمَا أَسْرَعْتُ لِأُنَظِّفَ جِهَازَ التَّحَكُّمِ", "uz": "men pultni tozalash uchun shoshilganimda" },
      { "ar": "بَدَأَ بِضَرْبِ التِّلْفَازِ", "uz": "u televizorni urishga boshladi" }
    ],
    "full_uz": "men pultni tozalash uchun shoshilganimda, u televizorni urishga boshladi,",
    "note": null
  },
  {
    "num": 59,
    "time": "00:04:16,560 --> 00:04:18,459",
    "arabic": "لِأَنَّ الْمَحَطَّةَ لَمْ تَتَغَيَّرْ",
    "segs": null,
    "full_uz": "chunki kanal o'zgarmagan edi.",
    "note": null
  },
  {
    "num": 60,
    "time": "00:04:18,459 --> 00:04:21,139",
    "arabic": "فَأَصْبَحَ التِّلْفَازُ مُعَطَّلًا أَيْضًا",
    "segs": null,
    "full_uz": "Shu sabab televizor ham buzilib qoldi.",
    "note": null
  },
  {
    "num": 61,
    "time": "00:04:21,139 --> 00:04:24,819",
    "arabic": "عِنْدَئِذٍ قَرَّرَ أَنْ يَسْتَمِعَ إِلَى بَعْضِ الْمُوسِيقَى",
    "segs": null,
    "full_uz": "Shunda u biroz musiqa tinglashga qaror qildi,",
    "note": null
  },
  {
    "num": 62,
    "time": "00:04:24,819 --> 00:04:27,639",
    "arabic": "فَأَوْقَعَ بِتَهَوُّرِهِ مَجْمُوعَةَ الصَّوْتِ عَلَى الْأَرْضِ",
    "segs": null,
    "full_uz": "va o'ylamasdan tovush tizimini yerga ag'darib yubordi,",
    "note": null
  },
  {
    "num": 63,
    "time": "00:04:27,639 --> 00:04:29,680",
    "arabic": "وَحَاوَلَ إِصْلَاحَهَا بِنَفْسِهِ",
    "segs": null,
    "full_uz": "va uni o'zi tuzatishga urindi,",
    "note": null
  },
  {
    "num": 64,
    "time": "00:04:29,680 --> 00:04:31,660",
    "arabic": "لَكِنَّهُ دَمَّرَهَا جَمِيعًا",
    "segs": null,
    "full_uz": "lekin uni butunlay ishdan chiqardi.",
    "note": null
  },
  {
    "num": 65,
    "time": "00:04:31,660 --> 00:04:35,060",
    "arabic": "ثُمَّ جَلَسَ عَلَى هَاتِفِهِ وَحَطَّمَهُ إِلَى قِطَعٍ صَغِيرَةٍ",
    "segs": [
      { "ar": "ثُمَّ جَلَسَ عَلَى هَاتِفِهِ", "uz": "keyin telefonining ustiga o'tirib qoldi" },
      { "ar": "وَحَطَّمَهُ إِلَى قِطَعٍ صَغِيرَةٍ", "uz": "va uni mayda bo'laklarga sindirib tashladi" }
    ],
    "full_uz": "Keyin telefonining ustiga o'tirib qoldi va uni mayda bo'laklarga sindirib tashladi.",
    "note": null
  },
  {
    "num": 66,
    "time": "00:04:35,060 --> 00:04:38,560",
    "arabic": "فِي هَذِهِ الْأَثْنَاءِ كُنْتُ أَمْسَحُ الْقَهْوَةَ عَنْ جِهَازِ التَّحَكُّمِ",
    "segs": null,
    "full_uz": "Shu payt men pultdagi qahvani artib turgan edim.",
    "note": null
  },
  {
    "num": 67,
    "time": "00:04:38,560 --> 00:04:41,459",
    "arabic": "لَمْ أَحْظَ بِلَحْظَةِ رَاحَةٍ مَعَ ذَلِكَ الرَّجُلِ",
    "segs": null,
    "full_uz": "O'sha odam bilan bir zum ham dam ololmadim.",
    "note": null
  },
  {
    "num": 68,
    "time": "00:04:41,459 --> 00:04:43,540",
    "arabic": "فِي نِهَايَةٍ لَمْ أَعُدْ أَسْتَطِيعُ الِاحْتِمَالَ",
    "segs": null,
    "full_uz": "Oxir-oqibat chidab bo'lmay qoldim,",
    "note": null
  },
  {
    "num": 69,
    "time": "00:04:43,540 --> 00:04:44,579",
    "arabic": "فَغَادَرْتُ الْمَكَانَ",
    "segs": null,
    "full_uz": "va u yerdan ketdim.",
    "note": null
  },
  {
    "num": 70,
    "time": "00:04:47,060 --> 00:04:54,879",
    "arabic": "لِمَا يَا تُومْ؟ تَتَنَاوَلُ الطَّعَامَ أَمَامَ حَاسُوبِكَ؟",
    "segs": [
      { "ar": "لِمَا يَا تُومْ", "uz": "nega, Tom" },
      { "ar": "تَتَنَاوَلُ الطَّعَامَ أَمَامَ حَاسُوبِكَ", "uz": "kompyutering oldida ovqatlanyapsanmi" }
    ],
    "full_uz": "Nega, Tom, kompyutering oldida ovqatlanyapsanmi?",
    "note": null
  },
  {
    "num": 71,
    "time": "00:04:54,879 --> 00:04:57,579",
    "arabic": "صَحِيحٌ، أَلَا يُطْعِمُكَ أَهْلُكَ فِي الْمَطْبَخِ؟",
    "segs": [
      { "ar": "صَحِيحٌ", "uz": "to'g'ri" },
      { "ar": "أَلَا يُطْعِمُكَ أَهْلُكَ فِي الْمَطْبَخِ", "uz": "oila a'zolaring seni oshxonada ovqatlantirmaydimi" }
    ],
    "full_uz": "To'g'ri, oila a'zolaring seni oshxonada ovqatlantirmaydimi?",
    "note": null
  },
  {
    "num": 72,
    "time": "00:04:59,180 --> 00:05:02,799",
    "arabic": "الْآنَ عَرَفْتُ، لَقَدْ أَخْطَأْتُ",
    "segs": [
      { "ar": "الْآنَ عَرَفْتُ", "uz": "endi tushundim" },
      { "ar": "لَقَدْ أَخْطَأْتُ", "uz": "xato qilibman" }
    ],
    "full_uz": "Endi tushundim, xato qilibman.",
    "note": null
  },
  {
    "num": 73,
    "time": "00:05:02,799 --> 00:05:05,899",
    "arabic": "هَذَا صَحِيحٌ، وَالْآنَ اكْتُبْ رِسَالَتَكَ",
    "segs": [
      { "ar": "هَذَا صَحِيحٌ", "uz": "to'g'ri" },
      { "ar": "وَالْآنَ اكْتُبْ رِسَالَتَكَ", "uz": "endi xatingni yoz" }
    ],
    "full_uz": "To'g'ri, endi xatingni yoz.",
    "note": null
  },
  {
    "num": 74,
    "time": "00:05:05,899 --> 00:05:07,899",
    "arabic": "وَاكْتُبِ الْعُنْوَانَ عَلَيْهَا أَيْضًا",
    "segs": null,
    "full_uz": "Va manzilini ham yozib qo'y.",
    "note": null
  },
  {
    "num": 75,
    "time": "00:05:07,899 --> 00:05:08,500",
    "arabic": "مُؤَكَّدٌ",
    "segs": null,
    "full_uz": "Albatta.",
    "note": null
  },
  {
    "num": 76,
    "time": "00:05:08,500 --> 00:05:13,000",
    "arabic": "أُمِّي، هَلْ تَعْرِفِينَ بَرِيدَ جَدَّتِي الْإِلِكْتِرُونِيَّ؟",
    "segs": null,
    "full_uz": "Oyi, buvimning elektron pochtasini bilasanmi?",
    "note": null
  },
  {
    "num": 77,
    "time": "00:05:15,819 --> 00:05:21,339",
    "arabic": "لَيْسَ لَدَى جَدَّتِكَ بَرِيدٌ إِلِكْتِرُونِيٌّ، مَاذَا إِذَنْ؟ أَصْلَحْنَا لَوْحَةَ الْمَفَاتِيحِ بِلَا فَائِدَةٍ؟",
    "segs": [
      { "ar": "لَيْسَ لَدَى جَدَّتِكَ بَرِيدٌ إِلِكْتِرُونِيٌّ", "uz": "buvingda elektron pochta yo'q" },
      { "ar": "مَاذَا إِذَنْ؟ أَصْلَحْنَا لَوْحَةَ الْمَفَاتِيحِ بِلَا فَائِدَةٍ", "uz": "unda-chi? klaviaturani bekorga tuzatdikmi" }
    ],
    "full_uz": "Buvingda elektron pochta yo'q. Unda-chi? Klaviaturani bekorga tuzatdikmi?",
    "note": null
  },
  {
    "num": 78,
    "time": "00:05:21,339 --> 00:05:23,060",
    "arabic": "لَا أَزَالُ أَحْتَاجُ إِلَيْهِ",
    "segs": null,
    "full_uz": "Menga u hali ham kerak.",
    "note": null
  },
  {
    "num": 79,
    "time": "00:05:23,060 --> 00:05:26,740",
    "arabic": "أَمَّا جَدَّتِي فَسَأَتَّصِلُ بِهَا هَاتِفِيًّا",
    "segs": null,
    "full_uz": "Buvimga esa telefon orqali qo'ng'iroq qilaman.",
    "note": null
  },
  {
    "num": 80,
    "time": "00:05:26,740 --> 00:05:30,360",
    "arabic": "وَلَكِنَّكَ قُلْتَ إِنَّ لَدَيْكُمْ تَقْلِيدًا هُوَ إِرْسَالُ الْبِطَاقَاتِ",
    "segs": null,
    "full_uz": "Lekin sen sizlarda otkritka yuborish an'anasi bor deding-ku.",
    "note": null
  },
  {
    "num": 81,
    "time": "00:05:30,360 --> 00:05:35,439",
    "arabic": "مَعَ ذَلِكَ سَتَسْعَدُ جَدَّتِي بِسَمَاعِ صَوْتِي وَدَاعًا",
    "segs": [
      { "ar": "مَعَ ذَلِكَ سَتَسْعَدُ جَدَّتِي بِسَمَاعِ صَوْتِي", "uz": "shunga qaramay, buvim ovozimni eshitib xursand bo'ladi" },
      { "ar": "وَدَاعًا", "uz": "xayr" }
    ],
    "full_uz": "Shunga qaramay, buvim ovozimni eshitib xursand bo'ladi. Xayr!",
    "note": null
  },
  {
    "num": 82,
    "time": "00:05:35,439 --> 00:05:38,540",
    "arabic": "يَا لَهَا مِنْ فِكْرَةٍ مُبْتَكَرَةٍ أَلَيْسَ كَذَلِكَ نُولِيكْ؟",
    "segs": null,
    "full_uz": "Naqadar ijodiy fikr-a, Nolik?",
    "note": null
  }
];
if (typeof module !== "undefined" && module.exports) {
  module.exports = lessons;
}
