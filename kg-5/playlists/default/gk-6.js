export default {
  label: 'General Knowledge',
  id: 'gk-6',
  img: 'gk',
  grade: '6-8',
  list: [
    {
      type: 'slides',
      id: 'slide-flags',
      label: 'Flags',
      commonData: {
        baseFolder: 'social/flags/',
        title: 'Observe the different flags.'
      },
      data: [
        {
          text: `india | India
usa | United States of America
uk | United Kingdom
australia | Australia
canada | Canada
mexico | Mexico
russia | Russia
china | China
japan | Japan
cuba | Cuba`
        },
        {
          text: `france | France
germany | Germany
italy | Italy
egypt | Egypt
iran | Iran
saudi | Saudi Arabia
spain | Spain
sweden | Sweden
turkey | Turkey
south-africa | South Africa`
        },
        {
          text: `argentina | Argentina
brazil | Brazil
bangladesh | Bangladesh
indonesia | Indonesia
thailand | Thailand
srilanka | Srilanka
malaysia | Malaysia
pakistan | Pakistan
ghana | Ghana
nigeria | Nigeria`
        },

        {
          text: `olympic | Olympic
scout | Scouts & Guides
unicef | UNICEF
uno | UNO`
        }
      ]
    },
    {
      type: 'dragDropImgLabel',
      label: 'Match Flags',
      id: 'flags-match',
      commonData: {
        title: 'Drag and drop the labels to the respective flags.',
        path: 'img/social/flags'
      },
      data: [
        `india | India
usa | U S A
uk | United Kingdom
australia | Australia
canada | Canada
mexico | Mexico`,

        `russia | Russia
china | China
japan | Japan
cuba | Cuba
france | France
germany | Germany`,

        `italy | Italy
egypt | Egypt
iran | Iran
saudi | Saudi Arabia
spain | Spain
sweden | Sweden`,

        `turkey | Turkey
south-africa | South Africa
argentina | Argentina
brazil | Brazil
bangladesh | Bangladesh
indonesia | Indonesia`,

        `thailand | Thailand
srilanka | Srilanka
malaysia | Malaysia
pakistan | Pakistan
ghana | Ghana
nigeria | Nigeria`,

        `olympic | Olympic
scout | Scouts
unicef | UNICEF
uno | UNO`
      ]
    },
    {
      label: 'Choose the best Answer',
      id: 'mcq',
      type: 'mcq',
      commonData: {},
      data: [
        {
          questions: [
            {
              qText: 'Which of the following is the flag of China?',
              optionImages: 'social/flags',
              options: 'china, japan, turkey, pakistan'
            },
            {
              qText: 'Which country the below flag represents?',
              qImg: 'social/flags/malaysia',
              options: 'Malaysia, USA, Australia, South Africa'
            },
            {
              qText: 'Which country the below flag represents?',
              qImg: 'social/flags/nigeria',
              options: 'Nigeria, Egypt, Indonesia, Canada'
            },
            {
              qText: 'Which country the below flag represents?',
              qImg: 'social/flags/japan',
              options: 'Japan, Bangladesh, Brazil, Cuba'
            },
            {
              qText: 'Which of the following is the flag of Argentina?',
              optionImages: 'social/flags',
              options: 'argentina, brazil, thailand, sweden'
            }
          ]
        },
        {
          questions: [
            {
              qText: 'Which of the following is the flag of United Kingdom?',
              optionImages: 'social/flags',
              options: 'uk, usa, south-africa, spain'
            },
            {
              qText: 'Which country the below flag represents?',
              qImg: 'social/flags/south-africa',
              options: 'South Africa, Russia, Canada, Brazil'
            },
            {
              qText: 'Which country the below flag represents?',
              qImg: 'social/flags/canada',
              options: 'Canada, Nigeria, Egypt, Indonesia'
            },
            {
              qText: 'Which country the below flag represents?',
              qImg: 'social/flags/brazil',
              options: 'Brazil, Japan, Bangladesh, Cuba'
            },
            {
              qText: 'Which of the following is the flag of Russia?',
              optionImages: 'social/flags',
              options: 'russia, argentina, brazil, thailand'
            }
          ]
        },
        {
          questions: [
            {
              qText: 'Which country the below flag represents?',
              qImg: 'social/flags/srilanka',
              options: 'Srilanka, Spain, Thailand, Pakistan'
            },
            {
              qText: 'Which organization the below flag represents?',
              qImg: 'social/flags/unicef',
              options: 'UNICEF, UNO, WHO, World Bank'
            },
            {
              qText: 'Which country the below flag represents?',
              qImg: 'social/flags/sweden',
              options: 'Sweden, Italy, France, Germany'
            },
            {
              qText: 'Which country the below flag represents?',
              qImg: 'social/flags/saudi',
              options: 'Saudi Arabia, Iran, Pakistan, Bangladesh'
            },
            {
              qText: 'Which country the below flag represents?',
              qImg: 'social/flags/germany',
              options: 'Germany, Sweden, Italy, France'
            }
          ]
        }
      ]
    },
    {
      type: 'slides',
      id: 'slide-monuments',
      label: 'India - Monuments',
      commonData: {
        baseFolder: 'social/india-monuments/',
        title: 'Observe the different Monuments in India.'
      },
      data: [
        {
          text: `indiagate | India Gate
redfort | Red Fort
qutub-minor | Qutub Minor 
tajmahal | Taj Mahal
amber-palace | Amber Palace
ajanta-caves | Ajanta Caves`
        },
        {
          text: `puri | Puri Temple
tanjore | Tanjore Temple
mamallapuram | Mamallapuram
charminar | Charminar
golden-temple | Golden Temple
gateway-india | Gateway of India`
        }
      ]
    },
    {
      type: 'dragDropImgLabel',
      label: 'Match Monuments',
      id: 'monuments-match',
      commonData: {
        title: 'Drag and drop the labels to the respective images.',
        path: 'img/social/india-monuments'
      },
      data: [
        `indiagate | India Gate
redfort | Red Fort
qutub-minor | Qutub Minor 
tajmahal | Taj Mahal
amber-palace | Amber Palace
ajanta-caves | Ajanta Caves`,

        `puri | Puri Temple
tanjore | Tanjore Temple
mamallapuram | Mamallapuram
charminar | Charminar
golden-temple | Golden Temple
gateway-india | Gateway of India`
      ]
    },
    {
      label: 'Choose the best Answer',
      id: 'mcq-monuments',
      type: 'mcq',
      data: {
        questions: [
          {
            qText: 'Which of the following is the Gateway of India?',
            optionImages: 'social/india-monuments',
            options: 'gateway-india, charminar, redfort, indiagate'
          },
          {
            qText: 'What is this monument?',
            qImg: 'social/india-monuments/puri',
            options: 'Puri Temple, Tanjore Temple, Mamallapuram'
          },
          {
            qText: 'What is this monument?',
            qImg: 'social/india-monuments/amber-palace',
            options: 'Amber Palace, Charminar, Golden Temple'
          },
          {
            qText: 'What is this monument?',
            qImg: 'social/india-monuments/mamallapuram',
            options: 'Mamallapuram, Ajanta Caves, Tanjore Temple'
          },
          {
            qText: 'Which of the following is Red Fort?',
            optionImages: 'social/india-monuments',
            options: 'redfort, gateway-india, charminar, amber-palace'
          }
        ]
      }
    }
  ]
};
