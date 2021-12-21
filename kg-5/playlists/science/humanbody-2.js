export default {
  label: 'Human Body',
  id: 'humanbody-2',
  list: [
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
7. Fingers help us to turn pages, to hold things, etc.`
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
Fingers help us to hold things.`
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
      data: {
        isPractice: false,
        title: 'Drag and drop the words at proper places.',
        styles: {
          fontSize: '1rem',
          dashWidth: 80
        },
        text: `*Ears* help us to hear different sounds.
*Nose* helps us to smell.
*Mouth* helps us to eat food.
*Hands* help us to write, to hold things, etc.
*Legs* help us to walk, to run, to jump, etc.`
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
            options: `body parts we can see outside, body parts inside our body`
          },
          {
            qText: 'Are sense organs considered as external body parts?',
            options: `yes, no `
          }
        ]
      }
    }
  ]
};
