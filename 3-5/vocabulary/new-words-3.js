export default {
  label: 'New Words 3',
  id: 'new-words-3',
  list: [
    {
      id: 'reading',
      type: 'passage',
      label: 'Words List',
      data: {
        title: 'Synonyms',
        text: [
          `Two words are said to be synonyms, if they have similar meaning.`,
          {
            type: 'hilight',
            text: `Jovial - Cheerful
Captivating - Engaging
Challenging - Demanding
Magnificent - Grand
Hilarious - Amusing`
          },
          {
            type: 'hilight',
            text: `Comprehensive - Thorough
Serene - Peaceful
Profound - Deep
Meticulous - Careful
Exceptional - Outstanding`
          },
          {
            type: 'hilight',
            text: `Breathtaking - Stunning
Commendable - Praiseworthy
Riveting - Engrossing
Delicious - Tasty
Prompt - Quick`
          },
          {
            type: 'hilight',
            text: `Spectacular - Impressive
Inspiring - Motivating
Electrifying - Thrilling
Innovative - Creative
Vanished - Disappeared`
          }
        ]
      }
    },
    {
      id: 'mcq',
      label: 'We Mean the Same!',
      type: 'mcq',
      commonData: {
        title: 'Guess the synonym of the underlined word.'
      },
      data: [
        {
          questions: [
            {
              qText: 'The young boy was *jovial* at the party.',
              options: 'cheerful, gloomy, silent, upset'
            },
            {
              qText: 'The novel had a *captivating* storyline.',
              options: 'engaging, boring, tiresome, lazy'
            },
            {
              qText: 'She found the puzzle to be quite *challenging*.',
              options: 'demanding, easy, uncomplicated, trivial'
            },
            {
              qText: 'The artwork was truly *magnificent*.',
              options: 'grand, mediocre, ordinary, worthless'
            },
            {
              qText: `The comedian's jokes were *hilarious*.`,
              options: 'amusing, dull, humorless, boring'
            }
          ]
        },
        {
          questions: [
            {
              qText: `The teacher's explanation was *comprehensive*.`,
              options: 'thorough, incomplete, superficial, ordinary'
            },
            {
              qText: 'The forest was filled with *serene* beauty.',
              options: 'peaceful, chaotic, turbulent, intriguing'
            },
            {
              qText: 'She had a *profound* understanding of the topic.',
              options: 'deep, shallow, superficial, incomplete'
            },
            {
              qText: 'The project required *meticulous* attention to detail.',
              options: 'careful, careless, sloppy, clumsy'
            },
            {
              qText: 'The performance was *exceptional*.',
              options: 'outstanding, average, mediocre, ordinary'
            }
          ]
        },
        {
          questions: [
            {
              qText: 'The mountain view was *breathtaking*.',
              options: 'stunning, unimpressive, ordinary, worthless'
            },
            {
              qText: 'His generosity was *commendable*.',
              options: 'praiseworthy, blameworthy, reprehensible, irresponsible'
            },
            {
              qText: 'The novel had a *riveting* plot.',
              options: 'engrossing, uninteresting, tedious, predictable'
            },
            {
              qText: 'The recipe produced *delicious* results.',
              options: 'tasty, unappetizing, bland, bitter'
            },
            {
              qText: 'Her response was *prompt*.',
              options: 'quick, delayed, sluggish, irrelevant'
            }
          ]
        },
        {
          questions: [
            {
              qText: `The movie's special effects were *spectacular*.`,
              options: 'impressive, unremarkable, ordinary, ubiquitous'
            },
            {
              qText: 'His speech was *inspiring*.',
              options: 'motivating, uninspiring, discouraging, demotivating'
            },
            {
              qText: 'The concert was *electrifying*.',
              options: 'thrilling, dull, lifeless, ugly'
            },
            {
              qText: 'The solution was *innovative*.',
              options: 'creative, conventional, unimaginative, repetative'
            },
            {
              qText: 'She *vanished* from the party without a trace.',
              options: 'disappeared, appeared, emerged, forsee'
            }
          ]
        }
      ]
    },
    {
      id: 'reading-2',
      type: 'passage',
      label: 'Words List',
      data: {
        title: 'Antonyms',
        text: [
          `Two words are said to be antonyms, if they have opposite meaning.`,
          {
            type: 'hilight',
            text: `Jovial × Gloomy
Captivating × Boring
Challenging × Easy
Magnificent × Ordinary
Hilarious × Humorless`
          },
          {
            type: 'hilight',
            text: `Comprehensive × Superficial
Serene × Turbulent
Profound × Superficial
Meticulous × Sloppy
Exceptional × Mediocre`
          },
          {
            type: 'hilight',
            text: `Breathtaking × Ordinary
Commendable × Reprehensible
Riveting × Tedious
Delicious × Bland
Prompt × Sluggish`
          },
          {
            type: 'hilight',
            text: `Spectacular × Ordinary
Inspiring × Discouraging
Electrifying × Lifeless
Innovative × Unimaginative`
          }
        ]
      }
    },
    //ref:E221 sentences created using chatGPT
    {
      id: 'mcq',
      label: 'Find the Antonym!',
      type: 'mcq',
      commonData: {
        title: 'Guess the antonym of the underlined word.'
      },
      data: [
        {
          questions: [
            {
              qText: 'The young boy was *jovial* at the party.',
              options: 'gloomy, cheerful, silent'
            },
            {
              qText: 'The novel had a *captivating* storyline.',
              options: 'boring, engaging, tiresome'
            },
            {
              qText: 'She found the puzzle to be quite *challenging*.',
              options: 'easy, demanding, uncomplicated'
            },
            {
              qText: 'The artwork was *magnificent*.',
              options: 'ordinary, grand, mediocre'
            },
            {
              qText: `The comedian's jokes were *hilarious*.`,
              options: 'humorless, amusing, dull'
            }
          ]
        },
        {
          questions: [
            {
              qText: `The teacher's explanation was *comprehensive*.`,
              options: 'superficial, thorough, incomplete'
            },
            {
              qText: 'The forest was filled with *serene* beauty.',
              options: 'turbulent, peaceful, chaotic'
            },
            {
              qText: 'She had a *profound* understanding of the topic.',
              options: 'superficial, deep, shallow'
            },
            {
              qText: 'The project had a *meticulous* attention to detail.',
              options: 'sloppy, careful, careless'
            },
            {
              qText: 'The performance was *exceptional*.',
              options: 'mediocre, outstanding, average'
            }
          ]
        },
        {
          questions: [
            {
              qText: 'The mountain view was *breathtaking*.',
              options: 'ordinary, stunning, unimpressive'
            },
            {
              qText: 'His generosity was *commendable*.',
              options: 'reprehensible, praiseworthy, blameworthy'
            },
            {
              qText: 'The novel had a *riveting* plot.',
              options: 'tedious, engrossing, uninteresting'
            },
            {
              qText: 'The recipe produced *delicious* results.',
              options: 'bland, tasty, unappetizing'
            },
            {
              qText: 'Her response was *prompt*.',
              options: 'sluggish, quick, delayed'
            }
          ]
        },
        {
          questions: [
            {
              qText: `The movie's special effects were *spectacular*.`,
              options: 'ordinary, impressive, unremarkable'
            },
            {
              qText: 'His speech was *inspiring*.',
              options: 'discouraging, motivating, uninspiring'
            },
            {
              qText: 'The concert was *electrifying*.',
              options: 'lifeless, thrilling, dull'
            },
            {
              qText: 'The solution was *innovative*.',
              options: 'unimaginative, creative, conventional'
            }
          ]
        }
      ]
    },
    {
      id: 'replace-words',
      label: 'Replace the Words',
      type: 'mcq',
      commonData: {
        title:
          'Choose the word that can replace the underlined words or group of words in the sentences.'
      },
      data: [
        {
          questions: [
            {
              qText:
                'The painting was created *in the likeness of* a famous artist.',
              options: 'resembling, contrasting, ignoring'
            },
            {
              qText: 'She will return in *a matter of moments*.',
              options: 'seconds, hours, days'
            },
            {
              qText:
                "He's been studying this subject *for an extended fortnight*.",
              options: 'two weeks, months, years'
            },
            {
              qText:
                "I haven't been to that city in *a considerable span of time*.",
              options: 'ages, months, moments'
            },
            {
              qText: "He's been living in that house *since time immemorial*.",
              options: 'eternally, indefinitely, infinitely'
            }
          ]
        },
        {
          questions: [
            {
              qText: 'She made a decision *with great hesitation*.',
              options: 'reluctantly, confidently, excitedly'
            },
            {
              qText:
                'The sunsets in this place are *unquestionably awe-inspiring*.',
              options: 'breathtaking, majestic, sublime'
            },
            {
              qText: 'She completed the task *with lightning speed*.',
              options: 'rapidly, hastily, lethargically'
            },
            {
              qText: 'The art in this gallery is *absolutely mesmerizing*.',
              options: 'enchanting, ordinary, unremarkable'
            },
            {
              qText: 'He spoke *with unwavering confidence*.',
              options: 'firmly, hesitantly, unsteadily'
            }
          ]
        },
        {
          questions: [
            {
              qText: "The scientist's theory is highly intricate.",
              options: 'complex, complicated, elaborate'
            },
            {
              qText:
                'The rocket journeyed *to the furthest reaches of the cosmos*.',
              options: 'outer space, astral realm, inner sanctum'
            },
            {
              qText: 'The cat slumbers *for the majority of the day*.',
              options: 'extensively, seldom, occasionally'
            },
            {
              qText: 'He will appear *in a short while*.',
              options: 'shortly, eventually, never'
            },
            {
              qText: 'The treasure was concealed *beneath the earth*.',
              options: 'underground, aboveground, subsurface'
            }
          ]
        },
        {
          questions: [
            {
              qText: 'He reached the venue *well in advance of the event*.',
              options: 'early, late, just in time'
            },
            {
              qText: 'The athletes trained *for numerous seasons*.',
              options: 'extensively, briefly, forever'
            },
            {
              qText: 'The museum is accessible *around the clock*.',
              options: '24/7, part-time, on weekends'
            },
            {
              qText: 'He started his journey *at the crack of dawn*.',
              options: 'early morning, late night, midday'
            },
            {
              qText: 'The paintings are *exceptionally intricate*.',
              options: 'detailed, fine-grained, elaborate'
            }
          ]
        }
      ]
    },
    {
      id: 'reading-4',
      type: 'passage',
      label: 'Words List',
      data: {
        title: 'Word Meanings',
        text: [
          {
            type: 'hilight',
            text: `Acumen - Keen insight or shrewdness
Persistence - Continued determination and effort
Eloquence - Persuasive speaking
Assiduous - Diligent, careful, and thorough
Ambiguity - Uncertainty or vagueness in interpretation`
          },
          {
            type: 'hilight',
            text: `Resilience - Capacity to recover quickly
Languid - Slow and lacking energy
Haunting - Eerily beautiful and unforgettable
Astute - Perceptive and sharp
Candid - Frank, honest, and straightforward`
          },
          {
            type: 'hilight',
            text: `Innovative - New and creative
Euphoric - Intensely happy and elated
Prolixity - Excessive wordiness
Keen - Sharply perceptive and observant
Avarice - Extreme greed`
          },
          {
            type: 'hilight',
            text: `Rugged - Rough, uneven, and challenging
Reticence - Reserved behavior
Revolutionized - Radically transformed and improved
Assiduous - Hardworking, diligent, and persistent`
          },
          {
            type: 'hilight',
            text: `Eerie - Strange and frightening
Zenith - Highest point
Virtuoso - Highly skilled
Cacophony - Harsh mixture
Intricate - Very detailed and complicated`
          }
        ]
      }
    },
    //ref: https://www.vocabulary.com/lists/52473 sentences created using chatGPT
    {
      id: 'mcq-5',
      label: 'What do we mean?',
      type: 'mcq',
      commonData: {
        title: 'Guess the meaning of the underlined word.'
      },
      data: [
        {
          questions: [
            {
              qText:
                'His *acumen* in business allowed him to make strategic decisions that led to success.',
              options: `keen insight or shrewdness 
lack of knowledge or expertise`
            },
            {
              qText:
                "The candidate's persistence throughout the campaign impressed many voters.",
              options: `continued determination and effort 
frequent changes in direction`
            },
            {
              qText: `The speaker's *eloquence* held the audience's attention for hours.`,
              options: `persuasive speaking 
lack of clear expression or articulation`
            },
            {
              qText:
                'Her *assiduous* efforts in research resulted in groundbreaking discoveries.',
              options: `diligent, careful, and thorough 
lack of interest or enthusiasm`
            },
            {
              qText: `The film's ambiguity left viewers debating its meaning for days.`,
              options: `uncertainty or vagueness in interpretation 
clear and unequivocal meaning`
            }
          ]
        },
        {
          questions: [
            {
              qText:
                'The team showed great *resilience* in the face of adversity.',
              options: `capacity to recover quickly 
fragility and vulnerability`
            },
            {
              qText:
                'Her *languid* movements indicated her fatigue and lack of energy.',
              options: `slow and lacking energy 
quick, energetic, and active`
            },
            {
              qText: `The singer's *haunting* voice left a lasting impression on the audience.`,
              options: `eerily beautiful and unforgettable
unpleasant and forgettable`
            },
            {
              qText: 'His *astute* observations revealed valuable insights.',
              options: `perceptive and sharp
oblivious and dull`
            },
            {
              qText:
                "The politician's *candid* speech was refreshing in a world of empty promises.",
              options: `frank, honest, and straightforward
deceptive and insincere`
            }
          ]
        },
        {
          questions: [
            {
              qText: `The inventor's *innovative* design revolutionized the industry.`,
              options: `new and creative
sticking to traditional and outdated methods`
            },
            {
              qText: 'His *euphoric* reaction to the news was contagious.',
              options: `intensely happy and elated
depressed and despondent`
            },
            {
              qText: `The novel's *prolixity* made it challenging to read due to its excessive length.`,
              options: `excessive wordiness 
conciseness and brevity`
            },
            {
              qText: `The detective's *keen* instincts helped solve the case.`,
              options: `sharply perceptive and observant
dull and oblivious`
            },
            {
              qText:
                "The CEO's *avarice* for wealth and power led to unethical business practices.",
              options: `extreme greed 
generosity and selflessness`
            }
          ]
        },
        {
          questions: [
            {
              qText: 'The hiker trekked through the *rugged* terrain.',
              options: `rough, uneven, and challenging
smooth and easy`
            },
            {
              qText:
                'Her *reticence* in the meeting was interpreted as a lack of interest.',
              options: `reserved behavior
enthusiasm or clarity`
            },
            {
              qText:
                'The new technology *revolutionized* the way we communicate.',
              options: `radically transformed and improved
barely had an impact`
            },
            {
              qText: 'Her *assiduous* work ethic earned her a promotion.',
              options: `hardworking, diligent, and persistent
lazy and apathetic`
            }
          ]
        },
        {
          questions: [
            {
              qText: 'The abandoned house had an *eerie* atmosphere.',
              options: `strange and frightening
warm and inviting`
            },
            {
              qText:
                'The *zenith* of his career was when he won the prestigious award.',
              options: `highest point
lowest point`
            },
            {
              qText: `The pianist's *virtuoso* performance amazed the audience.`,
              options: `highly skilled
a person with no particular skill or talent`
            },
            {
              qText:
                'The *cacophony* of sounds in the busy marketplace was overwhelming.',
              options: `harsh mixture 
peaceful silence`
            },
            {
              qText: `The novel's *intricate* plot kept readers guessing until the end.`,
              options: `very detailed and complicated
simple and straightforward`
            }
          ]
        }
      ]
    }
  ]
};
