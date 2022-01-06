export default {
  label: 'Measurement',
  id: 'measurement',
  list: [
    {
      type: 'match',
      id: 'match',
      label: 'Match Equals',
      lockAfter: 2,
      commonData: {
        title: 'Match Equals',
        allowFrac: true
      },
      data: [
        `1000^m, 1^km
100^cm, 1^m
0.5^km, 500^m
250^cm, 2.5^m
100^mm, 10^cm`,

        `100^g, 0.1^kg
1000^g, 1^kg
10^g, 0.01^kg
400^g, 0.4^kg
4000^g, 4^kg`,

        `60^min, 1^hr
60^sec, 1^min
120^min, 2^hr
120^sec, 2^min
24^hr, 1^day`,

        `2^l, 2000^ml
0.2^l, 200^ml
20^l, 20000^ml
0.25^l, 250^ml
1.5^l, 1500^ml`
      ]
    },
    {
      type: 'numberInput',
      id: 'conversion',
      label: 'Convert Units',
      lockAfter: 2,
      commonData: {
        title: 'Convert units as requested',
        type: 'conversion',
        fontSize: '1.5rem',
        allowFrac: true
      },
      data: [
        `2^kg = ?^g, 2000
100^cm = ?^m, 1
0.5^km = ?^m, 500
250^cm = ?^m, 2.5
100^mm = ?^cm, 10
3.5^kg = ?^g, 3500
2900^g = ?^kg, 2.9
500^g = ?^kg, 0.5
70^cm = ?^m, 0.7
1000^m = ?^km, 1`,

        `3^l = ?^ml, 3000
6000^ml = ?^l, 6
14^l = ?^ml, 14000
36000^ml = ?^l, 36
7^l = ?^ml, 7000`,

        `7^m = ?^cm, 700
2.5^km = ?^m,  2500
2^l = ?^ml, 2000
0.4^l = ?^ml, 400
0.01^l = ?^ml, 10
300^ml = ?^l, 0.3
3.3^kg = ?^g, 3300 
0.9^kg = ?^g, 900
3^kg = ?^g, 3000
10^cm = ?^m,  0.1`,

        `2^hr = ?^min, 120
30^min = ?^hr, 0.5
1^day = ?^hr, 24
60^sec = ?^min, 1
5^min = ?^sec, 300
10^min = ?^sec, 600
1^hr = ?^sec, 3600
4^min = ?^sec, 240
0.5^day = ?^hr, 12
3^hr = ?^min, 180`,

        `334^cm = ?^m ?^cm, 3, 34
111^cm = ?^m ?^cm, 1, 11
150^sec = ?^min ?^sec, 2, 30
3.5^kg = ?^kg ?^g, 3, 500
2300^g = ?^kg ?^g, 2, 300
324^cm = ?^m ?^cm, 3, 24
90^sec = ?^min ?^sec, 1, 30
100^min = ?^hr ?^min, 1, 40
200^min = ?^hr ?^min, 3, 20
30^hr = ?^day ?^hr, 1, 6`,

        `2 1/2 ^kg = ?^g, 2500
1 1/2 ^hr = ?^min, 90
3 1/2 ^km = ?^m, 3500
5 1/4 ^kg = ?^g, 5250
1 1/4 ^km = ?^m, 1250
2 3/4 ^km = ?^m, 2750
1 2/5 ^kg = ?^g, 1400
2 1/2 ^min = ?^sec, 150
7 3/5 ^kg = ?^g, 7600
5 1/5 ^kg = ?^g, 5200`
      ]
    },
    {
      type: 'numberInput',
      id: 'word-prob',
      label: 'Answer the word problem.',
      lockAfter: 1,
      commonData: {
        title: 'Answer the word problem.',
        type: 'word-problem'
      },
      data: [
        `I can write one page in 15 mins. How much time it will take to write 10 pages? | ?0 hr ?1 min | 2, 30
I can walk 1 ^km in 20 ^mins. How much time it will take to walk 5 ^km? | ?0 hr ?1 min | 1, 40
One bottle of glucose contains 250 ^ml. How much will 10 bottles of glocose contain? | ?0 ^l ?1 ^ml | 2, 500
A man bought a rope of length 2 ^m and cut it into 10 equal parts. What is the length of each piece? | ?0 ^cm | 20
Geeta bought 2.5 ^m length of cloth. She used 1.75 ^m to stitch a table cloth. How much cloth is left? | ?0 m ?1 cm | 0, 75 `,

        `The length of a snake is 80 ^cm. It grows by 10 ^cm every month. What will be its length after 5 months? | ?0 m ?1 cm | 1, 30 
Siva can write one page in 20 mins. How much time it will take to write 9 pages? | ?0 hr ?1 min | 3, 0
The height of a brick is 10 ^cm. Twelve bricks are placed one on top of another. What is the total height? | ?0 m ?1 cm | 1, 20 
A packet of sugar weighs 250 ^g. I bought 5 packets. What is the total weight? | ?0 ^kg ?1 ^g | 1, 250
I bought 1.5 ^kg of rice and 0.75 ^kg of sugar. What is the total weight? | ?0 ^kg ?1 ^g | 2, 250`,

        `The length of a snake is 90 ^cm. It grows by 8 ^cm every month. What will be its length after 5 months? | ?0 m ?1 cm | 1, 30 
The height of a mother giraffe is 4.5 ^m and the height of its baby is 2 ^m. What is the difference between their heights? | ?0 m ?1 cm | 2, 50
The height of a box is 1.5 ^m. 5 boxes are placed one on top of another. What is the total height? | ?0 m ?1 cm | 7, 50 
A man bought a rope of length 1.5 ^m and cut it into 5 equal parts. What is the length of each piece? | ?0 ^cm | 30
A packet of rice weighs 500 ^g. I bought 7 packets. What is the total weight? | ?0 ^kg ?1 ^g | 3, 500`
      ]
    }
  ]
};
