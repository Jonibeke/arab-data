const lessons = [
  {"num":1,"time":"00:00:00,960 --> 00:00:02,480","english":"A Better Reward","transcription":"ə ˈbetər rɪˈwɔːrd","parts":[["A Better","Yaxshiroq"],["Reward","mukofot"]],"uzbekFull":"Yaxshiroq mukofot.","note":"reward — mukofot; better — yaxshiroq."},

  {"num":2,"time":"00:00:02,480 --> 00:00:05,780","english":"Jenny delivered food for a restaurant.","transcription":"ˈdʒeni dɪˈlɪvərd fuːd fər ə ˈrestərɑːnt","parts":[["Jenny delivered food","Jenny ovqat yetkazib berdi"],["for a restaurant.","restoran uchun."]],"uzbekFull":"Jenny restoran uchun ovqat yetkazib berardi.","note":"deliver — yetkazib bermoq; restaurant — restoran; delivered — yetkazib berdi."},

  {"num":3,"time":"00:00:06,540 --> 00:00:08,140","english":"She read the newspaper and said,","transcription":"ʃi red ðə ˈnuːzˌpeɪpər ænd sed","parts":[["She read the newspaper","U gazetani o‘qidi"],["and said,","va dedi:"]],"uzbekFull":"U gazetani o‘qidi va dedi:","note":"read — o‘qimoq; read (past) — o‘qidi; newspaper — gazeta."},

  {"num":4,"time":"00:00:08,700 --> 00:00:11,400","english":"Uh-oh, there was a story about a thief.","transcription":"ˌʌ ˈoʊ ðer wəz ə ˈstɔːri əˈbaʊt ə θiːf","parts":[["Uh-oh,","Voy,"],["there was a story","bir xabar bor edi"],["about a thief.","o‘g‘ri haqida."]],"uzbekFull":"“Voy, o‘g‘ri haqida xabar bor ekan.”","note":"thief — o‘g‘ri; story — hikoya, xabar; there was — bor edi."},

  {"num":5,"time":"00:00:11,960 --> 00:00:14,839","english":"He stole food, and no one had seen him.","transcription":"hi stoʊl fuːd ænd noʊ wʌn hæd siːn hɪm","parts":[["He stole food,","U ovqat o‘g‘irladi,"],["and no one","va hech kim"],["had seen him.","uni ko‘rmagan edi."]],"uzbekFull":"U ovqat o‘g‘irladi va hech kim uni ko‘rmagan edi.","note":"steal — o‘g‘irlamoq; stole — o‘g‘irladi; no one — hech kim; had seen — ko‘rgan edi."},

  {"num":6,"time":"00:00:15,679 --> 00:00:17,179","english":"Even the police couldn't catch him.","transcription":"ˈiːvən ðə pəˈliːs ˈkʊdənt kætʃ hɪm","parts":[["Even the police","Hatto politsiya ham"],["couldn't catch him.","uni tutolmasdi."]],"uzbekFull":"Hatto politsiya ham uni tutolmasdi.","note":"even — hatto; police — politsiya; catch — tutmoq; couldn't — qila olmadi."},

  {"num":7,"time":"00:00:18,120 --> 00:00:19,400","english":"Jenny was a little scared.","transcription":"ˈdʒeni wəz ə ˈlɪtəl skerd","parts":[["Jenny was","Jenny edi"],["a little scared.","biroz qo‘rqqan."]],"uzbekFull":"Jenny biroz qo‘rqdi.","note":"scared — qo‘rqqan; a little — biroz."},

  {"num":8,"time":"00:00:20,260 --> 00:00:21,660","english":"She worked close to that area.","transcription":"ʃi wɜːrkt kloʊs tə ðæt ˈeriə","parts":[["She worked","U ishlardi"],["close to that area.","o‘sha hududga yaqin."]],"uzbekFull":"U o‘sha hududga yaqin joyda ishlardi.","note":"work — ishlamoq; close to — ...ga yaqin; area — hudud."},

  {"num":9,"time":"00:00:22,600 --> 00:00:24,900","english":"The newspaper included a message from the police.","transcription":"ðə ˈnuːzˌpeɪpər ɪnˈkluːdɪd ə ˈmesɪdʒ frəm ðə pəˈliːs","parts":[["The newspaper included","Gazetada bor edi"],["a message","bir xabar"],["from the police.","politsiyadan."]],"uzbekFull":"Gazetada politsiyadan bir xabar bor edi.","note":"include — o‘z ichiga olmoq, kiritmoq; message — xabar; from — ...dan."},

  {"num":10,"time":"00:00:25,600 --> 00:00:27,820","english":"If anything strange occurs, call us.","transcription":"ɪf ˈeniθɪŋ streɪndʒ əˈkɜːrz kɔːl ʌs","parts":[["If anything strange occurs,","Agar g‘alati biror narsa sodir bo‘lsa,"],["call us.","bizga qo‘ng‘iroq qiling."]],"uzbekFull":"Agar g‘alati biror narsa sodir bo‘lsa, bizga qo‘ng‘iroq qiling.","note":"if — agar; anything strange — g‘alati biror narsa; occur — sodir bo‘lmoq; call us — bizga qo‘ng‘iroq qiling."},

  {"num":11,"time":"00:00:27,820 --> 00:00:31,820","english":"If you help us to catch the thief, you'll earn a reward.","transcription":"ɪf ju help ʌs tə kætʃ ðə θiːf juːl ɜːrn ə rɪˈwɔːrd","parts":[["If you help us","Agar siz bizga yordam bersangiz"],["to catch the thief,","o‘g‘rini tutishga"],["you'll earn a reward.","siz mukofot olasiz."]],"uzbekFull":"Agar siz o‘g‘rini tutishga yordam bersangiz, mukofot olasiz.","note":"help someone to do — birovga biror ish qilishda yordam bermoq; catch the thief — o‘g‘rini tutmoq; earn a reward — mukofot olmoq."},

  {"num":12,"time":"00:00:32,780 --> 00:00:33,659","english":"Jenny talked to Jim.","transcription":"ˈdʒeni tɔːkt tə dʒɪm","parts":[["Jenny talked to","Jenny ... bilan gaplashdi"],["Jim.","Jim bilan."]],"uzbekFull":"Jenny Jim bilan gaplashdi.","note":"talk to — ... bilan gaplashmoq."},

  {"num":13,"time":"00:00:34,340 --> 00:00:35,759","english":"He managed the restaurant.","transcription":"hi ˈmænɪdʒd ðə ˈrestərɑːnt","parts":[["He managed","U boshqarardi"],["the restaurant.","restoranni."]],"uzbekFull":"U restoranni boshqarardi.","note":"manage — boshqarmoq; manager — boshqaruvchi."},

  {"num":14,"time":"00:00:36,759 --> 00:00:38,000","english":"Do you know about the thief?","transcription":"duː juː noʊ əˈbaʊt ðə θiːf","parts":[["Do you know","Siz bilasizmi"],["about the thief?","o‘g‘ri haqida?"]],"uzbekFull":"O‘g‘ri haqida bilasizmi?","note":"know about — ...haqida bilmoq; thief — o‘g‘ri."},

  {"num":15,"time":"00:00:38,880 --> 00:00:40,060","english":"Yes, he said.","transcription":"jes hi sed","parts":[["Yes,","Ha,"],["he said.","dedi u."]],"uzbekFull":"“Ha”, dedi u.","note":"said — say fe’lining o‘tgan zamoni."},

  {"num":16,"time":"00:00:40,480 --> 00:00:42,719","english":"But he steals more than one person can eat.","transcription":"bət hi stiːlz mɔːr ðæn wʌn ˈpɜːrsən kən iːt","parts":[["But he steals","Ammo u o‘g‘irlaydi"],["more than","...dan ko‘proq"],["one person can eat.","bir kishi yeyishi mumkin bo‘lganidan."]],"uzbekFull":"Ammo u bir kishi yeyishi mumkin bo‘lganidan ko‘proq ovqat o‘g‘irlaydi.","note":"steal — o‘g‘irlamoq; more than — ...dan ko‘proq; can eat — yeyishi mumkin."},

  {"num":17,"time":"00:00:43,439 --> 00:00:45,120","english":"And why haven't the police stopped him yet?","transcription":"ænd waɪ ˈhævənt ðə pəˈliːs stɑːpt hɪm jet","parts":[["And why haven't","Va nega ... qilmagan"],["the police stopped him","politsiya uni to‘xtatmagan"],["yet?","hali?"]],"uzbekFull":"Va nega politsiya uni hali ham to‘xtatmagan?","note":"yet — hali; present perfect question: have/has + V3; stop — to‘xtatmoq."},

  {"num":18,"time":"00:00:45,960 --> 00:00:46,740","english":"It's a mystery.","transcription":"ɪts ə ˈmɪstəri","parts":[["It's","Bu"],["a mystery.","sirli narsa."]],"uzbekFull":"Bu sirli masala.","note":"mystery — sir, sirli masala."},

  {"num":19,"time":"00:00:47,600 --> 00:00:49,679","english":"If you see him, contact the police.","transcription":"ɪf juː siː hɪm ˈkɑːntækt ðə pəˈliːs","parts":[["If you see him,","Agar uni ko‘rsangiz,"],["contact the police.","politsiya bilan bog‘laning."]],"uzbekFull":"Agar uni ko‘rsangiz, politsiya bilan bog‘laning.","note":"if — agar; see — ko‘rmoq; contact — bog‘lanmoq, aloqa qilmoq."},

  {"num":20,"time":"00:00:50,379 --> 00:00:51,320","english":"Don't run after him.","transcription":"doʊnt rʌn ˈæftər hɪm","parts":[["Don't run","Yugurmang"],["after him.","uning ortidan."]],"uzbekFull":"Uning ortidan yugurmang.","note":"don't + verb — buyruqning inkor shakli; run after — ortidan yugurmoq."},

  {"num":21,"time":"00:00:52,039 --> 00:00:53,640","english":"Jenny drove to a customer's house.","transcription":"ˈdʒeni droʊv tə ə ˈkʌstəmərz haʊs","parts":[["Jenny drove","Jenny mashinada bordi"],["to a customer's house.","mijozning uyiga."]],"uzbekFull":"Jenny mashinada mijozning uyiga bordi.","note":"drive → drove — mashina haydamoq/bormoq; customer — mijoz; customer's — mijozning."},

  {"num":22,"time":"00:00:54,439 --> 00:00:56,719","english":"She left her car and opened the gate to the house.","transcription":"ʃi left hər kɑːr ænd ˈoʊpənd ðə ɡeɪt tə ðə haʊs","parts":[["She left her car","U mashinasini qoldirdi"],["and opened the gate","va darvozani ochdi"],["to the house.","uyga kiradigan."]],"uzbekFull":"U mashinasini qoldirdi va uyga kiradigan darvozani ochdi.","note":"leave a car — mashinani qoldirmoq; gate — darvoza; open — ochmoq."},

  {"num":23,"time":"00:00:57,339 --> 00:00:59,079","english":"But then she heard a noise by her car.","transcription":"bət ðen ʃi hɜːrd ə nɔɪz baɪ hər kɑːr","parts":[["But then","Ammo keyin"],["she heard a noise","u bir shovqinni eshitdi"],["by her car.","mashinasi yonida."]],"uzbekFull":"Ammo keyin u mashinasi yonidagi shovqinni eshitdi.","note":"hear — eshitmoq; heard — eshitdi; noise — shovqin; by — yonida."},

  {"num":24,"time":"00:00:59,939 --> 00:01:01,339","english":"She yelled, Thief!","transcription":"ʃi jeld θiːf","parts":[["She yelled","U baqirdi"],["Thief!","O‘g‘ri!"]],"uzbekFull":"U “O‘g‘ri!” deb baqirdi.","note":"yell — baqirmoq; thief — o‘g‘ri."},

  {"num":25,"time":"00:01:01,899 --> 00:01:03,119","english":"She wasn't scared.","transcription":"ʃi ˈwɑːzənt skerd","parts":[["She wasn't","U ... emas edi"],["scared.","qo‘rqqan."]],"uzbekFull":"U qo‘rqmagan edi.","note":"wasn't = was not — emas edi; scared — qo‘rqib ketgan."},

  {"num":26,"time":"00:01:03,759 --> 00:01:04,859","english":"She wanted the reward.","transcription":"ʃi ˈwɑːntɪd ðə rɪˈwɔːrd","parts":[["She wanted","U xohladi"],["the reward.","mukofotni."]],"uzbekFull":"U mukofotni xohladi.","note":"want — xohlamoq; reward — mukofot."},

  {"num":27,"time":"00:01:05,739 --> 00:01:07,879","english":"She did the opposite of what Jim told her to do.","transcription":"ʃi dɪd ði ˈɑːpəzɪt əv wʌt dʒɪm toʊld hər tə duː","parts":[["She did the opposite","U aksini qildi"],["of what Jim told her","Jim unga aytgan narsaning"],["to do.","qilishni."]],"uzbekFull":"U Jim unga qilishni aytgan narsaning aksini qildi.","note":"the opposite of — ...ning aksi; tell someone to do — birovga biror ishni qilishni aytmoq."},

  {"num":28,"time":"00:01:08,599 --> 00:01:09,980","english":"Hey! she yelled.","transcription":"heɪ ʃi jeld","parts":[["Hey!","Hoy!"],["she yelled.","u baqirdi."]],"uzbekFull":"“Hoy!” deb baqirdi u.","note":"hey — hoy, e’tibor chaqirish uchun ishlatiladi; yell — baqirmoq."},

  {"num":29,"time":"00:01:10,500 --> 00:01:11,319","english":"Get back here!","transcription":"ɡet bæk hɪr","parts":[["Get back","Qaytib kel"],["here!","bu yerga!"]],"uzbekFull":"“Bu yerga qaytib kel!”","note":"get back — qaytib kelmoq; here — bu yerga/bu yerda."},

  {"num":30,"time":"00:01:12,060 --> 00:01:14,500","english":"She set the food on the ground and ran to her car.","transcription":"ʃi set ðə fuːd ɑːn ðə ɡraʊnd ænd ræn tə hər kɑːr","parts":[["She set the food","U ovqatni qo‘ydi"],["on the ground","yerga"],["and ran to her car.","va mashinasi tomon yugurdi."]],"uzbekFull":"U ovqatni yerga qo‘ydi va mashinasi tomon yugurdi.","note":"set — qo‘ymoq; on the ground — yerga; ran — run fe’lining o‘tgan zamoni."},

  {"num":31,"time":"00:01:14,980 --> 00:01:17,140","english":"But the thief had already left with the food.","transcription":"bət ðə θiːf hæd ɔːlˈredi left wɪð ðə fuːd","parts":[["But the thief","Ammo o‘g‘ri"],["had already left","allaqachon ketgan edi"],["with the food.","ovqat bilan."]],"uzbekFull":"Ammo o‘g‘ri ovqat bilan allaqachon ketgan edi.","note":"had already left — allaqachon ketgan edi; already — allaqachon; with — bilan."},

  {"num":32,"time":"00:01:18,159 --> 00:01:19,840","english":"Ginny followed a noise around the corner.","transcription":"ˈdʒɪni ˈfɑːloʊd ə nɔɪz əˈraʊnd ðə ˈkɔːrnər","parts":[["Ginny followed","Ginny ergashdi"],["a noise","bir shovqinga"],["around the corner.","burchak ortiga."]],"uzbekFull":"Ginny shovqinga ergashib burchak ortiga bordi.","note":"SRTda bu yerda Jenny o‘rniga “Ginny” yozilgan; follow — ergashmoq; around the corner — burchak ortida/ortiga."},

  {"num":33,"time":"00:01:20,799 --> 00:01:21,599","english":"She was amazed.","transcription":"ʃi wəz əˈmeɪzd","parts":[["She was","U edi"],["amazed.","hayratlangan."]],"uzbekFull":"U hayratda qoldi.","note":"amazed — hayratlangan; be amazed — hayratda qolmoq."},

  {"num":34,"time":"00:01:22,239 --> 00:01:24,120","english":"She saw a dog and some puppies.","transcription":"ʃi sɔː ə dɔːɡ ænd sʌm ˈpʌpiz","parts":[["She saw","U ko‘rdi"],["a dog","bir itni"],["and some puppies.","va bir nechta kuchukchalarni."]],"uzbekFull":"U bir it va bir nechta kuchukchalarni ko‘rdi.","note":"dog — it; puppy — kuchukcha; some — bir nechta, ba’zi."},

  {"num":35,"time":"00:01:25,019 --> 00:01:26,579","english":"They were eating her food.","transcription":"ðeɪ wər ˈiːtɪŋ hər fuːd","parts":[["They were eating","Ular yeyayotgan edi"],["her food.","uning ovqatini."]],"uzbekFull":"Ular uning ovqatini yeyayotgan edi.","note":"were eating — Past Continuous; eat — yemoq; her — uning."},

  {"num":36,"time":"00:01:27,280 --> 00:01:29,000","english":"They looked thin and scared.","transcription":"ðeɪ lʊkt θɪn ænd skerd","parts":[["They looked","Ular ko‘rinardi"],["thin and scared.","ozg‘in va qo‘rqib ketgan holda."]],"uzbekFull":"Ular ozg‘in va qo‘rqib ketgan ko‘rinardi.","note":"look + adjective — ... ko‘rinmoq; thin — ozg‘in; scared — qo‘rqib ketgan."},

  {"num":37,"time":"00:01:29,579 --> 00:01:31,900","english":"The actual thief is just a dog.","transcription":"ði ˈæktʃuəl θiːf ɪz dʒʌst ə dɔːɡ","parts":[["The actual thief","Asl o‘g‘ri"],["is just","shunchaki ..."],["a dog.","bir it."]],"uzbekFull":"Asl o‘g‘ri shunchaki bir it ekan.","note":"actual — haqiqiy, asl; thief — o‘g‘ri; just — shunchaki."},

  {"num":38,"time":"00:01:32,500 --> 00:01:34,840","english":"She's feeding her puppies, she said.","transcription":"ʃiːz ˈfiːdɪŋ hər ˈpʌpiz ʃi sed","parts":[["She's feeding","U ovqatlantiryapti"],["her puppies,","kuchukchalarini,"],["she said.","dedi u."]],"uzbekFull":"“U kuchukchalarini ovqatlantiryapti”, dedi u.","note":"feed — ovqatlantirmoq; feeding — ovqatlantirayotgan; puppies — kuchukchalar."},

  {"num":39,"time":"00:01:35,400 --> 00:01:37,379","english":"That's why she steals so much food.","transcription":"ðæts waɪ ʃi stiːlz soʊ mʌtʃ fuːd","parts":[["That's why","Shuning uchun"],["she steals","u o‘g‘irlaydi"],["so much food.","shuncha ko‘p ovqatni."]],"uzbekFull":"Shuning uchun u shuncha ko‘p ovqat o‘g‘irlaydi.","note":"that's why — shuning uchun; so much — shuncha ko‘p; steal — o‘g‘irlamoq."},

  {"num":40,"time":"00:01:38,200 --> 00:01:39,099","english":"Jenny felt bad.","transcription":"ˈdʒeni felt bæd","parts":[["Jenny felt","Jenny his qildi"],["bad.","yomon."]],"uzbekFull":"Jenny o‘zini yomon his qildi.","note":"feel — his qilmoq; felt — his qildi; feel bad — o‘zini yomon his qilmoq."},

  {"num":41,"time":"00:01:39,980 --> 00:01:42,539","english":"She tried to comfort the dogs with another plate of food.","transcription":"ʃi traɪd tə ˈkʌmfərt ðə dɔːɡz wɪð əˈnʌðər pleɪt əv fuːd","parts":[["She tried to comfort","U tinchlantirishga harakat qildi"],["the dogs","itlarni"],["with another plate of food.","yana bir likop ovqat bilan."]],"uzbekFull":"U itlarni yana bir likop ovqat bilan tinchlantirishga harakat qildi.","note":"try to do — ... qilishga harakat qilmoq; comfort — tinchlantirmoq, taskin bermoq; another — yana bir; plate — likop."},

  {"num":42,"time":"00:01:43,400 --> 00:01:44,900","english":"Then she took them back to the store.","transcription":"ðen ʃi tʊk ðem bæk tə ðə stɔːr","parts":[["Then","Keyin"],["she took them back","u ularni qaytarib olib bordi"],["to the store.","do‘konga."]],"uzbekFull":"Keyin ularni do‘konga qaytarib olib bordi.","note":"take back — qaytarib olib bormoq; took — take fe’lining o‘tgan zamoni; store — do‘kon."},

  {"num":43,"time":"00:01:45,819 --> 00:01:47,500","english":"Everyone there took a puppy home.","transcription":"ˈevriwʌn ðer tʊk ə ˈpʌpi hoʊm","parts":[["Everyone there","U yerdagi hamma"],["took a puppy","bir kuchukchani oldi"],["home.","uyiga."]],"uzbekFull":"U yerdagi hamma bir kuchukchani uyiga olib ketdi.","note":"everyone — hamma; take ... home — ...ni uyiga olib ketmoq; puppy — kuchukcha."},

  {"num":44,"time":"00:01:48,539 --> 00:01:49,560","english":"Jenny called the police.","transcription":"ˈdʒeni kɔːld ðə pəˈliːs","parts":[["Jenny called","Jenny qo‘ng‘iroq qildi"],["the police.","politsiyaga."]],"uzbekFull":"Jenny politsiyaga qo‘ng‘iroq qildi.","note":"call the police — politsiyaga qo‘ng‘iroq qilmoq; police — politsiya."},

  {"num":45,"time":"00:01:50,439 --> 00:01:52,379","english":"She told them there was no real thief.","transcription":"ʃi toʊld ðem ðer wəz noʊ riːəl θiːf","parts":[["She told them","U ularga aytdi"],["there was no real thief.","haqiqiy o‘g‘ri yo‘qligini."]],"uzbekFull":"U ularga haqiqiy o‘g‘ri yo‘qligini aytdi.","note":"tell someone — birovga aytmoq; no real thief — haqiqiy o‘g‘ri yo‘q."},

  {"num":46,"time":"00:01:53,599 --> 00:01:55,879","english":"Jenny didn't do it to receive the reward anymore.","transcription":"ˈdʒeni ˈdɪdənt duː ɪt tə rɪˈsiːv ðə rɪˈwɔːrd ˌeniˈmɔːr","parts":[["Jenny didn't do it","Jenny buni qilmadi"],["to receive the reward","mukofotni olish uchun"],["anymore.","endi."]],"uzbekFull":"Jenny endi buni mukofotni olish uchun qilmadi.","note":"receive — olmoq, qabul qilmoq; reward — mukofot; anymore — endi, bundan buyon emas."},

  {"num":47,"time":"00:01:56,859 --> 00:01:58,959","english":"She said, it was just a dog.","transcription":"ʃi sed ɪt wəz dʒʌst ə dɔːɡ","parts":[["She said,","U dedi:"],["it was just","u shunchaki ... edi"],["a dog.","bir it."]],"uzbekFull":"U: “Bu shunchaki bir it edi”, dedi.","note":"just — shunchaki; it was — u edi."},

  {"num":48,"time":"00:01:59,399 --> 00:02:02,500","english":"But there's no charge for catching this thief, she said.","transcription":"bət ðerz noʊ tʃɑːrdʒ fər ˈkætʃɪŋ ðɪs θiːf ʃi sed","parts":[["But there's no charge","Ammo buning uchun to‘lov yo‘q"],["for catching this thief,","bu o‘g‘rini tutganlik uchun,"],["she said.","dedi u."]],"uzbekFull":"Ammo bu o‘g‘rini tutganlik uchun to‘lov yo‘q, dedi u.","note":"charge — to‘lov, haq; no charge — to‘lov yo‘q/bepul; catching — tutish; for + V-ing — ... qilish uchun."},

  {"num":49,"time":"00:02:03,219 --> 00:02:05,140","english":"My new dog is a better reward.","transcription":"maɪ nuː dɔːɡ ɪz ə ˈbetər rɪˈwɔːrd","parts":[["My new dog","Mening yangi itim"],["is a better reward.","yaxshiroq mukofot."]],"uzbekFull":"Mening yangi itim yaxshiroq mukofot.","note":"better — yaxshiroq; reward — mukofot. better reward — yaxshiroq mukofot."}
];