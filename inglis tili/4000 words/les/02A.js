const lessons = [
  {"num":1,"time":"00:00:01,000 --> 00:00:02,220","english":"The Laboratory","transcription":"ðə ˈlæbrətɔːri","parts":[["The Laboratory","Laboratoriya"]],"uzbekFull":"Laboratoriya","note":"laboratory — laboratoriya."},

  {"num":2,"time":"00:00:02,220 --> 00:00:08,120","english":"Mia's father had a laboratory, but she had no idea what was in it.","transcription":"miːəz ˈfɑːðər hæd ə ˈlæbrətɔːri bət ʃiː hæd noʊ aɪˈdiːə wʌt wəz ɪn ɪt","parts":[["Mia's father had","Mianing otasida bor edi"],["a laboratory,","laboratoriya,"],["but she had no idea","ammo u tasavvur ham qilmasdi"],["what was in it.","uning ichida nima borligini."]],"uzbekFull":"Mianing otasida laboratoriya bor edi, ammo u uning ichida nima borligini umuman bilmasdi.","note":"have no idea — umuman bilmaslik; what was in it — uning ichida nima borligi."},

  {"num":3,"time":"00:00:09,040 --> 00:00:12,300","english":"Her dad always closed and locked the door when he went in.","transcription":"hər dæd ˈɔːlweɪz kloʊzd ænd lɑːkt ðə dɔːr wen hiː went ɪn","parts":[["Her dad always closed","Uning otasi har doim yopardi"],["and locked the door","va eshikni qulflardi"],["when he went in.","ichkariga kirganida."]],"uzbekFull":"Uning otasi ichkariga kirganida har doim eshikni yopib, qulflardi.","note":"lock the door — eshikni qulflamoq; go in — ichkariga kirmoq."},

  {"num":4,"time":"00:00:13,060 --> 00:00:16,039","english":"She knew that he used it to do projects for work.","transcription":"ʃiː nuː ðæt hiː juːzd ɪt tə duː ˈprɑːdʒekts fər wɜːrk","parts":[["She knew","U bilardi"],["that he used it","u undan foydalanishini"],["to do projects","loyihalarni qilish uchun"],["for work.","ish uchun."]],"uzbekFull":"U otasi undan ish uchun loyihalar qilishda foydalanishini bilardi.","note":"use something to do — biror narsadan ... qilish uchun foydalanmoq; project — loyiha."},

  {"num":5,"time":"00:00:16,839 --> 00:00:19,440","english":"He never told Mia what these projects were.","transcription":"hiː ˈnevər toʊld miːə wʌt ðiːz ˈprɑːdʒekts wɜːr","parts":[["He never told Mia","U hech qachon Miaga aytmadi"],["what these projects were.","bu loyihalar nima ekanini."]],"uzbekFull":"U hech qachon Miaga bu loyihalar nima ekanini aytmasdi.","note":"tell someone what — birovga nima ekanini aytmoq; never — hech qachon."},

  {"num":6,"time":"00:00:20,760 --> 00:00:24,000","english":"One night, Mia approached the door to the laboratory.","transcription":"wʌn naɪt miːə əˈproʊtʃt ðə dɔːr tə ðə ˈlæbrətɔːri","parts":[["One night,","Bir kecha,"],["Mia approached","Mia yaqinlashdi"],["the door to the laboratory.","laboratoriya eshigiga."]],"uzbekFull":"Bir kecha Mia laboratoriya eshigiga yaqinlashdi.","note":"approach — yaqinlashmoq; door to — ...ga olib boradigan eshik."},

  {"num":7,"time":"00:00:24,800 --> 00:00:26,400","english":"She stopped and thought,","transcription":"ʃiː stɑːpt ænd θɔːt","parts":[["She stopped","U to‘xtadi"],["and thought,","va o‘yladi,"]],"uzbekFull":"U to‘xtadi va o‘yladi:","note":"stop — to‘xtamoq; think → thought — o‘ylamoq."},

  {"num":8,"time":"00:00:26,780 --> 00:00:29,879","english":"I wonder what crazy experiment he is doing now.","transcription":"aɪ ˈwʌndər wʌt ˈkreɪzi ɪkˈsperɪmənt hiː ɪz ˈduːɪŋ naʊ","parts":[["I wonder","Qiziq"],["what crazy experiment","qanday g‘alati tajriba"],["he is doing now.","u hozir qilayotgan ekan."]],"uzbekFull":"“Qiziq, u hozir qanday g‘alati tajriba qilayotgan ekan?”","note":"I wonder — qiziq / bilishni xohlayman; experiment — tajriba."},

  {"num":9,"time":"00:00:30,660 --> 00:00:32,799","english":"Suddenly, she heard a loud noise.","transcription":"ˈsʌdənli ʃiː hɜːrd ə laʊd nɔɪz","parts":[["Suddenly,","To‘satdan,"],["she heard","u eshitdi"],["a loud noise.","baland ovoz."]],"uzbekFull":"To‘satdan u baland ovoz eshitdi.","note":"loud noise — baland ovoz; hear → heard — eshitmoq."},

  {"num":10,"time":"00:00:33,460 --> 00:00:35,399","english":"It sounded like an evil laugh.","transcription":"ɪt ˈsaʊndɪd laɪk ən ˈiːvəl læf","parts":[["It sounded like","Bu ...ga o‘xshardi"],["an evil laugh.","yovuzona kulgiga."]],"uzbekFull":"Bu yovuzona kulgiga o‘xshardi.","note":"sound like — ...ga o‘xshamoq; evil — yovuz; laugh — kulgi."},

  {"num":11,"time":"00:00:36,320 --> 00:00:39,899","english":"The noise scared her, so she walked quickly back to her room.","transcription":"ðə nɔɪz skerd hər soʊ ʃiː wɔːkt ˈkwɪkli bæk tə hər ruːm","parts":[["The noise scared her,","Ovoz uni qo‘rqitdi,"],["so she walked quickly","shuning uchun u tez yurdi"],["back to her room.","xonasi tomon qaytib."]],"uzbekFull":"Ovoz uni qo‘rqitdi, shuning uchun u tezda xonasiga qaytdi.","note":"scare someone — birovni qo‘rqitmoq; walk back — qaytib yurmoq."},

  {"num":12,"time":"00:00:41,120 --> 00:00:43,880","english":"The next night, her friend Liz came to her house.","transcription":"ðə nekst naɪt hər frend lɪz keɪm tə hər haʊs","parts":[["The next night,","Keyingi kecha,"],["her friend Liz came","uning dugonasi Liz keldi"],["to her house.","uning uyiga."]],"uzbekFull":"Keyingi kecha uning dugonasi Liz uning uyiga keldi.","note":"the next night — keyingi kecha; come to — ...ga kelmoq."},

  {"num":13,"time":"00:00:44,859 --> 00:00:47,939","english":"When Liz arrived, Mia told her about the night before.","transcription":"wen lɪz əˈraɪvd miːə toʊld hər əˈbaʊt ðə naɪt bɪˈfɔːr","parts":[["When Liz arrived,","Liz kelganida,"],["Mia told her","Mia unga aytib berdi"],["about the night before.","oldingi kecha haqida."]],"uzbekFull":"Liz kelganida, Mia unga oldingi kecha haqida aytib berdi.","note":"arrive — yetib kelmoq; the night before — oldingi kecha."},

  {"num":14,"time":"00:00:48,799 --> 00:00:51,519","english":"Oh, it was terrible, she said.","transcription":"oʊ ɪt wəz ˈterəbəl ʃiː sed","parts":[["Oh, it was terrible,","Voy, bu dahshatli edi,"],["she said.","dedi u."]],"uzbekFull":"“Voy, bu dahshatli edi”, dedi u.","note":"terrible — dahshatli."},

  {"num":15,"time":"00:00:52,379 --> 00:00:55,579","english":"Why don't we see what is in there? Liz asked.","transcription":"waɪ doʊnt wiː siː wʌt ɪz ɪn ðer lɪz æskt","parts":[["Why don't we","Nega biz ... qilmaymiz"],["see what is in there?","u yerda nima borligini ko‘rmaymiz?"],["Liz asked.","deb so‘radi Liz."]],"uzbekFull":"“Nega u yerda nima borligini ko‘rmaymiz?” deb so‘radi Liz.","note":"Why don't we...? — Nega ... qilmaymiz?; in there — u yerda/ichkarida."},

  {"num":16,"time":"00:00:56,159 --> 00:00:57,960","english":"It will be a fun adventure.","transcription":"ɪt wɪl biː ə fʌn ədˈventʃər","parts":[["It will be","Bu bo‘ladi"],["a fun adventure.","qiziqarli sarguzasht."]],"uzbekFull":"“Bu qiziqarli sarguzasht bo‘ladi.”","note":"fun — qiziqarli, maroqli; adventure — sarguzasht."},

  {"num":17,"time":"00:00:57,960 --> 00:01:03,579","english":"Mia felt nervous about going into her father's laboratory, but she agreed.","transcription":"miːə felt ˈnɜːrvəs əˈbaʊt ˈɡoʊɪŋ ˈɪntuː hər ˈfɑːðərz ˈlæbrətɔːri bət ʃiː əˈɡriːd","parts":[["Mia felt nervous","Mia asabiylashdi"],["about going into","...ga kirish haqida"],["her father's laboratory,","otasining laboratoriyasiga,"],["but she agreed.","ammo u rozi bo‘ldi."]],"uzbekFull":"Mia otasining laboratoriyasiga kirishdan xavotirlandi, ammo rozi bo‘ldi.","note":"feel nervous about — ...dan xavotirlanmoq; agree — rozi bo‘lmoq."},

  {"num":18,"time":"00:01:04,480 --> 00:01:06,359","english":"As always, the door was locked.","transcription":"æz ˈɔːlweɪz ðə dɔːr wəz lɑːkt","parts":[["As always,","Har doimgidek,"],["the door was locked.","eshik qulflangan edi."]],"uzbekFull":"Har doimgidek, eshik qulflangan edi.","note":"as always — har doimgidek; be locked — qulflangan bo‘lmoq."},

  {"num":19,"time":"00:01:07,200 --> 00:01:10,480","english":"They waited until Mia's father left the laboratory to eat dinner.","transcription":"ðeɪ ˈweɪtɪd ənˈtɪl miːəz ˈfɑːðər left ðə ˈlæbrətɔːri tə iːt ˈdɪnər","parts":[["They waited until","Ular ...gacha kutishdi"],["Mia's father left","Mianing otasi chiqib ketguncha"],["the laboratory","laboratoriyadan"],["to eat dinner.","kechki ovqat yeyish uchun."]],"uzbekFull":"Ular Mianing otasi kechki ovqat yeyish uchun laboratoriyadan chiqib ketguncha kutishdi.","note":"wait until — ...gacha kutmoq; leave — chiqib ketmoq."},

  {"num":20,"time":"00:01:11,260 --> 00:01:13,900","english":"He didn't lock the door, Liz said.","transcription":"hiː ˈdɪdənt lɑːk ðə dɔːr lɪz sed","parts":[["He didn't lock","U qulflamadi"],["the door,","eshikni,"],["Liz said.","dedi Liz."]],"uzbekFull":"“U eshikni qulflamabdi”, dedi Liz.","note":"didn't + verb — o‘tgan zamondagi inkor."},

  {"num":21,"time":"00:01:14,299 --> 00:01:14,960","english":"Let's go.","transcription":"lets ɡoʊ","parts":[["Let's go.","Ketdik."]],"uzbekFull":"“Ketdik.”","note":"Let's — keling / ...lik; go — bormoq, ketmoq."},

  {"num":22,"time":"00:01:15,859 --> 00:01:17,200","english":"The laboratory was dark.","transcription":"ðə ˈlæbrətɔːri wəz dɑːrk","parts":[["The laboratory","Laboratoriya"],["was dark.","qorong‘i edi."]],"uzbekFull":"Laboratoriya qorong‘i edi.","note":"dark — qorong‘i."},

  {"num":23,"time":"00:01:18,079 --> 00:01:20,159","english":"The girls walked down the stairs carefully.","transcription":"ðə ɡɜːrlz wɔːkt daʊn ðə sterz ˈkerfəli","parts":[["The girls","Qizlar"],["walked down the stairs","zinadan pastga tushishdi"],["carefully.","ehtiyotkorlik bilan."]],"uzbekFull":"Qizlar zinadan ehtiyotkorlik bilan pastga tushishdi.","note":"walk down the stairs — zinadan pastga tushmoq; carefully — ehtiyotkorlik bilan."},

  {"num":24,"time":"00:01:21,240 --> 00:01:23,020","english":"Mia smelled strange chemicals.","transcription":"miːə smeld streɪndʒ ˈkemɪkəlz","parts":[["Mia smelled","Mia hidini sezdi"],["strange chemicals.","g‘alati kimyoviy moddalarni."]],"uzbekFull":"Mia g‘alati kimyoviy moddalarning hidini sezdi.","note":"smell — hidini sezmoq; chemicals — kimyoviy moddalar."},

  {"num":25,"time":"00:01:23,980 --> 00:01:26,319","english":"What terrible thing was her father creating?","transcription":"wʌt ˈterəbəl θɪŋ wəz hər ˈfɑːðər kriˈeɪtɪŋ","parts":[["What terrible thing","Qanday dahshatli narsa"],["was her father creating?","uning otasi yaratayotgan edi?"]],"uzbekFull":"“Otasi qanday dahshatli narsa yaratayotgan edi?”","note":"create — yaratmoq; What ...? — qanday/nima ...?"},

  {"num":26,"time":"00:01:27,319 --> 00:01:29,739","english":"Suddenly, they heard an evil laugh.","transcription":"ˈsʌdənli ðeɪ hɜːrd ən ˈiːvəl læf","parts":[["Suddenly,","To‘satdan,"],["they heard","ular eshitishdi"],["an evil laugh.","yovuzona kulgini."]],"uzbekFull":"To‘satdan ular yovuzona kulgini eshitishdi.","note":"hear — eshitmoq; evil laugh — yovuzona kulgi."},

  {"num":27,"time":"00:01:30,679 --> 00:01:33,639","english":"It was even worse than the one Mia heard the night before.","transcription":"ɪt wəz ˈiːvən wɜːrs ðæn ðə wʌn miːə hɜːrd ðə naɪt bɪˈfɔːr","parts":[["It was even worse","Bu yanada yomonroq edi"],["than the one","o‘shandan ko‘ra"],["Mia heard the night before.","Mia oldingi kecha eshitgan."]],"uzbekFull":"Bu Mia oldingi kecha eshitgan kulgidan ham qo‘rqinchliroq edi.","note":"even worse — yanada yomonroq; than — ...dan ko‘ra."},

  {"num":28,"time":"00:01:34,359 --> 00:01:36,839","english":"What if a monster was going to kill them?","transcription":"wʌt ɪf ə ˈmɑːnstər wəz ˈɡoʊɪŋ tə kɪl ðəm","parts":[["What if","Agar ... bo‘lsa-chi"],["a monster was going to kill them?","bir maxluq ularni o‘ldirmoqchi bo‘lsa?"]],"uzbekFull":"“Agar bir maxluq ularni o‘ldirmoqchi bo‘lsa-chi?”","note":"What if...? — Agar ... bo‘lsa-chi?; be going to — ...moqchi bo‘lmoq."},

  {"num":29,"time":"00:01:37,639 --> 00:01:38,799","english":"Mia had to do something.","transcription":"miːə hæd tə duː ˈsʌmθɪŋ","parts":[["Mia had to","Mia ... qilishi kerak edi"],["do something.","biror narsa qilish."]],"uzbekFull":"Mia biror narsa qilishi kerak edi.","note":"have to — kerak bo‘lmoq; do something — biror narsa qilmoq."},

  {"num":30,"time":"00:01:39,559 --> 00:01:40,599","english":"She shouted for help.","transcription":"ʃiː ˈʃaʊtɪd fər help","parts":[["She shouted","U baqirdi"],["for help.","yordam so‘rab."]],"uzbekFull":"U yordam so‘rab baqirdi.","note":"shout for help — yordam so‘rab baqirmoq."},

  {"num":31,"time":"00:01:41,399 --> 00:01:43,919","english":"Mia's father ran into the room and turned on the lights.","transcription":"miːəz ˈfɑːðər ræn ˈɪntuː ðə ruːm ænd tɜːrnd ɑːn ðə laɪts","parts":[["Mia's father ran into the room","Mianing otasi xonaga yugurib kirdi"],["and turned on","va yoqdi"],["the lights.","chiroqlarni."]],"uzbekFull":"Mianing otasi xonaga yugurib kirdi va chiroqlarni yoqdi.","note":"run into — yugurib kirmoq; turn on — yoqmoq."},

  {"num":32,"time":"00:01:44,639 --> 00:01:46,479","english":"Oh, no, he said.","transcription":"oʊ noʊ hiː sed","parts":[["Oh, no,","Voy, yo‘q,"],["he said.","dedi u."]],"uzbekFull":"“Voy, yo‘q”, dedi u.","note":"Oh, no! — Voy, yo‘q!"},

  {"num":33,"time":"00:01:46,839 --> 00:01:48,819","english":"You must have learned my secret.","transcription":"juː mʌst həv lɜːrnd maɪ ˈsiːkrət","parts":[["You must have learned","Siz bilib olgan bo‘lsangiz kerak"],["my secret.","mening sirimni."]],"uzbekFull":"“Siz mening sirimni bilib olgan bo‘lsangiz kerak.”","note":"must have + V3 — ... qilgan bo‘lsangiz kerak; secret — sir."},

  {"num":34,"time":"00:01:49,339 --> 00:01:52,739","english":"Your monster tried to kill us, Mia said.","transcription":"jʊr ˈmɑːnstər traɪd tə kɪl ʌs miːə sed","parts":[["Your monster","Sizning maxluqingiz"],["tried to kill us,","bizni o‘ldirishga harakat qildi,"],["Mia said.","dedi Mia."]],"uzbekFull":"“Sizning maxluqingiz bizni o‘ldirishga harakat qildi”, dedi Mia.","note":"try to do — ... qilishga harakat qilmoq; monster — maxluq."},

  {"num":35,"time":"00:01:53,500 --> 00:01:55,519","english":"Monster? he asked.","transcription":"ˈmɑːnstər hiː æskt","parts":[["Monster?","Maxluq?"],["he asked.","deb so‘radi u."]],"uzbekFull":"“Maxluq?” deb so‘radi u.","note":"ask — so‘ramoq."},

  {"num":36,"time":"00:01:56,179 --> 00:01:57,060","english":"You mean this?","transcription":"juː miːn ðɪs","parts":[["You mean","Siz ...ni nazarda tutyapsiz"],["this?","buni?"]],"uzbekFull":"“Buni nazarda tutyapsizmi?”","note":"mean — nazarda tutmoq; You mean...? — ...ni nazarda tutyapsizmi?"},

  {"num":37,"time":"00:01:57,700 --> 00:01:59,579","english":"He had a pretty doll in his hands.","transcription":"hiː hæd ə ˈprɪti dɑːl ɪn hɪz hændz","parts":[["He had","U ushlab turardi"],["a pretty doll","chiroyli qo‘g‘irchoqni"],["in his hands.","qo‘llarida."]],"uzbekFull":"U qo‘llarida chiroyli qo‘g‘irchoqni ushlab turardi.","note":"pretty — chiroyli; in one's hands — qo‘lida."},

  {"num":38,"time":"00:02:00,459 --> 00:02:01,280","english":"The doll laughed.","transcription":"ðə dɑːl læft","parts":[["The doll","Qo‘g‘irchoq"],["laughed.","kuldi."]],"uzbekFull":"Qo‘g‘irchoq kuldi.","note":"laugh — kulmoq."},

  {"num":39,"time":"00:02:01,920 --> 00:02:04,359","english":"The laugh didn't sound so evil anymore.","transcription":"ðə læf ˈdɪdənt saʊnd soʊ ˈiːvəl ˌeniˈmɔːr","parts":[["The laugh didn't sound","Kulgi ... eshitilmadi"],["so evil","unchalik yovuz"],["anymore.","endi."]],"uzbekFull":"Endi bu kulgi unchalik yovuzona eshitilmasdi.","note":"sound — eshitilmoq; not ... anymore — endi ... emas."},

  {"num":40,"time":"00:02:05,119 --> 00:02:06,959","english":"I made this for your birthday.","transcription":"aɪ meɪd ðɪs fər jʊr ˈbɜːrθdeɪ","parts":[["I made this","Men buni yasadim"],["for your birthday.","tug‘ilgan kuningiz uchun."]],"uzbekFull":"“Men buni tug‘ilgan kuningiz uchun yasadim.”","note":"make something for — biror narsani ... uchun yasamoq; birthday — tug‘ilgan kun."},

  {"num":41,"time":"00:02:07,959 --> 00:02:09,479","english":"I wanted to give it to you then,","transcription":"aɪ ˈwɑːntɪd tə ɡɪv ɪt tə juː ðen","parts":[["I wanted to give it to you","Men uni sizga bermoqchi edim"],["then,","o‘shanda,"]],"uzbekFull":"“Men uni o‘shanda sizga bermoqchi edim,","note":"want to give — bermoqchi bo‘lmoq; then — o‘shanda."},

  {"num":42,"time":"00:02:10,000 --> 00:02:11,400","english":"but you can have it now.","transcription":"bət juː kən hæv ɪt naʊ","parts":[["but you can have it","ammo endi uni olishingiz mumkin"],["now.","hozir."]],"uzbekFull":"ammo endi uni olishingiz mumkin.”","note":"can have — olishingiz mumkin; now — hozir."},

  {"num":43,"time":"00:02:12,019 --> 00:02:12,960","english":"I hope you like it.","transcription":"aɪ hoʊp juː laɪk ɪt","parts":[["I hope","Umid qilamanki"],["you like it.","u sizga yoqadi."]],"uzbekFull":"“Umid qilamanki, u sizga yoqadi.”","note":"I hope — umid qilamanki; like it — uni yoqtirmoq."}
];

if (typeof module !== "undefined" && module.exports) {
  module.exports = lessons;
}