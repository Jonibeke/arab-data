const lessons = [
  {
    "num": 1,
    "time": "00:00:30,000 --> 00:00:36,399",
    "arabic": "الْمِرْآةُ",
    "segs": null,
    "full_uz": "Oyna.",
    "note": null
  },
  {
    "num": 2,
    "time": "00:00:39,300 --> 00:00:43,760",
    "arabic": "مَرْحَبًا يَا تُومْ",
    "segs": null,
    "full_uz": "Salom, Tom.",
    "note": null
  },
  {
    "num": 3,
    "time": "00:00:41,399 --> 00:00:45,899",
    "arabic": "أَخْبِرْنِي مَا الَّذِي تَفْعَلُهُ الْمِرْآةُ فِي الْمَمَرِّ مُنْذُ أُسْبُوعٍ كَامِلٍ؟",
    "segs": [
      { "ar": "أَخْبِرْنِي", "uz": "ayt-chi" },
      { "ar": "مَا الَّذِي تَفْعَلُهُ الْمِرْآةُ فِي الْمَمَرِّ مُنْذُ أُسْبُوعٍ كَامِلٍ", "uz": "oyna dahlizda bir haftadan beri nima qilyapti" }
    ],
    "full_uz": "Ayt-chi, oyna dahlizda bir haftadan beri nima qilyapti?",
    "note": null
  },
  {
    "num": 4,
    "time": "00:00:45,899 --> 00:00:48,900",
    "arabic": "يَبْدُو أَنَّ وَالِدِي لَمْ يَجِدِ الْوَقْتَ لِيُعَلِّقَهَا",
    "segs": null,
    "full_uz": "Shekilli, dadam uni osib qo'yishga vaqt topmadi.",
    "note": null
  },
  {
    "num": 5,
    "time": "00:00:48,900 --> 00:00:51,060",
    "arabic": "أَلَا يَخْشَى أَنْ تَقَعَ؟",
    "segs": null,
    "full_uz": "Yiqilib tushishidan qo'rqmaydimi?",
    "note": null
  },
  {
    "num": 6,
    "time": "00:00:51,060 --> 00:00:52,760",
    "arabic": "لَا لَمْ تَقَعْ حَتَّى الْآنَ",
    "segs": null,
    "full_uz": "Yo'q, hozirgacha yiqilgani yo'q.",
    "note": null
  },
  {
    "num": 7,
    "time": "00:00:52,760 --> 00:00:59,060",
    "arabic": "مَا رَأْيُكَ؟ هَلْ أُشْبِهُ الرَّجُلَ الْعَنْكَبُوتَ؟",
    "segs": [
      { "ar": "مَا رَأْيُكَ", "uz": "nima deysan" },
      { "ar": "هَلْ أُشْبِهُ الرَّجُلَ الْعَنْكَبُوتَ", "uz": "o'rgimchak odamga o'xshaymanmi" }
    ],
    "full_uz": "Nima deysan? O'rgimchak odamga o'xshaymanmi?",
    "note": null
  },
  {
    "num": 8,
    "time": "00:01:00,000 --> 00:01:04,680",
    "arabic": "إِنَّكَ لَا تُشْبِهُهُ",
    "segs": null,
    "full_uz": "Unga o'xshamaysan.",
    "note": null
  },
  {
    "num": 9,
    "time": "00:01:04,680 --> 00:01:09,480",
    "arabic": "لَا يُمْكِنُكَ أَنْ تَتَسَلَّقَ الْجُدْرَانَ مِثْلَهُ",
    "segs": null,
    "full_uz": "Devorlarga u kabi tirmasha olmaysan.",
    "note": null
  },
  {
    "num": 10,
    "time": "00:01:09,480 --> 00:01:11,280",
    "arabic": "أَنْتَ أَيْضًا لَا تَسْتَطِيعُ",
    "segs": null,
    "full_uz": "Sen ham uddalay olmaysan.",
    "note": null
  },
  {
    "num": 11,
    "time": "00:01:11,280 --> 00:01:12,540",
    "arabic": "بَلْ أَسْتَطِيعُ",
    "segs": null,
    "full_uz": "Aksincha, uddalayman.",
    "note": null
  },
  {
    "num": 12,
    "time": "00:01:14,819 --> 00:01:25,500",
    "arabic": "أَرَأَيْتَ؟ كَمَا فِي الْفِيلْمِ",
    "segs": [
      { "ar": "أَرَأَيْتَ", "uz": "ko'rdingmi" },
      { "ar": "كَمَا فِي الْفِيلْمِ", "uz": "xuddi filmdagidek" }
    ],
    "full_uz": "Ko'rdingmi? Xuddi filmdagidek.",
    "note": null
  },
  {
    "num": 13,
    "time": "00:01:25,500 --> 00:01:27,879",
    "arabic": "هَذَا لَيْسَ صَعْبًا",
    "segs": null,
    "full_uz": "Bu qiyin emas.",
    "note": null
  },
  {
    "num": 14,
    "time": "00:01:27,879 --> 00:01:28,939",
    "arabic": "رَاقِبْ وَتَعَلَّمْ",
    "segs": null,
    "full_uz": "Tomosha qil va o'rgan.",
    "note": null
  },
  {
    "num": 15,
    "time": "00:01:28,939 --> 00:01:36,439",
    "arabic": "هَذَا صَعْبٌ",
    "segs": null,
    "full_uz": "Bu qiyin ekan.",
    "note": null
  },
  {
    "num": 16,
    "time": "00:01:36,439 --> 00:01:42,259",
    "arabic": "مَتِّعْ عَيْنَيْكَ بِمَا يَسْتَطِيعُ الْفِيكْسِيُّو الْعَنْكَبُوتُ الْوَحِيدُ فِي الْعَالَمِ فِعْلَهُ",
    "segs": [
      { "ar": "مَتِّعْ عَيْنَيْكَ", "uz": "ko'zlaringni sevintir" },
      { "ar": "بِمَا يَسْتَطِيعُ الْفِيكْسِيُّو الْعَنْكَبُوتُ الْوَحِيدُ فِي الْعَالَمِ فِعْلَهُ", "uz": "dunyodagi yagona o'rgimchak-fiksiy nima qila olishini ko'rib" }
    ],
    "full_uz": "Ko'zlaringni sevintir — dunyodagi yagona o'rgimchak-fiksiy nima qila olishini ko'r.",
    "note": null
  },
  {
    "num": 17,
    "time": "00:01:56,359 --> 00:01:57,920",
    "arabic": "أَمْسِكْنِي",
    "segs": null,
    "full_uz": "Meni ushla.",
    "note": null
  },
  {
    "num": 18,
    "time": "00:01:57,920 --> 00:01:58,879",
    "arabic": "أَمْسَكْتُكَ",
    "segs": null,
    "full_uz": "Ushladim.",
    "note": null
  },
  {
    "num": 19,
    "time": "00:01:58,879 --> 00:02:01,759",
    "arabic": "الْمِرْآةُ",
    "segs": null,
    "full_uz": "Oyna!",
    "note": null
  },
  {
    "num": 20,
    "time": "00:02:01,759 --> 00:02:02,759",
    "arabic": "مَاذَا؟",
    "segs": null,
    "full_uz": "Nima?",
    "note": null
  },
  {
    "num": 21,
    "time": "00:02:05,420 --> 00:02:16,680",
    "arabic": "فِي الْمَاضِي لَمْ يَكُنْ لَدَى الْبَشَرِ طَرِيقَةٌ لِرُؤْيَةِ انْعِكَاسِهِمْ سِوَى النَّظَرِ فِي الْمَاءِ",
    "segs": [
      { "ar": "فِي الْمَاضِي لَمْ يَكُنْ لَدَى الْبَشَرِ طَرِيقَةٌ لِرُؤْيَةِ انْعِكَاسِهِمْ", "uz": "o'tmishda odamlarning o'z aksini ko'rish uchun boshqa usuli yo'q edi" },
      { "ar": "سِوَى النَّظَرِ فِي الْمَاءِ", "uz": "suvga qarashdan boshqa" }
    ],
    "full_uz": "O'tmishda odamlarning o'z aksini ko'rish uchun suvga qarashdan boshqa usuli yo'q edi.",
    "note": null
  },
  {
    "num": 22,
    "time": "00:02:16,680 --> 00:02:21,199",
    "arabic": "إِنَّ أَوَّلَ ظُهُورٍ لِلْمِرْآةِ كَانَ قَبْلَ خَمْسَةِ آلَافِ عَامٍ",
    "segs": null,
    "full_uz": "Oynaning ilk paydo bo'lishi besh ming yil oldin bo'lgan,",
    "note": null
  },
  {
    "num": 23,
    "time": "00:02:21,199 --> 00:02:23,879",
    "arabic": "وَكَانَتْ تُصْنَعُ مِنَ الْفِضَّةِ أَوِ الْبُرُونْزِ",
    "segs": null,
    "full_uz": "va u kumush yoki bronzadan yasalgan.",
    "note": null
  },
  {
    "num": 24,
    "time": "00:02:23,879 --> 00:02:31,000",
    "arabic": "تَقُولُ الْمَصَادِرُ إِنَّ الْعَالِمَ الْإِغْرِيقِيَّ أَرْخَمِيدِسَ أَغْرَقَ مَرَّةً أُسْطُولًا كَامِلًا بِمُسَاعَدَةِ هَذِهِ الْمَرَايَا",
    "segs": [
      { "ar": "تَقُولُ الْمَصَادِرُ إِنَّ الْعَالِمَ الْإِغْرِيقِيَّ أَرْخَمِيدِسَ", "uz": "manbalarda yunon olimi Arximed" },
      { "ar": "أَغْرَقَ مَرَّةً أُسْطُولًا كَامِلًا بِمُسَاعَدَةِ هَذِهِ الْمَرَايَا", "uz": "bir marta shu oynalar yordamida butun flotni cho'ktirgani aytiladi" }
    ],
    "full_uz": "Manbalarda yunon olimi Arximed bir marta shu oynalar yordamida butun flotni cho'ktirgani aytiladi.",
    "note": null
  },
  {
    "num": 25,
    "time": "00:02:31,000 --> 00:02:39,079",
    "arabic": "لَكِنْ لَمْ يَسْتَطِعِ الْبَشَرُ رُؤْيَةَ انْعِكَاسَاتٍ وَاضِحَةٍ إِلَى أَنْ بَدَؤُوا بِاسْتِعْمَالِ الْمَرَايَا الزُّجَاجِيَّةِ الَّتِي لَا نَزَالُ نَسْتَعْمِلُهَا",
    "segs": [
      { "ar": "لَكِنْ لَمْ يَسْتَطِعِ الْبَشَرُ رُؤْيَةَ انْعِكَاسَاتٍ وَاضِحَةٍ", "uz": "lekin odamlar aniq aksni ko'ra olishmagan" },
      { "ar": "إِلَى أَنْ بَدَؤُوا بِاسْتِعْمَالِ الْمَرَايَا الزُّجَاجِيَّةِ الَّتِي لَا نَزَالُ نَسْتَعْمِلُهَا", "uz": "biz hozir ham ishlatadigan shisha oynalarni ishlata boshlaguncha" }
    ],
    "full_uz": "Lekin odamlar biz hozir ham ishlatadigan shisha oynalarni ishlata boshlaguncha aniq aksni ko'ra olishmagan.",
    "note": null
  },
  {
    "num": 26,
    "time": "00:02:39,079 --> 00:02:43,359",
    "arabic": "وَلِلْمِرْآةِ أَيْضًا اسْتِعْمَالَاتٌ أُخْرَى",
    "segs": null,
    "full_uz": "Oynaning boshqa ishlatilish sohalari ham bor.",
    "note": null
  },
  {
    "num": 27,
    "time": "00:02:43,359 --> 00:02:47,719",
    "arabic": "إِنَّهَا تُسْتَعْمَلُ فِي الْمِقْرَابِ لِجَمْعِ الضَّوْءِ الصَّادِرِ عَنِ النُّجُومِ الْبَعِيدَةِ",
    "segs": null,
    "full_uz": "U teleskopda uzoq yulduzlardan keladigan yorug'likni to'plash uchun ishlatiladi,",
    "note": null
  },
  {
    "num": 28,
    "time": "00:02:47,719 --> 00:02:52,319",
    "arabic": "كَمَا تُسْتَعْمَلُ دَاخِلَ مَصَابِيحِ السَّيَّارَاتِ كَيْ تُضِيءَ بِقُوَّةٍ أَكْبَرَ",
    "segs": null,
    "full_uz": "shuningdek, mashina faralari ichida kuchliroq yoritish uchun ham ishlatiladi.",
    "note": null
  },
  {
    "num": 29,
    "time": "00:02:52,319 --> 00:02:55,699",
    "arabic": "انْظُرُوا إِلَيْهَا فَضَوْؤُهَا مُبْهِرٌ جِدًّا",
    "segs": null,
    "full_uz": "Qaranglar, uning yorug'i juda ko'z qamashtiradi.",
    "note": null
  },
  {
    "num": 30,
    "time": "00:02:55,699 --> 00:02:58,819",
    "arabic": "انْظُرُوا إِلَى فَائِدَةِ الْمِرْآةِ الْكَبِيرَةِ",
    "segs": null,
    "full_uz": "Oynaning katta foydasiga qaranglar.",
    "note": null
  },
  {
    "num": 31,
    "time": "00:02:58,819 --> 00:03:05,659",
    "arabic": "جَيِّدٌ لَمْ تَنْكَسِرْ",
    "segs": [
      { "ar": "جَيِّدٌ", "uz": "yaxshi" },
      { "ar": "لَمْ تَنْكَسِرْ", "uz": "sinmadi" }
    ],
    "full_uz": "Yaxshi, sinmadi.",
    "note": null
  },
  {
    "num": 32,
    "time": "00:03:05,659 --> 00:03:07,599",
    "arabic": "سَاعِدْنِي عَلَى رَفْعِهَا",
    "segs": null,
    "full_uz": "Uni ko'tarishga yordam ber.",
    "note": null
  },
  {
    "num": 33,
    "time": "00:03:07,599 --> 00:03:13,560",
    "arabic": "تُومْ",
    "segs": null,
    "full_uz": "Tom!",
    "note": null
  },
  {
    "num": 34,
    "time": "00:03:13,560 --> 00:03:17,079",
    "arabic": "لَا أَرَى انْعِكَاسِي فِي الْمِرْآةِ",
    "segs": null,
    "full_uz": "Oynada o'z aksimni ko'rmayapman.",
    "note": null
  },
  {
    "num": 35,
    "time": "00:03:17,079 --> 00:03:18,280",
    "arabic": "هَذَا مُسْتَحِيلٌ",
    "segs": null,
    "full_uz": "Bu mumkin emas.",
    "note": null
  },
  {
    "num": 36,
    "time": "00:03:18,280 --> 00:03:22,640",
    "arabic": "الْأَطْيَافُ هُمُ الْوَحِيدُونَ الَّذِينَ لَا يَسْتَطِيعُونَ رُؤْيَةَ انْعِكَاسِهِمْ",
    "segs": null,
    "full_uz": "Faqat arvohlargina o'z aksini ko'ra olmaydi.",
    "note": null
  },
  {
    "num": 37,
    "time": "00:03:22,640 --> 00:03:24,640",
    "arabic": "أَيْنَ انْعِكَاسِي؟",
    "segs": null,
    "full_uz": "Aksim qayerda?",
    "note": null
  },
  {
    "num": 38,
    "time": "00:03:24,640 --> 00:03:27,740",
    "arabic": "أَظُنُّ أَنَّكَ صِرْتَ طَيْفًا",
    "segs": null,
    "full_uz": "Menimcha, arvohga aylanib qolibsan.",
    "note": null
  },
  {
    "num": 39,
    "time": "00:03:27,740 --> 00:03:35,280",
    "arabic": "لَا لَيْسَ طَيْفًا، لَا أُحِبُّهُ",
    "segs": [
      { "ar": "لَا لَيْسَ طَيْفًا", "uz": "yo'q, arvoh emas" },
      { "ar": "لَا أُحِبُّهُ", "uz": "buni yoqtirmayman" }
    ],
    "full_uz": "Yo'q, arvoh emas, buni yoqtirmayman.",
    "note": null
  },
  {
    "num": 40,
    "time": "00:03:35,280 --> 00:03:40,080",
    "arabic": "مَاذَا هُنَاكَ؟ هَلْ أَوْقَعْتُمَا أَنْفُسَكُمَا فِي الْمَتَاعِبِ مُجَدَّدًا؟",
    "segs": [
      { "ar": "مَاذَا هُنَاكَ", "uz": "nima bo'ldi" },
      { "ar": "هَلْ أَوْقَعْتُمَا أَنْفُسَكُمَا فِي الْمَتَاعِبِ مُجَدَّدًا", "uz": "yana o'zlaringizni muammoga giriftor qildinglaringmi" }
    ],
    "full_uz": "Nima bo'ldi? Yana o'zlaringizni muammoga giriftor qildinglaringmi?",
    "note": null
  },
  {
    "num": 41,
    "time": "00:03:40,080 --> 00:03:43,420",
    "arabic": "سِيمْكَا كُنَّا نُقَلِّدُ الرَّجُلَ الْعَنْكَبُوتَ",
    "segs": null,
    "full_uz": "Simka, o'rgimchak odamga taqlid qilayotgan edik,",
    "note": null
  },
  {
    "num": 42,
    "time": "00:03:43,420 --> 00:03:46,620",
    "arabic": "ثُمَّ لِسَبَبٍ مَا صِرْتُ طَيْفًا خَفِيًّا",
    "segs": null,
    "full_uz": "keyin nimagadir ko'rinmas arvohga aylanib qoldim.",
    "note": null
  },
  {
    "num": 43,
    "time": "00:03:46,620 --> 00:03:48,240",
    "arabic": "أَجَلْ طَيْفٌ",
    "segs": null,
    "full_uz": "Ha, arvoh.",
    "note": null
  },
  {
    "num": 44,
    "time": "00:03:48,240 --> 00:03:50,500",
    "arabic": "مُضْحِكٌ لَيْسَ لَهَا أَيُّ وُجُودٍ",
    "segs": null,
    "full_uz": "Kulgili, arvohlarning mavjudligi yo'q-ku.",
    "note": null
  },
  {
    "num": 45,
    "time": "00:03:50,500 --> 00:03:54,300",
    "arabic": "أَنْتَ أَيْضًا لَيْسَ لَكَ انْعِكَاسٌ",
    "segs": null,
    "full_uz": "Sening ham aksing yo'q-ku.",
    "note": null
  },
  {
    "num": 46,
    "time": "00:03:54,300 --> 00:03:55,780",
    "arabic": "سِيمْكَا",
    "segs": null,
    "full_uz": "Simka!",
    "note": null
  },
  {
    "num": 47,
    "time": "00:03:55,780 --> 00:03:58,099",
    "arabic": "يَبْدُو أَنَّكِ طَيْفٌ مِثْلِي",
    "segs": null,
    "full_uz": "Shekilli, sen ham mendek arvohsan.",
    "note": null
  },
  {
    "num": 48,
    "time": "00:03:58,099 --> 00:04:05,080",
    "arabic": "هَذِهِ سَذَاجَةٌ",
    "segs": null,
    "full_uz": "Bu soddalik.",
    "note": null
  },
  {
    "num": 49,
    "time": "00:04:05,080 --> 00:04:09,439",
    "arabic": "انْظُرِي هَا أَنَا ذَا",
    "segs": null,
    "full_uz": "Qara, mana men.",
    "note": null
  },
  {
    "num": 50,
    "time": "00:04:09,439 --> 00:04:10,980",
    "arabic": "مَرْحَبًا بِكِ",
    "segs": null,
    "full_uz": "Xush kelibsan.",
    "note": null
  },
  {
    "num": 51,
    "time": "00:04:10,980 --> 00:04:13,819",
    "arabic": "لَكِنْ لِمَاذَا لَا يَظْهَرُ انْعِكَاسِي هُنَا؟",
    "segs": null,
    "full_uz": "Lekin nega mening aksim bu yerda ko'rinmayapti?",
    "note": null
  },
  {
    "num": 52,
    "time": "00:04:13,819 --> 00:04:16,620",
    "arabic": "أَظُنُّ هَذَا لِأَنَّ الْمِرْآةَ خُدِشَتْ مِنَ الْخَلْفِ",
    "segs": null,
    "full_uz": "Menimcha, bu oyna orqa tomondan chizilgani uchun,",
    "note": null
  },
  {
    "num": 53,
    "time": "00:04:16,620 --> 00:04:19,519",
    "arabic": "فَهَلْ تَسْتَطِيعُ تَدْوِيرَ الْمِرْآةِ؟",
    "segs": null,
    "full_uz": "oynani aylantira olasanmi?",
    "note": null
  },
  {
    "num": 54,
    "time": "00:04:19,519 --> 00:04:25,680",
    "arabic": "تَمَامًا كَمَا قُلْتِ لَقَدْ كَشَطَ بَعْضًا مِنَ الطِّلَاءِ الْخَاصِّ بِالْمِرْآةِ",
    "segs": [
      { "ar": "تَمَامًا كَمَا قُلْتِ", "uz": "aynan sen aytganidek" },
      { "ar": "لَقَدْ كَشَطَ بَعْضًا مِنَ الطِّلَاءِ الْخَاصِّ بِالْمِرْآةِ", "uz": "oynaning bo'yog'idan bir qismi qirilib ketgan" }
    ],
    "full_uz": "Aynan sen aytganidek, oynaning bo'yog'idan bir qismi qirilib ketgan ekan.",
    "note": null
  },
  {
    "num": 55,
    "time": "00:04:25,680 --> 00:04:30,240",
    "arabic": "الْمِرْآةُ لَيْسَتْ مَحْضَ لَوْحٍ مِنَ الزُّجَاجِ",
    "segs": null,
    "full_uz": "Oyna oddiy shisha varaq emas,",
    "note": null
  },
  {
    "num": 56,
    "time": "00:04:30,240 --> 00:04:33,019",
    "arabic": "فَالزُّجَاجُ يَسْمَحُ لِلضَّوْءِ بِالْعُبُورِ",
    "segs": null,
    "full_uz": "shisha yorug'likning o'tishiga imkon beradi,",
    "note": null
  },
  {
    "num": 57,
    "time": "00:04:33,019 --> 00:04:35,060",
    "arabic": "أَمَّا الْمِرْآةُ فَتَعْكِسُهُ",
    "segs": null,
    "full_uz": "oyna esa uni qaytaradi.",
    "note": null
  },
  {
    "num": 58,
    "time": "00:04:35,060 --> 00:04:38,159",
    "arabic": "وَلِنُحَوِّلَ قِطْعَةَ زُجَاجٍ إِلَى مِرْآةٍ",
    "segs": null,
    "full_uz": "Shisha bo'lagini oynaga aylantirish uchun,",
    "note": null
  },
  {
    "num": 59,
    "time": "00:04:38,159 --> 00:04:42,079",
    "arabic": "نَطْلِي أَحَدَ وَجْهَيْهَا بِطِلَاءٍ خَاصٍّ يَعْكِسُ كُلَّ شَيْءٍ",
    "segs": null,
    "full_uz": "uning bir tomonini hamma narsani aks ettiruvchi maxsus bo'yoq bilan bo'yaymiz,",
    "note": null
  },
  {
    "num": 60,
    "time": "00:04:42,079 --> 00:04:46,159",
    "arabic": "وَلِحِمَايَةِ الطِّلَاءِ الْعَاكِسِ تُضَافُ طَبَقَةٌ أُخْرَى مِنَ الطِّلَاءِ فَوْقَهُ",
    "segs": null,
    "full_uz": "aks ettiruvchi bo'yoqni himoya qilish uchun esa ustidan yana bir qatlam bo'yoq qo'shiladi.",
    "note": null
  },
  {
    "num": 61,
    "time": "00:04:46,159 --> 00:04:48,459",
    "arabic": "وَلَكِنْ عَلَى الرَّغْمِ مِنْ هَذِهِ الْحِمَايَةِ",
    "segs": null,
    "full_uz": "Lekin shu himoyaga qaramay,",
    "note": null
  },
  {
    "num": 62,
    "time": "00:04:48,459 --> 00:04:51,120",
    "arabic": "يَجِبُ مُعَامَلَةُ الْمَرَايَا بِحَذَرٍ",
    "segs": null,
    "full_uz": "oynalarga ehtiyotkorlik bilan munosabatda bo'lish kerak,",
    "note": null
  },
  {
    "num": 63,
    "time": "00:04:51,120 --> 00:04:54,159",
    "arabic": "لِأَنَّهَا قَدْ تُخْدَشُ بِسُهُولَةٍ",
    "segs": null,
    "full_uz": "chunki ular oson chizilib qolishi mumkin,",
    "note": null
  },
  {
    "num": 64,
    "time": "00:04:54,159 --> 00:04:57,219",
    "arabic": "وَمِنَ الْمُمْكِنِ أَنْ تَنْكَسِرَ",
    "segs": null,
    "full_uz": "va sinishi ham mumkin.",
    "note": null
  },
  {
    "num": 65,
    "time": "00:04:57,219 --> 00:05:02,139",
    "arabic": "وَهَلْ نَسْتَطِيعُ أَنْ نُصْلِحَ ذَلِكَ؟",
    "segs": null,
    "full_uz": "Buni tuzata olamizmi?",
    "note": null
  },
  {
    "num": 66,
    "time": "00:05:02,139 --> 00:05:03,259",
    "arabic": "أَجَلْ نَسْتَطِيعُ",
    "segs": null,
    "full_uz": "Ha, uddalaymiz.",
    "note": null
  },
  {
    "num": 67,
    "time": "00:05:03,259 --> 00:05:05,719",
    "arabic": "جَيِّدٌ أَنَّكَ أَحْضَرْتَ حَقِيبَةَ الْأَدَوَاتِ",
    "segs": null,
    "full_uz": "Yaxshiki, asboblar sumkasini olib kelibsan.",
    "note": null
  },
  {
    "num": 68,
    "time": "00:05:05,719 --> 00:05:09,740",
    "arabic": "ظَنَنْتُ أَنَّنَا سَنَحْتَاجُ إِلَيْهَا عِنْدَمَا سَمِعْتُكَ تَصْرُخُ عَالِيًا",
    "segs": null,
    "full_uz": "Baland ovozda qichqirganingni eshitganimda, bizga kerak bo'ladi deb o'yladim.",
    "note": null
  },
  {
    "num": 69,
    "time": "00:05:09,740 --> 00:05:12,120",
    "arabic": "لَا تَقُولِي إِنَّ فِيهَا طِلَاءً لِلْمَرَايَا",
    "segs": null,
    "full_uz": "Unda oynalar uchun bo'yoq ham bor demoqchi emassan-ku?",
    "note": null
  },
  {
    "num": 70,
    "time": "00:05:12,199 --> 00:05:14,960",
    "arabic": "فِي حَقِيبَةِ الْأَدَوَاتِ كُلُّ مَا نَحْتَاجُ إِلَيْهِ",
    "segs": null,
    "full_uz": "Asboblar sumkasida bizga kerak bo'lgan hamma narsa bor.",
    "note": null
  },
  {
    "num": 71,
    "time": "00:05:26,300 --> 00:05:27,600",
    "arabic": "لَقَدْ أَصْلَحْتُهُ",
    "segs": null,
    "full_uz": "Tuzatib bo'ldim.",
    "note": null
  },
  {
    "num": 72,
    "time": "00:05:29,100 --> 00:05:30,300",
    "arabic": "وَالِدِي",
    "segs": null,
    "full_uz": "Dadam!",
    "note": null
  },
  {
    "num": 73,
    "time": "00:05:34,340 --> 00:05:36,480",
    "arabic": "بُنَيَّ تُومْ، مَاذَا تَفْعَلُ؟",
    "segs": [
      { "ar": "بُنَيَّ تُومْ", "uz": "o'g'lim Tom" },
      { "ar": "مَاذَا تَفْعَلُ", "uz": "nima qilyapsan" }
    ],
    "full_uz": "O'g'lim Tom, nima qilyapsan?",
    "note": null
  },
  {
    "num": 74,
    "time": "00:05:36,800 --> 00:05:38,060",
    "arabic": "هَلْ سَتَبْقَى هُنَا؟",
    "segs": null,
    "full_uz": "Bu yerda qolasanmi?",
    "note": null
  },
  {
    "num": 75,
    "time": "00:05:38,060 --> 00:05:41,920",
    "arabic": "صَحِيحٌ يَجِبُ عَلَيَّ أَنْ أُعَلِّقَ هَذِهِ الْمِرْآةَ",
    "segs": [
      { "ar": "صَحِيحٌ", "uz": "to'g'ri" },
      { "ar": "يَجِبُ عَلَيَّ أَنْ أُعَلِّقَ هَذِهِ الْمِرْآةَ", "uz": "bu oynani osib qo'yishim kerak" }
    ],
    "full_uz": "To'g'ri, bu oynani osib qo'yishim kerak.",
    "note": null
  },
  {
    "num": 76,
    "time": "00:05:41,920 --> 00:05:46,699",
    "arabic": "رُبَّمَا غَدًا أَوْ بَعْدَ غَدٍ",
    "segs": null,
    "full_uz": "Balki ertaga yoki indinga.",
    "note": null
  }
];
if (typeof module !== "undefined" && module.exports) {
  module.exports = lessons;
}
