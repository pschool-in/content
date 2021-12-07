export default {
  label: 'Festivals',
  id: 'festivals',
  list: [
    {
      label: 'What festival brings?',
      type: 'group',
      id: 'classify',
      data: {
        title: 'What festival brings?',
        types: [
          {
            name: 'Brings',
            text: 'joy, celebrations, blessings, happiness, greetings'
          },
          {
            name: "Doesn't Bring",
            text: ' worry, jealousy, hatred'
          }
        ]
      }
    },
    {
      label: 'National and Religious Festivals',
      type: 'group',
      id: 'classify-2',
      data: {
        title: 'National vs Religious Festivals',
        types: [
          {
            name: 'National',
            text:
              "Independence Day, Republic Day, Gandhi Jayanthi, Children's Day, Teacher's Day"
          },
          {
            name: 'Religious',
            text: 'Ramzan, Bakrid, Christmas, Easter, Diwali, Shivratri, Holi'
          }
        ]
      }
    },
    {
      label: 'National Festivals - Month',
      type: 'matchByDragDrop',
      id: 'drag-drop',
      data: {
        isPractice: false,
        title: 'Drag and drop to match National festivals with months.',
        styles: {
          fontSize: '1.3rem',
          dashWidth: 80
        },
        text: `Independence Day → *August* 
Republic Day → *January* 
Gandhi Jayanthi → *October* 
Children's Day → *November* 
Teacher's Day → *September*`
      }
    }
  ]
};
