export default {
  label: 'Preposition',
  id: 'preposition-2',
  lockAfter: 5,
  list: [
    {
      id: 'reading',
      type: 'passage',
      label: 'Reading',
      data: {
        title: 'The Right Preposition',
        text: [
          `# at vs of`,
          {
            type: 'html',
            text: `<b>at</b> -  used before a specific time or location<br>
        <b>of </b> -  to show possession`
          },
          `# with vs in`,
          {
            type: 'html',
            text: `<b>with</b> - to denote location 'alongside' or 'near' <br>
        <b>in</b> - to denote the location inside`
          },
          `# for vs from`,
          {
            type: 'html',
            text: `<b>for</b> - used to show purpose or exchange of duration of time<br>
        <b>from</b> - to show the origin or source`
          },
          `# during vs following`,
          {
            type: 'html',
            text: `<b>during</b> -  to express 'when' something happens <br>
        <b>following</b> - to express 'after' or as a 'result' of a particular event`
          },
          `# beside vs besides`,
          {
            type: 'html',
            text: `<b>beside</b> -  refers to 'close to' or 'next to'<br>
        <b>besides</b> - 'in addition to' or 'apart from'`
          },
          `# up vs upon`,
          {
            type: 'html',
            text: `<b>up</b> -  to talk about position or movement to a higher degree<br>
        <b>upon</b> - refers to one thing on another`
          },
          `# toward vs towards`,
          {
            type: 'html',
            text: `<b>toward</b> - refers to 'near to' or just before a time or place<br>
        <b>towards</b> - movement in a particular direction`
          },
          `# with vs within`,
          {
            type: 'html',
            text: `<b>with</b> - refers to connections between people and things<br>
        <b>within</b> - inside the range or limits of something`
          },
          `# into vs inside`,
          {
            type: 'html',
            text: `<b>into</b> - movement from outside to inside<br>
        <b>inside</b> - inner part of something`
          },
          `# until vs upto`,
          {
            type: 'html',
            text: `<b>until</b> - till a point of time<br>
        <b>upto</b> - till a point of place`
          }
        ]
      }
    },
    {
      id: 'at-of',
      label: 'at vs of',
      type: 'fillupOptions',
      data: {
        title: 'at vs of',
        text: `My mother is *at* home today.
I hope you will snap out *of* your bad mood soon!
Which *of* you is Tom?
Sheetal was *at* the library, when her phone rang. 
The little boy was tired *of* staying at home.`,
        options: 'at,of'
      }
    },
    {
      id: 'with-in',
      label: 'with vs in',
      type: 'fillupOptions',
      data: {
        title: 'with vs in',
        text: `His dog is *with* him all the time!
Did you see that pretty bird *in* the cage?
Pavan has been *in* his room the whole day.
The doctor instructed Hamid to take curd *with* his meals.
Please bear *with* us, the flight may be delayed by ten minutes.`,
        options: 'with, in'
      }
    },
    {
      id: 'for-from',
      label: 'for vs from',
      type: 'fillupOptions',
      data: {
        title: 'for vs from',
        text: `Varun received a letter *from* his uncle.
If God is *for* us, who can be against us?
Have you taken out milk *from* the fridge?
Studying at the 'eleventh hour' is not the right way to prepare *for* examinations!
I will be boarding the bus *from* the city bus stand.`,
        options: 'for, from'
      }
    },
    {
      id: 'during-following',
      label: 'during vs following',
      type: 'fillupOptions',
      data: {
        title: 'during vs following',
        text: `Mrs. Indira Gandhi was the Prime Minister of India *during* the Indo-Pakistan war.
Preethi always falls asleep *during* the long ride home in the school bus.
*During (Following)* the Second World War, people in Europe suffered great hardship.
It was *during* the dance practice that a pigeon flew into the hall.
I always feel very hungry *during* the fifth period!`,
        options: 'during, following'
      }
    },
    {
      id: 'beside-besides',
      label: 'beside vs besides',
      type: 'fillupOptions',
      data: {
        title: 'beside vs besides',
        text: `"Come, sit *beside* me," said the teacher to the crying child.
The teachers were also present at the conference, *besides* the Principals.
*Besides (Beside)* English,  Arun speaks Japanese and German!
The cat and the monkey always slept *beside* each other.
There will be ten for lunch, *besides* the four of us.`,
        options: 'beside, besides'
      }
    },
    {
      id: 'up-upon',
      label: 'up vs upon',
      type: 'fillupOptions',
      data: {
        title: 'up vs upon',
        text: `Climb *up* the stairs, to find your classroom.
Pujit did not show *up* at Nitin's birthday party.
The President was called *upon* to address the gathering.
The boy stooped down to pick up the bird's nest which had fallen *upon* the ground.
The clown placed the ball *upon* his nose and walked on the tightrope!`,
        options: 'up, upon'
      }
    },
    {
      id: 'toward-to',
      label: 'toward vs to',
      type: 'fillupOptions',
      data: {
        title: 'toward vs to',
        text: `Paul kicked the ball *toward* the goal post.
I would like *to* show you my new doll.
"Look! There's daddy!" the lady cried out *to* her little boy.
I was walking *toward* home, when I saw a blind man playing his flute.
They started driving *toward* Ooty early this morning.`,
        options: 'toward, to'
      }
    },
    {
      id: 'with-within',
      label: 'with vs within',
      type: 'fillupOptions',
      data: {
        title: 'with vs within',
        text: `"Who will go *with* me?" asked the king.
The noise seems to be coming from *within* that cupboard!
There seems to be hidden strife *within* that family.
My mother appears weak, but has great strength *within* her.
I see a man standing outside *with* a red suitcase.`,
        options: 'with, within'
      }
    },
    {
      id: 'into-inside',
      label: 'into vs inside',
      type: 'fillupOptions',
      data: {
        title: 'into vs inside',
        text: `"Come *into* my parlour," said the spider to the fly.
I was not permitted to look *inside* the trunk.
Shruthi dived *into* the pool.
Aakash angrily threw the letter *into* the fire.
I know there are foxes living *inside* that cave.`,
        options: 'into, inside'
      }
    },
    {
      id: 'until-upto',
      label: 'until vs upto',
      type: 'fillupOptions',
      data: {
        title: 'until vs upto',
        text: `This tree can grow *upto* thirty feet.
It is *upto* your parents to decide if you should go on the excursion.
Anusha will not eat *until* she finishes her homework.
*Until (Upto)* he gets a biscuit, my dog will not stop barking! 
The mother bird kept flying around, *until* she found food for her chicks.`,
        options: 'until, upto'
      }
    },
    {
      id: 'reading-2',
      type: 'passage',
      label: 'Reading',
      data: {
        title: 'The Right Preposition',
        text: [
          `# over vs onto`,
          {
            type: 'html',
            text: `<b>over</b> - used when crossing from one side to the other<br>
          <b>onto </b> - refers to direction or movement to a position on a surface`
          },
          `# through vs throughout`,
          {
            type: 'html',
            text: `<b>through</b> - from one end or side of something to the other <br>
          <b>throughout</b> - refers to every part`
          },
          `# by vs of`,
          {
            type: 'html',
            text: `<b>by</b> - to show who is doing an action, how to do something, method of transport<br>
          <b>of</b> -  belonging, things made of other things`
          },
          `# about vs across`,
          {
            type: 'html',
            text: `<b>about</b> - on the subject of <br>
          <b>across</b> - on the other side of something`
          },
          `# aside vs away`,
          {
            type: 'html',
            text: `<b>aside</b> - refers to 'close to' or 'next to'<br>
          <b>away</b> - 'in addition to' or 'apart from'`
          },
          `# along vs among`,
          {
            type: 'html',
            text: `<b>along</b> - in a line<br>
          <b>among</b> - in the middle of`
          },
          `# despite vs in spite of`,
          {
            type: 'html',
            text: `<b>despite</b> - contrast between two things (not followed by 'of')<br>
          <b>in spite of</b> - to show contrast. (followed by 'of')`
          },
          `# before vs behind`,
          {
            type: 'html',
            text: `<b>before</b> - refers to earlier time<br>
          <b>behind</b> - refers to the 'back of'`
          },
          `# on vs in`,
          {
            type: 'html',
            text: `<b>on</b> - top of something<br>
          <b>in</b> - inside of something`
          },
          `# around vs after`,
          {
            type: 'html',
            text: `<b>around</b> - surrounding<br>
          <b>after</b> - later in time or place`
          }
        ]
      }
    },
    {
      id: 'over-onto',
      label: 'over vs onto',
      type: 'fillupOptions',
      data: {
        title: 'over vs onto',
        text: `Sham stepped *onto* the dance floor to perform for his friends.
The soldier’s horse skillfully jumped *over* the fence.
Anjali’s cat was almost run *over* by a car!
Farid climbed *onto* the roof to rescue his pet parrot which couldn’t fly.
The lady in the blue saree has travelled all *over* the world.`,
        options: 'over, onto'
      }
    },
    {
      id: 'through-throughout',
      label: 'through vs throughout',
      type: 'fillupOptions',
      data: {
        title: 'through vs throughout',
        text: `The monkey jumped *through* the hoop.
I managed to finish reading my book *through* the long train journey.
The little boy crawled *through* the window and jumped into the room.
The children giggled to see their teacher sleep *through* the movie!
The baby in my neighbour’s house is awake *throughout* the night.`,
        options: 'through, throughout'
      }
    },
    {
      id: 'by-of',
      label: 'by vs of',
      type: 'fillupOptions',
      data: {
        title: 'by vs of',
        text: `This beautiful park is maintained *by* the local residents.
Puran’s mother reminds him to stay out *of* trouble every morning!
Which *of* you live close to the market? 
The classrooms are cleaned *by* the students every day.
Neera ran out *of* sugar this morning.`,
        options: 'by, of'
      }
    },
    {
      id: 'about-across',
      label: 'about vs across',
      type: 'fillupOptions',
      data: {
        title: 'about vs across',
        text: `The little boy couldn’t stop talking *about* his toy truck.
What are those girls so excited *about*?
Shireen’s best friend Mala lives *across* the road.
This book is *about* elephants.
Nisha is writing an essay *about* her school trip to Mysore.`,
        options: 'about, across'
      }
    },
    {
      id: 'aside-away',
      label: 'aside vs away',
      type: 'fillupOptions',
      data: {
        title: 'aside vs away',
        text: `Naina gave *away* her story books to the little girl next door.
Diana put *aside* her corrections to have a cup of tea.
My neighbour will be *away* for three months.
Let me put *aside* my project and take a short nap.
The mouse ran *away* from the cat.`,
        options: 'aside, away'
      }
    },
    {
      id: 'along-among',
      label: 'along vs among',
      type: 'fillupOptions',
      data: {
        title: 'along vs among',
        text: `There is honour *among* thieves!
The children walked *along* the beach, collecting shells.
The boy ran *along* the wall and had a bad fall.
The two friends strolled *among* the crowds in the market. 
The soldier had to feel his way *along* the dark path in the forest.`,
        options: 'along, among'
      }
    },
    {
      id: 'despite-in-spite-of',
      label: 'despite vs in spite of',
      type: 'fillupOptions',
      data: {
        title: 'despite vs in spite of',
        text: `*Despite* several warnings, Tenzing continued to The Summit.
The children enjoyed the picnic *despite* the bad weather.
Elephants can run fast *in spite of* their size.
My mother cooks fresh food *despite* her busy schedule.
The planes continue to fly *in spite of* the fog.`,
        options: 'despite, in spite of'
      }
    },
    {
      id: 'before-behind',
      label: 'before vs behind',
      type: 'fillupOptions',
      data: {
        title: 'before vs behind',
        text: `Mother had already heard the news *before* I told her.
The children hurried to kiss their father goodbye *before* he left on the long journey.
Always look on both sides *before* you cross the road.
The runners took their positions *behind* the starting post.
Ajay sits *behind* Sameera in class.`,
        options: 'before, behind'
      }
    },
    {
      id: 'on-in',
      label: 'on vs in',
      type: 'fillupOptions',
      data: {
        title: 'on vs in',
        text: `The cat is sleeping *on* the sofa.
The falcon perched *on* the hunter’s shoulder.
The baby was fast asleep *in* its mother’s arms.
My grandmother was fast asleep *in* her armchair.
Put all your coins *in* the little pouch.`,
        options: 'on, in'
      }
    },
    {
      id: 'around-after',
      label: 'around vs after',
      type: 'fillupOptions',
      data: {
        title: 'around vs after',
        text: `Wrap your scarf *around* your neck, it’s a windy day.
We jog *around* the stadium to warm up before cricket practice.
Sandhya joined this school *after* I did.
When are you coming *around* to see my pet parrot?
*After (Around)* dinner, Meena goes to bed.`,
        options: 'around, after'
      }
    }
  ]
};
