export default {
  label: 'Poems Collection',
  id: 'poems-collection',
  lockAfter: 2,
  list: [
    {
      id: 'squirrel',
      type: 'passage',
      label: `The Squirrel`,
      data: {
        title: `The Squirrel`,
        type: 'poem',
        author: 'Mildred Bowers Armstrong',
        text: `He wore a question mark for tail,
An overcoat of gray,
He sat up straight to eat a nut.
He liked to tease and play,
And if we ran around his tree,
He went the other way.`
      }
    },
    {
      label: 'Multiple Choice Questions',
      type: 'mcq',
      id: 'mcq-squirrel',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: `What is the subject of the poem?`,
            options: `squirrel, bird, rabbit, chipmunk`
          },
          {
            qText: `What does the squirrel wear?`,
            options: `an overcoat of grey, a hat, a scarf, a pair of gloves`
          },
          {
            qText: `What did the squirrel like to do?`,
            options: `eat nuts, swim, sleep, climb trees`
          },
          {
            qText: `How did the squirrel react when people ran around his tree?`,
            options: ` He went the other way
He chased them
He followed them`
          },
          {
            qText: `What was unique about the squirrel's tail?`,
            options: ` It was shaped like a question mark
It was very long
It was bright red
It had stripes`
          }
        ]
      }
    },
    {
      id: 'rebel',
      type: 'passage',
      label: 'The Rebel',
      data: {
        title: 'The Rebel',
        type: 'poem',
        author: 'D. J. Enright',
        text: `When everybody has short hair,
The rebel lets his hair grow long.

When everybody has long hair,
The rebel cuts his hair short.

When everybody talks during the lesson,
The rebel doesn't say a word.

When nobody talks during the lesson,
The rebel creates a disturbance.

When everybody wears a uniform,
The rebel dresses in fantastic clothes.

When everybody wears fantastic clothes,
The rebel dresses soberly.

In the company of dog lovers,
The rebel expresses a preference for cats.

In the company of cat lovers,
The rebel puts in a good word for dogs.

When everybody is praising the sun,
The rebel remarks on the need for rain.

When everybody is greeting the rain,
The rebel regrets the absence of sun.

When everybody goes to the meeting,
The rebel stays at home and reads a book.

When everybody stays at home and reads a book,
The rebel goes to the meeting.

When everybody says, Yes please,
The rebel says, No thank you.

When everybody says, No thank you,
The rebel says, Yes please.

It is very good that we have rebels.
You may not find it very good to be one.`
      }
    },
    {
      label: 'Multiple Choice Questions',
      type: 'mcq',
      id: 'mcq-rebel',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: `
What is the main message of the passage?`,
            options: ` Rebels bring diversity and new perspectives to society
Rebels are unpredictable and cannot be trusted
Rebels are annoying and disruptive to society
Rebels always do the opposite of what others do `
          },
          {
            qText: `What does the rebel do when everybody has short hair?`,
            options: `He lets his hair grow long.
He wears a hat to cover his hair.
He cuts his hair short too.`
          },
          {
            qText: `What does the rebel do when nobody talks during the lesson?`,
            options: ` He creates a disturbance.
He becomes quiet and attentive.
He takes a nap.`
          },
          {
            qText: `What does the rebel do when everybody wears a uniform?`,
            options: `He wears fantastic clothes.
He also wears a uniform.
He wears no clothes.`
          },
          {
            qText: `When everybody is greeting the rain, what does the rebel do?`,
            options: ` He regrets the absence of sun.
He stays inside and ignores the rain.
He also greets the rain.`
          }
        ]
      }
    },
    {
      id: 'shed',
      type: 'passage',
      label: 'The Shed',
      data: {
        title: 'The Shed',
        type: 'poem',
        author: 'Frank Flynn',
        text: `There's a shed at the bottom of our garden
With a spider's web hanging across the door,
The hinges are rusty and creak in the wind.
When I'm in bed I lie and I listen,
I'll open that door one day

There's a dusty old window around at the side
With three cracked panes of glass,
I often think there's someone staring at me
Each time that I pass,
I'll peep through that window one day.

My brother says there's a ghost in the shed
Who hides under the rotten floorboards,
And if I ever dare to set foot inside
He'll jump out and chop off my head,
But I'll take a peek one day.

I know that there isn't really a ghost,
My brother tells lies to keep the shed for his den;
There isn't anyone staring or making strange noises
And the spider has been gone from his web
since I don't know when,
I'll go into that shed one day soon,

But not just yet...`
      }
    },
    {
      label: 'Multiple Choice Questions',
      type: 'mcq',
      id: 'mcq-shed',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: `What is the poem about?`,
            options: ` A shed in the garden
A haunted house
A spider's web
A brother who tells lies`
          },
          {
            qText: `Which of the following is true about the shed in the poem?`,
            options: `The shed is located at the top of the garden.
*The door of the shed is decorated with a spider's web.
The window on the side of the shed is clean and clear.
*The speaker's brother claims that there is a ghost in the shed.
The shed is used by the speaker's brother as his bedroom.`
          },
          {
            qText: `What is the condition of the shed?`,
            options: `It is rusty and creaky
It is new and shiny
It is old and broken
It is well-maintained`
          },
          {
            qText: `What does the speaker want to do with the shed?`,
            options: `Open the door and go inside
Tear it down
Ignore it completely
Keep it locked forever`
          },
          {
            qText: `What does the spider's web symbolize in the poem?`,
            options: `Mystery, Danger, Fear`
          }
        ]
      }
    },
    {
      id: 'chivvy',
      type: 'passage',
      label: 'Chivvy',
      data: {
        title: 'Chivvy',
        type: 'poem',
        author: 'Michael Rosen',
        text: `Grown-ups say things like:
Speak up
Don't talk with your mouth full
Don't stare
Don't point
Don't pick your nose

Sit up
Say please
Less noise
Shut the door behind you
Don't drag your feet
Haven't you got a hankie?
Take your hands out of
your pockets

Pull your socks up
Stand up straight
Say thank you
Don't interrupt
No one thinks you're funny
Take your elbows off the table

Can't you make your own
mind up about anything?`
      }
    },
    {
      label: 'Multiple Choice Questions',
      type: 'mcq',
      id: 'mcq-chivvy',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: `What do grown-ups say about talking with your mouth full?`,
            options: `Don't talk with your mouth full.
Speak up and talk with your mouth full.
It's okay to talk with your mouth full.`
          },
          {
            qText: `What do grown-ups say about picking your nose?`,
            options: `Don't pick your nose.
Pick your nose in private.
It's okay to pick your nose.`
          },
          {
            qText: `What do grown-ups say about staring?`,
            options: `Don't stare.
Stare for a few seconds and then stop.
Stare as much as you like.`
          },
          {
            qText: `What do grown-ups say about hands in pockets?`,
            options: ` Take your hands out of your pockets.
Put your hands in your pockets.
Keep your hands in your pockets.`
          },
          {
            qText: `What do grown-ups say about elbows on the table?`,
            options: `Take your elbows off the table.
Put your elbows on the table.
Keep your elbows on the table.`
          }
        ]
      }
    },
    {
      id: 'trees',
      type: 'passage',
      label: 'Trees',
      data: {
        title: 'Trees',
        type: 'poem',
        author: 'Shirley Bauer',
        text: `Trees are for birds.
Trees are for children.
Trees are to make tree houses in.
Trees are to swing swings on.
Trees are for the wind to blow through.
Trees are to hide behind in'Hide and Seek.'
Trees are to have tea parties under.
Trees are for kites to get caught in.
Trees are to make cool shade in summer.
Trees are to make no shade in winter.
Trees are for apples to grow on, and pears;
Trees are to chop down and call, “TIMBER-R-R!”
Trees make mothers say,
“What a lovely picture to paint!”
Trees make fathers say,
“What a lot of leaves to rake this fall !”`
      }
    },
    {
      label: 'Multiple Choice Questions',
      type: 'mcq',
      id: 'mcq-trees',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: `What are some activities that children enjoy doing with trees?`,
            options: `Burying treasure under them.
Playing tag around them.
Flying kites that get caught in them.
*All of the above.`
          },
          {
            qText: `What purpose do trees serve in the summer?`,
            options: `To provide shade from the sun.
To provide warmth in the cold weather.
To keep the ground dry.
None of the above.`
          },
          {
            qText: `What do fathers often say about trees in the fall?`,
            options: `“What a lovely picture to paint!”
*“What a lot of leaves to rake this fall!”
“What a great place to have a picnic!”
None of the above.`
          },
          {
            qText: `What do trees provide for birds?`,
            options: `A place to build their nests.
A source of food.
A place to perch and rest.
*All of the above.`
          },
          {
            qText: `What do children enjoy doing with trees?`,
            options: ` Building sandcastles.
Playing board games.
Doing homework.
*None of the above.`
          }
        ]
      }
    },
    {
      id: 'cat',
      type: 'passage',
      label: `Dad and the Cat and the Tree`,
      data: {
        title: `Dad and the Cat and the Tree`,
        type: 'poem',
        author: 'Kit Wright',
        text: `This morning a cat got
Stuck in our tree.
Dad said, “Right, just
Leave it to me.”

The tree was wobbly,
The tree was tall.
Mum said, “For goodness'
Sake don't fall!”

“Fall?” scoffed Dad,
“A climber like me?
Child's play, this is!
You wait and see.”

He got out the ladder
From the garden shed.
It slipped. He landed
In the flower bed.

“Never mind,” said Dad,
Brushing the dirt
Off his hair and his face
And his trousers and his shirt,

“We'll try Plan B. Stand
Out of the way!”
Mum said, “Don't fall
Again, O.K.?”

“Fall again?” said Dad.
“Funny joke!”
Then he swung himself up
On a branch. It broke.

Dad landed wallop
Back on the deck.
Mum said, “Stop it,
You'll break your neck!”

“Rubbish!” said Dad.
“Now we'll try Plan C.
Easy as winking
To a climber like me!”

Then he climbed up high
On the garden wall.
Guess what?
He didn't fall!

He gave a great leap
And he landed flat
In the crook of the tree-trunk —
Right on the cat!

The cat gave a yell
And sprang to the ground,
Pleased as Punch to be
Safe and sound.

So it's smiling and smirking,
Smug as can be,
But poor old Dad's
Still

Stuck
Up
The
Tree!`
      }
    },
    {
      label: 'Multiple Choice Questions',
      type: 'mcq',
      id: 'mcq-cat',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: `What happened in the beginning of the story?`,
            options: `A cat got stuck in a tree
Mum got stuck in a tree
The family went on a picnic`
          },
          {
            qText: `What was Dad's reaction when he heard about the cat being stuck in the tree?`,
            options: `He was confident he could rescue the cat
He thought it was a job for a professional
He didn't care about the cat`
          },
          {
            qText: `What happened when Dad tried to use the ladder?`,
            options: `He slipped and fell into the flower bed
The ladder broke and he couldn't climb it
The cat jumped out of the tree before he could rescue it`
          },
          {
            qText: `What happened when Dad climbed up on a branch?`,
            options: `The branch broke and he fell back down
The cat jumped out of the tree before he could rescue it
He got scared and climbed back down`
          },
          {
            qText: `How did Dad finally rescue the cat?`,
            options: `He climbed up on the garden wall and jumped onto the cat
He used a rope to climb up the tree and grab the cat
He asked a neighbor for help`
          }
        ]
      }
    },
    {
      id: 'snake',
      type: 'passage',
      label: 'Garden Snake',
      data: {
        title: 'Garden Snake',
        type: 'poem',
        author: 'Muriel L. Sonne',
        text: `I saw a snake and ran away...
Some snakes are dangerous, they say;
But mother says that kind is good,
And eats up insects for his food.
So when he wiggles in the grass
I'll stand aside and watch him pass,
And tell myself, “There's no mistake,
It's just a harmless garden snake!”`
      }
    },
    {
      label: 'Multiple Choice Questions',
      type: 'mcq',
      id: 'mcq-snake',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: `What did the speaker do when they saw a snake?`,
            options: ` They ran away
They tried to catch the snake
They approached the snake
They stayed still and watched the snake`
          },
          {
            qText: `Why did the speaker's mother say the kind of snake they saw is good?`,
            options: `Because it eats insects
Because it is not dangerous
Because it is friendly to humans
Because it is easy to catch and keep as a pet`
          },
          {
            qText: `What does the speaker do when they see the snake wiggling in the grass?`,
            options: ` They watch from a safe distance
They try to catch the snake
They run away again
They approach the snake to get a closer look`
          },
          {
            qText: `What does the speaker tell themselves when they see the harmless garden snake?`,
            options: `"There's no mistake, it's just a harmless garden snake!"
"I should ask my mother to come and see!"
"I should run away again!"
"I should try to catch it!"`
          },
          {
            qText: `What is the main message of the poem?`,
            options: `  Some snakes are harmless and beneficial to the environment
All snakes should be kept as pets
All snakes are dangerous and should be avoided
Snakes are scary and should be killed`
          }
        ]
      }
    },
    {
      id: 'meadow',
      type: 'passage',
      label: 'Meadow Surprises',
      data: {
        title: 'Meadow Surprises',
        type: 'poem',
        author: 'Lois Brandt Philips',
        text: `Meadows have surprises,
You can find them if you look;
Walk softly through the velvet grass,
And listen by the brook.

You may see a butterfly
Rest upon a buttercup
And unfold its drinking straws
To sip the nectar up.

You may scare a rabbit
Who is sitting very still;
Though at first you may not see him,
When he hops you will.

A dandelion whose fuzzy head
Was golden days ago
Has turned to airy parachutes
That flutter when you blow.

Explore the meadow houses,
The burrows in the ground,
A nest beneath tall grasses,
The ant's amazing mound.

Oh! Meadows have surprises
And many things to tell;
You may discover these yourself,
If you look and listen well.`
      }
    },
    {
      label: 'Multiple Choice Questions',
      type: 'mcq',
      id: 'mcq-meadow',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: `What can you find if you look in meadows?`,
            options: `Surprises
Dangerous animals
Ugly plants
Nothing, they are empty fields`
          },
          {
            qText: `What should you do when walking through meadows?`,
            options: `Walk softly and listen by the brook
Run as fast as you can through the meadow
Ignore everything around you`
          },
          {
            qText: `What might you see a butterfly doing in the meadow?`,
            options: ` Resting on a buttercup and drinking nectar
Attacking other insects
Hiding in the grass`
          },
          {
            qText: `What happens to a dandelion's fuzzy head over time?`,
            options: ` It turns into airy parachutes that flutter when blown
It turns into a golden flower
It becomes hard and spiky`
          },
          {
            qText: `What is the main message of the poem?`,
            options: `If you look and listen well, meadows have many surprises to discover
Meadows are boring and should be avoided
Meadows are dangerous places to explore`
          }
        ]
      }
    },
    {
      id: 'speech',
      type: 'passage',
      label: 'The Parts of Speech',
      data: {
        title: 'The Parts of Speech',
        type: 'poem',
        text: `Every name is called a noun,
As field and fountain, street and town,

In place of noun the pronoun stands,
As he and she can clap their hands.

The adjective describes a thing,
As magic wand or bridal ring.

The verb means action, something done,
To read and write, to jump and run.

How things are done the adverbs tell,
As quickly, slowly, badly, well.

The preposition shows relation,
As in the street or at the station.

Conjunctions join, in many ways,
Sentences, words, or phrase and phrase.

The interjection cries out, “Hark !
I need an exclamation mark!

Through poetry, we learn how each
of these make up THE PARTS OF SPEECH.`
      }
    },
    {
      label: 'Multiple Choice Questions',
      type: 'mcq',
      id: 'mcq-chivvy',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: `What is a noun?`,
            options: `A word that names a person, place, or thing
An action word
A word that describes a thing
A word that shows how something is done`
          },
          {
            qText: `What is a pronoun?`,
            options: `A word that stands in place of a noun
A word that shows a relationship between things
A word that describes a thing
A word that shows how something is done`
          },
          {
            qText: `What is an adjective?`,
            options: `A word that describes a thing
A word that stands in place of a noun
A word that shows a relationship between things`
          },
          {
            qText: `What is a verb?`,
            options: `A word that shows how something is done
A word that stands in place of a noun
A word that shows a relationship between things`
          },
          {
            qText: `What is an adverb?`,
            options: `A word that shows how something is done
A word that stands in place of a noun
A word that shows a relationship between things`
          }
        ]
      }
    },
    {
      id: 'listeners',
      type: 'passage',
      label: 'The Listeners',
      data: {
        title: 'The Listeners',
        type: 'poem',
        author: 'Walter De La Mare',
        text: `'Is there anybody there?' said the Traveller,
Knocking on the moonlit door;
And his horse in the silence champed the grasses
Of the forest's ferny floor.

And a bird flew up out of the turret,
Above the Traveller's head:
And he smote upon the door again a second time;
'Is there anybody there?' he said.

But no one descended to the Traveller;
No head from the leaf-fringed sill
Leaned over and looked into his grey eyes,
Where he stood perplexed and still.

But only a host of phantom listeners
That dwelt in the lone house then
Stood listening in the quiet of the moonlight
To that voice from the world of men.

Stood thronging the faint moonbeams on the dark stair,
That goes down to the empty hall,
Hearkening in an air stirred and shaken
By the lonely Traveller's call.

And he felt in his heart their strangeness,
Their stillness answering his cry,
While his horse moved, cropping the dark turf,
'Neath the starred and leafy sky;

For he suddenly smote on the door, even
Louder, and lifted his head:—
'Tell them I came, and no one answered,
That I kept my word,' he said.

Never the least stir made the listeners,
Though every word he spake
Fell echoing through the shadowiness of the still house
From the one man left awake.

Ay, they heard his foot upon the stirrup,
And the sound of iron on stone,
And how the silence surged softly backward,
When the plunging hoofs were gone.`
      }
    },
    {
      label: 'Multiple Choice Questions',
      type: 'mcq',
      id: 'mcq-listener',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: `What does the Traveller do in the poem?`,
            options: `He knocks on a door
He rides his horse through a forest
He sings a song to the moon`
          },
          {
            qText: `What does the Traveller say when he knocks on the door the second time?`,
            options: `"Is there anybody there?"
"Let me in!"
"I'm lost and need help!"`
          },
          {
            qText: `Who or what answers the Traveller's call?`,
            options: `Phantom listeners who dwell in the lone house
A person from inside the house
A bird that flies out of the turret`
          },
          {
            qText: `How do the phantom listeners react to the Traveller's call?`,
            options: `They listen silently from inside the house
They come out to greet him
They ignore him completely`
          },
          {
            qText: `What does the Traveller ask the listeners to do?`,
            options: ` Tell someone he came by
Come outside and talk to him
Let him in the house`
          }
        ]
      }
    },
    {
      id: 'chivalry',
      type: 'passage',
      label: `The Age of Chivalry`,
      data: {
        title: `The Age of Chivalry`,
        type: 'poem',
        author: 'George Krokos',
        text: `Back in the days of old
when knights were bold
who with a sword or lance
in armour sought romance.

It was the age of chivalry
long ago in man's history
when to fight for a righteous cause
one did gain considerable applause.

It was mainly for show, love and glory
they deemed themselves being worthy
to capture the heart of some fair maiden
which was the most desired prize laden.

Oh, they would strike heavy blows
on all of their opponents and foes
in a one to one combat defying death
as crowds watched with abated breath.

Yes, it was far back in those days of yore
that courage and strength came to the fore
where there was this life and death struggle;
such issues at hand the knights would juggle.

And in fighting for their country, faith and king
noble impressions on people's minds would ring
that even through the ages are held in high esteem
those knights in shinning armour do now all seem.

There are many legends based on their heroic exploits
a legacy of tales which have been told with much adroit
highlighting aspects of human wisdom related to virtue and vice
and the lessons to be learnt are those of goodness and sacrifice.

History usually repeats itself time and again
as it often happens a situation comes when
we're asked to do something for a just cause
and acting with chivalry we shouldn't pause.`
      }
    },
    {
      label: 'Multiple Choice Questions',
      type: 'mcq',
      id: 'mcq-chivalry',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: `In what time period did knights live?`,
            options: `Midieval era, Modern era, Victorian era`
          },
          {
            qText: `What was the age of chivalry?`,
            options: `The Middle Ages, The 18th Century, The Victorian era`
          },
          {
            qText: `What was the most desired prize for knights?`,
            options: ` Capturing a fair maiden's heart
Wealth and riches
Fame and glory`
          },
          {
            qText: `What were knights known for doing in combat?`,
            options: `Striking heavy blows on their opponents and foes
Refusing to engage in combat
Using deceitful tactics to win`
          },
          {
            qText: `What is the legacy of the knights in shining armor?`,
            options: `Stories of their heroic exploits and noble impressions
A reputation for cruelty and barbarism
Their technological innovations and advancements`
          }
        ]
      }
    },
    {
      id: 'sea',
      type: 'passage',
      label: 'Sea Fever',
      data: {
        title: 'Sea Fever',
        type: 'poem',
        author: 'John Masefield',
        text: `I must go down to the seas again, to the lonely sea and the sky,
And all I ask is a tall ship and a star to steer her by;
And the wheel's kick and the wind's song and the white sail's shaking,
And a grey mist on the sea's face, and a grey dawn breaking,
I must go down to the seas again, for the call of the running tide
Is a wild call and a clear call that may not be denied;
And all I ask is a windy day with the white clouds flying,
And the flung spray and the blown spume, and the sea-gulls crying.
I must go down to the seas again, to the vagrant gypsy life,
To the gull's way and the whale's way where the wind's like a whetted knife;
And all I ask is a merry yarn from a laughing fellow-rover,
And quiet sleep and a sweet dream when the long trick's over.`
      }
    },
    {
      label: 'Multiple Choice Questions',
      type: 'mcq',
      id: 'mcq-sea',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: `What does the speaker in the poem desire?`,
            options: `To sail on a tall ship and navigate by the stars
To live a quiet life in a small town
To stay on land and never go to sea`
          },
          {
            qText: `What does the speaker want to experience while at sea?`,
            options: `Stormy weather and high waves
A sense of isolation and loneliness
The company of fellow sailors`
          },
          {
            qText: `What is the "call of the running tide"?`,
            options: `The urge to go to sea and explore
The feeling of being lost or adrift
A warning signal from other ships`
          },
          {
            qText: `What does the speaker want from his fellow sailors?`,
            options: `To hear their stories and laughter
To work together to navigate the ship
To keep the ship clean and tidy`
          },
          {
            qText: `What does the speaker hope for after his journey at sea is over?`,
            options: `To rest and have peaceful dreams
To retire and never leave his home again
To continue sailing and exploring new places`
          }
        ]
      }
    },
    {
      id: 'thing',
      type: 'passage',
      label: 'A Thing of Beauty',
      data: {
        title: 'A Thing of Beauty',
        type: 'poem',
        author: 'John Keats ',
        text: `A thing of beauty is a joy forever
Its loveliness increases, it will never
Pass into nothingness; but will keep
A bower quiet for us, and a sleep
Full of sweet dreams, and health, and quiet breathing.

Therefore, on every morrow, are we wreathing
A flowery band to bind us to the earth,
Spite of despondence, of the inhuman dearth
Of noble natures, of the gloomy days,
Of all the unhealthy and o'er-darkened ways
Made for our searching: yes, in spite of all,
Some shape of beauty moves away the pall
From our dark spirits. Such the sun, the moon,
Trees old, and young, sprouting a shady boon
For simple sheep; and such are daffodils
With the green world they live in; and clear rills
That for themselves a cooling covert make
'Gainst the hot season; the mid forest brake,
Rich with a sprinkling of fair musk-rose blooms;
And such too is the grandeur of the dooms
We have imagined for the mighty dead;
All lovely tales that we have heard or read;
An endless fountain of immortal drink,
Pouring unto us from the heaven's brink.
`
      }
    },
    {
      label: 'Multiple Choice Questions',
      type: 'mcq',
      id: 'mcq-thing',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: `According to the poem, what is a thing of beauty?`,
            options: `A lasting source of joy
A fleeting joy
A source of sorrow`
          },
          {
            qText: `What does the beauty referred to in the poem provide us with?`,
            options: `Sweet dreams, A place to rest, Good health, *All of the above`
          },
          {
            qText: `What do we do every day, according to the poem?`,
            options: `*Create a wreath of flowers
Praise the beauty of nature
None of the above`
          },
          {
            qText: `What does the beauty in the world do for us, according to the poem?`,
            options: ` It makes our spirits lighter
It provides us with endless pleasure
It causes us to despair`
          },
          {
            qText: `What are some examples of the beauty referred to in the poem?`,
            options: `The sun, the moon, and trees
Daffodils and clear rills
Fair musk-rose blooms and grand tales
*All of the above`
          }
        ]
      }
    },
    {
      id: 'road',
      type: 'passage',
      label: 'The Road Not Taken',
      data: {
        title: 'The Road Not Taken',
        type: 'poem',
        text: `Two roads diverged in a yellow wood,
And sorry I could not travel both
And be one traveller, long I stood
And looked down one as far as I could
To where it bent in the undergrowth;

Then took the other, just as fair,
And having perhaps the better claim,
Because it was grassy and wanted wear;
Though as for that the passing there
Had worn them really about the same.

And both that morning equally lay
In leaves no step had trodden black.
Oh, I kept the first for another day!
Yet knowing how way leads on to way,
I doubted if I should ever come back.

I shall be telling this with a sigh
Somewhere ages and ages hence;
Two roads diverged in a wood, and I —
I took the one less travelled by,
And that has made all the difference`
      }
    },
    {
      label: 'Multiple Choice Questions',
      type: 'mcq',
      id: 'mcq-road',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: `What is the poem about?`,
            options: `A decision between two roads
A journey through a grassy field
A dream of a distant place`
          },
          {
            qText: `Why did the speaker choose the second road?`,
            options: ` It was less traveled than the first road
The speaker had walked on it before
It was easier to walk on
It was more scenic than the first road`
          },
          {
            qText: `What does the speaker mean by "I doubted if I should ever come back"?`,
            options: `The speaker regretted not choosing the other road
The speaker was afraid of what lay ahead on the chosen road
The speaker thought the road might lead to a dead end`
          },
          {
            qText: `How does the speaker feel about the choice they made?`,
            options: `They are proud of it
They are content with it
They regret it
They are unsure if it was the right ones`
          },
          {
            qText: `What is the message of the poem?`,
            options: ` Sometimes it's better to take the road less traveled
Always choose the road that looks easiest
It's important to always follow a map
Two roads are always better than one`
          }
        ]
      }
    }
  ]
};
