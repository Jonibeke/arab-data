const lessons = [
 {
  num: 1,
  time: "00:00:04,127 --> 00:00:08,570",
  arabic: "لِلْفِيكْسِيزِ شَعْرَةٌ فِي اللِّقَاءِ عَلِمْتُ بِهَا بِالصُّدْفَةِ",
  segs: [
    { ar: "لِلْفِيكْسِيزِ", uz: "fiksiklarning" },
    { ar: "شَعْرَةٌ فِي اللِّقَاءِ", uz: "uchrashuvdagi bir sirlari" },
    { ar: "عَلِمْتُ بِهَا", uz: "men bundan xabar topdim" },
    { ar: "بِالصُّدْفَةِ", uz: "tasodifan" }
  ],
  full_uz: "Fiksiklarning uchrashuvdagi bir siri bor, men bundan tasodifan xabar topdim.",
  note: null
},

{
  num: 2,
  time: "00:00:08,570 --> 00:00:12,920",
  arabic: "ثَلَاثُ أَصَابِعَ فِي الْهَوَاءِ تَجْعَلُهُمْ أَكْثَرَ لُطْفَةً",
  segs: [
    { ar: "ثَلَاثُ أَصَابِعَ", uz: "uchta barmoq" },
    { ar: "فِي الْهَوَاءِ", uz: "havoda" },
    { ar: "تَجْعَلُهُمْ", uz: "ularni qiladi" },
    { ar: "أَكْثَرَ لُطْفَةً", uz: "yanada yoqimliroq" }
  ],
  full_uz: "Havodagi uchta barmoq ularni yanada yoqimliroq qiladi.",
  note: null
},

{
  num: 3,
  time: "00:00:12,920 --> 00:00:17,083",
  arabic: "مَا أَحْلَى عَالَمَهُمْ كُنْ مَرِحًا مِثْلَهُمْ",
  segs: [
    { ar: "مَا أَحْلَى", uz: "naqadar yoqimli" },
    { ar: "عَالَمَهُمْ", uz: "ularning olami" },
    { ar: "كُنْ مَرِحًا", uz: "quvnoq bo'l" },
    { ar: "مِثْلَهُمْ", uz: "ular kabi" }
  ],
  full_uz: "Ularning olami naqadar yoqimli! Ular kabi quvnoq bo‘l.",
  note: null
},

{
  num: 4,
  time: "00:00:17,083 --> 00:00:21,343",
  arabic: "مَنْ أَيْنَ أَتَوْا مَا شَكْلُهُمْ مَنْ يَعْرِفُ سِرَّهُمْ",
  segs: [
    { ar: "مِنْ أَيْنَ أَتَوْا", uz: "ular qayerdan kelishgan" },
    { ar: "مَا شَكْلُهُمْ", uz: "ularning ko'rinishi qanday" },
    { ar: "مَنْ يَعْرِفُ سِرَّهُمْ", uz: "ularning sirini kim biladi" }
  ],
  full_uz: "Ular qayerdan kelishgan? Ularning ko‘rinishi qanday? Ularning sirini kim biladi?",
  note: null
},

{
  num: 5,
  time: "00:00:52,874 --> 00:00:55,148",
  arabic: "مَاذَا حَدَثَ؟",
  segs: null,
  full_uz: "Nima bo‘ldi?",
  note: null
},

{
  num: 6,
  time: "00:00:55,148 --> 00:00:56,825",
  arabic: "غَرِيبٌ.",
  segs: null,
  full_uz: "G‘alati.",
  note: null
},

{
  num: 7,
  time: "00:00:56,825 --> 00:00:59,133",
  arabic: "تُوم لَيْسَ هُنَا.",
  segs: [
    { ar: "تُوم", uz: "Tom" },
    { ar: "لَيْسَ هُنَا", uz: "bu yerda emas" }
  ],
  full_uz: "Tom bu yerda yo‘q.",
  note: null
},

{
  num: 8,
  time: "00:00:59,133 --> 00:01:02,835",
  arabic: "وَمِنَ الْمُسْتَحِيلِ أَنْ تَكُونَ الدُّمَى قَدْ قَذَفَتْهَا",
  segs: [
    { ar: "وَمِنَ الْمُسْتَحِيلِ", uz: "va mumkin emas" },
    { ar: "أَنْ تَكُونَ", uz: "bo'lishi" },
    { ar: "الدُّمَى", uz: "qo'g'irchoqlar" },
    { ar: "قَدْ قَذَفَتْهَا", uz: "uni uloqtirgan" }
  ],
  full_uz: "Qo‘g‘irchoqlar uni uloqtirgan bo‘lishi mumkin emas.",
  note: null
},

{
  num: 9,
  time: "00:01:02,835 --> 00:01:07,253",
  arabic: "كَانَتْ هَذِهِ رَمْيَةً جَيِّدَةً",
  segs: [
    { ar: "كَانَتْ هَذِهِ", uz: "bu edi" },
    { ar: "رَمْيَةً جَيِّدَةً", uz: "yaxshi uloqtirish" }
  ],
  full_uz: "Bu yaxshi uloqtirish edi.",
  note: null
},

{
  num: 10,
  time: "00:01:07,253 --> 00:01:12,960",
  arabic: "لَمْ تَكُنْ طَوِيلَةً وَلَا عَالِيَةً أَيْضًا وَلَا بَعِيدَةً عَنِ الْهَدَفِ",
  segs: [
    { ar: "لَمْ تَكُنْ طَوِيلَةً", uz: "uzoq bo'lmagan" },
    { ar: "وَلَا عَالِيَةً أَيْضًا", uz: "va baland ham bo'lmagan" },
    { ar: "وَلَا بَعِيدَةً عَنِ الْهَدَفِ", uz: "va nishondan uzoq ham bo'lmagan" }
  ],
  full_uz: "Uzoq ham, baland ham emas, nishondan ham uzoq emas edi.",
  note: null
},

{
  num: 11,
  time: "00:01:12,960 --> 00:01:15,560",
  arabic: "كَانَتْ فَظِيعَةً جِدًّا جَيِّدَةً لَكِنْ فَظِيعَةً",
  segs: [
    { ar: "كَانَتْ فَظِيعَةً جِدًّا", uz: "juda yomon edi" },
    { ar: "جَيِّدَةً", uz: "yaxshi" },
    { ar: "لَكِنْ فَظِيعَةً", uz: "ammo yomon" }
  ],
  full_uz: "Juda yomon edi. Yaxshi, ammo yomon.",
  note: null
},

{
  num: 12,
  time: "00:01:15,560 --> 00:01:18,439",
  arabic: "هَلْ فَهِمْتَ؟ حَسَنًا مَاذَا نَفْعَلُ؟",
  segs: [
    { ar: "هَلْ فَهِمْتَ", uz: "tushundingmi" },
    { ar: "حَسَنًا", uz: "xo'sh" },
    { ar: "مَاذَا نَفْعَلُ", uz: "nima qilamiz" }
  ],
  full_uz: "Tushundingmi? Xo‘sh, nima qilamiz?",
  note: null
},

{
  num: 13,
  time: "00:01:18,439 --> 00:01:20,299",
  arabic: "عَلَيْنَا أَنْ نَرْفَعَهَا قَلِيلًا",
  segs: [
    { ar: "عَلَيْنَا", uz: "bizga kerak" },
    { ar: "أَنْ نَرْفَعَهَا", uz: "uni ko'tarish" },
    { ar: "قَلِيلًا", uz: "biroz" }
  ],
  full_uz: "Uni biroz ko‘tarishimiz kerak.",
  note: null
},

{
  num: 14,
  time: "00:01:20,299 --> 00:01:21,920",
  arabic: "فَايِر نُولِيك مَرْحَبًا",
  segs: [
    { ar: "فَايِر نُولِيك", uz: "Fayr, Nolik" },
    { ar: "مَرْحَبًا", uz: "salom" }
  ],
  full_uz: "Fayr, Nolik, salom.",
  note: null
},

{
  num: 15,
  time: "00:01:21,920 --> 00:01:24,000",
  arabic: "لِمَاذَا تَرْمِيَانِ الْكُرَةَ عَلَى فِيكْسِي؟",
  segs: [
    { ar: "لِمَاذَا", uz: "nega" },
    { ar: "تَرْمِيَانِ الْكُرَةَ", uz: "to'pni otayapsizlar" },
    { ar: "عَلَى فِيكْسِي", uz: "fiksikka" }
  ],
  full_uz: "Nega to‘pni fiksikka otyapsizlar?",
  note: null
},

{
  num: 16,
  time: "00:01:24,000 --> 00:01:27,939",
  arabic: "الْفِيكْسِيزُ عَلَيْهِمْ أَنْ يَكُونُوا فِي الْمَدْرَسَةِ الْآنَ",
  segs: [
    { ar: "الْفِيكْسِيزُ", uz: "fiksiklar" },
    { ar: "عَلَيْهِمْ أَنْ يَكُونُوا", uz: "ular bo'lishlari kerak" },
    { ar: "فِي الْمَدْرَسَةِ", uz: "maktabda" },
    { ar: "الْآنَ", uz: "hozir" }
  ],
  full_uz: "Fiksiklar hozir maktabda bo‘lishlari kerak.",
  note: null
},

{
  num: 17,
  time: "00:01:27,939 --> 00:01:30,119",
  arabic: "أَنَا فِي طَرِيقِي إِلَى الْمَدْرَسَةِ",
  segs: [
    { ar: "أَنَا", uz: "men" },
    { ar: "فِي طَرِيقِي", uz: "yo'ldaman" },
    { ar: "إِلَى الْمَدْرَسَةِ", uz: "maktabga" }
  ],
  full_uz: "Men maktabga yo‘ldaman.",
  note: null
},

{
  num: 18,
  time: "00:01:30,119 --> 00:01:32,320",
  arabic: "وَأَنْتَ يَا فَايِد لِمَاذَا لَسْتَ فِي صَفِّكَ؟",
  segs: [
    { ar: "وَأَنْتَ يَا فَايِد", uz: "sen-chi, Fayid" },
    { ar: "لِمَاذَا لَسْتَ", uz: "nega sen emassan" },
    { ar: "فِي صَفِّكَ", uz: "sinfingda" }
  ],
  full_uz: "Sen-chi, Fayid, nega sinfingda emassan?",
  note: null
},

{
  num: 19,
  time: "00:01:32,320 --> 00:01:34,439",
  arabic: "لِأَنَّهُ مُمِلٌّ جِدًّا",
  segs: [
    { ar: "لِأَنَّهُ", uz: "chunki u" },
    { ar: "مُمِلٌّ جِدًّا", uz: "juda zerikarli" }
  ],
  full_uz: "Chunki u juda zerikarli.",
  note: null
},

{
  num: 20,
  time: "00:01:34,439 --> 00:01:38,140",
  arabic: "لَكِنْ هُنَا انْظُرِي إِلَى هَذِهِ الرَّامِيَةِ الَّتِي وَجَدْنَاهَا",
  segs: [
    { ar: "لَكِنْ هُنَا", uz: "ammo bu yerda" },
    { ar: "انْظُرِي إِلَى", uz: "qaragin" },
    { ar: "هَذِهِ الرَّامِيَةِ", uz: "bu otuvchi qurilmaga" },
    { ar: "الَّتِي وَجَدْنَاهَا", uz: "uni biz topdik" }
  ],
  full_uz: "Ammo bu yerga qara, biz topgan mana shu otuvchi qurilmaga.",
  note: null
},

{
  num: 21,
  time: "00:01:38,140 --> 00:01:40,219",
  arabic: "هَا؟ مَاذَا دَعَوْتَهُ؟",
  segs: [
    { ar: "هَا", uz: "ha" },
    { ar: "مَاذَا دَعَوْتَهُ", uz: "uni nima deb atading" }
  ],
  full_uz: "Ha? Uni nima deb atading?",
  note: null
},

{
  num: 22,
  time: "00:01:39,219 --> 00:01:41,239",
  arabic: "أَلَا تَعْلَمُ مَا يَكُونُ هَذَا؟",
  segs: [
    { ar: "أَلَا تَعْلَمُ", uz: "bilmaysanmi" },
    { ar: "مَا يَكُونُ هَذَا", uz: "bu nima ekanini" }
  ],
  full_uz: "Bu nima ekanini bilmaysanmi?",
  note: null
},

{
  num: 23,
  time: "00:01:41,239 --> 00:01:42,659",
  arabic: "إِنَّهُ يُدْعَى الْمَنْجَنِيقَ",
  segs: [
    { ar: "إِنَّهُ يُدْعَى", uz: "u deb ataladi" },
    { ar: "الْمَنْجَنِيقَ", uz: "manjaniq" }
  ],
  full_uz: "U manjaniq deb ataladi.",
  note: null
},

{
  num: 24,
  time: "00:01:42,659 --> 00:01:44,439",
  arabic: "مَاذَا؟ مَنْجَرِيق؟",
  segs: [
    { ar: "مَاذَا", uz: "nima" },
    { ar: "مَنْجَرِيق", uz: "manjariq" }
  ],
  full_uz: "Nima? Manjariq?",
  note: null
},

{
  num: 25,
  time: "00:01:44,439 --> 00:01:47,060",
  arabic: "لَا لَا لَيْسَ الْمَنْجَرِيقُ",
  segs: [
    { ar: "لَا لَا", uz: "yo'q, yo'q" },
    { ar: "لَيْسَ الْمَنْجَرِيقُ", uz: "manjariq emas" }
  ],
  full_uz: "Yo‘q, yo‘q, manjariq emas.",
  note: null
},

{
  num: 26,
  time: "00:01:47,060 --> 00:01:49,039",
  arabic: "بَلْ هُوَ الْمَنْجَنِيقُ",
  segs: [
    { ar: "بَلْ هُوَ", uz: "balki u" },
    { ar: "الْمَنْجَنِيقُ", uz: "manjaniq" }
  ],
  full_uz: "Balki u manjaniq.",
  note: null
},

{
  num: 27,
  time: "00:01:52,119 --> 00:01:56,600",
  arabic: "الْمَنْجَنِيقَاتُ آلَاتُ دَفْعٍ قَدِيمَةٌ جِدًّا",
  segs: [
    { ar: "الْمَنْجَنِيقَاتُ", uz: "manjaniqlar" },
    { ar: "آلَاتُ دَفْعٍ", uz: "uloqtirish qurilmalari" },
    { ar: "قَدِيمَةٌ جِدًّا", uz: "juda qadimiy" }
  ],
  full_uz: "Manjaniqlar juda qadimiy uloqtirish qurilmalaridir.",
  note: null
},

{
  num: 28,
  time: "00:01:56,600 --> 00:02:00,899",
  arabic: "اسْتُعْمِلَتْ قَدِيمًا لِقَذْفِ الْأَحْجَارِ وَالرِّمَاحِ الثَّقِيلَةِ وَبَرَامِيلِ الْقَطْرَانِ الْمُحْتَرِقِ",
  segs: [
    { ar: "اسْتُعْمِلَتْ قَدِيمًا", uz: "qadimda ishlatilgan" },
    { ar: "لِقَذْفِ الْأَحْجَارِ", uz: "toshlarni uloqtirish uchun" },
    { ar: "وَالرِّمَاحِ الثَّقِيلَةِ", uz: "va og'ir nayzalarni" },
    { ar: "وَبَرَامِيلِ الْقَطْرَانِ الْمُحْتَرِقِ", uz: "va yonayotgan smola bochkalarini" }
  ],
  full_uz: "Qadimda ular toshlarni, og‘ir nayzalarni va yonayotgan smola bochkalarini uloqtirish uchun ishlatilgan.",
  note: null
},

{
  num: 29,
  time: "00:02:00,899 --> 00:02:05,019",
  arabic: "الْجُزْءُ الرَّئِيسِيُّ مِنَ الْمَنْجَنِيقِ هُوَ قِطْعَةُ حَبْلٍ خَاصَّةٌ",
  segs: [
    { ar: "الْجُزْءُ الرَّئِيسِيُّ", uz: "asosiy qism" },
    { ar: "مِنَ الْمَنْجَنِيقِ", uz: "manjaniqning" },
    { ar: "هُوَ", uz: "bu" },
    { ar: "قِطْعَةُ حَبْلٍ خَاصَّةٌ", uz: "maxsus arqon bo'lagi" }
  ],
  full_uz: "Manjaniqning asosiy qismi maxsus arqon bo‘lagidir.",
  note: null
},

{
  num: 30,
  time: "00:02:05,019 --> 00:02:07,800",
  arabic: "مَشْدُودَةٌ شَدًّا جَيِّدًا جِدًّا مِثْلَ النَّابِضِ",
  segs: [
    { ar: "مَشْدُودَةٌ", uz: "tortilgan" },
    { ar: "شَدًّا جَيِّدًا جِدًّا", uz: "juda yaxshi tarzda" },
    { ar: "مِثْلَ النَّابِضِ", uz: "prujina kabi" }
  ],
  full_uz: "U prujina kabi juda yaxshi tortilgan.",
  note: null
},

{
  num: 31,
  time: "00:02:07,800 --> 00:02:10,800",
  arabic: "يَلِفُّ الْحَبْلُ بَعْدَ ذَلِكَ حَوْلَ مِلْعَقَةٍ كَبِيرَةٍ",
  segs: [
    { ar: "يَلِفُّ الْحَبْلُ", uz: "arqon o'raladi" },
    { ar: "بَعْدَ ذَلِكَ", uz: "shundan keyin" },
    { ar: "حَوْلَ مِلْعَقَةٍ كَبِيرَةٍ", uz: "katta qoshiq atrofida" }
  ],
  full_uz: "Shundan keyin arqon katta qoshiq atrofida o‘raladi.",
  note: null
},

{
  num: 32,
  time: "00:02:10,800 --> 00:02:16,120",
  arabic: "إِذَا سَحَبْتَ هَذِهِ الْمِلْعَقَةَ إِلَى الْخَلْفِ وَوَضَعْتَ فِيهَا حَجَرًا ثُمَّ تَرَكْتَهَا",
  segs: [
    { ar: "إِذَا سَحَبْتَ", uz: "agar tortsang" },
    { ar: "هَذِهِ الْمِلْعَقَةَ", uz: "bu qoshiqni" },
    { ar: "إِلَى الْخَلْفِ", uz: "orqaga" },
    { ar: "وَوَضَعْتَ فِيهَا حَجَرًا", uz: "va unga tosh qo'ysang" },
    { ar: "ثُمَّ تَرَكْتَهَا", uz: "so'ng uni qo'yib yuborsang" }
  ],
  full_uz: "Agar bu qoshiqqni orqaga tortib, unga tosh qo‘ysang va so‘ng uni qo‘yib yuborsang.",
  note: null
},

{
  num: 33,
  time: "00:02:16,120 --> 00:02:17,939",
  arabic: "يُطْلِقُ الْمَنْجَنِيقُ قَذِيفَةً",
  segs: [
    { ar: "يُطْلِقُ الْمَنْجَنِيقُ", uz: "manjaniq uloqtiradi" },
    { ar: "قَذِيفَةً", uz: "snaryadni" }
  ],
  full_uz: "Manjaniq snaryadni uloqtiradi.",
  note: null
},

{
  num: 34,
  time: "00:02:18,579 --> 00:02:21,939",
  arabic: "وَيَطِيرُ الْحَجَرُ بَعِيدًا جِدًّا",
  segs: [
    { ar: "وَيَطِيرُ الْحَجَرُ", uz: "va tosh uchadi" },
    { ar: "بَعِيدًا جِدًّا", uz: "juda uzoqqa" }
  ],
  full_uz: "Va tosh juda uzoqqa uchadi.",
  note: null
},

{
  num: 35,
  time: "00:02:24,680 --> 00:02:26,699",
  arabic: "حَسَنًا لِنَبْدَأْ",
  segs: [
    { ar: "حَسَنًا", uz: "xo'sh" },
    { ar: "لِنَبْدَأْ", uz: "boshlaylik" }
  ],
  full_uz: "Xo‘sh, boshlaylik.",
  note: null
},

{
  num: 36,
  time: "00:02:31,120 --> 00:02:35,360",
  arabic: "لَا رَمْيَةٌ قَصِيرَةٌ",
  segs: [
    { ar: "لَا", uz: "yo'q" },
    { ar: "رَمْيَةٌ قَصِيرَةٌ", uz: "qisqa uloqtirish" }
  ],
  full_uz: "Yo‘q, uloqtirish qisqa.",
  note: null
},

{
  num: 37,
  time: "00:02:35,360 --> 00:02:36,079",
  arabic: "مَاذَا تَعْنِي بِقَصِيرَةٍ؟",
  segs: [
    { ar: "مَاذَا تَعْنِي", uz: "nimani nazarda tutyapsan" },
    { ar: "بِقَصِيرَةٍ", uz: "qisqa deganda" }
  ],
  full_uz: "Qisqa deganda nimani nazarda tutyapsan?",
  note: null
},

{
  num: 38,
  time: "00:02:36,079 --> 00:02:36,500",
  arabic: "عَلَى مَا تَرْمِي؟",
  segs: [
    { ar: "عَلَى مَا", uz: "nimaga" },
    { ar: "تَرْمِي", uz: "otyapsan" }
  ],
  full_uz: "Nimaga otyapsan?",
  note: null
},

{
  num: 39,
  time: "00:02:36,500 --> 00:02:37,079",
  arabic: "سَتَرَيْنَ",
  segs: null,
  full_uz: "Ko‘rasan.",
  note: null
},

{
  num: 40,
  time: "00:02:37,079 --> 00:02:39,699",
  arabic: "سَنُرْجِعُ الْمِلْعَقَةَ إِلَى الْخَلْفِ أَكْثَرَ",
  segs: [
    { ar: "سَنُرْجِعُ الْمِلْعَقَةَ", uz: "qoshiqni qaytaramiz" },
    { ar: "إِلَى الْخَلْفِ", uz: "orqaga" },
    { ar: "أَكْثَرَ", uz: "ko'proq" }
  ],
  full_uz: "Qoshiqni yanada orqaga tortamiz.",
  note: null
},

{
  num: 41,
  time: "00:02:39,699 --> 00:02:40,360",
  arabic: "قَلِيلًا",
  segs: null,
  full_uz: "Biroz.",
  note: null
},

{
  num: 42,
  time: "00:02:40,360 --> 00:02:42,180",
  arabic: "إِيَّاكُمَا سَتَكْسِرَانِ الزُّجَاجَ",
  segs: [
    { ar: "إِيَّاكُمَا", uz: "ehtiyot bo'linglar" },
    { ar: "سَتَكْسِرَانِ", uz: "sindirib qo'yasizlar" },
    { ar: "الزُّجَاجَ", uz: "oynani" }
  ],
  full_uz: "Ehtiyot bo‘linglar, oynani sindirib qo‘yasizlar.",
  note: null
},

{
  num: 43,
  time: "00:02:42,180 --> 00:02:44,819",
  arabic: "نُولِيك ادْفَعْ",
  segs: [
    { ar: "نُولِيك", uz: "Nolik" },
    { ar: "ادْفَعْ", uz: "itargin" }
  ],
  full_uz: "Nolik, itargin.",
  note: null
},

{
  num: 44,
  time: "00:02:48,560 --> 00:02:50,219",
  arabic: "رَائِعٌ مَرْحَى",
  segs: [
    { ar: "رَائِعٌ", uz: "ajoyib" },
    { ar: "مَرْحَى", uz: "ura" }
  ],
  full_uz: "Ajoyib! Ura!",
  note: null
},

{
  num: 45,
  time: "00:02:50,219 --> 00:02:52,780",
  arabic: "دَعْنَا الْآنَ نُطَيِّرْهُ نَحْوَ الْفَضَاءِ",
  segs: [
    { ar: "دَعْنَا الْآنَ", uz: "qani endi" },
    { ar: "نُطَيِّرْهُ", uz: "uni uchiraylik" },
    { ar: "نَحْوَ الْفَضَاءِ", uz: "fazoga tomon" }
  ],
  full_uz: "Qani, endi uni fazoga uchiraylik.",
  note: null
},

{
  num: 46,
  time: "00:02:52,780 --> 00:02:54,159",
  arabic: "لَحْظَةً الْفَضَاءُ؟",
  segs: [
    { ar: "لَحْظَةً", uz: "bir daqiqa" },
    { ar: "الْفَضَاءُ", uz: "fazo" }
  ],
  full_uz: "Bir daqiqa, fazogami?",
  note: null
},

{
  num: 47,
  time: "00:02:54,159 --> 00:02:57,080",
  arabic: "أَيُّ طَيَرَانٍ؟ مَنْ سَيَطِيرُ؟",
  segs: [
    { ar: "أَيُّ طَيَرَانٍ", uz: "qanday uchish" },
    { ar: "مَنْ سَيَطِيرُ", uz: "kim uchadi" }
  ],
  full_uz: "Qanday uchish? Kim uchadi?",
  note: null
},

{
  num: 48,
  time: "00:02:57,080 --> 00:03:01,719",
  arabic: "أَنَا سَأَطِيرُ مُبَاشَرَةً نَحْوَ الْقَمَرِ وَمِنَ النَّافِذَةِ",
  segs: [
    { ar: "أَنَا", uz: "men" },
    { ar: "سَأَطِيرُ مُبَاشَرَةً", uz: "to'g'ridan-to'g'ri uchaman" },
    { ar: "نَحْوَ الْقَمَرِ", uz: "oy tomon" },
    { ar: "وَمِنَ النَّافِذَةِ", uz: "va derazadan" }
  ],
  full_uz: "Men to‘g‘ridan-to‘g‘ri oy tomon va derazadan uchaman.",
  note: null
},

{
  num: 49,
  time: "00:03:01,719 --> 00:03:03,719",
  arabic: "أَوَّلُ فِيكْسِي فَضَاءٍ فِي الْعَالَمِ",
  segs: [
    { ar: "أَوَّلُ فِيكْسِي فَضَاءٍ", uz: "birinchi kosmik fiksik" },
    { ar: "فِي الْعَالَمِ", uz: "dunyoda" }
  ],
  full_uz: "Dunyodagi birinchi kosmik fiksik.",
  note: null
},

{
  num: 50,
  time: "00:03:03,719 --> 00:03:05,879",
  arabic: "هَلْ أَنْتَ مُسْتَعِدٌّ لِلرِّحْلَةِ؟",
  segs: [
    { ar: "هَلْ أَنْتَ مُسْتَعِدٌّ", uz: "sen tayyormisan" },
    { ar: "لِلرِّحْلَةِ", uz: "sayohatga" }
  ],
  full_uz: "Sayohatga tayyormisan?",
  note: null
},

{
  num: 51,
  time: "00:03:05,879 --> 00:03:06,719",
  arabic: "نَعَمْ سَيِّدِي",
  segs: [
    { ar: "نَعَمْ", uz: "ha" },
    { ar: "سَيِّدِي", uz: "janobim" }
  ],
  full_uz: "Ha, janobim.",
  note: null
},

{
  num: 52,
  time: "00:03:06,719 --> 00:03:09,579",
  arabic: "نُولِيك اخْرُجْ مِنَ الْمِلْعَقَةِ الْآنَ",
  segs: [
    { ar: "نُولِيك", uz: "Nolik" },
    { ar: "اخْرُجْ مِنَ الْمِلْعَقَةِ", uz: "qoshiqdan chiq" },
    { ar: "الْآنَ", uz: "hozir" }
  ],
  full_uz: "Nolik, hozir qoshiqdan chiq.",
  note: null
},

{
  num: 53,
  time: "00:03:09,579 --> 00:03:12,319",
  arabic: "سَأَكُونُ أَوَّلَ فِيكْسِي يَحُطُّ عَلَى الْقَمَرِ",
  segs: [
    { ar: "سَأَكُونُ", uz: "bo'laman" },
    { ar: "أَوَّلَ فِيكْسِي", uz: "birinchi fiksik" },
    { ar: "يَحُطُّ عَلَى الْقَمَرِ", uz: "oyga qo'nadigan" }
  ],
  full_uz: "Men oyga qo‘nadigan birinchi fiksik bo‘laman.",
  note: null
},

{
  num: 54,
  time: "00:03:12,319 --> 00:03:14,479",
  arabic: "نُولِيك هَذَا يَكْفِي",
  segs: [
    { ar: "نُولِيك", uz: "Nolik" },
    { ar: "هَذَا يَكْفِي", uz: "shu yetarli" }
  ],
  full_uz: "Nolik, shu yetarli.",
  note: null
},

{
  num: 55,
  time: "00:03:14,479 --> 00:03:16,460",
  arabic: "مَا هَذَا الْمِزَاحُ؟",
  segs: [
    { ar: "مَا هَذَا", uz: "bu nima" },
    { ar: "الْمِزَاحُ", uz: "hazil" }
  ],
  full_uz: "Bu qanday hazil?",
  note: null
},

{
  num: 56,
  time: "00:03:16,460 --> 00:03:18,960",
  arabic: "نَحْنُ لَا نَمْزَحُ سَيُحَلِّقُ نَحْوَ الْفَضَاءِ",
  segs: [
    { ar: "نَحْنُ لَا نَمْزَحُ", uz: "biz hazillashmayapmiz" },
    { ar: "سَيُحَلِّقُ", uz: "u uchadi" },
    { ar: "نَحْوَ الْفَضَاءِ", uz: "fazo tomon" }
  ],
  full_uz: "Biz hazillashmayapmiz, u fazo tomon uchadi.",
  note: null
},

{
  num: 57,
  time: "00:03:18,960 --> 00:03:20,640",
  arabic: "وَلِمَ لَا تُحَلِّقُ أَنْتَ؟",
  segs: [
    { ar: "وَلِمَ", uz: "va nega" },
    { ar: "لَا تُحَلِّقُ", uz: "uchmaysan" },
    { ar: "أَنْتَ", uz: "sen" }
  ],
  full_uz: "Nega o‘zing uchmaysan?",
  note: null
},

{
  num: 58,
  time: "00:03:20,640 --> 00:03:21,640",
  arabic: "لِأَنَّهُ أَخَافُ",
  segs: [
    { ar: "لِأَنَّهُ", uz: "chunki" },
    { ar: "أَخَافُ", uz: "qo'rqaman" }
  ],
  full_uz: "Chunki qo‘rqaman.",
  note: null
},

{
  num: 59,
  time: "00:03:21,640 --> 00:03:22,719",
  arabic: "انْتَظِرْ",
  segs: null,
  full_uz: "Kut.",
  note: null
},

{
  num: 60,
  time: "00:03:22,719 --> 00:03:25,879",
  arabic: "لَمْ يَذْهَبِ الْبَشَرُ بِأَنْفُسِهِمْ إِلَى الْفَضَاءِ أَوَّلًا",
  segs: [
    { ar: "لَمْ يَذْهَبِ الْبَشَرُ", uz: "insonlar bormagan" },
    { ar: "بِأَنْفُسِهِمْ", uz: "o'zlari" },
    { ar: "إِلَى الْفَضَاءِ", uz: "fazoga" },
    { ar: "أَوَّلًا", uz: "avval" }
  ],
  full_uz: "Avval insonlarning o‘zlari fazoga borishmagan.",
  note: null
},

{
  num: 61,
  time: "00:03:25,879 --> 00:03:27,580",
  arabic: "بَلْ قَامُوا بِإِرْسَالِ الْكِلَابِ",
  segs: [
    { ar: "بَلْ", uz: "balki" },
    { ar: "قَامُوا بِإِرْسَالِ", uz: "yuborishgan" },
    { ar: "الْكِلَابِ", uz: "itlarni" }
  ],
  full_uz: "Balki ular itlarni yuborishgan.",
  note: null
},

{
  num: 62,
  time: "00:03:27,580 --> 00:03:30,000",
  arabic: "لَا لَنْ يَتَّسِعَ الْمَكَانُ لِشُوسَاكَا",
  segs: [
    { ar: "لَا", uz: "yo'q" },
    { ar: "لَنْ يَتَّسِعَ الْمَكَانُ", uz: "joy sig'maydi" },
    { ar: "لِشُوسَاكَا", uz: "Chusakaga" }
  ],
  full_uz: "Yo‘q, Chusakaga joy yetmaydi.",
  note: null
},

{
  num: 63,
  time: "00:03:30,000 --> 00:03:32,960",
  arabic: "سِيمْكَا لِمَاذَا لَا تَدَعِينَا نَنْتَهِي مِنْ هَذَا؟",
  segs: [
    { ar: "سِيمْكَا", uz: "Simka" },
    { ar: "لِمَاذَا", uz: "nega" },
    { ar: "لَا تَدَعِينَا", uz: "bizga ruxsat bermaysan" },
    { ar: "نَنْتَهِي مِنْ هَذَا", uz: "buni tugatishga" }
  ],
  full_uz: "Simka, nega bizga buni tugatishga ruxsat bermaysan?",
  note: null
},

{
  num: 64,
  time: "00:03:32,960 --> 00:03:34,240",
  arabic: "حَسَنًا سَأَذْهَبُ",
  segs: [
    { ar: "حَسَنًا", uz: "xo'sh" },
    { ar: "سَأَذْهَبُ", uz: "boraman" }
  ],
  full_uz: "Xo‘sh, boraman.",
  note: null
},

{
  num: 65,
  time: "00:03:34,240 --> 00:03:37,300",
  arabic: "وَلَكِنْ بَعْدَ أَنْ يَضَعَ نُولِيك خُوذَةً عَلَى رَأْسِهِ",
  segs: [
    { ar: "وَلَكِنْ", uz: "ammo" },
    { ar: "بَعْدَ أَنْ يَضَعَ", uz: "kiygizgandan keyin" },
    { ar: "نُولِيك", uz: "Nolik" },
    { ar: "خُوذَةً", uz: "dubulg'a" },
    { ar: "عَلَى رَأْسِهِ", uz: "boshiga" }
  ],
  full_uz: "Ammo Nolik boshiga dubulg‘a kiyganidan keyin.",
  note: null
},

{
  num: 66,
  time: "00:03:37,300 --> 00:03:38,920",
  arabic: "نَعَمْ أَنْتِ مُحِقَّةٌ",
  segs: [
    { ar: "نَعَمْ", uz: "ha" },
    { ar: "أَنْتِ مُحِقَّةٌ", uz: "sen haqsan" }
  ],
  full_uz: "Ha, sen haqsan.",
  note: null
},

{
  num: 67,
  time: "00:03:38,920 --> 00:03:40,780",
  arabic: "سَأَبْحَثُ عَنْ خُوذَةٍ",
  segs: [
    { ar: "سَأَبْحَثُ", uz: "qidirmoqchiman" },
    { ar: "عَنْ خُوذَةٍ", uz: "dubulg'a" }
  ],
  full_uz: "Dubulg‘a qidiraman.",
  note: null
},

{
  num: 68,
  time: "00:03:47,920 --> 00:03:50,839",
  arabic: "تَمَّ اخْتِرَاعُ الْمَنْجَنِيقِ فِي الْعُصُورِ الْقَدِيمَةِ",
  segs: [
    { ar: "تَمَّ اخْتِرَاعُ", uz: "ixtiro qilingan" },
    { ar: "الْمَنْجَنِيقِ", uz: "manjaniq" },
    { ar: "فِي الْعُصُورِ الْقَدِيمَةِ", uz: "qadimgi davrlarda" }
  ],
  full_uz: "Manjaniq qadimgi davrlarda ixtiro qilingan.",
  note: null
},

{
  num: 69,
  time: "00:03:50,839 --> 00:03:53,039",
  arabic: "وَلَكِنْ لَا يَزَالُ النَّاسُ يَسْتَعْمِلُونَهُ",
  segs: [
    { ar: "وَلَكِنْ", uz: "ammo" },
    { ar: "لَا يَزَالُ النَّاسُ", uz: "odamlar hali ham" },
    { ar: "يَسْتَعْمِلُونَهُ", uz: "uni ishlatadilar" }
  ],
  full_uz: "Ammo odamlar undan hali ham foydalanadilar.",
  note: null
},

{
  num: 70,
  time: "00:03:53,039 --> 00:03:56,759",
  arabic: "الْفَرْقُ أَنَّهُ بَدَلَ أَنْ يَقُومَ بِقَذْفِ الصُّخُورِ",
  segs: [
    { ar: "الْفَرْقُ", uz: "farqi" },
    { ar: "أَنَّهُ", uz: "shundaki" },
    { ar: "بَدَلَ أَنْ يَقُومَ", uz: "qilish o'rniga" },
    { ar: "بِقَذْفِ الصُّخُورِ", uz: "toshlarni uloqtirishni" }
  ],
  full_uz: "Farqi shundaki, toshlarni uloqtirish o‘rniga.",
  note: null
},

{
  num: 71,
  time: "00:03:56,759 --> 00:03:59,280",
  arabic: "يُسْتَعْمَلُ لِقَذْفِ الطَّائِرَاتِ النَّفَّاثَةِ",
  segs: [
    { ar: "يُسْتَعْمَلُ", uz: "ishlatiladi" },
    { ar: "لِقَذْفِ", uz: "uloqtirish uchun" },
    { ar: "الطَّائِرَاتِ النَّفَّاثَةِ", uz: "reaktiv samolyotlarni" }
  ],
  full_uz: "U reaktiv samolyotlarni uloqtirish uchun ishlatiladi.",
  note: null
},

{
  num: 72,
  time: "00:03:59,280 --> 00:04:02,719",
  arabic: "لِأَنَّ مَدَى مُدَرَّجِ الْمَطَارِ عَلَى حَامِلَةِ الطَّائِرَاتِ قَصِيرٌ",
  segs: [
    { ar: "لِأَنَّ", uz: "chunki" },
    { ar: "مَدَى مُدَرَّجِ الْمَطَارِ", uz: "aeroport yo'lagining masofasi" },
    { ar: "عَلَى حَامِلَةِ الطَّائِرَاتِ", uz: "avianosetsda" },
    { ar: "قَصِيرٌ", uz: "qisqa" }
  ],
  full_uz: "Chunki avianosetsdagi uchish yo‘lagining masofasi qisqa.",
  note: null
},

{
  num: 73,
  time: "00:04:02,719 --> 00:04:06,719",
  arabic: "لِذَا تُسْتَعْمَلُ الْمَنْجَنِيقَاتُ لِمُسَاعَدَةِ الطَّائِرَاتِ عَلَى التَّحَرُّكِ سَرِيعًا",
  segs: [
    { ar: "لِذَا", uz: "shuning uchun" },
    { ar: "تُسْتَعْمَلُ الْمَنْجَنِيقَاتُ", uz: "manjaniqlar ishlatiladi" },
    { ar: "لِمُسَاعَدَةِ الطَّائِرَاتِ", uz: "samolyotlarga yordam berish uchun" },
    { ar: "عَلَى التَّحَرُّكِ سَرِيعًا", uz: "tez harakatlanishga" }
  ],
  full_uz: "Shuning uchun samolyotlarning tez harakatlanishiga yordam berish uchun manjaniqlar ishlatiladi.",
  note: null
},

{
  num: 74,
  time: "00:04:07,379 --> 00:04:08,800",
  arabic: "لِتَتَمَكَّنَ مِنَ الْإِقْلَاعِ",
  segs: [
    { ar: "لِتَتَمَكَّنَ", uz: "qila olishi uchun" },
    { ar: "مِنَ الْإِقْلَاعِ", uz: "havoga ko'tarilishni" }
  ],
  full_uz: "Havoga ko‘tarila olishi uchun.",
  note: null
},

{
  num: 75,
  time: "00:04:08,800 --> 00:04:12,600",
  arabic: "قَدْ تُسْتَعْمَلُ الْمَنْجَنِيقَاتُ أَيْضًا لِلْحِفَاظِ عَلَى حَيَاةِ الطَّيَّارِ",
  segs: [
    { ar: "قَدْ تُسْتَعْمَلُ الْمَنْجَنِيقَاتُ أَيْضًا", uz: "manjaniqlar ham ishlatilishi mumkin" },
    { ar: "لِلْحِفَاظِ عَلَى", uz: "saqlab qolish uchun" },
    { ar: "حَيَاةِ الطَّيَّارِ", uz: "uchuvchining hayotini" }
  ],
  full_uz: "Manjaniqlar uchuvchining hayotini saqlab qolish uchun ham ishlatilishi mumkin.",
  note: null
},

{
  num: 76,
  time: "00:04:12,600 --> 00:04:15,060",
  arabic: "فَعِنْدَمَا تَتَعَرَّضُ الطَّائِرَةُ لِحَادِثٍ",
  segs: [
    { ar: "فَعِنْدَمَا", uz: "shunda qachonki" },
    { ar: "تَتَعَرَّضُ الطَّائِرَةُ", uz: "samolyot duch kelsa" },
    { ar: "لِحَادِثٍ", uz: "halokatga" }
  ],
  full_uz: "Samolyot halokatga uchraganda.",
  note: null
},

{
  num: 77,
  time: "00:04:15,060 --> 00:04:16,660",
  arabic: "يَعْمَلُ الْمَنْجَنِيقُ فِي الْحُجْرَةِ",
  segs: [
    { ar: "يَعْمَلُ الْمَنْجَنِيقُ", uz: "manjaniq ishlaydi" },
    { ar: "فِي الْحُجْرَةِ", uz: "kabina ichida" }
  ],
  full_uz: "Manjaniq kabina ichida ishlaydi.",
  note: null
},

{
  num: 78,
  time: "00:04:16,660 --> 00:04:18,379",
  arabic: "وَيَقْذِفُ الطَّيَّارَ فِي الْفَضَاءِ",
  segs: [
    { ar: "وَيَقْذِفُ الطَّيَّارَ", uz: "va uchuvchini uloqtiradi" },
    { ar: "فِي الْفَضَاءِ", uz: "fazoga" }
  ],
  full_uz: "Va uchuvchini fazoga uloqtiradi.",
  note: null
},

{
  num: 79,
  time: "00:04:18,379 --> 00:04:20,680",
  arabic: "وَيَعُودُ إِلَى الْأَرْضِ بِاسْتِعْمَالِ الْمِظَلَّةِ",
  segs: [
    { ar: "وَيَعُودُ إِلَى الْأَرْضِ", uz: "va yerga qaytadi" },
    { ar: "بِاسْتِعْمَالِ الْمِظَلَّةِ", uz: "parashyutdan foydalanib" }
  ],
  full_uz: "Va parashyutdan foydalanib yerga qaytadi.",
  note: null
},

{
  num: 80,
  time: "00:04:20,680 --> 00:04:23,920",
  arabic: "وَالنَّقَّافَةُ الْقَدِيمَةُ أَيْضًا نَوْعٌ مِنَ الْمَنْجَنِيقَاتِ",
  segs: [
    { ar: "وَالنَّقَّافَةُ الْقَدِيمَةُ", uz: "qadimgi naqofah ham" },
    { ar: "أَيْضًا", uz: "ham" },
    { ar: "نَوْعٌ مِنَ الْمَنْجَنِيقَاتِ", uz: "manjaniqlarning bir turi" }
  ],
  full_uz: "Qadimgi naqofah ham manjaniqlarning bir turidir.",
  note: null
},

{
  num: 81,
  time: "00:04:23,920 --> 00:04:25,600",
  arabic: "لَكِنَّهَا مَنْجَنِيقٌ صَغِيرٌ",
  segs: [
    { ar: "لَكِنَّهَا", uz: "ammo u" },
    { ar: "مَنْجَنِيقٌ صَغِيرٌ", uz: "kichik manjaniq" }
  ],
  full_uz: "Ammo u kichik manjaniq.",
  note: null
},

{
  num: 82,
  time: "00:04:25,600 --> 00:04:27,519",
  arabic: "وَلَكِنْ كُنْ حَذِرًا مِنْهَا",
  segs: [
    { ar: "وَلَكِنْ", uz: "ammo" },
    { ar: "كُنْ حَذِرًا مِنْهَا", uz: "undan ehtiyot bo'l" }
  ],
  full_uz: "Ammo undan ehtiyot bo‘l.",
  note: null
},

{
  num: 83,
  time: "00:04:27,519 --> 00:04:30,860",
  arabic: "فَقَدْ تَكُونُ خَطِيرَةً عَلَى الْآخَرِينَ وَعَلَيْكَ أَيْضًا",
  segs: [
    { ar: "فَقَدْ تَكُونُ خَطِيرَةً", uz: "u xavfli bo'lishi mumkin" },
    { ar: "عَلَى الْآخَرِينَ", uz: "boshqalar uchun" },
    { ar: "وَعَلَيْكَ أَيْضًا", uz: "va sen uchun ham" }
  ],
  full_uz: "U boshqalar uchun va sen uchun ham xavfli bo‘lishi mumkin.",
  note: null
},

{
  num: 84,
  time: "00:04:30,860 --> 00:04:35,080",
  arabic: "أَمَّا مَا يَخُصُّنَا فَإِنَّ الشَّيْءَ الْوَحِيدَ الَّذِي نَسْتَعْمِلُ فِيهِ الْمَنْجَنِيقَاتِ",
  segs: [
    { ar: "أَمَّا مَا يَخُصُّنَا", uz: "bizga tegishlisiga kelsak" },
    { ar: "فَإِنَّ الشَّيْءَ الْوَحِيدَ", uz: "yagona narsa" },
    { ar: "الَّذِي نَسْتَعْمِلُ فِيهِ", uz: "unda biz foydalanadigan" },
    { ar: "الْمَنْجَنِيقَاتِ", uz: "manjaniqlardan" }
  ],
  full_uz: "Bizga tegishli bo‘lganiga kelsak, manjaniqlardan foydalanadigan yagona narsa...",
  note: null
},

{
  num: 85,
  time: "00:04:35,080 --> 00:04:36,800",
  arabic: "هُوَ الْمَهَمَّاتُ السِّلْمِيَّةُ",
  segs: [
    { ar: "هُوَ", uz: "bu" },
    { ar: "الْمَهَمَّاتُ السِّلْمِيَّةُ", uz: "tinchlikparvar vazifalar" }
  ],
  full_uz: "Bu tinchlikparvar vazifalardir.",
  note: null
},

{
  num: 86,
  time: "00:04:38,800 --> 00:04:44,259",
  arabic: "بَابُوسُ أَسْرِعْ سَيَقْذِفُ نُولِيك إِلَى الْقَمَرِ بِالْمَنْجَنِيقِ",
  segs: [
    { ar: "بَابُوسُ", uz: "Babos" },
    { ar: "أَسْرِعْ", uz: "tezroq" },
    { ar: "سَيَقْذِفُ نُولِيك", uz: "Nolikni uloqtiradi" },
    { ar: "إِلَى الْقَمَرِ", uz: "oyga" },
    { ar: "بِالْمَنْجَنِيقِ", uz: "manjaniq bilan" }
  ],
  full_uz: "Babos, tezroq! U Nolikni manjaniq bilan oyga uloqtiradi.",
  note: null
},

{
  num: 87,
  time: "00:04:44,259 --> 00:04:45,379",
  arabic: "مَاذَا؟",
  segs: null,
  full_uz: "Nima?",
  note: null
},

{
  num: 88,
  time: "00:04:45,379 --> 00:04:49,759",
  arabic: "وَإِنِ الْتَقَيْتَ فِيكْسِيزَ جُدُدًا هُنَاكَ فَمَاذَا أَقُولُ لَهُمْ؟",
  segs: [
    { ar: "وَإِنِ الْتَقَيْتَ", uz: "agar uchrashsang" },
    { ar: "فِيكْسِيزَ جُدُدًا", uz: "yangi fiksiklar bilan" },
    { ar: "هُنَاكَ", uz: "u yerda" },
    { ar: "فَمَاذَا أَقُولُ لَهُمْ", uz: "ularga nima deyman" }
  ],
  full_uz: "Agar u yerda yangi fiksiklar bilan uchrashsang, ularga nima deyman?",
  note: null
},

{
  num: 89,
  time: "00:04:49,759 --> 00:04:52,819",
  arabic: "مَرْحَبًا وَاطْلُبْ إِلَيْهِمْ قَذْفَكَ مُجَدَّدًا",
  segs: [
    { ar: "مَرْحَبًا", uz: "salom" },
    { ar: "وَاطْلُبْ إِلَيْهِمْ", uz: "va ulardan so'ra" },
    { ar: "قَذْفَكَ مُجَدَّدًا", uz: "seni yana uloqtirishni" }
  ],
  full_uz: "Salom de va ulardan seni yana uloqtirishlarini so‘ra.",
  note: null
},

{
  num: 90,
  time: "00:04:52,819 --> 00:04:53,759",
  arabic: "مُسْتَعِدٌّ؟",
  segs: null,
  full_uz: "Tayyormisan?",
  note: null
},

{
  num: 91,
  time: "00:04:53,759 --> 00:04:54,900",
  arabic: "لِنَفْعَلْهَا",
  segs: null,
  full_uz: "Qilaylik.",
  note: null
},

{
  num: 92,
  time: "00:04:54,900 --> 00:05:00,420",
  arabic: "أَطْلِقْ هَيَّا",
  segs: [
    { ar: "أَطْلِقْ", uz: "ot" },
    { ar: "هَيَّا", uz: "qani" }
  ],
  full_uz: "Ot, qani!",
  note: null
},

{
  num: 93,
  time: "00:05:00,420 --> 00:05:03,080",
  arabic: "تَوَقَّفْ لَا",
  segs: [
    { ar: "تَوَقَّفْ", uz: "to'xta" },
    { ar: "لَا", uz: "yo'q" }
  ],
  full_uz: "To‘xta, yo‘q!",
  note: null
},

{
  num: 94,
  time: "00:05:03,080 --> 00:05:06,040",
  arabic: "سِيمْكَا نُولِيك",
  segs: null,
  full_uz: "Simka! Nolik!",
  note: null
},

{
  num: 95,
  time: "00:05:06,040 --> 00:05:07,699",
  arabic: "أَنَا لَنْ أَخْرُجَ",
  segs: [
    { ar: "أَنَا", uz: "men" },
    { ar: "لَنْ أَخْرُجَ", uz: "chiqmayman" }
  ],
  full_uz: "Men chiqmayman.",
  note: null
},

{
  num: 96,
  time: "00:05:07,699 --> 00:05:17,500",
  arabic: "لَقَدْ نَجَوْنَا",
  segs: [
    { ar: "لَقَدْ", uz: "haqiqatan" },
    { ar: "نَجَوْنَا", uz: "omon qoldik" }
  ],
  full_uz: "Biz omon qoldik.",
  note: null
},

{
  num: 97,
  time: "00:05:17,500 --> 00:05:20,159",
  arabic: "مَرْحَى لَقَدْ حَلَّقَ بَعِيدًا",
  segs: [
    { ar: "مَرْحَى", uz: "ura" },
    { ar: "لَقَدْ حَلَّقَ", uz: "u uchdi" },
    { ar: "بَعِيدًا", uz: "uzoqqa" }
  ],
  full_uz: "Ura, u uzoqqa uchdi.",
  note: null
},

{
  num: 98,
  time: "00:05:20,159 --> 00:05:21,560",
  arabic: "مَنْ حَلَّقَ بَعِيدًا؟",
  segs: [
    { ar: "مَنْ", uz: "kim" },
    { ar: "حَلَّقَ بَعِيدًا", uz: "uzoqqa uchdi" }
  ],
  full_uz: "Kim uzoqqa uchdi?",
  note: null
},

{
  num: 99,
  time: "00:05:21,560 --> 00:05:22,300",
  arabic: "إِلَى الْقَنَاةِ؟",
  segs: [
    { ar: "إِلَى الْقَنَاةِ", uz: "kanalga" }
  ],
  full_uz: "Kanalga?",
  note: null
},

{
  num: 100,
  time: "00:05:22,300 --> 00:05:24,860",
  arabic: "لَا إِلَى مَسَافَةٍ قَصِيرَةٍ فَقَطْ",
  segs: [
    { ar: "لَا", uz: "yo'q" },
    { ar: "إِلَى مَسَافَةٍ قَصِيرَةٍ", uz: "qisqa masofaga" },
    { ar: "فَقَطْ", uz: "xolos" }
  ],
  full_uz: "Yo‘q, faqat qisqa masofaga.",
  note: null
},

{
  num: 101,
  time: "00:05:24,860 --> 00:05:31,079",
  arabic: "هَذَا لَيْسَ خَطَأَنَا",
  segs: [
    { ar: "هَذَا", uz: "bu" },
    { ar: "لَيْسَ خَطَأَنَا", uz: "bizning xatomiz emas" }
  ],
  full_uz: "Bu bizning xatomiz emas.",
  note: null
},

{
  num: 102,
  time: "00:05:31,079 --> 00:05:33,120",
  arabic: "أَنْتَ أَثْقَلُ مِنْ نُولِيك بِكَثِيرٍ",
  segs: [
    { ar: "أَنْتَ", uz: "sen" },
    { ar: "أَثْقَلُ مِنْ نُولِيك", uz: "Nolikdan og'irroqsan" },
    { ar: "بِكَثِيرٍ", uz: "ancha" }
  ],
  full_uz: "Sen Nolikdan ancha og‘irsan.",
  note: null
},

{
  num: 103,
  time: "00:05:33,120 --> 00:05:35,199",
  arabic: "فَطَرْتَ مَسَافَةً قَصِيرَةً جِدًّا",
  segs: [
    { ar: "فَطَرْتَ", uz: "shuning uchun uchding" },
    { ar: "مَسَافَةً قَصِيرَةً جِدًّا", uz: "juda qisqa masofaga" }
  ],
  full_uz: "Shuning uchun juda qisqa masofaga uchding.",
  note: null
},

{
  num: 104,
  time: "00:05:35,199 --> 00:05:38,699",
  arabic: "بَابُوس لِنُجَرِّبْهَا مَرَّةً أُخْرَى",
  segs: [
    { ar: "بَابُوس", uz: "Babos" },
    { ar: "لِنُجَرِّبْهَا", uz: "uni sinab ko'raylik" },
    { ar: "مَرَّةً أُخْرَى", uz: "yana bir marta" }
  ],
  full_uz: "Babos, uni yana bir marta sinab ko‘raylik.",
  note: null
},

{
  num: 105,
  time: "00:05:38,699 --> 00:05:40,420",
  arabic: "مَاذَا؟",
  segs: null,
  full_uz: "Nima?",
  note: null
}
];
if (typeof module !== "undefined" && module.exports) {
  module.exports = lessons;
}