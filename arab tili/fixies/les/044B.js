const lessons = [
  {
    "num": 1,
    "time": "00:00:32,520 --> 00:00:36,960",
    "arabic": "خَيَالُ الظِّلِّ",
    "segs": null,
    "full_uz": "Soya teatri.",
    "note": null
  },
  {
    "num": 2,
    "time": "00:00:36,960 --> 00:00:40,320",
    "arabic": "آهْ مَرْحَبًا كَيْفَ حَالُكَ تُومْ؟",
    "segs": [
      { "ar": "آهْ مَرْحَبًا", "uz": "voy, salom" },
      { "ar": "كَيْفَ حَالُكَ تُومْ", "uz": "qandaysan, Tom" }
    ],
    "full_uz": "Voy, salom, qandaysan, Tom?",
    "note": null
  },
  {
    "num": 3,
    "time": "00:00:40,320 --> 00:00:41,359",
    "arabic": "مَاذَا تَفْعَلُ هُنَا؟",
    "segs": null,
    "full_uz": "Bu yerda nima qilyapsan?",
    "note": null
  },
  {
    "num": 4,
    "time": "00:00:41,359 --> 00:00:43,299",
    "arabic": "أَوْقَعْتُ مِشْبَكَ الْوَرَقِ",
    "segs": null,
    "full_uz": "Qog'oz qisqichini tushirib yubordim,",
    "note": null
  },
  {
    "num": 5,
    "time": "00:00:43,299 --> 00:00:45,759",
    "arabic": "تَحْتَ الضَّوْءِ",
    "segs": null,
    "full_uz": "lampa ostiga.",
    "note": null
  },
  {
    "num": 6,
    "time": "00:00:45,759 --> 00:00:50,379",
    "arabic": "مَا الَّذِي يُضْحِكُكَ؟",
    "segs": null,
    "full_uz": "Seni nima kulgi qilyapti?",
    "note": null
  },
  {
    "num": 7,
    "time": "00:00:50,379 --> 00:00:51,939",
    "arabic": "نَحْنُ نُحَاوِلُ مُسَاعَدَتَكَ",
    "segs": null,
    "full_uz": "Biz senga yordam berishga harakat qilyapmiz,",
    "note": null
  },
  {
    "num": 8,
    "time": "00:00:51,939 --> 00:00:53,439",
    "arabic": "ظِلَالُكَ مَا مُضْحِكَةٌ",
    "segs": null,
    "full_uz": "sening soyalaring kulgili emas.",
    "note": null
  },
  {
    "num": 9,
    "time": "00:00:53,439 --> 00:00:54,500",
    "arabic": "لِهَذَا أَضْحَكُ",
    "segs": null,
    "full_uz": "Shuning uchun kulyapman.",
    "note": null
  },
  {
    "num": 10,
    "time": "00:00:54,500 --> 00:00:58,359",
    "arabic": "انْظُرْ إِلَى هَذَا",
    "segs": null,
    "full_uz": "Mana bunga qara.",
    "note": null
  },
  {
    "num": 11,
    "time": "00:00:58,359 --> 00:01:02,060",
    "arabic": "إِنَّهُ نَفْسُ وَزْنِكَ وَزِعْ",
    "segs": [
      { "ar": "إِنَّهُ نَفْسُ وَزْنِكَ", "uz": "bu sening vazningdek" },
      { "ar": "وَزِعْ", "uz": "tarqat" }
    ],
    "full_uz": "Bu sening vazningdek, tarqat.",
    "note": "Bu qatorning mazmuni asl audio yozuvida biroz noaniq bo'lib, tarjima taxminiy berildi."
  },
  {
    "num": 12,
    "time": "00:01:02,060 --> 00:01:05,599",
    "arabic": "إِنَّهَا تُشْبِهُ الرَّنَّةَ",
    "segs": null,
    "full_uz": "U shimolik bug'uga o'xshaydi.",
    "note": null
  },
  {
    "num": 13,
    "time": "00:01:05,599 --> 00:01:07,500",
    "arabic": "قُلْتَ الرَّنَّةَ؟",
    "segs": null,
    "full_uz": "Bug'u dedingmi?",
    "note": null
  },
  {
    "num": 14,
    "time": "00:01:07,500 --> 00:01:08,599",
    "arabic": "هَذَا",
    "segs": null,
    "full_uz": "Mana bu.",
    "note": null
  },
  {
    "num": 15,
    "time": "00:01:08,599 --> 00:01:16,359",
    "arabic": "تَبْدُوَانِ مُمَثِّلَيْنِ يُؤَدِّيَانِ عَرْضًا",
    "segs": null,
    "full_uz": "Ikkalangiz spektakl ko'rsatayotgan aktyorlarga o'xshaysizlar.",
    "note": null
  },
  {
    "num": 16,
    "time": "00:01:17,000 --> 00:01:17,359",
    "arabic": "شُكْرًا",
    "segs": null,
    "full_uz": "Rahmat.",
    "note": null
  },
  {
    "num": 17,
    "time": "00:01:18,079 --> 00:01:20,480",
    "arabic": "الْمُمَثِّلُونَ يُؤَدُّونَ عُرُوضَهُمْ فِي الْمَسْرَحِ",
    "segs": null,
    "full_uz": "Aktyorlar o'z spektakllarini teatrda ko'rsatishadi,",
    "note": null
  },
  {
    "num": 18,
    "time": "00:01:20,480 --> 00:01:21,939",
    "arabic": "وَنَحْنُ تَحْتَ السَّرِيرِ",
    "segs": null,
    "full_uz": "biz esa karavot ostidamiz.",
    "note": null
  },
  {
    "num": 19,
    "time": "00:01:21,939 --> 00:01:23,280",
    "arabic": "وَمَا الْمُشْكِلَةُ؟",
    "segs": null,
    "full_uz": "Bunda muammo nima?",
    "note": null
  },
  {
    "num": 20,
    "time": "00:01:23,280 --> 00:01:25,359",
    "arabic": "مَا رَأْيُكُمَا أَنْ نَصْنَعَ مَسْرَحَنَا الْخَاصَّ؟",
    "segs": null,
    "full_uz": "O'zimizning teatrimizni yasasak-chi?",
    "note": null
  },
  {
    "num": 21,
    "time": "00:01:25,359 --> 00:01:28,340",
    "arabic": "خَاصٌّ مَسْرَحًا مَعَ الظِّلَالِ",
    "segs": null,
    "full_uz": "O'ziga xos, soyalar bilan bo'lgan teatr.",
    "note": null
  },
  {
    "num": 22,
    "time": "00:01:28,340 --> 00:01:29,180",
    "arabic": "رَائِعٌ",
    "segs": null,
    "full_uz": "Ajoyib.",
    "note": null
  },
  {
    "num": 23,
    "time": "00:01:29,180 --> 00:01:33,019",
    "arabic": "هَيَّا يَا تُومْ نَحْتَاجُ إِلَى قِطْعَةِ وَرَقَةٍ كَبِيرَةٍ",
    "segs": null,
    "full_uz": "Qani, Tom, bizga katta bir varaq qog'oz kerak.",
    "note": null
  },
  {
    "num": 24,
    "time": "00:01:33,019 --> 00:01:39,379",
    "arabic": "مِنَ السَّهْلِ جِدًّا أَنْ تَصْنَعَ مَسْرَحَ الظِّلِّ الْخَاصَّ بِكَ",
    "segs": null,
    "full_uz": "O'zingizning soya teatringizni yasash juda oson,",
    "note": null
  },
  {
    "num": 25,
    "time": "00:01:39,379 --> 00:01:44,239",
    "arabic": "يُمْكِنُكَ أَنْ تَصْنَعَ الشَّاشَةَ مِنْ وَرَقَةٍ بَيْضَاءَ أَوْ قِطْعَةٍ كَبِيرَةٍ مِنَ الْوَرَقِ",
    "segs": null,
    "full_uz": "ekranni oq qog'ozdan yoki katta qog'oz varag'idan yasashingiz mumkin,",
    "note": null
  },
  {
    "num": 26,
    "time": "00:01:44,239 --> 00:01:48,180",
    "arabic": "ثُمَّ اجْعَلِ الْغُرْفَةَ مُظْلِمَةً وَأَضِئْ مِصْبَاحًا عَلَى الشَّاشَةِ",
    "segs": [
      { "ar": "ثُمَّ اجْعَلِ الْغُرْفَةَ مُظْلِمَةً", "uz": "keyin xonani qorong'i qiling" },
      { "ar": "وَأَضِئْ مِصْبَاحًا عَلَى الشَّاشَةِ", "uz": "va ekranga lampani yoqing" }
    ],
    "full_uz": "keyin xonani qorong'i qiling va ekranga lampani yoqing,",
    "note": null
  },
  {
    "num": 27,
    "time": "00:01:48,180 --> 00:01:53,219",
    "arabic": "وَالْآنَ لِصُنْعِ الظِّلَالِ ضَعْ نَفْسَكَ أَوْ دُمْيَةً مِنَ الْوَرَقِ الْمُقَوَّى بَيْنَ الْمِصْبَاحِ وَالشَّاشَةِ",
    "segs": [
      { "ar": "وَالْآنَ لِصُنْعِ الظِّلَالِ", "uz": "endi soya hosil qilish uchun" },
      { "ar": "ضَعْ نَفْسَكَ أَوْ دُمْيَةً مِنَ الْوَرَقِ الْمُقَوَّى", "uz": "o'zingizni yoki karton qo'g'irchoqni joylashtiring" },
      { "ar": "بَيْنَ الْمِصْبَاحِ وَالشَّاشَةِ", "uz": "lampa va ekran orasiga" }
    ],
    "full_uz": "endi soya hosil qilish uchun o'zingizni yoki karton qo'g'irchoqni lampa va ekran orasiga joylashtiring,",
    "note": null
  },
  {
    "num": 28,
    "time": "00:01:53,219 --> 00:01:56,039",
    "arabic": "سَيَظْهَرُ خَيَالُكَ أَوْ خَيَالُ الدُّمْيَةِ الْمُتَحَرِّكَةِ",
    "segs": null,
    "full_uz": "shunda sizning yoki qo'g'irchoqning harakatlanuvchi soyasi ko'rinadi,",
    "note": null
  },
  {
    "num": 29,
    "time": "00:01:56,039 --> 00:02:00,959",
    "arabic": "وَلَكِنْ تَحَقَّقْ أَنَّ الْجُمْهُورَ يَجْلِسُ عَلَى الْجِهَةِ الْأُخْرَى مِنَ الشَّاشَةِ",
    "segs": null,
    "full_uz": "lekin tomoshabinlar ekranning boshqa tomonida o'tirishiga ishonch hosil qiling,",
    "note": null
  },
  {
    "num": 30,
    "time": "00:02:00,959 --> 00:02:04,420",
    "arabic": "لِأَنَّ الْعَرْضَ فِي هَذِهِ الْحَالِ سَيَكُونُ أَجْمَلَ بِكَثِيرٍ",
    "segs": null,
    "full_uz": "chunki bu holda tomosha ancha chiroyliroq bo'ladi.",
    "note": null
  },
  {
    "num": 31,
    "time": "00:02:04,420 --> 00:02:09,199",
    "arabic": "وَالْآنَ يَا تُومْ أُضِيءُ الضَّوْءَ",
    "segs": null,
    "full_uz": "Endi, Tom, chiroqni yoqaman.",
    "note": null
  },
  {
    "num": 32,
    "time": "00:02:09,199 --> 00:02:12,039",
    "arabic": "أُوهْ! وَاوْ!",
    "segs": null,
    "full_uz": "Voy! Voy!",
    "note": null
  },
  {
    "num": 33,
    "time": "00:02:12,039 --> 00:02:15,439",
    "arabic": "سِيمْكَا تَبْدِينَ مِثْلَ ذَاتِ الرِّدَاءِ الْأَحْمَرِ الْحَقِيقِيَّةِ",
    "segs": null,
    "full_uz": "Simka, sen aynan haqiqiy Qizil Qalpoqchaga o'xshab ko'ryapsan.",
    "note": null
  },
  {
    "num": 34,
    "time": "00:02:15,439 --> 00:02:21,000",
    "arabic": "مَرْحَبًا يَا حَفِيدَتِي الْعَزِيزَةَ",
    "segs": null,
    "full_uz": "Salom, azizim nabiram.",
    "note": null
  },
  {
    "num": 35,
    "time": "00:02:21,000 --> 00:02:22,199",
    "arabic": "مَرْحَبًا يَا جَدَّتِي",
    "segs": null,
    "full_uz": "Salom, buvijon.",
    "note": null
  },
  {
    "num": 36,
    "time": "00:02:22,199 --> 00:02:25,780",
    "arabic": "جَدَّتِي لِمَاذَا لَدَيْكِ عَيْنَانِ كَبِيرَتَانِ جِدًّا؟",
    "segs": [
      { "ar": "جَدَّتِي", "uz": "buvijon" },
      { "ar": "لِمَاذَا لَدَيْكِ عَيْنَانِ كَبِيرَتَانِ جِدًّا", "uz": "nega ko'zlaring bunchalik katta" }
    ],
    "full_uz": "Buvijon, nega ko'zlaring bunchalik katta?",
    "note": null
  },
  {
    "num": 37,
    "time": "00:02:25,780 --> 00:02:28,560",
    "arabic": "لِأَرَاكِ بِهِمَا أَفْضَلَ يَا عَزِيزَتِي",
    "segs": null,
    "full_uz": "Seni yaxshiroq ko'rish uchun, azizim.",
    "note": null
  },
  {
    "num": 38,
    "time": "00:02:28,560 --> 00:02:32,399",
    "arabic": "نُولِيكْ كَفَى نَحْنُ نَتَدَرَّبُ",
    "segs": [
      { "ar": "نُولِيكْ كَفَى", "uz": "Nolik, bas qil" },
      { "ar": "نَحْنُ نَتَدَرَّبُ", "uz": "biz mashq qilyapmiz" }
    ],
    "full_uz": "Nolik, bas qil, biz mashq qilyapmiz.",
    "note": null
  },
  {
    "num": 39,
    "time": "00:02:32,399 --> 00:02:34,819",
    "arabic": "صَوْتُ الذِّئْبِ مُضْحِكٌ",
    "segs": null,
    "full_uz": "Bo'rining ovozi kulgili edi.",
    "note": null
  },
  {
    "num": 40,
    "time": "00:02:34,819 --> 00:02:38,939",
    "arabic": "جَدَّتِي وَلِمَا صَارَتْ أَسْنَانُكِ كَبِيرَةً جِدًّا؟",
    "segs": [
      { "ar": "جَدَّتِي", "uz": "buvijon" },
      { "ar": "وَلِمَا صَارَتْ أَسْنَانُكِ كَبِيرَةً جِدًّا", "uz": "nega tishlaring bunchalik katta bo'lib qolgan" }
    ],
    "full_uz": "Buvijon, nega tishlaring bunchalik katta bo'lib qolgan?",
    "note": null
  },
  {
    "num": 41,
    "time": "00:02:38,939 --> 00:02:42,000",
    "arabic": "إِنَّهَا أَفْضَلُ لِكَيْ آكُلَكِ يَا عَزِيزَتِي",
    "segs": null,
    "full_uz": "Seni yeyish uchun, azizim.",
    "note": null
  },
  {
    "num": 42,
    "time": "00:02:42,000 --> 00:02:50,899",
    "arabic": "أَخْرِجْهَا يَا ذِئْبُ وَإِلَّا فَإِنِّي سَأُخْرِجُهَا بِنَفْسِي",
    "segs": [
      { "ar": "أَخْرِجْهَا يَا ذِئْبُ", "uz": "uni chiqar, bo'ri" },
      { "ar": "وَإِلَّا فَإِنِّي سَأُخْرِجُهَا بِنَفْسِي", "uz": "aks holda o'zim chiqarib olaman" }
    ],
    "full_uz": "Uni chiqar, bo'ri, aks holda o'zim chiqarib olaman.",
    "note": null
  },
  {
    "num": 43,
    "time": "00:02:50,900 --> 00:02:52,879",
    "arabic": "هَيَّا أَخْرِجْهَا",
    "segs": null,
    "full_uz": "Qani, chiqar uni.",
    "note": null
  },
  {
    "num": 44,
    "time": "00:02:52,879 --> 00:02:58,000",
    "arabic": "أَنْتَ تُوقِفُنِي بِتِلْكَ الْعَصَا الصَّغِيرَةِ؟",
    "segs": null,
    "full_uz": "Meni o'sha kichkina tayoqcha bilan to'xtatmoqchimisan?",
    "note": null
  },
  {
    "num": 45,
    "time": "00:02:58,000 --> 00:03:01,000",
    "arabic": "هَاي! هَذَا لَيْسَ مِنْ أَصْلِ الْحِكَايَةِ!",
    "segs": null,
    "full_uz": "Hoy! Bu ertak matniga to'g'ri kelmaydi-ku!",
    "note": null
  },
  {
    "num": 46,
    "time": "00:03:01,000 --> 00:03:03,560",
    "arabic": "فِي الْحِكَايَةِ هُوَ صَيَّادٌ عَادِيٌّ",
    "segs": null,
    "full_uz": "Ertakda u oddiy ovchi edi.",
    "note": null
  },
  {
    "num": 47,
    "time": "00:03:03,560 --> 00:03:05,560",
    "arabic": "وَمَاذَا تَظُنُّنِي إِذَنْ؟",
    "segs": null,
    "full_uz": "Unda meni kim deb o'ylaysan?",
    "note": null
  },
  {
    "num": 48,
    "time": "00:03:05,560 --> 00:03:08,599",
    "arabic": "انْظُرْ إِلَى نَفْسِكَ، أَنْتَ أَظْهَرُ بِكَثِيرٍ مِنَ الصَّيَّادِ",
    "segs": [
      { "ar": "انْظُرْ إِلَى نَفْسِكَ", "uz": "o'zingga qara" },
      { "ar": "أَنْتَ أَظْهَرُ بِكَثِيرٍ مِنَ الصَّيَّادِ", "uz": "sen ovchidan ancha ko'proq ko'rinib turibsan" }
    ],
    "full_uz": "O'zingga qara, sen ovchidan ancha ko'proq ko'rinib turibsan.",
    "note": null
  },
  {
    "num": 49,
    "time": "00:03:08,599 --> 00:03:14,560",
    "arabic": "إِذَنْ مَثَلًا... وَحْدَكُمَا إِذَنْ عَلَيَّ أَنْ أَجْعَلَ الصَّيَّادَ خَارِجَ الْوَرَقَةِ",
    "segs": [
      { "ar": "إِذَنْ مَثَلًا", "uz": "unda masalan" },
      { "ar": "وَحْدَكُمَا إِذَنْ عَلَيَّ أَنْ أَجْعَلَ الصَّيَّادَ خَارِجَ الْوَرَقَةِ", "uz": "ovchini qog'ozdan tashqariga chiqarishim kerak ekan" }
    ],
    "full_uz": "Unda masalan... ovchini qog'ozdan tashqariga chiqarishim kerak ekan.",
    "note": null
  },
  {
    "num": 50,
    "time": "00:03:14,560 --> 00:03:18,599",
    "arabic": "هَذَا يَكْفِي، اسْتِرَاحَةٌ، أَنَا عَطْشَانٌ جِدًّا",
    "segs": [
      { "ar": "هَذَا يَكْفِي", "uz": "yetadi" },
      { "ar": "اسْتِرَاحَةٌ", "uz": "tanaffus" },
      { "ar": "أَنَا عَطْشَانٌ جِدًّا", "uz": "juda chanqadim" }
    ],
    "full_uz": "Yetadi, tanaffus, juda chanqadim.",
    "note": null
  },
  {
    "num": 51,
    "time": "00:03:18,599 --> 00:03:20,900",
    "arabic": "كَانَتْ كَثِيرَةَ الْمِلْحِ تِلْكَ الْجَدَّةُ",
    "segs": null,
    "full_uz": "O'sha buvi juda ko'p tuz ishlatgan edi.",
    "note": "Bu yerda majoziy hazil sifatida ishlatilgan bo'lishi mumkin — «tuzli buvi» ta'birining ma'nosi asl audio yozuvida noaniq, tarjima taxminiy berildi."
  },
  {
    "num": 52,
    "time": "00:03:20,900 --> 00:03:22,260",
    "arabic": "أَرْجُوكَ لَا تَحْزَنْ",
    "segs": null,
    "full_uz": "Iltimos, xafa bo'lma.",
    "note": null
  },
  {
    "num": 53,
    "time": "00:03:22,260 --> 00:03:24,599",
    "arabic": "الذِّئْبُ ضَخْمٌ وَأَنَا صَغِيرَةٌ جِدًّا",
    "segs": null,
    "full_uz": "Bo'ri ulkan, men esa juda kichkinaman.",
    "note": null
  },
  {
    "num": 54,
    "time": "00:03:24,599 --> 00:03:27,020",
    "arabic": "إِذَنْ لِنَجْعَلْكِ أَكْبَرَ",
    "segs": null,
    "full_uz": "Unda seni kattaroq qilamiz.",
    "note": null
  },
  {
    "num": 55,
    "time": "00:03:27,020 --> 00:03:30,439",
    "arabic": "أَرَأَيْتِ؟",
    "segs": null,
    "full_uz": "Ko'rdingmi?",
    "note": null
  },
  {
    "num": 56,
    "time": "00:03:30,439 --> 00:03:31,920",
    "arabic": "الْآنَ أَنْتِ أَكْبَرُ",
    "segs": null,
    "full_uz": "Endi sen kattaroqsan.",
    "note": null
  },
  {
    "num": 57,
    "time": "00:03:31,920 --> 00:03:33,180",
    "arabic": "آهْ أَنْتَ مُحِقٌّ",
    "segs": null,
    "full_uz": "Voy, haqsan.",
    "note": null
  },
  {
    "num": 58,
    "time": "00:03:33,180 --> 00:03:34,939",
    "arabic": "وَإِنْ رَجَعْتِ إِلَى هُنَا",
    "segs": null,
    "full_uz": "Va agar bu yerga qaytsang,",
    "note": null
  },
  {
    "num": 59,
    "time": "00:03:34,939 --> 00:03:37,540",
    "arabic": "صِرْتِ أَكْبَرَ بِكَثِيرٍ",
    "segs": null,
    "full_uz": "yanada kattaroq bo'lib qolasan.",
    "note": null
  },
  {
    "num": 60,
    "time": "00:03:37,540 --> 00:03:39,140",
    "arabic": "أَرَأَيْتِ؟",
    "segs": null,
    "full_uz": "Ko'rdingmi?",
    "note": null
  },
  {
    "num": 61,
    "time": "00:03:39,140 --> 00:03:41,180",
    "arabic": "إِنْ رَجَعْتِ إِلَى جَانِبِ هَذَا الْمِصْبَاحِ",
    "segs": null,
    "full_uz": "Agar shu lampa yoniga qaytsang,",
    "note": null
  },
  {
    "num": 62,
    "time": "00:03:41,180 --> 00:03:43,700",
    "arabic": "فَسَيَبْدُو ظِلُّكِ أَكْبَرَ عَلَى الشَّاشَةِ",
    "segs": null,
    "full_uz": "soyang ekranda kattaroq bo'lib ko'rinadi.",
    "note": null
  },
  {
    "num": 63,
    "time": "00:03:43,700 --> 00:03:44,540",
    "arabic": "رَائِعٌ",
    "segs": null,
    "full_uz": "Ajoyib.",
    "note": null
  },
  {
    "num": 64,
    "time": "00:03:44,540 --> 00:03:49,500",
    "arabic": "هُنَاكَ أَنْوَاعٌ كَثِيرَةٌ مِنَ الْمَسْرَحِ فِي الْعَالَمِ",
    "segs": null,
    "full_uz": "Dunyoda teatrning ko'plab turlari bor.",
    "note": null
  },
  {
    "num": 65,
    "time": "00:03:49,500 --> 00:03:50,620",
    "arabic": "فِي الْمَسْرَحِ الْعَادِيِّ",
    "segs": null,
    "full_uz": "Oddiy teatrda,",
    "note": null
  },
  {
    "num": 66,
    "time": "00:03:50,620 --> 00:03:53,620",
    "arabic": "يَقُولُ الْمُمَثِّلُونَ السُّطُورَ الَّتِي كَتَبَهَا الْكَاتِبُ",
    "segs": null,
    "full_uz": "aktyorlar yozuvchi yozgan matnni aytishadi,",
    "note": null
  },
  {
    "num": 67,
    "time": "00:03:53,620 --> 00:03:56,840",
    "arabic": "وَفِي الْأُوبِرَا لَا يَقُولُ الْمُمَثِّلُونَ السُّطُورَ",
    "segs": null,
    "full_uz": "operada esa aktyorlar matnni gapirmaydi,",
    "note": null
  },
  {
    "num": 68,
    "time": "00:03:56,840 --> 00:03:59,840",
    "arabic": "بَلْ يُغَنُّونَهَا بِرِفْقَةِ فِرْقَةٍ مُوسِيقِيَّةٍ",
    "segs": null,
    "full_uz": "balki uni orkestr jo'rligida kuylashadi.",
    "note": null
  },
  {
    "num": 69,
    "time": "00:03:59,840 --> 00:04:04,580",
    "arabic": "وَهُنَا فِي الْبَالِيهِ الْمُمَثِّلُونَ لَا يَقُولُونَ أَوْ يُغَنُّونَ أَدْوَارَهُمْ",
    "segs": null,
    "full_uz": "Baletda esa aktyorlar o'z rollarini na gapirishadi, na kuylashadi,",
    "note": null
  },
  {
    "num": 70,
    "time": "00:04:04,580 --> 00:04:07,060",
    "arabic": "فَهُنَا تُرْوَى الْقِصَّةُ عَنْ طَرِيقِ الرَّقْصِ",
    "segs": null,
    "full_uz": "bu yerda voqea raqs orqali hikoya qilinadi.",
    "note": null
  },
  {
    "num": 71,
    "time": "00:04:07,060 --> 00:04:10,700",
    "arabic": "وَهُنَاكَ مَسَارِحُ يَكُونُ الْمُمَثِّلُونَ فِيهَا حَيَوَانَاتٍ",
    "segs": null,
    "full_uz": "Va shuningdek, aktyorlari hayvonlar bo'lgan teatrlar ham bor —",
    "note": null
  },
  {
    "num": 72,
    "time": "00:04:10,700 --> 00:04:15,280",
    "arabic": "فِي مَسْرَحِ الْحَيَوَانَاتِ نَرَى عُرُوضًا يُؤَدِّيهَا قِطَطٌ أَوْ كِلَابٌ",
    "segs": null,
    "full_uz": "hayvonlar teatrida mushuk yoki itlar ijro etadigan tomoshalarni ko'ramiz,",
    "note": null
  },
  {
    "num": 73,
    "time": "00:04:15,280 --> 00:04:18,819",
    "arabic": "أَوْ مَاعِزٌ وَحَمَامٌ أَوْ حَتَّى دِبَبَةٌ وَفَقَمَاتٌ",
    "segs": null,
    "full_uz": "yoki echki va kaptarlar, hatto ayiqlar va foklar ham.",
    "note": null
  },
  {
    "num": 74,
    "time": "00:04:18,819 --> 00:04:21,860",
    "arabic": "هُنَاكَ أَيْضًا مَسَارِحُ الدُّمَى الْمُتَحَرِّكَةِ",
    "segs": null,
    "full_uz": "Shuningdek, qo'g'irchoq teatrlari ham bor,",
    "note": null
  },
  {
    "num": 75,
    "time": "00:04:21,860 --> 00:04:24,879",
    "arabic": "فِي الْحَقِيقَةِ تَتَحَرَّكُ الدُّمَى بِمُسَاعَدَةِ النَّاسِ",
    "segs": null,
    "full_uz": "aslida qo'g'irchoqlar odamlar yordamida harakatlanadi.",
    "note": null
  },
  {
    "num": 76,
    "time": "00:04:24,879 --> 00:04:27,639",
    "arabic": "أَجَلْ هُنَاكَ أَنْوَاعٌ كَثِيرَةٌ مِنَ الْمَسْرَحِ",
    "segs": null,
    "full_uz": "Ha, teatrning ko'plab turlari bor,",
    "note": null
  },
  {
    "num": 77,
    "time": "00:04:27,639 --> 00:04:30,079",
    "arabic": "مَسْرَحِي الْمُفَضَّلُ هُوَ مَسْرَحُ الظِّلِّ",
    "segs": null,
    "full_uz": "eng sevimlim esa soya teatridir.",
    "note": null
  },
  {
    "num": 78,
    "time": "00:04:30,079 --> 00:04:31,079",
    "arabic": "نَعَمْ",
    "segs": null,
    "full_uz": "Ha.",
    "note": null
  },
  {
    "num": 79,
    "time": "00:04:31,079 --> 00:04:36,319",
    "arabic": "فَفِي هَذَا الْمَسْرَحِ أَرَى أَنَّهُ أَجْمَلُ الْمَسَارِحِ وَأَكْثَرُهَا غُمُوضًا",
    "segs": [
      { "ar": "فَفِي هَذَا الْمَسْرَحِ أَرَى أَنَّهُ أَجْمَلُ الْمَسَارِحِ", "uz": "chunki bu teatr menimcha eng chiroylisi" },
      { "ar": "وَأَكْثَرُهَا غُمُوضًا", "uz": "va eng sirlisidir" }
    ],
    "full_uz": "Chunki bu teatr menimcha eng chiroylisi va eng sirlisidir.",
    "note": null
  },
  {
    "num": 80,
    "time": "00:04:36,319 --> 00:04:39,980",
    "arabic": "مَرْحَبًا يَا جَدَّتِي",
    "segs": null,
    "full_uz": "Salom, buvijon.",
    "note": null
  },
  {
    "num": 81,
    "time": "00:04:39,980 --> 00:04:43,779",
    "arabic": "جَدَّتِي لِمَاذَا لَدَيْكِ عَيْنَانِ كَبِيرَتَانِ جِدًّا؟",
    "segs": null,
    "full_uz": "Buvijon, nega ko'zlaring bunchalik katta?",
    "note": null
  },
  {
    "num": 82,
    "time": "00:04:43,779 --> 00:04:46,379",
    "arabic": "لِأَرَاكِ بِهِمَا أَفْضَلَ يَا عَزِيزَتِي",
    "segs": null,
    "full_uz": "Seni yaxshiroq ko'rish uchun, azizim.",
    "note": null
  },
  {
    "num": 83,
    "time": "00:04:46,379 --> 00:04:51,000",
    "arabic": "يَا جَدَّتِي وَلِمَاذَا صَارَتْ أَسْنَانُكِ كَبِيرَةً جِدًّا؟",
    "segs": null,
    "full_uz": "Buvijon, nega tishlaring bunchalik katta bo'lib qolgan?",
    "note": null
  },
  {
    "num": 84,
    "time": "00:04:51,000 --> 00:04:53,800",
    "arabic": "إِنَّهَا أَفْضَلُ كَيْ آكُلَكِ يَا عَزِيزَتِي",
    "segs": null,
    "full_uz": "Seni yeyish uchun, azizim.",
    "note": null
  },
  {
    "num": 85,
    "time": "00:04:53,800 --> 00:04:57,300",
    "arabic": "انْتَظِرْ",
    "segs": null,
    "full_uz": "Kut!",
    "note": null
  },
  {
    "num": 86,
    "time": "00:04:57,300 --> 00:05:00,259",
    "arabic": "هَا أَنَا قَادِمٌ يَا ذِئْبُ سَأُرِيكَ",
    "segs": [
      { "ar": "هَا أَنَا قَادِمٌ يَا ذِئْبُ", "uz": "mana men kelyapman, bo'ri" },
      { "ar": "سَأُرِيكَ", "uz": "senga ko'rsataman" }
    ],
    "full_uz": "Mana men kelyapman, bo'ri, senga ko'rsataman.",
    "note": null
  },
  {
    "num": 87,
    "time": "00:05:00,259 --> 00:05:02,980",
    "arabic": "يَبْدُو الصَّيَّادُ قَوِيًّا",
    "segs": null,
    "full_uz": "Ovchi kuchli ko'rinadi.",
    "note": null
  },
  {
    "num": 88,
    "time": "00:05:02,980 --> 00:05:06,120",
    "arabic": "هَلْ أَنْتَ صَيَّادٌ؟ أَيْنَ بُنْدُقِيَّتُكَ؟",
    "segs": [
      { "ar": "هَلْ أَنْتَ صَيَّادٌ", "uz": "sen ovchimisan" },
      { "ar": "أَيْنَ بُنْدُقِيَّتُكَ", "uz": "miltig'ing qayerda" }
    ],
    "full_uz": "Sen ovchimisan? Miltig'ing qayerda?",
    "note": null
  },
  {
    "num": 89,
    "time": "00:05:06,120 --> 00:05:09,899",
    "arabic": "لَا أَحْتَاجُ إِلَيْهَا أَنْتَ صَغِيرٌ جِدًّا وَيَكْفِيكَ قَاتِلَةُ الذُّبَابِ",
    "segs": [
      { "ar": "لَا أَحْتَاجُ إِلَيْهَا", "uz": "u menga kerak emas" },
      { "ar": "أَنْتَ صَغِيرٌ جِدًّا وَيَكْفِيكَ قَاتِلَةُ الذُّبَابِ", "uz": "sen juda kichkinasan, senga pashsha o'ldirgich yetadi" }
    ],
    "full_uz": "U menga kerak emas, sen juda kichkinasan, senga pashsha o'ldirgich yetadi.",
    "note": null
  },
  {
    "num": 90,
    "time": "00:05:09,899 --> 00:05:12,060",
    "arabic": "وَلَكِنَّنِي أُفَضِّلُ أَنْ أَفْعَلَهَا بِنَفْسِي",
    "segs": null,
    "full_uz": "Lekin men buni o'zim qilishni afzal ko'raman.",
    "note": null
  },
  {
    "num": 91,
    "time": "00:05:12,060 --> 00:05:13,159",
    "arabic": "كَيْفَ ذَلِكَ؟",
    "segs": null,
    "full_uz": "Qanday qilib?",
    "note": null
  },
  {
    "num": 92,
    "time": "00:05:13,159 --> 00:05:14,959",
    "arabic": "بِيَدَيَّ الْعَارِيَتَيْنِ",
    "segs": null,
    "full_uz": "Yalang qo'lim bilan.",
    "note": null
  },
  {
    "num": 93,
    "time": "00:05:14,959 --> 00:05:16,079",
    "arabic": "أَحْسَنَ",
    "segs": null,
    "full_uz": "Barakalla.",
    "note": null
  },
  {
    "num": 94,
    "time": "00:05:16,079 --> 00:05:24,799",
    "arabic": "مَرْحَبًا",
    "segs": null,
    "full_uz": "Salom!",
    "note": null
  },
  {
    "num": 95,
    "time": "00:05:24,799 --> 00:05:27,000",
    "arabic": "مُذْهِلٌ",
    "segs": null,
    "full_uz": "Hayratlanarli.",
    "note": null
  },
  {
    "num": 96,
    "time": "00:05:27,000 --> 00:05:30,219",
    "arabic": "مَنْ أَعْجَبَكُمْ؟ أَنَا أَحْبَبْتُ الْجَدَّةَ",
    "segs": [
      { "ar": "مَنْ أَعْجَبَكُمْ", "uz": "sizlarga kim yoqdi" },
      { "ar": "أَنَا أَحْبَبْتُ الْجَدَّةَ", "uz": "menga buvi yoqdi" }
    ],
    "full_uz": "Sizlarga kim yoqdi? Menga buvi yoqdi.",
    "note": null
  },
  {
    "num": 97,
    "time": "00:05:30,219 --> 00:05:32,620",
    "arabic": "ذَاتُ الرِّدَاءِ الْأَحْمَرِ كَانَتِ الْأَفْضَلَ",
    "segs": null,
    "full_uz": "Qizil Qalpoqcha eng zo'ri edi.",
    "note": null
  },
  {
    "num": 98,
    "time": "00:05:32,620 --> 00:05:34,500",
    "arabic": "أَعْجَبَنِي الصَّيَّادُ",
    "segs": null,
    "full_uz": "Menga ovchi yoqdi,",
    "note": null
  },
  {
    "num": 99,
    "time": "00:05:34,500 --> 00:05:37,919",
    "arabic": "كَانَ قَوِيًّا جِدًّا وَلَا يَهَابُ شَيْئًا",
    "segs": null,
    "full_uz": "u juda kuchli edi va hech nimadan qo'rqmasdi.",
    "note": null
  },
  {
    "num": 100,
    "time": "00:05:37,919 --> 00:05:40,039",
    "arabic": "أَمَّا أَنَا فَالْمُؤَثِّرَاتُ أَعْجَبَتْنِي",
    "segs": null,
    "full_uz": "Menga esa maxsus effektlar yoqdi.",
    "note": null
  }
];
if (typeof module !== "undefined" && module.exports) {
  module.exports = lessons;
}
