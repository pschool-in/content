export default {
  id: 'gerund-infinitive',
  label: ' Gerund and Infinitive',
  pdf: '',
  lockAfter: 3,
  list: [
    {
      label: 'The Gerund',
      type: 'passage',
      id: 'the-gerund-reading',
      data: {
        title: 'The Gerund',
        text: [
          `A verb form that ends with '-ing' are usually called as gerund. They can play the role of both verb and noun. It might be present either at the beginning, middle, or at the end of the sentence. For eg:`,
          {
            type: 'html',
            text: `<b>Swimming</b> is a good exercise. 
I like <b>reading</b> poetry. 
He is good at <b>dancing</b>. `
          },
          `# As Subject`,
          {
            type: 'html',
            text: `<b>Speaking</b> in mother tongue should be encouraged. 
<b>Reading</b> books increase your knowledge.
<b>Working</b> hard makes you successful. `
          },
          `# As Object of Verb`,
          {
            type: 'html',
            text: `He dislikes <b>sleeping</b> long.
I hate <b>telling</b> lies.
Stop <b>writing</b> now.`
          },
          `# As Object of Preposition`,
          {
            type: 'html',
            text: `She is fond of <b>dancing</b>.
I am tired of <b>waiting</b>.
His uncle is addicted to <b>drinking</b>.`
          },
          `# As Complement of Verb`,
          {
            type: 'html',
            text: `My aim in life is becoming a <b>writer</b>.
What I hate is <b>travelling</b>.
Her favorite hobby is <b>dancing</b>.`
          }
        ]
      }
    },
    {
      type: 'selectWord',
      label: 'Identify-Gerund',
      id: 'select-word',
      lockAfter: 1,
      commonData: {
        title: 'Identify the gerund in the below text.'
      },
      data: [
        `She likes *painting*.
        Gaurav avoids *driving* fast.
Grandma enjoyed *meeting* new people.
Kavitha has developed an interest in *cooking*.
My mother says *eating* fresh vegetables are good for health. 
My mom is afraid of *flying* in aeroplane.
*Swimming* is a good exercise.
My uncle gave up *smoking* a few years ago.
What about *going* to the museum tomorrow?
My father was happy *seeing* his mom after a long time.`,

        `He enjoys *playing* football.
Shiyam works in *restoring* vintage bikes.
Mahita is fond of *spending* long hours at the library.
Aadhya loved *listening* to grandpa's childhood memories.
The AC stopped *working* in the middle of the night.
My sister is fond of *reading* novels.
We had fun *skiing* in the snow.
It's no use *taking* a cab now, as we are already late.
I couldn't stop *laughing* at the joke.
I considered *moving* to Mumbai last year.`,

        `Is the exhibition worth *visiting*?
I don't mind *getting* up early.
Did you miss *watching* TV?
Dentists recommend *brushing* teeth twice a day.
He was so noisy, I asked him to stop *talking*.
She delayed *going* to the hospital.
I miss *going* to school.
My car needs *washing*. Could you do that for me?
I am *collecting* old stamps.
She denied *having* an ice cream at night.`
      ]
    },
    {
      label: 'Fill up',
      type: 'matchByDragDrop',
      id: 'drag-and-drop',
      lockAfter: 1,
      data: [
        `*Developing* good habits take lot of time.
*Reading* motivational stories keep Amit busy in the afternoon.
*Completing* the assignment made Tarun tired and hungry.
*Bathing* helps to keep our body clean.
*Singing* in front of the crowd made Neha a bit nervous.`,
        `She is *keeping* the school premises neat and tidy.
I suggested *discussing* the matter in the next meeting.
Mrs.Sharma is keen on *setting* up a restaurant nearby her place.
Before *leaving*, he said goodbye to each of us.
Not only *living* in the city is hectic, but it is expensive too.`
      ]
    },
    {
      label: 'Infinitive',
      type: 'passage',
      id: 'infinitive-reading',
      data: {
        title: 'Infinitive',
        text: [
          `An infinitive is a verb that functions as a noun, adjective, or adverb. It usually begins with the word "to" and is followed by the base form of the verb. Eg:`,
          {
            type: 'html',
            text: `She plans <b>to write</b> a poem.
          They are going <b>to run</b> around the ground.
          The dog was not hungry enough <b>to eat</b>.`
          },
          `# Negative infinite phrase
        They are formed by placing 'not to' in front of the base verb.`,
          {
            type: 'html',
            text: `My mom asked me not <b>to eat</b> the candy.
          I will try <b>not to be late</b>.
          We were warned <b>not to go</b> near the edge of the cliff.`
          }
        ]
      }
    },
    {
      id: 'fill-up',
      label: 'Gerund or infinitive',
      type: 'fillup',
      commonData: {
        title: `Fill in the blanks with the appropriate form.`
      },
      data: [
        `Karthik didn't know what *to do (doing)* when the fire broke out. 
Bhavya dreams about *studying (to study)* at Harvard University.
Tired after work, my mother didn't like *cooking (cook)* her dinner.
Few people could afford *to buy (buy)* a house as big as that.
Arun admitted *leaving (leave)* the last question unanswered.
I offered *to help (help)* my friend.
He admitted *stealing (steal)* the money from the purse.
I would love *to come (coming)* with you to Hyderabad.
At last, I managed *to finish (finish)* my work for the day.
They practised *speaking (speak)* Sanskrit.`,

        `My mom has promised *to take (take)* us to the park this weekend.
Mahesh recommended *writing (write)* down my own notes.
Richa said she needed *to borrow (borrow)* some money from Deepthi.
Savitha didn't like *making (make)* promises that she knew she couldn't keep. 
Sam decided *to take (take)* the test online.
Priya hates *studying (study)*.
We stopped *buying (to buy)* newspapers as we were not reading it.
Mihir denied *breaking (break)* the porcelain cup.
We were very excited *boarding (board)* the plane for the first time.
She wanted *to buy (buy)* expensive sandals.`,

        `I don't like *waiting (wait)* in queues.
Jatin likes *working (work)* in Canada.
I forgot *to buy (buying)* milk. 
Taman gave up *smoking (smoke)* years ago.
My cousin offered *to take (take)* us to the airport.
It appears *to be (is)* drizzling.
We are *planning (to plan)* to visit our village this weekend.
It *rains (raining)* a lot in Kerala.
Tanish completed *painting (paint)* his flat.
*Cooking (To cook)* is my father's favorite pass time.`,

        `Tanvi refused *to help (help)* in the completion of the project.
Everybody enjoyed *dancing (dance)* to Bollywood beats.
Manish admitted *eating (to eat)* my chocolate cake.
My mother demanded *to see (see)* the hotel manager.
I tried *to understand (understand)* but I just couldn't.
My mom chose *to work (work)* in this school.
My brother postponed *doing (do)* his homework.
My cousin would be *arriving (arrive)* tomorrow from Delhi.
I remember *going (go)* to my first movie when I was seven.
Would you mind *passing (pass)* the salt ?`
      ]
    }
  ]
};
