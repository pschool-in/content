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
          title: "Match words and roles: Yesterday, we went to the cinema",
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
              text: `The *advance* money has been returned.`,
            },
            {
              name: "Verb",
              text: `Five hundred rupees were *advanced* as security.`,
            },
          ],
        },
        {
          types: [
            {
              name: "Adjective",
              text: `All this is an *after* thought.`,
            },
            {
              name: "Adverb",
              text: `You left and he came soon *after*.`,
            },
          ],
        },
        {
          types: [
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
          ],
        },
        {
          types: [
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
          ],
        },
        {
          types: [
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
          ],
        },
        {
          types: [
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
          ],
        },
        {
          types: [
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
          ],
        },
        {
          types: [
            {
              name: "Verb",
              text: `Barking dogs seldom *bite*.`,
            },
            {
              name: "Noun",
              text: `The *bite* of a mad dog is dangerous.`,
            },
          ],
        },
        {
          types: [
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
          ],
        },
        {
          types: [
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
          ],
        },
        {
          types: [
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
          ],
        },
        {
          types: [
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
          ],
        },
        {
          types: [
            {
              name: "Preposition",
              text: `He knows nothing *about* me.`,
            },
            {
              name: "Adverb",
              text: `She is too tired to move *about*.`,
            },
          ],
        },
        {
          types: [
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
          ],
        },
        {
          types: [
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
              name: "Adverb",
              text: `We have played *enough*.`,
            },
          ],
        },
        {
          types: [
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
          ],
        },
      ],
    },
  ],
};
