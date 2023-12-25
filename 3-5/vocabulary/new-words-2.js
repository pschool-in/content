export default {
  label: 'New Words 2',
  id: 'new-words-2',
  list: [
    //ref:E221 sentences created using chatGPT
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
            text: `Creative - Innovative
Enthusiasm - Eagerness
Vivid - Colorful
Melodious - Harmonious
Intuition - Insight`
          },
          {
            type: 'hilight',
            text: `Culinary - Cooking
Fascination - Obsession
Peaceful - Calm
Strategy - Plan
Penchant - Liking`
          },
          {
            type: 'hilight',
            text: `Persistent - Continuous
Powerful - Strong
Dedication - Commitment
Theory - Hypothesis
Courage - Bravery`
          },
          {
            type: 'hilight',
            text: `Educational - Informative
Eloquent - Articulate
Fragrant - Pleasant-smelling
Priceless - Invaluable
Suspenseful - Thrilling`
          },
          {
            type: 'hilight',
            text: `Collaboration - Cooperation
Profound - Deep          
Significant - Major         
Exquisite - Beautiful        
Captivating - Fascinating`
          }
        ]
      }
    },
    {
      id: 'mcq-1',
      label: 'We Mean the Same!',
      type: 'mcq',
      commonData: {
        title: 'Guess the synonym of the underlined word.'
      },
      data: [
        {
          questions: [
            {
              qText: `The artist's work is very *creative*.`,
              options: 'innovative, boring, ordinary, new'
            },
            {
              qText: `The teacher's *enthusiasm* made the class exciting.`,
              options: 'eagerness, apathy, indifference, excited'
            },
            {
              qText: `The author's *vivid* descriptions brought the story to life.`,
              options: 'colorful, dull, lifeless, natural'
            },
            {
              qText: `The music at the party was *melodious*.`,
              options: 'harmonious, discordant, noisy, loud'
            },
            {
              qText: `The detective's *intuition* helped solve the case.`,
              options: 'insight, ignorance, blindness, visionary'
            }
          ]
        },
        {
          questions: [
            {
              qText: `The chef's *culinary* skills are unmatched.`,
              options: 'cooking, painting, singing, dancing'
            },
            {
              qText: 'She has a *fascination* for ancient history.',
              options: 'obsession, disinterest, disliking, temptation'
            },
            {
              qText: 'The serene lake was a *peaceful* place to relax.',
              options: 'calm, turbulent, chaotic, rumble'
            },
            {
              qText: `The company's *strategy* led to increased profits.`,
              options: 'plan, confusion, disorder, choas'
            },
            {
              qText: 'The explorer had a *penchant* for adventure.',
              options: 'liking, aversion, hatred, dislike'
            }
          ]
        },
        {
          questions: [
            {
              qText: 'His *persistent* efforts paid off in the end.',
              options: 'continuous, sporadic, occasional, temporary'
            },
            {
              qText: 'The film had a *powerful* impact on the audience.',
              options: 'strong, weak, feeble, agile'
            },
            {
              qText: `The athlete's *dedication* to training was impressive.`,
              options: 'commitment, indifference, neglect, ignore'
            },
            {
              qText: `The scientist's *theory* revolutionized the field.`,
              options: 'hypothesis, fact, truth, thesis'
            },
            {
              qText: 'The mountain climbers showed great *courage*.',
              options: 'bravery, fear, cowardice, fearless'
            }
          ]
        },
        {
          questions: [
            {
              qText: 'The conference was an *educational* experience.',
              options: 'informative, misleading, deceptive, hypnotizing'
            },
            {
              qText: 'Her *eloquent* speech left the audience in awe.',
              options: 'articulate, inarticulate, speechless, elegant'
            },
            {
              qText: 'The garden was filled with *fragrant* flowers.',
              options: 'pleasant-smelling, stinking, colourful, sweet'
            },
            {
              qText: 'The museum displayed *priceless* artifacts.',
              options: 'invaluable, worthless, cheap, expensive'
            },
            {
              qText: 'The novel had a *suspenseful* plot.',
              options: 'thrilling, predictable, boring, mystical'
            }
          ]
        },
        {
          questions: [
            {
              qText: `The team's *collaboration* led to success.`,
              options: 'cooperation, competition, rivalry, nemesis'
            },
            {
              qText: 'She has a *profound* understanding of the topic.',
              options: 'deep, superficial, shallow, little'
            },
            {
              qText: 'The storm caused *significant* damage to the town.',
              options: 'major, minor, trivial, little'
            },
            {
              qText: 'His *exquisite* taste in fashion was well-known.',
              options: 'beautiful, ordinary, ugly, deformed'
            },
            {
              qText: `The orchestra's performance was *captivating*.`,
              options: 'fascinating, dull, uninteresting, boring'
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
            text: `Creative × Unimaginative
Enthusiasm × Apathy
Vivid × Dull
Melodious × Discordant
Intuition × Ignorance`
          },
          {
            type: 'hilight',
            text: `Fascination × Disliking
Peaceful × Turbulent
Strategy × Disorder
Penchant × Aversion
Persistent × Sporadic`
          },
          {
            type: 'hilight',
            text: `Powerful × Weak
Dedication × Neglect
Theory × Fact
Courage × Fear
Eloquent × Inarticulate`
          },
          {
            type: 'hilight',
            text: `Fragrant × Foul-smelling
Priceless × Worthless
Suspenseful × Predictable
Collaboration × Competition
Profound × Superficial`
          },
          {
            type: 'hilight',
            text: `Significant × Minor
Exquisite × Ugly
Captivating × Uninteresting`
          }
        ]
      }
    },
    //ref:E221 sentences created using chatGPT
    {
      id: 'mcq-2',
      label: 'We are Opposites!',
      type: 'mcq',
      commonData: {
        title: 'Guess the antonym of the underlined word.'
      },
      data: [
        {
          questions: [
            {
              qText: `The artist's work is very *creative*.`,
              options: 'unimaginative, dull, ordinary'
            },
            {
              qText: `The teacher's *enthusiasm* made the class boring.`,
              options: 'apathy, indifference, disinterest'
            },
            {
              qText: `The author's *vivid* descriptions made the story more gloomy.`,
              options: 'dull, lifeless, colorless'
            },
            {
              qText: 'The music at the party was *melodious*.',
              options: 'discordant, noisy, unpleasant'
            },
            {
              qText: `The detective's *intuition* made it difficlut to solve the case.`,
              options: 'ignorance, blindness, confusion'
            }
          ]
        },
        {
          questions: [
            {
              qText: 'She has a *fascination* for ancient history.',
              options: 'disliking, aversion, hatred'
            },
            {
              qText: 'The serene lake was a *peaceful* place to relax.',
              options: 'turbulent, chaotic, noisy'
            },
            {
              qText: `The company's *strategy* led to decreased profits.`,
              options: 'disorder, confusion, chaos'
            },
            {
              qText: 'The explorer had a *penchant* for adventure.',
              options: 'aversion, hatred, dislike'
            },
            {
              qText: 'His *persistent* efforts paid off in the end.',
              options: 'sporadic, occasional, infrequent'
            }
          ]
        },
        {
          questions: [
            {
              qText: 'The film had a *powerful* impact on the audience.',
              options: 'weak, feeble, ineffective'
            },
            {
              qText: `The athlete's *dedication* to training cost him the match.`,
              options: 'neglect, indifference, laziness'
            },
            {
              qText: `The scientist's *theory* revolutionized the field.`,
              options: 'fact, truth, reality'
            },
            {
              qText: 'The mountain climbers showed great *courage*.',
              options: 'fear, cowardice, timidity'
            },
            {
              qText: 'Her *eloquent* speech left the audience in awe.',
              options: 'inarticulate, speechless, mute'
            }
          ]
        },
        {
          questions: [
            {
              qText: 'The garden was filled with *fragrant* flowers.',
              options: 'foul-smelling, stinking, repugnant'
            },
            {
              qText: 'The museum displayed *priceless* artifacts.',
              options: 'worthless, cheap, expendable'
            },
            {
              qText: 'The novel had a *suspenseful* plot.',
              options: 'predictable, boring, uninteresting'
            },
            {
              qText: `The team's *collaboration* led to success.`,
              options: 'competition, rivalry, disagreement'
            },
            {
              qText: 'She has a *profound* understanding of the topic.',
              options: 'superficial, shallow, trivial'
            }
          ]
        },
        {
          questions: [
            {
              qText: 'The storm caused *significant* damage to the town.',
              options: 'minor, trivial, negligible'
            },
            {
              qText: 'His *exquisite* taste in fashion was well-known.',
              options: 'ugly, ordinary, unattractive'
            },
            {
              qText: `The orchestra's performance was *captivating*.`,
              options: 'uninteresting, dull, boring'
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
              qText: 'The ancient castle stands on *top of the hill*.',
              options: 'hilltop, atop, over the hill'
            },
            {
              qText: 'The old man told stories from *his youth*.',
              options: 'childhood, ancient times, senior years'
            },
            {
              qText: "I've known him *for a lifetime*.",
              options: 'forever, recently, briefly'
            },
            {
              qText: 'She found herself *in the middle of* a bustling city.',
              options: 'amidst, isolated, peaceful'
            },
            {
              qText: 'The book was hidden *in the middle of the shelf*.',
              options: 'midway, amidst, at the center'
            }
          ]
        },
        {
          questions: [
            {
              qText: 'The concert was held *in the open air*.',
              options: 'outdoors, under the sky, in the environment'
            },
            {
              qText: 'They reached the *highest point of the trail*.',
              options: 'peak, pinnacle, apex'
            },
            {
              qText: 'He solved the puzzle *with great ease*.',
              options: 'effortlessly, smoothly, gracefully'
            },
            {
              qText: 'She had been studying *for a very long time*.',
              options: 'excessively, hours on end, years'
            },
            {
              qText: 'She answered the question *without any hesitation*.',
              options: 'instantly, unhesitatingly, promptly'
            }
          ]
        },
        {
          questions: [
            {
              qText: 'She sang *with all her heart*.',
              options: 'passionately, half-heartedly, silently'
            },
            {
              qText: 'The cake tasted *like heaven*.',
              options: 'incredible, terrible, average'
            },
            {
              qText: 'They traveled through the forest *for miles and miles*.',
              options: 'endlessly, long distances, many hours'
            },
            {
              qText: 'The fireworks lit up the sky *at the break of day*.',
              options: 'dawn, sunrise, early morning'
            },
            {
              qText: 'He practices meditation *on a daily basis*.',
              options: 'daily, every day, routinely'
            }
          ]
        },
        {
          questions: [
            {
              qText:
                'She reached the destination *well before the expected time*.',
              options: 'early, ahead of time, in advance'
            },
            {
              qText:
                'The team trained *for a considerable period* before the competition.',
              options: 'extensively, for an extended time, over a long duration'
            },
            {
              qText: 'The cafe is open *around the clock*.',
              options: '24/7, at all hours, continuously'
            },
            {
              qText: 'The stars are visible *at the fall of night*.',
              options: 'nightfall, sunset, evening'
            },
            {
              qText:
                'The spaceship journeyed *to the far reaches of the galaxy*.',
              options: 'outer space, distant galaxy, cosmic expanse'
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
            text: `Vibrant - Bright and lively
Patience - Ability to remain calm and understanding           
Cooperation - Working together harmoniously         
Persistent - Continuing or enduring            
Generous - Willing to give and share`
          },
          {
            type: 'hilight',
            text: `Curiosity - Desire to learn and explore
Reliable - Dependable and trustworthy           
Celebration - Marking a special event with joy and festivity           
Creativity - Imagination and originality            
Honesty - Truthfulness and integrity`
          },
          {
            type: 'hilight',
            text: `Resilience - Ability to recover and adapt
Optimistic - Positive and hopeful attitude          
Efficiency - Achieving maximum productivity with minimal wasted effort           
Gratitude - Thankfulness and appreciation            
Peaceful - Calm and free from disturbance`
          },
          {
            type: 'hilight',
            text: `Adventure - Exciting and daring experience
Persistence - Continued effort and determination
Compassion - Sympathy and care for others
Innovation - Introducing new and advanced ideas
Kindness - Being friendly and considerate`
          }
        ]
      }
    },
    //ref: https://www.vocabulary.com/lists/52473 sentences created using chatGPT
    {
      id: 'mcq-4',
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
                'The *vibrant* colors of the flowers brightened the garden.',
              options: 'bright and lively, dull and lifeless'
            },
            {
              qText: `The teacher's *patience* in explaining concepts is commendable.`,
              options:
                'ability to remain calm and understanding, quick to anger'
            },
            {
              qText: `The team's *cooperation* led to a successful project completion.`,
              options:
                'working together harmoniously, frequent conflicts and disagreements'
            },
            {
              qText: `She had a *persistent* cough that wouldn't go away.`,
              options: 'continuing or enduring, temporary and fleeting'
            },
            {
              qText:
                'The *generous* donation helped the charity support many people.',
              options: 'willingness to give and share, selfish and stingy'
            }
          ]
        },
        {
          questions: [
            {
              qText:
                'His *curiosity* about the world led him to explore new places.',
              options: 'desire to learn and explore, apathy and disinterest'
            },
            {
              qText:
                'The *reliable* car never broke down during the long road trip.',
              options:
                'dependable and trustworthy, unpredictable and unreliable'
            },
            {
              qText:
                'The *celebration* of the festival included music and dancing.',
              options:
                'special event with joy and festivity, quiet and somber observance'
            },
            {
              qText: `The chef's *creativity* resulted in a unique and delicious dish.`,
              options: 'imagination and originality, lack of innovative ideas'
            },
            {
              qText:
                'The *honesty* of the witness was crucial in the court case.',
              options: 'truthfulness and integrity, deceit and dishonesty'
            }
          ]
        },
        {
          questions: [
            {
              qText:
                'The *resilience* of the community was tested during the disaster.',
              options:
                'ability to recover and adapt, vulnerability and fragility'
            },
            {
              qText: 'The *optimistic* outlook helped her overcome challenges.',
              options:
                'positive and hopeful, pessimistic and gloomy perspective'
            },
            {
              qText:
                'The *efficiency* of the new process saved time and resources.',
              options:
                'achievement of maximum productivity with minimal wasted effort, ineffectiveness and wastefulness'
            },
            {
              qText: 'The *gratitude* of the recipients was heartwarming.',
              options:
                'thankfulness and appreciation, ingratitude and resentment'
            },
            {
              qText: 'The *peaceful* atmosphere of the park was soothing.',
              options: 'calm and free from disturbance, chaotic and noisy'
            }
          ]
        },
        {
          questions: [
            {
              qText:
                'The *adventure* of traveling to exotic places was thrilling.',
              options:
                'exciting and daring experience, boring and routine activities'
            },
            {
              qText:
                'The *persistence* of the scientist led to a groundbreaking discovery.',
              options: 'continued effort and determination, giving up easily'
            },
            {
              qText: 'The *compassion* of the nurse comforted the patients.',
              options: 'sympathy and care for others, indifference and cruelty'
            },
            {
              qText:
                'The *innovation* in technology has transformed our lives.',
              options:
                'introduction of new and advanced ideas, stagnation and lack of progress'
            },
            {
              qText: 'The *kindness* of the stranger brightened her day.',
              options: 'friendly and considerate nature, rudeness and hostility'
            }
          ]
        }
      ]
    }
  ]
};
