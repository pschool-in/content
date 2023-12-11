export default {
  label: 'Base Words 2',
  id: 'base-word-2',
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
            text: `Explore - Explorer, Exploration, Unexplored
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
Open - Opener, Opening, Unopened
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
Book - Bookshelf, Booking, Bookworm`
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
        `Explorer, Explore
Giving, Give
Growth, Grow
Unhappy, Happy
Helper, Help
Imagination, Imagine`,

        `Introduction, Introduce
Knowledge, Know 
Unlearn, Learn
Listener, Listen
Liver, Live
Remake, Make`,

        `Movement, Move
Natural, Nature
Opener, Open
Hoping, Hope
Perception, Perceive
Reaction, React`,

        `Happiness, Happy
National, Nation
Friendly, Friend 
Developer, Develop
Builder, Build
Scientist, Science`,

        `Thought, Think
Strength, Strong
Timeout, Time
Worker, Work
Helper, Help
Lovely, Love`,

        `Lifelong, Life
Healthy, Health
Schooling, School
Creator, Create
Problematic, Problem
Musical, Music`,

        `Artistic, Art
Powerful, Power
Waterfall, Water
Foodie, Food
Sunny, Sun`,

        `Moonlit, Moon
Starry, Star
Plantation, Plant
Household, House
Bookshelf, Book`
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
        `Explore, Explorer, Exploration, Unexplored
Give, Giver, Giving, Gift
Grow, Grower, Growth, Overgrow
Happy, Happiness, Unhappy, Happily
Help, Helper, Helping, Unhelpful
Imagine, Imaginer, Imagination, Unimaginable
Introduce, Introducer, Introduction, Unintroduced
Know, Knowledge, Unknown
Learn, Learner, Learning, Unlearn
Listen, Listener, Listening, Unlistening`,

        `Live, Liver, Living, Livable
Make, Maker, Making, Remake
Move, Mover, Movement, Unmoved
Nature, Natural, Nature-inspired, Unnatural
Open, Opener, Opening, Unopened
Hope, Hoping, Hopeless
Perceive, Perceiver, Perception, Unperceived
React, Reactor, Reaction, Overreact
Happy, Happiness, Unhappy, Happily, Happening
Nation, National, International, Nationhood, Nationality`,

        `Friend, Friendly, Friendship, Unfriend, Friendless
Develop, Developer, Development, Undeveloped, Developing
Build, Builder, Building, Rebuild, Buildup
Science, Scientist, Scientific, Unscientific, Science-based
Think, Thought, Thinker, Unthinkable, Thinking
Strong, Strength, Stronger, Strongest, Stronghold
Time, Timely, Timeout, Timeless, Timekeeper
Work, Worker, Workaholic, Workable, Workforce
Help, Helper, Helpful, Unhelpful, Helping
Love, Lover, Lovely, Loveless, Lovestruck`,

        `Life, Lifelong, Lifeless, Lifestyle, Lifesaving
Health, Healthy, Unhealthy, Healthier, Healthful
School, Schooling, Schooler, Schoolhouse, Schoolyard
Problem, Problematic, Problem-solving, Problem-free
Music, Musical, Musician, Musicology
Art, Artistic, Artist, Artistry, Artwork
Power, Powerful, Powerless, Empower, Powerhouse
Water, Watery, Waterfall, Waterlogged, Waterfront
Food, Foodie, Foodstuff, Foodless
Sun, Sunny, Sunlight, Sunflower, Sundown`,

        `Moon, Moonlit, Moonrise, Moonless, Moonstone
Star, Starry, Starlight, Stardom, Starburst
Plant, Plantation, Planter, Plant-based, Plantar
House, Household, Housewarming, Houseplant
Book, Bookshelf, Booking, Bookworm`
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
Be mindful not to *overreact* in stressful situations. (react)`,

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
