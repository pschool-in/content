export default {
  id: 'voice-7',
  label: 'Active and Passive Voice',
  lockAfter: 3,
  list: [
    {
      label: 'Notes',
      type: 'passage',
      id: 'voice',
      data: {
        title: 'Active and Passive Voice',
        text: [
          `Active Voice: In active voice, the subject of the sentence performs the action denoted by the verb. 
Eg - I made a mistake.
Passive Voice: In passive voice, the subject of the sentence receives the action denoted by the verb. 
Eg - A mistake was made by me.
# Rules
To change a sentence from active voice to passive voice, follow these steps:
1. Make the object of the active verb the subject of the passive verb.
2. Make the subject of the active verb the object of a preposition in the passive voice.
3. Use the past participle form of the finite verb in the passive voice, along with a form of the verb "to be."
4. If the subject in the active voice is a vague or indefinite pronoun, it can be dropped in the passive voice, along with the preposition "by."
5. The tense of the verb remains the same.
=> Passive voice cannot be formed for sentences that are in Present Perfect Continuous, Past Perfect Continuous, Future Continuous, and Future Perfect Continuous tenses.`
        ]
      }
    },
    {
      label: 'Multiple Choice Questions',
      type: 'mcq',
      id: 'mcq-voice',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: `What is the Active Voice?`,
            options: `When the subject of a verb acts, When the object of a verb acts, When the object of a verb becomes the subject `
          },
          {
            qText: `What is the Passive Voice?`,
            options: `When the object of the active voice becomes the subject, When the object of a verb acts, When the subject of a verb acts`
          },
          {
            qText: `What is the rule for changing a verb from the Active Voice to the Passive Voice?`,
            options: `The object of the active verb is made the subject of the passive verb, The subject of the active verb is made the subject of the passive verb, The object of the active verb is made the object of some preposition`
          },
          {
            qText: `What form of the verb 'to be' is used before the past participle form of the finite verb in the passive voice?`,
            options: `has been, will be, could be`
          }
        ]
      }
    },
    {
      id: 'true-false',
      label: 'True or False',
      type: 'classifySentence',
      data: {
        title: 'True or False',
        types: [
          {
            name: 'True',
            text: `The object of the Active Verb becomes the subject of the Passive Verb.
The Subject of the Active Verb becomes the object of some Preposition.
The Verb of the Active Voice gets the Past Participle form of the Finite Verb and some form of the verb 'to be' will be used before it in the passive voice.`
          },
          {
            name: 'False',
            text: `Some vague and indefinite subjects are included in the passive voice.
The Tense of the Verb changes in the passive voice.`
          }
        ]
      }
    },
    {
      id: 'fill-up-voice',
      label: 'Fill in the blanks',
      type: 'fillup',
      commonData: {
        title: `Complete the following sentences by putting the Verbs in the appropriate Passive Voice form.`,
        noOptions: true
      },
      data: [
        `She was *brought* up by her aunt. (bring) 
Invitation cards have *been sent* to all her friends. (send) 
You will *be invited* to the feast. (invite)
The result was *declared* last Monday. (declare)
They were *alarmed* at the report of the fire. (alarm) 
We were *shocked* at his failure. (shock) 
A mistake was *made* by me. (made)
His work has *been done* by him. (do) `,

        `The package was *delivered* by the postman. (deliver)
The letter was *written* by the secretary. (write)
The glass was *broken* by the child. (broke)
The concert was *enjoyed* by the audience. (enjoy)
The game *was won* by the team. (win)
The song *was sung* by the singer. (sing)
The food *was cooked* by the chef. (cook)
The decision *was made* by the committee. (make)`,

        `The lesson *was taught* by the teacher. (teach)
The garden *was tended* by the gardener. (tend)
The report *was prepared* by the analyst. (prepare)
The project *was completed* by the team. (complete)
The question *was answered* by the expert. (answer)
The medicine *was prescribed* by the doctor. (prescribe)
The contract *was signed* by the parties. (sign)
The mistake was *made* by the employee. (make)`
      ]
    },
    {
      id: 'active-passive',
      label: 'Active or Passive',
      type: 'classifySentence',
      data: {
        title: 'Classify the given sentences as Active or Passive Voice.',
        types: [
          {
            name: 'Active',
            text: `Rama helps Hari.
The mason is building the wall.
Some boys were helping the wounded man.
Who did this?`
          },
          {
            name: 'Passive',
            text: `Hari is helped by Rama.
The wall is being built by the mason.
The wounded man was being helped by some boys.
By whom was this done?`
          }
        ]
      }
    },
    {
      id: 'mcq-2',
      label: 'Multiple Choice Questions - Passive Voice',
      type: 'mcq',
      data: {
        title:
          'Choose the correct form of the Passive voice of the sentence given in Active voice.',
        questions: [
          {
            qText: 'All his friends laughed at him.',
            options: `He was laughed at by all his friends, He is laughed at by all his friends, All his friends are laughing at him`
          },
          {
            qText: 'They made him king.',
            options: `He was made king, He is the king, He is made king`
          },
          {
            qText: 'They use video for teaching the students.',
            options: `Video is used for teaching the students, The students are taught by using video, Video was being used for teaching the students`
          },
          {
            qText: "One should keep one's promises.",
            options: `Promises should be kept, One's promises should be kept by one, Promises are to be kept by one`
          },
          {
            qText: 'When will you return the book?',
            options: `When will the book be returned, When are you going to return the book?, When was the book returned?`
          },
          {
            qText: 'Someone has picked my pocket.',
            options: `My pocket has been picked, My pocket was picked by someone, My pocket was picked`
          },
          {
            qText: 'Circumstances will oblige me to go.',
            options: `I shall be obliged to go, I am obliged to go, Circumstances made me go`
          }
        ]
      }
    },
    {
      id: 'mcq-3',
      label: 'Multiple Choice Questions - Active Voice',
      type: 'mcq',
      data: {
        title:
          'Choose the correct form of the Active voice of the sentence given in Passive voice.',
        questions: [
          {
            qText: 'Admittance was refused to him by the guard.',
            options: `The guard refused him admittance, He was refused admittance by the guard, The guard refused his entry`
          },
          {
            qText: 'Grammar is taught to us by Mr. Noah.',
            options: `Mr. Noah teaches us grammar, We are taught grammar by Mr. Noah, Mr. Noah taught us grammar`
          },
          {
            qText: 'A ticket will be given to you by the manager.',
            options: `The manager will give you a ticket, You will be given a ticket by the manager, Manager gave you a ticket`
          },
          {
            qText: 'By whom was French taught to you.',
            options: `Who taught you French?, Who were you taught french by?, By whom were you taught French?`
          },
          {
            qText: 'A chair was handed to her by him.',
            options: `He handed her a chair, She was handed a chair, A chair was given to her`
          }
        ]
      }
    },
    {
      type: 'makeSentence',
      label: 'Convert to Passive Voice',
      id: 'make-sentence',
      commonData: {
        title:
          'Convert the Active Voice to Passive Voice. Drag & Drop the words from the bottom and construct the sentence.',
        extras: 'is because of an the them us'
      },
      data: [
        `They built a new house last year. |  a new house was built by them last year
Someone stole my wallet. | my wallet was stolen by someone
The chef is cooking the meal. | the meal is being cooked by the chef
The storm destroyed the house. | the house was destroyed by the storm
The police caught the thief. | the thief was caught by the police`,

        `The students asked the teacher a question. | the teacher was asked a question by the students
The waiter brought us our food. | our food was brought to us by the waiter
The professor is grading the exams. | the exams are being graded by the professor
The thief stole my car last night. | my car was stolen by the thief last night
The company offered me a job. | a job was offered to me by the company`,

        `The dog chased the cat up the tree. | the cat was chased up the tree by the dog
The teacher praised the students. | the students were praised by the teacher
The kids are playing in the park.  | the park is being played in by the kids
The company hired a new employee. | a new employee was hired by the company
The singer will sing a new song. | a new song will be sung by the singer `
      ]
    },
    {
      id: 'fill-up-voice-2',
      label: 'Fill in the blanks',
      type: 'fillup',
      commonData: {
        title: `Complete the following sentences by putting the Verbs in the appropriate form.`,
        noOptions: true
      },
      data: [
        ` The company will release a new product next month.
A new product will *be released* by the company next month
The teacher gave the students a homework assignment.
A homework assignment *was given* to the students by the teacher.
The doctor prescribed a new medication for the patient.
A new medication *was prescribed* for the patient by the doctor.
The company is redesigning its website.
Their website is *being redesigned* by the company.`,

        `The principal will announce the winner of the competition.
The winner of the competition will *be announced* by the principal
The company paid the employees last week.
The employees *were paid* by the company last week.
The company is going to hire new employees.
New employees *are going* to be hired by the company.
The tornado damaged several buildings in the town.
Several buildings in the town *were damaged* by the tornado.`,

        ` The company made a huge profit last quarter.
A huge profit *was made* by the company last quarter.
The company is launching a new advertising campaign.
A new advertising campaign *is being* launched by the company.
The teacher will give the students a quiz next week.
A quiz will *be given* to the students by the teacher next week.
The company is training its new employees.
The new employees *are being* trained by the company.`,

        `The librarian checked out a book for me.
A book *was* checked out for me by the librarian.
The company is upgrading its computer systems.
Their computer systems *are being* upgraded by the company.
The company will announce the new CEO next week.
The new CEO will be announced *by* the company next week.
The company gave the employees a bonus.
A bonus *was given* to the employees by the company.`,

        `The workers are building a new factory.
A new factory *is being* built by the workers.
The storm destroyed the old building.  
The old building *was destroyed* by the storm.
The company will launch a new product next month.  
A new product will *be launched* by the company next month.
The teacher is teaching a lesson.  
A lesson *is being* taught by the teacher.`,

        ` The artist painted a beautiful picture.  
A beautiful picture *was painted* by the artist.
The waiter brought the food to the table.  
The food *was* brought to the table by the waiter.`
      ]
    }
  ]
};
