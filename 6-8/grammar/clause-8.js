export default {
  id: 'clause-8',
  label: 'Clauses',
  lockAfter: 3,
  list: [
    {
      label: 'Notes',
      type: 'passage',
      id: 'passage',
      data: {
        title: 'Clauses',
        text: [
          `# Clauses
A group of words containing a subject and a finite verb is called a clause. It is formed when a subject and a predicate are combined to communicate an idea. 
# Features of a clause
1. A clause has a subject and a predicate.
2. A clause has a finite verb.
3. The subject may be both implicit and explicit.
# Subordinate Clause 
Subordinate clauses are introduced by a subordinating conjunction (because, though, however, before) or relative pronouns (who, what, which) that function as subordinating conjunctions. They are mainly of four types.
1. Noun/Nominal Clause: When a subordinate clause performs the function of a standard noun in a sentence, it is known as a noun clause or nominal clause. It can be the subject or the object of a transitive verb, subject complements, delayed subjects or appositives.`,
          {
            type: 'html',
            text: `<b>Example</b> - Rahima said <b>that she wanted to become an author</b>.`
          },
          `2. Adjective/Relative Clause: An adjective clause does the work of an adjective and modifies the noun, pronoun, or noun equivalent in a main clause or a dependent clause.`,
          {
            type: 'html',
            text: `<b>Example</b> - Nisha, <b>who is my neighbor</b>, is an actress`
          },
          `3. Adverb Clause: When a verb is modified in the main clause and made to do the work of an adverb, it is called an adverb clause.`,
          {
            type: 'html',
            text: `<b>Example</b> - Hari <b>came to meet me at the station</b> as I was leaving.`
          },
          `Adverb clauses can be of various kinds, depending on their functions. (Adverb clause of time, place, reason, result, condition, concession, manner and degree)
4. Conditional/If Clause: They are used
a) to express cause-effect relationships for physical conditions.
b) to suggest habitual actions.
c) to show real conditions.
d) to show actions when certain conditions are fulfilled.
e) to show willingness and likelihood/probability.
f) for unreal conditions.
g) for imaginary conditions.`,
          {
            type: 'html',
            text: `<b>Example</b> - <b>If you see dark clouds in the sky</b>, you can expect rain.`
          },
          {
            type: 'html',
            text: `<b>Example</b> - <b>Unless you tell me your problems</b>, I cannot help.`
          },
          {
            type: 'html',
            text: `<b>If I had come to the party</b>, I could have met my friend.`
          }
        ]
      }
    },
    {
      type: 'selectWord',
      label: 'Identify Subordinate Clause',
      id: 'select-word',
      lockAfter: 1,
      commonData: {
        title: 'Identify the subordinate clauses in the sentences given below.',
        multiSelect: true
      },
      data: [
        `The director is the person *to whom you should write*.
Marina did not make the same mistakes *that her sister did*.
*If you want the minister to inaugurate the function*, you must plan early.
I know the student *who stood first*.
*Before I leave for London*, I want to meet you.
*If I had enough money*, I would have bought that house.`,

        `*Whenever you may settle down*, do not forget your roots.
I was not able to attend the function *because I was ill*.
He always acts as *if he knows everything*.
*What I need now* is a cup of coffee.
No one knew that *he was planning to resign*.
*That he is the only boy in the group* does not qualify him to be the leader.`,

        `The bus *that you have been waiting for* has arrived.
I know the person *who wrote that article*.
This is the reason *why I don't like traveling*.
*If you see dark clouds in the sky*, you can expect rain.`,

        `*Unless you tell me your problems*, I cannot help.
*If I had come to the party*, I could have met my friend.
*If you exercise daily*, you will reduce weight faster.`
      ]
    },
    {
      id: 'adjective-conditional',
      label: 'Adjective or Conditional',
      type: 'classifySentence',
      data: {
        title:
          'Classify the following sentences as an Adjective Clause or Conditional Clause.',
        types: [
          {
            name: 'Adjective',
            text: ` The director is the person to whom you should write.
The bus that you have been waiting for has arrived.
I know the person who wrote that article.
This is the reason why I don't like traveling.`
          },
          {
            name: 'Conditional',
            text: `If you see dark clouds in the sky, you can expect rain.
Unless you tell me your problems, I cannot help.
If I had come to the party, I could have met my friend.
If you exercise daily, you will reduce weight faster.`
          }
        ]
      }
    },
    {
      id: 'adverb-noun',
      label: 'Adverb or Noun',
      type: 'classifySentence',
      data: {
        title:
          'Classify the following sentences as Adverb Clause or Noun Clause.',
        types: [
          {
            name: 'Adverb',
            text: `Before I leave for London, I want to meet you.
Whenever you may settle down, do not forget your roots.
I was not able to attend the function because I was ill.
He always acts as if he knows everything.`
          },
          {
            name: 'Noun',
            text: `What I need now is a cup of coffee.
No one knew that he was planning to resign.
That he is the only boy in the group does not qualify him to be the leader.
The researcher said that he had found the chemical compound.`
          }
        ]
      }
    },
    {
      id: 'mcq',
      label: 'Choose the correct alternative',
      type: 'mcq',
      data: {
        title: 'Complete the sentences using appropriate clauses.',
        questions: [
          {
            qText: 'Sangitha sang _________________.',
            options: `like a professional, as a professional, thinking as a professional`
          },
          {
            qText: 'Akash hid the box ___________________.',
            options: `under the table, at under the table, in the table`
          },
          {
            qText: 'Kartika left the office _______________.',
            options: `after finishing her work, finishing her work, at finishng her work`
          },
          {
            qText: 'Parvathi is a girl ______________________.',
            options: `who is good at dance, is good at dance, good at dance`
          },
          {
            qText: '____________________, we can go home together.',
            options: `If we meet after class, We meet after class, Meet after class`
          }
        ]
      }
    },
    {
      label: 'Notes',
      type: 'passage',
      id: 'passage-2',
      data: {
        title: 'Relative Clauses',
        text: [
          `Relative clauses are non-essential parts of a sentence. They may add meaning, but if they are removed, the sentence will still function grammatically.
1. A defining clause tells us which specific person or thing we are talking about in a larger group of people or things.`,
          {
            type: 'html',
            text: `<b>Example</b> - The woman <b>who visited me in the hospital</b> was very kind.`
          },
          `2. A non-defining clause gives us more information about the person or thing we are talking about.`,
          {
            type: 'html',
            text: `<b>Example</b> - The farmer, <b>whose name was Ram</b>, sold us five pounds of cherries.`
          }
        ]
      }
    },
    {
      type: 'selectWord',
      label: 'Identify Relative Clause',
      id: 'select-word-2',
      lockAfter: 1,
      commonData: {
        title: 'Identify the relative clauses from the following sentences.',
        multiSelect: true
      },
      data: [
        `The woman *who visited me in the hospital* was very kind.
The umbrella *that I bought last week* is already broken.
The man *who stole my backpack* has been arrested.
The weather *that we had this summer* was beautiful.`,

        `The farmer, *whose name was Ram*, sold us five pounds of cherries.
Elephants, *which are the largest land mammals*, live in herds of ten or more.
The author, *who graduated from the same university as I did*, gave a wonderful motivation speech.
My mother, *who is fifty*, lives in Dubai.`
      ]
    },
    {
      id: 'defining-non-defining',
      label: 'Defining or Non-defining',
      type: 'classifySentence',
      data: {
        title:
          'Classify the following sentences based on the type of relative clause used.',
        types: [
          {
            name: 'Defining',
            text: ` The woman who visited me in the hospital was very kind.
The umbrella that I bought last week is already broken.
The man who stole my backpack has been arrested.
The weather that we had this summer was beautiful.`
          },
          {
            name: 'Non-defining',
            text: `The farmer, whose name was Ram, sold us five pounds of cherries.
Elephants, which are the largest land mammals, live in herds of ten or more.
The author, who graduated from the same university as I did, gave a wonderful motivation speech.
My mother, who is fifty, lives in Dubai.`
          }
        ]
      }
    }
  ]
};
