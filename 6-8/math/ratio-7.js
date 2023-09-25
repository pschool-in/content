export default {
  label: 'Ratio - 7',
  id: 'ratio-7',
  list: [
    {
      type: 'numberInput',
      id: 'simplify',
      label: 'Ratio - Simplest Form',
      data: {
        title: 'Express the given ratio in the simplest form.',
        type: 'word-problem',
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
      id: 'wordproblem',
      label: 'Ratios of Different Units',
      data: {
        title: 'Express the following ratio in simplest form.',
        type: 'word-problem',
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
    }
  ]
};
