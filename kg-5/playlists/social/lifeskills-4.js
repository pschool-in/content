export default {
  id: 'lifeskills-4',
  label: 'Life Skills - 4',
  pdf: '',
  lockAfter: 4,
  list: [
    /*
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
    },*/
    {
      label: 'My Upbringing - Reading',
      type: 'passage',
      id: 'myupbringing',
      data: {
        title: 'My Upbringing',
        text: `We learn many different things while we are growing up. They lead to the development of certain habits, likes and dislikes. They shape our views and thoughts. This is what is known as our upbringing.
You must have seen photographs of your childhood. You began to crawl. You learnt how to walk and how to talk. And apart from this, you learnt many more things - how to brush your teeth, how to bathe, how to eat without spilling, how to behave with people older than you.
You also learned, how to fill your schoolbag, how to ride a bicycle, how to play a cell phone game, when to feed the cattle, how to buy groceries, how to behave with strangers.
# Relatives
Our close relatives like our grandparents, uncles and aunts also have great affection for us. We learn many things from them, too. People who are close to us, teach us how to carry out our own tasks ourselves. They appreciate it when we can do all these things properly. They commend us saying that we have grown up.
# Neighbours
Our neighbours too can influence our upbringing. If people from another place happen to be our neighbours, we naturally get to know about their food and festivals which may be different from ours. This is how we become familiar with diversity.
Many of our neighbours know us from our childhood. They too feel affectionate towards us. We learn some good habits from our neighbours too. Our neighbours also influence our upbringing.
# Self Learning
Everything that we learn is not ‘taught’ to us by somebody. We pick up many things through observation and through exposure. How do our friends speak? What clothes do they wear? What games do they play? How do they study? We pick up many of these things unconsciously. Many times, we also begin to behave like our friends.
# Recap
1. The many things we learn as we grow up, together make our upbringing.
2. Our parents and close relatives play an important part in our upbringing.
3. We also learn many things from our friends and neighbours.
4. We learn from the conscious efforts taken to make us good people.
5. We also learn through observation and exposure.
# A Lion Cub's Upbringing
A lion cub is not able to hunt as soon as it is born. It is taught how to hunt by its mother and other lionesses in the pride. These cubs are quite helpless for about the first two weeks. They do not even open their eyes. Therefore, their mother keeps them hidden away from others. When the cubs are about eight weeks of age, they are introduced to the other members of the pride. All the lionesses take care of the cubs. A cub is pampered by all of them until it is three months old. Then, it begins to learn how to hunt. It takes two to three years for a cub to become adept at hunting.`
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
            qText: 'From whom do we learn about diversity?',
            options: 'Neighbours, Parents, Grand Parents'
          },
          {
            qText: 'Who plays an important role in our upbringing?',
            options: 'Teachers, Parents, Relatives, *All the above'
          },
          {
            qText:
              'What do our relatives tell us on visting us, after a long time?',
            options: `You have grown up.
            You are very beautiful.
            You are smart.
            You dress is looking great.`
          },
          {
            qText: 'As a child, I learn how to _______.',
            options: 'ride a bicycle, ride a motorbike, drive a car'
          },
          {
            qText: 'Lion cubs start to learn hunting after _______.',
            options: '3 months, 2 weeks, 2'
          }
        ]
      }
    },
    {
      label: 'Good habits Vs Bad habits',
      id: 'myupbringinghabit',
      type: 'group',
      data: {
        title: 'Classify the below as good and bad habits.',
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
      type: 'fillup',
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
We learn everything from others. We cannot learn anything on our own.
We are not learning good habits from neighbors.`
          }
        ]
      }
    },
    {
      id: 'wordsearch',
      type: 'wordsearch',
      label: 'WordSearch - Upbringing',
      data: {
        title: 'Find the given words from the table.',
        words: [
          {
            word: ['E', 'X', 'E', 'R', 'C', 'I', 'S', 'E'],
            marker: [0, 0, 7, 7]
          },
          {
            word: ['B', 'O', 'O', 'K', 'S'],
            marker: [6, 2, 6, 6]
          },
          {
            word: ['H', 'O', 'N', 'E', 'S', 'T', 'Y'],
            marker: [7, 0, 7, 6]
          },
          {
            word: ['R', 'E', 'C', 'Y', 'C', 'L', 'E'],
            marker: [1, 7, 7, 7]
          },
          {
            word: ['K', 'I', 'N', 'D'],
            marker: [0, 4, 3, 4]
          },
          {
            word: ['L', 'I', 'E', 'S'],
            marker: [3, 6, 6, 6]
          }
        ],
        table: [
          ['E', 'V', 'Y', 'B', 'J', 'V', 'R', 'H'],
          ['R', 'X', 'M', 'L', 'U', 'W', 'M', 'O'],
          ['M', 'D', 'E', 'Z', 'Z', 'Y', 'B', 'N'],
          ['H', 'O', 'O', 'R', 'F', 'N', 'O', 'E'],
          ['K', 'I', 'N', 'D', 'C', 'H', 'O', 'S'],
          ['K', 'L', 'B', 'S', 'J', 'I', 'K', 'T'],
          ['Y', 'P', 'O', 'L', 'I', 'E', 'S', 'Y'],
          ['F', 'R', 'E', 'C', 'Y', 'C', 'L', 'E']
        ],
        lang: 'en',
        showWords: true
      }
    },
    {
      id: 'crossword',
      type: 'crossword',
      label: 'Crossword - Upbringing',
      data: {
        title: 'Solve the crossword. Please click on a cell to view the hint.',
        words: [
          {
            word: 'BadWords',
            marker: {
              x: 0,
              y: 0
            },
            hint: 'Should not talk to others',
            direction: 'across'
          },
          {
            word: 'Sharing',
            marker: {
              x: 7,
              y: 0
            },
            hint: 'Always should do this with others',
            direction: 'down'
          },
          {
            word: 'Litter',
            marker: {
              x: 2,
              y: 3
            },
            hint: 'Should not do in public',
            direction: 'across'
          },
          {
            word: 'Helping',
            marker: {
              x: 1,
              y: 6
            },
            hint: 'Always should do for others',
            direction: 'across'
          },
          {
            word: 'Honesty',
            marker: {
              x: 0,
              y: 1
            },
            hint: 'It is the best policy',
            direction: 'down'
          }
        ],
        table: [
          ['B', 'A', 'D', 'W', 'O', 'R', 'D', 'S'],
          ['H', '', '', '', '', '', '', 'H'],
          ['O', '', '', '', '', '', '', 'A'],
          ['N', '', 'L', 'I', 'T', 'T', 'E', 'R'],
          ['E', '', '', '', '', '', '', 'I'],
          ['S', '', '', '', '', '', '', 'N'],
          ['T', 'H', 'E', 'L', 'P', 'I', 'N', 'G'],
          ['Y', '', '', '', '', '', '', '']
        ],
        lang: 'en'
      }
    }
  ]
};
