export default {
  label: 'Air',
  id: 'air',
  list: [
    {
      id: '100',
      type: 'passage',
      label: 'Passage',
      data: {
        editable: true,
        title: 'Air - Introduction',
        text:
          'Air is a natural resource. We cannot live without it. It is present around us. It has no definite shape and colour. Air has weight and it occupies space. We cannot see air but it can be felt. Air can flow everywhere.\nPush an empty cup upside down into the water. Slowly turn the cup. You can see air bubbles coming out of the cup.\nTie a balloon to the mouth of a bottle. Keep the bottle in a vessel containing hot water. Observe it for some time. The balloon expands. Why? Due to the heat of the water in the vessel, air inside the bottle becomes hot. Hot air fills the balloon. Therefore the balloon expands.\n# Air has weight\nTake two balloons. Fill air in one balloon and keep the other balloon as it is. Make a measuring tool using a stick and tie the balloons on both the ends. Balloon filled with air is heavier than the empty balloon.\nLight an incense stick in the corner of the classroom and observe. The smoke of the incense stick moves everywhere. The air pushes the smoke.\nSee the clouds in the sky that moves everywhere. Clouds move because of the movement of air.\nElectricity is generated from wind with the help of the windmills.\nCan you remove a small plastic ball from a glass vessel without physically touching it? Yes, you can. If you blow towards one wall of the glass very hard and the ball will be ejected out of the glass.\n Take a plastic bottle and fit a soggy newspaper pellet tightly in its mouth. On pressing the bottle, the pellet will come out with a loud POP sound.\nMake a paper plane with waste paper and fly it in the air.\nLight a candle and place it on a table. Now cover the lightning candle with a glass jar. Observe what happens? The light will go off. Air is required for burning.\n All living things need air for their survival. Plants breathe through leaves and fish breathe through gills. Humans breathe in and breathe out through lungs.\n Inhalation is the process of taking the air inside and exhalation is the process of releasing the air outside. This cyclical process of inhalation and exhalation is called breathing. We take oxygen and release carbon dioxide gas while breathing.\nWhy the doctor checks your pulse when you are sick and ask you to breathe in and breathe out? When we breathe-in our chest raises up and when we breathe-out it lowers down.\nTake some sand in your hand and release the sand. It falls in the direction of the wind. Moving air is called wind. It moves across the surface of the Earth. Based on the speed of air, wind can be classified as breeze, storm and gale.\nSpeed of the wind is measured using an instrument called ‘Anemometer’.\n# Breeze\nA gentle wind is called breeze. Sea breeze and land breeze are the two types of breeze.\n #Sea breeze\n The breeze that blows from the sea towards the land during day time is known as sea breeze. As the warm air from the land rises up and the cold air from the sea occupies the space over the land.\n #Land breeze \n The breeze that blows from the land towards the sea during night time is known as land breeze. The warm air from the sea rises up, and so the cold air from the land moves towards the sea. \n #Storm \n Strong wind is called storm. Sometimes storm can uproot trees and can destroy the crops.\n # Gale \n A very strong wind is called gale. Gale is stronger than storm.'
      }
    },
    {
      label: 'Air',
      id: '200',
      type: 'matchByDragDrop',
      data: {
        isPractice: false,
        title: 'Drag and drop the words at proper places.',
        styles: {
          fontSize: '1rem',
          dashWidth: 80
        },
        text:
          "We inhale *oxygen* and exhale *carbon-dioxide*.  This cyclical process of inhalation and exhalation is called *breathing*. \n  The air present in Earth, is majorly made up of *nitrogen*. \n Air has *weight* but it doesn't have *shape*."
      }
    },
    {
      type: 'rightOne',
      id: '300',
      label: 'Odd One Out',
      data: {
        title: 'Pick the odd one out.',
        text:
          'water, wind, storm\nstone, kite, balloon\ncough, inhale, exhale\ncloud, day, night\nheart, nose, lungs'
      }
    },
    {
      id: '400',
      type: 'match',
      label: 'Match',
      data: {
        title: 'Match',
        text:
          'breathing, lungs\nwindmill, electricity\nGentle wind, Breeze\nStrong wind, Storm\nwind speed, Anemometer'
      }
    },
    {
      id: '500',
      label: 'True or False',
      type: 'classifySentence',
      data: {
        title: 'True or False',
        types: [
          {
            name: 'True',
            text:
              'Air is colourless.\nAir fills the empty space.\nA very strong wind is called gale.\nClouds move because of the movement of air.'
          },
          {
            name: 'False',
            text:
              'Air occupies space but has no weight.\nAir has definite shape.\nWe release oxygen during breathing.'
          }
        ]
      }
    },
    {
      id: '600',
      label: 'Choose the correct answer',
      type: 'mcq',
      data: {
        editable: true,
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: 'Which of the following is required for good health?',
            options: 'Clean air, Smoke, Dust '
          },
          {
            qText: 'Air has ______.',
            options: 'weight, shape, color'
          },
          {
            qText: '______ is used to measure the speed of wind.',
            options: 'Anemometer, Speedometer, Thermometer'
          },
          {
            qText: 'We inhale ______.',
            options: 'oxygen, carbon dioxide, nitrogen'
          },
          {
            qText: 'Very strong wind is called _______.',
            options: 'gale, storm, breeze'
          },
          {
            qText: 'Clouds move because of movement of _________.',
            options: 'air, sun, moon'
          }
        ]
      }
    }
  ]
};
