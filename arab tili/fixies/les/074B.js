const lessons = [
  {
    "num": 1,
    "time": "00:00:30,339 --> 00:00:35,100",
    "arabic": "هَاتِفُ الْفِيكْسِي",
    "segs": null,
    "full_uz": "Fiksi telefoni.",
    "note": null
  },
  {
    "num": 2,
    "time": "00:00:35,100 --> 00:00:37,280",
    "arabic": "مَرْحَبًا يَا تُومُ",
    "segs": null,
    "full_uz": "Salom, Tom.",
    "note": null
  },
  {
    "num": 3,
    "time": "00:00:37,280 --> 00:00:39,939",
    "arabic": "خَمِّنْ مَا الَّذِي مَعَنَا؟",
    "segs": null,
    "full_uz": "Top-chi, bizda nima bor?",
    "note": null
  },
  {
    "num": 4,
    "time": "00:00:39,939 --> 00:00:41,960",
    "arabic": "أَنْتُمْ خَمِّنُوا مَاذَا مَعِي؟",
    "segs": null,
    "full_uz": "Sizlar top-chi, menda nima bor?",
    "note": null
  },
  {
    "num": 5,
    "time": "00:00:41,960 --> 00:00:45,620",
    "arabic": "مَوْزَةٌ؟ سَيَّارَةٌ؟ لَا شُوكُولَاتَةٌ؟",
    "segs": [
      { "ar": "مَوْزَةٌ؟", "uz": "Banan?" },
      { "ar": "سَيَّارَةٌ؟", "uz": "Mashina?" },
      { "ar": "لَا شُوكُولَاتَةٌ؟", "uz": "Yo'q, shokolad?" }
    ],
    "full_uz": "Banan? Mashina? Yo'q, shokolad?",
    "note": null
  },
  {
    "num": 6,
    "time": "00:00:45,620 --> 00:00:47,740",
    "arabic": "زَوْجَانِ مِنَ الْجَوَارِبِ؟",
    "segs": null,
    "full_uz": "Ikki juft paypoq?",
    "note": "زَوْجَانِ — ikkilik (dual) shakl bo'lib, 'ikki juft' ma'nosini bildiradi."
  },
  {
    "num": 7,
    "time": "00:00:47,740 --> 00:00:51,299",
    "arabic": "هَلْ تَسْتَسْلِمُ؟ ابْتَاعَ أَبِي هَاتِفًا جَدِيدًا",
    "segs": [
      { "ar": "هَلْ تَسْتَسْلِمُ؟", "uz": "Taslim bo'lyapsanmi?" },
      { "ar": "ابْتَاعَ أَبِي هَاتِفًا جَدِيدًا", "uz": "otam yangi telefon sotib oldi" }
    ],
    "full_uz": "Taslim bo'lyapsanmi? Otam yangi telefon sotib oldi,",
    "note": null
  },
  {
    "num": 8,
    "time": "00:00:51,299 --> 00:00:53,560",
    "arabic": "وَعَطَانِي الْقَدِيمَ لَقَدْ أَصْبَحَ لِي",
    "segs": null,
    "full_uz": "va eskisini menga berdi, endi u meniki.",
    "note": "SRTda 'عطاني' deb yozilgan, bu so'zlashuv (ammiya) shaklidir; adabiy arabchada 'أَعْطَانِي' (menga berdi) bo'ladi."
  },
  {
    "num": 9,
    "time": "00:00:53,560 --> 00:00:54,560",
    "arabic": "انْظُرُوا",
    "segs": null,
    "full_uz": "Qaranglar.",
    "note": null
  },
  {
    "num": 10,
    "time": "00:00:54,560 --> 00:00:55,700",
    "arabic": "هَذَا رَائِعٌ",
    "segs": null,
    "full_uz": "Bu ajoyib.",
    "note": null
  },
  {
    "num": 11,
    "time": "00:00:55,700 --> 00:00:57,680",
    "arabic": "وَأَنْتَ مَاذَا لَدَيْكَ؟",
    "segs": null,
    "full_uz": "Sen-chi, senda nima bor?",
    "note": null
  },
  {
    "num": 12,
    "time": "00:00:57,680 --> 00:00:58,280",
    "arabic": "انْظُرْ",
    "segs": null,
    "full_uz": "Qara.",
    "note": null
  },
  {
    "num": 13,
    "time": "00:00:58,280 --> 00:01:04,799",
    "arabic": "آهْ لَدَيْكَ هَاتِفٌ أَيْضًا",
    "segs": null,
    "full_uz": "Oh, sizda ham telefon bor ekan.",
    "note": null
  },
  {
    "num": 14,
    "time": "00:01:04,799 --> 00:01:08,060",
    "arabic": "إِنَّهُ أَكْثَرُ مِنْ ذَلِكَ هَذَا هَاتِفُ فِيكْسِي",
    "segs": null,
    "full_uz": "Bu undan ko'proq narsa, bu — fiksi telefoni.",
    "note": null
  },
  {
    "num": 15,
    "time": "00:01:08,060 --> 00:01:12,019",
    "arabic": "أَحْضَرَ بَابُوسْ هَاتِفَ فِيكْسِي جَدِيدًا وَأَعْطَانِي هَذَا الْقَدِيمَ",
    "segs": null,
    "full_uz": "Babus yangi fiksi telefonini olib keldi va bu eskisini menga berdi.",
    "note": null
  },
  {
    "num": 16,
    "time": "00:01:12,019 --> 00:01:14,480",
    "arabic": "وَهَلْ يُجْرِي الْمُكَالَمَاتِ؟",
    "segs": null,
    "full_uz": "U qo'ng'iroq qila oladimi?",
    "note": null
  },
  {
    "num": 17,
    "time": "00:01:14,480 --> 00:01:16,439",
    "arabic": "آهَا دَعِينِي أُرِهِ",
    "segs": null,
    "full_uz": "Ha, senga ko'rsataman.",
    "note": null
  },
  {
    "num": 18,
    "time": "00:01:16,439 --> 00:01:26,140",
    "arabic": "مَرْحَبًا يَا بَابُوسْ",
    "segs": null,
    "full_uz": "Salom, Babus.",
    "note": null
  },
  {
    "num": 19,
    "time": "00:01:26,140 --> 00:01:27,260",
    "arabic": "مَرْحَبًا نُولِيكْ",
    "segs": null,
    "full_uz": "Salom, Nolik.",
    "note": null
  },
  {
    "num": 20,
    "time": "00:01:27,260 --> 00:01:28,959",
    "arabic": "لِمَ تَتَّصِلُ؟",
    "segs": null,
    "full_uz": "Nega qo'ng'iroq qilyapsan?",
    "note": null
  },
  {
    "num": 21,
    "time": "00:01:28,959 --> 00:01:30,460",
    "arabic": "لِأُلْقِيَ التَّحِيَّةَ",
    "segs": null,
    "full_uz": "Salom berish uchun.",
    "note": "SRTda 'لينقي' deb yozilgan, mazmunga ko'ra to'g'risi 'لِأُلْقِيَ' (salom aytish uchun) bo'lishi kerak."
  },
  {
    "num": 22,
    "time": "00:01:30,460 --> 00:01:33,540",
    "arabic": "نُولِيكْ لَا تَتَّصِلْ بِي فِي أَثْنَاءِ الْعَمَلِ",
    "segs": null,
    "full_uz": "Nolik, ish paytida menga qo'ng'iroq qilma.",
    "note": null
  },
  {
    "num": 23,
    "time": "00:01:33,540 --> 00:01:34,579",
    "arabic": "حَسَنًا",
    "segs": null,
    "full_uz": "Xo'p.",
    "note": null
  },
  {
    "num": 24,
    "time": "00:01:34,579 --> 00:01:39,180",
    "arabic": "هَلْ رَأَيْتَ؟",
    "segs": null,
    "full_uz": "Ko'rdingmi?",
    "note": null
  },
  {
    "num": 25,
    "time": "00:01:39,180 --> 00:01:40,460",
    "arabic": "وَمَاذَا فِي ذَلِكَ؟",
    "segs": null,
    "full_uz": "Xo'sh, nima bo'libdi?",
    "note": null
  },
  {
    "num": 26,
    "time": "00:01:40,460 --> 00:01:42,460",
    "arabic": "أَنَا أَسْتَطِيعُ إِجْرَاءَ الْمُكَالَمَاتِ",
    "segs": null,
    "full_uz": "Men qo'ng'iroq qila olaman.",
    "note": null
  },
  {
    "num": 27,
    "time": "00:01:42,460 --> 00:01:44,420",
    "arabic": "مُكَالَمَةُ الْبَشَرِ مُمْكِنَةٌ",
    "segs": null,
    "full_uz": "Odamlarga qo'ng'iroq qilish mumkin,",
    "note": null
  },
  {
    "num": 28,
    "time": "00:01:44,420 --> 00:01:45,859",
    "arabic": "أَمَّا الْفِيكْسِيزُ فَلَا",
    "segs": null,
    "full_uz": "fiksilarga esa yo'q.",
    "note": null
  },
  {
    "num": 29,
    "time": "00:01:45,859 --> 00:01:51,980",
    "arabic": "هَاتِفُ الْفِيكْسِي هُوَ هَاتِفٌ ذَكِيٌّ خَاصٌّ بِالْفِيكْسِيزِ",
    "segs": null,
    "full_uz": "Fiksi telefoni — fiksilarga xos aqlli telefondir.",
    "note": null
  },
  {
    "num": 30,
    "time": "00:01:51,980 --> 00:01:54,620",
    "arabic": "وَهُوَ لَيْسَ فَحَسْبُ لِمُكَالَمَةِ الْفِيكْسِيزِ",
    "segs": null,
    "full_uz": "U faqat fiksilarga qo'ng'iroq qilish uchun emas,",
    "note": null
  },
  {
    "num": 31,
    "time": "00:01:54,620 --> 00:01:57,920",
    "arabic": "بَلْ يُمْكِنُهُمْ تَصَفُّحُ شَابَكَةِ الْفِيكْسِي الْخَاصَّةِ بِهِمْ",
    "segs": null,
    "full_uz": "balki ular o'zlarining fiksi tarmog'ini (internetini) ham ko'rib chiqishlari mumkin.",
    "note": "شَابَكَة — arab tilida 'internet, jahon tarmog'i' ma'nosida qo'llaniladigan so'z, so'zma-so'z 'o'zaro to'r kabi bog'langan narsa' degani."
  },
  {
    "num": 32,
    "time": "00:01:57,920 --> 00:01:59,719",
    "arabic": "تَجِدُ عَلَى هَاتِفِ الْفِيكْسِي",
    "segs": null,
    "full_uz": "Fiksi telefonida topasan:",
    "note": null
  },
  {
    "num": 33,
    "time": "00:01:59,719 --> 00:02:03,000",
    "arabic": "آلَةَ تَصْوِيرٍ وَمِصْبَاحًا وَأَخْبَارًا وَأَلْعَابًا وَأَفْلَامًا",
    "segs": null,
    "full_uz": "kamera, chiroqcha, yangiliklar, o'yinlar va filmlar.",
    "note": "SRTda 'ألت' deb yozilgan, to'g'ri imlosi 'آلَة' (asbob/qurilma) bo'ladi."
  },
  {
    "num": 34,
    "time": "00:02:03,000 --> 00:02:04,840",
    "arabic": "وَدَنْدَنَاتِ فِيكْسِي",
    "segs": null,
    "full_uz": "va fiksi kuylarini.",
    "note": null
  },
  {
    "num": 35,
    "time": "00:02:04,840 --> 00:02:07,040",
    "arabic": "وَهُوَ تَطْبِيقٌ لِأَغَانِي الْفِيكْسِي",
    "segs": null,
    "full_uz": "Bu esa fiksi qo'shiqlari uchun ilova.",
    "note": null
  },
  {
    "num": 36,
    "time": "00:02:07,040 --> 00:02:10,420",
    "arabic": "أَطْفَالُ الْفِيكْسِي يُحِبُّونَهَا وَكَذَلِكَ آبَاؤُهُمْ",
    "segs": null,
    "full_uz": "Fiksi bolalari uni yaxshi ko'radi, ota-onalari ham.",
    "note": null
  },
  {
    "num": 37,
    "time": "00:02:10,420 --> 00:02:15,219",
    "arabic": "لِأَنَّ هَوَاتِفَ الْفِيكْسِي تَسْمَحُ لِلْآبَاءِ بِمَعْرِفَةِ مَكَانِ أَوْلَادِهِمْ بِسُهُولَةٍ",
    "segs": null,
    "full_uz": "Chunki fiksi telefonlari ota-onalarga bolalarining qayerdaligini oson bilish imkonini beradi,",
    "note": null
  },
  {
    "num": 38,
    "time": "00:02:15,219 --> 00:02:17,420",
    "arabic": "وَإِنْ كَانُوا وَاقِعِينَ فِي وَرْطَةٍ أَوْ لَا",
    "segs": null,
    "full_uz": "shuningdek, ular biror muammoga tushib qolganmi yoki yo'qmi, shuni ham.",
    "note": null
  },
  {
    "num": 39,
    "time": "00:02:17,420 --> 00:02:23,840",
    "arabic": "تَعَلَّمَ الْبَشَرُ خِلَالَ السِّنِينَ طَرِيقَةَ تَحْوِيلِ الْهَوَاتِفِ الْعَادِيَّةِ إِلَى هَوَاتِفَ مَحْمُولَةٍ",
    "segs": null,
    "full_uz": "Odamlar yillar davomida oddiy telefonlarni mobil telefonlarga aylantirishni o'rganishdi,",
    "note": null
  },
  {
    "num": 40,
    "time": "00:02:23,840 --> 00:02:26,180",
    "arabic": "وَتَحْوِيلِ الْمَحْمُولَةِ إِلَى هَوَاتِفَ ذَكِيَّةٍ",
    "segs": null,
    "full_uz": "va mobil telefonlarni aqlli telefonlarga aylantirishni ham.",
    "note": null
  },
  {
    "num": 41,
    "time": "00:02:26,180 --> 00:02:28,520",
    "arabic": "يَسْتَعْمِلُونَهَا لِمُكَالَمَةِ الْآخَرِينَ",
    "segs": null,
    "full_uz": "Ular bulardan boshqalarga qo'ng'iroq qilish uchun foydalanishadi,",
    "note": null
  },
  {
    "num": 42,
    "time": "00:02:28,520 --> 00:02:30,080",
    "arabic": "وَتَصَفُّحِ الشَّابَكَةِ",
    "segs": null,
    "full_uz": "va internetni ko'rib chiqish uchun.",
    "note": null
  },
  {
    "num": 43,
    "time": "00:02:30,080 --> 00:02:32,599",
    "arabic": "الْهَاتِفُ الذَّكِيُّ قَوِيٌّ كَالْحَاسُوبِ تَقْرِيبًا",
    "segs": null,
    "full_uz": "Aqlli telefon deyarli kompyuter kabi kuchli,",
    "note": null
  },
  {
    "num": 44,
    "time": "00:02:32,599 --> 00:02:35,000",
    "arabic": "وَلَكِنْ لَا تَزَالُ لَدَيْهِ طَرِيقٌ طَوِيلٌ",
    "segs": null,
    "full_uz": "ammo unga hali uzoq yo'l bor,",
    "note": null
  },
  {
    "num": 45,
    "time": "00:02:35,000 --> 00:02:37,240",
    "arabic": "لِيُصْبِحَ بِجَوْدَةِ هَاتِفِ فِيكْسِي",
    "segs": null,
    "full_uz": "fiksi telefoni sifatiga yetishi uchun.",
    "note": null
  },
  {
    "num": 46,
    "time": "00:02:37,240 --> 00:02:41,719",
    "arabic": "هَذَا رَائِعٌ حَقًّا",
    "segs": null,
    "full_uz": "Bu haqiqatan ham ajoyib.",
    "note": null
  },
  {
    "num": 47,
    "time": "00:02:41,719 --> 00:02:43,960",
    "arabic": "وَلَكِنْ هَاتِفِي يَفْعَلُ شَيْئًا أَرْوَعَ",
    "segs": null,
    "full_uz": "Lekin mening telefonim yanada ajoyibroq narsa qiladi.",
    "note": null
  },
  {
    "num": 48,
    "time": "00:02:43,960 --> 00:02:45,960",
    "arabic": "وَهَلْ يُمْكِنُ أَنْ يَفْعَلَ هَذَا؟",
    "segs": null,
    "full_uz": "Xo'sh, u buni qila oladimi?",
    "note": null
  },
  {
    "num": 49,
    "time": "00:02:45,960 --> 00:02:47,020",
    "arabic": "أَلْقِ نَظْرَةً هُنَا",
    "segs": null,
    "full_uz": "Bu yerga bir qara.",
    "note": null
  },
  {
    "num": 50,
    "time": "00:02:47,020 --> 00:02:49,400",
    "arabic": "هَلْ تَعْنِي هَذَا هُنَا؟",
    "segs": null,
    "full_uz": "Shuni nazarda tutyapsanmi?",
    "note": null
  },
  {
    "num": 51,
    "time": "00:02:49,400 --> 00:02:50,580",
    "arabic": "إِنَّهَا فَأْرَةٌ لَا أَكْثَرَ",
    "segs": null,
    "full_uz": "Bu shunchaki sichqoncha, xolos.",
    "note": "SRTda 'فارة' deb yozilgan, to'g'ri imlosi 'فَأْرَة' (sichqon, kompyuter sichqonchasi) bo'ladi."
  },
  {
    "num": 52,
    "time": "00:02:50,580 --> 00:02:52,280",
    "arabic": "وَالْآنَ انْظُرْ هُنَا",
    "segs": null,
    "full_uz": "Va endi bu yerga qara.",
    "note": null
  },
  {
    "num": 53,
    "time": "00:02:52,280 --> 00:02:59,979",
    "arabic": "وَلَكِنَّهُ لَيْسَ هُنَاكَ",
    "segs": null,
    "full_uz": "Lekin u u yerda emas.",
    "note": null
  },
  {
    "num": 54,
    "time": "00:02:59,979 --> 00:03:03,039",
    "arabic": "لَكِنَّهُ هُنَا",
    "segs": null,
    "full_uz": "Balki bu yerda.",
    "note": null
  },
  {
    "num": 55,
    "time": "00:03:03,039 --> 00:03:04,719",
    "arabic": "هَذَا لَيْسَ كُلَّ شَيْءٍ",
    "segs": null,
    "full_uz": "Bu hammasi emas.",
    "note": null
  },
  {
    "num": 56,
    "time": "00:03:04,719 --> 00:03:05,259",
    "arabic": "انْظُرْ",
    "segs": null,
    "full_uz": "Qara.",
    "note": null
  },
  {
    "num": 57,
    "time": "00:03:05,259 --> 00:03:08,819",
    "arabic": "تُسَاعِدُ الْفَأْرَةُ الْمُتَصَفِّحَ عَلَى التَّنَقُّلِ فِي الْحَاسُوبِ",
    "segs": null,
    "full_uz": "Sichqoncha foydalanuvchiga kompyuterda harakatlanishga yordam beradi,",
    "note": null
  },
  {
    "num": 58,
    "time": "00:03:08,819 --> 00:03:10,180",
    "arabic": "وَعِنْدَمَا نُحَرِّكُهَا",
    "segs": null,
    "full_uz": "va uni harakatlantirganimizda...",
    "note": null
  },
  {
    "num": 59,
    "time": "00:03:10,180 --> 00:03:12,520",
    "arabic": "هَلْ فَهِمْتَ؟",
    "segs": null,
    "full_uz": "Tushundingmi?",
    "note": null
  },
  {
    "num": 60,
    "time": "00:03:12,520 --> 00:03:15,180",
    "arabic": "لَا يَسْتَطِيعُ أَحَدٌ غَيْرُكَ رُؤْيَةَ الْفِيكْسِي",
    "segs": null,
    "full_uz": "Sendan boshqa hech kim fiksini ko'ra olmaydi,",
    "note": null
  },
  {
    "num": 61,
    "time": "00:03:15,180 --> 00:03:16,520",
    "arabic": "وَلِهَذَا رَأَيْتَهُ",
    "segs": null,
    "full_uz": "shuning uchun sen uni ko'rding.",
    "note": null
  },
  {
    "num": 62,
    "time": "00:03:16,520 --> 00:03:17,360",
    "arabic": "مُدْهِشٌ",
    "segs": null,
    "full_uz": "Ajablanarli!",
    "note": null
  },
  {
    "num": 63,
    "time": "00:03:17,360 --> 00:03:20,219",
    "arabic": "سَيَكُونُ مِنَ الرَّائِعِ لَوْ حَصَلْتُ عَلَى وَاحِدٍ",
    "segs": null,
    "full_uz": "Menda ham shundan bo'lsa, juda ajoyib bo'lardi.",
    "note": null
  },
  {
    "num": 64,
    "time": "00:03:20,219 --> 00:03:21,759",
    "arabic": "عَمَّ تَتَحَدَّثُ؟",
    "segs": null,
    "full_uz": "Nima haqida gapiryapsan?",
    "note": null
  },
  {
    "num": 65,
    "time": "00:03:21,759 --> 00:03:23,399",
    "arabic": "أَنْتَ لَسْتَ فِيكْسِيًّا",
    "segs": null,
    "full_uz": "Sen fiksi emassan-ku.",
    "note": null
  },
  {
    "num": 66,
    "time": "00:03:23,399 --> 00:03:27,359",
    "arabic": "يَا لَلْخَيْبَةِ سَأَذْهَبُ إِلَى الْمَدْرَسَةِ الْآنَ",
    "segs": null,
    "full_uz": "Voy, xafa bo'ldim, endi maktabga boraman.",
    "note": null
  },
  {
    "num": 67,
    "time": "00:03:27,359 --> 00:03:31,719",
    "arabic": "إِنَّهُ حَزِينٌ لَقَدْ نَسِيَ أَنْ يَأْخُذَ هَاتِفَهُ",
    "segs": null,
    "full_uz": "U xafa, telefonini olishni unutib qo'ydi.",
    "note": null
  },
  {
    "num": 68,
    "time": "00:03:31,719 --> 00:03:33,359",
    "arabic": "لَدَيَّ فِكْرَةٌ",
    "segs": null,
    "full_uz": "Menda bir fikr bor.",
    "note": null
  },
  {
    "num": 69,
    "time": "00:03:33,359 --> 00:03:43,060",
    "arabic": "هَاتِفِي صَاحِبِي بَلْ قُلْ صَدِيقِي الدَّائِمُ",
    "segs": null,
    "full_uz": "Telefonim — do'stim, aniqrog'i, doimiy hamrohim.",
    "note": null
  },
  {
    "num": 70,
    "time": "00:03:43,060 --> 00:03:46,219",
    "arabic": "دَائِمًا بِرِفْقَتِي حَتَّى وَأَنَا نَائِمٌ",
    "segs": null,
    "full_uz": "Doim mening yonimda, hatto uxlaganimda ham.",
    "note": null
  },
  {
    "num": 71,
    "time": "00:03:46,219 --> 00:03:50,939",
    "arabic": "رَنَّ رَنَّ طَوَالَ الْيَوْمِ",
    "segs": null,
    "full_uz": "Jiring-jiring, kun bo'yi.",
    "note": null
  },
  {
    "num": 72,
    "time": "00:03:50,939 --> 00:03:52,500",
    "arabic": "حَتَّى وَأَنَا نَائِمٌ",
    "segs": null,
    "full_uz": "Hatto uxlaganimda ham.",
    "note": null
  },
  {
    "num": 73,
    "time": "00:03:52,500 --> 00:03:55,620",
    "arabic": "فِي الْهَاتِفِ كُلُّ الْأَشْغَالِ أُغْنِيَتِي وَكِتَابِي",
    "segs": null,
    "full_uz": "Telefonda hamma ishim, qo'shig'im va kitobim bor.",
    "note": null
  },
  {
    "num": 74,
    "time": "00:03:55,620 --> 00:03:58,699",
    "arabic": "أُمْضِي وَقْتِي فِي التَّجْوَالِ وَأُصَوِّرُ أَصْحَابِي",
    "segs": null,
    "full_uz": "Vaqtimni sayr qilib o'tkazaman va do'stlarimni suratga olaman.",
    "note": "SRTda 'أنضي' deb yozilgan, to'g'ri imlosi 'أُمْضِي' (vaqt o'tkazaman) bo'ladi."
  },
  {
    "num": 75,
    "time": "00:03:58,699 --> 00:04:03,379",
    "arabic": "رَنَّ رَنَّ طَوَالَ الْيَوْمِ",
    "segs": null,
    "full_uz": "Jiring-jiring, kun bo'yi.",
    "note": null
  },
  {
    "num": 76,
    "time": "00:04:03,379 --> 00:04:04,939",
    "arabic": "وَأُصَوِّرُ أَصْحَابِي",
    "segs": null,
    "full_uz": "Va do'stlarimni suratga olaman.",
    "note": null
  },
  {
    "num": 77,
    "time": "00:04:04,939 --> 00:04:08,060",
    "arabic": "هَاتِفِي لَكَ الْمُرْسَالُ يَمْضِي بِطَلَاقَةٍ",
    "segs": null,
    "full_uz": "Telefonim, sen xabarchisan, ravon ishlaysan.",
    "note": null
  },
  {
    "num": 78,
    "time": "00:04:08,060 --> 00:04:11,139",
    "arabic": "إِنْ فَقَدَ الْقُوَّةَ فِي الْحَالِ زَوَّدْتُهُ بِالطَّاقَةِ",
    "segs": null,
    "full_uz": "Quvvati tugasa, darrov quvvat beraman.",
    "note": null
  },
  {
    "num": 79,
    "time": "00:04:11,139 --> 00:04:15,819",
    "arabic": "رَنَّ رَنَّ طَوَالَ الْيَوْمِ",
    "segs": null,
    "full_uz": "Jiring-jiring, kun bo'yi.",
    "note": null
  },
  {
    "num": 80,
    "time": "00:04:15,819 --> 00:04:17,219",
    "arabic": "زَوَّدْتُهُ بِالطَّاقَةِ",
    "segs": null,
    "full_uz": "Unga quvvat berdim.",
    "note": "SRTda 'زودتوا' deb yozilgan, to'g'ri shakli 'زَوَّدْتُهُ' (unga quvvat berdim) bo'ladi."
  },
  {
    "num": 81,
    "time": "00:04:17,219 --> 00:04:18,939",
    "arabic": "رِينْغْ رِينْغْ طَوَالَ الْيَوْمِ",
    "segs": null,
    "full_uz": "Ring-ring, kun bo'yi.",
    "note": "SRTda 'برين برين' deb yozilgan; bu inglizcha 'ring ring' (telefon jiringlashi) so'zining arab yozuvida talaffuz qilingan shakli bo'lib, oldingi qatorlardagi 'رَنَّ رَنَّ' bilan bir xil ma'noni anglatadi."
  },
  {
    "num": 82,
    "time": "00:04:18,939 --> 00:04:20,480",
    "arabic": "رِينْغْ رِينْغْ طَوَالَ الْيَوْمِ",
    "segs": null,
    "full_uz": "Ring-ring, kun bo'yi.",
    "note": null
  },
  {
    "num": 83,
    "time": "00:04:20,480 --> 00:04:22,000",
    "arabic": "رِينْغْ رِينْغْ طَوَالَ الْيَوْمِ",
    "segs": null,
    "full_uz": "Ring-ring, kun bo'yi.",
    "note": null
  },
  {
    "num": 84,
    "time": "00:04:22,000 --> 00:04:23,540",
    "arabic": "زَوَّدْتُهُ بِالطَّاقَةِ",
    "segs": null,
    "full_uz": "Unga quvvat berdim.",
    "note": null
  },
  {
    "num": 85,
    "time": "00:04:23,540 --> 00:04:27,199",
    "arabic": "انْتَهَيْنَا",
    "segs": null,
    "full_uz": "Tugatdik.",
    "note": null
  },
  {
    "num": 86,
    "time": "00:04:27,199 --> 00:04:32,519",
    "arabic": "انْظُرَا إِنَّهُ",
    "segs": null,
    "full_uz": "Qaranglar, mana bu...",
    "note": null
  },
  {
    "num": 87,
    "time": "00:04:32,519 --> 00:04:33,659",
    "arabic": "مُفَاجَأَةٌ",
    "segs": null,
    "full_uz": "Syurpriz!",
    "note": null
  },
  {
    "num": 88,
    "time": "00:04:33,659 --> 00:04:35,800",
    "arabic": "آهْ إِنَّهُ رَائِعٌ",
    "segs": null,
    "full_uz": "Oh, bu ajoyib!",
    "note": null
  },
  {
    "num": 89,
    "time": "00:04:35,800 --> 00:04:37,519",
    "arabic": "لَدَيَّ هَاتِفُ فِيكْسِي",
    "segs": null,
    "full_uz": "Menda fiksi telefoni bor.",
    "note": null
  },
  {
    "num": 90,
    "time": "00:04:37,519 --> 00:04:39,139",
    "arabic": "إِنَّهُ كَهَاتِفٍ كَمَا",
    "segs": null,
    "full_uz": "Bu ham telefonga o'xshaydi, xuddi...",
    "note": null
  },
  {
    "num": 91,
    "time": "00:04:39,139 --> 00:04:41,180",
    "arabic": "أَقُولُ تَقْرِيبًا",
    "segs": null,
    "full_uz": "...deyish mumkin, deyarli.",
    "note": null
  },
  {
    "num": 92,
    "time": "00:04:41,180 --> 00:04:42,300",
    "arabic": "تُومُ",
    "segs": null,
    "full_uz": "Tom!",
    "note": null
  },
  {
    "num": 93,
    "time": "00:04:42,300 --> 00:04:47,340",
    "arabic": "تُومُ، سَأَسْتَعْمِلُ هَاتِفَكَ لِأَتَّصِلَ بِهَاتِفِي",
    "segs": null,
    "full_uz": "Tom, telefonimga qo'ng'iroq qilish uchun sening telefoningdan foydalanaman.",
    "note": null
  },
  {
    "num": 94,
    "time": "00:04:47,340 --> 00:04:48,819",
    "arabic": "يَجِبُ أَنْ أَجِدَهُ",
    "segs": null,
    "full_uz": "Uni topishim kerak.",
    "note": null
  },
  {
    "num": 95,
    "time": "00:04:48,819 --> 00:04:51,319",
    "arabic": "أُوهْ، لَقَدْ غَيَّرْتَ كُلَّ شَيْءٍ هُنَا",
    "segs": null,
    "full_uz": "Voy, bu yerda hammasini o'zgartirib yubording-ku.",
    "note": null
  },
  {
    "num": 96,
    "time": "00:04:51,319 --> 00:04:54,220",
    "arabic": "أَيْنَ أَنَا مِنْ هَؤُلَاءِ؟ أَظُنُّ أَنَّنِي بَابُوسْ",
    "segs": [
      { "ar": "أَيْنَ أَنَا مِنْ هَؤُلَاءِ؟", "uz": "Men bularning qaysi biriman?" },
      { "ar": "أَظُنُّ أَنَّنِي بَابُوسْ", "uz": "menimcha, men Babusman" }
    ],
    "full_uz": "Men bularning qaysi biriman? Menimcha, men Babusman.",
    "note": null
  },
  {
    "num": 97,
    "time": "00:04:54,220 --> 00:04:57,620",
    "arabic": "يَا لَهُمُ اسْمًا مُضْحِكًا اخْتَرْتَهُ لِي",
    "segs": null,
    "full_uz": "Menga qanaqa kulgili ism tanladingiz-a!",
    "note": "SRTda 'نسم' deb yozilgan, mazmunga ko'ra to'g'risi 'اسْمًا' (ism) bo'lishi kerak."
  },
  {
    "num": 98,
    "time": "00:04:57,620 --> 00:05:03,920",
    "arabic": "نُولِيكْ، تَوَقَّفْ",
    "segs": null,
    "full_uz": "Nolik, to'xta.",
    "note": null
  },
  {
    "num": 99,
    "time": "00:05:03,920 --> 00:05:06,120",
    "arabic": "لَيْسَ لَدَيَّ وَقْتٌ لِمُزَاحِكَ",
    "segs": null,
    "full_uz": "Sening hazillaringga vaqtim yo'q.",
    "note": null
  },
  {
    "num": 100,
    "time": "00:05:06,120 --> 00:05:08,439",
    "arabic": "مَاذَا؟ مَنْ هُنَاكَ؟",
    "segs": null,
    "full_uz": "Nima? Kim u yerda?",
    "note": null
  },
  {
    "num": 101,
    "time": "00:05:08,439 --> 00:05:10,080",
    "arabic": "إِنَّهُ لَيْسَ نُولِيكْ",
    "segs": null,
    "full_uz": "Bu Nolik emas.",
    "note": null
  },
  {
    "num": 102,
    "time": "00:05:10,080 --> 00:05:11,040",
    "arabic": "أَغْلِقِي",
    "segs": null,
    "full_uz": "Yop (telefonni).",
    "note": null
  },
  {
    "num": 103,
    "time": "00:05:11,040 --> 00:05:16,040",
    "arabic": "هَلْ تَعْلَمُ بِمَنِ اتَّصَلْتَ؟",
    "segs": null,
    "full_uz": "Kimga qo'ng'iroq qilganingni bilasanmi?",
    "note": null
  },
  {
    "num": 104,
    "time": "00:05:16,040 --> 00:05:19,260",
    "arabic": "هَلْ يَعْلَمُ أَحَدٌ مَنْ صَاحِبُ هَذَا الْهَاتِفِ؟",
    "segs": null,
    "full_uz": "Bu telefon kimniki ekanini kimdir biladimi?",
    "note": null
  },
  {
    "num": 105,
    "time": "00:05:19,260 --> 00:05:21,000",
    "arabic": "وَجَدَتْهُ أُمُّكَ",
    "segs": null,
    "full_uz": "Onang uni topib oldi.",
    "note": null
  },
  {
    "num": 106,
    "time": "00:05:21,000 --> 00:05:22,040",
    "arabic": "أَنَا قَادِمٌ",
    "segs": null,
    "full_uz": "Men kelyapman.",
    "note": null
  },
  {
    "num": 107,
    "time": "00:05:22,040 --> 00:05:24,820",
    "arabic": "سَنُصْلِحُ هَذِهِ الْأَرْقَامَ لَاحِقًا يَا تُومُ",
    "segs": null,
    "full_uz": "Bu raqamlarni keyinroq tuzatamiz, Tom.",
    "note": null
  },
  {
    "num": 108,
    "time": "00:05:24,820 --> 00:05:27,100",
    "arabic": "سَيُوَبِّخُنَا بَابُوسْ بِلَا شَكٍّ",
    "segs": null,
    "full_uz": "Babus bizni albatta koyiydi.",
    "note": null
  },
  {
    "num": 109,
    "time": "00:05:27,100 --> 00:05:28,920",
    "arabic": "أَعْطِنِي هَاتِفَكَ يَا تُومُ",
    "segs": null,
    "full_uz": "Telefoningni ber, Tom.",
    "note": null
  },
  {
    "num": 110,
    "time": "00:05:28,920 --> 00:05:31,040",
    "arabic": "سَأَحْذِفُ كُلَّ أَرْقَامِ الْفِيكْسِيزِ مِنْهُ",
    "segs": null,
    "full_uz": "Undan barcha fiksilar raqamlarini o'chirib tashlayman.",
    "note": null
  },
  {
    "num": 111,
    "time": "00:05:31,700 --> 00:05:37,040",
    "arabic": "وَلَكِنْ كَيْفَ سَأَتَّصِلُ بِكُمَا؟",
    "segs": null,
    "full_uz": "Lekin ikkovingizga qanday qo'ng'iroq qilaman?",
    "note": "بِكُمَا — ikkilik (dual) shakl, ikki kishiga birdan qaratilgan olmosh."
  },
  {
    "num": 112,
    "time": "00:05:38,100 --> 00:05:39,920",
    "arabic": "لِمَ عَلَيْكَ الِاتِّصَالُ بِنَا؟",
    "segs": null,
    "full_uz": "Nega bizga qo'ng'iroq qilishing kerak?",
    "note": null
  },
  {
    "num": 113,
    "time": "00:05:39,920 --> 00:05:41,600",
    "arabic": "نَحْنُ دَائِمًا فِي الْجِوَارِ",
    "segs": null,
    "full_uz": "Biz doim yaqin-atrofdamiz.",
    "note": null
  }
];
if (typeof module !== "undefined" && module.exports) {
  module.exports = lessons;
}
