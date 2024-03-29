export default {
  label: 'India',
  id: 'india',
  pdf: 'india.pdf',
  lockAfter: 3,
  list: [
    {
      id: 'drag-drop',
      label: 'North India - States Map',
      type: 'dragAndDrop',
      data: {
        img: 'northIndia.jpg',
        title: 'North India - States Map',
        printTitle: 'Mark the below states on the map.',
        width: 340,
        height: 460,
        wordWidth: 80,
        words: [
          {
            word: 'Kashmir',
            x: 140,
            y: 50
          },
          {
            word: 'Punjab',
            x: 115,
            y: 140
          },
          {
            word: 'Haryana',
            x: 130,
            y: 180
          },
          {
            word: 'Himachal',
            x: 170,
            y: 110
          },
          {
            word: 'Rajasthan',
            x: 60,
            y: 250
          },
          {
            word: 'Uttar Pradesh',
            x: 230,
            y: 240
          },
          {
            word: 'Uttarakhand',
            x: 230,
            y: 150
          },
          {
            word: 'Gujarat',
            x: 20,
            y: 340
          },
          {
            word: 'Madhya Pradesh',
            x: 150,
            y: 330
          },
          {
            word: 'Chhattisgarh',
            x: 240,
            y: 380
          }
        ]
      }
    },
    {
      id: 'match',
      type: 'match',
      label: 'States & Capitals',
      lockAfter: 1,
      commonData: {
        title: 'Match states with their capitals.',
        fontSize: '1.1rem'
      },
      data: [
        `Punjab, Chandigarh
Himachal Pradesh, Shimla
Rajasthan, Jaipur
Uttar Pradesh, Lucknow
Uttarakhand, Dehradun
Gujarat, Gandhinagar`,

        `Madhya Pradesh, Bhopal
Chhattisgarh, Raipur
Odisha, Bhubaneswar
Jharkhand, Ranchi
Bihar, Patna
West Bengal, Kolkata`,

        `Sikkim, Gangtok
Assam, Dispur
Arunachal Pradesh, Itanagar
Manipur, Imphal
Telangana , Hyderabad`,

        `Karnataka , Bengaluru
Kerala , Thiruvananthapuram
Tamil Nadu , Chennai
Goa , Panaji
Maharashtra , Mumbai`
      ]
    },
    {
      id: 'drag-drop-2',
      label: 'North India - Capitals',
      type: 'dragAndDrop',
      data: {
        img: 'northIndia.jpg',
        title: 'North India - Capitals',
        printTitle: 'Mark the below cities on the map.',
        width: 340,
        height: 460,
        wordWidth: 60,
        words: [
          {
            word: 'Chandigarh',
            x: 175,
            y: 155
          },
          {
            word: 'Delhi',
            x: 190,
            y: 190
          },
          {
            word: 'Shimla',
            x: 190,
            y: 130
          },
          {
            word: 'Jaipur',
            x: 100,
            y: 270
          },
          {
            word: 'Lucknow',
            x: 280,
            y: 240
          },
          {
            word: 'Dehradun',
            x: 230,
            y: 150
          },
          {
            word: 'Gandhinagar',
            x: 70,
            y: 320
          },
          {
            word: 'Bhopal',
            x: 190,
            y: 320
          },
          {
            word: 'Raipur',
            x: 280,
            y: 360
          }
        ]
      }
    },
    {
      id: 'drag-drop-3',
      label: 'East India - States Map',
      type: 'dragAndDrop',
      data: {
        img: 'eastIndia.jpg',
        title: 'East India - States Map',
        printTitle: 'Mark the below states on the map.',
        width: 340,
        height: 460,
        wordWidth: 60,
        words: [
          {
            word: 'Odisha',
            x: 55,
            y: 300
          },
          {
            word: 'Jharkhand',
            x: 50,
            y: 210
          },
          {
            word: 'Bihar',
            x: 70,
            y: 160
          },
          {
            word: 'West Bengal',
            x: 120,
            y: 240
          },
          {
            word: 'Sikkim',
            x: 140,
            y: 90
          },
          {
            word: 'Assam',
            x: 200,
            y: 120
          },
          {
            word: 'Arunachal Pradesh',
            x: 250,
            y: 60
          },
          {
            word: 'Manipur',
            x: 230,
            y: 200
          }
        ]
      }
    },
    {
      id: 'drag-drop-4',
      label: 'East India - Cities',
      type: 'dragAndDrop',
      data: {
        img: 'eastIndia.jpg',
        title: 'East India - Cities',
        printTitle: 'Mark the below cities on the map.',
        width: 340,
        height: 460,
        wordWidth: 60,
        words: [
          {
            word: 'Bhubaneswar',
            x: 55,
            y: 300
          },
          {
            word: 'Ranchi',
            x: 80,
            y: 210
          },
          {
            word: 'Patna',
            x: 70,
            y: 150
          },
          {
            word: 'Kolkata',
            x: 130,
            y: 240
          },
          {
            word: 'Gangtok',
            x: 140,
            y: 90
          },
          {
            word: 'Dispur',
            x: 200,
            y: 120
          },
          {
            word: 'Itanagar',
            x: 250,
            y: 60
          },
          {
            word: 'Imphal',
            x: 230,
            y: 200
          }
        ]
      }
    },
    {
      id: 'mcq',
      label: 'Biggest, Longest, Largest - MCQ',
      type: 'mcq',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: 'Which is the longest river in India?',
            options: 'The Gangas, The Yamuna, The Brahmaputra '
          },
          {
            qText: 'Which is the widest river in India?',
            options: 'The Brahmaputra, The Gangas, The Godavari'
          },
          {
            qText: 'The Thar desert is present in the state of _________.',
            options: 'Rajasthan, Gujarat, Chhattisgarh'
          },
          {
            qText: 'Which is the largest freshwater lake in India?',
            options: 'Wular lake, Chilka lake, Sambhar lake'
          },
          {
            qText: 'Which is the highest mountain peak in India?',
            options: 'K2, Kanchenjunga, Nanga Parbat'
          },
          {
            qText: 'Which place receives heaviest rainfall in India?',
            options:
              'Cherrapunji (Meghalaya), Ooty (Tamil Nadu), Cochin (Kerala), Srinagar (Kashmir)'
          },
          {
            qText:
              'Which is the largest State in India in terms of Population?',
            options: 'Uttar Pradesh, Madhya Pradesh,  Maharashtra'
          },
          {
            qText: 'Which is the largest State in India in terms of Area?',
            options: 'Madhya Pradesh,  Maharashtra, Uttar Pradesh'
          }
        ]
      }
    },
    {
      id: 'classify',
      label: 'Neighboring Countries',
      type: 'group',
      data: {
        title: 'Group the below countries as neighboring or not.',
        types: [
          {
            name: 'Neighbor',
            text: 'Pakistan, China, Nepal, Bangladesh, Sri Lanka'
          },
          {
            name: 'Not a Neighbor',
            text: 'Japan, Australia, Iran, Indonesia, France'
          }
        ]
      }
    },
    {
      id: 'mcq-3',
      label: 'India - MCQ',
      type: 'mcq',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: 'Whose image is present in the Indian Rupee?',
            options: 'Mahatma Gandhi, Jawaharlal Nehru, Vallabhbhai Patel'
          },
          {
            qText: 'Who is known as the Iron Man of India?',
            options: 'Vallabhbhai Patel, Jawaharlal Nehru, Mahatma Gandhi'
          },
          {
            qText: ' Who was the first Prime Minister of India?',
            options: 'Jawaharlal Nehru, Vallabhbhai Patel, Subash Chandra Bose'
          },
          {
            qText: 'Who was the first President of India?',
            options: 'Rajendra Prasad, Abdul Kalam, Radhakrishnan'
          },
          {
            qText: "Whose birthday is celebrated as Children's day?",
            options: 'Jawaharlal Nehru, Vallabhbhai Patel, Subash Chandra Bose'
          },
          {
            qText: "Whose birthday is celebrated as Teacher's day?",
            options: 'Radhakrishnan, Rajendra Prasad, Abdul Kalam'
          }
        ]
      }
    },
    {
      id: 'drag-drop-6',
      label: 'States in South India',
      type: 'dragAndDrop',
      data: {
        img: 'southIndiaStates.jpg',
        title: 'States in South India',
        printTitle: 'Mark the below states on the map.',
        width: 342,
        height: 368,
        wordWidth: 70,
        words: [
          {
            word: 'Karnataka',
            x: 60,
            y: 180
          },
          {
            word: 'Andhra Pradesh',
            x: 130,
            y: 150
          },
          {
            word: 'Telangana',
            x: 160,
            y: 60
          },
          {
            word: 'Tamil Nadu',
            x: 130,
            y: 270
          },
          {
            word: 'Kerala',
            x: 90,
            y: 300
          },
          {
            word: 'Goa',
            x: 20,
            y: 140
          },
          {
            word: 'Maharashtra',
            x: 30,
            y: 40
          }
        ]
      }
    },
    {
      id: 'drag-drop-7',
      label: 'South Indian Rivers',
      type: 'dragAndDrop',
      data: {
        img: 'southIndianRivers.jpg',
        title: 'South Indian Rivers',
        printTitle: 'Mark the below rivers on the map.',
        width: 253,
        height: 286,
        wordWidth: 85,
        words: [
          {
            word: 'Cauvery',
            x: 70,
            y: 180
          },
          {
            word: 'Krishna',
            x: 125,
            y: 76
          },
          {
            word: 'Godavari',
            x: 60,
            y: 10
          },
          {
            word: 'Vaigai',
            x: 110,
            y: 240
          },
          {
            word: 'Tungabhadra',
            x: 40,
            y: 140
          },
          {
            word: 'Periyar',
            x: 26,
            y: 220
          },
          {
            word: 'Pennar',
            x: 130,
            y: 126
          }
        ]
      }
    },
    {
      id: 'match-2',
      type: 'match',
      label: 'State and Languages',
      commonData: {
        title: 'Match the states with the language spoken.',
        fontSize: '1.1rem'
      },
      data: [
        `Andhra Pradesh, Telugu
Karnataka, Kannada
Kerala, Malayalam
Tamil Nadu, Tamil
Goa, Konkani
Maharashtra, Marathi`,

        `Gujarat, Gujarati
Haryana, Hindi
Odisha, Odia
West Bengal, Bengali
Assam, Assamese
Telangana, Telugu`
      ]
    },
    {
      id: 'mcq-4',
      label: 'Quiz',
      type: 'mcq',
      data: {
        title: 'Multiple Choice Question',
        questions: [
          {
            qText: 'Which is the recently formed state?',
            options: 'Telangana, Goa, Andhra Pradesh, Kerala'
          },
          {
            qText: 'Which place is famous for Dasara?',
            options: 'Mysore, Bengaluru, Madurai, Kochi'
          },
          {
            qText: 'Which city is the capital of more than one state?',
            options: 'Hyderabad, Bengaluru, Chennai, Thiruvananthapuram'
          },
          {
            qText: "Which state is called `God's own country`?",
            options: 'Kerala, Telangana, Goa, Andhra Pradesh'
          },
          {
            qText:
              'Which town is present at the meeting point of Arabian Sea, Bay of Bengal and Indian Ocean?',
            options: 'Kanyakumari, Madurai, Trichy, Kochi'
          },
          {
            qText: 'Which town is an Island?',
            options: 'Rameswaram, Kanyakumari, Madurai, Kochi'
          },
          {
            qText: 'Which place is not a hill station?',
            options: 'Cochin, Ooty, Kodaikanal, Coorg'
          },
          {
            qText: 'Which city has cool climate?',
            options: 'Bangalore, Chennai, Hyderabad, Vishakapatnam'
          }
        ]
      }
    },
    {
      id: 'reading-2',
      label: 'Famous Personalities',
      type: 'passage',
      data: {
        title: 'Famous Personalities',
        text: `Visvesvaraya was an Indian civil engineer. He was the chief engineer in building the Krishna Raja Sagara dam across the river Kaveri.  His birthday, 15 September, is celebrated as Engineer's Day.
Bidhan Chandra Roy's birthday, 1 July, is celebrated as the National Doctor's Day in India. He was an eminent Indian physician, educationist and former Chief Minister of West Bengal. 
Rabindranath Tagore was a famous Bengali poet. He won the Nobel Prize for Literature in 1913, for his book Gitanjali. He is also the author of our National Anthem. Our National Anthem is in Bengali language.
Mother Teresa was the first Indian citizen to receive the Nobel Prize, though she was not born in India. She came to Kolkata at the age of 18 with the mission of giving care to the poorest of the poor. She was given the Nobel Prize for Peace.`
      }
    },
    {
      id: 'drag-drop-10',
      label: 'Map - Cities ',
      type: 'dragAndDrop',
      data: {
        img: 'indiaOutline.jpg',
        title: 'Drag and drop the cities at appropriate places.',
        printTitle: 'Mark the below cities on the map.',
        width: 333,
        height: 433,
        wordWidth: 70,
        words: [
          {
            word: 'Mumbai',
            x: 40,
            y: 240
          },
          {
            word: 'Kolkata',
            x: 215,
            y: 210
          },
          {
            word: 'Hyderabad',
            x: 110,
            y: 280
          },
          {
            word: 'New Delhi',
            x: 100,
            y: 110
          },
          {
            word: 'Bhopal',
            x: 100,
            y: 210
          },
          {
            word: 'Srinagar',
            x: 76,
            y: 35
          },
          {
            word: 'Itanagar',
            x: 260,
            y: 136
          },
          {
            word: 'Chennai',
            x: 130,
            y: 340
          }
        ]
      }
    }
  ]
};
