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
              options: 'cheerful, gloomy, silent'
            },
            {
              qText: 'The novel had a *captivating* storyline.',
              options: 'engaging, boring, tiresome'
            },
            {
              qText: 'She found the puzzle to be quite *challenging*.',
              options: 'demanding, easy, uncomplicated'
            },
            {
              qText: 'The artwork was truly *magnificent*.',
              options: 'grand, mediocre, ordinary'
            },
            {
              qText: `The comedian's jokes were *hilarious*.`,
              options: 'amusing, dull, humorless'
            }
          ]
        },
        {
          questions: [
            {
              qText: `The teacher's explanation was *comprehensive*.`,
              options: 'thorough, incomplete, superficial'
            },
            {
              qText: 'The forest was filled with *serene* beauty.',
              options: 'peaceful, chaotic, turbulent'
            },
            {
              qText: 'She had a *profound* understanding of the topic.',
              options: 'deep, shallow, superficial'
            },
            {
              qText: 'The project required *meticulous* attention to detail.',
              options: 'careful, careless, sloppy'
            },
            {
              qText: 'The performance was *exceptional*.',
              options: 'outstanding, average, mediocre'
            }
          ]
        },
        {
          questions: [
            {
              qText: 'The mountain view was *breathtaking*.',
              options: 'stunning, unimpressive, ordinary'
            },
            {
              qText: 'His generosity was *commendable*.',
              options: 'praiseworthy, blameworthy, reprehensible'
            },
            {
              qText: 'The novel had a *riveting* plot.',
              options: 'engrossing, uninteresting, tedious'
            },
            {
              qText: 'The recipe produced *delicious* results.',
              options: 'tasty, unappetizing, bland'
            },
            {
              qText: 'Her response was *prompt*.',
              options: 'quick, delayed, sluggish'
            }
          ]
        },
        {
          questions: [
            {
              qText: `The movie's special effects were *spectacular*.`,
              options: 'impressive, unremarkable, ordinary'
            },
            {
              qText: 'His speech was *inspiring*.',
              options: 'motivating, uninspiring, discouraging'
            },
            {
              qText: 'The concert was *electrifying*.',
              options: 'thrilling, dull, lifeless'
            },
            {
              qText: 'The solution was *innovative*.',
              options: 'creative, conventional, unimaginative'
            },
            {
              qText: 'She *vanished* from the party without a trace.',
              options: 'disappeared, appeared, emerged'
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
              options: 'Resembling, Contrasting, Ignoring'
            },
            {
              qText: 'She will return in *a matter of moments*.',
              options: 'Seconds, Hours, Days'
            },
            {
              qText:
                "He's been studying this subject *for an extended fortnight*.",
              options: 'Two weeks, Months, Years'
            },
            {
              qText:
                "I haven't been to that city in *a considerable span of time*.",
              options: 'Ages, Months, Moments'
            },
            {
              qText: "He's been living in that house *since time immemorial*.",
              options: 'Eternally, Indefinitely, Infinitely'
            }
          ]
        },
        {
          questions: [
            {
              qText: 'She made a decision *with great hesitation*.',
              options: 'Reluctantly, Confidently, Excitedly'
            },
            {
              qText:
                'The sunsets in this place are *unquestionably awe-inspiring*.',
              options: 'Breathtaking, Majestic, Sublime'
            },
            {
              qText: 'She completed the task *with lightning speed*.',
              options: 'Rapidly, Hastily, Lethargically'
            },
            {
              qText: 'The art in this gallery is *absolutely mesmerizing*.',
              options: 'Enchanting, Ordinary, Unremarkable'
            },
            {
              qText: 'He spoke *with unwavering confidence*.',
              options: 'Firmly, Hesitantly, Unsteadily'
            }
          ]
        },
        {
          questions: [
            {
              qText: `The scientist's theory is highly intricate.`,
              options: 'Complex, Complicated, Elaborate'
            },
            {
              qText:
                'The rocket journeyed *to the furthest reaches of the cosmos*.',
              options: 'Outer space, Astral realm, Inner sanctum'
            },
            {
              qText: 'The cat slumbers *for the majority of the day*.',
              options: 'Extensively, Seldom, Occasionally'
            },
            {
              qText: 'He will appear *in a short while*.',
              options: 'Shortly, Eventually, Never'
            },
            {
              qText: 'The treasure was concealed *beneath the earth*.',
              options: 'Underground, Aboveground, Subsurface'
            }
          ]
        },
        {
          questions: [
            {
              qText: 'He reached the venue *well in advance of the event*.',
              options: 'Early, Late, Just in time'
            },
            {
              qText: 'The athletes trained *for numerous seasons*.',
              options: 'Extensively, Briefly, Forever'
            },
            {
              qText: 'The museum is accessible *around the clock*.',
              options: '24/7, Part-time, On weekends'
            },
            {
              qText: 'He started his journey *at the crack of dawn*.',
              options: 'Early morning, Late night, Midday'
            },
            {
              qText: `The painting's are *exceptionally intricate*.`,
              options: 'Detailed, Fine-grained, Elaborate'
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
            text: `Perspicacity - Keen mental perception and understanding
Rugged - Rough, uneven, and challenging
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
              options: `Keen insight or shrewdness 
Lack of knowledge or expertise`
            },
            {
              qText:
                "The candidate's persistence throughout the campaign impressed many voters.",
              options: `Continued determination and effort 
Frequent changes in direction`
            },
            {
              qText: `The speaker's *eloquence* held the audience's attention for hours.`,
              options: `Persuasive speaking 
Lack of clear expression or articulation`
            },
            {
              qText:
                'Her *assiduous* efforts in research resulted in groundbreaking discoveries.',
              options: `Diligent, careful, and thorough 
Lack of interest or enthusiasm`
            },
            {
              qText: `The film's ambiguity left viewers debating its meaning for days.`,
              options: `Uncertainty or vagueness in interpretation 
Clear and unequivocal meaning`
            }
          ]
        },
        {
          questions: [
            {
              qText:
                'The team showed great *resilience* in the face of adversity.',
              options: `Capacity to recover quickly 
Fragility and vulnerability`
            },
            {
              qText:
                'Her *languid* movements indicated her fatigue and lack of energy.',
              options: `Slow and lacking energy 
Quick, energetic, and active`
            },
            {
              qText: `The singer's *haunting* voice left a lasting impression on the audience.`,
              options: `Eerily beautiful and unforgettable
Unpleasant and forgettable`
            },
            {
              qText: 'His *astute* observations revealed valuable insights.',
              options: `Perceptive and sharp
Oblivious and dull`
            },
            {
              qText:
                "The politician's *candid* speech was refreshing in a world of empty promises.",
              options: `Frank, honest, and straightforward
Deceptive and insincere`
            }
          ]
        },
        {
          questions: [
            {
              qText: `The inventor's *innovative* design revolutionized the industry.`,
              options: `New and creative
Sticking to traditional and outdated methods`
            },
            {
              qText: 'His *euphoric* reaction to the news was contagious.',
              options: `Intensely happy and elated
Depressed and despondent`
            },
            {
              qText: `The novel's *prolixity* made it challenging to read due to its excessive length.`,
              options: `Excessive wordiness 
Conciseness and brevity`
            },
            {
              qText: `The detective's *keen* instincts helped solve the case.`,
              options: `Sharply perceptive and observant
Dull and oblivious`
            },
            {
              qText:
                "The CEO's *avarice* for wealth and power led to unethical business practices.",
              options: `Extreme greed 
Generosity and selflessness`
            }
          ]
        },
        {
          questions: [
            {
              qText: `The detective's *perspicacity* allowed her to notice subtle clues that others missed.`,
              options: `Keen mental perception and understanding 
Lack of attention to detail`
            },
            {
              qText: 'The hiker trekked through the *rugged* terrain.',
              options: `Rough, uneven, and challenging
Smooth and easy`
            },
            {
              qText:
                'Her *reticence* in the meeting was interpreted as a lack of interest.',
              options: `Reserved behavior
Enthusiasm or clarity`
            },
            {
              qText:
                'The new technology *revolutionized* the way we communicate.',
              options: `Radically transformed and improved
Barely had an impact`
            },
            {
              qText: 'Her *assiduous* work ethic earned her a promotion.',
              options: `Hardworking, diligent, and persistent
Lazy and apathetic`
            }
          ]
        },
        {
          questions: [
            {
              qText: 'The abandoned house had an *eerie* atmosphere.',
              options: `Strange and frightening
Warm and inviting`
            },
            {
              qText:
                'The *zenith* of his career was when he won the prestigious award.',
              options: `Highest point
Lowest point`
            },
            {
              qText: `The pianist's *virtuoso* performance amazed the audience.`,
              options: `Highly skilled
A person with no particular skill or talent`
            },
            {
              qText:
                'The *cacophony* of sounds in the busy marketplace was overwhelming.',
              options: `Harsh mixture 
Peaceful silence`
            },
            {
              qText: `The novel's *intricate* plot kept readers guessing until the end.`,
              options: `Very detailed and complicated
Simple and straightforward`
            }
          ]
        }
      ]
    }
  ]
};
