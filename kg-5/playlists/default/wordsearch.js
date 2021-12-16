export default {
  label: 'Word Search',
  id: 'wordsearch',
  img: 'wordsearch',
  list: [
    {
      type: 'wordsearch',
      id: 'days-of-week',
      label: 'Days of the Week',
      data: {
        words: [
          { word: 'saturday', marker: [0, 0, 7, 0] },
          { word: 'sunday', marker: [0, 0, 0, 5] },
          { word: 'monday', marker: [1, 2, 6, 2] },
          { word: 'thursday', marker: [1, 6, 8, 6] },
          { word: 'wednesday', marker: [0, 7, 8, 7] },
          { word: 'friday', marker: [2, 3, 7, 3] },
          { word: 'tuesday', marker: [8, 0, 8, 6] }
        ],
        showWords: false,
        lang: 'en',
        desc: 'Find the days of the week.',
        table: `SATURDAYT
      UEHQSXBOU
      NMONDAYVE
      DDFRIDAYS
      AGZHXJJFD
      YAGPMKQGA
      DTHURSDAY
      WEDNESDAY`
      }
    },
    {
      type: 'wordsearch',
      id: 'months-of-year',
      label: 'Months of the year',
      data: {
        words: [
          { word: 'February', marker: [0, 9, 7, 9] },
          { word: 'September ', marker: [3, 1, 3, 9] },
          { word: 'January ', marker: [7, 3, 7, 9] },
          { word: 'December ', marker: [6, 2, 6, 9] },
          { word: 'June', marker: [4, 1, 7, 1] },
          { word: 'July', marker: [4, 1, 4, 4] },
          { word: 'November ', marker: [0, 0, 7, 0] },
          { word: 'October ', marker: [1, 0, 1, 6] },
          { word: 'August', marker: [5, 2, 5, 7] },
          { word: 'April', marker: [0, 2, 0, 6] },
          { word: 'March', marker: [2, 1, 2, 5] },
          { word: 'May', marker: [0, 8, 2, 8] }
        ],
        showWords: false,
        lang: 'en',
        desc: 'Find the months of the year.',
        table: `NOVEMBER
        DCMSJUNE
        ATAEUADO
        PORPLUEJ
        RBCTYGCA
        IEHEYUEN
        LROMUSMU
        XDZBETBA
        MAYEUXER
        FEBRUARY`
      }
    },
    {
      type: 'wordsearch',
      id: 'planets',
      label: 'Planets',
      data: {
        words: [
          { word: 'mercury', marker: [1, 0, 7, 6] },
          { word: 'neptune', marker: [1, 1, 7, 1] },
          { word: 'venus', marker: [7, 0, 7, 4] },
          { word: 'earth', marker: [0, 3, 4, 7] },
          { word: 'mars', marker: [0, 4, 3, 4] },
          { word: 'jupiter', marker: [6, 2, 0, 8] },
          { word: 'uranus', marker: [2, 8, 7, 8] },
          { word: 'saturn', marker: [8, 1, 8, 6] }
        ],
        showWords: false,
        lang: 'en',
        desc: 'Identify all planets in solar system',
        table: `QMFMCPVVN
      FNEPTUNES
      GNBRMSJNA
      ENOTCUGUT
      MARSPUDSU
      TPRIUURXR
      CRTTHUOYN
      TESYHTNSL
      RAURANUSS`
      }
    },
    {
      type: 'wordsearch',
      id: 'animals',
      label: 'Animals',
      data: {
        words: [
          { word: 'tiger', marker: [3, 3, 7, 7] },
          { word: 'lion', marker: [3, 4, 6, 4] },
          { word: 'goat', marker: [0, 3, 3, 3] },
          { word: 'monkey', marker: [2, 6, 7, 6] },
          { word: 'dog', marker: [5, 3, 5, 5] },
          { word: 'cat', marker: [3, 1, 3, 3] },
          { word: 'zebra', marker: [0, 5, 4, 9] },
          { word: 'cow', marker: [5, 0, 7, 2] },
          { word: 'panda', marker: [0, 9, 4, 9] },
          { word: 'deer', marker: [1, 4, 1, 7] },
          { word: 'bear', marker: [2, 1, 2, 4] },
          { word: 'wolf', marker: [1, 0, 4, 0] }
        ],
        showWords: true,
        lang: 'en',
        desc: 'Find the animals given at the bottom.',
        table: `LWOLFCQL
      CCBCYSOC
      VFEAHJXW
      GOATWDNL
      RDRLIONH
      ZEFMCGLZ
      MEMONKEY
      ZRBQUMCR
      HJDRMLGU
      PANDAEHX`
      }
    },
    {
      id: 'fruits',
      type: 'wordsearch',
      label: 'Fruits',
      data: {
        title: 'Find the given words from the table.',
        words: [
          {
            word: ['T', 'O', 'M', 'A', 'T', 'O'],
            marker: [1, 0, 6, 0]
          },
          {
            word: ['O', 'R', 'A', 'N', 'G', 'E'],
            marker: [2, 0, 2, 5]
          },
          {
            word: ['A', 'P', 'P', 'L', 'E'],
            marker: [2, 2, 6, 2]
          },
          {
            word: ['G', 'R', 'A', 'P', 'E', 'S'],
            marker: [2, 4, 7, 4]
          },
          {
            word: ['B', 'A', 'N', 'A', 'N', 'A'],
            marker: [1, 1, 6, 6]
          },
          {
            word: ['G', 'U', 'A', 'V', 'A'],
            marker: [2, 4, 6, 8]
          },
          {
            word: ['P', 'E', 'A', 'R', 'S'],
            marker: [7, 0, 7, 4]
          },
          {
            word: ['P', 'A', 'P', 'A', 'Y', 'A'],
            marker: [1, 8, 6, 8]
          },
          {
            word: ['M', 'E', 'L', 'O', 'N'],
            marker: [0, 5, 0, 9]
          },
          {
            word: ['M', 'A', 'N', 'G', 'O'],
            marker: [1, 2, 1, 6]
          }
        ],
        table: [
          ['M', 'T', 'O', 'M', 'A', 'T', 'O', 'P'],
          ['N', 'B', 'R', 'H', 'P', 'U', 'Q', 'E'],
          ['Q', 'M', 'A', 'P', 'P', 'L', 'E', 'A'],
          ['P', 'A', 'N', 'N', 'J', 'H', 'X', 'R'],
          ['Y', 'N', 'G', 'R', 'A', 'P', 'E', 'S'],
          ['M', 'G', 'E', 'U', 'Q', 'N', 'W', 'D'],
          ['E', 'O', 'D', 'M', 'A', 'Y', 'A', 'T'],
          ['L', 'L', 'K', 'I', 'H', 'V', 'B', 'S'],
          ['O', 'P', 'A', 'P', 'A', 'Y', 'A', 'H'],
          ['N', 'X', 'Y', 'L', 'I', 'W', 'A', 'I']
        ],
        lang: 'en',
        showWords: true
      }
    },
    {
      type: 'wordsearch',
      label: 'People and Jobs',
      id: 'profession',
      data: {
        words: [
          { word: 'scientist', marker: [0, 5, 8, 5] },
          { word: 'teacher', marker: [3, 0, 3, 6] },
          { word: 'farmer', marker: [2, 2, 7, 2] },
          { word: 'police', marker: [1, 1, 1, 6] },
          { word: 'cook', marker: [1, 5, 4, 8] },
          { word: 'doctor', marker: [8, 2, 8, 7] },
          { word: 'driver', marker: [6, 3, 6, 8] },
          { word: 'nurse', marker: [0, 0, 0, 4] },
          { word: 'tailor', marker: [3, 0, 8, 0] },
          { word: 'pilot', marker: [0, 7, 4, 7] }
        ],
        showWords: true,
        lang: 'en',
        desc: 'Find the jobs given at the bottom.',
        table: `NXCTAILOR
      UPOEEZPZU
      ROFARMERD
      SLGCZVDIO
      EIPHGNRQC
      SCIENTIST
      SEORXYVLO
      PILOTKEJR
      MDZPKTRZB`
      }
    },
    {
      type: 'wordsearch',
      id: 'colors',
      label: 'Colors',
      data: {
        words: [
          { word: 'pink', marker: [4, 7, 7, 7] },
          { word: 'black', marker: [7, 3, 7, 7] },
          { word: 'white', marker: [2, 1, 6, 5] },
          { word: 'blue', marker: [3, 5, 6, 5] },
          { word: 'green', marker: [6, 3, 6, 7] },
          { word: 'purple', marker: [0, 1, 5, 6] },
          { word: 'violet', marker: [0, 2, 0, 7] },
          { word: 'yellow', marker: [2, 0, 7, 0] },
          { word: 'red', marker: [2, 3, 2, 5] }
        ],
        showWords: true,
        lang: 'en',
        desc: 'Find the colors given at the bottom.',
        table: `NLYELLOW
      PGWHENMX
      VUDHJDFW
      IORXIVGB
      ODEPRTRL
      LNDBLUEA
      EVXXEEEC
      TRJRPINK`
      }
    },
    {
      type: 'wordsearch',
      id: 'vehicles',
      label: 'Vehicles',
      locked: true,
      data: {
        words: [
          { word: 'boat', marker: [4, 1, 7, 1] },
          { word: 'car', marker: [6, 0, 6, 2] },
          { word: 'train', marker: [1, 5, 5, 5] },
          { word: 'ship', marker: [7, 4, 7, 7] },
          { word: 'bicycle', marker: [1, 3, 7, 3] },
          { word: 'van', marker: [0, 0, 0, 2] },
          { word: 'tractor', marker: [0, 7, 6, 7] },
          { word: 'aeroplane', marker: [8, 0, 8, 8] },
          { word: 'truck', marker: [2, 6, 6, 6] },
          { word: 'bus', marker: [3, 0, 5, 0] }
        ],
        showWords: true,
        lang: 'en',
        desc: 'Find the vehicles given at the bottom.',
        table: `VWSBUSCKA
      AKTFBOATE
      NTWAAKRNR
      LBICYCLEO
      PWMEHCFSP
      JTRAINBHL
      AOTRUCKIA
      TRACTORPN
      CQEDKXOEE`
      }
    },
    {
      id: 'kitchen',
      type: 'wordsearch',
      label: 'Kitchen',
      locked: true,
      data: {
        title: 'Find the given words from the table.',
        words: [
          {
            word: ['S', 'P', 'O', 'O', 'N'],
            marker: [1, 1, 5, 1]
          },
          {
            word: ['S', 'T', 'O', 'V', 'E'],
            marker: [1, 1, 5, 5]
          },
          {
            word: ['F', 'O', 'R', 'K'],
            marker: [4, 0, 4, 3]
          },
          {
            word: ['K', 'N', 'I', 'F', 'E'],
            marker: [1, 5, 5, 5]
          },
          {
            word: ['P', 'O', 'T'],
            marker: [3, 2, 3, 4]
          },
          {
            word: ['P', 'A', 'N'],
            marker: [2, 3, 2, 5]
          },
          {
            word: ['F', 'R', 'I', 'D', 'G', 'E'],
            marker: [2, 7, 7, 7]
          },
          {
            word: ['C', 'O', 'O', 'K', 'I', 'N', 'G'],
            marker: [6, 1, 6, 7]
          },
          {
            word: ['B', 'A', 'K', 'E'],
            marker: [5, 2, 5, 5]
          },
          {
            word: ['P', 'L', 'A', 'T', 'E'],
            marker: [7, 3, 7, 7]
          }
        ],
        table: [
          ['M', 'U', 'B', 'R', 'F', 'U', 'C', 'R'],
          ['U', 'S', 'P', 'O', 'O', 'N', 'C', 'N'],
          ['L', 'N', 'T', 'P', 'R', 'B', 'O', 'A'],
          ['F', 'X', 'P', 'O', 'K', 'A', 'O', 'P'],
          ['Y', 'L', 'A', 'T', 'V', 'K', 'K', 'L'],
          ['B', 'K', 'N', 'I', 'F', 'E', 'I', 'A'],
          ['M', 'G', 'S', 'J', 'D', 'U', 'N', 'T'],
          ['J', 'D', 'F', 'R', 'I', 'D', 'G', 'E']
        ],
        lang: 'en',
        showWords: true
      }
    },
    {
      id: 'vegetables',
      type: 'wordsearch',
      label: 'Vegetables',
      locked: true,
      data: {
        title: 'Find the given words from the table.',
        words: [
          {
            word: ['C', 'A', 'R', 'R', 'O', 'T'],
            marker: [1, 1, 6, 6]
          },
          {
            word: ['C', 'O', 'R', 'N'],
            marker: [1, 1, 4, 1]
          },
          {
            word: ['O', 'N', 'I', 'O', 'N'],
            marker: [2, 1, 6, 5]
          },
          {
            word: ['G', 'I', 'N', 'G', 'E', 'R'],
            marker: [0, 0, 0, 5]
          },
          {
            word: ['G', 'A', 'R', 'L', 'I', 'C'],
            marker: [0, 0, 5, 0]
          },
          {
            word: ['P', 'O', 'T', 'A', 'T', 'O'],
            marker: [2, 6, 7, 6]
          },
          {
            word: ['P', 'E', 'A', 'S'],
            marker: [3, 4, 6, 7]
          },
          {
            word: ['N', 'U', 'T', 'S'],
            marker: [3, 2, 6, 2]
          },
          {
            word: ['C', 'A', 'B', 'B', 'A', 'G', 'E'],
            marker: [1, 1, 1, 7]
          },
          {
            word: ['B', 'E', 'A', 'N', 'S'],
            marker: [2, 7, 6, 7]
          }
        ],
        table: [
          ['G', 'A', 'R', 'L', 'I', 'C', 'C', 'S'],
          ['I', 'C', 'O', 'R', 'N', 'Z', 'K', 'O'],
          ['N', 'A', 'A', 'N', 'U', 'T', 'S', 'R'],
          ['G', 'B', 'V', 'R', 'I', 'Z', 'D', 'L'],
          ['E', 'B', 'E', 'P', 'R', 'O', 'E', 'P'],
          ['R', 'A', 'O', 'N', 'E', 'O', 'N', 'N'],
          ['G', 'G', 'P', 'O', 'T', 'A', 'T', 'O'],
          ['U', 'E', 'B', 'E', 'A', 'N', 'S', 'T']
        ],
        lang: 'en',
        showWords: true
      }
    }
  ]
};
