export default {
  label: 'Surroundings',
  id: 'surroundings',
  list: [
    {
      id: 'notes',
      label: 'Getting to Know the Place we Live in',
      type: 'passage',
      data: {
        title: 'Getting to Know the Place we Live in',
        text: `# Formation of a town/village
In very ancient times, man used to hunt animals and used to eat raw meat, raw vegetables, root, fruits, bulbs, etc., for food. They kept moving from one place to another for their survival. After long years, slowly they learned agriculture, weaving, jewel making, etc. So, the people started to settle in the places where they felt more comfortable. Slowly, they settled and started to live together. They helped each other and divided work among themselves. These settlements were helped to form the village/town. Besides, this made the people engaged in different occupations.
# Market places
People in villages are dependent on market places to fulfill their daily essential needs. All essential things are available in the market. People from different areas will come to sell the products in the marketplace. Besides, they use different modes of transportation for carrying their goods to the market.
# Historical Places and Monuments
India has a rich heritage and it is well known for its old culture. Many places in India have more historical values and it helps us to understand the history. Mostly all places in India are named in memory of famous historical things, religious places, etc. Moreover, the places in India are also renowned by famous historical persons. Some places are famous for historical buildings, some places are well known for historical events and also for religious temples. We are gifted to get this treasure and it is our responsibility to preserve its value.  `
      }
    },
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
    },
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
            qText: '__________ is  World Heritage Day.',
            options: `18th April, 20th June, 23rd April, 25th April`
          },
          {
            qText: 'India Gate is situated in ___________.',
            options: `Delhi, Mumbai, Kashmir, None of the above`
          },
          {
            qText: 'Essential items are available in ___________.',
            options: `Market place, Mall, Temple, Fort`
          },
          {
            qText: 'Khajuraho Temples is situated in ___________.',
            options: `Madhya Pradesh, Odisha, Gujarat, None of the above`
          },
          {
            qText: '_______ is situated in Tamil Nadu.',
            options: `Fort Geldria, Murud-Janjira Fort, Mehrangarh Fort, None of the above`
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
          In India, some places are famous because of *Historical buildings*.
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
        text: `Historical places have famous buildings or famous sites or religious cultures that have been preserved due to their rich cultural heritage. Every historical place has its own (story) historical importance and they are preserved carefully by our government. Historical places add important value to a nation's heritage. It also helps in promoting tourism. Moreover, historical places will also tell us about the ancient lifestyle. By reading and knowing a lot about historical places, we can know about where we come from. Historical places mark important events in history.`
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
            options: `Agra, Noida, Gurugram, None of the Above`
          },
          {
            qText: '_________ Fort is first English fort in India.',
            options: `Fort St. George, Sewri Fort, Mahim Fort, None of the Above`
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
            qText: '________ is palace of winds.',
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
            hint: 'GANDHIJI',
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
