const lessons = [
  {
    "num": 1,
    "time": "00:00:30,000 --> 00:00:34,960",
    "arabic": "الْكَلْبَةُ",
    "segs": null,
    "full_uz": "Kuchuk.",
    "note": null
  },
  {
    "num": 2,
    "time": "00:00:34,960 --> 00:00:37,799",
    "arabic": "إِنَّهُ عَنِّي",
    "segs": null,
    "full_uz": "Bu men haqimda.",
    "note": "Ushbu jumlaning konteksti aniq emas, srt matnida shunday yozilgan."
  },
  {
    "num": 3,
    "time": "00:00:37,799 --> 00:00:41,960",
    "arabic": "فِكْسِيزْ",
    "segs": null,
    "full_uz": "Fiksilar.",
    "note": null
  },
  {
    "num": 4,
    "time": "00:00:41,960 --> 00:00:43,899",
    "arabic": "إِنَّهَا تْشُوسَاكَا",
    "segs": null,
    "full_uz": "Bu Chosaka.",
    "note": null
  },
  {
    "num": 5,
    "time": "00:00:43,899 --> 00:00:45,799",
    "arabic": "تَبْدُو غَاضِبَةً عَلَيْنَا",
    "segs": null,
    "full_uz": "Bizdan g'azablangandek ko'rinadi.",
    "note": null
  },
  {
    "num": 6,
    "time": "00:00:45,799 --> 00:00:48,439",
    "arabic": "أَتَمَنَّى لَوْ أَعْلَمُ فِيمَا تُفَكِّرُ هَذِهِ الْكَلْبَةُ",
    "segs": [
      { "ar": "أَتَمَنَّى لَوْ أَعْلَمُ", "uz": "bilsam edim deb orzu qilaman" },
      { "ar": "فِيمَا تُفَكِّرُ هَذِهِ الْكَلْبَةُ", "uz": "bu it nima haqida o'ylayotganini" }
    ],
    "full_uz": "Bu it nima haqida o'ylayotganini bilsam edim deb orzu qilaman.",
    "note": null
  },
  {
    "num": 7,
    "time": "00:00:48,439 --> 00:00:50,320",
    "arabic": "أَنَا أُفَكِّرُ فِيكُمَا",
    "segs": null,
    "full_uz": "Men sizlar haqingizda o'ylayapman.",
    "note": null
  },
  {
    "num": 8,
    "time": "00:00:50,320 --> 00:00:52,260",
    "arabic": "مِنَ الْأَفْضَلِ أَنْ تَخْتَبِئَا",
    "segs": null,
    "full_uz": "Yashiringan ma'qul.",
    "note": null
  },
  {
    "num": 9,
    "time": "00:00:52,260 --> 00:00:53,519",
    "arabic": "سَيَرَاكُمُ الْبَشَرُ",
    "segs": null,
    "full_uz": "Odamlar sizni ko'rib qoladi.",
    "note": null
  },
  {
    "num": 10,
    "time": "00:00:53,519 --> 00:00:57,760",
    "arabic": "سَأُغَادِرُ، أَرَاكُمْ لَاحِقًا",
    "segs": [
      { "ar": "سَأُغَادِرُ", "uz": "men ketyapman" },
      { "ar": "أَرَاكُمْ لَاحِقًا", "uz": "keyinroq ko'rishguncha" }
    ],
    "full_uz": "Men ketyapman, keyinroq ko'rishguncha.",
    "note": null
  },
  {
    "num": 11,
    "time": "00:00:57,759 --> 00:01:02,259",
    "arabic": "سَتُمْطِرُ الْيَوْمَ",
    "segs": null,
    "full_uz": "Bugun yomg'ir yog'adi.",
    "note": null
  },
  {
    "num": 12,
    "time": "00:01:02,259 --> 00:01:06,280",
    "arabic": "تْشُوسَاكَا، لَا وَقْتَ لَدَيَّ لِلَّعِبِ",
    "segs": [
      { "ar": "تْشُوسَاكَا", "uz": "Chosaka" },
      { "ar": "لَا وَقْتَ لَدَيَّ لِلَّعِبِ", "uz": "o'ynashga vaqtim yo'q" }
    ],
    "full_uz": "Chosaka, o'ynashga vaqtim yo'q.",
    "note": null
  },
  {
    "num": 13,
    "time": "00:01:06,280 --> 00:01:08,179",
    "arabic": "أَنَا لَا أَلْعَبُ",
    "segs": null,
    "full_uz": "Men o'ynayotganim yo'q.",
    "note": null
  },
  {
    "num": 14,
    "time": "00:01:08,179 --> 00:01:09,780",
    "arabic": "سَتَبْتَلُّ قَدَمَاهُ",
    "segs": null,
    "full_uz": "Uning oyoqlari ho'l bo'lib qoladi.",
    "note": null
  },
  {
    "num": 15,
    "time": "00:01:09,780 --> 00:01:14,000",
    "arabic": "تُومْ، سَأُغَادِرُ، لَا تَتَأَخَّرْ",
    "segs": [
      { "ar": "تُومْ، سَأُغَادِرُ", "uz": "Tom, men ketyapman" },
      { "ar": "لَا تَتَأَخَّرْ", "uz": "kechikma" }
    ],
    "full_uz": "Tom, men ketyapman, kechikma.",
    "note": null
  },
  {
    "num": 16,
    "time": "00:01:14,000 --> 00:01:18,879",
    "arabic": "تْشُوسَاكَا، يَكْفِي",
    "segs": null,
    "full_uz": "Chosaka, yetar.",
    "note": null
  },
  {
    "num": 17,
    "time": "00:01:18,879 --> 00:01:22,039",
    "arabic": "كَلَّا، سَأَتَأَخَّرُ عَنِ الْمَدْرَسَةِ",
    "segs": [
      { "ar": "كَلَّا", "uz": "yo'q" },
      { "ar": "سَأَتَأَخَّرُ عَنِ الْمَدْرَسَةِ", "uz": "maktabga kechikaman" }
    ],
    "full_uz": "Yo'q, maktabga kechikaman.",
    "note": null
  },
  {
    "num": 18,
    "time": "00:01:22,039 --> 00:01:25,140",
    "arabic": "عِنْدَهُ حِصَّةُ رِيَاضِيَّاتٍ الْيَوْمَ وَنَسِيَ الْكِتَابَ",
    "segs": [
      { "ar": "عِنْدَهُ حِصَّةُ رِيَاضِيَّاتٍ الْيَوْمَ", "uz": "uning bugun matematika darsi bor" },
      { "ar": "وَنَسِيَ الْكِتَابَ", "uz": "va kitobini unutib qoldirgan" }
    ],
    "full_uz": "Uning bugun matematika darsi bor, va kitobini unutib qoldirgan.",
    "note": null
  },
  {
    "num": 19,
    "time": "00:01:25,140 --> 00:01:27,620",
    "arabic": "أُحَاوِلُ مُسَاعَدَتَهُمْ",
    "segs": null,
    "full_uz": "Men ularga yordam berishga harakat qilyapman.",
    "note": null
  },
  {
    "num": 20,
    "time": "00:01:27,620 --> 00:01:30,680",
    "arabic": "كَكَلْبَةٍ مُطِيعَةٍ وَلَكِنْ لَا يَفْهَمُونَ قَصْدِي",
    "segs": [
      { "ar": "كَكَلْبَةٍ مُطِيعَةٍ", "uz": "itoatkor it sifatida" },
      { "ar": "وَلَكِنْ لَا يَفْهَمُونَ قَصْدِي", "uz": "lekin maqsadimni tushunishmaydi" }
    ],
    "full_uz": "Itoatkor it sifatida, lekin maqsadimni tushunishmaydi.",
    "note": null
  },
  {
    "num": 21,
    "time": "00:01:30,680 --> 00:01:36,359",
    "arabic": "الْكِلَابُ تَخْدُمُ النَّاسَ مُنْذُ الْعُصُورِ الْقَدِيمَةِ",
    "segs": null,
    "full_uz": "Itlar qadim zamonlardan beri odamlarga xizmat qilib kelmoqda.",
    "note": null
  },
  {
    "num": 22,
    "time": "00:01:36,359 --> 00:01:40,460",
    "arabic": "إِلَى جَانِبِ الْبَقَرِ وَالْأَحْصِنَةِ وَغَيْرِهَا مِنَ الْحَيَوَانَاتِ الْأَلِيفَةِ",
    "segs": null,
    "full_uz": "Sigirlar, otlar va boshqa uy hayvonlari qatorida.",
    "note": null
  },
  {
    "num": 23,
    "time": "00:01:40,460 --> 00:01:44,560",
    "arabic": "وَلَكِنْ مِنْ بَيْنِهَا حَازَ الْكَلْبُ عَلَى الْمَرْتَبَةِ الْأُولَى",
    "segs": null,
    "full_uz": "Lekin ular orasida it birinchi o'rinni egallagan.",
    "note": null
  },
  {
    "num": 24,
    "time": "00:01:44,560 --> 00:01:47,480",
    "arabic": "فَفِي الْبِدَايَةِ كَانَتِ الْكِلَابُ مِثْلَ الذِّئَابِ",
    "segs": null,
    "full_uz": "Boshida itlar bo'rilarga o'xshagan.",
    "note": null
  },
  {
    "num": 25,
    "time": "00:01:47,480 --> 00:01:49,840",
    "arabic": "وَبَدَأَتْ بِالتَّغَيُّرِ خِلَالَ الزَّمَنِ",
    "segs": null,
    "full_uz": "Va vaqt o'tishi bilan o'zgara boshladilar.",
    "note": null
  },
  {
    "num": 26,
    "time": "00:01:49,840 --> 00:01:52,860",
    "arabic": "وَصَارَتْ لَدَيْنَا كِلَابٌ مِنْ أَنْسَالٍ عَدِيدَةٍ",
    "segs": null,
    "full_uz": "Va bizda ko'plab zotlardagi itlar paydo bo'ldi.",
    "note": null
  },
  {
    "num": 27,
    "time": "00:01:52,860 --> 00:01:56,060",
    "arabic": "مِنْ كِلَابِ الرَّاعِي الْكَبِيرَةِ إِلَى الشِّيوَاوَا الصَّغِيرَةِ",
    "segs": null,
    "full_uz": "Katta cho'pon itidan tortib kichkina chihuahuagacha.",
    "note": null
  },
  {
    "num": 28,
    "time": "00:01:56,060 --> 00:01:59,560",
    "arabic": "الْكَلْبُ لَيْسَ صَدِيقَ الْإِنْسَانِ الْمُفَضَّلَ وَحَسْبُ",
    "segs": null,
    "full_uz": "It insonning nafaqat sevimli do'sti.",
    "note": null
  },
  {
    "num": 29,
    "time": "00:01:59,560 --> 00:02:01,560",
    "arabic": "بَلْ صَدِيقُهُ الْأَوَّلُ أَيْضًا",
    "segs": null,
    "full_uz": "Balki uning birinchi do'sti hamdir.",
    "note": null
  },
  {
    "num": 30,
    "time": "00:02:03,260 --> 00:02:07,560",
    "arabic": "مَا تِلْكَ الرَّائِحَةُ؟",
    "segs": null,
    "full_uz": "Bu qanday hid?",
    "note": null
  },
  {
    "num": 31,
    "time": "00:02:10,819 --> 00:02:16,379",
    "arabic": "سِيمْكَا، هَيَّا، يُمْكِنُنِي أَنْ أَرَاكِ",
    "segs": [
      { "ar": "سِيمْكَا، هَيَّا", "uz": "Simka, chiq" },
      { "ar": "يُمْكِنُنِي أَنْ أَرَاكِ", "uz": "seni ko'ryapman" }
    ],
    "full_uz": "Simka, chiq, seni ko'ryapman.",
    "note": null
  },
  {
    "num": 32,
    "time": "00:02:16,379 --> 00:02:21,420",
    "arabic": "نُولِيكْ، اقْفِزْ",
    "segs": null,
    "full_uz": "Nolik, sakra.",
    "note": null
  },
  {
    "num": 33,
    "time": "00:02:26,060 --> 00:02:28,060",
    "arabic": "آهْ لَا، نَحْنُ مُحْتَجَزَانِ هُنَا",
    "segs": [
      { "ar": "آهْ لَا", "uz": "voy yo'q" },
      { "ar": "نَحْنُ مُحْتَجَزَانِ هُنَا", "uz": "biz shu yerda qamalib qoldik" }
    ],
    "full_uz": "Voy yo'q, biz shu yerda qamalib qoldik.",
    "note": null
  },
  {
    "num": 34,
    "time": "00:02:28,060 --> 00:02:30,520",
    "arabic": "انْظُرْ، شَيْءٌ مَا يَحْتَرِقُ",
    "segs": [
      { "ar": "انْظُرْ", "uz": "qara" },
      { "ar": "شَيْءٌ مَا يَحْتَرِقُ", "uz": "nimadir yonyapti" }
    ],
    "full_uz": "Qara, nimadir yonyapti.",
    "note": null
  },
  {
    "num": 35,
    "time": "00:02:30,520 --> 00:02:32,599",
    "arabic": "لِمَاذَا لَا تَسْتَمِعُونَ؟",
    "segs": null,
    "full_uz": "Nega quloq solmayapsizlar?",
    "note": null
  },
  {
    "num": 36,
    "time": "00:02:32,599 --> 00:02:34,159",
    "arabic": "أَظُنُّ أَنَّهَا سَتَأْكُلُنَا",
    "segs": null,
    "full_uz": "Menimcha, u bizni yeydi.",
    "note": null
  },
  {
    "num": 37,
    "time": "00:02:34,159 --> 00:02:35,960",
    "arabic": "سَتَأْكُلُنَا مَعَ الصُّنْدُوقِ",
    "segs": null,
    "full_uz": "Bizni quti bilan birga yeydi.",
    "note": null
  },
  {
    "num": 38,
    "time": "00:02:35,960 --> 00:02:41,060",
    "arabic": "انْظُرْ",
    "segs": null,
    "full_uz": "Qara.",
    "note": null
  },
  {
    "num": 39,
    "time": "00:02:41,060 --> 00:02:44,000",
    "arabic": "لَقَدْ قُضِيَ عَلَيْنَا",
    "segs": null,
    "full_uz": "Bizning ishimiz tamom.",
    "note": "«قُضِيَ عَلَى...» — «...ning ishi tugadi, halok bo'ldi» ma'nosidagi majhul fe'l qurilishi."
  },
  {
    "num": 40,
    "time": "00:02:44,000 --> 00:02:45,960",
    "arabic": "انْظُرْ",
    "segs": null,
    "full_uz": "Qara.",
    "note": null
  },
  {
    "num": 41,
    "time": "00:02:45,960 --> 00:02:48,599",
    "arabic": "الْمَأْخَذُ يُطْلِقُ شَرَارًا",
    "segs": null,
    "full_uz": "Rozetkadan uchqun chiqyapti.",
    "note": null
  },
  {
    "num": 42,
    "time": "00:02:48,599 --> 00:02:49,259",
    "arabic": "آهْ، كَلَّا",
    "segs": null,
    "full_uz": "Voy, yo'q.",
    "note": null
  },
  {
    "num": 43,
    "time": "00:02:49,259 --> 00:02:51,340",
    "arabic": "لَا شَكَّ أَنَّهُ تَعَطَّلَ",
    "segs": null,
    "full_uz": "Shubhasiz, u ishdan chiqqan.",
    "note": null
  },
  {
    "num": 44,
    "time": "00:02:51,340 --> 00:02:52,840",
    "arabic": "هَلْ سَنُصْلِحُهُ؟",
    "segs": null,
    "full_uz": "Uni tuzatamizmi?",
    "note": null
  },
  {
    "num": 45,
    "time": "00:02:52,840 --> 00:02:55,800",
    "arabic": "لَا يَجُوزُ لِلْأَطْفَالِ أَنْ يَلْمِسُوا الْمَآخِذَ أَبَدًا",
    "segs": null,
    "full_uz": "Bolalarga rozetkalarga hech qachon tegish mumkin emas.",
    "note": null
  },
  {
    "num": 46,
    "time": "00:02:55,800 --> 00:02:56,660",
    "arabic": "هَذَا مَمْنُوعٌ",
    "segs": null,
    "full_uz": "Bu taqiqlangan.",
    "note": null
  },
  {
    "num": 47,
    "time": "00:02:56,660 --> 00:02:59,280",
    "arabic": "وَكَيْفَ سَنُصْلِحُهُ؟",
    "segs": null,
    "full_uz": "Uni qanday tuzatamiz?",
    "note": null
  },
  {
    "num": 48,
    "time": "00:02:59,280 --> 00:03:00,420",
    "arabic": "اذْهَبْ وَجِدْ بَابُوسْ",
    "segs": null,
    "full_uz": "Bor, Babosni top.",
    "note": null
  },
  {
    "num": 49,
    "time": "00:03:00,420 --> 00:03:02,200",
    "arabic": "سَأَبْقَى هُنَا وَأَنْتَظِرُكُمَا",
    "segs": null,
    "full_uz": "Men shu yerda qolib, sizlarni kutaman.",
    "note": null
  },
  {
    "num": 50,
    "time": "00:03:02,200 --> 00:03:03,520",
    "arabic": "وَلَكِنْ أَيْنَ بَابُوسْ؟",
    "segs": null,
    "full_uz": "Lekin Babos qayerda?",
    "note": null
  },
  {
    "num": 51,
    "time": "00:03:03,520 --> 00:03:04,780",
    "arabic": "أَعْلَمُ أَيْنَ هُوَ",
    "segs": null,
    "full_uz": "Uning qayerdaligini bilaman.",
    "note": null
  },
  {
    "num": 52,
    "time": "00:03:04,780 --> 00:03:08,020",
    "arabic": "لَا أَعْلَمُ لِمَ تَنْبَحُ",
    "segs": null,
    "full_uz": "Nega hurayotganini bilmayman.",
    "note": null
  },
  {
    "num": 53,
    "time": "00:03:08,020 --> 00:03:10,820",
    "arabic": "وَلَكِنْ أَظُنُّهَا تُرِيدُ أَنْ تُسَاعِدَنَا",
    "segs": null,
    "full_uz": "Lekin u bizga yordam bermoqchi deb o'ylayman.",
    "note": null
  },
  {
    "num": 54,
    "time": "00:03:10,820 --> 00:03:12,480",
    "arabic": "هَيَّا إِذَنْ يَا تْشُوسَاكَا",
    "segs": null,
    "full_uz": "Unda, yur, Chosaka.",
    "note": null
  },
  {
    "num": 55,
    "time": "00:03:12,480 --> 00:03:13,520",
    "arabic": "سَاعِدِينِي",
    "segs": null,
    "full_uz": "Menga yordam ber.",
    "note": null
  },
  {
    "num": 56,
    "time": "00:03:13,520 --> 00:03:20,820",
    "arabic": "إِنَّهُ فِي الدَّاخِلِ",
    "segs": null,
    "full_uz": "U ichkarida.",
    "note": null
  },
  {
    "num": 57,
    "time": "00:03:20,820 --> 00:03:23,140",
    "arabic": "بَابُوسْ! بَابُوسْ!",
    "segs": null,
    "full_uz": "Babos! Babos!",
    "note": null
  },
  {
    "num": 58,
    "time": "00:03:23,140 --> 00:03:25,360",
    "arabic": "نُولِيكْ، هَلْ هَذَا أَنْتَ؟",
    "segs": null,
    "full_uz": "Nolik, senmisan?",
    "note": null
  },
  {
    "num": 59,
    "time": "00:03:25,360 --> 00:03:29,900",
    "arabic": "ثَمَّةَ مَأْخَذٌ يُطْلِقُ شَرَارًا وَيَبْدُو كَأَنَّهُ يَحْتَرِقُ",
    "segs": [
      { "ar": "ثَمَّةَ مَأْخَذٌ يُطْلِقُ شَرَارًا", "uz": "bir rozetkadan uchqun chiqyapti" },
      { "ar": "وَيَبْدُو كَأَنَّهُ يَحْتَرِقُ", "uz": "va u yonayotganga o'xshaydi" }
    ],
    "full_uz": "Bir rozetkadan uchqun chiqyapti va u yonayotganga o'xshaydi.",
    "note": null
  },
  {
    "num": 60,
    "time": "00:03:29,900 --> 00:03:31,260",
    "arabic": "هَلْ أَنْتَ وَاثِقٌ؟",
    "segs": null,
    "full_uz": "Ishonchingiz komilmi?",
    "note": null
  },
  {
    "num": 61,
    "time": "00:03:31,260 --> 00:03:33,460",
    "arabic": "أَجَلْ، وَجَدَتْهُ تْشُوسَاكَا",
    "segs": null,
    "full_uz": "Ha, uni Chosaka topdi.",
    "note": null
  },
  {
    "num": 62,
    "time": "00:03:33,460 --> 00:03:35,280",
    "arabic": "حَقًّا؟ أَمْرٌ رَائِعٌ",
    "segs": null,
    "full_uz": "Rostdanmi? Ajoyib narsa.",
    "note": null
  },
  {
    "num": 63,
    "time": "00:03:35,280 --> 00:03:40,920",
    "arabic": "هُنَاكَ كَثِيرٌ مِنْ كِلَابِ الْخِدْمَةِ",
    "segs": null,
    "full_uz": "Xizmat itlari juda ko'p.",
    "note": null
  },
  {
    "num": 64,
    "time": "00:03:40,920 --> 00:03:44,600",
    "arabic": "كِلَابٌ تُسَاعِدُ النَّاسَ عَنْ طَرِيقِ قِيَامِهَا بِأَعْمَالٍ مُخْتَلِفَةٍ",
    "segs": null,
    "full_uz": "Ular turli ishlarni bajarish orqali odamlarga yordam beradi.",
    "note": null
  },
  {
    "num": 65,
    "time": "00:03:44,600 --> 00:03:49,220",
    "arabic": "مِثْلَ حِمَايَةِ مَنْزِلٍ أَوْ قَطِيعِ أَغْنَامٍ إِنْ كَانَتْ كِلَابًا لِلرُّعَاةِ",
    "segs": [
      { "ar": "مِثْلَ حِمَايَةِ مَنْزِلٍ أَوْ قَطِيعِ أَغْنَامٍ", "uz": "masalan, uy yoki qo'y podasini himoya qilish" },
      { "ar": "إِنْ كَانَتْ كِلَابًا لِلرُّعَاةِ", "uz": "agar ular cho'pon itlari bo'lsa" }
    ],
    "full_uz": "Masalan, agar ular cho'pon itlari bo'lsa, uy yoki qo'y podasini himoya qiladi.",
    "note": null
  },
  {
    "num": 66,
    "time": "00:03:49,220 --> 00:03:53,100",
    "arabic": "بَعْضُ الْكِلَابِ تُسَاعِدُ الْحُرَّاسَ عَلَى حِمَايَةِ حُدُودِهِمْ",
    "segs": null,
    "full_uz": "Ba'zi itlar qorovullarga chegaralarini himoya qilishda yordam beradi.",
    "note": null
  },
  {
    "num": 67,
    "time": "00:03:53,099 --> 00:03:56,159",
    "arabic": "وَأُخْرَى مِنْهَا تَعْمَلُ لَدَى الشُّرْطَةِ",
    "segs": null,
    "full_uz": "Boshqalari esa politsiyada ishlaydi.",
    "note": null
  },
  {
    "num": 68,
    "time": "00:03:56,159 --> 00:04:00,039",
    "arabic": "وَثَمَّ كِلَابُ تَزَلُّجٍ تَنْقُلُ النَّاسَ وَالْحُمُولَاتِ فِي الشَّمَالِ",
    "segs": null,
    "full_uz": "Shuningdek, shimolda odamlar va yuklarni tashiydigan chana itlari bor.",
    "note": "Srt matnida «تكلاب» deb yozilgan, to'g'ri shakli «كِلَابُ» bo'lishi kerak."
  },
  {
    "num": 69,
    "time": "00:04:00,039 --> 00:04:03,459",
    "arabic": "حَيْثُ الثَّلْجُ فَقَطْ وَلَا طُرُقَاتِ هُنَاكَ",
    "segs": null,
    "full_uz": "U yerda faqat qor bor va yo'llar yo'q.",
    "note": null
  },
  {
    "num": 70,
    "time": "00:04:03,459 --> 00:04:09,219",
    "arabic": "بَعْضُ الْكِلَابِ تُسَاعِدُ الْمَكْفُوفِينَ عَلَى الْوُصُولِ إِلَى الْأَمَاكِنِ الَّتِي يُرِيدُونَ الذَّهَابَ إِلَيْهَا",
    "segs": [
      { "ar": "بَعْضُ الْكِلَابِ تُسَاعِدُ الْمَكْفُوفِينَ", "uz": "ba'zi itlar ko'zi ojizlarga yordam beradi" },
      { "ar": "عَلَى الْوُصُولِ إِلَى الْأَمَاكِنِ الَّتِي يُرِيدُونَ الذَّهَابَ إِلَيْهَا", "uz": "ular borishni istagan joylariga yetib borishlarida" }
    ],
    "full_uz": "Ba'zi itlar ko'zi ojizlarga ular borishni istagan joylariga yetib borishlarida yordam beradi.",
    "note": null
  },
  {
    "num": 71,
    "time": "00:04:09,219 --> 00:04:13,039",
    "arabic": "وَهُنَاكَ كِلَابٌ تُنْقِذُ النَّاسَ الْعَالِقِينَ فِي الْجِبَالِ",
    "segs": null,
    "full_uz": "Va tog'larda qolib ketgan odamlarni qutqaradigan itlar ham bor.",
    "note": null
  },
  {
    "num": 72,
    "time": "00:04:13,039 --> 00:04:17,079",
    "arabic": "وَهَذَا لَيْسَ كُلَّ شَيْءٍ فَالْكِلَابُ ذَهَبَتْ إِلَى الْفَضَاءِ قَبْلَ الْبَشَرِ",
    "segs": [
      { "ar": "وَهَذَا لَيْسَ كُلَّ شَيْءٍ", "uz": "va bu hammasi emas" },
      { "ar": "فَالْكِلَابُ ذَهَبَتْ إِلَى الْفَضَاءِ قَبْلَ الْبَشَرِ", "uz": "itlar insondan oldin kosmosga uchgan" }
    ],
    "full_uz": "Va bu hammasi emas, itlar insondan oldin kosmosga uchgan.",
    "note": null
  },
  {
    "num": 73,
    "time": "00:04:17,079 --> 00:04:21,219",
    "arabic": "وَلَكِنْ لَا تَظُنَّ أَنَّهَا تُكَلَّفُ بِهَذِهِ الْأَعْمَالِ بِبَسَاطَةٍ",
    "segs": null,
    "full_uz": "Lekin ularga bu ishlar oddiygina topshiriladi deb o'ylama.",
    "note": null
  },
  {
    "num": 74,
    "time": "00:04:21,220 --> 00:04:27,320",
    "arabic": "فَهِيَ كَالْبَشَرِ تَحْتَاجُ إِلَى التَّدْرِيبِ مُدَّةً طَوِيلَةً قَبْلَ أَنْ يُسْمَحَ لَهَا بِأَنْ تُبَاشِرَ الْعَمَلَ",
    "segs": [
      { "ar": "فَهِيَ كَالْبَشَرِ تَحْتَاجُ إِلَى التَّدْرِيبِ مُدَّةً طَوِيلَةً", "uz": "chunki ular ham inson kabi uzoq vaqt mashq qilishga muhtoj" },
      { "ar": "قَبْلَ أَنْ يُسْمَحَ لَهَا بِأَنْ تُبَاشِرَ الْعَمَلَ", "uz": "ishni boshlashiga ruxsat berilishidan oldin" }
    ],
    "full_uz": "Chunki ular ham inson kabi ishni boshlashiga ruxsat berilishidan oldin uzoq vaqt mashq qilishga muhtoj.",
    "note": null
  },
  {
    "num": 75,
    "time": "00:04:27,320 --> 00:04:35,820",
    "arabic": "حَسَنًا، لَنْ يَحْتَرِقَ، لَيْسَ الْيَوْمَ",
    "segs": [
      { "ar": "حَسَنًا، لَنْ يَحْتَرِقَ", "uz": "xo'p, yonmaydi" },
      { "ar": "لَيْسَ الْيَوْمَ", "uz": "bugun emas" }
    ],
    "full_uz": "Xo'p, yonmaydi, hech bo'lmasa bugun emas.",
    "note": null
  },
  {
    "num": 76,
    "time": "00:04:35,820 --> 00:04:41,220",
    "arabic": "عَمَلٌ جَيِّدٌ يَا تْشُوسَاكَا، أَنْتِ كَلْبَةٌ مُسَاعِدَةٌ، لَا شَكَّ فِي ذَلِكَ",
    "segs": [
      { "ar": "عَمَلٌ جَيِّدٌ يَا تْشُوسَاكَا", "uz": "yaxshi ish, Chosaka" },
      { "ar": "أَنْتِ كَلْبَةٌ مُسَاعِدَةٌ، لَا شَكَّ فِي ذَلِكَ", "uz": "sen yordamchi it ekansan, bunga shubha yo'q" }
    ],
    "full_uz": "Yaxshi ish, Chosaka, sen yordamchi it ekansan, bunga shubha yo'q.",
    "note": null
  },
  {
    "num": 77,
    "time": "00:04:41,800 --> 00:04:45,220",
    "arabic": "أَجَلْ، أَنَا أَعْمَلُ، أَنَا كَلْبَةٌ مُسَاعِدَةٌ حَقِيقِيَّةٌ",
    "segs": [
      { "ar": "أَجَلْ، أَنَا أَعْمَلُ", "uz": "ha, men ishlayapman" },
      { "ar": "أَنَا كَلْبَةٌ مُسَاعِدَةٌ حَقِيقِيَّةٌ", "uz": "men haqiqiy yordamchi itman" }
    ],
    "full_uz": "Ha, men ishlayapman, men haqiqiy yordamchi itman.",
    "note": null
  },
  {
    "num": 78,
    "time": "00:04:45,740 --> 00:04:52,200",
    "arabic": "تْشُوسَاكَا، اذْهَبِي الْآنَ، لَقَدِ اكْتَفَيْتُ مِنْكِ الْيَوْمَ",
    "segs": [
      { "ar": "تْشُوسَاكَا، اذْهَبِي الْآنَ", "uz": "Chosaka, hozir bor" },
      { "ar": "لَقَدِ اكْتَفَيْتُ مِنْكِ الْيَوْمَ", "uz": "bugun sendan yetarlicha oldim" }
    ],
    "full_uz": "Chosaka, hozir bor, bugun sendan yetarlicha oldim.",
    "note": null
  },
  {
    "num": 79,
    "time": "00:04:52,200 --> 00:04:56,420",
    "arabic": "لَا تَقُلْ ذَلِكَ لِأَنَّ هَذِهِ الْكَلْبَةَ أَنْقَذَتْ بَيْتَكَ مِنَ الِاحْتِرَاقِ",
    "segs": [
      { "ar": "لَا تَقُلْ ذَلِكَ", "uz": "buni aytmang" },
      { "ar": "لِأَنَّ هَذِهِ الْكَلْبَةَ أَنْقَذَتْ بَيْتَكَ مِنَ الِاحْتِرَاقِ", "uz": "chunki bu it uyingizni yonishdan qutqardi" }
    ],
    "full_uz": "Buni aytmang, chunki bu it uyingizni yonishdan qutqardi.",
    "note": null
  },
  {
    "num": 80,
    "time": "00:04:56,420 --> 00:04:58,300",
    "arabic": "مَاذَا تَعْنِي؟",
    "segs": null,
    "full_uz": "Nima demoqchisan?",
    "note": null
  },
  {
    "num": 81,
    "time": "00:04:58,300 --> 00:05:00,380",
    "arabic": "شَمَّتِ الدُّخَانَ الْقَادِمَ مِنَ الْمَأْخَذِ",
    "segs": null,
    "full_uz": "U rozetkadan chiqayotgan tutunni hidladi.",
    "note": "Srt matnida «القادمة» deb yozilgan, «الدخان» mudhakkar bo'lgani uchun to'g'ri shakli «الْقَادِمَ»."
  },
  {
    "num": 82,
    "time": "00:05:00,380 --> 00:05:05,220",
    "arabic": "تْشُوسَاكَا تُرِيدُ أَنْ تُسَاعِدَ وَأَنْ تَفْعَلَ شَيْئًا جَيِّدًا وَلَكِنَّنَا لَا نَفْهَمُ قَصْدَهَا",
    "segs": [
      { "ar": "تْشُوسَاكَا تُرِيدُ أَنْ تُسَاعِدَ وَأَنْ تَفْعَلَ شَيْئًا جَيِّدًا", "uz": "Chosaka yordam berishni va yaxshi ish qilishni xohlaydi" },
      { "ar": "وَلَكِنَّنَا لَا نَفْهَمُ قَصْدَهَا", "uz": "lekin biz uning nimani nazarda tutayotganini tushunmaymiz" }
    ],
    "full_uz": "Chosaka yordam berishni va yaxshi ish qilishni xohlaydi, lekin biz uning nimani nazarda tutayotganini tushunmaymiz.",
    "note": null
  },
  {
    "num": 83,
    "time": "00:05:05,820 --> 00:05:08,220",
    "arabic": "هَذَا شَيْءٌ صَعْبُ التَّصْدِيقِ",
    "segs": null,
    "full_uz": "Bunga ishonish qiyin.",
    "note": null
  },
  {
    "num": 84,
    "time": "00:05:08,840 --> 00:05:10,440",
    "arabic": "إِذَنْ مَا هَذَا الْكِتَابُ؟",
    "segs": null,
    "full_uz": "Unda bu qanday kitob?",
    "note": null
  },
  {
    "num": 85,
    "time": "00:05:10,440 --> 00:05:12,960",
    "arabic": "كِتَابُ الرِّيَاضِيَّاتِ تَرَكْتُهُ هُنَا",
    "segs": null,
    "full_uz": "Matematika kitobim, uni shu yerda qoldirgan edim.",
    "note": null
  },
  {
    "num": 86,
    "time": "00:05:12,959 --> 00:05:16,859",
    "arabic": "هَلْ تَذْكُرُ كَيْفَ أَرَادَتْكَ تْشُوسَاكَا أَنْ تَأْخُذَهُ مَعَكَ هَذَا الصَّبَاحَ؟",
    "segs": [
      { "ar": "هَلْ تَذْكُرُ", "uz": "esingdami" },
      { "ar": "كَيْفَ أَرَادَتْكَ تْشُوسَاكَا أَنْ تَأْخُذَهُ مَعَكَ هَذَا الصَّبَاحَ", "uz": "Chosaka bu tongda uni o'zing bilan olib ketishingni qanday xohlagani" }
    ],
    "full_uz": "Esingdami, Chosaka bu tongda uni o'zing bilan olib ketishingni qanday xohlagani?",
    "note": null
  },
  {
    "num": 87,
    "time": "00:05:16,859 --> 00:05:17,739",
    "arabic": "أَنْتَ مُحِقٌّ",
    "segs": null,
    "full_uz": "Haq ekansiz.",
    "note": null
  },
  {
    "num": 88,
    "time": "00:05:17,739 --> 00:05:20,620",
    "arabic": "أَحْسَنْتِ يَا تْشُوسَاكَا، عَمَلٌ جَيِّدٌ",
    "segs": null,
    "full_uz": "Barakalla, Chosaka, yaxshi ish.",
    "note": null
  },
  {
    "num": 89,
    "time": "00:05:20,620 --> 00:05:25,419",
    "arabic": "وَلَكِنَّ تْشُوسَاكَا هَذَا الصَّبَاحَ حَاوَلَتْ أَنْ تَجْعَلَكَ تَرْتَدِي حِذَاءً آخَرَ",
    "segs": null,
    "full_uz": "Lekin Chosaka bu tongda senga boshqa poyabzal kiydirmoqchi bo'lgandi.",
    "note": null
  },
  {
    "num": 90,
    "time": "00:05:30,620 --> 00:05:32,279",
    "arabic": "هَذَا مُدْهِشٌ",
    "segs": null,
    "full_uz": "Bu ajablanarli.",
    "note": null
  },
  {
    "num": 91,
    "time": "00:05:32,279 --> 00:05:35,839",
    "arabic": "يَجِبُ عَلَيَّ أَنْ أُنْصِتَ أَكْثَرَ إِلَى كَلْبَتِنَا الذَّكِيَّةِ",
    "segs": null,
    "full_uz": "Aqlli itimizga ko'proq quloq solishim kerak.",
    "note": null
  },
  {
    "num": 92,
    "time": "00:05:35,839 --> 00:05:40,060",
    "arabic": "أَخِيرًا فَهِمْتُمْ",
    "segs": null,
    "full_uz": "Nihoyat tushundinglar.",
    "note": null
  }
];
if (typeof module !== "undefined" && module.exports) {
  module.exports = lessons;
}
