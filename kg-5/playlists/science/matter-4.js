export default {
  id: 'matter-4',
  label: 'Matter and Materials',
  pdf: '',
  lockAfter: 4,
  list: [
    {
      label: 'Materials',
      type: 'passage',
      id: 'notes',
      data: {
        title: 'Materials',
        text: `We can see lot of things around us. The matter from which a thing is made of is called material. For example: Chair is made of wood, Eraser is made of rubber, Candle is made of wax.
# Properties of Materials
We can measure, see or feel the materials. Different types of material have different properties that make them useful for various purposes. Most materials have more than one property. They can be hard or soft, shiny or dull, smooth or rough and flexible or rigid.
# Hard and Soft
Materials which cannot be easily compressed, cut, bent or scratched are called hard materials. eg: brick, bone and steel.
Materials which can be easily compressed, cut, bent or scratched are called soft materials. eg: foam, clay and skin.
# Shiny and Dull
Materials which reflect the light well are called shiny materials. eg: stainless steel, gold and diamond.
Materials which do not reflect the light well are called dull materials. eg: candle, paper and jute bag.
# Rough and Smooth
Materials which have ups and downs on their surface are called rough materials. eg: brick, rock and tyre.
Materials which do not have ups and downs on their surface are called smooth materials. eg: mirror, silk cloth and tiles.
# Flexible and Rigid
Materials which can be bent or stretched easily are known as flexible materials. eg: rubber band, electric wire and cycle tube.
Materials which cannot be bent or stretched easily are known as rigid materials. eg: stick, wooden scale and stone.
# Waterproof Materials
Materials that do not allow water to pass through them are called Waterproof Materials. eg: raincoat and aluminium foil of tablet strip.`
      }
    },
    {
      label: 'Hard vs Soft ',
      id: 'hard-soft',
      type: 'group',
      data: {
        title: 'Classify the below as hard and soft materials.',
        types: [
          {
            name: 'Hard',
            text: 'wood, brick, bone, steel'
          },
          {
            name: 'Soft',
            text: 'eraser, cotton, foam, clay, skin'
          }
        ]
      }
    },
    {
      label: 'Shiny vs Dull',
      id: 'shiny-dull',
      type: 'group',
      data: {
        title: 'Classify the below as shiny and dull materials.',
        types: [
          {
            name: 'Shiny',
            text: 'stainless steel, gold, diamond, mirror'
          },
          {
            name: 'Dull',
            text: 'candle, paper, jute bag, wood'
          }
        ]
      }
    },
    {
      label: 'Rough vs Smooth',
      id: 'rough-smooth',
      type: 'group',
      data: {
        title: 'Classify the below as rough and smooth materials.',
        types: [
          {
            name: 'Rough',
            text: 'brick, rock, tyre'
          },
          {
            name: 'Smooth',
            text: 'mirror, silk cloth, tiles, plate'
          }
        ]
      }
    },
    {
      label: 'Flexible vs Rigid',
      id: 'flexible-rigid',
      type: 'group',
      data: {
        title: 'Classify the below as flexible and rigid materials.',
        types: [
          {
            name: 'Flexible',
            text: 'rubber band, electric wire, cycle tube'
          },
          {
            name: 'Rigid',
            text: 'stone, wooden scale, steel pipe'
          }
        ]
      }
    },
    {
      id: 'match',
      label: 'Match',
      type: 'match',
      data: {
        title: 'Match the related ones.',
        fontSize: '1rem',
        text: `rough, rock
smooth, tiles
shiny, gold
soft, cotton
hard, steel`
      }
    },
    {
      id: 'match-2',
      label: 'Match',
      type: 'match',
      data: {
        title: 'Match the related ones.',
        fontSize: '1rem',
        text: `wood, chair
paper, book
stainless steel, spoon
mud, bricks
glass, jar`
      }
    },
    {
      id: 'match-3',
      label: 'Match',
      type: 'match',
      data: {
        title: 'Match the related ones.',
        fontSize: '1rem',
        text: `leather, shoe
wood, table
rubber, tyre
wax, candle
cotton, dress`
      }
    },
    {
      id: 'mcq',
      label: 'Multiple Choice Questions',
      type: 'mcq',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: 'Materials that can be bent are called _____.',
            options: `flexible, soft, hard, rigid`
          },
          {
            qText: 'Which of the following is not a soft material?',
            options: `mirror, clay, skin, cotton`
          },
          {
            qText:
              'The materials that does not allow water to pass through are called _________ materials.',
            options: `waterproof, dry, wet, hard`
          },
          {
            qText:
              'Which of the following is called the natural source of light?',
            options: `The Sun, The Moon, Electric light, Torch light`
          },
          {
            qText: 'Which of the following is not made of rubber?',
            options: `candle, tyre, eraser`
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
            text: `Gold and diamond are examples of shiny material.
Aluminium foil of tablet strips are waterproof.
Plastic scale is flexible but wooden scale is not flexible.`
          },
          {
            name: 'False',
            text: `Car tyres are smooth.
Cycle tube is not flexible.`
          }
        ]
      }
    },
    {
      type: 'rightOne',
      id: 'odd-one',
      label: 'Odd One Out',
      data: {
        title: 'Pick the odd one out.',
        text: `silk cloth, brick, coir, pine apple
stone, rubber band, cycle tube, electric wire
pen, sun, candle, torch
sponge, umbrella, rain coat, jerkin
glass bottle, paper plate, wooden board`
      }
    },
    {
      label: 'Light',
      type: 'passage',
      id: 'notes-2',
      data: {
        title: 'Light',
        text: `We see the world around us with the help of light. Where do we get light from? Light may come either from the Sun or from other sources like an electric lamp or a bulb. The objects that give off light are called light sources.
# Transparent,Translucent and Opaque objects
Transparent objects allow the light to pass through them. So, we can see things on the other side of the object. eg: air, glass and pure water.
Translucent objects allow some light to pass through them. So, we cannot see objects clearly, but we see them as blurred images through them. eg: paper soaked in oil, snow and vegetable oil.
Opaque objects do not allow light to pass through them. So, we cannot see through these objects. eg: wood, stone and metals.
# Experiment
Material Required: torch light, mirror, dark room
Direct the torch light on the mirror. You can observe the light getting reflected and falling on some other part of the room. If we tilt the mirror, the position of the reflected light changes.`
      }
    },
    {
      label: 'True or False',
      id: 'true-false-2',
      type: 'classifySentence',
      data: {
        title: 'Classify the below sentences as true and false',
        types: [
          {
            name: 'True',
            text: `We see the world around us with the help of light.
Paper soaked in oil is translucent.`
          },
          {
            name: 'False',
            text: `All solids are opaque.
Transparent objects are invisible to human eyes.
If we tilt the mirror, the direction of reflection does not change.`
          }
        ]
      }
    },
    {
      id: 'mcq-2',
      label: 'Multiple Choice Questions',
      type: 'mcq',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: 'Which is not a source of light?',
            options: `mirror, bulb, sun`
          },
          {
            qText:
              'The material that does not allow light to pass through are called ______.',
            options: `opaque, transparent, translucent`
          },
          {
            qText: 'Which of the following is not a transparent object?',
            options: `paper, glass, pure water, air`
          },
          {
            qText: 'Which of the following is not an opaque object?',
            options: `oil, metal, wood, stone`
          },
          {
            qText: 'Which of the following reflect light?',
            options: `mirror, glass, air, wood`
          }
        ]
      }
    },
    {
      id: 'match-4',
      label: 'Match',
      type: 'match',
      data: {
        title: 'Match the related ones.',
        fontSize: '1rem',
        text: `light source, Sun
waterproof, rain coat
transparent, glass
translucent, vegetable oil
opaque, metal`
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
        text: `We see the world around us with the help of *light*.
The objects that give off light are called light *sources*.
Light usually get *reflected* from mirror. 
Wood is *opaque*, but glass is *transparent*.`
      }
    }
  ]
};
