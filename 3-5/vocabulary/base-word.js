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
A base word is not derived from or made up of other words and has no prefixes or suffixes (for example, 'action', 'activity', 'activate', and 'react' are all words built from the base word 'act').
They originate from diverse languages, forming the basis for constructing additional words. Changing these base words into various parts of speech follows specific rules, known as morphological rules. 
These rules dictate how to modify the original word to create nouns, verbs, adjectives, or adverbs, adapting its form to convey different grammatical functions.
# Rules
1. Noun to Verb:
Addition of "-ize" or "-en" (e.g., "real" becomes "realize," "soft" becomes "soften").
Conversion using suffixes like "-ify" (e.g., "beauty" becomes "beautify").
2. Verb to Noun:
Addition of suffixes such as "-tion," "-ment," or "-ance" (e.g., "act" becomes "action," "develop" becomes "development," "accept" becomes "acceptance").
3. Adjective to Noun:
Addition of suffixes like "-ness," "-ity," or "-hood" (e.g., "happy" becomes "happiness," "dense" becomes "density").
4. Noun to Adjective:
Addition of suffixes such as "-ful," "-ous," or "-al" (e.g., "grace" becomes "graceful," "danger" becomes "dangerous").
5. Verb to Adjective:
Addition of suffixes like "-ing" or "-ed" (e.g., "amaze" becomes "amazing," "excite" becomes "excited").
6. Adjective to Adverb:
Addition of the suffix "-ly" (e.g., "quick" becomes "quickly," "happy" becomes "happily").`
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
Explore - Explorer, Exploration, Unexplored
Give - Giver, Giving, Gift
Grow - Grower, Growth, Overgrow
Happy - Happiness, Unhappy, Happily
Help - Helper, Helping, Unhelpful
Imagine - Imaginer, Imagination, Unimaginable
Introduce - Introducer, Introduction, Unintroduced
Know - Knowledge, Unknown
Learn - Learner, Learning, Unlearn
Listen - Listener, Listening, Unlistening
Live - Liver, Living, Livable
Make - Maker, Making, Remake
Move - Mover, Movement, Unmoved
Nature - Natural, Nature-inspired, Unnatural
Open - Opener, Opening, Unopened
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
Hope - Hoping, Hopeless
Perceive - Perceiver, Perception, Unperceived
React - Reactor, Reaction, Overreact
Happy - Happiness, Unhappy, Happily, Happening
Nation - National, International, Nationhood, Nationality
Friend - Friendly, Friendship, Unfriend, Friendless
Develop - Developer, Development, Undeveloped, Developing
Build - Builder, Building, Rebuild, Buildup
Science - Scientist, Scientific, Unscientific, Science-based
Think - Thought, Thinker, Unthinkable, Thinking
Strong - Strength, Stronger, Strongest, Stronghold
Time - Timely, Timeout, Timeless, Timekeeper
Work - Worker, Workaholic, Workable, Workforce
Help - Helper, Helpful, Unhelpful, Helping
Love - Lover, Lovely, Loveless, Lovestruck
Life - Lifelong, Lifeless, Lifestyle, Lifesaving
Health - Healthy, Unhealthy, Healthier, Healthful
School - Schooling, Schooler, Schoolhouse, Schoolyard
Problem - Problematic, Problem-solving, Problem-free
Music - Musical, Musician, Musicology
Art - Artistic, Artist, Artistry, Artwork
Power - Powerful, Powerless, Empower, Powerhouse
Water - Watery, Waterfall, Waterlogged, Waterfront
Food - Foodie, Foodstuff, Foodless
Sun - Sunny, Sunlight, Sunflower, Sundown
Moon - Moonlit, Moonrise, Moonless, Moonstone
Star - Starry, Starlight, Stardom, Starburst
Plant - Plantation, Planter, Plant-based, Plantar
House - Household, Housewarming, Houseplant
Book - Bookshelf, Booking, Bookworm
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
Citizen, City
Connector, Connect
Decision, Decide`,

        `Discovery, Discover
Done, Do
Daydream, Dream
Eating, Eat
Education, Educate
Enjoyable, Enjoy
Explorer, Explore
Giving, Give`,

        `Growth, Grow
Unhappy, Happy
Helper, Help
Imagination, Imagine
Introduction, Introduce
Knowledge, Know 
Unlearn, Learn
Listener, Listen`,

        `Liver, Live
Remake, Make
Movement, Move
Natural, Nature
Opener, Open
Painter, Paint
Replay, Play
Questioning, Question `,

        `Reader, Read 
Unseen, See
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
Hoping, Hope
Perception, Perceive
Reaction, React`,

        `Happiness, Happy
National, Nation
Friendly, Friend 
Developer, Develop
Builder, Build
Scientist, Science
Thought, Think
Strength, Strong`,

        `Timeout, Time
Worker, Work
Helper, Help
Lovely, Love
Lifelong, Life
Healthy, Health
Schooling, School
Creator, Create`,

        `Problematic, Problem
Musical, Music
Artistic, Art
Powerful, Power
Waterfall, Water
Foodie, Food
Sunny, Sun`,

        `Moonlit, Moon
Starry, Star
Plantation, Plant
Household, House
Bookshelf, Book
Filmmaker, Film
Colorful, Color`,

        `Shapeless, Shape
Letterbox, Letter
Daylight, Day
Nightfall, Night
Yearly, Year
Mindful, Mind
Bodyguard, Body`,

        `Heartfelt, Heart
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
Explore, Explorer, Exploration, Unexplored
Give, Giver, Giving, Gift
Grow, Grower, Growth, Overgrow
Happy, Happiness, Unhappy, Happily
Help, Helper, Helping, Unhelpful`,

        `Imagine, Imaginer, Imagination, Unimaginable
Introduce, Introducer, Introduction, Unintroduced
Know, Knowledge, Unknown
Learn, Learner, Learning, Unlearn
Listen, Listener, Listening, Unlistening
Live, Liver, Living, Livable
Make, Maker, Making, Remake
Move, Mover, Movement, Unmoved
Nature, Natural, Nature-inspired, Unnatural
Open, Opener, Opening, Unopened`,

        `Paint, Painter, Painting, Repaint
Play, Player, Playful, Replay
Question, Questioner, Questioning, Unquestionable
Read, Reader, Reading, Reread
See, Seer, Seeing, Unseen
Solve, Solver, Solving, Unsolved
Speak, Speaker, Speaking, Speech
Think, Thinker, Thinking, Unthinkable
Travel, Traveler, Traveling, Untravelled`,

        `Use, User, Usage, Misuse
Visit, Visitor, Visiting, Revisit
Walk, Walker, Walking, Walkable
Want, Wanting, Unwanted
Write, Writer, Writing, Rewrite
Feel, Feeler, Feeling, Unfeeling
Hope, Hoping, Hopeless
Perceive, Perceiver, Perception, Unperceived
React, Reactor, Reaction, Overreact
Happy, Happiness, Unhappy, Happily, Happening`,

        `Nation, National, International, Nationhood, Nationality
Friend, Friendly, Friendship, Unfriend, Friendless
Develop, Developer, Development, Undeveloped, Developing
Build, Builder, Building, Rebuild, Buildup
Science, Scientist, Scientific, Unscientific, Science-based
Think, Thought, Thinker, Unthinkable, Thinking
Strong, Strength, Stronger, Strongest, Stronghold
Time, Timely, Timeout, Timeless, Timekeeper
Work, Worker, Workaholic, Workable, Workforce
Help, Helper, Helpful, Unhelpful, Helping`,

        `Love, Lover, Lovely, Loveless, Lovestruck
Life, Lifelong, Lifeless, Lifestyle, Lifesaving
Health, Healthy, Unhealthy, Healthier, Healthful
School, Schooling, Schooler, Schoolhouse, Schoolyard
Problem, Problematic, Problem-solving, Problem-free
Music, Musical, Musician, Musicology
Art, Artistic, Artist, Artistry, Artwork
Power, Powerful, Powerless, Empower, Powerhouse
Water, Watery, Waterfall, Waterlogged, Waterfront
Food, Foodie, Foodstuff, Foodless`,

        `Sun, Sunny, Sunlight, Sunflower, Sundown
Moon, Moonlit, Moonrise, Moonless, Moonstone
Star, Starry, Starlight, Stardom, Starburst
Plant, Plantation, Planter, Plant-based, Plantar
House, Household, Housewarming, Houseplant
Book, Bookshelf, Booking, Bookworm
Film, Filmmaker, Filmography, Filmgoer, Filming
Color, Colorful, Colorless, Coloring, Colorant
Shape, Shapeless, Shaping, Shape-shifter`,

        `Letter, Lettering, Letterhead, Letterless, Letterbox
Day, Daylight, Daydream, Daybreak, Daycare
Night, Nightfall, Nightlife, Nightstand, Nighttime
Year, Yearly, Yearbook, Yearning, Yearn
Mind, Mindful, Mindless, Mindset, Mindfulness
Body, Bodybuilding, Bodyguard, Bodywork
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
          `Happy, Help, Imagine, Introduce, Know, Learn`,
          `Unhappy, Helper, Imagination, Introduction, Knowledge, Unlearn`
        ],
        [
          `Listen, Live, Make, Move, Nature, Open`,
          `Listener, Liver, Remake, Movement, Natural, Opener`
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
          `Want, Write, Feel, Hope, Perceive, React`,
          `Unwanted, Writer, Feeling, Hoping, Perception, Reaction`
        ],
        [
          `Nation, Friend, Develop, Build, Science, Strong`,
          `National, Friendly, Developer, Builder, Scientist, Strength`
        ],
        [
          `Time, Work, Love, Life, Health, School, Problem`,
          `Timeout, Worker, Lovely, Lifelong, Healthy, Schooling, Problematic`
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
The *explorer* ventured into unexplored territories.
*Exploration* is a natural human instinct. `
      ]
    },
    {
      id: 'fillup',
      label: 'Fill in the blanks ',
      type: 'fillup',
      commonData: {
        noOptions: true,
        title:
          'Fill in the blanks with the most appropriate word. The base word is given within the brackets.'
      },
      lockAfter: 2,
      data: [
        `The *giver* generously shared their resources with those in need. (give)
*Giving* without expecting anything in return is a noble act. (give)
A thoughtful *gift* can brighten someone's day. (give)
The *grower* cultivated a lush garden. (grow)
*Growth* requires patience and perseverance. (grow)
Sometimes, it's necessary to *overgrow* challenges to reach new heights. (grow)`,

        `*Happiness* is a state of mind that comes from within. (happy)
Despite facing challenges, she remained *happily* optimistic. (happy)
What are the little things that make you *happy*? (happy)
The *helper* offered assistance to those struggling. (help)
*Helping* others is a rewarding experience. (help)
It's important to recognize when you need *help* and ask for it. (help)`,

        `The *imaginer* envisioned a world filled with possibilities. (imagine)
*Imagination* fuels creativity and innovation. (imagine)
Some ideas may seem *unimaginable* until someone brings them to life. (imagine)
The *introducer* warmly welcomed the new team members. (introduce)
The *introduction* of new technology revolutionized the industry. (introduce)
Don't leave someone feeling *unintroduced* in a social setting. (introduce)`,

        `*Knowledge* is a powerful tool for personal and societal growth. (know)
The known and *unknown* are intertwined in the vast universe. (know) 
Do you seek *knowledge* about different cultures? (know)
The *learner* eagerly absorbed new information. (learn)
*Learning* is a lifelong journey. (learn)
*Unlearn* outdated beliefs that hinder your progress. (learn)`,

        `The *listener* paid close attention to the soothing music. (listen)
*Listening* is a skill that fosters understanding. (listen)
*Unlistening* to others can lead to misunderstandings. (listen)
The *liver* takes care of the body's detoxification process. (live)
*Living* a fulfilling life involves pursuing your passions. (live)
Is your current *living* situation comfortable and livable? (live)`,

        `The *maker* skillfully crafted a handmade gift. (make)
*Making* something with your hands is a satisfying experience. (make)
It's time to *make* a decision about your future. (make)
The *mover* efficiently transported furniture to a new location. (move)
*Movement* is essential for maintaining a healthy lifestyle. (move) 
Don't remain *unmoved* by the plight of those in need. (move)`,

        `*Opening* up about your feelings can foster deeper connections. (open)
An *unopened* letter may hold important information. (open)
The *painter* skillfully applied strokes of color to the canvas. (paint)
*Painting* is a form of self-expression. (paint)
Can you *repaint* the room in a more vibrant color? (paint)`,

        `The *player* demonstrated exceptional skills on the field. (play)
*Playful* activities contribute to a child's development. (play)
Let's plan a *replay* of the successful event. (play)
The *readers* immersed themselves in the captivating novel. (read)
*Reading* is a gateway to knowledge and imagination. (read)
Are you planning to *reread* your favorite book? (read)`,

        `*Seeing* the beauty in everyday life enhances happiness. (see)
Don't remain *unseen*; express yourself. (see)
*Solving* problems requires critical thinking skills. (solve)
Some mysteries remain *unsolved* for centuries. (solve)
The *speaker* eloquently delivered a powerful speech. (speak)
*Speaking* up for what you believe in is important. (speak)`,

        `The *thinker* contemplated the meaning of life. (think)
*Thinking* critically is an essential skill. (think)
Some ideas may initially seem *unthinkable* until thoroughly explored. (think)
The *traveler* explored distant lands and experienced new cultures. (travel)
*Traveling* broadens one's perspective on life. (travel)`,

        `The *user* efficiently operated the new software. (use)
Proper *usage* of tools enhances productivity. (use)
*Misuse* of resources can have negative consequences. (use)
The *visitor* enjoyed exploring the tourist attractions. (visit)
*Visiting* friends and family creates cherished memories. (visit)
Will you *revisit* your favorite vacation spot? (visit)`,

        ` The *writer* eloquently conveyed their thoughts in the novel. (write)
*Writing* is a powerful form of self-expression. (write)
Can you find time to *rewrite* and improve your work? (write)
*Reaction* times vary among individuals. (react)
Be mindful not to *overreact* in stressful situations. (react)`
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
    },
    {
      id: 'fillup-2',
      label: 'Fill in the blanks 2',
      type: 'fillup',
      commonData: {
        noOptions: true,
        title:
          'Fill in the blanks with the most appropriate word. The base word is given within the brackets.'
      },
      lockAfter: 2,
      data: [
        `*Friendly* gestures strengthen the bonds of friendship. (friend)
Cherish the true *friends* who stand by you. (friend)
The *developer* worked on improving software functionality. (develop)
*Development* projects require careful planning. (develop)
*Undeveloped* areas may hold untapped potential. (develop)`,

        `The *builder* constructed a sturdy house. (build)
*Building* relationships takes time and effort. (build)
Can you *rebuild* trust after a misunderstanding? (build)
*Strength* is not just physical; it also refers to mental fortitude. (strong)
*Stronger* communities thrive on collaboration. (strong)
The *strongest* individuals often overcome adversity. (strong)`,

        `The *helper* volunteered their time to assist those in need. (help)
*Helpful* advice can guide someone through challenging situations. (help)
Avoid being *unhelpful* when others seek assistance. (help)
*Healthy* habits, such as regular exercise and balanced nutrition, contribute to overall well-being. (health)
*Unhealthy* choices may lead to chronic conditions. (health)`,

        `*Knowledge* is a powerful tool for personal and societal growth. (know)
The known and *unknown* are intertwined in the vast universe. (know) 
Do you seek *knowledge* about different cultures? (know)
The *learner* eagerly absorbed new information. (learn)
*Learning* is a lifelong journey. (learn)
*Unlearn* outdated beliefs that hinder your progress. (learn)`,

        `The *artist* expressed their creativity through unique artwork. (art)
*Artistic* endeavors often challenge traditional perspectives. (art)
*Artistry* can be found in unexpected places. (art)
The *powerful* leader inspired positive change in the community. (power)
*Powerless* individuals may struggle to influence outcomes. (power)
*Empower* others to reach their full potential. (power)`
      ]
    }
  ]
};
