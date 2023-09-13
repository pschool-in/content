export default {
  label: 'General Knowledge',
  id: 'gk-3',
  img: 'gk',
  grade: '2-5',
  list: [
    {
      id: 'notes',
      type: 'slides2',
      label: `Leaders`,
      commonData: {
        title: `Leaders`,
        displayType: 'steps',
        images: 'img/social/leaders'
      },
      data: [
        {
          audio: 'gk/leaders.mp3',
          audioOffsets: [10, 18, 30, 39.5, 46, 58],
          autoPlay: false,
          steps: [
            {
              text: 'Mahatma Gandhi is called the father of our nation. He led the country in our Freedom Struggle.',
              img: 'MahatmaGandhi'
            },
            {
              text: 'Jawaharlal Nehru was a freedom fighter and the first Prime Minister of India.',
              img: 'Nehru'
            },
            {
              text: 'Sardar Vallabhbhai Patel was a freedom fighter and the first Home Minister of India. He is known as Iron Man of India.',
              img: 'VallabhbhaiPatel'
            },
            {
              text: 'Ambedkar was the first law minister of India. He headed the committee that wrote the constitution of India.',
              img: 'Ambedkar'
            },
            {
              text: 'Rajendra Prasad was a freedom fighter and the first President of India.',
              img: 'RajendraPrasad'
            },
            {
              text: 'Subhas Chandra Bose is widely called as Netaji. He was a freedom fighter and found Indian National Army before independence.',
              img: 'SubhasChandraBose'
            }
          ]
        },
        {
          audio: 'gk/leaders-2.mp3',
          audioOffsets: [8, 16.5, 28.5, 40.5, 46.5, 52],
          autoPlay: false,
          steps: [
            {
              text: 'Abdul Kalam was an aerospace scientist. He is known as Missile Man of India. ',
              img: 'Kalam'
            },
            {
              text: 'Rabindranath Tagore was a famous bengali poet. He is the author of our National Anthem.',
              img: 'Tagore'
            },
            {
              text: 'Swami Vivekananda was a social reformer and philosopher. His birthday (12th Jan) is celebrated as National Youth Day.',
              img: 'SwamiVivekananda'
            },
            {
              text: 'Mother Teresa founded the Missionaries of Charity and helped the homeless and sick people. She was given the Nobel Prize for Peace.',
              img: 'MotherTeresa'
            },
            {
              text: 'Atal Bihari Vajpayee was a former Prime Minister of India.',
              img: 'Vajpayee'
            },
            {
              text: 'Indira Gandhi was the first Woman Prime Minister of India.',
              img: 'IndiraGandhi'
            }
          ]
        },
        {
          steps: [
            {
              text: 'Vikram Sarabhai is an Astronomer and regarded as the Father of Indian Space Program.',
              img: 'VikramSarabhai'
            },
            {
              text: 'Sir C.V. Raman was an Indian Physicist who studied on light scattering. He won the Nobel Prize in Physics in 1930.',
              img: 'CVRaman'
            },
            {
              text: 'Bhagat Singh was a hero of the Indian Freedom movement. He was an Indian socialist and a revolutionary.',
              img: 'BhagatSingh'
            },
            {
              text: 'Dhyan Chand was one of the greatest Indian hockey player. His birthday, 29th August, is celebrated as National Sports Day. He helped India earn 3 Olympic gold medals.',
              img: 'DhyanChand'
            },
            {
              text: 'C. Subramaniya Bharathi was a Tamil poet, freedom fighter,social reformer and a journalist.',
              img: 'Bharathi'
            },
            {
              text: 'Srinivasa Ramanujam is considered to be one of the most talented mathematicians in recent history. His birthday December 22, is celebrated as National Mathematics Day.',
              img: 'Ramanujam'
            }
          ]
        }
      ]
    },
    {
      type: 'dragDropImgLabel',
      label: 'Drag and Drop',
      id: 'drag-drop-leaders',
      commonData: {
        title: 'Drag the names and drop on the images.',
        path: 'img/social/leaders'
      },
      data: [
        `MahatmaGandhi | Mahatma Gandhi
Nehru | Jawaharlal Nehru
VallabhbhaiPatel | Sardar Vallabhbhai Patel
Ambedkar | Ambedkar
RajendraPrasad | Rajendra Prasad
SubhasChandraBose | Subhas Chandra Bose`,

        `Kalam | Abdul Kalam
Tagore | Rabindranath Tagore
SwamiVivekananda | Swami Vivekananda
MotherTeresa | Mother Teresa
Vajpayee | Atal Bihari Vajpayee
IndiraGandhi | Indira Gandhi`,

        `VikramSarabhai | Vikram Sarabhai
CVRaman | C.V. Raman
BhagatSingh | Bhagat Singh
DhyanChand | Dhyan Chand
Bharathi | Subramaniya Bharathi
Ramanujam | Srinivasa Ramanujam`
      ]
    },
    {
      label: 'Choose the best Answer',
      id: 'mcq-leaders',
      type: 'mcq',
      commonData: {
        optionImages: 'social/leaders'
      },
      data: [
        {
          questions: [
            {
              qText: 'Who was given the Nobel Prize for Peace?',
              options: 'MotherTeresa, Vajpayee, SwamiVivekananda, Tagore'
            },
            {
              qText: 'Whose birthday is celebrated as National Youth Day?',
              options: 'SwamiVivekananda, VallabhbhaiPatel, Ambedkar, Nehru'
            },
            {
              qText: 'Who is called the father of our nation?',
              options:
                'MahatmaGandhi, Nehru, SubhasChandraBose, VallabhbhaiPatel'
            },
            {
              qText: 'Who was the first President of India?',
              options: 'RajendraPrasad, Kalam, Vajpayee, Nehru'
            },
            {
              qText: 'Who was the first Prime Minister of India?',
              options: 'Nehru, SubhasChandraBose, VallabhbhaiPatel, Vajpayee'
            }
          ]
        },
        {
          questions: [
            {
              qText: 'Who is called the Missile Man of India?',
              options: 'Kalam, Vajpayee, MotherTeresa, Nehru'
            },
            {
              qText: 'Who is called the Iron Man of India?',
              options: 'VallabhbhaiPatel, Vajpayee, Ambedkar, RajendraPrasad'
            },
            {
              qText:
                'Who headed the committee that wrote the constitution of India?',
              options: 'Ambedkar, MotherTeresa, IndiraGandhi, Nehru'
            },
            {
              qText: 'Who is called the Netaji?',
              options:
                'SubhasChandraBose, IndiraGandhi, Ambedkar, RajendraPrasad'
            },
            {
              qText: 'Who wrote our National Anthem?',
              options: 'Tagore, MotherTeresa, IndiraGandhi, Nehru'
            }
          ]
        },
        {
          questions: [
            {
              qText: 'Who received a Nobel Prize?',
              options: 'CVRaman, DhyanChand, Bharathi, Ramanujam'
            },
            {
              qText: 'Who helped India in winning Olympic medals?',
              options: 'DhyanChand, Ramanujam, BhagatSingh, VikramSarabhai'
            },
            {
              qText: 'Who is the revolutionary freedom fighter of India?',
              options: 'BhagatSingh, CVRaman, DhyanChand, Ramanujam'
            },
            {
              qText: 'Who is the famous mathematician?',
              options: 'Ramanujam, Bharathi, CVRaman, VikramSarabhai'
            },
            {
              qText: 'Who is the famous tamil poet?',
              options: 'Bharathi, Tagore, Ramanujam, CVRaman'
            }
          ]
        }
      ]
    },
    {
      id: 'reading',
      type: 'passage',
      style: 'big',
      label: 'World: Largest, Tallest, Longest',
      data: {
        title: 'World: Largest, Tallest, Longest, Smallest etc',
        text: [
          `# Largest...`,
          {
            type: 'hilight',
            text: `Continent − Asia
Ocean − Pacific
River  − Amazon
Desert − Sahara
Peninsula − Arabian 
Forest − Amazon Rain Forest
Island − Greenland
Country (area) − Russia
Country (population) − China
City (population) − Tokyo
Animal − Blue Whale
Animal (land) − Elephant
Bird − Ostrich
Sea Bird − Albatross`
          },
          `# Tallest...`,
          {
            type: 'hilight',
            text: `Animal − Giraffe
Building − Burj Khalifa
Mountain Peak − Everest
Mountain Range − Himalayas
WaterFalls − Angel Falls
Statue − Statue of Unity`
          },
          `# Longest...`,
          {
            type: 'hilight',
            text: `River − Nile
Bone − Femur
Railway − Trans-Siberian Railway
Railway Platform − Hubli, Karnataka 
River Dam − Hirakud Dam
Wall − Great Wall of China`
          },
          `# Smallest...`,
          {
            type: 'hilight',
            text: `Bird − Humming Bird
Continent − Australia
Planet − Mercury
Country − Vatican City
Ocean − Arctic Ocean`
          },
          `# More`,
          {
            type: 'hilight',
            text: `Fastest bird − Peregrine Falcon
Fastest animal − Cheetah
Hardest metal − Tungsten
Brightest Planet − Venus`
          }
        ]
      }
    },
    {
      id: 'mcq',
      label: 'Multiple Choice Questions',
      type: 'mcq',
      lockAfter: 1,
      commonData: {
        title: 'Multiple Choice Questions'
      },
      data: [
        {
          questions: [
            {
              qText: 'What is the tallest statue in the world?',
              options: 'Statue of Unity, Statue of Liberty, Statue of Diversity'
            },
            {
              qText: 'What is the tallest waterfall in the world?',
              options: 'Angel Falls, Niagara Falls, Jog Falls'
            },
            {
              qText: 'What is the longest bone in our human body?',
              options: 'Femur, Leg Bone, Back Bone, Ribs'
            },
            {
              qText: 'What is the longest river in the world?',
              options: 'Nile, Amazon, Brahmaputra'
            },
            {
              qText: 'Where is the longest railway platform present?',
              options: 'Hubli, Jaipur, New Delhi, Siberia'
            }
          ]
        },
        {
          questions: [
            {
              qText: 'What is the highly populated country?',
              options: 'China, Russia, India, England'
            },
            {
              qText: 'What is the longest wall?',
              options:
                'Great wall of China, Great wall of America, Great wall of India'
            },
            {
              qText: 'What is the smallest planet in our Solar System?',
              options: 'Mercury, Venus, Pluto'
            },
            {
              qText: 'What is the biggest animal?',
              options: 'Blue Whale, Shark, Elephant, Giraffe'
            },
            {
              qText: 'What is the biggest bird?',
              options: 'Ostrich, Albatross, Falcon, Humming Bird'
            }
          ]
        },
        {
          questions: [
            {
              qText: 'What is the biggest desert?',
              options: 'Sahara Desert, Thar Desert, Gobi Desert '
            },
            {
              qText: 'What is the highest mountain range in the world?',
              options: 'Himalayas, Everest, Alps'
            },
            {
              qText: 'What is the smallest ocean?',
              options: 'Arctic Ocean, Southern Ocean, Indian Ocean'
            },
            {
              qText: 'What is the hardest metal?',
              options: 'Tungsten, Copper, Iron, Gold'
            },
            {
              qText: 'What is the smallest continent?',
              options: 'Australia, Asia, South America'
            }
          ]
        }
      ]
    },
    {
      type: 'match',
      label: 'Match',
      id: 'match',
      lockAfter: 1,
      commonData: {
        title: 'Match the following',
        fontSize: '1.2rem'
      },
      data: [
        `Largest Continent, Asia
Smallest Continent, Australia 
Largest Country, Russia 
Smallest Country, Vatican City
Largest Ocean , Pacific 
Smallest Ocean , Arctic`,

        `Largest Bird, Ostrich
Largest sea Bird, Albatross
Smallest Bird , Humming Bird
Fastest bird, Peregrine Falcon
Tallest Animal, Giraffe
Largest Animal, Blue Whale`,

        `Tallest Peak,  Everest
Tallest Mountain Range, Himalayas
Tallest Building, Burj Khalifa
Largely Populated city, Tokyo
Smallest Country, Vatican City
Largest Island, Greenland`
      ]
    },
    {
      type: 'completeWord',
      label: 'Answer It',
      id: 'complete',
      lockAfter: 1,
      commonData: {
        title: 'Type the right answer.'
      },
      data: [
        `Largest Continent| Asia
Largest Animal| Blue Whale| ____ _____
Largest animal living in land| Elephant
Largest desert in the world| Sahara
Largest Island| Greenland
Fastest Animal| Cheetah`,

        `Largest Sea Bird| Albatross
Tallest Animal| Giraffe
Tallest Building| Burj Khalifa| ____ K______
Tallest Mountain Peak| Everest
Tallest Mountain Range| Himalayas
Fastest bird is Peregrine _____| Falcon`,

        `Largest River| Amazon
Longest River| Nile
Largest Ocean| Pacific
Largest Country by area| Russia
Largest Country by population | China
Hardest Metal| tungsten`,

        `Largest Peninsula| Arabian 
Tallest Waterfall| Angel 
Smallest Ocean| Arctic 
Smallest Planet| Mercury
Smallest Bird|	Humming Bird| _______ ____`,

        `Brightest Planet| venus
Largest Forest is ______ Rain Forest. | Amazon
Longest Human Bone| Femur
Longest Railway Platform| Hubli 
Smallest Country| Vatican City| _______ ____`
      ]
    }
  ]
};
