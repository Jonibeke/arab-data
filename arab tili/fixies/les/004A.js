const lessons = [
    {
  num: 1,
  time: "00:00:34,840 --> 00:00:41,460",
  arabic: "مَرْحَبًا تُومُ، فِيمَا تُفَكِّرُ؟ هَيَّا أَجِبْنِي",
  segs: [
    { ar: "مَرْحَبًا تُومُ", uz: "Salom, Tom." },
    { ar: "فِيمَا تُفَكِّرُ", uz: "Nima haqida o'ylayapsan?" },
    { ar: "هَيَّا", uz: "Qani" },
    { ar: "أَجِبْنِي", uz: "menga javob ber." }
  ],
  full_uz: "Salom, Tom. Nima haqida o'ylayapsan? Qani, menga javob ber.",
  note: null
},

{
  num: 2,
  time: "00:00:41,460 --> 00:00:46,299",
  arabic: "عَلَيَّ أَنْ أَكْتُبَ مَقَالَةً لِلْمَدْرَسَةِ عَنْ أَفْضَلِ أَصْدِقَائِي",
  segs: [
    { ar: "عَلَيَّ", uz: "Men" },
    { ar: "أَنْ أَكْتُبَ", uz: "yozishim kerak" },
    { ar: "مَقَالَةً", uz: "maqola" },
    { ar: "لِلْمَدْرَسَةِ", uz: "maktab uchun" },
    { ar: "عَنْ أَفْضَلِ أَصْدِقَائِي", uz: "eng yaxshi do'stim haqida" }
  ],
  full_uz: "Maktab uchun eng yaxshi do'stim haqida maqola yozishim kerak.",
  note: "مَقَالَةٌ — maqola."
},

{
  num: 3,
  time: "00:00:46,299 --> 00:00:47,600",
  arabic: "لَا أَعْلَمُ عَمَّنْ أَكْتُبُ",
  segs: [
    { ar: "لَا أَعْلَمُ", uz: "Bilmayman" },
    { ar: "عَمَّنْ أَكْتُبُ", uz: "kim haqida yozishni" }
  ],
  full_uz: "Kim haqida yozishni bilmayman.",
  note: null
},

{
  num: 4,
  time: "00:00:47,600 --> 00:00:50,439",
  arabic: "مَاذَا تَقْصِدُ؟ أَلَسْتُ أَنَا أَفْضَلَ أَصْدِقَائِكَ؟",
  segs: [
    { ar: "مَاذَا تَقْصِدُ", uz: "Nimani nazarda tutyapsan?" },
    { ar: "أَلَسْتُ أَنَا", uz: "Men emasmanmi" },
    { ar: "أَفْضَلَ أَصْدِقَائِكَ", uz: "eng yaxshi do'sting" }
  ],
  full_uz: "Nimani nazarda tutyapsan? Men eng yaxshi do'sting emasmanmi?",
  note: null
},

{
  num: 5,
  time: "00:00:50,439 --> 00:00:53,000",
  arabic: "بَلَى رَيْبَ، كَيْفَ نَسِيتُ أَنْ أَكْتُبَ عَنْكَ؟",
  segs: [
    { ar: "بَلَى", uz: "Albatta" },
    { ar: "كَيْفَ نَسِيتُ", uz: "Qanday unutdim" },
    { ar: "أَنْ أَكْتُبَ عَنْكَ", uz: "sen haqingda yozishni" }
  ],
  full_uz: "Albatta. Qanday qilib sen haqingda yozishni unutdim?",
  note: null
},

{
  num: 6,
  time: "00:00:53,000 --> 00:00:56,140",
  arabic: "لَا لَا، عَلَيْكَ أَنْ تَنْسَى ذَلِكَ، إِنَّ هَذَا سِرٌّ بَيْنَنَا",
  segs: [
    { ar: "لَا لَا", uz: "Yo'q, yo'q" },
    { ar: "عَلَيْكَ أَنْ تَنْسَى ذَلِكَ", uz: "buni unutishing kerak" },
    { ar: "إِنَّ هَذَا", uz: "bu" },
    { ar: "سِرٌّ بَيْنَنَا", uz: "oramizdagi sir" }
  ],
  full_uz: "Yo'q, yo'q. Buni unutishing kerak. Bu oramizdagi sir.",
  note: null
},

{
  num: 7,
  time: "00:00:56,140 --> 00:00:59,840",
  arabic: "أَلَا تَذْكُرُ مَا وَعَدْتَنَا بِهِ عِنْدَمَا الْتَقَيْنَا؟",
  segs: [
    { ar: "أَلَا تَذْكُرُ", uz: "Eslamaysanmi" },
    { ar: "مَا وَعَدْتَنَا بِهِ", uz: "bizga bergan va'dangni" },
    { ar: "عِنْدَمَا الْتَقَيْنَا", uz: "uchrashganimizda" }
  ],
  full_uz: "Uchrashganimizda bizga bergan va'dangni eslamaysanmi?",
  note: "وَعَدَ — va'da bermoq."
},

{
  num: 8,
  time: "00:00:59,840 --> 00:01:02,840",
  arabic: "صَحِيحٌ، كَيْفَ نَسِيتُ ذَلِكَ؟",
  segs: [
    { ar: "صَحِيحٌ", uz: "To'g'ri" },
    { ar: "كَيْفَ نَسِيتُ ذَلِكَ", uz: "qanday unutdim ekan" }
  ],
  full_uz: "To'g'ri, buni qanday unutdim ekan?",
  note: null
},

{
  num: 9,
  time: "00:01:08,840 --> 00:01:10,840",
  arabic: "مَا خَطْبُ تْشُوسَاكَا الْيَوْمَ؟",
  segs: [
    { ar: "مَا خَطْبُ", uz: "Nima bo'ldi" },
    { ar: "تْشُوسَاكَا", uz: "Chusakaga" },
    { ar: "الْيَوْمَ", uz: "bugun" }
  ],
  full_uz: "Chusakaga bugun nima bo'ldi?",
  note: null
},

{
  num: 10,
  time: "00:01:16,840 --> 00:01:19,840",
  arabic: "تْشُوسَاكَا، بِمَاذَا تُزْعِجُكِ هَذِهِ الْبَزَّلَاتُ؟",
  segs: [
    { ar: "تْشُوسَاكَا", uz: "Chusaka" },
    { ar: "بِمَاذَا", uz: "nima uchun" },
    { ar: "تُزْعِجُكِ", uz: "seni bezovta qilyapti" },
    { ar: "هَذِهِ الْبَزَّلَاتُ", uz: "bu kombinezonlar" }
  ],
  full_uz: "Chusaka, bu kombinezonlar seni nega bezovta qilyapti?",
  note: null
},
{
  num: 11,
  time: "00:01:29,840 --> 00:01:37,540",
  arabic: "مَا مُشْكِلَتُكِ؟ دَعِيهَا وَشَأْنَهَا",
  segs: [
    { ar: "مَا مُشْكِلَتُكِ", uz: "Senga nima bo'ldi?" },
    { ar: "دَعِيهَا", uz: "Uni qo'yib yubor." },
    { ar: "وَشَأْنَهَا", uz: "O'z holiga qo'y." }
  ],
  full_uz: "Senga nima bo'ldi? Uni o'z holiga qo'y.",
  note: "شَأْنٌ — hol, ish."
},

{
  num: 12,
  time: "00:01:37,540 --> 00:01:41,540",
  arabic: "هَلَّا هَدَأْتِ قَلِيلًا؟ سَتُدَمِّرِينَ طَائِرَتِي",
  segs: [
    { ar: "هَلَّا هَدَأْتِ قَلِيلًا", uz: "Biroz tinchlanmaysanmi?" },
    { ar: "سَتُدَمِّرِينَ", uz: "Sen buzib tashlaysan" },
    { ar: "طَائِرَتِي", uz: "samolyotimni" }
  ],
  full_uz: "Biroz tinchlanmaysanmi? Samolyotimni buzib tashlaysan.",
  note: "هَدَأَ — tinchlanmoq."
},

{
  num: 13,
  time: "00:01:41,540 --> 00:01:53,040",
  arabic: "لِنَخْرُجْ مِنْ هُنَا",
  segs: [
    { ar: "لِنَخْرُجْ", uz: "Keling, chiqaylik" },
    { ar: "مِنْ هُنَا", uz: "bu yerdan" }
  ],
  full_uz: "Keling, bu yerdan chiqaylik.",
  note: null
},

{
  num: 14,
  time: "00:01:53,040 --> 00:01:59,040",
  arabic: "مَا الَّذِي يَحْدُثُ؟",
  segs: [
    { ar: "مَا الَّذِي", uz: "Nima" },
    { ar: "يَحْدُثُ", uz: "bo'lyapti" }
  ],
  full_uz: "Nima bo'lyapti?",
  note: null
},

{
  num: 15,
  time: "00:01:59,040 --> 00:02:03,040",
  arabic: "مَا الَّذِي يَحْدُثُ؟",
  segs: [
    { ar: "مَا الَّذِي", uz: "Nima" },
    { ar: "يَحْدُثُ", uz: "bo'lyapti" }
  ],
  full_uz: "Nima bo'lyapti?",
  note: null
},

{
  num: 16,
  time: "00:02:05,040 --> 00:02:10,080",
  arabic: "إِنْ لَمْ تُغَيِّرَا شَكْلَكُمَا ثَانِيَةً فَلَنْ أَدَعَكُمَا تَذْهَبَانِ",
  segs: [
    { ar: "إِنْ لَمْ", uz: "Agar" },
    { ar: "تُغَيِّرَا شَكْلَكُمَا", uz: "yana qiyofangizni o'zgartirmasangiz" },
    { ar: "فَلَنْ أَدَعَكُمَا", uz: "sizlarni qo'yib yubormayman" },
    { ar: "تَذْهَبَانِ", uz: "ketishga" }
  ],
  full_uz: "Agar yana qiyofangizni o'zgartirmasangiz, sizlarni ketishga qo'ymayman.",
  note: "غَيَّرَ — o'zgartirmoq."
},

{
  num: 17,
  time: "00:02:10,080 --> 00:02:12,260",
  arabic: "أَرْجُوكُمَا لَا تَخَافَا",
  segs: [
    { ar: "أَرْجُوكُمَا", uz: "Iltimos" },
    { ar: "لَا تَخَافَا", uz: "qo'rqmanglar" }
  ],
  full_uz: "Iltimos, qo'rqmanglar.",
  note: null
},

{
  num: 18,
  time: "00:02:12,260 --> 00:02:13,040",
  arabic: "أَنَا لَنْ أُؤْذِيَكُمَا",
  segs: [
    { ar: "أَنَا", uz: "Men" },
    { ar: "لَنْ أُؤْذِيَكُمَا", uz: "sizlarga zarar bermayman" }
  ],
  full_uz: "Men sizlarga zarar bermayman.",
  note: "آذَى — zarar yetkazmoq."
},

{
  num: 19,
  time: "00:02:13,620 --> 00:02:14,040",
  arabic: "صَدِّقَانِي",
  segs: [
    { ar: "صَدِّقَانِي", uz: "Menga ishoninglar" }
  ],
  full_uz: "Menga ishoninglar.",
  note: null
},

{
  num: 20,
  time: "00:02:14,620 --> 00:02:17,040",
  arabic: "سَأَسْأَلُكُمَا سُؤَالًا وَاحِدًا وَسَأَتْرُكُكُمَا",
  segs: [
    { ar: "سَأَسْأَلُكُمَا", uz: "Sizlardan so'rayman" },
    { ar: "سُؤَالًا وَاحِدًا", uz: "faqat bitta savol" },
    { ar: "وَسَأَتْرُكُكُمَا", uz: "keyin sizlarni qo'yib yuboraman" }
  ],
  full_uz: "Sizlardan faqat bitta savol so'rayman, keyin qo'yib yuboraman.",
  note: null
},
{
  num: 21,
  time: "00:02:17,700 --> 00:02:19,040",
  arabic: "مَا رَأْيُكُمَا؟",
  segs: [
    { ar: "مَا رَأْيُكُمَا", uz: "Nima deysizlar?" }
  ],
  full_uz: "Nima deysizlar?",
  note: null
},

{
  num: 22,
  time: "00:02:21,040 --> 00:02:22,599",
  arabic: "نُولِكُ",
  segs: [
    { ar: "نُولِكُ", uz: "Nolik" }
  ],
  full_uz: "Nolik.",
  note: null
},

{
  num: 23,
  time: "00:02:22,599 --> 00:02:24,439",
  arabic: "لَا نَسْتَطِيعُ",
  segs: [
    { ar: "لَا نَسْتَطِيعُ", uz: "Biz qila olmaymiz." }
  ],
  full_uz: "Biz qila olmaymiz.",
  note: null
},

{
  num: 24,
  time: "00:02:24,439 --> 00:02:25,420",
  arabic: "لَا تَقْلَقِي",
  segs: [
    { ar: "لَا تَقْلَقِي", uz: "Xavotir olma." }
  ],
  full_uz: "Xavotir olma.",
  note: null
},

{
  num: 25,
  time: "00:02:25,420 --> 00:02:27,540",
  arabic: "كُفَّ عَنِ التَّحْدِيقِ",
  segs: [
    { ar: "كُفَّ", uz: "Bas qil" },
    { ar: "عَنِ التَّحْدِيقِ", uz: "tikilib turishni" }
  ],
  full_uz: "Tikilib turishni bas qil.",
  note: "التَّحْدِيقُ — tikilib qarash."
},

{
  num: 26,
  time: "00:02:27,540 --> 00:02:28,840",
  arabic: "وَاسْأَلْ سُؤَالَكَ",
  segs: [
    { ar: "وَاسْأَلْ", uz: "Savolingni ber" },
    { ar: "سُؤَالَكَ", uz: "savolingni" }
  ],
  full_uz: "Savolingni ber.",
  note: null
},

{
  num: 27,
  time: "00:02:28,840 --> 00:02:33,759",
  arabic: "مُسْتَحِيلٌ، يُمْكِنُكُمَا التَّكَلُّمُ؟ فَقَطْ، فَقَطْ أَخْبِرَانِي مَنْ أَنْتُمَا",
  segs: [
    { ar: "مُسْتَحِيلٌ", uz: "Bo'lishi mumkin emas!" },
    { ar: "يُمْكِنُكُمَا التَّكَلُّمُ", uz: "Gaplasha olasizlarmi?" },
    { ar: "فَقَطْ، فَقَطْ", uz: "Faqat, faqat" },
    { ar: "أَخْبِرَانِي", uz: "menga aytinglar" },
    { ar: "مَنْ أَنْتُمَا", uz: "sizlar kimsizlar" }
  ],
  full_uz: "Bo'lishi mumkin emas! Sizlar gaplasha olasizlarmi? Faqat, faqat menga aytinglar, sizlar kimsizlar?",
  note: null
},

{
  num: 28,
  time: "00:02:33,759 --> 00:02:39,580",
  arabic: "فِيكْسِيزْ، هَذَا كَافٍ، لَقَدْ أَجَبْنَاكَ، دَعْنَا نَذْهَبْ",
  segs: [
    { ar: "فِيكْسِيزْ", uz: "Fiksilar." },
    { ar: "هَذَا كَافٍ", uz: "Shu yetarli." },
    { ar: "لَقَدْ أَجَبْنَاكَ", uz: "Senga javob berdik." },
    { ar: "دَعْنَا نَذْهَبْ", uz: "Endi ketaylik." }
  ],
  full_uz: "Fiksilar. Shu yetarli. Senga javob berdik. Endi ketaylik.",
  note: null
},

{
  num: 29,
  time: "00:02:39,580 --> 00:02:42,360",
  arabic: "انْتَظِرَا، مَا مَعْنَى أَنْ تَكُونَا فِيكْسِيزْ؟",
  segs: [
    { ar: "انْتَظِرَا", uz: "To'xtanglar." },
    { ar: "مَا مَعْنَى", uz: "Nima degani" },
    { ar: "أَنْ تَكُونَا فِيكْسِيزْ", uz: "Fiksi bo'lish" }
  ],
  full_uz: "To'xtanglar! Fiksi bo'lish nima degani?",
  note: null
},

{
  num: 30,
  time: "00:02:42,360 --> 00:02:44,140",
  arabic: "إِنَّكَ تَسْأَلُنِي الْآنَ سُؤَالًا آخَرَ",
  segs: [
    { ar: "إِنَّكَ", uz: "Sen" },
    { ar: "تَسْأَلُنِي", uz: "mendan so'rayapsan" },
    { ar: "الْآنَ", uz: "hozir" },
    { ar: "سُؤَالًا آخَرَ", uz: "yana bitta savol" }
  ],
  full_uz: "Sen hozir mendan yana bitta savol so'rayapsan.",
  note: null
},
{
  num: 31,
  time: "00:02:44,140 --> 00:02:46,599",
  arabic: "لَقَدْ وَعَدْتَ أَنْ تَتْرُكَنَا، أَنَسِيتَ؟",
  segs: [
    { ar: "لَقَدْ وَعَدْتَ", uz: "Sen va'da berganding." },
    { ar: "أَنْ تَتْرُكَنَا", uz: "Bizni qo'yib yuborishga." },
    { ar: "أَنَسِيتَ", uz: "Unutdingmi?" }
  ],
  full_uz: "Sen bizni qo'yib yuborishga va'da berganding. Unutdingmi?",
  note: null
},

{
  num: 32,
  time: "00:02:46,599 --> 00:02:49,420",
  arabic: "أَنَا آسِفٌ، يُمْكِنُكُمَا الذَّهَابُ الْآنَ",
  segs: [
    { ar: "أَنَا آسِفٌ", uz: "Kechirasizlar." },
    { ar: "يُمْكِنُكُمَا", uz: "Sizlar" },
    { ar: "الذَّهَابُ الْآنَ", uz: "endi ketishingiz mumkin" }
  ],
  full_uz: "Kechirasizlar, endi ketishingiz mumkin.",
  note: null
},

{
  num: 33,
  time: "00:02:49,420 --> 00:02:53,439",
  arabic: "سِيمْكَا، لَا مُشْكِلَةَ، أَرَى مِنْ عَيْنَيْهِ أَنَّهُ ثِقَةٌ",
  segs: [
    { ar: "سِيمْكَا", uz: "Simka" },
    { ar: "لَا مُشْكِلَةَ", uz: "muammo yo'q" },
    { ar: "أَرَى", uz: "ko'ryapman" },
    { ar: "مِنْ عَيْنَيْهِ", uz: "uning ko'zlaridan" },
    { ar: "أَنَّهُ ثِقَةٌ", uz: "ishonchli ekanini" }
  ],
  full_uz: "Simka, muammo yo'q. Uning ko'zlaridan ishonchli ekanini ko'ryapman.",
  note: "ثِقَةٌ — ishonchli, ishonchga loyiq."
},

{
  num: 34,
  time: "00:02:53,439 --> 00:02:58,180",
  arabic: "آهْ، حَسَنًا، سَأُخْبِرُهُ",
  segs: [
    { ar: "آهْ", uz: "Mayli" },
    { ar: "حَسَنًا", uz: "xo'p" },
    { ar: "سَأُخْبِرُهُ", uz: "unga aytaman" }
  ],
  full_uz: "Mayli, xo'p, unga aytaman.",
  note: null
},

{
  num: 35,
  time: "00:02:58,180 --> 00:03:02,260",
  arabic: "عَلَيْكَ أَنْ تَعِدَ أَلَّا تُخْبِرَ أَحَدًا بِسِرِّنَا",
  segs: [
    { ar: "عَلَيْكَ أَنْ تَعِدَ", uz: "Va'da berishing kerak" },
    { ar: "أَلَّا تُخْبِرَ أَحَدًا", uz: "hech kimga aytmaslikka" },
    { ar: "بِسِرِّنَا", uz: "sirimizni" }
  ],
  full_uz: "Sirimizni hech kimga aytmaslikka va'da berishing kerak.",
  note: null
},

{
  num: 36,
  time: "00:03:02,260 --> 00:03:03,340",
  arabic: "أَعِدُكُمَا",
  segs: [
    { ar: "أَعِدُكُمَا", uz: "Va'da beraman." }
  ],
  full_uz: "Va'da beraman.",
  note: null
},

{
  num: 37,
  time: "00:03:03,340 --> 00:03:07,240",
  arabic: "الْفِيكْسِيزْ",
  segs: [
    { ar: "الْفِيكْسِيزْ", uz: "Fiksilar." }
  ],
  full_uz: "Fiksilar.",
  note: null
},

{
  num: 38,
  time: "00:03:07,240 --> 00:03:15,159",
  arabic: "نَحْنُ مَخْلُوقَاتٌ صَغِيرَةٌ تَعِيشُ دَاخِلَ الْأَجْهِزَةِ وَتَقُومُ بِرِعَايَتِهَا وَإِصْلَاحِهَا وَتَنْظِيفِهَا ثُمَّ تَزْيِيتِهَا",
  segs: [
    { ar: "نَحْنُ مَخْلُوقَاتٌ صَغِيرَةٌ", uz: "Biz kichkina mavjudotlarmiz." },
    { ar: "تَعِيشُ دَاخِلَ الْأَجْهِزَةِ", uz: "Qurilmalar ichida yashaymiz." },
    { ar: "وَتَقُومُ بِرِعَايَتِهَا", uz: "Ularga g'amxo'rlik qilamiz." },
    { ar: "وَإِصْلَاحِهَا", uz: "Tuzatamiz." },
    { ar: "وَتَنْظِيفِهَا", uz: "Tozalaymiz." },
    { ar: "ثُمَّ تَزْيِيتِهَا", uz: "So'ng moylaymiz." }
  ],
  full_uz: "Biz qurilmalar ichida yashaydigan kichkina mavjudotlarmiz. Ularga g'amxo'rlik qilamiz, ularni tuzatamiz, tozalaymiz va keyin moylaymiz.",
  note: "تَزْيِيتٌ — moylash."
},

{
  num: 39,
  time: "00:03:15,159 --> 00:03:16,879",
  arabic: "الْبَشَرُ لَا يَعْرِفُونَنَا",
  segs: [
    { ar: "الْبَشَرُ", uz: "Odamlar" },
    { ar: "لَا يَعْرِفُونَنَا", uz: "bizni tanimaydilar" }
  ],
  full_uz: "Odamlar bizni tanimaydilar.",
  note: null
},

{
  num: 40,
  time: "00:03:16,879 --> 00:03:22,560",
  arabic: "يَظُنُّونَ أَنَّهُ إِذَا تَعَطَّلَ جِهَازٌ مَا وَعَادَ إِلَى الْعَمَلِ فَقَدْ حَدَثَ هَذَا مُصَادَفَةً",
  segs: [
    { ar: "يَظُنُّونَ", uz: "Ular o'ylashadi" },
    { ar: "أَنَّهُ", uz: "ki" },
    { ar: "إِذَا تَعَطَّلَ جِهَازٌ مَا", uz: "biror qurilma buzilib" },
    { ar: "وَعَادَ إِلَى الْعَمَلِ", uz: "yana ishlab qolsa" },
    { ar: "فَقَدْ حَدَثَ هَذَا مُصَادَفَةً", uz: "bu tasodifan bo'ldi deb" }
  ],
  full_uz: "Ular biror qurilma buzilib yana ishlab qolsa, bu tasodifan bo'ldi deb o'ylashadi.",
  note: "مُصَادَفَةً — tasodifan."
},
{
  num: 41,
  time: "00:03:22,560 --> 00:03:25,640",
  arabic: "وَفِي الْحَقِيقَةِ لَا شَيْءَ يَحْدُثُ بِلَا سَبَبٍ",
  segs: [
    { ar: "وَفِي الْحَقِيقَةِ", uz: "Aslida esa" },
    { ar: "لَا شَيْءَ", uz: "hech narsa" },
    { ar: "يَحْدُثُ", uz: "sodir bo'lmaydi" },
    { ar: "بِلَا سَبَبٍ", uz: "sababsiz" }
  ],
  full_uz: "Aslida esa hech narsa sababsiz sodir bo'lmaydi.",
  note: "بِلَا سَبَبٍ — sababsiz."
},

{
  num: 42,
  time: "00:03:25,640 --> 00:03:27,200",
  arabic: "يَحْدُثُ لِأَنَّنَا هُنَا",
  segs: [
    { ar: "يَحْدُثُ", uz: "Bu sodir bo'ladi" },
    { ar: "لِأَنَّنَا", uz: "chunki biz" },
    { ar: "هُنَا", uz: "shu yerdamiz" }
  ],
  full_uz: "Bu biz shu yerda bo'lganimiz uchun sodir bo'ladi.",
  note: null
},

{
  num: 43,
  time: "00:03:27,199 --> 00:03:29,539",
  arabic: "الْفِيكْسِيزْ نَعِيشُ فِي دَاخِلِهَا",
  segs: [
    { ar: "الْفِيكْسِيزْ", uz: "Biz fiksilar" },
    { ar: "نَعِيشُ", uz: "yashaymiz" },
    { ar: "فِي دَاخِلِهَا", uz: "uning ichida" }
  ],
  full_uz: "Biz fiksilar uning ichida yashaymiz.",
  note: null
},

{
  num: 44,
  time: "00:03:29,539 --> 00:03:31,459",
  arabic: "أَجَلْ، لَوْلَا الْفِيكْسِيزْ",
  segs: [
    { ar: "أَجَلْ", uz: "Ha" },
    { ar: "لَوْلَا الْفِيكْسِيزْ", uz: "agar fiksilar bo'lmaganida" }
  ],
  full_uz: "Ha, agar fiksilar bo'lmaganida...",
  note: "لَوْلَا — agar ... bo'lmaganida."
},

{
  num: 45,
  time: "00:03:31,459 --> 00:03:34,919",
  arabic: "لَوَاجَهَ الْبَشَرُ كَثِيرًا مِنَ الْمُشْكِلَاتِ مَعَ آلَاتِهِمْ",
  segs: [
    { ar: "لَوَاجَهَ الْبَشَرُ", uz: "odamlar duch kelishardi" },
    { ar: "كَثِيرًا مِنَ الْمُشْكِلَاتِ", uz: "ko'plab muammolarga" },
    { ar: "مَعَ آلَاتِهِمْ", uz: "o'z qurilmalari bilan" }
  ],
  full_uz: "Odamlar o'z qurilmalari bilan juda ko'p muammolarga duch kelishardi.",
  note: "وَاجَهَ — duch kelmoq."
},

{
  num: 46,
  time: "00:03:34,919 --> 00:03:38,139",
  arabic: "هَذَا رَائِعٌ",
  segs: [
    { ar: "هَذَا", uz: "Bu" },
    { ar: "رَائِعٌ", uz: "ajoyib" }
  ],
  full_uz: "Bu ajoyib!",
  note: null
},

{
  num: 47,
  time: "00:03:38,139 --> 00:03:39,919",
  arabic: "وَمَا اسْمُكُمَا؟",
  segs: [
    { ar: "وَمَا", uz: "Xo'sh" },
    { ar: "اسْمُكُمَا", uz: "ismlaringiz nima" }
  ],
  full_uz: "Xo'sh, ismlaringiz nima?",
  note: null
},

{
  num: 48,
  time: "00:03:39,919 --> 00:03:42,699",
  arabic: "سُؤَالُكَ هَذَا هُوَ السُّؤَالُ الثَّالِثُ",
  segs: [
    { ar: "سُؤَالُكَ هَذَا", uz: "Bu savoling" },
    { ar: "هُوَ", uz: "esa" },
    { ar: "السُّؤَالُ الثَّالِثُ", uz: "uchinchi savol" }
  ],
  full_uz: "Bu esa uchinchi savoling.",
  note: null
},

{
  num: 49,
  time: "00:03:42,699 --> 00:03:49,500",
  arabic: "اسْمِي هُوَ نُولِكُ",
  segs: [
    { ar: "اسْمِي", uz: "Mening ismim" },
    { ar: "هُوَ", uz: "" },
    { ar: "نُولِكُ", uz: "Nolik" }
  ],
  full_uz: "Mening ismim Nolik.",
  note: null
},

{
  num: 50,
  time: "00:03:49,500 --> 00:03:50,719",
  arabic: "وَاسْمُهَا سِيمْكَا",
  segs: [
    { ar: "وَاسْمُهَا", uz: "Uning ismi esa" },
    { ar: "سِيمْكَا", uz: "Simka" }
  ],
  full_uz: "Uning ismi esa Simka.",
  note: null
},
{
  num: 51,
  time: "00:03:50,719 --> 00:03:52,759",
  arabic: "وَأَنَا اسْمِي تُومُ",
  segs: [
    { ar: "وَأَنَا", uz: "Men esa" },
    { ar: "اسْمِي", uz: "ismim" },
    { ar: "تُومُ", uz: "Tom" }
  ],
  full_uz: "Men esa Tomman.",
  note: null
},

{
  num: 52,
  time: "00:03:52,759 --> 00:03:54,879",
  arabic: "هَلْ سَتَعُودَانِ ثَانِيَةً؟",
  segs: [
    { ar: "هَلْ", uz: "Sizlar" },
    { ar: "سَتَعُودَانِ", uz: "yana qaytasizlarmi" },
    { ar: "ثَانِيَةً", uz: "keyinroq" }
  ],
  full_uz: "Yana qaytasizlarmi?",
  note: null
},

{
  num: 53,
  time: "00:03:54,879 --> 00:03:56,759",
  arabic: "حَسَنًا",
  segs: [
    { ar: "حَسَنًا", uz: "Mayli." }
  ],
  full_uz: "Mayli.",
  note: null
},

{
  num: 54,
  time: "00:03:57,199 --> 00:04:03,399",
  arabic: "مَاذَا أَفْعَلُ؟ لَقَدْ كُنْتُ عَلَى وَشْكِ أَنْ أُصْبِحَ أَوَّلَ طِفْلٍ فِي الْعَالَمِ يُصَادِقُ الْفِيكْسِيزْ",
  segs: [
    { ar: "مَاذَا أَفْعَلُ", uz: "Nima qilay?" },
    { ar: "لَقَدْ كُنْتُ عَلَى وَشْكِ", uz: "Men sal qolsa" },
    { ar: "أَنْ أُصْبِحَ", uz: "aylanardim" },
    { ar: "أَوَّلَ طِفْلٍ فِي الْعَالَمِ", uz: "dunyodagi birinchi bolaga" },
    { ar: "يُصَادِقُ الْفِيكْسِيزْ", uz: "fiksilar bilan do'stlashgan" }
  ],
  full_uz: "Nima qilay? Sal qolsa dunyoda fiksilar bilan do'stlashgan birinchi bolaga aylanardim.",
  note: "عَلَى وَشْكِ — sal qolmoq, arafasida bo'lmoq."
},

{
  num: 55,
  time: "00:04:03,399 --> 00:04:08,259",
  arabic: "وَقْتَهَا ظَنَنْتُ أَنَّكُمَا لَنْ تَعُودَا ثَانِيَةً",
  segs: [
    { ar: "وَقْتَهَا", uz: "O'shanda" },
    { ar: "ظَنَنْتُ", uz: "o'ylagandim" },
    { ar: "أَنَّكُمَا", uz: "sizlar" },
    { ar: "لَنْ تَعُودَا ثَانِيَةً", uz: "endi qaytmaysizlar deb" }
  ],
  full_uz: "O'shanda sizlar endi qaytmaysizlar deb o'ylagandim.",
  note: null
},

{
  num: 56,
  time: "00:04:08,259 --> 00:04:11,019",
  arabic: "نَحْنُ حَقًّا لَمْ نَكُنْ نُخَطِّطُ لِلْعَوْدَةِ",
  segs: [
    { ar: "نَحْنُ حَقًّا", uz: "Rostdan ham biz" },
    { ar: "لَمْ نَكُنْ نُخَطِّطُ", uz: "rejalashtirmagandik" },
    { ar: "لِلْعَوْدَةِ", uz: "qaytishni" }
  ],
  full_uz: "Rostdan ham biz qaytishni rejalashtirmagandik.",
  note: "خَطَّطَ — rejalashtirmoq."
},

{
  num: 57,
  time: "00:04:11,019 --> 00:04:14,060",
  arabic: "لَقَدْ قُلْنَا إِنَّنَا الْفِيكْسِيزُ الْوَحِيدَانِ فِي الْعَالَمِ",
  segs: [
    { ar: "لَقَدْ قُلْنَا", uz: "Biz aytdik" },
    { ar: "إِنَّنَا", uz: "biz" },
    { ar: "الْفِيكْسِيزُ الْوَحِيدَانِ", uz: "yagona ikki fiksimiz" },
    { ar: "فِي الْعَالَمِ", uz: "butun dunyoda" }
  ],
  full_uz: "Biz butun dunyodagi yagona ikki fiksimiz, degandik.",
  note: null
},

{
  num: 58,
  time: "00:04:14,060 --> 00:04:17,019",
  arabic: "اللَّذَانِ يُصَادِقَانِ الْفَتَى الْوَحِيدَ فِي الْعَالَمِ",
  segs: [
    { ar: "اللَّذَانِ", uz: "ular" },
    { ar: "يُصَادِقَانِ", uz: "do'stlashgan" },
    { ar: "الْفَتَى الْوَحِيدَ", uz: "yagona bola bilan" },
    { ar: "فِي الْعَالَمِ", uz: "butun dunyoda" }
  ],
  full_uz: "Butun dunyodagi yagona bola bilan do'stlashgan ikki fiksi.",
  note: null
},

{
  num: 59,
  time: "00:04:17,019 --> 00:04:18,659",
  arabic: "وَالَّذِي صَادَقَ الْفِيكْسِيزْ",
  segs: [
    { ar: "وَالَّذِي", uz: "u esa" },
    { ar: "صَادَقَ", uz: "do'stlashgan" },
    { ar: "الْفِيكْسِيزْ", uz: "fiksilar bilan" }
  ],
  full_uz: "U esa fiksilar bilan do'stlashgan bola.",
  note: null
},

{
  num: 60,
  time: "00:04:18,659 --> 00:04:22,500",
  arabic: "وَالَّذِي لَمْ يُخْبِرْ أَحَدًا عَنَّا",
  segs: [
    { ar: "وَالَّذِي", uz: "va u" },
    { ar: "لَمْ يُخْبِرْ أَحَدًا", uz: "hech kimga aytmagan" },
    { ar: "عَنَّا", uz: "biz haqimizda" }
  ],
  full_uz: "Va biz haqimizda hech kimga aytmagan.",
  note: null
},
{
  num: 61,
  time: "00:04:22,500 --> 00:04:28,360",
  arabic: "يَفْعَلُ الْفِيكْسِيزْ كُلَّ مَا فِي وُسْعِهِمْ لِيَخْتَبِئُوا مِنَ الْبَشَرِ",
  segs: [
    { ar: "يَفْعَلُ الْفِيكْسِيزْ", uz: "Fiksilar" },
    { ar: "كُلَّ مَا فِي وُسْعِهِمْ", uz: "qo'llaridan kelgan hamma ishni qiladilar" },
    { ar: "لِيَخْتَبِئُوا", uz: "yashirinish uchun" },
    { ar: "مِنَ الْبَشَرِ", uz: "odamlardan" }
  ],
  full_uz: "Fiksilar odamlardan yashirinish uchun qo'llaridan kelgan hamma ishni qiladilar.",
  note: "فِي وُسْعِهِ — qo'lidan kelmoq."
},

{
  num: 62,
  time: "00:04:28,360 --> 00:04:36,399",
  arabic: "إِنَّهُمْ يَخَافُونَ إِنِ اكْتَشَفَ الْبَشَرُ أَمْرَهُمْ أَنْ يَبْدَؤُوا بِمُلَاحَقَتِهِمْ وَصَيْدِهِمْ وَوَضْعِهِمْ فِي أَقْفَاصٍ كَالْحَيَوَانَاتِ الْأَلِيفَةِ",
  segs: [
    { ar: "إِنَّهُمْ يَخَافُونَ", uz: "Ular qo'rqadilar" },
    { ar: "إِنِ اكْتَشَفَ الْبَشَرُ أَمْرَهُمْ", uz: "agar odamlar ularning sirini bilib qolsa" },
    { ar: "أَنْ يَبْدَؤُوا بِمُلَاحَقَتِهِمْ", uz: "ularni quvishni boshlashidan" },
    { ar: "وَصَيْدِهِمْ", uz: "ovlashidan" },
    { ar: "وَوَضْعِهِمْ فِي أَقْفَاصٍ", uz: "qafaslarga qamashidan" },
    { ar: "كَالْحَيَوَانَاتِ الْأَلِيفَةِ", uz: "uy hayvonlari kabi" }
  ],
  full_uz: "Ular odamlar sirlarini bilib qolib, ularni quvishi, ovlashi va uy hayvonlari kabi qafaslarga qamashidan qo'rqadilar.",
  note: "مُلَاحَقَةٌ — ta'qib qilish."
},

{
  num: 63,
  time: "00:04:36,399 --> 00:04:42,279",
  arabic: "وَالْأَسْوَأُ مِنْ هَذَا قَدْ يَأْخُذُونَهُمْ إِلَى مُخْتَبَرَاتِهِمْ وَيَبْدَؤُونَ بِفَحْصِهِمْ تَحْتَ الْمِجْهَرِ",
  segs: [
    { ar: "وَالْأَسْوَأُ مِنْ هَذَا", uz: "Bundan ham yomoni" },
    { ar: "قَدْ يَأْخُذُونَهُمْ", uz: "ularni olib ketishlari mumkin" },
    { ar: "إِلَى مُخْتَبَرَاتِهِمْ", uz: "laboratoriyalariga" },
    { ar: "وَيَبْدَؤُونَ بِفَحْصِهِمْ", uz: "tekshirishni boshlaydilar" },
    { ar: "تَحْتَ الْمِجْهَرِ", uz: "mikroskop ostida" }
  ],
  full_uz: "Bundan ham yomoni, ularni laboratoriyalariga olib ketib, mikroskop ostida tekshirishni boshlashlari mumkin.",
  note: "الْمِجْهَرُ — mikroskop."
},

{
  num: 64,
  time: "00:04:42,279 --> 00:04:45,279",
  arabic: "أَوْ حَتَّى قَدْ يُجْرُونَ بَعْضَ التَّجَارِبِ الْعِلْمِيَّةِ عَلَيْهِمْ",
  segs: [
    { ar: "أَوْ حَتَّى", uz: "Hatto" },
    { ar: "قَدْ يُجْرُونَ", uz: "o'tkazishlari mumkin" },
    { ar: "بَعْضَ التَّجَارِبِ الْعِلْمِيَّةِ", uz: "ba'zi ilmiy tajribalarni" },
    { ar: "عَلَيْهِمْ", uz: "ular ustida" }
  ],
  full_uz: "Hatto ular ustida ilmiy tajribalar ham o'tkazishlari mumkin.",
  note: "تَجْرِبَةٌ — tajriba."
},

{
  num: 65,
  time: "00:04:45,279 --> 00:04:48,600",
  arabic: "افْتَرِضْ أَنَّ الْبَشَرَ سَيَظُنُّونَ أَنَّنَا سَنَعْمَلُ عَنْهُمْ",
  segs: [
    { ar: "افْتَرِضْ", uz: "Tasavvur qil" },
    { ar: "أَنَّ الْبَشَرَ", uz: "odamlar" },
    { ar: "سَيَظُنُّونَ", uz: "o'ylashadi" },
    { ar: "أَنَّنَا", uz: "biz" },
    { ar: "سَنَعْمَلُ عَنْهُمْ", uz: "ularning o'rniga ishlaymiz deb" }
  ],
  full_uz: "Tasavvur qil, odamlar biz ular o'rniga ishlaymiz deb o'ylashadi.",
  note: null
},

{
  num: 66,
  time: "00:04:48,600 --> 00:04:53,100",
  arabic: "فَيُقَرِّرُونَ أَنَّهُمْ لَا يَحْتَاجُونَ إِلَى الِاهْتِمَامِ بِأَجْهِزَتِهِمْ بَعْدَ الْآنَ",
  segs: [
    { ar: "فَيُقَرِّرُونَ", uz: "Shunda qaror qilishadi" },
    { ar: "أَنَّهُمْ لَا يَحْتَاجُونَ", uz: "endi kerak emas deb" },
    { ar: "إِلَى الِاهْتِمَامِ", uz: "g'amxo'rlik qilish" },
    { ar: "بِأَجْهِزَتِهِمْ", uz: "qurilmalariga" },
    { ar: "بَعْدَ الْآنَ", uz: "bundan keyin" }
  ],
  full_uz: "Shunda ular endi qurilmalariga g'amxo'rlik qilishning keragi yo'q, deb qaror qilishadi.",
  note: "الِاهْتِمَامُ — g'amxo'rlik, e'tibor."
},

{
  num: 67,
  time: "00:04:53,100 --> 00:04:59,780",
  arabic: "فِي رَأْيِكُمْ مَاذَا سَيَحْدُثُ إِذَا قَرَّرَ الْبَشَرُ أَنَّهُمْ لَنْ يُنَظِّفُوا أَجْهِزَتَهُمْ أَوْ يُصْلِحُوهَا؟",
  segs: [
    { ar: "فِي رَأْيِكُمْ", uz: "Sizningcha" },
    { ar: "مَاذَا سَيَحْدُثُ", uz: "nima bo'ladi" },
    { ar: "إِذَا قَرَّرَ الْبَشَرُ", uz: "agar odamlar qaror qilishsa" },
    { ar: "أَنَّهُمْ لَنْ يُنَظِّفُوا أَجْهِزَتَهُمْ", uz: "qurilmalarini tozalamaslikka" },
    { ar: "أَوْ يُصْلِحُوهَا", uz: "yoki tuzatmaslikka" }
  ],
  full_uz: "Sizningcha, agar odamlar qurilmalarini tozalamaslikka yoki tuzatmaslikka qaror qilishsa, nima bo'ladi?",
  note: null
},

{
  num: 68,
  time: "00:04:59,780 --> 00:05:04,720",
  arabic: "عِنْدَهَا حَتَّى الْفِيكْسِيزْ لَنْ يَسْتَطِيعُوا إِصْلَاحَ الْأَجْهِزَةِ مَهْمَا حَاوَلُوا",
  segs: [
    { ar: "عِنْدَهَا", uz: "Unda" },
    { ar: "حَتَّى الْفِيكْسِيزْ", uz: "hatto fiksilar ham" },
    { ar: "لَنْ يَسْتَطِيعُوا", uz: "qila olmaydilar" },
    { ar: "إِصْلَاحَ الْأَجْهِزَةِ", uz: "qurilmalarni tuzatishni" },
    { ar: "مَهْمَا حَاوَلُوا", uz: "qancha urinmasinlar" }
  ],
  full_uz: "Unda hatto fiksilar ham qancha urinmasinlar, qurilmalarni tuzata olmaydilar.",
  note: "مَهْمَا — qancha ...masin."
},

{
  num: 69,
  time: "00:05:04,720 --> 00:05:08,640",
  arabic: "لِهَذَا يَتَّخِذُ الْفِيكْسِيزْ خِيَارًا ذَكِيًّا وَيَخْتَبِئُونَ مِنَ الْبَشَرِ",
  segs: [
    { ar: "لِهَذَا", uz: "Shuning uchun" },
    { ar: "يَتَّخِذُ الْفِيكْسِيزْ", uz: "fiksilar tanlaydilar" },
    { ar: "خِيَارًا ذَكِيًّا", uz: "aqlli yo'lni" },
    { ar: "وَيَخْتَبِئُونَ", uz: "va yashirinadilar" },
    { ar: "مِنَ الْبَشَرِ", uz: "odamlardan" }
  ],
  full_uz: "Shuning uchun fiksilar aqlli yo'lni tanlaydilar va odamlardan yashirinadilar.",
  note: null
},

{
  num: 70,
  time: "00:05:08,640 --> 00:05:13,240",
  arabic: "انْظُرُوا إِلَى هَؤُلَاءِ الْفِيكْسِيزْ كَيْفَ يَخْتَبِئُونَ",
  segs: [
    { ar: "انْظُرُوا", uz: "Qaranglar" },
    { ar: "إِلَى هَؤُلَاءِ الْفِيكْسِيزْ", uz: "mana bu fiksilarga" },
    { ar: "كَيْفَ يَخْتَبِئُونَ", uz: "qanday yashirinayotganiga" }
  ],
  full_uz: "Qaranglar, mana bu fiksilar qanday yashirinayotganiga.",
  note: null
},
{
  num: 71,
  time: "00:05:13,240 --> 00:05:19,000",
  arabic: "حَسَنًا سَأَكْتُبُ عَنْ شَخْصٍ آخَرَ",
  segs: [
    { ar: "حَسَنًا", uz: "Mayli" },
    { ar: "سَأَكْتُبُ", uz: "yozaman" },
    { ar: "عَنْ شَخْصٍ آخَرَ", uz: "boshqa bir odam haqida" }
  ],
  full_uz: "Mayli, boshqa bir odam haqida yozaman.",
  note: null
},

{
  num: 72,
  time: "00:05:19,000 --> 00:05:26,100",
  arabic: "لَدَيَّ أَفْضَلُ صَدِيقٍ فِي الْعَالَمِ",
  segs: [
    { ar: "لَدَيَّ", uz: "Menda bor" },
    { ar: "أَفْضَلُ صَدِيقٍ", uz: "eng yaxshi do'st" },
    { ar: "فِي الْعَالَمِ", uz: "butun dunyoda" }
  ],
  full_uz: "Mening butun dunyodagi eng yaxshi do'stim bor.",
  note: null
},

{
  num: 73,
  time: "00:05:26,100 --> 00:05:28,420",
  arabic: "نُقْطَةٌ",
  segs: [
    { ar: "نُقْطَةٌ", uz: "Nuqta." }
  ],
  full_uz: "Nuqta.",
  note: null
},

{
  num: 74,
  time: "00:05:28,420 --> 00:05:31,780",
  arabic: "عِنْدَمَا يَتَعَطَّلُ شَيْءٌ مَا يُصْلِحُهُ",
  segs: [
    { ar: "عِنْدَمَا", uz: "Qachonki" },
    { ar: "يَتَعَطَّلُ شَيْءٌ مَا", uz: "biror narsa buzilsa" },
    { ar: "يُصْلِحُهُ", uz: "uni tuzatadi" }
  ],
  full_uz: "Biror narsa buzilsa, uni tuzatadi.",
  note: null
},

{
  num: 75,
  time: "00:05:31,780 --> 00:05:34,639",
  arabic: "إِنَّهُ صَدِيقِي الْأَفْضَلُ نُولَانْ",
  segs: [
    { ar: "إِنَّهُ", uz: "U" },
    { ar: "صَدِيقِي الْأَفْضَلُ", uz: "mening eng yaxshi do'stim" },
    { ar: "نُولَانْ", uz: "Nolan" }
  ],
  full_uz: "U mening eng yaxshi do'stim Nolan.",
  note: null
},

{
  num: 76,
  time: "00:05:34,639 --> 00:05:38,620",
  arabic: "صَدِيقِي الْأَفْضَلُ نُولِكُ",
  segs: [
    { ar: "صَدِيقِي الْأَفْضَلُ", uz: "Mening eng yaxshi do'stim" },
    { ar: "نُولِكُ", uz: "Nolik" }
  ],
  full_uz: "Mening eng yaxshi do'stim Nolik.",
  note: null
}
];
if (typeof module !== "undefined" && module.exports) {
  module.exports = lessons;
}