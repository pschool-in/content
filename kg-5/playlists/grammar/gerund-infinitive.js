export default {
  id: 'gerund-infinitive',
  label: ' Gerund and Infinitive',
  pdf: '',
  list: [
    {
      label: 'The Gerund',
      type: 'passage',
      id: 'the-gerund-reading',
      data: {
        title: 'The Gerund',
        text: `Gerund is that form of the verb which ends in -ing and acts a noun and verb. Therefore Gerund is also called as Verb-noun. Gerund functions as a subject, object, object of preposition, or subject complement. Gerund might be present either at the beginning, middle or at the end of the sentence.
For example
1. Swimming is a very good exercise.
2. I like reading poetry.
3. I like watching TV.

# Uses of gerund:
Gerund can be used as a

# Subject of verb
Examples are
1. Walking is good exercise for health.
2. Reading books increases your knowledge.
3. Working hard makes you successful.

# Object of verb
Examples are
1. He dislike sleeping long.
2. I hate telling lies.
3. Stop writing now.

# Object of preposition
Examples are
1. She is fond of dancing.
2. I am tired of waiting.
3. My father is addicted to drinking.

# Complement of verb
Examples are
1. My aim in life is becoming a writer.
2. What I hate is drinking.
3. Her Favourite hobby is dancing.`
      }
    },
    {
      label: 'Infinitive',
      type: 'passage',
      id: 'infinitive-reading',
      data: {
        title: 'Infinitive',
        text: `An infinitve is a verb that functions as a noun, adjective, or adverb in order to express an opinion, purpose of an object or action or answers the questions, who, what or why. The infinitve usually begins with the word "to" and is followed by base form of the verb.
Some examples of infinitive include
1. to read
2. to run
3. to jump
4.  to play
5. to sing
6. to laugh
7. to eat
8. to go`
      }
    },
    {
      type: 'selectWord',
      label: 'Identify',
      id: 'select-word',
      commonData: {
        title: 'Identify the gerund in each sentence'
      },
      data: [
        `Gaurav avoids *driving* in highways as much as possible.
          Grandma enjoyed *meeting* new people.
          Kavitha has developed interest in *cooking*.
          My mother says *eating* fresh vegetables is good for health. 
          She likes *painting*.`,

        `He enjoys *playing* football.
          Vihaan's most favorite free-time activity is *restoring* vintage bikes.
          Mahita is fond of *spending* long hours at the library.
          Aadhya loved *listening* to grandpa's childhood memories.
          The AC stopped *working* in the middle of the night.`,

        `Is the exhibition worth *visiting*?
          I don't mind *getting* up early.
          Did you miss *watching* TV?
          Dentists recommend *cleaning* teeth twice a day.
          He was so noisy, I asked him to stop *talking*.`
      ]
    },
    {
      label: 'Fill up',
      type: 'matchByDragDrop',
      id: 'drag-and-drop',
      commonData: {
        isPractice: false,
        title: 'Complete each sentence using an appropriate gerund',
        styles: {
          fontSize: '1rem',
          dashWidth: 80
        }
      },
      data: [
        `*Developing* the new software is taking longer than expected.
          *Reading* motivational stories keeps Amit busy in the afternoon.
          Studying and *completing* the assignment made Tarun tired and hungry.
          *Sunbathing* helps the body absorb vitamin D.
          *Singing* in front of the crowd made Neha a bit nervous.`,
        `*Keeping* the school premises neat and tidy is the primary job of administrative department.
I suggested *discussing* the matter in the next meeting.
Mrs.Sharma is keen on *setting* up a restaurant nearby her place.
Before *leaving*, Mrs.Reddy said goodbye to each of us.
Not only *living in the city is hectic, but it is expensive too.`
      ]
    },
    {
      id: 'fill-up',
      label: 'Gerund or infinitive',
      type: 'fillup',
      commonData: {
        title: `Complete each sentence using the gerund or infinitve form as appropriate`
      },
      data: [
        `Karthik didn't know what *to do (doing)* when the fire broke out. 
          Bhavya dreams about *studying (to study)* in Harvard University.
          Tired after work, my mother didn't like *cooking (cook)* her dinner.
          Few people could afford *to buy (buy)* a house as big as that.
          Arun admitted *leaving (leave)* the last question unanswered.`,

        `My mom has promised *to take (take)* us to the park this weekend.
          Mahesh recommended *writing (write)* down my own notes.
          Richa said she needed *to borrow (borrow)* some money from Deepthi.
          Mrs. Naidu didn't like *making (make)* promises that she knew she couldn't keep. 
          Sam decided *to take (take)* the test online.`,

        `I can't stand *waiting (wait)* in queues.
          Jatin likes *working (work)* in Canada.
          I forgot *to buy (buying)* milk. 
          Taman gave up *smoking (smoke)* years ago.
          My cousin offered *to take (take)* us to airport.`,

        `Tanvi refused *to help (help)* in completion of the project.
          Everybody really enjoyed *dancing (dance)* to Bollywood beats.
          Manish admitted *eating (to eat)* my chocolate cake.
          My mother demanded *to see (see)* the hotel manager.
          I tried *to understand (understand)* but I just couldn't.`
      ]
    }
  ]
};
