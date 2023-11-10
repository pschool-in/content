export default {
  label: 'Confusing Words',
  id: 'confusing-words-4',
  lockAfter: 7,
  list: [
    {
      id: 'reading',
      type: 'passage',
      label: 'Reading',
      data: {
        title: 'Confusing Words',
        text: [
          `# adverse vs averse`,
          {
            type: 'html',
            text: `<b>adverse</b> - unfavorable <br>
<b>averse</b> - opposed to`
          },
          `# a lot vs allot`,
          {
            type: 'html',
            text: `<b>a lot</b> - a quantity; many of something <br>
<b>allot</b> - to divide or portion out`
          },
          `# device vs devise`,
          {
            type: 'html',
            text: `<b>device</b> - a plan; a tool or utensil <br>
<b>devise</b> - to create`
          },
          `# do vs due`,
          {
            type: 'html',
            text: `<b>do</b> - indicating performance or execution of a task <br>
<b>due</b> - as a result of`
          },
          `# eminent vs imminent`,
          {
            type: 'html',
            text: `<b>eminent</b> - prominent <br>
<b>imminent</b> - about to happen`
          },
          `# formally vs formerly`,
          {
            type: 'html',
            text: `<b>formally</b> -  conventionally, with ceremony <br>
<b>formerly</b> - previously`
          },
          `# later vs latter`,
          {
            type: 'html',
            text: `<b>later</b> - after a time <br>
<b>latter</b> - second one of two things`
          },
          `# lessen vs lesson`,
          {
            type: 'html',
            text: `<b>lessen</b> - to decrease <br>
<b>lesson</b> - something learned or taught`
          },
          `# lightning vs lightening`,
          {
            type: 'html',
            text: `<b>lightning</b> - storm-related electricity <br>
<b>lightening</b> - making lighter`
          },
          `# meddle vs horde`,
          {
            type: 'html',
            text: `<b>meddle</b> - to interfere, intrude <br>
<b>mettle</b> - courage, spirit, energy`
          }
        ]
      }
    },
    {
      id: 'adverse-averse',
      label: 'adverse vs averse',
      type: 'fillup',
      data: {
        title: 'Fill in the blanks with either "adverse" or "averse."',
        printTitle: 'adverse vs averse',
        text: `The drug had *adverse* effects on some patients.
She is *averse* to taking risks in her investments.
*Adverse* weather conditions delayed the flight.
He has an *averse* attitude towards public speaking.
The company faced *adverse* economic conditions last year.`,
        options: 'adverse, averse'
      }
    },
    {
      id: 'a-lot-allot',
      label: 'a lot vs allot',
      type: 'fillup',
      data: {
        title: "Fill in the blanks with either 'a lot' or 'allot.'",
        printTitle: 'a lot vs allot',
        text: `I have *a lot* of work to do before the deadline.
She will *allot* the tasks to different team members.
There is *a lot* of traffic on the road today.
The manager will *allot* the budget for various departments.
I need *a lot* of time to complete this project.`,
        options: 'a lot, allot'
      }
    },
    {
      id: 'device-devise',
      label: 'device vs devise',
      type: 'fillup',
      data: {
        title: 'Fill in the blanks with either "device" or "devise."',
        printTitle: 'device vs devise',
        text: `I need a new electronic *device* for my work.
She had to *devise* a clever plan to solve the puzzle.
The security *device* at the entrance scans for IDs.
He tried to *devise* a strategy to win the game.
My phone is a useful communication *device*.
She will *devise* a recipe for the upcoming cooking competition.
The tracking *device* is used to monitor the location of the vehicle.
We need to *devise* a way to increase our productivity.
The technician fixed the malfunctioning *device*.
They had to *devise* a marketing campaign for the new product.`,
        options: 'device, devise'
      }
    },
    {
      id: 'do-due',
      label: 'do vs due',
      type: 'fillup',
      data: {
        title: 'Fill in the blanks with either "do" or "due."',
        printTitle: 'do vs due',
        text: `I need to *do* my homework before going out.
The assignment is *due* next week.
What can I *do* to help you with your project?
The rent payment is *due* on the first of the month.
Please *do* your best on the exam.
Her success is *due* to hard work and determination.
I don't know what to *do* with all these extra clothes.
The event was canceled *due* to bad weather.
We have a lot of work to *do* before the deadline.
The package is *due* to arrive tomorrow.`,
        options: 'do, due'
      }
    },
    {
      id: 'eminent-imminent',
      label: 'eminent vs imminent',
      type: 'fillup',
      data: {
        title: 'Fill in the blanks with either "eminent" or "imminent."',
        printTitle: 'eminent vs imminent',
        text: `The scientist is an *eminent* expert in her field.
The dark clouds indicate that a storm is *imminent*.
He is considered an *eminent* scholar in the history of art.
The news of the upcoming merger is *imminent*.
The university invited an *eminent* speaker for the conference.
There was an *imminent* danger of the volcano erupting.
The writer received an *eminent* award for her novel.
The construction of the new building is *imminent*.
He is an *eminent* actor with a long and successful career.
The team is preparing for the *imminent* arrival of the visiting dignitaries.`,
        options: 'eminent, imminent'
      }
    },
    {
      id: 'formally-formerly',
      label: 'formally vs formerly',
      type: 'fillup',
      data: {
        title: 'Fill in the blanks with either "formally" or "formerly."',
        printTitle: 'formally vs formerly',
        text: `He was *formerly* a professional athlete.
She addressed the audience *formally* during the ceremony.
The restaurant was *formerly* a bank.
They greeted each other *formally* at the business meeting.
*Formerly (Formally)*, this area was a dense forest.
The company has adopted a *formally* written code of conduct.
*Formerly (Formally)*, he worked in a different department.
The contract was signed *formally* in the presence of witnesses.
They used to be friends, but *formerly* they had a falling out.
Please dress *formally* for the gala event.`,
        options: 'formally, formerly'
      }
    },
    {
      id: 'later-latter',
      label: 'later vs latter',
      type: 'fillup',
      data: {
        title: 'Fill in the blanks with either "later" or "latter."',
        printTitle: 'later vs latter',
        text: `I'll call you back *later* in the day.
The first and *latter* parts of the book are quite different.
Let's discuss the details *later* during the meeting.
John arrived early, and Mary arrived *later* than expected.
We can make plans for the weekend *later* this week.
The *latter* chapters of the novel are the most exciting.
I have a dentist appointment *later* this afternoon.
She considered two job offers but chose the *latter* one.
I'll send you the information you need *later* today.
He started his career as a teacher and *later* became a principal.`,
        options: 'later, latter'
      }
    },
    {
      id: 'lessen-lesson',
      label: 'lessen vs lesson',
      type: 'fillup',
      data: {
        title: 'Fill in the blanks with either "lessen" or "lesson."',
        printTitle: 'lessen vs lesson',
        text: `The rainfall will help *lessen* the drought's impact on the crops.
She learned an important life *lesson* from her experiences.
We need to find a way to *lessen* the environmental impact of our activities.
His injury taught him a valuable *lesson* about safety.
Taking breaks during work can *lessen* stress.
The history *lesson* covered the events of the American Revolution.
Efforts to reduce waste can *lessen* the burden on landfills.
He delivered an inspiring *lesson* on leadership.
To *lessen* your expenses, you should budget carefully.
The *lesson* on geometry was challenging but interesting.`,
        options: 'lessen, lesson'
      }
    },
    {
      id: 'lightning-lightening',
      label: 'lightning vs lightening',
      type: 'fillup',
      data: {
        title: 'Fill in the blanks with either "lightning" or "lightening."',
        printTitle: 'lightning vs lightening',
        text: `The sky lit up with a brilliant flash of *lightning*.
She's been *lightening* her hair with highlights.
The loud boom of *lightning* startled everyone.
Her goal is *lightening* the mood with her jokes.
I saw a beautiful bolt of *lightning* during the storm.
The weather forecast predicts *lightening* and thunder.
*Lightning (Lightening)* can be a spectacular natural phenomenon.
He is *lightening* the load by removing unnecessary items.
*Lightning (Lightening)* is often followed by thunder in a storm.
The company is *lightening* its environmental impact.
We need to take cover when there's *lightning* in the area.
Her hair has a nice *lightening* effect from the sun.`,
        options: 'lightning, lightening'
      }
    },
    {
      id: 'meddle-horde',
      label: 'meddle vs horde',
      type: 'fillup',
      data: {
        title: 'Fill in the blanks with either "meddle" or "horde."',
        printTitle: 'meddle vs horde',
        text: `I don't want to *meddle* in their personal matters.
A *horde* of tourists flooded the city during the festival.
Please don't *meddle* in their family dispute.
We were surrounded by a *horde* of fans at the concert.
It's best not to *meddle* in their relationship issues.
The barbarian *horde* attacked the village.
Stop trying to *meddle* in their business affairs.
The shopping mall was packed with a *horde* of shoppers.
I heard a loud *horde* of birds outside my window this morning.
It's not wise to *meddle* with things that don't concern you.`,
        options: 'meddle, horde'
      }
    }
  ]
};
