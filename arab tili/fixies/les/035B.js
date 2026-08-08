const lessons = [
  {
    "num": 1,
    "time": "00:00:33,246 --> 00:00:35,251",
    "arabic": "الْبُوصَلَةُ",
    "segs": null,
    "full_uz": "Kompas.",
    "note": null
  },
  {
    "num": 2,
    "time": "00:00:35,251 --> 00:00:44,827",
    "arabic": "الْجَمِيعُ إِلَى السَّطْحِ! حَاضِرٌ أَيُّهَا الرُّبَّانُ",
    "segs": [
      { "ar": "الْجَمِيعُ إِلَى السَّطْحِ", "uz": "hammangiz palubaga" },
      { "ar": "حَاضِرٌ أَيُّهَا الرُّبَّانُ", "uz": "xo'p bo'ladi, kapitan" }
    ],
    "full_uz": "Hammangiz palubaga! Xo'p bo'ladi, kapitan.",
    "note": null
  },
  {
    "num": 3,
    "time": "00:00:44,827 --> 00:00:47,876",
    "arabic": "لَا تُخْفُوا هَذِهِ الْأَخْشَابَ! سِيمْكَا، نُولِيكْ، مَا الَّذِي تَفْعَلَانِهِ؟",
    "segs": [
      { "ar": "لَا تُخْفُوا هَذِهِ الْأَخْشَابَ", "uz": "bu taxtalarni yashirmanglar" },
      { "ar": "سِيمْكَا، نُولِيكْ، مَا الَّذِي تَفْعَلَانِهِ", "uz": "Simka, Nolik, nima qilyapsizlar" }
    ],
    "full_uz": "Bu taxtalarni yashirmanglar! Simka, Nolik, nima qilyapsizlar?",
    "note": null
  },
  {
    "num": 4,
    "time": "00:00:47,876 --> 00:00:51,606",
    "arabic": "نَحْنُ لَسْنَا سِيمْكَا وَنُولِيكْ، نَحْنُ قُرْصَانَانِ شُجْعَانٌ أَيُّهَا الْبَحَّارُ",
    "segs": [
      { "ar": "نَحْنُ لَسْنَا سِيمْكَا وَنُولِيكْ", "uz": "biz Simka va Nolik emasmiz" },
      { "ar": "نَحْنُ قُرْصَانَانِ شُجْعَانٌ أَيُّهَا الْبَحَّارُ", "uz": "biz jasur qaroqchilarmiz, dengizchi" }
    ],
    "full_uz": "Biz Simka va Nolik emasmiz, biz jasur qaroqchilarmiz, dengizchi.",
    "note": null
  },
  {
    "num": 5,
    "time": "00:00:51,606 --> 00:00:55,190",
    "arabic": "أَجَلْ قُرْصَانَانِ! وَالْيَوْمَ سَنُبْحِرُ إِلَى بَعِيدٍ",
    "segs": [
      { "ar": "أَجَلْ قُرْصَانَانِ", "uz": "ha, qaroqchilarmiz" },
      { "ar": "وَالْيَوْمَ سَنُبْحِرُ إِلَى بَعِيدٍ", "uz": "va bugun uzoqlarga suzib ketamiz" }
    ],
    "full_uz": "Ha, qaroqchilarmiz! Va bugun uzoqlarga suzib ketamiz.",
    "note": null
  },
  {
    "num": 6,
    "time": "00:00:55,190 --> 00:01:00,012",
    "arabic": "هَلْ أَنْتَ مَعَنَا؟ بِلَا تَرَدُّدٍ! مَرْحَى",
    "segs": [
      { "ar": "هَلْ أَنْتَ مَعَنَا", "uz": "biz bilan bo'lasanmi" },
      { "ar": "بِلَا تَرَدُّدٍ! مَرْحَى", "uz": "ikkilanmasdan! Ura!" }
    ],
    "full_uz": "Biz bilan bo'lasanmi? Ikkilanmasdan! Ura!",
    "note": null
  },
  {
    "num": 7,
    "time": "00:01:00,012 --> 00:01:03,407",
    "arabic": "أَتَقْصِدِينَ لَا؟ لَا نَفْرَحُ؟",
    "segs": [
      { "ar": "أَتَقْصِدِينَ لَا", "uz": "yo'q demoqchimisan" },
      { "ar": "لَا نَفْرَحُ", "uz": "quvonmaymizmi" }
    ],
    "full_uz": "Yo'q demoqchimisan? Quvonmaymizmi?",
    "note": null
  },
  {
    "num": 8,
    "time": "00:01:03,407 --> 00:01:07,692",
    "arabic": "أَجَلْ صَحِيحٌ لَا يُمْكِنُكَ أَنْ تُبْحِرَ بِلَا اخْتِبَارٍ",
    "segs": [
      { "ar": "أَجَلْ صَحِيحٌ", "uz": "ha, to'g'ri" },
      { "ar": "لَا يُمْكِنُكَ أَنْ تُبْحِرَ بِلَا اخْتِبَارٍ", "uz": "sinovsiz suzib keta olmaysan" }
    ],
    "full_uz": "Ha, to'g'ri, sinovsiz suzib keta olmaysan.",
    "note": null
  },
  {
    "num": 9,
    "time": "00:01:07,692 --> 00:01:10,507",
    "arabic": "اذْهَبْ وَابْحَثْ عَنْ شَيْءٍ مُمَيَّزٍ",
    "segs": [
      { "ar": "اذْهَبْ", "uz": "bor" },
      { "ar": "وَابْحَثْ عَنْ شَيْءٍ مُمَيَّزٍ", "uz": "va o'ziga xos bir narsani qidir" }
    ],
    "full_uz": "Bor, va o'ziga xos bir narsani qidir.",
    "note": null
  },
  {
    "num": 10,
    "time": "00:01:10,507 --> 00:01:14,110",
    "arabic": "شَيْءٌ لَا يَسْتَطِيعُ أَيُّ بَحَّارٍ دُخُولَ الْبَحْرِ إِلَّا بِهِ",
    "segs": null,
    "full_uz": "Hech qanday dengizchi dengizga chiqmasdan turolmaydigan narsani.",
    "note": null
  },
  {
    "num": 11,
    "time": "00:01:14,110 --> 00:01:15,767",
    "arabic": "سَأَفْعَلُ لَكِنْ كَيْفَ؟",
    "segs": [
      { "ar": "سَأَفْعَلُ", "uz": "shunday qilaman" },
      { "ar": "لَكِنْ كَيْفَ", "uz": "lekin qanday qilib" }
    ],
    "full_uz": "Shunday qilaman, lekin qanday qilib?",
    "note": null
  },
  {
    "num": 12,
    "time": "00:01:15,767 --> 00:01:19,011",
    "arabic": "بِالْخَرِيطَةِ وَهِيَ هُنَاكَ",
    "segs": [
      { "ar": "بِالْخَرِيطَةِ", "uz": "xarita bilan" },
      { "ar": "وَهِيَ هُنَاكَ", "uz": "u ana u yerda" }
    ],
    "full_uz": "Xarita bilan, u ana u yerda.",
    "note": null
  },
  {
    "num": 13,
    "time": "00:01:19,011 --> 00:01:25,204",
    "arabic": "لَمْ أَرَ خَرِيطَةً بِهَذَا الصِّغَرِ فِي حَيَاتِي",
    "segs": null,
    "full_uz": "Hayotimda bunchalik kichik xaritani ko'rmagandim.",
    "note": null
  },
  {
    "num": 14,
    "time": "00:01:25,204 --> 00:01:27,249",
    "arabic": "لَا تَقُلْ عَنْهَا هَكَذَا",
    "segs": null,
    "full_uz": "Uni bunday deb aytma.",
    "note": null
  },
  {
    "num": 15,
    "time": "00:01:27,249 --> 00:01:29,404",
    "arabic": "اسْتَغْرَقَ رَسْمُهَا نِصْفَ سَاعَةٍ",
    "segs": null,
    "full_uz": "Uni chizish yarim soat vaqt oldi.",
    "note": null
  },
  {
    "num": 16,
    "time": "00:01:29,404 --> 00:01:32,372",
    "arabic": "مِنْ مَكَانِ وُقُوفِكَ الْآنَ",
    "segs": null,
    "full_uz": "Hozir turgan joyingdan boshlab.",
    "note": null
  },
  {
    "num": 17,
    "time": "00:01:32,372 --> 00:01:35,647",
    "arabic": "تَقْصِدُ مِنْ هُنَا؟",
    "segs": null,
    "full_uz": "Bu yerdan demoqchimisan?",
    "note": null
  },
  {
    "num": 18,
    "time": "00:01:35,647 --> 00:01:36,756",
    "arabic": "هَذَا صَحِيحٌ",
    "segs": null,
    "full_uz": "To'g'ri.",
    "note": null
  },
  {
    "num": 19,
    "time": "00:01:36,756 --> 00:01:39,346",
    "arabic": "أَوَّلًا اتَّجِهْ نَحْوَ الشَّمَالِ",
    "segs": null,
    "full_uz": "Avval shimolga qarab yo'l ol.",
    "note": null
  },
  {
    "num": 20,
    "time": "00:01:39,346 --> 00:01:41,456",
    "arabic": "حَتَّى تَجِدَ مَكَانًا",
    "segs": null,
    "full_uz": "Bir joyni topguningcha.",
    "note": null
  },
  {
    "num": 21,
    "time": "00:01:41,456 --> 00:01:44,258",
    "arabic": "لَحْظَةً لَكِنْ أَيْنَ الشَّمَالُ؟",
    "segs": [
      { "ar": "لَحْظَةً", "uz": "bir daqiqa" },
      { "ar": "لَكِنْ أَيْنَ الشَّمَالُ", "uz": "lekin shimol qayerda" }
    ],
    "full_uz": "Bir daqiqa, lekin shimol qayerda?",
    "note": null
  },
  {
    "num": 22,
    "time": "00:01:44,258 --> 00:01:46,278",
    "arabic": "فِي اتِّجَاهِ الْقُطْبِ الشَّمَالِيِّ",
    "segs": null,
    "full_uz": "Shimoliy qutb tomonda.",
    "note": null
  },
  {
    "num": 23,
    "time": "00:01:46,278 --> 00:01:48,820",
    "arabic": "حَيْثُ الْجَلِيدُ وَالدِّبَبَةُ",
    "segs": null,
    "full_uz": "Muz va ayiqlar bo'lgan tomonda.",
    "note": null
  },
  {
    "num": 24,
    "time": "00:01:48,820 --> 00:01:51,851",
    "arabic": "وَكَيْفَ سَأَعْلَمُ فِي أَيِّ اتِّجَاهٍ الْقُطْبُ الشَّمَالِيُّ؟",
    "segs": null,
    "full_uz": "Shimoliy qutb qaysi tomonda ekanini qanday bilaman?",
    "note": null
  },
  {
    "num": 25,
    "time": "00:01:51,851 --> 00:01:53,283",
    "arabic": "بِاسْتِعْمَالِ الْبُوصَلَةِ",
    "segs": null,
    "full_uz": "Kompasdan foydalanib.",
    "note": null
  },
  {
    "num": 26,
    "time": "00:01:53,283 --> 00:01:57,760",
    "arabic": "الْبُوصَلَةُ هِيَ جِهَازٌ يُسَاعِدُ الْبَحَّارَةَ",
    "segs": null,
    "full_uz": "Kompas — dengizchilarga yordam beruvchi asbob,",
    "note": null
  },
  {
    "num": 27,
    "time": "00:01:57,760 --> 00:01:59,623",
    "arabic": "عَلَى مَعْرِفَةِ الِاتِّجَاهِ الصَّحِيحِ",
    "segs": null,
    "full_uz": "to'g'ri yo'nalishni bilib olishlariga yordam beradi,",
    "note": null
  },
  {
    "num": 28,
    "time": "00:01:59,623 --> 00:02:00,936",
    "arabic": "الَّذِي يَسِيرُونَ فِيهِ",
    "segs": null,
    "full_uz": "qaysi tomonga yurishayotganini bilishlari uchun,",
    "note": null
  },
  {
    "num": 29,
    "time": "00:02:00,936 --> 00:02:02,731",
    "arabic": "سَوَاءٌ فِي الْبَحْرِ أَوِ الْجَوِّ",
    "segs": null,
    "full_uz": "dengizda bo'lsin yoki havoda.",
    "note": null
  },
  {
    "num": 30,
    "time": "00:02:02,731 --> 00:02:05,668",
    "arabic": "كَوْكَبُنَا يُشْبِهُ مِغْنَاطِيسًا كَبِيرًا",
    "segs": null,
    "full_uz": "Bizning sayyoramiz katta magnitga o'xshaydi,",
    "note": null
  },
  {
    "num": 31,
    "time": "00:02:05,668 --> 00:02:06,553",
    "arabic": "لَهُ قُطْبَانِ",
    "segs": null,
    "full_uz": "uning ikki qutbi bor —",
    "note": null
  },
  {
    "num": 32,
    "time": "00:02:06,553 --> 00:02:10,214",
    "arabic": "الْقُطْبُ الشَّمَالِيُّ وَالْقُطْبُ الْجَنُوبِيُّ",
    "segs": null,
    "full_uz": "shimoliy qutb va janubiy qutb.",
    "note": null
  },
  {
    "num": 33,
    "time": "00:02:10,214 --> 00:02:12,568",
    "arabic": "هَذَانِ الْقُطْبَانِ الْمِغْنَاطِيسِيَّانِ",
    "segs": null,
    "full_uz": "Mana shu ikki magnit qutb",
    "note": null
  },
  {
    "num": 34,
    "time": "00:02:12,568 --> 00:02:14,179",
    "arabic": "يَجْعَلَانِ إِبْرَةَ الْبُوصَلَةِ",
    "segs": null,
    "full_uz": "kompas ninasini",
    "note": null
  },
  {
    "num": 35,
    "time": "00:02:14,179 --> 00:02:15,858",
    "arabic": "تَتَّجِهُ اتِّجَاهًا صَحِيحًا",
    "segs": null,
    "full_uz": "to'g'ri yo'nalishga burg'iydi.",
    "note": null
  },
  {
    "num": 36,
    "time": "00:02:15,858 --> 00:02:17,176",
    "arabic": "تَتَمَغْنَطُ الْإِبْرَةُ",
    "segs": null,
    "full_uz": "Nina magnitlanadi,",
    "note": null
  },
  {
    "num": 37,
    "time": "00:02:17,176 --> 00:02:20,223",
    "arabic": "فَتَتَّجِهُ إِحْدَى النِّهَايَتَيْنِ إِلَى الشَّمَالِ دَائِمًا",
    "segs": null,
    "full_uz": "shunda uning bir uchi doim shimolga qaraydi,",
    "note": null
  },
  {
    "num": 38,
    "time": "00:02:20,223 --> 00:02:22,572",
    "arabic": "وَالْأُخْرَى إِلَى الْجَنُوبِ دَائِمًا",
    "segs": null,
    "full_uz": "ikkinchisi esa doim janubga qaraydi,",
    "note": null
  },
  {
    "num": 39,
    "time": "00:02:22,572 --> 00:02:24,131",
    "arabic": "كَمَا تُلَاحِظَانِ هُنَا",
    "segs": null,
    "full_uz": "mana bu yerda kuzatayotganingizdek.",
    "note": null
  },
  {
    "num": 40,
    "time": "00:02:24,131 --> 00:02:27,357",
    "arabic": "أَعْلَمُ هَذَا",
    "segs": null,
    "full_uz": "Buni bilaman.",
    "note": null
  },
  {
    "num": 41,
    "time": "00:02:27,357 --> 00:02:29,595",
    "arabic": "لَكِنْ لَا أَرَى أَيَّ بُوصَلَةٍ هُنَا",
    "segs": null,
    "full_uz": "Lekin bu yerda hech qanday kompas ko'rmayapman.",
    "note": null
  },
  {
    "num": 42,
    "time": "00:02:29,595 --> 00:02:31,864",
    "arabic": "إِذَنْ لِنَصْنَعْ وَاحِدَةً بِأَنْفُسِنَا",
    "segs": null,
    "full_uz": "Unda o'zimiz bitta yasaylik.",
    "note": null
  },
  {
    "num": 43,
    "time": "00:02:31,864 --> 00:02:32,822",
    "arabic": "بِمَاذَا؟",
    "segs": null,
    "full_uz": "Nima bilan?",
    "note": null
  },
  {
    "num": 44,
    "time": "00:02:32,822 --> 00:02:34,538",
    "arabic": "يُمْكِنُنَا اسْتِعْمَالُ إِبْرَةٍ",
    "segs": null,
    "full_uz": "Bitta ninadan foydalansak bo'ladi,",
    "note": null
  },
  {
    "num": 45,
    "time": "00:02:34,538 --> 00:02:36,168",
    "arabic": "مَا عَلَيْنَا إِلَّا أَنْ نُمَغْنِطَهَا",
    "segs": null,
    "full_uz": "faqat uni magnitlashimiz kerak.",
    "note": null
  },
  {
    "num": 46,
    "time": "00:02:36,168 --> 00:02:38,303",
    "arabic": "وَكَيْفَ نَجْعَلُهَا تَدُورُ؟",
    "segs": null,
    "full_uz": "Va uni qanday aylantiramiz?",
    "note": null
  },
  {
    "num": 47,
    "time": "00:02:38,303 --> 00:02:39,910",
    "arabic": "فِي وِعَاءٍ مِنَ الْمَاءِ",
    "segs": null,
    "full_uz": "Suv solingan idishda.",
    "note": null
  },
  {
    "num": 48,
    "time": "00:03:12,519 --> 00:03:13,739",
    "arabic": "حَسَنًا هَذِهِ هِيَ",
    "segs": null,
    "full_uz": "Xo'p, mana bu.",
    "note": null
  },
  {
    "num": 49,
    "time": "00:03:13,739 --> 00:03:17,959",
    "arabic": "وَالْآنَ إِحْدَى النِّهَايَتَيْنِ تُشِيرُ إِلَى الشَّمَالِ وَالْأُخْرَى إِلَى الْجَنُوبِ",
    "segs": [
      { "ar": "وَالْآنَ إِحْدَى النِّهَايَتَيْنِ تُشِيرُ إِلَى الشَّمَالِ", "uz": "endi bir uchi shimolni ko'rsatyapti" },
      { "ar": "وَالْأُخْرَى إِلَى الْجَنُوبِ", "uz": "ikkinchisi esa janubni" }
    ],
    "full_uz": "Endi bir uchi shimolni, ikkinchisi esa janubni ko'rsatyapti.",
    "note": null
  },
  {
    "num": 50,
    "time": "00:03:17,959 --> 00:03:19,819",
    "arabic": "لَكِنْ أَيُّهُمَا الشَّمَالُ؟",
    "segs": null,
    "full_uz": "Lekin qaysi biri shimol?",
    "note": null
  },
  {
    "num": 51,
    "time": "00:03:19,819 --> 00:03:21,719",
    "arabic": "حَسَنًا أَرَى هُنَا نَافِذَةً",
    "segs": null,
    "full_uz": "Xo'p, mana bu yerda deraza ko'rinyapti.",
    "note": null
  },
  {
    "num": 52,
    "time": "00:03:21,719 --> 00:03:23,759",
    "arabic": "لَنْ يَكُونَ هَذَا الِاتِّجَاهَ الصَّحِيحَ",
    "segs": null,
    "full_uz": "Bu to'g'ri yo'nalish bo'lmaydi.",
    "note": null
  },
  {
    "num": 53,
    "time": "00:03:23,759 --> 00:03:25,359",
    "arabic": "إِذَنْ فَالشَّمَالُ مِنْ هُنَا",
    "segs": null,
    "full_uz": "Demak, shimol shu tomonda.",
    "note": null
  },
  {
    "num": 54,
    "time": "00:03:25,359 --> 00:03:28,280",
    "arabic": "لَقَدْ بَدَأَ هَذَا الْبَحَّارُ الصَّغِيرُ يُعْجِبُنِي",
    "segs": null,
    "full_uz": "Bu kichkina dengizchi menga yoqib qoldi.",
    "note": null
  },
  {
    "num": 55,
    "time": "00:03:28,280 --> 00:03:30,540",
    "arabic": "وَهَلْ دَعَوْتَنِي بِالصَّغِيرِ؟",
    "segs": null,
    "full_uz": "Meni kichkina deb chaqirdingmi?",
    "note": null
  },
  {
    "num": 56,
    "time": "00:03:30,540 --> 00:03:33,460",
    "arabic": "لَا إِنَّهَا طَرِيقَةُ الْقَرَاصِنَةِ فِي الْكَلَامِ",
    "segs": null,
    "full_uz": "Yo'q, bu qaroqchilarning gapirish odati, xolos.",
    "note": null
  },
  {
    "num": 57,
    "time": "00:03:33,460 --> 00:03:35,580",
    "arabic": "حَسَنًا إِذَنْ إِلَى الشَّمَالِ",
    "segs": null,
    "full_uz": "Xo'p, unda shimolga.",
    "note": null
  },
  {
    "num": 58,
    "time": "00:03:35,580 --> 00:03:41,380",
    "arabic": "أَوَّلًا اذْهَبْ إِلَى الشَّمَالِ حَتَّى تَرَى وَحْشًا نَائِمًا",
    "segs": [
      { "ar": "أَوَّلًا اذْهَبْ إِلَى الشَّمَالِ", "uz": "avval shimolga bor" },
      { "ar": "حَتَّى تَرَى وَحْشًا نَائِمًا", "uz": "uxlayotgan yirtqichni ko'rguningcha" }
    ],
    "full_uz": "Avval shimolga bor, uxlayotgan yirtqichni ko'rguningcha.",
    "note": null
  },
  {
    "num": 59,
    "time": "00:03:41,380 --> 00:03:45,740",
    "arabic": "يَا صَدِيقِي أَرَى وَحْشًا فِي الْأُفُقِ دَعْهُ يَفْعَلُهَا وَحْدَهُ",
    "segs": [
      { "ar": "يَا صَدِيقِي أَرَى وَحْشًا فِي الْأُفُقِ", "uz": "do'stim, ufqda bir yirtqich ko'ryapman" },
      { "ar": "دَعْهُ يَفْعَلُهَا وَحْدَهُ", "uz": "uni yolg'iz o'zi qila qolsin" }
    ],
    "full_uz": "Do'stim, ufqda bir yirtqich ko'ryapman, uni yolg'iz o'zi qila qolsin.",
    "note": null
  },
  {
    "num": 60,
    "time": "00:03:45,740 --> 00:03:52,440",
    "arabic": "وَالْآنَ اسْتَدِرْ إِلَى الْيَسَارِ وَامْشِ ثَلَاثَمِائَةِ خَطْوَةٍ",
    "segs": [
      { "ar": "وَالْآنَ اسْتَدِرْ إِلَى الْيَسَارِ", "uz": "endi chapga burul" },
      { "ar": "وَامْشِ ثَلَاثَمِائَةِ خَطْوَةٍ", "uz": "va uch yuz qadam yur" }
    ],
    "full_uz": "Endi chapga burul va uch yuz qadam yur.",
    "note": null
  },
  {
    "num": 61,
    "time": "00:03:52,440 --> 00:03:53,400",
    "arabic": "ثَلَاثُمِائَةٍ؟",
    "segs": null,
    "full_uz": "Uch yuzmi?",
    "note": null
  },
  {
    "num": 62,
    "time": "00:03:53,400 --> 00:03:55,140",
    "arabic": "نَعَمْ عَدَدْتُهَا بِنَفْسِي",
    "segs": null,
    "full_uz": "Ha, o'zim sanaganman.",
    "note": null
  },
  {
    "num": 63,
    "time": "00:03:55,140 --> 00:03:58,759",
    "arabic": "آهْ، حَسَنًا، هَذَا يَعْنِي أَنَّنِي سَأَمْشِي",
    "segs": [
      { "ar": "آهْ، حَسَنًا", "uz": "voy, xo'p" },
      { "ar": "هَذَا يَعْنِي أَنَّنِي سَأَمْشِي", "uz": "demak, men yuraman" }
    ],
    "full_uz": "Voy, xo'p, demak, men yuraman:",
    "note": null
  },
  {
    "num": 64,
    "time": "00:03:58,759 --> 00:04:02,199",
    "arabic": "وَاحِدٌ، اثْنَانِ، ثَلَاثَةٌ",
    "segs": null,
    "full_uz": "bir, ikki, uch...",
    "note": null
  },
  {
    "num": 65,
    "time": "00:04:02,199 --> 00:04:07,919",
    "arabic": "وَالْآنَ إِلَى الْأَمَامِ مُبَاشَرَةً حَتَّى تَصِلَ إِلَى الشَّجَرَةِ الْعِمْلَاقَةِ",
    "segs": [
      { "ar": "وَالْآنَ إِلَى الْأَمَامِ مُبَاشَرَةً", "uz": "endi to'g'ridan-to'g'ri oldinga" },
      { "ar": "حَتَّى تَصِلَ إِلَى الشَّجَرَةِ الْعِمْلَاقَةِ", "uz": "ulkan daraxtga yetguningcha" }
    ],
    "full_uz": "Endi to'g'ridan-to'g'ri oldinga, ulkan daraxtga yetguningcha.",
    "note": null
  },
  {
    "num": 66,
    "time": "00:04:07,919 --> 00:04:12,139",
    "arabic": "هَهَهْ، أَتُسَمِّي هَذِهِ شَجَرَةً؟",
    "segs": null,
    "full_uz": "Xa-xa, buni daraxt deb ataysanmi?",
    "note": null
  },
  {
    "num": 67,
    "time": "00:04:12,139 --> 00:04:17,319",
    "arabic": "وَاوْ، مُذْهِلٌ",
    "segs": null,
    "full_uz": "Voy, hayratlanarli.",
    "note": null
  },
  {
    "num": 68,
    "time": "00:04:17,319 --> 00:04:21,039",
    "arabic": "لَا أُصَدِّقُ عَيْنَيَّ بُوصَلَةُ سَفِينَةٍ حَقِيقِيَّةٌ",
    "segs": [
      { "ar": "لَا أُصَدِّقُ عَيْنَيَّ", "uz": "ko'zlarimga ishonmayapman" },
      { "ar": "بُوصَلَةُ سَفِينَةٍ حَقِيقِيَّةٌ", "uz": "haqiqiy kema kompasi" }
    ],
    "full_uz": "Ko'zlarimga ishonmayapman, haqiqiy kema kompasi ekan.",
    "note": null
  },
  {
    "num": 69,
    "time": "00:04:21,039 --> 00:04:23,219",
    "arabic": "إِنَّهَا تُدْعَى أَيْضًا بِالْبُوصَلَةِ الْبَحْرِيَّةِ",
    "segs": null,
    "full_uz": "U dengiz kompasi deb ham ataladi.",
    "note": null
  },
  {
    "num": 70,
    "time": "00:04:23,219 --> 00:04:31,579",
    "arabic": "كَانَ اخْتِرَاعُ أَوَّلِ بُوصَلَةٍ قَبْلَ أَكْثَرَ مِنْ أَلْفِ سَنَةٍ فِي الصِّينِ الْقَدِيمَةِ",
    "segs": null,
    "full_uz": "Birinchi kompas ming yildan ko'proq oldin qadimgi Xitoyda ixtiro qilingan.",
    "note": null
  },
  {
    "num": 71,
    "time": "00:04:31,579 --> 00:04:35,419",
    "arabic": "وَبِمُسَاعَدَتِهَا اسْتَطَاعَ الصِّينِيُّونَ الْقُدَمَاءُ السَّفَرَ فِي الصَّحْرَاءِ",
    "segs": null,
    "full_uz": "Uning yordamida qadimgi xitoyliklar sahroda safar qilishlari mumkin bo'lgan.",
    "note": null
  },
  {
    "num": 72,
    "time": "00:04:35,419 --> 00:04:38,839",
    "arabic": "وَبَعْدَ مِئَتَيْ سَنَةٍ ظَهَرَتِ الْبُوصَلَةُ فِي أُورُوبَّا",
    "segs": null,
    "full_uz": "Ikki yuz yildan keyin kompas Yevropada paydo bo'lgan,",
    "note": null
  },
  {
    "num": 73,
    "time": "00:04:38,839 --> 00:04:43,699",
    "arabic": "لَا أَحَدَ يَعْلَمُ مَا إِنْ كَانَ الْأُورُوبِّيُّونَ اخْتَرَعُوهَا بِأَنْفُسِهِمْ أَوْ أَخَذُوهَا مِنَ الصِّينِ",
    "segs": [
      { "ar": "لَا أَحَدَ يَعْلَمُ مَا إِنْ كَانَ الْأُورُوبِّيُّونَ اخْتَرَعُوهَا بِأَنْفُسِهِمْ", "uz": "yevropaliklar uni o'zlari ixtiro qilishganmi" },
      { "ar": "أَوْ أَخَذُوهَا مِنَ الصِّينِ", "uz": "yoki Xitoydan olishganmi, hech kim bilmaydi" }
    ],
    "full_uz": "yevropaliklar uni o'zlari ixtiro qilishganmi yoki Xitoydan olishganmi, hech kim bilmaydi.",
    "note": null
  },
  {
    "num": 74,
    "time": "00:04:43,699 --> 00:04:51,099",
    "arabic": "لَكِنَّ الْأَكِيدَ يَا أَعِزَّائِي أَنَّ الْفِيكْسِزَ يَتَذَكَّرُونَ شَكْلَ الْبُوصَلَاتِ الْأُولَى فِي التَّارِيخِ",
    "segs": [
      { "ar": "لَكِنَّ الْأَكِيدَ يَا أَعِزَّائِي", "uz": "lekin, azizlarim, aniq narsa shuki" },
      { "ar": "أَنَّ الْفِيكْسِزَ يَتَذَكَّرُونَ شَكْلَ الْبُوصَلَاتِ الْأُولَى فِي التَّارِيخِ", "uz": "fiksiyalar tarixdagi ilk kompaslarning ko'rinishini eslashadi" }
    ],
    "full_uz": "Lekin, azizlarim, aniq narsa shuki, fiksiyalar tarixdagi ilk kompaslarning ko'rinishini eslashadi.",
    "note": null
  },
  {
    "num": 75,
    "time": "00:04:51,099 --> 00:04:57,600",
    "arabic": "وَقَدْ كَانَتْ أَوَّلُ بُوصَلَةٍ مَصْنُوعَةً مِنْ إِبْرَةٍ مُمَغْنَطَةٍ عَلَى جِسْمٍ طَافٍ فِي وِعَاءٍ فِيهِ مَاءٌ",
    "segs": null,
    "full_uz": "Birinchi kompas suv solingan idishda suzib turgan jismga o'rnatilgan magnitlangan ninadan yasalgan edi.",
    "note": null
  },
  {
    "num": 76,
    "time": "00:04:57,600 --> 00:05:01,860",
    "arabic": "ثُمَّ وُضِعَتِ الْإِبْرَةُ عَلَى رَأْسِ مِسْمَارٍ يَسْمَحُ لَهَا بِالدَّوَرَانِ بِحُرِّيَّةٍ",
    "segs": null,
    "full_uz": "Keyin nina erkin aylanishiga imkon beruvchi mix boshiga qo'yildi.",
    "note": null
  },
  {
    "num": 77,
    "time": "00:05:01,860 --> 00:05:05,000",
    "arabic": "وَلِأَنَّ إِبْرَةَ الْبُوصَلَةِ تُشِيرُ دَوْمًا إِلَى الشَّمَالِ",
    "segs": null,
    "full_uz": "Kompas ninasi doim shimolni ko'rsatgani uchun,",
    "note": null
  },
  {
    "num": 78,
    "time": "00:05:05,000 --> 00:05:09,300",
    "arabic": "يَسْتَطِيعُ الْبَحَّارُ بِسُهُولَةٍ أَنْ يَعْلَمَ إِلَى أَيِّ اتِّجَاهٍ يُدِيرُ سَفِينَتَهُ",
    "segs": null,
    "full_uz": "dengizchi kemasini qaysi tomonga burishi kerakligini osongina bilib olar edi.",
    "note": null
  },
  {
    "num": 79,
    "time": "00:05:09,300 --> 00:05:12,920",
    "arabic": "إِذَا أَرَادَ الذَّهَابَ إِلَى الشَّمَالِ يَتْبَعُ الْإِبْرَةَ إِلَى الشَّمَالِ",
    "segs": null,
    "full_uz": "Agar shimolga borishni istasa, ninani kuzatib shimolga boradi,",
    "note": null
  },
  {
    "num": 80,
    "time": "00:05:12,920 --> 00:05:16,260",
    "arabic": "وَإِنْ أَرَادَ الِاتِّجَاهَ جَنُوبًا ذَهَبَ فِي الِاتِّجَاهِ الْآخَرِ",
    "segs": null,
    "full_uz": "agar janubga borishni istasa, teskari tomonga yo'l oladi.",
    "note": null
  },
  {
    "num": 81,
    "time": "00:05:16,260 --> 00:05:20,900",
    "arabic": "أَحْضَرَهَا أَبُوكَ مَعَهُ بِالْأَمْسِ مَسَاءً مِنْ عَمَلِهِ",
    "segs": null,
    "full_uz": "Dadang uni kecha kechqurun ishidan olib kelgan edi.",
    "note": null
  },
  {
    "num": 82,
    "time": "00:05:20,900 --> 00:05:22,479",
    "arabic": "وَقَدْ كُنْتَ نَائِمًا",
    "segs": null,
    "full_uz": "Sen esa uxlab qolgan eding.",
    "note": null
  },
  {
    "num": 83,
    "time": "00:05:22,479 --> 00:05:25,599",
    "arabic": "لَحْظَةً أُرِيدُ أَنْ أَتَحَقَّقَ شَيْئًا",
    "segs": null,
    "full_uz": "Bir daqiqa, bir narsani tekshirib ko'rmoqchiman.",
    "note": null
  },
  {
    "num": 84,
    "time": "00:05:25,599 --> 00:05:26,399",
    "arabic": "مَا الْأَمْرُ؟",
    "segs": null,
    "full_uz": "Nima gap?",
    "note": null
  },
  {
    "num": 85,
    "time": "00:05:26,399 --> 00:05:35,479",
    "arabic": "أَجَلْ مُتَطَابِقَتَانِ",
    "segs": null,
    "full_uz": "Ha, ikkalasi bir xil.",
    "note": null
  },
  {
    "num": 86,
    "time": "00:05:35,479 --> 00:05:37,639",
    "arabic": "بِلَا رَيْبٍ مُتَطَابِقَتَانِ",
    "segs": null,
    "full_uz": "Shubhasiz, ikkalasi bir xil.",
    "note": null
  },
  {
    "num": 87,
    "time": "00:05:37,639 --> 00:05:39,599",
    "arabic": "وَإِلَّا لَمَا وَصَلْتَ إِلَى هُنَا",
    "segs": null,
    "full_uz": "Aks holda bu yerga yetib kelmasding.",
    "note": null
  },
  {
    "num": 88,
    "time": "00:05:39,599 --> 00:05:42,319",
    "arabic": "لَقَدِ انْتَهَى عَمَلُ الْإِبْرَةِ سَأُعِيدُهَا",
    "segs": [
      { "ar": "لَقَدِ انْتَهَى عَمَلُ الْإِبْرَةِ", "uz": "ninaning ishi tugadi" },
      { "ar": "سَأُعِيدُهَا", "uz": "uni qaytarib qo'yaman" }
    ],
    "full_uz": "Ninaning ishi tugadi, uni qaytarib qo'yaman.",
    "note": null
  },
  {
    "num": 89,
    "time": "00:05:42,319 --> 00:05:44,699",
    "arabic": "أَوَّلًا امْشِ أَلْفَ خَطْوَةٍ جَنُوبًا",
    "segs": null,
    "full_uz": "Avval ming qadam janubga yur.",
    "note": null
  },
  {
    "num": 90,
    "time": "00:05:44,699 --> 00:05:46,120",
    "arabic": "شُكْرًا حَسْبَ خَطَوَاتِكَ",
    "segs": null,
    "full_uz": "Rahmat, sening qadamlaring bo'yicha.",
    "note": null
  }
];
if (typeof module !== "undefined" && module.exports) {
  module.exports = lessons;
}
