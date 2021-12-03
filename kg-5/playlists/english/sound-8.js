export default {
  label: 'More Images',
  id: 'sound-8',
  list: [
    {
      type: 'slides',
      id: 'gadgets',
      label: 'Gadgets',
      data: {
        audio: 'kg-5/gadget-other-flowers-2.mp3',
        title: 'Listening Activity',
        audioOffset: 0,
        text:
          'camera, headphone, pendrive, remote, smartphone, speaker, tablet, torch, web-camera|web camera'
      }
    },
    {
      type: 'slides',
      id: 'pictures',
      label: 'Other Pictures',
      commonData: {
        audio: 'kg-5/gadget-other-flowers-2.mp3'
      },
      data: [
        {
          audioOffset: 18,
          text:
            'knight, chariot, horse-carriage|horse carriage, yarn-ball|yarn ball, bow, arrow, fountain, pouch'
        },
        {
          audioOffset: 34,
          text:
            'trolley, whistle, twig, palanquin, medicine, conch, toothbrush, chocolate, toothpaste'
        }
      ]
    },
    {
      type: 'slides',
      id: 'flowers',
      label: 'Flowers',
      data: {
        audio: 'kg-5/gadget-other-flowers-2.mp3',
        title: 'Listening Activity',
        audioOffset: 52,
        text:
          'daffodil, gulmohar, lily, pansy, poppy, daisy, jasmine, magnolia, periwinkle, water-lily|water lily'
      }
    },
    {
      type: 'rightOne',
      label: 'Identify Gadgets',
      id: 'pick-gadgets',
      data: {
        title: 'Listen to the sound and click on the gadget.',
        type: 'image',
        audio: 'kg-5/gadget-other-flowers-2.mp3',
        audioOffset: 0,
        words:
          'camera, headphone, pendrive, remote, smartphone, speaker, tablet, torch, web-camera'
      }
    },
    {
      type: 'rightOne',
      label: 'Identify Pictures',
      id: 'pick-other',
      lockAfter: 2,
      commonData: {
        title: 'Listen to the sound and click on the picture.',
        type: 'image',
        audio: 'kg-5/gadget-other-flowers-2.mp3'
      },
      data: [
        {
          audioOffset: 18,
          words:
            'knight, chariot, horse-carriage, yarn-ball, bow, arrow, fountain, pouch'
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
      id: 'pick-flowers',
      data: {
        title: 'Listen to the sound and click on the flower.',
        type: 'image',
        audio: 'kg-5/gadget-other-flowers-2.mp3',
        audioOffset: 52,
        words:
          'daffodil, gulmohar, lily, pansy, poppy, daisy, jasmine, magnolia, periwinkle, water-lily'
      }
    }
  ]
};
