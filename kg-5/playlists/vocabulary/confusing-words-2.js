export default {
  label: 'Confusing Words',
  id: 'confusing-words-2',
  lockAfter: 4,
  list: [
    {
      id: 'reading',
      type: 'passage',
      label: 'Reading',
      data: {
        title: 'Confusing Words',
        text: [
          `# fewer vs less`,
          {
            type: 'html',
            text: `<b>fewer</b> -  a small amount of things that can be counted<br>
<b>less</b> - a small amount of things that cannot be counted`
          },
          `# accept vs except`,
          {
            type: 'html',
            text: `<b>accept</b> -  when someone agrees to take something offered <br>
<b>except</b> - when someone or something is not included`
          },
          `# affect vs effect`,
          {
            type: 'html',
            text: `<b>affect</b> -  the cause of an action<br>
<b>effect</b> - the result of an action`
          },
          `# cereal vs serial`,
          {
            type: 'html',
            text: `<b>cereal</b> -  ediable grains like rice<br>
<b>serial</b> - something arranged one after the other`
          },
          `# pole vs poll`,
          {
            type: 'html',
            text: `<b>pole</b> - A long cylindrical piece of wood or metal <br>
<b>poll </b> - A process where people vote for a person or idea`
          },
          `# sight vs site`,
          {
            type: 'html',
            text: `<b>sight</b> -  seeing ability<br>
<b>site</b> - used to refer a place`
          },
          `# allowed vs aloud`,
          {
            type: 'html',
            text: `<b>allowed</b> - giving permission to do something<br>
<b>aloud</b> - a voice which can be heard louder`
          },
          `# desert vs dessert`,
          {
            type: 'html',
            text: `<b>desert</b> - a large dry area with little rain and few plants<br>
<b>dessert</b> - something sweet eaten after the main part of a meal`
          },
          `# birth vs berth`,
          {
            type: 'html',
            text: `<b>birth</b> - the state of being born<br>
<b>berth</b> - a place to sleep in a train or bus`
          },
          `# bear vs bare`,
          {
            type: 'html',
            text: `<b>bear</b> - an animal; to tolerate something<br>
<b>bare</b> - uncovered eg: bare foot`
          },
          `# dye vs die`,
          {
            type: 'html',
            text: `<b>dye</b> - to colour a substance<br>
<b>die</b> - to stop living`
          },
          `# peak vs peek`,
          {
            type: 'html',
            text: `<b>peak</b> - highest point<br>
<b>peek</b> - look at something quickly without being noticed`
          }
        ]
      }
    },
    {
      id: 'fewer-less',
      label: 'fewer vs less',
      type: 'fillupOptions',
      data: {
        title: 'Fill in the blanks with either fewer or less.',
        text: `Rohan drinks *less* water than he used to.
There are *fewer* shops open on Sundays.
I have *less* time to complete this task.
I prefer eating *less* salt.
We have *fewer* customers this year than last.`,
        options: 'fewer, less'
      }
    },
    {
      id: 'accept-except',
      label: 'accept vs except',
      type: 'fillupOptions',
      data: {
        title: 'Click on the blanks and select the correct word.',
        text: `Please *accept* our invitation for lunch.
All the players *except* the bowler wore caps.
Priya will *accept* the award for the best singer.
Rahul does not like to *accept* help from anyone.
We all passed our exam *except* Tina.
Will you *accept* our dinner invitation?
*except* for Sam, we all likes going swimming.
Please *accept* this gift as a token of my appreciation.
All the students scored an A in the math quiz,  *except* for Bradley.
Mitchell wanted to go, *except* his mother couldn't leave.
Thank you, I will *accept* your offer.
Everyone *except* Ben has blue eyes.`,
        options: 'accept, except'
      }
    },
    {
      id: 'affect-effect',
      label: 'affect vs effect',
      type: 'fillupOptions',
      data: {
        title: ' Fill in the blanks with either affect or effect.',
        text: `Smoking will *affect* the health.
The *effect* of the tsunami was devastating.
Tom's opinion will not *affect* my decision.
The heavy rainfall will *affect* the crop.
Air pollution has a bad *effect* on children.`,
        options: 'affect, effect'
      }
    },
    {
      id: 'cereal-serial',
      label: 'cereal vs serial',
      type: 'fillupOptions',
      data: {
        title: 'Fill in the blanks with either cereal or serial.',
        text: `What is your favourite TV *serial*?
My favourite *cereal* is Corn.
What *cereal* do you like for breakfast?
A new *serial* is starting on television from tomorrow.
Drought has spoiled this year's *cereal* crop.`,
        options: 'cereal, serial'
      }
    },
    {
      id: '1400',
      label: 'pole vs poll',
      type: 'fillupOptions',
      data: {
        title: 'Fill in the blanks with either pole or poll.',
        text: `The result of the *poll* has been declared.
Every morning the flag is raised on its *pole*.
We are conducting a *poll* among teachers.
BJP won the election with 70% of the *poll*.
They flew to Europe via the North *Pole*.`,
        options: 'pole, poll'
      }
    },
    {
      id: '1500',
      label: 'site vs sight',
      type: 'fillupOptions',
      data: {
        title: 'Fill in the blanks with either site or sight.',
        text: `A *site* has been chosen for the new school.
Don’t judge anyone at first *sight*.
There are two shops on *site*.
The students cleaned up their camping *site*.
She lost her *sight* in an accident.`,
        options: 'site, sight'
      }
    },
    {
      id: '1800',
      label: 'allowed vs aloud',
      type: 'fillupOptions',
      data: {
        title: 'Fill in the blanks with either allowed or aloud.',
        text: `Please read this story *aloud*.
He was not *allowed* to write the exam.
Smoking is not *allowed* in the park.
The pain made him cry *aloud*.
Swimming is not *allowed* at this beach.`,
        options: 'allowed, aloud'
      }
    },
    {
      id: '1900',
      label: 'desert vs dessert',
      type: 'fillupOptions',
      data: {
        title: 'Fill in the blanks with either desert or dessert.',
        text: `Plants in the *desert* do not need a lot of water.
We had chocolate cake for *dessert*.
Nobody likes to live in the *desert*.
They were lost in the *desert* for two days.
My favourite kind of *dessert* is Strawberry ice cream.`,
        options: 'desert, dessert'
      }
    },

    {
      id: 'birth-berth',
      label: 'birth vs berth',
      type: 'fillupOptions',
      data: {
        title: 'Birth or Berth.',
        text: `Mrs. Karthini gave *birth* to a baby girl.
I need a copy of my *birth* certificate.
They got *berth* in Rajdhani Express.
Ramesh is Indian by *birth*.
Roshini slept on the *berth* allotted to her.`,
        options: 'birth, berth'
      }
    },
    {
      id: 'bear-bare',
      label: 'bear vs bare',
      type: 'fillupOptions',
      data: {
        title: 'Bear vs Bare',
        text: `I can't *bear* the suspense.
He attached him with his *bare* hands.
He is so rude that nobody can *bear* him.
Don't walk in your *bare* feet.
We saw *bear* in the zoo.
I have to *bear* this pain.`,
        options: 'bear, bare'
      }
    },
    {
      id: 'dye-die',
      label: 'dye vs die',
      type: 'fillupOptions',
      data: {
        title: 'Dye vs Die',
        text: `How did the dinosaurs *die*?
You can *dye* your hair black.
Wash the *dye* out with shampoo.
She feels so sick and she thinks she might *die*.
Please *dye* these shoes.`,
        options: 'dye, die'
      }
    },
    {
      id: 'peak-peek',
      label: 'peak vs peek',
      type: 'fillupOptions',
      data: {
        title: 'Peak vs Peek',
        text: `I took a quick *peek* inside.
He is at the *peak* of her career.
Prices reach a *peak* during October.
Shut your eyes and don't *peek*.
We could see the *peak* of the mountain.`,
        options: 'peak, peek'
      }
    }
  ]
};
