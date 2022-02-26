export default {
  label: 'Subject Verb Agreement',
  id: 'sentence-4',
  list: [
    {
      label: 'Right match',
      id: 'complete',
      type: 'completePuzzle',
      commonData: {
        type: 'rightOpen',
        title: 'Choose the puzzle piece that completes the sentence.',
        printTitle: 'Fill up with the right option.',
        fontSize: '1rem'
      },
      data: [
        `The boys| like playing| likes playing
I| love to sleep| loves to sleep
You| hate jam| hates jam
They| like chocolates| likes chocolate
Raj| loves milk| love milk
Players| run well| runs well
Weather| appears good| appear good
I| ride a bicycle| rides a bicycle
He| is my father| are my father
They| are nice| is nice`,

        `That lady| looks like my mom| look like my mom
Apples| are good| is good
The players| practice daily | practices daily
The chefs| cook well| cooks well
My grandma| walks in the park| walk in the park
The captain| takes the call| take the call
Do you| like her| likes her
Somebody| has left their book| have left their book
The team| is preparing| are preparing
Each dosa| is tasty| are tasty`,

        `Arush| is not well| are not well
You| are ok| is ok
They| come every day| comes every day
The teacher| teaches well| teach well
Snowfalls| are common in America| is common in America`
      ]
    },
    {
      id: 'match',
      label: 'Match the following',
      type: 'match',
      commonData: {
        title: 'Match the pairs to form correct sentences.'
      },
      data: [
        `The flowers, smell lovely.
My brother, is sleeping.
You, are late.
He, plays well.`,

        `Aliens, have spaceships.
Alien, has a spaceship.
Monitor, is the class head.
Monitors, are class heads.`,

        `The actors, act well.
She, dances well.
They, play well.
The chef, cooks well.`,

        `Doctors, are experts.
Did you, sleep well?
He, likes dancing.
I, am Abhi.`,

        `The cows, give milk.
Cow, gives milk.
Lights, shine bright.
Light, shines bright.`
      ]
    },
    {
      id: 'sort',
      label: 'Order the Sentence',
      type: 'sorting',
      lockAfter: 1,
      commonData: {
        title: 'Rearrange words to form sentence.',
        multiple: true
      },
      data: [
        `we, saw, an, injured, dog, on, the, street
I, love, to, swim, in, the, sea
I, have, three, chocolates, at, home
we, are, building, a kennel, for, our, dog
which, is, the, fifth, month, of, a, year
there, are, forty, students, standing, in, the, queue
we, are, having, bread, and butter, for, breakfast
Simla, is, one, of, the, most, beautiful, places
my mom, gave, me, four, pink, color, pencils
I like, coffee, but, my brother, doesn't, like, it`,

        `the cat, is, sitting, under, the, dining, table
we, will, meet, during, the, lunch, time
we, must, submit, the, assignment, by, Saturday
my friends, came, to, my house, on, my, birthday
the, house, was, very, quiet, at, midnight
please, do, not, write, below, this, line
the crow, dropped, pebbles, into, the, jar
she, received, a gift, from, her, brother
there, is, a big, tree, besides, the river
they, were, hiding, inside, the, wardrobe`,

        `what, is, your, plan, for, the weekend
did, you, complete, the homework, on, time
what, is, the, name, of, your, father
what, is, the, capital, of, your, country
which, is, the, biggest, river, in, India
why, are, you, late, for, the, meeting 
can, you, please, help, me, with, my, homework
at, what, time, do, you, go, to, sleep
what, do you, do, after, completing, your, homework
when, are, you, coming, to, our, house`,

        `Siva, is, sleeping, on, the, bed
I, am, playing, with, my, friends
I, have, not, done, my, homework
I, saw, a, very, beautiful, puppy
English, is, not, my, favorite, subject
Lisa, is, jealous, of, her, sister`,

        `principal, took, the, suggestion, seriously
smart, people, don't, repeat, their, mistakes
we, want, to, visit, the, Taj, Mahal
we, have, a, smartboard, in the, classroom
the, cat, jumped, over, the, fence
I, put, my, clothes, in, an, almirah`
      ]
    },
    {
      label: 'Fill Up',
      type: 'matchByDragDrop',
      id: 'fill-up',
      lockAfter: 1,
      commonData: {
        fontSize: '1rem'
      },
      data: [
        `We were on a road trip to *Kolkata*. On day three, we *crossed* over into Bengal in our *trusted* old car. My *siblings* and I were tired and irritable and my mother was nursing a *headache*. Distracted, my father drove on. We found ourselves in a quaint, *picturesque* village at the *foothills* of a mountain.`,

        `It was a *bright* March morning and the air was *fresh*, laden with the scent of *jasmine*. As we *drove* through, we heard the sound of temple *bells*. The houses on *either* side of the road were old but well cared for. There was not a *soul* in sight.`,

        `Our earth is getting *hotter* day by day. It is caused by the increasing *amount* of carbon dioxide in the air. Carbon Dioxide is produced by *burning* fossil fuels, coal, oil, petroleum, and wood. When we *produce* more Carbon Dioxide and *other* greenhouse gasses, it *accelerates* Global Warming.`
      ]
    }
  ]
};
