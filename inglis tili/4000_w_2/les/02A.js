const lessons = [
  {"num":1,"time":"00:00:00,880 --> 00:00:02,040","english":"The Dragon","transcription":"ðə ˈdræɡən","parts":[["The Dragon","Ajdarho"]],"uzbekFull":"Ajdarho.","note":"dragon — ajdarho."},

  {"num":2,"time":"00:00:02,040 --> 00:00:07,339","english":"An evil dragon lived in a castle in the remote southern mountains.","transcription":"ən ˈiːvəl ˈdræɡən lɪvd ɪn ə ˈkæsəl ɪn ðə rɪˈmoʊt ˈsʌðərn ˈmaʊntənz","parts":[["An evil dragon","Yovuz ajdarho"],["lived in a castle","qal’ada yashardi"],["in the remote southern mountains.","uzoq janubiy tog‘larda."]],"uzbekFull":"Yovuz ajdarho uzoq janubiy tog‘larda joylashgan qal’ada yashardi.","note":"evil — yovuz; dragon — ajdarho; castle — qal’a; remote — olis, uzoq; southern — janubiy; mountains — tog‘lar."},

  {"num":3,"time":"00:00:08,519 --> 00:00:10,540","english":"One day the monster landed in a town.","transcription":"wʌn deɪ ðə ˈmɑːnstər lændɪd ɪn ə taʊn","parts":[["One day","Bir kuni"],["the monster landed","mahluq qo‘ndi"],["in a town.","bir shaharchaga."]],"uzbekFull":"Bir kuni mahluq bir shaharchaga qo‘ndi.","note":"monster — mahluq; land — qo‘nmoq; landed — qo‘ndi; town — shaharcha."},

  {"num":4,"time":"00:00:11,560 --> 00:00:13,000","english":"The dragon commanded the people,","transcription":"ðə ˈdræɡən kəˈmændɪd ðə ˈpiːpəl","parts":[["The dragon commanded","Ajdarho buyurdi"],["the people,","odamlarga:"]],"uzbekFull":"Ajdarho odamlarga buyruq berdi:","note":"command — buyurmoq, buyruq bermoq; people — odamlar."},

  {"num":5,"time":"00:00:13,720 --> 00:00:16,800","english":"Give me food now or I will eat you.","transcription":"ɡɪv miː fuːd naʊ ɔːr aɪ wɪl iːt juː","parts":[["Give me food now","Menga hozir ovqat ber"],["or","aks holda"],["I will eat you.","sizni yeb qo‘yaman."]],"uzbekFull":"“Menga hozir ovqat bering, aks holda sizni yeb qo‘yaman.”","note":"give me — menga ber; now — hozir; or — aks holda; eat — yemoq."},

  {"num":6,"time":"00:00:17,820 --> 00:00:23,059","english":"The dragon lifted its wings so that its lungs could be completely filled with hot steam","transcription":"ðə ˈdræɡən ˈlɪftɪd ɪts wɪŋz soʊ ðæt ɪts lʌŋz kʊd bi kəmˈpliːtli fɪld wɪð hɑːt stiːm","parts":[["The dragon lifted its wings","Ajdarho qanotlarini ko‘tardi"],["so that","shunday qilib"],["its lungs could be completely filled","uning o‘pkalari to‘liq to‘lishi mumkin edi"],["with hot steam","issiq bug‘ bilan"]],"uzbekFull":"Ajdarho qanotlarini ko‘tardi, shunda uning o‘pkalari issiq bug‘ bilan to‘liq to‘lishi mumkin edi.","note":"lift — ko‘tarmoq; wing — qanot; lungs — o‘pkalar; be filled with — ... bilan to‘lmoq; steam — bug‘; so that — shunday qilib, ... uchun."},

  {"num":7,"time":"00:00:23,059 --> 00:00:25,500","english":"and breathed it upon the people.","transcription":"ænd briːðd ɪt əˈpɑːn ðə ˈpiːpəl","parts":[["and breathed it","va uni pufladi"],["upon the people.","odamlar tomon."]],"uzbekFull":"Va uni odamlarga tomon pufladi.","note":"breathe — nafas chiqarmoq, puflamoq; upon — ustiga, tomon."},

  {"num":8,"time":"00:00:26,280 --> 00:00:28,920","english":"A man turned into a stone statue.","transcription":"ə mæn tɜːrnd ˈɪntuː ə stoʊn ˈstætʃuː","parts":[["A man","Bir kishi"],["turned into","aylanib qoldi"],["a stone statue.","tosh haykalga."]],"uzbekFull":"Bir kishi tosh haykalga aylandi.","note":"turn into — ...ga aylanmoq; stone — tosh; statue — haykal."},

  {"num":9,"time":"00:00:30,000 --> 00:00:32,340","english":"The people submitted and brought food.","transcription":"ðə ˈpiːpəl səbˈmɪtɪd ænd brɔːt fuːd","parts":[["The people submitted","Odamlar bo‘ysunishdi"],["and brought food.","va ovqat olib kelishdi."]],"uzbekFull":"Odamlar bo‘ysunishdi va ovqat olib kelishdi.","note":"submit — bo‘ysunmoq; bring → brought — olib kelmoq; food — ovqat."},

  {"num":10,"time":"00:00:33,259 --> 00:00:35,399","english":"The dragon ate all of it and left.","transcription":"ðə ˈdræɡən eɪt ɔːl əv ɪt ænd left","parts":[["The dragon ate all of it","Ajdarho uning hammasini yedi"],["and left.","va ketdi."]],"uzbekFull":"Ajdarho uning hammasini yedi va ketdi.","note":"all of it — uning hammasi; eat → ate — yemoq; leave → left — ketmoq."},

  {"num":11,"time":"00:00:36,480 --> 00:00:39,899","english":"The people sent a boy to ask for help from a wise old man.","transcription":"ðə ˈpiːpəl sent ə bɔɪ tə æsk fər help frəm ə waɪz oʊld mæn","parts":[["The people sent a boy","Odamlar bir bolani yuborishdi"],["to ask for help","yordam so‘rash uchun"],["from a wise old man.","dono qariyadan."]],"uzbekFull":"Odamlar dono bir qariyadan yordam so‘rash uchun bir bolani yuborishdi.","note":"send someone to do — birovni biror ish qilish uchun yubormoq; ask for help — yordam so‘ramoq; wise — dono; old man — qariya."},

  {"num":12,"time":"00:00:40,899 --> 00:00:42,159","english":"He resided in a temple.","transcription":"hi rɪˈzaɪdɪd ɪn ə ˈtempəl","parts":[["He resided","U yashardi"],["in a temple.","ma’badda."]],"uzbekFull":"U ma’badda yashardi.","note":"reside — yashamoq; temple — ma’bad."},

  {"num":13,"time":"00:00:43,439 --> 00:00:45,560","english":"The boy told the old man about the dragon.","transcription":"ðə bɔɪ toʊld ði oʊld mæn əˈbaʊt ðə ˈdræɡən","parts":[["The boy told the old man","Bola qariyaga aytdi"],["about the dragon.","ajdarho haqida."]],"uzbekFull":"Bola qariyaga ajdarho haqida aytib berdi.","note":"tell someone about — birovga ... haqida aytib bermoq; old man — qariya."},

  {"num":14,"time":"00:00:46,859 --> 00:00:48,840","english":"Then the old man counseled the boy.","transcription":"ðen ði oʊld mæn ˈkaʊnsəld ðə bɔɪ","parts":[["Then","Keyin"],["the old man counseled the boy.","qariya bolaga maslahat berdi."]],"uzbekFull":"Keyin qariya bolaga maslahat berdi.","note":"counsel — maslahat bermoq; counsel someone — birovga maslahat bermoq."},

  {"num":15,"time":"00:00:49,939 --> 00:00:52,140","english":"A meteor will fall in the northern sky.","transcription":"ə ˈmiːtiər wɪl fɔːl ɪn ðə ˈnɔːrðərn skaɪ","parts":[["A meteor","Bir meteor"],["will fall","tushadi"],["in the northern sky.","shimoliy osmonda."]],"uzbekFull":"Shimoliy osmonga bir meteor tushadi.","note":"meteor — meteor; will fall — tushadi; northern — shimoliy; sky — osmon."},

  {"num":16,"time":"00:00:53,179 --> 00:00:54,620","english":"It will make a huge explosion.","transcription":"ɪt wɪl meɪk ə hjuːdʒ ɪkˈsploʊʒən","parts":[["It will make","U hosil qiladi"],["a huge explosion.","ulkan portlashni."]],"uzbekFull":"U ulkan portlashni yuzaga keltiradi.","note":"huge — ulkan; explosion — portlash; make an explosion — portlash yuzaga keltirmoq."},

  {"num":17,"time":"00:00:55,840 --> 00:00:57,980","english":"Find the meteor and bring it to me.","transcription":"faɪnd ðə ˈmiːtiər ænd brɪŋ ɪt tə miː","parts":[["Find the meteor","Meteorni top"],["and bring it to me.","va uni menga olib kel."]],"uzbekFull":"“Meteorni top va uni menga olib kel.”","note":"find — topmoq; bring something to someone — biror narsani birovga olib kelmoq."},

  {"num":18,"time":"00:00:57,979 --> 00:01:00,779","english":"I will use it to make a sword for you","transcription":"aɪ wɪl juːz ɪt tə meɪk ə sɔːrd fər juː","parts":[["I will use it","Men undan foydalanaman"],["to make a sword","qilich yasash uchun"],["for you.","siz uchun."]],"uzbekFull":"“Men undan siz uchun qilich yasashda foydalanaman.”","note":"use — foydalanmoq; use something to do — biror narsadan ... qilish uchun foydalanmoq; sword — qilich."},

  {"num":19,"time":"00:01:00,779 --> 00:01:04,000","english":"The boy did as the old man said","transcription":"ðə bɔɪ dɪd æz ði oʊld mæn sed","parts":[["The boy did as","Bola ... qilganidek qildi"],["the old man said","qariya aytgan."]],"uzbekFull":"Bola qariya aytganidek qildi.","note":"do as someone says — birov aytganidek qilmoq; said — say fe’lining o‘tgan zamoni."},

  {"num":20,"time":"00:01:04,000 --> 00:01:06,700","english":"Soon, the sword was ready","transcription":"suːn ðə sɔːrd wəz ˈredi","parts":[["Soon,","Ko‘p o‘tmay,"],["the sword was ready.","qilich tayyor bo‘ldi."]],"uzbekFull":"Ko‘p o‘tmay qilich tayyor bo‘ldi.","note":"soon — ko‘p o‘tmay; ready — tayyor; be ready — tayyor bo‘lmoq."},

  {"num":21,"time":"00:01:06,700 --> 00:01:09,920","english":"Use this to kill the dragon","transcription":"juːz ðɪs tə kɪl ðə ˈdræɡən","parts":[["Use this","Bundan foydalan"],["to kill the dragon.","ajdarhoni o‘ldirish uchun."]],"uzbekFull":"“Bundan ajdarhoni o‘ldirish uchun foydalan.”","note":"use this — bundan foydalan; kill — o‘ldirmoq."},

  {"num":22,"time":"00:01:09,920 --> 00:01:11,599","english":"But be careful","transcription":"bət bi ˈkerfəl","parts":[["But","Ammo"],["be careful.","ehtiyot bo‘l."]],"uzbekFull":"“Ammo ehtiyot bo‘l.”","note":"be careful — ehtiyot bo‘lmoq; careful — ehtiyotkor."},

  {"num":23,"time":"00:01:11,599 --> 00:01:15,400","english":"You must cover yourself with weeds that smell bad","transcription":"juː mʌst ˈkʌvər jərˈself wɪð wiːdz ðæt smel bæd","parts":[["You must cover yourself","O‘zingni qoplashing kerak"],["with weeds","begona o‘tlar bilan"],["that smell bad.","badbo‘y bo‘lgan."]],"uzbekFull":"“O‘zingni badbo‘y hidli begona o‘tlar bilan qoplashing kerak.”","note":"must — kerak, shart; cover yourself with — o‘zingni ... bilan qoplamoq; weeds — begona o‘tlar; smell bad — yomon hid taratmoq."},

  {"num":24,"time":"00:01:15,400 --> 00:01:18,340","english":"That will ensure that he does not smell you","transcription":"ðæt wɪl ɪnˈʃʊr ðæt hi dʌz nɑːt smel juː","parts":[["That will ensure","Bu kafolatlaydi"],["that he does not smell you.","u sizning hidingizni sezmasligini."]],"uzbekFull":"“Bu uning sizning hidingizni sezmasligini ta’minlaydi.”","note":"ensure — ta’minlamoq, kafolatlamoq; smell — hidlamoq/sezmoq; does not — qilmaydi."},

  {"num":25,"time":"00:01:18,340 --> 00:01:19,500","english":"The man said","transcription":"ðə mæn sed","parts":[["The man said","Erkak dedi"]],"uzbekFull":"Erkak dedi:","note":"say → said — aytmoq, demoq."},

  {"num":26,"time":"00:01:19,500 --> 00:01:23,239","english":"The boy traveled for many days to find the castle","transcription":"ðə bɔɪ ˈtrævəld fər ˈmeni deɪz tə faɪnd ðə ˈkæsəl","parts":[["The boy traveled","Bola safar qildi"],["for many days","ko‘p kunlar davomida"],["to find the castle.","qal’ani topish uchun."]],"uzbekFull":"Bola qal’ani topish uchun ko‘p kunlar davomida safar qildi.","note":"travel — sayohat qilmoq, safar qilmoq; for many days — ko‘p kunlar davomida; find — topmoq."},

  {"num":27,"time":"00:01:24,000 --> 00:01:26,519","english":"He went to the upper level and opened a door","transcription":"hi went tə ði ˈʌpər ˈlevəl ænd ˈoʊpənd ə dɔːr","parts":[["He went to the upper level","U yuqori qavatga chiqdi"],["and opened a door.","va eshikni ochdi."]],"uzbekFull":"U yuqori qavatga chiqdi va eshikni ochdi.","note":"upper level — yuqori qavat; open a door — eshikni ochmoq."},

  {"num":28,"time":"00:01:26,519 --> 00:01:29,039","english":"He could see the dragon's tail","transcription":"hi kʊd siː ðə ˈdræɡənz teɪl","parts":[["He could see","U ko‘ra oldi"],["the dragon's tail.","ajdarhoning dumini."]],"uzbekFull":"U ajdarhoning dumini ko‘ra oldi.","note":"could see — ko‘ra olardi/ko‘ra oldi; tail — dum."},

  {"num":29,"time":"00:01:29,039 --> 00:01:30,959","english":"It was sleeping","transcription":"ɪt wəz ˈsliːpɪŋ","parts":[["It was sleeping.","U uxlayotgan edi."]],"uzbekFull":"U uxlayotgan edi.","note":"sleep — uxlamoq; was sleeping — Past Continuous, “uxlayotgan edi”."},

  {"num":30,"time":"00:01:30,959 --> 00:01:32,679","english":"So the boy killed it","transcription":"soʊ ðə bɔɪ kɪld ɪt","parts":[["So","Shuning uchun"],["the boy killed it.","bola uni o‘ldirdi."]],"uzbekFull":"Shuning uchun bola uni o‘ldirdi.","note":"kill — o‘ldirmoq; killed — o‘ldirdi; so — shuning uchun."},

  {"num":31,"time":"00:01:32,679 --> 00:01:35,659","english":"Then he took the dragon's gold and jewelry","transcription":"ðen hi tʊk ðə ˈdræɡənz ɡoʊld ænd ˈdʒuːəlri","parts":[["Then he took","Keyin u oldi"],["the dragon's gold","ajdarhoning oltinlarini"],["and jewelry.","va zargarlik buyumlarini."]],"uzbekFull":"Keyin u ajdarhoning oltinlari va zargarlik buyumlarini oldi.","note":"take → took — olmoq; gold — oltin; jewelry — zargarlik buyumlari."},

  {"num":32,"time":"00:01:35,659 --> 00:01:37,079","english":"And returned to his town","transcription":"ænd rɪˈtɜːrnd tə hɪz taʊn","parts":[["And returned","Va qaytdi"],["to his town.","o‘z shaharchasiga."]],"uzbekFull":"Va o‘z shaharchasiga qaytdi.","note":"return — qaytmoq; town — shaharcha."},

  {"num":33,"time":"00:01:37,079 --> 00:01:39,099","english":"The people were happy","transcription":"ðə ˈpiːpəl wər ˈhæpi","parts":[["The people","Odamlar"],["were happy.","xursand bo‘lishdi."]],"uzbekFull":"Odamlar xursand bo‘lishdi.","note":"happy — xursand, baxtli; were — be fe’lining o‘tgan zamoni."}
]; if (typeof module !== 'undefined' && module.exports) {
  module.exports = lessons;
}