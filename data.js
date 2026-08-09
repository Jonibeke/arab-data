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
                    img:      "arab tili/fixies/img/001.avif",
                    video:    "https://pub-faafccdb77b742b298c107f7c8436b69.r2.dev/videos/fixies/001.mp4",
                    subtitle: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/sub/001.srt",
                    // 5-bosqich (Test) uchun. "test" — majburiy, bo'sh
                    // qoldirilsa 5-bosqich ochilganda "test fayli qo'shilmagan"
                    // xabari chiqadi. "testIzoh" — ixtiyoriy: bo'lsa xato
                    // javobda "Izohni ko'rish" tugmasi chiqadi, bo'lmasa/bo'sh
                    // bo'lsa hech qanday xatosiz, oddiy natija bilan cheklanadi.
                    test:     "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/tests/001.txt",
                    // testIzoh: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/tests/at-Tanal_testlar_izoh.txt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/les/001A.js",
                            audioTimes: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud_tim/001A.js",
                            audio:      "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud/001A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/les/001B.js",
                            audioTimes: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud_tim/001B.js",
                            audio:      "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud/001B.mp3"
                        }
                    ]
                },
                {
                    num: 2,
                    title: "قلم الحبر - الحلقة 16",
                    about: "",
                    img:        "arab tili/fixies/img/003.jpg",
                    video:      "https://pub-faafccdb77b742b298c107f7c8436b69.r2.dev/videos/fixies/002.mp4",
                    subtitle:   "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/sub/002.srt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/les/002A.js",
                            audioTimes: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud_tim/002A.js",
                            audio:      "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud/002A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/les/002B.js",
                            audioTimes: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud_tim/002B.js",
                            audio:      "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud/002B.mp3"
                        }
                    ],
                   },
                {
                    num: 3,
                    title: "فرشاة الأسنان - الحلقة 12",
                    about: "",
                    img:      "arab tili/fixies/img/002.jpg",
                    video:    "https://pub-faafccdb77b742b298c107f7c8436b69.r2.dev/videos/fixies/003.mp4",
                    subtitle: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/sub/003.srt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/les/003A.js",
                            audioTimes: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud_tim/003A.js",
                            audio:      "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud/003A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/les/003B.js",
                            audioTimes: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud_tim/003B.js",
                            audio:      "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud/003B.mp3"
                        }
                    ]
                },
                {
                    num: 4,
                    title: "المسامير - الحلقة 13",
                    about: "",
                    img:      "arab tili/fixies/img/004.jpg",
                    video:    "https://pub-faafccdb77b742b298c107f7c8436b69.r2.dev/videos/fixies/004.mp4",
                    subtitle: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/sub/004.srt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/les/004A.js",
                            audioTimes: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud_tim/004A.js",
                            audio:      "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud/004A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/les/004B.js",
                            audioTimes: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud_tim/004B.js",
                            audio:      "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud/004B.mp3"
                        }
                    ]
                },
                {
                    num: 5,
                    title: "الثلاجة - الحلقة السابعة",
                    about: "",
                    img:      "arab tili/fixies/img/005.jpg",
                    video:    "https://pub-faafccdb77b742b298c107f7c8436b69.r2.dev/videos/fixies/005.mp4",
                    subtitle: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/sub/005.srt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/les/005A.js",
                            audioTimes: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud_tim/005A.js",
                            audio:      "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud/005A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/les/005B.js",
                            audioTimes: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud_tim/005B.js",
                            audio:      "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud/005B.mp3"
                        }
                    ]
                },
                {
                    num: 6,
                    title: "مجفف الشعر - الحلقة 28",
                    about: "",
                    img:      "arab tili/fixies/img/006.jpg",
                    video:    "https://pub-faafccdb77b742b298c107f7c8436b69.r2.dev/videos/fixies/006.mp4",
                    subtitle: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/sub/006.srt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/les/006A.js",
                            audioTimes: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud_tim/006A.js",
                            audio:      "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud/006A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/les/006B.js",
                            audioTimes: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud_tim/006B.js",
                            audio:      "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud/006B.mp3"
                        }
                    ]
                },
                {
                    num: 7,
                    title: "جهاز التحكم الريموت - الحلقة الخامسة",
                    about: "",
                    img:      "arab tili/fixies/img/007.jpg",
                    video:    "https://pub-faafccdb77b742b298c107f7c8436b69.r2.dev/videos/fixies/007.mp4",
                    subtitle: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/sub/007.srt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/les/007A.js",
                            audioTimes: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud_tim/007A.js",
                            audio:      "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud/007A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/les/007B.js",
                            audioTimes: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud_tim/007B.js",
                            audio:      "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud/007B.mp3"
                        }
                    ]
                },
                {
                    num: 8,
                    title: "البالوعه - الحلقة الاولى",
                    about: "",
                    img:      "arab tili/fixies/img/008.jpg",
                    video:    "https://pub-faafccdb77b742b298c107f7c8436b69.r2.dev/videos/fixies/008.mp4",
                    subtitle: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/sub/008.srt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/les/008A.js",
                            audioTimes: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud_tim/008A.js",
                            audio:      "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud/008A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/les/008B.js",
                            audioTimes: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud_tim/008B.js",
                            audio:      "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud/008B.mp3"
                        }
                    ]
                },
                {
                    num: 9,
                    title: "القطار الكهربائي - الحلقة 15",
                    about: "",
                    img:      "arab tili/fixies/img/009.jpg",
                    video:    "https://pub-faafccdb77b742b298c107f7c8436b69.r2.dev/videos/fixies/009.mp4",
                    subtitle: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/sub/009.srt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/les/009A.js",
                            audioTimes: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud_tim/009A.js",
                            audio:      "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud/009A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/les/009B.js",
                            audioTimes: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud_tim/009B.js",
                            audio:      "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud/009B.mp3"
                        }
                    ]
                },
                {
                    num: 10,
                    title: "القفل التوافقي - الحلقة السادسة",
                    about: "",
                    img:      "arab tili/fixies/img/010.jpg",
                    video:    "https://pub-faafccdb77b742b298c107f7c8436b69.r2.dev/videos/fixies/010.mp4",
                    subtitle: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/sub/010.srt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/les/010A.js",
                            audioTimes: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud_tim/010A.js",
                            audio:      "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud/010A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/les/010B.js",
                            audioTimes: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud_tim/010B.js",
                            audio:      "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud/010B.mp3"
                        }
                    ]
                },
                {
                    num: 11,
                    title: "المروحه - الحلقة 20",
                    about: "",
                    img:      "arab tili/fixies/img/011.jpg",
                    video:    "https://pub-faafccdb77b742b298c107f7c8436b69.r2.dev/videos/fixies/011.mp4",
                    subtitle: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/sub/011.srt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/les/011A.js",
                            audioTimes: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud_tim/011A.js",
                            audio:      "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud/011A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/les/011B.js",
                            audioTimes: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud_tim/011B.js",
                            audio:      "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud/011B.mp3"
                        }
                    ]
                },
                {
                    num: 12,
                    title: "ميزان الحرارة - الحلقة 22",
                    about: "",
                    img:      "arab tili/fixies/img/012.jpg",
                    video:    "https://pub-faafccdb77b742b298c107f7c8436b69.r2.dev/videos/fixies/012.mp4",
                    subtitle: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/sub/012.srt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/les/012A.js",
                            audioTimes: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud_tim/012A.js",
                            audio:      "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud/012A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/les/012B.js",
                            audioTimes: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud_tim/012B.js",
                            audio:      "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud/012B.mp3"
                        }
                    ]
                },
                {
                    num: 13,
                    title: "الدباسة - الحلقة 14",
                    about: "",
                    img:      "arab tili/fixies/img/013.jpg",
                    video:    "https://pub-faafccdb77b742b298c107f7c8436b69.r2.dev/videos/fixies/013.mp4",
                    subtitle: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/sub/013.srt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/les/013A.js",
                            audioTimes: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud_tim/013A.js",
                            audio:      "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud/013A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/les/013B.js",
                            audioTimes: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud_tim/013B.js",
                            audio:      "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud/013B.mp3"
                        }
                    ]
                },
                {
                    num: 14,
                    title: "الميكرويف - الحلقة 11",
                    about: "",
                    img:      "arab tili/fixies/img/015.jpg",
                    video:    "https://pub-faafccdb77b742b298c107f7c8436b69.r2.dev/videos/fixies/014.mp4",
                    subtitle: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/sub/014.srt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/les/014A.js",
                            audioTimes: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud_tim/014A.js",
                            audio:      "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud/014A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/les/014B.js",
                            audioTimes: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud_tim/014B.js",
                            audio:      "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud/014B.mp3"
                        }
                    ]
                },
                {
                    num: 15,
                    title: "حوض السمك - الحلقة 19",
                    about: "",
                    img:      "arab tili/fixies/img/016.jpg",
                    video:    "https://pub-faafccdb77b742b298c107f7c8436b69.r2.dev/videos/fixies/015.mp4",
                    subtitle: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/sub/015.srt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/les/015A.js",
                            audioTimes: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud_tim/015A.js",
                            audio:      "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud/015A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/les/015B.js",
                            audioTimes: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud_tim/015B.js",
                            audio:      "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud/015B.mp3"
                        }
                    ]
                },
                {
                    num: 16,
                    title: "الفريق - الحلقة 54",
                    about: "",
                    img:      "arab tili/fixies/img/014.jpg",
                    video:    "https://pub-faafccdb77b742b298c107f7c8436b69.r2.dev/videos/fixies/016.mp4",
                    subtitle: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/sub/016.srt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/les/016A.js",
                            audioTimes: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud_tim/016A.js",
                            audio:      "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud/016A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/les/016B.js",
                            audioTimes: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud_tim/016B.js",
                            audio:      "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud/016B.mp3"
                        }
                    ]
                },
                {
                    num: 17,
                    title: "الرجل الآلي - الحلقة 29",
                    about: "",
                    img:      "arab tili/fixies/img/018.jpg",
                    video:    "https://pub-faafccdb77b742b298c107f7c8436b69.r2.dev/videos/fixies/017.mp4",
                    subtitle: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/sub/017.srt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/les/017A.js",
                            audioTimes: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud_tim/017A.js",
                            audio:      "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud/017A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/les/017B.js",
                            audioTimes: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud_tim/017B.js",
                            audio:      "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud/017B.mp3"
                        }
                    ]
                },
                {
                    num: 18,
                    title: "العصا السحرية - الحلقة 31",
                    about: "",
                    img:      "arab tili/fixies/img/017.jpg",
                    video:    "https://pub-faafccdb77b742b298c107f7c8436b69.r2.dev/videos/fixies/018.mp4",
                    subtitle: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/sub/018.srt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/les/018A.js",
                            audioTimes: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud_tim/018A.js",
                            audio:      "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud/018A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/les/018B.js",
                            audioTimes: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud_tim/018B.js",
                            audio:      "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud/018B.mp3"
                        }
                    ]
                },
                {
                    num: 19,
                    title: "الابريق الكهربائي - الحلقة الثامنة",
                    about: "",
                    img:      "arab tili/fixies/img/020.jpg",
                    video:    "https://pub-faafccdb77b742b298c107f7c8436b69.r2.dev/videos/fixies/019.mp4",
                    subtitle: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/sub/019.srt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/les/019A.js",
                            audioTimes: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud_tim/019A.js",
                            audio:      "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud/019A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/les/019B.js",
                            audioTimes: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud_tim/019B.js",
                            audio:      "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud/019B.mp3"
                        }
                    ]
                },
                {
                    num: 20,
                    title: "قطع الغيار - الحلقة 17",
                    about: "",
                    img:      "arab tili/fixies/img/021.jpg",
                    video:    "https://pub-faafccdb77b742b298c107f7c8436b69.r2.dev/videos/fixies/020.mp4",
                    subtitle: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/sub/020.srt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/les/020A.js",
                            audioTimes: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud_tim/020A.js",
                            audio:      "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud/020A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/les/020B.js",
                            audioTimes: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud_tim/020B.js",
                            audio:      "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud/020B.mp3"
                        }
                    ]
                },
                {
                    num: 21,
                    title: "كاشف الكذب - الحلقة 52",
                    about: "",
                    img:      "arab tili/fixies/img/019.jpg",
                    video:    "https://pub-faafccdb77b742b298c107f7c8436b69.r2.dev/videos/fixies/021.mp4",
                    subtitle: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/sub/021.srt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/les/021A.js",
                            audioTimes: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud_tim/021A.js",
                            audio:      "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud/021A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/les/021B.js",
                            audioTimes: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud_tim/021B.js",
                            audio:      "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud/021B.mp3"
                        }
                    ]
                },
                {
                    num: 22,
                    title: "المنبه - الحلقة الثالثة",
                    about: "",
                    img:      "arab tili/fixies/img/022.jpg",
                    video:    "https://pub-faafccdb77b742b298c107f7c8436b69.r2.dev/videos/fixies/022.mp4",
                    subtitle: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/sub/022.srt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/les/022A.js",
                            audioTimes: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud_tim/022A.js",
                            audio:      "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud/022A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/les/022B.js",
                            audioTimes: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud_tim/022B.js",
                            audio:      "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud/022B.mp3"
                        }
                    ]
                },
                {
                    num: 23,
                    title: "القرص المدمج - الحلقة الثانية",
                    about: "",
                    img:      "arab tili/fixies/img/023.jpg",
                    video:    "https://pub-faafccdb77b742b298c107f7c8436b69.r2.dev/videos/fixies/023.mp4",
                    subtitle: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/sub/023.srt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/les/023A.js",
                            audioTimes: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud_tim/023A.js",
                            audio:      "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud/023A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/les/023B.js",
                            audioTimes: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud_tim/023B.js",
                            audio:      "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud/023B.mp3"
                        }
                    ]
                },
                {
                    num: 24,
                    title: "الكيبورد - لوحة المفاتيح - الحلقة 18",
                    about: "",
                    img:      "arab tili/fixies/img/024.jpg",
                    video:    "https://pub-faafccdb77b742b298c107f7c8436b69.r2.dev/videos/fixies/024.mp4",
                    subtitle: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/sub/024.srt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/les/024A.js",
                            audioTimes: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud_tim/024A.js",
                            audio:      "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud/024A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/les/024B.js",
                            audioTimes: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud_tim/024B.js",
                            audio:      "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud/024B.mp3"
                        }
                    ]
                },
                {
                    num: 25,
                    title: "المغناطيس - الحلقة 24",
                    about: "",
                    img:      "arab tili/fixies/img/025.jpg",
                    video:    "https://pub-faafccdb77b742b298c107f7c8436b69.r2.dev/videos/fixies/025.mp4",
                    subtitle: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/sub/025.srt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/les/025A.js",
                            audioTimes: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud_tim/025A.js",
                            audio:      "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud/025A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/les/025B.js",
                            audioTimes: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud_tim/025B.js",
                            audio:      "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud/025B.mp3"
                        }
                    ]
                },
                {
                    num: 26,
                    title: "البالون - الحلقة العاشرة",
                    about: "",
                    img:      "arab tili/fixies/img/026.jpg",
                    video:    "https://pub-faafccdb77b742b298c107f7c8436b69.r2.dev/videos/fixies/026.mp4",
                    subtitle: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/sub/026.srt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/les/026A.js",
                            audioTimes: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud_tim/026A.js",
                            audio:      "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud/026A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/les/026B.js",
                            audioTimes: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud_tim/026B.js",
                            audio:      "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud/026B.mp3"
                        }
                    ]
                },
                {
                    num: 27,
                    title: "الغساله - الحلقة 21",
                    about: "",
                    img:      "arab tili/fixies/img/028.jpg",
                    video:    "https://pub-faafccdb77b742b298c107f7c8436b69.r2.dev/videos/fixies/027.mp4",
                    subtitle: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/sub/027.srt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/les/027A.js",
                            audioTimes: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud_tim/027A.js",
                            audio:      "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud/027A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/les/027B.js",
                            audioTimes: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud_tim/027B.js",
                            audio:      "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud/027B.mp3"
                        }
                    ]
                },
                {
                    num: 28,
                    title: "مكعب نوليك - الحلقة 53",
                    about: "",
                    img:      "arab tili/fixies/img/027.jpg",
                    video:    "https://pub-faafccdb77b742b298c107f7c8436b69.r2.dev/videos/fixies/028.mp4",
                    subtitle: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/sub/028.srt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/les/028A.js",
                            audioTimes: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud_tim/028A.js",
                            audio:      "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud/028A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/les/028B.js",
                            audioTimes: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud_tim/028B.js",
                            audio:      "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud/028B.mp3"
                        }
                    ]
                },
                {
                    num: 29,
                    title: "جرس الباب - الحلقة 59",
                    about: "",
                    img:      "arab tili/fixies/img/029.jpg",
                    video:    "https://pub-faafccdb77b742b298c107f7c8436b69.r2.dev/videos/fixies/029.mp4",
                    subtitle: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/sub/029.srt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/les/029A.js",
                            audioTimes: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud_tim/029A.js",
                            audio:      "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud/029A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/les/028B.js",
                            audioTimes: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud_tim/028B.js",
                            audio:      "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud/028B.mp3"
                        }
                    ]
                },
                {
                    num: 30,
                    title: "الماس الكهربائي - الحلقة 26",
                    about: "",
                    img:      "arab tili/fixies/img/035.jpg",
                    video:    "https://pub-faafccdb77b742b298c107f7c8436b69.r2.dev/videos/fixies/030.mp4",
                    subtitle: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/sub/030.srt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/les/030A.js",
                            audioTimes: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud_tim/028A.js",
                            audio:      "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud/028A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/les/028B.js",
                            audioTimes: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud_tim/028B.js",
                            audio:      "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud/028B.mp3"
                        }
                    ]
                },
                {
                    num: 31,
                    title: "الاختفاء - الحلقة 62",
                    about: "",
                    img:      "arab tili/fixies/img/030.jpg",
                    video:    "https://pub-faafccdb77b742b298c107f7c8436b69.r2.dev/videos/fixies/031.mp4",
                    subtitle: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/sub/031.srt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/les/031A.js",
                            audioTimes: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud_tim/028A.js",
                            audio:      "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud/028A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/les/028B.js",
                            audioTimes: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud_tim/028B.js",
                            audio:      "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud/028B.mp3"
                        }
                    ]
                },
                {
                    num: 32,
                    title: "نظام تحديد المواقع - الحلقة 77",
                    about: "",
                    img:      "arab tili/fixies/img/031.jpg",
                    video:    "https://pub-faafccdb77b742b298c107f7c8436b69.r2.dev/videos/fixies/032.mp4",
                    subtitle: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/sub/032.srt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/les/028A.js",
                            audioTimes: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud_tim/028A.js",
                            audio:      "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud/028A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/les/028B.js",
                            audioTimes: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud_tim/028B.js",
                            audio:      "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud/028B.mp3"
                        }
                    ]
                },
                {
                    num: 33,
                    title: "الرسائل النصية - الحلقة التاسعة",
                    about: "",
                    img:      "arab tili/fixies/img/037.jpg",
                    video:    "https://pub-faafccdb77b742b298c107f7c8436b69.r2.dev/videos/fixies/033.mp4",
                    subtitle: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/sub/033.srt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/les/028A.js",
                            audioTimes: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud_tim/028A.js",
                            audio:      "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud/028A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/les/028B.js",
                            audioTimes: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud_tim/028B.js",
                            audio:      "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud/028B.mp3"
                        }
                    ]
                },
                {
                    num: 34,
                    title: "فتحة التهوية - الحلقة 56",
                    about: "",
                    img:      "arab tili/fixies/img/033.jpg",
                    video:    "https://pub-faafccdb77b742b298c107f7c8436b69.r2.dev/videos/fixies/034.mp4",
                    subtitle: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/sub/034.srt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/les/028A.js",
                            audioTimes: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud_tim/028A.js",
                            audio:      "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud/028A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/les/028B.js",
                            audioTimes: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud_tim/028B.js",
                            audio:      "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud/028B.mp3"
                        }
                    ]
                },
                {
                    num: 35,
                    title: "البوصلة - الحلقة 27",
                    about: "",
                    img:      "arab tili/fixies/img/041.jpg",
                    video:    "https://pub-faafccdb77b742b298c107f7c8436b69.r2.dev/videos/fixies/035.mp4",
                    subtitle: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/sub/035.srt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/les/035A.js",
                            audioTimes: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud_tim/028A.js",
                            audio:      "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud/028A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/les/028B.js",
                            audioTimes: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud_tim/028B.js",
                            audio:      "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud/028B.mp3"
                        }
                    ]
                },
                {
                    num: 36,
                    title: "البقعة - الحلقة 57",
                    about: "",
                    img:      "arab tili/fixies/img/034.jpg",
                    video:    "https://pub-faafccdb77b742b298c107f7c8436b69.r2.dev/videos/fixies/036.mp4",
                    subtitle: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/sub/036.srt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/les/036A.js",
                            audioTimes: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud_tim/028A.js",
                            audio:      "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud/028A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/les/028B.js",
                            audioTimes: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud_tim/028B.js",
                            audio:      "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud/028B.mp3"
                        }
                    ]
                },
                {
                    num: 37,
                    title: "المصباح اليدوي - الحلقة 25",
                    about: "",
                    img:      "arab tili/fixies/img/042.jpg",
                    video:    "https://pub-faafccdb77b742b298c107f7c8436b69.r2.dev/videos/fixies/037.mp4",
                    subtitle: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/sub/037.srt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/les/037A.js",
                            audioTimes: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud_tim/028A.js",
                            audio:      "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud/028A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/les/028B.js",
                            audioTimes: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud_tim/028B.js",
                            audio:      "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud/028B.mp3"
                        }
                    ]
                },
                {
                    num: 38,
                    title: "الانابيب - الحلقة 72",
                    about: "",
                    img:      "arab tili/fixies/img/038.jpg",
                    video:    "https://pub-faafccdb77b742b298c107f7c8436b69.r2.dev/videos/fixies/038.mp4",
                    subtitle: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/sub/038.srt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/les/028A.js",
                            audioTimes: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud_tim/028A.js",
                            audio:      "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud/028A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/les/028B.js",
                            audioTimes: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud_tim/028B.js",
                            audio:      "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud/028B.mp3"
                        }
                    ]
                },
                {
                    num: 39,
                    title: "الدمية الناطقة - الحلقة 68",
                    about: "",
                    img:      "arab tili/fixies/img/036.jpg",
                    video:    "https://pub-faafccdb77b742b298c107f7c8436b69.r2.dev/videos/fixies/039.mp4",
                    subtitle: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/sub/039.srt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/les/039A.js",
                            audioTimes: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud_tim/028A.js",
                            audio:      "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud/028A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/les/039B.js",
                            audioTimes: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud_tim/028B.js",
                            audio:      "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud/028B.mp3"
                        }
                    ]
                },
                {
                    num: 40,
                    title: "الشابكة - الحلقة 46",
                    about: "",
                    img:      "arab tili/fixies/img/039.jpg",
                    video:    "https://pub-faafccdb77b742b298c107f7c8436b69.r2.dev/videos/fixies/040.mp4",
                    subtitle: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/sub/040.srt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/les/040A.js",
                            audioTimes: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud_tim/040A.js",
                            audio:      "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud/040A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/les/040B.js",
                            audioTimes: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud_tim/040B.js",
                            audio:      "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud/040B.mp3"
                        }
                    ]
                },
                {
                    num: 41,
                    title: "الحلوى - الحلقة 50",
                    about: "",
                    img:      "arab tili/fixies/img/040.jpg",
                    video:    "https://pub-faafccdb77b742b298c107f7c8436b69.r2.dev/videos/fixies/041.mp4",
                    subtitle: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/sub/041.srt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/les/041A.js",
                            audioTimes: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud_tim/041A.js",
                            audio:      "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud/041A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/les/041B.js",
                            audioTimes: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud_tim/041B.js",
                            audio:      "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud/041B.mp3"
                        }
                    ]
                },
                {
                    num: 42,
                    title: "صندوق الموسيقى - الحلقة 23",
                    about: "",
                    img:      "arab tili/fixies/img/045.jpg",
                    video:    "https://pub-faafccdb77b742b298c107f7c8436b69.r2.dev/videos/fixies/042.mp4",
                    subtitle: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/sub/042.srt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/les/042A.js",
                            audioTimes: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud_tim/042A.js",
                            audio:      "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud/042A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/les/042B.js",
                            audioTimes: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud_tim/042B.js",
                            audio:      "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud/042B.mp3"
                        }
                    ]
                },
                {
                    num: 43,
                    title: "حقيبة الأدوات - الحلقة 60",
                    about: "",
                    img:      "arab tili/fixies/img/043.jpg",
                    video:    "https://pub-faafccdb77b742b298c107f7c8436b69.r2.dev/videos/fixies/043.mp4",
                    subtitle: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/sub/043.srt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/les/043A.js",
                            audioTimes: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud_tim/043A.js",
                            audio:      "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud/043A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/les/043B.js",
                            audioTimes: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud_tim/043B.js",
                            audio:      "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud/043B.mp3"
                        }
                    ]
                },
                {
                    num: 44,
                    title: "خيال الظل - الحلقة 92",
                    about: "",
                    img:      "arab tili/fixies/img/032.jpg",
                    video:    "https://pub-faafccdb77b742b298c107f7c8436b69.r2.dev/videos/fixies/044.mp4",
                    subtitle: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/sub/044.srt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/les/044A.js",
                            audioTimes: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud_tim/044A.js",
                            audio:      "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud/044A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/les/044B.js",
                            audioTimes: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud_tim/044B.js",
                            audio:      "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud/044B.mp3"
                        }
                    ]
                },
                {
                    num: 45,
                    title: "المنجنيق - الحلقة 55",
                    about: "",
                    img:      "arab tili/fixies/img/050.jpg",
                    video:    "https://pub-faafccdb77b742b298c107f7c8436b69.r2.dev/videos/fixies/045.mp4",
                    subtitle: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/sub/045.srt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/les/045A.js",
                            audioTimes: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud_tim/045A.js",
                            audio:      "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud/045A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/les/045B.js",
                            audioTimes: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud_tim/045B.js",
                            audio:      "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud/045B.mp3"
                        }
                    ]
                },
                {
                    num: 46,
                    title: "التفاعل المتسلسل - الحلقة 65",
                    about: "",
                    img:      "arab tili/fixies/img/048.jpg",
                    video:    "https://pub-faafccdb77b742b298c107f7c8436b69.r2.dev/videos/fixies/046.mp4",
                    subtitle: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/sub/046.srt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/les/045A.js",
                            audioTimes: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud_tim/045A.js",
                            audio:      "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud/045A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/les/045B.js",
                            audioTimes: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud_tim/045B.js",
                            audio:      "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud/045B.mp3"
                        }
                    ]
                },
                {
                    num: 47,
                    title: "الكرتون - الحلقة 35",
                    about: "",
                    img:      "arab tili/fixies/img/052.jpg",
                    video:    "https://arabicvideofixies.pages.dev/047.mp4",
                    subtitle: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/sub/047.srt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/les/047A.js",
                            audioTimes: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud_tim/047A.js",
                            audio:      "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud/047A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/les/047B.js",
                            audioTimes: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud_tim/047B.js",
                            audio:      "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud/047B.mp3"
                        }
                    ]
                },
                {
                    num: 48,
                    title: "من هم الفيكسيز؟ أغنية فردية",
                    about: "",
                    img:      "arab tili/fixies/img/049.jpg",
                    video:    "https://pub-faafccdb77b742b298c107f7c8436b69.r2.dev/videos/fixies/048.mp4",
                    subtitle: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/sub/048.srt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/les/048A.js",
                            audioTimes: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud_tim/048A.js",
                            audio:      "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud/048A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/les/048B.js",
                            audioTimes: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud_tim/048B.js",
                            audio:      "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud/048B.mp3"
                        }
                    ]
                },
                {
                    num: 49,
                    title: "معجون التشكيل - الحلقة 64",
                    about: "",
                    img:      "arab tili/fixies/img/047.jpg",
                    video:    "https://pub-faafccdb77b742b298c107f7c8436b69.r2.dev/videos/fixies/049.mp4",
                    subtitle: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/sub/049.srt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/les/049A.js",
                            audioTimes: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud_tim/049A.js",
                            audio:      "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud/049A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/les/049B.js",
                            audioTimes: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud_tim/049B.js",
                            audio:      "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud/049B.mp3"
                        }
                    ]
                },
                {
                    num: 50,
                    title: "البطارية الشمسية - الحلقة 30",
                    about: "",
                    img:      "arab tili/fixies/img/053.jpg",
                    video:    "https://pub-faafccdb77b742b298c107f7c8436b69.r2.dev/videos/fixies/050.mp4",
                    subtitle: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/sub/050.srt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/les/049A.js",
                            audioTimes: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud_tim/049A.js",
                            audio:      "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud/049A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/les/049B.js",
                            audioTimes: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud_tim/049B.js",
                            audio:      "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud/049B.mp3"
                        }
                    ]
                },
                {
                    num: 51,
                    title: "جهاز مراقبة الطفل - الحلقة 96",
                    about: "",
                    img:      "arab tili/fixies/img/044.jpg",
                    video:    "https://pub-faafccdb77b742b298c107f7c8436b69.r2.dev/videos/fixies/051.mp4",
                    subtitle: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/sub/051.srt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/les/049A.js",
                            audioTimes: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud_tim/049A.js",
                            audio:      "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud/049A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/les/049B.js",
                            audioTimes: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud_tim/049B.js",
                            audio:      "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud/049B.mp3"
                        }
                    ]
                },
                {
                    num: 52,
                    title: "الخفاقة - الحلقة 43",
                    about: "",
                    img:      "arab tili/fixies/img/054.jpg",
                    video:    "https://pub-faafccdb77b742b298c107f7c8436b69.r2.dev/videos/fixies/052.mp4",
                    subtitle: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/sub/052.srt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/les/049A.js",
                            audioTimes: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud_tim/049A.js",
                            audio:      "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud/049A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/les/049B.js",
                            audioTimes: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud_tim/049B.js",
                            audio:      "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud/049B.mp3"
                        }
                    ]
                },
                {
                    num: 53,
                    title: "المرآه - الحلقة 51",
                    about: "",
                    img:      "arab tili/fixies/img/051.jpg",
                    video:    "https://pub-faafccdb77b742b298c107f7c8436b69.r2.dev/videos/fixies/053.mp4",
                    subtitle: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/sub/053.srt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/les/049A.js",
                            audioTimes: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud_tim/049A.js",
                            audio:      "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud/049A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/les/049B.js",
                            audioTimes: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud_tim/049B.js",
                            audio:      "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud/049B.mp3"
                        }
                    ]
                },
                {
                    num: 54,
                    title: "الطبل - الحلقة 71",
                    about: "",
                    img:      "arab tili/fixies/img/046.jpg",
                    video:    "https://pub-faafccdb77b742b298c107f7c8436b69.r2.dev/videos/fixies/054.mp4",
                    subtitle: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/sub/054.srt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/les/049A.js",
                            audioTimes: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud_tim/049A.js",
                            audio:      "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud/049A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/les/049B.js",
                            audioTimes: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud_tim/049B.js",
                            audio:      "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud/049B.mp3"
                        }
                    ]
                },
                {
                    num: 55,
                    title: "الاحتكاك - الحلقة 58",
                    about: "",
                    img:      "arab tili/fixies/img/055.jpg",
                    video:    "https://pub-faafccdb77b742b298c107f7c8436b69.r2.dev/videos/fixies/055.mp4",
                    subtitle: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/sub/055.srt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/les/049A.js",
                            audioTimes: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud_tim/049A.js",
                            audio:      "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud/049A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/les/049B.js",
                            audioTimes: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud_tim/049B.js",
                            audio:      "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud/049B.mp3"
                        }
                    ]
                },
                {
                    num: 56,
                    title: "الميزان - الحلقة 45",
                    about: "",
                    img:      "arab tili/fixies/img/057.jpg",
                    video:    "https://pub-faafccdb77b742b298c107f7c8436b69.r2.dev/videos/fixies/056.mp4",
                    subtitle: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/sub/056.srt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/les/049A.js",
                            audioTimes: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud_tim/049A.js",
                            audio:      "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud/049A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/les/049B.js",
                            audioTimes: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud_tim/049B.js",
                            audio:      "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud/049B.mp3"
                        }
                    ]
                },
                {
                    num: 57,
                    title: "السحاب - الحلقة 37",
                    about: "",
                    img:      "arab tili/fixies/img/058.jpg",
                    video:    "https://pub-faafccdb77b742b298c107f7c8436b69.r2.dev/videos/fixies/057.mp4",
                    subtitle: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/sub/057.srt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/les/049A.js",
                            audioTimes: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud_tim/049A.js",
                            audio:      "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud/049A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/les/049B.js",
                            audioTimes: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud_tim/049B.js",
                            audio:      "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud/049B.mp3"
                        }
                    ]
                },
                {
                    num: 58,
                    title: "العدسة المكبرة - الحلقة 38",
                    about: "",
                    img:      "arab tili/fixies/img/060.jpg",
                    video:    "https://pub-faafccdb77b742b298c107f7c8436b69.r2.dev/videos/fixies/058.mp4",
                    subtitle: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/sub/058.srt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/les/049A.js",
                            audioTimes: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud_tim/049A.js",
                            audio:      "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud/049A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/les/049B.js",
                            audioTimes: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud_tim/049B.js",
                            audio:      "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud/049B.mp3"
                        }
                    ]
                },
                {
                    num: 59,
                    title: "الساعات - الحلقة 76",
                    about: "",
                    img:      "arab tili/fixies/img/056.jpg",
                    video:    "https://pub-faafccdb77b742b298c107f7c8436b69.r2.dev/videos/fixies/059.mp4",
                    subtitle: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/sub/059.srt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/les/049A.js",
                            audioTimes: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud_tim/049A.js",
                            audio:      "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud/049A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/les/049B.js",
                            audioTimes: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud_tim/049B.js",
                            audio:      "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud/049B.mp3"
                        }
                    ]
                },
                {
                    num: 60,
                    title: "الطرف الاصطناعي - الحلقة 70",
                    about: "",
                    img:      "arab tili/fixies/img/061.jpg",
                    video:    "https://pub-faafccdb77b742b298c107f7c8436b69.r2.dev/videos/fixies/060.mp4",
                    subtitle: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/sub/060.srt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/les/060A.js",
                            audioTimes: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud_tim/060A.js",
                            audio:      "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud/060A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/les/060B.js",
                            audioTimes: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud_tim/060B.js",
                            audio:      "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud/060B.mp3"
                        }
                    ]
                },
                {
                    num: 61,
                    title: "علب القصدير - الحلقة 48",
                    about: "",
                    img:      "arab tili/fixies/img/062.jpg",
                    video:    "https://pub-faafccdb77b742b298c107f7c8436b69.r2.dev/videos/fixies/061.mp4",
                    subtitle: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/sub/061.srt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/les/061A.js",
                            audioTimes: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud_tim/061A.js",
                            audio:      "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud/061A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/les/061B.js",
                            audioTimes: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud_tim/061B.js",
                            audio:      "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud/061B.mp3"
                        }
                    ]
                },
                {
                    num: 62,
                    title: "ضوء الليل - الحلقة 40",
                    about: "",
                    img:      "arab tili/fixies/img/066.jpg",
                    video:    "https://pub-faafccdb77b742b298c107f7c8436b69.r2.dev/videos/fixies/062.mp4",
                    subtitle: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/sub/062.srt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/les/062A.js",
                            audioTimes: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud_tim/062A.js",
                            audio:      "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud/062A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/les/062B.js",
                            audioTimes: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud_tim/062B.js",
                            audio:      "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud/062B.mp3"
                        }
                    ]
                },
                {
                    num: 63,
                    title: "النحلة - الحلقة 86",
                    about: "",
                    img:      "arab tili/fixies/img/059.jpg",
                    video:    "https://pub-faafccdb77b742b298c107f7c8436b69.r2.dev/videos/fixies/063.mp4",
                    subtitle: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/sub/063.srt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/les/063A.js",
                            audioTimes: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud_tim/063A.js",
                            audio:      "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud/063A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/les/063B.js",
                            audioTimes: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud_tim/063B.js",
                            audio:      "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud/063B.mp3"
                        }
                    ]
                },
                {
                    num: 64,
                    title: "مطفأة الحريق - الحلقة 78",
                    about: "",
                    img:      "arab tili/fixies/img/063.jpg",
                    video:    "https://pub-faafccdb77b742b298c107f7c8436b69.r2.dev/videos/fixies/064.mp4",
                    subtitle: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/sub/064.srt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/les/064A.js",
                            audioTimes: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud_tim/064A.js",
                            audio:      "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud/064A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/les/064B.js",
                            audioTimes: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud_tim/064B.js",
                            audio:      "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud/064B.mp3"
                        }
                    ]
                },
                {
                    num: 65,
                    title: "لاقط الصوت - الحلقة 49",
                    about: "",
                    img:      "arab tili/fixies/img/070.jpg",
                    video:    "https://pub-faafccdb77b742b298c107f7c8436b69.r2.dev/videos/fixies/065.mp4",
                    subtitle: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/sub/065.srt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/les/065A.js",
                            audioTimes: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud_tim/065A.js",
                            audio:      "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud/065A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/les/065B.js",
                            audioTimes: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud_tim/065B.js",
                            audio:      "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud/065B.mp3"
                        }
                    ]
                },
                {
                    num: 66,
                    title: "المقياس - الحلقة 63",
                    about: "",
                    img:      "arab tili/fixies/img/068.jpg",
                    video:    "https://pub-faafccdb77b742b298c107f7c8436b69.r2.dev/videos/fixies/066.mp4",
                    subtitle: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/sub/066.srt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/les/066A.js",
                            audioTimes: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud_tim/066A.js",
                            audio:      "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud/066A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/les/066B.js",
                            audioTimes: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud_tim/066B.js",
                            audio:      "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud/066B.mp3"
                        }
                    ]
                },
                {
                    num: 67,
                    title: "المختبر - الحلقة 91",
                    about: "",
                    img:      "arab tili/fixies/img/064.jpg",
                    video:    "https://pub-faafccdb77b742b298c107f7c8436b69.r2.dev/videos/fixies/067.mp4",
                    subtitle: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/sub/067.srt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/les/067A.js",
                            audioTimes: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud_tim/067A.js",
                            audio:      "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud/067A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/les/067B.js",
                            audioTimes: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud_tim/067B.js",
                            audio:      "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud/067B.mp3"
                        }
                    ]
                },
                {
                    num: 68,
                    title: "الذراع الآلية - الحلقة 79",
                    about: "",
                    img:      "arab tili/fixies/img/067.jpg",
                    video:    "https://pub-faafccdb77b742b298c107f7c8436b69.r2.dev/videos/fixies/068.mp4",
                    subtitle: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/sub/068.srt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/les/068A.js",
                            audioTimes: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud_tim/068A.js",
                            audio:      "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud/068A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/les/068B.js",
                            audioTimes: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud_tim/068B.js",
                            audio:      "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud/068B.mp3"
                        }
                    ]
                },
                {
                    num: 69,
                    title: "العتلة - الحلقة 61",
                    about: "",
                    img:      "arab tili/fixies/img/072.jpg",
                    video:    "https://pub-faafccdb77b742b298c107f7c8436b69.r2.dev/videos/fixies/069.mp4",
                    subtitle: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/sub/069.srt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/les/069A.js",
                            audioTimes: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud_tim/069A.js",
                            audio:      "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud/069A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/les/069B.js",
                            audioTimes: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud_tim/069B.js",
                            audio:      "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/fixies/aud/069B.mp3"
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
                        "Mishary Rashid":         "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/quran/audio_book/mishary/001.%20Al-Fatihah%20-%20Al%27Afasi.mp3",
                        // "Abdul Basit":            "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/quran/audio_book/basit/al-fatiha.mp3",
                        // "Saad al-Ghamdi":         "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/quran/audio_book/ghamdi/al-fatiha.mp3",
                        // "Abdul Rahman al-Sudais": "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/quran/audio_book/sudais/al-fatiha.mp3"
                    },
                    // Hozircha faqat Mishary Rashid uchun vaqt fayli tayyor
                    // (arab tili/quran/audio_times_book/al-fatiha/mishary.js).
                    // Qolganlar uchun ham xuddi shu formatda fayl tayyorlab, shu yerga
                    // qo'shing — fayl mavjud bo'lmaguncha o'sha qori uchun oyat
                    // ranga bo'yalmaydi, lekin audio baribir ishlaydi.
                    audioBookTimes: {
                        "Mishary Rashid": "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/quran/audio_times_book/minshary/001-fatiha.js",
                        // "Abdul Basit":            "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/quran/audio_times_book/al-fatiha/basit.js",
                        // "Saad al-Ghamdi":         "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/quran/audio_times_book/al-fatiha/ghamdi.js",
                        // "Abdul Rahman al-Sudais": "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/quran/audio_times_book/al-fatiha/sudais.js"
                    },
                    // clipRange kerak emas — bu fayllar faqat shu suraga tegishli, bo'linmagan

                    analyses: [
                        {
                            label:      "Tahlil 1",
                            lessons:    "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/quran/lessons/001%20fatiha-P.js",
                            audioTimes: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/quran/audio_times/al-fatiha.js",
                            audio:      "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/quran/audio/001%20fatiha-P.mp3"
                        },
                        {
                            label:      "Tahlil 2",
                            lessons:    "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/quran/lessons/001%20fatiha-C.js",
                            audioTimes: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/quran/audio_times/al-fatiha.js",
                            audio:      "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/quran/audio/001%20fatiha-C.mp3"
                        }
                        // Ikkinchi bosqich (masalan so'zma-so'z tahlil) tayyor bo'lganda:
                        // {
                        //     label:      "So'zma-so'z tahlil",
                        //     lessons:    "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/quran/lessons/al-fatiha_edited.js",
                        //     audioTimes: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/quran/audio_times/al-fatiha_edited.js",
                        //     audio:      "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/quran/audio/al-fatiha_edited_analysis.mp3"
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
                        // "Abdul Basit":            "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/quran/audio_book/basit/baqara.mp3",
                        // "Saad al-Ghamdi":         "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/quran/audio_book/ghamdi/baqara.mp3",
                        // "Abdul Rahman al-Sudais": "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/quran/audio_book/sudais/baqara.mp3"
                    },
                    clipRange: {
                        "Mishary Rashid": "00:00:00,000 - 00:12:52,340"
                    },
                    audioBookTimes: {
                        "Mishary Rashid": "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/quran/audio_times_book/baqara/mishary.js"
                        // "Abdul Basit":            "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/quran/audio_times_book/baqara/basit.js",
                        // "Saad al-Ghamdi":         "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/quran/audio_times_book/baqara/ghamdi.js",
                        // "Abdul Rahman al-Sudais": "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/quran/audio_times_book/baqara/sudais.js"
                    },
                    analyses: [
                        {
                            label:      "Tahlil 1",
                            lessons:    "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/quran/lessons/baqara.js",
                            audioTimes: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/quran/audio_times/baqara.js",
                            audio:      "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/quran/audio/baqara_analysis.mp3"
                        },
                        {
                            label:      "Tahlil 2",
                            lessons:    "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/quran/lessons/baqara.js",
                            audioTimes: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/quran/audio_times/baqara.js",
                            audio:      "https://raw.githubusercontent.com/Jonibeke/arab-data/main/arab%20tili/quran/audio/baqara_analysis.mp3"
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
                    video:    "https://raw.githubusercontent.com/Jonibeke/arab-data/main/inglis%20tili/fiksiz/videos/002%20-%20The%20Drain.mp4",
                    subtitle: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/inglis%20tili/fiksiz/srt/002%20-%20The%20Drain.srt",
                    analyses: [
                        {
                            label:      "Tahlil 1",
                            lessons:    "https://raw.githubusercontent.com/Jonibeke/arab-data/main/inglis%20tili/fiksiz/lessons/f_1_001P.js",
                            audioTimes: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/inglis%20tili/fiksiz/audio_times/f_1_001P.js",
                            audio:      "https://raw.githubusercontent.com/Jonibeke/arab-data/main/inglis%20tili/fiksiz/audio/f_1_001P.mp3"
                        },
                        {
                            label:      "Tahlil 2",
                            lessons:    "https://raw.githubusercontent.com/Jonibeke/arab-data/main/inglis%20tili/fiksiz/lessons/f_1_001C.js",
                            audioTimes: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/inglis%20tili/fiksiz/audio_times/f_1_001C.js",
                            audio:      "https://raw.githubusercontent.com/Jonibeke/arab-data/main/inglis%20tili/fiksiz/audio/f_1_001C.mp3"
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
                    audioBook: { "Reader": "https://raw.githubusercontent.com/Jonibeke/arab-data/main/inglis%20tili/4000%20words/aud_book/Unit%2001.mp3" },
                    clipRange: { "Reader": "" },
                    audioBookTimes: { "Reader": "" },
                    analyses: [
                        {
                            label: "Tahlil",
                            lessons: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/inglis%20tili/4000%20words/les/01.js",
                            audioTimes: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/inglis%20tili/4000%20words/aud-tim-book/01P.js",
                            audio: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/inglis%20tili/4000%20words/aud_book/Unit%2001.mp3"
                        },
                        {
                            label: "Tahlil2",
                            lessons: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/inglis%20tili/4000%20words/les/01.js",
                            audioTimes: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/inglis%20tili/4000%20words/aud-tim-book/01P.js",
                            audio: "https://raw.githubusercontent.com/Jonibeke/arab-data/main/inglis%20tili/4000%20words/aud_book/Unit%2001.mp3"
                        }
                    ]
                }
            ]
        }
    ]
};