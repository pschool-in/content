export default {
  label: 'वर्ग पहेली',
  lockAfter: 100,
  id: 'hi-crossword',
  img: 'crossword',
  lang: 'hi',
  list: [
    {
      id: 'days',
      label: 'दिनों का नाम',
      type: 'crossword',
      data: {
        words: [
          {
            word: 'सोमवार',
            marker: { x: 2, y: 0 },
            hint: 'monday',
            direction: 'down'
          },
          {
            word: 'रविवार',
            marker: { x: 0, y: 2 },
            hint: 'sunday',
            direction: 'across'
          },
          {
            word: 'बुधवार',
            marker: { x: 4, y: 3 },
            hint: 'wednesday',
            direction: 'down'
          },
          {
            word: 'शनिवार',
            marker: { x: 5, y: 2 },
            hint: 'saturday',
            direction: 'down'
          },
          {
            word: 'शुक्रवार',
            marker: { x: 6, y: 1 },
            hint: 'friday',
            direction: 'down'
          },
          {
            word: ' गुरुवार',
            marker: { x: 2, y: 5 },
            hint: 'thursday',
            direction: 'across'
          },
          {
            word: 'मंगलवार',
            marker: { x: 0, y: 6 },
            hint: 'thursday',
            direction: 'across'
          }
        ],
        title:
          'पहेली हल करें। संकेत देखने के लिए कृपया किसी कक्ष पर क्लिक करें.',
        lang: 'hi',
        table: [
          ['', '', 'सो', '', '', '', ''],
          ['', '', 'म', '', '', '', 'शु'],
          ['र', 'वि', 'वा', 'र', '', 'श', 'क्र'],
          ['', '', 'र', '', 'बु', 'नि', 'वा'],
          ['', '', '', '', 'ध', 'वा', 'र'],
          ['', '', 'गु', 'रु', 'वा', 'र', ''],
          ['मं', 'ग', 'ल', 'वा', 'र', '', '']
        ]
      }
    },
    {
      id: 'fruits',
      label: 'फलों के नाम',
      type: 'crossword',
      data: {
        words: [
          {
            word: 'सेब',
            marker: { x: 2, y: 2 },
            hint: 'apple',
            direction: 'down'
          },
          {
            word: 'नीलबदरी',
            marker: { x: 0, y: 3 },
            hint: 'blueberry',
            direction: 'across'
          },
          {
            word: 'अमरूद',
            marker: { x: 1, y: 4 },
            hint: 'guava',
            direction: 'down'
          },
          {
            word: 'आम',
            marker: { x: 0, y: 5 },
            hint: 'mango',
            direction: 'across'
          },
          {
            word: 'अनार',
            marker: { x: 3, y: 4 },
            hint: 'pomegranate',
            direction: 'across'
          },
          {
            word: 'अनानास',
            marker: { x: 3, y: 4 },
            hint: 'pineapple',
            direction: 'down'
          },
          {
            word: 'नाशपाती',
            marker: { x: 3, y: 5 },
            hint: 'pear',
            direction: 'across'
          },
          {
            word: 'सतालू',
            marker: { x: 3, y: 7 },
            hint: 'peach',
            direction: 'across'
          },
          {
            word: 'तरबूज',
            marker: { x: 3, y: 2 },
            hint: 'watermelon',
            direction: 'across'
          },
          {
            word: 'खजूर',
            marker: { x: 4, y: 0 },
            hint: 'dates',
            direction: 'down'
          },
          {
            word: 'बेर',
            marker: { x: 5, y: 3 },
            hint: 'jujube',
            direction: 'down'
          }
        ],
        title:
          'पहेली हल करें। संकेत देखने के लिए कृपया किसी कक्ष पर क्लिक करें.',
        lang: 'hi',
        table: [
          ['', '', '', '', 'ख', '', '', ''],
          ['', '', '', '', 'जू', '', '', ''],
          ['', '', 'से', 'त', 'र', 'बू', 'ज', ''],
          ['नी', 'ल', 'ब', 'द', 'री', 'बे', '', ''],
          ['', 'अ', '', 'अ', 'ना', 'र', '', ''],
          ['आ', 'म', '', 'ना', 'श', 'पा', 'ती', ''],
          ['', 'रू', '', 'ना', '', '', '', ''],
          ['', 'द', '', 'स', 'ता', 'लू', '', '']
        ]
      }
    },
    {
      id: 'colours',
      label: 'रंगों के नाम',
      type: 'crossword',
      data: {
        words: [
          {
            word: 'हरा',
            marker: { x: 1, y: 0 },
            hint: 'green',
            direction: 'down'
          },
          {
            word: 'भूरा',
            marker: { x: 0, y: 1 },
            hint: 'brown',
            direction: 'across'
          },
          {
            word: '\tगुलाबी',
            marker: { x: 0, y: 3 },
            hint: 'pink',
            direction: 'across'
          },
          {
            word: 'लाल',
            marker: { x: 1, y: 3 },
            hint: 'red',
            direction: 'down'
          },
          {
            word: 'पीला',
            marker: { x: 1, y: 2 },
            hint: 'yellow',
            direction: 'down'
          },
          {
            word: 'नारंगी',
            marker: { x: 2, y: 0 },
            hint: 'orange',
            direction: 'across'
          },
          {
            word: 'बैंगनी',
            marker: { x: 4, y: 1 },
            hint: 'purple',
            direction: 'down'
          },
          {
            word: 'सफेद',
            marker: { x: 3, y: 1 },
            hint: 'white',
            direction: 'down'
          }
        ],
        title:
          'पहेली हल करें। संकेत देखने के लिए कृपया किसी कक्ष पर क्लिक करें.',
        lang: 'hi',
        table: [
          ['', 'ह', 'ना', 'रं', 'गी'],
          ['भू', 'रा', '', 'स', 'बैं'],
          ['', 'पी', '', 'फे', 'ग'],
          ['गु', 'ला', 'बी', 'द', 'नी'],
          ['', 'ल', '', '', '']
        ]
      }
    },
    {
      id: 'animals',
      label: 'जानवरों के नाम',
      type: 'crossword',
      data: {
        words: [
          {
            word: 'गिलहरी',
            marker: { x: 1, y: 3 },
            hint: 'squirrel',
            direction: 'across'
          },
          {
            word: 'बकरी',
            marker: { x: 4, y: 1 },
            hint: 'goat',
            direction: 'down'
          },
          {
            word: 'कछुआ',
            marker: { x: 4, y: 2 },
            hint: 'tortoise',
            direction: 'across'
          },
          {
            word: 'सियार',
            marker: { x: 2, y: 0 },
            hint: 'jackal',
            direction: 'down'
          },
          {
            word: 'गिरगिट',
            marker: { x: 1, y: 3 },
            hint: 'chameleon',
            direction: 'down'
          },
          {
            word: 'खटमल',
            marker: { x: 0, y: 6 },
            hint: 'bug',
            direction: 'across'
          },
          {
            word: 'शेर',
            marker: { x: 0, y: 4 },
            hint: 'lion',
            direction: 'across'
          },
          {
            word: 'सूअर',
            marker: { x: 0, y: 2 },
            hint: 'pig',
            direction: 'across'
          }
        ],
        title:
          'पहेली हल करें। संकेत देखने के लिए कृपया किसी कक्ष पर क्लिक करें.',
        lang: 'hi',
        table: [
          ['', '', 'सि', '', '', '', ''],
          ['', '', 'या', '', 'ब', '', ''],
          ['सू', 'अ', 'र', '', 'क', 'छु', 'आ'],
          ['', 'गि', 'ल', 'ह', 'री', '', ''],
          ['शे', 'र', '', '', '', '', ''],
          ['', 'गि', '', '', '', '', ''],
          ['ख', 'ट', 'म', 'ल', '', '', '']
        ]
      }
    },
    {
      id: 'vegetables',
      label: 'सब्जियों के नाम',
      type: 'crossword',
      data: {
        words: [
          {
            word: 'शलगम',
            marker: { x: 0, y: 3 },
            hint: 'turnip',
            direction: 'across'
          },
          {
            word: 'बादाम',
            marker: { x: 3, y: 1 },
            hint: 'almond',
            direction: 'down'
          },
          {
            word: 'टमाटर',
            marker: { x: 4, y: 1 },
            hint: 'tomato',
            direction: 'down'
          },
          {
            word: 'मटर',
            marker: { x: 3, y: 3 },
            hint: 'greenpeas',
            direction: 'across'
          },
          {
            word: 'अदरक',
            marker: { x: 2, y: 4 },
            hint: 'ginger',
            direction: 'across'
          },
          {
            word: 'रखिया',
            marker: { x: 4, y: 4 },
            hint: 'ashgourd',
            direction: 'down'
          },
          {
            word: 'लहसुन',
            marker: { x: 1, y: 3 },
            hint: 'garlic',
            direction: 'down'
          },
          {
            word: 'तुलसी',
            marker: { x: 0, y: 1 },
            hint: 'tulsi',
            direction: 'across'
          },
          {
            word: 'पालक',
            marker: { x: 1, y: 0 },
            hint: 'spinach',
            direction: 'down'
          }
        ],
        title:
          'पहेली हल करें। संकेत देखने के लिए कृपया किसी कक्ष पर क्लिक करें.',
        lang: 'hi',
        table: [
          ['', 'पा', '', '', '', ''],
          ['तु', 'ल', 'सी', 'बा', 'ट', ''],
          ['', 'क', '', 'दा', 'मा', ''],
          ['श', 'ल', 'ग', 'म', 'ट', 'र'],
          ['', 'ह', 'अ', 'द', 'र', 'क'],
          ['', 'सु', '', '', 'खि', ''],
          ['', 'न', '', '', 'या', '']
        ]
      }
    },
    {
      id: '1695095096831',
      type: 'crossword',
      label: 'मकान',
      authored: true,
      data: {
        title: 'Solve the crossword. Please click on a cell to view the hint.',
        words: [
          {
            word: 'दरवाजा',
            marker: { x: 1, y: 1 },
            hint: 'door',
            direction: 'across'
          },
          {
            word: 'जाल',
            marker: { x: 4, y: 1 },
            hint: 'net',
            direction: 'down'
          },
          {
            word: 'रस्सी',
            marker: { x: 2, y: 1 },
            hint: 'rope',
            direction: 'down'
          },
          {
            word: 'गेंद',
            marker: { x: 0, y: 1 },
            hint: 'ball',
            direction: 'across'
          },
          {
            word: 'दीवार घड़ी',
            marker: { x: 3, y: 0 },
            hint: 'clock',
            direction: 'down'
          },
          {
            word: 'घड़ी',
            marker: { x: 3, y: 3 },
            hint: 'watch',
            direction: 'across'
          },
          {
            word: 'चायदानी',
            marker: { x: 0, y: 5 },
            hint: 'tea pot',
            direction: 'across'
          },
          {
            word: 'मोमबत्ती',
            marker: { x: 5, y: 0 },
            hint: 'candle',
            direction: 'down'
          }
        ],
        table: [
          ['', '', '', 'दी', '', 'मो'],
          ['गें', 'द', 'र', 'वा', 'जा', 'म'],
          ['', '', 'स्सी', 'र', 'ल', 'ब'],
          ['', '', '', 'घ', 'ड़ी', 'त्ती'],
          ['', '', '', 'ड़ी', '', ''],
          ['चा', 'य', 'दा', 'नी', '', '']
        ],
        lang: 'hi'
      }
    },
    {
      id: '1695095558148',
      type: 'crossword',
      label: 'रसोईघर',
      authored: true,
      data: {
        title: 'Solve the crossword. Please click on a cell to view the hint.',
        words: [
          {
            word: 'रसोईघर',
            marker: { x: 1, y: 2 },
            hint: 'kitchen',
            direction: 'across'
          },
          {
            word: 'मक्खन',
            marker: { x: 2, y: 4 },
            hint: 'butter',
            direction: 'across'
          },
          {
            word: 'मटका',
            marker: { x: 2, y: 4 },
            hint: 'pot',
            direction: 'down'
          },
          {
            word: 'कड़ाही',
            marker: { x: 0, y: 0 },
            hint: 'pan',
            direction: 'down'
          },
          {
            word: 'रस',
            marker: { x: 5, y: 2 },
            hint: 'juice',
            direction: 'down'
          },
          {
            word: 'मांस',
            marker: { x: 4, y: 3 },
            hint: 'meat',
            direction: 'across'
          },
          {
            word: 'कटोरा',
            marker: { x: 0, y: 0 },
            hint: 'bowl',
            direction: 'across'
          },
          {
            word: 'करछुल',
            marker: { x: 1, y: 1 },
            hint: 'ladle',
            direction: 'down'
          },
          {
            word: 'दाल',
            marker: { x: 0, y: 4 },
            hint: 'lentils',
            direction: 'across'
          },
          {
            word: 'आटा',
            marker: { x: 6, y: 0 },
            hint: 'flour',
            direction: 'down'
          },
          {
            word: 'कांटा',
            marker: { x: 5, y: 1 },
            hint: 'fork',
            direction: 'across'
          }
        ],
        table: [
          ['क', 'टो', 'रा', '', '', '', 'आ'],
          ['ड़ा', 'क', '', '', '', 'कां', 'टा'],
          ['ही', 'र', 'सो', 'ई', 'घ', 'र', ''],
          ['', 'छु', '', '', 'मां', 'स', ''],
          ['दा', 'ल', 'म', 'क्ख', 'न', '', ''],
          ['', '', 'ट', '', '', '', ''],
          ['', '', 'का', '', '', '', '']
        ],
        lang: 'hi'
      }
    },
    {
      id: '1695095872359',
      type: 'crossword',
      label: 'नौकरी के लिए उपकरण',
      authored: true,
      data: {
        title: 'Solve the crossword. Please click on a cell to view the hint.',
        words: [
          {
            word: 'विभाजक',
            marker: { x: 0, y: 2 },
            hint: 'divider',
            direction: 'across'
          },
          {
            word: 'पेंचकस',
            marker: { x: 3, y: 0 },
            hint: 'screwdriver',
            direction: 'down'
          },
          {
            word: 'पेंच',
            marker: { x: 2, y: 1 },
            hint: 'screw',
            direction: 'across'
          },
          {
            word: 'प्‍लास',
            marker: { x: 2, y: 3 },
            hint: 'plier',
            direction: 'across'
          },
          {
            word: 'करनी',
            marker: { x: 3, y: 2 },
            hint: 'trowel',
            direction: 'across'
          },
          {
            word: 'परखनली',
            marker: { x: 4, y: 1 },
            hint: 'test tube',
            direction: 'down'
          },
          {
            word: 'दूरबीन',
            marker: { x: 1, y: 4 },
            hint: 'telescope',
            direction: 'across'
          },
          {
            word: 'कुदाल',
            marker: { x: 5, y: 3 },
            hint: 'spade',
            direction: 'across'
          },
          {
            word: 'कुल्हाडी',
            marker: { x: 5, y: 3 },
            hint: 'axe',
            direction: 'down'
          },
          {
            word: 'हल',
            marker: { x: 7, y: 2 },
            hint: 'plough',
            direction: 'down'
          }
        ],
        table: [
          ['', '', '', 'पें', '', '', '', ''],
          ['', '', 'पें', 'च', 'प', '', '', ''],
          ['वि', 'भा', 'ज', 'क', 'र', 'नी', '', 'ह'],
          ['', '', 'प्‍ला', 'स', 'ख', 'कु', 'दा', 'ल'],
          ['', 'दू', 'र', 'बी', 'न', 'ल्हा', '', ''],
          ['', '', '', '', 'ली', 'डी', '', '']
        ],
        lang: 'hi'
      }
    },
    {
      id: '1695096305252',
      type: 'crossword',
      label: 'पक्षी',
      authored: true,
      data: {
        title: 'Solve the crossword. Please click on a cell to view the hint.',
        words: [
          {
            word: 'नीलकंठ',
            marker: { x: 0, y: 2 },
            hint: 'kingfisher',
            direction: 'across'
          },
          {
            word: 'मराल',
            marker: { x: 1, y: 0 },
            hint: 'flamingo',
            direction: 'down'
          },
          {
            word: 'कठफोड़वा',
            marker: { x: 3, y: 1 },
            hint: 'woodpecker',
            direction: 'down'
          },
          {
            word: 'मुर्गा',
            marker: { x: 4, y: 3 },
            hint: 'rooster',
            direction: 'across'
          },
          {
            word: 'शुतरमुर्ग',
            marker: { x: 4, y: 0 },
            hint: 'ostrich',
            direction: 'down'
          },
          {
            word: 'बतख़',
            marker: { x: 0, y: 4 },
            hint: 'duck',
            direction: 'across'
          },
          {
            word: 'कोयल',
            marker: { x: 5, y: 0 },
            hint: 'koel',
            direction: 'down'
          }
        ],
        table: [
          ['', 'म', '', '', 'शु', 'को'],
          ['', 'रा', '', 'क', 'त', 'य'],
          ['नी', 'ल', 'कं', 'ठ', 'र', 'ल'],
          ['', '', '', 'फो', 'मु', 'र्गा'],
          ['ब', 'त', 'ख़', 'ड़', 'र्ग', ''],
          ['', '', '', 'वा', '', '']
        ],
        lang: 'hi'
      }
    },
    {
      id: 'jobs',
      label: 'नौकरियां',
      type: 'crossword',
      data: {
        words: [
          {
            word: 'कुम्हार',
            marker: { x: 1, y: 0 },
            hint: 'potter',
            direction: 'down'
          },
          {
            word: 'सुनार',
            marker: { x: 2, y: 0 },
            hint: 'goldsmith',
            direction: 'down'
          },
          {
            word: 'मछुआरा',
            marker: { x: 0, y: 4 },
            hint: 'fisherman',
            direction: 'across'
          },
          {
            word: 'दाई',
            marker: { x: 2, y: 3 },
            hint: 'nurse',
            direction: 'across'
          },
          {
            word: 'बढ़ई',
            marker: { x: 3, y: 1 },
            hint: 'carpenter',
            direction: 'down'
          },
          {
            word: 'डाकिया',
            marker: { x: 3, y: 0 },
            hint: 'postman',
            direction: 'across'
          }
        ],
        title:
          'पहेली हल करें। संकेत देखने के लिए कृपया किसी कक्ष पर क्लिक करें.',
        lang: 'hi',
        table: [
          ['', 'कु', 'सु', 'डा', 'कि', 'या'],
          ['', 'म्हा', 'ना', 'ब', '', ''],
          ['', 'र', '', 'ढ़', '', ''],
          ['', '', 'दा', 'ई', '', ''],
          ['म', 'छु', 'आ', 'रा', '', '']
        ]
      }
    },
    {
      id: 'animals-2',
      type: 'crossword',
      label: 'पशु वर्ग पहेली',
      data: {
        title:
          'पहेली हल करें। संकेत देखने के लिए कृपया किसी कक्ष पर क्लिक करें.',
        words: [
          {
            word: 'शेर ',
            marker: {
              x: 0,
              y: 0
            },
            hint: 'जंगल का राजा ',
            direction: 'down'
          },
          {
            word: 'चीता',
            marker: {
              x: 1,
              y: 2
            },
            hint: 'सबसे तेज दौड़ने वाला जानवर ',
            direction: 'across'
          },
          {
            word: 'कुत्ता',
            marker: {
              x: 5,
              y: 0
            },
            hint: 'भौंकने वाला जानवर ',
            direction: 'down'
          },
          {
            word: 'लोमड़ी',
            marker: {
              x: 0,
              y: 4
            },
            hint: 'सबसे चालाक जानवर',
            direction: 'across'
          },
          {
            word: 'मछली',
            marker: {
              x: 4,
              y: 3
            },
            hint: 'जल की रानी',
            direction: 'down'
          },
          {
            word: 'शुतुरमुर्ग',
            marker: {
              x: 3,
              y: 0
            },
            hint: 'सबसे बड़ा अंडा देने वाला पक्षी ',
            direction: 'down'
          }
        ],
        table: [
          ['शे', '', '', 'शु', '', 'कु'],
          ['र', '', '', 'तु', '', 'त्ता'],
          ['', 'ची', 'ता', 'र', '', ''],
          ['', '', '', 'मु', 'म', ''],
          ['लो', 'मड़ी', '', 'र्ग', 'छ', ''],
          ['', '', '', '', 'ली', '']
        ],
        lang: 'hi'
      }
    },
    {
      id: 'fruits-2',
      type: 'crossword',
      label: 'फल वर्ग पहेली',
      data: {
        title:
          'पहेली हल करें। संकेत देखने के लिए कृपया किसी कक्ष पर क्लिक करें.',
        words: [
          {
            word: 'आम ',
            marker: {
              x: 0,
              y: 0
            },
            hint: ' फलों का राजा',
            direction: 'across'
          },
          {
            word: 'अनार ',
            marker: {
              x: 5,
              y: 0
            },
            hint: 'खून की तरह लाल बीज वाला फल',
            direction: 'down'
          },
          {
            word: 'तरबूज',
            marker: {
              x: 0,
              y: 2
            },
            hint: 'फल जिसमें काले काले बीज होते है',
            direction: 'down'
          },
          {
            word: 'गन्ना ',
            marker: {
              x: 2,
              y: 2
            },
            hint: 'फल जिससे चीनी बनती है ',
            direction: 'down'
          },
          {
            word: 'अंगूर',
            marker: {
              x: 3,
              y: 5
            },
            hint: 'खट्टा मीठा पौष्टिक फल',
            direction: 'across'
          },
          {
            word: 'केला ',
            marker: {
              x: 1,
              y: 1
            },
            hint: 'फल जिसमे कभी कीड़ा नहीं लगता',
            direction: 'across'
          }
        ],
        table: [
          ['आ', 'म', '', '', '', 'अ'],
          ['', 'के', 'ला', '', '', 'ना'],
          ['त', '', 'ग', '', '', 'र'],
          ['र', '', 'न्ना', '', '', ''],
          ['बू', '', '', '', '', ''],
          ['ज', '', '', 'अं', 'गू', 'र']
        ],
        lang: 'hi'
      }
    },
    {
      id: 'capitals',
      type: 'crossword',
      label: 'राजधानी वर्ग पहेली',
      data: {
        title:
          'पहेली हल करें। संकेत देखने के लिए कृपया किसी कक्ष पर क्लिक करें.',
        words: [
          {
            word: 'दिल्ली',
            marker: {
              x: 0,
              y: 0
            },
            hint: 'भारत की राजधानी ',
            direction: 'down'
          },
          {
            word: 'लखनऊ',
            marker: {
              x: 2,
              y: 0
            },
            hint: 'उत्तर प्रदेश की राजधानी ',
            direction: 'across'
          },
          {
            word: 'जयपुर ',
            marker: {
              x: 5,
              y: 2
            },
            hint: 'राजस्थान की राजधानी ',
            direction: 'down'
          },
          {
            word: 'कोलकाता ',
            marker: {
              x: 0,
              y: 4
            },
            hint: 'पश्चिम बंगाल की राजधानी ',
            direction: 'across'
          },
          {
            word: 'हैदराबाद ',
            marker: {
              x: 4,
              y: 1
            },
            hint: 'आंध्र प्रदेश की राजधानी ',
            direction: 'down'
          },
          {
            word: 'मुंबई',
            marker: {
              x: 2,
              y: 1
            },
            hint: 'महाराष्ट्र की राजधानी ',
            direction: 'down'
          }
        ],
        table: [
          ['दि', '', 'ल', 'ख', 'न', 'ऊ'],
          ['ल्ली', '', 'मुं', '', 'है', ''],
          ['', '', 'ब', '', 'द', 'ज'],
          ['', '', 'ई', '', 'रा', 'य'],
          ['को', 'ल', 'का', 'ता', 'बा', 'पु'],
          ['', '', '', '', 'द', 'र']
        ],
        lang: 'hi'
      }
    },
    {
      id: 'capitals-2',
      type: 'crossword',
      label: 'राजधानी - 2  वर्ग पहेली',
      data: {
        title:
          'पहेली हल करें। संकेत देखने के लिए कृपया किसी कक्ष पर क्लिक करें.',
        words: [
          {
            word: 'भोपाल ',
            marker: {
              x: 0,
              y: 0
            },
            hint: 'मध्य प्रदेश की राजधानी ',
            direction: 'across'
          },
          {
            word: 'पटना ',
            marker: {
              x: 5,
              y: 0
            },
            hint: 'बिहार की राजधानी ',
            direction: 'down'
          },
          {
            word: 'इंफाल ',
            marker: {
              x: 0,
              y: 2
            },
            hint: 'मणिपुर की राजधानी ',
            direction: 'across'
          },
          {
            word: 'देहरादून ',
            marker: {
              x: 3,
              y: 1
            },
            hint: 'उत्तराखंड की राजधानी ',
            direction: 'down'
          },
          {
            word: 'आइजोल ',
            marker: {
              x: 4,
              y: 2
            },
            hint: ' मिजोरम की राजधानी ',
            direction: 'down'
          },
          {
            word: 'पणजी ',
            marker: {
              x: 1,
              y: 3
            },
            hint: 'गोवा की राजधानी ',
            direction: 'down'
          }
        ],
        table: [
          ['भो', 'पा', 'ल', '', '', 'प'],
          ['', '', '', 'दे', '', 'ट'],
          ['इं', 'फा', 'ल', 'ह', 'आ', 'ना'],
          ['', 'प', '', 'रा', 'इ', ''],
          ['', 'ण', '', 'दू', 'जो', ''],
          ['', 'जी', '', 'न', 'ल', '']
        ],
        lang: 'hi'
      }
    },
    {
      id: 'historical-places',
      type: 'crossword',
      label: 'स्मारक वर्ग पहेली',
      data: {
        title:
          'पहेली हल करें। संकेत देखने के लिए कृपया किसी कक्ष पर क्लिक करें.',
        words: [
          {
            word: 'आगरा ',
            marker: {
              x: 0,
              y: 0
            },
            hint: 'ताजमहल कहाँ स्थित है ',
            direction: 'across'
          },
          {
            word: 'दिल्ली ',
            marker: {
              x: 5,
              y: 0
            },
            hint: 'लाल किला कहाँ स्थित है ',
            direction: 'down'
          },
          {
            word: 'हैदराबाद',
            marker: {
              x: 0,
              y: 3
            },
            hint: 'चारमीनार कहाँ स्थित है',
            direction: 'across'
          },
          {
            word: 'अमृतसर ',
            marker: {
              x: 1,
              y: 5
            },
            hint: 'स्वर्ण मंदिर कहाँ स्थित है ',
            direction: 'across'
          },
          {
            word: 'कोलकाता ',
            marker: {
              x: 2,
              y: 4
            },
            hint: 'विक्टोरिया मेमोरियल कहाँ स्थित है ',
            direction: 'across'
          },
          {
            word: 'मुंबई',
            marker: {
              x: 1,
              y: 1
            },
            hint: 'गेटवे ऑफ़ इंडिया कहाँ स्थित है',
            direction: 'across'
          }
        ],
        table: [
          ['आ', 'ग', 'रा', '', '', 'दि'],
          ['', 'मुं', 'ब', 'ई', '', 'ल्ली'],
          ['', '', '', '', '', ''],
          ['है', 'द', 'रा', 'बा', 'द', ''],
          ['', '', 'को', 'ल', 'का', 'ता'],
          ['', 'अ', 'मृ', 'त', 'स', 'र']
        ],
        lang: 'hi'
      }
    },
    {
      id: '1695014750378',
      type: 'crossword',
      label: 'शब्दार्थ',
      authored: true,
      data: {
        title: 'Solve the crossword. Please click on a cell to view the hint.',
        words: [
          {
            word: 'अभिलाषा',
            marker: { x: 0, y: 1 },
            hint: 'इच्छा',
            direction: 'across'
          },
          {
            word: 'अभिराम',
            marker: { x: 1, y: 0 },
            hint: 'सुंदर',
            direction: 'down'
          },
          {
            word: 'असाध्य',
            marker: { x: 0, y: 1 },
            hint: 'न ठीक होनेवाला',
            direction: 'down'
          },
          {
            word: 'अवधि',
            marker: { x: 1, y: 0 },
            hint: 'समय',
            direction: 'across'
          },
          {
            word: 'महिमा',
            marker: { x: 1, y: 3 },
            hint: 'महता',
            direction: 'across'
          },
          {
            word: 'राय',
            marker: { x: 1, y: 2 },
            hint: 'सलाह',
            direction: 'across'
          },
          {
            word: 'आवश्यकता',
            marker: { x: 2, y: 4 },
            hint: 'जरूरत',
            direction: 'across'
          },
          {
            word: 'कलसी',
            marker: { x: 5, y: 4 },
            hint: 'छोटा घड़ा',
            direction: 'down'
          },
          {
            word: 'लम्हा',
            marker: { x: 5, y: 5 },
            hint: 'पल',
            direction: 'across'
          },
          {
            word: 'निर्भीक',
            marker: { x: 5, y: 2 },
            hint: 'निडर',
            direction: 'down'
          }
        ],
        table: [
          ['', 'अ', 'व', 'धि', '', '', ''],
          ['अ', 'भि', 'ला', 'षा', '', '', ''],
          ['सा', 'रा', 'य', '', '', 'नि', ''],
          ['ध्य', 'म', 'हि', 'मा', '', 'र्भी', ''],
          ['', '', 'आ', 'व', 'श्य', 'क', 'ता'],
          ['', '', '', '', '', 'ल', 'म्हा'],
          ['', '', '', '', '', 'सी', '']
        ],
        lang: 'hi'
      }
    },
    {
      id: '1695015351834',
      type: 'crossword',
      label: 'विलोम शब्द',
      authored: true,
      data: {
        title: 'Solve the crossword. Please click on a cell to view the hint.',
        words: [
          {
            word: 'उपकार',
            marker: { x: 0, y: 1 },
            hint: 'अपकार',
            direction: 'across'
          },
          {
            word: 'अकाम',
            marker: { x: 2, y: 0 },
            hint: 'सुकाम',
            direction: 'down'
          },
          {
            word: 'पराया',
            marker: { x: 1, y: 1 },
            hint: 'अपना',
            direction: 'down'
          },
          {
            word: 'रक्षक',
            marker: { x: 3, y: 1 },
            hint: 'भक्षक',
            direction: 'across'
          },
          {
            word: 'उष्ण',
            marker: { x: 0, y: 1 },
            hint: 'शीत',
            direction: 'down'
          },
          {
            word: 'साक्षर',
            marker: { x: 4, y: 0 },
            hint: 'निरक्षर',
            direction: 'down'
          },
          {
            word: 'मर्त्य',
            marker: { x: 2, y: 2 },
            hint: 'अमर',
            direction: 'down'
          },
          {
            word: 'कठिन',
            marker: { x: 5, y: 1 },
            hint: 'सरल',
            direction: 'across'
          },
          {
            word: 'कठोर',
            marker: { x: 5, y: 1 },
            hint: 'कोमल',
            direction: 'down'
          },
          {
            word: 'अमीर',
            marker: { x: 3, y: 3 },
            hint: 'गरीब',
            direction: 'across'
          },
          {
            word: 'कठिनाई',
            marker: { x: 6, y: 0 },
            hint: 'सरलता',
            direction: 'down'
          },
          {
            word: 'नारी',
            marker: { x: 6, y: 2 },
            hint: 'नर',
            direction: 'across'
          },
          {
            word: 'अच्छा',
            marker: { x: 3, y: 3 },
            hint: 'बुरा',
            direction: 'down'
          },
          {
            word: 'उदार',
            marker: { x: 2, y: 5 },
            hint: 'अनुदार',
            direction: 'across'
          }
        ],
        table: [
          ['', '', 'अ', '', 'सा', '', 'क', ''],
          ['उ', 'प', 'का', 'र', 'क्ष', 'क', 'ठि', 'न'],
          ['ष्ण', 'रा', 'म', '', 'र', 'ठो', 'ना', 'री'],
          ['', 'या', 'र्त्', 'अ', 'मी', 'र', 'ई', ''],
          ['', '', 'त्य', 'च्छा', '', '', '', ''],
          ['', '', 'उ', 'दा', 'र', '', '', ''],
          ['', '', '', '', '', '', '', '']
        ],
        lang: 'hi'
      }
    }
  ]
};
