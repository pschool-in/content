export default {
    id: 'conjunction-4',
    label: 'Conjunction - 4',
    pdf: '',
    list: [
{
id: 'fill-up',
label: 'Fill up',
type: 'fillup',
commonData: {
    title: `Tap each blank for options`
    },
    data: [
        `I take my dog for a walk every evening. 
        I put on its leash *and (but)* walk out of the door. 
        Next, I take it to the park *and (but)* we walk.
        *But (And)* it tries to unleash *and (but)* run across the park.
        People ask me to unleash it *but (and)* he may bite someone.
        After our walk, I take off his leash.`,
        
        `My neighbour is my best friend.
        He is going on vacation *and (or)* asked me to go with him.
        *But (So)* I have exams next month, *so (or)* my parents are not allowing.
        They said I can *either (neither)* study *or (nor)* go with him.
        *So (But)* I won't be going.`,
        
        `My favourite cartoon is Tom and Jerry. 
        I watch it before going to school *or (so)* in the evening. 
        I don't like when Tom and Jerry tease each other. 
        *But (So)* it makes me laugh out loud.
        *Not only (Even)* they fight a lot, *but also (or)* help each other.
        *So (Or)* they care about each other a lot.`,
        
        `Raj lives in a small town *and (but)* the closest big city is an hour away.
        Raj likes going to the city *because (or)* they find cattle on the way.
        Raj loves cattle *so (or)* knows everything about them.
        A baby is called a calf, a female is called a cow, *and (so)* a male is called an ox.
        A group of cattle is called a herd.
        He knows that cattle are sound *and (but)* quiet animals *and (so)* graze on grass.`,
        
        `I love reading books *so (and)* I go to the library.
        I found a very interesting book *so (because)* I borrowed it for one week.
        Today, I have to return it *but (so)* I haven't completed it. 
        I will go *and (so)* issue it again in the evening.`
            ]
          },
    {
    type: 'group',
    label: 'Drag and Drop',
    id: 'classify',
    commonData: {
        title: 'Identify which of the following are conjunctions and which ones are not.',
        types: ['Conjunctions', 'Not Conjunctions']
    },
    data: [
        [
        `Either, Neither, But also, Both`,
        `Can, She, Is, Her`
        ],
        [
        `Nor, Not only, Or, So`,
        `Have, Should, Would, Obviously`
        ]
    ]
  },
{
label: 'Multiple Choice Questions',
    id: 'mcq',
type: 'mcq',
commonData: {
    title: 'Choose the correct describing words.'
            },
data: [
    {
questions: [
            {
            qText: 'He is______smart and intelligent.',
            options: 'both, not, not only'
            },
            {
            qText: 'I can either write_____watch TV.',
            options: 'or, nor, and'
            },
            {
            qText: '________mom nor dad are going.',
            options: 'Neither, Either, Only'
            },
            {
            qText: 'I dont know whether she sings_____not.',
            options: 'or, nor, so'
            },
            {
            qText: `________he's smart, but also very intelligent.`,
            options: 'Not only, Both, Whether'
            }
            ]
        },
        {
        questions: [
            {
                qText: 'I will_______go to the party or to the movie.',
                options: 'either, neither, for'
                },
                {
                qText: 'I like neither coffee______tea.',
                options: 'nor, or, and'
                },
                {
                qText: 'Not only he lied,_________shouted at me.',
                options: 'but also, and, so'
                },
                {
                qText: 'I can both sing______dance.',
                options: 'and, or, for'
                },
                {
                qText: 'She will_______stay or leave.',
                options: 'either, neither, but'
                }
                ]
            },
            {
        questions: [
            {
                qText: 'I can________study nor concertrate on sports.',
                options: 'neither, either, only'
                },
                {
                qText: '________my friend is intelligent, but also helps me in studies.',
                options: 'Not only, Both, So'
                },
                {
                qText: `I dont know whether she'll come_____not`,
                options: 'or, and, but'
                },
                {
                qText: 'I will either eat_____sleep.',
                options: 'or, nor, and'
                },
                {
                qText: 'She can_____draw and paint.',
                options: 'both, either, neither'
                }
                ]
            },
            {
            questions: [
                    {
                    qText: 'You can go by a train_____a bus.',
                    options: 'or, but, because'
                    },
                    {
                    qText: 'Our neighbours are good_____friendly.',
                    options: 'and, so, or'
                    },
                    {
                    qText: 'My dad wont come_____my mom will.',
                    options: 'but, or, because'
                    },
                    {
                    qText: 'She is____tall that she can touch the ventilator.',
                    options: 'so, or, very'
                    },
                    {
                    qText: 'She ran fast______won the race.',
                    options: 'and, but, or'
                    }
                    ]
                  },
                {
            questions: [
                {
                    qText: 'She left_______they were laughing.',
                    options: 'because, if, and'
                    },
                    {
                    qText: 'The teacher entered______the students stood up.',
                    options: 'and, but, because'
                    },
                    {
                    qText: 'He got hurt_______he fell down.',
                    options: 'because, if, so'
                    },
                    {
                    qText: 'I will either wash clothes_____do the dishes.',
                    options: 'or, nor, and'
                    },
                    {
                    qText: 'I slept______skipped my HW.',
                    options: 'and, but, or'
                    }
                    ]
                }
            ]
        }
     ]
  };
