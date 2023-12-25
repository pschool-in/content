export default {
  label: 'New Words',
  id: 'new-words-5',
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
            text: `Agile - Nimble
Radiant - Dazzling
Unwavering - Steadfast
Uplifting - Inspiring
Serene - Peaceful`
          },
          {
            type: 'hilight',
            text: `Eloquent - Articulate
Perplexing - Confusing
Grandiose - Awe-inspiring
Competent - Proficient
Effervescent - Bubbly`
          },
          {
            type: 'hilight',
            text: `Banal - Ordinary
Sublime - Exalted
Consummate - Supreme
Superlative - Excellent
Riveting - Engrossing`
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
              qText: 'The dog was *agile* as it leaped over the hurdles.',
              options: 'nimble, slow, clumsy, sluggish'
            },
            {
              qText: 'Her smile was *radiant* and lit up the room.',
              options: 'dazzling, dim, gloomy, faint'
            },
            {
              qText: 'He demonstrated *unwavering* commitment to his goal.',
              options: 'steadfast, wavering, uncertain, hesitant'
            },
            {
              qText: 'The music had an *uplifting* melody.',
              options: 'inspiring, depressing, discouraging, disheartening'
            },
            {
              qText: 'The forest was *serene* in the early morning.',
              options: 'peaceful, chaotic, turbulent, noisy'
            }
          ]
        },
        {
          questions: [
            {
              qText: 'Her speech was *eloquent* and moved the audience.',
              options: 'articulate, incoherent, unclear, mumbled'
            },
            {
              qText: 'She found the riddle to be *perplexing*.',
              options: 'confusing, easy, straightforward, misleading'
            },
            {
              qText: 'The artwork was truly *grandiose*.',
              options: 'awe-inspiring, mediocre, unimpressive, ordinary'
            },
            {
              qText: 'She had a *competent* understanding of the topic.',
              options: 'proficient, inept, amateurish, incomplete'
            },
            {
              qText: 'The child was *effervescent* at the playground.',
              options: 'bubbly, melancholic, apathetic, inert'
            }
          ]
        },
        {
          questions: [
            {
              qText: 'The novel had a *banal* plot.',
              options: 'ordinary, extraordinary, exceptional, predictable'
            },
            {
              qText: 'The artwork was truly *sublime*.',
              options: 'exalted, pedestrian, unremarkable, ordinary'
            },
            {
              qText: 'She had a *consummate* understanding of the topic.',
              options: 'supreme, inept, amateurish, incomplete'
            },
            {
              qText: 'The performance was *superlative*.',
              options: 'excellent, average, mediocre, ordinary'
            },
            {
              qText: 'The film had a *riveting* plot.',
              options: 'engrossing, uninteresting, tedious, predictable'
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
            text: `Agile × Clumsy
Radiant × Dim
Uplifting × Depressing
Serene × Chaotic
Eloquent × Incoherent`
          },
          {
            type: 'hilight',
            text: `Perplexing × Clear
Grandiose × Humble
Competent × Inept
Effervescent × Melancholic
Banal × Extraordinary`
          },
          {
            type: 'hilight',
            text: `Sublime × Ordinary
Consummate × Inept
Superlative × Average
Riveting × Uninteresting`
          }
        ]
      }
    },
    {
      id: 'mcq-anto',
      label: 'Antonym Challenge',
      type: 'mcq',
      commonData: {
        title: 'Guess the antonym of the underlined word.'
      },
      data: [
        {
          questions: [
            {
              qText: 'The dog was *agile* as it leaped over the hurdles.',
              options: 'clumsy, slow, lethargic, sluggish'
            },
            {
              qText: 'Her smile was *radiant*.',
              options: 'dim, gloomy, faint, dull'
            },
            {
              qText: 'The music had an *uplifting* melody.',
              options: 'depressing, discouraging, disheartening, dispiriting'
            },
            {
              qText: 'The forest was *serene* in the early morning.',
              options: 'chaotic, turbulent, noisy, agitated'
            }
          ]
        },
        {
          questions: [
            {
              qText: 'Her speech was *eloquent*.',
              options: 'incoherent, unclear, mumbled, inarticulate'
            },
            {
              qText: 'She found the riddle to be *perplexing*.',
              options: 'easy, straightforward, simple, clear'
            },
            {
              qText: 'The artwork was truly *grandiose*.',
              options: 'humble, modest, unpretentious, simple'
            },
            {
              qText: 'She had a *competent* understanding of the topic.',
              options: 'inept, amateurish, incomplete, unskilled'
            },
            {
              qText: 'The child was *effervescent* at the playground.',
              options: 'melancholic, apathetic, inert, lifeless'
            }
          ]
        },
        {
          questions: [
            {
              qText: 'The novel had a *banal* plot.',
              options: 'extraordinary, exceptional, remarkable, exciting'
            },
            {
              qText: 'The artwork was truly *sublime*.',
              options: 'ordinary, pedestrian, unimpressive, average'
            },
            {
              qText: 'She had a *consummate* understanding of the topic.',
              options: 'inept, amateurish, incomplete, unskilled'
            },
            {
              qText: 'The performance was *superlative*.',
              options: 'average, mediocre, ordinary, subpar'
            },
            {
              qText: 'The film had a *riveting* plot.',
              options: 'uninteresting, tedious, predictable, monotonous'
            }
          ]
        }
      ]
    },
    {
      id: 'replace-words',
      label: 'Replace the Words (Difficult)',
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
                'The manuscript was written *in the style of* a literary genius.',
              options: 'emulating, contrasting, mimicking'
            },
            {
              qText: "Her absence was noticed *in a moment's notice*.",
              options: 'instantly, gradually, reluctantly'
            },
            {
              qText:
                'His *exceedingly idealistic and unrealistic* dreams of solving world hunger overnight were met with skepticism.',
              options: 'quixotic, mediocre, ordinary'
            },
            {
              qText:
                'His *extremely unpleasant* behavior at the party annoyed everyone and led to his early departure.',
              options: 'obnoxious, leisurely, carelessly'
            },
            {
              qText: `John's *distrust for humankind* nature made it difficult for him to form lasting friendships.`,
              options: 'misanthropic, indefinitely, perpetually'
            }
          ]
        },
        {
          questions: [
            {
              qText:
                'A weekend getaway can help *in feeling young or fresh again* your mind and body.',
              options: 'rejuvenate, settle, clear'
            },
            {
              qText: 'He finished the race *with unyielding tenacity*.',
              options: 'persistence, hesitation, indifference'
            },
            {
              qText:
                'The artwork in this gallery is *unquestionably enthralling*.',
              options: 'captivating, uninspiring, dull'
            },
            {
              qText: 'She spoke *with unwavering conviction*.',
              options: 'resolutely, hesitantly, unsteadily'
            },
            {
              qText:
                'The sunsets in this location are *incontestably magnificent*.',
              options: 'majestic, sublime, grandiose'
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
            text: `Penurious - Poor and impoverished.
Effervescent - Bubbly and lively.
Quintessential - Typical and ideal.
Alacrity - Enthusiastic and quick response.
Munificent - Generous and lavish.`
          },
          {
            type: 'hilight',
            text: `Visceral - Instinctive and emotional.
Pugnacious - Aggressive and combative.
Melancholy - Gloomy and sorrowful.
Egalitarian - Equal and fair.
Eloquent - Articulate and persuasive.`
          },
          {
            type: 'hilight',
            text: `Lugubrious - Mournful and sorrowful.
Stoic - Calm and resilient.
Serendipitous - Fortunate and accidental.
Labyrinthine - Complicated and intricate.
Amicable - Friendly and peaceful.`
          },
          {
            type: 'hilight',
            text: `Acerbic - Harsh and cutting.
Garrulous - Talkative and chatty.
Dilapidated - Run-down and deteriorated.
Allegorical - Symbolic and metaphorical.
Clandestine - Secret and hidden.`
          },
          {
            type: 'hilight',
            text: `Peripatetic - Wandering and nomadic.
Mellifluous - Melodic and sweet-sounding.
Scrupulous - Meticulous and careful.
Gregarious - Sociable and friendly.
Quixotic - Idealistic and impractical.`
          }
        ]
      }
    },
    {
      id: 'mcq-6',
      label: 'What do we mean?',
      type: 'mcq',
      commonData: {
        title: 'Guess the meaning of the underlined word.'
      },
      data: [
        {
          questions: [
            {
              qText: 'His *penurious* lifestyle meant he lived in poverty.',
              options: 'poor and impoverished, wealthy and prosperous'
            },
            {
              qText:
                'Her *effervescent* personality always brightened the room.',
              options: 'bubbly and lively, dull and unenthusiastic'
            },
            {
              qText: 'The *quintessential* detective always solved the case.',
              options: 'typical and ideal, inadequate and subpar'
            },
            {
              qText: 'Her *alacrity* in completing the task was impressive.',
              options: 'enthusiastic and quick response, sluggish and slow'
            },
            {
              qText: 'His *munificent* donation greatly helped the charity.',
              options: 'generous and lavish, stingy and meager'
            }
          ]
        },
        {
          questions: [
            {
              qText: 'Her *visceral* reaction to the horror movie was intense.',
              options: 'instinctive and emotional, rational and controlled'
            },
            {
              qText: 'The *pugnacious* attitude led to conflicts with others.',
              options: 'aggressive and combative, peaceful and amicable'
            },
            {
              qText: 'His *melancholy* demeanor reflected his sadness.',
              options: 'gloomy and sorrowful, cheerful and joyful'
            },
            {
              qText: 'His *egalitarian* beliefs promoted equality for all.',
              options: 'equal and fair, biased and unjust'
            },
            {
              qText: 'The *eloquent* speech moved the audience to tears.',
              options: 'articulate and persuasive, incoherent and mumbled'
            }
          ]
        },
        {
          questions: [
            {
              qText: 'The *lugubrious* music reflected the melancholy mood.',
              options: 'mournful and sorrowful, cheerful and joyful'
            },
            {
              qText: 'Her *stoic* response to adversity was admirable.',
              options: 'calm and resilient, emotional and fragile'
            },
            {
              qText:
                'The *serendipitous* discovery of a rare coin was unexpected.',
              options: 'fortunate and accidental, planned and deliberate'
            },
            {
              qText: 'The *labyrinthine* maze was challenging to navigate.',
              options: 'complicated and intricate, simple and straightforward'
            },
            {
              qText:
                'The *amicable* resolution of the dispute pleased both parties.',
              options: 'friendly and peaceful, hostile and confrontational'
            }
          ]
        },
        {
          questions: [
            {
              qText:
                'The *acerbic* comments offended many people at the party.',
              options: 'harsh and cutting, gentle and soothing'
            },
            {
              qText: 'His *garrulous* nature made him a talkative companion.',
              options: 'talkative and chatty, quiet and reserved'
            },
            {
              qText: 'The *dilapidated* house was in a state of disrepair.',
              options: 'run-down and deteriorated, well-maintained and pristine'
            },
            {
              qText: 'Her *allegorical* story conveyed a deeper moral message.',
              options: 'symbolic and metaphorical, straightforward and literal'
            },
            {
              qText: 'The *clandestine* meeting was kept secret from others.',
              options: 'secret and hidden, public and exposed'
            }
          ]
        },
        {
          questions: [
            {
              qText:
                'The *peripatetic* lifestyle of a travel writer is exciting.',
              options: 'wandering and nomadic, settled and stationary'
            },
            {
              qText:
                'The *mellifluous* voice of the singer enchanted the audience.',
              options: 'melodic and sweet-sounding, discordant and grating'
            },
            {
              qText:
                'His *scrupulous* attention to detail ensured quality work.',
              options: 'meticulous and careful, careless and negligent'
            },
            {
              qText:
                'The *gregarious* nature of the puppy made it a great pet.',
              options: 'sociable and friendly, solitary and unfriendly'
            },
            {
              qText:
                'The *quixotic* quest for world peace continues despite challenges.',
              options: 'idealistic and impractical, realistic and achievable'
            }
          ]
        }
      ]
    }
  ]
};
