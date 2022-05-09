export default {
  label: 'Place Value - 2',
  id: 'place-value-2',
  list: [
    {
      type: 'numberInput',
      id: 'number-names',
      label: 'Write the Number',
      lockAfter: 1,
      commonData: {
        title: 'Write the Number',
        type: 'word-problem'
      },
      data: [
        `Seven lakh and forty five thousand | 745000
Seventy five lakh | 7500000
Two crore and five lakh | 20500000
Twenty five lakh, two hundred and fifty | 2500250
Forty lakh, fifty thousand and ten | 4050010`,

        `Five crore and seventy thousand | 50070000
Eighty five lakh, thirty three thousand, seven hundred and fifty four | 8533754
Seven crore eighty five lakh five thousand four hundred and sixty  | 78505460
Sixty five lakh, seven hundred and ten | 6500710
Ninety nine thousand, nine hundred and nineteen | 99919`,

        `Sixty seven lakh, eighty two thousand and twelve | 6782012
Fifty nine lakh, two hundred and ninety nine | 5900299
Eighty five thousand, three hundred and twenty | 85320
Eighty five lakh, six thousand and nine hundred | 8506900
Nine crore, twenty lakh, thirty two thousand and five hundred | 92032500`,

        `Two crore and fifty lakh | 25000000
Seven crore and twenty one lakh | 72100000
Eighty five lakh and nine hundred | 8500900
Six crore, twenty two lakh, seven hundred and fifty five | 62200755
Nine crore and ninety nine thousand | 90099000`
      ]
    },
    {
      type: 'numberInput',
      id: 'place-value',
      label: 'Place Value',
      lockAfter: 1,
      commonData: {
        title: 'Find the Place Value',
        type: 'word-problem'
      },
      data: [
        `What is the place value of 3 in 2365445? | 100000
What is the place value of 4 in 7367465? | 100
What is the place value of 7 in 57654498? | 1000000
What is the place value of 9 in 73490000? | 10000
What is the place value of 4 in 400000? | 100000`,

        `What is the place value of 2 in 1272999? | 1000
What is the place value of 1 in 653313? | 10
What is the place value of 6 in 9874576? | 1
What is the place value of 5 in 1599466? | 100000
What is the place value of 6 in 9877655? | 100`,

        `What is the place value of 3 in 2365445? | 100000
What is the place value of 4 in 7367465? | 100
What is the place value of 7 in 57654498? | 1000000
What is the place value of 9 in 73490000? | 10000
What is the place value of 4 in 400000? | 100000`,

        `What is the place value of 2 in 1172999? | 1000
What is the place value of 1 in 653313? | 10
What is the place value of 6 in 9874576? | 1
What is the place value of 5 in 1599466? | 100000
What is the place value of 6 in 9877655? | 100`
      ]
    }
  ]
};
