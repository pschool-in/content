export default {
  id: 'adjective-1',
  label: 'Adjectives-1.',
  pdf: '',
  list: [
    {
      label: 'Adjectives-1',
      type: 'passage',
      id: 'adjectives-1-reading',
      data: {
        title: 'Describing Words',
        text: `Describing words tell us about the noun. It describes the quality of the naming words. Some examples of describing words are:
1. Smart teacher
2. Big house
3. Green parrot
4. Round ball
5. Pretty girl
6. Two boys
7. Thundering clouds
8. Sweet food
9. Soft toy
10. Loving parents`
      }
    },
    {
      type: 'group',
      label: 'Drag and Drop',
      id: 'classify-positive-negative',
      commonData: {
        title: 'Identify these positive and negative describing words.',
        types: ['Positive', 'Negative']
      },
      data: [
        [`Smart, Pretty, Beautiful, Soft`, `Ugly, Bad, Hard, Stupid`],
        [`Happy, Perfect, Wise, Wonderful`, `Cruel, Sad, Boring, Dull`],
        [`Talented, Natural, Caring, Amazing`, `Jealous, Moody, Rude, Selfish`]
      ]
    },
    {
      id: 'jumbled-words',
      type: 'sequence',
      label: 'Jumbled Words',
      commonData: {
        title: 'Identify these describing words.'
      },
      data: [
        `Big, Pretty, Small, Round, Sweet, Soft`,
        `Hard, Brave, Great, Good, Brown, Red`,
        `Smart, Two, Loving, Bad, Strong, Weak`
      ]
    },
    {
      type: 'selectWord',
      label: 'Select the describing words',
      id: 'select-word',
      commonData: {
        title: 'Tap on the describing words in these sentences.'
      },
      data: [
        `A ball is *round* in shape.
        A *good* chess player is usually *smart*.
        My friend has a *brown* muffler.
        I have a *red* cap.
        Aman is *confused* about a maths problem.`,

        `I read a story about an *ugly* witch.
        A *fast* car always win in races.
        Coconut trees are *tall*.
        A lion roars very *loudly*.
        Goods train is very *long*.`,

        `A *poor* man was sitting on roadside.
       This is a *pleasant* weather.
       A *small* rat lives in our house.
       I have a *purple* dress.
       A *clean* table.`
      ]
    },
    {
      type: 'rightOne',
      label: 'Correct Spelling',
      id: 'correct-spelling',

      commonData: {
        title: 'Identify the correct spelling of descibing words.'
      },
      data: [
        `Ugly, Ugley
       Brown, Browne
       Loud, Loude
       Clean, Chleane
       Tall, Tale`,

        `Long, Longe
       Fast, Fest
       Small, Smell
       Big, Beg
       Smart, Smert`
      ]
    },
    {
      id: 'match',
      label: 'Match the following',
      type: 'match',
      commonData: {
        title: 'Match the pairs.'
      },

      data: [
        `Big, Elephant
       Dark, Night
       Small, Ant
       Pleasant, Weather
       Loud, Lion`,

        `Clean, Room
       Smart, Student
       Long, Train
       Ugly, Pig
       Round, Ball`,

        `Red, Colour
       Two, Hands
       Soft, Toy
       Fast, Horse
       Sweet, Dish`
      ]
    },
    {
      label: 'Multiple Choice Questions',
      id: 'mcq-adjectives-1',
      type: 'mcq',
      commonData: {
        title: 'Choose the correct describing words.'
      },
      data: [
        {
          questions: [
            {
              qText: 'Neha likes______cars.',
              options: 'fast, the, all'
            },
            {
              qText: 'I can climb_______trees.',
              options: 'Small, Big, Large'
            },
            {
              qText: 'My mom is a______lady.',
              options: 'pretty, bad, old'
            },
            {
              qText: 'The dog found a______stick.',
              options: 'long, smart, round'
            },
            {
              qText: 'Disha caught the______ball.',
              options: 'red, far, near'
            }
          ]
        },
        {
          questions: [
            {
              qText: 'I love my______puppy.',
              options: 'little, bad, slow'
            },
            {
              qText: 'We went down the_______slide.',
              options: 'long, round, steep'
            },
            {
              qText: 'My little sister loves_______toys.',
              options: 'soft, sweet, fast'
            },
            {
              qText: 'The_______sun warms our house.',
              options: 'bright, dull, small'
            },
            {
              qText: 'That is an_______bug.',
              options: 'ugly, sweet, long'
            }
          ]
        },
        {
          questions: [
            {
              qText: 'Snowbell is a______cat.',
              options: 'nice, dull, long'
            },
            {
              qText: 'There are_________trees in the garden.',
              options: 'beautiful, ugly, bad'
            },
            {
              qText: 'My_______brother is in his room.',
              options: 'little, bad, smart'
            },
            {
              qText: 'The elephant has______ears.',
              options: 'big, small, little'
            },
            {
              qText: 'My______bicycle is purple.',
              options: 'new, big, small'
            }
          ]
        }
      ]
    }
  ]
};
