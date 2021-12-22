export default {
  id: 'noun-5',
  label: 'Gender Nouns',
  list: [
    {
      label: 'Gender Nouns',
      type: 'passage',
      id: 'nouns-5-reading',
      data: {
        title: 'Gender Nouns',
        text: `It helps us to identify the gender of the naming word. There are four types of gender nouns:
1. Masculine:
The names of all male people or animals are called masculine gender nouns.
For example, man, lion, hero, uncle, etc.
2. Feminine:
The names of all female people or animals are called feminine gender nouns.
For example, lady, lioness, heroin, aunt, etc.
3. Neuter:
All non-living things cannot be referred to as males or females. So, all naming words that are non-living are called neuter gender nouns.
For example, book, pen, chair, table, etc.
4. Common:
The naming words that be used for both males and females are called common gender nouns.
For example, child, parent, student, etc.`
      }
    },
    {
      type: 'group',
      label: 'Common vs Neuter Gender',
      id: 'classify-common-neuter',
      commonData: {
        title: 'Classify these nouns as common or neuter gender.',
        types: ['Common', 'Neuter']
      },
      data: [
        [`Singer, Parent, Cat, Teacher`, `Chair, Table, Tree, Star`],
        [`Deer, Bird, Fish, Cub`, `Mountain, Street, Book, Car`],
        [`Enemy, Infant, Leader, Member`, `Paper, Computer, School, Pencil`],
        [`Servant, Neighbour, Cousin, Friend`, `Bus, TV, Speaker, Box`],
        [`Doctor, Teacher, Minister, Painter`, `Ocean, Words, Train, Road`]
      ]
    },
    {
      type: 'selectWord',
      label: 'Select All Nouns',
      id: 'select-word-multi',
      commonData: {
        title:
          'Select all the common and neuter gender nouns in the below text.',
        multiSelect: true
      },
      data: [
        `*Birds* live in *trees*.
I love my *parents*.
The *baby* is crying.
The *young ones* are playing.
There are forty *students* in the *class*.
My English *teacher* is very polite.
The *doctor* gave me *medicines*.
I have very good *friends*.
I saw a *stranger* in the *park*.
The *children* are praying.`,

        `The *books* are on the *table*.
He is sitting on the *chair*.
The *picture* is on the *wall*.
This *stick* is made of *wood*.
She rang the *bell*.
Our *house* is in the *city*.
There are many red *bricks* on *roadside*.
I forgot my *phone* at *home*.
That *car* was very fast.
This is my *video game*.`
      ]
    },
    {
      type: 'selectWord',
      label: 'Select the words as Requested',
      id: 'multi-select-word-1',
      commonData: {
        multiSelect: true
      },
      data: [
        {
          title: 'Identify the neuter gender nouns in the below text.',
          text: `I have my exams from tomorrow. I need to buy new *pens* and *pencils*.
I have borrowed a *book* from the library. I will return it next week.
This *restaurant* opened last week. The *food* here is very good.
I am not a great *fan* of movies. I like watching shows.
My dad gifted me a *mobile* for my 18th birthday. I love it.
This *road* is very rough. I don't like coming from this *way*.
That *chair* is comfortable. But I only got to sit on it once.
This *glass* is very delicate. You should handle it carefully.`
        },
        {
          title: 'Identify the common gender nouns in the below text.',
          text: `The watchman has caught the *thief*. We all are very proud of him.
We all must obey our *parents*. They care a lot about us.
I have two *siblings*. I am elder than them.
I don't like *babies*. But my little *cousin* likes me a lot.
Who is the *manager* of this hotel? I'd like to give a suggestion.
I have very nice *friends*. I like spending time with them.
There are many good *actors* in the film industry. It's difficult to choose a favorite one.
My *friend* wants to become a *musician*. She is very talented.`
        },
        {
          title: 'Identify the masculine gender nouns in the below text.',
          text: `The *king* was a very wealthy *man*. The people of the village still remember him.
My *father* is a very hard-working person. He takes care of everyone.
The *cock* makes *rooster* sound in the morning. All villagers wake up by hearing that.
*Fox* is a very cunning animal. He plays tricks on everyone.
The *boys* in my class are good at sports. They win all the games.
There are forty *men* in the garden. The rest of them are women.`
        },
        {
          title: 'Identify the feminine gender nouns in the below text.',
          text: `There are many *cows* in the neighborhood. They eat plants outside our house.
*Hens* live in farms. They lay eggs that hatch into chicks.
My *mother* is very caring. She cooks delicious food for me.
My friend's *sister* is a dancer. She's practicing for a function.
The *queen* is the king's *wife*. Sometimes they ruled the kingdom.
The *women* are very caring. They take care of everything.`
        }
      ]
    },
    {
      type: 'group',
      label: 'Gender Bender! ',
      id: 'group',
      lockAfter: 1,
      commonData: {
        title: 'Drag and drop the below words in the respective boxes.',
        printTitle:
          'Rewrite the words given at the bottom at approprate boxes.',
        types: ['Masculine', 'Feminine']
      },
      data: [
        [
          `ram, gander, boy, bull, prince, waiter`,
          `czarina, spinster, hen, wife, queen`
        ],
        ['son, sir, actor, colt, priest', 'filly, princess, heroine, lady'],
        ['tiger, duke, man, master, monk', 'niece, aunt, bride, sister']
      ]
    },
    {
      type: 'match',
      label: 'Match the Gender Pair',
      lockAfter: 1,
      id: 'match',
      commonData: {
        title: 'Match the Gender Pair'
      },
      data: [
        `stewardess, steward
stallion, filly
giant, giantess
grandson, granddaughter
Count, Countess`,

        `peacock, peahen
landlord, landlady
emperor, empress
milkman, milkmaid
tiger, tigress`,

        `host, hostess
goddess, god
stepson, stepdaughter
maidservant, manservant
ram, ewe`,

        `nun, monk
stag, hind
rooster, hen
washerman, washerwoman
gentleman, lady`
      ]
    },
    {
      label: 'Same Basket',
      type: 'matchByDragDrop',
      id: 'same-basket',
      lockAfter: 1,
      commonData: {
        title: 'Drag and drop words, so that nouns of same group are together.',
        styles: {
          fontSize: '1rem',
          dashWidth: 70
        }
      },
      data: [
        `drumstick, capsicum, *cauliflower*
chess, snakes and ladder, *scrabble*
father, brother, *son*
elephant, boar, *zebra*
mango, apple, *orange*`,

        `oxygen, hydrogen, *nitrogen*
rooster, peacock, *falcon*
mother, sister, *daughter*
pencil, pen, *eraser*
snow, rain, *sunshine*`,

        `carrot, cabbage, *beetroot*
monopoly, checkers,  *carrom*
uncle, nephew, *grandfather*
giraffe, chimpanzee, *bison*
grapes, banana,  *kiwi*`,

        `turkey,  eagle, *vulture*
aunt, niece, *grandmother*
sharpener, ruler, *pencil box*
gale, snow, *storm*
hen, crow, *duck*`
      ]
    }
    // old
  ]
};
