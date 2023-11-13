export default {
  id: 'light-8',
  label: 'Light - 8',
  lockAfter: 2,
  list: [
    {
      id: 'notes',
      type: 'passage',
      label: 'Laws of Reflection',
      data: {
        title: 'Laws of Reflection',
        text: `We see different objects and the world around us through our eyes. But still, we need light to see them. We cannot see anything in the dark.
To see an object, light must be emitted or reflected by the object. Mirror reflects the light that falls on it. Polished or shiny surface sometimes acts like a mirror.
# A ray of light
A ray of light is an idealization. In reality, we have a narrow beam of light which is made up of several rays. For simplicity, we use the term ray for a narrow beam of light.
# Incident & Reflected ray
After striking a mirror, a ray of light is reflected in another direction. The light ray which strikes is called the incident ray. The light ray which reflects is called the reflected ray. The perpendicular line drawn at the point of incidence is called normal.
The angle between the normal and incident ray is called the angle of incidence(∠i). The angle between the normal and the reflected ray is known as the angle of reflection(∠r).
# Laws of Reflection
The law of reflection says that the angle of incidence is always equal to the angle of reflection.   
It also says the incident ray, the normal at the point of incidence and the reflected ray all lie in the same plane.
# Diffused Reflection
When parallel rays are incident on an irregular surface, we get irregular or diffused reflection.
When parallel rays are incident on a regular surface like a mirror we get regular reflection. Images are formed by regular reflection.
# Multiple Reflection
Multiple reflection is possible with the help of two or more mirrors. We could have witnessed this in a hairdresser shop.
The idea of a number of images formed by mirrors placed at an angle to one another is used in a kaleidoscope to make numerous beautiful patterns.`
      }
    },
    {
      label: 'Drag & Drop',
      id: 'drag-drop',
      type: 'matchByDragDrop',
      data: {
        styles: {
          fontSize: '1.2rem',
          dashWidth: 80
        },
        text: `We need *light* to see the world around us with the help our *eyes*. We cannot see things in the *dark*.
We see TV through *emitted* light. We see tables and chairs through *reflected* light.`
      }
    },
    {
      id: 'fillup',
      label: 'Fill Up',
      type: 'fillup',
      data: {
        //title: 'Click the blanks and fill it with the right word.',
        text: `A ray of light can be considered as a *narrow (broad)* beam of light.
The *perpendicular(parallel)* line drawn at the point of incidence is called normal.
The angle between the normal and incident ray is called the angle of *incidence(reflection)*.
The image formed by the reflection on a running stream of water is *diffused (regular)* reflection.
Light travels in a *straight (curved)* line.
We could see multiple reflections in the *hair dresser (stationary)* shop.`
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
            text: `The incident and reflected ray always lie in the same plane.
The angle of incidence is always equal to the angle of reflection.`
          },
          {
            name: 'False',
            text: `Multiple reflections are not possible.
An LED bulb emits a ray of light.
The angle between the incident and reflected ray is called the angle of incidence.`
          }
        ]
      }
    },
    {
      id: 'mcq',
      label: 'Choose the correct answer',
      type: 'mcq',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText:
              'The reflection from irregular surface is called ______ reflection.',
            options: 'diffused, incidence, artificial'
          },
          {
            qText: 'The reflection from plain mirror is ______ reflection.',
            options: 'regular, irregular, diffused'
          },
          {
            qText: 'Which of the following is an example of a plane?',
            options: `A sheet of paper
A spherical ball
A straight stick`
          },
          {
            qText: 'Kaleidoscope works due to ________ reflection.',
            options: 'multiple, regular, diffused'
          },
          {
            qText: 'A ray of light can be practically same as ________.',
            options: `a narrow beam of light
a broad beam of light
natural sunlight`
          },
          {
            qText: 'Sunlight is ______ in color.',
            options: 'white, colorless, yellow, orange'
          }
        ]
      }
    },
    {
      label: ' Working of Eye - Reading',
      type: 'passage',
      id: 'notes-2',
      data: {
        title: 'Working of Eye',
        text: `Eye is one of the most important sense organs. Human eye is roughly spherical in shape. The outer coat of the eye is white. It is tough so that it can protect the interior of the eye from accidents. Its transparent front part is called the cornea. Behind the cornea, we find a dark muscular structure called the iris. In the iris, there is a small opening called the pupil. The size of the pupil is controlled by the iris. The iris is part of the eye which gives its distinctive colour. When we say that a person has green eyes, we refer actually to the color of the iris. The iris controls the amount of light entering into the eye.
Behind the pupil is a lens that is thicker in the center (convex lens). The lens focuses light on the back of the eye, on a layer called the retina. The retina contains several nerve cells. Sensations felt by the nerve cells are then transmitted to the brain through the optic nerve.
There are two kinds of cells.
1. cones - which are sensitive to bright light
2. rods - which are sensitive to dim light
Cones sense color. At the junction of the optic nerve and the retina, there are no sensory cells, so no vision is possible at the spot. This is called the blind spot.
The impression of an image does not vanish immediately from the retina. It persists for about 1/16th of a second. So, if still images of a moving object are flashed on the eye at a rate faster than 16 per second, the eye perceives this object as moving.
Movies we see are a sequence of pictures shown usually at a rate of 24 pictures per second.
Nature has provided eyes with eyelids to prevent any object from entering the eye. Eyelids also shut out light when not required.
The minimum distance at which the eye can see objects distinctly varies with age. The most comfortable distance at which one can read with a normal eye is about 25 cm. Some persons can see objects close to them clearly but cannot see distant objects so clearly. On the other hand, some persons cannot see objects nearby clearly but they can see distant objects quite well. With suitable corrective lenses, these defects of the eye can be corrected.
Sometimes, particularly in old age, eyesight becomes foggy. When it happens, persons are said to have cataracts. There is a loss of vision, sometimes extremely severe. It is possible to treat this defect. The opaque lens is removed and a new artificial lens is inserted. Modern technology has made this procedure simpler and safer. 
# Eye Care
Too little light or too much light is bad for the eyes. Insufficient light causes eyestrain and headaches. Too much light, like the Sun or a powerful lamp, can injure the retina. Never rub your eyes hard. If particles of dust go into your eyes, wash them with clean water. Always read at the normal distance (25 cm).
# Do you know?
Eyes of a crab are quite small but they can look all around. Similarly, butterflies can look all around but their eyes are big.
Owl can see well in the night but not during the day. It has a large cornea and a large pupil to allow more light. Also, its retina has a large number of rods and only a few cones.
On the other hand, birds like eagles can see well during the day but not in the night. They have more cones and fewer rods in the retina.`
      }
    },
    {
      id: 'drag-drop-image',
      label: 'Parts of Eye',
      type: 'dragAndDrop',
      data: {
        img: 'parts-eye.jpg',
        title: 'Parts of Eye',
        width: 350,
        height: 326,
        wordWidth: 70,
        fontSize: '1.2rem',
        words: [
          {
            word: 'Ciliary Muscle',
            x: 0,
            y: 30
          },
          {
            word: 'Iris',
            x: 0,
            y: 80
          },
          {
            word: 'Lens',
            x: 0,
            y: 130
          },
          {
            word: 'Cornea',
            x: 30,
            y: 200
          },
          {
            word: 'Optic Nerve',
            x: 220,
            y: 280
          },
          {
            word: 'Retina',
            x: 200,
            y: 240
          }
        ]
      }
    },

    {
      label: 'Drag and Drop',
      type: 'matchByDragDrop',
      id: 'drag-drop-2',
      commonData: {
        styles: {
          fontSize: '1.3rem',
          dashWidth: 80
        }
      },
      data: [
        `The transparent front part of our eye is called *cornea*. Behind it, we find a dark muscular structure called the *iris*, which has a small opening called *pupil*.
The lens behind the pupil focuses light on the back of the eye, on a layer called the *retina* which contains several *nerve cells*.`,

        `Cones are sensitive to *bright* light and rods are sensitive to *dark* light.
Night birds like owls have more *rods*, whereas day birds like eagles have more *cones*.
Butterflies have *big* eyes and crabs have *small* eyes.`
      ]
    },
    {
      id: 'fillup-2',
      label: 'Fill Up',
      type: 'fillup',
      data: {
        //title: 'Click the blanks and fill it with the right word.',
        text: `Human eye is roughly *spherical(circular)* in shape.
The dark muscular structure is called *iris (cornea)*.
Iris is responsible for the *color (size)* of our eye.  
The impression of an image persists in the retina for about *1/16th (1/24th)* of a second.   
Comfortable distance for reading is *25cm (40cm)*.`
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
            text: `Too much light is bad for eyes.
The lens behind the cornea is a convex lens.`
          },
          {
            name: 'False',
            text: `Cataract is very difficult to treat.
Crabs have small eyes and cannot see behind.
The eyes of all animals and birds are similar.
There is no blind spot in front of our eyes.`
          }
        ]
      }
    },
    {
      label: 'Complete Word',
      type: 'completeWord',
      id: 'complete-word',
      data: {
        text: `The transparent front part of our eye.| CORNEA| _____A
The muscular structure of our eye |IRIS| ____
In our eye, the opening inside the iris |PUPIL| _____
The nature of lens in our eye |CONVEX|C_____
In old age, eyesight becomes foggy due to ____. | CATARACT | C_______`
      }
    },
    {
      id: 'mcq-2',
      label: 'Choose the correct answer',
      type: 'mcq',
      data: {
        questions: [
          {
            qText: 'Which of the following is a night bird?',
            options: 'Owl, Eagle, Kite'
          },
          {
            qText: 'Which focuses the light falling on our eyes to the retina?',
            options: 'Convex lens, Iris, Cornea'
          },
          {
            qText:
              'Movies are usually shown at the rate of ____ pictures per second.',
            options: `24, 16, 12`
          },
          {
            qText:
              'Which of the following cannot be corrected by wearing glasses?',
            options: `Cataract
Can't see nearby objects
Can't see distant objects`
          },
          {
            qText: 'There is a blind spot due to ______.',
            options: `absence of sensory cells
eyelids
lack of light`
          }
        ]
      }
    }
  ]
};
