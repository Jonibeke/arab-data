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
            img: "https://arab-data.pages.dev/arab%20tili/fixies/img/cov.avif",
            meta: "100 ta epizod, daraja: A2-B2",
            episodes: [
                {
                    num: 1,
                    title: "العتلة",
                    about: "",
                    img:      "https://arab-data.pages.dev/arab%20tili/fixies/img/001.jpg",
                    video:    "https://pub-faafccdb77b742b298c107f7c8436b69.r2.dev/videos/fixies/001.mp4",
                    subtitle: "https://arab-data.pages.dev/arab%20tili/fixies/sub/001.srt",
                    // 5-bosqich (Test) uchun. "test" — majburiy, bo'sh
                    // qoldirilsa 5-bosqich ochilganda "test fayli qo'shilmagan"
                    // xabari chiqadi. "testIzoh" — ixtiyoriy: bo'lsa xato
                    // javobda "Izohni ko'rish" tugmasi chiqadi, bo'lmasa/bo'sh
                    // bo'lsa hech qanday xatosiz, oddiy natija bilan cheklanadi.
                    test:     "https://arab-data.pages.dev/arab%20tili/fixies/tests/001.txt",
                    // testIzoh: "https://arab-data.pages.dev/arab%20tili/fixies/tests/at-Tanal_testlar_izoh.txt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/001A.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/001A.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/001A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/001B.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/001B.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/001B.mp3"
                        }
                    ]
                },
                {
                    num: 2,
                    title: "قلم الحبر",
                    about: "",
                    img:        "https://arab-data.pages.dev/arab%20tili/fixies/img/003.jpg",
                    video:      "https://pub-faafccdb77b742b298c107f7c8436b69.r2.dev/videos/fixies/002.mp4",
                    subtitle:   "https://arab-data.pages.dev/arab%20tili/fixies/sub/002.srt",
                    test:     "https://arab-data.pages.dev/arab%20tili/fixies/tests/002.txt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/002A.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/002A.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/002A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/002B.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/002B.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/002B.mp3"
                        }
                    ],
                   },
                {
                    num: 3,
                    title: "فرشاة الأسنان",
                    about: "",
                    img:      "https://arab-data.pages.dev/arab%20tili/fixies/img/002.jpg",
                    video:    "https://pub-faafccdb77b742b298c107f7c8436b69.r2.dev/videos/fixies/003.mp4",
                    subtitle: "https://arab-data.pages.dev/arab%20tili/fixies/sub/003.srt",
                    test:     "https://arab-data.pages.dev/arab%20tili/fixies/tests/003.txt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/003A.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/003A.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/003A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/003B.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/003B.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/003B.mp3"
                        }
                    ]
                },
                {
                    num: 4,
                    title: "المسامير",
                    about: "",
                    img:      "https://arab-data.pages.dev/arab%20tili/fixies/img/004.jpg",
                    video:    "https://pub-faafccdb77b742b298c107f7c8436b69.r2.dev/videos/fixies/004.mp4",
                    subtitle: "https://arab-data.pages.dev/arab%20tili/fixies/sub/004.srt",
                    test:     "https://arab-data.pages.dev/arab%20tili/fixies/tests/004.txt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/004A.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/004A.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/004A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/004B.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/004B.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/004B.mp3"
                        }
                    ]
                },
                {
                    num: 5,
                    title: "الثلاجة",
                    about: "",
                    img:      "https://arab-data.pages.dev/arab%20tili/fixies/img/005.jpg",
                    video:    "https://pub-faafccdb77b742b298c107f7c8436b69.r2.dev/videos/fixies/005.mp4",
                    subtitle: "https://arab-data.pages.dev/arab%20tili/fixies/sub/005.srt",
                    test:     "https://arab-data.pages.dev/arab%20tili/fixies/tests/005.txt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/005A.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/005A.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/005A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/005B.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/005B.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/005B.mp3"
                        }
                    ]
                },
                {
                    num: 6,
                    title: "مجفف الشعر",
                    about: "",
                    img:      "https://arab-data.pages.dev/arab%20tili/fixies/img/006.jpg",
                    video:    "https://pub-faafccdb77b742b298c107f7c8436b69.r2.dev/videos/fixies/006.mp4",
                    subtitle: "https://arab-data.pages.dev/arab%20tili/fixies/sub/006.srt",
                    test:     "https://arab-data.pages.dev/arab%20tili/fixies/tests/006.txt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/006A.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/006A.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/006A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/006B.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/006B.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/006B.mp3"
                        }
                    ]
                },
                {
                    num: 7,
                    title: "جهاز التحكم الريموت",
                    about: "",
                    img:      "https://arab-data.pages.dev/arab%20tili/fixies/img/007.jpg",
                    video:    "https://pub-faafccdb77b742b298c107f7c8436b69.r2.dev/videos/fixies/007.mp4",
                    subtitle: "https://arab-data.pages.dev/arab%20tili/fixies/sub/007.srt",
                    test:     "https://arab-data.pages.dev/arab%20tili/fixies/tests/007.txt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/007A.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/007A.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/007A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/007B.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/007B.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/007B.mp3"
                        }
                    ]
                },
                {
                    num: 8,
                    title: "البالوعه",
                    about: "",
                    img:      "https://arab-data.pages.dev/arab%20tili/fixies/img/008.jpg",
                    video:    "https://pub-faafccdb77b742b298c107f7c8436b69.r2.dev/videos/fixies/008.mp4",
                    subtitle: "https://arab-data.pages.dev/arab%20tili/fixies/sub/008.srt",
                    test:     "https://arab-data.pages.dev/arab%20tili/fixies/tests/008.txt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/008A.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/008A.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/008A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/008B.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/008B.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/008B.mp3"
                        }
                    ]
                },
                {
                    num: 9,
                    title: "القطار الكهربائي",
                    about: "",
                    img:      "https://arab-data.pages.dev/arab%20tili/fixies/img/009.jpg",
                    video:    "https://pub-faafccdb77b742b298c107f7c8436b69.r2.dev/videos/fixies/009.mp4",
                    subtitle: "https://arab-data.pages.dev/arab%20tili/fixies/sub/009.srt",
                    test:     "https://arab-data.pages.dev/arab%20tili/fixies/tests/009.txt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/009A.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/009A.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/009A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/009B.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/009B.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/009B.mp3"
                        }
                    ]
                },
                {
                    num: 10,
                    title: "القفل التوافقي",
                    about: "",
                    img:      "https://arab-data.pages.dev/arab%20tili/fixies/img/010.jpg",
                    video:    "https://pub-faafccdb77b742b298c107f7c8436b69.r2.dev/videos/fixies/010.mp4",
                    subtitle: "https://arab-data.pages.dev/arab%20tili/fixies/sub/010.srt",
                    test:     "https://arab-data.pages.dev/arab%20tili/fixies/tests/010.txt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/010A.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/010A.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/010A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/010B.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/010B.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/010B.mp3"
                        }
                    ]
                },
                {
                    num: 11,
                    title: "المروحه",
                    about: "",
                    img:      "https://arab-data.pages.dev/arab%20tili/fixies/img/011.jpg",
                    video:    "https://pub-faafccdb77b742b298c107f7c8436b69.r2.dev/videos/fixies/011.mp4",
                    subtitle: "https://arab-data.pages.dev/arab%20tili/fixies/sub/011.srt",
                    test:     "https://arab-data.pages.dev/arab%20tili/fixies/tests/011.txt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/011A.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/011A.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/011A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/011B.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/011B.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/011B.mp3"
                        }
                    ]
                },
                {
                    num: 12,
                    title: "ميزان الحرارة",
                    about: "",
                    img:      "https://arab-data.pages.dev/arab%20tili/fixies/img/012.jpg",
                    video:    "https://pub-faafccdb77b742b298c107f7c8436b69.r2.dev/videos/fixies/012.mp4",
                    subtitle: "https://arab-data.pages.dev/arab%20tili/fixies/sub/012.srt",
                    test:     "https://arab-data.pages.dev/arab%20tili/fixies/tests/012.txt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/012A.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/012A.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/012A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/012B.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/012B.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/012B.mp3"
                        }
                    ]
                },
                {
                    num: 13,
                    title: "الدباسة",
                    about: "",
                    img:      "https://arab-data.pages.dev/arab%20tili/fixies/img/013.jpg",
                    video:    "https://pub-faafccdb77b742b298c107f7c8436b69.r2.dev/videos/fixies/013.mp4",
                    subtitle: "https://arab-data.pages.dev/arab%20tili/fixies/sub/013.srt",
                    test:     "https://arab-data.pages.dev/arab%20tili/fixies/tests/013.txt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/013A.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/013A.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/013A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/013B.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/013B.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/013B.mp3"
                        }
                    ]
                },
                {
                    num: 14,
                    title: "الميكرويف",
                    about: "",
                    img:      "https://arab-data.pages.dev/arab%20tili/fixies/img/015.jpg",
                    video:    "https://pub-faafccdb77b742b298c107f7c8436b69.r2.dev/videos/fixies/014.mp4",
                    subtitle: "https://arab-data.pages.dev/arab%20tili/fixies/sub/014.srt",
                    test:     "https://arab-data.pages.dev/arab%20tili/fixies/tests/014.txt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/014A.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/014A.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/014A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/014B.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/014B.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/014B.mp3"
                        }
                    ]
                },
                {
                    num: 15,
                    title: "حوض السمك",
                    about: "",
                    img:      "https://arab-data.pages.dev/arab%20tili/fixies/img/016.jpg",
                    video:    "https://pub-faafccdb77b742b298c107f7c8436b69.r2.dev/videos/fixies/015.mp4",
                    subtitle: "https://arab-data.pages.dev/arab%20tili/fixies/sub/015.srt",
                    test:     "https://arab-data.pages.dev/arab%20tili/fixies/tests/015.txt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/015A.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/015A.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/015A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/015B.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/015B.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/015B.mp3"
                        }
                    ]
                },
                {
                    num: 16,
                    title: "الفريق",
                    about: "",
                    img:      "https://arab-data.pages.dev/arab%20tili/fixies/img/014.jpg",
                    video:    "https://pub-faafccdb77b742b298c107f7c8436b69.r2.dev/videos/fixies/016.mp4",
                    subtitle: "https://arab-data.pages.dev/arab%20tili/fixies/sub/016.srt",
                    test:     "https://arab-data.pages.dev/arab%20tili/fixies/tests/016.txt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/016A.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/016A.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/016A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/016B.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/016B.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/016B.mp3"
                        }
                    ]
                },
                {
                    num: 17,
                    title: "الرجل الآلي",
                    about: "",
                    img:      "https://arab-data.pages.dev/arab%20tili/fixies/img/018.jpg",
                    video:    "https://pub-faafccdb77b742b298c107f7c8436b69.r2.dev/videos/fixies/017.mp4",
                    subtitle: "https://arab-data.pages.dev/arab%20tili/fixies/sub/017.srt",
                    test:     "https://arab-data.pages.dev/arab%20tili/fixies/tests/017.txt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/017A.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/017A.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/017A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/017B.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/017B.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/017B.mp3"
                        }
                    ]
                },
                {
                    num: 18,
                    title: "العصا السحرية",
                    about: "",
                    img:      "https://arab-data.pages.dev/arab%20tili/fixies/img/017.jpg",
                    video:    "https://pub-faafccdb77b742b298c107f7c8436b69.r2.dev/videos/fixies/018.mp4",
                    subtitle: "https://arab-data.pages.dev/arab%20tili/fixies/sub/018.srt",
                    test:     "https://arab-data.pages.dev/arab%20tili/fixies/tests/018.txt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/018A.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/018A.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/018A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/018B.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/018B.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/018B.mp3"
                        }
                    ]
                },
                {
                    num: 19,
                    title: "الابريق الكهربائي",
                    about: "",
                    img:      "https://arab-data.pages.dev/arab%20tili/fixies/img/020.jpg",
                    video:    "https://pub-faafccdb77b742b298c107f7c8436b69.r2.dev/videos/fixies/019.mp4",
                    subtitle: "https://arab-data.pages.dev/arab%20tili/fixies/sub/019.srt",
                    test:     "https://arab-data.pages.dev/arab%20tili/fixies/tests/019.txt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/019A.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/019A.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/019A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/019B.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/019B.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/019B.mp3"
                        }
                    ]
                },
                {
                    num: 20,
                    title: "قطع الغيار",
                    about: "",
                    img:      "https://arab-data.pages.dev/arab%20tili/fixies/img/021.jpg",
                    video:    "https://pub-faafccdb77b742b298c107f7c8436b69.r2.dev/videos/fixies/020.mp4",
                    subtitle: "https://arab-data.pages.dev/arab%20tili/fixies/sub/020.srt",
                    test:     "https://arab-data.pages.dev/arab%20tili/fixies/tests/020.txt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/020A.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/020A.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/020A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/020B.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/020B.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/020B.mp3"
                        }
                    ]
                },
                {
                    num: 21,
                    title: "كاشف الكذب",
                    about: "",
                    img:      "https://arab-data.pages.dev/arab%20tili/fixies/img/019.jpg",
                    video:    "https://pub-faafccdb77b742b298c107f7c8436b69.r2.dev/videos/fixies/021.mp4",
                    subtitle: "https://arab-data.pages.dev/arab%20tili/fixies/sub/021.srt",
                    test:     "https://arab-data.pages.dev/arab%20tili/fixies/tests/021.txt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/021A.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/021A.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/021A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/021B.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/021B.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/021B.mp3"
                        }
                    ]
                },
                {
                    num: 22,
                    title: "المنبه",
                    about: "",
                    img:      "https://arab-data.pages.dev/arab%20tili/fixies/img/022.jpg",
                    video:    "https://pub-faafccdb77b742b298c107f7c8436b69.r2.dev/videos/fixies/022.mp4",
                    subtitle: "https://arab-data.pages.dev/arab%20tili/fixies/sub/022.srt",
                    test:     "https://arab-data.pages.dev/arab%20tili/fixies/tests/022.txt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/022A.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/022A.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/022A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/022B.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/022B.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/022B.mp3"
                        }
                    ]
                },
                {
                    num: 23,
                    title: "القرص المدمج",
                    about: "",
                    img:      "https://arab-data.pages.dev/arab%20tili/fixies/img/023.jpg",
                    video:    "https://pub-faafccdb77b742b298c107f7c8436b69.r2.dev/videos/fixies/023.mp4",
                    subtitle: "https://arab-data.pages.dev/arab%20tili/fixies/sub/023.srt",
                    test:     "https://arab-data.pages.dev/arab%20tili/fixies/tests/023.txt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/023A.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/023A.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/023A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/023B.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/023B.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/023B.mp3"
                        }
                    ]
                },
                {
                    num: 24,
                    title: "الكيبورد - لوحة المفاتيح",
                    about: "",
                    img:      "https://arab-data.pages.dev/arab%20tili/fixies/img/024.jpg",
                    video:    "https://pub-faafccdb77b742b298c107f7c8436b69.r2.dev/videos/fixies/024.mp4",
                    subtitle: "https://arab-data.pages.dev/arab%20tili/fixies/sub/024.srt",
                    test:     "https://arab-data.pages.dev/arab%20tili/fixies/tests/024.txt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/024A.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/024A.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/024A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/024B.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/024B.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/024B.mp3"
                        }
                    ]
                },
                {
                    num: 25,
                    title: "المغناطيس",
                    about: "",
                    img:      "https://arab-data.pages.dev/arab%20tili/fixies/img/025.jpg",
                    video:    "https://pub-faafccdb77b742b298c107f7c8436b69.r2.dev/videos/fixies/025.mp4",
                    subtitle: "https://arab-data.pages.dev/arab%20tili/fixies/sub/025.srt",
                    test:     "https://arab-data.pages.dev/arab%20tili/fixies/tests/025.txt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/025A.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/025A.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/025A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/025B.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/025B.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/025B.mp3"
                        }
                    ]
                },
                {
                    num: 26,
                    title: "البالون",
                    about: "",
                    img:      "https://arab-data.pages.dev/arab%20tili/fixies/img/026.jpg",
                    video:    "https://pub-faafccdb77b742b298c107f7c8436b69.r2.dev/videos/fixies/026.mp4",
                    subtitle: "https://arab-data.pages.dev/arab%20tili/fixies/sub/026.srt",
                    test:     "https://arab-data.pages.dev/arab%20tili/fixies/tests/026.txt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/026A.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/026A.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/026A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/026B.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/026B.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/026B.mp3"
                        }
                    ]
                },
                {
                    num: 27,
                    title: "الغساله",
                    about: "",
                    img:      "https://arab-data.pages.dev/arab%20tili/fixies/img/028.jpg",
                    video:    "https://pub-faafccdb77b742b298c107f7c8436b69.r2.dev/videos/fixies/027.mp4",
                    subtitle: "https://arab-data.pages.dev/arab%20tili/fixies/sub/027.srt",
                    test:     "https://arab-data.pages.dev/arab%20tili/fixies/tests/027.txt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/027A.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/027A.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/027A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/027B.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/027B.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/027B.mp3"
                        }
                    ]
                },
                {
                    num: 28,
                    title: "مكعب نوليك",
                    about: "",
                    img:      "https://arab-data.pages.dev/arab%20tili/fixies/img/027.jpg",
                    video:    "https://pub-faafccdb77b742b298c107f7c8436b69.r2.dev/videos/fixies/028.mp4",
                    subtitle: "https://arab-data.pages.dev/arab%20tili/fixies/sub/028.srt",
                    test:     "https://arab-data.pages.dev/arab%20tili/fixies/tests/028.txt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/028A.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/028A.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/028A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/028B.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/028B.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/028B.mp3"
                        }
                    ]
                },
                {
                    num: 29,
                    title: "جرس الباب",
                    about: "",
                    img:      "https://arab-data.pages.dev/arab%20tili/fixies/img/029.jpg",
                    video:    "https://pub-faafccdb77b742b298c107f7c8436b69.r2.dev/videos/fixies/029.mp4",
                    subtitle: "https://arab-data.pages.dev/arab%20tili/fixies/sub/029.srt",
                    test:     "https://arab-data.pages.dev/arab%20tili/fixies/tests/029.txt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/029A.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/029A.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/029A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/029B.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/029B.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/029B.mp3"
                        }
                    ]
                },
                {
                    num: 30,
                    title: "الماس الكهربائي",
                    about: "",
                    img:      "https://arab-data.pages.dev/arab%20tili/fixies/img/035.jpg",
                    video:    "https://pub-faafccdb77b742b298c107f7c8436b69.r2.dev/videos/fixies/030.mp4",
                    subtitle: "https://arab-data.pages.dev/arab%20tili/fixies/sub/030.srt",
                    test:     "https://arab-data.pages.dev/arab%20tili/fixies/tests/030.txt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/030A.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/030A.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/030A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/030B.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/030B.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/030B.mp3"
                        }
                    ]
                },
                {
                    num: 31,
                    title: "الاختفاء",
                    about: "",
                    img:      "https://arab-data.pages.dev/arab%20tili/fixies/img/030.jpg",
                    video:    "https://pub-faafccdb77b742b298c107f7c8436b69.r2.dev/videos/fixies/031.mp4",
                    subtitle: "https://arab-data.pages.dev/arab%20tili/fixies/sub/031.srt",
                    test:     "https://arab-data.pages.dev/arab%20tili/fixies/tests/031.txt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/031A.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/031A.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/031A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/031B.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/031B.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/031B.mp3"
                        }
                    ]
                },
                {
                    num: 32,
                    title: "نظام تحديد المواقع",
                    about: "",
                    img:      "https://arab-data.pages.dev/arab%20tili/fixies/img/031.jpg",
                    video:    "https://pub-faafccdb77b742b298c107f7c8436b69.r2.dev/videos/fixies/032.mp4",
                    subtitle: "https://arab-data.pages.dev/arab%20tili/fixies/sub/032.srt",
                    test:     "https://arab-data.pages.dev/arab%20tili/fixies/tests/032.txt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/032A.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/032A.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/032A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/032B.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/032B.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/032B.mp3"
                        }
                    ]
                },
                {
                    num: 33,
                    title: "الرسائل النصية",
                    about: "",
                    img:      "https://arab-data.pages.dev/arab%20tili/fixies/img/037.jpg",
                    video:    "https://pub-faafccdb77b742b298c107f7c8436b69.r2.dev/videos/fixies/033.mp4",
                    subtitle: "https://arab-data.pages.dev/arab%20tili/fixies/sub/033.srt",
                    test:     "https://arab-data.pages.dev/arab%20tili/fixies/tests/033.txt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/033A.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/033A.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/033A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/033B.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/033B.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/033B.mp3"
                        }
                    ]
                },
                {
                    num: 34,
                    title: "فتحة التهوية",
                    about: "",
                    img:      "https://arab-data.pages.dev/arab%20tili/fixies/img/033.jpg",
                    video:    "https://pub-faafccdb77b742b298c107f7c8436b69.r2.dev/videos/fixies/034.mp4",
                    subtitle: "https://arab-data.pages.dev/arab%20tili/fixies/sub/034.srt",
                    test:     "https://arab-data.pages.dev/arab%20tili/fixies/tests/034.txt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/034A.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/034A.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/034A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/034B.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/034B.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/034B.mp3"
                        }
                    ]
                },
                {
                    num: 35,
                    title: "البوصلة",
                    about: "",
                    img:      "https://arab-data.pages.dev/arab%20tili/fixies/img/041.jpg",
                    video:    "https://pub-faafccdb77b742b298c107f7c8436b69.r2.dev/videos/fixies/035.mp4",
                    subtitle: "https://arab-data.pages.dev/arab%20tili/fixies/sub/035.srt",
                    test:     "https://arab-data.pages.dev/arab%20tili/fixies/tests/035.txt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/035A.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/035A.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/035A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/035B.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/035B.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/035B.mp3"
                        }
                    ]
                },
                {
                    num: 36,
                    title: "البقعة",
                    about: "",
                    img:      "https://arab-data.pages.dev/arab%20tili/fixies/img/034.jpg",
                    video:    "https://pub-faafccdb77b742b298c107f7c8436b69.r2.dev/videos/fixies/036.mp4",
                    subtitle: "https://arab-data.pages.dev/arab%20tili/fixies/sub/036.srt",
                    test:     "https://arab-data.pages.dev/arab%20tili/fixies/tests/036.txt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/036A.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/036A.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/036A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/036B.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/036B.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/036B.mp3"
                        }
                    ]
                },
                {
                    num: 37,
                    title: "المصباح اليدوي",
                    about: "",
                    img:      "https://arab-data.pages.dev/arab%20tili/fixies/img/042.jpg",
                    video:    "https://pub-faafccdb77b742b298c107f7c8436b69.r2.dev/videos/fixies/037.mp4",
                    subtitle: "https://arab-data.pages.dev/arab%20tili/fixies/sub/037.srt",
                    test:     "https://arab-data.pages.dev/arab%20tili/fixies/tests/037.txt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/037A.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/037A.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/037A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/037B.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/037B.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/037B.mp3"
                        }
                    ]
                },
                {
                    num: 38,
                    title: "الانابيب",
                    about: "",
                    img:      "https://arab-data.pages.dev/arab%20tili/fixies/img/038.jpg",
                    video:    "https://pub-faafccdb77b742b298c107f7c8436b69.r2.dev/videos/fixies/038.mp4",
                    subtitle: "https://arab-data.pages.dev/arab%20tili/fixies/sub/038.srt",
                    test:     "https://arab-data.pages.dev/arab%20tili/fixies/tests/038.txt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/038A.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/038A.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/038A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/038B.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/038B.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/038B.mp3"
                        }
                    ]
                },
                {
                    num: 39,
                    title: "الدمية الناطقة",
                    about: "",
                    img:      "https://arab-data.pages.dev/arab%20tili/fixies/img/036.jpg",
                    video:    "https://pub-faafccdb77b742b298c107f7c8436b69.r2.dev/videos/fixies/039.mp4",
                    subtitle: "https://arab-data.pages.dev/arab%20tili/fixies/sub/039.srt",
                    test:     "https://arab-data.pages.dev/arab%20tili/fixies/tests/039.txt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/039A.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/039A.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/039A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/039B.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/039B.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/039B.mp3"
                        }
                    ]
                },
                {
                    num: 40,
                    title: "الشابكة",
                    about: "",
                    img:      "https://arab-data.pages.dev/arab%20tili/fixies/img/039.jpg",
                    video:    "https://pub-faafccdb77b742b298c107f7c8436b69.r2.dev/videos/fixies/040.mp4",
                    subtitle: "https://arab-data.pages.dev/arab%20tili/fixies/sub/040.srt",
                    test:     "https://arab-data.pages.dev/arab%20tili/fixies/tests/040.txt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/040A.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/040A.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/040A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/040B.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/040B.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/040B.mp3"
                        }
                    ]
                },
                {
                    num: 41,
                    title: "الحلوى",
                    about: "",
                    img:      "https://arab-data.pages.dev/arab%20tili/fixies/img/040.jpg",
                    video:    "https://pub-faafccdb77b742b298c107f7c8436b69.r2.dev/videos/fixies/041.mp4",
                    subtitle: "https://arab-data.pages.dev/arab%20tili/fixies/sub/041.srt",
                    test:     "https://arab-data.pages.dev/arab%20tili/fixies/tests/041.txt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/041A.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/041A.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/041A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/041B.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/041B.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/041B.mp3"
                        }
                    ]
                },
                {
                    num: 42,
                    title: "صندوق الموسيقى",
                    about: "",
                    img:      "https://arab-data.pages.dev/arab%20tili/fixies/img/045.jpg",
                    video:    "https://pub-faafccdb77b742b298c107f7c8436b69.r2.dev/videos/fixies/042.mp4",
                    subtitle: "https://arab-data.pages.dev/arab%20tili/fixies/sub/042.srt",
                    test:     "https://arab-data.pages.dev/arab%20tili/fixies/tests/042.txt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/042A.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/042A.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/042A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/042B.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/042B.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/042B.mp3"
                        }
                    ]
                },
                {
                    num: 43,
                    title: "حقيبة الأدوات",
                    about: "",
                    img:      "https://arab-data.pages.dev/arab%20tili/fixies/img/043.jpg",
                    video:    "https://pub-faafccdb77b742b298c107f7c8436b69.r2.dev/videos/fixies/043.mp4",
                    subtitle: "https://arab-data.pages.dev/arab%20tili/fixies/sub/043.srt",
                    test:     "https://arab-data.pages.dev/arab%20tili/fixies/tests/043.txt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/043A.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/043A.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/043A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/043B.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/043B.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/043B.mp3"
                        }
                    ]
                },
                {
                    num: 44,
                    title: "خيال الظل",
                    about: "",
                    img:      "https://arab-data.pages.dev/arab%20tili/fixies/img/032.jpg",
                    video:    "https://pub-faafccdb77b742b298c107f7c8436b69.r2.dev/videos/fixies/044.mp4",
                    subtitle: "https://arab-data.pages.dev/arab%20tili/fixies/sub/044.srt",
                    test:     "https://arab-data.pages.dev/arab%20tili/fixies/tests/044.txt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/044A.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/044A.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/044A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/044B.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/044B.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/044B.mp3"
                        }
                    ]
                },
                {
                    num: 45,
                    title: "المنجنيق",
                    about: "",
                    img:      "https://arab-data.pages.dev/arab%20tili/fixies/img/050.jpg",
                    video:    "https://pub-faafccdb77b742b298c107f7c8436b69.r2.dev/videos/fixies/045.mp4",
                    subtitle: "https://arab-data.pages.dev/arab%20tili/fixies/sub/045.srt",
                    test:     "https://arab-data.pages.dev/arab%20tili/fixies/tests/045.txt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/045A.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/045A.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/045A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/045B.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/045B.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/045B.mp3"
                        }
                    ]
                },
                {
                    num: 46,
                    title: "التفاعل المتسلسل",
                    about: "",
                    img:      "https://arab-data.pages.dev/arab%20tili/fixies/img/048.jpg",
                    video:    "https://pub-faafccdb77b742b298c107f7c8436b69.r2.dev/videos/fixies/046.mp4",
                    subtitle: "https://arab-data.pages.dev/arab%20tili/fixies/sub/046.srt",
                    test:     "https://arab-data.pages.dev/arab%20tili/fixies/tests/046.txt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/046A.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/046A.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/046A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/046B.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/046B.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/046B.mp3"
                        }
                    ]
                },
                {
                    num: 47,
                    title: "الكرتون",
                    about: "",
                    img:      "https://arab-data.pages.dev/arab%20tili/fixies/img/052.jpg",
                    video:    "https://pub-faafccdb77b742b298c107f7c8436b69.r2.dev/videos/fixies/047.mp4",
                    subtitle: "https://arab-data.pages.dev/arab%20tili/fixies/sub/047.srt",
                    test:     "https://arab-data.pages.dev/arab%20tili/fixies/tests/047.txt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/047A.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/047A.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/047A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/047B.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/047B.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/047B.mp3"
                        }
                    ]
                },
                {
                    num: 48,
                    title: "من هم الفيكسيز؟ أغنية فردية",
                    about: "",
                    img:      "https://arab-data.pages.dev/arab%20tili/fixies/img/049.jpg",
                    video:    "https://pub-faafccdb77b742b298c107f7c8436b69.r2.dev/videos/fixies/048.mp4",
                    subtitle: "https://arab-data.pages.dev/arab%20tili/fixies/sub/048.srt",
                    test:     "https://arab-data.pages.dev/arab%20tili/fixies/tests/048.txt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/048A.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/048A.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/048A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/048B.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/048B.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/048B.mp3"
                        }
                    ]
                },
                {
                    num: 49,
                    title: "معجون التشكيل",
                    about: "",
                    img:      "https://arab-data.pages.dev/arab%20tili/fixies/img/047.jpg",
                    video:    "https://pub-faafccdb77b742b298c107f7c8436b69.r2.dev/videos/fixies/049.mp4",
                    subtitle: "https://arab-data.pages.dev/arab%20tili/fixies/sub/049.srt",
                    test:     "https://arab-data.pages.dev/arab%20tili/fixies/tests/049.txt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/049A.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/049A.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/049A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/049B.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/049B.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/049B.mp3"
                        }
                    ]
                },
                {
                    num: 50,
                    title: "البطارية الشمسية",
                    about: "",
                    img:      "https://arab-data.pages.dev/arab%20tili/fixies/img/053.jpg",
                    video:    "https://pub-faafccdb77b742b298c107f7c8436b69.r2.dev/videos/fixies/050.mp4",
                    subtitle: "https://arab-data.pages.dev/arab%20tili/fixies/sub/050.srt",
                    test:     "https://arab-data.pages.dev/arab%20tili/fixies/tests/050.txt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/050A.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/050A.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/050A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/050B.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/050B.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/050B.mp3"
                        }
                    ]
                },
                {
                    num: 51,
                    title: "جهاز مراقبة الطفل",
                    about: "",
                    img:      "https://arab-data.pages.dev/arab%20tili/fixies/img/044.jpg",
                    video:    "https://pub-faafccdb77b742b298c107f7c8436b69.r2.dev/videos/fixies/051.mp4",
                    subtitle: "https://arab-data.pages.dev/arab%20tili/fixies/sub/051.srt",
                    test:     "https://arab-data.pages.dev/arab%20tili/fixies/tests/051.txt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/051A.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/051A.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/051A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/051B.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/051B.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/051B.mp3"
                        }
                    ]
                },
                {
                    num: 52,
                    title: "الخفاقة",
                    about: "",
                    img:      "https://arab-data.pages.dev/arab%20tili/fixies/img/054.jpg",
                    video:    "https://pub-faafccdb77b742b298c107f7c8436b69.r2.dev/videos/fixies/052.mp4",
                    subtitle: "https://arab-data.pages.dev/arab%20tili/fixies/sub/052.srt",
                    test:     "https://arab-data.pages.dev/arab%20tili/fixies/tests/052.txt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/052A.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/052A.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/052A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/052B.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/052B.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/052B.mp3"
                        }
                    ]
                },
                {
                    num: 53,
                    title: "المرآه",
                    about: "",
                    img:      "https://arab-data.pages.dev/arab%20tili/fixies/img/051.jpg",
                    video:    "https://pub-faafccdb77b742b298c107f7c8436b69.r2.dev/videos/fixies/053.mp4",
                    subtitle: "https://arab-data.pages.dev/arab%20tili/fixies/sub/053.srt",
                    test:     "https://arab-data.pages.dev/arab%20tili/fixies/tests/053.txt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/053A.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/053A.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/053A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/053B.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/053B.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/053B.mp3"
                        }
                    ]
                },
                {
                    num: 54,
                    title: "الطبل",
                    about: "",
                    img:      "https://arab-data.pages.dev/arab%20tili/fixies/img/046.jpg",
                    video:    "https://pub-faafccdb77b742b298c107f7c8436b69.r2.dev/videos/fixies/054.mp4",
                    subtitle: "https://arab-data.pages.dev/arab%20tili/fixies/sub/054.srt",
                    test:     "https://arab-data.pages.dev/arab%20tili/fixies/tests/054.txt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/054A.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/054A.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/054A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/054B.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/054B.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/054B.mp3"
                        }
                    ]
                },
                {
                    num: 55,
                    title: "الاحتكاك",
                    about: "",
                    img:      "https://arab-data.pages.dev/arab%20tili/fixies/img/055.jpg",
                    video:    "https://pub-faafccdb77b742b298c107f7c8436b69.r2.dev/videos/fixies/055.mp4",
                    subtitle: "https://arab-data.pages.dev/arab%20tili/fixies/sub/055.srt",
                    test:     "https://arab-data.pages.dev/arab%20tili/fixies/tests/055.txt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/055A.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/055A.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/055A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/055B.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/055B.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/055B.mp3"
                        }
                    ]
                },
                {
                    num: 56,
                    title: "الميزان",
                    about: "",
                    img:      "https://arab-data.pages.dev/arab%20tili/fixies/img/057.jpg",
                    video:    "https://pub-faafccdb77b742b298c107f7c8436b69.r2.dev/videos/fixies/056.mp4",
                    subtitle: "https://arab-data.pages.dev/arab%20tili/fixies/sub/056.srt",
                    test:     "https://arab-data.pages.dev/arab%20tili/fixies/tests/056.txt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/056A.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/056A.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/056A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/056B.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/056B.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/056B.mp3"
                        }
                    ]
                },
                {
                    num: 57,
                    title: "السحاب",
                    about: "",
                    img:      "https://arab-data.pages.dev/arab%20tili/fixies/img/058.jpg",
                    video:    "https://pub-faafccdb77b742b298c107f7c8436b69.r2.dev/videos/fixies/057.mp4",
                    subtitle: "https://arab-data.pages.dev/arab%20tili/fixies/sub/057.srt",
                    test:     "https://arab-data.pages.dev/arab%20tili/fixies/tests/057.txt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/057A.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/057A.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/057A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/057B.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/057B.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/057B.mp3"
                        }
                    ]
                },
                {
                    num: 58,
                    title: "العدسة المكبرة",
                    about: "",
                    img:      "https://arab-data.pages.dev/arab%20tili/fixies/img/060.jpg",
                    video:    "https://pub-faafccdb77b742b298c107f7c8436b69.r2.dev/videos/fixies/058.mp4",
                    subtitle: "https://arab-data.pages.dev/arab%20tili/fixies/sub/058.srt",
                    test:     "https://arab-data.pages.dev/arab%20tili/fixies/tests/058.txt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/058A.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/058A.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/058A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/058B.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/058B.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/058B.mp3"
                        }
                    ]
                },
                {
                    num: 59,
                    title: "الساعات",
                    about: "",
                    img:      "https://arab-data.pages.dev/arab%20tili/fixies/img/056.jpg",
                    video:    "https://pub-faafccdb77b742b298c107f7c8436b69.r2.dev/videos/fixies/059.mp4",
                    subtitle: "https://arab-data.pages.dev/arab%20tili/fixies/sub/059.srt",
                    test:     "https://arab-data.pages.dev/arab%20tili/fixies/tests/059.txt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/059A.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/059A.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/059A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/059B.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/059B.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/059B.mp3"
                        }
                    ]
                },
                {
                    num: 60,
                    title: "الطرف الاصطناعي",
                    about: "",
                    img:      "https://arab-data.pages.dev/arab%20tili/fixies/img/061.jpg",
                    video:    "https://pub-faafccdb77b742b298c107f7c8436b69.r2.dev/videos/fixies/060.mp4",
                    subtitle: "https://arab-data.pages.dev/arab%20tili/fixies/sub/060.srt",
                    test:     "https://arab-data.pages.dev/arab%20tili/fixies/tests/060.txt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/060A.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/060A.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/060A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/060B.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/060B.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/060B.mp3"
                        }
                    ]
                },
                {
                    num: 61,
                    title: "علب القصدير",
                    about: "",
                    img:      "https://arab-data.pages.dev/arab%20tili/fixies/img/062.jpg",
                    video:    "https://pub-faafccdb77b742b298c107f7c8436b69.r2.dev/videos/fixies/061.mp4",
                    subtitle: "https://arab-data.pages.dev/arab%20tili/fixies/sub/061.srt",
                    test:     "https://arab-data.pages.dev/arab%20tili/fixies/tests/061.txt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/061A.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/061A.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/061A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/061B.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/061B.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/061B.mp3"
                        }
                    ]
                },
                {
                    num: 62,
                    title: "ضوء الليل",
                    about: "",
                    img:      "https://arab-data.pages.dev/arab%20tili/fixies/img/066.jpg",
                    video:    "https://pub-faafccdb77b742b298c107f7c8436b69.r2.dev/videos/fixies/062.mp4",
                    subtitle: "https://arab-data.pages.dev/arab%20tili/fixies/sub/062.srt",
                    test:     "https://arab-data.pages.dev/arab%20tili/fixies/tests/062.txt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/062A.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/062A.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/062A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/062B.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/062B.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/062B.mp3"
                        }
                    ]
                },
                {
                    num: 63,
                    title: "النحلة",
                    about: "",
                    img:      "https://arab-data.pages.dev/arab%20tili/fixies/img/059.jpg",
                    video:    "https://pub-faafccdb77b742b298c107f7c8436b69.r2.dev/videos/fixies/063.mp4",
                    subtitle: "https://arab-data.pages.dev/arab%20tili/fixies/sub/063.srt",
                    test:     "https://arab-data.pages.dev/arab%20tili/fixies/tests/063.txt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/063A.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/063A.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/063A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/063B.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/063B.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/063B.mp3"
                        }
                    ]
                },
                {
                    num: 64,
                    title: "مطفأة الحريق",
                    about: "",
                    img:      "https://arab-data.pages.dev/arab%20tili/fixies/img/063.jpg",
                    video:    "https://pub-faafccdb77b742b298c107f7c8436b69.r2.dev/videos/fixies/064.mp4",
                    subtitle: "https://arab-data.pages.dev/arab%20tili/fixies/sub/064.srt",
                    test:     "https://arab-data.pages.dev/arab%20tili/fixies/tests/064.txt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/064A.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/064A.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/064A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/064B.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/064B.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/064B.mp3"
                        }
                    ]
                },
                {
                    num: 65,
                    title: "لاقط الصوت",
                    about: "",
                    img:      "https://arab-data.pages.dev/arab%20tili/fixies/img/070.jpg",
                    video:    "https://pub-faafccdb77b742b298c107f7c8436b69.r2.dev/videos/fixies/065.mp4",
                    subtitle: "https://arab-data.pages.dev/arab%20tili/fixies/sub/065.srt",
                    test:     "https://arab-data.pages.dev/arab%20tili/fixies/tests/065.txt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/065A.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/065A.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/065A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/065B.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/065B.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/065B.mp3"
                        }
                    ]
                },
                {
                    num: 66,
                    title: "المقياس",
                    about: "",
                    img:      "https://arab-data.pages.dev/arab%20tili/fixies/img/068.jpg",
                    video:    "https://pub-faafccdb77b742b298c107f7c8436b69.r2.dev/videos/fixies/066.mp4",
                    subtitle: "https://arab-data.pages.dev/arab%20tili/fixies/sub/066.srt",
                    test:     "https://arab-data.pages.dev/arab%20tili/fixies/tests/066.txt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/066A.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/066A.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/066A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/066B.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/066B.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/066B.mp3"
                        }
                    ]
                },
                {
                    num: 67,
                    title: "المختبر",
                    about: "",
                    img:      "https://arab-data.pages.dev/arab%20tili/fixies/img/064.jpg",
                    video:    "https://pub-faafccdb77b742b298c107f7c8436b69.r2.dev/videos/fixies/067.mp4",
                    subtitle: "https://arab-data.pages.dev/arab%20tili/fixies/sub/067.srt",
                    test:     "https://arab-data.pages.dev/arab%20tili/fixies/tests/067.txt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/067A.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/067A.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/067A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/067B.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/067B.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/067B.mp3"
                        }
                    ]
                },
                {
                    num: 68,
                    title: "الذراع الآلية",
                    about: "",
                    img:      "https://arab-data.pages.dev/arab%20tili/fixies/img/067.jpg",
                    video:    "https://pub-faafccdb77b742b298c107f7c8436b69.r2.dev/videos/fixies/068.mp4",
                    subtitle: "https://arab-data.pages.dev/arab%20tili/fixies/sub/068.srt",
                    test:     "https://arab-data.pages.dev/arab%20tili/fixies/tests/068.txt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/068A.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/068A.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/068A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/068B.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/068B.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/068B.mp3"
                        }
                    ]
                },
                {
                    num: 69,
                    title: "العتلة",
                    about: "",
                    img:      "https://arab-data.pages.dev/arab%20tili/fixies/img/072.jpg",
                    video:    "https://pub-faafccdb77b742b298c107f7c8436b69.r2.dev/videos/fixies/069.mp4",
                    subtitle: "https://arab-data.pages.dev/arab%20tili/fixies/sub/069.srt",
                    test:     "https://arab-data.pages.dev/arab%20tili/fixies/tests/069.txt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/069A.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/069A.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/069A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/069B.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/069B.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/069B.mp3"
                        }
                    ]
                },
                {
                    num: 70,
                    title: "الحافظة",
                    about: "",
                    img:      "https://arab-data.pages.dev/arab%20tili/fixies/img/075.jpg",
                    video:    "https://pub-faafccdb77b742b298c107f7c8436b69.r2.dev/videos/fixies/070.mp4",
                    subtitle: "https://arab-data.pages.dev/arab%20tili/fixies/sub/070.srt",
                    test:     "https://arab-data.pages.dev/arab%20tili/fixies/tests/070.txt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/070A.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/070A.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/070A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/070B.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/070B.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/070B.mp3"
                        }
                    ]
                },
                {
                    num: 71,
                    title: "الفرن",
                    about: "",
                    img:      "https://arab-data.pages.dev/arab%20tili/fixies/img/071.jpg",
                    video:    "https://pub-faafccdb77b742b298c107f7c8436b69.r2.dev/videos/fixies/071.mp4",
                    subtitle: "https://arab-data.pages.dev/arab%20tili/fixies/sub/071.srt",
                    test:     "https://arab-data.pages.dev/arab%20tili/fixies/tests/071.txt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/071A.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/071A.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/071A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/071B.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/071B.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/071B.mp3"
                        }
                    ]
                },
                {
                    num: 72,
                    title: "الأسلاك",
                    about: "",
                    img:      "https://arab-data.pages.dev/arab%20tili/fixies/img/076.jpg",
                    video:    "https://pub-faafccdb77b742b298c107f7c8436b69.r2.dev/videos/fixies/072.mp4",
                    subtitle: "https://arab-data.pages.dev/arab%20tili/fixies/sub/072.srt",
                    test:     "https://arab-data.pages.dev/arab%20tili/fixies/tests/072.txt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/072A.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/072A.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/072A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/072B.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/072B.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/072B.mp3"
                        }
                    ]
                },
                {
                    num: 73,
                    title: "المخطط",
                    about: "",
                    img:      "https://arab-data.pages.dev/arab%20tili/fixies/img/069.jpg",
                    video:    "https://pub-faafccdb77b742b298c107f7c8436b69.r2.dev/videos/fixies/073.mp4",
                    subtitle: "https://arab-data.pages.dev/arab%20tili/fixies/sub/073.srt",
                    test:     "https://arab-data.pages.dev/arab%20tili/fixies/tests/073.txt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/073A.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/073A.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/073A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/073B.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/073B.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/073B.mp3"
                        }
                    ]
                },
                {
                    num: 74,
                    title: "هاتف الفكسي",
                    about: "",
                    img:      "https://arab-data.pages.dev/arab%20tili/fixies/img/065.jpg",
                    video:    "https://pub-faafccdb77b742b298c107f7c8436b69.r2.dev/videos/fixies/074.mp4",
                    subtitle: "https://arab-data.pages.dev/arab%20tili/fixies/sub/074.srt",
                    test:     "https://arab-data.pages.dev/arab%20tili/fixies/tests/074.txt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/074A.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/074A.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/074A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/074B.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/074B.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/074B.mp3"
                        }
                    ]
                },
                {
                    num: 75,
                    title: "الوسادة الهوائية",
                    about: "",
                    img:      "https://arab-data.pages.dev/arab%20tili/fixies/img/073.jpg",
                    video:    "https://pub-faafccdb77b742b298c107f7c8436b69.r2.dev/videos/fixies/075.mp4",
                    subtitle: "https://arab-data.pages.dev/arab%20tili/fixies/sub/075.srt",
                    test:     "https://arab-data.pages.dev/arab%20tili/fixies/tests/075.txt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/075A.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/075A.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/075A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/075B.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/075B.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/075B.mp3"
                        }
                    ]
                },
                {
                    num: 76,
                    title: "جهاز الاختبار البيئي",
                    about: "",
                    img:      "https://arab-data.pages.dev/arab%20tili/fixies/img/074.jpg",
                    video:    "https://pub-faafccdb77b742b298c107f7c8436b69.r2.dev/videos/fixies/076.mp4",
                    subtitle: "https://arab-data.pages.dev/arab%20tili/fixies/sub/076.srt",
                    test:     "https://arab-data.pages.dev/arab%20tili/fixies/tests/076.txt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/076A.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/076A.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/076A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/076B.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/076B.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/076B.mp3"
                        }
                    ]
                },
                {
                    num: 77,
                    title: "الشطرنج",
                    about: "",
                    img:      "https://arab-data.pages.dev/arab%20tili/fixies/img/080.jpg",
                    video:    "https://pub-faafccdb77b742b298c107f7c8436b69.r2.dev/videos/fixies/077.mp4",
                    subtitle: "https://arab-data.pages.dev/arab%20tili/fixies/sub/077.srt",
                    test:     "https://arab-data.pages.dev/arab%20tili/fixies/tests/077.txt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/077A.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/077A.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/077A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/077B.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/077B.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/077B.mp3"
                        }
                    ]
                },
                {
                    num: 78,
                    title: "شريط الرموز",
                    about: "",
                    img:      "https://arab-data.pages.dev/arab%20tili/fixies/img/078.jpg",
                    video:    "https://pub-faafccdb77b742b298c107f7c8436b69.r2.dev/videos/fixies/078.mp4",
                    subtitle: "https://arab-data.pages.dev/arab%20tili/fixies/sub/078.srt",
                    test:     "https://arab-data.pages.dev/arab%20tili/fixies/tests/078.txt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/078A.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/078A.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/078A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/078B.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/078B.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/078B.mp3"
                        }
                    ]
                },
                {
                    num: 79,
                    title: "الكلبة",
                    about: "",
                    img:      "https://arab-data.pages.dev/arab%20tili/fixies/img/077.jpg",
                    video:    "https://pub-faafccdb77b742b298c107f7c8436b69.r2.dev/videos/fixies/079.mp4",
                    subtitle: "https://arab-data.pages.dev/arab%20tili/fixies/sub/079.srt",
                    test:     "https://arab-data.pages.dev/arab%20tili/fixies/tests/079.txt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/079A.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/079A.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/079A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/079B.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/079B.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/079B.mp3"
                        }
                    ]
                },
                {
                    num: 80,
                    title: "الكريمة المخفوقة",
                    about: "",
                    img:      "https://arab-data.pages.dev/arab%20tili/fixies/img/084.jpg",
                    video:    "https://pub-faafccdb77b742b298c107f7c8436b69.r2.dev/videos/fixies/080.mp4",
                    subtitle: "https://arab-data.pages.dev/arab%20tili/fixies/sub/080.srt",
                    test:     "https://arab-data.pages.dev/arab%20tili/fixies/tests/080.txt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/080A.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/080A.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/080A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/080B.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/080B.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/080B.mp3"
                        }
                    ]
                },
                {
                    num: 81,
                    title: "الورق",
                    about: "",
                    img:      "https://arab-data.pages.dev/arab%20tili/fixies/img/083.jpg",
                    video:    "https://pub-faafccdb77b742b298c107f7c8436b69.r2.dev/videos/fixies/081.mp4",
                    subtitle: "https://arab-data.pages.dev/arab%20tili/fixies/sub/081.srt",
                    test:     "https://arab-data.pages.dev/arab%20tili/fixies/tests/081.txt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/081A.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/081A.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/081A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/081B.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/081B.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/081B.mp3"
                        }
                    ]
                },
                {
                    num: 82,
                    title: "المكنسة الكهربائية",
                    about: "",
                    img:      "https://arab-data.pages.dev/arab%20tili/fixies/img/082.jpg",
                    video:    "https://pub-faafccdb77b742b298c107f7c8436b69.r2.dev/videos/fixies/082.mp4",
                    subtitle: "https://arab-data.pages.dev/arab%20tili/fixies/sub/082.srt",
                    test:     "https://arab-data.pages.dev/arab%20tili/fixies/tests/082.txt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/082A.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/082A.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/082A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/082B.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/082B.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/082B.mp3"
                        }
                    ]
                },
                {
                    num: 83,
                    title: "التعليمات",
                    about: "",
                    img:      "https://arab-data.pages.dev/arab%20tili/fixies/img/079.jpg",
                    video:    "https://pub-faafccdb77b742b298c107f7c8436b69.r2.dev/videos/fixies/083.mp4",
                    subtitle: "https://arab-data.pages.dev/arab%20tili/fixies/sub/083.srt",
                    test:     "https://arab-data.pages.dev/arab%20tili/fixies/tests/083.txt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/083A.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/083A.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/083A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/083B.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/083B.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/083B.mp3"
                        }
                    ]
                },
                {
                    num: 84,
                    title: "سفينه في زجاجة",
                    about: "",
                    img:      "https://arab-data.pages.dev/arab%20tili/fixies/img/087.jpg",
                    video:    "https://pub-faafccdb77b742b298c107f7c8436b69.r2.dev/videos/fixies/084.mp4",
                    subtitle: "https://arab-data.pages.dev/arab%20tili/fixies/sub/084.srt",
                    test:     "https://arab-data.pages.dev/arab%20tili/fixies/tests/084.txt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/084A.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/084A.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/084A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/084B.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/084B.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/084B.mp3"
                        }
                    ]
                },
                {
                    num: 85,
                    title: "الدرع",
                    about: "",
                    img:      "https://arab-data.pages.dev/arab%20tili/fixies/img/086.jpg",
                    video:    "https://pub-faafccdb77b742b298c107f7c8436b69.r2.dev/videos/fixies/085.mp4",
                    subtitle: "https://arab-data.pages.dev/arab%20tili/fixies/sub/085.srt",
                    test:     "https://arab-data.pages.dev/arab%20tili/fixies/tests/085.txt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/085A.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/085A.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/085A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/085B.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/085B.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/085B.mp3"
                        }
                    ]
                },
                {
                    num: 86,
                    title: "المكالمة المصورة",
                    about: "",
                    img:      "https://arab-data.pages.dev/arab%20tili/fixies/img/085.jpg",
                    video:    "https://pub-faafccdb77b742b298c107f7c8436b69.r2.dev/videos/fixies/086.mp4",
                    subtitle: "https://arab-data.pages.dev/arab%20tili/fixies/sub/086.srt",
                    test:     "https://arab-data.pages.dev/arab%20tili/fixies/tests/086.txt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/086A.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/086A.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/086A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/086B.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/086B.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/086B.mp3"
                        }
                    ]
                },
                {
                    num: 87,
                    title: "آلة التصوير - الكاميرا",
                    about: "",
                    img:      "https://arab-data.pages.dev/arab%20tili/fixies/img/089.jpg",
                    video:    "https://pub-faafccdb77b742b298c107f7c8436b69.r2.dev/videos/fixies/087.mp4",
                    subtitle: "https://arab-data.pages.dev/arab%20tili/fixies/sub/087.srt",
                    test:     "https://arab-data.pages.dev/arab%20tili/fixies/tests/087.txt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/087A.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/087A.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/087A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/087B.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/087B.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/087B.mp3"
                        }
                    ]
                },
                {
                    num: 88,
                    title: "الفرخ",
                    about: "",
                    img:      "https://arab-data.pages.dev/arab%20tili/fixies/img/081.jpg",
                    video:    "https://pub-faafccdb77b742b298c107f7c8436b69.r2.dev/videos/fixies/088.mp4",
                    subtitle: "https://arab-data.pages.dev/arab%20tili/fixies/sub/088.srt",
                    test:     "https://arab-data.pages.dev/arab%20tili/fixies/tests/088.txt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/088A.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/088A.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/088A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/088B.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/088B.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/088B.mp3"
                        }
                    ]
                },
                {
                    num: 89,
                    title: "الموبايل",
                    about: "",
                    img:      "https://arab-data.pages.dev/arab%20tili/fixies/img/092.jpg",
                    video:    "https://pub-faafccdb77b742b298c107f7c8436b69.r2.dev/videos/fixies/089.mp4",
                    subtitle: "https://arab-data.pages.dev/arab%20tili/fixies/sub/089.srt",
                    test:     "https://arab-data.pages.dev/arab%20tili/fixies/tests/089.txt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/089A.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/089A.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/089A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/089B.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/089B.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/089B.mp3"
                        }
                    ]
                },
                {
                    num: 90,
                    title: "الكرة الأرضية",
                    about: "",
                    img:      "https://arab-data.pages.dev/arab%20tili/fixies/img/091.jpg",
                    video:    "https://pub-faafccdb77b742b298c107f7c8436b69.r2.dev/videos/fixies/090.mp4",
                    subtitle: "https://arab-data.pages.dev/arab%20tili/fixies/sub/090.srt",
                    test:     "https://arab-data.pages.dev/arab%20tili/fixies/tests/090.txt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/090A.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/090A.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/090A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/090B.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/090B.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/090B.mp3"
                        }
                    ]
                },
                {
                    num: 91,
                    title: "جهاز الانذار",
                    about: "",
                    img:      "https://arab-data.pages.dev/arab%20tili/fixies/img/088.jpg",
                    video:    "https://pub-faafccdb77b742b298c107f7c8436b69.r2.dev/videos/fixies/091.mp4",
                    subtitle: "https://arab-data.pages.dev/arab%20tili/fixies/sub/091.srt",
                    test:     "https://arab-data.pages.dev/arab%20tili/fixies/tests/091.txt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/091A.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/091A.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/091A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/091B.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/091B.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/091B.mp3"
                        }
                    ]
                },
                {
                    num: 92,
                    title: "حساس الحركة",
                    about: "",
                    img:      "https://arab-data.pages.dev/arab%20tili/fixies/img/090.jpg",
                    video:    "https://pub-faafccdb77b742b298c107f7c8436b69.r2.dev/videos/fixies/092.mp4",
                    subtitle: "https://arab-data.pages.dev/arab%20tili/fixies/sub/092.srt",
                    test:     "https://arab-data.pages.dev/arab%20tili/fixies/tests/092.txt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/092A.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/092A.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/092A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/092B.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/092B.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/092B.mp3"
                        }
                    ]
                },
                {
                    num: 93,
                    title: "البطاقة الالكترونية",
                    about: "",
                    img:      "https://arab-data.pages.dev/arab%20tili/fixies/img/093.jpg",
                    video:    "https://pub-faafccdb77b742b298c107f7c8436b69.r2.dev/videos/fixies/093.mp4",
                    subtitle: "https://arab-data.pages.dev/arab%20tili/fixies/sub/093.srt",
                    test:     "https://arab-data.pages.dev/arab%20tili/fixies/tests/093.txt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/093A.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/093A.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/093A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/093B.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/093B.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/093B.mp3"
                        }
                    ]
                },
                {
                    num: 94,
                    title: "المنعكسات",
                    about: "",
                    img:      "https://arab-data.pages.dev/arab%20tili/fixies/img/095.jpg",
                    video:    "https://pub-faafccdb77b742b298c107f7c8436b69.r2.dev/videos/fixies/094.mp4",
                    subtitle: "https://arab-data.pages.dev/arab%20tili/fixies/sub/094.srt",
                    test:     "https://arab-data.pages.dev/arab%20tili/fixies/tests/094.txt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/094A.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/094A.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/094A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/094B.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/094B.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/094B.mp3"
                        }
                    ]
                },
                {
                    num: 95,
                    title: "قدح الامتصاص",
                    about: "",
                    img:      "https://arab-data.pages.dev/arab%20tili/fixies/img/094.jpg",
                    video:    "https://pub-faafccdb77b742b298c107f7c8436b69.r2.dev/videos/fixies/095.mp4",
                    subtitle: "https://arab-data.pages.dev/arab%20tili/fixies/sub/095.srt",
                    test:     "https://arab-data.pages.dev/arab%20tili/fixies/tests/095.txt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/095A.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/095A.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/095A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/095B.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/095B.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/095B.mp3"
                        }
                    ]
                },
                {
                    num: 96,
                    title: "المصعد",
                    about: "",
                    img:      "https://arab-data.pages.dev/arab%20tili/fixies/img/097.jpg",
                    video:    "https://pub-faafccdb77b742b298c107f7c8436b69.r2.dev/videos/fixies/096.mp4",
                    subtitle: "https://arab-data.pages.dev/arab%20tili/fixies/sub/096.srt",
                    test:     "https://arab-data.pages.dev/arab%20tili/fixies/tests/096.txt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/096A.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/096A.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/096A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/096B.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/096B.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/096B.mp3"
                        }
                    ]
                },
                {
                    num: 97,
                    title: "البطاريات",
                    about: "",
                    img:      "https://arab-data.pages.dev/arab%20tili/fixies/img/098.jpg",
                    video:    "https://pub-faafccdb77b742b298c107f7c8436b69.r2.dev/videos/fixies/097.mp4",
                    subtitle: "https://arab-data.pages.dev/arab%20tili/fixies/sub/097.srt",
                    test:     "https://arab-data.pages.dev/arab%20tili/fixies/tests/097.txt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/097A.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/097A.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/097A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/097B.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/097B.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/097B.mp3"
                        }
                    ]
                },
                {
                    num: 98,
                    title: "الحبر السري",
                    about: "",
                    img:      "https://arab-data.pages.dev/arab%20tili/fixies/img/096.jpg",
                    video:    "https://pub-faafccdb77b742b298c107f7c8436b69.r2.dev/videos/fixies/098.mp4",
                    subtitle: "https://arab-data.pages.dev/arab%20tili/fixies/sub/098.srt",
                    test:     "https://arab-data.pages.dev/arab%20tili/fixies/tests/098.txt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/098A.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/098A.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/098A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/098B.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/098B.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/098B.mp3"
                        }
                    ]
                },
                {
                    num: 99,
                    title: "الحاكي",
                    about: "",
                    img:      "https://arab-data.pages.dev/arab%20tili/fixies/img/099.jpg",
                    video:    "https://pub-faafccdb77b742b298c107f7c8436b69.r2.dev/videos/fixies/099.mp4",
                    subtitle: "https://arab-data.pages.dev/arab%20tili/fixies/sub/099.srt",
                    test:     "https://arab-data.pages.dev/arab%20tili/fixies/tests/099.txt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/099A.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/099A.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/099A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/099B.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/099B.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/099B.mp3"
                        }
                    ]
                },
                {
                    num: 100,
                    title: "الهوائي",
                    about: "",
                    img:      "https://arab-data.pages.dev/arab%20tili/fixies/img/100.jpg",
                    video:    "https://pub-faafccdb77b742b298c107f7c8436b69.r2.dev/videos/fixies/100.mp4",
                    subtitle: "https://arab-data.pages.dev/arab%20tili/fixies/sub/100.srt",
                    test:     "https://arab-data.pages.dev/arab%20tili/fixies/tests/100.txt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/100A.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/100A.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/100A.mp3"
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/fixies/les/100B.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/fixies/aud_tim/100B.js",
                            audio:      "https://ia601601.us.archive.org/6/items/f_1_001P2/100B.mp3"
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
            img: "https://arab-data.pages.dev/arab%20tili/img/playlist2.webp",
            meta: "30 ta epizod, daraja: B2-C1",
            episodes: [
                {
                    num: 1,
                    title: "",
                    about: "",
                    img:      "",
                    video:    "https://ia800807.us.archive.org/31/items/imom-ibn-hanbal/01.mp4",
                    subtitle: "https://arab-data.pages.dev/arab%20tili/hanbal/sub/01.srt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/hanbal/les/01A.js",
                            audioTimes: "",
                            audio:      ""
                        },
                        {
                            label:      "Tahlil B",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/hanbal/les/01B.js",
                            audioTimes: "",
                            audio:      ""
                        }
                    ]
                },
                {
                    num: 2,
                    title: "",
                    about: "",
                    img:      "",
                    video:    "https://ia800807.us.archive.org/31/items/imom-ibn-hanbal/02.mp4",
                    subtitle: "https://arab-data.pages.dev/arab%20tili/hanbal/sub/02.srt",
                    analyses: [
                        {
                            label:      "Tahlil B",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/hanbal/les/02B.js",
                            audioTimes: "",
                            audio:      ""
                        }
                    ]
                },
                {
                    num: 3,
                    title: "",
                    about: "",
                    img:      "",
                    video:    "https://ia800807.us.archive.org/31/items/imom-ibn-hanbal/03.mp4",
                    subtitle: "https://arab-data.pages.dev/arab%20tili/hanbal/sub/03.srt",
                    analyses: [
                        {
                            label:      "Tahlil B",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/hanbal/les/03B.js",
                            audioTimes: "",
                            audio:      ""
                        }
                    ]
                },
                {
                    num: 4,
                    title: "",
                    about: "",
                    img:      "",
                    video:    "https://ia800807.us.archive.org/31/items/imom-ibn-hanbal/04.mp4",
                    subtitle: "https://arab-data.pages.dev/arab%20tili/hanbal/sub/04.srt",
                    analyses: [
                        {
                            label:      "Tahlil B",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/hanbal/les/04B.js",
                            audioTimes: "",
                            audio:      ""
                        }
                    ]
                },
                {
                    num: 5,
                    title: "",
                    about: "",
                    img:      "",
                    video:    "https://ia800807.us.archive.org/31/items/imom-ibn-hanbal/05.mp4",
                    subtitle: "https://arab-data.pages.dev/arab%20tili/hanbal/sub/05.srt",
                    analyses: [
                        {
                            label:      "Tahlil B",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/hanbal/les/05B.js",
                            audioTimes: "",
                            audio:      ""
                        }
                    ]
                },
                {
                    num: 6,
                    title: "",
                    about: "",
                    img:      "",
                    video:    "https://ia800807.us.archive.org/31/items/imom-ibn-hanbal/06.mp4",
                    subtitle: "https://arab-data.pages.dev/arab%20tili/hanbal/sub/06.srt",
                    analyses: [
                        {
                            label:      "Tahlil B",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/hanbal/les/06B.js",
                            audioTimes: "",
                            audio:      ""
                        }
                    ]
                },
                {
                    num: 7,
                    title: "",
                    about: "",
                    img:      "",
                    video:    "https://ia800807.us.archive.org/31/items/imom-ibn-hanbal/07.mp4",
                    subtitle: "https://arab-data.pages.dev/arab%20tili/hanbal/sub/07.srt",
                    analyses: [
                        {
                            label:      "Tahlil B",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/hanbal/les/07B.js",
                            audioTimes: "",
                            audio:      ""
                        }
                    ]
                },
                {
                    num: 8,
                    title: "",
                    about: "",
                    img:      "",
                    video:    "https://ia800807.us.archive.org/31/items/imom-ibn-hanbal/08.mp4",
                    subtitle: "https://arab-data.pages.dev/arab%20tili/hanbal/sub/08.srt",
                    analyses: [
                        {
                            label:      "Tahlil B",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/hanbal/les/08B.js",
                            audioTimes: "",
                            audio:      ""
                        }
                    ]
                },
                {
                    num: 9,
                    title: "",
                    about: "",
                    img:      "",
                    video:    "https://ia800807.us.archive.org/31/items/imom-ibn-hanbal/09.mp4",
                    subtitle: "https://arab-data.pages.dev/arab%20tili/hanbal/sub/09.srt",
                    analyses: [
                        {
                            label:      "Tahlil B",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/hanbal/les/09B.js",
                            audioTimes: "",
                            audio:      ""
                        }
                    ]
                },
                {
                    num: 10,
                    title: "",
                    about: "",
                    img:      "",
                    video:    "https://ia800807.us.archive.org/31/items/imom-ibn-hanbal/10.mp4",
                    subtitle: "https://arab-data.pages.dev/arab%20tili/hanbal/sub/10.srt",
                    analyses: [
                        {
                            label:      "Tahlil B",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/hanbal/les/10B.js",
                            audioTimes: "",
                            audio:      ""
                        }
                    ]
                },
                {
                    num: 11,
                    title: "",
                    about: "",
                    img:      "",
                    video:    "https://ia800807.us.archive.org/31/items/imom-ibn-hanbal/11.mp4",
                    subtitle: "https://arab-data.pages.dev/arab%20tili/hanbal/sub/11.srt",
                    analyses: [
                        {
                            label:      "Tahlil B",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/hanbal/les/11B.js",
                            audioTimes: "",
                            audio:      ""
                        }
                    ]
                },
                {
                    num: 12,
                    title: "",
                    about: "",
                    img:      "",
                    video:    "https://ia800807.us.archive.org/31/items/imom-ibn-hanbal/12.mp4",
                    subtitle: "https://arab-data.pages.dev/arab%20tili/hanbal/sub/12.srt",
                    analyses: [
                        {
                            label:      "Tahlil B",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/hanbal/les/12B.js",
                            audioTimes: "",
                            audio:      ""
                        }
                    ]
                },
                {
                    num: 13,
                    title: "",
                    about: "",
                    img:      "",
                    video:    "https://ia800807.us.archive.org/31/items/imom-ibn-hanbal/13.mp4",
                    subtitle: "https://arab-data.pages.dev/arab%20tili/hanbal/sub/13.srt",
                    analyses: [
                        {
                            label:      "Tahlil B",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/hanbal/les/13B.js",
                            audioTimes: "",
                            audio:      ""
                        }
                    ]
                },
                {
                    num: 14,
                    title: "",
                    about: "",
                    img:      "",
                    video:    "https://ia800807.us.archive.org/31/items/imom-ibn-hanbal/14.mp4",
                    subtitle: "https://arab-data.pages.dev/arab%20tili/hanbal/sub/14.srt",
                    analyses: [
                        {
                            label:      "Tahlil B",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/hanbal/les/14B.js",
                            audioTimes: "",
                            audio:      ""
                        }
                    ]
                },
                {
                    num: 15,
                    title: "",
                    about: "",
                    img:      "",
                    video:    "https://ia800807.us.archive.org/31/items/imom-ibn-hanbal/15.mp4",
                    subtitle: "https://arab-data.pages.dev/arab%20tili/hanbal/sub/15.srt",
                    analyses: [
                        {
                            label:      "Tahlil B",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/hanbal/les/15B.js",
                            audioTimes: "",
                            audio:      ""
                        }
                    ]
                },
                {
                    num: 16,
                    title: "",
                    about: "",
                    img:      "",
                    video:    "https://ia800807.us.archive.org/31/items/imom-ibn-hanbal/16.mp4",
                    subtitle: "https://arab-data.pages.dev/arab%20tili/hanbal/sub/16.srt",
                    analyses: [
                        {
                            label:      "Tahlil B",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/hanbal/les/16B.js",
                            audioTimes: "",
                            audio:      ""
                        }
                    ]
                },
                {
                    num: 17,
                    title: "",
                    about: "",
                    img:      "",
                    video:    "https://ia800807.us.archive.org/31/items/imom-ibn-hanbal/17.mp4",
                    subtitle: "https://arab-data.pages.dev/arab%20tili/hanbal/sub/17.srt",
                    analyses: [
                        {
                            label:      "Tahlil B",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/hanbal/les/17B.js",
                            audioTimes: "",
                            audio:      ""
                        }
                    ]
                },
                {
                    num: 18,
                    title: "",
                    about: "",
                    img:      "",
                    video:    "https://ia800807.us.archive.org/31/items/imom-ibn-hanbal/18.mp4",
                    subtitle: "https://arab-data.pages.dev/arab%20tili/hanbal/sub/18.srt",
                    analyses: [
                        {
                            label:      "Tahlil B",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/hanbal/les/18B.js",
                            audioTimes: "",
                            audio:      ""
                        }
                    ]
                },
                {
                    num: 19,
                    title: "",
                    about: "",
                    img:      "",
                    video:    "https://ia800807.us.archive.org/31/items/imom-ibn-hanbal/19.mp4",
                    subtitle: "https://arab-data.pages.dev/arab%20tili/hanbal/sub/19.srt",
                    analyses: [
                        {
                            label:      "Tahlil B",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/hanbal/les/19B.js",
                            audioTimes: "",
                            audio:      ""
                        }
                    ]
                },
                {
                    num: 20,
                    title: "",
                    about: "",
                    img:      "",
                    video:    "https://ia800807.us.archive.org/31/items/imom-ibn-hanbal/20.mp4",
                    subtitle: "https://arab-data.pages.dev/arab%20tili/hanbal/sub/20.srt",
                    analyses: [
                        {
                            label:      "Tahlil B",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/hanbal/les/20B.js",
                            audioTimes: "",
                            audio:      ""
                        }
                    ]
                }
            ]
        },

        {
            id: "ajaib",
            language: "arab-tili",
            title: "عجائب العالم",
            type: "kino",
            img: "https://arab-data.pages.dev/arab%20tili/img/ajaib.jpg",
            meta: "1 ta video, daraja: B2-C2",
            episodes: [
                {
                    num: 1,
                    title: "40 موقعا من مواقع التراث العالمي لليونيسكو سيذهلك",
                    about: "https://youtu.be/IRVjuz6DvOI",
                    img:      "",
                    video:    "https://pub-faafccdb77b742b298c107f7c8436b69.r2.dev/videos/ajaib/ajaib_dunya.mp4",
                    subtitle: "https://arab-data.pages.dev/arab%20tili/ajaib/srt/ajaib_dunya.srt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/ajaib/les/ajaib_dunyaA.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/ajaib/aud_time/ajaib_dunya.js",
                            audio:      "https://ia601008.us.archive.org/32/items/ajaib/ajaib_dunya.mp3"
                        }
                    ]
                },
                {
                    num: 2,
                    title: "أجمل الأماكن في فلسطين وثائقي ساحر بدقة",
                    about: "https://youtu.be/C8_YKIXjsXo",
                    img:      "",
                    video:    "https://pub-faafccdb77b742b298c107f7c8436b69.r2.dev/videos/ajaib/ajaib_falastin.mp4",
                    subtitle: "https://arab-data.pages.dev/arab%20tili/ajaib/srt/ajaib_falastin.srt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/ajaib/les/ajaib_falastinA.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/ajaib/aud_time/ajaib_falastin.js",
                            audio:      ""
                        }
                    ]
                },
                {
                    num: 3,
                    title: "حين يتجلّى إبداع الخالق في الأرض",
                    about: "https://youtu.be/zjkpAYy_i-I",
                    img:      "",
                    video:    "https://pub-faafccdb77b742b298c107f7c8436b69.r2.dev/videos/ajaib/naim_dunya.mp4",
                    subtitle: "https://arab-data.pages.dev/arab%20tili/ajaib/srt/naim_dunya.srt",
                    analyses: [
                        {
                            label:      "Tahlil A",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/ajaib/les/naim_dunyaA.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/ajaib/aud_time/naim_dunya.js",
                            audio:      ""
                        }
                    ]
                }
            ]
        },

        // ================= QUR'ON =================
        // id albatta "quran" bo'lishi shart — book-init.js shu orqali
        // Qur'onga xos rejimni (bismillah, ayah-marker, RTL Quron shrifti) yoqadi.
        {
            id: "quran",
            language: "arab-tili",
            title: "قرآن",
            type: "book",
            img: "https://arab-data.pages.dev/arab%20tili/img/playlist3.jpg",
            meta: "114 sura, daraja: B2-C1",
            episodes: [
                {
                    num: 1,
                    title: "سورة الفاتحة",
                    about: "Ochuvchi sura — 7 oyat",
                    img: "",

                    // 4 qori — audio fayllarning o'zini hali qo'shishingiz kerak
                    // (arab tili/quran/audio_book/<qori>/al-fatiha.mp3)
                    audioBook: {
                        "Mishary Rashid":         "https://arab-data.pages.dev/arab%20tili/quran/audio_book/mishary/001.%20Al-Fatihah%20-%20Al%27Afasi.mp3",
                        // "Abdul Basit":            "https://arab-data.pages.dev/arab%20tili/quran/audio_book/basit/al-fatiha.mp3",
                        // "Saad al-Ghamdi":         "https://arab-data.pages.dev/arab%20tili/quran/audio_book/ghamdi/al-fatiha.mp3",
                        // "Abdul Rahman al-Sudais": "https://arab-data.pages.dev/arab%20tili/quran/audio_book/sudais/al-fatiha.mp3"
                    },
                    // Hozircha faqat Mishary Rashid uchun vaqt fayli tayyor
                    // (arab tili/quran/audio_times_book/al-fatiha/mishary.js).
                    // Qolganlar uchun ham xuddi shu formatda fayl tayyorlab, shu yerga
                    // qo'shing — fayl mavjud bo'lmaguncha o'sha qori uchun oyat
                    // ranga bo'yalmaydi, lekin audio baribir ishlaydi.
                    audioBookTimes: {
                        "Mishary Rashid": "https://arab-data.pages.dev/arab%20tili/quran/audio_times_book/minshary/001-fatiha.js",
                        // "Abdul Basit":            "https://arab-data.pages.dev/arab%20tili/quran/audio_times_book/al-fatiha/basit.js",
                        // "Saad al-Ghamdi":         "https://arab-data.pages.dev/arab%20tili/quran/audio_times_book/al-fatiha/ghamdi.js",
                        // "Abdul Rahman al-Sudais": "https://arab-data.pages.dev/arab%20tili/quran/audio_times_book/al-fatiha/sudais.js"
                    },
                    // clipRange kerak emas — bu fayllar faqat shu suraga tegishli, bo'linmagan

                    analyses: [
                        {
                            label:      "Tahlil 1",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/quran/lessons/001%20fatiha-P.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/quran/audio_times/al-fatiha.js",
                            audio:      "https://arab-data.pages.dev/arab%20tili/quran/audio/001%20fatiha-P.mp3"
                        },
                        {
                            label:      "Tahlil 2",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/quran/lessons/001%20fatiha-C.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/quran/audio_times/al-fatiha.js",
                            audio:      "https://arab-data.pages.dev/arab%20tili/quran/audio/001%20fatiha-C.mp3"
                        }
                        // Ikkinchi bosqich (masalan so'zma-so'z tahlil) tayyor bo'lganda:
                        // {
                        //     label:      "So'zma-so'z tahlil",
                        //     lessons:    "https://arab-data.pages.dev/arab%20tili/quran/lessons/al-fatiha_edited.js",
                        //     audioTimes: "https://arab-data.pages.dev/arab%20tili/quran/audio_times/al-fatiha_edited.js",
                        //     audio:      "https://arab-data.pages.dev/arab%20tili/quran/audio/al-fatiha_edited_analysis.mp3"
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
                        // "Abdul Basit":            "https://arab-data.pages.dev/arab%20tili/quran/audio_book/basit/baqara.mp3",
                        // "Saad al-Ghamdi":         "https://arab-data.pages.dev/arab%20tili/quran/audio_book/ghamdi/baqara.mp3",
                        // "Abdul Rahman al-Sudais": "https://arab-data.pages.dev/arab%20tili/quran/audio_book/sudais/baqara.mp3"
                    },
                    clipRange: {
                        "Mishary Rashid": "00:00:00,000 - 00:12:52,340"
                    },
                    audioBookTimes: {
                        "Mishary Rashid": "https://arab-data.pages.dev/arab%20tili/quran/audio_times_book/baqara/mishary.js"
                        // "Abdul Basit":            "https://arab-data.pages.dev/arab%20tili/quran/audio_times_book/baqara/basit.js",
                        // "Saad al-Ghamdi":         "https://arab-data.pages.dev/arab%20tili/quran/audio_times_book/baqara/ghamdi.js",
                        // "Abdul Rahman al-Sudais": "https://arab-data.pages.dev/arab%20tili/quran/audio_times_book/baqara/sudais.js"
                    },
                    analyses: [
                        {
                            label:      "Tahlil 1",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/quran/lessons/baqara.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/quran/audio_times/baqara.js",
                            audio:      "https://arab-data.pages.dev/arab%20tili/quran/audio/baqara_analysis.mp3"
                        },
                        {
                            label:      "Tahlil 2",
                            lessons:    "https://arab-data.pages.dev/arab%20tili/quran/lessons/baqara.js",
                            audioTimes: "https://arab-data.pages.dev/arab%20tili/quran/audio_times/baqara.js",
                            audio:      "https://arab-data.pages.dev/arab%20tili/quran/audio/baqara_analysis.mp3"
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
            img: "https://arab-data.pages.dev/inglis%20tili/img/hqdefault.webp",
            meta: "epizodlar soni nomalum, daraja: A2-B2",
            episodes: [
                {
                    num: 1,
                    title: "The Drain",
                    about: "Tahlil ovozi qo'yilmagan",
                    img:      "",
                    video:    "https://arab-data.pages.dev/inglis%20tili/fiksiz/videos/002%20-%20The%20Drain.mp4",
                    subtitle: "https://arab-data.pages.dev/inglis%20tili/fiksiz/srt/002%20-%20The%20Drain.srt",
                    analyses: [
                        {
                            label:      "Tahlil 1",
                            lessons:    "https://arab-data.pages.dev/inglis%20tili/fiksiz/lessons/f_1_001P.js",
                            audioTimes: "https://arab-data.pages.dev/inglis%20tili/fiksiz/audio_times/f_1_001P.js",
                            audio:      "https://arab-data.pages.dev/inglis%20tili/fiksiz/audio/f_1_001P.mp3"
                        },
                        {
                            label:      "Tahlil 2",
                            lessons:    "https://arab-data.pages.dev/inglis%20tili/fiksiz/lessons/f_1_001C.js",
                            audioTimes: "https://arab-data.pages.dev/inglis%20tili/fiksiz/audio_times/f_1_001C.js",
                            audio:      "https://arab-data.pages.dev/inglis%20tili/fiksiz/audio/f_1_001C.mp3"
                        }
                    ]
                }
            ]
        },

        {
            id: "fixies-english-book",
            type: "book",              // "quran" EMAS — shunda isQuranBook false bo'ladi
            title: "4000 Words 1",
            img: "https://arab-data.pages.dev/inglis%20tili/img/4000-1.jpg",
            meta: "daraja: A2-B1",
            language: "ingliz-tili",
            episodes: [
                {
                    num: 1,
                    title: "Unit 1",
                    audioBook: { "Reader": "https://made-video.sgjibebk573x.workers.dev/4000-word/book-aud/Unit%2001.mp3" },
                    clipRange: { "Reader": "" },
                    audioBookTimes: { "Reader": "" },
                    analyses: [
                        {
                            label: "Tahlil",
                            lessons: "https://arab-data.pages.dev/inglis%20tili/4000_w_1/les/01A.js",
                            audioTimes: "https://arab-data.pages.dev/inglis%20tili/4000_w_1/aud-tim-book/01A.js",
                            audio: "https://dn710906.ca.archive.org/0/items/4000-essential-words-analysis/01A.mp3"
                        },
                    ]
                },
                {
                    num: 2,
                    title: "Unit 2",
                    audioBook: { "Reader": "https://made-video.sgjibebk573x.workers.dev/4000-word/book-aud/Unit%2002.mp3" },
                    clipRange: { "Reader": "" },
                    audioBookTimes: { "Reader": "" },
                    analyses: [
                        {
                            label: "Tahlil",
                            lessons: "https://arab-data.pages.dev/inglis%20tili/4000_w_1/les/02A.js",
                            audioTimes: "https://arab-data.pages.dev/inglis%20tili/4000_w_1/aud-tim-book/02A.js",
                            audio: "https://dn710906.ca.archive.org/0/items/4000-essential-words-analysis/02A.mp3"
                        },
                    ]
                },
                {
                    num: 3,
                    title: "Unit 3",
                    audioBook: { "Reader": "https://made-video.sgjibebk573x.workers.dev/4000-word/book-aud/Unit%2003.mp3" },
                    clipRange: { "Reader": "" },
                    audioBookTimes: { "Reader": "" },
                    analyses: [
                        {
                            label: "Tahlil",
                            lessons: "https://arab-data.pages.dev/inglis%20tili/4000_w_1/les/03A.js",
                            audioTimes: "https://arab-data.pages.dev/inglis%20tili/4000_w_1/aud-tim-book/03A.js",
                            audio: "https://dn710906.ca.archive.org/0/items/4000-essential-words-analysis/03A.mp3"
                        },
                    ]
                },
                {
                    num: 4,
                    title: "Unit 4",
                    audioBook: { "Reader": "https://made-video.sgjibebk573x.workers.dev/4000-word/book-aud/Unit%2004.mp3" },
                    clipRange: { "Reader": "" },
                    audioBookTimes: { "Reader": "" },
                    analyses: [
                        {
                            label: "Tahlil",
                            lessons: "https://arab-data.pages.dev/inglis%20tili/4000_w_1/les/04A.js",
                            audioTimes: "https://arab-data.pages.dev/inglis%20tili/4000_w_1/aud-tim-book/04A.js",
                            audio: "https://dn710906.ca.archive.org/0/items/4000-essential-words-analysis/04A.mp3"
                        },
                    ]
                },
                {
                    num: 5,
                    title: "Unit 5",
                    audioBook: { "Reader": "https://made-video.sgjibebk573x.workers.dev/4000-word/book-aud/Unit%2005.mp3" },
                    clipRange: { "Reader": "" },
                    audioBookTimes: { "Reader": "" },
                    analyses: [
                        {
                            label: "Tahlil",
                            lessons: "https://arab-data.pages.dev/inglis%20tili/4000_w_1/les/05A.js",
                            audioTimes: "https://arab-data.pages.dev/inglis%20tili/4000_w_1/aud-tim-book/05A.js",
                            audio: "https://dn710906.ca.archive.org/0/items/4000-essential-words-analysis/05A.mp3"
                        },
                    ]
                },
                {
                    num: 6,
                    title: "Unit 6",
                    audioBook: { "Reader": "https://made-video.sgjibebk573x.workers.dev/4000-word/book-aud/Unit%2006.mp3" },
                    clipRange: { "Reader": "" },
                    audioBookTimes: { "Reader": "" },
                    analyses: [
                        {
                            label: "Tahlil",
                            lessons: "https://arab-data.pages.dev/inglis%20tili/4000_w_1/les/06A.js",
                            audioTimes: "https://arab-data.pages.dev/inglis%20tili/4000_w_1/aud-tim-book/06A.js",
                            audio: "https://dn710906.ca.archive.org/0/items/4000-essential-words-analysis/06A.mp3"
                        },
                    ]
                },
                {
                    num: 7,
                    title: "Unit 7",
                    audioBook: { "Reader": "https://made-video.sgjibebk573x.workers.dev/4000-word/book-aud/Unit%2007.mp3" },
                    clipRange: { "Reader": "" },
                    audioBookTimes: { "Reader": "" },
                    analyses: [
                        {
                            label: "Tahlil",
                            lessons: "https://arab-data.pages.dev/inglis%20tili/4000_w_1/les/07A.js",
                            audioTimes: "https://arab-data.pages.dev/inglis%20tili/4000_w_1/aud-tim-book/07A.js",
                            audio: "https://dn710906.ca.archive.org/0/items/4000-essential-words-analysis/07A.mp3"
                        },
                    ]
                },
                {
                    num: 8,
                    title: "Unit 8",
                    audioBook: { "Reader": "https://made-video.sgjibebk573x.workers.dev/4000-word/book-aud/Unit%2008.mp3" },
                    clipRange: { "Reader": "" },
                    audioBookTimes: { "Reader": "" },
                    analyses: [
                        {
                            label: "Tahlil",
                            lessons: "https://arab-data.pages.dev/inglis%20tili/4000_w_1/les/08A.js",
                            audioTimes: "https://arab-data.pages.dev/inglis%20tili/4000_w_1/aud-tim-book/08A.js",
                            audio: "https://dn710906.ca.archive.org/0/items/4000-essential-words-analysis/08A.mp3"
                        },
                    ]
                },
                {
                    num: 9,
                    title: "Unit 9",
                    audioBook: { "Reader": "https://made-video.sgjibebk573x.workers.dev/4000-word/book-aud/Unit%2009.mp3" },
                    clipRange: { "Reader": "" },
                    audioBookTimes: { "Reader": "" },
                    analyses: [
                        {
                            label: "Tahlil",
                            lessons: "https://arab-data.pages.dev/inglis%20tili/4000_w_1/les/09A.js",
                            audioTimes: "https://arab-data.pages.dev/inglis%20tili/4000_w_1/aud-tim-book/09A.js",
                            audio: "https://dn710906.ca.archive.org/0/items/4000-essential-words-analysis/09A.mp3"
                        },
                    ]
                },
                {
                    num: 10,
                    title: "Unit 10",
                    audioBook: { "Reader": "https://made-video.sgjibebk573x.workers.dev/4000-word/book-aud/Unit%2010.mp3" },
                    clipRange: { "Reader": "" },
                    audioBookTimes: { "Reader": "" },
                    analyses: [
                        {
                            label: "Tahlil",
                            lessons: "https://arab-data.pages.dev/inglis%20tili/4000_w_1/les/10A.js",
                            audioTimes: "https://arab-data.pages.dev/inglis%20tili/4000_w_1/aud-tim-book/10A.js",
                            audio: "https://dn710906.ca.archive.org/0/items/4000-essential-words-analysis/10A.mp3"
                        },
                    ]
                },
                {
                    num: 11,
                    title: "Unit 11",
                    audioBook: { "Reader": "https://made-video.sgjibebk573x.workers.dev/4000-word/book-aud/Unit%2011.mp3" },
                    clipRange: { "Reader": "" },
                    audioBookTimes: { "Reader": "" },
                    analyses: [
                        {
                            label: "Tahlil",
                            lessons: "https://arab-data.pages.dev/inglis%20tili/4000_w_1/les/11A.js",
                            audioTimes: "https://arab-data.pages.dev/inglis%20tili/4000_w_1/aud-tim-book/11A.js",
                            audio: "https://dn710906.ca.archive.org/0/items/4000-essential-words-analysis/11A.mp3"
                        },
                    ]
                },
                {
                    num: 12,
                    title: "Unit 12",
                    audioBook: { "Reader": "https://made-video.sgjibebk573x.workers.dev/4000-word/book-aud/Unit%2012.mp3" },
                    clipRange: { "Reader": "" },
                    audioBookTimes: { "Reader": "" },
                    analyses: [
                        {
                            label: "Tahlil",
                            lessons: "https://arab-data.pages.dev/inglis%20tili/4000_w_1/les/12A.js",
                            audioTimes: "https://arab-data.pages.dev/inglis%20tili/4000_w_1/aud-tim-book/12A.js",
                            audio: "https://dn710906.ca.archive.org/0/items/4000-essential-words-analysis/12A.mp3"
                        },
                    ]
                },
                {
                    num: 13,
                    title: "Unit 13",
                    audioBook: { "Reader": "https://made-video.sgjibebk573x.workers.dev/4000-word/book-aud/Unit%2013.mp3" },
                    clipRange: { "Reader": "" },
                    audioBookTimes: { "Reader": "" },
                    analyses: [
                        {
                            label: "Tahlil",
                            lessons: "https://arab-data.pages.dev/inglis%20tili/4000_w_1/les/13A.js",
                            audioTimes: "https://arab-data.pages.dev/inglis%20tili/4000_w_1/aud-tim-book/13A.js",
                            audio: "https://dn710906.ca.archive.org/0/items/4000-essential-words-analysis/13A.mp3"
                        },
                    ]
                },
                {
                    num: 14,
                    title: "Unit 14",
                    audioBook: { "Reader": "https://made-video.sgjibebk573x.workers.dev/4000-word/book-aud/Unit%2014.mp3" },
                    clipRange: { "Reader": "" },
                    audioBookTimes: { "Reader": "" },
                    analyses: [
                        {
                            label: "Tahlil",
                            lessons: "https://arab-data.pages.dev/inglis%20tili/4000_w_1/les/14A.js",
                            audioTimes: "https://arab-data.pages.dev/inglis%20tili/4000_w_1/aud-tim-book/14A.js",
                            audio: "https://dn710906.ca.archive.org/0/items/4000-essential-words-analysis/14A.mp3"
                        },
                    ]
                },
                {
                    num: 15,
                    title: "Unit 15",
                    audioBook: { "Reader": "https://made-video.sgjibebk573x.workers.dev/4000-word/book-aud/Unit%2015.mp3" },
                    clipRange: { "Reader": "" },
                    audioBookTimes: { "Reader": "" },
                    analyses: [
                        {
                            label: "Tahlil",
                            lessons: "https://arab-data.pages.dev/inglis%20tili/4000_w_1/les/15A.js",
                            audioTimes: "https://arab-data.pages.dev/inglis%20tili/4000_w_1/aud-tim-book/15A.js",
                            audio: "https://dn710906.ca.archive.org/0/items/4000-essential-words-analysis/15A.mp3"
                        },
                    ]
                },
                {
                    num: 16,
                    title: "Unit 16",
                    audioBook: { "Reader": "https://made-video.sgjibebk573x.workers.dev/4000-word/book-aud/Unit%2016.mp3" },
                    clipRange: { "Reader": "" },
                    audioBookTimes: { "Reader": "" },
                    analyses: [
                        {
                            label: "Tahlil",
                            lessons: "https://arab-data.pages.dev/inglis%20tili/4000_w_1/les/16A.js",
                            audioTimes: "https://arab-data.pages.dev/inglis%20tili/4000_w_1/aud-tim-book/16A.js",
                            audio: "https://dn710906.ca.archive.org/0/items/4000-essential-words-analysis/16A.mp3"
                        },
                    ]
                },
                {
                    num: 17,
                    title: "Unit 17",
                    audioBook: { "Reader": "https://made-video.sgjibebk573x.workers.dev/4000-word/book-aud/Unit%2017.mp3" },
                    clipRange: { "Reader": "" },
                    audioBookTimes: { "Reader": "" },
                    analyses: [
                        {
                            label: "Tahlil",
                            lessons: "https://arab-data.pages.dev/inglis%20tili/4000_w_1/les/17A.js",
                            audioTimes: "https://arab-data.pages.dev/inglis%20tili/4000_w_1/aud-tim-book/17A.js",
                            audio: "https://dn710906.ca.archive.org/0/items/4000-essential-words-analysis/17A.mp3"
                        },
                    ]
                },
                {
                    num: 18,
                    title: "Unit 18",
                    audioBook: { "Reader": "https://made-video.sgjibebk573x.workers.dev/4000-word/book-aud/Unit%2018.mp3" },
                    clipRange: { "Reader": "" },
                    audioBookTimes: { "Reader": "" },
                    analyses: [
                        {
                            label: "Tahlil",
                            lessons: "https://arab-data.pages.dev/inglis%20tili/4000_w_1/les/18A.js",
                            audioTimes: "https://arab-data.pages.dev/inglis%20tili/4000_w_1/aud-tim-book/18A.js",
                            audio: "https://dn710906.ca.archive.org/0/items/4000-essential-words-analysis/18A.mp3"
                        },
                    ]
                },
                {
                    num: 19,
                    title: "Unit 19",
                    audioBook: { "Reader": "https://made-video.sgjibebk573x.workers.dev/4000-word/book-aud/Unit%2019.mp3" },
                    clipRange: { "Reader": "" },
                    audioBookTimes: { "Reader": "" },
                    analyses: [
                        {
                            label: "Tahlil",
                            lessons: "https://arab-data.pages.dev/inglis%20tili/4000_w_1/les/19A.js",
                            audioTimes: "https://arab-data.pages.dev/inglis%20tili/4000_w_1/aud-tim-book/19A.js",
                            audio: "https://dn710906.ca.archive.org/0/items/4000-essential-words-analysis/19A.mp3"
                        },
                    ]
                },
                {
                    num: 20,
                    title: "Unit 20",
                    audioBook: { "Reader": "https://made-video.sgjibebk573x.workers.dev/4000-word/book-aud/Unit%2020.mp3" },
                    clipRange: { "Reader": "" },
                    audioBookTimes: { "Reader": "" },
                    analyses: [
                        {
                            label: "Tahlil",
                            lessons: "https://arab-data.pages.dev/inglis%20tili/4000_w_1/les/20A.js",
                            audioTimes: "https://arab-data.pages.dev/inglis%20tili/4000_w_1/aud-tim-book/20A.js",
                            audio: "https://dn710906.ca.archive.org/0/items/4000-essential-words-analysis/20A.mp3"
                        },
                    ]
                },
                {
                    num: 21,
                    title: "Unit 21",
                    audioBook: { "Reader": "https://made-video.sgjibebk573x.workers.dev/4000-word/book-aud/Unit%2021.mp3" },
                    clipRange: { "Reader": "" },
                    audioBookTimes: { "Reader": "" },
                    analyses: [
                        {
                            label: "Tahlil",
                            lessons: "https://arab-data.pages.dev/inglis%20tili/4000_w_1/les/21A.js",
                            audioTimes: "https://arab-data.pages.dev/inglis%20tili/4000_w_1/aud-tim-book/21A.js",
                            audio: "https://dn710906.ca.archive.org/0/items/4000-essential-words-analysis/21A.mp3"
                        }
                    ]
                },
                {
                    num: 22,
                    title: "Unit 22",
                    audioBook: { "Reader": "https://made-video.sgjibebk573x.workers.dev/4000-word/book-aud/Unit%2022.mp3" },
                    clipRange: { "Reader": "" },
                    audioBookTimes: { "Reader": "" },
                    analyses: [
                        {
                            label: "Tahlil",
                            lessons: "https://arab-data.pages.dev/inglis%20tili/4000_w_1/les/22A.js",
                            audioTimes: "https://arab-data.pages.dev/inglis%20tili/4000_w_1/aud-tim-book/22A.js",
                            audio: "https://dn710906.ca.archive.org/0/items/4000-essential-words-analysis/22A.mp3"
                        }
                    ]
                },
                {
                    num: 23,
                    title: "Unit 23",
                    audioBook: { "Reader": "https://made-video.sgjibebk573x.workers.dev/4000-word/book-aud/Unit%2023.mp3" },
                    clipRange: { "Reader": "" },
                    audioBookTimes: { "Reader": "" },
                    analyses: [
                        {
                            label: "Tahlil",
                            lessons: "https://arab-data.pages.dev/inglis%20tili/4000_w_1/les/23A.js",
                            audioTimes: "https://arab-data.pages.dev/inglis%20tili/4000_w_1/aud-tim-book/23A.js",
                            audio: "https://dn710906.ca.archive.org/0/items/4000-essential-words-analysis/23A.mp3"
                        }
                    ]
                },
                {
                    num: 24,
                    title: "Unit 24",
                    audioBook: { "Reader": "https://made-video.sgjibebk573x.workers.dev/4000-word/book-aud/Unit%2024.mp3" },
                    clipRange: { "Reader": "" },
                    audioBookTimes: { "Reader": "" },
                    analyses: [
                        {
                            label: "Tahlil",
                            lessons: "https://arab-data.pages.dev/inglis%20tili/4000_w_1/les/24A.js",
                            audioTimes: "https://arab-data.pages.dev/inglis%20tili/4000_w_1/aud-tim-book/24A.js",
                            audio: "https://dn710906.ca.archive.org/0/items/4000-essential-words-analysis/24A.mp3"
                        }
                    ]
                },
                {
                    num: 25,
                    title: "Unit 25",
                    audioBook: { "Reader": "https://made-video.sgjibebk573x.workers.dev/4000-word/book-aud/Unit%2025.mp3" },
                    clipRange: { "Reader": "" },
                    audioBookTimes: { "Reader": "" },
                    analyses: [
                        {
                            label: "Tahlil",
                            lessons: "https://arab-data.pages.dev/inglis%20tili/4000_w_1/les/25A.js",
                            audioTimes: "https://arab-data.pages.dev/inglis%20tili/4000_w_1/aud-tim-book/25A.js",
                            audio: "https://dn710906.ca.archive.org/0/items/4000-essential-words-analysis/25A.mp3"
                        }
                    ]
                },
                {
                    num: 26,
                    title: "Unit 26",
                    audioBook: { "Reader": "https://made-video.sgjibebk573x.workers.dev/4000-word/book-aud/Unit%2026.mp3" },
                    clipRange: { "Reader": "" },
                    audioBookTimes: { "Reader": "" },
                    analyses: [
                        {
                            label: "Tahlil",
                            lessons: "https://arab-data.pages.dev/inglis%20tili/4000_w_1/les/26A.js",
                            audioTimes: "https://arab-data.pages.dev/inglis%20tili/4000_w_1/aud-tim-book/26A.js",
                            audio: "https://dn710906.ca.archive.org/0/items/4000-essential-words-analysis/26A.mp3"
                        }
                    ]
                },
                {
                    num: 27,
                    title: "Unit 27",
                    audioBook: { "Reader": "https://made-video.sgjibebk573x.workers.dev/4000-word/book-aud/Unit%2027.mp3" },
                    clipRange: { "Reader": "" },
                    audioBookTimes: { "Reader": "" },
                    analyses: [
                        {
                            label: "Tahlil",
                            lessons: "https://arab-data.pages.dev/inglis%20tili/4000_w_1/les/27A.js",
                            audioTimes: "https://arab-data.pages.dev/inglis%20tili/4000_w_1/aud-tim-book/27A.js",
                            audio: "https://dn710906.ca.archive.org/0/items/4000-essential-words-analysis/27A.mp3"
                        }
                    ]
                },
                {
                    num: 28,
                    title: "Unit 28",
                    audioBook: { "Reader": "https://made-video.sgjibebk573x.workers.dev/4000-word/book-aud/Unit%2028.mp3" },
                    clipRange: { "Reader": "" },
                    audioBookTimes: { "Reader": "" },
                    analyses: [
                        {
                            label: "Tahlil",
                            lessons: "https://arab-data.pages.dev/inglis%20tili/4000_w_1/les/28A.js",
                            audioTimes: "https://arab-data.pages.dev/inglis%20tili/4000_w_1/aud-tim-book/28A.js",
                            audio: "https://dn710906.ca.archive.org/0/items/4000-essential-words-analysis/28A.mp3"
                        }
                    ]
                },
                {
                    num: 29,
                    title: "Unit 29",
                    audioBook: { "Reader": "https://made-video.sgjibebk573x.workers.dev/4000-word/book-aud/Unit%2029.mp3" },
                    clipRange: { "Reader": "" },
                    audioBookTimes: { "Reader": "" },
                    analyses: [
                        {
                            label: "Tahlil",
                            lessons: "https://arab-data.pages.dev/inglis%20tili/4000_w_1/les/29A.js",
                            audioTimes: "https://arab-data.pages.dev/inglis%20tili/4000_w_1/aud-tim-book/29A.js",
                            audio: "https://dn710906.ca.archive.org/0/items/4000-essential-words-analysis/29A.mp3"
                        }
                    ]
                },
                {
                    num: 30,
                    title: "Unit 30",
                    audioBook: { "Reader": "https://made-video.sgjibebk573x.workers.dev/4000-word/book-aud/Unit%2030.mp3" },
                    clipRange: { "Reader": "" },
                    audioBookTimes: { "Reader": "" },
                    analyses: [
                        {
                            label: "Tahlil",
                            lessons: "https://arab-data.pages.dev/inglis%20tili/4000_w_1/les/30A.js",
                            audioTimes: "https://arab-data.pages.dev/inglis%20tili/4000_w_1/aud-tim-book/30A.js",
                            audio: "https://dn710906.ca.archive.org/0/items/4000-essential-words-analysis/30A.mp3"
                        }
                    ]
                }
            ]
        },
        {
            id: "fixies-english-book-2",
            language: "ingliz-tili",
            title: "4000 Words 2",
            type: "book",
            img: "https://arab-data.pages.dev/inglis%20tili/img/words_2.jpg",
            meta: "10 ta dars",
            episodes: [
                {
                    num: 1,
                    title: "Unit 1",
                    audioBook: { "Reader": "https://ia600106.us.archive.org/27/items/4000-essential-english-words-2/01.mp3" },
                    clipRange: { "Reader": "" },
                    audioBookTimes: { "Reader": "" },
                    analyses: [
                        {
                            label: "Tahlil",
                            lessons: "https://arab-data.pages.dev/inglis%20tili/4000_w_2/les/01A.js",
                            audioTimes: "https://arab-data.pages.dev/inglis%20tili/4000_w_2/aud-tim-book/01A.js",
                            audio: "https://ia600402.us.archive.org/4/items/4000-essential-english-words-1-text-analysis-en-uz/01A.mp3"
                        }
                    ]
                },
                {
                    num: 2,
                    title: "Unit 2",
                    audioBook: { "Reader": "https://ia600106.us.archive.org/27/items/4000-essential-english-words-2/02.mp3" },
                    clipRange: { "Reader": "" },
                    audioBookTimes: { "Reader": "" },
                    analyses: [
                        {
                            label: "Tahlil",
                            lessons: "https://arab-data.pages.dev/inglis%20tili/4000_w_2/les/02A.js",
                            audioTimes: "https://arab-data.pages.dev/inglis%20tili/4000_w_2/aud-tim-book/02A.js",
                            audio: "https://ia600402.us.archive.org/4/items/4000-essential-english-words-1-text-analysis-en-uz/02A.mp3"
                        }
                    ]
                },
                {
                    num: 3,
                    title: "Unit 3",
                    audioBook: { "Reader": "https://ia600106.us.archive.org/27/items/4000-essential-english-words-2/03.mp3" },
                    clipRange: { "Reader": "" },
                    audioBookTimes: { "Reader": "" },
                    analyses: [
                        {
                            label: "Tahlil",
                            lessons: "https://arab-data.pages.dev/inglis%20tili/4000_w_2/les/03A.js",
                            audioTimes: "https://arab-data.pages.dev/inglis%20tili/4000_w_2/aud-tim-book/03A.js",
                            audio: "https://ia600402.us.archive.org/4/items/4000-essential-english-words-1-text-analysis-en-uz/03A.mp3"
                        }
                    ]
                },
                {
                    num: 4,
                    title: "Unit 4",
                    audioBook: { "Reader": "https://ia600106.us.archive.org/27/items/4000-essential-english-words-2/04.mp3" },
                    clipRange: { "Reader": "" },
                    audioBookTimes: { "Reader": "" },
                    analyses: [
                        {
                            label: "Tahlil",
                            lessons: "https://arab-data.pages.dev/inglis%20tili/4000_w_2/les/04A.js",
                            audioTimes: "https://arab-data.pages.dev/inglis%20tili/4000_w_2/aud-tim-book/04A.js",
                            audio: "https://ia600402.us.archive.org/4/items/4000-essential-english-words-1-text-analysis-en-uz/04A.mp3"
                        }
                    ]
                },
                {
                    num: 5,
                    title: "Unit 5",
                    audioBook: { "Reader": "https://ia600106.us.archive.org/27/items/4000-essential-english-words-2/05.mp3" },
                    clipRange: { "Reader": "" },
                    audioBookTimes: { "Reader": "" },
                    analyses: [
                        {
                            label: "Tahlil",
                            lessons: "https://arab-data.pages.dev/inglis%20tili/4000_w_2/les/05A.js",
                            audioTimes: "https://arab-data.pages.dev/inglis%20tili/4000_w_2/aud-tim-book/05A.js",
                            audio: "https://ia600402.us.archive.org/4/items/4000-essential-english-words-1-text-analysis-en-uz/05A.mp3"
                        }
                    ]
                },
                {
                    num: 6,
                    title: "Unit 6",
                    audioBook: { "Reader": "https://ia600106.us.archive.org/27/items/4000-essential-english-words-2/06.mp3" },
                    clipRange: { "Reader": "" },
                    audioBookTimes: { "Reader": "" },
                    analyses: [
                        {
                            label: "Tahlil",
                            lessons: "https://arab-data.pages.dev/inglis%20tili/4000_w_2/les/06A.js",
                            audioTimes: "https://arab-data.pages.dev/inglis%20tili/4000_w_2/aud-tim-book/06A.js",
                            audio: "https://ia600402.us.archive.org/4/items/4000-essential-english-words-1-text-analysis-en-uz/06A.mp3"
                        }
                    ]
                },
                {
                    num: 7,
                    title: "Unit 7",
                    audioBook: { "Reader": "https://ia600106.us.archive.org/27/items/4000-essential-english-words-2/07.mp3" },
                    clipRange: { "Reader": "" },
                    audioBookTimes: { "Reader": "" },
                    analyses: [
                        {
                            label: "Tahlil",
                            lessons: "https://arab-data.pages.dev/inglis%20tili/4000_w_2/les/07A.js",
                            audioTimes: "https://arab-data.pages.dev/inglis%20tili/4000_w_2/aud-tim-book/07A.js",
                            audio: "https://ia600402.us.archive.org/4/items/4000-essential-english-words-1-text-analysis-en-uz/07A.mp3"
                        }
                    ]
                },
                {
                    num: 8,
                    title: "Unit 8",
                    audioBook: { "Reader": "https://ia600106.us.archive.org/27/items/4000-essential-english-words-2/08.mp3" },
                    clipRange: { "Reader": "" },
                    audioBookTimes: { "Reader": "" },
                    analyses: [
                        {
                            label: "Tahlil",
                            lessons: "https://arab-data.pages.dev/inglis%20tili/4000_w_2/les/08A.js",
                            audioTimes: "https://arab-data.pages.dev/inglis%20tili/4000_w_2/aud-tim-book/08A.js",
                            audio: "https://ia600402.us.archive.org/4/items/4000-essential-english-words-1-text-analysis-en-uz/08A.mp3"
                        }
                    ]
                },
                {
                    num: 9,
                    title: "Unit 9",
                    audioBook: { "Reader": "https://ia600106.us.archive.org/27/items/4000-essential-english-words-2/09.mp3" },
                    clipRange: { "Reader": "" },
                    audioBookTimes: { "Reader": "" },
                    analyses: [
                        {
                            label: "Tahlil",
                            lessons: "https://arab-data.pages.dev/inglis%20tili/4000_w_2/les/09A.js",
                            audioTimes: "https://arab-data.pages.dev/inglis%20tili/4000_w_2/aud-tim-book/09A.js",
                            audio: "https://ia600402.us.archive.org/4/items/4000-essential-english-words-1-text-analysis-en-uz/09A.mp3"
                        }
                    ]
                },
                {
                    num: 10,
                    title: "Unit 10",
                    audioBook: { "Reader": "https://ia600106.us.archive.org/27/items/4000-essential-english-words-2/10.mp3" },
                    clipRange: { "Reader": "" },
                    audioBookTimes: { "Reader": "" },
                    analyses: [
                        {
                            label: "Tahlil",
                            lessons: "https://arab-data.pages.dev/inglis%20tili/4000_w_2/les/10A.js",
                            audioTimes: "https://arab-data.pages.dev/inglis%20tili/4000_w_2/aud-tim-book/10A.js",
                            audio: "https://ia600402.us.archive.org/4/items/4000-essential-english-words-1-text-analysis-en-uz/10A.mp3"
                        }
                    ]
                }
            ]
        }

    ]
};