export default {
  label: 'Human Body',
  id: 'humanbody-2',
  list: [
    {
      label: 'Bones and Joints',
      type: 'passage',
      id: 'notes',
      data: {
        title: 'Humanbody',
        text: `Our bones help us stand up straight and give us shape.
        Without our bones, we would be having no shape.
        The place where two or more bones meet is called a joint. We have to bend our body to do many activities. This is made possible by the joints.
        Some of the common joints are wrist, elbow, shoulder, knee, ankle.`
      }
    },
    {
      type: 'dragDropImgLabel',
      label: 'Joints in our Body',
      id: 'monuments',
      data: {
        title: 'Drag the names and drop on the images.',
        path: 'img/science/kg-2',
        text: `wrist | Wrist
elbow | Elbow
knee | Knee
ankle | Ankle
shoulder | Shoulder`
      }
    },
    {
      id: 'drag-drop',
      label: 'Food Sense',
      type: 'dragAndDrop',
      data: {
        img: 'food-sense.jpg',
        title: 'Drag and drop the sense organs we use to detect a quality.',
        width: 350,
        height: 350,
        wordWidth: 80,
        fontSize: '1.2rem',
        words: [
          {
            word: 'Eyes',
            x: 0,
            y: 20
          },
          {
            word: 'Skin',
            x: 0,
            y: 290
          },
          {
            word: 'Ear',
            x: 270,
            y: 25
          },
          {
            word: 'Tongue',
            x: 270,
            y: 290
          }
        ]
      }
    },
    {
      label: 'Human Body - Reading',
      type: 'passage',
      data: {
        title: 'Humanbody',
        text: `# External body parts 
External organs are the body parts that we can see outside. Like eyes, ears, nose, hands, legs, mouth, fingers, shoulders, etc.
# Functions of External Body Parts
1. Eyes help us to see things, to read, to watch T.V, etc.
2. Ears help us to hear different sounds.
3. Nose helps us to smell.
4. Mouth helps us to eat food.
5. Hands help us to write, to hold things, etc.
6. Legs help us to walk, to run, to jump, etc.
7. Fingers help us to turn pages, to hold things, etc.
# Sense Organs
Our senses work together to tell us about the world we live in. We have five sense organs. They are eyes, nose, ears, tongue and skin.
`
      },
      id: 'passage'
    },
    {
      label: 'External vs Internal',
      type: 'group',
      id: 'external-internal',
      data: {
        title: 'Classify as internal or external organs',
        types: [
          {
            name: 'External',
            text: 'legs, arms, head, nose, ears'
          },
          {
            name: 'Internal',
            text: 'heart, brain, stomach, lungs'
          }
        ]
      }
    },
    {
      id: 'true-false',
      label: 'True or False',
      type: 'classifySentence',
      data: {
        title: 'Classify the sentences as true and false',
        types: [
          {
            name: 'True',
            text: `Eyes help us to see.
Fingers help us to hold things.
We can sense the temperature through fingers.`
          },
          {
            name: 'False',
            text: `Ears help us to smell things.
Arms help us to run.`
          }
        ]
      }
    },
    {
      label: 'Fill in the blanks',
      id: 'fillup',
      type: 'matchByDragDrop',
      data: [
        `*Ears* help us to hear different sounds.
*Nose* helps us to smell.
*Mouth* helps us to eat food.
*Hands* help us to write, to hold things, etc.
*Legs* help us to walk, to run, to jump, etc.`,

        `Honey *tastes* sweet.
A feather *feels* soft.
A Jasmine has a pleasant *smell*.
A flower garden *looks* beautiful.
The cuckoo makes a musical *sound*.`
      ]
    },
    {
      label: 'What we do?',
      id: 'fillup-2',
      type: 'matchByDragDrop',
      data: {
        text: `There are ripe mangoes. Let us *jump* and *pluck* them.
        See the green frog moving. Shall we *hop* like that?
        Bits of paper make the place untidy. Let us *pick* them up.
        I reached my home and *waved* my hands to say bye.`
      }
    },
    {
      label: 'Hard vs Soft',
      type: 'group',
      id: 'hard-soft',
      data: {
        types: [
          {
            name: 'Hard',
            text: 'Stone, Wood, Iron, Spoon'
          },
          {
            name: 'Soft',
            text: 'Cotton, Feather, Flower, Sponge'
          }
        ]
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
            qText: 'What helps us to hold things and turn pages?',
            options: `fingers, leg, wrist`
          },
          {
            qText: 'What are external organs?',
            options: `body parts we can see, body parts that we cannot see`
          },
          {
            qText: 'Sense organs are considered as ________ body parts?',
            options: `external, internal`
          },
          {
            qText: 'Which of the following is not a sense organ?',
            options: `Hair, Skin, Nose, Tongue`
          },
          {
            qText: 'Which of the following cannot be sensed with our eyes?',
            options: `Softness, Shape, Size, Color, Distance`
          }
        ]
      }
    }
  ]
};
