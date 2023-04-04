export default {
  id: 'speech-8',
  label: 'Direct and Indirect Speech',
  lockAfter: 3,
  list: [
    {
      label: 'Notes',
      type: 'passage',
      id: 'passage',
      data: {
        title: 'Direct and Indirect Speech',
        text: [
          `1. Direct Speech: 
a) The Reported Speech is put within Inverted Commas. (“ ”)
b) The First word of the Reported Speech begins with a capital Letter.
c) The Reported Speech is separated by a comma (,) from the Reporting Verb.
2. Indirect Speech:
a) Inverted Commas (“ ”) are not used in Reported Speech. It is generally introduced by the Conjunction.
b) The comma separating the Reporting Verb from the Reported Speech is removed.
c) The Tense of the Reporting Verb is never changed.
d) The Question Mark (?) and the Mark of Exclamation (!) are not used.
e) The Interrogative, the Imperative and the Exclamatory sentences are put as statements.
3. Change of Tense: While changing Direct Speech into Indirect Speech, the rule of Sequence of Tenses is followed. If the Reporting Verb is in the Present or Future Tense, the tense of the verb in the Reported Speech is not changed at all.`
        ]
      }
    },
    {
      id: 'direct-indirect',
      label: 'Direct or Indirect',
      type: 'classifySentence',
      data: {
        title: 'Classify the sentence into Direct or Indirect Speech.',
        types: [
          {
            name: 'Direct',
            text: `You say, “She is a nurse.”
I say, “Mohan is a good boy.”	
I say to Sham, “Ram is a student”.	
He says to me, “The peon rings the bell.”	
I shall say to him, “She will go to school.”
I shall say, “Rita is a doctor.”`
          },
          {
            name: 'Indirect',
            text: `You say that she is a nurse.
I say that Mohan is a good boy.
I tell Sham that Ram is a student.
He tells me that the peon rings the bell.
I shall tell him that she will go to school.
I shall say that Rita is a doctor.`
          }
        ]
      }
    },
    {
      id: 'mcq',
      label: 'Indirect Speech',
      type: 'mcq',
      data: {
        title:
          'Choose the correct form of Indirect Speech for the sentence given in Direct Speech.',
        questions: [
          {
            qText: 'Rahul told to me, “When are you leaving?”',
            options: `Rahul asked me when I was leaving, Rahul asked me when I will be leaving.`
          },
          {
            qText: '“Where do you live?” the stranger asked Aladdin.',
            options: `The stranger asked Aladdin where he lived, Where do you live asked the stranger to Alladin`
          },
          {
            qText: 'The teacher said to Shelly, “Why are you laughing?”',
            options: `The teacher asked Shelly why he was laughing, The teacher asks Shelly why she is laughing`
          },
          {
            qText: "Dhronacharya said to Arjun, “Shoot the bird's eye.”",
            options: `Dhronacharya ordered Arjun to shoot the fish's eye, Dhronacharya said to Arjun to shoot the fish's eye`
          },
          {
            qText: '“Call the first convict,” said the jury.',
            options: `The jury ordered to call the first convict, The jury said to call the convict first`
          },
          {
            qText: '“Call the ambulance,” said the man.',
            options: `The man urged to call the ambulance, Call the ambulance said the man`
          },
          {
            qText: 'Bruce said to me, “I shall do the work.”',
            options: `Bruce said to me he would do the work, Bruce said he can do all the work`
          }
        ]
      }
    },
    {
      id: 'fillup',
      label: 'Direct Speech',
      type: 'fillup',
      commonData: {
        noOptions: true,
        title: 'Fill in the blanks with suitable words.'
      },
      lockAfter: 1,
      data: [
        `My mother told me that I was wrong.
My mother said to me, “You *were* wrong.”

Mr Richard *requested* me to *wait there* till he returned.
Mr Richard said to me, “Please wait here till I return.”`,

        `The captain *applauded* me, saying that I *had played* well.
The captain said to me, “Bravo! You have played well.”

Raj *exclaimed* sadly that his pet *died*.
Raj said, “Alas! My pet died.”`,

        `Ruchi said that she *might* go there.
Ruchi said, “I may go there.”

Bucky *asked* Steve if he *heard* him.
Bucky said to Steve, “Do you hear me?”`,

        `The boy asked to let *him* come in.
The boy said, “Let me come in.”

Granny *prayed* that God *might* bless me.
Granny said to me, “May God bless you.”`
      ]
    }
  ]
};
