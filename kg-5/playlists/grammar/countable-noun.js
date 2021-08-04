export default {
  label: 'Countable Noun',
  id: 'countable-noun',
  lockAfter: 3,
  list: [
    {
      id: 'reading',
      type: 'passage',
      label: 'Countable vs Uncountable Noun',
      data: {
        title: 'Countable vs Uncountable Noun',
        text: [
          `Nouns can be countable or uncountable.`,
          `Countable nouns are easy to recognize. They are the things we can count. For eg, pencils. We can count pencils. We can have one, two, three or more pencils.`,
          {
            type: 'hilight',
            text: 'eg: pen, house, dog'
          },
          `Uncountable nouns are substances, concepts etc. that we cannot divide into separate elements. We cannot 'count' them. For example, we cannot count 'water'. We can count 'bottles of water' or 'litres of water', but we cannot count water itself.`,
          `Uncountable nouns cannot be counted.`,
          { type: 'hilight', text: 'eg: water, air, sand' },
          `# Plural nouns`,
          `Plural nouns are used to represent more than one item. Most plural nouns are formed by adding an 's' to the singular nouns.`,
          { type: 'hilight', text: 'eg: dogs, cats,  trees' },
          `If the singular noun ends with -s, -ss, -sh, -ch, -x or -z, then add '-es' to make it plural.`,
          {
            type: 'sitewords',
            text: 'buses, glasses, dresses,dishes, branches, taxes',
            width: 100
          },
          `If the noun ends with ‑f or ‑fe, the f is often changed to ‑ve before adding the -s to form the plural version.`,
          { type: 'hilight', text: 'eg: wife – wives, wolf – wolves' },
          `# Exceptions`,
          { type: 'hilight', text: 'roofs, beliefs, chefs, chiefs' }
        ]
      }
    },
    {
      label: 'Classify Nouns',
      type: 'group',
      id: 'group',
      data: {
        title:
          'Classify the below words as countable and uncountable nouns. Drag and drop the words at the appropriate boxes.',
        printTitle:
          'Classify the below words as countable and uncountable nouns.',
        types: [
          {
            name: 'Countable',
            text: 'apple, car, television, umbrella, friend, book, shoe, cup'
          },
          {
            name: 'Uncountable',
            text: 'cheese, sugar, oil, butter, water, time, jam'
          }
        ]
      }
    },
    {
      label: 'Match the correct plural form',
      id: 'complete',
      type: 'completePuzzle',
      data: {
        type: 'rightOpen',
        title: 'Match the plural form of the given noun.',
        printTitle: 'Write the plural form',
        printNoOptions: true,
        text: `dog, dogs, doges
cat, cats, cates
branch, branches, branchs
church, churches, churchs
boat, boats, boates
bus, buses, buss
wish, wishes, wishs
box, boxes, boxs
river, rivers, riveres
house, houses, housees`
      }
    },
    {
      label: 'Irregular Plural Noun',
      id: 'complete-2',
      type: 'completePuzzle',
      data: {
        type: 'rightOpen',
        title: 'Match the plural form of the given noun.',
        text: `child, children, childs
goose, geese, gooses
man, men, mans
woman, women, womans
tooth, teeth , tooths
foot, feet, foots
mouse, mice, mouses
person, people, persons`
      }
    },
    {
      type: 'completeWord',
      label: 'Complete the plural',
      id: 'complete-3',
      data: {
        title: 'Complete the plural form of the given noun.',
        text: `person| people| p_____
goose| geese| g___e
foot| feet| f___
mouse| mice| m___
tooth| teeth| t___h`
      }
    },
    {
      label: 'Match the correct plural form',
      id: 'complete-ending-f',
      type: 'completePuzzle',
      data: {
        type: 'rightOpen',
        title: 'Match the plural form of the given noun.',
        questions: [
          {
            text: 'wife',
            options: 'wives, wifes'
          },
          {
            text: 'wolf',
            options: 'wolves, wolfs'
          },
          {
            text: 'roof',
            options: 'roofs, rooves'
          },
          {
            text: 'belief',
            options: 'beliefs, believes'
          },
          {
            text: 'chef',
            options: 'chefs, cheves'
          },
          {
            text: 'chief',
            options: 'chiefs, chieves'
          }
        ]
      }
    },
    {
      type: 'completeWord',
      label: 'Complete the plural - 2',
      id: 'complete-4',
      data: {
        title: 'Complete the plural form of the given noun.',
        text: `child| children| child___
toy| toys| to__
bone| bones| bon__
leaf| leaves| lea___
jar| jars| ja__`
      }
    },
    {
      id: 'fillup-cats',
      label: 'Cat or Cats',
      type: 'fillupOptions',
      data: {
        editable: true,
        title: 'Click on the blanks and pick the write word. (cat or cats).',
        text:
          'I saw a *cat* on the window. Suddenly, few more *cats* came from the street. One of the *cats*, was black in color. The oldest *cat* was slow in moving. Two *cats* were fighting. There was too much of noise. A gray colored *cat* was scratching the window. I suddenly woke up and it was a bad dream. It was full of *cats*.',
        options: 'cat, cats'
      }
    },
    {
      id: 'fillup-1',
      label: 'One and More than one',
      type: 'fillupOptions',
      commonData: {
        title: 'Click on the blanks and pick the correct option.'
      },
      data: [
        `one star; many *stars (stares)*
one  ox; two *oxen (oxes)*
a single chip;  few *chips (chipes)*
one goat ; a flock of *goats (goates)*
a knife ; three *knives (knifes)* 
a mango ; a dozen *mangoes (mangos)* 
an egg ; ten *eggs (egges)* 
a sheep ; a flock of *sheep (sheeps)* 
single child ; many *children (childrens)*`,

        `one potato ; five *potatoes (potatos)* 
a man ; three *men (mens)* 
a friend ; some *friends (friens)* 
a solitary deer; many *deer (deers)* 
one fairy ; two *fairies (faires) * 
a lonely duckling ; many *ducklings (ducklinges)* 
a funny clown ; many funny *clowns (clownes)* 
an eagle ; six *eagles (eagls)* 
one pet ; two *pets (petts)* 
only one seat ; few *seats(seat)*`
      ]
    },
    {
      type: 'classifySentence',
      label: 'Identify Noun Type',
      id: 'identify-type',
      commonData: {
        title:
          'Find whether the underlined noun is in the singular or plural form.',
        types: ['Singular', 'Plural']
      },
      data: [
        [
          `The women sat on the *bench*
Which  is the sick *sheep?*
The *child’s* parents are waiting outside.
The children’s *bat* was lost.`,

          `There are *mice* in the store room.
The books you are looking for are on that *shelf*.         
This is the way *monkeys* jump.
There are three *kittens* in the barn.
They are three *sisters* and one brother.
The *roads* of this city are very busy.`
        ],
        [
          `The policemen caught the notorious *thief*
The queen anxiously awaited the *prince’s* return.
The *buffalo* had a ring in its nose.
May I have another *ice cream* please?`,

          `*Ships* sail on the sea.
The *stars* could be seen, as the sun was setting.
I wake up to the sound of *birds*.
The *Rajputs* are known for their bravery.
The *streets* are very quiet these days!`
        ]
      ]
    }
  ]
};
