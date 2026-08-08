const lessons = [
  {
    "num": 1,
    "time": "00:00:34,399 --> 00:00:38,040",
    "arabic": "جَرَسُ الْبَابِ",
    "segs": null,
    "full_uz": "Eshik qo'ng'irog'i",
    "note": "جَرَسُ الْبَابِ — eshik qo'ng'irog'i. Bu yerda epizod nomi sifatida ishlatilgan."
  },
  {
    "num": 2,
    "time": "00:00:38,739 --> 00:00:39,739",
    "arabic": "نُولِيك",
    "segs": null,
    "full_uz": "Nolik!",
    "note": null
  },
  {
    "num": 3,
    "time": "00:00:40,739 --> 00:00:42,739",
    "arabic": "نُولِيك، مَاذَا تَفْعَلُ هُنَا؟",
    "segs": null,
    "full_uz": "Nolik, bu yerda nima qilyapsan?",
    "note": null
  },
  {
    "num": 4,
    "time": "00:00:42,739 --> 00:00:43,739",
    "arabic": "أُدَنْدِنُ لَحْنًا",
    "segs": null,
    "full_uz": "Bir kuyni xirgoyi qilyapman.",
    "note": null
  },
  {
    "num": 5,
    "time": "00:00:43,739 --> 00:00:46,739",
    "arabic": "لَقَدْ غَادَرَ تُوم الْآنَ مَعَ أَهْلِهِ مُدَّةَ أُسْبُوعٍ",
    "segs": [
      { "ar": "لَقَدْ غَادَرَ تُوم الْآنَ مَعَ أَهْلِهِ", "uz": "Tom hozir oilasi bilan ketdi" },
      { "ar": "مُدَّةَ أُسْبُوعٍ", "uz": "bir haftaga" }
    ],
    "full_uz": "Tom hozir oilasi bilan bir haftaga ketdi.",
    "note": null
  },
  {
    "num": 6,
    "time": "00:00:46,739 --> 00:00:49,739",
    "arabic": "هَلْ سَتُدَنْدِنُ هَذَا اللَّحْنَ إِلَى أَنْ يَعُودَ؟",
    "segs": null,
    "full_uz": "U qaytguncha shu kuyni xirgoyi qilaverasanmi?",
    "note": null
  },
  {
    "num": 7,
    "time": "00:00:49,739 --> 00:00:51,739",
    "arabic": "وَلَدَيْنَا زُوَّارٌ قَادِمُونَ",
    "segs": null,
    "full_uz": "Bizga mehmonlar kelmoqda.",
    "note": null
  },
  {
    "num": 8,
    "time": "00:00:51,739 --> 00:00:52,739",
    "arabic": "أَنَسِيتَ؟",
    "segs": null,
    "full_uz": "Unutdingmi?",
    "note": null
  },
  {
    "num": 9,
    "time": "00:00:52,739 --> 00:00:53,739",
    "arabic": "أَيُّ زُوَّارٍ؟",
    "segs": null,
    "full_uz": "Qanaqa mehmonlar?",
    "note": null
  },
  {
    "num": 10,
    "time": "00:00:53,739 --> 00:00:55,739",
    "arabic": "لَقَدْ دَعَوْتُ الْجَمِيعَ إِلَى هُنَا",
    "segs": null,
    "full_uz": "Men hammani shu yerga taklif qildim.",
    "note": null
  },
  {
    "num": 11,
    "time": "00:00:55,739 --> 00:00:56,739",
    "arabic": "الصَّفَّ؟",
    "segs": null,
    "full_uz": "Sinfni-mi?",
    "note": null
  },
  {
    "num": 12,
    "time": "00:00:56,739 --> 00:00:57,739",
    "arabic": "أَجَلْ",
    "segs": null,
    "full_uz": "Ha.",
    "note": null
  },
  {
    "num": 13,
    "time": "00:00:57,740 --> 00:00:59,219",
    "arabic": "رَائِعٌ",
    "segs": null,
    "full_uz": "Ajoyib.",
    "note": null
  },
  {
    "num": 14,
    "time": "00:00:59,219 --> 00:01:08,200",
    "arabic": "هَلْ هُمْ نَائِمُونَ أَمْ مَاذَا؟",
    "segs": null,
    "full_uz": "Ular uxlab qolishdimi yoki nima?",
    "note": null
  },
  {
    "num": 15,
    "time": "00:01:08,200 --> 00:01:10,820",
    "arabic": "أَوَّلًا يَدْعُونَنَا وَالْآنَ لَا يُدْخِلُونَنَا",
    "segs": [
      { "ar": "أَوَّلًا يَدْعُونَنَا", "uz": "avval bizni taklif qilishadi" },
      { "ar": "وَالْآنَ لَا يُدْخِلُونَنَا", "uz": "endi esa kirgizishmayapti" }
    ],
    "full_uz": "Avval bizni taklif qilishadi, endi esa kirgizishmayapti.",
    "note": null
  },
  {
    "num": 16,
    "time": "00:01:10,820 --> 00:01:13,299",
    "arabic": "إِذَنْ لِنَأْكُلِ الْكَاكَاوَ وَحْدَنَا",
    "segs": null,
    "full_uz": "Unda kakaoni o'zimiz yeb qo'yaylik.",
    "note": null
  },
  {
    "num": 17,
    "time": "00:01:13,299 --> 00:01:16,099",
    "arabic": "فَايَر، لِمَ لَا تُحَاوِلُ تَشْغِيلَهُ؟",
    "segs": null,
    "full_uz": "Fayer, uni ishga tushirib ko'rmaysanmi?",
    "note": "فَايَر — qahramon (Fiksik o'quvchi) ismi."
  },
  {
    "num": 18,
    "time": "00:01:17,099 --> 00:01:19,620",
    "arabic": "عِنْدَمَا يَصِلُونَ سَيَقْرَعُونَهُ",
    "segs": null,
    "full_uz": "Ular kelganida qo'ng'iroqni chalishadi.",
    "note": null
  },
  {
    "num": 19,
    "time": "00:01:19,620 --> 00:01:24,040",
    "arabic": "لِمَاذَا؟ وَلِمَاذَا لَا يَدْخُلُونَ كَالْعَادَةِ خِلَالَ ثُقْبِ الْمِفْتَاحِ؟",
    "segs": [
      { "ar": "لِمَاذَا؟", "uz": "nega?" },
      { "ar": "وَلِمَاذَا لَا يَدْخُلُونَ كَالْعَادَةِ خِلَالَ ثُقْبِ الْمِفْتَاحِ؟", "uz": "va nega odatdagidek kalit teshigidan kirmayapti?" }
    ],
    "full_uz": "Nega? Va nega odatdagidek kalit teshigidan kirmayapti?",
    "note": null
  },
  {
    "num": 20,
    "time": "00:01:24,040 --> 00:01:28,080",
    "arabic": "مُسْتَحِيلٌ، الْأَمْرُ لَيْسَ بِتِلْكَ الْبَسَاطَةِ، فَالْيَوْمَ هُمْ ضُيُوفُنَا",
    "segs": [
      { "ar": "مُسْتَحِيلٌ، الْأَمْرُ لَيْسَ بِتِلْكَ الْبَسَاطَةِ", "uz": "bo'lishi mumkin emas, ish unchalik oddiy emas" },
      { "ar": "فَالْيَوْمَ هُمْ ضُيُوفُنَا", "uz": "chunki bugun ular bizning mehmonlarimiz" }
    ],
    "full_uz": "Bo'lishi mumkin emas, ish unchalik oddiy emas, chunki bugun ular bizning mehmonlarimiz.",
    "note": null
  },
  {
    "num": 21,
    "time": "00:01:28,080 --> 00:01:33,280",
    "arabic": "آهْ، يَقْرَعُ الضُّيُوفُ الْجَرَسَ فَيَقُومُ الْمُضِيفُونَ بِإِدْخَالِهِمْ",
    "segs": [
      { "ar": "آهْ، يَقْرَعُ الضُّيُوفُ الْجَرَسَ", "uz": "ah, mehmonlar qo'ng'iroqni chalishadi" },
      { "ar": "فَيَقُومُ الْمُضِيفُونَ بِإِدْخَالِهِمْ", "uz": "uy egalari esa ularni kirgizishadi" }
    ],
    "full_uz": "Ah, mehmonlar qo'ng'iroqni chalishadi, uy egalari esa ularni kirgizishadi.",
    "note": null
  },
  {
    "num": 22,
    "time": "00:01:33,280 --> 00:01:36,140",
    "arabic": "إِنَّهُ لَا يَرِنُّ",
    "segs": null,
    "full_uz": "U jiringlamayapti.",
    "note": null
  },
  {
    "num": 23,
    "time": "00:01:36,140 --> 00:01:38,040",
    "arabic": "هَلْ تَظُنُّ أَنَّهُ مُعَطَّلٌ؟",
    "segs": null,
    "full_uz": "Buzilgan deb o'ylaysanmi?",
    "note": null
  },
  {
    "num": 24,
    "time": "00:01:38,840 --> 00:01:39,920",
    "arabic": "هَيَّا بِنَا نُصْلِحْ",
    "segs": null,
    "full_uz": "Qani, tuzataylik.",
    "note": null
  },
  {
    "num": 25,
    "time": "00:01:39,920 --> 00:01:43,040",
    "arabic": "قَبْلَ أَنْ نُصْلِحَ أَيَّ شَيْءٍ عَلَيْنَا أَنْ نَعْرِفَ مُشْكِلَتَهَا",
    "segs": null,
    "full_uz": "Biror narsani tuzatishdan oldin, uning muammosini bilishimiz kerak.",
    "note": null
  },
  {
    "num": 26,
    "time": "00:01:43,600 --> 00:01:46,040",
    "arabic": "نُصْلِحُهُ أَوَّلًا فَنَعْرِفُ الْعَطَلَ",
    "segs": null,
    "full_uz": "Avval tuzatamiz, keyin nosozlikni bilib olamiz.",
    "note": null
  },
  {
    "num": 27,
    "time": "00:01:47,000 --> 00:01:53,260",
    "arabic": "فِي الْمَاضِي كَانَ النَّاسُ يُعَلِّقُونَ جَرَسًا عَلَى أَبْوَابِهِمْ بِالْحَبْلِ",
    "segs": null,
    "full_uz": "O'tmishda odamlar eshiklariga arqon bilan qo'ng'iroq osib qo'yishardi.",
    "note": null
  },
  {
    "num": 28,
    "time": "00:01:53,260 --> 00:01:56,300",
    "arabic": "وَكَانَ الضُّيُوفُ يَسْحَبُونَ الْحَبْلَ فَيَرِنُّ الْجَرَسُ",
    "segs": null,
    "full_uz": "Va mehmonlar arqonni tortishardi, shunda qo'ng'iroq jiringlardi.",
    "note": null
  },
  {
    "num": 29,
    "time": "00:01:56,300 --> 00:02:01,040",
    "arabic": "الْيَوْمَ الْأَجْرَاسُ كَهْرَبَائِيَّةٌ وَتُصْدِرُ أَنْوَاعًا مُخْتَلِفَةً مِنَ الْأَصْوَاتِ",
    "segs": [
      { "ar": "الْيَوْمَ الْأَجْرَاسُ كَهْرَبَائِيَّةٌ", "uz": "bugungi qo'ng'iroqlar elektr" },
      { "ar": "وَتُصْدِرُ أَنْوَاعًا مُخْتَلِفَةً مِنَ الْأَصْوَاتِ", "uz": "va turli xil ovozlar chiqaradi" }
    ],
    "full_uz": "Bugungi qo'ng'iroqlar elektr bo'lib, turli xil ovozlar chiqaradi.",
    "note": null
  },
  {
    "num": 30,
    "time": "00:02:01,040 --> 00:02:05,580",
    "arabic": "بَعْضُهَا يَطِنُّ وَبَعْضُهَا يَرِنُّ وَبَعْضُهَا يُزَقْزِقُ كَالْعَصَافِيرِ",
    "segs": null,
    "full_uz": "Ba'zilari g'ing'illaydi, ba'zilari jiringlaydi, ba'zilari esa qushlarga o'xshab chug'urlaydi.",
    "note": null
  },
  {
    "num": 31,
    "time": "00:02:05,580 --> 00:02:08,480",
    "arabic": "يَأْتِي الصَّوْتُ مِنْ صُنْدُوقٍ يُوضَعُ دَاخِلَ الْمَنْزِلِ",
    "segs": null,
    "full_uz": "Ovoz uy ichiga qo'yilgan qutidan chiqadi.",
    "note": null
  },
  {
    "num": 32,
    "time": "00:02:08,480 --> 00:02:11,840",
    "arabic": "وَكَيْ يَرِنَّ عَلَيْكَ أَنْ تَكْبِسَ زِرًّا يَقَعُ فِي الْخَارِجِ",
    "segs": null,
    "full_uz": "Va uni jiringlatish uchun tashqaridagi tugmani bosishing kerak.",
    "note": null
  },
  {
    "num": 33,
    "time": "00:02:11,840 --> 00:02:14,280",
    "arabic": "يَعْمَلُ هَذَا الزِّرُّ كَمِفْتَاحِ الْإِضَاءَةِ",
    "segs": null,
    "full_uz": "Bu tugma yorug'lik kaliti kabi ishlaydi.",
    "note": null
  },
  {
    "num": 34,
    "time": "00:02:14,280 --> 00:02:17,460",
    "arabic": "لَكِنْ بَدَلَ أَنْ يُشَغِّلَ مِصْبَاحًا يُشَغِّلُ صَوْتًا",
    "segs": null,
    "full_uz": "Lekin lampani yoqish o'rniga, u tovushni yoqadi.",
    "note": null
  },
  {
    "num": 35,
    "time": "00:02:17,460 --> 00:02:23,240",
    "arabic": "فِرِد، هَلْ تُسَاعِدِينَنِي؟",
    "segs": null,
    "full_uz": "Ferd, menga yordam berasanmi?",
    "note": "فِرِد — qahramon ismi."
  },
  {
    "num": 36,
    "time": "00:02:23,240 --> 00:02:29,200",
    "arabic": "عَلَيَّ أَنْ أُفَكِّرَ فِي هَذَا",
    "segs": null,
    "full_uz": "Bu haqda o'ylab ko'rishim kerak.",
    "note": null
  },
  {
    "num": 37,
    "time": "00:02:29,200 --> 00:02:30,500",
    "arabic": "أَجَلْ",
    "segs": null,
    "full_uz": "Ha.",
    "note": null
  },
  {
    "num": 38,
    "time": "00:02:30,500 --> 00:02:32,780",
    "arabic": "سِيمْكَا",
    "segs": null,
    "full_uz": "Simka!",
    "note": null
  },
  {
    "num": 39,
    "time": "00:02:32,780 --> 00:02:35,520",
    "arabic": "هَلْ تَظُنِّينَ أَنَّ ضُيُوفَكِ سَيَأْتُونَ؟",
    "segs": null,
    "full_uz": "Mehmonlaring kelishadi deb o'ylaysanmi?",
    "note": null
  },
  {
    "num": 40,
    "time": "00:02:35,520 --> 00:02:37,060",
    "arabic": "سِيمْكَا",
    "segs": null,
    "full_uz": "Simka!",
    "note": null
  },
  {
    "num": 41,
    "time": "00:02:37,060 --> 00:02:38,820",
    "arabic": "جُولَا، أَهْلًا",
    "segs": null,
    "full_uz": "Jula, xush kelibsan.",
    "note": "جُولَا — qahramon ismi."
  },
  {
    "num": 42,
    "time": "00:02:38,820 --> 00:02:41,840",
    "arabic": "إِنَّ الْجَرَسَ لَا يَعْمَلُ، لَا شَكَّ أَنَّهُ مُعَطَّلٌ",
    "segs": [
      { "ar": "إِنَّ الْجَرَسَ لَا يَعْمَلُ", "uz": "qo'ng'iroq ishlamayapti" },
      { "ar": "لَا شَكَّ أَنَّهُ مُعَطَّلٌ", "uz": "shubhasiz, u buzilgan" }
    ],
    "full_uz": "Qo'ng'iroq ishlamayapti, shubhasiz, u buzilgan.",
    "note": null
  },
  {
    "num": 43,
    "time": "00:02:41,840 --> 00:02:44,740",
    "arabic": "غَرِيبٌ، سَمِعْنَاهُ يَرِنُّ صَبَاحًا",
    "segs": null,
    "full_uz": "Qiziq, ertalab jiringlaganini eshitgan edik.",
    "note": null
  },
  {
    "num": 44,
    "time": "00:02:44,740 --> 00:02:46,219",
    "arabic": "نُولِيك، لِنَذْهَبْ",
    "segs": null,
    "full_uz": "Nolik, ketaylik.",
    "note": null
  },
  {
    "num": 45,
    "time": "00:02:46,219 --> 00:02:50,640",
    "arabic": "أَوَّلًا سَنَفْحَصُ الْأَسْلَاكَ",
    "segs": null,
    "full_uz": "Avval simlarni tekshiramiz.",
    "note": null
  },
  {
    "num": 46,
    "time": "00:02:50,639 --> 00:02:55,879",
    "arabic": "إِنَّهَا مَشْدُودَةٌ",
    "segs": null,
    "full_uz": "Ular tortilgan.",
    "note": null
  },
  {
    "num": 47,
    "time": "00:02:55,879 --> 00:02:58,019",
    "arabic": "حَسَنًا، إِلَى مُكَبِّرِ الصَّوْتِ",
    "segs": null,
    "full_uz": "Xo'p, dinamikka o'taylik.",
    "note": null
  },
  {
    "num": 48,
    "time": "00:02:58,019 --> 00:03:04,219",
    "arabic": "حَالُهُ جَيِّدَةٌ",
    "segs": null,
    "full_uz": "Holati yaxshi.",
    "note": null
  },
  {
    "num": 49,
    "time": "00:03:04,219 --> 00:03:06,719",
    "arabic": "لَعَلَّهَا الْقِطَعُ الْإِلِكْتْرُونِيَّةُ",
    "segs": null,
    "full_uz": "Balki elektron qismlar bo'lsa kerak.",
    "note": null
  },
  {
    "num": 50,
    "time": "00:03:06,719 --> 00:03:10,419",
    "arabic": "مَا رَأْيُكِ أَنْ نَفْصِلَ الْأَسْلَاكَ وَنُبَادِلَهَا؟",
    "segs": null,
    "full_uz": "Simlarni ajratib, joyini almashtirsak-chi?",
    "note": null
  },
  {
    "num": 51,
    "time": "00:03:10,419 --> 00:03:11,699",
    "arabic": "مَاذَا سَيَحْدُثُ؟",
    "segs": null,
    "full_uz": "Nima bo'ladi?",
    "note": null
  },
  {
    "num": 52,
    "time": "00:03:11,699 --> 00:03:12,579",
    "arabic": "سَنَعْرِفُ الْآنَ",
    "segs": null,
    "full_uz": "Hozir bilib olamiz.",
    "note": null
  },
  {
    "num": 53,
    "time": "00:03:20,639 --> 00:03:25,139",
    "arabic": "أَتَعْرِفِينَ؟",
    "segs": null,
    "full_uz": "Bilasanmi?",
    "note": null
  },
  {
    "num": 54,
    "time": "00:03:25,139 --> 00:03:27,399",
    "arabic": "لِمَاذَا لَا نَصِلُ هَذِهِ الْأَسْلَاكَ مَعًا؟",
    "segs": null,
    "full_uz": "Nega bu simlarni birga ulamaymiz?",
    "note": null
  },
  {
    "num": 55,
    "time": "00:03:27,399 --> 00:03:29,279",
    "arabic": "أَلَيْسَ ذَلِكَ خَطِيرًا؟",
    "segs": null,
    "full_uz": "Bu xavfli emasmi?",
    "note": null
  },
  {
    "num": 56,
    "time": "00:03:29,279 --> 00:03:30,399",
    "arabic": "سَنَعْرِفُ ذَلِكَ",
    "segs": null,
    "full_uz": "Buni bilib olamiz.",
    "note": null
  },
  {
    "num": 57,
    "time": "00:03:30,399 --> 00:03:33,579",
    "arabic": "لَا تَقْلَقِي، لَمْ يَحْدُثْ شَيْءٌ بَعْدُ",
    "segs": [
      { "ar": "لَا تَقْلَقِي", "uz": "xavotir olma" },
      { "ar": "لَمْ يَحْدُثْ شَيْءٌ بَعْدُ", "uz": "hali hech narsa bo'lgani yo'q" }
    ],
    "full_uz": "Xavotir olma, hali hech narsa bo'lgani yo'q.",
    "note": null
  },
  {
    "num": 58,
    "time": "00:03:33,579 --> 00:03:39,419",
    "arabic": "فَايَر هُوَ مُحَرِّكُ صَفِّنَا",
    "segs": null,
    "full_uz": "Fayer bizning sinfimizning dvigateli.",
    "note": null
  },
  {
    "num": 59,
    "time": "00:03:39,419 --> 00:03:42,539",
    "arabic": "هُوَ الْأَسْرَعُ وَالْأَرْشَقُ وَالْأَشْجَعُ",
    "segs": null,
    "full_uz": "U eng tezkor, eng chaqqon va eng jasur.",
    "note": null
  },
  {
    "num": 60,
    "time": "00:03:42,539 --> 00:03:46,239",
    "arabic": "لَا يَلْزَمُ فَايَرُ مَكَانَهُ ثَانِيَةً وَاحِدَةً",
    "segs": null,
    "full_uz": "Fayer bir soniya ham joyida turmaydi.",
    "note": null
  },
  {
    "num": 61,
    "time": "00:03:46,239 --> 00:03:48,539",
    "arabic": "وَمُسْتَعِدٌّ دَائِمًا لِلْمُغَامَرَةِ",
    "segs": null,
    "full_uz": "Va doim sarguzashtga tayyor.",
    "note": null
  },
  {
    "num": 62,
    "time": "00:03:48,539 --> 00:03:51,019",
    "arabic": "الْأَفْكَارُ تَحْتَرِقُ فِي رَأْسِهِ",
    "segs": null,
    "full_uz": "Uning boshida g'oyalar yonib turadi.",
    "note": null
  },
  {
    "num": 63,
    "time": "00:03:51,019 --> 00:03:52,900",
    "arabic": "وَلِهَذَا اسْمُهُ فَايَر",
    "segs": null,
    "full_uz": "Shuning uchun uning ismi Fayer.",
    "note": null
  },
  {
    "num": 64,
    "time": "00:03:52,900 --> 00:03:56,379",
    "arabic": "وَلَكِنْ لَيْسَتْ كُلُّ أَفْكَارِهِ جَيِّدَةً",
    "segs": null,
    "full_uz": "Lekin uning barcha g'oyalari yaxshi emas.",
    "note": null
  },
  {
    "num": 65,
    "time": "00:03:56,379 --> 00:03:59,699",
    "arabic": "وَلِهَذَا يَتَلَقَّى دَائِمًا الْكَدَمَاتِ وَالرُّدُودَ",
    "segs": null,
    "full_uz": "Shuning uchun u doim ko'karishlar va tanbehlar oladi.",
    "note": null
  },
  {
    "num": 66,
    "time": "00:03:59,699 --> 00:04:02,539",
    "arabic": "وَمَعَ ذَلِكَ يَبْقَى دَائِمَ الْحَمَاسَةِ",
    "segs": null,
    "full_uz": "Shunga qaramay, u doim ishtiyoqli bo'lib qoladi.",
    "note": null
  },
  {
    "num": 67,
    "time": "00:04:02,539 --> 00:04:04,519",
    "arabic": "وَإِنْ كَانَ يَحْتَرِقُ بِفِكْرَةٍ مَا",
    "segs": null,
    "full_uz": "Va agar biror g'oya bilan yonib ketsa,",
    "note": null
  },
  {
    "num": 68,
    "time": "00:04:04,519 --> 00:04:06,539",
    "arabic": "فَقَدْ يَنْسَى حِصَصَهُ فِي الْمَدْرَسَةِ",
    "segs": null,
    "full_uz": "maktabdagi darslarini unutib qo'yishi mumkin.",
    "note": null
  },
  {
    "num": 69,
    "time": "00:04:07,159 --> 00:04:09,639",
    "arabic": "يُعَاقِبُهُ جْرَانْد بُوس عَلَى ذَلِكَ",
    "segs": null,
    "full_uz": "Buning uchun Grand Bos uni jazolaydi.",
    "note": "جْرَانْد بُوس — maktab direktori (qahramon nomi)."
  },
  {
    "num": 70,
    "time": "00:04:09,639 --> 00:04:12,019",
    "arabic": "وَلَكِنْ ذَلِكَ لَا يُزْعِجُ فَايَرَ",
    "segs": null,
    "full_uz": "Lekin bu Fayerni bezovta qilmaydi.",
    "note": null
  },
  {
    "num": 71,
    "time": "00:04:12,019 --> 00:04:16,539",
    "arabic": "لِأَنَّ خُطَّةً جَدِيدَةً سَتَنْبَثِقُ دَاخِلَ رَأْسِهِ فِي الثَّانِيَةِ الْمُقْبِلَةِ",
    "segs": null,
    "full_uz": "Chunki keyingi soniyadayoq uning boshida yangi reja tug'iladi.",
    "note": null
  },
  {
    "num": 72,
    "time": "00:04:17,100 --> 00:04:21,220",
    "arabic": "بِصَرَاحَةٍ فَايَر هُوَ الْمُفَضَّلُ مِنْ بَيْنِ كُلِّ الطُّلَّابِ",
    "segs": null,
    "full_uz": "Ochig'ini aytsam, Fayer barcha o'quvchilar orasida eng sevimlisi.",
    "note": null
  },
  {
    "num": 73,
    "time": "00:04:21,220 --> 00:04:23,900",
    "arabic": "لَنْ تَشْعُرَ بِالْمَلَلِ وَهُوَ قَرِيبٌ",
    "segs": null,
    "full_uz": "U yaqiningda bo'lsa, zerikmaysan.",
    "note": null
  },
  {
    "num": 74,
    "time": "00:04:23,900 --> 00:04:29,200",
    "arabic": "أَنْتُمَا فِي الْأَسْفَلِ",
    "segs": null,
    "full_uz": "Sizlar pastdamisiz?",
    "note": null
  },
  {
    "num": 75,
    "time": "00:04:29,200 --> 00:04:31,700",
    "arabic": "لَقَدِ اكْتَشَفْتُ لِمَاذَا لَا يَعْمَلُ",
    "segs": null,
    "full_uz": "Nega ishlamasligini bilib oldim.",
    "note": null
  },
  {
    "num": 76,
    "time": "00:04:31,700 --> 00:04:33,560",
    "arabic": "أَخْبِرْنَا لِمَاذَا لَا يَعْمَلُ",
    "segs": null,
    "full_uz": "Ayt-chi, nega ishlamayapti.",
    "note": null
  },
  {
    "num": 77,
    "time": "00:04:33,560 --> 00:04:35,500",
    "arabic": "مَا مِنْ كَهْرَبَاءَ فِي كُلِّ الْبَيْتِ",
    "segs": null,
    "full_uz": "Butun uyda elektr yo'q.",
    "note": null
  },
  {
    "num": 78,
    "time": "00:04:35,500 --> 00:04:37,840",
    "arabic": "لِهَذَا السَّبَبِ لَا يَعْمَلُ الْجَرَسُ",
    "segs": null,
    "full_uz": "Shuning uchun qo'ng'iroq ishlamayapti.",
    "note": null
  },
  {
    "num": 79,
    "time": "00:04:37,840 --> 00:04:40,480",
    "arabic": "مَاذَا إِذَنْ؟",
    "segs": null,
    "full_uz": "Unda nima qilamiz?",
    "note": null
  },
  {
    "num": 80,
    "time": "00:04:40,480 --> 00:04:44,340",
    "arabic": "أَلَا يُمْكِنُنَا أَنْ نَزُورَهُمْ ضُيُوفًا حَقِيقِيِّينَ حَتَّى تَعُودَ الْكَهْرَبَاءُ؟",
    "segs": [
      { "ar": "أَلَا يُمْكِنُنَا أَنْ نَزُورَهُمْ ضُيُوفًا حَقِيقِيِّينَ", "uz": "ularni haqiqiy mehmon sifatida tashrif buyursak bo'lmaydimi" },
      { "ar": "حَتَّى تَعُودَ الْكَهْرَبَاءُ؟", "uz": "elektr qaytguncha?" }
    ],
    "full_uz": "Elektr qaytguncha, ularni haqiqiy mehmon sifatida tashrif buyursak bo'lmaydimi?",
    "note": null
  },
  {
    "num": 81,
    "time": "00:04:44,340 --> 00:04:45,540",
    "arabic": "وَمَتَى سَتَعُودُ؟",
    "segs": null,
    "full_uz": "Va qachon qaytadi?",
    "note": null
  },
  {
    "num": 82,
    "time": "00:04:45,540 --> 00:04:49,379",
    "arabic": "لَا أَعْلَمُ، فَقَطْ يَأْخُذُ الْأَمْرُ سَاعَاتٍ",
    "segs": [
      { "ar": "لَا أَعْلَمُ", "uz": "bilmayman" },
      { "ar": "فَقَطْ يَأْخُذُ الْأَمْرُ سَاعَاتٍ", "uz": "faqat bir necha soat ketadi" }
    ],
    "full_uz": "Bilmayman, faqat bir necha soat ketadi.",
    "note": null
  },
  {
    "num": 83,
    "time": "00:04:49,379 --> 00:04:53,140",
    "arabic": "آهْ، إِنَّهُ يَعْمَلُ",
    "segs": null,
    "full_uz": "Voy, u ishlayapti.",
    "note": null
  },
  {
    "num": 84,
    "time": "00:04:53,140 --> 00:04:59,560",
    "arabic": "كَفَى يَا فَايَر، كُفَّ عَنِ الْعَبَثِ",
    "segs": [
      { "ar": "كَفَى يَا فَايَر", "uz": "bo'ldi, Fayer" },
      { "ar": "كُفَّ عَنِ الْعَبَثِ", "uz": "bema'nilikni bas qil" }
    ],
    "full_uz": "Bo'ldi, Fayer, bema'nilikni bas qil.",
    "note": null
  },
  {
    "num": 85,
    "time": "00:04:59,560 --> 00:05:02,379",
    "arabic": "إِنَّهُ لَا يَعْبَثُ",
    "segs": null,
    "full_uz": "U bema'nilik qilmayapti.",
    "note": null
  },
  {
    "num": 86,
    "time": "00:05:02,379 --> 00:05:04,040",
    "arabic": "لَسْتُ أَنَا، أَلَا تَرَيْنَ؟",
    "segs": null,
    "full_uz": "Men emasman, ko'rmayapsanmi?",
    "note": null
  },
  {
    "num": 87,
    "time": "00:05:04,040 --> 00:05:06,040",
    "arabic": "إِذَنْ مَنْ يُرَنِّهُ؟",
    "segs": null,
    "full_uz": "Unda uni kim jiringlatyapti?",
    "note": null
  },
  {
    "num": 88,
    "time": "00:05:06,040 --> 00:05:06,840",
    "arabic": "لَا أَعْلَمُ",
    "segs": null,
    "full_uz": "Bilmayman.",
    "note": null
  },
  {
    "num": 89,
    "time": "00:05:06,840 --> 00:05:12,920",
    "arabic": "أَنَا أَعْلَمُ، إِنَّ جَرَسَ الْبَابِ يَرِنُّ لِأَنَّ فَايَرَ قَامَ بِتَوْصِيلِ الْأَسْلَاكِ مَعًا",
    "segs": [
      { "ar": "أَنَا أَعْلَمُ", "uz": "men bilaman" },
      { "ar": "إِنَّ جَرَسَ الْبَابِ يَرِنُّ لِأَنَّ فَايَرَ قَامَ بِتَوْصِيلِ الْأَسْلَاكِ مَعًا", "uz": "eshik qo'ng'irog'i jiringlayapti, chunki Fayer simlarni bir-biriga ulab qo'ygan" }
    ],
    "full_uz": "Men bilaman, eshik qo'ng'irog'i jiringlayapti, chunki Fayer simlarni bir-biriga ulab qo'ygan.",
    "note": null
  },
  {
    "num": 90,
    "time": "00:05:12,920 --> 00:05:15,320",
    "arabic": "صَحِيحٌ، سَأُصْلِحُ ذَلِكَ الْآنَ",
    "segs": null,
    "full_uz": "To'g'ri, hozir tuzataman.",
    "note": null
  },
  {
    "num": 91,
    "time": "00:05:15,319 --> 00:05:19,139",
    "arabic": "هَا، إِنَّ ضُيُوفَكِ مُزْعِجُونَ",
    "segs": null,
    "full_uz": "Mana, mehmonlaring bezovta qilyapti.",
    "note": null
  },
  {
    "num": 92,
    "time": "00:05:19,139 --> 00:05:22,920",
    "arabic": "أَجَلْ، الْحَمْدُ لِلَّهِ أَنَّ الْبَشَرَ لَيْسُوا فِي الْمَنْزِلِ",
    "segs": null,
    "full_uz": "Ha, xudoga shukur, odamlar uyda yo'q.",
    "note": null
  },
  {
    "num": 93,
    "time": "00:05:22,920 --> 00:05:24,120",
    "arabic": "مَرْحَبًا",
    "segs": null,
    "full_uz": "Salom.",
    "note": null
  },
  {
    "num": 94,
    "time": "00:05:24,120 --> 00:05:26,219",
    "arabic": "مَرْحَبًا بِضُيُوفِنَا الْأَعِزَّاءِ",
    "segs": null,
    "full_uz": "Aziz mehmonlarimizga xush kelibsiz.",
    "note": null
  },
  {
    "num": 95,
    "time": "00:05:26,219 --> 00:05:28,500",
    "arabic": "ادْخُلُوا إِلَى الْمَنْزِلِ مِنْ خِلَالِ فَتْحَةٍ",
    "segs": null,
    "full_uz": "Uyga teshikdan kiring.",
    "note": null
  },
  {
    "num": 96,
    "time": "00:05:28,500 --> 00:05:30,000",
    "arabic": "حَسَنًا لِنَدْخُلْ",
    "segs": null,
    "full_uz": "Xo'p, kiraylik.",
    "note": null
  },
  {
    "num": 97,
    "time": "00:05:30,000 --> 00:05:30,839",
    "arabic": "إِلَى أَيْنَ؟",
    "segs": null,
    "full_uz": "Qayerga?",
    "note": null
  },
  {
    "num": 98,
    "time": "00:05:30,839 --> 00:05:32,139",
    "arabic": "إِلَى الدَّاخِلِ",
    "segs": null,
    "full_uz": "Ichkariga.",
    "note": null
  },
  {
    "num": 99,
    "time": "00:05:32,139 --> 00:05:34,759",
    "arabic": "كَلَّا، لَا يَتَصَرَّفُ الضُّيُوفُ هَكَذَا",
    "segs": null,
    "full_uz": "Yo'q, mehmonlar bunday qilishmaydi.",
    "note": null
  },
  {
    "num": 100,
    "time": "00:05:34,759 --> 00:05:35,939",
    "arabic": "وَمَاذَا نَفْعَلُ؟",
    "segs": null,
    "full_uz": "Unda nima qilamiz?",
    "note": null
  },
  {
    "num": 101,
    "time": "00:05:35,939 --> 00:05:37,839",
    "arabic": "الضُّيُوفُ يُرَنُّونَ جَرَسَ الْبَابِ",
    "segs": null,
    "full_uz": "Mehmonlar eshik qo'ng'irog'ini chalishadi.",
    "note": null
  },
  {
    "num": 102,
    "time": "00:05:37,839 --> 00:05:39,959",
    "arabic": "حَسَنًا، أَمْسِكِينِي جَيِّدًا",
    "segs": null,
    "full_uz": "Xo'p, meni yaxshilab ushla.",
    "note": null
  }
];
if (typeof module !== "undefined" && module.exports) {
  module.exports = lessons;
}
