const lessons = [
  {"num":1,"time":"00:00:01,000 --> 00:00:02,120","english":"The Fisherman","transcription":"ðə ˈfɪʃərˌmæn","parts":[["The Fisherman","Baliqchi"]],"uzbekFull":"Baliqchi.","note":"fisherman — baliqchi; fish — baliq."},

  {"num":2,"time":"00:00:02,120 --> 00:00:06,140","english":"Every day, a fisherman sat on a bridge.","transcription":"ˈevəri ˈdeɪ ə ˈfɪʃərˌmæn ˈsæt ɑːn ə ˈbrɪdʒ","parts":[["Every day,","Har kuni,"],["a fisherman sat","baliqchi o‘tirardi"],["on a bridge.","ko‘prik ustida."]],"uzbekFull":"Har kuni baliqchi ko‘prik ustida o‘tirardi.","note":"every day — har kuni; sit → sat — o‘tirmoq; bridge — ko‘prik."},

  {"num":3,"time":"00:00:07,219 --> 00:00:09,859","english":"He ate apples and spit the seeds into the water.","transcription":"hi ˈeɪt ˈæpəlz ænd ˈspɪt ðə ˈsiːdz ˈɪntu ðə ˈwɔːtər","parts":[["He ate apples","U olmalarni yedi"],["and spit the seeds","va urug‘larini tupurdi"],["into the water.","suvga."]],"uzbekFull":"U olmalarni yedi va urug‘larini suvga tupurdi.","note":"eat → ate — yemoq; spit — tuflamoq; seed — urug‘; into — ichiga."},

  {"num":4,"time":"00:00:10,919 --> 00:00:12,640","english":"He had a simple way to catch fish.","transcription":"hi hæd ə ˈsɪmpəl ˈweɪ tə ˈkætʃ ˈfɪʃ","parts":[["He had","Unga bor edi"],["a simple way","oddiy usul"],["to catch fish.","baliq tutish uchun."]],"uzbekFull":"Uning baliq tutish uchun oddiy usuli bor edi.","note":"simple — oddiy; way — usul; catch fish — baliq tutmoq."},

  {"num":5,"time":"00:00:13,320 --> 00:00:16,600","english":"He cut a branch off of a tree and tied a line to it.","transcription":"hi ˈkʌt ə ˈbræntʃ ˈɔːf əv ə ˈtriː ænd ˈtaɪd ə ˈlaɪn tə ɪt","parts":[["He cut a branch off","U bir shoxni kesib oldi"],["of a tree","daraxtdan"],["and tied a line to it.","va unga ip bog‘ladi."]],"uzbekFull":"U daraxtdan bir shoxni kesib oldi va unga ip bog‘ladi.","note":"cut — kesmoq; branch — shox; cut off — kesib olmoq; tie — bog‘lamoq; line — ip, leska."},

  {"num":6,"time":"00:00:17,539 --> 00:00:20,120","english":"He put a sharp hook on it and made a tight knot.","transcription":"hi ˈpʊt ə ˈʃɑːrp ˈhʊk ɑːn ɪt ænd ˈmeɪd ə ˈtaɪt ˈnɑːt","parts":[["He put a sharp hook","U o‘tkir ilgak qo‘ydi"],["on it","unga"],["and made a tight knot.","va mahkam tugun bog‘ladi."]],"uzbekFull":"U unga o‘tkir ilgak qo‘ydi va mahkam tugun bog‘ladi.","note":"sharp — o‘tkir; hook — ilgak; tight — mahkam; knot — tugun; make a knot — tugun bog‘lamoq."},

  {"num":7,"time":"00:00:21,000 --> 00:00:21,879","english":"Then he whispered,","transcription":"ˈðen hi ˈwɪspərd","parts":[["Then","Keyin"],["he whispered,","u pichirladi:"]],"uzbekFull":"Keyin u pichirladi:","note":"whisper — pichirlamoq."},

  {"num":8,"time":"00:00:22,219 --> 00:00:23,440","english":"Come here, fish.","transcription":"ˈkʌm ˈhiːr ˈfɪʃ","parts":[["Come here","Bu yoqqa kel"],["fish.","baliq."]],"uzbekFull":"“Bu yoqqa kel, baliq.”","note":"come here — bu yoqqa kel; here — bu yerga."},

  {"num":9,"time":"00:00:24,179 --> 00:00:26,740","english":"Like magic, the fish bit the hook.","transcription":"ˈlaɪk ˈmædʒɪk ðə ˈfɪʃ ˈbɪt ðə ˈhʊk","parts":[["Like magic,","Go‘yo sehr bilan,"],["the fish bit","baliq tishladi"],["the hook.","ilgakni."]],"uzbekFull":"Go‘yo sehr bilan, baliq ilgakni tishladi.","note":"like magic — go‘yo sehr bilan; bite → bit — tishlamoq; hook — ilgak."},

  {"num":10,"time":"00:00:27,719 --> 00:00:32,019","english":"He put them in a big net and took them home to make big pots of fish soup from them.","transcription":"hi ˈpʊt ðem ɪn ə ˈbɪɡ ˈnet ænd ˈtʊk ðem ˈhoʊm tə ˈmeɪk ˈbɪɡ ˈpɑːts əv ˈfɪʃ ˈsuːp frəm ðem","parts":[["He put them","U ularni soldi"],["in a big net","katta to‘rga"],["and took them home","va ularni uyiga olib ketdi"],["to make big pots of fish soup","katta qozonlarda baliq sho‘rvasi tayyorlash uchun"],["from them.","ulardan."]],"uzbekFull":"U ularni katta to‘rga soldi va ulardan katta qozonlarda baliq sho‘rvasi tayyorlash uchun uyiga olib ketdi.","note":"net — to‘r; take home — uyga olib ketmoq; make soup — sho‘rva tayyorlamoq; pot — qozon."},

  {"num":11,"time":"00:00:33,039 --> 00:00:35,579","english":"One day, another man walked up to him.","transcription":"wʌn ˈdeɪ əˈnʌðər ˈmæn ˈwɔːkt ˈʌp tə ˈhɪm","parts":[["One day,","Bir kuni,"],["another man","boshqa bir kishi"],["walked up to him.","uning oldiga yurib keldi."]],"uzbekFull":"Bir kuni boshqa bir kishi uning oldiga yurib keldi.","note":"another — boshqa bir; walk up to — oldiga yurib bormoq."},

  {"num":12,"time":"00:00:36,140 --> 00:00:36,539","english":"He said,","transcription":"hi ˈsed","parts":[["He said,","U dedi:"]],"uzbekFull":"U dedi:","note":"say → said — aytmoq."},

  {"num":13,"time":"00:00:37,119 --> 00:00:38,039","english":"My name is George.","transcription":"ˈmaɪ ˈneɪm ɪz ˈdʒɔːrdʒ","parts":[["My name is","Mening ismim"],["George.","George."]],"uzbekFull":"Mening ismim George.","note":"my name is — mening ismim."},

  {"num":14,"time":"00:00:38,579 --> 00:00:40,019","english":"I am staying at the inn.","transcription":"ˈaɪ æm ˈsteɪɪŋ æt ðə ˈɪn","parts":[["I am staying","Men qolib turibman"],["at the inn.","mehmonxonada."]],"uzbekFull":"Men mehmonxonada qolib turibman.","note":"stay — qolmoq; inn — kichik mehmonxona, karvonsaroy."},

  {"num":15,"time":"00:00:40,939 --> 00:00:43,079","english":"I bet that I am a better fisherman than you.","transcription":"ˈaɪ ˈbet ðæt ˈaɪ æm ə ˈbetər ˈfɪʃərˌmæn ðæn juː","parts":[["I bet that","Men bahslashamanki"],["I am a better fisherman","men yaxshiroq baliqchiman"],["than you.","sizdan."]],"uzbekFull":"Men sizdan yaxshiroq baliqchiman, deb bahslashaman.","note":"I bet — garov o‘ynayman / ishonchim komil; better than — ...dan yaxshiroq; than — ...dan."},

  {"num":16,"time":"00:00:43,820 --> 00:00:45,399","english":"I will accompany you today.","transcription":"ˈaɪ wɪl əˈkʌmpəni juː təˈdeɪ","parts":[["I will accompany you","Men sizga hamroh bo‘laman"],["today.","bugun."]],"uzbekFull":"Men bugun sizga hamroh bo‘laman.","note":"accompany — hamroh bo‘lmoq, birga bormoq; will — kelasi zamon."},

  {"num":17,"time":"00:00:46,219 --> 00:00:47,899","english":"I dare you to prove your skill.","transcription":"ˈaɪ ˈder juː tə ˈpruːv jʊr ˈskɪl","parts":[["I dare you","Men sizni jur’atlantiraman"],["to prove your skill.","mahoratingizni isbotlashga."]],"uzbekFull":"Men sizni mahoratingizni isbotlashga chaqiraman.","note":"dare someone to do — birovni biror ish qilishga jur’atlantirmoq / chaqirmoq; prove — isbotlamoq; skill — mahorat."},

  {"num":18,"time":"00:00:48,859 --> 00:00:50,560","english":"The fisherman cast his line.","transcription":"ðə ˈfɪʃərˌmæn ˈkæst hɪz ˈlaɪn","parts":[["The fisherman","Baliqchi"],["cast his line.","ipini suvga tashladi."]],"uzbekFull":"Baliqchi ipini suvga tashladi.","note":"cast a line — qarmoq ipini suvga tashlamoq; cast — tashlamoq."},

  {"num":19,"time":"00:00:51,459 --> 00:00:53,579","english":"George had a lot of electronic tools.","transcription":"ˈdʒɔːrdʒ hæd ə ˈlɑːt əv ˌɪˌlekˈtrɑːnɪk ˈtuːlz","parts":[["George had","Georgeda bor edi"],["a lot of electronic tools.","ko‘plab elektron asboblar."]],"uzbekFull":"Georgeda ko‘plab elektron asboblar bor edi.","note":"electronic — elektron; tool — asbob, vosita; a lot of — ko‘p."},

  {"num":20,"time":"00:00:53,579 --> 00:00:57,359","english":"One machine gave him the virtual locations of fish.","transcription":"wʌn məˈʃiːn ˈɡeɪv ˈhɪm ðə ˈvɜːrtʃuːəl loʊˈkeɪʃənz əv ˈfɪʃ","parts":[["One machine gave him","Bir mashina unga ko‘rsatdi"],["the virtual locations","virtual joylashuvlarni"],["of fish.","baliqlarning."]],"uzbekFull":"Bir mashina unga baliqlarning virtual joylashuvlarini ko‘rsatdi.","note":"machine — mashina, qurilma; virtual — virtual; location — joylashuv."},

  {"num":21,"time":"00:00:58,179 --> 00:00:59,799","english":"His rod weighed fish.","transcription":"hɪz ˈrɑːd ˈweɪd ˈfɪʃ","parts":[["His rod","Uning qarmog‘i"],["weighed fish.","baliqlarni o‘lchadi."]],"uzbekFull":"Uning qarmog‘i baliqlarni o‘lchadi.","note":"rod — qarmoq; weigh — vaznini o‘lchamoq."},

  {"num":22,"time":"00:01:00,839 --> 00:01:05,079","english":"At the end of the day, George subtracted his fish from the fisherman's.","transcription":"æt ðə ˈend əv ðə ˈdeɪ ˈdʒɔːrdʒ səbˈtræktɪd hɪz ˈfɪʃ frəm ðə ˈfɪʃərmənz","parts":[["At the end of the day,","Kun oxirida,"],["George subtracted","George ayirdi"],["his fish from the fisherman's.","o‘z baliqlarini baliqchinikidan."]],"uzbekFull":"Kun oxirida George o‘z baliqlari sonini baliqchinikidan ayirdi.","note":"at the end of the day — kun oxirida; subtract — ayirmoq; from — ...dan."},

  {"num":23,"time":"00:01:05,739 --> 00:01:07,980","english":"The fisherman had beaten him by 47.","transcription":"ðə ˈfɪʃərˌmæn hæd ˈbiːtən ˈhɪm ˈbaɪ","parts":[["The fisherman had beaten him","Baliqchi uni yutgan edi"],["by 47.","47 taga."]],"uzbekFull":"Baliqchi uni 47 ta farq bilan yutgan edi.","note":"beat → beaten — yutmoq, mag‘lub etmoq; by 47 — 47 taga farq bilan."},

  {"num":24,"time":"00:01:09,299 --> 00:01:10,060","english":"George asked,","transcription":"ˈdʒɔːrdʒ ˈæskt","parts":[["George asked,","George so‘radi:"]],"uzbekFull":"George so‘radi:","note":"ask — so‘ramoq."},

  {"num":25,"time":"00:01:10,519 --> 00:01:13,539","english":"How do you catch fish with only a branch and a bare line?","transcription":"ˈhaʊ duː juː ˈkætʃ ˈfɪʃ wɪð ˈoʊnli ə ˈbræntʃ ænd ə ˈber ˈlaɪn","parts":[["How do you catch fish","Qanday qilib baliq tutasiz"],["with only a branch","faqat bir shox bilan"],["and a bare line?","va oddiy yalang‘och ip bilan?"]],"uzbekFull":"Qanday qilib faqat bir shox va oddiy ip bilan baliq tutasiz?","note":"how do — qanday qilib ...; only — faqat; branch — shox; bare — oddiy, hech narsasiz; line — ip."},

  {"num":26,"time":"00:01:14,079 --> 00:01:16,180","english":"I have many different sorts of tools.","transcription":"ˈaɪ hæv ˈmeni ˈdɪfərənt ˈsɔːrts əv ˈtuːlz","parts":[["I have","Menda bor"],["many different sorts","ko‘plab turli xil"],["of tools.","asboblar."]],"uzbekFull":"Menda ko‘plab turli xil asboblar bor.","note":"different sorts of — turli xil; sort — tur, xil; tool — asbob."},

  {"num":27,"time":"00:01:17,019 --> 00:01:18,539","english":"The fisherman told George,","transcription":"ðə ˈfɪʃərˌmæn ˈtoʊld ˈdʒɔːrdʒ","parts":[["The fisherman told George,","Baliqchi Georgga dedi:"]],"uzbekFull":"Baliqchi Georgga dedi:","note":"tell someone — birovga aytmoq; tell → told — aytmoq."},

  {"num":28,"time":"00:01:19,239 --> 00:01:20,480","english":"My philosophy is simple.","transcription":"ˈmaɪ fəˈlɑːsəfi ɪz ˈsɪmpəl","parts":[["My philosophy","Mening falsafam"],["is simple.","oddiy."]],"uzbekFull":"Mening falsafam oddiy.","note":"philosophy — falsafa, hayotga qarash; simple — oddiy."},

  {"num":29,"time":"00:01:20,480 --> 00:01:23,420","english":"I am patient and I believe in myself.","transcription":"ˈaɪ æm ˈpeɪʃənt ænd ˈaɪ bɪˈliːv ɪn ˌmaɪˈself","parts":[["I am patient","Men sabrliman"],["and I believe in myself.","va o‘zimga ishonaman."]],"uzbekFull":"Men sabrliman va o‘zimga ishonaman.","note":"patient — sabrli; believe in yourself — o‘ziga ishonmoq; myself — o‘zim."},

  {"num":30,"time":"00:01:23,579 --> 00:01:26,179","english":"Take a breath and try it my way.","transcription":"ˈteɪk ə ˈbreθ ænd ˈtraɪ ɪt ˈmaɪ ˈweɪ","parts":[["Take a breath","Nafas oling"],["and try it","va buni sinab ko‘ring"],["my way.","mening usulimda."]],"uzbekFull":"Nafas oling va buni mening usulimda sinab ko‘ring.","note":"take a breath — nafas olmoq; try — sinab ko‘rmoq; my way — mening usulimda."}
];

if (typeof module !== "undefined" && module.exports) {
  module.exports = lessons;
}
