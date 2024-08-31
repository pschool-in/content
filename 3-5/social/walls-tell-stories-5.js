export default {
  id: 'walls-tell-stories-5',
  label: 'Walls Tell Stories',
  lockAfter: 2,
  list: [
    {
      id: 'mcq',
      label: 'Multiple Choice Questions',
      type: 'mcq',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: `What does a map don't show?`,
            options:
              'Height of buildings, Direction, Distance between places, Importantant Places'
          },
          {
            qText: 'Which tool was not used in olden times?',
            options: 'screw driver, chisel, hammer, rope'
          },
          {
            qText: 'In which city Golconda Fort is present?',
            options: 'Hyderabad, Chennai, Mysore, Delhi'
          },
          {
            qText: 'Who was the Mughal empire attacked Golconda Fort?',
            options: 'Aurangzeb, Akbar, Babar, Shahjahan'
          },
          {
            qText: 'We can find the things used in olden times in  ______.',
            options: 'a museum, a theme park, an old fort, a library'
          },
          {
            qText: 'Which of the following cannot be found in a museum?',
            options: 'plastic jug, pots, jewellery, swords'
          },
          {
            qText: 'What is the important feature of a fort?',
            options:
              'Provides protection, Storehouse of wealth, Place of worship, Place of entertainment'
          },
          {
            qText: 'Water was lifted in the olden days with the help of ____.',
            options: 'bullocks, cows, horses, dogs'
          },
          {
            qText: 'Forts were usually built using _____.',
            options: 'rocks, iron, bricks, cement'
          },
          {
            qText: 'In olden days, maps helped people in ____.',
            options: 'travelling, education, trading, wars'
          }
        ]
      }
    },
    {
      label: 'True or False',
      id: 'truefalse',
      type: 'classifySentence',
      data: {
        types: [
          {
            name: 'True',
            text: `We should not write our names in the walls of old monuments. | We should protect and should not damage the old monuments.
            Maps were present even in the olden times. | People used maps even in the olden times. They may not be accurate as satellite generated maps, but they were helping people in travelling.
            `
          },
          {
            name: 'False',
            text: `In Golcando Fort, no pipes are used to get water. | They used pipes made of clay, which can be seen even today. 
            Coins used in the olden times are useless in our todays world. | Old coins are highly valuable. It is considered as a treasure.
            Maps don't show direction. | Maps do show directions. People find the direction with the help of the Sun's movement over the sky.`
          }
        ]
      }
    },
    {
      type: 'match',
      label: 'Match: Map on Scale ',
      id: 'match',
      data: {
        title:
          'On a map, 1 cm = 150 m. Match the distance on map (left) with real distance (right)',
        text: `5 cm, 750 m
        3 cm, 450 m
        7 cm, 1050 m
        10 cm, 1500 m
        2 cm, 300 m`
      }
    }
  ]
};
