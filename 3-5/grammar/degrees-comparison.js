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
          { type: 'hilight', text: 'An elephant is bigger than a tiger.' },
          `The above sentence has a 'comparative' degree. We directly compare one thing with another.
Note: Usually the 'comparative' adjective is followed by the word 'than'.
Sometimes we compare something with the rest of the group. It is called the 'superlative' degree.
Note: Definite article (the) is used before the 'superlative' adjective.`,
          { type: 'hilight', text: 'The elephant is the biggest land animal.' },
          `Sometimes we simply tell something, without really comparing it with anything. It is called a 'positive' degree.`,
          { type: 'hilight', text: 'The elephant is a big animal.' },
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
      label: 'Identify the Degree of Comparison.',
      type: 'classifySentence',
      id: 'classify',
      lockAfter: 1,
      commonData: {
        title: 'Identify the degree of comparison.',
        types: ['Positive', 'Comparative', 'Superlative']
      },
      data: [
        [
          `Vijay is a tall boy.
Tamil is an old language.
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
An ostrich is larger than a penguin.`,

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

          `Taj Mahal is one of the most famous monuments in India.
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

          `Mumbai is one of the busiest cities in the world.
Mani is the fastest boy in our class.
Lead is one of the heaviest metals.`
        ]
      ]
    },
    {
      id: 'fillup',
      label: 'Fill up',
      type: 'fillup',
      lockAfter: 1,
      commonData: {
        title: `Fill in the blank from the given options.`
      },
      data: [
        `Vijay is the *tallest (tall, taller)* boy in the class.
Vijay is a *tall (taller, tallest)* boy.
Vijay is *taller (tall, tallest)* than Ramu.
Dogs are the *most (more)* faithful animals.
Tamil is *older (old, oldest)* than English.
Tamil is an *old (older, oldest)* language.
Tamil is one of the *oldest (old, older)* languages in the world.
The Himalayas is the *tallest (tall, taller)* mountain range.
The Himalayas is a *tall (taller, tallest)* mountain range.
The Himalayas is *taller (tall, tallest)* than the Alps.`,

        `India is a *large ( larger, largest)* Democracy.
Hari is a *smart (smarter, smartest)* boy.
India is the *largest (large, larger)* Democracy.
Hari is *smarter (smart, smartest)* than Gopal.
Bangladesh is not as *big (bigger, biggest)* as India.
An ostrich is *larger (large, largest )* than a penguin.
Ostrich is a *large (larger, largest)* bird.
Hari is the *smartest (smart, smarter)* boy in the class.
India is a *larger (large, largest )* Democracy than the USA.
Ostrich is the *largest (large, larger )* bird.`,

        `Taj Mahal is a *famous(more famous)* monument in India.
Bheem is the *bravest(braver, brave)* boy among his friends.
Diamond is a *costly(costlier, costliest)* stone.
Taj Mahal is *more (most)* famous than Qutub Minar.
Bheem is *braver(brave, bravest)* than Kalia.
The Pacific Ocean is *deeper (deep, deepest)* than the Arctic ocean.
Diamond is *costlier(costly, costliest)* than ruby.
Taj Mahal is one of the *most (more)* famous monuments in India.
Bheem is a *brave (braver, bravest)* boy in Dholakpur.
Diamond is the *costliest(costly,costlier)* stone.`,

        `Mumbai is a *busier (busy, busiest)* city than Bengaluru.
Lead is one of the *heaviest (heavy, heavier)* metals.
Mani can run *faster (fast, fastest)* than Gopal.
Mumbai is a *busy (busiest, busier)* city.
Mani can run *fast (faster, fastest)*.
Lead is *heavier (heavy, heaviest)* than iron.
A pen is *mightier (might, mightiest)* than a sword.
Lead is a *heavy (heavier, heaviest)* metal.
Mumbai is one of the *busiest (busier, busy)* cities in the world.
Mani is the *fastest (fast, faster)* boy in our class.`
      ]
    },
    {
      label: 'Identify the Degree of Comparison-2.',
      type: 'classifySentence',
      id: 'classify-2',
      lockAfter: 1,
      commonData: {
        title: 'Identify the degree of comparison.',
        types: ['Positive', 'Comparative', 'Superlative']
      },
      data: [
        [
          `This book is long.
The airport is far.
My mom is a good cook.`,

          `This house is bigger than that one.
This rose is more beautiful than others.
He is taller than Mr.Das.
My job is worse than yours.`,

          `The Nile is the longest river in the world.
Today has been the hottest day of the year.
Which is the highest mountain in the world?`
        ],
        [
          `Her hair is short.
She walks slowly.
Gold is a precious metal.`,

          `The earth is larger than the moon.
You are more polite than Meera.
A car is faster than a bicycle.`,

          `The Burj Khalifa is the tallest building in the world.
This is the best chocolate cake I have had in a long time.
This is the smallest box I have ever seen.
Jupiter is the biggest planet in our solar system.`
        ],
        [
          `Manish is a strong boy.
My sister is a good teacher.
KBR Park is far.`,

          `She is older than me.
China is larger than India.
In Canada, January is colder than March.`,

          `I am the shortest person in my family.
Sam is the most handsome boy in the whole school.
London is the largest city in England.`
        ],
        [
          `The pen is light.
She is a beautiful girl.
Arjun is a strong boy.
India is a democratic country.`,

          `A school is noisier than a hospital.
My TV is bigger than yours.
Greenland is larger than any other island.`,

          `Whales are the biggest animals.
Lead is the heaviest of all metals.
Mahesh is the brightest student in the class.`
        ],
        [
          `Mango is sweet.
The Himalayas are a mountain range in Asia.
Neetha is a good girl.
Her hair is short.`,

          `Meera's work is better than Ram's.
Athletes are usually more famous than scientists.
Poornima's hair is longer than yours.`,

          `This is the most interesting book I have read.
Mount Everest is the highest peak.
Jeevana is the smartest girl in the class.`
        ]
      ]
    },
    {
      label: 'Drag and Drop',
      type: 'matchByDragDrop',
      id: 'drag-drop',
      lockAfter: 1,
      data: [
        `The lion is a *big* animal.
A Rhinoceros is *bigger* than a lion.
The elephant is the *biggest* of the three animals.
I am a *lazy* person in my family.
My brother is *lazier* than me.
My dad is the *laziest* among all three.`,

        `Suhani is a *clever* girl.
Geeta is *cleverer* than Suhani. 
Sita is the *cleverest* of all three.
English exam was *difficult* this year.
The social exam was *more* difficult than the English exam.
Math exam was the *most* difficult of all subjects.`,

        `Krishna is a *tall* boy.
Hari is *taller* than Krishna.
Mahesh is the *tallest* boy in the class.
My mom is a *wise* member of the family.
My dad is *wiser* than my mom.
My grandmother is the *wisest* of all.`,

        `Teju is a *smart* girl.
Laukya is *smarter* than Teju.
Padma is the *smartest* girl among the three.
China is a *big* country.
Canada is *bigger* than China.
Russia is the *biggest* country.`,

        `Deer is a *fast* animal.
Leopard is *faster* than Deer.
Cheetah is the *fastest* of all three.
October is a *cold* month.
November is *colder* than October.
December is the *coldest* month of the year.`,

        `March is a *hot* month.
April is *hotter* than March.
May is the *hottest* month of the year.
Monkeys are *small* animals.
Rabbits are *smaller* than monkeys.
Ants are the *smallest* of all three.`,

        `My mom is a *good* cook.
My aunt is a *better* cook than my mom.
My grandmother is the *best* cook of all.
My room is *tidy*.
My brother's room is *tidier* than mine.
My mother's room is the *tidiest* of all three.`
      ]
    }
  ]
};
