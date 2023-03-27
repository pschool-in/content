export default {
  id: "parts-of-speech-p3",
  label: "Parts of Speech - Practice 3",
  lockAfter: 3,
  list: [
    {
      id: "match",
      label: "Match the following",
      type: "match",
      lockAfter: 1,
      data: [
        {
          title: "Match words and roles: What is your name?",
          text: `what, pronoun
is, verb
your, adjective
name, noun`,
        },
        {
          title: "Match words and roles: Ramya is singing a beautiful song.",
          text: `Ramya, proper noun
is singing, verb
a beautiful, adjective
song, common noun`,
        },
        {
          title: "Match words and roles: The cat is sleeping under the chair.",
          text: `is, helping verb
sleeping, main verb
under, preposition
chair, object
cat, subject`,
        },
        {
          title: "Match words and roles: My brother came home late.",
          text: `my, pronoun
home, noun
late, adverb`,
        },
        {
          title: "Match words and roles: My cat has big blue eyes.",
          text: `my, pronoun
cat, noun
blue, adjective`,
        },
        {
          title: "Match words and roles: John runs very quickly.",
          text: `John, noun
runs, verb
quickly, adverb`,
        },
        {
          title: "Match words and roles: Can you pick up Dan on your way home?",
          text: `pick, verb
Dan, noun
and, conjunction
on, preposition
your, pronoun`,
        },
        {
          title: "Match words and roles: Is that with all the fees or not?",
          text: `is, verb
that, pronoun
with, preposition
all, adjective
fees, noun
or, conjunction
not, adverb`,
        },
        {
          title: "Match words and roles: Yesterday, we went to the cinema.",
          text: `yesterday, adverb
we, pronoun
went, verb
to, preposition
the, article
cinema, noun`,
        },
        {
          title: "Match words and roles: The old man always walks with a limp.",
          text: `old, adjective
man, noun
always, adverb
walks, verb
with, preposition`,
        },
      ],
    },
    {
      id: "direct-indirect",
      label: "Find my speech - back",
      type: "classifySentence",
      commonData: {
        title: "Identify the parts of speech for the underlined word",
      },
      data: [
        {
          types: [
            {
              name: "Noun",
              text: `The heavy load broke his *back*.
Turn the book over and look at the *back*.
Tap it with the *back* of your knife.`,
            },
            {
              name: "Adjective",
              text: `A dog was sleeping at the front door so he entered through the *back* door.
That chore has been in the *back* of my mind for weeks.
I would like to find a *back* issue of that magazine.`,
            },
            {
              name: "Verb",
              text: `Do not *back* out on your promise.
The train *backed* into the station.`,
            },
            {
              name: "Adverb",
              text: `Go *back* and never come again.
Fear held him *back* from bungee jumping.`,
            },
          ],
        },
        {
          types: [
            {
              name: "Noun",
              text: `Rains come from *above*.`,
            },
            {
              name: "Adjective",
              text: `The *above* mistakes are very common in maths.
Please reply to the *above* address.
Analyse the *above* sentences and correct the errors.`,
            },
            {
              name: "Adverb",
              text: `Please look *above* at the starlight sky.
She stared up at the stars *above*.
The heavens are *above*.`,
            },
            {
              name: "Preposition",
              text: `His dealings are *above* dishonesty.
The birds were flying high *above* the trees.
The moral law is *above* the civil.`,
            },
          ],
        },
        {
          types: [
            {
              name: "Noun",
              text: `An *advance* of five hundred rupees was given.`,
            },
            {
              name: "Adjective",
              text: `The *advance* money has been returned.
He made an *advance* payment on the prior shipment to show good faith
The scouts found a site for an *advance* base.`,
            },
            {
              name: "Verb",
              text: `Five hundred rupees were *advanced* as security.
Merchants often *advance* money on a contract or on goods consigned to them.
She *advanced* to the final stage of the dance competition.`,
            },
          ],
        },
        {
          types: [
            {
              name: "Adjective",
              text: `All this is an *after* thought.
*After* ages they still sing his glory.`,
            },
            {
              name: "Adverb",
              text: `You left and he came soon *after*.
They arrived soon *after* the bus left.`,
            },
            {
              name: "Preposition",
              text: `He takes *after* his father.
The policeman ran *after* the thief.`,
            },
            {
              name: "Conjunction",
              text: `I saw him *after* the class had been over.
We went away *after* they had left.`,
            },
          ],
        },
        {
          types: [
            {
              name: "Noun",
              text: `He lost his *all* for the sake of his beloved.
He lost his *all* in speculation.`,
            },
            {
              name: "Pronoun",
              text: `*All* of us were present in the meeting.
*All* spoke in favor of the accused.`,
            },
            {
              name: "Adjective",
              text: `*All* the boys were present in the meeting.
*All* men are mortal.
The new product is selling well. It was *all* profit and no loss.`,
            },
            {
              name: "Adverb",
              text: ` He was left *all* alone.
He was *all* alone when I saw him yesterday.`,
            },
          ],
        },
        {
          types: [
            {
              name: "Adverb",
              text: ` I have not seen him *before*.
I have seen you *before* hanging around at the cafe next door.`,
            },
            {
              name: "Preposition",
              text: `Will you go there *before* me?
He came *before* the appointed time.`,
            },
            {
              name: "Conjunction",
              text: `I will do it *before* I go.
He went away in a hurry *before* I came home.`,
            },
          ],
        },
        {
          types: [
            {
              name: "Noun",
              text: `Always have regard for your *betters*.
Give place to your *betters*.`,
            },
            {
              name: "Verb",
              text: `*Better* your handwriting.
The boxes he provided me *bettered* the sample.`,
            },
            {
              name: "Adjective",
              text: `This pen is *better* than that.
I think yours is a *better* plan than mine.`,
            },
            {
              name: "Adverb",
              text: `He sings *better* than I.
I know *better* than to trust his empty words.`,
            },
          ],
        },
        {
          types: [
            {
              name: "Noun",
              text: `This is the singer's *best* song.
I did my *best* to win the competition.
I had done my *best* to help you.`,
            },
            {
              name: "Adjective",
              text: ` He is the *best* boy in the class.
He is the *best* runner among us.`,
            },
            {
              name: "Adverb",
              text: `They have played their part *best*.`,
            },
          ],
        },
        {
          types: [
            {
              name: "Verb",
              text: `Barking dogs seldom *bite*.
As soon as you *bite* that sandwich, you'll know how good it is.
These mosquitoes are really *biting* today`,
            },
            {
              name: "Noun",
              text: `The *bite* of a mad dog is dangerous.
The snake *bite* really hurts.
After just one night in the jungle, I was covered with mosquito *bites*.`,
            },
          ],
        },
        {
          types: [
            {
              name: "Noun",
              text: `The *book* is lying on the table.
She opened the *book* to page 37 and began to read aloud.
I have three copies of his first *book*.
Genesis is the first *book* of the Bible.`,
            },
            {
              name: "Adjective",
              text: `Don't be a *book*-worm.`,
            },
            {
              name: "Verb",
              text: `Get your seat *booked* in the train.
I want to *book* a hotel room for tomorrow night.
The police *booked* him for driving too fast.
He was really *booking*, until he passed the speed trap.
The top three students had a bet on which one was going to *book* their intellectual property class.`,
            },
          ],
        },
        {
          types: [
            {
              name: "Adverb",
              text: `You are *but* a child.
Since that day, my mood has changed *but* a little.`,
            },
            {
              name: "Noun",
              text: `It has to be done - no ifs or *buts*.`,
            },
            {
              name: "Pronoun",
              text: `There was none *but* wept.`,
            },
            {
              name: "Preposition",
              text: `All *but* Aditi were present.`,
            },
            {
              name: "Conjunction",
              text: `He ran *but* could not catch the train.
I like everything *but* that blue dress.
I have no choice *but* to leave.
I am not rich *but* poor.
She is very old *but* still energetic.`,
            },
          ],
        },
        {
          types: [
            {
              name: "Noun",
              text: `I am always at your beck and *call*.
I received several phone *calls* today.
I paid a *call* to a dear friend of mine.
I had to yeild to the *call* of the wind.`,
            },
            {
              name: "Verb",
              text: `*Call* in the doctor.
That person is hurt, *call* for help.
We could always *call* on a friend.
This job *calls* for patience.
Why didn't you *call* me in the morning?`,
            },
            {
              name: "Adjective",
              text: `A *call* bell is fitted to the gate.`,
            },
          ],
        },
        {
          types: [
            {
              name: "Verb",
              text: `The school is *closed* today.
*Close* the door behind you when you leave.
The runner in second place is *closing* the gap on the leader.
He has *closed* the last two games for his team.`,
            },
            {
              name: "Adverb",
              text: `He sat *close* to me.`,
            },
            {
              name: "Noun",
              text: `At the *close* of the school, we played games.
We owe them our thanks for bringing the project to a successful *close*.`,
            },
            {
              name: "Adjective",
              text: `Menu is my *close* friend.
Is your house *close* by?`,
            },
          ],
        },
        {
          types: [
            {
              name: "Preposition",
              text: `He knows nothing *about* me.
I misunderstood her knowing little *about* her health issues.`,
            },
            {
              name: "Adverb",
              text: `She is too tired to move *about*.
I was wandering *about* from house to house looking for someone who will adopt the stay pups.
He took his time to look *about*`,
            },
          ],
        },
        {
          types: [
            {
              name: "Noun",
              text: `The Hindus burn their *dead*.
Have respect for the *dead*.
I found myself lost in an unknown street at the *dead* of night.`,
            },
            {
              name: "Adjective",
              text: `I saw a *dead* body.
She stood with a *dead* face and limp arms, unresponsive to my plea.
Okay, the circuit's *dead*. Go ahead and cut the wire.
That monitor is *dead*, don't bother hooking it up.
Once the ball crosses the foul line, it's *dead*.`,
            },
            {
              name: "Adverb",
              text: `I am *dead* tired.
He hit the target *dead* in the center.`,
            },
          ],
        },
        {
          types: [
            {
              name: "Noun",
              text: `Many a ship has sunk in the *deep* sea.
Many creatures of the *deep* are still to be discovered.
Russell is a safe pair of hand in the *deep*.`,
            },
            {
              name: "Adjective",
              text: `It is a *deep* sea.
I just meant to help out a little, but now I'm *deep* into it.
That cyclist's *deep* chest allows him to draw more air.
That's a very *deep* shade of blue.
He is feilding at *deep* mis wicket.
I have never treked this *deep* into the forest.`,
            },
            {
              name: "Adverb",
              text: `Go *deep* into the sea and you will find a gem.`,
            },
          ],
        },
        {
          types: [
            {
              name: "Noun",
              text: `The old man has seen many ups and *downs* in his life.`,
            },
            {
              name: "Verb",
              text: `Knock this naughty boy *down*.
The strom *downed* several old trees along the highway.`,
            },
            {
              name: "Adjective",
              text: `Are you waiting for the *down* train?
Two *down* and three more to go. I will be probably done by noon.`,
            },
            {
              name: "Adverb",
              text: `Sit *down* please.
The cat jumped *down* from the table.
His house is farther *down* the road.
The computer has been shut *down*`,
            },
            {
              name: "Preposition",
              text: `The ball rolled *down* the hill.`,
            },
          ],
        },
        {
          types: [
            {
              name: "Noun",
              text: `*Enough* has already been done for you.`,
            },
            {
              name: "Adjective",
              text: `He has *enough* money in his pocket.`,
            },
            {
              name: "Determiner",
              text: `I have already had *enough* coffee today.`,
            },
            {
              name: "Pronoun",
              text: `I have *enough* energy to keep me going.`,
            },
            {
              name: "Interjection",
              text: `*Enough*! I'll have no more of your nonsense.`,
            },
            {
              name: "Adverb",
              text: `We have played *enough*.
I cannot run fast *enough* to catch up to them.`,
            },
          ],
        },
        {
          types: [
            {
              name: "Verb",
              text: `First *even* the ground and then play.
We need to *even* this playing field, the west goal is too low.`,
            },
            {
              name: "Adjective",
              text: `Two and four are *even* numbers.
Clear out those rocks. The surface must be *even*.
Despite her fear, she spoke in an *even* voice.
The distribution of food must be *even* among students.
Four, fourteen and fourty are *even* numbers.`,
            },
            {
              name: "Adverb",
              text: `He did not *even* look at me.
I fulfilled my instructions *even* as I had promised.
*Even* a blind squirrel finds an acorn sometimes.
I was strong before, but now I am *even* stronger.`,
            },
          ],
        },
        {
          types: [
            {
              name: "Verb",
              text: `The tribesmen are *nearing* the city.`,
            },
            {
              name: "Adjective",
              text: `He is my *near* relative.
The end of the street is *near*.
The two words are *near* synonyms.`,
            },
            {
              name: "Adverb",
              text: `Come *near*, please.
I am *near* sighted.`,
            },
            {
              name: "Preposition",
              text: `He lives *near* our house.
The voyage was *near* completion.`,
            },
          ],
        },
      ],
    },
  ],
};
