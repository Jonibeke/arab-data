const lessons = [
  {
    "num": 1,
    "time": "00:00:30,000 --> 00:00:36,000",
    "arabic": "الْمِكْنَسَةُ الْكَهْرَبَائِيَّةُ",
    "segs": null,
    "full_uz": "Elektr supurgi (chang yutgich).",
    "note": null
  },
  {
    "num": 2,
    "time": "00:00:36,440 --> 00:00:42,900",
    "arabic": "مَا الْغَايَةُ مِنْ تَرْتِيبِ الْأَلْعَابِ؟",
    "segs": null,
    "full_uz": "O'yinchoqlarni tartibga solishning nima keragi bor?",
    "note": null
  },
  {
    "num": 3,
    "time": "00:00:43,000 --> 00:00:44,899",
    "arabic": "إِنْ كُنْتُ سَأُخْرِجُهَا فِيمَا بَعْدُ",
    "segs": null,
    "full_uz": "Baribir keyin ularni yana olib chiqaraman-ku.",
    "note": null
  },
  {
    "num": 4,
    "time": "00:00:44,899 --> 00:00:47,100",
    "arabic": "تَمَامًا",
    "segs": null,
    "full_uz": "Xuddi shunday.",
    "note": null
  },
  {
    "num": 5,
    "time": "00:00:47,100 --> 00:00:52,000",
    "arabic": "تُومُ تُومَسْ",
    "segs": null,
    "full_uz": "Tom Tomas!",
    "note": null
  },
  {
    "num": 6,
    "time": "00:00:52,000 --> 00:00:54,480",
    "arabic": "إِذَا انْتَهَيْتَ مِنَ التَّنْظِيفِ فَتَنَاوَلْ غَدَاءً",
    "segs": [
      { "ar": "إِذَا انْتَهَيْتَ مِنَ التَّنْظِيفِ", "uz": "tozalashni tugatsang" },
      { "ar": "فَتَنَاوَلْ غَدَاءً", "uz": "tushlik qil" }
    ],
    "full_uz": "Tozalashni tugatsang, tushlik qil.",
    "note": null
  },
  {
    "num": 7,
    "time": "00:00:54,480 --> 00:00:56,679",
    "arabic": "حَسَنًا لَحْظَةً وَاحِدَةً",
    "segs": null,
    "full_uz": "Xo'p, bir daqiqa.",
    "note": null
  },
  {
    "num": 8,
    "time": "00:00:56,679 --> 00:00:58,659",
    "arabic": "نُولِيكْ سَتَنْتَظِرُنِي؟",
    "segs": null,
    "full_uz": "Nolik, meni kutasanmi?",
    "note": null
  },
  {
    "num": 9,
    "time": "00:00:58,659 --> 00:00:59,120",
    "arabic": "أَجَلْ",
    "segs": null,
    "full_uz": "Ha.",
    "note": null
  },
  {
    "num": 10,
    "time": "00:00:59,119 --> 00:01:29,120",
    "arabic": "هَااا",
    "segs": null,
    "full_uz": "Va-a-ay!",
    "note": "هَااا — bu yerda so'z emas, kutilmagan holatda (masalan, ichkariga sug'urilib ketishda) chiqarilgan qo'rquv yoki hayrat undovi."
  },
  {
    "num": 11,
    "time": "00:01:29,120 --> 00:01:31,120",
    "arabic": "بِالصِّحَّةِ وَالْعَافِيَةِ",
    "segs": null,
    "full_uz": "Yoqimli bo'lsin (sog'lik-salomatlik bilan).",
    "note": "بِالصِّحَّةِ وَالْعَافِيَةِ — ovqatlanishdan keyin yoki hammomdan chiqqanda aytiladigan duo-ibora, o'zbekchada 'yoqimli bo'lsin' yoki 'engil bo'lsin' ma'nosiga to'g'ri keladi."
  },
  {
    "num": 12,
    "time": "00:01:32,320 --> 00:01:33,120",
    "arabic": "شُكْرًا",
    "segs": null,
    "full_uz": "Rahmat.",
    "note": null
  },
  {
    "num": 13,
    "time": "00:01:33,420 --> 00:01:35,420",
    "arabic": "أَنْتَ لَنْ تَقُومَ بِأَكْلِي، صَحِيحٌ؟",
    "segs": null,
    "full_uz": "Meni yemaysan-ku, to'g'rimi?",
    "note": null
  },
  {
    "num": 14,
    "time": "00:01:37,719 --> 00:01:39,719",
    "arabic": "لَا أُحِبُّ طَعْمَ الْفِيكْسِيزِ",
    "segs": null,
    "full_uz": "Fiksilarning ta'mini yoqtirmayman.",
    "note": null
  },
  {
    "num": 15,
    "time": "00:01:41,820 --> 00:01:43,820",
    "arabic": "إِنَّهُ أُمِّي شَغَّلَتِ الْمِكْنَسَةَ",
    "segs": null,
    "full_uz": "Bu... onam supurgini yoqib yubordi.",
    "note": null
  },
  {
    "num": 16,
    "time": "00:01:55,420 --> 00:01:56,420",
    "arabic": "أَرْجُوكُمْ",
    "segs": null,
    "full_uz": "Iltimos!",
    "note": null
  },
  {
    "num": 17,
    "time": "00:01:56,820 --> 00:01:57,820",
    "arabic": "النَّجْدَةَ",
    "segs": null,
    "full_uz": "Yordam!",
    "note": null
  },
  {
    "num": 18,
    "time": "00:01:57,819 --> 00:02:00,939",
    "arabic": "النَّجْدَةَ سَاعِدُونِي",
    "segs": null,
    "full_uz": "Yordam, menga yordam beringlar!",
    "note": null
  },
  {
    "num": 19,
    "time": "00:02:00,939 --> 00:02:06,079",
    "arabic": "شَيْءٌ غَرِيبٌ تَسْحَبُ الْمِكْنَسَةُ الْكَهْرَبَائِيَّةُ الْغُبَارَ إِلَى الدَّاخِلِ",
    "segs": [
      { "ar": "شَيْءٌ غَرِيبٌ", "uz": "g'alati narsa" },
      { "ar": "تَسْحَبُ الْمِكْنَسَةُ الْكَهْرَبَائِيَّةُ الْغُبَارَ إِلَى الدَّاخِلِ", "uz": "elektr supurgi changni ichkariga tortadi" }
    ],
    "full_uz": "G'alati narsa, elektr supurgi changni ichkariga tortadi,",
    "note": null
  },
  {
    "num": 20,
    "time": "00:02:06,079 --> 00:02:09,379",
    "arabic": "وَلَا تُخْرِجُ مِنْهُ شَيْئًا",
    "segs": null,
    "full_uz": "va undan hech narsani chiqarmaydi.",
    "note": null
  },
  {
    "num": 21,
    "time": "00:02:09,379 --> 00:02:11,259",
    "arabic": "الْأَمْرُ بَسِيطٌ جِدًّا",
    "segs": null,
    "full_uz": "Bu juda oddiy narsa.",
    "note": null
  },
  {
    "num": 22,
    "time": "00:02:11,259 --> 00:02:14,659",
    "arabic": "تَعَلَّمْنَا هَذَا فِي الصَّفِّ الثَّالِثِ فِي مَدْرَسَةِ الْفِيكْسِيزِ",
    "segs": null,
    "full_uz": "Buni fiksilar maktabining uchinchi sinfida o'rgangan edik.",
    "note": null
  },
  {
    "num": 23,
    "time": "00:02:14,659 --> 00:02:23,859",
    "arabic": "حَاوِلْ أَنْ تُفَكِّرَ فِي الْمِكْنَسَةِ الْكَهْرَبَائِيَّةِ عَلَى أَنَّهَا لَيْسَتْ سِوَى مِرْوَحَةٍ مَعَ شَبَكَةٍ",
    "segs": null,
    "full_uz": "Elektr supurgini shunchaki to'r bilan birga bo'lgan shamollatgich deb tasavvur qil.",
    "note": null
  },
  {
    "num": 24,
    "time": "00:02:23,860 --> 00:02:29,220",
    "arabic": "تَدُورُ الْمِرْوَحَةُ عَكْسِيًّا فَتَسْحَبُ الْهَوَاءَ الْمُحَمَّلَ بِالْغُبَارِ وَالْأَوْسَاخِ إِلَى الدَّاخِلِ",
    "segs": [
      { "ar": "تَدُورُ الْمِرْوَحَةُ عَكْسِيًّا", "uz": "shamollatgich teskari aylanadi" },
      { "ar": "فَتَسْحَبُ الْهَوَاءَ الْمُحَمَّلَ بِالْغُبَارِ وَالْأَوْسَاخِ إِلَى الدَّاخِلِ", "uz": "shunda chang va iflos zarralar bilan to'lgan havoni ichkariga tortib oladi" }
    ],
    "full_uz": "Shamollatgich teskari aylanadi, shunda chang va iflos zarralar bilan to'lgan havoni ichkariga tortib oladi.",
    "note": null
  },
  {
    "num": 25,
    "time": "00:02:29,220 --> 00:02:36,160",
    "arabic": "وَإِذَا وَضَعْتَ شَبَكَةً أَمَامَ الْمِرْوَحَةِ فَسَيَعْلَقُ كُلُّ مَا فِي الْهَوَاءِ بِالشَّبَكَةِ وَيَمُرُّ الْهَوَاءُ خِلَالَهَا",
    "segs": [
      { "ar": "وَإِذَا وَضَعْتَ شَبَكَةً أَمَامَ الْمِرْوَحَةِ", "uz": "agar shamollatgich oldiga to'r qo'ysang" },
      { "ar": "فَسَيَعْلَقُ كُلُّ مَا فِي الْهَوَاءِ بِالشَّبَكَةِ", "uz": "havodagi hamma narsa to'rga yopishib qoladi" },
      { "ar": "وَيَمُرُّ الْهَوَاءُ خِلَالَهَا", "uz": "havoning o'zi esa undan o'tib ketaveradi" }
    ],
    "full_uz": "Agar shamollatgich oldiga to'r qo'ysang, havodagi hamma narsa to'rga yopishib qoladi, havoning o'zi esa undan o'tib ketaveradi.",
    "note": null
  },
  {
    "num": 26,
    "time": "00:02:36,160 --> 00:02:40,860",
    "arabic": "وَبَعْدَهَا كُلُّ مَا تَحْتَاجُ إِلَيْهِ هُوَ إِضَافَةُ أَنْبُوبٍ لِتَحْصُلَ عَلَى مِكْنَسَةٍ كَهْرَبَائِيَّةٍ",
    "segs": [
      { "ar": "وَبَعْدَهَا كُلُّ مَا تَحْتَاجُ إِلَيْهِ هُوَ إِضَافَةُ أَنْبُوبٍ", "uz": "shundan keyin senga faqat quvurcha qo'shish qoladi" },
      { "ar": "لِتَحْصُلَ عَلَى مِكْنَسَةٍ كَهْرَبَائِيَّةٍ", "uz": "va elektr supurgiga ega bo'lasan" }
    ],
    "full_uz": "Shundan keyin senga faqat quvurcha qo'shish qoladi, va elektr supurgiga ega bo'lasan.",
    "note": null
  },
  {
    "num": 27,
    "time": "00:02:41,400 --> 00:02:46,820",
    "arabic": "لَكِنْ بَدَلًا مِنَ الشَّبَكَةِ يُسْتَعْمَلُ لِلْمَكَانِسِ نَوْعٌ خَاصٌّ مِنَ الْأَكْيَاسِ لِجَمْعِ الْغُبَارِ وَالْأَوْسَاخِ",
    "segs": null,
    "full_uz": "Lekin to'r o'rniga supurgilarda chang va ifloslikni yig'ish uchun maxsus xaltalar ishlatiladi.",
    "note": null
  },
  {
    "num": 28,
    "time": "00:02:46,820 --> 00:02:47,860",
    "arabic": "الْأَمْرُ بِهَذِهِ الْبَسَاطَةِ",
    "segs": null,
    "full_uz": "Ish shu qadar oddiy.",
    "note": null
  },
  {
    "num": 29,
    "time": "00:02:48,480 --> 00:02:53,740",
    "arabic": "حَسَنًا سِيمْكَا، هَلْ يُعْقَلُ أَنَّ الْمِكْنَسَةَ قَدْ سَحَبَتْ نُولِيكْ إِلَى الدَّاخِلِ؟",
    "segs": null,
    "full_uz": "Xo'p, Simka, elektr supurgi Nolikni ichkariga tortib olgani mumkinmi?",
    "note": "SRTda 'تقد' deb yozilgan, to'g'ri shakli 'قَدْ' (allaqachon) bo'ladi."
  },
  {
    "num": 30,
    "time": "00:02:53,740 --> 00:02:57,740",
    "arabic": "يَا إِلَهِي، هَلْ تَرَكْتَهُ هُنَاكَ حَقًّا؟",
    "segs": [
      { "ar": "يَا إِلَهِي", "uz": "Voy xudoyim!" },
      { "ar": "هَلْ تَرَكْتَهُ هُنَاكَ حَقًّا؟", "uz": "rostdan ham uni o'sha yerda qoldirdingmi?" }
    ],
    "full_uz": "Voy xudoyim! Rostdan ham uni o'sha yerda qoldirdingmi?",
    "note": null
  },
  {
    "num": 31,
    "time": "00:02:59,740 --> 00:03:01,740",
    "arabic": "تُومُ، مَاذَا بِكَ؟",
    "segs": null,
    "full_uz": "Tom, senga nima bo'ldi?",
    "note": null
  },
  {
    "num": 32,
    "time": "00:03:02,740 --> 00:03:07,740",
    "arabic": "أُمِّي، أَنَا سَأُكْمِلُ كَنْسَ الْغُرْفَةِ لَكِ، أَقْصِدُ بَدَلًا مِنْكِ",
    "segs": [
      { "ar": "أُمِّي، أَنَا سَأُكْمِلُ كَنْسَ الْغُرْفَةِ لَكِ", "uz": "Onajon, men xonani supurishni tugataman" },
      { "ar": "أَقْصِدُ بَدَلًا مِنْكِ", "uz": "ya'ni, sen o'rningga" }
    ],
    "full_uz": "Onajon, men xonani supurishni tugataman, ya'ni, sen o'rningga.",
    "note": null
  },
  {
    "num": 33,
    "time": "00:03:08,740 --> 00:03:10,740",
    "arabic": "حَسَنًا، سَأُنَظِّفُ الْأَطْبَاقَ",
    "segs": null,
    "full_uz": "Xo'p, men idishlarni tozalayman.",
    "note": null
  },
  {
    "num": 34,
    "time": "00:03:13,740 --> 00:03:16,740",
    "arabic": "نُولِيكْ، نُولِيكْ",
    "segs": null,
    "full_uz": "Nolik, Nolik!",
    "note": null
  },
  {
    "num": 35,
    "time": "00:03:17,740 --> 00:03:20,740",
    "arabic": "نُولِيكْ، نُولِيكْ",
    "segs": null,
    "full_uz": "Nolik, Nolik!",
    "note": null
  },
  {
    "num": 36,
    "time": "00:03:20,740 --> 00:03:24,780",
    "arabic": "نُولِيكْ",
    "segs": null,
    "full_uz": "Nolik!",
    "note": null
  },
  {
    "num": 37,
    "time": "00:03:24,780 --> 00:03:28,460",
    "arabic": "يَجِبُ أَنْ أَطْلُبَ الْمُسَاعَدَةَ فِي الْحَالِ",
    "segs": null,
    "full_uz": "Zudlik bilan yordam so'rashim kerak.",
    "note": null
  },
  {
    "num": 38,
    "time": "00:03:28,460 --> 00:03:32,740",
    "arabic": "مَاسِيَا",
    "segs": null,
    "full_uz": "Masiya!",
    "note": null
  },
  {
    "num": 39,
    "time": "00:03:32,740 --> 00:03:33,820",
    "arabic": "مَاسِيَا",
    "segs": null,
    "full_uz": "Masiya!",
    "note": null
  },
  {
    "num": 40,
    "time": "00:03:33,820 --> 00:03:36,900",
    "arabic": "عَلِقَ نُولِيكْ دَاخِلَ الْمِكْنَسَةِ الْكَهْرَبَائِيَّةِ",
    "segs": null,
    "full_uz": "Nolik elektr supurgi ichida qolib ketdi.",
    "note": null
  },
  {
    "num": 41,
    "time": "00:03:36,900 --> 00:03:37,939",
    "arabic": "هَذَا مُسْتَحِيلٌ",
    "segs": null,
    "full_uz": "Bu mumkin emas.",
    "note": null
  },
  {
    "num": 42,
    "time": "00:03:37,939 --> 00:03:39,879",
    "arabic": "لَنْ تَتَّسِعَ لَهُ",
    "segs": null,
    "full_uz": "U sig'maydi-ku.",
    "note": null
  },
  {
    "num": 43,
    "time": "00:03:39,879 --> 00:03:43,620",
    "arabic": "لَا لَيْسَ فِي هَذِهِ الْمِكْنَسَةِ بَلْ فِي الْكَبِيرَةِ الْبَشَرِيَّةِ",
    "segs": [
      { "ar": "لَا لَيْسَ فِي هَذِهِ الْمِكْنَسَةِ", "uz": "yo'q, bu (kichik) supurgida emas" },
      { "ar": "بَلْ فِي الْكَبِيرَةِ الْبَشَرِيَّةِ", "uz": "balki katta, insonlarnikida" }
    ],
    "full_uz": "Yo'q, bu (kichik) supurgida emas, balki katta, insonlarnikida.",
    "note": null
  },
  {
    "num": 44,
    "time": "00:03:43,620 --> 00:03:44,540",
    "arabic": "هَذَا مُرَوِّعٌ",
    "segs": null,
    "full_uz": "Bu dahshatli.",
    "note": null
  },
  {
    "num": 45,
    "time": "00:03:44,540 --> 00:03:47,200",
    "arabic": "يَا إِلَهِي نُولِيكْ قَدْ يَخْتَنِقُ هُنَاكَ",
    "segs": null,
    "full_uz": "Voy xudoyim, Nolik u yerda bo'g'ilib qolishi mumkin.",
    "note": null
  },
  {
    "num": 46,
    "time": "00:03:47,200 --> 00:03:48,160",
    "arabic": "هَيَّا بِسُرْعَةٍ",
    "segs": null,
    "full_uz": "Tez bo'l, ketdik.",
    "note": null
  },
  {
    "num": 47,
    "time": "00:03:48,159 --> 00:03:57,359",
    "arabic": "هَذَا الْغُبَارُ كَرِيهٌ جِدًّا",
    "segs": null,
    "full_uz": "Bu chang juda jirkanch.",
    "note": "SRTda 'كريم' (saxiy) deb yozilgan, mazmunga ko'ra to'g'risi 'كَرِيه' (jirkanch, yoqimsiz) bo'lishi kerak."
  },
  {
    "num": 48,
    "time": "00:03:57,359 --> 00:04:00,460",
    "arabic": "وَهُوَ سَيِّئٌ جِدًّا لِصِحَّتِكَ أَيْضًا",
    "segs": null,
    "full_uz": "U sog'ligingga ham juda zararli.",
    "note": null
  },
  {
    "num": 49,
    "time": "00:04:00,460 --> 00:04:06,300",
    "arabic": "إِنَّ الْغُبَارَ هُوَ عَدُوٌّ صَغِيرٌ فَمِنَ الصَّعْبِ مُلَاحَظَتُهُ",
    "segs": [
      { "ar": "إِنَّ الْغُبَارَ هُوَ عَدُوٌّ صَغِيرٌ", "uz": "chang — kichkina dushman" },
      { "ar": "فَمِنَ الصَّعْبِ مُلَاحَظَتُهُ", "uz": "uni sezish qiyin" }
    ],
    "full_uz": "Chang — kichkina dushman, uni sezish qiyin,",
    "note": null
  },
  {
    "num": 50,
    "time": "00:04:06,300 --> 00:04:09,819",
    "arabic": "لَكِنْ إِنْ وَصَلَ الْغُبَارُ إِلَى دَاخِلِ الْآلَاتِ وَالْأَجْهِزَةِ",
    "segs": null,
    "full_uz": "lekin agar chang mashina va jihozlar ichiga kirib qolsa,",
    "note": null
  },
  {
    "num": 51,
    "time": "00:04:09,819 --> 00:04:11,919",
    "arabic": "فَهَذَا يَعْنِي كَارِثَةً كَبِيرَةً",
    "segs": null,
    "full_uz": "bu katta falokat degani.",
    "note": null
  },
  {
    "num": 52,
    "time": "00:04:11,919 --> 00:04:14,800",
    "arabic": "يُمْكِنُهُ أَنْ يَمْنَعَ الْمُسَنَّنَاتِ مِنَ الدَّوَرَانِ",
    "segs": null,
    "full_uz": "U tishli g'ildiraklarning aylanishiga to'sqinlik qilishi mumkin,",
    "note": null
  },
  {
    "num": 53,
    "time": "00:04:14,800 --> 00:04:17,879",
    "arabic": "أَوْ يُسَبِّبُ ارْتِفَاعَ حَرَارَةِ الْأَجْهِزَةِ",
    "segs": null,
    "full_uz": "yoki jihozlarning qizib ketishiga sabab bo'lishi mumkin.",
    "note": null
  },
  {
    "num": 54,
    "time": "00:04:17,879 --> 00:04:23,259",
    "arabic": "وَإِذَا وَصَلَ إِلَى النَّوَاقِلِ الْكَهْرَبَائِيَّةِ فَقَدْ يُسَبِّبُ تَمَاسًّا وَهَذَا يُؤَدِّي إِلَى حَرِيقٍ",
    "segs": [
      { "ar": "وَإِذَا وَصَلَ إِلَى النَّوَاقِلِ الْكَهْرَبَائِيَّةِ", "uz": "agar elektr o'tkazgichlarga yetib borsa" },
      { "ar": "فَقَدْ يُسَبِّبُ تَمَاسًّا", "uz": "qisqa tutashuvga sabab bo'lishi mumkin" },
      { "ar": "وَهَذَا يُؤَدِّي إِلَى حَرِيقٍ", "uz": "bu esa yong'inga olib keladi" }
    ],
    "full_uz": "Agar elektr o'tkazgichlarga yetib borsa, qisqa tutashuvga sabab bo'lishi mumkin, bu esa yong'inga olib keladi.",
    "note": null
  },
  {
    "num": 55,
    "time": "00:04:23,259 --> 00:04:27,839",
    "arabic": "وَلِهَذَا نَحْنُ الْفِيكْسِيزُ نَقُومُ بِتَنْظِيفِ دَاخِلِ الْأَجْهِزَةِ مِنَ الْغُبَارِ عَلَى الدَّوَامِ",
    "segs": null,
    "full_uz": "Shuning uchun biz fiksilar jihozlar ichini changdan doimo tozalab turamiz,",
    "note": null
  },
  {
    "num": 56,
    "time": "00:04:27,839 --> 00:04:31,219",
    "arabic": "عَلَى الرَّغْمِ مِنْ أَنَّ بَعْضَنَا يَتَحَسَّسُ مِنْهُ",
    "segs": null,
    "full_uz": "garchi ba'zilarimiz undan allergiya bo'lsa ham.",
    "note": null
  },
  {
    "num": 57,
    "time": "00:04:31,219 --> 00:04:36,579",
    "arabic": "لَيْتَ النَّاسَ يَهْتَمُّونَ بِنَظَافَةِ أَدَوَاتِهِمْ أَكْثَرَ بِقَلِيلٍ مِمَّا يَفْعَلُونَ الْآنَ",
    "segs": null,
    "full_uz": "Qani edi, odamlar o'z asboblarining tozaligiga hozirgidan biroz ko'proq e'tibor berishsa.",
    "note": null
  },
  {
    "num": 58,
    "time": "00:04:36,579 --> 00:04:41,199",
    "arabic": "لِيُنَظِّفُوهَا عَلَى الْأَقَلِّ مِنَ الْخَارِجِ فَهَذَا سَيَجْعَلُ عَمَلَنَا أَسْهَلَ",
    "segs": [
      { "ar": "لِيُنَظِّفُوهَا عَلَى الْأَقَلِّ مِنَ الْخَارِجِ", "uz": "hech bo'lmasa uni tashqi tomondan tozalashsa" },
      { "ar": "فَهَذَا سَيَجْعَلُ عَمَلَنَا أَسْهَلَ", "uz": "bu bizning ishimizni osonlashtiradi" }
    ],
    "full_uz": "Hech bo'lmasa uni tashqi tomondan tozalashsa, bu bizning ishimizni osonlashtiradi,",
    "note": null
  },
  {
    "num": 59,
    "time": "00:04:41,199 --> 00:04:47,060",
    "arabic": "وَبِالتَّأْكِيدِ سَتَقِلُّ أَعْطَالُ أَدَوَاتِهِمْ كَثِيرًا",
    "segs": null,
    "full_uz": "va shubhasiz, ularning asboblari kamroq buziladi.",
    "note": null
  },
  {
    "num": 60,
    "time": "00:04:47,879 --> 00:04:50,879",
    "arabic": "هَذَا يَعْنِي أَنَّهُ عَلَيْنَا تَنْظِيفَ أَدَوَاتِنَا دَائِمًا",
    "segs": null,
    "full_uz": "Demak, biz o'z asboblarimizni doim tozalab turishimiz kerak.",
    "note": null
  },
  {
    "num": 61,
    "time": "00:04:50,879 --> 00:04:58,879",
    "arabic": "مَاذَا؟ هَلْ وَجَدْتُمَاهُ؟",
    "segs": null,
    "full_uz": "Nima? Ikkovingiz uni topdinglarmi?",
    "note": "وَجَدْتُمَاهُ — ikkilik (dual) fe'l shakli, ikki kishiga birdan qaratilgan savolni bildiradi."
  },
  {
    "num": 62,
    "time": "00:05:00,060 --> 00:05:00,439",
    "arabic": "لَا",
    "segs": null,
    "full_uz": "Yo'q.",
    "note": null
  },
  {
    "num": 63,
    "time": "00:05:00,439 --> 00:05:02,319",
    "arabic": "هَذِهِ غَلْطَتِي",
    "segs": null,
    "full_uz": "Bu mening xatoim.",
    "note": null
  },
  {
    "num": 64,
    "time": "00:05:02,319 --> 00:05:05,879",
    "arabic": "طَلَبَتْ إِلَيَّ أُمِّي أَنْ أُرَتِّبَ أَلْعَابِي لَكِنْ لَمْ أَفْعَلْ",
    "segs": [
      { "ar": "طَلَبَتْ إِلَيَّ أُمِّي أَنْ أُرَتِّبَ أَلْعَابِي", "uz": "onam menga o'yinchoqlarimni tartibga solishni so'ragan edi" },
      { "ar": "لَكِنْ لَمْ أَفْعَلْ", "uz": "lekin men qilmadim" }
    ],
    "full_uz": "Onam menga o'yinchoqlarimni tartibga solishni so'ragan edi, lekin men qilmadim.",
    "note": null
  },
  {
    "num": 65,
    "time": "00:05:06,620 --> 00:05:09,600",
    "arabic": "وَالْآنَ نُولِيكْ عَلِقَ هُنَا بِسَبَبِي أَنَا",
    "segs": null,
    "full_uz": "Va endi Nolik mening sababimdan shu yerda qolib ketdi.",
    "note": null
  },
  {
    "num": 66,
    "time": "00:05:09,600 --> 00:05:16,199",
    "arabic": "نُولِيكْ",
    "segs": null,
    "full_uz": "Nolik!",
    "note": null
  },
  {
    "num": 67,
    "time": "00:05:16,199 --> 00:05:34,839",
    "arabic": "مَاذَا؟ لَقَدِ اعْتَذَرْتُ الْآنَ وَقَدْ وَعَدْتُكُمَا أَنْ أُرَتِّبَ أَلْعَابِي",
    "segs": [
      { "ar": "مَاذَا؟", "uz": "Nima?" },
      { "ar": "لَقَدِ اعْتَذَرْتُ الْآنَ", "uz": "men hozir kechirim so'radim-ku" },
      { "ar": "وَقَدْ وَعَدْتُكُمَا أَنْ أُرَتِّبَ أَلْعَابِي", "uz": "va ikkovingizga o'yinchoqlarimni tartibga solishga va'da berdim" }
    ],
    "full_uz": "Nima? Men hozir kechirim so'radim-ku, va ikkovingizga o'yinchoqlarimni tartibga solishga va'da berdim.",
    "note": "وَعَدْتُكُمَا — ikkilik (dual) shakl, ikki kishiga birdan qaratilgan va'dani bildiradi."
  },
  {
    "num": 68,
    "time": "00:05:34,839 --> 00:05:38,939",
    "arabic": "وَلِمَاذَا أَنْتَ تَعَطَّسْتَ؟",
    "segs": null,
    "full_uz": "Nega sen aksirding?",
    "note": null
  },
  {
    "num": 69,
    "time": "00:05:39,560 --> 00:05:44,839",
    "arabic": "لِأَنْضَمَّ إِلَيْكُمَا لِتَشْعُرَا بِبَعْضِ التَّحَسُّنِ",
    "segs": null,
    "full_uz": "Ikkovingizga qo'shilish uchun, o'zingizni biroz yaxshiroq his qilishinglar uchun.",
    "note": "لِتَشْعُرَا — ikkilik (dual) fe'l shakli, ikki kishiga birdan qaratilgan maqsad jumlasi."
  }
];
if (typeof module !== "undefined" && module.exports) {
  module.exports = lessons;
}
