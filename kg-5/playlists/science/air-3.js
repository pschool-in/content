export default {
  id: 'air-3',
  label: 'Air',
  pdf: '',
  lockAfter: 4,
  list: [
    {
      id: 'notes',
      type: 'passage',
      label: 'Passage',
      data: {
        editable: true,
        title: 'Air - Introduction',
        text: `Air is a natural resource. We cannot live without it. It is present around us. It has no definite shape and colour. Air has weight and it occupies space. We cannot see air but it can be felt. Air can flow everywhere.
Push an empty cup upside down into the water. Slowly turn the cup. You can see air bubbles coming out of the cup.
Tie a balloon to the mouth of a bottle. Keep the bottle in a vessel containing hot water. Observe it for some time. The balloon expands. Why? Due to the heat of the water in the vessel, air inside the bottle becomes hot. Hot air fills the balloon. Therefore the balloon expands.
# Air has weight
Take two balloons. Fill air in one balloon and keep the other balloon as it is. Make a measuring tool using a stick and tie the balloons on both the ends. Balloon filled with air is heavier than the empty balloon.
Light an incense stick in the corner of the classroom and observe. The smoke of the incense stick moves everywhere. The air pushes the smoke.
See the clouds in the sky that moves everywhere. Clouds move because of the movement of air.
Electricity is generated from wind with the help of the windmills.
Can you remove a small plastic ball from a glass vessel without physically touching it? Yes, you can. If you blow towards one wall of the glass very hard and the ball will be ejected out of the glass.
 Take a plastic bottle and fit a soggy newspaper pellet tightly in its mouth. On pressing the bottle, the pellet will come out with a loud POP sound.
Make a paper plane with waste paper and fly it in the air.
Light a candle and place it on a table. Now cover the lightning candle with a glass jar. Observe what happens? The light will go off. Air is required for burning.
 All living things need air for their survival. Plants breathe through leaves and fish breathe through gills. Humans breathe in and breathe out through lungs.
 Inhalation is the process of taking the air inside and exhalation is the process of releasing the air outside. This cyclical process of inhalation and exhalation is called breathing. We take oxygen and release carbon dioxide gas while breathing.
Why the doctor checks your pulse when you are sick and ask you to breathe in and breathe out? When we breathe-in our chest raises up and when we breathe-out it lowers down.
Take some sand in your hand and release the sand. It falls in the direction of the wind. Moving air is called wind. It moves across the surface of the Earth. Based on the speed of air, wind can be classified as breeze, storm and gale.
Speed of the wind is measured using an instrument called ‘Anemometer’.
# Breeze
A gentle wind is called breeze. Sea breeze and land breeze are the two types of breeze.
 #Sea breeze
 The breeze that blows from the sea towards the land during day time is known as sea breeze. As the warm air from the land rises up and the cold air from the sea occupies the space over the land.
 #Land breeze 
 The breeze that blows from the land towards the sea during night time is known as land breeze. The warm air from the sea rises up, and so the cold air from the land moves towards the sea. 
 #Storm 
 Strong wind is called storm. Sometimes storm can uproot trees and can destroy the crops.
 # Gale 
 A very strong wind is called gale. Gale is stronger than storm.`
      }
    },
    {
      label: 'Air',
      id: 'drag-drop',
      type: 'matchByDragDrop',
      data: {
        isPractice: false,
        title: 'Drag and drop the words at proper places.',
        styles: {
          fontSize: '1rem',
          dashWidth: 80
        },
        text: `We inhale *oxygen* and exhale *carbon-dioxide*.  This cyclical process of inhalation and exhalation is called *breathing*. 
  The air present in Earth, is majorly made up of *nitrogen*. 
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
        text: `breathing, lungs
windmill, electricity
Gentle wind, Breeze
Strong wind, Storm
wind speed, Anemometer`
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
            text: `Air is colourless.
Air fills the empty space.
A very strong wind is called gale.
Clouds move because of the movement of air.`
          },
          {
            name: 'False',
            text: `Air occupies space but has no weight.
Air has definite shape.
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
    },
    {
      label: 'Our Need for Air - Reading',
      type: 'passage',
      id: 'notes-2',
      data: {
        title: 'Our Need for Air',
        text: `Air is all around us, even though we cannot see it. But we are able to feel air. Air does not have colour, smell, or taste.
We need air to breathe. Inhalation and exhalation are together called breathing. We breathe continuously and this process is called respiration.
We need air for our body to function properly. It also makes us feel fresh and lively. We require air to produce the energy that we need to do all our works.`
      }
    },
    {
      label: 'Drag and Drop - Air',
      type: 'matchByDragDrop',
      id: 'drag-drop-2',
      data: {
        isPractice: false,
        title: 'Drag and drop the given words at the right blanks.',
        styles: {
          fontSize: '1.3rem',
          dashWidth: 80
        },
        text: `As *breathing* goes on continuously, a sleeping man’s chest can be seen going up and down.
          There is *air* all around us.
          Like us, all living things *need* air.
          We can *feel* air although we cannot *see* it.
          Air does not have *colour*, smell or taste.`
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
            text: `Air is all around us.
              We cannot see air.
              We can feel air.
              Air is colourless.
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
      label: 'Drag and Drop - Breathing',
      type: 'matchByDragDrop',
      id: '300',
      data: {
        isPractice: false,
        title: 'Drag and drop the given words at the right blanks.',
        styles: {
          fontSize: '1.3rem',
          dashWidth: 80
        },
        text: `We breathe in air through our nose - *inhalation*.
          We breathe out air through the nose - *exhalation*.
          Inhalation and exhalation are together called - *breathing*.
          We breathe continuously - *respiration*.`
      }
    }
  ]
};
