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
          `Nouns can be countable or uncountable.
Countable nouns are easy to recognize. They are the things we can count on. 
For eg, pencils. We can count pencils. We can have one, two, three or more pencils.`,
          {
            type: 'hilight',
            text: 'eg: pen, house, dog'
          },
          `Uncountable nouns are substances, concepts, etc. that we cannot divide into separate elements. We cannot 'count' them. 
For example, we cannot count 'water'. We can count 'bottles of water' or 'litres of water', but we cannot count water itself.
Uncountable nouns cannot be counted.`,
          { type: 'hilight', text: 'eg: water, air, sand' },
          `# Plural nouns`,
          `Plural nouns are used to represent more than one item. Most plural nouns are formed by adding an 's' to the singular nouns.`,
          { type: 'hilight', text: 'eg: dogs, cats,  trees' },
          `If the singular noun ends with -s, -ss, -sh, -ch, -x or -z, then add '-es' to make it plural.`,
          {
            type: 'sitewords',
            text: 'buses, glasses, dresses, dishes, branches, taxes',
            width: 100
          },
          `If the noun ends with -f or -fe, the f is often changed to -ve before adding the -s to form the plural version.`,
          { type: 'hilight', text: 'eg: wife - wives, wolf - wolves' },
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
      id: 'classify-sentence',
      label: 'Identify-2',
      type: 'classifySentence',
      data: {
        title:
          'Identify whether the underlined nouns are countable or uncountable.',
        types: [
          {
            name: 'Countable',
            text: `There are a few Chinese *restaurants* in the city.
Priya took many *pictures* on her vacation.
Many *books* are kept on the table.
The *beds* we have are very old.
My *phone* is not working properly.`
          },
          {
            name: 'Uncountable',
            text: `Do you have a *water* bottle?
I like *butter* on my bread slice.
The police need *information* about the thief.
Her *intelligence* is undoubtful.
The *milk* is in the bottle.`
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
      type: 'fillup',
      data: {
        title: 'Click on the blanks and pick the right word. (cat or cats).',
        text:
          'I saw a *cat* on the window. Suddenly, a few more *cats* came from the street. One of the *cats*, was black in color. The oldest *cat* was slow in moving. Two *cats* were fighting. There was too much of noise. A gray-colored *cat* was scratching the window. I suddenly woke up and it was a bad dream. It was full of *cats*.',
        options: 'cat, cats'
      }
    },
    {
      id: 'fillup-1',
      label: 'One and More than one',
      type: 'fillup',
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
The books you are looking for are on that *shelf*.
Which is the sick *sheep?*
The *child's* parents are waiting outside.
The children's *bat* was lost.`,

          `There are *mice* in the storeroom.         
This is the way *monkeys* jump.
There are three *kittens* in the barn.
They are three *sisters* and one brother.
The *roads* of this city are very busy.`
        ],
        [
          `The policemen caught the notorious *thief*.
The queen anxiously awaited the *prince's* return.
The *buffalo* had a ring on its nose.
May I have another *ice cream* please?`,

          `*Ships* sail on the sea.
The *stars* could be seen, as the sun was setting.
I wake up to the sound of *birds*.
The *Rajputs* are known for their bravery.
The *streets* are very quiet these days!`
        ]
      ]
    },
    //Newly added
    {
      label: 'Singular-Plural - Reading',
      type: 'passage',
      id: 'singular-plural-reading',
      data: {
        title: 'Singular-Plural',
        text: `In simple words, singular means only one. Plural means more than one. We generally add 's' at the end of the nouns to make them plural. Some examples are:
1. The plural for an ant will be ants.
2. The plural for a cat will be cats
3. The plural for a bird will be birds.
Some nouns use different words as plural. Some examples are:
1. The plural for a child is children.
2. The plural for a tooth is teeth.
3. The plural for a foot is feet.`
      }
    },
    {
      type: 'group',
      label: 'Drag and Drop',
      id: '100',
      commonData: {
        title: 'Identify the singular and plural words.',
        types: ['Singular', 'Plural']
      },
      data: [
        [`Snake, Bat, Bear, Duck`, `Feet, Children, Teeth, Mice`],
        ['School, Pencil, Doctor, Market', 'Teachers, Windows, Lamps, Bosses'],
        ['Box, Wish, Plate, Berry', 'Skies, Tomatoes, Heroes'],
        ['Girl, Boy, Apple, Mango', 'Boxes, Classes, Dogs, Shops'],
        ['Spoon, Sister, Key, Orange', 'Flowers, Phones, Knees, Leaves']
      ]
    },
    {
      id: '200',
      label: 'Match the following',
      type: 'match',
      commonData: {
        title: 'Match the singular words with their plurals.'
      },
      data: [
        `Child, Children
Foot, Feet
Tooth, Teeth
Shelf, Shelves
Knife, Knives`,

        `Mouse, Mice
Man, Men
Plate, Plates
Chef, Chefs
Safe, Safes`,

        `Dress, Dresses
Bush, Bushes
Lunch, Lunches
Punch, Punches
Box, Boxes`,

        `Fox, Foxes
Bus, Buses
Dish, Dishes
Brush, Brushes
Wish, Wishes`,

        `Woman, Women
Family, Families
Ox, Oxen
Baby, Babies
Country, Countries`
      ]
    },
    {
      id: '300',
      label: 'Fill up with options',
      type: 'fillup',
      commonData: {
        title: `Choose the correct plurals.`
      },
      data: [
        `My friend has 2 *puppies (puppys)* in his house.
My mom bought 1 packet of *cherries (cheerys)*.
I love eating french *fries (frys)*.
I like *cats (caties)*.
Dogs have 4 *legs (leges)*.
I like eating *berries (berrys)*.
He divided the chocolate into two *halves (halfs)*.
My *teeth (tooths)* are white.
The police caught three *thieves (thiefs)*.
The *children (childs)* are playing in the park.`,

        `My aunt doesn't like *babies (babys)*.
*Monkeys (Monkeies)* climb trees very fast.
*Flies (Flys)* are very common insects.
There are a lot of *apples (appless)* in the tree.
Bees live in *hives (hivies)*.
There were many *people (persons)* in the room.
Human beings have two *feet (foots)*.
There are so many green *leaves (leafs)* in the tree.
There are twenty *sheep (sheeps)* on the farm.
I saw two black *fish (fishes)* in the pond.`
      ]
    },
    {
      label: 'Fish or Fishes',
      type: 'fillup',
      id: 'fillup-sp-1',

      data: {
        title: `Click on each blank and choose the right option.`,
        text: `Do you know that the plural for *fish (fishes)* is *fish (fishes)*. When we talk about a group of *fish (fishes)* in which all *fish (fishes)* are of the same type, we call them *fish (fishes)*. But, if we talk about many *fishes (fish)* of a different kind, they're called *fishes (fish)*.`
      }
    },
    {
      label: 'Cow or Cows',
      type: 'fillup',
      id: 'fillup-sp-2',

      data: {
        title: `Click on each blank and choose the right option.`,
        text: `A *cow (cows)* is a very common animal in India. There are more than 300 million *cows (cow)* in India. *Cows (Cow)* give us milk. Baby *cows (cow)* are called calves. We often see *cows (cow)* chewing. A group of *cows (cow)* is called a herd. *Cows (Cow)* are also called cattle.`
      }
    },
    {
      label: 'Dog or Dogs',
      type: 'fillup',
      id: 'fillup-sp-3',

      data: {
        title: `Click on each blank and choose the right option.`,
        text: `A *dog (dogs)* is a domestic animal. *Dogs (Dog)* are known as man's best friends. A *dog (dogs)* loves to eat bones and play fetch games. Do you know that *dogs (dog)* are the first animals that humans adopted as pets?`
      }
    },
    {
      label: 'Spider or Spiders',
      type: 'fillup',
      id: 'fillup-sp-4',

      data: {
        title: `Click on each blank and choose the right option.`,
        text: `A *spider (spiders)* has 8 legs. *Spiders (Spider)* make webs to trap the insects for food. Female *spiders (spider)* lay eggs. These are very common insects. *Spiders (Spider)* are generally found in the corners of our home.`
      }
    }
  ]
};
