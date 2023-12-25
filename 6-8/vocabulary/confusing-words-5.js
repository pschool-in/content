export default {
  label: 'Confusing Words',
  id: 'confusing-words-5',
  lockAfter: 7,
  list: [
    {
      id: 'reading',
      type: 'passage',
      label: 'Reading',
      data: {
        title: 'Confusing Words',
        text: [
          `# aisle vs isle`,
          {
            type: 'html',
            text: `<b>aisle</b> - space between rows <br>
<b>isle</b> - island`
          },
          `# already vs all ready`,
          {
            type: 'html',
            text: `<b>already</b> - by this time <br>
<b>all ready</b> - fully prepared`
          },
          `# altar vs alter`,
          {
            type: 'html',
            text: `<b>altar</b> - sacred platform or place <br>
<b>alter</b> - to change`
          },
          `# canvas vs canvass`,
          {
            type: 'html',
            text: `<b>canvas</b> - heavy cloth <br>
<b>canvass</b> - to take a survey; a survey`
          },
          `# council vs counsel`,
          {
            type: 'html',
            text: `<b>council</b> - governing body <br>
<b>counsel</b> - advice; to give advice`
          },
          `# dairy vs diary`,
          {
            type: 'html',
            text: `<b>dairy</b> -  milk products; place where milk products are processed <br>
<b>diary</b> - personal journal`
          },
          `# discreet vs discrete`,
          {
            type: 'html',
            text: `<b>discreet</b> - modest, prudent behavior <br>
<b>discrete</b> - a separate thing, distinct`
          },
          `# dew vs due`,
          {
            type: 'html',
            text: `<b>dew</b> - water droplets condensed from air <br>
<b>due</b> - as a result of`
          },
          `# farther vs further`,
          {
            type: 'html',
            text: `<b>farther</b> - at a greater (measurable) distance <br>
<b>further</b> - in greater (non-measurable) depth`
          },
          `# heard vs herd`,
          {
            type: 'html',
            text: `<b>heard</b> - past tense of "to hear" <br>
<b>herd</b> - group of animals`
          }
        ]
      }
    },
    {
      id: 'aisle-isle',
      label: 'aisle vs isle',
      type: 'fillup',
      data: {
        title: 'Fill in the blanks with either "aisle" or "isle."',
        printTitle: 'aisle vs isle',
        text: `I walked down the grocery store *aisle* to find the cereal.
The tropical *isle* was known for its beautiful beaches.
Please make way for others in the narrow *aisle* of the airplane.
The cruise ship docked at a picturesque *isle* in the Caribbean.
She walked down the *aisle* in a beautiful wedding gown.
The small, uninhabited *isle* was a heaven for wildlife.
The flight attendant pushed the cart down the narrow airplane *aisle*.
The medieval castle was located on a remote *isle* in the middle of the lake.
I'll meet you in the bookstore's fiction *aisle*.
The sailor dreamed of discovering a hidden treasure on a deserted *isle*.`,
        options: 'aisle, isle'
      }
    },
    {
      id: 'already-all-ready',
      label: 'already vs all ready',
      type: 'fillup',
      data: {
        title: 'Fill in the blanks with either "already" or "all ready."',
        printTitle: 'already vs all ready',
        text: `I have *already* finished my homework.
Are you *all ready* for the presentation?
The guests are *already* arriving for the party.
We are *all ready* to leave for the trip.
She's *already* left for the airport.
The movie has *already* started; we're late!
We are *all ready* to face any challenges.
He has *already* booked his flight for the vacation.
Make sure you are *all ready* before the event begins.`,
        options: 'already, all ready'
      }
    },
    {
      id: 'altar-alter',
      label: 'altar vs alter',
      type: 'fillup',
      data: {
        title: 'Fill in the blanks with either "altar" or "alter."',
        printTitle: 'altar vs alter',
        text: `The couple exchanged vows at the wedding *altar*.
She wanted to *alter* the design of her dress before the big day.
The church has a beautiful *altar* adorned with flowers.
Please do not *alter* the original document.
The ceremony took place at the sacred *altar*.
The architect decided to *alter* the building plans.
They offered prayers at the church *altar*.
It's essential not to *alter* the experiment conditions.
The priest stood at the *altar* during the service.
Can you *alter* the recipe to make it healthier?`,
        options: 'altar, alter'
      }
    },
    {
      id: 'canvas-canvass',
      label: 'canvas vs canvass',
      type: 'fillup',
      data: {
        title: 'Fill in the blanks with either "canvas" or "canvass."',
        printTitle: 'canvas vs canvass',
        text: `The artist painted a beautiful landscape on a large *canvas*.
Before the election, the politician decided to *canvass* the neighborhood for support.
The *canvas* stretched tightly across the wooden frame is ready for painting.
Volunteers will *canvass* the area to gather opinions on the proposed changes.
She bought a new *canvas* for her art studio.
The political candidate spent the day *canvassing (canvasing)* the district to meet voters.
The sail was made of durable *canvas* material.
The marketing team decided to *canvass* the market to understand customer preferences.
The museum displayed an impressive collection of ancient *canvases (canvasses)*.
The charity organization plans to *canvass* the community for donations.`,
        options: 'canvas, canvass'
      }
    },
    {
      id: 'council-counsel',
      label: 'council vs counsel',
      type: 'fillup',
      data: {
        title: 'Fill in the blanks with either "council" or "counsel."',
        printTitle: 'council vs counsel',
        text: `The city *council* decided to build a new park in the neighborhood.
She sought legal *counsel* before signing the contract.
The local *council* members discussed the proposed changes to the community center.
The lawyer provided valuable *counsel* to his client during the trial.
The school *council* voted on the new curriculum.
It's important to seek professional *counsel* when dealing with legal matters.
The town *council* will meet next week to address citizen concerns.
The CEO always seeks the *counsel* of the board before making major decisions.
The environmental *council* works to promote sustainable practices in the city.
After receiving *counsel* from her mentor, she felt more confident in her decision.`,
        options: 'council, counsel'
      }
    },
    {
      id: 'dairy-diary',
      label: 'dairy vs diary',
      type: 'fillup',
      data: {
        title: 'Fill in the blanks with either "dairy" or "diary."',
        printTitle: 'dairy vs diary',
        text: `I'm going to buy some milk at the local *dairy*.
She keeps a daily record of her thoughts in her *diary*.
The doctor suggested cutting down on *dairy* products for better health.
Every night, before bed, she writes in her *diary*.
He works on a *dairy* farm, taking care of cows.
Make sure to pick up some cheese from the *dairy* section.
My grandmother's *diary* is full of interesting stories from her youth.
We need to buy more *dairy* for the week.
She forgot her *diary* at home and couldn't jot down her ideas.
The store sells a variety of fresh *dairy* products.`,
        options: 'dairy, diary'
      }
    },
    {
      id: 'discreet-discrete',
      label: 'discreet vs discrete',
      type: 'fillup',
      data: {
        title: 'Fill in the blanks with either "discreet" or "discrete."',
        printTitle: 'discreet vs discrete',
        text: `He chose to be *discreet* about his plans to surprise her.
The math problem required working with *discrete* numbers.
Always be *discreet* when handling sensitive information.
The different sections of the experiment were treated as *discrete* units.
She received a *discreet* warning before the meeting.
In digital communication, information is often transmitted in *discrete* packets.
Please be *discreet* about the confidential details.
The novel is divided into *discrete* chapters.
They communicated through *discreet* gestures during the negotiation.
The data was collected at *discrete* time intervals.`,
        options: 'discreet, discrete'
      }
    },
    {
      id: 'dew-due',
      label: 'dew vs due',
      type: 'fillup',
      data: {
        title: 'Fill in the blanks with either "dew" or "due."',
        printTitle: 'dew vs due',
        text: `The morning *dew* glistened on the grass.
Your report is *due* by the end of the week.
The flowers were covered in early morning *dew*.
The project deadline is *due* next Monday.
Be cautious when driving in the morning to avoid the thick *dew* on the roads.
The rent payment is *due* on the first of each month.
The spider's web was adorned with tiny drops of *dew*.
The results of the exam will be announced by evening *due* to the delay.
Early risers get to witness the beauty of nature covered in morning *dew*.
The library books are *due* for return on Friday.`,
        options: 'dew, due'
      }
    },
    {
      id: 'farther-further',
      label: 'farther vs further',
      type: 'fillup',
      data: {
        title: 'Fill in the blanks with either "farther" or "further."',
        printTitle: 'farther vs further',
        text: `The store is located *farther* down the street.
I need to research the topic *further* before making a decision.
Can you throw the ball *farther* this time?
We need to discuss this matter *further* in the meeting.
The campsite is just a little bit *farther* from here.
I will provide you with *further* instructions on the project.
She wants to run *farther* than she did yesterday.
Let's not dwell on this issue *further* for now.
The summit is much *farther* than it seems.
We will need to investigate *further* to find the cause.`,
        options: 'farther, further'
      }
    },
    {
      id: 'heard-herd',
      label: 'heard vs herd',
      type: 'fillup',
      data: {
        title: 'Fill in the blanks with either "heard" or "herd."',
        printTitle: 'heard vs herd',
        text: `I *heard* a beautiful melody on the radio yesterday.
The shepherd led his *herd* of sheep to the grazing field.
Have you ever *heard* the sound of crashing waves at the beach?
The rancher managed a large *herd* of cattle.
I haven't *heard* from Sarah in a while; I hope she's doing well.
The teacher *heard* the students discussing the upcoming exam.
A *herd* of elephants passed through the jungle.
She *heard* a strange noise coming from the attic.
The wildlife documentary featured a *herd* of wildebeests on the African savannah.
I couldn't believe what I *heard* on the news.`,
        options: 'heard, herd'
      }
    }
  ]
};
