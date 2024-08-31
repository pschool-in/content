export default {
  label: 'Linear Equation in One Variable (NIOS)',
  id: 'linear-eqn-one-var-nios',
  lockAfter: 100,
  list: [
    {
      id: 'mcq',
      label: 'Multiple Choice Question',
      type: 'mcq',
      commonData: {},
      data: [
        {
          questions: [
            {
              qText: `Degree of a linear equation   ______.`,
              options: `is always 1, is always 2, is always 0, can be any number`
            },
            {
              qText: `What does solving an equation mean?`,
              options: `Finding the value of variable.
Understanding the equation.
Changing an expression into equation.
Simplifying an equation.`
            },
            {
              qText: `True or False: If we add a same number to both sides, the solution of the equation will not change.`,
              options: `True, False`
            },
            {
              qText: `True or False: A linear equation can have more than one number as solution.`,
              options: `False, True`
            }
          ]
        },
        {
          title: 'Find the algebraic expression.',
          questions: [
            {
              qText: `Three times a number is same as adding 2 to the number.`,
              options: `~3𝑦=𝑦+2, ~3𝑥=𝑦+2, ~3𝑦=𝑥+2, ~3(𝑥+2)=0`
            },
            {
              qText: `Sum of two consecutive numbers is 37. `,
              options: `2a+1=37, 2a-1=37, *both can be correct, both are incorrect`
            },
            {
              qText: `Width of a rectangular garden is half of its length and perimeter of the garden
is 600 meter`,
              options: `w + 2w + w + 2w = 600, 4w = 600, w+w+w+w = 600, w × w = 600`
            },
            {
              qText: `Cost of a magazine and a newspaper is ₹ 15. Cost of magazine is 4 times the cost
of newspaper.`,
              options: `5n = 15, 5n = 3, 4n + n = 5n, 4n - n = 15`
            },
            {
              qText: `You started from your home by cycle at 10 o'clock at the speed of 10 km per hour. At 11 o'clock in the afternoon your sister started from the same place following you by same route at a speed of 20 km per hour. At what time will she cross you?`,

              options: `10𝑥 = 20 (𝑥 - 1), 10𝑥 = 11𝑦, 10(𝑥-1) = 20𝑥, 10𝑥 = 20`,
              feedback: `Suppose your sister crossed you after x hours. So, in x hours, you covered 10𝑥 km distance. Since your sister started 1 hour later than you, so she took (𝑥 - 1) hours to cross you. When you meet both have covered equal distance.`
            }
          ]
        },
        {
          title: 'Find the algebraic expression.',
          questions: [
            {
              qText: `Multiplying a number with 4 gives the same result; it gives on adding 6 to the number.`,
              options: `4𝑥=𝑥+6, 4𝑥=6, 6𝑥=4, 6𝑥=4𝑥+6`
            },
            {
              qText: `Three new tailors Akram, Bano and Charu joined a Tailor's shop temporarily for trial. In one week, Charu stitched 10 blouses more than Akram and by the same time Bano stitched three times blouses more than Akram. In one week three together stitched 50 blouses`,
              options: `𝑥 + 3𝑥 + (𝑥 + 10) = 50, 5𝑥 = 50, 𝑥 + 3𝑥 + 2𝑥 = 50, 6𝑥 = 60`
            },
            {
              qText: `In a particular mixture, ratio of sand and cement is 4:1. Keeping in mind this ratio, 25 kg of mixture is to be prepared.`,
              options: `𝑥 + 4𝑥 = 25, 25𝑥+4𝑥=100, 4𝑥 = 25, 4𝑥 = 5`
            },
            {
              qText: `At the same time two trains started from two stations and move towards each other to cover a distance of 426 km. If there be a difference of 8 km per hour in their speeds, and they reach same place after 3 hours.`,
              options: `3𝑥 + 3(𝑥 + 8) = 426, 3𝑥 + 3(𝑥 + 8) = 426/2, 3𝑥 + 8 = 426, 3𝑥 + 8 = 426/2`,
              feedback: `The two trains in total covered 426 km. Each train travelled for 3 hours and the second train is 8 km/hr faster. `
            }
          ]
        },
        {
          title: 'Find the algebraic expression.',
          questions: [
            {
              qText: `Subtracting 5 from a number becomes equal to double of the original number.`,
              options: `~𝑥-5=2𝑥, ~𝑥+5=2𝑥, ~2𝑥-5=0, ~𝑥-5=2`
            },
            {
              qText: `Length of a rectangle is three times its breadth. Its perimeter is 64 m.`,
              options: `2(𝑥+3𝑥) = 64, 4𝑥 = 64, 3𝑥 × 𝑥 = 64, 𝑥+3𝑥=64`
            },
            {
              qText: `An item whose weight on earth is 48 kg, weighs 8 kg on moon. If a man's weight on earth be 54 kg , then what will be his weight(w) on moon?`,
              options: `w/54 = 8/48 , w = 54/48, w/48 = 8/54, w = 8/48`,
              feedback: `The ratio between the weight on Earth and Moon for a particular object is always the same.`
            },
            {
              qText: `Second angle of a triangle 20° more than its first angle and the third angle is twice the second angle.`,
              options: `𝑥 + (𝑥+20) + 2(𝑥+20) = 180
𝑥 + (𝑥+20) + 2(𝑥+20) = 360
𝑥 + 2(𝑥+20) = 360
𝑥 + 2(𝑥+20) = 180`,
              feedback: `The sum of all three angles in a triangle is 180.`
            }
          ]
        }
      ]
    },

    {
      type: 'numberInput',
      id: 'simplify',
      label: 'Word Problem',
      data: {
        title: 'Answer the following',
        // type: 'word-problem',
        fontSize: '1rem',
        isSentence: true,
        algebra: true,
        list: [
          {
            text: `10 people are to be invited for meal. Out of these, 6 need 4 chapattis each and remaining needs 2 chapattis each. How many chapattis we need to cook. Also write the statement as algebraic expression. (No. of people need 4 chapattis as 𝑥)
Total Chapattis 
= 6 × 4 +  4 × 2
= ?0
Algebraic expression
= ?1
32, 4𝑥+2(10-𝑥)`,
            vars: '𝑥()',
            fontSize: '1rem'
          },
          `Find 𝑥 in the below equation.
𝑥 + 5 = 27
𝑥 = ?0
22`,

          `Find 𝑦 in the below equation.
3𝑦 = 𝑦 + 2
?0 = 2
𝑦 = ?1
2𝑦, 1`,

          `Find n in the below equation
5n = 15
n = ?0
3`,

          `Find 𝑥 in the below equation.
8 = 2 - 3𝑥
3𝑥 = ?0
𝑥 = ?1
-6, -2`,

          `Find 𝑦 in the below equation.
7𝑦 – 9 = 6𝑦 – 10
𝑦 = ?0
-1`,

          `Find 𝑥 in the below equation.
[𝑥 – (𝑥 + 5) – (𝑥 – 5)] = 3𝑥 + 7
?0 = 3𝑥 + 7
?1 = 7
𝑥 = ?2
-𝑥, -4𝑥, -7/4`
        ]
      }
    }
  ]
};
