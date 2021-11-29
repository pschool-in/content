export default {
    id: 'alliteration',
    label: 'Alliteration',
    pdf: '',
    list: [
      {
        label: 'Alliteration',
        type: 'passage',
        id: 'alliteration-reading',
        data: {
          title: 'Alliteration',
        text: `It is generally used in poetry. It is a style of writing in which a series of words have the same consonant sound. Examples of alliteration are;
1. The boy bounced the ball in the basket. ("boy bounced the ball" is alliteration)
2. A big brown bear bumped into our boxes. ("big brown bear bumped" is the alliteration)
3. My neighbour is normally noisy. ("neighbour is normally noisy" is the alliteration)`
        }
      },
      {
        label: 'Fill in the blanks',
        type: 'matchByDragDrop',
        id: 'drag-and-drop',
        commonData: {
        isPractice: false,
        title: 'Drag the correct option in each blank to form an alliteration.',
        styles: {
        fontSize: '1rem',
        dashWidth: 80
          }
        },
         data: [
`The boy *bounced* the ball.
Helen happily *helped* her housemaid.
The wind was *whistling* through the window.
The parrot landed on pirate's *purple* parcel.
Peter *put* his painting on the wall.`,

`Elise’s *easter* eggs were delicious.
Hari’s *honeybees* have horrible honeycombs.
Nina’s neighbor *needed* newly cooked nachos.
Paul’s pet parrot *Patty* looks pretty.
Rahul ran around the room for no *reason*.`,

`Tinkerbell likes to tinker with *tools*.
Sheep should *sleep* in a shed.
Black bug bit a big *black* bear.
Sheep *shouldn’t* sleep in a shack.
How many feet of *fruit* did freaky Fred find?`,
             
`Ayush's aunt Anjali *ate* all apples.
Dhanju's *dog* Dan dropped the ball.
Fatima's father *fried* french fries.
Granny *guided* the guard to grocery.
Honeybees have *huge* honeycombs.`,
             
`Jane is *jogging* joyfully.
Betty Botter *bought* some butter.
A good cook *could* cook many cookies.
Sheep should sleep in a shed.
How much wood *would* a woodpecker peck?`
        ]
      },
      {
        label: 'True or False',
        id: 'tf',
        type: 'classifySentence',
        data: {
          title: 'Classify these sentences as true or false.',
          types: [
            {
              name: 'True',
              text: `Alliteration is a poetic technique.
              Alliteration has a series of same sound words.`
            },
            {
              name: 'False',
              text: `Alliteration is not a poetic technique.
              Alliteration is a series of vowels.`
            }
          ]
        }
      },
      {
        label: 'Classify',
        id: 'classify-alliteration',
        type: 'classifySentence',
        commonData: {
          title: 'Identify if these sentences have alliteration or not.',
          types: ['Yes', 'No']
        },
        data: [
          [
            `The sheriff put his shiny star-shaped batch.
            I sometimes hear sounds of someone saying something.`,
            `I cleaned my room because my mom asked me to.
            She bought a cake from the shop.`
          ],
          [
            `Dan's dog dug a ditch.
            Sameer had six straws.`,
            `I forgot to bring my lunch.
            My mother loves me very much.`
          ],
          [
            `Shaam sells seashells by the seashore.
            The lazy lion looked like a lump.`,
            `My father works at an MNC.
            My pet's name is bony.`
          ]
          [
            `Silly Sally swiftly shooed seven silly sheep.
            A tutor tried to tutor two tooters to toot.`,
            `She likes her milk cold.
            He plays a guitar when he's bored.`
          ]
          [
            `I cannot bear to see a bear.
            A tree toad loved a she-toad.`,
            `I don't like vegetables.
            The bollywood is full of actors and singers.`
          ]
        ]
      },
          {
            type: 'selectWord',
            label: 'Identify the alliteration',
            id: 'select-word',
            commonData: {
            title: 'Select the alliteration in the sentences.'
                          },
            data: [
`The *sticky stuff got stuck* in my shoes.
The *raccoon ran rapidly* towards the bushes.
The *pink pigs played* in the mud.
I kept the apples in the *big blue bowl*.
*Sara silently sneaked* into her brother's room.`,
            
`*My mother makes marvelous melon* cakes.
*Four friends finshed* their homework.
*Betty bought butter* from the market.
The *cat climbed carefully* but still fell down.
*Sakshi stopped staring* when someone called her name.`,

`*Dani's dog drank* from the pot.
Vidhi saw a *jellyfish jiggle.*
The *audience applauded* at the end of the play.
We love *Abhay's aunt's apples.*
*Falguni's friends fed* the street dogs.`,
                
`*See’s saw sawed Soar’s seesaw.*
Raj *picked pepper powder.*
I cannot *bear* to see a *bear.*
I *had* to *hurry home* because grandma was baking cookies.
The *baron* was *busy* as a *bee.*`
       ]
      }
    ]
  };
      
