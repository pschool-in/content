export default {
    id: 'lifeskills-4',
    label: 'Life Skills - 4',
    pdf: '',
    lockAfter: 4,
    list: [
      {
        label: 'My Upbringing - Reading',
        type: 'passage',
        id: 'myupbringing',
        data: {
          title: 'My Upbringing',
          text: `Our parents, teachers, relatives, friends, neighbors play an important role in our upbringing. They teach us moral values in childhood, which help to shape our character. Upbringing includes our basic disciplines, economic values, moral codes, entertainment, social behavior, respecting elders, doing good for the environment, etc.
          Upbringing includes many things we learn in childhood as well as while growing up. These together make up our upbringing in the later stages of life. Moreover, we also learn through many observations and exposures in our day-to-day life. Quite often, we learn from our conscious efforts too. Upbringing in our society teaches us everything that we need in our life.          
          Mostly people get influenced very easily. Hence, many people adapt good qualities. Sometimes we learn multiple things through various experiences in our life. This multitude of things is often contributed by the rich diversity, that sustains in our environment.`
        }
      },
      {
        label: 'Good habits Vs Bad habits',
        id: 'myupbringinghabit',
        type: 'group',
        data: {
          title: 'Classify the below things based on the category of Good habits and Bad habits.',
          types: [
            {
              name: 'Good habits',
              text: 'Eating healthy, Early sleep, Book reading, Regular exercise'
            },
            {
              name: 'Bad habits',
              text: 'Talking bad words, Bitting nails, Telling lies, Body shaming'
            }
          ]
        }
      },
      {
        id: 'myupbringingmatch',
        label: 'Match the following',
        type: 'match',
        data: {
          text: `Do not litter, in public
          Share things, with everyone
          Don’t harm, our environment
          Save, energy
          Help, the poor`,
          title: 'Match the following with its correct one'
        }
      },
      {
        label: 'Multiple Choice Questions',
        id: 'myupbringingmcq',
        type: 'mcq',
        data: {
          title: 'Multiple Choice Questions',
          questions: [
            {
              qText: '__________ plays important role in our upbringing.',
              options:
                'Teachers, Parents, Relatives, *All the above'
            },
            {
              qText: 'We learn diversity from ____________.',
              options: 'school, home, public places, *all the above'
            },
            {
              qText: '______________ teach us good values.',
              options: 'Parents, Teachers, Neighbors, *All the above'
            },
            {
              qText: 'It is good to make _________ at school.',
              options:
                'friends, enemies, neighbors, fans'
            },
            {
              qText: '____________ is an important place for learning.',
              options: 'School, Theatre, Beach, Hotel'
            }
          ]
        }
      },
      {
        label: 'Fill in the blanks -1',
        type: 'matchByDragDrop',
        id: 'myupbringingdrag-1',
        data: {
          isPractice: false,
          title: 'Drag and drop the given words at the right blanks.',
          styles: {
            fontSize: '1.3rem',
            dashWidth: 80
          },
          text: `Every *life* has value.
          *Honesty* is the best policy.
          *Cleanliness* is next to godliness.
          Reuse, reduce, *recycle*.
          *Help* those in need.`
      }
    },
    {
        id: 'myupbringingfill-1',
        label: 'Fill in the blanks -2',
        type: 'fillupOptions',
        data: {
          title: 'Click the blanks and fill it with the right word.',
          text: `Do not *harm (help)* others.
          Be *kind (unkind)* to animals.
          *Treat (Do not treat)* every home as your home.
          A *friend (enemy)* in need is a friend indeed.
          Making others *smile (cry)* is a good conduct.`
        }
      },
      {
        label: 'True or False',
        id: 'myupbringingTF',
        type: 'classifySentence',
        data: {
          title: 'Classify the below sentences as true and false',
          types: [
            {
              name: 'True',
              text: `Using a mobile phone for a long time is a bad habit.
              Learning ‘how not to be’, is as important as learning ‘how to be’.
              We learn more things through exposure.`
            },
            {
              name: 'False',
              text: `We are not influenced by others.
              We are not learning good habits from neighbors.`
            }
          ]
        }
      },
    ]
  };
