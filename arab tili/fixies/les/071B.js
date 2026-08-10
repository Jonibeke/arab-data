const lessons = [
  {
    "num": 1,
    "time": "00:00:32,980 --> 00:00:42,160",
    "arabic": "الْفُرْنُ",
    "segs": null,
    "full_uz": "Pech.",
    "note": null
  },
  {
    "num": 2,
    "time": "00:00:38,399 --> 00:00:50,120",
    "arabic": "وَالْآنَ إِلَيْكُمْ بَهْلَوَانُنَا الْجَرِيءُ، نُولِيكْ! تَوَقَّفْ! أَنَا لَسْتُ نُولِيكْ، أَنَا بَهْلَوَانٌ!",
    "segs": [
      { "ar": "وَالْآنَ إِلَيْكُمْ بَهْلَوَانُنَا الْجَرِيءُ، نُولِيكْ", "uz": "va endi sizga bizning jasur bahlavonimiz — Nolikni taqdim etamiz" },
      { "ar": "تَوَقَّفْ! أَنَا لَسْتُ نُولِيكْ", "uz": "to'xta! Men Nolik emasman" },
      { "ar": "أَنَا بَهْلَوَانٌ!", "uz": "men bahlavonman!" }
    ],
    "full_uz": "Va endi sizga bizning jasur bahlavonimiz — Nolikni taqdim etamiz! To'xta! Men Nolik emasman, men bahlavonman!",
    "note": "بَهْلَوَان — sirk artisti, jonglyor, tomoshabop harakatlar ko'rsatuvchi shaxs degan ma'noni bildiradi."
  },
  {
    "num": 3,
    "time": "00:00:50,120 --> 00:01:01,359",
    "arabic": "سَوْفَ تَقَعُ! لَنْ أَقَعَ! كَالْعَادَةِ، وَفِي كُلِّ مَرَّةٍ الْقِصَّةُ الْقَدِيمَةُ نَفْسُهَا",
    "segs": [
      { "ar": "سَوْفَ تَقَعُ! لَنْ أَقَعَ!", "uz": "yiqilib tushasan! Yiqilmayman!" },
      { "ar": "كَالْعَادَةِ، وَفِي كُلِّ مَرَّةٍ الْقِصَّةُ الْقَدِيمَةُ نَفْسُهَا", "uz": "odatdagidek, har safar xuddi o'sha eski voqea" }
    ],
    "full_uz": "Yiqilib tushasan! Yiqilmayman! Odatdagidek, har safar xuddi o'sha eski voqea.",
    "note": null
  },
  {
    "num": 4,
    "time": "00:00:53,960 --> 00:01:07,199",
    "arabic": "يُقْحِمُ نَفْسَهُ فِي الْمَتَاعِبِ وَعَلَيَّ إِخْرَاجُهُ! لَا! لَا! لَا! إِنِّي أَقَعُ!",
    "segs": [
      { "ar": "يُقْحِمُ نَفْسَهُ فِي الْمَتَاعِبِ وَعَلَيَّ إِخْرَاجُهُ", "uz": "o'zini balo-qazoga uradi-yu, uni qutqarish mening bo'ynimga tushadi" },
      { "ar": "لَا! لَا! لَا! إِنِّي أَقَعُ!", "uz": "yo'q! Yo'q! Yo'q! Men yiqilyapman!" }
    ],
    "full_uz": "O'zini balo-qazoga uradi-yu, uni qutqarish mening bo'ynimga tushadi! Yo'q! Yo'q! Yo'q! Men yiqilyapman!",
    "note": "يُقْحِمُ نَفْسَهُ فِي — o'zini biror narsaga (muammoga) urib kirmoq, boshini balo-qazoga tiqmoq ma'nosidagi ibora."
  },
  {
    "num": 5,
    "time": "00:01:00,000 --> 00:01:01,000",
    "arabic": "انْتَبِهْ",
    "segs": null,
    "full_uz": "Ehtiyot bo'l.",
    "note": null
  },
  {
    "num": 6,
    "time": "00:01:02,500 --> 00:01:03,500",
    "arabic": "خَدَعْتُكُمَا",
    "segs": null,
    "full_uz": "Sizlar ikkovingizni aldadim.",
    "note": "-كُمَا qo'shimchasi ikkilik (dual) shaklda bo'lib, aynan \"sizlar ikkovingiz\"ga qaratilgan murojaatni bildiradi — arab tilida ikki kishiga alohida grammatik shakl ishlatiladi."
  },
  {
    "num": 7,
    "time": "00:01:04,000 --> 00:01:06,000",
    "arabic": "نُولِيكْ، يَا لَكَ مِنْ طَائِشٍ",
    "segs": null,
    "full_uz": "Nolik, sen qanaqa beparvosan-a!",
    "note": "يَا لَكَ مِنْ... — hayrat yoki ta'ajjub bildiruvchi qolip bo'lib, \"sen qanaqasan o'zi...\" ma'nosini beradi."
  },
  {
    "num": 8,
    "time": "00:01:09,500 --> 00:01:11,000",
    "arabic": "سِيمْكَا، تُولَا",
    "segs": null,
    "full_uz": "Simka, Tola.",
    "note": null
  },
  {
    "num": 9,
    "time": "00:01:11,500 --> 00:01:13,500",
    "arabic": "نَحْنُ هُنَا، فِي الْأَسْفَلِ",
    "segs": null,
    "full_uz": "Biz shu yerdamiz, pastda.",
    "note": null
  },
  {
    "num": 10,
    "time": "00:01:16,500 --> 00:01:18,500",
    "arabic": "انْظُرُوا مَنْ أَقْحَمَ نَفْسَهُ فِي الْمَتَاعِبِ",
    "segs": null,
    "full_uz": "Qarang, kim o'zini balo-qazoga urib qo'yibdi.",
    "note": null
  },
  {
    "num": 11,
    "time": "00:01:18,500 --> 00:01:20,000",
    "arabic": "هَذَا لَيْسَ مُضْحِكًا أَبَدًا",
    "segs": null,
    "full_uz": "Bu umuman kulgili emas.",
    "note": null
  },
  {
    "num": 12,
    "time": "00:01:20,000 --> 00:01:21,000",
    "arabic": "هَلْ أُسَاعِدُكُمْ؟",
    "segs": null,
    "full_uz": "Sizlarga yordam beraymi?",
    "note": null
  },
  {
    "num": 13,
    "time": "00:01:21,000 --> 00:01:24,500",
    "arabic": "لَا نَحْتَاجُ إِلَى مُسَاعَدَتِكَ أَبَدًا، أَلَيْسَ كَذَلِكَ؟",
    "segs": [
      { "ar": "لَا نَحْتَاجُ إِلَى مُسَاعَدَتِكَ أَبَدًا", "uz": "bizga sening yordaming umuman kerak emas" },
      { "ar": "أَلَيْسَ كَذَلِكَ؟", "uz": "shunday emasmi?" }
    ],
    "full_uz": "Bizga sening yordaming umuman kerak emas, shunday emasmi?",
    "note": "أَلَيْسَ كَذَلِكَ؟ — tasdiqni kuchaytirish uchun so'z oxirida qo'llanadigan so'roq qolipi, o'zbekchadagi \"shunday emasmi?\" ga to'g'ri keladi."
  },
  {
    "num": 14,
    "time": "00:01:24,500 --> 00:01:26,500",
    "arabic": "حَسَنًا إِذًا، إِلَى اللِّقَاءِ",
    "segs": null,
    "full_uz": "Xo'p unday bo'lsa, xayr.",
    "note": null
  },
  {
    "num": 15,
    "time": "00:01:27,000 --> 00:01:28,500",
    "arabic": "يَجِبُ أَنْ نَخْرُجَ مِنْ هُنَا",
    "segs": null,
    "full_uz": "Biz bu yerdan chiqishimiz kerak.",
    "note": null
  },
  {
    "num": 16,
    "time": "00:01:30,000 --> 00:01:31,859",
    "arabic": "مُشْكِلَةٌ! إِنَّ أَبَا تُومَ قَادِمٌ",
    "segs": null,
    "full_uz": "Muammo! Tomning otasi kelyapti.",
    "note": "أَبَا — \"أَب\" (ota) so'zining إنّ dan keyingi mansub (akkuzativ) shakli; bu so'z besh maxsus ismdan (أسماء خمسة) biri bo'lgani uchun oxiri harflar bilan o'zgaradi."
  },
  {
    "num": 17,
    "time": "00:01:31,859 --> 00:01:46,680",
    "arabic": "مَرْحَبًا يَا تُومَ",
    "segs": null,
    "full_uz": "Salom, Tom.",
    "note": null
  },
  {
    "num": 18,
    "time": "00:01:46,680 --> 00:01:47,879",
    "arabic": "أَهْلًا يَا نُولِيكْ",
    "segs": null,
    "full_uz": "Salom, Nolik.",
    "note": null
  },
  {
    "num": 19,
    "time": "00:01:47,879 --> 00:01:49,299",
    "arabic": "هَلْ تَرْغَبُ فِي جَوْلَةٍ؟",
    "segs": null,
    "full_uz": "Sayr qilishni xohlaysanmi?",
    "note": null
  },
  {
    "num": 20,
    "time": "00:01:49,299 --> 00:01:51,260",
    "arabic": "لِأَنَّ هَذَا الْقِطَارَ سَوْفَ يُغَادِرُ",
    "segs": null,
    "full_uz": "Chunki bu poyezd hozir jo'nab ketadi.",
    "note": null
  },
  {
    "num": 21,
    "time": "00:01:51,260 --> 00:01:58,280",
    "arabic": "مَكَانٌ لَطِيفٌ",
    "segs": null,
    "full_uz": "Yoqimli joy ekan.",
    "note": null
  },
  {
    "num": 22,
    "time": "00:01:58,280 --> 00:01:59,099",
    "arabic": "إِنَّهُ فُرْنٌ",
    "segs": null,
    "full_uz": "Bu pech-ku.",
    "note": null
  },
  {
    "num": 23,
    "time": "00:01:59,099 --> 00:02:02,859",
    "arabic": "الْمَكَانُ جَمِيلٌ هُنَا وَلَيْسَ سَاخِنًا رَائِعٌ",
    "segs": null,
    "full_uz": "Bu yer chiroyli ekan, hali issiq ham emas, ajoyib.",
    "note": null
  },
  {
    "num": 24,
    "time": "00:02:02,859 --> 00:02:06,939",
    "arabic": "هُوَ لَيْسَ سَاخِنًا لِأَنَّهُ بَدَأَ يَسْخُنُ الْآنَ",
    "segs": null,
    "full_uz": "U issiq emas, chunki hozirgina qizishni boshladi.",
    "note": null
  },
  {
    "num": 25,
    "time": "00:02:06,939 --> 00:02:12,840",
    "arabic": "الْفُرْنُ هُوَ خِزَانَةٌ مَعَ سَخَّانٍ",
    "segs": null,
    "full_uz": "Pech — bu isitgichli shkaf.",
    "note": null
  },
  {
    "num": 26,
    "time": "00:02:12,840 --> 00:02:17,099",
    "arabic": "يُصْبِحُ شَدِيدَ السُّخُونَةِ مِنَ الدَّاخِلِ سُخُونَةً تَشْوِي أَيَّ شَيْءٍ",
    "segs": null,
    "full_uz": "Uning ichi shu qadar qiziydiki, istagan narsani qovurib yuboradi.",
    "note": null
  },
  {
    "num": 27,
    "time": "00:02:17,780 --> 00:02:20,199",
    "arabic": "فِي الْحَقِيقَةِ هَذَا هُوَ عَمَلُ الْفُرْنِ",
    "segs": null,
    "full_uz": "Aslida pechning vazifasi ham shu.",
    "note": null
  },
  {
    "num": 28,
    "time": "00:02:20,199 --> 00:02:23,099",
    "arabic": "يَشْوِي النَّاسُ اللَّحْمَ فِيهِ وَيَخْبِزُونَ أَيْضًا",
    "segs": null,
    "full_uz": "Odamlar unda go'sht qovuradi va non ham pishiradi.",
    "note": null
  },
  {
    "num": 29,
    "time": "00:02:23,719 --> 00:02:27,079",
    "arabic": "بَعْضُ الْأَفْرَانِ تَعْمَلُ بِالْغَازِ وَبَعْضُهَا يَعْمَلُ بِالْكَهْرَبَاءِ",
    "segs": null,
    "full_uz": "Ba'zi pechlar gaz bilan, ba'zilari esa elektr bilan ishlaydi.",
    "note": null
  },
  {
    "num": 30,
    "time": "00:02:27,080 --> 00:02:30,840",
    "arabic": "وَفِيهَا لَفَائِفُ كَهْرَبَائِيَّةٌ تُصْبِحُ حَمْرَاءَ سَاخِنَةً",
    "segs": null,
    "full_uz": "Ularning ichida qizib qizarib ketadigan elektr spirallari bor,",
    "note": null
  },
  {
    "num": 31,
    "time": "00:02:30,840 --> 00:02:33,180",
    "arabic": "لِتُسَخِّنَ كُلَّ شَيْءٍ دَاخِلَ الْفُرْنِ",
    "segs": null,
    "full_uz": "pechning ichidagi hamma narsani isitish uchun.",
    "note": null
  },
  {
    "num": 32,
    "time": "00:02:33,180 --> 00:02:35,439",
    "arabic": "لِذَا كُنْ حَذِرًا وَأَنْتَ بِجُوَارِهَا",
    "segs": null,
    "full_uz": "Shuning uchun ular yonida bo'lganingda ehtiyot bo'l,",
    "note": null
  },
  {
    "num": 33,
    "time": "00:02:35,439 --> 00:02:38,140",
    "arabic": "لِأَنَّ الْفُرْنَ السَّاخِنَ قَدْ يَحْرِقُكَ بِشِدَّةٍ",
    "segs": null,
    "full_uz": "chunki qaynoq pech seni qattiq kuydirib yuborishi mumkin.",
    "note": null
  },
  {
    "num": 34,
    "time": "00:02:38,140 --> 00:02:46,520",
    "arabic": "أَصْبَحَ الْجَوُّ شَدِيدَ الْحَرَارَةِ",
    "segs": null,
    "full_uz": "Havo juda issiq bo'lib qoldi.",
    "note": null
  },
  {
    "num": 35,
    "time": "00:02:46,520 --> 00:02:49,900",
    "arabic": "يَجِبُ أَنْ نَخْرُجَ مِنْ هَذَا الْفُرْنِ الْآنَ",
    "segs": null,
    "full_uz": "Biz hozir shu pechdan chiqishimiz kerak.",
    "note": null
  },
  {
    "num": 36,
    "time": "00:02:49,900 --> 00:02:53,980",
    "arabic": "سِيمْكَا، نَحْنُ عَلَى وَشْكِ أَنْ نُشْوَى هُنَا",
    "segs": null,
    "full_uz": "Simka, biz shu yerda qovurilib ketish arafasidamiz.",
    "note": "عَلَى وَشْكِ أَنْ... — biror voqea sodir bo'lish arafasida ekanlikni bildiruvchi ibora, \"deyarli... bo'lmoqchi\" ma'nosini beradi."
  },
  {
    "num": 37,
    "time": "00:02:53,979 --> 00:02:58,159",
    "arabic": "أَجَلْ دَاخِلَ كَعْكَةِ فِيكْسِي كَبِيرَةٍ وَطَازَجَةٍ",
    "segs": null,
    "full_uz": "Ha, katta va yangi pishirilgan fiksi keki ichida.",
    "note": null
  },
  {
    "num": 38,
    "time": "00:02:58,159 --> 00:02:59,479",
    "arabic": "لَا أُرِيدُ ذَلِكَ",
    "segs": null,
    "full_uz": "Buni xohlamayman.",
    "note": null
  },
  {
    "num": 39,
    "time": "00:02:59,479 --> 00:03:00,979",
    "arabic": "وَلَا أَنَا أُرِيدُ",
    "segs": null,
    "full_uz": "Men ham xohlamayman.",
    "note": null
  },
  {
    "num": 40,
    "time": "00:03:00,979 --> 00:03:14,259",
    "arabic": "هَيَّا تَمَسَّكِي بِقُوَّةٍ",
    "segs": null,
    "full_uz": "Qani, mahkam ushlab ol.",
    "note": "تَمَسَّكِي — buyruq fe'lining ayol shaxsga qaratilgan shakli (feminine imperative), oxiridagi ي harfi buni ko'rsatadi."
  },
  {
    "num": 41,
    "time": "00:03:14,259 --> 00:03:17,719",
    "arabic": "مِنْ هُنَا",
    "segs": null,
    "full_uz": "Bu yerdan.",
    "note": null
  },
  {
    "num": 42,
    "time": "00:03:23,979 --> 00:03:26,759",
    "arabic": "كُنْ حَذِرًا سَتَقَعُ",
    "segs": null,
    "full_uz": "Ehtiyot bo'l, yiqilib tushasan.",
    "note": null
  },
  {
    "num": 43,
    "time": "00:03:26,759 --> 00:03:30,879",
    "arabic": "أَنْتَ مِثْلُ سَمَكَةٍ",
    "segs": null,
    "full_uz": "Sen xuddi baliqqa o'xshaysan.",
    "note": null
  },
  {
    "num": 44,
    "time": "00:03:30,879 --> 00:03:33,459",
    "arabic": "قَالَتْ لِيَ الْكَلَامَ نَفْسَهُ ثُمَّ سَقَطَتْ هِيَ",
    "segs": null,
    "full_uz": "U ham menga xuddi shu gapni aytdi-yu, keyin o'zi yiqildi.",
    "note": null
  },
  {
    "num": 45,
    "time": "00:03:33,459 --> 00:03:36,179",
    "arabic": "سَقَطَتْ فِي الْكَعْكَةِ وَمَعَهَا تُولَا",
    "segs": null,
    "full_uz": "Kekka yiqildi, u bilan birga Tola ham.",
    "note": null
  },
  {
    "num": 46,
    "time": "00:03:36,179 --> 00:03:39,879",
    "arabic": "مَاذَا؟ سَقَطَتْهَا فِي الْكَعْكَةِ؟",
    "segs": null,
    "full_uz": "Nima? Uni kekka yiqitib yuborganmisan?",
    "note": null
  },
  {
    "num": 47,
    "time": "00:03:39,879 --> 00:03:42,679",
    "arabic": "أَجَلْ وَأَظُنُّهُمَا لَا تَزَالَانِ عَالِقَتَيْنِ",
    "segs": null,
    "full_uz": "Ha, va menimcha ular ikkovi hali ham qolib ketishgan.",
    "note": "لَا تَزَالَانِ / عَالِقَتَيْنِ — ikkilik (dual) fe'l va sifat shakllari, ikki ayol/qiz haqida gap ketganda alohida qo'llaniladi."
  },
  {
    "num": 48,
    "time": "00:03:42,679 --> 00:03:43,519",
    "arabic": "تُومُ",
    "segs": null,
    "full_uz": "Tom!",
    "note": null
  },
  {
    "num": 49,
    "time": "00:03:43,519 --> 00:03:47,379",
    "arabic": "خَرَجَتِ الْكَعْكَةُ مِنَ الْفُرْنِ هَلْ تُرِيدُ تَذَوُّقَهَا؟",
    "segs": null,
    "full_uz": "Kek pechdan chiqdi, tatib ko'rishni xohlaysanmi?",
    "note": null
  },
  {
    "num": 50,
    "time": "00:03:47,379 --> 00:03:50,159",
    "arabic": "تَرِينَهُمَا؟",
    "segs": null,
    "full_uz": "Ularning ikkovini ko'ryapsanmi?",
    "note": "تَرِينَ — ayol shaxsga qaratilgan mudori fe'l shakli (\"sen ko'rasan\"), -هُمَا esa ikkilik (dual) obyekt olmoshi bo'lib, \"ularning ikkovini\" ma'nosini beradi."
  },
  {
    "num": 51,
    "time": "00:03:50,159 --> 00:03:54,020",
    "arabic": "لَا أَعْلَمُ رُبَّمَا دَاخِلَ الْكَعْكَةِ تَحَوَّلَتْ إِلَى مَسَامِيرَ",
    "segs": null,
    "full_uz": "Bilmadim, balki kek ichida mixlarga aylanib qolishgandir.",
    "note": null
  },
  {
    "num": 52,
    "time": "00:03:54,020 --> 00:03:55,780",
    "arabic": "يَجِبُ أَنْ نَجِدَهُمَا",
    "segs": null,
    "full_uz": "Ularning ikkovini topishimiz kerak.",
    "note": null
  },
  {
    "num": 53,
    "time": "00:03:55,780 --> 00:04:00,159",
    "arabic": "مَاذَا تَفْعَلُ؟",
    "segs": null,
    "full_uz": "Nima qilyapsan?",
    "note": null
  },
  {
    "num": 54,
    "time": "00:04:01,180 --> 00:04:03,599",
    "arabic": "كُلْ وَتَوَقَّفْ عَنِ اللَّعِبِ",
    "segs": null,
    "full_uz": "Yeb ol-da, o'ynashni bas qil.",
    "note": "تَوَقَّفَ عَنْ... — \"biror narsadan to'xtamoq, voz kechmoq\" ma'nosini beruvchi fe'l-predlog birikmasi."
  },
  {
    "num": 55,
    "time": "00:04:03,599 --> 00:04:06,579",
    "arabic": "هَاي انْتَبِهْ فَقَدْ تُكَسِّرُ أَسْنَانَكَ",
    "segs": null,
    "full_uz": "Hoy, ehtiyot bo'l, tishlaring sinib qolishi mumkin.",
    "note": null
  },
  {
    "num": 56,
    "time": "00:04:06,579 --> 00:04:13,240",
    "arabic": "لَمْ تَكُنِ الْأَفْرَانُ الْأُولَى فِي الْبُيُوتِ الْقَدِيمَةِ أَكْثَرَ مِنْ حُفَرٍ بَسِيطَةٍ مِنَ النَّارِ",
    "segs": null,
    "full_uz": "Qadimgi uylardagi ilk pechlar oddiy o't chuqurchalaridan boshqa narsa emas edi.",
    "note": null
  },
  {
    "num": 57,
    "time": "00:04:13,240 --> 00:04:17,319",
    "arabic": "وَكَانَ النَّاسُ يَطْهُونَ بِالْفَحْمِ السَّاخِنِ وَفِيمَا بَعْدُ تَمَّ اخْتِرَاعُ الْمَوْقِدِ",
    "segs": [
      { "ar": "وَكَانَ النَّاسُ يَطْهُونَ بِالْفَحْمِ السَّاخِنِ", "uz": "odamlar qizigan ko'mirda ovqat pishirishardi" },
      { "ar": "وَفِيمَا بَعْدُ تَمَّ اخْتِرَاعُ الْمَوْقِدِ", "uz": "keyinroq esa o'choq ixtiro qilindi" }
    ],
    "full_uz": "Odamlar qizigan ko'mirda ovqat pishirishardi, keyinroq esa o'choq ixtiro qilindi.",
    "note": null
  },
  {
    "num": 58,
    "time": "00:04:17,319 --> 00:04:21,040",
    "arabic": "كَانَ كُلُّ بَيْتٍ فِيهِ مَوْقِدٌ مِنَ الْحَجَرِ أَوِ الطِّينِ أَوِ الْمَعْدِنِ",
    "segs": null,
    "full_uz": "Har bir uyda tosh, loy yoki metalldan yasalgan o'choq bo'lardi.",
    "note": null
  },
  {
    "num": 59,
    "time": "00:04:21,040 --> 00:04:23,779",
    "arabic": "وَكَانَ النَّاسُ يُحْرِقُونَ فِيهِ الْخَشَبَ أَوِ الْفَحْمَ",
    "segs": null,
    "full_uz": "Odamlar unda yog'och yoki ko'mir yoqishardi.",
    "note": null
  },
  {
    "num": 60,
    "time": "00:04:23,779 --> 00:04:28,180",
    "arabic": "حَرَارَةُ هَذِهِ الْمَوَاقِدِ كَافِيَةٌ لِصُنْعِ الْحِسَاءِ أَوْ خَبْزِ الْكَعْكِ",
    "segs": null,
    "full_uz": "Bu o'choqlarning issiqligi sho'rva pishirish yoki kek yopish uchun yetarli edi.",
    "note": null
  },
  {
    "num": 61,
    "time": "00:04:28,180 --> 00:04:31,480",
    "arabic": "وَفِي الْقَرْنِ التَّاسِعَ عَشَرَ تَمَّ اخْتِرَاعُ مَوْقِدِ الْغَازِ",
    "segs": null,
    "full_uz": "O'n to'qqizinchi asrda esa gaz plitasi ixtiro qilindi.",
    "note": "التَّاسِعَ عَشَرَ — \"o'n to'qqizinchi\" ma'nosini beruvchi tartib son shakli."
  },
  {
    "num": 62,
    "time": "00:04:31,480 --> 00:04:34,980",
    "arabic": "وَهِيَ عَمَلِيَّةٌ أَكْثَرُ مِنْ مَوَاقِدِ الْفَحْمِ وَالْخَشَبِ الْقَدِيمَةِ",
    "segs": null,
    "full_uz": "U eski ko'mir va yog'och o'choqlariga qaraganda ancha qulayroq edi.",
    "note": null
  },
  {
    "num": 63,
    "time": "00:04:34,980 --> 00:04:37,300",
    "arabic": "فِي ثَانِيَةٍ وَاحِدَةٍ يَحْتَرِقُ الْغَازُ",
    "segs": null,
    "full_uz": "Bir soniyada gaz yonib ketadi,",
    "note": null
  },
  {
    "num": 64,
    "time": "00:04:37,300 --> 00:04:39,279",
    "arabic": "وَفِي بِضْعِ دَقَائِقَ يَغْلِي الْمَاءُ",
    "segs": null,
    "full_uz": "va bir necha daqiqada suv qaynaydi.",
    "note": null
  },
  {
    "num": 65,
    "time": "00:04:39,279 --> 00:04:42,759",
    "arabic": "هَذِهِ الْمَوَاقِدُ مُنَاسِبَةٌ جِدًّا وَلَكِنَّهَا خَطِيرَةٌ",
    "segs": null,
    "full_uz": "Bu o'choqlar juda qulay, lekin xavflidir,",
    "note": null
  },
  {
    "num": 66,
    "time": "00:04:42,759 --> 00:04:45,800",
    "arabic": "لِأَنَّهُ إِنْ لَمْ تَكُنِ الْأَنَابِيبُ فِي حَالٍ جَيِّدَةٍ",
    "segs": null,
    "full_uz": "chunki agar quvurlar yaxshi holatda bo'lmasa,",
    "note": null
  },
  {
    "num": 67,
    "time": "00:04:45,800 --> 00:04:47,680",
    "arabic": "فَمِنَ الْمُمْكِنِ أَنْ تَنْفَجِرَ",
    "segs": null,
    "full_uz": "portlab ketishi mumkin.",
    "note": null
  },
  {
    "num": 68,
    "time": "00:04:47,680 --> 00:04:51,759",
    "arabic": "وَالْيَوْمَ هُنَاكَ أَفْرَانٌ وَمَوَاقِدُ تَعْمَلُ بِاسْتِعْمَالِ الْكَهْرَبَاءِ",
    "segs": null,
    "full_uz": "Bugungi kunda elektr bilan ishlaydigan pech va plitalar ham bor,",
    "note": null
  },
  {
    "num": 69,
    "time": "00:04:51,759 --> 00:04:56,740",
    "arabic": "وَتُسْتَعْمَلُ فِيهَا أَدَوَاتُ تَسْخِينٍ لِلْقَلْيِ وَالْغَلْيِ وَخَبْزِ الطَّعَامِ مِنْ غَيْرِ نَارٍ",
    "segs": null,
    "full_uz": "ularda ovqatni olovsiz qovurish, qaynatish va pishirish uchun isitish asboblari ishlatiladi.",
    "note": null
  },
  {
    "num": 70,
    "time": "00:04:56,740 --> 00:05:06,199",
    "arabic": "تُومُ أَظُنُّكَ سَتَنْفَجِرُ",
    "segs": null,
    "full_uz": "Tom, menimcha sen portlab ketasan.",
    "note": null
  },
  {
    "num": 71,
    "time": "00:05:06,199 --> 00:05:11,080",
    "arabic": "لَكِنَّهَا لَذِيذَةٌ وَلَا يُمْكِنُنِي الْمُقَاوَمَةَ",
    "segs": null,
    "full_uz": "Lekin u shunday mazaliki, o'zimni tiyib turolmayapman.",
    "note": null
  },
  {
    "num": 72,
    "time": "00:05:11,080 --> 00:05:15,240",
    "arabic": "وَاصِلِ الْمَضْغَ يَا تُومُ",
    "segs": null,
    "full_uz": "Chaynashda davom et, Tom.",
    "note": null
  },
  {
    "num": 73,
    "time": "00:05:15,240 --> 00:05:20,420",
    "arabic": "هَذَا كُلُّ مَا أَسْتَطِيعُ مَضْغَهُ",
    "segs": null,
    "full_uz": "Chaynay oladigan narsam shu, xolos.",
    "note": null
  },
  {
    "num": 74,
    "time": "00:05:20,420 --> 00:05:23,240",
    "arabic": "مَرْحَبًا مَاذَا تَفْعَلَانِ؟",
    "segs": null,
    "full_uz": "Salom, ikkovingiz nima qilyapsizlar?",
    "note": "تَفْعَلَانِ — ikkilik (dual) fe'l shakli bo'lib, \"ikkovingiz nima qilyapsizlar\" ma'nosini beradi."
  },
  {
    "num": 75,
    "time": "00:05:24,699 --> 00:05:27,960",
    "arabic": "نَفْعَلُ؟ نُحَاوِلُ امْتِصَاصَكُمَا",
    "segs": null,
    "full_uz": "Nima qilamiz? Sizlarning ikkovingizni so'rib olishga harakat qilyapmiz.",
    "note": null
  },
  {
    "num": 76,
    "time": "00:05:27,960 --> 00:05:33,379",
    "arabic": "كُنْتُمَا فِي الْكَعْكَةِ؟ وَلِمَاذَا أَكَلْتَ كُلَّ هَذَا؟ كِدْتُ أَنْفَجِرُ",
    "segs": [
      { "ar": "كُنْتُمَا فِي الْكَعْكَةِ؟", "uz": "ikkovingiz kek ichida edinglarmi?" },
      { "ar": "وَلِمَاذَا أَكَلْتَ كُلَّ هَذَا؟", "uz": "va nega buning hammasini yeb qo'yding?" },
      { "ar": "كِدْتُ أَنْفَجِرُ", "uz": "portlab ketishimga sal qoldi" }
    ],
    "full_uz": "Ikkovingiz kek ichida edinglarmi? Va nega buning hammasini yeb qo'yding? Portlab ketishimga sal qoldi.",
    "note": "كُنْتُمَا — ikkilik (dual) fe'l shakli, ikki kishiga birdan murojaat qilinganda ishlatiladi."
  },
  {
    "num": 77,
    "time": "00:05:33,379 --> 00:05:37,139",
    "arabic": "هَذَا لِأَنَّ ذَلِكَ مَا يَفْعَلُهُ الْأَصْدِقَاءُ",
    "segs": null,
    "full_uz": "Chunki do'stlar aynan shunday qiladi.",
    "note": null
  },
  {
    "num": 78,
    "time": "00:05:37,139 --> 00:05:42,019",
    "arabic": "أَجَلْ إِنَّهُ صَدِيقٌ جَيِّدٌ صَدِيقٌ لَدَيْهِ شَهِيَّةٌ قَوِيَّةٌ",
    "segs": null,
    "full_uz": "Ha, u yaxshi do'st, ishtahasi baquvvat do'st.",
    "note": "SRTda \"شاهية\" deb yozilgan, to'g'ri imlosi \"شَهِيَّة\" (ishtaha) bo'ladi."
  }
];
if (typeof module !== "undefined" && module.exports) {
  module.exports = lessons;
}
