export default {
  id: 'light-3',
  label: 'Light',
  lockAfter: 2,
  list: [
    {
      id: 'notes',
      label: 'Light',
      type: 'passage',
      data: {
        text: `# Light
Light helps us to see things around us. The sun is the natural source of light. It emits its own light. All stars are natural sources of light. When natural light is not available, we use candles, torches, bulbs, etc. These are man-made sources of light. Many objects around us do not emit light at all such as tables, chairs, paper and clothes. Objects that emit their own light are called luminous objects while those that do not emit their own light are called non-luminous objects. As the moon reflects the light of the sun, it is a non-luminous object. 
We can see any object only when light falls on it and bounces off and the light is reflected back into our eyes. We cannot see anything in a dark room because there is no light.
When light falls on objects, some objects allow light to pass through them while some do not. These are called transparent and opaque objects. Glass is transparent whereas wood is opaque.
# Shadows
A shadow is always formed on the opposite side of the source of light. The color of the shadow is always black.
A shadow is formed when light cannot pass through an object. That is, the object blocks the path of light. Shadows also tell us that light travels in a straight line. Light cannot bend its path.
Sometimes, shadows are long and sometimes they are short. It depends on the position of the source of light. Outdoor shadows are longer in the morning and evening and shortest at noon.`,
        title: 'Light'
      }
    },
    {
      id: 'classify',
      label: 'Luminous vs Non-luminous',
      type: 'group',
      data: {
        title: 'Classify the objects based on their ability to emit light.',
        types: [
          {
            name: 'Luminous',
            text: 'sun, stars, bulb, candle, fire'
          },
          {
            name: 'Non-luminous',
            text: 'book, table, chair, moon, pencil'
          }
        ]
      }
    },
    {
      id: 'classify-2',
      label: 'Transparent vs Opaque',
      type: 'group',
      data: {
        title:
          'Classify the objects based on their ability to allow light to pass through them.',
        types: [
          {
            name: 'Transparent',
            text: 'glass, water, air'
          },
          {
            name: 'Opaque',
            text: 'wood, brick, book'
          }
        ]
      }
    },
    {
      id: 'mcq',
      label: 'Multiple Choice Questions',
      type: 'mcq',
      data: {
        title: 'Select the right ones',
        questions: [
          {
            qText: 'Which of the following is a natural luminous object?',
            options: `sun, bulb, candle, moon`
          },
          {
            qText:
              'Which of the following objects allow light to pass through them?',
            options: `transparent objects, opaque objects, luminous objects, non-luminous objects`
          },
          {
            qText:
              'When is the length of the shadow formed by the sun the shortest?',
            options: `at noon, in the morning, in the evening, at night`
          },
          {
            qText:
              'Which of the following objects does not form a shadow when light falls on it?',
            options: `glass, tree, umbrella, our body`
          }
        ]
      }
    },
    {
      label: 'Fill in the blanks',
      type: 'matchByDragDrop',
      id: 'drag-drop',
      data: [
        `A *shadow* is formed when an object blocks the path of light.
Transparent objects do not form shadows because light *passes through them.
The shadow formed due to the sun is *short* at noon.
The moon shines due to the light of the *sun*.
In the evening, shadows are *long*.`,

        `The *sun* is an example of a luminous object.
A *table* is an example of a non-luminous object.
A wall is an example of *opaque* object.
Clean water is an example of *transparent* object.
Light travels in a *straight* line.`,

        `The sun is a *natural* source of light.
Objects that emit light of their own are called *luminous* objects.
Objects that allow light to pass through them are called *transparent* objects.
A dark patch formed when an object blocks the path of the light is called *shadow*.
Objects that don't allow light to pass through them are called *opaque* objects.`
      ]
    },
    {
      id: 'true-false',
      label: 'True or False',
      type: 'classifySentence',
      commonData: {
        title: 'True or False',
        types: ['True', 'False']
      },
      data: [
        [
          `We cannot see through opaque objects.
The moon is a non-luminous object.
Light travels in a straight line.`,
          `A table is a transparent object.
The moon is a luminous object.`
        ],
        [
          `We cannot see things around us in the dark.
The color of the shadow is always black.`,
          `We cannot see non-luminous objects.
Shadow is the longest at noon.
Moon has light on its own.`
        ]
      ]
    },
    {
      type: 'rightOne',
      id: 'right-spell',
      label: 'Correct Spelling',
      data: {
        title: 'Select with word with correct spelling.',
        fontSize: '1.3rem',
        noCaps: true,
        text: `opaque, opack, opaq
transparent, transperant, transperent
luminous, loominous, lominous
reflect, reflact, raflect
bounce, bounse, baunce`
      }
    }
  ]
};
