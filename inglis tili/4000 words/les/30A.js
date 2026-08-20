const lessons = [
  {"num":1,"time":"00:00:00,000 --> 00:00:02,899","english":"Cats and Secrets","transcription":"kæts ænd ˈsiːkrəts","parts":[["Cats","Mushuklar"],["and Secrets","va sirlar"]],"uzbekFull":"Mushuklar va sirlar.","note":"cat — mushuk; secret — sir."},

  {"num":2,"time":"00:00:02,899 --> 00:00:06,259","english":"In English, there is a common idiom,","transcription":"ɪn ˈɪŋɡlɪʃ ðer ɪz ə ˈkɑːmən ˈɪdiəm","parts":[["In English,","Ingliz tilida,"],["there is","bor"],["a common idiom,","keng tarqalgan ibora,"]],"uzbekFull":"Ingliz tilida keng tarqalgan bir ibora bor:","note":"common — keng tarqalgan, odatiy; idiom — ibora, idioma; there is — bor."},

  {"num":3,"time":"00:00:06,799 --> 00:00:08,500","english":"let the cat out of the bag.","transcription":"let ðə kæt aʊt əv ðə bæɡ","parts":[["let the cat out","mushukni chiqarib yubormoq"],["of the bag.","xaltadan."]],"uzbekFull":"Mushukni xaltadan chiqarib yubormoq.","note":"let ... out — ...ni chiqarib yubormoq; bag — xalta. Idiomatik ma’nosi: sirni oshkor qilmoq."},

  {"num":4,"time":"00:00:09,179 --> 00:00:10,259","english":"It means to tell a secret.","transcription":"ɪt miːnz tə tel ə ˈsiːkrət","parts":[["It means","Bu anglatadi"],["to tell a secret.","sirni aytishni."]],"uzbekFull":"Bu sirni aytish, ya’ni sirni oshkor qilish degan ma’noni anglatadi.","note":"mean — anglatmoq; tell a secret — sirni aytmoq, sirni oshkor qilmoq."},

  {"num":5,"time":"00:00:11,160 --> 00:00:12,820","english":"But where did this idiom start?","transcription":"bət wer dɪd ðɪs ˈɪdiəm stɑːrt","parts":[["But where","Ammo qayerda"],["did this idiom start?","bu ibora boshlangan?"]],"uzbekFull":"Ammo bu ibora qayerda paydo bo‘lgan?","note":"where did ...? — ... qayerda bo‘lgan?; start — boshlanmoq, paydo bo‘lmoq."},

  {"num":6,"time":"00:00:13,480 --> 00:00:15,220","english":"It came from a section of England.","transcription":"ɪt keɪm frəm ə ˈsekʃən əv ˈɪŋɡlənd","parts":[["It came from","U ...dan kelib chiqqan"],["a section of England.","Angliyaning bir hududidan."]],"uzbekFull":"U Angliyaning bir hududidan kelib chiqqan.","note":"come from — ...dan kelib chiqmoq; section — qism, hudud."},

  {"num":7,"time":"00:00:16,019 --> 00:00:18,879","english":"Long ago, people there went from town to town","transcription":"lɔːŋ əˈɡoʊ ˈpiːpəl ðer went frəm taʊn tə taʊn","parts":[["Long ago,","Qadimda,"],["people there","u yerdagi odamlar"],["went from town to town","shahardan shaharga borishardi"]],"uzbekFull":"Qadimda u yerdagi odamlar shahardan shaharga borishardi.","note":"long ago — qadimda, ancha oldin; from town to town — shahardan shaharga."},

  {"num":8,"time":"00:00:18,879 --> 00:00:22,160","english":"to sell things like vegetables, clothes and pigs.","transcription":"tə sel θɪŋz laɪk ˈvedʒtəbəlz kloʊðz ænd pɪɡz","parts":[["to sell things","narsalarni sotish uchun"],["like vegetables,","masalan, sabzavotlar,"],["clothes and pigs.","kiyimlar va cho‘chqalar."]],"uzbekFull":"Sabzavotlar, kiyimlar va cho‘chqalar kabi narsalarni sotish uchun.","note":"sell — sotmoq; things like — ... kabi narsalar; vegetables — sabzavotlar; clothes — kiyimlar."},

  {"num":9,"time":"00:00:22,760 --> 00:00:24,500","english":"They had strong beliefs about honesty.","transcription":"ðeɪ hæd strɔːŋ bɪˈliːfs əˈbaʊt ˈɑːnəsti","parts":[["They had","Ularda bor edi"],["strong beliefs","qat’iy e’tiqodlar"],["about honesty.","halollik haqida."]],"uzbekFull":"Ularning halollik haqida qat’iy qarashlari bor edi.","note":"belief — e’tiqod, qarash; strong belief — qat’iy ishonch; honesty — halollik."},

  {"num":10,"time":"00:00:25,420 --> 00:00:26,519","english":"They didn't like lying.","transcription":"ðeɪ ˈdɪdənt laɪk ˈlaɪɪŋ","parts":[["They didn't like","Ular yoqtirishmasdi"],["lying.","yolg‘on gapirishni."]],"uzbekFull":"Ular yolg‘on gapirishni yoqtirishmasdi.","note":"lie — yolg‘on gapirmoq; lying — yolg‘on gapirish; didn't like — yoqtirmasdi."},

  {"num":11,"time":"00:00:27,300 --> 00:00:30,539","english":"One day, a man went to the section center to sell things.","transcription":"wʌn deɪ ə mæn went tə ðə ˈsekʃən ˈsentər tə sel θɪŋz","parts":[["One day,","Bir kuni,"],["a man went","bir kishi bordi"],["to the section center","hudud markaziga"],["to sell things.","narsalarni sotish uchun."]],"uzbekFull":"Bir kuni bir kishi narsalarni sotish uchun hudud markaziga bordi.","note":"one day — bir kuni; center — markaz; go to — ...ga bormoq. “section center” iborasi matnda shu ko‘rinishda berilgan."},

  {"num":12,"time":"00:00:31,219 --> 00:00:33,140","english":"I have a baby pig for sale.","transcription":"aɪ hæv ə ˈbeɪbi pɪɡ fər seɪl","parts":[["I have","Menda bor"],["a baby pig","kichkina cho‘chqa"],["for sale.","sotuvga."]],"uzbekFull":"Menda sotuvga qo‘yilgan kichkina cho‘chqa bor.","note":"for sale — sotuvda, sotish uchun; baby pig — kichkina cho‘chqa."},

  {"num":13,"time":"00:00:33,859 --> 00:00:35,840","english":"It won't cost much, he said.","transcription":"ɪt woʊnt kɔːst mʌtʃ hi sɛd","parts":[["It won't cost much,","Bu ko‘p turmaydi,"],["he said.","dedi u."]],"uzbekFull":"“Bu ko‘p turmaydi”, dedi u.","note":"cost — turmoq (narxi); won't = will not — ...maydi; cost much — qimmat turmoq."},

  {"num":14,"time":"00:00:36,379 --> 00:00:38,060","english":"He held the animal above his head.","transcription":"hi held ði ˈænɪməl əˈbʌv hɪz hed","parts":[["He held","U ushlab turdi"],["the animal","hayvonni"],["above his head.","boshining tepasida."]],"uzbekFull":"U hayvonni boshining tepasida ushlab turdi.","note":"hold — ushlab turmoq; held — ushlab turdi; above — tepasida, yuqorisida."},

  {"num":15,"time":"00:00:38,899 --> 00:00:41,340","english":"His style was different from honest people's style.","transcription":"hɪz staɪl wəz ˈdɪfrənt frəm ˈɑːnɪst ˈpiːpəlz staɪl","parts":[["His style","Uning uslubi"],["was different from","...dan farq qilardi"],["honest people's style.","halol odamlarning uslubidan."]],"uzbekFull":"Uning uslubi halol odamlarning uslubidan farq qilardi.","note":"style — uslub; different from — ...dan farqli; honest — halol."},

  {"num":16,"time":"00:00:42,159 --> 00:00:44,280","english":"He was a master of tricking people and lying.","transcription":"hi wəz ə ˈmæstər əv ˈtrɪkɪŋ ˈpiːpəl ænd ˈlaɪɪŋ","parts":[["He was a master","U usta edi"],["of tricking people","odamlarni aldashda"],["and lying.","va yolg‘on gapirishda."]],"uzbekFull":"U odamlarni aldash va yolg‘on gapirishning ustasi edi.","note":"master of — ...ning ustasi; trick people — odamlarni aldamoq; lying — yolg‘on gapirish."},

  {"num":17,"time":"00:00:45,060 --> 00:00:47,600","english":"A woman named Beth scanned his pig.","transcription":"ə ˈwʊmən neɪmd beθ skænd hɪz pɪɡ","parts":[["A woman named Beth","Beth ismli bir ayol"],["scanned his pig.","uning cho‘chqasini tekshirdi."]],"uzbekFull":"Beth ismli bir ayol uning cho‘chqasini tekshirdi.","note":"named — ismli; scan — tekshirmoq, ko‘zdan kechirmoq."},

  {"num":18,"time":"00:00:48,299 --> 00:00:50,739","english":"He offered her the pig for one gold coin.","transcription":"hi ˈɔːfərd hər ðə pɪɡ fər wʌn ɡoʊld kɔɪn","parts":[["He offered her","U unga taklif qildi"],["the pig","cho‘chqani"],["for one gold coin.","bitta oltin tanga evaziga."]],"uzbekFull":"U unga cho‘chqani bitta oltin tanga evaziga taklif qildi.","note":"offer — taklif qilmoq; gold coin — oltin tanga; for ... — ... evaziga."},

  {"num":19,"time":"00:00:51,560 --> 00:00:53,060","english":"That was a very small amount.","transcription":"ðæt wəz ə ˈveri smɔːl əˈmaʊnt","parts":[["That was","Bu edi"],["a very small amount.","juda kichik miqdor."]],"uzbekFull":"Bu juda kichik miqdor edi.","note":"amount — miqdor; small amount — kichik miqdor."},

  {"num":20,"time":"00:00:53,980 --> 00:00:55,019","english":"Beth gave him the coin.","transcription":"beθ ɡeɪv hɪm ðə kɔɪn","parts":[["Beth gave him","Beth unga berdi"],["the coin.","tangani."]],"uzbekFull":"Beth unga tangani berdi.","note":"give — bermoq; gave — berdi; coin — tanga."},

  {"num":21,"time":"00:00:55,760 --> 00:00:56,800","english":"He put it in his pocket.","transcription":"hi pʊt ɪt ɪn hɪz ˈpɑːkɪt","parts":[["He put it","U uni qo‘ydi"],["in his pocket.","cho‘ntagiga."]],"uzbekFull":"U uni cho‘ntagiga soldi.","note":"put — qo‘ymoq, solmoq; pocket — cho‘ntak."},

  {"num":22,"time":"00:00:57,820 --> 00:00:59,760","english":"He walked ahead of Beth to get the pig.","transcription":"hi wɔːkt əˈhed əv beθ tə ɡet ðə pɪɡ","parts":[["He walked ahead of Beth","U Bethdan oldinda yurdi"],["to get the pig.","cho‘chqani olish uchun."]],"uzbekFull":"U cho‘chqani olish uchun Bethdan oldinda yurdi.","note":"ahead of — ...dan oldinda; get — olmoq."},

  {"num":23,"time":"00:01:00,400 --> 00:01:02,440","english":"He gave her a closed bag and said,","transcription":"hi ɡeɪv hər ə kloʊzd bæɡ ænd sɛd","parts":[["He gave her","U unga berdi"],["a closed bag","yopiq xaltani"],["and said,","va dedi:"]],"uzbekFull":"U unga yopiq xaltani berdi va dedi:","note":"closed — yopiq; give someone something — birovga biror narsa bermoq."},

  {"num":24,"time":"00:01:02,700 --> 00:01:03,680","english":"Here's your pig.","transcription":"hɪrz jʊr pɪɡ","parts":[["Here's","Mana"],["your pig.","sizning cho‘chqangiz."]],"uzbekFull":"Mana cho‘chqangiz.","note":"here's = here is — mana; your — sizning."},

  {"num":25,"time":"00:01:04,200 --> 00:01:05,799","english":"He then left very quickly.","transcription":"hi ðen left ˈveri ˈkwɪkli","parts":[["He then left","Keyin u ketdi"],["very quickly.","juda tez."]],"uzbekFull":"Keyin u juda tez ketdi.","note":"leave → left — ketmoq; quickly — tezda."},

  {"num":26,"time":"00:01:07,320 --> 00:01:08,719","english":"Beth looked at the bag's surface.","transcription":"beθ lʊkt æt ðə bæɡz ˈsɜːrfɪs","parts":[["Beth looked at","Beth qaradi"],["the bag's surface.","xaltaning yuzasiga."]],"uzbekFull":"Beth xaltaning yuzasiga qaradi.","note":"look at — ...ga qaramoq; surface — yuza, sirt."},

  {"num":27,"time":"00:01:09,560 --> 00:01:10,260","english":"It was moving.","transcription":"ɪt wəz ˈmuːvɪŋ","parts":[["It was moving.","U harakatlanayotgan edi."]],"uzbekFull":"U harakatlanayotgan edi.","note":"move — harakatlanmoq; was moving — davom etayotgan o‘tgan zamon (Past Continuous)."},

  {"num":28,"time":"00:01:11,200 --> 00:01:12,780","english":"She opened it to let the pig out.","transcription":"ʃi ˈoʊpənd ɪt tə let ðə pɪɡ aʊt","parts":[["She opened it","U uni ochdi"],["to let the pig out.","cho‘chqani chiqarish uchun."]],"uzbekFull":"U cho‘chqani chiqarish uchun uni ochdi.","note":"open — ochmoq; let ... out — ...ni chiqarib yubormoq; to let — ... uchun."},

  {"num":29,"time":"00:01:13,500 --> 00:01:15,060","english":"A cat was inside.","transcription":"ə kæt wəz ɪnˈsaɪd","parts":[["A cat","Bir mushuk"],["was inside.","ichida edi."]],"uzbekFull":"Ichida bir mushuk bor edi.","note":"inside — ichida; a cat — bir mushuk."},

  {"num":30,"time":"00:01:15,820 --> 00:01:17,120","english":"He tricked me.","transcription":"hi trɪkt mi","parts":[["He tricked me.","U meni aldadi."]],"uzbekFull":"U meni aldadi.","note":"trick — aldamoq; tricked — aldagan/aldadi."},

  {"num":31,"time":"00:01:17,379 --> 00:01:19,780","english":"That isn't proper, she said.","transcription":"ðæt ˈɪzənt ˈprɑːpər ʃi sɛd","parts":[["That isn't proper,","Bu to‘g‘ri emas,"],["she said.","dedi u."]],"uzbekFull":"“Bu to‘g‘ri emas”, dedi u.","note":"proper — to‘g‘ri, munosib; isn't = is not — emas."},

  {"num":32,"time":"00:01:20,460 --> 00:01:22,760","english":"Later, the man returned to trick more people.","transcription":"ˈleɪtər ðə mæn rɪˈtɜːrnd tə trɪk mɔːr ˈpiːpəl","parts":[["Later,","Keyinroq,"],["the man returned","u odam qaytib keldi"],["to trick more people.","ko‘proq odamlarni aldash uchun."]],"uzbekFull":"Keyinroq u odam ko‘proq odamlarni aldash uchun qaytib keldi.","note":"later — keyinroq; return — qaytib kelmoq; more people — ko‘proq odamlar."},

  {"num":33,"time":"00:01:23,560 --> 00:01:26,520","english":"Beth saw him, and the memory of the cat came back.","transcription":"beθ sɔː hɪm ænd ðə ˈmeməri əv ðə kæt keɪm bæk","parts":[["Beth saw him,","Beth uni ko‘rdi,"],["and the memory","va xotirasi"],["of the cat came back.","mushuk haqidagi qaytdi."]],"uzbekFull":"Beth uni ko‘rdi va mushuk haqidagi xotirasi qaytdi.","note":"memory — xotira; come back — qaytib kelmoq; the memory came back — xotirasi yana esiga tushmoq."},

  {"num":34,"time":"00:01:27,300 --> 00:01:28,200","english":"She told her friends.","transcription":"ʃi toʊld hər frendz","parts":[["She told","U aytdi"],["her friends.","do‘stlariga."]],"uzbekFull":"U do‘stlariga aytdi.","note":"tell someone — birovga aytmoq; friends — do‘stlar."},

  {"num":35,"time":"00:01:28,939 --> 00:01:29,700","english":"They stopped him.","transcription":"ðeɪ stɑːpt hɪm","parts":[["They stopped","Ular to‘xtatishdi"],["him.","uni."]],"uzbekFull":"Ular uni to‘xtatishdi.","note":"stop — to‘xtatmoq; stopped — to‘xtatdi."},

  {"num":36,"time":"00:01:30,540 --> 00:01:32,100","english":"But no one knew what to do next.","transcription":"bət noʊ wʌn nuː wʌt tə duː nekst","parts":[["But no one knew","Ammo hech kim bilmasdi"],["what to do next.","keyin nima qilishni."]],"uzbekFull":"Ammo keyin nima qilish kerakligini hech kim bilmasdi.","note":"no one — hech kim; know → knew — bilmoq; what to do — nima qilishni; next — keyin."},

  {"num":37,"time":"00:01:33,020 --> 00:01:33,680","english":"Someone said,","transcription":"ˈsʌmwʌn sɛd","parts":[["Someone said,","Kimdir dedi:"]],"uzbekFull":"Kimdir dedi:","note":"someone — kimdir, biror kishi; said — dedi."},

  {"num":38,"time":"00:01:34,320 --> 00:01:37,219","english":"We need an independent and fair person to decide that.","transcription":"wi niːd ən ˌɪndɪˈpendənt ænd fer ˈpɜːrsən tə dɪˈsaɪd ðæt","parts":[["We need","Bizga kerak"],["an independent and fair person","mustaqil va adolatli odam"],["to decide that.","buni hal qilish uchun."]],"uzbekFull":"Buni hal qilish uchun bizga mustaqil va adolatli odam kerak.","note":"independent — mustaqil; fair — adolatli; decide — qaror qilmoq, hal qilmoq."},

  {"num":39,"time":"00:01:37,800 --> 00:01:38,760","english":"They went to the judge.","transcription":"ðeɪ went tə ðə dʒʌdʒ","parts":[["They went","Ular borishdi"],["to the judge.","sudyaga."]],"uzbekFull":"Ular sudyaga borishdi.","note":"judge — sudya; go to — ...ga bormoq."},

  {"num":40,"time":"00:01:39,600 --> 00:01:41,480","english":"Beth told him about the cat in the bag.","transcription":"beθ toʊld hɪm əˈbaʊt ðə kæt ɪn ðə bæɡ","parts":[["Beth told him","Beth unga aytib berdi"],["about the cat","mushuk haqida"],["in the bag.","xaltadagi."]],"uzbekFull":"Beth unga xaltadagi mushuk haqida aytib berdi.","note":"tell someone about — birovga ... haqida aytib bermoq; in the bag — xaltadagi, xalta ichidagi."},

  {"num":41,"time":"00:01:42,200 --> 00:01:42,939","english":"The judge asked,","transcription":"ðə dʒʌdʒ æskt","parts":[["The judge asked,","Sudya so‘radi:"]],"uzbekFull":"Sudya so‘radi:","note":"ask — so‘ramoq; judge — sudya."},

  {"num":42,"time":"00:01:43,660 --> 00:01:44,439","english":"Is there evidence?","transcription":"ɪz ðer ˈevɪdəns","parts":[["Is there","Bormi"],["evidence?","dalil?"]],"uzbekFull":"Dalil bormi?","note":"evidence — dalil, isbot; is there ...? — ... bormi?"},

  {"num":43,"time":"00:01:45,080 --> 00:01:47,300","english":"Can you demonstrate how he did it?","transcription":"kæn juː ˈdemənstreɪt haʊ hi dɪd ɪt","parts":[["Can you demonstrate","Siz ko‘rsata olasizmi"],["how he did it?","u buni qanday qilganini?"]],"uzbekFull":"U buni qanday qilganini ko‘rsata olasizmi?","note":"can you ...? — ... qila olasizmi?; demonstrate — ko‘rsatib bermoq; how he did it — u buni qanday qilgani."},

  {"num":44,"time":"00:01:47,800 --> 00:01:49,960","english":"Look in his bag, said Beth.","transcription":"lʊk ɪn hɪz bæɡ sɛd beθ","parts":[["Look in his bag,","Uning xaltasiga qarang,"],["said Beth.","dedi Beth."]],"uzbekFull":"“Uning xaltasiga qarang”, dedi Beth.","note":"look in — ichiga qaramoq; bag — xalta."},

  {"num":45,"time":"00:01:49,959 --> 00:01:53,419","english":"She opened it and let a cat out of the bag.","transcription":"ʃi ˈoʊpənd ɪt ænd let ə kæt aʊt əv ðə bæɡ","parts":[["She opened it","U uni ochdi"],["and let a cat out","va mushukni chiqarib yubordi"],["of the bag.","xaltadan."]],"uzbekFull":"U uni ochdi va xaltadan mushukni chiqarib yubordi.","note":"let ... out of — ...dan chiqarib yubormoq; bu yerda “let the cat out of the bag” iborasi so‘zma-so‘z va idiomatik ma’noda qo‘llangan."},

  {"num":46,"time":"00:01:53,839 --> 00:01:56,679","english":"They learned the man's secret, and he went to jail.","transcription":"ðeɪ lɜːrnd ðə mænz ˈsiːkrət ænd hi went tə dʒeɪl","parts":[["They learned","Ular bilib olishdi"],["the man's secret,","odamning sirini,"],["and he went to jail.","va u qamoqqa tushdi."]],"uzbekFull":"Ular odamning sirini bilib olishdi va u qamoqqa tushdi.","note":"learn — bilib olmoq, o‘rganmoq; secret — sir; go to jail — qamoqqa tushmoq."},

  {"num":47,"time":"00:01:57,599 --> 00:02:02,579","english":"That's how the idiom, let the cat out of the bag, came to mean to tell a secret.","transcription":"ðæts haʊ ði ˈɪdiəm let ðə kæt aʊt əv ðə bæɡ keɪm tə miːn tə tel ə ˈsiːkrət","parts":[["That's how","Mana shunday qilib"],["the idiom","ibora"],["let the cat out of the bag,","“mushukni xaltadan chiqarib yubormoq”"],["came to mean","...degan ma’noni anglatadigan bo‘ldi"],["to tell a secret.","sirni aytish, sirni oshkor qilish."]],"uzbekFull":"Mana shunday qilib “let the cat out of the bag” iborasi sirni aytish, ya’ni sirni oshkor qilish ma’nosini anglata boshlagan.","note":"that's how — mana shunday qilib; come to mean — ...degan ma’noni anglatadigan bo‘lmoq; let the cat out of the bag — sirni oshkor qilmoq."},

  {"num":48,"time":"00:02:19,960 --> 00:02:22,020","english":"you","transcription":"juː","parts":[["you","siz"]],"uzbekFull":"siz","note":"you — siz, sen. Bu SRTdagi alohida va mazmunsiz yakuniy bo‘lak sifatida berilgan."}
];