export default {
  id: 'parts-of-speech-p3',
  label: 'Parts of Speech - Practice 3',
  lockAfter: 3,
  list: [
    {
      id: 'match',
      label: 'Match the following',
      type: 'match',
      lockAfter: 1,
      commonData: {
        title: 'Match the word and its role in the given sentence.'
      },
      data: [
        {
          arr: [
            {
              stmt: 'He won the first prize.',
              text: `he, pronoun
won, verb
the, article
first, adjective
prize, noun`
            },
            {
              stmt: 'Ravi and John are friends.',
              text: `John, proper noun
friends, common noun
and, conjunction
are, verb`
            },
            {
              stmt: 'Gopal has two brothers.',
              text: `Gopal, proper noun
has, verb
two, adjective
brothers, common noun`
            },
            {
              stmt: 'Sita is a good girl.',
              text: `Sita, proper noun
is, verb
a, article
good, adjective
girl, common noun`
            },
            {
              stmt: 'They are reading books.',
              text: `they, pronoun
are, helping verb
reading, main verb
books, noun`
            }
          ]
        },
        {
          arr: [
            {
              stmt: 'The sun is bright.',
              text: `the, article
sun, noun
is, verb
bright, adjective`
            },
            {
              stmt: 'The sky is blue.',
              text: `the, article
sky, noun
is, verb
blue, adjective`
            },
            {
              stmt: 'I have a red ball.',
              text: `I , pronoun
have, verb
a, article
red, adjective
ball, noun`
            },
            {
              stmt: 'I see a bird in the tree.',
              text: `I,pronoun
see, verb
tree, noun,
in, preposition
the, article`
            },
            {
              stmt: 'I have a new pencil.',
              text: `I, pronoun
have, verb
a, article
new, adjective
pencil, noun`
            }
          ]
        },
        {
          arr: [
            {
              stmt: 'Wow! It is a beautiful dress.',
              text: `wow, interjection
it, pronoun
is, verb
a, article
beautiful, adjective
dress, noun`
            },
            {
              stmt: 'Hurray! We won the match.',
              text: `hurray, interjection
we, pronoun
won, verb
the, article
match, noun`
            },
            {
              stmt: 'Ouch! That really hurt badly.',
              text: `ouch, interjection
that, pronoun
badly, adverb
hurt, verb`
            },
            {
              stmt: 'The turtle moves slowly.',
              text: `the, article
turtle, noun
moves, verb
slowly, adverb`
            },
            {
              stmt: 'The spider has eight legs.',
              text: `the, article
spider, noun
has, verb
eight, adjective`
            }
          ]
        },
        {
          arr: [
            {
              stmt: 'Ruby is painting beautifully.',
              text: `Ruby, noun
is, helping verb
painting, main verb
beautifully, adverb`
            },
            {
              stmt: 'The students are writing neatly.',
              text: `the, article
students, noun
are, helping verb
writing, main verb
neatly, adverb`
            },
            {
              stmt: 'Our dad is driving carefully.',
              text: `our, adjective
dad, noun
is, helping verb
driving, main verb
carefully, adverb`
            },
            {
              stmt: 'We are cooking together.',
              text: `we, pronoun
are, helping verb
cooking, main verb
together, adverb`
            },
            {
              stmt: 'It is raining heavily.',
              text: `it, pronoun
is, helping verb
raining, main verb
heavily, adverb`
            }
          ]
        },
        {
          arr: [
            {
              stmt: 'I can swim in the pool.',
              text: `I, pronoun
can, helping verb
swim, main verb
in, preposition
pool, noun`
            },
            {
              stmt: 'We have a white cat.',
              text: `we, pronoun
have, verb
a, article
white, adjective
cat, noun`
            },
            {
              stmt: 'I can sing a song.',
              text: `I, pronoun
can, helping verb
sing, main verb
a, article
song, noun`
            },
            {
              stmt: 'The storm brings rain and thunder.',
              text: `the, article
storm, noun
brings, verb
and, conjunction`
            },
            {
              stmt: 'My friend shares his toys.',
              text: `my, adjective
shares, verb
his, pronoun
toys, plural noun
friend, singular noun`
            }
          ]
        },
        {
          arr: [
            {
              stmt: 'The dog is running through the park.',
              text: `is, helping verb
running, main verb
through, preposition
park, object
dog, subject`
            },
            {
              stmt: 'The child is playing with her toys on the floor.',
              text: `is, helping verb
playing, main verb
with, preposition
toys, object
child, subject`
            },
            {
              stmt: 'The cat is sleeping under the chair.',
              text: `is, helping verb
sleeping, main verb
under, preposition
chair, object
cat, subject`
            },
            {
              stmt: 'The bird is flying over the trees.',
              text: `is, helping verb
flying, main verb
over, preposition
trees, object
bird, subject`
            },
            {
              stmt: 'The dog is barking at the mailman.',
              text: `is, helping verb
barking, main verb
at, preposition
mailman, object
dog, subject`
            }
          ]
        },
        {
          arr: [
            {
              stmt: 'The book is lying on the table.',
              text: `is, helping verb
lying, main verb
on, preposition
table, object
book, subject`
            },
            {
              stmt: 'Can you pick up Dan on your way home?',
              text: `pick, verb
Dan, noun
and, conjunction
on, preposition
your, pronoun`
            },
            {
              stmt: 'Is that with all the fees or not?',
              text: `is, verb
that, pronoun
with, preposition
all, adjective
fees, noun
or, conjunction
not, adverb`
            },
            {
              stmt: 'Yesterday, we went to the cinema.',
              text: `yesterday, adverb
we, pronoun
went, verb
to, preposition
the, article
cinema, noun`
            },
            {
              stmt: 'The old man always walks with a limp.',
              text: `old, adjective
man, noun
always, adverb
walks, verb
with, preposition`
            }
          ]
        },
        {
          arr: [
            {
              stmt: 'The waiter is serving food to the customers. ',
              text: `is, helping verb
serving, main verb
to, preposition
customers, object
waiter, subject`
            },
            {
              stmt: 'The boat is sailing on the lake.',
              text: `is, helping verb
sailing, main verb
on, preposition
lake, object
boat, subject`
            },
            {
              stmt: 'The house is located on the hill.',
              text: `is, helping verb
located, main verb
on, preposition
hill, object
house, subject`
            },
            {
              stmt: 'The picture is hanging on the wall.',
              text: `is, helping verb
hanging, main verb
on, preposition
wall, object
picture, subject`
            },
            {
              stmt: 'The cat is chasing a mouse in the garden.',
              text: `is, helping verb
chasing, main verb
in, preposition
garden, object
cat, subject`
            }
          ]
        },
        {
          arr: [
            {
              stmt: 'Her cat is always sleeping in the sun.',
              text: `her, pronoun
cat, noun
always, adverb
sleeping, verb
in, preposition
the, determiner`
            },
            {
              stmt: 'Our garden is very beautiful in the spring.',
              text: `our, pronoun
garden, noun
very, adverb
beautiful, adjective
in, preposition
the, determiner`
            },
            {
              stmt: 'His car is a classic and always turns heads.',
              text: `his, pronoun
car, noun
a, determiner
classic, adjective
and, conjunction
always, adverb
turns, verb`
            },
            {
              stmt: 'My sister is very talented and can play multiple instruments.',
              text: `my, pronoun
sister, noun
very, adverb
talented, adjective
and, conjunction
play, verb`
            },
            {
              stmt: 'The weather is really hot and humid today.',
              text: `the, determiner
weather, noun
really, adverb
and, conjunction
humid, adjective`
            }
          ]
        },
        {
          arr: [
            {
              stmt: 'The old woman walks slowly with a cane.',
              text: `old, adjective
woman, noun
slowly, adverb
walks, verb
with, preposition`
            },
            {
              stmt: 'The hungry dog eagerly devours his food.',
              text: `hungry, adjective
dog, noun
eagerly, adverb
devours, verb
his, possessive pronoun`
            },
            {
              stmt: 'The curious cat watches the birds from the window.',
              text: `curious, adjective
cat, singular noun
watches, verb
the, definite article
birds, plural noun`
            },
            {
              stmt: 'The students are writing an essay for their English class.',
              text: `   are, helping verb
writing, main verb
for, preposition
English class, object
students, subject`
            },
            {
              stmt: 'The girl is swimming in the pool.',
              text: `is, helping verb
swimming, main verb
in, preposition
pool, object
girl, subject`
            }
          ]
        }
      ]
    },
    {
      id: 'direct-indirect',
      label: 'Find my speech',
      type: 'classifySentence',
      commonData: {
        title: 'Identify the parts of speech for the underlined word'
      },
      data: [
        {
          types: [
            {
              name: 'Noun',
              text: `The heavy load broke his *back*.
Turn the book over and look at the *back*.
Tap it with the *back* of your knife.`
            },
            {
              name: 'Adjective',
              text: `A dog was sleeping at the front door so he entered through the *back* door.
That chore has been in the *back* of my mind for weeks.
I would like to find a *back* issue of that magazine.`
            },
            {
              name: 'Verb',
              text: `Do not *back* out on your promise.
The train *backed* into the station.`
            },
            {
              name: 'Adverb',
              text: `Go *back* and never come again.
Fear held him *back* from bungee jumping.`
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
              text: `The *above* mistakes are very common in maths.
Please reply to the *above* address.
Analyze the *above* sentences and correct the errors.`
            },
            {
              name: 'Adverb',
              text: `Please look *above* at the starlight sky.
She stared up at the stars *above*.
The heavens are *above*.`
            },
            {
              name: 'Preposition',
              text: `His dealings are *above* dishonesty.
The birds were flying high *above* the trees.
The moral law is *above* the civil.`
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
              text: `The *advance* money has been returned.
He made an *advance* payment on the prior shipment to show good faith
The scouts found a site for an *advance* base.`
            },
            {
              name: 'Verb',
              text: `Five hundred rupees were *advanced* as security.
Merchants often *advance* money on a contract or on goods consigned to them.
She *advanced* to the final stage of the dance competition.`
            }
          ]
        },
        {
          types: [
            {
              name: 'Adjective',
              text: `All this is an *after* thought.
*After* ages they still sing his glory.`
            },
            {
              name: 'Adverb',
              text: `You left and he came soon *after*.
They arrived soon *after* the bus left.`
            },
            {
              name: 'Preposition',
              text: `He takes *after* his father.
The policeman ran *after* the thief.`
            },
            {
              name: 'Conjunction',
              text: `I saw him *after* the class had been over.
We went away *after* they had left.`
            }
          ]
        },
        {
          types: [
            {
              name: 'Noun',
              text: `He lost his *all* for the sake of his beloved.
He lost his *all* in speculation.`
            },
            {
              name: 'Pronoun',
              text: `*All* of us were present in the meeting.
*All* spoke in favor of the accused.`
            },
            {
              name: 'Adjective',
              text: `*All* the boys were present in the meeting.
*All* men are mortal.
The new product is selling well. It was *all* profit and no loss.`
            },
            {
              name: 'Adverb',
              text: ` He was left *all* alone.
He was *all* alone when I saw him yesterday.`
            }
          ]
        },
        {
          types: [
            {
              name: 'Adverb',
              text: ` I have not seen him *before*.
I have seen you *before* hanging around at the cafe next door.`
            },
            {
              name: 'Preposition',
              text: `Will you go there *before* me?
He came *before* the appointed time.`
            },
            {
              name: 'Conjunction',
              text: `I will do it *before* I go.
He went away in a hurry *before* I came home.`
            }
          ]
        },
        {
          types: [
            {
              name: 'Noun',
              text: `Always have regard for your *betters*.
Give place to your *betters*.`
            },
            {
              name: 'Verb',
              text: `*Better* your handwriting.
The boxes he provided me *bettered* the sample.`
            },
            {
              name: 'Adjective',
              text: `This pen is *better* than that.
I think yours is a *better* plan than mine.`
            },
            {
              name: 'Adverb',
              text: `He sings *better* than I.
I know *better* than to trust his empty words.`
            }
          ]
        },
        {
          types: [
            {
              name: 'Noun',
              text: `This is the singer's *best* song.
I did my *best* to win the competition.
I had done my *best* to help you.`
            },
            {
              name: 'Adjective',
              text: ` He is the *best* boy in the class.
He is the *best* runner among us.`
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
              text: `Barking dogs seldom *bite*.
As soon as you *bite* that sandwich, you'll know how good it is.
These mosquitoes are really *biting* today`
            },
            {
              name: 'Noun',
              text: `The *bite* of a mad dog is dangerous.
The snake *bite* really hurts.
After just one night in the jungle, I was covered with mosquito *bites*.`
            }
          ]
        },
        {
          types: [
            {
              name: 'Noun',
              text: `The *book* is lying on the table.
She opened the *book* to page 37 and began to read aloud.
I have three copies of his first *book*.
Genesis is the first *book* of the Bible.`
            },
            {
              name: 'Adjective',
              text: `Don't be a *book*-worm.`
            },
            {
              name: 'Verb',
              text: `Get your seat *booked* in the train.
I want to *book* a hotel room for tomorrow night.
The police *booked* him for driving too fast.
He was really *booking* until he passed the speed trap.
The top three students had a bet on which one was going to *book* their intellectual property class.`
            }
          ]
        },
        {
          types: [
            {
              name: 'Adverb',
              text: `You are *but* a child.
Since that day, my mood has changed *but* a little.`
            },
            {
              name: 'Noun',
              text: `It has to be done - no ifs or *buts*.`
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
              text: `He ran *but* could not catch the train.
I like everything *but* that blue dress.
I have no choice *but* to leave.
I am not rich *but* poor.
She is very old *but* still energetic.`
            }
          ]
        },
        {
          types: [
            {
              name: 'Noun',
              text: `I am always at your beck and *call*.
I received several phone *calls* today.
I paid a *call* to a dear friend of mine.
I had to yield to the *call* of the wind.`
            },
            {
              name: 'Verb',
              text: `*Call* in the doctor.
That person is hurt, *call* for help.
We could always *call* a friend.
This job *calls* for patience.
Why didn't you *call* me in the morning?`
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
              text: `The school is *closed* today.
*Close* the door behind you when you leave.
The runner in second place is *closing* the gap on the leader.
He has *closed* the last two games for his team.`
            },
            {
              name: 'Adverb',
              text: `He sat *close* to me.`
            },
            {
              name: 'Noun',
              text: `At the *close* of the school, we played games.
We owe them our thanks for bringing the project to a successful *close*.`
            },
            {
              name: 'Adjective',
              text: `Menu is my *close* friend.
Is your house *close* by?`
            }
          ]
        },
        {
          types: [
            {
              name: 'Preposition',
              text: `He knows nothing *about* me.
I misunderstood her knowing little *about* her health issues.`
            },
            {
              name: 'Adverb',
              text: `She is too tired to move *about*.
I was wandering *about* from house to house looking for someone who will adopt the stay pups.
He took his time to look *about*`
            }
          ]
        },
        {
          types: [
            {
              name: 'Noun',
              text: `The Hindus burn their *dead*.
Have respect for the *dead*.
I found myself lost in an unknown street in the *dead* of night.`
            },
            {
              name: 'Adjective',
              text: `I saw a *dead* body.
She stood with a *dead* face and limp arms, unresponsive to my plea.
Okay, the circuit's *dead*. Go ahead and cut the wire.
That monitor is *dead*, don't bother hooking it up.
Once the ball crosses the foul line, it's *dead*.`
            },
            {
              name: 'Adverb',
              text: `I am *dead* tired.
He hit the target *dead* in the center.`
            }
          ]
        },
        {
          types: [
            {
              name: 'Noun',
              text: `Many a ship has sunk in the *deep* sea.
Many creatures of the *deep* are still to be discovered.
Russell is a safe pair of hands in the *deep*.`
            },
            {
              name: 'Adjective',
              text: `It is a *deep* sea.
I just meant to help out a little, but now I'm *deep* into it.
That cyclist's *deep* chest allows him to draw more air.
That's a very *deep* shade of blue.
He is fielding at *deep* mid-wicket.
I have never trekked this *deep* into the forest.`
            },
            {
              name: 'Adverb',
              text: `Go *deep* into the sea and you will find a gem.`
            }
          ]
        },
        {
          types: [
            {
              name: 'Noun',
              text: `The old man has seen many ups and *downs* in his life.`
            },
            {
              name: 'Verb',
              text: `Knock this naughty boy *down*.
The strom *downed* several old trees along the highway.`
            },
            {
              name: 'Adjective',
              text: `Are you waiting for the *down* train?
Two *down* and three more to go. I will be probably done by noon.`
            },
            {
              name: 'Adverb',
              text: `Sit *down*, please.
The cat jumped *down* from the table.
His house is farther *down* the road.
The computer has been shut *down*`
            },
            {
              name: 'Preposition',
              text: `The ball rolled *down* the hill.`
            }
          ]
        },
        {
          types: [
            {
              name: 'Noun',
              text: `*Enough* has already been done for you.`
            },
            {
              name: 'Adjective',
              text: `He has *enough* money in his pocket.`
            },
            {
              name: 'Determiner',
              text: `I have already had *enough* coffee today.`
            },
            {
              name: 'Pronoun',
              text: `I have *enough* energy to keep me going.`
            },
            {
              name: 'Interjection',
              text: `*Enough*! I'll have no more of your nonsense.`
            },
            {
              name: 'Adverb',
              text: `We have played *enough*.
I cannot run fast *enough* to catch up to them.`
            }
          ]
        },
        {
          types: [
            {
              name: 'Verb',
              text: `First *even* the ground and then play.
We need to *even* this playing field, the west goal is too low.`
            },
            {
              name: 'Adjective',
              text: `Two and four are *even* numbers.
Clear out those rocks. The surface must be *even*.
Despite her fear, she spoke in an *even* voice.
The distribution of food must be *even* among students.
Four, fourteen and forty are *even* numbers.`
            },
            {
              name: 'Adverb',
              text: `He did not *even* look at me.
I fulfilled my instructions *even* as I had promised.
*Even* a blind squirrel finds an acorn sometimes.
I was strong before, but now I am *even* stronger.`
            }
          ]
        },
        {
          types: [
            {
              name: 'Verb',
              text: `The tribesmen are *nearing* the city.`
            },
            {
              name: 'Adjective',
              text: `He is my *near* relative.
The end of the street is *near*.
The two words are *near* synonyms.`
            },
            {
              name: 'Adverb',
              text: `Come *near*, please.
I am *near* sighted.`
            },
            {
              name: 'Preposition',
              text: `He lives *near* our house.
The voyage was *near* completion.`
            }
          ]
        }
      ]
    }
  ]
};
