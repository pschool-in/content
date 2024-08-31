export default {
  id: 'unit-rate',
  label: 'Unit Rate',
  list: [
    {
      id: 'story',
      type: 'slides2',
      label: `What is Rate and Unit Rate?`,
      data: {
        title: `What is Rate and Unit Rate?`,
        displayType: 'custom',
        autoPlay: false,
        audio: 'math/unit-rate.mp3',
        audioOffsets: [7, 16, 25, 35, 50, 67, 82, 102],
        reusables: {
          example1: [
            {
              type: 'title',
              text: 'Example 1:'
            },
            '3 Pens cost ₹ 15.',
            'Money: Pens',
            '15 : 3'
          ],
          example2: [
            {
              type: 'title',
              text: 'Example 2:'
            },
            'I can write 8 pages in 2 hours.',
            'Pages : Hours',
            '8 : 2'
          ],
          example3: [
            {
              type: 'title',
              text: 'Example 3:'
            },
            'A plane flew 1000 km in 4 hours.',
            'Km : Hours',
            '1000 : 4'
          ]
        },
        steps: [
          [
            {
              type: 'title',
              text: 'What is Rate?'
            },
            'A rate is a ratio that compares two quantities with different units of measure.'
          ],
          [
            {
              type: 'reusable',
              id: 'example1'
            }
          ],
          [
            {
              type: 'reusable',
              id: 'example2'
            }
          ],
          [
            {
              type: 'reusable',
              id: 'example3'
            }
          ],
          [
            {
              type: 'title',
              text: 'What is Unit Rate?'
            },
            'A unit rate of two quantities in a ratio is the number of units of the first quantity for every 1 unit of the second quantity.',
            `We have to divide the first quantity by the second.`
          ],
          [
            {
              type: 'reusable',
              id: 'example1'
            },
            ' = 5 : 1',
            'One pen costs ₹ 5.'
          ],
          [
            {
              type: 'reusable',
              id: 'example2'
            },
            '= 4 : 1',
            'I can write 4 pages in 1 hour.'
          ],
          [
            {
              type: 'reusable',
              id: 'example3'
            },
            '= 250: 1',
            'The plane flew 250 km in 1 hour'
          ]
        ]
      }
    },
    {
      type: 'informationProcessing',
      id: 'rate-table',
      label: 'Rate Table',
      data: [
        {
          title:
            'The following table shows the speeds at which Jeff does 4 activities.',
          type: 'table',
          table: `Activity | Km | Hours
Cycling | 22 | 2
Walking | 16 | 4
Running | 18 | 3
Swimming | 6 | 1.5`,
          widths: [140, 100, 100],
          questions: [
            {
              qText: 'How many km can he cycle in one hour?',
              type: 'number',
              value: 11
            },
            {
              qText: 'How many km can he swim in one hour?',
              type: 'number',
              value: 4
            },
            {
              qText:
                'If he ride cycle for 1 hour and walk for 2 hours, how many km did he cover?',
              type: 'number',
              value: 19
            },
            {
              qText:
                'Which type of activity does Jeff do at a speed of 4 km per hour?',
              options: 'Walking, Cycling, Running'
            },
            {
              qText:
                'He performs two activites at the same rate. What are they?',
              options:
                'walking & swimming, running & swimming, walking & cycling'
            }
          ]
        },
        {
          title: 'The following table shows the heart beat rate for 4 animals.',
          type: 'table',
          table: `Animal | Heartbeats | Minutes
Pig | 225 | 3
Horse | 180 | 4
Cow | 520| 8
Dog |540 |8`,
          widths: [140, 100, 100],
          questions: [
            {
              qText: `How many time the horse's heart beat in one minute?`,
              type: 'number',
              value: 45
            },
            {
              qText: `How many time the pig's heart beat in one minute?`,
              type: 'number',
              value: 75
            },
            {
              qText: `How many time the horse's heart beat in 3 minute?`,
              type: 'number',
              value: 135
            },
            {
              qText: `Which animal's heart beats at a rate of 65 beats per minute?`,
              options: 'Cow, Dog, Horse'
            },
            {
              qText: 'Which animals heart beat is the fastest?',
              options: 'Pig, Horse, Cow'
            }
          ]
        },

        {
          title:
            'The following table shows the distance travelled and time taken for various vehicles.',
          type: 'table',
          table: `Vehicle | Km | Hours
Aeroplane | 4000 | 4
Ship | 80 | 2
Car | 240| 3
Motorbike |240 |4`,
          widths: [140, 100, 100],
          questions: [
            {
              qText: `True or False: Car and motorbike travel at same speed?`,
              options: 'False, True'
            },
            {
              qText: `How much distance in km, can the aeroplane cover in 5 hours?`,
              type: 'number',
              value: 5000
            },
            {
              qText: `How much time in minutes, does the ship take to cover 100 km?`,
              type: 'number',
              value: 150
            },
            {
              qText: `How many km can the motorbike cover in 1 hr?`,
              type: 'number',
              value: 60
            },
            {
              qText: `Which of the following is the fastest?`,
              options: 'Car, Ship, Motorbike'
            }
          ]
        },

        {
          title:
            'The following table shows the exchange rate of various money against Rupee.',
          type: 'table',
          table: `Money  | Rupee
1 Dollar | ₹ 80
1 Pound | ₹ 100
1 Euro | ₹ 85
1 Yen | ₹ 11 `,
          widths: [160, 160],
          questions: [
            {
              qText: `Which of the following money has higher value?`,
              options: 'Pound, Dollar, Yen, Rupee'
            },
            {
              qText: `If I exchange 10 Dollar, how much Rupee will I get?`,
              type: 'number',
              value: 800
            },
            {
              qText: `If I exchange 2 Euro, how much Rupee will I get?`,
              type: 'number',
              value: 170
            },
            {
              qText: `If I exchange ₹ 10000, how much Pound will I get?`,
              type: 'number',
              value: 100
            },
            {
              qText: `If I exchange ₹ 4000, how much Dollar will I get?`,
              type: 'number',
              value: 50
            }
          ]
        }
      ]
    },
    {
      type: 'numberInput',
      id: 'word-problem',
      label: 'Answer the Word Problems',
      data: {
        title: 'Answer the word problem.',
        type: 'word-problem',
        text: `By walking for one hour, Ravi can burn 100 calaries. How many hours should he walk to burn 400 calaries? | ?0 hours | 4
By walking 1 km, Priya can burn 40 calaries. How much distance should she walk to burn 200 calaries? | ?0 km | 5
Priya does 184 jumping jacks in 4 minutes. She does her jumping jacks at a constant rate. How many jumping jacks can she do per minute? | 46
Nikola buys a bouquet of 8 sunflowers for $18. What is the cost of 1 sunflower? | $ ?0 | 2.25
Alex bought a dozen of apple for $6. What is the cost of 1 apple? | $ ?0 | 0.5`
      }
    },
    {
      type: 'numberInput',
      id: 'table',
      label: 'Word Problems with Steps',
      data: {
        title: 'Word Problems',
        type: 'word-problem',
        answerBox: false,
        fontSize: '1.2rem',
        fracFontSize: '1rem',
        isSentence: true,
        list: [
          `Rohan bought a set of 12 markers for ₹60. What is the cost of 10 markers?
The ratio between  money and markers is 60:12.
As we need to find the cost of 10 markers, let us find 𝑥 in the below equivalent ratio.
60:12 = 𝑥:10
60/12 = 𝑥/10
𝑥 = ?0 × ?1
𝑥 = ?2
5, 10, 50`,

          `Sydney read 50 pages in 40 minutes. She reads at a constant rate. How many pages can he read in 100 minutes?
The ratio between  pages and minutes is 50:40. 
It can be simplified to 
?0 : ?1
As we need to find the pages read in 100 minutes, let us find 𝑥 in the below equivalent ratio.
5: 4 = 𝑥 : 100
𝑥 = ?2/?3 × ?4
𝑥 = 5 × ?5
𝑥 = ?6
5, 4, 5, 4, 100, 25, 125`,

          `Amanda can jog 18 miles in 5 hours. At this rate, how many miles can Amanda jog in 4 hours?
The ratio between miles and hours is 18:5. 
As we need to find the the miles covered in 4 hours, let us find 𝑥 in the below equivalent ratio.
18 : 5 = 𝑥 : 4
𝑥 = ?0/?1 × ?2
𝑥 = ?3/5
𝑥 = ?4 miles
18, 5, 4, 72, 14.4`
        ]
      }
    }
  ]
};
