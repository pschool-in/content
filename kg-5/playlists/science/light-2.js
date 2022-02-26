export default {
  label: 'Light',
  id: 'light-2',
  list: [
    {
      label: 'Light and Shadow - Reading',
      type: 'passage',
      data: {
        title: 'Light and Shadow',
        text: `# Light
Light comes from different sources called light sources; our main natural light source is the sun. Other sources include fire, stars and man-made light sources such as light-bulbs and torches. Thanks to light, we see life in glorious colors.
# Shadow
A shadow is the dark shape made when something blocks light from a light source like the sun, a flashlight, or a campfire.`
      },
      id: 'passage'
    },
    {
      label: 'Artificial vs Natural',
      type: 'group',
      id: 'artificial-natural',
      data: {
        title: 'Classify natural and artificial sources of light',
        types: [
          {
            name: 'Artificial',
            text: 'light bulb, torch, lamp, candle '
          },
          {
            name: 'Natural',
            text: 'sun, star, fire'
          }
        ]
      }
    },
    {
      id: 'true-false',
      label: 'True or False',
      type: 'classifySentence',
      data: {
        title: 'Classify the sentences as true and false',
        types: [
          {
            name: 'True',
            text: `Sun is the most powerful source of light.
A candle is an artificial source of light.`
          },
          {
            name: 'False',
            text: `We do not need light to see objects.
Shadow is formed when light passes through objects.`
          }
        ]
      }
    },
    {
      label: 'Fill in the blanks',
      id: 'fillup',
      type: 'fillup',
      data: {
        text: `The *sun (moon)* is the most powerful source of light. 
A shadow is formed on the *opposite (same)* side of the source of light.
We cannot see anything in a *dark (lit)* room.`
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
            qText: 'Which of the following is an artificial source of light?',
            options: `torch, sun , fire`
          },
          {
            qText: 'What is the most powerful source of light?',
            options: `sun, moon, lamp`
          },
          {
            qText: 'What is a shadow?',
            options: `dark shape made when light is blocked by an object, dark reflection of the object in mirror, dark image in absence of light `
          }
        ]
      }
    }
  ]
};
