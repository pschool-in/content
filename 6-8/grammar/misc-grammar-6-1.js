export default {
  id: 'misc-grammar-6-1',
  label: 'Misc Grammar 6',
  lockAfter: 3,
  list: [
    {
      id: 'match',
      label: 'Match the following',
      type: 'match',
      lockAfter: 1,
      data: [
        {
          title: 'Match words and roles: What is your name?',
          text: `what, pronoun
is, verb
your, adjective
name, noun`
        },
        {
          title: 'Match words and roles: Ramya is singing a beautiful song.',
          text: `Ramya, proper noun
is singing, verb
a beautiful, adjective
song, common noun`
        },
        {
          title: 'Match words and roles: The cat is sleeping under the chair.',
          text: `is, helping verb
sleeping, main verb
under, preposition
chair, object
cat, subject`
        },
        {
          title: 'Match words and roles: My brother came home late.',
          text: `my, pronoun
home, noun
late, adverb`
        },
        {
          title: 'Match words and roles: My cat has big blue eyes.',
          text: `my, pronoun
cat, noun
blue, adjective`
        },
        {
          title: 'Match words and roles: John runs very quickly.',
          text: `John, noun
runs, verb
quickly, adverb`
        },
        {
          title: 'Match words and roles: Can you pick up Dan on your way home?',
          text: `pick, verb
Dan, noun
and, conjunction
on, preposition
your, pronoun`
        },
        {
          title: 'Match words and roles: Is that with all the fees or not?',
          text: `is, verb
that, pronoun
with, preposition
all, adjective
fees, noun
or, conjunction
not, adverb`
        },
        {
          title: 'Match words and roles: Yesterday, we went to the cinema',
          text: `yesterday, adverb
we, pronoun
went, verb
to, preposition
the, article
cinema, noun`
        },
        {
          title: 'Match words and roles: The old man always walks with a limp.',
          text: `old, adjective
man, noun
always, adverb
walks, verb
with, preposition`
        },
        {
          title:
            'Match words and roles: John had luckily received two free tickets.',
          text: `John, noun
luckily, adverb
received, verb
two, adjective`
        },
        {
          title: 'Match words and roles: My cat eats quickly.',
          text: `my, pronoun
cat, noun
eats, verb
quickly, adverb`
        },
        {
          title: 'Match words and roles: Tom is really smart.',
          text: `Tom, noun
really, adverb
smart, adjective`
        },
        {
          title: 'Match words and roles: She loves animals.',
          text: `She, pronoun
loves, verb
animals, noun`
        },
        {
          title: 'Match words and roles: Tara speaks good English.',
          text: `Tara, noun
speaks, verb          
good, adjective`
        },
        {
          title: 'Match words and roles: Tara speaks English well.',
          text: `Tara, noun
speaks, verb          
well, adverb`
        },
        {
          title: 'Match words and roles: She ran to the station quickly.',
          text: `she, pronoun
ran, verb
to, preposition
the, determiner
station, noun
quickly, adverb`
        },
        {
          title:
            "Match words and roles: Good students don't use the internet to cheat.",
          text: `good, adjective
students, noun
don't, adverb
use, verb
the, article`
        },
        {
          title:
            'Match words and roles: A little boy suddenly came running to me.',
          text: `a, article
little, adjective
boy, noun
running, verb
me, pronoun`
        },
        {
          title:
            'Match words and roles: My dog is quite naughty and likes to hew things up.',
          text: `my, pronoun
dog, noun
quite, determiner
naughty, adjective
and, conjunction
chew, verb`
        },
        {
          title: 'Match words and roles: I walk to the store',
          text: `I, pronoun
walk, verb
to, preposition
the, article
store, noun`
        },
        {
          title:
            'Match words and roles: I walk to the store since the weather is sunny',
          text: `I, pronoun
walk, verb
to, preposition
the, article
store, noun
since, conjunction
sunny, adjective`
        },
        {
          title:
            'Match words and roles: My parents are traveling to Japan next month.',
          text: `my, pronoun
traveling, verb
to, preposition
Japan, noun`
        },
        {
          title:
            'Match words and roles: The old lady was taking in a quiet voice.',
          text: `The, article
old, adjective
lady, noun
talking, verb`
        },
        {
          title: 'Match words and roles: She likes big snakes but I hate them.',
          text: `she, pronoun
likes, verb
big, adjective
but, conjunction`
        },
        {
          title:
            'Match words and roles: Nora always makes delicious cakes and cookies for me.',
          text: `Nora, proper noun
always, adverb
makes, verb
delicious, adjective
cakes, common noun
and, conjunction
for, preposition
me, pronoun`
        },
        {
          title:
            'Match words and roles: She and my younger brother walk to school slowly.',
          text: `she, pronoun
and, conjunction
my, determiner
younger, adjective
brother, noun
walk, verb
to, preposition
slowly, adverb`
        },
        {
          title:
            'Match words and roles: Wow, his monkeys really jump so high up.',
          text: `wow, interjection
his, pronoun
so, adverb
jump, verb
high, adjective`
        }
      ]
    },
    {
      id: 'direct-indirect',
      label: 'Find my speech - back',
      type: 'classifySentence',
      commonData: {
        title: 'Identify the parts of speech for the underlined word'
      },
      data: [
        {
          types: [
            {
              name: 'Noun',
              text: `The heavy load broke his *back*.`
            },
            {
              name: 'Adjective',
              text: `He entered through the *back* door.`
            },
            {
              name: 'Verb',
              text: `Do not *back* out on your promise.`
            },
            {
              name: 'Adverb',
              text: `Go *back* and never come again.`
            }
          ]
        },
        {
          types: [
            {
              name: 'Noun',
              text: `Rains come from *above*.`
            },
            {
              name: 'Adjective',
              text: `The *above* mistakes are very common.`
            },
            {
              name: 'Adverb',
              text: `Please look *above*.`
            },
            {
              name: 'Preposition',
              text: `His dealings are *above* dishonesty`
            }
          ]
        },
        {
          types: [
            {
              name: 'Noun',
              text: `An *advance* of five hundred rupees was given.`
            },
            {
              name: 'Adjective',
              text: `The *advance* money has been returned.`
            },
            {
              name: 'Verb',
              text: `Five hundred rupees were *advanced* as security.`
            }
          ]
        },
        {
          types: [
            {
              name: 'Adjective',
              text: `All this is an *after* thought.`
            },
            {
              name: 'Adverb',
              text: `You left and he came soon *after*.`
            }
          ]
        },
        {
          types: [
            {
              name: 'Adjective',
              text: `He entered through the *back* door.`
            },
            {
              name: 'Preposition',
              text: `The policeman ran *after* the chief.`
            },
            {
              name: 'Conjunction',
              text: `I saw him *after* the class had been over.`
            }
          ]
        },
        {
          types: [
            {
              name: 'Noun',
              text: `He lost his *all* for the sake of his beloved.`
            },
            {
              name: 'Pronoun',
              text: `*All* of us were present in the meeting.`
            },
            {
              name: 'Adjective',
              text: `*All* the boys were present in the meeting.`
            },
            {
              name: 'Adverb',
              text: ` He was left *all* alone.`
            }
          ]
        },
        {
          types: [
            {
              name: 'Adverb',
              text: ` I have not seen him *before*.`
            },
            {
              name: 'Preposition',
              text: `Will you go there *before* me?`
            },
            {
              name: 'Conjunction',
              text: `I will do it *before* I go.`
            }
          ]
        },
        {
          types: [
            {
              name: 'Noun',
              text: `Always have a regard for your *betters*.`
            },
            {
              name: 'Verb',
              text: `*Better* your handwriting.`
            },
            {
              name: 'Adjective',
              text: `This pen is *better* than that.`
            },
            {
              name: 'Adverb',
              text: `He sings *better* than I.`
            }
          ]
        },
        {
          types: [
            {
              name: 'Noun',
              text: `This is the singer's *best* song.`
            },
            {
              name: 'Adjective',
              text: ` He is the *best* boy in the class.`
            },
            {
              name: 'Adverb',
              text: `They have played their part *best*.`
            }
          ]
        },
        {
          types: [
            {
              name: 'Verb',
              text: `Barking dogs seldom *bite*.`
            },
            {
              name: 'Noun',
              text: `The *bite* of a mad dog is dangerous.`
            }
          ]
        },
        {
          types: [
            {
              name: 'Noun',
              text: `The *book* is lying on the table.`
            },
            {
              name: 'Adjective',
              text: `Don't be a *book*-worm.`
            },
            {
              name: 'Verb',
              text: `Get your seat *booked* in the train.`
            }
          ]
        },
        {
          types: [
            {
              name: 'Adverb',
              text: `You are *but* a child.`
            },
            {
              name: 'Pronoun',
              text: `There was none *but* wept.`
            },
            {
              name: 'Preposition',
              text: `All *but* Aditi were present.`
            },
            {
              name: 'Conjunction',
              text: `He ran *but* could not catch the train.`
            }
          ]
        },
        {
          types: [
            {
              name: 'Noun',
              text: `I am always at your beck and *call*.`
            },
            {
              name: 'Verb',
              text: `*Call* in the doctor.`
            },
            {
              name: 'Adjective',
              text: `A *call* bell is fitted to the gate.`
            }
          ]
        },
        {
          types: [
            {
              name: 'Verb',
              text: `The school is *closed* today`
            },
            {
              name: 'Adverb',
              text: `He sat *close* to me.`
            },
            {
              name: 'Noun',
              text: `At the *close* of the school, we played games.`
            },
            {
              name: 'Adjective',
              text: `Menu is my *close* friend.`
            }
          ]
        },
        {
          types: [
            {
              name: 'Preposition',
              text: `He knows nothing *about* me.`
            },
            {
              name: 'Adverb',
              text: `She is too tired to move *about*.`
            }
          ]
        },
        {
          types: [
            {
              name: 'Noun',
              text: `The Hindus burn their *dead*.`
            },
            {
              name: 'Adjective',
              text: `I saw a *dead* body.`
            },
            {
              name: 'Adverb',
              text: `I am *dead* tired.`
            }
          ]
        },
        {
          types: [
            {
              name: 'Noun',
              text: `Many a ship has sunk in the *deep* sea.`
            },
            {
              name: 'Adjective',
              text: `It is a *deep* sea.`
            },
            {
              name: 'Adverb',
              text: `Go *deep* into the sea and you will find a gem.`
            },
            {
              name: 'Noun',
              text: `The old man has seen many ups and *downs* in his life.`
            },
            {
              name: 'Verb',
              text: `Knock this naughty boy *down*.`
            },
            {
              name: 'Adjective',
              text: `Are you waiting for the *down* train?`
            },
            {
              name: 'Adverb',
              text: `Sit *down* please.`
            },
            {
              name: 'Noun',
              text: `*Enough* has already been done for you.`
            },
            {
              name: 'Adjective',
              text: `He has *enough* money in his pocket.`
            },
            {
              name: 'Adverb',
              text: `We have played *enough*.`
            },
            {
              name: 'Verb',
              text: `First *even* the ground and then play.`
            },
            {
              name: 'Adjective',
              text: `Two and four are *even* numbers.`
            },
            {
              name: 'Adverb',
              text: `He did not *even* look at me.`
            },
            {
              name: 'Noun',
              text: `The *evil* that man do lives after them.`
            },
            {
              name: 'Adjective',
              text: `He has fallen on *evil* days.`
            },
            {
              name: 'Verb',
              text: `The poor are *excepted* from this tax.`
            },
            {
              name: 'Preposition',
              text: `All *except* Ravi were present.`
            },
            {
              name: 'Conjunction',
              text: `I shall help you, *except* that I do not give you my word.`
            },
            {
              name: 'Noun',
              text: ` An *express* runs from Amritsar to Delhi.`
            },
            {
              name: 'Verb',
              text: `I have *expressed* my views`
            },
            {
              name: 'Adjective',
              text: `I will catch the *express* train.`
            },
            {
              name: 'Adverb',
              text: `The letter was sent *express*.`
            },
            {
              name: 'Noun',
              text: `The *fair* is in full swing.`
            },
            {
              name: 'Adjective',
              text: `I need *fair* deal and no favour.`
            },
            {
              name: 'Adverb',
              text: `We should play *fair*.`
            },
            {
              name: 'Noun',
              text: `He keeps *fast* on every Sunday.`
            },
            {
              name: 'Verb',
              text: `I can *fast* for two days at a stretch.`
            },
            {
              name: 'Adjective',
              text: `He travelled by a *fast* train.`
            },
            {
              name: 'Adverb',
              text: `He ran *fast* and caught the train.`
            },
            {
              name: 'Noun',
              text: ` I paid my *fine*.`
            },
            {
              name: 'Verb',
              text: `He is *fined* for his absence.`
            },
            {
              name: 'Adjective',
              text: `What a *fine* weather it is!`
            },
            {
              name: 'Adverb',
              text: `Please tune *fine*.`
            },
            {
              name: 'Noun',
              text: `There is no *fire* in the hearth.`
            },
            {
              name: 'Verb',
              text: `The gun was *fired*.`
            },
            {
              name: 'Adjective',
              text: `Did you enjoy the *fire*-works last night.`
            },
            {
              name: 'Verb',
              text: `At last he *freed* himself from the cruel moneylender.`
            },
            {
              name: 'Adjective',
              text: `I have a *free* pass for the show.`
            },
            {
              name: 'Adverb',
              text: `The bird was set *free*.`
            },
            {
              name: 'Noun',
              text: `Whatever God does, He does for our *good*.`
            },
            {
              name: 'Adjective',
              text: `He is a *good* boy.`
            },
            {
              name: 'Adverb',
              text: `The boy is doing *good*.`
            },
            {
              name: 'Noun',
              text: `Never do things by *halves*.`
            },
            {
              name: 'Adjective',
              text: `*Half* a loaf is better than no bread.`
            },
            {
              name: 'Adverb',
              text: `Well begun is *half* done.`
            },
            {
              name: 'Noun',
              text: `I have no *house* to live in.`
            },
            {
              name: 'Verb',
              text: `The library was *housed* in an old building.`
            },
            {
              name: 'Adjective',
              text: `The library was *housed* in an old building.`
            },
            {
              name: 'Adjective',
              text: `Mr. Ravi is a *house*-surgeon these days.`
            },
            {
              name: 'Noun',
              text: `*Iron* is a useful metal.`
            },
            {
              name: 'Verb',
              text: `*Iron* your clothes.`
            },
            {
              name: 'Adjective',
              text: `Sardar Patel was an *iron* man.`
            },
            {
              name: 'Noun',
              text: `The patient is sure to breathe his *last*.`
            },
            {
              name: 'Verb',
              text: `The meeting will *last* for two hours.`
            },
            {
              name: 'Adjective',
              text: `This bank is on its *last* leg.`
            },
            {
              name: 'Adverb',
              text: `He came *last* of all.`
            },
            {
              name: 'Noun',
              text: `There is no *light* in the hall.`
            },
            {
              name: 'Verb',
              text: `Please *light* the lamp.`
            },
            {
              name: 'Adjective',
              text: `Give only *light* food to the patient.`
            },
            {
              name: 'Adverb',
              text: `*Light* come, *light* go.`
            },
            {
              name: 'Noun',
              text: `I do not know your *likes* and dislikes.`
            },
            {
              name: 'Verb',
              text: `I *like* this apple.`
            },
            {
              name: 'Adjective',
              text: `*Like* father, *like* son.`
            },
            {
              name: 'Preposition',
              text: `He works *like* a bee.`
            },
            {
              name: 'Noun',
              text: `What is the *long* and short of this matter?`
            },
            {
              name: 'Verb',
              text: `I *long* to have a watch.`
            },
            {
              name: 'Adjective',
              text: `It is a *long* story.`
            },
            {
              name: 'Adverb',
              text: `May you live *long*.`
            },
            {
              name: 'Noun',
              text: `Our *master* is absent today.`
            },
            {
              name: 'Verb',
              text: `I have *mastered* the situation of the city.`
            },
            {
              name: 'Adjective',
              text: `Here is a *master*-key.`
            },
            {
              name: 'Noun',
              text: `*Much* has already been done in this respect.`
            },
            {
              name: 'Pronoun',
              text: `*Much* of the work has already been done.`
            },
            {
              name: 'Adjective',
              text: `He has done *much* work today.`
            },
            {
              name: 'Adverb',
              text: `He has worked *much* today.`
            },
            {
              name: 'Noun',
              text: `What is the *mean* of ten and sixteen.`
            },
            {
              name: 'Verb',
              text: `What do you *mean* to say?`
            },
            {
              name: 'Adjective',
              text: `Is he not a *mean* fellow?`
            },
            {
              name: 'Noun',
              text: `There is a gold *mine* in Mysore.`
            },
            {
              name: 'Pronoun',
              text: `*Mine* is not a bad picture.`
            },
            {
              name: 'Verb',
              text: `Diamonds are *mined* in South Africa.`
            },
            {
              name: 'Verb',
              text: `The tribesmen are *nearing* the city.`
            },
            {
              name: 'Adjective',
              text: `He is my *near* relative.`
            },
            {
              name: 'Adverb',
              text: `Come *near*, please.`
            },
            {
              name: 'Preposition',
              text: `He lives *near* our house.`
            },
            {
              name: 'Noun',
              text: `My *need* is greater than yours.`
            },
            {
              name: 'Verb',
              text: `He *needs* a pen.`
            },
            {
              name: 'Adjective',
              text: `This is the *only* washerman here.`
            },
            {
              name: 'Adverb',
              text: `He *only* sleeps and does nothing.`
            },
            {
              name: 'Conjunction',
              text: `You may do whatever you like, *only* do not come near me.`
            },
            {
              name: 'Noun',
              text: `I do not know the ins and *outs* of this matter.`
            },
            {
              name: 'Adjective',
              text: `I have booked my luggage at the Railway *out* agency.`
            },
            {
              name: 'Adverb',
              text: `Come *out*, please.`
            },
            {
              name: 'Preposition',
              text: `*Out* of the frying pan, into the fire.`
            },
            {
              name: 'Noun',
              text: `The *past* of our country was very very glorious.`
            },
            {
              name: 'Adjective',
              text: `Do you know his *past* history?`
            },
            {
              name: 'Adverb',
              text: `The soldiers marched *past*.`
            },
            {
              name: 'Preposition',
              text: `The old man is *past* eighty.`
            },
            {
              name: 'Noun',
              text: `The *pen* is mightier than the sword.`
            },
            {
              name: 'Verb',
              text: ` I have *penned* a few line in reply.`
            },
            {
              name: 'Adjectives',
              text: `I have some *pen* friends in China.`
            },
            {
              name: 'Noun',
              text: `He has every *right* to do so.`
            },
            {
              name: 'Verb',
              text: `Every wrong should be *righted*.`
            },
            {
              name: 'Adjective',
              text: `This is my *right* arm.`
            },
            {
              name: 'Adverb',
              text: `He was *right* glad to see me.`
            },
            {
              name: 'Noun',
              text: `The man-made moon has already made more than one hundred *rounds* of the earth.`
            },
            {
              name: 'Verb',
              text: `All the thieves have been *rounded* up by the police.`
            },
            {
              name: 'Adjective',
              text: `We sat at a *round* table.`
            },
            {
              name: 'Adverb',
              text: `With great difficulty I brought him *round* to my views.`
            },
            {
              name: 'Preposition',
              text: `The man-made moon went *round* the earth.`
            },
            {
              name: 'Noun',
              text: `Put the *saddle* on the back of the horse.`
            },
            {
              name: 'Verb',
              text: `I am *saddled* with great responsibility.`
            },
            {
              name: 'Verb',
              text: `He has *saved* a lot of money.`
            },
            {
              name: 'Preposition',
              text: `All *save* Ravi were present.`
            },
            {
              name: 'Noun',
              text: `You have a good tea-*set*.`
            },
            {
              name: 'Verb',
              text: `Please *set* right the office.`
            },
            {
              name: 'Adjective',
              text: ` I went to him with a *set* purpose.`
            },
            {
              name: 'Noun',
              text: `The long and *short* of the matter is that I do not see eye to eye with you.`
            },
            {
              name: 'Adjective',
              text: `I know *short* hand.`
            },
            {
              name: 'Adverb',
              text: `We fell *short* of money.`
            },
            {
              name: 'Adverb',
              text: `He left this place one week *since*.`
            },
            {
              name: 'Preposition',
              text: `He has been here *since* last Tuesday.`
            },
            {
              name: 'Conjunction',
              text: `*Since* he is ill, he cannot attend the meeting.`
            },
            {
              name: 'Verb',
              text: `The train *slows* down as it reaches the platform.`
            },
            {
              name: 'Adjective',
              text: `*Slow* and steady wins the race.`
            },
            {
              name: 'Adverb',
              text: `In summer clocks generally go *slow*.`
            },
            {
              name: 'Noun',
              text: `I have heard the *sound* of the bugle.`
            },
            {
              name: 'Verb',
              text: `Please *sound* the bugle.`
            },
            {
              name: 'Adjective',
              text: `He has followed a *sound* policy.`
            },
            {
              name: 'Adverb',
              text: ` I have reached home safe and *sound*.`
            },
            {
              name: 'Noun',
              text: `A *spring* has sprouted up in our neighbourhood.`
            },
            {
              name: 'Verb',
              text: `The dog *sprang* upon the table.`
            },
            {
              name: 'Adjective',
              text: `The *spring* water sometimes cures skin diseases.`
            },
            {
              name: 'Noun',
              text: `He came in the *still* of night.`
            },
            {
              name: 'Verb',
              text: `The presence of the Headmaster alone could *still* the angry students.`
            },
            {
              name: 'Adjective',
              text: `*Still* waters are very deep.`
            },
            {
              name: 'Adverb',
              text: `He is *still* here.`
            },
            {
              name: 'Conjunction',
              text: `He is dead tired, *still* he goes on walking.`
            },
            {
              name: 'Pronoun',
              text: `The picture *that* we saw was very interesting.`
            },
            {
              name: 'Adjective',
              text: `*That* boy is very naughty.`
            },
            {
              name: 'Adverb',
              text: `He can do *that* much work today.`
            },
            {
              name: 'Conjunction',
              text: `He said *that* he would do it.`
            },
            {
              name: 'Preposition',
              text: `I have no other book *than* this.`
            },
            {
              name: 'Conjunction',
              text: `He is much stronger *than* I am.`
            },
            {
              name: 'Noun',
              text: `They have lived happily since *then*.`
            },
            {
              name: 'Adjective',
              text: `The *then* Viceroy was very noble.`
            },
            {
              name: 'Adverb',
              text: `I had gone out *then*.`
            },
            {
              name: 'Conjunction',
              text: `You do not act upon my advice, *then* how can I guide you?`
            },
            {
              name: 'Noun',
              text: `A shopkeeper's money box is called a *till*.`
            },
            {
              name: 'Verb',
              text: `The farmer is *tilling* the land.`
            },
            {
              name: 'Preposition',
              text: `He did not turn up *till* yesterday.`
            },
            {
              name: 'Conjunction',
              text: `I will wait here *till* he returns.`
            },
            {
              name: 'Noun',
              text: `*Time* and tide waits for none.`
            },
            {
              name: 'Verb',
              text: `*Time* your watch to the clock tower.`
            },
            {
              name: 'Adjective',
              text: `Terrorists are planting *time* bombs.`
            },
            {
              name: 'Adverb',
              text: `Your debt is *time* barred now.`
            },
            {
              name: 'Noun',
              text: `I have seen many *ups* and downs in life.`
            },
            {
              name: 'Adjective',
              text: `He travelled by the *up* train.`
            },
            {
              name: 'Adverb',
              text: `Wake him *up*, please.`
            },
            {
              name: 'Noun',
              text: `This *wall* is made of stone.`
            },
            {
              name: 'Verb',
              text: `The city has been *walled* to defend it properly.`
            },
            {
              name: 'Adjective',
              text: `This is a *wall* clock.`
            },
            {
              name: 'Noun',
              text: `This *watch* is of Swiss make.`
            },
            {
              name: 'Verb',
              text: `I am *watching* your movements.`
            },
            {
              name: 'Adjective',
              text: `Have you a *watch* dog.`
            },
            {
              name: 'Noun',
              text: `*Water* serves us in many ways.`
            },
            {
              name: 'Verb',
              text: `*Water* the plants, please.`
            },
            {
              name: 'Adjective',
              text: `The picture is drawn in *water* colour.`
            },
            {
              name: 'Noun',
              text: `The deeper the *well*, the cooler the water.`
            },
            {
              name: 'Verb',
              text: `Tears *welled* up in the eyes of the old lady.`
            },
            {
              name: 'Adjective',
              text: `The *well* water is better than the spring water.`
            },
            {
              name: 'Adverb',
              text: `He always does *well* in the examination.`
            },
            {
              name: 'Interjection',
              text: `*Well* done!`
            },
            {
              name: 'Noun',
              text: `Let us wait for him for a *while*.`
            },
            {
              name: 'Verb',
              text: `Do not *while* away your time.`
            },
            {
              name: 'Conjunction',
              text: `I was sleeping, *while* he was busy in his work.`
            },
            {
              name: 'Noun',
              text: `Right your *wrongs*.`
            },
            {
              name: 'Verb',
              text: `He has *wronged* me too much.`
            },
            {
              name: 'Adjective',
              text: `They adopted a *wrong* policy.`
            }
          ]
        }
      ]
    }
  ]
};
