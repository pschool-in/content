export default {
  label: 'Small Passages',
  id: 'small-passage-question',
  list: [
    {
      type: 'informationProcessing',
      id: 'crocodile',
      label: 'Crocodile',
      data: {
        title: 'Read the passage and answer the questions',
        type: 'passage',
        text: `Crocodiles are reptiles that live in water and on land. They have a long, strong body with tough, scaly skin. Crocodiles have sharp teeth that they use to catch and eat their prey. They can stay underwater for a long time without needing to breathe. Crocodiles are excellent swimmers and can move quickly in the water.`,
        image: 'crocodile',
        fontSize: '1.3rem',
        questions: [
          {
            qText: 'What kind of animals are crocodiles?',
            options: 'reptiles, birds, mammals'
          },
          {
            qText: 'Where do crocodiles live?',
            options: 'Both in water and on land, Only on land, Only in water'
          },
          {
            qText: 'How do crocodiles catch their prey?',
            options:
              'By using their sharp teeth, By using their long tongue, By using their wings'
          },
          {
            qText: 'How long can crocodiles stay underwater without breathing?',
            options: 'A long time, A few minutes, A few seconds'
          }
        ]
      }
    },
    {
      type: 'informationProcessing',
      id: 'butterfly',
      label: 'Butterfly',
      data: {
        title: 'Read the passage and answer the questions',
        type: 'passage',
        text: `Butterfly is a colorful insect. It has bright colorful wings. You can find them in your garden. They have six legs. The nectar from flowers is their only food.`,
        image: 'butterfly',
        fontSize: '1.3rem',
        questions: [
          {
            qText: 'What kind of insect is a butterfly?',
            options: 'colorful, winged, six-legged, *all of the above'
          },
          {
            qText: 'How many legs does a butterfly have?',
            options: 'six, four, two, eight'
          },
          {
            qText: 'What is the primary source of food for butterflies?',
            options: 'nectar, seeds, insects, leaves'
          },
          {
            qText: 'Where can you commonly find butterflies?',
            options: 'garden, ocean, desert, burrows'
          }
        ]
      }
    },
    {
      type: 'informationProcessing',
      id: 'tortoise',
      label: 'Tortoise',
      data: {
        title: 'Read the passage and answer the questions',
        type: 'passage',
        text: `A tortoise is a slow and steady creature. They carry a shell on their back. They have four small and thick feet. They have a small head and mouth. They live a very long life.`,
        image: 'tortoise',
        fontSize: '1.3rem',
        questions: [
          {
            qText: 'What is a characteristic of a tortoise?',
            options: 'slow and steady, fast, agile'
          },
          {
            qText: 'What does a tortoise carry on its back?',
            options: 'shell, feather, backpack'
          },
          {
            qText: 'How many feet does a tortoise have?',
            options: 'Four small and thick feet, Two long legs, Six legs'
          },
          {
            qText: "How would you describe a tortoise's head and mouth?",
            options:
              'Small head and mouth, Small head and wide mouth, Large head and mouth'
          }
        ]
      }
    },
    {
      type: 'informationProcessing',
      id: 'panda',
      label: 'Panda',
      data: {
        title: 'Read the passage and answer the questions',
        type: 'passage',
        text: `Pandas are black and white bears. They can climb very high in trees. Their favorite food is bamboo. They love to eat. They eat upto 12 hours a day.`,
        image: 'panda',
        fontSize: '1.3rem',
        questions: [
          {
            qText: 'What colors are pandas?',
            options: 'black and white, brown, white'
          },
          {
            qText: "What is a panda's favorite food?",
            options: 'bamboo, fish, berries'
          },
          {
            qText: 'What is one unique skill that pandas have?',
            options: 'climbing trees, swimming, running'
          },
          {
            qText: 'How many hours a day do pandas spend eating?',
            options: '12, 8, 4'
          }
        ]
      }
    },
    {
      type: 'informationProcessing',
      id: 'jellyfish',
      label: 'Jellyfish',
      data: {
        title: 'Read the passage and answer the questions',
        type: 'passage',
        text: `Jellyfish is a sea animal. They can be clear or of different colours. They do not have a brain, eyes or heart. They have tentacles on their body. They use it to sting their prey.`,
        image: 'jellyfish',
        fontSize: '1.3rem',
        questions: [
          {
            qText: 'What type of animal is a jellyfish?',
            options: 'sea animal, land animal, flying animal'
          },
          {
            qText: 'Which of the following body parts do jellyfish lack?',
            options: 'brain, eyes, heart, *all of the above'
          },
          {
            qText: 'How do jellyfish use their tentacles?',
            options: 'for stinging prey, for breathing, for flying'
          },
          {
            qText: 'What can jellyfish look like?',
            options: 'clear, blue, pink, all of the above'
          }
        ]
      }
    }
  ]
};
