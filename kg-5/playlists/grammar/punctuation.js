export default {
  id: 'punctuation',
  label: 'Punctuation',
  pdf: '',
  list: [
    {
      label: 'Exclamation mark',
      type: 'passage',
      id: 'exclamation-mark-reading',
      data: {
        title: 'Exclamation mark',
        text: `It is used to show strong feelings of joy, sadness, confusion, surprise, etc. This mark can be used after a word, phrase or sentence. The sentences ending with an exclamation mark are called exclamatory sentences. 
A few examples of such sentences are:

1. Alas! My holidays are canceled.
2. Wow, it’s raining!
3. Oh God!
4. I hear thunder!`
      }
    },
    {
      id: 'fillup-1',
      label: 'Fill in the blanks',
      type: 'fillupOptions',
      data: {
        text: `Should I get the umbrella *? (., !)*
          Yikes *! (., ?)* I hear thunder.
          We should go inside *. (!, ?)*
          Quick, call the dog *! (., ?)*
          Have you written your homework *? (., !)*`,
        title: 'Choose the correct punctuation. Tap on each blank for options.'
      }
    },
    {
      id: 'classif-2',
      label: 'Drag and drop',
      type: 'group',
      data: {
        title:
          'Identify which of these words are exclamatory and which are not.',
        types: [
          {
            name: 'Exclamatory',
            text: 'Oh, Alas, Wow, Yikes'
          },
          {
            name: 'Non- exclamatory',
            text: 'What, How, When, Whom'
          }
        ]
      }
    },
    {
      id: 'true-false-3',
      label: 'True or False (classify the sentence)',
      type: 'classifySentence',
      data: {
        title: 'State whether these statements are true or false.',
        types: [
          {
            name: 'True',
            text: `Exclamation marks are used to show strong feelings.
              ‘Wow’ is an expression.
              Sentences ending with exclamation marks are called exclamatory sentences.`
          },
          {
            name: 'False',
            text: `Sentences ending with exclamation marks are called explanatory sentences.
              Punctuations are not important.
              Exclamation marks and question marks are the same.`
          }
        ]
      }
    },
    {
      label: 'Full stop',
      type: 'passage',
      id: 'full-stop-reading',
      data: {
        title: 'Full stop (Period)',
        text: `We use a full stop or period at the end of a statement. For example,
1. I like eating apples.
2. My mom wakes up at 6 o’clock in the morning.
3. I go to school every day.

We also use period in front of abbreviations. For example,
1. Mr. Malik
2. Mrs. Sharma
3. Ms. Shivani`
      }
    },
    {
      id: 'fillup-4',
      label: 'Fill in the blanks',
      type: 'fillupOptions',
      data: {
        text: `Mr. Mac is a firefighter *. (!, ?)*
          How many balls are there *? (!, .)*
          I am 10 years old *. (!, ?)*
          What a beautiful day *! (., ?)*
          My home is outside the city *. (?, !)*`,
        title: 'Choose the correct option. Tap on each blank for options.'
      }
    },
    {
      id: 'true-false-5',
      label: 'True or False (classify the sentence)',
      type: 'classifySentence',
      data: {
        title: 'State whether these statements are true or false.',
        types: [
          {
            name: 'True',
            text: `Full stop is used at the end of abbreviations.
              Full stop is also called a period.`
          },
          {
            name: 'False',
            text: `Full stop and period are different punctuation marks.
              Period is used in the middle of a sentence.`
          }
        ]
      }
    },
    {
      label: 'Capital letters',
      type: 'passage',
      id: 'capital-letters-reading',
      data: {
        title: 'Capital letters',
        text: `The first letter of a sentence should always be capital. The word ‘I’ is also written in capital. In addition, names of special places, names and titles also start with a capital letter. Some examples are;
1. My name is Richa.
2. May I eat some fish?
3. Richa Malhotra
4. Mrs. Kapoor`
      }
    },
    {
      id: 'fillup-6',
      label: 'Fill in the blanks',
      type: 'fillupOptions',
      data: {
        text: `My name is *Reena (reena)*.
          I am 15 years *old (Old)*.
          *Mrs. (mrs.) Sharma is a kind *lady (Lady).
          Ram is a very *smart (Smart) boy.
          She lives in *Delhi (delhi)*.`,
        title: 'Choose the correct option. Tap on each blank for options.'
      }
    },
    {
      id: 'true-false-7',
      label: 'True or False (classify the sentence)',
      type: 'classifySentence',
      data: {
        title: 'State whether these statements are true or false.',
        types: [
          {
            name: 'True',
            text: `Name of a person always starts with a capital letter.
              Name of a country always starts with a capital letter.
              The first word of a sentence always starts with a capital letter.`
          },
          {
            name: 'False',
            text: `The word ‘You’ always starts with a capital letter.
              The last word of a sentence should start with a capital letter.`
          }
        ]
      }
    },
    {
      label: 'Apostrophe/Contraction',
      type: 'passage',
      id: 'apostrophe-contraction-reading',
      data: {
        title: 'Apostrophe/Contraction',
        text: `An apostrophe is used for making a contraction. A contraction is made by combining two words into one. We put an apostrophe in place of a missing letter. 
Some examples are;
1. do+not= don’t
2. are+not= aren’t
3. can+not= can’t`
      }
    },
    {
      id: 'match-8',
      label: 'Match the following',
      type: 'match',
      data: {
        title: 'Match the correct pairs.',
        fontSize: '1rem',
        text: `It is, It’s
          He is, He’s
          She is, She’s
          They are, They’re
          You are, You’re
          I am, I’m`
      }
    },
    {
      id: 'fillup-9',
      label: 'Fill in the blanks',
      type: 'fillupOptions',
      data: {
        text: `*I’m (Im’)* a student.
          We *shouldn’t (shoul’dnt)* lie.
          *They’re (Theyr’e)* very helpful.
          *It’s (Its)* a pleasant day.
          *She’s (shes’)* a good girl.`,
        title: 'Choose the correct option. Tap on each blank for options.'
      }
    },
    {
      id: 'right-or-wrong-10',
      label: 'Right or wrong (classify the sentence))',
      type: 'classifySentence',
      data: {
        title: 'Identify if the given words are right or wrong.',
        types: [
          {
            name: 'Right',
            text: `Don’t, Shouldn’t, You’re`
          },
          {
            name: 'Wrong',
            text: `Dun’t, Amn’t, Not’ng`
          }
        ]
      }
    },
    {
      label: 'Comma',
      type: 'passage',
      id: 'comma-reading',
      data: {
        title: 'Comma',
        text: `We put a comma in the date and after greeting and closing in a letter. For example:
1. October 21, 2021
2. Dear Mary, I am…
3. Yours truly, Shaan

We also put commas in between the series of words. For example:
          
1.I like eating grapes, cabbage and noodles.
2.I have a pencil, crayons and eraser in my box.
3.He bought new clothes, shoes and a bag.`
      }
    },
    {
      id: 'fillup-11',
      label: 'Fill in the blanks',
      type: 'fillupOptions',
      data: {
        text: `I have my exams from November *, (., ?)* 21.
          He likes cricket, kho-kho and hockey *. (,, ?)*.
          January 31 *, (., ?)* 2024.
          May i come in *? (., ,)*
          She carries lunch *, (., ?)* bottle and bag to school.`,
        title: 'Choose the correct option. Tap on each blank for options.'
      }
    },
    {
      id: 'true-false-12',
      label: 'True or False (classify the sentence)',
      type: 'classifySentence',
      data: {
        title: 'State whether these statements are true or false.',
        types: [
          {
            name: 'True',
            text: `Commas are used in between the series of words.
              Commas are used in dates.`
          },
          {
            name: 'False',
            text: `A comma is used at the end of a sentence.
              Comma is similar to a full stop.`
          }
        ]
      }
    },
    {
      label: 'Question mark',
      type: 'passage',
      id: 'question-mark-reading',
      data: {
        title: 'Question mark',
        text: `We put a question mark at the end of a sentence that asks a question. For example:
1. May I come in?
2. Are you going to the party?
3. How old are you?`
      }
    },
    {
      id: 'fillup-13',
      label: 'Fill in the blanks',
      type: 'fillupOptions',
      data: {
        text: `What is this *? (., !)*
          What a pleasant day *! (?, .)*
          How many books do you have *? (., !)*
          I am an obedient child *. (!, ?)*
          Why is the sky blue *? (., !)*`,
        title: 'Choose the correct option. Tap on each blank for options.'
      }
    },
    {
      id: 'true-false-14',
      label: 'True or False (classify the sentence)',
      type: 'classifySentence',
      data: {
        title: 'State whether these statements are true or false.',
        types: [
          {
            name: 'True',
            text: `We use a question mark when we ask questions.
              A question mark is used at the end of a sentence.
              `
          },
          {
            name: 'False',
            text: `Question marks and exclamation marks are the same.
              A full stop can always be replaced by a question mark.`
          }
        ]
      }
    }
  ]
};
