export default {
  label: 'Whole Numbers',
  id: 'whole-number-6',
  list: [
    {
      type: 'numberInput',
      id: 'fillup',
      label: 'Exercise 2.1',
      data: {
        isSentence: true,
        fontSize: '1.2rem',
        fracFontSize: '1.2rem',
        title: 'Answer the following',
        list: [
          `Write the next three natural numbers after 10999.
?0 , ?1 , ?2
11000, 11001, 11002
`,

          `Write the three whole numbers occurring just before 10001.
?0 , ?1 , ?2
10000, 9999, 9998
`,

          `What is the smallest whole number?
Ans = ?0
0`,

          `How many whole numbers are there between 32 and 53?
Ans = ?0
20`,

          `Write the successor of :
2440701 → ?0
100199 → ?1
1099999 → ?2
2345670 → ?3
2440702, 100200, 1100000, 2345671`,

          `Write the predecessor of :
94 ← ?0
10000 ← ?1
208090 ← ?2
7654321 ← ?3
93, 9999, 208089, 7654320`,

          `In each of the following pairs of numbers, state which whole number is on the left of the other number on the number line
In a numberline
530 is present in the #< ?0, left, right> of 503.
370 is present in the #< ?1, left, right> of 307.
98765 is present in the #< ?2, left, right> of 56789.
9830415 is present in the #< ?3, left, right> of 10023001.
right, right, right, left`
        ]
      }
    },
    {
      id: 'true-false',
      label: 'True or False',
      type: 'classifySentence',
      data: {
        title: 'True or False',
        types: [
          {
            name: 'True',
            text: `Zero is the smallest whole number.
600 is the successor of 599.
All natural numbers are whole numbers.
The natural number 1 has no predecessor.
The whole number 0 has no predecessor.`
          },
          {
            name: 'False',
            text: ` Zero is the smallest natural number.
400 is the predecessor of 399.
All whole numbers are natural numbers.
The predecessor of a two digit number is never a single digit number.
1 is the smallest whole number.
The whole number 1 has no predecessor
The whole number 13 lies between 11 and 12.
The successor of a two digit number is always a two digit number.`
          }
        ]
      }
    },
    {
      type: 'numberInput',
      id: 'word-probs',
      label: 'Exercise 2.2',
      commonData: {
        isSentence: true,
        title: 'Answer the following'
      },
      data: [
        {
          list: [
            `Find the sum by suitable rearrangement:
837 + 208 + 363
= ?0 + 208
= ?1
1200, 1408`,

            `Find the sum by suitable rearrangement:
1962 + 453 + 1538 + 647
= 1962 + 1538 + 453 + 647
= ?0 + ?1
= ?2
3500, 1100, 4600`,

            `A taxidriver filled his car petrol tank with 40 litres of petrol on Monday. The next day, he filled the tank with 50 litres of petrol. If the petrol costs ₹ 44 per litre, how much did he spend in all on petrol?
Ans = ( ?0 + ?1 ) × ?2
= ?3 × ??2
= ₹ ?4 ##<mul, 44, 9>
40, 50, 44, 90, 3960`,

            `A vendor supplies 32 litres of milk to a hotel in the morning and 68 litres of milk in the evening. If the milk costs ₹ 45 per litre, how much money is due to the vendor per day?
Ans = ( ?0 + ?1 ) × ?2
= ?3 × ??2
= ₹ ?4
32, 68, 45, 100, 4500`
          ]
        },
        {
          title: 'Find the product by suitable rearrangement:',
          list: [
            `2 × 1768 × 50
= 1768 × ?0
= ?1
100, 176800`,

            `4 × 166 × 25
= 166 × ?0
= ?1
100, 16600`,

            `8 × 291 × 125
= 291 × ?0
= ?1
1000, 291000`,

            `625 × 279 × 16
= ?0 × 279 ##<mul, 625, 16>
= ?1 
10000, 2790000`,

            `285 × 5 × 60
= 285 × ?0
= ?1 ##<mul, 285, 3>
300, 85500`,

            `125 × 40 × 8 × 25
= 125 × 8 × 40 × 25
= ?0 × ?1
= ?2
1000, 1000, 1000000`
          ]
        },
        {
          title: 'Find the value of the following:',
          list: [
            `297 × 17 + 297 × 3
= 297 × ( ?0 + ?1 )
= 297 × ?2
= ?3 ##<mul, 297, 2>
17, 3, 20, 5940`,

            `54279 × 92 + 8 × 54279
= 54279 × ( ?0 + ?1 )
= 54279 × ?2
= ?3
92, 8, 100, 5427900`,

            `81265 × 169 – 81265 × 69
= 81265 × ( ?0 – ?1 )
= 81265 × ?2
= ?3
169, 69, 100, 8126500`,

            `3845 × 5 × 782 + 769 × 25 × 218
3845 = ?0 × 5 ##<div, 3845, 5>
3845 × 5 = ??0 × ?1
Ans = ??0 × ??1 × ( ?2 + ?3 ) 
= ??0 × ??1 × ?4
= ?5 × ??4 ##<mul, 769, 25>
= ?6
769, 25, 782, 218, 1000, 19225, 19225000`
          ]
        },
        {
          title: `Find the product using suitable properties.`,
          list: [
            `738 × 103
= 738 × ( ?0 + ?1 )
= ?2 + ?3 ##<mul, 738, 3>
= ?4 ##<add, 73800, 2214>
100, 3, 73800, 2214, 76014`,

            `854 × 102
= 854 × ( ?0 + ?1 )
= ?2 + ?3 ##<mul, 854, 2>
= ?4 ##<add, 85400, 1708>
100, 2, 85400, 1708, 87108`,

            `258 × 1008
= 258 × ( ?0 + ?1 )
= ?2 + ?3 ##<mul, 258, 8>
= ?4 ##<add, 258000, 2064> 
1000, 8, 258000, 2064, 260064`,

            `1005 × 168
= ( ?0 + ?1 ) × 168
= ?2 + ?3 ##<mul, 168, 5>
= ?4 
1000, 5, 168000, 840, 168840`
          ]
        }
      ]
    },
    {
      id: 'mcq',
      label: 'Multiple Choice Question',
      type: 'mcq',
      data: {
        title: 'What property the below equation represents.',
        fontSize: '1rem',
        fracFontSize: '1rem',
        questions: [
          {
            qText: '425 × 136 = 425 × (6 + 30 + 100)',
            options: `Distributivity of multiplication over addition
Commutativity under addition
Commutativity under multiplication`
          },
          {
            qText: ' 2 × 49 × 50 = 2 × 50 × 49',
            options: `Commutativity under multiplication
Distributivity of multiplication over addition
Commutativity under addition`
          },
          {
            qText: '80 + 2005 + 20 = 80 + 20 + 2005',
            options: `Commutativity under addition
Distributivity of multiplication over addition
Commutativity under multiplication`
          }
        ]
      }
    },
    {
      id: 'true-false-2',
      label: 'True or False (Ex 2.3)',
      type: 'classifySentence',
      commonData: {
        title: 'True or False'
      },
      data: [
        {
          title: 'Which of the following will not represent zero',
          types: [
            {
              name: 'Zero',
              text: `0 × 0
            0/2
            10-10/2`
            },
            {
              name: 'Not zero',
              text: `1 + 0`
            }
          ]
        },
        {
          types: [
            {
              name: 'True',
              text: `If the product of two whole numbers is zero, can we say that one or both of them will be zero? | 0 × 1 = 1 × 0 = 0 × 0 = 0`
            },
            {
              name: 'False',
              text: `If the product of two whole numbers is 1, can we say that one or both of them will be 1? | Both the numbers have to be one. Just one number being 1 is not enough.`
            }
          ]
        }
      ]
    },
    {
      type: 'numberInput',
      id: 'word-probs-3',
      label: 'Distributive Property ',
      data: {
        isSentence: true,
        title: 'Answer the following',
        list: [
          `Find using distributive property :
728 × 101
= 728 × ( ?0 + ?1 )
= ?2 + ?3
= ?4 ##<add, 72800, 728>
100, 1, 72800, 728, 73528`,

          `Find using distributive property :
5437 × 1001
= 5437 × ( ?0 + ?1 )
= ?2 + ?3
= ?4 ##<add, 5437000, 5437>
1000, 1, 5437000, 5437, 5442437`,

          `Find using distributive property :
 824 × 25
= ( ?0 + ?1 ) × 25
= ?2 + ?3
= ?4 
800, 24, 20000, 600, 20600`,

          `Find using distributive property :
4275 × 125
= 4275 × ( ?0 + ?1 )
= ?2 + ?3 ##<mul, 4275, 25>
= ?4 ##<add, 427500, 106875>
100, 25, 427500, 106875, 534375 `,

          `Find using distributive property :
 504 × 35
= ( ?0 + ?1 ) × 35
= ?2 + ?3 ##<mul, 35, 5>
= ?4 
500, 4, 17500, 140, 17640`,

          `Study the pattern : Write the next two steps.
1 × 8 + 1 = 9 
12 × 8 + 2 = 98
123 × 8 + 3 = 987
1234 × 8 + 4 = 9876
12345 × 8 + 5 = 98765
?0 × ?1 + ?2 = ?3
?4 × ?5 + ?6 = ?7
123456, 8, 6, 987654, 1234567, 8, 7, 9876543`
        ]
      }
    }
  ]
};
