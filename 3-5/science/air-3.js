export default {
  id: 'air-3',
  label: 'Air',
  pdf: '',
  lockAfter: 2,
  list: [
    {
      id: 'notes',
      type: 'passage',
      label: 'Passage',
      data: {
        title: 'Air - Introduction',
        text: `Air is a natural resource. We cannot live without it. It is present around us. It has no definite shape or color. Air has weight and it occupies space. We cannot see air but it can be felt. Air can flow everywhere.
Push an empty cup upside down into the water. Slowly turn the cup. You can see air bubbles coming out of the cup.
Tie a balloon to the mouth of a bottle. Keep the bottle in a vessel containing hot water. Observe it for some time. The balloon expands. Why? Due to the heat of the water in the vessel, the air inside the bottle becomes hot. Hot air fills the balloon. Therefore the balloon expands.
# Air has weight
Take two balloons. Fill the air in one balloon and keep the other balloon as it is. Make a measuring tool using a stick and tie the balloons on both ends. A balloon filled with air is heavier than an empty balloon.
Light an incense stick in the corner of the classroom and observe. The smoke of the incense stick moves everywhere. The air pushes the smoke.
See the clouds in the sky that move everywhere. Clouds move because of the movement of air.
Electricity is generated from the wind with the help of the windmills.
Can you remove a small plastic ball from a glass vessel without physically touching it? Yes, you can. If you blow towards one wall of the glass very hard the ball will be ejected out of the glass.
Take a plastic bottle and fit a soggy newspaper pellet tightly in its mouth. On pressing the bottle, the pellet will come out with a loud POP sound.
Make a paper plane with waste paper and fly it in the air.
Light a candle and place it on a table. Now cover the lightning candle with a glass jar. Observe what happens. The light will go off. Air is required for burning.
All living things need air for their survival. Plants breathe through leaves and fish breathe through gills. Humans breathe in and breathe out through the lungs.
Inhalation is the process of taking the air inside and exhalation is the process of releasing the air outside. This cyclical process of inhalation and exhalation is called breathing. We take oxygen and release carbon dioxide gas while breathing.
Why does the doctor check your pulse when you are sick and ask you to breathe in and breathe out? When we breathe in our chest raises and when we breathe out it lowers down.
Take some sand in your hand and release the sand. It falls in the direction of the wind. Moving air is called wind. It moves across the surface of the Earth. Based on the speed of air, wind can be classified as breeze, storm or gale.
The speed of the wind is measured using an instrument called an 'Anemometer'.
# Breeze
A gentle wind is called a breeze. Sea breeze and land breeze are the two types of breeze.
# Sea breeze
The breeze that blows from the sea towards the land during the daytime is known as the sea breeze. As the warm air from the land rises and the cold air from the sea occupies the space over the land.
# Land breeze 
The breeze that blows from the land towards the sea during nighttime is known as the land breeze. The warm air from the sea rises, and so the cold air from the land moves towards the sea. 
# Storm 
A strong wind is called a storm. Sometimes storms can uproot trees and destroy crops.
# Gale 
A very strong wind is called a gale. Gale is stronger than a storm.`
      }
    },
    {
      label: 'Air',
      id: 'drag-drop',
      type: 'matchByDragDrop',
      data: {
        styles: {
          fontSize: '1rem',
          dashWidth: 80
        },
        text: `We inhale *oxygen* and exhale *carbon-dioxide*. This cyclical process of inhalation and exhalation is called *breathing*. 
The air present on Earth is majorly made up of *nitrogen*. 
Air has *weight* but it doesn't have *shape*.`
      }
    },
    {
      type: 'rightOne',
      id: 'odd-one',
      label: 'Odd One Out',
      data: {
        title: 'Pick the odd one out.',
        text: `water, wind, storm
stone, kite, balloon
cough, inhale, exhale
cloud, day, night
heart, nose, lungs`
      }
    },
    {
      id: 'match',
      type: 'match',
      label: 'Match',
      data: {
        title: 'Match',
        text: `Breathing, Lungs
Windmill, Electricity
Gentle wind, Breeze
Strong wind, Storm
Wind speed, Anemometer`
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
            text: `Air is colorless.
Air fills the empty space.
A very strong wind is called a gale.
Clouds move because of the movement of air.`
          },
          {
            name: 'False',
            text: `Air occupies space but has no weight.
Air has a definite shape.
We release oxygen during breathing.`
          }
        ]
      }
    },
    {
      id: 'mcq',
      label: 'Choose the correct answer',
      type: 'mcq',
      data: {
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
            qText: '______ is used to measure the speed of the wind.',
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
    },
    {
      label: 'Our Need for Air - Reading',
      type: 'passage',
      id: 'notes-2',
      data: {
        title: 'Our Need for Air',
        text: `Air is all around us, even though we cannot see it. But we can feel the air. Air does not have color, smell, or taste.
We need air to breathe. Inhalation and exhalation are together called breathing. We breathe continuously and this process is called respiration.
We need air for our bodies to function properly. It also makes us feel fresh and lively. We require air to produce the energy that we need to do all our work.`
      }
    },
    {
      label: 'Drag and Drop - Air',
      type: 'matchByDragDrop',
      id: 'drag-drop-2',
      data: {
        styles: {
          fontSize: '1.3rem',
          dashWidth: 80
        },
        text: `As *breathing* goes on continuously, a sleeping man's chest can be seen going up and down.
There is *air* all around us.
Like us, all living things *need* air.
We can *feel* air although we cannot *see* it.
Air does not have *color*, smell or taste.`
      }
    },
    {
      label: 'True or False',
      id: 'true-false-2',
      type: 'classifySentence',
      data: {
        title: 'Classify the below sentences as true and false',
        types: [
          {
            name: 'True',
            text: `Air is all around us.
We cannot see air.
We can feel the air.
Air is colorless.
Air does not have smell or taste.`
          },
          {
            name: 'False',
            text: `Air makes us feel dull.
We do not require air to function properly.`
          }
        ]
      }
    },
    {
      label: 'Complete Word - Breathing',
      type: 'completeWord',
      id: 'drag-drop-3',
      data: {
        text: `The process by which we breathe in air through our nose.| INHALATION| I_H__A_I__
The process by which we breathe out air through the nose.|EXHALATION| E_H__A_I__
Inhalation and exhalation are together called ________.|BREATHING| B___T___G
The process by which we breathe continuously is called ________.|RESPIRATION|R__P_R___O_`
      }
    }
  ]
};
