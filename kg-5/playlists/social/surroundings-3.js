export default {
  id: 'surroundings-3',
  label: 'Surroundings-3',
  pdf: '',
  lockAfter: 4,
  list: [
    {
      label: 'Sanctuaries - Reading',
      type: 'passage',
      id: '100',
      data: {
        title: 'Sanctuaries',
        text: `A Sanctuary is a place where animals and birds are protected from hunting and other human activities. Sanctuaries are run by the government. Our government also runs  biosphere reserves and national parks. They conserve plants, wild animals, birds, rare and diverse species. 
For example, Jim Corbett National Park, present in Uttarakhand is a well known national park. The majestic Bengal Tigers are protected there.
In Sunderbans National Park, present in West Bengal, also Bengal tigers are protected. Due to the successful conservation efforts of 'Project Tiger', the number of tigers have been increased in India.
The Nilgiri Biosphere Reserve has elephants, Indian leopard, Black panther and Nilgiri tahr.
Vedanthangal Bird Sanctuary is famous for migrating birds that come from different countries. Some birds move from one place to another due to change in seasons.
Kaziranga National Park in Assam, is the home of one-horned rhinoceros. It has around two-thirds of all rhinoceros in the world. Due to the successful conservation efforts, the number of one-horned rhinoceros have been increased.
Gir National Park in Gujarat has Asiatic Lions. This is the only forest in India where we can sea lions.`
      }
    },
    {
      label: 'Fill in the blanks',
      type: 'matchByDragDrop',
      id: '600',
      data: {
        isPractice: false,
        title: 'Drag and drop the given words at the right blanks.',
        styles: {
          fontSize: '1.3rem',
          dashWidth: 80
        },
        text: `*Vendanthangal* Sanctuary is famous for migrating birds.
*Gir* forest is famous for lions.
*Kaziranga* National Park in Assam, is the home of one-horned rhinoceros.
The *Nilgiri* Biosphere Reserve has elephants, Indian leopard, Black panther.
*Jim Corbett* National Park is known for majestic Bengal tigers.`
      }
    },
    {
      label: 'True or False',
      id: '200',
      type: 'classifySentence',
      data: {
        title: 'Classify the below sentences as true and false',
        types: [
          {
            name: 'True',
            text: `Mudumalai Sanctuary is located in Tamil Nadu.
Birds and animals move from one place to another place because of seasonal changes.
In Vedanthangal Bird Sanctuary, birds migrate from different countries.`
          },
          {
            name: 'False',
            text: `In Nilgiri Biosphere Reserve, you can find only elephants.
Kaziranga National Park is present in West Bengal.`
          }
        ]
      }
    },
    {
      id: '500',
      label: 'Match the following',
      type: 'match',
      data: {
        text: `Vendanthangal, Birds
        Nilgiri, Elephants
          Gir Park, Lions
          Bandipur, Tigers
          Botanical Garden, Flora`,
        title: 'Match the following'
      }
    },
    {
      id: 'match-park-place',
      label: 'Match the following',
      type: 'match',
      data: {
        text: `Kaziranga, Assam
Sunderbans, West Bengal
Vendanthangal, Tamil Nadu
Jim Corbett, Uttarakhand
Gir Park, Gujarat `,
        title: 'Match the following'
      }
    },
    /*
    {
      id: 'fillup',
      label: 'Fill in the blanks',
      type: 'fillupOptions',
      data: {
        title: 'Click the blanks and fill it with the right word.',
        text: `Kurinchi flower blossoms only once in *12 (10)* years.
          Vedanthangal Bird Sanctuary is the very oldest water *birds (animals)* sanctuary in India.
          There are *three (four)* biosphere reserves in Tamil Nadu.
          Padmaja Naidu Himalayan Zoological Park is situated in *West Bengal (Maharashtra)*.
          Botanical gardens are there to maintain the extinct *plants (animals)* species.`
      }
    },
    */
    {
      label: 'Choose the best Answer ',
      id: '1000',
      type: 'mcq',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: ' Kaziranga National Park is famous for _____________.',
            options: 'one horned rhinoceros, elephants, tigers, lions'
          },
          {
            qText: 'Vedanthangal Bird Sanctuary is located in _____________',
            options: 'Tamil Nadu, Madhya Pradesh, Goa, West Bengal'
          },
          {
            qText: 'Gir National Park is famous for ________',
            options:
              'Asiatic Lions, Asiatic Tigers, Asiatic Giraffes, Asiatic Elephants'
          },
          {
            qText: 'Sundarbans National Park is famous for ___________',
            options: 'Tigers, Bears, Deers, Cheetahs'
          },
          {
            qText: 'Jim Corbett National Park is situated at ___________',
            options: 'Uttarakhand, Goa, Karnataka, Kerala'
          }
        ]
      }
    },
    {
      id: 'wordsearch',
      type: 'wordsearch',
      label: 'WordSearch - Sanctuaries',
      data: {
        title: 'Find the given words from the table.',
        words: [
          {
            word: ['A', 'N', 'A', 'M', 'U', 'D', 'I'],
            marker: [0, 0, 6, 6]
          },
          {
            word: ['B', 'A', 'N', 'D', 'I', 'P', 'U', 'R'],
            marker: [2, 1, 2, 8]
          },
          {
            word: ['G', 'I', 'R', 'P', 'A', 'R', 'K'],
            marker: [9, 0, 9, 6]
          },
          {
            word: ['S', 'U', 'N', 'D', 'A', 'R', 'B', 'A', 'N'],
            marker: [1, 7, 9, 7]
          },
          {
            word: ['M', 'U', 'D', 'U', 'M', 'A', 'L', 'A', 'I'],
            marker: [8, 0, 8, 8]
          },
          {
            word: ['K', 'A', 'Z', 'I', 'R', 'A', 'N', 'G', 'A'],
            marker: [0, 9, 8, 9]
          }
        ],
        table: [
          ['A', 'U', 'M', 'G', 'L', 'R', 'W', 'D', 'M', 'G'],
          ['P', 'N', 'B', 'Z', 'W', 'F', 'T', 'F', 'U', 'I'],
          ['B', 'G', 'A', 'M', 'Q', 'M', 'F', 'W', 'D', 'R'],
          ['F', 'R', 'N', 'M', 'T', 'A', 'D', 'Q', 'U', 'P'],
          ['V', 'S', 'D', 'B', 'U', 'Q', 'Q', 'L', 'M', 'A'],
          ['E', 'P', 'I', 'Q', 'K', 'D', 'S', 'J', 'A', 'R'],
          ['T', 'U', 'P', 'B', 'M', 'D', 'I', 'M', 'L', 'K'],
          ['O', 'S', 'U', 'N', 'D', 'A', 'R', 'B', 'A', 'N'],
          ['I', 'E', 'R', 'N', 'I', 'Z', 'E', 'K', 'I', 'H'],
          ['K', 'A', 'Z', 'I', 'R', 'A', 'N', 'G', 'A', 'T']
        ],
        lang: 'en',
        showWords: true
      }
    },
    {
      id: 'crossword',
      type: 'crossword',
      label: 'Crossword - Sanctuaries',
      data: {
        title: 'Solve the crossword. Please click on a cell to view the hint.',
        words: [
          {
            word: 'Girpark',
            marker: {
              x: 0,
              y: 0
            },
            hint: 'National park  for Asiatic Lions',
            direction: 'down'
          },
          {
            word: 'Sundarbans ',
            marker: {
              x: 0,
              y: 9
            },
            hint: 'National park for Tigers',
            direction: 'across'
          },
          {
            word: 'Kaziranga',
            marker: {
              x: 1,
              y: 2
            },
            hint: 'National park for one horned rhinoceros',
            direction: 'across'
          },
          {
            word: 'ANAMUDI',
            marker: {
              x: 9,
              y: 0
            },
            hint: 'Sanctuaries for elephants',
            direction: 'down'
          },
          {
            word: 'KURINJI',
            marker: {
              x: 5,
              y: 0
            },
            hint: 'flower blossoms only once in 12 years',
            direction: 'down'
          },
          {
            word: 'JimCorbett',
            marker: {
              x: 0,
              y: 7
            },
            hint: 'National park in Uttarakhand',
            direction: 'across'
          }
        ],
        table: [
          ['G', '', '', '', '', 'K', '', '', '', 'A'],
          ['I', '', '', '', '', 'U', '', '', '', 'N'],
          ['R', 'K', 'A', 'Z', 'I', 'R', 'A', 'N', 'G', 'A'],
          ['P', '', '', '', '', 'I', '', '', '', 'M'],
          ['A', '', '', '', '', 'N', '', '', '', 'U'],
          ['R', '', '', '', '', 'J', '', '', '', 'D'],
          ['K', '', '', '', '', 'I', '', '', '', 'I'],
          ['J', 'I', 'M', 'C', 'O', 'R', 'B', 'E', 'T', 'T'],
          ['', '', '', '', '', '', '', '', '', ''],
          ['S', 'U', 'N', 'D', 'A', 'R', 'B', 'A', 'N', 'S']
        ],
        lang: 'en'
      }
    },
    {
      id: 'notes',
      label: 'Getting to Know the Place we Live in',
      type: 'passage',
      data: {
        title: 'Getting to Know the Place we Live in',
        text: `# Formation of a town/village
In very ancient times, man used to hunt animals and used to eat raw meat, raw vegetables, root, fruits, bulbs, etc., for food. They kept moving from one place to another for their survival. After long years, slowly they learned agriculture, weaving, jewel making, etc. So, the people started to settle in the places where they felt more comfortable. Slowly, they settled and started to live together. They helped each other and divided work among themselves. These settlements helped to form the village/town. Besides, this made the people engaged in different occupations.
# Market places
People in villages are dependent on market places to fulfill their daily essential needs. All essential things are available in the market. People from different areas will come to sell the products in the marketplace. Besides, they use different modes of transportation for carrying their goods to the market.
# Historical Places and Monuments
India has a rich heritage and it is well known for its old culture. Many places in India have more historical values and it helps us to understand the history. Many places in India are named in memory of famous historical things, religious places, etc. Moreover, the places in India are also renowned by famous historical persons. Some places are famous for historical buildings, some places are well known for historical events and also for religious temples. We are gifted to get this treasure and it is our responsibility to preserve its value.  `
      }
    },
    /*
    {
      id: 'classify',
      label: 'Farming Vs Weaving',
      type: 'group',
      data: {
        title: 'Classify the below tools based on the purpose.',
        types: [
          {
            name: 'Farming ',
            text: 'Spades, Garden fork, Pickaxe, Mouldboard plows'
          },
          {
            name: 'Weaving ',
            text: 'Dowels, Shed stick, Tapestry Needle, Warp yarn'
          }
        ]
      }
    },*/
    {
      id: 'match',
      label: 'Match',
      type: 'match',
      data: {
        title: 'Match.',
        fontSize: '1rem',
        text: `Delhi, Red fort
        Jaipur, Amber Fort
        Telangana, Golconda Fort
        Rajasthan, Chittorgarh Fort
        Chennai, Fort St. George`
      }
    },
    {
      id: 'mcq',
      label: 'Multiple Choice Questions - MCQ',
      type: 'mcq',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: '__________ is celebrated as World Heritage Day.',
            options: `18th April, 20th June, 23rd April, 25th April`
          },
          {
            qText: 'India Gate is situated in ___________.',
            options: `Delhi, Mumbai, Kashmir, None of the above`
          },
          {
            qText: 'Essential items are available in the  ___________.',
            options: `market place, mall, temple, fort`
          },
          {
            qText: 'Khajuraho Temples is situated in ___________.',
            options: `Madhya Pradesh, Odisha, Gujarat, None of the above`
          }
        ]
      }
    },
    {
      label: 'Drag and Drop',
      type: 'matchByDragDrop',
      id: 'drag-drop',
      data: {
        isPractice: false,
        title: 'Drag and drop the words at proper place.',
        styles: {
          fontSize: '1rem',
          dashWidth: 80
        },
        text: `*Village* is formed by the people who got settled and lived together in a place. 
          In India, some places are famous because of *historical buildings*.
          *Sun temple* is situated in Konark.
          Rajgad Fort is a hill fort, situated in Rajgad district of *Maharashtra*. 
          *Golden temple* is situated in Amritsar.`
      }
    },
    {
      id: 'fillup',
      label: 'Fill in the blanks',
      type: 'fillupOptions',
      data: {
        text: `King Chathrapathi Sivaji was the founder of *Maratha (Gupta)* Empire. 
          *Rajaraja (Rajendra)* Chola I  built the Brihadishvara temple. 
          *Plough (Shuttle)* is used in agriculture.
          Lotus temple is one of the famous monuments situated in *Delhi (Amritsar)*.
          *Jaisalmer (Mehrangarh)* Fort is also called a golden fort.`,
        title: 'Fill in the blanks.'
      }
    },
    {
      id: 'true-false',
      label: 'True or False',
      type: 'classifySentence',
      data: {
        title: 'True or False',
        types: [
          {
            name: 'True',
            text: `In ancient days, man used to hunt animals and eat raw meat.
              Ajanta caves are famous for its cave paintings, sculptures, and architecture.
              Red fort was built by Shah Jahan, Mughal emperor of India.`
          },
          {
            name: 'False',
            text: `Humayun tomb is located in Gujarat.
              Gateway of India is situated in Delhi.`
          }
        ]
      }
    },
    {
      id: 'notes-2',
      label: 'Historical Places',
      type: 'passage',
      data: {
        title: 'Historical Places',
        text: `Historical places have buildings that were build hundreds of years ago. Every historical place has its own story and they are preserved carefully by our government. Historical places add value to a nation's heritage. It also helps in promoting tourism. Moreover, historical places also tell us about the ancient lifestyle. By reading and knowing a lot about historical places, we can know about where we come from. Historical places mark important events in history.
        Mamallapuram is one of the important historical place. It is located near Chennai. It was build by Pallavas. We can find many monuments that were made out of just single stone. It is also known as shore temple, because it is located on the shores of Bay of Bengal.

        St. George fort is the first English fort in India. It is present in Chennai.
        `
      }
    },
    {
      id: 'classify-2',
      label: ' British vs Mughal monuments in India',
      type: 'group',
      data: {
        title: 'Classify the below',
        types: [
          {
            name: 'British Monuments',
            text:
              'Gateway of India, India Gate, Fort St. George, Victoria Memorial'
          },
          {
            name: 'Mughal Monuments',
            text: 'Taj Mahal, Chini ka Rauza, Qutb Minar, Kashmiri Gate'
          }
        ]
      }
    },
    {
      id: 'match-2',
      label: 'Match-2',
      type: 'match',
      data: {
        title: 'Match the related ones.',
        fontSize: '1rem',
        text: `Mecca Masjid, Hyderabad
          Undavalli Caves, Amaravathi
          Dhamekh Stupa, Varanasi 
          Santhome Church, Chennai
          Sree Padmanabhaswamy Temple, Kerala`
      }
    },
    {
      id: 'mcq-2',
      label: 'Multiple Choice Questions-2',
      type: 'mcq',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: 'Tomb of Akbar is located in ________.',
            options: `Agra, Noida, Gurugram`
          },
          {
            qText: '_________ Fort is first English fort in India.',
            options: `St. George, Sewri, Mahim`
          },
          {
            qText: 'Vivekanandha rock is situated in __________. ',
            options: `Kanyakumari, Calcutta, Hampi, Kochi`
          },
          {
            qText: '________ is the capital of the Pallavas dynasty.',
            options: `Kanchipuram, Madurai, Trichy, Vellore`
          },
          {
            qText: `________ is called the 'palace of winds'.`,
            options: `Hawa Mahal, Tipu and Hyder Mahal, Taj Mahal, None of the above`
          }
        ]
      }
    },
    {
      label: 'Drag and Drop-2',
      type: 'matchByDragDrop',
      id: 'drag-drop-2',
      data: {
        isPractice: false,
        title: 'Drag and drop the words at proper place.',
        styles: {
          fontSize: '1rem',
          dashWidth: 80
        },
        text: `*Thiruvalluvar statue* was situated in the Kanyakumari district.
Aayi Mandapam is also called *Park Monument*.
*Mandvi Gate* is the north gate of the Royal Enclosure for the state Baroda.
*Wagah border* is famous for ceremonial closing the gates and lowering of India and Pakistan flags.
*Sittanavasal* Cave is situated in Tamil Nadu.`
      }
    },
    {
      id: 'fillup-2',
      label: 'Fill in the blanks-2',
      type: 'fillupOptions',
      data: {
        text: `Mamallapuram was built by *Narasimhavarman (Paramesvaravarman)*.
Arch of Viceroy is situated in *Goa (Ahmedabad)*
Vasco Da Gama Memorial is situated in *Kerala (Goa)*.
Nalanda University was constructed by the *Gupta dynasty (Rajputs)*.
The Elephant Palace is situated in *Madhya Pradesh (Andhra Pradesh)*`,
        title: 'Fill in the blanks.'
      }
    },
    {
      id: 'true-false-2',
      label: 'True or False-2',
      type: 'classifySentence',
      data: {
        title: 'True or False',
        types: [
          {
            name: 'True',
            text: `Ajanta and Ellora caves were built by Krishna I.
Brihadishvara temple was constructed by Cholas.
Gingee fort is located in the Villupuram district.`
          },
          {
            name: 'False',
            text: `Mahabalipuram was constructed by pandyas.
Tipu Sultan palace is situated in Mangalore.`
          }
        ]
      }
    },
    {
      id: 'wordsearch',
      label: 'Farming Implements- Word Search ',
      type: 'wordsearch',
      data: {
        words: [
          {
            word: ['T', 'R', 'A', 'C', 'T', 'O', 'R'],
            marker: [0, 0, 6, 6]
          },
          {
            word: ['P', 'L', 'O', 'W', 'S'],
            marker: [5, 3, 5, 7]
          },
          {
            word: ['B', 'A', 'L', 'E', 'R'],
            marker: [1, 2, 5, 2]
          },
          {
            word: ['H', 'A', 'R', 'R', 'O', 'W'],
            marker: [0, 2, 0, 7]
          },
          {
            word: ['S', 'E', 'E', 'D', 'E', 'R', 'S'],
            marker: [7, 0, 7, 6]
          }
        ],
        title: 'Find the hidden farming implements',
        lang: 'en',
        table: [
          ['T', 'N', 'X', 'R', 'X', 'Z', 'H', 'S'],
          ['Y', 'R', 'X', 'O', 'Q', 'T', 'C', 'E'],
          ['H', 'B', 'A', 'L', 'E', 'R', 'I', 'E'],
          ['A', 'J', 'Q', 'C', 'F', 'P', 'W', 'D'],
          ['R', 'L', 'F', 'P', 'T', 'L', 'X', 'E'],
          ['R', 'B', 'G', 'J', 'H', 'O', 'W', 'R'],
          ['O', 'I', 'S', 'Q', 'Y', 'W', 'R', 'S'],
          ['W', 'T', 'Y', 'M', 'F', 'S', 'W', 'H']
        ],
        showWords: true
      }
    },
    {
      id: 'crossword',
      label: 'Monuments in India- Crossword ',
      type: 'crossword',
      data: {
        words: [
          {
            word: 'TAJ MAHAL',
            marker: {
              x: 0,
              y: 0
            },
            hint: 'One of the seven wonders ',
            direction: 'down'
          },
          {
            word: 'INDIA GATE',
            marker: {
              x: 9,
              y: 3
            },
            hint: 'British monument in Delhi',
            direction: 'across2'
          },
          {
            word: 'QUTUB MINAR',
            marker: {
              x: 0,
              y: 9
            },
            hint: 'Victory tower in Delhi',
            direction: 'across'
          },
          {
            word: 'ELLORA',
            marker: {
              x: 1,
              y: 3
            },
            hint: 'Monument in Aurangabad',
            direction: 'down'
          },
          {
            word: 'AJANTA',
            marker: {
              x: 5,
              y: 3
            },
            hint: 'Famous architectural cave',
            direction: 'down'
          },
          {
            word: 'CHARMINAR',
            marker: {
              x: 9,
              y: 8
            },
            hint: 'Monument in Hyderabad',
            direction: 'down2'
          },
          {
            word: 'RAJ GHAT',
            marker: {
              x: 3,
              y: 2
            },
            hint: 'Mahatma Gandhi memorial in Delhi',
            direction: 'down'
          },
          {
            word: 'RED FORT',
            marker: {
              x: 6,
              y: 0
            },
            hint: 'Old Delhi Monument',
            direction: 'across2'
          }
        ],
        title: 'Solve the crossword. Please click on a cell to view the hint.',
        lang: 'en',
        table: [
          ['T', 'R', 'O', 'F', 'D', 'E', 'R', '', '', 'R'],
          ['A', '', '', '', '', '', '', '', '', 'A'],
          ['J', '', '', 'R', '', '', '', '', '', 'N'],
          ['M', 'E', 'T', 'A', 'G', 'A', 'I', 'D', 'N', 'I'],
          ['A', 'L', '', 'J', '', 'J', '', '', '', 'M'],
          ['H', 'L', '', 'G', '', 'A', '', '', '', 'R'],
          ['A', 'O', '', 'H', '', 'N', '', '', '', 'A'],
          ['L', 'R', '', 'A', '', 'T', '', '', '', 'H'],
          ['', 'A', '', 'T', '', 'A', '', '', '', 'C'],
          ['Q', 'U', 'T', 'U', 'B', 'M', 'I', 'N', 'A', 'R']
        ]
      }
    }
  ]
};
