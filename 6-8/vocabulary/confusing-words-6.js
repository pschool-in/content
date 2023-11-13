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
          `# allude vs elude`,
          {
            type: 'html',
            text: `<b>allude</b> - to make indirect reference to <br>
<b>elude</b> - to avoid`
          },
          `# allusion vs illusion`,
          {
            type: 'html',
            text: `<b>allusion</b> - indirect reference <br>
<b>illusion</b> - false idea, misleading appearance`
          },
          `# conscience vs conscious`,
          {
            type: 'html',
            text: `<b>conscience</b> - sense of morality <br>
<b>conscious</b> - awake, aware`
          },
          `# elicit vs illicit`,
          {
            type: 'html',
            text: `<b>elicit</b> - to draw out <br>
<b>illicit</b> - illegal, forbidden`
          },
          `# miner vs minor`,
          {
            type: 'html',
            text: `<b>miner</b> - a worker in a mine <br>
<b>minor</b> - underage person; less important`
          },
          `# patience vs patients`,
          {
            type: 'html',
            text: `<b>patience</b> - putting up with annoyances <br>
<b>patients</b> - people under medical care`
          },
          `# peace vs piece`,
          {
            type: 'html',
            text: `<b>peace</b> - absence of war <br>
<b>piece</b> - part of a whole`
          },
          `# pedal vs peddle`,
          {
            type: 'html',
            text: `<b>pedal</b> - the foot lever of a bicycle or car <br>
<b>peddle</b> - to sell`
          },
          `# precede vs proceed`,
          {
            type: 'html',
            text: `<b>precede</b> - to come before <br>
<b>proceed</b> - to continue`
          },
          `# quiet vs quite`,
          {
            type: 'html',
            text: `<b>quiet</b> - silent, calm <br>
<b>quite</b> - very`
          }
        ]
      }
    },
    {
      id: 'allude-elude',
      label: 'allude vs elude',
      type: 'fillup',
      data: {
        title: "Fill in the blanks with either 'allude' or 'elude.'",
        printTitle: 'allude vs elude',
        text: `The speaker didn't directly *allude* to the controversial topic.
The suspect managed to *elude* the police by escaping through a back alley.
She likes to *allude* to classic literature in her conversations.
The clever criminal was able to *elude* capture for months.
The professor would often *allude* to historical events during lectures.
The solution to the puzzle seemed to *elude* us for hours.
He subtly *alluded (elluded)* to the upcoming changes in the company.
The elusive cat managed to *elude* the efforts of the animal control officers.
The author would frequently *allude* to mythology in her novels.
Despite their best efforts, the details of the conspiracy continued to *elude* the investigators.`,
        options: 'allude, elude'
      }
    },
    {
      id: 'allusion-illusion',
      label: 'allusion vs illusion',
      type: 'fillup',
      data: {
        title: 'Fill in the blanks with either "allusion" or "illusion".',
        printTitle: 'allusion vs illusion',
        text: `His speech contained a subtle *allusion* to historical events.
The magician created the *illusion* of making a rabbit disappear.
The novel contains an *allusion* to Shakespeare's famous play.
The artist's painting gives the *illusion* of three-dimensional space.
In her poem, she made a clever *allusion* to Greek mythology.
The mirror creates the *illusion* of a larger room.
The movie director made a subtle *allusion* to classic cinema in the film.
The optical illusion made it seem like the building was leaning.
The stage lighting was designed to create a dramatic *illusion*.`,
        options: 'allusion, illusion'
      }
    },
    {
      id: 'conscience-conscious',
      label: 'conscience vs conscious',
      type: 'fillup',
      data: {
        title: "Fill in the blanks with either 'conscience' or 'conscious.'",
        printTitle: 'conscience vs conscious',
        text: `She couldn't live with the guilt; her *conscience* bothered her.
Are you *conscious* of the impact your actions may have on others?
The decision weighed heavily on his *conscience*.
Even in his sleep, he was *conscious* of the noise around him.
It's important to listen to your inner *conscience* when making decisions.
She remained *conscious* of her surroundings during the meditation.
His *conscience* wouldn't allow him to ignore the ethical dilemma.
After the accident, he was barely *conscious* but still aware of his surroundings.
The thief seemed to have no *conscience* as he stole from the charity.
Are you *conscious* of the consequences of your choices?`,
        options: 'conscience, conscious'
      }
    },
    {
      id: 'elicit-illicit',
      label: 'elicit vs illicit',
      type: 'fillup',
      data: {
        title: 'Fill in the blanks with either "elicit" or "illicit."',
        printTitle: 'elicit vs illicit',
        text: `The detective tried to *elicit* information from the witness.
Selling drugs is considered an *illicit* activity.
His question was designed to *elicit* a response from the audience.
Engaging in *illicit* activities can lead to legal consequences.
The artist hoped his work would *elicit* strong emotions from viewers.
The police conducted a raid to crack down on *illicit* activities.
The teacher used a variety of techniques to *elicit* thoughtful responses from students.
The company was involved in *illicit* dealings and faced legal action.
The journalist's goal was to *elicit* the truth from the interviewee.
*Illicit (Elicit)* substances are prohibited by law.`,
        options: 'elicit, illicit'
      }
    },
    {
      id: 'miner-minor',
      label: 'miner vs minor',
      type: 'fillup',
      data: {
        title: "Fill in the blanks with either 'miner' or 'minor.'",
        printTitle: 'miner vs minor',
        text: `The coal *miner* worked in the underground mines for years.
He is studying to become a geology *minor* in college.
The gold *miner* discovered a valuable nugget in the river.
Being caught in a *minor* traffic jam made her late for the meeting.
The silver *miner* used specialized equipment to extract ore.
The store clerk informed the customer about the *minor* defect in the product.
The copper *miner* wore a helmet with a headlamp.
She decided to pursue a *minor* in economics alongside her major.
The lead *miner* extracted ore from the mountainous region.
The repair was a *minor* task and didn't take long.`,
        options: 'miner, minor'
      }
    },
    {
      id: 'patience-patients',
      label: 'patience vs patients',
      type: 'fillup',
      data: {
        title: 'Fill in the blanks with either "patience" or "patients."',
        printTitle: 'patience vs patients',
        text: `The doctor has many *patients* waiting in the lobby.
You need a lot of *patience* when dealing with young children.
The nurse attends to the needs of the *patients* on the hospital floor.
It requires great *patience* to learn a new skill.
The dentist is known for treating his *patients* with care.
Waiting for the results can test anyone's *patience*.
The doctor reminded the *patients* to follow their prescribed medications.
Showing kindness and *patience* is crucial in customer service.
The hospital has a separate ward for critical *patients*.
I admire your *patience* in teaching the same concept repeatedly.`,
        options: 'patience, patients'
      }
    },
    {
      id: 'peace-piece',
      label: 'peace vs piece',
      type: 'fillup',
      data: {
        title: "Fill in the blanks with either 'peace' or 'piece'.",
        printTitle: 'peace vs piece',
        text: `After the conflict, the two nations finally signed a treaty to bring about lasting *peace*.
Can you please pass me a *piece* of that delicious cake?
The protestors gathered in the square, chanting slogans for *peace*.
She carefully assembled the puzzle, fitting each *piece* into its place.
The dove is a symbol of *peace* and harmony.
He tore off a *piece* of paper to jot down a quick note.
We all hope for a world where people can live in *peace*.
She broke the chocolate bar and shared a *piece* with her friend.
The meditation session helped him find inner *peace*.
I couldn't find the missing *piece* of the jigsaw puzzle.`,
        options: 'peace, piece'
      }
    },
    {
      id: 'pedal-peddle',
      label: 'pedal vs peddle',
      type: 'fillup',
      data: {
        title: 'Fill in the blanks with either "pedal" or "peddle."',
        printTitle: 'pedal vs peddle',
        text: `He pressed the bicycle *pedal* with all his strength.
The street performer likes to *peddle* his handmade crafts.
Use your right foot to press the gas *pedal* gently.
The salesman tried to *peddle* his merchandise to the passing tourists.
She learned how to ride a bike without training *pedals*.
The musician used a foot *pedal* to control the guitar's sound.
It's important to have good brakes and a functioning gas *pedal* in a car.
The street vendor tried to *peddle* his wares in the busy market.
Please check the *pedals* on the piano; one seems to be stuck.
He decided to *peddle* his old bicycle to make some extra money.`,
        options: 'pedal, peddle'
      }
    },
    {
      id: 'precede-proceed',
      label: 'precede vs proceed',
      type: 'fillup',
      data: {
        title: "Fill in the blanks with either 'precede' or 'proceed'.",
        printTitle: 'precede vs proceed',
        text: `The opening remarks will *precede* the main presentation.
Please wait for the signal before you *proceed* with your speech.
A brief introduction will *precede* the performance.
After the announcement, we can *proceed* to the next agenda item.
The instructions will *precede* the start of the experiment.
Ensure that all safety checks are complete before you *proceed* with the test.
Basic training will *precede* the advanced course.
The committee will *proceed* with the vote after the discussion.
A warning will *precede* any major changes to the software.
Before you *proceed* with the transaction, please review the terms.`,
        options: 'precede, proceed'
      }
    },
    {
      id: 'quiet-quite',
      label: 'quiet vs quite',
      type: 'fillup',
      data: {
        title: "Fill in the blanks with either 'quiet' or 'quite.'",
        printTitle: 'quiet vs quite',
        text: `The library is always so *quiet* during exams.
I'm *quite* sure I left my keys on the kitchen counter.
Please try to keep the noise level *quiet* in the classroom.
The movie was *quite* entertaining; I enjoyed it a lot.
The forest becomes incredibly *quiet* at night.
She was *quite* surprised by the unexpected gift.
We need to find a *quiet* place to have our meeting.
He's been *quite* successful in his career.
I appreciate the *quiet* moments in the early morning.
The children played *quite* well in the school orchestra.`,
        options: 'quiet, quite'
      }
    }
  ]
};
