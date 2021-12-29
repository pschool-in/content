export default {
  id: 'adverb-5',
  label: 'Adverb of Degree and Frequency',
  pdf: '',
  list: [
    {
      label: 'Notes',
      type: 'passage',
      id: 'passage',
      data: {
        title: 'Types of Adverbs',
        text: [
          `# Adverb of Frequency
It tells 'how often' something happens.`,
          {
            type: 'html',
            text: `I <b>always</b> wake up at 6 o'clock.<br>
I <b>rarely</b> watch TV.`
          },
          `# Adverb of Degree
It tells 'how much' or 'to what extent'.`,
          {
            type: 'html',
            text: `I <b>totally</b> agree with you.<br>
I was <b>really</b> excited.`
          }
        ]
      }
    },
    {
      type: 'selectWord',
      label: 'Select the Adverb of Degree',
      id: 'select-word',
      commonData: {
        title: 'Select the adverb of degree in each sentence.'
      },
      data: [
        `The food was *extremely* hot.
The book is *quite* interesting.
She was *just* playing.
Reena is *almost* done.
That boy was *very* smart.
She is *very* kind.
I am *rather* busy.
The game went *horribly* wrong.
Is your tea hot *enough?*
It was *too* cold.`,

        `My bag isn't big *enough*.
Can I eat the chocolate *too*?
She worked *quickly*.
I *almost* stumbled on the rock.
She reached on the top *so* quickly.
The team played *spectacularly*.
It's not big *enough*.
I was *too* tired to get up this morning.
The function was *very* good.
He drove the car *very* fast.`
      ]
    },
    {
      type: 'selectWord',
      label: 'Select the Adverb of Frequency',
      id: 'select-word-2',
      commonData: {
        title: 'Select the adverb of frequency in the below sentences.'
      },
      data: [
        `*Sometimes*, the school takes the kids to the zoo.
Ayushi is *usually* very rude.
My grandma *often* goes for a walk in the morning.
I *never* go outside in the afternoon.
He *often* listens to the radio.`,

        `He sleeps during the classes *frequently*.
The newspaper is *usually* delivered in the morning.
Does she *often* help her mother?
Sheena *rarely* studies for exams.
Aman is *usually* in bed by 10 o'clock.`,

        `Neena is *always* complaining.
Molly's sister *occasionally* comes to the park.
He is *often* late.
My little sister is *always* hungry.
Sheenu *usually* helps her mother in the kitchen.`,

        `The teacher checks our homework *weekly*.
He is *always* late.
*Sometimes* they come and eat with us.
I play cricket *occasionally*.
We *rarely* watch movies.`,

        `We have our exams *twice* a year.
I eat meals *three times* a day.
I spoke to him *once*.
I drink a glass of water *every* hour.
I take a bath *daily*.`
      ]
    },
    {
      type: 'group',
      label: 'Drag and Drop',
      id: 'group',
      commonData: {
        title: 'Identify if these words are adverbs of frequency or not.',
        types: ['Adverb of Frequency', 'Not So']
      },
      data: [
        [
          `Rarely, Weekly, Usually, Monthly`,
          `Quickly, Slowly, Peacefully, Godly`
        ],
        [`Thrice, Sometimes, Ever, Always`, `Smart, Running, Fasting, Grains`],
        [`Twice, Never, Seldom, Often`, `Noisily, Safely, Intelligent, Great`],
        [
          `Occasionally, Normally, Now, Often`,
          `Intelligent, Slow, Sleep, Jump`
        ],
        [`Soon, Today, Generally, Ever`, `Walk, Talk, Dance, Speak`]
      ]
    },
    {
      type: 'selectWord',
      label: 'Select the adverbs of degree',
      id: 'multi-select-adverb',
      commonData: {
        title: 'Tap on all the adverbs of degree.',
        printTitle: 'Underline all the adverbs of degree.',
        multiSelect: true
      },
      data: [
        `She was *considerably* sick. Yet she *bravely* appeared in the exam. Everyone praised her.
She gained a lot of weight *enormously*. She was *very* thin last year. And she got *very* fat this year.
The guests were *pretty* loud. I could *hardly* study. So I decided to do it later.
The teacher *completely* agreed with my answer. I was *extremely* happy. My enemies got *very* jealous.
I was *immensely* tired after the program. My mom made *so* much food. But I was *quite* tired so I slept.
That man *somewhat* looked like my uncle. I *almost* got confused. Then I realized he was *just* similar to him.
We live in the same street and go to the same school. But, I *barely* talk to him. He's *quite* irritating.
She made fun of me. I am *deeply* hurt. She is *very* bad and rude. She *almost* made me cry.`,

        `It's *very* cold outside. I would *rather* stay inside a blanket. It is *extremely* cold.
I like this book. I *really* admire the author. I will now read all the books he has written.
Our teacher decided to teach us even during the lunch break. And now we all are *literally* starving.
The artist *minutely* observed my painting. He said it was good *enough*. I felt *immense* joy.
I *strongly* believe that we should obey our elders. It is because they know about *so* many things.
My friend *highly* recommended this book to me. I *just* finished reading. I think it is *very* interesting.
The teacher *thoroughly* checked my answer sheet. I answered *almost* all the questions correctly.
I became *slightly* uncomfortable when the guests came. I am *simply* shy. So, I left within 5 minutes.`,

        `He was *almost* finished with his work. But the teacher gave him a lot more to do.
The milk was *completely* frozen because it was kept in the freezer. I *quickly* put it outside.
The teacher was *terribly* rude today. She gave us *so* much homework that it is more than *enough* for the week.
The cake was *absolutely* delicious. But I *barely* ate it because I ate *so* many french fries. I like them *very* much.
I feel *incredibly* lucky. My exams are canceled. I can play all day long.
I *just* finished my work. Now I *hardly* have any energy left. I will *rather* sleep than watch TV.
The movie was *quite* interesting. We *deeply* discussed it. We liked it *very* much.
The water was *extremely* cold. We should prefer to drink warm water. It is *very* good for our health.`,

        `Tarun walks *extremely* fast. But I walk *quite* slowly. I *barely* match his pace.
It is *nearly* impossible for me to attend the party. I am going with my family to a *very* popular restaurant.
When you try something new, you should *really* look at the instructions first. They are *immensely* useful.
Rahul is *rather* quiet. But his brother is *pretty* talkative. He is also *very* outgoing.
Your answers are *slightly* wrong. You should revise them *thoroughly* before submitting them.
He performed *remarkably* well this year. The teachers are *extremely* proud of him. He *really* did *very* well.
Are these pens *enough*? Do you think they are *too* many? Shall I return some of these?
I am not *entirely* sure what homework the teacher gave us. I was *slightly* distracted in the class.`
      ]
    },
    {
      type: 'selectWord',
      label: 'Select the adverb of frequency',
      id: 'multi-select-2',
      commonData: {
        title: 'Tap on all the adverbs of frequency.',
        printTitle: 'Underline all the adverbs of frequency.',
        multiSelect: true
      },
      data: [
        `*Sometimes* they come and stay with us. But *mostly* they return to their home the same day. They *rarely* stay.
I *occasionally* play tennis. I don't like it much. But my dad likes it. He plays tennis *daily*.
We *usually* go shopping on Sundays. My brother *never* comes with so. And he *rarely* likes what we bring for him.
I go to school *regularly*. I *rarely* miss my classes. I also love meeting my friends *every day*.
We have exams *annually*. We also have practice tests *monthly* for preparation. *Sometimes* we have *weekly* tests too.
I *always* drink milk in the morning. It is very good for health. We all should drink milk *regularly*.
I *generally* wake up early in the morning. But on weekdays, I *sometimes* take a nap after coming from school.
I was *continuously* watching TV for 1 hour. My mom told me to get up.`,

        `I *rarely* talk to my childhood friend anymore. But we *usually* played together earlier.
I am tired, *yet* will do my homework. I *usually* complete my homework on time. But *sometimes* I forget to.
He *always* helps me. He plays with me *daily*. We also go to school together *every day*.
We have a meeting in the school *monthly*. The teacher discusses our progress with parents. She is *often* nice and *rarely* complains.
How *often* do you watch a movie? I watch one *twice* in a month, *sometimes* only *once*.
*Every* minute counts while writing an exam. We *generally* write slowly and *often* have no time to write all answers.
Jane is *never* late for class. She *always* comes on time. She *rarely* falls sick.
I am *next* in line. *Now* I'll be able to measure my weight. I hope I have gained some.`,

        `He hits the ball really hard. It got lost *twice*. No one will *ever* play with him *again*.
They have *four* cars. *Each* person in the house drives their vehicle. They *rarely* go out in one car.
Ravi *never* tells lie. But *today* he blamed the wrong student. We will *never* trust him *again*.
She missed her bus *again*. As *usual*, her father has to drop her at school. This has become her *daily* thing.
We *generally* search for songs on the internet. But he *often* listens to the radio.
I went to a restaurant last week, but I *seldom* ate at home. I *rarely* eat anything outside.
I'm *never* late for maths class. I'm *always* on time. I practice maths *every day*.
My sister *often* reads a book *weekly*. She loves poetry and novels.`,

        `I *seldom* eat junk food because I know it's not healthy. I eat chips *sometimes* at school.
My dad *rarely* goes to the gym, only *twice* or *thrice* a week.
She *usually* finishes her work early because she is *often* busy with other things.
It *never* snows where I live. So, I have *never* seen snowfall and *never* made a snowman.
Did you *ever* travel to a foreign country? I want to go to America *someday*. It's *always* snowing there in winter.
I *always* study very hard to get good grades. My dad *always* takes me to another city for holidays *each* time I score good marks.
Even though they have to get up *early*, they *rarely* go to bed on time. They *generally* watch TV at night.
The teacher said that she'll clear my doubt *later*. I can come back in *sometime*.`
      ]
    },
    {
      label: 'Classify Adverb Type',
      type: 'classifySentence',
      id: 'classify-2',
      commonData: {
        title: 'Classify the type of adverb present in the below sentence.',
        types: ['Frequency', 'Degree']
      },
      data: [
        [
          `I brush my teeth twice.
Our teacher is always punctual. 
The spider tried again and again to catch the fly. 
He is often late for the Maths class.
I always read comic books.`,

          `We have almost finished our homework.   
Our office is fully furnished. 
This job is quite interesting. 
Her dress was too small for me. 
Latha likes Italy very much.`
        ],
        [
          `I seldom go to the library.
We occasionally eat out.
We often spend weekends with friends.
I usually do the homework after dinner.`,

          `Your dinner is *almost* ready.
Our class teacher has an *extremely* busy schedule.
Our storeroom is *fully* loaded.
This job is *quite* interesting.`
        ]
      ]
    },
    {
      id: 'sort',
      label: 'Adverb of Frequency',
      type: 'sorting',
      data: {
        title:
          'Rearrange the adverbs of frequency from the most probable to the least probable.',
        printTitle:
          'Number the adverbs of frequency from the most probable to the least probable. ',
        text: `Always, Usually, Sometimes, Rarely, Never`
      }
    },
    {
      id: 'fill-up-2',
      label: 'Fill up with Options',
      type: 'fillup',
      commonData: {
        title: `Choose the correct adverb of frequency.`
      },
      data: [
        `We go on a vacation *annually (annual, once)*.
He is *often (offten, twice)* late for class.
We should brush our teeth *twice (two, twise)* in a day.
I *usually (usual, general)* wake up late on holidays.
Ram is *never (not, nor)* late for work.
I *often (more, usual)* travel on weekends.
When do you *usually (almost, utmost)* study?
My dad is late, *yet (but, for)* he'll go to the office.
*Yesterday (Yesternight, Usually)* we had a sports day at school.
I will do my HW *tonight (some night, in the day)*.`,

        `My mom *always (anyways, alway)* gives me lunch.
I am *constantly (constant, most)* thinking about it.
I go to school *daily (usual, frequent)*.
He *generally (general, usual)* eats biscuits with tea.
I'll talk to you *later (late, lately)*.
Come here *now (today, you)*.
I *rarely (lowly, less)* speak to him.
My dad will be home *soon (fast, quick)*.
My aunt is coming to my home *today (to day, this day)*.
*Sometimes (Sometime, Usualy)* we stop to buy candies on our way home.`
      ]
    }
  ]
};
