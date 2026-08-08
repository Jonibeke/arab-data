const lessons = [
  {
    "num": 1,
    "time": "00:00:31,960 --> 00:00:40,080",
    "arabic": "الْإِبْرِيقُ الْكَهْرَبَائِيُّ",
    "segs": null,
    "full_uz": "Elektr choynagi",
    "note": "الْإِبْرِيقُ الْكَهْرَبَائِيُّ — elektr choynagi. Bu yerda epizod nomi sifatida ishlatilgan."
  },
  {
    "num": 2,
    "time": "00:00:40,080 --> 00:00:43,780",
    "arabic": "هَذِهِ أَرْبَعَةٌ",
    "segs": null,
    "full_uz": "Bu to'rtinchisi.",
    "note": null
  },
  {
    "num": 3,
    "time": "00:00:43,780 --> 00:00:45,159",
    "arabic": "هَيَّا يَا تُوم، وَحْدَةٌ أُخْرَى",
    "segs": [
      { "ar": "هَيَّا يَا تُوم", "uz": "qani, Tom" },
      { "ar": "وَحْدَةٌ أُخْرَى", "uz": "yana bittasi" }
    ],
    "full_uz": "Qani, Tom, yana bittasi.",
    "note": null
  },
  {
    "num": 4,
    "time": "00:00:45,159 --> 00:00:49,168",
    "arabic": "هَيَّا يَا تُوم، إِنَّكَ تَسْتَطِيعُ فِعْلَهَا",
    "segs": [
      { "ar": "هَيَّا يَا تُوم", "uz": "qani, Tom" },
      { "ar": "إِنَّكَ تَسْتَطِيعُ فِعْلَهَا", "uz": "sen buni qila olasan" }
    ],
    "full_uz": "Qani, Tom, sen buni qila olasan.",
    "note": null
  },
  {
    "num": 5,
    "time": "00:00:49,168 --> 00:00:50,183",
    "arabic": "هَيَّا حَاوِلْ",
    "segs": null,
    "full_uz": "Qani, harakat qil.",
    "note": null
  },
  {
    "num": 6,
    "time": "00:00:50,183 --> 00:00:53,278",
    "arabic": "خَمْسَةٌ",
    "segs": null,
    "full_uz": "Beshinchisi.",
    "note": null
  },
  {
    "num": 7,
    "time": "00:00:53,278 --> 00:00:56,384",
    "arabic": "هَذِهِ لَا تُحْتَسَبُ، لَا تُحْتَسَبُ، لَا",
    "segs": [
      { "ar": "هَذِهِ لَا تُحْتَسَبُ", "uz": "bu hisobga kirmaydi" },
      { "ar": "لَا تُحْتَسَبُ، لَا", "uz": "hisobga kirmaydi, yo'q" }
    ],
    "full_uz": "Bu hisobga kirmaydi, hisobga kirmaydi, yo'q.",
    "note": null
  },
  {
    "num": 8,
    "time": "00:00:56,384 --> 00:00:58,649",
    "arabic": "ذَقْنُكَ أَسْفَلَ الْعَمُودِ يَا تُوم",
    "segs": null,
    "full_uz": "Yag'ing ustundan pastda, Tom.",
    "note": null
  },
  {
    "num": 9,
    "time": "00:00:58,649 --> 00:01:02,557",
    "arabic": "يَكْفِي، لَمْ أَعُدْ أَسْتَطِيعُ",
    "segs": [
      { "ar": "يَكْفِي", "uz": "bo'ldi" },
      { "ar": "لَمْ أَعُدْ أَسْتَطِيعُ", "uz": "endi qila olmayman" }
    ],
    "full_uz": "Bo'ldi, endi qila olmayman.",
    "note": null
  },
  {
    "num": 10,
    "time": "00:01:02,557 --> 00:01:03,712",
    "arabic": "أَيُّهَا الضَّعِيفُ",
    "segs": null,
    "full_uz": "Ey, zaif.",
    "note": null
  },
  {
    "num": 11,
    "time": "00:01:03,712 --> 00:01:09,265",
    "arabic": "أَنْتَ الضَّعِيفُ وَلَسْتُ أَنَا، كُلُّ مَا فِي الْأَمْرِ أَنَّنِي لَمْ آكُلْ وَلِهَذَا فَقَدْتُ قُوَّتِي، أَفَهِمْتَ؟",
    "segs": [
      { "ar": "أَنْتَ الضَّعِيفُ وَلَسْتُ أَنَا", "uz": "zaif bo'lgan sensan, men emas" },
      { "ar": "كُلُّ مَا فِي الْأَمْرِ أَنَّنِي لَمْ آكُلْ", "uz": "gap shundaki, men ovqat yemadim" },
      { "ar": "وَلِهَذَا فَقَدْتُ قُوَّتِي، أَفَهِمْتَ؟", "uz": "va shuning uchun kuchimni yo'qotdim, tushundingmi?" }
    ],
    "full_uz": "Zaif bo'lgan sensan, men emas, gap shundaki, men ovqat yemadim va shuning uchun kuchimni yo'qotdim, tushundingmi?",
    "note": null
  },
  {
    "num": 12,
    "time": "00:01:09,265 --> 00:01:11,262",
    "arabic": "أَنْتَ تَأْكُلُ كَثِيرًا يَا تُوم",
    "segs": null,
    "full_uz": "Sen juda ko'p yeysan, Tom.",
    "note": null
  },
  {
    "num": 13,
    "time": "00:01:11,262 --> 00:01:15,985",
    "arabic": "وَكَمَا تَرَى هَذَا هُوَ الْفَرْقُ بَيْنَ الْفِيكْسِيزِ وَالْبَشَرِ، اسْتَمِعِي الْآنَ",
    "segs": [
      { "ar": "وَكَمَا تَرَى هَذَا هُوَ الْفَرْقُ بَيْنَ الْفِيكْسِيزِ وَالْبَشَرِ", "uz": "ko'rib turganingdek, Fiksiklar va odamlar orasidagi farq shu" },
      { "ar": "اسْتَمِعِي الْآنَ", "uz": "endi tinglang" }
    ],
    "full_uz": "Ko'rib turganingdek, Fiksiklar va odamlar orasidagi farq shu, endi tinglang.",
    "note": null
  },
  {
    "num": 14,
    "time": "00:01:15,985 --> 00:01:24,066",
    "arabic": "كَثِيرٌ مِنَ النَّاسِ يَفْتَرِضُ خَطَأً أَنَّ الْفِيكْسِيزَ يَعِيشُونَ عَلَى سَرِقَةِ الطَّعَامِ مِنْ عَلَى مَائِدَةِ الْبَشَرِ",
    "segs": [
      { "ar": "كَثِيرٌ مِنَ النَّاسِ يَفْتَرِضُ خَطَأً", "uz": "ko'p odamlar noto'g'ri o'ylashadi" },
      { "ar": "أَنَّ الْفِيكْسِيزَ يَعِيشُونَ عَلَى سَرِقَةِ الطَّعَامِ مِنْ عَلَى مَائِدَةِ الْبَشَرِ", "uz": "Fiksiklar odamlarning dasturxonidan taom o'g'irlab yashaydi deb" }
    ],
    "full_uz": "Ko'p odamlar Fiksiklar odamlarning dasturxonidan taom o'g'irlab yashaydi deb noto'g'ri o'ylashadi.",
    "note": null
  },
  {
    "num": 15,
    "time": "00:01:24,066 --> 00:01:27,737",
    "arabic": "بَلْ أَسْوَأُ مِنْ ذَلِكَ، سَرِقَةُ الطَّعَامِ مِنْ دَاخِلِ ثَلَّاجَاتِهِمْ",
    "segs": [
      { "ar": "بَلْ أَسْوَأُ مِنْ ذَلِكَ", "uz": "balki bundan ham battari" },
      { "ar": "سَرِقَةُ الطَّعَامِ مِنْ دَاخِلِ ثَلَّاجَاتِهِمْ", "uz": "muzlatgichlari ichidan ovqat o'g'irlaydi deb" }
    ],
    "full_uz": "Balki bundan ham battari, muzlatgichlari ichidan ovqat o'g'irlaydi deb ham o'ylashadi.",
    "note": null
  },
  {
    "num": 16,
    "time": "00:01:27,737 --> 00:01:28,875",
    "arabic": "إِنَّ هَذَا كَذِبٌ",
    "segs": null,
    "full_uz": "Bu yolg'on.",
    "note": null
  },
  {
    "num": 17,
    "time": "00:01:28,875 --> 00:01:30,689",
    "arabic": "لَيْسَ صَحِيحًا الْبَتَّةَ",
    "segs": null,
    "full_uz": "Umuman to'g'ri emas.",
    "note": null
  },
  {
    "num": 18,
    "time": "00:01:30,689 --> 00:01:33,034",
    "arabic": "لَا يَأْكُلُ الْفِيكْسِيزُ أَيًّا مِنْ طَعَامِ الْبَشَرِ",
    "segs": null,
    "full_uz": "Fiksiklar odamlarning taomidan hech narsa yemaydi.",
    "note": null
  },
  {
    "num": 19,
    "time": "00:01:33,034 --> 00:01:37,422",
    "arabic": "حَسَنًا، إِذَنْ كَيْفَ يَحْصُلُ الْفِيكْسِيزُ عَلَى طَاقَتِهِمْ يَا أَعِزَّائِي؟",
    "segs": [
      { "ar": "حَسَنًا، إِذَنْ", "uz": "xo'p, unda" },
      { "ar": "كَيْفَ يَحْصُلُ الْفِيكْسِيزُ عَلَى طَاقَتِهِمْ يَا أَعِزَّائِي؟", "uz": "Fiksiklar energiyani qayerdan olishadi, aziz do'stlar?" }
    ],
    "full_uz": "Xo'p, unda Fiksiklar energiyani qayerdan olishadi, aziz do'stlar?",
    "note": null
  },
  {
    "num": 20,
    "time": "00:01:37,422 --> 00:01:38,950",
    "arabic": "الْأَمْرُ فِي غَايَةِ الْبَسَاطَةِ",
    "segs": null,
    "full_uz": "Ish juda oddiy.",
    "note": null
  },
  {
    "num": 21,
    "time": "00:01:38,950 --> 00:01:41,867",
    "arabic": "حَيَاةُ الْفِيكْسِي كُلُّهَا مُتَعَلِّقَةٌ بِالْأَجْهِزَةِ",
    "segs": null,
    "full_uz": "Fiksikning butun hayoti qurilmalarga bog'liq.",
    "note": null
  },
  {
    "num": 22,
    "time": "00:01:41,867 --> 00:01:44,913",
    "arabic": "لَا يَعِيشُ الْفِيكْسِيزُ دَاخِلَ الْأَجْهِزَةِ وَحَسْبُ",
    "segs": null,
    "full_uz": "Fiksiklar faqat qurilmalar ichida yashab qolmaydi.",
    "note": null
  },
  {
    "num": 23,
    "time": "00:01:44,913 --> 00:01:47,346",
    "arabic": "بَلْ يَعْتَنُونَ بِهَا أَيْضًا لِتَبْقَى أَطْوَلَ",
    "segs": null,
    "full_uz": "Balki ular ularga g'amxo'rlik ham qiladi, uzoqroq xizmat qilishi uchun.",
    "note": null
  },
  {
    "num": 24,
    "time": "00:01:47,346 --> 00:01:52,329",
    "arabic": "وَمُقَابِلَ هَذِهِ الْمُسَاعَدَةِ تُشَارِكُ الْأَجْهِزَةُ الْفِيكْسِيزَ بِبَعْضٍ مِنْ طَاقَتِهَا",
    "segs": [
      { "ar": "وَمُقَابِلَ هَذِهِ الْمُسَاعَدَةِ", "uz": "shu yordam evaziga" },
      { "ar": "تُشَارِكُ الْأَجْهِزَةُ الْفِيكْسِيزَ بِبَعْضٍ مِنْ طَاقَتِهَا", "uz": "qurilmalar Fiksiklar bilan energiyasining bir qismini baham ko'radi" }
    ],
    "full_uz": "Shu yordam evaziga qurilmalar Fiksiklar bilan o'z energiyasining bir qismini baham ko'radi.",
    "note": null
  },
  {
    "num": 25,
    "time": "00:01:52,329 --> 00:01:53,653",
    "arabic": "كَمَا أَخْبَرْتُكُمْ",
    "segs": null,
    "full_uz": "Sizlarga aytganimdek.",
    "note": null
  },
  {
    "num": 26,
    "time": "00:01:53,653 --> 00:01:55,536",
    "arabic": "الْفِيكْسِيزُ تُسَاعِدُ الْأَجْهِزَةَ",
    "segs": null,
    "full_uz": "Fiksiklar qurilmalarga yordam beradi.",
    "note": null
  },
  {
    "num": 27,
    "time": "00:01:55,536 --> 00:01:57,801",
    "arabic": "وَالْأَجْهِزَةُ تُسَاعِدُ الْفِيكْسِيزَ",
    "segs": null,
    "full_uz": "Qurilmalar esa Fiksiklarga yordam beradi.",
    "note": null
  },
  {
    "num": 28,
    "time": "00:01:57,801 --> 00:02:02,116",
    "arabic": "أَجَلْ، الْفِيكْسِيزُ وَالْآلَاتُ لَدَيْهَا عَلَاقَةٌ تَكَافُلِيَّةٌ",
    "segs": [
      { "ar": "أَجَلْ، الْفِيكْسِيزُ وَالْآلَاتُ", "uz": "ha, Fiksiklar va qurilmalar" },
      { "ar": "لَدَيْهَا عَلَاقَةٌ تَكَافُلِيَّةٌ", "uz": "o'rtasida o'zaro foydali aloqa bor" }
    ],
    "full_uz": "Ha, Fiksiklar va qurilmalar o'rtasida o'zaro foydali aloqa bor.",
    "note": null
  },
  {
    "num": 29,
    "time": "00:02:02,116 --> 00:02:04,991",
    "arabic": "لِذَا نَحْنُ لَا نَأْكُلُ الْفَضَلَاتِ كَالصَّرَاصِيرِ",
    "segs": null,
    "full_uz": "Shuning uchun biz suvaraklar kabi axlat yemaymiz.",
    "note": null
  },
  {
    "num": 30,
    "time": "00:02:04,991 --> 00:02:07,142",
    "arabic": "هَذَا لِأَنَّنَا فِيكْسِيزُ",
    "segs": null,
    "full_uz": "Bu shunchaki biz Fiksiklar bo'lganimiz uchun.",
    "note": null
  },
  {
    "num": 31,
    "time": "00:02:07,142 --> 00:02:10,108",
    "arabic": "وَاحِدٌ",
    "segs": null,
    "full_uz": "Bir.",
    "note": null
  },
  {
    "num": 32,
    "time": "00:02:10,108 --> 00:02:10,833",
    "arabic": "اثْنَانِ",
    "segs": null,
    "full_uz": "Ikki.",
    "note": null
  },
  {
    "num": 33,
    "time": "00:02:10,833 --> 00:02:11,703",
    "arabic": "ثَلَاثَةٌ",
    "segs": null,
    "full_uz": "Uch.",
    "note": null
  },
  {
    "num": 34,
    "time": "00:02:11,703 --> 00:02:19,674",
    "arabic": "كَيْفَ مِنَ الْمُمْكِنِ أَنْ فَتًى كَبِيرًا مِثْلَكَ لَا يَسْتَطِيعَ تَحْضِيرَ أَيِّ طَعَامٍ لِنَفْسِهِ؟",
    "segs": [
      { "ar": "كَيْفَ مِنَ الْمُمْكِنِ", "uz": "qanday mumkin" },
      { "ar": "أَنْ فَتًى كَبِيرًا مِثْلَكَ لَا يَسْتَطِيعَ تَحْضِيرَ أَيِّ طَعَامٍ لِنَفْسِهِ؟", "uz": "sendek katta bola o'ziga hech qanday ovqat tayyorlay olmasligi?" }
    ],
    "full_uz": "Sendek katta bola o'ziga hech qanday ovqat tayyorlay olmasligi qanday mumkin?",
    "note": null
  },
  {
    "num": 35,
    "time": "00:02:19,674 --> 00:02:20,668",
    "arabic": "غَرِيبٌ",
    "segs": null,
    "full_uz": "Qiziq.",
    "note": null
  },
  {
    "num": 36,
    "time": "00:02:20,668 --> 00:02:24,883",
    "arabic": "أَسْتَطِيعُ الطَّبْخَ لَكِنْ لَا يُسْمَحُ لِي بِاسْتِعْمَالِ الْمَوْقِدِ",
    "segs": [
      { "ar": "أَسْتَطِيعُ الطَّبْخَ", "uz": "men pishira olaman" },
      { "ar": "لَكِنْ لَا يُسْمَحُ لِي بِاسْتِعْمَالِ الْمَوْقِدِ", "uz": "lekin plitadan foydalanishga ruxsat berishmaydi" }
    ],
    "full_uz": "Men pishira olaman, lekin plitadan foydalanishga ruxsat berishmaydi.",
    "note": null
  },
  {
    "num": 37,
    "time": "00:02:24,883 --> 00:02:26,632",
    "arabic": "مَا الَّذِي يُطْبَخُ بِغَيْرِهِ؟",
    "segs": null,
    "full_uz": "Usiz nima pishirish mumkin?",
    "note": null
  },
  {
    "num": 38,
    "time": "00:02:26,632 --> 00:02:29,555",
    "arabic": "أَجَلْ، شُوفَانٌ سَرِيعُ التَّحْضِيرِ",
    "segs": null,
    "full_uz": "Ha, tez tayyorlanadigan suli yormasi.",
    "note": null
  },
  {
    "num": 39,
    "time": "00:02:29,555 --> 00:02:30,474",
    "arabic": "انْظُرَا",
    "segs": null,
    "full_uz": "Qaranglar.",
    "note": null
  },
  {
    "num": 40,
    "time": "00:02:30,474 --> 00:02:33,137",
    "arabic": "هَلْ تُحِبُّ الشُّوفَانَ؟",
    "segs": null,
    "full_uz": "Suli yormasini yaxshi ko'rasanmi?",
    "note": null
  },
  {
    "num": 41,
    "time": "00:02:33,137 --> 00:02:38,218",
    "arabic": "هَلْ تَمْزَحِينَ؟ لَكِنَّ وَالِدِي يَقُولُ الشُّوفَانَ صِحِّيٌّ وَيُقَوِّيكَ",
    "segs": [
      { "ar": "هَلْ تَمْزَحِينَ؟", "uz": "hazillashyapsanmi?" },
      { "ar": "لَكِنَّ وَالِدِي يَقُولُ الشُّوفَانَ صِحِّيٌّ وَيُقَوِّيكَ", "uz": "lekin otam suli yormasi foydali va kuch beradi, deydi" }
    ],
    "full_uz": "Hazillashyapsanmi? Lekin otam suli yormasi foydali va kuch beradi, deydi.",
    "note": null
  },
  {
    "num": 42,
    "time": "00:02:38,218 --> 00:02:41,082",
    "arabic": "مُمْتَازٌ، وَكَيْفَ نَطْبُخُهُ؟",
    "segs": null,
    "full_uz": "Ajoyib, uni qanday pishiramiz?",
    "note": null
  },
  {
    "num": 43,
    "time": "00:02:41,082 --> 00:02:46,415",
    "arabic": "لَيْسَ صَعْبًا، كُلُّ مَا عَلَيْكَ فِعْلُهُ إِضَافَةُ الْمَاءِ السَّاخِنِ، وَهَذَا مَسْمُوحٌ لِي",
    "segs": [
      { "ar": "لَيْسَ صَعْبًا", "uz": "qiyin emas" },
      { "ar": "كُلُّ مَا عَلَيْكَ فِعْلُهُ إِضَافَةُ الْمَاءِ السَّاخِنِ", "uz": "faqat issiq suv qo'shsang bo'ldi" },
      { "ar": "وَهَذَا مَسْمُوحٌ لِي", "uz": "buni esa menga ruxsat berishgan" }
    ],
    "full_uz": "Qiyin emas, faqat issiq suv qo'shsang bo'ldi, buni esa menga ruxsat berishgan.",
    "note": null
  },
  {
    "num": 44,
    "time": "00:02:46,415 --> 00:02:50,927",
    "arabic": "تَوَقَّفْ وَانْظُرْ إِذَا كَانَ فِيهِ مَاءٌ وَإِلَّا فَسَوْفَ يَحْتَرِقُ الْإِبْرِيقُ",
    "segs": [
      { "ar": "تَوَقَّفْ وَانْظُرْ إِذَا كَانَ فِيهِ مَاءٌ", "uz": "to'xta va ichida suv borligini tekshir" },
      { "ar": "وَإِلَّا فَسَوْفَ يَحْتَرِقُ الْإِبْرِيقُ", "uz": "aks holda choynak kuyib ketadi" }
    ],
    "full_uz": "To'xta va ichida suv borligini tekshir, aks holda choynak kuyib ketadi.",
    "note": null
  },
  {
    "num": 45,
    "time": "00:02:50,927 --> 00:02:53,127",
    "arabic": "فِيهِ مَا يَكْفِي",
    "segs": null,
    "full_uz": "Yetarlicha bor.",
    "note": null
  },
  {
    "num": 46,
    "time": "00:02:53,127 --> 00:02:54,612",
    "arabic": "إِذَنْ شَغِّلْ",
    "segs": null,
    "full_uz": "Unda ishga tushir.",
    "note": null
  },
  {
    "num": 47,
    "time": "00:02:54,612 --> 00:02:59,997",
    "arabic": "هَيَّا، أَخْبِرِينِي كَيْفَ يَتَوَقَّفُ الْإِبْرِيقُ؟",
    "segs": [
      { "ar": "هَيَّا، أَخْبِرِينِي", "uz": "qani, ayt-chi" },
      { "ar": "كَيْفَ يَتَوَقَّفُ الْإِبْرِيقُ؟", "uz": "choynak qanday to'xtaydi?" }
    ],
    "full_uz": "Qani, ayt-chi, choynak qanday to'xtaydi?",
    "note": null
  },
  {
    "num": 48,
    "time": "00:02:59,997 --> 00:03:03,373",
    "arabic": "أَقْصِدُ، كَيْفَ يَعْرِفُ الْإِبْرِيقُ أَنَّ الْمَاءَ يَغْلِي؟",
    "segs": null,
    "full_uz": "Ya'ni, choynak suv qaynayotganini qanday biladi?",
    "note": null
  },
  {
    "num": 49,
    "time": "00:03:03,373 --> 00:03:06,955",
    "arabic": "اسْمَعْنِي جَيِّدًا",
    "segs": null,
    "full_uz": "Meni yaxshilab tingla.",
    "note": null
  },
  {
    "num": 50,
    "time": "00:03:06,955 --> 00:03:10,747",
    "arabic": "دَاخِلَ الْإِبْرِيقِ الْكَهْرَبَائِيِّ مُسَخِّنَةٌ مُخْفَاةٌ فِي الْقَعْرِ",
    "segs": [
      { "ar": "دَاخِلَ الْإِبْرِيقِ الْكَهْرَبَائِيِّ", "uz": "elektr choynagi ichida" },
      { "ar": "مُسَخِّنَةٌ مُخْفَاةٌ فِي الْقَعْرِ", "uz": "tagida yashiringan isitkich bor" }
    ],
    "full_uz": "Elektr choynagi ichida, tagida yashiringan isitkich bor.",
    "note": null
  },
  {
    "num": 51,
    "time": "00:03:10,747 --> 00:03:14,984",
    "arabic": "عِنْدَمَا تُشَغِّلُ الْإِبْرِيقَ تَقُومُ الْمُسَخِّنَةُ بِتَسْخِينِ الْمَاءِ حَتَّى يَغْلِيَ",
    "segs": [
      { "ar": "عِنْدَمَا تُشَغِّلُ الْإِبْرِيقَ", "uz": "choynakni yoqqaningda" },
      { "ar": "تَقُومُ الْمُسَخِّنَةُ بِتَسْخِينِ الْمَاءِ حَتَّى يَغْلِيَ", "uz": "isitkich suvni qaynaguncha isitadi" }
    ],
    "full_uz": "Choynakni yoqqaningda, isitkich suvni qaynaguncha isitadi.",
    "note": null
  },
  {
    "num": 52,
    "time": "00:03:14,984 --> 00:03:21,374",
    "arabic": "وَالْمَاءُ الْمَغْلِيُّ يُصْدِرُ بُخَارًا يُسَخِّنُ صَفِيحَةً مَعْدِنِيَّةً خَاصَّةً فِي أَعْلَى الْإِبْرِيقِ كَمَا نَرَى هُنَا",
    "segs": [
      { "ar": "وَالْمَاءُ الْمَغْلِيُّ يُصْدِرُ بُخَارًا", "uz": "qaynagan suv bug' chiqaradi" },
      { "ar": "يُسَخِّنُ صَفِيحَةً مَعْدِنِيَّةً خَاصَّةً فِي أَعْلَى الْإِبْرِيقِ", "uz": "u choynak tepasidagi maxsus metall plastinkani isitadi" },
      { "ar": "كَمَا نَرَى هُنَا", "uz": "mana bu yerda ko'rib turganimizdek" }
    ],
    "full_uz": "Qaynagan suv bug' chiqaradi, u esa choynak tepasidagi maxsus metall plastinkani isitadi, mana bu yerda ko'rib turganimizdek.",
    "note": null
  },
  {
    "num": 53,
    "time": "00:03:21,374 --> 00:03:25,353",
    "arabic": "تُؤَدِّي الْحَرَارَةُ إِلَى الْتِوَاءِ الصَّفِيحَةِ وَإِيقَافِ الْإِبْرِيقِ",
    "segs": [
      { "ar": "تُؤَدِّي الْحَرَارَةُ إِلَى الْتِوَاءِ الصَّفِيحَةِ", "uz": "issiqlik plastinkaning egilishiga olib keladi" },
      { "ar": "وَإِيقَافِ الْإِبْرِيقِ", "uz": "va choynakning to'xtashiga" }
    ],
    "full_uz": "Issiqlik plastinkaning egilishiga va choynakning to'xtashiga olib keladi.",
    "note": null
  },
  {
    "num": 54,
    "time": "00:03:25,353 --> 00:03:30,956",
    "arabic": "لِذَا يُمْكِنُكَ الْقَوْلُ إِنَّ الْإِبْرِيقَ الْكَهْرَبَائِيَّ يَشْعُرُ بِغَلَيَانِ الْمَاءِ",
    "segs": null,
    "full_uz": "Shuning uchun elektr choynagi suvning qaynaganini his qiladi, deyish mumkin.",
    "note": null
  },
  {
    "num": 55,
    "time": "00:03:30,956 --> 00:03:38,812",
    "arabic": "حَسَنًا، الْآنَ فَهِمْتُ",
    "segs": null,
    "full_uz": "Xo'p, endi tushundim.",
    "note": null
  },
  {
    "num": 56,
    "time": "00:03:38,812 --> 00:03:40,948",
    "arabic": "وَلِمَاذَا ثَلَاثَةُ أَوْعِيَةٍ؟",
    "segs": null,
    "full_uz": "Nega uchta idish?",
    "note": null
  },
  {
    "num": 57,
    "time": "00:03:40,948 --> 00:03:43,177",
    "arabic": "كَمَا تَعْلَمُ، نَحْنُ لَا نَأْكُلُ",
    "segs": null,
    "full_uz": "Bilasan-ku, biz yemaymiz.",
    "note": null
  },
  {
    "num": 58,
    "time": "00:03:43,177 --> 00:03:46,352",
    "arabic": "هَذَانِ لَيْسَا لَكُمَا، إِنَّهُمَا لِأُمِّي وَأَبِي",
    "segs": [
      { "ar": "هَذَانِ لَيْسَا لَكُمَا", "uz": "bu ikkovi sizlarniki emas" },
      { "ar": "إِنَّهُمَا لِأُمِّي وَأَبِي", "uz": "ular onam va otamniki" }
    ],
    "full_uz": "Bu ikkovi sizlarniki emas, ular onam va otamniki.",
    "note": null
  },
  {
    "num": 59,
    "time": "00:03:46,352 --> 00:03:47,922",
    "arabic": "اسْكُبْ هُنَا",
    "segs": null,
    "full_uz": "Bu yoqqa quy.",
    "note": null
  },
  {
    "num": 60,
    "time": "00:03:47,922 --> 00:03:49,590",
    "arabic": "لَا",
    "segs": null,
    "full_uz": "Yo'q.",
    "note": null
  },
  {
    "num": 61,
    "time": "00:03:49,590 --> 00:03:51,725",
    "arabic": "تَابِعِ السَّكْبَةَ هُنَا",
    "segs": null,
    "full_uz": "Quyishni bu yerda davom ettir.",
    "note": null
  },
  {
    "num": 62,
    "time": "00:03:51,725 --> 00:03:54,086",
    "arabic": "وَأَنَا قُلْتُ اسْكُبْ هُنَا",
    "segs": null,
    "full_uz": "Men esa bu yoqqa quy dedim.",
    "note": null
  },
  {
    "num": 63,
    "time": "00:03:54,086 --> 00:03:56,893",
    "arabic": "أَنَا قُلْتُ عَلَيْكَ أَوَّلًا أَنْ تَسْكُبَ هُنَا",
    "segs": null,
    "full_uz": "Men esa avval bu yoqqa quyishing kerak dedim.",
    "note": null
  },
  {
    "num": 64,
    "time": "00:03:56,893 --> 00:04:00,372",
    "arabic": "نُولِيك، أَيْنَ أَنْتَ؟",
    "segs": null,
    "full_uz": "Nolik, qayerdasan?",
    "note": null
  },
  {
    "num": 65,
    "time": "00:04:00,372 --> 00:04:02,902",
    "arabic": "سَأَجِدُهُ، تَمَاسَكْ، سَأَنْزِلُ",
    "segs": [
      { "ar": "سَأَجِدُهُ", "uz": "men uni topaman" },
      { "ar": "تَمَاسَكْ، سَأَنْزِلُ", "uz": "chida, tushib boraman" }
    ],
    "full_uz": "Men uni topaman, chida, tushib boraman.",
    "note": null
  },
  {
    "num": 66,
    "time": "00:04:02,902 --> 00:04:06,579",
    "arabic": "سِيمْكَا",
    "segs": null,
    "full_uz": "Simka!",
    "note": null
  },
  {
    "num": 67,
    "time": "00:04:06,579 --> 00:04:07,874",
    "arabic": "إِنَّهَا هُنَا",
    "segs": null,
    "full_uz": "U shu yerda.",
    "note": null
  },
  {
    "num": 68,
    "time": "00:04:07,874 --> 00:04:12,217",
    "arabic": "نُولِيك",
    "segs": null,
    "full_uz": "Nolik!",
    "note": null
  },
  {
    "num": 69,
    "time": "00:04:12,217 --> 00:04:14,035",
    "arabic": "إِنَّهُ هُنَا",
    "segs": null,
    "full_uz": "U shu yerda.",
    "note": null
  },
  {
    "num": 70,
    "time": "00:04:14,035 --> 00:04:15,596",
    "arabic": "سِيمْكَا",
    "segs": null,
    "full_uz": "Simka!",
    "note": null
  },
  {
    "num": 71,
    "time": "00:04:15,596 --> 00:04:16,897",
    "arabic": "إِنَّهَا هُنَا",
    "segs": null,
    "full_uz": "U shu yerda.",
    "note": null
  },
  {
    "num": 72,
    "time": "00:04:16,897 --> 00:04:18,197",
    "arabic": "نُولِيك",
    "segs": null,
    "full_uz": "Nolik!",
    "note": null
  },
  {
    "num": 73,
    "time": "00:04:18,197 --> 00:04:19,063",
    "arabic": "إِنَّهُ هُنَا",
    "segs": null,
    "full_uz": "U shu yerda.",
    "note": null
  },
  {
    "num": 74,
    "time": "00:04:19,063 --> 00:04:28,852",
    "arabic": "أَيْنَ فَرْدَةُ حِذَائِكَ؟",
    "segs": null,
    "full_uz": "Poyabzalingning bir jufti qayerda?",
    "note": null
  },
  {
    "num": 75,
    "time": "00:04:28,852 --> 00:04:29,802",
    "arabic": "لَقَدْ ضَاعَتْ",
    "segs": null,
    "full_uz": "Yo'qolib qoldi.",
    "note": null
  },
  {
    "num": 76,
    "time": "00:04:29,802 --> 00:04:31,282",
    "arabic": "إِنَّهَا فِي الشُّوفَانِ",
    "segs": null,
    "full_uz": "U suli yormasi ichida.",
    "note": null
  },
  {
    "num": 77,
    "time": "00:04:31,282 --> 00:04:36,094",
    "arabic": "إِنَّهُمَا وَالِدَاكَ",
    "segs": null,
    "full_uz": "Ular sening ota-onang.",
    "note": null
  },
  {
    "num": 78,
    "time": "00:04:36,094 --> 00:04:37,571",
    "arabic": "لِنَخْرُجْ مِنْ هُنَا",
    "segs": null,
    "full_uz": "Keling, bu yerdan chiqib ketaylik.",
    "note": null
  },
  {
    "num": 79,
    "time": "00:04:37,571 --> 00:04:39,559",
    "arabic": "أَنْتَ، هَلْ نَسِيتَ حِذَاءَكَ؟",
    "segs": null,
    "full_uz": "Sen, poyabzalingni unutdingmi?",
    "note": null
  },
  {
    "num": 80,
    "time": "00:04:39,559 --> 00:04:41,765",
    "arabic": "لَا تَقْلَقْ، لَدَيَّ وَاحِدٌ آخَرُ",
    "segs": null,
    "full_uz": "Xavotir olma, menda yana bittasi bor.",
    "note": null
  },
  {
    "num": 81,
    "time": "00:04:41,765 --> 00:04:43,451",
    "arabic": "مَرْحَبًا تُوم، لَقَدْ عُدْنَا",
    "segs": null,
    "full_uz": "Salom, Tom, biz qaytdik.",
    "note": null
  },
  {
    "num": 82,
    "time": "00:04:43,451 --> 00:04:44,942",
    "arabic": "لَا شَكَّ أَنَّكَ جَائِعٌ",
    "segs": null,
    "full_uz": "Shubhasiz, sen ochsan.",
    "note": null
  },
  {
    "num": 83,
    "time": "00:04:44,942 --> 00:04:46,316",
    "arabic": "سَنُعِدُّ لَكَ الطَّعَامَ",
    "segs": null,
    "full_uz": "Senga ovqat tayyorlaymiz.",
    "note": null
  },
  {
    "num": 84,
    "time": "00:04:46,316 --> 00:04:48,230",
    "arabic": "لَكِنَّنِي أَعْدَدْتُ بَعْضَ الطَّعَامِ",
    "segs": null,
    "full_uz": "Lekin men allaqachon ovqat tayyorladim.",
    "note": null
  },
  {
    "num": 85,
    "time": "00:04:48,230 --> 00:04:51,020",
    "arabic": "وَقَدْ سُخِّنَ الْمَاءُ، اغْسِلَا أَيْدِيَكُمَا",
    "segs": [
      { "ar": "وَقَدْ سُخِّنَ الْمَاءُ", "uz": "suv isitildi" },
      { "ar": "اغْسِلَا أَيْدِيَكُمَا", "uz": "qo'llaringizni yuvinglar" }
    ],
    "full_uz": "Suv isitildi, qo'llaringizni yuvinglar.",
    "note": null
  },
  {
    "num": 86,
    "time": "00:04:51,020 --> 00:04:55,031",
    "arabic": "تُوم، لَا تَلْمَسِ الْإِبْرِيقَ، إِنَّهُ سَاخِنٌ كَيْ لَا تَحْرِقَ يَدَيْكَ",
    "segs": [
      { "ar": "تُوم، لَا تَلْمَسِ الْإِبْرِيقَ", "uz": "Tom, choynakni ushlama" },
      { "ar": "إِنَّهُ سَاخِنٌ كَيْ لَا تَحْرِقَ يَدَيْكَ", "uz": "u issiq, qo'lingni kuydirmaslik uchun" }
    ],
    "full_uz": "Tom, choynakni ushlama, u issiq, qo'lingni kuydirmaslik uchun.",
    "note": null
  },
  {
    "num": 87,
    "time": "00:04:55,031 --> 00:05:00,682",
    "arabic": "نَعَمْ، نَعَمْ، نَعَمْ، نَعَمْ",
    "segs": null,
    "full_uz": "Ha, ha, ha, ha.",
    "note": null
  },
  {
    "num": 88,
    "time": "00:05:00,682 --> 00:05:04,078",
    "arabic": "إِذَنْ نَحْنُ نَأْكُلُ الشُّوفَانَ الْيَوْمَ، عَشَاءً لَنَا لَذِيذًا",
    "segs": [
      { "ar": "إِذَنْ نَحْنُ نَأْكُلُ الشُّوفَانَ الْيَوْمَ", "uz": "demak, bugun suli yormasi yeymiz" },
      { "ar": "عَشَاءً لَنَا لَذِيذًا", "uz": "mazali kechki ovqatimiz sifatida" }
    ],
    "full_uz": "Demak, bugun suli yormasi yeymiz, mazali kechki ovqatimiz sifatida.",
    "note": null
  },
  {
    "num": 89,
    "time": "00:05:04,078 --> 00:05:06,030",
    "arabic": "رُبَّمَا لَدَيْنَا شَيْءٌ آخَرُ",
    "segs": null,
    "full_uz": "Balki bizda boshqa narsa bordir.",
    "note": null
  },
  {
    "num": 90,
    "time": "00:05:06,030 --> 00:05:11,837",
    "arabic": "وَلِمَاذَا شَيْءٌ آخَرُ؟ أَنْتُمَا مَنْ قَالَ إِنَّ الشُّوفَانَ مُفِيدٌ لِلصِّحَّةِ وَيَجْعَلُنَا أَقْوَى",
    "segs": [
      { "ar": "وَلِمَاذَا شَيْءٌ آخَرُ؟", "uz": "nega boshqa narsa kerak?" },
      { "ar": "أَنْتُمَا مَنْ قَالَ إِنَّ الشُّوفَانَ مُفِيدٌ لِلصِّحَّةِ وَيَجْعَلُنَا أَقْوَى", "uz": "suli yormasi foydali va bizni kuchli qiladi deb aytgan o'zlaringiz-ku" }
    ],
    "full_uz": "Nega boshqa narsa kerak? Suli yormasi foydali va bizni kuchli qiladi deb aytgan o'zlaringiz-ku.",
    "note": null
  },
  {
    "num": 91,
    "time": "00:05:11,837 --> 00:05:14,194",
    "arabic": "نَعَمْ، صَحِيحٌ، هَذَا مَا قُلْنَاهُ",
    "segs": null,
    "full_uz": "Ha, to'g'ri, biz shunday deganmiz.",
    "note": null
  },
  {
    "num": 92,
    "time": "00:05:14,194 --> 00:05:17,410",
    "arabic": "أَنَا سَعِيدٌ أَنَّ ابْنَنَا يُنْصِتُ بِانْتِبَاهٍ شَدِيدٍ",
    "segs": null,
    "full_uz": "Men o'g'limiz shu qadar diqqat bilan tinglayotganidan xursandman.",
    "note": null
  },
  {
    "num": 93,
    "time": "00:05:17,410 --> 00:05:22,452",
    "arabic": "هَذَا صَحِيحٌ",
    "segs": null,
    "full_uz": "Bu to'g'ri.",
    "note": null
  },
  {
    "num": 94,
    "time": "00:05:22,452 --> 00:05:24,389",
    "arabic": "صَحِيحٌ؟",
    "segs": null,
    "full_uz": "To'g'rimi?",
    "note": null
  },
  {
    "num": 95,
    "time": "00:05:24,389 --> 00:05:26,643",
    "arabic": "مَا هَذَا؟",
    "segs": null,
    "full_uz": "Bu nima?",
    "note": null
  },
  {
    "num": 96,
    "time": "00:05:26,643 --> 00:05:28,792",
    "arabic": "انْظُرْ، لَقَدْ وَجَدْتُ الْحِذَاءَ",
    "segs": null,
    "full_uz": "Qara, poyabzalni topdim.",
    "note": null
  },
  {
    "num": 97,
    "time": "00:05:28,792 --> 00:05:29,424",
    "arabic": "مَاذَا؟",
    "segs": null,
    "full_uz": "Nima?",
    "note": null
  },
  {
    "num": 98,
    "time": "00:05:29,424 --> 00:05:35,446",
    "arabic": "لَا شَيْءَ، أَكْمِلْ طَعَامَكَ وَلَا تُشَدِّدْ تَفْكِيرَكَ",
    "segs": [
      { "ar": "لَا شَيْءَ", "uz": "hech narsa" },
      { "ar": "أَكْمِلْ طَعَامَكَ وَلَا تُشَدِّدْ تَفْكِيرَكَ", "uz": "ovqatingni tugat va ko'p bosh qotirma" }
    ],
    "full_uz": "Hech narsa, ovqatingni tugat va ko'p bosh qotirma.",
    "note": null
  },
  {
    "num": 99,
    "time": "00:05:35,446 --> 00:05:37,502",
    "arabic": "عَلَيْكَ أَكْلُ هَذَا الشُّوفَانِ",
    "segs": null,
    "full_uz": "Sen bu suli yormasini yeyishing kerak.",
    "note": null
  },
  {
    "num": 100,
    "time": "00:05:37,502 --> 00:05:38,197",
    "arabic": "اتَّفَقْنَا؟",
    "segs": null,
    "full_uz": "Kelishdikmi?",
    "note": null
  },
  {
    "num": 101,
    "time": "00:05:38,197 --> 00:05:41,757",
    "arabic": "وَمَنْ لَا يُكْمِلْ طَبَقَهُ لَا يَحْصُلْ عَلَى أَيِّ حَلْوَى",
    "segs": [
      { "ar": "وَمَنْ لَا يُكْمِلْ طَبَقَهُ", "uz": "va o'z tarelkasini tugatmagan" },
      { "ar": "لَا يَحْصُلْ عَلَى أَيِّ حَلْوَى", "uz": "hech qanday shirinlik olmaydi" }
    ],
    "full_uz": "Va o'z tarelkasini tugatmagan hech qanday shirinlik olmaydi.",
    "note": null
  }
];
if (typeof module !== "undefined" && module.exports) {
  module.exports = lessons;
}