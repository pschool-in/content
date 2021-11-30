export default {
  id: 'adjective-4',
  label: 'Adjective-4',
  pdf: '',
  list: [
    {
      label: 'Adjective-4',
      type: 'passage',
      id: 'adjectives-4-reading',
      data: {
        title: 'Adjective-4',
        text: `Adjectives are the words that describe the "persons", "places", "things" etc. Adjectives or describing words talk about color, number, material, quality, quantity, size, feel, etc.
For example:
1. Tarun is wearing a "red" shirt. (here "red" is an adjective that describes the noun "shirt" by letting us know what kind of shirt it is?)
2. They have purchased a "square" table. (here "square" is an adjective that describes the noun "table" by letting us know the shape of the table)
Read the following sentence
1. Oh "darling, good" mother, said the third.
2. Oh dear"darling", "pretty", "good, "nice" mother, said the fifth.
In these sentences, words like "darling", "good", "pretty", "nice" express the qualities of a mother.
It can be noticed by looking at the above two sentences that, more adjectives are used to describe the qualities of a mother.
In such cases, we need to know how to arrange these adjectives in order.
Given below is the order of adjectives:
1. number
2. opinion
3. appearance (size, shape)
4. age
5. condition
6. color
7. pattern (checkered, stripped)
8. proper adjective (Nationality, place of origin or material)
9. function or purpose
10. Noun
For example :
1. A strange, little, yellow leaf. Here the arrangement of the adjectives is as follows: "a" is an article, "strange" is an opinion or quality, "little" is the size, "yellow" is the color
2. My dad is a tall, Indian Man. Here the arrangement of the adjectives is as follows: "tall" is a size, "Indian" is a Nationality.`
      }
    },
    {
      type: 'group',
      label: 'Classify the words',
      id: '100',
      commonData: {
        title:
          'Identify the adjectives from the group of words given below and put them into the appropriate box.',
        types: ['Adjectives', 'Non-adjectives']
      },
      data: [
        [
          `strange, little, yellow, round, tall`,
          `leaf, plant, stem, fruit, soil`
        ],
        [
          `red, seven, wooden, nice, small, soft`,
          `pancakes, children, dress, knife, chair, mug`
        ],
        [
          `brave, young, strong, intelligent, courageous`,
          `Mowgli, lion, floor, boxer, player`
        ],
        [
          `slowest, brown, huge, sharp, fast, dangerous`,
          `crocodile, train, turtle, table, banana`
        ]
      ]
    },
    {
      id: '200',
      label: 'Match - Adjectives with nouns',
      type: 'match',
      commonData: {
        title: 'Match the adjectives with suitable nouns.'
      },

      data: [
        `starry, night
         tall, trees
         naughty, boys
         woolen, clothes
         cold, weather`,

        `curly, hair
         green, grass
         hot, milk
         angry, lion
         sweet, mango`,

        `sick, boy
         sour, grapes
         slow, tortoise
         calm, water
         salted, peanuts`,

        `high, mountain
         deep, sea
         sharp, knife
         old, man
         round, table`
      ]
    },
    {
      label: 'Pick the adjective',
      type: 'matchByDragDrop',
      id: '300',
      commonData: {
        isPractice: false,
        title: 'Drag and drop the correct adjective to complete the sentence.',
        styles: {
          fontSize: '1rem',
          dashWidth: 80
        }
      },
      data: [
        `The *naughty* boy was sent out of the music class by his teacher.
Walking is a *healthy* exercise for everyone.
Savitha is a *beautiful* girl in our class.
Nupur likes *colorful* balloons.
A rabbit has *long* ears.`,

        `My nephew is very *cute*.
There is a *huge* tree in my garden.
Yesterday was a *windy* day in my town.
I have a *blue* phone in my bag.
The cheetah is the *fastest* mammal on the land.`,

        `An octopus has eight *long* arms.
My dog has a *fluffy* tail.
I found a *green* pencil on my teacher's desk.
This is a *beautiful* house in my colony.
My puppy is very *playful* around children.`
      ]
    },
    {
      type: 'selectWord',
      label: 'Find Me',
      id: '400',
      commonData: {
        title: 'Identify the adjective in the sentence.'
      },
      data: [
`The tree is too *tall* to climb.
Sita got *good* marks in the exam. She is very happy.
The gold ring is *expensive*.
Tarun is wearing a *red* shirt.
The elephant is a *large* animal.
Ruchi has *curly* hair.
Mihir has *five* pens in his bag.
I have a *black* sweater in the cupboard.
Mahesh ate *tasty* samosas in the restaurant.`,

`Ramya is a *brilliant* painter.
The music was *loud*.
The wolf has *sharp* teeth.
I lost my *new* anklet.
Coconut trees are *tall*.
My sofa is covered with *fluffy* cushions.
My sister tied her *long* hair into a bun.
The *little* kitten was sleeping under the sofa.
The students danced to the *loud* music.
My garden is filled with *green* grass.`,

`My sister likes *soft* music.
*Colorful* butterflies fly by my window every morning.
The *white* car is my uncle's.
*Fast* driving is dangerous.
*Cold* weather makes me lazy.
Rahul baked a *delicious* apple pie.
My dad bought a *big* refrigerator yesterday.
Riyaan has a *beautiful* garden in his house.
My grandparents live in a *brick* house.`
      ]
    },
    {
      label: 'Yes or No',
      id: '500',
      type: 'classifySentence',
      commonData: {
        title:
          'Identify whether the sentences have correct order of the adjectives or not.',
        types: ['Yes', 'No']
      },
      data: [
        [
          `Two tiny, brown squirrels ate all the peanuts.
          Ram and Mahesh went to the market to buy ten large, fresh, red apples.
          Mani left his small, white, striped shirt at home.`,

          `The principal said that we could go on a tropical, long vacation.
          Does the Indian, young actor win a lot of awards?
          The white, comfortable sofa was very expensive.`
        ],
        [
          `That big, black car goes really fast.
          A round, black ball
          Five, little children`,

          `little, five children.
          Full, three boxes.
          two red, sqaure tables`
        ]
      ]
    },
    {
      id: '600',
      label: 'Fill in the adjectives',
      type: 'fillupOptions',
      data: {
        title: 'Fill up the correct order of adjectives in the sentence.',
        text: `She gave her a *tiny(soft)*, *soft(tiny)* scarf.
She wore a *silly(pink)*, *pink(silly)* hat.
I have *five(big)*, *big(five)*, *wooden(big)* pencils.
The *little (pink)*, *pink(little)* mitten was lost.
My dad is a *tall (Indian)*, *Indian(tall)* man.`
      }
    },
    {
      id: '700',
      label: 'Complete the passage',
      type: 'fillup',
      commonData: {
        title: `Drag and drop the adjectives to complete the passage.`
      },
      data: [
  `Once upon a time, an *old (new)* porcupine lived in a *large (tall)* wood with his sons. 
  One day, one of the porcupines went into the *deep (long)* jungle to fetch some *fresh (spoiled)* vegetables. 
  He was a slow walker and he had just reached a *huge (black)* cabbage, when from behind the *green (stale)* leaves, out popped a *big (stripped)* hare.
He said, I hope you are quicker at eating, or will it take a year to finish the cabbage! The porcupine paid little attention to the hare's words and left from there.`,

  `Once upon a time, there lived a *beautiful (new)* stag. Like all other stags, he had *long (brief)*, *slender (round)* legs. 
  One day he was grazing peacefully on *tender (stern)* shoots. Suddenly, he heard the howling of *dangerous (pretty)* wolves! 
  He knew, he had to escape. So he started running. Suddenly his *large (fluffy)* antlers got stuck in the low-hanging branch and he was unable to escape. Finally, the wolves caught the stag.`
      ]
    },
    {
      id: '800',
      type: 'sequence',
      label: 'Find the order of adjectives',
      commonData: {
        title:
          'Arrange the adjectives in the correct order to make a meaningful sentence.'
      },
      data: [
`A big brown bear.
A beautiful young girl.
A beautiful blue dress.
A magnificent new black shoe.
An amazing large stone statue.`,

`A handsome young boy.
Four full boxes of chocolates.
A talented young singer.
A cool new black sports bike.
Delicious Indian food.`,

`Beautiful blue eyes.
A small oval table.
A nice cold coffee.
A beautiful long blue curtain.
A poor little kitten.`,

`A big hungry lion.
A delicious Indian biryani.
Two ancient copper statues.
A small round flower pot.
A beautiful traditional saree.`
      ]
    },
    {
      label: 'Identify the adjective',
      id: '900',
      type: 'mcq',
      commonData: {
        title: 'Fill in the appropriate adjective to complete the sentence.'
      },
      data: [
        {
          questions: [
            {
              qText: 'The mangoes are _____.',
              options: 'sweet, tall, square'
            },
            {
              qText: 'The lion has ______ claws.',
              options: 'sharp, bushy, colorful'
            },
            {
              qText: 'The car is ______.',
              options: 'fast, tall, fuel'
            },
            {
              qText: 'Can you give me _____ water?',
              options: 'little, few, no'
            },
            {
              qText: 'The dress is very ________.',
              options: 'colorful, enough, some'
            }
          ]
        },
        {
          questions: [
            {
              qText: 'The _____ man bought apples.',
              options: 'tall, round, blue'
            },
            {
              qText: 'When will this _____ exam be over?',
              options: 'tough, sweet, frizzy'
            },
            {
              qText: 'The _____ ball rolled down.',
              options: 'round, tall, short'
            },
            {
              qText: 'This is a ____ scissor.',
              options: 'blunt, colorful, four'
            },
            {
              qText: 'This is a ____ mango.',
              options: 'sweet, short, old'
            }
          ]
        }
      ]
    },
    {
      label: 'Identify the order of adjectives',
      id: '1000',
      type: 'mcq',
      commonData: {
        title: 'Choose the appropriate options to complete the sentence.'
      },
      data: [
        {
          questions: [
            {
              qText: 'I bought a pair of _____ sandals.',
              options: 'red leather, leather red'
            },
            {
              qText: 'It was a ____ bike.',
              options: 'fast blue, blue fast'
            },
            {
              qText: `It's a _______ hut.`,
              options: 'small round, round small'
            },
            {
              qText: `It's a _____ song.`,
              options: 'beautiful old, old beautiful'
            },
            {
              qText: `It's a ___ village.`,
              options: 'lovely green, green lovely'
            }
          ]
        },
        {
          questions: [
            {
              qText: `It's a _______ watch.`,
              options: 'cute Swiss, Swiss cute'
            },
            {
              qText: 'There are two _____ lamps.',
              options: 'big glass, glass big'
            },
            {
              qText: 'It is a ______ bug.',
              options: 'tiny black, black tiny'
            },
            {
              qText: 'That is a ____ beach.',
              options: 'wonderful Goan, Goan wonderful'
            },
            {
              qText: 'This is an _______ job.',
              options: 'exciting new, new exciting'
            }
          ]
        },
        {
          questions: [
            {
              qText: 'This is a _____ island.',
              options: 'beautiful small, small beautiful'
            },
            {
              qText: 'I saw a ____ whale in the ocean.',
              options: 'big black, black big'
            },
            {
              qText: 'I have a ______ shirt.',
              options: 'pink cotton, cotton pink'
            },
            {
              qText: 'He is a _________ man.',
              options: 'silly old, old silly'
            },
            {
              qText: 'I ate a ________ pizza today.',
              options: 'delicious Italian, Italian delicious'
            }
          ]
        },
        {
          questions: [
            {
              qText: 'This is an ________story.',
              options: 'amazing short, short amazing'
            },
            {
              qText: 'This is a ______ bag.',
              options: 'cotton sleeping, sleeping cotton'
            },
            {
              qText: 'Lata Mangeshkar is a _____ singer.',
              options: 'famous Indian, Indian famous'
            },
            {
              qText: 'I have a ______ dress.',
              options: 'beautiful blue, blue beautiful'
            }
          ]
        },
        {
          questions: [
            {
              qText: 'I bought ______ tomatoes.',
              options: 'big red, red big'
            },
            {
              qText: 'I have a _____ dog.',
              options: 'small white, white small'
            },
            {
              qText: 'Those are ________ flowers.',
              options: 'beautiful yellow, yellow beautiful'
            },
            {
              qText: 'My aunt has a  _______ table.',
              options: 'round brown, brown round'
            },
            {
              qText: 'He is a ____ man.',
              options: 'kind old, old kind'
            }
          ]
        }
      ]
    },
    {
      type: 'selectWord',
      label: 'Identify adjectives',
      id: '1100',
      commonData: {
          title: 'Identify the adjectives given in the passage.',
          multiSelect: true
        },
      data: [
`Once upon a time... there lived a women who had no children. 
She dreamed of having a *little* girl. 
But time went by and her dream never came true. 
So, she visited an *ugly* witch who gave her a *magic* grain of barley.
She planted the grain in a *big* flower pot. 
The next morning, the *magic* grain turned into a *lovely* tulip.`,

`The women kissed the *soft* petals and the flower opened. 
Inside the flower sat a *tiny* girl, no bigger than a thumb.
She was named Thumbelina. She had a walnut shell for bed, *violet* petals for mattress. 
One night, as Thumbelina  was fast asleep, a *large* frog hopped in through the window.
She said to herself, how *pretty* Thumbelina is!
Later, she picked up Thumbelina and hopped back in to the wetlands.`
          ]
      }
    
  ]
};
