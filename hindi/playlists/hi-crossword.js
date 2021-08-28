export default {
  label: 'वर्ग पहेली',
  id: 'hi-crossword',
  img: 'crossword',
  list: [
    {
      id: '100',
      type: 'crossword',
      label: 'Animal Crossword',
      data: {
        title: 'Solve the crossword. Please click on a cell to view the hint.',
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
            hint: 'भोकने वाला जानवर ',
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
      id: '200',
      type: 'crossword',
      label: 'Birds Crossword',
      data: {
        title: 'Solve the crossword. Please click on a cell to view the hint.',
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
      id: '300',
      type: 'crossword',
      label: 'Fruits Crossword',
      data: {
        title: 'Solve the crossword. Please click on a cell to view the hint.',
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
      id: '400',
      type: 'crossword',
      label: 'Capital Crossword',
      data: {
        title: 'Solve the crossword. Please click on a cell to view the hint.',
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
      id: '500',
      type: 'crossword',
      label: 'Capital 2 Crossword',
      data: {
        title: 'Solve the crossword. Please click on a cell to view the hint.',
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
      id: '600',
      type: 'crossword',
      label: 'Monuments Crossword',
      data: {
        title: 'Solve the crossword. Please click on a cell to view the hint.',
        words: [
          {
            word: 'आगरा ',
            marker: {
              x: 0,
              y: 0
            },
            hint: 'ताजमहल कहा स्थित है ',
            direction: 'across'
          },
          {
            word: 'दिल्ली ',
            marker: {
              x: 5,
              y: 0
            },
            hint: 'लाल किला कहा स्थित है ',
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
            hint: 'स्वर्ण मंदिर कहा स्थित है ',
            direction: 'across'
          },
          {
            word: 'कोलकाता ',
            marker: {
              x: 2,
              y: 4
            },
            hint: 'विक्टोरिया मेमोरियल कहा स्थित है ',
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
