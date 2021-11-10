export default {
    id: 'pronouns-1',
    label: 'Pronouns-1',
    pdf: '',
    list: [
      {
        label: 'Demonstrative Pronouns',
        type: 'passage',
        id: 'demonstrative-pronouns-reading',
        data: {
          title: 'Demonstrative Pronouns',
        text: `Demonstrative pronouns represent nouns. It expresses the position and the time. It can be both singular and plural. These pronouns include this, that, these and those. Some examples are;
1. This is great.
2. Is that yours?
3. Eat these quickly.
4. Throw those away.`
    }
      },
      {
        id: '100',
        type: 'sequence',
        label: 'Jumbled Words',
        data: {
          title: 'Identify these demonstrative pronouns.',
          text: 'This, That, These, Those'
        }
      },
      {
        type: 'selectWord',
        label: 'Identify',
        id: '200',
        commonData: {
          title: 'Tap the demonstrative pronouns in these sentences.'
        },
        data: [
`*This* idea is amazing.
Is *that* your book?
Eat *these* chocolates after lunch.
Throw *those* rolls away.`,

`*This* is my mother’s saree.
*That* looks like a rat.
*These* are nice flowers.
*Those* are my clothes.`,

`I would like *those*, please.
I am not sure *that* is how you do it.
Could you help me move *these*?
*This* is crazy!`
        ]
      },
      {
        label: 'Classify-1',
        id: '300',
        type: 'classifySentence',
        commonData: {
          title: 'Identify whether these sentences have demonstrative pronouns or not.',
          types: ['Yes', 'No']
        },
        data: [
          [
            `These are very yummy.
            This is the most comfortable.
            Those belong to Sakshi.`,
  
            `It is a flower.
            She has my book.
            My name is Rani.`
          ],
          [
            `Do you like this?
            These are my friends.
            My mom gifted me that.`,
  
            `My father is very good.
            The teacher went to school.
            I forgot to eat.`
          ]
        ]
      },
      {
        label: 'Classify-2',
        id: '400',
        type: 'classifySentence',
        data: {
          title: 'Identify whether these pronouns are singular or plural.',
          types: [
            {
              name: 'Singular',
              text: `This
                     That`
            },
            {
              name: 'Plural',
              text: `These
                     Those`
            }
          ]
        }
      },
      {
        type: 'rightOne',
        label: 'Correct Spelling',
        id: '500',
        data: {
          title: 'Identify the correct spelling.',
          text: `This, Thiis
          That, Dhat
          These, Theese
          Those, Thoose`
        }
      },
      {
        id: '600',
        label: 'Multiple Choice Questions-1',
        type: 'mcq',
        data: {
          title: 'Select the correct demonstrative pronoun for each sentence.',
          questions: [
            {
              qText: 'I bought______tool yesterday.',
              options: `that, those`
            },
            {
              qText: 'I like______books.',
              options: `these, this`
            },
            {
              qText: '______is my moms phone.',
              options: `That, Those`
            },
            {
              qText: 'None of______answers are correct.',
              options: `these, this`
            },
            {
              qText: '______was my fathers ring.',
              options: `This, These`
            }
          ]
        }
      },
      {
        id: '700',
        label: 'Multiple Choice Questions-2',
        type: 'mcq',
        data: {
          title: 'Select the correct demonstrative pronoun for each sentence.',
          questions: [
            {
              qText: '______is mine.',
              options: `This, These, Such`
            },
            {
              qText: 'There is no end to______.',
              options: `this, them, such`
            },
            {
              qText: 'Are______your books?',
              options: `those, them, this`
            },
            {
              qText: '_______are looking nice.',
              options: `These, Them, Such`
            },
            {
              qText: '_______was such a good experience.',
              options: `That, Them, Those`
            }
          ]
        }
      },
      {
        label: 'Personal Pronouns',
        type: 'passage',
        id: 'personal-pronouns-reading',
        data: {
          title: 'Personal Pronouns',
          text: `A personal pronoun is a word that takes place of naming words. Personal pronouns are he, she, it and they. 
          
          For example: 
          Rahul is a good boy. 
          'Rahul' is a noun in this sentence. So, it can be replaced with the personal pronoun 'he'. So this sentence can also be written as, 
          He is a good boy.

Some more examples of personal pronouns are:
1. He eats grapes.
2. She likes pear.
3. You can have it.
4. They like fruits.
5. He runs fast.
6. She jumps high.
7. They are playing outside.
8. Aman likes it.`
        }
      },
      {
        id: '800',
        label: 'Drag and Drop',
        type: 'group',
        data: {
          title: 'Identify which of these words are pronouns and which are not.',
          types: [
            {
              name: 'Pronouns',
              text: 'He, She, It, They'
            },
            {
              name: 'Not Pronouns',
              text: 'Sleep, Walk, Run, Sit'
            }
          ]
        }
      },
      {
        label: 'Select word',
        type: 'selectWord',
        id: '900',
    
        data: {
            title: `Tap on the pronouns in each sentence.`,
            text: `*He* puts the book on the table.
            The children play with *it*.
            *They* have a lot of toys.
            *It* is my favorite book.
            *She* is playing outside.`
        }
    },
    {
        id: '1000',
        label: 'Match the following',
        type: 'match',
        commonData: {
            title: 'Match the pairs.'
        },
       data: [
         `Reena, She
         Rahul, He
         Book, It
         Children, They`,
         
`Pen, It
Ram and Shaam, They
Richa, She
Rony, He`,
             ]
           },
           {
            label: 'Classify',
            id: '2000',
            type: 'classifySentence',
            commonData: {
              title: 'Identify if these sentences have personal pronouns or not.',
              types: ['Yes', 'No']
            },
            data: [
              [
                `She is a good girl.
                It is a good book.
                They are in the park.`,
      
                `Karan is playing.
                Sakshi is a good student.
                Anya and Avi are very smart.`
              ],
              [
                `It is on the table.
                She has kept it safely.
                He is sleeping.`,
      
                `The eraser is used to correct mistakes.
                The dress is purple.
                Racing cars are very fast.`
              ],
              [
                `They go to the movies.
                He likes cake.
                She is going to school.`,
      
                `Ravi is eating.
                The phone is ringing.
                The girls are sleeping.`
              ]
            ]
          }
        ]
      };
