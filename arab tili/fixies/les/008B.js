const lessons = [
  {
    "num": 1,
    "time": "00:00:34,180 --> 00:00:38,000",
    "arabic": "الْبَالُوعَةُ",
    "segs": null,
    "full_uz": "Oqova trubkasi.",
    "note": "بَالُوعَةٌ — oqova (drenaj) trubkasi, sifon."
  },
  {
    "num": 2,
    "time": "00:00:38,079 --> 00:00:42,000",
    "arabic": "نُولِيكْ هَيَّا بِنَا نُنَظِّفُ مِرْوَحَةَ الْحَاسُوبِ",
    "segs": [
      { "ar": "نُولِيكْ هَيَّا بِنَا", "uz": "Nolik, yur" },
      { "ar": "نُنَظِّفُ مِرْوَحَةَ الْحَاسُوبِ", "uz": "kompyuter ventilyatorini tozalaymiz" }
    ],
    "full_uz": "Nolik, yur, kompyuter ventilyatorini tozalaymiz.",
    "note": null
  },
  {
    "num": 3,
    "time": "00:00:42,579 --> 00:00:47,460",
    "arabic": "لَيْسَ الْآنَ، أَنَا وَتُومْ تُومَاسْ نَرْسُمُ بِطَاقَةَ مُعَايَدَةٍ لِذِكْرَى زَوَاجِ وَالِدَيْهِ",
    "segs": [
      { "ar": "لَيْسَ الْآنَ", "uz": "hozir emas" },
      { "ar": "أَنَا وَتُومْ تُومَاسْ نَرْسُمُ بِطَاقَةَ مُعَايَدَةٍ", "uz": "men va Tom Tomas tabrik otkritkasi chizyapmiz" },
      { "ar": "لِذِكْرَى زَوَاجِ وَالِدَيْهِ", "uz": "uning ota-onasining nikoh yubileyi uchun" }
    ],
    "full_uz": "Hozir emas, men va Tom Tomas otа-onasining nikoh yubileyi uchun tabrik otkritkasi chizyapmiz.",
    "note": null
  },
  {
    "num": 4,
    "time": "00:00:47,460 --> 00:00:50,039",
    "arabic": "أُوهْ يَا لِلْمِسْكِينِ، إِنَّهُ أَمْرٌ مُتْعِبٌ",
    "segs": [
      { "ar": "أُوهْ يَا لِلْمِسْكِينِ", "uz": "voy, bechora" },
      { "ar": "إِنَّهُ أَمْرٌ مُتْعِبٌ", "uz": "bu charchatadigan ish ekan" }
    ],
    "full_uz": "Voy, bechora, bu charchatadigan ish ekan.",
    "note": null
  },
  {
    "num": 5,
    "time": "00:00:50,039 --> 00:00:54,240",
    "arabic": "مَرْحَبًا سِيمْكَا، جَيِّدٌ أَنَّكِ أَتَيْتِ، أُرِيدُ أَنْ أَسْأَلَكِ سُؤَالًا",
    "segs": [
      { "ar": "مَرْحَبًا سِيمْكَا، جَيِّدٌ أَنَّكِ أَتَيْتِ", "uz": "salom, Simka, kelganing yaxshi bo'ldi" },
      { "ar": "أُرِيدُ أَنْ أَسْأَلَكِ سُؤَالًا", "uz": "senga bir savol bermoqchi edim" }
    ],
    "full_uz": "Salom, Simka, kelganing yaxshi bo'ldi, senga bir savol bermoqchi edim.",
    "note": null
  },
  {
    "num": 6,
    "time": "00:00:54,240 --> 00:00:57,879",
    "arabic": "هَلْ أَكْتُبُ السَّنَوِيَّةَ الثَّانِيَةَ عَشْرَ أَمِ الثَّانِيَةَ عَشْرَ؟",
    "segs": null,
    "full_uz": "«O'n ikkinchi yillik» deb yozaymi yoki «o'n ikkinchi» deb yozaymi?",
    "note": "Ushbu jumla original ovoz yozuvida biroz noaniq/takrorlangan ko'rinishda, shu sababli tarjima taxminiy berildi."
  },
  {
    "num": 7,
    "time": "00:00:57,880 --> 00:01:03,520",
    "arabic": "هَلْ تَعْلَمُ؟ فِي إِمْكَانِكَ أَنْ تَكْتُبَ أ لِلتَّعْرِيفِ ثُمَّ مَسَافَةً ثُمَّ الرَّقَمَ 12",
    "segs": [
      { "ar": "هَلْ تَعْلَمُ", "uz": "bilasanmi" },
      { "ar": "فِي إِمْكَانِكَ أَنْ تَكْتُبَ أ لِلتَّعْرِيفِ", "uz": "aniqlik harfini yozishing mumkin" },
      { "ar": "ثُمَّ مَسَافَةً ثُمَّ الرَّقَمَ 12", "uz": "keyin bo'sh joy, so'ng 12 raqamini" }
    ],
    "full_uz": "Bilasanmi? Aniqlik harfini yozib, keyin bo'sh joy qo'yib, so'ng 12 raqamini yozsang bo'ladi.",
    "note": null
  },
  {
    "num": 8,
    "time": "00:01:03,520 --> 00:01:07,719",
    "arabic": "آهْ صَحِيحٌ، لَكِنْ أَوَّلًا سَأُغَيِّرُ الْمَاءَ، سَأَعُودُ فِي الْحَالِ",
    "segs": [
      { "ar": "آهْ صَحِيحٌ", "uz": "ha, to'g'ri" },
      { "ar": "لَكِنْ أَوَّلًا سَأُغَيِّرُ الْمَاءَ", "uz": "lekin avval suvni almashtiraman" },
      { "ar": "سَأَعُودُ فِي الْحَالِ", "uz": "hozir qaytaman" }
    ],
    "full_uz": "Ha, to'g'ri, lekin avval suvni almashtiraman, hozir qaytaman.",
    "note": null
  },
  {
    "num": 9,
    "time": "00:01:07,719 --> 00:01:13,879",
    "arabic": "آهْ أُمِّي تَرَكَتْ خَاتَمَهَا هُنَا",
    "segs": null,
    "full_uz": "Voy, oyim uzugini shu yerda qoldiribdi.",
    "note": null
  },
  {
    "num": 10,
    "time": "00:01:13,879 --> 00:01:19,040",
    "arabic": "أُوهْ أُوهْ لَا، أُوهْ أُوهْ لَا لَا",
    "segs": null,
    "full_uz": "Voy-voy, yo'q, voy-voy, yo'q-yo'q!",
    "note": null
  },
  {
    "num": 11,
    "time": "00:01:19,040 --> 00:01:23,879",
    "arabic": "أُوهْ لَا، مَا الَّذِي فَعَلْتُهُ؟",
    "segs": null,
    "full_uz": "Voy yo'q, men nima qilib qo'ydim?",
    "note": null
  },
  {
    "num": 12,
    "time": "00:01:23,879 --> 00:01:28,599",
    "arabic": "لَقَدْ أَفْسَدْتُ ذِكْرَى زَوَاجِ وَالِدَيَّ",
    "segs": null,
    "full_uz": "Men ota-onamning nikoh yubileyini buzib qo'ydim.",
    "note": null
  },
  {
    "num": 13,
    "time": "00:01:28,599 --> 00:01:31,159",
    "arabic": "لِمَ؟ مَاذَا فَعَلْتَ؟",
    "segs": null,
    "full_uz": "Nega? Nima qilding?",
    "note": null
  },
  {
    "num": 14,
    "time": "00:01:31,159 --> 00:01:36,560",
    "arabic": "كَانَ خَاتَمُ أُمِّي هُنَاكَ وَأَنَا أَسْقَطْتُهُ فِي الْمَغْسَلَةِ وَالْآنَ ذَهَبَ بَعِيدًا",
    "segs": [
      { "ar": "كَانَ خَاتَمُ أُمِّي هُنَاكَ", "uz": "oyimning uzugi shu yerda edi" },
      { "ar": "وَأَنَا أَسْقَطْتُهُ فِي الْمَغْسَلَةِ", "uz": "men uni rakovinaga tushirib yubordim" },
      { "ar": "وَالْآنَ ذَهَبَ بَعِيدًا", "uz": "endi u yo'qolib qoldi" }
    ],
    "full_uz": "Oyimning uzugi shu yerda edi, men uni yuvinish rakovinasiga tushirib yubordim, endi u yo'qolib qoldi.",
    "note": null
  },
  {
    "num": 15,
    "time": "00:01:36,560 --> 00:01:39,939",
    "arabic": "أَفْسَدَ الْمُنَاسَبَةَ",
    "segs": null,
    "full_uz": "Bayramni buzdi.",
    "note": null
  },
  {
    "num": 16,
    "time": "00:01:39,939 --> 00:01:41,879",
    "arabic": "لَمْ يَذْهَبِ الْخَاتَمُ بَعِيدًا",
    "segs": null,
    "full_uz": "Uzuk uzoqqa ketmagan.",
    "note": null
  },
  {
    "num": 17,
    "time": "00:01:41,879 --> 00:01:44,640",
    "arabic": "أَلَا تَعْلَمُ طَرِيقَةَ عَمَلِ الْبَالُوعَةِ؟",
    "segs": null,
    "full_uz": "Oqova trubkasi qanday ishlashini bilmaysanmi?",
    "note": null
  },
  {
    "num": 18,
    "time": "00:01:44,640 --> 00:01:46,099",
    "arabic": "طَرِيقَةَ مَاذَا؟",
    "segs": null,
    "full_uz": "Nimaning usulini?",
    "note": null
  },
  {
    "num": 19,
    "time": "00:01:46,099 --> 00:01:49,259",
    "arabic": "لِلْبَالُوعَةِ أُنْبُوبٌ مُنْحَنٍ خَاصٌّ تَحْتَ الْمَغْسَلَةِ",
    "segs": null,
    "full_uz": "Oqova trubkasining rakovina ostida maxsus egilgan qismi bor.",
    "note": "أُنْبُوبٌ مُنْحَنٍ — egilgan truba (sifon)."
  },
  {
    "num": 20,
    "time": "00:01:49,260 --> 00:01:55,840",
    "arabic": "يَنْزِلُ الْمَاءُ مِنَ الْمَغْسَلَةِ إِلَى أُنْبُوبٍ مُنْحَنٍ هُنَا",
    "segs": null,
    "full_uz": "Suv rakovinadan mana shu egilgan trubkaga tushadi.",
    "note": null
  },
  {
    "num": 21,
    "time": "00:01:55,840 --> 00:01:58,480",
    "arabic": "وَبَعْدَ ذَلِكَ إِلَى الصَّرْفِ الصِّحِّيِّ",
    "segs": null,
    "full_uz": "Va undan keyin kanalizatsiyaga o'tadi.",
    "note": null
  },
  {
    "num": 22,
    "time": "00:01:58,480 --> 00:02:02,480",
    "arabic": "لَكِنْ عِنْدَمَا نُغْلِقُ الصُّنْبُورَ لَا يَذْهَبُ الْمَاءُ كُلُّهُ",
    "segs": null,
    "full_uz": "Lekin jo'mrakni yopganimizda suvning hammasi ketmaydi.",
    "note": null
  },
  {
    "num": 23,
    "time": "00:02:02,480 --> 00:02:04,540",
    "arabic": "بَعْضُهُ يَبْقَى فِي الْأُنْبُوبِ الْمُنْحَنِي",
    "segs": null,
    "full_uz": "Bir qismi egilgan trubkada qolib ketadi.",
    "note": null
  },
  {
    "num": 24,
    "time": "00:02:04,540 --> 00:02:09,580",
    "arabic": "لَقَدْ صُنِعَتْ بِهَذِهِ الطَّرِيقَةِ حَتَّى لَا تَصِلَ الرَّائِحَةُ مِنَ الْمَصَارِفِ إِلَى الْمَنْزِلِ",
    "segs": [
      { "ar": "لَقَدْ صُنِعَتْ بِهَذِهِ الطَّرِيقَةِ", "uz": "u shunday qilib yasalgan" },
      { "ar": "حَتَّى لَا تَصِلَ الرَّائِحَةُ مِنَ الْمَصَارِفِ إِلَى الْمَنْزِلِ", "uz": "kanalizatsiyadan hid uyga kelmasligi uchun" }
    ],
    "full_uz": "U shunday qilib yasalganki, kanalizatsiyadan hid uyga kelmasin.",
    "note": null
  },
  {
    "num": 25,
    "time": "00:02:09,580 --> 00:02:12,340",
    "arabic": "الْخَاتَمُ أَثْقَلُ مِنَ الْمَاءِ",
    "segs": null,
    "full_uz": "Uzuk suvdan og'irroq.",
    "note": null
  },
  {
    "num": 26,
    "time": "00:02:12,340 --> 00:02:15,900",
    "arabic": "إِنْ سَقَطَ مِنْكُمْ فِي الْمَغْسَلَةِ فَلَنْ يَذْهَبَ بَعِيدًا",
    "segs": [
      { "ar": "إِنْ سَقَطَ مِنْكُمْ فِي الْمَغْسَلَةِ", "uz": "agar rakovinaga tushib ketsa" },
      { "ar": "فَلَنْ يَذْهَبَ بَعِيدًا", "uz": "uzoqqa ketmaydi" }
    ],
    "full_uz": "Agar rakovinaga tushib ketsa, uzoqqa ketmaydi.",
    "note": null
  },
  {
    "num": 27,
    "time": "00:02:15,900 --> 00:02:17,939",
    "arabic": "بَلْ سَيَبْقَى فِي الْأُنْبُوبِ الْمُنْحَنِي",
    "segs": null,
    "full_uz": "Balki egilgan trubkada qolib qoladi.",
    "note": null
  },
  {
    "num": 28,
    "time": "00:02:17,939 --> 00:02:23,439",
    "arabic": "هَذَا يَعْنِي أَنَّهُ لَدَيْنَا فُرْصَةٌ",
    "segs": null,
    "full_uz": "Demak, bizda imkoniyat bor.",
    "note": null
  },
  {
    "num": 29,
    "time": "00:02:23,439 --> 00:02:26,859",
    "arabic": "صَحِيحٌ، لَكِنْ كَيْفَ سَنُخْرِجُهُ مِنَ الْأُنْبُوبِ؟",
    "segs": [
      { "ar": "صَحِيحٌ", "uz": "to'g'ri" },
      { "ar": "لَكِنْ كَيْفَ سَنُخْرِجُهُ مِنَ الْأُنْبُوبِ", "uz": "lekin uni trubkadan qanday chiqaramiz" }
    ],
    "full_uz": "To'g'ri, lekin uni trubkadan qanday chiqaramiz?",
    "note": null
  },
  {
    "num": 30,
    "time": "00:02:26,859 --> 00:02:29,400",
    "arabic": "لَا أَدْرِي، أَنَا لَا أَعْرِفُ السِّبَاحَةَ",
    "segs": [
      { "ar": "لَا أَدْرِي", "uz": "bilmadim" },
      { "ar": "أَنَا لَا أَعْرِفُ السِّبَاحَةَ", "uz": "men suzishni bilmayman" }
    ],
    "full_uz": "Bilmadim, men suzishni bilmayman.",
    "note": null
  },
  {
    "num": 31,
    "time": "00:02:29,400 --> 00:02:31,620",
    "arabic": "لَا تَقْلَقْ، دَائِمًا هُنَاكَ حَلٌّ",
    "segs": null,
    "full_uz": "Xavotir olma, doim yechim bo'ladi.",
    "note": null
  },
  {
    "num": 32,
    "time": "00:02:31,620 --> 00:02:33,159",
    "arabic": "هَلْ لَدَيْكَ خُيُوطٌ؟",
    "segs": null,
    "full_uz": "Iplaring bormi?",
    "note": null
  },
  {
    "num": 33,
    "time": "00:02:33,159 --> 00:02:34,219",
    "arabic": "لَدَيَّ الْكَثِيرُ",
    "segs": null,
    "full_uz": "Ko'p bor.",
    "note": null
  },
  {
    "num": 34,
    "time": "00:02:34,219 --> 00:02:36,840",
    "arabic": "أَحْضِرْهَا، وَأَنَا سَأَعُودُ فِي ثَوَانٍ",
    "segs": null,
    "full_uz": "Ularni olib kel, men bir necha soniyada qaytaman.",
    "note": null
  },
  {
    "num": 35,
    "time": "00:02:36,840 --> 00:02:42,939",
    "arabic": "لَا يُمْكِنُ إِصْلَاحُهَا إِلَّا بِآلَةِ اللِّحَامِ",
    "segs": null,
    "full_uz": "Uni faqat payvandlash asbobi bilangina tuzatish mumkin.",
    "note": "آلَةُ اللِّحَامِ — payvandlash (svarka) asbobi."
  },
  {
    "num": 36,
    "time": "00:02:42,939 --> 00:02:47,120",
    "arabic": "بَابُوسْ، أَحْتَاجُ إِلَى حَقِيبَتِكَ لِبَعْضِ الْوَقْتِ",
    "segs": null,
    "full_uz": "Papus, menga bir muddat sumkang kerak.",
    "note": null
  },
  {
    "num": 37,
    "time": "00:02:47,120 --> 00:02:50,539",
    "arabic": "يَا لَلْمُصَادَفَةِ يَا سِيمْكَا، وَأَنَا أَيْضًا أَحْتَاجُهَا",
    "segs": null,
    "full_uz": "Qanday tasodif, Simka, menga ham u kerak edi.",
    "note": null
  },
  {
    "num": 38,
    "time": "00:02:50,539 --> 00:02:55,939",
    "arabic": "مَاسِيَا، إِذَنْ سَآخُذُ حَقِيبَةَ أَدَوَاتِكَ",
    "segs": null,
    "full_uz": "Masya, unda men sening asboblar sumkangni olaman.",
    "note": null
  },
  {
    "num": 39,
    "time": "00:02:55,939 --> 00:02:56,700",
    "arabic": "مَاذَا؟",
    "segs": null,
    "full_uz": "Nima?",
    "note": null
  },
  {
    "num": 40,
    "time": "00:02:56,700 --> 00:02:57,900",
    "arabic": "سَأُعِيدُهَا بِسُرْعَةٍ",
    "segs": null,
    "full_uz": "Tezda qaytarib beraman.",
    "note": null
  },
  {
    "num": 41,
    "time": "00:02:57,900 --> 00:02:59,439",
    "arabic": "هَاي، إِلَى أَيْنَ؟",
    "segs": null,
    "full_uz": "Hey, qayerga?",
    "note": null
  },
  {
    "num": 42,
    "time": "00:03:01,140 --> 00:03:08,800",
    "arabic": "تَمَامًا كَمَا يَحْوِي الِاسْمُ",
    "segs": null,
    "full_uz": "Aynan nomidan kelib chiqqanidek,",
    "note": null
  },
  {
    "num": 43,
    "time": "00:03:08,800 --> 00:03:11,800",
    "arabic": "يَعِيشُ الْفِيكْسِزُ لِمُسَاعَدَةِ الْآلَاتِ وَالْأَجْهِزَةِ",
    "segs": null,
    "full_uz": "Fiksiyalar mashina va asboblarga yordam berish uchun yashaydi.",
    "note": null
  },
  {
    "num": 44,
    "time": "00:03:11,800 --> 00:03:15,120",
    "arabic": "لَكِنَّ الْآلَاتِ كَبِيرَةٌ وَالْفِيكْسِزُ صِغَارٌ جِدًّا",
    "segs": [
      { "ar": "لَكِنَّ الْآلَاتِ كَبِيرَةٌ", "uz": "lekin mashinalar katta" },
      { "ar": "وَالْفِيكْسِزُ صِغَارٌ جِدًّا", "uz": "fiksiyalar esa juda kichkina" }
    ],
    "full_uz": "Lekin mashinalar katta, fiksiyalar esa juda kichkina.",
    "note": null
  },
  {
    "num": 45,
    "time": "00:03:15,120 --> 00:03:17,319",
    "arabic": "لِذَلِكَ يَحْتَاجُونَ إِلَى الْأَدَوَاتِ",
    "segs": null,
    "full_uz": "Shuning uchun ularga asboblar kerak.",
    "note": null
  },
  {
    "num": 46,
    "time": "00:03:17,319 --> 00:03:21,480",
    "arabic": "قَدِيمًا كَانَ الْفِيكْسِزُ يَعْمَلُونَ مُسْتَعِينِينَ بِأَيِّ شَيْءٍ يَجِدُونَهُ",
    "segs": null,
    "full_uz": "Qadimda fiksiyalar topgan har qanday narsadan foydalanib ishlashardi.",
    "note": null
  },
  {
    "num": 47,
    "time": "00:03:21,480 --> 00:03:24,120",
    "arabic": "رِيشَاتٌ صَغِيرَةٌ وَخُيُوطٌ وَإِبَرٌ",
    "segs": null,
    "full_uz": "Kichik patchalar, iplar va ninalar.",
    "note": null
  },
  {
    "num": 48,
    "time": "00:03:24,659 --> 00:03:27,319",
    "arabic": "أَمَّا الْآنَ فَلَدَيْهِمْ حَقَائِبَ ظَهْرٍ لِلْأَدَوَاتِ",
    "segs": null,
    "full_uz": "Hozir esa ularda asboblar uchun orqa sumkalar bor.",
    "note": null
  },
  {
    "num": 49,
    "time": "00:03:27,319 --> 00:03:30,259",
    "arabic": "وَتَجِدُ فِي دَاخِلِ الْحَقِيبَةِ جَمِيعَ أَنْوَاعِ الْأَدَوَاتِ",
    "segs": null,
    "full_uz": "Sumka ichida har xil asboblarni topasiz.",
    "note": null
  },
  {
    "num": 50,
    "time": "00:03:30,259 --> 00:03:36,480",
    "arabic": "اضْغَطِ الزِّرَّ حَتَّى تَدُورَ الْحَقِيبَةُ بِسُرْعَةٍ وَتُخْرِجَ خُطَّافًا أَوْ مِغْنَاطِيسًا أَوْ مِظَلَّةً",
    "segs": [
      { "ar": "اضْغَطِ الزِّرَّ", "uz": "tugmani bosing" },
      { "ar": "حَتَّى تَدُورَ الْحَقِيبَةُ بِسُرْعَةٍ", "uz": "sumka tez aylanadi" },
      { "ar": "وَتُخْرِجَ خُطَّافًا أَوْ مِغْنَاطِيسًا أَوْ مِظَلَّةً", "uz": "va ilmoq, magnit yoki parashyut chiqaradi" }
    ],
    "full_uz": "Tugmani bosing, sumka tez aylanadi va ilmoq, magnit yoki parashyut chiqaradi.",
    "note": null
  },
  {
    "num": 51,
    "time": "00:03:36,480 --> 00:03:39,879",
    "arabic": "لِكُلِّ فِيكْسِيٍّ بَالِغٍ حَقِيبَةُ الْأَدَوَاتِ الْخَاصَّةُ بِهِ",
    "segs": null,
    "full_uz": "Har bir voyaga yetgan fiksiyaning o'ziga xos asboblar sumkasi bor.",
    "note": null
  },
  {
    "num": 52,
    "time": "00:03:39,879 --> 00:03:42,319",
    "arabic": "أَمَّا الْأَطْفَالُ فَإِنَّ عَلَيْهِمْ أَنْ يَدْرُسُوا بِالْجِدِّ",
    "segs": null,
    "full_uz": "Bolalar esa qattiq o'qishlari kerak,",
    "note": null
  },
  {
    "num": 53,
    "time": "00:03:42,319 --> 00:03:46,359",
    "arabic": "وَبَعْدَهَا اجْتِيَازُ اخْتِبَارٍ قَبْلَ أَنْ يَحْصُلُوا عَلَى حُقُوقِ الْفِكْسِيِّ الْبَالِغِ",
    "segs": null,
    "full_uz": "so'ngra voyaga yetgan fiksiy huquqini olishdan oldin imtihon topshirishlari kerak.",
    "note": null
  },
  {
    "num": 54,
    "time": "00:03:46,359 --> 00:03:51,039",
    "arabic": "وَبَعْدَ ذَلِكَ يَحْصُلُونَ عَلَى حَقَائِبِ أَدَوَاتٍ خَاصَّةٍ بِهِمْ",
    "segs": null,
    "full_uz": "Shundan keyin ular o'zlariga xos asboblar sumkasiga ega bo'lishadi.",
    "note": null
  },
  {
    "num": 55,
    "time": "00:03:51,039 --> 00:03:59,060",
    "arabic": "ثُمَّ مَاذَا؟ تَنْزِلِينَ إِلَى الْأَسْفَلِ وَمَعَكِ هَذَا؟",
    "segs": [
      { "ar": "ثُمَّ مَاذَا", "uz": "keyin-chi" },
      { "ar": "تَنْزِلِينَ إِلَى الْأَسْفَلِ وَمَعَكِ هَذَا", "uz": "buni olib pastga tushasanmi" }
    ],
    "full_uz": "Keyin-chi? Buni olib pastga tushasanmi?",
    "note": null
  },
  {
    "num": 56,
    "time": "00:03:59,060 --> 00:04:00,199",
    "arabic": "لَيْسَ بِهَذَا الشَّكْلِ",
    "segs": null,
    "full_uz": "Bunday emas.",
    "note": null
  },
  {
    "num": 57,
    "time": "00:04:00,199 --> 00:04:02,159",
    "arabic": "بَلْ",
    "segs": null,
    "full_uz": "Balki",
    "note": null
  },
  {
    "num": 58,
    "time": "00:04:02,159 --> 00:04:04,079",
    "arabic": "هَكَذَا",
    "segs": null,
    "full_uz": "Mana shunday.",
    "note": null
  },
  {
    "num": 59,
    "time": "00:04:04,079 --> 00:04:06,539",
    "arabic": "أَجَلْ هَكَذَا",
    "segs": null,
    "full_uz": "Ha, mana shunday.",
    "note": null
  },
  {
    "num": 60,
    "time": "00:04:06,539 --> 00:04:07,840",
    "arabic": "أُعْطِيكِ خَيْطًا",
    "segs": null,
    "full_uz": "Senga ip beraman.",
    "note": null
  },
  {
    "num": 61,
    "time": "00:04:07,840 --> 00:04:09,219",
    "arabic": "اسْحَبِينِي إِلَى أَعْلَى",
    "segs": null,
    "full_uz": "Meni yuqoriga tort.",
    "note": null
  },
  {
    "num": 62,
    "time": "00:04:09,219 --> 00:04:14,979",
    "arabic": "إِنَّهَا تَقُولُ عِنْدَمَا أَشُدُّ الْخَيْطَةَ بِقُوَّةٍ اسْحَبْنِي إِلَى الْأَعْلَى",
    "segs": [
      { "ar": "إِنَّهَا تَقُولُ", "uz": "u aytyaptiki" },
      { "ar": "عِنْدَمَا أَشُدُّ الْخَيْطَةَ بِقُوَّةٍ", "uz": "ipni qattiq tortganimda" },
      { "ar": "اسْحَبْنِي إِلَى الْأَعْلَى", "uz": "meni yuqoriga tort" }
    ],
    "full_uz": "U aytyaptiki, ipni qattiq tortganimda, meni yuqoriga tort.",
    "note": null
  },
  {
    "num": 63,
    "time": "00:04:14,979 --> 00:04:15,620",
    "arabic": "فَهِمْتُ",
    "segs": null,
    "full_uz": "Tushundim.",
    "note": null
  },
  {
    "num": 64,
    "time": "00:04:15,620 --> 00:04:17,860",
    "arabic": "لَقَدْ قَالَ فَهِمْتُ",
    "segs": null,
    "full_uz": "U «tushundim» dedi.",
    "note": null
  },
  {
    "num": 65,
    "time": "00:04:17,860 --> 00:04:19,879",
    "arabic": "لَا دَاعِيَ لِأَنْ تُعِيدَ مَا قَالَ",
    "segs": null,
    "full_uz": "Uning aytganini qaytarishing shart emas.",
    "note": null
  },
  {
    "num": 66,
    "time": "00:04:19,879 --> 00:04:22,540",
    "arabic": "قَالَتْ لَا دَاعِيَ لِأَنْ تُعِيدَ مَا قَالَهُ",
    "segs": null,
    "full_uz": "U «uning aytganini qaytarishing shart emas» dedi.",
    "note": null
  },
  {
    "num": 67,
    "time": "00:04:59,360 --> 00:05:09,840",
    "arabic": "سِيمْكَا، نُولِيكْ، شُكْرًا لَكُمَا، لَقَدْ أَنْقَذْتُمَا الْمَوْقِفَ",
    "segs": [
      { "ar": "سِيمْكَا، نُولِيكْ، شُكْرًا لَكُمَا", "uz": "Simka, Nolik, rahmat sizlarga" },
      { "ar": "لَقَدْ أَنْقَذْتُمَا الْمَوْقِفَ", "uz": "vaziyatni qutqarib qoldingizlar" }
    ],
    "full_uz": "Simka, Nolik, rahmat sizlarga, vaziyatni qutqarib qoldingizlar.",
    "note": null
  },
  {
    "num": 68,
    "time": "00:05:04,720 --> 00:05:09,840",
    "arabic": "هَذَا وَاجِبُ الْفِيكْسِيزِ",
    "segs": null,
    "full_uz": "Bu fiksiyalarning burchi.",
    "note": null
  },
  {
    "num": 69,
    "time": "00:05:09,220 --> 00:05:11,220",
    "arabic": "تُومْ تُومَاسْ، إِلَى مَنْ تَتَحَدَّثُ؟",
    "segs": null,
    "full_uz": "Tom Tomas, kim bilan gaplashyapsan?",
    "note": null
  },
  {
    "num": 70,
    "time": "00:05:12,280 --> 00:05:13,760",
    "arabic": "أُوهْ لَقَدْ عَادَتْ أُمُّكَ",
    "segs": null,
    "full_uz": "Voy, onang qaytib keldi.",
    "note": null
  },
  {
    "num": 71,
    "time": "00:05:13,760 --> 00:05:17,620",
    "arabic": "لَا أَحَدَ",
    "segs": null,
    "full_uz": "Hech kim bilan.",
    "note": null
  },
  {
    "num": 72,
    "time": "00:05:19,620 --> 00:05:23,980",
    "arabic": "هَاي، هَلْ عُدْتُمَا إِلَى فِكْسِزَ؟ أُرِيدُ أَنْ أَسْأَلَكُمَا",
    "segs": [
      { "ar": "هَاي، هَلْ عُدْتُمَا إِلَى فِكْسِزَ", "uz": "hey, yana fiksiyalar haqida gapiryapsizmi" },
      { "ar": "أُرِيدُ أَنْ أَسْأَلَكُمَا", "uz": "sizlardan bir narsa so'ramoqchi edim" }
    ],
    "full_uz": "Hey, yana fiksiyalar haqida gapiryapsizmi? Sizlardan bir narsa so'ramoqchi edim.",
    "note": null
  },
  {
    "num": 73,
    "time": "00:05:23,980 --> 00:05:24,540",
    "arabic": "نَسِيتُ",
    "segs": null,
    "full_uz": "Unutibman.",
    "note": null
  },
  {
    "num": 74,
    "time": "00:05:24,540 --> 00:05:30,280",
    "arabic": "أَخْبِرُونِي مَا رَأْيُكُمَا؟ هَلْ أَكْتُبُ الثَّانَوِيَّةَ الثَّانِيَةَ عَشْرَ أَمِ الثَّانِيَةَ عَشْرَ؟",
    "segs": null,
    "full_uz": "Ayting-chi, fikringiz qanday? «O'n ikkinchi yillik» deb yozaymi yoki «o'n ikkinchi» deb?",
    "note": "Bu jumla ham original ovoz yozuvida biroz takrorlangan/noaniq, tarjima taxminiy berildi."
  },
  {
    "num": 75,
    "time": "00:05:30,280 --> 00:05:31,680",
    "arabic": "اكْتُبْهَا رَقْمًا وَكَفَى",
    "segs": null,
    "full_uz": "Uni raqam bilan yoz-u, tamom.",
    "note": null
  },
  {
    "num": 76,
    "time": "00:05:31,680 --> 00:05:33,180",
    "arabic": "صَحِيحٌ",
    "segs": null,
    "full_uz": "To'g'ri.",
    "note": null
  }
];
if (typeof module !== "undefined" && module.exports) {
  module.exports = lessons;
}
