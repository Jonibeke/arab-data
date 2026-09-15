const lessons = [
  {"num":1,"time":"00:00:00,920 --> 00:00:02,819","english":"The Duke and the Minister","transcription":"ðə ˈduːk ænd ðə ˈmɪnəstər","parts":[["The Duke","Gersog"],["and the Minister","va vazir"]],"uzbekFull":"Gersog va vazir.","note":"duke — gersog; minister — vazir."},

  {"num":2,"time":"00:00:02,819 --> 00:00:10,240","english":"A mean duke grew tobacco, and his cardinal rule was to always keep the plants healthy.","transcription":"ə ˈmiːn ˈduːk ˈɡruː təˈbæˌkoʊ ænd hɪz ˈkɑːrdənəl ˈruːl wəz tə ˈɔːlˌweɪz ˈkiːp ðə ˈplænts ˈhelθi","parts":[["A mean duke","Ziqna / yomon gersog"],["grew tobacco","tamaki yetishtirardi"],["and his cardinal rule was","va uning asosiy qoidasi"],["to always keep the plants healthy.","o‘simliklarni doimo sog‘lom saqlash edi."]],"uzbekFull":"Ziqna gersog tamaki yetishtirardi va uning asosiy qoidasi o‘simliklarni doimo sog‘lom saqlash edi.","note":"mean — ziqna, yomon; grow → grew — yetishtirmoq; tobacco — tamaki; cardinal rule — asosiy qoida; keep ... healthy — ...ni sog‘lom saqlamoq."},

  {"num":3,"time":"00:00:11,060 --> 00:00:13,660","english":"The duke's top minister was his twin brother.","transcription":"ðə ˈduːks ˈtɑːp ˈmɪnəstər wəz hɪz ˈtwɪn ˈbrʌðər","parts":[["The duke's top minister","Gersogning eng yuqori martabali vaziri"],["was his twin brother.","uning egizak ukasi/akasi edi."]],"uzbekFull":"Gersogning eng yuqori martabali vaziri uning egizak akasi/ukasi edi.","note":"top minister — eng yuqori martabali vazir; twin brother — egizak aka yoki uka."},

  {"num":4,"time":"00:00:14,359 --> 00:00:16,000","english":"They closely resembled each other.","transcription":"ˈðeɪ ˈkloʊsli rɪˈzembəld ˈiːtʃ ˈʌðər","parts":[["They closely resembled","Ular juda o‘xshash edilar"],["each other.","bir-biriga."]],"uzbekFull":"Ular bir-biriga juda o‘xshash edilar.","note":"resemble — o‘xshamoq; closely — juda, nihoyatda; each other — bir-biriga."},

  {"num":5,"time":"00:00:16,740 --> 00:00:19,500","english":"One day, the tobacco plants started to die.","transcription":"wʌn ˈdeɪ ðə təˈbæˌkoʊ ˈplænts ˈstɑːrtɪd tə ˈdaɪ","parts":[["One day,","Bir kuni,"],["the tobacco plants","tamaki o‘simliklari"],["started to die.","o‘la boshladi."]],"uzbekFull":"Bir kuni tamaki o‘simliklari o‘la boshladi.","note":"start to do — ...ni boshlamoq; plant — o‘simlik; die — nobud bo‘lmoq, o‘lmoq."},

  {"num":6,"time":"00:00:20,140 --> 00:00:22,219","english":"He hired men to watch the fields.","transcription":"hi ˈhaɪərd ˈmen tə ˈwɑːtʃ ðə ˈfiːldz","parts":[["He hired men","U odamlarni yolladi"],["to watch the fields.","dalalarni kuzatish uchun."]],"uzbekFull":"U dalalarni kuzatish uchun odamlarni yolladi.","note":"hire — yollamoq; watch — kuzatmoq; field — dala."},

  {"num":7,"time":"00:00:22,920 --> 00:00:25,780","english":"Soon, the men brought a woman to him and said,","transcription":"ˈsuːn ðə ˈmen ˈbrɔːt ə ˈwʊmən tə ˈhɪm ænd ˈsed","parts":[["Soon,","Ko‘p o‘tmay,"],["the men brought a woman","odamlar bir ayolni olib kelishdi"],["to him and said,","uning oldiga va dedilar:"]],"uzbekFull":"Ko‘p o‘tmay, odamlar uning oldiga bir ayolni olib kelishdi va dedilar:","note":"bring → brought — olib kelmoq; soon — ko‘p o‘tmay."},

  {"num":8,"time":"00:00:26,140 --> 00:00:27,339","english":"We captured a witch!","transcription":"wi ˈkæptʃərd ə ˈwɪtʃ","parts":[["We captured","Biz tutdik"],["a witch!","jodugarni!"]],"uzbekFull":"Biz jodugarni tutdik!","note":"capture — tutmoq, qo‘lga olmoq; witch — jodugar."},

  {"num":9,"time":"00:00:28,179 --> 00:00:29,120","english":"The duke asked,","transcription":"ðə ˈduːk ˈæskt","parts":[["The duke asked,","Gersog so‘radi:"]],"uzbekFull":"Gersog so‘radi:","note":"ask — so‘ramoq."},

  {"num":10,"time":"00:00:29,440 --> 00:00:30,339","english":"How do you know?","transcription":"ˈhaʊ duː juː ˈnoʊ","parts":[["How do you know?","Qanday bilasiz?"]],"uzbekFull":"Qanday bilasiz?","note":"How do you know? — Qanday bilasiz?; how — qanday; know — bilmoq."},

  {"num":11,"time":"00:00:31,100 --> 00:00:32,640","english":"She sang magic words.","transcription":"ʃi ˈsæŋ ˈmædʒɪk ˈwɜːrdz","parts":[["She sang","U kuyladi"],["magic words.","sehrli so‘zlarni."]],"uzbekFull":"U sehrli so‘zlarni kuyladi.","note":"sing → sang — kuylamoq; magic — sehrli; word — so‘z."},

  {"num":12,"time":"00:00:33,039 --> 00:00:34,219","english":"I can't pronounce them.","transcription":"ˈaɪ ˈkænt prəˈnaʊns ðem","parts":[["I can't pronounce","Men talaffuz qila olmayman"],["them.","ularni."]],"uzbekFull":"Men ularni talaffuz qila olmayman.","note":"pronounce — talaffuz qilmoq; can't = cannot — qila olmayman; them — ularni."},

  {"num":13,"time":"00:00:34,920 --> 00:00:36,119","english":"She has cursed us.","transcription":"ʃi hæz ˈkɜːrst ˈʌs","parts":[["She has cursed us.","U bizni la’natlagan."]],"uzbekFull":"U bizni la’natlagan.","note":"curse — la’natlamoq; has cursed — Present Perfect, hozirgacha natijasi mavjud bo‘lgan ish."},

  {"num":14,"time":"00:00:36,820 --> 00:00:40,600","english":"The death of the plants is a symptom of her curse, the man said.","transcription":"ðə ˈdeθ əv ðə ˈplænts ɪz ə ˈsɪmptəm əv hər ˈkɜːrs ðə ˈmæn ˈsed","parts":[["The death of the plants","O‘simliklarning nobud bo‘lishi"],["is a symptom","alomatidir"],["of her curse,","uning la’natining,"],["the man said.","dedi u odam."]],"uzbekFull":"“O‘simliklarning nobud bo‘lishi uning la’natining alomatidir”, dedi odam.","note":"death of the plants — o‘simliklarning nobud bo‘lishi; symptom — alomat; curse — la’nat."},

  {"num":15,"time":"00:00:41,179 --> 00:00:43,359","english":"I am just an ordinary woman.","transcription":"ˈaɪ æm ˈdʒʌst ən ˈɔːrdəˌneri ˈwʊmən","parts":[["I am just","Men shunchaki"],["an ordinary woman.","oddiy ayolman."]],"uzbekFull":"Men shunchaki oddiy ayolman.","note":"just — shunchaki; ordinary — oddiy; woman — ayol."},

  {"num":16,"time":"00:00:43,359 --> 00:00:48,100","english":"I was singing a song in a different language, the woman protested.","transcription":"ˈaɪ wəz ˈsɪŋɪŋ ə ˈsɔːŋ ɪn ə ˈdɪfərənt ˈlæŋɡwədʒ ðə ˈwʊmən prəˈtestɪd","parts":[["I was singing a song","Men qo‘shiq kuylayotgan edim"],["in a different language,","boshqa tilda,"],["the woman protested.","deb ayol e’tiroz bildirdi."]],"uzbekFull":"“Men boshqa tilda qo‘shiq kuylayotgan edim”, deb ayol e’tiroz bildirdi.","note":"was singing — Past Continuous; different language — boshqa til; protest — e’tiroz bildirmoq."},

  {"num":17,"time":"00:00:49,039 --> 00:00:50,299","english":"The duke didn't listen.","transcription":"ðə ˈduːk ˈdɪdənt ˈlɪsən","parts":[["The duke","Gersog"],["didn't listen.","quloq solmadi."]],"uzbekFull":"Gersog quloq solmadi.","note":"listen — tinglamoq, quloq solmoq; didn't = did not — o‘tgan zamon inkori."},

  {"num":18,"time":"00:00:51,060 --> 00:00:51,900","english":"You are guilty.","transcription":"juː ɑːr ˈɡɪlti","parts":[["You are guilty.","Siz aybdorsiz."]],"uzbekFull":"Siz aybdorsiz.","note":"guilty — aybdor."},

  {"num":19,"time":"00:00:52,420 --> 00:00:53,340","english":"You will go to jail.","transcription":"juː wɪl ˈɡoʊ tə ˈdʒeɪl","parts":[["You will go","Siz borasiz"],["to jail.","qamoqqa."]],"uzbekFull":"Siz qamoqqa borasiz.","note":"will — kelasi zamon; jail — qamoqxona, qamoq."},

  {"num":20,"time":"00:00:54,240 --> 00:00:56,299","english":"The minister thought that she was innocent.","transcription":"ðə ˈmɪnəstər ˈθɔːt ðæt ʃi wəz ˈɪnəsənt","parts":[["The minister thought","Vazir o‘yladi"],["that she was innocent.","uning aybsiz ekanini."]],"uzbekFull":"Vazir uning aybsiz ekanini o‘yladi.","note":"innocent — aybsiz; think that — ... deb o‘ylamoq."},

  {"num":21,"time":"00:00:57,039 --> 00:00:58,939","english":"He needed to expose the truth.","transcription":"hi ˈniːdəd tə ɪkˈspoʊz ðə ˈtruːθ","parts":[["He needed","Unga kerak edi"],["to expose the truth.","haqiqatni oshkor qilish."]],"uzbekFull":"U haqiqatni oshkor qilishi kerak edi.","note":"need to — ... kerak bo‘lmoq; expose — oshkor qilmoq; truth — haqiqat."},

  {"num":22,"time":"00:00:59,640 --> 00:01:02,299","english":"He asked the duke to loan him one of his plants.","transcription":"hi ˈæskt ðə ˈduːk tə ˈloʊn ˈhɪm wʌn əv hɪz ˈplænts","parts":[["He asked the duke","U gersogdan so‘radi"],["to loan him","unga berib turishni"],["one of his plants.","o‘z o‘simliklaridan birini."]],"uzbekFull":"U gersogdan o‘z o‘simliklaridan birini unga berib turishni so‘radi.","note":"ask someone to do — birovdan biror ish qilishni so‘ramoq; loan — vaqtincha berib turmoq; one of — ...dan biri."},

  {"num":23,"time":"00:01:03,019 --> 00:01:04,179","english":"He looked at it closely.","transcription":"hi ˈlʊkt æt ɪt ˈkloʊsli","parts":[["He looked at it","U unga qaradi"],["closely.","diqqat bilan."]],"uzbekFull":"U unga diqqat bilan qaradi.","note":"look at — qaramoq; closely — diqqat bilan, sinchiklab."},

  {"num":24,"time":"00:01:04,859 --> 00:01:07,500","english":"He saw hundreds of small bugs eating it.","transcription":"hi ˈsɔː ˈhʌndrədz əv ˈsmɔːl ˈbʌɡz ˈiːtɪŋ ɪt","parts":[["He saw","U ko‘rdi"],["hundreds of small bugs","yuzlab mayda hasharotlarni"],["eating it.","uni yeyayotgan."]],"uzbekFull":"U uni yeyayotgan yuzlab mayda hasharotlarni ko‘rdi.","note":"hundreds of — yuzlab; bug — hasharot; see someone/something doing — biror kishini/narsani biror ish qilayotgan holda ko‘rmoq."},

  {"num":25,"time":"00:01:08,280 --> 00:01:12,000","english":"Then the minister went to the jail and did something bold.","transcription":"ˈðen ðə ˈmɪnəstər ˈwent tə ðə ˈdʒeɪl ænd dɪd ˈsʌmθɪŋ ˈboʊld","parts":[["Then","Keyin"],["the minister went to the jail","vazir qamoqxonaga bordi"],["and did something bold.","va dadil bir ish qildi."]],"uzbekFull":"Keyin vazir qamoqxonaga bordi va dadil bir ish qildi.","note":"then — keyin; bold — dadil, jasur; do something — biror ish qilmoq."},

  {"num":26,"time":"00:01:12,620 --> 00:01:14,340","english":"Let this woman go, he said.","transcription":"ˈlet ˈðɪs ˈwʊmən ˈɡoʊ hi ˈsed","parts":[["Let this woman go","Bu ayolni qo‘yib yuboring"],["he said.","dedi u."]],"uzbekFull":"“Bu ayolni qo‘yib yuboring”, dedi u.","note":"let someone go — birovni qo‘yib yubormoq; let + object + verb — birovga biror ish qilishga ruxsat bermoq."},

  {"num":27,"time":"00:01:14,780 --> 00:01:17,219","english":"The guards thought he was the duke.","transcription":"ðə ˈɡɑːrdz ˈθɔːt hi wəz ðə ˈduːk","parts":[["The guards thought","Qo‘riqchilar o‘ylashdi"],["he was the duke.","u gersog ekanini."]],"uzbekFull":"Qo‘riqchilar uni gersog deb o‘ylashdi.","note":"guard — qo‘riqchi; think someone is — birovni ... deb o‘ylamoq."},

  {"num":28,"time":"00:01:17,579 --> 00:01:18,439","english":"They let her go.","transcription":"ˈðeɪ ˈlet hər ˈɡoʊ","parts":[["They let her go.","Ular uni qo‘yib yuborishdi."]],"uzbekFull":"Ular uni qo‘yib yuborishdi.","note":"let someone go — birovni qo‘yib yubormoq; let → pastda ham let bo‘lib qoladi."},

  {"num":29,"time":"00:01:19,200 --> 00:01:21,819","english":"The minister said, I owe you an apology.","transcription":"ðə ˈmɪnəstər ˈsed ˈaɪ ˈoʊ juː ən əˈpɑːləˌdʒiː","parts":[["The minister said,","Vazir dedi:"],["I owe you","Men sizdan qarzdorman"],["an apology.","uzr so‘rash bo‘yicha."]],"uzbekFull":"Vazir dedi: “Sizdan uzr so‘rashim kerak.”","note":"owe someone — birovga qarzdor bo‘lmoq; apology — uzr, kechirim so‘rash."},

  {"num":30,"time":"00:01:22,599 --> 00:01:23,079","english":"Thank you.","transcription":"ˈθæŋk juː","parts":[["Thank you.","Rahmat."]],"uzbekFull":"Rahmat.","note":"thank you — rahmat."},

  {"num":31,"time":"00:01:23,500 --> 00:01:25,840","english":"I thought my stay in jail was permanent.","transcription":"ˈaɪ ˈθɔːt ˈmaɪ ˈsteɪ ɪn ˈdʒeɪl wəz ˈpɜːrmənənt","parts":[["I thought","Men o‘ylagandim"],["my stay in jail","qamoqda qolishim"],["was permanent.","doimiy ekanini."]],"uzbekFull":"Men qamoqda qolishim doimiy deb o‘ylagandim.","note":"stay — qolish; stay in jail — qamoqda qolmoq; permanent — doimiy."},

  {"num":32,"time":"00:01:26,299 --> 00:01:30,399","english":"the woman answered. The minister thought the duke would punish him,","transcription":"ðə ˈwʊmən ˈænsərd ðə ˈmɪnəstər ˈθɔːt ðə ˈduːk wʊd ˈpʌnɪʃ ˈhɪm","parts":[["the woman answered.","ayol javob berdi."],["The minister thought","Vazir o‘yladi"],["the duke would punish him,","gersog uni jazolashini."]],"uzbekFull":"Ayol javob berdi. Vazir gersog uni jazolaydi deb o‘yladi,","note":"answer — javob bermoq; punish — jazolamoq; would — o‘tmish nuqtasidan qaralgan kelasi zamon."},

  {"num":33,"time":"00:01:30,780 --> 00:01:35,200","english":"but he didn't. The duke was too busy trying to preserve his plants.","transcription":"bət hi ˈdɪdənt ðə ˈduːk wəz ˈtuː ˈbɪzi ˈtraɪɪŋ tə prəˈzɜːrv hɪz ˈplænts","parts":[["but he didn't.","ammo u bunday qilmadi."],["The duke was too busy","Gersog juda band edi"],["trying to preserve his plants.","o‘simliklarini saqlab qolishga urinib."]],"uzbekFull":"Ammo u bunday qilmadi. Gersog o‘simliklarini saqlab qolishga urinish bilan juda band edi.","note":"didn't — did not; too busy to / too busy doing — juda band bo‘lmoq; preserve — saqlab qolmoq; try to — ...ga urinmoq."}
];

if (typeof module !== "undefined" && module.exports) {
  module.exports = lessons;
}
