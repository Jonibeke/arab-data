const lessons = [
  {
    "num": 1,
    "time": "00:00:30,000 --> 00:00:45,340",
    "arabic": "شَرِيطُ الرُّمُوزِ",
    "segs": null,
    "full_uz": "Shtrix-kod.",
    "note": "«شَرِيطُ الرُّمُوزِ» — mahsulotlarga chop etiladigan chiziqli kod, «shtrix-kod» ma'nosida."
  },
  {
    "num": 2,
    "time": "00:00:37,620 --> 00:00:42,559",
    "arabic": "إِذَنْ مَاذَا عَلَيْنَا أَنْ نَفْعَلَ إِنْ رَأَيْنَا بَشَرًا؟",
    "segs": null,
    "full_uz": "Demak, odam ko'rib qolsak, nima qilishimiz kerak?",
    "note": null
  },
  {
    "num": 3,
    "time": "00:00:42,340 --> 00:00:45,240",
    "arabic": "نَخْتَبِئُ مِنْهُمْ؟",
    "segs": null,
    "full_uz": "Ulardan yashirinamizmi?",
    "note": null
  },
  {
    "num": 4,
    "time": "00:00:45,240 --> 00:00:47,840",
    "arabic": "وَإِنْ لَمْ نَجِدْ مَكَانًا لِلِاخْتِبَاءِ؟",
    "segs": null,
    "full_uz": "Va agar yashirinadigan joy topolmasak-chi?",
    "note": null
  },
  {
    "num": 5,
    "time": "00:00:47,840 --> 00:00:49,539",
    "arabic": "نَظْهَرُ بِشَكْلِ مَسَامِيرَ",
    "segs": null,
    "full_uz": "Mixlar shakliga kirib qolamiz.",
    "note": "Fiksilar odamlar ko'rgan joyda o'zlarini kundalik buyumga (masalan mixga) o'xshatib olishlari mumkin — ularning himoya usuli."
  },
  {
    "num": 6,
    "time": "00:00:49,539 --> 00:00:51,439",
    "arabic": "هَذَا صَحِيحٌ",
    "segs": null,
    "full_uz": "To'g'ri.",
    "note": null
  },
  {
    "num": 7,
    "time": "00:00:51,439 --> 00:00:56,900",
    "arabic": "أَيْنَ هِيَ؟",
    "segs": null,
    "full_uz": "U qayerda?",
    "note": null
  },
  {
    "num": 8,
    "time": "00:00:56,900 --> 00:00:59,980",
    "arabic": "أَيْنَ يُمْكِنُ أَنْ أَكُونَ وَضَعْتُهَا؟",
    "segs": null,
    "full_uz": "Uni qayerga qo'ygan bo'lishim mumkin?",
    "note": null
  },
  {
    "num": 9,
    "time": "00:00:59,979 --> 00:01:01,299",
    "arabic": "يَا لِي مِنْ مُغَفَّلٍ!",
    "segs": null,
    "full_uz": "Voy, men ahmoq ekanman!",
    "note": "«يَا لِي مِنْ...» — o'zini o'zi ta'riflab hayajon bildirish qurilmasi."
  },
  {
    "num": 10,
    "time": "00:01:01,299 --> 00:01:04,159",
    "arabic": "إِنَّهُ الْعَلَّامَةُ يُوجِينْيُوسْ",
    "segs": null,
    "full_uz": "Bu professor Yudjinius-ku.",
    "note": null
  },
  {
    "num": 11,
    "time": "00:01:04,159 --> 00:01:06,179",
    "arabic": "لَا دَاعِيَ لِأَنْ نَخْتَبِئَ مِنْهُ",
    "segs": null,
    "full_uz": "Undan yashirinishning hojati yo'q.",
    "note": null
  },
  {
    "num": 12,
    "time": "00:01:06,179 --> 00:01:07,399",
    "arabic": "إِنَّهُ صَدِيقُنَا",
    "segs": null,
    "full_uz": "U bizning do'stimiz.",
    "note": null
  },
  {
    "num": 13,
    "time": "00:01:07,399 --> 00:01:09,280",
    "arabic": "تُرَى أَيْنَ أَجِدُهَا؟",
    "segs": null,
    "full_uz": "Qiziq, uni qayerdan topaman?",
    "note": "«تُرَى» — «qiziq, ajablanaman» ma'nosidagi kirish so'zi."
  },
  {
    "num": 14,
    "time": "00:01:09,280 --> 00:01:11,979",
    "arabic": "هَلْ أَضَعْتَ شَيْئًا مَرَّةً ثَانِيَةً يَا سَيِّدِي؟",
    "segs": null,
    "full_uz": "Yana biror narsani yo'qotdingizmi, janob?",
    "note": null
  },
  {
    "num": 15,
    "time": "00:01:12,700 --> 00:01:14,219",
    "arabic": "أَجَلْ، كَيْفَ عَرَفْتَ؟",
    "segs": null,
    "full_uz": "Ha, qayerdan bildingiz?",
    "note": null
  },
  {
    "num": 16,
    "time": "00:01:14,219 --> 00:01:15,859",
    "arabic": "شَيْءٌ فَظِيعٌ جِدًّا",
    "segs": null,
    "full_uz": "Juda dahshatli narsa.",
    "note": null
  },
  {
    "num": 17,
    "time": "00:01:15,859 --> 00:01:18,979",
    "arabic": "بَدَأْتُ أَمْسِ بِاخْتِبَارِ مِكْوَاةٍ جَدِيدَةٍ وَالْيَوْمَ",
    "segs": null,
    "full_uz": "Kecha yangi dazmolni sinab ko'ra boshlagandim, bugun esa.",
    "note": null
  },
  {
    "num": 18,
    "time": "00:01:18,979 --> 00:01:21,560",
    "arabic": "آهْ، اخْتَفَتْ وَلَمْ يَعُدْ لَهَا أَثَرٌ",
    "segs": null,
    "full_uz": "Voy, u g'oyib bo'ldi va undan asar ham qolmadi.",
    "note": null
  },
  {
    "num": 19,
    "time": "00:01:21,560 --> 00:01:23,280",
    "arabic": "أَيْنَ تَظُنُّ أَنَّكَ وَضَعْتَهَا؟",
    "segs": null,
    "full_uz": "Uni qayerga qo'ygan bo'lishingiz mumkin deb o'ylaysiz?",
    "note": null
  },
  {
    "num": 20,
    "time": "00:01:23,280 --> 00:01:25,379",
    "arabic": "فِي أَحَدِ مَكَانَيْنِ اثْنَيْنِ",
    "segs": null,
    "full_uz": "Ikkita joydan birida.",
    "note": null
  },
  {
    "num": 21,
    "time": "00:01:25,379 --> 00:01:26,879",
    "arabic": "قَدْ تَكُونُ فِي الْمُسْتَوْدَعِ",
    "segs": null,
    "full_uz": "Omborda bo'lishi mumkin.",
    "note": null
  },
  {
    "num": 22,
    "time": "00:01:26,879 --> 00:01:29,879",
    "arabic": "أَوْ لَيْسَ فِي الْمُسْتَوْدَعِ",
    "segs": null,
    "full_uz": "Yoki omborda emas.",
    "note": null
  },
  {
    "num": 23,
    "time": "00:01:29,879 --> 00:01:33,159",
    "arabic": "أَجَلْ، هَذِهِ الْمَعْلُومَةُ مُفِيدَةٌ جِدًّا",
    "segs": null,
    "full_uz": "Ha, bu ma'lumot juda foydali ekan.",
    "note": null
  },
  {
    "num": 24,
    "time": "00:01:33,159 --> 00:01:34,879",
    "arabic": "أَوْ غَيْرُ مُفِيدَةٍ",
    "segs": null,
    "full_uz": "Yoki foydasiz.",
    "note": null
  },
  {
    "num": 25,
    "time": "00:01:35,479 --> 00:01:39,879",
    "arabic": "طُلَّابُ، اتَّبِعُونِي",
    "segs": null,
    "full_uz": "O'quvchilar, menga ergashinglar.",
    "note": null
  },
  {
    "num": 26,
    "time": "00:01:40,539 --> 00:01:41,879",
    "arabic": "إِلَى الْمُسْتَوْدَعِ",
    "segs": null,
    "full_uz": "Omborga.",
    "note": null
  },
  {
    "num": 27,
    "time": "00:01:53,550 --> 00:01:56,600",
    "arabic": "وَاوْ، انْظُرُوا إِلَى كُلِّ هَذِهِ الصَّنَادِيقِ",
    "segs": null,
    "full_uz": "Voy, mana bu qutilarning barchasiga qarang.",
    "note": null
  },
  {
    "num": 28,
    "time": "00:01:55,879 --> 00:01:59,019",
    "arabic": "إِنْ كُنَّا سَنَبْحَثُ فِي كُلِّ وَاحِدٍ مِنْهَا",
    "segs": null,
    "full_uz": "Agar har birini qidiradigan bo'lsak.",
    "note": null
  },
  {
    "num": 29,
    "time": "00:01:59,019 --> 00:02:01,039",
    "arabic": "فَسَيَسْتَغْرِقُ الْأَمْرُ يَوْمَيْنِ",
    "segs": null,
    "full_uz": "Bu ikki kun vaqt oladi.",
    "note": null
  },
  {
    "num": 30,
    "time": "00:02:01,039 --> 00:02:03,179",
    "arabic": "رُبَّمَا يُحَالِفُنَا الْحَظُّ",
    "segs": null,
    "full_uz": "Balki omad bizga kulib boqar.",
    "note": "«يُحَالِفُ الْحَظُّ» — «omad kulib boqmoq» ma'nosidagi ibora."
  },
  {
    "num": 31,
    "time": "00:02:03,179 --> 00:02:04,299",
    "arabic": "لِنَبْحَثْ هُنَا",
    "segs": null,
    "full_uz": "Shu yerda qidiraylik.",
    "note": null
  },
  {
    "num": 32,
    "time": "00:02:04,299 --> 00:02:06,619",
    "arabic": "كَلَّا",
    "segs": null,
    "full_uz": "Yo'q.",
    "note": null
  },
  {
    "num": 33,
    "time": "00:02:06,619 --> 00:02:08,299",
    "arabic": "فِي دَاخِلِهِ مِرْوَحَةٌ",
    "segs": null,
    "full_uz": "Ichida ventilyator bor.",
    "note": null
  },
  {
    "num": 34,
    "time": "00:02:08,299 --> 00:02:09,620",
    "arabic": "مِرْوَحَةٌ؟",
    "segs": null,
    "full_uz": "Ventilyatormi?",
    "note": null
  },
  {
    "num": 35,
    "time": "00:02:09,620 --> 00:02:14,400",
    "arabic": "إِنَّهَا مِرْوَحَةٌ",
    "segs": null,
    "full_uz": "Bu ventilyator.",
    "note": null
  },
  {
    "num": 36,
    "time": "00:02:14,400 --> 00:02:16,500",
    "arabic": "وَمَاذَا فِي هَذَا الصُّنْدُوقِ؟",
    "segs": null,
    "full_uz": "Bu qutida nima bor?",
    "note": null
  },
  {
    "num": 37,
    "time": "00:02:18,460 --> 00:02:19,620",
    "arabic": "خَلَّاطٌ",
    "segs": null,
    "full_uz": "Mikser.",
    "note": null
  },
  {
    "num": 38,
    "time": "00:02:19,620 --> 00:02:21,840",
    "arabic": "أَجَلْ، هَذَا رَائِعٌ",
    "segs": null,
    "full_uz": "Ha, bu ajoyib.",
    "note": null
  },
  {
    "num": 39,
    "time": "00:02:21,840 --> 00:02:23,500",
    "arabic": "وَفِي هَذَا الصُّنْدُوقِ؟",
    "segs": null,
    "full_uz": "Va bu qutida-chi?",
    "note": null
  },
  {
    "num": 40,
    "time": "00:02:24,879 --> 00:02:26,759",
    "arabic": "غَلَّايَةٌ كَهْرَبَائِيَّةٌ",
    "segs": null,
    "full_uz": "Elektr choynak.",
    "note": null
  },
  {
    "num": 41,
    "time": "00:02:26,759 --> 00:02:29,079",
    "arabic": "إِنَّهَا مَصْنُوعَةٌ فِي أَلْمَانْيَا",
    "segs": null,
    "full_uz": "U Germaniyada ishlab chiqarilgan.",
    "note": null
  },
  {
    "num": 42,
    "time": "00:02:29,079 --> 00:02:32,099",
    "arabic": "إِنَّهُ مُحِقٌّ، أَرَى غَلَّايَةً هُنَا",
    "segs": null,
    "full_uz": "U haq ekan, bu yerda choynak ko'ryapman.",
    "note": null
  },
  {
    "num": 43,
    "time": "00:02:32,099 --> 00:02:35,039",
    "arabic": "سَيِّدِي، هَلْ هَذِهِ خُدْعَةٌ؟ أَنَا لَمْ أَفْهَمْ",
    "segs": null,
    "full_uz": "Janob, bu hiylami? Men tushunmadim.",
    "note": null
  },
  {
    "num": 44,
    "time": "00:02:35,039 --> 00:02:36,759",
    "arabic": "جْرَانْدْ بُوسْ، كَيْفَ تَفْعَلُهَا؟",
    "segs": null,
    "full_uz": "Grand-Bos, buni qanday qilyapsiz?",
    "note": null
  },
  {
    "num": 45,
    "time": "00:02:37,519 --> 00:02:39,519",
    "arabic": "لَا شَكَّ أَنَّهَا خُدْعَةٌ، أَنَا وَاثِقَةٌ",
    "segs": null,
    "full_uz": "Bu albatta hiyla, men ishonchim komil.",
    "note": null
  },
  {
    "num": 46,
    "time": "00:02:39,519 --> 00:02:41,000",
    "arabic": "لَدَيَّ رَأْيٌ آخَرُ",
    "segs": null,
    "full_uz": "Mening boshqa fikrim bor.",
    "note": null
  },
  {
    "num": 47,
    "time": "00:02:41,000 --> 00:02:44,759",
    "arabic": "أَظُنُّ أَنَّ نَظَّارَاتِ الْعَلَّامَةِ تَجْعَلُهُ يَرَى دَاخِلَ الصَّنَادِيقِ",
    "segs": null,
    "full_uz": "Menimcha, professorning ko'zoynagi unga qutilarning ichini ko'rish imkonini beradi.",
    "note": null
  },
  {
    "num": 48,
    "time": "00:02:45,319 --> 00:02:47,939",
    "arabic": "لَيْسَ صَحِيحًا",
    "segs": null,
    "full_uz": "Bu noto'g'ri.",
    "note": null
  },
  {
    "num": 49,
    "time": "00:02:47,939 --> 00:02:51,199",
    "arabic": "أَنَا فَقَطْ أَعْلَمُ كَيْفَ أَقْرَأُ شَرِيطَ الرُّمُوزِ",
    "segs": null,
    "full_uz": "Men shunchaki shtrix-kodni o'qishni bilaman.",
    "note": null
  },
  {
    "num": 50,
    "time": "00:02:51,199 --> 00:02:53,099",
    "arabic": "الَّذِي عَلَى كُلِّ صُنْدُوقٍ",
    "segs": null,
    "full_uz": "Har bir qutida bo'lgan.",
    "note": null
  },
  {
    "num": 51,
    "time": "00:02:53,099 --> 00:02:55,159",
    "arabic": "تَقْصِدُ هَذَا؟",
    "segs": null,
    "full_uz": "Buni nazarda tutyapsizmi?",
    "note": null
  },
  {
    "num": 52,
    "time": "00:02:55,159 --> 00:02:55,579",
    "arabic": "نَعَمْ",
    "segs": null,
    "full_uz": "Ha.",
    "note": null
  },
  {
    "num": 53,
    "time": "00:02:56,759 --> 00:03:03,159",
    "arabic": "إِذَا نَظَرْتَ إِلَى الطِّبَاعَةِ الَّتِي عَلَى الْعُبُوَّاتِ وَالصَّنَادِيقِ",
    "segs": null,
    "full_uz": "Agar qadoqlar va qutilardagi bosma belgilarga qarasang.",
    "note": null
  },
  {
    "num": 54,
    "time": "00:03:03,159 --> 00:03:07,099",
    "arabic": "فَسَتَجِدُ شَكْلًا فِيهِ خُطُوطٌ سَوْدَاءُ وَأَرْقَامٌ فِي الْغَالِبِ",
    "segs": null,
    "full_uz": "Ko'pincha qora chiziqlar va raqamlardan iborat shaklni ko'rasan.",
    "note": null
  },
  {
    "num": 55,
    "time": "00:03:07,099 --> 00:03:09,819",
    "arabic": "يُدْعَى هَذَا الشَّكْلُ بِشَرِيطِ الرُّمُوزِ",
    "segs": null,
    "full_uz": "Bu shakl shtrix-kod deb ataladi.",
    "note": null
  },
  {
    "num": 56,
    "time": "00:03:09,819 --> 00:03:12,859",
    "arabic": "يَحْتَوِي كُلُّ شَرِيطٍ عَلَى كُلِّ أَنْوَاعِ الْمَعْلُومَاتِ",
    "segs": null,
    "full_uz": "Har bir kod har xil ma'lumotlarni o'z ichiga oladi.",
    "note": null
  },
  {
    "num": 57,
    "time": "00:03:12,859 --> 00:03:15,879",
    "arabic": "مَاذَا يَكُونُ؟ وَمَا الْبَلَدُ الَّذِي جَاءَ مِنْهُ؟",
    "segs": null,
    "full_uz": "U nima ekanligi? Qaysi mamlakatdan kelganligi?",
    "note": null
  },
  {
    "num": 58,
    "time": "00:03:15,879 --> 00:03:17,539",
    "arabic": "وَحَتَّى فِي أَيِّ مَصْنَعٍ صُنِعَ",
    "segs": null,
    "full_uz": "Va hatto qaysi zavodda ishlab chiqarilganligi.",
    "note": null
  },
  {
    "num": 59,
    "time": "00:03:17,539 --> 00:03:19,799",
    "arabic": "وَبِاسْتِعْمَالِ الْمَاسِحِ الضَّوْئِيِّ الْخَاصِّ",
    "segs": null,
    "full_uz": "Va maxsus skaner yordamida.",
    "note": null
  },
  {
    "num": 60,
    "time": "00:03:19,799 --> 00:03:23,659",
    "arabic": "مِنَ الْمُمْكِنِ قِرَاءَةُ كُلِّ الْمَعْلُومَاتِ الَّتِي يَحْمِلُهَا الشَّرِيطُ",
    "segs": null,
    "full_uz": "Kod olib yuruvchi barcha ma'lumotni o'qish mumkin.",
    "note": null
  },
  {
    "num": 61,
    "time": "00:03:23,659 --> 00:03:27,799",
    "arabic": "إِنَّهُ نِظَامٌ مُمْتَازٌ لِلْمَتَاجِرِ لِمَعْرِفَةِ مَا الَّذِي عِنْدَهُمْ",
    "segs": null,
    "full_uz": "Bu do'konlar uchun o'zlarida nima borligini bilishning a'lo tizimi.",
    "note": null
  },
  {
    "num": 62,
    "time": "00:03:27,799 --> 00:03:34,039",
    "arabic": "أَلَا تَحْتَاجُ إِلَى مَاسِحٍ ضَوْئِيٍّ لِتَقْرَأَهُ؟",
    "segs": null,
    "full_uz": "Uni o'qish uchun skaner kerak emasmi?",
    "note": null
  },
  {
    "num": 63,
    "time": "00:03:34,039 --> 00:03:36,199",
    "arabic": "يُمْكِنُنِي أَنْ أَقْرَأَهَا بِلَا مَاسِحٍ",
    "segs": null,
    "full_uz": "Men uni skanersiz ham o'qiy olaman.",
    "note": null
  },
  {
    "num": 64,
    "time": "00:03:36,199 --> 00:03:38,359",
    "arabic": "سَأُعَلِّمُكُمْ إِنْ أَرَدْتُمْ",
    "segs": null,
    "full_uz": "Xohlasangiz, sizlarga o'rgataman.",
    "note": null
  },
  {
    "num": 65,
    "time": "00:03:38,359 --> 00:03:39,539",
    "arabic": "رَائِعٌ",
    "segs": null,
    "full_uz": "Ajoyib.",
    "note": null
  },
  {
    "num": 66,
    "time": "00:03:39,539 --> 00:03:40,479",
    "arabic": "لِنَنْظُرْ",
    "segs": null,
    "full_uz": "Qani, qaraylik.",
    "note": null
  },
  {
    "num": 67,
    "time": "00:03:40,479 --> 00:03:43,560",
    "arabic": "نَحْنُ نَبْحَثُ عَنْ صُنْدُوقٍ فِيهِ مِكْوَاةٌ",
    "segs": null,
    "full_uz": "Biz ichida dazmol bo'lgan qutini izlayapmiz.",
    "note": null
  },
  {
    "num": 68,
    "time": "00:03:43,560 --> 00:03:44,639",
    "arabic": "هُنَاكَ",
    "segs": null,
    "full_uz": "Ana u yerda.",
    "note": null
  },
  {
    "num": 69,
    "time": "00:03:44,639 --> 00:03:45,740",
    "arabic": "هَا هُوَ",
    "segs": null,
    "full_uz": "Mana u.",
    "note": null
  },
  {
    "num": 70,
    "time": "00:03:45,740 --> 00:03:48,659",
    "arabic": "حَسَنًا، أَيْنَ الْعَلَّامَةُ؟",
    "segs": null,
    "full_uz": "Xo'p, professor qayerda?",
    "note": null
  },
  {
    "num": 71,
    "time": "00:03:48,659 --> 00:03:56,280",
    "arabic": "عَلَى كُلِّ شَيْءٍ يُبَاعُ الْيَوْمَ تَقْرِيبًا نَجِدُ نَوْعًا مِنَ الْعَلَامَاتِ",
    "segs": null,
    "full_uz": "Bugun sotiladigan deyarli har bir narsada biror belgi turini topamiz.",
    "note": null
  },
  {
    "num": 72,
    "time": "00:03:56,280 --> 00:04:00,319",
    "arabic": "مَثَلًا هَذَا النَّوْعُ مِنَ الْعَلَامَاتِ يُدْعَى الرَّمْزَ شَرِيطَ الرُّمُوزِ",
    "segs": null,
    "full_uz": "Masalan, belgilarning bu turi shtrix-kod deb ataladi.",
    "note": null
  },
  {
    "num": 73,
    "time": "00:04:00,319 --> 00:04:03,079",
    "arabic": "أَمَّا هَذَا فَرَمْزُ الِاسْتِجَابَةِ السَّرِيعِ",
    "segs": null,
    "full_uz": "Bu esa tezkor javob kodi (QR kod).",
    "note": "«رَمْزُ الِاسْتِجَابَةِ السَّرِيعِ» — «QR kod» ning arabcha to'liq nomi."
  },
  {
    "num": 74,
    "time": "00:04:03,079 --> 00:04:05,960",
    "arabic": "هَذِهِ الْعَلَامَاتُ فِيهَا كَثِيرٌ مِنَ الْمَعْلُومَاتِ",
    "segs": null,
    "full_uz": "Bu belgilarda ko'p ma'lumot bor.",
    "note": null
  },
  {
    "num": 75,
    "time": "00:04:05,960 --> 00:04:09,859",
    "arabic": "تَخَيَّلْ أَنَّكَ وَجَدْتَ رَمْزَ اسْتِجَابَةٍ سَرِيعًا عَلَى مَبْنًى مَا",
    "segs": null,
    "full_uz": "Tasavvur qil, biror binoda tezkor javob kodini topding.",
    "note": null
  },
  {
    "num": 76,
    "time": "00:04:09,859 --> 00:04:12,859",
    "arabic": "قُمْ بِتَوْجِيهِ كَامِيرَا هَاتِفِكَ الْمَحْمُولِ عَلَيْهِ فَقَطْ",
    "segs": null,
    "full_uz": "Shunchaki telefoningning kamerasini unga qarat.",
    "note": null
  },
  {
    "num": 77,
    "time": "00:04:12,859 --> 00:04:16,860",
    "arabic": "سَتَظْهَرُ مَعْلُومَاتٌ عَلَى الشَّاشَةِ تَتَعَلَّقُ بِمَنْ بَنَاهُ وَمَتَى تَمَّ بِنَاؤُهُ",
    "segs": null,
    "full_uz": "Ekranda uni kim va qachon qurgani haqidagi ma'lumotlar chiqadi.",
    "note": null
  },
  {
    "num": 78,
    "time": "00:04:16,860 --> 00:04:18,879",
    "arabic": "أَلَيْسَ هَذَا رَائِعًا؟",
    "segs": null,
    "full_uz": "Bu ajoyib emasmi?",
    "note": null
  },
  {
    "num": 79,
    "time": "00:04:18,879 --> 00:04:21,240",
    "arabic": "لِلْأَسَفِ لَيْسَ كُلُّ هَاتِفٍ يُمْكِنُهُ فِعْلُ ذَلِكَ",
    "segs": null,
    "full_uz": "Afsuski, har bir telefon buni qila olmaydi.",
    "note": null
  },
  {
    "num": 80,
    "time": "00:04:21,240 --> 00:04:24,080",
    "arabic": "هُنَاكَ أَيْضًا عَلَامَاتٌ تَعْمَلُ بِلَا صُوَرٍ",
    "segs": null,
    "full_uz": "Rasmlarsiz ishlaydigan belgilar ham bor.",
    "note": null
  },
  {
    "num": 81,
    "time": "00:04:24,080 --> 00:04:27,800",
    "arabic": "هُنَاكَ شَرَائِحُ إِلِكْتُرُونِيَّةٌ يُمْكِنُهَا أَنْ تَحْمِلَ الْمَعْلُومَاتِ",
    "segs": null,
    "full_uz": "Ma'lumot saqlashi mumkin bo'lgan elektron chiplar bor.",
    "note": null
  },
  {
    "num": 82,
    "time": "00:04:27,800 --> 00:04:31,639",
    "arabic": "يُمْكِنُ وَضْعُ هَذِهِ الشَّرَائِحِ دَاخِلَ بِطَاقَاتِ التَّعْرِيفِ أَوِ السَّفَرِ",
    "segs": null,
    "full_uz": "Bu chiplarni shaxsni tasdiqlash yoki sayohat kartalari ichiga joylash mumkin.",
    "note": null
  },
  {
    "num": 83,
    "time": "00:04:31,639 --> 00:04:36,639",
    "arabic": "وَكُلُّ مَا عَلَيْكَ فِعْلُهُ هُوَ أَنْ تَضَعَ الْبِطَاقَةَ قُرْبَ جِهَازٍ خَاصٍّ لِتَمُرَّ أَوْ لَا",
    "segs": null,
    "full_uz": "Sen faqat kartani maxsus qurilma yaqiniga qo'yishing kerak — o'tasan yoki yo'q.",
    "note": null
  },
  {
    "num": 84,
    "time": "00:04:36,639 --> 00:04:42,740",
    "arabic": "لَقَدْ أَسْعَدْتُمُونِي",
    "segs": null,
    "full_uz": "Meni xursand qildinglar.",
    "note": null
  },
  {
    "num": 85,
    "time": "00:04:42,740 --> 00:04:44,340",
    "arabic": "وَجَدْتُمُوهَا بِسُرْعَةٍ",
    "segs": null,
    "full_uz": "Uni tez topdinglar.",
    "note": null
  },
  {
    "num": 86,
    "time": "00:04:44,340 --> 00:04:46,639",
    "arabic": "مَاذَا أَفْعَلُ لَوْلَا أَنْتُمْ؟",
    "segs": null,
    "full_uz": "Sizlarsiz nima qilardim?",
    "note": null
  },
  {
    "num": 87,
    "time": "00:04:46,860 --> 00:04:50,020",
    "arabic": "هَلْ مِنْ مُشْكِلَةٍ؟",
    "segs": null,
    "full_uz": "Muammo bormi?",
    "note": null
  },
  {
    "num": 88,
    "time": "00:04:50,020 --> 00:04:52,379",
    "arabic": "هَذِهِ لَيْسَتْ مِكْوَاةً",
    "segs": null,
    "full_uz": "Bu dazmol emas.",
    "note": null
  },
  {
    "num": 89,
    "time": "00:04:52,379 --> 00:04:54,360",
    "arabic": "سَاندْوِيتْشٌ؟ مِنْ أَيْنَ هَذِهِ؟",
    "segs": null,
    "full_uz": "Sendvichmi? Bu qayerdan chiqdi?",
    "note": null
  },
  {
    "num": 90,
    "time": "00:04:54,360 --> 00:04:59,720",
    "arabic": "لِي، أَرَدْتُ وَضْعَهَا فِي الْبَرَّادِ بِالْأَمْسِ وَلَكِنْ أَظُنُّ أَنَّنِي وَضَعْتُهَا فِي...",
    "segs": null,
    "full_uz": "Bu meniki, kecha muzlatgichga qo'ymoqchi edim, lekin uni qayergadir qo'ygandekman...",
    "note": null
  },
  {
    "num": 91,
    "time": "00:04:59,720 --> 00:05:01,939",
    "arabic": "أَنَا أَتَشَتَّتُ بِسُهُولَةٍ كَبِيرَةٍ",
    "segs": null,
    "full_uz": "Mening diqqatim juda oson chalg'iydi.",
    "note": null
  },
  {
    "num": 92,
    "time": "00:05:01,939 --> 00:05:04,740",
    "arabic": "لَحْظَةً، عَلَيْنَا أَنْ نُفَكِّرَ مَنْطِقِيًّا",
    "segs": null,
    "full_uz": "Bir daqiqa, mantiqiy fikrlashimiz kerak.",
    "note": null
  },
  {
    "num": 93,
    "time": "00:05:04,740 --> 00:05:08,819",
    "arabic": "إِذَا وَضَعْتَ شَطِيرَتَكَ فِي الصُّنْدُوقِ حَيْثُ يَجِبُ أَنْ تَضَعَ الْمِكْوَاةَ",
    "segs": null,
    "full_uz": "Agar sendvichingni dazmol qo'yilishi kerak bo'lgan qutiga qo'ygan bo'lsang.",
    "note": null
  },
  {
    "num": 94,
    "time": "00:05:08,819 --> 00:05:12,319",
    "arabic": "فَلَا شَكَّ أَنَّكَ وَضَعْتَهَا فِي الْبَرَّادِ",
    "segs": null,
    "full_uz": "Demak, dazmolni albatta muzlatgichga qo'yganding.",
    "note": null
  },
  {
    "num": 95,
    "time": "00:05:12,319 --> 00:05:17,639",
    "arabic": "هَا أَنْتَ ذِي",
    "segs": null,
    "full_uz": "Mana sen.",
    "note": null
  },
  {
    "num": 96,
    "time": "00:05:17,639 --> 00:05:20,019",
    "arabic": "هَا أَنْتِ ذِي يَا مِكْوَاتِي الْجَدِيدَةُ",
    "segs": null,
    "full_uz": "Mana sen, yangi dazmolim.",
    "note": null
  },
  {
    "num": 97,
    "time": "00:05:20,019 --> 00:05:22,099",
    "arabic": "فَتَّشْتُ عَنْكِ فِي كُلِّ مَكَانٍ",
    "segs": null,
    "full_uz": "Seni hamma joydan qidirdim.",
    "note": null
  },
  {
    "num": 98,
    "time": "00:05:22,099 --> 00:05:23,899",
    "arabic": "شُكْرًا لَكُمْ مَرَّةً ثَانِيَةً",
    "segs": null,
    "full_uz": "Sizlarga yana rahmat.",
    "note": null
  },
  {
    "num": 99,
    "time": "00:05:23,899 --> 00:05:25,879",
    "arabic": "لَا دَاعِيَ لِلشُّكْرِ يَا سَيِّدِي",
    "segs": null,
    "full_uz": "Rahmat aytishning hojati yo'q, janob.",
    "note": null
  },
  {
    "num": 100,
    "time": "00:05:25,879 --> 00:05:27,839",
    "arabic": "فَأَنْتَ دَائِمًا تُسَاعِدُنَا",
    "segs": null,
    "full_uz": "Axir siz doim bizga yordam berasiz.",
    "note": null
  },
  {
    "num": 101,
    "time": "00:05:27,839 --> 00:05:31,500",
    "arabic": "يَكْفِي أَنَّكَ سَمَحْتَ لَنَا بِأَنْ نَفْتَحَ مَدْرَسَتَنَا فِي مُخْتَبَرِكَ",
    "segs": null,
    "full_uz": "Bizga maktabimizni laboratoriyangizda ochishga ruxsat berganingiz kifoya.",
    "note": null
  },
  {
    "num": 102,
    "time": "00:05:31,500 --> 00:05:33,759",
    "arabic": "وَلَيْسَ عَلَيْنَا أَنْ نُخَبِّئَ أَنْفُسَنَا",
    "segs": null,
    "full_uz": "Va o'zimizni yashirishimiz shart emas.",
    "note": null
  },
  {
    "num": 103,
    "time": "00:05:33,759 --> 00:05:36,379",
    "arabic": "أَجَلْ، لِأَنَّكَ لَطِيفٌ جِدًّا",
    "segs": null,
    "full_uz": "Ha, chunki siz juda mehribonsiz.",
    "note": null
  },
  {
    "num": 104,
    "time": "00:05:36,379 --> 00:05:38,439",
    "arabic": "وَتُحِبُّ الْفِكْسِيزَ",
    "segs": null,
    "full_uz": "Va Fiksilarni yaxshi ko'rasiz.",
    "note": null
  }
];
if (typeof module !== "undefined" && module.exports) {
  module.exports = lessons;
}