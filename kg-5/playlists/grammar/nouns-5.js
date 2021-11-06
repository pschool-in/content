export default {
    id: 'nouns-5',
    label: 'Nouns-5',
    pdf: '',
    list: [
      {
        label: 'Nouns-5',
        type: 'passage',
        id: 'nouns-5-reading',
        data: {
          title: 'Gender Nouns',
          text: `It helps us to identify the gender of the naming word. There are four types of gender nouns:
1. Masculine: The names of all male people or animals are called masculine gender nouns. For example, man, lion, hero, uncle, etc.
2. Feminine: The names of all female people or animals are called feminine gender nouns. For example, lady, lioness, heroine, aunt, etc.
3. Neuter: All non-living things cannot be referred to as males or females. So, all naming words that are non-living are called neuter gender nouns. For example, book, pen, chair, table, etc.
4. Commom: The naming words that be used for both males and females are called common gender nouns. For example, child, parent, student, etc.`
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
          [
            `Singer, Parent, Cat, Teacher`,
            `Chair, Table, Tree, Star`
          ],
          [
            `Deer, Bird, Fish, Cub`,
            `Mountain, Street, Book, Car`
          ],
          [
            'Enemy, Infant, Leader, Member',
            'Paper, Computer, School, Pencil'
          ]
        ]
      },
      {
        label: 'Classify-1',
        type: 'classifySentence',
        id: '100',
        data: {
        title: 'Identify whether these nouns are common gender or neuter gender.',
          types: [
            {
              name: 'Common Gender',
              text: `Servant
                     Neighbour
                     Cousin
                    Friend`
            },
            {
              name: 'Neuter Gender',
              text: `Bus 
                     TV 
                     Speaker
                     Box`
            }
          ]
        }
      },
      {
        label: 'Classify-2',
        type: 'classifySentence',
        id: '200',
        data: {
        title: 'Identify whether these nouns are common gender or neuter gender.',
          types: [
            {
              name: 'Common Gender',
              text: `Doctor
                     Teacher 
                     Minister
                     Painter`
            },
            {
              name: 'Neuter Gender',
              text: `Ocean 
                     Words 
                     Train
                      Road`
            }
          ]
        }
      },
      {
        label: 'True or False',
        id: 'tf',
        type: 'classifySentence',
        data: {
          title: 'State whether the following statements are true or false.',
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
      }
    ]
  };
