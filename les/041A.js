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
      { ar: "يَصْعُبُ رُؤْيَتُهُمْ", uz: "ularni ko‘rish qiyin." }
    ],
    full_uz: "Qancha kattalashtirgich olib kelsang ham, ularni ko‘rish qiyin.",
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
    full_uz: "Ular shunchalik kichikki, hatto ularni eshitishning ham iloji yo‘q, hatto mavjudligini inkor qilishing mumkin.",
    note: null
  },
  {
    num: 4,
    time: "00:00:19,119 --> 00:00:24,400",
    arabic: "مِنْ أَيْنَ أَتَوْا؟ مَا شَكْلُهُمْ؟ مَنْ يَعْرِفُ سِرَّهُمْ؟",
    segs: [
      { ar: "مِنْ أَيْنَ أَتَوْا؟", uz: "Ular qayerdan kelishgan?" },
      { ar: "مَا شَكْلُهُمْ؟", uz: "Ularning ko‘rinishi qanday?" },
      { ar: "مَنْ يَعْرِفُ سِرَّهُمْ؟", uz: "Ularning sirini kim biladi?" }
    ],
    full_uz: "Ular qayerdan kelishgan? Ularning ko‘rinishi qanday? Ularning sirini kim biladi?",
    note: null
  },
  {
    num: 5,
    time: "00:00:24,400 --> 00:00:31,960",
    arabic: "مِنْ أَيْنَ أَتَوْا؟ مَا شَكْلُهُمْ؟ مَنْ يَعْرِفُ سِرَّهُمْ؟",
    segs: [
      { ar: "مِنْ أَيْنَ أَتَوْا؟", uz: "Ular qayerdan kelishgan?" },
      { ar: "مَا شَكْلُهُمْ؟", uz: "Ularning ko‘rinishi qanday?" },
      { ar: "مَنْ يَعْرِفُ سِرَّهُمْ؟", uz: "Ularning sirini kim biladi?" }
    ],
    full_uz: "Ular qayerdan kelishgan? Ularning ko‘rinishi qanday? Ularning sirini kim biladi?",
    note: null
  },
  {
    num: 6,
    time: "00:00:32,030 --> 00:00:37,160",
    arabic: "ٱلْحَلْوَى",
    segs: null,
    full_uz: "Konfet.",
    note: null
  },
  {
    num: 7,
    time: "00:00:41,160 --> 00:00:43,980",
    arabic: "عَيْنٌ سَوْدَاءُ جَمِيلَةٌ.",
    segs: [
      { ar: "عَيْنٌ سَوْدَاءُ", uz: "Ko‘kargan ko‘z" },
      { ar: "جَمِيلَةٌ", uz: "juda chiroyli ekan." }
    ],
    full_uz: "Ko‘kargan ko‘zing juda chiroyli ekan.",
    note: "«عَيْنٌ سَوْدَاءُ» iborasi ko‘z atrofi ko‘karganini bildiradi."
  },
  {
    num: 8,
    time: "00:00:43,980 --> 00:00:45,899",
    arabic: "تُومُ، هَلْ وَقَعْتَ عَلَى وَجْهِكَ؟",
    segs: [
      { ar: "تُومُ", uz: "Tom" },
      { ar: "هَلْ وَقَعْتَ عَلَى وَجْهِكَ؟", uz: "Yuzing bilan yiqildingmi?" }
    ],
    full_uz: "Tom, yuzing bilan yiqildingmi?",
    note: null
  },
  {
    num: 9,
    time: "00:00:45,899 --> 00:00:47,980",
    arabic: "مَا ٱلَّذِي أَصَابَ عَيْنَكَ؟",
    segs: null,
    full_uz: "Ko‘zingga nima bo‘ldi?",
    note: null
  },
  {
    num: 10,
    time: "00:00:47,980 --> 00:00:50,240",
    arabic: "تَشَاجَرْتُ أَنَا وَجُونِي.",
    segs: [
      { ar: "تَشَاجَرْتُ", uz: "Janjallashdim" },
      { ar: "أَنَا وَجُونِي", uz: "men bilan Joni." }
    ],
    full_uz: "Men bilan Joni janjallashdik.",
    note: null
  },
  {
    num: 11,
    time: "00:00:50,240 --> 00:00:52,620",
    arabic: "آهِ، عَارٌ عَلَيْكَ.",
    segs: [
      { ar: "آهِ", uz: "Eh" },
      { ar: "عَارٌ عَلَيْكَ", uz: "uyat senga." }
    ],
    full_uz: "Eh, uyat senga.",
    note: null
  },
  {
    num: 12,
    time: "00:00:52,620 --> 00:00:54,299",
    arabic: "وَمَا سَبَبُ ٱلشِّجَارِ؟",
    segs: null,
    full_uz: "Janjalning sababi nima edi?",
    note: null
  },
  {
    num: 13,
    time: "00:00:54,299 --> 00:00:56,000",
    arabic: "ٱخْتَلَفْنَا حَوْلَ مَنْ هُوَ ٱلْأَرْوَعُ.",
    segs: [
      { ar: "ٱخْتَلَفْنَا", uz: "Kelisha olmadik" },
      { ar: "حَوْلَ مَنْ هُوَ ٱلْأَرْوَعُ", uz: "kim zo‘rroq ekani haqida." }
    ],
    full_uz: "Kim zo‘rroq ekani haqida kelisha olmadik.",
    note: null
  },
  {
    num: 14,
    time: "00:00:56,000 --> 00:00:58,060",
    arabic: "ٱلْمُتَسَابِقُ أَمِ ٱلْمُلَاكِمُ؟",
    segs: [
      { ar: "ٱلْمُتَسَابِقُ", uz: "Poygachi" },
      { ar: "أَمِ ٱلْمُلَاكِمُ", uz: "yoki bokschi?" }
    ],
    full_uz: "Poygachimi yoki bokschimi?",
    note: null
  },
  {
    num: 15,
    time: "00:00:58,060 --> 00:01:00,000",
    arabic: "ٱلْمُتَسَابِقُ أَرْوَعُ بِلَا شَكٍّ.",
    segs: [
      { ar: "ٱلْمُتَسَابِقُ أَرْوَعُ", uz: "Poygachi zo‘rroq" },
      { ar: "بِلَا شَكٍّ", uz: "shubhasiz." }
    ],
    full_uz: "Poygachi, shubhasiz, zo‘rroq.",
    note: null
  },
  {
    num: 16,
    time: "00:01:00,000 --> 00:01:02,140",
    arabic: "نَعَمْ، وَهَذَا مَا قُلْتُ لَهُ.",
    segs: [
      { ar: "نَعَمْ", uz: "Ha" },
      { ar: "وَهَذَا مَا قُلْتُ لَهُ", uz: "unga shuni aytdim." }
    ],
    full_uz: "Ha, unga shuni aytdim.",
    note: null
  },
  {
    num: 17,
    time: "00:01:02,140 --> 00:01:04,439",
    arabic: "لَكِنَّ جُونِي أَرَادَ إِثْبَاتَ ٱلْعَكْسِ.",
    segs: [
      { ar: "لَكِنَّ جُونِي", uz: "Lekin Joni" },
      { ar: "أَرَادَ إِثْبَاتَ ٱلْعَكْسِ", uz: "buning aksini isbotlamoqchi bo‘ldi." }
    ],
    full_uz: "Lekin Joni buning aksini isbotlamoqchi bo‘ldi.",
    note: null
  },
  {
    num: 18,
    time: "00:01:04,439 --> 00:01:05,460",
    arabic: "إِذًا؟",
    segs: null,
    full_uz: "Xo‘sh?",
    note: null
  },
  {
    num: 19,
    time: "00:01:05,460 --> 00:01:08,060",
    arabic: "لَقَدْ أَثْبَتَ ذَلِكَ، أَلَا تَرَى؟",
    segs: [
      { ar: "لَقَدْ أَثْبَتَ ذَلِكَ", uz: "Axir buni isbotladi" },
      { ar: "أَلَا تَرَى؟", uz: "ko‘rmayapsanmi?" }
    ],
    full_uz: "Axir buni isbotladi, ko‘rmayapsanmi?",
    note: null
  },
  {
    num: 20,
    time: "00:01:09,740 --> 00:01:11,879",
    arabic: "ٱلْعِرَاكُ لَا يُثْبِتُ أَيَّ شَيْءٍ.",
    segs: [
      { ar: "ٱلْعِرَاكُ", uz: "Mushtlashish" },
      { ar: "لَا يُثْبِتُ أَيَّ شَيْءٍ", uz: "hech narsani isbotlamaydi." }
    ],
    full_uz: "Mushtlashish hech narsani isbotlamaydi.",
    note: null
  },
  {
  num: 21,
  time: "00:01:11,879 --> 00:01:13,240",
  arabic: "يَا لَهَا مِنْ مِهْنَةٍ!",
  segs: null,
  full_uz: "Qanday ajoyib kasb!",
  note: null
},
{
  num: 22,
  time: "00:01:13,240 --> 00:01:14,180",
  arabic: "مُلَاكِمٌ.",
  segs: null,
  full_uz: "Bokschi.",
  note: null
},
{
  num: 23,
  time: "00:01:14,180 --> 00:01:17,060",
  arabic: "أَجَلْ، لَيْسَ كَوَالِدِكَ.",
  segs: [
    { ar: "أَجَلْ", uz: "Ha" },
    { ar: "لَيْسَ كَوَالِدِكَ", uz: "otangnikiga o‘xshamaydi." }
  ],
  full_uz: "Ha, otangning kasbiga o‘xshamaydi.",
  note: null
},
{
  num: 24,
  time: "00:01:17,640 --> 00:01:19,359",
  arabic: "لَدَيْهِ مِهْنَةٌ رَائِعَةٌ.",
  segs: [
    { ar: "لَدَيْهِ", uz: "Uning" },
    { ar: "مِهْنَةٌ رَائِعَةٌ", uz: "ajoyib kasbi bor." }
  ],
  full_uz: "Uning ajoyib kasbi bor.",
  note: null
},
{
  num: 25,
  time: "00:01:19,359 --> 00:01:20,439",
  arabic: "صَحَفِيٌّ.",
  segs: null,
  full_uz: "Jurnalist.",
  note: null
},
{
  num: 26,
  time: "00:01:20,439 --> 00:01:24,219",
  arabic: "يَسْتَطِيعُ أَنْ يَتَجَوَّلَ فِي بُلْدَانٍ مُخْتَلِفَةٍ.",
  segs: [
    { ar: "يَسْتَطِيعُ أَنْ يَتَجَوَّلَ", uz: "Sayohat qila oladi" },
    { ar: "فِي بُلْدَانٍ مُخْتَلِفَةٍ", uz: "turli mamlakatlarda." }
  ],
  full_uz: "U turli mamlakatlarda sayohat qila oladi.",
  note: null
},
{
  num: 27,
  time: "00:01:24,219 --> 00:01:27,020",
  arabic: "وَيَجْلِبُ مَعَهُ كَثِيرًا مِنَ ٱلْأَشْيَاءِ ٱلْمُضْحِكَةِ.",
  segs: [
    { ar: "وَيَجْلِبُ مَعَهُ", uz: "O‘zi bilan olib keladi" },
    { ar: "كَثِيرًا مِنَ ٱلْأَشْيَاءِ ٱلْمُضْحِكَةِ", uz: "ko‘plab qiziqarli narsalarni." }
  ],
  full_uz: "O‘zi bilan ko‘plab qiziqarli narsalarni olib keladi.",
  note: null
},
{
  num: 28,
  time: "00:01:27,019 --> 00:01:29,079",
  arabic: "حَتَّى إِنَّهُ يَظْهَرُ عَلَى ٱلتِّلْفَازِ.",
  segs: [
    { ar: "حَتَّى إِنَّهُ", uz: "Hatto u" },
    { ar: "يَظْهَرُ عَلَى ٱلتِّلْفَازِ", uz: "televizorda ham chiqadi." }
  ],
  full_uz: "Hatto u televizorda ham chiqadi.",
  note: null
},
{
  num: 29,
  time: "00:01:29,079 --> 00:01:30,079",
  arabic: "لَا.",
  segs: null,
  full_uz: "Yo‘q.",
  note: null
},
{
  num: 30,
  time: "00:01:30,079 --> 00:01:32,199",
  arabic: "مَا قَصْدُكَ؟",
  segs: null,
  full_uz: "Nimani nazarda tutyapsan?",
  note: null
},
{
  num: 31,
  time: "00:01:32,199 --> 00:01:35,039",
  arabic: "ٱلْمُلَاكِمُونَ أَفْضَلُ، فَٱلْجَمِيعُ يَخَافُهُمْ.",
  segs: [
    { ar: "ٱلْمُلَاكِمُونَ أَفْضَلُ", uz: "Bokschilar yaxshiroq" },
    { ar: "فَٱلْجَمِيعُ يَخَافُهُمْ", uz: "chunki hamma ulardan qo‘rqadi." }
  ],
  full_uz: "Bokschilar yaxshiroq, chunki hamma ulardan qo‘rqadi.",
  note: null
},
{
  num: 32,
  time: "00:01:35,039 --> 00:01:37,359",
  arabic: "لَا تَكُنْ كَئِيبًا هَكَذَا يَا تُومُ.",
  segs: [
    { ar: "لَا تَكُنْ كَئِيبًا", uz: "Bunchalik xafa bo‘lma" },
    { ar: "يَا تُومُ", uz: "Tom." }
  ],
  full_uz: "Bunchalik xafa bo‘lma, Tom.",
  note: null
},
{
  num: 33,
  time: "00:01:37,359 --> 00:01:39,019",
  arabic: "تَنَاوَلِ ٱلْحَلْوَى.",
  segs: null,
  full_uz: "Konfetdan ol.",
  note: null
},
{
  num: 34,
  time: "00:01:39,539 --> 00:01:44,420",
  arabic: "لَدَيَّ فِكْرَةٌ جَيِّدَةٌ.",
  segs: null,
  full_uz: "Menda yaxshi bir fikr bor.",
  note: null
},
{
  num: 35,
  time: "00:01:44,420 --> 00:01:46,439",
  arabic: "مَا رَأْيُكَ فِي مِهْنَةِ ٱلذَّوَّاقِ؟",
  segs: [
    { ar: "مَا رَأْيُكَ", uz: "Nima deysan" },
    { ar: "فِي مِهْنَةِ ٱلذَّوَّاقِ", uz: "ta't biluvchilik kasbi haqida?" }
  ],
  full_uz: "Ta'm biluvchilik kasbi haqida nima deysan?",
  note: "ٱلذَّوَّاقُ — ta'mlarni baholovchi mutaxassis."
},
{
  num: 36,
  time: "00:01:46,439 --> 00:01:47,379",
  arabic: "إِنَّهَا ٱلْأَفْضَلُ.",
  segs: null,
  full_uz: "Bu eng yaxshisi.",
  note: null
},
{
  num: 37,
  time: "00:01:47,379 --> 00:01:49,399",
  arabic: "وَمَا ٱلَّذِي يَفْعَلُهُ؟",
  segs: null,
  full_uz: "U nima qiladi?",
  note: null
},
{
  num: 38,
  time: "00:01:49,399 --> 00:01:53,439",
  arabic: "إِنَّ ٱلذَّوَّاقَ شَخْصٌ يَتَذَوَّقُ ٱلْأَطْعِمَةَ وَٱلْأَشْرِبَةَ ٱلْمُخْتَلِفَةَ.",
  segs: [
    { ar: "إِنَّ ٱلذَّوَّاقَ شَخْصٌ", uz: "Ta'm biluvchi shunday odamki" },
    { ar: "يَتَذَوَّقُ ٱلْأَطْعِمَةَ وَٱلْأَشْرِبَةَ ٱلْمُخْتَلِفَةَ", uz: "turli ovqat va ichimliklarni tatib ko‘radi." }
  ],
  full_uz: "Ta'm biluvchi turli ovqat va ichimliklarni tatib ko‘radigan odamdir.",
  note: null
},
{
  num: 39,
  time: "00:01:53,439 --> 00:01:54,019",
  arabic: "لِمَاذَا؟",
  segs: null,
  full_uz: "Nima uchun?",
  note: null
},
{
  num: 40,
  time: "00:01:54,019 --> 00:01:57,219",
  arabic: "يُرِيدُونَ أَنْ يَعْلَمُوا إِنْ كَانَ ٱلطَّعَامُ لَذِيذًا.",
  segs: [
    { ar: "يُرِيدُونَ أَنْ يَعْلَمُوا", uz: "Ular bilishni xohlashadi" },
    { ar: "إِنْ كَانَ ٱلطَّعَامُ لَذِيذًا", uz: "ovqat mazalimi yoki yo‘qmi." }
  ],
  full_uz: "Ular ovqat mazalimi yoki yo‘qligini bilishni xohlashadi.",
  note: null
},
{
  num: 41,
  time: "00:01:57,219 --> 00:01:59,259",
  arabic: "وَمَا ٱلطُّعُومُ ٱلَّتِي فِيهِ.",
  segs: [
    { ar: "وَمَا ٱلطُّعُومُ", uz: "Qanday ta'mlar" },
    { ar: "ٱلَّتِي فِيهِ", uz: "unda borligini." }
  ],
  full_uz: "Unda qanday ta'mlar borligini.",
  note: null
},
{
  num: 42,
  time: "00:01:59,259 --> 00:02:00,159",
  arabic: "رَائِعٌ!",
  segs: null,
  full_uz: "Zo'r!",
  note: null
},
{
  num: 43,
  time: "00:02:00,159 --> 00:02:02,199",
  arabic: "يَا لَهَا مِنْ مِهْنَةٍ مُذْهِلَةٍ!",
  segs: [
    { ar: "يَا لَهَا مِنْ مِهْنَةٍ", uz: "Qanday kasb" },
    { ar: "مُذْهِلَةٍ", uz: "hayratlanarli!" }
  ],
  full_uz: "Qanday hayratlanarli kasb!",
  note: null
},
{
  num: 44,
  time: "00:02:02,199 --> 00:02:05,799",
  arabic: "لَكِنْ لَيْسَ أَيُّ شَخْصٍ يَسْتَطِيعُ أَنْ يَعْمَلَ ذَوَّاقًا.",
  segs: [
    { ar: "لَكِنْ لَيْسَ أَيُّ شَخْصٍ", uz: "Lekin har kim ham" },
    { ar: "يَسْتَطِيعُ أَنْ يَعْمَلَ ذَوَّاقًا", uz: "ta'm biluvchi bo'lib ishlay olmaydi." }
  ],
  full_uz: "Lekin har kim ham ta'm biluvchi bo'lib ishlay olmaydi.",
  note: null
},
{
  num: 45,
  time: "00:02:05,799 --> 00:02:06,819",
  arabic: "أَنَا أَسْتَطِيعُ.",
  segs: null,
  full_uz: "Men qila olaman.",
  note: null
},
{
  num: 46,
  time: "00:02:06,819 --> 00:02:08,159",
  arabic: "لِنُجَرِّبْ.",
  segs: null,
  full_uz: "Qani, sinab ko'ramiz.",
  note: null
},
{
  num: 47,
  time: "00:02:08,159 --> 00:02:09,460",
  arabic: "ٱفْتَحْ فَمَكَ.",
  segs: null,
  full_uz: "Og'zingni och.",
  note: null
},
{
  num: 48,
  time: "00:02:09,460 --> 00:02:10,979",
  arabic: "ثُمَّ أَغْلِقْ عَيْنَيْكَ.",
  segs: [
    { ar: "ثُمَّ", uz: "So'ng" },
    { ar: "أَغْلِقْ عَيْنَيْكَ", uz: "ko'zlaringni yum." }
  ],
  full_uz: "So'ng ko'zlaringni yum.",
  note: null
},
{
  num: 49,
  time: "00:02:18,500 --> 00:02:22,680",
  arabic: "حَاوِلْ أَنْ تَكْتَشِفَ مَا هُوَ ٱلطَّعْمُ ٱلَّذِي فِي دَاخِلِ هَذِهِ ٱلْحَلْوَى.",
  segs: [
    { ar: "حَاوِلْ أَنْ تَكْتَشِفَ", uz: "Topishga harakat qil" },
    { ar: "مَا هُوَ ٱلطَّعْمُ", uz: "qanday ta'm ekanini" },
    { ar: "ٱلَّذِي فِي دَاخِلِ هَذِهِ ٱلْحَلْوَى", uz: "bu konfetning ichida." }
  ],
  full_uz: "Bu konfetning ichidagi ta'm qanday ekanini topishga harakat qil.",
  note: null
},
{
  num: 50,
  time: "00:02:22,680 --> 00:02:29,400",
  arabic: "ٱلْفَرَاوِلَةُ.",
  segs: null,
  full_uz: "Qulupnay.",
  note: null
},
{
  num: 51,
  time: "00:02:29,400 --> 00:02:32,200",
  arabic: "صَحِيحٌ، أَحْسَنْتَ صُنْعًا يَا تُومُ.",
  segs: [
    { ar: "صَحِيحٌ", uz: "To'g'ri" },
    { ar: "أَحْسَنْتَ صُنْعًا", uz: "juda yaxshi" },
    { ar: "يَا تُومُ", uz: "Tom." }
  ],
  full_uz: "To'g'ri, juda yaxshi, Tom.",
  note: "«أَحْسَنْتَ صُنْعًا» — 'juda yaxshi ish qilding', 'barakalla' ma'nosida."
},
{
  num: 52,
  time: "00:02:32,200 --> 00:02:33,840",
  arabic: "وَهَذِهِ؟",
  segs: null,
  full_uz: "Bunisi-chi?",
  note: null
},
{
  num: 53,
  time: "00:02:33,840 --> 00:02:41,040",
  arabic: "هَذِهِ بِٱلْبُرْتُقَالِ.",
  segs: null,
  full_uz: "Bu apelsinli.",
  note: null
},
{
  num: 54,
  time: "00:02:41,040 --> 00:02:43,120",
  arabic: "بَلِ ٱللَّيْمُونُ، لَقَدْ أَخْطَأْتَ.",
  segs: [
    { ar: "بَلِ ٱللَّيْمُونُ", uz: "Yo'q, limonli" },
    { ar: "لَقَدْ أَخْطَأْتَ", uz: "sen xato qilding." }
  ],
  full_uz: "Yo'q, limonli. Sen xato qilding.",
  note: null
},
{
  num: 55,
  time: "00:02:43,120 --> 00:02:44,960",
  arabic: "نَعَمْ، أَخْطَأْتَ يَا تُومُ.",
  segs: [
    { ar: "نَعَمْ", uz: "Ha" },
    { ar: "أَخْطَأْتَ", uz: "xato qilding" },
    { ar: "يَا تُومُ", uz: "Tom." }
  ],
  full_uz: "Ha, xato qilding, Tom.",
  note: null
},
{
  num: 56,
  time: "00:02:44,960 --> 00:02:49,020",
  arabic: "إِنْ أَرَدْتَ أَنْ تَكُونَ ذَوَّاقًا، فَعَلَيْكَ أَنْ تَتَدَرَّبَ كَثِيرًا.",
  segs: [
    { ar: "إِنْ أَرَدْتَ أَنْ تَكُونَ ذَوَّاقًا", uz: "Agar ta'm biluvchi bo'lmoqchi bo'lsang" },
    { ar: "فَعَلَيْكَ أَنْ تَتَدَرَّبَ كَثِيرًا", uz: "ko'p mashq qilishing kerak." }
  ],
  full_uz: "Agar ta'm biluvchi bo'lmoqchi bo'lsang, ko'p mashq qilishing kerak.",
  note: null
},
{
  num: 57,
  time: "00:02:49,020 --> 00:02:49,920",
  arabic: "أَنَا مُسْتَعِدٌّ.",
  segs: null,
  full_uz: "Men tayyorman.",
  note: null
},
{
  num: 58,
  time: "00:02:49,919 --> 00:02:55,159",
  arabic: "ٱلتُّوتُ.",
  segs: null,
  full_uz: "Rezavor mevasi.",
  note: "«ٱلتُّوتُ» — umumiy ma'noda tut yoki boshqa rezavor mevalarni bildirishi mumkin; kontekstda berry ta'mi nazarda tutilgan."
},
{
  num: 59,
  time: "00:02:55,159 --> 00:02:56,799",
  arabic: "صَحِيحٌ.",
  segs: null,
  full_uz: "To'g'ri.",
  note: null
},
{
  num: 60,
  time: "00:02:56,799 --> 00:02:59,619",
  arabic: "سِيمْكَا، كَيْفَ تُصْنَعُ هَذِهِ ٱلْحَلْوَى؟",
  segs: [
    { ar: "سِيمْكَا", uz: "Simka" },
    { ar: "كَيْفَ تُصْنَعُ هَذِهِ ٱلْحَلْوَى؟", uz: "bu konfet qanday tayyorlanadi?" }
  ],
  full_uz: "Simka, bu konfet qanday tayyorlanadi?",
  note: null
},
{
  num: 61,
  time: "00:02:59,619 --> 00:03:02,979",
  arabic: "فَهِيَ قَاسِيَةٌ مِنَ ٱلْخَارِجِ وَسَائِلَةٌ مِنَ ٱلدَّاخِلِ.",
  segs: [
    { ar: "قَاسِيَةٌ مِنَ ٱلْخَارِجِ", uz: "Tashqarisi qattiq" },
    { ar: "وَسَائِلَةٌ مِنَ ٱلدَّاخِلِ", uz: "ichi esa suyuq." }
  ],
  full_uz: "Uning tashqarisi qattiq, ichi esa suyuq.",
  note: null
},
{
  num: 62,
  time: "00:03:02,979 --> 00:03:05,019",
  arabic: "لَا تَفْقِدِ ٱنْتِبَاهَكَ، تَدَرَّبْ.",
  segs: [
    { ar: "لَا تَفْقِدِ ٱنْتِبَاهَكَ", uz: "Diqqatingni yo'qotma" },
    { ar: "تَدَرَّبْ", uz: "mashq qil." }
  ],
  full_uz: "Diqqatingni yo'qotma, mashq qil.",
  note: null
},
{
  num: 63,
  time: "00:03:05,019 --> 00:03:10,419",
  arabic: "كَيْفَ تُصْنَعُ ٱلْحَلْوَى؟",
  segs: null,
  full_uz: "Konfet qanday tayyorlanadi?",
  note: null
},
{
  num: 64,
  time: "00:03:10,419 --> 00:03:14,879",
  arabic: "أَوَّلًا يُطْبَخُ سَائِلٌ حُلْوُ ٱلْمَذَاقِ حَتَّى يُصْبِحَ لَزِجًا وَثَخِينًا.",
  segs: [
    { ar: "أَوَّلًا", uz: "Avval" },
    { ar: "يُطْبَخُ سَائِلٌ حُلْوُ ٱلْمَذَاقِ", uz: "shirin suyuqlik pishiriladi" },
    { ar: "حَتَّى يُصْبِحَ لَزِجًا وَثَخِينًا", uz: "u yopishqoq va quyuq bo'lguncha." }
  ],
  full_uz: "Avval shirin suyuqlik yopishqoq va quyuq bo'lguncha pishiriladi.",
  note: null
},
{
  num: 65,
  time: "00:03:14,879 --> 00:03:18,839",
  arabic: "ثُمَّ يُصْنَعُ مِنَ ٱلْمَزِيجِ أَنَابِيبُ طَوِيلَةٌ تُشْبِهُ ٱلْمَعْكَرُونَةَ.",
  segs: [
    { ar: "ثُمَّ يُصْنَعُ مِنَ ٱلْمَزِيجِ", uz: "So'ng aralashmadan tayyorlanadi" },
    { ar: "أَنَابِيبُ طَوِيلَةٌ", uz: "uzun naychalar" },
    { ar: "تُشْبِهُ ٱلْمَعْكَرُونَةَ", uz: "makaronga o'xshash." }
  ],
  full_uz: "So'ng aralashmadan makaronga o'xshash uzun naychalar tayyorlanadi.",
  note: null
},
{
  num: 66,
  time: "00:03:18,840 --> 00:03:21,360",
  arabic: "ثُمَّ تُبَرَّدُ ٱلْحَلْوَى لِتُصْبِحَ قَاسِيَةً.",
  segs: [
    { ar: "ثُمَّ تُبَرَّدُ ٱلْحَلْوَى", uz: "So'ng konfet sovutiladi" },
    { ar: "لِتُصْبِحَ قَاسِيَةً", uz: "qattiq bo'lishi uchun." }
  ],
  full_uz: "So'ng konfet qattiq bo'lishi uchun sovutiladi.",
  note: null
},
{
  num: 67,
  time: "00:03:21,360 --> 00:03:25,680",
  arabic: "عِنْدَهَا يَتِمُّ مَلْءُ ٱلْأُنْبُوبِ بِسَائِلٍ بِطَعْمِ ٱلْفَوَاكِهِ.",
  segs: [
    { ar: "عِنْدَهَا يَتِمُّ مَلْءُ ٱلْأُنْبُوبِ", uz: "Shundan keyin naycha to'ldiriladi" },
    { ar: "بِسَائِلٍ بِطَعْمِ ٱلْفَوَاكِهِ", uz: "mevali ta'mli suyuqlik bilan." }
  ],
  full_uz: "Shundan keyin naycha mevali ta'mli suyuqlik bilan to'ldiriladi.",
  note: null
},
{
  num: 68,
  time: "00:03:25,680 --> 00:03:27,400",
  arabic: "ثُمَّ يَتِمُّ تَقْطِيعُهَا.",
  segs: null,
  full_uz: "So'ng u bo'laklarga kesiladi.",
  note: null
},
{
  num: 69,
  time: "00:03:27,400 --> 00:03:32,060",
  arabic: "وَيَجِبُ إِنْهَاءُ ٱلْعَمَلِ بِسُرْعَةٍ قَبْلَ أَنْ يَتَصَلَّبَ ٱلْأُنْبُوبُ تَمَامًا.",
  segs: [
    { ar: "وَيَجِبُ إِنْهَاءُ ٱلْعَمَلِ بِسُرْعَةٍ", uz: "Ishni tez tugatish kerak" },
    { ar: "قَبْلَ أَنْ يَتَصَلَّبَ ٱلْأُنْبُوبُ تَمَامًا", uz: "naycha butunlay qotib qolishidan oldin." }
  ],
  full_uz: "Ishni naycha butunlay qotib qolishidan oldin tez tugatish kerak.",
  note: null
},
{
  num: 70,
  time: "00:03:32,060 --> 00:03:36,719",
  arabic: "وَهَكَذَا تُصْنَعُ ٱلْحَلْوَى ٱلْقَاسِيَةُ مِنَ ٱلْخَارِجِ وَٱلطَّرِيَّةُ مِنَ ٱلدَّاخِلِ.",
  segs: [
    { ar: "وَهَكَذَا تُصْنَعُ ٱلْحَلْوَى", uz: "Shu tariqa konfet tayyorlanadi" },
    { ar: "ٱلْقَاسِيَةُ مِنَ ٱلْخَارِجِ", uz: "tashqarisi qattiq" },
    { ar: "وَٱلطَّرِيَّةُ مِنَ ٱلدَّاخِلِ", uz: "ichi esa yumshoq bo'lgan." }
  ],
  full_uz: "Shu tariqa tashqarisi qattiq, ichi esa yumshoq konfet tayyorlanadi.",
  note: null
},
{
  num: 71,
  time: "00:03:36,719 --> 00:03:37,860",
  arabic: "وَنَأْكُلُهَا.",
  segs: null,
  full_uz: "Keyin uni yeymiz.",
  note: null
},
{
  num: 72,
  time: "00:03:37,860 --> 00:03:48,099",
  arabic: "لَعَلَّهَا فَرَاوِلَةٌ، لَمْ أَعُدْ أُمَيِّزُ بَيْنَ ٱلطُّعُومِ.",
  segs: [
    { ar: "لَعَلَّهَا فَرَاوِلَةٌ", uz: "Balki qulupnaydir" },
    { ar: "لَمْ أَعُدْ أُمَيِّزُ بَيْنَ ٱلطُّعُومِ", uz: "ta'mlarni endi ajrata olmayapman." }
  ],
  full_uz: "Balki qulupnaydir, ta'mlarni endi ajrata olmayapman.",
  note: null
},
{
  num: 73,
  time: "00:03:48,099 --> 00:03:49,060",
  arabic: "آخْ!",
  segs: null,
  full_uz: "Voy!",
  note: null
},
{
  num: 74,
  time: "00:03:49,060 --> 00:03:50,460",
  arabic: "مَا بِكَ؟",
  segs: null,
  full_uz: "Senga nima bo'ldi?",
  note: null
},
{
  num: 75,
  time: "00:03:50,460 --> 00:03:51,060",
  arabic: "سِنِّي!",
  segs: null,
  full_uz: "Tishim!",
  note: null
},
{
  num: 76,
  time: "00:03:51,060 --> 00:03:56,759",
  arabic: "هَلْ أَسْمَعُ أَصْوَاتًا أَمْ أَنْتَ تَصْرُخُ؟",
  segs: [
    { ar: "هَلْ أَسْمَعُ أَصْوَاتًا", uz: "Ovozlar eshitayapmanmi" },
    { ar: "أَمْ أَنْتَ تَصْرُخُ؟", uz: "yoki o'zing baqiryapsanmi?" }
  ],
  full_uz: "Ovozlar eshitayapmanmi yoki o'zing baqiryapsanmi?",
  note: null
},
{
  num: 77,
  time: "00:03:56,759 --> 00:04:01,599",
  arabic: "لَقَدْ فَهِمْتُ.",
  segs: null,
  full_uz: "Tushundim.",
  note: null
},
{
  num: 78,
  time: "00:04:01,599 --> 00:04:04,120",
  arabic: "هَيَّا لِنُلْقِ نَظْرَةً عَلَى سِنِّكَ.",
  segs: [
    { ar: "هَيَّا", uz: "Qani" },
    { ar: "لِنُلْقِ نَظْرَةً عَلَى سِنِّكَ", uz: "tishingni ko'raylik." }
  ],
  full_uz: "Qani, tishingni ko'raylik.",
  note: null
},
{
  num: 79,
  time: "00:04:04,120 --> 00:04:13,000",
  arabic: "إِنَّ مِهْنَةَ ٱلذَّوَّاقِ مِنَ ٱلْمِهَنِ ٱلشَّائِعَةِ فِي ٱلْعَالَمِ بِأَسْرِهِ.",
  segs: [
    { ar: "إِنَّ مِهْنَةَ ٱلذَّوَّاقِ", uz: "Ta'm biluvchilik kasbi" },
    { ar: "مِنَ ٱلْمِهَنِ ٱلشَّائِعَةِ", uz: "keng tarqalgan kasblardan biridir" },
    { ar: "فِي ٱلْعَالَمِ بِأَسْرِهِ", uz: "butun dunyoda." }
  ],
  full_uz: "Ta'm biluvchilik kasbi butun dunyoda keng tarqalgan kasblardan biridir.",
  note: null
},
{
  num: 80,
  time: "00:04:13,000 --> 00:04:18,459",
  arabic: "فَهُمْ يَتَذَوَّقُونَ مُخْتَلِفَ أَنْوَاعِ ٱلْجُبْنِ وَٱلشُّوكُولَاتَةِ لِيُقَرِّرُوا أَيُّهَا ٱلْأَلَذُّ.",
  segs: [
    { ar: "فَهُمْ يَتَذَوَّقُونَ", uz: "Ular tatib ko'rishadi" },
    { ar: "مُخْتَلِفَ أَنْوَاعِ ٱلْجُبْنِ وَٱلشُّوكُولَاتَةِ", uz: "turli xil pishloq va shokoladlarni" },
    { ar: "لِيُقَرِّرُوا أَيُّهَا ٱلْأَلَذُّ", uz: "qaysi biri mazaliroq ekanini aniqlash uchun." }
  ],
  full_uz: "Ular qaysi biri mazaliroq ekanini aniqlash uchun turli xil pishloq va shokoladlarni tatib ko'rishadi.",
  note: null
},
{
  num: 81,
  time: "00:04:18,459 --> 00:04:21,699",
  arabic: "وَيَتِمُّ تَذَوُّقُ كُلِّ شَيْءٍ، حَتَّى ٱلْمَاءِ.",
  segs: [
    { ar: "وَيَتِمُّ تَذَوُّقُ كُلِّ شَيْءٍ", uz: "Har bir narsa tatib ko'riladi" },
    { ar: "حَتَّى ٱلْمَاءِ", uz: "hatto suv ham." }
  ],
  full_uz: "Har bir narsa, hatto suv ham tatib ko'riladi.",
  note: null
},
{
  num: 82,
  time: "00:04:21,699 --> 00:04:24,819",
  arabic: "لِأَنَّ طَعْمَ ٱلْمَاءِ يَخْتَلِفُ مَعَ ٱخْتِلَافِ مَصْدَرِهِ.",
  segs: [
    { ar: "لِأَنَّ طَعْمَ ٱلْمَاءِ", uz: "Chunki suvning ta'mi" },
    { ar: "يَخْتَلِفُ مَعَ ٱخْتِلَافِ مَصْدَرِهِ", uz: "manbasiga qarab farq qiladi." }
  ],
  full_uz: "Chunki suvning ta'mi uning manbasiga qarab farq qiladi.",
  note: null
},
{
  num: 83,
  time: "00:04:24,819 --> 00:04:30,139",
  arabic: "هُنَاكَ أَيْضًا بَعْضُ ٱلذَّوَّاقِينَ ٱلَّذِينَ لَا يَتَذَوَّقُونَ ٱلطَّعَامَ أَوِ ٱلشَّرَابَ.",
  segs: [
    { ar: "هُنَاكَ أَيْضًا بَعْضُ ٱلذَّوَّاقِينَ", uz: "Yana shunday ta'm biluvchilar ham borki" },
    { ar: "لَا يَتَذَوَّقُونَ ٱلطَّعَامَ أَوِ ٱلشَّرَابَ", uz: "ular ovqat yoki ichimlikni tatib ko'rmaydilar." }
  ],
  full_uz: "Yana shunday ta'm biluvchilar ham borki, ular ovqat yoki ichimlikni tatib ko'rmaydilar.",
  note: null
},
{
  num: 84,
  time: "00:04:30,139 --> 00:04:35,139",
  arabic: "بَلْ عِوَضًا عَنْ ذَلِكَ يَخْتَبِرُونَ رَائِحَةَ ٱلْأَشْيَاءِ كَٱلْعُطُورِ وَمُزِيلَاتِ ٱلْعَرَقِ.",
  segs: [
    { ar: "بَلْ عِوَضًا عَنْ ذَلِكَ", uz: "Aksincha" },
    { ar: "يَخْتَبِرُونَ رَائِحَةَ ٱلْأَشْيَاءِ", uz: "narsalarning hidini sinaydilar" },
    { ar: "كَٱلْعُطُورِ وَمُزِيلَاتِ ٱلْعَرَقِ", uz: "masalan atirlar va dezodorantlarni." }
  ],
  full_uz: "Aksincha, ular atirlar va dezodorantlar kabi narsalarning hidini sinaydilar.",
  note: null
},
{
  num: 85,
  time: "00:04:35,139 --> 00:04:38,000",
  arabic: "لَيْسَ كُلُّ ٱلنَّاسِ مُؤَهَّلِينَ لِيَكُونُوا ذَوَّاقِينَ.",
  segs: [
    { ar: "لَيْسَ كُلُّ ٱلنَّاسِ", uz: "Har bir inson ham" },
    { ar: "مُؤَهَّلِينَ لِيَكُونُوا ذَوَّاقِينَ", uz: "ta'm biluvchi bo'lishga munosib emas." }
  ],
  full_uz: "Har bir inson ham ta'm biluvchi bo'lishga munosib emas.",
  note: null
},
{
  num: 86,
  time: "00:04:38,000 --> 00:04:43,560",
  arabic: "أَوَّلًا يَجِبُ أَنْ تَكُونُوا قَادِرِينَ عَلَى ٱلتَّمْيِيزِ بَيْنَ مُخْتَلِفِ أَنْوَاعِ ٱلْأَطْعِمَةِ وَٱلرَّوَائِحِ.",
  segs: [
    { ar: "أَوَّلًا يَجِبُ أَنْ تَكُونُوا قَادِرِينَ", uz: "Avvalo qodir bo'lishingiz kerak" },
    { ar: "عَلَى ٱلتَّمْيِيزِ", uz: "ajrata olishga" },
    { ar: "بَيْنَ مُخْتَلِفِ أَنْوَاعِ ٱلْأَطْعِمَةِ وَٱلرَّوَائِحِ", uz: "turli ovqatlar va hidlarni." }
  ],
  full_uz: "Avvalo turli ovqatlar va hidlarni ajrata olishingiz kerak.",
  note: null
},
{
  num: 87,
  time: "00:04:43,560 --> 00:04:46,339",
  arabic: "وَأَنْ تَعْلَمُوا مَتَى تَتَوَقَّفُونَ عَنِ ٱلتَّذَوُّقِ.",
  segs: [
    { ar: "وَأَنْ تَعْلَمُوا", uz: "Shuningdek bilishingiz kerak" },
    { ar: "مَتَى تَتَوَقَّفُونَ عَنِ ٱلتَّذَوُّقِ", uz: "qachon tatib ko'rishni to'xtatishni." }
  ],
  full_uz: "Shuningdek qachon tatib ko'rishni to'xtatishni bilishingiz kerak.",
  note: null
},
{
  num: 88,
  time: "00:04:46,339 --> 00:04:50,040",
  arabic: "وَإِلَّا فَسَتَمْرَضُونَ وَتَخْسَرُونَ قُدْرَتَكُمْ عَلَى ٱلتَّمْيِيزِ.",
  segs: [
    { ar: "وَإِلَّا", uz: "Aks holda" },
    { ar: "فَسَتَمْرَضُونَ", uz: "kasal bo'lib qolasiz" },
    { ar: "وَتَخْسَرُونَ قُدْرَتَكُمْ عَلَى ٱلتَّمْيِيزِ", uz: "hamda ajrata olish qobiliyatingizni yo'qotasiz." }
  ],
  full_uz: "Aks holda kasal bo'lib qolasiz va ajrata olish qobiliyatingizni yo'qotasiz.",
  note: null
},
{
  num: 89,
  time: "00:04:50,040 --> 00:04:57,879",
  arabic: "وَلِهَذَا ٱلسَّبَبِ يَكْتَفِي ٱلذَّوَّاقُونَ بِلُقَيْمَاتٍ صَغِيرَةٍ مِنَ ٱلطَّعَامِ وَرَشَفَاتٍ قَلِيلَةٍ جِدًّا مِنَ ٱلشَّرَابِ.",
  segs: [
    { ar: "وَلِهَذَا ٱلسَّبَبِ", uz: "Shu sababli" },
    { ar: "يَكْتَفِي ٱلذَّوَّاقُونَ", uz: "ta'm biluvchilar kifoyalanadilar" },
    { ar: "بِلُقَيْمَاتٍ صَغِيرَةٍ مِنَ ٱلطَّعَامِ", uz: "ovqatning kichik luqmalari bilan" },
    { ar: "وَرَشَفَاتٍ قَلِيلَةٍ جِدًّا مِنَ ٱلشَّرَابِ", uz: "va ichimlikning juda oz ho'plamlari bilan." }
  ],
  full_uz: "Shu sababli ta'm biluvchilar ovqatning kichik luqmalari va ichimlikning juda oz ho'plamlari bilan kifoyalanadilar.",
  note: null
},
{
  num: 90,
  time: "00:04:57,879 --> 00:05:05,339",
  arabic: "مِنَ ٱلْجَيِّدِ أَنْ تَكُونَ أُمُّكَ طَبِيبَةَ أَسْنَانٍ لِتَعْتَنِيَ بِأَسْنَانِكَ.",
  segs: [
    { ar: "مِنَ ٱلْجَيِّدِ", uz: "Yaxshi ekan" },
    { ar: "أَنْ تَكُونَ أُمُّكَ طَبِيبَةَ أَسْنَانٍ", uz: "onang tish shifokori bo'lgani" },
    { ar: "لِتَعْتَنِيَ بِأَسْنَانِكَ", uz: "tishlaringga qarashi uchun." }
  ],
  full_uz: "Onang tish shifokori ekani yaxshi, u tishlaringga qaraydi.",
  note: null
},
{
  num: 91,
  time: "00:05:05,339 --> 00:05:10,060",
  arabic: "هَذَا صَحِيحٌ، إِنَّهَا بَارِعَةٌ، سَتُصْلِحُ سِنَّهُ بِسُرْعَةٍ.",
  segs: [
    { ar: "هَذَا صَحِيحٌ", uz: "Bu to'g'ri" },
    { ar: "إِنَّهَا بَارِعَةٌ", uz: "u juda mohir" },
    { ar: "سَتُصْلِحُ سِنَّهُ بِسُرْعَةٍ", uz: "uning tishini tezda davolaydi." }
  ],
  full_uz: "Bu to'g'ri, u juda mohir, uning tishini tezda davolaydi.",
  note: null
},
{
  num: 92,
  time: "00:05:10,060 --> 00:05:13,560",
  arabic: "بَلْ سَتَقْلَعُهَا بِسُرْعَةٍ.",
  segs: [
    { ar: "بَلْ", uz: "Yo'q" },
    { ar: "سَتَقْلَعُهَا بِسُرْعَةٍ", uz: "uni tezda sug'urib tashlaydi." }
  ],
  full_uz: "Yo'q, uni tezda sug'urib tashlaydi.",
  note: null
},
{
  num: 93,
  time: "00:05:13,560 --> 00:05:22,339",
  arabic: "إِذًا، هَلِ ٱقْتَلَعَتْهَا؟",
  segs: [
    { ar: "إِذًا", uz: "Xo'sh" },
    { ar: "هَلِ ٱقْتَلَعَتْهَا؟", uz: "uni sug'urib tashladimi?" }
  ],
  full_uz: "Xo'sh, uni sug'urib tashladimi?",
  note: null
},
{
  num: 94,
  time: "00:05:23,759 --> 00:05:26,120",
  arabic: "لَا، بَلْ أَعْطَتْنِي مُسَكِّنًا لِلْأَلَمِ.",
  segs: [
    { ar: "لَا", uz: "Yo'q" },
    { ar: "بَلْ أَعْطَتْنِي", uz: "aksincha menga berdi" },
    { ar: "مُسَكِّنًا لِلْأَلَمِ", uz: "og'riq qoldiruvchi dori." }
  ],
  full_uz: "Yo'q, aksincha menga og'riq qoldiruvchi dori berdi.",
  note: null
},
{
  num: 95,
  time: "00:05:26,120 --> 00:05:28,339",
  arabic: "وَهَلْ تُؤْلِمُكَ سِنُّكَ؟",
  segs: null,
  full_uz: "Tishing hali ham og'riyaptimi?",
  note: null
},
{
  num: 96,
  time: "00:05:28,959 --> 00:05:29,959",
  arabic: "أَجَلْ، قَلِيلًا.",
  segs: [
    { ar: "أَجَلْ", uz: "Ha" },
    { ar: "قَلِيلًا", uz: "biroz." }
  ],
  full_uz: "Ha, biroz.",
  note: null
},
{
  num: 97,
  time: "00:05:29,959 --> 00:05:34,120",
  arabic: "هَاهَا، فَقَدْ عَرَفْتُ مَنْ هُوَ أَرْوَعُ مِنَ ٱلْمُلَاكِمِينَ.",
  segs: [
    { ar: "هَاهَا", uz: "Ana" },
    { ar: "فَقَدْ عَرَفْتُ", uz: "endi bildim" },
    { ar: "مَنْ هُوَ أَرْوَعُ مِنَ ٱلْمُلَاكِمِينَ", uz: "bokschilardan ham zo'rroq kimligini." }
  ],
  full_uz: "Ana, endi bokschilardan ham zo'rroq kimligini bildim.",
  note: null
},
{
  num: 98,
  time: "00:05:35,339 --> 00:05:36,339",
  arabic: "مَنْ؟",
  segs: null,
  full_uz: "Kim?",
  note: null
},
{
  num: 99,
  time: "00:05:36,339 --> 00:05:37,699",
  arabic: "أَطِبَّاءُ ٱلْأَسْنَانِ.",
  segs: null,
  full_uz: "Tish shifokorlari.",
  note: null
},
{
  num: 100,
  time: "00:05:37,699 --> 00:05:41,199",
  arabic: "حَتَّى أَقْوَى ٱلْمُلَاكِمِينَ يَخَافُونَ طَبِيبَ ٱلْأَسْنَانِ.",
  segs: [
    { ar: "حَتَّى أَقْوَى ٱلْمُلَاكِمِينَ", uz: "Hatto eng kuchli bokschilar ham" },
    { ar: "يَخَافُونَ طَبِيبَ ٱلْأَسْنَانِ", uz: "tish shifokoridan qo'rqadilar." }
  ],
  full_uz: "Hatto eng kuchli bokschilar ham tish shifokoridan qo'rqadilar.",
  note: null
}];
if (typeof module !== "undefined" && module.exports) {
  module.exports = lessons;
}