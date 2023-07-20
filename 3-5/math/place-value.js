export default {
  label: 'Place Value',
  id: 'place-value',
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
        `Nine hundred and five | 905
Nine hundred and fifty | 950
Two thousand, three hundred and twenty | 2320
Seven hundred and seven | 707
Five hundred and ninety nine | 599`,

        `Two hundred and seventy two | 272
Three hundred and fifty | 350
Seven hundred | 700
Nine hundred and nine | 909
One thousand and ten | 1010`,

        `Four thousand, four hundred and four | 4404
Six thousand, nine hundred and seventy one | 6971
One thousand, nine hundred and ninety nine | 1999
Seven thousand, three hundred and twenty | 7320
Nine thousand and five hundred | 9500`,

        `Six thousand eight hundred and forty | 6840
Two thousand three hundred and forty five | 2345
Five thousand eight hundred and one | 5801
Eight thousand and eight | 8008
Three thousand and seven hundred | 3700`,

        `Twelve thousand and twelve | 12012
Twenty five thousand, six hundred and fifty four | 25654
Fifty five thousand, four hundred and ninety two | 55492
Seventy five thousand, five hundred and fifty | 75550
Eighteen thousand and five hundred | 18500`,

        `Ninety nine thousand, three hundred and ninety nine | 99399
Eighty thousand four hundred and ninety five | 80495
Sixty thousand four hundred and one | 60401
Eighty nine thousand and seven hundred | 89700
Fifty thousand, three hundred and five | 50305`
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
        `What is the place value of 3 in 2345? | 100
What is the place value of 4 in 7345? | 10
What is the place value of 7 in 5798? | 100
What is the place value of 9 in 7349? | 1
What is the place value of 4 in 4000? | 1000`,

        `What is the place value of 2 in 72999? | 1000
What is the place value of 1 in 3313? | 10
What is the place value of 6 in 4576? | 1
What is the place value of 5 in 5466? | 1000
What is the place value of 6 in 7655? | 100`,

        `What is the place value of 3 in 2345? | 100
What is the place value of 4 in 7345? | 10
What is the place value of 7 in 5798? | 100
What is the place value of 9 in 7349? | 1
What is the place value of 4 in 4000? | 1000`,

        `What is the place value of 2 in 32345? | 1000
What is the place value of 8 in 33839? | 100
What is the place value of 4 in 94500? | 1000
What is the place value of 9 in 5976? | 100
What is the place value of 7 in 65967? | 1`
      ]
    },
    {
      type: 'numberInput',
      id: 'write-number',
      label: 'Questions',
      commonData: {
        title: 'Write as requested. (No number should be repeated.)',
        type: 'word-problem'
      },
      data: [
        `Write the biggest 3 digit number containing 1,2 and 3. | 321
Write the smallest 4 digit number using 3,6,4 and 8. | 3468
Write the biggest number using 0, 4, 2 and 5. | 5420
Write the biggest 5 digit number using 8, 4, 2, 9 and 7. | 98742
Write the smallest 3 digit number using 2, 5 and 0. | 205`,

        `Write the biggest 5 digit number using 4, 5, 9, 2 and 3. | 95432
Write the smallest 4 digit number using 3, 5, 9 and 0. | 3059
Write the smallest 3 digit number using 7, 0 and 5. | 507
Write the biggest 4 digit number using 4, 5, 7 and 2. | 7542
Write the biggest 5 digit number using 4, 3, 7, 2 and 8. | 87432`,

        `Write the smallest 5 digit number using 4, 5, 0, 2 and 3. | 20345
Write the smallest 4 digit number using 5, 6, 9 and 0. | 5069
Write the smallest 3 digit number using 4, 0 and 1. | 104
Write the biggest 4 digit number using 1, 5, 9 and 2. | 9521
Write the biggest 5 digit number using 9, 4, 3, 2 and 8. | 98432`,

        `Write the smallest 5 digit number using 1, 5, 0, 9 and 3. | 10359
Write the biggest 4 digit number using 6,8,9 and 0. | 9860
Write the smallest 5 digit number using 4, 2, 6, 0 and 1. | 10246
Write the biggest 4 digit number using 6, 5, 9 and 8. | 9865
Write the smallest 5 digit number using 9, 6, 3, 0 and 8. | 30689`
      ]
    },
    {
      type: 'numberInput',
      id: 'write-number-2',
      label: 'Write the Number - 2',
      commonData: {
        title:
          'Write as requested. (All numbers should be used. No number should be repeated more than 2 times.)',
        type: 'word-problem'
      },
      data: [
        `Write the biggest 3 digit number containing  2 and 3. | 332
Write the smallest 4 digit number using 4 and 8. | 4488
Write the biggest 5 digit number using 0, 4, 2 and 5. | 55420
Write the biggest 5 digit number using 8, 9 and 7. | 99887
Write the smallest 4 digit number using 3, 0 and 2. | 2003`,

        `Write the biggest 5 digit number using 9, 4 and 3. | 99443
Write the smallest 4 digit number using 3, 9 and 0. | 3009
Write the smallest 3 digit number using 0 and 2. | 200
Write the biggest 4 digit number using 9, 1 and 2. | 9921
Write the biggest 5 digit number using 4, 3, 7, and 8. | 88743`,

        `Write the smallest 5 digit number using 4, 0 and 3. | 30034
Write the smallest 4 digit number using 5 and 0. | 5005
Write the smallest 3 digit number using 4 and 1. | 114
Write the biggest 4 digit number using 1, 5 and 2. | 5521
Write the biggest 5 digit number using 9, 0 and 8. | 99880`,

        `Write the smallest 5 digit number using 1, 0 and 2. | 10012
Write the smallest 5 digit number using 5, 9 and 0. | 50059
Write the biggest 4 digit number using 3 and 2. | 3322
Write the smallest 4 digit number using 4, 0 and 1. | 1004
Write the biggest 5 digit number using 6, 7 and 8. | 88776`
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
        `Write the biggest 2 digit number. | 99
Write the biggest 2 digit number that ends with 2. | 92
Write the smallest 2 digit number that ends with 9. | 19
Write the smallest 3 digit number. | 100
Write the smallest 3 digit number that ends with 7. | 107`,

        `Write the biggest 2 digit number that begins with 5. | 59
Write the biggest 3 digit number that ends with 2. | 992
Write the smallest 2 digit number that doesn't have a 9. | 88
Write the smallest 3 digit number that ends with 5. | 105
Write the biggest 3 digit number that ends with 0. | 107`,

        `Write the smallest 3 digit number that begins with 9. | 900
Write the smallest 3 digit number that begins with 5. | 500
Write the biggest 2 digit even number. | 98
Write the smallest 3 digit odd number. | 101
write the smallest 2 digt odd number that begins with 6. | 61`
      ]
    },
    {
      type: 'makeSentence',
      label: 'Numbers to Number Names',
      id: 'convert-names',
      commonData: {
        title: 'Convert the given number to number name.',
        fontSize: '2rem',
        extras: 'one five seven nine forty eighty hundred thousand'
      },
      data: [
        `3010 |  three thousand and ten
955 | nine hundred and fify five
543 | five hundred and forty three
1111 | one thousand one hundred and eleven
2222 | two thousand two hundred and twenty two`,

        `4343 | four thousand three hundred and forty three
9509 | nine thousand five hundred and nine
8305 | eight thousand three hundred and five
7105 | seven thousand one hundred and five
3999 | three thousand nine hundred and ninety nine`,

        `14014 | fourteen thousand and forteen
19034 | nineteen thousand and thirty four
64340 | sixty four thousand three hundred and forty
99999 | ninety nine thousand nine hundred and ninety nine 
30303 | thirty thousand three hundred and three`
      ]
    }
  ]
};
