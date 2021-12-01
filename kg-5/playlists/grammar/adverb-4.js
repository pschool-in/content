export default {
  id: 'adverb-4',
  label: 'Adverb-4',
  pdf: '',
  list: [
    {
      label: 'Adverb of degree',
      type: 'passage',
      id: 'adverb-of-degree',
      data: {
        title: 'Adverb of degree',
        text: `Adverb of degree tells us to what extent the action has been done. In simple words, it answers the question 'how much?'
For example:
The girl was very beautiful.
In this sentence, the word very tells us how much beautiful is the girl.
More examples are:
1. Ram can run so quickly.
2. I really enjoyed the ride.
Other common adverbs of degree are almost, quite, nearly, extremely, too, just, enough, hardly, almost, etc.
There are three types of adverb of degrees:
1. Positive
"The toy plane is big."
This sentence talks about the toy plane. Here, the toy plane is not compared to anything else. Therefore, big is a positive degree of comparison.
2. Comparative
"The doll is bigger than the plane."
In this sentence, the doll is compared to a plane. Therefore, faster is the comparative degree of comparison.
3. Superlative
"The teddy bear is the biggest of all."
In this sentence, the teddy bear, doll and toy plane are compared with each other. Teddy bear is superior to all. Therefore, biggest is the superlative degree of comparison.`
      }
    },
    {
      label: 'Classify',
      type: 'classifySentence',
      id: 'classify',
      commonData: {
        title: `Identify if these adverbs are positive, comparative or superlative.`,
        types: ['Positive', 'Comparative', 'Superlative']
      },
      data: [
        [
          `Big
            Happy
            Quick`,

          `Smaller
            Quicker
            Faster`,

          `Happiest
             Bravest
             Biggest`
        ],
        [
          `Tall
             Good
             Pretty`,

          `Better
             Heavier
             Taller`,

          `Best
             Prettiest
             Bravest`
        ],
        [
          `Hard
             Wide
             Suddenly`,

          `More carefully
             Worse
             More justly`,

          `Most carefully
             Most justly
             Longest`
        ],
        [
          `Fast
            Carefully
            Justly`,

          `Harder
            More suddenly
            Louder`,

          `Widest
            Fastest
            Worst`
        ],
        [
          `Badly
             Loud
             Long`,

          `Wider
            Faster
            Longer`,

          `Hardest
            Most suddenly
            Loudest`
        ]
      ]
    },
    {
      label: 'True or False',
      id: 'truefalse',
      type: 'classifySentence',
      commonData: {
        title: 'State whether the following statements are true or false.',
        types: ['True', 'False']
      },
      data: [
        [
          `Superlative degree of adverb means that the object is superior (on top).
            Comparative degree talks about comparison between two words.`,

          `A positive degree talks about positive qualities only.
            All adverbs of degree have the same meaning.`
        ],
        [
          `Adverb of degree answers the question "how much."
            'Very' is an adverb of degree.`,

          `Adverb of degree answers the question "how."
            'Extremely' is an adverb of manner.`
        ]
      ]
    },
    {
      id: 'fill-up',
      label: 'Fill up with options',
      type: 'fillup',
      commonData: {
        title: `Tap on each blank for options.`
      },
      data: [
        `I *really (very)* enjoyed the ride.
She *never (so)* completes her homework on time.
He *almost (utmost)* gave up.
Richa danced *extremely (politely)* well on the stage.
That book is *very (never)* nice.
The tea is *extremely (so)* hot.
This book is *quite (quiet)* interesting.
He was *jusy (only)* leaving.
She has *almost (very)* completed her HW.
You are walking *fast (almost)* enough.`,

        `You *hardly (smartly)* tried.
He is walking *too (much)* slowly.
She has *almost (utmost)* finished her work.
You are running fast *enough (much)*.
You are walking *very (much)* slowly.
The chocolates are *absolutely (many)* delicious.
It *rarely (most)* snows in North India.
My teacher explains *extremely (nicely)* well.
I *almost (utmost)* dropped the pen.
He danced *wonderfully (wonderful)*.`
      ]
    },
    {
      type: 'selectWord',
      label: 'Select the Word',
      id: 'select-word',
      commonData: {
        title: 'Tap on the adverb of degree in each sentence.'
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
      label: 'Select the adverbs of degree',
      id: 'multi-select-adverb',
      commonData: {
        title: 'Tap on all the adverb of degrees.',
        multiSelect: true
      },
      data: [
        `She was *considerably* sick. Yet she *bravely* appeared in the exam. Everone praised her *a lot*.
She gained a lot of weight *enormously*. She was *very* thin last year. And she got *very* fat this year.
The guests were *pretty* loud. I could *hardly* study. So I decided to do it later.
The teacher *completely* agreed with my answer. I was *extremely* happy. My enemies got *very* jealous.
I was *immensely* tired after the programme. My mom made *so* much food. But I was *quite* tired so I slept.
That man *somewhat* looked like my uncle. I *almost* got confused. Then I realised he was *just* similar to him.
We live in the same street and go to the same school. But, I *barely* talk to him. He's *quite* irritating.
She made fun of me. I am *deeply* hurt. She is *very* bad and rude.She *almost* made me cry.`,

        `It's *very* cold outside. I would *rather* stay inside a blanket. It is *extremely* cold.
I like this book *a lot*. I *really* admire the author. I will now read *all* the books he has written.
Our teacher decided to teach us even in the lunch break. And now we all are *literally* starving.
The artist *minutely* observed my painting. He said it was good *enough*. I felt *immense* joy.
I *strongly* believe that we should obey our elder. It is because they know about *so* many things.
My friend *highly* recommended me this book. I *just* finished reading. I think it is *very* interesting.
The teacher *thoroughly* checked my answer sheet. I answered *almost* all the questions correctly.
I became *slightly* uncomfortable when the guests came. I am *simply* shy. So, I left within 5 minutes.`,

        `He was *almost* finished with his work. But the teacher gave him *a lot* more to do.
The milk was *completely* frozen because it was kept in the freezer. I *quickly* put it outside.
The teacher was *terribly* rude today. She gave us *so* much homework that it is more than *enough* for the week.
The cake was *absolutely* delicious. But I *barely* ate it because I ate *so* many french fries. I like them *very* much.
I feel *incredibly* lucky. My exams are cancelled. I can play all day long.
I *just* finished my work. Now I *hardly* have any energy left. I will *rather* sleep than watching TV.
The movie was *quite* interesting. We *deeply* discussed about it. We liked it *very* much.
The water was *extremely* cold. We should prefer to drink warm water. It is *very* good for our health.`,

        `Tarun walks *extremely* fast. But I walk *quite* slowly. I *barely* match his pace.
It is *nearly* impossible for me to attend the party. I am going with my family to a *very* popular restaurant.
When you try something new, you should *really* look at the instructions first. The are *immensely* useful.
Rahul is *rather* quite. But his brother is *pretty* talkative. He is also *very* outgoing.
Your answers are *slightly* wrong. You should revise them *thoroughly* before submitting.
He performed *remarkably* well this year. The teachers are *extremely* proud of him. He *really* did *very* well.
Are these pens *enough*? Do you think they are *too* many? Shall I return some of these?
I am not *entirely* sure what homework the teacher gave us. I was *slightly* distracted in the class.`
      ]
    }
  ]
};
