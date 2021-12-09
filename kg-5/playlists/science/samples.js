export default {
  list: [
    {
      id: 'notes-2',
      label: 'So many kinds of animals',
      type: 'passage',
      data: {
        title: '',
        text: ``
      }
    },
    {
      id: 'match',
      label: 'Match',
      type: 'match',
      data: {
        title: 'Match the related ones.',
        fontSize: '1rem',
        text: ``
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
            qText: '',
            options: ``
          },
          {
            qText: '',
            options: ``
          },
          {
            qText: '',
            options: ``
          },
          {
            qText: '',
            options: ``
          },
          {
            qText: '',
            options: ``
          }
        ]
      }
    },
    {
      id: 'fillup',
      label: 'Fill in the blanks',
      type: 'fillup',
      data: {
        text: ``,
        title: 'Fill in the blanks.'
      }
    },
    {
      label: 'Drag and Drop',
      type: 'matchByDragDrop',
      id: 'drag-drop',
      data: {
        isPractice: false,
        title: 'Drag and drop the words at proper place.',
        styles: {
          fontSize: '1rem',
          dashWidth: 80
        },
        text: ``
      }
    },
    {
      id: 'true-false',
      label: 'True or False',
      type: 'classifySentence',
      data: {
        title: 'True or False',
        types: [
          {
            name: 'True',
            text: ``
          },
          {
            name: 'False',
            text: ``
          }
        ]
      }
    },
    {
      id: 'classify',
      label: 'Living vs Non-living',
      type: 'group',
      data: {
        title: 'Classify the below as living and non-living things.',
        types: [
          {
            name: '',
            text: ''
          },
          {
            name: '',
            text: ''
          }
        ]
      }
    }
  ]
};
