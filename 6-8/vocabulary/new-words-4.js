export default {
  label: 'New Words',
  id: 'new-words-4',
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
            text: `Exuberant - Enthusiastic
Intriguing - Fascinating
Puzzling - Confusing
Majestic - Awe-inspiring
Hysterical - Uproarious`
          },
          {
            type: 'hilight',
            text: `Thorough - Comprehensive
Tranquil - Peaceful
Proficient - Competent
Precise - Exact
Outstanding - Exceptional`
          },
          {
            type: 'hilight',
            text: `Mesmerizing - Captivating
Admirable - Praiseworthy
Compelling - Engrossing
Delightful - Enjoyable
Swift - Quick`
          },
          {
            type: 'hilight',
            text: `Stunning - Impressive
Motivating - Inspiring
Thrilling - Exciting
Eccentric - Unconventional
Mundane - Ordinary`
          }
        ]
      }
    },
    {
      id: 'mcq',
      label: 'Synonym Challenge',
      type: 'mcq',
      commonData: {
        title: 'Guess the synonym of the underlined word.'
      },
      data: [
        {
          questions: [
            {
              qText: 'The child was *exuberant* at the playground.',
              options: 'enthusiastic, gloomy, lethargic'
            },
            {
              qText: 'The novel had an *intriguing* storyline.',
              options: 'fascinating, boring, tedious'
            },
            {
              qText: 'She found the riddle to be *puzzling*.',
              options: 'confusing, easy, straightforward'
            },
            {
              qText: 'The artwork was truly *majestic*.',
              options: 'awe-inspiring, mediocre, unimpressive'
            },
            {
              qText: `The comedian's jokes were *hysterical*.`,
              options: 'uproarious, dull, humorless'
            }
          ]
        },
        {
          questions: [
            {
              qText: `The teacher's explanation was *thorough*.`,
              options: 'comprehensive, incomplete, superficial'
            },
            {
              qText: 'The garden was filled with *tranquil* beauty.',
              options: 'peaceful, chaotic, turbulent'
            },
            {
              qText: 'She had a *proficient* understanding of the topic.',
              options: 'competent, inept, amateurish'
            },
            {
              qText: 'The project required *precise* attention to detail.',
              options: 'exact, careless, sloppy'
            },
            {
              qText: 'The performance was *outstanding*.',
              options: 'exceptional, average, mediocre'
            }
          ]
        },
        {
          questions: [
            {
              qText: 'The sunset view was *mesmerizing*.',
              options: 'captivating, unimpressive, ordinary'
            },
            {
              qText: 'His generosity was *admirable*.',
              options: 'praiseworthy, blameworthy, reprehensible'
            },
            {
              qText: 'The film had a *compelling* plot.',
              options: 'engrossing, uninteresting, tedious'
            },
            {
              qText: 'The dish produced *delightful* results.',
              options: 'enjoyable, unappetizing, bland'
            },
            {
              qText: 'Her response was *swift*.',
              options: 'quick, delayed, sluggish'
            }
          ]
        },
        {
          questions: [
            {
              qText: `The documentary's visuals were *stunning*.`,
              options: 'impressive, unremarkable, ordinary'
            },
            {
              qText: 'His speech was *motivating*.',
              options: 'inspiring, uninspiring, discouraging'
            },
            {
              qText: 'The concert was *thrilling*.',
              options: 'exciting, dull, lifeless'
            },
            {
              qText: 'His behavior was *eccentric*.',
              options: 'unconventional, conventional, ordinary'
            },
            {
              qText: 'The novel had a *mundane* plot.',
              options: 'ordinary, extraordinary, exceptional'
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
            text: `Exuberant × Gloomy
Intriguing × Boring
Puzzling × Clear
Majestic × Mediocre
Hysterical × Somber`
          },
          {
            type: 'hilight',
            text: `Thorough × Incomplete
Tranquil × Chaotic
Proficient × Inept
Outstanding × Average`
          },
          {
            type: 'hilight',
            text: `Mesmerizing × Unimpressive
Compelling × Uninteresting
Delightful × Unappetizing
Swift × Delayed`
          },
          {
            type: 'hilight',
            text: `Stunning × Unremarkable
Motivating × Discouraging
Thrilling × Dull
Eccentric × Conventional
Mundane × Extraordinary`
          }
        ]
      }
    },
    {
      id: 'mcq',
      label: 'Antonym Challenge',
      type: 'mcq',
      commonData: {
        title: 'Guess the antonym of the underlined word.'
      },
      data: [
        {
          questions: [
            {
              qText: 'The child was *exuberant* at the playground.',
              options: 'gloomy, lethargic, subdued'
            },
            {
              qText: 'The novel had an *intriguing* storyline.',
              options: 'boring, tedious, uninteresting'
            },
            {
              qText: 'She found the riddle to be *puzzling*.',
              options: 'easy, straightforward, clear'
            },
            {
              qText: 'The artwork was truly *majestic*.',
              options: 'mediocre, unimpressive, ordinary'
            },
            {
              qText: "The comedian's jokes were *hysterical*.",
              options: 'dull, humorless, somber'
            }
          ]
        },
        {
          questions: [
            {
              qText: "The teacher's explanation was *thorough*.",
              options: 'incomplete, superficial, vague'
            },
            {
              qText: 'The garden was filled with *tranquil* beauty.',
              options: 'chaotic, turbulent, agitated'
            },
            {
              qText: 'She had a *proficient* understanding of the topic.',
              options: 'inept, amateurish, unskilled'
            },
            {
              qText: 'The performance was *outstanding*.',
              options: 'average, mediocre, unremarkable'
            }
          ]
        },
        {
          questions: [
            {
              qText: 'The sunset view was *mesmerizing*.',
              options: 'unimpressive, ordinary, lackluster'
            },
            {
              qText: 'The film had a *compelling* plot.',
              options: 'uninteresting, tedious, uninspiring'
            },
            {
              qText: 'The dish produced *delightful* results.',
              options: 'unappetizing, bland, tasteless'
            },
            {
              qText: 'Her response was *swift*.',
              options: 'delayed, sluggish, slow'
            }
          ]
        },
        {
          questions: [
            {
              qText: "The documentary's visuals were *stunning*.",
              options: 'unremarkable, ordinary, average'
            },
            {
              qText: 'His speech was *motivating*.',
              options: 'discouraging, uninspiring, demotivating'
            },
            {
              qText: 'The concert was *thrilling*.',
              options: 'dull, lifeless, boring'
            },
            {
              qText: 'His behavior was *eccentric*.',
              options: 'conventional, ordinary, traditional'
            },
            {
              qText: 'The novel had a *mundane* plot.',
              options: 'extraordinary, exceptional, remarkable'
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
              options: 'Resembling, Contrasting, Imitating'
            },
            {
              qText: 'She will return in *a matter of moments*.',
              options: 'Seconds, Hours, Days'
            },
            {
              qText: 'She made a decision *with profound reluctance*.',
              options: 'Grudgingly, Wholeheartedly, Joyfully'
            },
            {
              qText:
                "I haven't been to that city in *a considerable span of time*.",
              options: 'Ages, Months, Eons'
            },
            {
              qText: "He's been living in that house *since time immemorial*.",
              options: 'Eternally, Indefinitely, Perpetually'
            }
          ]
        },
        {
          questions: [
            {
              qText: 'The sunsets in this location are *undeniably sublime*.',
              options: 'Exquisite, Grandiose, Mundane'
            },
            {
              qText: 'She completed the task *with lightning celerity*.',
              options: 'Rapidly, Tardily, Carelessly'
            },
            {
              qText: 'The art in this exhibition is *positively enchanting*.',
              options: 'Captivating, Ordinary, Uninspiring'
            },
            {
              qText: 'He spoke *with unwavering certainty*.',
              options: 'Resolutely, Hesitantly, Unsteadily'
            },
            {
              qText:
                'The sunsets in this place are *undeniably awe-inspiring*.',
              options: 'Sublime, Majestic, Breathtaking'
            }
          ]
        },
        {
          questions: [
            {
              qText: "I haven't visited that city *since antiquity*.",
              options: 'Timelessly, Recently, Infrequently'
            },
            {
              qText: "He's been living in that mansion *for eons*.",
              options: 'Indefinitely, Perpetually, Endlessly'
            },
            {
              qText: 'She completed the task *at lightning velocity*.',
              options: 'Expeditiously, Hesitatingly, Leisurely'
            },
            {
              qText: 'The art in this museum is *totally captivating*.',
              options: 'Enrapturing, Bland, Uninteresting'
            },
            {
              qText: `The project's success was the result of *an extended duration* of hard work.`,
              options: 'Eons, Years, Months'
            }
          ]
        },
        {
          questions: [
            {
              qText: 'The magical performance was *utterly captivating*. ',
              options: 'Enrapturing, Dull, Ordinary'
            },
            {
              qText: 'She faced the challenges *with indomitable assurance*. ',
              options: 'Resolutely, Hesitantly, Fearfully'
            },
            {
              qText:
                'The architect designed a building with exceptionally convoluted details.',
              options: 'Intricate, Simple, Plain'
            },
            {
              qText: `The actor's performance was *in the manner of* a seasoned pro.`,
              options: 'Emulating, Acting, Imitative'
            },
            {
              qText: `She agreed to help *with profound enthusiasm*. `,
              options: 'Eagerly, Grudgingly, Unwillingly'
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
            text: `Efficacious - Effective and successful
Equivocal - Ambiguous and unclear
Obfuscation - Intentional obscuring or confusion
Ostentatious - Excessive and showy
Ubiquity - Widespread presence`
          },
          {
            type: 'hilight',
            text: `Cacophonous - Harsh and discordant
Intrepid - Fearless and courageous
Juxtaposition - Side-by-side placement
Acerbic - Sharp and biting
Lucrative - Highly profitable`
          },
          {
            type: 'hilight',
            text: `Crystalline - Pure and transparent
Effulgent - Radiant and shining
Laconic - Brief and concise
Autocratic - Authoritarian and controlling
Ephemeral - Short-lived and fleeting`
          },
          {
            type: 'hilight',
            text: `Pervasive - Widespread and prevalent
Equanimity - Calmness and composure
Mellifluous - Smooth and melodious
Serendipitous - Accidental and fortunate
Eclectic - Diverse and varied`
          },
          {
            type: 'hilight',
            text: `Altruistic - Selfless and compassionate
Quixotic - Idealistic and impractical
Lugubrious - Mournful and gloomy
Frugality - Economical and thrifty nature
Peripatetic - Wandering and traveling`
          }
        ]
      }
    },
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
              qText: 'His *efficacious* treatment quickly cured the patient.',
              options: 'Effective and successful, Ineffective and useless'
            },
            {
              qText:
                'Her *equivocal* response left us unsure of her intentions.',
              options: 'Ambiguous and unclear, Clear and straightforward'
            },
            {
              qText: `The scientist's *obfuscation* of the data made it difficult to understand.`,
              options:
                'Intentional obscuring or confusion, Clarity and transparency'
            },
            {
              qText:
                'His *ostentatious* display of wealth made others uncomfortable.',
              options: 'Excessive and showy, Modest and unobtrusive'
            },
            {
              qText:
                'The *ubiquity* of smartphones has transformed how we communicate.',
              options: 'Widespread presence, Limited and scarce presence'
            }
          ]
        },
        {
          questions: [
            {
              qText: 'The *cacophonous* music in the club was unbearable.',
              options: 'Harsh and discordant, Melodious and harmonious'
            },
            {
              qText: `The detective's *intrepid* pursuit of the criminal led to an arrest.`,
              options: 'Fearless and courageous, Timid and fearful'
            },
            {
              qText:
                'The *juxtaposition* of old and new architecture in the city was striking.',
              options: 'Side-by-side placement, Complete separation'
            },
            {
              qText: 'His *acerbic* humor often offended people.',
              options: 'Sharp and biting, Kind and gentle'
            },
            {
              qText:
                'Her *lucrative* investment in the company brought substantial profits.',
              options: 'Highly profitable, Unprofitable and unsuccessful'
            }
          ]
        },
        {
          questions: [
            {
              qText:
                "The mountain's *crystalline* waters were incredibly clear.",
              options: 'Pure and transparent, Muddy and murky'
            },
            {
              qText: `His *effulgent* smile brightened everyone's day.`,
              options: 'Radiant and shining, Gloomy and dull'
            },
            {
              qText:
                "The writer's *laconic* style was characterized by brevity.",
              options: 'Brief and concise, Long-winded and verbose'
            },
            {
              qText: `The CEO's *autocratic* leadership style left little room for employee input.`,
              options:
                'Authoritarian and controlling, Collaborative and democratic'
            },
            {
              qText:
                'His *ephemeral* fame faded quickly as a new star emerged.',
              options: 'Short-lived and fleeting, Long-lasting and enduring'
            }
          ]
        },
        {
          questions: [
            {
              qText:
                'The *pervasive* influence of technology has impacted all industries.',
              options: 'Widespread and prevalent, Limited and restricted'
            },
            {
              qText:
                'The *equanimity* with which he faced adversity was admirable.',
              options: 'Calmness and composure, Panic and chaos'
            },
            {
              qText:
                'His *mellifluous* voice was perfect for radio broadcasting.',
              options: 'Smooth and melodious, Grating and harsh'
            },
            {
              qText:
                'The *serendipitous* discovery of the hidden treasure was a surprise.',
              options: 'Accidental and fortunate, Planned and expected'
            },
            {
              qText: `The artist's *eclectic* style incorporated various influences.`,
              options: 'Diverse and varied, Narrow and limited'
            }
          ]
        },
        {
          questions: [
            {
              qText:
                'Her *altruistic* acts of kindness endeared her to the community.',
              options: 'Selfless and compassionate, Selfish and unkind'
            },
            {
              qText:
                'The *quixotic* quest for utopia was noble but unrealistic.',
              options: 'Idealistic and impractical, Realistic and achievable'
            },
            {
              qText: 'Her *lugubrious* expression revealed her sadness.',
              options: 'Mournful and gloomy, Cheerful and happy'
            },
            {
              qText: `The company's *frugality* in spending led to financial stability.`,
              options: 'Economical and thrifty nature, Extravagant and wasteful'
            },
            {
              qText: `The explorer's *peripatetic* lifestyle led him to many places.`,
              options: 'Wandering and traveling, Settled and stationary'
            }
          ]
        }
      ]
    }
  ]
};
