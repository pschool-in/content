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
   }
  ]
};
