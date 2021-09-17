export default {
    id: 'surroundings-3',
    label: 'Surroundings-3',
    pdf: '',
    lockAfter: 4,
    list: [
      {
        label: 'Sancuaries - Reading',
        type: 'passage',
        id: '100',
        data: {
          title: 'Sancuaries',
          text: `# What are Sanctuaries?

          Sanctuary is a place, where animals and birds are brought together. It is protected from hunting and other harmful human activities. They can lead a peaceful life with a good ecosystem. Sanctuaries are run by the government. Our government also runs the biosphere reserve, where they conserve plants, wild animals, and birds. The flora and fauna are maintained in the biosphere reserves, national parks, sanctuaries, etc. Moreover, there are many national parks, where our government is taking care of rare and many diverse species. For example, Jim Corbett National Park is known for Bengal tigers. The conservation efforts created a huge impact in saving wild animals. Many wild animal populations which had once decreased have once again started to increase in India.`
        }
      },
      {
        label: 'Wildlife Sancuaries Vs National Parks',
        id: '300',
        type: 'group',
        data: {
          title:
            'Classify the below things based on the category of Wildlife Sanctuaries and National Parks in India.',
          types: [
            {
              name: 'Wildlife Sanctuaries',
              text: 'Govind, Mudumalai, Periyar, Bharatpur'
            },
            {
              name: 'National Parks',
              text: ' Anamudi Shola, Anshi, Balphakram, Betla'
            }
          ]
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
          text: `Vendanthangal Sanctuary is famous for *birds*.
          Bannerghatta Biological Park is situated in *Karnataka*.
          The Acharya Jagadish Chandra Bose Indian Botanic Garden is situated in *West Bengal*.
          *Manas National park* is a biosphere reserve situated in Assam.
          *Wildlife Sanctuary* is established to protect wild animals and birds.`
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
              In Vedanthangal Bird Sanctuary, birds migrate from different countries of the world.`
            },
            {
              name: 'False',
              text: `Nilgiri Biosphere Reserve is only for elephants.
              Gulf of Mannar Biosphere Reserve is located in Madhya Pradesh.`
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
          Anamudi, Elephants
          Gir Park, Lions
          Bandipur, Tigers
          Botanical Garden, Flora`,
          title: 'Match the following'
        }
      },
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
      {
        label: 'Choose the best Answer ',
        id: '1000',
        type: 'mcq',
        data: {
          title: 'Multiple Choice Questions',
          questions: [
            {
              qText: ' Kaziranga National Park is famous for _____________.',
              options: 'One horned rhinoceros, Elephants, Tigers, Lions'
            },
            {
              qText:
                'Vedanthangal Bird Sanctuary is located in _____________',
              options: 'Tamil Nadu, Madhya Pradesh, Goa, West Bengal'
            },
            {
              qText: 'Gir National Park is famous for ________',
              options: 'Asiatic Lions, Asiatic Tigers, Asiatic Giraffes, Asiatic Elephants'
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
      }
    ]
  };
