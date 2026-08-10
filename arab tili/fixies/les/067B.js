const lessons = [
  {
    "num": 1,
    "time": "00:00:32,870 --> 00:00:44,129",
    "arabic": "الْمُخْتَبَرُ",
    "segs": null,
    "full_uz": "Laboratoriya.",
    "note": null
  },
  {
    "num": 2,
    "time": "00:00:48,719 --> 00:00:54,680",
    "arabic": "يُرِيدُكُمَا جْرَانْدْ بُوسْ، عَلَيْكُمَا الذَّهَابُ إِلَى الْمَدْرَسَةِ الْآنَ",
    "segs": [
      { "ar": "يُرِيدُكُمَا جْرَانْدْ بُوسْ", "uz": "sizlarni Grand-Bos chaqiryapti" },
      { "ar": "عَلَيْكُمَا الذَّهَابُ إِلَى الْمَدْرَسَةِ الْآنَ", "uz": "hozir maktabga borishlaring kerak" }
    ],
    "full_uz": "Sizlarni Grand-Bos chaqiryapti, hozir maktabga borishlaring kerak.",
    "note": null
  },
  {
    "num": 3,
    "time": "00:00:54,679 --> 00:00:56,780",
    "arabic": "مَاذَا قَالَ؟",
    "segs": null,
    "full_uz": "Nima dedi?",
    "note": null
  },
  {
    "num": 4,
    "time": "00:00:56,780 --> 00:00:58,659",
    "arabic": "عَلَيْنَا الذَّهَابُ إِلَى الْمَدْرَسَةِ",
    "segs": null,
    "full_uz": "Maktabga borishimiz kerak.",
    "note": "«عَلَيْنَا» — «عَلَى» old ko'makchisi zamir bilan qo'shilib «bizga (kerak)» ma'nosidagi majburiyatni bildiradi."
  },
  {
    "num": 5,
    "time": "00:00:58,659 --> 00:01:01,240",
    "arabic": "لِمَاذَا؟ هَلْ سَمِعْتَهُ جَيِّدًا؟",
    "segs": [
      { "ar": "لِمَاذَا", "uz": "nega" },
      { "ar": "هَلْ سَمِعْتَهُ جَيِّدًا", "uz": "uni yaxshi eshitdingmi" }
    ],
    "full_uz": "Nega? Uni yaxshi eshitdingmi?",
    "note": null
  },
  {
    "num": 6,
    "time": "00:01:01,240 --> 00:01:02,100",
    "arabic": "لَا، وَأَنْتَ؟",
    "segs": null,
    "full_uz": "Yo'q, sen-chi?",
    "note": "«وَأَنْتَ» so'zma-so'z «va sen» degani, lekin bu yerda qisqartirilgan savol sifatida «sen-chi?» ma'nosida ishlatilgan."
  },
  {
    "num": 7,
    "time": "00:01:02,100 --> 00:01:07,079",
    "arabic": "رُبَّمَا سِيمْكَا لَمْ تَذْهَبْ إِلَى الْمَدْرَسَةِ الْيَوْمَ",
    "segs": null,
    "full_uz": "Balki Simka bugun maktabga bormagandir.",
    "note": "«لَمْ تَذْهَبْ» — «لَمْ» inkor yuklamasi mudori fe'lni majzum holatga o'tkazib, o'tgan zamon inkorini bildiradi (bormadi)."
  },
  {
    "num": 8,
    "time": "00:01:07,079 --> 00:01:09,340",
    "arabic": "أَوْ أَنَّ نُولِيكَ سَبَّبَ مُشْكِلَةً مَا",
    "segs": null,
    "full_uz": "Yoki Nolik biror muammoga sabab bo'lgandir.",
    "note": "Srt matnida «أنا» deb eshitilgan, mazmunga ko'ra to'g'ri shakli «أَنَّ نُولِيكَ سَبَّبَ» («Nolik sabab bo'lgani») bo'lishi kerak."
  },
  {
    "num": 9,
    "time": "00:01:09,340 --> 00:01:13,799",
    "arabic": "أَشْعُرُ بِالْقَلَقِ مِنْ شَيْءٍ مَا",
    "segs": null,
    "full_uz": "Nimadandir xavotirlanyapman.",
    "note": null
  },
  {
    "num": 10,
    "time": "00:01:13,799 --> 00:01:22,180",
    "arabic": "خَمْسَةٌ، سِتَّةٌ، تَسْرِيحَةٌ رَائِعَةٌ",
    "segs": null,
    "full_uz": "Besh, olti, ajoyib soch turmagi.",
    "note": "Bola sanoqni davom ettirish o'rniga to'satdan hazil aralash soch turmagini maqtab yuboradi."
  },
  {
    "num": 11,
    "time": "00:01:22,180 --> 00:01:23,340",
    "arabic": "سَبْعَةٌ",
    "segs": null,
    "full_uz": "Yetti.",
    "note": null
  },
  {
    "num": 12,
    "time": "00:01:23,340 --> 00:01:25,040",
    "arabic": "ثَمَانِيَةٌ",
    "segs": null,
    "full_uz": "Sakkiz.",
    "note": null
  },
  {
    "num": 13,
    "time": "00:01:25,040 --> 00:01:27,760",
    "arabic": "مَرْحَبًا",
    "segs": null,
    "full_uz": "Salom.",
    "note": null
  },
  {
    "num": 14,
    "time": "00:01:27,760 --> 00:01:30,560",
    "arabic": "مَرْحَبًا يَا فِيرْدَا أَيْنَ جْرَانْدْ بُوسْ؟",
    "segs": [
      { "ar": "مَرْحَبًا يَا فِيرْدَا", "uz": "salom, Ferda" },
      { "ar": "أَيْنَ جْرَانْدْ بُوسْ", "uz": "Grand-Bos qayerda" }
    ],
    "full_uz": "Salom, Ferda, Grand-Bos qayerda?",
    "note": null
  },
  {
    "num": 15,
    "time": "00:01:30,560 --> 00:01:34,220",
    "arabic": "لَسْتُ وَاثِقَةً وَلَكِنْ رُبَّمَا فِي مِنْطَقَةِ الْكِيمْيَاءِ",
    "segs": null,
    "full_uz": "Aniq bilmayman, lekin balki kimyo bo'limidadir.",
    "note": "«لَسْتُ» — «لَيْسَ» fe'lining birlik birinchi shaxs shakli, ismiy gaplarni inkor qilishda ishlatiladi."
  },
  {
    "num": 16,
    "time": "00:01:34,220 --> 00:01:35,940",
    "arabic": "فِي مِنْطَقَةِ الْكِيمْيَاءِ؟",
    "segs": null,
    "full_uz": "Kimyo bo'limidami?",
    "note": null
  },
  {
    "num": 17,
    "time": "00:01:35,940 --> 00:01:40,020",
    "arabic": "أَخْبِرِينَا هَلِ ارْتَكَبَ نُولِيكْ أَيَّ خَطَأٍ الْيَوْمَ؟",
    "segs": [
      { "ar": "أَخْبِرِينَا", "uz": "bizga ayting" },
      { "ar": "هَلِ ارْتَكَبَ نُولِيكْ أَيَّ خَطَأٍ الْيَوْمَ", "uz": "bugun Nolik biror xato qildimi" }
    ],
    "full_uz": "Bizga ayting, bugun Nolik biror xato qildimi?",
    "note": "«أَخْبِرِينَا» — muannas (ayol) muxotabga qaratilgan buyruq fe'li, «-ي» qo'shimchasi ayol jinsiga xosdir."
  },
  {
    "num": 18,
    "time": "00:01:40,020 --> 00:01:43,180",
    "arabic": "نُولِيكْ؟ إِنَّهُ يَعْبَثُ دَائِمًا",
    "segs": null,
    "full_uz": "Nolikmi? U doim shumlik qiladi-ku.",
    "note": "«يَعْبَثُ» — «shumlik/o'ynoqilik qilmoq» ma'nosidagi fe'l, bu yerda odat ma'nosida hozirgi-kelasi zamonda kelgan."
  },
  {
    "num": 19,
    "time": "00:01:43,180 --> 00:01:46,540",
    "arabic": "إِذَنْ لَسْنَا هُنَا لِأَجْلِ شَيْءٍ فَعَلَهُ نُولِيكْ",
    "segs": null,
    "full_uz": "Demak, biz bu yerda Nolik qilgan biror narsa uchun emasmiz.",
    "note": null
  },
  {
    "num": 20,
    "time": "00:01:46,540 --> 00:01:48,640",
    "arabic": "رُبَّمَا أَصَابَهُ شَيْءٌ مُرَوِّعٌ",
    "segs": null,
    "full_uz": "Balki unga dahshatli bir narsa bo'lgandir.",
    "note": "«مُرَوِّعٌ» — «qo'rqinchli, dahshatli» ma'nosidagi sifat, «رَوَّعَ» (qo'rqitmoq) fe'lidan yasalgan."
  },
  {
    "num": 21,
    "time": "00:01:48,640 --> 00:01:50,080",
    "arabic": "مِثْلَ مَاذَا؟",
    "segs": null,
    "full_uz": "Masalan nima?",
    "note": null
  },
  {
    "num": 22,
    "time": "00:01:50,079 --> 00:01:55,039",
    "arabic": "مِثْلَ أَيِّ شَيْءٍ، هَذِهِ لَيْسَتْ مَدْرَسَةً فَقَطْ، هَذَا مُخْتَبَرٌ",
    "segs": [
      { "ar": "مِثْلَ أَيِّ شَيْءٍ", "uz": "har qanday narsa bo'lishi mumkin" },
      { "ar": "هَذِهِ لَيْسَتْ مَدْرَسَةً فَقَطْ", "uz": "bu shunchaki maktab emas" },
      { "ar": "هَذَا مُخْتَبَرٌ", "uz": "bu laboratoriya" }
    ],
    "full_uz": "Har qanday narsa bo'lishi mumkin, bu shunchaki maktab emas, bu laboratoriya.",
    "note": null
  },
  {
    "num": 23,
    "time": "00:01:55,550 --> 00:02:02,640",
    "arabic": "الْمُخْتَبَرُ حَيْثُ يَعْمَلُ الْعَلَّامَةُ يُوجِينْيُوسْ نَشِطٌ دَائِمًا",
    "segs": [
      { "ar": "الْمُخْتَبَرُ حَيْثُ يَعْمَلُ الْعَلَّامَةُ يُوجِينْيُوسْ", "uz": "professor Yudjinius ishlaydigan laboratoriya" },
      { "ar": "نَشِطٌ دَائِمًا", "uz": "doim faol" }
    ],
    "full_uz": "Professor Yudjinius ishlaydigan laboratoriya doim faoldir.",
    "note": "«الْعَلَّامَةُ» — juda bilimdon olim, «katta olim/professor» ma'nosidagi hurmat unvoni."
  },
  {
    "num": 24,
    "time": "00:02:03,539 --> 00:02:09,419",
    "arabic": "فِي مِنْطَقَةِ الْآلَاتِ يَخْتَبِرُ الْعَلَّامَةُ جَمِيعَ أَنْوَاعِ الْأَجْهِزَةِ لِكَيْ يَتَحَقَّقَ جَوْدَتَهَا",
    "segs": [
      { "ar": "فِي مِنْطَقَةِ الْآلَاتِ", "uz": "mashinalar bo'limida" },
      { "ar": "يَخْتَبِرُ الْعَلَّامَةُ جَمِيعَ أَنْوَاعِ الْأَجْهِزَةِ", "uz": "professor barcha turdagi qurilmalarni sinaydi" },
      { "ar": "لِكَيْ يَتَحَقَّقَ جَوْدَتَهَا", "uz": "ularning sifatiga ishonch hosil qilish uchun" }
    ],
    "full_uz": "Mashinalar bo'limida professor ularning sifatiga ishonch hosil qilish uchun barcha turdagi qurilmalarni sinaydi.",
    "note": "«لِكَيْ» — «uchun, maqsadida» ma'nosidagi maqsad bog'lovchisi, undan keyingi fe'l mansub (subjunctive) holatda keladi."
  },
  {
    "num": 25,
    "time": "00:02:09,419 --> 00:02:14,919",
    "arabic": "وَفِي مِنْطَقَةِ الْكِيمْيَاءِ يُجْرِي اخْتِبَارَاتٍ حَوْلَ نَوْعِ الطَّعَامِ وَسَلَامَتِهِ",
    "segs": [
      { "ar": "وَفِي مِنْطَقَةِ الْكِيمْيَاءِ", "uz": "kimyo bo'limida esa" },
      { "ar": "يُجْرِي اخْتِبَارَاتٍ حَوْلَ نَوْعِ الطَّعَامِ وَسَلَامَتِهِ", "uz": "ovqat turi va uning xavfsizligi haqida testlar o'tkazadi" }
    ],
    "full_uz": "Kimyo bo'limida esa ovqat turi va uning xavfsizligi haqida testlar o'tkazadi.",
    "note": null
  },
  {
    "num": 26,
    "time": "00:02:14,919 --> 00:02:20,780",
    "arabic": "أَمَّا فِي الْمِنْطَقَةِ الْكَهْرَبَائِيَّةِ فَإِنَّهُ يُصْلِحُ الْأَجْهِزَةَ وَيَتَحَقَّقُ أَنَّهَا آمِنَةٌ",
    "segs": [
      { "ar": "أَمَّا فِي الْمِنْطَقَةِ الْكَهْرَبَائِيَّةِ", "uz": "elektr bo'limiga kelsak" },
      { "ar": "فَإِنَّهُ يُصْلِحُ الْأَجْهِزَةَ وَيَتَحَقَّقُ أَنَّهَا آمِنَةٌ", "uz": "u qurilmalarni ta'mirlaydi va ularning xavfsiz ekanligiga ishonch hosil qiladi" }
    ],
    "full_uz": "Elektr bo'limiga kelsak, u yerda qurilmalarni ta'mirlaydi va ularning xavfsiz ekanligiga ishonch hosil qiladi.",
    "note": "«أَمَّا ... فَـ» — «-ga kelsak, ... esa» ma'nosidagi urg'u qurilmasi, ikkinchi qism «فَ» bilan boshlanadi."
  },
  {
    "num": 27,
    "time": "00:02:20,780 --> 00:02:22,979",
    "arabic": "لَكِنْ أَحْيَانًا يَكُونُ شَارِدَ الذِّهْنِ",
    "segs": null,
    "full_uz": "Lekin ba'zan xayolga cho'mib ketadi.",
    "note": "«شَارِدُ الذِّهْنِ» — so'zma-so'z «aqli qochgan», ya'ni «xayolga cho'mgan, diqqati bo'lingan» ma'nosidagi ibora."
  },
  {
    "num": 28,
    "time": "00:02:22,979 --> 00:02:28,099",
    "arabic": "هَذَا يَجْعَلُ الْأَشْيَاءَ فِي مُخْتَبَرِهِ تُبَقْبِقُ أَوْ تُصْدِرُ شَرَرًا أَوْ حَتَّى تَنْفَجِرُ",
    "segs": [
      { "ar": "هَذَا يَجْعَلُ الْأَشْيَاءَ فِي مُخْتَبَرِهِ تُبَقْبِقُ", "uz": "bu esa laboratoriyasidagi narsalarni pixillab qaynashiga sabab bo'ladi" },
      { "ar": "أَوْ تُصْدِرُ شَرَرًا", "uz": "yoki uchqun chiqarishiga" },
      { "ar": "أَوْ حَتَّى تَنْفَجِرُ", "uz": "yoki hatto portlashiga" }
    ],
    "full_uz": "Bu esa laboratoriyasidagi narsalarni pixillab qaynashiga, uchqun chiqarishiga yoki hatto portlashiga sabab bo'ladi.",
    "note": "«تُبَقْبِقُ» — «qulqullamoq, pixillab qaynamoq» ma'nosidagi tovush taqlidiy (onomatopeya) fe'l."
  },
  {
    "num": 29,
    "time": "00:02:31,280 --> 00:02:40,959",
    "arabic": "مَاسْيَا، لَا دَاعِيَ لِلْقَلَقِ",
    "segs": null,
    "full_uz": "Masya, xavotirlanishning hojati yo'q.",
    "note": "«لَا دَاعِيَ لِـ» — «...ning hojati/zarurati yo'q» ma'nosidagi qolip ibora."
  },
  {
    "num": 30,
    "time": "00:02:38,739 --> 00:02:41,319",
    "arabic": "وَلَكِنْ كَيْفَ لَا أَقْلَقُ؟",
    "segs": null,
    "full_uz": "Lekin qanday qilib xavotirlanmay?",
    "note": null
  },
  {
    "num": 31,
    "time": "00:02:41,319 --> 00:02:43,079",
    "arabic": "دِيجِيتْ، هَلْ رَأَيْتَ نُولِيكْ؟",
    "segs": null,
    "full_uz": "Dijit, Nolikni ko'rdingmi?",
    "note": null
  },
  {
    "num": 32,
    "time": "00:02:43,079 --> 00:02:44,779",
    "arabic": "هَلْ أَصَابَهُ أَيُّ مَكْرُوهٍ؟",
    "segs": null,
    "full_uz": "Unga biror yomonlik yetdimi?",
    "note": "«مَكْرُوهٌ» — «yoqimsiz/yomon narsa, ofat» ma'nosidagi ism, «كَرِهَ» (yoqtirmaslik) fe'lidan yasalgan."
  },
  {
    "num": 33,
    "time": "00:02:44,780 --> 00:02:48,680",
    "arabic": "نَحْنُ فِي مُخْتَبَرٍ، قَدْ يَحْدُثُ أَيُّ شَيْءٍ لِأَيِّ شَخْصٍ",
    "segs": [
      { "ar": "نَحْنُ فِي مُخْتَبَرٍ", "uz": "biz laboratoriyadamiz" },
      { "ar": "قَدْ يَحْدُثُ أَيُّ شَيْءٍ لِأَيِّ شَخْصٍ", "uz": "har kimga har qanday narsa bo'lishi mumkin" }
    ],
    "full_uz": "Biz laboratoriyadamiz, har kimga har qanday narsa bo'lishi mumkin.",
    "note": "«قَدْ» — mudori fe'l oldida kelganda «ehtimol, balki» ma'nosini beradi (imkoniyat)."
  },
  {
    "num": 34,
    "time": "00:02:48,680 --> 00:02:50,780",
    "arabic": "مِثْلَ مَاذَا؟ مَاذَا تَقُولُ؟",
    "segs": null,
    "full_uz": "Masalan nima? Nima deyapsan?",
    "note": null
  },
  {
    "num": 35,
    "time": "00:02:52,159 --> 00:02:54,819",
    "arabic": "مِثْلَ ذَلِكَ، كَمَا قُلْتُ تَحْدُثُ أَشْيَاءُ",
    "segs": null,
    "full_uz": "Xuddi shunday, aytganimdek, turli narsalar sodir bo'ladi.",
    "note": null
  },
  {
    "num": 36,
    "time": "00:02:54,819 --> 00:02:55,620",
    "arabic": "وَأَيْنَ؟",
    "segs": null,
    "full_uz": "Qayerda?",
    "note": null
  },
  {
    "num": 37,
    "time": "00:02:55,620 --> 00:02:56,699",
    "arabic": "لِنَذْهَبْ بِسُرْعَةٍ",
    "segs": null,
    "full_uz": "Tezroq ketaylik.",
    "note": "«لِنَذْهَبْ» — «لِ» buyruq lomi + mudori fe'l birinchi shaxs ko'plik, «keling, boraylik» ma'nosini beradi."
  },
  {
    "num": 38,
    "time": "00:02:56,699 --> 00:03:01,699",
    "arabic": "مَاسْيَا، لَا دَاعِيَ لِلْهَلَعِ",
    "segs": null,
    "full_uz": "Masya, vahima qilishning hojati yo'q.",
    "note": null
  },
  {
    "num": 39,
    "time": "00:03:01,699 --> 00:03:03,219",
    "arabic": "تُولَا، أَيْنَ؟",
    "segs": null,
    "full_uz": "Tula, qayerda?",
    "note": null
  },
  {
    "num": 40,
    "time": "00:03:03,219 --> 00:03:05,520",
    "arabic": "وَصَلْتُمَا؟ نَحْنُ نَحْتَاجُكُمَا",
    "segs": null,
    "full_uz": "Yetib keldinglarmi? Sizlar bizga keraksizlar.",
    "note": "«-تُمَا» va «-كُمَا» — ikkilik (tasniya) zamir qo'shimchalari bo'lib, ikki kishiga qaratilgan holda ishlatiladi."
  },
  {
    "num": 41,
    "time": "00:03:05,520 --> 00:03:06,780",
    "arabic": "مَاذَا هُنَاكَ؟",
    "segs": null,
    "full_uz": "U yerda nima bor?",
    "note": null
  },
  {
    "num": 42,
    "time": "00:03:07,379 --> 00:03:10,099",
    "arabic": "هُنَاكَ؟ نَحْنُ...",
    "segs": null,
    "full_uz": "U yerdami? Biz...",
    "note": null
  },
  {
    "num": 43,
    "time": "00:03:10,099 --> 00:03:11,120",
    "arabic": "جْرَانْدْ بُوسْ",
    "segs": null,
    "full_uz": "Grand-Bos.",
    "note": null
  },
  {
    "num": 44,
    "time": "00:03:11,120 --> 00:03:12,159",
    "arabic": "مَاذَا؟",
    "segs": null,
    "full_uz": "Nima?",
    "note": null
  },
  {
    "num": 45,
    "time": "00:03:12,159 --> 00:03:12,680",
    "arabic": "أَيْنَ؟",
    "segs": null,
    "full_uz": "Qayerda?",
    "note": null
  },
  {
    "num": 46,
    "time": "00:03:12,680 --> 00:03:15,020",
    "arabic": "فِي الْمِنْطَقَةِ الْمِيكَانِيكِيَّةِ هُنَاكَ",
    "segs": null,
    "full_uz": "Mexanika bo'limida, o'sha yerda.",
    "note": null
  },
  {
    "num": 47,
    "time": "00:03:15,020 --> 00:03:16,719",
    "arabic": "وَسِيمْكَا وَنُولِيكْ",
    "segs": null,
    "full_uz": "Simka va Nolik ham.",
    "note": null
  },
  {
    "num": 48,
    "time": "00:03:16,719 --> 00:03:18,540",
    "arabic": "جَمِيعُهُمْ هُنَاكَ",
    "segs": null,
    "full_uz": "Hammalari o'sha yerda.",
    "note": null
  },
  {
    "num": 49,
    "time": "00:03:18,540 --> 00:03:19,879",
    "arabic": "أَطْفَالِي!",
    "segs": null,
    "full_uz": "Bolalarim!",
    "note": null
  },
  {
    "num": 50,
    "time": "00:03:19,879 --> 00:03:21,640",
    "arabic": "لَا تَفْقِدْ صَوَابَكَ",
    "segs": null,
    "full_uz": "O'zingni yo'qotma.",
    "note": "«لَا تَفْقِدْ صَوَابَكَ» — so'zma-so'z «aqlingni yo'qotma», ya'ni «xotirjam bo'l, o'zingni yo'qotma» ma'nosidagi ibora."
  },
  {
    "num": 51,
    "time": "00:03:21,640 --> 00:03:29,159",
    "arabic": "مَاسْيَا هِيَ زَوْجَتِي وَأُمُّ أَطْفَالِي",
    "segs": null,
    "full_uz": "Masya mening xotinim va bolalarimning onasi.",
    "note": "Srt matnida «زوجي» deb yozilgan, lekin to'g'ri shakli «زَوْجَتِي» («xotinim») bo'lishi kerak, chunki gap ayol haqida ketmoqda."
  },
  {
    "num": 52,
    "time": "00:03:29,159 --> 00:03:30,400",
    "arabic": "سِيمْكَا وَنُولِيكْ",
    "segs": null,
    "full_uz": "Simka va Nolik.",
    "note": null
  },
  {
    "num": 53,
    "time": "00:03:30,400 --> 00:03:33,719",
    "arabic": "مَاسْيَا رَائِعَةٌ وَلَطِيفَةٌ وَرَقِيقَةٌ",
    "segs": null,
    "full_uz": "Masya ajoyib, mehribon va nozik.",
    "note": null
  },
  {
    "num": 54,
    "time": "00:03:33,719 --> 00:03:35,780",
    "arabic": "وَهِيَ رَبَّةُ مَنْزِلٍ رَائِعَةٌ",
    "segs": null,
    "full_uz": "Va u ajoyib uy bekasi.",
    "note": "«رَبَّةُ مَنْزِلٍ» — «uy bekasi» ma'nosidagi ibora."
  },
  {
    "num": 55,
    "time": "00:03:35,780 --> 00:03:38,120",
    "arabic": "إِنَّهَا تَحْمِلُ كَثِيرًا مِنَ الْوَاجِبَاتِ",
    "segs": null,
    "full_uz": "U ko'plab vazifalarni o'z zimmasiga oladi.",
    "note": null
  },
  {
    "num": 56,
    "time": "00:03:38,120 --> 00:03:40,460",
    "arabic": "وَهِيَ فِكْسِيَّةٌ مَوْهُوبَةٌ جِدًّا",
    "segs": null,
    "full_uz": "Va u juda iste'dodli fiksi.",
    "note": "«فِكْسِيَّةٌ» — «Fiksiler» xalqiga mansub ayol, seriyadagi personajlar nomidan yasalgan nisbiy sifatning ayol jinsi shakli."
  },
  {
    "num": 57,
    "time": "00:03:40,460 --> 00:03:43,879",
    "arabic": "وَخَبِيرَةُ الْعَائِلَةِ بِمُعِدَّاتِ الْمَطْبَخِ وَأَجْهِزَتِهِ",
    "segs": null,
    "full_uz": "Va oilaning oshxona jihozlari va uskunalari bo'yicha mutaxassisi.",
    "note": "Srt matnida «خبرة» deb yozilgan, mazmunga ko'ra «خَبِيرَةُ» («mutaxassis ayol») shakli to'g'riroq."
  },
  {
    "num": 58,
    "time": "00:03:43,879 --> 00:03:46,340",
    "arabic": "تَعْمَلُ مَاسْيَا مِنَ الصَّبَاحِ حَتَّى الْمَسَاءِ",
    "segs": null,
    "full_uz": "Masya ertalabdan kechgacha ishlaydi.",
    "note": null
  },
  {
    "num": 59,
    "time": "00:03:46,340 --> 00:03:50,680",
    "arabic": "تُصْلِحُ وَتُنَظِّفُ أَيَّ شَيْءٍ يَحْتَاجُ إِلَى خِبْرَتِهَا وَرِعَايَتِهَا",
    "segs": null,
    "full_uz": "Uning tajribasi va g'amxo'rligiga muhtoj bo'lgan har qanday narsani ta'mirlaydi va tozalaydi.",
    "note": null
  },
  {
    "num": 60,
    "time": "00:03:50,680 --> 00:03:54,360",
    "arabic": "لِأَنَّهَا تُحِبُّ أَنْ يَكُونَ كُلُّ شَيْءٍ نَظِيفًا وَمُرَتَّبًا",
    "segs": null,
    "full_uz": "Chunki u hamma narsaning toza va tartibli bo'lishini yaxshi ko'radi.",
    "note": null
  },
  {
    "num": 61,
    "time": "00:03:54,360 --> 00:03:57,719",
    "arabic": "وَلَكِنَّ أَهَمَّ شَيْءٍ فِي حَيَاتِهَا هُوَ أَطْفَالُهَا",
    "segs": null,
    "full_uz": "Lekin uning hayotidagi eng muhim narsa — bolalari.",
    "note": null
  },
  {
    "num": 62,
    "time": "00:03:57,719 --> 00:04:00,280",
    "arabic": "فَهِيَ تَهْتَمُّ كَثِيرًا بِسِيمْكَا وَنُولِيكْ",
    "segs": null,
    "full_uz": "Shuning uchun u Simka va Nolik bilan juda ko'p qiziqadi.",
    "note": null
  },
  {
    "num": 63,
    "time": "00:04:00,280 --> 00:04:02,460",
    "arabic": "وَتُحَاوِلُ حِمَايَتَهُمَا مِنَ الْأَذَى",
    "segs": null,
    "full_uz": "Va ularni zarardan himoya qilishga harakat qiladi.",
    "note": null
  },
  {
    "num": 64,
    "time": "00:04:03,120 --> 00:04:05,300",
    "arabic": "مَاسْيَا تَقْلَقُ عَلَيْهِمَا كَثِيرًا",
    "segs": null,
    "full_uz": "Masya ular uchun juda ko'p xavotirlanadi.",
    "note": null
  },
  {
    "num": 65,
    "time": "00:04:05,300 --> 00:04:09,340",
    "arabic": "حَتَّى إِنَّ مُخَيِّلَتَهَا تَأْخُذُهَا بَعِيدًا فِيمَا قَدْ يَحْدُثُ لَهُمَا",
    "segs": null,
    "full_uz": "Hatto tasavvuri uni ularga nima bo'lishi mumkinligi haqidagi xayollarga olib ketadi.",
    "note": "«مُخَيِّلَةٌ» — «tasavvur, xayol kuchi» ma'nosidagi ism, «خَيَّلَ» (tasavvur qilmoq) fe'lidan yasalgan."
  },
  {
    "num": 66,
    "time": "00:04:09,340 --> 00:04:15,980",
    "arabic": "مَعَ أَنَّ نُولِيكَ الصَّغِيرَ قَدْ يُوقِعُ نَفْسَهُ بِمَوَاقِفَ حَتَّى مَاسْيَا لَمْ تَتَخَيَّلْهَا قَطُّ",
    "segs": [
      { "ar": "مَعَ أَنَّ نُولِيكَ الصَّغِيرَ", "uz": "kichkina Nolik" },
      { "ar": "قَدْ يُوقِعُ نَفْسَهُ بِمَوَاقِفَ", "uz": "o'zini shunday holatlarga solib qo'yishi mumkinki" },
      { "ar": "حَتَّى مَاسْيَا لَمْ تَتَخَيَّلْهَا قَطُّ", "uz": "hatto Masya ularni hech qachon tasavvur ham qilmagan" }
    ],
    "full_uz": "Kichkina Nolik o'zini shunday holatlarga solib qo'yishi mumkinki, hatto Masya ularni hech qachon tasavvur ham qilmagan.",
    "note": "«قَطُّ» — o'tgan zamon inkori bilan kelib, «hech qachon, aslo» ma'nosini kuchaytiradi."
  },
  {
    "num": 67,
    "time": "00:04:39,339 --> 00:04:40,379",
    "arabic": "نُولِيكْ!",
    "segs": null,
    "full_uz": "Nolik!",
    "note": null
  },
  {
    "num": 68,
    "time": "00:04:40,379 --> 00:04:43,619",
    "arabic": "تَمَسَّكْ جَيِّدًا، سَنُنْقِذُكَ",
    "segs": [
      { "ar": "تَمَسَّكْ جَيِّدًا", "uz": "yaxshilab ushlab tur" },
      { "ar": "سَنُنْقِذُكَ", "uz": "seni qutqaramiz" }
    ],
    "full_uz": "Yaxshilab ushlab tur, seni qutqaramiz.",
    "note": "«تَمَسَّكْ» — «تَفَعَّلَ» babidagi buyruq fe'li, «ushlab olmoq, mahkam tutmoq» ma'nosini beradi."
  },
  {
    "num": 69,
    "time": "00:04:43,619 --> 00:04:48,039",
    "arabic": "أَنْتَ بِخَيْرٍ؟",
    "segs": null,
    "full_uz": "Sen yaxshimisan?",
    "note": null
  },
  {
    "num": 70,
    "time": "00:04:48,039 --> 00:04:51,500",
    "arabic": "مَاذَا يَحْدُثُ؟ أَنَا لَا أَحْتَاجُ إِلَى الْإِنْقَاذِ",
    "segs": [
      { "ar": "مَاذَا يَحْدُثُ", "uz": "nima bo'lyapti" },
      { "ar": "أَنَا لَا أَحْتَاجُ إِلَى الْإِنْقَاذِ", "uz": "menga qutqaruv shart emas" }
    ],
    "full_uz": "Nima bo'lyapti? Menga qutqaruv shart emas.",
    "note": null
  },
  {
    "num": 71,
    "time": "00:04:51,500 --> 00:04:54,679",
    "arabic": "إِذَنْ هَلْ هِيَ سِيمْكَا وَلَيْسَ أَنْتَ؟",
    "segs": null,
    "full_uz": "Demak, sen emas, Simkami?",
    "note": null
  },
  {
    "num": 72,
    "time": "00:04:54,679 --> 00:04:57,000",
    "arabic": "أَنَا لَا أَحْتَاجُ إِلَى الْإِنْقَاذِ فَأَنَا بِخَيْرٍ",
    "segs": null,
    "full_uz": "Menga qutqaruv shart emas, men yaxshiman.",
    "note": null
  },
  {
    "num": 73,
    "time": "00:04:57,000 --> 00:05:00,059",
    "arabic": "بَابُوسْ، لِمَاذَا أَنْتَ قَلِقٌ جِدًّا؟",
    "segs": null,
    "full_uz": "Babos, nega bunchalik xavotirdasan?",
    "note": null
  },
  {
    "num": 74,
    "time": "00:05:00,059 --> 00:05:03,339",
    "arabic": "إِذَا كَانَ الْجَمِيعُ بِخَيْرٍ فَلِمَ جَعَلْتُمُونَا نَأْتِي؟",
    "segs": null,
    "full_uz": "Agar hammalari yaxshi bo'lsa, bizni nega chaqirtirdinglar?",
    "note": "«جَعَلْتُمُونَا نَأْتِي» — «جَعَلَ» (majbur qilmoq) fe'li + mudori fe'l birikmasi «kelishimizga sabab bo'ldinglar» ma'nosini beradi."
  },
  {
    "num": 75,
    "time": "00:05:03,339 --> 00:05:07,059",
    "arabic": "أَحْتَاجُ إِلَى مُسَاعَدَتِكَ فِيمَا يَخُصُّ حَادِثًا صَغِيرًا",
    "segs": null,
    "full_uz": "Kichik bir hodisa yuzasidan yordamingga muhtojman.",
    "note": null
  },
  {
    "num": 76,
    "time": "00:05:07,060 --> 00:05:09,620",
    "arabic": "نُولِيكْ؟ هَلْ هَذَا بِسَبَبِكَ؟",
    "segs": null,
    "full_uz": "Nolikmi? Bu sening tufaylingmi?",
    "note": null
  },
  {
    "num": 77,
    "time": "00:05:09,620 --> 00:05:13,759",
    "arabic": "لَا لَا، لَيْسَ خَطَأَ نُولِيكَ، بِالْعَكْسِ تَمَامًا، يُسَاعِدُنِي عَلَى إِصْلَاحِهِ",
    "segs": [
      { "ar": "لَا لَا، لَيْسَ خَطَأَ نُولِيكَ", "uz": "yo'q, yo'q, bu Nolikning aybi emas" },
      { "ar": "بِالْعَكْسِ تَمَامًا", "uz": "aksincha" },
      { "ar": "يُسَاعِدُنِي عَلَى إِصْلَاحِهِ", "uz": "u menga uni tuzatishga yordam bermoqda" }
    ],
    "full_uz": "Yo'q, yo'q, bu Nolikning aybi emas, aksincha, u menga uni tuzatishga yordam bermoqda.",
    "note": null
  },
  {
    "num": 78,
    "time": "00:05:13,759 --> 00:05:18,680",
    "arabic": "بَابُوسْ، نَحْتَاجُ إِلَى مُسَاعَدَتِكَ لِإِعَادَةِ إِحْدَى الْقِطَعِ إِلَى مَكَانِهَا",
    "segs": null,
    "full_uz": "Babos, bir detalni joyiga qaytarishda yordaming kerak.",
    "note": null
  },
  {
    "num": 79,
    "time": "00:05:18,680 --> 00:05:20,420",
    "arabic": "هَذَا؟",
    "segs": null,
    "full_uz": "Bumi?",
    "note": null
  },
  {
    "num": 80,
    "time": "00:05:20,420 --> 00:05:25,420",
    "arabic": "تِيدِيشْ",
    "segs": null,
    "full_uz": "Tedish.",
    "note": "«تِيدِيشْ» — bu yerda qurilma qismining (detalning) nomi, xos ism sifatida tarjima qilinmaydi."
  },
  {
    "num": 81,
    "time": "00:05:25,420 --> 00:05:26,040",
    "arabic": "تِيدِيشْ",
    "segs": null,
    "full_uz": "Tedish.",
    "note": null
  },
  {
    "num": 82,
    "time": "00:05:26,040 --> 00:05:27,740",
    "arabic": "آهْ، إِصْلَاحٌ رَائِعٌ",
    "segs": null,
    "full_uz": "Voy, ajoyib ta'mirlash.",
    "note": null
  },
  {
    "num": 83,
    "time": "00:05:27,740 --> 00:05:31,000",
    "arabic": "أَهَذَا السَّبَبُ أَرَدْتَنَا أَنْ نَأْتِيَ بِسُرْعَةٍ؟",
    "segs": null,
    "full_uz": "Shu sababdanmi bizni tezroq kelishimizni xohlagan eding?",
    "note": null
  },
  {
    "num": 84,
    "time": "00:05:31,000 --> 00:05:35,000",
    "arabic": "لَا، لَمْ نَتَمَكَّنْ مِنْ إِعَادَةِ هَذَا الشَّيْءِ فَأَرْسَلْتُ فِي طَلَبِكَ",
    "segs": null,
    "full_uz": "Yo'q, biz bu narsani joyiga qaytara olmadik, shuning uchun seni chaqirtirdim.",
    "note": "Srt matnida «لم لا» deb yozilgan, mazmunga ko'ra bu «لَا» (yo'q) so'zining takroridir; to'g'ri shakli «لَا، لَمْ نَتَمَكَّنْ...» bo'lishi kerak."
  },
  {
    "num": 85,
    "time": "00:05:35,000 --> 00:05:36,879",
    "arabic": "وَلَكِنَّ فَايِرْ قَالَ",
    "segs": null,
    "full_uz": "Lekin Fayr dedi-ku.",
    "note": null
  },
  {
    "num": 86,
    "time": "00:05:36,879 --> 00:05:40,019",
    "arabic": "لِمَ فَايِرْ؟ لِمَاذَا دَائِمًا فَايِرْ؟",
    "segs": null,
    "full_uz": "Nega Fayr? Nega doim Fayr?",
    "note": null
  },
  {
    "num": 87,
    "time": "00:05:40,019 --> 00:05:41,779",
    "arabic": "لَقَدْ أَخَفْتُنَا كَثِيرًا",
    "segs": null,
    "full_uz": "Bizni juda qo'rqitib yubording.",
    "note": null
  },
  {
    "num": 88,
    "time": "00:05:41,779 --> 00:05:45,379",
    "arabic": "لَسْتُ أَنَا مَنْ أَخَافَكُمْ، أَنْتُمَا مَنْ أَخَفْتُمَا أَنْفُسَكُمَا",
    "segs": [
      { "ar": "لَسْتُ أَنَا مَنْ أَخَافَكُمْ", "uz": "sizlarni qo'rqitgan men emasman" },
      { "ar": "أَنْتُمَا مَنْ أَخَفْتُمَا أَنْفُسَكُمَا", "uz": "siz o'zlaringiz o'zlaringizni qo'rqitib olgansiz" }
    ],
    "full_uz": "Sizlarni qo'rqitgan men emasman, siz o'zlaringiz o'zlaringizni qo'rqitib olgansiz.",
    "note": null
  }
];
if (typeof module !== "undefined" && module.exports) {
  module.exports = lessons;
}