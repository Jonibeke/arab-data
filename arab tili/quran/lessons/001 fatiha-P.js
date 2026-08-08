const lessons = [
{
  num: 1,
  arabic: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ (1)",
  segs: [
    { ar: "بِسْمِ اللَّهِ", uz: "Allohning nomi bilan" },
    { ar: "الرَّحْمَٰنِ", uz: "Mehribon" },
    { ar: "الرَّحِيمِ", uz: "Rahmli" }
  ],
  full_uz: "Mehribon va Rahmli Allohning nomi bilan.",
  note: null
},
{
  num: 2,
  arabic: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ (2)",
  segs: [
    { ar: "الْحَمْدُ لِلَّهِ", uz: "barcha hamd Allohgadir" },
    { ar: "رَبِّ الْعَالَمِينَ", uz: "olamlarning Parvardigori" }
  ],
  full_uz: "Barcha hamd olamlarning Parvardigori bo'lgan Allohgadir.",
  note: null
},
{
  num: 3,
  arabic: "الرَّحْمَٰنِ الرَّحِيمِ (3)",
  segs: [
    { ar: "الرَّحْمَٰنِ", uz: "Mehribon" },
    { ar: "الرَّحِيمِ", uz: "Rahmli" }
  ],
  full_uz: "Mehribon va Rahmli.",
  note: null
},
{
  num: 4,
  arabic: "مَالِكِ يَوْمِ الدِّينِ (4)",
  segs: [
    { ar: "مَالِكِ", uz: "egasi" },
    { ar: "يَوْمِ الدِّينِ", uz: "Jazo kunining" }
  ],
  full_uz: "Jazo kunining Egasi.",
  note: null
},
{
  num: 5,
  arabic: "إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ (5)",
  segs: [
    { ar: "إِيَّاكَ", uz: "faqat Seni" },
    { ar: "نَعْبُدُ", uz: "ibodat qilamiz" },
    { ar: "وَإِيَّاكَ", uz: "va faqat Sendan" },
    { ar: "نَسْتَعِينُ", uz: "yordam so'raymiz" }
  ],
  full_uz: "Faqat Sengagina ibodat qilamiz va faqat Sendangina yordam so'raymiz.",
  note: null
},
{
  num: 6,
  arabic: "اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ (6)",
  segs: [
    { ar: "اهْدِنَا", uz: "bizni hidoyat qil" },
    { ar: "الصِّرَاطَ", uz: "yo'lga" },
    { ar: "الْمُسْتَقِيمَ", uz: "to'g'ri, og'magan" }
  ],
  full_uz: "Bizni to'g'ri yo'lga hidoyat qil.",
  note: null
},
{
  num: 7,
  arabic: "صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ (7)",
  segs: [
    { ar: "صِرَاطَ الَّذِينَ", uz: "o'shalarning yo'liga" },
    { ar: "أَنْعَمْتَ عَلَيْهِمْ", uz: "ularga ne'mat ato etding" },
    { ar: "غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ", uz: "ular ustiga g'azab qilinganlar emas" },
    { ar: "وَلَا الضَّالِّينَ", uz: "hamda adashganlar emas" }
  ],
  full_uz: "Ularga ne'mat ato etgan zotlarning yo'liga. G'azabga uchraganlarning ham, adashganlarning ham yo'liga emas.",
  note: null
}
];

if (typeof module !== "undefined" && module.exports) {
  module.exports = lessons;
}