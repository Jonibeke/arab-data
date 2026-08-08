const lessons = [
{
  num: 1,
  time: "00:00:00,000 --> 00:00:06,600",
  arabic: "رَأَيْتُ أَحَدَهُمْ مَرَّ بِي",
  segs: [
    { ar: "رَأَيْتُ", uz: "Men ko'rdim" },
    { ar: "أَحَدَهُمْ", uz: "ulardan birini" },
    { ar: "مَرَّ بِي", uz: "yonimdan o'tib ketdi" }
  ],
  full_uz: "Ulardan birini yonimdan o'tib ketayotganini ko'rdim.",
  note: "Qo‘shiq matni."
},
{
  num: 2,
  time: "00:00:06,600 --> 00:00:08,460",
  arabic: "لَمَحْتُهُ وَلِلَحَظَاتٍ",
  segs: [
    { ar: "لَمَحْتُهُ", uz: "Uni ko'z qirim bilan ko'rdim" },
    { ar: "وَلِلَحَظَاتٍ", uz: "atigi bir necha lahzaga" }
  ],
  full_uz: "Uni atigi bir necha lahzaga ko'rdim.",
  note: "Qo‘shiq matni."
},
{
  num: 3,
  time: "00:00:08,460 --> 00:00:10,900",
  arabic: "وَلَوْ أَنِّي قُلْتُ لِأَبِي",
  segs: [
    { ar: "وَلَوْ أَنِّي", uz: "Agar men" },
    { ar: "قُلْتُ لِأَبِي", uz: "otamga aytsam" }
  ],
  full_uz: "Agar men otamga aytsam.",
  note: "Qo‘shiq matni."
},
{
  num: 4,
  time: "00:00:10,900 --> 00:00:13,179",
  arabic: "لَقَالَ: تَخَيُّلَاتٌ",
  segs: [
    { ar: "لَقَالَ", uz: "u aytardi" },
    { ar: "تَخَيُّلَاتٌ", uz: "bu xayollar, deb" }
  ],
  full_uz: "U: «Bu xayollar», der edi.",
  note: "Qo‘shiq matni."
},
{
  num: 5,
  time: "00:00:13,179 --> 00:00:15,179",
  arabic: "فَحَتْمًا لَنْ تُبْصِرَهُمْ",
  segs: [
    { ar: "فَحَتْمًا", uz: "Albatta" },
    { ar: "لَنْ تُبْصِرَهُمْ", uz: "ularni ko'ra olmaysan" }
  ],
  full_uz: "Albatta ularni ko'ra olmaysan.",
  note: "Qo‘shiq matni."
},
{
  num: 6,
  time: "00:00:15,179 --> 00:00:17,059",
  arabic: "بَلْ سَتَرَى فِعْلَهُمْ",
  segs: [
    { ar: "بَلْ", uz: "Balki" },
    { ar: "سَتَرَى فِعْلَهُمْ", uz: "ularning qilgan ishlarini ko'rasan" }
  ],
  full_uz: "Balki ularning qilgan ishlarini ko'rasan.",
  note: "Qo‘shiq matni."
},
{
  num: 7,
  time: "00:00:17,059 --> 00:00:19,760",
  arabic: "مِنْ أَيْنَ أَتَوْا؟ مَا شَكْلُهُمْ؟",
  segs: [
    { ar: "مِنْ أَيْنَ أَتَوْا؟", uz: "Qayerdan kelishgan?" },
    { ar: "مَا شَكْلُهُمْ؟", uz: "Ular qanday ko'rinishda?" }
  ],
  full_uz: "Qayerdan kelishgan? Ular qanday ko'rinishda?",
  note: "Qo‘shiq matni."
},
{
  num: 8,
  time: "00:00:19,760 --> 00:00:21,400",
  arabic: "مَنْ يَعْرِفُ سِرَّهُمْ؟",
  segs: null,
  full_uz: "Ularning sirini kim biladi?",
  note: "Qo‘shiq matni."
},
{
  num: 9,
  time: "00:00:21,400 --> 00:00:24,179",
  arabic: "مِنْ أَيْنَ أَتَوْا؟ مَا شَكْلُهُمْ؟",
  segs: [
    { ar: "مِنْ أَيْنَ أَتَوْا؟", uz: "Qayerdan kelishgan?" },
    { ar: "مَا شَكْلُهُمْ؟", uz: "Ular qanday ko'rinishda?" }
  ],
  full_uz: "Qayerdan kelishgan? Ular qanday ko'rinishda?",
  note: "Qo‘shiq matni."
},
{
  num: 10,
  time: "00:00:24,179 --> 00:00:25,800",
  arabic: "مَنْ يَعْرِفُ سِرَّهُمْ؟",
  segs: null,
  full_uz: "Ularning sirini kim biladi?",
  note: "Qo‘shiq matni."
},
{
  num: 11,
  time: "00:00:25,800 --> 00:00:28,620",
  arabic: "مِنْ أَيْنَ أَتَوْا؟ مَا شَكْلُهُمْ؟",
  segs: [
    { ar: "مِنْ أَيْنَ أَتَوْا؟", uz: "Qayerdan kelishgan?" },
    { ar: "مَا شَكْلُهُمْ؟", uz: "Ular qanday ko'rinishda?" }
  ],
  full_uz: "Qayerdan kelishgan? Ular qanday ko'rinishda?",
  note: "Qo‘shiq matni."
},
{
  num: 12,
  time: "00:00:28,620 --> 00:00:30,300",
  arabic: "مَنْ يَعْرِفُ سِرَّهُمْ؟",
  segs: null,
  full_uz: "Ularning sirini kim biladi?",
  note: "Qo‘shiq matni."
},
{
  num: 13,
  time: "00:00:30,300 --> 00:00:35,240",
  arabic: "الِاخْتِفَاءُ",
  segs: null,
  full_uz: "Yashirinish.",
  note: null
},
{
  num: 14,
  time: "00:00:35,240 --> 00:00:39,320",
  arabic: "جَيِّدٌ",
  segs: null,
  full_uz: "Yaxshi.",
  note: null
},
{
  num: 15,
  time: "00:00:39,320 --> 00:00:41,500",
  arabic: "تُومْ، مَا هَذَا؟",
  segs: [
    { ar: "تُومْ", uz: "Tom" },
    { ar: "مَا هَذَا؟", uz: "Bu nima?" }
  ],
  full_uz: "Tom, bu nima?",
  note: null
},
{
  num: 16,
  time: "00:00:41,500 --> 00:00:43,480",
  arabic: "لِمَ حَوْضُ الْأَسْمَاكِ الثَّانِي؟",
  segs: [
    { ar: "لِمَ", uz: "Nega" },
    { ar: "حَوْضُ الْأَسْمَاكِ الثَّانِي؟", uz: "ikkinchi akvarium bor?" }
  ],
  full_uz: "Nega ikkinchi akvarium bor?",
  note: null
},
{
  num: 17,
  time: "00:00:43,480 --> 00:00:45,280",
  arabic: "وَلَا سِيَّمَا أَنَّهُ بِلَا أَسْمَاكٍ؟",
  segs: [
    { ar: "وَلَا سِيَّمَا", uz: "Ayniqsa" },
    { ar: "أَنَّهُ بِلَا أَسْمَاكٍ؟", uz: "unda baliqlar ham yo'q-ku?" }
  ],
  full_uz: "Ayniqsa unda baliqlar ham yo'q-ku?",
  note: null
},
{
  num: 18,
  time: "00:00:45,280 --> 00:00:47,140",
  arabic: "أَوَّلًا، إِنَّهُ حَوْضُ زَوَاحِفَ",
  segs: [
    { ar: "أَوَّلًا", uz: "Birinchidan" },
    { ar: "إِنَّهُ حَوْضُ زَوَاحِفَ", uz: "bu sudralib yuruvchilar uchun terrarium" }
  ],
  full_uz: "Birinchidan, bu sudralib yuruvchilar uchun terrarium.",
  note: "«حوض زواحف» — terrarium ma'nosida."
},
{
  num: 19,
  time: "00:00:47,140 --> 00:00:50,380",
  arabic: "وَلَيْسَ لِلسَّمَكِ، بَلْ لِلْعَظَايَا وَالثَّعَابِينِ",
  segs: [
    { ar: "وَلَيْسَ لِلسَّمَكِ", uz: "U baliqlar uchun emas" },
    { ar: "بَلْ لِلْعَظَايَا وَالثَّعَابِينِ", uz: "balki kaltakesaklar va ilonlar uchun" }
  ],
  full_uz: "U baliqlar uchun emas, balki kaltakesaklar va ilonlar uchun.",
  note: "«العظايا» — kaltakesaklar guruhi."
},
{
  num: 20,
  time: "00:00:50,380 --> 00:00:54,180",
  arabic: "طَلَبَتْ إِلَيَّ كَاتْيَا أَنْ أَعْتَنِيَ بِهَا مُدَّةَ غِيَابِهَا",
  segs: [
    { ar: "طَلَبَتْ إِلَيَّ كَاتْيَا", uz: "Katya mendan so'radi" },
    { ar: "أَنْ أَعْتَنِيَ بِهَا", uz: "unga qarab turishimni" },
    { ar: "مُدَّةَ غِيَابِهَا", uz: "u yo'qligida" }
  ],
  full_uz: "Katya mendan u yo'qligida unga qarab turishimni so'radi.",
  note: null
},
{
  num: 21,
  time: "00:00:54,180 --> 00:00:55,500",
  arabic: "وَلِذَلِكَ أَحْضَرْتُهَا",
  segs: [
    { ar: "وَلِذَلِكَ", uz: "Shuning uchun" },
    { ar: "أَحْضَرْتُهَا", uz: "uni olib keldim" }
  ],
  full_uz: "Shuning uchun uni olib keldim.",
  note: null
},
{
  num: 22,
  time: "00:00:55,500 --> 00:00:57,380",
  arabic: "مَاذَا تَقْصِدُ؟",
  segs: null,
  full_uz: "Nimani nazarda tutyapsan?",
  note: null
},
{
  num: 23,
  time: "00:00:57,380 --> 00:00:58,380",
  arabic: "مَا مِنْ أَحَدٍ هُنَا؟",
  segs: [
    { ar: "مَا مِنْ أَحَدٍ", uz: "Bu yerda hech kim yo'q" },
    { ar: "هُنَا؟", uz: "shu yerdami?" }
  ],
  full_uz: "Bu yerda hech kim yo'qmi?",
  note: null
},
{
  num: 24,
  time: "00:00:58,619 --> 00:01:03,039",
  arabic: "مَا هَذَا؟",
  segs: null,
  full_uz: "Bu nima?",
  note: null
},
{
  num: 25,
  time: "00:01:03,039 --> 00:01:05,019",
  arabic: "إِنَّهَا حِرْبَاءُ يَا نُولِك",
  segs: [
    { ar: "إِنَّهَا حِرْبَاءُ", uz: "Bu xameleon" },
    { ar: "يَا نُولِك", uz: "Nolik" }
  ],
  full_uz: "Bu xameleon, Nolik.",
  note: null
},
{
  num: 26,
  time: "00:01:05,019 --> 00:01:06,480",
  arabic: "أَظُنُّهَا رَائِعَةً",
  segs: [
    { ar: "أَظُنُّهَا", uz: "Menimcha u" },
    { ar: "رَائِعَةً", uz: "ajoyib" }
  ],
  full_uz: "Menimcha u juda ajoyib.",
  note: null
},
{
  num: 27,
  time: "00:01:06,480 --> 00:01:08,379",
  arabic: "إِخْرَاجُهَا فِكْرَةٌ سَيِّئَةٌ",
  segs: [
    { ar: "إِخْرَاجُهَا", uz: "Uni tashqariga chiqarish" },
    { ar: "فِكْرَةٌ سَيِّئَةٌ", uz: "yomon fikr" }
  ],
  full_uz: "Uni tashqariga chiqarish yomon fikr.",
  note: null
},
{
  num: 28,
  time: "00:01:08,379 --> 00:01:09,219",
  arabic: "فَقَدْ تَهْرُبُ",
  segs: [
    { ar: "فَقَدْ", uz: "Chunki u" },
    { ar: "تَهْرُبُ", uz: "qochib ketishi mumkin" }
  ],
  full_uz: "Chunki u qochib ketishi mumkin.",
  note: "SRTda «فقط تهرب» yozilgan. Kontekstga ko‘ra «فقد تهرب» to‘g‘ri."
},
{
  num: 29,
  time: "00:01:09,219 --> 00:01:11,019",
  arabic: "لَا تَقْلَقِي، أَنَا سَأُمْسِكُهَا",
  segs: [
    { ar: "لَا تَقْلَقِي", uz: "Xavotir olma" },
    { ar: "أَنَا سَأُمْسِكُهَا", uz: "Men uni ushlayman" }
  ],
  full_uz: "Xavotir olma, men uni ushlayman.",
  note: null
},
{
  num: 30,
  time: "00:01:11,019 --> 00:01:12,719",
  arabic: "يَا لَهَا مِنْ وَحْشٍ",
  segs: null,
  full_uz: "Voy, naqadar vahimali ekan!",
  note: null
},
{
  num: 31,
  time: "00:01:12,719 --> 00:01:15,700",
  arabic: "لَكِنْ كَيْفَ لَمْ أَتَمَكَّنْ مِنْ رُؤْيَتِهَا؟",
  segs: [
    { ar: "لَكِنْ كَيْفَ", uz: "Lekin qanday qilib" },
    { ar: "لَمْ أَتَمَكَّنْ مِنْ رُؤْيَتِهَا؟", uz: "uni ko'ra olmadim?" }
  ],
  full_uz: "Lekin uni qanday qilib ko'ra olmadim?",
  note: null
},
{
  num: 32,
  time: "00:01:15,700 --> 00:01:18,120",
  arabic: "لِأَنَّ الْحِرْبَاءَ تَعْلَمُ كَيْفَ تُخْفِي نَفْسَهَا",
  segs: [
    { ar: "لِأَنَّ الْحِرْبَاءَ", uz: "Chunki xameleon" },
    { ar: "تَعْلَمُ كَيْفَ تُخْفِي نَفْسَهَا", uz: "o'zini qanday yashirishni biladi" }
  ],
  full_uz: "Chunki xameleon o'zini qanday yashirishni biladi.",
  note: null
},
{
  num: 33,
  time: "00:01:18,120 --> 00:01:20,759",
  arabic: "عَنْ طَرِيقِ تَغْيِيرِ لَوْنِ جَسَدِهَا كَامِلًا",
  segs: [
    { ar: "عَنْ طَرِيقِ", uz: "Orqali" },
    { ar: "تَغْيِيرِ لَوْنِ جَسَدِهَا كَامِلًا", uz: "butun tanasining rangini o'zgartirish" }
  ],
  full_uz: "Butun tanasining rangini o'zgartirish orqali.",
  note: null
},
{
  num: 34,
  time: "00:01:20,759 --> 00:01:25,299",
  arabic: "هَلْ سَبَقَ لَكُمْ أَنْ رَأَيْتُمْ زِيًّا عَسْكَرِيًّا؟",
  segs: [
    { ar: "هَلْ سَبَقَ لَكُمْ", uz: "Sizlar ilgari" },
    { ar: "أَنْ رَأَيْتُمْ زِيًّا عَسْكَرِيًّا؟", uz: "harbiy kiyimni ko'rganmisiz?" }
  ],
  full_uz: "Sizlar ilgari harbiy kiyimni ko'rganmisiz?",
  note: null
},
{
  num: 35,
  time: "00:01:25,299 --> 00:01:29,420",
  arabic: "يُصَمَّمُ الزِّيُّ بِأَلْوَانٍ وَأَنْمَاطٍ مُخْتَلِفَةٍ تُسَاعِدُ الْجُنْدِيَّ عَلَى الِاخْتِبَاءِ",
  segs: [
    { ar: "يُصَمَّمُ الزِّيُّ", uz: "Harbiy kiyim tayyorlanadi" },
    { ar: "بِأَلْوَانٍ وَأَنْمَاطٍ مُخْتَلِفَةٍ", uz: "turli rang va naqshlarda" },
    { ar: "تُسَاعِدُ الْجُنْدِيَّ عَلَى الِاخْتِبَاءِ", uz: "askar yashirinishiga yordam beradigan" }
  ],
  full_uz: "Harbiy kiyim askarning yashirinishiga yordam beradigan turli rang va naqshlarda tayyorlanadi.",
  note: null
},
{
  num: 36,
  time: "00:01:29,420 --> 00:01:30,640",
  arabic: "هَذَا يُدْعَى التَّمْوِيهَ",
  segs: [
    { ar: "هَذَا", uz: "Bu" },
    { ar: "يُدْعَى التَّمْوِيهَ", uz: "niqoblanish deb ataladi" }
  ],
  full_uz: "Bu niqoblanish deb ataladi.",
  note: null
},
{
  num: 37,
  time: "00:01:30,640 --> 00:01:32,759",
  arabic: "وَقَدْ تَعَلَّمَهُ النَّاسُ مِنَ الْحَيَوَانَاتِ",
  segs: [
    { ar: "وَقَدْ تَعَلَّمَهُ النَّاسُ", uz: "Odamlar buni o'rganganlar" },
    { ar: "مِنَ الْحَيَوَانَاتِ", uz: "hayvonlardan" }
  ],
  full_uz: "Odamlar buni hayvonlardan o'rganganlar.",
  note: null
},
{
  num: 38,
  time: "00:01:32,759 --> 00:01:35,359",
  arabic: "مَثَلًا قَدْ تَبْدُو الْيَرَقَانَةُ كَغُصَيْنٍ",
  segs: [
    { ar: "مَثَلًا", uz: "Masalan" },
    { ar: "قَدْ تَبْدُو الْيَرَقَانَةُ", uz: "qurt lichinkasi ko'rinishi mumkin" },
    { ar: "كَغُصَيْنٍ", uz: "kichik shoxchadek" }
  ],
  full_uz: "Masalan, qurt lichinkasi kichik shoxchaga o'xshab ko'rinishi mumkin.",
  note: null
},
{
  num: 39,
  time: "00:01:35,359 --> 00:01:37,979",
  arabic: "وَحِصَانُ الْبَحْرِ كَقِطْعَةٍ مِنَ الْمَرْجَانِ",
  segs: [
    { ar: "وَحِصَانُ الْبَحْرِ", uz: "dengiz oti esa" },
    { ar: "كَقِطْعَةٍ مِنَ الْمَرْجَانِ", uz: "marjonning bir bo'lagidek" }
  ],
  full_uz: "Dengiz oti esa marjonning bir bo'lagiga o'xshaydi.",
  note: null
},
{
  num: 40,
  time: "00:01:37,979 --> 00:01:41,079",
  arabic: "وَيُصْبِحُ الْأَرْنَبُ الرَّمَادِيُّ أَبْيَضَ فِي الشِّتَاءِ",
  segs: [
    { ar: "وَيُصْبِحُ الْأَرْنَبُ الرَّمَادِيُّ", uz: "Kulrang quyon" },
    { ar: "أَبْيَضَ فِي الشِّتَاءِ", uz: "qishda oppoq bo'lib qoladi" }
  ],
  full_uz: "Kulrang quyon qishda oppoq bo'lib qoladi.",
  note: null
},
{
  num: 41,
  time: "00:01:41,079 --> 00:01:44,439",
  arabic: "لِذَا يُوَاجِهُ الذِّئْبُ صُعُوبَةً فِي الْعُثُورِ عَلَيْهِ فِي الثَّلْجِ",
  segs: [
    { ar: "لِذَا", uz: "Shuning uchun" },
    { ar: "يُوَاجِهُ الذِّئْبُ صُعُوبَةً", uz: "bo'ri qiynaladi" },
    { ar: "فِي الْعُثُورِ عَلَيْهِ فِي الثَّلْجِ", uz: "uni qor ichida topishda" }
  ],
  full_uz: "Shuning uchun bo'ri uni qor ichida topishda qiynaladi.",
  note: null
},
{
  num: 42,
  time: "00:01:44,439 --> 00:01:47,299",
  arabic: "وَلَكِنْ بَطَلُ التَّمْوِيهِ هُوَ الْحِرْبَاءُ",
  segs: [
    { ar: "وَلَكِنْ", uz: "Lekin" },
    { ar: "بَطَلُ التَّمْوِيهِ", uz: "niqoblanishning ustasi" },
    { ar: "هُوَ الْحِرْبَاءُ", uz: "xameleondir" }
  ],
  full_uz: "Lekin niqoblanishning ustasi xameleondir.",
  note: null
},
{
  num: 43,
  time: "00:01:47,299 --> 00:01:52,159",
  arabic: "فَسَيِّدَةُ التَّمْوِيهِ هَذِهِ يُمْكِنُهَا أَنْ تُغَيِّرَ لَوْنَهَا فِي ثَوَانٍ",
  segs: [
    { ar: "فَسَيِّدَةُ التَّمْوِيهِ هَذِهِ", uz: "Bu niqoblanish ustasi esa" },
    { ar: "يُمْكِنُهَا أَنْ تُغَيِّرَ لَوْنَهَا", uz: "o'z rangini o'zgartira oladi" },
    { ar: "فِي ثَوَانٍ", uz: "bir necha soniyada" }
  ],
  full_uz: "Bu niqoblanish ustasi o'z rangini bir necha soniya ichida o'zgartira oladi.",
  note: null
},
{
  num: 44,
  time: "00:01:55,299 --> 00:01:58,819",
  arabic: "هَيْ، تُومْ، أَيْنَ ذَهَبَتِ الْحِرْبَاءُ؟",
  segs: [
    { ar: "هَيْ، تُومْ", uz: "Hey, Tom" },
    { ar: "أَيْنَ ذَهَبَتِ الْحِرْبَاءُ؟", uz: "xameleon qayerga ketdi?" }
  ],
  full_uz: "Hey, Tom, xameleon qayerga ketdi?",
  note: null
},
{
  num: 45,
  time: "00:01:58,819 --> 00:02:00,620",
  arabic: "آهْ، لَقَدِ اخْتَفَتْ",
  segs: [
    { ar: "آهْ", uz: "Eh" },
    { ar: "لَقَدِ اخْتَفَتْ", uz: "u yo'qolib qoldi" }
  ],
  full_uz: "Eh, u yo'qolib qoldi.",
  note: null
},
{
  num: 46,
  time: "00:02:00,620 --> 00:02:03,899",
  arabic: "لَمْ تَخْتَفِ، بَلِ اخْتَبَأَتْ",
  segs: [
    { ar: "لَمْ تَخْتَفِ", uz: "U yo'qolmadi" },
    { ar: "بَلِ اخْتَبَأَتْ", uz: "balki yashirinib oldi" }
  ],
  full_uz: "U yo'qolmadi, balki yashirinib oldi.",
  note: null
},
{
  num: 47,
  time: "00:02:03,899 --> 00:02:07,099",
  arabic: "لَنْ تَخْتَبِئَ طَوِيلًا، لِنَبْحَثْ عَنْهَا",
  segs: [
    { ar: "لَنْ تَخْتَبِئَ طَوِيلًا", uz: "U uzoq yashirinib turolmaydi" },
    { ar: "لِنَبْحَثْ عَنْهَا", uz: "uni qidiraylik" }
  ],
  full_uz: "U uzoq yashirinib turolmaydi, uni qidiraylik.",
  note: null
},
{
  num: 48,
  time: "00:02:07,099 --> 00:02:21,240",
  arabic: "شُوسَاكَا، هَلْ رَأَيْتَ الْحِرْبَاءَ؟",
  segs: [
    { ar: "شُوسَاكَا", uz: "Shusaka" },
    { ar: "هَلْ رَأَيْتَ الْحِرْبَاءَ؟", uz: "xameleonni ko'rdingmi?" }
  ],
  full_uz: "Shusaka, xameleonni ko'rdingmi?",
  note: "«شوساكا» ism/transliteratsiya."
},
{
  num: 49,
  time: "00:02:21,240 --> 00:02:22,300",
  arabic: "أَيْنَ هِيَ؟",
  segs: null,
  full_uz: "Qayerda u?",
  note: null
},
{
  num: 51,
  time: "00:02:34,500 --> 00:02:39,300",
  arabic: "أَرَأَيْتُمَاهَا؟",
  segs: null,
  full_uz: "Uni ko'rdingizmi?",
  note: null
},
{
  num: 52,
  time: "00:02:39,300 --> 00:02:41,420",
  arabic: "لَا، لَنْ تَدَعَنَا نُمْسِكُ بِهَا",
  segs: [
    { ar: "لَا", uz: "Yo'q" },
    { ar: "لَنْ تَدَعَنَا نُمْسِكُ بِهَا", uz: "u bizga uni ushlashga yo'l qo'ymaydi" }
  ],
  full_uz: "Yo'q, u bizga uni ushlashga yo'l qo'ymaydi.",
  note: null
},
{
  num: 53,
  time: "00:02:41,420 --> 00:02:45,640",
  arabic: "عَلَيْنَا أَنْ نَخْدَعَهَا كَيْ تَأْتِيَ إِلَيْنَا",
  segs: [
    { ar: "عَلَيْنَا", uz: "Biz kerak" },
    { ar: "أَنْ نَخْدَعَهَا", uz: "uni aldashimiz" },
    { ar: "كَيْ تَأْتِيَ إِلَيْنَا", uz: "biz tomonga kelishi uchun" }
  ],
  full_uz: "Uni biz tomonga kelishi uchun aldashimiz kerak.",
  note: null
},
{
  num: 54,
  time: "00:02:45,640 --> 00:02:49,420",
  arabic: "نَعَمْ، نُعِدُّ لَهَا فَخًّا بِاسْتِعْمَالِ شَيْءٍ تُحِبُّهُ",
  segs: [
    { ar: "نَعَمْ", uz: "Ha" },
    { ar: "نُعِدُّ لَهَا فَخًّا", uz: "unga tuzoq tayyorlaymiz" },
    { ar: "بِاسْتِعْمَالِ شَيْءٍ تُحِبُّهُ", uz: "u yaxshi ko'radigan narsadan foydalanib" }
  ],
  full_uz: "Ha, u yaxshi ko'radigan narsadan foydalanib unga tuzoq tayyorlaymiz.",
  note: null
},
{
  num: 55,
  time: "00:02:49,420 --> 00:02:51,520",
  arabic: "تُرَى مَا تُحِبُّ أَنْ تَأْكُلَ الْحِرْبَاءُ؟",
  segs: [
    { ar: "تُرَى", uz: "Qiziq" },
    { ar: "مَا تُحِبُّ", uz: "nimani yaxshi ko'radi" },
    { ar: "أَنْ تَأْكُلَ الْحِرْبَاءُ؟", uz: "xameleon yeyishni?" }
  ],
  full_uz: "Qiziq, xameleon nima yeyishni yaxshi ko'radi?",
  note: null
},
{
  num: 56,
  time: "00:02:51,520 --> 00:02:53,300",
  arabic: "وَمَاذَا تُحِبُّ طَعَامَهَا؟",
  segs: [
    { ar: "وَمَاذَا", uz: "Unda nima" },
    { ar: "تُحِبُّ طَعَامَهَا؟", uz: "uning sevimli ozig'i?" }
  ],
  full_uz: "Unda uning sevimli ozig'i nima?",
  note: "SRT tabiiy emas. Kontekstda ma'nosi: «uning sevimli ozig'i nima?»"
},
{
  num: 57,
  time: "00:02:53,300 --> 00:02:55,300",
  arabic: "وَمَاذَا تَأْكُلُ الْحِرْبَاءُ؟",
  segs: [
    { ar: "وَمَاذَا", uz: "Xo'sh nima" },
    { ar: "تَأْكُلُ الْحِرْبَاءُ؟", uz: "xameleon yeydi?" }
  ],
  full_uz: "Xo'sh, xameleon nima yeydi?",
  note: null
},
{
  num: 58,
  time: "00:02:55,900 --> 00:02:58,300",
  arabic: "الذُّبَابَ أَوِ الْيَرَقَاتِ أَوِ الصَّرَاصِيرَ",
  segs: [
    { ar: "الذُّبَابَ", uz: "Pashshalarni" },
    { ar: "أَوِ الْيَرَقَاتِ", uz: "yoki lichinkalarni" },
    { ar: "أَوِ الصَّرَاصِيرَ", uz: "yoki suvaraklarni" }
  ],
  full_uz: "Pashshalarni, lichinkalarni yoki suvaraklarni.",
  note: null
},
{
  num: 59,
  time: "00:02:58,880 --> 00:03:00,300",
  arabic: "وَمِنْ أَيْنَ سَآتِي بِالذُّبَابِ؟",
  segs: [
    { ar: "وَمِنْ أَيْنَ", uz: "Qayerdan esa" },
    { ar: "سَآتِي بِالذُّبَابِ؟", uz: "pashsha topaman?" }
  ],
  full_uz: "Qayerdan pashsha topaman?",
  note: null
},
{
  num: 60,
  time: "00:03:01,320 --> 00:03:03,300",
  arabic: "حَسَنًا، أَرَى أَنَّ...",
  segs: [
    { ar: "حَسَنًا", uz: "Mayli" },
    { ar: "أَرَى أَنَّ...", uz: "menimcha..." }
  ],
  full_uz: "Mayli, menimcha...",
  note: null
},
{
  num: 61,
  time: "00:03:04,280 --> 00:03:05,300",
  arabic: "مَاذَا؟",
  segs: null,
  full_uz: "Nima?",
  note: null
},
{
  num: 62,
  time: "00:03:08,780 --> 00:03:11,260",
  arabic: "سِيمْكَا، انْتَظِرِي، سَأَنَالُ مِنْكِ",
  segs: [
    { ar: "سِيمْكَا", uz: "Simka" },
    { ar: "انْتَظِرِي", uz: "to'xta" },
    { ar: "سَأَنَالُ مِنْكِ", uz: "hozir seni tutaman" }
  ],
  full_uz: "Simka, to'xta! Hozir seni tutaman!",
  note: null
},
{
  num: 63,
  time: "00:03:11,260 --> 00:03:13,720",
  arabic: "يَجِبُ أَنْ نُسَاعِدَ كَاتْيَا",
  segs: [
    { ar: "يَجِبُ", uz: "Kerak" },
    { ar: "أَنْ نُسَاعِدَ كَاتْيَا", uz: "Katyaga yordam berishimiz" }
  ],
  full_uz: "Biz Katyaga yordam berishimiz kerak.",
  note: null
},
{
  num: 64,
  time: "00:03:13,720 --> 00:03:16,460",
  arabic: "كَمَا أَنَّنَا لَا نَرَى الْيَرَقَانَةَ تَتَذَمَّرُ",
  segs: [
    { ar: "كَمَا أَنَّنَا", uz: "Axir biz" },
    { ar: "لَا نَرَى الْيَرَقَانَةَ", uz: "lichinkaning" },
    { ar: "تَتَذَمَّرُ", uz: "noliyotganini ko'rmayapmiz" }
  ],
  full_uz: "Axir biz lichinkaning noliyotganini ko'rmayapmiz.",
  note: null
},
{
  num: 65,
  time: "00:03:16,460 --> 00:03:20,300",
  arabic: "هُدُوءٌ",
  segs: null,
  full_uz: "Jim.",
  note: null
},
{
  num: 66,
  time: "00:03:20,300 --> 00:03:21,300",
  arabic: "هُدُوءٌ؟",
  segs: null,
  full_uz: "Jimmi?",
  note: null
},
{
  num: 67,
  time: "00:03:21,300 --> 00:03:23,420",
  arabic: "نُولِك، ابْدَأْ بِالطَّنِينِ",
  segs: [
    { ar: "نُولِك", uz: "Nolik" },
    { ar: "ابْدَأْ", uz: "boshla" },
    { ar: "بِالطَّنِينِ", uz: "g'uvillashni" }
  ],
  full_uz: "Nolik, g'uvillashni boshlagin.",
  note: null
},
{
  num: 68,
  time: "00:03:23,420 --> 00:03:24,180",
  arabic: "طَنِينٌ؟",
  segs: null,
  full_uz: "G'uvillashmi?",
  note: null
},
{
  num: 69,
  time: "00:03:24,180 --> 00:03:25,460",
  arabic: "أَجَلْ، كَذُبَابَةٍ",
  segs: [
    { ar: "أَجَلْ", uz: "Ha" },
    { ar: "كَذُبَابَةٍ", uz: "xuddi pashshadek" }
  ],
  full_uz: "Ha, xuddi pashshadek.",
  note: null
},
{
  num: 70,
  time: "00:03:25,460 --> 00:03:27,939",
  arabic: "نَعَمْ، وَاخْفِقْ بِجَنَاحَيْكَ أَيْضًا",
  segs: [
    { ar: "نَعَمْ", uz: "Ha" },
    { ar: "وَاخْفِقْ", uz: "qoq" },
    { ar: "بِجَنَاحَيْكَ أَيْضًا", uz: "qanotlaringni ham" }
  ],
  full_uz: "Ha, qanotlaringni ham qoq.",
  note: null
},
{
  num: 71,
  time: "00:03:27,939 --> 00:03:36,540",
  arabic: "سِيمْكَا، كَمْ مِنَ الْوَقْتِ سَأَفْعَلُ هَذَا؟",
  segs: [
    { ar: "سِيمْكَا", uz: "Simka" },
    { ar: "كَمْ مِنَ الْوَقْتِ", uz: "qancha vaqt" },
    { ar: "سَأَفْعَلُ هَذَا؟", uz: "buni qilaman?" }
  ],
  full_uz: "Simka, buni yana qancha vaqt qilaman?",
  note: null
},
{
  num: 72,
  time: "00:03:36,540 --> 00:03:38,920",
  arabic: "تَابِعْ ذَلِكَ حَتَّى تَظْهَرَ الْحِرْبَاءُ",
  segs: [
    { ar: "تَابِعْ ذَلِكَ", uz: "Davom et" },
    { ar: "حَتَّى تَظْهَرَ الْحِرْبَاءُ", uz: "xameleon paydo bo'lguncha" }
  ],
  full_uz: "Xameleon paydo bo'lguncha davom et.",
  note: null
},
{
  num: 73,
  time: "00:03:38,920 --> 00:03:40,160",
  arabic: "تَابِعِ الطَّنِينَ",
  segs: [
    { ar: "تَابِعْ", uz: "Davom et" },
    { ar: "الطَّنِينَ", uz: "g'uvillashni" }
  ],
  full_uz: "G'uvillashni davom ettir.",
  note: null
},
{
  num: 74,
  time: "00:03:40,160 --> 00:03:48,400",
  arabic: "هَيَّا بِي، أَمْسِكْهَا",
  segs: [
    { ar: "هَيَّا بِي", uz: "Qani ketdik" },
    { ar: "أَمْسِكْهَا", uz: "ushla uni" }
  ],
  full_uz: "Qani, ushla uni!",
  note: null
},
{
  num: 75,
  time: "00:03:51,300 --> 00:04:07,760",
  arabic: "مْمْمْمْم...",
  segs: null,
  full_uz: "Mmmmm...",
  note: "Pashshaning g'uvillashiga taqlid."
},
{
  num: 76,
  time: "00:04:07,760 --> 00:04:16,419",
  arabic: "اتْرُكِي أَخِي تُومْ! هَيَّا بِسُرْعَةٍ!",
  segs: [
    { ar: "اتْرُكِي أَخِي تُومْ", uz: "Akam Tomni qo'yib yubor" },
    { ar: "هَيَّا بِسُرْعَةٍ", uz: "tezroq" }
  ],
  full_uz: "Akam Tomni qo'yib yubor! Tezroq!",
  note: null
},
{
  num: 77,
  time: "00:04:16,419 --> 00:04:23,560",
  arabic: "لَقَدْ أَمْسَكْتُهَا! أَهَا، أَمْسَكْتُ بِكِ!",
  segs: [
    { ar: "لَقَدْ أَمْسَكْتُهَا", uz: "Uni ushladim" },
    { ar: "أَهَا", uz: "Aha" },
    { ar: "أَمْسَكْتُ بِكِ", uz: "seni ushladim" }
  ],
  full_uz: "Uni ushladim! Aha, seni ushladim!",
  note: null
},
{
  num: 78,
  time: "00:04:26,440 --> 00:04:31,100",
  arabic: "سَأُخْبِرُكُمْ شَيْئًا، فِي الْجَيْشِ يَلْجَؤُونَ إِلَى التَّمْوِيهِ دَائِمًا",
  segs: [
    { ar: "سَأُخْبِرُكُمْ شَيْئًا", uz: "Sizlarga bir narsa aytaman" },
    { ar: "فِي الْجَيْشِ", uz: "armiyada" },
    { ar: "يَلْجَؤُونَ إِلَى التَّمْوِيهِ دَائِمًا", uz: "doimo niqoblanishdan foydalanishadi" }
  ],
  full_uz: "Sizlarga bir narsa aytaman: armiyada doimo niqoblanishdan foydalanishadi.",
  note: null
},
{
  num: 79,
  time: "00:04:31,100 --> 00:04:33,639",
  arabic: "يَسْتَعْمِلُونَ الشَّبَكَاتِ الَّتِي تَبْدُو كَالشُّجَيْرَاتِ",
  segs: [
    { ar: "يَسْتَعْمِلُونَ الشَّبَكَاتِ", uz: "Ular to'rlardan foydalanishadi" },
    { ar: "الَّتِي تَبْدُو كَالشُّجَيْرَاتِ", uz: "butalarga o'xshab ko'rinadigan" }
  ],
  full_uz: "Ular butalarga o'xshab ko'rinadigan to'rlardan foydalanishadi.",
  note: null
},
{
  num: 80,
  time: "00:04:33,639 --> 00:04:37,460",
  arabic: "يَطْلُونَ الدَّبَّابَاتِ بِأَلْوَانٍ تَجْعَلُهَا تَتَّفِقُ مَعَ مُحِيطِهَا",
  segs: [
    { ar: "يَطْلُونَ الدَّبَّابَاتِ", uz: "Tanklarni bo'yashadi" },
    { ar: "بِأَلْوَانٍ", uz: "ranglarga" },
    { ar: "تَجْعَلُهَا تَتَّفِقُ مَعَ مُحِيطِهَا", uz: "atrof-muhit bilan uyg'unlashadigan" }
  ],
  full_uz: "Tanklarni atrof-muhit bilan uyg'unlashadigan ranglarga bo'yashadi.",
  note: null
},
{
  num: 81,
  time: "00:04:37,460 --> 00:04:41,360",
  arabic: "يُحَلِّقُونَ فِي طَائِرَاتٍ خَاصَّةٍ يَصْعُبُ كَشْفُهَا بِالْكَاشِفِ",
  segs: [
    { ar: "يُحَلِّقُونَ", uz: "Ular uchishadi" },
    { ar: "فِي طَائِرَاتٍ خَاصَّةٍ", uz: "maxsus samolyotlarda" },
    { ar: "يَصْعُبُ كَشْفُهَا بِالْكَاشِفِ", uz: "ularni aniqlash qiyin bo'lgan" }
  ],
  full_uz: "Ular aniqlash qiyin bo'lgan maxsus samolyotlarda uchishadi.",
  note: "«الكاشف» bu yerda radar yoki aniqlash qurilmasini anglatadi."
},
{
  num: 82,
  time: "00:04:41,360 --> 00:04:44,160",
  arabic: "يَفْعَلُونَ كُلَّ مَا فِي وُسْعِهِمْ لِإِخْفَاءِ مَكَانِهِمْ",
  segs: [
    { ar: "يَفْعَلُونَ كُلَّ مَا فِي وُسْعِهِمْ", uz: "Ular qo'llaridan kelgan hamma ishni qilishadi" },
    { ar: "لِإِخْفَاءِ مَكَانِهِمْ", uz: "joylarini yashirish uchun" }
  ],
  full_uz: "Joylarini yashirish uchun qo'llaridan kelgan hamma ishni qilishadi.",
  note: null
},
{
  num: 83,
  time: "00:04:44,160 --> 00:04:47,180",
  arabic: "وَلَيْسَ الْجَيْشُ فَقَطْ مَنْ يَسْتَعْمِلُ هَذِهِ التَّمْوِيهَاتِ",
  segs: [
    { ar: "وَلَيْسَ الْجَيْشُ فَقَطْ", uz: "Faqat armiyagina emas" },
    { ar: "مَنْ يَسْتَعْمِلُ هَذِهِ التَّمْوِيهَاتِ", uz: "bunday niqoblanish usullaridan foydalanadigan" }
  ],
  full_uz: "Bunday niqoblanish usullaridan faqat armiyagina foydalanmaydi.",
  note: null
},
{
  num: 84,
  time: "00:04:47,180 --> 00:04:51,120",
  arabic: "فَالْمُصَوِّرُونَ يَتَخَفَّوْنَ لِلْتِقَاطِ صُوَرٍ لِلْحَيَوَانَاتِ الْبَرِّيَّةِ",
  segs: [
    { ar: "فَالْمُصَوِّرُونَ", uz: "Fotograflar ham" },
    { ar: "يَتَخَفَّوْنَ", uz: "yashirinishadi" },
    { ar: "لِلْتِقَاطِ صُوَرٍ لِلْحَيَوَانَاتِ الْبَرِّيَّةِ", uz: "yovvoyi hayvonlarni suratga olish uchun" }
  ],
  full_uz: "Fotograflar ham yovvoyi hayvonlarni suratga olish uchun yashirinishadi.",
  note: null
},
{
  num: 85,
  time: "00:04:51,120 --> 00:04:53,980",
  arabic: "وَيَسْتَعْمِلُ النَّاسُ الزِّينَةَ لِإِخْفَاءِ عُيُوبِهِمْ",
  segs: [
    { ar: "وَيَسْتَعْمِلُ النَّاسُ الزِّينَةَ", uz: "Odamlar pardozdan foydalanishadi" },
    { ar: "لِإِخْفَاءِ عُيُوبِهِمْ", uz: "kamchiliklarini yashirish uchun" }
  ],
  full_uz: "Odamlar kamchiliklarini yashirish uchun pardozdan foydalanishadi.",
  note: null
},
{
  num: 86,
  time: "00:04:53,980 --> 00:04:57,840",
  arabic: "وَالْفَنَّانُونَ يُخْفُونَ عُيُوبَ الْحِيطَانِ الْقَدِيمَةِ بِصُوَرٍ مُشْرِقَةٍ",
  segs: [
    { ar: "وَالْفَنَّانُونَ", uz: "Rassomlar esa" },
    { ar: "يُخْفُونَ عُيُوبَ الْحِيطَانِ الْقَدِيمَةِ", uz: "eski devorlarning nuqsonlarini yashirishadi" },
    { ar: "بِصُوَرٍ مُشْرِقَةٍ", uz: "yorqin rasmlar bilan" }
  ],
  full_uz: "Rassomlar eski devorlarning nuqsonlarini yorqin rasmlar bilan yashirishadi.",
  note: null
},
{
  num: 87,
  time: "00:04:57,840 --> 00:05:01,079",
  arabic: "وَيُحِبُّ الْبَشَرُ أَنْ يَتَخَفَّوْا فِي حَفَلَاتِ التَّنَكُّرِ",
  segs: [
    { ar: "وَيُحِبُّ الْبَشَرُ", uz: "Odamlar yaxshi ko'rishadi" },
    { ar: "أَنْ يَتَخَفَّوْا", uz: "niqoblanishni" },
    { ar: "فِي حَفَلَاتِ التَّنَكُّرِ", uz: "maskarad bayramlarida" }
  ],
  full_uz: "Odamlar maskarad bayramlarida niqoblanishni yaxshi ko'rishadi.",
  note: null
},
{
  num: 88,
  time: "00:05:01,079 --> 00:05:03,759",
  arabic: "إِذْ يَتَنَكَّرُونَ بِالْأَزْيَاءِ وَالْأَقْنِعَةِ",
  segs: [
    { ar: "إِذْ يَتَنَكَّرُونَ", uz: "Ular niqoblanishadi" },
    { ar: "بِالْأَزْيَاءِ وَالْأَقْنِعَةِ", uz: "kiyimlar va niqoblar bilan" }
  ],
  full_uz: "Ular kiyimlar va niqoblar bilan niqoblanishadi.",
  note: null
},
{
  num: 89,
  time: "00:05:03,759 --> 00:05:07,220",
  arabic: "وَالْفِيكْسِيزُ أَيْضًا لَدَيْهِمْ طَرِيقَتُهُمْ فِي التَّخَفِّي",
  segs: [
    { ar: "وَالْفِيكْسِيزُ أَيْضًا", uz: "Fiksiklar ham" },
    { ar: "لَدَيْهِمْ طَرِيقَتُهُمْ", uz: "o'z usullariga ega" },
    { ar: "فِي التَّخَفِّي", uz: "yashirinishda" }
  ],
  full_uz: "Fiksiklarning ham yashirinishning o'z usuli bor.",
  note: null
},
{
  num: 90,
  time: "00:05:07,220 --> 00:05:09,480",
  arabic: "الْجَمِيعُ لَدَيْهِمْ أَسَالِيبُهُمْ",
  segs: [
    { ar: "الْجَمِيعُ", uz: "Hamma" },
    { ar: "لَدَيْهِمْ أَسَالِيبُهُمْ", uz: "o'z usullariga ega" }
  ],
  full_uz: "Har kimning o'z usuli bor.",
  note: null
},
{
  num: 91,
  time: "00:05:09,480 --> 00:05:13,699",
  arabic: "وَالْفِيكْسِيزُ أَيْضًا لَدَيْهِمْ طَرِيقَتُهُمْ فِي التَّخَفِّي",
  segs: [
    { ar: "وَالْفِيكْسِيزُ أَيْضًا", uz: "Fiksiklar ham" },
    { ar: "لَدَيْهِمْ طَرِيقَتُهُمْ", uz: "o'z usullariga ega" },
    { ar: "فِي التَّخَفِّي", uz: "yashirinishda" }
  ],
  full_uz: "Fiksiklarning ham yashirinishning o'z usuli bor.",
  note: null
},
{
  num: 92,
  time: "00:05:13,699 --> 00:05:15,560",
  arabic: "أَتَذْكُرُونَ ذَلِكَ؟",
  segs: [
    { ar: "أَتَذْكُرُونَ", uz: "Eslaysizlarmi" },
    { ar: "ذَلِكَ؟", uz: "buni?" }
  ],
  full_uz: "Buni eslaysizlarmi?",
  note: null
},
{
  num: 93,
  time: "00:05:15,560 --> 00:05:17,120",
  arabic: "حَسَنًا، مَا هِيَ؟",
  segs: [
    { ar: "حَسَنًا", uz: "Xo'sh" },
    { ar: "مَا هِيَ؟", uz: "u nima?" }
  ],
  full_uz: "Xo'sh, u nima?",
  note: null
},
{
  num: 94,
  time: "00:05:17,120 --> 00:05:20,759",
  arabic: "وَالْآنَ لَمْ تَهْرُبْ",
  segs: [
    { ar: "وَالْآنَ", uz: "Endi esa" },
    { ar: "لَمْ تَهْرُبْ", uz: "u qochib ketmadi" }
  ],
  full_uz: "Endi esa u qochib ketmadi.",
  note: null
},
{
  num: 95,
  time: "00:05:20,759 --> 00:05:22,800",
  arabic: "إِذَنْ يَا سَيِّدَةَ الِاخْتِفَاءِ",
  segs: [
    { ar: "إِذَنْ", uz: "Unday bo'lsa" },
    { ar: "يَا سَيِّدَةَ الِاخْتِفَاءِ", uz: "ey yashirinish ustasi" }
  ],
  full_uz: "Unday bo'lsa, ey yashirinish ustasi.",
  note: null
},
{
  num: 96,
  time: "00:05:22,800 --> 00:05:24,939",
  arabic: "مَاذَا سَتَقُولِينَ الْآنَ؟",
  segs: [
    { ar: "مَاذَا", uz: "Nima" },
    { ar: "سَتَقُولِينَ الْآنَ؟", uz: "endi deysan?" }
  ],
  full_uz: "Endi nima deysan?",
  note: null
},
{
  num: 97,
  time: "00:05:24,939 --> 00:05:27,139",
  arabic: "لَيْتَنِي أَسْتَطِيعُ إِخْفَاءَ نَفْسِي مِثْلَهَا",
  segs: [
    { ar: "لَيْتَنِي", uz: "Qani edi" },
    { ar: "أَسْتَطِيعُ إِخْفَاءَ نَفْسِي", uz: "o'zimni yashira olsam" },
    { ar: "مِثْلَهَا", uz: "unga o'xshab" }
  ],
  full_uz: "Qani edi, unga o'xshab o'zimni yashira olsam.",
  note: null
},
{
  num: 98,
  time: "00:05:27,139 --> 00:05:28,060",
  arabic: "نُولِك",
  segs: null,
  full_uz: "Nolik.",
  note: null
},
{
  num: 99,
  time: "00:05:28,060 --> 00:05:30,379",
  arabic: "مَا الَّذِي تَقُولُهُ أَنْتَ؟",
  segs: [
    { ar: "مَا الَّذِي", uz: "Nima" },
    { ar: "تَقُولُهُ أَنْتَ؟", uz: "deyapsan o'zing?" }
  ],
  full_uz: "O'zing nima deyapsan?",
  note: null
},
{
  num: 100,
  time: "00:05:30,379 --> 00:05:33,899",
  arabic: "أَنْتَ تَعْلَمُ كَيْفَ تُخْفِي نَفْسَكَ أَفْضَلَ مِنْهَا بِمِائَةِ مَرَّةٍ",
  segs: [
    { ar: "أَنْتَ تَعْلَمُ", uz: "Sen bilasan" },
    { ar: "كَيْفَ تُخْفِي نَفْسَكَ", uz: "o'zingni qanday yashirishni" },
    { ar: "أَفْضَلَ مِنْهَا بِمِائَةِ مَرَّةٍ", uz: "undan yuz marta yaxshiroq" }
  ],
  full_uz: "Sen o'zingni qanday yashirishni undan yuz marta yaxshiroq bilasan.",
  note: null
},
{
  num: 101,
  time: "00:05:33,899 --> 00:05:35,639",
  arabic: "آهْ، أَنْتِ مُحِقَّةٌ",
  segs: [
    { ar: "آهْ", uz: "Ha-a" },
    { ar: "أَنْتِ مُحِقَّةٌ", uz: "sen haq ekansan" }
  ],
  full_uz: "Ha-a, sen haq ekansan.",
  note: null
},
{
  num: 102,
  time: "00:05:35,639 --> 00:05:37,340",
  arabic: "أَيَّتُهَا الْحِرْبَاءُ",
  segs: null,
  full_uz: "Ey xameleon.",
  note: null
},
{
  num: 103,
  time: "00:05:37,340 --> 00:05:40,139",
  arabic: "انْظُرِي وَتَعَلَّمِي كَيْفَ يَكُونُ الْإِخْفَاءُ",
  segs: [
    { ar: "انْظُرِي", uz: "Qara" },
    { ar: "وَتَعَلَّمِي", uz: "va o'rgan" },
    { ar: "كَيْفَ يَكُونُ الْإِخْفَاءُ", uz: "yashirinish qanday bo'lishini" }
  ],
  full_uz: "Qara va yashirinish qanday bo'lishini o'rgan.",
  note: null
}
];
if (typeof module !== "undefined" && module.exports) {
  module.exports = lessons;
}