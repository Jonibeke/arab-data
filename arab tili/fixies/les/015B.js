const lessons = [
  {
    "num": 1,
    "time": "00:00:32,000 --> 00:00:37,219",
    "arabic": "حَوْضُ السَّمَكِ",
    "segs": null,
    "full_uz": "Akvarium.",
    "note": null
  },
  {
    "num": 2,
    "time": "00:00:37,760 --> 00:00:41,180",
    "arabic": "الشَّاطِئُ آمِنٌ لَقَدْ غَادَرُوا",
    "segs": [
      { "ar": "الشَّاطِئُ آمِنٌ", "uz": "sohil xavfsiz" },
      { "ar": "لَقَدْ غَادَرُوا", "uz": "ular ketishdi" }
    ],
    "full_uz": "Sohil xavfsiz, ular ketishdi.",
    "note": null
  },
  {
    "num": 3,
    "time": "00:00:41,200 --> 00:00:43,179",
    "arabic": "هَيَّا لِنَنْطَلِقْ",
    "segs": null,
    "full_uz": "Qani, jo'naymiz.",
    "note": null
  },
  {
    "num": 4,
    "time": "00:00:45,280 --> 00:00:51,780",
    "arabic": "مَاسِيَا، لِمَاذَا تَبْدُو الْأَسْمَاكُ تَعِبَةً هَكَذَا؟",
    "segs": [
      { "ar": "مَاسِيَا", "uz": "Masya" },
      { "ar": "لِمَاذَا تَبْدُو الْأَسْمَاكُ تَعِبَةً هَكَذَا", "uz": "nega baliqlar bunchalik charchagandek ko'rinadi" }
    ],
    "full_uz": "Masya, nega baliqlar bunchalik charchagandek ko'rinadi?",
    "note": null
  },
  {
    "num": 5,
    "time": "00:00:51,879 --> 00:00:53,760",
    "arabic": "لِأَنَّ الْهَوَاءَ لَا يَكْفِيهَا",
    "segs": null,
    "full_uz": "Chunki ularga havo yetarli emas.",
    "note": null
  },
  {
    "num": 6,
    "time": "00:00:53,760 --> 00:00:57,079",
    "arabic": "فَالْمَاءُ فِي الْحَوْضِ مُلَوَّثٌ يَحْتَاجُ إِلَى الْهَوَاءِ",
    "segs": [
      { "ar": "فَالْمَاءُ فِي الْحَوْضِ مُلَوَّثٌ", "uz": "akvariumdagi suv ifloslangan" },
      { "ar": "يَحْتَاجُ إِلَى الْهَوَاءِ", "uz": "unga havo kerak" }
    ],
    "full_uz": "Akvariumdagi suv ifloslangan, unga havo kerak.",
    "note": null
  },
  {
    "num": 7,
    "time": "00:00:57,079 --> 00:00:59,600",
    "arabic": "لَكِنْ جِهَازُ التَّرْشِيحِ لَا يَعْمَلُ",
    "segs": null,
    "full_uz": "Lekin filtr ishlamayapti.",
    "note": "جِهَازُ التَّرْشِيحِ — filtr."
  },
  {
    "num": 8,
    "time": "00:00:59,600 --> 00:01:01,219",
    "arabic": "التَّرْشِيحُ؟",
    "segs": null,
    "full_uz": "Filtrmi?",
    "note": null
  },
  {
    "num": 9,
    "time": "00:01:01,219 --> 00:01:03,660",
    "arabic": "نَعَمْ ذَاكَ الْجِهَازُ هُنَاكَ",
    "segs": null,
    "full_uz": "Ha, ana o'sha asbob.",
    "note": null
  },
  {
    "num": 10,
    "time": "00:01:03,660 --> 00:01:07,780",
    "arabic": "عَلَيْنَا مُسَاعَدَتُهَا وَإِنْ لَمْ نَفْعَلْ شَيْئًا فَسَتَمُوتُ",
    "segs": [
      { "ar": "عَلَيْنَا مُسَاعَدَتُهَا", "uz": "ularga yordam berishimiz kerak" },
      { "ar": "وَإِنْ لَمْ نَفْعَلْ شَيْئًا فَسَتَمُوتُ", "uz": "aks holda ular o'lib qoladi" }
    ],
    "full_uz": "Ularga yordam berishimiz kerak, aks holda ular o'lib qoladi.",
    "note": null
  },
  {
    "num": 11,
    "time": "00:01:07,780 --> 00:01:10,219",
    "arabic": "أَحْسَنْتِ أَوَّلًا سَأُصْلِحُ الْمِصْبَاحَ",
    "segs": [
      { "ar": "أَحْسَنْتِ", "uz": "barakalla" },
      { "ar": "أَوَّلًا سَأُصْلِحُ الْمِصْبَاحَ", "uz": "avval men lampani tuzataman" }
    ],
    "full_uz": "Barakalla, avval men lampani tuzataman.",
    "note": null
  },
  {
    "num": 12,
    "time": "00:01:10,219 --> 00:01:13,519",
    "arabic": "وَأَنْتِ وَشِيفَا، أَصْلِحَا عُطْلَ جِهَازِ التَّرْشِيحِ",
    "segs": [
      { "ar": "وَأَنْتِ وَشِيفَا", "uz": "sen esa Shifa bilan" },
      { "ar": "أَصْلِحَا عُطْلَ جِهَازِ التَّرْشِيحِ", "uz": "filtr nosozligini tuzatinglar" }
    ],
    "full_uz": "Sen esa Shifa bilan filtr nosozligini tuzatinglar.",
    "note": null
  },
  {
    "num": 13,
    "time": "00:01:13,519 --> 00:01:16,180",
    "arabic": "وَأَنَا أَيْضًا أُرِيدُ أَنْ أَرَى هَذَا الْجِهَازَ",
    "segs": null,
    "full_uz": "Men ham bu asbobni ko'rmoqchiman.",
    "note": null
  },
  {
    "num": 14,
    "time": "00:01:16,180 --> 00:01:18,280",
    "arabic": "أَنْتَ صَغِيرٌ عَلَى هَذَا",
    "segs": null,
    "full_uz": "Sen bunga kichkinasan.",
    "note": null
  },
  {
    "num": 15,
    "time": "00:01:18,280 --> 00:01:19,540",
    "arabic": "وَاوْ وَاوْ وَاوْ",
    "segs": null,
    "full_uz": "Voy-voy-voy.",
    "note": null
  },
  {
    "num": 16,
    "time": "00:01:19,540 --> 00:01:22,739",
    "arabic": "يَعْنِي أَنْتَ الْعِمْلَاقَةُ وَطُولُكِ سِتُّ أَقْدَامٍ",
    "segs": [
      { "ar": "يَعْنِي أَنْتَ الْعِمْلَاقَةُ", "uz": "ya'ni sen ulkansan-da" },
      { "ar": "وَطُولُكِ سِتُّ أَقْدَامٍ", "uz": "bo'ying olti fut" }
    ],
    "full_uz": "Ya'ni sen ulkansan-da, bo'ying olti fut.",
    "note": null
  },
  {
    "num": 17,
    "time": "00:01:22,739 --> 00:01:24,340",
    "arabic": "يَكْفِي جِدَالًا",
    "segs": null,
    "full_uz": "Bahs qilish yetadi.",
    "note": null
  },
  {
    "num": 18,
    "time": "00:01:24,340 --> 00:01:25,500",
    "arabic": "نُولِيكْ لِنَنْطَلِقْ",
    "segs": null,
    "full_uz": "Nolik, jo'naymiz.",
    "note": null
  },
  {
    "num": 19,
    "time": "00:01:26,060 --> 00:01:38,040",
    "arabic": "حَسَنًا",
    "segs": null,
    "full_uz": "Xo'p.",
    "note": null
  },
  {
    "num": 20,
    "time": "00:01:32,260 --> 00:01:33,460",
    "arabic": "لِنَتَفَقَّدْ",
    "segs": null,
    "full_uz": "Keling, tekshiramiz.",
    "note": null
  },
  {
    "num": 21,
    "time": "00:01:33,460 --> 00:01:34,719",
    "arabic": "لَا يَعْمَلُ",
    "segs": null,
    "full_uz": "Ishlamayapti.",
    "note": null
  },
  {
    "num": 22,
    "time": "00:01:34,719 --> 00:01:37,180",
    "arabic": "نُولِيكْ أَيْنَ أَنْتَ؟",
    "segs": null,
    "full_uz": "Nolik, qayerdasan?",
    "note": null
  },
  {
    "num": 23,
    "time": "00:01:37,180 --> 00:01:37,840",
    "arabic": "أَنَا فَوْقُ",
    "segs": null,
    "full_uz": "Men tepada.",
    "note": null
  },
  {
    "num": 24,
    "time": "00:01:37,840 --> 00:01:40,500",
    "arabic": "وَمَا الَّذِي تَفْعَلُهُ هُنَاكَ؟",
    "segs": null,
    "full_uz": "Va u yerda nima qilyapsan?",
    "note": null
  },
  {
    "num": 25,
    "time": "00:01:40,500 --> 00:01:42,020",
    "arabic": "لَا شَيْءَ أَنَا أَلْعَبُ",
    "segs": [
      { "ar": "لَا شَيْءَ", "uz": "hech narsa" },
      { "ar": "أَنَا أَلْعَبُ", "uz": "o'ynayapman" }
    ],
    "full_uz": "Hech narsa, o'ynayapman.",
    "note": null
  },
  {
    "num": 26,
    "time": "00:01:42,020 --> 00:01:43,939",
    "arabic": "لَا وَقْتَ لَدَيْنَا لِهَذَا",
    "segs": null,
    "full_uz": "Bunga vaqtimiz yo'q.",
    "note": null
  },
  {
    "num": 27,
    "time": "00:01:43,939 --> 00:01:44,620",
    "arabic": "انْزِلْ",
    "segs": null,
    "full_uz": "Tush.",
    "note": null
  },
  {
    "num": 28,
    "time": "00:01:44,620 --> 00:01:47,280",
    "arabic": "عَلَيْنَا إِصْلَاحُ هَذَا الْمِفْتَاحِ",
    "segs": null,
    "full_uz": "Bu kalitni tuzatishimiz kerak.",
    "note": null
  },
  {
    "num": 29,
    "time": "00:01:47,280 --> 00:01:56,519",
    "arabic": "مَاسِيَا مَا مُشْكِلَةُ جِهَازِ التَّرْشِيحِ؟",
    "segs": [
      { "ar": "مَاسِيَا", "uz": "Masya" },
      { "ar": "مَا مُشْكِلَةُ جِهَازِ التَّرْشِيحِ", "uz": "filtrning muammosi nimada" }
    ],
    "full_uz": "Masya, filtrning muammosi nimada?",
    "note": null
  },
  {
    "num": 30,
    "time": "00:01:56,519 --> 00:02:00,700",
    "arabic": "يَبْدُو أَنَّ شَيْئًا مَا عَالِقٌ دَاخِلَهُ وَهُوَ يَمْنَعُ دَوَرَانَ الْمُحَرِّكِ",
    "segs": [
      { "ar": "يَبْدُو أَنَّ شَيْئًا مَا عَالِقٌ دَاخِلَهُ", "uz": "shekilli, ichida biror narsa tiqilib qolgan" },
      { "ar": "وَهُوَ يَمْنَعُ دَوَرَانَ الْمُحَرِّكِ", "uz": "va bu motorning aylanishiga to'sqinlik qilyapti" }
    ],
    "full_uz": "Shekilli, ichida biror narsa tiqilib qolgan va bu motorning aylanishiga to'sqinlik qilyapti.",
    "note": null
  },
  {
    "num": 31,
    "time": "00:02:00,700 --> 00:02:05,920",
    "arabic": "الْمُرَشِّحُ يُبْقِي الْمَاءَ فِي الْحَوْضِ نَظِيفًا",
    "segs": null,
    "full_uz": "Filtr akvariumdagi suvni toza saqlaydi.",
    "note": null
  },
  {
    "num": 32,
    "time": "00:02:05,920 --> 00:02:11,300",
    "arabic": "يَدُورُ مُحَرِّكُ الْعَنَفَاتِ وَيَضُخُّ الْمَاءَ فِي شَبَكَةٍ نَاعِمَةٍ أَوْ إِسْفَنْجَةٍ",
    "segs": [
      { "ar": "يَدُورُ مُحَرِّكُ الْعَنَفَاتِ", "uz": "turbina motori aylanadi" },
      { "ar": "وَيَضُخُّ الْمَاءَ فِي شَبَكَةٍ نَاعِمَةٍ أَوْ إِسْفَنْجَةٍ", "uz": "va suvni yumshoq to'r yoki gubka orqali haydaydi" }
    ],
    "full_uz": "Turbina motori aylanadi va suvni yumshoq to'r yoki gubka orqali haydaydi.",
    "note": null
  },
  {
    "num": 33,
    "time": "00:02:11,300 --> 00:02:16,460",
    "arabic": "تَعْلَقُ الْأَوْسَاخُ وَالشَّوَائِبُ هُنَاكَ وَيَعُودُ الْمَاءُ النَّظِيفُ إِلَى الْحَوْضِ",
    "segs": [
      { "ar": "تَعْلَقُ الْأَوْسَاخُ وَالشَّوَائِبُ هُنَاكَ", "uz": "iflosliklar va chiqindilar shu yerda qoladi" },
      { "ar": "وَيَعُودُ الْمَاءُ النَّظِيفُ إِلَى الْحَوْضِ", "uz": "toza suv esa akvariumga qaytadi" }
    ],
    "full_uz": "Iflosliklar va chiqindilar shu yerda qoladi, toza suv esa akvariumga qaytadi.",
    "note": null
  },
  {
    "num": 34,
    "time": "00:02:16,460 --> 00:02:21,240",
    "arabic": "الْمُرَشِّحَاتُ الْحَدِيثَةُ لَا تُنَقِّي الْمَاءَ فَقَطْ بَلْ تَضُخُّ الْهَوَاءَ فِيهِ",
    "segs": [
      { "ar": "الْمُرَشِّحَاتُ الْحَدِيثَةُ لَا تُنَقِّي الْمَاءَ فَقَطْ", "uz": "zamonaviy filtrlar nafaqat suvni tozalaydi" },
      { "ar": "بَلْ تَضُخُّ الْهَوَاءَ فِيهِ", "uz": "balki unga havo ham haydaydi" }
    ],
    "full_uz": "Zamonaviy filtrlar nafaqat suvni tozalaydi, balki unga havo ham haydaydi.",
    "note": null
  },
  {
    "num": 35,
    "time": "00:02:21,240 --> 00:02:23,939",
    "arabic": "وَهَذَا يَزِيدُ مِقْدَارَ الْأَكْسِجِينِ فِي الْمَاءِ",
    "segs": null,
    "full_uz": "Bu esa suvdagi kislorod miqdorini oshiradi.",
    "note": null
  },
  {
    "num": 36,
    "time": "00:02:23,939 --> 00:02:28,939",
    "arabic": "فَكَمَا تَرَوْنَ تَعِيشُ الْأَسْمَاكُ جَمِيعًا فِي الْمِيَاهِ الْعَذْبَةِ وَالْمَالِحَةِ",
    "segs": [
      { "ar": "فَكَمَا تَرَوْنَ", "uz": "ko'rib turganingizdek" },
      { "ar": "تَعِيشُ الْأَسْمَاكُ جَمِيعًا فِي الْمِيَاهِ الْعَذْبَةِ وَالْمَالِحَةِ", "uz": "barcha baliqlar chuchuk va sho'r suvlarda yashaydi" }
    ],
    "full_uz": "Ko'rib turganingizdek, barcha baliqlar chuchuk va sho'r suvlarda yashaydi.",
    "note": null
  },
  {
    "num": 37,
    "time": "00:02:28,939 --> 00:02:31,300",
    "arabic": "لِذَا تَحْتَاجُ إِلَى الْأَكْسِجِينِ مِثْلَنَا",
    "segs": null,
    "full_uz": "Shuning uchun ularga ham xuddi bizga o'xshab kislorod kerak.",
    "note": null
  },
  {
    "num": 38,
    "time": "00:02:46,460 --> 00:03:04,219",
    "arabic": "تِيدِيشْ",
    "segs": null,
    "full_uz": "Tidish!",
    "note": "Tovush effekti."
  },
  {
    "num": 39,
    "time": "00:03:04,219 --> 00:03:06,540",
    "arabic": "أَحْسَنْتَ عَمَلًا",
    "segs": null,
    "full_uz": "Ishing uchun barakalla.",
    "note": null
  },
  {
    "num": 40,
    "time": "00:03:16,460 --> 00:03:42,060",
    "arabic": "هُنَاكَ طَرَائِقُ كَثِيرَةٌ لِلتَّنَفُّسِ تَحْتَ الْمَاءِ",
    "segs": null,
    "full_uz": "Suv ostida nafas olishning ko'plab usullari bor.",
    "note": null
  },
  {
    "num": 41,
    "time": "00:03:42,060 --> 00:03:45,540",
    "arabic": "لِلتَّجْرِبَةِ جَرِّبُوا وَضْعَ كُوبٍ فَارِغٍ مَقْلُوبٍ فِي الْمَاءِ",
    "segs": null,
    "full_uz": "Sinab ko'rish uchun bo'sh stakanni ag'darib suvga solib ko'ring.",
    "note": null
  },
  {
    "num": 42,
    "time": "00:03:45,539 --> 00:03:48,159",
    "arabic": "لِتَرَوْا أَنَّ بَعْضًا مِنَ الْهَوَاءِ يَبْقَى هُنَاكَ",
    "segs": null,
    "full_uz": "Shunda ba'zi havo o'sha yerda qolishini ko'rasiz.",
    "note": null
  },
  {
    "num": 43,
    "time": "00:03:48,159 --> 00:03:51,159",
    "arabic": "هَذِهِ هِيَ الْفِكْرَةُ خَلْفَ جَرَسِ الْغَطْسِ الْقَدِيمِ",
    "segs": null,
    "full_uz": "Qadimgi sho'ng'in qo'ng'irog'ining g'oyasi ham shu edi.",
    "note": "جَرَسُ الْغَطْسِ — sho'ng'in qo'ng'irog'i (diving bell)."
  },
  {
    "num": 44,
    "time": "00:03:51,159 --> 00:03:53,680",
    "arabic": "يَتِمُّ إِنْزَالُ جَرَسٍ فَارِغٍ تَحْتَ الْمَاءِ",
    "segs": null,
    "full_uz": "Bo'sh qo'ng'iroq suv ostiga tushiriladi.",
    "note": null
  },
  {
    "num": 45,
    "time": "00:03:53,680 --> 00:03:56,939",
    "arabic": "فَيَبْقَى بَعْضُ الْهَوَاءِ دَاخِلَهُ يَتَنَفَّسُ مِنْهُ الْغَوَّاصُ",
    "segs": [
      { "ar": "فَيَبْقَى بَعْضُ الْهَوَاءِ دَاخِلَهُ", "uz": "shunda uning ichida biroz havo qoladi" },
      { "ar": "يَتَنَفَّسُ مِنْهُ الْغَوَّاصُ", "uz": "sho'ng'inchi undan nafas oladi" }
    ],
    "full_uz": "Shunda uning ichida biroz havo qoladi, sho'ng'inchi undan nafas oladi.",
    "note": null
  },
  {
    "num": 46,
    "time": "00:03:56,939 --> 00:04:01,639",
    "arabic": "قَبْلَ مِئَتَيْ سَنَةٍ تَقْرِيبًا اخْتُرِعَتْ أَوَّلُ بِزَّةِ غَطْسٍ",
    "segs": null,
    "full_uz": "Taxminan ikki yuz yil oldin birinchi sho'ng'in kostyumi ixtiro qilingan.",
    "note": null
  },
  {
    "num": 47,
    "time": "00:04:01,639 --> 00:04:04,159",
    "arabic": "يَتَنَفَّسُ الْغَطَّاسُ عَنْ طَرِيقِ خُرْطُومٍ",
    "segs": null,
    "full_uz": "Sho'ng'inchi shlanga orqali nafas oladi.",
    "note": null
  },
  {
    "num": 48,
    "time": "00:04:04,159 --> 00:04:05,819",
    "arabic": "بِدَايَتُهُ فَوْقَ الْمَاءِ",
    "segs": null,
    "full_uz": "Uning boshi suv ustida bo'ladi.",
    "note": null
  },
  {
    "num": 49,
    "time": "00:04:05,819 --> 00:04:09,139",
    "arabic": "يَسْمَحُ هَذَا لِلْغَطَّاسِ بِالْبَقَاءِ مُدَّةً تَحْتَ الْمَاءِ",
    "segs": null,
    "full_uz": "Bu sho'ng'inchiga suv ostida ma'lum vaqt qolish imkonini beradi.",
    "note": null
  },
  {
    "num": 50,
    "time": "00:04:09,139 --> 00:04:10,919",
    "arabic": "وَبِالْمَشْيِ أَيْضًا فِي الْقَاعِ",
    "segs": null,
    "full_uz": "Va tag qismida yurish imkonini ham.",
    "note": null
  },
  {
    "num": 51,
    "time": "00:04:10,919 --> 00:04:13,060",
    "arabic": "لَكِنْ لَيْسَ إِلَى مَسَافَةٍ كَبِيرَةٍ",
    "segs": null,
    "full_uz": "Lekin uzoq masofaga emas.",
    "note": null
  },
  {
    "num": 52,
    "time": "00:04:13,060 --> 00:04:18,019",
    "arabic": "لَاحِقًا تَعَلَّمَ النَّاسُ طَرِيقَةَ ضَغْطِ الْهَوَاءِ فِي أُسْطُوَانَاتٍ مَعْدِنِيَّةٍ",
    "segs": null,
    "full_uz": "Keyinchalik odamlar havoni metall ballonlarga siqib joylashtirishni o'rganishdi.",
    "note": null
  },
  {
    "num": 53,
    "time": "00:04:18,019 --> 00:04:20,000",
    "arabic": "وَعِنْدَهَا بَدَأَ الْغَطْسُ يَشِيعُ",
    "segs": null,
    "full_uz": "Shundan so'ng sho'ng'in ommalasha boshladi.",
    "note": null
  },
  {
    "num": 54,
    "time": "00:04:20,000 --> 00:04:23,000",
    "arabic": "يَقُومُ الْغَطَّاسُونَ بِالتَّنَفُّسِ مِنَ الْأُسْطُوَانَاتِ",
    "segs": null,
    "full_uz": "Sho'ng'inchilar ballonlardan nafas olishadi.",
    "note": null
  },
  {
    "num": 55,
    "time": "00:04:23,000 --> 00:04:27,560",
    "arabic": "وَبِذَلِكَ يَسْبَحُونَ بِحُرِّيَّةٍ وَيَغُوصُونَ فِي أَعْمَاقٍ كَبِيرَةٍ تَحْتَ الْمَاءِ",
    "segs": [
      { "ar": "وَبِذَلِكَ يَسْبَحُونَ بِحُرِّيَّةٍ", "uz": "shunday qilib ular erkin suzishadi" },
      { "ar": "وَيَغُوصُونَ فِي أَعْمَاقٍ كَبِيرَةٍ تَحْتَ الْمَاءِ", "uz": "va suv ostida katta chuqurlikka sho'ng'ishadi" }
    ],
    "full_uz": "Shunday qilib ular erkin suzishadi va suv ostida katta chuqurlikka sho'ng'ishadi.",
    "note": null
  },
  {
    "num": 56,
    "time": "00:04:27,560 --> 00:04:30,860",
    "arabic": "تَمَّتِ الْمُهِمَّةُ",
    "segs": null,
    "full_uz": "Vazifa bajarildi.",
    "note": null
  },
  {
    "num": 57,
    "time": "00:04:30,860 --> 00:04:33,939",
    "arabic": "الْمَصَابِيحُ تَعْمَلُ وَكَذَلِكَ جِهَازُ التَّرْشِيحِ",
    "segs": [
      { "ar": "الْمَصَابِيحُ تَعْمَلُ", "uz": "lampalar ishlayapti" },
      { "ar": "وَكَذَلِكَ جِهَازُ التَّرْشِيحِ", "uz": "shuningdek, filtr ham" }
    ],
    "full_uz": "Lampalar ishlayapti, shuningdek filtr ham.",
    "note": null
  },
  {
    "num": 58,
    "time": "00:04:33,939 --> 00:04:35,980",
    "arabic": "وَالْأَسْمَاكُ تَبْدُو سَعِيدَةً",
    "segs": null,
    "full_uz": "Va baliqlar xursanddek ko'rinadi.",
    "note": null
  },
  {
    "num": 59,
    "time": "00:04:35,980 --> 00:04:39,379",
    "arabic": "وَكَأَنَّهَا لَيْسَتْ أَسْمَاكًا تَبْدُو وُحُوشًا",
    "segs": [
      { "ar": "وَكَأَنَّهَا لَيْسَتْ أَسْمَاكًا", "uz": "ular baliq emas" },
      { "ar": "تَبْدُو وُحُوشًا", "uz": "aksincha, yirtqichlarga o'xshab ko'rinadi" }
    ],
    "full_uz": "Ular baliq emas, aksincha, yirtqichlarga o'xshab ko'rinadi.",
    "note": null
  },
  {
    "num": 60,
    "time": "00:04:39,379 --> 00:04:42,019",
    "arabic": "مِنَ الْجَيِّدِ أَنَّهَا مَحْجُوزَةٌ خَلْفَ الزُّجَاجِ",
    "segs": null,
    "full_uz": "Yaxshiyamki, ular oyna ortida qamalgan.",
    "note": null
  },
  {
    "num": 61,
    "time": "00:04:42,019 --> 00:04:45,399",
    "arabic": "تَمَاسَكِي سَأُنْقِذُكِ فِي الْحَالِ",
    "segs": [
      { "ar": "تَمَاسَكِي", "uz": "chida" },
      { "ar": "سَأُنْقِذُكِ فِي الْحَالِ", "uz": "hozir seni qutqaraman" }
    ],
    "full_uz": "Chida, hozir seni qutqaraman.",
    "note": null
  },
  {
    "num": 62,
    "time": "00:04:45,399 --> 00:04:48,659",
    "arabic": "لَكِنِّي لَا أَمْلِكُ حَقِيبَةَ أَدَوَاتِي",
    "segs": null,
    "full_uz": "Lekin mening asboblar sumkam yo'q.",
    "note": null
  },
  {
    "num": 63,
    "time": "00:04:48,659 --> 00:04:51,180",
    "arabic": "انْظُرْ كَيْفَ تَتَقَدَّمُ بِأَسْنَانِهَا",
    "segs": null,
    "full_uz": "Qara, u tishlari bilan qanday yaqinlashyapti.",
    "note": null
  },
  {
    "num": 64,
    "time": "00:04:51,180 --> 00:04:52,839",
    "arabic": "لَا شَكَّ أَنَّهَا جَائِعَةٌ",
    "segs": null,
    "full_uz": "Shubhasiz, u och qolgan.",
    "note": null
  },
  {
    "num": 65,
    "time": "00:04:52,839 --> 00:04:54,019",
    "arabic": "أَنْتَ مُحِقٌّ إِنَّهَا جَائِعَةٌ",
    "segs": [
      { "ar": "أَنْتَ مُحِقٌّ", "uz": "haqsan" },
      { "ar": "إِنَّهَا جَائِعَةٌ", "uz": "u och" }
    ],
    "full_uz": "Haqsan, u och.",
    "note": null
  },
  {
    "num": 66,
    "time": "00:04:54,019 --> 00:04:55,139",
    "arabic": "نُولِيكْ هَيَّا",
    "segs": null,
    "full_uz": "Nolik, qani!",
    "note": null
  },
  {
    "num": 67,
    "time": "00:05:12,019 --> 00:05:16,859",
    "arabic": "هَذِهِ الْأَسْمَاكُ تُنْكِرُ الْجَمِيلَ",
    "segs": null,
    "full_uz": "Bu baliqlar yaxshilikni unutuvchi ekan.",
    "note": null
  },
  {
    "num": 68,
    "time": "00:05:16,859 --> 00:05:19,060",
    "arabic": "أَصْلَحْنَا لَهَا جِهَازَ التَّرْشِيحِ",
    "segs": null,
    "full_uz": "Biz ularga filtrni tuzatib berdik.",
    "note": null
  },
  {
    "num": 69,
    "time": "00:05:19,060 --> 00:05:21,680",
    "arabic": "وَكُلُّ مَا أَرَادَتْ فِعْلَهُ هُوَ الْتِهَامُنَا",
    "segs": null,
    "full_uz": "Va u faqat bizni yutib yuborishni xohladi.",
    "note": null
  },
  {
    "num": 70,
    "time": "00:05:21,680 --> 00:05:23,759",
    "arabic": "وَأَنَا مَنْ أَنْقَذَكُمَا مِنْهَا",
    "segs": null,
    "full_uz": "Va sizlarni undan qutqargan ham men edim.",
    "note": null
  },
  {
    "num": 71,
    "time": "00:05:23,759 --> 00:05:26,240",
    "arabic": "وَأَنَا مَنْ رَأَى كُلَّ مَا حَدَثَ",
    "segs": null,
    "full_uz": "Va bo'lgan hamma narsani ko'rgan ham men edim.",
    "note": null
  },
  {
    "num": 72,
    "time": "00:05:26,240 --> 00:05:30,039",
    "arabic": "يَا إِلَهِي",
    "segs": null,
    "full_uz": "Voy xudoyim.",
    "note": null
  },
  {
    "num": 73,
    "time": "00:05:30,039 --> 00:05:33,199",
    "arabic": "شُو سَاكَا؟",
    "segs": null,
    "full_uz": "Chu-saka?",
    "note": null
  },
  {
    "num": 74,
    "time": "00:05:33,199 --> 00:05:36,740",
    "arabic": "يَا إِلَهِي أَتَظُنُّونَ إِطْعَامَهَا يُسَاعِدُ؟",
    "segs": [
      { "ar": "يَا إِلَهِي", "uz": "voy xudoyim" },
      { "ar": "أَتَظُنُّونَ إِطْعَامَهَا يُسَاعِدُ", "uz": "uni ovqatlantirish yordam beradi deb o'ylaysizlarmi" }
    ],
    "full_uz": "Voy xudoyim, uni ovqatlantirish yordam beradi deb o'ylaysizlarmi?",
    "note": null
  },
  {
    "num": 75,
    "time": "00:05:36,740 --> 00:05:39,079",
    "arabic": "يُسَاعِدُ إِذَا كَانَ هَذَا الطَّعَامُ لَيْسَ أَنَا",
    "segs": [
      { "ar": "يُسَاعِدُ", "uz": "yordam beradi" },
      { "ar": "إِذَا كَانَ هَذَا الطَّعَامُ لَيْسَ أَنَا", "uz": "agar bu ovqat men bo'lmasam" }
    ],
    "full_uz": "Agar bu ovqat men bo'lmasam, yordam beradi.",
    "note": null
  }
];
if (typeof module !== "undefined" && module.exports) {
  module.exports = lessons;
}
