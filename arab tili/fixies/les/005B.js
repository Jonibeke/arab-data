const lessons = [
  {
    "num": 1,
    "time": "00:00:30,000 --> 00:00:35,359",
    "arabic": "الثَّلَّاجَةُ",
    "segs": null,
    "full_uz": "Muzlatgich",
    "note": "الثَّلَّاجَةُ — muzlatgich, sovutgich. Bu yerda epizod nomi sifatida ishlatilgan."
  },
  {
    "num": 2,
    "time": "00:00:35,359 --> 00:00:46,840",
    "arabic": "جَيِّدٌ، وَاجِبَاتِي كُلُّهَا انْتَهَتْ",
    "segs": [
      { "ar": "جَيِّدٌ", "uz": "yaxshi" },
      { "ar": "وَاجِبَاتِي كُلُّهَا انْتَهَتْ", "uz": "barcha vazifalarim tugadi" }
    ],
    "full_uz": "Yaxshi, barcha vazifalarim tugadi.",
    "note": null
  },
  {
    "num": 3,
    "time": "00:00:56,159 --> 00:00:58,240",
    "arabic": "لَمَسْتُكَ، دَوْرُكَ",
    "segs": [
      { "ar": "لَمَسْتُكَ", "uz": "senga tegdim" },
      { "ar": "دَوْرُكَ", "uz": "navbat sening" }
    ],
    "full_uz": "Senga tegdim, navbat sening!",
    "note": null
  },
  {
    "num": 4,
    "time": "00:01:13,320 --> 00:01:19,720",
    "arabic": "آهَا! لَمَسْتُكَ، دَوْرُكَ! سِيمْكَا عَلِقَتْ، أَرْجُوكِ ابْقَيْ سَاكِنًا",
    "segs": [
      { "ar": "آهَا!", "uz": "aha!" },
      { "ar": "لَمَسْتُكَ، دَوْرُكَ!", "uz": "senga tegdim, navbat sening!" },
      { "ar": "سِيمْكَا عَلِقَتْ", "uz": "Simka yopishib qoldi" },
      { "ar": "أَرْجُوكِ ابْقَيْ سَاكِنًا", "uz": "iltimos, qimirlamay tur" }
    ],
    "full_uz": "Aha! Senga tegdim, navbat sening! Simka yopishib qoldi, iltimos, qimirlamay tur.",
    "note": null
  },
  {
    "num": 5,
    "time": "00:01:19,720 --> 00:01:23,439",
    "arabic": "أَنْتَ عَالِقٌ حَقًّا سِيمْكَا، أَرْجُوكِ لَا تَتْرُكِينِي",
    "segs": [
      { "ar": "أَنْتَ عَالِقٌ حَقًّا", "uz": "sen rostdan ham yopishib qolding" },
      { "ar": "سِيمْكَا", "uz": "Simka" },
      { "ar": "أَرْجُوكِ لَا تَتْرُكِينِي", "uz": "iltimos, meni tashlab ketma" }
    ],
    "full_uz": "Simka, sen rostdan ham yopishib qolding, iltimos, meni tashlab ketma.",
    "note": null
  },
  {
    "num": 6,
    "time": "00:01:23,439 --> 00:01:28,119",
    "arabic": "لَنْ أَفْعَلَ! لَكِنْ أَخْشَى يَا نُولِيك أَنَّكَ",
    "segs": [
      { "ar": "لَنْ أَفْعَلَ!", "uz": "bunday qilmayman!" },
      { "ar": "لَكِنْ أَخْشَى يَا نُولِيك", "uz": "lekin qo'rqamanki, Nolik" },
      { "ar": "أَنَّكَ", "uz": "sen..." }
    ],
    "full_uz": "Bunday qilmayman! Lekin qo'rqamanki, Nolik, sen...",
    "note": null
  },
  {
    "num": 7,
    "time": "00:01:28,239 --> 00:01:29,359",
    "arabic": "سَتَبْقَى عَالِقًا",
    "segs": null,
    "full_uz": "...yopishib qolib qolasan.",
    "note": null
  },
  {
    "num": 8,
    "time": "00:01:29,359 --> 00:01:31,619",
    "arabic": "هَيَّا يَا تُوم سَاعِدْنِي",
    "segs": [
      { "ar": "هَيَّا يَا تُوم", "uz": "qani, Tom" },
      { "ar": "سَاعِدْنِي", "uz": "yordam ber menga" }
    ],
    "full_uz": "Qani, Tom, yordam ber menga.",
    "note": null
  },
  {
    "num": 9,
    "time": "00:01:31,619 --> 00:01:33,899",
    "arabic": "مَاذَا حَدَثَ؟",
    "segs": null,
    "full_uz": "Nima bo'ldi?",
    "note": null
  },
  {
    "num": 10,
    "time": "00:01:33,899 --> 00:01:37,859",
    "arabic": "انْظُرْ، هَذِهِ الْكُتْلَةُ الْبَيْضَاءُ أَمْسَكَتْ بِنُولِيك وَهِيَ لَا تَتْرُكُهُ",
    "segs": [
      { "ar": "انْظُرْ", "uz": "qara" },
      { "ar": "هَذِهِ الْكُتْلَةُ الْبَيْضَاءُ", "uz": "bu oq parcha" },
      { "ar": "أَمْسَكَتْ بِنُولِيك", "uz": "Nolikni ushlab oldi" },
      { "ar": "وَهِيَ لَا تَتْرُكُهُ", "uz": "va uni qo'yib yubormayapti" }
    ],
    "full_uz": "Qara, bu oq parcha Nolikni ushlab oldi va uni qo'yib yubormayapti.",
    "note": null
  },
  {
    "num": 11,
    "time": "00:01:37,859 --> 00:01:40,859",
    "arabic": "إِنَّهُ عِلْكِي",
    "segs": [
      { "ar": "إِنَّهُ", "uz": "bu" },
      { "ar": "عِلْكِي", "uz": "mening saqichim" }
    ],
    "full_uz": "Bu mening saqichim.",
    "note": null
  },
  {
    "num": 12,
    "time": "00:01:40,859 --> 00:01:42,659",
    "arabic": "نَعَمْ، إِنَّهُ عِلْكِي أَنَا",
    "segs": [
      { "ar": "نَعَمْ", "uz": "ha" },
      { "ar": "إِنَّهُ عِلْكِي أَنَا", "uz": "bu mening o'z saqichim" }
    ],
    "full_uz": "Ha, bu mening o'z saqichim.",
    "note": null
  },
  {
    "num": 13,
    "time": "00:01:42,659 --> 00:01:44,340",
    "arabic": "شُكْرًا يَا تُوم",
    "segs": null,
    "full_uz": "Rahmat, Tom.",
    "note": null
  },
  {
    "num": 14,
    "time": "00:01:44,340 --> 00:01:47,419",
    "arabic": "أَخْبِرْنِي الْآنَ كَيْفَ سَتُحَرِّرُنِي مِنْ هَذَا الْعِلْكِ",
    "segs": [
      { "ar": "أَخْبِرْنِي الْآنَ", "uz": "endi ayt-chi" },
      { "ar": "كَيْفَ سَتُحَرِّرُنِي مِنْ هَذَا الْعِلْكِ", "uz": "meni bu saqichdan qanday qutqarasan" }
    ],
    "full_uz": "Endi ayt-chi, meni bu saqichdan qanday qutqarasan?",
    "note": null
  },
  {
    "num": 15,
    "time": "00:01:47,419 --> 00:01:49,439",
    "arabic": "لَدَيَّ فِكْرَةٌ، سَنُجَمِّدُهُ",
    "segs": [
      { "ar": "لَدَيَّ فِكْرَةٌ", "uz": "menda fikr bor" },
      { "ar": "سَنُجَمِّدُهُ", "uz": "uni muzlatamiz" }
    ],
    "full_uz": "Menda fikr bor, uni muzlatamiz.",
    "note": null
  },
  {
    "num": 16,
    "time": "00:01:49,439 --> 00:01:53,659",
    "arabic": "عِنْدَمَا عَلِقَ الْعِلْكُ بِسَرَاوِيلِي وَضَعَتْهُ أُمِّي فِي الثَّلَّاجَةِ",
    "segs": [
      { "ar": "عِنْدَمَا عَلِقَ الْعِلْكُ بِسَرَاوِيلِي", "uz": "saqich shimimga yopishib qolganda" },
      { "ar": "وَضَعَتْهُ أُمِّي فِي الثَّلَّاجَةِ", "uz": "onam uni muzlatgichga qo'ygan edi" }
    ],
    "full_uz": "Saqich shimimga yopishib qolganda, onam uni muzlatgichga qo'ygan edi.",
    "note": null
  },
  {
    "num": 17,
    "time": "00:01:53,659 --> 00:01:56,500",
    "arabic": "فَتَجَمَّدَ الْعِلْكُ وَوَقَعَ عَنْهُ",
    "segs": [
      { "ar": "فَتَجَمَّدَ الْعِلْكُ", "uz": "shunda saqich muzlab qolgan edi" },
      { "ar": "وَوَقَعَ عَنْهُ", "uz": "va tushib ketgan edi" }
    ],
    "full_uz": "Shunda saqich muzlab qolgan va tushib ketgan edi.",
    "note": null
  },
  {
    "num": 18,
    "time": "00:01:56,500 --> 00:01:58,180",
    "arabic": "لَا أُرِيدُ فِي الثَّلَّاجَةِ",
    "segs": null,
    "full_uz": "Muzlatgichga kirishni xohlamayman.",
    "note": null
  },
  {
    "num": 19,
    "time": "00:01:58,180 --> 00:02:00,480",
    "arabic": "لَا تَخْشَى شَيْئًا، سَأَبْقَى مَعَكَ هُنَا",
    "segs": [
      { "ar": "لَا تَخْشَى شَيْئًا", "uz": "hech narsadan qo'rqma" },
      { "ar": "سَأَبْقَى مَعَكَ هُنَا", "uz": "men sen bilan shu yerda qolaman" }
    ],
    "full_uz": "Hech narsadan qo'rqma, men sen bilan shu yerda qolaman.",
    "note": null
  },
  {
    "num": 20,
    "time": "00:02:00,480 --> 00:02:04,140",
    "arabic": "تَمَاسَكًا، لَنْ تَبْقَيْ طَوِيلًا",
    "segs": [
      { "ar": "تَمَاسَكًا", "uz": "chida" },
      { "ar": "لَنْ تَبْقَيْ طَوِيلًا", "uz": "uzoq qolmaysan" }
    ],
    "full_uz": "Chida, uzoq qolmaysan.",
    "note": null
  },
  {
    "num": 21,
    "time": "00:02:04,140 --> 00:02:07,019",
    "arabic": "وَلِمَاذَا أَتَمَاسَكُ؟",
    "segs": null,
    "full_uz": "Nega chidashim kerak?",
    "note": null
  },
  {
    "num": 22,
    "time": "00:02:07,019 --> 00:02:08,520",
    "arabic": "وَأَنَا الْعِلْكَةُ يُمْسِكُ بِي",
    "segs": null,
    "full_uz": "Va meni saqich ushlab turibdi-ku.",
    "note": null
  },
  {
    "num": 23,
    "time": "00:02:08,520 --> 00:02:16,400",
    "arabic": "سِيمْكَا، هَلْ تَعْلَمِينَ لِمَاذَا الثَّلَّاجَةُ بَارِدَةٌ مَعَ أَنَّ الْجَوَّ دَافِئٌ؟",
    "segs": [
      { "ar": "سِيمْكَا", "uz": "Simka" },
      { "ar": "هَلْ تَعْلَمِينَ لِمَاذَا الثَّلَّاجَةُ بَارِدَةٌ", "uz": "muzlatgich nega sovuq bilasanmi" },
      { "ar": "مَعَ أَنَّ الْجَوَّ دَافِئٌ؟", "uz": "tashqarida issiq bo'lsa-da?" }
    ],
    "full_uz": "Simka, tashqarida issiq bo'lsa-da, muzlatgich nega sovuq bilasanmi?",
    "note": null
  },
  {
    "num": 24,
    "time": "00:02:16,400 --> 00:02:19,180",
    "arabic": "سَأَشْرَحُ لَكِ الْأَمْرَ",
    "segs": null,
    "full_uz": "Senga buni tushuntirib beraman.",
    "note": null
  },
  {
    "num": 25,
    "time": "00:02:19,180 --> 00:02:26,540",
    "arabic": "فِي الثَّلَّاجَةِ مِضَخَّةٌ تَدْفَعُ بِسَائِلٍ خَاصٍّ دَاخِلَ أُنْبُوبٍ طَوِيلٍ",
    "segs": [
      { "ar": "فِي الثَّلَّاجَةِ مِضَخَّةٌ", "uz": "muzlatgichda nasos bor" },
      { "ar": "تَدْفَعُ بِسَائِلٍ خَاصٍّ", "uz": "u maxsus suyuqlikni haydaydi" },
      { "ar": "دَاخِلَ أُنْبُوبٍ طَوِيلٍ", "uz": "uzun quvur ichiga" }
    ],
    "full_uz": "Muzlatgichda maxsus suyuqlikni uzun quvur ichiga haydaydigan nasos bor.",
    "note": null
  },
  {
    "num": 26,
    "time": "00:02:26,540 --> 00:02:30,719",
    "arabic": "وَفِي دَاخِلِ الثَّلَّاجَةِ يَتَحَوَّلُ السَّائِلُ إِلَى غَازٍ",
    "segs": [
      { "ar": "وَفِي دَاخِلِ الثَّلَّاجَةِ", "uz": "va muzlatgich ichida" },
      { "ar": "يَتَحَوَّلُ السَّائِلُ إِلَى غَازٍ", "uz": "suyuqlik gazga aylanadi" }
    ],
    "full_uz": "Va muzlatgich ichida suyuqlik gazga aylanadi.",
    "note": null
  },
  {
    "num": 27,
    "time": "00:02:30,719 --> 00:02:36,980",
    "arabic": "وَلِذَلِكَ يَحْتَاجُ إِلَى أَخْذِ الْحَرَارَةِ مِنْ كُلِّ شَيْءٍ فِي الدَّاخِلِ وَهَذَا يَجْعَلُ الثَّلَّاجَةَ بَارِدَةً",
    "segs": [
      { "ar": "وَلِذَلِكَ يَحْتَاجُ إِلَى أَخْذِ الْحَرَارَةِ", "uz": "shuning uchun u issiqlikni olishga muhtoj bo'ladi" },
      { "ar": "مِنْ كُلِّ شَيْءٍ فِي الدَّاخِلِ", "uz": "ichkaridagi hamma narsadan" },
      { "ar": "وَهَذَا يَجْعَلُ الثَّلَّاجَةَ بَارِدَةً", "uz": "va bu muzlatgichni sovuq qiladi" }
    ],
    "full_uz": "Shuning uchun u ichkaridagi hamma narsadan issiqlikni olishga muhtoj bo'ladi, bu esa muzlatgichni sovuq qiladi.",
    "note": null
  },
  {
    "num": 28,
    "time": "00:02:36,980 --> 00:02:44,540",
    "arabic": "وَبَعْدَهَا تَقُومُ الْمِضَخَّةُ بِسَحْبِ الْغَازِ وَدَفْعِهِ سَائِلًا سَاخِنًا إِلَى الْأَنَابِيبِ الْحَارَّةِ خَلْفَ الثَّلَّاجَةِ",
    "segs": [
      { "ar": "وَبَعْدَهَا تَقُومُ الْمِضَخَّةُ بِسَحْبِ الْغَازِ", "uz": "keyin nasos gazni tortib oladi" },
      { "ar": "وَدَفْعِهِ سَائِلًا سَاخِنًا", "uz": "va uni issiq suyuqlik sifatida haydaydi" },
      { "ar": "إِلَى الْأَنَابِيبِ الْحَارَّةِ خَلْفَ الثَّلَّاجَةِ", "uz": "muzlatgich orqasidagi issiq quvurlarga" }
    ],
    "full_uz": "Keyin nasos gazni tortib oladi va uni issiq suyuqlik sifatida muzlatgich orqasidagi issiq quvurlarga haydaydi.",
    "note": null
  },
  {
    "num": 29,
    "time": "00:02:44,539 --> 00:02:49,979",
    "arabic": "وَهَذَا يَسْمَحُ لِلْحَرَارَةِ الْمَجْمُوعَةِ مِنَ الدَّاخِلِ بِالْهُرُوبِ إِلَى الْهَوَاءِ فِي الْخَارِجِ",
    "segs": [
      { "ar": "وَهَذَا يَسْمَحُ لِلْحَرَارَةِ الْمَجْمُوعَةِ مِنَ الدَّاخِلِ", "uz": "bu ichkaridan to'plangan issiqlikka imkon beradi" },
      { "ar": "بِالْهُرُوبِ إِلَى الْهَوَاءِ فِي الْخَارِجِ", "uz": "tashqaridagi havoga chiqib ketishga" }
    ],
    "full_uz": "Bu esa ichkaridan to'plangan issiqlikning tashqaridagi havoga chiqib ketishiga imkon beradi.",
    "note": null
  },
  {
    "num": 30,
    "time": "00:02:49,979 --> 00:02:55,219",
    "arabic": "أَتَمَنَّى لَوْ كُنْتُ فِي مَكَانٍ دَافِئٍ",
    "segs": [
      { "ar": "أَتَمَنَّى", "uz": "koshki" },
      { "ar": "لَوْ كُنْتُ فِي مَكَانٍ دَافِئٍ", "uz": "issiq joyda bo'lsam edim" }
    ],
    "full_uz": "Koshki issiq joyda bo'lsam edim.",
    "note": null
  },
  {
    "num": 31,
    "time": "00:02:55,219 --> 00:02:58,919",
    "arabic": "انْتَظِرْ، سَأُحْضِرُ بَعْضَ الْمَلَابِسِ الدَّافِئَةِ",
    "segs": [
      { "ar": "انْتَظِرْ", "uz": "kutib tur" },
      { "ar": "سَأُحْضِرُ بَعْضَ الْمَلَابِسِ الدَّافِئَةِ", "uz": "men issiq kiyimlar olib kelaman" }
    ],
    "full_uz": "Kutib tur, men issiq kiyimlar olib kelaman.",
    "note": null
  },
  {
    "num": 32,
    "time": "00:02:58,919 --> 00:03:02,539",
    "arabic": "لَا أُرِيدُ الِانْتِظَارَ، أُرِيدُ أَنْ آتِيَ مَعَكَ",
    "segs": [
      { "ar": "لَا أُرِيدُ الِانْتِظَارَ", "uz": "kutishni xohlamayman" },
      { "ar": "أُرِيدُ أَنْ آتِيَ مَعَكَ", "uz": "sen bilan borishni xohlayman" }
    ],
    "full_uz": "Kutishni xohlamayman, sen bilan borishni xohlayman.",
    "note": null
  },
  {
    "num": 33,
    "time": "00:03:02,539 --> 00:03:03,639",
    "arabic": "قُلْتُ انْتَظِرْ هُنَا",
    "segs": null,
    "full_uz": "Shu yerda kut dedim-ku.",
    "note": null
  },
  {
    "num": 34,
    "time": "00:03:03,639 --> 00:03:04,439",
    "arabic": "أَنَا أَنْتَظِرُ",
    "segs": null,
    "full_uz": "Men kutayapman.",
    "note": null
  },
  {
    "num": 35,
    "time": "00:03:04,439 --> 00:03:06,579",
    "arabic": "تُوم، افْتَحْ، افْتَحْ",
    "segs": null,
    "full_uz": "Tom, och, och.",
    "note": null
  },
  {
    "num": 36,
    "time": "00:03:14,539 --> 00:03:23,579",
    "arabic": "مَاسِيَا، هَلْ لَدَيْنَا أَيُّ مَلَابِسَ شِتْوِيَّةٍ؟",
    "segs": [
      { "ar": "مَاسِيَا", "uz": "Masya" },
      { "ar": "هَلْ لَدَيْنَا أَيُّ مَلَابِسَ شِتْوِيَّةٍ؟", "uz": "bizda qishki kiyimlar bormi?" }
    ],
    "full_uz": "Masya, bizda qishki kiyimlar bormi?",
    "note": "مَاسِيَا — qahramon (ona) ismi."
  },
  {
    "num": 37,
    "time": "00:03:23,579 --> 00:03:25,399",
    "arabic": "وَلِمَاذَا تَحْتَاجِينَ إِلَيْهَا؟",
    "segs": null,
    "full_uz": "Va ular senga nima uchun kerak?",
    "note": null
  },
  {
    "num": 38,
    "time": "00:03:25,399 --> 00:03:26,519",
    "arabic": "أَحْتَاجُ إِلَيْهَا",
    "segs": null,
    "full_uz": "Menga kerak.",
    "note": null
  },
  {
    "num": 39,
    "time": "00:03:26,519 --> 00:03:29,359",
    "arabic": "حَسَنًا، أُرِيدُ أَنْ أَعْلَمَ لِمَاذَا",
    "segs": [
      { "ar": "حَسَنًا", "uz": "xo'p" },
      { "ar": "أُرِيدُ أَنْ أَعْلَمَ لِمَاذَا", "uz": "lekin nega ekanini bilmoqchiman" }
    ],
    "full_uz": "Xo'p, lekin nega ekanini bilmoqchiman.",
    "note": null
  },
  {
    "num": 40,
    "time": "00:03:29,359 --> 00:03:37,359",
    "arabic": "مَرْحَبًا",
    "segs": null,
    "full_uz": "Salom.",
    "note": null
  },
  {
    "num": 41,
    "time": "00:03:37,359 --> 00:03:40,799",
    "arabic": "تُوم، سِيمْكَا، افْتَحُوا الْبَابَ",
    "segs": [
      { "ar": "تُوم، سِيمْكَا", "uz": "Tom, Simka" },
      { "ar": "افْتَحُوا الْبَابَ", "uz": "eshikni oching" }
    ],
    "full_uz": "Tom, Simka, eshikni oching!",
    "note": null
  },
  {
    "num": 42,
    "time": "00:03:40,799 --> 00:03:42,299",
    "arabic": "أَرْجُوكُمْ افْتَحُوا الْبَابَ",
    "segs": null,
    "full_uz": "Iltimos, eshikni oching.",
    "note": null
  },
  {
    "num": 43,
    "time": "00:03:42,300 --> 00:03:48,500",
    "arabic": "لَا فَائِدَةَ، يَبْدُو أَنِّي سَأَبْقَى هُنَا لِأَتَجَمَّدَ",
    "segs": [
      { "ar": "لَا فَائِدَةَ", "uz": "foyda yo'q" },
      { "ar": "يَبْدُو أَنِّي سَأَبْقَى هُنَا لِأَتَجَمَّدَ", "uz": "shekilli, men shu yerda muzlab qolaman" }
    ],
    "full_uz": "Foyda yo'q, shekilli, men shu yerda muzlab qolaman.",
    "note": null
  },
  {
    "num": 44,
    "time": "00:03:48,500 --> 00:03:57,140",
    "arabic": "الْفِيكْسِيزُ، يَا أَعِزَّائِي، مُحَاطُونَ دَائِمًا بِكُلِّ أَنْوَاعِ الْمَخَاطِرِ",
    "segs": [
      { "ar": "الْفِيكْسِيزُ يَا أَعِزَّائِي", "uz": "aziz do'stlar, Fiksiklar" },
      { "ar": "مُحَاطُونَ دَائِمًا", "uz": "doim o'ralgan bo'lishadi" },
      { "ar": "بِكُلِّ أَنْوَاعِ الْمَخَاطِرِ", "uz": "har xil xavflar bilan" }
    ],
    "full_uz": "Aziz do'stlar, Fiksiklar doim har xil xavflar bilan o'ralgan bo'lishadi.",
    "note": null
  },
  {
    "num": 45,
    "time": "00:03:57,140 --> 00:04:01,760",
    "arabic": "دَاخِلَ ثَلَّاجَةٍ مُظْلِمَةٍ يُمْكِنُ لِلْفِيكْسِي أَنْ يَتَجَمَّدَ فَيَمُوتَ",
    "segs": [
      { "ar": "دَاخِلَ ثَلَّاجَةٍ مُظْلِمَةٍ", "uz": "qorong'i muzlatgich ichida" },
      { "ar": "يُمْكِنُ لِلْفِيكْسِي أَنْ يَتَجَمَّدَ", "uz": "Fiksik muzlab qolishi mumkin" },
      { "ar": "فَيَمُوتَ", "uz": "va o'lib qolishi mumkin" }
    ],
    "full_uz": "Qorong'i muzlatgich ichida Fiksik muzlab, o'lib qolishi mumkin.",
    "note": null
  },
  {
    "num": 46,
    "time": "00:04:01,760 --> 00:04:07,080",
    "arabic": "إِذَا لَمْ يَنْتَبِهْ جَيِّدًا فَإِنَّهُ قَدْ يَغْرَقُ دَاخِلَ الْغَسَّالَةِ أَوْ آلَةِ غَسْلِ الْأَطْبَاقِ",
    "segs": [
      { "ar": "إِذَا لَمْ يَنْتَبِهْ جَيِّدًا", "uz": "agar yaxshi ehtiyot bo'lmasa" },
      { "ar": "فَإِنَّهُ قَدْ يَغْرَقُ", "uz": "u cho'kib ketishi mumkin" },
      { "ar": "دَاخِلَ الْغَسَّالَةِ أَوْ آلَةِ غَسْلِ الْأَطْبَاقِ", "uz": "kir yuvish yoki idish yuvish mashinasi ichida" }
    ],
    "full_uz": "Agar yaxshi ehtiyot bo'lmasa, kir yuvish yoki idish yuvish mashinasi ichida cho'kib ketishi mumkin.",
    "note": null
  },
  {
    "num": 47,
    "time": "00:04:07,080 --> 00:04:11,000",
    "arabic": "وَالْفِيكْسِي الْمُهْمِلُ مُعَرَّضٌ دَوْمًا لِتَلَقِّي صَدْمَةٍ كَهْرَبَائِيَّةٍ",
    "segs": [
      { "ar": "وَالْفِيكْسِي الْمُهْمِلُ", "uz": "beparvo Fiksik" },
      { "ar": "مُعَرَّضٌ دَوْمًا لِتَلَقِّي صَدْمَةٍ كَهْرَبَائِيَّةٍ", "uz": "doim elektr toki urishi xavfiga duch keladi" }
    ],
    "full_uz": "Beparvo Fiksik doim elektr toki urishi xavfiga duch keladi.",
    "note": null
  },
  {
    "num": 48,
    "time": "00:04:11,000 --> 00:04:16,339",
    "arabic": "أَوِ افْتَرِضْ أَنَّ هُنَاكَ دَارَةً مُقَصَّرَةً أَشْعَلَتْ حَرِيقًا فِي جِهَازٍ مَا",
    "segs": [
      { "ar": "أَوِ افْتَرِضْ أَنَّ هُنَاكَ دَارَةً مُقَصَّرَةً", "uz": "yoki faraz qiling, qisqa tutashuv bo'lsa" },
      { "ar": "أَشْعَلَتْ حَرِيقًا فِي جِهَازٍ مَا", "uz": "biror qurilmada yong'in chiqargan bo'lsa" }
    ],
    "full_uz": "Yoki faraz qiling, qisqa tutashuv biror qurilmada yong'in chiqargan bo'lsa.",
    "note": "دَارَةٌ مُقَصَّرَةٌ — qisqa tutashuv."
  },
  {
    "num": 49,
    "time": "00:04:16,339 --> 00:04:19,819",
    "arabic": "عِنْدَهَا عَلَيْهِمْ أَنْ يَهْرُبُوا بِسُرْعَةٍ إِنْ أَرَادُوا النَّجَاةَ",
    "segs": [
      { "ar": "عِنْدَهَا عَلَيْهِمْ أَنْ يَهْرُبُوا بِسُرْعَةٍ", "uz": "o'shanda ular tezda qochishlari kerak" },
      { "ar": "إِنْ أَرَادُوا النَّجَاةَ", "uz": "agar omon qolishni xohlashsa" }
    ],
    "full_uz": "O'shanda, agar omon qolishni xohlashsa, ular tezda qochishlari kerak.",
    "note": null
  },
  {
    "num": 50,
    "time": "00:04:19,819 --> 00:04:22,240",
    "arabic": "وَمَاذَا عَنِ الْبَشَرِ؟",
    "segs": null,
    "full_uz": "Odamlar-chi?",
    "note": null
  },
  {
    "num": 51,
    "time": "00:04:22,240 --> 00:04:25,379",
    "arabic": "إِنَّهُمْ لَا يُصَدِّقُونَ أَنَّنَا حَقِيقِيُّونَ وَلَا يَقْتَنِعُونَ",
    "segs": [
      { "ar": "إِنَّهُمْ لَا يُصَدِّقُونَ أَنَّنَا حَقِيقِيُّونَ", "uz": "ular bizning haqiqiy ekanligimizga ishonishmaydi" },
      { "ar": "وَلَا يَقْتَنِعُونَ", "uz": "va ishontirib bo'lmaydi" }
    ],
    "full_uz": "Ular bizning haqiqiy ekanligimizga ishonishmaydi va ularni ishontirib bo'lmaydi.",
    "note": null
  },
  {
    "num": 52,
    "time": "00:04:25,379 --> 00:04:28,620",
    "arabic": "وَلِذَلِكَ قَدْ يُسْقِطُونَ خَطَأً شَيْئًا مَا عَلَى الْفِيكْسِي",
    "segs": [
      { "ar": "وَلِذَلِكَ قَدْ يُسْقِطُونَ خَطَأً", "uz": "shuning uchun ular bexosdan tushirib yuborishlari mumkin" },
      { "ar": "شَيْئًا مَا عَلَى الْفِيكْسِي", "uz": "biror narsani Fiksik ustiga" }
    ],
    "full_uz": "Shuning uchun ular Fiksik ustiga bexosdan biror narsani tushirib yuborishlari mumkin.",
    "note": null
  },
  {
    "num": 53,
    "time": "00:04:28,620 --> 00:04:31,779",
    "arabic": "أَوْ يَدُوسُونَ عَلَى أَحَدِهِمْ أَوْ يَرْكُلُونَهُ فِي الْغُرْفَةِ",
    "segs": [
      { "ar": "أَوْ يَدُوسُونَ عَلَى أَحَدِهِمْ", "uz": "yoki ulardan birini bosib olishlari mumkin" },
      { "ar": "أَوْ يَرْكُلُونَهُ فِي الْغُرْفَةِ", "uz": "yoki xonada tepib yuborishlari mumkin" }
    ],
    "full_uz": "Yoki ulardan birini bosib olishlari yoki xonada tepib yuborishlari mumkin.",
    "note": null
  },
  {
    "num": 54,
    "time": "00:04:31,779 --> 00:04:33,980",
    "arabic": "إِنْ لَمْ نَسْتَطِعِ الْهُرُوبَ فِي الْوَقْتِ الْمُنَاسِبِ",
    "segs": [
      { "ar": "إِنْ لَمْ نَسْتَطِعِ الْهُرُوبَ", "uz": "agar qocha olmasak" },
      { "ar": "فِي الْوَقْتِ الْمُنَاسِبِ", "uz": "o'z vaqtida" }
    ],
    "full_uz": "Agar biz o'z vaqtida qocha olmasak...",
    "note": null
  },
  {
    "num": 55,
    "time": "00:04:33,980 --> 00:04:36,920",
    "arabic": "مَا أُحَاوِلُ قَوْلَهُ أَيُّهَا الْفِيكْسِيزُ",
    "segs": [
      { "ar": "مَا أُحَاوِلُ قَوْلَهُ", "uz": "aytmoqchi bo'lganim" },
      { "ar": "أَيُّهَا الْفِيكْسِيزُ", "uz": "ey Fiksiklar" }
    ],
    "full_uz": "Aytmoqchi bo'lganim, ey Fiksiklar,",
    "note": null
  },
  {
    "num": 56,
    "time": "00:04:36,920 --> 00:04:39,600",
    "arabic": "عَلَيْكُمْ أَنْ تَكُونُوا حَذِرِينَ وَتَنْتَبِهُوا",
    "segs": [
      { "ar": "عَلَيْكُمْ أَنْ تَكُونُوا حَذِرِينَ", "uz": "ehtiyot bo'lishingiz kerak" },
      { "ar": "وَتَنْتَبِهُوا", "uz": "va diqqatli bo'lishingiz kerak" }
    ],
    "full_uz": "ehtiyot va diqqatli bo'lishingiz kerak.",
    "note": null
  },
  {
    "num": 57,
    "time": "00:04:39,600 --> 00:04:42,120",
    "arabic": "لِذَا كُونُوا أَذْكِيَاءَ وَابْقَوْا فِي سَلَامٍ",
    "segs": [
      { "ar": "لِذَا كُونُوا أَذْكِيَاءَ", "uz": "shuning uchun aqlli bo'linglar" },
      { "ar": "وَابْقَوْا فِي سَلَامٍ", "uz": "va omon qolinglar" }
    ],
    "full_uz": "Shuning uchun aqlli bo'linglar va omon qolinglar.",
    "note": null
  },
  {
    "num": 58,
    "time": "00:04:42,120 --> 00:04:46,000",
    "arabic": "لَا أَفْهَمُ مَا الَّذِي حَدَثَ",
    "segs": [
      { "ar": "لَا أَفْهَمُ", "uz": "tushunmayapman" },
      { "ar": "مَا الَّذِي حَدَثَ", "uz": "nima bo'lganini" }
    ],
    "full_uz": "Nima bo'lganini tushunmayapman.",
    "note": null
  },
  {
    "num": 59,
    "time": "00:04:46,000 --> 00:04:47,540",
    "arabic": "لَقَدْ كَانَ هُنَا",
    "segs": null,
    "full_uz": "U shu yerda edi.",
    "note": null
  },
  {
    "num": 60,
    "time": "00:04:47,540 --> 00:04:49,120",
    "arabic": "نُولِيك",
    "segs": null,
    "full_uz": "Nolik!",
    "note": null
  },
  {
    "num": 61,
    "time": "00:04:49,120 --> 00:04:50,740",
    "arabic": "تُرَى أَيْنَ هُوَ",
    "segs": null,
    "full_uz": "Qani, u qayerda ekan?",
    "note": null
  },
  {
    "num": 62,
    "time": "00:04:50,740 --> 00:04:53,840",
    "arabic": "انْظُرِي آثَارَ أَقْدَامٍ",
    "segs": null,
    "full_uz": "Qara, oyoq izlari.",
    "note": null
  },
  {
    "num": 63,
    "time": "00:04:53,840 --> 00:05:00,120",
    "arabic": "نُولِيك",
    "segs": null,
    "full_uz": "Nolik!",
    "note": null
  },
  {
    "num": 64,
    "time": "00:05:00,120 --> 00:05:01,560",
    "arabic": "أَنْتَ حَيٌّ؟",
    "segs": null,
    "full_uz": "Tirikmisan?",
    "note": null
  },
  {
    "num": 65,
    "time": "00:05:01,560 --> 00:05:03,620",
    "arabic": "لَقَدْ أَرْعَبْتَنِي بِشِدَّةٍ",
    "segs": null,
    "full_uz": "Meni juda qo'rqitib yubording.",
    "note": null
  },
  {
    "num": 66,
    "time": "00:05:03,620 --> 00:05:05,740",
    "arabic": "كَيْفَ خَرَجْتَ مِنْ هُنَاكَ؟",
    "segs": null,
    "full_uz": "U yerdan qanday chiqding?",
    "note": null
  },
  {
    "num": 67,
    "time": "00:05:05,740 --> 00:05:08,360",
    "arabic": "لَقَدْ أَخْبَرْتِنِي عَنْ طَرِيقَةِ عَمَلِ الثَّلَّاجَةِ",
    "segs": [
      { "ar": "لَقَدْ أَخْبَرْتِنِي", "uz": "sen menga aytib bergan eding" },
      { "ar": "عَنْ طَرِيقَةِ عَمَلِ الثَّلَّاجَةِ", "uz": "muzlatgich qanday ishlashini" }
    ],
    "full_uz": "Sen menga muzlatgich qanday ishlashini aytib bergan eding.",
    "note": null
  },
  {
    "num": 68,
    "time": "00:05:08,360 --> 00:05:12,560",
    "arabic": "لِذَا عَثَرْتُ عَلَى الْأُنْبُوبِ الْبَارِدِ وَتَسَلَّقْتُهُ حَتَّى صَارَ سَاخِنًا فَوَصَلْتُ",
    "segs": [
      { "ar": "لِذَا عَثَرْتُ عَلَى الْأُنْبُوبِ الْبَارِدِ", "uz": "shuning uchun sovuq quvurni topdim" },
      { "ar": "وَتَسَلَّقْتُهُ حَتَّى صَارَ سَاخِنًا", "uz": "va u issiq bo'lguncha unga tirmashib chiqdim" },
      { "ar": "فَوَصَلْتُ", "uz": "va yetib keldim" }
    ],
    "full_uz": "Shuning uchun sovuq quvurni topib, u issiq bo'lguncha unga tirmashib chiqdim va yetib keldim.",
    "note": null
  },
  {
    "num": 69,
    "time": "00:05:12,560 --> 00:05:13,740",
    "arabic": "وَهَكَذَا خَرَجْتُ",
    "segs": null,
    "full_uz": "Va shunday qilib chiqdim.",
    "note": null
  },
  {
    "num": 70,
    "time": "00:05:13,740 --> 00:05:17,379",
    "arabic": "انْظُرْ! الدُّخَانُ يَسْعَدُ مِنْكَ! عَلَيْنَا أَنْ نُبَرِّدَكَ فِي الْحَالِ",
    "segs": [
      { "ar": "انْظُرْ!", "uz": "qara!" },
      { "ar": "الدُّخَانُ يَسْعَدُ مِنْكَ!", "uz": "sendan tutun ko'tarilyapti!" },
      { "ar": "عَلَيْنَا أَنْ نُبَرِّدَكَ فِي الْحَالِ", "uz": "seni darhol sovutishimiz kerak" }
    ],
    "full_uz": "Qara! Sendan tutun ko'tarilyapti! Seni darhol sovutishimiz kerak.",
    "note": "يَسْعَدُ — matnda ehtimol 'يَصْعَدُ' (ko'tariladi, chiqadi) so'zi nazarda tutilgan."
  },
  {
    "num": 71,
    "time": "00:05:17,379 --> 00:05:18,360",
    "arabic": "هَا؟ أَيْنَ؟",
    "segs": null,
    "full_uz": "Ha? Qayerda?",
    "note": null
  },
  {
    "num": 72,
    "time": "00:05:19,939 --> 00:05:23,199",
    "arabic": "آهْ! لَا أُرِيدُ الْعَوْدَةَ لِلثَّلَّاجَةِ!",
    "segs": [
      { "ar": "آهْ!", "uz": "oh!" },
      { "ar": "لَا أُرِيدُ الْعَوْدَةَ لِلثَّلَّاجَةِ!", "uz": "muzlatgichga qaytishni xohlamayman!" }
    ],
    "full_uz": "Oh! Muzlatgichga qaytishni xohlamayman!",
    "note": null
  },
  {
    "num": 73,
    "time": "00:05:23,220 --> 00:05:24,540",
    "arabic": "بِالطَّبْعِ! كُنْتُ أَمْزَحُ!",
    "segs": [
      { "ar": "بِالطَّبْعِ!", "uz": "albatta!" },
      { "ar": "كُنْتُ أَمْزَحُ!", "uz": "hazillashayapman edi!" }
    ],
    "full_uz": "Albatta! Hazillashayapman edi!",
    "note": null
  },
  {
    "num": 74,
    "time": "00:05:26,420 --> 00:05:29,379",
    "arabic": "انْظُرُوا كَيْفَ تَجَمَّدْتُ! سَتُكَسِّرُ أَسْنَانِي",
    "segs": [
      { "ar": "انْظُرُوا كَيْفَ تَجَمَّدْتُ!", "uz": "qaranglar, qanday muzlab qolibman!" },
      { "ar": "سَتُكَسِّرُ أَسْنَانِي", "uz": "tishlarimni sindirib qo'yasan" }
    ],
    "full_uz": "Qaranglar, qanday muzlab qolibman! Tishlarimni sindirib qo'yasan.",
    "note": null
  },
  {
    "num": 75,
    "time": "00:05:29,379 --> 00:05:31,680",
    "arabic": "هَلْ تُفَكِّرُ فِي عِلْكِهِ ثَانِيَةً؟",
    "segs": [
      { "ar": "هَلْ تُفَكِّرُ", "uz": "o'ylayapsanmi" },
      { "ar": "فِي عِلْكِهِ ثَانِيَةً؟", "uz": "uni yana chaynashni?" }
    ],
    "full_uz": "Uni yana chaynashni o'ylayapsanmi?",
    "note": null
  },
  {
    "num": 76,
    "time": "00:05:31,680 --> 00:05:34,220",
    "arabic": "لَا! لَيْسَ بَعْدَ أَنْ جَلَسَ عَلَيْهَا نُولِيك",
    "segs": [
      { "ar": "لَا!", "uz": "yo'q!" },
      { "ar": "لَيْسَ بَعْدَ أَنْ جَلَسَ عَلَيْهَا نُولِيك", "uz": "Nolik uning ustida o'tirganidan keyin, endi yo'q" }
    ],
    "full_uz": "Yo'q! Nolik uning ustida o'tirganidan keyin, endi yo'q.",
    "note": null
  },
  {
    "num": 77,
    "time": "00:05:34,220 --> 00:05:37,300",
    "arabic": "كَانَ عَلَيْكَ وَضْعُهَا فِي مَكَانِهَا الْمُخَصَّصِ",
    "segs": [
      { "ar": "كَانَ عَلَيْكَ وَضْعُهَا", "uz": "uni qo'yishing kerak edi" },
      { "ar": "فِي مَكَانِهَا الْمُخَصَّصِ", "uz": "o'z joyiga" }
    ],
    "full_uz": "Uni o'z joyiga qo'yishing kerak edi.",
    "note": null
  },
  {
    "num": 78,
    "time": "00:05:37,300 --> 00:05:40,460",
    "arabic": "حَسَنًا، أَنَا آسِفٌ، سَأَذْهَبُ وَأَرْمِيهَا",
    "segs": [
      { "ar": "حَسَنًا أَنَا آسِفٌ", "uz": "xo'p, uzr" },
      { "ar": "سَأَذْهَبُ وَأَرْمِيهَا", "uz": "borib tashlab kelaman" }
    ],
    "full_uz": "Xo'p, uzr, borib tashlab kelaman.",
    "note": null
  },
  {
    "num": 79,
    "time": "00:05:40,460 --> 00:05:42,460",
    "arabic": "إِذًا جَرِّبْ سَلَّةَ الْقُمَامَةِ",
    "segs": [
      { "ar": "إِذًا", "uz": "unda" },
      { "ar": "جَرِّبْ سَلَّةَ الْقُمَامَةِ", "uz": "axlat savatini sinab ko'r" }
    ],
    "full_uz": "Unda axlat savatini sinab ko'r.",
    "note": null
  }
];
if (typeof module !== "undefined" && module.exports) {
  module.exports = lessons;
}
