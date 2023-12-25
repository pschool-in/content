export default {
  label: 'Ratio - 7',
  id: 'ratio-7',
  list: [
    {
      label: 'Equivalent Ratio',
      type: 'classifySentence',
      id: 'eqn-or-not',
      data: {
        title: 'Classify the below two ratios as equivalent or not',
        fontSize: '2rem',
        types: [
          //the last 2 problems from both sets are taken from 7m
          {
            name: 'Equivalent',
            text: `1 : 2, 20 : 40
            75 : 100, 3 : 4
            2 : 5, 10 : 25
             3 : 5, 12 : 20 
            100 : 11, 1000 : 110`
          },
          {
            name: 'Not Equivalent',
            text: ` 1 : 5, 10 : 100
            3 : 5, 10 : 6
            1 : 7, 3 : 14
            12 : 19, 18 : 25
            1 : 7, 7 : 17`
          }
        ]
      }
    },
    {
      type: 'informationProcessing',
      id: 'rate-table',
      label: 'Rate Table',
      data: [
        {
          // m7
          title:
            'The marks obtained by a student in two subjects are given below.',
          type: 'table',
          table: `Subject | Marks Obtained | Maximum Marks
Maths | 17 | 25
English | 12 | 20`,
          widths: [140, 100, 100],
          questions: [
            {
              qText: 'What percentage did she get in English?',
              type: 'number',
              value: 60
            },
            {
              qText: 'What percentage did she get in Maths?',
              type: 'number',
              value: 68
            },
            {
              qText: 'In which subject the student has performed better?',
              options: 'Maths, English, Both equal'
            },
            {
              qText:
                'The ratio between marks obtained and maximum marks for English is ____. (in simplest form)',
              options: '3 : 5, 6 : 10, 12 : 20'
            },
            {
              qText:
                'The ratio between marks obtained and maximum marks for Maths is ____. (in simplest form)',
              options: '17 : 25, 34 : 50, 68 : 100'
            }
          ]
        },
        {
          title: 'The marks obtained by Julie are given below.',
          type: 'table',
          table: `Subject | Marks Obtained | Maximum Marks
Maths | 19 | 25
English | 13 | 20
History | 19 | 50
Science | 21 | 25`,
          widths: [140, 100, 100],
          questions: [
            {
              qText:
                'True or False: Julie got same percentage in both Maths and History.',
              options: 'False, True'
            },
            {
              qText: 'What percentage did she get in History?',
              type: 'number',
              value: 38
            },
            {
              qText: 'What percentage did she get in Science?',
              type: 'number',
              value: 84
            },
            {
              qText:
                'What is the ratio between the maximum marks of History and Science?',
              options: '2 : 1, 1 : 2, 25 : 50, 19 : 21'
            },
            {
              qText: 'In which subject, did she get less percentage of marks?',
              options: 'History, Science, Maths, English'
            }
          ]
        }
      ]
    },
    {
      type: 'numberInput',
      id: 'simplify',
      label: 'Ratio - Simplest Form',
      // Below problems are taken from J7
      data: {
        title: 'Express the given ratio in the simplest form.',
        type: 'word-problem',
        fracFontSize: '0.9rem',
        list: [
          `96 : 144
HCF of 96 and 144 = ?0
Divide both numbers with the HCF to get the simplest form.
96/?1 = ?2
144/?3 = ?4
So the simplest form of the ratio 96:144 is
?5 : ?6
48, 48, 2, 48, 3, 2, 3`,

          `2 2/3 : 1 3/4
First let us write the mixed fraction as improper fraction.
?0/3 : ?1/4
Let us modify the fraction as like fraction. 
The LCM of the denominators = ?2
The ratio can be written as
?3/?4 : ?5/?6
If the denominators are same we can discard them in ratios.
As there is no common factors (HCF = 1), the simplest form of the ratio is
?7 : ?8
8, 7, 12, 32, 12, 21, 12, 32, 21
`,

          `1/8 : 1/10 : 1/4
The LCM of the denominators = ?0
Rewrite the fractions as like fraction.
?1/40 : ?2/40 : ?3/40
The ratio of like fractions can be simplified by removing the denominator.
?4 : ?5 : ?6

40, 5, 4, 10, 5, 4, 10`,

          `2.7 : 6.3 : 9
The decimal points can be removed by multiplying each term by 10.
We get, ?0 : ?1 : ?2
The HCF of the three terms = ?3, 
We will get the simplest ratio form by dividing each term by the HCF.
Ans = ?4 : ?5 : ?6
27, 63, 90, 9, 3, 7, 10`
        ]
      }
    },
    {
      type: 'numberInput',
      id: 'wordproblem',
      label: 'Word Problems',
      data: {
        // Below problems are taken from J7
        title: 'Word Problems',
        type: 'word-problem',
        list: [
          `A student solved 6 out of 10 problems correctly. What is the ratio of the correct problems to the incorrect problems.
No. of incorrect = ?0
The ratio between correct and incorrect
= ?1 : ?2
It can be simplified as 
?3 : ?4
4, 6, 4, 3, 2
`,

          `A petrol tank with a capacity of 100 litres has 25 litres of petrol in it.
i) Find the ratio of the number of litres of petrol in the tank to the capacity of the tank.
ii) What part of the tank is fill?
The ratio between the petrol present and the capacity
= ?0 : ?1
It can be simplified as
?2 : ?3
In terms of fraction, ?4/?5 part of the tank is full.
25, 100, 1, 4, 1, 4`,

          `There are 2000 students in a school. Out of them, 850 are boys and the rest are girls. Find the ratio of 
i) number of girls to number of boys
ii) number of boys to number of students
No. of girls = ?0
The ratio between girls and boys 
= ?1 : ?2
HCF = 50
The simplified ratio between girls and boys 
= ?3 : ?4
The ratio between boys and total students
= ?5 : ?6
It can be simplified as
?7 : ?8
1150, 1150, 850, 23, 17, 850, 2000, 17, 40`,

          `A milk pudding requires 3 1/2 cups of milk and 2 1/4 cups of sugar. What is the ratio of number of cups of milk to the number of cups of sugar in this recipe?
The ratio between milk and sugar
= 3 1/2 : 2 1/4
It can be simplified by converting into improper fraction
?0/2 : ?1/4
Lets write the ratio as like fractions.
?2/4 : ?3/4
We can discard the denominator of like fractions in the ratio.
We get ?4 : ?5
7, 9, 14, 9, 14, 9`,

          `Find two equivalent ratios of 14: 42
If we observe the number, both are divisible by 2.
14: 42 = ?0 : ?1
Also both numbers are divisible by 7.
14: 42 = ?2 : ?3
7, 21, 2, 6`,

          `Compare the ratios: 4: 7 and 5: 8
To compare ratios, we have to write them in the fraction format.
4:7 = 4/7
5:8 = 5/8
To find the biggest of two fractions, we need to convert them into like fraction.
The LCM of 7 and 8 = ?0
4/7 = ?1/56
5/8 = ?2/56

32/56 < 35/56
So, 4:7 < 5:8
56, 32, 35`
        ]
      }
    },
    {
      type: 'numberInput',
      id: 'wordproblem-2',
      label: 'Ratios of Different Units',
      commonData: {
        title: 'Express the following ratio in simplest form.',
        type: 'word-problem'
      },
      data: [
        {
          // Below problems from M7
          list: [
            `2 1/2 L : 600 mL
            We need to write both in same units. Lets write in the smaller unit.
            2 1/2 L = ?0 mL
            So the ratio is ?1 : ?2
            It can be simplified to ?3 : ?4
            2500, 2500, 600, 25, 6`,

            `550 mL : 3 L 300 mL
            3 L 300 mL = ?0 mL
            So the ratio is ?1 : ?2
            It can be simplified to ?3 : ?4
            3300, 550, 3300, 1, 6`,

            `5 kg 500 g : 990 g
            5 kg 500 g = ?0 g
            So the ratio is ?1 : ?2
            It can be simplified to ?3 : ?4
            5500, 5500, 990, 50, 9`,

            `3 hours 20 minutes : 2 hours
              Lets write both sides in minues.
              3 hours 20 minutes = ?0 minutes
              2 hours = ?1 minutes
              So the ratio is ?2 : ?3
              It can be simplified to ?4 : ?5
              200, 120, 200, 120,  5, 3
            `
          ]
        },
        {
          //Below problems from J7
          list: [
            `25 cm to 1 m.
We need to write to numbers in the same units. It is good to write them in the smaller unit. 
1 m = ?0 cm
So the ratio is ?1 : ?2
It can be simplified to ?3 : ?4
100, 25, 100, 1, 4`,

            `85 paise to ₹ 5
₹ 5 = ?0 paise
So the ratio is ?1 : ?2
HCF = ?3,
It can be simplified to ?4 : ?5
500, 85, 500, 5, 17, 100`,

            `3 kg to 500 g
3 kg = ?0 g
So the ratio is ?1 : ?2
It can be simplified to ?3 : ?4
3000, 3000, 500, 6, 1`,

            `15 ^m/s to 108 ^km/h
Converting ^km/h to ^m/s is little challenging.
1 km = ?0 m
1 hour = ?1 seconds
1 ^km/h = 1000/3600 ^m/s
= 1/3.6 ^m/s
So the ratio is ?2 : ?3/?4
= 15 : ?5     
= ?6 : ?7
1000, 3600, 15, 108, 3.6, 30, 1, 2
`,
            `35 days to 6 weeks
6 weeks = ?0 days
So the ratio is ?1 : ?2
It can be simplified as ?3 : ?4
42, 35, 42, 5, 6`,

            `300 mL to 1 L 350 mL
1 L 350 mL = ?0 mL
The ratio is ?1 : ?2
The HCF = ?3
So the ratio can be simplified as ?4 : ?5
1350, 300, 1350, 150, 2, 9`,

            `1 1/2 hours to 1/2 hours
By writing the mixed fraction as improper fraction, and removing the denominator, we get the ratio
= ?0 : ?1
3, 1`,

            `8 months to 3 years
3 years = ?0 months
The ratio is ?1 : ?2
The HCF of the two numbers = ?3
So the ratio can be simplified as
?4 : ?5
36, 8, 36, 4, 2, 9`,

            `2 km to 1 km 50 m
2 km = ?0 m
1 km 50 m = ?1 m
So the ratio is ?2 : ?3
HCF = ?4
So the ratio can be simplified as ?5 : ?6
2000, 1050, 2000, 1050, 50, 40, 21`
          ]
        }
      ]
    },
    {
      type: 'numberInput',
      id: 'wordproblem-3',
      label: 'Ratio Between 3 terms',
      data: {
        title: 'Word Problems',
        type: 'word-problem',
        // Below problems from M7
        list: [
          `Find the ratio A : B : C in the following case.
          A : B = 1 : 2 and B : C = 4 : 3
          We need to find a common number for the term B.
          In the first ratio, B = ?0
          In the second ratio, B = ?1
          The LCM of ??0 and ??1 = ?2
          1 : 2 can be written as ?3 : ?4
          A : B : C = ?5 : ?6 : ?7
          2, 4, 4, 2, 4, 2, 4, 3`,

          `Find the ratio A : B : C in the following case.
          A : B = 6 : 7 and B : C = 6 : 5
          We need to find a common number for the term B.
          In the first ratio, B = ?0
          In the second ratio, B = ?1
          The LCM of ??0 and ??1 = ?2
          6 : 7 can be written as ?3 : ?4
          A : B : C = ?5 : ?6 : ?7
          7, 6, 42, 36, 42, 36, 42, 35`,

          `If A : B = 5 : 7 and B : C = 6 : 10, then find the ratio between A, B and C.
Here we need to find a common number for the term B.
In the first ratio, B = 7
In the second ratio, B = 6
LCM of 7 and 6 = ?0
5 : 7 can be written as ?1 : ?2
6 : 10 can be written as ?3 : ?4
∴ A : B : C = ?5 : ?6 : ?7
42, 30, 42, 42, 70, 30, 42, 70`
        ]
      }
    },
    {
      type: 'numberInput',
      id: 'wordproblem-4',
      label: 'Word Problems - 2',
      data: {
        title: 'Word Problems',
        type: 'word-problem',
        fracFontSize: '1rem',
        list: [
          // Below problems from M7
          `Divide ₹ 5200 between Sudha, Latha and Anitha in the ratio 2 : 7 : 4.
          We need to find the equivalent ratio where the numbers add up to ₹ 5200
          Let us write the ratio in the form 2𝑥 : 7𝑥 : 4𝑥
          2𝑥 + 7𝑥 + 4𝑥 = ?0 𝑥
          𝑥 = 5200/??0 = ?1
          Sudha's share = 2 × ??1 = ?2
          Latha's share = 7 × ??1 = ?3
          Anitha's share = 4 × ??1 = ?4
          13, 400, 800, 2800, 1600 `,

          `A bag of 4100 candies is packed in 3 different types of boxes. The ratio of the number of candies in box 1 to the number of candies in box 2 is 2 : 5 and the ratio of the number of candies in box 2 to the number of candies in box 3 is 3 : 4. Find the number of candies in each boxes.
          First lets find the ratio between three boxes.
          First ratio = 2 : 5
          Second ratio = 3 : 4
          Combined ratio = ?0 : ?1 : ?2
          Total parts = ?3
          Value of one part = 4100/??3 = ?4
          First box = ??0 × ??4 = ?5 candies
          Second box = ??1 × ??4 = ?6 candies
          Third box = ??2 × ??4 = ?7 candies
          6, 15, 20, 41, 100, 600, 1500, 2000`,

          `Find the angles of a triangle in the following case. The angles are in the ratio 5 : 3 : 10
          The sum of three angles in a triangle = ?0
          We have to form an equivalent ratio so that the sum of the term equals ??0
          Lets write the ratio in the form 5𝑥 : 3𝑥 : 10𝑥
          5𝑥 + 3𝑥 + 10𝑥 = ?1 𝑥
          𝑥 = ?2
          ∴ The angles are ?3 , ?4 , ?5
          180, 18, 10, 50, 30, 100`,

          `Find the angles of a triangle in the following case. The ratio of the base angle to the other angle in an isosceles triangle is 1 : 4
          In an isosceles triangle two sides are equal, so their opposite angles are equal.
          So the ratio between the angles can written as 1 : 4 : ?0
          We have to form an equivalent ratio so that the sum of the numbers equal ?1
          Lets write the ratio in the form 𝑥 : 4𝑥 : 4𝑥
          𝑥 + 4𝑥 + 4𝑥 = ?2 𝑥
          𝑥 = ??1/??2 = ?3
          ∴ The angles are ?4 , ?5 , ?6
          4, 180, 9, 20, 20, 80, 80`,

          `A family spends ₹ 7500 per month to buy vegetables, fruits and groceries. The ratio of the amounts the family spends for buying them is 2 : 3 : 7 respectively. Find the money spent on each category.
          We have to form the equivalent ratio so that the terms add up to ₹ 7500.
          Lets rewrite the ratio as 2𝑥 : 3𝑥 : 7𝑥
          2𝑥 + 3𝑥 + 7𝑥 = ?0 𝑥
          𝑥 = 7500/??0 = ?1
          For vegetables = 2 × ??1 = ₹ ?2
          For fruits = 3 × ??1 = ₹ ?3
          For groceries = 7 × ??1 = ₹ ?4
          12 , 625, 1250, 1875, 4375`,

          `A rope of length 10^m 20^cm is to be divided into 3 pieces whose lengths are in the ratio 4 : 6 : 7. Find the length of each piece.
          Length of the rope = ?0 ^cm
          We have to rewrite the ratio so that the terms add up to ??0.
          Lets rewrite the ratio as 4𝑥 : 6𝑥 : 7𝑥
          4𝑥 + 6𝑥 + 7𝑥 = ?1 𝑥
          𝑥 = ??0/??1 = ?2
          Length of first piece = 4 × ??2 = ?3 ^cm
          Length of second piece = 6 × ??2 = ?4 ^cm
          Length of third piece = 7 × ??2 = ?5 ^cm
          1020, 17, 60, 240, 360, 420`,

          `Find out who will get the highest amount if ₹ 31,175 is divided amoung A, B and C in such a way that, A : B = 5 : 6 and B : C = 4 : 7. Also, find the amount each one will get.
          First we need to find the ratio A : B : C.
          LCM of B in the 2 ratios = ?0
          So the combined ratio = ?1 : ??0 : ?2
          The total terms in the ratio = ?3
          𝑥 = 31175/??3 = ?4
          A gets = ??1 × ??4 = ₹ ?5
          B gets = ??0 × ??4 = ₹ ?6
          C gets = ??2 × ??4 = ₹ ?7
          ∴ C gets the highest amount.
          12, 10, 21, 43, 725, 7250, 8700, 15225`
        ]
      }
    },

    {
      type: 'numberInput',
      id: 'unitary',
      label: 'Unitary Method',
      data: {
        title: 'Word Problems',
        type: 'word-problem',
        fracFontSize: '1rem',
        list: [
          {
            text: `The cost of 4 cupcakes is ₹168. Find the cost of a dozen cupcakes.
  Solution:
  Cost of 1 cupcake = ?0/?1 = ₹ ?2
  Cost of dozen cupcakes = ??2 × ?3
   = ₹ ?4
  168, 4, 42, 12, 504
  `
          },
          {
            text: `The cost of 15 boxes of apples is ₹ 1440. Find the cost of 25 such boxes of apples.
Solution:
Cost of 1 box = ?0/?1 = ₹ ?2
Cost of 25 boxes = ??2 × 25
=  ₹ ?3
  1440, 15, 96, 2400`
          },
          {
            text: `Anita can stitch falls for 3 sarees in 1 ^hr. If she works from 9:00 am to 1:00 pm without any break, how many saree falls can she stitch?
            Solution:
            Total time in hours = ?0 
            No. of saree falls stitch in 1 hr 
             = ?1
            No. of saree falls stitch in ??0 hrs
             = ??0 × ??1 = ?2
            4, 3, 12
            `
          },
          {
            text: `Using 15 mL of a fruit syrup, Sudha can make 6 glasses of juice. How many glasses of juice can be prepared by her using 1/2 L of fruit syrup?
            Solution:
            Syrup needed for 1 glass of juice
             = ?0/?1 = ?2 mL
            1/2 L = ?3 mL
            No. of glasses of juice prepared from ??3 mL
             = ??3/??2 = ?4 glasses
             15, 6, 2.5, 500, 200
            `
          }
          //TODO: More problems to be added for exercise 8.3
        ]
      }
    }
  ]
};
