const lessons = [
    {
  num:1,
  time:"00:00:40,080 --> 00:00:43,780",
  arabic:"هَذِهِ أَرْبَعَةٌ.",
  segs:[
    { ar:"هَذِهِ", uz:"Bu." },
    { ar:"أَرْبَعَةٌ", uz:"To'rtta." }
  ],
  full_uz:"Bu to'rtta.",
  note:null
},

{
  num:2,
  time:"00:00:43,780 --> 00:00:45,159",
  arabic:"هَيَّا يَا تُومْ، وَاحِدَةٌ أُخْرَى.",
  segs:[
    { ar:"هَيَّا", uz:"Qani." },
    { ar:"يَا تُومْ", uz:"Ey Tom." },
    { ar:"وَاحِدَةٌ أُخْرَى", uz:"Yana bittasi." }
  ],
  full_uz:"Qani, Tom, yana bittasi.",
  note:null
},

{
  num:3,
  time:"00:00:45,159 --> 00:00:49,168",
  arabic:"هَيَّا يَا تُومْ، إِنَّكَ تَسْتَطِيعُ فِعْلَهَا.",
  segs:[
    { ar:"هَيَّا", uz:"Qani." },
    { ar:"يَا تُومْ", uz:"Ey Tom." },
    { ar:"إِنَّكَ", uz:"Sen albatta." },
    { ar:"تَسْتَطِيعُ", uz:"Qila olasan." },
    { ar:"فِعْلَهَا", uz:"Uni bajarishni." }
  ],
  full_uz:"Qani, Tom, sen buni qila olasan.",
  note:null
},

{
  num:4,
  time:"00:00:49,168 --> 00:00:50,183",
  arabic:"هَيَّا، حَاوِلْ.",
  segs:[
    { ar:"هَيَّا", uz:"Qani." },
    { ar:"حَاوِلْ", uz:"Harakat qil." }
  ],
  full_uz:"Qani, harakat qil.",
  note:null
},

{
  num:5,
  time:"00:00:50,183 --> 00:00:53,278",
  arabic:"خَمْسَةٌ.",
  segs:[
    { ar:"خَمْسَةٌ", uz:"Beshta." }
  ],
  full_uz:"Beshta.",
  note:null
},

{
  num:6,
  time:"00:00:53,278 --> 00:00:56,384",
  arabic:"هَذِهِ لَا تُحْتَسَبُ، لَا تُحْتَسَبُ، لَا.",
  segs:[
    { ar:"هَذِهِ لَا تُحْتَسَبُ", uz:"Bu hisoblanmaydi." },
    { ar:"لَا تُحْتَسَبُ", uz:"Hisoblanmaydi." },
    { ar:"لَا", uz:"Yo'q." }
  ],
  full_uz:"Bu hisoblanmaydi, hisoblanmaydi, yo'q.",
  note:null
},

{
  num:7,
  time:"00:00:56,384 --> 00:00:58,649",
  arabic:"ذَقْنُكَ أَسْفَلَ الْعَمُودِ يَا تُومْ.",
  segs:[
    { ar:"ذَقْنُكَ", uz:"Iaging." },
    { ar:"أَسْفَلَ الْعَمُودِ", uz:"Turnikdan pastda." },
    { ar:"يَا تُومْ", uz:"Ey Tom." }
  ],
  full_uz:"Tom, iaging turnikdan pastda qoldi.",
  note:"العمود — bu yerda turnik (tortilish uchun temir)."
},

{
  num:8,
  time:"00:00:58,649 --> 00:01:02,557",
  arabic:"يَكْفِي، لَمْ أَعُدْ أَسْتَطِيعُ.",
  segs:[
    { ar:"يَكْفِي", uz:"Bo'ldi." },
    { ar:"لَمْ أَعُدْ", uz:"Endi." },
    { ar:"أَسْتَطِيعُ", uz:"Qila olmayman." }
  ],
  full_uz:"Bo'ldi, endi qila olmayman.",
  note:null
},

{
  num:9,
  time:"00:01:02,557 --> 00:01:03,712",
  arabic:"أَيُّهَا الضَّعِيفُ!",
  segs:[
    { ar:"أَيُّهَا الضَّعِيفُ", uz:"Ey kuchsiz!" }
  ],
  full_uz:"Ey kuchsiz!",
  note:null
},

{
  num:10,
  time:"00:01:03,712 --> 00:01:09,265",
  arabic:"أَنْتَ الضَّعِيفُ وَلَسْتُ أَنَا، كُلُّ مَا فِي الْأَمْرِ أَنَّنِي لَمْ آكُلْ، وَلِهَذَا فَقَدْتُ قُوَّتِي، أَفَهِمْتَ؟",
  segs:[
    { ar:"أَنْتَ الضَّعِيفُ", uz:"Kuchsiz sensan." },
    { ar:"وَلَسْتُ أَنَا", uz:"Men emas." },
    { ar:"كُلُّ مَا فِي الْأَمْرِ", uz:"Gap shundaki." },
    { ar:"أَنَّنِي لَمْ آكُلْ", uz:"Men ovqat yemadim." },
    { ar:"وَلِهَذَا", uz:"Shuning uchun." },
    { ar:"فَقَدْتُ قُوَّتِي", uz:"Kuchim qolmadi." },
    { ar:"أَفَهِمْتَ", uz:"Tushundingmi?" }
  ],
  full_uz:"Kuchsiz sensan, men emas. Gap shundaki, men ovqat yemadim, shuning uchun kuchim qolmadi. Tushundingmi?",
  note:null
},
{
  num:11,
  time:"00:01:09,265 --> 00:01:11,262",
  arabic:"أَنْتَ تَأْكُلُ كَثِيرًا يَا تُومْ.",
  segs:[
    { ar:"أَنْتَ", uz:"Sen." },
    { ar:"تَأْكُلُ كَثِيرًا", uz:"Ko'p ovqat yeysan." },
    { ar:"يَا تُومْ", uz:"Ey Tom." }
  ],
  full_uz:"Tom, sen juda ko'p ovqat yeysan.",
  note:null
},

{
  num:12,
  time:"00:01:11,262 --> 00:01:15,985",
  arabic:"وَكَمَا تَرَى، هَذَا هُوَ الْفَرْقُ بَيْنَ الْفِيكْسِز وَالْبَشَرِ، اسْتَمِعِي الْآنَ.",
  segs:[
    { ar:"وَكَمَا تَرَى", uz:"Ko'rib turganingdek." },
    { ar:"هَذَا هُوَ الْفَرْقُ", uz:"Mana shu farq." },
    { ar:"بَيْنَ الْفِيكْسِز وَالْبَشَرِ", uz:"Fiksilar bilan odamlar o'rtasidagi." },
    { ar:"اسْتَمِعِي الْآنَ", uz:"Endi eshit." }
  ],
  full_uz:"Ko'rib turganingdek, fiksilar bilan odamlar o'rtasidagi farq mana shu. Endi eshit.",
  note:null
},

{
  num:13,
  time:"00:01:15,985 --> 00:01:24,066",
  arabic:"كَثِيرٌ مِنَ النَّاسِ يَفْتَرِضُ خَطَأً أَنَّ الْفِيكْسِز يَعِيشُونَ عَلَى سَرِقَةِ الطَّعَامِ مِنْ عَلَى مَائِدَةِ الْبَشَرِ.",
  segs:[
    { ar:"كَثِيرٌ مِنَ النَّاسِ", uz:"Ko'p odamlar." },
    { ar:"يَفْتَرِضُ خَطَأً", uz:"Xato ravishda o'ylaydi." },
    { ar:"أَنَّ الْفِيكْسِز يَعِيشُونَ", uz:"Fiksilar yashaydi deb." },
    { ar:"عَلَى سَرِقَةِ الطَّعَامِ", uz:"Ovqat o'g'irlash bilan." },
    { ar:"مِنْ عَلَى مَائِدَةِ الْبَشَرِ", uz:"Odamlarning dasturxonidan." }
  ],
  full_uz:"Ko'p odamlar fiksilar odamlarning dasturxonidan ovqat o'g'irlab kun ko'radi deb xato o'ylashadi.",
  note:null
},

{
  num:14,
  time:"00:01:24,066 --> 00:01:27,737",
  arabic:"بَلْ أَسْوَأُ مِنْ ذَلِكَ، سَرِقَةُ الطَّعَامِ مِنْ دَاخِلِ ثَلَّاجَاتِهِمْ.",
  segs:[
    { ar:"بَلْ أَسْوَأُ مِنْ ذَلِكَ", uz:"Bundan ham yomoni." },
    { ar:"سَرِقَةُ الطَّعَامِ", uz:"Ovqat o'g'irlash." },
    { ar:"مِنْ دَاخِلِ ثَلَّاجَاتِهِمْ", uz:"Ularning muzlatkichidan." }
  ],
  full_uz:"Hatto bundan ham yomoni, ularning muzlatkichidan ovqat o'g'irlashadi deb o'ylashadi.",
  note:null
},

{
  num:15,
  time:"00:01:27,737 --> 00:01:28,875",
  arabic:"إِنَّ هَذَا كَذِبٌ.",
  segs:[
    { ar:"إِنَّ هَذَا", uz:"Bu." },
    { ar:"كَذِبٌ", uz:"Yolg'on." }
  ],
  full_uz:"Bu yolg'on.",
  note:null
},

{
  num:16,
  time:"00:01:28,875 --> 00:01:30,689",
  arabic:"لَيْسَ صَحِيحًا الْبَتَّةَ.",
  segs:[
    { ar:"لَيْسَ", uz:"Emas." },
    { ar:"صَحِيحًا", uz:"To'g'ri." },
    { ar:"الْبَتَّةَ", uz:"Aslo." }
  ],
  full_uz:"Bu mutlaqo to'g'ri emas.",
  note:null
},

{
  num:17,
  time:"00:01:30,689 --> 00:01:33,034",
  arabic:"لَا يَأْكُلُ الْفِيكْسِزُ أَيًّا مِنْ طَعَامِ الْبَشَرِ.",
  segs:[
    { ar:"لَا يَأْكُلُ", uz:"Yemaydi." },
    { ar:"الْفِيكْسِزُ", uz:"Fiksilar." },
    { ar:"أَيًّا مِنْ طَعَامِ الْبَشَرِ", uz:"Odamlarning hech qanday ovqatini." }
  ],
  full_uz:"Fiksilar odamlarning hech qanday ovqatini yemaydi.",
  note:null
},

{
  num:18,
  time:"00:01:33,034 --> 00:01:37,422",
  arabic:"حَسَنًا، إِذَنْ كَيْفَ يَحْصُلُ الْفِيكْسِزُ عَلَى طَاقَتِهِمْ يَا أَعِزَّائِي؟",
  segs:[
    { ar:"حَسَنًا", uz:"Xo'sh." },
    { ar:"إِذَنْ", uz:"Unda." },
    { ar:"كَيْفَ يَحْصُلُ الْفِيكْسِزُ", uz:"Fiksilar qanday oladi?" },
    { ar:"عَلَى طَاقَتِهِمْ", uz:"O'z energiyasini." },
    { ar:"يَا أَعِزَّائِي", uz:"Azizlarim." }
  ],
  full_uz:"Xo'sh, unda fiksilar energiyani qayerdan oladi, azizlarim?",
  note:null
},

{
  num:19,
  time:"00:01:37,422 --> 00:01:38,950",
  arabic:"الْأَمْرُ فِي غَايَةِ الْبَسَاطَةِ.",
  segs:[
    { ar:"الْأَمْرُ", uz:"Gap." },
    { ar:"فِي غَايَةِ الْبَسَاطَةِ", uz:"Juda oddiy." }
  ],
  full_uz:"Buning javobi juda oddiy.",
  note:null
},

{
  num:20,
  time:"00:01:38,950 --> 00:01:41,867",
  arabic:"حَيَاةُ الْفِيكْسِي كُلُّهَا مُتَعَلِّقَةٌ بِالْأَجْهِزَةِ.",
  segs:[
    { ar:"حَيَاةُ الْفِيكْسِي", uz:"Fiksining hayoti." },
    { ar:"كُلُّهَا", uz:"Butunlay." },
    { ar:"مُتَعَلِّقَةٌ بِالْأَجْهِزَةِ", uz:"Qurilmalar bilan bog'liq." }
  ],
  full_uz:"Fiksining butun hayoti qurilmalar bilan bog'liq.",
  note:null
},
{
  num:21,
  time:"00:01:41,867 --> 00:01:44,913",
  arabic:"لَا يَعِيشُ الْفِيكْسِزُ دَاخِلَ الْأَجْهِزَةِ وَحَسْبُ.",
  segs:[
    { ar:"لَا يَعِيشُ", uz:"Yashamaydi." },
    { ar:"الْفِيكْسِزُ", uz:"Fiksilar." },
    { ar:"دَاخِلَ الْأَجْهِزَةِ", uz:"Qurilmalar ichida." },
    { ar:"وَحَسْبُ", uz:"Xolos." }
  ],
  full_uz:"Fiksilar faqat qurilmalar ichida yashamaydi.",
  note:null
},

{
  num:22,
  time:"00:01:44,913 --> 00:01:47,346",
  arabic:"بَلْ يَعْتَنُونَ بِهَا أَيْضًا لِتَبْقَى أَطْوَلَ.",
  segs:[
    { ar:"بَلْ", uz:"Balki." },
    { ar:"يَعْتَنُونَ بِهَا", uz:"Ularga g'amxo'rlik qilishadi." },
    { ar:"أَيْضًا", uz:"Ham." },
    { ar:"لِتَبْقَى أَطْوَلَ", uz:"Uzoqroq xizmat qilishi uchun." }
  ],
  full_uz:"Aksincha, ular qurilmalarga uzoqroq xizmat qilishi uchun g'amxo'rlik ham qilishadi.",
  note:null
},

{
  num:23,
  time:"00:01:47,346 --> 00:01:52,329",
  arabic:"وَمُقَابِلَ هَذِهِ الْمُسَاعَدَةِ تُشَارِكُ الْأَجْهِزَةُ الْفِيكْسِزَ بِبَعْضٍ مِنْ طَاقَتِهَا.",
  segs:[
    { ar:"وَمُقَابِلَ هَذِهِ الْمُسَاعَدَةِ", uz:"Bu yordam evaziga." },
    { ar:"تُشَارِكُ الْأَجْهِزَةُ", uz:"Qurilmalar ulashadi." },
    { ar:"الْفِيكْسِزَ", uz:"Fiksilar bilan." },
    { ar:"بِبَعْضٍ مِنْ طَاقَتِهَا", uz:"O'z energiyasining bir qismini." }
  ],
  full_uz:"Bu yordam evaziga qurilmalar o'z energiyasining bir qismini fiksilar bilan bo'lishadi.",
  note:null
},

{
  num:24,
  time:"00:01:52,329 --> 00:01:53,653",
  arabic:"كَمَا أَخْبَرْتُكُمْ.",
  segs:[
    { ar:"كَمَا", uz:"Qandayki." },
    { ar:"أَخْبَرْتُكُمْ", uz:"Sizlarga aytganimdek." }
  ],
  full_uz:"Sizlarga aytganimdek.",
  note:null
},

{
  num:25,
  time:"00:01:53,653 --> 00:01:55,536",
  arabic:"الْفِيكْسِزُ تُسَاعِدُ الْأَجْهِزَةَ.",
  segs:[
    { ar:"الْفِيكْسِزُ", uz:"Fiksilar." },
    { ar:"تُسَاعِدُ", uz:"Yordam beradi." },
    { ar:"الْأَجْهِزَةَ", uz:"Qurilmalarga." }
  ],
  full_uz:"Fiksilar qurilmalarga yordam beradi.",
  note:null
},

{
  num:26,
  time:"00:01:55,536 --> 00:01:57,801",
  arabic:"وَالْأَجْهِزَةُ تُسَاعِدُ الْفِيكْسِزَ.",
  segs:[
    { ar:"وَالْأَجْهِزَةُ", uz:"Qurilmalar esa." },
    { ar:"تُسَاعِدُ", uz:"Yordam beradi." },
    { ar:"الْفِيكْسِزَ", uz:"Fiksilarga." }
  ],
  full_uz:"Qurilmalar esa fiksilarga yordam beradi.",
  note:null
},

{
  num:27,
  time:"00:01:57,801 --> 00:02:02,116",
  arabic:"أَجَلْ، الْفِيكْسِزُ وَالْآلَاتُ لَدَيْهَا عَلَاقَةٌ تَكَافُلِيَّةٌ.",
  segs:[
    { ar:"أَجَلْ", uz:"Ha." },
    { ar:"الْفِيكْسِزُ وَالْآلَاتُ", uz:"Fiksilar va mashinalar." },
    { ar:"لَدَيْهَا عَلَاقَةٌ تَكَافُلِيَّةٌ", uz:"O'zaro manfaatli aloqaga ega." }
  ],
  full_uz:"Ha, fiksilar va mashinalar o'zaro manfaatli munosabatga ega.",
  note:"علاقة تكافلية — simbioz, o'zaro manfaatli munosabat."
},

{
  num:28,
  time:"00:02:02,116 --> 00:02:04,991",
  arabic:"لِذَا نَحْنُ لَا نَأْكُلُ الْفَضَلَاتِ كَالصَّرَاصِيرِ.",
  segs:[
    { ar:"لِذَا", uz:"Shuning uchun." },
    { ar:"نَحْنُ لَا نَأْكُلُ", uz:"Biz yemaymiz." },
    { ar:"الْفَضَلَاتِ", uz:"Chiqindilarni." },
    { ar:"كَالصَّرَاصِيرِ", uz:"Suvaraklar kabi." }
  ],
  full_uz:"Shuning uchun biz suvaraklar kabi chiqindilarni yemaymiz.",
  note:null
},

{
  num:29,
  time:"00:02:04,991 --> 00:02:07,142",
  arabic:"هَذَا لِأَنَّنَا فِيكْسِزُ.",
  segs:[
    { ar:"هَذَا", uz:"Buning sababi." },
    { ar:"لِأَنَّنَا", uz:"Biz." },
    { ar:"فِيكْسِزُ", uz:"Fiksilar ekanimiz." }
  ],
  full_uz:"Buning sababi — biz fiksimiz.",
  note:null
},

{
  num:30,
  time:"00:02:07,142 --> 00:02:10,108",
  arabic:"وَاحِدٌ... اِثْنَانِ... ثَلَاثَةٌ.",
  segs:[
    { ar:"وَاحِدٌ", uz:"Bir." },
    { ar:"اِثْنَانِ", uz:"Ikki." },
    { ar:"ثَلَاثَةٌ", uz:"Uch." }
  ],
  full_uz:"Bir... ikki... uch...",
  note:null
},
{
  num:31,
  time:"00:02:10,108 --> 00:02:10,833",
  arabic:"وَاحِدٌ.",
  segs:[
    { ar:"وَاحِدٌ", uz:"Bir." }
  ],
  full_uz:"Bir.",
  note:null
},

{
  num:32,
  time:"00:02:10,833 --> 00:02:11,703",
  arabic:"اِثْنَانِ.",
  segs:[
    { ar:"اِثْنَانِ", uz:"Ikki." }
  ],
  full_uz:"Ikki.",
  note:null
},

{
  num:33,
  time:"00:02:11,703 --> 00:02:19,674",
  arabic:"كَيْفَ مِنَ الْمُمْكِنِ أَنَّ فَتًى كَبِيرًا مِثْلَكَ لَا يَسْتَطِيعُ تَحْضِيرَ أَيِّ طَعَامٍ لِنَفْسِهِ؟",
  segs:[
    { ar:"كَيْفَ مِنَ الْمُمْكِنِ", uz:"Qanday qilib mumkin?" },
    { ar:"أَنَّ فَتًى كَبِيرًا مِثْلَكَ", uz:"Senga o'xshagan katta bola." },
    { ar:"لَا يَسْتَطِيعُ", uz:"Qila olmaydi." },
    { ar:"تَحْضِيرَ أَيِّ طَعَامٍ", uz:"Biror ovqat tayyorlashni." },
    { ar:"لِنَفْسِهِ", uz:"O'zi uchun." }
  ],
  full_uz:"Senga o'xshagan katta bola qanday qilib o'zi uchun ovqat tayyorlay olmaydi?",
  note:null
},

{
  num:34,
  time:"00:02:19,674 --> 00:02:20,668",
  arabic:"غَرِيبٌ.",
  segs:[
    { ar:"غَرِيبٌ", uz:"G'alati." }
  ],
  full_uz:"G'alati.",
  note:null
},

{
  num:35,
  time:"00:02:20,668 --> 00:02:24,883",
  arabic:"أَسْتَطِيعُ الطَّبْخَ، لَكِنْ لَا يُسْمَحُ لِي بِاسْتِعْمَالِ الْمَوْقِدِ.",
  segs:[
    { ar:"أَسْتَطِيعُ الطَّبْخَ", uz:"Men ovqat pishira olaman." },
    { ar:"لَكِنْ", uz:"Lekin." },
    { ar:"لَا يُسْمَحُ لِي", uz:"Menga ruxsat berilmaydi." },
    { ar:"بِاسْتِعْمَالِ الْمَوْقِدِ", uz:"Plitadan foydalanishga." }
  ],
  full_uz:"Men ovqat pishira olaman, lekin plitadan foydalanishga ruxsat berilmaydi.",
  note:null
},

{
  num:36,
  time:"00:02:24,883 --> 00:02:26,632",
  arabic:"مَا الَّذِي يُطْبَخُ بِغَيْرِهِ؟",
  segs:[
    { ar:"مَا الَّذِي", uz:"Unda nima." },
    { ar:"يُطْبَخُ", uz:"Pishiriladi." },
    { ar:"بِغَيْرِهِ", uz:"Usiz?" }
  ],
  full_uz:"Unda plitasiz nima pishiriladi?",
  note:null
},

{
  num:37,
  time:"00:02:26,632 --> 00:02:29,555",
  arabic:"أَجَلْ، شُوفَانٌ سَرِيعُ التَّحْضِيرِ.",
  segs:[
    { ar:"أَجَلْ", uz:"Ha." },
    { ar:"شُوفَانٌ", uz:"Suli bo'tqasi." },
    { ar:"سَرِيعُ التَّحْضِيرِ", uz:"Tez tayyorlanadigan." }
  ],
  full_uz:"Ha, tez tayyorlanadigan suli bo'tqasi.",
  note:null
},

{
  num:38,
  time:"00:02:29,555 --> 00:02:30,474",
  arabic:"انْظُرَا.",
  segs:[
    { ar:"انْظُرَا", uz:"Qaranglar." }
  ],
  full_uz:"Qaranglar.",
  note:null
},

{
  num:39,
  time:"00:02:30,474 --> 00:02:33,137",
  arabic:"هَلْ تُحِبُّ الشُّوفَانَ؟",
  segs:[
    { ar:"هَلْ", uz:"-mi?" },
    { ar:"تُحِبُّ", uz:"Yaxshi ko'rasan." },
    { ar:"الشُّوفَانَ", uz:"Suli bo'tqasini." }
  ],
  full_uz:"Suli bo'tqasini yaxshi ko'rasanmi?",
  note:null
},

{
  num:40,
  time:"00:02:33,137 --> 00:02:38,218",
  arabic:"هَلْ تُمْزِحِينَ؟ لَكِنَّ وَالِدِي يَقُولُ إِنَّ الشُّوفَانَ صِحِّيٌّ وَيُقَوِّيكَ.",
  segs:[
    { ar:"هَلْ تُمْزِحِينَ", uz:"Hazillashyapsanmi?" },
    { ar:"لَكِنَّ وَالِدِي يَقُولُ", uz:"Lekin otam aytadiki." },
    { ar:"إِنَّ الشُّوفَانَ", uz:"Suli bo'tqasi." },
    { ar:"صِحِّيٌّ", uz:"Sog'lom." },
    { ar:"وَيُقَوِّيكَ", uz:"Va seni kuchli qiladi." }
  ],
  full_uz:"Hazillashyapsanmi? Lekin otam aytadiki, suli bo'tqasi foydali va seni kuchli qiladi.",
  note:null
},
{
  num:41,
  time:"00:02:38,218 --> 00:02:41,082",
  arabic:"مُمْتَازٌ، وَكَيْفَ نَطْبُخُهُ؟",
  segs:[
    { ar:"مُمْتَازٌ", uz:"Ajoyib." },
    { ar:"وَكَيْفَ", uz:"Xo'sh, qanday." },
    { ar:"نَطْبُخُهُ", uz:"Uni pishiramiz?" }
  ],
  full_uz:"Ajoyib. Xo'sh, uni qanday tayyorlaymiz?",
  note:null
},

{
  num:42,
  time:"00:02:41,082 --> 00:02:46,415",
  arabic:"لَيْسَ صَعْبًا، كُلُّ مَا عَلَيْكَ فِعْلُهُ إِضَافَةُ الْمَاءِ السَّاخِنِ، وَهَذَا مَسْمُوحٌ لِي.",
  segs:[
    { ar:"لَيْسَ صَعْبًا", uz:"Bu qiyin emas." },
    { ar:"كُلُّ مَا عَلَيْكَ فِعْلُهُ", uz:"Qilishing kerak bo'lgan narsa." },
    { ar:"إِضَافَةُ الْمَاءِ السَّاخِنِ", uz:"Issiq suv qo'shish." },
    { ar:"وَهَذَا مَسْمُوحٌ لِي", uz:"Bunga menga ruxsat berilgan." }
  ],
  full_uz:"Bu qiyin emas. Faqat issiq suv qo'shasan, bunga menga ruxsat berilgan.",
  note:null
},

{
  num:43,
  time:"00:02:46,415 --> 00:02:50,927",
  arabic:"تَوَقَّفْ وَانْظُرْ إِذَا كَانَ فِيهِ مَاءٌ، وَإِلَّا فَسَوْفَ يَحْتَرِقُ الْإِبْرِيقُ.",
  segs:[
    { ar:"تَوَقَّفْ", uz:"To'xta." },
    { ar:"وَانْظُرْ", uz:"Tekshir." },
    { ar:"إِذَا كَانَ فِيهِ مَاءٌ", uz:"Ichida suv bormi." },
    { ar:"وَإِلَّا", uz:"Aks holda." },
    { ar:"فَسَوْفَ يَحْتَرِقُ الْإِبْرِيقُ", uz:"Choynak kuyib qoladi." }
  ],
  full_uz:"To'xta, ichida suv borligini tekshir. Aks holda choynak kuyib qoladi.",
  note:null
},

{
  num:44,
  time:"00:02:50,927 --> 00:02:53,127",
  arabic:"فِيهِ مَا يَكْفِي.",
  segs:[
    { ar:"فِيهِ", uz:"Ichida." },
    { ar:"مَا يَكْفِي", uz:"Yetarlicha bor." }
  ],
  full_uz:"Ichida yetarlicha suv bor.",
  note:null
},

{
  num:45,
  time:"00:02:53,127 --> 00:02:54,612",
  arabic:"إِذَنْ شَغِّلْهُ.",
  segs:[
    { ar:"إِذَنْ", uz:"Unda." },
    { ar:"شَغِّلْهُ", uz:"Uni yoq." }
  ],
  full_uz:"Unda uni yoq.",
  note:null
},

{
  num:46,
  time:"00:02:54,612 --> 00:02:59,997",
  arabic:"هَيَّا، أَخْبِرِينِي كَيْفَ يَتَوَقَّفُ الْإِبْرِيقُ؟",
  segs:[
    { ar:"هَيَّا", uz:"Qani." },
    { ar:"أَخْبِرِينِي", uz:"Menga ayt." },
    { ar:"كَيْفَ يَتَوَقَّفُ", uz:"Qanday o'chadi." },
    { ar:"الْإِبْرِيقُ", uz:"Choynak." }
  ],
  full_uz:"Qani, menga ayt-chi, choynak qanday o'chadi?",
  note:null
},

{
  num:47,
  time:"00:02:59,997 --> 00:03:03,373",
  arabic:"أَقْصِدُ، كَيْفَ يَعْرِفُ الْإِبْرِيقُ أَنَّ الْمَاءَ يَغْلِي؟",
  segs:[
    { ar:"أَقْصِدُ", uz:"Demoqchimanki." },
    { ar:"كَيْفَ يَعْرِفُ الْإِبْرِيقُ", uz:"Choynak qayerdan biladi." },
    { ar:"أَنَّ الْمَاءَ يَغْلِي", uz:"Suv qaynaganini." }
  ],
  full_uz:"Demoqchimanki, choynak suv qaynaganini qayerdan biladi?",
  note:null
},

{
  num:48,
  time:"00:03:03,373 --> 00:03:06,955",
  arabic:"اسْمَعْنِي جَيِّدًا.",
  segs:[
    { ar:"اسْمَعْنِي", uz:"Meni tingla." },
    { ar:"جَيِّدًا", uz:"Diqqat bilan." }
  ],
  full_uz:"Meni diqqat bilan tingla.",
  note:null
},

{
  num:49,
  time:"00:03:06,955 --> 00:03:10,747",
  arabic:"دَاخِلَ الْإِبْرِيقِ الْكَهْرَبَائِيِّ مُسَخِّنَةٌ مَخْفِيَّةٌ فِي الْقَعْرِ.",
  segs:[
    { ar:"دَاخِلَ الْإِبْرِيقِ الْكَهْرَبَائِيِّ", uz:"Elektr choynak ichida." },
    { ar:"مُسَخِّنَةٌ مَخْفِيَّةٌ", uz:"Yashirin qizdirgich bor." },
    { ar:"فِي الْقَعْرِ", uz:"Pastki qismida." }
  ],
  full_uz:"Elektr choynakning pastki qismida yashirin qizdirgich mavjud.",
  note:null
},

{
  num:50,
  time:"00:03:10,747 --> 00:03:14,984",
  arabic:"عِنْدَمَا تُشَغِّلُ الْإِبْرِيقَ تَقُومُ الْمُسَخِّنَةُ بِتَسْخِينِ الْمَاءِ حَتَّى يَغْلِيَ.",
  segs:[
    { ar:"عِنْدَمَا تُشَغِّلُ الْإِبْرِيقَ", uz:"Choynakni yoqqaningda." },
    { ar:"تَقُومُ الْمُسَخِّنَةُ", uz:"Qizdirgich." },
    { ar:"بِتَسْخِينِ الْمَاءِ", uz:"Suvni qizdiradi." },
    { ar:"حَتَّى يَغْلِيَ", uz:"Qaynaguncha." }
  ],
  full_uz:"Choynakni yoqqaningda qizdirgich suvni qaynaguncha isitadi.",
  note:null
},
{
  num:51,
  time:"00:03:14,984 --> 00:03:21,374",
  arabic:"وَالْمَاءُ الْمَغْلِيُّ يُصْدِرُ بُخَارًا يُسَخِّنُ صَفِيحَةً مَعْدِنِيَّةً خَاصَّةً فِي أَعْلَى الْإِبْرِيقِ كَمَا نَرَى هُنَا.",
  segs:[
    { ar:"وَالْمَاءُ الْمَغْلِيُّ", uz:"Qaynagan suv." },
    { ar:"يُصْدِرُ بُخَارًا", uz:"Bug' chiqaradi." },
    { ar:"يُسَخِّنُ صَفِيحَةً مَعْدِنِيَّةً", uz:"U metall plastinkani qizdiradi." },
    { ar:"خَاصَّةً فِي أَعْلَى الْإِبْرِيقِ", uz:"Choynakning yuqori qismidagi maxsus plastinkani." },
    { ar:"كَمَا نَرَى هُنَا", uz:"Bu yerda ko'rib turganimizdek." }
  ],
  full_uz:"Qaynagan suv bug' chiqaradi va u choynakning yuqori qismidagi maxsus metall plastinkani qizdiradi, buni bu yerda ko'rib turibmiz.",
  note:null
},

{
  num:52,
  time:"00:03:21,374 --> 00:03:25,353",
  arabic:"تُؤَدِّي الْحَرَارَةُ إِلَى الْتِوَاءِ الصَّفِيحَةِ وَإِيقَافِ الْإِبْرِيقِ.",
  segs:[
    { ar:"تُؤَدِّي الْحَرَارَةُ", uz:"Issiqlik sabab bo'ladi." },
    { ar:"إِلَى الْتِوَاءِ الصَّفِيحَةِ", uz:"Plastinkaning egilishiga." },
    { ar:"وَإِيقَافِ الْإِبْرِيقِ", uz:"Va choynakning o'chishiga." }
  ],
  full_uz:"Issiqlik plastinkaning egilishiga va choynakning avtomatik o'chishiga sabab bo'ladi.",
  note:null
},

{
  num:53,
  time:"00:03:25,353 --> 00:03:30,956",
  arabic:"لِذَا يُمْكِنُكَ الْقَوْلُ إِنَّ الْإِبْرِيقَ الْكَهْرَبَائِيَّ يَشْعُرُ بِغَلَيَانِ الْمَاءِ.",
  segs:[
    { ar:"لِذَا", uz:"Shuning uchun." },
    { ar:"يُمْكِنُكَ الْقَوْلُ", uz:"Aytish mumkin." },
    { ar:"إِنَّ الْإِبْرِيقَ الْكَهْرَبَائِيَّ", uz:"Elektr choynak." },
    { ar:"يَشْعُرُ بِغَلَيَانِ الْمَاءِ", uz:"Suv qaynaganini 'sezadi'." }
  ],
  full_uz:"Shuning uchun elektr choynak suv qaynaganini sezadi, deb aytish mumkin.",
  note:"Bu yerda يَشْعُرُ (sezadi) majoziy ma'noda ishlatilgan."
},

{
  num:54,
  time:"00:03:30,956 --> 00:03:38,812",
  arabic:"حَسَنًا، الْآنَ فَهِمْتُ.",
  segs:[
    { ar:"حَسَنًا", uz:"Xo'sh." },
    { ar:"الْآنَ", uz:"Endi." },
    { ar:"فَهِمْتُ", uz:"Tushundim." }
  ],
  full_uz:"Xo'sh, endi tushundim.",
  note:null
},

{
  num:55,
  time:"00:03:38,812 --> 00:03:40,948",
  arabic:"وَلِمَاذَا ثَلَاثَةُ أَوْعِيَةٍ؟",
  segs:[
    { ar:"وَلِمَاذَا", uz:"Unda nega." },
    { ar:"ثَلَاثَةُ أَوْعِيَةٍ", uz:"Uchta idish?" }
  ],
  full_uz:"Unda nega uchta idish?",
  note:null
},

{
  num:56,
  time:"00:03:40,948 --> 00:03:43,177",
  arabic:"كَمَا تَعْلَمُ، نَحْنُ لَا نَأْكُلُ.",
  segs:[
    { ar:"كَمَا تَعْلَمُ", uz:"Bilganingdek." },
    { ar:"نَحْنُ لَا نَأْكُلُ", uz:"Biz ovqat yemaymiz." }
  ],
  full_uz:"Bilganingdek, biz ovqat yemaymiz.",
  note:null
},

{
  num:57,
  time:"00:03:43,177 --> 00:03:46,352",
  arabic:"هَذَانِ لَيْسَا لَكُمَا، إِنَّهُمَا لِأُمِّي وَأَبِي.",
  segs:[
    { ar:"هَذَانِ لَيْسَا لَكُمَا", uz:"Bu ikkitasi sizlarniki emas." },
    { ar:"إِنَّهُمَا", uz:"Ular." },
    { ar:"لِأُمِّي وَأَبِي", uz:"Onam va otamniki." }
  ],
  full_uz:"Bu ikki idish sizlarniki emas, ular onam bilan otamniki.",
  note:null
},

{
  num:58,
  time:"00:03:46,352 --> 00:03:47,922",
  arabic:"اسْكُبْ هُنَا.",
  segs:[
    { ar:"اسْكُبْ", uz:"Quy." },
    { ar:"هُنَا", uz:"Shu yerga." }
  ],
  full_uz:"Shu yerga quy.",
  note:null
},

{
  num:59,
  time:"00:03:47,922 --> 00:03:49,590",
  arabic:"لَا.",
  segs:[
    { ar:"لَا", uz:"Yo'q." }
  ],
  full_uz:"Yo'q.",
  note:null
},

{
  num:60,
  time:"00:03:49,590 --> 00:03:51,725",
  arabic:"تَابِعِ السَّكْبَ هُنَا.",
  segs:[
    { ar:"تَابِعِ", uz:"Davom et." },
    { ar:"السَّكْبَ", uz:"Quyishni." },
    { ar:"هُنَا", uz:"Shu yerga." }
  ],
  full_uz:"Quyishni shu yerda davom ettir.",
  note:null
},
{
  num:61,
  time:"00:03:51,725 --> 00:03:54,086",
  arabic:"وَأَنَا قُلْتُ اسْكُبْ هُنَا.",
  segs:[
    { ar:"وَأَنَا قُلْتُ", uz:"Men esa aytdim." },
    { ar:"اسْكُبْ", uz:"Quy." },
    { ar:"هُنَا", uz:"Shu yerga." }
  ],
  full_uz:"Men esa shu yerga quy dedim.",
  note:null
},

{
  num:62,
  time:"00:03:54,086 --> 00:03:56,893",
  arabic:"أَنَا قُلْتُ عَلَيْكَ أَوَّلًا أَنْ تَسْكُبَ هُنَا.",
  segs:[
    { ar:"أَنَا قُلْتُ", uz:"Men aytdim." },
    { ar:"عَلَيْكَ", uz:"Senga." },
    { ar:"أَوَّلًا", uz:"Avval." },
    { ar:"أَنْ تَسْكُبَ هُنَا", uz:"Shu yerga quyishingni." }
  ],
  full_uz:"Men senga avval shu yerga quyishing kerakligini aytdim.",
  note:null
},

{
  num:63,
  time:"00:03:56,893 --> 00:04:00,372",
  arabic:"نُولِكْ، أَيْنَ أَنْتَ؟",
  segs:[
    { ar:"نُولِكْ", uz:"Nolik." },
    { ar:"أَيْنَ أَنْتَ", uz:"Qayerdasan?" }
  ],
  full_uz:"Nolik, qayerdasan?",
  note:null
},

{
  num:64,
  time:"00:04:00,372 --> 00:04:02,902",
  arabic:"سَأَجِدُهُ، تَمَاسَكْ، سَأَنْزِلُ.",
  segs:[
    { ar:"سَأَجِدُهُ", uz:"Uni topaman." },
    { ar:"تَمَاسَكْ", uz:"Mahkam tur." },
    { ar:"سَأَنْزِلُ", uz:"Pastga tushaman." }
  ],
  full_uz:"Uni topaman. Mahkam tur, pastga tushaman.",
  note:null
},

{
  num:65,
  time:"00:04:02,902 --> 00:04:06,579",
  arabic:"سِيمْكَا.",
  segs:[
    { ar:"سِيمْكَا", uz:"Simka." }
  ],
  full_uz:"Simka!",
  note:null
},

{
  num:66,
  time:"00:04:06,579 --> 00:04:07,874",
  arabic:"إِنَّهَا هُنَا.",
  segs:[
    { ar:"إِنَّهَا", uz:"U." },
    { ar:"هُنَا", uz:"Shu yerda." }
  ],
  full_uz:"U shu yerda.",
  note:null
},

{
  num:67,
  time:"00:04:07,874 --> 00:04:12,217",
  arabic:"نُولِكْ.",
  segs:[
    { ar:"نُولِكْ", uz:"Nolik." }
  ],
  full_uz:"Nolik!",
  note:null
},

{
  num:68,
  time:"00:04:12,217 --> 00:04:14,035",
  arabic:"إِنَّهُ هُنَا.",
  segs:[
    { ar:"إِنَّهُ", uz:"U." },
    { ar:"هُنَا", uz:"Shu yerda." }
  ],
  full_uz:"U shu yerda.",
  note:null
},

{
  num:69,
  time:"00:04:14,035 --> 00:04:15,596",
  arabic:"سِيمْكَا.",
  segs:[
    { ar:"سِيمْكَا", uz:"Simka." }
  ],
  full_uz:"Simka!",
  note:null
},

{
  num:70,
  time:"00:04:15,596 --> 00:04:19,063",
  arabic:"إِنَّهَا هُنَا. نُولِكْ، إِنَّهُ هُنَا.",
  segs:[
    { ar:"إِنَّهَا هُنَا", uz:"U shu yerda." },
    { ar:"نُولِكْ", uz:"Nolik." },
    { ar:"إِنَّهُ هُنَا", uz:"U shu yerda." }
  ],
  full_uz:"U shu yerda. Nolik, u ham shu yerda.",
  note:null
},
{
  num:71,
  time:"00:04:19,063 --> 00:04:28,852",
  arabic:"أَيْنَ فِرْدَةُ حِذَائِكَ؟",
  segs:[
    { ar:"أَيْنَ", uz:"Qayerda?" },
    { ar:"فِرْدَةُ حِذَائِكَ", uz:"Oyoq kiyimingning bir poyi." }
  ],
  full_uz:"Oyoq kiyimingning bir poyi qayerda?",
  note:"فردة الحذاء — bir dona oyoq kiyim (juftning bittasi)."
},

{
  num:72,
  time:"00:04:28,852 --> 00:04:29,802",
  arabic:"لَقَدْ ضَاعَتْ.",
  segs:[
    { ar:"لَقَدْ", uz:"Allaqachon." },
    { ar:"ضَاعَتْ", uz:"Yo'qolib qoldi." }
  ],
  full_uz:"Yo'qolib qoldi.",
  note:null
},

{
  num:73,
  time:"00:04:29,802 --> 00:04:31,282",
  arabic:"إِنَّهَا فِي الشُّوفَانِ.",
  segs:[
    { ar:"إِنَّهَا", uz:"U." },
    { ar:"فِي الشُّوفَانِ", uz:"Suli bo'tqasida." }
  ],
  full_uz:"U suli bo'tqasining ichida.",
  note:null
},

{
  num:74,
  time:"00:04:31,282 --> 00:04:36,094",
  arabic:"إِنَّهُمَا وَالِدَاكَ.",
  segs:[
    { ar:"إِنَّهُمَا", uz:"Ular." },
    { ar:"وَالِدَاكَ", uz:"Sening ota-onang." }
  ],
  full_uz:"Ular ota-onang.",
  note:null
},

{
  num:75,
  time:"00:04:36,094 --> 00:04:37,571",
  arabic:"لِنَخْرُجْ مِنْ هُنَا.",
  segs:[
    { ar:"لِنَخْرُجْ", uz:"Keling, chiqaylik." },
    { ar:"مِنْ هُنَا", uz:"Bu yerdan." }
  ],
  full_uz:"Bu yerdan chiqaylik.",
  note:null
},

{
  num:76,
  time:"00:04:37,571 --> 00:04:39,559",
  arabic:"أَنْتَ، هَلْ نَسِيتَ حِذَاءَكَ؟",
  segs:[
    { ar:"أَنْتَ", uz:"Sen." },
    { ar:"هَلْ نَسِيتَ", uz:"Unutdingmi?" },
    { ar:"حِذَاءَكَ", uz:"Oyoq kiyimingni." }
  ],
  full_uz:"Sen oyoq kiyimingni unutdingmi?",
  note:null
},

{
  num:77,
  time:"00:04:39,559 --> 00:04:41,765",
  arabic:"لَا تَقْلَقْ، لَدَيَّ وَاحِدٌ آخَرُ.",
  segs:[
    { ar:"لَا تَقْلَقْ", uz:"Xavotir olma." },
    { ar:"لَدَيَّ", uz:"Menda." },
    { ar:"وَاحِدٌ آخَرُ", uz:"Yana bittasi bor." }
  ],
  full_uz:"Xavotir olma, menda yana bittasi bor.",
  note:null
},

{
  num:78,
  time:"00:04:41,765 --> 00:04:43,451",
  arabic:"مَرْحَبًا تُومْ، لَقَدْ عُدْنَا.",
  segs:[
    { ar:"مَرْحَبًا تُومْ", uz:"Salom, Tom." },
    { ar:"لَقَدْ عُدْنَا", uz:"Biz qaytdik." }
  ],
  full_uz:"Salom, Tom. Biz qaytdik.",
  note:null
},

{
  num:79,
  time:"00:04:43,451 --> 00:04:44,942",
  arabic:"لَا شَكَّ أَنَّكَ جَائِعٌ.",
  segs:[
    { ar:"لَا شَكَّ", uz:"Shubhasiz." },
    { ar:"أَنَّكَ", uz:"Sen." },
    { ar:"جَائِعٌ", uz:"Ochsan." }
  ],
  full_uz:"Shubhasiz, sen ochsan.",
  note:null
},

{
  num:80,
  time:"00:04:44,942 --> 00:04:48,230",
  arabic:"سَنُعِدُّ لَكَ الطَّعَامَ، لَكِنَّنِي أَعْدَدْتُ بَعْضَ الطَّعَامِ.",
  segs:[
    { ar:"سَنُعِدُّ لَكَ الطَّعَامَ", uz:"Senga ovqat tayyorlaymiz." },
    { ar:"لَكِنَّنِي", uz:"Lekin men." },
    { ar:"أَعْدَدْتُ بَعْضَ الطَّعَامِ", uz:"Allaqachon ovqat tayyorladim." }
  ],
  full_uz:"Senga ovqat tayyorlaymiz. — Lekin men allaqachon ovqat tayyorlab qo'ydim.",
  note:null
},
{
  num:81,
  time:"00:04:48,230 --> 00:04:51,020",
  arabic:"وَقَدْ سَخُنَ الْمَاءُ، اغْسِلَا أَيْدِيَكُمَا.",
  segs:[
    { ar:"وَقَدْ سَخُنَ الْمَاءُ", uz:"Suv ham qizib bo'ldi." },
    { ar:"اغْسِلَا", uz:"Yuvib keling." },
    { ar:"أَيْدِيَكُمَا", uz:"Ikkalangiz qo'llaringizni." }
  ],
  full_uz:"Suv ham qizib bo'ldi, ikkalangiz qo'llaringizni yuvib keling.",
  note:null
},

{
  num:82,
  time:"00:04:51,020 --> 00:04:55,031",
  arabic:"تُومْ، لَا تَلْمَسِ الْإِبْرِيقَ، إِنَّهُ سَاخِنٌ كَيْ لَا تَحْرِقَ يَدَيْكَ.",
  segs:[
    { ar:"تُومْ", uz:"Tom." },
    { ar:"لَا تَلْمَسِ الْإِبْرِيقَ", uz:"Choynakka tegma." },
    { ar:"إِنَّهُ سَاخِنٌ", uz:"U issiq." },
    { ar:"كَيْ لَا تَحْرِقَ يَدَيْكَ", uz:"Qo'llaringni kuydirib olmasliging uchun." }
  ],
  full_uz:"Tom, choynakka tegma. U issiq, qo'llaringni kuydirib olma.",
  note:null
},

{
  num:83,
  time:"00:04:55,031 --> 00:05:00,682",
  arabic:"نَعَمْ، نَعَمْ، نَعَمْ، نَعَمْ.",
  segs:[
    { ar:"نَعَمْ", uz:"Ha." }
  ],
  full_uz:"Ha, ha, ha, ha.",
  note:null
},

{
  num:84,
  time:"00:05:00,682 --> 00:05:04,078",
  arabic:"إِذَنْ نَحْنُ نَأْكُلُ الشُّوفَانَ الْيَوْمَ، عَشَاءٌ لَنَا لَذِيذٌ.",
  segs:[
    { ar:"إِذَنْ", uz:"Demak." },
    { ar:"نَحْنُ نَأْكُلُ الشُّوفَانَ الْيَوْمَ", uz:"Bugun suli bo'tqasi yeymiz." },
    { ar:"عَشَاءٌ لَنَا لَذِيذٌ", uz:"Juda mazali kechki ovqat ekan." }
  ],
  full_uz:"Demak, bugun suli bo'tqasi yeymiz. Juda mazali kechki ovqat bo'lar ekan.",
  note:null
},

{
  num:85,
  time:"00:05:04,078 --> 00:05:06,030",
  arabic:"رُبَّمَا لَدَيْنَا شَيْءٌ آخَرُ.",
  segs:[
    { ar:"رُبَّمَا", uz:"Balki." },
    { ar:"لَدَيْنَا", uz:"Bizda." },
    { ar:"شَيْءٌ آخَرُ", uz:"Boshqa narsa bordir." }
  ],
  full_uz:"Balki bizda boshqa ovqat ham bordir.",
  note:null
},

{
  num:86,
  time:"00:05:06,030 --> 00:05:11,837",
  arabic:"وَلِمَاذَا شَيْءٌ آخَرُ؟ أَنْتُمَا مَنْ قَالَ إِنَّ الشُّوفَانَ مُفِيدٌ لِلصِّحَّةِ وَيَجْعَلُنَا أَقْوَى.",
  segs:[
    { ar:"وَلِمَاذَا شَيْءٌ آخَرُ", uz:"Nega boshqa ovqat?" },
    { ar:"أَنْتُمَا مَنْ قَالَ", uz:"Axir o'zingiz aytgandingiz." },
    { ar:"إِنَّ الشُّوفَانَ مُفِيدٌ لِلصِّحَّةِ", uz:"Suli bo'tqasi sog'liq uchun foydali." },
    { ar:"وَيَجْعَلُنَا أَقْوَى", uz:"Va bizni kuchli qiladi." }
  ],
  full_uz:"Nega boshqa ovqat? Axir o'zingiz suli bo'tqasi sog'liq uchun foydali va bizni kuchli qiladi degandingiz.",
  note:null
},

{
  num:87,
  time:"00:05:11,837 --> 00:05:14,194",
  arabic:"نَعَمْ، صَحِيحٌ، هَذَا مَا قُلْنَاهُ.",
  segs:[
    { ar:"نَعَمْ", uz:"Ha." },
    { ar:"صَحِيحٌ", uz:"To'g'ri." },
    { ar:"هَذَا مَا قُلْنَاهُ", uz:"Shuni aytgan edik." }
  ],
  full_uz:"Ha, to'g'ri. Aynan shuni aytgan edik.",
  note:null
},

{
  num:88,
  time:"00:05:14,194 --> 00:05:17,410",
  arabic:"أَنَا سَعِيدٌ أَنَّ ابْنَنَا يُنْصِتُ بِانْتِبَاهٍ شَدِيدٍ.",
  segs:[
    { ar:"أَنَا سَعِيدٌ", uz:"Men xursandman." },
    { ar:"أَنَّ ابْنَنَا", uz:"O'g'limiz." },
    { ar:"يُنْصِتُ بِانْتِبَاهٍ شَدِيدٍ", uz:"Juda diqqat bilan tinglaydi." }
  ],
  full_uz:"O'g'limiz juda diqqat bilan tinglayotganidan xursandman.",
  note:null
},

{
  num:89,
  time:"00:05:17,410 --> 00:05:22,452",
  arabic:"هَذَا صَحِيحٌ.",
  segs:[
    { ar:"هَذَا", uz:"Bu." },
    { ar:"صَحِيحٌ", uz:"To'g'ri." }
  ],
  full_uz:"Bu to'g'ri.",
  note:null
},

{
  num:90,
  time:"00:05:22,452 --> 00:05:26,643",
  arabic:"صَحِيحٌ؟ مَا هَذَا؟",
  segs:[
    { ar:"صَحِيحٌ", uz:"Rostdanmi?" },
    { ar:"مَا هَذَا", uz:"Bu nima?" }
  ],
  full_uz:"Rostdanmi? Bu nima?",
  note:null
},
{
  num:91,
  time:"00:05:26,643 --> 00:05:28,792",
  arabic:"اُنْظُرْ، لَقَدْ وَجَدْتُ الْحِذَاءَ.",
  segs:[
    { ar:"اُنْظُرْ", uz:"Qara." },
    { ar:"لَقَدْ وَجَدْتُ", uz:"Topdim." },
    { ar:"الْحِذَاءَ", uz:"Oyoq kiyimni." }
  ],
  full_uz:"Qara, oyoq kiyimni topdim.",
  note:null
},

{
  num:92,
  time:"00:05:28,792 --> 00:05:29,424",
  arabic:"مَاذَا؟",
  segs:[
    { ar:"مَاذَا", uz:"Nima?" }
  ],
  full_uz:"Nima?",
  note:null
},

{
  num:93,
  time:"00:05:29,424 --> 00:05:35,446",
  arabic:"لَا شَيْءَ، أَكْمِلْ طَعَامَكَ وَلَا تُجْهِدْ تَفْكِيرَكَ.",
  segs:[
    { ar:"لَا شَيْءَ", uz:"Hech narsa." },
    { ar:"أَكْمِلْ طَعَامَكَ", uz:"Ovqatingni oxirigacha ye." },
    { ar:"وَلَا تُجْهِدْ تَفْكِيرَكَ", uz:"Boshingni qotirma." }
  ],
  full_uz:"Hech narsa. Ovqatingni oxirigacha ye, boshingni qotirma.",
  note:null
},

{
  num:94,
  time:"00:05:35,446 --> 00:05:38,197",
  arabic:"عَلَيْكَ أَكْلُ هَذَا الشُّوفَانِ، اتَّفَقْنَا؟",
  segs:[
    { ar:"عَلَيْكَ أَكْلُ", uz:"Yeyishing kerak." },
    { ar:"هَذَا الشُّوفَانِ", uz:"Mana shu suli bo'tqasini." },
    { ar:"اتَّفَقْنَا", uz:"Kelishdikmi?" }
  ],
  full_uz:"Mana shu suli bo'tqasini yeyishing kerak. Kelishdikmi?",
  note:null
},

{
  num:95,
  time:"00:05:38,197 --> 00:05:41,757",
  arabic:"وَمَنْ لَا يُكْمِلْ طَبَقَهُ لَا يَحْصُلُ عَلَى أَيِّ حَلْوَى.",
  segs:[
    { ar:"وَمَنْ", uz:"Kimki." },
    { ar:"لَا يُكْمِلْ طَبَقَهُ", uz:"Likopchasidagi ovqatni tugatmasa." },
    { ar:"لَا يَحْصُلُ", uz:"Olmaydi." },
    { ar:"عَلَى أَيِّ حَلْوَى", uz:"Hech qanday shirinlik." }
  ],
  full_uz:"Kim ovqatini oxirigacha yeb tugatmasa, hech qanday shirinlik olmaydi.",
  note:null
}
];

if (typeof module !== "undefined" && module.exports) {
    module.exports = lessons;
}