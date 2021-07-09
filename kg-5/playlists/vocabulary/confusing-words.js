export default {
  label: 'Confusing Words',
  id: 'confusing-words',
  lockAfter: 4,
  list: [
    {
      id: 'reading',
      type: 'passage',
      label: 'Reading',
      data: {
        title: 'Confusing Words',
        text: [
          `# to, two vs too`,
          {
            type: 'html',
            text: `<b>to</b> -  to indicate location<br>
<b>two </b> - a number<br>
<b>too </b> - more, also`
          },
          `# by, bye vs buy`,
          {
            type: 'html',
            text: `<b>by</b> -  one does something<br>
<b>bye</b> -  we say while leaving<br>
<b>buy </b> - purchase`
          },
          `# here vs hear`,
          {
            type: 'html',
            text: `<b>here</b> - to point a place near to you <br>
<b>hear </b> - what ear does`
          },
          `# past vs passed`,
          {
            type: 'html',
            text: `<b>past</b> - an earlier period of time<br>
<b>passed </b> - gone ahead; being successful at a test`
          },
          `# thorough vs through`,
          {
            type: 'html',
            text: `<b>thorough</b> - an adjective that describes an act undertaken with great attention to detail.<br>
    <b>through</b> -  a preposition explaining that a thing  has passed 'from one end to the other.' It also means 'during'.`
          },
          `# borrow vs burrow`,
          {
            type: 'html',
            text: `<b>burrow</b> -  a tunnel or a hole that has been dug by an animal
    <b>borrow</b> - receive something from somebody, expecting to return it<br>`
          },
          `# heal vs heel`,
          {
            type: 'html',
            text: `<b>heal</b> - to get well from sickness<br>
<b>heel</b> - the part of foot or shoe that touches the ground`
          },
          `# dear vs deer`,
          {
            type: 'html',
            text: `<b>dear</b> - liked or valued high<br>
<b>deer</b> - an animal`
          },
          `# lose vs loose`,
          {
            type: 'html',
            text: `<b>lose</b> -  fail to win or retain <br>
<b>loose </b> - not tight or contained`
          },
          `# lie vs lay`,
          {
            type: 'html',
            text: `<b>lie</b> -  to speak falsely; to be in resting position <br>
<b>lay </b> - to put something or someone in a particular position`
          }
        ]
      }
    },
    {
      id: 'to-two-too',
      label: 'to, two, vs too',
      type: 'fillupOptions',
      data: {
        title: 'To, Two, and Too',
        text: `It is never *too* late to learn.
I am going *to* read a story.
Suresh ran *two* kilometers.
This gift is *too* expensive.
Can I have *two* tickets?
Sita started *to* laugh.`,
        options: 'to, two, too'
      }
    },
    {
      id: 'by-bye-buy',
      label: 'by, bye vs buy',
      type: 'fillupOptions',
      data: {
        title: 'By, Buy, and Bye',
        text: `*Bye* for now! I will catch you later.
Where can I *buy* a ticket?
This book is written *by* an Indian author.
Should I *buy* a black car or a white car?
The bike was driven *by* Smith.
*Bye*, see you tomorrow.`,
        options: 'by, buy, bye'
      }
    },
    {
      id: 'here-hear',
      label: 'here vs hear',
      type: 'fillupOptions',
      data: {
        title: 'Here vs Hear',
        text: `There is no one *here*.
Can you *hear* the dog barking?
When your uncle gets *here*, tell him to wait.
The bears won't *hear* us if we're quiet.
Kids, where are you? We're *here*.
Who put the keys *here* ?
I can't *hear* you. You're mumbling.`,
        options: 'here, hear'
      }
    },
    {
      id: 'thorough-through',
      label: 'thorough vs through',
      type: 'fillupOptions',
      data: {
        title: 'thorough vs through',
        text: `The doctor made a *thorough* study of the lab reports and pronounced the patient fit.
Shilpa searched *thoroughly*, but couldn't find the letter.
The tiger walked stealthily *through* the forest, stalking its prey.
When you are *through* eating, don't forget to take your medicine.
*Through* the dentist appointment, I kept my eyes closed!`,
        options: 'thorough, through'
      }
    },
    {
      id: 'borrow-burrow',
      label: 'borrow vs burrow',
      type: 'fillupOptions',
      data: {
        title: 'borrow vs burrow',
        text: `Meena was forced to *borrow* ten rupees from Sarita for her bus fare.
Moles *burrow* under the soil.
The chipmunk retreated into its *burrow* to feed the babies.
May I *borrow* your pen please.
Sujit had to *borrow* a compass during the Math evam.`,
        options: 'borrow, burrow'
      }
    },
    {
      id: 'past-passed',
      label: 'past vs passed',
      type: 'fillupOptions',
      data: {
        title: 'Fill in the blanks with either past or passed.',
        text: `We read about the *past* in history books.
Have you *passed* the examination?
Ten years have *passed* away since he met.
You walked *past* the hospital.
A bus *passed* by just a moment ago.`,
        options: 'past, passed'
      }
    },
    {
      id: 'heal-heel',
      label: 'heal vs heel',
      type: 'fillupOptions',
      data: {
        title: 'Heal vs Heel',
        text: `Your wound will *heal* soon.
A stone was digging into my *heel*.
Her concern is to *heal* sick people.
The *heel* of my shoe is broken.
The girl turned on her *heel*.`,
        options: 'heal, heel'
      }
    },
    {
      id: 'dear-deer',
      label: 'dear vs deer',
      type: 'fillupOptions',
      data: {
        title: 'Dear vs Deer',
        text: `We saw a herd of *deer* today.
He is a very *dear* friend.
The dogs went after the wounded *deer*.
My son is very *dear* to me.
The hunter hit at a *deer* with his gun.`,
        options: 'dear, deer'
      }
    },
    {
      id: 'lose-loose',
      label: 'lose vs loose',
      type: 'fillupOptions',
      data: {
        title: 'Lose vs Loose',
        text: `Ben has a *loose* tooth.
The hamster is so cute. Don't *lose* her now.
There are *loose* papers in the bag.
Don't *lose* your temper.
Our mothers *lose* their car keys lot of times.
The boy is wearing *loose* pants.
The dog is *loose* in the neighbourhood.`,
        options: 'loose, lose'
      }
    },
    {
      id: 'lie-lay',
      label: 'lie vs lay',
      type: 'fillupOptions',
      data: {
        title: 'Click on the blanks and select the correct word.',
        text: `I am unwell. I am going to *lie* down for some time.
Monica and her friend *lay* their keys on the shelf.
They *lie* on the ground and look at the stars.
Please *lay* the bag on the table.
Today we will *lay* the carpet in the hall`,
        options: 'lie, lay'
      }
    }
  ]
};
