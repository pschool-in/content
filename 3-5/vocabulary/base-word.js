export default {
  label: 'Base Words',
  id: 'base-word',
  list: [
    {
      id: 'reading',
      type: 'passage',
      label: 'Base Words',
      data: {
        title: 'Base Words',
        text: [
          `Base words, also called root words, are the fundamental units of a word, holding its essential meaning. 
A base word is not derived from or made up of other words and has no prefixes or suffixes (for example, 'action', 'activity', 'activate', and 'react' are all words built from the base word 'act').`
        ]
      }
    },
    /*
Words with many derived words
{
id: 'reading-3',
type: 'passage',
label: 'Base Words - Examples',
data: {
title: 'Examples',
text: [
{
type: 'hilight',
text: `Create - creation, creator, creative, creatively, recreative, uncreative, procreate, recreationally, uncreatively, recreate
Manage - management, manager, manageable, mismanage, unmanageable, mismanagement, managed, managing
Understand - understanding, misunderstand, misunderstood, understandable, understandably, understandingly, misunderstanding, understands, misunderstands
Educate - education, educator, educational, uneducated, reeducate, reeducated, educating, educates
Employ - employment, employer, employee, employable, unemployment, employed, employing, employs, unemployable
Develop - development, developer, developing, developed, undeveloped, redevelopment, predevelop, redevelopment, developmental
Explore - exploration, explorer, explored, exploring, exploitable, exploitative, unexplored, exploratory, explores
Communicate - communication, communicator, communicative, communicating, communicated, communicability, miscommunication, uncommunicative, recommunicate, recommunication
Organize - organization, organizer, organizational, organizing, organized, unorganized, disorganized, reorganize, reorganized, reorganizing
Innovate - innovation, innovator, innovative, innovatively, innovativeness, uninventive, noninnovative, innovated
Success - successful, unsuccessfully, successively, successor, succeeder, succeeding, succeedingly, successiveness
Perceive - perception, perceptive, perceptible, perceptibly, unperceived, perceived, perceiving, perceives, preceptive
Determine - determination, determined, determiner, determinable, undetermined, predetermine, predetermined, predeterminable, predetermining, redetermine
Demonstrate - demonstration, demonstrator, demonstrative, demonstratively, undemonstrative, redemonstrate, demonstrated
Contribute - contribution, contributor, contributive, contributory, contributed, contributing, uncontributed, noncontributor, noncontributory
Illuminate - illumination, illuminator, illuminative, illuminating, illuminated, illuminatingly, unilluminated, nonilluminated, reilluminate
Differentiate - differentiation, differentiator, different, differently, differential, differentiable, undifferentiated, nondifferentiated, redifferentiate
Evaluate - evaluation, evaluator, evaluative, evaluated, evaluating, unvalued, undervalued, overvalued, reevaluate, reevaluation
Participate - participation, participator, participative, participatory, participated, participating, unparticipated, nonparticipative, nonparticipatory
Motivate - motivation, motivator, motivational, motivated, motivating, unmotivated, demotivate, demotivated, demotivating, remotivate
`
}
]
}
},
*/
    {
      id: 'reading-2',
      type: 'passage',
      label: 'Base Words - Examples',
      data: {
        title: 'Examples',
        text: [
          {
            type: 'hilight',
            text: `Act - Actor, Action, React
Ask - Asker, Asking, Task
Believe - Believer, Belief, Unbelievable
Change - Changer, Changing, Exchange
Child - Children, Childish, Childhood
City - Citizen, Cityscape, Citywide
Connect - Connector, Connection, Disconnect
Create - Creator, Creation, Recreate
Decide - Decider, Decision, Undecided
Discover - Discoverer, Discovery, Rediscover
Do - Doer, Doing, Done
Dream - Dreamer, Dreaming, Daydream
Eat - Eater, Eating, Edible
Educate - Educator, Education, Uneducated
Enjoy - Enjoyer, Enjoyable, Unenjoyable
Paint - Painter, Painting, Repaint
Play - Player, Playful, Replay
Question - Questioner, Questioning, Unquestionable
Read - Reader, Reading, Reread
See - Seer, Seeing, Unseen
Solve - Solver, Solving, Unsolved
Speak - Speaker, Speaking, Speech
Think - Thinker, Thinking, Unthinkable
Travel - Traveler, Traveling, Untravelled
Use - User, Usage, Misuse
Visit - Visitor, Visiting, Revisit
Walk - Walker, Walking, Walkable
Want - Wanting, Unwanted
Write - Writer, Writing, Rewrite
Feel - Feeler, Feeling, Unfeeling
Film - Filmmaker, Filmography, Filmgoer, Filming
Color - Colorful, Colorless, Coloring, Colorant
Shape - Shapeless, Shaping, Shape-shifter
Letter - Lettering, Letterhead, Letterless, Letterbox
Day - Daylight, Daydream, Daybreak, Daycare
Night - Nightfall, Nightlife, Nightstand, Nighttime
Year - Yearly, Yearbook, Yearning, Yearn
Mind - Mindful, Mindless, Mindset, Mindfulness
Body - Bodybuilding, Bodyguard, Bodywork
Heart - Heartfelt, Heartless, Heartwarming, Heartthrob
Soul - Soulful, Soulmate, Soulless, Soul-searching
Peace - Peaceful, Peacemaker, Peacekeeping, Peacefulness
War - Wartime, Warlike, Warzone, Warrior`
          }
        ]
      }
    },
    {
      id: 'match',
      label: 'Match - Base word',
      type: 'match',
      lockAfter: 1,
      commonData: {
        title: 'Match the word with its base word.'
      },
      data: [
        `Actor, Act
Task, Ask
Believer, Believe
Exchange, Change
Children, Child
Citizen, City`,

        `Connector, Connect
Decision, Decide
Discovery, Discover
Done, Do
Daydream, Dream
Eating, Eat`,

        `Education, Educate
Enjoyable, Enjoy
Painter, Paint
Replay, Play
Questioning, Question 
Reader, Read`,

        `Unseen, See
Unsolved, Solve
Speaker, Speak
Thinker, Think
Traveler, Travel
User, Use`,

        `Visitor, Visit
Walker, Walk
Unwanted, Want
Writer, Write
Feeling, Feel
Filmmaker, Film`,

        `Colorful, Color
Shapeless, Shape
Letterbox, Letter
Daylight, Day
Nightfall, Night
Yearly, Year`,

        `Mindful, Mind
Bodyguard, Body
Heartfelt, Heart
Soulful, Soul
Peaceful, Peace
Warrior, War`
      ]
    },
    {
      type: 'rightOne',
      id: 'odd-one',
      label: 'Odd One Out',
      lockAfter: 1,
      commonData: {
        title: 'Identify the base words in the group'
      },
      data: [
        `Act, Actor, Action, React
Ask, Asker, Asking, Task
Believe, Believer, Belief, Unbelievable
Change, Changer, Changing, Exchange
Child, Children, Childish, Childhood
City, Citizen, Cityscape, Citywide
Connect, Connector, Connection, Disconnect
Create, Creator, Creation, Recreate
Decide, Decider, Decision, Undecided
Discover, Discoverer, Discovery, Rediscover`,

        `Do, Doer, Doing, Done
Dream, Dreamer, Dreaming, Daydream
Eat, Eater, Eating, Edible
Educate, Educator, Education, Uneducated
Enjoy, Enjoyer, Enjoyable, Unenjoyable
Paint, Painter, Painting, Repaint
Play, Player, Playful, Replay
Question, Questioner, Questioning, Unquestionable
Read, Reader, Reading, Reread
See, Seer, Seeing, Unseen`,

        `Solve, Solver, Solving, Unsolved
Speak, Speaker, Speaking, Speech
Think, Thinker, Thinking, Unthinkable
Travel, Traveler, Traveling, Untravelled
Use, User, Usage, Misuse
Visit, Visitor, Visiting, Revisit
Walk, Walker, Walking, Walkable
Want, Wanting, Unwanted
Write, Writer, Writing, Rewrite
Feel, Feeler, Feeling, Unfeeling`,

        `Film, Filmmaker, Filmography, Filmgoer, Filming
Color, Colorful, Colorless, Coloring, Colorant
Shape, Shapeless, Shaping, Shape-shifter
Letter, Lettering, Letterhead, Letterless, Letterbox
Day, Daylight, Daydream, Daybreak, Daycare
Night, Nightfall, Nightlife, Nightstand, Nighttime
Year, Yearly, Yearbook, Yearning, Yearn
Mind, Mindful, Mindless, Mindset, Mindfulness`,

        `Body, Bodybuilding, Bodyguard, Bodywork
Heart, Heartfelt, Heartless, Heartwarming, Heartthrob
Soul, Soulful, Soulmate, Soulless, Soul-searching
Peace, Peaceful, Peacemaker, Peacekeeping, Peacefulness
War, Wartime, Warlike, Warzone, Warrior`
      ]
    },
    {
      type: 'group',
      label: 'Base Word vs Not a Base Word',
      id: 'group',
      lockAfter: 1,
      commonData: {
        title: 'Drag and drop the words in the right boxes.',
        printTitle: 'Rewrite the words on the right boxes.',
        types: ['Base Word', 'Not a Base Word']
      },
      data: [
        [
          `Act, Ask, Believe, Change, Child, City`,
          `Actor, Task, Believer, Exchange, Children, Citizen`
        ],
        [
          `Connect, Create, Decide, Discover, Do, Dream`,
          `Connector, Decision, Discovery, Done, Daydream`
        ],
        [
          `Eat, Educate, Enjoy, Explore, Give, Grow`,
          `Eating, Education, Enjoyable, Explorer, Giving, Growth`
        ],
        [
          `Paint, Play, Question, Read, See, Solve`,
          ` Painter, Replay, Questioning, Reader, Unseen, Unsolved`
        ],
        [
          `Speak, Think, Travel, Use, Visit, Walk`,
          `Speaker, Thinker, Traveler, User, Visitor, Walker`
        ],
        [
          `Want, Write, Feel, Hope, Film, color`,
          `Unwanted, Writer, Feeling, Filmmaker, Colorful`
        ],
        [
          `Shape, Letter, Day, Night, Year, Mind`,
          `Shapeless, Letterhead, Daydream, Nightfall, Yearly, Mindset`
        ],
        [
          `Body, Heart, Soul, Peace, War`,
          `Bodybuilding, Heartfelt, Soulful, Peaceful, Wartime`
        ]
      ]
    },
    {
      label: 'Drag and Drop',
      type: 'matchByDragDrop',
      id: 'drag-drop',
      commonData: {
        title: 'Fill in the blanks with the most suitable words'
      },
      data: [
        `The *actor* delivered a powerful performance on stage. 
The *action* in the movie kept the audience on the edge of their seats. 
How will you *react* to the unexpected news?
The student raised his hand to *ask* a question. 
The *task* at hand required careful consideration. 
The inquisitive child kept *asking* about the world around him.`,

        `The *believer* found strength in their faith. 
It's hard to achieve success without a strong *belief* in oneself. 
The story was so *unbelievable* that many doubted its authenticity.
The *changing* seasons brought a new look to the landscape. 
The *exchange* of ideas led to a creative breakthrough.`,

        `*Children* often see the world with a sense of wonder. 
The child's *childish* behavior made everyone in the room smile. 
*Childhood* memories can shape a person's character.
The *citizen* was proud to call the bustling city their home. 
The *cityscape* glittered with lights in the evening. 
*Citywide* events bring people together from all neighborhoods.`,

        `The *connector* linked the two devices seamlessly. 
A strong *connection* between friends can withstand any challenge. 
*Disconnecting* from technology can be a refreshing experience.
The *creator* crafted a beautiful piece of art. 
The act of *creation* requires imagination and skill. 
Can you *recreate* the magic of the original performance?`,

        `The *decider* carefully weighed the pros and cons before making a decision. 
The *decision* to move to a new city was life-changing. 
Are you still *undecided* about your plans for the weekend?
The explorer was eager to *discover* new lands. 
The *discovery* of a rare artifact excited the archaeologists. 
*Rediscover* the joy in simple pleasures.`,

        `The *doer* believes in taking action to make a difference. 
*Doing* your best is more important than the outcome. 
Have you *done* everything on your to-do list?
The *dreamer* often escapes into a world of fantasy.
*Dreaming* of a better future motivates people to work hard. 
*Daydreaming* can be a pleasant way to pass the time.`,

        `*Eating* a balanced diet is essential for good health. 
Is the fruit ripe and *edible*?
The *educator* inspired students to pursue their passions. 
*Education* is the key to unlocking one's potential. 
Don't remain *uneducated* about important issues.`,

        ` *Enjoyable* activities make life more fulfilling. 
Some find joy even in the seemingly *unenjoyable* tasks.
The *painter* skillfully applied strokes of color to the canvas. 
*Painting* is a form of self-expression. 
Can you *repaint* the room in a more vibrant color?`,

        `The *player* demonstrated exceptional skills on the field. 
*Playful* activities contribute to a child's development. 
Let's plan a *replay* of the successful event.
The *reader* immersed themselves in the captivating novel. 
*Reading* is a gateway to knowledge and imagination. 
Are you planning to *reread* your favorite book?`,

        `*Seeing* the beauty in everyday life enhances happiness. 
Don't remain *unseen*; express yourself.
*Solving* problems requires critical thinking skills. 
Some mysteries remain *unsolved* for centuries.
The *traveler* explored distant lands and experienced new cultures. 
*Traveling* broadens one's perspective on life.`,

        `The *speaker* eloquently delivered a powerful speech. 
*Speaking* up for what you believe in is important. 
Can you deliver a *speech* without stumbling?
The *user* efficiently operated the new software. 
Proper *usage* of tools enhances productivity. 
*Misuse* of resources can have negative consequences.`,

        `The *user* efficiently operated the new software. 
Proper *usage* of tools enhances productivity. 
*Misuse* of resources can have negative consequences.
The *visitor* enjoyed exploring the tourist attractions. 
*Visiting* friends and family creates cherished memories. 
Will you *revisit* your favorite vacation spot?`
      ]
    },
    {
      label: 'MCQ',
      type: 'mcq',
      id: 'mcq',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: `____________ the beauty in everyday life enhances happiness.`,
            options: `Seeing, Saw, Unseen, See`
          },
          {
            qText: `The ________ eloquently delivered a powerful speech. `,
            options: `speaker, speak, speaking, speech`
          },
          {
            qText: `The ________ explored distant lands and experienced new cultures. `,
            options: `traveler, travel, traveling, traveled`
          },
          {
            qText: `Proper ____________ of tools enhances productivity.`,
            options: `usage, user, use, misuse`
          },
          {
            qText: `The _________ enjoyed exploring the tourist attractions. `,
            options: `visitor, visits, visiting, visit`
          },
          {
            qText: `____________ is a simple and effective form of exercise.`,
            options: `Walking, Walk, Walked, Walker`
          },
          {
            qText: `The ______ eloquently conveyed their thoughts in the novel.`,
            options: `writer, writing, wrote, write`
          },
          {
            qText: `___________ connected to others is essential for well-being.`,
            options: `Feeling, Felt, Feel, Feeler`
          },
          {
            qText: ` ____________ times vary among individuals.`,
            options: `Reaction, React, Reacting, Reacted`
          },
          {
            qText: `____________ is a choice that requires conscious effort.`,
            options: `Happiness, Unhappiness, Happy`
          }
        ]
      }
    }
  ]
};
