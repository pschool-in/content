export default {
    id: 'solar-sysytem-5',
    label: 'Solar System-3',
    pdf: '',
    lockAfter: 4,
    list: [
      {
        label: 'Our Earth and Our Solar System',
        type: 'passage',
        id: 'solar-system',
        data: {
          title: 'Our Earth and Our Solar System',
          text: `# Heavenly Bodies
          When we look up from an open ground, we see the sky. In a clear night sky, we can see many stars. They are very far away from the earth. The sun and the moon are comparatively close to the earth. So, we can see their round shapes. The sun, the moon, the stars, the planets, etc are all known as heavenly bodies.
          
          # Stars
          The heavenly bodies that twinkle are called stars. Stars have their own light. The sun is a star. It is closer to us than any of the other stars. Hence, it appears big and brilliant. In its bright light, during the day, we cannot see other stars.
          
          # Planets
          The heavenly bodies that do not twinkle are called planets. Planets do not have light of their own. They get light from the stars. Planets revolve around a star, even as they rotate around themselves.
          
          # Solar System
          Our earth is a planet. It gets its light from the sun. It moves around the sun. Its movement around the sun is called the revolution of the earth. Besides earth, seven other planets revolve around the sun. They are Mercury, Venus, Mars, Jupiter, Saturn, Uranus and Neptune. Every planet in the solar system revolves around the sun along a specific path. This path is known as that planet’s orbit. The sun, which is a star, and the planets that revolve around it are together called the solar system. Besides the planets, the solar system also includes various other heavenly bodies.`
        }
      },
      {
        id: 'fillup',
        label: 'Fill in the blanks',
        type: 'fillupOptions',
        data: {
          title: 'Click the blanks and fill it with the right word.',
          text: `The sun, the moon, the stars, the planets, etc are all known as *heavenly (heavy)*bodies.
          *Stars (Planets)* have their own light.
          The *sun (earth)* is a star.
          *Planets (Stars)* do not have light of their own.
          Planets *revolve (rotate)* around a star, even as they *rotate (revolve)* around themselves.`
        }
      },
      {
        label: 'True or False',
        id: 'true-false',
        type: 'classifySentence',
        data: {
          title: 'Classify the below sentences as true and false',
          types: [
            {
              name: 'True',
              text: `Besides earth, seven other planets revolve around the sun. 
              The heavenly bodies that twinkle are called stars. 
              The heavenly bodies that do not twinkle are called planets.`
            },
            {
              name: 'False',
              text: `Our earth is not a planet.
              Every planet in the solar system rotates around the sun along a specific path.`
            }
          ]
        }
      },
      {
        label: 'Name the Following',
        type: 'matchByDragDrop',
        id: 'drag-drop ',
        data: {
          isPractice: false,
          title: 'Drag and drop the given words at the right blanks.',
          styles: {
            fontSize: '1.3rem',
            dashWidth: 80
          },
          text: `A heavenly body that twinkles - *stars*
          A heavenly body that does not twinkle - *planets*
          A specific path around the sun along which a planet revolves around the sun - *orbit*
          A star close to the earth - *sun*`
        }
      },
      {
        label: 'Fill in the blanks',
        type: 'matchByDragDrop',
        id: 'drag-drop2',
        data: {
          isPractice: false,
          title: 'Drag and drop the given words at the right blanks.',
          styles: {
            fontSize: '1.3rem',
            dashWidth: 80
          },
          text: `Earth's movement around the sun is called *revolution*.
          Every planet in the solar system revolves around the sun in a specific path called *orbit*.
          In the sun's bright light we cannot see the other *stars* during the day.
          *Planets* do not have light of their own.
          Planets *rotate* around themselves.`
        }
      },
      {
        label: 'Solar System',
        type: 'passage',
        id: 'solar-system-2',
        data: {
          title: 'Solar System',
          text: `# Satelites
          Some heavenly bodies revolve around planets. These are called satellites. Satellites too get their light from the sun. We see the moon at night. It revolves around the earth. Hence, it is called a satellite of the earth. The planets revolve around the sun along with their satellites.

          # Man - made Satellites
          Man-made satellites provide useful information foragriculture, environment, weather forecasting, making maps, and searching for water and mineral wealth on the earth. They are also used for telecommunication. They are put into orbit around the earth. They can remain in space for many years.
          
          # Dwarf Planets
          Some smaller heavenly bodies revolve around the sun. They are called dwarf planets. Of these, the most well-known is Pluto. Dwarf planets revolve independently around the sun. They have an orbit of their own.
          
          # Asteroids
          Between the planets Mars and Jupiter, there is a band of numerous small heavenly bodies. They are called asteroids. Asteroids also revolve around the sun. Compared to the sun, other heavenly bodies in the solar system are much smaller. The moon is closest to the earth. That is why, it appears to be so big although it is smaller than the sun.
          The planets, satellites, dwarf planets and asteroids are all part of the solar system.
          
          # Gravity
          All heavenly bodies exert a force of attraction or a pull on one another. This force is called the force of gravity. The sun exerts a gravitational pull on all planets whereas the planets tend to move away from the sun. As a result of these two forces, a planet keeps revolving around the sun at a fixed distance in a fixed orbit. In the same way, satellites revolve around their planets. 
          Due to the earth’s gravity, all things on the earth remain on it. Even if we throw something upwards with great force, it finally falls to the ground.`
        }
      },
      {
        label: 'Man-made Vs Natural',
        id: 'manmade-natural',
        type: 'group',
        data: {
          title: 'Classify the following as natural or man-made satellites',
          types: [
            {
              name: 'Man-made',
              text: 'Sputnik, Aryabhatta, Skylab'
            },
            {
              name: 'Natural',
              text: 'Moon, Titan'
            }
          ]
        }
      },
      {
        label: 'Fill in the blanks',
        type: 'matchByDragDrop',
        id: 'drag-drop3',
        data: {
          isPractice: false,
          title: 'Drag and drop the given words at the right blanks.',
          styles: {
            fontSize: '1.3rem',
            dashWidth: 80
          },
          text: `The force that all heavenly bodies exert on one another is called *gravity*.
          The smaller heavenly bodies that revolve around the sun are called *dwarf* planets.
          *Pluto* is a well-known dwarf planet.
          The band of numerous heavenly bodies between Mars and Jupiter is called *asteroids*.
          The heavenly bodies that revolve around a planet are called *satellites*.`
        }
      },
      {
        label: 'Choose the correct Answer(s)',
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
              qText:
                'Which of these is a dwarf planet?',
              options: 'Pluto, Mars, Neptune, Venus'
            },
            {
              qText: 'Where do satellites get their light from?',
              options: 'sun, moon, planets'
            },
            {
              qText: 'What are the heavenly bodies that revolve around the planets?',
              options: 'satellites, sun, earth '
            },
            {
                qText: 'What are man-made satellites used for?',
                options: '*telecommunication, *weather forecasting, *making maps, none of the above'
            }
          ]
        }
      },
      {
        label: 'Space',
        type: 'passage',
        id: 'space',
        data: {
          title: 'Space',
          text: `# Space
          The emptiness between and beyond the stars and planets is called space or outer space.
          
          # Rocket technology
          People have always been curious about the heavenly bodies in the sky. They have always wanted to reach them. However, to send some object from the earth into space, it must be given power against the force of gravity. Rocket technology or space launch technology is used for that purpose.
          Very powerful rockets are used to send a spacecraft into space. A tremendous quantity of fuel is burnt in rockets so that spacecraft weighing thousands of tons can be launched into space. In the twentieth century, a few countries of the world developed space technology and sent hundreds of spacecraft into space.
          
          # Astronouts
          Some spacecraft remain in space. Some are brought back to earth while some land on other planets or satellites. In some missions, scientists also travel in spacecraft. They are called astronauts.
          
          # Indian Space Missions
          On 22 October 2008, the Indian Space Research Organization (ISRO) launched a spacecraft to the moon. The mission is known as Chandrayaan-1.
          Mangalyaan is another important Indian space mission. It is known as M.O.M. or Mars Orbit Mission. It was launched on 5 November 2013. It got established in an orbit around the planet Mars on 24 September 2014. 
          ISRO achieved this feat in its first attempt. Both these missions are unmanned. The objective of the missions is a deeper study of the moon and Mars.
          
          # Did you know?
          Space scientists have not yet been able to find another planet that has life on it. Therefore, our earth is an invaluable planet. The degradation of its environment for any reason will be a threat to the existence of life itself.
          Rakesh Sharma became the first Indian astronaut to go into space in 1984. He spent eight days on a space station for a joint mission of the ISRO and the Soviet Intercosmos.`
        }
      },
      {
        label: 'Fill in the blanks',
        type: 'matchByDragDrop',
        id: 'drag-drop4',
        data: {
          isPractice: false,
          title: 'Drag and drop the given words at the right blanks.',
          styles: {
            fontSize: '1.3rem',
            dashWidth: 80
          },
          text: `*Rakesh Sharma* became the first Indian astronaut to go into space in *1984*.
          The emptiness between and beyond the stars and planets is called *space*. 
          Very powerful rockets are used to send a *spacecraft* into space.
          On 22 October 2008, *ISRO*launched a spacecraft to the moon.
          *Mangalyaan* was launched on 5 November 2013.`
        }
      },
      {
        label: 'Who am I?',
        type: 'matchByDragDrop',
        id: 'drag-drop5',
        data: {
          isPractice: false,
          title: 'Drag and drop the given words at the right blanks.',
          styles: {
            fontSize: '1.3rem',
            dashWidth: 80
          },
          text: `You can see me from the earth but the lighted part of me that you see
          changes every day. Who am I? - *Moon*
          I have my own light. It is only from me that the planets get light and
          heat. Who am I? - *Sun*
          I turn around myself, around a planet and also around a star. Who am I? - *Satellite*
          I turn around myself and revolve around the sun. Who am I? - *Planet*
          No other planet has a living world like mine. Who am I? - *Earth*`
        }
      },
      {
        label: 'Motions of the Earth',
        type: 'passage',
        id: 'earth',
        data: {
          title: 'Motions of the Earth',
          text: `# Important Terms
          Equator: If a circle was drawn around the surface of the Earth exactly in between the north and south poles, it would divide the Earth into two equal parts. This imaginary circle is called the equator.
          Hemisphere: The two equal parts the equator makes of the Earth are called the northern hemisphere and the southern hemisphere.
          Rotation: The turning of an object around itself is called rotation and the imaginary line around which it rotates is called its axis of rotation.
          Day:  The period that the Earth takes to complete one rotation is called a day. A day has two parts, daytime and nighttime or simply day and night.
          Hour: To measure time, the whole day is divided into 24 parts, each of which is called an hour.
          Revolution: Revolution is the movement of the Earth around the Sun. The Earth takes 24 hours to complete a rotation. 
          Year: The period the Earth takes to complete one revolution around the sun is called one year. There are about 365 days and 6 hours in a year.
          Leap year: In the Gregorian calendar, the year is taken to have 365 days. It means that it counts 6 hours less every year. That makes 24 hours or one day in every four years. To make up for this loss, the month of February in the Gregorian calendar has an extra day every fourth year. That year is called a leap year and it has 366 instead of 365 days and
          February has 29 instead of 28 days.
          Seasons: The revolution of the Earth and the inclination of its axis give rise to the cycle of seasons. In India, summer, the rainy season and winter are considered to be the main seasons. The year is also divided into six seasons, namely, Vasant, Grishma, Varsha, Sharad, Hemant and Shishir. This cycle of six seasons is called the rituchakra.
          Phases of moon: The moon revolves around the Earth and the Earth revolves around the sun. However, these two orbits intersect. Hence, the sun, the moon and the Earth are not always along a straight line. We see half of the moon’s surface which faces the Earth. From the Earth, we see only one side of the moon. The moon has no light of its own. We can see the moon because of the sun’s light that falls on it.
          1. Full moon: On a full moon night, we see the entire side of the moon that faces the Earth.
          2. New moon: On a new moon night, we cannot see any face of the moon.
          From the full moon to the new moon the illuminated part of the moon seen from the Earth becomes smaller and smaller. From new moon to full moon it again grows bigger and bigger. These different shapes of the moon that we see are called the phases of the moon.
          Lunar month: It takes 14 or 15 days from new moon to full moon. This is the fortnight of the ‘waxing’ moon. After the full moon, the moon appears smaller and smaller and after 14- 15 days it is new moon again. This period is the fortnight of the ‘waning’ moon. Thus, the period from one new moon to the next is of 28- 30 days. It is called the lunar month.
          Lunar day: Every day of the lunar month is called a tithi.`
        }
      },
      {
        id: 'match',
        type: 'match',
        label: 'Match the Folowing',
        data: {
          title: 'Match the Following',
          text: `leap year, 366 days
          year, 365 days 
          day, 24 hours 
          month, 30/31 days
          week, 7 days`
        }
      },
      {
        id: 'fillup',
        label: 'Fill in the blanks',
        type: 'fillupOptions3',
        data: {
          title: 'Click the blanks and fill it with the right word.',
          text: `The period that the Earth takes to complete one rotation is called a *day (year)*.
          The *revolution (rotation) of the Earth and the inclination of its axis give rise to the cycle of seasons.
          On a *full (half)* moon night, we see the entire side of the moon that faces the Earth.
          On a *new (full)* moon night, we cannot see any face of the moon.
          The different shapes of the moon that we see are called the phases of the *moon *(earth)*.`
        }
      },
      {
        label: 'True or False',
        id: 'true-false2',
        type: 'classifySentence',
        data: {
          title: 'Classify the below sentences as true and false',
          types: [
            {
              name: 'True',
              text: `The moon revolves around the Earth and the Earth revolves around the sun.
              The period that the Earth takes to complete one rotation is called a day.
              A day has two parts, daytime and nighttime or simply day and night.`
            },
            {
              name: 'False',
              text: `In the Gregorian calendar, the year is taken to have 375 days.
              Every day of the lunar month is called a tithli.`
            }
          ]
        }
      },
      {
        label: 'Answer in one word',
        type: 'matchByDragDrop',
        id: 'drag-drop6',
        data: {
          isPractice: false,
          title: 'Drag and drop the given words at the right blanks.',
          styles: {
            fontSize: '1.3rem',
            dashWidth: 80
          },
          text: `The motion of Earth around itself - *rotation*
          The motion of Earth around the sun - *revolution*
          The imaginary line on which Earth rotates - *axis of rotation*
          The imaginary circle that divides Earth into two equal parts - *equator*
          Every day of lunar month - *tithi*`
        }
      },
      {
        label: 'Fill in the blanks',
        type: 'matchByDragDrop',
        id: 'drag-drop7',
        data: {
          isPractice: false,
          title: 'Drag and drop the given words at the right blanks.',
          styles: {
            fontSize: '1.3rem',
            dashWidth: 80
          },
          text: `The two equal parts the equator makes of the Earth are called the northern *hemisphere* and the *southern* hemisphere.
          To measure time, the whole day is divided into *24* parts, each of which is called an *hour*.
          It takes 14 or *15* days from new moon to full moon.
          The year is also divided into *six* seasons. This cycle of six seasons is called the *rituchakra*.
          February has *29* instead of 28 days in a leap year.`
        }
      },
      {
        label: 'Choose the correct Answer',
        id: 'mcq2',
        type: 'mcq',
        data: {
          title: 'Multiple Choice Questions',
          questions: [
            {
              qText: ' How many rotations does the earth complete during one revolution around the sun?',
              options: '365, 366, 375'
            },
            {
              qText:
                'What are the two parts of the earth made by the equator?',
              options: 'north and south hemispheres, east and west hemispheres, north and west hemispheres'
            },
            {
              qText: 'How many days are there in a lunar month?',
              options: '28 to 30, 14 to 15, 30 to 31'
            },
            {
              qText: 'How many days does February have in a leap year?',
              options: '29, 30, 31, 28 '
            },
            {
                qText: 'How many parts is a day divided into to measure time?',
                options: '24, 12, 27'
            },
            {
                qText: 'What is the period from one new moon to the next full moon called?',
                options: 'waxing moon, waning moon, tithi'
            },
            {
                qText: 'What is the period from one full moon to the next new moon called?',
                options: 'waning moon, lunar eclipse, waxing moon'
            }
          ]
        }
      }
    ]
  };
