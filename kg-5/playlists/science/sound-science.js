export default {
  id: 'sound-science',
  label: 'Sound',
  lockAfter: 4,
  // music and instruments can be added here
  list: [
    {
      id: 'notes',
      label: 'Notes',
      type: 'passage',
      data: {
        text: `We hear various types of sounds such as music, voices of people talking, honking of horns and many more. Sounds may or may not be pleasant to our ears. Sounds such as chirping of birds and various musical instruments such as a flute, a guitar or drums are pleasant to our ears. On the other hand, sounds such as horns, loud music and cutting of stones are unpleasant to hear. These sounds irritate us. They are called noises.
# How is sound produced?
Sound is produced when an object vibrates on being struck. For example, the sheet of the drum or strings of guitar vibrate when we strike them and they produce sound. When we speak, the air inside our mouth strikes the voice box present in our throat. The voice box vibrates and produces sound. We hear this sound through our ears.
Too much of sounds can create noise pollution. If our ears get exposed to heavy sounds for a long time, then it loses its hearing ability. `,
        title: 'Sound'
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
            qText:
              'Which of the following vibrates in our body to produce sound?',
            options: `voice box, stomach, tongue, lungs`
          },
          {
            qText: 'Sound is a form of ______.',
            options: `energy, matter, air`
          },
          {
            qText: 'Sound is produced by _________.',
            options: `vibration, machine, animals, birds`
          },
          {
            qText: 'Unpleasant sounds are called _______.',
            options: `noise, irritation, headache, pollution`
          }
        ]
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
            text: `All sounds are not pleasant to ears.
Sound is a form of energy.
Sound is produced by vibration.`
          },
          {
            name: 'False',
            text: `
We cannot hear any sound in the dark.
The sound of the loudspeaker is a soft sound.`
          }
        ]
      }
    },
    {
      label: 'Fill in the blanks',
      type: 'matchByDragDrop',
      id: 'drag-drop',
      data: {
        text: `Unpleasant sound is called *noise* and it *irritates* us. 
Too much of sound can cause noise *pollution*.
Sound is a form of *energy* and it is caused by *vibration*.`
      }
    },
    {
      type: 'rightOne',
      id: 'right-spell',
      label: 'Correct Spelling',
      data: {
        title: 'Select with word with correct spelling.',
        fontSize: '1.3rem',
        noCaps: true,
        text: `pollution, pollusion, polution
noise, noice, nois
vibration, vaibration, viberation
pleasant, plesent, pleasent
chirping, cherping, chiriping`
      }
    }
  ]
};
