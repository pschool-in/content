export default {
  id: 'noun-1',
  label: 'Naming Word',
  pdf: '',
  list: [
    {
      label: 'Naming words',
      type: 'passage',
      id: 'naming-words-reading',
      data: {
        title: 'Naming words',
        text: `Words that are used as names of person, place, thing or animal are called naming words. Another name for naming words is nouns. Some examples of nouns are:
1. Richa lives with her parents.
2. The books are very helpful.
3. Agra is a beautiful city.
4. Lion is the king of the jungle.`
      }
    },
    {
      type: 'group',
      label: 'Classify Naming word or Not',
      id: 'classify',
      commonData: {
        title: 'Drop the words given at the botton in the right boxes.',
        types: ['Naming word', 'Not a Naming word']
      },
      data: [
        [`Book, Boy, City, House, Dog`, `Big, Little, Sleep, Eat, Pretty`],
        [`Sakshi, School, Cat, Pen, Eraser`, `Small, Play, Dance, Run, Jump`],
        [`Nita, Delhi, Tiger, Ring, Phone`, `Walk, Talk, Speak, Teach, Repeat`],
        [`Dog, Cat, Puppy, Cow, Pig`, `Dance, Sing, Drink, Lie`],
        [`Kitten, Birds, Flowers, Fruits`, `Beautiful, Black, Slept, Sit`]
      ]
    },
    {
      type: 'selectWord',
      label: 'Select the Naming word',
      id: 'select-word',
      commonData: {
        title: 'Select the naming words in the below sentences.'
      },
      data: [
        `*Neha* likes grapes.
  The *clown* gave a *balloon* to the *boy*.
  The *pear* fell off the *tree*.
  The *teacher* rings the *bell*.
  *Monkeys* swing in *trees*.
  The *cat* is purring.
  The *bus* stops at the red *light*.
  These *flowers* are beautiful.
  We saw *tigers* at the *zoo*.
  The *boy* kicked the *ball*.`,

        `Who likes *apples*?
    The *rabbit* hopped across the *road*.
    *Ice* floats on *water*.
    We’re having *soup* for *dinner*.
    *Lavina* brought *cake* to the *party*.
    An *apple* a day keeps the doctor away.
    The *broom* is used to clean the house.
    The *sand* is found in the *beach*.
    My *dog* is very playful.
    The *airplane* flies in the sky.`,

        `I click very good *pictures*.
    *Books* are kept on the *table*.
    *Rani* wrote a *letter*.
    The *dog* barks at *strangers*.
    I love *balloons*.`
    ]
  },
{
  type: 'selectWord',
  label: 'Select the noun-2',
  id: 'multi-select-word',
  commonData: {
      title: 'Tap on all the nouns.',
      multiSelect: true
    },
  data: [
  `His name is *Varun*. He lives in *Delhi*. He went to see the *Red Fort* yesterday.
  I am a *student*. I go to *school* regularly. I have many *friends* there.
  My *dad* brings me a *gift* every month. I like *surprises*.
  I like *pizza*. But *mom* says that *market* food is unhealthy. So, she will make a *pizza* for me at *home.*
  *Sheena* is my *bestfriend.* We play, eat *lunch* and sit in the *class* together.
  I got a new *bicycle* on my birthday. I don't know how to ride. My *mom* will teach me in the *evening*.
  My *brother* is an *artist.* He works in *Mumbai.* He's planning to display his *drawings* at a *fare*.
  *Samir* is a naughty *boy.* He never listens to *teachers.* The *principal* has called his *parents*.
  I have never been to a *beach*. My *friends* tell me that there are a lot of *shells* within the *sand*.
  My *uncle* goes to the *office* everyday. But my *father* goes to his *factory* daily. He is a *businessman*.
  *Cats* are domestic *animals*. We can *pet* them. *Cats* are of very different types and *colors*.`,

  `He saw a *monkey* up on the *tree*. It was eating a *banana* and it threw the *peel* on his *head*.
  He gave a *flower* to the *teacher*. She thanked him. She gave him a *chocolate* in return.
  *Shabad* is a brave *boy*. He is not afraid of *dogs*. He has a *pet* *dog* at his *home*.
  Look, the *bus* is coming. I see a lot of *people* inside. I hope we find a *seat* to sit on.
  The *girl* is playing with her *doll*. She also loves her other *toys*, including the *kitchen set*.
  The *soldiers* protect the *country*. They are very brave *men*. We should always respect them.
  The *lawyer* won the *case*. Some *people* thought that the *judge* was unfair. But, it was the victory of the truth.
  My *teacher* is very polite. She teaches me all the *subjects*. She also tells us *stories* in our free *periods*.
  Do you know that *Australia* is both a *country* and a *continent*? The *capital* *city* of *Australia* is *Canberra*.
  He has a *toy car*. He plays with it all the time. I have a *remote* control * toy car*. I play with it in the noon.
  The *girls* are talking in the *classroom*. But the *boys* are playing on the *ground*.`,

  `*Rats* are commonly seen running in our *houses*. They make *holes* in our *clothes*. We should trap them in a *cage* and move them out of the *house*.
  A *zebra* is a wild *animal*. It lives in the *forest*. *Zebras* eat *grass*, *plants*, and *leaves*.
  *London* is a very famous *city*. It is also the *captial* of *England*. Do you know that *Delhi* is the *capital* of *India*?
  I love eating *pizza*. But my *mom* says *junk food* is not healthy. So, I eat *pizza* only once in a *month*.
  I have a *study table* at *home*. I keep all my *books*, *pencils*, *erasers*, *colors*, and *bag* in it.
  My *dad* gave my *mom* a beautiful *ring*. I liked it very much. When I grow up, I will buy a *ring*.
  There are eight *members* in my *family*. I live with my *parents*, *grandparents*, *uncle*, *aunt* and *cousins*.
  Do you know that the *camel* is known as the *ship* of the *desert*. This is because it can stay without *water* for many *days*.
  She has a brown *dog*. It is very playful and friedly. It's name is *Bony*. We all love playing with it.
  My *sister* takes her *classes* online. She has a *laptop* but she attends her *class* by *mobile*.`,
    ]
  },
  {
  id: '1635961075354',
  editable: true,
  type: 'wordsearch',
  label: 'WordSearch - nouns',
  data: {
    title: 'Find the given words from the table.',
    words: [
          {
            word: ['N', 'O', 'U', 'N', 'S'],
            marker: [3, 2, 7, 6]
          },
          {
            word: ['P', 'E', 'R', 'S', 'O', 'N'],
            marker: [1, 5, 6, 5]
          },
          {
            word: ['P', 'L', 'A', 'C', 'E'],
            marker: [1, 5, 5, 9]
          },
          {
            word: ['A', 'N', 'I', 'M', 'A', 'L'],
            marker: [6, 4, 6, 9]
          },
          {
            word: ['W', 'O', 'R', 'D', 'S'],
            marker: [9, 0, 9, 4]
          },
          {
            word: ['T', 'H', 'I', 'N', 'G'],
            marker: [3, 0, 7, 0]
          },
          {
            word: ['N', 'A', 'M', 'E', 'S'],
            marker: [0, 1, 4, 5]
          }
        ],
        table: [
          ['H', 'O', 'C', 'T', 'H', 'I', 'N', 'G', 'K', 'W'],
          ['N', 'O', 'P', 'S', 'M', 'O', 'V', 'P', 'W', 'O'],
          ['P', 'A', 'M', 'N', 'B', 'G', 'P', 'K', 'J', 'R'],
          ['T', 'M', 'M', 'N', 'O', 'F', 'C', 'D', 'X', 'D'],
          ['K', 'C', 'A', 'E', 'V', 'U', 'A', 'K', 'F', 'S'],
          ['U', 'P', 'E', 'R', 'S', 'O', 'N', 'K', 'B', 'J'],
          ['J', 'Q', 'L', 'D', 'U', 'M', 'I', 'S', 'L', 'H'],
          ['H', 'M', 'S', 'A', 'K', 'M', 'M', 'F', 'N', 'V'],
          ['R', 'L', 'I', 'E', 'C', 'C', 'A', 'E', 'R', 'B'],
          ['D', 'N', 'Q', 'J', 'U', 'E', 'L', 'V', 'K', 'R']
        ],
        lang: 'en',
        showWords: true
      }
    }
  ]
};
 