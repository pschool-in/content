export default {
  label: 'Solar System',
  id: 'solar-system',
  lockAfter: 3,
  list: [
    {
      label: 'Heavenly Bodies - Notes',
      type: 'passage',
      id: 'heavenly-bodies-notes',
      data: {
        title: 'Heavenly Bodies',
        text: `The sun, the moon, stars, planets we see on the sky are called heavenly bodies. Some stars are brighter than others. It depends on their size and distance. Some planets are also visible to our eyes. Stars twinkle but planets don't.
        All planets in the solor system revolve around the Sun. They also rotate about their own axis.
        # Asteroids
        Between the planets Mars and Jupiter, there is a band of numerous small heavenly bodies. They are called asteroids. Asteroids also revolve around the sun.
        # Gravity
        All heavenly bodies exert a force of attraction or a pull on one another. This force is called the force of gravity. The sun exerts a gravitational pull on all planets. It is due to this force, planets revolve around the sun.
        It is also due to gravity that the moon revolves around the Earth. Moon is called a satellite of our earth. Other planets also have their own moons. Mars has 2 moons, and Jupiter has 53 moons.
        # Satellites
        Heavenly bodies that move around the planets are called satellites. Moon is a natural satellite. Apart from that, there are many man-made satellites that revolve around the Earth. They are sent to the space with the help of rockets. These man-made satellites help us in telecommunication, predicting weather, and making maps.
        # Do you know?
Space scientists have not yet been able to find a single other planet which has life on it. Therefore, our earth is an invaluable planet. The degradation of its environment for any reason will be a threat to the existence of life itself.`
      }
    },
    {
      label: 'Choose the correct Answer',
      id: 'mcq',
      type: 'mcq',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: ' The band of asteroids is seen between which planets?',
            options: 'Mars and Jupiter, Earth and Mars, Mercury and Earth'
          },
          {
            qText: 'Where do satellites get their light from?',
            options: 'Sun, Moon, Planets'
          },
          {
            qText:
              'What are the heavenly bodies that revolve around the planets?',
            options: 'Satellites, Asteroids, Stars '
          },
          {
            qText: 'What are man-made satellites used for?',
            options:
              'Telecommunication, Weather Forecasting, Map Making, *All of the Above'
          }
        ]
      }
    },
    {
      label: 'Drag and Drop',
      type: 'matchByDragDrop',
      id: 'drag-drop',
      data: {
        text: `*Satellites* revolve around the planets.
        *Planets* revolve around the Sun.
        *Moon* is a natural satellite of Earth.
        *Asteroids* are small heavenly bodies that revolve around the Sun.
        *Gravity* is the force between different heavenly bodies. `
      }
    },
    {
      label: 'Revolution & Rotation - Notes',
      type: 'passage',
      id: 'revolution-notes',
      data: {
        title: 'Revolution & Rotation',
        text: `The time taken by the earth to complete one rotation is called a day.
        The  time taken by the earth to complete one revolution around the sun is called a year. Acutually, the earth takes 365 days and 6 hours to complete one revolution. 
        # Leap Year
        Usually a year has 365 days. But to account for the extra 6 hours, we have a leap year with 366 days. That extra day goes to the February month. It will have 29 days, instead of 28 days. Any year which is divisible by 4 is a leap year.
        The period between two new moon day is 28-30 days.`
      }
    },
    {
      label: 'Fill up',
      type: 'matchByDragDrop',
      data: {
        text: `Usually a year has *365* days. But a leap year has *366* days.
        The Earth takes 365 days and *6* hours to complete one revolution around the Sun.
        If today is a full moon day, the next full moon day will come after *30* days.
        In a leap year, February month has *29* days, and on other years, it has *28* days.`
      }
    },
    {
      id: 'match',
      type: 'match',
      label: 'Match the Following',
      data: {
        text: `Natural Satellite, Moon
        Man-made Satellite, Predicting Weather
        Gravitation, Force
        Rotation, Day
        Revolution, Year`
      }
    },
    {
      id: 'fillup',
      label: 'Fill in the blanks',
      type: 'fillup',
      data: {
        title: 'Click on the blanks and fill it with the right word.',
        text: `The sun, the moon, the stars, the planets, etc are all known as *heavenly (heavy)* bodies.
*Stars (Planets)* have their own light.
The *sun (earth)* is a star.
*Planets (Stars)* do not have light of their own.
Planets *revolve (rotate)* around a star, and they also *rotate (revolve)* around themselves.`
      }
    },
    {
      label: 'Solar System - Reading',
      type: 'passage',
      id: 'reading',
      data: {
        title: 'Solar System',
        text: `We  can  see  numerous  stars  in  a  clear  sky at night.  The  sun  we  see  everyday  is  also a star and it is the  nearest  star  to  the earth.  The planets  revolve  around  the  sun  at  different  distances  in different orbits.  This  is  called solar system.
The sun is a ball of fire. It is very  hot.  Living  organisms  cannot  exist  on the earth  in the absence  of  the  sun. Our solar system has 8 planets.
1. Mercury is the smallest and the nearest planet to the sun.
2. Venus is the second planet. It is  very hot.  It  is  the  brightest  planet.
3. Earth is the third  planet and it  has  air  and  water.  It  supports  life and we all live here.
4. Mars  is  the  fourth  planet. It  is  red  in  colour.
5. Jupiter  is the fifth planet. It is the largest planet in the  solar  system.
6. Saturn is the sixth planet. There are big rings around it.
7. Uranus  is the seventh planet. It is made up of gases. It  also  has  rings. It  is  the  coldest  planet.
8. Neptune is  the  eighth  planet. It  is  bluish  green in  colour  and  it  is  surrounded  by  clouds.
9. Upto 2006, Pluto was considered as the ninth planet. Since  it does not have the  properties of a  planet,  it  is  now  regarded  as  a  dwarf  planet.
The first four planets that are nearer to the sun are called terrestrial planets. They are made of rock and metals. The last four planets that are far from the sun are called gaseous planets. They are mainly made of lighter gases like hydrogen and helium and a small molten rock core.`
      }
    },
    {
      label: 'Planets',
      type: 'sorting',
      data: {
        title:
          'Sort the planets based on its distance from sun. (Nearest planet at top)',
        text: 'Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune'
      },
      id: 'sorting'
    },
    {
      label: 'True or False',
      id: 'true-false',
      type: 'classifySentence',
      data: {
        types: [
          {
            name: 'True',
            text: `There are eight planets in our Solar System. 
The heavenly bodies that twinkle are called stars. 
The heavenly bodies that looks like stars but do not twinkle are planets.`
          },
          {
            name: 'False',
            text: `Our earth is not a planet.
There is life in every planet.
Other planets are not visible to us.`
          }
        ]
      }
    },
    {
      label: 'Terrestrial vs Gaseous Planets',
      type: 'group',
      id: 'planet-type',
      data: {
        types: [
          {
            name: 'Terrestrial',
            text: `Mercury, Venus, Earth, Mars`
          },
          {
            name: 'Gaseous',
            text: `Jupiter, Saturn, Uranus, Neptune`
          }
        ]
      }
    },
    {
      label: 'Solar System - Fillup',
      type: 'matchByDragDrop',
      id: 'fillup-2',
      data: [
        `*Sun* is the center of solar system.
*Jupiter* is the biggest planet.
*Saturn* has a big ring around it.
*Venus* is the bright and hottest planet.
*Uranus* is the coldest planet.
*Pluto* is a dwarf planet.`,

        `Every planet in the solar system *revolves* around the sun in a specific path called *orbit*.
Planets *rotate* about their own axis.
Pluto is called a *dwarf* planet.
It takes one *year* to complete a revolution and one *day* to complete a rotation.`
      ]
    },
    {
      label: 'Eclipse - Notes',
      type: 'passage',
      id: 'eclipse-notes',
      data: {
        title: 'Eclipse',
        text: `An eclipse happens when one object in space blocks another from view. 
        # Solar Eclipse
        It happens when the Moon comes between Earth and the Sun. The Moon blocks the Sun for a time so that people on Earth cannot see it.
        In ancient times solar eclipses caused great fear and wonder. People did not understand why the sky sometimes darkened in the middle of the day. Today scientists understand why eclipses happen and can determine when they will occur.
        # Lunar Eclipse
        The Moon does not make any light itself. Rather, the Sun shines on the Moon, and the reflected sunlight makes the Moon visible from Earth.
        During a lunar eclipse Earth blocks sunlight from reaching the Moon. The Sun, Earth, and the Moon line up, with Earth in the middle. The Moon is then in Earth's shadow. 
        We should not watch the solar eclipse directly, as it may affect our eyes. The radiations during the solar eclipse are harmful to our eyes. 
        There is no harm in watching lunar eclipse.`
      }
    },
    {
      label: 'True or False',
      id: 'true-false-2',
      type: 'classifySentence',
      data: {
        types: [
          {
            name: 'True',
            text: `Eclipses can be predicted.
            We should not see the solar eclipse directly.
            Jupiter is not a terrestrial planet.
            `
          },
          {
            name: 'False',
            text: `Eclipses are natural events and they cannot be predicted.
            We get lunar eclipse when the moon comes between the sun and the earth.
            We should not see the lunar eclipse directly.
            Earth is a gaseous planet.`
          }
        ]
      }
    },
    {
      label: 'Choose the correct Answer',
      id: 'eclipse-mcq',
      type: 'mcq',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: 'Eclipse happen when three heavenly bodies _____.',
            options: `are in a straight line
            form  a triange`
          },
          {
            qText:
              'If the moon comes between the sun and the earth, we get ______.',
            options: 'Solar eclipse, Lunar eclipse'
          },
          {
            qText: 'Which of these is a dwarf planet?',
            options: 'Pluto, Mars, Neptune, Venus'
          },
          {
            qText:
              'If the earth comes between the sun and the moon, we get _______.',
            options: 'Lunar eclipse, Solar eclipse'
          },
          {
            qText: 'Which of the following is not a gaseous planet?',
            options: 'Mars, Jupiter, Neptune, Uranus'
          },
          {
            qText: 'Which of the following is a gaseous planet?',
            options: 'Jupiter, Mars, Earth, Venus'
          }
        ]
      }
    },
    {
      label: 'Who am I?',
      type: 'completeWord',
      id: 'who-am-i',
      data: {
        text: `I turn around myself and revolve around the sun.| PLANET
        No other planet has a living world like mine.|EARTH
        I am the nearest star to the earth. | SUN | ___
        You can see me from the earth but the lighted part of me that you see changes every day.| MOON
        I have my own light. It is only from me that the planets get light and heat.|STAR `
      }
    },
    {
      id: 'fillup-last',
      label: 'Fill in the blanks',
      type: 'fillup',
      data: {
        text: `During *lunar (solar)* eclipse, the shadow of the Earth falls on the Moon.
        *Mars (Neptune)* is a terrestrial planet.
        *Venus (Mercury)* is the hottest planet.
        *Uranus (Earth)* is a gaseous planet.
        Solar Eclipse happen during *day (night)*.
        Mars has *2 (3, 1)* moons.
        The *Sun (Earth)* is the center of the solar system.`
      }
    }
  ]
};
