const lessons = [
  {"num":1,"time":"00:00:01,000 --> 00:00:02,459","english":"The Taxi Driver","transcription":"ðə ˈtæksi ˈdraɪvər","parts":[["The Taxi Driver","Taksi haydovchisi"]],"uzbekFull":"Taksi haydovchisi.","note":"taxi driver — taksi haydovchisi."},

  {"num":2,"time":"00:00:02,459 --> 00:00:05,980","english":"Peter's job was driving a taxi downtown.","transcription":"ˈpiːtərz ˈdʒɑːb wəz ˈdraɪvɪŋ ə ˈtæksi ˈdaʊnˈtaʊn","parts":[["Peter's job was","Peterning ishi ... edi"],["driving a taxi","taksi haydash"],["downtown.","shahar markazida."]],"uzbekFull":"Peterning ishi shahar markazida taksi haydash edi.","note":"job — ish; drive a taxi — taksi haydamoq; downtown — shahar markazi."},

  {"num":3,"time":"00:00:06,980 --> 00:00:08,179","english":"He made a small salary.","transcription":"hi ˈmeɪd ə ˈsmɔːl ˈsæləri","parts":[["He made","U olardi"],["a small salary.","kichik maosh."]],"uzbekFull":"U kam maosh olardi.","note":"salary — maosh; small salary — kam maosh."},

  {"num":4,"time":"00:00:09,080 --> 00:00:11,660","english":"But he liked his job because it wasn't dull.","transcription":"bət hi ˈlaɪkt hɪz ˈdʒɑːb bɪˈkɔːz ɪt ˈwɑːzənt ˈdʌl","parts":[["But he liked his job","Ammo u ishini yoqtirardi"],["because it wasn't dull.","chunki u zerikarli emas edi."]],"uzbekFull":"Ammo u ishini yoqtirardi, chunki u zerikarli emas edi.","note":"like — yoqtirmoq; because — chunki; dull — zerikarli."},

  {"num":5,"time":"00:00:12,679 --> 00:00:15,019","english":"Every day he saw new things that appealed to him.","transcription":"ˈevəri ˈdeɪ hi ˈsɔː ˈnuː ˈθɪŋz ðæt əˈpiːld tə ˈhɪm","parts":[["Every day","Har kuni"],["he saw new things","u yangi narsalarni ko‘rardi"],["that appealed to him.","unga yoqadigan."]],"uzbekFull":"Har kuni u o‘ziga yoqadigan yangi narsalarni ko‘rardi.","note":"every day — har kuni; appeal to someone — birovga yoqmoq, qiziq tuyulmoq."},

  {"num":6,"time":"00:00:15,820 --> 00:00:17,379","english":"Peter was practical about the future.","transcription":"ˈpiːtər wəz ˈpræktəkəl əˈbaʊt ðə ˈfjuːtʃər","parts":[["Peter was practical","Peter amaliy fikrlardi"],["about the future.","kelajak haqida."]],"uzbekFull":"Peter kelajak haqida amaliy fikrlardi.","note":"practical — amaliy, oqilona; future — kelajak."},

  {"num":7,"time":"00:00:18,320 --> 00:00:21,059","english":"Maybe I can get a scholarship to college, he thought.","transcription":"ˈmeɪbi ˈaɪ kən ˈɡet ə ˈskɑːlərˌʃɪp tə ˈkɑːlɪdʒ hi ˈθɔːt","parts":[["Maybe","Balki"],["I can get a scholarship","men stipendiya olsam bo‘ladi"],["to college,","kollej uchun,"],["he thought.","deb o‘yladi u."]],"uzbekFull":"“Balki men kollej uchun stipendiya olsam bo‘ladi”, deb o‘yladi u.","note":"maybe — balki; scholarship — stipendiya; get a scholarship — stipendiya olmoq; think → thought — o‘ylamoq."},

  {"num":8,"time":"00:00:21,500 --> 00:00:25,179","english":"I could learn mathematical formulas and get a job at a bank.","transcription":"ˈaɪ kʊd ˈlɜːrn ˌmæθəˈmætɪkəl ˈfɔːrmjələz ænd ˈɡet ə ˈdʒɑːb æt ə ˈbæŋk","parts":[["I could learn","Men o‘rganishim mumkin edi"],["mathematical formulas","matematik formulalarni"],["and get a job","va ish topishim"],["at a bank.","bankda."]],"uzbekFull":"Men matematik formulalarni o‘rganib, bankda ish topishim mumkin edi.","note":"could — mumkin edi; mathematical — matematik; formula — formula; get a job — ish topmoq."},

  {"num":9,"time":"00:00:25,740 --> 00:00:27,699","english":"I could help clients invest their money.","transcription":"ˈaɪ kʊd ˈhelp ˈklaɪənts ˌɪnˈvest ðer ˈmʌni","parts":[["I could help clients","Men mijozlarga yordam bera olardim"],["invest their money.","pullarini investitsiya qilishga."]],"uzbekFull":"Men mijozlarga pullarini investitsiya qilishga yordam bera olardim.","note":"client — mijoz; help someone do — birovga biror ish qilishga yordam bermoq; invest — investitsiya qilmoq."},

  {"num":10,"time":"00:00:27,699 --> 00:00:30,320","english":"Peter stopped to pick up a passenger.","transcription":"ˈpiːtər ˈstɑːpt tə ˈpɪk ˈʌp ə ˈpæsəndʒər","parts":[["Peter stopped","Peter to‘xtadi"],["to pick up","olib ketish uchun"],["a passenger.","bir yo‘lovchini."]],"uzbekFull":"Peter bir yo‘lovchini olib ketish uchun to‘xtadi.","note":"stop to do — biror ish qilish uchun to‘xtamoq; pick up — olib ketmoq / mashinaga olmoq; passenger — yo‘lovchi."},

  {"num":11,"time":"00:00:31,320 --> 00:00:32,960","english":"Where to? he asked.","transcription":"ˈwer tə hi ˈæskt","parts":[["Where to?","Qayerga?"],["he asked.","deb so‘radi u."]],"uzbekFull":"“Qayerga?” deb so‘radi u.","note":"Where to? — Qayerga?; yo‘lovchi qayerga borishini so‘rashda ishlatiladigan qisqa ibora."},

  {"num":12,"time":"00:00:33,899 --> 00:00:36,640","english":"Go to the Fourth Street Bank, and don't talk to me.","transcription":"ˈɡoʊ tə ðə ˈfɔːrθ ˈstriːt ˈbæŋk ænd ˈdoʊnt ˈtɔːk tə ˈmiː","parts":[["Go to the Fourth Street Bank,","Fourth Street Bankka boring,"],["and don't talk to me.","va men bilan gaplashmang."]],"uzbekFull":"“Fourth Street Bankka boring va men bilan gaplashmang.”","note":"go to — ...ga bormoq; don't + V — ...ma; talk to — ... bilan gaplashmoq."},

  {"num":13,"time":"00:00:37,159 --> 00:00:39,420","english":"I've had a rough day, the man said.","transcription":"ˈaɪv hæd ə ˈrʌf ˈdeɪ ðə ˈmæn ˈsed","parts":[["I've had a rough day,","Men og‘ir kunni boshdan kechirdim,"],["the man said.","dedi u odam."]],"uzbekFull":"“Men og‘ir kunni boshdan kechirdim”, dedi odam.","note":"I've had = I have had — boshdan kechirdim; rough day — og‘ir/qiyin kun; have had — Present Perfect."},

  {"num":14,"time":"00:00:40,259 --> 00:00:43,240","english":"Peter was angry, but he had a peaceful philosophy.","transcription":"ˈpiːtər wəz ˈæŋɡri bət hi hæd ə ˈpiːsfəl fəˈlɑːsəfi","parts":[["Peter was angry,","Peterning jahli chiqdi,"],["but he had","ammo uning bor edi"],["a peaceful philosophy.","tinch falsafasi."]],"uzbekFull":"Peterning jahli chiqdi, ammo u tinchliksevar qarashga ega edi.","note":"angry — jahli chiqqan; peaceful — tinch, osoyishta; philosophy — falsafa, hayotiy qarash."},

  {"num":15,"time":"00:00:44,379 --> 00:00:47,500","english":"When they stopped, the man's fare came to $10.25.","transcription":"ˈwen ˈðeɪ ˈstɑːpt ðə ˈmænz ˈfer ˈkeɪm tə","parts":[["When they stopped,","Ular to‘xtaganida,"],["the man's fare","odamning yo‘l haqi"],["came to $10.25.","10,25 dollar bo‘ldi."]],"uzbekFull":"Ular to‘xtaganida, odamning yo‘l haqi 10,25 dollar bo‘ldi.","note":"fare — yo‘l haqi; come to — jami ... bo‘lmoq; when — ...ganda."},

  {"num":16,"time":"00:00:48,320 --> 00:00:50,019","english":"He put his hands in his pockets.","transcription":"hi ˈpʊt hɪz ˈhændz ɪn hɪz ˈpɑːkəts","parts":[["He put his hands","U qo‘llarini soldi"],["in his pockets.","cho‘ntaklariga."]],"uzbekFull":"U qo‘llarini cho‘ntaklariga soldi.","note":"put — solmoq, qo‘ymoq; pocket — cho‘ntak."},

  {"num":17,"time":"00:00:50,780 --> 00:00:53,460","english":"I can't find my wallet, he said.","transcription":"ˈaɪ ˈkænt ˈfaɪnd ˈmaɪ ˈwɔːlət hi ˈsed","parts":[["I can't find","Men topa olmayapman"],["my wallet,","hamyonimni,"],["he said.","dedi u."]],"uzbekFull":"“Hamyonimni topa olmayapman”, dedi u.","note":"can't find — topa olmaslik; wallet — hamyon; find — topmoq."},

  {"num":18,"time":"00:00:53,679 --> 00:00:55,239","english":"I can't pay the fare.","transcription":"ˈaɪ ˈkænt ˈpeɪ ðə ˈfer","parts":[["I can't pay","Men to‘lay olmayman"],["the fare.","yo‘l haqini."]],"uzbekFull":"Men yo‘l haqini to‘lay olmayman.","note":"pay — to‘lamoq; fare — yo‘l haqi; can't — qila olmayman."},

  {"num":19,"time":"00:00:55,240 --> 00:00:56,900","english":"Peter said","transcription":"ˈpiːtər ˈsed","parts":[["Peter said","Peter dedi"]],"uzbekFull":"Peter dedi:","note":"say → said — aytmoq."},

  {"num":20,"time":"00:00:56,900 --> 00:00:59,280","english":"maybe I'll give you a temporary loan","transcription":"ˈmeɪbi ˈaɪl ˈɡɪv juː ə ˈtempərˌeri ˈloʊn","parts":[["maybe","balki"],["I'll give you","men sizga berarman"],["a temporary loan","vaqtinchalik qarz"]],"uzbekFull":"“Balki sizga vaqtinchalik qarz berarman.”","note":"maybe — balki; temporary — vaqtinchalik; loan — qarz; give a loan — qarz bermoq."},

  {"num":21,"time":"00:00:59,280 --> 00:01:02,219","english":"you can borrow ten dollars and a quarter for me","transcription":"juː kən ˈbɑːrˌoʊ ˈten ˈdɑːlərz ænd ə ˈkwɔːrtər fər ˈmiː","parts":[["you can borrow","siz qarz olishingiz mumkin"],["ten dollars and a quarter","o‘n dollar-u yigirma besh sent"],["for me","mendan"]],"uzbekFull":"“Siz mendan o‘n dollar-u yigirma besh sent qarz olishingiz mumkin.”","note":"borrow — qarz olmoq; lend — qarz bermoq. SRTdagi “for me” iborasi ma’no jihatdan “from me” bo‘lishi kutilgandek ko‘rinadi, lekin matn aynan saqlandi."},

  {"num":22,"time":"00:01:02,219 --> 00:01:04,620","english":"the man was embarrassed saying","transcription":"ðə ˈmæn wəz ɪmˈberəst ˈseɪɪŋ","parts":[["the man was embarrassed","odam uyaldi"],["saying","deya"]],"uzbekFull":"Odam uyalib, dedi:","note":"embarrassed — uyalgan, noqulay holatda qolgan; saying — deb, aytib."},

  {"num":23,"time":"00:01:04,620 --> 00:01:06,060","english":"I was mean to you","transcription":"ˈaɪ wəz ˈmiːn tə juː","parts":[["I was mean","Men qo‘pol munosabatda bo‘ldim"],["to you","sizga"]],"uzbekFull":"Men sizga qo‘pol munosabatda bo‘ldim.","note":"mean to someone — birovga qo‘pol munosabatda bo‘lmoq; mean — yomon, qo‘pol."},

  {"num":24,"time":"00:01:06,060 --> 00:01:08,020","english":"but now I want to help you","transcription":"bət ˈnaʊ ˈaɪ ˈwɑːnt tə ˈhelp juː","parts":[["but now","ammo endi"],["I want to help you","men sizga yordam bermoqchiman"]],"uzbekFull":"Ammo endi men sizga yordam bermoqchiman.","note":"want to — ...moqchi bo‘lmoq; help — yordam bermoq."},

  {"num":25,"time":"00:01:08,020 --> 00:01:09,859","english":"I founded this bank","transcription":"ˈaɪ ˈfaʊndɪd ˈðɪs ˈbæŋk","parts":[["I founded","Men asos solganman"],["this bank","bu bankka"]],"uzbekFull":"Men bu bankka asos solganman.","note":"found — asos solmoq; founded — asos soldi / asos solgan."},

  {"num":26,"time":"00:01:09,859 --> 00:01:12,320","english":"I want to give you one thousand dollars","transcription":"ˈaɪ ˈwɑːnt tə ˈɡɪv juː wʌn ˈθaʊzənd ˈdɑːlərz","parts":[["I want to give you","Men sizga bermoqchiman"],["one thousand dollars","ming dollar"]],"uzbekFull":"Men sizga ming dollar bermoqchiman.","note":"want to give — bermoqchi bo‘lmoq; one thousand — ming."},

  {"num":27,"time":"00:01:12,320 --> 00:01:15,579","english":"that much money was like a treasure to Peter","transcription":"ðæt ˈmʌtʃ ˈmʌni wəz ˈlaɪk ə ˈtreʒər tə ˈpiːtər","parts":[["that much money","shuncha pul"],["was like a treasure","xazinaga o‘xshardi"],["to Peter","Peter uchun"]],"uzbekFull":"Shuncha pul Peter uchun xazinadek edi.","note":"that much — shuncha; treasure — xazina; be like — ...ga o‘xshamoq."},

  {"num":28,"time":"00:01:15,579 --> 00:01:17,840","english":"the man urged him to take the money","transcription":"ðə ˈmæn ˈɜːrdʒd ˈhɪm tə ˈteɪk ðə ˈmʌni","parts":[["the man urged him","odam uni undadi"],["to take the money","pulni olishga"]],"uzbekFull":"Odam uni pulni olishga undadi.","note":"urge someone to do — birovni biror ish qilishga undamoq; take — olmoq."},

  {"num":29,"time":"00:01:17,840 --> 00:01:18,879","english":"but he didn't","transcription":"bət hi ˈdɪdənt","parts":[["but","ammo"],["he didn't.","u bunday qilmadi."]],"uzbekFull":"Ammo u bunday qilmadi.","note":"didn't = did not — o‘tgan zamon inkori; oldingi fe’lni takrorlamaslik uchun ishlatilishi mumkin."},

  {"num":30,"time":"00:01:18,879 --> 00:01:20,760","english":"you're an honest person","transcription":"ˈjʊr ən ˈɑːnəst ˈpɜːrsən","parts":[["you're","siz ...siz"],["an honest person","halol odamsiz"]],"uzbekFull":"Siz halol odamsiz.","note":"honest — halol; person — odam; you're = you are."},

  {"num":31,"time":"00:01:20,760 --> 00:01:21,879","english":"the man said","transcription":"ðə ˈmæn ˈsed","parts":[["the man said","odam dedi"]],"uzbekFull":"Odam dedi:","note":"say → said — aytmoq."},

  {"num":32,"time":"00:01:21,879 --> 00:01:23,760","english":"I assumed you would take it","transcription":"ˈaɪ əˈsuːmd juː wʊd ˈteɪk ɪt","parts":[["I assumed","Men shunday deb o‘ylagandim"],["you would take it","siz uni olasiz deb"]],"uzbekFull":"Men siz uni olasiz deb o‘ylagandim.","note":"assume — deb hisoblamoq, taxmin qilmoq; would — o‘tmishdagi fikrdan kelib chiqqan kelasi zamon."},

  {"num":33,"time":"00:01:24,500 --> 00:01:25,640","english":"I want you to work for me.","transcription":"ˈaɪ ˈwɑːnt juː tə ˈwɜːrk fər ˈmiː","parts":[["I want you","Men sizni xohlayman"],["to work for me.","men uchun ishlashingizni."]],"uzbekFull":"Men sizning men uchun ishlashingizni xohlayman.","note":"want someone to do — birovning biror ish qilishini xohlamoq; work for — ... uchun ishlamoq."},

  {"num":34,"time":"00:01:26,579 --> 00:01:29,180","english":"The next day, Peter started his job at the bank.","transcription":"ðə ˈnekst ˈdeɪ ˈpiːtər ˈstɑːrtɪd hɪz ˈdʒɑːb æt ðə ˈbæŋk","parts":[["The next day,","Ertasi kuni,"],["Peter started his job","Peter ishini boshladi"],["at the bank.","bankda."]],"uzbekFull":"Ertasi kuni Peter bankdagi ishini boshladi.","note":"the next day — ertasi kuni; start a job — ish boshlamoq."},

  {"num":35,"time":"00:01:29,980 --> 00:01:32,000","english":"He was happy to be done with his former job.","transcription":"hi wəz ˈhæpi tə bi ˈdʌn wɪð hɪz ˈfɔːrmər ˈdʒɑːb","parts":[["He was happy","U xursand edi"],["to be done with","...dan qutulganidan / tugatganidan"],["his former job.","oldingi ishini."]],"uzbekFull":"U oldingi ishini tugatganidan xursand edi.","note":"be done with — biror ishni tugatmoq / undan qutulmoq; former — oldingi, avvalgi; happy — xursand."}
];

if (typeof module !== "undefined" && module.exports) {
  module.exports = lessons;
}
