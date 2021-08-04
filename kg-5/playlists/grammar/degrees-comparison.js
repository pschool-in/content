export default {
  label: 'Degrees of Comparison',
  id: 'degrees-comparison',
  list: [
    {
      id: 'reading',
      type: 'passage',
      label: 'Notes',
      data: {
        title: 'Degrees of Comparison',
        text: [
          `We use this to compare something.`,
          { type: 'hilight', text: 'Elephant is bigger than tiger.' },
          `The above sentence has 'comparative' degree. We directly compare one thing with another.`,
          `Note: Usually the  'comparative' adjective is followed by the word 'than'.`,
          `Sometimes we compare something with the rest of the group. It is called 'superlative' degree.`,
          `Note: Definite article (the) is used before the 'superlative' adjective.`,
          { type: 'hilight', text: 'Elephant is the biggest land animal.' },
          `Sometimes we simply tell something, without really comparing with anything. It is called 'positive' degree.`,
          { type: 'hilight', text: 'Elephant is a big animal.' },
          `Some of the commonly used positive, comparative and superlative adjectives are given below.`,
          {
            type: 'html',
            text: `big, bigger, biggest<br>
large, larger, largest<br>
tall, taller, tallest<br>
old, older, oldest<br>
small, smaller, smallest<br>
brave, braver, bravest<br>
fast, faster, fastest<br>
busy, busier, busiest<br>
heavy, heavier, heaviest`
          }
        ]
      }
    },
    {
      label: 'Classify the Degree',
      type: 'classifySentence',
      id: 'classify',
      commonData: {
        title: 'Identify the degree of comparison.',
        types: ['Positive', 'Comparative', 'Superlative']
      },
      data: [
        [
          `Vijay is a tall boy.
Tamil is a old language.
The Himalayas is a tall mountain range.`,

          `Vijay is taller than Ramu.
Tamil is older than English.
The Himalayas is taller than the Alps.`,

          `Vijay is the tallest boy in the classroom.
Tamil is one of the oldest languages in the world.
The Himalayas is the tallest mountain range.`
        ],
        [
          `India is a large Democracy.
Hari is a smart boy.
Ostrich is a large bird.`,

          `India is a larger Democracy than the USA.
Hari is smarter than Gopal.
Ostrich is larger than penguin.`,

          `India is the largest Democracy.
Hari is the smartest boy in the class.
Ostrich is the largest bird.`
        ],
        [
          `Taj Mahal is a famous monument in India.
Bheem is a brave boy in Dholakpur.
Diamond is a costly stone.`,

          `Taj Mahal is more famous than Qutub Minar.
Bheem is braver than Kalia.
Diamond is costlier than ruby.`,

          `Taj Mahal is one of the most famous monument in India.
Bheem is the bravest boy among his friends.
Diamond is the costliest stone.`
        ],
        [
          `Mumbai is a busy city.
Mani can run fast.
Lead is a heavy metal.`,

          `Mumbai is a busier city than Bengaluru.
Mani can run faster than Gopal.
Lead is heavier than iron.`,

          `Mumbai is one of the busiest city in the world.
Mani is the fastest boy in our class.
Lead is one of the heaviest metal.`
        ]
      ]
    },
    {
      id: 'fillup',
      label: 'Fill up',
      type: 'fillupOptions',
      commonData: {
        title: `Click on the blanks and choose the right option.`
      },
      data: [
        `Vijay is the *tallest (tall, taller)* boy in the class.
Vijay is a *tall(taller, tallest)* boy.
Vijay is *taller (tall, tallest)* than Ramu.
Dogs are the *most (more)* faithful animals.
Tamil is *older (old,oldest)* than English.
Tamil is a *old (older, oldest)* language.
Tamil is one of the *oldest (old, older)* languages in the world.
The Himalayas is the *tallest(tall, taller)* mountain range.
The Himalayas is a *tall(taller, tallest)* mountain range.
The Himalayas is *taller(tall, tallest)* than the Alps.`,

        `India is a *large( larger, largest)* Democracy.
Hari is a *smart( smarter, smartest)* boy.
India is the *largest( large, larger)* Democracy.
Hari is *smarter( smart, smartest)* than Gopal.
Bangladesh is not as *big (bigger, biggest)* as India.
Ostrich is *larger( large,largest )* than penguin.
Ostrich is a *large( larger, largest)* bird.
Hari is the *smartest( smart, smarter)* boy in the class.
India is a *larger( large,largest )* Democracy than the USA.
Ostrich is the *largest( large,larger )* bird.`,

        `Taj Mahal is a *famous(more famous)* monument in India.
Bheem is the *bravest(braver,brave)* boy among his friends.
Diamond is a *costly(costlier,costliest)* stone.
Taj Mahal is *more(most)* famous than Qutub Minar.
Bheem is *braver(brave,bravest)* than Kalia.
The Pacific Ocean is *deeper (deep, deepest)* than the Arctic ocean.
Diamond is *costlier(costly,costliest)* than ruby.
Taj Mahal is one of the *most(more)* famous monument in India.
Bheem is a *brave(braver,bravest)* boy in Dholakpur.
Diamond is the *costliest(costly,costlier)* stone.`,

        `Mumbai is a *busier(busy,busiest)* city than Bengaluru.
Lead is one of the *heaviest(heavy,heavier)* metal.
Mani can run *faster(fast,fastest)* than Gopal.
Mumbai is a *busy(busiest,busier)* city.
Mani can run *fast(faster,fastest)*.
Lead is *heavier(heavy,heaviest)* than iron.
A pen is *mightier (might, mightiest)* than a sword.
Lead is a *heavy(heavier,heaviest)* metal.
Mumbai is one of the *busiest(busier,busy)* city in the world.
Mani is the *fastest(fast,faster)* boy in our class.`
      ]
    }
  ]
};
