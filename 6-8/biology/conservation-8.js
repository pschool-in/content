export default {
  id: 'conservation-8',
  label: 'Conservation of Plants and Animals',
  lockAfter: 4,
  list: [
    {
      label: 'Fill in the blanks',
      type: 'matchByDragDrop',
      id: 'fillup-drag-drop',
      data: {
        fontSize: '1rem',
        text: `A place where animals are protected in their natural habitat is called *biosphere reserves*.
Species having restricted to small area are known as *endemic species*.
Today, a major threat to the survival of these organisms is *deforestation*.
The plants found in a particular area are termed *flora*.
The animals found in a particular area are termed *fauna*.`
      }
    },
    {
      id: 'mcq',
      label: 'Multiple Choice Questions - MCQ',
      type: 'mcq',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: 'What are species on the verge of extinction called?',
            options: `endangered, extinct, fossil`
          },
          {
            qText:
              'A book carrying information on the endangered species is called __________.',
            options: `Red Data Book, Red Dates Book, Blue Data Book`
          },
          {
            qText: 'What are the species that have vanished called?',
            options: `extinct, endangered, dead`
          },
          {
            qText: 'What is the variety of plants found in an area called?',
            options: `flora, fauna, habitat`
          },
          {
            qText: 'What is the variety of animals found in an area called?',
            options: `fauna, flora, habitat`
          },
          {
            qText:
              'What are species found only in a particular habitat called?',
            options: `endemic, exotic, endangered`
          }
        ]
      }
    },
    {
      id: 'match',
      label: 'Match the following',
      type: 'match',
      data: {
        text: `Giant Squirrel, endemic
Dodo, extinct
Red Panda, endangered
Birds, migration
Reforestation, restock`,
        title: 'Match the following.'
      }
    },
    {
      label: 'Fill in the blanks',
      type: 'matchByDragDrop',
      id: 'fillup-drag-drop-2',
      data: {
        fontSize: '1rem',
        text: `*Endemic* species are found only in a particular area.
*Endangered* species are those which are facing the danger of *extinction*.
*Red Data* Book contains a record of endangered species.
*Migration* is the phenomenon of movement of a species from its own habitat to some other habitat.
We should save, *reuse* and recycle paper to save trees, energy and water.
*Reforestation* is the restocking of destroyed forests by planting new trees.`
      }
    },
    {
      id: 'match-2',
      label: 'Match the following',
      type: 'match',
      data: {
        text: `Bori, Wildlife Sanctuary
Satpura, National Park
Pachmarhi, Biosphere Reserve
Project Tiger, Tiger Reserve`,
        title: 'Match the following.'
      }
    }
  ]
};
