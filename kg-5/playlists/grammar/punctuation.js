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
        text: `It is used to show strong feelings of joy, sadness, confusion, surprise, etc. This mark can be used after a word, phrase or sentence. The sentences ending with an exclamation mark are called exclamatory sentences. A few examples of such sentences are:
1. Alas! My holidays are canceled.
2. Wow, it’s raining!
3. Oh God!
4. I hear thunder!`
      }
    },
    {
      id: '100',
      label: 'Fill in the blanks',
      type: 'fillup',
      commonData: {
        title: 'Choose the correct punctuation. Tap on each blank for options.',
        isPunctuation: true
      },
      data: [
        `Should I get the umbrella *? (., !)*
Yikes *! (., ?)* I hear thunder.
We should go inside *. (!, ?)*
Quick, call the dog *! (., ?)*
Have you completed your homework *? (., !)*`,

        `What a beautiful day *! (., ?)*
How old are you *? (., !)*
Alas *! (., ?)* My holidays are cancelled.
My name is Sheena *. (?, !)*
Oh my God *! (., ?)*`,

        `She is a smart girl *. (!, ?)*
The party was amazing *! (., ?)*
I will sleep at 9 o'clock *. (?, !)*
Watch out *! (., ?)*
I don't like him *. (?, !)*`
      ]
    },
    {
      id: '200',
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
      id: '300',
      label: 'True or False',
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
      id: '400',
      label: 'Fill in the blanks',
      type: 'fillup',
      commonData: {
        title: 'Choose the correct punctuation. Tap on each blank for options.',
        isPunctuation: true
      },
      data: [
        `Mr. Tarak is a firefighter *. (!, ?)*
How many balls are there *? (!, .)*
I am 10 years old *. (!, ?)*
What a beautiful day *! (., ?)*
My home is outside the city *. (?, !)*`,

        `When is your birthday *? (., !)*
He is my brother *. (!, ?)*
Fetch the stick *! (., ?)*
I love my dog very much *. (?, !)*
Are you coming to my house *? (., !)*`,

        `My little brother is very annoying *. (!, ?)*
Are you going to her farm house *? (., !)*
I love drawing *. (?, !)*
What is this *? (., !)*
She comes late everyday *. (?, !)*`
      ]
    },
    {
      id: '500',
      label: 'True or False',
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
        text: `The first letter of a sentence should always be capital. The word ‘I’ is also written in capital. In addition, names of special places, people and titles also start with a capital letter. Some examples are;
1. My name is Richa.
2. May I eat some fish?
3. Richa Malhotra
4. Mrs. Kapoor`
      }
    },
    {
      id: '600',
      label: 'Fill in the blanks',
      type: 'fillup',
      commonData: {
        title: 'Choose the correct option. Tap on each blank for options.'
      },
      data: [
        `My name is *Reena (reena)*.
I am 15 years *old (Old)*.
*Mrs. (mrs.)* Sharma is a kind *lady (Lady)*.
Ram is a very *smart (Smart)* boy.
She lives in *Delhi (delhi)*.`,

        `My brother's name is *Karan (karan)*.
I sleep by 9 *o'clock (O'Clock)*.
*She (she)* is my best friend.
*When (when)* is your birthday?
Do you know *her (Her)*?`,

        `Mrs.*Sonia (sonia)* is my teacher.
What a pleasant *day (Day)*!
*He (he)* sleeps late at night.
The *children (Children)* are playing in the park.
He is *sick (Sick)*.`
      ]
    },
    {
      id: '700',
      label: 'True or False',
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
        text: `An apostrophe is used for making a contraction. A contraction is made by combining two words into one. We put an apostrophe in place of a missing letter. Some examples are;
1. do+not= don’t
2. are+not= aren’t
3. can+not= can’t`
      }
    },
    {
      type: 'match',
      label: 'Match the following',
      id: '800',
      commonData: {
        title: 'Match the correct pairs. '
      },
      data: [
        `It is, It’s
She is, She’s
They are, They’re
You are, You’re
He will, He'll`,

        `Do not, Don't
Can not, Can't
Should not, Shouldn't
Are not, Aren't
Does not, Doesn't`,

        `Should have, Should've
They have, They've
She will, She'll
He is, He’s
I am, I’m`
      ]
    },
    {
      id: '900',
      label: 'Fill in the blanks',
      type: 'fillup',
      commonData: {
        title: 'Choose the correct option. Tap on each blank for options.'
      },
      data: [
        `*I’m (Im’)* a student.
We *shouldn’t (shoul’dnt)* lie.
*They’re (Theyr’e)* very helpful.
*It’s (Its)* a pleasant day.
*She’s (shes’)* a good girl.`,

        `I *don't (do'nt)* like that place.
I *haven't (have'nt)* seen her after the class.
*He'll (he'll)* bring chocolates tomorrow.
*It's (Its)* her birthday today.
He *doesn't (does'nt)* like bananas.`,

        `Mom says we *shouldn't (should'nt) lie.
My dad *doesn't (does'nt)* come home early.
*I'll (Ill)* visit my grandma this Sunday.
They *don't (do'nt)* like cake.
My dog *doesn't (does'nt)* bite.`
      ]
    },
    {
      id: '1000',
      label: 'Right or wrong',
      type: 'classifySentence',
      data: {
        title: 'Identify if the given words are right or wrong.',
        types: [
          {
            name: 'Right',
            text: `Don’t,
                  Shouldn’t
                   You’re`
          },
          {
            name: 'Wrong',
            text: `Dun’t
                   Amn’t
                   Not’ng`
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
1. I like eating grapes, cabbage, and noodles.
2. I have a pencil, crayons, and eraser in my box.
3. He bought new clothes, shoes, and a bag.`
      }
    },
    {
      id: '1100',
      label: 'Fill in the blanks',
      type: 'fillup',
      commonData: {
        title: 'Choose the correct punctuation. Tap on each blank for options.',
        isPunctuation: true
      },
      data: [
        `I have my exams from November *, (., ?)* 21.
He likes cricket, kho-kho, and hockey *. (,, ?)*.
January 31 *, (., ?)* 2024.
May i come in *? (., ,)*
She carries lunch *, (., ?)* bottle, and bag to school.`,

        `He will eat *, (., ?)* play, and complete his homework.
She has a lot of notebooks, pens *, (., ?)* and pencils.
I'm very good at racing and singing *. (?, ,)*
Do you have a tape and a scissors *? (., ,)*
I like eating bananas *, (., ?)* chocolates *, (., ?)* and apples.`,

        `Today's date is November 22 *, (., ?)* 2022 *. (?, ,)*
How old is your brother *? (., ,)*
I love my mom *, (., ?)* my dad *, (., ?)* and my friends.
My name is Rakesh *. (?, ,)*
He is always late *. (?, ,)*`
      ]
    },
    {
      id: '1200',
      label: 'True or False',
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
        A comma is similar to a full stop.`
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
      id: '1300',
      label: 'Fill in the blanks',
      type: 'fillup',
      commonData: {
        title: 'Choose the correct punctuation. Tap on each blank for options.',
        isPunctuation: true
      },
      data: [
        `What is this *? (., !)*
What a pleasant day *! (?, .)*
How many books do you have *? (., !)*
I am an obedient child *. (!, ?)*
Why is the sky blue *? (., !)*`,

        `My parents love me a lot *. (?, !)*
Are you good at sports *? (., !)*
Watch out *! (?, .)*
Where do you live *? (., !)*
What do you like *? (., !)*`
      ]
    },
    {
      id: '1400',
      label: 'True or False',
      type: 'classifySentence',
      data: {
        title: 'State whether these statements are true or false.',
        types: [
          {
            name: 'True',
            text: `We use a question mark when we ask questions.
            A question mark is used at the end of a sentence.`
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
