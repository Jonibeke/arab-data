const lessons = [
    {
  num: 1,
  time: "00:00:04,359 --> 00:00:08,614",
  arabic: "الْفِيكْسِيزُ أَصْغَرُ الْكَائِنَاتِ، مَخْلُوقَاتٌ مُثِيرَةٌ",
  segs: [
    { ar: "الْفِيكْسِيزُ", uz: "Fiksiklar" },
    { ar: "أَصْغَرُ الْكَائِنَاتِ", uz: "eng kichik mavjudotlardir" },
    { ar: "مَخْلُوقَاتٌ مُثِيرَةٌ", uz: "qiziqarli mavjudotlardir" }
  ],
  full_uz: "Fiksiklar eng kichik va qiziqarli mavjudotlardir.",
  note: null
},
{
  num: 2,
  time: "00:00:08,614 --> 00:00:12,197",
  arabic: "مَهْمَا جَلَبْتَ مُكَبِّرَاتٍ، يَصْعُبُ رُؤْيَتُهُمْ",
  segs: [
    { ar: "مَهْمَا جَلَبْتَ مُكَبِّرَاتٍ", uz: "Qancha kattalashtirgich olib kelmang" },
    { ar: "يَصْعُبُ رُؤْيَتُهُمْ", uz: "ularni ko'rish qiyin" }
  ],
  full_uz: "Qancha kattalashtirgich olib kelmang, ularni ko'rish qiyin.",
  note: null
},
{
  num: 3,
  time: "00:00:12,197 --> 00:00:16,967",
  arabic: "صَغِيرَةٌ، أَصْغَرُ مِنْ أَنْ تُرَى، قَدْ تَنْفِي وُجُودَهُمْ",
  segs: [
    { ar: "صَغِيرَةٌ", uz: "Ular juda kichik" },
    { ar: "أَصْغَرُ مِنْ أَنْ تُرَى", uz: "ko'rinmaydigan darajada kichik" },
    { ar: "قَدْ تَنْفِي وُجُودَهُمْ", uz: "hatto ularning mavjudligini inkor qilishing mumkin" }
  ],
  full_uz: "Ular shunchalik kichikki, hatto ularning mavjudligini inkor qilishing mumkin.",
  note: "SRTdagi «تُصغى» OCR xatosi ma'noga mos ravishda «تُرَى» qilib tiklandi."
},
{
  num: 4,
  time: "00:00:16,967 --> 00:00:21,805",
  arabic: "مِنْ أَيْنَ أَتَوْا؟ مَا شَكْلُهُمْ؟ مَنْ يَعْرِفُ سِرَّهُمْ؟",
  segs: [
    { ar: "مِنْ أَيْنَ أَتَوْا؟", uz: "Ular qayerdan kelishgan?" },
    { ar: "مَا شَكْلُهُمْ؟", uz: "Ularning ko'rinishi qanday?" },
    { ar: "مَنْ يَعْرِفُ سِرَّهُمْ؟", uz: "Ularning sirini kim biladi?" }
  ],
  full_uz: "Ular qayerdan kelishgan? Ularning ko'rinishi qanday? Ularning sirini kim biladi?",
  note: null
},
{
  num: 5,
  time: "00:00:21,805 --> 00:00:31,529",
  arabic: "مِنْ أَيْنَ أَتَوْا؟ مَا شَكْلُهُمْ؟ مَنْ يَعْرِفُ سِرَّهُمْ؟",
  segs: [
    { ar: "مِنْ أَيْنَ أَتَوْا؟", uz: "Ular qayerdan kelishgan?" },
    { ar: "مَا شَكْلُهُمْ؟", uz: "Ularning ko'rinishi qanday?" },
    { ar: "مَنْ يَعْرِفُ سِرَّهُمْ؟", uz: "Ularning sirini kim biladi?" }
  ],
  full_uz: "Ular qayerdan kelishgan? Ularning ko'rinishi qanday? Ularning sirini kim biladi?",
  note: null
},
{
  num: 6,
  time: "00:00:33,246 --> 00:00:35,251",
  arabic: "الْبُوصَلَةُ",
  segs: null,
  full_uz: "Kompas.",
  note: null
},
{
  num: 7,
  time: "00:00:35,251 --> 00:00:44,827",
  arabic: "الْجَمِيعُ إِلَى السَّطْحِ! حَاضِرٌ أَيُّهَا الرُّبَّانُ!",
  segs: [
    { ar: "الْجَمِيعُ إِلَى السَّطْحِ!", uz: "Hamma yuqori palubaga!" },
    { ar: "حَاضِرٌ أَيُّهَا الرُّبَّانُ!", uz: "Xo'p bo'ladi, kapitan!" }
  ],
  full_uz: "Hamma yuqori palubaga! Xo'p bo'ladi, kapitan!",
  note: null
},
{
  num: 8,
  time: "00:00:44,827 --> 00:00:51,606",
  arabic: "لَا تُخْفُوا هَذِهِ الْأَخْشَابَ! سِيمْكَا، نُولِيكْ، مَا الَّذِي تَفْعَلَانِهِ؟ نَحْنُ لَسْنَا سِيمْكَا وَنُولِيكْ، نَحْنُ قُرْصَانَانِ!",
  segs: [
    { ar: "لَا تُخْفُوا هَذِهِ الْأَخْشَابَ!", uz: "Bu taxtalarni yashirmang!" },
    { ar: "سِيمْكَا، نُولِيكْ، مَا الَّذِي تَفْعَلَانِهِ؟", uz: "Simka, Nolik, nima qilyapsizlar?" },
    { ar: "نَحْنُ لَسْنَا سِيمْكَا وَنُولِيكْ", uz: "Biz Simka bilan Nolik emasmiz" },
    { ar: "نَحْنُ قُرْصَانَانِ", uz: "biz qaroqchilarmiz" }
  ],
  full_uz: "Bu taxtalarni yashirmang! Simka, Nolik, nima qilyapsizlar? Biz Simka bilan Nolik emasmiz, biz qaroqchilarmiz.",
  note: null
},
{
  num: 9,
  time: "00:00:51,606 --> 00:01:00,012",
  arabic: "شُجْعَانٌ أَيُّهَا الْبَحَّارُ! أَجَلْ، قُرْصَانَانِ! وَالْيَوْمَ سَنُبْحِرُ إِلَى الْبَعِيدِ، هَلْ أَنْتَ مَعَنَا؟ بِلَا تَرَدُّدٍ!",
  segs: [
    { ar: "شُجْعَانٌ أَيُّهَا الْبَحَّارُ!", uz: "Jasur bo'l, dengizchi!" },
    { ar: "أَجَلْ، قُرْصَانَانِ!", uz: "Ha, qaroqchilarmiz!" },
    { ar: "وَالْيَوْمَ سَنُبْحِرُ إِلَى الْبَعِيدِ", uz: "Bugun uzoq safarga suzamiz" },
    { ar: "هَلْ أَنْتَ مَعَنَا؟", uz: "Sen biz bilanmisan?" },
    { ar: "بِلَا تَرَدُّدٍ!", uz: "Albatta!" }
  ],
  full_uz: "Jasur bo'l, dengizchi! Ha, biz qaroqchilarmiz! Bugun uzoq safarga suzamiz. Sen biz bilanmisan? Albatta!",
  note: null
},
{
  num: 10,
  time: "00:01:00,012 --> 00:01:03,407",
  arabic: "مَرَحًا! أَتَقْصِدِينَ لَا؟ لَا نَفْرَحُ؟",
  segs: [
    { ar: "مَرَحًا!", uz: "Yashasin!" },
    { ar: "أَتَقْصِدِينَ لَا؟", uz: "Yo'q demoqchimisan?" },
    { ar: "لَا نَفْرَحُ؟", uz: "Xursand bo'lmaymizmi?" }
  ],
  full_uz: "Yashasin! Yo'q demoqchimisan? Xursand bo'lmaymizmi?",
  note: null
},
{
  num: 11,
  time: "00:01:03,407 --> 00:01:07,692",
  arabic: "أَجَلْ، صَحِيحٌ، لَا يُمْكِنُكَ أَنْ تُبْحِرَ بِلَا اخْتِبَارٍ",
  segs: [
    { ar: "أَجَلْ، صَحِيحٌ", uz: "Ha, to'g'ri" },
    { ar: "لَا يُمْكِنُكَ أَنْ تُبْحِرَ", uz: "suzib ketolmaysan" },
    { ar: "بِلَا اخْتِبَارٍ", uz: "sinovsiz" }
  ],
  full_uz: "Ha, to'g'ri, sinovsiz suzib ketolmaysan.",
  note: null
},
{
  num: 12,
  time: "00:01:07,692 --> 00:01:10,507",
  arabic: "اذْهَبْ وَابْحَثْ عَنْ شَيْءٍ مُمَيَّزٍ",
  segs: [
    { ar: "اذْهَبْ", uz: "Bor" },
    { ar: "وَابْحَثْ", uz: "va qidir" },
    { ar: "عَنْ شَيْءٍ مُمَيَّزٍ", uz: "bir alohida narsani" }
  ],
  full_uz: "Bor va bir alohida narsani qidir.",
  note: null
},
{
  num: 13,
  time: "00:01:10,507 --> 00:01:14,110",
  arabic: "شَيْءٌ لَا يَسْتَطِيعُ أَيُّ بَحَّارٍ دُخُولَ الْبَحْرِ إِلَّا بِهِ",
  segs: [
    { ar: "شَيْءٌ", uz: "Shunday narsa" },
    { ar: "لَا يَسْتَطِيعُ أَيُّ بَحَّارٍ", uz: "hech bir dengizchi qila olmaydigan" },
    { ar: "دُخُولَ الْبَحْرِ", uz: "dengizga chiqishni" },
    { ar: "إِلَّا بِهِ", uz: "usiz" }
  ],
  full_uz: "Shunday bir narsaki, usiz hech bir dengizchi dengizga chiqa olmaydi.",
  note: null
},
{
  num: 14,
  time: "00:01:14,110 --> 00:01:15,767",
  arabic: "سَأَفْعَلُ، لَكِنْ كَيْفَ؟",
  segs: [
    { ar: "سَأَفْعَلُ", uz: "Qilaman" },
    { ar: "لَكِنْ كَيْفَ؟", uz: "ammo qanday?" }
  ],
  full_uz: "Qilaman, ammo qanday?",
  note: null
},
{
  num: 15,
  time: "00:01:15,767 --> 00:01:19,011",
  arabic: "بِالْخَرِيطَةِ، وَهِيَ هُنَاكَ",
  segs: [
    { ar: "بِالْخَرِيطَةِ", uz: "Xarita bilan" },
    { ar: "وَهِيَ هُنَاكَ", uz: "u ana u yerda" }
  ],
  full_uz: "Xarita bilan, u ana u yerda.",
  note: null
},
{
  num: 16,
  time: "00:01:19,011 --> 00:01:25,204",
  arabic: "لَمْ أَرَ خَرِيطَةً بِهَذَا الصِّغَرِ فِي حَيَاتِي",
  segs: [
    { ar: "لَمْ أَرَ", uz: "Men ko'rmaganman" },
    { ar: "خَرِيطَةً بِهَذَا الصِّغَرِ", uz: "bunchalik kichik xaritani" },
    { ar: "فِي حَيَاتِي", uz: "umrimda" }
  ],
  full_uz: "Umrimda bunchalik kichik xaritani ko'rmaganman.",
  note: null
},
{
  num: 17,
  time: "00:01:25,204 --> 00:01:27,249",
  arabic: "لَا تَقُلْ عَنْهَا هَكَذَا",
  segs: [
    { ar: "لَا تَقُلْ", uz: "Bunday dema" },
    { ar: "عَنْهَا هَكَذَا", uz: "u haqida" }
  ],
  full_uz: "U haqida bunday dema.",
  note: null
},
{
  num: 18,
  time: "00:01:27,249 --> 00:01:29,404",
  arabic: "اسْتَغْرَقَ رَسْمُهَا نِصْفَ سَاعَةٍ",
  segs: [
    { ar: "اسْتَغْرَقَ", uz: "Ketdi" },
    { ar: "رَسْمُهَا", uz: "uni chizishga" },
    { ar: "نِصْفَ سَاعَةٍ", uz: "yarim soat" }
  ],
  full_uz: "Uni chizishga yarim soat ketdi.",
  note: null
},
{
  num: 19,
  time: "00:01:29,404 --> 00:01:32,372",
  arabic: "مِنْ مَكَانِ وُقُوفِكَ الْآنَ",
  segs: [
    { ar: "مِنْ مَكَانِ", uz: "Turgan joyingdan" },
    { ar: "وُقُوفِكَ الْآنَ", uz: "hozir" }
  ],
  full_uz: "Hozir turgan joyingdan.",
  note: null
},
{
  num: 20,
  time: "00:01:32,372 --> 00:01:35,647",
  arabic: "تَقْصِدُ مِنْ هُنَا؟",
  segs: [
    { ar: "تَقْصِدُ", uz: "Nazarda tutyapsanmi" },
    { ar: "مِنْ هُنَا؟", uz: "shu yerdan?" }
  ],
  full_uz: "Shu yerdan nazarda tutyapsanmi?",
  note: null
},
{
  num: 21,
  time: "00:01:35,647 --> 00:01:36,756",
  arabic: "هَذَا صَحِيحٌ",
  segs: null,
  full_uz: "Ha, to'g'ri.",
  note: null
},
{
  num: 22,
  time: "00:01:36,756 --> 00:01:39,346",
  arabic: "أَوَّلًا اتَّجِهْ نَحْوَ الشَّمَالِ",
  segs: [
    { ar: "أَوَّلًا", uz: "Avval" },
    { ar: "اتَّجِهْ", uz: "yo'l ol" },
    { ar: "نَحْوَ الشَّمَالِ", uz: "shimol tomonga" }
  ],
  full_uz: "Avval shimol tomonga yo'l ol.",
  note: null
},
{
  num: 23,
  time: "00:01:39,346 --> 00:01:41,456",
  arabic: "حَتَّى تَجِدَ مَكَانًا",
  segs: [
    { ar: "حَتَّى", uz: "to" },
    { ar: "تَجِدَ", uz: "topguningcha" },
    { ar: "مَكَانًا", uz: "bir joyni" }
  ],
  full_uz: "Bir joyni topguningcha davom et.",
  note: null
},
{
  num: 24,
  time: "00:01:41,456 --> 00:01:44,258",
  arabic: "لَحْظَةً، لَكِنْ أَيْنَ الشَّمَالُ؟",
  segs: [
    { ar: "لَحْظَةً", uz: "Bir daqiqa" },
    { ar: "لَكِنْ", uz: "ammo" },
    { ar: "أَيْنَ الشَّمَالُ؟", uz: "shimol qayerda?" }
  ],
  full_uz: "Bir daqiqa, ammo shimol qayerda?",
  note: null
},
{
  num: 25,
  time: "00:01:44,258 --> 00:01:46,278",
  arabic: "فِي اتِّجَاهِ الْقُطْبِ الشَّمَالِيِّ",
  segs: [
    { ar: "فِي اتِّجَاهِ", uz: "tomon" },
    { ar: "الْقُطْبِ الشَّمَالِيِّ", uz: "Shimoliy qutb" }
  ],
  full_uz: "Shimoliy qutb tomon.",
  note: null
},
{
  num: 26,
  time: "00:01:46,278 --> 00:01:48,820",
  arabic: "حَيْثُ الْجَلِيدُ وَالدِّبَبَةُ",
  segs: [
    { ar: "حَيْثُ", uz: "u yerda" },
    { ar: "الْجَلِيدُ", uz: "muzlar" },
    { ar: "وَالدِّبَبَةُ", uz: "va ayiqlar bor" }
  ],
  full_uz: "U yerda muzlar va ayiqlar bor.",
  note: null
},
{
  num: 27,
  time: "00:01:48,820 --> 00:01:51,851",
  arabic: "وَكَيْفَ سَأَعْلَمُ فِي أَيِّ اتِّجَاهٍ الْقُطْبُ الشَّمَالِيُّ؟",
  segs: [
    { ar: "وَكَيْفَ", uz: "Ammo qanday qilib" },
    { ar: "سَأَعْلَمُ", uz: "bilaman" },
    { ar: "فِي أَيِّ اتِّجَاهٍ", uz: "qaysi tomonda ekanini" },
    { ar: "الْقُطْبُ الشَّمَالِيُّ؟", uz: "Shimoliy qutbning?" }
  ],
  full_uz: "Ammo Shimoliy qutb qaysi tomonda ekanini qanday bilaman?",
  note: null
},
{
  num: 28,
  time: "00:01:51,851 --> 00:01:53,283",
  arabic: "بِاسْتِعْمَالِ الْبُوصَلَةِ",
  segs: null,
  full_uz: "Kompas yordamida.",
  note: null
},
{
  num: 29,
  time: "00:01:53,283 --> 00:01:57,760",
  arabic: "الْبُوصَلَةُ هِيَ جِهَازٌ يُسَاعِدُ الْبَحَّارَةَ",
  segs: [
    { ar: "الْبُوصَلَةُ", uz: "Kompas" },
    { ar: "هِيَ جِهَازٌ", uz: "bir qurilmadir" },
    { ar: "يُسَاعِدُ الْبَحَّارَةَ", uz: "dengizchilarga yordam beradigan" }
  ],
  full_uz: "Kompas — dengizchilarga yordam beradigan qurilmadir.",
  note: null
},
{
  num: 30,
  time: "00:01:57,760 --> 00:01:59,623",
  arabic: "عَلَى مَعْرِفَةِ الِاتِّجَاهِ الصَّحِيحِ",
  segs: [
    { ar: "عَلَى مَعْرِفَةِ", uz: "aniqlashga" },
    { ar: "الِاتِّجَاهِ الصَّحِيحِ", uz: "to'g'ri yo'nalishni" }
  ],
  full_uz: "To'g'ri yo'nalishni aniqlashga yordam beradi.",
  note: null
},
{
  num: 31,
  time: "00:01:59,623 --> 00:02:00,936",
  arabic: "الَّذِي يَسِيرُونَ فِيهِ",
  segs: [
    { ar: "الَّذِي", uz: "qaysi" },
    { ar: "يَسِيرُونَ فِيهِ", uz: "ular harakatlanayotgan bo'lsa" }
  ],
  full_uz: "Ular harakatlanayotgan yo'nalishni.",
  note: null
},
{
  num: 32,
  time: "00:02:00,936 --> 00:02:02,731",
  arabic: "سَوَاءٌ فِي الْبَحْرِ أَوِ الْجَوِّ",
  segs: [
    { ar: "سَوَاءٌ", uz: "baribir" },
    { ar: "فِي الْبَحْرِ", uz: "dengizda" },
    { ar: "أَوِ الْجَوِّ", uz: "yoki havoda" }
  ],
  full_uz: "Baribir dengizda yoki havoda.",
  note: null
},
{
  num: 33,
  time: "00:02:02,731 --> 00:02:05,668",
  arabic: "كَوْكَبُنَا يُشْبِهُ مِغْنَاطِيسًا كَبِيرًا",
  segs: [
    { ar: "كَوْكَبُنَا", uz: "Sayyoramiz" },
    { ar: "يُشْبِهُ", uz: "o'xshaydi" },
    { ar: "مِغْنَاطِيسًا كَبِيرًا", uz: "ulkan magnitga" }
  ],
  full_uz: "Sayyoramiz ulkan magnitga o'xshaydi.",
  note: null
},
{
  num: 34,
  time: "00:02:05,668 --> 00:02:06,553",
  arabic: "لَهُ قُطْبَانِ",
  segs: null,
  full_uz: "Uning ikkita qutbi bor.",
  note: null
},
{
  num: 35,
  time: "00:02:06,553 --> 00:02:10,214",
  arabic: "الْقُطْبُ الشَّمَالِيُّ وَالْقُطْبُ الْجَنُوبِيُّ",
  segs: [
    { ar: "الْقُطْبُ الشَّمَالِيُّ", uz: "Shimoliy qutb" },
    { ar: "وَالْقُطْبُ الْجَنُوبِيُّ", uz: "va Janubiy qutb" }
  ],
  full_uz: "Shimoliy qutb va Janubiy qutb.",
  note: null
},
{
  num: 36,
  time: "00:02:10,214 --> 00:02:12,568",
  arabic: "هَذَانِ الْقُطْبَانِ الْمِغْنَاطِيسِيَّانِ",
  segs: [
    { ar: "هَذَانِ", uz: "Bu ikki" },
    { ar: "الْقُطْبَانِ الْمِغْنَاطِيسِيَّانِ", uz: "magnit qutbi" }
  ],
  full_uz: "Bu ikki magnit qutbi.",
  note: null
},
{
  num: 37,
  time: "00:02:12,568 --> 00:02:14,179",
  arabic: "يَجْعَلَانِ إِبْرَةَ الْبُوصَلَةِ",
  segs: [
    { ar: "يَجْعَلَانِ", uz: "majbur qiladi" },
    { ar: "إِبْرَةَ الْبُوصَلَةِ", uz: "kompas ignasini" }
  ],
  full_uz: "Kompas ignasini majbur qiladi.",
  note: null
},
{
  num: 38,
  time: "00:02:14,179 --> 00:02:15,858",
  arabic: "تَتَّجِهُ اتِّجَاهًا صَحِيحًا",
  segs: [
    { ar: "تَتَّجِهُ", uz: "yo'naladi" },
    { ar: "اتِّجَاهًا صَحِيحًا", uz: "to'g'ri tomonga" }
  ],
  full_uz: "U to'g'ri tomonga yo'naladi.",
  note: null
},
{
  num: 39,
  time: "00:02:15,858 --> 00:02:17,176",
  arabic: "تَتَمَغْنَطُ الْإِبْرَةُ",
  segs: [
    { ar: "تَتَمَغْنَطُ", uz: "magnitlanadi" },
    { ar: "الْإِبْرَةُ", uz: "igna" }
  ],
  full_uz: "Igna magnitlanadi.",
  note: null
},
{
  num: 40,
  time: "00:02:17,176 --> 00:02:20,223",
  arabic: "فَتَتَّجِهُ إِحْدَى النِّهَايَتَيْنِ إِلَى الشَّمَالِ دَائِمًا",
  segs: [
    { ar: "فَتَتَّجِهُ", uz: "shunda yo'naladi" },
    { ar: "إِحْدَى النِّهَايَتَيْنِ", uz: "uning bir uchi" },
    { ar: "إِلَى الشَّمَالِ", uz: "shimol tomon" },
    { ar: "دَائِمًا", uz: "doimo" }
  ],
  full_uz: "Shunda uning bir uchi doimo shimol tomonga yo'naladi.",
  note: null
},
{
  num: 41,
  time: "00:02:20,223 --> 00:02:22,572",
  arabic: "وَالْأُخْرَى إِلَى الْجَنُوبِ دَائِمًا",
  segs: [
    { ar: "وَالْأُخْرَى", uz: "ikkinchi uchi esa" },
    { ar: "إِلَى الْجَنُوبِ", uz: "janub tomonga" },
    { ar: "دَائِمًا", uz: "doimo" }
  ],
  full_uz: "Ikkinchi uchi esa doimo janub tomonga yo'naladi.",
  note: null
},
{
  num: 42,
  time: "00:02:22,572 --> 00:02:24,131",
  arabic: "كَمَا تُلَاحِظَانِ هُنَا",
  segs: [
    { ar: "كَمَا تُلَاحِظَانِ", uz: "Ko'rib turganingizdek" },
    { ar: "هُنَا", uz: "shu yerda" }
  ],
  full_uz: "Ko'rib turganingizdek, shu yerda.",
  note: null
},
{
  num: 43,
  time: "00:02:24,131 --> 00:02:27,357",
  arabic: "أَعْلَمُ هَذَا",
  segs: null,
  full_uz: "Buni bilaman.",
  note: null
},
{
  num: 44,
  time: "00:02:27,357 --> 00:02:29,595",
  arabic: "لَكِنْ لَا أَرَى أَيَّ بُوصَلَةٍ هُنَا",
  segs: [
    { ar: "لَكِنْ", uz: "Ammo" },
    { ar: "لَا أَرَى", uz: "ko'rmayapman" },
    { ar: "أَيَّ بُوصَلَةٍ", uz: "hech qanday kompasni" },
    { ar: "هُنَا", uz: "bu yerda" }
  ],
  full_uz: "Ammo bu yerda hech qanday kompasni ko'rmayapman.",
  note: null
},
{
  num: 45,
  time: "00:02:29,595 --> 00:02:31,864",
  arabic: "إِذًا لِنَصْنَعْ وَاحِدَةً بِأَنْفُسِنَا",
  segs: [
    { ar: "إِذًا", uz: "Unda" },
    { ar: "لِنَصْنَعْ", uz: "yasaylik" },
    { ar: "وَاحِدَةً", uz: "bittasini" },
    { ar: "بِأَنْفُسِنَا", uz: "o'zimiz" }
  ],
  full_uz: "Unda bittasini o'zimiz yasaylik.",
  note: null
},
{
  num: 46,
  time: "00:02:31,864 --> 00:02:32,822",
  arabic: "بِمَاذَا؟",
  segs: null,
  full_uz: "Nima bilan?",
  note: null
},
{
  num: 47,
  time: "00:02:32,822 --> 00:02:34,538",
  arabic: "يُمْكِنُنَا اسْتِعْمَالُ إِبْرَةٍ",
  segs: [
    { ar: "يُمْكِنُنَا", uz: "Biz mumkin" },
    { ar: "اسْتِعْمَالُ إِبْرَةٍ", uz: "igna ishlatishimiz" }
  ],
  full_uz: "Biz igna ishlatishimiz mumkin.",
  note: null
},
{
  num: 48,
  time: "00:02:34,538 --> 00:02:36,168",
  arabic: "مَا عَلَيْنَا إِلَّا أَنْ نُمَغْنِطَهَا",
  segs: [
    { ar: "مَا عَلَيْنَا إِلَّا", uz: "Biz faqat" },
    { ar: "أَنْ نُمَغْنِطَهَا", uz: "uni magnitlashimiz kerak" }
  ],
  full_uz: "Biz faqat uni magnitlashimiz kerak.",
  note: null
},
{
  num: 49,
  time: "00:02:36,168 --> 00:02:38,303",
  arabic: "وَكَيْفَ نَجْعَلُهَا تَدُورُ؟",
  segs: [
    { ar: "وَكَيْفَ", uz: "Ammo qanday qilib" },
    { ar: "نَجْعَلُهَا", uz: "uni" },
    { ar: "تَدُورُ؟", uz: "aylantiramiz?" }
  ],
  full_uz: "Ammo uni qanday aylantiramiz?",
  note: null
},
{
  num: 50,
  time: "00:02:38,303 --> 00:02:39,910",
  arabic: "فِي وَعَاءٍ مِنَ الْمَاءِ",
  segs: [
    { ar: "فِي وَعَاءٍ", uz: "Bir idishda" },
    { ar: "مِنَ الْمَاءِ", uz: "suv bilan" }
  ],
  full_uz: "Suv solingan idishda.",
  note: null
},
{
  num: 51,
  time: "00:03:12,519 --> 00:03:13,739",
  arabic: "حَسَنًا، هَذِهِ هِيَ",
  segs: [
    { ar: "حَسَنًا", uz: "Xo'sh" },
    { ar: "هَذِهِ هِيَ", uz: "mana shu" }
  ],
  full_uz: "Xo'sh, mana shu.",
  note: null
},
{
  num: 52,
  time: "00:03:13,739 --> 00:03:17,959",
  arabic: "وَالْآنَ إِحْدَى النِّهَايَتَيْنِ تُشِيرُ إِلَى الشَّمَالِ وَالْأُخْرَى إِلَى الْجَنُوبِ",
  segs: [
    { ar: "وَالْآنَ", uz: "Endi" },
    { ar: "إِحْدَى النِّهَايَتَيْنِ", uz: "uning bir uchi" },
    { ar: "تُشِيرُ إِلَى الشَّمَالِ", uz: "shimolni ko'rsatmoqda" },
    { ar: "وَالْأُخْرَى إِلَى الْجَنُوبِ", uz: "ikkinchi uchi esa janubni" }
  ],
  full_uz: "Endi uning bir uchi shimolni, ikkinchi uchi esa janubni ko'rsatmoqda.",
  note: null
},
{
  num: 53,
  time: "00:03:17,959 --> 00:03:19,819",
  arabic: "لَكِنْ أَيُّهُمَا الشَّمَالُ؟",
  segs: [
    { ar: "لَكِنْ", uz: "Ammo" },
    { ar: "أَيُّهُمَا", uz: "qaysi biri" },
    { ar: "الشَّمَالُ؟", uz: "shimol?" }
  ],
  full_uz: "Ammo qaysi biri shimol?",
  note: null
},
{
  num: 54,
  time: "00:03:19,819 --> 00:03:21,719",
  arabic: "حَسَنًا، أَرَى هُنَا نَافِذَةً",
  segs: [
    { ar: "حَسَنًا", uz: "Xo'sh" },
    { ar: "أَرَى هُنَا", uz: "bu yerda ko'ryapman" },
    { ar: "نَافِذَةً", uz: "bir derazani" }
  ],
  full_uz: "Xo'sh, bu yerda bir derazani ko'ryapman.",
  note: null
},
{
  num: 55,
  time: "00:03:21,719 --> 00:03:23,759",
  arabic: "لَنْ يَكُونَ هَذَا الِاتِّجَاهُ الصَّحِيحُ",
  segs: [
    { ar: "لَنْ يَكُونَ", uz: "Bu bo'lmaydi" },
    { ar: "هَذَا الِاتِّجَاهُ الصَّحِيحُ", uz: "to'g'ri yo'nalish" }
  ],
  full_uz: "Bu to'g'ri yo'nalish bo'lmaydi.",
  note: null
},
{
  num: 56,
  time: "00:03:23,759 --> 00:03:25,359",
  arabic: "إِذًا فَالشَّمَالُ مِنْ هُنَا",
  segs: [
    { ar: "إِذًا", uz: "Unda" },
    { ar: "فَالشَّمَالُ", uz: "shimol" },
    { ar: "مِنْ هُنَا", uz: "shu tomonda" }
  ],
  full_uz: "Unda shimol shu tomonda.",
  note: null
},
{
  num: 57,
  time: "00:03:25,359 --> 00:03:28,280",
  arabic: "لَقَدْ بَدَأَ هَذَا الْبَحَّارُ الصَّغِيرُ يُعْجِبُنِي",
  segs: [
    { ar: "لَقَدْ بَدَأَ", uz: "Boshladi" },
    { ar: "هَذَا الْبَحَّارُ الصَّغِيرُ", uz: "bu kichkina dengizchi" },
    { ar: "يُعْجِبُنِي", uz: "menga yoqishni" }
  ],
  full_uz: "Bu kichkina dengizchi menga yoqa boshladi.",
  note: null
},
{
  num: 58,
  time: "00:03:28,280 --> 00:03:30,540",
  arabic: "وَهَلْ دَعَوْتَنِي بِالصَّغِيرِ؟",
  segs: [
    { ar: "وَهَلْ", uz: "Nima" },
    { ar: "دَعَوْتَنِي", uz: "meni atadingmi" },
    { ar: "بِالصَّغِيرِ؟", uz: "kichkina deb?" }
  ],
  full_uz: "Nima, meni «kichkina» deb atadingmi?",
  note: null
},
{
  num: 59,
  time: "00:03:30,540 --> 00:03:33,460",
  arabic: "لَا، إِنَّهَا طَرِيقَةُ الْقَرَاصِنَةِ فِي الْكَلَامِ",
  segs: [
    { ar: "لَا", uz: "Yo'q" },
    { ar: "إِنَّهَا", uz: "bu" },
    { ar: "طَرِيقَةُ الْقَرَاصِنَةِ", uz: "qaroqchilarning usuli" },
    { ar: "فِي الْكَلَامِ", uz: "gapirishda" }
  ],
  full_uz: "Yo'q, bu qaroqchilarning gapirish usuli.",
  note: null
},
{
  num: 60,
  time: "00:03:33,460 --> 00:03:35,580",
  arabic: "حَسَنًا، إِذًا إِلَى الشَّمَالِ",
  segs: [
    { ar: "حَسَنًا", uz: "Mayli" },
    { ar: "إِذًا", uz: "unda" },
    { ar: "إِلَى الشَّمَالِ", uz: "shimol tomonga" }
  ],
  full_uz: "Mayli, unda shimol tomonga.",
  note: null
},
{
  num: 61,
  time: "00:03:35,580 --> 00:03:41,380",
  arabic: "أَوَّلًا اذْهَبْ إِلَى الشَّمَالِ حَتَّى تَرَى وَحْشًا نَائِمًا",
  segs: [
    { ar: "أَوَّلًا", uz: "Avval" },
    { ar: "اذْهَبْ إِلَى الشَّمَالِ", uz: "shimol tomonga bor" },
    { ar: "حَتَّى تَرَى", uz: "to" },
    { ar: "وَحْشًا نَائِمًا", uz: "uxlayotgan mahluqni ko'rguningcha" }
  ],
  full_uz: "Avval shimol tomonga bor, uxlayotgan mahluqni ko'rguningcha.",
  note: null
},
{
  num: 62,
  time: "00:03:41,380 --> 00:03:45,740",
  arabic: "يَا صَدِيقِي، أَرَى وَحْشًا فِي الْأُفُقِ، دَعْهُ يَفْعَلْهَا وَحْدَهُ",
  segs: [
    { ar: "يَا صَدِيقِي", uz: "Do'stim" },
    { ar: "أَرَى وَحْشًا", uz: "mahluqni ko'ryapman" },
    { ar: "فِي الْأُفُقِ", uz: "ufqda" },
    { ar: "دَعْهُ يَفْعَلْهَا وَحْدَهُ", uz: "o'zi bajarsin" }
  ],
  full_uz: "Do'stim, ufqda bir mahluqni ko'ryapman, o'zi bajarsin.",
  note: null
},
{
  num: 63,
  time: "00:03:45,740 --> 00:03:52,440",
  arabic: "وَالْآنَ اسْتَدِرْ إِلَى الْيَسَارِ وَامْشِ ثَلَاثَمِائَةَ خُطْوَةٍ",
  segs: [
    { ar: "وَالْآنَ", uz: "Endi" },
    { ar: "اسْتَدِرْ إِلَى الْيَسَارِ", uz: "chapga buril" },
    { ar: "وَامْشِ", uz: "va yur" },
    { ar: "ثَلَاثَمِائَةَ خُطْوَةٍ", uz: "uch yuz qadam" }
  ],
  full_uz: "Endi chapga buril va uch yuz qadam yur.",
  note: null
},
{
  num: 64,
  time: "00:03:52,440 --> 00:03:53,400",
  arabic: "ثَلَاثَمِائَةً؟",
  segs: null,
  full_uz: "Uch yuzta?",
  note: null
},
{
  num: 65,
  time: "00:03:53,400 --> 00:03:55,140",
  arabic: "نَعَمْ، عَدَدْتُهَا بِنَفْسِي",
  segs: [
    { ar: "نَعَمْ", uz: "Ha" },
    { ar: "عَدَدْتُهَا", uz: "o'zim sanadim" },
    { ar: "بِنَفْسِي", uz: "shaxsan" }
  ],
  full_uz: "Ha, uni o'zim sanadim.",
  note: null
},
{
  num: 66,
  time: "00:03:55,140 --> 00:03:58,759",
  arabic: "آهْ، حَسَنًا، هَذَا يَعْنِي أَنَّنِي سَأَمْشِي",
  segs: [
    { ar: "آهْ، حَسَنًا", uz: "Ha, mayli" },
    { ar: "هَذَا يَعْنِي", uz: "demak" },
    { ar: "أَنَّنِي سَأَمْشِي", uz: "men yuraman" }
  ],
  full_uz: "Ha, mayli, demak men yuraman.",
  note: null
},
{
  num: 67,
  time: "00:03:58,759 --> 00:04:02,199",
  arabic: "وَاحِدٌ، اثْنَانِ، ثَلَاثَةٌ",
  segs: [
    { ar: "وَاحِدٌ", uz: "bir" },
    { ar: "اثْنَانِ", uz: "ikki" },
    { ar: "ثَلَاثَةٌ", uz: "uch" }
  ],
  full_uz: "Bir, ikki, uch.",
  note: null
},
{
  num: 68,
  time: "00:04:02,199 --> 00:04:07,919",
  arabic: "وَالْآنَ إِلَى الْأَمَامِ مُبَاشَرَةً حَتَّى تَصِلَ إِلَى الشَّجَرَةِ الْعِمْلَاقَةِ",
  segs: [
    { ar: "وَالْآنَ", uz: "Endi" },
    { ar: "إِلَى الْأَمَامِ مُبَاشَرَةً", uz: "to'g'ri oldinga yur" },
    { ar: "حَتَّى تَصِلَ", uz: "to" },
    { ar: "إِلَى الشَّجَرَةِ الْعِمْلَاقَةِ", uz: "ulkan daraxtgacha" }
  ],
  full_uz: "Endi to'g'ri oldinga yur, ulkan daraxtgacha.",
  note: null
},
{
  num: 69,
  time: "00:04:07,919 --> 00:04:12,139",
  arabic: "هَهْ، أَتُسَمِّي هَذِهِ شَجَرَةً؟",
  segs: [
    { ar: "هَهْ", uz: "Ha!" },
    { ar: "أَتُسَمِّي", uz: "Shuni ataysanmi" },
    { ar: "هَذِهِ شَجَرَةً؟", uz: "daraxt deb?" }
  ],
  full_uz: "Ha! Shuni daraxt deb ataysanmi?",
  note: null
},
{
  num: 70,
  time: "00:04:12,139 --> 00:04:17,319",
  arabic: "وَاوْ، مُذْهِلٌ",
  segs: null,
  full_uz: "Voy, ajoyib!",
  note: null
},
{
  num: 71,
  time: "00:04:17,319 --> 00:04:21,039",
  arabic: "لَا أُصَدِّقُ عَيْنَيَّ، بُوصَلَةُ سَفِينَةٍ حَقِيقِيَّةٍ",
  segs: [
    { ar: "لَا أُصَدِّقُ", uz: "Ishonolmayapman" },
    { ar: "عَيْنَيَّ", uz: "ko'zlarimga" },
    { ar: "بُوصَلَةُ سَفِينَةٍ", uz: "kema kompasi" },
    { ar: "حَقِيقِيَّةٍ", uz: "haqiqiy" }
  ],
  full_uz: "Ko'zlarimga ishonolmayapman, bu haqiqiy kema kompasi!",
  note: null
},
{
  num: 72,
  time: "00:04:21,039 --> 00:04:23,219",
  arabic: "إِنَّهَا تُدْعَى أَيْضًا بِالْبُوصَلَةِ الْبَحْرِيَّةِ",
  segs: [
    { ar: "إِنَّهَا تُدْعَى", uz: "U deyiladi" },
    { ar: "أَيْضًا", uz: "yana" },
    { ar: "بِالْبُوصَلَةِ الْبَحْرِيَّةِ", uz: "dengiz kompasi" }
  ],
  full_uz: "U yana dengiz kompasi deb ham ataladi.",
  note: null
},
{
  num: 73,
  time: "00:04:23,219 --> 00:04:31,579",
  arabic: "كَانَ اخْتِرَاعُ أَوَّلِ بُوصَلَةٍ قَبْلَ أَكْثَرَ مِنْ أَلْفِ سَنَةٍ فِي الصِّينِ الْقَدِيمَةِ",
  segs: [
    { ar: "كَانَ اخْتِرَاعُ", uz: "Ixtiro qilingan" },
    { ar: "أَوَّلِ بُوصَلَةٍ", uz: "birinchi kompas" },
    { ar: "قَبْلَ أَكْثَرَ مِنْ أَلْفِ سَنَةٍ", uz: "ming yildan ham oldin" },
    { ar: "فِي الصِّينِ الْقَدِيمَةِ", uz: "qadimgi Xitoyda" }
  ],
  full_uz: "Birinchi kompas ming yildan ham oldin qadimgi Xitoyda ixtiro qilingan.",
  note: null
},
{
  num: 74,
  time: "00:04:31,579 --> 00:04:35,419",
  arabic: "وَبِمُسَاعَدَتِهَا اسْتَطَاعَ الصِّينِيُّونَ الْقُدَمَاءُ السَّفَرَ فِي الصَّحْرَاءِ",
  segs: [
    { ar: "وَبِمُسَاعَدَتِهَا", uz: "Uning yordamida" },
    { ar: "اسْتَطَاعَ الصِّينِيُّونَ الْقُدَمَاءُ", uz: "qadimgi xitoyliklar muvaffaq bo'lishgan" },
    { ar: "السَّفَرَ فِي الصَّحْرَاءِ", uz: "sahroda sayohat qilishga" }
  ],
  full_uz: "Uning yordamida qadimgi xitoyliklar sahroda sayohat qila olishgan.",
  note: null
},
{
  num: 75,
  time: "00:04:35,419 --> 00:04:38,839",
  arabic: "وَبَعْدَ مِائَتَيْ سَنَةٍ ظَهَرَتِ الْبُوصَلَةُ فِي أُورُوبَّا",
  segs: [
    { ar: "وَبَعْدَ مِائَتَيْ سَنَةٍ", uz: "Ikki yuz yildan keyin" },
    { ar: "ظَهَرَتِ الْبُوصَلَةُ", uz: "kompas paydo bo'ldi" },
    { ar: "فِي أُورُوبَّا", uz: "Yevropada" }
  ],
  full_uz: "Ikki yuz yildan keyin kompas Yevropada paydo bo'ldi.",
  note: null
},
{
  num: 76,
  time: "00:04:38,839 --> 00:04:43,699",
  arabic: "لَا أَحَدَ يَعْلَمُ مَا إِنْ كَانَ الْأُورُوبِّيُّونَ اخْتَرَعُوهَا بِأَنْفُسِهِمْ أَوْ أَخَذُوهَا مِنَ الصِّينِ",
  segs: [
    { ar: "لَا أَحَدَ يَعْلَمُ", uz: "Hech kim bilmaydi" },
    { ar: "مَا إِنْ كَانَ الْأُورُوبِّيُّونَ اخْتَرَعُوهَا", uz: "yevropaliklar uni o'zlari ixtiro qilganmi" },
    { ar: "بِأَنْفُسِهِمْ", uz: "o'zlari" },
    { ar: "أَوْ أَخَذُوهَا مِنَ الصِّينِ", uz: "yoki Xitoydan olganmi" }
  ],
  full_uz: "Hech kim bilmaydi, yevropaliklar uni o'zlari ixtiro qilganmi yoki Xitoydan olganmi.",
  note: null
},
{
  num: 77,
  time: "00:04:43,699 --> 00:04:51,099",
  arabic: "لَكِنَّ الْأَكِيدَ يَا أَعِزَّائِي أَنَّ الْفِيكْسِيزَ يَتَذَكَّرُونَ شَكْلَ الْبُوصَلَاتِ الْأُولَى فِي التَّارِيخِ",
  segs: [
    { ar: "لَكِنَّ الْأَكِيدَ", uz: "Ammo aniq narsa shuki" },
    { ar: "يَا أَعِزَّائِي", uz: "azizlarim" },
    { ar: "أَنَّ الْفِيكْسِيزَ", uz: "Fiksiklar" },
    { ar: "يَتَذَكَّرُونَ شَكْلَ الْبُوصَلَاتِ الْأُولَى فِي التَّارِيخِ", uz: "tarixdagi ilk kompaslarning ko'rinishini eslab qolishgan" }
  ],
  full_uz: "Ammo aniq narsa shuki, azizlarim, Fiksiklar tarixdagi ilk kompaslarning ko'rinishini eslab qolishgan.",
  note: null
},
{
  num: 78,
  time: "00:04:51,099 --> 00:04:57,600",
  arabic: "وَقَدْ كَانَتْ أَوَّلُ بُوصَلَةٍ مَصْنُوعَةً مِنْ إِبْرَةٍ مُمَغْنَطَةٍ عَلَى جِسْمٍ طَافٍ فِي وِعَاءٍ فِيهِ مَاءٌ",
  segs: [
    { ar: "وَقَدْ كَانَتْ أَوَّلُ بُوصَلَةٍ", uz: "Birinchi kompas esa" },
    { ar: "مَصْنُوعَةً مِنْ إِبْرَةٍ مُمَغْنَطَةٍ", uz: "magnitlangan ignadan yasalgan" },
    { ar: "عَلَى جِسْمٍ طَافٍ", uz: "suzuvchi jism ustiga qo'yilgan" },
    { ar: "فِي وِعَاءٍ فِيهِ مَاءٌ", uz: "suvli idishda" }
  ],
  full_uz: "Birinchi kompas suvli idishda suzuvchi jism ustiga qo'yilgan magnitlangan ignadan yasalgan edi.",
  note: null
},
{
  num: 79,
  time: "00:04:57,600 --> 00:05:01,860",
  arabic: "ثُمَّ وُضِعَتِ الْإِبْرَةُ عَلَى رَأْسِ مِسْمَارٍ يَسْمَحُ لَهَا بِالدَّوَرَانِ بِحُرِّيَّةٍ",
  segs: [
    { ar: "ثُمَّ وُضِعَتِ الْإِبْرَةُ", uz: "Keyin igna joylashtirilgan" },
    { ar: "عَلَى رَأْسِ مِسْمَارٍ", uz: "mixning uchiga" },
    { ar: "يَسْمَحُ لَهَا", uz: "unga imkon beradigan" },
    { ar: "بِالدَّوَرَانِ بِحُرِّيَّةٍ", uz: "erkin aylanishiga" }
  ],
  full_uz: "Keyin igna mixning uchiga qo'yilib, erkin aylanishiga imkon berilgan.",
  note: null
},
{
  num: 80,
  time: "00:05:01,860 --> 00:05:05,000",
  arabic: "وَلِأَنَّ إِبْرَةَ الْبُوصَلَةِ تُشِيرُ دَوْمًا إِلَى الشَّمَالِ",
  segs: [
    { ar: "وَلِأَنَّ", uz: "Chunki" },
    { ar: "إِبْرَةَ الْبُوصَلَةِ", uz: "kompas ignasi" },
    { ar: "تُشِيرُ دَوْمًا", uz: "doimo ko'rsatadi" },
    { ar: "إِلَى الشَّمَالِ", uz: "shimolni" }
  ],
  full_uz: "Chunki kompas ignasi doimo shimolni ko'rsatadi.",
  note: null
},
{
  num: 81,
  time: "00:05:05,000 --> 00:05:09,300",
  arabic: "يَسْتَطِيعُ الْبَحَّارُ بِسُهُولَةٍ أَنْ يَعْلَمَ إِلَى أَيِّ اتِّجَاهٍ يُدِيرُ سَفِينَتَهُ",
  segs: [
    { ar: "يَسْتَطِيعُ الْبَحَّارُ", uz: "Dengizchi osonlik bilan bilishi mumkin" },
    { ar: "إِلَى أَيِّ اتِّجَاهٍ", uz: "qaysi tomonga" },
    { ar: "يُدِيرُ سَفِينَتَهُ", uz: "kemasini boshqarishini" }
  ],
  full_uz: "Dengizchi kemasini qaysi tomonga boshqarishini osonlik bilan bilishi mumkin.",
  note: null
},
{
  num: 82,
  time: "00:05:09,300 --> 00:05:12,920",
  arabic: "إِذَا أَرَادَ الذَّهَابَ إِلَى الشَّمَالِ يَتْبَعُ الْإِبْرَةَ إِلَى الشَّمَالِ",
  segs: [
    { ar: "إِذَا أَرَادَ الذَّهَابَ إِلَى الشَّمَالِ", uz: "Agar shimolga bormoqchi bo'lsa" },
    { ar: "يَتْبَعُ الْإِبْرَةَ", uz: "ignaga ergashadi" },
    { ar: "إِلَى الشَّمَالِ", uz: "shimol tomonga" }
  ],
  full_uz: "Agar shimolga bormoqchi bo'lsa, igna ko'rsatgan shimol tomonga ergashadi.",
  note: null
},
{
  num: 83,
  time: "00:05:12,920 --> 00:05:16,260",
  arabic: "وَإِنْ أَرَادَ الِاتِّجَاهَ جَنُوبًا ذَهَبَ فِي الِاتِّجَاهِ الْآخَرِ",
  segs: [
    { ar: "وَإِنْ أَرَادَ الِاتِّجَاهَ جَنُوبًا", uz: "Agar janubga bormoqchi bo'lsa" },
    { ar: "ذَهَبَ", uz: "boradi" },
    { ar: "فِي الِاتِّجَاهِ الْآخَرِ", uz: "qarama-qarshi tomonga" }
  ],
  full_uz: "Agar janubga bormoqchi bo'lsa, qarama-qarshi tomonga boradi.",
  note: null
},
{
  num: 84,
  time: "00:05:16,260 --> 00:05:20,900",
  arabic: "أَحْضَرَهَا أَبُوكَ مَعَهُ بِالْأَمْسِ مَسَاءً مِنْ عَمَلِهِ",
  segs: [
    { ar: "أَحْضَرَهَا أَبُوكَ", uz: "Otang uni olib kelgan" },
    { ar: "مَعَهُ بِالْأَمْسِ مَسَاءً", uz: "kecha kechqurun o'zi bilan" },
    { ar: "مِنْ عَمَلِهِ", uz: "ishidan" }
  ],
  full_uz: "Otang uni kecha kechqurun ishidan o'zi bilan olib kelgan.",
  note: null
},
{
  num: 85,
  time: "00:05:20,900 --> 00:05:22,479",
  arabic: "وَقَدْ كُنْتَ نَائِمًا",
  segs: null,
  full_uz: "Sen esa uxlayotgan eding.",
  note: null
},
{
  num: 86,
  time: "00:05:22,479 --> 00:05:25,599",
  arabic: "لَحْظَةً، أُرِيدُ أَنْ أَتَحَقَّقَ شَيْئًا",
  segs: [
    { ar: "لَحْظَةً", uz: "Bir daqiqa" },
    { ar: "أُرِيدُ أَنْ أَتَحَقَّقَ", uz: "tekshirib ko'rmoqchiman" },
    { ar: "شَيْئًا", uz: "bir narsani" }
  ],
  full_uz: "Bir daqiqa, bir narsani tekshirib ko'rmoqchiman.",
  note: null
},
{
  num: 87,
  time: "00:05:25,599 --> 00:05:26,399",
  arabic: "مَا الْأَمْرُ؟",
  segs: null,
  full_uz: "Nima bo'ldi?",
  note: null
},
{
  num: 88,
  time: "00:05:26,399 --> 00:05:35,479",
  arabic: "أَجَلْ، مُتَطَابِقَتَانِ",
  segs: null,
  full_uz: "Ha, ikkalasi ham aynan bir xil.",
  note: null
},
{
  num: 89,
  time: "00:05:35,479 --> 00:05:37,639",
  arabic: "بِلَا رَيْبٍ مُتَطَابِقَتَانِ",
  segs: [
    { ar: "بِلَا رَيْبٍ", uz: "Shubhasiz" },
    { ar: "مُتَطَابِقَتَانِ", uz: "ikkalasi ham aynan bir xil" }
  ],
  full_uz: "Shubhasiz, ikkalasi ham aynan bir xil.",
  note: null
},
{
  num: 90,
  time: "00:05:37,639 --> 00:05:39,599",
  arabic: "وَإِلَّا لَمَا وَصَلْتُ إِلَى هُنَا",
  segs: [
    { ar: "وَإِلَّا", uz: "Aks holda" },
    { ar: "لَمَا وَصَلْتَ إِلَى هُنَا", uz: "bu yerga yetib kelolmasding" }
  ],
  full_uz: "Aks holda bu yerga yetib kelolmasding.",
  note: null
},
{
  num: 91,
  time: "00:05:39,599 --> 00:05:42,319",
  arabic: "لَقَدِ انْتَهَى عَمَلُ الْإِبْرَةِ، سَأُعِيدُهَا",
  segs: [
    { ar: "لَقَدِ انْتَهَى عَمَلُ الْإِبْرَةِ", uz: "Ignaning vazifasi tugadi" },
    { ar: "سَأُعِيدُهَا", uz: "uni joyiga qaytaraman" }
  ],
  full_uz: "Ignaning vazifasi tugadi, uni joyiga qaytaraman.",
  note: null
},
{
  num: 92,
  time: "00:05:42,319 --> 00:05:44,699",
  arabic: "أَوَّلًا امْشِ أَلْفَ خُطْوَةٍ جَنُوبًا",
  segs: [
    { ar: "أَوَّلًا", uz: "Avval" },
    { ar: "امْشِ", uz: "yur" },
    { ar: "أَلْفَ خُطْوَةٍ", uz: "ming qadam" },
    { ar: "جَنُوبًا", uz: "janub tomonga" }
  ],
  full_uz: "Avval janub tomonga ming qadam yur.",
  note: null
},
{
  num: 93,
  time: "00:05:44,699 --> 00:05:46,120",
  arabic: "شُكْرًا، حَسَبَ خُطُوَاتِكَ",
  segs: [
    { ar: "شُكْرًا", uz: "Rahmat" },
    { ar: "حَسَبَ خُطُوَاتِكَ", uz: "qadamlaring bo'yicha" }
  ],
  full_uz: "Rahmat, qadamlaring bo'yicha.",
  note: null
},
];
if (typeof module !== "undefined" && module.exports) {
  module.exports = lessons;
}