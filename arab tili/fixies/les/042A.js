const lessons = [
    {
  num: 1,
  time: "00:00:04,359 --> 00:00:09,519",
  arabic: "ٱلْفِيكْسِيزُ أَصْغَرُ ٱلْكَائِنَاتِ، مَخْلُوقَاتٌ مُثِيرَةٌ.",
  segs: [
    { ar: "ٱلْفِيكْسِيزُ أَصْغَرُ ٱلْكَائِنَاتِ", uz: "Fiksilar eng kichik mavjudotlardir" },
    { ar: "مَخْلُوقَاتٌ مُثِيرَةٌ", uz: "qiziqarli jonzotlardir." }
  ],
  full_uz: "Fiksilar eng kichik va qiziqarli jonzotlardir.",
  note: null
},
{
  num: 2,
  time: "00:00:09,519 --> 00:00:14,360",
  arabic: "مَهْمَا جَلَبْتَ مِنْ مُكَبِّرَاتٍ، يَصْعُبُ رُؤْيَتُهُمْ.",
  segs: [
    { ar: "مَهْمَا جَلَبْتَ مِنْ مُكَبِّرَاتٍ", uz: "Qancha kattalashtirgich olib kelsang ham" },
    { ar: "يَصْعُبُ رُؤْيَتُهُمْ", uz: "ularni ko'rish qiyin." }
  ],
  full_uz: "Qancha kattalashtirgich olib kelsang ham, ularni ko'rish qiyin.",
  note: "OCR xatosi tuzatildi."
},
{
  num: 3,
  time: "00:00:14,360 --> 00:00:19,119",
  arabic: "صَغِيرَةٌ، أَصْغَرُ مِنْ أَنْ تُصْغِيَ لَهُمْ، قَدْ تَنْفِي وُجُودَهُمْ.",
  segs: [
    { ar: "صَغِيرَةٌ", uz: "Juda kichik" },
    { ar: "أَصْغَرُ مِنْ أَنْ تُصْغِيَ لَهُمْ", uz: "ularni eshitishdan ham kichikroq" },
    { ar: "قَدْ تَنْفِي وُجُودَهُمْ", uz: "hatto ularning mavjudligini inkor qilishing mumkin." }
  ],
  full_uz: "Ular shunchalik kichikki, hatto ularni eshitishning ham iloji yo'q, hatto mavjudligini inkor qilishing mumkin.",
  note: null
},
{
  num: 4,
  time: "00:00:19,119 --> 00:00:24,400",
  arabic: "مِنْ أَيْنَ أَتَوْا؟ مَا شَكْلُهُمْ؟ مَنْ يَعْرِفُ سِرَّهُمْ؟",
  segs: [
    { ar: "مِنْ أَيْنَ أَتَوْا؟", uz: "Ular qayerdan kelishgan?" },
    { ar: "مَا شَكْلُهُمْ؟", uz: "Ularning ko'rinishi qanday?" },
    { ar: "مَنْ يَعْرِفُ سِرَّهُمْ؟", uz: "Ularning sirini kim biladi?" }
  ],
  full_uz: "Ular qayerdan kelishgan? Ularning ko'rinishi qanday? Ularning sirini kim biladi?",
  note: null
},
{
  num: 5,
  time: "00:00:24,400 --> 00:00:31,960",
  arabic: "مِنْ أَيْنَ أَتَوْا؟ مَا شَكْلُهُمْ؟ مَنْ يَعْرِفُ سِرَّهُمْ؟",
  segs: [
    { ar: "مِنْ أَيْنَ أَتَوْا؟", uz: "Ular qayerdan kelishgan?" },
    { ar: "مَا شَكْلُهُمْ؟", uz: "Ularning ko'rinishi qanday?" },
    { ar: "مَنْ يَعْرِفُ سِرَّهُمْ؟", uz: "Ularning sirini kim biladi?" }
  ],
  full_uz: "Ular qayerdan kelishgan? Ularning ko'rinishi qanday? Ularning sirini kim biladi?",
  note: null
},
{
  num: 6,
  time: "00:00:33,520 --> 00:00:36,559",
  arabic: "صُنْدُوقُ ٱلْمُوسِيقَى.",
  segs: [
    { ar: "صُنْدُوقُ", uz: "Quti" },
    { ar: "ٱلْمُوسِيقَى", uz: "musiqa." }
  ],
  full_uz: "Musiqa qutisi.",
  note: null
},
{
  num: 7,
  time: "00:00:46,559 --> 00:00:56,200",
  arabic: "وَعِنْدَمَا بَدَأَ ٱلْعَازِفُ ٱلْمُنْقِذُ بِٱلْعَزْفِ بِٱلنَّايِ ٱلْعَجِيبِ.",
  segs: [
    { ar: "وَعِنْدَمَا بَدَأَ", uz: "Va qachonki boshlaganida" },
    { ar: "ٱلْعَازِفُ ٱلْمُنْقِذُ", uz: "qutqaruvchi naychi" },
    { ar: "بِٱلْعَزْفِ بِٱلنَّايِ ٱلْعَجِيبِ", uz: "ajoyib nayni chalishni." }
  ],
  full_uz: "Qutqaruvchi naychi ajoyib nayni chala boshlaganida.",
  note: null
},
{
  num: 8,
  time: "00:00:56,200 --> 00:01:08,400",
  arabic: "خَرَجَتِ ٱلْجِرْذَانُ مِنْ جُحُورِهَا وَتَبِعَتْهُ، وَلَمْ يَرَهَا أَحَدٌ فِي هَامِلِين بَعْدَ ذَلِكَ قَطُّ.",
  segs: [
    { ar: "خَرَجَتِ ٱلْجِرْذَانُ مِنْ جُحُورِهَا", uz: "Kalamushlar inlaridan chiqishdi" },
    { ar: "وَتَبِعَتْهُ", uz: "unga ergashishdi" },
    { ar: "وَلَمْ يَرَهَا أَحَدٌ فِي هَامِلِين بَعْدَ ذَلِكَ قَطُّ", uz: "shundan keyin ularni Hamelinda hech kim boshqa ko'rmadi." }
  ],
  full_uz: "Kalamushlar inlaridan chiqib unga ergashishdi va shundan keyin ularni Hamelinda hech kim boshqa ko'rmadi.",
  note: "«هَامِلِين» — Hamelin shahri."
},
{
  num: 9,
  time: "00:01:08,400 --> 00:01:11,700",
  arabic: "وَمَاذَا بَعْدَهَا؟",
  segs: null,
  full_uz: "Keyin nima bo'ldi?",
  note: null
},
{
  num: 10,
  time: "00:01:11,700 --> 00:01:15,120",
  arabic: "لَمْ أَعُدْ أَسْتَطِيعُ ٱلْقِرَاءَةَ، فَقَدْ تَعِبَتْ قَدَمِي.",
  segs: [
    { ar: "لَمْ أَعُدْ أَسْتَطِيعُ ٱلْقِرَاءَةَ", uz: "Endi o'qiy olmayman" },
    { ar: "فَقَدْ تَعِبَتْ قَدَمِي", uz: "oyog'im charchadi." }
  ],
  full_uz: "Endi o'qiy olmayman, oyog'im charchadi.",
  note: null
},
{
  num: 11,
  time: "00:01:15,120 --> 00:01:19,859",
  arabic: "سِيمْكَا، نُولِكْ، شَيْءٌ مَا يُصْدِرُ صَوْتًا هُنَا.",
  segs: [
    { ar: "سِيمْكَا، نُولِكْ", uz: "Simka, Nolik" },
    { ar: "شَيْءٌ مَا يُصْدِرُ صَوْتًا هُنَا", uz: "bu yerda qandaydir narsa ovoz chiqaryapti." }
  ],
  full_uz: "Simka, Nolik, bu yerda qandaydir narsa ovoz chiqaryapti.",
  note: null
},
{
  num: 12,
  time: "00:01:19,859 --> 00:01:21,200",
  arabic: "أَيْنَ؟",
  segs: null,
  full_uz: "Qayerda?",
  note: null
},
{
  num: 13,
  time: "00:01:21,200 --> 00:01:23,060",
  arabic: "فِي مَكْتَبِ وَالِدِي.",
  segs: null,
  full_uz: "Otamning ish xonasida.",
  note: "«مكتب» bu yerda 'ish xonasi' ma'nosida."
},
{
  num: 14,
  time: "00:01:23,060 --> 00:01:24,140",
  arabic: "عَلَى مَكْتَبِهِ.",
  segs: null,
  full_uz: "Uning stoli ustida.",
  note: "Bu yerda «مكتب» — yozuv stoli ma'nosida."
},
{
  num: 15,
  time: "00:01:24,140 --> 00:01:26,180",
  arabic: "إِنَّهُ دَاخِلَ ٱلْعُلْبَةِ ٱلْخَشَبِيَّةِ.",
  segs: [
    { ar: "إِنَّهُ دَاخِلَ", uz: "U" },
    { ar: "ٱلْعُلْبَةِ ٱلْخَشَبِيَّةِ", uz: "yog'och qutining ichida." }
  ],
  full_uz: "U yog'och qutining ichida.",
  note: null
},
{
  num: 16,
  time: "00:01:26,180 --> 00:01:28,879",
  arabic: "إِذًا قَدْ يَكُونُ فَأْرًا.",
  segs: [
    { ar: "إِذًا", uz: "Unday bo'lsa" },
    { ar: "قَدْ يَكُونُ فَأْرًا", uz: "sichqon bo'lishi mumkin." }
  ],
  full_uz: "Unday bo'lsa, sichqon bo'lishi mumkin.",
  note: null
},
{
  num: 17,
  time: "00:01:28,879 --> 00:01:30,520",
  arabic: "ٱبْقَ هُنَا يَا تُومُ.",
  segs: [
    { ar: "ٱبْقَ هُنَا", uz: "Shu yerda qol" },
    { ar: "يَا تُومُ", uz: "Tom." }
  ],
  full_uz: "Shu yerda qol, Tom.",
  note: null
},
{
  num: 18,
  time: "00:01:30,520 --> 00:01:33,120",
  arabic: "سَنَذْهَبُ أَنَا وَنُولِكْ لِنَتَحَقَّقَ مِنْ هَذَا ٱلْأَمْرِ.",
  segs: [
    { ar: "سَنَذْهَبُ أَنَا وَنُولِكْ", uz: "Men bilan Nolik boramiz" },
    { ar: "لِنَتَحَقَّقَ مِنْ هَذَا ٱلْأَمْرِ", uz: "bu ishni tekshirish uchun." }
  ],
  full_uz: "Men bilan Nolik bu ishni tekshirish uchun boramiz.",
  note: null
},
{
  num: 19,
  time: "00:01:33,120 --> 00:01:39,120",
  arabic: "إِنْ كَانَ هُنَاكَ فَأْرٌ حَقًّا.",
  segs: [
    { ar: "إِنْ كَانَ", uz: "Agar" },
    { ar: "هُنَاكَ فَأْرٌ حَقًّا", uz: "haqiqatan ham sichqon bo'lsa." }
  ],
  full_uz: "Agar u yerda haqiqatan ham sichqon bo'lsa.",
  note: null
},
{
  num: 20,
  time: "00:01:39,120 --> 00:01:41,420",
  arabic: "فَكَيْفَ سَنُخْرِجُهُ؟",
  segs: [
    { ar: "فَكَيْفَ", uz: "Unda qanday qilib" },
    { ar: "سَنُخْرِجُهُ", uz: "uni chiqaramiz?" }
  ],
  full_uz: "Unda uni qanday chiqaramiz?",
  note: null
},
{
  num: 21,
  time: "00:01:41,420 --> 00:01:43,980",
  arabic: "هَذِهِ قَوَارِضُ كَبِيرَةٌ جِدًّا يَا سِيمْكَا.",
  segs: [
    { ar: "هَذِهِ قَوَارِضُ كَبِيرَةٌ جِدًّا", uz: "Ular juda katta kemiruvchilar" },
    { ar: "يَا سِيمْكَا", uz: "Simka." }
  ],
  full_uz: "Ular juda katta kemiruvchilar, Simka.",
  note: null
},
{
  num: 22,
  time: "00:01:43,980 --> 00:01:46,579",
  arabic: "وَلِمَ قَرَأْتِ لَكَ ذَلِكَ ٱلْكِتَابَ؟",
  segs: [
    { ar: "وَلِمَ", uz: "Unda nega" },
    { ar: "قَرَأْتِ لَكَ ذَلِكَ ٱلْكِتَابَ", uz: "senga o'sha kitobni o'qib berdim?" }
  ],
  full_uz: "Unda nega senga o'sha kitobni o'qib berdim?",
  note: "SRTdagi matn kontekst asosida «قَرَأْتِ لَكَ» shakliga tuzatildi."
},
{
  num: 23,
  time: "00:01:46,579 --> 00:01:47,200",
  arabic: "هَا؟",
  segs: null,
  full_uz: "Nima?",
  note: null
},
{
  num: 24,
  time: "00:01:47,840 --> 00:01:50,879",
  arabic: "أَخْرِجْ نَايًا وَٱعْزِفْ لَحْنًا لِتَهْرُبَ ٱلْفِئْرَانُ.",
  segs: [
    { ar: "أَخْرِجْ نَايًا", uz: "Nayni chiqar" },
    { ar: "وَٱعْزِفْ لَحْنًا", uz: "va kuy chal" },
    { ar: "لِتَهْرُبَ ٱلْفِئْرَانُ", uz: "sichqonlar qochishi uchun." }
  ],
  full_uz: "Nayni chiqar va sichqonlar qochishi uchun kuy chal.",
  note: null
},
{
  num: 25,
  time: "00:01:50,879 --> 00:01:53,099",
  arabic: "وَلَكِنْ مِنْ أَيْنَ سَآتِي بِٱلنَّايِ؟",
  segs: [
    { ar: "وَلَكِنْ", uz: "Lekin" },
    { ar: "مِنْ أَيْنَ سَآتِي بِٱلنَّايِ", uz: "nayni qayerdan topaman?" }
  ],
  full_uz: "Lekin nayni qayerdan topaman?",
  note: null
},
{
  num: 26,
  time: "00:01:53,099 --> 00:01:53,879",
  arabic: "سَنَصْنَعُ وَاحِدًا.",
  segs: null,
  full_uz: "Bittasini yasaymiz.",
  note: null
},
{
  num: 27,
  time: "00:01:55,539 --> 00:01:57,879",
  arabic: "أَفَهِمْتَ؟",
  segs: null,
  full_uz: "Tushundingmi?",
  note: null
},
{
  num: 28,
  time: "00:01:58,640 --> 00:02:00,019",
  arabic: "نَعَمْ، فَهِمْتُ.",
  segs: [
    { ar: "نَعَمْ", uz: "Ha" },
    { ar: "فَهِمْتُ", uz: "tushundim." }
  ],
  full_uz: "Ha, tushundim.",
  note: null
},
{
  num: 29,
  time: "00:02:00,019 --> 00:02:00,879",
  arabic: "ٱنْتَظِرْ لَحْظَةً.",
  segs: null,
  full_uz: "Bir oz kut.",
  note: null
},
{
  num: 30,
  time: "00:02:01,659 --> 00:02:02,879",
  arabic: "لِنَقْتَرِبْ قَلِيلًا.",
  segs: null,
  full_uz: "Biroz yaqinlashaylik.",
  note: null
},
{
  num: 31,
  time: "00:02:06,319 --> 00:02:12,180",
  arabic: "أَرَأَيْتَ؟",
  segs: null,
  full_uz: "Ko'rdingmi?",
  note: null
},
{
  num: 32,
  time: "00:02:12,180 --> 00:02:13,479",
  arabic: "كَمَا قُلْتُ لَكَ مِنْ قَبْلُ.",
  segs: [
    { ar: "كَمَا قُلْتُ لَكَ", uz: "Senga aytganimdek" },
    { ar: "مِنْ قَبْلُ", uz: "avval." }
  ],
  full_uz: "Senga avval aytganimdek.",
  note: null
},
{
  num: 33,
  time: "00:02:13,479 --> 00:02:15,039",
  arabic: "لَمْ يَعُدْ هُنَاكَ فِئْرَانٌ.",
  segs: [
    { ar: "لَمْ يَعُدْ", uz: "Endi yo'q" },
    { ar: "هُنَاكَ فِئْرَانٌ", uz: "sichqonlar." }
  ],
  full_uz: "Endi u yerda sichqonlar yo'q.",
  note: null
},
{
  num: 34,
  time: "00:02:15,039 --> 00:02:17,659",
  arabic: "لِنَعْزِفْ أَكْثَرَ حَتَّى لَا تَعُودَ ٱلْفِئْرَانُ.",
  segs: [
    { ar: "لِنَعْزِفْ أَكْثَرَ", uz: "Yana ko'proq chalaylik" },
    { ar: "حَتَّى لَا تَعُودَ ٱلْفِئْرَانُ", uz: "sichqonlar qaytib kelmasligi uchun." }
  ],
  full_uz: "Sichqonlar qaytib kelmasligi uchun yana ko'proq chalaylik.",
  note: null
},
{
  num: 35,
  time: "00:02:17,659 --> 00:02:17,879",
  arabic: "حَسَنًا.",
  segs: null,
  full_uz: "Mayli.",
  note: null
},
{
  num: 36,
  time: "00:02:17,879 --> 00:02:21,639",
  arabic: "إِذًا أَنْتُمَا مَنْ كَانَ يَعْبَثُ هُنَا.",
  segs: [
    { ar: "إِذًا", uz: "Demak" },
    { ar: "أَنْتُمَا مَنْ كَانَ يَعْبَثُ هُنَا", uz: "bu yerda o'ynab yurgan sizlar ekansiz." }
  ],
  full_uz: "Demak, bu yerda o'ynab yurgan sizlar ekansiz.",
  note: null
},
{
  num: 37,
  time: "00:02:21,639 --> 00:02:23,340",
  arabic: "هَا؟",
  segs: null,
  full_uz: "Nima?",
  note: null
},
{
  num: 38,
  time: "00:02:23,340 --> 00:02:25,259",
  arabic: "جِرَانْبُوسْ، أَهَذَا أَنْتَ؟",
  segs: [
    { ar: "جِرَانْبُوسْ", uz: "Granpus" },
    { ar: "أَهَذَا أَنْتَ؟", uz: "o'zingmisan?" }
  ],
  full_uz: "Granpus, o'zingmisan?",
  note: null
},
{
  num: 39,
  time: "00:02:25,259 --> 00:02:27,240",
  arabic: "طُولَ ٱلنَّهَارِ لَمْ أَسْتَطِعْ أَنْ أُنْجِزَ عَمَلِي.",
  segs: [
    { ar: "طُولَ ٱلنَّهَارِ", uz: "Butun kun davomida" },
    { ar: "لَمْ أَسْتَطِعْ أَنْ أُنْجِزَ عَمَلِي", uz: "ishimni tugata olmadim." }
  ],
  full_uz: "Butun kun davomida ishimni tugata olmadim.",
  note: null
},
{
  num: 40,
  time: "00:02:27,240 --> 00:02:29,740",
  arabic: "مُنْذُ ٱلصَّبَاحِ حَاوَلَ أَحَدُهُمْ فَتْحَ ٱلْغِطَاءِ.",
  segs: [
    { ar: "مُنْذُ ٱلصَّبَاحِ", uz: "Ertalabdan beri" },
    { ar: "حَاوَلَ أَحَدُهُمْ فَتْحَ ٱلْغِطَاءِ", uz: "kimdir qopqoqni ochishga urinmoqda." }
  ],
  full_uz: "Ertalabdan beri kimdir qopqoqni ochishga urinmoqda.",
  note: null
},
{
  num: 41,
  time: "00:02:29,740 --> 00:02:31,960",
  arabic: "وَٱلْآنَ أَنْتُمَا تُصَفِّرَانِ هُنَا.",
  segs: [
    { ar: "وَٱلْآنَ", uz: "Endi esa" },
    { ar: "أَنْتُمَا تُصَفِّرَانِ هُنَا", uz: "bu yerda hushtak chalyapsizlar." }
  ],
  full_uz: "Endi esa bu yerda hushtak chalyapsizlar.",
  note: null
},
{
  num: 42,
  time: "00:02:31,960 --> 00:02:34,039",
  arabic: "كَانَتْ هَذِهِ فِكْرَةَ سِيمْكَا.",
  segs: [
    { ar: "كَانَتْ", uz: "Bu" },
    { ar: "فِكْرَةَ سِيمْكَا", uz: "Simkaning g'oyasi edi." }
  ],
  full_uz: "Bu Simkaning g'oyasi edi.",
  note: null
},
{
  num: 43,
  time: "00:02:34,039 --> 00:02:35,840",
  arabic: "لِأَنَّكَ خَائِفٌ مِنَ ٱلْفِئْرَانِ.",
  segs: [
    { ar: "لِأَنَّكَ", uz: "Chunki sen" },
    { ar: "خَائِفٌ مِنَ ٱلْفِئْرَانِ", uz: "sichqonlardan qo'rqasan." }
  ],
  full_uz: "Chunki sen sichqonlardan qo'rqasan.",
  note: null
},
{
  num: 44,
  time: "00:02:35,840 --> 00:02:39,159",
  arabic: "رَائِعٌ! مَا هَذِهِ ٱلْآلَةُ؟",
  segs: [
    { ar: "رَائِعٌ", uz: "Zo'r" },
    { ar: "مَا هَذِهِ ٱلْآلَةُ؟", uz: "bu qanday qurilma?" }
  ],
  full_uz: "Zo'r! Bu qanday qurilma?",
  note: null
},
{
  num: 45,
  time: "00:02:39,159 --> 00:02:41,819",
  arabic: "مَاذَا تَظُنُّهَا يَا نُولِكْ؟",
  segs: [
    { ar: "مَاذَا تَظُنُّهَا", uz: "Nima deb o'ylaysan" },
    { ar: "يَا نُولِكْ", uz: "Nolik?" }
  ],
  full_uz: "Nolik, nima deb o'ylaysan?",
  note: null
},
{
  num: 46,
  time: "00:02:41,819 --> 00:02:43,939",
  arabic: "مِطْحَنَةُ قَهْوَةٍ؟",
  segs: null,
  full_uz: "Qahva maydalagichmi?",
  note: null
},
{
  num: 47,
  time: "00:02:43,939 --> 00:02:44,240",
  arabic: "لَا.",
  segs: null,
  full_uz: "Yo'q.",
  note: null
},
{
  num: 48,
  time: "00:02:44,240 --> 00:02:46,219",
  arabic: "إِذًا مِثْقَبٌ؟",
  segs: null,
  full_uz: "Unda parmamikan?",
  note: null
},
{
  num: 49,
  time: "00:02:46,219 --> 00:02:47,219",
  arabic: "لَا.",
  segs: null,
  full_uz: "Yo'q.",
  note: null
},
{
  num: 50,
  time: "00:02:47,219 --> 00:02:50,699",
  arabic: "حَكَّاكَةُ أَقْدَامٍ؟",
  segs: null,
  full_uz: "Oyoq qashlagichmi?",
  note: "Hazil tariqasida aytilgan so'z."
},
{
  num: 52,
  time: "00:02:51,759 --> 00:02:53,860",
  arabic: "حَسَنًا، آلَةٌ لِحَكِّ ٱلْأَقْدَامِ.",
  segs: [
    { ar: "حَسَنًا", uz: "Mayli" },
    { ar: "آلَةٌ لِحَكِّ ٱلْأَقْدَامِ", uz: "oyoq qashlaydigan qurilma." }
  ],
  full_uz: "Mayli, oyoq qashlaydigan qurilma.",
  note: null
},
{
  num: 53,
  time: "00:02:53,860 --> 00:02:56,719",
  arabic: "أَنْتَ لَا تَتَوَقَّفُ عَنِ ٱلْمِزَاحِ.",
  segs: [
    { ar: "أَنْتَ", uz: "Sen" },
    { ar: "لَا تَتَوَقَّفُ عَنِ ٱلْمِزَاحِ", uz: "hazillashishdan to'xtamaysan." }
  ],
  full_uz: "Sen hazillashishdan to'xtamaysan.",
  note: null
},
{
  num: 54,
  time: "00:02:56,719 --> 00:03:00,259",
  arabic: "إِنَّهُ صُنْدُوقُ مُوسِيقَى، وَهُوَ رَائِعٌ جِدًّا.",
  segs: [
    { ar: "إِنَّهُ صُنْدُوقُ مُوسِيقَى", uz: "Bu musiqa qutisi" },
    { ar: "وَهُوَ رَائِعٌ جِدًّا", uz: "u juda ajoyib." }
  ],
  full_uz: "Bu musiqa qutisi, u juda ajoyib.",
  note: null
},
{
  num: 55,
  time: "00:03:00,259 --> 00:03:05,259",
  arabic: "لَقَدْ تَمَّ ٱخْتِرَاعُ صَنَادِيقِ ٱلْمُوسِيقَى قَبْلَ مِائَتَيْ عَامٍ.",
  segs: [
    { ar: "لَقَدْ تَمَّ ٱخْتِرَاعُ صَنَادِيقِ ٱلْمُوسِيقَى", uz: "Musiqa qutilari ixtiro qilingan" },
    { ar: "قَبْلَ مِائَتَيْ عَامٍ", uz: "ikki yuz yil oldin." }
  ],
  full_uz: "Musiqa qutilari ikki yuz yil oldin ixtiro qilingan.",
  note: null
},
{
  num: 56,
  time: "00:03:05,259 --> 00:03:08,460",
  arabic: "وَتَحْوِي فِي ٱلْعَادَةِ أُسْطُوَانَةً ذَاتَ نُتُوءَاتٍ بَارِزَةٍ.",
  segs: [
    { ar: "وَتَحْوِي فِي ٱلْعَادَةِ", uz: "Odatda unda bo'ladi" },
    { ar: "أُسْطُوَانَةً ذَاتَ نُتُوءَاتٍ بَارِزَةٍ", uz: "bo'rtiqlari bor silindr." }
  ],
  full_uz: "Odatda unda bo'rtiqlari bor silindr bo'ladi.",
  note: null
},
{
  num: 57,
  time: "00:03:08,460 --> 00:03:13,400",
  arabic: "وَأَمَامَ تِلْكَ ٱلْأُسْطُوَانَةِ مُشْطٌ ذُو أَسْنَانٍ مَعْدِنِيَّةٍ بِأَطْوَالٍ مُخْتَلِفَةٍ.",
  segs: [
    { ar: "وَأَمَامَ تِلْكَ ٱلْأُسْطُوَانَةِ", uz: "O'sha silindrning qarshisida" },
    { ar: "مُشْطٌ ذُو أَسْنَانٍ مَعْدِنِيَّةٍ", uz: "metall tishli taroq turadi" },
    { ar: "بِأَطْوَالٍ مُخْتَلِفَةٍ", uz: "ularning uzunligi har xil." }
  ],
  full_uz: "O'sha silindrning qarshisida uzunligi har xil bo'lgan metall tishli taroq turadi.",
  note: null
},
{
  num: 58,
  time: "00:03:13,400 --> 00:03:17,780",
  arabic: "فَإِذَا مَا نُقِرَ عَلَى أَحَدِ ٱلْأَسْنَانِ فَإِنَّهُ يُصْدِرُ صَوْتًا جَمِيلًا.",
  segs: [
    { ar: "فَإِذَا مَا نُقِرَ عَلَى أَحَدِ ٱلْأَسْنَانِ", uz: "Tishlardan biri chertilsa" },
    { ar: "فَإِنَّهُ يُصْدِرُ صَوْتًا جَمِيلًا", uz: "chiroyli ovoz chiqaradi." }
  ],
  full_uz: "Tishlardan biri chertilsa, u chiroyli ovoz chiqaradi.",
  note: null
},
{
  num: 59,
  time: "00:03:17,780 --> 00:03:22,640",
  arabic: "ٱلْأَسْنَانُ ٱلْقَصِيرَةُ تُصْدِرُ أَصْوَاتًا أَعْلَى، وَٱلطَّوِيلَةُ تُصْدِرُ أَصْوَاتًا أَخْفَضَ.",
  segs: [
    { ar: "ٱلْأَسْنَانُ ٱلْقَصِيرَةُ", uz: "Qisqa tishlar" },
    { ar: "تُصْدِرُ أَصْوَاتًا أَعْلَى", uz: "balandroq ovoz chiqaradi" },
    { ar: "وَٱلطَّوِيلَةُ", uz: "uzunlari esa" },
    { ar: "تُصْدِرُ أَصْوَاتًا أَخْفَضَ", uz: "pastroq ovoz chiqaradi." }
  ],
  full_uz: "Qisqa tishlar balandroq, uzun tishlar esa pastroq ovoz chiqaradi.",
  note: null
},
{
  num: 60,
  time: "00:03:22,640 --> 00:03:27,780",
  arabic: "عِنْدَمَا تَدُورُ ٱلْأُسْطُوَانَةُ تَنْقُرُ ٱلنُّتُوءَاتُ عَلَى ٱلْأَسْنَانِ وَتُصْدِرُ ٱلْمُوسِيقَى.",
  segs: [
    { ar: "عِنْدَمَا تَدُورُ ٱلْأُسْطُوَانَةُ", uz: "Silindr aylanganda" },
    { ar: "تَنْقُرُ ٱلنُّتُوءَاتُ عَلَى ٱلْأَسْنَانِ", uz: "bo'rtiqlar tishlarga tegadi" },
    { ar: "وَتُصْدِرُ ٱلْمُوسِيقَى", uz: "va musiqa yangraydi." }
  ],
  full_uz: "Silindr aylanganda bo'rtiqlar tishlarga tegadi va musiqa yangraydi.",
  note: null
},
{
  num: 61,
  time: "00:03:27,780 --> 00:03:31,400",
  arabic: "إِنَّهُ صُنْدُوقُ ٱلْمُوسِيقَى.",
  segs: null,
  full_uz: "Bu musiqa qutisi.",
  note: null
},
{
  num: 62,
  time: "00:03:32,360 --> 00:03:35,400",
  arabic: "إِذًا، مَا ٱلْمُعَطَّلُ هُنَا؟",
  segs: [
    { ar: "إِذًا", uz: "Xo'sh" },
    { ar: "مَا ٱلْمُعَطَّلُ هُنَا؟", uz: "bu yerda nima buzilgan?" }
  ],
  full_uz: "Xo'sh, bu yerda nima buzilgan?",
  note: null
},
{
  num: 63,
  time: "00:03:35,960 --> 00:03:37,640",
  arabic: "خَرَجَ ٱلنَّابِضُ مِنْ مَكَانِهِ.",
  segs: [
    { ar: "خَرَجَ ٱلنَّابِضُ", uz: "Prujina chiqib ketgan" },
    { ar: "مِنْ مَكَانِهِ", uz: "o'z joyidan." }
  ],
  full_uz: "Prujina o'z joyidan chiqib ketgan.",
  note: "«ٱلنَّابِضُ» — prujina (spring)."
},
{
  num: 64,
  time: "00:03:37,640 --> 00:03:40,400",
  arabic: "عَلَيْنَا أَنْ نُعِيدَهُ إِلَى مَكَانِهِ ٱلصَّحِيحِ.",
  segs: [
    { ar: "عَلَيْنَا", uz: "Biz" },
    { ar: "أَنْ نُعِيدَهُ", uz: "uni qaytarishimiz kerak" },
    { ar: "إِلَى مَكَانِهِ ٱلصَّحِيحِ", uz: "to'g'ri joyiga." }
  ],
  full_uz: "Biz uni to'g'ri joyiga qaytarishimiz kerak.",
  note: null
},
{
  num: 65,
  time: "00:03:41,219 --> 00:03:42,099",
  arabic: "أَلَمْ تَنْتَهِيَا بَعْدُ؟",
  segs: null,
  full_uz: "Hali tugatmadinglarmi?",
  note: null
},
{
  num: 66,
  time: "00:03:43,400 --> 00:03:53,800",
  arabic: "حَسَنًا، لَقَدِ ٱنْتَهَيْنَا.",
  segs: [
    { ar: "حَسَنًا", uz: "Mayli" },
    { ar: "لَقَدِ ٱنْتَهَيْنَا", uz: "tugatdik." }
  ],
  full_uz: "Mayli, tugatdik.",
  note: null
},
{
  num: 67,
  time: "00:03:53,800 --> 00:03:56,400",
  arabic: "لِمَاذَا لَا تَعْزِفُ ٱلْمُوسِيقَى؟",
  segs: [
    { ar: "لِمَاذَا", uz: "Nega" },
    { ar: "لَا تَعْزِفُ ٱلْمُوسِيقَى", uz: "musiqa chalinmayapti?" }
  ],
  full_uz: "Nega musiqa chalinmayapti?",
  note: null
},
{
  num: 68,
  time: "00:03:58,040 --> 00:04:01,120",
  arabic: "عَلَيْكَ أَنْ تُدِيرَ ٱلنَّابِضَ أَوَّلًا بِٱسْتِعْمَالِ ٱلْمِفْتَاحِ.",
  segs: [
    { ar: "عَلَيْكَ أَنْ تُدِيرَ ٱلنَّابِضَ أَوَّلًا", uz: "Avval prujinani burashing kerak" },
    { ar: "بِٱسْتِعْمَالِ ٱلْمِفْتَاحِ", uz: "kalit yordamida." }
  ],
  full_uz: "Avval prujinani kalit yordamida burashing kerak.",
  note: null
},
{
  num: 69,
  time: "00:04:01,120 --> 00:04:04,360",
  arabic: "تِدِيشْ، أَعْلَمُ مَنْ يَسْتَطِيعُ إِدَارَتَهُ.",
  segs: [
    { ar: "تِدِيشْ", uz: "Tedish" },
    { ar: "أَعْلَمُ مَنْ يَسْتَطِيعُ إِدَارَتَهُ", uz: "uni kim bura olishini bilaman." }
  ],
  full_uz: "Tedish, uni kim bura olishini bilaman.",
  note: "Ism asl talaffuziga ko'ra yozildi."
},
{
  num: 70,
  time: "00:04:04,360 --> 00:04:09,240",
  arabic: "حَسَنًا يَا تُومُ، أَيُمْكِنُكَ أَنْ تُخَمِّنَ مَا هَذِهِ ٱلْآلَةُ؟",
  segs: [
    { ar: "حَسَنًا يَا تُومُ", uz: "Mayli, Tom" },
    { ar: "أَيُمْكِنُكَ أَنْ تُخَمِّنَ", uz: "topa olasanmi" },
    { ar: "مَا هَذِهِ ٱلْآلَةُ؟", uz: "bu qanday qurilma ekanini?" }
  ],
  full_uz: "Mayli, Tom, bu qanday qurilma ekanini topa olasanmi?",
  note: null
},
{
  num: 71,
  time: "00:04:09,240 --> 00:04:10,319",
  arabic: "مِطْحَنَةٌ؟",
  segs: null,
  full_uz: "Maydalagichmi?",
  note: null
},
{
  num: 72,
  time: "00:04:10,319 --> 00:04:10,640",
  arabic: "لَا.",
  segs: null,
  full_uz: "Yo'q.",
  note: null
},
{
  num: 73,
  time: "00:04:10,640 --> 00:04:12,520",
  arabic: "جِهَازُ تَثْقِيبٍ؟",
  segs: null,
  full_uz: "Parmalash qurilmasimi?",
  note: null
},
{
  num: 74,
  time: "00:04:12,520 --> 00:04:15,760",
  arabic: "دُعَابَةٌ جَمِيلَةٌ، لَا تَقُلْ إِنَّهَا حَكَّاكَةُ أَقْدَامٍ.",
  segs: [
    { ar: "دُعَابَةٌ جَمِيلَةٌ", uz: "Yaxshi hazil" },
    { ar: "لَا تَقُلْ", uz: "aytma" },
    { ar: "إِنَّهَا حَكَّاكَةُ أَقْدَامٍ", uz: "oyoq qashlagich deb." }
  ],
  full_uz: "Yaxshi hazil, faqat oyoq qashlagich deb aytma.",
  note: null
},
{
  num: 75,
  time: "00:04:15,760 --> 00:04:16,699",
  arabic: "إِذًا لَا أَعْلَمُ.",
  segs: null,
  full_uz: "Unda bilmayman.",
  note: null
},
{
  num: 76,
  time: "00:04:16,699 --> 00:04:19,519",
  arabic: "حَسَنًا، ٱرْبُطْهُ بِهَذَا ٱلْمِفْتَاحِ لِتَكْتَشِفَ.",
  segs: [
    { ar: "حَسَنًا", uz: "Mayli" },
    { ar: "ٱرْبُطْهُ بِهَذَا ٱلْمِفْتَاحِ", uz: "uni mana shu kalit bilan burab ko'r" },
    { ar: "لِتَكْتَشِفَ", uz: "o'zing bilib olasan." }
  ],
  full_uz: "Mayli, uni mana shu kalit bilan burab ko'r, o'zing bilib olasan.",
  note: "SRTdagi «اربطه» kontekstda «burash» ma'nosida ishlatilgan."
},
{
  num: 77,
  time: "00:04:20,300 --> 00:04:33,019",
  arabic: "أَتَعْلَمُ كَيْفَ تَصْدُرُ ٱلْأَصْوَاتُ ٱلْعَالِيَةُ وَٱلْمُنْخَفِضَةُ؟",
  segs: [
    { ar: "أَتَعْلَمُ", uz: "Bilasanmi" },
    { ar: "كَيْفَ تَصْدُرُ ٱلْأَصْوَاتُ ٱلْعَالِيَةُ وَٱلْمُنْخَفِضَةُ", uz: "baland va past tovushlar qanday hosil bo'lishini?" }
  ],
  full_uz: "Baland va past tovushlar qanday hosil bo'lishini bilasanmi?",
  note: null
},
{
  num: 78,
  time: "00:04:33,019 --> 00:04:35,519",
  arabic: "ضَعْ مِسْطَرَةً عَلَى حَافَةِ ٱلْمِنْضَدَةِ.",
  segs: [
    { ar: "ضَعْ مِسْطَرَةً", uz: "Chizg'ichni qo'y" },
    { ar: "عَلَى حَافَةِ ٱلْمِنْضَدَةِ", uz: "stol chetiga." }
  ],
  full_uz: "Chizg'ichni stol chetiga qo'y.",
  note: null
},
{
  num: 79,
  time: "00:04:35,519 --> 00:04:37,480",
  arabic: "وَثَبِّتْ إِحْدَى نِهَايَتَيْهِ.",
  segs: [
    { ar: "وَثَبِّتْ", uz: "Mahkamlab qo'y" },
    { ar: "إِحْدَى نِهَايَتَيْهِ", uz: "uning bir uchini." }
  ],
  full_uz: "Uning bir uchini mahkamlab qo'y.",
  note: null
},
{
  num: 80,
  time: "00:04:37,480 --> 00:04:39,860",
  arabic: "وَٱنْقُرْ عَلَى ٱلْأُخْرَى.",
  segs: [
    { ar: "وَٱنْقُرْ", uz: "So'ng chert" },
    { ar: "عَلَى ٱلْأُخْرَى", uz: "ikkinchi uchini." }
  ],
  full_uz: "So'ng ikkinchi uchini chert.",
  note: null
},
{
  num: 81,
  time: "00:04:39,860 --> 00:04:42,100",
  arabic: "كُلَّمَا جَعَلْتَ ٱلْقِسْمَ ٱلْبَارِزَ أَقْصَرَ.",
  segs: [
    { ar: "كُلَّمَا جَعَلْتَ", uz: "Qanchalik" },
    { ar: "ٱلْقِسْمَ ٱلْبَارِزَ أَقْصَرَ", uz: "chiqib turgan qismini qisqartirsang." }
  ],
  full_uz: "Chiqib turgan qismini qanchalik qisqartirsang.",
  note: null
},
{
  num: 82,
  time: "00:04:42,519 --> 00:04:43,579",
  arabic: "كَانَ ٱلصَّوْتُ أَعْلَى.",
  segs: [
    { ar: "كَانَ ٱلصَّوْتُ", uz: "Ovoz" },
    { ar: "أَعْلَى", uz: "balandroq bo'ladi." }
  ],
  full_uz: "Ovoz balandroq bo'ladi.",
  note: null
},
{
  num: 83,
  time: "00:04:43,579 --> 00:04:47,219",
  arabic: "وَهَكَذَا تَعْمَلُ ٱلْأَسْنَانُ دَاخِلَ صُنْدُوقِ ٱلْمُوسِيقَى.",
  segs: [
    { ar: "وَهَكَذَا", uz: "Xuddi shunday" },
    { ar: "تَعْمَلُ ٱلْأَسْنَانُ", uz: "tishlar ishlaydi" },
    { ar: "دَاخِلَ صُنْدُوقِ ٱلْمُوسِيقَى", uz: "musiqa qutisi ichida." }
  ],
  full_uz: "Musiqa qutisi ichidagi tishlar ham xuddi shunday ishlaydi.",
  note: null
},
{
  num: 84,
  time: "00:04:47,219 --> 00:04:49,620",
  arabic: "وَٱلْأَجْرَاسُ تَعْمَلُ بِٱلطَّرِيقَةِ نَفْسِهَا.",
  segs: [
    { ar: "وَٱلْأَجْرَاسُ", uz: "Qo'ng'iroqlar ham" },
    { ar: "تَعْمَلُ بِٱلطَّرِيقَةِ نَفْسِهَا", uz: "xuddi shu usulda ishlaydi." }
  ],
  full_uz: "Qo'ng'iroqlar ham xuddi shu usulda ishlaydi.",
  note: null
},
{
  num: 85,
  time: "00:04:49,620 --> 00:04:52,219",
  arabic: "كُلَّمَا صَغُرَ ٱلْجَرَسُ عَلَا رَنِينُهُ.",
  segs: [
    { ar: "كُلَّمَا صَغُرَ ٱلْجَرَسُ", uz: "Qo'ng'iroq qanchalik kichik bo'lsa" },
    { ar: "عَلَا رَنِينُهُ", uz: "jarangi shunchalik baland bo'ladi." }
  ],
  full_uz: "Qo'ng'iroq qanchalik kichik bo'lsa, jarangi shunchalik baland bo'ladi.",
  note: null
},
{
  num: 86,
  time: "00:04:52,219 --> 00:04:56,819",
  arabic: "ٱلْجِيتَارُ أَوِ ٱلْكَمَانُ يَعْتَمِدَانِ عَلَى سُمْكِ ٱلْأَوْتَارِ.",
  segs: [
    { ar: "ٱلْجِيتَارُ أَوِ ٱلْكَمَانُ", uz: "Gitara yoki skripka" },
    { ar: "يَعْتَمِدَانِ عَلَى سُمْكِ ٱلْأَوْتَارِ", uz: "torlarning qalinligiga bog'liq." }
  ],
  full_uz: "Gitara yoki skripkada tovush torlarning qalinligiga bog'liq.",
  note: null
},
{
  num: 87,
  time: "00:04:56,819 --> 00:04:59,500",
  arabic: "ٱلْأَوْتَارُ ٱلسَّمِيكَةُ لِأَصْوَاتٍ أَخْفَضَ.",
  segs: [
    { ar: "ٱلْأَوْتَارُ ٱلسَّمِيكَةُ", uz: "Qalin torlar" },
    { ar: "لِأَصْوَاتٍ أَخْفَضَ", uz: "pastroq tovush chiqaradi." }
  ],
  full_uz: "Qalin torlar pastroq tovush chiqaradi.",
  note: "SRTdagi «سخانة» kontekst asosida «سميكة» deb tuzatildi."
},
{
  num: 88,
  time: "00:04:59,500 --> 00:05:01,919",
  arabic: "وَٱلْأَوْتَارُ ٱلدَّقِيقَةُ لِأَصْوَاتٍ أَعْلَى.",
  segs: [
    { ar: "وَٱلْأَوْتَارُ ٱلدَّقِيقَةُ", uz: "Ingichka torlar esa" },
    { ar: "لِأَصْوَاتٍ أَعْلَى", uz: "balandroq tovush chiqaradi." }
  ],
  full_uz: "Ingichka torlar esa balandroq tovush chiqaradi.",
  note: null
},
{
  num: 89,
  time: "00:05:01,919 --> 00:05:04,120",
  arabic: "وَشَدُّ ٱلْأَوْتَارِ يُحْدِثُ فَارِقًا فِي ٱلصَّوْتِ.",
  segs: [
    { ar: "وَشَدُّ ٱلْأَوْتَارِ", uz: "Torlarni taranglash ham" },
    { ar: "يُحْدِثُ فَارِقًا فِي ٱلصَّوْتِ", uz: "tovushni o'zgartiradi." }
  ],
  full_uz: "Torlarni taranglash ham tovushni o'zgartiradi.",
  note: null
},
{
  num: 90,
  time: "00:05:04,120 --> 00:05:06,799",
  arabic: "خُذْ قِطْعَةَ حَبْلٍ أَوْ مِطَّاطَةً.",
  segs: [
    { ar: "خُذْ", uz: "Ol" },
    { ar: "قِطْعَةَ حَبْلٍ أَوْ مِطَّاطَةً", uz: "bir bo'lak ip yoki rezina." }
  ],
 full_uz: "Bir bo'lak ip yoki rezina ol.",
  note: null
},
{
  num: 91,
  time: "00:05:06,799 --> 00:05:09,099",
  arabic: "ٱرْبِطْ إِحْدَى ٱلنِّهَايَتَيْنِ بِمِقْبَضِ ٱلْبَابِ.",
  segs: [
    { ar: "ٱرْبِطْ", uz: "Bog'la" },
    { ar: "إِحْدَى ٱلنِّهَايَتَيْنِ", uz: "ikki uchidan birini" },
    { ar: "بِمِقْبَضِ ٱلْبَابِ", uz: "eshik tutqichiga." }
  ],
  full_uz: "Ikki uchidan birini eshik tutqichiga bog'la.",
  note: null
},
{
  num: 92,
  time: "00:05:09,099 --> 00:05:11,219",
  arabic: "وَشُدَّ ٱلنِّهَايَةَ ٱلْأُخْرَى بِإِحْدَى يَدَيْكَ.",
  segs: [
    { ar: "وَشُدَّ", uz: "Tarang tort" },
    { ar: "ٱلنِّهَايَةَ ٱلْأُخْرَى", uz: "ikkinchi uchini" },
    { ar: "بِإِحْدَى يَدَيْكَ", uz: "bir qo'ling bilan." }
  ],
  full_uz: "Ikkinchi uchini bir qo'ling bilan tarang tort.",
  note: null
},
{
  num: 93,
  time: "00:05:11,220 --> 00:05:13,300",
  arabic: "ثُمَّ ٱنْقُرْ عَلَى ٱلْحَبْلِ بِيَدِكَ ٱلْأُخْرَى.",
  segs: [
    { ar: "ثُمَّ ٱنْقُرْ", uz: "So'ng chert" },
    { ar: "عَلَى ٱلْحَبْلِ", uz: "ipni" },
    { ar: "بِيَدِكَ ٱلْأُخْرَى", uz: "ikkinchi qo'ling bilan." }
  ],
  full_uz: "So'ng ipni ikkinchi qo'ling bilan chert.",
  note: null
},
{
  num: 94,
  time: "00:05:13,300 --> 00:05:15,540",
  arabic: "كُلَّمَا ٱزْدَادَ ٱلشَّدُّ عَلَى ٱلْحَبْلِ عَلَا ٱلصَّوْتُ.",
  segs: [
    { ar: "كُلَّمَا ٱزْدَادَ ٱلشَّدُّ عَلَى ٱلْحَبْلِ", uz: "Ip qanchalik tarang tortilsa" },
    { ar: "عَلَا ٱلصَّوْتُ", uz: "ovoz shunchalik baland bo'ladi." }
  ],
  full_uz: "Ip qanchalik tarang tortilsa, ovoz shunchalik baland bo'ladi.",
  note: null
},
{
  num: 95,
  time: "00:05:15,540 --> 00:05:18,220",
  arabic: "وَإِنْ أَرَدْتَ يُمْكِنُكَ أَنْ تَعْزِفَ.",
  segs: [
    { ar: "وَإِنْ أَرَدْتَ", uz: "Agar xohlasang" },
    { ar: "يُمْكِنُكَ أَنْ تَعْزِفَ", uz: "hatto kuy ham chalishing mumkin." }
  ],
  full_uz: "Agar xohlasang, hatto kuy ham chalishing mumkin.",
  note: null
},
{
  num: 96,
  time: "00:05:18,860 --> 00:05:23,220",
  arabic: "لَقَدْ فَهِمْتُ ٱلْآنَ، إِنَّهُ مُشَغِّلٌ قَدِيمٌ لِلْمُوسِيقَى.",
  segs: [
    { ar: "لَقَدْ فَهِمْتُ ٱلْآنَ", uz: "Endi tushundim" },
    { ar: "إِنَّهُ مُشَغِّلٌ قَدِيمٌ لِلْمُوسِيقَى", uz: "bu eski musiqa qurilmasi ekan." }
  ],
  full_uz: "Endi tushundim, bu eski musiqa qurilmasi ekan.",
  note: null
},
{
  num: 97,
  time: "00:05:23,740 --> 00:05:27,600",
  arabic: "هَذَا قَرِيبٌ، لَكِنْ يُسَمُّونَهُ صُنْدُوقَ ٱلْمُوسِيقَى.",
  segs: [
    { ar: "هَذَا قَرِيبٌ", uz: "Bunga yaqin" },
    { ar: "لَكِنْ يُسَمُّونَهُ", uz: "lekin uni" },
    { ar: "صُنْدُوقَ ٱلْمُوسِيقَى", uz: "musiqa qutisi deb atashadi." }
  ],
  full_uz: "Bunga yaqin, lekin uni musiqa qutisi deb atashadi.",
  note: null
},
{
  num: 98,
  time: "00:05:27,600 --> 00:05:31,280",
  arabic: "هَذَا مَا قُلْتُهُ، إِذًا مَاذَا كَانَ فِي دَاخِلِهِ؟",
  segs: [
    { ar: "هَذَا مَا قُلْتُهُ", uz: "Shuni aytdim-ku" },
    { ar: "إِذًا", uz: "unda" },
    { ar: "مَاذَا كَانَ فِي دَاخِلِهِ؟", uz: "ichida nima bor edi?" }
  ],
  full_uz: "Shuni aytdim-ku. Unda ichida nima bor edi?",
  note: null
},
{
  num: 99,
  time: "00:05:31,280 --> 00:05:32,240",
  arabic: "نَابِضٌ مَكْسُورٌ.",
  segs: null,
  full_uz: "Singan prujina.",
  note: null
},
{
  num: 100,
  time: "00:05:32,240 --> 00:05:34,560",
  arabic: "هَذَا لَيْسَ مَا أُرِيدُ مَعْرِفَتَهُ.",
  segs: [
    { ar: "هَذَا لَيْسَ", uz: "Bu" },
    { ar: "مَا أُرِيدُ مَعْرِفَتَهُ", uz: "bilmoqchi bo'lganim emas." }
  ],
  full_uz: "Bu men bilmoqchi bo'lgan narsa emas.",
  note: null
},
{
  num: 101,
  time: "00:05:34,560 --> 00:05:36,220",
  arabic: "مَنْ كَانَ يَتَحَرَّكُ هُنَاكَ؟",
  segs: [
    { ar: "مَنْ", uz: "Kim" },
    { ar: "كَانَ يَتَحَرَّكُ هُنَاكَ؟", uz: "u yerda harakatlanayotgan edi?" }
  ],
  full_uz: "U yerda kim harakatlanayotgan edi?",
  note: null
},
{
  num: 102,
  time: "00:05:36,740 --> 00:05:40,020",
  arabic: "لِنَقُلْ: نَحْنُ كُنَّا هُنَاكَ يَا تُومُ.",
  segs: [
    { ar: "لِنَقُلْ", uz: "Shunday deylik" },
    { ar: "نَحْنُ كُنَّا هُنَاكَ", uz: "biz u yerda edik" },
    { ar: "يَا تُومُ", uz: "Tom." }
  ],
  full_uz: "Shunday deylik, biz u yerda edik, Tom.",
  note: null
},
{
  num: 103,
  time: "00:05:40,019 --> 00:05:42,019",
  arabic: "لَا تَبُحْ بِٱلسِّرِّ، ٱتَّفَقْنَا؟",
  segs: [
    { ar: "لَا تَبُحْ بِٱلسِّرِّ", uz: "Sirni oshkor qilma" },
    { ar: "ٱتَّفَقْنَا؟", uz: "xo'pmi?" }
  ],
  full_uz: "Sirni oshkor qilma, xo'pmi?",
  note: "«باحَ بِالسِّرِّ» — sirni oshkor qilmoq."
},
{
  num: 104,
  time: "00:05:42,019 --> 00:05:42,779",
  arabic: "شْ شْ شْ!",
  segs: null,
  full_uz: "Sh-sh-sh!",
  note: null
}];
if (typeof module !== "undefined" && module.exports) {
  module.exports = lessons;
}