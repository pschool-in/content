export default {
  label: 'Types of Noun',
  id: 'noun-3',
  list: [
    {
      id: 'reading',
      type: 'passage',
      label: 'Noun - Notes',
      data: {
        title: 'Noun',
        text: [
          `A noun is the name of a person, place, thing, or idea. eg: man, John, Africa, honesty`,
          `Nouns are classified into four types.`,
          `# Proper Noun`,
          'A proper noun is a name that identifies a particular person, place, or thing. In written English, proper nouns begin with capital letters. eg: Ram, London, Monday',
          `# Common Noun`,
          `A common noun is a noun that refers to people or things in general. eg: girl, city, dog, pencil`,
          `# Abstract Noun`,
          `An abstract noun is a noun which refers to ideas, qualities, and conditions - things that cannot be seen or touched. eg: beauty, time, truth, danger, `,
          `# Collective Noun`,
          `Collective nouns refer to groups of people or things, e.g. audience, family, government, team, jury.`
        ]
      }
    },
    {
      type: 'classifySentence',
      label: 'Identify Noun Type',
      id: 'identify-type',
      data: {
        title: 'Find the type of the underlined nouns in the below sentences.',
        types: [
          {
            name: 'Proper',
            text: `Every *Sunday* I go to the beach.
*Tamil* is my mother tongue.
We will visit *Taj Mahal* next month.
My best friend is *John*.
The *Pacific Ocean* is the biggest ocean.`
          },
          {
            name: 'Common',
            text: `I like to ride my *bicycle*.
All *shops* are closed.
Wash your *hands* with soap and water.
Jupiter is the biggest *planet* in Solar System.
Please give me a *pencil*.`
          },
          {
            name: 'Abstract',
            text: `Ramya always speak the *truth*.
We should work hard for *success*.
I have no *idea* why he is sad.
My grandfather is doing *good*.
Don't underestimate your *strength*.`
          }
        ]
      }
    },
    {
      type: 'selectWord',
      label: 'Identify Collective Noun',
      id: 'select-collective2',
      lockAfter: 1,
      commonData: {
        title: 'Select the collective noun in the below sentence.',
        printTitle: 'Underline the collective noun in the below sentences.'
      },
      data: [
        `My mom made a *batch* of cookies.
The farmer has a *herd* of cattle.
A *flock* of geese flew over a house.
A *troop* of soldiers went to a battle.
He ate a *bunch* of grapes.
Our school is searching for a *choir* of singers.
The *army* of ants worked together.
A *herd* of elephants crossed the road.
They saw a *school* of dolphins.
Kittens are playing with the *bundle* of sticks.`,

        `She kept a *bouquet* of flowers on the table.
A *flock* of sheep was grazing in the field.
A *fleet* of ships is ready for the voyage.
Meera lost her *pair* of shoes yesterday.
A *basket* of fruits is kept on the dining table.
The shelf is filled with *piles* of books.
The *pride* of lions is ready for hunting.
My friend has a fine *collection* of old stamps.
I have ordered a *set* of books.
A *band* of musicians was hired to perform at the birthday party.`
      ]
    },
    {
      id: 'jumble',
      type: 'sequence',
      label: 'Connect the Collection',
      lockAfter: 1,
      commonData: {
        title: 'Based on the below clue, connect letters and form the word.',
        printTitle: 'Form the word using the letters.',
        type: 'clue'
      },
      data: [
        ` a ______ of sheep | flock
a ______ of fish | school
a ______ of dancers | troupe
a ______ of thieves | gang
a ______ of singers | choir
a ______ of sailors | crew
a ______ of lions | pride
a ______ of ships | fleet
a ______ of bananas | bunch
a ______ of books | library `,

        `a ______ of flowers | bouquet
a ______ of sticks | bundle
a ______ of trees | forest
a ______ of bees | swarm
an ______ of soldiers | army
a ______ of grapes | bunch
a ______ of pupils | class
a ______ of cards | pack
a ______ of players | team
a ______ of keys | bunch`
      ]
      //lake - leak, deal - lead, dear-read, inch - chin, from - form, hate - heat, care - race
    },
    {
      label: 'Collective Nouns',
      type: 'matchByDragDrop',
      id: 'collective-noun',
      lockAfter: 1,
      commonData: {
        title: 'Drag and drop the collective nouns at proper places.',
        styles: {
          fontSize: '1rem',
          dashWidth: 70
        }
      },
      data: [
        `A *herd* of cattle
A *flock* of birds
A *school* of fish
A *pack* of wolves
A * swarm* of bees
A *choir* of singers
A *troupe* of dancers`,

        `A *pride* of lions is sitting by the tree.
The *class* of students is studying for the exams.
The cat in the attic gave birth to a *litter* of kittens.
I bought a *bunch* of grapes from the market.
A *herd* of buffaloes is bathing in the river.
Sania bought a *bouquet* of flowers for her mother.`,

        `A *staff* of employees
A *gang* of thieves
A *loaf* of bread
A *bowl* of rice
A *cup* of tea
A *crowd* of people
A *forest* of trees`
      ]
    },
    {
      type: 'rightOne',
      label: 'Outsider',
      id: 'odd-one-out',
      data: {
        title: `Find the odd one out. `,
        text: `friend, mother, father, cousin, niece
dinner, tea, lemonade, milk, coffee
office, house, palace, mansion, flat
table, chair, sofa, stool, seat
caravan, school, bank, hospital, theatre
bicycle, bus, train, car, truck
chicken, calf, puppy, kitten, piglet
plates, hammers, axes, screwdrivers, pliers  
ten o'clock, evening, night, afternoon, noon
salesman, grocer, butcher, florist, stationer`,
        noCaps: true
      }
    },
    {
      type: 'selectWord',
      label: 'Select All Nouns',
      id: 'multi-select-word',
      commonData: {
        title: 'Select all the nouns present in the below text.',
        multiSelect: true
      },
      data: [
        `His name is *Varun*. He lives in *Delhi*. He went to see the *Red Fort* yesterday.
  I am a *student*. I go to *school* regularly. I have many *friends* there.
  My *dad* brings me a *gift* every month. I like *surprises*.
  I like *paneer*. But *mom* says that *market* food is unhealthy. So, she will make *paneer* for me at *home*.
  *Sheena* is my *bestfriend*. We play, eat *lunch* and sit in the *class* together.
  I got a new *bicycle* on my birthday. I don't know how to ride. My *mom* will teach me in the *evening*.
  My *brother* is an *artist*. He works in *Mumbai*. He's planning to display his *drawings* at a *fare*.
  *Samir* is a naughty *boy*. He never listens to *teachers*. The *principal* has called his *parents*.
  I have never been to a *beach*. My *friends* tell me that there are a lot of *shells* within the *sand*.
  My *uncle* goes to the *office* every day. But my *father* goes to his *factory* daily. He is a *businessman*.
  *Cats* are domestic *animals*. We can *pet* them. *Cats* are of very different types and *colors*.`,

        `He saw a *monkey* up on the *tree*. It was eating a *banana*. The *monkey* threw the *peel* on his *head*.
  He gave a *flower* to the *teacher*. She thanked him. She gave him a *chocolate* in return.
  *Shabad* is a brave *boy*. He is not afraid of *dogs*. He has a *pet* *dog* at his *home*.
  Look, the *bus* is coming. I see a lot of *people* inside. I hope we find a *seat* to sit on.
  The *girl* is playing with her *doll*. She also loves her other *toys*, including the *kitchen set*.
  The *soldiers* protect the *country*. They are very brave *men*. We should always respect them.
  The *lawyer* won the *case*. Some *people* thought that the *judge* was unfair. But, it was the victory of the truth.
  My *teacher* is very polite. She teaches me all the *subjects*. She also tells us *stories* in our free *periods*.
  Do you know that *Australia* is both a *country* and a *continent*? The *capital* *city* of *Australia* is *Canberra*.
  He has a *toy car*. He plays with it all the time. I have a *remote* control * toy car*. I play with it in the noon.`,

        `*Rats* are commonly seen running in our *houses*. They make *holes* in our *clothes*. We should trap them in a *cage* and move them out of the *house*.
  A *zebra* is a wild *animal*. It lives in the *forest*. *Zebras* eat *grass*, *plants*, and *leaves*.
  *London* is a very famous *city*. It is also the *capital* of *England*. Do you know that *Delhi* is the *capital* of *India*?
  I have a *study table* at *home*. I keep all my *books*, *pencils*, *erasers*, *colors*, and *bag* in it.
  My *dad* gave my *mom* a beautiful *ring*. I liked it very much. When I grow up, I will buy a *ring*.
  The *girls* are talking in the *classroom*. But the *boys* are playing on the *ground*.
  She has a brown *dog*. It is very playful and friendly. Its name is *Bony*. We all love playing with it.
  My *sister* takes her *classes* online. She has a *laptop* but she attends her *class* by *mobile*.
  There are eight *members* in my *family*. I live with my *parents*, *grandparents*, *uncle*, *aunt* and *cousins*.
  Do you know that the *camel* is known as the *ship* of the *desert*? This is because it can stay without *water* for many *days*.`
      ]
    }
  ]
};
