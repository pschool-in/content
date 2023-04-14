export default {
  id: 'preposition-7',
  label: 'Prepositions',
  lockAfter: 3,
  list: [
    {
      label: 'Notes',
      type: 'passage',
      id: 'preposition',
      data: {
        title: 'Preposition',
        text: [
          `A word used to show the relation between a noun or a pronoun with some other word in the sentence is called a preposition. Prepositions can be categorized into the following.`,
          {
            type: 'html',
            text: `1. Preposition of time: The prepositions of time include <b>on</b>, <b>in</b>, <b>at</b>, <b>by</b>, <b>until</b>, <b>during</b>, <b>for</b>, <b>between</b>, <b>since</b>, <b>before</b>, etc.<br>
2. Preposition of place: These include <b>on</b>, <b>under</b>, <b>in</b>, <b>at</b>, <b>above</b>, <b>below</b>, <b>among</b>, <b>behind</b>, etc.<br>
3. Preposition of direction and movements: These prepositions include <b>to</b>, <b>towards</b>, <b>along</b>, <b>through</b>, <b>across</b>, <b>onto</b>, etc.<br>
4. Preposition of purpose or source: These include <b>to</b>, <b>for</b>, <b>because of</b>, <b>owing to</b>, <b>due to</b>, <b>by courtesy of</b>, <b>for the benefit of</b>, <b>in favor of</b>, <b>in honor of</b>, <b>in the light of</b>, <b>on behalf of</b>, <b>thanks to</b>, <b>towards</b>, etc.`
          }
        ]
      }
    },
    {
      label: 'Multiple Choice Questions',
      type: 'mcq',
      id: 'mcq-pre',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: `Which of the following prepositions is NOT a preposition of time?`,
            options: `to, on, since, during `
          },
          {
            qText: `Which preposition is used to indicate movement across something?`,
            options: `through, in, behind, for`
          },
          {
            qText: `Which preposition is used to indicate a purpose or source?`,
            options: `for, on, under, above`
          },
          {
            qText: `Which preposition is used to indicate a duration of time?`,
            options: `until, in, at, behind`
          }
        ]
      }
    },
    {
      label: 'Fill in the blanks',
      type: 'matchByDragDrop',
      id: 'drag-drop-preposition',
      lockAfter: 1,
      data: [
        `The baby is sleeping *in* the bed.
Television is kept *on* the table.
Mother came *into* the room after an hour.
Vishnu goes *to* the temple on Saturday.
Ice cream is made *from* milk and cream.`,

        `He is a professor *of* Mathematics.
The artist is insulted *by* the music director.
Farmer is familiar *with* the agricultural problems.
This piece of land was a dispute *among* the four boys.
The two children were not ready to distribute the money *between* them.`,

        `A poet knows *about* the figures of speech well.
Rohan is sitting *beside* his mother at the party.
I came *across*  very good news.
The patient had died *before* the surgery was carried out.
I couldn't attend the meeting *due to* my sickness.`,

        `*Despite* my warnings to him, he went to the circus.
Say it *in* a few words.
Police caught and beat the thief *in front of* the whole crowd.
I purchased a book *in addition to* the perfumes for my younger brother.
Players have a strong zeal *for* the final game.`,

        `This book is very useful *to* me.
I request you to think *over* the matter again.
He wore a golden ring *on* his finger.
Please speak *in* English.
He has no chance *of* winning.`,

        `He goes *for* a morning walk.
I need a dictionary *of* Spanish.
There is a coat *on* a hook.
The lines were printed *in* italics.`
      ]
    },
    {
      label: 'Choose the Correct Answer',
      id: 'mcq-preposition',
      type: 'mcq',
      commonData: {
        title: 'Choose the most appropriate option.'
      },
      data: [
        {
          questions: [
            {
              qText: 'Agra is very famous ___ the Taj Mahal.',
              options: 'for, to, in, by'
            },
            {
              qText: 'Indians have strong faith __ God.',
              options: 'in, to, on, into'
            },
            {
              qText: 'I help those who are junior __ me.',
              options: 'to, than, in, for'
            },
            {
              qText: 'Manish was surprised __ my coming there.',
              options: 'at, by, for, on'
            },
            {
              qText: `I felt very sorry ___ the poor and hungry boy.`,
              options: 'for, to, with, from'
            }
          ]
        },
        {
          questions: [
            {
              qText: 'When will you bring a gift ___ me?',
              options: 'for, with, to, by'
            },
            {
              qText: "I don't know much _____ it.",
              options: 'about, upon, over, with'
            },
            {
              qText: 'Go and sit __ your place, please.',
              options: 'at, to, in, on'
            },
            {
              qText: '__ which month does the session begin?',
              options: 'In, On, At, Within'
            },
            {
              qText: 'She purchased it ____ Surat Bazar.',
              options: 'from, on, for, to'
            }
          ]
        },
        {
          questions: [
            {
              qText: 'He deals ____ diamonds.',
              options: 'in, at, with, of'
            },
            {
              qText: 'One must not deviate _____ the path of truth and virtue.',
              options: 'from, to, with, out'
            },
            {
              qText: 'Eventually, I persuaded her to comply ____ my requests.',
              options: 'with, as, at, from'
            },
            {
              qText: 'There is no cure ___ AIDS yet.',
              options: 'for, of, by, with'
            },
            {
              qText: 'She is keen __ going abroad.',
              options: 'on, at, with, none'
            }
          ]
        },
        {
          questions: [
            {
              qText: 'This article makes several allusions __ the Vedas.',
              options: 'to, at, with, of'
            },
            {
              qText: 'He was anxious __ contact his wife.',
              options: 'to, about, of, at'
            },
            {
              qText: 'She has no aptitude ___ music or dance.',
              options: 'for, to, with, None of these'
            },
            {
              qText: 'Peter kept the books __ the shelf.',
              options: 'on, at, in, none of these'
            },
            {
              qText: 'He was brought __ by his grandmother.',
              options: 'up, about, out, in'
            }
          ]
        },
        {
          questions: [
            {
              qText: 'The cat is hiding _____ the couch.',
              options: 'under, beside, on, in'
            },
            {
              qText: 'She walked __ the store to buy some milk.',
              options: 'to, on, in, at'
            },
            {
              qText: 'I hung the picture __ the wall.',
              options: 'on, in, beside, under'
            },
            {
              qText: 'The ball rolled ____ the stairs.',
              options: 'down, on, up , under'
            },
            {
              qText: 'The cat is sleeping __ the sofa.',
              options: 'on, in, beside, over'
            }
          ]
        }
      ]
    },
    {
      id: 'fillup-preposition',
      label: 'Complete the passage',
      type: 'fillup',
      commonData: {
        noOptions: true,
        title: 'Complete the passage using appropriate prepositions'
      },
      lockAfter: 2,
      data: [
        `A galaxy is a system *of* stars, stellar remnants, gas, dust, dark matter etc bound *with* one another gravitationally. Galaxies range *in* size. They range *from* dwarfs to giants. Many galaxies are thought *to* have black holes at their active centers.`,

        `My neighbor said she wanted to ask me *for* a small favor. Little did I know what was *in* the store *for* me when I agreed to feed her cat. *After* my neighbor left *on* her trip, I walked *across* the street to her house. Once I got inside the house, I was overwhelmed *by* the stench *of* cat urine.`,

        `I looked *around* the house and couldn't believe what I saw. My eyes fell *on* two salad dressing containers sitting *on* a table *beside* the couch, which was completely covered *with* dirty laundry, except *for* this one worn area *by* the table.`,

        `The volume *on* the TV was turned up all the way. *In* disbelief and despite my better judgment, I walked *toward* the restroom. *Around* the base *of* the tub I saw these red velvety mushrooms coming up *between* the tub and tile floor.`,

        `This filth was *beyond* anything I'd ever seen *in* my life. *Within* two minutes the cat was fed and I was out *of* there. Since she returned *from* her trip, I have never been available to watch her cat again.`
      ]
    },
    {
      id: 'fill-up-option',
      label: 'Fill in the blanks',
      type: 'fillup',
      commonData: {
        title: `Fill in the blanks using suitable prepositions.`
      },
      data: [
        `He was born *on (at)* June 5th.
She went *to (by)* the park to meet her friends.
The book is *on (over)* the table.
The plane flew *above (over)* the clouds.
They are going to the concert *with (for)* their parents.`,

        `Vegetarians abstain *from (with)* eating meat.
Good food is absolutely essential *for (to, with)* our health.
The jury absolved him *of (off, from)* the crime.
They wed *on (during/from)* the 3rd of December.
Our garden abounds *with (in)* roses.`,

        `Tulips abound *in (with)* the Netherlands.
He was arrested for his abusive treatment *of(with, to)* the dog.
Canoes were provided *for (to, with)* transportation.
My daughter accompanied me *on (by, with)* the trip.
Place the bolster *between (with, by)* the two cushions.`,

        `Cloth is sold *by (with, as)* the meter.
Do not shout *while (during, by)* others are reading.
I promise to return the book *by (until, on)* Monday
He did not fulfill his promise *until (by, after)* it was too late.
The ship sailed *towards (in, for)* the West.`,

        `The young man was employed *as (like)* my father's secretary.
The secret was kept away *from (on, by)* his own family.
Tom came first in his class *as (like)* everyone expected.
He orders his friends about, *as if (as)* they were his servants.
This plan will go *against (by)* your interests.`
      ]
    },
    {
      label: 'Notes',
      type: 'passage',
      id: 'passage',
      data: {
        title: 'Preposition',
        text: [
          `# Prepositions
A preposition is a word that joins nouns, pronouns or phrases to other words in a sentence. It usually shows the relationship of those words or phrases with other words in the sentence about space, time or reason. A preposition usually comes before a noun. When a preposition is not followed by a noun, it is often called a  stranded preposition.
A stranded preposition comes at the end of a sentence when its  object is a relative pronoun or an interrogative pronoun (words like  that, who, which, etc.)
Prepositions can be categorized into three based on their form:
1. Simple Prepositions: Single-word prepositions are called simple prepositions.`,
          {
            type: 'html',
            text: `Some examples are <b>in</b>, <b>on</b>, <b>at</b>, <b>by</b>, <b>from</b>, <b>about</b>, <b>over</b>, <b>under</b>, <b>through</b>, <b>till</b>, <b>up</b>, <b>off</b>, <b>of</b>, <b>for</b>, <b>to</b>, etc.`
          },
          `2. Compound Prepositions: When two or more words are combined to form one single preposition, we have a compound preposition.`,
          {
            type: 'html',
            text: `Some examples of compound prepositions are <b>into</b>, <b>across</b>, <b>without</b>, <b>within</b>, <b>inside</b>, <b>outside</b>, <b>beneath</b>, <b>below</b>, <b>behind</b>,  <b>between</b>, etc.`
          },
          `3. Complex or Phrase Prepositions: When a group of words does the work of a single preposition, it is called a complex or phrase preposition.`,
          {
            type: 'html',
            text: `Some two-word complex prepositions are <b>along with</b>, <b>according to</b>, <b>apart from</b>, <b>because of</b>, <b>contrary to</b>, <b>regardless of</b>, <b>prior to</b>, <b>due to</b>, <b>except for</b>, etc.`
          },
          `# Collocation
Certain nouns, adjectives and verbs are generally used with specific prepositions in such a way that these have become fixed ways of using these words. We often refer to such combinations as collocations. `,
          {
            type: 'html',
            text: `Some examples are <b>fondness for</b>, <b>participation in</b>, <b>afraid of</b>, <b>find out</b>, <b>care for</b>, etc.`
          },
          `# Prepositional Phrase
A prepositional phrase can have the functions of an adjective or an adverb.
Look at the lady in the blue dress. (modifying the noun lady)
Please take the pen next to the telephone. (modifying the noun pen)
The poor man sat beside the fence. (Sat where? Beside the fence.)
I go for dance classes after school. (Go when? After school.)`
        ]
      }
    },
    {
      label: 'Multiple Choice Questions',
      type: 'mcq',
      id: 'mcq-prepo',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: `What is a preposition?`,
            options: `A word that shows the relationship between nouns, pronouns or phrases with other words in a sentence, A word that modifies verbs in a sentence, A word that stands alone in a sentence`
          },
          {
            qText: `What is a stranded preposition?`,
            options: `A preposition that is not followed by a noun, A preposition that stands alone in a sentence, A preposition that comes before a noun`
          },
          {
            qText: `What is a collocation?`,
            options: `A combination of nouns - adjectives and verbs used with specific prepositions, A preposition that comes at the end of a sentence, A preposition that modifies adverbs`
          },
          {
            qText: `What function can a prepositional phrase have in a sentence?`,
            options: `Modify nouns and pronouns, Modify verbs, *All of the above`
          }
        ]
      }
    },
    {
      id: 'fill-up',
      label: 'Fill in the blanks',
      type: 'fillup',
      commonData: {
        title: `Fill in the blanks in the following sentences with Prepositions.`
      },
      data: [
        `Mark often reads *during (while)* meals.
Do not shout *while (during)* others are writing. 
I promise to return the book *by (until)* Monday. 
He did not fulfill his promise *until (by)* it was too late.`,

        `Many think Jackson looks *like (as)* Park Jihoon.
Rishi was employed *as (like)* my brother's secretary.
Tony spends money freely *as if (as)* it grew on trees.
Jake came first in his class *as (like)* everyone expected.`,

        `You are free to keep the book *until (by)* Tuesday, but I must have it back *by (until)* Wednesday.
Jay orders his friends about, *as if (as)* they were his servants.
This plan will go *against (by)* Ram's interests.
There are many diseases caused *by (of)* dirt and filth.`,

        `Jessi was the main cause *of (by)* Ron's misery.
Athiya went to Tokyo *at (in)* the age of 3. 
You will receive the payment *within (during)* 30 days of joining.
In the absence of professional experience, you will be *at (in)* a disadvantage here.`,

        `I have not seen her *for (since)* the last nine months. 
You must travel by train to reach *on (in)* time. 
I have been going to this cafeteria *for (since)* a long time. 
He is struggling *from (with)* migraine.
We drove *along (through)* the coastline.`
      ]
    },
    {
      id: 'fillup-2',
      label: 'Preposition of Place',
      type: 'fillup',
      commonData: {
        noOptions: true,
        title: 'Fill in the blanks using prepositions of place.'
      },
      lockAfter: 1,
      data: [
        `Please wait *at* the reception desk.
This is from the shop *on* the main road.
Everybody gathered *at* 14, Park Street.
There is a fence *around* the garden.`,

        `We stood *at* the bus stop.
The jewels are kept *in* a box.
Have you looked *under* the bed?
We waited *in* the reception hall for two hours.`,

        `The painting *on* the roof of the church is incredible.
I live *in* Kerala *in* a town called Alappuzha.
The soup is *on* the table.
Meet me *at* the cafeteria next to the station.`,

        `Place the book *on* the table. 
Jack is *in* a meeting now.
The shoes are *under* the bed.
The picture frame is hanging *on* the wall.`,

        `The flower vase is *beside* the window.
The TV is mounted *above* the fireplace.
The pencil is *in* the drawer.
The book is lying *on* the table.`
      ]
    },
    {
      id: 'fillup-3',
      label: 'Preposition of Time',
      type: 'fillup',
      commonData: {
        noOptions: true,
        title: 'Fill in the blanks using prepositions of time.'
      },
      lockAfter: 1,
      data: [
        `Meet me *after* 4 o'clock.
We will get the finished product *in* May.
Will you visit us *at* Diwali?
*During* summer, it becomes very hot and humid in the plains.`,

        `What did you discuss *at* the meeting
He has been living here *for* five years
We had a holiday *on* 18 April.
We reached *in* time to catch the train.`,

        `India got independence *on* 15th August 1947. 
Try to come home *before* it starts raining. 
*During* World War I, many civilians lost their lives.
I wake up *at* 6 o'clock in the morning.`,

        `We have a meeting *on* Monday.
The concert starts *at* 7 p.m.
We are going on vacation *during* the summer.
My sister got married *in* 2010.`,

        `We have to finish the project *before* the deadline.
My brother will arrive *by* the end of the week.
The flower event will take place *in* September.
I was born *in* 1997.`
      ]
    },
    {
      id: 'fillup-4',
      label: 'Preposition of Direction, Cause and Purpose',
      type: 'fillup',
      commonData: {
        noOptions: true,
        title:
          'Fill in the blanks using prepositions of direction, cause and purpose.'
      },
      data: [
        `She walked *toward* the park.
He drove the car *across* the bridge.
She looked *up* at the sky.
They forgave each other *for* the sake of their friendship.`,

        `She cried *because* of the sad news of her pet's demise.
She wrote a letter *to* her parents as she was missing them.
They raised money *for* the charity fund for undernourished children.`,

        `We went for a walk *along* the river.
The cat tried to jump *over* the fence but tripped and fell.
Sam and Rehan ran *around* the track all day.`,

        `Before the competition, James swam *across* the river and back to build up stamina.
He climbed *up* a tree to get *over* the wall and *into* the orchard.
We need to start preparations *for* Sports Day.`,

        `He won't succeed *with* hard work alone.
I need the money *for* the rent.
When Archimedes discovered the law of buoyancy, he ran *through* the streets shouting 'Eureka!'
A flying saucer just flew *over* that building.`
      ]
    },
    {
      label: 'Prepositional Phrases',
      type: 'fillup',
      id: 'fill-up-1',
      data: {
        title:
          'Complete the following sentences using appropriate prepositional phrases',
        text: `I would rather have a chocolate milkshake *instead of (instead from)* cold coffee.
*In spite (Despite)* of the sand storm, we went out.
*In case of (In case)* fire, break the glass to escape.
I am standing here *on behalf of (on behalf)* my colleagues.
Renuka solved the problem *by means of (by means)* a new device developed by the engineers at her company.
*On the whole (By the whole)*, Meera had a happy childhood.
Can you help Riya *in any way (any way)*?
Mary didn't allow cancer to discourage her. *On the contrary (By the contrary)*, she began to work twice as hard.
*In general (By general)*, we are impressed with Ankita's performance.
I am seeing him in August *or rather (rather)* in September.`
      }
    },
    {
      id: 'fillup-5',
      label: 'Complete the passage',
      type: 'fillup',
      commonData: {
        noOptions: true,
        title: 'Complete the passage using appropriate prepositions'
      },
      lockAfter: 2,
      data: [
        `Belgium and Denmark are only an hour or so apart *by* airplane. Danes look a lot like Belgians, and if you were dropped *on* a street corner *in* Copenhagen, you wouldn't find it all that different *from* a street corner *in* Brussels.`,

        `*In* the mid-1990s, an experimental public school called the KIPP Academy opened *on* the fourth floor of Lou Gehrig Junior High School *in* New York City. Lou Gehrig is *in* the seventh school district, one of the poorest neighborhoods *in* New York City. It is a squat, gray 1960s-era building *across* the street from a bleak-looking group of high-rises.`,

        `Now take a look *at* the last column, which totals up all the summer gains *from* first grade *to* sixth grade. The reading scores of the poor kids go up *by* 0.19 points. When it comes to reading skills, poor kids learn nothing when school is not *in* session. The reading scores of the rich kids, by contrast, go up *by* a whopping 60.99 points. Virtually all of the advantage that wealthy students have over poor students is the result of differences in the way privileged kids learn *while* they are not *in* school.`,

        `One very real possibility is that these are the educational consequences of the differences *in* parenting styles. Think back to Alex Williams, the nine-year-old whom Annette Lareau studied. His parents believe *in* concerted cultivation. He gets taken *to* museums and gets enrolled *in* special programs and goes *to* summer camp, where he takes classes. When he's bored *at* home, there are plenty of books to read, and his parents see it as their responsibility to keep him actively engaged *in* the world *around* him. It's hard to see how Alex would get better *at* reading and math *over* the summer.`,

        `During the pandemic, many people have been spending more time *at* home than usual. They have been working *from* home, studying *from* home, and even socializing *from* home. As a result, some have been struggling with feelings *of* isolation and boredom. However, there are many activities that can be done *at* home *to* help combat these feelings. *For* example, people can exercise *at* home, cook meals *at* home, read books *at* home, *or* watch movies *at* home. Additionally, people can connect *with* friends and family through video calls *or* social media platforms. *Despite* the challenges *of* the pandemic, there are still many ways *to* stay engaged and connected *from* the comfort *of* one's own home.`
      ]
    },
    {
      id: 'fillup-6',
      label: 'Fill up using Prepositions',
      type: 'fillup',
      commonData: {
        noOptions: true,
        title:
          'Fill in the blanks using the given prepositions. (among, across, near, along, between, behind, by, toward, opposite, within)'
      },
      lockAfter: 2,
      data: [
        `The post office is *across* the street from the grocery store.
We will stop at many attractions *along* the way.
The kids are hiding *behind* the tree.
Walk *toward* the garage and then turn left.
Place a checkmark *within* the box.`,

        `The gas station is *by* the grocery store.
The park is *near* her house.
There is a deer *between* the two trees.
There is a purple flower *among* the weeds.
The garage is *opposite* the house.`,

        `*Among* all the applicants, Sarah was the most qualified for the job.
The grocery store is located *near* my house.
We walked *across* the bridge to get to the other side of the river.
The path *along* the beach is perfect for a morning jog.
The competition was *between* two strong candidates.`,

        `John was hiding *behind* the door to scare his sister.
I am heading *toward* the city center to meet my friends.
The keys are somewhere *within* the house.
*Among* the many options available, he chose the one that seemed most reasonable.
The park is located *near* the city center, making it easily accessible.`,

        `The river flows *along* the edge of the town, providing a picturesque view.
The dividing line *between* the two countries was clearly marked on the map.
She stood *behind* me in line, waiting for her turn to be served.
The children ran *toward* the playground as soon as they saw it.
The key to success lies *within* oneself; it cannot be found externally.`
      ]
    }
  ]
};
