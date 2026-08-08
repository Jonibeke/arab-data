const lessons = [
    {
  num: 1,
  time: "00:00:00,000 --> 00:00:06,346",
  arabic: "الْفِيكْسِيزُ يَبْذُلُ جَهْدَهُ",
  segs: [
    { ar: "الْفِيكْسِيزُ", uz: "Fiksiklar" },
    { ar: "يَبْذُلُ", uz: "sarflaydi" },
    { ar: "جَهْدَهُ", uz: "bor kuchini" }
  ],
  full_uz: "Fiksiklar bor kuchini sarflaydi.",
  note: "Qo'shiq matni."
},
{
  num: 2,
  time: "00:00:06,346 --> 00:00:11,161",
  arabic: "وَلِكَيْ يُصْبِحَ خَبِيرًا يَتَعَلَّمُ حَلَّ الْمُشْكِلَاتِ",
  segs: [
    { ar: "وَلِكَيْ", uz: "Shunda" },
    { ar: "يُصْبِحَ خَبِيرًا", uz: "mutaxassis bo'lish uchun" },
    { ar: "يَتَعَلَّمُ", uz: "o'rganadi" },
    { ar: "حَلَّ الْمُشْكِلَاتِ", uz: "muammolarni hal qilishni" }
  ],
  full_uz: "Mutaxassis bo'lish uchun u muammolarni hal qilishni o'rganadi.",
  note: "Qo'shiq matni."
},
{
  num: 3,
  time: "00:00:11,161 --> 00:00:13,097",
  arabic: "لِكَيْ يُتْقِنَهُ أَخِيرًا",
  segs: [
    { ar: "لِكَيْ", uz: "Toki" },
    { ar: "يُتْقِنَهُ", uz: "uni mukammal o'zlashtirsin" },
    { ar: "أَخِيرًا", uz: "oxir-oqibat" }
  ],
  full_uz: "Oxir-oqibat uni mukammal o'zlashtirishi uchun.",
  note: "Qo'shiq matni."
},
{
  num: 4,
  time: "00:00:13,097 --> 00:00:17,083",
  arabic: "لَدَيْهِمْ مِثْلُ مَدَارِسَ لِيَحْصُلَ عِلْمُهُمْ",
  segs: [
    { ar: "لَدَيْهِمْ", uz: "Ularda" },
    { ar: "مِثْلُ مَدَارِسَ", uz: "maktablarga o'xshash joylar bor" },
    { ar: "لِيَحْصُلَ عِلْمُهُمْ", uz: "ilm olishlari uchun" }
  ],
  full_uz: "Ularda ilm olishlari uchun maktablarga o'xshash joylar bor.",
  note: "Qo'shiq matni."
},
{
  num: 5,
  time: "00:00:17,083 --> 00:00:21,604",
  arabic: "مِنْ أَيْنَ أَتَوْا مَا شَكْلُهُمْ مَنْ يَعْرِفُ سِرَّهُمْ",
  segs: [
    { ar: "مِنْ أَيْنَ أَتَوْا", uz: "Qayerdan kelishgan" },
    { ar: "مَا شَكْلُهُمْ", uz: "qanday ko'rinishda ular" },
    { ar: "مَنْ يَعْرِفُ", uz: "kim biladi" },
    { ar: "سِرَّهُمْ", uz: "ularning sirini" }
  ],
  full_uz: "Qayerdan kelishgan, qanday ko'rinishda ular, ularning sirini kim biladi?",
  note: "Qo'shiq matni."
},
{
  num: 6,
  time: "00:00:21,604 --> 00:00:30,665",
  arabic: "مِنْ أَيْنَ أَتَوْا مَا شَكْلُهُمْ مَنْ يَعْرِفُ سِرَّهُمْ",
  segs: [
    { ar: "مِنْ أَيْنَ أَتَوْا", uz: "Qayerdan kelishgan" },
    { ar: "مَا شَكْلُهُمْ", uz: "qanday ko'rinishda ular" },
    { ar: "مَنْ يَعْرِفُ", uz: "kim biladi" },
    { ar: "سِرَّهُمْ", uz: "ularning sirini" }
  ],
  full_uz: "Qayerdan kelishgan, qanday ko'rinishda ular, ularning sirini kim biladi?",
  note: "Qo'shiq matni."
},
{
  num: 7,
  time: "00:00:30,665 --> 00:00:30,665",
  arabic: "مِنْ أَيْنَ أَتَوْا مَا شَكْلُهُمْ مَنْ يَعْرِفُ سِرَّهُمْ",
  segs: [
    { ar: "مِنْ أَيْنَ أَتَوْا", uz: "Qayerdan kelishgan" },
    { ar: "مَا شَكْلُهُمْ", uz: "qanday ko'rinishda ular" },
    { ar: "مَنْ يَعْرِفُ", uz: "kim biladi" },
    { ar: "سِرَّهُمْ", uz: "ularning sirini" }
  ],
  full_uz: "Qayerdan kelishgan, qanday ko'rinishda ular, ularning sirini kim biladi?",
  note: "Qo'shiq matni."
},
{
  num: 8,
  time: "00:00:33,680 --> 00:00:37,280",
  arabic: "الدُّمْيَةُ النَّاطِقَةُ",
  segs: [
    { ar: "الدُّمْيَةُ", uz: "Qo'g'irchoq" },
    { ar: "النَّاطِقَةُ", uz: "gapiradigan" }
  ],
  full_uz: "Gapiradigan qo'g'irchoq.",
  note: "Epizod nomi."
},
{
  num: 9,
  time: "00:00:37,280 --> 00:00:38,780",
  arabic: "مَامَا",
  segs: [
    { ar: "مَامَا", uz: "Oyi" }
  ],
  full_uz: "Oyi.",
  note: null
},
{
  num: 10,
  time: "00:00:38,780 --> 00:00:41,700",
  arabic: "وَالْآنَ تَعْلَمُونَ مَا الَّذِي عَلَيْكُمْ فِعْلُهُ لِإِصْلَاحِهِ",
  segs: [
    { ar: "وَالْآنَ", uz: "Endi" },
    { ar: "تَعْلَمُونَ", uz: "bilasizlar" },
    { ar: "مَا الَّذِي عَلَيْكُمْ فِعْلُهُ", uz: "nima qilishingiz kerakligini" },
    { ar: "لِإِصْلَاحِهِ", uz: "uni tuzatish uchun" }
  ],
  full_uz: "Endi uni tuzatish uchun nima qilishingiz kerakligini bilasizlar.",
  note: null
},
{
  num: 11,
  time: "00:00:41,700 --> 00:00:45,200",
  arabic: "سَيِّدِي، سَيِّدِي",
  segs: [
    { ar: "سَيِّدِي", uz: "Ustozim" },
    { ar: "سَيِّدِي", uz: "ustozim" }
  ],
  full_uz: "Ustozim, ustozim!",
  note: null
},
{
  num: 12,
  time: "00:00:45,200 --> 00:00:47,240",
  arabic: "لَقَدِ انْتَهَى الدَّرْسُ",
  segs: [
    { ar: "لَقَدِ انْتَهَى", uz: "Tugadi" },
    { ar: "الدَّرْسُ", uz: "dars" }
  ],
  full_uz: "Dars tugadi.",
  note: null
},
{
  num: 13,
  time: "00:00:47,240 --> 00:00:50,340",
  arabic: "أَنَا آسِفٌ عَلَى الْإِزْعَاجِ",
  segs: [
    { ar: "أَنَا آسِفٌ", uz: "Kechirasiz" },
    { ar: "عَلَى الْإِزْعَاجِ", uz: "bezovta qilganim uchun" }
  ],
  full_uz: "Bezovta qilganim uchun uzr.",
  note: null
},
{
  num: 14,
  time: "00:00:50,340 --> 00:00:53,460",
  arabic: "لَا مُشْكِلَةَ يَا سَيِّدَ يُوجِينِيُوس، فَقَدِ انْتَهَيْنَا",
  segs: [
    { ar: "لَا مُشْكِلَةَ", uz: "Hechqisi yo'q" },
    { ar: "يَا سَيِّدَ يُوجِينِيُوس", uz: "janob Yujenius" },
    { ar: "فَقَدِ انْتَهَيْنَا", uz: "biz tugatdik" }
  ],
  full_uz: "Hechqisi yo'q, janob Yujenius, biz tugatdik.",
  note: null
},
{
  num: 15,
  time: "00:00:53,460 --> 00:00:56,379",
  arabic: "لَدَيَّ مَسْأَلَةٌ عَاجِلَةٌ، هَلْ تَرَى؟",
  segs: [
    { ar: "لَدَيَّ", uz: "Menda" },
    { ar: "مَسْأَلَةٌ عَاجِلَةٌ", uz: "shoshilinch masala bor" },
    { ar: "هَلْ تَرَى", uz: "ko'ryapsanmi" }
  ],
  full_uz: "Menda shoshilinch masala bor, ko'ryapsanmi?",
  note: null
},
{
  num: 16,
  time: "00:00:56,380 --> 00:00:57,880",
  arabic: "مَامَا",
  segs: [
    { ar: "مَامَا", uz: "Oyi" }
  ],
  full_uz: "Oyi.",
  note: null
},
{
  num: 17,
  time: "00:00:57,880 --> 00:01:00,160",
  arabic: "لَقَدِ اشْتَرَيْتَ دُمْيَةً نَاطِقَةً؟",
  segs: [
    { ar: "لَقَدِ اشْتَرَيْتَ", uz: "Siz sotib oldingizmi" },
    { ar: "دُمْيَةً نَاطِقَةً", uz: "gapiradigan qo'g'irchoqni" }
  ],
  full_uz: "Siz gapiradigan qo'g'irchoq sotib oldingizmi?",
  note: null
},
{
  num: 18,
  time: "00:01:00,160 --> 00:01:02,160",
  arabic: "أَجَلْ، وَتَتَحَدَّثُ بِالْيَابَانِيَّةِ",
  segs: [
    { ar: "أَجَلْ", uz: "Ha" },
    { ar: "وَتَتَحَدَّثُ", uz: "u gapiradi" },
    { ar: "بِالْيَابَانِيَّةِ", uz: "yapon tilida" }
  ],
  full_uz: "Ha, u yapon tilida gapiradi.",
  note: null
},
{
  num: 19,
  time: "00:01:02,160 --> 00:01:04,879",
  arabic: "الْمُشْكِلَةُ فِي جَعْلِهَا تَتَكَلَّمُ لُغَتَنَا",
  segs: [
    { ar: "الْمُشْكِلَةُ", uz: "Muammo" },
    { ar: "فِي جَعْلِهَا", uz: "uni majbur qilishda" },
    { ar: "تَتَكَلَّمُ", uz: "gapirishga" },
    { ar: "لُغَتَنَا", uz: "bizning tilimizda" }
  ],
  full_uz: "Muammo uni bizning tilimizda gapirtirishda.",
  note: null
},
{
  num: 20,
  time: "00:01:04,879 --> 00:01:05,840",
  arabic: "سَنُعَلِّمُهَا",
  segs: null,
  full_uz: "Biz unga o'rgatamiz.",
  note: null
},
{
  num: 21,
  time: "00:01:05,840 --> 00:01:08,260",
  arabic: "إِنَّهُ اخْتِرَاعٌ جَدِيدٌ، أَنَا مُرْتَبِكٌ",
  segs: [
    { ar: "إِنَّهُ", uz: "Bu" },
    { ar: "اخْتِرَاعٌ جَدِيدٌ", uz: "yangi ixtiro" },
    { ar: "أَنَا مُرْتَبِكٌ", uz: "men esa hayronman" }
  ],
  full_uz: "Bu yangi ixtiro, men esa hayronman.",
  note: null
},
{
  num: 22,
  time: "00:01:08,260 --> 00:01:11,200",
  arabic: "لَا تَقْلَقْ أَبَدًا، سَنَجِدُ طَرِيقَةً لِتَعْلِيمِهَا",
  segs: [
    { ar: "لَا تَقْلَقْ أَبَدًا", uz: "Hech xavotir olmang" },
    { ar: "سَنَجِدُ", uz: "biz topamiz" },
    { ar: "طَرِيقَةً", uz: "bir yo'lni" },
    { ar: "لِتَعْلِيمِهَا", uz: "unga o'rgatish uchun" }
  ],
  full_uz: "Hech xavotir olmang, unga o'rgatish yo'lini topamiz.",
  note: null
},
{
  num: 23,
  time: "00:01:11,200 --> 00:01:12,599",
  arabic: "شُكْرًا لَكَ يَا زَمِيلِي",
  segs: [
    { ar: "شُكْرًا لَكَ", uz: "Senga rahmat" },
    { ar: "يَا زَمِيلِي", uz: "hamkasbim" }
  ],
  full_uz: "Rahmat senga, hamkasbim.",
  note: null
},
{
  num: 24,
  time: "00:01:12,599 --> 00:01:14,980",
  arabic: "أَنْتَ دَائِمًا بِجَانِبِي عِنْدَمَا أَطْلُبُكَ",
  segs: [
    { ar: "أَنْتَ دَائِمًا", uz: "Sen doimo" },
    { ar: "بِجَانِبِي", uz: "yonimdasan" },
    { ar: "عِنْدَمَا أَطْلُبُكَ", uz: "chaqirganimda" }
  ],
  full_uz: "Seni chaqirganimda doimo yonimda bo'lasan.",
  note: null
},
{
  num: 25,
  time: "00:01:14,980 --> 00:01:16,379",
  arabic: "مَاذَا أَفْعَلُ لَوْلَا أَنْتَ؟",
  segs: [
    { ar: "مَاذَا أَفْعَلُ", uz: "Nima qilardim" },
    { ar: "لَوْلَا أَنْتَ", uz: "sen bo'lmaganingda" }
  ],
  full_uz: "Sen bo'lmaganingda nima qilardim?",
  note: null
},
{
  num: 26,
  time: "00:01:22,379 --> 00:01:25,560",
  arabic: "سَيِّدِي، كَيْفَ تَتَكَلَّمُ الدُّمَى؟",
  segs: [
    { ar: "سَيِّدِي", uz: "Ustoz" },
    { ar: "كَيْفَ", uz: "qanday" },
    { ar: "تَتَكَلَّمُ", uz: "gapiradi" },
    { ar: "الدُّمَى", uz: "qo'g'irchoqlar" }
  ],
  full_uz: "Ustoz, qo'g'irchoqlar qanday gapiradi?",
  note: null
},
{
  num: 27,
  time: "00:01:25,560 --> 00:01:29,079",
  arabic: "لَيْسَ الْآنَ يَا أَطْفَالُ، سَنَتَحَدَّثُ عَنِ الدُّمْيَةِ غَدًا",
  segs: [
    { ar: "لَيْسَ الْآنَ", uz: "Hozir emas" },
    { ar: "يَا أَطْفَالُ", uz: "bolalar" },
    { ar: "سَنَتَحَدَّثُ", uz: "gaplashamiz" },
    { ar: "عَنِ الدُّمْيَةِ", uz: "qo'g'irchoq haqida" },
    { ar: "غَدًا", uz: "ertaga" }
  ],
  full_uz: "Hozir emas, bolalar. Qo'g'irchoq haqida ertaga gaplashamiz.",
  note: null
},
{
  num: 28,
  time: "00:01:29,079 --> 00:01:30,560",
  arabic: "حَانَ وَقْتُ الِانْصِرَافِ",
  segs: [
    { ar: "حَانَ", uz: "Keldi" },
    { ar: "وَقْتُ", uz: "vaqti" },
    { ar: "الِانْصِرَافِ", uz: "uyga ketishning" }
  ],
  full_uz: "Uyga ketish vaqti keldi.",
  note: null
},
{
  num: 29,
  time: "00:01:31,200 --> 00:01:38,560",
  arabic: "أَنَا أَعْلَمُ كُلَّ شَيْءٍ عَنْ تِلْكَ الدُّمْيَةِ",
  segs: [
    { ar: "أَنَا أَعْلَمُ", uz: "Men bilaman" },
    { ar: "كُلَّ شَيْءٍ", uz: "hamma narsani" },
    { ar: "عَنْ تِلْكَ الدُّمْيَةِ", uz: "o'sha qo'g'irchoq haqida" }
  ],
  full_uz: "Men o'sha qo'g'irchoq haqida hamma narsani bilaman.",
  note: null
},
{
  num: 30,
  time: "00:01:38,560 --> 00:01:39,439",
  arabic: "حَقًّا؟",
  segs: null,
  full_uz: "Rostdanmi?",
  note: null
},
{
  num: 31,
  time: "00:01:39,439 --> 00:01:41,299",
  arabic: "تَغْيِيرُ صَوْتِهَا سَهْلٌ جِدًّا",
  segs: [
    { ar: "تَغْيِيرُ", uz: "O'zgartirish" },
    { ar: "صَوْتِهَا", uz: "uning ovozini" },
    { ar: "سَهْلٌ جِدًّا", uz: "juda oson" }
  ],
  full_uz: "Uning ovozini o'zgartirish juda oson.",
  note: null
},
{
  num: 32,
  time: "00:01:41,299 --> 00:01:43,060",
  arabic: "أَيُّ أَحَدٍ يُمْكِنُهُ فِعْلُ هَذَا",
  segs: [
    { ar: "أَيُّ أَحَدٍ", uz: "Har kim" },
    { ar: "يُمْكِنُهُ", uz: "qila oladi" },
    { ar: "فِعْلُ هَذَا", uz: "buni" }
  ],
  full_uz: "Buni har kim qila oladi.",
  note: null
},
{
  num: 33,
  time: "00:01:43,060 --> 00:01:43,560",
  arabic: "كَيْفَ؟",
  segs:null,
  full_uz: "Qanday?",
  note: null
},
{
  num: 34,
  time: "00:01:43,560 --> 00:01:44,560",
  arabic: "تَعَالَ مَعِي، سَأُرِيكَ",
  segs: [
    { ar: "تَعَالَ مَعِي", uz: "Men bilan yur" },
    { ar: "سَأُرِيكَ", uz: "senga ko'rsataman" }
  ],
  full_uz: "Men bilan yur, senga ko'rsataman.",
  note: null
},
{
  num: 35,
  time: "00:01:44,560 --> 00:01:57,400",
  arabic: "أَوَّلُ دُمْيَةٍ نَاطِقَةٍ كَانَتْ تَعْمَلُ بِاسْتِعْمَالِ مُضَخِّمِ الضَّوْضَاءِ",
  segs: [
    { ar: "أَوَّلُ دُمْيَةٍ نَاطِقَةٍ", uz: "Birinchi gapiradigan qo'g'irchoq" },
    { ar: "كَانَتْ تَعْمَلُ", uz: "ishlagan" },
    { ar: "بِاسْتِعْمَالِ", uz: "foydalanib" },
    { ar: "مُضَخِّمِ الضَّوْضَاءِ", uz: "ovoz kuchaytirgichidan" }
  ],
  full_uz: "Birinchi gapiradigan qo'g'irchoq ovoz kuchaytirgichidan foydalanib ishlagan.",
  note: null
},
{
  num: 36,
  time: "00:01:57,400 --> 00:02:02,140",
  arabic: "عِنْدَمَا تُقْلَبُ الدُّمْيَةُ يَدْفَعُ الْهَوَاءُ فِي مُضَخِّمِ الضَّوْضَاءِ مُحْدِثًا صَرِيرًا",
  segs: [
    { ar: "عِنْدَمَا تُقْلَبُ الدُّمْيَةُ", uz: "Qo'g'irchoq ag'darilganda" },
    { ar: "يَدْفَعُ الْهَوَاءُ", uz: "havo itariladi" },
    { ar: "فِي مُضَخِّمِ الضَّوْضَاءِ", uz: "ovoz kuchaytirgich ichida" },
    { ar: "مُحْدِثًا صَرِيرًا", uz: "g'ichirlagan ovoz chiqarib" }
  ],
  full_uz: "Qo'g'irchoq ag'darilganda havo ovoz kuchaytirgich ichida harakatlanib, g'ichirlagan tovush chiqaradi.",
  note: null
},
{
  num: 37,
  time: "00:02:02,140 --> 00:02:05,700",
  arabic: "وَمُصْدِرًا صَوْتًا يَبْدُو مِثْلَ كَلِمَةِ مَامَا",
  segs: [
    { ar: "وَمُصْدِرًا صَوْتًا", uz: "va ovoz chiqarib" },
    { ar: "يَبْدُو", uz: "u eshitiladi" },
    { ar: "مِثْلَ كَلِمَةِ مَامَا", uz: "\"oyi\" so'ziga o'xshab" }
  ],
  full_uz: "Natijada «oyi» so'ziga o'xshash tovush chiqadi.",
  note: null
},
{
  num: 38,
  time: "00:02:05,700 --> 00:02:07,840",
  arabic: "مُضْحِكٌ",
  segs: null,
  full_uz: "Qiziq ekan.",
  note: null
},
{
  num: 39,
  time: "00:02:07,840 --> 00:02:12,039",
  arabic: "تُسَجَّلُ الْأَصْوَاتُ الْيَوْمَ عَلَى شَرِيحَةٍ إِلِكْتُرُونِيَّةٍ",
  segs: [
    { ar: "تُسَجَّلُ", uz: "Yozib olinadi" },
    { ar: "الْأَصْوَاتُ", uz: "ovozlar" },
    { ar: "الْيَوْمَ", uz: "hozirgi kunda" },
    { ar: "عَلَى شَرِيحَةٍ إِلِكْتُرُونِيَّةٍ", uz: "elektron chipga" }
  ],
  full_uz: "Hozirgi kunda ovozlar elektron chipga yozib olinadi.",
  note: null
},
{
  num: 40,
  time: "00:02:12,039 --> 00:02:15,039",
  arabic: "وَهِيَ جُزْءٌ مِنْ مُشَغِّلٍ صَغِيرٍ دَاخِلَ الدُّمْيَةِ",
  segs: [
    { ar: "وَهِيَ", uz: "U esa" },
    { ar: "جُزْءٌ مِنْ", uz: "bir qismidir" },
    { ar: "مُشَغِّلٍ صَغِيرٍ", uz: "kichik ijro qurilmasining" },
    { ar: "دَاخِلَ الدُّمْيَةِ", uz: "qo'g'irchoq ichidagi" }
  ],
  full_uz: "U qo'g'irchoq ichidagi kichik ijro qurilmasining bir qismidir.",
  note: null
},
{
  num: 41,
  time: "00:02:15,039 --> 00:02:18,419",
  arabic: "اضْغَطِ الزِّرَّ فَقَطْ لِتَسْمَعَ الْأَصْوَاتَ",
  segs: [
    { ar: "اضْغَطْ", uz: "Bos" },
    { ar: "الزِّرَّ", uz: "tugmani" },
    { ar: "فَقَطْ", uz: "xolos" },
    { ar: "لِتَسْمَعَ الْأَصْوَاتَ", uz: "ovozlarni eshitish uchun" }
  ],
  full_uz: "Ovozlarni eshitish uchun tugmani bossang bas.",
  note: null
},
{
  num: 42,
  time: "00:02:18,419 --> 00:02:22,060",
  arabic: "صَارَتِ الدُّمَى تَقُولُ أَشْيَاءَ أَكْثَرَ مِنْ أُمِّي أَوْ أَبِي",
  segs: [
    { ar: "صَارَتِ الدُّمَى", uz: "Qo'g'irchoqlar endi" },
    { ar: "تَقُولُ", uz: "aytadi" },
    { ar: "أَشْيَاءَ أَكْثَرَ", uz: "ko'proq narsalarni" },
    { ar: "مِنْ أُمِّي أَوْ أَبِي", uz: "oyim yoki dadamdan ham" }
  ],
  full_uz: "Qo'g'irchoqlar endi oyim yoki dadamdan ham ko'proq narsalarni aytadi.",
  note: null
},
{
  num: 43,
  time: "00:02:22,060 --> 00:02:31,019",
  arabic: "هَا هِيَ ذِي الشَّرِيحَةُ وَهُنَا يَكُونُ التَّسْجِيلُ الصَّوْتِيُّ لِلدُّمْيَةِ",
  segs: [
    { ar: "هَا هِيَ ذِي", uz: "Mana bu" },
    { ar: "الشَّرِيحَةُ", uz: "chip" },
    { ar: "وَهُنَا", uz: "va mana shu yerda" },
    { ar: "يَكُونُ التَّسْجِيلُ الصَّوْتِيُّ", uz: "ovoz yozuvi joylashgan" },
    { ar: "لِلدُّمْيَةِ", uz: "qo'g'irchoqniki" }
  ],
  full_uz: "Mana bu chip, qo'g'irchoqning ovoz yozuvi mana shu yerda joylashgan.",
  note: null
},
{
  num: 44,
  time: "00:02:31,019 --> 00:02:33,840",
  arabic: "هَذَا رَائِعٌ، هَلْ يُمْكِنُكَ إِعَادَةُ تَسْجِيلِ الصَّوْتِ؟",
  segs: [
    { ar: "هَذَا رَائِعٌ", uz: "Bu ajoyib" },
    { ar: "هَلْ يُمْكِنُكَ", uz: "qila olasanmi" },
    { ar: "إِعَادَةُ تَسْجِيلِ الصَّوْتِ", uz: "ovozni qayta yozishni" }
  ],
  full_uz: "Bu ajoyib. Ovozni qayta yoza olasanmi?",
  note: null
},
{
  num: 45,
  time: "00:02:33,840 --> 00:02:34,539",
  arabic: "بِلَا شَكٍّ",
  segs: null,
  full_uz: "Albatta.",
  note: null
},
{
  num: 46,
  time: "00:02:34,539 --> 00:02:37,219",
  arabic: "حَسَنًا، يَجِبُ أَنْ أَذْهَبَ",
  segs: [
    { ar: "حَسَنًا", uz: "Mayli" },
    { ar: "يَجِبُ", uz: "kerak" },
    { ar: "أَنْ أَذْهَبَ", uz: "ketishim" }
  ],
  full_uz: "Mayli, ketishim kerak.",
  note: null
},
{
  num: 47,
  time: "00:02:37,219 --> 00:02:38,280",
  arabic: "وَدَاعًا",
  segs: null,
  full_uz: "Xayr.",
  note: null
},
{
  num: 48,
  time: "00:02:38,280 --> 00:02:44,240",
  arabic: "هَيْ نُولِيك، لَقَدْ خَطَرَتْ لِي فِكْرَةٌ مُضْحِكَةٌ",
  segs: [
    { ar: "هَيْ نُولِيك", uz: "Hoy, Nolik" },
    { ar: "لَقَدْ خَطَرَتْ لِي", uz: "xayolimga keldi" },
    { ar: "فِكْرَةٌ مُضْحِكَةٌ", uz: "qiziq bir fikr" }
  ],
  full_uz: "Hoy, Nolik, xayolimga qiziq bir fikr keldi.",
  note: null
},
{
  num: 49,
  time: "00:02:44,240 --> 00:02:45,680",
  arabic: "مَا رَأْيُكَ أَنْ",
  segs: [
    { ar: "مَا رَأْيُكَ", uz: "Nima deysan" },
    { ar: "أَنْ", uz: "...ga" }
  ],
  full_uz: "Nima deysan...",
  note: null
},
{
  num: 50,
  time: "00:02:45,680 --> 00:02:47,680",
  arabic: "أَهَانْ",
  segs: null,
  full_uz: "Eh...",
  note: "Gap bo'linib qolgan."
},
{
  num: 51,
  time: "00:02:47,680 --> 00:02:53,280",
  arabic: "وَالْآنَ وَكَمَا وَعَدْتُكُمْ بِالْأَمْسِ",
  segs: [
    { ar: "وَالْآنَ", uz: "Endi" },
    { ar: "وَكَمَا", uz: "va" },
    { ar: "وَعَدْتُكُمْ", uz: "sizlarga va'da qilganimdek" },
    { ar: "بِالْأَمْسِ", uz: "kecha" }
  ],
  full_uz: "Endi, sizlarga kecha va'da qilganimdek.",
  note: null
},
{
  num: 52,
  time: "00:02:53,280 --> 00:02:56,219",
  arabic: "سَوْفَ أُخْبِرُكُمْ بِكُلِّ شَيْءٍ عَنِ الدُّمَى النَّاطِقَةِ",
  segs: [
    { ar: "سَوْفَ أُخْبِرُكُمْ", uz: "sizlarga aytib beraman" },
    { ar: "بِكُلِّ شَيْءٍ", uz: "hamma narsani" },
    { ar: "عَنِ الدُّمَى النَّاطِقَةِ", uz: "gapiradigan qo'g'irchoqlar haqida" }
  ],
  full_uz: "Sizlarga gapiradigan qo'g'irchoqlar haqida hamma narsani aytib beraman.",
  note: null
},
{
  num: 53,
  time: "00:02:56,219 --> 00:02:58,879",
  arabic: "بَعْضُهَا يَتَكَلَّمُ عِنْدَمَا تَهُزُّهَا",
  segs: [
    { ar: "بَعْضُهَا", uz: "Ba'zilari" },
    { ar: "يَتَكَلَّمُ", uz: "gapiradi" },
    { ar: "عِنْدَمَا", uz: "qachonki" },
    { ar: "تَهُزُّهَا", uz: "uni silkitsangiz" }
  ],
  full_uz: "Ba'zi qo'g'irchoqlar silkitilganda gapiradi.",
  note: null
},
{
  num: 54,
  time: "00:02:58,879 --> 00:03:01,539",
  arabic: "وَبَعْضُهَا الْآخَرُ يَسْتَجِيبُ لِلضَّجِيجِ",
  segs: [
    { ar: "وَبَعْضُهَا الْآخَرُ", uz: "Boshqalari esa" },
    { ar: "يَسْتَجِيبُ", uz: "javob beradi" },
    { ar: "لِلضَّجِيجِ", uz: "shovqinga" }
  ],
  full_uz: "Boshqa qo'g'irchoqlar esa shovqinga javob beradi.",
  note: null
},
{
  num: 55,
  time: "00:03:01,539 --> 00:03:05,460",
  arabic: "أَمَّا هَذِهِ الصَّغِيرَةُ فَعَلَيْكَ كَبْسُ الزِّرِّ لِجَعْلِهَا تَتَكَلَّمُ",
  segs: [
    { ar: "أَمَّا هَذِهِ الصَّغِيرَةُ", uz: "Bu kichkinasi esa" },
    { ar: "فَعَلَيْكَ", uz: "sen" },
    { ar: "كَبْسُ الزِّرِّ", uz: "tugmani bosishing kerak" },
    { ar: "لِجَعْلِهَا تَتَكَلَّمُ", uz: "gapirtirish uchun" }
  ],
  full_uz: "Bu kichkina qo'g'irchoqni gapirtirish uchun tugmani bosishing kerak.",
  note: null
},
{
  num: 56,
  time: "00:03:05,460 --> 00:03:06,420",
  arabic: "مَنْ يُجَرِّبُ؟",
  segs: [
    { ar: "مَنْ", uz: "Kim" },
    { ar: "يُجَرِّبُ", uz: "sinab ko'radi" }
  ],
  full_uz: "Kim sinab ko'radi?",
  note: null
},
{
  num: 57,
  time: "00:03:06,420 --> 00:03:06,960",
  arabic: "تُولَا",
  segs: [
    { ar: "تُولَا", uz: "Tula" }
  ],
  full_uz: "Tula.",
  note: null
},
{
  num: 58,
  time: "00:03:06,960 --> 00:03:07,759",
  arabic: "أَنَا؟",
  segs: [
    { ar: "أَنَا", uz: "Menmi?" }
  ],
  full_uz: "Menmi?",
  note: null
},
{
  num: 59,
  time: "00:03:07,759 --> 00:03:09,899",
  arabic: "حَسَنًا، شُكْرًا لَكِ",
  segs: [
    { ar: "حَسَنًا", uz: "Mayli" },
    { ar: "شُكْرًا لَكِ", uz: "senga rahmat" }
  ],
  full_uz: "Mayli, senga rahmat.",
  note: null
},

{
  num: 61,
  time: "00:03:10,659 --> 00:03:14,280",
  arabic: "وَسَتَسْمَعِينَهَا تَقُولُ مَرْحَبًا مَامَا",
  segs: [
    { ar: "وَسَتَسْمَعِينَهَا", uz: "uni eshitasan" },
    { ar: "تَقُولُ", uz: "aytayotganini" },
    { ar: "مَرْحَبًا", uz: "salom" },
    { ar: "مَامَا", uz: "ona" }
  ],
  full_uz: "Uni salom ona deyayotganini eshitasan.",
  note: null
},
{
  num: 62,
  time: "00:03:14,280 --> 00:03:16,979",
  arabic: "وَلَكِنَّهَا بِالْيَابَانِيَّةِ",
  segs: [
    { ar: "وَلَكِنَّهَا", uz: "Ammo u" },
    { ar: "بِالْيَابَانِيَّةِ", uz: "yapon tilida" }
  ],
  full_uz: "Ammo u yapon tilida.",
  note: null
},
{
  num: 63,
  time: "00:03:16,979 --> 00:03:23,000",
  arabic: "تُولَا",
  segs: [
    { ar: "تُولَا", uz: "Tula" }
  ],
  full_uz: "Tula!",
  note: null
},
{
  num: 64,
  time: "00:03:23,000 --> 00:03:27,299",
  arabic: "هَلْ تُولَا تَعْنِي مَرْحَبًا بِالْيَابَانِيَّةِ؟",
  segs: [
    { ar: "هَلْ", uz: "Nahotki" },
    { ar: "تُولَا", uz: "Tula" },
    { ar: "تَعْنِي", uz: "ma'nosini bildirsa" },
    { ar: "مَرْحَبًا", uz: "salom" },
    { ar: "بِالْيَابَانِيَّةِ", uz: "yapon tilida" }
  ],
  full_uz: "Nahotki Tula yapon tilida salom degani bo'lsa?",
  note: null
},
{
  num: 65,
  time: "00:03:27,299 --> 00:03:28,259",
  arabic: "تُولَا",
  segs: [
    { ar: "تُولَا", uz: "Tula" }
  ],
  full_uz: "Tula!",
  note: null
},
{
  num: 66,
  time: "00:03:28,259 --> 00:03:31,759",
  arabic: "لِمَاذَا تُخْفِينَ مِصْبَاحًا فِي حَقِيبَةِ أَدَوَاتِكِ؟",
  segs: [
    { ar: "لِمَاذَا", uz: "Nega" },
    { ar: "تُخْفِينَ", uz: "yashiryapsan" },
    { ar: "مِصْبَاحًا", uz: "fonarni" },
    { ar: "فِي حَقِيبَةِ أَدَوَاتِكِ", uz: "asboblar sumkangda" }
  ],
  full_uz: "Nega asboblar sumkangda fonar yashiryapsan?",
  note: null
},
{
  num: 67,
  time: "00:03:34,979 --> 00:03:37,739",
  arabic: "كَيْفَ أَمْكَنَكِ مَعْرِفَةُ ذَلِكَ؟",
  segs: [
    { ar: "كَيْفَ", uz: "Qanday qilib" },
    { ar: "أَمْكَنَكِ", uz: "bilding" },
    { ar: "مَعْرِفَةُ ذَلِكَ", uz: "buni" }
  ],
  full_uz: "Buni qanday bilding?",
  note: null
},
{
  num: 68,
  time: "00:03:37,740 --> 00:03:39,740",
  arabic: "هَلْ تَخْشَيْنَ الظَّلَامَ؟",
  segs: [
    { ar: "هَلْ", uz: "Nahotki" },
    { ar: "تَخْشَيْنَ", uz: "qo'rqsang" },
    { ar: "الظَّلَامَ", uz: "qorong'ilikdan" }
  ],
  full_uz: "Nahotki qorong'ilikdan qo'rqsang?",
  note: null
},
{
  num: 69,
  time: "00:03:39,740 --> 00:03:42,740",
  arabic: "هَذِهِ الدُّمْيَةُ تَعْرِفُ أَسْرَارِي",
  segs: [
    { ar: "هَذِهِ الدُّمْيَةُ", uz: "Bu qo'g'irchoq" },
    { ar: "تَعْرِفُ", uz: "biladi" },
    { ar: "أَسْرَارِي", uz: "sirlarimni" }
  ],
  full_uz: "Bu qo'g'irchoq sirlarimni biladi.",
  note: null
},
{
  num: 70,
  time: "00:03:42,740 --> 00:03:44,740",
  arabic: "يُسَمُّونَ ذَلِكَ مِزَاحًا",
  segs: [
    { ar: "يُسَمُّونَ", uz: "Buni atashadi" },
    { ar: "ذَلِكَ", uz: "shuni" },
    { ar: "مِزَاحًا", uz: "hazil" }
  ],
  full_uz: "Buni hazil deyishadi.",
  note: null
},
{
  num: 71,
  time: "00:03:44,740 --> 00:03:47,740",
  arabic: "لَقَدْ خَطَرَتْ لِي فِكْرَةٌ أَفْضَلُ مِنْ هَذِهِ",
  segs: [
    { ar: "لَقَدْ خَطَرَتْ لِي", uz: "Xayolimga keldi" },
    { ar: "فِكْرَةٌ أَفْضَلُ", uz: "bundan yaxshiroq fikr" },
    { ar: "مِنْ هَذِهِ", uz: "bundan" }
  ],
  full_uz: "Bundan ham yaxshiroq fikr xayolimga keldi.",
  note: null
},
{
  num: 72,
  time: "00:03:47,740 --> 00:03:48,740",
  arabic: "أَجَلْ",
  segs: null,
  full_uz: "Ha.",
  note: null
},
{
  num: 73,
  time: "00:03:49,740 --> 00:03:50,740",
  arabic: "مَاذَا؟",
  segs: null,
  full_uz: "Nima?",
  note: null
},
{
  num: 74,
  time: "00:03:53,740 --> 00:03:56,740",
  arabic: "تُولَا لَا تَبْكِي إِنَّهَا لَا تَعْرِفُ شَيْئًا",
  segs: [
    { ar: "تُولَا", uz: "Tula" },
    { ar: "لَا تَبْكِي", uz: "yig'lama" },
    { ar: "إِنَّهَا", uz: "u" },
    { ar: "لَا تَعْرِفُ شَيْئًا", uz: "hech narsani bilmaydi" }
  ],
  full_uz: "Tula, yig'lama. U hech narsani bilmaydi.",
  note: null
},
{
  num: 75,
  time: "00:03:56,740 --> 00:03:57,740",
  arabic: "بَلْ تَعْرِفُ",
  segs: [
    { ar: "بَلْ", uz: "Yo'q" },
    { ar: "تَعْرِفُ", uz: "biladi" }
  ],
  full_uz: "Yo'q, biladi.",
  note: null
},
{
  num: 76,
  time: "00:03:57,740 --> 00:04:01,740",
  arabic: "أَظُنُّ أَنَّ مَنْ قَامَ بِهَذَا هُمَا فَايَرُ وَنُولِكْ",
  segs: [
    { ar: "أَظُنُّ", uz: "Menimcha" },
    { ar: "أَنَّ مَنْ قَامَ بِهَذَا", uz: "buni qilganlar" },
    { ar: "هُمَا", uz: "ikkalasi" },
    { ar: "فَايَرُ وَنُولِكْ", uz: "Fayer va Nolik" }
  ],
  full_uz: "Menimcha, buni Fayer va Nolik qilishgan.",
  note: null
},
{
  num: 77,
  time: "00:04:01,740 --> 00:04:05,740",
  arabic: "صَحِيحٌ وَلَكِنِ الْآنَ سَنَقْلِبُ الْمِزْحَةَ عَلَيْهِمَا",
  segs: [
    { ar: "صَحِيحٌ", uz: "To'g'ri" },
    { ar: "وَلَكِنِ الْآنَ", uz: "ammo endi" },
    { ar: "سَنَقْلِبُ الْمِزْحَةَ", uz: "hazilni teskarisiga qilamiz" },
    { ar: "عَلَيْهِمَا", uz: "ularga" }
  ],
  full_uz: "To'g'ri, ammo endi hazilni ularning o'ziga qilamiz.",
  note: null
},
{
  num: 78,
  time: "00:04:05,740 --> 00:04:06,740",
  arabic: "كَيْفَ؟",
  segs: null,
  full_uz: "Qanday?",
  note: null
},
{
  num: 79,
  time: "00:04:07,740 --> 00:04:14,820",
  arabic: "إِنَّ أَذْكَى فِيكْسِي فِي صَفِّنَا هُوَ دِيجِيتْ",
  segs: [
    { ar: "إِنَّ", uz: "Albatta" },
    { ar: "أَذْكَى فِيكْسِي", uz: "eng aqlli Fiksi" },
    { ar: "فِي صَفِّنَا", uz: "sinfimizdagi" },
    { ar: "هُوَ دِيجِيتْ", uz: "Digitdir" }
  ],
  full_uz: "Sinfimizdagi eng aqlli Fiksi Digitdir.",
  note: null
},
{
  num: 80,
  time: "00:04:14,820 --> 00:04:19,100",
  arabic: "أَظُنُّ أَحْيَانًا أَنَّهُ يَعْرِفُ كُلَّ شَيْءٍ عَنْ كُلِّ شَيْءٍ",
  segs: [
    { ar: "أَظُنُّ أَحْيَانًا", uz: "Ba'zan menimcha" },
    { ar: "أَنَّهُ", uz: "u" },
    { ar: "يَعْرِفُ كُلَّ شَيْءٍ", uz: "hamma narsani biladi" },
    { ar: "عَنْ كُلِّ شَيْءٍ", uz: "har bir narsa haqida" }
  ],
  full_uz: "Ba'zan menimcha, u har bir narsa haqida hamma narsani biladi.",
  note: null
},
{
  num: 81,
  time: "00:04:19,100 --> 00:04:22,100",
  arabic: "يَحْتَرِمُهُ الْعَلَّامَةُ جْرَانْدْ بُوسْ كَثِيرًا",
  segs: [
    { ar: "يَحْتَرِمُهُ", uz: "uni hurmat qiladi" },
    { ar: "الْعَلَّامَةُ جْرَانْدْ بُوسْ", uz: "Ustoz Grand Boss" },
    { ar: "كَثِيرًا", uz: "juda" }
  ],
  full_uz: "Ustoz Grand Boss uni juda hurmat qiladi.",
  note: null
},
{
  num: 82,
  time: "00:04:22,100 --> 00:04:24,500",
  arabic: "هُوَ دَائِمًا يُفَكِّرُ فِي أَيِّ وَقْتٍ تَرَى",
  segs: [
    { ar: "هُوَ دَائِمًا", uz: "U doimo" },
    { ar: "يُفَكِّرُ", uz: "o'ylaydi" },
    { ar: "فِي أَيِّ وَقْتٍ", uz: "har qanday vaqtda" },
    { ar: "تَرَى", uz: "bilasan-ku" }
  ],
  full_uz: "Bilasan-ku, u har doim o'ylab yuradi.",
  note: null
},
{
  num: 83,
  time: "00:04:24,500 --> 00:04:27,100",
  arabic: "وَلَا يُحِبُّ أَنْ يُضِيعَ أَحَدٌ وَقْتَهُ",
  segs: [
    { ar: "وَلَا يُحِبُّ", uz: "va yoqtirmaydi" },
    { ar: "أَنْ يُضِيعَ", uz: "bekorga sarflashni" },
    { ar: "أَحَدٌ وَقْتَهُ", uz: "kimningdir vaqtini" }
  ],
  full_uz: "Va hech kim vaqtini bekorga sarflashini yoqtirmaydi.",
  note: null
},
{
  num: 84,
  time: "00:04:27,100 --> 00:04:30,540",
  arabic: "إِنَّهُ لَا يَمْلِكُ الْوَقْتَ لِلَّهْوِ مَعَ الْأَوْلَادِ الْآخَرِينَ",
  segs: [
    { ar: "إِنَّهُ", uz: "U" },
    { ar: "لَا يَمْلِكُ الْوَقْتَ", uz: "vaqti yo'q" },
    { ar: "لِلَّهْوِ", uz: "o'ynashga" },
    { ar: "مَعَ الْأَوْلَادِ الْآخَرِينَ", uz: "boshqa bolalar bilan" }
  ],
  full_uz: "Uning boshqa bolalar bilan o'ynashga vaqti yo'q.",
  note: null
},
{
  num: 85,
  time: "00:04:30,540 --> 00:04:34,600",
  arabic: "يُفَضِّلُ دِيجِيتْ أَنْ يَحُلَّ مُشْكِلَاتِهِ بِاسْتِعْمَالِ دِمَاغِهِ",
  segs: [
    { ar: "يُفَضِّلُ دِيجِيتْ", uz: "Digit afzal ko'radi" },
    { ar: "أَنْ يَحُلَّ مُشْكِلَاتِهِ", uz: "muammolarini hal qilishni" },
    { ar: "بِاسْتِعْمَالِ دِمَاغِهِ", uz: "miyasidan foydalanib" }
  ],
  full_uz: "Digit muammolarini miyasidan foydalanib hal qilishni afzal ko'radi.",
  note: null
},
{
  num: 86,
  time: "00:04:34,600 --> 00:04:36,040",
  arabic: "وَلَيْسَ عَضَلَاتِهِ",
  segs: [
    { ar: "وَلَيْسَ", uz: "emas" },
    { ar: "عَضَلَاتِهِ", uz: "mushaklari bilan" }
  ],
  full_uz: "Mushaklari bilan emas.",
  note: null
},
{
  num: 87,
  time: "00:04:36,040 --> 00:04:38,960",
  arabic: "وَلِهَذَا يُوَاجِهُ صُعُوبَةً فِي دَرْسِ الرِّيَاضَةِ",
  segs: [
    { ar: "وَلِهَذَا", uz: "Shuning uchun" },
    { ar: "يُوَاجِهُ صُعُوبَةً", uz: "qiynaladi" },
    { ar: "فِي دَرْسِ الرِّيَاضَةِ", uz: "jismoniy tarbiya darsida" }
  ],
  full_uz: "Shuning uchun u jismoniy tarbiya darsida qiynaladi.",
  note: null
},
{
  num: 88,
  time: "00:04:38,960 --> 00:04:41,640",
  arabic: "وَلِشِدَّةِ لُطْفِهِ تَرْغَبُ فِي مُسَاعَدَتِهِ",
  segs: [
    { ar: "وَلِشِدَّةِ لُطْفِهِ", uz: "Juda muloyimligi sababli" },
    { ar: "تَرْغَبُ", uz: "xohlaysan" },
    { ar: "فِي مُسَاعَدَتِهِ", uz: "unga yordam berishni" }
  ],
  full_uz: "Juda muloyimligi sababli unga yordam berging keladi.",
  note: null
},
{
  num: 89,
  time: "00:04:41,640 --> 00:04:43,280",
  arabic: "وَلِلْأَمَانَةِ",
  segs: null,
  full_uz: "To'g'risini aytganda.",
  note: null
},
{
  num: 90,
  time: "00:04:43,280 --> 00:04:46,300",
  arabic: "لَيْسَ جَيِّدًا دَائِمًا فِي إِصْلَاحِ الْأَشْيَاءِ بِيَدَيْهِ",
  segs: [
    { ar: "لَيْسَ جَيِّدًا دَائِمًا", uz: "har doim ham usta emas" },
    { ar: "فِي إِصْلَاحِ الْأَشْيَاءِ", uz: "narsalarni tuzatishda" },
    { ar: "بِيَدَيْهِ", uz: "o'z qo'llari bilan" }
  ],
  full_uz: "U har doim ham narsalarni o'z qo'llari bilan tuzatishda usta emas.",
  note: null
},
{
  num: 91,
  time: "00:04:46,300 --> 00:04:50,140",
  arabic: "وَلَكِنْ لَا أَحَدَ يَفْهَمُ الْآلِيَّةَ أَكْثَرَ مِنْهُ",
  segs: [
    { ar: "وَلَكِنْ", uz: "Lekin" },
    { ar: "لَا أَحَدَ", uz: "hech kim" },
    { ar: "يَفْهَمُ الْآلِيَّةَ", uz: "mexanizmni tushunmaydi" },
    { ar: "أَكْثَرَ مِنْهُ", uz: "undan ko'ra yaxshiroq" }
  ],
  full_uz: "Lekin mexanizmni undan yaxshiroq tushunadigan hech kim yo'q.",
  note: null
},
{
  num: 92,
  time: "00:04:50,140 --> 00:04:55,280",
  arabic: "فَإِنْ تَعَطَّلَ شَيْءٌ فَإِنَّهُ بِسُرْعَةٍ وَدِقَّةٍ يَسْتَطِيعُ مَعْرِفَةَ ذَلِكَ الْعُطْلِ",
  segs: [
    { ar: "فَإِنْ تَعَطَّلَ شَيْءٌ", uz: "Agar biror narsa buzilib qolsa" },
    { ar: "فَإِنَّهُ", uz: "u" },
    { ar: "بِسُرْعَةٍ وَدِقَّةٍ", uz: "tez va aniq" },
    { ar: "يَسْتَطِيعُ مَعْرِفَةَ ذَلِكَ الْعُطْلِ", uz: "nosozlikni aniqlay oladi" }
  ],
  full_uz: "Agar biror narsa buzilib qolsa, u nosozlikni tez va aniq aniqlay oladi.",
  note: null
},
{
  num: 93,
  time: "00:04:55,280 --> 00:04:57,240",
  arabic: "وَيَسْتَطِيعُ إِصْلَاحَهُ أَيْضًا",
  segs: [
    { ar: "وَيَسْتَطِيعُ", uz: "va u qodir" },
    { ar: "إِصْلَاحَهُ", uz: "uni tuzatishga" },
    { ar: "أَيْضًا", uz: "ham" }
  ],
  full_uz: "Uni tuzata ham oladi.",
  note: null
},
{
  num: 94,
  time: "00:04:57,240 --> 00:05:06,180",
  arabic: "سَنَجْعَلُ الْأَمْرَ مُضْحِكًا أَكْثَرَ هَذِهِ الْمَرَّةِ",
  segs: [
    { ar: "سَنَجْعَلُ", uz: "Qilamiz" },
    { ar: "الْأَمْرَ", uz: "ishni" },
    { ar: "مُضْحِكًا أَكْثَرَ", uz: "yanada kulgili" },
    { ar: "هَذِهِ الْمَرَّةِ", uz: "bu safar" }
  ],
  full_uz: "Bu safar ishni yanada kulgili qilamiz.",
  note: null
},
{
  num: 95,
  time: "00:05:06,180 --> 00:05:09,939",
  arabic: "هَلْ عُدْتُمَا؟",
  segs: [
    { ar: "هَلْ", uz: "Nahotki" },
    { ar: "عُدْتُمَا", uz: "qaytdinglar" }
  ],
  full_uz: "Qaytdinglarmi?",
  note: null
},
{
  num: 96,
  time: "00:05:09,939 --> 00:05:11,100",
  arabic: "أَتَسْمَعُ مَا أَسْمَعُ؟",
  segs: [
    { ar: "أَتَسْمَعُ", uz: "Eshityapsanmi" },
    { ar: "مَا أَسْمَعُ", uz: "men eshitayotgan narsani" }
  ],
  full_uz: "Men eshitayotgan narsani sen ham eshityapsanmi?",
  note: null
},
{
  num: 97,
  time: "00:05:11,100 --> 00:05:12,019",
  arabic: "أَيُّهَا الْمُشَاغِبَانِ",
  segs: [
    { ar: "أَيُّهَا", uz: "Ey" },
    { ar: "الْمُشَاغِبَانِ", uz: "ikki bezori" }
  ],
  full_uz: "Ey ikki bezori!",
  note: null
},
{
  num: 98,
  time: "00:05:12,019 --> 00:05:18,280",
  arabic: "سَأُرِيكُمَا الْآنَ مَاذَا يَحْدُثُ لِلصِّبْيَانِ السَّيِّئِينَ الَّذِينَ يَجْرَحُونَ شُعُورَ الْفَتَيَاتِ",
  segs: [
    { ar: "سَأُرِيكُمَا الْآنَ", uz: "Endi sizlarga ko'rsataman" },
    { ar: "مَاذَا يَحْدُثُ", uz: "nima bo'lishini" },
    { ar: "لِلصِّبْيَانِ السَّيِّئِينَ", uz: "yomon bolalarga" },
    { ar: "الَّذِينَ يَجْرَحُونَ شُعُورَ الْفَتَيَاتِ", uz: "qizlarning ko'nglini og'ritadigan" }
  ],
  full_uz: "Endi qizlarning ko'nglini og'ritadigan yomon bolalarga nima bo'lishini ko'rsataman.",
  note: null
},
{
  num: 99,
  time: "00:05:18,280 --> 00:05:22,280",
  arabic: "لَقَدْ خِفْتُمَا",
  segs: [
    { ar: "لَقَدْ", uz: "Axir" },
    { ar: "خِفْتُمَا", uz: "qo'rqib ketdinglar" }
  ],
  full_uz: "Qo'rqib ketdinglar.",
  note: null
},
{
  num: 100,
  time: "00:05:22,280 --> 00:05:25,879",
  arabic: "مَنْ يَبْكِي الْآنَ؟",
  segs: [
    { ar: "مَنْ", uz: "Kim" },
    { ar: "يَبْكِي", uz: "yig'layapti" },
    { ar: "الْآنَ", uz: "endi" }
  ],
  full_uz: "Endi kim yig'layapti?",
  note: null
},
{
  num: 101,
  time: "00:05:25,879 --> 00:05:29,159",
  arabic: "يُرَجَّحُ أَنَّهُمَا ظَنَّا أَنَّ الدُّمْيَةَ سَتَقْضِي عَلَيْهِمَا",
  segs: [
    { ar: "يُرَجَّحُ", uz: "Chamasi" },
    { ar: "أَنَّهُمَا ظَنَّا", uz: "ular o'ylashdi" },
    { ar: "أَنَّ الدُّمْيَةَ", uz: "qo'g'irchoq" },
    { ar: "سَتَقْضِي عَلَيْهِمَا", uz: "ularni jazolaydi" }
  ],
  full_uz: "Chamasi ular qo'g'irchoq o'zlarini jazolaydi deb o'ylashdi.",
  note: null
},
{
  num: 102,
  time: "00:05:29,159 --> 00:05:30,659",
  arabic: "هَلْ تَعْلَمُ يَا دِيجِيتْ؟",
  segs: [
    { ar: "هَلْ تَعْلَمُ", uz: "Bilasanmi" },
    { ar: "يَا دِيجِيتْ", uz: "Digit" }
  ],
  full_uz: "Bilasanmi, Digit?",
  note: null
},
{
  num: 103,
  time: "00:05:30,659 --> 00:05:34,459",
  arabic: "بَدَأْتُ أَرَى أَنَّ الْأَفْضَلَ لَوْ كَانَتْ تَعْلَمُ كُلَّ شَيْءٍ حَقًّا",
  segs: [
    { ar: "بَدَأْتُ أَرَى", uz: "Endi tushunyapman" },
    { ar: "أَنَّ الْأَفْضَلَ", uz: "eng yaxshisi" },
    { ar: "لَوْ كَانَتْ", uz: "agar u" },
    { ar: "تَعْلَمُ كُلَّ شَيْءٍ", uz: "hamma narsani bilsa" },
    { ar: "حَقًّا", uz: "rostdan ham" }
  ],
  full_uz: "Endi tushunyapman, rostdan ham hamma narsani bilsa yaxshi bo'lardi.",
  note: null
},
{
  num: 104,
  time: "00:05:34,459 --> 00:05:36,879",
  arabic: "هَلْ تَعْلَمِينَ يَا تُولَا؟ لَا شَيْءَ يُرْضِيكِ",
  segs: [
    { ar: "هَلْ تَعْلَمِينَ", uz: "Bilasanmi" },
    { ar: "يَا تُولَا", uz: "Tula" },
    { ar: "لَا شَيْءَ", uz: "hech narsa" },
    { ar: "يُرْضِيكِ", uz: "seni rozi qilmaydi" }
  ],
  full_uz: "Bilasanmi, Tula? Hech narsa seni rozi qilmaydi.",
  note: null
}
];
if (typeof module !== "undefined" && module.exports) {
  module.exports = lessons;
}