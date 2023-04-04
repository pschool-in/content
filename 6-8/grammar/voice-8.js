export default {
  id: 'voice-8',
  label: 'Active and Passive Voice',
  lockAfter: 3,
  list: [
    {
      label: 'Notes',
      type: 'passage',
      id: 'passage',
      data: {
        title: 'Active and Passive Voice',
        text: [
          `# Active and Passive Voice
Active Voice: When the Subject of a Verb acts, the Verb is said to be in the Active Voice.
Example - I made a mistake.
Passive Voice: When the object of the Active Voice becomes the Subject, the Verb is said to be in the Passive Voice.
Example - A mistake was made by me.
# Rules for changing a Verb from the Active Voice into the Passive Voice
1. The object of the Active Verb is made the Subject of the Passive Verb.
2. The Subject of the Active Verb is made the object of some Preposition (generally 'by').
3. The Verb of the Active Voice gets the Past Participle form of the Finite Verb and some form of the verb 'to be' [be, is, am, are, has been, was, were, had been, will be, is being etc.) will be used before it in the passive voice.
4. Some vague and indefinite subjects like 'everyone', 'they', 'people', 'someone', 'somebody', 'everybody', 'anybody', etc. are dropped if they are the subjects of the active voice. If so, the preposition 'by' is also not used.
5. The Tense of the Verb does not change.
The following four types of sentences cannot be changed into passive voice: Present Perfect Continuous, Past Perfect Continuous, Future Continuous and Future Perfect Continuous.`
        ]
      }
    },
    {
      id: 'fill-up',
      label: 'Fill in the blanks',
      type: 'fillup',
      commonData: {
        title: `Complete the following sentences putting the Verbs in the appropriate Passive Voice form.`
      },
      data: [
        `She *was brought (bring)* up by her aunt. 
Invitation cards *have been sent (send)* to all her friends. 
You *will be invited (invite)* to the feast. 
The result *was declared (declare)* on last Monday.`,

        `They *were alarmed (alarm)* at the report of the gun. 
We *were shocked (shock)* at his failure. 
A mistake *was made (made)* by me. 
His work *has been done (do)* by him. `
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
Sita loves Savitri.
The mason is building the wall.
Some boys were helping the wounded man.
Who did this?`
          },
          {
            name: 'Pasive',
            text: `Hari is helped by Rama.
Savitri is loved by Sita.
The wall is being built by the mason.
The wounded man was being helped by some boys.
By whom was this done?`
          }
        ]
      }
    },
    {
      id: 'mcq',
      label: 'Passive Voice',
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
            options: `When will the book be returned?, When are you going to return the book?, When was the book returned?`
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
      id: 'mcq-2',
      label: 'Active Voice',
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
            qText: 'By whom was French taught to you?',
            options: `Who taught you French?, Who were you taught french by?, By whom were you taught French?`
          },
          {
            qText: 'A chair was handed to her by him.',
            options: `He handed her a chair, She was handed a chair, A chair was given to her`
          }
        ]
      }
    }
  ]
};
