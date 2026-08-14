const lessons = [
  {
    "num": 1,
    "time": "00:00:30,000 --> 00:00:35,119",
    "arabic": "الْحَاكِي",
    "segs": null,
    "full_uz": "Grammofon.",
    "note": null
  },
  {
    "num": 2,
    "time": "00:00:35,119 --> 00:00:39,359",
    "arabic": "وَهَذِهِ صُورَةٌ لِأُمِّي عِنْدَمَا كَانَتْ صَغِيرَةً",
    "segs": null,
    "full_uz": "Bu esa onamning kichkina paytidagi surati.",
    "note": null
  },
  {
    "num": 3,
    "time": "00:00:39,359 --> 00:00:41,899",
    "arabic": "كَانَتْ سَعِيدَةً أَلَيْسَ كَذَلِكَ؟",
    "segs": null,
    "full_uz": "U baxtli edi, shunday emasmi?",
    "note": null
  },
  {
    "num": 4,
    "time": "00:00:41,899 --> 00:00:44,359",
    "arabic": "جَمِيعُ الْآبَاءِ فِي طُفُولَتِهِمْ يَكُونُونَ سُعَدَاءَ",
    "segs": null,
    "full_uz": "Barcha ota-onalar bolaligida baxtli bo'lishadi,",
    "note": null
  },
  {
    "num": 5,
    "time": "00:00:44,359 --> 00:00:48,480",
    "arabic": "ثُمَّ يَكْبُرُونَ وَيُصْبِحُونَ كَئِيبِينَ وَمَلُولِينَ جِدًّا",
    "segs": null,
    "full_uz": "keyin kattalashib, juda g'amgin va zerikkan bo'lib qolishadi.",
    "note": null
  },
  {
    "num": 6,
    "time": "00:00:48,480 --> 00:00:50,359",
    "arabic": "أَتَعْلَمُونَ مَا هَذَا؟",
    "segs": null,
    "full_uz": "Bilasizlarmi bu nima?",
    "note": null
  },
  {
    "num": 7,
    "time": "00:00:52,079 --> 00:00:56,359",
    "arabic": "أُغْنِيَةٌ عَنْ بَزَّالٍ وَهَذَا سَخِيفٌ جِدًّا",
    "segs": [
      { "ar": "أُغْنِيَةٌ عَنْ بَزَّالٍ", "uz": "otvertka haqidagi qo'shiq" },
      { "ar": "وَهَذَا سَخِيفٌ جِدًّا", "uz": "va bu juda kulgili" }
    ],
    "full_uz": "Otvertka haqidagi qo'shiq, va bu juda kulgili.",
    "note": null
  },
  {
    "num": 8,
    "time": "00:00:56,960 --> 00:01:00,659",
    "arabic": "سَخِيفٌ؟ إِنَّهَا عَنْ بَزَّالٍ وَهَذَا يَعْنِي أَنَّهَا عَنِ الْفِيكْسِيزِ",
    "segs": [
      { "ar": "سَخِيفٌ؟", "uz": "Kulgilimi?" },
      { "ar": "إِنَّهَا عَنْ بَزَّالٍ وَهَذَا يَعْنِي أَنَّهَا عَنِ الْفِيكْسِيزِ", "uz": "u otvertka haqida, demak, fiksilar haqida ekan-da" }
    ],
    "full_uz": "Kulgilimi? U otvertka haqida, demak, fiksilar haqida ekan-da.",
    "note": null
  },
  {
    "num": 9,
    "time": "00:01:00,659 --> 00:01:02,359",
    "arabic": "لِمَاذَا لَا نَسْتَمِعُ إِلَيْهَا وَنَكْتَشِفُ؟",
    "segs": null,
    "full_uz": "Nega uni tinglab, bilib olmaymiz?",
    "note": null
  },
  {
    "num": 10,
    "time": "00:01:03,019 --> 00:01:05,319",
    "arabic": "إِنْ كَانَتْ جَيِّدَةً سَنَرْقُصُ جَمِيعًا",
    "segs": null,
    "full_uz": "Agar yaxshi bo'lsa, hammamiz raqsga tushamiz.",
    "note": null
  },
  {
    "num": 11,
    "time": "00:01:05,319 --> 00:01:07,439",
    "arabic": "كَيْفَ نَسْتَمِعُ إِلَى هَذَا الشَّيْءِ هَكَذَا؟",
    "segs": null,
    "full_uz": "Bu narsani shu tarzda qanday tinglaymiz?",
    "note": null
  },
  {
    "num": 12,
    "time": "00:01:07,439 --> 00:01:10,359",
    "arabic": "لِمَاذَا لَا نُحَاوِلُ اسْتِعْمَالَ مُشَغِّلِ الْأُسْطُوَانَاتِ؟",
    "segs": null,
    "full_uz": "Nega plastinka pleyerini ishlatib ko'rmaymiz?",
    "note": null
  },
  {
    "num": 13,
    "time": "00:01:12,280 --> 00:01:13,420",
    "arabic": "لَنْ يَتَّسِعَ هُنَا",
    "segs": null,
    "full_uz": "Bu yerga sig'maydi.",
    "note": null
  },
  {
    "num": 14,
    "time": "00:01:13,420 --> 00:01:14,079",
    "arabic": "انْظُرُوا",
    "segs": null,
    "full_uz": "Qaranglar.",
    "note": null
  },
  {
    "num": 15,
    "time": "00:01:14,079 --> 00:01:17,159",
    "arabic": "كُتِبَ هُنَا أُسْطُوَانَةُ الْحَاكِي",
    "segs": null,
    "full_uz": "Bu yerda 'grammofon plastinkasi' deb yozilgan.",
    "note": null
  },
  {
    "num": 16,
    "time": "00:01:17,159 --> 00:01:18,359",
    "arabic": "أَتَرَوْنَ ذَلِكَ؟",
    "segs": null,
    "full_uz": "Ko'ryapsizlarmi?",
    "note": null
  },
  {
    "num": 17,
    "time": "00:01:19,859 --> 00:01:22,420",
    "arabic": "إِذَنْ يَجِبُ عَلَيْنَا أَنْ نَجِدَ مُشَغِّلَ الْحَاكِي",
    "segs": null,
    "full_uz": "Demak, grammofon pleyerini topishimiz kerak.",
    "note": null
  },
  {
    "num": 18,
    "time": "00:01:22,420 --> 00:01:23,359",
    "arabic": "مَاذَا نَجِدُ؟",
    "segs": null,
    "full_uz": "Nimani topamiz?",
    "note": null
  },
  {
    "num": 19,
    "time": "00:01:23,939 --> 00:01:25,219",
    "arabic": "لِنَذْهَبْ إِلَى جِرَانْدْ بُوسْ",
    "segs": null,
    "full_uz": "Grand-Bos oldiga boraylik.",
    "note": null
  },
  {
    "num": 20,
    "time": "00:01:26,359 --> 00:01:31,319",
    "arabic": "جِرَانْدْ بُوسْ لَقَدْ وَجَدْنَا أُغْنِيَةً عَنْ بَزَّالٍ وَنُرِيدُ سَمَاعَهَا",
    "segs": [
      { "ar": "جِرَانْدْ بُوسْ لَقَدْ وَجَدْنَا أُغْنِيَةً عَنْ بَزَّالٍ", "uz": "Grand-Bos, biz otvertka haqidagi qo'shiqni topdik" },
      { "ar": "وَنُرِيدُ سَمَاعَهَا", "uz": "va uni eshitishni xohlaymiz" }
    ],
    "full_uz": "Grand-Bos, biz otvertka haqidagi qo'shiqni topdik va uni eshitishni xohlaymiz.",
    "note": null
  },
  {
    "num": 21,
    "time": "00:01:31,319 --> 00:01:35,420",
    "arabic": "نَحْنُ نَبْحَثُ عَنْ مُشَغِّلٍ لِأُسْطُوَانَةِ الْحَاكِي",
    "segs": null,
    "full_uz": "Biz grammofon plastinkasi uchun pleyer izlayapmiz.",
    "note": null
  },
  {
    "num": 22,
    "time": "00:01:35,420 --> 00:01:40,359",
    "arabic": "لَقَدْ فَهِمْتُكُمْ مَا تَحْتَاجُونَ إِلَيْهِ هُوَ الْحَاكِي",
    "segs": [
      { "ar": "لَقَدْ فَهِمْتُكُمْ", "uz": "Sizlarni tushundim" },
      { "ar": "مَا تَحْتَاجُونَ إِلَيْهِ هُوَ الْحَاكِي", "uz": "sizlarga grammofon kerak ekan" }
    ],
    "full_uz": "Sizlarni tushundim, sizlarga grammofon kerak ekan.",
    "note": null
  },
  {
    "num": 23,
    "time": "00:01:40,359 --> 00:01:50,280",
    "arabic": "الْحَاكِي هُوَ جِهَازٌ قَدِيمٌ صُنِعَ مِنْ أَجْلِ إِعَادَةِ تَشْغِيلِ الصَّوْتِ الَّذِي تَمَّ تَسْجِيلُهُ عَلَى أُسْطُوَانَاتٍ",
    "segs": null,
    "full_uz": "Grammofon — bu plastinkalarga yozilgan ovozni qayta ijro etish uchun yasalgan qadimiy qurilma.",
    "note": null
  },
  {
    "num": 24,
    "time": "00:01:50,280 --> 00:01:55,420",
    "arabic": "إِنْ أَرَدْتَ تَشْغِيلَ الْحَاكِي فَعَلَيْكَ أَنْ تُدِيرَ الْمِقْبَضَ حَتَّى تُضْغَطَ نَابِضَةٌ",
    "segs": [
      { "ar": "إِنْ أَرَدْتَ تَشْغِيلَ الْحَاكِي", "uz": "grammofonni ishlatmoqchi bo'lsang" },
      { "ar": "فَعَلَيْكَ أَنْ تُدِيرَ الْمِقْبَضَ حَتَّى تُضْغَطَ نَابِضَةٌ", "uz": "prujina siqilguncha dastagini burashing kerak" }
    ],
    "full_uz": "Grammofonni ishlatmoqchi bo'lsang, prujina siqilguncha dastagini burashing kerak.",
    "note": null
  },
  {
    "num": 25,
    "time": "00:01:55,420 --> 00:01:57,780",
    "arabic": "يَجْعَلُ النَّابِضُ الْأُسْطُوَانَةَ تَدُورُ",
    "segs": null,
    "full_uz": "Prujina plastinkani aylantiradi,",
    "note": null
  },
  {
    "num": 26,
    "time": "00:01:57,780 --> 00:02:00,680",
    "arabic": "ثُمَّ تُوضَعُ إِبْرَةٌ فِي أَعْلَى الْأُسْطُوَانَةِ",
    "segs": null,
    "full_uz": "so'ng plastinka ustiga igna qo'yiladi.",
    "note": null
  },
  {
    "num": 27,
    "time": "00:02:00,680 --> 00:02:04,879",
    "arabic": "وَعِنْدَمَا تَتَحَرَّكُ خِلَالَ شُقُوقِ الْأُسْطُوَانَةِ تَهْتَزُّ قَلِيلًا",
    "segs": null,
    "full_uz": "U plastinkaning yoriqlari bo'ylab harakatlanganda, biroz tebranadi,",
    "note": null
  },
  {
    "num": 28,
    "time": "00:02:04,879 --> 00:02:10,180",
    "arabic": "وَهَذَا يُشَكِّلُ غِشَاءً يُشْبِهُ غِشَاءَ طَبْلٍ مُصَغَّرٍ يَبْدَأُ بِالِاهْتِزَازِ",
    "segs": null,
    "full_uz": "va bu kichraytirilgan baraban pardasiga o'xshash parda hosil qilib, tebranishni boshlaydi.",
    "note": null
  },
  {
    "num": 29,
    "time": "00:02:10,180 --> 00:02:14,199",
    "arabic": "ثُمَّ يَقُومُ الْقَرْنُ الْكَبِيرُ لِلْحَاكِي بِجَعْلِ الصَّوْتِ أَعْلَى",
    "segs": null,
    "full_uz": "Keyin grammofonning katta karnayi tovushni kuchaytiradi,",
    "note": null
  },
  {
    "num": 30,
    "time": "00:02:14,199 --> 00:02:16,379",
    "arabic": "فَنَسْمَعُ صَوْتًا أَوْ مُوسِيقَى",
    "segs": null,
    "full_uz": "va biz ovoz yoki musiqa eshitamiz.",
    "note": null
  },
  {
    "num": 31,
    "time": "00:02:16,379 --> 00:02:18,699",
    "arabic": "أَكْثَرُ شَيْءٍ مُدْهِشٍ فِي الْأَمْرِ",
    "segs": null,
    "full_uz": "Bu ishning eng hayratlanarli tomoni —",
    "note": null
  },
  {
    "num": 32,
    "time": "00:02:18,699 --> 00:02:23,580",
    "arabic": "أَنَّ الْحَاكِيَ لَا يَحْتَوِي عَلَى أَيِّ مُحَرِّكٍ كَهْرَبَائِيٍّ أَوْ أَيِّ إِلِكْتْرُونِيَّاتٍ",
    "segs": null,
    "full_uz": "grammofonda hech qanday elektr motor yoki elektronika yo'qligidir.",
    "note": null
  },
  {
    "num": 33,
    "time": "00:02:23,580 --> 00:02:29,560",
    "arabic": "لَا تَحْتَاجُ إِلَى الْكَهْرَبَاءِ مِنْ أَجْلِ أَنْ يُعِيدَ الْحَاكِي تَشْغِيلَ الصَّوْتِ الْمُسَجَّلِ عَلَى الْأُسْطُوَانَةِ",
    "segs": null,
    "full_uz": "Grammofon plastinkaga yozilgan ovozni qayta ijro etishi uchun elektr kerak emas.",
    "note": null
  },
  {
    "num": 34,
    "time": "00:02:29,560 --> 00:02:31,660",
    "arabic": "إِذَنْ فَالْحَاكِي آلَةٌ عَجِيبَةٌ",
    "segs": null,
    "full_uz": "Demak, grammofon g'aroyib qurilma.",
    "note": null
  },
  {
    "num": 35,
    "time": "00:02:31,660 --> 00:02:39,580",
    "arabic": "إِنْ أَرَدْتُمْ أَنْ تَعْرِفُوا فَسَتَجِدُونَ فِي مَكْتَبِ وَالِدِ تُومَ حَاكِيًا عَلَى الْمِنْضَدَةِ",
    "segs": [
      { "ar": "إِنْ أَرَدْتُمْ أَنْ تَعْرِفُوا", "uz": "bilmoqchi bo'lsangiz" },
      { "ar": "فَسَتَجِدُونَ فِي مَكْتَبِ وَالِدِ تُومَ حَاكِيًا عَلَى الْمِنْضَدَةِ", "uz": "Tomning otasining ish xonasida, stol ustida grammofon topasiz" }
    ],
    "full_uz": "Bilmoqchi bo'lsangiz, Tomning otasining ish xonasida, stol ustida grammofon topasiz.",
    "note": null
  },
  {
    "num": 36,
    "time": "00:02:39,580 --> 00:02:41,000",
    "arabic": "رَائِعٌ نَذْهَبُ",
    "segs": null,
    "full_uz": "Ajoyib, boramiz.",
    "note": null
  },
  {
    "num": 37,
    "time": "00:02:41,000 --> 00:02:42,580",
    "arabic": "نَسِيتُمْ شُكْرًا",
    "segs": null,
    "full_uz": "Rahmat aytishni unutdinglar.",
    "note": null
  },
  {
    "num": 38,
    "time": "00:02:45,100 --> 00:02:50,580",
    "arabic": "لَيْسَ لَهُ زِرُّ تَشْغِيلٍ",
    "segs": null,
    "full_uz": "Uning yoqish tugmasi yo'q.",
    "note": null
  },
  {
    "num": 39,
    "time": "00:02:51,140 --> 00:02:52,660",
    "arabic": "لَيْسَ لَهُ أَيُّ زِرٍّ",
    "segs": null,
    "full_uz": "Umuman tugmasi yo'q.",
    "note": null
  },
  {
    "num": 40,
    "time": "00:02:52,659 --> 00:02:55,340",
    "arabic": "يَجِبُ أَنْ تُمْسِكَ الْمِقْبَضَ وَأَنْ تُدِيرَهُ",
    "segs": null,
    "full_uz": "Dastagini ushlab, burashing kerak.",
    "note": null
  },
  {
    "num": 41,
    "time": "00:02:55,340 --> 00:03:00,819",
    "arabic": "وَالْآنَ أَخُذُ ذَلِكَ الشَّيْءَ وَضَعْهُ عَلَى الْأُسْطُوَانَةِ",
    "segs": null,
    "full_uz": "Va endi u narsani olib, plastinka ustiga qo'y.",
    "note": null
  },
  {
    "num": 42,
    "time": "00:03:00,819 --> 00:03:04,939",
    "arabic": "إِنَّهُ لَا يَعْمَلُ",
    "segs": null,
    "full_uz": "U ishlamayapti.",
    "note": null
  },
  {
    "num": 43,
    "time": "00:03:04,939 --> 00:03:07,639",
    "arabic": "انْظُرْ لَا أَرَى إِبْرَةً هُنَا",
    "segs": null,
    "full_uz": "Qara, bu yerda igna ko'rinmayapti.",
    "note": null
  },
  {
    "num": 44,
    "time": "00:03:07,639 --> 00:03:10,000",
    "arabic": "أَيْنَ نَجِدُ وَاحِدَةً؟",
    "segs": null,
    "full_uz": "Uni qayerdan topamiz?",
    "note": null
  },
  {
    "num": 45,
    "time": "00:03:10,000 --> 00:03:11,199",
    "arabic": "يُمْكِنُنَا صُنْعُهَا",
    "segs": null,
    "full_uz": "Uni o'zimiz yasashimiz mumkin.",
    "note": null
  },
  {
    "num": 46,
    "time": "00:03:11,199 --> 00:03:12,659",
    "arabic": "هَلْ لَدَيْكَ أَيُّ مِسْمَارٍ هُنَا؟",
    "segs": null,
    "full_uz": "Bu yerda biror mixing bormi?",
    "note": null
  },
  {
    "num": 47,
    "time": "00:03:14,659 --> 00:03:16,659",
    "arabic": "هَلْ هَذَا جَيِّدٌ؟",
    "segs": null,
    "full_uz": "Bu yaxshimi?",
    "note": null
  },
  {
    "num": 48,
    "time": "00:03:17,300 --> 00:03:18,319",
    "arabic": "بَلْ إِنَّهُ رَائِعٌ",
    "segs": null,
    "full_uz": "Balki, u ajoyib.",
    "note": null
  },
  {
    "num": 49,
    "time": "00:03:18,319 --> 00:03:19,659",
    "arabic": "فِيرْدَا مُسْتَعِدَّةٌ؟",
    "segs": null,
    "full_uz": "Firda, tayyormisan?",
    "note": null
  },
  {
    "num": 50,
    "time": "00:03:20,340 --> 00:03:21,060",
    "arabic": "أَكِيدٌ",
    "segs": null,
    "full_uz": "Albatta.",
    "note": null
  },
  {
    "num": 51,
    "time": "00:03:22,659 --> 00:03:24,659",
    "arabic": "غَطُّوا عُيُونَكُمْ",
    "segs": null,
    "full_uz": "Ko'zlaringizni yoping.",
    "note": null
  },
  {
    "num": 52,
    "time": "00:03:46,659 --> 00:03:49,659",
    "arabic": "هَيَّا عُدُوا وَإِنَّهُ يَعْمَلُ اسْمَعُوا",
    "segs": [
      { "ar": "هَيَّا عُدُوا وَإِنَّهُ يَعْمَلُ", "uz": "qani, qaytinglar, u ishlayapti" },
      { "ar": "اسْمَعُوا", "uz": "eshitinglar" }
    ],
    "full_uz": "Qani, qaytinglar, u ishlayapti, eshitinglar.",
    "note": null
  },
  {
    "num": 53,
    "time": "00:03:49,659 --> 00:03:52,659",
    "arabic": "تَرَكَ الْمَكَانَ وَالْآنَ دُونَ هَذَا الصَّغِيرِ",
    "segs": null,
    "full_uz": "U joyni tark etdi, va endi shu kichkinasiz,",
    "note": null
  },
  {
    "num": 54,
    "time": "00:03:52,659 --> 00:03:54,659",
    "arabic": "لَا شَيْءَ يَدُورُ بِإِتْقَانٍ",
    "segs": null,
    "full_uz": "hech narsa mukammal aylanmaydi.",
    "note": null
  },
  {
    "num": 55,
    "time": "00:03:54,659 --> 00:03:58,659",
    "arabic": "لَا تَتَوَهَّمْ أَنَّ الْبُرْغِيَّ مُجَرَّدُ بُرْغِيٍّ صَغِيرٍ",
    "segs": null,
    "full_uz": "O'ylamaki, vint shunchaki kichkina vint,",
    "note": null
  },
  {
    "num": 56,
    "time": "00:03:58,659 --> 00:04:02,659",
    "arabic": "الْعَالَمُ دُونَهُ يُعَطَّلُ لِلْبُرْغِيِّ عَمَلٌ كَثِيرٌ",
    "segs": null,
    "full_uz": "dunyo unsiz to'xtab qoladi, vintga ko'p ish bor.",
    "note": null
  },
  {
    "num": 57,
    "time": "00:04:06,659 --> 00:04:10,659",
    "arabic": "الْجَرَّافَةُ تَبْدُو قَوِيَّةً لَكِنْ فَجْأَةً تَخْتَلُّ",
    "segs": [
      { "ar": "الْجَرَّافَةُ تَبْدُو قَوِيَّةً", "uz": "ekskavator kuchli ko'rinadi" },
      { "ar": "لَكِنْ فَجْأَةً تَخْتَلُّ", "uz": "lekin to'satdan buziladi" }
    ],
    "full_uz": "Ekskavator kuchli ko'rinadi, lekin to'satdan buziladi,",
    "note": null
  },
  {
    "num": 58,
    "time": "00:04:10,659 --> 00:04:14,659",
    "arabic": "فَتَسِيرُ وَتَبْدُو غَبِيَّةً تَغْرَقُ فَوْرًا فِي الْوَحْلِ",
    "segs": [
      { "ar": "فَتَسِيرُ وَتَبْدُو غَبِيَّةً", "uz": "va u ahmoqona yuradi" },
      { "ar": "تَغْرَقُ فَوْرًا فِي الْوَحْلِ", "uz": "darrov loyga botib qoladi" }
    ],
    "full_uz": "Va u ahmoqona yuradi, darrov loyga botib qoladi.",
    "note": null
  },
  {
    "num": 59,
    "time": "00:04:14,659 --> 00:04:16,659",
    "arabic": "هَيَّا عُدُّوا وَاحِدٌ اثْنَانِ",
    "segs": null,
    "full_uz": "Qani, sanang: bir, ikki.",
    "note": null
  },
  {
    "num": 60,
    "time": "00:04:16,660 --> 00:04:22,540",
    "arabic": "الْبُرْغِيُّ تَرَكَ الْمَكَانَ وَالْآنَ دُونَ هَذَا الصَّغِيرِ لَا شَيْءَ يَدُورُ بِإِتْقَانٍ",
    "segs": [
      { "ar": "الْبُرْغِيُّ تَرَكَ الْمَكَانَ", "uz": "vint joyini tark etdi" },
      { "ar": "وَالْآنَ دُونَ هَذَا الصَّغِيرِ لَا شَيْءَ يَدُورُ بِإِتْقَانٍ", "uz": "va endi shu kichkinasiz hech narsa mukammal aylanmaydi" }
    ],
    "full_uz": "Vint joyini tark etdi, va endi shu kichkinasiz hech narsa mukammal aylanmaydi.",
    "note": null
  },
  {
    "num": 61,
    "time": "00:04:22,540 --> 00:04:26,439",
    "arabic": "لَا تَتَوَهَّمْ أَنَّ الْبُرْغِيَّ مُجَرَّدُ بُرْغِيٍّ صَغِيرٍ",
    "segs": null,
    "full_uz": "O'ylamaki, vint shunchaki kichkina vint,",
    "note": null
  },
  {
    "num": 62,
    "time": "00:04:26,439 --> 00:04:30,480",
    "arabic": "الْعَالَمُ دُونَهُ يُعَطَّلُ لِلْبُرْغِيِّ عَمَلٌ كَثِيرٌ",
    "segs": null,
    "full_uz": "dunyo unsiz to'xtab qoladi, vintga ko'p ish bor.",
    "note": null
  },
  {
    "num": 63,
    "time": "00:04:30,480 --> 00:04:34,620",
    "arabic": "لَا تَتَوَهَّمْ أَنَّ الْبُرْغِيَّ مُجَرَّدُ بُرْغِيٍّ صَغِيرٍ",
    "segs": null,
    "full_uz": "O'ylamaki, vint shunchaki kichkina vint,",
    "note": null
  },
  {
    "num": 64,
    "time": "00:04:34,620 --> 00:04:38,480",
    "arabic": "الْعَالَمُ دُونَهُ يُعَطَّلُ لِلْبُرْغِيِّ عَمَلٌ كَثِيرٌ",
    "segs": null,
    "full_uz": "dunyo unsiz to'xtab qoladi, vintga ko'p ish bor.",
    "note": null
  },
  {
    "num": 65,
    "time": "00:04:38,480 --> 00:04:40,660",
    "arabic": "مَا هَذِهِ الْمُوسِيقَى الْجَمِيلَةُ يَا تُومُ؟",
    "segs": null,
    "full_uz": "Bu qanday chiroyli musiqa, Tom?",
    "note": null
  },
  {
    "num": 66,
    "time": "00:04:41,800 --> 00:04:43,520",
    "arabic": "إِنَّهَا أُسْطُوَانَةُ الْحَاكِي",
    "segs": null,
    "full_uz": "Bu grammofon plastinkasi.",
    "note": null
  },
  {
    "num": 67,
    "time": "00:04:43,520 --> 00:04:45,660",
    "arabic": "قُلْتَ الْحَاكِي؟ ظَنَنْتُ أَنَّهُ مُعَطَّلٌ",
    "segs": [
      { "ar": "قُلْتَ الْحَاكِي؟", "uz": "Grammofon dedingmi?" },
      { "ar": "ظَنَنْتُ أَنَّهُ مُعَطَّلٌ", "uz": "buzilgan deb o'ylovdim" }
    ],
    "full_uz": "Grammofon dedingmi? Buzilgan deb o'ylovdim.",
    "note": null
  },
  {
    "num": 68,
    "time": "00:04:45,660 --> 00:04:47,660",
    "arabic": "مُعَطَّلٌ؟ أَصْلَحْنَا هَذَا الشَّيْءَ",
    "segs": [
      { "ar": "مُعَطَّلٌ؟", "uz": "Buzilganmi?" },
      { "ar": "أَصْلَحْنَا هَذَا الشَّيْءَ", "uz": "biz uni tuzatib qo'ydik" }
    ],
    "full_uz": "Buzilganmi? Biz uni tuzatib qo'ydik.",
    "note": null
  },
  {
    "num": 69,
    "time": "00:04:47,660 --> 00:04:49,600",
    "arabic": "الْمُهِمُّ أَنَّهُ قَدْ أُصْلِحَ",
    "segs": null,
    "full_uz": "Muhimi, u tuzatilgan.",
    "note": null
  },
  {
    "num": 70,
    "time": "00:04:49,600 --> 00:04:50,439",
    "arabic": "حَقًّا؟",
    "segs": null,
    "full_uz": "Rostdanmi?",
    "note": null
  },
  {
    "num": 71,
    "time": "00:04:50,439 --> 00:04:52,460",
    "arabic": "عِنْدِي وَلَدٌ رَائِعٌ حَقًّا",
    "segs": null,
    "full_uz": "Mening o'g'lim rostdan ham ajoyib.",
    "note": null
  },
  {
    "num": 72,
    "time": "00:04:52,460 --> 00:04:54,360",
    "arabic": "الْأَطْفَالُ فِي الْعَادَةِ يُخَرِّبُونَ",
    "segs": null,
    "full_uz": "Bolalar odatda buzib qo'yishadi.",
    "note": null
  },
  {
    "num": 73,
    "time": "00:04:54,360 --> 00:04:57,860",
    "arabic": "مَا رَأْيُكَ أَنْ تُشَغِّلَ تِلْكَ الْأُغْنِيَةَ مَرَّةً أُخْرَى؟",
    "segs": null,
    "full_uz": "O'sha qo'shiqni yana bir bor qo'ysang qalay?",
    "note": null
  },
  {
    "num": 74,
    "time": "00:04:57,860 --> 00:04:59,360",
    "arabic": "كُنْتُ أُحِبُّهَا فِي صِغَرِي",
    "segs": null,
    "full_uz": "Kichkinaligimda uni yaxshi ko'rardim.",
    "note": null
  },
  {
    "num": 75,
    "time": "00:04:59,360 --> 00:05:05,840",
    "arabic": "الرَّافِعَةُ الْعِمْلَاقَةُ",
    "segs": null,
    "full_uz": "Ulkan kran,",
    "note": null
  },
  {
    "num": 76,
    "time": "00:05:05,840 --> 00:05:07,740",
    "arabic": "فِي لَحَظَاتٍ كَسَرَتْ",
    "segs": null,
    "full_uz": "bir zumda sindirdi,",
    "note": null
  },
  {
    "num": 77,
    "time": "00:05:07,740 --> 00:05:09,860",
    "arabic": "مَالَتْ بِكُلِّ أَنَاقَةٍ",
    "segs": null,
    "full_uz": "nafis ravishda egildi,",
    "note": null
  },
  {
    "num": 78,
    "time": "00:05:09,860 --> 00:05:11,660",
    "arabic": "وَلِلنِّصْفَيْنِ انْشَطَرَتْ",
    "segs": null,
    "full_uz": "va ikki bo'lakka bo'linib ketdi.",
    "note": "لِلنِّصْفَيْنِ — ikkilik (dual) shakl, 'ikki yarmiga' ma'nosini bildiradi."
  },
  {
    "num": 79,
    "time": "00:05:11,660 --> 00:05:14,360",
    "arabic": "هَيَّا عُدُّوا وَاحِدٌ اثْنَانِ",
    "segs": null,
    "full_uz": "Qani, sanang: bir, ikki.",
    "note": null
  },
  {
    "num": 80,
    "time": "00:05:14,360 --> 00:05:20,240",
    "arabic": "الْبُرْغِيُّ تَرَكَ الْمَكَانَ وَالْآنَ دُونَ هَذَا الصَّغِيرِ لَا شَيْءَ يَدُورُ بِإِتْقَانٍ",
    "segs": [
      { "ar": "الْبُرْغِيُّ تَرَكَ الْمَكَانَ", "uz": "vint joyini tark etdi" },
      { "ar": "وَالْآنَ دُونَ هَذَا الصَّغِيرِ لَا شَيْءَ يَدُورُ بِإِتْقَانٍ", "uz": "va endi shu kichkinasiz hech narsa mukammal aylanmaydi" }
    ],
    "full_uz": "Vint joyini tark etdi, va endi shu kichkinasiz hech narsa mukammal aylanmaydi.",
    "note": null
  },
  {
    "num": 81,
    "time": "00:05:20,240 --> 00:05:24,160",
    "arabic": "لَا تَتَوَهَّمْ أَنَّ الْبُرْغِيَّ مُجَرَّدُ بُرْغِيٍّ صَغِيرٍ",
    "segs": null,
    "full_uz": "O'ylamaki, vint shunchaki kichkina vint,",
    "note": null
  },
  {
    "num": 82,
    "time": "00:05:24,160 --> 00:05:28,180",
    "arabic": "الْعَالَمُ دُونَهُ يُعَطَّلُ لِلْبُرْغِيِّ عَمَلٌ كَثِيرٌ",
    "segs": null,
    "full_uz": "dunyo unsiz to'xtab qoladi, vintga ko'p ish bor.",
    "note": null
  },
  {
    "num": 83,
    "time": "00:05:28,180 --> 00:05:32,120",
    "arabic": "لَا تَتَوَهَّمْ أَنَّ الْبُرْغِيَّ مُجَرَّدُ بُرْغِيٍّ صَغِيرٍ",
    "segs": null,
    "full_uz": "O'ylamaki, vint shunchaki kichkina vint,",
    "note": null
  },
  {
    "num": 84,
    "time": "00:05:32,120 --> 00:05:36,400",
    "arabic": "الْعَالَمُ دُونَهُ يُعَطَّلُ لِلْبُرْغِيِّ عَمَلٌ كَثِيرٌ",
    "segs": null,
    "full_uz": "dunyo unsiz to'xtab qoladi, vintga ko'p ish bor.",
    "note": null
  },
  {
    "num": 85,
    "time": "00:05:36,400 --> 00:05:40,220",
    "arabic": "وَالِدَةُ تُومَ تَسْتَمْتِعُ بِالْغِنَاءِ جَيِّدًا",
    "segs": null,
    "full_uz": "Tomning onasi qo'shiq aytishdan yaxshi zavq oladi.",
    "note": null
  },
  {
    "num": 86,
    "time": "00:05:40,220 --> 00:05:43,960",
    "arabic": "أَجَلْ هِيَ تَعْلَمُ كَيْفَ تَقْضِي وَقْتًا جَيِّدًا حَتَّى لَوْ كَانَتْ كَبِيرَةً",
    "segs": [
      { "ar": "أَجَلْ هِيَ تَعْلَمُ كَيْفَ تَقْضِي وَقْتًا جَيِّدًا", "uz": "Ha, u vaqtini yaxshi o'tkazishni biladi" },
      { "ar": "حَتَّى لَوْ كَانَتْ كَبِيرَةً", "uz": "hattoki katta bo'lsa ham" }
    ],
    "full_uz": "Ha, u vaqtini yaxshi o'tkazishni biladi, hattoki katta bo'lsa ham.",
    "note": null
  },
  {
    "num": 87,
    "time": "00:05:43,959 --> 00:05:48,099",
    "arabic": "لَا تَتَوَهَّمْ أَنَّ الْبُرْغِيَّ مُجَرَّدُ بُرْغِيٍّ صَغِيرٍ",
    "segs": null,
    "full_uz": "O'ylamaki, vint shunchaki kichkina vint,",
    "note": null
  },
  {
    "num": 88,
    "time": "00:05:48,099 --> 00:05:52,139",
    "arabic": "الْعَالَمُ دُونَهُ يُعَطَّلُ لِلْبُرْغِيِّ عَمَلٌ كَثِيرٌ",
    "segs": null,
    "full_uz": "dunyo unsiz to'xtab qoladi, vintga ko'p ish bor.",
    "note": null
  }
];
if (typeof module !== "undefined" && module.exports) {
  module.exports = lessons;
}
