const lessons = [
  {
    "num": 1,
    "time": "00:00:30,739 --> 00:00:36,979",
    "arabic": "الْمِصْعَدُ",
    "segs": null,
    "full_uz": "Lift.",
    "note": null
  },
  {
    "num": 2,
    "time": "00:00:38,399 --> 00:00:44,399",
    "arabic": "بَابُوسْ مَاسِيَا يَجِبُ أَنْ نُسْرِعَ",
    "segs": null,
    "full_uz": "Babus, Masiya, tezlashishimiz kerak.",
    "note": null
  },
  {
    "num": 3,
    "time": "00:00:41,979 --> 00:00:44,280",
    "arabic": "مَاذَا؟ سَيَذْهَبُ تُومُ الْآنَ إِلَى السِّرْكِ",
    "segs": [
      { "ar": "مَاذَا؟", "uz": "Nima?" },
      { "ar": "سَيَذْهَبُ تُومُ الْآنَ إِلَى السِّرْكِ", "uz": "Tom hozir sirkka ketyapti" }
    ],
    "full_uz": "Nima? Tom hozir sirkka ketyapti.",
    "note": null
  },
  {
    "num": 4,
    "time": "00:00:44,280 --> 00:00:46,359",
    "arabic": "وَمَاذَا إِذَنْ؟",
    "segs": null,
    "full_uz": "Xo'sh, nima bo'libdi?",
    "note": null
  },
  {
    "num": 5,
    "time": "00:00:46,359 --> 00:00:48,140",
    "arabic": "تُرِيدُ أَنْ نَذْهَبَ مَعَهُ مُمْكِنٌ؟",
    "segs": null,
    "full_uz": "Biz ham u bilan borsak bo'ladimi?",
    "note": null
  },
  {
    "num": 6,
    "time": "00:00:48,140 --> 00:00:51,200",
    "arabic": "الْجَوَابُ لَا أَنْتُمْ وَحْدَكُمْ بِلَا أَيِّ مُرَاقَبَةٍ",
    "segs": [
      { "ar": "الْجَوَابُ لَا", "uz": "Javob — yo'q" },
      { "ar": "أَنْتُمْ وَحْدَكُمْ بِلَا أَيِّ مُرَاقَبَةٍ", "uz": "sizlar hech qanday nazoratsiz, yolg'iz o'zlaring" }
    ],
    "full_uz": "Javob — yo'q, sizlar hech qanday nazoratsiz, yolg'iz o'zlaring.",
    "note": null
  },
  {
    "num": 7,
    "time": "00:00:51,200 --> 00:00:54,079",
    "arabic": "مَا قَالَ بِلَا أَيِّ مُرَاقَبَةٍ؟ سَيَأْخُذُهُ وَالِدُهُ إِلَى هُنَاكَ",
    "segs": [
      { "ar": "مَا قَالَ بِلَا أَيِّ مُرَاقَبَةٍ؟", "uz": "'nazoratsiz' deganingiz nima?" },
      { "ar": "سَيَأْخُذُهُ وَالِدُهُ إِلَى هُنَاكَ", "uz": "uni otasi u yerga olib boradi-ku" }
    ],
    "full_uz": "'Nazoratsiz' deganingiz nima? Uni otasi u yerga olib boradi-ku.",
    "note": null
  },
  {
    "num": 8,
    "time": "00:00:54,079 --> 00:00:57,099",
    "arabic": "سَنَكُونُ حَذِرِينَ لَا تَقْلَقَا لَنْ يَنْتَبِهَ عَلَيْنَا",
    "segs": [
      { "ar": "سَنَكُونُ حَذِرِينَ", "uz": "ehtiyot bo'lamiz" },
      { "ar": "لَا تَقْلَقَا لَنْ يَنْتَبِهَ عَلَيْنَا", "uz": "xavotir olmanglar, bizni sezmaydi" }
    ],
    "full_uz": "Ehtiyot bo'lamiz, xavotir olmanglar, bizni sezmaydi.",
    "note": "لَا تَقْلَقَا — ikkilik (dual) buyruq shakli, ikki kishiga birdan qaratilgan."
  },
  {
    "num": 9,
    "time": "00:00:57,099 --> 00:00:59,780",
    "arabic": "إِنْ كَانَ وَالِدَاهُمْ هُنَاكَ",
    "segs": null,
    "full_uz": "Agar ularning ota-onasi u yerda bo'lsa...",
    "note": null
  },
  {
    "num": 10,
    "time": "00:00:59,780 --> 00:01:01,820",
    "arabic": "مَرْحَبًا، يُمْكِنُنَا الذَّهَابُ",
    "segs": null,
    "full_uz": "Salom, ketishimiz mumkin.",
    "note": null
  },
  {
    "num": 11,
    "time": "00:01:01,820 --> 00:01:05,140",
    "arabic": "لَحْظَةً، فَأَنَا لَمْ أَقُلْ أَجَلْ بَعْدُ",
    "segs": null,
    "full_uz": "Bir daqiqa, men hali 'ha' demadim-ku.",
    "note": null
  },
  {
    "num": 12,
    "time": "00:01:05,140 --> 00:01:06,239",
    "arabic": "أَجَلْ",
    "segs": null,
    "full_uz": "Ha.",
    "note": null
  },
  {
    "num": 13,
    "time": "00:01:06,239 --> 00:01:11,540",
    "arabic": "سِيمْكَا، نُولِيكْ، أَيْنَ أَنْتُمَا؟ يَجِبُ أَنْ نُسْرِعَ",
    "segs": null,
    "full_uz": "Simka, Nolik, ikkovingiz qayerdasizlar? Tezlashishimiz kerak.",
    "note": "أَنْتُمَا — ikkilik (dual) olmosh, ikki kishiga birdan murojaat qilinganda ishlatiladi."
  },
  {
    "num": 14,
    "time": "00:01:11,540 --> 00:01:13,620",
    "arabic": "هَيَّا يَا تُومُ، حَانَ الْوَقْتُ",
    "segs": null,
    "full_uz": "Qani, Tom, vaqti keldi.",
    "note": null
  },
  {
    "num": 15,
    "time": "00:01:13,620 --> 00:01:16,460",
    "arabic": "سَآتِي، اجْلِسَا فِي قُبَّعَتِي",
    "segs": null,
    "full_uz": "Kelyapman, ikkovingiz shlyapamga o'tiringlar.",
    "note": "اجْلِسَا — ikkilik (dual) buyruq fe'li, ikki kishiga qaratilgan."
  },
  {
    "num": 16,
    "time": "00:01:16,460 --> 00:01:23,120",
    "arabic": "انْظُرُوا مَنْ سَيَذْهَبُ إِلَى السِّيرْكِ الْيَوْمَ",
    "segs": null,
    "full_uz": "Qaranglar, bugun kim sirkka ketyapti.",
    "note": null
  },
  {
    "num": 17,
    "time": "00:01:23,120 --> 00:01:30,079",
    "arabic": "مَاذَا حَدَثَ؟",
    "segs": null,
    "full_uz": "Nima bo'ldi?",
    "note": null
  },
  {
    "num": 18,
    "time": "00:01:30,079 --> 00:01:31,740",
    "arabic": "أَظُنُّ أَنَّ الْمِصْعَدَ تَعَطَّلَ",
    "segs": null,
    "full_uz": "Menimcha, lift buzilib qoldi.",
    "note": null
  },
  {
    "num": 19,
    "time": "00:01:31,740 --> 00:01:32,580",
    "arabic": "لَا تَقْلَقْ",
    "segs": null,
    "full_uz": "Xavotir olma.",
    "note": null
  },
  {
    "num": 20,
    "time": "00:01:32,580 --> 00:01:35,939",
    "arabic": "عَامِلَ الطَّوَارِئِ؟",
    "segs": null,
    "full_uz": "Favqulodda xizmat xodimimi?",
    "note": null
  },
  {
    "num": 21,
    "time": "00:01:35,939 --> 00:01:37,640",
    "arabic": "لَقَدْ عَلِقْنَا فِي الْمِصْعَدِ الْآنَ",
    "segs": null,
    "full_uz": "Biz hozir liftda qolib qoldik.",
    "note": null
  },
  {
    "num": 22,
    "time": "00:01:37,640 --> 00:01:38,400",
    "arabic": "فَهِمْتُ",
    "segs": null,
    "full_uz": "Tushundim.",
    "note": null
  },
  {
    "num": 23,
    "time": "00:01:38,400 --> 00:01:39,900",
    "arabic": "أَرْجُوكَ انْتَظِرْ",
    "segs": null,
    "full_uz": "Iltimos, kuting.",
    "note": null
  },
  {
    "num": 24,
    "time": "00:01:39,900 --> 00:01:42,140",
    "arabic": "سَنُصْلِحُ الْمِصْعَدَ فِي غُضُونِ سَاعَةٍ",
    "segs": null,
    "full_uz": "Biz liftni bir soat ichida ta'mirlaymiz.",
    "note": null
  },
  {
    "num": 25,
    "time": "00:01:42,140 --> 00:01:43,800",
    "arabic": "سَاعَةٌ؟",
    "segs": null,
    "full_uz": "Bir soatmi?",
    "note": null
  },
  {
    "num": 26,
    "time": "00:01:43,800 --> 00:01:46,280",
    "arabic": "لَنْ نَصِلَ عَلَى السِّرْكِ فِي الْوَقْتِ الْمُحَدَّدِ",
    "segs": null,
    "full_uz": "Sirkka vaqtida yetib bora olmaymiz.",
    "note": null
  },
  {
    "num": 27,
    "time": "00:01:46,280 --> 00:01:48,400",
    "arabic": "طَبْ سَنَذْهَبُ إِلَى بَابُوسْ وَمَاسِيَا",
    "segs": null,
    "full_uz": "Xo'p, Babus va Masiyaning oldiga boramiz.",
    "note": null
  },
  {
    "num": 28,
    "time": "00:01:48,400 --> 00:01:50,719",
    "arabic": "أَنَا وَاثِقَةٌ بِأَنَّهُمَا سَيُصْلِحَانِ",
    "segs": null,
    "full_uz": "Ular albatta tuzatib berishlariga ishonaman.",
    "note": "سَيُصْلِحَانِ — ikkilik (dual) fe'l shakli, ikki kishi haqida gap ketganda ishlatiladi."
  },
  {
    "num": 29,
    "time": "00:01:50,719 --> 00:01:59,760",
    "arabic": "يَحْتَاجُ النَّاسُ إِلَى الْمَصَاعِدِ لِمُسَاعَدَتِهِمْ عَلَى الصُّعُودِ إِلَى الطَّوَابِقِ الْعُلْيَا مِنَ الْأَبْنِيَةِ الْمُرْتَفِعَةِ",
    "segs": null,
    "full_uz": "Odamlarga baland binolarning yuqori qavatlariga chiqishda yordam berish uchun liftlar kerak.",
    "note": null
  },
  {
    "num": 30,
    "time": "00:01:59,760 --> 00:02:05,900",
    "arabic": "عِنْدَمَا يَدْخُلُ شَخْصٌ مَا إِلَى الْمِصْعَدِ وَيَضْغَطُ زِرًّا يَعْمَلُ مُحَرِّكُ الْمِصْعَدِ الْكَهْرَبَائِيُّ",
    "segs": null,
    "full_uz": "Kimdir liftga kirib tugmani bosganda, liftning elektr motori ishga tushadi,",
    "note": null
  },
  {
    "num": 31,
    "time": "00:02:05,900 --> 00:02:11,099",
    "arabic": "وَيَسْحَبُ السِّلْكَ الْمَوْصُولَ بِحُجْرَةِ الْمِصْعَدِ فَيَذْهَبُ الْمِصْعَدُ إِلَى الطَّابِقِ الْمَطْلُوبِ",
    "segs": null,
    "full_uz": "u lift kabinasiga ulangan trosni tortadi va lift kerakli qavatga boradi.",
    "note": null
  },
  {
    "num": 32,
    "time": "00:02:11,099 --> 00:02:16,740",
    "arabic": "يَتَدَلَّى السِّلْكُ بِوَسَاطَةِ عَجَلَةٍ وَعَلَيْهِ وَزْنٌ ثَقِيلٌ مُعَلَّقٌ بِطَرَفِهِ الْآخَرِ",
    "segs": [
      { "ar": "يَتَدَلَّى السِّلْكُ بِوَسَاطَةِ عَجَلَةٍ", "uz": "tros g'ildirak orqali osilib turadi" },
      { "ar": "وَعَلَيْهِ وَزْنٌ ثَقِيلٌ مُعَلَّقٌ بِطَرَفِهِ الْآخَرِ", "uz": "uning boshqa uchida esa og'ir yuk osilgan" }
    ],
    "full_uz": "Tros g'ildirak orqali osilib turadi, uning boshqa uchida esa og'ir yuk osilgan.",
    "note": null
  },
  {
    "num": 33,
    "time": "00:02:16,740 --> 00:02:19,159",
    "arabic": "يُوَازِنُ هَذَا الْوَزْنُ الْمُعَاكِسُ الْمِصْعَدَ",
    "segs": null,
    "full_uz": "Bu qarama-qarshi yuk liftni muvozanatlab turadi,",
    "note": null
  },
  {
    "num": 34,
    "time": "00:02:19,159 --> 00:02:22,159",
    "arabic": "وَيُسَاعِدُ الْمُحَرِّكَ الْكَهْرَبَائِيَّ عَلَى أَدَاءِ عَمَلِهِ",
    "segs": null,
    "full_uz": "va elektr motoriga o'z vazifasini bajarishga yordam beradi.",
    "note": null
  },
  {
    "num": 35,
    "time": "00:02:22,159 --> 00:02:30,100",
    "arabic": "أَتَسَاءَلُ عَنِ السَّبَبِ",
    "segs": null,
    "full_uz": "Sababini bilishni istayman.",
    "note": null
  },
  {
    "num": 36,
    "time": "00:02:30,100 --> 00:02:34,100",
    "arabic": "أَظُنُّنِي أَرَى شَيْئًا عَالِقًا هُنَاكَ",
    "segs": null,
    "full_uz": "Menimcha, u yerda biror narsa tiqilib qolganini ko'ryapman.",
    "note": null
  },
  {
    "num": 37,
    "time": "00:02:34,100 --> 00:02:37,420",
    "arabic": "يَبْدُو أَنَّكَ وَجَدْتَ السَّبَبَ",
    "segs": null,
    "full_uz": "Shekilli, sababini topdingiz.",
    "note": null
  },
  {
    "num": 38,
    "time": "00:02:37,420 --> 00:02:38,760",
    "arabic": "يَجِبُ أَنْ نُصْلِحَهُ الْآنَ",
    "segs": null,
    "full_uz": "Uni hozir tuzatishimiz kerak,",
    "note": null
  },
  {
    "num": 39,
    "time": "00:02:38,760 --> 00:02:41,260",
    "arabic": "وَإِلَّا فَلَنْ نَصِلَ إِلَى السِّرْكِ فِي الْوَقْتِ الْمُحَدَّدِ",
    "segs": null,
    "full_uz": "aks holda sirkka vaqtida yetib bora olmaymiz.",
    "note": null
  },
  {
    "num": 40,
    "time": "00:02:41,260 --> 00:02:43,500",
    "arabic": "هَلْ تَعْلَمُ؟ يُمْكِنُ أَنْ يَكُونَ السِّرْكُ هُنَا",
    "segs": [
      { "ar": "هَلْ تَعْلَمُ؟", "uz": "Bilasizmi?" },
      { "ar": "يُمْكِنُ أَنْ يَكُونَ السِّرْكُ هُنَا", "uz": "sirk shu yerda bo'lishi ham mumkin" }
    ],
    "full_uz": "Bilasizmi? Sirk shu yerda bo'lishi ham mumkin.",
    "note": null
  },
  {
    "num": 41,
    "time": "00:02:43,500 --> 00:02:48,240",
    "arabic": "سَيِّدَاتِي سَادَتِي أُقَدِّمُ إِلَيْكُمُ الْفِيكْسِيَّةَ الْمُذْهِلَةَ",
    "segs": null,
    "full_uz": "Xonimlar va janoblar, sizlarga ajoyib fiksi qizni taqdim etaman.",
    "note": null
  },
  {
    "num": 42,
    "time": "00:02:48,240 --> 00:02:51,860",
    "arabic": "وَالْآنَ يُرْجَى الِانْتِبَاهُ عَلَى الْحَبْلِ الْعَالِي",
    "segs": null,
    "full_uz": "Va endi baland arqonga e'tiboringizni qarating.",
    "note": null
  },
  {
    "num": 43,
    "time": "00:03:13,500 --> 00:03:17,919",
    "arabic": "لَا تَنْظُرْ إِلَى الْأَسْفَلِ",
    "segs": null,
    "full_uz": "Pastga qarama.",
    "note": null
  },
  {
    "num": 44,
    "time": "00:03:17,919 --> 00:03:20,620",
    "arabic": "إِذَنْ سَأُغْمِضُ عَيْنَيَّ وَلَنْ أَنْظُرَ إِلَى أَيِّ مَكَانٍ",
    "segs": null,
    "full_uz": "Unda ko'zlarimni yumib olaman va hech qayoqqa qaramayman.",
    "note": "عَيْنَيَّ — ikkilik (dual) shakl, 'ikkala ko'zim' ma'nosini bildiradi."
  },
  {
    "num": 45,
    "time": "00:03:20,620 --> 00:03:26,500",
    "arabic": "وَالْآنَ نُقَدِّمُ إِلَيْكُمْ لَاعِبَ الْجِمْبَازِ الْهَوَائِيِّ",
    "segs": null,
    "full_uz": "Endi sizlarga havo gimnastikachisini taqdim etamiz.",
    "note": null
  },
  {
    "num": 46,
    "time": "00:03:43,500 --> 00:03:51,939",
    "arabic": "تِدِيشْ",
    "segs": null,
    "full_uz": "Tars!",
    "note": "تِدِيشْ — haqiqiy so'z emas, zarba yoki taqillash tovushini ifodalovchi onomatopeya."
  },
  {
    "num": 47,
    "time": "00:03:51,939 --> 00:03:54,159",
    "arabic": "تِدِيشْ",
    "segs": null,
    "full_uz": "Tars!",
    "note": null
  },
  {
    "num": 48,
    "time": "00:03:54,159 --> 00:03:57,539",
    "arabic": "وَالْآنَ حَرَكَاتُ الْفِيكْسِي",
    "segs": null,
    "full_uz": "Endi fiksi harakatlari.",
    "note": null
  },
  {
    "num": 49,
    "time": "00:04:04,020 --> 00:04:06,879",
    "arabic": "لَمْ يَخْرُجْ",
    "segs": null,
    "full_uz": "U chiqmadi.",
    "note": null
  },
  {
    "num": 50,
    "time": "00:04:06,879 --> 00:04:08,420",
    "arabic": "أَعْلَمُ كَيْفَ أُصْلِحُهُ",
    "segs": null,
    "full_uz": "Uni qanday tuzatishni bilaman.",
    "note": null
  },
  {
    "num": 51,
    "time": "00:04:08,420 --> 00:04:09,680",
    "arabic": "مَعَ مَشْهَدِ سِيرْكِنَا الْجَرِيءِ",
    "segs": null,
    "full_uz": "Bizning jasur sirk sahnamiz bilan.",
    "note": null
  },
  {
    "num": 52,
    "time": "00:04:09,680 --> 00:04:11,259",
    "arabic": "انْظُرُوا إِلَى الْأَعْلَى",
    "segs": null,
    "full_uz": "Yuqoriga qaranglar.",
    "note": null
  },
  {
    "num": 53,
    "time": "00:04:11,259 --> 00:04:12,639",
    "arabic": "مَاسِيَا",
    "segs": null,
    "full_uz": "Masiya!",
    "note": null
  },
  {
    "num": 54,
    "time": "00:04:12,639 --> 00:04:14,979",
    "arabic": "إِلَى أَيْنَ؟",
    "segs": null,
    "full_uz": "Qayerga?",
    "note": null
  },
  {
    "num": 55,
    "time": "00:04:14,979 --> 00:04:18,800",
    "arabic": "إِلَى الْمُحَرِّكِ الْكَهْرَبَائِيِّ فَوْقَ",
    "segs": null,
    "full_uz": "Yuqoridagi elektr motoriga.",
    "note": null
  },
  {
    "num": 56,
    "time": "00:04:18,800 --> 00:04:21,639",
    "arabic": "هَلْ تَعْلَمُونَ الطَّرِيقَةَ الصَّحِيحَةَ",
    "segs": null,
    "full_uz": "To'g'ri usulni bilasizlarmi,",
    "note": null
  },
  {
    "num": 57,
    "time": "00:04:21,639 --> 00:04:22,579",
    "arabic": "لِكَيْ تُحْسِنُوا التَّصَرُّفَ دَاخِلَ الْمِصْعَدِ؟",
    "segs": null,
    "full_uz": "lift ichida qanday to'g'ri harakat qilish kerakligini?",
    "note": null
  },
  {
    "num": 58,
    "time": "00:04:22,579 --> 00:04:24,599",
    "arabic": "أَوَّلًا",
    "segs": null,
    "full_uz": "Birinchidan,",
    "note": null
  },
  {
    "num": 59,
    "time": "00:04:24,599 --> 00:04:26,740",
    "arabic": "لَا يَجُوزُ أَنْ يَدْخُلَ الْأَطْفَالُ الصِّغَارُ",
    "segs": null,
    "full_uz": "kichkina bolalar kirmasligi kerak,",
    "note": null
  },
  {
    "num": 60,
    "time": "00:04:26,740 --> 00:04:28,639",
    "arabic": "وَحْدَهُمْ إِلَى الْمِصْعَدِ أَبَدًا",
    "segs": null,
    "full_uz": "hech qachon liftga yolg'iz o'zlari.",
    "note": null
  },
  {
    "num": 61,
    "time": "00:04:28,639 --> 00:04:30,639",
    "arabic": "بَلْ يَجِبُ أَنْ يَدْخُلُوا مَعَ آبَائِهِمْ",
    "segs": null,
    "full_uz": "Balki ular ota-onalari bilan birga kirishlari kerak,",
    "note": null
  },
  {
    "num": 62,
    "time": "00:04:31,439 --> 00:04:32,800",
    "arabic": "أَوْ أَيِّ شَخْصٍ بَالِغٍ يَعْرِفُونَهُ جَيِّدًا",
    "segs": null,
    "full_uz": "yoki yaxshi taniydigan biror kattalar bilan.",
    "note": null
  },
  {
    "num": 63,
    "time": "00:04:32,800 --> 00:04:34,419",
    "arabic": "وَعِنْدَ دُخُولِ الْمِصْعَدِ",
    "segs": null,
    "full_uz": "Liftga kirganda,",
    "note": null
  },
  {
    "num": 64,
    "time": "00:04:34,419 --> 00:04:36,579",
    "arabic": "يَجِبُ عَلَى الشَّخْصِ الْبَالِغِ",
    "segs": null,
    "full_uz": "kattalar",
    "note": null
  },
  {
    "num": 65,
    "time": "00:04:36,579 --> 00:04:37,979",
    "arabic": "أَنْ يَدْخُلَ أَوَّلًا وَبَعْدَهُ الطِّفْلُ",
    "segs": null,
    "full_uz": "avval kirishi, keyin bola kirishi kerak.",
    "note": null
  },
  {
    "num": 66,
    "time": "00:04:37,979 --> 00:04:40,680",
    "arabic": "أَمَّا عِنْدَ الْخُرُوجِ",
    "segs": null,
    "full_uz": "Chiqishda esa,",
    "note": null
  },
  {
    "num": 67,
    "time": "00:04:40,680 --> 00:04:42,159",
    "arabic": "فَعَلَى خِلَافِ ذَلِكَ أَوَّلًا يَخْرُجُ الطِّفْلُ",
    "segs": null,
    "full_uz": "buning aksicha, avval bola chiqadi,",
    "note": null
  },
  {
    "num": 68,
    "time": "00:04:42,160 --> 00:04:45,300",
    "arabic": "وَبَعْدَهُ الشَّخْصُ الْبَالِغُ",
    "segs": null,
    "full_uz": "keyin kattalar chiqadi.",
    "note": null
  },
  {
    "num": 69,
    "time": "00:04:45,300 --> 00:04:49,920",
    "arabic": "وَإِنْ كُنْتَ تُرِيدُ أَنْ تَرْكَبَ الْمِصْعَدَ مَعَ كَلْبٍ",
    "segs": null,
    "full_uz": "Agar it bilan liftga tushmoqchi bo'lsang,",
    "note": null
  },
  {
    "num": 70,
    "time": "00:04:49,920 --> 00:04:52,000",
    "arabic": "فَتَيَقَّنْ أَنَّ ذَيْلَهُ وَرَسَنَهُ دَاخِلَ الْمِصْعَدِ كَيْ لَا يَعْلَقَ فِي بَابِ الْمِصْعَدِ",
    "segs": null,
    "full_uz": "uning dumi va bo'yinbog'i lift ichida ekaniga ishonch hosil qil, toki lift eshigiga qisilib qolmasin.",
    "note": null
  },
  {
    "num": 71,
    "time": "00:04:52,000 --> 00:04:55,740",
    "arabic": "وَهُنَاكَ شَيْءٌ آخَرُ",
    "segs": null,
    "full_uz": "Yana bir narsa bor.",
    "note": null
  },
  {
    "num": 72,
    "time": "00:04:55,740 --> 00:04:57,880",
    "arabic": "إِنْ تَوَقَّفَ الْمِصْعَدُ فَجْأَةً لِسَبَبٍ غَيْرِ مَعْرُوفٍ",
    "segs": null,
    "full_uz": "Agar lift noma'lum sababdan to'satdan to'xtab qolsa,",
    "note": null
  },
  {
    "num": 73,
    "time": "00:04:57,880 --> 00:05:00,960",
    "arabic": "فَلَا تُحَاوِلْ أَنْ تَخْرُجَ مِنْهُ وَحْدَكَ",
    "segs": null,
    "full_uz": "undan yolg'iz o'zing chiqishga urinma.",
    "note": null
  },
  {
    "num": 74,
    "time": "00:05:00,960 --> 00:05:05,180",
    "arabic": "اضْغَطْ عَلَى الزِّرِّ الَّذِي يَتَّصِلُ بِعَامِلِ الطَّوَارِئِ",
    "segs": null,
    "full_uz": "Favqulodda xizmat xodimiga bog'laydigan tugmani bos,",
    "note": null
  },
  {
    "num": 75,
    "time": "00:05:05,180 --> 00:05:06,640",
    "arabic": "وَانْتَظِرِ الْمُسَاعَدَةَ مِنْ عُمَّالِ الصِّيَانَةِ أَوْ مِنَ الْفِيكْسِيزِ",
    "segs": null,
    "full_uz": "va texnik xizmat xodimlaridan yoki fiksilardan yordam kutib tur.",
    "note": null
  },
  {
    "num": 76,
    "time": "00:05:06,640 --> 00:05:10,879",
    "arabic": "وَنَحْنُ مُسْتَعِدُّونَ",
    "segs": null,
    "full_uz": "Va biz tayyormiz.",
    "note": null
  },
  {
    "num": 77,
    "time": "00:05:10,879 --> 00:05:11,879",
    "arabic": "وَصَلْتُ إِلَى الْمُحَرِّكِ",
    "segs": null,
    "full_uz": "Motorga yetib keldim.",
    "note": null
  },
  {
    "num": 78,
    "time": "00:05:11,879 --> 00:05:19,579",
    "arabic": "شَغِّلِي",
    "segs": null,
    "full_uz": "Yoq.",
    "note": null
  },
  {
    "num": 79,
    "time": "00:05:19,579 --> 00:05:22,459",
    "arabic": "لَقَدْ أَصْلَحُوهُ كَانَ ذَلِكَ سَرِيعًا",
    "segs": [
      { "ar": "لَقَدْ أَصْلَحُوهُ", "uz": "ular uni tuzatib qo'yishdi" },
      { "ar": "كَانَ ذَلِكَ سَرِيعًا", "uz": "bu juda tez bo'ldi" }
    ],
    "full_uz": "Ular uni tuzatib qo'yishdi, bu juda tez bo'ldi.",
    "note": null
  },
  {
    "num": 80,
    "time": "00:05:22,459 --> 00:05:25,480",
    "arabic": "وَالْآنَ لَنْ نَتَأَخَّرَ كَانَ عَلَيْنَا أَنْ لَا نَقْلَقَ",
    "segs": [
      { "ar": "وَالْآنَ لَنْ نَتَأَخَّرَ", "uz": "endi kechikmaymiz" },
      { "ar": "كَانَ عَلَيْنَا أَنْ لَا نَقْلَقَ", "uz": "xavotir olmasligimiz kerak edi" }
    ],
    "full_uz": "Endi kechikmaymiz, xavotir olmasligimiz kerak edi.",
    "note": null
  },
  {
    "num": 81,
    "time": "00:05:25,480 --> 00:05:27,879",
    "arabic": "تَوَقَّفْ إِنَّهُ عَالٍ جِدًّا",
    "segs": null,
    "full_uz": "To'xta, bu juda baland.",
    "note": null
  },
  {
    "num": 82,
    "time": "00:05:27,879 --> 00:05:30,079",
    "arabic": "وَلَكِنَّ تُومَ ذَهَبَ إِلَى السِّرْكِ وَتَرَكَنَا",
    "segs": null,
    "full_uz": "Lekin Tom sirkka ketdi va bizni tashlab qo'ydi.",
    "note": null
  },
  {
    "num": 83,
    "time": "00:05:30,079 --> 00:05:33,579",
    "arabic": "لَا دَاعِيَ لِكَيْ تَحْزَنَ يَا نُولِيكْ",
    "segs": null,
    "full_uz": "Xafa bo'lishing shart emas, Nolik,",
    "note": null
  },
  {
    "num": 84,
    "time": "00:05:33,579 --> 00:05:34,279",
    "arabic": "فَسِرْكُنَا جَيِّدٌ كَسِرْكِهِمْ أَلَيْسَ كَذَلِكَ؟",
    "segs": [
      { "ar": "فَسِرْكُنَا جَيِّدٌ كَسِرْكِهِمْ", "uz": "bizning sirkimiz ularnikidek yaxshi-ku" },
      { "ar": "أَلَيْسَ كَذَلِكَ؟", "uz": "shunday emasmi?" }
    ],
    "full_uz": "Bizning sirkimiz ularnikidek yaxshi-ku, shunday emasmi?",
    "note": null
  },
  {
    "num": 85,
    "time": "00:05:34,279 --> 00:05:36,339",
    "arabic": "بِلَا رَيْبٍ",
    "segs": null,
    "full_uz": "Shubhasiz.",
    "note": null
  },
  {
    "num": 86,
    "time": "00:05:36,339 --> 00:05:38,519",
    "arabic": "شُكْرًا",
    "segs": null,
    "full_uz": "Rahmat.",
    "note": null
  },
  {
    "num": 87,
    "time": "00:05:38,519 --> 00:05:41,279",
    "arabic": "شُكْرًا لِمَنْ يَا تُومُ؟",
    "segs": null,
    "full_uz": "Kimga rahmat, Tom?",
    "note": null
  },
  {
    "num": 88,
    "time": "00:05:41,140 --> 00:05:44,630",
    "arabic": "شُكْرًا لِمَنْ؟ لِعُمَّالِ صِيَانَةِ الْمِصْعَدِ",
    "segs": [
      { "ar": "شُكْرًا لِمَنْ؟", "uz": "Kimgami?" },
      { "ar": "لِعُمَّالِ صِيَانَةِ الْمِصْعَدِ", "uz": "lift ta'mirchilariga" }
    ],
    "full_uz": "Kimgami? Lift ta'mirchilariga.",
    "note": null
  }
];
if (typeof module !== "undefined" && module.exports) {
  module.exports = lessons;
}
