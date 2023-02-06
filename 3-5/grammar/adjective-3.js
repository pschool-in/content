export default {
  id: 'adjective-3',
  label: 'Adjective of Quality and Quantity',
  pdf: '',
  lockAfter: 4,
  list: [
    {
      label: 'Notes',
      type: 'passage',
      id: 'notes',
      data: {
        title: 'Types of Adjective',
        text: [
          `# Adjective of Quality
It tells us about the kind or quality of the noun.`,
          {
            type: 'html',
            text: `Eg: <br>
<b>honest</b> boy <br>
<b>beautiful</b> flower <br>
<b>large</b> house`
          },
          `# Adjective of Quantity
It tells us about the 'how much' of the noun.`,
          {
            type: 'html',
            text: `Eg: <br>
<b>many</b> students <br>
<b>some</b> animals <br>
<b>little</b> sugar`
          },
          `# Adjective of Number
It is a special type of adjective of quantity. It tells us how many.`,
          {
            type: 'html',
            text: `Eg: <br>
<b>two</b> hands <br>
<b>twenty-four</b> hours <br>
<b>thirty</b> students`
          }
        ]
      }
    },
    {
      label: 'Classify Adjective Type',
      id: 'classify',
      type: 'classifySentence',
      lockAfter: 1,
      commonData: {
        title: 'Classify the underlined adjective.',
        types: ['Adjective of Quality', 'Adjective of Quantity']
      },
      data: [
        [
          `This boy has a *sweet* voice.
That is a *big* ground.
I like *yellow* roses.
I like *raw* mangoes.`,

          `I ate *some* fried rice today.
We have *enough* time for the completion of homework.
I know very *little* about folk songs.
Add *some* sugar to the tea.`
        ],
        [
          `Meera has a *brown* cat as a pet.
Our math teacher is an *old* woman who teaches excellently.
Prakash is a *clever* boy in the class.
My mom made *tasty* jalebis for the party.`,

          `I took *some* chalk pieces from the desk.
Priya has *little* interest in reading storybooks.
We spent a *few* hours planning for the birthday party.
*Many* people visit Tirupathi every day.`
        ]
      ]
    },
    {
      id: 'fillup',
      label: 'Fill in the Blanks',
      type: 'fillup',
      lockAfter: 1,
      commonData: {
        title: `Select the appropriate adjective.`
      },
      data: [
        `I saw *many (much)* animals in the zoo.
I have *many (much)* friends.
How *many (much)* chocolates do you have?
There isn't *much (many)* sugar in my milk.
How *much (many)* water is used for boiling rice?
My dad gave me *some (many)* money for a school tour.
I took *some (much)* cookies from the box.
Did you take *any (many)* money from the purse?
*Many(Much)* people attended the Republic day parade in Delhi on 26th January.
We don't have *much (many)* time for the wedding preparation.`,

        `There are *few (little)* chairs in the hall.
I bought *few (little)* tomatoes from the market.
There is *some (any)* juice left in the fridge.
Do you want *some (any)* tea?
I can give you *some (many)* money if you need it.
Do you have *any(some)* brothers or sisters?
My brother bought *some (any)* pencils from the shop.
I had *some (any)* rice for lunch today.
My dad showed *much (many)* patience while dealing with the office staff.
There are *few (little)* dogs in the park near my home.`,

        `Don't eat so *many (some)* sweets, it's not good for your health.
I have *little (any)* interest in dancing.
There was *little (few)* traffic near the school.
There is *little (few)* space left in the car.
I have *less (fewer)* than an hour to complete my homework.
There are a *few (little)* trees in my backyard which we can climb.
There have been *few (little)* problems with my new laptop recently.
We need a *little (few)* information regarding the new school in our locality.
We have *little (few)* time left to catch the train to Bangalore.
I have a *little (few)* money left to buy the ice cream from the shop.`
      ]
    },
    {
      type: 'group',
      label: 'Adjectives vs Non-adjectives',
      id: '100',
      lockAfter: 1,
      commonData: {
        title: 'Drag and drop the words in the right boxes.',
        printTitle: 'Rewrite the words on the right boxes.',
        types: ['Adjective', 'Not an Adjective']
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
      type: 'group',
      label: 'Positive vs Negative',
      id: 'classify-positive-negative',
      commonData: {
        title: 'Classify the below words as positive and negative.',
        types: ['Positive', 'Negative']
      },
      data: [
        [`Smart, Pretty, Beautiful, Soft`, `Ugly, Bad, Hard, Stupid`],
        [`Happy, Perfect, Wise, Wonderful`, `Cruel, Sad, Boring, Dull`],
        [`Talented, Natural, Caring, Amazing`, `Jealous, Moody, Rude, Selfish`]
      ]
    },
    {
      type: 'match',
      label: 'Match - Adjectives and Nouns',
      id: 'match-1',
      commonData: {
        title: 'Match the following adjectives with the most appropriate nouns.'
      },
      data: [
        `cheerful, boy
tall, building
sweet, mangoes
colorful, umbrella
black, dog
pretty, women`,

        `new, dress
clever, girl
yellow, flowers
brick, house
green, parrot`,

        `black, board
tall, tree
narrow, road
pretty, girl
colorful, kite
strong, bull`,

        `blue, sky
big, room
thorny, bush
brown, bear
pleasant, weather`
      ]
    },
    {
      type: 'match',
      label: 'Match Adjectives - Similar meanings',
      id: 'match-2',
      commonData: {
        title: 'Match the adjectives with their meanings.'
      },
      data: [
        `small, little
big, large
quick, fast
happy, glad
sad, unhappy`,

        `wrong, incorrect
wealthy, rich
hard, difficult
smart, clever
near, close`,

        `strong, powerful
right, correct
tired, sleepy
funny, humorous
raw, uncooked`,

        `beautiful, pretty
honest, frank
angry, irritated
brave, courageous
cheerful, jolly`,

        `dirty, unclean
lazy, dull
weak, sick
rude, impolite
danger, unsafe`
      ]
    },
    {
      label: 'Drag and drop',
      type: 'matchByDragDrop',
      id: 'drag-and-drop-1',
      data: [
        `He is a *short* boy.
She wore a *cotton* dress.
She bought a *big* kite.
I saw a *green* parrot in the zoo.
There is a *black* board in my classroom.
There is a *tall* mango tree in my garden.`,

        `She is an *intelligent* student in the class.
I bought an *wooden* chair from the market.
We live in a *big* city.
Ram is a *funny* guy.
She has a *black* cat.
My mother has *curly* hair.`,

        `The dress is *pretty*.
The day is *bright*.
Mango is a *sweet* fruit.
Sita is an *honest* girl.
Our teacher is very *kind*.`,

        `My brother was *lucky* to survive the floods.
I am *afraid* to stay home alone.
I went to the shop to pick up *fresh* apples.
The *bright* sun rose in the morning.
My mom was baking a *chocolate* cake for the party.`
      ]
    },
    {
      type: 'selectWord',
      label: 'Select the Adjective of Quantity',
      id: 'select-word-1',
      commonData: {
        title: 'Select the adjective of quantity in the sentence.'
      },
      data: [
        `Chandan gave *all* his pens to Manish.
I drank *some* milk.
He ate only *half* of his breakfast.
Do you have *any* money?
I read the *whole* book.
*Many* students were present for the seminar today.
I took *some* books from the school library.
I have finished *most* of my homework.
Mannu has *little* interest in singing.
My sister ate the *whole* banana.`,

        `Can I have *some* ice cream  after dinner?
I don't need *any* help with my homework.
There are *many* theatres in my city. You can watch a movie anywhere you want.
I don't have *much* time for completing my science project.
I have got very *little* water left in my water bottle.
My sister ate the *whole* cake!
I have *enough* money to buy a pastry for my friends.
There is very *little* space left in my bag for carrying the tiffin box.
Do you have *any* extra pencils?
My rose plant has not grown *much* as expected.`
      ]
    }
    /*
    {
      type: 'selectWord',
      label: 'Identify the Adjectives',
      id: '500',
      commonData: {
        title: 'Select the adjectives in the following sentences.',
        multiSelect: true
      },
      data: [
        `A *good* chess player is usually *smart*.
One *rainy* day, my *little* cat jumped and sat on the *black* sofa and played with his *new* toy.
My *younger* brother was watching it play and he was *happy*.
Soon, my *playful* cat yawned. He was *tired*. I picked him up and put him on a *soft* bed and he slept.
Sita and Meera are twins. Preethi and Swapna live next door. Meera's mom packed some *tasty* snacks and water in a *big* basket.
The *four* friends walk to the nearby woods for a picnic. They spot an *old* tree.`,

        `Sita spreads the *new* mat under the tree and they all have their snacks.
Swapna sits on a *small* bench and watches the squirrels running up and down.
This is my grandmother's house. There is a *pretty* garden in front of her house.
There are *pink* and *red* roses near the gate. There is also a *big* mango tree behind the house.
Every year we distribute these *tasty* mangoes to all our neighbours.`,

        `My mom is making aloo paratha for lunch. She picked up the *big* bag of flour with her *small* hands.
She added the flour into the *red* bowl. She mixed some *warm* water, *white* salt, and some oil
and kneaded it into a *soft* dough. Then she cooked *tasty* aloo stuffing for the paratha.
She made *small*, *round* balls of the dough and flattened it and then stuffed the aloo mix
and made *round* parathas with lots of butter and served hot.`
      ]
    }*/
  ]
};
