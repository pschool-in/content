export default {
  id: 'conjunction-4',
  label: 'Conjunction Pairs',
  pdf: '',
  list: [
    {
      id: 'notes',
      type: 'passage',
      label: 'Notes',
      data: {
        title: 'Conjunction Pairs',
        text: [
          `Sometime conjunctions are used in pairs: 
1. either/or
2. both/and
3. whether/or
4. neither/nor
5. not only/but also`,
          {
            type: 'html',
            text: `You can <em>either</em> call me <em>or</em> message me.<br>
He was <em>both</em> honest <em>and</em> talented.<br> 
I didn't know <em>whether</em> he will come <em>or</em> not.<br> 
He is <em>neither</em> tall <em>nor</em> short.<br> 
<em>Not only</em> he came late, <em>but also</em> he forgot the gift.`
          }
        ]
      }
    },
    {
      id: 'match',
      label: 'Match the Pairs',
      type: 'match',
      data: {
        title: `Match the conjunction pairs.`,
        text: `either, or
both, and
neither, nor
not only, but also`
      }
    },
    {
      label: 'Drag and Drop',
      type: 'matchByDragDrop',
      id: 'fill-up-story',
      data: {
        isPractice: false,
        title: 'Drag and drop the words at the right blanks.',
        styles: {
          fontSize: '1rem',
          dashWidth: 70
        },
        text: `Either dad *or* mom will come to pick me.
I am *both* tired *and* hungry.
I have no idea *whether* she will like the dress or not.
The coffee was *neither* hot *nor* cold.
Not only it was raining *but also* the power went off.`
      }
    },
    {
      id: 'fill-up-option',
      label: 'Fillup with options',
      type: 'fillup',
      commonData: {
        title: `Click on the blanks and fill it with the correct options.`
      },
      data: [
        `He is *both (not, not only)* smart and intelligent.
I can either write *or (nor, and)* watch TV.
*Neither (Either, Only)* mom nor dad are going.
I don't know whether she sings *or (nor, so)* not.
*Not only (Both, Whether)* he's smart, but also very intelligent.
I will *either (neither, for)* go to the party or the movie.
I like neither coffee *nor (or, and)* tea.
Not only he lied, *but also (and, so)* shouted at me.
I can both sing *and (or, for)* dance.
She will *either (neither, but)* stay or leave.
I can *neither (either, only)* study nor concentrate on sports.
*Not only (Both, So)* my friend is intelligent, but also helps me in studies.
I don't know whether she'll come *or (and, but)* not.`,

        `I will either eat *or (nor, and)* sleep.
She can *both (either, neither)* draw and paint.
You can go by train *or (but, because)* bus.
Our neighbors are good *and (so, or)* friendly.
My dad won't come *but (or, because)* my mom will.
She is *so (or, very)* tall that she can touch the ventilator.
She ran fast *and (but, or)* won the race.
She left *because (if, and)* they were laughing.
The teacher entered *and (but, because)* the students stood up.
He got hurt *because (if, so)* he fell down.
I will either wash clothes *or (nor, and)* do the dishes.
I slept *and (but, or)* skipped my homework.`
      ]
    },
    {
      id: 'fill-up',
      label: 'Fill Up on Passage',
      type: 'fillup',
      commonData: {
        title: `Click on the blanks and fill it with the correct options.`
      },
      data: [
        `I take my dog for a walk every evening. I put on its leash *and (but)* walk out of the door. Next, I take it to the park *and (but)* we walk. *But (And)* it tries to unleash *and (but)* run across the park. People ask me to unleash it *but (and)* it may bite someone. After our walk, I take off his leash.`,

        `My neighbour is my best friend. He is going on vacation *and (or)* asked me to go with him. *But (So)* I have exams next month, *so (or)* my parents are not allowing. They said I can *either (neither)* study *or (nor)* go with him. *So (But)* I won't be going.`,

        `My favourite cartoon is Tom and Jerry. I watch it before going to school *or (so)* in the evening. I don't like when Tom *and (or)* Jerry tease each other. *But (So)* it makes me laugh out loud. *Not only (Even)* they fight a lot, *but also (or)* help each other. *So (Or)* they care about each other a lot.`,

        `Raj lives in a small town *and (but)* the closest big city is an hour away. Raj likes going to the city *because (or)* they find cattle on the way. Raj loves cattle *so (or)* knows everything about them. A baby is called a calf, a female is called a cow, *and (so)* a male is called an ox. A group of cattle is called a herd. He knows that cattle are sound *and (but)* quiet animals *and (so)* graze on grass.`,

        `I love reading books *so (and)* I go to the library. I found a very interesting book *so (because)* I borrowed it for one week. Today, I have to return it *but (so)* I haven't completed it. I will go *and (so)* issue it again in the evening.`
      ]
    },
    {
      type: 'group',
      label: 'Drag and Drop',
      id: 'classify',
      commonData: {
        title:
          'Identify which of the following are conjunctions and which ones are not.',
        types: ['Conjunctions', 'Not Conjunctions']
      },
      data: [
        [`Either, Neither, But also, Both`, `Can, She, Is, Her`],
        [`Nor, Not only, Or, So`, `Have, Should, Would, Obviously`]
      ]
    },

    {
      label: 'Multiple Choice Questions',
      id: 'mcq',
      type: 'mcq',
      commonData: {
        title:
          'Choose the most appropriate option with the correct conjunction.'
      },
      data: [
        {
          questions: [
            {
              qText: 'She left ____',
              options: 'as I entered, but she entered, or I slept'
            },
            {
              qText: 'She goes to the ground ____',
              options:
                'because she likes to play, and she likes to sing, so I go to her school'
            },
            {
              qText: 'He reads comics ____',
              options:
                'but he does not read books, and he sleeps in class, so I do not read books'
            },
            {
              qText: 'We can either go to movie _____',
              options: 'or to the cafe, nor to the movie, if to the mall'
            },
            {
              qText: `She likes jogging, ____`,
              options:
                'even in the morning, and in the winter, either in school'
            }
          ]
        },
        {
          questions: [
            {
              qText: 'Do not eat many chocolates, ____',
              options:
                'even if they ask you to, but they always eat, also if they tell you'
            },
            {
              qText: 'They did not practice. ____',
              options:
                'However they won the match, Since they went to the party, Because they slept'
            },
            {
              qText: '____ , they will score good.',
              options:
                'If they study well, Although they sleep well, Even if I dance'
            },
            {
              qText: 'Do you like tea ____',
              options: 'or coffee, and water, so bread'
            },
            {
              qText: 'Look at the map, _____',
              options:
                'else you will be lost, because I like it, so you will not sleep'
            }
          ]
        },
        {
          questions: [
            {
              qText: '____ , he cannot come with us.',
              options:
                'Since he has no pocket money, She is a good girl, You are nice but'
            },
            {
              qText: 'I am thirsty, ____',
              options:
                'but I do not have water, and I like eating, so I will eat'
            },
            {
              qText: `I will play ____`,
              options: 'whether you come or not, if I sleep, but will play'
            },
            {
              qText: 'She eats at home, ____',
              options:
                'because she likes cooking, she is crazy, because you are well'
            },
            {
              qText: 'He came first. ____',
              options:
                'Therefore he got more cake, So he was punished, But he was last'
            }
          ]
        }
      ]
    },
    {
      id: '500',
      label: 'Fill Up on Passage - 2',
      type: 'fillup',
      commonData: {
        title: `Click on the blanks and fill it with the correct options.`
      },
      data: [
        `All of my friends are going to Richa's party. *But (So)* she has not invited me. *So (And)* we have decided that *neither (either)* me *nor (or)* my best friend will go. I bought a present for her, *but (or)* now I'll give it to my best friend.`,

        `Everyone loves Sundays. That is *because (so)* it’s a holiday. *But (Or)* for me, Sunday is the most boring day of the week. This is *because (either)* my parents take me to the farm every weekend. It was fun at first. *But (And)* now I don't like going there. This is *because (so)* all my friends are in the city.`,

        `I know that we should save water. *But (And)* I forget to turn off the tap. *So (Or)* I wrote a note *and (or)* stick it on the wall near the tap. Now I'll always remember to turn it off.`,

        `Neena loves chocolate. *But (So)* her mother doesn't let her eat much. She likes it because it's sweet *and (so)* tasty. Her mother hides the chocolate *or (so)* gives it to her friends. Her friends share the chocolate with her. *So (Or)* she gets to eat it.`,

        `Teacher asked us to be quiet *and (or)* study. *But (So)* the naughty boy in the class did not listen. He *and (or)* his friends went to the ground. *So (And)* the teacher got angry *and (but)* punished them.`
      ]
    }
  ]
};
