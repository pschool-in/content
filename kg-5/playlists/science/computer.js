export default {
  id: 'computer',
  label: 'Computers',
  list: [
    {
      id: 'mcq',
      label: 'Multiple Choice Questions - MCQ',
      type: 'mcq',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText:
              'The shortcut key to perform a slide show or run a presentation is ________.',
            options: 'Ctrl+S, F5'
          },
          {
            qText:
              'In Ms word black document opens with a default name ______.',
            options: 'Document 1, New Document'
          },
          {
            qText: '________ are resource for storing information.',
            options: 'Files, Subfolder'
          },
          {
            qText: 'The example for presentation software is________.',
            options: 'MS Power point, MS.Excel'
          },
          {
            qText: '________ controls the entire operation of computer',
            options: 'System software, Utility software'
          }
        ]
      }
    },
    {
      id: 'fillup',
      label: 'Fill up by drag - Template',
      type: 'matchByDragDrop',
      data: {
        isPractice: false,
        styles: {
          dashWidth: 70,
          fontSize: '1rem'
        },
        text: `*Secondary memory* is called the auxiliary memory.
*Operating System*acts as mediator between computer and user hardware.
The keyboard shortcut for paste command is *Ctrl+V*.
*Glow effect*helps in highlighting the text.
A *Slide Show*is a series of slides or pages displayed in the presentation.`,
        title: 'Drag and drop the words at proper places.'
      }
    }
  ]
};
