export default {
  id: 'adverb-4',
  label: 'Adverb of Place, Time and Manner',
  pdf: '',
  list: [
    {
      label: 'Types of Adverb',
      type: 'passage',
      id: 'passage',
      data: {
        title: 'Types of Adverb',
        text: [
          `Adverbs are classified based on 'what type' of information it adds.
# Adverb of Manner
It tells 'how' something happens.`,
          {
            type: 'html',
            text: `Eg:<br>
I <b>strongly</b> agree with you.<br>
He jumped <b>high</b> in the air.`
          },
          `# Adverb of Time
It tells 'when' something happens.`,
          {
            type: 'html',
            text: `Eg:<br>
I will see you <b>tomorrow</b>.<br>
I need some water <b>later</b>.`
          },
          `# Adverb of Place
It tells 'where' something happens.`,
          {
            type: 'html',
            text: `Eg:<br>
Please come <b>in</b>.<br>
The kids are <b>downstairs</b>.`
          }
        ]
      }
    },
    {
      type: 'group',
      label: 'Classify the Adverbs',
      id: 'group',
      commonData: {
        title: 'Classify the given Adverbs',
        types: ['Adverb of Time', 'Adverb of Place']
      },
      data: [
        [`Yesterday, Still, While, Soon`, `North, South, Around, Up`],
        [`Tomorrow, Last week, When, Hourly`, `Behind, Above, Below, East`]
      ]
    },
    {
      label: 'Identify Adverb Type',
      type: 'classifySentence',
      id: 'classify',
      commonData: {
        title: 'Identify the type of adverb present in the below sentence.',
        types: ['Manner', 'Time', 'Place']
      },
      data: [
        [
          `Anu swims well. 
Hari ran quickly. 
Sheela spoke softly.`,

          `We must go now.
I will call you later.
The fight is not over yet. 
The train is coming late.`,

          `Henry walked towards the car. 
My son ran towards me. 
The balloon went up.`
        ],
        [
          `He always keeps himself busy.
The child ran towards his mother happily.
Gopi calmly explained his point of view.`,

          ` Pooja forgot her lunch yesterday.
Rohan decided to leave immediately.
You must reach there by tomorrow.`,

          ` Water always flows downhill.
She took the child outside.
Maya looked upwards to the sky.`
        ],
        [
          `They speak English fluently.
The tortoise moves slowly.
He answered all questions correctly.`,

          `Is Kamala still sleeping?
We have holiday tomorrow.
I am happy today.`,

          `The balloon drifted upwards.
My uncle is standing nearby.
Please come forward and answer.`
        ]
      ]
    },
    {
      id: 'fill-up',
      label: 'Fill up with Options',
      type: 'fillup',
      commonData: {
        title: `Fill in the blanks.`
      },
      data: [
        `I *really (very)* enjoyed the ride.
She *never (so)* completes her homework on time.
He *almost (utmost)* gave up.
Richa danced *extremely (politely)* well on the stage.
That book is *very (never)* nice.
The tea is *extremely (so)* hot.
This book is *quite (quiet)* interesting.
He was *just (only)* leaving.
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
      label: 'Select All Adverbs of Manners',
      id: 'multi-select-word',
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
My teacher has *faithfully* worked for my school. She will be awarded and will continue to work *respectfully*.
Although I was explaining very *politely*, Shina *rudely* answered back. I will not talk to her unless she *respectfully* apologizes.
The man in the street was *badly* hurt. I *quickly* called the hospital. The man was soon treated *carefully* and *efficiently*.
He ate all the chocolate *greedily*. But my friend *gently* tapped me on my shoulder and *politely* offered me his cake.`,

        `I was at the railway station yesterday. The announcement asked the people to move away from the tracks. Then a bullet train passed by very *quickly*.
There were many children in the park. They were playing *happily*. After 7 pm, they *sadly* went to their homes.
We are going to the jungle. We may see many wild animals there. My mom asked my dad to drive *carefully*.
I am at a party with my family. My mom asked me to talk to everyone *politely* and *respectfully*.
Stop talking so *noisily* in the library. It might disturb other readers. The sounds echo *loudly* in the hall.
My father can drive the car *easily*. But he yells *angrily* when the traffic irritates him.
Our school *suddenly* announced a trip. We all got very excited. Everyone started making plans *excitedly*.
Sheena was talking *loudly* on the phone. I asked her to speak *slowly* because my mom was sleeping.
He lied to everyone. When we asked him, he *foolishly* denied it. So, everyone decided not to talk to him.
My dad tried to give him instructions *calmly*. But he was driving *carelessly*. We were very scared.
Harsh *patiently* waited for his mother to arrive. They *happily* headed home together and had lunch.`,

        `Raj fell down. We helped him to sit on the chair *comfortably*. I ran *quickly* and told my teacher.
I had a fight with my friend. We were shouting *loudly*. His mom told us to talk *nicely* with each other.
I was *hardly* able to focus on my homework. Then my friend explained it to me very *easily*. I can *simply* solve it now.
She was dressed *smartly* for the party. She also danced *beautifully*. Everyone clapped and praised her.
He scored well in exams. He told his parents *proudly*. They decided to celebrate by going to a restaurant.
The teacher checked the answers *carefully*. I answered many questions *correctly* and scored well.
I *energetically* did my exercise in the morning. I was feeling fresh all day long. I did all my work *efficiently*.
The teacher yelled at us *angrily*. The class *immediately* started doing their homework.
I *gladly* told my parents that I got selected for the sports team. They *excitedly* hugged me. My mom said she'll make pizza for me.
I got hurt. So I *rapidly* put a gel on the wound. I am doing my tasks *carefully* now.`,

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
    {
      id: 'fill-up-2',
      label: 'Fill up with Options',
      type: 'fillup',
      commonData: {
        title: `Fill in the blanks.`
      },
      data: [
        `The bushes are in *front (behind)* of the house.
The flowers are *behind (between)* the bench.
The client is *still (never)* waiting for the meeting.
The entry is *through* the window.
Do you take the bus *everyday (never)*?
Did you submit your project *yet (still)*?
We go to a restaurant *weekly (once)*.
Monkeys climb on *top (bottom)* of the tree.
There are lots of plants *around (round)* us.
Are you coming *tomorrow (yesterday)*?`,

        `The line is moving *forward (foreword)*.
I'll talk to you *later (latter)*.
I kept my box *somewhere (somehow)* in the house.
I went to Mumbai for *two (too)* weeks on a vacation.
The bees were *everywhere (somewhat)* on the farm.
She goes for a regular check-up *every (last)* month.
Look for your pen *behind (above)* the pot.
We have to submit our report *daily (days)*.
I posted a letter *in (on)* the mailbox.
She stays with her grandma *all (few)* days.`,

        `He kept on lecturing us for *hours (hour)*.
She lives *down (under)* the road.
She went to the church *yesterday (tomorrow)*.
*Tomorrow (Yesterday)*, I will clean my house.
She visits her grandparents *weekly (week)*.
Richa completed her homework *independently (independence, freedom)* .
The girl walked *smartly (smart, confidence)*.
The old lady feeds *kindly (kind, gentle)* to the street animals.
The turtle moves *slowly (slow, fast)*.
The teacher *clearly (clear, elaborate)* explained the topic.
The dog runs *quickly (quick, slowly)*.`
      ]
    },
    {
      type: 'selectWord',
      label: 'Select all Adverbs of Place',
      id: 'multi-select-word-2',
      commonData: {
        title: 'Select all Adverbs in the below sentences.',
        multiSelect: true
      },
      data: [
        `The cat is *under* the sofa. It went there *when* it was time to bath.
I will clean my house *tomorrow*. I am very tired *now*.
The children are playing *outside*. They have been playing *since* evening.
I am studying in this school *since* fourth grade. The school is *in* the city.
We rowed the boat towards *north*, *where* the waves were not high.
She came *running* to me *when* she saw a dog. I laughed.
I had my lunch over *there* *yesterday*. I will eat *here* *today*.
He *never* drinks milk. His mom sends him *at* my house. He drinks it with me.
We are meeting *behind* the school *next week*. We will play cricket *there*.
*Since* she moved *across* the street, we have become friends. We play *in* the park *every day*.
The car is moving *backwards*. I will move aside *when* it will come closer.
I *always* eat an apple *in* the kitchen. I go to the school *afterwards*.`,

        `I met Ram *yesterday*. I came to know that he lives *across* the street.
I completed my homework *last night*. I won't be punished *in* the school today.
She is going *towards* the library. But it is closed *now*.
Do you know *where* does he live? I need my book by *tonight*.
I am taking my dog for a walk *now*. It loves to go *near* the park.
I will be *here* *tomorrow* also. We can meet *here* only.
My sister likes to play *indoor* games. But she went to play cricket *yesterday* evening.
I will go to the school *next week*. I am *overseas* *right now*.
The clouds are *up* *in* the sky. It will probably rain *tonight*.
We looked *around* but we couldn't find the dog. It may be sleeping.
My brother *never* helps me. He is always *at* his friend's house.
*Sometimes*, my Dad comes home early. Then we walk *around* the street at night.`
      ]
    }
  ]
};
