export default {
  id: 'adverb-3',
  label: 'Adverb-3',
  pdf: '',
  list: [
    {
      label: 'Adverb of Manners',
      type: 'passage',
      id: 'adverb-3-reading',
      data: {
        title: 'Adverb of Manners',
        text: `We know that adverbs tell us about the verb, adjective or another adverb. Adverbs of manner tells us how an action is done. In simple words, it answers the question 'how'. These adverbs generally end with '-ly'. 
Some examples are:
1. The turtle moves slowly.
2. The dog runs quickly.
3. The girl walked smartly.
We can also convert some adjectives into adverbs by simply adding '-ly' in the end. For example;
1. safe- safely
2. gentle- gently
3. possible- possibly
4. correct- correctly
5. sad- sadly
6. angry- angrily
7. happy- happily
Some more examples of adverb of manners are:
1. Richa completed her homework independently.
2. The old lady feeds kindly to the street animals.
3. The teacher clearly explained the topic.`
      }
    },
    {
      type: 'group',
      label: 'Drag and Drop',
      id: 'drag-and-drop',
      commonData: {
        title: 'Identify which are adverbs of manner and which are adjectives.',
        types: ['Adjective', 'Adverb']
      },
      data: [
        [`Quick, Polite, Careful, Hard`, `Loudly, Rudely, Softly, Quietly`],
        [`Noisy, Sudden, Good, Fast`, `Happily, Slowly, Badly, Nicely`],
        [`Smart, Loud, Big, Huge`, `Really, Suddenly, Tightly, Tearfully`],
        [
          `Red, Brown, Green, Yellow`,
          `Heavily, Tightly, Attentively, Hurriedly`
        ],
        [
          `Soft, Beautiful, Normal, Personal`,
          `Softly, Beautifully, Normally, Personally`
        ]
      ]
    },
    {
      type: 'match',
      label: 'Match the following',
      id: 'match',
      commonData: {
        title: 'Match the adjectives and their adverbs.'
      },
      data: [
        `Bad, Badly
Noisy, Noisily
Beautiful, Beautifully
Easy, Easily
Careful, Carefully`,

        `Quick, Quickly
Tight, Tightly
Quiet, Quietly
Near, Nearly
Good, Well`,

        `Greedy, Greedily
Gentle, Gently
Fluent, Fluently
Hard, Hardly
Fast, Fast`,

        `Rapid, Rapidly
Brief, Briefly
Careless, Carelessly
Loud, Loudly
Most, Mostly`,

        `Eager, Eagerly
Awkward, Awkwardly
Bright, Brightly
Busy, Busily
Clear, Clearly`
      ]
    },
    {
      id: 'fill-up',
      label: 'Fill up with options',
      type: 'fillup',
      commonData: {
        title: `Fill in the blank with the correct option.`
      },
      data: [
        `They dance *beautifully (beautiful, beautifuly)*.
Richa doesn't work *hard (hardly, hardily)*.
She knows the road *well (good, goodly)*.
We have to get up *early (earlily, soon)*.
Our teacher arrives *late (lately, soonly)* for class.
He ate his meal *quickly (quick, quickily)*.
He is very *talented (talent, talents)*.
They missed the bus, *unfortunately (unfortunate, fortunately)*.
They waited *patiently (patient, patience)* until 1 pm.
She tried on her new dress *happily (happyly, happy)*.`,

        `He drives too *fast (well, fastly)*.
She speaks very *quietly (quiet, quitely)*.
He plays the guitar *terribly (terrible, terribily)*.
She walked *happily (happy, happly)* to the school.
He planned the trip *nicely (nice, nicily)*.
She spoke *softly (softness, soft)*.
James shouted *loudly (loud, louds)* to call her.
He swims *well (good, medium)*.
She *angrily (angryly, angry)* shut the door.
She is very *greedy (greedily, greed)*.`
      ]
    },
    {
      type: 'rightOne',
      label: 'Correct Spelling',
      id: 'spelling',
      commonData: {
        title: 'Identify the correct spelling for these adverb of manners.',
        noCaps: true
      },
      data: [
        `Safely, Safily
Noisily, Noisly
Godly, Godily
Angrily, Angrys
Sadly, Sads
Hopefully, Hopefuly
Gently, Gentley
Possibly, Possibley
Cruelly, Cruely
Doubtfully, Doubtfuly`,

        `Eagerly, Eagers
Easily, Easyly
Equally, Equaly
Exactly, Exactily
Faithfully, Faithfuley
Foolishly, Foolishily
Gladly, Gladily
Honestly, Honestty
Innocently, Inocently
Joyously, Joyosly`
      ]
    },
    {
      label: 'Right match',
      id: 'complete',
      type: 'completePuzzle',
      commonData: {
        type: 'rightOpen',
        title: 'Identify the correct adverb of manner for these adjectives.',
        printTitle: 'Fill up with the right option.',
        fontSize: '1.5rem'
      },
      data: [
        `Smart, Smartly, Smartily
  Possible, Possibly, Possibley
  Pleasant, Pleasantly, Pleasantary
  Happy, Happily, Happilie
  Bad, Badly, Badley
  Quick, Quickly, Quickey
  Slow, Slowly, Slowey
  Fast, Fastly, Fastily
  Gentle, Gently, Gentley
  Correct, Correctly, Corrects`,

        `Kind, Kindly, Kindily
  Lazy, Lazily, Lazyly
  Neat, Neatly, Neatily
  Nervous, Nervously, Nervosly
  Noisy, Noisily, Noisyly
  Open, Openly, Openlly
  Pain, Painfully, Painfuly
  Powerful, Powerfully, Powerfuly
  Rapid, Rapidly, Rapidlly
  Rare, Rarely, Rarelly`
      ]
    },
      {
        type: 'selectWord',
        label: 'Select the adverb of manners',
        id: 'select',
        commonData: {
            title: 'Tap on the adverb of manners in the following sentences.',
            multiSelect: true
          },
        data: [
        `He had a meeting. So, he *quickly* drank the water and went to the office *hurriedly*.
        Someone *suddenly* cracked a joke. She did not understand but laughed *nervously*.
        She is reading *carefully*. She's trying to complete her lessons *quickly*. She has a test tomorrow. 
        I was crossing the street and my mom was *anxiously* looking at me. I *happily* waved at her after crossing.
        We had to move the sofa across the room. So we moved it *quickly*, but *awkwardly* in front of the guests.
        He *calmly* explained the lesson to me. I don't have any doubts now. I will *calmly* write the test today.
        He is *eagerly* waiting for his job letter. He has worked very hard for this.
        My teacher has *faithfully* worked for my school. She will be awarded and will continue to work *respectfully*.`,
        
        `I was at the railway station yesterday. The announcement asked the people to move away from the tracks. Then a bullet train passed by very *quickly*.
        There were many children in the park. They were playing *happily*. After 7pm, they *sadly* went to their homes.
        We are going to the jungle. We may see many wild animals there. My mom asked my dad to drive *carefully*.
        I am at a party with my family. My mom asked me to talk to everyone *politely* and *respectfully*.
        Stop talking so *noisily* in the library. It might disturb other readers. The sounds echo *loudly* in the hall.
        My father can drive the car *easily*. But he yells *angrily* when the traffic irritates him.
        Our school *suddenly* announced a trip. We all got very excited. Everyone started making plans *excitedly*.
        Sheena was talking *loudly* on the phone. I asked her to speak *slowly* because my mom was sleeping.`,

        `Raj fell down. We helped him to sit on the chair *comfortably*. I ran *quickly* and told my teacher.
        I had a fight with my friend. We were shouting *loudly*. His mom told us to talk *nicely* with each other.
        I was *hardly* able to focus on my homework. Then my friend explained it to me very *easily*. I can *simply* solve it now.
        She was dressed *smartly* for the party. She also danced *beautifully*. Everyone clapped and praised her.
        He scored well in exams. He told his parents *proudly*. The decided to celebrate by going to a restaurant.
        The teacher checked the answers *carefully*. I answered many questions *correctly* and scored well.
        I *energetically* did my excercise in the morning. I was feeling fresh all day long. I did all my work *efficiently*.
        The teacher yelled at us *angrily*. The class *immediately* started doing their homework.`,

        `I *gladly* told my parents that I got selected in the sports team. They *excitedly* hugged me. My mom said she'll make pizza for me.
        I got hurt. So I *rapidly* put a gel on the wound. I am doing my tasks *carefully* now.
        He lied to everyone. When we asked him, he *foolishly* denied. So, everyone decided not to talk to him.
        My dad tried to give him instructions *calmly*. But he was driving *carelessly*. We were very scared.
        Although I was explaining very *politely*, Shina *rudely* answered back. I will not talk to her unless she *respectfully* apologizes.
        The man in the street was *badly* hurt. I *quickly* called the hosptial. The man was soon treated *carefully* and *efficiently*.
        He ate all the chocolate *greedily*. But my friend *gently* tap me on my shoulder and *politely* offered me his cake.
        Harsh *patiently* waited for his mother to arrive. They *happily* headed home together and had lunch.`       
      ]
    },
  ]
};
