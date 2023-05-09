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
            options: ` he went the other way
he chased them
he followed them`
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
    }
  ]
};
