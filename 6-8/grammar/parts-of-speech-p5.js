export default {
  id: 'parts-of-speech-p5',
  label: 'Parts of Speech - Practice 5',
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
              stmt: ' The car is parked beside the sidewalk.',
              text: `is, helping verb
  parked, main verb
  beside, preposition
  sidewalk, object
  car, subject`
            },
            {
              stmt: ' The fish is swimming in the pond.',
              text: `is, helping verb
  swimming, main verb
  in, preposition
  pond, object
  fish, subject`
            },
            {
              stmt: ' The children are playing in the park.',
              text: `are, helping verb
  playing, main verb
  in, preposition
  park, object
  children, subject`
            },
            {
              stmt: ' The book is on the shelf.',
              text: `is, helping verb
  on, preposition
  shelf, object
  book, subject`
            },
            {
              stmt: ' The teacher is explaining the lesson to the students.',
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
              stmt: ' The boy is running on the track.',
              text: `is, helping verb
  running, main verb
  on, preposition
  track, object
  boy, subject`
            },
            {
              stmt: ' She ran to the station quickly.',
              text: `she, pronoun
  ran, verb
  to, preposition
  the, determiner
  station, noun
  quickly, adverb`
            },
            {
              stmt: " Good students don't use the internet to cheat.",
              text: `good, adjective
  students, noun
  don't, adverb
  use, verb
  the, article`
            },
            {
              stmt: ' A little boy suddenly came running to me.',
              text: `a, article
  little, adjective
  boy, noun
  running, verb
  me, pronoun`
            },
            {
              stmt: ' My dog is quite naughty and likes to chew things up.',
              text: `my, pronoun
  dog, noun
  quite, determiner
  naughty, adjective
  and, conjunction
  chew, verb`
            }
          ]
        },
        {
          arr: [
            {
              stmt: ' The plane is flying in the sky.',
              text: `is, helping verb
  flying, main verb
  in, preposition
  sky, object
  plane, subject`
            },
            {
              stmt: ' The fluffy cat purrs loudly while being petted.',
              text: `fluffy, adjective
  cat, noun
  loudly, adverb
  purrs, verb
  while, conjunction`
            },
            {
              stmt: ' The book is lying on the table.',
              text: `is, helping verb
  lying, main verb
  on, preposition
  table, object
  book, subject`
            },
            {
              stmt: ' The child is playing with her toys on the carpet.',
              text: `is, helping verb
  playing, main verb
  with, preposition
  toys, object
  child, subject`
            },
            {
              stmt: ' The birds are chirping in the trees outside.',
              text: `are, helping verb
  chirping, main verb
  in, preposition
  trees, object
  birds, subject`
            }
          ]
        },
        {
          arr: [
            {
              stmt: ' The book was incredibly interesting and kept me hooked till the end.',
              text: `   the, determiner
  book, noun
  incredibly, adverb
  interesting, adjective
  and, conjunction
  kept, verb`
            },
            {
              stmt: ' His painting was exceptionally beautiful and full of vivid colors.',
              text: `   his, pronoun
  painting, noun
  exceptionally, adverb
  and, conjunction
  full, adjective`
            },
            {
              stmt: ' Can you please tell me where the nearest gas station is?',
              text: `is, verb 
  nearest, adjective 
  gas station, noun 
  where, adverb 
  the,  article`
            },
            {
              stmt: ' The young boy often sings with a beautiful voice.',
              text: `young, adjective
  boy, noun
  often, adverb
  sings, verb
  with, preposition`
            },
            {
              stmt: ' The stray dog always barks at strangers.',
              text: `stray, adjective
  dog, noun
  always, adverb
  barks, verb
  at, preposition`
            }
          ]
        },
        {
          arr: [
            {
              stmt: ' The playful kitten chases the shiny ball across the room.',
              text: `playful, adjective
  kitten, noun
  chases, verb
  ball, noun
  across, preposition`
            },
            {
              stmt: ' The tired hiker slowly climbs up the steep mountain trail.',
              text: `tired, adjective
  hiker, noun
  slowly, adverb
  climbs, verb`
            },
            {
              stmt: ' Could you please bring me a glass of water from the kitchen?',
              text: `bring, verb
  me, pronoun
  glass, noun
  of, preposition
  the, article`
            },
            {
              stmt: ` I need to buy some vegetables and fruits for tonight's dinner.`,
              text: `buy, verb
  some, pronoun
  vegetables, noun
  and, conjunction
  for, preposition
  tonight's, adjective`
            },
            {
              stmt: ' Would you mind passing me the salt and pepper, please?',
              text: `you, pronoun
  passing, verb
  me, pronoun
  the, article
  salt, noun
  and, conjunction
  please, adverb`
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
              text: `The *evil* that man do lives after them.
  The *evils* of the society include treason.`
            },
            {
              name: 'Adjective',
              text: `He has fallen on *evil* days.
  I will not fall for her *evil* plans anymore.
  Durian has an *evil* smell.`
            }
          ]
        },
        {
          types: [
            {
              name: 'Verb',
              text: `The poor are *excepted* from this tax.`
            },
            {
              name: 'Preposition',
              text: `All *except* Ravi were present.
  There was nothing in the cupboard *except* a tin of beans.`
            },
            {
              name: 'Conjunction',
              text: `I shall help you, *except* that I do not give you my word.
  You look a bit like my sister, *except* she has longer hair.`
            }
          ]
        },
        {
          types: [
            {
              name: 'Noun',
              text: ` An *express* runs from Amritsar to Delhi.
  I took the *express* into town.`
            },
            {
              name: 'Verb',
              text: `I have *expressed* my views
  Words cannot *express* a mother's love for her child.`
            },
            {
              name: 'Adjective',
              text: `I will catch the *express* train.
  I gave him *express* instructions not to begin until I arrived, but he ignored me.`
            },
            {
              name: 'Adverb',
              text: `The letter was sent *express*.`
            }
          ]
        },
        {
          types: [
            {
              name: 'Noun',
              text: `The *fair* is in full swing.
  When will you learn to distinguish between the *fair* and the foul?`
            },
            {
              name: 'Adjective',
              text: `I need *fair* deal and no favor.
  Monday's child is *fair* of the face.
  She had *fair* hair and blue eyes.
  The patient was in a *fair* condition after some treatment.`
            },
            {
              name: 'Adverb',
              text: `We should play *fair*.`
            }
          ]
        },
        {
          types: [
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
              text: `He traveled by a *fast* train.
  I am going to buy a *fast* car.
  All the washing has come out pink. That red T-shirt was not *fast*.
  There must be something wrong with the wall clock. It is always *fast*.`
            },
            {
              name: 'Adverb',
              text: `He ran *fast* and caught the train.
  Hold this rope as *fast* as you can.
  He is *fast* asleep.
  The horsemen came *fast* on our heels.`
            }
          ]
        },
        {
          types: [
            {
              name: 'Noun',
              text: ` I paid my *fine* for speeding.
  Make sure to pay the due without a *fine*.`
            },
            {
              name: 'Verb',
              text: `He is *fined* for his absence.`
            },
            {
              name: 'Adjective',
              text: `What a *fine* weather it is!
  It is *fine* to talk informally to someone as old as you.
  Niki is a *fine* looking gentleman.`
            },
            {
              name: 'Adverb',
              text: `Please tune *fine*.`
            }
          ]
        },
        {
          types: [
            {
              name: 'Noun',
              text: `There is no *fire* in the hearth.
  We sat around the *fire* singing songs and telling stories.
  There was a *fire* at the school last night and the whole place burned down.
  The *fire* was laid and needed to be lit.
  The *fire* from the enemy guns kept us from attacking.`
            },
            {
              name: 'Verb',
              text: `The gun was *fired*.
  If you *fire* the pottery at too high a temperature, it may crack.
  She should *fire* the employee that stole from the company.
  He answered the questions the reporters *fired* at him.`
            },
            {
              name: 'Adjective',
              text: `Did you enjoy the *fire*-works last night.`
            }
          ]
        },
        {
          types: [
            {
              name: 'Verb',
              text: `At last he *freed* himself from the cruel moneylender.`
            },
            {
              name: 'Adjective',
              text: `I have a *free* pass for the show.
  He was given *free* rein to do whatever he wanted.
  In the above question 'x' is the *free* variable.
  We had a wholesome, filling meal, *free* of meat.`
            },
            {
              name: 'Adverb',
              text: `The bird was set *free*.
  I got this bike *free* of cost.`
            }
          ]
        },
        {
          types: [
            {
              name: 'Noun',
              text: `Whatever God does, He does for our *good*.`
            },
            {
              name: 'Adjective',
              text: `He is a *good* boy.
  The bread is still *good*.
  The food was very *good*
  Eat a *good* dinner so you will be ready for the big game tomorrow.
  Carrots are *good* for your health and eyes as well.`
            },
            {
              name: 'Adverb',
              text: `The boy is doing *good*.`
            }
          ]
        },
        {
          types: [
            {
              name: 'Noun',
              text: `Never do things by *halves*.
  Three-quarters minus a quarter is a *half*`
            },
            {
              name: 'Adjective',
              text: `*Half* a loaf is better than no bread.
  I just have a *half* hour of work left.
  *Half* knowledge on any subject can prove to be hazardous.`
            },
            {
              name: 'Adverb',
              text: `Well begun is *half* done.
  She helped me *half*-heartedly.`
            }
          ]
        },
        {
          types: [
            {
              name: 'Noun',
              text: `I have no *house* to live in.
  This is my *house* and my family's ancestral home.
  They set up a *house* in a posh apartment.
  The pilot took charge of the wheel *house* until the ship was moored.
  After her swan song, there wasn't a dry eye in the *house*.
  The current Queen is from the *House* of Windsor.`
            },
            {
              name: 'Verb',
              text: `The library was *housed* in an old building.
  The car is *housed* in the garage.`
            },
            {
              name: 'Adjective',
              text: `The library was *housed* in an old building.`
            },
            {
              name: 'Adjective',
              text: `Mr. Ravi is a *house*-surgeon these days.`
            }
          ]
        },
        {
          types: [
            {
              name: 'Noun',
              text: `*Iron* is a useful metal.
  His golf club is made of pure *iron*`
            },
            {
              name: 'Verb',
              text: `*Iron* your clothes.`
            },
            {
              name: 'Adjective',
              text: `Sardar Patel was an *iron* man.
  She had an *iron* will.`
            }
          ]
        },
        {
          types: [
            {
              name: 'Noun',
              text: `The patient is sure to breathe his *last*.`
            },
            {
              name: 'Verb',
              text: `The meeting will *last* for two hours.
  Summer seems to *last* longer each year.
  I don't know how much longer we can *last* without reinforcements in this cold weather.`
            },
            {
              name: 'Adjective',
              text: `This bank is on its *last* leg.
  The *last* person I want to meet is Helen.
  The *last* thing to do is to ask for help.`
            },
            {
              name: 'Adverb',
              text: `He came *last* of all.
  *Last* but not least is a performance by the eighth graders. `
            }
          ]
        },
        {
          types: [
            {
              name: 'Noun',
              text: `There is no *light* in the hall.
  As you can see, this spacious dining room gets a lot of *light* in the mornings.
  Can you throw any *light* on this problem?`
            },
            {
              name: 'Verb',
              text: `Please *light* the lamp.
  I *lit* upon a rare book in a second-hand bookseller.
  The cat fell out of the window but luckily *lit* on its feet.`
            },
            {
              name: 'Adjective',
              text: `Give only *light* food to the patient.
  This artist clearly had a *light*, flowing touch.`
            },
            {
              name: 'Adverb',
              text: `*Light* come, *light* go.
  I prefer to travel *light*.`
            }
          ]
        },
        {
          types: [
            {
              name: 'Noun',
              text: `I do not know your *likes* and dislikes.
  Tell me your *likes* and dislikes.`
            },
            {
              name: 'Adverb',
              text: `There are lots of birds *like* ducks and gulls in the park.`
            },
            {
              name: 'Conjunction',
              text: `It looks *like* you have finished the project.`
            },
            {
              name: 'Verb',
              text: `I *like* this apple.
  I *like* to go to the dentist every six months.`
            },
            {
              name: 'Adjective',
              text: `*Like* father, *like* son.
  My friend and I have *like* minds.`
            },
            {
              name: 'Preposition',
              text: `He works *like* a bee.
  These hamburgers taste *like* leather.`
            }
          ]
        },
        {
          types: [
            {
              name: 'Noun',
              text: `What is the *long* and short of this matter?
  Every uptick made the *longs* cheer.`
            },
            {
              name: 'Verb',
              text: `I *long* to have a watch.
  She *longed* for him to come back.`
            },
            {
              name: 'Adjective',
              text: `It is a *long* story.
  It's a *long* way from the Earth to the Moon.
  The pyramids of Egypt have been around for a *long* time.`
            },
            {
              name: 'Adverb',
              text: `May you live *long*.
  Will this interview take *long*?
  How *long* is it until the next bus arrives?`
            }
          ]
        },
        {
          types: [
            {
              name: 'Noun',
              text: `Our *master* is absent today.
  Mark Twain was a *master* of fiction.
  The band couldn't find the *master*, so they re-recorded their tracks.`
            },
            {
              name: 'Verb',
              text: `I have *mastered* the situation of the city.`
            },
            {
              name: 'Adjective',
              text: `Here is a *master*-key.`
            }
          ]
        },
        {
          types: [
            {
              name: 'Noun',
              text: `*Much* has already been done in this respect.`
            },
            {
              name: 'Pronoun',
              text: `*Much* of the work has already been done.
  From those to whom *much* has been given *much* is expected.`
            },
            {
              name: 'Determiner',
              text: `I don't have *much* money.`
            },
            {
              name: 'Adjective',
              text: `He has done *much* work today.`
            },
            {
              name: 'Adverb',
              text: `He has worked *much* today.
  I don't like fish *much*.`
            }
          ]
        },
        {
          types: [
            {
              name: 'Noun',
              text: `What is the *mean* of ten and sixteen.`
            },
            {
              name: 'Verb',
              text: `What do you *mean* to say?
  I'm afraid I don't understand what you *mean*.
  didn't *mean* to knock your tooth out.
  Don't be angry, she *meant* well.`
            },
            {
              name: 'Adjective',
              text: `Is he not a *mean* fellow?
  It was *mean* to steal the girl's piggy bank, but he just had to get uptown and he had no cash of his own.
  It must have been a *mean* typhoon that leveled this town.
  Watch out for her, she's *mean*.
  He's so *mean*. I've never seen him spend so much as five pounds on presents for his children.`
            }
          ]
        },
        {
          types: [
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
              text: `Diamonds are *mined* in South Africa.
  We had to slow our advance after the enemy *mined* the road ahead of us.
  Crater of Diamonds State Park is the only place in the world where visitors can *mine* their own diamonds.`
            }
          ]
        }
      ]
    }
  ]
};
