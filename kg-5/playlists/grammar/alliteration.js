export default {
  id: 'Alliteration',
  label: 'Alliteration',
  pdf: '',
  list: [
    {
      label: 'Alliteration - Reading',
      type: 'passage',
      id: 'Alliteration-reading',
      data: {
        title: 'Alliteration',
        text: `It is generally used in poetry. It is a style of writinng in which a series of words have the same consonant sound. Some examples of alliteration are;
        The boy bounced the ball in the basket. ("boy bounced the ball" is alliteration)
        A big brown bear bumped into our boxes. ("big brown bear bumped" is the alliteration)
        My neighbour is normally noisy. ("neighbour is normally noisy" is the alliteration)`
      }
    },
    {
      label: 'Fill in the blanks',
      type: 'matchByDragDrop',
      id: 'drag-drop-1',
      data: {
        isPractice: false,
        title: 'Drag the correct option in each blank to form an alliteration',
        styles: {
          fontSize: '1.3rem',
          dashWidth: 80
        },
        text: `The boy *bounced* the ball.
        Helen happily *helped* her housemaid.
        The wind was *whistling* through the window.
        The parrot landed on pirate's *purple* parcel.
        Peter *put* his painting on the wall.`
      }
    },
    {
        label: 'Fill in the blanks',
        type: 'matchByDragDrop',
        id: 'drag-drop-2',
        data: {
          isPractice: false,
          title: 'Drag the correct option in each blank to form an alliteration',
          styles: {
            fontSize: '1.3rem',
            dashWidth: 80
          },
          text: `Elise’s *easter* eggs were delicious.
          Hari’s *honeybees* have horrible honeycombs.
          Nina’s neighbor *needed* newly cooked nachos.
          Paul’ pet pig *Patty* looks pretty.
          Rahul ran around the room for no *reason*.`
        }
      },
      {
        label: 'Fill in the blanks',
        type: 'matchByDragDrop',
        id: 'drag-drop-3',
        data: {
          isPractice: false,
          title: 'Drag the correct option in each blank to form an alliteration',
          styles: {
            fontSize: '1.3rem',
            dashWidth: 80
          },
          text: `Tinkerbell likes to tinker with *tools*.
          Sheep should *sleep* in a shed.
          Black bug bit a big *black* bear.
          Sheep *shouldn’t* sleep in a shack.
          How many feet of *fruit* did freaky Fred find?`
        }
      },
    {
      label: 'True or False',
      id: 'TF',
      type: 'classifySentence',
      data: {
        title: 'Classify these sentences as true or false.',
        types: [
          {
            name: 'True',
            text: `Alliteration is a peotic technique.
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
        type: 'classifySentence',
        id: 'classify-alliteration-1',
    
        data: {
          title: 'Identify if these sentences have alliteration or not',
          types: [
            {
              name: 'Yes',
              text: `The sherif put his shiny star-shaped batch.
              I sometimes hear shounds of someone saying something.`
            },
            {
              name: 'No',
              text: `I cleaned my room because my mom asked me to.
              She bought a cake from the shop.`
            }
          ]
        }
      },
      {
        label: 'Classify',
        type: 'classifySentence',
        id: 'classify-alliteration-2',
    
        data: {
          title: 'Identify if these sentences have alliteration or not.',
          types: [
            {
              name: 'Yes',
              text: `Dan's dog dug a ditch.
              Sameer had six straws.`
            },
            {
              name: 'No',
              text: `I forgot to bring my lunch.
              My mother loves me very much.`
            }
          ]
        }
      },
      {
        label: 'Classify',
        type: 'classifySentence',
        id: 'classify-alliteration-3',
    
        data: {
          title: 'Identify if these sentences have alliteration or not.',
          types: [
            {
              name: 'Yes',
              text: `Shaam sells seashells by the seashore.
              The  lazy lion looked like a lump.`
            },
            {
              name: 'No',
              text: `My father works at an MNC.
              My pet's name is bony.`
            }
          ]
        }
      },
      {
        label: 'Identify the alliteration',
        type: 'selectWord',
        id: 'select-word-1',
    
        data: {
            title: `Select the alliteration in the sentences.`,
            text: `The *sticky stuff got stuck* in my shoes.
          The *raccoon ran rapidly* in towards the bushes.
          The *pink pigs played* in the mud.
          I kept the apples in the *big blue bowl*.
          *Sara silently sneaked* into her brother's room.`
        }
    },
     {
    label: 'Identify the alliteration',
    type: 'selectWord',
    id: 'select-word-2',

    data: {
      title: `Select the alliteration in the sentences.`,
      text: `*My mother makes marvelous melon*cakes.
      *Four friends finshed* their homework.
      *Betty bough butter* from the market.
      The *cat climbed carefully* but still fell downn.
      *Sakshi stopped staring* when someone called her name.`
    }
  },
  {
    label: 'Identify the alliteration',
    type: 'selectWord',
    id: 'select-word-3',

    data: {
      title: `Select the alliteration in the sentences.`,
      text: `*Dani's dogs drank* from the pot.
      Vidhi saw a *jellyfish jiggle*.
      The *audience applauded* at the end of the play.
      We love *Abhay's aunt's apples*.
      *Falguni's friends fed* the street dogs.`
      }
    }
  ]
};
      
