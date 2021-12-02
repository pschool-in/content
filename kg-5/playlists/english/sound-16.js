export default {
    label: 'More Images 2',
    id: 'sound-16',
    list: [
      {
        type: 'rightOne',
        label: 'Identify Gadgets',
        id: 'sound-gadgets',
        data: {
          title: 'Listen to the sound and click on the gadget.',
          type: 'words',
          audio: 'kg-5/gadget-other-flowers-2.mp3',
          audioOffset: 0,
          words:
            'camera, headphone, pendrive, remote, smartphone, speaker, tablet, torch, web camera'
        }
      },
      {
        type: 'rightOne',
        label: 'Identify Pictures',
        id: 'sound-other',
        lockAfter: 2,
        commonData: {
          title: 'Listen to the sound and click on the picture.',
          type: 'words',
          audio: 'kg-5/gadget-other-flowers-2.mp3'
        },
        data: [
          {
            audioOffset: 18,
            words:
              'knight, chariot, horse carriage, yarn ball, bow, arrow, fountain, pouch'
          },
          {
            audioOffset: 34,
            words:
              'trolley, whistle, twig, palanquin, medicine, conch, toothbrush, chocolate, toothpaste'
          }
        ]
      },
      {
        type: 'rightOne',
        label: 'Identify Flowers',
        id: 'sound-flowers',
        data: {
          title: 'Listen to the sound and click on the flower.',
          type: 'words',
          audio: 'kg-5/gadget-other-flowers-2.mp3',
          audioOffset: 42,
          words:
            'daffodil, gulmohar, lily, pansy, poppy, daisy, jasmine, magnolia, periwinkle, water lily'
        }
      },
      {
        type: 'dictation',
        label: 'Dictation Gadgets',
        id: 'dictation-gadgets',
        data: {
          title: 'Listen to the sound and type the word.',
          audio: 'kg-5/gadget-other-flowers-2.mp3',
          audioOffset: 0,
          words:
            'camera, headphone, pendrive, remote, smartphone, speaker, tablet, torch, web camera'
        }
      },
      {
        type: 'dictation',
        label: 'Dictation Pictures',
        id: 'dictation-other',
        lockAfter: 2,
        commonData: {
          title: 'Listen to the sound and type the word.',
          audio: 'kg-5/gadget-other-flowers-2.mp3'
        },
        data: [
          {
            audioOffset: 18,
            words:
              'knight, chariot, horse carriage, yarn ball, bow, arrow, fountain, pouch'
          },
          {
            audioOffset: 34,
            words:
              'trolley, whistle, twig, palanquin, medicine, conch, toothbrush, chocolate, toothpaste'
          }
        ]
      },
      {
        type: 'dictation',
        label: 'Dictation Flowers',
        id: 'dictation-flowers',
        data: {
          title: 'Listen to the sound and type the word.',
          audio: 'kg-5/gadget-other-flowers-2.mp3',
          audioOffset: 42,
          words:
            'daffodil, gulmohar, lily, pansy, poppy, daisy, jasmine, magnolia, periwinkle, water lily'
        }
      }
    ]
  };
  