export default {
    id: 'noun-5',
    label: 'Noun - 5',
    pdf: '',
    list: [
      {
        label: 'Gender Nouns',
        type: 'passage',
        id: 'nouns-5-reading',
        data: {
          title: 'Gender Nouns',
          text: `It helps us to identify the gender of the naming word. There are four types of gender nouns:
1. Masculine: The names of all male people or animals are called masculine gender nouns. For example, man, lion, hero, uncle, etc.
2. Feminine: The names of all female people or animals are called feminine gender nouns. For example, lady, lioness, heroine, aunt, etc.
3. Neuter: All non-living things cannot be referred to as males or females. So, all naming words that are non-living are called neuter gender nouns. For example, book, pen, chair, table, etc.
4. Common: The naming words that be used for both males and females are called common gender nouns. For example, child, parent, student, etc.`
    }
      },
  {
    type: 'group',
    label: 'Drag and drop',
    id: 'classify-common-neuter',
    commonData: {
      title: 'Classify these nouns as common gender and neuter gender.',
      types: ['Common', 'Neuter']
    },
    data: [
      [`Singer, Parent, Cat, Teacher`, `Chair, Table, Tree, Star`],
      [`Deer, Bird, Fish, Cub`, `Mountain, Street, Book, Car`],
      [`Enemy, Infant, Leader, Member`, `Paper, Computer, School, Pencil`],
      [`Servant, Neighbour, Cousin, Friend`, `Bus, TV, Speaker, Box`],
      [`Doctor, Teacher, Minister, Painter`, `Ocean, Words, Train, Road`],
      
    ]
  },
  {
  label: 'True or False',
  id: 'tf',
  type: 'classifySentence',
  data: {
    title: 'State whether the following statements are true or false. ',
    types: [
      {
        name: 'True',
        text: `The names of all females are called feminine gender nouns.
        Cousin is a common gender noun.
        Husband is a masculine gender noun.`
      },
      {
        name: 'False',
        text: `Non-living things are named as common gender nouns.
        Non-living things are named neutral gender nouns.`
        }
      ]
    }
  },
{
  type: 'selectWord',
  label: 'Identify',
  id: 'select-word',
  commonData: {
    title: 'Select the common and neuter gender nouns in these sentences.'
  },
  data: [
    `*Birds* live in trees.
    I love my *parents*.
    The *baby* is crying.
    The *young ones* are playing.
    There are forty *students* in the class.
    My English *teacher* is very polite.
    The *doctor* gave me medicines.
    I have very good *friends*.
    I saw a *stranger* in the park.
    The *children* are praying.`,

    `The books are on the *table*.
    He is sitting on the *chair*.
    The *picutre* is on the *wall*.
    This *stick* is made of *wood*.
    She rang the *bell*.
    Our *house* is in the city.
    There are many red *bricks* on roadside.
    I forgot my *phone* at home.
    That *car* was very fast.
    This is my *video game*.`
    ]
},
{
  type: 'selectWord',
  label: 'Identify the neuter gender',
  id: 'multi-select-word-1',
  commonData: {
  title: 'Identify the neuter gender nouns.',
  multiSelect: true
  },
  data: [
  `I have my exams from tomorrow. I need to buy new *pens* and *pencils*.
  I have borrrowed a *book* from the library. I will return it next week.
  This restaurant opened last week. The *food* here is very good.
  I am not a great *fan* of movies. I like watching shows.
  My dad gifted me a *mobile* for my 18th birthday. I love it.
  This *road* is very rough. I don't like coming from this way.
  That *chair* is really comfortable. But I only got to sit on it once.
  This *glass* is very delicate. You should handle it carefully.`
    ]
  },
  {
  type: 'selectWord',
  label: 'Identify the common gender',
  id: 'multi-select-word-2',
  commonData: {
    title: 'Identify the common gender nouns.',
    multiSelect: true
  },
  data: [
  `The watchman has caught the *thief*. We all are very proud of him.
  We all must obey our *parents*. They care a lot about us.
  I have two *siblings*. I am elder than them.
  I don't like *babies*. But my little *cousin* seems to like me a lot.
  Who is the *manager* of this hotel? I'd like to give a suggestion.
  I have very nice *friends*. I like spending time with them.
  There are many good *actors* in the film industry. It's difficult to choose a favourite one.
  My *friend* wants to become a *musician*. She is very talented.`
    ]
  },
  {
  type: 'selectWord',
  label: 'Identify the masculine gender',
  id: 'multi-select-word-3',
  commonData: {
      title: 'Identify the masculine gender nouns.',
      multiSelect: true
    },
  data: [
  `The *king* was a very wealthy *man*. The people of the village still remember him.
  My *father* is a very hard working person. He takes care of everyone.
  The *cock* makes rooster sound in the morning. All villagers wake up by hearing that.
  *Fox* is a very cunning animal. He plays tricks on everyone.
  The *boys* of my class are good at sports. They win all the games.
  There are forty *men* in the garden. Ret of them are women.`
    ]
  },
  {
    type: 'selectWord',
    label: 'Identify the feminine gender',
    id: 'multi-select-word-4',
    commonData: {
        title: 'Identify the feminine gender nouns.',
        multiSelect: true
      },
    data: [
    `There are many *cows* in the neighbourhood. They eat plants outside our house.
    *Hens* live in farms. They lay eggs that hatch into chicks.
    My *mother* is very caring. She cooks delicious food for me.
    My friend's *sister* is a dancer. She's practicing for a function.
    The *queen* is the king's wife. Sometimes they ruled the kingdom.
    The *women* are very caring. They take care of everything.`
        ]
      } 
    ]
  };
