export default {
  label: 'New Words',
  id: 'new-words',
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
            text: `Mischievous - Naughty
Enormous - Huge
Dazzling - Shining
Capsize - Sink
Burgled - Robbed`
          },
          {
            type: 'hilight',
            text: `Broad - Wide
Stunning - Amazing
Invite - Ask
Sighted - Saw
Communicate - Talk`
          },
          {
            type: 'hilight',
            text: `Annoyed - Irritated
Route - Way
Live - Stay
Favorite - Best
Appear - Look`
          },
          {
            type: 'hilight',
            text: `Delicious - Tasty
Ruined - Spoilt
Extremely - Very
Scurried - Ran
Illusion - Fantasy`
          },
          {
            type: 'hilight',
            text: `Meticulous - Careful and Precise
Enthusiasm - Eagerness
Agility - Speed
Fragrant - Pleasant Smell
Deafening - Extremely Loud`
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
              qText: 'These children are very *mischievous*',
              options: 'naughty, funny, kind, comical'
            },
            {
              qText: 'The new building is *enormous*!',
              options: 'huge, dirty, colorful, vivid'
            },
            {
              qText: `The white clothes are *dazzling* in the sun!`,
              options: 'shining, hot, huge, dull'
            },
            {
              qText: 'The boat was about to *capsize*.',
              options: 'sink, move fast, rotate, stabilize'
            },
            {
              qText: 'The bank was *burgled* in broad daylight!',
              options: 'robbed, crowded, locked, secure'
            }
          ]
        },
        {
          questions: [
            {
              qText: 'City roads are usually quite *broad*.',
              options: 'wide, narrow, dirty, clean'
            },
            {
              qText: 'The view of the valley was *stunning*!',
              options: 'amazing, dangerous, dark, ordinary'
            },
            {
              qText: `Prem did not *invite* Arun to his party.`,
              options: 'call, ask, come, go'
            },
            {
              qText: 'We *sighted* three tiger cubs in the distance.',
              options: 'saw, heard, walked, caught'
            },
            {
              qText: 'The telephone is an instrument to *communicate*.',
              options: 'talk, see, travel, find'
            }
          ]
        },
        {
          questions: [
            {
              qText: 'My mother was quite *annoyed* with me!',
              options: 'irritated, kind, polite, happy'
            },
            {
              qText: 'Which is the shortest *route* to school?',
              options: 'way, transport, bus, street'
            },
            {
              qText: 'This is where I *live*.',
              options: 'stay, sleep, play, eat'
            },
            {
              qText: "Potato chips are Tanya's *favorite* snack.",
              options: 'best, hated, disliked, unlike'
            },
            {
              qText: 'Metals like copper will *appear* dull if not polished.',
              options: 'look, think, take, disappear'
            }
          ]
        },
        //ref:E221 sentences created using chatGPT
        {
          questions: [
            {
              qText: 'The food in this restaurant is very *delicious*!',
              options: 'tasty, hot, colorful, unpalatable'
            },
            {
              qText: 'The tailor has *ruined* my dress!',
              options: 'spoilt, lost, forgot, torn'
            },
            {
              qText: 'Her father likes his food *extremely* hot.',
              options: 'very, little, tasty, few'
            },
            {
              qText:
                'As soon as he switched on the light, the cockroaches *scurried* away!',
              options: 'ran, jumped, hid, crawled'
            },
            {
              qText:
                'The video game is designed to give the *illusion* that you are in control of an airplane',
              options: 'fantasy, reality, enchanting, mesmerising'
            }
          ]
        },
        {
          questions: [
            {
              qText: 'She is always *meticulous* about her work.',
              options: 'careful and precise, unattentive, focused, distracted'
            },
            {
              qText:
                'The students showed great *enthusiasm* during the science experiment.',
              options: 'eagerness, ambitious, alarmed, distracted'
            },
            {
              qText:
                'The athlete displayed remarkable *agility* during the competition.',
              options: 'speed, slow, lazy, strength'
            },
            {
              qText: 'The garden was filled with *fragrant* flowers.',
              options: 'pleasant smelling, colourful, vibrant, sweet'
            },
            {
              qText: 'The music at the party was *deafening*.',
              options: 'extremely loud, extremely quiet, defective, harmonious'
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
            text: `Mischievous × Kind
Enormous × Small
Dazzling × Dull
Capsize × Stabilize
Burgled × Secure`
          },
          {
            type: 'hilight',
            text: `Broad × Narrow
Stunning × Unimpressive
Invite × Exclude
Sighted × Lost sight of
Hot × Cold`
          },
          {
            type: 'hilight',
            text: `Annoyed × Pleased
Shortest × Roundabout
Favorite × Hated
Delicious × Tasteless
Ruined × Improved`
          },
          {
            type: 'hilight',
            text: `Meticulous × Careless
Enthusiasm × Apathy
Agile × Clumsy
Fragrant × Foul Smelling
Deafening × Extremely Quiet`
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
              qText: 'These children are very *mischievous*',
              options: 'kind, naughty, funny'
            },
            {
              qText: 'The new building is *enormous*!',
              options: 'small, huge, colorful'
            },
            {
              qText: `The white clothes are *dazzling*!`,
              options: 'dull, shining, huge'
            },
            {
              qText: 'The boat was about to *capsize*.',
              options: 'stabilize, sink, rotate'
            },
            {
              qText: 'The bank was *burgled*.',
              options: 'secure, robbed, locked'
            }
          ]
        },
        {
          questions: [
            {
              qText: 'City roads are usually quite *broad*.',
              options: 'narrow, wide, dirty'
            },
            {
              qText: 'The view of the valley was *stunning*!',
              options: 'unimpressive, amazing, dark'
            },
            {
              qText: `Prem did not *invite* Arun.`,
              options: 'exclude, call, come'
            },
            {
              qText: 'We *sighted* three tiger cubs.',
              options: 'lost sight of, saw, walked'
            },
            {
              qText: 'Her father likes his food extremely *hot*.',
              options: 'cold, lukewarm, warm'
            }
          ]
        },
        {
          questions: [
            {
              qText: 'My mother was quite *annoyed* with me!',
              options: 'pleased, irritated, polite'
            },
            {
              qText: 'Which is the *shortest* route to school?',
              options: 'roundabout, transport, bus'
            },
            {
              qText: "Potato chips are Tanya's *favorite* snack.",
              options: 'hated, best, loved'
            },
            {
              qText: 'The food in this restaurant is very *delicious*!',
              options: 'tasteless, tasty, colorful'
            },
            {
              qText: 'The tailor has *ruined* my dress!',
              options: 'improved, spoilt, forgot'
            }
          ]
        },
        {
          questions: [
            {
              qText: 'She is always *meticulous* about her work.',
              options: 'careless, careful, unattentive'
            },
            {
              qText:
                'The students showed great *enthusiasm* during the science experiment.',
              options: 'apathy, ambitious, alarmed'
            },
            {
              qText: 'The athlete was *agile* during the competition.',
              options: 'clumsy, quick, lazy'
            },
            {
              qText: 'The garden was filled with *fragrant* flowers.',
              options: 'foul smelling, colourless, dull'
            },
            {
              qText: 'The music at the party was *deafening*.',
              options: 'extremely quiet, extremely loud, defective'
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
              qText: 'That school was built *a hundred years ago*.',
              options: 'century, decade, era'
            },
            {
              qText: 'She will return in *a few minutes*.',
              options: 'moments, later, time'
            },
            {
              qText: "She's been working on this project *for two weeks*.",
              options: 'fortnight, tonight, weeks'
            },
            {
              qText: "I haven't seen her in *a long time*.",
              options: 'ages, lifetime, time'
            },
            {
              qText: "He's been working here *since he graduated*.",
              options: 'ever since, longtime, era'
            }
          ]
        },
        {
          questions: [
            {
              qText: 'The car broke down in *the middle of nowhere*.',
              options: 'a deserted area, nowhere, desert'
            },
            {
              qText: 'We hiked to the *top of the mountain*.',
              options: 'summit, end point, top point'
            },
            {
              qText: 'She finished the task *in a matter of seconds*.',
              options: 'quickly, agile, today'
            },
            {
              qText: 'The sunsets in this place are *absolutely breathtaking*.',
              options: 'stunning, vivid, dull'
            },
            {
              qText: 'He spoke *without any hesitation*.',
              options: 'confidently, nervously, shivering'
            }
          ]
        },
        {
          questions: [
            {
              qText: "She's living *in the heart of the city*.",
              options: 'downtown, city, village'
            },
            {
              qText: 'The spaceship traveled *to the edge of the universe*.',
              options: 'outermost space, end of the world, inner space'
            },
            {
              qText: 'The cat sleeps *most of the day*.',
              options: 'often, rarely, many hours'
            },
            {
              qText: 'He will arrive *in a moment*.',
              options: 'shortly, quickly, meantime'
            },
            {
              qText: 'The treasure was hidden *underneath the ground*.',
              options: 'underground, overhead, beneath'
            }
          ]
        },
        {
          questions: [
            {
              qText:
                'He arrived at the airport *well before the departure time*.',
              options: 'early, late, beforehand'
            },
            {
              qText: 'The marathon runners trained *for many months*.',
              options: 'long, months, decade'
            },
            {
              qText: 'The library is open *all day and night*.',
              options: '24/7, 365 day, all round'
            },
            {
              qText: 'He was at *the break of day* jogging in the park.',
              options: 'dawn, dusk, evening'
            },
            {
              qText: 'The bakery makes delicious cakes *on a daily basis*.',
              options: 'daily, monthly, today'
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
            text: `Apathy - Lack of interest or emotion.
Hypothesis - A supposition or proposed explanation made on the basis of limited evidence.
Ambiguous - Open to more than one interpretation; having a double meaning.
Inevitable - Certain to happen; unavoidable.
Innovate - Make changes in something established, especially by introducing new methods or ideas.`
          },
          {
            type: 'hilight',
            text: `Juxtapose - To place or deal with close together for contrasting effect.
Nostalgia - A sentimental longing for the past, typically for a period with happy personal associations.
Quarantine - A state, period, or place of isolation in which people or animals that have arrived from elsewhere or been exposed to infectious or contagious disease are placed.
Vivid - Producing powerful feelings or strong, clear images in the mind.
Whimsical - Playfully quaint or fanciful, especially in an appealing and amusing way.`
          },
          {
            type: 'hilight',
            text: `Discrepancy - A lack of compatibility or similarity between two or more facts.
Empathy - The ability to understand and share the feelings of another.
Synchronize - Cause to occur or operate at the same time or rate.
Exaggerate - Represent (something) as being larger, better, or worse than it really is.
Oblivious - Not aware of or not concerned about what is happening around one.`
          },
          {
            type: 'hilight',
            text: `Diligent - Having or showing care and conscientiousness in one's work or duties.
Tenacious - Tending to keep a firm hold of something; clinging or adhering closely.
Alleviate - Make (suffering, deficiency, or a problem) less severe.
Voracious - Wanting or devouring great quantities of food; having a very eager approach to an activity.
Aid - Assistance or support.`
          },
          {
            type: 'hilight',
            text: `Eager - Showing keen interest or enthusiasm.
Fragile - Easily broken or damaged.
Harmony - A state of peaceful coexistence or agreement.
Illuminate - To provide light or clarity.
Loyal - Faithful and committed to a person, group, or cause.`
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
                "Her *apathy* towards the political situation was evident when she didn't vote in the election.",
              options: `lack of interest or emotion
thinking from a different perspective`
            },
            {
              qText:
                "The scientist's *hypothesis* was that the chemical reaction would yield a certain compound.",
              options: `proposed explanation made on the basis of limited evidence
theory backed up by concrete evidence`
            },
            {
              qText: `The *ambiguous* message left us unsure of what to do.`,
              options: `double meaning
single definition`
            },
            {
              qText:
                'With the dark clouds gathering, rain seemed *inevitable*.',
              options: `unavoidable
unsure`
            },
            {
              qText:
                'The company decided to *innovate* its marketing strategy to attract a younger audience.',
              options: `make changes by introducing new methods or ideas to
discovering something new or novel in`
            }
          ]
        },
        {
          questions: [
            {
              qText:
                'The artist liked to *juxtapose* bright colors next to dark ones in her paintings.',
              options: `to place 
to replace`
            },
            {
              qText:
                'Visiting her childhood home filled her with a sense of *nostalgia*.',
              options: `a sentimental longing for the past
deep resentment`
            },
            {
              qText: `After returning from a trip abroad, they were required to undergo a 14-day *quarantine*.`,
              options: `period of isolation 
imprisonment of people affected by a contagious disease.`
            },
            {
              qText:
                'The *vivid* description of the sunset made us feel like we were there.',
              options: `powerful feelings in
very colorful and amusing.`
            },
            {
              qText:
                'Her *whimsical* artwork often featured magical creatures.',
              options: `playfully quaint 
weird or strange.`
            }
          ]
        },
        {
          questions: [
            {
              qText:
                'The report revealed a significant *discrepancy* between the estimated and actual costs.',
              options: `lack of compatibility
lack of proof.`
            },
            {
              qText:
                'His *empathy* for her situation made him a great counselor.',
              options: `ability to understand and share the feelings 
ability to foresee the future.`
            },
            {
              qText:
                'The dancers needed to *synchronize* movements to the music.',
              options: `operate at the same time or rate their
have a strong desire to improve`
            },
            {
              qText:
                'He tended to *exaggerate* his achievements, making them sound more remarkable than they were.',
              options: `represent being better than he really is at
take ownership of someone else's work as`
            },
            {
              qText: `She was so *oblivious to* the noise that she didn't hear the fire alarm.`,
              options: `not concerned about 
disregarding to a warning.`
            }
          ]
        },
        {
          questions: [
            {
              qText:
                'The *diligent* student consistently scored the highest grades in the class.',
              options: `hardworking and conscientious 
disregard one's responsibilities.`
            },
            {
              qText:
                'Her *tenacious* grip on the rope helped her climb the mountain.',
              options: `firm hold or adhering 
adhering tricks`
            },
            {
              qText: 'The medication was prescribed to *alleviate* her pain.',
              options: `make less severe
to cause more suffering to`
            },
            {
              qText:
                'His *voracious appetite* led him to try every dish on the menu.',
              options: `wanting or devouring great quantities of food
being very fickle-minded`
            },
            {
              qText:
                'The humanitarian organization provided *aid* to the earthquake victims.',
              options: `assistance or support.
no assistance.`
            }
          ]
        },
        {
          questions: [
            {
              qText:
                'The children were *eager* to open their Christmas presents.',
              options: `showing keen interest
lacking enthusiasm`
            },
            {
              qText:
                'The antique vase is extremely *fragile*, so handle it with care.',
              options: `easy to break
lightweight but strong`
            },
            {
              qText:
                'The musical performance was a perfect example of *harmony*.',
              options: `a state of peaceful coexistence or agreement
one dominating or overpowering the others`
            },
            {
              qText:
                'The candles *illuminate* the room during the power outage.',
              options: `provide light or clarity to
set fire or arson to`
            },
            {
              qText:
                'He remained *loyal* to his friends through thick and thin.',
              options: `faithful and committed 
not ready to surrender or listen to anybody`
            }
          ]
        }
      ]
    }
  ]
};
