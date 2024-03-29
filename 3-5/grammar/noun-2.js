export default {
  label: 'Proper and Common Noun',
  id: 'noun-2',
  list: [
    {
      type: 'selectWord',
      label: 'Select Proper Noun',
      id: 'select-proper',
      lockAfter: 2,
      commonData: {
        title: 'Select the proper noun in the below sentence.',
        printTitle: 'Underline the proper noun in the below sentences.'
      },
      data: [
        `*Siva* is a farmer.
I am living in *Chennai.*
*Delhi* is very hot in summer.
*Devi* is studying.
We order food from *Swiggy.*
My mummy is doing online shopping on *Amazon.*
I know how to cook *Maggi.*
*Newton* was a great scientist.
We went to *Ooty* for vacation.
*Microsoft* is a famous software company.`,

        `*Jim* is a doctor.
*Mt. Everest* is the tallest peak in the world.
*Earth* is a planet.
*Google* is a search engine.
A boy threw a ball at *Wilson.*
Her friend is *Daniel.*
I am lucky to have *John* as a friend.
*India* is a democratic country.
The *Pacific Ocean* is the largest ocean on earth.
*Ganga* is a holy river.`,

        `*Anu* begins to sing.
*Ram* is a clever boy.
*English* is easy to learn.
Do you know what *John's* hobby is?
*Lina* has a collection of feathers of different birds.
The first month of the year is *January.*
*Roopa* is an engineer.
Shall we meet *Priya* at her home?
I live in *Canada.*
*Ramya* is playing with her pet.`,

        `*Gopal* is my cousin.
His uncle lives in *France.*
These paintings are done by *Usha.*
The carpenter went to *Mark's* house.
She got chocolates from the *United States.*
My favorite cartoon is *Shin Chan.*
I was born in *April.*
*Geetha* is happy with her birthday presents. 
*John* is a horse rider.
*Peter* won the running race.`,

        `The *Sun* is round in shape. 
My mom ordered the laptop from *Amazon.*
Cards are shuffled by *Tina.*
*Alladin* went into the cave to find the hidden treasure.
The guide received me and *Jack* and showed us around the city.
Our neighbor's dog was barking all night. But its name is *Peace.*
The most famous play writer in the world is *William Shakespaere.*
*Mahabharata* is considered the largest epic book. 
*Sita* is a great dancer.`
      ]
    },
    {
      type: 'selectWord',
      label: 'Select Common Noun',
      id: 'select-common',
      lockAfter: 1,
      commonData: {
        title: 'Select the common noun in the below sentence.'
      },
      data: [
        `She is watching *TV.*
He is my *brother.*
His *father* is cooking.
They are playing in the *garden.*
The *car* is moving fast.
We saw *birds* flying.
He is eating *ice-cream.*
I like to play *football.*
We have no *homework* today.
She goes to the *market.*`,

        `I am working in the *garden*.
We must eat plenty of *vegetables*.
Akbar told me the entire *story*.
I live in a small *town*.
Let's go to the *movies*.
I will sleep in my *bed*.
These *flowers* are beautiful.
Which is your *country*?
Do you have a *pen?*
Joe is her *cousin*.`,

        `I am a *student.*
The *classroom* is noisy.
We all are *friends.*
It is an empty *room.* 
I like to wear purple color *dress.*
This *watch* belongs to Tom.
*Dogs* like to go for a walk.
All the *bananas* are eaten.
George is a clever *boy.*
They are playing on the *ground.*`,

        `Our new *neighbors* are very friendly.
I like to play *games.*
Jina has posted a *letter.*
These *pictures* are beautifully drawn.
*Birds* are flying so high.
My *brother* delivered the best speech.
Please come to visit my *home.*
Tom is craving *meat.*
Peter went to a *store* to buy some things.
Please pass me a *book*. I am getting bored.`,

        `How many *chocolates* did you buy?
Jimmy had broken his *leg.*
Anu is playing near the *sea.*
*Policemen* are working so hard.
Drink a lot of *water* during summer.
*Playground* was empty during exams.
Sometimes this *computer* doesn't work.
I like to play with my *friends.*
Jacob is taking a *plane* to California.
This *street* is well paved for walking.`,

        `*Judges* should not be biased.
*Magicians* could make things disappear.
*Planets* are revolving around the Sun.
I like to walk along the banks of the *river.*
Tom was given the responsibility to welcome the *guests.*
Let's go to the *museum* next week.
Some *artists* take lots of time to draw.
I want to change my *school.*
*Doormats* should be washed regularly.
Which *country* do you belong to?`,

        `Putta and Putti are *twins*.
Where is your *notebook*, Rameez?
The *dam* was built on the banks of the Kaveri.
I have named my *cat* Jerry.
Both my *parents* were born in March.`
      ]
    },
    // old
    {
      label: 'Same Basket',
      type: 'matchByDragDrop',
      id: 'same-basket-drag',
      lockAfter: 1,
      commonData: {
        title:
          'Drag and drop words, so that nouns of the same group are together.',
        fontSize: '1.5rem',
        dashWidth: 70
      },
      data: [
        `week, month, *year*
India, America, *England*
night, evening, *day*
Google, Apple, *Samsung*
school, office, *hospital*`,

        `black, purple, *red*
Whatsapp, Instagram, *Facebook*
state, city, *country*
London, Delhi, *Paris*
company, office, *business*`,

        `problem, solution, *question*
Earth, Mars, *Jupiter*
kitchen, room, *hall*
pasta, burger, *pizza*
shake, cold drink, *juice*`,

        `story, poem, *novel*
Ram, Sita, *Laxman*
chapati, pulses, *rice*
Asia, Europe, *Africa*
point, line, *square*`,

        `forward, backward, *upward*
mobile, laptop, *computer*
glass, bottle, *jug*
eyes, ears, *nose*
book, notebook, *magzine*`,

        `sun, moon, *stars*
airplane, rocket, *satellite*
sky, blue, *clouds*
hen, bird, *egg*
birds, feathers, *wings*`,

        `clock, watch, *time*
bottle, hug, *water*
schoolbag, shelf, *books*
morning, sunrise, *chirping*
hot, cold, *warm*`,

        `minutes, hours, *seconds*
pencil, eraser, *sharpener*
soap, paste, *brush*
tomato, carrot, *radish*
cashew nuts, almonds, *peanuts*`,

        `rikshaw, tricycle, *auto*
notepad, notebook, *diary*
black, white, *grey*
doctor, nurse, *hospital*
temple, prayer, *priest*`,

        `tea, coffee, *milk*
afternoon, evening, *morning*
plate, spoon, *bowl*
chalk, duster, *board*
classroom, tables, *chairs*`
      ]
    }
  ]
};
