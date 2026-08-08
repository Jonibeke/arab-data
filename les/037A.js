const lessons = [
{
  num: 2,
  time: "00:00:04,359 --> 00:00:09,519",
  arabic: "الْفِيكْسِيزُ أَصْغَرُ كَائِنَاتٍ، مَخْلُوقَاتٌ مُثِيرَةٌ",
  segs: [
    { ar: "الْفِيكْسِيزُ", uz: "Fiksiklar" },
    { ar: "أَصْغَرُ كَائِنَاتٍ", uz: "eng kichik mavjudotlardir" },
    { ar: "مَخْلُوقَاتٌ مُثِيرَةٌ", uz: "ajoyib mavjudotlar" }
  ],
  full_uz: "Fiksiklar eng kichik va ajoyib mavjudotlardir.",
  note: null
},
{
  num: 3,
  time: "00:00:09,519 --> 00:00:14,360",
  arabic: "مَهْمَا جَلَبْتَ مُكَبِّرَاتٍ صَعْبٌ رُؤْيَتُهُمْ",
  segs: [
    { ar: "مَهْمَا جَلَبْتَ", uz: "Qancha olib kelmang" },
    { ar: "مُكَبِّرَاتٍ", uz: "kattalashtiruvchi oynalarni" },
    { ar: "صَعْبٌ رُؤْيَتُهُمْ", uz: "ularni ko'rish qiyin" }
  ],
  full_uz: "Qancha kattalashtiruvchi oynalar olib kelmang, ularni ko'rish qiyin.",
  note: null
},
{
  num: 4,
  time: "00:00:14,360 --> 00:00:19,119",
  arabic: "صَغِيرَةٌ أَصْغَرُ مِنْ أَنْ تُصْغَى لَهُمْ، قَدْ تَنْفِي وُجُودَهُمْ",
  segs: [
    { ar: "صَغِيرَةٌ", uz: "Juda kichik" },
    { ar: "أَصْغَرُ مِنْ أَنْ تُصْغَى لَهُمْ", uz: "hatto ularga e'tibor berish uchun ham juda kichik" },
    { ar: "قَدْ تَنْفِي وُجُودَهُمْ", uz: "ularning mavjudligini inkor qilishing mumkin" }
  ],
  full_uz: "Ular shunchalik kichikki, hatto ularning mavjudligini inkor qilishing ham mumkin.",
  note: null
},
{
  num: 5,
  time: "00:00:19,119 --> 00:00:24,400",
  arabic: "مِنْ أَيْنَ أَتَوْا؟ مَا شَكْلُهُمْ؟ مَنْ يَعْرِفُ سِرَّهُمْ؟",
  segs: [
    { ar: "مِنْ أَيْنَ أَتَوْا", uz: "Qayerdan kelishgan" },
    { ar: "مَا شَكْلُهُمْ", uz: "qanday ko'rinishda" },
    { ar: "مَنْ يَعْرِفُ سِرَّهُمْ", uz: "ularning sirini kim biladi" }
  ],
  full_uz: "Qayerdan kelishgan? Qanday ko'rinishda? Ularning sirini kim biladi?",
  note: null
},
{
  num: 6,
  time: "00:00:24,400 --> 00:00:31,960",
  arabic: "مِنْ أَيْنَ أَتَوْا؟ مَا شَكْلُهُمْ؟ مَنْ يَعْرِفُ سِرَّهُمْ؟",
  segs: [
    { ar: "مِنْ أَيْنَ أَتَوْا", uz: "Qayerdan kelishgan" },
    { ar: "مَا شَكْلُهُمْ", uz: "qanday ko'rinishda" },
    { ar: "مَنْ يَعْرِفُ سِرَّهُمْ", uz: "ularning sirini kim biladi" }
  ],
  full_uz: "Qayerdan kelishgan? Qanday ko'rinishda? Ularning sirini kim biladi?",
  note: null
},
{
  num: 7,
  time: "00:00:34,320 --> 00:00:36,000",
  arabic: "الْمِصْبَاحُ الْيَدَوِيُّ",
  segs: [
    { ar: "الْمِصْبَاحُ الْيَدَوِيُّ", uz: "Qo'l fonari" }
  ],
  full_uz: "Qo'l fonari.",
  note: null
},
{
  num: 8,
  time: "00:00:36,000 --> 00:00:38,440",
  arabic: "أَيْنَ ذَلِكَ الشَّيْءُ؟",
  segs: [
    { ar: "أَيْنَ", uz: "Qayerda" },
    { ar: "ذَلِكَ الشَّيْءُ", uz: "o'sha narsa" }
  ],
  full_uz: "O'sha narsa qayerda?",
  note: null
},
{
  num: 9,
  time: "00:00:38,440 --> 00:00:41,800",
  arabic: "مَرْحَبًا يَا تُومُ، عَمَّا تَبْحَثُ؟",
  segs: [
    { ar: "مَرْحَبًا يَا تُومُ", uz: "Salom, Tom" },
    { ar: "عَمَّا تَبْحَثُ", uz: "nimani qidiryapsan" }
  ],
  full_uz: "Salom, Tom. Nimani qidiryapsan?",
  note: null
},
{
  num: 10,
  time: "00:00:41,800 --> 00:00:44,000",
  arabic: "عَنْ مِصْبَاحٍ",
  segs: [
    { ar: "عَنْ", uz: "..." },
    { ar: "مِصْبَاحٍ", uz: "fonarni" }
  ],
  full_uz: "Fonarni.",
  note: null
},
{
  num: 11,
  time: "00:00:44,000 --> 00:00:46,760",
  arabic: "آهْ هَا هُوَ ذَا، وَلِمَ تُرِيدُهُ؟",
  segs: [
    { ar: "آهْ هَا هُوَ ذَا", uz: "Ha, mana u" },
    { ar: "وَلِمَ", uz: "nega" },
    { ar: "تُرِيدُهُ", uz: "uni xohlayapsan" }
  ],
  full_uz: "Ha, mana u. Uni nega xohlayapsan?",
  note: null
},
{
  num: 12,
  time: "00:00:46,760 --> 00:00:48,500",
  arabic: "لِلتَّحَدُّثِ إِلَى كَاتْيَا",
  segs: [
    { ar: "لِلتَّحَدُّثِ", uz: "Gaplashish uchun" },
    { ar: "إِلَى كَاتْيَا", uz: "Katya bilan" }
  ],
  full_uz: "Katya bilan gaplashish uchun.",
  note: null
},
{
  num: 13,
  time: "00:00:48,500 --> 00:00:50,239",
  arabic: "اسْتَعْمِلِ الْهَاتِفَ",
  segs: [
    { ar: "اسْتَعْمِلْ", uz: "Ishlat" },
    { ar: "الْهَاتِفَ", uz: "telefonni" }
  ],
  full_uz: "Telefonni ishlat.",
  note: null
},
{
  num: 14,
  time: "00:00:50,239 --> 00:00:54,320",
  arabic: "هَذَا الَّذِي أَمَامَكَ مِصْبَاحٌ وَلَيْسَ هَاتِفًا",
  segs: [
    { ar: "هَذَا الَّذِي أَمَامَكَ", uz: "Oldingdagi bu narsa" },
    { ar: "مِصْبَاحٌ", uz: "fonar" },
    { ar: "وَلَيْسَ هَاتِفًا", uz: "telefon emas" }
  ],
  full_uz: "Oldingdagi bu narsa fonar, telefon emas.",
  note: null
},
{
  num: 15,
  time: "00:00:54,320 --> 00:00:58,920",
  arabic: "لَا، سَأَشْرَحُ لَكِ، ابْتَكَرْنَا أَنَا وَكَاتْيَا رُمُوزًا سِرِّيَّةً",
  segs: [
    { ar: "لَا", uz: "Yo'q" },
    { ar: "سَأَشْرَحُ لَكِ", uz: "senga tushuntiraman" },
    { ar: "ابْتَكَرْنَا", uz: "o'ylab topganmiz" },
    { ar: "أَنَا وَكَاتْيَا", uz: "men va Katya" },
    { ar: "رُمُوزًا سِرِّيَّةً", uz: "maxfiy belgilarni" }
  ],
  full_uz: "Yo'q, senga tushuntiraman. Men va Katya maxfiy belgilar o'ylab topganmiz.",
  note: null
},
{
  num: 16,
  time: "00:00:58,920 --> 00:01:00,000",
  arabic: "إِذَا أَوْمَضَ مَرَّةً وَاحِدَةً يَعْنِي مَرْحَبًا",
  segs: [
    { ar: "إِذَا أَوْمَضَ", uz: "Agar bir marta yonsa-o'chsa" },
    { ar: "مَرَّةً وَاحِدَةً", uz: "bir marta" },
    { ar: "يَعْنِي", uz: "bu degani" },
    { ar: "مَرْحَبًا", uz: "salom" }
  ],
  full_uz: "Agar bir marta yonsa-o'chsa, bu «Salom» degani.",
  note: null
},
{
  num: 17,
  time: "00:01:00,000 --> 00:01:04,000",
  arabic: "آهْ، كَاتْيَا أَيْضًا قَالَتْ مَرْحَبًا، أَلَمْ تُلَاحِظِي؟",
  segs: [
    { ar: "آهْ", uz: "Ha" },
    { ar: "كَاتْيَا أَيْضًا", uz: "Katya ham" },
    { ar: "قَالَتْ مَرْحَبًا", uz: "«salom» dedi" },
    { ar: "أَلَمْ تُلَاحِظِي", uz: "sezmadingmi" }
  ],
  full_uz: "Ha, Katya ham «Salom» dedi. Sezmadingmi?",
  note: null
},
{
  num: 18,
  time: "00:01:04,620 --> 00:01:06,920",
  arabic: "وَمْضَتَانِ، مَا مَعْنَى هَذَا؟",
  segs: [
    { ar: "وَمْضَتَانِ", uz: "Ikki marta miltillash" },
    { ar: "مَا مَعْنَى هَذَا", uz: "bu nimani anglatadi" }
  ],
  full_uz: "Ikki marta miltillash. Bu nimani anglatadi?",
  note: null
},
{
  num: 19,
  time: "00:01:06,920 --> 00:01:10,900",
  arabic: "كَاتْيَا تَسْأَلُ كَيْفَ الْحَالُ، الْآنَ سَأُخْبِرُهَا أَنَّنِي بِخَيْرٍ",
  segs: [
    { ar: "كَاتْيَا تَسْأَلُ", uz: "Katya so'rayapti" },
    { ar: "كَيْفَ الْحَالُ", uz: "ishlaring qanday" },
    { ar: "الْآنَ", uz: "hozir" },
    { ar: "سَأُخْبِرُهَا", uz: "unga aytaman" },
    { ar: "أَنَّنِي بِخَيْرٍ", uz: "yaxshiligimni" }
  ],
  full_uz: "Katya «Qalaysan?» deb so'rayapti. Hozir unga yaxshi ekanimni aytaman.",
  note: null
},
{
  num: 20,
  time: "00:01:10,900 --> 00:01:14,000",
  arabic: "آهْ، مَا خَطْبُ هَذَا؟",
  segs: [
    { ar: "آهْ", uz: "Eh" },
    { ar: "مَا خَطْبُ هَذَا", uz: "bunga nima bo'ldi" }
  ],
  full_uz: "Eh, bunga nima bo'ldi?",
  note: null
},
{
  num: 21,
  time: "00:01:15,299 --> 00:01:16,879",
  arabic: "أَظُنُّ أَنَّهُ قَدْ تَعَطَّلَ",
  segs: [
    { ar: "أَظُنُّ", uz: "Menimcha" },
    { ar: "أَنَّهُ", uz: "u" },
    { ar: "قَدْ تَعَطَّلَ", uz: "buzilib qolgan" }
  ],
  full_uz: "Menimcha, u buzilib qolgan.",
  note: null
},
{
  num: 22,
  time: "00:01:16,879 --> 00:01:19,000",
  arabic: "أَرَى ذَلِكَ يَا نُولِكْ، لَكِنْ مَا الْعُطْلُ؟",
  segs: [
    { ar: "أَرَى ذَلِكَ", uz: "Buni ko'ryapman" },
    { ar: "يَا نُولِكْ", uz: "Nolik" },
    { ar: "لَكِنْ", uz: "ammo" },
    { ar: "مَا الْعُطْلُ", uz: "nosozlik nimada" }
  ],
  full_uz: "Buni ko'ryapman, Nolik, ammo nosozlik nimada?",
  note: null
},
{
  num: 23,
  time: "00:01:20,280 --> 00:01:25,180",
  arabic: "أَيُّ مِصْبَاحٍ يَدَوِيٍّ يَكُونُ مُؤَلَّفًا مِنْ مُدَّخَرَةٍ وَمِصْبَاحٍ",
  segs: [
    { ar: "أَيُّ مِصْبَاحٍ يَدَوِيٍّ", uz: "Har qanday qo'l fonari" },
    { ar: "يَكُونُ مُؤَلَّفًا", uz: "tashkil topadi" },
    { ar: "مِنْ مُدَّخَرَةٍ", uz: "batareyadan" },
    { ar: "وَمِصْبَاحٍ", uz: "va lampochkadan" }
  ],
  full_uz: "Har qanday qo'l fonari batareya va lampochkadan tashkil topadi.",
  note: null
},
{
  num: 24,
  time: "00:01:25,180 --> 00:01:28,740",
  arabic: "مُتَّصِلَانِ بِمَجْمُوعَةٍ مِنَ الْأَسْلَاكِ بَيْنَهَا مِفْتَاحُ التَّشْغِيلِ",
  segs: [
    { ar: "مُتَّصِلَانِ", uz: "Ikkalasi ulangan" },
    { ar: "بِمَجْمُوعَةٍ مِنَ الْأَسْلَاكِ", uz: "bir guruh simlar bilan" },
    { ar: "بَيْنَهَا", uz: "ular orasida" },
    { ar: "مِفْتَاحُ التَّشْغِيلِ", uz: "yoqish tugmasi bor" }
  ],
  full_uz: "Ular simlar orqali ulangan bo'lib, ular orasida yoqish tugmasi joylashgan.",
  note: null
},
{
  num: 25,
  time: "00:01:28,739 --> 00:01:31,879",
  arabic: "لِتُشَغِّلَ كَشَّافًا عَلَيْكَ أَنْ تَقْلِبَ الْمِفْتَاحَ",
  segs: [
    { ar: "لِتُشَغِّلَ كَشَّافًا", uz: "Fonarni yoqish uchun" },
    { ar: "عَلَيْكَ أَنْ", uz: "sen" },
    { ar: "تَقْلِبَ الْمِفْتَاحَ", uz: "kalitni bosishing kerak" }
  ],
  full_uz: "Fonarni yoqish uchun kalitni bosishing kerak.",
  note: null
},
{
  num: 26,
  time: "00:01:31,879 --> 00:01:38,119",
  arabic: "وَهَذَا يَسْمَحُ لِلتَّيَّارِ الْكَهْرَبَائِيِّ بِالْعُبُورِ خِلَالَ الْأَسْلَاكِ مِنَ الْمُدَّخَرَةِ إِلَى الْمِصْبَاحِ فَيُضِيءُ",
  segs: [
    { ar: "وَهَذَا يَسْمَحُ", uz: "Bu esa imkon beradi" },
    { ar: "لِلتَّيَّارِ الْكَهْرَبَائِيِّ", uz: "elektr tokiga" },
    { ar: "بِالْعُبُورِ خِلَالَ الْأَسْلَاكِ", uz: "simlar orqali o'tishga" },
    { ar: "مِنَ الْمُدَّخَرَةِ", uz: "batareyadan" },
    { ar: "إِلَى الْمِصْبَاحِ", uz: "lampochkagacha" },
    { ar: "فَيُضِيءُ", uz: "va u yonadi" }
  ],
  full_uz: "Shunda elektr toki simlar orqali batareyadan lampochkaga o'tadi va u yonadi.",
  note: null
},
{
  num: 27,
  time: "00:01:38,119 --> 00:01:42,239",
  arabic: "أَمَّا إِذَا لَمْ يُضِئْ فَهَذَا يَعْنِي أَنَّ الْمُدَّخَرَةَ فَارِغَةٌ",
  segs: [
    { ar: "أَمَّا إِذَا لَمْ يُضِئْ", uz: "Agar yonmasa" },
    { ar: "فَهَذَا يَعْنِي", uz: "bu shuni anglatadiki" },
    { ar: "أَنَّ الْمُدَّخَرَةَ فَارِغَةٌ", uz: "batareya tugagan" }
  ],
  full_uz: "Agar yonmasa, bu batareya tugaganini anglatadi.",
  note: null
},
{
  num: 28,
  time: "00:01:42,239 --> 00:01:45,560",
  arabic: "أَوْ أَنَّ الْمِصْبَاحَ احْتَرَقَ أَوْ أَنَّ الْمِفْتَاحَ مُعَطَّلٌ",
  segs: [
    { ar: "أَوْ", uz: "Yoki" },
    { ar: "أَنَّ الْمِصْبَاحَ احْتَرَقَ", uz: "lampochka kuygan" },
    { ar: "أَوْ أَنَّ الْمِفْتَاحَ مُعَطَّلٌ", uz: "yoki kalit buzilgan" }
  ],
  full_uz: "Yoki lampochka kuygan bo'ladi, yoxud kalit buzilgan bo'ladi.",
  note: null
},
{
  num: 29,
  time: "00:01:45,560 --> 00:01:50,879",
  arabic: "وَالْآنَ لِنَجْعَلْ هَذِهِ النَّظَرِيَّةَ قَيْدَ التَّطْبِيقِ",
  segs: [
    { ar: "وَالْآنَ", uz: "Endi" },
    { ar: "لِنَجْعَلْ", uz: "keling" },
    { ar: "هَذِهِ النَّظَرِيَّةَ", uz: "bu nazariyani" },
    { ar: "قَيْدَ التَّطْبِيقِ", uz: "amalda sinab ko'ramiz" }
  ],
  full_uz: "Endi bu nazariyani amalda sinab ko'raylik.",
  note: null
},
{
  num: 30,
  time: "00:01:51,459 --> 00:01:54,199",
  arabic: "أَنَا آسِفٌ لَكِنْ لَا وَقْتَ لَدَيَّ الْآنَ",
  segs: [
    { ar: "أَنَا آسِفٌ", uz: "Kechirasiz" },
    { ar: "لَكِنْ", uz: "ammo" },
    { ar: "لَا وَقْتَ لَدَيَّ الْآنَ", uz: "hozir vaqtim yo'q" }
  ],
  full_uz: "Kechirasiz, ammo hozir vaqtim yo'q.",
  note: null
},
{
  num: 31,
  time: "00:01:54,200 --> 00:02:01,780",
  arabic: "أَلَا تُدْرِكُونَ ذَلِكَ؟ إِذَا لَمْ أَرُدَّ عَلَيْهَا فَسَتَظُنُّ أَنِّي لَا أُرِيدُ مُحَادَثَتَهَا وَهَذَا تَصَرُّفٌ فَظٌّ",
  segs: [
    { ar: "أَلَا تُدْرِكُونَ ذَلِكَ", uz: "Buni tushunmayapsizlarmi" },
    { ar: "إِذَا لَمْ أَرُدَّ عَلَيْهَا", uz: "agar unga javob bermasam" },
    { ar: "فَسَتَظُنُّ", uz: "u o'ylaydi" },
    { ar: "أَنِّي لَا أُرِيدُ مُحَادَثَتَهَا", uz: "men u bilan gaplashishni istamayapman deb" },
    { ar: "وَهَذَا تَصَرُّفٌ فَظٌّ", uz: "bu esa qo'pollik bo'ladi" }
  ],
  full_uz: "Buni tushunmayapsizlarmi? Agar unga javob bermasam, men u bilan gaplashishni istamayapman deb o'ylaydi, bu esa qo'pollik bo'ladi.",
  note: null
},
{
  num: 32,
  time: "00:02:01,780 --> 00:02:02,840",
  arabic: "لَا تَنْزَعِجْ كَثِيرًا",
  segs: [
    { ar: "لَا تَنْزَعِجْ", uz: "Bunchalik xavotir olma" },
    { ar: "كَثِيرًا", uz: "juda" }
  ],
  full_uz: "Bunchalik xavotir olma.",
  note: null
},
{
  num: 33,
  time: "00:02:02,840 --> 00:02:08,819",
  arabic: "لَا نَنْزَعِجُ، لَكِنْ أَوَّلًا نَحْتَاجُ إِلَى الْحَقِيبَةِ، وَسَنَعُودُ فِي الْحَالِ. إِلَى اللِّقَاءِ",
  segs: [
    { ar: "لَا نَنْزَعِجُ", uz: "Xavotir olma" },
    { ar: "لَكِنْ أَوَّلًا", uz: "ammo avval" },
    { ar: "نَحْتَاجُ إِلَى الْحَقِيبَةِ", uz: "sumka kerak" },
    { ar: "وَسَنَعُودُ فِي الْحَالِ", uz: "tezda qaytamiz" },
    { ar: "إِلَى اللِّقَاءِ", uz: "xayr" }
  ],
  full_uz: "Xavotir olma. Ammo avval sumka kerak, biz tezda qaytamiz. Xayr!",
  note: null
},
{
  num: 34,
  time: "00:02:08,819 --> 00:02:13,400",
  arabic: "مَاسْيَا، أَسَمِعْتِ؟ إِنَّهُ صَوْتٌ غَرِيبٌ",
  segs: [
    { ar: "مَاسْيَا", uz: "Masya" },
    { ar: "أَسَمِعْتِ", uz: "eshitdingmi" },
    { ar: "إِنَّهُ صَوْتٌ غَرِيبٌ", uz: "g'alati ovoz ekan" }
  ],
  full_uz: "Masya, eshitdingmi? G'alati ovoz ekan.",
  note: null
},
{
  num: 35,
  time: "00:02:13,400 --> 00:02:15,780",
  arabic: "هَذَا جَدِيدٌ",
  segs: [
    { ar: "هَذَا", uz: "Bu" },
    { ar: "جَدِيدٌ", uz: "yangilik" }
  ],
  full_uz: "Bu yangilik ekan.",
  note: null
},
{
  num: 36,
  time: "00:02:16,699 --> 00:02:20,819",
  arabic: "آهْ، الْآنَ عَرَفْنَا مَصْدَرَ الضَّجَّةِ",
  segs: [
    { ar: "آهْ", uz: "Ha" },
    { ar: "الْآنَ", uz: "endi" },
    { ar: "عَرَفْنَا", uz: "bildik" },
    { ar: "مَصْدَرَ الضَّجَّةِ", uz: "shovqinning manbasini" }
  ],
  full_uz: "Ha, endi shovqinning manbasini bildik.",
  note: null
},
{
  num: 37,
  time: "00:02:20,819 --> 00:02:24,939",
  arabic: "بَابُوسْ، هَلْ يُمْكِنُنَا اسْتِعْمَالُ حَقِيبَتِهِ؟",
  segs: [
    { ar: "بَابُوسْ", uz: "Babus" },
    { ar: "هَلْ يُمْكِنُنَا", uz: "bizga mumkinmi" },
    { ar: "اسْتِعْمَالُ حَقِيبَتِهِ", uz: "uning sumkasidan foydalanish" }
  ],
  full_uz: "Babus, uning sumkasidan foydalansak bo'ladimi?",
  note: null
},
{
  num: 38,
  time: "00:02:24,939 --> 00:02:26,500",
  arabic: "لِنُصْلِحَ مِصْبَاحًا يَدَوِيًّا",
  segs: [
    { ar: "لِنُصْلِحَ", uz: "Ta'mirlash uchun" },
    { ar: "مِصْبَاحًا يَدَوِيًّا", uz: "qo'l fonarini" }
  ],
  full_uz: "Qo'l fonarini ta'mirlash uchun.",
  note: null
},
{
  num: 39,
  time: "00:02:26,500 --> 00:02:28,599",
  arabic: "هَلْ ذَكَرْتِ مِصْبَاحًا يَدَوِيًّا؟",
  segs: [
    { ar: "هَلْ ذَكَرْتِ", uz: "Sen aytdingmi" },
    { ar: "مِصْبَاحًا يَدَوِيًّا", uz: "qo'l fonarini" }
  ],
  full_uz: "Qo'l fonari dedingmi?",
  note: null
},
{
  num: 40,
  time: "00:02:28,599 --> 00:02:33,459",
  arabic: "آهْ، أَتَذْكُرَانِ قِصَّةَ جَدِّنَا الْأَكْبَرِ عِنْدَمَا سَافَرَ أَمْيَالًا عَلَى ظَهْرِ كَلْبٍ؟",
  segs: [
    { ar: "أَتَذْكُرَانِ", uz: "Eslaysizlarmi" },
    { ar: "قِصَّةَ جَدِّنَا الْأَكْبَرِ", uz: "katta bobomizning hikoyasini" },
    { ar: "عِنْدَمَا سَافَرَ", uz: "u safar qilganida" },
    { ar: "أَمْيَالًا", uz: "millar davomida" },
    { ar: "عَلَى ظَهْرِ كَلْبٍ", uz: "itning ustida" }
  ],
  full_uz: "Katta bobomizning itning ustida millar davomida safar qilgani haqidagi hikoyani eslaysizlarmi?",
  note: null
},
{
  num: 41,
  time: "00:02:33,459 --> 00:02:36,579",
  arabic: "إِنَّهَا حَقِيقِيَّةٌ، كَانَتِ الْمُهِمَّةُ كَبِيرَةً جِدًّا",
  segs: [
    { ar: "إِنَّهَا حَقِيقِيَّةٌ", uz: "Bu haqiqiy voqea" },
    { ar: "كَانَتِ الْمُهِمَّةُ", uz: "Vazifa" },
    { ar: "كَبِيرَةً جِدًّا", uz: "juda muhim edi" }
  ],
  full_uz: "Bu haqiqiy voqea. Vazifa juda muhim edi.",
  note: null
},
{
  num: 42,
  time: "00:02:36,579 --> 00:02:38,120",
  arabic: "إِصْلَاحُ مِصْبَاحٍ كَبِيرٍ",
  segs: [
    { ar: "إِصْلَاحُ", uz: "Ta'mirlash" },
    { ar: "مِصْبَاحٍ كَبِيرٍ", uz: "katta chiroqni" }
  ],
  full_uz: "Katta chiroqni ta'mirlash.",
  note: null
},
{
  num: 43,
  time: "00:02:38,120 --> 00:02:39,819",
  arabic: "وَمَا هَذَا الْمِصْبَاحُ؟",
  segs: [
    { ar: "وَمَا", uz: "Xo'sh" },
    { ar: "هَذَا الْمِصْبَاحُ", uz: "bu qanday chiroq" }
  ],
  full_uz: "Xo'sh, bu qanday chiroq?",
  note: null
},
{
  num: 44,
  time: "00:02:39,819 --> 00:02:41,740",
  arabic: "نَوْعٌ مُمَيَّزٌ يُدْعَى بِالْمَنَارَةِ",
  segs: [
    { ar: "نَوْعٌ مُمَيَّزٌ", uz: "Maxsus turi" },
    { ar: "يُدْعَى", uz: "deb ataladi" },
    { ar: "بِالْمَنَارَةِ", uz: "mayoq" }
  ],
  full_uz: "Bu mayoq deb ataladigan maxsus turdagi chiroq.",
  note: null
},
{
  num: 45,
  time: "00:02:41,740 --> 00:02:48,259",
  arabic: "الْمَنَارَةُ هِيَ بِنَاءٌ طَوِيلٌ بِكَشَّافَاتٍ كَبِيرَةٍ عَلَى قِمَّتِهِ",
  segs: [
    { ar: "الْمَنَارَةُ", uz: "Mayoq" },
    { ar: "هِيَ بِنَاءٌ طَوِيلٌ", uz: "baland inshootdir" },
    { ar: "بِكَشَّافَاتٍ كَبِيرَةٍ", uz: "katta projektorlarga ega" },
    { ar: "عَلَى قِمَّتِهِ", uz: "uning tepasida" }
  ],
  full_uz: "Mayoq — tepasida katta projektorlari bo'lgan baland inshootdir.",
  note: null
},
{
  num: 46,
  time: "00:02:48,259 --> 00:02:51,659",
  arabic: "وَتُسْتَعْمَلُ لِمُسَاعَدَةِ السُّفُنِ لِمَعْرِفَةِ وِجْهَتِهَا",
  segs: [
    { ar: "وَتُسْتَعْمَلُ", uz: "U ishlatiladi" },
    { ar: "لِمُسَاعَدَةِ السُّفُنِ", uz: "kemalarga yordam berish uchun" },
    { ar: "لِمَعْرِفَةِ وِجْهَتِهَا", uz: "yo'nalishini topishda" }
  ],
  full_uz: "U kemalarga o'z yo'nalishini topishda yordam berish uchun ishlatiladi.",
  note: null
},
{
  num: 47,
  time: "00:02:51,659 --> 00:02:54,819",
  arabic: "لَقَدِ اسْتَعْمَلَ الْبَشَرُ الْمَنَارَةَ مُنْذُ الْعُصُورِ الْقَدِيمَةِ",
  segs: [
    { ar: "لَقَدِ اسْتَعْمَلَ الْبَشَرُ", uz: "Insonlar foydalanishgan" },
    { ar: "الْمَنَارَةَ", uz: "mayoqdan" },
    { ar: "مُنْذُ الْعُصُورِ الْقَدِيمَةِ", uz: "qadim zamonlardan beri" }
  ],
  full_uz: "Insonlar mayoqdan qadim zamonlardan beri foydalanib kelishadi.",
  note: null
},
{
  num: 48,
  time: "00:02:54,819 --> 00:02:58,120",
  arabic: "وَأَشْهَرُ مَنَارَةٍ يَذْكُرُهَا النَّاسُ هِيَ مَنَارَةُ الْإِسْكَنْدَرِيَّةِ",
  segs: [
    { ar: "وَأَشْهَرُ مَنَارَةٍ", uz: "Eng mashhur mayoq" },
    { ar: "يَذْكُرُهَا النَّاسُ", uz: "odamlar tilga oladigan" },
    { ar: "هِيَ مَنَارَةُ الْإِسْكَنْدَرِيَّةِ", uz: "Iskandariya mayog'idir" }
  ],
  full_uz: "Odamlar tilga oladigan eng mashhur mayoq — Iskandariya mayog'idir.",
  note: null
},
{
  num: 49,
  time: "00:02:58,120 --> 00:03:01,560",
  arabic: "وَقَدْ بَنَاهَا الْمِصْرِيُّونَ قَبْلَ أَكْثَرَ مِنْ أَلْفَيْ عَامٍ",
  segs: [
    { ar: "وَقَدْ بَنَاهَا", uz: "Uni qurishgan" },
    { ar: "الْمِصْرِيُّونَ", uz: "misrliklar" },
    { ar: "قَبْلَ أَكْثَرَ مِنْ أَلْفَيْ عَامٍ", uz: "ikki ming yildan ham oldin" }
  ],
  full_uz: "Uni misrliklar ikki ming yildan ham oldin qurishgan.",
  note: null
},
{
  num: 50,
  time: "00:03:01,560 --> 00:03:04,519",
  arabic: "وَكَانَ طُولُهَا أَكْثَرَ مِنْ مِائَةِ مِتْرٍ",
  segs: [
    { ar: "وَكَانَ طُولُهَا", uz: "Uning balandligi" },
    { ar: "أَكْثَرَ مِنْ مِائَةِ مِتْرٍ", uz: "yuz metrdan ortiq edi" }
  ],
  full_uz: "Uning balandligi yuz metrdan ortiq edi.",
  note: null
},
{
  num: 51,
  time: "00:03:04,519 --> 00:03:09,199",
  arabic: "وَعَدَّ الْإِغْرِيقِيُّونَ الْقُدَمَاءُ هَذِهِ الْمَنَارَةَ وَاحِدَةً مِنْ عَجَائِبِ الدُّنْيَا السَّبْعِ",
  segs: [
    { ar: "وَعَدَّ", uz: "deb hisoblashgan" },
    { ar: "الْإِغْرِيقِيُّونَ الْقُدَمَاءُ", uz: "qadimgi yunonlar" },
    { ar: "هَذِهِ الْمَنَارَةَ", uz: "bu mayoqni" },
    { ar: "وَاحِدَةً مِنْ عَجَائِبِ الدُّنْيَا السَّبْعِ", uz: "dunyoning yetti moʻjizasidan biri" }
  ],
  full_uz: "Qadimgi yunonlar bu mayoqni dunyoning yetti moʻjizasidan biri deb hisoblashgan.",
  note: null
},
{
  num: 52,
  time: "00:03:09,199 --> 00:03:13,699",
  arabic: "وَفِي الْعُصُورِ الْقَدِيمَةِ كَانَ النَّاسُ يُشْعِلُونَ النَّارَ عَلَى قِمَّةِ الْمَنَارَةِ",
  segs: [
    { ar: "وَفِي الْعُصُورِ الْقَدِيمَةِ", uz: "Qadim zamonlarda" },
    { ar: "كَانَ النَّاسُ يُشْعِلُونَ", uz: "odamlar yoqishardi" },
    { ar: "النَّارَ", uz: "olovni" },
    { ar: "عَلَى قِمَّةِ الْمَنَارَةِ", uz: "mayoqning tepasida" }
  ],
  full_uz: "Qadim zamonlarda odamlar mayoqning tepasida olov yoqishardi.",
  note: null
},
{
  num: 53,
  time: "00:03:13,699 --> 00:03:17,599",
  arabic: "أَمَّا الْيَوْمَ فَالضَّوْءُ يَأْتِي مِنْ كَشَّافَاتٍ كَهْرَبَائِيَّةٍ قَوِيَّةٍ",
  segs: [
    { ar: "أَمَّا الْيَوْمَ", uz: "Bugungi kunda esa" },
    { ar: "الضَّوْءُ يَأْتِي", uz: "yorug'lik keladi" },
    { ar: "مِنْ كَشَّافَاتٍ كَهْرَبَائِيَّةٍ قَوِيَّةٍ", uz: "kuchli elektr projektorlaridan" }
  ],
  full_uz: "Bugungi kunda esa yorugʻlik kuchli elektr projektorlaridan chiqadi.",
  note: null
},
{
  num: 54,
  time: "00:03:17,599 --> 00:03:21,620",
  arabic: "لَا يَكْتَفِي كَثِيرٌ مِنَ الْمَنَارَاتِ الْيَوْمَ بِإِصْدَارِ الضَّوْءِ وَحْدَهُ",
  segs: [
    { ar: "لَا يَكْتَفِي", uz: "Cheklanmaydi" },
    { ar: "كَثِيرٌ مِنَ الْمَنَارَاتِ الْيَوْمَ", uz: "bugungi mayoqlarning ko'pi" },
    { ar: "بِإِصْدَارِ الضَّوْءِ وَحْدَهُ", uz: "faqat yorug'lik chiqarish bilan" }
  ],
  full_uz: "Bugungi mayoqlarning ko‘pi faqat yorug‘lik chiqarish bilangina cheklanmaydi.",
  note: null
},
{
  num: 55,
  time: "00:03:21,620 --> 00:03:24,719",
  arabic: "بَلْ تُصْدِرُ إِشَارَاتٍ مَوْجِيَّةً أَيْضًا",
  segs: [
    { ar: "بَلْ", uz: "Balki" },
    { ar: "تُصْدِرُ", uz: "uzatadi" },
    { ar: "إِشَارَاتٍ مَوْجِيَّةً", uz: "radio signallarini" },
    { ar: "أَيْضًا", uz: "ham" }
  ],
  full_uz: "Balki radio signallarini ham uzatadi.",
  note: null
},
{
  num: 56,
  time: "00:03:24,719 --> 00:03:25,079",
  arabic: "أَجَلْ",
  segs: [
    { ar: "أَجَلْ", uz: "Ha" }
  ],
  full_uz: "Ha.",
  note: null
},
{
  num: 57,
  time: "00:03:25,079 --> 00:03:32,060",
  arabic: "وَبِفَضْلِ الْمَنَارَاتِ تَسْتَطِيعُ الطَّائِرَاتُ وَالسُّفُنُ الْيَوْمَ أَنْ تَعْرِفَ وِجْهَتَهَا مِنْ عَلَى بُعْدِ أَمْيَالٍ حَتَّى تَبْقَى فِي أَمَانٍ",
  segs: [
    { ar: "وَبِفَضْلِ الْمَنَارَاتِ", uz: "Mayoqlar tufayli" },
    { ar: "تَسْتَطِيعُ الطَّائِرَاتُ وَالسُّفُنُ", uz: "samolyotlar va kemalar" },
    { ar: "أَنْ تَعْرِفَ وِجْهَتَهَا", uz: "yo'nalishini aniqlay oladi" },
    { ar: "مِنْ عَلَى بُعْدِ أَمْيَالٍ", uz: "bir necha mil uzoqlikdan" },
    { ar: "حَتَّى تَبْقَى فِي أَمَانٍ", uz: "xavfsiz qolishi uchun" }
  ],
  full_uz: "Mayoqlar tufayli samolyotlar va kemalar bugun bir necha mil uzoqlikdan ham o‘z yo‘nalishini aniqlab, xavfsiz harakatlana oladi.",
  note: null
},
{
  num: 58,
  time: "00:03:32,060 --> 00:03:37,099",
  arabic: "وَبِفَضْلِ أَعْمَالِ جَدِّكُمُ الْبُطُولِيَّةِ",
  segs: [
    { ar: "وَبِفَضْلِ", uz: "Va tufayli" },
    { ar: "أَعْمَالِ جَدِّكُمُ", uz: "bobongizning ishlari" },
    { ar: "الْبُطُولِيَّةِ", uz: "qahramonona" }
  ],
  full_uz: "Va bobongizning qahramonona ishlari tufayli...",
  note: null
},
{
  num: 59,
  time: "00:03:37,099 --> 00:03:39,680",
  arabic: "بَدَأَتْ تِلْكَ الْمَنَارَةُ بِالْعَمَلِ",
  segs: [
    { ar: "بَدَأَتْ", uz: "ishga tushdi" },
    { ar: "تِلْكَ الْمَنَارَةُ", uz: "o'sha mayoq" },
    { ar: "بِالْعَمَلِ", uz: "ishlashni" }
  ],
  full_uz: "O‘sha mayoq ishlay boshlagan.",
  note: null
},
{
  num: 60,
  time: "00:03:39,680 --> 00:03:43,819",
  arabic: "وَمُنْذُ ذَلِكَ الْوَقْتِ لَمْ تَضِعْ أَيُّ سَفِينَةٍ",
  segs: [
    { ar: "وَمُنْذُ ذَلِكَ الْوَقْتِ", uz: "O'sha vaqtdan beri" },
    { ar: "لَمْ تَضِعْ", uz: "adashmagan" },
    { ar: "أَيُّ سَفِينَةٍ", uz: "birorta ham kema" }
  ],
  full_uz: "O‘sha vaqtdan beri birorta ham kema adashmagan.",
  note: null
},
{
  num: 61,
  time: "00:03:43,819 --> 00:03:45,419",
  arabic: "سِيمْكَا",
  segs: [
    { ar: "سِيمْكَا", uz: "Simka" }
  ],
  full_uz: "Simka.",
  note: null
},
{
  num: 62,
  time: "00:03:45,419 --> 00:03:49,299",
  arabic: "مَا رَأْيُكِ أَنْ لَا نَكْتَفِيَ بِإِصْلَاحِ الْمِصْبَاحِ وَحْدَهُ",
  segs: [
    { ar: "مَا رَأْيُكِ", uz: "Nima deysan" },
    { ar: "أَنْ لَا نَكْتَفِيَ", uz: "faqat bilan cheklanmaylik" },
    { ar: "بِإِصْلَاحِ الْمِصْبَاحِ", uz: "chiroqni tuzatish" },
    { ar: "وَحْدَهُ", uz: "xolos" }
  ],
  full_uz: "Nima deysan, faqat chiroqni tuzatish bilangina cheklanmaylik?",
  note: null
},
{
  num: 63,
  time: "00:03:49,299 --> 00:03:51,019",
  arabic: "وَأَنْ نَفْعَلَ أَمْرًا بُطُولِيًّا",
  segs: [
    { ar: "وَأَنْ نَفْعَلَ", uz: "va qilaylik" },
    { ar: "أَمْرًا بُطُولِيًّا", uz: "qahramonona bir ish" }
  ],
  full_uz: "Va qahramonona bir ish qilaylik.",
  note: null
},
{
  num: 64,
  time: "00:03:51,019 --> 00:03:52,539",
  arabic: "كَمَا فَعَلَ جَدُّنَا؟",
  segs: [
    { ar: "كَمَا", uz: "xuddi" },
    { ar: "فَعَلَ", uz: "qilgandek" },
    { ar: "جَدُّنَا", uz: "bobomiz" }
  ],
  full_uz: "Xuddi bobomiz qilgandekmi?",
  note: null
},
{
  num: 65,
  time: "00:03:52,539 --> 00:03:52,819",
  arabic: "آه",
  segs: [
    { ar: "آه", uz: "Ha" }
  ],
  full_uz: "Ha.",
  note: null
},
{
  num: 66,
  time: "00:03:52,819 --> 00:03:55,560",
  arabic: "حَسَنًا، مَا رَأْيُكَ؟",
  segs: [
    { ar: "حَسَنًا", uz: "Mayli" },
    { ar: "مَا رَأْيُكَ", uz: "nima deysan" }
  ],
  full_uz: "Mayli, nima deysan?",
  note: null
},
{
  num: 67,
  time: "00:03:55,560 --> 00:03:57,919",
  arabic: "لِنَقْفِزْ عَلَى ظَهْرِ هَذَا الْكَلْبِ وَنَنْطَلِقْ",
  segs: [
    { ar: "لِنَقْفِزْ", uz: "Sakraylik" },
    { ar: "عَلَى ظَهْرِ هَذَا الْكَلْبِ", uz: "mana bu itning ustiga" },
    { ar: "وَنَنْطَلِقْ", uz: "va yo'lga chiqaylik" }
  ],
  full_uz: "Keling, mana bu itning ustiga sakrab, yo'lga chiqaylik.",
  note: null
},
{
  num: 68,
  time: "00:03:57,919 --> 00:04:08,379",
  arabic: "تَوَقَّفْ، الْآنَ أَمْسِكْ بِيَدِي",
  segs: [
    { ar: "تَوَقَّفْ", uz: "To'xta" },
    { ar: "الْآنَ", uz: "endi" },
    { ar: "أَمْسِكْ بِيَدِي", uz: "qo'limni ushla" }
  ],
  full_uz: "To'xta, endi qo'limni ushla.",
  note: null
},
{
  num: 70,
  time: "00:04:45,420 --> 00:05:04,200",
  arabic: "شُوسَاكَا اخْرُجِي فِي الْحَالِ",
  segs: [
    { ar: "شُوسَاكَا", uz: "Shusaka" },
    { ar: "اخْرُجِي", uz: "chiq" },
    { ar: "فِي الْحَالِ", uz: "darhol" }
  ],
  full_uz: "Shusaka, darhol chiq!",
  note: null
},
{
  num: 71,
  time: "00:05:04,200 --> 00:05:05,560",
  arabic: "هَيَّا اخْرُجِي بِسُرْعَةٍ",
  segs: [
    { ar: "هَيَّا", uz: "Qani" },
    { ar: "اخْرُجِي", uz: "chiq" },
    { ar: "بِسُرْعَةٍ", uz: "tezroq" }
  ],
  full_uz: "Qani, tezroq chiq!",
  note: null
},
{
  num: 72,
  time: "00:05:05,560 --> 00:05:09,379",
  arabic: "تِدِيش",
  segs: [
    { ar: "تِدِيش", uz: "Tidish!" }
  ],
  full_uz: "Tidish!",
  note: null
},
{
  num: 73,
  time: "00:05:09,379 --> 00:05:12,740",
  arabic: "لَقَدْ كَانَ عَمَلًا بُطُولِيًّا حَقًّا",
  segs: [
    { ar: "لَقَدْ كَانَ", uz: "Bu bo'ldi" },
    { ar: "عَمَلًا بُطُولِيًّا", uz: "qahramonona ish" },
    { ar: "حَقًّا", uz: "rostdan ham" }
  ],
  full_uz: "Bu rostdan ham qahramonona ish bo'ldi.",
  note: null
},
{
  num: 74,
  time: "00:05:12,740 --> 00:05:15,160",
  arabic: "وَالْآنَ حَانَ الْوَقْتُ لِنُصْلِحَ تِلْكَ الْمَنَارَةَ",
  segs: [
    { ar: "وَالْآنَ", uz: "Endi esa" },
    { ar: "حَانَ الْوَقْتُ", uz: "vaqti keldi" },
    { ar: "لِنُصْلِحَ", uz: "tuzatishimizga" },
    { ar: "تِلْكَ الْمَنَارَةَ", uz: "o'sha mayoqni" }
  ],
  full_uz: "Endi o‘sha mayoqni tuzatish vaqti keldi.",
  note: null
},
{
  num: 75,
  time: "00:05:15,160 --> 00:05:17,540",
  arabic: "هَيَّا يَا تُومُ، سَلِّمْنَا الْمَنَارَةَ",
  segs: [
    { ar: "هَيَّا يَا تُومُ", uz: "Qani, Tom" },
    { ar: "سَلِّمْنَا", uz: "bizga ber" },
    { ar: "الْمَنَارَةَ", uz: "mayoqni" }
  ],
  full_uz: "Qani, Tom, mayoqni bizga ber.",
  note: null
},
{
  num: 76,
  time: "00:05:17,540 --> 00:05:18,700",
  arabic: "أَيُّ مَنَارَةٍ؟",
  segs: [
    { ar: "أَيُّ", uz: "Qaysi" },
    { ar: "مَنَارَةٍ", uz: "mayoq" }
  ],
  full_uz: "Qaysi mayoq?",
  note: null
},
{
  num: 77,
  time: "00:05:18,700 --> 00:05:19,820",
  arabic: "مِصْبَاحُكَ الْيَدَوِيُّ",
  segs: [
    { ar: "مِصْبَاحُكَ", uz: "Sening chirog'ing" },
    { ar: "الْيَدَوِيُّ", uz: "qo'l chirog'i" }
  ],
  full_uz: "Qo‘l chirog‘ing.",
  note: null
},
{
  num: 78,
  time: "00:05:19,820 --> 00:05:21,800",
  arabic: "آه، لَا أَحْتَاجُ إِلَيْهِ",
  segs: [
    { ar: "آه", uz: "Ha" },
    { ar: "لَا أَحْتَاجُ", uz: "menga kerak emas" },
    { ar: "إِلَيْهِ", uz: "u" }
  ],
  full_uz: "Ha, u menga endi kerak emas.",
  note: null
},
{
  num: 79,
  time: "00:05:21,800 --> 00:05:23,480",
  arabic: "مَا الَّذِي تَعْنِيهِ بِهَذَا؟",
  segs: [
    { ar: "مَا الَّذِي", uz: "Nimani" },
    { ar: "تَعْنِيهِ", uz: "nazarda tutyapsan" },
    { ar: "بِهَذَا", uz: "bilan" }
  ],
  full_uz: "Bu bilan nimani nazarda tutyapsan?",
  note: null
},
{
  num: 80,
  time: "00:05:23,480 --> 00:05:26,500",
  arabic: "لَكِنْ كَيْفَ سَتَسْتَطِيعُ أَنْ تَتَحَدَّثَ إِلَى كَاتْيَا؟",
  segs: [
    { ar: "لَكِنْ", uz: "Lekin" },
    { ar: "كَيْفَ", uz: "qanday" },
    { ar: "سَتَسْتَطِيعُ", uz: "qila olasan" },
    { ar: "أَنْ تَتَحَدَّثَ", uz: "gaplashishni" },
    { ar: "إِلَى كَاتْيَا", uz: "Katya bilan" }
  ],
  full_uz: "Lekin Katya bilan qanday gaplasha olasan?",
  note: null
},
{
  num: 81,
  time: "00:05:26,500 --> 00:05:28,340",
  arabic: "لَقَدْ كَلَّمْتُهَا، انْظُرَا",
  segs: [
    { ar: "لَقَدْ كَلَّمْتُهَا", uz: "Men u bilan gaplashib bo'ldim" },
    { ar: "انْظُرَا", uz: "qaranglar" }
  ],
  full_uz: "Men u bilan gaplashib bo'ldim, qaranglar.",
  note: null
},
{
  num: 82,
  time: "00:05:28,340 --> 00:05:33,120",
  arabic: "لَا، هَذَا لَمْ يَكُنْ اتِّفَاقَنَا",
  segs: [
    { ar: "لَا", uz: "Yo'q" },
    { ar: "هَذَا", uz: "bu" },
    { ar: "لَمْ يَكُنْ", uz: "emas edi" },
    { ar: "اتِّفَاقَنَا", uz: "kelishuvimiz" }
  ],
  full_uz: "Yo'q, bu bizning kelishuvimiz emas edi.",
  note: null
},
{
  num: 83,
  time: "00:05:33,120 --> 00:05:37,540",
  arabic: "أَجَلْ، أَتَقُولُ إِنَّ أَعْمَالَنَا الْبُطُولِيَّةَ كَانَتْ بِلَا فَائِدَةٍ؟",
  segs: [
    { ar: "أَجَلْ", uz: "Ha" },
    { ar: "أَتَقُولُ", uz: "aytmoqchimisan" },
    { ar: "إِنَّ أَعْمَالَنَا الْبُطُولِيَّةَ", uz: "qahramonona ishlarimiz" },
    { ar: "كَانَتْ بِلَا فَائِدَةٍ", uz: "behuda bo'lganini" }
  ],
  full_uz: "Ha, qahramonona ishlarimiz behuda bo'lganini aytmoqchimisan?",
  note: null
},
{
  num: 84,
  time: "00:05:37,540 --> 00:05:41,220",
  arabic: "إِذَا كَانَ عَمَلًا بُطُولِيًّا، فَأَصْلِحَاهُ فِي الْحَالِ",
  segs: [
    { ar: "إِذَا كَانَ", uz: "Agar u" },
    { ar: "عَمَلًا بُطُولِيًّا", uz: "qahramonona ish bo'lsa" },
    { ar: "فَأَصْلِحَاهُ", uz: "uni tuzatinglar" },
    { ar: "فِي الْحَالِ", uz: "darhol" }
  ],
  full_uz: "Agar bu qahramonona ish bo'lsa, uni darhol tuzatinglar.",
  note: null
},
{
  num: 85,
  time: "00:05:41,220 --> 00:05:43,540",
  arabic: "مَرْحِي",
  segs: [
    { ar: "مَرْحِي", uz: "Marhi!" }
  ],
  full_uz: "Marhi!",
  note: null
}
];
if (typeof module !== "undefined" && module.exports) {
  module.exports = lessons;
}