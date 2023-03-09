export default {
  id: 'complement-8',
  label: 'Sentence Analysis',
  lockAfter: 3,
  list: [
    {
      label: 'Notes',
      type: 'passage',
      id: 'passage',
      data: {
        title: 'Sentence Analysis',
        text: [
          `# The Object of a Verb
When we use a verb transitively, we need an object to make the meaning of the sentence complete. Transitive verbs need an object to complete their meaning. When an object consists of more than one word, we have the object word and its attributes just like we have attributes for the subject word.`,
          {
            type: 'html',
            text: `<b>Example</b> -  The mother scolded the naughty <b>child</b>. (Here the <b>child</b> is the object word, and <b>naughty</b> are its attributes.)`
          },
          `# Direct and Indirect Objects
Very often, we require two objects with a transitive verb.`,
          {
            type: 'html',
            text: `<b>Example</b> - Priya gave <b>Reem</b> a <b>book</b>.`
          },
          `Here we have two objects of the verb gave. When we ask the question 'Priya gave what?' we get the answer a book, which is called the direct object of the verb. Now if we ask whom the book was given to, we get the answer, Reem. `,
          {
            type: 'html',
            text: `The word <b>Reem</b> is then the indirect object of the verb '<b>gave</b>'.`
          },
          `# The Complement 
Sometimes, the verb in the predicate is an intransitive verb, but it is incomplete by itself. It requires a noun, a pronoun, an adjective, etc. to complete the predicate. The word or group of words required to complete the predicate is called a complement. The complement of an intransitive verb describes the subject. It is therefore called the subject complement.`,
          {
            type: 'html',
            text: `<b>Example</b> - Mother seems <b>agitated</b>.`
          },
          {
            type: 'html',
            text: `<b>Example</b> - Jake appeared <b>unhappy</b>.`
          }
        ]
      }
    },
    {
      id: 'direct-indirect',
      label: 'Direct or Indirect',
      type: 'classifySentence',
      data: {
        title:
          'Classify the given sentences based on the presence of direct or indirect objects.',
        types: [
          {
            name: 'Direct',
            text: `Sally will help *you* with your housework. 
I need *your help*. 
He offered her *a flower*. 
John sold me *his car*`
          },
          {
            name: 'Indirect',
            text: `She sent *her friend* an email.
He gave *them* a bag full of money.
My father bought *us* a new TV set.
I wish *you* good luck.`
          }
        ]
      }
    },
    {
      label: 'Notes',
      type: 'passage',
      id: 'passage-2',
      data: {
        title: 'Complements',
        text: [
          `A complement is a word or word group that completes the predicate in a sentence. Subject complements follow a linking verb and provide additional information about the subject of the sentence. The subject complement is normally a noun or an adjective that defines or renames the subject in some way. Object complements follow and modify a direct object and provide additional information about it. An object complement can be a noun or adjective or any word acting as a noun or adjective.
Subject complements and object complements fill out and complete our sentences. Object complements provide more detail about the object of a sentence, while subject complements provide information about the subject of a sentence.`
        ]
      }
    },
    {
      type: 'selectWord',
      label: 'Identify Complement',
      id: 'select-word-2',
      lockAfter: 1,
      commonData: {
        title: 'Identify the complements from the following sentences.',
        multiSelect: true
      },
      data: [
        `Priya is extremely *intelligent*.
Shyla eventually became my best *friend*. 
Our neighbor's dogs are very *dangerous*. 
Meena's hair dye turned the water *pink*. `,

        `After our disagreement on the first day of school, James became my friend* for life. 
We painted the ceiling *blue*. 
You are making me *sad*. 
Preethi is a good *dancer*. 
Dina named her parakeet *Odi*.`,

        `The gift Kareena gave her brother was a *hamster*. 
Buck grew up in Oman and became an expert *horse rider* before reaching his 18th birthday. 
I once considered Neena my fiercest *enemy*. 
After reviewing the details of the case, the court pronounced the boy *not guilty*. 
By the second month of the drought, the river had run *dry*.`
      ]
    },
    {
      id: 'subject-object',
      label: 'Subject or Object Complement',
      type: 'classifySentence',
      data: {
        title:
          'Classify the sentence based on the presence of subject or object complement.',
        types: [
          {
            name: 'Subject',
            text: `Today is Monday.
Preethi is a student.
Your bike is amazing.
She seems nice.
We were exhausted after a day of tiring work.
The chief guest was late to the meeting.
I am irritated.`
          },
          {
            name: 'Object',
            text: `Mihika made her mom happy.
I painted my nails pink.
The company designated Tony the employee of the month.
Making handmade gifts makes my mind stress-free.
This makes the problem even more complicated.
Leela and Naksh named their daughter Naitra. 
What I said made my uncle angry.`
          }
        ]
      }
    }
  ]
};
