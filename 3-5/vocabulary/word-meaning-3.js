export default {
  label: 'Word Meanings',
  id: 'word-meaning-3',
  lockAfter: 2,
  list: [
    {
      id: 'meanings',
      type: 'slides2',
      label: `Test Activity`,
      commonData: {
        title: `Word Meanings`,
        displayType: 'canvas',
        autoPlay: false,
        substep: false
      },
      data: [
        {
          config: {
            fill: '#0d3756',
            fontSize: 16
          },
          steps: [
            [
              {
                text: 'big',
                x: 125,
                y: 146
              },
              {
                type: 'svg',
                list: [
                  {
                    d: 'M 144 138 C 174 138 198 147 199 158 C 199 169 175 178 144 178 C 114 178 90 169 89 158 C 88 147 112 139 144 138 ',
                    fill: '#81C784'
                  }
                ]
              }
            ],
            [
              {
                text: 'great',
                x: 153,
                y: 39
              },
              {
                type: 'svg',
                list: [
                  {
                    d: 'M 178 36 C 203 36 224 44 225 55 C 225 65 204 73 178 73 C 153 73 132 65 131 55 C 130 45 151 37 178 36',
                    fill: '#D4E157'
                  },
                  'M 153 138 L 176 72'
                ]
              }
            ],
            [
              {
                text: 'large',
                x: 43,
                y: 85
              },
              {
                type: 'svg',
                list: [
                  {
                    d: 'M 70 87 C 95 87 115 94 116 102 C 116 110 96 116 70 116 C 45 116 24 110 23 102 C 22 94 43 87 70 87',
                    fill: '#B2DFDB'
                  },
                  'M 101 145 L 74 117'
                ]
              }
            ],
            [
              {
                text: 'huge',
                x: 233,
                y: 116
              },
              {
                type: 'svg',
                list: [
                  {
                    d: 'M 257 112 C 279 112 296 120 297 131 C 297 141 279 149 257 150 C 235 150 217 141 216 131 C 215 121 233 113 257 112',
                    fill: '#D7CCC8'
                  },
                  'M 194 150 L 223 141'
                ]
              }
            ],
            [
              {
                text: 'massive',
                x: 194,
                y: 201
              },
              {
                type: 'svg',
                list: [
                  {
                    d: 'M 221 200 C 250 200 273 208 275 217 C 275 226 251 234 221 234 C 191 234 168 227 167 217 C 166 208 189 201 221 200',
                    fill: '#B0BEC5'
                  },
                  'M 170 175 L 183 205'
                ]
              }
            ],
            [
              {
                text: 'mammoth',
                x: 32,
                y: 192
              },
              {
                type: 'svg',
                list: [
                  {
                    d: 'M 73 189 C 103 189 127 197 128 207 C 128 216 104 224 73 224 C 44 224 20 217 19 207 C 18 197 42 190 73 189',
                    fill: '#F8BBD0'
                  },
                  'M 99 170 L 86 189'
                ]
              }
            ]
          ]
        }
      ]
    },
    {
      id: 'meanings',
      type: 'slides2',
      label: `Word Meanings`,
      commonData: {
        title: `Word Meanings`,
        displayType: 'custom',
        autoPlay: false
        //substep: true
      },
      data: [
        {
          steps: [
            [
              {
                type: 'title',
                text: 'ability'
              },
              '- the quality of having the means or skills to do something',
              {
                type: 'html',
                text: `Eg: <br><br>
She has the <i><b>ability</b></i> to speak five different languages fluently.<br><br>
His problem-solving <i><b>ability</b></i> is truly remarkable.`
              }
            ],
            [
              {
                type: 'title',
                text: 'absorb'
              },
              '- take in a liquid',
              {
                type: 'html',
                text: `Eg: <br><br>
The sponge can quickly <i><b>absorb</b></i> all the spilled water on the floor.<br><br>
Plants <i><b>absorb</b></i> sunlight and convert it into energy through photosynthesis.`
              }
            ],
            [
              {
                type: 'title',
                text: 'accuse'
              },
              '- blame for; make a claim of wrongdoing or misbehavior against',
              {
                type: 'html',
                text: `Eg: <br><br>
The prosecutor will <i><b>accuse</b></i> the suspect of theft during the trial.<br><br>
He didn't want to <i><b>accuse</b></i> anyone without concrete evidence.`
              }
            ],
            [
              {
                type: 'title',
                text: 'act'
              },
              '- behave in a certain manner',
              {
                type: 'html',
                text: `Eg: <br><br>
His decision to help the community was a selfless <i><b>act</b></i> of kindness.<br><br>
The actor's performance in the play was an <i><b>act</b></i> of brilliance.`
              }
            ],
            [
              {
                type: 'title',
                text: 'active'
              },
              '- characterized by energetic movement',
              {
                type: 'html',
                text: `Eg: <br><br>
The children are very <i><b>active</b></i> and love playing outside.<br><br>
Leading a sedentary lifestyle can lead to health issues; it's essential to stay <i><b>active</b></i>.`
              }
            ]
          ]
        },
        {
          steps: [
            [
              {
                type: 'title',
                text: 'actual'
              },
              '- existing in act or fact',
              {
                type: 'html',
                text: `Eg: <br><br>
The <i><b>actual</b></i> number of attendees exceeded our expectations.<br><br>
The <i><b>actual</b></i> cost of the project was higher than the initial estimate.`
              }
            ],
            [
              {
                type: 'title',
                text: 'adopt'
              },
              `- take into one's family`,
              {
                type: 'html',
                text: `Eg: <br><br>
They decided to <i><b>adopt</b></i> a rescue dog from the local shelter.<br><br>
We wouldn't be surprised to see more small businesses <i><b>adopt</b></i> this technology`
              }
            ],
            [
              {
                type: 'title',
                text: 'advantage'
              },
              '- the quality of having a superior or more favorable position',
              {
                type: 'html',
                text: `Eg: <br><br>
Having prior experience in the field gave her a significant <i><b>advantage</b></i>.<br><br>
A good education can be a valuable <i><b>advantage</b></i> in one's career.`
              }
            ],
            [
              {
                type: 'title',
                text: 'advice'
              },
              '- a proposal for an appropriate course of action',
              {
                type: 'html',
                text: `Eg: <br><br>
She sought <i><b>advice</b></i> from her mentor before making a major life decision.<br><br>
The <i><b>advice</b></i> he received from the financial advisor helped him invest wisely.`
              }
            ],
            [
              {
                type: 'title',
                text: 'ambition'
              },
              '- a strong drive for success',
              {
                type: 'html',
                text: `Eg: <br><br>
Her <i><b>ambition</b></i> was to become a successful entrepreneur and create jobs.<br><br>
He pursued his academic goals with determination and <i><b>ambition</b></i>.`
              }
            ]
          ]
        },
        {
          steps: [
            [
              {
                type: 'title',
                text: 'ancient'
              },
              '- belonging to times long past',
              {
                type: 'html',
                text: `Eg: <br><br>
The <i><b>ancient</b></i> ruins of the Mayan civilization are a popular tourist attraction.<br><br>
She had a collection of <i><b>ancient</b></i> books that were passed down through generations.`
              }
            ],
            [
              {
                type: 'title',
                text: 'approach'
              },
              '- move towards',
              {
                type: 'html',
                text: `Eg: <br><br>
We should <i><b>approach</b></i> the problem with a fresh perspective.<br><br>
His diplomatic <i><b>approach</b></i> to international relations was praised by many.`
              }
            ],
            [
              {
                type: 'title',
                text: 'arrange'
              },
              '- put into a proper or systematic order',
              {
                type: 'html',
                text: `Eg: <br><br>
She needed to <i><b>arrange</b></i> the flowers in a vase for the centerpiece.<br><br>
The conference organizer had to <i><b>arrange</b></i> seating for hundreds of attendees.`
              }
            ],
            [
              {
                type: 'title',
                text: 'arctic'
              },
              '- extremely cold',
              {
                type: 'html',
                text: `Eg: <br><br>
The <i><b>Arctic</b></i> region is known for its extreme cold and harsh conditions.<br><br>
Polar bears are well adapted to the frigid waters of the <i><b>Arctic</b></i>.`
              }
            ],
            [
              {
                type: 'title',
                text: 'attitude'
              },
              '- a complex mental state involving beliefs and feelings',
              {
                type: 'html',
                text: `Eg: <br><br>
Her positive <i><b>attitude</b></i> and outlook on life were contagious.<br><br>
The team's negative <i><b>attitude</b></i> affected their performance on the field.`
              }
            ]
          ]
        },
        {
          steps: [
            [
              {
                type: 'title',
                text: 'attract'
              },
              '- exert a force on',
              {
                type: 'html',
                text: `Eg: <br><br>
The colorful flowers in the garden <i><b>attract</b></i> butterflies and bees.<br><br>
The company used a catchy slogan to <i><b>attract</b></i> more customers.`
              }
            ],
            [
              {
                type: 'title',
                text: 'average'
              },
              '- an intermediate scale value regarded as normal or usual',
              {
                type: 'html',
                text: `Eg: <br><br>
The <i><b>average</b></i> temperature in this city in the summer is around 80 degrees.<br><br>
The students' test scores were slightly above the class <i><b>average</b></i>.`
              }
            ],
            [
              {
                type: 'title',
                text: 'avoid'
              },
              '- stay away from',
              {
                type: 'html',
                text: `Eg: <br><br>
To maintain good health, it's essential to <i><b>avoid</b></i> sugary and processed foods.<br><br>
She decided to <i><b>avoid</b></i> taking the busy highway to work to save time.`
              }
            ],
            [
              {
                type: 'title',
                text: 'bold'
              },
              '- fearless and daring',
              {
                type: 'html',
                text: `Eg: <br><br>
The explorer embarked on a <i><b>bold</b></i> journey to the uncharted wilderness.<br><br>
Her <i><b>bold</b></i> fashion choices always turned heads.`
              }
            ],
            [
              {
                type: 'title',
                text: 'border'
              },
              '- the boundary of a surface',
              {
                type: 'html',
                text: `Eg: <br><br>
The river forms a natural <i><b>border</b></i> between the two countries.<br><br>
The intricate design along the <i><b>border</b></i> of the rug added to its beauty.`
              }
            ]
          ]
        },
        {
          steps: [
            [
              {
                type: 'title',
                text: 'brief'
              },
              '- of short duration or distance',
              {
                type: 'html',
                text: `Eg: <br><br>
He gave a <i><b>brief</b></i> presentation on the company's financial performance.<br><br>
Please provide a <i><b>brief</b></i> summary of the book for the class.`
              }
            ],
            [
              {
                type: 'title',
                text: 'brilliant'
              },
              '- full of light; shining intensely',
              {
                type: 'html',
                text: `Eg: <br><br>
The sun's rays cast a <i><b>brilliant</b></i> light over the mountain peaks.<br><br>
Her performance on the piano was nothing short of <i><b>brilliant</b></i>.`
              }
            ],
            [
              {
                type: 'title',
                text: 'cable'
              },
              '- a very strong thick rope made of twisted hemp or steel wire',
              {
                type: 'html',
                text: `Eg: <br><br>
The ship's anchor was attached to a thick steel <i><b>cable</b></i>.<br><br>
I need to call the <i><b>cable</b></i> company to fix our internet connection.`
              }
            ],
            [
              {
                type: 'title',
                text: 'capture'
              },
              '- seize as if by hunting, snaring, or trapping',
              {
                type: 'html',
                text: `Eg: <br><br>
The photographer managed to <i><b>capture</b></i> the beauty of the sunset in his photo.<br><br>
The police were able to <i><b>capture</b></i> the suspect after a long chase.`
              }
            ],
            [
              {
                type: 'title',
                text: 'certain'
              },
              '- established beyond doubt or question; definitely known',
              {
                type: 'html',
                text: `Eg: <br><br>
It is <i><b>certain</b></i> that the sun will rise in the east tomorrow.<br><br>
She was <i><b>certain</b></i> of her decision to change careers.`
              }
            ],
            [
              {
                type: 'title',
                text: 'chill'
              },
              '- coldness due to a cold environment',
              {
                type: 'html',
                text: `Eg: <br><br>
The <i><b>chill</b></i> in the air made everyone reach for their jackets.<br><br>
We decided to stay in and enjoy a movie on the couch to escape the winter <i><b>chill</b></i>.`
              }
            ]
          ]
        },
        {
          steps: [
            [
              {
                type: 'title',
                text: 'clever'
              },
              '- mentally quick and resourceful',
              {
                type: 'html',
                text: `Eg: <br><br>
His <i><b>clever</b></i> solution to the problem impressed everyone in the meeting.<br><br>
She is known for her <i><b>clever</b></i> sense of humor and witty remarks.`
              }
            ],
            [
              {
                type: 'title',
                text: 'climate'
              },
              '- the weather in some location averaged over a period of time',
              {
                type: 'html',
                text: `Eg: <br><br>
The <i><b>climate</b></i> in this region is characterized by hot summers and mild winters.<br><br>
<i><b>Climate</b></i> change is a global issue that affects us all.`
              }
            ],
            [
              {
                type: 'title',
                text: 'cling'
              },
              '- hold on tightly or tenaciously',
              {
                type: 'html',
                text: `Eg: <br><br>
The baby monkey would <i><b>cling</b></i> to its mother as they swung through the trees.<br><br>
Many people <i><b>cling</b></i> to their faith in times of grief and loss.`
              }
            ],
            [
              {
                type: 'title',
                text: 'coast'
              },
              '- the shore of a sea or ocean',
              {
                type: 'html',
                text: `Eg: <br><br>
We spent our vacation at a beautiful beach house on the <i><b>coast</b></i>.<br><br>
The ship sailed along the picturesque <i><b>coast</b></i> as the sun set.`
              }
            ],
            [
              {
                type: 'title',
                text: 'confess'
              },
              '- admit to a wrongdoing',
              {
                type: 'html',
                text: `Eg: <br><br>
He decided to <i><b>confess</b></i> to his mistake and apologize to his friend.<br><br>
Despite being asked repeatedly, she refused to <i><b>confess</b></i>.`
              }
            ],
            [
              {
                type: 'title',
                text: 'consider'
              },
              '- think about carefully; weigh',
              {
                type: 'html',
                text: `Eg: <br><br>
Before making a decision, I need to <i><b>consider</b></i> all the pros and cons of this job offer.<br><br>
Please <i><b>consider</b></i> my likes and dislikes when you choose the movie for the movie night.`
              }
            ]
          ]
        },
        {
          steps: [
            [
              {
                type: 'title',
                text: 'contain'
              },
              '- hold or have within',
              {
                type: 'html',
                text: `Eg: <br><br>
The box <i><b>contains</b></i> a collection of rare vintage coins.<br><br>
This book <i><b>contains</b></i> a wealth of information about ancient civilizations.`
              }
            ],
            [
              {
                type: 'title',
                text: 'continent'
              },
              '- one of the large landmasses of the earth',
              {
                type: 'html',
                text: `Eg: <br><br>
Africa is the second-largest <i><b>continent</b></i> in the world by both land area and population.<br><br>
The <i><b>continents</b></i> of Europe and Asia are connected by the Ural Mountains.`
              }
            ],
            [
              {
                type: 'title',
                text: 'convince'
              },
              'make realize the truth or validity of something',
              {
                type: 'html',
                text: `Eg: <br><br>
He used strong evidence to <i><b>convince</b></i> the jury of the defendant's guilt.<br><br>
She tried to <i><b>convince</b></i> her friends to join her in the charity event.`
              }
            ],
            [
              {
                type: 'title',
                text: 'coward'
              },
              '- a person who shows fear or timidity',
              {
                type: 'html',
                text: `Eg: <br><br>
He was labeled a <i><b>coward</b></i> for running away from the fight.<br><br>
Don't be a <i><b>coward</b></i>; stand up for what you believe in.`
              }
            ],
            [
              {
                type: 'title',
                text: 'crew'
              },
              '- an organized group of workers',
              {
                type: 'html',
                text: `Eg: <br><br>
The film <i><b>crew</b></i> worked tirelessly to capture the perfect shot.<br><br>
The flight <i><b>crew</b></i> made sure all passengers were comfortable during the long journey.`
              }
            ],
            [
              {
                type: 'title',
                text: 'crumple'
              },
              '- gather something into small wrinkles or folds',
              {
                type: 'html',
                text: `Eg: <br><br>
She <i><b>crumpled</b></i> the piece of paper and threw it into the trash can.<br><br>
The car's front end began to <i><b>crumple</b></i> upon impact with the tree.`
              }
            ],
            [
              {
                type: 'title',
                text: 'custom'
              },
              '- accepted or habitual practice',
              {
                type: 'html',
                text: `Eg: <br><br>
It's a <i><b>custom</b></i> in some cultures to bow as a sign of respect.<br><br>
The <i><b>custom</b></i> of exchanging gifts during the holidays is widely practiced.`
              }
            ],
            [
              {
                type: 'title',
                text: 'decay'
              },
              '- the organic phenomenon of rotting',
              {
                type: 'html',
                text: `Eg: <br><br>
Without proper maintenance, the old house began to <i><b>decay</b></i> over time.<br><br>
The <i><b>decay</b></i> of fallen leaves on the forest floor contributes to nutrient recycling.`
              }
            ]
          ]
        }
      ]
    },
    {
      label: 'Fill in the blanks',
      type: 'matchByDragDrop',
      id: 'drag-drop',
      lockAfter: 1,
      commonData: {
        title:
          'Drag the correct option in each blank to form meaningfull sentences.'
      },
      data: [
        `She has the *ability* to speak five different languages fluently.
The sponge can quickly *absorb* all the spilled water on the floor.
The prosecutor will *accuse* the suspect of theft during the trial.
His decision to help the community was a selfless *act* of kindness.
The children are very *active* and love playing outside.`,

        `The *actual* number of attendees exceeded our expectations.
They decided to *adopt* a rescue dog from the local shelter.
Having prior experience in the field gave her a significant *advantage*.
She sought *advice* from her mentor before making a major life decision.
Her *ambition* was to become a successful entrepreneur and create jobs.`,

        `The *ancient* ruins of the Mayan civilization are a popular tourist attraction.
We should *approach* the problem with a fresh perspective.
She needed to *arrange* the flowers in a vase for the centerpiece.
The *Arctic* region is known for its extreme cold and harsh conditions.
Her positive *attitude* and outlook on life were contagious.`,

        `The colorful flowers in the garden *attract* butterflies and bees.
The *average* temperature in this city in the summer is around 80 degrees.
To maintain good health, it's essential to *avoid* sugary and processed foods.
The explorer embarked on a *bold* journey to the uncharted wilderness.
The river forms a natural *border* between the two countries.`,

        `He gave a *brief* presentation on the company's financial performance.
The sun's rays cast a *brilliant* light over the mountain peaks.
The ship's anchor was attached to a thick steel *cable*.
The photographer managed to *capture* the beauty of the sunset in his photo.
It is *certain* that the sun will rise in the east tomorrow.`,

        `The *chill* in the air made everyone reach for their jackets.
His *clever* solution to the problem impressed everyone in the meeting.
The *climate* in this region is characterized by hot summers and mild winters.
The baby monkey would *cling* to its mother as they swung through the trees.
We spent our vacation at a beautiful beach house on the *coast*.`,

        `He decided to *confess* to his mistake and apologize to his friend.
Before making a decision, I need to *consider* all the pros and cons of this job offer.
The box *contains* a collection of rare vintage coins.
Africa is the second-largest *continent* in the world by both land area and population.
He used strong evidence to *convince* the jury of the defendant's guilt.`,

        `He was labeled a *coward* for running away from the fight.
The film *crew* worked tirelessly to capture the perfect shot.
She *crumpled* the piece of paper and threw it into the trash can.
It's a *custom* in some cultures to bow as a sign of respect.
Without proper maintenance, the old house began to *decay* over time.`
      ]
    },
    {
      type: 'completeWord',
      id: 'complete-word-1',
      label: 'Complete Word',
      data: [
        `The quality of having the means or skills to do something | Ability
Take in a liquid | Absorb
Blame for; make a claim of wrongdoing or misbehavior against | Accuse
Behave in a certain manner | Act
Characterized by energetic movement | Active
Existing in act or fact | Actual
Take into one's family | Adopt
The quality of having a superior or more favorable position | Advantage
A proposal for an appropriate course of action | Advice
A strong drive for success | Ambition`,

        `Belonging to times long past | Ancient
Move towards | Approach
Put into a proper or systematic order | Arrange
Extremely cold | Arctic
A complex mental state involving beliefs and feelings | Attitude
Exert a force on | Attract
An intermediate scale value regarded as normal or usual | Average
Stay away from | Avoid
Fearless and daring | Bold
The boundary of a surface | Border`,

        `Of short duration or distance | Brief
Full of light; shining intensely | Brilliant
A very strong thick rope made of twisted hemp or steel wire | Cable
Seize as if by hunting, snaring, or trapping | Capture
Established beyond doubt or question; definitely known | Certain
Coldness due to a cold environment | Chill
Mentally quick and resourceful | Clever
The weather in some location averaged over a period of time | Climate
Hold on tightly or tenaciously | Cling
The shore of a sea or ocean | Coast`,

        `Admit to a wrongdoing | Confess
Think about carefully; weigh | Consider
Hold or have within | Contain
One of the large landmasses of the earth | Continent
Make realize the truth or validity of something | Convince
A person who shows fear or timidity | Coward
An organized group of workers | Crew
Gather something into small wrinkles or folds | Crumple
Accepted or habitual practice | Custom
The organic phenomenon of rotting | Decay`
      ]
    },
    {
      id: 'meanings-2',
      type: 'slides2',
      label: `Word Meanings 2`,
      commonData: {
        title: `Word Meanings 2`,
        displayType: 'custom',
        autoPlay: false,
        substep: false
      },
      data: [
        {
          steps: [
            [
              {
                type: 'title',
                text: 'deed'
              },
              '- a legal document to effect a transfer of property',
              {
                type: 'html',
                text: `Eg: <br><br>
She signed the <i><b>deed</b></i> to her new house, officially transferring ownership.<br><br>
The property <i><b>deed</b></i> was carefully examined by the lawyers to ensure all legal requirements were met.`
              }
            ],
            [
              {
                type: 'title',
                text: 'defend'
              },
              '- protect against a challenge or attack',
              {
                type: 'html',
                text: `Eg: <br><br>
The brave knight stood ready to <i><b>defend</b></i> the kingdom against the approaching dragon.<br><br>
It's essential to <i><b>defend</b></i> your rights and speak up when you're being treated unfairly.`
              }
            ],
            [
              {
                type: 'title',
                text: 'delicate'
              },
              '- developed with extreme subtlety',
              {
                type: 'html',
                text: `Eg: <br><br>
The <i><b>delicate</b></i> embroidery on the wedding dress was exquisite, showcasing incredible attention to detail.<br><br>
Handling antique china requires a <i><b>delicate</b></i> touch to avoid any damage.`
              }
            ],
            [
              {
                type: 'title',
                text: 'device'
              },
              '- an instrumentality invented for a particular purpose',
              {
                type: 'html',
                text: `Eg: <br><br>
A smartphone is a versatile <i><b>device</b></i> that allows you to communicate, browse the internet, and take photos.<br><br>
The scientist invented a groundbreaking <i><b>device</b></i> for detecting pollution in the air.`
              }
            ],
            [
              {
                type: 'title',
                text: 'diagram'
              },
              ' - a drawing intended to explain how something works',
              {
                type: 'html',
                text: `Eg: <br><br>
The <i><b>diagram</b></i> in the textbook illustrated the process of photosynthesis in plants.<br><br>
The architect created a detailed <i><b>diagram</b></i> of the building's layout before construction began.`
              }
            ]
          ]
        },
        {
          steps: [
            [
              {
                type: 'title',
                text: 'digest'
              },
              '- convert food into absorbable substances',
              {
                type: 'html',
                text: `Eg: <br><br>
Our digestive system helps <i><b>digest</b></i> the food we eat, breaking it down into nutrients for our body.<br><br>
After eating, it's important to give your body time to <i><b>digest</b></i> the meal before engaging in vigorous exercise.`
              }
            ],
            [
              {
                type: 'title',
                text: 'disease'
              },
              `- an impairment of health`,
              {
                type: 'html',
                text: `Eg: <br><br>
Vaccines have been crucial in preventing the spread of infectious <i><b>diseases</b></i> like polio and smallpox.<br><br>
Regular handwashing is an effective way to reduce the risk of contracting contagious <i><b>diseases</b></i>.`
              }
            ],
            [
              {
                type: 'title',
                text: 'distant'
              },
              '- separated in space or coming from far away',
              {
                type: 'html',
                text: `Eg: <br><br>
The mountains in the <i><b>distant</b></i> horizon looked like a hazy silhouette against the setting sun.<br><br>
We could hear the <i><b>distant</b></i> sound of fireworks from the nearby city.`
              }
            ],
            [
              {
                type: 'title',
                text: 'doze'
              },
              '- a light fitful sleep',
              {
                type: 'html',
                text: `Eg: <br><br>
After a long day at work, she took a short <i><b>doze</b></i> on the couch to recharge.<br><br>
The rhythmic sound of the rain outside made it easy to <i><b>doze</b></i> off during the afternoon.`
              }
            ],
            [
              {
                type: 'title',
                text: 'drift'
              },
              '- be in motion due to some air or water current',
              {
                type: 'html',
                text: `Eg: <br><br>
The boat began to <i><b>drift</b></i> along the gentle current of the river.<br><br>
In a snowstorm, it's easy for a car to <i><b>drift</b></i> off the road if not driven carefully.`
              }
            ]
          ]
        },
        {
          steps: [
            [
              {
                type: 'title',
                text: 'elegant'
              },
              '- refined and tasteful in appearance, behavior, or style',
              {
                type: 'html',
                text: `Eg: <br><br>
Her <i><b>elegant</b></i> evening gown turned heads at the formal event.<br><br>
The interior of the upscale restaurant was adorned with <i><b>elegant</b></i> decor and artwork.`
              }
            ],
            [
              {
                type: 'title',
                text: 'enable'
              },
              '- provide the means to perform some task',
              {
                type: 'html',
                text: `Eg: <br><br>
Accessible ramps and elevators <i><b>enable</b></i> people with disabilities to enter buildings easily.<br><br>
Installing the latest software update will <i><b>enable</b></i> new features on your computer.`
              }
            ],
            [
              {
                type: 'title',
                text: 'examine'
              },
              '- observe, check out, and look over carefully or inspect',
              {
                type: 'html',
                text: `Eg: <br><br>
The detective carefully <i><b>examined</b></i> the crime scene for any clues that might solve the case.<br><br>
Before the test, students were given time to <i><b>examine</b></i> their notes and textbooks.`
              }
            ],
            [
              {
                type: 'title',
                text: 'explore'
              },
              '- travel to or penetrate into',
              {
                type: 'html',
                text: `Eg: <br><br>
The adventurous couple decided to <i><b>explore</b></i> the dense Amazon rainforest during their vacation.<br><br>
NASA's Mars rover is on a mission to <i><b>explore</b></i> the Red Planet and gather data about its surface.`
              }
            ],
            [
              {
                type: 'title',
                text: 'fan'
              },
              '- a device for creating a current of air by movement',
              {
                type: 'html',
                text: `Eg: <br><br>
She used a handheld <i><b>fan</b></i> to cool off during the hot summer day.<br><br>
The enthusiastic soccer <i><b>fans</b></i> cheered loudly for their favorite team.`
              }
            ]
          ]
        },
        {
          steps: [
            [
              {
                type: 'title',
                text: 'fatal'
              },
              '- bringing death',
              {
                type: 'html',
                text: `Eg: <br><br>
The car accident had a <i><b>fatal</b></i> outcome, and several lives were tragically lost.<br><br>
Even a seemingly minor mistake in handling chemicals can have <i><b>fatal</b></i> consequences.`
              }
            ],
            [
              {
                type: 'title',
                text: 'fierce'
              },
              '- marked by extreme and violent energy',
              {
                type: 'html',
                text: `Eg: <br><br>
The <i><b>fierce</b></i> storm brought strong winds and heavy rain, causing damage to homes and trees.<br><br>
The <i><b>fierce</b></i> competition between the two rival companies led to innovative product development.`
              }
            ],
            [
              {
                type: 'title',
                text: 'flutter'
              },
              '- flap the wings rapidly or fly with flapping movements',
              {
                type: 'html',
                text: `Eg: <br><br>
The butterfly began to <i><b>flutter</b></i> its colorful wings as it took flight.<br><br>
The pages of the book started to <i><b>flutter</b></i> in the breeze as the window was left open.`
              }
            ],
            [
              {
                type: 'title',
                text: 'fortunate'
              },
              '- having unexpected good luck',
              {
                type: 'html',
                text: `Eg: <br><br>
Winning the lottery was an incredibly <i><b>fortunate</b></i> turn of events for the struggling family.<br><br>
She considered herself <i><b>fortunate</b></i> to have a supportive and loving group of friends.`
              }
            ],
            [
              {
                type: 'title',
                text: 'frail'
              },
              '- physically weak',
              {
                type: 'html',
                text: `Eg: <br><br>
The <i><b>frail</b></i> elderly woman needed assistance with daily tasks due to her weakened physical condition.<br><br>
The <i><b>frail</b></i> structure of the old bridge made it unsafe for heavy vehicles.`
              }
            ]
          ]
        },
        {
          steps: [
            [
              {
                type: 'title',
                text: 'gasp'
              },
              '- a short labored intake of breath with the mouth open',
              {
                type: 'html',
                text: `Eg: <br><br>
She let out a <i><b>gasp</b></i> of surprise when she saw the breathtaking view from the mountaintop.<br><br>
The swimmer emerged from the water with a <i><b>gasp</b></i>, catching her breath after a long underwater dive.`
              }
            ],
            [
              {
                type: 'title',
                text: 'glide'
              },
              '- move smoothly and effortlessly',
              {
                type: 'html',
                text: `Eg: <br><br>
The graceful swan seemed to <i><b>glide</b></i> effortlessly across the tranquil pond.<br><br>
With the right technique, an ice skater can <i><b>glide</b></i> smoothly across the rink.`
              }
            ],
            [
              {
                type: 'title',
                text: 'globe'
              },
              '- an object with a spherical shape',
              {
                type: 'html',
                text: `Eg: <br><br>
In the geography class, students studied a <i><b>globe</b></i> to learn about the Earth's continents and oceans.<br><br>
The world leaders gathered around a large <i><b>globe</b></i> to discuss global issues.`
              }
            ],
            [
              {
                type: 'title',
                text: 'grace'
              },
              '- elegance and beauty of movement or expression',
              {
                type: 'html',
                text: `Eg: <br><br>
The ballet dancer moved with remarkable <i><b>grace</b></i> and precision, captivating the audience.<br><br>
She accepted the award with <i><b>grace</b></i> and humility, thanking her supporters and team.`
              }
            ],
            [
              {
                type: 'title',
                text: 'gradual'
              },
              '- proceeding in small stages',
              {
                type: 'html',
                text: `Eg: <br><br>
The <i><b>gradual</b></i> transition from day to night was marked by the slow dimming of the sky.<br><br>
Learning a new language often involves a <i><b>gradual</b></i> improvement in vocabulary and grammar skills.`
              }
            ],
            [
              {
                type: 'title',
                text: 'grasp'
              },
              '- hold firmly',
              {
                type: 'html',
                text: `Eg: <br><br>
He reached out to <i><b>grasp</b></i> the doorknob, but it slipped through his fingers.<br><br>
The teacher helped her students <i><b>grasp</b></i> complex mathematical concepts through clear explanations.`
              }
            ]
          ]
        },
        {
          steps: [
            [
              {
                type: 'title',
                text: 'habit'
              },
              '- an established custom',
              {
                type: 'html',
                text: `Eg: <br><br>
Her morning <i><b>habit</b></i> was to start the day with a cup of freshly brewed coffee.<br><br>
Breaking a bad <i><b>habit</b></i> often requires commitment and self-discipline.`
              }
            ],
            [
              {
                type: 'title',
                text: 'harsh'
              },
              '- disagreeable to the senses',
              {
                type: 'html',
                text: `Eg: <br><br>
The <i><b>harsh</b></i> winter weather made it difficult to drive on icy roads.<br><br>
His <i><b>harsh</b></i> criticism of the team's performance upset some of the players.`
              }
            ],
            [
              {
                type: 'title',
                text: 'imitate'
              },
              `- reproduce someone's behavior or looks`,
              {
                type: 'html',
                text: `Eg: <br><br>
Children often <i><b>imitate</b></i> their parents' behavior and speech patterns.<br><br>
The talented impressionist comedian could flawlessly <i><b>imitate</b></i> various celebrities.`
              }
            ],
            [
              {
                type: 'title',
                text: 'individual'
              },
              '- being or characteristic of a single thing or person',
              {
                type: 'html',
                text: `Eg: <br><br>
Each <i><b>individual</b></i> in the group had a unique perspective on the issue.<br><br>
The company celebrated the achievements of every <i><b>individual</b></i> employee at the annual awards ceremony.`
              }
            ],
            [
              {
                type: 'title',
                text: 'intelligent'
              },
              '- having the capacity for thought and reason to a high degree',
              {
                type: 'html',
                text: `Eg: <br><br>
She was known for her <i><b>intelligent</b></i> problem-solving skills and insightful ideas.<br><br>
Albert Einstein was regarded as one of the most <i><b>intelligent</b></i> scientists in history.`
              }
            ],
            [
              {
                type: 'title',
                text: 'intend'
              },
              '- have in mind as a purpose',
              {
                type: 'html',
                text: `Eg: <br><br>
I <i><b>intend</b></i> to complete my degree in computer science within the next two years.<br><br>
His actions clearly showed that he did not <i><b>intend</b></i> to cause any harm.`
              }
            ]
          ]
        },
        {
          steps: [
            [
              {
                type: 'title',
                text: 'journey'
              },
              '- the act of traveling from one place to another',
              {
                type: 'html',
                text: `Eg: <br><br>
The <i><b>journey</b></i> across the country by train provided breathtaking views of diverse landscapes.<br><br>
Life is a continuous <i><b>journey</b></i>, and every day brings new experiences.`
              }
            ],
            [
              {
                type: 'title',
                text: 'launch'
              },
              '- propel with force',
              {
                type: 'html',
                text: `Eg: <br><br>
The company decided to <i><b>launch</b></i> its new product with a high-profile advertising campaign.<br><br>
The space agency prepared to <i><b>launch</b></i> the spacecraft into orbit.`
              }
            ],
            [
              {
                type: 'title',
                text: 'limit'
              },
              '- as far as something can go',
              {
                type: 'html',
                text: `Eg: <br><br>
There's a <i><b>limit</b></i> to how much weight the bridge can support before it becomes unsafe.<br><br>
The doctor advised him to <i><b>limit</b></i> his intake of sugary foods for the sake of his health.`
              }
            ],
            [
              {
                type: 'title',
                text: 'locate'
              },
              '- determine the place of by searching or examining',
              {
                type: 'html',
                text: `Eg: <br><br>
The treasure hunters used a map to <i><b>locate</b></i> the buried chest of gold.<br><br>
He needed to <i><b>locate</b></i> his misplaced car keys before he could leave for work.`
              }
            ],
            [
              {
                type: 'title',
                text: 'loyal'
              },
              '- steadfast in allegiance or duty',
              {
                type: 'html',
                text: `Eg: <br><br>
A <i><b>loyal</b></i> friend stands by you through both good times and bad, offering support and trust.<br><br>
The dog's <i><b>loyal</b></i> devotion to its owner was evident in its unwavering affection.`
              }
            ],
            [
              {
                type: 'title',
                text: 'magnificent'
              },
              '- characterized by grandeur',
              {
                type: 'html',
                text: `Eg: <br><br>
The grand, <i><b>magnificent</b></i> palace was a testament to the wealth and power of the royal family.<br><br>
The sunset over the ocean painted a <i><b>magnificent</b></i> panorama of colors in the sky.`
              }
            ],
            [
              {
                type: 'title',
                text: 'marsh'
              },
              '- low-lying wet land with grassy vegetation',
              {
                type: 'html',
                text: `Eg: <br><br>
The nature reserve was home to a beautiful, serene <i><b>marsh</b></i> with diverse wildlife.<br><br>
We had to carefully navigate through the muddy <i><b>marsh</b></i> during our hike.`
              }
            ],
            [
              {
                type: 'title',
                text: 'method'
              },
              '- a way of doing something, especially a systematic way',
              {
                type: 'html',
                text: `Eg: <br><br>
Scientists followed a rigorous <i><b>method</b></i> of data collection and analysis in their research. <br><br>
The best <i><b>method</b></i> for controlling weeds is having a goat.`
              }
            ]
          ]
        }
      ]
    },
    {
      label: 'Fill in the blanks',
      type: 'matchByDragDrop',
      id: 'drag-drop-2',
      lockAfter: 1,
      commonData: {
        title:
          'Drag the correct option in each blank to form meaningfull sentences.'
      },
      data: [
        `She signed the *deed* to her new house, officially transferring ownership.
The brave knight stood ready to *defend* the kingdom against the approaching dragon.
The *delicate* embroidery on the wedding dress was exquisite, showcasing incredible attention to detail.
A smartphone is a versatile *device* that allows you to communicate, browse the internet, and take photos.
The *diagram* in the textbook illustrated the process of photosynthesis in plants.`,

        `Our digestive system helps *digest* the food we eat, breaking it down into nutrients for our body.
Vaccines have been crucial in preventing the spread of infectious *diseases* like polio and smallpox.
The mountains in the *distant* horizon looked like a hazy silhouette against the setting sun.
After a long day at work, she took a short *doze* on the couch to recharge.
The boat began to *drift* along the gentle current of the river.`,

        `Her *elegant* evening gown turned heads at the formal event.
Accessible ramps and elevators *enable* people with disabilities to enter buildings easily.
The detective carefully *examined* the crime scene for any clues that might solve the case.
The adventurous couple decided to *explore* the dense Amazon rainforest during their vacation.
She used a handheld *fan* to cool off during the hot summer day.`,

        `The car accident had a *fatal* outcome, and several lives were tragically lost.
The *fierce* storm brought strong winds and heavy rain, causing damage to homes and trees.
The butterfly began to *flutter* its colorful wings as it took flight.
Winning the lottery was an incredibly *fortunate* turn of events for the struggling family.
The *frail* elderly woman needed assistance with daily tasks due to her weakened physical condition.`,

        `She let out a *gasp* of surprise when she saw the breathtaking view from the mountaintop.
The graceful swan seemed to *glide* effortlessly across the tranquil pond.
In the geography class, students studied a *globe* to learn about the Earth's continents and oceans.
The ballet dancer moved with remarkable *grace* and precision, captivating the audience.
The *gradual* transition from day to night was marked by the slow dimming of the sky.`,

        `He reached out to *grasp* the doorknob, but it slipped through his fingers.
Her morning *habit* was to start the day with a cup of freshly brewed coffee.
The *harsh* winter weather made it difficult to drive on icy roads
Children often *imitate* their parents' behavior and speech patterns.
Each *individual* in the group had a unique perspective on the issue.`,

        `She was known for her *intelligent* problem-solving skills and insightful ideas.
I *intend* to complete my degree in computer science within the next two years.
The *journey* across the country by train provided breathtaking views of diverse landscapes.
The company decided to *launch* its new product with a high-profile advertising campaign.
The doctor advised him to *limit* his intake of sugary foods for the sake of his health.`,

        `The treasure hunters used a map to *locate* the buried chest of gold.
A *loyal* friend stands by you through both good times and bad, offering support and trust.
The grand, *magnificent* palace was a testament to the wealth and power of the royal family.
The nature reserve was home to a beautiful, serene *marsh* with diverse wildlife.
Scientists followed a rigorous *method* of data collection and analysis in their research.`
      ]
    },
    {
      type: 'completeWord',
      id: 'complete-word-2',
      label: 'Complete Word',
      data: [
        `A legal document to effect a transfer of property | Deed
Protect against a challenge or attack | Defend
Developed with extreme subtlety | Delicate
An instrumentality invented for a particular purpose | Device
A drawing intended to explain how something works | Diagram
Convert food into absorbable substances | Digest
An impairment of health | Disease
Separated in space or coming from far away | Distant
A light fitful sleep | Doze
Be in motion due to some air or water current | Drift`,

        `Refined and tasteful in appearance, behavior, or style | Elegant
Provide the means to perform some task | Enable
Observe, check out, and look over carefully or inspect | Examine
Travel to or penetrate into | Explore
A device for creating a current of air by movement | Fan
Bringing death | Fatal
Marked by extreme and violent energy | Fierce
Flap the wings rapidly or fly with flapping movements | Flutter
Having unexpected good luck | Fortunate
Physically weak | Frail`,

        `A short labored intake of breath with the mouth open | Gasp
Move smoothly and effortlessly | Glide
An object with a spherical shape | Globe
Elegance and beauty of movement or expression | Grace
Proceeding in small stages | Gradual
Hold firmly | Grasp
An established custom | Habit
Disagreeable to the senses | Harsh
Reproduce someone's behavior or looks | Imitate
Being or characteristic of a single thing or person | Individual`,

        `Having the capacity for thought and reason to a high degree | Intelligent
Have in mind as a purpose | Intend
The act of traveling from one place to another | Journey
Propel with force | Launch
As far as something can go | Limit
Determine the place of by searching or examining | Locate
Steadfast in allegiance or duty | Loyal
Characterized by grandeur | Magnificent
Low|lying wet land with grassy vegetation | Marsh
A way of doing something, especially a systematic way | Method`
      ]
    }
  ]
};
