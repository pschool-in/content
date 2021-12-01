export default {
    id: 'light-sound-3',
    label: 'Light and Sound',
    lockAfter: 4,
    list: [
      {
        id: 'notes',
        label: 'Light and Sound',
        type: 'passage',
        data: {
          text: `# Light
          Light helps us to see different objects. Sun is the natural source of light and heat. It emits its own light. All stars are natural sources of Light. When natural light is not available, we use candles, torch, bulbs, etc. These are man-made sources of light. There are many objects around us which do not emit light at all such as tables, chairs, paper and clothes. Objects thst emit their own light are called luminous objects while those that do not emit their own light are called non-luminous objects. As the moon reflects the light of the sun, it is a non-luminous object. When light falls on objects, some objects allow light to pass through them while some do not. These are called transparent and opaque objects. Glass is transparent whereas wood is opaque.
          # Shadows
          When opaque objects do not allow light to pass through them, a dark area is formed behind them. A shadow is always formed on the opposite side of the source of light. The colour of the shadow is always black. Outdoor shadows are longer in the morning and evening and shortest at noon.
          # Sound
          We hear various types of sounds such as music, voices of people talking, honking of horns and many more. Sounds may or may not be pleasant to our ears. Sounds such as chirping of birds and various musical instruments such as a flute, a guitar or drums are pleasant to our ears. On the other hand, sounds such as horns, loud music and cutting of stones are unpleasant to hear. These sounds irritate us. They are called noises.
          # How is sound produced?
          Sound is produced when an object vibrates on being struck. For example, the sheet of the drum or strings of guitar vibrate when we strike them and they produce sound. When we speak, the air inside our mouth strikes the voice box present in our throat. The voice box vibrates and produces sound. We hear this sound through our ears.`,
          title: 'Light and Sound'
        }
      },
      {
        id: 'classify',
        label: 'Luminous vs Non- luminous',
        type: 'group',
        data: {
          title: 'Classify the objects based on their ability to emit light.',
          types: [
            {
              name: 'Luminous',
              text: 'sun, stars, bulb, candle, fire'
            },
            {
              name: 'Non- luminous',
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
          title: 'Classify the objects based on their ability to allow light to pass through them.',
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
        label: 'Multiple Choice Questions - MCQ',
        type: 'mcq',
        data: {
          title: 'Multiple Choice Questions',
          questions: [
            {
              qText: 'Which of the following is a natural luminous object?',
              options: `sun, bulb, candle, moon`
            },
            {
              qText: 'Which of the following objects allow light to pass through them?',
              options: `transparent objects, opaque objects, luminous objects, non-luminous objects`
            },
            {
              qText: 'When is the length of the shadow formed by the sun shortest?',
              options: `at noon, in morning, in evening, at night`
            },
            {
                qText: 'Which of the following objects does not form a shadow when light falls on it?',
                options: `glass, tree, umbrella, our body`
            },
            {
                qText: 'Which of the following vibrates in our body to produce sound?',
                options: `voice box, stomach, tongue, lungs`
            }
          ]
        }
      },
      {
        label: 'Fill in the blanks',
        type: 'matchByDragDrop',
        id: 'drag-drop',
        data: {
          isPractice: false,
          title: 'Drag and drop the words at proper place.',
          styles: {
            fontSize: '1rem',
            dashWidth: 80
          },
          text: `A *shadow* is formed when an object blocks the path of light.
          Transparent objects do not form shadow because light *pass* through them.
          The shadow formed due to the sun is *shortest* at noon.
          The moon shines due to light of the *sun*.`
        }
      },
      {
        label: 'Answer in one word',
        type: 'matchByDragDrop',
        id: 'drag-drop2',
        data: {
          isPractice: false,
          title: 'Drag and drop the words at proper place.',
          styles: {
            fontSize: '1rem',
            dashWidth: 80
          },
          text: `Main source of light on the earth - *sun*
          Objects that emit light of their own - *luminous objects*
          Sound that is unpleasant to our ears - *noise*
          Objects that allow light to pass through them - *transparent objects*
          Dark patch formed when an object blocks the path of the light - *shadow*`
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
              text: `We cannot see through opaque objects.
              Moon is a non-luminous object.
              `
            },
            {
              name: 'False',
              text: `A table is a transparent object.
              We cannot hear any sound in the dark.
              The sound of the loudspeaker is a soft sound.`
            }
          ]
        }
      }
    ]
  };
  