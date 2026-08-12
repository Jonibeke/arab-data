const lessons = [
    {
  num: 1,
  time: "00:00:04,200 --> 00:00:08,840",
  arabic: "لِلْفِيكْسِيزِ شَعْرَةٌ فِي ٱللِّقَاءِ، عَلِمْتُ بِهَا بِٱلصُّدْفَةِ.",
  segs: [
    { ar: "لِلْفِيكْسِيزِ شَعْرَةٌ فِي ٱللِّقَاءِ", uz: "Fiksiklarning uchrashuvdagi o‘ziga xos belgisi bor" },
    { ar: "عَلِمْتُ بِهَا بِٱلصُّدْفَةِ", uz: "uni tasodifan bilib qoldim." }
  ],
  full_uz: "Fiksiklarning uchrashuvdagi o‘ziga xos belgisi bor, uni tasodifan bilib qoldim.",
  note: "Qo‘shiq matnida ayrim iboralar noaniq, kontekst asosida tuzatildi"
},
{
  num: 2,
  time: "00:00:08,840 --> 00:00:13,799",
  arabic: "ثَلَاثُ أَصَابِعَ فِي ٱلْهَوَاءِ تَجْعَلُهُمْ أَكْثَرَ لُطْفًا.",
  segs: [
    { ar: "ثَلَاثُ أَصَابِعَ فِي ٱلْهَوَاءِ", uz: "Havoga ko‘tarilgan uch barmoq" },
    { ar: "تَجْعَلُهُمْ أَكْثَرَ لُطْفًا", uz: "ularni yanada yoqimli qiladi." }
  ],
  full_uz: "Havoga ko‘tarilgan uch barmoq ularni yanada yoqimli qiladi.",
  note: null
},
{
  num: 3,
  time: "00:00:13,799 --> 00:00:19,039",
  arabic: "مَا أَحْلَى عَالَمَهُمْ، كُنْ مَرِحًا مِثْلَهُمْ.",
  segs: [
    { ar: "مَا أَحْلَى عَالَمَهُمْ", uz: "Ularning olami naqadar go‘zal" },
    { ar: "كُنْ مَرِحًا مِثْلَهُمْ", uz: "ular kabi quvnoq bo‘l." }
  ],
  full_uz: "Ularning olami naqadar go‘zal, ular kabi quvnoq bo‘l.",
  note: null
},
{
  num: 4,
  time: "00:00:19,039 --> 00:00:24,320",
  arabic: "مِنْ أَيْنَ أَتَوْا؟ مَا شَكْلُهُمْ؟ مَنْ يَعْرِفُ سِرَّهُمْ؟",
  segs: [
    { ar: "مِنْ أَيْنَ أَتَوْا", uz: "Qayerdan kelishgan" },
    { ar: "مَا شَكْلُهُمْ", uz: "ko‘rinishlari qanday" },
    { ar: "مَنْ يَعْرِفُ سِرَّهُمْ", uz: "ularning sirini kim biladi?" }
  ],
  full_uz: "Qayerdan kelishgan, ko‘rinishlari qanday, ularning sirini kim biladi?",
  note: null
},
{
  num: 5,
  time: "00:00:24,320 --> 00:00:31,960",
  arabic: "مِنْ أَيْنَ أَتَوْا؟ مَا شَكْلُهُمْ؟ مَنْ يَعْرِفُ سِرَّهُمْ؟",
  segs: [
    { ar: "مِنْ أَيْنَ أَتَوْا", uz: "Qayerdan kelishgan" },
    { ar: "مَا شَكْلُهُمْ", uz: "ko‘rinishlari qanday" },
    { ar: "مَنْ يَعْرِفُ سِرَّهُمْ", uz: "ularning sirini kim biladi?" }
  ],
  full_uz: "Qayerdan kelishgan, ko‘rinishlari qanday, ularning sirini kim biladi?",
  note: null
},
{
  num: 6,
  time: "00:00:32,520 --> 00:00:36,960",
  arabic: "خَيَالُ ٱلظِّلِّ.",
  segs: null,
  full_uz: "Soya teatri.",
  note: null
},
{
  num: 7,
  time: "00:00:36,960 --> 00:00:40,320",
  arabic: "آهْ، مَرْحَبًا، كَيْفَ حَالُكَ يَا تُومُ؟",
  segs: [
    { ar: "مَرْحَبًا", uz: "Salom" },
    { ar: "كَيْفَ حَالُكَ يَا تُومُ", uz: "ahvoling qanday, Tom?" }
  ],
  full_uz: "Salom, ahvoling qanday, Tom?",
  note: null
},
{
  num: 8,
  time: "00:00:40,320 --> 00:00:41,359",
  arabic: "مَاذَا تَفْعَلُ هُنَا؟",
  segs: null,
  full_uz: "Bu yerda nima qilyapsan?",
  note: null
},
{
  num: 9,
  time: "00:00:41,359 --> 00:00:43,299",
  arabic: "أَوْقَعْتُ مِشْبَكَ ٱلْوَرَقِ.",
  segs: null,
  full_uz: "Qog‘oz qisqichini tushirib yubordim.",
  note: null
},
{
  num: 10,
  time: "00:00:43,299 --> 00:00:45,759",
  arabic: "تَحْتَ ٱلضَّوْءِ.",
  segs: null,
  full_uz: "Chiroq tagiga.",
  note: null
},
{
  num: 11,
  time: "00:00:45,759 --> 00:00:50,379",
  arabic: "مَا ٱلَّذِي يُضْحِكُكَ؟",
  segs: null,
  full_uz: "Nimaga kulyapsan?",
  note: null
},
{
  num: 12,
  time: "00:00:50,379 --> 00:00:51,939",
  arabic: "نَحْنُ نُحَاوِلُ مُسَاعَدَتَكَ.",
  segs: null,
  full_uz: "Biz senga yordam berishga harakat qilyapmiz.",
  note: null
},
{
  num: 13,
  time: "00:00:51,939 --> 00:00:53,439",
  arabic: "ظِلَالُكُمْ مُضْحِكَةٌ.",
  segs: null,
  full_uz: "Soyangiz kulgili ekan.",
  note: null
},
{
  num: 14,
  time: "00:00:53,439 --> 00:00:54,500",
  arabic: "لِهَذَا أَضْحَكُ.",
  segs: null,
  full_uz: "Shuning uchun kuldim.",
  note: null
},
{
  num: 15,
  time: "00:00:54,500 --> 00:00:58,359",
  arabic: "ٱنْظُرْ إِلَى هَذَا.",
  segs: null,
  full_uz: "Mana bunga qara.",
  note: null
},
{
  num: 16,
  time: "00:00:58,359 --> 00:01:02,060",
  arabic: "إِنَّهُ نَفْسُ وَضْعِكَ وَوَضْعِهَا.",
  segs: [
    { ar: "إِنَّهُ نَفْسُ وَضْعِكَ", uz: "Bu xuddi sening holating" },
    { ar: "وَوَضْعِهَا", uz: "va uning holatidek." }
  ],
  full_uz: "Bu xuddi sening holating va uning holatidek.",
  note: "SRT matni noaniq bo‘lgani uchun kontekst asosida tuzatildi"
},
{
  num: 17,
  time: "00:01:02,060 --> 00:01:05,599",
  arabic: "إِنَّهَا تُشْبِهُ حَيَوَانَ ٱلرَّنَّةِ.",
  segs: null,
  full_uz: "U bug‘uga o‘xshayapti.",
  note: null
},
{
  num: 18,
  time: "00:01:05,599 --> 00:01:07,500",
  arabic: "قُلْتَ ٱلرَّنَّةَ؟",
  segs: null,
  full_uz: "Bug‘u dedingmi?",
  note: null
},
{
  num: 19,
  time: "00:01:07,500 --> 00:01:08,599",
  arabic: "هَذَا؟",
  segs: null,
  full_uz: "Shumi?",
  note: null
},
{
  num: 20,
  time: "00:01:08,599 --> 00:01:16,359",
  arabic: "تَبْدُوَانِ مُمَثِّلَيْنِ يُؤَدِّيَانِ عَرْضًا.",
  segs: [
    { ar: "تَبْدُوَانِ مُمَثِّلَيْنِ", uz: "Ikkalang ham aktyorga o‘xshaysiz" },
    { ar: "يُؤَدِّيَانِ عَرْضًا", uz: "sahna ko‘rsatayotgan." }
  ],
  full_uz: "Ikkalang ham sahna ko‘rsatayotgan aktyorlarga o‘xshaysiz.",
  note: null
},
{
  num: 21,
  time: "00:01:17,000 --> 00:01:17,359",
  arabic: "شُكْرًا.",
  segs: null,
  full_uz: "Rahmat.",
  note: null
},
{
  num: 22,
  time: "00:01:18,079 --> 00:01:20,480",
  arabic: "ٱلْمُمَثِّلُونَ يُؤَدُّونَ عُرُوضَهُمْ فِي ٱلْمَسْرَحِ.",
  segs: [
    { ar: "ٱلْمُمَثِّلُونَ يُؤَدُّونَ عُرُوضَهُمْ", uz: "Aktyorlar o‘z tomoshalarini namoyish etadilar" },
    { ar: "فِي ٱلْمَسْرَحِ", uz: "teatrda." }
  ],
  full_uz: "Aktyorlar o‘z tomoshalarini teatrda namoyish etadilar.",
  note: null
},
{
  num: 23,
  time: "00:01:20,480 --> 00:01:21,939",
  arabic: "وَنَحْنُ تَحْتَ ٱلسَّرِيرِ.",
  segs: null,
  full_uz: "Biz esa karavot ostidamiz.",
  note: null
},
{
  num: 24,
  time: "00:01:21,939 --> 00:01:23,280",
  arabic: "وَمَا ٱلْمُشْكِلَةُ؟",
  segs: null,
  full_uz: "Buning nimasi yomon?",
  note: null
},
{
  num: 25,
  time: "00:01:23,280 --> 00:01:25,359",
  arabic: "مَا رَأْيُكُمَا أَنْ نَصْنَعَ مَسْرَحَنَا ٱلْخَاصَّ؟",
  segs: [
    { ar: "مَا رَأْيُكُمَا", uz: "Nima deysizlar" },
    { ar: "أَنْ نَصْنَعَ مَسْرَحَنَا ٱلْخَاصَّ", uz: "o‘z teatrimizni qursak?" }
  ],
  full_uz: "Nima deysizlar, o‘z teatrimizni qursak?",
  note: null
},
{
  num: 26,
  time: "00:01:25,359 --> 00:01:28,340",
  arabic: "خَاصًّا بِالظِّلَالِ.",
  segs: null,
  full_uz: "Soyalar teatri.",
  note: null
},
{
  num: 27,
  time: "00:01:28,340 --> 00:01:29,180",
  arabic: "رَائِعٌ!",
  segs: null,
  full_uz: "Zo‘r!",
  note: null
},
{
  num: 28,
  time: "00:01:29,180 --> 00:01:33,019",
  arabic: "هَيَّا يَا تُومُ، نَحْتَاجُ إِلَى قِطْعَةِ وَرَقٍ كَبِيرَةٍ.",
  segs: [
    { ar: "هَيَّا يَا تُومُ", uz: "Qani, Tom" },
    { ar: "نَحْتَاجُ إِلَى قِطْعَةِ وَرَقٍ كَبِيرَةٍ", uz: "bizga katta qog‘oz kerak." }
  ],
  full_uz: "Qani, Tom, bizga katta qog‘oz kerak.",
  note: null
},
{
  num: 29,
  time: "00:01:33,019 --> 00:01:39,379",
  arabic: "مِنَ ٱلسَّهْلِ جِدًّا أَنْ تَصْنَعَ مَسْرَحَ ٱلظِّلَالِ ٱلْخَاصَّ بِكَ.",
  segs: [
    { ar: "مِنَ ٱلسَّهْلِ جِدًّا", uz: "Juda oson" },
    { ar: "أَنْ تَصْنَعَ مَسْرَحَ ٱلظِّلَالِ ٱلْخَاصَّ بِكَ", uz: "o‘zingning soyalar teatringni yasashing." }
  ],
  full_uz: "O‘zingning soyalar teatringni yasash juda oson.",
  note: null
},
{
  num: 30,
  time: "00:01:39,379 --> 00:01:44,239",
  arabic: "يُمْكِنُكَ أَنْ تَصْنَعَ ٱلشَّاشَةَ مِنْ وَرَقَةٍ بَيْضَاءَ أَوْ قِطْعَةٍ كَبِيرَةٍ مِنَ ٱلْوَرَقِ.",
  segs: [
    { ar: "يُمْكِنُكَ أَنْ تَصْنَعَ ٱلشَّاشَةَ", uz: "Ekranni yasashing mumkin" },
    { ar: "مِنْ وَرَقَةٍ بَيْضَاءَ أَوْ قِطْعَةٍ كَبِيرَةٍ مِنَ ٱلْوَرَقِ", uz: "oq qog‘ozdan yoki katta qog‘oz bo‘lagidan." }
  ],
  full_uz: "Ekranni oq qog‘ozdan yoki katta qog‘oz bo‘lagidan yasashing mumkin.",
  note: null
},
{
  num: 31,
  time: "00:01:44,239 --> 00:01:48,180",
  arabic: "ثُمَّ ٱجْعَلِ ٱلْغُرْفَةَ مُظْلِمَةً وَأَضِئْ مِصْبَاحًا عَلَى ٱلشَّاشَةِ.",
  segs: [
    { ar: "ثُمَّ ٱجْعَلِ ٱلْغُرْفَةَ مُظْلِمَةً", uz: "Keyin xonani qorong‘i qil" },
    { ar: "وَأَضِئْ مِصْبَاحًا عَلَى ٱلشَّاشَةِ", uz: "va ekranga chiroq yoq." }
  ],
  full_uz: "Keyin xonani qorong‘i qilib, ekranga chiroq yoq.",
  note: null
},
{
  num: 32,
  time: "00:01:48,180 --> 00:01:53,219",
  arabic: "وَٱلْآنَ لِصُنْعِ ٱلظِّلَالِ ضَعْ نَفْسَكَ أَوْ دُمْيَةً مِنَ ٱلْوَرَقِ ٱلْمُقَوَّى بَيْنَ ٱلْمِصْبَاحِ وَٱلشَّاشَةِ.",
  segs: [
    { ar: "وَٱلْآنَ لِصُنْعِ ٱلظِّلَالِ", uz: "Endi soyani hosil qilish uchun" },
    { ar: "ضَعْ نَفْسَكَ أَوْ دُمْيَةً مِنَ ٱلْوَرَقِ ٱلْمُقَوَّى", uz: "o‘zingni yoki kartondan yasalgan qo‘g‘irchoqni qo‘y" },
    { ar: "بَيْنَ ٱلْمِصْبَاحِ وَٱلشَّاشَةِ", uz: "chiroq bilan ekran orasiga." }
  ],
  full_uz: "Endi soyani hosil qilish uchun o‘zingni yoki kartondan yasalgan qo‘g‘irchoqni chiroq bilan ekran orasiga qo‘y.",
  note: null
},
{
  num: 33,
  time: "00:01:53,219 --> 00:01:56,039",
  arabic: "سَيَظْهَرُ خَيَالُكَ أَوْ خَيَالُ ٱلدُّمْيَةِ ٱلْمُتَحَرِّكَةِ.",
  segs: [
    { ar: "سَيَظْهَرُ خَيَالُكَ", uz: "Sening soyang paydo bo‘ladi" },
    { ar: "أَوْ خَيَالُ ٱلدُّمْيَةِ ٱلْمُتَحَرِّكَةِ", uz: "yoki qo‘g‘irchoqning soyasi." }
  ],
  full_uz: "Sening soyang yoki qo‘g‘irchoqning soyasi paydo bo‘ladi.",
  note: null
},
{
  num: 34,
  time: "00:01:56,039 --> 00:02:00,959",
  arabic: "وَلَكِنْ تَحَقَّقْ أَنَّ ٱلْجُمْهُورَ يَجْلِسُ عَلَى ٱلْجِهَةِ ٱلْأُخْرَى مِنَ ٱلشَّاشَةِ.",
  segs: [
    { ar: "وَلَكِنْ تَحَقَّقْ", uz: "Lekin ishonch hosil qil" },
    { ar: "أَنَّ ٱلْجُمْهُورَ يَجْلِسُ عَلَى ٱلْجِهَةِ ٱلْأُخْرَى مِنَ ٱلشَّاشَةِ", uz: "tomoshabinlar ekranning narigi tomonida o‘tirishiga." }
  ],
  full_uz: "Lekin tomoshabinlar ekranning narigi tomonida o‘tirishiga ishonch hosil qil.",
  note: null
},
{
  num: 35,
  time: "00:02:00,959 --> 00:02:04,420",
  arabic: "لِأَنَّ ٱلْعَرْضَ فِي هَذِهِ ٱلْحَالَةِ سَيَكُونُ أَجْمَلَ بِكَثِيرٍ.",
  segs: [
    { ar: "لِأَنَّ ٱلْعَرْضَ", uz: "Chunki tomosha" },
    { ar: "فِي هَذِهِ ٱلْحَالَةِ سَيَكُونُ أَجْمَلَ بِكَثِيرٍ", uz: "bu holda ancha chiroyli bo‘ladi." }
  ],
  full_uz: "Chunki bu holda tomosha ancha chiroyli bo‘ladi.",
  note: null
},
{
  num: 36,
  time: "00:02:04,420 --> 00:02:09,199",
  arabic: "وَٱلْآنَ يَا تُومُ، أَضَعُ ٱلضَّوْءَ.",
  segs: [
    { ar: "وَٱلْآنَ يَا تُومُ", uz: "Endi, Tom" },
    { ar: "أَضَعُ ٱلضَّوْءَ", uz: "chiroqni yoqaman." }
  ],
  full_uz: "Endi, Tom, chiroqni yoqaman.",
  note: null
},
{
  num: 37,
  time: "00:02:09,199 --> 00:02:12,039",
  arabic: "أُوهْ! وَاوْ!",
  segs: null,
  full_uz: "Voy! Vau!",
  note: null
},
{
  num: 38,
  time: "00:02:12,039 --> 00:02:15,439",
  arabic: "سِيمْكَا، تَبْدِينَ مِثْلَ ذَاتِ ٱلرِّدَاءِ ٱلْأَحْمَرِ ٱلْحَقِيقِيَّةِ.",
  segs: [
    { ar: "سِيمْكَا", uz: "Simka" },
    { ar: "تَبْدِينَ مِثْلَ ذَاتِ ٱلرِّدَاءِ ٱلْأَحْمَرِ ٱلْحَقِيقِيَّةِ", uz: "haqiqiy Qizil qalpoqchaga o‘xshayapsan." }
  ],
  full_uz: "Simka, haqiqiy Qizil qalpoqchaga o‘xshayapsan.",
  note: null
},
{
  num: 39,
  time: "00:02:15,439 --> 00:02:21,000",
  arabic: "مَرْحَبًا يَا حَفِيدَتِي ٱلْعَزِيزَةُ.",
  segs: null,
  full_uz: "Salom, aziz nabiram.",
  note: null
},
{
  num: 40,
  time: "00:02:21,000 --> 00:02:22,199",
  arabic: "مَرْحَبًا يَا جَدَّتِي.",
  segs: null,
  full_uz: "Salom, buvijon.",
  note: null
},
{
  num: 41,
  time: "00:02:22,199 --> 00:02:25,780",
  arabic: "جَدَّتِي، لِمَاذَا لَدَيْكِ عَيْنَانِ كَبِيرَتَانِ جِدًّا؟",
  segs: [
    { ar: "جَدَّتِي", uz: "Buvijon" },
    { ar: "لِمَاذَا لَدَيْكِ عَيْنَانِ كَبِيرَتَانِ جِدًّا؟", uz: "Nega ko‘zlaringiz juda katta?" }
  ],
  full_uz: "Buvijon, nega ko‘zlaringiz juda katta?",
  note: null
},
{
  num: 42,
  time: "00:02:25,780 --> 00:02:28,560",
  arabic: "لِأَرَاكِ بِهِمَا أَفْضَلَ يَا عَزِيزَتِي.",
  segs: [
    { ar: "لِأَرَاكِ بِهِمَا أَفْضَلَ", uz: "Seni yaxshiroq ko‘rish uchun" },
    { ar: "يَا عَزِيزَتِي", uz: "azizam." }
  ],
  full_uz: "Seni yaxshiroq ko‘rish uchun, azizam.",
  note: null
},
{
  num: 43,
  time: "00:02:28,560 --> 00:02:32,399",
  arabic: "نُولِكْ، كَفَى، نَحْنُ نَتَدَرَّبُ.",
  segs: [
    { ar: "نُولِكْ، كَفَى", uz: "Nolik, bas qil" },
    { ar: "نَحْنُ نَتَدَرَّبُ", uz: "biz mashq qilyapmiz." }
  ],
  full_uz: "Nolik, bas qil, biz mashq qilyapmiz.",
  note: null
},
{
  num: 44,
  time: "00:02:32,399 --> 00:02:34,819",
  arabic: "صَوْتُ ٱلذِّئْبِ مُضْحِكٌ.",
  segs: null,
  full_uz: "Bo‘rining ovozi kulgili ekan.",
  note: null
},
{
  num: 45,
  time: "00:02:34,819 --> 00:02:38,939",
  arabic: "جَدَّتِي، وَلِمَ صَارَتْ أَسْنَانُكِ كَبِيرَةً جِدًّا؟",
  segs: [
    { ar: "جَدَّتِي", uz: "Buvijon" },
    { ar: "وَلِمَ صَارَتْ أَسْنَانُكِ كَبِيرَةً جِدًّا؟", uz: "Nega tishlaringiz juda katta bo‘lib qolgan?" }
  ],
  full_uz: "Buvijon, nega tishlaringiz juda katta bo‘lib qolgan?",
  note: null
},
{
  num: 46,
  time: "00:02:38,939 --> 00:02:42,000",
  arabic: "إِنَّهَا أَفْضَلُ كَيْ أَأْكُلَكِ يَا عَزِيزَتِي.",
  segs: [
    { ar: "إِنَّهَا أَفْضَلُ", uz: "Ular yaxshiroq" },
    { ar: "كَيْ أَأْكُلَكِ", uz: "seni yeyishim uchun" },
    { ar: "يَا عَزِيزَتِي", uz: "azizam." }
  ],
  full_uz: "Seni yeyishim uchun ular yaxshiroq, azizam.",
  note: null
},
{
  num: 47,
  time: "00:02:42,000 --> 00:02:50,899",
  arabic: "أَخْرِجْهَا يَا ذِئْبُ، وَإِلَّا فَإِنِّي سَأُخْرِجُهَا بِنَفْسِي.",
  segs: [
    { ar: "أَخْرِجْهَا يَا ذِئْبُ", uz: "Uni chiqar, ey bo‘ri" },
    { ar: "وَإِلَّا فَإِنِّي سَأُخْرِجُهَا بِنَفْسِي", uz: "aks holda o‘zim chiqaraman." }
  ],
  full_uz: "Uni chiqar, ey bo‘ri, aks holda o‘zim chiqaraman.",
  note: null
},
{
  num: 48,
  time: "00:02:50,900 --> 00:02:52,879",
  arabic: "هَيَّا أَخْرِجْهَا.",
  segs: null,
  full_uz: "Qani, chiqar uni.",
  note: null
},
{
  num: 49,
  time: "00:02:52,879 --> 00:02:58,000",
  arabic: "أَنْتَ تُوَقِفُنِي بِتِلْكَ ٱلْعَصَا ٱلصَّغِيرَةِ؟",
  segs: [
    { ar: "أَنْتَ تُوَقِفُنِي", uz: "Meni to‘xtatmoqchimisan" },
    { ar: "بِتِلْكَ ٱلْعَصَا ٱلصَّغِيرَةِ؟", uz: "ana shu kichkina tayoq bilan?" }
  ],
  full_uz: "Meni ana shu kichkina tayoq bilan to‘xtatmoqchimisan?",
  note: null
},
{
  num: 50,
  time: "00:02:58,000 --> 00:03:01,000",
  arabic: "هَيْ! هَذَا لَيْسَ مِنْ أَصْلِ ٱلْحِكَايَةِ!",
  segs: [
    { ar: "هَيْ", uz: "Hoy" },
    { ar: "هَذَا لَيْسَ مِنْ أَصْلِ ٱلْحِكَايَةِ", uz: "bu ertakning aslida yo‘q-ku!" }
  ],
  full_uz: "Hoy, bu ertakning aslida yo‘q-ku!",
  note: null
},
{
  num: 51,
  time: "00:03:01,000 --> 00:03:03,560",
  arabic: "فِي ٱلْحِكَايَةِ هُوَ صَيَّادٌ عَادِيٌّ.",
  segs: [
    { ar: "فِي ٱلْحِكَايَةِ", uz: "Ertakda" },
    { ar: "هُوَ صَيَّادٌ عَادِيٌّ", uz: "u oddiy ovchi." }
  ],
  full_uz: "Ertakda u oddiy ovchi.",
  note: null
},
{
  num: 52,
  time: "00:03:03,560 --> 00:03:05,560",
  arabic: "وَمَاذَا تَظُنُّنِي إِذًا؟",
  segs: null,
  full_uz: "Unda meni kim deb o‘ylayapsan?",
  note: null
},
{
  num: 53,
  time: "00:03:05,560 --> 00:03:08,599",
  arabic: "ٱنْظُرْ إِلَى نَفْسِكَ، أَنْتَ أَضْخَمُ بِكَثِيرٍ مِنَ ٱلصَّيَّادِ.",
  segs: [
    { ar: "ٱنْظُرْ إِلَى نَفْسِكَ", uz: "O‘zingga qara" },
    { ar: "أَنْتَ أَضْخَمُ بِكَثِيرٍ مِنَ ٱلصَّيَّادِ", uz: "sen ovchidan ancha kattasan." }
  ],
  full_uz: "O‘zingga qara, sen ovchidan ancha kattasan.",
  note: null
},
{
  num: 54,
  time: "00:03:08,599 --> 00:03:14,560",
  arabic: "إِذًا مَثَلًا... وَحْدَكُمَا، إِذًا عَلَيَّ أَنْ أَجْعَلَ ٱلصَّيَّادَ خَارِجَ ٱلْوَرَقَةِ.",
  segs: [
    { ar: "إِذًا عَلَيَّ أَنْ أَجْعَلَ ٱلصَّيَّادَ", uz: "Unda ovchini qilishim kerak" },
    { ar: "خَارِجَ ٱلْوَرَقَةِ", uz: "qog‘ozdan tashqarida." }
  ],
  full_uz: "Unda ovchini qog‘ozdan tashqarida qilishim kerak.",
  note: "Matnda noaniqlik bor, kontekst asosida tiklandi"
},
{
  num: 55,
  time: "00:03:14,560 --> 00:03:18,599",
  arabic: "هَذَا يَكْفِي، ٱسْتِرَاحَةٌ، أَنَا عَطْشَانُ جِدًّا.",
  segs: [
    { ar: "هَذَا يَكْفِي", uz: "Bo‘ldi" },
    { ar: "ٱسْتِرَاحَةٌ", uz: "tanaffus" },
    { ar: "أَنَا عَطْشَانُ جِدًّا", uz: "juda chanqadim." }
  ],
  full_uz: "Bo‘ldi, tanaffus, juda chanqadim.",
  note: null
},
{
  num: 56,
  time: "00:03:18,599 --> 00:03:20,900",
  arabic: "كَانَتْ كَثِيرَةَ ٱلْمِلْحِ تِلْكَ ٱلْجَدَّةُ.",
  segs: [
    { ar: "كَانَتْ كَثِيرَةَ ٱلْمِلْحِ", uz: "Juda sho‘r ekan" },
    { ar: "تِلْكَ ٱلْجَدَّةُ", uz: "o‘sha buvi." }
  ],
  full_uz: "O‘sha buvi juda sho‘r ekan.",
  note: null
},
{
  num: 57,
  time: "00:03:20,900 --> 00:03:22,260",
  arabic: "أَرْجُوكَ لَا تَحْزَنْ.",
  segs: null,
  full_uz: "Iltimos, xafa bo‘lma.",
  note: null
},
{
  num: 58,
  time: "00:03:22,260 --> 00:03:24,599",
  arabic: "ٱلذِّئْبُ ضَخْمٌ وَأَنَا صَغِيرَةٌ جِدًّا.",
  segs: [
    { ar: "ٱلذِّئْبُ ضَخْمٌ", uz: "Bo‘ri juda katta" },
    { ar: "وَأَنَا صَغِيرَةٌ جِدًّا", uz: "men esa juda kichkinaman." }
  ],
  full_uz: "Bo‘ri juda katta, men esa juda kichkinaman.",
  note: null
},
{
  num: 59,
  time: "00:03:24,599 --> 00:03:27,020",
  arabic: "إِذًا لِنَجْعَلْكِ أَكْبَرَ.",
  segs: null,
  full_uz: "Unda seni kattaroq qilamiz.",
  note: null
},
{
  num: 60,
  time: "00:03:27,020 --> 00:03:30,439",
  arabic: "أَرَأَيْتِ؟",
  segs: null,
  full_uz: "Ko‘rdingmi?",
  note: null
},
{
  num: 61,
  time: "00:03:30,439 --> 00:03:31,920",
  arabic: "ٱلْآنَ أَنْتِ أَكْبَرُ.",
  segs: null,
  full_uz: "Endi sen kattaroqsan.",
  note: null
},
{
  num: 62,
  time: "00:03:31,920 --> 00:03:33,180",
  arabic: "آهْ، أَنْتَ مُحِقٌّ.",
  segs: null,
  full_uz: "Ha, to‘g‘ri aytyapsan.",
  note: null
},
{
  num: 63,
  time: "00:03:33,180 --> 00:03:34,939",
  arabic: "وَإِنْ رَجَعْتُ إِلَى هُنَا",
  segs: null,
  full_uz: "Agar bu yerga qaytsamchi?",
  note: null
},
{
  num: 64,
  time: "00:03:34,939 --> 00:03:37,540",
  arabic: "صِرْتُ أَكْبَرَ بِكَثِيرٍ.",
  segs: null,
  full_uz: "Unda ancha kattaroq bo‘lib qolaman.",
  note: null
},
{
  num: 65,
  time: "00:03:37,540 --> 00:03:39,140",
  arabic: "أَرَأَيْتَ؟",
  segs: null,
  full_uz: "Ko‘rdingmi?",
  note: null
},
{
  num: 66,
  time: "00:03:39,140 --> 00:03:43,700",
  arabic: "إِنْ رَجَعْتَ إِلَى جَانِبِ هَذَا ٱلْمِصْبَاحِ فَسَيَبْدُو ظِلُّكَ أَكْبَرَ عَلَى ٱلشَّاشَةِ.",
  segs: [
    { ar: "إِنْ رَجَعْتَ إِلَى جَانِبِ هَذَا ٱلْمِصْبَاحِ", uz: "Agar shu chiroqqa yaqinroq borsang" },
    { ar: "فَسَيَبْدُو ظِلُّكَ أَكْبَرَ عَلَى ٱلشَّاشَةِ", uz: "soyanging ekranda kattaroq ko‘rinadi." }
  ],
  full_uz: "Agar shu chiroqqa yaqinroq borsang, soyanging ekranda kattaroq ko‘rinadi.",
  note: null
},
{
  num: 67,
  time: "00:03:43,700 --> 00:03:44,540",
  arabic: "رَائِعٌ!",
  segs: null,
  full_uz: "Zo‘r!",
  note: null
},
{
  num: 68,
  time: "00:03:44,540 --> 00:03:49,500",
  arabic: "هُنَاكَ أَنْوَاعٌ كَثِيرَةٌ مِنَ ٱلْمَسْرَحِ فِي ٱلْعَالَمِ.",
  segs: [
    { ar: "هُنَاكَ أَنْوَاعٌ كَثِيرَةٌ مِنَ ٱلْمَسْرَحِ", uz: "Dunyoda teatrlarning ko‘p turlari bor" },
    { ar: "فِي ٱلْعَالَمِ", uz: "butun dunyoda." }
  ],
  full_uz: "Dunyoda teatrlarning ko‘p turlari bor.",
  note: null
},
{
  num: 69,
  time: "00:03:49,500 --> 00:03:50,620",
  arabic: "فِي ٱلْمَسْرَحِ ٱلْعَادِيِّ",
  segs: null,
  full_uz: "Oddiy teatrda",
  note: null
},
{
  num: 70,
  time: "00:03:50,620 --> 00:03:53,620",
  arabic: "يَقُولُ ٱلْمُمَثِّلُونَ ٱلسُّطُورَ ٱلَّتِي كَتَبَهَا ٱلْكَاتِبُ.",
  segs: [
    { ar: "يَقُولُ ٱلْمُمَثِّلُونَ ٱلسُّطُورَ", uz: "Aktyorlar matnlarni aytadilar" },
    { ar: "ٱلَّتِي كَتَبَهَا ٱلْكَاتِبُ", uz: "yozuvchi yozgan matnlarni." }
  ],
  full_uz: "Aktyorlar yozuvchi yozgan matnlarni aytadilar.",
  note: null
},
{
  num: 71,
  time: "00:03:53,620 --> 00:03:56,840",
  arabic: "وَفِي ٱلْأُوبِرَا لَا يَقُولُ ٱلْمُمَثِّلُونَ ٱلسُّطُورَ.",
  segs: [
    { ar: "وَفِي ٱلْأُوبِرَا", uz: "Operada esa" },
    { ar: "لَا يَقُولُ ٱلْمُمَثِّلُونَ ٱلسُّطُورَ", uz: "aktyorlar matnlarni gapirib aytmaydilar." }
  ],
  full_uz: "Operada aktyorlar matnlarni gapirib aytmaydilar.",
  note: null
},
{
  num: 72,
  time: "00:03:56,840 --> 00:03:59,840",
  arabic: "بَلْ يُغَنُّونَهَا بِرِفْقَةِ فِرْقَةٍ مُوسِيقِيَّةٍ.",
  segs: [
    { ar: "بَلْ يُغَنُّونَهَا", uz: "Aksincha, ularni kuylaydilar" },
    { ar: "بِرِفْقَةِ فِرْقَةٍ مُوسِيقِيَّةٍ", uz: "musiqiy guruh jo‘rligida." }
  ],
  full_uz: "Aksincha, ularni musiqiy guruh jo‘rligida kuylaydilar.",
  note: null
},
{
  num: 73,
  time: "00:03:59,840 --> 00:04:04,580",
  arabic: "وَهُنَا فِي ٱلْبَالِيهِ لَا يَقُولُ ٱلْمُمَثِّلُونَ أَوْ يُغَنُّونَ أَدْوَارَهُمْ.",
  segs: [
    { ar: "وَهُنَا فِي ٱلْبَالِيهِ", uz: "Baletda esa" },
    { ar: "لَا يَقُولُ ٱلْمُمَثِّلُونَ أَوْ يُغَنُّونَ أَدْوَارَهُمْ", uz: "aktyorlar o‘z rollarini na gapirib, na kuylab ijro etadilar." }
  ],
  full_uz: "Baletda aktyorlar o‘z rollarini na gapirib, na kuylab ijro etadilar.",
  note: null
},
{
  num: 74,
  time: "00:04:04,580 --> 00:04:07,060",
  arabic: "فَهُنَا تُرْوَى ٱلْقِصَّةُ عَنْ طَرِيقِ ٱلرَّقْصِ.",
  segs: [
    { ar: "فَهُنَا تُرْوَى ٱلْقِصَّةُ", uz: "Bu yerda hikoya aytib beriladi" },
    { ar: "عَنْ طَرِيقِ ٱلرَّقْصِ", uz: "raqs orqali." }
  ],
  full_uz: "Bu yerda hikoya raqs orqali aytib beriladi.",
  note: null
},
{
  num: 75,
  time: "00:04:07,060 --> 00:04:10,700",
  arabic: "وَهُنَاكَ مَسَارِحُ يَكُونُ ٱلْمُمَثِّلُونَ فِيهَا حَيَوَانَاتٍ.",
  segs: [
    { ar: "وَهُنَاكَ مَسَارِحُ", uz: "Shunday teatrlar ham bor" },
    { ar: "يَكُونُ ٱلْمُمَثِّلُونَ فِيهَا حَيَوَانَاتٍ", uz: "unda aktyorlar hayvonlar bo‘ladi." }
  ],
  full_uz: "Shunday teatrlar ham borki, unda aktyorlar hayvonlar bo‘ladi.",
  note: null
},
{
  num: 76,
  time: "00:04:10,700 --> 00:04:15,280",
  arabic: "فِي مَسْرَحِ ٱلْحَيَوَانَاتِ نَرَى عُرُوضًا يُؤَدِّيهَا قِطَطٌ أَوْ كِلَابٌ.",
  segs: [
    { ar: "فِي مَسْرَحِ ٱلْحَيَوَانَاتِ", uz: "Hayvonlar teatrida" },
    { ar: "نَرَى عُرُوضًا يُؤَدِّيهَا قِطَطٌ أَوْ كِلَابٌ", uz: "mushuklar yoki itlar ijro etadigan tomoshalarni ko‘ramiz." }
  ],
  full_uz: "Hayvonlar teatrida mushuklar yoki itlar ijro etadigan tomoshalarni ko‘ramiz.",
  note: null
},
{
  num: 77,
  time: "00:04:15,280 --> 00:04:18,819",
  arabic: "أَوْ مَاعِزُ وَحَمَامٌ أَوْ حَتَّى دِبَبَةٌ وَفُقَمَاتٌ.",
  segs: [
    { ar: "أَوْ مَاعِزُ وَحَمَامٌ", uz: "Yoki echkilar va kaptarlar" },
    { ar: "أَوْ حَتَّى دِبَبَةٌ وَفُقَمَاتٌ", uz: "hatto ayiq va tyulenlar ham." }
  ],
  full_uz: "Yoki echkilar va kaptarlar, hatto ayiq va tyulenlar ham.",
  note: null
},
{
  num: 78,
  time: "00:04:18,819 --> 00:04:21,860",
  arabic: "هُنَاكَ أَيْضًا مَسَارِحُ ٱلدُّمَى ٱلْمُتَحَرِّكَةِ.",
  segs: null,
  full_uz: "Qo‘g‘irchoq teatrlari ham bor.",
  note: null
},
{
  num: 79,
  time: "00:04:21,860 --> 00:04:24,879",
  arabic: "فِي ٱلْحَقِيقَةِ تَتَحَرَّكُ ٱلدُّمَى بِمُسَاعَدَةِ ٱلنَّاسِ.",
  segs: [
    { ar: "فِي ٱلْحَقِيقَةِ", uz: "Aslida" },
    { ar: "تَتَحَرَّكُ ٱلدُّمَى بِمُسَاعَدَةِ ٱلنَّاسِ", uz: "qo‘g‘irchoqlar odamlar yordamida harakatlanadi." }
  ],
  full_uz: "Aslida qo‘g‘irchoqlar odamlar yordamida harakatlanadi.",
  note: null
},
{
  num: 80,
  time: "00:04:24,879 --> 00:04:27,639",
  arabic: "أَجَلْ، هُنَاكَ أَنْوَاعٌ كَثِيرَةٌ مِنَ ٱلْمَسْرَحِ.",
  segs: [
    { ar: "أَجَلْ", uz: "Ha" },
    { ar: "هُنَاكَ أَنْوَاعٌ كَثِيرَةٌ مِنَ ٱلْمَسْرَحِ", uz: "teatrlarning ko‘plab turlari bor." }
  ],
  full_uz: "Ha, teatrlarning ko‘plab turlari bor.",
  note: null
},
{
  num: 81,
  time: "00:04:27,639 --> 00:04:30,079",
  arabic: "مَسْرَحِي ٱلْمُفَضَّلُ هُوَ مَسْرَحُ ٱلظِّلِّ.",
  segs: null,
  full_uz: "Mening sevimli teatrim soyalar teatridir.",
  note: null
},
{
  num: 82,
  time: "00:04:30,079 --> 00:04:31,079",
  arabic: "نَعَمْ.",
  segs: null,
  full_uz: "Ha.",
  note: null
},
{
  num: 83,
  time: "00:04:31,079 --> 00:04:36,319",
  arabic: "فَفِي هَذَا ٱلْمَسْرَحِ أَرَى أَنَّهُ أَجْمَلُ ٱلْمَسَارِحِ وَأَكْثَرُهَا غُمُوضًا.",
  segs: [
    { ar: "فَفِي هَذَا ٱلْمَسْرَحِ", uz: "Chunki bu teatrda" },
    { ar: "أَرَى أَنَّهُ أَجْمَلُ ٱلْمَسَارِحِ", uz: "menimcha u teatrlarning eng chiroylisi" },
    { ar: "وَأَكْثَرُهَا غُمُوضًا", uz: "va eng sirlisidir." }
  ],
  full_uz: "Chunki menimcha, bu teatr teatrlarning eng chiroylisi va eng sirlisidir.",
  note: null
},
{
  num: 84,
  time: "00:04:36,319 --> 00:04:39,980",
  arabic: "مَرْحَبًا يَا جَدَّتِي.",
  segs: null,
  full_uz: "Salom, buvijon.",
  note: null
},
{
  num: 85,
  time: "00:04:39,980 --> 00:04:43,779",
  arabic: "جَدَّتِي، لِمَاذَا لَدَيْكِ عَيْنَانِ كَبِيرَتَانِ جِدًّا؟",
  segs: [
    { ar: "جَدَّتِي", uz: "Buvijon" },
    { ar: "لِمَاذَا لَدَيْكِ عَيْنَانِ كَبِيرَتَانِ جِدًّا؟", uz: "Nega ko‘zlaringiz juda katta?" }
  ],
  full_uz: "Buvijon, nega ko‘zlaringiz juda katta?",
  note: null
},
{
  num:89,
  time:"00:04:46,379 --> 00:04:51,000",
  arabic:"يَا جَدَّتِي، وَلِمَاذَا صَارَتْ أَسْنَانُكِ كَبِيرَةً جِدًّا؟",
  segs:[
    { ar:"يَا جَدَّتِي", uz:"Buvijon." },
    { ar:"وَلِمَاذَا صَارَتْ أَسْنَانُكِ كَبِيرَةً جِدًّا؟", uz:"Nega tishlaringiz juda katta bo‘lib qolgan?" }
  ],
  full_uz:"Buvijon, nega tishlaringiz juda katta bo‘lib qolgan?",
  note:null
},
{
  num:90,
  time:"00:04:51,000 --> 00:04:53,800",
  arabic:"إِنَّهَا أَفْضَلُ كَيْ أَأْكُلَكِ يَا عَزِيزَتِي.",
  segs:[
    { ar:"إِنَّهَا أَفْضَلُ", uz:"Ular yaxshiroq." },
    { ar:"كَيْ أَأْكُلَكِ يَا عَزِيزَتِي", uz:"Seni yeyishim uchun, azizim." }
  ],
  full_uz:"Ular seni yeyishim uchun yaxshiroq, azizim.",
  note:null
},
{
  num:91,
  time:"00:04:53,800 --> 00:04:57,300",
  arabic:"اِنْتَظِرْ.",
  segs:null,
  full_uz:"To‘xta.",
  note:null
},
{
  num:92,
  time:"00:04:57,300 --> 00:05:00,259",
  arabic:"هَا أَنَا قَادِمٌ يَا ذِئْبُ، سَأُرِيكَ.",
  segs:[
    { ar:"هَا أَنَا قَادِمٌ يَا ذِئْبُ", uz:"Mana, kelyapman ey bo‘ri." },
    { ar:"سَأُرِيكَ", uz:"Senga ko‘rsatib qo‘yaman." }
  ],
  full_uz:"Mana, kelyapman ey bo‘ri, senga ko‘rsatib qo‘yaman.",
  note:null
},
{
  num:93,
  time:"00:05:00,259 --> 00:05:02,980",
  arabic:"يَبْدُو الصَّيَّادُ قَوِيًّا.",
  segs:null,
  full_uz:"Ovchi kuchli ko‘rinadi.",
  note:null
},
{
  num:94,
  time:"00:05:02,980 --> 00:05:06,120",
  arabic:"هَلْ أَنْتَ صَيَّادٌ؟ أَيْنَ بُنْدُقِيَّتُكَ؟",
  segs:[
    { ar:"هَلْ أَنْتَ صَيَّادٌ؟", uz:"Sen ovchimisan?" },
    { ar:"أَيْنَ بُنْدُقِيَّتُكَ؟", uz:"Miltiqing qani?" }
  ],
  full_uz:"Sen ovchimisan? Miltiqing qani?",
  note:null
},
{
  num:95,
  time:"00:05:06,120 --> 00:05:09,899",
  arabic:"لَا أَحْتَاجُ إِلَيْهَا، أَنْتَ صَغِيرٌ جِدًّا وَيَكْفِيكَ مِضْرَبُ الذُّبَابِ.",
  segs:[
    { ar:"لَا أَحْتَاجُ إِلَيْهَا", uz:"Unga ehtiyojim yo‘q." },
    { ar:"أَنْتَ صَغِيرٌ جِدًّا", uz:"Sen juda kichkinasan." },
    { ar:"وَيَكْفِيكَ مِضْرَبُ الذُّبَابِ", uz:"Senga pashsha o‘ldirgichning o‘zi yetadi." }
  ],
  full_uz:"Unga ehtiyojim yo‘q, sen juda kichkinasan, senga pashsha o‘ldirgichning o‘zi yetadi.",
  note:"مِضْرَبُ الذُّبَابِ — pashsha o‘ldirgich."
},
{
  num:96,
  time:"00:05:09,899 --> 00:05:12,060",
  arabic:"وَلَكِنَّنِي أُفَضِّلُ أَنْ أَفْعَلَهَا بِنَفْسِي.",
  segs:null,
  full_uz:"Lekin buni o‘zim qilishni afzal ko‘raman.",
  note:null
},
{
  num:97,
  time:"00:05:12,060 --> 00:05:13,159",
  arabic:"كَيْفَ ذَلِكَ؟",
  segs:null,
  full_uz:"Qanday qilib?",
  note:null
},
{
  num:98,
  time:"00:05:13,159 --> 00:05:14,959",
  arabic:"بِيَدَيَّ الْعَارِيَتَيْنِ.",
  segs:null,
  full_uz:"Yalang‘och qo‘llarim bilan.",
  note:null
},
{
  num:99,
  time:"00:05:14,959 --> 00:05:16,079",
  arabic:"أَحْسَنْتَ.",
  segs:null,
  full_uz:"Barakalla.",
  note:null
},
{
  num:100,
  time:"00:05:16,079 --> 00:05:24,799",
  arabic:"مَرْحَبًا.",
  segs:null,
  full_uz:"Salom.",
  note:null
},
{
  num:101,
  time:"00:05:24,799 --> 00:05:27,000",
  arabic:"مُذْهِلٌ.",
  segs:null,
  full_uz:"Ajoyib.",
  note:null
},
{
  num:102,
  time:"00:05:27,000 --> 00:05:30,219",
  arabic:"مَنْ أَعْجَبَكُمْ؟ أَنَا أَحْبَبْتُ الْجَدَّةَ.",
  segs:[
    { ar:"مَنْ أَعْجَبَكُمْ؟", uz:"Sizga kim yoqdi?" },
    { ar:"أَنَا أَحْبَبْتُ الْجَدَّةَ", uz:"Menga buvi yoqdi." }
  ],
  full_uz:"Sizga kim yoqdi? Menga buvi yoqdi.",
  note:null
},
{
  num:103,
  time:"00:05:30,219 --> 00:05:32,620",
  arabic:"ذَاتُ الرِّدَاءِ الْأَحْمَرِ كَانَتِ الْأَفْضَلَ.",
  segs:null,
  full_uz:"Qizil qalpoqcha eng zo‘ri edi.",
  note:null
},
{
  num:104,
  time:"00:05:32,620 --> 00:05:34,500",
  arabic:"أَعْجَبَنِي الصَّيَّادُ.",
  segs:null,
  full_uz:"Menga ovchi yoqdi.",
  note:null
},
{
  num:105,
  time:"00:05:34,500 --> 00:05:37,919",
  arabic:"كَانَ قَوِيًّا جِدًّا وَلَا يَهَابُ شَيْئًا.",
  segs:[
    { ar:"كَانَ قَوِيًّا جِدًّا", uz:"U juda kuchli edi." },
    { ar:"وَلَا يَهَابُ شَيْئًا", uz:"Hech narsadan qo‘rqmasdi." }
  ],
  full_uz:"U juda kuchli edi va hech narsadan qo‘rqmasdi.",
  note:null
},
{
  num:106,
  time:"00:05:37,919 --> 00:05:40,039",
  arabic:"أَمَّا أَنَا فَالْمُؤَثِّرَاتُ أَعْجَبَتْنِي.",
  segs:null,
  full_uz:"Menga esa maxsus effektlar yoqdi.",
  note:null
}
];
if (typeof module !== "undefined" && module.exports) {
  module.exports = lessons;
}