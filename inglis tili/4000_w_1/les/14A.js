const lessons = [
  {"num":1,"time":"00:00:00,840 --> 00:00:02,560","english":"A Magical Book","transcription":"ə ˈmædʒɪkəl bʊk","parts":[["A Magical","Sehrli"],["Book","kitob"]],"uzbekFull":"Sehrli kitob","note":"magical — sehrli; book — kitob."},

  {"num":2,"time":"00:00:02,560 --> 00:00:05,080","english":"Sarah loved to read.","transcription":"ˈserə lʌvd tə riːd","parts":[["Sarah loved","Sara yaxshi ko‘rardi"],["to read.","o‘qishni."]],"uzbekFull":"Sara o‘qishni yaxshi ko‘rardi.","note":"love to do — ... qilishni yaxshi ko‘rmoq."},

  {"num":3,"time":"00:00:05,919 --> 00:00:07,740","english":"She read novels and poems.","transcription":"ʃiː red ˈnɑːvəlz ænd ˈpoʊəmz","parts":[["She read","U o‘qirdi"],["novels and poems.","romanlar va she’rlarni."]],"uzbekFull":"U romanlar va she’rlarni o‘qirdi.","note":"novel — roman; poem — she’r."},

  {"num":4,"time":"00:00:08,640 --> 00:00:11,019","english":"She loved the beautiful descriptions and phrases.","transcription":"ʃiː lʌvd ðə ˈbjuːtɪfəl dɪˈskrɪpʃənz ænd ˈfreɪzɪz","parts":[["She loved","U yaxshi ko‘rardi"],["the beautiful descriptions","chiroyli tasvirlarni"],["and phrases.","va iboralarni."]],"uzbekFull":"U chiroyli tasvirlar va iboralarni yaxshi ko‘rardi.","note":"description — tasvir; phrase — ibora."},

  {"num":5,"time":"00:00:11,980 --> 00:00:14,580","english":"She loved reading work from poets and novelists.","transcription":"ʃiː lʌvd ˈriːdɪŋ wɜːrk frəm ˈpoʊəts ænd ˈnɑːvəlɪsts","parts":[["She loved reading","U o‘qishni yaxshi ko‘rardi"],["work from poets","shoirlarning asarlarini"],["and novelists.","va yozuvchilarning."]],"uzbekFull":"U shoirlar va yozuvchilarning asarlarini o‘qishni yaxshi ko‘rardi.","note":"poet — shoir; novelist — romannavis, yozuvchi; work from — ...ning asari."},

  {"num":6,"time":"00:00:15,400 --> 00:00:17,879","english":"She didn't like video games or technology.","transcription":"ʃiː ˈdɪdənt laɪk ˈvɪdioʊ ɡeɪmz ɔːr tekˈnɑːlədʒi","parts":[["She didn't like","U yoqtirmasdi"],["video games","video o‘yinlarni"],["or technology.","yoki texnologiyani."]],"uzbekFull":"U video o‘yinlar yoki texnologiyani yoqtirmasdi.","note":"video game — video o‘yin; technology — texnologiya."},

  {"num":7,"time":"00:00:18,940 --> 00:00:20,440","english":"She was on the basketball team,","transcription":"ʃiː wəz ɑːn ðə ˈbæskɪtbɔːl tiːm","parts":[["She was on","U ...da edi"],["the basketball team,","basketbol jamoasida,"]],"uzbekFull":"U basketbol jamoasida edi,","note":"be on a team — jamoada bo‘lmoq."},

  {"num":8,"time":"00:00:21,019 --> 00:00:22,440","english":"but she didn't like sports.","transcription":"bət ʃiː ˈdɪdənt laɪk spɔːrts","parts":[["but","ammo"],["she didn't like","u yoqtirmasdi"],["sports.","sportni."]],"uzbekFull":"ammo u sportni yoqtirmasdi.","note":"sports — sport."},

  {"num":9,"time":"00:00:23,219 --> 00:00:24,960","english":"Her parents made her play basketball.","transcription":"hər ˈperənts meɪd hər pleɪ ˈbæskɪtbɔːl","parts":[["Her parents","Uning ota-onasi"],["made her play","uni o‘ynashga majbur qildi"],["basketball.","basketbolni."]],"uzbekFull":"Uning ota-onasi uni basketbol o‘ynashga majbur qilishardi.","note":"make someone do — birovni biror ish qilishga majbur qilmoq."},

  {"num":10,"time":"00:00:25,719 --> 00:00:28,500","english":"In fact, Sarah's parents made her do many things,","transcription":"ɪn fækt ˈserəz ˈperənts meɪd hər duː ˈmeni θɪŋz","parts":[["In fact,","Aslida,"],["Sarah's parents made her","Saraning ota-onasi uni majbur qilishardi"],["do many things,","ko‘p ishlarni qilishga,"]],"uzbekFull":"Aslida, Saraning ota-onasi uni ko‘p ishlarni qilishga majbur qilishardi,","note":"in fact — aslida; make someone do — birovni ... qilishga majbur qilmoq."},

  {"num":11,"time":"00:00:29,100 --> 00:00:30,899","english":"But she didn't want to do those things.","transcription":"bət ʃiː ˈdɪdənt wɑːnt tə duː ðoʊz θɪŋz","parts":[["But","Ammo"],["she didn't want to do","u qilishni xohlamasdi"],["those things.","o‘sha narsalarni."]],"uzbekFull":"Ammo u o‘sha narsalarni qilishni xohlamasdi.","note":"want to do — qilishni xohlamoq; those things — o‘sha narsalar."},

  {"num":12,"time":"00:00:31,519 --> 00:00:33,960","english":"She just wanted to sit and read all day.","transcription":"ʃiː dʒʌst ˈwɑːntɪd tə sɪt ænd riːd ɔːl deɪ","parts":[["She just wanted","U shunchaki xohlardi"],["to sit and read","o‘tirib o‘qishni"],["all day.","kun bo‘yi."]],"uzbekFull":"U shunchaki kun bo‘yi o‘tirib o‘qishni xohlardi.","note":"just — shunchaki; all day — kun bo‘yi."},

  {"num":13,"time":"00:00:34,880 --> 00:00:37,340","english":"One day, a small book came in the mail.","transcription":"wʌn deɪ ə smɔːl bʊk keɪm ɪn ðə meɪl","parts":[["One day,","Bir kuni,"],["a small book","kichkina kitob"],["came in the mail.","pochta orqali keldi."]],"uzbekFull":"Bir kuni pochta orqali kichkina bir kitob keldi.","note":"come in the mail — pochta orqali kelmoq."},

  {"num":14,"time":"00:00:38,060 --> 00:00:38,899","english":"It was for Sarah.","transcription":"ɪt wəz fər ˈserə","parts":[["It was","U ... edi"],["for Sarah.","Sara uchun."]],"uzbekFull":"U Sara uchun edi.","note":"for someone — birov uchun."},

  {"num":15,"time":"00:00:39,519 --> 00:00:41,259","english":"The book looked very special.","transcription":"ðə bʊk lʊkt ˈveri ˈspeʃəl","parts":[["The book looked","Kitob ko‘rinardi"],["very special.","juda o‘ziga xos."]],"uzbekFull":"Kitob juda o‘ziga xos ko‘rinardi.","note":"look + adjective — ... ko‘rinmoq; special — o‘ziga xos, maxsus."},

  {"num":16,"time":"00:00:42,060 --> 00:00:43,799","english":"It was printed on sheets of gold.","transcription":"ɪt wəz ˈprɪntɪd ɑːn ʃiːts əv ɡoʊld","parts":[["It was printed","U bosilgan edi"],["on sheets","varaqlarga"],["of gold.","oltindan qilingan."]],"uzbekFull":"U oltin varaqlarga bosilgan edi.","note":"be printed on — ...ga bosilmoq; sheet — varaq; gold — oltin."},

  {"num":17,"time":"00:00:44,659 --> 00:00:45,740","english":"Sarah began to read.","transcription":"ˈserə bɪˈɡæn tə riːd","parts":[["Sarah began","Sara boshladi"],["to read.","o‘qishni."]],"uzbekFull":"Sara o‘qishni boshladi.","note":"begin to do — ... qilishni boshlamoq."},

  {"num":18,"time":"00:00:46,460 --> 00:00:48,240","english":"The outline of the story was simple.","transcription":"ði ˈaʊtlaɪn əv ðə ˈstɔːri wəz ˈsɪmpəl","parts":[["The outline","Qisqacha mazmuni"],["of the story","hikoyaning"],["was simple.","oddiy edi."]],"uzbekFull":"Hikoyaning qisqacha mazmuni oddiy edi.","note":"outline — qisqacha mazmun, tuzilma; simple — oddiy."},

  {"num":19,"time":"00:00:49,120 --> 00:00:50,780","english":"It was about a magical place.","transcription":"ɪt wəz əˈbaʊt ə ˈmædʒɪkəl pleɪs","parts":[["It was about","U ... haqida edi"],["a magical place.","sehrli joy."]],"uzbekFull":"U sehrli joy haqida edi.","note":"be about — ... haqida bo‘lmoq; magical place — sehrli joy."},

  {"num":20,"time":"00:00:51,960 --> 00:00:53,500","english":"Strange things happened there.","transcription":"streɪndʒ θɪŋz ˈhæpənd ðer","parts":[["Strange things","G‘alati narsalar"],["happened there.","u yerda sodir bo‘lardi."]],"uzbekFull":"U yerda g‘alati voqealar sodir bo‘lardi.","note":"happen — sodir bo‘lmoq; there — u yerda."},

  {"num":21,"time":"00:00:54,460 --> 00:00:57,760","english":"One example from the book was about a boy who could control people.","transcription":"wʌn ɪɡˈzæmpəl frəm ðə bʊk wəz əˈbaʊt ə bɔɪ huː kʊd kənˈtroʊl ˈpiːpəl","parts":[["One example from the book","Kitobdagi bir misol"],["was about a boy","bir bola haqida edi"],["who could control people.","u odamlarni boshqara olardi."]],"uzbekFull":"Kitobdagi bir misol odamlarni boshqara oladigan bola haqida edi.","note":"example — misol; could control — boshqara olardi; control people — odamlarni boshqarmoq."},

  {"num":22,"time":"00:00:58,379 --> 00:01:01,479","english":"In one scene, he made his friends tell funny jokes.","transcription":"ɪn wʌn siːn hiː meɪd hɪz frendz tel ˈfʌni dʒoʊks","parts":[["In one scene,","Bir sahnada,"],["he made his friends","u do‘stlarini majbur qildi"],["tell funny jokes.","kulgili hazillar aytishga."]],"uzbekFull":"Bir sahnada u do‘stlarini kulgili hazillar aytishga majbur qildi.","note":"make someone do — birovni ... qilishga majbur qilmoq; tell a joke — hazil aytmoq."},

  {"num":23,"time":"00:01:02,500 --> 00:01:03,599","english":"Sarah loved the book.","transcription":"ˈserə lʌvd ðə bʊk","parts":[["Sarah loved","Sara yaxshi ko‘rdi"],["the book.","kitobni."]],"uzbekFull":"Sara kitobni juda yaxshi ko‘rdi.","note":"love a book — kitobni juda yoqtirmoq."},

  {"num":24,"time":"00:01:04,219 --> 00:01:05,420","english":"She read it all the time.","transcription":"ʃiː red ɪt ɔːl ðə taɪm","parts":[["She read it","U uni o‘qirdi"],["all the time.","doimo."]],"uzbekFull":"U uni doimo o‘qirdi.","note":"all the time — doimo, har doim."},

  {"num":25,"time":"00:01:06,179 --> 00:01:07,700","english":"Then something strange happened.","transcription":"ðen ˈsʌmθɪŋ streɪndʒ ˈhæpənd","parts":[["Then","Keyin"],["something strange","g‘alati bir narsa"],["happened.","sodir bo‘ldi."]],"uzbekFull":"Keyin g‘alati bir narsa sodir bo‘ldi.","note":"something strange — g‘alati bir narsa."},

  {"num":26,"time":"00:01:08,500 --> 00:01:10,659","english":"The book gave Sarah a special power.","transcription":"ðə bʊk ɡeɪv ˈserə ə ˈspeʃəl ˈpaʊər","parts":[["The book gave Sarah","Kitob Saraga berdi"],["a special power.","maxsus kuch."]],"uzbekFull":"Kitob Saraga maxsus kuch berdi.","note":"give someone — birovga bermoq; special power — maxsus kuch."},

  {"num":27,"time":"00:01:11,679 --> 00:01:13,319","english":"She could control other people.","transcription":"ʃiː kʊd kənˈtroʊl ˈʌðər ˈpiːpəl","parts":[["She could control","U boshqara olardi"],["other people.","boshqa odamlarni."]],"uzbekFull":"U boshqa odamlarni boshqara olardi.","note":"could — qila olardi; control — boshqarmoq."},

  {"num":28,"time":"00:01:14,319 --> 00:01:15,900","english":"She was like the boy in the book.","transcription":"ʃiː wəz laɪk ðə bɔɪ ɪn ðə bʊk","parts":[["She was like","U ...ga o‘xshardi"],["the boy in the book.","kitobdagi bolaga."]],"uzbekFull":"U kitobdagi bolaga o‘xshab qolgandi.","note":"be like — ...ga o‘xshamoq."},

  {"num":29,"time":"00:01:16,859 --> 00:01:20,099","english":"During one exam, she made her friend tell silly jokes.","transcription":"ˈdʊrɪŋ wʌn ɪɡˈzæm ʃiː meɪd hər frend tel ˈsɪli dʒoʊks","parts":[["During one exam,","Bir imtihon paytida,"],["she made her friend","u dugonasini majbur qildi"],["tell silly jokes.","ahmoqona hazillar aytishga."]],"uzbekFull":"Bir imtihon paytida u dugonasini ahmoqona hazillar aytishga majbur qildi.","note":"during — davomida, paytida; silly — ahmoqona, bema’ni; make someone do — majbur qilmoq."},

  {"num":30,"time":"00:01:20,579 --> 00:01:22,140","english":"Her friend got in trouble.","transcription":"hər frend ɡɑːt ɪn ˈtrʌbəl","parts":[["Her friend","Uning dugonasi"],["got in trouble.","muammoga qoldi."]],"uzbekFull":"Uning dugonasi muammoga qoldi.","note":"get in trouble — muammoga qolmoq."},

  {"num":31,"time":"00:01:23,019 --> 00:01:26,079","english":"After school, Sarah did not make a direct trip home.","transcription":"ˈæftər skuːl ˈserə dɪd nɑːt meɪk ə dəˈrekt trɪp hoʊm","parts":[["After school,","Maktabdan keyin,"],["Sarah did not make","Sara to‘g‘ridan-to‘g‘ri qilmadi"],["a direct trip home.","uyga safarni."]],"uzbekFull":"Maktabdan keyin Sara to‘g‘ridan-to‘g‘ri uyiga ketmadi.","note":"direct trip home — to‘g‘ridan-to‘g‘ri uyga borish; after school — maktabdan keyin."},

  {"num":32,"time":"00:01:26,079 --> 00:01:29,219","english":"On the way, she went to the local store.","transcription":"ɑːn ðə weɪ ʃiː went tə ðə ˈloʊkəl stɔːr","parts":[["On the way,","Yo‘lda,"],["she went to","u bordi"],["the local store.","mahalliy do‘konga."]],"uzbekFull":"Yo‘lda u mahalliy do‘konga bordi.","note":"on the way — yo‘lda; local store — mahalliy do‘kon."},

  {"num":33,"time":"00:01:29,939 --> 00:01:31,620","english":"She wanted to play more tricks on people.","transcription":"ʃiː ˈwɑːntɪd tə pleɪ mɔːr trɪks ɑːn ˈpiːpəl","parts":[["She wanted","U xohladi"],["to play more tricks","yana ko‘proq hiyla ishlatishni"],["on people.","odamlarga."]],"uzbekFull":"U odamlarga yana ko‘proq hiyla ishlatishni xohladi.","note":"play a trick on someone — birovga hiyla ishlatmoq."},

  {"num":34,"time":"00:01:32,480 --> 00:01:33,519","english":"She caused problems.","transcription":"ʃiː kɔːzd ˈprɑːbləmz","parts":[["She caused","U sabab bo‘ldi"],["problems.","muammolarga."]],"uzbekFull":"U muammolar keltirib chiqardi.","note":"cause problems — muammolar keltirib chiqarmoq."},

  {"num":35,"time":"00:01:34,379 --> 00:01:35,640","english":"She made people fall down.","transcription":"ʃiː meɪd ˈpiːpəl fɔːl daʊn","parts":[["She made people","U odamlarni majbur qildi"],["fall down.","yiqilishga."]],"uzbekFull":"U odamlarni yiqilishga majbur qildi.","note":"make someone do — birovni ... qilishga majbur qilmoq; fall down — yiqilmoq."},

  {"num":36,"time":"00:01:36,599 --> 00:01:37,780","english":"She laughed and had fun.","transcription":"ʃiː læft ænd hæd fʌn","parts":[["She laughed","U kuldi"],["and had fun.","va mazza qildi."]],"uzbekFull":"U kuldi va mazza qildi.","note":"have fun — mazza qilmoq; laugh — kulmoq."},

  {"num":37,"time":"00:01:38,799 --> 00:01:41,140","english":"Finally, she left and started to walk home.","transcription":"ˈfaɪnəli ʃiː left ænd ˈstɑːrtɪd tə wɔːk hoʊm","parts":[["Finally,","Nihoyat,"],["she left","u ketdi"],["and started to walk home.","va uyga piyoda ketishni boshladi."]],"uzbekFull":"Nihoyat, u ketdi va uyga piyoda qaytishni boshladi.","note":"start to do — ... qilishni boshlamoq; walk home — uyga piyoda bormoq."},

  {"num":38,"time":"00:01:42,259 --> 00:01:43,239","english":"Then she saw something.","transcription":"ðen ʃiː sɔː ˈsʌmθɪŋ","parts":[["Then","Keyin"],["she saw","u ko‘rdi"],["something.","bir narsani."]],"uzbekFull":"Keyin u bir narsani ko‘rdi.","note":"see → saw — ko‘rmoq."},

  {"num":39,"time":"00:01:44,019 --> 00:01:46,840","english":"Her basketball coach was about to walk in front of a bus.","transcription":"hər ˈbæskɪtbɔːl koʊtʃ wəz əˈbaʊt tə wɔːk ɪn frʌnt əv ə bʌs","parts":[["Her basketball coach","Uning basketbol murabbiyi"],["was about to walk","yurmoqchi edi"],["in front of a bus.","avtobusning oldidan."]],"uzbekFull":"Uning basketbol murabbiyi avtobusning oldidan yurib chiqmoqchi edi.","note":"be about to do — ...moqchi bo‘lmoq, sal qolmoq; in front of — oldida."},

  {"num":40,"time":"00:01:47,579 --> 00:01:48,780","english":"He was looking the other way.","transcription":"hiː wəz ˈlʊkɪŋ ði ˈʌðər weɪ","parts":[["He was looking","U qarab turgan edi"],["the other way.","boshqa tomonga."]],"uzbekFull":"U boshqa tomonga qarab turgan edi.","note":"the other way — boshqa tomonga."},

  {"num":41,"time":"00:01:49,700 --> 00:01:50,739","english":"She had to stop him.","transcription":"ʃiː hæd tə stɑːp hɪm","parts":[["She had to","U ... qilishi kerak edi"],["stop him.","uni to‘xtatishni."]],"uzbekFull":"U uni to‘xtatishi kerak edi.","note":"have to — kerak bo‘lmoq; stop someone — birovni to‘xtatmoq."},

  {"num":42,"time":"00:01:51,480 --> 00:01:52,620","english":"She used her power.","transcription":"ʃiː juːzd hər ˈpaʊər","parts":[["She used","U foydalandi"],["her power.","o‘z kuchidan."]],"uzbekFull":"U o‘z kuchidan foydalandi.","note":"use one's power — o‘z kuchidan foydalanmoq."},

  {"num":43,"time":"00:01:53,480 --> 00:01:54,359","english":"She controlled him.","transcription":"ʃiː kənˈtroʊld hɪm","parts":[["She controlled","U boshqardi"],["him.","uni."]],"uzbekFull":"U uni boshqardi.","note":"control — boshqarmoq, nazorat qilmoq."},

  {"num":44,"time":"00:01:55,340 --> 00:01:56,579","english":"She made him stop walking.","transcription":"ʃiː meɪd hɪm stɑːp ˈwɔːkɪŋ","parts":[["She made him","U uni majbur qildi"],["stop walking.","yurishni to‘xtatishga."]],"uzbekFull":"U uni yurishni to‘xtatishga majbur qildi.","note":"make someone do — birovni ... qilishga majbur qilmoq; stop walking — yurishni to‘xtatmoq."},

  {"num":45,"time":"00:01:57,719 --> 00:01:59,099","english":"Sarah learned something that day.","transcription":"ˈserə lɜːrnd ˈsʌmθɪŋ ðæt deɪ","parts":[["Sarah learned","Sara o‘rgandi"],["something","bir narsani"],["that day.","o‘sha kuni."]],"uzbekFull":"Sara o‘sha kuni bir narsani o‘rgandi.","note":"learn something — biror narsani o‘rganmoq."},

  {"num":46,"time":"00:01:59,840 --> 00:02:02,260","english":"It was better to help people than make them suffer.","transcription":"ɪt wəz ˈbetər tə help ˈpiːpəl ðæn meɪk ðəm ˈsʌfər","parts":[["It was better","Yaxshiroq edi"],["to help people","odamlarga yordam berish"],["than make them suffer.","ularni qiynashdan ko‘ra."]],"uzbekFull":"Odamlarni qiynashdan ko‘ra, ularga yordam berish yaxshiroq edi.","note":"It is better to ... than ... — ...dan ko‘ra ... yaxshiroq; suffer — azob chekmoq, qiynalmoq."},

  {"num":47,"time":"00:02:03,260 --> 00:02:05,700","english":"So she put a limit on how she used her power.","transcription":"soʊ ʃiː pʊt ə ˈlɪmɪt ɑːn haʊ ʃiː juːzd hər ˈpaʊər","parts":[["So","Shuning uchun"],["she put a limit on","u cheklov qo‘ydi"],["how she used","qanday ishlatishiga"],["her power.","o‘z kuchini."]],"uzbekFull":"Shuning uchun u o‘z kuchidan qanday foydalanishiga cheklov qo‘ydi.","note":"put a limit on — ...ga cheklov qo‘ymoq; limit — cheklov."},

  {"num":48,"time":"00:02:06,599 --> 00:02:09,000","english":"She did not want to do bad things with it anymore.","transcription":"ʃiː dɪd nɑːt wɑːnt tə duː bæd θɪŋz wɪð ɪt ˌeniˈmɔːr","parts":[["She did not want","U xohlamadi"],["to do bad things","yomon ishlar qilishni"],["with it","undan foydalanib"],["anymore.","endi."]],"uzbekFull":"U endi undan foydalanib yomon ishlar qilishni xohlamadi.","note":"with it — undan foydalanib; not anymore — endi ... emas / boshqa ... qilmaslik."},

  {"num":49,"time":"00:02:09,939 --> 00:02:11,780","english":"She only wanted to do good.","transcription":"ʃiː ˈoʊnli ˈwɑːntɪd tə duː ɡʊd","parts":[["She only wanted","U faqat xohlardi"],["to do good.","yaxshilik qilishni."]],"uzbekFull":"U faqat yaxshilik qilishni xohlardi.","note":"do good — yaxshilik qilmoq; only — faqat."}
];

if (typeof module !== "undefined" && module.exports) {
  module.exports = lessons;
}