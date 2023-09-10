export default {
  label: 'वर्ग पहेली',
  lockAfter: 3,
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
            word: 'शुक्रवार ',
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
          ['र', 'वि', 'वा', 'र', '', 'श', 'क्'],
          ['', '', 'र', '', 'बु', 'नि', 'र'],
          ['', '', '', '', 'ध', 'वा', 'वा'],
          ['', '', 'गु', 'रु', 'वा', 'र', 'र'],
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
      id: 'house',
      label: 'मकान',
      type: 'crossword',
      data: {
        words: [
          {
            word: 'लड़का',
            marker: { x: 2, y: 1 },
            hint: 'boy',
            direction: 'across'
          },
          {
            word: 'लड़की',
            marker: { x: 3, y: 0 },
            hint: 'girl',
            direction: 'down'
          },
          {
            word: 'मकान',
            marker: { x: 4, y: 0 },
            hint: 'house',
            direction: 'down'
          },
          {
            word: 'अलमारी',
            marker: { x: 2, y: 0 },
            hint: 'shelf',
            direction: 'down'
          },
          {
            word: 'बिस्तर',
            marker: { x: 1, y: 1 },
            hint: 'bed',
            direction: 'down'
          },
          {
            word: 'छतरी',
            marker: { x: 0, y: 3 },
            hint: 'umbrella',
            direction: 'across'
          },
          {
            word: 'औरत',
            marker: { x: 0, y: 4 },
            hint: 'woman',
            direction: 'across'
          },
          {
            word: 'तकिया',
            marker: { x: 2, y: 4 },
            hint: 'pillow',
            direction: 'across'
          }
        ],
        title:
          'पहेली हल करें। संकेत देखने के लिए कृपया किसी कक्ष पर क्लिक करें.',
        lang: 'hi',
        table: [
          ['', '', 'अ', 'ल', 'म'],
          ['', 'बि', 'ल', 'ड़', 'का'],
          ['', 'स्', 'मा', 'की', 'न'],
          ['छ', 'त', 'री', '', ''],
          ['औ', 'र', 'त', 'कि', 'या']
        ]
      }
    },
    {
      id: 'kitchen',
      label: 'रसोईघर',
      type: 'crossword',
      data: {
        words: [
          {
            word: 'मटका',
            marker: { x: 0, y: 0 },
            hint: 'pot',
            direction: 'across'
          },
          {
            word: 'मक्खन',
            marker: { x: 0, y: 0 },
            hint: 'butter',
            direction: 'down'
          },
          {
            word: 'नल',
            marker: { x: 0, y: 3 },
            hint: 'tap',
            direction: 'across'
          },
          {
            word: 'चावल',
            marker: { x: 1, y: 1 },
            hint: 'rice',
            direction: 'down'
          },
          {
            word: 'नमक',
            marker: { x: 2, y: 1 },
            hint: 'salt',
            direction: 'across'
          },
          {
            word: 'कटोरा',
            marker: { x: 4, y: 1 },
            hint: 'bowl',
            direction: 'down'
          },
          {
            word: 'टिकीया',
            marker: { x: 0, y: 4 },
            hint: 'lollipop',
            direction: 'across'
          }
        ],
        title:
          'पहेली हल करें। संकेत देखने के लिए कृपया किसी कक्ष पर क्लिक करें.',
        lang: 'hi',
        table: [
          ['म', 'ट', 'का', '', ''],
          ['क्', 'चा', 'न', 'म', 'क'],
          ['ख', 'व', '', '', 'टो'],
          ['न', 'ल', '', '', 'रा'],
          ['टि', 'की', 'या', '', '']
        ]
      }
    },
    {
      id: 'tools',
      label: 'उपकरण',
      type: 'crossword',
      data: {
        words: [
          {
            word: 'तबला',
            marker: { x: 0, y: 3 },
            hint: 'tabla',
            direction: 'across'
          },
          {
            word: 'रबर ',
            marker: { x: 1, y: 2 },
            hint: 'rubber',
            direction: 'down'
          },
          {
            word: 'कुठला',
            marker: { x: 2, y: 1 },
            hint: 'oven',
            direction: 'down'
          },
          {
            word: 'कुल्हाडी',
            marker: { x: 2, y: 1 },
            hint: 'axe',
            direction: 'across'
          },
          {
            word: ' लोहाआरी',
            marker: { x: 4, y: 0 },
            hint: 'hacksaw',
            direction: 'down'
          }
        ],
        title:
          'पहेली हल करें। संकेत देखने के लिए कृपया किसी कक्ष पर क्लिक करें.',
        lang: 'hi',
        table: [
          ['', '', '', '', 'लो', ''],
          ['', '', 'कु', 'ल्', 'हा', 'डी'],
          ['', 'र', 'ठ', '', 'आ', ''],
          ['त', 'ब', 'ला', '', 'री', ''],
          ['', 'र', '', '', '', '']
        ]
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
            word: 'लोहार',
            marker: { x: 0, y: 2 },
            hint: 'blacksmith',
            direction: 'across'
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
          ['', 'म्', 'ना', 'ब', '', ''],
          ['लो', 'हा', 'र', 'ढ़', '', ''],
          ['', 'र', 'दा', 'ई', '', ''],
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
          ['र', '', '', 'तु', '', 'त्'],
          ['', 'ची', 'ता', 'र', '', 'ता'],
          ['', '', '', 'मु', 'म', ''],
          ['लो', 'मड़ी', '', 'र्', 'छ', ''],
          ['', '', '', 'ग', 'ली', '']
        ],
        lang: 'hi'
      }
    },
    {
      id: 'birds',
      type: 'crossword',
      label: 'पक्षी वर्ग पहेली',
      data: {
        title:
          'पहेली हल करें। संकेत देखने के लिए कृपया किसी कक्ष पर क्लिक करें.',
        words: [
          {
            word: 'कौआ ',
            marker: {
              x: 1,
              y: 0
            },
            hint: 'कर्कश बोलने वाला काला पक्षी',
            direction: 'across'
          },
          {
            word: 'कोयल ',
            marker: {
              x: 5,
              y: 0
            },
            hint: 'मीठा बोलने वाली काली पक्षी ',
            direction: 'down'
          },
          {
            word: 'तोता',
            marker: {
              x: 0,
              y: 2
            },
            hint: 'आदमी की तरह बोलने वाला पक्षी',
            direction: 'across'
          },
          {
            word: 'मोर ',
            marker: {
              x: 3,
              y: 2
            },
            hint: 'भारत का राष्ट्रीय पक्षी ',
            direction: 'down'
          },
          {
            word: 'उल्लू ',
            marker: {
              x: 0,
              y: 4
            },
            hint: 'पक्षी जिसे रात में दिखता है',
            direction: 'across'
          },
          {
            word: 'बाज',
            marker: {
              x: 4,
              y: 4
            },
            hint: 'झपट्टा मारने वाला पक्षी ',
            direction: 'down'
          }
        ],
        table: [
          ['', 'कौ', 'आ', '', '', 'को'],
          ['', '', '', '', '', 'य'],
          ['तो', 'ता', '', 'मो', '', 'ल'],
          ['', '', '', 'र', '', ''],
          ['उ', 'ल्', 'लू', '', 'बा', ''],
          ['', '', '', '', 'ज', '']
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
          ['र', '', 'न्', '', '', ''],
          ['बू', '', 'ना', '', '', ''],
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
          ['ल्', '', 'मुं', '', 'है', ''],
          ['ली', '', 'ब', '', 'द', 'ज'],
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
          ['', 'मुं', 'ब', 'ई', '', 'ल्'],
          ['', '', '', '', '', 'ली'],
          ['है', 'द', 'रा', 'बा', 'द', ''],
          ['', '', 'को', 'ल', 'का', 'ता'],
          ['', 'अ', 'मृ', 'त', 'स', 'र']
        ],
        lang: 'hi'
      }
    }
  ]
};
