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
              options: 'naughty, funny, kind'
            },
            {
              qText: 'The new building is *enormous*!',
              options: 'huge, dirty, colorful'
            },
            {
              qText: `The white clothes are *dazzling* in the sun!`,
              options: 'shining, hot, huge'
            },
            {
              qText: 'The boat was about to *capsize*.',
              options: 'sink, move fast, rotate'
            },
            {
              qText: 'The bank was *burgled* in broad daylight!',
              options: 'robbed, crowded, locked'
            }
          ]
        },
        {
          questions: [
            {
              qText: 'City roads are usually quite *broad*.',
              options: 'wide, narrow, dirty'
            },
            {
              qText: 'The view of the valley was *stunning*!',
              options: 'amazing, dangerous, dark'
            },
            {
              qText: `Prem did not *invite* Arun to his party.`,
              options: 'call, ask, come'
            },
            {
              qText: 'We *sighted* three tiger cubs in the distance.',
              options: 'saw, heard, walked'
            },
            {
              qText: 'The telephone is an instrument to *communicate*.',
              options: 'talk, see, travel'
            }
          ]
        },
        {
          questions: [
            {
              qText: 'My mother was quite *annoyed* with me!',
              options: 'irritated, kind, polite'
            },
            {
              qText: 'Which is the shortest *route* to school?',
              options: 'way, transport, bus'
            },
            {
              qText: 'This is where I *live*.',
              options: 'stay, sleep, play'
            },
            {
              qText: "Potato chips are Tanya's *favorite* snack.",
              options: 'best, hated, disliked'
            },
            {
              qText: 'Metals like copper will *appear* dull if not polished.',
              options: 'look, think, take'
            }
          ]
        },
        //ref:E221 sentences created using chatGPT
        {
          questions: [
            {
              qText: 'The food in this restaurant is very *delicious*!',
              options: 'tasty, hot, colorful'
            },
            {
              qText: 'The tailor has *ruined* my dress!',
              options: 'spoilt, lost, forgot'
            },
            {
              qText: 'Her father likes his food *extremely* hot.',
              options: 'very, little, tasty'
            },
            {
              qText:
                'As soon as he switched on the light, the cockroaches *scurried* away!',
              options: 'ran, jumped, hid'
            },
            {
              qText:
                'The video game is designed to give the *illusion* that you are in control of an airplane',
              options: 'fantasy, reality, enchanting,'
            }
          ]
        },
        {
          questions: [
            {
              qText: 'She is always *meticulous* about her work.',
              options: 'careful and precise, unattentive, focused'
            },
            {
              qText:
                'The students showed great *enthusiasm* during the science experiment.',
              options: 'eagerness, ambitious, alarmed'
            },
            {
              qText:
                'The athlete displayed remarkable *agility* during the competition.',
              options: 'speed, slow, lazy'
            },
            {
              qText: 'The garden was filled with *fragrant* flowers.',
              options: 'pleasant smelling, colourful, vibrant'
            },
            {
              qText: 'The music at the party was *deafening*.',
              options: 'extremely loud, extremely quiet, defective'
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
              options: 'Century, Decade, Era'
            },
            {
              qText: 'She will return in *a few minutes*.',
              options: 'Moments, Later, Time'
            },
            {
              qText: "She's been working on this project *for two weeks*.",
              options: 'Fortnight, Tonight, Weeks'
            },
            {
              qText: "I haven't seen her in *a long time*.",
              options: 'Ages, Lifetime, Time'
            },
            {
              qText: "He's been working here *since he graduated*.",
              options: 'Ever since, Longtime, Era'
            }
          ]
        },
        {
          questions: [
            {
              qText: 'The car broke down in *the middle of nowhere*.',
              options: 'A deserted area, Nowhere, Desert'
            },
            {
              qText: 'We hiked to the *top of the mountain*.',
              options: 'Summit, End point, Top point'
            },
            {
              qText: 'She finished the task *in a matter of seconds*.',
              options: 'Quickly, Agile, Today'
            },
            {
              qText: 'The sunsets in this place are *absolutely breathtaking*.',
              options: 'Stunning, Vivid, Dull'
            },
            {
              qText: 'He spoke *without any hesitation*.',
              options: 'Confidently, Nervously, Shivering'
            }
          ]
        },
        {
          questions: [
            {
              qText: "She's living *in the heart of the city*.",
              options: 'Downtown, City, Village'
            },
            {
              qText: 'The spaceship traveled *to the edge of the universe*.',
              options: 'Outermost space, End of the world, Inner Space'
            },
            {
              qText: 'The cat sleeps *most of the day*.',
              options: 'Often, Rarely, Many hours'
            },
            {
              qText: 'He will arrive *in a moment*.',
              options: 'Shortly, Quickly, Meantime'
            },
            {
              qText: 'The treasure was hidden *underneath the ground*.',
              options: 'Underground, Overhead, Beneath'
            }
          ]
        },
        {
          questions: [
            {
              qText:
                'He arrived at the airport *well before the departure time*.',
              options: 'Early, Late, Beforehand'
            },
            {
              qText: 'The marathon runners trained *for many months*.',
              options: 'Long, Months, Decade'
            },
            {
              qText: 'The library is open *all day and night*.',
              options: '24/7, 365 day, all round'
            },
            {
              qText: 'He was at *the break of day* jogging in the park.',
              options: 'Dawn, Dusk, Evening'
            },
            {
              qText: 'The bakery makes delicious cakes *on a daily basis*.',
              options: 'Daily, Monthly, Today'
            }
          ]
        }
      ]
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
              options: `Lack of interest or emotion
Thinking from a different perspective`
            },
            {
              qText:
                "The scientist's *hypothesis* was that the chemical reaction would yield a certain compound.",
              options: `Proposed explanation made on the basis of limited evidence
Theory backed up by concrete evidence`
            },
            {
              qText: `The *ambiguous* message left us unsure of what to do.`,
              options: `Double meaning
Single defenition`
            },
            {
              qText:
                'With the dark clouds gathering, rain seemed *inevitable*.',
              options: `Unavoidable
Unsure`
            },
            {
              qText:
                'The company decided to *innovate* its marketing strategy to attract a younger audience.',
              options: `Make changes by introducing new methods or ideas to
Discovering something new or novel in`
            }
          ]
        },
        {
          questions: [
            {
              qText:
                'The artist liked to *juxtapose* bright colors next to dark ones in her paintings.',
              options: `To place 
To replace `
            },
            {
              qText:
                'Visiting her childhood home filled her with a sense of *nostalgia*.',
              options: ` A sentimental longing for the past
Deep resentment `
            },
            {
              qText: `After returning from a trip abroad, they were required to undergo a 14-day *quarantine*.`,
              options: `Period of isolation 
Imprisonment of people affected by a contagious disease.`
            },
            {
              qText:
                'The *vivid* description of the sunset made us feel like we were there.',
              options: `Powerful feelings in
Very colorful and amusing.`
            },
            {
              qText:
                'Her *whimsical* artwork often featured magical creatures.',
              options: `Playfully quaint 
Weird or strange.`
            }
          ]
        },
        {
          questions: [
            {
              qText:
                'The report revealed a significant *discrepancy* between the estimated and actual costs.',
              options: `Lack of compatibility
Lack of proof.`
            },
            {
              qText:
                'His *empathy* for her situation made him a great counselor.',
              options: `Ability to understand and share the feelings 
Ability to foresee the future.`
            },
            {
              qText:
                'The dancers needed to *synchronize* movements to the music.',
              options: `Operate at the same time or rate their
Have a strong desire to improve`
            },
            {
              qText:
                'He tended to *exaggerate* his achievements, making them sound more remarkable than they were.',
              options: `Represent being better than he really is at
Take ownership of someone else's work as`
            },
            {
              qText: `She was so *oblivious to* the noise that she didn't hear the fire alarm.`,
              options: `Not concerned about 
Disregaring to a warning.`
            }
          ]
        },
        {
          questions: [
            {
              qText:
                'The *diligent* student consistently scored the highest grades in the class.',
              options: `Hardworking and conscientious 
Disregard one's responsibilities.`
            },
            {
              qText:
                'Her *tenacious* grip on the rope helped her climb the mountain.',
              options: `firm hold or adhering 
Adhering tricks`
            },
            {
              qText: 'The medication was prescribed to *alleviate* her pain.',
              options: `Make less severe
To cause more suffering to`
            },
            {
              qText:
                'His *voracious appetite* led him to try every dish on the menu.',
              options: `Wanting or devouring great quantities of food
Being very fickle minded`
            },
            {
              qText:
                'The humanitarian organization provided *aid* to the earthquake victims.',
              options: `Assistance or support.
No assistance.`
            }
          ]
        },
        {
          questions: [
            {
              qText:
                'The children were *eager* to open their Christmas presents.',
              options: `Showing keen interest
Lacking enthusiasm`
            },
            {
              qText:
                'The antique vase is extremely *fragile*, so handle it with care.',
              options: `Easy to broke
Lightweight but strong`
            },
            {
              qText:
                'The musical performance was a perfect example of *harmony*.',
              options: `A state of peaceful coexistence or agreement
One dominating or overpowering the others`
            },
            {
              qText:
                'The candles *illuminate* the room during the power outage.',
              options: `Provide light or clarity to
Set fire or arson to`
            },
            {
              qText:
                'He remained *loyal* to his friends through thick and thin.',
              options: `Faithful and committed 
Not ready to surrender or listen to anybody`
            }
          ]
        }
      ]
    }
  ]
};
