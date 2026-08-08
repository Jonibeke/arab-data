const lessons = [
  {
    "num": 1,
    "time": "00:00:30,000 --> 00:00:36,399",
    "arabic": "الْمِغْنَاطِيسُ",
    "segs": null,
    "full_uz": "Magnit.",
    "note": null
  },
  {
    "num": 2,
    "time": "00:00:40,099 --> 00:00:43,399",
    "arabic": "حَسَنًا أَحْتَاجُ إِلَى حَقِيبَةِ الْأَدَوَاتِ",
    "segs": null,
    "full_uz": "Xo'p, menga asboblar sumkasi kerak.",
    "note": null
  },
  {
    "num": 3,
    "time": "00:00:43,399 --> 00:00:55,000",
    "arabic": "مِنْ أَيْنَ أَتَى هَذَا الْبِزَالُ؟",
    "segs": null,
    "full_uz": "Bu lichinka qayerdan paydo bo'lib qoldi?",
    "note": "بِزَالٌ — bu yerda fiksiylarning energiyasi tugab, uxlab qolgan holatini bildiruvchi maxsus atama (lichinka/pilla ma'nosida)."
  },
  {
    "num": 4,
    "time": "00:01:28,000 --> 00:01:29,400",
    "arabic": "بَابُوسْ لَيْسَ هُنَا أَيْضًا",
    "segs": null,
    "full_uz": "Papus ham bu yerda emas.",
    "note": null
  },
  {
    "num": 5,
    "time": "00:01:30,000 --> 00:01:31,280",
    "arabic": "هَذَا فَظِيعٌ",
    "segs": null,
    "full_uz": "Bu dahshatli.",
    "note": null
  },
  {
    "num": 6,
    "time": "00:01:31,280 --> 00:01:34,200",
    "arabic": "أَظُنُّ أَنَّهُ سَيَخْتَفِي دَائِمًا",
    "segs": null,
    "full_uz": "Menimcha, u butunlay yo'qolib qoladi.",
    "note": null
  },
  {
    "num": 7,
    "time": "00:01:34,200 --> 00:01:35,920",
    "arabic": "لَقَدْ غَابَ خَمْسَةَ أَيَّامٍ",
    "segs": null,
    "full_uz": "U besh kundan beri yo'q.",
    "note": null
  },
  {
    "num": 8,
    "time": "00:01:35,920 --> 00:01:37,200",
    "arabic": "لَا تَقْلَقْ عَلَيْهِ",
    "segs": null,
    "full_uz": "Uning uchun xavotirlanma.",
    "note": null
  },
  {
    "num": 9,
    "time": "00:01:37,200 --> 00:01:39,239",
    "arabic": "سَنَجِدُهُ بِلَا رَيْبٍ يَا مَاسِيَا",
    "segs": null,
    "full_uz": "Uni albatta topamiz, Masya.",
    "note": null
  },
  {
    "num": 10,
    "time": "00:01:39,239 --> 00:01:40,760",
    "arabic": "أَجَلْ سَنَجِدُهُ يَا مَاسِيَا",
    "segs": null,
    "full_uz": "Ha, uni topamiz, Masya.",
    "note": null
  },
  {
    "num": 11,
    "time": "00:01:40,760 --> 00:01:42,560",
    "arabic": "لِنُلْقِ نَظْرَةً فِي الْمَطْبَخِ",
    "segs": null,
    "full_uz": "Oshxonaga bir qarab chiqaylik.",
    "note": null
  },
  {
    "num": 12,
    "time": "00:01:42,560 --> 00:01:44,299",
    "arabic": "لَكِنَّنَا بَحَثْنَا هُنَاكَ",
    "segs": null,
    "full_uz": "Lekin biz u yerni qidirgan edik.",
    "note": null
  },
  {
    "num": 13,
    "time": "00:01:44,299 --> 00:01:46,120",
    "arabic": "سَنَبْحَثُ أَكْثَرَ هَذِهِ الْمَرَّةَ",
    "segs": null,
    "full_uz": "Bu safar yanada ko'proq qidiramiz.",
    "note": null
  },
  {
    "num": 14,
    "time": "00:01:55,340 --> 00:01:57,359",
    "arabic": "لِنُلْقِ نَظْرَةً هُنَاكَ",
    "segs": null,
    "full_uz": "Bir qarab chiqaylik.",
    "note": null
  },
  {
    "num": 15,
    "time": "00:01:57,359 --> 00:02:00,640",
    "arabic": "لَقَدْ بَحَثْنَا هُنَاكَ مَرَّاتٍ عِدَّةً",
    "segs": null,
    "full_uz": "Biz u yerni bir necha marta qidirgan edik.",
    "note": null
  },
  {
    "num": 16,
    "time": "00:02:00,640 --> 00:02:03,519",
    "arabic": "سِيمْكَا، نُولِيكْ، عَنْ أَيِّ شَيْءٍ أَنْتُمَا تَبْحَثَانِ هُنَا؟",
    "segs": [
      { "ar": "سِيمْكَا، نُولِيكْ", "uz": "Simka, Nolik" },
      { "ar": "عَنْ أَيِّ شَيْءٍ أَنْتُمَا تَبْحَثَانِ هُنَا", "uz": "bu yerda nimani qidiryapsizlar" }
    ],
    "full_uz": "Simka, Nolik, bu yerda nimani qidiryapsizlar?",
    "note": null
  },
  {
    "num": 17,
    "time": "00:02:03,519 --> 00:02:05,120",
    "arabic": "لَيْسَ أَيَّ شَيْءٍ، بَلْ بَابُوسَ",
    "segs": [
      { "ar": "لَيْسَ أَيَّ شَيْءٍ", "uz": "hech narsa emas" },
      { "ar": "بَلْ بَابُوسَ", "uz": "balki Papusni" }
    ],
    "full_uz": "Hech narsa emas, balki Papusni.",
    "note": null
  },
  {
    "num": 18,
    "time": "00:02:05,120 --> 00:02:08,620",
    "arabic": "بَابُوسْ مَفْقُودٌ وَنَحْنُ نَبْحَثُ عَنْهُ فِي كُلِّ مَكَانٍ",
    "segs": [
      { "ar": "بَابُوسْ مَفْقُودٌ", "uz": "Papus yo'qolib qoldi" },
      { "ar": "وَنَحْنُ نَبْحَثُ عَنْهُ فِي كُلِّ مَكَانٍ", "uz": "va biz uni hamma joydan qidiryapmiz" }
    ],
    "full_uz": "Papus yo'qolib qoldi va biz uni hamma joydan qidiryapmiz.",
    "note": null
  },
  {
    "num": 19,
    "time": "00:02:08,620 --> 00:02:09,460",
    "arabic": "أُوهْ لَا",
    "segs": null,
    "full_uz": "Voy, yo'q.",
    "note": null
  },
  {
    "num": 20,
    "time": "00:02:09,460 --> 00:02:11,860",
    "arabic": "أَظُنُّهُ تَحَوَّلَ إِلَى بِزَالٍ الْآنَ",
    "segs": null,
    "full_uz": "Menimcha, u hozir lichinkaga aylanib qolgan.",
    "note": null
  },
  {
    "num": 21,
    "time": "00:02:11,860 --> 00:02:14,039",
    "arabic": "لِأَنَّهُ لَمْ يَعُدْ يَمْلِكُ طَاقَةً كَافِيَةً",
    "segs": null,
    "full_uz": "Chunki uning yetarli energiyasi qolmagan.",
    "note": null
  },
  {
    "num": 22,
    "time": "00:02:14,039 --> 00:02:16,079",
    "arabic": "هَلْ أُسَاعِدُكُمْ؟",
    "segs": null,
    "full_uz": "Sizlarga yordam bersammikan?",
    "note": null
  },
  {
    "num": 23,
    "time": "00:02:16,079 --> 00:02:17,159",
    "arabic": "نَتَمَنَّى ذَلِكَ",
    "segs": null,
    "full_uz": "Shuni orzu qilamiz.",
    "note": null
  },
  {
    "num": 24,
    "time": "00:02:17,159 --> 00:02:18,879",
    "arabic": "يُمْكِنُكَ أَنْ تَبْدَأَ بِحَمْلِنَا",
    "segs": null,
    "full_uz": "Bizni ko'tarib olishdan boshlasang bo'ladi.",
    "note": null
  },
  {
    "num": 25,
    "time": "00:02:18,879 --> 00:02:20,360",
    "arabic": "لَقَدْ تَعِبْنَا مِنَ الرَّكْضِ",
    "segs": null,
    "full_uz": "Yugurishdan charchadik.",
    "note": null
  },
  {
    "num": 26,
    "time": "00:02:27,360 --> 00:02:35,500",
    "arabic": "فِي الْمَوَاقِفِ الْخَطِيرَةِ يَسْتَطِيعُ الْفِيكْسِيُّ أَنْ يَتَحَوَّلَ إِلَى بِزَالٍ",
    "segs": [
      { "ar": "فِي الْمَوَاقِفِ الْخَطِيرَةِ", "uz": "xavfli vaziyatlarda" },
      { "ar": "يَسْتَطِيعُ الْفِيكْسِيُّ أَنْ يَتَحَوَّلَ إِلَى بِزَالٍ", "uz": "fiksiy lichinkaga aylana oladi" }
    ],
    "full_uz": "Xavfli vaziyatlarda fiksiy lichinkaga aylana oladi.",
    "note": null
  },
  {
    "num": 27,
    "time": "00:02:35,500 --> 00:02:38,420",
    "arabic": "لَكِنْ فِي بَعْضِ الْأَحْيَانِ يَحْدُثُ الْأَمْرُ فَجْأَةً",
    "segs": null,
    "full_uz": "Lekin ba'zida bu to'satdan yuz beradi.",
    "note": null
  },
  {
    "num": 28,
    "time": "00:02:38,420 --> 00:02:41,120",
    "arabic": "مِثْلًا عِنْدَمَا يَفْقِدُ الْفِيكْسِيُّ طَاقَتَهُ",
    "segs": null,
    "full_uz": "Masalan, fiksiy energiyasini yo'qotganida.",
    "note": null
  },
  {
    "num": 29,
    "time": "00:02:41,120 --> 00:02:45,440",
    "arabic": "عِنْدَمَا يَحْدُثُ هَذَا يَغْدُو الْفِيكْسِيُّ أَضْعَفَ شَيْئًا فَشَيْئًا",
    "segs": null,
    "full_uz": "Bu yuz berganda, fiksiy asta-sekin zaiflashib boradi,",
    "note": null
  },
  {
    "num": 30,
    "time": "00:02:45,440 --> 00:02:48,100",
    "arabic": "ثُمَّ يَخْلُدُ إِلَى النَّوْمِ مُتَحَوِّلًا إِلَى بِزَالٍ",
    "segs": null,
    "full_uz": "keyin lichinkaga aylanib, uyquga ketadi.",
    "note": null
  },
  {
    "num": 31,
    "time": "00:02:48,100 --> 00:02:52,840",
    "arabic": "مِثْلُ هَذَا يَحْدُثُ عِنْدَمَا لَا يَسْتَطِيعُ الْفِيكْسِيُّ الدُّخُولَ إِلَى جِهَازٍ مَا",
    "segs": null,
    "full_uz": "Bunday holat fiksiy biror asbobga kira olmagan paytda yuz beradi,",
    "note": null
  },
  {
    "num": 32,
    "time": "00:02:52,840 --> 00:02:54,660",
    "arabic": "وَإِعَادَةِ شَحْنِ طَاقَتِهِ",
    "segs": null,
    "full_uz": "va energiyasini qayta to'ldira olmagan paytda.",
    "note": null
  },
  {
    "num": 33,
    "time": "00:02:54,659 --> 00:02:59,659",
    "arabic": "لِهَذَا يَعْمَلُ الْفِيكْسِيُّ دَوْمًا دَاخِلَ الْأَجْهِزَةِ حَتَّى يَسْتَطِيعَ أَنْ يَحْتَفِظَ بِطَاقَتِهِ",
    "segs": [
      { "ar": "لِهَذَا يَعْمَلُ الْفِيكْسِيُّ دَوْمًا دَاخِلَ الْأَجْهِزَةِ", "uz": "shuning uchun fiksiy doim asboblar ichida ishlaydi" },
      { "ar": "حَتَّى يَسْتَطِيعَ أَنْ يَحْتَفِظَ بِطَاقَتِهِ", "uz": "energiyasini saqlab qolish uchun" }
    ],
    "full_uz": "Shuning uchun fiksiy doim asboblar ichida ishlaydi, energiyasini saqlab qolish uchun.",
    "note": null
  },
  {
    "num": 34,
    "time": "00:02:59,659 --> 00:03:03,319",
    "arabic": "أَحْيَانًا يُحَالِفُ الْحَظُّ فِيكْسِيًّا قَدْ تَحَوَّلَ إِلَى بِزَالٍ",
    "segs": null,
    "full_uz": "Ba'zida lichinkaga aylangan fiksiyga omad kulib boqadi.",
    "note": null
  },
  {
    "num": 35,
    "time": "00:03:03,319 --> 00:03:09,340",
    "arabic": "فَإِذَا وَجَدَهُ إِنْسَانٌ رَبَطَهُ بِجِهَازٍ مَا فَيَسْتَعِيدُ طَاقَتَهُ وَيَعُودُ نَشِطًا",
    "segs": [
      { "ar": "فَإِذَا وَجَدَهُ إِنْسَانٌ رَبَطَهُ بِجِهَازٍ مَا", "uz": "agar uni odam topib biror asbobga ulasa" },
      { "ar": "فَيَسْتَعِيدُ طَاقَتَهُ وَيَعُودُ نَشِطًا", "uz": "u energiyasini tiklab, yana faollashadi" }
    ],
    "full_uz": "Agar uni odam topib biror asbobga ulasa, u energiyasini tiklab, yana faollashadi.",
    "note": null
  },
  {
    "num": 36,
    "time": "00:03:09,340 --> 00:03:13,659",
    "arabic": "وَبَعْدَهَا سَيَحُلُّ نَفْسَهُ وَيَهْرُبُ تَارِكًا الْإِنْسَانَ مُتَعَجِّبًا",
    "segs": [
      { "ar": "وَبَعْدَهَا سَيَحُلُّ نَفْسَهُ وَيَهْرُبُ", "uz": "va keyin o'zini yechib, qochib qoladi" },
      { "ar": "تَارِكًا الْإِنْسَانَ مُتَعَجِّبًا", "uz": "odamni esa hayron holda qoldirib" }
    ],
    "full_uz": "Va keyin o'zini yechib, qochib qoladi, odamni esa hayron holda qoldirib.",
    "note": null
  },
  {
    "num": 37,
    "time": "00:03:13,659 --> 00:03:15,939",
    "arabic": "أَيْنَ ذَهَبَ هَذَا الْبِزَالُ؟",
    "segs": null,
    "full_uz": "Bu lichinka qayerga ketdi?",
    "note": null
  },
  {
    "num": 38,
    "time": "00:03:15,939 --> 00:03:17,599",
    "arabic": "أَنَا وَاثِقٌ بِأَنِّي رَبَطْتُهُ هُنَا",
    "segs": null,
    "full_uz": "Men uni shu yerga bog'laganimga aminman.",
    "note": null
  },
  {
    "num": 39,
    "time": "00:03:17,599 --> 00:03:20,659",
    "arabic": "كَيْفَ لِي أَنْ أَجِدَهُ؟ كَيْفَ؟",
    "segs": [
      { "ar": "كَيْفَ لِي أَنْ أَجِدَهُ", "uz": "uni qanday topaman" },
      { "ar": "كَيْفَ", "uz": "qanday qilib" }
    ],
    "full_uz": "Uni qanday topaman? Qanday qilib?",
    "note": null
  },
  {
    "num": 40,
    "time": "00:03:20,659 --> 00:03:26,740",
    "arabic": "حَسَنًا مِنْ أَيْنَ نَبْدَأُ الْبَحْثَ؟",
    "segs": null,
    "full_uz": "Xo'sh, qidiruvni qayerdan boshlaymiz?",
    "note": null
  },
  {
    "num": 41,
    "time": "00:03:26,740 --> 00:03:28,539",
    "arabic": "عَمَّا تَبْحَثُ يَا تُومْ؟",
    "segs": null,
    "full_uz": "Nimani qidiryapsan, Tom?",
    "note": null
  },
  {
    "num": 42,
    "time": "00:03:28,539 --> 00:03:29,460",
    "arabic": "فِي الْحَقِيقَةِ",
    "segs": null,
    "full_uz": "Aslida...",
    "note": null
  },
  {
    "num": 43,
    "time": "00:03:29,460 --> 00:03:31,919",
    "arabic": "وَمَا الَّذِي تَحْمِلُهُ فِي يَدِكَ؟",
    "segs": null,
    "full_uz": "Qo'lingdagi nima?",
    "note": null
  },
  {
    "num": 44,
    "time": "00:03:31,919 --> 00:03:34,319",
    "arabic": "إِنَّهَا بَعْضُ الْبِزَالَاتِ الْخَاصَّةِ بِهِ",
    "segs": null,
    "full_uz": "Bular uning o'ziga tegishli ba'zi lichinkalar.",
    "note": null
  },
  {
    "num": 45,
    "time": "00:03:34,319 --> 00:03:37,819",
    "arabic": "لَقَدْ وَجَدْتُ بِزَالًا قَبْلَ مُدَّةٍ قَدْ يَكُونُ لَكَ",
    "segs": [
      { "ar": "لَقَدْ وَجَدْتُ بِزَالًا قَبْلَ مُدَّةٍ", "uz": "bir muncha vaqt oldin bitta lichinka topgan edim" },
      { "ar": "قَدْ يَكُونُ لَكَ", "uz": "u sengaligi mumkin" }
    ],
    "full_uz": "Bir muncha vaqt oldin bitta lichinka topgan edim, u sengaligi mumkin.",
    "note": null
  },
  {
    "num": 46,
    "time": "00:03:37,819 --> 00:03:38,620",
    "arabic": "عَلَى الْأَغْلَبِ",
    "segs": null,
    "full_uz": "Ehtimol shunday.",
    "note": null
  },
  {
    "num": 47,
    "time": "00:03:38,620 --> 00:03:42,120",
    "arabic": "أَيْنَ هُوَ الْآنَ؟",
    "segs": null,
    "full_uz": "U hozir qayerda?",
    "note": null
  },
  {
    "num": 48,
    "time": "00:03:42,120 --> 00:03:45,340",
    "arabic": "هُنَا خُذْ وَلَا تَضَعْهُ ثَانِيَةً",
    "segs": [
      { "ar": "هُنَا خُذْ", "uz": "mana, ol" },
      { "ar": "وَلَا تَضَعْهُ ثَانِيَةً", "uz": "va uni yana qo'yib yuborma" }
    ],
    "full_uz": "Mana, ol, va uni yana qo'yib yuborma.",
    "note": null
  },
  {
    "num": 49,
    "time": "00:03:45,340 --> 00:03:51,780",
    "arabic": "هَلْ يَجِبُ أَنْ أَسْتَدِيرَ الْآنَ حَتَّى يَسْتَطِيعَ بَابُوسْ أَنْ يَعُودَ إِلَى طَبِيعَتِهِ؟",
    "segs": [
      { "ar": "هَلْ يَجِبُ أَنْ أَسْتَدِيرَ الْآنَ", "uz": "hozir o'girilishim kerakmi" },
      { "ar": "حَتَّى يَسْتَطِيعَ بَابُوسْ أَنْ يَعُودَ إِلَى طَبِيعَتِهِ", "uz": "Papus asl holiga qaytishi uchun" }
    ],
    "full_uz": "Hozir o'girilishim kerakmi, Papus asl holiga qaytishi uchun?",
    "note": null
  },
  {
    "num": 50,
    "time": "00:03:51,780 --> 00:03:56,379",
    "arabic": "إِنَّهُ هُنَا مُنْذُ قَرَابَةِ الْأُسْبُوعِ لَا يَمْلِكُ الطَّاقَةَ الْكَافِيَةَ لِيَعُودَ إِلَى طَبِيعَتِهِ",
    "segs": [
      { "ar": "إِنَّهُ هُنَا مُنْذُ قَرَابَةِ الْأُسْبُوعِ", "uz": "u bu yerda taxminan bir haftadan beri" },
      { "ar": "لَا يَمْلِكُ الطَّاقَةَ الْكَافِيَةَ لِيَعُودَ إِلَى طَبِيعَتِهِ", "uz": "asl holiga qaytishi uchun yetarli energiyasi yo'q" }
    ],
    "full_uz": "U bu yerda taxminan bir haftadan beri, asl holiga qaytishi uchun yetarli energiyasi yo'q.",
    "note": null
  },
  {
    "num": 51,
    "time": "00:03:56,379 --> 00:03:57,699",
    "arabic": "إِذَنْ مَا الْعَمَلُ؟",
    "segs": null,
    "full_uz": "Unda nima qilamiz?",
    "note": null
  },
  {
    "num": 52,
    "time": "00:03:57,699 --> 00:04:01,680",
    "arabic": "عَلَيْنَا أَنْ نَرْبِطَهُ بِجِهَازٍ مَا حَتَّى يَسْتَعِيدَ طَاقَتَهُ الْكَامِلَةَ",
    "segs": null,
    "full_uz": "Uni biror asbobga ulashimiz kerak, to'liq energiya olishi uchun.",
    "note": null
  },
  {
    "num": 53,
    "time": "00:04:01,680 --> 00:04:05,920",
    "arabic": "حَسَنًا لَكِنْ أَيُّ وَاحِدٍ هُوَ بَابُوسْ؟",
    "segs": [
      { "ar": "حَسَنًا", "uz": "xo'p" },
      { "ar": "لَكِنْ أَيُّ وَاحِدٍ هُوَ بَابُوسْ", "uz": "lekin qaysi biri Papus" }
    ],
    "full_uz": "Xo'p, lekin qaysi biri Papus?",
    "note": null
  },
  {
    "num": 54,
    "time": "00:04:05,920 --> 00:04:08,460",
    "arabic": "كُلُّ هَذِهِ الْبِزَالَاتِ هُنَا تَبْدُو مِثْلَ بَابُوسَ",
    "segs": null,
    "full_uz": "Bu yerdagi barcha lichinkalar Papusga o'xshab ko'rinyapti.",
    "note": null
  },
  {
    "num": 55,
    "time": "00:04:08,460 --> 00:04:11,340",
    "arabic": "سَنَسْتَعْمِلُ مِغْنَاطِيسًا",
    "segs": null,
    "full_uz": "Magnitdan foydalanamiz.",
    "note": null
  },
  {
    "num": 56,
    "time": "00:04:11,340 --> 00:04:14,719",
    "arabic": "وَلَكِنْ كُلُّ الْبِزَالَاتِ سَتُسْحَبُ بِالْمِغْنَاطِيسِ",
    "segs": null,
    "full_uz": "Lekin barcha lichinkalar magnit tomon tortiladi-ku.",
    "note": null
  },
  {
    "num": 57,
    "time": "00:04:14,719 --> 00:04:15,900",
    "arabic": "أَوَّلًا لَيْسَ كُلُّهَا",
    "segs": null,
    "full_uz": "Avvalo, hammasi ham emas.",
    "note": null
  },
  {
    "num": 58,
    "time": "00:04:15,900 --> 00:04:20,579",
    "arabic": "لَيْسَ كُلُّ أَنْوَاعِ الْمَعَادِنِ تَتَأَثَّرُ بِالْمِغْنَاطِيسِ",
    "segs": null,
    "full_uz": "Har xil metallar magnitga ta'sirlanavermaydi.",
    "note": null
  },
  {
    "num": 59,
    "time": "00:04:20,579 --> 00:04:23,160",
    "arabic": "مِنَ الْأَسْهَلِ أَنْ تَرَى بِنَفْسِكَ",
    "segs": null,
    "full_uz": "O'zing ko'rishing osonroq.",
    "note": null
  },
  {
    "num": 60,
    "time": "00:04:23,160 --> 00:04:25,160",
    "arabic": "فَقَطْ أَحْضِرْ مِغْنَاطِيسًا",
    "segs": null,
    "full_uz": "Faqat bitta magnit olib kel.",
    "note": null
  },
  {
    "num": 61,
    "time": "00:04:25,160 --> 00:04:28,120",
    "arabic": "عَلَى الْأَغْلَبِ لَدَيْكُمْ وَاحِدٌ فِي مَنْزِلِكُمْ عَلَى الْبَرَّادِ",
    "segs": null,
    "full_uz": "Ehtimol, uyingizda muzlatgichda bitta bordir.",
    "note": null
  },
  {
    "num": 62,
    "time": "00:04:28,120 --> 00:04:31,459",
    "arabic": "حَاوِلْ أَنْ تَضَعَهُ بِقُرْبِ أَشْيَاءَ مِنْ مَعَادِنَ مُخْتَلِفَةٍ",
    "segs": null,
    "full_uz": "Uni turli xil metallardan yasalgan narsalarga yaqin qo'yib ko'r,",
    "note": null
  },
  {
    "num": 63,
    "time": "00:04:31,459 --> 00:04:33,920",
    "arabic": "كَالْمَلَاعِقِ أَوِ الْمَسَامِيرِ أَوِ النُّقُودِ",
    "segs": null,
    "full_uz": "masalan, qoshiq, mixlar yoki tanga pullarga.",
    "note": null
  },
  {
    "num": 64,
    "time": "00:04:33,920 --> 00:04:39,079",
    "arabic": "سَتَلْحَظُ أَنَّ بَعْضَ الْأَجْسَامِ الْمَعْدِنِيَّةِ تَنْجَذِبُ بِقُوَّةٍ إِلَى الْمِغْنَاطِيسِ",
    "segs": null,
    "full_uz": "Ba'zi metall jismlar magnitga kuchli tortilishini sezasan,",
    "note": null
  },
  {
    "num": 65,
    "time": "00:04:39,079 --> 00:04:41,720",
    "arabic": "فِي حِينِ أَنَّ بَعْضَهَا أَقَلُّ جَذَابًا",
    "segs": null,
    "full_uz": "boshqalari esa kamroq tortiladi.",
    "note": null
  },
  {
    "num": 66,
    "time": "00:04:41,720 --> 00:04:48,340",
    "arabic": "وَسَتَجِدُ أَيْضًا أَنَّ بَعْضَ الْمَعَادِنِ لَا تَنْجَذِبُ إِلَى الْمِغْنَاطِيسِ الْبَتَّةَ",
    "segs": null,
    "full_uz": "Shuningdek, ba'zi metallar magnitga umuman tortilmasligini ham bilib olasan.",
    "note": null
  },
  {
    "num": 67,
    "time": "00:04:48,340 --> 00:04:51,040",
    "arabic": "فَهِمْتُ وَثَانِيًا",
    "segs": [
      { "ar": "فَهِمْتُ", "uz": "tushundim" },
      { "ar": "وَثَانِيًا", "uz": "va ikkinchidan" }
    ],
    "full_uz": "Tushundim, va ikkinchidan?",
    "note": null
  },
  {
    "num": 68,
    "time": "00:04:51,040 --> 00:04:56,940",
    "arabic": "ثَانِيًا نَحْنُ الْفِيكْسِزُ لَا نَتَأَثَّرُ بِالْمِغْنَاطِيسِ عِنْدَمَا نَصِيرُ بِشَكْلِ بِزَالَاتٍ",
    "segs": [
      { "ar": "ثَانِيًا نَحْنُ الْفِيكْسِزُ", "uz": "ikkinchidan, biz fiksiyalar" },
      { "ar": "لَا نَتَأَثَّرُ بِالْمِغْنَاطِيسِ عِنْدَمَا نَصِيرُ بِشَكْلِ بِزَالَاتٍ", "uz": "lichinka shakliga o'tganimizda magnitga ta'sirlanmaymiz" }
    ],
    "full_uz": "Ikkinchidan, biz fiksiyalar lichinka shakliga o'tganimizda magnitga ta'sirlanmaymiz.",
    "note": null
  },
  {
    "num": 69,
    "time": "00:04:56,940 --> 00:04:58,980",
    "arabic": "سَنُجَرِّبُ هَذَا",
    "segs": null,
    "full_uz": "Buni sinab ko'ramiz.",
    "note": null
  },
  {
    "num": 70,
    "time": "00:04:58,980 --> 00:05:04,720",
    "arabic": "لَقَدْ وَجَدْتُهُ وَالْآنَ سَنَرْبِطُهُ",
    "segs": [
      { "ar": "لَقَدْ وَجَدْتُهُ", "uz": "topdim uni" },
      { "ar": "وَالْآنَ سَنَرْبِطُهُ", "uz": "endi uni ulaymiz" }
    ],
    "full_uz": "Topdim uni, endi uni ulaymiz.",
    "note": null
  },
  {
    "num": 71,
    "time": "00:05:08,120 --> 00:05:11,500",
    "arabic": "أَتَسَاءَلُ هَلْ مِنْ فِيكْسِزَ آخَرِينَ هُنَا؟",
    "segs": null,
    "full_uz": "Bu yerda boshqa fiksiyalar bormikan, deb o'ylayapman.",
    "note": null
  },
  {
    "num": 72,
    "time": "00:05:11,500 --> 00:05:13,819",
    "arabic": "أَلَا نَكْفِي نَحْنُ فِي نَظَرِكَ؟",
    "segs": null,
    "full_uz": "Nazaringda, biz yetarli emasmizmi?",
    "note": null
  },
  {
    "num": 73,
    "time": "00:05:13,819 --> 00:05:15,939",
    "arabic": "بَلَى لَكِنْ كُنْتُ أَتَسَاءَلُ",
    "segs": [
      { "ar": "بَلَى", "uz": "aksincha, yetarlisiz" },
      { "ar": "لَكِنْ كُنْتُ أَتَسَاءَلُ", "uz": "lekin shunchaki o'ylayotgan edim" }
    ],
    "full_uz": "Aksincha, yetarlisiz, lekin shunchaki o'ylayotgan edim.",
    "note": null
  },
  {
    "num": 74,
    "time": "00:05:15,939 --> 00:05:18,360",
    "arabic": "لَا شَيْءَ",
    "segs": null,
    "full_uz": "Hech narsa.",
    "note": null
  },
  {
    "num": 75,
    "time": "00:05:18,360 --> 00:05:20,740",
    "arabic": "انْظُرَا لَقَدِ اخْتَفَى ذَلِكَ الْبِزَالُ",
    "segs": [
      { "ar": "انْظُرَا", "uz": "qaranglar" },
      { "ar": "لَقَدِ اخْتَفَى ذَلِكَ الْبِزَالُ", "uz": "o'sha lichinka yo'qolib qoldi" }
    ],
    "full_uz": "Qaranglar, o'sha lichinka yo'qolib qoldi.",
    "note": null
  },
  {
    "num": 76,
    "time": "00:05:20,740 --> 00:05:24,120",
    "arabic": "مَا رَأْيُكُمْ؟ بَعْدَ أَنِ اسْتَعَادَ طَاقَتَهُ حَلَّ نَفْسَهُ",
    "segs": [
      { "ar": "مَا رَأْيُكُمْ", "uz": "nima deysizlar" },
      { "ar": "بَعْدَ أَنِ اسْتَعَادَ طَاقَتَهُ حَلَّ نَفْسَهُ", "uz": "energiyasini tiklagach, o'zini yechib qochib qolgan" }
    ],
    "full_uz": "Nima deysizlar? Energiyasini tiklagach, o'zini yechib qochib qolgan.",
    "note": null
  },
  {
    "num": 77,
    "time": "00:05:24,120 --> 00:05:32,319",
    "arabic": "لِمَا لَا تَأْخُذُ اسْتِرَاحَةً بَعْدَ هَذِهِ الْمُغَامَرَاتِ الطَّوِيلَةِ؟",
    "segs": null,
    "full_uz": "Bu uzoq sarguzashtlardan keyin dam olsang bo'lmasmi?",
    "note": null
  },
  {
    "num": 78,
    "time": "00:05:32,319 --> 00:05:35,160",
    "arabic": "لَا شُكْرًا لَقَدِ اسْتَرَاحَتْ كَثِيرًا عَلَى كُلِّ حَالٍ",
    "segs": [
      { "ar": "لَا شُكْرًا", "uz": "yo'q, rahmat" },
      { "ar": "لَقَدِ اسْتَرَاحَتْ كَثِيرًا عَلَى كُلِّ حَالٍ", "uz": "u baribir yetarlicha dam oldi" }
    ],
    "full_uz": "Yo'q, rahmat, u baribir yetarlicha dam oldi.",
    "note": null
  },
  {
    "num": 79,
    "time": "00:05:35,160 --> 00:05:37,740",
    "arabic": "هَذَا شَيْءٌ أَرَدْتُ فِعْلَهُ مُنْذُ زَمَنٍ طَوِيلٍ",
    "segs": null,
    "full_uz": "Bu men uzoq vaqtdan beri qilmoqchi bo'lgan narsa edi.",
    "note": null
  }
];
if (typeof module !== "undefined" && module.exports) {
  module.exports = lessons;
}
