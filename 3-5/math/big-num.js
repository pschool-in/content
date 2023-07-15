export default {
  id: 'big-num',
  label: 'Big Numbers',
  list: [
    {
      type: 'numberInput',
      id: 'number-names',
      label: 'Write the Number',
      commonData: {
        title: 'Write the Number',
        type: 'word-problem'
      },
      data: [
        `Sixty seven lakhs and three hundred | 6700300 
Fifty three lakhs four thousand and fifty | 5304050
Seven lakh and twenty three thousand | 723000 
Seventy five lakhs twenty five thousand seven hundred and seventy two | 7525772 
Fifty lakhs twenty five thousand one hundred and twenty five | 5025125  `,

        `Seventy five lakhs forty five thousand three hundred and twenty five | 7545325 
Forty three lakhs forty three thousand four hundred and three | 4343403 
Ninety five lakhs thirty three thousand and two hundred | 9533200 
Twenty three lakhs forty five thousand three hundred and twenty |  2345320 
Thirty two lakhs ninety nine thousand and ninety nine | 3299099 `,

        `Four crores and twenty five lakhs | 42500000 
Eight crores thirty two lakhs and twenty three thousand |  83223000 
Two crores and fifty thousand | 20050000 
Seven crores five lakhs and four thousand | 70504000 
Thirty two crores forty lakhs and five hundred | 324000500`
      ]
    },
    {
      type: 'makeSentence',
      label: 'Numbers to Number Names',
      id: 'convert-names',
      commonData: {
        title: 'Write the number name for the given number.',
        fontSize: '2rem',
        extras: 'one five seven nine forty eighty hundred thousand'
      },
      data: [
        `67,00,300 | sixty seven lakhs and three hundred
53,04,050 | fifty three lakhs four thousand and fifty
7,23,000 | seven lakh and twenty three thousand
75,25,772 | seventy five lakhs twenty five thousand seven hundred and seventy two
50,25,125 | fifty lakhs twenty five thousand one hundred and twenty five`,

        `75,45,325 | seventy five lakhs forty five thousand three hundred and twenty five
43,43,403 | forty three lakhs forty three thousand four hundred and three
95,33,200 | ninety five lakhs thirty three thousand and two hundred
23,45,320 | twenty three lakhs forty five thousand three hundred and twenty
32,99,099 | thirty two lakhs ninety nine thousand and ninety nine`,

        `4,25,00,000 | four crores and twenty five lakhs
8,32,23,000 | eight crores thirty two lakhs and twenty three thousand
2,00,50,000 | two crores and fifty thousand
7,05,04,000 | seven crores five lakhs and four thousand
32,40,00,500 | thirty two crores forty lakhs and five hundred.`
      ]
    },
    {
      type: 'match',
      id: 'match',
      label: 'Match Equals',
      commonData: {
        title: 'Match Equals'
      },
      data: [
        `7 tens, 70 ones
7 lakhs, 700 thousands
70 tens, 7 hundreds
700 lakhs, 7 crores
7 thousands, 70 hundreds`,

        `1 lakh, 100 thousand
1 crore, 10 million
10 lakhs, 1 million
100 crore, 1 billion
10 crore, 100 million`,

        `5 lakhs, 500 thousands
5 thousands, 50 hundreds
50 tens, 5 hundreds
500 lakhs, 5 crores
5 tens, 50 ones`,

        `40 lakhs, 4 million
4 lakh, 400 thousand
4 crore, 40 million
40 crore, 400 million
400 crore, 4 billion`
      ]
    },

    {
      type: 'numberInput',
      id: 'place-value',
      label: 'Place Value',
      commonData: {
        title: 'Find the Place Value',
        type: 'word-problem'
      },
      data: [
        `What is the place value of 4 in 786345? | 10
  What is the place value of 1 in 7361465? | 1000
  What is the place value of 7 in 47658899? | 1000000
  What is the place value of 6 in 73690000? | 100000
  What is the place value of 5 in 500000? | 100000`,

        `What is the place value of 3 in 1273999? | 1000
  What is the place value of 5 in 653313? | 10000
  What is the place value of 4 in 9874576? | 1000
  What is the place value of 5 in 1500466? | 100000
  What is the place value of 6 in 9854655? | 100`,

        `What is the place value of 2 in 2398445? | 1000000
  What is the place value of 6 in 7354698? | 100
  What is the place value of 3 in 53654498? | 1000000
  What is the place value of 8 in 73980000? | 10000
  What is the place value of 5 in 450000? | 10000`
      ]
    },
    {
      type: 'numberInput',
      id: 'find-number',
      label: 'Find the Number',
      commonData: {
        title: 'Write as requested.',
        type: 'word-problem'
      },
      data: [
        `Write the biggest 7 digit number that begins with 5. | 5999999
  Write the smallest 7 digit number that ends with 9. | 1000009
  Write the biggest 7 digit number that ends with 6. | 9999996
  Write the biggest 7 digit number that is divisible by 3. | 9999999
  Write the biggest 7 digit number that is divisible by 2. | 9999998`,

        `Write the smallest 8 digit number that is divisible by 2. | 10000000
  Write the smallest 8 digit number that is divisible by 3. | 10000002
  Write the biggest 8 digit number that is divisible by 5. | 99999995
  Write the smallest 8 digit number that is divisible by 5. | 10000000
  Write the biggest 8 digit number that doesn't have a 9. | 88888888`,

        `Write the biggest number that is less than 1 million. | 999999
  Write the smallest number that is a multipe of 1 million. | 1000000
  Write the biggest 7 digit number that is divisible by 10. | 9999990 
  Write the biggest 8 digit number that is divisible by 50. | 99999950
  Write the smallest 8 digit number that is divisible by 5 but not divisible by 10. | 10000005`
      ]
    },
    {
      type: 'numberInput',
      id: 'round-off',
      label: 'Round Off',
      commonData: {
        title: 'Round Off the given number as requested.',
        type: 'word-problem'
      },
      data: [
        `Round off 134543 to its nearest hundred. | 134500
Round off 432403 to its nearest ten. | 432400
Round off 834675 to its nearest thousand. | 835000
Round off 249822 to its nearest hundred. | 249800
Round off 249822 to its nearest thousand. | 250000`,

        `Round off 9230600 to its nearest thousand. | 9231000
Round off 8967451 to its nearest ten. | 8967450
Round off 499465 to its nearest hundred. | 499500
Round off 700543 to its nearest thousand. | 701000
Round off 6500005 to its nearest hundred. | 6500000`,

        `Round off 765439 to its nearest hundred. | 765400
Round off 3240900 to its nearest thousand. | 3241000
Round off 987654 to its nearest thousand. | 988000
Round off 4356753 to its nearest hundred. | 4356800
Round off 98249822 to its nearest thousand. | 98250000`
      ]
    }
  ]
};
