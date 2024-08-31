export default {
  label: 'Know Our Numbers',
  id: 'know-our-numbers-6',
  list: [
    {
      type: 'numberInput',
      id: 'fillup',
      label: 'Exercise 1.1',
      commonData: {
        isSentence: true,
        fontSize: '1.2rem',
        fracFontSize: '1.2rem',
        title: 'Answer the following'
      },
      data: [
        {
          title: `Fill in the blanks:`,

          list: [
            `1 lakh
= ?0 ten thousand
10`,

            `1 million 
= ?0 hundred thousand
10`,

            `1 crore
= ?0 ten lakh
10`,

            `1 crore
= ?0 million
10`,

            `1 million
= ?0 lakh
10`
          ]
        },
        {
          title: `Place commas correctly and write the numerals:`,
          ansDelimitor: ';',
          commaInput: true,
          list: [
            `Seventy three lakh seventy five thousand three hundred seven.
Ans = ?0
73,75,307`,

            `Nine crore five lakh forty one.
Ans = ?0
9,05,00,041`,

            `Seven crore fifty two lakh twenty one thousand three hundred two.
Ans = ?0
7,52,21,302`,

            `Fifty eight million four hundred twenty three thousand two hundred two.
Ans = ?0
58,423,202`,

            `Twenty three lakh thirty thousand ten.
Ans = ?0
23,30,010`
          ]
        }
      ]
    },
    {
      type: 'makeSentence',
      label: 'Write the number name',
      id: 'convert-names',
      commonData: {
        extras: 'one five seven nine forty eighty hundred thousand'
      },
      data: [
        {
          title:
            'Insert commas suitably and write the names according to Indian System of Numeration',
          text: `87595762 | eight crore seventy five lakh ninety five thousand seven hundred sixty two
8546283 | eighty five lakh forty six thousand two hundred eighty three
99900046 | nine crore ninety nine lakh forty six
98432701 | nine crore eighty four lakh thirty two thousand seven hundred one`
        },
        {
          title:
            'Insert commas suitably and write the names according to International System of Numeration :',
          text: `78921092 | seventy eight million nine hundred twenty one thousand ninety two
7452283 | seven million four hundred fifty two thousand two hundred eighty three
99985102 | ninety nine million nine hundred eighty five thousand one hundred two
48049831| forty eight million forty nine thousand eight hundred thirty one`
        }
      ]
    },
    {
      type: 'numberInput',
      id: 'word-prob',
      label: 'Exercise 1.2',
      commonData: {
        isSentence: true,
        fontSize: '1.2rem',
        fracFontSize: '1.2rem',
        title: 'Answer the following'
      },
      data: [
        {
          list: [
            `A book exhibition was held for four days in a school. The number of tickets sold at the counter on the first, second, third and final day was respectively 1094, 1812, 2050 and 2751. Find the total number of tickets sold on all the four days.
Ans = ?0 ##<add, 1094, 1812, 2050, 2751>
7707`,

            `Shekhar is a famous cricket player. He has so far scored 6980 runs in test matches. He wishes to complete 10,000 runs. How many more runs does he need?
Ans = ?0 ##<sub, 10000, 6980>
3020`,

            `In an election, the successful candidate registered 5,77,500 votes and his nearest rival secured 3,48,700 votes. By what margin did the successful candidate win the election?
Ans = ?0 ##<sub, 577500, 348700>
228800`,

            `Kirti bookstore sold books worth ₹ 2,85,891 in the first week of June and books worth ₹ 4,00,768 in the second week of the month. How much was the sale for the two weeks together? In which week was the sale greater and by how much?
Total Books worth sold in two weeks 
= ?0 ##<add, 285891, 400768>
More worth of books were sold in the #< ?1, first, second> week.
??1 week sales was more by
= ₹ ?2 ##<sub, 400768, 285891>
686659, second, 114877`,

            `Find the difference between the greatest and the least 5-digit number that can be written using the digits 6, 2, 7, 4, 3 each only once.
Using the given digits,
greatest number = ?0
least number = ?1
difference = ?2 ##<sub, 76432, 23467>
76432, 23467, 52965`
          ]
        },
        {
          list: [
            `A machine, on an average, manufactures 2,825 screws a day. How many screws did it produce in the month of January 2006?
               Ans = ?0 ##<mul, 2825, 31>
               87575`,

            `A merchant had ₹ 78592 with her. She placed an order for purchasing 40 radio sets at ₹ 1200 each. How much money will remain with her after the purchase?
               price of 40 radios
               = ?0 ##<mul, 1200, 40>
               Merchant will be left with
               = ?1 - ??0
               = ?2 ##<sub, 78592, 48000>
               48000, 78592, 30592`,

            `A student multiplied 7236 by 65 instead of multiplying by 56. By how much was his answer greater than the correct answer? (Hint: Do you need to do both the multiplications?)
               The difference between the real and the mistaken number
                = ?0
                Ans = ?1 × ??0
                = ?2 ##<mul, 7236, 9>
                9, 7236, 65124`,

            `To stitch a shirt, 2 𝑚 15 𝑐𝑚 cloth is needed. Out of 40 𝑚 cloth, how many shirts can be stitched and how much cloth will remain? (Hint: convert data in 𝑐𝑚)
Cloth required for 1 shirt
 = ?0 𝑐𝑚
Total cloth = ?1 𝑐𝑚
No. of shirts can be made
 = ??1 ÷ ??0
  = ?2 ##<div, 4000, 215>
Remaining cloth
 = ?3 𝑐𝑚
  = ?4 𝑚 ?5 𝑐𝑚
215, 4000, 18, 130, 1, 30`,

            `Medicine is packed in boxes, each weighing 4 𝑘𝑔 500 𝑔. How many such boxes can be loaded in a van which cannot carry beyond 800 𝑘𝑔?
Weight of each box
 = ?0 𝑔
 Max weight can be loaded
  = ?1 𝑔
Max boxes can be loaded
 = ??1 ÷ ??0 ##<div, 800000, 4500>
 = ?2 
4500, 800000, 177`
          ]
        },
        {
          list: [
            `The distance between the school and a student's house is 1 𝑘𝑚 875 𝑚. Everyday she walks both ways. Find the total distance covered by her in six days.
              Distance between house and school
              = ?0 𝑚
              Total no. of times she covered the distance
               = ?1 
             Total distance covered in 6 days
              = ??0 × ??1 = ?2 𝑚 ##<mul, 1875, 12>
              = ?3 𝑘𝑚 ?4 𝑚
1875, 12, 22500, 22, 500`,

            `A vessel has 4 ^litres and 500 ^ml of curd. In how many glasses, each of 25 ^ml capacity, can it be filled?
Amount of curd in the vessel
= ?0 ^ml
No. of glasses that can be filled
 = ??0 ÷ ?1 = ?2 ##<div, 4500, 25>
4500, 25, 180`
          ]
        }
      ]
    },
    {
      type: 'numberInput',
      id: 'word-prob-2',
      label: 'Estimation (Exercise 1.3)',
      commonData: {
        isSentence: true,
        fontSize: '1.2rem',
        fracFontSize: '1.2rem',
        title: 'Answer the following'
      },
      data: [
        {
          title: 'Estimate each of the following using general rule',
          list: [
            `730 + 998
            Lets round off the numbers to the nearest hundreds.
            730 becomes ?0
            998 becomes ?1
            Ans = ?2
            700, 1000, 1700`,

            `796 – 314
             Lets round off the numbers to the nearest hundreds.
            796 becomes ?0
            314 becomes ?1
            Ans = ?2
            800, 300, 500`,

            `12,904 + 2,888 
            Lets round off the numbers to the nearest thousands.
            12904 becomes ?0
            2888  becomes ?1
            Ans = ?2
            13000, 3000, 16000
            `,

            `28,292 – 21,496
            Lets round off the numbers to the nearest hundreds
            28,292 becomes ?0
            21,496 becomes ?1
            Ans = ?2
             (Note: As the number 21456 is nearly in the middle of 21000 and 22000, we are rounding off to the nearest hundreds)
            28300, 21500, 6800
            `
          ]
        },

        {
          title:
            'Give a rough estimate (by rounding off to nearest hundreds) and also a closer estimate (by rounding off to nearest tens) :',
          list: [
            `439 + 334 + 4,317
                By rounding off to the nearest hundreds
                 = ?0 + ?1 + ?2
                 = ?3
                By rounding off to the nearest tens
                = ?4 + ?5 + ?6
                = ?7 ##<add, 440, 330, 4320>
                 400, 300, 4300, 5000, 440, 330, 4320, 5090`,

            `1,08,734 – 47,599
                 By rounding off to the nearest hundreds
                 = ?0 – ?1 
                 = ?2 ##<sub, 108700, 47600>
                  By rounding off to the nearest tens
                 = ?3 – ?4
                 = ?5 ##<sub, 108730, 47600>
                 108700, 47600, 61100, 108730, 47600, 61130`,

            `8325 – 491
                  By rounding off to the nearest hundreds
                 = ?0 – ?1 
                 = ?2 
                  By rounding off to the nearest tens
                 = ?3 – ?4
                 = ?5 ##<sub, 8330, 490>
                 8300, 500, 7800, 8330, 490, 7840`,

            `4,89,348 – 48,365
                 By rounding off to the nearest hundreds
                = ?0 – ?1 
                = ?2 ##<sub, 489000, 48000>
                 By rounding off to the nearest tens
                = ?3 – ?4
                = ?5 ##<sub, 489350, 48370>
                489300, 48400, 440900, 489350, 48370, 440980`
          ]
        },

        {
          title: 'Estimate the following products using general rule',
          list: [
            `578 × 161
                If we round off to the nearest hundreds
                = ?0 × ?1
                = ?2
                600, 200, 120000`,

            `5281 × 3491
                Lets round off the first number to the nearest thousand and the second number to the nearest hundreds as it is near the middle.
                Ans = ?0 × ?1
                = ?2
                5000, 3500, 17500000
                `,

            `1291 × 592
                Lets round off to the nearest hundreds
                Ans = ?0 × ?1
                = ?2
                1300, 600, 780000`,

            `9250 × 29
                Lets round off the first number to the nearest thousands and the second number to the nearest tens.
                Ans = ?0 × ?1
                = ?2
                9000, 30, 270000`
          ]
        }
      ]
    }
  ]
};
