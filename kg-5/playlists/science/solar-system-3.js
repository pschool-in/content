export default {
  id: 'solar-system-3',
  label: 'Solar system 2',
  lockAfter: 4,
  list: [
    {
      id: 'notes',
      label: 'Solar System',
      type: 'passage',
      data: {
        text: `# Sun
The Sun is located in the center of the Solar System. It is a hot ball of glowing gases. It is the most important source of energy for life on Earth. Life on Earth depends on light and heat from the Sun. The solar system also contains planets, comets, and asteroids. They all orbit around the Sun.  The Sun has a diameter of around 1.39 million kilometers / 864,000 miles. This is about 109 times bigger than Earth’s diameter.
# Moon
In the solar system, there are certain other celestial bodies that move around the planets. These are called the natural satellites. As the moon moves around the Earth, it is called the earth's natural satellite. Like earth, other planets also have satellites. Mars has two moons, Jupiter and Saturn have more than 50 moons each, Uranus has 27 moons and Neptune has 13 moons. There is no air and water on the moon, hence there is no life on the moon. There are big and small holes on the rocky surface of the moon. These holes are called craters. When we see the moon from the earth, its shape appears to change every night. The different shapes of the moon as seen from the earth are called the phases of the moon.
# Stars
There are uncountable twinkling objects in the space. These are called stars. They are made up of hot gases. They appear small because they are very far from us. Stars give out light of their own. The sun is also a star. Some stars stay together and form a pattern in the sky. This pattern is called a constellation. Some examples of constellation are Ursa major and Orion.
# Did you know
Planetarium are places built to educate people about space and objects in the space. People who study the sun, the moon, planets and stars are called astronomers. Aryabhatta was one of the most famous astronomers of India. We use a telescope to look at faraway objects such as the moon, stars and other heavenly bodies.`,
        title: 'Sun, Moon and Stars'
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
            qText: 'Which planet has two moons?',
            options: `mars, jupiter, saturn, venus`
          },
          {
            qText: 'What is the sun?',
            options: `star, galaxy, planet, natural satellite`
          },
          {
            qText: 'How many moons does the earth have?',
            options: `1, 22, 50, 13`
          },
          {
            qText: 'What is Orion?',
            options: `constellation, star, planet, natural satellite`
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
        text: `Ursa major is a *constellation*.
There is no life on the moon because there is no air and *water* on the moon.
Different shapes of the moon seen from the earth are called *phases* of the moon.
Holes present on the surface of the moon are called *craters*.`
      }
    },
    {
      id: 'match',
      label: 'Match the following',
      type: 'match',
      data: {
        text: `orion, constellation
2 moons, mars
27 moons, uranus
13 moons, neptune
50 moons, jupiter`,
        title: 'Match with appropriate choice'
      }
    },
    {
      label: 'Name the following',
      type: 'matchByDragDrop',
      id: 'drag-drop-2',
      data: {
        isPractice: false,
        title: 'Drag and drop the words at proper place.',
        styles: {
          fontSize: '1rem',
          dashWidth: 80
        },
        text: `Places built to educate people about space and objects in the space - *Planetarium*
Holes on the surface of the moon - *craters*
Pattern formed by stars in the sky - *constellation*
Planet with 13 moons - *Neptune*
Planet with 50 moons - *Saturn*`
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
            text: `Sun is the center of the solar system.
Sun is also a star.`
          },
          {
            name: 'False',
            text: `Moon is one of the planets of our solar system.
Venus has 50 moons.`
          }
        ]
      }
    }
  ]
};
