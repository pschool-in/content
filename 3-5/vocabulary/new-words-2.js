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
              options: 'innovative, boring, ordinary'
            },
            {
              qText: `The teacher's *enthusiasm* made the class exciting.`,
              options: 'eagerness, apathy, indifference'
            },
            {
              qText: `The author's *vivid* descriptions brought the story to life.`,
              options: 'colorful, dull, lifeless'
            },
            {
              qText: `The music at the party was *melodious*.`,
              options: 'harmonious, discordant, noisy'
            },
            {
              qText: `The detective's *intuition* helped solve the case.`,
              options: 'insight, ignorance, blindness'
            }
          ]
        },
        {
          questions: [
            {
              qText: `The chef's *culinary* skills are unmatched.`,
              options: 'cooking, painting, singing'
            },
            {
              qText: 'She has a *fascination* for ancient history.',
              options: 'obsession, disinterest, disliking'
            },
            {
              qText: 'The serene lake was a *peaceful* place to relax.',
              options: 'calm, turbulent, chaotic'
            },
            {
              qText: `The company's *strategy* led to increased profits.`,
              options: 'plan, confusion, disorder'
            },
            {
              qText: 'The explorer had a *penchant* for adventure.',
              options: 'liking, aversion, hatred'
            }
          ]
        },
        {
          questions: [
            {
              qText: 'His *persistent* efforts paid off in the end.',
              options: 'continuous, sporadic, occasional'
            },
            {
              qText: 'The film had a *powerful* impact on the audience.',
              options: 'strong, weak, feeble'
            },
            {
              qText: `The athlete's *dedication* to training was impressive.`,
              options: 'commitment, indifference, neglect'
            },
            {
              qText: `The scientist's *theory* revolutionized the field.`,
              options: 'hypothesis, fact, truth'
            },
            {
              qText: 'The mountain climbers showed great *courage*.',
              options: 'bravery, fear, cowardice'
            }
          ]
        },
        {
          questions: [
            {
              qText: 'The conference was an *educational* experience.',
              options: 'informative, misleading, deceptive'
            },
            {
              qText: 'Her *eloquent* speech left the audience in awe.',
              options: 'articulate, inarticulate, speechless'
            },
            {
              qText: 'The garden was filled with *fragrant* flowers.',
              options: 'pleasant-smelling, foul-smelling, stinking'
            },
            {
              qText: 'The museum displayed *priceless* artifacts.',
              options: 'invaluable, worthless, cheap'
            },
            {
              qText: 'The novel had a *suspenseful* plot.',
              options: 'thrilling, predictable, boring'
            }
          ]
        },
        {
          questions: [
            {
              qText: `The team's *collaboration* led to success.`,
              options: 'cooperation, competition, rivalry'
            },
            {
              qText: 'She has a *profound* understanding of the topic.',
              options: 'deep, superficial, shallow'
            },
            {
              qText: 'The storm caused *significant* damage to the town.',
              options: 'major, minor, trivial'
            },
            {
              qText: 'His *exquisite* taste in fashion was well-known.',
              options: 'beautiful, ordinary, ugly'
            },
            {
              qText: `The orchestra's performance was *captivating*.`,
              options: 'fascinating, dull, uninteresting'
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
            text: `Culinary × Non-culinary
Fascination × Disliking
Peaceful × Turbulent
Strategy × Disorder
Penchant × Aversion`
          },
          {
            type: 'hilight',
            text: `Persistent × Sporadic
Powerful × Weak
Dedication × Neglect
Theory × Fact
Courage × Fear`
          },
          {
            type: 'hilight',
            text: `Educational × Misleading
Eloquent × Inarticulate
Fragrant × Foul-smelling
Priceless × Worthless
Suspenseful × Predictable`
          },
          {
            type: 'hilight',
            text: `Collaboration × Competition
Profound × Superficial
Significant × Minor
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
              qText: `The teacher's *enthusiasm* made the class exciting.`,
              options: 'apathy, indifference, disinterest'
            },
            {
              qText: `The author's *vivid* descriptions brought the story to life.`,
              options: 'dull, lifeless, colorless'
            },
            {
              qText: 'The music at the party was *melodious*.',
              options: 'discordant, noisy, unpleasant'
            },
            {
              qText: `The detective's *intuition* helped solve the case.`,
              options: 'ignorance, blindness, confusion'
            }
          ]
        },
        {
          questions: [
            {
              qText: `The chef's *culinary* skills are unmatched.`,
              options: 'non-culinary, non-cooking, non-food'
            },
            {
              qText: 'She has a *fascination* for ancient history.',
              options: 'disliking, aversion, hatred'
            },
            {
              qText: 'The serene lake was a *peaceful* place to relax.',
              options: 'turbulent, chaotic, noisy'
            },
            {
              qText: `The company's *strategy* led to increased profits.`,
              options: 'disorder, confusion, chaos'
            },
            {
              qText: 'The explorer had a *penchant* for adventure.',
              options: 'aversion, hatred, dislike'
            }
          ]
        },
        {
          questions: [
            {
              qText: 'His *persistent* efforts paid off in the end.',
              options: 'sporadic, occasional, infrequent'
            },
            {
              qText: 'The film had a *powerful* impact on the audience.',
              options: 'weak, feeble, ineffective'
            },
            {
              qText: `The athlete's *dedication* to training was impressive.`,
              options: 'neglect, indifference, laziness'
            },
            {
              qText: `The scientist's *theory* revolutionized the field.`,
              options: 'fact, truth, reality'
            },
            {
              qText: 'The mountain climbers showed great *courage*.',
              options: 'fear, cowardice, timidity'
            }
          ]
        },
        {
          questions: [
            {
              qText: 'The conference was an *educational* experience.',
              options: 'misleading, deceptive, uninformative'
            },
            {
              qText: 'Her *eloquent* speech left the audience in awe.',
              options: 'inarticulate, speechless, mute'
            },
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
            }
          ]
        },
        {
          questions: [
            {
              qText: `The team's *collaboration* led to success.`,
              options: 'competition, rivalry, disagreement'
            },
            {
              qText: 'She has a *profound* understanding of the topic.',
              options: 'superficial, shallow, trivial'
            },
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
              options: 'Bright and lively, Dull and lifeless'
            },
            {
              qText: `The teacher's *patience* in explaining concepts is commendable.`,
              options:
                'Ability to remain calm and understanding, Quick to anger'
            },
            {
              qText: `The team's *cooperation* led to a successful project completion.`,
              options:
                'Working together harmoniously, Frequent conflicts and disagreements'
            },
            {
              qText: `She had a *persistent* cough that wouldn't go away.`,
              options: 'Continuing or enduring, Temporary and fleeting'
            },
            {
              qText:
                'The *generous* donation helped the charity support many people.',
              options: 'Willing to give and share, Selfish and stingy'
            }
          ]
        },
        {
          questions: [
            {
              qText:
                'His *curiosity* about the world led him to explore new places.',
              options: 'Desire to learn and explore, Apathy and disinterest'
            },
            {
              qText:
                'The *reliable* car never broke down during the long road trip.',
              options:
                'Dependable and trustworthy, Unpredictable and unreliable'
            },
            {
              qText:
                'The *celebration* of the festival included music and dancing.',
              options:
                'Marking a special event with joy and festivity, Quiet and somber observance'
            },
            {
              qText: `The chef's *creativity* resulted in a unique and delicious dish.`,
              options: 'Imagination and originality, Lack of innovative ideas'
            },
            {
              qText:
                'The *honesty* of the witness was crucial in the court case.',
              options: 'Truthfulness and integrity, Deceit and dishonesty'
            }
          ]
        },
        {
          questions: [
            {
              qText:
                'The *resilience* of the community was tested during the disaster.',
              options:
                'Ability to recover and adapt, Vulnerability and fragility'
            },
            {
              qText: 'The *optimistic* outlook helped her overcome challenges.',
              options:
                'Positive and hopeful attitude, Pessimistic and gloomy perspective'
            },
            {
              qText:
                'The *efficiency* of the new process saved time and resources.',
              options:
                'Achieving maximum productivity with minimal wasted effort, Ineffectiveness and wastefulness'
            },
            {
              qText: 'The *gratitude* of the recipients was heartwarming.',
              options:
                'Thankfulness and appreciation, Ingratitude and resentment'
            },
            {
              qText: 'The *peaceful* atmosphere of the park was soothing.',
              options: 'Calm and free from disturbance, Chaotic and noisy'
            }
          ]
        },
        {
          questions: [
            {
              qText:
                'The *adventure* of traveling to exotic places was thrilling.',
              options:
                'Exciting and daring experience, Boring and routine activities'
            },
            {
              qText:
                'The *persistence* of the scientist led to a groundbreaking discovery.',
              options: 'Continued effort and determination, Giving up easily'
            },
            {
              qText: 'The *compassion* of the nurse comforted the patients.',
              options: 'Sympathy and care for others, Indifference and cruelty'
            },
            {
              qText:
                'The *innovation* in technology has transformed our lives.',
              options:
                'Introducing new and advanced ideas, Stagnation and lack of progress'
            },
            {
              qText: 'The *kindness* of the stranger brightened her day.',
              options: 'Being friendly and considerate, Rudeness and hostility'
            }
          ]
        },
        {
          questions: [
            {
              qText:
                'The *persistence* of the hiker paid off when he reached the summit.',
              options: 'Continued effort and determination, Giving up easily'
            },
            {
              qText:
                'The *compassion* of the volunteers touched the hearts of many.',
              options: 'Sympathy and care for others, Indifference and cruelty'
            },
            {
              qText:
                'The *innovation* in the tech industry leads to constant advancements.',
              options:
                'Introducing new and advanced ideas, Stagnation and lack of progress'
            },
            {
              qText:
                'The *kindness* of the neighbor helped during a difficult time.',
              options: 'Being friendly and considerate, Rudeness and hostility'
            },
            {
              qText:
                'The *curiosity* of the child led to many questions and discoveries.',
              options: 'Desire to learn and explore, Apathy and disinterest'
            }
          ]
        }
      ]
    }
  ]
};
