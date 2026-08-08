const lessons = [
  {
    "num": 1,
    "time": "00:00:31,532 --> 00:00:38,073",
    "arabic": "كَاشِفُ الْكَذِبِ",
    "segs": null,
    "full_uz": "Yolg'on detektori",
    "note": "كَاشِفُ الْكَذِبِ — yolg'on detektori. Bu yerda epizod nomi sifatida ishlatilgan."
  },
  {
    "num": 2,
    "time": "00:00:38,073 --> 00:00:40,822",
    "arabic": "سِيمْكَا",
    "segs": null,
    "full_uz": "Simka!",
    "note": null
  },
  {
    "num": 3,
    "time": "00:00:40,822 --> 00:00:44,338",
    "arabic": "هُدُوءٌ، فَأَنَا فِي تَحَدٍّ الْآنَ",
    "segs": [
      { "ar": "هُدُوءٌ", "uz": "jim" },
      { "ar": "فَأَنَا فِي تَحَدٍّ الْآنَ", "uz": "men hozir bahsdaman" }
    ],
    "full_uz": "Jim, men hozir bahsdaman.",
    "note": null
  },
  {
    "num": 4,
    "time": "00:00:44,338 --> 00:00:45,631",
    "arabic": "مَنْ تَتَحَدَّيْنَ؟",
    "segs": null,
    "full_uz": "Kim bilan bahslashyapsan?",
    "note": null
  },
  {
    "num": 5,
    "time": "00:00:45,631 --> 00:00:46,920",
    "arabic": "إِنَّهُ تُوم",
    "segs": null,
    "full_uz": "U Tom bilan.",
    "note": null
  },
  {
    "num": 6,
    "time": "00:00:46,920 --> 00:00:52,008",
    "arabic": "لَقَدْ تَحَدَّيْتُهُ أَنَّهُ لَنْ يَسْتَطِيعَ الِامْتِنَاعَ عَنْ مُتَابَعَةِ التِّلْفَازِ ثَلَاثَةَ أَيَّامٍ",
    "segs": [
      { "ar": "لَقَدْ تَحَدَّيْتُهُ أَنَّهُ لَنْ يَسْتَطِيعَ الِامْتِنَاعَ", "uz": "men u o'zini tiya olmaydi deb bahslashdim" },
      { "ar": "عَنْ مُتَابَعَةِ التِّلْفَازِ ثَلَاثَةَ أَيَّامٍ", "uz": "uch kun televizor tomosha qilishdan" }
    ],
    "full_uz": "Men u uch kun televizor tomosha qilishdan o'zini tiya olmaydi deb bahslashdim.",
    "note": null
  },
  {
    "num": 7,
    "time": "00:00:52,008 --> 00:00:54,713",
    "arabic": "حَقًّا تَحَدَّيْتِهِ؟ هَلْ يُمْكِنُنِي مُشَارَكَتُهُ؟",
    "segs": [
      { "ar": "حَقًّا تَحَدَّيْتِهِ؟", "uz": "rostdan bahslashdingmi?" },
      { "ar": "هَلْ يُمْكِنُنِي مُشَارَكَتُهُ؟", "uz": "men ham qo'shilsam bo'ladimi?" }
    ],
    "full_uz": "Rostdan bahslashdingmi? Men ham qo'shilsam bo'ladimi?",
    "note": null
  },
  {
    "num": 8,
    "time": "00:00:54,713 --> 00:00:59,566",
    "arabic": "سِيمْكَا",
    "segs": null,
    "full_uz": "Simka!",
    "note": null
  },
  {
    "num": 9,
    "time": "00:00:59,566 --> 00:01:10,915",
    "arabic": "هَا هَا، أَمْسَكْتُ بِكَ",
    "segs": null,
    "full_uz": "Aha, ushladim seni.",
    "note": null
  },
  {
    "num": 10,
    "time": "00:01:10,915 --> 00:01:12,958",
    "arabic": "مَاذَا؟ مَنْ؟",
    "segs": null,
    "full_uz": "Nima? Kimni?",
    "note": null
  },
  {
    "num": 11,
    "time": "00:01:12,958 --> 00:01:16,166",
    "arabic": "لَقَدْ خَسِرْتَ يَا تُوم، لَا تُحَاوِلِ الْإِنْكَارَ",
    "segs": [
      { "ar": "لَقَدْ خَسِرْتَ يَا تُوم", "uz": "sen yutqazding, Tom" },
      { "ar": "لَا تُحَاوِلِ الْإِنْكَارَ", "uz": "inkor qilishga urinma" }
    ],
    "full_uz": "Sen yutqazding, Tom, inkor qilishga urinma.",
    "note": null
  },
  {
    "num": 12,
    "time": "00:01:16,166 --> 00:01:17,219",
    "arabic": "لَمْ أَخْسَرْ",
    "segs": null,
    "full_uz": "Men yutqazmadim.",
    "note": null
  },
  {
    "num": 13,
    "time": "00:01:17,219 --> 00:01:18,377",
    "arabic": "وَكَيْفَ ذَلِكَ؟",
    "segs": null,
    "full_uz": "Qanday qilib?",
    "note": null
  },
  {
    "num": 14,
    "time": "00:01:18,377 --> 00:01:19,919",
    "arabic": "هَذَا لِأَنَّنِي...",
    "segs": null,
    "full_uz": "Chunki men...",
    "note": null
  },
  {
    "num": 15,
    "time": "00:01:19,919 --> 00:01:23,437",
    "arabic": "أَنَا لَسْتُ صَدِيقَكُمْ تُوم",
    "segs": null,
    "full_uz": "Men sizning do'stingiz Tom emasman.",
    "note": null
  },
  {
    "num": 16,
    "time": "00:01:23,437 --> 00:01:24,059",
    "arabic": "مَاذَا؟",
    "segs": null,
    "full_uz": "Nima?",
    "note": null
  },
  {
    "num": 17,
    "time": "00:01:24,059 --> 00:01:26,501",
    "arabic": "فِي الْحَقِيقَةِ أَنَا شَقِيقُ تُوم",
    "segs": null,
    "full_uz": "Aslida men Tomning ukasiman.",
    "note": null
  },
  {
    "num": 18,
    "time": "00:01:26,501 --> 00:01:28,134",
    "arabic": "يَا لَهَا مِنْ كَذْبَةٍ كَبِيرَةٍ",
    "segs": null,
    "full_uz": "Naqadar katta yolg'on.",
    "note": null
  },
  {
    "num": 19,
    "time": "00:01:28,134 --> 00:01:30,353",
    "arabic": "إِنَّ تُوم لَيْسَ لَدَيْهِ أَيُّ أَخٍ",
    "segs": null,
    "full_uz": "Tomning hech qanday ukasi yo'q.",
    "note": null
  },
  {
    "num": 20,
    "time": "00:01:30,353 --> 00:01:32,094",
    "arabic": "كُنْتُ أَعْنِي ابْنَ خَالَتِهِ",
    "segs": null,
    "full_uz": "Men uning xolavachchasini nazarda tutgan edim.",
    "note": null
  },
  {
    "num": 21,
    "time": "00:01:32,094 --> 00:01:34,213",
    "arabic": "إِذَنْ لِمَاذَا شَكْلُكُمَا مُتَطَابِقٌ؟",
    "segs": null,
    "full_uz": "Unda nega sizlarning ko'rinishlaringiz bir xil?",
    "note": null
  },
  {
    "num": 22,
    "time": "00:01:34,213 --> 00:01:36,975",
    "arabic": "لِأَنَّ أُمِّي وَأُمَّهُ تَوْأَمَانِ",
    "segs": null,
    "full_uz": "Chunki mening onam va uning onasi egizak.",
    "note": null
  },
  {
    "num": 23,
    "time": "00:01:36,975 --> 00:01:38,377",
    "arabic": "وَمَا هُوَ اسْمُكَ؟",
    "segs": null,
    "full_uz": "Va sening isming nima?",
    "note": null
  },
  {
    "num": 24,
    "time": "00:01:38,377 --> 00:01:39,451",
    "arabic": "مَنْ أَنَا؟",
    "segs": null,
    "full_uz": "Kimman men?",
    "note": null
  },
  {
    "num": 25,
    "time": "00:01:39,451 --> 00:01:41,829",
    "arabic": "أَنَا اسْمِي جُون",
    "segs": null,
    "full_uz": "Mening ismim Jon.",
    "note": null
  },
  {
    "num": 26,
    "time": "00:01:41,829 --> 00:01:43,622",
    "arabic": "أَخْبِرَانِي مَنْ أَنْتُمَا؟",
    "segs": null,
    "full_uz": "Ayting-chi, sizlar kimsizlar?",
    "note": null
  },
  {
    "num": 27,
    "time": "00:01:43,622 --> 00:01:45,849",
    "arabic": "أَنْتَ تَعْلَمُ تَمَامًا مَنْ نَحْنُ",
    "segs": null,
    "full_uz": "Sen bizni juda yaxshi bilasan.",
    "note": null
  },
  {
    "num": 28,
    "time": "00:01:45,849 --> 00:01:49,385",
    "arabic": "هَذِهِ الْغُرْفَةُ جَمِيلَةٌ",
    "segs": null,
    "full_uz": "Bu xona chiroyli ekan.",
    "note": null
  },
  {
    "num": 29,
    "time": "00:01:49,385 --> 00:01:51,046",
    "arabic": "إِنَّهَا أَكْبَرُ مِنْ غُرْفَتِي",
    "segs": null,
    "full_uz": "U mening xonamdan kattaroq.",
    "note": null
  },
  {
    "num": 30,
    "time": "00:01:51,046 --> 00:01:53,538",
    "arabic": "لَا أُصَدِّقُكَ",
    "segs": null,
    "full_uz": "Men senga ishonmayapman.",
    "note": null
  },
  {
    "num": 31,
    "time": "00:01:53,538 --> 00:01:54,713",
    "arabic": "إِنَّكَ تَكْذِبُ",
    "segs": null,
    "full_uz": "Sen yolg'on gapiryapsan.",
    "note": null
  },
  {
    "num": 32,
    "time": "00:01:54,713 --> 00:01:55,698",
    "arabic": "وَمَا دَلِيلُكَ؟",
    "segs": null,
    "full_uz": "Dalilingiz nima?",
    "note": null
  },
  {
    "num": 33,
    "time": "00:01:55,698 --> 00:01:57,077",
    "arabic": "رُبَّمَا لَا أَكْذِبُ",
    "segs": null,
    "full_uz": "Balki men yolg'on gapirmayapman.",
    "note": null
  },
  {
    "num": 34,
    "time": "00:01:57,077 --> 00:01:59,271",
    "arabic": "هُنَاكَ طَرِيقَةٌ لِنَتَحَقَّقَ",
    "segs": null,
    "full_uz": "Buni tekshirishning yo'li bor.",
    "note": null
  },
  {
    "num": 35,
    "time": "00:01:59,271 --> 00:01:59,750",
    "arabic": "كَيْفَ؟",
    "segs": null,
    "full_uz": "Qanday?",
    "note": null
  },
  {
    "num": 36,
    "time": "00:01:59,750 --> 00:02:01,075",
    "arabic": "نَعَمْ، كَيْفَ؟",
    "segs": null,
    "full_uz": "Ha, qanday?",
    "note": null
  },
  {
    "num": 37,
    "time": "00:02:01,075 --> 00:02:03,916",
    "arabic": "بِاسْتِعْمَالِ كَاشِفِ الْكَذِبِ سَتَرَيَانِ",
    "segs": null,
    "full_uz": "Yolg'on detektoridan foydalanib, ko'rasizlar.",
    "note": null
  },
  {
    "num": 38,
    "time": "00:02:03,916 --> 00:02:13,572",
    "arabic": "إِنَّ كَاشِفَ الْكَذِبِ جِهَازٌ يُسْتَعْمَلُ لِلْمُسَاعَدَةِ عَلَى اكْتِشَافِ مَا إِنْ كَانَ شَخْصٌ مَا يَكْذِبُ أَمْ لَا",
    "segs": [
      { "ar": "إِنَّ كَاشِفَ الْكَذِبِ جِهَازٌ يُسْتَعْمَلُ لِلْمُسَاعَدَةِ عَلَى اكْتِشَافِ", "uz": "yolg'on detektori — aniqlashga yordam beruvchi qurilma" },
      { "ar": "مَا إِنْ كَانَ شَخْصٌ مَا يَكْذِبُ أَمْ لَا", "uz": "biror kishi yolg'on gapiryapti yoki yo'qligini" }
    ],
    "full_uz": "Yolg'on detektori — biror kishi yolg'on gapiryapti yoki yo'qligini aniqlashga yordam beruvchi qurilma.",
    "note": null
  },
  {
    "num": 39,
    "time": "00:02:13,572 --> 00:02:19,648",
    "arabic": "تَعْلَمَانِ أَنَّهُ عِنْدَمَا يَكْذِبُ شَخْصٌ مَا يَشْعُرُ بِبَعْضٍ مِنَ التَّوَتُّرِ كَهَذَا الصَّبِيِّ",
    "segs": [
      { "ar": "تَعْلَمَانِ أَنَّهُ عِنْدَمَا يَكْذِبُ شَخْصٌ مَا", "uz": "bilasizlarki, biror kishi yolg'on gapirganda" },
      { "ar": "يَشْعُرُ بِبَعْضٍ مِنَ التَّوَتُّرِ كَهَذَا الصَّبِيِّ", "uz": "mana shu bola kabi bir oz asabiylashadi" }
    ],
    "full_uz": "Bilasizlarki, biror kishi yolg'on gapirganda, mana shu bola kabi bir oz asabiylashadi.",
    "note": null
  },
  {
    "num": 40,
    "time": "00:02:19,648 --> 00:02:22,102",
    "arabic": "حَتَّى لَوْ لَمْ يَبْدُ وَاضِحًا",
    "segs": null,
    "full_uz": "Garchi bu aniq ko'rinmasa ham.",
    "note": null
  },
  {
    "num": 41,
    "time": "00:02:22,102 --> 00:02:25,808",
    "arabic": "فَنَحْنُ نَعْلَمُ أَنَّ نَبَضَاتِ قَلْبِ الْكَاذِبِ تَتَسَارَعُ",
    "segs": null,
    "full_uz": "Biz bilamizki, yolg'onchining yurak urishi tezlashadi.",
    "note": null
  },
  {
    "num": 42,
    "time": "00:02:25,808 --> 00:02:27,862",
    "arabic": "وَتَنَفُّسُهُ يَتَغَيَّرُ",
    "segs": null,
    "full_uz": "Va uning nafasi o'zgaradi.",
    "note": null
  },
  {
    "num": 43,
    "time": "00:02:27,862 --> 00:02:29,578",
    "arabic": "وَيَبْدَأُ بِالتَّعَرُّقِ",
    "segs": null,
    "full_uz": "Va u terlay boshlaydi.",
    "note": null
  },
  {
    "num": 44,
    "time": "00:02:29,578 --> 00:02:32,878",
    "arabic": "يَسْتَطِيعُ كَاشِفُ الْكَذِبِ الْتِقَاطَ مِثْلِ هَذِهِ الْأَشْيَاءِ",
    "segs": null,
    "full_uz": "Yolg'on detektori shunga o'xshash narsalarni ilg'ay oladi.",
    "note": null
  },
  {
    "num": 45,
    "time": "00:02:32,878 --> 00:02:36,779",
    "arabic": "وَهَكَذَا يُمْكِنُ لِكَاشِفِ الْكَذِبِ الْعُثُورُ عَلَى الْحَقِيقَةِ",
    "segs": null,
    "full_uz": "Shunday qilib, yolg'on detektori haqiqatni topa oladi.",
    "note": null
  },
  {
    "num": 46,
    "time": "00:02:36,779 --> 00:02:40,166",
    "arabic": "لَيْسَ لَدَيْكُمَا كَاشِفُ كَذِبٍ",
    "segs": null,
    "full_uz": "Sizlarda yolg'on detektori yo'q-ku.",
    "note": null
  },
  {
    "num": 47,
    "time": "00:02:40,166 --> 00:02:42,889",
    "arabic": "لَكِنَّنَا نَعْلَمُ كَيْفَ يَعْمَلُ، أَلَيْسَ كَذَلِكَ؟",
    "segs": [
      { "ar": "لَكِنَّنَا نَعْلَمُ كَيْفَ يَعْمَلُ", "uz": "lekin biz uning qanday ishlashini bilamiz" },
      { "ar": "أَلَيْسَ كَذَلِكَ؟", "uz": "shunday emasmi?" }
    ],
    "full_uz": "Lekin biz uning qanday ishlashini bilamiz, shunday emasmi?",
    "note": null
  },
  {
    "num": 48,
    "time": "00:02:42,889 --> 00:02:45,590",
    "arabic": "أَمْ إِنَّكَ خَائِفٌ يَا تُوم؟",
    "segs": null,
    "full_uz": "Yoki qo'rqyapsanmi, Tom?",
    "note": null
  },
  {
    "num": 49,
    "time": "00:02:45,590 --> 00:02:52,094",
    "arabic": "لِمَاذَا تَضَعِينَ هَذَا؟",
    "segs": null,
    "full_uz": "Buni nega taqib qo'yyapsan?",
    "note": null
  },
  {
    "num": 50,
    "time": "00:02:52,094 --> 00:02:53,978",
    "arabic": "لِأَسْمَعَ نَبَضَاتِ قَلْبِكَ",
    "segs": null,
    "full_uz": "Yurak urishingni eshitish uchun.",
    "note": null
  },
  {
    "num": 51,
    "time": "00:02:53,978 --> 00:02:54,924",
    "arabic": "وَلِمَاذَا ذَلِكَ؟",
    "segs": null,
    "full_uz": "Nega bunday?",
    "note": null
  },
  {
    "num": 52,
    "time": "00:02:54,924 --> 00:02:58,577",
    "arabic": "كَيْ أَسْتَطِيعَ قِرَاءَةَ سُرْعَةِ نَبَضَاتِ قَلْبِكَ",
    "segs": null,
    "full_uz": "Yurak urishing tezligini o'qiy olishim uchun.",
    "note": null
  },
  {
    "num": 53,
    "time": "00:02:58,577 --> 00:03:00,789",
    "arabic": "وَنُولِيك",
    "segs": null,
    "full_uz": "Nolik esa —",
    "note": null
  },
  {
    "num": 54,
    "time": "00:03:00,789 --> 00:03:06,312",
    "arabic": "سَيُرَاقِبُ مُعَدَّلَ طَرْفِ عَيْنَيْكَ",
    "segs": null,
    "full_uz": "ko'zingning pirpirash tezligini kuzatadi.",
    "note": null
  },
  {
    "num": 55,
    "time": "00:03:06,312 --> 00:03:08,342",
    "arabic": "وَمَاذَا تَفْعَلِينَ بِالْبَيْضَةِ؟",
    "segs": null,
    "full_uz": "Tuxum bilan nima qilyapsan?",
    "note": null
  },
  {
    "num": 56,
    "time": "00:03:08,342 --> 00:03:10,893",
    "arabic": "إِنَّهَا طَرِيقَةٌ إِفْرِيقِيَّةٌ قَدِيمَةٌ",
    "segs": null,
    "full_uz": "Bu qadimiy afrika usuli.",
    "note": null
  },
  {
    "num": 57,
    "time": "00:03:10,893 --> 00:03:14,309",
    "arabic": "إِنْ كُنْتَ تَكْذِبُ فَسَتَضْغَطُ يَدُكَ الْبَيْضَةَ تِلْقَائِيًّا",
    "segs": [
      { "ar": "إِنْ كُنْتَ تَكْذِبُ", "uz": "agar sen yolg'on gapirsang" },
      { "ar": "فَسَتَضْغَطُ يَدُكَ الْبَيْضَةَ تِلْقَائِيًّا", "uz": "qo'ling avtomatik ravishda tuxumni siqadi" }
    ],
    "full_uz": "Agar sen yolg'on gapirsang, qo'ling avtomatik ravishda tuxumni siqadi.",
    "note": null
  },
  {
    "num": 58,
    "time": "00:03:14,309 --> 00:03:17,193",
    "arabic": "وَسَتَنْكَسِرُ الْبَيْضَةُ وَنَكْشِفُ كَذِبَكَ",
    "segs": null,
    "full_uz": "Va tuxum sinadi va yolg'oningni fosh qilamiz.",
    "note": null
  },
  {
    "num": 59,
    "time": "00:03:17,193 --> 00:03:19,390",
    "arabic": "وَهَذِهِ الْبَيْضَةُ لَنْ تَنْكَسِرَ",
    "segs": null,
    "full_uz": "Va bu tuxum sinmaydi.",
    "note": null
  },
  {
    "num": 60,
    "time": "00:03:19,390 --> 00:03:21,672",
    "arabic": "سَنُرَاقِبُ وَنَرَى",
    "segs": null,
    "full_uz": "Kuzatib ko'ramiz.",
    "note": null
  },
  {
    "num": 61,
    "time": "00:03:21,672 --> 00:03:29,071",
    "arabic": "حَاوَلَ الْبَشَرُ عَلَى مَرِّ الْعُصُورِ ابْتِكَارَ طَرَائِقَ عِدَّةٍ لِكَشْفِ الْكَذِبِ",
    "segs": null,
    "full_uz": "Odamlar asrlar davomida yolg'onni aniqlash uchun turli usullar ixtiro qilishga harakat qilishgan.",
    "note": null
  },
  {
    "num": 62,
    "time": "00:03:29,071 --> 00:03:34,057",
    "arabic": "مَثَلًا فِي الصِّينِ الْقَدِيمَةِ كَانُوا يَضَعُونَ الْأُرْزَ الْجَافَّ فِي فَمِ الشَّخْصِ",
    "segs": null,
    "full_uz": "Masalan, qadimgi Xitoyda odamning og'ziga quruq guruch solishar edi.",
    "note": null
  },
  {
    "num": 63,
    "time": "00:03:34,057 --> 00:03:36,761",
    "arabic": "فِي أَثْنَاءِ إِخْبَارِهِ بِالْجَرَائِمِ الَّتِي ارْتَكَبَهَا",
    "segs": null,
    "full_uz": "U sodir etgan jinoyatlar haqida gapirayotgan vaqtida.",
    "note": null
  },
  {
    "num": 64,
    "time": "00:03:36,761 --> 00:03:38,682",
    "arabic": "ثُمَّ يَنْظُرُونَ إِلَى الْأُرْزِ",
    "segs": null,
    "full_uz": "Keyin guruchga qarashardi.",
    "note": null
  },
  {
    "num": 65,
    "time": "00:03:38,682 --> 00:03:43,290",
    "arabic": "فَإِنْ بَقِيَ الْأُرْزُ جَافًّا فَإِنَّ الشَّخْصَ يَكُونُ مُدَانًا بِالْجَرِيمَةِ",
    "segs": [
      { "ar": "فَإِنْ بَقِيَ الْأُرْزُ جَافًّا", "uz": "agar guruch quruq qolsa" },
      { "ar": "فَإِنَّ الشَّخْصَ يَكُونُ مُدَانًا بِالْجَرِيمَةِ", "uz": "o'sha odam jinoyatda ayblanardi" }
    ],
    "full_uz": "Agar guruch quruq qolsa, o'sha odam jinoyatda ayblanardi.",
    "note": null
  },
  {
    "num": 66,
    "time": "00:03:43,290 --> 00:03:48,669",
    "arabic": "أَمَّا فِي الْهِنْدِ فَكَانَ عَلَى الْمُتَّهَمِ قَرْعُ صَنْجَةٍ فِي أَثْنَاءِ إِجَابَةِ الْقَاضِي",
    "segs": [
      { "ar": "أَمَّا فِي الْهِنْدِ", "uz": "Hindistonda esa" },
      { "ar": "فَكَانَ عَلَى الْمُتَّهَمِ قَرْعُ صَنْجَةٍ فِي أَثْنَاءِ إِجَابَةِ الْقَاضِي", "uz": "ayblanuvchi sudyaga javob berayotganda qo'ng'iroqcha chalishi kerak edi" }
    ],
    "full_uz": "Hindistonda esa ayblanuvchi sudyaga javob berayotganda qo'ng'iroqcha chalishi kerak edi.",
    "note": null
  },
  {
    "num": 67,
    "time": "00:03:48,669 --> 00:03:54,678",
    "arabic": "فَإِنْ بَدَأَ بِالْقَرْعِ بِصَوْتٍ أَعْلَى فَإِنَّهُ يَدُلُّ عَلَى أَنَّهُ يُحَاوِلُ أَنْ يُخْفِيَ الْحَقِيقَةَ",
    "segs": [
      { "ar": "فَإِنْ بَدَأَ بِالْقَرْعِ بِصَوْتٍ أَعْلَى", "uz": "agar u balandroq ovozda chala boshlasa" },
      { "ar": "فَإِنَّهُ يَدُلُّ عَلَى أَنَّهُ يُحَاوِلُ أَنْ يُخْفِيَ الْحَقِيقَةَ", "uz": "bu haqiqatni yashirishga harakat qilayotganidan dalolat berardi" }
    ],
    "full_uz": "Agar u balandroq ovozda chala boshlasa, bu uning haqiqatni yashirishga harakat qilayotganidan dalolat berardi.",
    "note": null
  },
  {
    "num": 68,
    "time": "00:03:54,678 --> 00:04:01,866",
    "arabic": "وَفِي أُورُوبَّا إِنِ اتَّهَمَ فَارِسًا آخَرَ بِالْكَذِبِ كَانَا يَخُوضَانِ مَعْرَكَةً بَيْنَهُمَا",
    "segs": null,
    "full_uz": "Yevropada esa, agar bir ritsar boshqasini yolg'onchilikda ayblasa, ular o'rtalarida jang qilishardi.",
    "note": null
  },
  {
    "num": 69,
    "time": "00:04:01,866 --> 00:04:03,788",
    "arabic": "وَيُعَدُّ الْفَائِزُ صَادِقًا",
    "segs": null,
    "full_uz": "Va g'olib to'g'ri so'zlovchi hisoblanardi.",
    "note": null
  },
  {
    "num": 70,
    "time": "00:04:03,788 --> 00:04:06,997",
    "arabic": "إِنَّهَا نَمَاذِجُ طُرُقٍ لِكَشْفِ الْحَقِيقَةِ",
    "segs": null,
    "full_uz": "Bular haqiqatni aniqlashning namunaviy usullaridir.",
    "note": null
  },
  {
    "num": 71,
    "time": "00:04:06,997 --> 00:04:18,100",
    "arabic": "أَجِبْ بِنَعَمْ أَوْ بِلَا، فَهِمْتَ؟",
    "segs": [
      { "ar": "أَجِبْ بِنَعَمْ أَوْ بِلَا", "uz": "ha yoki yo'q deb javob ber" },
      { "ar": "فَهِمْتَ؟", "uz": "tushundingmi?" }
    ],
    "full_uz": "Ha yoki yo'q deb javob ber, tushundingmi?",
    "note": null
  },
  {
    "num": 72,
    "time": "00:04:18,100 --> 00:04:20,220",
    "arabic": "هَلْ لَدَيْكَ أُذُنَانِ؟",
    "segs": null,
    "full_uz": "Sening ikkita quloging bormi?",
    "note": null
  },
  {
    "num": 73,
    "time": "00:04:20,220 --> 00:04:21,760",
    "arabic": "أَلَا تَرَيْنَ ذَلِكَ؟",
    "segs": null,
    "full_uz": "Buni ko'rmayapsanmi?",
    "note": null
  },
  {
    "num": 74,
    "time": "00:04:21,760 --> 00:04:23,000",
    "arabic": "نَعَمْ أَوْ لَا؟",
    "segs": null,
    "full_uz": "Ha yoki yo'q?",
    "note": null
  },
  {
    "num": 75,
    "time": "00:04:23,000 --> 00:04:23,460",
    "arabic": "نَعَمْ",
    "segs": null,
    "full_uz": "Ha.",
    "note": null
  },
  {
    "num": 76,
    "time": "00:04:23,460 --> 00:04:27,860",
    "arabic": "أَجِبْ، أَنْتَ فَتَاةٌ؟",
    "segs": null,
    "full_uz": "Javob ber, sen qizmisan?",
    "note": null
  },
  {
    "num": 77,
    "time": "00:04:27,860 --> 00:04:28,939",
    "arabic": "مَا هَذَا؟",
    "segs": null,
    "full_uz": "Bu nima o'zi?",
    "note": null
  },
  {
    "num": 78,
    "time": "00:04:28,939 --> 00:04:30,720",
    "arabic": "نَعَمْ أَمْ لَا؟",
    "segs": null,
    "full_uz": "Ha yoki yo'q?",
    "note": null
  },
  {
    "num": 79,
    "time": "00:04:30,720 --> 00:04:31,060",
    "arabic": "لَا",
    "segs": null,
    "full_uz": "Yo'q.",
    "note": null
  },
  {
    "num": 80,
    "time": "00:04:31,060 --> 00:04:34,939",
    "arabic": "مَا هَذِهِ الْأَسْئِلَةُ الْعَجِيبَةُ؟",
    "segs": null,
    "full_uz": "Bu qanaqa g'alati savollar?",
    "note": null
  },
  {
    "num": 81,
    "time": "00:04:34,939 --> 00:04:38,500",
    "arabic": "أَرَدْنَا أَنْ نَرْصُدَ نَبَضَاتِ قَلْبِكَ عِنْدَمَا تُجِيبُ بِصِدْقٍ",
    "segs": [
      { "ar": "أَرَدْنَا أَنْ نَرْصُدَ نَبَضَاتِ قَلْبِكَ", "uz": "yurak urishingni kuzatmoqchi edik" },
      { "ar": "عِنْدَمَا تُجِيبُ بِصِدْقٍ", "uz": "sen chin javob berganingda" }
    ],
    "full_uz": "Sen chin javob berganingda yurak urishingni kuzatmoqchi edik.",
    "note": null
  },
  {
    "num": 82,
    "time": "00:04:38,500 --> 00:04:40,860",
    "arabic": "وَالْآنَ أَجِبْ عَنْ هَذَا",
    "segs": null,
    "full_uz": "Va endi shunga javob ber.",
    "note": null
  },
  {
    "num": 83,
    "time": "00:04:40,860 --> 00:04:43,300",
    "arabic": "هَلْ تَعْرِفُ الْفِيكْسِيزَ؟",
    "segs": null,
    "full_uz": "Fiksiklarni bilasanmi?",
    "note": null
  },
  {
    "num": 84,
    "time": "00:04:43,300 --> 00:04:44,360",
    "arabic": "نَعَمْ أَمْ لَا؟",
    "segs": null,
    "full_uz": "Ha yoki yo'q?",
    "note": null
  },
  {
    "num": 85,
    "time": "00:04:44,360 --> 00:04:44,780",
    "arabic": "أَجَلْ",
    "segs": null,
    "full_uz": "Ha.",
    "note": null
  },
  {
    "num": 86,
    "time": "00:04:44,780 --> 00:04:47,200",
    "arabic": "لَا، لَا، لَقَدْ نَسِيتُ",
    "segs": null,
    "full_uz": "Yo'q, yo'q, unutibman.",
    "note": null
  },
  {
    "num": 87,
    "time": "00:04:47,200 --> 00:04:48,659",
    "arabic": "لَقَدْ تَسَارَعَ نَبْضُهُ",
    "segs": null,
    "full_uz": "Uning yurak urishi tezlashdi.",
    "note": null
  },
  {
    "num": 88,
    "time": "00:04:48,659 --> 00:04:50,699",
    "arabic": "إِذَنْ هَلْ أَنْتَ تُوم؟",
    "segs": null,
    "full_uz": "Unda sen Tommisan?",
    "note": null
  },
  {
    "num": 89,
    "time": "00:04:50,699 --> 00:04:51,139",
    "arabic": "لَا",
    "segs": null,
    "full_uz": "Yo'q.",
    "note": null
  },
  {
    "num": 90,
    "time": "00:04:51,139 --> 00:04:54,039",
    "arabic": "آهَا، لَقَدِ ازْدَادَ نَبْضُهُ بِشِدَّةٍ",
    "segs": null,
    "full_uz": "Aha, uning yuragi juda tez ura boshladi.",
    "note": null
  },
  {
    "num": 91,
    "time": "00:04:54,039 --> 00:04:56,079",
    "arabic": "وَعَيْنَاهُ بَدَأَتَا تَطْرِفَانِ",
    "segs": null,
    "full_uz": "Va ko'zlari pirpiray boshladi.",
    "note": null
  },
  {
    "num": 92,
    "time": "00:04:56,079 --> 00:04:57,219",
    "arabic": "وَالْفِيكْسِيزُ",
    "segs": null,
    "full_uz": "Va Fiksiklar-chi?",
    "note": null
  },
  {
    "num": 93,
    "time": "00:04:57,219 --> 00:04:58,959",
    "arabic": "كَيْفَ عَلِمْتَ بِوُجُودِهِمْ؟",
    "segs": null,
    "full_uz": "Ularning borligini qayerdan bilding?",
    "note": null
  },
  {
    "num": 94,
    "time": "00:04:58,959 --> 00:04:59,519",
    "arabic": "مِنْ تُوم",
    "segs": null,
    "full_uz": "Tomdan.",
    "note": null
  },
  {
    "num": 95,
    "time": "00:04:59,519 --> 00:05:01,920",
    "arabic": "مِنَ الْمُسْتَحِيلِ أَنْ يُخْبِرَكَ",
    "segs": null,
    "full_uz": "Bu mumkin emas, u senga aytmagan bo'lardi.",
    "note": null
  },
  {
    "num": 96,
    "time": "00:05:01,920 --> 00:05:03,199",
    "arabic": "فَهَذَا سِرُّنَا",
    "segs": null,
    "full_uz": "Bu bizning sirimiz-ku.",
    "note": null
  },
  {
    "num": 97,
    "time": "00:05:03,199 --> 00:05:03,879",
    "arabic": "بَلْ فَعَلَ",
    "segs": null,
    "full_uz": "Yo'q, aytdi.",
    "note": null
  },
  {
    "num": 98,
    "time": "00:05:03,879 --> 00:05:04,839",
    "arabic": "هَذَا كَذِبٌ",
    "segs": null,
    "full_uz": "Bu yolg'on.",
    "note": null
  },
  {
    "num": 99,
    "time": "00:05:04,839 --> 00:05:05,199",
    "arabic": "لَا",
    "segs": null,
    "full_uz": "Yo'q.",
    "note": null
  },
  {
    "num": 100,
    "time": "00:05:05,199 --> 00:05:06,079",
    "arabic": "بَلْ كَذِبٌ",
    "segs": null,
    "full_uz": "Yo'q, yolg'on.",
    "note": null
  },
  {
    "num": 101,
    "time": "00:05:06,079 --> 00:05:06,579",
    "arabic": "لَا",
    "segs": null,
    "full_uz": "Yo'q.",
    "note": null
  },
  {
    "num": 102,
    "time": "00:05:06,579 --> 00:05:12,060",
    "arabic": "هَاي، انْظُرُوا، لَقَدِ انْكَسَرَتِ الْبَيْضَةُ",
    "segs": [
      { "ar": "هَاي، انْظُرُوا", "uz": "hey, qaranglar" },
      { "ar": "لَقَدِ انْكَسَرَتِ الْبَيْضَةُ", "uz": "tuxum sindi" }
    ],
    "full_uz": "Hey, qaranglar, tuxum sindi.",
    "note": null
  },
  {
    "num": 103,
    "time": "00:05:12,060 --> 00:05:12,919",
    "arabic": "اسْتَسْلِمْ",
    "segs": null,
    "full_uz": "Taslim bo'l.",
    "note": null
  },
  {
    "num": 104,
    "time": "00:05:12,919 --> 00:05:14,539",
    "arabic": "هَيَّا يَا جُون",
    "segs": null,
    "full_uz": "Qani, Jon.",
    "note": null
  },
  {
    "num": 105,
    "time": "00:05:14,539 --> 00:05:16,980",
    "arabic": "حَسَنًا، أَنَا هُوَ تُوم أَيُّهَا الرِّفَاقُ",
    "segs": null,
    "full_uz": "Xo'p, men Tomman, do'stlar.",
    "note": null
  },
  {
    "num": 106,
    "time": "00:05:16,980 --> 00:05:17,860",
    "arabic": "بِيشْ",
    "segs": null,
    "full_uz": "Bish!",
    "note": "بِيشْ — tovush effekti."
  },
  {
    "num": 107,
    "time": "00:05:17,860 --> 00:05:22,460",
    "arabic": "هَلْ مِنَ الْمُمْكِنِ حَقًّا الْكَشْفُ عَنِ الْكَذِبِ بِقِيَاسِ نَبْضَةٍ وَاحِدَةٍ؟",
    "segs": null,
    "full_uz": "Rostdan ham bitta puls o'lchash orqali yolg'onni aniqlash mumkinmi?",
    "note": null
  },
  {
    "num": 108,
    "time": "00:05:22,460 --> 00:05:25,780",
    "arabic": "بِقِيَاسِ النَّبْضِ نَعَمْ، أَمَّا بِاسْتِعْمَالِ الْبَيْضَةِ فَلَا",
    "segs": [
      { "ar": "بِقِيَاسِ النَّبْضِ نَعَمْ", "uz": "puls o'lchash orqali — ha" },
      { "ar": "أَمَّا بِاسْتِعْمَالِ الْبَيْضَةِ فَلَا", "uz": "tuxum yordamida esa — yo'q" }
    ],
    "full_uz": "Puls o'lchash orqali — ha, tuxum yordamida esa — yo'q.",
    "note": null
  },
  {
    "num": 109,
    "time": "00:05:25,780 --> 00:05:28,120",
    "arabic": "لَقَدْ خَدَعْتُمَانِي، هَذَا لَيْسَ لَطِيفًا",
    "segs": [
      { "ar": "لَقَدْ خَدَعْتُمَانِي", "uz": "meni aldadingiz" },
      { "ar": "هَذَا لَيْسَ لَطِيفًا", "uz": "bu yaxshi emas" }
    ],
    "full_uz": "Meni aldadingiz, bu yaxshi emas.",
    "note": null
  },
  {
    "num": 110,
    "time": "00:05:28,120 --> 00:05:30,500",
    "arabic": "لَمْ نَخْدَعْكَ، لَقَدْ خَدَعْنَا جُون",
    "segs": [
      { "ar": "لَمْ نَخْدَعْكَ", "uz": "seni aldamadik" },
      { "ar": "لَقَدْ خَدَعْنَا جُون", "uz": "biz Jonni aldadik" }
    ],
    "full_uz": "Seni aldamadik, biz Jonni aldadik.",
    "note": null
  },
  {
    "num": 111,
    "time": "00:05:30,500 --> 00:05:35,180",
    "arabic": "هَا، أَتَعْلَمَانِ؟ أَظُنُّ أَنَّ عَلَيَّ فَحْصَكُمَا بِجِهَازِ الْكَذِبِ",
    "segs": [
      { "ar": "هَا، أَتَعْلَمَانِ؟", "uz": "ha, bilasizlarmi?" },
      { "ar": "أَظُنُّ أَنَّ عَلَيَّ فَحْصَكُمَا بِجِهَازِ الْكَذِبِ", "uz": "menimcha, sizlarni ham yolg'on detektorida tekshirishim kerak" }
    ],
    "full_uz": "Ha, bilasizlarmi, menimcha, sizlarni ham yolg'on detektorida tekshirishim kerak.",
    "note": null
  },
  {
    "num": 112,
    "time": "00:05:35,180 --> 00:05:41,280",
    "arabic": "لَا أَظُنُّ ذَلِكَ، عَلَيْكَ أَنْ تَسْتَعِدَّ لِإِعْطَاءِ مَا أُرِيدُهُ لِأَنَّكَ خَسِرْتَ التَّحَدِّي",
    "segs": [
      { "ar": "لَا أَظُنُّ ذَلِكَ", "uz": "menimcha, unday emas" },
      { "ar": "عَلَيْكَ أَنْ تَسْتَعِدَّ لِإِعْطَاءِ مَا أُرِيدُهُ", "uz": "sen menga xohlaganimni berishga tayyorlanishing kerak" },
      { "ar": "لِأَنَّكَ خَسِرْتَ التَّحَدِّي", "uz": "chunki sen bahsda yutqazding" }
    ],
    "full_uz": "Menimcha, unday emas, sen menga xohlaganimni berishga tayyorlanishing kerak, chunki sen bahsda yutqazding.",
    "note": null
  }
];
if (typeof module !== "undefined" && module.exports) {
  module.exports = lessons;
}