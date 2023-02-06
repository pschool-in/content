export default {
  id: 'idiom',
  label: 'Idioms',
  pdf: '',
  lockAfter: 3,
  list: [
    {
      label: 'Notes',
      type: 'passage',
      id: 'idioms-reading',
      data: {
        title: 'Idioms',
        text: `An idiom is an expression, a word, or a phrase that doesn't mean exactly what the words say. For example "it's raining cats and dogs", doesn't mean that cats and dogs are falling from the sky, but it is a metaphorical expression that means 'it is raining heavily'. 
Some commonly used idioms and their meanings are given below:
1. piece of cake - something is very easy to do
2. call names - to tease someone by using unpleasant names
3. apple of one's eye - highly valuable 
4. crocodile tears - acting like showing pity
5. a feather in one's cap - an honor 
6. a man of letters - an educated man
7. black sheep - a member who doesn't fit in the group
8. copycat - copying the behaviour of someone
9. early bird - a person who gets up, arrives or acts before the usual time.
# Examples sentences:
1. I know how to draw an elephant. It is a piece of cake.
2. Ramya was upset because some kids in her school called her names.
3. I am the apple of my mom's eye.
4. He shed crocodile tears in front of the teachers. 
5. Winning the inter school competition was a feather in Selvi's cap.
6. Selvam is a farmer but he is a man of letters.
7. Rohit was the black sheep in his family. He became a painter, whereas other family members were teachers.
8. You are such a copycat! Please do something on your own.
9. Sarah is such an early bird! She completed the lessons earlier and relaxed on the day before the exam.`
      }
    },
    {
      label: 'Identify the meanings',
      id: 'mcq-idioms',
      type: 'mcq',
      lockAfter: 1,
      commonData: {
        title:
          'Identify the correct meanings of the idioms from the options given below'
      },
      data: [
        {
          questions: [
            {
              qText: 'Once in a blue moon',
              options: `an event that doesn't happens often, an event that happens regularly, an event that happens frequently`
            },
            {
              qText: 'A piece of cake',
              options: 'very easy, very difficult, its impossible'
            },
            {
              qText: 'Break a leg',
              options: 'good luck, bad luck, get injured'
            },
            {
              qText: 'To feel under the weather',
              options: 'feeling sick, feeling excited, feeling amazing'
            },
            {
              qText: 'Back to square one',
              options:
                'to start from beginning, stop working, completed the task '
            }
          ]
        },
        {
          questions: [
            {
              qText: 'Beating around the bush',
              options:
                'speaking indirectly, speaking directly, maintaining silence'
            },
            {
              qText: 'Hit the hay',
              options: 'go to sleep, go to play, feed the cattle'
            },
            {
              qText: 'Let the cat out of the bag',
              options:
                'to share a secret, to hide a secret, to do some magic trick'
            },
            {
              qText: 'Cross your fingers',
              options:
                'to hope something happens like you wished, to tell prayers, working hard'
            },
            {
              qText: 'Hit the books',
              options: 'to study, to write, to listen'
            }
          ]
        },
        {
          questions: [
            {
              qText: 'Crack someone up',
              options:
                'to make someone laugh, to make someone cry, to make someone eat'
            },
            {
              qText: 'Out of the blue',
              options:
                'something that happened suddenly, something that occurs frequently, something that takes a lot of time'
            },
            {
              qText: 'Hold your horses',
              options: 'be patient, be aggressive, be emotional'
            },
            {
              qText: 'Know the ropes',
              options:
                'to understand the details, to miss the details, to write the details'
            },
            {
              qText: 'Chicken out',
              options:
                'to avoid doing something due to fear, to be brave, to be strong'
            }
          ]
        },
        {
          questions: [
            {
              qText: 'Fishy',
              options: 'strange, ordinary, familiar'
            },
            {
              qText: 'Rat race',
              options: 'competitive struggle, no struggle, no challenge '
            },
            {
              qText: 'Hard nut to crack',
              options:
                'difficult to understand, easy to understand, clear to understand'
            },
            {
              qText: 'In a nutshell',
              options: 'to sum up, to serve in a shell, to eat in a shell'
            },
            {
              qText: 'Black out',
              options: 'to lose consciousness, to gain consciousness, to sleep'
            }
          ]
        },
        {
          questions: [
            {
              qText: 'Born with a silver spoon',
              options:
                'from a rich family, from a poor family, from a middle-class family'
            },
            {
              qText: 'Pitch black',
              options: 'very dark, very bright, very shiny'
            },
            {
              qText: 'Paint the town red',
              options:
                'to have fun, to paint the town with red color, to work hard'
            },
            {
              qText: 'Feel blue',
              options: 'to feel sad, to feel happy, to feel excited'
            },
            {
              qText: 'Green thumb',
              options:
                'talent for gardening, talent for singing, talent for dancing'
            }
          ]
        }
      ]
    },
    {
      type: 'selectWord',
      label: 'Identify the Idioms',
      id: 'select-word',
      lockAfter: 1,
      commonData: {
        title: 'Select the idioms from the sentence',
        printTitle: 'Read the below text and underline the idiom',
        multiSelect: true
      },
      data: [
        `She knocked her head on the floor and *blacked* *out*. 
He had a *golden* *opportunity* to win the game on a penalty shot. 
Before the final exam, the teacher told her students to *break* *a* *leg*. 
She got *cold* *feet* before the wedding.
She left him with a *heavy* *heart*. `,

        `She gave her son the *green* *light* to join the music school.
The kindergarten students are always *full* *of* *beans*.
My father made a delicious omelet *from* *scratch*.
Tarun gets everything from his parents on a *silver* *platter*.
We need *all* *hands* *on* *deck* if we want the event to be a success.`,

        `I can't turn my back on my brother, he is my own *flesh* *and* *blood*.
Please *keep* *an* *eye* on my baby brother, I'll be back in sometime.
Sanjay knows all the math tables *by* *heart*. 
I am just *pulling* *your* *leg*, don't take it personally.
Swetha has a *sweet* *tooth*. She always eats ice cream after food.`,

        `Ronaldo scored several *hat* *tricks* last season.
Good job! You *pulled* *your* *socks* *up* and studied all day and excelled in the exam.
Jessey went from *rags* *to* *riches* after he won a lottery.
The English test was *a* *piece* *of* *cake*. 
Fuel these days *costs* *an* *arm* *and* *a* *leg*.`
      ]
    },
    {
      label: 'Fill up',
      type: 'matchByDragDrop',
      id: 'drag-drop-1',
      data: {
        title:
          'Fill up the blanks in the sentence with appropriate expression.',
        fontSize: '1rem',
        text: `Try not to mention baldness while he is here: it's a *sore spot* for him.
Refusing to lend him money now would give him a taste of his own *medicine* as he never lent you any.
Losing my job was initially a *bitter* pill to swallow.
The boss has *sugared* the overtime pill by offering extra payment.
I can't stay in one place for more than a year without getting *itchy* feet.`
      }
    }
  ]
};
