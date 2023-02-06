export default {
  label: 'Sentence',
  id: 'sentence',
  list: [
    {
      type: 'sequence',
      label: 'Find the Sentence',
      id: 'find-sentence',
      lockAfter: 1,
      commonData: {
        printTitle: 'Rewrite the words and form proper sentence.'
      },
      data: [
        `we are happy
it is dark
dog is hungry
they are coming
I am a boy
I live in Mumbai
please come in line
we are watching tv
they are playing cricket
I am reading poems`,

        `we have a holiday tomorrow
I am drinking water
the dog is barking
the crow is thirsty
the bird is wounded
people are living happily
I have a beautiful pet
he lives in a big city
honesty is the best policy
I am going to Chennai`,

        `I play tennis
Ram wants to fly
birds are chirping
he was annoyed
the baby is drinking milk
I am sitting on the sofa
the cat is drinking milk
I am thinking about icecream
the sun rises in the east
Ravi is very good in math`,

        `water is freezing
roots absorb water
superheroes are famous
virus causes infection
kitten looks frightened
I am listening to you
she can read
towels are above the table
Rani is afraid of snakes
she fell down again`,

        `please stand opposite to me
clean your nails frequently
show respect to elders
cobblers mend the shoes
keep up the good work
the world is round in shape
birds fly as a flock
I prefer to drink coffee
lions protect their cubs
little girls are singing songs`
      ]
    },
    {
      type: 'sequence',
      label: 'Find the Sentence -2',
      id: 'find-sentence-2',
      lockAfter: 1,
      commonData: {
        printTitle: 'Rewrite the words and form proper sentence.'
      },
      data: [
        `I haven't learned cycling
please look at the mirror
she is searching for her ring
it started raining suddenly
exercise daily to stay healthy
she has a cute smile
purple is a royal color
that was a stormy night
cleaning is an ordinary task
Angel vanished into thin air`,

        `my battery is dead
summer holidays are always special
Kim lost her favorite box
the diagram is really nice
father made a wonderful cake
Priya learned to ride a horse
the video will be recorded
remind him to attend meetings
be attentive in math class
sit comfortably on the chair`,

        `your handwriting is good
friends presented a lovely gift
measure the line using a ruler
maintain silence in the library
he delivered a confident speech
mother's bike cannot be repaired
Ravi was exempted from punishment
pack only the necessary things
the living room is arranged neatly
Lisa speaks proudly of herself`,

        `vehicle is parked near theater
her father is very kind
the road is very narrow
keep the pebbles safe
the President's speech was humorous
students have become notorious 
the poor farmer had little food
diamonds are precious stones
Roy dreamt of a gigantic monster
police investigated the criminals`
      ]
    },
    {
      label: 'Statement vs Order',
      id: 'statement-order',
      type: 'classifySentence',
      lockAfter: 1,
      commonData: {
        title: 'Classify the type of below sentences.',
        types: ['Statement', 'Order']
      },
      data: [
        [
          `I have a pet dog.
It is common to find lizards at home.
This is my favorite book.
I have my own room.
My dad buys me gifts.`,

          `Feed the dog!
Pass me the racket, please.
Play the music.
Go to your bed.
Mom, give me breakfast.`
        ],
        [
          `My best friend is very nice.
My dad is an excellent cook.
I cannot help her.
Priya has a lot of clothes.
We should not talk when the teacher is teaching.`,

          `Behave yourself!
Come in.
Remove your shoes outside.
Shut the door.
Put the phone aside.`
        ],
        [
          `I practice my grammar a lot.
We should complete our homework on time.
It is raining outside.
We are waiting for the bus.
There is a spider in the bathroom.`,

          `Put your finger on your lips.
Shut up!
Put on your sweater.
Stop the car.
Turn off the TV.`
        ]
      ]
    },
    {
      label: 'True or False',
      id: 'true-false',
      type: 'classifySentence',
      lockAfter: 1,
      data: [
        {
          title:
            'True or False: The below sentence is a statement and not a command.',
          types: [
            {
              name: 'True',
              text: `My mom is watching TV.
I will go to the park.
She is a brave girl.`
            },
            {
              name: 'False',
              text: `Are you playing games?
What a pleasant weather!
Stop the car!`
            }
          ]
        },
        {
          title:
            'True or False: The below sentence is a command and not a statement.',
          types: [
            {
              name: 'True',
              text: `Keep it aside.
Stop talking!
Take the dog out for a walk.`
            },
            {
              name: 'False',
              text: `Radha is a good girl.
He has lots of chocolates.
My grandpa loves me a lot.`
            }
          ]
        }
      ]
    }
    //old
  ]
};
