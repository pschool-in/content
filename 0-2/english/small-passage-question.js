export default {
  label: 'Small Passages',
  id: 'small-passage-question',
  list: [
    {
      type: 'informationProcessing',
      id: 'ladybug',
      label: 'Ladybug',
      data: {
        title: 'Read the passage and answer the questions',
        type: 'passage',
        text: `I am a ladybug. I am red and black in color. I have six short legs. I have an oval body. I love sitting on a leaf.`,
        image: 'ladybug',
        fontSize: '1.3rem',
        questions: [
          {
            qText: 'What is the color of ladybug?',
            options: 'red & black, red & orange, green & black'
          },
          {
            qText: 'How many legs does the ladybug have?',
            options: 'six, four, two'
          },
          {
            qText: 'The ladybug loves to _____ on a leaf.',
            options: 'sit, sleep, dance'
          },
          {
            qText: 'The shape of my body is _____.',
            options: 'oval, circle, rectangle'
          }
        ]
      }
    },
    {
      type: 'informationProcessing',
      id: 'rabbit',
      label: 'Rabbit',
      data: {
        title: 'Read the passage and answer the questions',
        type: 'passage',
        text: `I am a rabbit. I like carrot. I have four legs and a short tail. I have big front teeth. I am grey in color.`,
        image: 'rabbit',
        fontSize: '1.3rem',
        questions: [
          {
            qText: 'Rabbit likes to eat ____.',
            options: 'carrot, meat, wood'
          },
          {
            qText: 'What is its color?',
            options: 'grey, white, black'
          },
          {
            qText: 'It has a _____ tail.',
            options: 'short, long, thick'
          },
          {
            qText: 'It has a big front ____.',
            options: 'teeth, leg, finger'
          }
        ]
      }
    },
    {
      type: 'informationProcessing',
      id: 'teddy',
      label: 'Teddy',
      data: {
        title: 'Read the passage and answer the questions',
        type: 'passage',
        text: `This is my teddy bear Tom. My father gifted it to me on my birthday. It is very huge and brown in color. It sleeps with me. I play with it in the evening. I love Tom.`,
        image: 'teddy',
        fontSize: '1.3rem',
        questions: [
          {
            qText: 'What is the name of the teddy bear?',
            options: 'Tom, Gift, Huge'
          },
          {
            qText: 'Who gifted the teddy bear?',
            options: 'father, mother, grand-father'
          },
          {
            qText: 'The teddy bear is ____ in color.',
            options: 'brown, black, red'
          },
          {
            qText: 'I play with the teddy bear in the _____.',
            options: 'evening, afternoon, morning'
          }
        ]
      }
    },
    {
      type: 'informationProcessing',
      id: 'friend',
      label: 'My Friend Sara',
      data: {
        title: 'Read the passage and answer the questions',
        type: 'passage',
        text: `Sara is my best friend. She likes chocolates. We are in the same school. It's her birthday today. She is wearing a yellow dress. She is looking very pretty. I bought a very nice gift for her.`,
        image: 'girl',
        fontSize: '1.3rem',
        questions: [
          {
            qText: 'What does Sara like?',
            options: 'chocolate, cake, flowers'
          },
          {
            qText: 'How is she looking like?',
            options: 'pretty, cute, nice'
          },
          {
            qText: 'What color dress is she wearing?',
            options: 'yellow, pink, purple'
          },
          {
            qText: 'We are in the same _____.',
            options: 'school, house, street'
          }
        ]
      }
    },
    {
      type: 'informationProcessing',
      id: 'routine',
      label: 'My Daily Routine',
      data: {
        title: 'Read the passage and answer the questions',
        type: 'passage',
        text: `Today I will tell you about my daily routine. I get up in the morning then I get ready for my school. I go to school by the school bus. After coming back from school, I change my clothes, wash my hands, and eat my lunch. Then I go to sleep and play in the evening.`,
        image: 'boy',
        fontSize: '1.3rem',
        questions: [
          {
            qText: 'I get ready for _____.',
            options: 'school, party, office'
          },
          {
            qText: 'I go to school by _____.',
            options: 'bus, car, cycle'
          },
          {
            qText: 'What do I do after coming back from school?',
            options: 'change my clothes, go to play, go to sleep'
          },
          {
            qText: 'When do I play?',
            options: 'evening, night, afternoon'
          }
        ]
      }
    }
  ]
};
