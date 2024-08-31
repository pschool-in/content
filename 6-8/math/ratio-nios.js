export default {
  label: 'Ratio & Proportion',
  id: 'ratio-nios',
  list: [
    {
      type: 'numberInput',
      id: 'ratio',
      label: 'Intext Questions 7.1',
      commonData: {
        inputType: 'small',
        isSentence: true,
        fracFontSize: '1rem',
        label: 'Answer the following'
      },
      data: [
        {
          title: 'Find the ratio between following',

          list: [
            `8 and 168
It can be written as 8:168 or 8/168
HCF of 8 and 168 = ?0
By dividing both sides by HCF, we get the required ratio.
Ans = ?1 : ?2
8, 1, 21`,
            `2.5 and 7.5
It can be written as 2.5:7.5 or 2.5/7.5
HCF of 25 and 75 = ?0
HCF of 2.5 and 7.5 = ?1
By dividing both sides by HCF, we get the required ratio.
Ans = ?2 : ?3
25, 2.5, 1, 3`,

            `₹ 11.50 and ₹ 115
It can be written as 11.50:115 or 11.50/115
Here the denominator is ?0 times the numerator
Ans = ?1 : ?2
10, 1, 10 `,

            `25 paise and ₹ 75.00
If we write both numbers in paise we get
?0 : ?1
The second number is ?2 times the first number.
Ans = ?3 : ?4
25, 7500, 300, 1, 300`,

            `15 𝑚 and 250 𝑐𝑚
If we write both numbers in 𝑐𝑚 we get
?0 : ?1
The first number is ?2 times the second number.
Ans = ?3 : ?4
1500, 250, 6, 6, 1`
          ]
        },
        {
          list: [
            `The average speed of a train is 45 ^km/hr and that of the other is 75 ^km/hr. Find
the ratio between the two average speeds.
It can be written as 45:75 or 45/75
HCF of 45 and 75 = ?0
Ans = ?1 : ?2
15 , 3, 5`,

            `Out of 50 people working in a company, 22 are male and rest all female. Find
the ratio of the number of males and females.
No. of females = ?0
The ratio between male and female
= 22 : ?1
HCF of the two numbers = ?2
Ans = ?3 : ?4
28, 28, 2, 11, 14`,

            `The monthly income of a family is ₹15000. If the family saves ₹3000 per month, find the following ratios.
(i) Ratio of income and expenditure
15000 : ?0 = ?1 : ?2
(ii) Ratio of income and saving
15000 : ?3 = ?4 : ?5
(ii) Ratio of savings and expenditure
3000 : ?6 = ?7 : ?8
12000, 5, 4, 3000, 5, 1, 12000, 1, 4`,

            `260 students appeared in an examination. Out of this 130 were declared pass.
Find the following ratios
(i) Total students appeared to pass students
260 : 130 = ?0 : ?1
(ii) No of pass students to no. of failed
No. of failed students = ?2
Ans = ?3 : ?4
2, 1, 130, 1, 1`
          ]
        }
      ]
    },
    {
      id: 'classify',
      label: 'Proportions: True or False',
      type: 'classifySentence',
      commonData: {
        title: `In the following, which statements are true?`,
        fontSize: '2rem',
        fracFontSize: '1.5rem',
        textAlign: 'center'
      },
      data: [
        {
          types: [
            // have included example problems also to increase count
            {
              name: 'True',
              text: `4 : 5 = 28 : 35
3 : 4 = 45 : 60
39 : 117 = 1 : 3`
            },
            {
              name: 'False',
              text: `7 : 9 = 42 : 27
3 : 2 = 9 : 8
15 : 7 = 45 : 24`
            }
          ]
        },
        {
          types: [
            // end of chapter exericise (Prob no 4)
            {
              name: 'True',
              text: `9:7 = 63:49
15/2 : 7/4 = 15 ^kg : 3½ ^kg`
            },
            {
              name: 'False',
              text: `5.75 : 23 = 8 : 40
8:9 = 4:5
15 : 4½ = 5 : 2`
            }
          ]
        }
      ]
    },
    {
      type: 'numberInput',
      id: 'proportion',
      label: 'Intext Questions 7.2',
      commonData: {
        inputType: 'small',
        isSentence: true,
        fracFontSize: '1.2rem',
        fontSize: '1.3rem',
        label: 'Answer the following'
      },
      data: [
        {
          title: 'Find the value of 𝑥 in the following proportions',
          list: [
            `24 : 36 = 36 : 𝑥
If we write in the fraction format, we get
24/36 = 36/𝑥
Rearranging we get
𝑥 = ?0/?1 × ?2
= ?3/?4 × ??2
= ?5/?6
= ?7
36, 24, 36, 3, 2, 108, 2, 54`,

            `5 : 7 = 15 : 𝑥
If we write in the fraction format, we get
5/7 = 15/𝑥
Rearranging we get
𝑥 = ?0/?1 × ?2
= ?3 × ?4
= ?5
7, 5, 15, 7, 3, 21`,

            `34/3 : 12 = 17 : 𝑥
The fraction in the first ratio can be removed by multiply by 3.
First ratio becomes ?0 : ?1
In fraction format,
??0/??1 = 17/𝑥
Rearranging we get
𝑥 = ?2/?3 × ?4
= ?5
34, 36, 36, 34, 17, 18`
          ]
        },
        {
          title: 'Find the mean proportion for the following extrements',
          list: [
            `2 and 8
We can write this as 
2 : 𝑥 = 𝑥 : 8
~𝑥2 = 2 × ?0
= ?1
𝑥 = ?2
8, 16, 4`,

            `4 and 16
We can write this as 
4 : 𝑥 = 𝑥 : 16
~𝑥2 = 4 × ?0
= ?1
𝑥 = ?2
16, 64, 8`,

            `6 and 216
We can write this as 
6 : 𝑥 = 𝑥 : 216
~𝑥2 = 6 × ?0
= ?1
𝑥 = ?2
216, 1296, 36`,

            `5 and 125
We can write this as 
5 : 𝑥 = 𝑥 : 125
~𝑥2 = 5 × ?0
= ?1
𝑥 = ?2
125, 625, 25`
          ]
        }
      ]
    },
    {
      type: 'numberInput',
      id: 'find-x',
      label: 'Intext Questions 7.3',
      commonData: {
        inputType: 'small',
        isSentence: true,
        fracFontSize: '1rem',
        fontSize: '1rem',
        label: 'Answer the following'
      },
      data: [
        {
          list: [
            `A person purchases 3 ^kg honey in ₹360. How much honey will he purchase in
₹810?
Let 𝑥 be the amount of honey purchased for 810.
In proportion form we can write
3 : 360 = 𝑥 : 810
𝑥 = ?0/?1 × ?2
= 810/?3 = ?4/?5
= ?6 ^kg
3, 360, 810, 120, 27, 4, 6.75`,

            `The cost of 20 cold drink bottles is ₹800. How much will be the cost of 35 such bottles?
Let 𝑥 be the cost of 35 bottles.
In proportion form we can write
20 : 800 = 35 : 𝑥
𝑥 = ?0/?1 × ?2
= ?3 × ??2
= ₹ ?4
800, 20, 35, 40, 1400`,

            `If 50 people can construct a wall in 15 days, Then in how many days 75 people will construct the similar wall?
Assume 75 people need 𝑥 days.
In proportion form we can write
50 : 75 = 𝑥 : 15
In proportion form we can write
𝑥 = ?0/?1 × ?2
= ?3/?4
= ?5 ^days
50, 75, 15, 50, 5, 10`,

            `If 25 people can reap the field crop in 9 days then how much time will be taken by 15 people to reep the same field crop?
Assume 15 people need 𝑥 days.
In proportion form we can write
25 : 15 = 𝑥 : 9
𝑥 = ?0/?1 × ?2
= ?3 ^days
25, 15, 9, 15`
          ]
        },
        {
          list: [
            `A houseful grain is sufficient for 40 days for 500 people. The same will last for how many days for 800 people?
Assume the grain is sufficient for 𝑥 days for 800 people.
In proportion form we can write
500 : 800 = 𝑥 : 40
𝑥 = ?0/?1 × ?2
= ?3 × ?4
= ?5 ^days
500, 800, 40, 5, 5, 25`,

            `The shadow of a 10 𝑚 high hill is 8 𝑚 at a point of time in the day. At the same time the shadow of another hill top is 12 𝑚. What is the height of the second hill top?
Let 𝑥 be the height of second hill top.
In proportion form we can write
10 : 8 = 𝑥 : 12
𝑥 = ?0/?1 × ?2
= ?3 × ?4
= ?5 𝑚
10, 8, 12, 5, 3, 15`,

            `The cost of 24 coconut is ₹ 480. Find the cost of 120 such coconuts.
Let 𝑥 be the cost of 120 coconuts.
In proportion form we can write
480 : 24 = 𝑥 : 120
𝑥 = ?0/?1 × ?2
= ?3 × ??2
= ₹ ?4
480, 24, 120, 20, 2400`,

            `10 people can construct a road in 6 days. How much time will be taken to construct the same road by 15 people?
Let 𝑥 be the number of days by 15 people.
In proportion form we can write
10 : 15 = 𝑥 : 6
𝑥 = ?0/?1 × ?2
= ?3 × ?4
= ?5 ^days
10, 15, 6, 2, 2, 4`
          ]
        }
      ]
    },
    {
      type: 'numberInput',
      id: 'word-probs',
      label: 'Intext Questions 7.4',
      data: {
        inputType: 'small',
        isSentence: true,
        fracFontSize: '1rem',
        fontSize: '1rem',
        label: 'Answer the following',
        list: [
          `If the cost of 4 ^kg sugar is ₹120. Find the cost of 1 quintal sugar.
1 quintal = ?0 ^kg
Cost of 1 kg sugar = ₹ ?1
Cost of 1 quintal = ₹ ?2
100, 30, 3000`,

          `If the cost of 25 copies of a book is ₹525, then find the cost of 10 copies of the same book
Cost of 1 book = ₹ ?0
Cost of 10 books = ₹ ?1
21, 210`,

          `If the cost of one dozen medicine bottles is ₹612, then how much will be the cost of 4 such medicine bottles?
Cost of 1 bottle = ₹ ?0
Cost of 4 bottles = ₹ ?1
51, 204`,

          `If the cost of are dozen oil bottles is ₹720 and 6 pickle boxes cost ₹240, find the cost of 4 oil bottles and 3 pickles boxes.
Cost of 1 oil bottle = ₹ ?0
Cost of 1 pickle box = ₹ ?1
Cost of 4 oil bottles = ₹ ?2
Cost of 3 pickle boxes = ₹ ?3
Total cost (Ans) = ₹ ?4
60, 40, 240, 120, 360`,

          `15 people can construct wall in 10 days, how much time will take for 10 people to construct the same wall?
Let 𝑥 be the number of days taken by 10 people.
In proportion form we can write
15 : 10 = 𝑥 : 10
𝑥 = ?0/?1 × ?2
= ?3 ^days
15, 10, 10, 15`,

          `Five people together can sow a field in 8 days, how many people will be required to sow the same field in 2 days?
Let 𝑥 be the number of people to complete the work in 2 days
In proportion form we can write
8 : 2 =  𝑥 : 5
𝑥 = ?0/?1 × ?2
= ?3 ^persons
8, 2, 5, 20`
        ]
      }
    },
    {
      type: 'numberInput',
      id: 'work',
      label: 'Intext Questions 7.5',
      data: {
        isSentence: true,
        fracFontSize: '1rem',
        fontSize: '1rem',
        label: 'Answer the following',
        list: [
          `A & B can finish a work in 10 days & 15 days respectively. How many days will they take together in finishing the work?
Part of work completed in one day
by A = 1/10
by B = 1/15
Part of work completed in one day if both worked together
= 1/10 + 1/15
= {?0 + ?1}/{?2}
= ?3/?4
No. of days if both worked together
= ?5 ^days
3, 2, 30, 1, 6, 6`,

          `Rama, Sheela & Zube complete a work respectively in 8, 12, 24 days.
How many days will They require to finish the work together?
Part of work completed in one day
by Rama = 1/8
by Sheela = 1/12
by Zube = 1/24
Part of work completed in one day if they work together
= 1/8 + 1/12 + 1/24
= {?0 + ?1 + ?2}/{?3}
= ?4/?5
No. of days if they worked together
= ?6 ^days
3, 2, 1, 24, 1, 4, 4`,

          `A, B & C together finish a work in 20 days. If A & B individually complete the
work in 40 & 60 days respectively. How many days will 'C' require to complete
the work?
Part of work completed by C in one day
= 1/20 - 1/40 - 1/60
= {?0 - ?1 - ?2}/{?3}
= ?4/?5
No. of days required for C to complete
= ?6 ^days
6, 3, 2, 120, 1, 120, 120`,
          `Karam Singh & Ramila together can complete a work in 24 days. If Karam Singh alone can do the work in 36 days, then how many days Ramila will take to finish the work?
Part of work completed by Ramila in one day
= 1/24 - 1/36
= {?0 - ?1}/{?2}
= ?3/?4
No. of days required by Ramila to complete
= ?5 ^days
3, 2, 72, 1, 72, 72`,

          `A & B together finish a work in 8 days. Both worked together for 6 days. The remaining work was completed by B in 6 days. Find their individual capacity to finish the work.
Part of work completed in 6 days 
= 6/8 = 3/4
The remaining work after 6 days
= ?0/?1
This work was completed in 6 days.
No. of days required by B alone
= ?2
Part of work completed by A in one day 
= {?3 - ?4}/{?5}
= ?6/?7
No. of days required by A alone
= ?8 ^days
1, 4, 24, 3, 1, 24, 1, 12, 12`,

          `Raman and Vikas can finish a work in 16 & 24 days respectively. Both worked
together for 6 days then Raman left. In how many days will Vikash finish the
work?
Part of work completed by both in 1 day
= 1/16 + 1/24 = ?0/?1
Part of work completed in 6 days
= ?2/?3
Part of the pending work
= ?4/?5
No. of days taken by Vikas to complete the pending work
= ??4/??5 × 24 = ?6 ^days
5, 48, 5, 8, 3, 8, 9`
        ]
      }
    },
    {
      type: 'numberInput',
      id: 'time',
      label: 'Intext Questions 7.6',
      commonData: {
        isSentence: true,
        fracFontSize: '1rem',
        fontSize: '1rem',
        label: 'Answer the following'
      },
      data: [
        {
          list: [
            `A train is running at a constant speed of 72 ^km/hr. How much distance it will cover in 15 second?
To find the distance covered in 1 ^sec, we need to convert the speed into ^m/s
speed = 72 × 1000/3600
= ?0 ^m/s
Distance covered in 15 seconds
= ??0 × 15
= ?1 ^m
20, 300`,

            `A train covers 60 ^km distance in one hour and a car covers 300 ^m in 15
seconds. Which vehicle is running faster?
If we find the speed of car in ^km/hr, we can easily find which one is faster.
300 ^m = ?0 ^km
15 ^sec = 15/?1 ^hr
speed of car 
= ??0 × ??1/15
= ??0 × ?2
= ?3 ^km/hr
Car is ?4 ^km/hr faster than the train.
0.3, 3600, 240, 72, 12`,

            `A train, whose length is 300 ^m, is running at a speed of 120 ^km/hr. How much time will it take to cross a pole?
Lets convert the speed into ^m/s
speed = 120 × 1000/3600 = ?0/?1 ^m/s
We need to find the time taken by train to cover 300 ^m.
Time taken = 300 × ??1/??0
= ?2 ^sec
100, 3, 9`,
            `A train, where length is 200 ^m, crosses a pole in 12 seconds. Find the speed of the train.
Train covers 200 ^m in 12 seconds
Speed in ^km/hr
= 200/12 × ?0/?1
= ?2 ^km/hr
3600, 1000, 60`
          ]
        },
        {
          list: [
            `A train, whose length in 200 meter, is running at a speed of 72 ^km/hr. How much
time will it take to cross a 280 ^m platform?
Distance to cross is the sum of platform length and train length
distance = ?0 ^m
Lets write the speed in ^m/s
speed = 72 × ?1/?2 = ?3 ^m/s
Time = distance/speed = ?4/?5
= ?6 ^sec
480, 1000, 3600, 20, 480, 20, 24`,

            `A train of length 360 ^m crosses a 40 ^m long bridge in 20 seconds. Find the speed of the train.
Distance to cross is the sum of bridge and train length
distance = ?0 ^m
speed = distance/time = ?1/?2
= ?3 ^m/s
Lets convert speed into ^km/hr
= ??3 × ?4/?5
= ?6 ^km/hr
400, 400, 20, 20, 3600, 1000, 72`
            //Todo: One problem missing
          ]
        }
      ]
    },
    {
      type: 'numberInput',
      id: 'final',
      label: 'Final Exercise Problems',
      commonData: {
        isSentence: true,
        fracFontSize: '1rem',
        title: 'Answer the following'
      },
      data: [
        {
          title: 'Find the ratio in the following',
          fontSize: '1.1rem',
          list: [
            `16 and 72
HCF of 16 and 72 = ?0
If we divide both numbers by HCF, we get the required ratio.
Ans = ?1 : ?2
8, 2, 9`,

            `2.5 and 7.5
HCF of 2.5 and 7.5 = ?0
Ans = ?1 : ?2
2.5, 1, 3`,

            `1/2 and 3/4
Let us remove the denominator by finding the equivalent fraction with common denominator.
Ans = ?0 : ?1
2, 3`,

            `₹ 8 1/2 and ₹ 34
8 1/2 can be written in mixed fraction as ?0/?1
Multiplying both numbers with 2, we can remove the fraction.
We get ?2 : ?3
HCF of the two numbers = ?4
Ans = ?5 : ?6
17, 2, 17, 68, 17, 1, 4`, //1:4

            `15 ^cm and 1.5 ^m
Lets keep both numbers as ^cm
It can be written as ?0 : ?1
Ans = ?2 : ?3
15, 150, 1, 10`
          ]
        },
        {
          title: 'Find the ratio in the following',
          fontSize: '1.1rem',
          list: [
            `10 𝑙 and 78 𝑙
HCF of two numbers = ?0
Ans = ?1 : ?2
2, 5, 39`,

            `9.5 and 7.6
We can multiply both numbers with 10 to remove the decimal point.
HCF of 95 and 76 is ?0
Ans = ?1 : ?2
19,5, 4`,

            //20:3 is given as answer. So the input is adjusted accordingly

            `6.4 and 0.96
Let us multiply both sides by ?0 to remove the decimal points.
We get ?1 : ?2
HCF of the two numbers is ?3
Ans = ?4 : ?5
100, 640, 96, 32, 20, 3`,

            `134 meter and 201 meter
HCF of 134 and 201 = ?0
Ans = ?1 : ?2
67, 2, 3`,

            `27 paisa and ₹ 1.08
If we write both number in paisa,
we get ?0 : ?1
HCF of the 2 numbers = ?2
Ans = ?3 : ?4
27, 108, 27, 1, 4`
          ]
        },
        {
          list: [
            `In a class of 60 students, 35 are boys and rest are girls. Find the following ratio:
(i) No of boys to the total students
Ans = ?0 : ?1
(ii) No of girls to the total students
Ans = ?2 : ?3
(iii) No of girls to no of boys
Ans = ?4 : ?5
7, 12, 5, 12, 5, 7`,

            `One person covers 10 ^km distance in 2½ hours and the second person covers 15 ^km distance in 4 hours. Find the ratio of their average speed.
Speed of the first person
= 10 × 2/5 = ?0 ^km/hr
Speed of the second person
= ?1/?2 = ?3 ^km/hr
Ratio = ??0 : ??3
Multiply both sides by 4 to remove the decimal point
Ans = ?4 : ?5
4, 15, 4, 3.75, 16, 15`,

            `The cost of 3 dozens copies is ₹ 180. Find the cost of 10 dozen similar copies of the same size.
Cost of 1 dozen = ?0/?1 = ₹ ?2
Cost of 10 dozens = ₹ ?3
180, 3, 60, 600`,

            `The cost of 30 kg sick sack is ₹ 960. Find the cost of one quintal rice (100 kg)
Cost of 1 ^kg rice 
= ?0/?1 = ₹ ?2
Cost of 1 quintal 
= ?3 × 100 = ₹ ?4
960, 30, 32, 32, 3200`,

            `2½ litre petrol is used in a scooter for 80 ^km distance. How much petrol will be used in 128 ^km distance.
In the proportion form we can write
80 : 2½ = 128 : 𝑥
𝑥 = 5/2 × ?0/?1
= ?2 ^litre
128, 80, 4`
          ]
        },
        {
          title: 'Find the vaue of 𝑥 from the following.',
          list: [
            `15:13 = 1.95:𝑥
𝑥 = 13/15 × 1.95
= 13 × ?0
= ?1
0.13, 1.69`,

            `2:3 = 2½:𝑥
𝑥 = 3/2 × 5/2
= ?0/?1
15, 4`,

            `0.15 : 7.5 = 8 ^cm: 𝑥 ^cm
𝑥 = 7.5/0.15 × ?0
= ?1 × ??0
= ?2
8, 50, 400`,

            `8:25 = 4:𝑥
𝑥 = 25/8 × 4
= ?0/?1
25, 2`,

            `15:10 = 3:𝑥
𝑥 = 10/15 × 3
= ?0
2`
          ]
        },
        {
          title: 'Form the proportion from the following',
          list: [
            `13, 18, 90, 65
Ans = 13 : ?0 :: ?1 : ?2
65, 18, 90`,

            `5, 12, 15, 4
Ans = 5 : ?0 :: ?1 : ?2
15, 4, 12`,

            `12, 9, 13½, 18
Ans = ?0 :  13½ :: ?1 : ?2
9, 12, 18`
          ]
        },
        {
          list: [
            `If 75 persons can finish a work in 3 days, then how much time will 15 persons take to finish the work?
Let 𝑥 be the no. of days to finish by 15 persons.
In proportion form we can write 
75 : 15 = 𝑥 : 3
𝑥 = ?0/?1 x ?2
= ?3 
75, 15, 3, 15`,

            `If the cost of 3 books is ₹ 180 and cost of 4 copies is ₹ 84 then find the cost of similar one dozen books and 6 copies.
Cost of 1 book = ₹ ?0
Cost of a dozen books = ₹ ?1
Cost of 1 copy = ₹ ?2
Cost of 6 copies = ₹ ?3
Cost of 1 dozen books and 6 copies
= ₹ ?4
60, 720, 21, 126, 846`,

            `The cost of a 15 ^kg apple box is ₹ 930. Find the cost of 5 ^kg apples, if the cost of
wooden box is ₹ 30.
Cost of 15 ^kg apple (without box)
= ₹ ?0
Cost of 1 ^kg apple
= ₹ ?1
Cost of 5 ^kg apple
= ₹ ?2
900, 60, 300`,

            `A, B & C finish a work in 6, 8 & 12 days respectively they together take a
contract to finish the work for ₹ 10800, how much amount will each get?
Amount has to be splitted in the ratio
1/6 : 1/8 : 1/12
By taking common denominator and equivalent fraction, we can remove the fraction
?0 : ?1 : ?2
Total no. of parts = ?3
1 part = ?4/?5 = ?6
A gets = ??0 x ??6 = ₹ ?7
B gets = ??1 x ??6 = ₹ ?8
C gets = ??2 x ??6 = ₹ ?9
4, 3, 2, 9, 10800, 9, 1200, 4800, 3600, 2400`,

            `Kewal Ram and Malik settled a contract for ₹ 2700 to finish a work. If they have the capacity to do the work in the ratio 8 : 7 Find their share in the contract.
Total parts = ?0
1 part = ?1/?2 = ?3
Kewal Ram gets 
= ??3 x 8 = ₹ ?4
Malik gets
= ??3 x 7 = ₹ ?5
15, 2700, 15, 180, 1440, 1260`
          ]
        },
        {
          list: [
            `A & B complete a work in 18 & 12 days respectively. Both started the work together. B  left 8 days before the work finished and the remaing work was finished by A. How much time was taken to finish the work?
Part of work completed by A alone in 8 days
= 8/18 = ?0/?1
Part of work done by both in 1 day
= 1/18 + 1/12 = {?2 + ?3}/{?4} = ?5/?6
No. of days they worked together
= 5/9 x ??6/??5
= ?7 days
Total days to finish = ?8 days
4, 9, 2, 3, 36, 5, 36, 4, 12`,

            `Kala and Vimla starts walking from their houses, which are 2 ^km apart, towards each other. Kala's speed is 4 ^km/hr and Vimla's speed is 6 ^km/hr. After how much time, from the start, they will meet each other?
As they walk towards each other, the relative speed is
= ?0 ^km/hr
Time taken for 2 ^km
= distance/speed = ?1/?2
= ?3 ^hr
= ?4 ^mins
10, 2, 10, 0.2, 12`,

            `A goods train and a car started running towards each other from the two cities 160 ^km apart. Speed of Goods train is 48 ^km/hr and the speed of car is 72 ^km/hr.
After how much time & where they will meet each other?
The relative speed = ?0 ^km/hr
time = distance/speed = ?1/?2 = ?3/?4
= ?5 ^mins
Goods train travelled 
= 48 x ??3/??4 = ?6 ^km
Car travelled
= 72 x ??3/??4 = ?7 ^km
120, 160, 120, 4, 3, 80, 64, 96`
          ]
        }
      ]
    }
  ]
};
