const lessons = [
  {"num":1,"time":"00:00:00,000 --> 00:00:02,879","english":"Adams County's Gold","transcription":"ˈædəmz ˈkaʊntiz ɡoʊld","parts":[["Adams County's","Adams okrugining"],["Gold","oltini"]],"uzbekFull":"Adams okrugining oltini","note":"county — okrug, tuman; gold — oltin."},

  {"num":2,"time":"00:00:02,879 --> 00:00:06,160","english":"Adams Academy was a good school.","transcription":"ˈædəmz əˈkædəmi wəz ə ɡʊd skuːl","parts":[["Adams Academy","Adams akademiyasi"],["was a good school.","yaxshi maktab edi."]],"uzbekFull":"Adams akademiyasi yaxshi maktab edi.","note":"academy — akademiya; school — maktab."},

  {"num":3,"time":"00:00:07,120 --> 00:00:08,900","english":"Boys lived there and took classes.","transcription":"bɔɪz lɪvd ðer ænd tʊk ˈklæsɪz","parts":[["Boys lived there","Bolalar u yerda yashashardi"],["and took classes.","va darslarda qatnashishardi."]],"uzbekFull":"O‘g‘il bolalar u yerda yashashardi va darslarda qatnashishardi.","note":"take classes — darslarda qatnashmoq."},

  {"num":4,"time":"00:00:10,200 --> 00:00:11,580","english":"Tom worked hard all week.","transcription":"tɑːm wɜːrkt hɑːrd ɔːl wiːk","parts":[["Tom worked hard","Tom qattiq ishladi"],["all week.","butun hafta."]],"uzbekFull":"Tom butun hafta qattiq ishladi.","note":"work hard — qattiq ishlamoq; all week — butun hafta."},

  {"num":5,"time":"00:00:12,500 --> 00:00:15,439","english":"On a spring Saturday, he wanted to do something fun.","transcription":"ɑːn ə sprɪŋ ˈsætərdeɪ hiː ˈwɑːntɪd tə duː ˈsʌmθɪŋ fʌn","parts":[["On a spring Saturday,","Bahorning bir shanba kunida,"],["he wanted to do","u qilishni xohladi"],["something fun.","qiziqarli biror narsani."]],"uzbekFull":"Bahorning bir shanba kunida u qiziqarli biror narsa qilishni xohladi.","note":"something fun — qiziqarli biror narsa; want to do — qilishni xohlamoq."},

  {"num":6,"time":"00:00:16,280 --> 00:00:18,580","english":"He asked his friend Jeff to go to the movie theater.","transcription":"hiː æskt hɪz frend dʒef tə ɡoʊ tə ðə ˈmuːvi ˌθiːətər","parts":[["He asked his friend Jeff","U do‘sti Jeffdan so‘radi"],["to go","borishni"],["to the movie theater.","kinoteatrga."]],"uzbekFull":"U do‘sti Jeffdan kinoteatrga borishni so‘radi.","note":"ask someone to do — birovdan biror ishni qilishni so‘ramoq; movie theater — kinoteatr."},

  {"num":7,"time":"00:00:19,660 --> 00:00:22,820","english":"Sorry, Jeff answered. I'm going to a concert.","transcription":"ˈsɑːri dʒef ˈænsərd aɪm ˈɡoʊɪŋ tə ə ˈkɑːnsərt","parts":[["Sorry,","Kechirasiz,"],["Jeff answered.","deb javob berdi Jeff."],["I'm going to a concert.","Men konsertga ketyapman."]],"uzbekFull":"“Kechirasiz”, deb javob berdi Jeff. “Men konsertga ketyapman.”","note":"go to a concert — konsertga bormoq; answer — javob bermoq."},

  {"num":8,"time":"00:00:23,240 --> 00:00:25,679","english":"So Tom asked Joe to go to the movies.","transcription":"soʊ tɑːm æskt dʒoʊ tə ɡoʊ tə ðə ˈmuːviz","parts":[["So Tom asked Joe","Shuning uchun Tom Joedan so‘radi"],["to go to the movies.","kinoga borishni."]],"uzbekFull":"Shuning uchun Tom Joedan kinoga borishni so‘radi.","note":"go to the movies — kinoga bormoq."},

  {"num":9,"time":"00:00:26,300 --> 00:00:28,300","english":"But Joe's soccer team had a game.","transcription":"bət dʒoʊz ˈsɑːkər tiːm hæd ə ɡeɪm","parts":[["But Joe's soccer team","Ammo Joning futbol jamoasi"],["had a game.","o‘yin o‘tkazishi kerak edi."]],"uzbekFull":"Ammo Joning futbol jamoasining o‘yini bor edi.","note":"soccer team — futbol jamoasi; have a game — o‘yini bo‘lmoq."},

  {"num":10,"time":"00:00:29,220 --> 00:00:32,160","english":"Next, Tom went down the hall to Brad's room.","transcription":"nekst tɑːm went daʊn ðə hɔːl tə brædz ruːm","parts":[["Next,","Keyin,"],["Tom went down the hall","Tom yo‘lak bo‘ylab bordi"],["to Brad's room.","Bradning xonasiga."]],"uzbekFull":"Keyin Tom yo‘lak bo‘ylab Bradning xonasiga bordi.","note":"hall — yo‘lak; go down the hall — yo‘lak bo‘ylab bormoq."},

  {"num":11,"time":"00:00:33,100 --> 00:00:35,560","english":"Brad was reading a very large old book.","transcription":"bræd wəz ˈriːdɪŋ ə ˈveri lɑːrdʒ oʊld bʊk","parts":[["Brad was reading","Brad o‘qiyotgan edi"],["a very large old book.","juda katta eski kitobni."]],"uzbekFull":"Brad juda katta eski kitobni o‘qiyotgan edi.","note":"large — katta; old book — eski kitob."},

  {"num":12,"time":"00:00:36,679 --> 00:00:38,340","english":"Hi, Brad, Tom said.","transcription":"haɪ bræd tɑːm sed","parts":[["Hi, Brad,","Salom, Brad,"],["Tom said.","dedi Tom."]],"uzbekFull":"“Salom, Brad”, dedi Tom.","note":"Hi — salom."},

  {"num":13,"time":"00:00:39,020 --> 00:00:40,100","english":"Are you reading a dictionary?","transcription":"ɑːr juː ˈriːdɪŋ ə ˈdɪkʃəneri","parts":[["Are you reading","Siz o‘qiyapsizmi"],["a dictionary?","lug‘atni?"]],"uzbekFull":"“Lug‘at o‘qiyapsizmi?”","note":"dictionary — lug‘at; Are you ...ing? — Siz ...yapsizmi?"},

  {"num":14,"time":"00:00:40,700 --> 00:00:41,679","english":"It looks ancient.","transcription":"ɪt lʊks ˈeɪnʃənt","parts":[["It looks","U ko‘rinadi"],["ancient.","juda qadimiy."]],"uzbekFull":"U juda qadimiy ko‘rinadi.","note":"look + adjective — ... ko‘rinmoq; ancient — qadimiy."},

  {"num":15,"time":"00:00:42,600 --> 00:00:46,040","english":"No, this is called The Wealth of Adams County.","transcription":"noʊ ðɪs ɪz kɔːld ðə welθ əv ˈædəmz ˈkaʊnti","parts":[["No,","Yo‘q,"],["this is called","bu ... deb ataladi"],["The Wealth of Adams County.","“Adams okrugining boyligi”."]],"uzbekFull":"“Yo‘q, bu “Adams okrugining boyligi” deb ataladi.”","note":"be called — deb atalmoq; wealth — boylik."},

  {"num":16,"time":"00:00:46,560 --> 00:00:49,000","english":"It's about hidden gold in Adams County.","transcription":"ɪts əˈbaʊt ˈhɪdən ɡoʊld ɪn ˈædəmz ˈkaʊnti","parts":[["It's about","U ... haqida"],["hidden gold","yashirilgan oltin"],["in Adams County.","Adams okrugidagi."]],"uzbekFull":"“U Adams okrugidagi yashirilgan oltin haqida.”","note":"hidden — yashirilgan; be about — ... haqida bo‘lmoq."},

  {"num":17,"time":"00:00:49,799 --> 00:00:51,620","english":"It's more than a century old.","transcription":"ɪts mɔːr ðæn ə ˈsentʃəri oʊld","parts":[["It's more than","U ...dan ko‘proq"],["a century old.","bir asrlik."]],"uzbekFull":"“U bir asrdan ham eski.”","note":"more than a century — bir asrdan ko‘proq; century — asr."},

  {"num":18,"time":"00:00:52,439 --> 00:00:54,120","english":"It was published in 1870.","transcription":"ɪt wəz ˈpʌblɪʃt ɪn eɪˈtiːn ˈsevənti","parts":[["It was published","U nashr etilgan"],["in 1870.","1870-yilda."]],"uzbekFull":"U 1870-yilda nashr etilgan.","note":"be published — nashr etilmoq; published — nashr etilgan."},

  {"num":19,"time":"00:00:55,120 --> 00:00:57,700","english":"Look, it even has the original cover on it.","transcription":"lʊk ɪt ˈiːvən hæz ði əˈrɪdʒənəl ˈkʌvər ɑːn ɪt","parts":[["Look,","Qarang,"],["it even has","unda hatto bor"],["the original cover","asl muqova"],["on it.","uning ustida."]],"uzbekFull":"“Qarang, unda hatto asl muqovasi ham bor.”","note":"even — hatto; original — asl; cover — muqova."},

  {"num":20,"time":"00:00:58,299 --> 00:01:00,759","english":"Tom asked, Where did you get it?","transcription":"tɑːm æskt wer dɪd juː ɡet ɪt","parts":[["Tom asked,","Tom so‘radi,"],["Where did you get it?","Uni qayerdan oldingiz?"]],"uzbekFull":"Tom so‘radi: “Uni qayerdan oldingiz?”","note":"Where did you get...? — ...ni qayerdan oldingiz?"},

  {"num":21,"time":"00:01:01,399 --> 00:01:03,059","english":"It's from my dad's friend.","transcription":"ɪts frəm maɪ dædz frend","parts":[["It's from","U ...dan"],["my dad's friend.","otamning do‘stidan."]],"uzbekFull":"“U otamning do‘stidan.”","note":"from someone — birovdan."},

  {"num":22,"time":"00:01:03,719 --> 00:01:07,519","english":"He is a nice gentleman, an officer in the army, answered Brad.","transcription":"hiː ɪz ə naɪs ˈdʒentəlmən ən ˈɔːfɪsər ɪn ði ˈɑːrmi ˈænsərd bræd","parts":[["He is a nice gentleman,","U yaxshi janob,"],["an officer in the army,","armiyadagi ofitser,"],["answered Brad.","deb javob berdi Brad."]],"uzbekFull":"“U yaxshi janob, armiyadagi ofitser”, deb javob berdi Brad.","note":"gentleman — janob; officer — ofitser; army — armiya."},

  {"num":23,"time":"00:01:08,019 --> 00:01:11,319","english":"The gold doesn't really exist, does it?","transcription":"ðə ɡoʊld ˈdʌzənt ˈrɪəli ɪɡˈzɪst dʌz ɪt","parts":[["The gold doesn't really exist,","Oltin aslida mavjud emas,"],["does it?","shundaymi?"]],"uzbekFull":"“Oltin aslida mavjud emas, shundaymi?”","note":"exist — mavjud bo‘lmoq; doesn't ... , does it? — ... emas, shundaymi?"},

  {"num":24,"time":"00:01:11,920 --> 00:01:12,560","english":"Tom asked.","transcription":"tɑːm æskt","parts":[["Tom asked.","Tom so‘radi."]],"uzbekFull":"Tom so‘radi.","note":"ask — so‘ramoq."},

  {"num":25,"time":"00:01:13,239 --> 00:01:14,939","english":"I don't know, but maybe.","transcription":"aɪ doʊnt noʊ bət ˈmeɪbi","parts":[["I don't know,","Men bilmayman,"],["but maybe.","ammo balki."]],"uzbekFull":"“Bilmayman, ammo balki.”","note":"maybe — balki, ehtimol."},

  {"num":26,"time":"00:01:15,700 --> 00:01:17,179","english":"There are clues to it in this book.","transcription":"ðer ɑːr kluːz tə ɪt ɪn ðɪs bʊk","parts":[["There are clues","Ishoralar bor"],["to it","unga"],["in this book.","bu kitobda."]],"uzbekFull":"“Bu kitobda unga oid ishoralar bor.”","note":"clue — ishora, belgi; there are — bor."},

  {"num":27,"time":"00:01:17,840 --> 00:01:18,620","english":"Let's find it.","transcription":"lets faɪnd ɪt","parts":[["Let's find","Keling, topaylik"],["it.","uni."]],"uzbekFull":"“Keling, uni topaylik.”","note":"find — topmoq; let's — keling, ...lik."},

  {"num":28,"time":"00:01:19,459 --> 00:01:21,159","english":"Looking for gold sounded like fun.","transcription":"ˈlʊkɪŋ fər ɡoʊld ˈsaʊndɪd laɪk fʌn","parts":[["Looking for gold","Oltin qidirish"],["sounded like fun.","qiziqarli tuyuldi."]],"uzbekFull":"Oltin qidirish qiziqarli tuyuldi.","note":"look for — qidirmoq; sound like — ...dek tuyulmoq."},

  {"num":29,"time":"00:01:22,079 --> 00:01:24,939","english":"The first clue was to find a flat tree underground.","transcription":"ðə fɜːrst kluː wəz tə faɪnd ə flæt triː ˌʌndərˈɡraʊnd","parts":[["The first clue","Birinchi ishora"],["was to find","topish edi"],["a flat tree","yassi daraxtni"],["underground.","yer ostida."]],"uzbekFull":"Birinchi ishora yer ostidan yassi daraxtni topish edi.","note":"first clue — birinchi ishora; underground — yer ostida."},

  {"num":30,"time":"00:01:25,679 --> 00:01:28,420","english":"It must be in the forest, Tom said.","transcription":"ɪt mʌst biː ɪn ðə ˈfɔːrɪst tɑːm sed","parts":[["It must be","U ... bo‘lishi kerak"],["in the forest,","o‘rmonda,"],["Tom said.","dedi Tom."]],"uzbekFull":"“U o‘rmonda bo‘lishi kerak”, dedi Tom.","note":"must be — ... bo‘lishi kerak."},

  {"num":31,"time":"00:01:29,280 --> 00:01:29,879","english":"Brad said,","transcription":"bræd sed","parts":[["Brad said,","Brad dedi:"]],"uzbekFull":"Brad dedi:","note":"said — dedi."},

  {"num":32,"time":"00:01:30,599 --> 00:01:33,060","english":"The flat tree could be a board under the dirt.","transcription":"ðə flæt triː kʊd biː ə bɔːrd ˈʌndər ðə dɜːrt","parts":[["The flat tree","Yassi daraxt"],["could be","bo‘lishi mumkin"],["a board","taxta"],["under the dirt.","tuproq ostidagi."]],"uzbekFull":"“Yassi daraxt tuproq ostidagi taxta bo‘lishi mumkin.”","note":"could be — ... bo‘lishi mumkin; board — taxta; under — ostida."},

  {"num":33,"time":"00:01:33,599 --> 00:01:35,079","english":"It could cover the gold.","transcription":"ɪt kʊd ˈkʌvər ðə ɡoʊld","parts":[["It could cover","U yopib turgan bo‘lishi mumkin"],["the gold.","oltinni."]],"uzbekFull":"“U oltinni yopib turgan bo‘lishi mumkin.”","note":"cover — yopmoq, ustini qoplamoq; could — mumkin edi."},

  {"num":34,"time":"00:01:35,719 --> 00:01:38,099","english":"Tom and Brad dug in the dirt all morning.","transcription":"tɑːm ænd bræd dʌɡ ɪn ðə dɜːrt ɔːl ˈmɔːrnɪŋ","parts":[["Tom and Brad dug","Tom va Brad qazishdi"],["in the dirt","tuproqda"],["all morning.","butun tong davomida."]],"uzbekFull":"Tom va Brad butun tong davomida tuproq qazishdi.","note":"dig → dug — qazimoq; all morning — butun tong davomida."},

  {"num":35,"time":"00:01:39,140 --> 00:01:41,259","english":"The process of looking for gold made them hungry.","transcription":"ðə ˈprɑːses əv ˈlʊkɪŋ fər ɡoʊld meɪd ðəm ˈhʌŋɡri","parts":[["The process of looking for gold","Oltin qidirish jarayoni"],["made them hungry.","ularni och qoldirdi."]],"uzbekFull":"Oltin qidirish jarayoni ularni och qoldirdi.","note":"process of — ... jarayoni; make someone + adjective — birovni biror holatga keltirmoq."},

  {"num":36,"time":"00:01:42,319 --> 00:01:43,700","english":"They were ready to stop for lunch.","transcription":"ðeɪ wər ˈredi tə stɑːp fər lʌntʃ","parts":[["They were ready","Ular tayyor edilar"],["to stop for lunch.","tushlik uchun to‘xtashga."]],"uzbekFull":"Ular tushlik qilish uchun to‘xtashga tayyor edilar.","note":"be ready to — ...ga tayyor bo‘lmoq; stop for lunch — tushlik uchun to‘xtamoq."},

  {"num":37,"time":"00:01:44,539 --> 00:01:46,180","english":"But then Brad hit something hard.","transcription":"bət ðen bræd hɪt ˈsʌmθɪŋ hɑːrd","parts":[["But then","Ammo keyin"],["Brad hit","Brad urildi"],["something hard.","qattiq narsaga."]],"uzbekFull":"Ammo keyin Brad qattiq narsaga urildi.","note":"hit — urilmoq, urmoq; something hard — qattiq biror narsa."},

  {"num":38,"time":"00:01:46,959 --> 00:01:47,819","english":"It was a board.","transcription":"ɪt wəz ə bɔːrd","parts":[["It was","U ... edi"],["a board.","taxta."]],"uzbekFull":"U taxta edi.","note":"board — taxta."},

  {"num":39,"time":"00:01:48,819 --> 00:01:50,879","english":"Brad pounded on the board until it broke.","transcription":"bræd ˈpaʊndɪd ɑːn ðə bɔːrd ənˈtɪl ɪt broʊk","parts":[["Brad pounded on","Brad ...ga qattiq urdi"],["the board","taxtaga"],["until it broke.","u singuncha."]],"uzbekFull":"Brad taxta singuncha uni qattiq urdi.","note":"pound on — qattiq urmoq; until — ...gacha; break → broke — sinmoq."},

  {"num":40,"time":"00:01:51,719 --> 00:01:53,259","english":"There was a small hole under it.","transcription":"ðer wəz ə smɔːl hoʊl ˈʌndər ɪt","parts":[["There was","Bor edi"],["a small hole","kichik teshik"],["under it.","uning ostida."]],"uzbekFull":"Uning ostida kichik teshik bor edi.","note":"there was — bor edi; hole — teshik; under — ostida."},

  {"num":41,"time":"00:01:54,240 --> 00:01:54,800","english":"Look!","transcription":"lʊk","parts":[["Look!","Qarang!"]],"uzbekFull":"“Qarang!”","note":"look — qaramoq; buyruq shaklida “Qarang!”."},

  {"num":42,"time":"00:01:55,300 --> 00:01:56,880","english":"He held up a gold coin.","transcription":"hiː held ʌp ə ɡoʊld kɔɪn","parts":[["He held up","U ko‘tarib ko‘rsatdi"],["a gold coin.","oltin tangani."]],"uzbekFull":"U oltin tangani ko‘tarib ko‘rsatdi.","note":"hold up — ko‘tarib ko‘rsatmoq; coin — tanga."},

  {"num":43,"time":"00:01:57,939 --> 00:01:59,780","english":"Tom saw a piece of paper in the hole.","transcription":"tɑːm sɔː ə piːs əv ˈpeɪpər ɪn ðə hoʊl","parts":[["Tom saw","Tom ko‘rdi"],["a piece of paper","bir parcha qog‘ozni"],["in the hole.","teshik ichida."]],"uzbekFull":"Tom teshik ichida bir parcha qog‘ozni ko‘rdi.","note":"a piece of paper — bir parcha qog‘oz."},

  {"num":44,"time":"00:02:00,640 --> 00:02:01,820","english":"Brad, there's more.","transcription":"bræd ðerz mɔːr","parts":[["Brad,","Brad,"],["there's more.","yana bor."]],"uzbekFull":"“Brad, yana bor.”","note":"there's more — yana bor / yana ko‘proq bor."},

  {"num":45,"time":"00:02:02,500 --> 00:02:04,160","english":"It's a map to the rest of the gold.","transcription":"ɪts ə mæp tə ðə rest əv ðə ɡoʊld","parts":[["It's a map","Bu xarita"],["to the rest of the gold.","qolgan oltinning joyiga."]],"uzbekFull":"“Bu qolgan oltinning joyiga olib boradigan xarita.”","note":"the rest of — qolgan qismi; map to — ...ga olib boradigan xarita."},

  {"num":46,"time":"00:02:05,100 --> 00:02:05,900","english":"Brad smiled.","transcription":"bræd smaɪld","parts":[["Brad smiled.","Brad jilmaydi."]],"uzbekFull":"Brad jilmaydi.","note":"smile — jilmaymoq."},

  {"num":47,"time":"00:02:06,520 --> 00:02:07,280","english":"Let's go.","transcription":"lets ɡoʊ","parts":[["Let's go.","Ketdik."]],"uzbekFull":"“Ketdik.”","note":"let's go — ketdik / yur, ketamiz."},

  {"num":48,"time":"00:02:08,159 --> 00:02:10,680","english":"And they hurried to find the wealth of Adams County.","transcription":"ænd ðeɪ ˈhɜːrid tə faɪnd ðə welθ əv ˈædəmz ˈkaʊnti","parts":[["And they hurried","Va ular shoshilishdi"],["to find","topish uchun"],["the wealth of Adams County.","Adams okrugining boyligini."]],"uzbekFull":"Va ular Adams okrugining boyligini topish uchun shoshilishdi.","note":"hurry — shoshilmoq; hurry to do — ... qilish uchun shoshilmoq; wealth — boylik."}
];

if (typeof module !== "undefined" && module.exports) {
  module.exports = lessons;
}