export default {
  id: "misc-grammar-6-1",
  label: "Misc Grammar 6",
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
              text: `The heavy load broke his *back*.`,
            },
            {
              name: "Adjective",
              text: `He entered through the *back* door.`,
            },
            {
              name: "Verb",
              text: `Do not *back* out on your promise.`,
            },
            {
              name: "Adverb",
              text: `Go *back* and never come again.`,
            },
            {
              name: "Noun",
              text: `Rains come from *above*.`,
            },
            {
              name: "Adjective",
              text: `The *above* mistakes are very common.`,
            },
            {
              name: "Adverb",
              text: `Please look *above*.`,
            },
            {
              name: "Preposition",
              text: `His dealings are *above* dishonesty`,
            },
            {
              name: "Noun",
              text: `An *advance* of five hundred rupees was given.`,
            },
            {
              name: "Adjective",
              text: `The *advance* money has been returned.`,
            },
            {
              name: "Verb",
              text: `Five hundred rupees were *advanced* as security.`,
            },
            {
              name: "Adjective",
              text: `All this is an *after* thought.`,
            },
            {
              name: "Adverb",
              text: `You left and he came soon *after*.`,
            },
            {
              name: "Adjective",
              text: `He entered through the *back* door.`,
            },
            {
              name: "Preposition",
              text: `The policeman ran *after* the chief.`,
            },
            {
              name: "Conjunction",
              text: `I saw him *after* the class had been over.`,
            },
            {
              name: "Noun",
              text: `He lost his *all* for the sake of his beloved.`,
            },
            {
              name: "Pronoun",
              text: `*All* of us were present in the meeting.`,
            },
            {
              name: "Adjective",
              text: `*All* the boys were present in the meeting.`,
            },
            {
              name: "Adverb",
              text: ` He was left *all* alone.`,
            },
            {
              name: "Adverb",
              text: ` I have not seen him *before*.`,
            },
            {
              name: "Preposition",
              text: `Will you go there *before* me?`,
            },
            {
              name: "Conjunction",
              text: `I will do it *before* I go.`,
            },
            {
              name: "Noun",
              text: `Always have a regard for your *betters*.`,
            },
            {
              name: "Verb",
              text: `*Better* your handwriting.`,
            },
            {
              name: "Adjective",
              text: `This pen is *better* than that.`,
            },
            {
              name: "Adverb",
              text: `He sings *better* than I.`,
            },
            {
              name: "Noun",
              text: `This is the singer's *best* song.`,
            },
            {
              name: "Adjective",
              text: ` He is the *best* boy in the class.`,
            },
            {
              name: "Adverb",
              text: `They have played their part *best*.`,
            },
            {
              name: "Verb",
              text: `Barking dogs seldom *bite*.`,
            },
            {
              name: "Noun",
              text: `The *bite* of a mad dog is dangerous.`,
            },
            {
              name: "Noun",
              text: `The *book* is lying on the table.`,
            },
            {
              name: "Adjective",
              text: `Don't be a *book*-worm.`,
            },
            {
              name: "Verb",
              text: `Get your seat *booked* in the train.`,
            },
            {
              name: "Adverb",
              text: `You are *but* a child.`,
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
              text: `He ran *but* could not catch the train.`,
            },
            {
              name: "Noun",
              text: `I am always at your beck and *call*.`,
            },
            {
              name: "Verb",
              text: `*Call* in the doctor.`,
            },
            {
              name: "Adjective",
              text: `A *call* bell is fitted to the gate.`,
            },
            {
              name: "Verb",
              text: `The school is *closed* today`,
            },
            {
              name: "Adverb",
              text: `He sat *close* to me.`,
            },
            {
              name: "Noun",
              text: `At the *close* of the school, we played games.`,
            },
            {
              name: "Adjective",
              text: `Menu is my *close* friend.`,
            },
            {
              name: "Preposition",
              text: `He knows nothing *about* me.`,
            },
            {
              name: "Adverb",
              text: `She is too tired to move *about*.`,
            },
            {
              name: "Noun",
              text: `The Hindus burn their *dead*.`,
            },
            {
              name: "Adjective",
              text: `I saw a *dead* body.`,
            },
            {
              name: "Adverb",
              text: `I am *dead* tired.`,
            },
            {
              name: "Noun",
              text: `Many a ship has sunk in the *deep* sea.`,
            },
            {
              name: "Adjective",
              text: `It is a *deep* sea.`,
            },
            {
              name: "Adverb",
              text: `Go *deep* into the sea and you will find a gem.`,
            },
            {
              name: "Noun",
              text: `The old man has seen many ups and *downs* in his life.`,
            },
            {
              name: "Verb",
              text: `Knock this naughty boy *down*.`,
            },
            {
              name: "Adjective",
              text: `Are you waiting for the *down* train?`,
            },
            {
              name: "Adverb",
              text: `Sit *down* please.`,
            },
            {
              name: "Noun",
              text: `*Enough* has already been done for you.`,
            },
            {
              name: "Adjective",
              text: `He has *enough* money in his pocket.`,
            },
            {
              name: "Adverb",
              text: `We have played *enough*.`,
            },
            {
              name: "Verb",
              text: `First *even* the ground and then play.`,
            },
            {
              name: "Adjective",
              text: `Two and four are *even* numbers.`,
            },
            {
              name: "Adverb",
              text: `He did not *even* look at me.`,
            },
            {
              name: "Noun",
              text: `The *evil* that man do lives after them.`,
            },
            {
              name: "Adjective",
              text: `He has fallen on *evil* days.`,
            },
            {
              name: "Verb",
              text: `The poor are *excepted* from this tax.`,
            },
            {
              name: "Preposition",
              text: `All *except* Ravi were present.`,
            },
            {
              name: "Conjunction",
              text: `I shall help you, *except* that I do not give you my word.`,
            },
            {
              name: "Noun",
              text: ` An *express* runs from Amritsar to Delhi.`,
            },
            {
              name: "Verb",
              text: `I have *expressed* my views`,
            },
            {
              name: "Adjective",
              text: `I will catch the *express* train.`,
            },
            {
              name: "Adverb",
              text: `The letter was sent *express*.`,
            },
            {
              name: "Noun",
              text: `The *fair* is in full swing.`,
            },
            {
              name: "Adjective",
              text: `I need *fair* deal and no favour.`,
            },
            {
              name: "Adverb",
              text: `We should play *fair*.`,
            },
            {
              name: "Noun",
              text: `He keeps *fast* on every Sunday.`,
            },
            {
              name: "Verb",
              text: `I can *fast* for two days at a stretch.`,
            },
            {
              name: "Adjective",
              text: `He travelled by a *fast* train.`,
            },
            {
              name: "Adverb",
              text: `He ran *fast* and caught the train.`,
            },
            {
              name: "Noun",
              text: ` I paid my *fine*.`,
            },
            {
              name: "Verb",
              text: `He is *fined* for his absence.`,
            },
            {
              name: "Adjective",
              text: `What a *fine* weather it is!`,
            },
            {
              name: "Adverb",
              text: `Please tune *fine*.`,
            },
            {
              name: "Noun",
              text: `There is no *fire* in the hearth.`,
            },
            {
              name: "Verb",
              text: `The gun was *fired*.`,
            },
            {
              name: "Adjective",
              text: `Did you enjoy the *fire*-works last night.`,
            },
            {
              name: "Verb",
              text: `At last he *freed* himself from the cruel moneylender.`,
            },
            {
              name: "Adjective",
              text: `I have a *free* pass for the show.`,
            },
            {
              name: "Adverb",
              text: `The bird was set *free*.`,
            },
            {
              name: "Noun",
              text: `Whatever God does, He does for our *good*.`,
            },
            {
              name: "Adjective",
              text: `He is a *good* boy.`,
            },
            {
              name: "Adverb",
              text: `The boy is doing *good*.`,
            },
            {
              name: "Noun",
              text: `Never do things by *halves*.`,
            },
            {
              name: "Adjective",
              text: `*Half* a loaf is better than no bread.`,
            },
            {
              name: "Adverb",
              text: `Well begun is *half* done.`,
            },
            {
              name: "Noun",
              text: `I have no *house* to live in.`,
            },
            {
              name: "Verb",
              text: `The library was *housed* in an old building.`,
            },
            {
              name: "Adjective",
              text: `The library was *housed* in an old building.`,
            },
            {
              name: "Adjective",
              text: `Mr. Ravi is a *house*-surgeon these days.`,
            },
            {
              name: "Noun",
              text: `*Iron* is a useful metal.`,
            },
            {
              name: "Verb",
              text: `*Iron* your clothes.`,
            },
            {
              name: "Adjective",
              text: `Sardar Patel was an *iron* man.`,
            },
            {
              name: "Noun",
              text: `The patient is sure to breathe his *last*.`,
            },
            {
              name: "Verb",
              text: `The meeting will *last* for two hours.`,
            },
            {
              name: "Adjective",
              text: `This bank is on its *last* leg.`,
            },
            {
              name: "Adverb",
              text: `He came *last* of all.`,
            },
            {
              name: "Noun",
              text: `There is no *light* in the hall.`,
            },
            {
              name: "Verb",
              text: `Please *light* the lamp.`,
            },
            {
              name: "Adjective",
              text: `Give only *light* food to the patient.`,
            },
            {
              name: "Adverb",
              text: `*Light* come, *light* go.`,
            },
            {
              name: "Noun",
              text: `I do not know your *likes* and dislikes.`,
            },
            {
              name: "Verb",
              text: `I *like* this apple.`,
            },
            {
              name: "Adjective",
              text: `*Like* father, *like* son.`,
            },
            {
              name: "Preposition",
              text: `He works *like* a bee.`,
            },
            {
              name: "Noun",
              text: `What is the *long* and short of this matter?`,
            },
            {
              name: "Verb",
              text: `I *long* to have a watch.`,
            },
            {
              name: "Adjective",
              text: `It is a *long* story.`,
            },
            {
              name: "Adverb",
              text: `May you live *long*.`,
            },
            {
              name: "Noun",
              text: `Our *master* is absent today.`,
            },
            {
              name: "Verb",
              text: `I have *mastered* the situation of the city.`,
            },
            {
              name: "Adjective",
              text: `Here is a *master*-key.`,
            },
            {
              name: "Noun",
              text: `*Much* has already been done in this respect.`,
            },
            {
              name: "Pronoun",
              text: `*Much* of the work has already been done.`,
            },
            {
              name: "Adjective",
              text: `He has done *much* work today.`,
            },
            {
              name: "Adverb",
              text: `He has worked *much* today.`,
            },
            {
              name: "Noun",
              text: `What is the *mean* of ten and sixteen.`,
            },
            {
              name: "Verb",
              text: `What do you *mean* to say?`,
            },
            {
              name: "Adjective",
              text: `Is he not a *mean* fellow?`,
            },
            {
              name: "Noun",
              text: `There is a gold *mine* in Mysore.`,
            },
            {
              name: "Pronoun",
              text: `*Mine* is not a bad picture.`,
            },
            {
              name: "Verb",
              text: `Diamonds are *mined* in South Africa.`,
            },
            {
              name: "Verb",
              text: `The tribesmen are *nearing* the city.`,
            },
            {
              name: "Adjective",
              text: `He is my *near* relative.`,
            },
            {
              name: "Adverb",
              text: `Come *near*, please.`,
            },
            {
              name: "Preposition",
              text: `He lives *near* our house.`,
            },
            {
              name: "Noun",
              text: `My *need* is greater than yours.`,
            },
            {
              name: "Verb",
              text: `He *needs* a pen.`,
            },
            {
              name: "Adjective",
              text: `This is the *only* washerman here.`,
            },
            {
              name: "Adverb",
              text: `He *only* sleeps and does nothing.`,
            },
            {
              name: "Conjunction",
              text: `You may do whatever you like, *only* do not come near me.`,
            },
            {
              name: "Noun",
              text: `I do not know the ins and *outs* of this matter.`,
            },
            {
              name: "Adjective",
              text: `I have booked my luggage at the Railway *out* agency.`,
            },
            {
              name: "Adverb",
              text: `Come *out*, please.`,
            },
            {
              name: "Preposition",
              text: `*Out* of the frying pan, into the fire.`,
            },
            {
              name: "Noun",
              text: `The *past* of our country was very very glorious.`,
            },
            {
              name: "Adjective",
              text: `Do you know his *past* history?`,
            },
            {
              name: "Adverb",
              text: `The soldiers marched *past*.`,
            },
            {
              name: "Preposition",
              text: `The old man is *past* eighty.`,
            },
            {
              name: "Noun",
              text: `The *pen* is mightier than the sword.`,
            },
            {
              name: "Verb",
              text: ` I have *penned* a few line in reply.`,
            },
            {
              name: "Adjectives",
              text: `I have some *pen* friends in China.`,
            },
            {
              name: "Noun",
              text: `He has every *right* to do so.`,
            },
            {
              name: "Verb",
              text: `Every wrong should be *righted*.`,
            },
            {
              name: "Adjective",
              text: `This is my *right* arm.`,
            },
            {
              name: "Adverb",
              text: `He was *right* glad to see me.`,
            },
            {
              name: "Noun",
              text: `The man-made moon has already made more than one hundred *rounds* of the earth.`,
            },
            {
              name: "Verb",
              text: `All the thieves have been *rounded* up by the police.`,
            },
            {
              name: "Adjective",
              text: `We sat at a *round* table.`,
            },
            {
              name: "Adverb",
              text: `With great difficulty I brought him *round* to my views.`,
            },
            {
              name: "Preposition",
              text: `The man-made moon went *round* the earth.`,
            },
            {
              name: "Noun",
              text: `Put the *saddle* on the back of the horse.`,
            },
            {
              name: "Verb",
              text: `I am *saddled* with great responsibility.`,
            },
            {
              name: "Verb",
              text: `He has *saved* a lot of money.`,
            },
            {
              name: "Preposition",
              text: `All *save* Ravi were present.`,
            },
          ],
        },
      ],
    },
  ],
};
