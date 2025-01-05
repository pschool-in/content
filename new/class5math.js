export default {
  label: 'Class 5 Math',
  id: 'class5math',
  lockAfter: 100,
  list: [
    {
      type: 'informationProcessing',
      id: 'pie',
      label: 'Pie Chart',
      data: {
        title:
          'Observe the below pie chart and answer the corresponding questions.',
        type: 'pie',
        labels: 'pepperoni, supreme, sausage, cheese',
        values: '10, 5, 3, 2',
        questions: [
          {
            qText:
              'What fraction of people like pepperoni as their pizza topping?',
            options: '1/2 , 1/4, 10/5'
          },
          {
            qText:
              'What fraction of people like supreme as their pizza topping?',
            options: '1/4, 1/2, 5/10'
          },
          {
            qText:
              'Which topping among cheese and sausage is preferred by more people?',
            options: 'sausage, cheese'
          },
          {
            qText:
              'What is the difference between the top two favourite toppings?',
            type: 'number',
            value: 5
          }
        ]
      }
    },
    {
      type: 'numberInput',
      id: 'word-prob',
      label: 'Word Problems: Measurement',
      data: {
        title: 'Answer the following',
        isSentence: true,
        fracFontSize: '0.9rem',
        fontSize: '1rem',
        inputType: 'small',
        list: [
          `A milkman sold 36 𝑙 200 𝑚𝑙 of milk on each day of the first 4 days of a week and 24 𝑙 450 𝑚𝑙 of milk on each day for the next 2 days. How much quantity of milk did he sell in 6 days?
36 𝑙 200 𝑚𝑙 = ?0 𝑚𝑙
Milk sold in first 4 days
= ??0 × 4 = ?1 ##<mul, 362, 4>
24 𝑙 450 𝑚𝑙 = ?2 𝑚𝑙
Milk sold in next 2 days
= ??2 × 2 = ?3 𝑚𝑙 ##<mul, 2445, 2>
Total milk sold in 6 days
= ??1 + ??3
= ?4  𝑚𝑙 ##<add, 144800, 48900>
= ?5 𝑙 ?6 𝑚𝑙
36200, 144800, 24450, 48900, 193700, 193, 700`,

          `Aishu bought a ribbon of length 12 𝑚. She used 8 𝑚 48 𝑐𝑚	of the ribbon to make flowers and the remaining to make a garland. What is the length of the ribbon used to make the garland?
12 𝑚 = ?0 𝑐𝑚
8 𝑚 48 𝑐𝑚 = ?1 𝑐𝑚
Length of the ribbon to make garland
= ??0 - ??1
= ?2 𝑐𝑚 ##<sub,1200, 848>
= ?3 𝑚  ?4 𝑐𝑚
1200, 848, 352, 3, 52`,

          `Chandu has made a New Year's resolution to run 3 𝑘𝑚 every day. Today, he ran 1 𝑘𝑚 470 𝑚. What is the shortfall according to his resolution?
3 𝑘𝑚 = ?0 𝑚
1 𝑘𝑚 470 𝑚 = ?1 𝑚
Short fall = ??0  - ??1
= ?2 𝑚 ##<sub, 3000, 1470>
3000, 1470, 1530`,

          `A jug of milk is can be filled in 5 glasses. The capacity of the jug is 1 𝑙. What is the capacity of 1 glass?
1 𝑙 = ?0 𝑚𝑙
Capacity of 1 glass
= ??0 ÷ ?1
= ?2 𝑚𝑙
1000, 5, 200`,

          `A basket of mango weighs 2 𝑘𝑔 700 𝑔. The basket has 18 mangoes. What is the weight of each mango?
2 𝑘𝑔 700 𝑔 = ?0 𝑔
weight of each mango
= ??0 ÷ ?1
= ?2 𝑔
2700, 18, 150`,

          `A rope of length 40 𝑚 is cut into 8 equal pieces. What is the length of each piece?
Length of each piece
= ?0 ÷ ?1
= ?2 𝑚
40, 8, 5`
        ]
      }
    },
    {
      id: 'classify-like-unlike',
      label: 'Compare Quantities',
      type: 'classifySentence',
      data: {
        title: 'Compare the following measures.',
        fracFontSize: '1.5rem',
        fontSize: '2rem',
        textAlign: 'center',
        types: [
          {
            name: ' < ',
            text: `3 yards ____ 10 feet`
          },
          {
            name: ' = ',
            text: `240 inch ______ 20 ft
500 g _____ ½ kg`
          },
          {
            name: ' > ',
            text: `3 tonnes _____ 300 kg
5 𝑙  ____ 500 𝑚𝑙
20 𝑘𝑙 ____ 2000 𝑙`
          }
        ]
      }
    },
    {
      id: 'mcq',
      label: 'Multiple Choice Question',
      type: 'mcq',
      data: {
        title: 'Find the right option.',
        fontSize: '1.1rem',
        fracFontSize: '1rem',
        questions: [
          {
            qText: '800 kg = ______ quintals.',
            options: `8, 6, 7, 9`
          },
          {
            qText: '15 tonnes = ______ kg.',
            options: `15000, 1500, 150, 1000`
          },
          {
            qText: '7000 litres = ______ kilolitres',
            options: `7, 70, 700, 0.7`
          },

          {
            qText: 'What number, the below tally mark represents?',
            qImg: {
              width: 320,
              height: 60,
              paths: [
                `M 30 10 v 40 M 40 10 v 40 M 50 10 v 40 M 60 10 v 40 M 60 10 l -30 40`,
                `M 80 10 v 40 M 90 10 v 40 M 100 10 v 40 M 110 10 v 40 M 110 10 l -30 40`,
                `M 130 10 v 40 M 140 10 v 40 M 150 10 v 40 M 160 10 v 40 M 160 10 l -30 40`,
                `M 180 10 v 40 M 190 10 v 40 M 200 10 v 40 M 210 10 v 40 M 210 10 l -30 40`,
                `M 230 10 v 40 M 240 10 v 40 M 250 10 v 40 M 260 10 v 40 M 260 10 l -30 40`,
                `M 280 10 v 40 M 290 10 v 40 `
              ]
            },
            options: `27, 25, 23, 29`
          }
        ]
      }
    },
    {
      type: 'numberInput',
      id: 'word-prob',
      label: 'Word Problems: Measurement',
      data: {
        title: 'Answer the following',
        isSentence: true,
        fracFontSize: '0.9rem',
        fontSize: '1rem',
        inputType: 'small',
        list: [
          `√49 x √16 = ?0
          28`
        ]
      }
    }
  ]
};
