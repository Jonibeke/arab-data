const lessons = [
    {
  num: 1,
  time: "00:00:38,079 --> 00:00:42,000",
  arabic: "نُولِيكْ هَيَّا بِنَا نُنَظِّفُ مِرْوَحَةَ الْحَاسُوبِ",
  segs: [
    { ar: "نُولِيكْ", uz: "Nolik" },
    { ar: "هَيَّا بِنَا", uz: "qani ketdik" },
    { ar: "نُنَظِّفُ مِرْوَحَةَ الْحَاسُوبِ", uz: "kompyuter ventilyatorini tozalaymiz" }
  ],
  full_uz: "Nolik, qani ketdik, kompyuter ventilyatorini tozalaymiz.",
  note: "مِرْوَحَةٌ — ventilyator."
},

{
  num: 2,
  time: "00:00:42,579 --> 00:00:47,460",
  arabic: "لَيْسَ الْآنَ، أَنَا وَتُومْ تُومَاسْ نَرْسُمُ بِطَاقَةَ مُعَايَدَةٍ لِذِكْرَى زَوَاجِ وَالِدَيْهِ",
  segs: [
    { ar: "لَيْسَ الْآنَ", uz: "Hozir emas." },
    { ar: "أَنَا وَتُومْ تُومَاسْ", uz: "Men va Tom Tomas" },
    { ar: "نَرْسُمُ بِطَاقَةَ مُعَايَدَةٍ", uz: "tabrik kartasi chizyapmiz" },
    { ar: "لِذِكْرَى زَوَاجِ وَالِدَيْهِ", uz: "ota-onasining nikoh yilligi uchun" }
  ],
  full_uz: "Hozir emas. Men va Tom Tomas ota-onasining nikoh yilligi uchun tabrik kartasi chizyapmiz.",
  note: "ذِكْرَى الزَّوَاجِ — nikoh yilligi."
},

{
  num: 3,
  time: "00:00:47,460 --> 00:00:50,039",
  arabic: "أُوهْ يَا لِلْمِسْكِينِ، إِنَّهُ أَمْرٌ مُتْعِبٌ",
  segs: [
    { ar: "أُوهْ", uz: "Voy." },
    { ar: "يَا لِلْمِسْكِينِ", uz: "Bechoragina." },
    { ar: "إِنَّهُ أَمْرٌ مُتْعِبٌ", uz: "Bu juda mashaqqatli ish." }
  ],
  full_uz: "Voy, bechoragina. Bu juda mashaqqatli ish ekan.",
  note: "مُتْعِبٌ — charchatadigan."
},

{
  num: 4,
  time: "00:00:50,039 --> 00:00:54,240",
  arabic: "مَرْحَبًا سِيمْكَا، جَيِّدٌ أَنَّكِ أَتَيْتِ، أُرِيدُ أَنْ أَسْأَلَكِ سُؤَالًا",
  segs: [
    { ar: "مَرْحَبًا سِيمْكَا", uz: "Salom, Simka." },
    { ar: "جَيِّدٌ أَنَّكِ أَتَيْتِ", uz: "Yaxshi bo'ldi kelganing." },
    { ar: "أُرِيدُ أَنْ أَسْأَلَكِ سُؤَالًا", uz: "Senga bir savol bermoqchiman." }
  ],
  full_uz: "Salom, Simka. Yaxshi bo'ldi kelganing. Senga bir savol bermoqchiman.",
  note: null
},

{
  num: 5,
  time: "00:00:54,240 --> 00:00:57,879",
  arabic: "هَلْ أَكْتُبُ السَّنَوِيَّةَ الثَّانِيَةَ عَشْرَ أَمِ الثَّانِيَةَ عَشْرَ؟",
  segs: [
    { ar: "هَلْ أَكْتُبُ", uz: "Men yozaymi" },
    { ar: "السَّنَوِيَّةَ الثَّانِيَةَ عَشْرَ", uz: "o'n ikkinchi yillik" },
    { ar: "أَمِ الثَّانِيَةَ عَشْرَ؟", uz: "yoki shunchaki o'n ikkinchi?" }
  ],
  full_uz: "O'n ikkinchi yillik deb yozaymi yoki shunchaki o'n ikkinchi debmi?",
  note: null
},

{
  num: 6,
  time: "00:00:57,880 --> 00:01:03,520",
  arabic: "هَلْ تَعْلَمُ؟ فِي إِمْكَانِكَ أَنْ تَكْتُبَ أَ لِلتَّعْرِيفِ ثُمَّ مَسَافَةً ثُمَّ الرَّقْمَ 12",
  segs: [
    { ar: "هَلْ تَعْلَمُ؟", uz: "Bilasanmi?" },
    { ar: "فِي إِمْكَانِكَ", uz: "Sening imkoning bor" },
    { ar: "أَنْ تَكْتُبَ", uz: "yozishga" },
    { ar: "أَ لِلتَّعْرِيفِ", uz: "artiklni" },
    { ar: "ثُمَّ مَسَافَةً", uz: "keyin bitta bo'sh joy" },
    { ar: "ثُمَّ الرَّقْمَ 12", uz: "so'ng 12 raqamini" }
  ],
  full_uz: "Bilasanmi? Artiklni, keyin bitta bo'sh joyni, so'ng 12 raqamini yozishing mumkin.",
  note: null
},

{
  num: 7,
  time: "00:01:03,520 --> 00:01:07,719",
  arabic: "آهْ صَحِيحٌ، لَكِنْ أَوَّلًا سَأُغَيِّرُ الْمَاءَ، سَأَعُودُ فِي الْحَالِ",
  segs: [
    { ar: "آهْ صَحِيحٌ", uz: "Ha, to'g'ri." },
    { ar: "لَكِنْ أَوَّلًا", uz: "Lekin avval" },
    { ar: "سَأُغَيِّرُ الْمَاءَ", uz: "suvni almashtiraman" },
    { ar: "سَأَعُودُ فِي الْحَالِ", uz: "darrov qaytaman" }
  ],
  full_uz: "Ha, to'g'ri. Lekin avval suvni almashtiraman, darrov qaytaman.",
  note: null
},

{
  num: 8,
  time: "00:01:07,719 --> 00:01:13,879",
  arabic: "آهْ أُمِّي تَرَكَتْ خَاتَمَهَا هُنَا",
  segs: [
    { ar: "آهْ", uz: "Ha." },
    { ar: "أُمِّي", uz: "Onam" },
    { ar: "تَرَكَتْ خَاتَمَهَا", uz: "uzugini qoldiribdi" },
    { ar: "هُنَا", uz: "shu yerda" }
  ],
  full_uz: "Ha, onam uzugini shu yerda qoldiribdi.",
  note: "خَاتَمٌ — uzuk."
},

{
  num: 9,
  time: "00:01:13,879 --> 00:01:19,040",
  arabic: "أُوهْ أُوهْ لَا، أُوهْ أُوهْ لَا لَا",
  segs: [
    { ar: "أُوهْ أُوهْ لَا", uz: "Voy, yo'q!" },
    { ar: "أُوهْ أُوهْ لَا لَا", uz: "Voy, yo'q, yo'q!" }
  ],
  full_uz: "Voy, yo'q! Voy, yo'q, yo'q!",
  note: null
},

{
  num: 10,
  time: "00:01:19,040 --> 00:01:23,879",
  arabic: "أُوهْ لَا، مَا الَّذِي فَعَلْتُهُ؟",
  segs: [
    { ar: "أُوهْ لَا", uz: "Voy, yo'q!" },
    { ar: "مَا الَّذِي فَعَلْتُهُ؟", uz: "Men nima qilib qo'ydim?" }
  ],
  full_uz: "Voy, yo'q! Men nima qilib qo'ydim?",
  note: null
},
{
  num: 11,
  time: "00:01:23,879 --> 00:01:28,599",
  arabic: "لَقَدْ أَفْسَدْتُ ذِكْرَى زَوَاجِ وَالِدَيَّ",
  segs: [
    { ar: "لَقَدْ أَفْسَدْتُ", uz: "Men buzib qo'ydim" },
    { ar: "ذِكْرَى زَوَاجِ", uz: "nikoh yilligini" },
    { ar: "وَالِدَيَّ", uz: "ota-onamning" }
  ],
  full_uz: "Men ota-onamning nikoh yilligini buzib qo'ydim.",
  note: null
},

{
  num: 12,
  time: "00:01:28,599 --> 00:01:31,159",
  arabic: "لِمَ؟ مَاذَا فَعَلْتَ؟",
  segs: [
    { ar: "لِمَ؟", uz: "Nega?" },
    { ar: "مَاذَا فَعَلْتَ؟", uz: "Nima qilding?" }
  ],
  full_uz: "Nega? Nima qilding?",
  note: null
},

{
  num: 13,
  time: "00:01:31,159 --> 00:01:36,560",
  arabic: "كَانَ خَاتَمُ أُمِّي هُنَاكَ وَأَنَا أَسْقَطْتُهُ فِي الْمِغْسَلَةِ وَالْآنَ ذَهَبَ بَعِيدًا",
  segs: [
    { ar: "كَانَ خَاتَمُ أُمِّي هُنَاكَ", uz: "Onamning uzugi u yerda edi." },
    { ar: "وَأَنَا أَسْقَطْتُهُ", uz: "Men uni tushirib yubordim." },
    { ar: "فِي الْمِغْسَلَةِ", uz: "Rakovinaga." },
    { ar: "وَالْآنَ ذَهَبَ بَعِيدًا", uz: "Endi esa uzoqqa ketib qoldi." }
  ],
  full_uz: "Onamning uzugi u yerda edi. Men uni rakovinaga tushirib yubordim, endi esa uzoqqa ketib qoldi.",
  note: "الْمِغْسَلَةُ — rakovina."
},

{
  num: 14,
  time: "00:01:36,560 --> 00:01:39,939",
  arabic: "أَفْسَدْتَ الْمُنَاسَبَةَ",
  segs: [
    { ar: "أَفْسَدْتَ", uz: "Buzib qo'yding" },
    { ar: "الْمُنَاسَبَةَ", uz: "bayramni" }
  ],
  full_uz: "Bayramni buzib qo'yding.",
  note: null
},

{
  num: 15,
  time: "00:01:39,939 --> 00:01:41,879",
  arabic: "لَمْ يَذْهَبِ الْخَاتَمُ بَعِيدًا",
  segs: [
    { ar: "لَمْ يَذْهَبِ", uz: "Ketmagan" },
    { ar: "الْخَاتَمُ بَعِيدًا", uz: "uzuk uzoqqa" }
  ],
  full_uz: "Uzuk uzoqqa ketmagan.",
  note: null
},

{
  num: 16,
  time: "00:01:41,879 --> 00:01:44,640",
  arabic: "أَلَا تَعْلَمُ طَرِيقَةَ عَمَلِ الْبَالُوعَةِ؟",
  segs: [
    { ar: "أَلَا تَعْلَمُ", uz: "Bilmaysanmi?" },
    { ar: "طَرِيقَةَ عَمَلِ", uz: "qanday ishlashini" },
    { ar: "الْبَالُوعَةِ", uz: "oqava quvurining" }
  ],
  full_uz: "Oqava quvuri qanday ishlashini bilmaysanmi?",
  note: "الْبَالُوعَةُ — oqava quvuri (sifon)."
},

{
  num: 17,
  time: "00:01:44,640 --> 00:01:46,099",
  arabic: "طَرِيقَةُ مَاذَا؟",
  segs: [
    { ar: "طَرِيقَةُ", uz: "Qanday ishlashi" },
    { ar: "مَاذَا؟", uz: "nimaning?" }
  ],
  full_uz: "Nimaning qanday ishlashi?",
  note: null
},

{
  num: 18,
  time: "00:01:46,099 --> 00:01:49,259",
  arabic: "لِلْبَالُوعَةِ أُنْبُوبٌ مُنْحَنٍ خَاصٌّ تَحْتَ الْمِغْسَلَةِ",
  segs: [
    { ar: "لِلْبَالُوعَةِ", uz: "Oqava quvurining" },
    { ar: "أُنْبُوبٌ مُنْحَنٍ خَاصٌّ", uz: "maxsus egilgan quvuri bor" },
    { ar: "تَحْتَ الْمِغْسَلَةِ", uz: "rakovina ostida" }
  ],
  full_uz: "Oqava quvurining rakovina ostida maxsus egilgan quvuri bor.",
  note: "أُنْبُوبٌ مُنْحَنٍ — egilgan quvur."
},

{
  num: 19,
  time: "00:01:49,260 --> 00:01:55,840",
  arabic: "يَنْزِلُ الْمَاءُ مِنَ الْمِغْسَلَةِ إِلَى أُنْبُوبٍ مُنْحَنٍ هُنَا",
  segs: [
    { ar: "يَنْزِلُ الْمَاءُ", uz: "Suv oqib tushadi" },
    { ar: "مِنَ الْمِغْسَلَةِ", uz: "rakovinadan" },
    { ar: "إِلَى أُنْبُوبٍ مُنْحَنٍ", uz: "egilgan quvurga" },
    { ar: "هُنَا", uz: "mana bu yerga" }
  ],
  full_uz: "Suv rakovinadan mana bu yerdagi egilgan quvurga oqib tushadi.",
  note: null
},

{
  num: 20,
  time: "00:01:55,840 --> 00:01:58,480",
  arabic: "وَبَعْدَ ذَلِكَ إِلَى الصَّرْفِ الصِّحِّيِّ",
  segs: [
    { ar: "وَبَعْدَ ذَلِكَ", uz: "Shundan keyin" },
    { ar: "إِلَى الصَّرْفِ الصِّحِّيِّ", uz: "kanalizatsiyaga" }
  ],
  full_uz: "Shundan keyin kanalizatsiyaga oqib ketadi.",
  note: "الصَّرْفُ الصِّحِّيُّ — kanalizatsiya."
},
{
  num: 21,
  time: "00:01:58,480 --> 00:02:02,480",
  arabic: "لَكِنْ عِنْدَمَا نُغْلِقُ الصُّنْبُورَ لَا يَذْهَبُ الْمَاءُ كُلُّهُ",
  segs: [
    { ar: "لَكِنْ", uz: "Lekin" },
    { ar: "عِنْدَمَا نُغْلِقُ الصُّنْبُورَ", uz: "jo'mrakni yopganimizda" },
    { ar: "لَا يَذْهَبُ الْمَاءُ كُلُّهُ", uz: "suvning hammasi oqib ketmaydi" }
  ],
  full_uz: "Lekin jo'mrakni yopganimizda suvning hammasi oqib ketmaydi.",
  note: null
},

{
  num: 22,
  time: "00:02:02,480 --> 00:02:04,540",
  arabic: "بَعْضُهُ يَبْقَى فِي الْأُنْبُوبِ الْمُنْحَنِي",
  segs: [
    { ar: "بَعْضُهُ", uz: "Uning bir qismi" },
    { ar: "يَبْقَى", uz: "qoladi" },
    { ar: "فِي الْأُنْبُوبِ الْمُنْحَنِي", uz: "egilgan quvur ichida" }
  ],
  full_uz: "Suvning bir qismi egilgan quvur ichida qoladi.",
  note: null
},

{
  num: 23,
  time: "00:02:04,540 --> 00:02:09,580",
  arabic: "لَقَدْ صُنِعَتْ بِهَذِهِ الطَّرِيقَةِ حَتَّى لَا تَصِلَ الرَّائِحَةُ مِنَ الْمَصَارِفِ إِلَى الْمَنْزِلِ",
  segs: [
    { ar: "لَقَدْ صُنِعَتْ بِهَذِهِ الطَّرِيقَةِ", uz: "U shunday qilib yasalgan" },
    { ar: "حَتَّى لَا تَصِلَ الرَّائِحَةُ", uz: "hid yetib kelmasligi uchun" },
    { ar: "مِنَ الْمَصَارِفِ", uz: "kanalizatsiyadan" },
    { ar: "إِلَى الْمَنْزِلِ", uz: "uyga" }
  ],
  full_uz: "U kanalizatsiyadagi hid uyga kelmasligi uchun shunday qilib yasalgan.",
  note: "الرَّائِحَةُ — hid."
},

{
  num: 24,
  time: "00:02:09,580 --> 00:02:12,340",
  arabic: "الْخَاتَمُ أَثْقَلُ مِنَ الْمَاءِ",
  segs: [
    { ar: "الْخَاتَمُ", uz: "Uzuk" },
    { ar: "أَثْقَلُ مِنَ الْمَاءِ", uz: "suvdan og'irroq" }
  ],
  full_uz: "Uzuk suvdan og'irroq.",
  note: null
},

{
  num: 25,
  time: "00:02:12,340 --> 00:02:15,900",
  arabic: "إِنْ سَقَطَ مِنْكُمْ فِي الْمِغْسَلَةِ فَلَنْ يَذْهَبَ بَعِيدًا",
  segs: [
    { ar: "إِنْ سَقَطَ", uz: "Agar tushib ketsa" },
    { ar: "مِنْكُمْ", uz: "sizlardan" },
    { ar: "فِي الْمِغْسَلَةِ", uz: "rakovinaga" },
    { ar: "فَلَنْ يَذْهَبَ بَعِيدًا", uz: "u uzoqqa ketmaydi" }
  ],
  full_uz: "Agar sizlardan rakovinaga tushib ketsa, u uzoqqa ketmaydi.",
  note: null
},

{
  num: 26,
  time: "00:02:15,900 --> 00:02:17,939",
  arabic: "بَلْ سَيَبْقَى فِي الْأُنْبُوبِ الْمُنْحَنِي",
  segs: [
    { ar: "بَلْ", uz: "Aksincha" },
    { ar: "سَيَبْقَى", uz: "qoladi" },
    { ar: "فِي الْأُنْبُوبِ الْمُنْحَنِي", uz: "egilgan quvur ichida" }
  ],
  full_uz: "Aksincha, u egilgan quvur ichida qoladi.",
  note: null
},

{
  num: 27,
  time: "00:02:17,939 --> 00:02:23,439",
  arabic: "هَذَا يَعْنِي أَنَّ لَدَيْنَا فُرْصَةً",
  segs: [
    { ar: "هَذَا يَعْنِي", uz: "Bu shuni anglatadiki" },
    { ar: "أَنَّ لَدَيْنَا", uz: "bizda" },
    { ar: "فُرْصَةً", uz: "imkoniyat bor" }
  ],
  full_uz: "Bu shuni anglatadiki, bizda imkoniyat bor.",
  note: null
},

{
  num: 28,
  time: "00:02:23,439 --> 00:02:26,859",
  arabic: "صَحِيحٌ، لَكِنْ كَيْفَ سَنُخْرِجُهُ مِنَ الْأُنْبُوبِ؟",
  segs: [
    { ar: "صَحِيحٌ", uz: "To'g'ri." },
    { ar: "لَكِنْ", uz: "Lekin" },
    { ar: "كَيْفَ سَنُخْرِجُهُ", uz: "uni qanday chiqaramiz" },
    { ar: "مِنَ الْأُنْبُوبِ؟", uz: "quvurdan?" }
  ],
  full_uz: "To'g'ri, lekin uni quvurdan qanday chiqaramiz?",
  note: null
},

{
  num: 29,
  time: "00:02:26,859 --> 00:02:29,400",
  arabic: "لَا أَدْرِي، أَنَا لَا أَعْرِفُ السِّبَاحَةَ",
  segs: [
    { ar: "لَا أَدْرِي", uz: "Bilmayman." },
    { ar: "أَنَا لَا أَعْرِفُ", uz: "Men bilmayman" },
    { ar: "السِّبَاحَةَ", uz: "suzishni" }
  ],
  full_uz: "Bilmayman, men suzishni bilmayman.",
  note: null
},

{
  num: 30,
  time: "00:02:29,400 --> 00:02:31,620",
  arabic: "لَا تَقْلَقْ، دَائِمًا هُنَاكَ حَلٌّ",
  segs: [
    { ar: "لَا تَقْلَقْ", uz: "Xavotir olma." },
    { ar: "دَائِمًا", uz: "Har doim" },
    { ar: "هُنَاكَ حَلٌّ", uz: "yechim topiladi" }
  ],
  full_uz: "Xavotir olma, har doim yechim topiladi.",
  note: null
},
{
  num: 31,
  time: "00:02:31,620 --> 00:02:33,159",
  arabic: "هَلْ لَدَيْكَ خُيُوطٌ؟",
  segs: [
    { ar: "هَلْ لَدَيْكَ", uz: "Senda bormi?" },
    { ar: "خُيُوطٌ", uz: "iplar" }
  ],
  full_uz: "Senda iplar bormi?",
  note: null
},

{
  num: 32,
  time: "00:02:33,159 --> 00:02:34,219",
  arabic: "لَدَيَّ الْكَثِيرُ",
  segs: [
    { ar: "لَدَيَّ", uz: "Menda bor" },
    { ar: "الْكَثِيرُ", uz: "juda ko'p" }
  ],
  full_uz: "Menda juda ko'p.",
  note: null
},

{
  num: 33,
  time: "00:02:34,219 --> 00:02:36,840",
  arabic: "أَحْضِرْهَا وَأَنَا سَأَعُودُ فِي ثَوَانٍ",
  segs: [
    { ar: "أَحْضِرْهَا", uz: "Ularni olib kel." },
    { ar: "وَأَنَا", uz: "Men esa" },
    { ar: "سَأَعُودُ فِي ثَوَانٍ", uz: "bir necha soniyada qaytaman" }
  ],
  full_uz: "Ularni olib kel, men esa bir necha soniyada qaytaman.",
  note: null
},

{
  num: 34,
  time: "00:02:36,840 --> 00:02:42,939",
  arabic: "لَا يُمْكِنُ إِصْلَاحُهَا إِلَّا بِآلَةِ اللِّحَامِ",
  segs: [
    { ar: "لَا يُمْكِنُ إِصْلَاحُهَا", uz: "Uni tuzatib bo'lmaydi" },
    { ar: "إِلَّا", uz: "faqat" },
    { ar: "بِآلَةِ اللِّحَامِ", uz: "payvandlash uskunasi bilan" }
  ],
  full_uz: "Uni faqat payvandlash uskunasi bilan tuzatish mumkin.",
  note: "آلَةُ اللِّحَامِ — payvandlash uskunasi."
},

{
  num: 35,
  time: "00:02:42,939 --> 00:02:47,120",
  arabic: "بَابُوسْ، أَحْتَاجُ إِلَى حَقِيبَتِكَ لِبَعْضِ الْوَقْتِ",
  segs: [
    { ar: "بَابُوسْ", uz: "Papus." },
    { ar: "أَحْتَاجُ إِلَى", uz: "Menga kerak" },
    { ar: "حَقِيبَتِكَ", uz: "sumkang" },
    { ar: "لِبَعْضِ الْوَقْتِ", uz: "biroz vaqtga" }
  ],
  full_uz: "Papus, sumkang menga biroz vaqtga kerak.",
  note: null
},

{
  num: 36,
  time: "00:02:47,120 --> 00:02:50,539",
  arabic: "يَا لِلْمُصَادَفَةِ يَا سِيمْكَا، وَأَنَا أَيْضًا أَحْتَاجُهَا",
  segs: [
    { ar: "يَا لِلْمُصَادَفَةِ", uz: "Qarang-a, tasodifni." },
    { ar: "يَا سِيمْكَا", uz: "Simka." },
    { ar: "وَأَنَا أَيْضًا", uz: "Menga ham" },
    { ar: "أَحْتَاجُهَا", uz: "u kerak" }
  ],
  full_uz: "Qarang-a, tasodifni, Simka. Menga ham u kerak.",
  note: null
},

{
  num: 37,
  time: "00:02:50,539 --> 00:02:55,939",
  arabic: "مَاسْيَا، إِذًا سَآخُذُ حَقِيبَةَ أَدَوَاتِكِ",
  segs: [
    { ar: "مَاسْيَا", uz: "Masya." },
    { ar: "إِذًا", uz: "Unda" },
    { ar: "سَآخُذُ", uz: "olaman" },
    { ar: "حَقِيبَةَ أَدَوَاتِكِ", uz: "asboblar sumkangni" }
  ],
  full_uz: "Masya, unda asboblar sumkangni olaman.",
  note: null
},

{
  num: 38,
  time: "00:02:55,939 --> 00:02:56,700",
  arabic: "مَاذَا؟",
  segs: [
    { ar: "مَاذَا؟", uz: "Nima?" }
  ],
  full_uz: "Nima?",
  note: null
},

{
  num: 39,
  time: "00:02:56,700 --> 00:02:57,900",
  arabic: "سَأُعِيدُهَا بِسُرْعَةٍ",
  segs: [
    { ar: "سَأُعِيدُهَا", uz: "Uni qaytaraman." },
    { ar: "بِسُرْعَةٍ", uz: "Tezda." }
  ],
  full_uz: "Uni tezda qaytaraman.",
  note: null
},

{
  num: 40,
  time: "00:02:57,900 --> 00:02:59,439",
  arabic: "هَيْ، إِلَى أَيْنَ؟",
  segs: [
    { ar: "هَيْ", uz: "Hoy!" },
    { ar: "إِلَى أَيْنَ؟", uz: "Qayoqqa?" }
  ],
  full_uz: "Hoy! Qayoqqa?",
  note: null
},
{
  num: 41,
  time: "00:03:08,800 --> 00:03:11,800",
  arabic: "يَعِيشُ الْفِيكْسِيزُ لِمُسَاعَدَةِ الْآلَاتِ وَالْأَجْهِزَةِ",
  segs: [
    { ar: "يَعِيشُ الْفِيكْسِيزُ", uz: "Fiksiklar yashaydi" },
    { ar: "لِمُسَاعَدَةِ", uz: "yordam berish uchun" },
    { ar: "الْآلَاتِ وَالْأَجْهِزَةِ", uz: "mashina va qurilmalarga" }
  ],
  full_uz: "Fiksiklar mashina va qurilmalarga yordam berish uchun yashaydi.",
  note: null
},

{
  num: 42,
  time: "00:03:11,800 --> 00:03:15,120",
  arabic: "لَكِنَّ الْآلَاتِ كَبِيرَةٌ وَالْفِيكْسِيزُ صِغَارٌ جِدًّا",
  segs: [
    { ar: "لَكِنَّ الْآلَاتِ", uz: "Lekin mashinalar" },
    { ar: "كَبِيرَةٌ", uz: "katta" },
    { ar: "وَالْفِيكْسِيزُ", uz: "Fiksiklar esa" },
    { ar: "صِغَارٌ جِدًّا", uz: "juda kichkina" }
  ],
  full_uz: "Lekin mashinalar katta, Fiksiklar esa juda kichkina.",
  note: null
},

{
  num: 43,
  time: "00:03:15,120 --> 00:03:17,319",
  arabic: "لِذَلِكَ يَحْتَاجُونَ إِلَى الْأَدَوَاتِ",
  segs: [
    { ar: "لِذَلِكَ", uz: "Shuning uchun" },
    { ar: "يَحْتَاجُونَ", uz: "ularga kerak bo'ladi" },
    { ar: "إِلَى الْأَدَوَاتِ", uz: "asboblar" }
  ],
  full_uz: "Shuning uchun ularga asboblar kerak bo'ladi.",
  note: null
},

{
  num: 44,
  time: "00:03:17,319 --> 00:03:21,480",
  arabic: "قَدِيمًا كَانَ الْفِيكْسِيزُ يَعْمَلُونَ مُسْتَعِينِينَ بِأَيِّ شَيْءٍ يَجِدُونَهُ",
  segs: [
    { ar: "قَدِيمًا", uz: "Ilgari" },
    { ar: "كَانَ الْفِيكْسِيزُ يَعْمَلُونَ", uz: "Fiksiklar ishlashardi" },
    { ar: "مُسْتَعِينِينَ بِأَيِّ شَيْءٍ يَجِدُونَهُ", uz: "topgan har qanday narsadan foydalanib" }
  ],
  full_uz: "Ilgari Fiksiklar topgan har qanday narsadan foydalanib ishlashardi.",
  note: null
},

{
  num: 45,
  time: "00:03:21,480 --> 00:03:24,120",
  arabic: "رِيشَاتٌ صَغِيرَةٌ وَخُيُوطٌ وَإِبَرٌ",
  segs: [
    { ar: "رِيشَاتٌ صَغِيرَةٌ", uz: "kichik patlar" },
    { ar: "وَخُيُوطٌ", uz: "iplar" },
    { ar: "وَإِبَرٌ", uz: "va ignalar" }
  ],
  full_uz: "Kichik patlar, iplar va ignalar.",
  note: null
},

{
  num: 46,
  time: "00:03:24,659 --> 00:03:27,319",
  arabic: "أَمَّا الْآنَ فَلَدَيْهِمْ حَقَائِبُ ظَهْرٍ لِلْأَدَوَاتِ",
  segs: [
    { ar: "أَمَّا الْآنَ", uz: "Hozir esa" },
    { ar: "فَلَدَيْهِمْ", uz: "ularda bor" },
    { ar: "حَقَائِبُ ظَهْرٍ لِلْأَدَوَاتِ", uz: "asboblar uchun ryukzaklar" }
  ],
  full_uz: "Hozir esa ularda asboblar uchun ryukzaklar bor.",
  note: null
},

{
  num: 47,
  time: "00:03:27,319 --> 00:03:30,259",
  arabic: "وَتَجِدُ فِي دَاخِلِ الْحَقِيبَةِ جَمِيعَ أَنْوَاعِ الْأَدَوَاتِ",
  segs: [
    { ar: "وَتَجِدُ", uz: "Unda topasiz" },
    { ar: "فِي دَاخِلِ الْحَقِيبَةِ", uz: "sumka ichida" },
    { ar: "جَمِيعَ أَنْوَاعِ الْأَدَوَاتِ", uz: "har xil asboblarni" }
  ],
  full_uz: "Sumka ichida har xil asboblarni topish mumkin.",
  note: null
},

{
  num: 48,
  time: "00:03:30,259 --> 00:03:36,480",
  arabic: "اضْغَطِ الزِّرَّ حَتَّى تَدُورَ الْحَقِيبَةُ بِسُرْعَةٍ وَتُخْرِجَ خُطَّافًا أَوْ مِغْنَاطِيسًا أَوْ مِظَلَّةً",
  segs: [
    { ar: "اضْغَطِ الزِّرَّ", uz: "Tugmani bos." },
    { ar: "حَتَّى تَدُورَ الْحَقِيبَةُ بِسُرْعَةٍ", uz: "Shunda sumka tez aylana boshlaydi." },
    { ar: "وَتُخْرِجَ", uz: "va chiqaradi" },
    { ar: "خُطَّافًا أَوْ مِغْنَاطِيسًا أَوْ مِظَلَّةً", uz: "ilgak, magnit yoki soyabonni" }
  ],
  full_uz: "Tugmani bos. Shunda sumka tez aylana boshlaydi va ilgak, magnit yoki soyabonni chiqaradi.",
  note: null
},

{
  num: 49,
  time: "00:03:36,480 --> 00:03:39,879",
  arabic: "لِكُلِّ فِيكْسِيٍّ بَالِغٍ حَقِيبَةُ الْأَدَوَاتِ الْخَاصَّةُ بِهِ",
  segs: [
    { ar: "لِكُلِّ فِيكْسِيٍّ بَالِغٍ", uz: "Har bir katta Fiksikning" },
    { ar: "حَقِيبَةُ الْأَدَوَاتِ", uz: "asboblar sumkasi" },
    { ar: "الْخَاصَّةُ بِهِ", uz: "o'ziga tegishli bo'ladi" }
  ],
  full_uz: "Har bir katta Fiksikning o'ziga tegishli asboblar sumkasi bo'ladi.",
  note: null
},

{
  num: 50,
  time: "00:03:39,879 --> 00:03:42,319",
  arabic: "أَمَّا الْأَطْفَالُ فَإِنَّ عَلَيْهِمْ أَنْ يَدْرُسُوا بِالْجِدِّ",
  segs: [
    { ar: "أَمَّا الْأَطْفَالُ", uz: "Bolalar esa" },
    { ar: "فَإِنَّ عَلَيْهِمْ", uz: "ular kerak" },
    { ar: "أَنْ يَدْرُسُوا بِالْجِدِّ", uz: "yaxshi o'qishlari" }
  ],
  full_uz: "Bolalar esa avval yaxshi o'qishlari kerak.",
  note: null
},
{
  num: 51,
  time: "00:03:42,319 --> 00:03:46,359",
  arabic: "وَبَعْدَهَا اجْتِيَازُ اخْتِبَارٍ قَبْلَ أَنْ يَحْصُلُوا عَلَى حُقُوقِ الْفِيكْسِيِّ الْبَالِغِ",
  segs: [
    { ar: "وَبَعْدَهَا", uz: "Shundan keyin" },
    { ar: "اجْتِيَازُ اخْتِبَارٍ", uz: "imtihondan o'tishlari" },
    { ar: "قَبْلَ أَنْ يَحْصُلُوا", uz: "olishlaridan oldin" },
    { ar: "عَلَى حُقُوقِ الْفِيكْسِيِّ الْبَالِغِ", uz: "katta Fiksik huquqlarini" }
  ],
  full_uz: "Shundan keyin katta Fiksik huquqlarini olishdan oldin imtihondan o'tishlari kerak.",
  note: null
},

{
  num: 52,
  time: "00:03:46,359 --> 00:03:51,039",
  arabic: "وَبَعْدَ ذَلِكَ يَحْصُلُونَ عَلَى حَقَائِبِ أَدَوَاتٍ خَاصَّةٍ بِهِمْ",
  segs: [
    { ar: "وَبَعْدَ ذَلِكَ", uz: "Shundan keyin" },
    { ar: "يَحْصُلُونَ", uz: "ular oladilar" },
    { ar: "عَلَى حَقَائِبِ أَدَوَاتٍ", uz: "asboblar sumkalarini" },
    { ar: "خَاصَّةٍ بِهِمْ", uz: "o'zlariga tegishli" }
  ],
  full_uz: "Shundan keyin o'zlariga tegishli asboblar sumkalarini oladilar.",
  note: null
},

{
  num: 53,
  time: "00:03:51,039 --> 00:03:59,060",
  arabic: "ثُمَّ مَاذَا؟ تَنْزِلِينَ إِلَى الْأَسْفَلِ وَمَعَكِ هَذَا؟",
  segs: [
    { ar: "ثُمَّ مَاذَا؟", uz: "Keyin nima?" },
    { ar: "تَنْزِلِينَ إِلَى الْأَسْفَلِ", uz: "Pastga tushasanmi?" },
    { ar: "وَمَعَكِ هَذَا؟", uz: "Mana buni olibmi?" }
  ],
  full_uz: "Keyin nima? Pastga mana buni olib tushasanmi?",
  note: null
},

{
  num: 54,
  time: "00:03:59,060 --> 00:04:00,199",
  arabic: "لَيْسَ بِهَذَا الشَّكْلِ",
  segs: [
    { ar: "لَيْسَ", uz: "Yo'q" },
    { ar: "بِهَذَا الشَّكْلِ", uz: "bunday emas" }
  ],
  full_uz: "Yo'q, bunday emas.",
  note: null
},

{
  num: 55,
  time: "00:04:00,199 --> 00:04:02,159",
  arabic: "بَلْ",
  segs: [
    { ar: "بَلْ", uz: "Balki..." }
  ],
  full_uz: "Balki...",
  note: null
},

{
  num: 56,
  time: "00:04:02,159 --> 00:04:04,079",
  arabic: "هَكَذَا",
  segs: [
    { ar: "هَكَذَا", uz: "Mana bunday." }
  ],
  full_uz: "Mana bunday.",
  note: null
},

{
  num: 57,
  time: "00:04:04,079 --> 00:04:06,539",
  arabic: "أَجَلْ، هَكَذَا",
  segs: [
    { ar: "أَجَلْ", uz: "Ha." },
    { ar: "هَكَذَا", uz: "Xuddi shunday." }
  ],
  full_uz: "Ha, xuddi shunday.",
  note: null
},

{
  num: 58,
  time: "00:04:06,539 --> 00:04:07,840",
  arabic: "أُعْطِيكِ خَيْطًا",
  segs: [
    { ar: "أُعْطِيكِ", uz: "Senga beraman" },
    { ar: "خَيْطًا", uz: "ipni" }
  ],
  full_uz: "Senga ip beraman.",
  note: null
},

{
  num: 59,
  time: "00:04:07,840 --> 00:04:09,219",
  arabic: "اسْحَبِينِي إِلَى أَعْلَى",
  segs: [
    { ar: "اسْحَبِينِي", uz: "Meni tort." },
    { ar: "إِلَى أَعْلَى", uz: "Yuqoriga." }
  ],
  full_uz: "Meni yuqoriga tort.",
  note: null
},

{
  num: 60,
  time: "00:04:09,219 --> 00:04:14,979",
  arabic: "إِنَّهَا تَقُولُ عِنْدَمَا أَشُدُّ الْخَيْطَةَ بِقُوَّةٍ اسْحَبْنِي إِلَى الْأَعْلَى",
  segs: [
    { ar: "إِنَّهَا تَقُولُ", uz: "U aytyapti:" },
    { ar: "عِنْدَمَا أَشُدُّ الْخَيْطَةَ بِقُوَّةٍ", uz: "ipni qattiq tortganimda" },
    { ar: "اسْحَبْنِي إِلَى الْأَعْلَى", uz: "meni yuqoriga torting" }
  ],
  full_uz: "U aytyapti: ipni qattiq tortganimda meni yuqoriga torting.",
  note: null
},
{
  num: 61,
  time: "00:04:14,979 --> 00:04:15,620",
  arabic: "فَهِمْتُ",
  segs: [
    { ar: "فَهِمْتُ", uz: "Tushundim." }
  ],
  full_uz: "Tushundim.",
  note: null
},

{
  num: 62,
  time: "00:04:15,620 --> 00:04:17,860",
  arabic: "لَقَدْ قَالَ فَهِمْتُ",
  segs: [
    { ar: "لَقَدْ قَالَ", uz: "U aytdi:" },
    { ar: "فَهِمْتُ", uz: "Tushundim." }
  ],
  full_uz: "U: Tushundim, dedi.",
  note: null
},

{
  num: 63,
  time: "00:04:17,860 --> 00:04:19,879",
  arabic: "لَا دَاعِيَ لِأَنْ تُعِيدَ مَا قَالَ",
  segs: [
    { ar: "لَا دَاعِيَ", uz: "Hojati yo'q" },
    { ar: "لِأَنْ تُعِيدَ", uz: "takrorlashingga" },
    { ar: "مَا قَالَ", uz: "uning aytganini" }
  ],
  full_uz: "Uning aytganini takrorlashingga hojat yo'q.",
  note: null
},

{
  num: 64,
  time: "00:04:19,879 --> 00:04:22,540",
  arabic: "قَالَتْ لَا دَاعِيَ لِأَنْ تُعِيدَ مَا قَالَهُ",
  segs: [
    { ar: "قَالَتْ", uz: "U aytdi:" },
    { ar: "لَا دَاعِيَ", uz: "Hojati yo'q" },
    { ar: "لِأَنْ تُعِيدَ", uz: "takrorlashingga" },
    { ar: "مَا قَالَهُ", uz: "uning aytganini" }
  ],
  full_uz: "U: Uning aytganini takrorlashingga hojat yo'q, dedi.",
  note: null
},

{
  num: 65,
  time: "00:04:59,360 --> 00:05:09,840",
  arabic: "سِيمْكَا، نُولِيكْ، شُكْرًا لَكُمَا، لَقَدْ أَنْقَذْتُمَا الْمَوْقِفَ",
  segs: [
    { ar: "سِيمْكَا، نُولِيكْ", uz: "Simka, Nolik." },
    { ar: "شُكْرًا لَكُمَا", uz: "Ikkalangizga rahmat." },
    { ar: "لَقَدْ أَنْقَذْتُمَا", uz: "Sizlar qutqarib qoldingizlar" },
    { ar: "الْمَوْقِفَ", uz: "vaziyatni" }
  ],
  full_uz: "Simka, Nolik, ikkalangizga rahmat. Sizlar vaziyatni qutqarib qoldingizlar.",
  note: null
},

{
  num: 66,
  time: "00:05:04,720 --> 00:05:09,840",
  arabic: "هَذَا وَاجِبُ الْفِيكْسِيزِ",
  segs: [
    { ar: "هَذَا", uz: "Bu" },
    { ar: "وَاجِبُ الْفِيكْسِيزِ", uz: "Fiksiklarning vazifasi" }
  ],
  full_uz: "Bu Fiksiklarning vazifasi.",
  note: null
},

{
  num: 67,
  time: "00:05:09,220 --> 00:05:11,220",
  arabic: "تُومْ تُومَاسْ، إِلَى مَنْ تَتَحَدَّثُ؟",
  segs: [
    { ar: "تُومْ تُومَاسْ", uz: "Tom Tomas." },
    { ar: "إِلَى مَنْ", uz: "Kim bilan" },
    { ar: "تَتَحَدَّثُ؟", uz: "gaplashyapsan?" }
  ],
  full_uz: "Tom Tomas, kim bilan gaplashyapsan?",
  note: null
},

{
  num: 68,
  time: "00:05:12,280 --> 00:05:13,760",
  arabic: "أُوهْ، لَقَدْ عَادَتْ أُمُّكَ",
  segs: [
    { ar: "أُوهْ", uz: "Voy." },
    { ar: "لَقَدْ عَادَتْ", uz: "qaytib kelibdi" },
    { ar: "أُمُّكَ", uz: "onang" }
  ],
  full_uz: "Voy, onang qaytib kelibdi.",
  note: null
},

{
  num: 69,
  time: "00:05:13,760 --> 00:05:17,620",
  arabic: "لَا أَحَدَ",
  segs: [
    { ar: "لَا أَحَدَ", uz: "Hech kim bilan." }
  ],
  full_uz: "Hech kim bilan.",
  note: null
},

{
  num: 70,
  time: "00:05:19,620 --> 00:05:23,980",
  arabic: "هَيْ، هَلْ عُدْتُمَا إِلَى فِيكْسِيزٍ؟ أُرِيدُ أَنْ أَسْأَلَكُمَا",
  segs: [
    { ar: "هَيْ", uz: "Hoy." },
    { ar: "هَلْ عُدْتُمَا إِلَى فِيكْسِيزٍ؟", uz: "Yana Fiksikka aylandingizlarmi?" },
    { ar: "أُرِيدُ أَنْ أَسْأَلَكُمَا", uz: "Sizlardan bir narsa so'ramoqchiman." }
  ],
  full_uz: "Hoy, yana Fiksikka aylandingizlarmi? Sizlardan bir narsa so'ramoqchiman.",
  note: null
},
{
  num: 71,
  time: "00:05:23,980 --> 00:05:24,540",
  arabic: "نَسِيتُ",
  segs: [
    { ar: "نَسِيتُ", uz: "Esimdan chiqibdi." }
  ],
  full_uz: "Esimdan chiqibdi.",
  note: null
},

{
  num: 72,
  time: "00:05:24,540 --> 00:05:30,280",
  arabic: "أَخْبِرُونِي، مَا رَأْيُكُمَا؟ هَلْ أَكْتُبُ السَّنَوِيَّةَ الثَّانِيَةَ عَشْرَ أَمِ الثَّانِيَةَ عَشْرَ؟",
  segs: [
    { ar: "أَخْبِرُونِي", uz: "Aytinglar-chi." },
    { ar: "مَا رَأْيُكُمَا؟", uz: "Sizlarning fikringiz qanday?" },
    { ar: "هَلْ أَكْتُبُ", uz: "Men yozaymi" },
    { ar: "السَّنَوِيَّةَ الثَّانِيَةَ عَشْرَ", uz: "o'n ikkinchi yillik" },
    { ar: "أَمِ الثَّانِيَةَ عَشْرَ؟", uz: "yoki shunchaki o'n ikkinchi?" }
  ],
  full_uz: "Aytinglar-chi, sizlarning fikringiz qanday? O'n ikkinchi yillik deb yozaymi yoki shunchaki o'n ikkinchi debmi?",
  note: null
},

{
  num: 73,
  time: "00:05:30,280 --> 00:05:31,680",
  arabic: "اُكْتُبْهَا رَقْمًا وَكَفَى",
  segs: [
    { ar: "اُكْتُبْهَا", uz: "Uni yoz." },
    { ar: "رَقْمًا", uz: "raqam bilan" },
    { ar: "وَكَفَى", uz: "bo'ldi" }
  ],
  full_uz: "Uni raqam bilan yoz, bo'ldi.",
  note: null
},

{
  num: 74,
  time: "00:05:31,680 --> 00:05:33,180",
  arabic: "صَحِيحٌ",
  segs: [
    { ar: "صَحِيحٌ", uz: "To'g'ri." }
  ],
  full_uz: "To'g'ri.",
  note: null
}
];
if (typeof module !== "undefined" && module.exports) {
  module.exports = lessons;
}