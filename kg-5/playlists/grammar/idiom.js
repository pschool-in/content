export default {
  id: 'idiom',
  label: 'Idioms',
  pdf: '',
  list: [
    {
      label: 'Idioms - Reading',
      type: 'passage',
      id: 'idioms-reading',
      data: {
        title: 'Idioms',
        text: `An idiom is an expression, a word or a phrase that doesn't mean exactly what the words say. It is also known as an idiomatic expression. For example "it's raining cats and dogs", doesn't mean that cats and dogs are falling from sky, but it is a metaphorical expression that means that it is raining heavily.

# Some commonly used idioms and their meanings are given below:
 
 1. Piece of cake - means something is very easy to do
 2. Call names - means to tease someone by using unpleasant names
 3. ABC - means elementary knowledge
 4. Apple of one's eye - means valuable things 
 5. Crocodile tears - artificial tears or hypocritical tears
 6. A feather in one's cap - an honour 
 7. A man of letters - a literary man
 8. Black sheep - unaccepted group member
 9. Copy cat - someone copies another
 10. Early bird - someone who wakes up early

# Usage of the above mentioned idioms in a sentence:

1. I love to draw a scenery for you, it will be a piece of cake.
2. My daughter is upset because some kids in her school call her names.
3. I don't know the ABC of cricket.
4. My son is apple of my eye.
5. He shed crocodile tears in front of his teachers. 
6. A century in a test match is a feather in one's cap.
7. Nehru was a man of letters.
8. Rohit was the black sheep of the family and preferred to do things on his own. 
9. You are such a copy cat! Do your own work. 
10. Sarah is such an early bird! She gets up daily before the sunrises.`
      }
    },
    {
      label: 'Identify the meanings',
      type: 'mcq',
      id: '100',
      data: {
        title:
          'Identify the correct meanings of the idioms from the options given below.',
        questions: [
          {
            qText: 'Once in a blue moon',
            options:
              'an event that happens infrequently, an event that happens regularly, an event that happens frequently'
          },
          {
            qText: 'A piece of cake',
            options: 'very easy, very difficult, its impossible'
          },
          {
            qText: 'Break a leg',
            options: 'good luck, bad luck, no luck at all'
          },
          {
            qText: 'To feel under the weather',
            options: 'not feeling well, feeling excited, feeling amazing'
          },
          {
            qText: 'Back to square one',
            options:
              'To start the process all over again, to complete the process, to hold the process in the middle '
          }
        ]
      }
    },
    {
      label: 'Identify the meanings',
      id: '200',
      type: 'mcq',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: 'Beating around the bush',
            options:
              'Not speaking directly about the issue, speaking directly about the issue, not speaking at all'
          },
          {
            qText: 'Hit the hay',
            options: 'go to sleep, go to play, go to the farm'
          },
          {
            qText: 'Let the cat out of the bag',
            options:
              'to share the secret, to hide the secret, to conceal the secret'
          },
          {
            qText: 'Cross your fingers',
            options:
              'to hope something happens your way, to hope something doesnt happen, to hope something happens the way your friends wanted'
          },
          {
            qText: 'Hit the books',
            options: 'to study, to write, to listen'
          }
        ]
      }
    },
    {
      label: 'Identify the meanings',
      id: '300',
      type: 'mcq',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: 'Crack someone up',
            options:
              'to make someone laugh, to make someone cry, to make someone eat'
          },
          {
            qText: 'Out of the blue',
            options:
              'Something that occurs unexpectedly, something that occurs frequently, something that occurs very regularly'
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
      }
    },
    {
      label: 'Identify the meanings',
      id: '400',
      type: 'mcq',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: 'Fishy',
            options: 'strange, ordinary, familiar'
          },
          {
            qText: 'Rat race',
            options: 'Competitive struggle, no struggle, no challenge '
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
      }
    },
    {
      label: 'Identify the meanings',
      id: '500',
      type: 'mcq',
      data: {
        title: 'Multiple Choice Questions',
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
    },
    {
      type: 'selectWord',
      label: 'Identify the Idioms',
      id: 'select-word',
      commonData: {
        title: 'Select the idioms from the sentence'
      },
      data: [
        `She knocked her head on the floor and *blacked out*. 
          He had a *golden opportunity* to win the game on a penalty shot. 
          Before the final exam, the teacher told her students to *break a leg*. 
          She got *cold feet* before the wedding.
          She left him with a *heavy heart*. `,

        `She gave her son the *green light* to join the music school.
         The kindergarten students are always *full of beans*.
         My father made a delicious omlete *from scratch*.
         Tarun gets everything from his parents on a *silver platter*.
         We need *all hands on deck* if we want the event to be a success.`,

        `I can't turn my back on my brother, he is my own *flesh and blood*.
          Please *keep an eye on* my baby brother, I'll be back in sometime.
          Sanjay knows all the math tables *by heart*. 
          I am just *pulling your leg* , don't take it personally.
          Swetha has a *sweet tooth*.She always eats ice-cream after food.`,

        `Ronaldo scored several *hat tricks* last season.
          Good job! *You pulled your socks up* and studied all day and excelled the exam.
          Jessey went from *rags to riches* after he won a lottery.
          The English test was *a piece of cake*. 
          Fuel these days *costs an arm and a leg*.`
      ]
    },
    {
      label: 'Fill up',
      type: 'matchByDragDrop',
      id: 'drag-drop-1',
      data: {
        isPractice: false,
        title:
          'Fill up the blanks in the sentence with appropriate expression.',
        styles: {
          fontSize: '1.3rem',
          dashWidth: 80
        },
        text: `Try not to mention baldness while he is here: it's *a sore spot* for him.
          Refusing to lend him money now would give him *a taste of his own medicine* as he never lent you any.
          Losing my job was initially *a bitter pill to swallow*.
          The boss has *sugared the overtime pill* by offering large extra payment.
          I can't stay in one place for more than a year without *getting itchy feet*. `
      }
    },
    {
      label: 'Proverbs - Reading',
      type: 'passage',
      id: 'proverbs-reading',
      data: {
        title: 'Proverbs',
        text: `A proverb is a small saying that is generally used in conversation to convey a general truth about a person or the situation. They are mostly used by adults in daily conversations. 

# Below are a few examples of proverbs
1. All that glitters is not gold.
2. When in Rome, do as Romans do.
3. First come, first served.
4. It's no use crying over the spilled milk. 
5. Still water runs deep.`
      }
    },
    {
      id: 'match',
      label: 'Match the following',
      type: 'match',
      commonData: {
        title: 'Match the beginning of the proverb with the correct ending'
      },
      data: [
        `First come, first serve
         All's well, that ends well
         All is fair, in love and war
         Let bygones, be bygones
         Better late, than never`,

        `Like father, like son 
         Let sleeping dogs, lie 
         Bite the, bullet
         Curiosity killed, the cat
         As cold, as ice`,

        `Out of sight, out of mind
         Honesty is, the best policy
         Break the, ice 
         Look before, you leap
         He who hesitates, is lost`,

        `Knowledge, is power
         Spill, the beans 
         Fortune favors, the bold
         You are, what you eat
         Cat got your, tongue`
      ]
    },
    {
      label: 'Complete the proverbs',
      type: 'matchByDragDrop',
      id: 'drag-and-drop',
      commonData: {
        isPractice: false,
        title:
          'Drag and drop the words at correct places to make a complete proverb',
        styles: {
          fontSize: '1rem',
          dashWidth: 80
        }
      },
      data: [
        `A watched pot never *boils*.
              Birds of *feather* flock together.
              Don't put the cart before the *horse*.
              The *pen* is mightier than the sword.
              People who live in *glass* houses should not throw stones.`,

        `Don't judge a *book* by its cover.
              If you play with *fire* you will get burned.
              *Practice* makes a man perfect.
              The early bird gets the *worm*.
              He who hesitates is *lost*.`,

        `The grass is always *greener* on the other side.
              A *journey* of a thousand miles begins with a single step.
              Keep your friends close and your *enemies* closer.
              When in *Rome*, do as the Romans do.
              Don't count your *chickens* before they hatch.`,

        `An apple a day keeps the *doctor* away.
              Necessity is the *mother* of all inventions.
              Blood is thicker than *water*. 
              Don't bite the *hand* that feeds.
              Where there's smoke, there's *fire*.`,

        `Too many cooks spoil the *broth*.
              *Beggars* can't be choosers.
              A bird in hand is worth two in the *bush*.
              All *good things* must come to an end.
              Where there is *will* there is a way.`,

        `When it rains it *pours*.
              Actions speak louder than *words*.
              As cool as a *cucumber*.
              Don't blow your own *trumpet*.
              A friend in need is a friend *indeed*.`,

        `Make hay while the sun *shines*.
              Hope for the *best*, prepare for the worst.
              Two wrongs don't make a *right*.
              When the going gets *tough*, the tough gets going.
              *Good things* come to those who wait.`,

        `There's no place like *home*.
              The best things in *life* are free. 
              The benefit of the *doubt*.
              You can lead a horse to water, but you can't make it *drink*.
              It takes two to *tango*.`,

        `Like two peas in a *pod*.
              Don't put all your eggs in one *basket*.
              Every cloud has a *silver* lining.
              It's no use crying over spilled *milk*.
              Jack of all *trades*, master of none.`,

        `All that glitters is not *gold*.
              As clean as a *whistle*.
              Practice what you *preach*.
              Laughter is the best *medicine*.
              Two heads are better than *one*.`
      ]
    }
  ]
};
