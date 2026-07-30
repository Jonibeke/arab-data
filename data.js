const data = {
    languages: [
        {
            id: "arab-tili",
            title: "Arab tili",
            img: "img/اللغة-العربية.jpg",
            meta: ""
        },
        {
            id: "ingliz-tili",
            title: "Ingliz tili",
            img: "img/inglis tili.jpg",
            meta: ""
        },
        {
            id: "",
            title: "Boshqa tillar",
            img: "",
            meta: "Endi qo'shiladi"
        }
    ],
    playlists: [
        {
            id: "fixies",
            language: "arab-tili",
            title: "الفيكسيز",
            type: "mult",
            img: "arab tili/fixies/img/cov.avif",
            meta: "102 ta epizod",
            episodes: [
                {
                    num: 1,
                    title: "العتلة - الحلقة الرابعة",
                    about: "",
                    img:      "arab tili/fixies/img/f_1.avif",
                    video:    "arab tili/fixies/vid/001.mp4",
                    subtitle: "arab tili/fixies/sub/001.srt",
                    // 5-bosqich (Test) uchun. "test" — majburiy, bo'sh
                    // qoldirilsa 5-bosqich ochilganda "test fayli qo'shilmagan"
                    // xabari chiqadi. "testIzoh" — ixtiyoriy: bo'lsa xato
                    // javobda "Izohni ko'rish" tugmasi chiqadi, bo'lmasa/bo'sh
                    // bo'lsa hech qanday xatosiz, oddiy natija bilan cheklanadi.
                    test:     "arab tili/fixies/tests/001.txt",
                    // testIzoh: "arab tili/fixies/tests/at-Tanal_testlar_izoh.txt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "arab tili/fixies/les/001A.js",
                            audioTimes: "arab tili/fixies/aud_tim/001A.js",
                            audio:      "arab tili/fixies/aud/001A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "arab tili/fixies/les/001B.js",
                            audioTimes: "arab tili/fixies/aud_tim/001B.js",
                            audio:      "arab tili/fixies/aud/001B.mp3"
                        }
                    ]
                },
                {
                    num: 2,
                    title: "قلم الحبر - الحلقة 16",
                    about: "",
                    img:        "arab tili/fixies/img/epi.jpg",
                    video:      "arab tili/fixies/vid/002.mp4",
                    subtitle:   "arab tili/fixies/sub/002.srt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "arab tili/fixies/les/002A.js",
                            audioTimes: "arab tili/fixies/aud_tim/002A.js",
                            audio:      "arab tili/fixies/aud/002A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "arab tili/fixies/les/002B.js",
                            audioTimes: "arab tili/fixies/aud_tim/002B.js",
                            audio:      "arab tili/fixies/aud/002B.mp3"
                        }
                    ],
                   },
                {
                    num: 3,
                    title: "فرشاة الأسنان - الحلقة 12",
                    about: "",
                    img:      "arab tili/fixies/img/002.jpg",
                    video:    "arab tili/fixies/vid/003.mp4",
                    subtitle: "arab tili/fixies/sub/003.srt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "arab tili/fixies/les/003A.js",
                            audioTimes: "arab tili/fixies/aud_tim/003A.js",
                            audio:      "arab tili/fixies/aud/003A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "arab tili/fixies/les/003B.js",
                            audioTimes: "arab tili/fixies/aud_tim/003B.js",
                            audio:      "arab tili/fixies/aud/003B.mp3"
                        }
                    ]
                },
                {
                    num: 4,
                    title: "المسامير - الحلقة 13 ",
                    about: "",
                    img:      "arab tili/fixies/img/004.jpg",
                    video:    "arab tili/fixies/vid/004.mp4",
                    subtitle: "arab tili/fixies/sub/004.srt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "arab tili/fixies/les/004A.js",
                            audioTimes: "arab tili/fixies/aud_tim/004A.js",
                            audio:      "arab tili/fixies/aud/004A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "arab tili/fixies/les/004B.js",
                            audioTimes: "arab tili/fixies/aud_tim/004B.js",
                            audio:      "arab tili/fixies/aud/004B.mp3"
                        }
                    ]
                },
                {
                    num: 5,
                    title: "الثلاجة - الحلقة السابعة ",
                    about: "",
                    img:      "arab tili/fixies/img/005.jpg",
                    video:    "arab tili/fixies/vid/005.mp4",
                    subtitle: "arab tili/fixies/sub/005.srt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "arab tili/fixies/les/005A.js",
                            audioTimes: "arab tili/fixies/aud_tim/005A.js",
                            audio:      "arab tili/fixies/aud/005A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "arab tili/fixies/les/005B.js",
                            audioTimes: "arab tili/fixies/aud_tim/005B.js",
                            audio:      "arab tili/fixies/aud/005B.mp3"
                        }
                    ]
                },
                {
                    num: 6,
                    title: "مجفف الشعر - الحلقة 28",
                    about: "",
                    img:      "arab tili/fixies/img/006.jpg",
                    video:    "arab tili/fixies/vid/006.mp4",
                    subtitle: "arab tili/fixies/sub/006.srt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "arab tili/fixies/les/006A.js",
                            audioTimes: "arab tili/fixies/aud_tim/006A.js",
                            audio:      "arab tili/fixies/aud/006A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "arab tili/fixies/les/006B.js",
                            audioTimes: "arab tili/fixies/aud_tim/006B.js",
                            audio:      "arab tili/fixies/aud/006B.mp3"
                        }
                    ]
                },
                {
                    num: 7,
                    title: "جهاز التحكم الريموت - الحلقة الخامسة",
                    about: "",
                    img:      "arab tili/fixies/img/007.jpg",
                    video:    "arab tili/fixies/vid/007.mp4",
                    subtitle: "arab tili/fixies/sub/007.srt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "arab tili/fixies/les/007A.js",
                            audioTimes: "arab tili/fixies/aud_tim/007A.js",
                            audio:      "arab tili/fixies/aud/007A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "arab tili/fixies/les/007B.js",
                            audioTimes: "arab tili/fixies/aud_tim/007B.js",
                            audio:      "arab tili/fixies/aud/007B.mp3"
                        }
                    ]
                },
                {
                    num: 8,
                    title: "البالوعه - الحلقة الاولى",
                    about: "",
                    img:      "arab tili/fixies/img/008.jpg",
                    video:    "arab tili/fixies/vid/008.mp4",
                    subtitle: "arab tili/fixies/sub/008.srt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "arab tili/fixies/les/008A.js",
                            audioTimes: "arab tili/fixies/aud_tim/008A.js",
                            audio:      "arab tili/fixies/aud/008A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "arab tili/fixies/les/008B.js",
                            audioTimes: "arab tili/fixies/aud_tim/008B.js",
                            audio:      "arab tili/fixies/aud/008B.mp3"
                        }
                    ]
                },
                {
                    num: 9,
                    title: "القطار الكهربائي - الحلقة 15",
                    about: "",
                    img:      "arab tili/fixies/img/009.jpg",
                    video:    "arab tili/fixies/vid/009.mp4",
                    subtitle: "arab tili/fixies/sub/009.srt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "arab tili/fixies/les/009A.js",
                            audioTimes: "arab tili/fixies/aud_tim/009A.js",
                            audio:      "arab tili/fixies/aud/009A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "arab tili/fixies/les/009B.js",
                            audioTimes: "arab tili/fixies/aud_tim/009B.js",
                            audio:      "arab tili/fixies/aud/009B.mp3"
                        }
                    ]
                },
                {
                    num: 10,
                    title: "القفل التوافقي - الحلقة السادسة",
                    about: "",
                    img:      "arab tili/fixies/img/010.jpg",
                    video:    "arab tili/fixies/vid/010.mp4",
                    subtitle: "arab tili/fixies/sub/010.srt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "arab tili/fixies/les/010A.js",
                            audioTimes: "arab tili/fixies/aud_tim/010A.js",
                            audio:      "arab tili/fixies/aud/010A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "arab tili/fixies/les/010B.js",
                            audioTimes: "arab tili/fixies/aud_tim/010B.js",
                            audio:      "arab tili/fixies/aud/010B.mp3"
                        }
                    ]
                },
                {
                    num: 11,
                    title: "المروحه - الحلقة 20",
                    about: "",
                    img:      "arab tili/fixies/img/011.jpg",
                    video:    "arab tili/fixies/vid/011.mp4",
                    subtitle: "arab tili/fixies/sub/011.srt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "arab tili/fixies/les/011A.js",
                            audioTimes: "arab tili/fixies/aud_tim/011A.js",
                            audio:      "arab tili/fixies/aud/011A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "arab tili/fixies/les/011B.js",
                            audioTimes: "arab tili/fixies/aud_tim/011B.js",
                            audio:      "arab tili/fixies/aud/011B.mp3"
                        }
                    ]
                },
                {
                    num: 12,
                    title: "العتلة - الحلقة الرابعة",
                    about: "",
                    img:      "arab tili/fixies/img/012.jpg",
                    video:    "arab tili/fixies/vid/012.mp4",
                    subtitle: "arab tili/fixies/sub/012.srt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "arab tili/fixies/les/012A.js",
                            audioTimes: "arab tili/fixies/aud_tim/012A.js",
                            audio:      "arab tili/fixies/aud/012A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "arab tili/fixies/les/012B.js",
                            audioTimes: "arab tili/fixies/aud_tim/012B.js",
                            audio:      "arab tili/fixies/aud/012B.mp3"
                        }
                    ]
                },
                {
                    num: 13,
                    title: "الدباسة - الحلقة 14",
                    about: "",
                    img:      "arab tili/fixies/img/013.jpg",
                    video:    "arab tili/fixies/vid/013.mp4",
                    subtitle: "arab tili/fixies/sub/013.srt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "arab tili/fixies/les/013A.js",
                            audioTimes: "arab tili/fixies/aud_tim/013A.js",
                            audio:      "arab tili/fixies/aud/013A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "arab tili/fixies/les/013B.js",
                            audioTimes: "arab tili/fixies/aud_tim/013B.js",
                            audio:      "arab tili/fixies/aud/013B.mp3"
                        }
                    ]
                },
                {
                    num: 14,
                    title: "الميكرويف  - الحلقة 11",
                    about: "",
                    img:      "arab tili/fixies/img/015.jpg",
                    video:    "arab tili/fixies/vid/014.mp4",
                    subtitle: "arab tili/fixies/sub/014.srt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "arab tili/fixies/les/014A.js",
                            audioTimes: "arab tili/fixies/aud_tim/014A.js",
                            audio:      "arab tili/fixies/aud/014A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "arab tili/fixies/les/014B.js",
                            audioTimes: "arab tili/fixies/aud_tim/014B.js",
                            audio:      "arab tili/fixies/aud/014B.mp3"
                        }
                    ]
                },
                {
                    num: 15,
                    title: "حوض السمك - الحلقة 19",
                    about: "",
                    img:      "arab tili/fixies/img/016.jpg",
                    video:    "arab tili/fixies/vid/015.mp4",
                    subtitle: "arab tili/fixies/sub/015.srt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "arab tili/fixies/les/015A.js",
                            audioTimes: "arab tili/fixies/aud_tim/015A.js",
                            audio:      "arab tili/fixies/aud/015A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "arab tili/fixies/les/015B.js",
                            audioTimes: "arab tili/fixies/aud_tim/015B.js",
                            audio:      "arab tili/fixies/aud/015B.mp3"
                        }
                    ]
                },
                {
                    num: 16,
                    title: "الفريق - الحلقة 54",
                    about: "",
                    img:      "arab tili/fixies/img/014.jpg",
                    video:    "arab tili/fixies/vid/016.mp4",
                    subtitle: "arab tili/fixies/sub/016.srt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "arab tili/fixies/les/016A.js",
                            audioTimes: "arab tili/fixies/aud_tim/016A.js",
                            audio:      "arab tili/fixies/aud/016A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "arab tili/fixies/les/016B.js",
                            audioTimes: "arab tili/fixies/aud_tim/016B.js",
                            audio:      "arab tili/fixies/aud/016B.mp3"
                        }
                    ]
                },
                {
                    num: 17,
                    title: "الرجل الآلي - الحلقة 29",
                    about: "",
                    img:      "arab tili/fixies/img/018.jpg",
                    video:    "arab tili/fixies/vid/017.mp4",
                    subtitle: "arab tili/fixies/sub/017.srt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "arab tili/fixies/les/017A.js",
                            audioTimes: "arab tili/fixies/aud_tim/017A.js",
                            audio:      "arab tili/fixies/aud/017A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "arab tili/fixies/les/017B.js",
                            audioTimes: "arab tili/fixies/aud_tim/017B.js",
                            audio:      "arab tili/fixies/aud/017B.mp3"
                        }
                    ]
                },
                {
                    num: 18,
                    title: "العصا السحرية - الحلقة 31",
                    about: "",
                    img:      "arab tili/fixies/img/017.jpg",
                    video:    "arab tili/fixies/vid/018.mp4",
                    subtitle: "arab tili/fixies/sub/018.srt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "arab tili/fixies/les/018A.js",
                            audioTimes: "arab tili/fixies/aud_tim/018A.js",
                            audio:      "arab tili/fixies/aud/018A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "arab tili/fixies/les/018B.js",
                            audioTimes: "arab tili/fixies/aud_tim/018B.js",
                            audio:      "arab tili/fixies/aud/018B.mp3"
                        }
                    ]
                },
                {
                    num: 19,
                    title: "الابريق الكهربائي - الحلقة الثامنة",
                    about: "",
                    img:      "arab tili/fixies/img/020.jpg",
                    video:    "arab tili/fixies/vid/019.mp4",
                    subtitle: "arab tili/fixies/sub/019.srt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "arab tili/fixies/les/019A.js",
                            audioTimes: "arab tili/fixies/aud_tim/019A.js",
                            audio:      "arab tili/fixies/aud/019A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "arab tili/fixies/les/019B.js",
                            audioTimes: "arab tili/fixies/aud_tim/019B.js",
                            audio:      "arab tili/fixies/aud/019B.mp3"
                        }
                    ]
                },
                {
                    num: 20,
                    title: "قطع الغيار - الحلقة 17",
                    about: "",
                    img:      "arab tili/fixies/img/021.jpg",
                    video:    "arab tili/fixies/vid/020.mp4",
                    subtitle: "arab tili/fixies/sub/020.srt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "arab tili/fixies/les/020A.js",
                            audioTimes: "arab tili/fixies/aud_tim/020A.js",
                            audio:      "arab tili/fixies/aud/020A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "arab tili/fixies/les/020B.js",
                            audioTimes: "arab tili/fixies/aud_tim/020B.js",
                            audio:      "arab tili/fixies/aud/020B.mp3"
                        }
                    ]
                },
                {
                    num: 21,
                    title: "كاشف الكذب - الحلقة 52 ",
                    about: "",
                    img:      "arab tili/fixies/img/019.jpg",
                    video:    "arab tili/fixies/vid/021.mp4",
                    subtitle: "arab tili/fixies/sub/021.srt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "arab tili/fixies/les/021A.js",
                            audioTimes: "arab tili/fixies/aud_tim/021A.js",
                            audio:      "arab tili/fixies/aud/021A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "arab tili/fixies/les/021B.js",
                            audioTimes: "arab tili/fixies/aud_tim/021B.js",
                            audio:      "arab tili/fixies/aud/021B.mp3"
                        }
                    ]
                },
                {
                    num: 22,
                    title: "المنبه - الحلقة الثالثة",
                    about: "",
                    img:      "arab tili/fixies/img/022.jpg",
                    video:    "arab tili/fixies/vid/022.mp4",
                    subtitle: "arab tili/fixies/sub/022.srt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "arab tili/fixies/les/022A.js",
                            audioTimes: "arab tili/fixies/aud_tim/022A.js",
                            audio:      "arab tili/fixies/aud/022A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "arab tili/fixies/les/022B.js",
                            audioTimes: "arab tili/fixies/aud_tim/022B.js",
                            audio:      "arab tili/fixies/aud/022B.mp3"
                        }
                    ]
                },
                {
                    num: 23,
                    title: "القرص المدمج - الحلقة الثانية ",
                    about: "",
                    img:      "arab tili/fixies/img/023.jpg",
                    video:    "arab tili/fixies/vid/023.mp4",
                    subtitle: "arab tili/fixies/sub/023.srt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "arab tili/fixies/les/023A.js",
                            audioTimes: "arab tili/fixies/aud_tim/023A.js",
                            audio:      "arab tili/fixies/aud/023A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "arab tili/fixies/les/023B.js",
                            audioTimes: "arab tili/fixies/aud_tim/023B.js",
                            audio:      "arab tili/fixies/aud/023B.mp3"
                        }
                    ]
                },
                {
                    num: 24,
                    title: "الكيبورد - لوحة المفاتيح - الحلقة 18 ",
                    about: "",
                    img:      "arab tili/fixies/img/024.jpg",
                    video:    "arab tili/fixies/vid/024.mp4",
                    subtitle: "arab tili/fixies/sub/024.srt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "arab tili/fixies/les/024A.js",
                            audioTimes: "arab tili/fixies/aud_tim/024A.js",
                            audio:      "arab tili/fixies/aud/024A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "arab tili/fixies/les/024B.js",
                            audioTimes: "arab tili/fixies/aud_tim/024B.js",
                            audio:      "arab tili/fixies/aud/024B.mp3"
                        }
                    ]
                },
                {
                    num: 25,
                    title: "المغناطيس - الحلقة 24  ",
                    about: "",
                    img:      "arab tili/fixies/img/025.jpg",
                    video:    "arab tili/fixies/vid/025.mp4",
                    subtitle: "arab tili/fixies/sub/025.srt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "arab tili/fixies/les/025A.js",
                            audioTimes: "arab tili/fixies/aud_tim/025A.js",
                            audio:      "arab tili/fixies/aud/025A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "arab tili/fixies/les/025B.js",
                            audioTimes: "arab tili/fixies/aud_tim/025B.js",
                            audio:      "arab tili/fixies/aud/025B.mp3"
                        }
                    ]
                },
                {
                    num: 26,
                    title: "المغناطيس - الحلقة 24  ",
                    about: "",
                    img:      "arab tili/fixies/img/026.jpg",
                    video:    "arab tili/fixies/vid/026.mp4",
                    subtitle: "arab tili/fixies/sub/026.srt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "arab tili/fixies/les/026A.js",
                            audioTimes: "arab tili/fixies/aud_tim/026A.js",
                            audio:      "arab tili/fixies/aud/026A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "arab tili/fixies/les/026B.js",
                            audioTimes: "arab tili/fixies/aud_tim/026B.js",
                            audio:      "arab tili/fixies/aud/026B.mp3"
                        }
                    ]
                },
                {
                    num: 27,
                    title: "المغناطيس - الحلقة 24  ",
                    about: "",
                    img:      "arab tili/fixies/img/028.jpg",
                    video:    "arab tili/fixies/vid/027.mp4",
                    subtitle: "arab tili/fixies/sub/027.srt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "arab tili/fixies/les/027A.js",
                            audioTimes: "arab tili/fixies/aud_tim/027A.js",
                            audio:      "arab tili/fixies/aud/027A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "arab tili/fixies/les/027B.js",
                            audioTimes: "arab tili/fixies/aud_tim/027B.js",
                            audio:      "arab tili/fixies/aud/027B.mp3"
                        }
                    ]
                },
                {
                    num: 28,
                    title: "المغناطيس - الحلقة 24  ",
                    about: "",
                    img:      "arab tili/fixies/img/027.jpg",
                    video:    "arab tili/fixies/vid/028.mp4",
                    subtitle: "arab tili/fixies/sub/028.srt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "arab tili/fixies/les/028A.js",
                            audioTimes: "arab tili/fixies/aud_tim/028A.js",
                            audio:      "arab tili/fixies/aud/028A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "arab tili/fixies/les/028B.js",
                            audioTimes: "arab tili/fixies/aud_tim/028B.js",
                            audio:      "arab tili/fixies/aud/028B.mp3"
                        }
                    ]
                },
                {
                    num: 29,
                    title: "المغناطيس - الحلقة 24  ",
                    about: "",
                    img:      "arab tili/fixies/img/029.jpg",
                    video:    "arab tili/fixies/vid/029.mp4",
                    subtitle: "arab tili/fixies/sub/029.srt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "arab tili/fixies/les/029A.js",
                            audioTimes: "arab tili/fixies/aud_tim/029A.js",
                            audio:      "arab tili/fixies/aud/029A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "arab tili/fixies/les/028B.js",
                            audioTimes: "arab tili/fixies/aud_tim/028B.js",
                            audio:      "arab tili/fixies/aud/028B.mp3"
                        }
                    ]
                },
                {
                    num: 30,
                    title: "المغناطيس - الحلقة 24  ",
                    about: "",
                    img:      "arab tili/fixies/img/035.jpg",
                    video:    "arab tili/fixies/vid/030.mp4",
                    subtitle: "arab tili/fixies/sub/030.srt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "arab tili/fixies/les/030A.js",
                            audioTimes: "arab tili/fixies/aud_tim/028A.js",
                            audio:      "arab tili/fixies/aud/028A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "arab tili/fixies/les/028B.js",
                            audioTimes: "arab tili/fixies/aud_tim/028B.js",
                            audio:      "arab tili/fixies/aud/028B.mp3"
                        }
                    ]
                },
                {
                    num: 31,
                    title: "المغناطيس - الحلقة 24  ",
                    about: "",
                    img:      "arab tili/fixies/img/030.jpg",
                    video:    "arab tili/fixies/vid/031.mp4",
                    subtitle: "arab tili/fixies/sub/031.srt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "arab tili/fixies/les/031A.js",
                            audioTimes: "arab tili/fixies/aud_tim/028A.js",
                            audio:      "arab tili/fixies/aud/028A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "arab tili/fixies/les/028B.js",
                            audioTimes: "arab tili/fixies/aud_tim/028B.js",
                            audio:      "arab tili/fixies/aud/028B.mp3"
                        }
                    ]
                },
                {
                    num: 32,
                    title: "المغناطيس - الحلقة 24  ",
                    about: "",
                    img:      "arab tili/fixies/img/031.jpg",
                    video:    "arab tili/fixies/vid/032.mp4",
                    subtitle: "arab tili/fixies/sub/032.srt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "arab tili/fixies/les/028A.js",
                            audioTimes: "arab tili/fixies/aud_tim/028A.js",
                            audio:      "arab tili/fixies/aud/028A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "arab tili/fixies/les/028B.js",
                            audioTimes: "arab tili/fixies/aud_tim/028B.js",
                            audio:      "arab tili/fixies/aud/028B.mp3"
                        }
                    ]
                },
                {
                    num: 33,
                    title: "المغناطيس - الحلقة 24  ",
                    about: "",
                    img:      "arab tili/fixies/img/037.jpg",
                    video:    "arab tili/fixies/vid/033.mp4",
                    subtitle: "arab tili/fixies/sub/033.srt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "arab tili/fixies/les/028A.js",
                            audioTimes: "arab tili/fixies/aud_tim/028A.js",
                            audio:      "arab tili/fixies/aud/028A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "arab tili/fixies/les/028B.js",
                            audioTimes: "arab tili/fixies/aud_tim/028B.js",
                            audio:      "arab tili/fixies/aud/028B.mp3"
                        }
                    ]
                },
                {
                    num: 34,
                    title: "المغناطيس - الحلقة 24  ",
                    about: "",
                    img:      "arab tili/fixies/img/033.jpg",
                    video:    "arab tili/fixies/vid/034.mp4",
                    subtitle: "arab tili/fixies/sub/034.srt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "arab tili/fixies/les/028A.js",
                            audioTimes: "arab tili/fixies/aud_tim/028A.js",
                            audio:      "arab tili/fixies/aud/028A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "arab tili/fixies/les/028B.js",
                            audioTimes: "arab tili/fixies/aud_tim/028B.js",
                            audio:      "arab tili/fixies/aud/028B.mp3"
                        }
                    ]
                },
                {
                    num: 35,
                    title: "المغناطيس - الحلقة 24  ",
                    about: "",
                    img:      "arab tili/fixies/img/041.jpg",
                    video:    "arab tili/fixies/vid/035.mp4",
                    subtitle: "arab tili/fixies/sub/035.srt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "arab tili/fixies/les/028A.js",
                            audioTimes: "arab tili/fixies/aud_tim/028A.js",
                            audio:      "arab tili/fixies/aud/028A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "arab tili/fixies/les/028B.js",
                            audioTimes: "arab tili/fixies/aud_tim/028B.js",
                            audio:      "arab tili/fixies/aud/028B.mp3"
                        }
                    ]
                },
                {
                    num: 36,
                    title: "المغناطيس - الحلقة 24  ",
                    about: "",
                    img:      "arab tili/fixies/img/034.jpg",
                    video:    "arab tili/fixies/vid/036.mp4",
                    subtitle: "arab tili/fixies/sub/036.srt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "arab tili/fixies/les/028A.js",
                            audioTimes: "arab tili/fixies/aud_tim/028A.js",
                            audio:      "arab tili/fixies/aud/028A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "arab tili/fixies/les/028B.js",
                            audioTimes: "arab tili/fixies/aud_tim/028B.js",
                            audio:      "arab tili/fixies/aud/028B.mp3"
                        }
                    ]
                },
                {
                    num: 37,
                    title: "المغناطيس - الحلقة 24  ",
                    about: "",
                    img:      "arab tili/fixies/img/042.jpg",
                    video:    "arab tili/fixies/vid/037.mp4",
                    subtitle: "arab tili/fixies/sub/037.srt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "arab tili/fixies/les/028A.js",
                            audioTimes: "arab tili/fixies/aud_tim/028A.js",
                            audio:      "arab tili/fixies/aud/028A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "arab tili/fixies/les/028B.js",
                            audioTimes: "arab tili/fixies/aud_tim/028B.js",
                            audio:      "arab tili/fixies/aud/028B.mp3"
                        }
                    ]
                },
                {
                    num: 38,
                    title: "المغناطيس - الحلقة 24  ",
                    about: "",
                    img:      "arab tili/fixies/img/038.jpg",
                    video:    "arab tili/fixies/vid/038.mp4",
                    subtitle: "arab tili/fixies/sub/038.srt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "arab tili/fixies/les/028A.js",
                            audioTimes: "arab tili/fixies/aud_tim/028A.js",
                            audio:      "arab tili/fixies/aud/028A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "arab tili/fixies/les/028B.js",
                            audioTimes: "arab tili/fixies/aud_tim/028B.js",
                            audio:      "arab tili/fixies/aud/028B.mp3"
                        }
                    ]
                },
                {
                    num: 39,
                    title: "المغناطيس - الحلقة 24  ",
                    about: "",
                    img:      "arab tili/fixies/img/036.jpg",
                    video:    "arab tili/fixies/vid/039.mp4",
                    subtitle: "arab tili/fixies/sub/039.srt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "arab tili/fixies/les/028A.js",
                            audioTimes: "arab tili/fixies/aud_tim/028A.js",
                            audio:      "arab tili/fixies/aud/028A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "arab tili/fixies/les/039B.js",
                            audioTimes: "arab tili/fixies/aud_tim/028B.js",
                            audio:      "arab tili/fixies/aud/028B.mp3"
                        }
                    ]
                },
                {
                    num: 40,
                    title: "المغناطيس - الحلقة 24  ",
                    about: "",
                    img:      "arab tili/fixies/img/039.jpg",
                    video:    "arab tili/fixies/vid/040.mp4",
                    subtitle: "arab tili/fixies/sub/040.srt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "arab tili/fixies/les/028A.js",
                            audioTimes: "arab tili/fixies/aud_tim/028A.js",
                            audio:      "arab tili/fixies/aud/028A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "arab tili/fixies/les/028B.js",
                            audioTimes: "arab tili/fixies/aud_tim/028B.js",
                            audio:      "arab tili/fixies/aud/028B.mp3"
                        }
                    ]
                },
                {
                    num: 41,
                    title: "المغناطيس - الحلقة 24  ",
                    about: "",
                    img:      "arab tili/fixies/img/040.jpg",
                    video:    "arab tili/fixies/vid/041.mp4",
                    subtitle: "arab tili/fixies/sub/041.srt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "arab tili/fixies/les/028A.js",
                            audioTimes: "arab tili/fixies/aud_tim/028A.js",
                            audio:      "arab tili/fixies/aud/028A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "arab tili/fixies/les/028B.js",
                            audioTimes: "arab tili/fixies/aud_tim/028B.js",
                            audio:      "arab tili/fixies/aud/028B.mp3"
                        }
                    ]
                },
                {
                    num: 42,
                    title: "المغناطيس - الحلقة 24  ",
                    about: "",
                    img:      "arab tili/fixies/img/045.jpg",
                    video:    "arab tili/fixies/vid/042.mp4",
                    subtitle: "arab tili/fixies/sub/042.srt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "arab tili/fixies/les/028A.js",
                            audioTimes: "arab tili/fixies/aud_tim/028A.js",
                            audio:      "arab tili/fixies/aud/028A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "arab tili/fixies/les/028B.js",
                            audioTimes: "arab tili/fixies/aud_tim/028B.js",
                            audio:      "arab tili/fixies/aud/028B.mp3"
                        }
                    ]
                },
                {
                    num: 43,
                    title: "المغناطيس - الحلقة 24  ",
                    about: "",
                    img:      "arab tili/fixies/img/043.jpg",
                    video:    "arab tili/fixies/vid/043.mp4",
                    subtitle: "arab tili/fixies/sub/043.srt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "arab tili/fixies/les/028A.js",
                            audioTimes: "arab tili/fixies/aud_tim/028A.js",
                            audio:      "arab tili/fixies/aud/028A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "arab tili/fixies/les/028B.js",
                            audioTimes: "arab tili/fixies/aud_tim/028B.js",
                            audio:      "arab tili/fixies/aud/028B.mp3"
                        }
                    ]
                },
                {
                    num: 44,
                    title: "المغناطيس - الحلقة 24  ",
                    about: "",
                    img:      "arab tili/fixies/img/032.jpg",
                    video:    "arab tili/fixies/vid/044.mp4",
                    subtitle: "arab tili/fixies/sub/044.srt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "arab tili/fixies/les/028A.js",
                            audioTimes: "arab tili/fixies/aud_tim/028A.js",
                            audio:      "arab tili/fixies/aud/028A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "arab tili/fixies/les/028B.js",
                            audioTimes: "arab tili/fixies/aud_tim/028B.js",
                            audio:      "arab tili/fixies/aud/028B.mp3"
                        }
                    ]
                },
                {
                    num: 45,
                    title: "المغناطيس - الحلقة 24  ",
                    about: "",
                    img:      "arab tili/fixies/img/044.jpg",
                    video:    "arab tili/fixies/vid/045.mp4",
                    subtitle: "arab tili/fixies/sub/045.srt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "arab tili/fixies/les/028A.js",
                            audioTimes: "arab tili/fixies/aud_tim/028A.js",
                            audio:      "arab tili/fixies/aud/028A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "arab tili/fixies/les/028B.js",
                            audioTimes: "arab tili/fixies/aud_tim/028B.js",
                            audio:      "arab tili/fixies/aud/028B.mp3"
                        }
                    ]
                },
                {
                    num: 46,
                    title: "المغناطيس - الحلقة 24  ",
                    about: "",
                    img:      "arab tili/fixies/img/044.jpg",
                    video:    "arab tili/fixies/vid/046.mp4",
                    subtitle: "arab tili/fixies/sub/046.srt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "arab tili/fixies/les/028A.js",
                            audioTimes: "arab tili/fixies/aud_tim/028A.js",
                            audio:      "arab tili/fixies/aud/028A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "arab tili/fixies/les/028B.js",
                            audioTimes: "arab tili/fixies/aud_tim/028B.js",
                            audio:      "arab tili/fixies/aud/028B.mp3"
                        }
                    ]
                },
                {
                    num: 47,
                    title: "المغناطيس - الحلقة 24  ",
                    about: "",
                    img:      "arab tili/fixies/img/047.jpg",
                    video:    "arab tili/fixies/vid/047.mp4",
                    subtitle: "arab tili/fixies/sub/047.srt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "arab tili/fixies/les/028A.js",
                            audioTimes: "arab tili/fixies/aud_tim/028A.js",
                            audio:      "arab tili/fixies/aud/028A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "arab tili/fixies/les/028B.js",
                            audioTimes: "arab tili/fixies/aud_tim/028B.js",
                            audio:      "arab tili/fixies/aud/028B.mp3"
                        }
                    ]
                },
                {
                    num: 48,
                    title: "المغناطيس - الحلقة 24  ",
                    about: "",
                    img:      "arab tili/fixies/img/048.jpg",
                    video:    "arab tili/fixies/vid/048.mp4",
                    subtitle: "arab tili/fixies/sub/048.srt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "arab tili/fixies/les/028A.js",
                            audioTimes: "arab tili/fixies/aud_tim/028A.js",
                            audio:      "arab tili/fixies/aud/028A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "arab tili/fixies/les/028B.js",
                            audioTimes: "arab tili/fixies/aud_tim/028B.js",
                            audio:      "arab tili/fixies/aud/028B.mp3"
                        }
                    ]
                },
                {
                    num: 49,
                    title: "المغناطيس - الحلقة 24  ",
                    about: "",
                    img:      "arab tili/fixies/img/049.jpg",
                    video:    "arab tili/fixies/vid/049.mp4",
                    subtitle: "arab tili/fixies/sub/049.srt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "arab tili/fixies/les/028A.js",
                            audioTimes: "arab tili/fixies/aud_tim/028A.js",
                            audio:      "arab tili/fixies/aud/028A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "arab tili/fixies/les/028B.js",
                            audioTimes: "arab tili/fixies/aud_tim/028B.js",
                            audio:      "arab tili/fixies/aud/028B.mp3"
                        }
                    ]
                },
                {
                    num: 50,
                    title: "المغناطيس - الحلقة 24  ",
                    about: "",
                    img:      "arab tili/fixies/img/050.jpg",
                    video:    "arab tili/fixies/vid/050.mp4",
                    subtitle: "arab tili/fixies/sub/050.srt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "arab tili/fixies/les/028A.js",
                            audioTimes: "arab tili/fixies/aud_tim/028A.js",
                            audio:      "arab tili/fixies/aud/028A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "arab tili/fixies/les/028B.js",
                            audioTimes: "arab tili/fixies/aud_tim/028B.js",
                            audio:      "arab tili/fixies/aud/028B.mp3"
                        }
                    ]
                },
                {
                    num: 51,
                    title: "المغناطيس - الحلقة 24  ",
                    about: "",
                    img:      "arab tili/fixies/img/051.jpg",
                    video:    "arab tili/fixies/vid/051.mp4",
                    subtitle: "arab tili/fixies/sub/051.srt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "arab tili/fixies/les/028A.js",
                            audioTimes: "arab tili/fixies/aud_tim/028A.js",
                            audio:      "arab tili/fixies/aud/028A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "arab tili/fixies/les/028B.js",
                            audioTimes: "arab tili/fixies/aud_tim/028B.js",
                            audio:      "arab tili/fixies/aud/028B.mp3"
                        }
                    ]
                },
                {
                    num: 52,
                    title: "المغناطيس - الحلقة 24  ",
                    about: "",
                    img:      "arab tili/fixies/img/054.jpg",
                    video:    "arab tili/fixies/vid/052.mp4",
                    subtitle: "arab tili/fixies/sub/052.srt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "arab tili/fixies/les/028A.js",
                            audioTimes: "arab tili/fixies/aud_tim/028A.js",
                            audio:      "arab tili/fixies/aud/028A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "arab tili/fixies/les/028B.js",
                            audioTimes: "arab tili/fixies/aud_tim/028B.js",
                            audio:      "arab tili/fixies/aud/028B.mp3"
                        }
                    ]
                },
                {
                    num: 53,
                    title: "المغناطيس - الحلقة 24  ",
                    about: "",
                    img:      "arab tili/fixies/img/053.jpg",
                    video:    "arab tili/fixies/vid/053.mp4",
                    subtitle: "arab tili/fixies/sub/053.srt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "arab tili/fixies/les/028A.js",
                            audioTimes: "arab tili/fixies/aud_tim/028A.js",
                            audio:      "arab tili/fixies/aud/028A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "arab tili/fixies/les/028B.js",
                            audioTimes: "arab tili/fixies/aud_tim/028B.js",
                            audio:      "arab tili/fixies/aud/028B.mp3"
                        }
                    ]
                },
                {
                    num: 54,
                    title: "المغناطيس - الحلقة 24  ",
                    about: "",
                    img:      "arab tili/fixies/img/054.jpg",
                    video:    "arab tili/fixies/vid/054.mp4",
                    subtitle: "arab tili/fixies/sub/054.srt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "arab tili/fixies/les/028A.js",
                            audioTimes: "arab tili/fixies/aud_tim/028A.js",
                            audio:      "arab tili/fixies/aud/028A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "arab tili/fixies/les/028B.js",
                            audioTimes: "arab tili/fixies/aud_tim/028B.js",
                            audio:      "arab tili/fixies/aud/028B.mp3"
                        }
                    ]
                },
                {
                    num: 55,
                    title: "المغناطيس - الحلقة 24  ",
                    about: "",
                    img:      "arab tili/fixies/img/055.jpg",
                    video:    "arab tili/fixies/vid/055.mp4",
                    subtitle: "arab tili/fixies/sub/055.srt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "arab tili/fixies/les/028A.js",
                            audioTimes: "arab tili/fixies/aud_tim/028A.js",
                            audio:      "arab tili/fixies/aud/028A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "arab tili/fixies/les/028B.js",
                            audioTimes: "arab tili/fixies/aud_tim/028B.js",
                            audio:      "arab tili/fixies/aud/028B.mp3"
                        }
                    ]
                }
                
            ]
        },
        {
            id: "ibn-hanbal",
            language: "arab-tili",
            title: "مسلسل الإمام احمد بن حنبل",
            type: "kino",
            img: "arab tili/img/playlist2.webp",
            meta: "30 ta epizod",
            episodes: []
        },

        // ================= QUR'ON =================
        // id albatta "quran" bo'lishi shart — book-init.js shu orqali
        // Qur'onga xos rejimni (bismillah, ayah-marker, RTL Quron shrifti) yoqadi.
        {
            id: "quran",
            language: "arab-tili",
            title: "قرآن",
            type: "book",
            img: "arab tili/img/playlist3.jpg",
            meta: "114 sura",
            episodes: [
                {
                    num: 1,
                    title: "سورة الفاتحة",
                    about: "Ochuvchi sura — 7 oyat",
                    img: "",

                    // 4 qori — audio fayllarning o'zini hali qo'shishingiz kerak
                    // (arab tili/quran/audio_book/<qori>/al-fatiha.mp3)
                    audioBook: {
                        "Mishary Rashid":         "arab tili/quran/audio_book/mishary/001. Al-Fatihah - Al'Afasi.mp3",
                        // "Abdul Basit":            "arab tili/quran/audio_book/basit/al-fatiha.mp3",
                        // "Saad al-Ghamdi":         "arab tili/quran/audio_book/ghamdi/al-fatiha.mp3",
                        // "Abdul Rahman al-Sudais": "arab tili/quran/audio_book/sudais/al-fatiha.mp3"
                    },
                    // Hozircha faqat Mishary Rashid uchun vaqt fayli tayyor
                    // (arab tili/quran/audio_times_book/al-fatiha/mishary.js).
                    // Qolganlar uchun ham xuddi shu formatda fayl tayyorlab, shu yerga
                    // qo'shing — fayl mavjud bo'lmaguncha o'sha qori uchun oyat
                    // ranga bo'yalmaydi, lekin audio baribir ishlaydi.
                    audioBookTimes: {
                        "Mishary Rashid": "arab tili/quran/audio_times_book/minshary/001-fatiha.js",
                        // "Abdul Basit":            "arab tili/quran/audio_times_book/al-fatiha/basit.js",
                        // "Saad al-Ghamdi":         "arab tili/quran/audio_times_book/al-fatiha/ghamdi.js",
                        // "Abdul Rahman al-Sudais": "arab tili/quran/audio_times_book/al-fatiha/sudais.js"
                    },
                    // clipRange kerak emas — bu fayllar faqat shu suraga tegishli, bo'linmagan

                    analyses: [
                        {
                            label:      "Tahlil 1",
                            lessons:    "arab tili/quran/lessons/001 fatiha-P.js",
                            audioTimes: "arab tili/quran/audio_times/al-fatiha.js",
                            audio:      "arab tili/quran/audio/001 fatiha-P.mp3"
                        },
                        {
                            label:      "Tahlil 2",
                            lessons:    "arab tili/quran/lessons/001 fatiha-C.js",
                            audioTimes: "arab tili/quran/audio_times/al-fatiha.js",
                            audio:      "arab tili/quran/audio/001 fatiha-C.mp3"
                        }
                        // Ikkinchi bosqich (masalan so'zma-so'z tahlil) tayyor bo'lganda:
                        // {
                        //     label:      "So'zma-so'z tahlil",
                        //     lessons:    "arab tili/quran/lessons/al-fatiha_edited.js",
                        //     audioTimes: "arab tili/quran/audio_times/al-fatiha_edited.js",
                        //     audio:      "arab tili/quran/audio/al-fatiha_edited_analysis.mp3"
                        // }
                    ],
                },
                {
                    num: 2,
                    title: "سورة البقرة",
                    about: "Sura 2 — 286 oyat",
                    img: "",
                    audioBook: {
                        "Mishary Rashid":         "https://server8.mp3quran.net/afs/002.mp3",
                        // "Abdul Basit":            "arab tili/quran/audio_book/basit/baqara.mp3",
                        // "Saad al-Ghamdi":         "arab tili/quran/audio_book/ghamdi/baqara.mp3",
                        // "Abdul Rahman al-Sudais": "arab tili/quran/audio_book/sudais/baqara.mp3"
                    },
                    clipRange: {
                        "Mishary Rashid": "00:00:00,000 - 00:12:52,340"
                    },
                    audioBookTimes: {
                        "Mishary Rashid": "arab tili/quran/audio_times_book/baqara/mishary.js"
                        // "Abdul Basit":            "arab tili/quran/audio_times_book/baqara/basit.js",
                        // "Saad al-Ghamdi":         "arab tili/quran/audio_times_book/baqara/ghamdi.js",
                        // "Abdul Rahman al-Sudais": "arab tili/quran/audio_times_book/baqara/sudais.js"
                    },
                    analyses: [
                        {
                            label:      "Tahlil 1",
                            lessons:    "arab tili/quran/lessons/baqara.js",
                            audioTimes: "arab tili/quran/audio_times/baqara.js",
                            audio:      "arab tili/quran/audio/baqara_analysis.mp3"
                        },
                        {
                            label:      "Tahlil 2",
                            lessons:    "arab tili/quran/lessons/baqara.js",
                            audioTimes: "arab tili/quran/audio_times/baqara.js",
                            audio:      "arab tili/quran/audio/baqara_analysis.mp3"
                        }
                    ]
                 }

                // Keyingi sura (masalan Baqara) qo'shilganda xuddi shu naqsh
                // takrorlanadi. Agar sura bir nechta "qism"ga bo'linsa (Baqara
                // kabi), har bir qism alohida episode bo'lib, audioBook bitta
                // uzun faylga ishora qiladi va clipRange orqali o'z oralig'i
                // ko'rsatiladi — bu haqda oldingi javobimda to'liq misol bergan
                // edim (audioBook/clipRange bilan birga).
            ]
        },

        // ================= INGLIZ TILI =================
        {
            id: "fiksiz",
            language: "ingliz-tili",
            title: "Fixies",
            type: "mult",
            img: "inglis tili/img/hqdefault.webp",
            meta: "epizodlar soni nomalum",
            episodes: [
                {
                    num: 1,
                    title: "The Drain",
                    about: "Tahlil ovozi qo'yilmagan",
                    img:      "",
                    video:    "inglis tili/fiksiz/videos/002 - The Drain.mp4",
                    subtitle: "inglis tili/fiksiz/srt/002 - The Drain.srt",
                    analyses: [
                        {
                            label:      "Tahlil 1",
                            lessons:    "inglis tili/fiksiz/lessons/f_1_001P.js",
                            audioTimes: "inglis tili/fiksiz/audio_times/f_1_001P.js",
                            audio:      "inglis tili/fiksiz/audio/f_1_001P.mp3"
                        },
                        {
                            label:      "Tahlil 2",
                            lessons:    "inglis tili/fiksiz/lessons/f_1_001C.js",
                            audioTimes: "inglis tili/fiksiz/audio_times/f_1_001C.js",
                            audio:      "inglis tili/fiksiz/audio/f_1_001C.mp3"
                        }
                    ]
                }
            ]
        },

        {
            id: "fixies-english-book",
            type: "book",              // "quran" EMAS — shunda isQuranBook false bo'ladi
            title: "4000 Words 1",
            img: "",
            meta: "",
            language: "ingliz-tili",
            episodes: [
                {
                    num: 1,
                    title: "Unit 1",
                    audioBook: { "Reader": "inglis tili/4000 words/aud_book/Unit 01.mp3" },
                    clipRange: { "Reader": "" },
                    audioBookTimes: { "Reader": "" },
                    analyses: [
                        {
                            label: "Tahlil",
                            lessons: "inglis tili/4000 words/les/01.js",
                            audioTimes: "inglis tili/4000 words/aud-tim-book/01P.js",
                            audio: "inglis tili/4000 words/aud_book/Unit 01.mp3"
                        },
                        {
                            label: "Tahlil2",
                            lessons: "inglis tili/4000 words/les/01.js",
                            audioTimes: "inglis tili/4000 words/aud-tim-book/01P.js",
                            audio: "inglis tili/4000 words/aud_book/Unit 01.mp3"
                        }
                    ]
                }
            ]
        }
    ]
};