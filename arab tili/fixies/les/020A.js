const lessons = [
    {
  num:1,
  time:"00:00:49,100 --> 00:00:50,120",
  arabic:"مَرْحَبًا يَا تُومْ.",
  segs:[
    { ar:"مَرْحَبًا", uz:"Salom." },
    { ar:"يَا تُومْ", uz:"Ey Tom." }
  ],
  full_uz:"Salom, Tom.",
  note:null
},

{
  num:2,
  time:"00:00:50,120 --> 00:00:52,760",
  arabic:"سِيمْكَا، نُولِكْ، لَدَيَّ مُشْكِلَةٌ.",
  segs:[
    { ar:"سِيمْكَا، نُولِكْ", uz:"Simka, Nolik." },
    { ar:"لَدَيَّ", uz:"Menda." },
    { ar:"مُشْكِلَةٌ", uz:"Muammo bor." }
  ],
  full_uz:"Simka, Nolik, menda muammo bor.",
  note:null
},

{
  num:3,
  time:"00:00:52,760 --> 00:00:55,240",
  arabic:"آسِفٌ، لَا وَقْتَ لِلَّعِبِ، نَحْنُ مَشْغُولَانِ.",
  segs:[
    { ar:"آسِفٌ", uz:"Kechirasan." },
    { ar:"لَا وَقْتَ لِلَّعِبِ", uz:"O'ynashga vaqt yo'q." },
    { ar:"نَحْنُ مَشْغُولَانِ", uz:"Biz bandmiz." }
  ],
  full_uz:"Kechirasan, o'ynashga vaqt yo'q, biz bandmiz.",
  note:null
},

{
  num:4,
  time:"00:00:55,240 --> 00:00:56,840",
  arabic:"مَشْغُولَانِ؟ بِمَاذَا؟",
  segs:[
    { ar:"مَشْغُولَانِ", uz:"Bandmisizlar?" },
    { ar:"بِمَاذَا", uz:"Nima bilan?" }
  ],
  full_uz:"Bandmisizlar? Nima bilan?",
  note:null
},

{
  num:5,
  time:"00:00:56,840 --> 00:00:58,840",
  arabic:"نَحْنُ مَسْؤُولَانِ عَنِ الْمَنْزِلِ الْيَوْمَ.",
  segs:[
    { ar:"نَحْنُ", uz:"Biz." },
    { ar:"مَسْؤُولَانِ", uz:"Mas'ulmiz." },
    { ar:"عَنِ الْمَنْزِلِ", uz:"Uy uchun." },
    { ar:"الْيَوْمَ", uz:"Bugun." }
  ],
  full_uz:"Bugun uy uchun biz mas'ulmiz.",
  note:null
},

{
  num:6,
  time:"00:00:58,840 --> 00:01:01,340",
  arabic:"وَنَحْنُ نَسْتَعْمِلُ حَقِيبَةَ الْأَدَوَاتِ.",
  segs:[
    { ar:"وَنَحْنُ", uz:"Biz esa." },
    { ar:"نَسْتَعْمِلُ", uz:"Ishlatyapmiz." },
    { ar:"حَقِيبَةَ الْأَدَوَاتِ", uz:"Asboblar qutisini." }
  ],
  full_uz:"Biz asboblar qutisidan foydalanyapmiz.",
  note:null
},

{
  num:7,
  time:"00:01:01,340 --> 00:01:04,000",
  arabic:"بَابُوسْ وَمَاسْيَا يَزُورَانِ أَصْدِقَاءَنَا الْفِيكْسِيز.",
  segs:[
    { ar:"بَابُوسْ وَمَاسْيَا", uz:"Papus va Masya." },
    { ar:"يَزُورَانِ", uz:"Mehmonga ketishgan." },
    { ar:"أَصْدِقَاءَنَا الْفِيكْسِيز", uz:"Fiksi do'stlarimiznikiga." }
  ],
  full_uz:"Papus bilan Masya fiksi do'stlarimiznikiga mehmonga ketishgan.",
  note:null
},

{
  num:8,
  time:"00:01:04,000 --> 00:01:07,280",
  arabic:"لَقَدْ كَانُوا مَعَ بَابُوسْ فِي مَرْكَزِ الْفَضَاءِ قَبْلَ السَّنَوَاتِ.",
  segs:[
    { ar:"لَقَدْ كَانُوا", uz:"Ular bo'lishgan." },
    { ar:"مَعَ بَابُوسْ", uz:"Papus bilan." },
    { ar:"فِي مَرْكَزِ الْفَضَاءِ", uz:"Kosmik markazda." },
    { ar:"قَبْلَ السَّنَوَاتِ", uz:"Bir necha yil oldin." }
  ],
  full_uz:"Ular bir necha yil oldin Papus bilan kosmik markazda bo'lishgan.",
  note:null
},

{
  num:9,
  time:"00:01:07,280 --> 00:01:13,380",
  arabic:"مُنْذُ كَانَ صَبِيًّا كَانَ بَابُوسْ يَحْلُمُ بِالذَّهَابِ إِلَى الْفَضَاءِ.",
  segs:[
    { ar:"مُنْذُ كَانَ صَبِيًّا", uz:"Yoshligidan beri." },
    { ar:"كَانَ بَابُوسْ يَحْلُمُ", uz:"Papus orzu qilardi." },
    { ar:"بِالذَّهَابِ إِلَى الْفَضَاءِ", uz:"Koinotga borishni." }
  ],
  full_uz:"Papus bolaligidan koinotga borishni orzu qilgan.",
  note:null
},

{
  num:10,
  time:"00:01:13,380 --> 00:01:17,260",
  arabic:"وَلِمَ لَا؟ فَالْفِيكْسِيزُ يَعْمَلُونَ فِي الصَّوَارِيخِ أَيْضًا.",
  segs:[
    { ar:"وَلِمَ لَا", uz:"Nega ham bo'lmasin?" },
    { ar:"فَالْفِيكْسِيزُ", uz:"Axir fiksilar." },
    { ar:"يَعْمَلُونَ", uz:"Ishlaydilar." },
    { ar:"فِي الصَّوَارِيخِ أَيْضًا", uz:"Raketalarda ham." }
  ],
  full_uz:"Nega ham bo'lmasin? Axir fiksilar raketalarda ham ishlashadi.",
  note:null
},
{
  num:11,
  time:"00:01:17,260 --> 00:01:19,560",
  arabic:"لَقَدْ عَمِلَ فِي مَرْكَزِ تَدْرِيبِ رُوَّادِ الْفَضَاءِ.",
  segs:[
    { ar:"لَقَدْ عَمِلَ", uz:"U ishlagan." },
    { ar:"فِي مَرْكَزِ تَدْرِيبِ", uz:"Tayyorgarlik markazida." },
    { ar:"رُوَّادِ الْفَضَاءِ", uz:"Kosmonavtlar uchun." }
  ],
  full_uz:"U kosmonavtlarni tayyorlash markazida ishlagan.",
  note:null
},

{
  num:12,
  time:"00:01:19,560 --> 00:01:22,080",
  arabic:"مَسْؤُولًا عَنِ الْآلَةِ النَّابِذَةِ الدَّوَّارَةِ.",
  segs:[
    { ar:"مَسْؤُولًا", uz:"Mas'ul bo'lib." },
    { ar:"عَنِ الْآلَةِ النَّابِذَةِ الدَّوَّارَةِ", uz:"Aylanuvchi sentrifuga qurilmasiga." }
  ],
  full_uz:"U aylanuvchi sentrifuga qurilmasi uchun mas'ul bo'lgan.",
  note:"الآلة النابذة الدوارة — kosmonavtlarni tayyorlashda ishlatiladigan sentrifuga."
},

{
  num:13,
  time:"00:01:22,080 --> 00:01:25,200",
  arabic:"وَبَذَلَ جَهْدَهُ لِتَعْمَلَ عَمَلًا مِثَالِيًّا.",
  segs:[
    { ar:"وَبَذَلَ جَهْدَهُ", uz:"Bor kuchini sarflagan." },
    { ar:"لِتَعْمَلَ", uz:"Ishlashi uchun." },
    { ar:"عَمَلًا مِثَالِيًّا", uz:"Mukammal tarzda." }
  ],
  full_uz:"Qurilma mukammal ishlashi uchun bor kuchini sarflagan.",
  note:null
},

{
  num:14,
  time:"00:01:25,200 --> 00:01:29,280",
  arabic:"الْآلَةُ النَّابِذَةُ هِيَ عَرَبَةٌ دَوَّارَةٌ سَرِيعَةٌ جِدًّا لِتَدْرِيبِ الرُّوَّادِ.",
  segs:[
    { ar:"الْآلَةُ النَّابِذَةُ", uz:"Sentrifuga." },
    { ar:"هِيَ عَرَبَةٌ دَوَّارَةٌ", uz:"Aylanuvchi kabinadir." },
    { ar:"سَرِيعَةٌ جِدًّا", uz:"Juda tez aylanadigan." },
    { ar:"لِتَدْرِيبِ الرُّوَّادِ", uz:"Kosmonavtlarni tayyorlash uchun." }
  ],
  full_uz:"Sentrifuga — kosmonavtlarni tayyorlash uchun mo'ljallangan juda tez aylanuvchi kabinadir.",
  note:null
},

{
  num:15,
  time:"00:01:29,280 --> 00:01:32,120",
  arabic:"وَبَابُوسْ تَدَرَّبَ دَاخِلَهَا أَيْضًا.",
  segs:[
    { ar:"وَبَابُوسْ", uz:"Papus ham." },
    { ar:"تَدَرَّبَ", uz:"Mashq qilgan." },
    { ar:"دَاخِلَهَا أَيْضًا", uz:"Uning ichida." }
  ],
  full_uz:"Papus ham uning ichida mashq qilgan.",
  note:null
},

{
  num:16,
  time:"00:01:32,120 --> 00:01:35,820",
  arabic:"لَكِنَّهُ لَمْ يَكُنْ يَعْلَمُ أَنَّ مَوْعِدَ إِطْلَاقِ الصَّارُوخِ كَانَ فِي يَوْمِ عُطْلَتِهِ.",
  segs:[
    { ar:"لَكِنَّهُ لَمْ يَكُنْ يَعْلَمُ", uz:"Ammo u bilmagan." },
    { ar:"أَنَّ مَوْعِدَ إِطْلَاقِ الصَّارُوخِ", uz:"Raketa uchirilish vaqti." },
    { ar:"كَانَ فِي يَوْمِ عُطْلَتِهِ", uz:"Dam olish kuniga to'g'ri kelganini." }
  ],
  full_uz:"Ammo u raketa uchiriladigan kun uning dam olish kuniga to'g'ri kelganini bilmagan.",
  note:null
},

{
  num:17,
  time:"00:01:35,820 --> 00:01:40,780",
  arabic:"وَعِنْدَمَا عَلِمَ بِذَلِكَ كَانَ الْوَقْتُ قَدْ تَأَخَّرَ وَانْطَلَقَ الصَّارُوخُ وَتَرَكَهُ.",
  segs:[
    { ar:"وَعِنْدَمَا عَلِمَ بِذَلِكَ", uz:"Buni bilganda." },
    { ar:"كَانَ الْوَقْتُ قَدْ تَأَخَّرَ", uz:"Kech bo'lib qolgan edi." },
    { ar:"وَانْطَلَقَ الصَّارُوخُ", uz:"Raketa uchib ketgan edi." },
    { ar:"وَتَرَكَهُ", uz:"Uni qoldirib." }
  ],
  full_uz:"Buni bilganda kech bo'lib qolgan, raketa uchib ketib uni qoldirib ketgan edi.",
  note:null
},

{
  num:18,
  time:"00:01:40,780 --> 00:01:43,859",
  arabic:"وَمُنْذُ ذَلِكَ الْوَقْتِ صَارَ يَكْرَهُ أَيَّامَ عُطْلَتِهِ.",
  segs:[
    { ar:"وَمُنْذُ ذَلِكَ الْوَقْتِ", uz:"O'sha vaqtdan beri." },
    { ar:"صَارَ يَكْرَهُ", uz:"Yomon ko'radigan bo'ldi." },
    { ar:"أَيَّامَ عُطْلَتِهِ", uz:"Dam olish kunlarini." }
  ],
  full_uz:"O'sha vaqtdan beri u dam olish kunlarini yoqtirmay qolgan.",
  note:null
},

{
  num:19,
  time:"00:01:43,859 --> 00:01:47,920",
  arabic:"لَكِنَّهُ لَا يَزَالُ يَرْغَبُ فِي إِصْلَاحِ كُلِّ مَا يُشْبِهُ الْآلَةَ النَّابِذَةَ.",
  segs:[
    { ar:"لَكِنَّهُ لَا يَزَالُ", uz:"Ammo u hali ham." },
    { ar:"يَرْغَبُ فِي إِصْلَاحِ", uz:"Tuzatishni xohlaydi." },
    { ar:"كُلِّ مَا يُشْبِهُ الْآلَةَ النَّابِذَةَ", uz:"Sentrifugaga o'xshash hamma narsani." }
  ],
  full_uz:"Ammo u hanuz sentrifugaga o'xshash barcha narsalarni tuzatishni yaxshi ko'radi.",
  note:null
},

{
  num:20,
  time:"00:01:47,920 --> 00:01:50,840",
  arabic:"وَكُلَّ الْأَشْيَاءِ الَّتِي تَدُورُ، كَالْغَسَّالَةِ.",
  segs:[
    { ar:"وَكُلَّ الْأَشْيَاءِ الَّتِي تَدُورُ", uz:"Umuman aylanuvchi barcha narsalarni." },
    { ar:"كَالْغَسَّالَةِ", uz:"Masalan, kir yuvish mashinasini." }
  ],
  full_uz:"Shuningdek, kir yuvish mashinasi kabi aylanuvchi barcha qurilmalarni ham.",
  note:null
},
{
  num:21,
  time:"00:01:50,840 --> 00:01:55,240",
  arabic:"لِسُوءِ حَظِّ بَابُوسْ أَنَّ الْغَسَّالَةَ الَّتِي فِي بَيْتِهِ تَعْمَلُ دَوْمًا بِلَا عُطْلٍ.",
  segs:[
    { ar:"لِسُوءِ حَظِّ بَابُوسْ", uz:"Papusning omadsizligiga." },
    { ar:"أَنَّ الْغَسَّالَةَ", uz:"Kir yuvish mashinasi." },
    { ar:"الَّتِي فِي بَيْتِهِ", uz:"Uning uyidagi." },
    { ar:"تَعْمَلُ دَوْمًا بِلَا عُطْلٍ", uz:"Doimo buzilmay ishlaydi." }
  ],
  full_uz:"Papusning omadsizligiga, uning uyidagi kir yuvish mashinasi hech qachon buzilmaydi.",
  note:null
},

{
  num:22,
  time:"00:01:55,240 --> 00:02:00,900",
  arabic:"يَعْنِي أَنَّكُمْ تُصْلِحُونَ كُلَّ شَيْءٍ الْيَوْمَ؟",
  segs:[
    { ar:"يَعْنِي", uz:"Demak." },
    { ar:"أَنَّكُمْ تُصْلِحُونَ", uz:"Sizlar tuzatasizlar." },
    { ar:"كُلَّ شَيْءٍ", uz:"Hamma narsani." },
    { ar:"الْيَوْمَ", uz:"Bugun." }
  ],
  full_uz:"Demak, bugun hamma narsani tuzatyapsizlarmi?",
  note:null
},

{
  num:23,
  time:"00:02:00,900 --> 00:02:01,280",
  arabic:"أَجَلْ.",
  segs:[
    { ar:"أَجَلْ", uz:"Ha." }
  ],
  full_uz:"Ha.",
  note:null
},

{
  num:24,
  time:"00:02:01,280 --> 00:02:03,920",
  arabic:"حَسَنًا، لَقَدْ تَعَطَّلَتْ سَيَّارَتِي الْآنَ.",
  segs:[
    { ar:"حَسَنًا", uz:"Mayli." },
    { ar:"لَقَدْ تَعَطَّلَتْ", uz:"Buzilib qoldi." },
    { ar:"سَيَّارَتِي", uz:"Mening mashinam." },
    { ar:"الْآنَ", uz:"Hozir." }
  ],
  full_uz:"Mayli, unda mening mashinam hozirgina buzildi.",
  note:null
},

{
  num:25,
  time:"00:02:03,920 --> 00:02:06,680",
  arabic:"مَرْحَى، لَدَيْنَا عَمَلٌ نَقُومُ بِهِ.",
  segs:[
    { ar:"مَرْحَى", uz:"Zo'r!" },
    { ar:"لَدَيْنَا", uz:"Bizda." },
    { ar:"عَمَلٌ نَقُومُ بِهِ", uz:"Bajaradigan ish bor." }
  ],
  full_uz:"Zo'r! Bizda bajaradigan ish paydo bo'ldi.",
  note:null
},

{
  num:26,
  time:"00:02:06,680 --> 00:02:08,039",
  arabic:"هَيَّا بِنَا يَا نُولِكْ.",
  segs:[
    { ar:"هَيَّا بِنَا", uz:"Yur." },
    { ar:"يَا نُولِكْ", uz:"Nolik." }
  ],
  full_uz:"Yur, Nolik.",
  note:null
},

{
  num:27,
  time:"00:02:08,039 --> 00:02:15,900",
  arabic:"حَسَنًا، مَا الَّذِي تَعَطَّلَ هُنَا؟",
  segs:[
    { ar:"حَسَنًا", uz:"Xo'sh." },
    { ar:"مَا الَّذِي", uz:"Nima." },
    { ar:"تَعَطَّلَ هُنَا", uz:"Bu yerda buzilgan?" }
  ],
  full_uz:"Xo'sh, bu yerda nima buzilgan?",
  note:null
},

{
  num:28,
  time:"00:02:15,900 --> 00:02:17,000",
  arabic:"انْتَظِرْ لَحْظَةً.",
  segs:[
    { ar:"انْتَظِرْ", uz:"Kut." },
    { ar:"لَحْظَةً", uz:"Bir oz." }
  ],
  full_uz:"Bir daqiqa kut.",
  note:null
},

{
  num:29,
  time:"00:02:17,000 --> 00:02:21,120",
  arabic:"هُنَا، هَذَا الْجُزْءُ مُعَطَّلٌ.",
  segs:[
    { ar:"هُنَا", uz:"Mana." },
    { ar:"هَذَا الْجُزْءُ", uz:"Bu qism." },
    { ar:"مُعَطَّلٌ", uz:"Buzilgan." }
  ],
  full_uz:"Mana, bu qism buzilgan.",
  note:null
},

{
  num:30,
  time:"00:02:21,120 --> 00:02:22,699",
  arabic:"إِنَّهُ مُغَطًّى بِالسَّوَادِ.",
  segs:[
    { ar:"إِنَّهُ", uz:"U." },
    { ar:"مُغَطًّى", uz:"Qoplangan." },
    { ar:"بِالسَّوَادِ", uz:"Qora kuyik bilan." }
  ],
  full_uz:"U qora kuyik bilan qoplangan.",
  note:null
},
{
  num:31,
  time:"00:02:22,699 --> 00:02:25,780",
  arabic:"مِنْ أَيْنَ نَحْصُلُ عَلَى قِطْعَةٍ نَظِيفَةٍ بَدِيلَةٍ؟",
  segs:[
    { ar:"مِنْ أَيْنَ", uz:"Qayerdan." },
    { ar:"نَحْصُلُ عَلَى", uz:"Olamiz." },
    { ar:"قِطْعَةٍ نَظِيفَةٍ بَدِيلَةٍ", uz:"Toza almashtiruvchi detalni." }
  ],
  full_uz:"Toza almashtiruvchi detalni qayerdan olamiz?",
  note:null
},

{
  num:32,
  time:"00:02:25,780 --> 00:02:27,020",
  arabic:"نَظِيفَةٌ؟",
  segs:[
    { ar:"نَظِيفَةٌ", uz:"Tozami?" }
  ],
  full_uz:"Tozami?",
  note:null
},

{
  num:33,
  time:"00:02:27,020 --> 00:02:29,319",
  arabic:"نُولِكْ، إِنَّهَا فِكْرَةٌ.",
  segs:[
    { ar:"نُولِكْ", uz:"Nolik." },
    { ar:"إِنَّهَا", uz:"Bu." },
    { ar:"فِكْرَةٌ", uz:"Yaxshi fikr." }
  ],
  full_uz:"Nolik, bu yaxshi fikr.",
  note:null
},

{
  num:34,
  time:"00:02:29,319 --> 00:02:32,360",
  arabic:"ثَمَّتَ قِطْعَةٌ تُشْبِهُهَا فِي غَسَّالَةِ الصُّحُونِ.",
  segs:[
    { ar:"ثَمَّتَ", uz:"U yerda bor." },
    { ar:"قِطْعَةٌ تُشْبِهُهَا", uz:"Shunga o'xshash detal." },
    { ar:"فِي غَسَّالَةِ الصُّحُونِ", uz:"Idish yuvish mashinasida." }
  ],
  full_uz:"Idish yuvish mashinasida shunga o'xshash detal bor.",
  note:null
},

{
  num:35,
  time:"00:02:32,360 --> 00:02:33,920",
  arabic:"يُمْكِنُنَا أَخْذُهَا، هَيَّا.",
  segs:[
    { ar:"يُمْكِنُنَا", uz:"Biz qila olamiz." },
    { ar:"أَخْذُهَا", uz:"Uni olishni." },
    { ar:"هَيَّا", uz:"Yur." }
  ],
  full_uz:"Uni olib kelishimiz mumkin. Yur.",
  note:null
},

{
  num:36,
  time:"00:02:33,919 --> 00:02:49,339",
  arabic:"هَلْ لَدَيْكَ أَيُّ فِكْرَةٍ عَنِ اتِّصَالِ بَعْضِ هَذِهِ الْأَجْزَاءِ بِبَعْضِهَا؟",
  segs:[
    { ar:"هَلْ لَدَيْكَ", uz:"Senda bormi?" },
    { ar:"أَيُّ فِكْرَةٍ", uz:"Biror tushuncha." },
    { ar:"عَنِ اتِّصَالِ", uz:"Qanday bog'lanishi haqida." },
    { ar:"بَعْضِ هَذِهِ الْأَجْزَاءِ بِبَعْضِهَا", uz:"Bu qismlarning bir-biri bilan." }
  ],
  full_uz:"Bu qismlarning bir-biri bilan qanday bog'lanishi haqida tasavvuring bormi?",
  note:null
},

{
  num:37,
  time:"00:02:49,339 --> 00:02:50,560",
  arabic:"فِي هَذَا الشَّيْءِ تَحْتَنَا.",
  segs:[
    { ar:"فِي", uz:"Ichida." },
    { ar:"هَذَا الشَّيْءِ", uz:"Mana shu narsa." },
    { ar:"تَحْتَنَا", uz:"Tagimizdagi." }
  ],
  full_uz:"Mana shu tagimizdagi narsa ichida.",
  note:null
},

{
  num:38,
  time:"00:02:50,560 --> 00:02:54,219",
  arabic:"إِنَّهَا لَوْحَةٌ خَاصَّةٌ تُدْعَى لَوْحَةَ الدَّارَةِ.",
  segs:[
    { ar:"إِنَّهَا", uz:"Bu." },
    { ar:"لَوْحَةٌ خَاصَّةٌ", uz:"Maxsus plata." },
    { ar:"تُدْعَى", uz:"Deb ataladi." },
    { ar:"لَوْحَةَ الدَّارَةِ", uz:"Elektron plata." }
  ],
  full_uz:"Bu 'elektron plata' deb ataladigan maxsus platadir.",
  note:"لوحة الدارة — elektron plata (printed circuit board, PCB)."
},

{
  num:39,
  time:"00:02:54,219 --> 00:02:58,899",
  arabic:"لَوْحَةُ الدَّارَةِ تُصْنَعُ هَكَذَا.",
  segs:[
    { ar:"لَوْحَةُ الدَّارَةِ", uz:"Elektron plata." },
    { ar:"تُصْنَعُ", uz:"Tayyorlanadi." },
    { ar:"هَكَذَا", uz:"Mana shunday." }
  ],
  full_uz:"Elektron plata mana shunday tayyorlanadi.",
  note:null
},

{
  num:40,
  time:"00:02:58,899 --> 00:03:02,579",
  arabic:"أَوَّلًا يَتِمُّ تَغْطِيَةُ اللَّوْحَةِ بِطَبَقَةٍ مَعْدِنِيَّةٍ رَقِيقَةٍ.",
  segs:[
    { ar:"أَوَّلًا", uz:"Avval." },
    { ar:"يَتِمُّ تَغْطِيَةُ اللَّوْحَةِ", uz:"Plata qoplanadi." },
    { ar:"بِطَبَقَةٍ مَعْدِنِيَّةٍ رَقِيقَةٍ", uz:"Yupqa metall qatlam bilan." }
  ],
  full_uz:"Avval plata yupqa metall qatlam bilan qoplanadi.",
  note:null
},
{
  num:41,
  time:"00:03:02,580 --> 00:03:06,840",
  arabic:"وَبَعْدَهَا تُرْسَمُ الْمَسَارَاتُ الَّتِي سَيَتَدَفَّقُ التَّيَّارُ فِيهَا عَلَى اللَّوْحَةِ.",
  segs:[
    { ar:"وَبَعْدَهَا", uz:"Shundan keyin." },
    { ar:"تُرْسَمُ الْمَسَارَاتُ", uz:"Yo'llar chiziladi." },
    { ar:"الَّتِي سَيَتَدَفَّقُ التَّيَّارُ فِيهَا", uz:"Elektr toki oqadigan." },
    { ar:"عَلَى اللَّوْحَةِ", uz:"Plata ustiga." }
  ],
  full_uz:"Shundan keyin plata ustiga elektr toki oqadigan yo'llar chiziladi.",
  note:null
},

{
  num:42,
  time:"00:03:06,840 --> 00:03:11,860",
  arabic:"وَبَعْدَ ذَلِكَ يُتَمُّ إِزَالَةُ الْمَعْدِنِ الزَّائِدِ بِسَائِلِ تَنْظِيفٍ خَاصٍّ.",
  segs:[
    { ar:"وَبَعْدَ ذَلِكَ", uz:"Shundan so'ng." },
    { ar:"يُتَمُّ إِزَالَةُ الْمَعْدِنِ الزَّائِدِ", uz:"Ortiqcha metall olib tashlanadi." },
    { ar:"بِسَائِلِ تَنْظِيفٍ خَاصٍّ", uz:"Maxsus tozalovchi suyuqlik bilan." }
  ],
  full_uz:"Shundan so'ng ortiqcha metall maxsus tozalovchi suyuqlik yordamida olib tashlanadi.",
  note:null
},

{
  num:43,
  time:"00:03:11,860 --> 00:03:15,420",
  arabic:"فَتَبْقَى الْمَسَارَاتُ الْمَرْسُومَةُ عَلَى اللَّوْحَةِ فَقَطْ.",
  segs:[
    { ar:"فَتَبْقَى", uz:"Natijada qoladi." },
    { ar:"الْمَسَارَاتُ الْمَرْسُومَةُ", uz:"Chizilgan yo'llargina." },
    { ar:"عَلَى اللَّوْحَةِ", uz:"Plata ustida." },
    { ar:"فَقَطْ", uz:"Xolos." }
  ],
  full_uz:"Natijada plata ustida faqat chizilgan yo'llargina qoladi.",
  note:null
},

{
  num:44,
  time:"00:03:15,420 --> 00:03:21,620",
  arabic:"هَذِهِ الْمَسَارَاتُ تَعْمَلُ تَمَامًا كَالْأَسْلَاكِ وَتُوَصِّلُ بَعْضَ أَجْزَاءِ الدَّارَةِ بِبَعْضٍ.",
  segs:[
    { ar:"هَذِهِ الْمَسَارَاتُ", uz:"Bu yo'llar." },
    { ar:"تَعْمَلُ تَمَامًا كَالْأَسْلَاكِ", uz:"Xuddi simlar kabi ishlaydi." },
    { ar:"وَتُوَصِّلُ", uz:"Va bog'laydi." },
    { ar:"بَعْضَ أَجْزَاءِ الدَّارَةِ بِبَعْضٍ", uz:"Elektron sxemaning qismlarini bir-biriga." }
  ],
  full_uz:"Bu yo'llar xuddi simlar kabi ishlaydi va elektron sxemaning qismlarini bir-biriga ulaydi.",
  note:null
},

{
  num:45,
  time:"00:03:21,620 --> 00:03:26,000",
  arabic:"وَيَبْقَى تَثْبِيتُ هَذِهِ الْأَجْزَاءِ فِي أَمَاكِنِهَا عَلَى الدَّارَةِ.",
  segs:[
    { ar:"وَيَبْقَى", uz:"Keyin qoladi." },
    { ar:"تَثْبِيتُ هَذِهِ الْأَجْزَاءِ", uz:"Bu qismlarni mahkamlash." },
    { ar:"فِي أَمَاكِنِهَا", uz:"O'z joylariga." },
    { ar:"عَلَى الدَّارَةِ", uz:"Plata ustiga." }
  ],
  full_uz:"Keyin bu qismlarni plata ustidagi o'z joylariga mahkamlash qoladi.",
  note:null
},

{
  num:46,
  time:"00:03:26,000 --> 00:03:30,500",
  arabic:"اسْحَبْهَا!",
  segs:[
    { ar:"اسْحَبْهَا", uz:"Uni tortib ol!" }
  ],
  full_uz:"Uni tortib ol!",
  note:null
},

{
  num:47,
  time:"00:03:30,500 --> 00:03:33,280",
  arabic:"تِدِيشْ.",
  segs:[
    { ar:"تِدِيشْ", uz:"Tidish!" }
  ],
  full_uz:"Tidish!",
  note:"'تديش' — Fixiklarning asbob ishlatgandagi odatiy hayqirig'i, tarjima qilinmaydi."
},

{
  num:48,
  time:"00:03:33,280 --> 00:03:42,419",
  arabic:"انْتَهَيْنَا يَا تُومْ.",
  segs:[
    { ar:"انْتَهَيْنَا", uz:"Tugatdik." },
    { ar:"يَا تُومْ", uz:"Tom." }
  ],
  full_uz:"Tom, tugatdik.",
  note:null
},

{
  num:49,
  time:"00:03:42,419 --> 00:03:43,280",
  arabic:"تِدِيشْ.",
  segs:null,
  full_uz:"Tidish!",
  note:null
},

{
  num:50,
  time:"00:03:43,280 --> 00:03:45,879",
  arabic:"مَرْحَى، سَأُجَرِّبُهَا الْآنَ.",
  segs:[
    { ar:"مَرْحَى", uz:"Ajoyib!" },
    { ar:"سَأُجَرِّبُهَا", uz:"Uni sinab ko'raman." },
    { ar:"الْآنَ", uz:"Hozir." }
  ],
  full_uz:"Ajoyib! Uni hozir sinab ko'raman.",
  note:null
},
{
  num:51,
  time:"00:03:45,879 --> 00:03:50,500",
  arabic:"تُومْ، أَنَا عَلَى وَشْكِ تَشْغِيلِ غَسَّالَةِ الصُّحُونِ.",
  segs:[
    { ar:"تُومْ", uz:"Tom." },
    { ar:"أَنَا عَلَى وَشْكِ", uz:"Men hozir." },
    { ar:"تَشْغِيلِ", uz:"Ishga tushirmoqchiman." },
    { ar:"غَسَّالَةِ الصُّحُونِ", uz:"Idish yuvish mashinasini." }
  ],
  full_uz:"Tom, men hozir idish yuvish mashinasini ishga tushirmoqchiman.",
  note:null
},

{
  num:52,
  time:"00:03:50,500 --> 00:03:53,139",
  arabic:"هَلْ هُنَاكَ أَيُّ صَحْنٍ وَسِخٍ فِي غُرْفَتِكَ؟",
  segs:[
    { ar:"هَلْ هُنَاكَ", uz:"Bormi?" },
    { ar:"أَيُّ صَحْنٍ وَسِخٍ", uz:"Biror iflos idish." },
    { ar:"فِي غُرْفَتِكَ", uz:"Xonangda." }
  ],
  full_uz:"Xonangda biror iflos idish bormi?",
  note:null
},

{
  num:53,
  time:"00:03:53,139 --> 00:03:53,439",
  arabic:"لَا.",
  segs:[
    { ar:"لَا", uz:"Yo'q." }
  ],
  full_uz:"Yo'q.",
  note:null
},

{
  num:54,
  time:"00:03:53,439 --> 00:03:55,240",
  arabic:"أَخِّرْهَا.",
  segs:[
    { ar:"أَخِّرْهَا", uz:"Uni kechiktir." }
  ],
  full_uz:"Uni kechiktir.",
  note:null
},

{
  num:55,
  time:"00:03:55,240 --> 00:03:56,960",
  arabic:"مَاذَا أُؤَخِّرُ؟",
  segs:[
    { ar:"مَاذَا", uz:"Nimani?" },
    { ar:"أُؤَخِّرُ", uz:"Kechiktiray?" }
  ],
  full_uz:"Nimani kechiktiray?",
  note:null
},

{
  num:56,
  time:"00:03:56,960 --> 00:03:58,340",
  arabic:"حَاوِلْ تَأْخِيرَ أُمِّكَ.",
  segs:[
    { ar:"حَاوِلْ", uz:"Harakat qil." },
    { ar:"تَأْخِيرَ", uz:"Kechiktirishga." },
    { ar:"أُمِّكَ", uz:"Onangni." }
  ],
  full_uz:"Onangni biroz ushlab turishga harakat qil.",
  note:null
},

{
  num:57,
  time:"00:03:58,340 --> 00:04:01,719",
  arabic:"أَخَذْنَا الْقِطْعَةَ الْجَدِيدَةَ مِنْ غَسَّالَةِ الصُّحُونِ، أَفَهِمْتَ؟",
  segs:[
    { ar:"أَخَذْنَا", uz:"Biz oldik." },
    { ar:"الْقِطْعَةَ الْجَدِيدَةَ", uz:"Yangi detalni." },
    { ar:"مِنْ غَسَّالَةِ الصُّحُونِ", uz:"Idish yuvish mashinasidan." },
    { ar:"أَفَهِمْتَ", uz:"Tushundingmi?" }
  ],
  full_uz:"Biz yangi detalni idish yuvish mashinasidan oldik. Tushundingmi?",
  note:null
},

{
  num:58,
  time:"00:04:01,719 --> 00:04:06,599",
  arabic:"أُمِّي، انْتَظِرِي، لَا تُشَغِّلِيهَا، ضَعِي فِيهَا... ضَعِي...",
  segs:[
    { ar:"أُمِّي", uz:"Oyi." },
    { ar:"انْتَظِرِي", uz:"Biroz kuting." },
    { ar:"لَا تُشَغِّلِيهَا", uz:"Uni ishga tushirmang." },
    { ar:"ضَعِي فِيهَا", uz:"Ichiga soling." }
  ],
  full_uz:"Oyi, kuting! Uni ishga tushirmang, ichiga... ichiga biror narsa soling.",
  note:null
},

{
  num:59,
  time:"00:04:06,599 --> 00:04:09,960",
  arabic:"أَجَلْ، ضَعِي هَذَا الْفِنْجَانَ الْوَسِخَ.",
  segs:[
    { ar:"أَجَلْ", uz:"Ha." },
    { ar:"ضَعِي", uz:"Soling." },
    { ar:"هَذَا الْفِنْجَانَ الْوَسِخَ", uz:"Mana bu iflos finjonni." }
  ],
  full_uz:"Ha, mana bu iflos finjonni ichiga soling.",
  note:null
},

{
  num:60,
  time:"00:04:09,960 --> 00:04:13,939",
  arabic:"نُولِكْ، نُولِكْ، اتْبَعْنِي، فَإِنَّ الْقِطْعَةَ نَفْسَهَا فِي التِّلْفَازِ.",
  segs:[
    { ar:"نُولِكْ، نُولِكْ", uz:"Nolik, Nolik." },
    { ar:"اتْبَعْنِي", uz:"Ortimdan yur." },
    { ar:"فَإِنَّ الْقِطْعَةَ نَفْسَهَا", uz:"Xuddi o'sha detal." },
    { ar:"فِي التِّلْفَازِ", uz:"Televizorda ham bor." }
  ],
  full_uz:"Nolik, ortimdan yur. Xuddi o'sha detal televizorda ham bor.",
  note:null
},
{
  num:61,
  time:"00:04:13,939 --> 00:04:24,079",
  arabic:"مِنَ التِّلْفَازِ، وَالْآنَ إِلَى غَسَّالَةِ الصُّحُونِ.",
  segs:[
    { ar:"مِنَ التِّلْفَازِ", uz:"Televizordan." },
    { ar:"وَالْآنَ", uz:"Endi esa." },
    { ar:"إِلَى غَسَّالَةِ الصُّحُونِ", uz:"Idish yuvish mashinasiga." }
  ],
  full_uz:"Televizordan olib, endi esa idish yuvish mashinasiga qo'yamiz.",
  note:null
},

{
  num:62,
  time:"00:04:28,339 --> 00:04:29,659",
  arabic:"انْتَهَيْنَا بِصُعُوبَةٍ.",
  segs:[
    { ar:"انْتَهَيْنَا", uz:"Tugatdik." },
    { ar:"بِصُعُوبَةٍ", uz:"Zo'rg'a." }
  ],
  full_uz:"Zo'rg'a tugatdik.",
  note:null
},

{
  num:63,
  time:"00:04:29,659 --> 00:04:32,699",
  arabic:"لَقَدْ أَخَذْنَا الْقِطْعَةَ مِنْ تِلْفَازِ غُرْفَةِ الْجُلُوسِ.",
  segs:[
    { ar:"لَقَدْ أَخَذْنَا", uz:"Biz oldik." },
    { ar:"الْقِطْعَةَ", uz:"Detalni." },
    { ar:"مِنْ تِلْفَازِ غُرْفَةِ الْجُلُوسِ", uz:"Mehmonxona televizoridan." }
  ],
  full_uz:"Biz detalni mehmonxona televizoridan oldik.",
  note:null
},

{
  num:64,
  time:"00:04:32,699 --> 00:04:34,060",
  arabic:"إِلَّا التِّلْفَازَ!",
  segs:[
    { ar:"إِلَّا", uz:"Faqat." },
    { ar:"التِّلْفَازَ", uz:"Televizor emas!" }
  ],
  full_uz:"Faqat televizor bo'lmasin!",
  note:null
},

{
  num:65,
  time:"00:04:34,060 --> 00:04:37,419",
  arabic:"آهْ، بَرْنَامَجُ أُمِّي الْمُفَضَّلُ عَلَى وَشْكِ أَنْ يَبْدَأَ.",
  segs:[
    { ar:"آهْ", uz:"Voy." },
    { ar:"بَرْنَامَجُ أُمِّي الْمُفَضَّلُ", uz:"Oyimning sevimli dasturi." },
    { ar:"عَلَى وَشْكِ أَنْ يَبْدَأَ", uz:"Boshlanish arafasida." }
  ],
  full_uz:"Voy, oyimning sevimli dasturi hozir boshlanadi.",
  note:null
},

{
  num:66,
  time:"00:04:37,419 --> 00:04:47,399",
  arabic:"التِّلْفَازُ يَعْمَلُ الْآنَ.",
  segs:[
    { ar:"التِّلْفَازُ", uz:"Televizor." },
    { ar:"يَعْمَلُ", uz:"Ishlayapti." },
    { ar:"الْآنَ", uz:"Hozir." }
  ],
  full_uz:"Televizor endi ishlayapti.",
  note:null
},

{
  num:67,
  time:"00:04:47,399 --> 00:04:49,259",
  arabic:"وَمِنْ أَيْنَ أَخَذْتُمَا الْقِطْعَةَ؟",
  segs:[
    { ar:"وَمِنْ أَيْنَ", uz:"Qayerdan esa." },
    { ar:"أَخَذْتُمَا", uz:"Ikkalangiz oldingiz." },
    { ar:"الْقِطْعَةَ", uz:"Detalni." }
  ],
  full_uz:"Detalni qayerdan oldingizlar?",
  note:null
},

{
  num:68,
  time:"00:04:49,259 --> 00:04:51,099",
  arabic:"مِنْ حَاسُوبِ وَالِدِكَ فِي مَكْتَبِهِ.",
  segs:[
    { ar:"مِنْ حَاسُوبِ", uz:"Kompyuteridan." },
    { ar:"وَالِدِكَ", uz:"Otangning." },
    { ar:"فِي مَكْتَبِهِ", uz:"Ish xonasidagi." }
  ],
  full_uz:"Otangning ish xonasidagi kompyuteridan.",
  note:null
},

{
  num:69,
  time:"00:04:51,099 --> 00:04:54,399",
  arabic:"مَرْحَبًا جَمِيعًا، هَا قَدْ عُدْتُ.",
  segs:[
    { ar:"مَرْحَبًا جَمِيعًا", uz:"Hammaga salom." },
    { ar:"هَا قَدْ عُدْتُ", uz:"Men qaytdim." }
  ],
  full_uz:"Hammaga salom, men qaytdim.",
  note:null
},

{
  num:70,
  time:"00:04:54,399 --> 00:04:57,019",
  arabic:"مَرْحَبًا عَزِيزِي، هَلْ أَنْتَ مُسْتَعِدٌّ لِلْغَدَاءِ؟",
  segs:[
    { ar:"مَرْحَبًا عَزِيزِي", uz:"Xush kelibsiz, azizim." },
    { ar:"هَلْ أَنْتَ", uz:"Sen." },
    { ar:"مُسْتَعِدٌّ لِلْغَدَاءِ", uz:"Tushlikka tayyormisan?" }
  ],
  full_uz:"Xush kelibsan, azizim. Tushlikka tayyormisan?",
  note:null
},
{
  num:71,
  time:"00:04:57,019 --> 00:04:59,539",
  arabic:"دَقِيقَةً، سَأُنْهِي بَعْضَ الْعَمَلِ عَلَى الْحَاسُوبِ.",
  segs:[
    { ar:"دَقِيقَةً", uz:"Bir daqiqa." },
    { ar:"سَأُنْهِي", uz:"Tugataman." },
    { ar:"بَعْضَ الْعَمَلِ", uz:"Bir oz ishni." },
    { ar:"عَلَى الْحَاسُوبِ", uz:"Kompyuterda." }
  ],
  full_uz:"Bir daqiqa, kompyuterdagi bir oz ishimni tugataman.",
  note:null
},

{
  num:72,
  time:"00:04:59,539 --> 00:05:03,919",
  arabic:"سِيمْكَا، أَسْرِعِي، أَيْنَ يُمْكِنُنَا أَنْ نَجِدَ الْقِطْعَةَ؟",
  segs:[
    { ar:"سِيمْكَا", uz:"Simka." },
    { ar:"أَسْرِعِي", uz:"Tezroq." },
    { ar:"أَيْنَ", uz:"Qayerdan." },
    { ar:"يُمْكِنُنَا أَنْ نَجِدَ الْقِطْعَةَ", uz:"Detalni topa olamiz?" }
  ],
  full_uz:"Simka, tezroq! Detalni qayerdan topsak bo'ladi?",
  note:null
},

{
  num:73,
  time:"00:05:03,919 --> 00:05:06,039",
  arabic:"تَوَقَّفَا، يَكْفِيكُمَا رَكْضًا.",
  segs:[
    { ar:"تَوَقَّفَا", uz:"To'xtanglar." },
    { ar:"يَكْفِيكُمَا", uz:"Yetar." },
    { ar:"رَكْضًا", uz:"Yugurganingiz." }
  ],
  full_uz:"To'xtanglar, endi yugurganingiz yetar.",
  note:null
},

{
  num:74,
  time:"00:05:06,039 --> 00:05:09,819",
  arabic:"هَيَّا، اسْتَعِيدَاهَا مِنَ السَّيَّارَةِ.",
  segs:[
    { ar:"هَيَّا", uz:"Qani." },
    { ar:"اسْتَعِيدَاهَا", uz:"Uni qaytarib oling." },
    { ar:"مِنَ السَّيَّارَةِ", uz:"Mashinadan." }
  ],
  full_uz:"Qani, uni mashinadan qaytarib oling.",
  note:null
},

{
  num:75,
  time:"00:05:09,819 --> 00:05:15,500",
  arabic:"وَبَعْدَهَا وَضَعْنَا الْقِطْعَةَ فِي الْحَاسُوبِ وَعَادَ إِلَى الْعَمَلِ مَرَّةً أُخْرَى.",
  segs:[
    { ar:"وَبَعْدَهَا", uz:"Shundan keyin." },
    { ar:"وَضَعْنَا الْقِطْعَةَ", uz:"Detalni joyiga qo'ydik." },
    { ar:"فِي الْحَاسُوبِ", uz:"Kompyuterga." },
    { ar:"وَعَادَ إِلَى الْعَمَلِ", uz:"Yana ishlay boshladi." },
    { ar:"مَرَّةً أُخْرَى", uz:"Qaytadan." }
  ],
  full_uz:"Shundan keyin detalni kompyuterga joyladik va u yana ishlay boshladi.",
  note:null
},

{
  num:76,
  time:"00:05:15,500 --> 00:05:17,099",
  arabic:"هَذَا مُضْحِكٌ حَقًّا.",
  segs:[
    { ar:"هَذَا", uz:"Bu." },
    { ar:"مُضْحِكٌ حَقًّا", uz:"Rostdan ham kulgili." }
  ],
  full_uz:"Bu rostdan ham kulgili.",
  note:null
},

{
  num:77,
  time:"00:05:17,099 --> 00:05:22,379",
  arabic:"تَذَكَّرْ أَيُّهَا الْخَبِيرَانِ أَلَّا تُصْلِحَا أَيَّ جِهَازٍ عَلَى حِسَابِ جِهَازٍ آخَرَ.",
  segs:[
    { ar:"تَذَكَّرْ", uz:"Yodingizda bo'lsin." },
    { ar:"أَيُّهَا الْخَبِيرَانِ", uz:"Ey ikki usta." },
    { ar:"أَلَّا تُصْلِحَا", uz:"Tuzatmang." },
    { ar:"أَيَّ جِهَازٍ", uz:"Biror qurilmani." },
    { ar:"عَلَى حِسَابِ جِهَازٍ آخَرَ", uz:"Boshqa qurilmani buzish evaziga." }
  ],
  full_uz:"Ey ikki usta, bir qurilmani boshqa qurilma hisobiga tuzatmang.",
  note:null
},

{
  num:78,
  time:"00:05:22,379 --> 00:05:23,680",
  arabic:"لَقَدْ فَهِمْتُ الْآنَ.",
  segs:[
    { ar:"لَقَدْ", uz:"Endi." },
    { ar:"فَهِمْتُ", uz:"Tushundim." },
    { ar:"الْآنَ", uz:"Hozir." }
  ],
  full_uz:"Endi tushundim.",
  note:null
},

{
  num:79,
  time:"00:05:23,680 --> 00:05:24,779",
  arabic:"أَنَا أَيْضًا فَهِمْتُ.",
  segs:[
    { ar:"أَنَا أَيْضًا", uz:"Men ham." },
    { ar:"فَهِمْتُ", uz:"Tushundim." }
  ],
  full_uz:"Men ham tushundim.",
  note:null
},

{
  num:80,
  time:"00:05:24,779 --> 00:05:31,779",
  arabic:"لَوْ كُنْتُمَا ذَكِيَّيْنِ لَأَخَذْتُمَا الْقِطْعَةَ مِنَ الْمِذْيَاعِ الْقَدِيمِ فِي الْخِزَانَةِ.",
  segs:[
    { ar:"لَوْ كُنْتُمَا ذَكِيَّيْنِ", uz:"Agar aqlli bo'lganingizda." },
    { ar:"لَأَخَذْتُمَا الْقِطْعَةَ", uz:"Detalni olardingiz." },
    { ar:"مِنَ الْمِذْيَاعِ الْقَدِيمِ", uz:"Eski radiodan." },
    { ar:"فِي الْخِزَانَةِ", uz:"Shkafdagi." }
  ],
  full_uz:"Agar aqlli bo'lganingizda, detalni shkafdagi eski radiodan olardingiz.",
  note:null
},
{
  num:81,
  time:"00:05:31,779 --> 00:05:32,299",
  arabic:"بَابُوسْ، لَكِنَّكَ تَعْلَمُ أَنَّ الْمِذْيَاعَ سَيَتَعَطَّلُ.",
  segs:[
    { ar:"بَابُوسْ", uz:"Papus." },
    { ar:"لَكِنَّكَ تَعْلَمُ", uz:"Lekin o'zing bilasan." },
    { ar:"أَنَّ الْمِذْيَاعَ", uz:"Radiopriyomnik." },
    { ar:"سَيَتَعَطَّلُ", uz:"Buzilib qolishini." }
  ],
  full_uz:"Papus, lekin o'zing bilasan-ku, radiopriyomnik buzilib qoladi.",
  note:null
},

{
  num:82,
  time:"00:05:32,299 --> 00:05:33,779",
  arabic:"إِنَّهُ لَمْ يَعْمَلْ مُنْذُ سَنَوَاتٍ.",
  segs:[
    { ar:"إِنَّهُ", uz:"U." },
    { ar:"لَمْ يَعْمَلْ", uz:"Ishlamagan." },
    { ar:"مُنْذُ سَنَوَاتٍ", uz:"Ko'p yillardan beri." }
  ],
  full_uz:"U ko'p yillardan beri ishlamaydi.",
  note:null
},

{
  num:83,
  time:"00:05:34,299 --> 00:05:37,879",
  arabic:"أَخَذْنَا أَنَا وَمَاسْيَا أَكْثَرَ مِنْ نِصْفِ قِطَعِهِ.",
  segs:[
    { ar:"أَخَذْنَا", uz:"Biz olganmiz." },
    { ar:"أَنَا وَمَاسْيَا", uz:"Men bilan Masya." },
    { ar:"أَكْثَرَ مِنْ نِصْفِ", uz:"Yarmidan ko'pini." },
    { ar:"قِطَعِهِ", uz:"Detallarining." }
  ],
  full_uz:"Men bilan Masya uning detallarining yarmidan ko'pini olib bo'lganmiz.",
  note:null
}
];
if (typeof module !== "undefined" && module.exports) {
  module.exports = lessons;
}