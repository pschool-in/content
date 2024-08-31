export default {
  label: 'Playing with Numbers',
  id: 'playing-with-numbers-6',
  list: [
    {
      type: 'numberInput',
      id: 'fillup',
      label: 'Factors (Ex 3.1)',
      data: {
        isSentence: false,
        fontSize: '1.2rem',
        firstLineFontSize: '2rem',
        title:
          'Write all the factors of the following numbers : (smallest to largest)',
        list: [
          `24
?0 , ?1 , ?2 , 
?3 , ?4 , ?5 , 
?6 , ?7
1, 2, 3, 4, 6, 8, 12, 24`,

          `15
?0 , ?1 , 
?2 , ?3
1, 3, 5, 15`,

          `21
?0 , ?1 , 
?2 , ?3
1, 3, 7, 21`,

          `27
?0 , ?1 , 
?2 , ?3
1, 3, 9, 27`,

          `12
?0 , ?1 , ?2 , 
?3 , ?4 , ?5 
1, 2, 3, 4, 6, 12`,

          `20
?0 , ?1 , ?2 , 
?3 , ?4 , ?5 
1, 2, 4, 5, 10, 20`,

          `18
?0 , ?1 , ?2 , 
?3 , ?4 , ?5 
1, 2, 3, 6, 9, 18`,

          `23
?0 , ?1
1, 23`,

          `36
?0 , ?1 , ?2 , 
?3 , ?4 , ?5 , 
?6 , ?7 , ?8
1, 2, 3, 4, 6, 9, 12, 18, 36`
        ]
      }
    },

    {
      type: 'numberInput',
      id: 'fillup-2',
      label: 'Multiples (Ex 3.1)',
      data: {
        isSentence: false,
        fontSize: '1.2rem',
        firstLineFontSize: '2rem',
        title: 'Write first five multiples of :',
        list: [
          `5
?0 , ?1 , ?2 , 
?3 , ?4
5, 10, 15, 20, 25`,

          `8
?0 , ?1 , ?2 , 
?3 , ?4
8, 16, 24, 32, 40`,

          `9
?0 , ?1 , ?2 , 
?3 , ?4
9, 18, 27, 36, 45`
        ]
      }
    },

    {
      id: 'match',
      label: 'Match the following',
      type: 'match',
      data: {
        title: 'Match the items in column 1 with the items in column 2.',

        text: `35 , Multiple of 7
          15 , Factor of 30
          16 , Multiple of 8
          20 , Factor of 20
          25 , Factor of 50`
      }
    },

    {
      label: 'Select All Multiples',
      type: 'numberTable',
      id: 'multiples-9',
      data: {
        start: 1,
        step: 1,
        title: 'Select all multiples of 9 in the below table.',
        answer: 9
      }
    },
    {
      type: 'numberInput',
      id: 'wordprob',
      label: 'Factors (Ex 3.1)',
      data: {
        isSentence: true,
        fontSize: '1rem',
        title: 'Answer the following',
        list: [
          `The sum of any two odd numbers is always an #<?0, even, odd> number.
          The sum of any two even numbers is always an #<?1, even, odd> number.
          The sum of any odd number and an even number is an #<?2, even, odd> number.
          even, even, odd`,

          `The numbers 13 and 31 are prime numbers. Both these numbers have same digits 1
and 3. Find such pairs of prime numbers upto 100.
?0 and ?1
?2 and ?3
?4 and ?5
17, 71, 37, 73, 79, 97`,

          `What is the greatest prime number between 1 and 10?
Ans = ?0
7`,

          `Express each of the following numbers as the sum of two odd primes:
(hint: start from the smallest prime number and check one by one)
44 = ?0 + ?1
36 = ?2 + ?3
24 = ?4 + ?5
18 = ?6 + ?7
3, 41, 5, 31, 5, 19, 5, 13`,

          `Give three pairs of prime numbers whose difference is 2.
[Remark : Two prime numbers whose difference is 2 are called twin primes].
1. ?0 and ?1
2. ?2 and ?3
3. ?4 and ?5
3,5,5,7,11,13`,

          `Which of the following numbers are prime?
23 is a #<?0 , prime, composite> number.
51 is a #<?1 , prime, composite> number.
37 is a #<?2 , prime, composite> number.
26 is a #<?3 , prime, composite> number.
prime, composite, prime, composite`,

          `Write seven consecutive composite numbers less than 100 so that there is no prime number between them.
The numbers from ?0 to ?1 has no prime numbers.
90, 96`,

          `Express each of the following numbers as the sum of three odd primes:
(hint: start from the smallest prime number and check one by one)
21 = 3 + ?0 + ?1
31 = 3 + ?2 + ?3
53 = 13 + ?4 + ?5
61 = 7 + ?6 + ?7
5, 13, 5, 23, 17, 23, 13, 41`,

          `Write five pairs of prime numbers less than 20 whose sum is divisible by 5.
2 + ?0
2 + ?1
3 + ?2
7 + ?3
11 + ?4
3, 13, 7, 13, 19`
        ]
      }
    },

    {
      id: 'true-false',
      label: 'True or False (Ex 3.2)',
      type: 'classifySentence',
      data: {
        title: 'True or False',
        types: [
          {
            name: 'True',
            text: `The sum of two odd numbers and one even number is even.
            The product of three odd numbers is odd.
            2 is the only even prime number.
            The product of two even numbers is always even.`
          },
          {
            name: 'False',
            text: `The sum of three odd numbers is even.
            If an even number is divided by 2, the quotient is always odd.
All prime numbers are odd.
Prime numbers do not have any factors.
Sum of two prime numbers is always even.
All even numbers are composite numbers.`
          }
        ]
      }
    },
    {
      label: 'Prime & Composite (Ex 3.2 Prob 4)',
      type: 'group',
      id: 'group',
      data: {
        title:
          'Write down separately the prime and composite numbers less than 20.',
        fontSize: '2rem',
        types: [
          {
            name: 'Prime',
            text: '2, 3, 5, 7, 11, 13, 17, 19'
          },
          {
            name: 'Composite',
            text: '4, 6, 8, 9, 10, 12, 14, 15, 16, 18'
          }
        ]
      }
    },
    {
      id: 'fillup-3',
      label: 'Fill Up',
      type: 'fillup',
      data: {
        title: 'Fill in the blanks :',
        text: `A number which has only two factors is called a *prime (composite, odd) * number.
        A number which has more than two factors is called a *composite (prime, even) * number.
        1 is neither prime nor *composite (natural, even) * number.
        The smallest prime number is * 2 (3, 1)*.
        The smallest composite number is * 4 (2, 1)*.
        The smallest even number is * 2 (1, 4)*.`
      }
    },
    {
      label: 'Divisibility Check (Ex 3.3)',
      type: 'group',
      id: 'group-2',
      commonData: {
        fontSize: '2rem'
      },
      data: [
        {
          title:
            'Using divisibility tests, determine which of the following numbers are divisible by 2',
          types: [
            {
              name: 'Divisible',
              text: '990, 1586, 6686, 639210, 429714, 2856, 3060'
            },
            {
              name: 'Not divisible',
              text: '123, 275,  406839'
            }
          ]
        },
        {
          title:
            'Using divisibility tests, determine which of the following numbers are divisible by 3',
          types: [
            {
              name: 'Divisible',
              text: '123, 990,  639210, 429714, 2856, 3060, 406839'
            },
            {
              name: 'Not divisible',
              text: '1586, 275, 6686'
            }
          ]
        },
        {
          title:
            'Using divisibility tests, determine which of the following numbers are divisible by 4',
          types: [
            {
              name: 'Divisible',
              text: '2856, 3060'
            },
            {
              name: 'Not divisible',
              text: '1586, 6686, 123, 990, 275, 639210, 429714, 406839'
            }
          ]
        },
        {
          title:
            'Using divisibility tests, determine which of the following numbers are divisible by 5',
          types: [
            {
              name: 'Divisible',
              text: '990, 275, 639210, 3060'
            },
            {
              name: 'Not divisible',
              text: '123, 1586, 6686,  429714, 2856,  406839'
            }
          ]
        },
        {
          title:
            'Using divisibility tests, determine which of the following numbers are divisible by 6',
          types: [
            {
              name: 'Divisible',
              text: '990,  639210, 429714, 2856, 3060'
            },
            {
              name: 'Not divisible',
              text: '123, 1586, 275, 6686, 406839'
            }
          ]
        },
        {
          title:
            'Using divisibility tests, determine which of the following numbers are divisible by 8',
          types: [
            {
              name: 'Divisible',
              text: '2856'
            },
            {
              name: 'Not divisible',
              text: '1586, 6686, 123, 990, 275, 639210, 429714, 406839'
            }
          ]
        },
        {
          title:
            'Using divisibility tests, determine which of the following numbers are divisible by 9',
          types: [
            {
              name: 'Divisible',
              text: '990,  429714, 3060, 406839'
            },
            {
              name: 'Not divisible',
              text: '123, 1586, 275, 6686, 639210, 2856'
            }
          ]
        },
        {
          title:
            'Using divisibility tests, determine which of the following numbers are divisible by 10',
          types: [
            {
              name: 'Divisible',
              text: '990, 639210, 3060'
            },
            {
              name: 'Not divisible',
              text: '123, 1586, 6686,  429714, 2856,  406839, 275'
            }
          ]
        },
        {
          title:
            'Using divisibility tests, determine which of the following numbers are divisible by 11',
          types: [
            {
              name: 'Divisible',
              text: '990,  275, 639210'
            },
            {
              name: 'Not divisible',
              text: '123, 1586, 6686, 429714, 2856, 3060, 406839'
            }
          ]
        },
        {
          title:
            'Using divisibility tests, determine which of the following numbers are divisible by 4',
          types: [
            {
              name: 'Divisible',
              text: '572, 726352, 5500, 6000,  14560, 21084, 31795072, 1700'
            },
            {
              name: 'Not divisible',
              text: '12159, 2150'
            }
          ]
        },
        {
          title:
            'Using divisibility tests, determine which of the following numbers are divisible by 8',
          types: [
            {
              name: 'Divisible',
              text: '726352, 6000,  14560, 31795072, 1700'
            },
            {
              name: 'Not divisible',
              text: '572, 12159, 2150, 5500, 21084'
            }
          ]
        },

        {
          title:
            'Using divisibility tests, determine which of the following numbers are divisible by 11:',
          types: [
            {
              name: 'Divisible',
              text: '5445, 10824, 70169308, 10000001, 901153'
            },
            {
              name: 'Not divisible',
              text: '7138965'
            }
          ]
        }
      ]
    },
    {
      type: 'numberInput',
      id: 'wordprob-2',
      label: 'Find Digit (Ex 3.3)',
      data: {
        isSentence: true,
        fontSize: '2rem',
        firstLineFontSize: '1rem',
        inputType: 'small',
        title: 'Answer the following',
        list: [
          `Write the smallest digit in the blank space of each of the following numbers so that the number formed is divisible by 3 :
?0 6724
4765 ?1 2
2 , 0`,

          `Write the biggest digit in the blank space of each of the following numbers so that the number formed is divisible by 3 :
?0 6724
4765 ?1 2
8, 9`,

          `Write a digit in the blank space of each of the following numbers so that the number formed is divisible by 11 :
92 ?0 389
8 ?1 9484
8, 6`
        ]
      }
    },

    {
      type: 'numberInput',
      id: 'lcm',
      label: 'LCM (Ex 3.4)',
      commonData: {
        isSentence: true,
        firstLineFontSize: '1rem',
        inputType: 'small',
        title: 'Answer the following'
      },
      data: [
        {
          title: `Find the common factors of :`,
          list: [
            `20 and 28
            Ans = ?0 , ?1 , ?2
            1, 2, 4`,

            `15 and 25 
            Ans = ?0 , ?1 
            1, 5`,

            `35 and 50 
            Ans = ?0 , ?1 
            1, 5`,

            `56 and 120
            Ans = ?0 , ?1 , ?2, ?3
            1, 2, 4, 8`,

            `4, 8 and 12
            Ans = ?0 , ?1 , ?2
            1, 2, 4`,

            `5, 15 and 25
            Ans = ?0 , ?1 
            1, 5`
          ]
        },
        {
          list: [
            `Find first three common multiples of :
6 and 8
Ans = ?0 , ?1 , ?2
24, 48, 72`,

            `Find first three common multiples of :
12 and 18
Ans = ?0 , ?1 , ?2
36, 72, 108`,

            `A number is divisible by both 5 and 12. By which other number (biggest) will that number be always divisible?
Ans = ?0
60`,

            `A number is divisible by 12. By what other numbers will that number be divisible?
Ans = ?0 , ?1 , ?2 , ?3 , ?4
1,2,3,4,6`
          ]
        }
      ]
    },
    {
      label: 'Select All Multiples (Ex 3.4)',
      type: 'numberTable',
      id: 'numtable',
      data: {
        start: 1,
        step: 1,
        title:
          'Write all the numbers less than 100 which are common multiples of 3 and 4.',
        answer: 12
      }
    },
    {
      id: 'true-false-2',
      label: 'Co-Primes : True or False (Ex 3.4)',
      type: 'classifySentence',
      data: {
        title: 'True or False: The below pair of numbers are co-primes',
        fontSize: '2rem',
        types: [
          {
            name: 'True',
            text: `18 and 35
            15 and 37
            216 and 215
            81 and 16`
          },
          {
            name: 'False',
            text: `30 and 415
            17 and 68`
          }
        ]
      }
    },
    {
      id: 'true-false-3',
      label: 'Divisibility Rules: T-F (Ex 3.5)',
      type: 'classifySentence',
      data: {
        title: 'True or False',
        fontSize: '2rem',
        types: [
          {
            name: 'True',
            text: `If a number is divisible by 9, it must be divisible by 3.
            If a number is divisible by 9 and 10 both, then it must be divisible by 90.
            All numbers which are divisible by 8 must also be divisible by 4.
            If a number exactly divides two numbers separately, it must exactly divide their sum.`
          },
          {
            name: 'False',
            text: `If a number is divisible by 3, it must be divisible by 9.
            A number is divisible by 18, if it is divisible by both 3 and 6.
            If two numbers are co-primes, at least one of them must be prime.
            All numbers which are divisible by 4 must also be divisible by 8.
            If a number exactly divides the sum of two numbers, it must exactly divide the two numbers separately.`
          }
        ]
      }
    }
  ]
};
