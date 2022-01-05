export default {
  label: 'Fraction New',
  id: 'fraction-new',
  list: [
  {
  type: 'numberInput',
    id: 'equal-fraction-1',
    label: 'Equivalent fractions - 1',
    data: {
    type: 'equalFraction',
    title: 'Write the proper number in the box',
    text: `1/2 10, 3/4 5, 9/11 2, 10/40 5, 14/26 2, 4/6 2, 4/20 4, 10/25 5`
    } 
  },
   {
    type: 'numberInput',
      id: 'equal-fraction-2',
      label: 'Equivalent fractions - 2',
      data: {
      type: 'equalFraction3',
      title: 'Find an equivalent fraction with denominator 18, for each of the following fractions',
      text: `1/2, 2/3, 4/6, 2/9, 7/9, 5/3`
      } 
   },
   {
    type: 'numberInput',
      id: 'equal-fraction-3',
      label: 'Equivalent fractions - 3',
      data: {
      type: 'equalFraction3',
      title: 'Find an equivalent fraction with denominator 5, for each of the following fractions',
      text: `6/15, 10/25, 12/30, 6/10, 21/35`
      } 
   },
{
    type: 'match',
    id: 'match',
    label: 'Match the following',
    data: {
      title: 'From the fractions given below, pair off the equivalent fractionss',
      allowFrac: true,
    text: 
      `2/3, 18/27
      5/7, 10/14
      5/11, 15/33
      7/9, 14/18
      14/18, 7/9
      15/33, 5/11
      18/27, 2/3
      10/14, 5/7`
    }
   },
 {
    type: 'numberInput',
    id: 'word-prob',
    label: 'Answer the word problem.',
    commonData: {
      title: 'Answer the word problem.',
      type: 'word-problem'
    },
    data: [
      `Convert the following fractions 3/4, 5/8 into like fractions | ?0/?1, ?2/?3 | 6, 8, 5, 8
      Convert the following fractions 3/5, 3/7 into like fractions | ?0/?1, ?2/?3 | 21, 35, 15, 35
      Convert the following fractions 4/5, 3/10 into like fractions | ?0/?1, ?2/?3 | 8, 10, 3, 10
      Convert the following fractions 2/9, 1/6 into like fractions | ?0/?1, ?2/?3 | 4, 18, 3, 18`,

      `Convert the following fractions 1/4, 2/3 into like fractions | ?0/?1, ?2/?3 | 3, 12, 8, 12
      Convert the following fractions 5/6, 4/5 into like fractions | ?0/?1, ?2/?3 | 25, 30, 24, 30
      Convert the following fractions 3/8, 1/6 into like fractions | ?0/?1, ?2/?3 | 9, 24, 4, 24
      Convert the following fractions 1/6, 4/9 into like fractions | ?0/?1, ?2/?3 | 3, 18, 8, 18`,
    ]
  }
  ]
};
