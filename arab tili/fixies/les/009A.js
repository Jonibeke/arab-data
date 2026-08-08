const lessons = [
    {
  num: 1,
  time: "00:00:36,160 --> 00:00:46,789",
  arabic: "وَفَجْأَةً تَعَرَّضَتِ الْأَرْضُ لِهُجُومٍ",
  segs: [
    { ar: "وَفَجْأَةً", uz: "Birdaniga" },
    { ar: "تَعَرَّضَتِ الْأَرْضُ", uz: "Yer hujumga uchradi" },
    { ar: "لِهُجُومٍ", uz: "hujumga" }
  ],
  full_uz: "Birdaniga Yer hujumga uchradi.",
  note: null
},

{
  num: 2,
  time: "00:00:47,079 --> 00:00:49,840",
  arabic: "شَنَّتْهُ سَفِينَةٌ فَضَائِيَّةٌ",
  segs: [
    { ar: "شَنَّتْهُ", uz: "Uni uyushtirdi" },
    { ar: "سَفِينَةٌ فَضَائِيَّةٌ", uz: "fazoviy kema" }
  ],
  full_uz: "Bu hujumni fazoviy kema uyushtirdi.",
  note: null
},

{
  num: 3,
  time: "00:00:49,840 --> 00:00:51,459",
  arabic: "تُرَى مَا الْعَمَلُ؟",
  segs: [
    { ar: "تُرَى", uz: "Xo'sh" },
    { ar: "مَا الْعَمَلُ؟", uz: "endi nima qilamiz?" }
  ],
  full_uz: "Xo'sh, endi nima qilamiz?",
  note: null
},

{
  num: 4,
  time: "00:00:51,460 --> 00:01:03,340",
  arabic: "إِذَا وَصَلَتِ الْمُسَاعَدَةُ فِي الْوَقْتِ الْمُنَاسِبِ فَإِنَّهَا سَتُنْقِذُنَا",
  segs: [
    { ar: "إِذَا وَصَلَتِ الْمُسَاعَدَةُ", uz: "Agar yordam yetib kelsa" },
    { ar: "فِي الْوَقْتِ الْمُنَاسِبِ", uz: "o'z vaqtida" },
    { ar: "فَإِنَّهَا سَتُنْقِذُنَا", uz: "u bizni qutqaradi" }
  ],
  full_uz: "Agar yordam o'z vaqtida yetib kelsa, u bizni qutqaradi.",
  note: null
},

{
  num: 5,
  time: "00:01:03,340 --> 00:01:04,579",
  arabic: "تَحَرَّكُوا بِسُرْعَةٍ",
  segs: [
    { ar: "تَحَرَّكُوا", uz: "Harakat qiling" },
    { ar: "بِسُرْعَةٍ", uz: "tezroq" }
  ],
  full_uz: "Tezroq harakat qiling.",
  note: null
},

{
  num: 6,
  time: "00:01:04,579 --> 00:01:06,040",
  arabic: "أَسْرِعْ هَيَّا",
  segs: [
    { ar: "أَسْرِعْ", uz: "Shoshil" },
    { ar: "هَيَّا", uz: "qani" }
  ],
  full_uz: "Shoshil, qani!",
  note: null
},

{
  num: 7,
  time: "00:01:06,040 --> 00:01:10,680",
  arabic: "مَرْحَبًا يَا تُومْ، لَقَدْ أَتَيْنَا لِنَلْعَبَ",
  segs: [
    { ar: "مَرْحَبًا يَا تُومْ", uz: "Salom, Tom." },
    { ar: "لَقَدْ أَتَيْنَا", uz: "Biz keldik" },
    { ar: "لِنَلْعَبَ", uz: "o'ynagani" }
  ],
  full_uz: "Salom, Tom. Biz o'ynagani keldik.",
  note: null
},

{
  num: 8,
  time: "00:01:10,680 --> 00:01:15,200",
  arabic: "آهْ أَخِيرًا أَتَيْتُم، أَحْتَاجُ إِلَى فَضَائِيِّينَ فِي اللُّعْبَةِ",
  segs: [
    { ar: "آهْ أَخِيرًا أَتَيْتُم", uz: "Oh, nihoyat keldingizlar." },
    { ar: "أَحْتَاجُ", uz: "Menga kerak" },
    { ar: "إِلَى فَضَائِيِّينَ", uz: "fazoliklar" },
    { ar: "فِي اللُّعْبَةِ", uz: "o'yin uchun" }
  ],
  full_uz: "Oh, nihoyat keldingizlar. O'yin uchun menga fazoliklar kerak.",
  note: null
},

{
  num: 9,
  time: "00:01:15,200 --> 00:01:16,680",
  arabic: "عَنْ أَيِّ فَضَائِيِّينَ تَتَحَدَّثُ؟",
  segs: [
    { ar: "عَنْ أَيِّ", uz: "Qanday" },
    { ar: "فَضَائِيِّينَ", uz: "fazoliklar haqida" },
    { ar: "تَتَحَدَّثُ؟", uz: "gapiryapsan?" }
  ],
  full_uz: "Qanday fazoliklar haqida gapiryapsan?",
  note: null
},

{
  num: 10,
  time: "00:01:16,680 --> 00:01:23,920",
  arabic: "عَنِ الْفَضَائِيِّينَ الْعَادِيِّينَ الْمُخِيفِينَ الَّذِينَ يَأْتُونَ لِيُدَمِّرُوا الْأَرْضَ وَكُلَّ شَيْءٍ",
  segs: [
    { ar: "عَنِ الْفَضَائِيِّينَ الْعَادِيِّينَ الْمُخِيفِينَ", uz: "Oddiy qo'rqinchli fazoliklar haqida" },
    { ar: "الَّذِينَ يَأْتُونَ", uz: "ular kelib" },
    { ar: "لِيُدَمِّرُوا الْأَرْضَ وَكُلَّ شَيْءٍ", uz: "Yerni va hamma narsani vayron qiladi" }
  ],
  full_uz: "Oddiy qo'rqinchli fazoliklar haqida. Ular kelib Yerni va hamma narsani vayron qiladi.",
  note: null
},
{
  num: 11,
  time: "00:01:23,920 --> 00:01:26,400",
  arabic: "نَحْنُ لَا نُرِيدُ تَدْمِيرَ أَيِّ شَيْءٍ عَلَى الْأَرْضِ",
  segs: [
    { ar: "نَحْنُ", uz: "Biz" },
    { ar: "لَا نُرِيدُ", uz: "xohlamaymiz" },
    { ar: "تَدْمِيرَ أَيِّ شَيْءٍ", uz: "hech narsani vayron qilishni" },
    { ar: "عَلَى الْأَرْضِ", uz: "Yerda" }
  ],
  full_uz: "Biz Yerda hech narsani vayron qilishni xohlamaymiz.",
  note: null
},

{
  num: 12,
  time: "00:01:26,400 --> 00:01:29,680",
  arabic: "أَلَا يُمْكِنُ أَنْ نَكُونَ مُهَنْدِسِي الْقِطَارِ؟",
  segs: [
    { ar: "أَلَا يُمْكِنُ", uz: "Bo'lmaydimi" },
    { ar: "أَنْ نَكُونَ", uz: "biz bo'lsak" },
    { ar: "مُهَنْدِسِي الْقِطَارِ؟", uz: "poyezd mashinistlari?" }
  ],
  full_uz: "Poyezd mashinistlari bo'lsak bo'lmaydimi?",
  note: "مُهَنْدِسُ الْقِطَارِ — mashinist (poyezd haydovchisi)."
},

{
  num: 13,
  time: "00:01:30,340 --> 00:01:31,620",
  arabic: "مُهَنْدِسِي قِطَارٍ؟",
  segs: [
    { ar: "مُهَنْدِسِي قِطَارٍ؟", uz: "Poyezd mashinistlarimi?" }
  ],
  full_uz: "Poyezd mashinistlarimi?",
  note: null
},

{
  num: 14,
  time: "00:01:31,620 --> 00:01:34,680",
  arabic: "هَا، إِنَّكُمَا لَا تَعْرِفَانِ شَيْئًا عَنْ قِيَادَةِ الْقِطَارَاتِ",
  segs: [
    { ar: "هَا", uz: "Ha!" },
    { ar: "إِنَّكُمَا لَا تَعْرِفَانِ شَيْئًا", uz: "Sizlar hech narsa bilmaysizlar" },
    { ar: "عَنْ قِيَادَةِ الْقِطَارَاتِ", uz: "poyezdlarni boshqarish haqida" }
  ],
  full_uz: "Ha! Sizlar poyezdlarni boshqarish haqida hech narsa bilmaysizlar.",
  note: null
},

{
  num: 15,
  time: "00:01:35,300 --> 00:01:37,500",
  arabic: "نَحْنُ نَعْلَمُ كَثِيرًا عَنِ الْقِطَارَاتِ",
  segs: [
    { ar: "نَحْنُ نَعْلَمُ", uz: "Biz yaxshi bilamiz" },
    { ar: "كَثِيرًا", uz: "juda ko'p" },
    { ar: "عَنِ الْقِطَارَاتِ", uz: "poyezdlar haqida" }
  ],
  full_uz: "Biz poyezdlar haqida juda ko'p narsani bilamiz.",
  note: null
},

{
  num: 16,
  time: "00:01:37,500 --> 00:01:43,580",
  arabic: "اخْتَرَعَ الْبَشَرُ السِّكَكَ قَبْلَ زَمَنٍ طَوِيلٍ جِدًّا",
  segs: [
    { ar: "اخْتَرَعَ الْبَشَرُ", uz: "Odamlar ixtiro qilgan" },
    { ar: "السِّكَكَ", uz: "temir yo'llarni" },
    { ar: "قَبْلَ زَمَنٍ طَوِيلٍ جِدًّا", uz: "juda uzoq vaqt oldin" }
  ],
  full_uz: "Odamlar temir yo'llarni juda uzoq vaqt oldin ixtiro qilgan.",
  note: null
},

{
  num: 17,
  time: "00:01:43,579 --> 00:01:46,739",
  arabic: "لَكِنْ وَقْتَهَا كَانَتِ السِّكَكُ تُصْنَعُ مِنَ الْخَشَبِ",
  segs: [
    { ar: "لَكِنْ وَقْتَهَا", uz: "Lekin o'sha paytda" },
    { ar: "كَانَتِ السِّكَكُ تُصْنَعُ", uz: "temir yo'llar yasalardi" },
    { ar: "مِنَ الْخَشَبِ", uz: "yog'ochdan" }
  ],
  full_uz: "Lekin o'sha paytda temir yo'llar yog'ochdan yasalardi.",
  note: null
},

{
  num: 18,
  time: "00:01:46,739 --> 00:01:51,379",
  arabic: "لَمْ تَبْدَأْ صِنَاعَةُ السِّكَكِ مِنَ الْمَعَادِنِ حَتَّى نِهَايَةِ الْقَرْنِ الثَّامِنِ عَشَرَ",
  segs: [
    { ar: "لَمْ تَبْدَأْ", uz: "Boshlanmadi" },
    { ar: "صِنَاعَةُ السِّكَكِ مِنَ الْمَعَادِنِ", uz: "temir yo'llarni metalldan yasash" },
    { ar: "حَتَّى نِهَايَةِ الْقَرْنِ الثَّامِنِ عَشَرَ", uz: "XVIII asr oxirigacha" }
  ],
  full_uz: "Temir yo'llarni metalldan yasash XVIII asr oxirigacha boshlanmagan.",
  note: null
},

{
  num: 19,
  time: "00:01:51,379 --> 00:01:56,480",
  arabic: "لَكِنِ الْمَقْطُورَاتُ الْأُولَى لَمْ يَكُنْ فِيهَا مُحَرِّكَاتٌ لِتُزَوِّدَهَا بِالطَّاقَةِ",
  segs: [
    { ar: "لَكِنِ الْمَقْطُورَاتُ الْأُولَى", uz: "Lekin dastlabki vagonlarda" },
    { ar: "لَمْ يَكُنْ فِيهَا", uz: "bo'lmagan" },
    { ar: "مُحَرِّكَاتٌ", uz: "dvigatellar" },
    { ar: "لِتُزَوِّدَهَا بِالطَّاقَةِ", uz: "ularga quvvat beradigan" }
  ],
  full_uz: "Lekin dastlabki vagonlarda ularga quvvat beradigan dvigatellar bo'lmagan.",
  note: null
},

{
  num: 20,
  time: "00:01:56,480 --> 00:02:00,120",
  arabic: "كَانَتِ الْأَحْصِنَةُ تُسْتَخْدَمُ لِتَجُرَّهَا بَدَلًا مِنْ ذَلِكَ",
  segs: [
    { ar: "كَانَتِ الْأَحْصِنَةُ تُسْتَخْدَمُ", uz: "Otlar ishlatilardi" },
    { ar: "لِتَجُرَّهَا", uz: "ularni tortish uchun" },
    { ar: "بَدَلًا مِنْ ذَلِكَ", uz: "shuning o'rniga" }
  ],
  full_uz: "Shuning o'rniga ularni otlar tortardi.",
  note: null
},
{
  num: 21,
  time: "00:02:00,120 --> 00:02:03,939",
  arabic: "فِيمَا بَعْدُ تَمَّ اسْتِبْدَالُ الْمُحَرِّكَاتِ الْبُخَارِيَّةِ بِالْأَحْصِنَةِ",
  segs: [
    { ar: "فِيمَا بَعْدُ", uz: "Keyinchalik" },
    { ar: "تَمَّ اسْتِبْدَالُ", uz: "almashtirildi" },
    { ar: "الْمُحَرِّكَاتِ الْبُخَارِيَّةِ", uz: "bug' dvigatellari bilan" },
    { ar: "بِالْأَحْصِنَةِ", uz: "otlar o'rniga" }
  ],
  full_uz: "Keyinchalik otlar o'rniga bug' dvigatellari qo'llanila boshlandi.",
  note: null
},

{
  num: 22,
  time: "00:02:03,939 --> 00:02:07,599",
  arabic: "يَتِمُّ حَرْقُ الْخَشَبِ وَالْفَحْمِ فِي الْفُرْنِ لِغَلْيِ الْمَاءِ فِي الْمَرَاجِلِ",
  segs: [
    { ar: "يَتِمُّ حَرْقُ الْخَشَبِ وَالْفَحْمِ", uz: "Yog'och va ko'mir yoqiladi" },
    { ar: "فِي الْفُرْنِ", uz: "o'choqda" },
    { ar: "لِغَلْيِ الْمَاءِ", uz: "suvni qaynatish uchun" },
    { ar: "فِي الْمَرَاجِلِ", uz: "qozonlarda" }
  ],
  full_uz: "Yog'och va ko'mir o'choqda qozonlardagi suvni qaynatish uchun yoqiladi.",
  note: "الْمِرْجَلُ — bug' qozoni."
},

{
  num: 23,
  time: "00:02:07,599 --> 00:02:10,340",
  arabic: "وَهَذَا يُوَلِّدُ الْبُخَارَ الَّذِي يُحَرِّكُ الدَّوَالِيبَ",
  segs: [
    { ar: "وَهَذَا", uz: "Bu esa" },
    { ar: "يُوَلِّدُ الْبُخَارَ", uz: "bug' hosil qiladi" },
    { ar: "الَّذِي يُحَرِّكُ الدَّوَالِيبَ", uz: "u g'ildiraklarni harakatlantiradi" }
  ],
  full_uz: "Bu esa g'ildiraklarni harakatlantiradigan bug'ni hosil qiladi.",
  note: null
},

{
  num: 24,
  time: "00:02:10,340 --> 00:02:17,120",
  arabic: "لَقَدْ كَانَ الْفِيكْسِيزُ هُنَاكَ لِيُسَاعِدُوا هَذِهِ الْقِطَارَاتِ وَلِيَتَحَقَّقُوا أَنَّ كُلَّ الْأَجْزَاءِ تَعْمَلُ بِسَلَاسَةٍ وَدِقَّةٍ",
  segs: [
    { ar: "لَقَدْ كَانَ الْفِيكْسِيزُ هُنَاكَ", uz: "Fiksiklar o'sha yerda bo'lishardi" },
    { ar: "لِيُسَاعِدُوا هَذِهِ الْقِطَارَاتِ", uz: "bu poyezdlarga yordam berish uchun" },
    { ar: "وَلِيَتَحَقَّقُوا", uz: "hamda tekshirish uchun" },
    { ar: "أَنَّ كُلَّ الْأَجْزَاءِ", uz: "barcha qismlar" },
    { ar: "تَعْمَلُ بِسَلَاسَةٍ وَدِقَّةٍ", uz: "ravon va aniq ishlayotganini" }
  ],
  full_uz: "Fiksiklar bu poyezdlarga yordam berish va barcha qismlar ravon hamda aniq ishlayotganini tekshirish uchun o'sha yerda bo'lishardi.",
  note: null
},

{
  num: 25,
  time: "00:02:17,120 --> 00:02:20,120",
  arabic: "لَكِنِ الْآنَ انْقَرَضَتِ الْمُحَرِّكَاتُ الْبُخَارِيَّةُ",
  segs: [
    { ar: "لَكِنِ الْآنَ", uz: "Ammo hozir" },
    { ar: "انْقَرَضَتِ", uz: "yo'q bo'lib ketgan" },
    { ar: "الْمُحَرِّكَاتُ الْبُخَارِيَّةُ", uz: "bug' dvigatellari" }
  ],
  full_uz: "Ammo hozir bug' dvigatellari deyarli yo'q bo'lib ketgan.",
  note: null
},

{
  num: 26,
  time: "00:02:20,120 --> 00:02:23,699",
  arabic: "تَسْتَعْمِلُ السِّكَكُ الْحَدِيدِيَّةُ الْكَهْرَبَاءَ مَصْدَرًا لِلطَّاقَةِ",
  segs: [
    { ar: "تَسْتَعْمِلُ السِّكَكُ الْحَدِيدِيَّةُ", uz: "Temir yo'llarda foydalaniladi" },
    { ar: "الْكَهْرَبَاءَ", uz: "elektrdan" },
    { ar: "مَصْدَرًا لِلطَّاقَةِ", uz: "energiya manbai sifatida" }
  ],
  full_uz: "Temir yo'llarda elektr energiya manbai sifatida ishlatiladi.",
  note: null
},

{
  num: 27,
  time: "00:02:23,699 --> 00:02:29,240",
  arabic: "هَذِهِ الْقِطَارَاتُ الْكَهْرَبَائِيَّةُ تَنْطَلِقُ عَلَى السِّكَكِ بِسُرْعَةٍ كَبِيرَةٍ تُقَارِبُ سُرْعَةَ الطَّائِرَاتِ",
  segs: [
    { ar: "هَذِهِ الْقِطَارَاتُ الْكَهْرَبَائِيَّةُ", uz: "Bu elektr poyezdlar" },
    { ar: "تَنْطَلِقُ عَلَى السِّكَكِ", uz: "temir yo'llarda harakatlanadi" },
    { ar: "بِسُرْعَةٍ كَبِيرَةٍ", uz: "juda katta tezlikda" },
    { ar: "تُقَارِبُ سُرْعَةَ الطَّائِرَاتِ", uz: "samolyotlar tezligiga yaqin" }
  ],
  full_uz: "Bu elektr poyezdlar temir yo'llarda samolyotlar tezligiga yaqin juda katta tezlikda harakatlanadi.",
  note: null
},

{
  num: 28,
  time: "00:02:31,540 --> 00:02:34,640",
  arabic: "تُؤَدِّيَانِ دَوْرَ فَضَائِيَّيْنِ مَعَ عِلْمِكُمَا بِالْقِطَارَاتِ؟",
  segs: [
    { ar: "تُؤَدِّيَانِ دَوْرَ", uz: "Rol o'ynaysizlarmi" },
    { ar: "فَضَائِيَّيْنِ", uz: "fazoliklarning" },
    { ar: "مَعَ عِلْمِكُمَا بِالْقِطَارَاتِ؟", uz: "poyezdlarni shuncha bilaturib?" }
  ],
  full_uz: "Poyezdlarni shuncha bilaturib, fazoliklar rolini o'ynaysizlarmi?",
  note: null
},

{
  num: 29,
  time: "00:02:34,699 --> 00:02:38,920",
  arabic: "السِّكَكُ الْحَدِيدِيَّةُ لِي وَسَتَلْعَبُونَ بِالطَّرِيقَةِ الَّتِي أُرِيدُهَا أَنَا",
  segs: [
    { ar: "السِّكَكُ الْحَدِيدِيَّةُ لِي", uz: "Temir yo'l meniki" },
    { ar: "وَسَتَلْعَبُونَ", uz: "sizlar esa o'ynaysizlar" },
    { ar: "بِالطَّرِيقَةِ الَّتِي أُرِيدُهَا أَنَا", uz: "men xohlagan usulda" }
  ],
  full_uz: "Temir yo'l meniki va sizlar men xohlagan usulda o'ynaysizlar.",
  note: null
},

{
  num: 30,
  time: "00:02:38,919 --> 00:02:41,280",
  arabic: "لَقَدْ أَنْزَلَ الْقِطَارُ حُمُولَتَهُ",
  segs: [
    { ar: "لَقَدْ أَنْزَلَ", uz: "Tushirdi" },
    { ar: "الْقِطَارُ", uz: "poyezd" },
    { ar: "حُمُولَتَهُ", uz: "yukini" }
  ],
  full_uz: "Poyezd yukini tushirdi.",
  note: null
},
{
  num: 31,
  time: "00:02:41,280 --> 00:02:43,259",
  arabic: "وَهُوَ يُغَادِرُ الْمَحَطَّةَ",
  segs: [
    { ar: "وَهُوَ", uz: "Va u" },
    { ar: "يُغَادِرُ", uz: "chiqib ketmoqda" },
    { ar: "الْمَحَطَّةَ", uz: "bekatdan" }
  ],
  full_uz: "Va u bekatdan chiqib ketmoqda.",
  note: null
},

{
  num: 32,
  time: "00:02:43,259 --> 00:02:44,099",
  arabic: "تْشُوتْ تْشُوتْ",
  segs: [
    { ar: "تْشُوتْ تْشُوتْ", uz: "Chu-chu!" }
  ],
  full_uz: "Chu-chu!",
  note: "Poyezd ovoziga taqlid."
},

{
  num: 33,
  time: "00:02:44,099 --> 00:02:46,560",
  arabic: "اِلْعَبْ بِقِطَارِكَ وَحْدَكَ",
  segs: [
    { ar: "اِلْعَبْ", uz: "O'ynayver" },
    { ar: "بِقِطَارِكَ", uz: "poyezding bilan" },
    { ar: "وَحْدَكَ", uz: "o'zing" }
  ],
  full_uz: "Poyezding bilan o'zing o'ynayver.",
  note: null
},

{
  num: 34,
  time: "00:02:46,560 --> 00:02:47,759",
  arabic: "سَأَفْعَلُ",
  segs: [
    { ar: "سَأَفْعَلُ", uz: "Shunday qilaman." }
  ],
  full_uz: "Shunday qilaman.",
  note: null
},

{
  num: 35,
  time: "00:02:47,759 --> 00:02:52,139",
  arabic: "تْزُو",
  segs: [
    { ar: "تْزُو", uz: "Vzz..." }
  ],
  full_uz: "Vzz...",
  note: "Elektr poyezdining harakat ovozi."
},

{
  num: 36,
  time: "00:02:52,139 --> 00:02:59,919",
  arabic: "آهَا! هَيْ، لِمَاذَا تَوَقَّفَ؟",
  segs: [
    { ar: "آهَا!", uz: "Aha!" },
    { ar: "هَيْ", uz: "Hoy!" },
    { ar: "لِمَاذَا تَوَقَّفَ؟", uz: "Nega to'xtab qoldi?" }
  ],
  full_uz: "Aha! Hoy, nega to'xtab qoldi?",
  note: null
},

{
  num: 37,
  time: "00:03:02,919 --> 00:03:06,919",
  arabic: "هَذَا لَمْ يَنْجَحْ أَيْضًا",
  segs: [
    { ar: "هَذَا", uz: "Bu ham" },
    { ar: "لَمْ يَنْجَحْ", uz: "ish bermadi" },
    { ar: "أَيْضًا", uz: "ham" }
  ],
  full_uz: "Bu ham ish bermadi.",
  note: null
},

{
  num: 38,
  time: "00:03:06,919 --> 00:03:08,560",
  arabic: "إِنَّهُ لَا يَمْشِي",
  segs: [
    { ar: "إِنَّهُ", uz: "U" },
    { ar: "لَا يَمْشِي", uz: "yurmayapti" }
  ],
  full_uz: "U yurmayapti.",
  note: null
},

{
  num: 39,
  time: "00:03:08,560 --> 00:03:10,920",
  arabic: "سِيمْكَا",
  segs: [
    { ar: "سِيمْكَا", uz: "Simka!" }
  ],
  full_uz: "Simka!",
  note: null
},

{
  num: 40,
  time: "00:03:10,920 --> 00:03:13,520",
  arabic: "نُولِيكْ",
  segs: [
    { ar: "نُولِيكْ", uz: "Nolik!" }
  ],
  full_uz: "Nolik!",
  note: null
},
{
  num: 41,
  time: "00:03:13,520 --> 00:03:16,520",
  arabic: "أَيْنَ أَنْتُمَا؟ هَلْ جَرَحْتُ شُعُورَكُمَا؟",
  segs: [
    { ar: "أَيْنَ أَنْتُمَا؟", uz: "Qayerdasizlar?" },
    { ar: "هَلْ جَرَحْتُ", uz: "Men ranjitdimmi" },
    { ar: "شُعُورَكُمَا؟", uz: "ikkalangizning ko'nglingizni?" }
  ],
  full_uz: "Qayerdasizlar? Ikkalangizning ko'nglingizni ranjitdimmi?",
  note: null
},

{
  num: 42,
  time: "00:03:17,360 --> 00:03:20,520",
  arabic: "أُمِّي، هَلْ سَيَعُودُ وَالِدِي بَاكِرًا؟",
  segs: [
    { ar: "أُمِّي", uz: "Oyi." },
    { ar: "هَلْ سَيَعُودُ", uz: "Qaytadimi" },
    { ar: "وَالِدِي", uz: "dadam" },
    { ar: "بَاكِرًا؟", uz: "erta?" }
  ],
  full_uz: "Oyi, dadam bugun erta qaytadimi?",
  note: null
},

{
  num: 43,
  time: "00:03:21,120 --> 00:03:22,719",
  arabic: "لَا، أَهُنَاكَ مُشْكِلَةٌ؟",
  segs: [
    { ar: "لَا", uz: "Yo'q." },
    { ar: "أَهُنَاكَ", uz: "Biror" },
    { ar: "مُشْكِلَةٌ؟", uz: "muammo bormi?" }
  ],
  full_uz: "Yo'q. Biror muammo bormi?",
  note: null
},

{
  num: 44,
  time: "00:03:22,719 --> 00:03:24,740",
  arabic: "لَقَدْ هَجَمَنَا فَضَائِيُّونَ أَشْرَارٌ",
  segs: [
    { ar: "لَقَدْ هَجَمَنَا", uz: "Bizga hujum qilishdi" },
    { ar: "فَضَائِيُّونَ أَشْرَارٌ", uz: "yovuz fazoliklar" }
  ],
  full_uz: "Bizga yovuz fazoliklar hujum qilishdi.",
  note: null
},

{
  num: 45,
  time: "00:03:24,740 --> 00:03:26,300",
  arabic: "يَجِبُ أَنْ نُصْلِحَ الْقِطَارَ",
  segs: [
    { ar: "يَجِبُ", uz: "Kerak" },
    { ar: "أَنْ نُصْلِحَ", uz: "tuzatishimiz" },
    { ar: "الْقِطَارَ", uz: "poyezdni" }
  ],
  full_uz: "Poyezdni tuzatishimiz kerak.",
  note: null
},

{
  num: 46,
  time: "00:03:26,300 --> 00:03:28,360",
  arabic: "وَإِلَّا فَلَنْ نَسْتَطِيعَ الْهَرَبَ",
  segs: [
    { ar: "وَإِلَّا", uz: "Aks holda" },
    { ar: "فَلَنْ نَسْتَطِيعَ", uz: "qocha olmaymiz" },
    { ar: "الْهَرَبَ", uz: "qochishni" }
  ],
  full_uz: "Aks holda qocha olmaymiz.",
  note: null
},

{
  num: 47,
  time: "00:03:28,360 --> 00:03:31,520",
  arabic: "أَتُرِيدُ الشَّايَ؟",
  segs: [
    { ar: "أَتُرِيدُ", uz: "Xohlaysanmi" },
    { ar: "الشَّايَ؟", uz: "choy?" }
  ],
  full_uz: "Choy ichasanmi?",
  note: null
},

{
  num: 48,
  time: "00:03:32,699 --> 00:03:35,860",
  arabic: "لَا، عَلَيَّ أَنْ أَجِدَ حَلًّا",
  segs: [
    { ar: "لَا", uz: "Yo'q." },
    { ar: "عَلَيَّ", uz: "Men" },
    { ar: "أَنْ أَجِدَ", uz: "topishim kerak" },
    { ar: "حَلًّا", uz: "bir yechimni" }
  ],
  full_uz: "Yo'q. Men bir yechim topishim kerak.",
  note: null
},

{
  num: 49,
  time: "00:03:35,860 --> 00:03:40,660",
  arabic: "سِيمْكَا، نُولِيكْ، أَعْلَمُ أَنَّكُمَا هُنَا",
  segs: [
    { ar: "سِيمْكَا، نُولِيكْ", uz: "Simka, Nolik." },
    { ar: "أَعْلَمُ", uz: "Bilaman" },
    { ar: "أَنَّكُمَا هُنَا", uz: "ikkalangiz shu yerdasiz" }
  ],
  full_uz: "Simka, Nolik, bilaman, ikkalangiz shu yerdasiz.",
  note: null
},

{
  num: 50,
  time: "00:03:40,660 --> 00:03:44,200",
  arabic: "أَرْجُوكُمَا سَامِحَانِي إِنْ كُنْتُ آذَيْتُ مَشَاعِرَكُمَا",
  segs: [
    { ar: "أَرْجُوكُمَا", uz: "Iltimos." },
    { ar: "سَامِحَانِي", uz: "meni kechiringlar" },
    { ar: "إِنْ كُنْتُ", uz: "agar men" },
    { ar: "آذَيْتُ مَشَاعِرَكُمَا", uz: "ko'nglingizni og'ritgan bo'lsam" }
  ],
  full_uz: "Iltimos, agar ko'nglingizni og'ritgan bo'lsam, meni kechiringlar.",
  note: null
},
{
  num: 51,
  time: "00:03:44,200 --> 00:03:45,980",
  arabic: "أَنَا آسِفٌ حَقًّا",
  segs: [
    { ar: "أَنَا", uz: "Men" },
    { ar: "آسِفٌ", uz: "afsusdaman" },
    { ar: "حَقًّا", uz: "rostdan ham" }
  ],
  full_uz: "Men rostdan ham afsusdaman.",
  note: null
},

{
  num: 52,
  time: "00:03:45,980 --> 00:03:50,300",
  arabic: "لَا أَحَدَ يَسْتَطِيعُ سِوَاكُمَا إِنْقَاذَ الْعَالَمِ مِنَ الْفَضَائِيِّينَ",
  segs: [
    { ar: "لَا أَحَدَ", uz: "Hech kim" },
    { ar: "يَسْتَطِيعُ", uz: "qodir emas" },
    { ar: "سِوَاكُمَا", uz: "sizlardan boshqa" },
    { ar: "إِنْقَاذَ الْعَالَمِ", uz: "dunyoni qutqarishga" },
    { ar: "مِنَ الْفَضَائِيِّينَ", uz: "fazoliklardan" }
  ],
  full_uz: "Sizlardan boshqa hech kim dunyoni fazoliklardan qutqara olmaydi.",
  note: null
},

{
  num: 53,
  time: "00:03:50,300 --> 00:03:54,200",
  arabic: "حَسَنًا، لَقَدْ أَقْنَعْتَنَا يَا تُومْ",
  segs: [
    { ar: "حَسَنًا", uz: "Mayli." },
    { ar: "لَقَدْ أَقْنَعْتَنَا", uz: "Bizni ishontirding." },
    { ar: "يَا تُومْ", uz: "Tom." }
  ],
  full_uz: "Mayli, Tom, bizni ishontirding.",
  note: null
},

{
  num: 54,
  time: "00:03:54,200 --> 00:03:56,980",
  arabic: "إِذًا، لِنَتَفَقَّدِ السِّكَّةَ",
  segs: [
    { ar: "إِذًا", uz: "Unday bo'lsa" },
    { ar: "لِنَتَفَقَّدِ", uz: "tekshirib ko'raylik" },
    { ar: "السِّكَّةَ", uz: "relsni" }
  ],
  full_uz: "Unday bo'lsa, relsni tekshirib ko'raylik.",
  note: null
},

{
  num: 55,
  time: "00:03:56,980 --> 00:03:58,520",
  arabic: "نُولِيكْ، اتْبَعْنِي",
  segs: [
    { ar: "نُولِيكْ", uz: "Nolik." },
    { ar: "اتْبَعْنِي", uz: "Ortimdan yur." }
  ],
  full_uz: "Nolik, ortimdan yur.",
  note: null
},

{
  num: 56,
  time: "00:03:58,520 --> 00:04:03,320",
  arabic: "أَنَا أَسْرَعُ",
  segs: [
    { ar: "أَنَا", uz: "Men" },
    { ar: "أَسْرَعُ", uz: "tezroqman" }
  ],
  full_uz: "Men tezroqman.",
  note: null
},

{
  num: 57,
  time: "00:04:03,319 --> 00:04:07,039",
  arabic: "تَسْتَحِقُّ هَذَا يَا أَسْرَعُ",
  segs: [
    { ar: "تَسْتَحِقُّ هَذَا", uz: "Bunga loyiqsan." },
    { ar: "يَا أَسْرَعُ", uz: "Ey tezkor." }
  ],
  full_uz: "Bunga loyiqsan, ey tezkor.",
  note: null
},

{
  num: 58,
  time: "00:04:07,039 --> 00:04:09,379",
  arabic: "أَجَلْ وَلَكِنَّنِي وَجَدْتُ الْعُطْلَ",
  segs: [
    { ar: "أَجَلْ", uz: "Ha." },
    { ar: "وَلَكِنَّنِي", uz: "Lekin men" },
    { ar: "وَجَدْتُ", uz: "topdim" },
    { ar: "الْعُطْلَ", uz: "nosozlikni" }
  ],
  full_uz: "Ha, lekin men nosozlikni topdim.",
  note: null
},

{
  num: 59,
  time: "00:04:09,379 --> 00:04:12,560",
  arabic: "تَعَالَ يَا تُومْ السِّكَّةُ مَكْسُورَةٌ",
  segs: [
    { ar: "تَعَالَ", uz: "Kel." },
    { ar: "يَا تُومْ", uz: "Tom." },
    { ar: "السِّكَّةُ", uz: "Rels" },
    { ar: "مَكْسُورَةٌ", uz: "singan" }
  ],
  full_uz: "Kel, Tom. Rels singan.",
  note: null
},

{
  num: 60,
  time: "00:04:12,560 --> 00:04:15,280",
  arabic: "أَعْلَمُ، ثُمَّ مَاذَا؟",
  segs: [
    { ar: "أَعْلَمُ", uz: "Bilaman." },
    { ar: "ثُمَّ مَاذَا؟", uz: "Keyin-chi?" }
  ],
  full_uz: "Bilaman. Keyin-chi?",
  note: null
},
{
  num: 61,
  time: "00:04:15,280 --> 00:04:18,180",
  arabic: "أَعْلَمُ، لَكِنْ هَذَا سَبَبُ تَوَقُّفِ قِطَارِكَ",
  segs: [
    { ar: "أَعْلَمُ", uz: "Bilaman." },
    { ar: "لَكِنْ", uz: "Lekin" },
    { ar: "هَذَا سَبَبُ", uz: "mana shu sabab" },
    { ar: "تَوَقُّفِ قِطَارِكَ", uz: "poyezding to'xtab qolganining" }
  ],
  full_uz: "Bilaman, lekin poyezding to'xtab qolganiga mana shu sabab.",
  note: null
},

{
  num: 62,
  time: "00:04:18,180 --> 00:04:25,500",
  arabic: "تَعْمَلُ أَلْعَابُ الْقِطَارَاتِ كَالْقِطَارَاتِ الْكَهْرَبَائِيَّةِ الْحَقِيقِيَّةِ",
  segs: [
    { ar: "تَعْمَلُ أَلْعَابُ الْقِطَارَاتِ", uz: "O'yinchoq poyezdlar ishlaydi" },
    { ar: "كَالْقِطَارَاتِ الْكَهْرَبَائِيَّةِ الْحَقِيقِيَّةِ", uz: "haqiqiy elektr poyezdlar kabi" }
  ],
  full_uz: "O'yinchoq poyezdlar haqiqiy elektr poyezdlar kabi ishlaydi.",
  note: null
},

{
  num: 63,
  time: "00:04:25,500 --> 00:04:29,519",
  arabic: "لَكِنْ لَيْسَ هُنَاكَ أَيُّ مُحَرِّكَاتٍ فِي الْعَرَبَةِ الْقَائِدَةِ لِتَجُرَّ الْبَقِيَّةَ",
  segs: [
    { ar: "لَكِنْ", uz: "Lekin" },
    { ar: "لَيْسَ هُنَاكَ أَيُّ مُحَرِّكَاتٍ", uz: "hech qanday dvigatel yo'q" },
    { ar: "فِي الْعَرَبَةِ الْقَائِدَةِ", uz: "bosh vagonda" },
    { ar: "لِتَجُرَّ الْبَقِيَّةَ", uz: "qolgan vagonlarni tortadigan" }
  ],
  full_uz: "Lekin bosh vagonda qolgan vagonlarni tortadigan hech qanday dvigatel yo'q.",
  note: null
},

{
  num: 64,
  time: "00:04:29,519 --> 00:04:32,339",
  arabic: "يَحْصُلُ الْمُحَرِّكُ عَلَى الْكَهْرَبَاءِ مِنَ السِّكَّةِ",
  segs: [
    { ar: "يَحْصُلُ الْمُحَرِّكُ", uz: "Dvigatel oladi" },
    { ar: "عَلَى الْكَهْرَبَاءِ", uz: "elektrni" },
    { ar: "مِنَ السِّكَّةِ", uz: "relsdan" }
  ],
  full_uz: "Dvigatel elektrni relsdan oladi.",
  note: null
},

{
  num: 65,
  time: "00:04:32,339 --> 00:04:34,959",
  arabic: "وَكُلُّ قِطْعَةٍ مِنَ السِّكَّةِ تَحْوِي سِلْكًا",
  segs: [
    { ar: "وَكُلُّ قِطْعَةٍ", uz: "Har bir bo'lak" },
    { ar: "مِنَ السِّكَّةِ", uz: "relsning" },
    { ar: "تَحْوِي", uz: "o'z ichiga oladi" },
    { ar: "سِلْكًا", uz: "simni" }
  ],
  full_uz: "Har bir rels bo'lagi o'z ichiga simni oladi.",
  note: null
},

{
  num: 66,
  time: "00:04:34,959 --> 00:04:40,379",
  arabic: "فَإِذَا تَحَطَّمَتِ السِّكَّةُ فَلَنْ تَتَدَفَّقَ الْكَهْرَبَاءُ خِلَالَهَا لِتَصِلَ إِلَى الْقِطَارِ",
  segs: [
    { ar: "فَإِذَا تَحَطَّمَتِ السِّكَّةُ", uz: "Agar rels sinsa" },
    { ar: "فَلَنْ تَتَدَفَّقَ الْكَهْرَبَاءُ", uz: "elektr o'tmaydi" },
    { ar: "خِلَالَهَا", uz: "uning ichidan" },
    { ar: "لِتَصِلَ إِلَى الْقِطَارِ", uz: "poyezdga yetib borishi uchun" }
  ],
  full_uz: "Agar rels sinsa, elektr uning ichidan o'tib poyezdga yetib bormaydi.",
  note: null
},

{
  num: 67,
  time: "00:04:40,379 --> 00:04:45,060",
  arabic: "وَبِلَا كَهْرَبَاءَ سَيَتَوَقَّفُ مُحَرِّكُ الْقِطَارِ عَنِ الْعَمَلِ",
  segs: [
    { ar: "وَبِلَا كَهْرَبَاءَ", uz: "Elektrsiz esa" },
    { ar: "سَيَتَوَقَّفُ", uz: "to'xtaydi" },
    { ar: "مُحَرِّكُ الْقِطَارِ", uz: "poyezd dvigateli" },
    { ar: "عَنِ الْعَمَلِ", uz: "ishlashdan" }
  ],
  full_uz: "Elektrsiz poyezd dvigateli ishlamay qoladi.",
  note: null
},

{
  num: 68,
  time: "00:04:45,060 --> 00:04:49,099",
  arabic: "لِذَا قُمْ بِتَوْصِيلِ السِّكَّةِ لِيَعْمَلَ الْقِطَارُ",
  segs: [
    { ar: "لِذَا", uz: "Shuning uchun" },
    { ar: "قُمْ بِتَوْصِيلِ السِّكَّةِ", uz: "relsni ulang" },
    { ar: "لِيَعْمَلَ الْقِطَارُ", uz: "poyezd ishlashi uchun" }
  ],
  full_uz: "Shuning uchun poyezd ishlashi uchun relsni ulang.",
  note: null
},

{
  num: 69,
  time: "00:04:49,099 --> 00:04:56,159",
  arabic: "إِذَنْ سَأُوَصِّلُهَا",
  segs: [
    { ar: "إِذَنْ", uz: "Unda" },
    { ar: "سَأُوَصِّلُهَا", uz: "uni ulayman" }
  ],
  full_uz: "Unda uni ulayman.",
  note: null
},

{
  num: 70,
  time: "00:04:56,159 --> 00:04:57,500",
  arabic: "أَجَلْ",
  segs: [
    { ar: "أَجَلْ", uz: "Ha." }
  ],
  full_uz: "Ha.",
  note: null
},
{
  num: 71,
  time: "00:04:57,500 --> 00:05:01,639",
  arabic: "مَرْحَى، الْقِطَارُ يَسِيرُ",
  segs: [
    { ar: "مَرْحَى", uz: "Ura!" },
    { ar: "الْقِطَارُ", uz: "Poyezd" },
    { ar: "يَسِيرُ", uz: "yurmoqda" }
  ],
  full_uz: "Ura! Poyezd yurmoqda.",
  note: null
},

{
  num: 72,
  time: "00:05:02,339 --> 00:05:04,899",
  arabic: "أَحْسَنْتُمَا، هَلْ سَتَلْعَبَانِ مَعِي الْآنَ؟",
  segs: [
    { ar: "أَحْسَنْتُمَا", uz: "Barakalla, ikkalangiz ham." },
    { ar: "هَلْ سَتَلْعَبَانِ", uz: "Endi o'ynaysizlarmi" },
    { ar: "مَعِي الْآنَ؟", uz: "men bilan?" }
  ],
  full_uz: "Barakalla, ikkalangiz ham. Endi men bilan o'ynaysizlarmi?",
  note: null
},

{
  num: 73,
  time: "00:05:04,899 --> 00:05:06,959",
  arabic: "وَكَيْفَ سَنَلْعَبُ هَذِهِ الْمَرَّةَ؟",
  segs: [
    { ar: "وَكَيْفَ", uz: "Xo'sh" },
    { ar: "سَنَلْعَبُ", uz: "qanday o'ynaymiz" },
    { ar: "هَذِهِ الْمَرَّةَ؟", uz: "bu safar?" }
  ],
  full_uz: "Xo'sh, bu safar qanday o'ynaymiz?",
  note: null
},

{
  num: 74,
  time: "00:05:06,959 --> 00:05:08,599",
  arabic: "سَأَلْعَبُ كَمَا تُرِيدَانِ",
  segs: [
    { ar: "سَأَلْعَبُ", uz: "Men o'ynayman" },
    { ar: "كَمَا تُرِيدَانِ", uz: "sizlar xohlagandek" }
  ],
  full_uz: "Men sizlar xohlagandek o'ynayman.",
  note: null
},

{
  num: 75,
  time: "00:05:08,599 --> 00:05:13,519",
  arabic: "اِنْدَفَعَ الْقِطَارُ أَسْفَلَ الطَّرِيقِ مَعَ مُهَنْدِسِهِ نُولِيكْ",
  segs: [
    { ar: "اِنْدَفَعَ الْقِطَارُ", uz: "Poyezd yo'lga tushdi" },
    { ar: "أَسْفَلَ الطَّرِيقِ", uz: "yo'l bo'ylab" },
    { ar: "مَعَ مُهَنْدِسِهِ", uz: "mashinisti bilan" },
    { ar: "نُولِيكْ", uz: "Nolik" }
  ],
  full_uz: "Poyezd mashinisti Nolik bilan yo'l bo'ylab harakatlandi.",
  note: "مُهَنْدِسُ الْقِطَارِ — mashinist."
},

{
  num: 76,
  time: "00:05:13,519 --> 00:05:16,899",
  arabic: "عِنْدَمَا أَتَتْ فَجْأَةً مِنَ الْفَضَاءِ سَفِينَةٌ فَضَائِيَّةٌ",
  segs: [
    { ar: "عِنْدَمَا", uz: "Shu payt" },
    { ar: "أَتَتْ فَجْأَةً", uz: "to'satdan keldi" },
    { ar: "مِنَ الْفَضَاءِ", uz: "fazodan" },
    { ar: "سَفِينَةٌ فَضَائِيَّةٌ", uz: "bir fazo kemasi" }
  ],
  full_uz: "Shu payt to'satdan fazodan bir fazo kemasi uchib keldi.",
  note: null
},

{
  num: 77,
  time: "00:05:21,280 --> 00:05:26,919",
  arabic: "تَحِيَّاتِي يَا سُكَّانَ كَوْكَبِ الْأَرْضِ",
  segs: [
    { ar: "تَحِيَّاتِي", uz: "Salom." },
    { ar: "يَا سُكَّانَ", uz: "Ey aholisi" },
    { ar: "كَوْكَبِ الْأَرْضِ", uz: "Yer sayyorasining" }
  ],
  full_uz: "Salom, ey Yer sayyorasi aholisi!",
  note: null
},

{
  num: 78,
  time: "00:05:26,239 --> 00:05:30,559",
  arabic: "لَقَدْ أَتَيْتُ مِنْ بَعِيدٍ مِنْ مَجَرَّةٍ أُخْرَى",
  segs: [
    { ar: "لَقَدْ أَتَيْتُ", uz: "Men keldim" },
    { ar: "مِنْ بَعِيدٍ", uz: "juda uzoqdan" },
    { ar: "مِنْ مَجَرَّةٍ أُخْرَى", uz: "boshqa bir galaktikadan" }
  ],
  full_uz: "Men juda uzoqdagi boshqa bir galaktikadan keldim.",
  note: null
},

{
  num: 79,
  time: "00:05:30,560 --> 00:05:32,560",
  arabic: "هَلْ أَتَيْتِ لِتُدَمِّرِي كُلَّ شَيْءٍ؟",
  segs: [
    { ar: "هَلْ أَتَيْتِ", uz: "Sen keldingmi" },
    { ar: "لِتُدَمِّرِي", uz: "vayron qilish uchun" },
    { ar: "كُلَّ شَيْءٍ؟", uz: "hamma narsani?" }
  ],
  full_uz: "Sen hamma narsani vayron qilish uchun keldingmi?",
  note: null
},

{
  num: 80,
  time: "00:05:33,560 --> 00:05:37,560",
  arabic: "لَا، بَلْ أَتَيْتُ لِأُصْلِحَ كُلَّ شَيْءٍ",
  segs: [
    { ar: "لَا", uz: "Yo'q." },
    { ar: "بَلْ", uz: "Aksincha" },
    { ar: "أَتَيْتُ", uz: "keldim" },
    { ar: "لِأُصْلِحَ", uz: "tuzatish uchun" },
    { ar: "كُلَّ شَيْءٍ", uz: "hamma narsani" }
  ],
  full_uz: "Yo'q, aksincha, hamma narsani tuzatish uchun keldim.",
  note: null
}
];
if (typeof module !== "undefined" && module.exports) {
  module.exports = lessons;
}