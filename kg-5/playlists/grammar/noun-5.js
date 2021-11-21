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
      }
    ]
  };
