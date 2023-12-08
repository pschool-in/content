export default {
  id: 'day-night',
  label: 'Day and Night',
  pdf: '',
  lockAfter: 2,
  list: [
    {
      id: 'notes',
      type: 'passage',
      label: 'Notes',
      data: {
        title: 'Day and Night',
        text: [
          `Day and night repeat every day. Dawn is the early morning just before sunrise. It is good for health to wake up at this time.
Morning follows the dawn. It is the time to get ready, eat breakfast and go to school.
Lunch is at noon. The time that follows noon is called afternoon.
Evening is playtime. Then the Sun sets.
Twilight is the time after sunset, just before the night. The time between dawn and sunrise is also called Twilight.
Night is the time to sleep.
We get day and night because of the rotation of our Earth.`,
          { type: 'img', src: 'science/spinning-top.jpg' },
          `The Earth rotates just like this top. The Sun is the light source like this torch. The sun rises in the east and sets in the west.`
        ]
      }
    },
    {
      id: 'match',
      label: 'Match the following',
      type: 'match',
      data: {
        text: `sunrise, dawn
morning, breakfast
noon, lunch
after sunset, twilight
evening, playtime
night, sleep`
      }
    },
    {
      id: 'notes-2',
      type: 'passage',
      label: 'Sun, Moon and Star',
      data: {
        title: 'Sun',
        text: `The Sun is a star. We get light and heat from the Sun. There can be no life on the Earth without the sun. It helps plants grow. The Sun is much bigger than the Earth. 
# Moon
The moon has no light of its own. It gets its light from the Sun. The moon appears to change shape every night. On the night when we see it in its complete form, it is called the full moon. On the night when we cannot see the moon at all, it is called the new moon.
# Stars
There are so many stars in the sky. The stars shine at night. They have their own light. They look small because they are very far away. The Sun is the nearest star. We see that a group of stars appears to form a pattern in the sky. In the olden days, the position of the pattern of stars helped people to find directions during travel.
# Do you know?
1. The sunflower buds turn and face the Sun.
2. Some flowers like jasmine blooms at night.
3. Owls and Bats are active at night.
4. The sunlight takes around 8 minutes to reach the earth.
5. Neil Armstrong was the first man to step on the moon.`
      }
    },
    {
      id: 'mcq',
      label: 'Choose the best answer',
      type: 'mcq',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: 'The Sun is a _____.',
            options: 'star, moon, planet, solar system'
          },
          {
            qText: 'The Moon gets its light from _____.',
            options: 'the Sun, the stars, other plants, the sky'
          },
          {
            qText: 'The time after sunset is called ______.',
            options: 'twilight, night, evening'
          },
          {
            qText: 'In olden days, people find the direction using _______.',
            options: `the position of star pattern
the shape of the moon
the position of the moon`
          },
          {
            qText: 'Neil Armstrong was the first man to step on _____.',
            options: 'the Moon, the Sun, the Mars, the Earth'
          }
        ]
      }
    },
    {
      label: 'True or False',
      id: 'true-false',
      type: 'classifySentence',
      data: {
        types: [
          {
            name: 'True',
            text: `The Sun gives us light and heat.
The sunflower blooms during the day.
Owls and Bats are active at night.`
          },
          {
            name: 'False',
            text: `The Jasmine blooms during the day.
We can see the complete moon on a new moon day.`
          }
        ]
      }
    },
    {
      label: 'Find the Word',
      type: 'sequence',
      id: 'name-them',
      data: {
        title: 'Based on the below clue, connect letters and form the word.',
        type: 'clue',
        text: `The time when the Sun rises|DAWN
The closest star to the Earth |SUN
They give direction to the people traveling by night.|STARS
It gets its light from the Sun. |MOON
A bird that is active in the night. | OWL`
      }
    },
    {
      label: 'Discover the Word',
      type: 'completeWord',
      id: 'complete-word',
      data: {
        text: `The time after sunset | TWILIGHT
The day when the moon will not be visible. | NEW MOON|N__ M___
The first man to land on the moon | NEIL ARMSTRONG | N_I_ A__S_____
A flower that blooms in the evening | JASMINE
The time that follows noon. | AFTERNOON`
      }
    },
    {
      label: 'Fill in the blanks',
      type: 'matchByDragDrop',
      id: 'drag-drop',
      data: [
        `Sun helps *plants* grow. Sun is the *nearest* star. Stars appear *small* because they are *far* away. Stars have their *own* light, but *moon* doesn't have its own light.`,

        `The sun rises in the *east* and sets in the *west*. The earth rotates like a *top*. The shape of the Earth is like a very big *ball*.
We get more sunlight in *summer* and less sunlight in *winter*.`
      ]
    }
  ]
};
