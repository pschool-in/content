export default {
  label: 'Confusing Words',
  id: 'confusing-words-3',
  lockAfter: 7,
  list: [
    {
      id: 'reading',
      type: 'passage',
      label: 'Reading',
      data: {
        title: 'Confusing Words',
        text: [
          `# assistance vs assistants`,
          {
            type: 'html',
            text: `<b>assistance</b> - to help <br>
<b>assistants</b> - helpers`
          },
          `# beside vs besides`,
          {
            type: 'html',
            text: `<b>beside</b> - close to; next to <br>
<b>besides</b> - except for; in addition`
          },
          `# board vs bored`,
          {
            type: 'html',
            text: `<b>board</b> - a piece of wood <br>
<b>bored</b> - uninterested`
          },
          `# brake vs break`,
          {
            type: 'html',
            text: `<b>brake</b> -  device for stopping <br>
<b>break</b> - destroy; stop an ongoing action; take a short rest or pause`
          },
          `# buy vs by`,
          {
            type: 'html',
            text: `<b>buy</b> - to purchase <br>
<b>by</b> - next to; through someone`
          },
          `# coarse vs course`,
          {
            type: 'html',
            text: `<b>coarse</b> -  rough <br>
<b>course</b> - path; series of lectures`
          },
          `# complement vs compliment`,
          {
            type: 'html',
            text: `<b>complement</b> - something that completes <br>
<b>compliment</b> - praise, flattery`
          },
          `# descent vs dissent`,
          {
            type: 'html',
            text: `<b>descent</b> - downward movement <br>
<b>dissent</b> - disagreement`
          },
          `# envelop vs envelope`,
          {
            type: 'html',
            text: `<b>envelop</b> - to surround <br>
<b>envelope</b> - container for a letter`
          },
          `# hoard vs horde`,
          {
            type: 'html',
            text: `<b>hoard</b> - a hidden fund or supply <br>
<b>horde</b> - a large group or crowd`
          }
        ]
      }
    },
    {
      id: 'assistance-assistants',
      label: 'assistance vs assistants',
      type: 'fillup',
      data: {
        title: 'Fill in the blanks with either "assistance" or "assistants."',
        printTitle: 'assistance vs assistants',
        text: `I need some *assistance* with this project.
Our company has hired new *assistants* to help with administrative tasks.
The teacher provided *assistance* to the struggling student.
The conference organizers have a team of *assistants* to manage the event.
He offered his *assistance* in solving the technical issue.`,
        options: 'assistance, assistants'
      }
    },
    {
      id: 'beside-besides',
      label: 'beside vs besides',
      type: 'fillup',
      data: {
        title: 'Click on the blanks and select the correct word.',
        printTitle: 'beside vs besides',
        text: `She sat *beside* her best friend during the movie.
I enjoy reading books *besides* working on my blog.
The park is located *beside* the library.
*Beside (Besides)* studying, I like to paint in my free time.
We found a beautiful flower garden *beside* the river.
*Beside (Besides)* being a talented chef, he is also an excellent photographer.
Please stand *beside* me when we take the group photo.
I love all types of music, *besides* classical.
*Beside (Besides)* the rainy weather, we had a great time on our camping trip.
He's always cheerful, *besides* on Mondays.
The small cafe *beside* the park serves the best coffee.
*Beside (Besides)* her job as a lawyer, she is also a dedicated volunteer.`,
        options: 'beside, besides'
      }
    },
    {
      id: 'board-bored',
      label: 'board vs bored',
      type: 'fillup',
      data: {
        title: 'Fill in the blanks with either "board" or "bored."',
        printTitle: 'board vs bored',
        text: `I am so *bored* during long meetings.
The *board* of directors approved the new project.
She likes to play games to keep herself from getting *bored*.
The *board* meeting will take place in the conference room.
I felt *bored* after finishing my homework early.
The *board* members discussed the company's financial report.
We need to find something to do; otherwise, we'll get *bored*.
The school *board* made important decisions about the curriculum.
He looked *bored* while waiting for his appointment.
The executive *board* oversees the company's strategic planning.`,
        options: 'board, bored'
      }
    },
    {
      id: 'brake-break',
      label: 'brake vs break',
      type: 'fillup',
      data: {
        title: 'Fill in the blanks with either "brake" or "break."',
        printTitle: 'brake vs break',
        text: `Don't forget to use the *brake* when you stop the car.
I need a short *break* to grab some coffee.
He had to slam on the *brakes (breaks)* to avoid the accident.
After a long day of work, I like to take a relaxing *break*.
Be careful not to *break* the fragile glassware.
The bicycle's *brakes* need to be adjusted.
I'll take a 10-minute *break* to stretch my legs.
Please don't *break* the news to her too harshly.
The car's *brake* system needs to be serviced.
I can't afford to *break* my phone; it's my only one.`,
        options: 'brake, break'
      }
    },
    {
      id: 'buy-by',
      label: 'buy vs by',
      type: 'fillup',
      data: {
        title: 'Fill in the blanks with either "buy" or "by."',
        printTitle: 'buy vs by',
        text: `I need to *buy* some groceries after work.
She likes to shop *by* the waterfront.
Can you please *buy* a new notebook for me?
The book was written *by* a famous author.
I'll *buy* a ticket for the concert tonight.
I'll be there *by* 3:00 PM.
He wanted to *buy* a new car, but he couldn't afford it.
The painting was created *by* a talented artist.
We should *buy* some flowers for the party.
I'll meet you *by* the main entrance.`,
        options: 'buy, by'
      }
    },
    {
      id: 'coarse-course',
      label: 'coarse vs course',
      type: 'fillup',
      data: {
        title: 'Fill in the blanks with either "coarse" or "course."',
        printTitle: 'coarse vs course',
        text: `The sand on the beach was very *coarse*.
I'm taking a cooking *course* to improve my culinary skills.
The *coarse* fabric of the shirt was uncomfortable against my skin.
The navigation *course* helped us reach our destination.
Please pass the *coarse* salt for seasoning.
She's studying a challenging *course* in quantum physics.
His language was *coarse*, and he offended many people.
I'm considering enrolling in a programming *course* next semester.
The car's suspension made the ride feel *coarse* on rough roads.
We need to plan our *course* of action for the project.`,
        options: 'coarse, course'
      }
    },
    {
      id: 'complement-compliment',
      label: 'complement vs compliment',
      type: 'fillup',
      data: {
        title: 'Fill in the blanks with either "complement" or "compliment."',
        printTitle: 'complement vs compliment',
        text: `The red shoes are a perfect *complement* to her dress.
She received a lovely *compliment* on her artwork.
The flavors of the dishes at the restaurant *complement* each other.
He offered a sincere *compliment* on her presentation.
The new curtains *complement* the room's decor.
She always knows how to give a heartfelt *compliment*.
The two singers' voices *complement* each other beautifully.
I wanted to pay her a *compliment* for her kindness.
The furniture's design and color scheme should *complement* the overall aesthetic.
He couldn't resist giving her a *compliment* on her cooking.`,
        options: 'complement, compliment'
      }
    },
    {
      id: 'descent-dissent',
      label: 'descent vs dissent',
      type: 'fillup',
      data: {
        title: 'Fill in the blanks with either "descent" or "dissent."',
        printTitle: 'descent vs dissent',
        text: `The mountain climbers began their steep *descent*.
There was some *dissent* among the team members about the new project proposal.
The airplane made a smooth *descent* before landing.
The group of protestors voiced their *dissent* against the government's policies.
During the skydiving jump, the thrill is in the rapid *descent*.
The board members expressed their *dissent* by voting against the decision.
The story is about a daring *descent* into the unknown.
*Dissent (Descent)* among the members led to a heated discussion.
We witnessed a beautiful sunrise during our *descent* from the mountain.
It's important for a healthy democracy to allow freedom of *dissent*.`,
        options: 'descent, dissent'
      }
    },
    {
      id: 'envelop-envelope',
      label: 'envelop vs envelope',
      type: 'fillup',
      data: {
        title: 'Fill in the blanks with either "envelop" or "envelope."',
        printTitle: 'envelop vs envelope',
        text: `She placed the letter inside the *envelope*.
The warm ocean breeze seemed to *envelop* us as we relaxed on the beach.
Please seal the *envelope* before mailing it.
The fog began to *envelop* the entire city.
I need a larger *envelope* to send this document.
The forest seemed to *envelop* you in a sense of serenity.
He carefully addressed the *envelope* with the recipient's name.
The darkness started to *envelop* the room as the sun set.
The beautifully designed *envelope* contained an invitation.
The silence of the library seemed to *envelop* me as I studied.`,
        options: 'envelop, envelope'
      }
    },
    {
      id: 'hoard-horde',
      label: 'hoard vs horde',
      type: 'fillup',
      data: {
        title: 'Fill in the blanks with either "hoard" or "horde."',
        printTitle: 'hoard vs horde',
        text: `He has a secret *hoard* of rare collectibles.
A *horde* of fans gathered outside the concert venue.
She tends to *hoard* old magazines and newspapers.
The hungry wolves formed a menacing *horde* in the forest.
I found a hidden *hoard* of treasures in the attic.
The bustling city streets were filled with a *horde* of people.
It's not healthy to *hoard* so many unnecessary things.
A *horde* of shoppers rushed into the store during the sale.
He decided to finally declutter and get rid of his *hoard* of old clothes.
The invading *horde* of barbarians swept through the village.`,
        options: 'hoard, horde'
      }
    }
  ]
};
