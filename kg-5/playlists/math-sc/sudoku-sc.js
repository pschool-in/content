export default {
  label: 'Easy Sudoku',
  id: 'sudoku-sc',
  img: 'sudoku',
  list: [
    {
      type: 'sudoku',
      id: 'linear-4',
      label: 'Sudoku (4 x 4) - Linear ',
      lockAfter: 8,
      commonData: {
        type: '4x4-numbers',
        title:
          'Fill the highlighted cell by selecting the right number given below.',
        isLinear: true
      },
      data: [
        {
          text: `4000
0002
2014
0400`,
          sequence: `21|3
30|1
10|3
11|1
01|2
12|4
02|3
03|1
32|2
33|3`
        },
        {
          text: `0210
0032
0100
2001`,
          sequence: `03|4
00|3
23|3
32|4
22|2
20|4
31|3
10|1
11|4`
        },
        {
          text: `4021
0003
0000
0230`,
          sequence: `01|3
12|4
22|1
11|1
10|2
21|4
30|1
20|3
23|2
33|4`
        },
        {
          sequence: `01|1
10|2
20|1
31|2
32|3 
23|4
13|3
02|4`,
          text: `3002
0410
0320
4001`
        },
        {
          sequence: `23|3
20|1
02|3
03|2
13|4
01|1
11|3
10|2
30|3
31|4`,

          text: `4000
0010
0240
0021`
        },
        {
          text: `3000
0002
0103
0021`,
          sequence: `22|4
20|2
03|4
02|1
01|2
12|3
11|4
10|1
30|4
31|3`
        },
        {
          text: `0030
2300
1000
3004`,
          sequence: `00|4
01|1
31|2
21|4
32|1
03|2
13|1
12|4
22|2
23|3`
        },
        {
          text: `0300
1020
0040
4001`,
          sequence: `00|2
20|3
11|4
13|3
03|4
02|1
32|3
23|2
21|1
31|2`
        },
        {
          text: `2403
0000
0340
0001`,
          sequence: `02|1
11|1
10|3
20|1
30|4
31|2
32|3
23|2
13|4
12|2`
        },
        {
          text: `4000
0040
0120
2003`,
          sequence: `20|3
10|1
23|4
32|1
31|4
02|3
13|2
03|1
01|2
11|3`
        }
      ]
    },
    {
      type: 'sudoku',
      id: '4',
      label: 'Sudoku (4 x 4)',
      lockAfter: 8,
      commonData: { type: '4x4-numbers', title: 'Sudoku (4 x 4)' },
      data: [
        `3002
0410
0320
4001`,

        `4000
0010
0240
0021`,

        `4000
0002
2014
0400`,

        `0210
0032
0100
2001`,

        `4021
0003
0000
0230`,

        `2403
0000
0340
0001`,

        `4000
0040
0120
2003`,

        `3000
0002
0103
0021`,

        `0030
2300
1000
3004`,

        `0300
1020
0040
4001`
      ]
    },
    {
      type: 'sudoku',
      id: '4-images',
      label: 'Sudoku (4 x 4) with Images ',
      lockAfter: 8,
      commonData: { type: '4x4-images', title: 'Sudoku (4 x 4) with Images ' },
      data: [
        `3002
0410
0320
4001`,

        `4000
0010
0240
0021`,

        `4000
0002
2014
0400`,

        `0210
0032
0100
2001`,

        `4021
0003
0000
0230`,

        `2403
0000
0340
0001`,

        `4000
0040
0120
2003`,

        `3000
0002
0103
0021`,

        `0030
2300
1000
3004`,

        `0300
1020
0040
4001`
      ]
    },
    {
      type: 'sudoku',
      id: 'linear-6',
      label: 'Sudoku (6 x 6) - Linear',
      lockAfter: 8,
      commonData: {
        type: '6x6-numbers',
        title:
          'Fill the highlighted cell by selecting the right number given below.',
        isLinear: true
      },
      data: [
        {
          text: `640000
000603
002450
005006
134200
200100`,
          sequence: `52|6
51|5
12|1
02|3
03|5
33|3
10|5
11|2
20|3
30|4
31|1
21|6
25|1
34|2
14|4
04|1
05|2
44|6
45|5
54|3
55|4`
        },
        {
          text: `406100
002006
000300
043010
100004
200030`,
          sequence: `42|5
22|1
52|4
51|6
41|3
53|5
55|1
01|5
11|1
21|2
10|3
04|2
05|3
13|4
14|5
44|6
43|2
33|6
24|4
25|5
35|2
20|6
30|5`
        },
        {
          text: `304002
000053
010060
042000
105300
006500`,
          sequence: `20|5
22|3
30|6
12|1
10|2
50|4
25|4
23|2
11|6
13|4
04|1
03|6
01|5
33|1
34|3
35|5
41|2
51|3
44|4
54|2
55|1
45|6`
        },
        {
          text: `502600
003200
300004
020500
041000
000061`,
          sequence: `01|1
11|6
10|4
21|5
51|3
05|3
04|4
15|5
14|1
35|6
45|2
50|2
40|6
30|1
52|5
53|4
43|3
44|5
22|6
32|4
34|3
23|1
24|2`
        },
        {
          text: `030105
054023
300004
500062
210450
405030`,
          sequence: `00|6
10|1
51|6
42|3
45|6
55|1
53|2
13|6
04|4
02|2
21|2
31|4
33|3
23|5
24|1
22|6
32|1`
        },
        {
          text: `300001
000435
563010
040563
432000
600002`,
          sequence: `04|2
03|6
23|2
25|4
45|6
44|5
43|1
32|1
30|2
53|3
54|4
52|5
51|1
10|1
11|2
12|6
01|5
02|4`
        },
        {
          text: `203500
010243
400320
020004
162030
004102`,
          sequence: `01|4
43|4
45|5
54|6
04|1
34|5
05|6
25|1
33|6
30|3
32|1
50|5
51|3
10|6
12|5
22|6
21|5`
        },
        {
          text: `143000
060030
032015
650420
020060
000342`,
          sequence: `04|5
05|6
03|2
51|1
50|5
52|6
45|1
43|5
42|4
40|3
20|4
32|1
10|2
12|5
23|6
35|3
13|1
15|4`
        },
        {
          text: `005410
021350
050200
003040
046120
032500`,
          sequence: `40|5
50|1
45|3
33|6
22|4
24|3
54|6
55|4
20|6
25|1
35|5
15|6
05|2
10|4
00|3
01|6
30|2
31|1`
        },
        {
          text: `465002
100460
006010
020500
054001
200654`,
          sequence: `11|3
12|2
15|5
04|3
03|1
25|3
35|6
23|2
34|4
43|3
44|2
40|6
20|5
21|4
30|3
32|1
51|5
52|3`
        }
      ]
    },
    {
      type: 'sudoku',
      id: '6',
      label: 'Sudoku (6 x 6)',
      lockAfter: 8,
      commonData: { type: '6x6-numbers', title: 'Sudoku (6 x 6)' },
      data: [
        `640000
000603
002450
005006
134200
200100`,

        `406100
002006
000300
043010
100004
200030`,

        `304002
000053
010060
042000
105300
006500`,

        `502600
003200
300004
020500
041000
000061`,

        `030105
054023
300004
500002
210450
405030`,

        `300001
000435
563010
040563
432000
600002`,

        `203500
010243
400020
020004
162030
004102`,

        `143000
060030
032015
650420
020060
000342`,
        `005410
021350
050200
003040
046120
032500`,
        `465002
100460
006010
020500
054001
200654`
      ]
    },
    {
      type: 'sudoku',
      id: '6-images',
      label: 'Sudoku (6 x 6) with Images ',
      lockAfter: 8,
      commonData: { type: '6x6-images', title: 'Sudoku (6 x 6) with Images ' },
      data: [
        `640000
000603
002450
005006
134200
200100`,

        `406100
002006
000300
043010
100004
200030`,

        `304002
000053
010060
042000
105300
006500`,

        `502600
003200
300004
020500
041000
000061`,

        `030105
054023
300004
500002
210450
405030`,

        `300001
000435
563010
040563
432000
600002`,

        `203500
010243
400020
020004
162030
004102`,

        `143000
060030
032015
650420
020060
000342`,
        `005410
021350
050200
003040
046120
032500`,
        `465002
100460
006010
020500
054001
200654`
      ]
    }
  ]
};
