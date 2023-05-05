export default {
  id: 'parts-of-speech-p7',
  label: 'Parts of Speech - Practice 7',
  lockAfter: 3,
  list: [
    {
      id: 'match',
      label: 'Match the following',
      type: 'match',
      lockAfter: 1,
      data: [
        {
          arr: [
            {
              title: `Match words and roles: Responsible drivers don't text while driving.`,
              text: `responsible, adjective
drivers, noun
don't, adverb
text, verb
while, conjunction`
            },
            {
              title:
                'Match words and roles: I walk to the store since the weather is sunny.',
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
                'Match words and roles: The girl is reading a book in the library.',
              text: `is, helping verb
reading, main verb
in, preposition
library, object
girl, subject`
            },
            {
              title: `Match words and roles: Honest people don't lie to their friends.`,
              text: `honest, adjective
people, noun
don't, adverb
lie, verb
their, article`
            },
            {
              title:
                'Match words and roles: The sun is shining brightly in the sky.',
              text: `is, helping verb
shining, main verb
in, preposition
sky, object
sun, subject`
            }
          ]
        },
        {
          arr: [
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
                'Match words and roles: The music is playing loudly in the room.',
              text: `is, helping verb
playing, main verb
in, preposition
room, object
music, subject`
            },
            {
              title:
                'Match words and roles: The students are studying for their exams in the library.',
              text: `are, helping verb
studying, main verb
for, preposition
exams, object
students, subject`
            },
            {
              title:
                'Match words and roles: The chef is cooking a delicious meal in the kitchen.',
              text: `is, helping verb
cooking, main verb
in, preposition
kitchen, object
chef, subject`
            }
          ]
        },
        {
          arr: [
            {
              title:
                'Match words and roles: The baby is crawling towards his toys on the floor.',
              text: `is, helping verb
crawling, main verb
towards, preposition
toys, object
baby, subject`
            },
            {
              title:
                'Match words and roles: The sun is setting over the horizon.',
              text: `is, helping verb
setting, main verb
over, preposition
horizon, object
sun, subject`
            },
            {
              title:
                'Match words and roles: The athlete is running towards the finish line.',
              text: `is, helping verb
running, main verb
towards, preposition
finish line, object
athlete, subject`
            },
            {
              title:
                'Match words and roles: The child is laughing at the funny clown.',
              text: `is, helping verb
laughing, main verb
at, preposition
clown, object
child, subject`
            },
            {
              title:
                'Match words and roles: The teacher is explaining a difficult concept to her students.',
              text: `is, helping verb
explaining, main verb
to, preposition
students, object
teacher, subject`
            }
          ]
        },
        {
          arr: [
            {
              title: 'Match words and roles: The tall tree sways in the wind.',
              text: `tall, adjective
tree, noun
in, preposition
the, article
sways, verb`
            },
            {
              title:
                'Match words and roles: The little girl carefully colors in her coloring book.',
              text: `little, adjective
girl, noun
carefully, adverb
colors, verb
in, preposition`
            },
            {
              title:
                'Match words and roles: The brave knight fearlessly battles the dragon.',
              text: `brave, adjective
knight, noun
fearlessly, adverb
battles, verb
the, article`
            },
            {
              title: `Match words and roles: Happy dogs don't bite people.`,
              text: `happy, adjective
dogs, noun
don't, adverb
bite, verb
the, article`
            },
            {
              title: `Match words and roles: Skilled chefs don't need a recipe to cook a delicious meal.`,
              text: `skilled, adjective
chefs, noun
don't, adverb
need, verb
a, article`
            }
          ]
        },
        {
          arr: [
            {
              title: `Match words and roles: She drives to work because she doesn't like taking the bus.`,
              text: `She, pronoun
drives, verb
to, preposition
work, noun
because, conjunction
the, article`
            },
            {
              title:
                'Match words and roles: He reads books during his free time because he enjoys learning new things.',
              text: `He, pronoun
reads, verb
books, noun
during, preposition
because, conjunction`
            },
            {
              title: 'Match words and roles: The dog is sleeping on the mat.',
              text: `is, helping verb
sleeping, main verb
on, preposition
mat, object
dog, subject`
            },
            {
              title:
                'Match words and roles: The boy is playing soccer in the field.',
              text: `is, helping verb
playing, main verb
in, preposition
field, object
boy, subject`
            },
            {
              title:
                'Match words and roles: The woman is cooking dinner in the kitchen.',
              text: `is, helping verb
cooking, main verb
in, preposition
kitchen, object
woman, subject`
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
              text: `My *need* is greater than yours.
I have always tried to have few *needs* beyond food, clothing and shelter.`
            },
            {
              name: 'Verb',
              text: `He *needs* a pen.
Living things *need* water to survive.
You *need* not go if you don't want to.`
            }
          ]
        },
        {
          types: [
            {
              name: 'Adjective',
              text: `This is the *only* washerman here.
He is the *only* doctor available right now.
He is their *only* son, in fact, an *only* child`
            },
            {
              name: 'Adverb',
              text: `He *only* sleeps and does nothing.
If there were *only* one more ticket.
They left *only* moments ago. `
            },
            {
              name: 'Conjunction',
              text: `You may do whatever you like, *only* do not come near me.
I would enjoy running, *only* I have this broken leg.`
            }
          ]
        },
        {
          types: [
            {
              name: 'Noun',
              text: `I do not know the ins and *outs* of this matter.
They wrote the law to give those organizations an *out*.`
            },
            {
              name: 'Adjective',
              text: `I have booked my luggage at the Railway *out* agency.`
            },
            {
              name: 'Adverb',
              text: `Come *out*, please.
Let's eat *out* tonight.
The magician pulled the rabbit *out* of the hat.
The place was all decked *out* for the holidays.`
            },
            {
              name: 'Preposition',
              text: `*Out* of the frying pan, into the fire.
He threw it *out* the door.`
            }
          ]
        },
        {
          types: [
            {
              name: 'Noun',
              text: `The *past* of our country was very very glorious.
During the *past* year I traveled all around Europe.`
            },
            {
              name: 'Adjective',
              text: `Do you know his *past* history?`
            },
            {
              name: 'Adverb',
              text: `The soldiers marched *past*.
I watched him walk *past* me.`
            },
            {
              name: 'Preposition',
              text: `The old man is *past* eighty.
The room *past* mine belongs to my brother.`
            }
          ]
        },
        {
          types: [
            {
              name: 'Noun',
              text: `The *pen* is mightier than the sword.
There are two steers in the third *pen*.
They caught him with a stolen horse, and he wound up in the *pen* again.
He took notes with a *pen*.`
            },
            {
              name: 'Verb',
              text: ` I have *penned* a few lines in reply.`
            },
            {
              name: 'Adjectives',
              text: `I have some *pen* friends in China.`
            }
          ]
        },
        {
          types: [
            {
              name: 'Noun',
              text: `He has every *right* to do so.`
            },
            {
              name: 'Verb',
              text: `Every wrong should be *righted*.
We're on the side of *right* in this contest.
You have no *right* to talk to me like that.
The pharmacy is just on the *right* past the bookshop.
The political *right* holds too much power.`
            },
            {
              name: 'Adjective',
              text: `This is my *right* arm.
The kitchen counter formed a *right* angle with the back wall.
I thought you'd make a mistake, but it seems you were *right* all along.
Is this the *right* software for my computer?
I'm Afraid he is no longer in his *right* mind.
After the accident, her *right* leg was slightly shorter than her left.`
            },
            {
              name: 'Adverb',
              text: `He was *right* glad to see me.
The arrow landed *right* in the middle of the target.`
            }
          ]
        },
        {
          types: [
            {
              name: 'Noun',
              text: `The man-made moon has already made more than one hundred *rounds* of the earth.`
            },
            {
              name: 'Verb',
              text: `All the thieves have been *rounded* up by the police.
Helen watched him until he *rounded* the corner.`
            },
            {
              name: 'Adjective',
              text: `We sat at a *round* table to make conversation easier.
The ancient Egyptians demonstrated that the Earth is round, not flat.
The child's bed has *round* corners for safety.
The baker sold us a *round* dozen.`
            },
            {
              name: 'Adverb',
              text: `With great difficulty, I brought him *round* to my views.`
            },
            {
              name: 'Preposition',
              text: `The man-made moon went *round* the earth.
I look *round* the room quickly to make sure it's neat looking.`
            }
          ]
        },
        {
          types: [
            {
              name: 'Noun',
              text: `Put the *saddle* on the back of the horse.
My bike needs a new *saddle*.
Could you lower the *saddle* for me?`
            },
            {
              name: 'Verb',
              text: `I am *saddled* with great responsibility.
He has *saddled* himself with a houseful of relatives.`
            }
          ]
        },
        {
          types: [
            {
              name: 'Noun',
              text: `The goaltender made a great *save*.
The giant wrestler continued to beat down his smaller opponent until several wrestlers ran in for the save.`
            },
            {
              name: 'Verb',
              text: `He has *saved* a lot of money.`
            },
            {
              name: 'Preposition',
              text: `All *save* Ravi were present.`
            }
          ]
        },
        {
          types: [
            {
              name: 'Noun',
              text: `You have a good tea-*set*.
He plays the *set* on Sundays.`
            },
            {
              name: 'Verb',
              text: `Please *set* right the office.
I *set* the alarm at 6 a.m.
Please *set* the table for our guests.
He says he will *set* his next film in France.`
            },
            {
              name: 'Adjective',
              text: ` I went to him with a *set* purpose.
I'm *set* against the idea of him dropping out of school.`
            }
          ]
        },
        {
          types: [
            {
              name: 'Noun',
              text: `The long and *short* of the matter is that I do not see eye to eye with you.
He closed out his *short* at a modest loss after three months.`
            },
            {
              name: 'Adjective',
              text: `I know *short* hand.`
            },
            {
              name: 'Adverb',
              text: `We fell *short* of money.
They had to stop *short* to avoid hitting the dog in the street.
He cut me *short* repeatedly in the meeting.
His speech fell *short* of what was expected.`
            }
          ]
        },
        {
          types: [
            {
              name: 'Adverb',
              text: `He left this place one week *since*.
I had seen him previously, but hadn't seen him *since*.`
            },
            {
              name: 'Preposition',
              text: `He has been here *since* last Tuesday.
I have known her *since* last year.`
            },
            {
              name: 'Conjunction',
              text: `*Since* he is ill, he cannot attend the meeting.
*Since* you didn't call, we left without you.`
            }
          ]
        },
        {
          types: [
            {
              name: 'Verb',
              text: `The train *slows* down as it reaches the platform.`
            },
            {
              name: 'Adjective',
              text: `*Slow* and steady wins the race.
John is very *slow*. He is ten seconds behind everybody else when it comes to math.
The clock is five minutes *slow*.`
            },
            {
              name: 'Adverb',
              text: `In summer clocks generally go *slow*.`
            }
          ]
        },
        {
          types: [
            {
              name: 'Noun',
              text: `I have heard the *sound* of the bugle.
Nobody made a *sound* but the teacher still scolded us for being noisy.`
            },
            {
              name: 'Verb',
              text: `Please *sound* the bugle.
He *sounded* good when we last spoke.`
            },
            {
              name: 'Adjective',
              text: `He has followed a *sound* policy.
Fred assured me the floorboards were *sound*.
He was safe and *sound* hiding in the panic room during the cyclone.`
            }
          ]
        },
        {
          types: [
            {
              name: 'Noun',
              text: `A *spring* has sprouted up in our neighborhood.`
            },
            {
              name: 'Verb',
              text: `The dog *sprang* upon the table.
Sometimes the ideas *spring* to life fully formed.
He *sprang* up from his seat when he heard that he had topped the exams.`
            },
            {
              name: 'Adjective',
              text: `The *spring* water sometimes cures skin diseases.`
            }
          ]
        },
        {
          types: [
            {
              name: 'Noun',
              text: `He came in the *still* of night.`
            },
            {
              name: 'Verb',
              text: `The presence of the Headmaster alone could *still* the angry students.
Please, *still* that animal before it hurts someone.`
            },
            {
              name: 'Adjective',
              text: `*Still* waters are very deep.`
            },
            {
              name: 'Adverb',
              text: `He is *still* here.
Is it *still* raining?
I'm not hungry, but I'll *still* manage to find room for dessert.`
            },
            {
              name: 'Conjunction',
              text: `He is dead tired, *still* he goes on walking.`
            }
          ]
        },
        {
          types: [
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
              text: `He can do *that* much work today.
I am not *that* sick to ask for a leave.`
            },
            {
              name: 'Pronoun',
              text: `*That* was an interesting example.
Who was the actor *that* played Hamlet?.`
            },
            {
              name: 'Conjunction',
              text: `He said *that* he would do it.
He told me *that* the book is a good read.`
            },
            {
              name: 'Determiner',
              text: `*That* book is a good read.`
            }
          ]
        },
        {
          types: [
            {
              name: 'Preposition',
              text: `I have no other book *than* this.
Patients diagnosed more recently are probably surviving an average of longer *than* two years.`
            },
            {
              name: 'Conjunction',
              text: `He is much stronger *than* I am.
I am taller *than* she is.`
            }
          ]
        },
        {
          types: [
            {
              name: 'Noun',
              text: `They have lived happily since *then*.
I will be finished before *then*.`
            },
            {
              name: 'Adjective',
              text: `The *then* Viceroy was very noble.`
            },
            {
              name: 'Adverb',
              text: `I had gone out *then*.
There are three green ones, *then* a blue one.
If it's locked, *then* we will need the key.`
            },
            {
              name: 'Conjunction',
              text: `You do not act upon my advice, *then* how can I guide you?`
            }
          ]
        },
        {
          types: [
            {
              name: 'Noun',
              text: `A shopkeeper's money box is called a *till*.
My count of my *till* was 30 dollars short. `
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
            }
          ]
        },
        {
          types: [
            {
              name: 'Noun',
              text: `*Time* and tide waits for none.
Excuse me, have you got *time*?
The judge leniently granted a sentence with no hard *time*.
It's *time* to sleep.`
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
            }
          ]
        },
        {
          types: [
            {
              name: 'Noun',
              text: `I have seen many *ups* and downs in life.`
            },
            {
              name: 'Adjective',
              text: `He traveled by the *up* train.
If you are *up* for a trip, let's go.
What is *up* with that project at headquarters?`
            },
            {
              name: 'Adverb',
              text: `Wake him *up*, please.
I looked *up* and saw the airplane overhead.
I'm going *up* to New York to visit my family this weekend.
The bowler pitched the ball *up*.`
            },
            {
              name: 'Preposition',
              text: `The cat went *up* the tree.
Go *up* the street until you see the main road.`
            }
          ]
        },
        {
          types: [
            {
              name: 'Noun',
              text: `This *wall* is made of stone.
The town *wall* was surrounded by a moat.
We are adding another wall in this room during the remodeling.
The cell *walls* are mostly composed of cellulose.`
            },
            {
              name: 'Verb',
              text: `The city has been *walled* to defend it properly.
He *walled* the study with books.
The previous owners had *walled* off two rooms, making an apartment.`
            },
            {
              name: 'Adjective',
              text: `This is a *wall* clock.`
            }
          ]
        },
        {
          types: [
            {
              name: 'Noun',
              text: `This *watch* is of Swiss make.
The *watch* stopped the travelers at the city gates.`
            },
            {
              name: 'Verb',
              text: `I am *watching* your movements.
*Watch* your head, the ceilings are too low here.
You should *watch* him closely. He has a reputation for lying.
*Watching* the clock will not make time go faster.`
            },
            {
              name: 'Adjective',
              text: `Have you a *watch* dog.`
            }
          ]
        },
        {
          types: [
            {
              name: 'Noun',
              text: `*Water* serves us in many ways.
May I have a glass of *water*?`
            },
            {
              name: 'Verb',
              text: `*Water* the plants, please.
Chopping onions make my eyes *water*.
I need to *water* the cattle.`
            },
            {
              name: 'Adjective',
              text: `The picture is drawn in *water* color.`
            }
          ]
        },
        {
          types: [
            {
              name: 'Noun',
              text: `The deeper the *well*, the cooler the water.`
            },
            {
              name: 'Verb',
              text: `Tears *welled* up in the eyes of the old lady.
Blood *welled* from the wound so the first responders were on their heels to help the victim.`
            },
            {
              name: 'Adjective',
              text: `The *well* water is better than the spring water.
I had been sick, but now I'm *well*.`
            },
            {
              name: 'Adverb',
              text: `He always does *well* in the examination.
That author is *well* known among readers.`
            },
            {
              name: 'Interjection',
              text: `*Well* done!`
            }
          ]
        },
        {
          types: [
            {
              name: 'Noun',
              text: `Let us wait for him for a *while*.
He lectured for quite a long *while*.`
            },
            {
              name: 'Verb',
              text: `Do not *while* away your time.`
            },
            {
              name: 'Conjunction',
              text: `I was sleeping, *while* he was busy with his work.
This case, *while* interesting, is a bit frustrating.
I'll wait *while* you finish painting.`
            }
          ]
        },
        {
          types: [
            {
              name: 'Noun',
              text: `Right your *wrongs*.
Injustice is a heinous *wrong*.`
            },
            {
              name: 'Verb',
              text: `He has *wronged* me too much.
The dealer *wronged* us by selling us this lemon of a car.`
            },
            {
              name: 'Adverb',
              text: `I spelled several names *wrong* in my address book..`
            },
            {
              name: 'Adjective',
              text: `They adopted a *wrong* policy.
Some of your answers were correct, and some were *wrong*.
It is *wrong* o lie.`
            }
          ]
        }
      ]
    }
  ]
};
