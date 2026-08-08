const lessons = [
  {
    "num": 1,
    "time": "00:00:30,000 --> 00:00:35,659",
    "arabic": "الْخَلِيَّةُ الشَّمْسِيَّةُ",
    "segs": null,
    "full_uz": "Quyosh batareyasi.",
    "note": null
  },
  {
    "num": 2,
    "time": "00:00:35,659 --> 00:00:41,100",
    "arabic": "حَسَنًا، ثَلَاثَةٌ مَضْرُوبَةٌ بِسِتِّمِائَةٍ وَثَمَانِيَةٍ وَأَرْبَعِينَ",
    "segs": null,
    "full_uz": "Xo'p, uch marta olti yuz qirq sakkiz.",
    "note": null
  },
  {
    "num": 3,
    "time": "00:00:41,100 --> 00:00:42,560",
    "arabic": "لَنْ يَسْتَطِيعَ حَلَّهَا",
    "segs": null,
    "full_uz": "Uni yecha olmaydi.",
    "note": null
  },
  {
    "num": 4,
    "time": "00:00:42,560 --> 00:00:45,439",
    "arabic": "لَا، أَرَى أَنَّهُ سَيَفْعَلُ",
    "segs": [
      { "ar": "لَا", "uz": "yo'q" },
      { "ar": "أَرَى أَنَّهُ سَيَفْعَلُ", "uz": "menimcha, u uddalaydi" }
    ],
    "full_uz": "Yo'q, menimcha, u uddalaydi.",
    "note": null
  },
  {
    "num": 5,
    "time": "00:00:45,439 --> 00:00:47,000",
    "arabic": "تُومْ ذَكِيٌّ جِدًّا",
    "segs": null,
    "full_uz": "Tom juda aqlli.",
    "note": null
  },
  {
    "num": 6,
    "time": "00:00:47,000 --> 00:00:48,560",
    "arabic": "ذَكِيٌّ لَكِنَّهُ كَسُولٌ",
    "segs": [
      { "ar": "ذَكِيٌّ", "uz": "aqlli" },
      { "ar": "لَكِنَّهُ كَسُولٌ", "uz": "lekin dangasa" }
    ],
    "full_uz": "Aqlli, lekin dangasa.",
    "note": null
  },
  {
    "num": 7,
    "time": "00:00:48,560 --> 00:00:51,460",
    "arabic": "أَتَحَدَّاكِ عَلَى نَقْرَةٍ عَلَى الْجَبْهَةِ",
    "segs": null,
    "full_uz": "Peshonaga chertish garovi bilan bahslashamiz.",
    "note": null
  },
  {
    "num": 8,
    "time": "00:00:51,460 --> 00:00:52,400",
    "arabic": "إِذَنِ اسْتَعِدِّي",
    "segs": null,
    "full_uz": "Unda tayyor bo'l.",
    "note": null
  },
  {
    "num": 9,
    "time": "00:00:52,400 --> 00:00:53,659",
    "arabic": "هَا؟",
    "segs": null,
    "full_uz": "Ha?",
    "note": null
  },
  {
    "num": 10,
    "time": "00:00:53,659 --> 00:00:57,700",
    "arabic": "شُسسّ، لَقَدْ وَعَدْنَاهُ لَنْ نُزْعِجَهُ فِي أَثْنَاءِ حَلِّ وَاجِبَاتِهِ",
    "segs": [
      { "ar": "شُسسّ", "uz": "sh-sh" },
      { "ar": "لَقَدْ وَعَدْنَاهُ لَنْ نُزْعِجَهُ فِي أَثْنَاءِ حَلِّ وَاجِبَاتِهِ", "uz": "uy vazifasini yechayotganda bezovta qilmaslikka va'da bergan edik" }
    ],
    "full_uz": "Sh-sh, uy vazifasini yechayotganda bezovta qilmaslikka va'da bergan edik.",
    "note": null
  },
  {
    "num": 11,
    "time": "00:00:57,700 --> 00:01:01,760",
    "arabic": "لَيْتَنِي لَا عَلَيَّ حَلُّ هَذَا بِنَفْسِي",
    "segs": null,
    "full_uz": "Qani edi buni o'zim yechishim shart bo'lmasa.",
    "note": null
  },
  {
    "num": 12,
    "time": "00:01:01,760 --> 00:01:07,359",
    "arabic": "وَلِمَ أَحُلُّ كُلَّ هَذَا عِنْدَمَا يَكُونُ هُنَاكَ آلَةٌ حَاسِبَةٌ؟",
    "segs": null,
    "full_uz": "Kalkulyator bo'lgan holda nega buni o'zim yechishim kerak?",
    "note": null
  },
  {
    "num": 13,
    "time": "00:01:07,359 --> 00:01:08,859",
    "arabic": "عَلِمْتُ أَنَّهُ سَيَقُولُهَا",
    "segs": null,
    "full_uz": "Shuni aytishini bilardim.",
    "note": null
  },
  {
    "num": 14,
    "time": "00:01:08,859 --> 00:01:10,980",
    "arabic": "لَا يَسْتَطِيعُ حَلَّهَا بِغَيْرِ الْحَاسِبَةِ",
    "segs": null,
    "full_uz": "Kalkulyatorsiz yecha olmaydi.",
    "note": null
  },
  {
    "num": 15,
    "time": "00:01:10,980 --> 00:01:16,859",
    "arabic": "يَبْدُو أَنَّ الْمِدْخَرَاتِ قَدْ نَفِدَتْ",
    "segs": null,
    "full_uz": "Shekilli, batareyalar tugab qolgan.",
    "note": null
  },
  {
    "num": 16,
    "time": "00:01:16,859 --> 00:01:18,000",
    "arabic": "أَرَأَيْتَ هَذَا؟",
    "segs": null,
    "full_uz": "Buni ko'rdingmi?",
    "note": null
  },
  {
    "num": 17,
    "time": "00:01:18,000 --> 00:01:21,780",
    "arabic": "الْآلَةُ الْحَاسِبَةُ لَا تَعْمَلُ وَسَيُضْطَرُّ إِلَى حَلِّ هَذَا بِنَفْسِهِ",
    "segs": [
      { "ar": "الْآلَةُ الْحَاسِبَةُ لَا تَعْمَلُ", "uz": "kalkulyator ishlamayapti" },
      { "ar": "وَسَيُضْطَرُّ إِلَى حَلِّ هَذَا بِنَفْسِهِ", "uz": "va buni o'zi yechishga majbur bo'ladi" }
    ],
    "full_uz": "Kalkulyator ishlamayapti, va buni o'zi yechishga majbur bo'ladi.",
    "note": null
  },
  {
    "num": 18,
    "time": "00:01:21,780 --> 00:01:24,200",
    "arabic": "يَا إِلَهِي مَا هَذَا؟",
    "segs": null,
    "full_uz": "Voy xudoyim, bu nima?",
    "note": null
  },
  {
    "num": 19,
    "time": "00:01:24,200 --> 00:01:26,260",
    "arabic": "أَيْنَ ذَهَبَتِ الْمِدْخَرَاتُ؟",
    "segs": null,
    "full_uz": "Batareyalar qayerga ketdi?",
    "note": null
  },
  {
    "num": 20,
    "time": "00:01:26,260 --> 00:01:31,719",
    "arabic": "تُومْ، نُولِيكْ، أَظْهِرَا أَنْفُسَكُمَا، أَسْتَطِيعُ سَمَاعَكُمَا",
    "segs": [
      { "ar": "تُومْ، نُولِيكْ، أَظْهِرَا أَنْفُسَكُمَا", "uz": "Tom, Nolik, chiqinglar" },
      { "ar": "أَسْتَطِيعُ سَمَاعَكُمَا", "uz": "sizlarni eshityapman" }
    ],
    "full_uz": "Tom, Nolik, chiqinglar, sizlarni eshityapman.",
    "note": null
  },
  {
    "num": 21,
    "time": "00:01:31,719 --> 00:01:37,920",
    "arabic": "مَرْحَبًا يَا تُومْ! أَلَمْ تَعْلَمْ أَيْنَ هُوَ مَكَانُ الْمِدْخَرَاتِ؟",
    "segs": [
      { "ar": "مَرْحَبًا يَا تُومْ", "uz": "salom, Tom" },
      { "ar": "أَلَمْ تَعْلَمْ أَيْنَ هُوَ مَكَانُ الْمِدْخَرَاتِ", "uz": "batareyalar qayerda ekanini bilmasmiding" }
    ],
    "full_uz": "Salom, Tom! Batareyalar qayerda ekanini bilmasmiding?",
    "note": null
  },
  {
    "num": 22,
    "time": "00:01:37,920 --> 00:01:41,580",
    "arabic": "مَا الْمُضْحِكُ فِي الْأَمْرِ؟",
    "segs": null,
    "full_uz": "Bunda kulgili nima bor?",
    "note": null
  },
  {
    "num": 23,
    "time": "00:01:41,580 --> 00:01:44,560",
    "arabic": "لِأَنَّهُ مَا مِنْ مِدْخَرَاتٍ دَاخِلَ هَذَا الشَّيْءِ",
    "segs": null,
    "full_uz": "Chunki bu narsaning ichida batareya umuman yo'q.",
    "note": null
  },
  {
    "num": 24,
    "time": "00:01:44,560 --> 00:01:49,140",
    "arabic": "مَا الَّذِي تَقْصِدِينَ؟ مِنْ أَيْنَ تَحْصُلُ الْحَاسِبَةُ عَلَى... عَلَى...",
    "segs": [
      { "ar": "مَا الَّذِي تَقْصِدِينَ", "uz": "nimani nazarda tutyapsan" },
      { "ar": "مِنْ أَيْنَ تَحْصُلُ الْحَاسِبَةُ عَلَى... عَلَى...", "uz": "kalkulyator qayerdan oladi..." }
    ],
    "full_uz": "Nimani nazarda tutyapsan? Kalkulyator qayerdan oladi... oladi...",
    "note": null
  },
  {
    "num": 25,
    "time": "00:01:49,140 --> 00:01:51,719",
    "arabic": "مِنْ أَيْنَ تَحْصُلُ عَلَى الْكَهْرَبَاءِ؟",
    "segs": null,
    "full_uz": "Elektr energiyasini qayerdan oladi?",
    "note": null
  },
  {
    "num": 26,
    "time": "00:01:51,719 --> 00:01:52,140",
    "arabic": "أَهَا",
    "segs": null,
    "full_uz": "Aha.",
    "note": null
  },
  {
    "num": 27,
    "time": "00:01:52,140 --> 00:01:55,380",
    "arabic": "لِأَنَّ فِيهَا خَلِيَّةً شَمْسِيَّةً",
    "segs": null,
    "full_uz": "Chunki unda quyosh batareyasi bor.",
    "note": null
  },
  {
    "num": 28,
    "time": "00:01:55,379 --> 00:01:57,819",
    "arabic": "أَتَعْمَلُ بِطَاقَةِ الشَّمْسِ؟",
    "segs": null,
    "full_uz": "Quyosh energiyasi bilan ishlaydimi?",
    "note": null
  },
  {
    "num": 29,
    "time": "00:01:57,819 --> 00:02:00,780",
    "arabic": "قَبْلَ وَقْتٍ طَوِيلٍ",
    "segs": null,
    "full_uz": "Ancha vaqt oldin,",
    "note": null
  },
  {
    "num": 30,
    "time": "00:02:00,780 --> 00:02:06,519",
    "arabic": "اكْتَشَفَ بَعْضُ الْعُلَمَاءِ أَنَّ بَعْضَ الْمَوَادِّ تُصْدِرُ الْكَهْرَبَاءَ عِنْدَمَا تَتَعَرَّضُ لِلضَّوْءِ",
    "segs": [
      { "ar": "اكْتَشَفَ بَعْضُ الْعُلَمَاءِ", "uz": "ba'zi olimlar aniqlashdi" },
      { "ar": "أَنَّ بَعْضَ الْمَوَادِّ تُصْدِرُ الْكَهْرَبَاءَ عِنْدَمَا تَتَعَرَّضُ لِلضَّوْءِ", "uz": "ba'zi moddalar yorug'likka tushganda elektr chiqarishini" }
    ],
    "full_uz": "ba'zi olimlar ba'zi moddalar yorug'likka tushganda elektr chiqarishini aniqlashdi.",
    "note": null
  },
  {
    "num": 31,
    "time": "00:02:06,519 --> 00:02:11,780",
    "arabic": "الصَّفَائِحُ الْمَصْنُوعَةُ مِنْ هَذِهِ الْمَعَادِنِ تُدْعَى بِالْخَلَايَا الْكَهْرَضَوْئِيَّةِ",
    "segs": null,
    "full_uz": "Shu metallardan yasalgan plastinkalar fotoelektrik hujayralar deb ataladi,",
    "note": "خَلِيَّةٌ كَهْرَضَوْئِيَّةٌ — fotoelektrik hujayra."
  },
  {
    "num": 32,
    "time": "00:02:11,780 --> 00:02:17,199",
    "arabic": "وَبِوَصْلِ بِضْعٍ مِنْ هَذِهِ الْخَلَايَا الْكَهْرَضَوْئِيَّةِ نَحْصُلُ عَلَى مَا يُدْعَى بِالْخَلِيَّةِ الشَّمْسِيَّةِ",
    "segs": null,
    "full_uz": "bir nechta shu fotoelektrik hujayralarni ulash orqali esa quyosh batareyasi deb ataladigan narsani olamiz.",
    "note": null
  },
  {
    "num": 33,
    "time": "00:02:17,199 --> 00:02:22,120",
    "arabic": "وَالْخَلِيَّةُ الشَّمْسِيَّةُ فِي الْحَاسِبَةِ مَوْضُوعَةٌ خَلْفَ فَتْحَةٍ شَفَّافَةٍ",
    "segs": null,
    "full_uz": "Kalkulyatordagi quyosh batareyasi shaffof teshik ortiga joylashtirilgan,",
    "note": null
  },
  {
    "num": 34,
    "time": "00:02:22,120 --> 00:02:27,480",
    "arabic": "وَعِنْدَمَا يُشِعُّ الضَّوْءُ عَلَى الْخَلِيَّةِ الشَّمْسِيَّةِ تُصْدِرُ كَهْرَبَاءَ تُشَغِّلُ الْآلَةَ الْحَاسِبَةَ",
    "segs": [
      { "ar": "وَعِنْدَمَا يُشِعُّ الضَّوْءُ عَلَى الْخَلِيَّةِ الشَّمْسِيَّةِ", "uz": "yorug'lik quyosh batareyasiga tushganda" },
      { "ar": "تُصْدِرُ كَهْرَبَاءَ تُشَغِّلُ الْآلَةَ الْحَاسِبَةَ", "uz": "u kalkulyatorni ishlatadigan elektr chiqaradi" }
    ],
    "full_uz": "yorug'lik quyosh batareyasiga tushganda, u kalkulyatorni ishlatadigan elektr chiqaradi.",
    "note": null
  },
  {
    "num": 35,
    "time": "00:02:27,480 --> 00:02:33,480",
    "arabic": "نُولِيكْ لَا أَرَى أَيَّ فَتْحَةٍ هُنَا",
    "segs": null,
    "full_uz": "Nolik, bu yerda hech qanday teshik ko'rmayapman.",
    "note": null
  },
  {
    "num": 36,
    "time": "00:02:33,480 --> 00:02:37,900",
    "arabic": "هَذَا لِأَنَّكَ غَطَّيْتَ الْفَتْحَةَ لِسَبَبٍ مَا بِلَصَاقَةٍ",
    "segs": null,
    "full_uz": "Bu shundanki, sen negadir teshikni yopishtirgich bilan yopib qo'yibsan.",
    "note": null
  },
  {
    "num": 37,
    "time": "00:02:37,900 --> 00:02:40,560",
    "arabic": "السَّبَبُ هُوَ أَنَّهَا بَدَأَتْ رَائِعَةً",
    "segs": null,
    "full_uz": "Sababi shundaki, u ajoyib ko'rina boshlagan edi.",
    "note": null
  },
  {
    "num": 38,
    "time": "00:02:40,560 --> 00:02:44,120",
    "arabic": "أَحْسَنْتَ صُنْعًا إِنَّهَا تَبْدُو رَائِعَةً لَكِنَّهَا لَنْ تَعْمَلَ",
    "segs": [
      { "ar": "أَحْسَنْتَ صُنْعًا", "uz": "yaxshi qilibsan" },
      { "ar": "إِنَّهَا تَبْدُو رَائِعَةً", "uz": "chiroyli ko'rinadi" },
      { "ar": "لَكِنَّهَا لَنْ تَعْمَلَ", "uz": "lekin ishlamaydi" }
    ],
    "full_uz": "Yaxshi qilibsan, chiroyli ko'rinadi, lekin ishlamaydi.",
    "note": null
  },
  {
    "num": 39,
    "time": "00:02:44,680 --> 00:02:47,120",
    "arabic": "إِذَنْ وَدَاعًا أَيَّتُهَا اللَّصَاقَةُ",
    "segs": null,
    "full_uz": "Unda xayr, yopishtirgich.",
    "note": null
  },
  {
    "num": 40,
    "time": "00:02:47,120 --> 00:02:51,939",
    "arabic": "لَا أَسْتَطِيعُ نَزْعَهَا",
    "segs": null,
    "full_uz": "Uni yechib olaolmayapman.",
    "note": null
  },
  {
    "num": 41,
    "time": "00:02:51,939 --> 00:02:57,539",
    "arabic": "إِذَنْ دَعْهَا وَأَنْجِزِ الْعَمَلِيَّاتِ الْحِسَابِيَّةَ بِغَيْرِ الْآلَاتِ الْحَاسِبَةِ",
    "segs": [
      { "ar": "إِذَنْ دَعْهَا", "uz": "unda qoldirib qo'y" },
      { "ar": "وَأَنْجِزِ الْعَمَلِيَّاتِ الْحِسَابِيَّةَ بِغَيْرِ الْآلَاتِ الْحَاسِبَةِ", "uz": "va hisob-kitobni kalkulyatorsiz bajar" }
    ],
    "full_uz": "Unda qoldirib qo'y, va hisob-kitobni kalkulyatorsiz bajar.",
    "note": null
  },
  {
    "num": 42,
    "time": "00:02:57,539 --> 00:02:59,719",
    "arabic": "وَعِنْدَهَا سَأَرْبَحُ الشَّرْطَ",
    "segs": null,
    "full_uz": "Shunda men garovni yutaman.",
    "note": null
  },
  {
    "num": 43,
    "time": "00:02:59,719 --> 00:03:02,120",
    "arabic": "مَاذَا تَرْبَحُ؟ هَلْ نَسِيتَ؟",
    "segs": [
      { "ar": "مَاذَا تَرْبَحُ", "uz": "nimani yutasan" },
      { "ar": "هَلْ نَسِيتَ", "uz": "unutdingmi" }
    ],
    "full_uz": "Nimani yutasan? Unutdingmi?",
    "note": null
  },
  {
    "num": 44,
    "time": "00:03:02,120 --> 00:03:05,319",
    "arabic": "نَحْنُ الْفِيكْسِيزُ وَيَجِبُ أَنْ نُصْلِحَ كُلَّ شَيْءٍ",
    "segs": null,
    "full_uz": "Biz fiksiylarmiz, hamma narsani tuzatishimiz kerak.",
    "note": null
  },
  {
    "num": 45,
    "time": "00:03:05,319 --> 00:03:07,680",
    "arabic": "سِيمْكَا، هَذِهِ خُطَّةٌ مُلْتَوِيَةٌ",
    "segs": null,
    "full_uz": "Simka, bu ayyorona reja-ku.",
    "note": null
  },
  {
    "num": 46,
    "time": "00:03:07,680 --> 00:03:09,099",
    "arabic": "لَا، لَيْسَتْ كَذَلِكَ",
    "segs": null,
    "full_uz": "Yo'q, unday emas.",
    "note": null
  },
  {
    "num": 47,
    "time": "00:03:09,099 --> 00:03:12,060",
    "arabic": "مِنَ الْأَفْضَلِ أَنْ تَجِدَ شَيْئًا لِنُزِيلَ هَذِهِ اللَّصَاقَةَ",
    "segs": null,
    "full_uz": "Bu yopishtirgichni olib tashlash uchun biror narsa topganing ma'qul.",
    "note": null
  },
  {
    "num": 48,
    "time": "00:03:12,060 --> 00:03:14,759",
    "arabic": "مَا رَأْيُكِ فِي هَذَا؟",
    "segs": null,
    "full_uz": "Bu haqida nima deysan?",
    "note": null
  },
  {
    "num": 49,
    "time": "00:03:21,939 --> 00:03:34,919",
    "arabic": "هَكَذَا سَنَأْخُذُ وَقْتًا طَوِيلًا",
    "segs": null,
    "full_uz": "Bunday qilsak ko'p vaqt ketadi.",
    "note": null
  },
  {
    "num": 50,
    "time": "00:03:34,919 --> 00:03:35,520",
    "arabic": "أَجَلْ",
    "segs": null,
    "full_uz": "Ha.",
    "note": null
  },
  {
    "num": 51,
    "time": "00:03:35,520 --> 00:03:37,099",
    "arabic": "لَدَيَّ فِكْرَةٌ",
    "segs": null,
    "full_uz": "Menda bir fikr bor.",
    "note": null
  },
  {
    "num": 52,
    "time": "00:03:37,099 --> 00:03:39,560",
    "arabic": "لِنَسْتَعْمِلْ مِشْبَكَ الْوَرَقِ",
    "segs": null,
    "full_uz": "Qog'oz qisqichidan foydalanaylik.",
    "note": null
  },
  {
    "num": 53,
    "time": "00:03:39,560 --> 00:03:45,439",
    "arabic": "ثُمَّ مَاذَا؟",
    "segs": null,
    "full_uz": "Keyin-chi?",
    "note": null
  },
  {
    "num": 54,
    "time": "00:03:45,439 --> 00:03:47,620",
    "arabic": "سَأُلْصِقُ نِهَايَةَ مِشْبَكِ الْوَرَقِ",
    "segs": null,
    "full_uz": "Qog'oz qisqichining uchini yopishtiraman,",
    "note": null
  },
  {
    "num": 55,
    "time": "00:03:47,620 --> 00:03:51,400",
    "arabic": "ثُمَّ سَأَلُفُّ اللَّصَاقَةَ عَلَيْهِ",
    "segs": null,
    "full_uz": "keyin yopishtirgichni unga o'rab olaman.",
    "note": null
  },
  {
    "num": 56,
    "time": "00:03:51,400 --> 00:04:00,580",
    "arabic": "تِيدِيشْ! أَعِزَّائِي بِمُسَاعَدَةِ الْخَلَايَا الضَّوْئِيَّةِ",
    "segs": [
      { "ar": "تِيدِيشْ", "uz": "tidish" },
      { "ar": "أَعِزَّائِي بِمُسَاعَدَةِ الْخَلَايَا الضَّوْئِيَّةِ", "uz": "azizlarim, fotoelektrik hujayralar yordamida" }
    ],
    "full_uz": "Tidish! Azizlarim, fotoelektrik hujayralar yordamida,",
    "note": null
  },
  {
    "num": 57,
    "time": "00:04:00,580 --> 00:04:04,819",
    "arabic": "نَسْتَطِيعُ تَوْلِيدَ كَهْرَبَاءَ بِغَيْرِ حَاجَةٍ إِلَى إِحْرَاقِ الْفَحْمِ أَوِ الْوَقُودِ",
    "segs": null,
    "full_uz": "ko'mir yoki yoqilg'ini yoqishga hojat qolmasdan elektr ishlab chiqara olamiz,",
    "note": null
  },
  {
    "num": 58,
    "time": "00:04:04,819 --> 00:04:07,960",
    "arabic": "وَلَكِنْ لِسُوءِ الْحَظِّ هَذِهِ الْخَلَايَا طَاقَتُهَا صَغِيرَةٌ",
    "segs": null,
    "full_uz": "lekin afsuski, bu hujayralarning quvvati kichik.",
    "note": null
  },
  {
    "num": 59,
    "time": "00:04:07,960 --> 00:04:11,620",
    "arabic": "تَحْصُلُ الْحَاسِبَةُ عَلَى طَاقَةٍ كَافِيَةٍ مِنْ خَلِيَّةٍ صَغِيرَةٍ",
    "segs": null,
    "full_uz": "Kalkulyator kichik hujayradan yetarli energiya oladi,",
    "note": null
  },
  {
    "num": 60,
    "time": "00:04:11,620 --> 00:04:15,120",
    "arabic": "وَلَكِنْ لِتَغْذِيَةِ مَدِينَةٍ كَامِلَةٍ بِالطَّاقَةِ الشَّمْسِيَّةِ",
    "segs": null,
    "full_uz": "lekin butun bir shaharni quyosh energiyasi bilan ta'minlash uchun,",
    "note": null
  },
  {
    "num": 61,
    "time": "00:04:15,120 --> 00:04:19,819",
    "arabic": "نَحْتَاجُ إِلَى مَحَطَّاتِ تَوْلِيدٍ ذَاتِ مَسَاحَاتٍ وَاسِعَةٍ مِنَ الْخَلَايَا الشَّمْسِيَّةِ",
    "segs": null,
    "full_uz": "keng maydonli quyosh hujayralariga ega elektr stansiyalari kerak bo'ladi.",
    "note": null
  },
  {
    "num": 62,
    "time": "00:04:19,819 --> 00:04:27,219",
    "arabic": "وَمِنَ الْأَفْضَلِ بِنَاءُ هَذِهِ الْمَحَطَّاتِ حَيْثُ تَسْطَعُ الشَّمْسُ بِقُوَّةٍ مُدَّةً طَوِيلَةً كَمَا فِي وَسَطِ الصَّحْرَاءِ",
    "segs": [
      { "ar": "وَمِنَ الْأَفْضَلِ بِنَاءُ هَذِهِ الْمَحَطَّاتِ", "uz": "bu stansiyalarni qurish yaxshiroq bo'ladi" },
      { "ar": "حَيْثُ تَسْطَعُ الشَّمْسُ بِقُوَّةٍ مُدَّةً طَوِيلَةً كَمَا فِي وَسَطِ الصَّحْرَاءِ", "uz": "quyosh uzoq vaqt kuchli nur sochadigan joyda, masalan sahro o'rtasida" }
    ],
    "full_uz": "Bu stansiyalarni quyosh uzoq vaqt kuchli nur sochadigan joyda, masalan sahro o'rtasida qurish yaxshiroq bo'ladi.",
    "note": null
  },
  {
    "num": 63,
    "time": "00:04:27,219 --> 00:04:34,300",
    "arabic": "وَتَذَكَّرُوا أَنَّهُ فِي الْفَضَاءِ الْخَارِجِيِّ تَسْطَعُ الشَّمْسُ بِقُوَّةٍ كَبِيرَةٍ وَلَيْسَ هُنَاكَ أَيُّ غُيُومٍ لِتُعِيقَهَا",
    "segs": [
      { "ar": "وَتَذَكَّرُوا أَنَّهُ فِي الْفَضَاءِ الْخَارِجِيِّ تَسْطَعُ الشَّمْسُ بِقُوَّةٍ كَبِيرَةٍ", "uz": "va esda tutinglar, tashqi koinotda quyosh juda kuchli nur sochadi" },
      { "ar": "وَلَيْسَ هُنَاكَ أَيُّ غُيُومٍ لِتُعِيقَهَا", "uz": "va uni to'sib turadigan bulut yo'q" }
    ],
    "full_uz": "Va esda tutinglar, tashqi koinotda quyosh juda kuchli nur sochadi va uni to'sib turadigan bulut yo'q.",
    "note": null
  },
  {
    "num": 64,
    "time": "00:04:34,300 --> 00:04:40,699",
    "arabic": "وَلِهَذَا كُلُّ الْمَرْكَبَاتِ وَالْأَقْمَارُ الصِّنَاعِيَّةُ فِي الْفَضَاءِ تَسْتَعْمِلُ الْخَلَايَا الشَّمْسِيَّةَ لِلتَّزَوُّدِ بِالطَّاقَةِ",
    "segs": null,
    "full_uz": "Shuning uchun koinotdagi barcha kemalar va sun'iy yo'ldoshlar energiya olish uchun quyosh hujayralaridan foydalanadi,",
    "note": null
  },
  {
    "num": 65,
    "time": "00:04:40,699 --> 00:04:46,300",
    "arabic": "وَمِنْهَا مَحَطَّةُ الْفَضَاءِ الدُّوَلِيَّةُ يَعْمَلُ فِيهَا رُوَّادُ فَضَاءٍ مِنْ بُلْدَانٍ مُتَعَدِّدَةٍ",
    "segs": null,
    "full_uz": "shu jumladan xalqaro kosmik stansiya, unda turli mamlakatlardan kosmonavtlar ishlaydi.",
    "note": null
  },
  {
    "num": 66,
    "time": "00:04:46,300 --> 00:04:50,540",
    "arabic": "يَا تُومْ",
    "segs": null,
    "full_uz": "Hoy, Tom!",
    "note": null
  },
  {
    "num": 67,
    "time": "00:04:50,540 --> 00:04:53,480",
    "arabic": "مَاذَا؟ هَلِ انْتَهَيْتُمْ؟",
    "segs": [
      { "ar": "مَاذَا", "uz": "nima" },
      { "ar": "هَلِ انْتَهَيْتُمْ", "uz": "tugatdinglarmi" }
    ],
    "full_uz": "Nima? Tugatdinglarmi?",
    "note": null
  },
  {
    "num": 68,
    "time": "00:04:53,480 --> 00:04:56,800",
    "arabic": "أَجَلْ، وَالْآنَ يُمْكِنُكَ اسْتِعْمَالَ الْحَاسِبَةِ",
    "segs": [
      { "ar": "أَجَلْ", "uz": "ha" },
      { "ar": "وَالْآنَ يُمْكِنُكَ اسْتِعْمَالَ الْحَاسِبَةِ", "uz": "endi kalkulyatordan foydalansang bo'ladi" }
    ],
    "full_uz": "Ha, endi kalkulyatordan foydalansang bo'ladi.",
    "note": null
  },
  {
    "num": 69,
    "time": "00:04:56,800 --> 00:05:00,680",
    "arabic": "لَكِنَّنِي انْتَهَيْتُ مِنْ حَلِّهَا قَبْلَ أَنْ تُزَالَ اللَّصَاقَةُ",
    "segs": null,
    "full_uz": "Lekin men yopishtirgich olinishidan oldin yechib bo'lgan edim.",
    "note": null
  },
  {
    "num": 70,
    "time": "00:05:00,680 --> 00:05:02,600",
    "arabic": "أَجَلْ، أَنَا الْفَائِزُ",
    "segs": null,
    "full_uz": "Ha, men yutdim.",
    "note": null
  },
  {
    "num": 71,
    "time": "00:05:02,600 --> 00:05:06,759",
    "arabic": "هَذَا لَيْسَ عَدْلًا",
    "segs": null,
    "full_uz": "Bu adolatsizlik.",
    "note": null
  },
  {
    "num": 72,
    "time": "00:05:06,759 --> 00:05:08,759",
    "arabic": "لَوْلَا تِلْكَ اللَّصَاقَةُ لَخَسِرْتَ",
    "segs": null,
    "full_uz": "O'sha yopishtirgich bo'lmaganida, yutqazgan bo'lardim.",
    "note": null
  },
  {
    "num": 73,
    "time": "00:05:08,759 --> 00:05:10,680",
    "arabic": "مَاذَا بِكُمَا؟",
    "segs": null,
    "full_uz": "Sizlarga nima bo'ldi?",
    "note": null
  },
  {
    "num": 74,
    "time": "00:05:11,220 --> 00:05:12,560",
    "arabic": "لَا شَيْءَ، لَا تَهْتَمَّ",
    "segs": null,
    "full_uz": "Hech narsa, e'tibor berma.",
    "note": null
  },
  {
    "num": 75,
    "time": "00:05:12,560 --> 00:05:14,540",
    "arabic": "أَهَذَا لَا شَيْءَ؟",
    "segs": null,
    "full_uz": "Bu hech narsami?",
    "note": null
  },
  {
    "num": 76,
    "time": "00:05:14,540 --> 00:05:17,220",
    "arabic": "أَحْسَنْتَ يَا تُومْ، إِجَابَاتُكَ صَحِيحَةٌ",
    "segs": null,
    "full_uz": "Barakalla, Tom, javoblaring to'g'ri.",
    "note": null
  },
  {
    "num": 77,
    "time": "00:05:17,220 --> 00:05:21,680",
    "arabic": "إِنَّهَا تَعْمَلُ، انْظُرُوا هُنَاكَ صِفْرٌ يَظْهَرُ هُنَا",
    "segs": [
      { "ar": "إِنَّهَا تَعْمَلُ", "uz": "ishlayapti" },
      { "ar": "انْظُرُوا هُنَاكَ صِفْرٌ يَظْهَرُ هُنَا", "uz": "qaranglar, mana bu yerda nol chiqib turibdi" }
    ],
    "full_uz": "Ishlayapti, qaranglar, mana bu yerda nol chiqib turibdi.",
    "note": null
  },
  {
    "num": 78,
    "time": "00:05:21,680 --> 00:05:23,520",
    "arabic": "أَيْنَ؟",
    "segs": null,
    "full_uz": "Qayerda?",
    "note": null
  },
  {
    "num": 79,
    "time": "00:05:23,520 --> 00:05:24,980",
    "arabic": "عَلَى الْآلَةِ الْحَاسِبَةِ",
    "segs": null,
    "full_uz": "Kalkulyatorda.",
    "note": null
  },
  {
    "num": 80,
    "time": "00:05:24,980 --> 00:05:30,260",
    "arabic": "هَلْ فَهِمْتُمَا؟ صِفْرٌ يَعْنِي لَا شَيْءَ يَا نُولِيكْ",
    "segs": [
      { "ar": "هَلْ فَهِمْتُمَا", "uz": "tushundinglarmi" },
      { "ar": "صِفْرٌ يَعْنِي لَا شَيْءَ يَا نُولِيكْ", "uz": "nol hech narsa degani, Nolik" }
    ],
    "full_uz": "Tushundinglarmi? Nol hech narsa degani, Nolik.",
    "note": null
  }
];
if (typeof module !== "undefined" && module.exports) {
  module.exports = lessons;
}
