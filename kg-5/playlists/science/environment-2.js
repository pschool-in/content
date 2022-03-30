export default {
  id: 'environment-2',
  label: 'Environment',
  lockAfter: 4,
  list: [
    {
      id: 'notes',
      label: 'Do you know?',
      type: 'passage',
      data: {
        title: 'Do you know?',
        text: `The age of a tree can be found by counting the number of annual growth rings in its trunk.
        Camels are used for travelling in the desert. The camel is called the 'Ship of the Desert'. The camel can drink a large amount of water at one go. It can live without food and water for many days.
        Sea water is salty and it cannot be used for farming. River water is stored by building a dam and used for farming.`
      }
    },
    {
      label: 'Drag and Drop',
      type: 'matchByDragDrop',
      id: 'drag-drop',
      data: {
        text: `A forest has *trees*.
          A sea has *fish*.
          The sky has *clouds*.
          A school has a *blackboard*.
          A house has a *kitchen*.
          A river starts at a *mountain* and ends at a *sea*.`
      }
    },
    {
      id: 'true-false',
      label: 'True or False',
      type: 'classifySentence',
      data: {
        types: [
          {
            name: 'True',
            text: `Sea water is salty.
              Turtles live in the sea.
              River water is used for farming.`
          },
          {
            name: 'False',
            text: `River water is salty.
              Fish lives only in a river.
              Sea water is used for farming.`
          }
        ]
      }
    },
    {
      id: 'match',
      label: 'Match the Following',
      type: 'match',
      data: [
        `Desert, Camel
          Plain , Cow
          Forest, Lion
          Pond, Fish`,

        `Sugar, Sweet
          Lemon, Sour
          Chilli, Spicy
          Sea water, Salty`
      ]
    }
  ]
};
