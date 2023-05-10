export default {
  id: 'reported-speech-7',
  label: 'Direct and Indirect Speech',
  lockAfter: 3,
  list: [
    {
      label: 'Notes',
      type: 'passage',
      id: 'speech',
      data: {
        title: 'Direct and Indirect Speech',
        text: [
          `Direct and indirect speech, also known as reported speech, is the way of reporting what someone else said or thought. In direct speech, we quote the exact words of the speaker, while in indirect speech, we report what the speaker said without using their exact words.`,
          {
            type: 'html',
            text: `Eg: Direct speech: <i>"I am going to the market."</i><br>
Indirect speech: <i>She said that she was going to the market.</i><br><br>
Direct speech: <i>"I will help you with your homework."</i><br>
Indirect speech: <i>He promised to help me with my homework.</i><br><br>
Direct speech: <i>"I love to read books."</i><br>
Indirect speech: <i>She said that she loved to read books.</i><br><br>
Direct speech: <i>"I saw a beautiful bird in the tree."</i><br>
Indirect speech: <i>He told me that he had seen a beautiful bird in the tree.</i><br><br>
Direct speech: <i>"I cannot come to the party tonight."</i><br>
Indirect speech: <i>She said that she could not come to the party that night.</i>`
          },
          `# Rules          
1. Direct Speech: 
a) The Reported Speech is put within Inverted Commas. (“ ”)
b) The First word of the Reported Speech begins with a capital Letter.
c) The Reported Speech is separated by a comma (,) from the Reporting Verb.
2. Indirect Speech:
a) Inverted Commas (“ ”) are not used in Reported Speech.
b) The comma separating the Reporting Verb from the Reported Speech is removed.
c) The Tense of the Reporting Verb is never changed.
d) The Question Mark (?) and the Mark of Exclamation (!) are not used.
e) The Interrogative, the Imperative and the Exclamatory sentences are put as statements.
3. Change of Tense: While changing Direct Speech into Indirect Speech, the rule of Sequence of Tenses is followed. If the Reporting Verb is in the Present or Future Tense, the tense of the verb in the Reported Speech is not changed at all.`
        ]
      }
    },
    {
      label: 'Multiple Choice Questions',
      type: 'mcq',
      id: 'mcq-speech',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: `Which of the following is a rule of Direct Speech?`,
            options: `The Reported Speech is put within Inverted Commas (“ ”), The Reported Speech is not separated by a comma from the Reporting Verb, Inverted Commas are not used in Reported Speech. `
          },
          {
            qText: `Which of the following is a rule of Indirect Speech?`,
            options: `The comma separating the Reporting Verb from the Reported Speech is always used, Inverted Commas (“ ”) are used in Reported Speech, The Tense of the Verb is always changed`
          },
          {
            qText: `What is the rule of changing tense while converting Direct Speech into Indirect Speech?`,
            options: `The rule of Sequence of Tenses is followed, The tense of the verb in the Reported Speech is always changed, The tense of the Verb is always changed`
          },
          {
            qText: `What is the difference between direct and indirect speech?`,
            options: `Direct speech is when the speaker's exact words are repeated, while indirect speech is when the speaker's words are summarized or paraphrased.
Direct speech is used in formal contexts, while indirect speech is used in informal contexts.
Direct speech is always written with quotation marks, while indirect speech is not.`
          },
          {
            qText: `Which of the following is true about verbs used in indirect speech?`,
            options: `Verbs can be in any tense depending on the context.
Verbs are always in the past tense.
Verbs are not necessary in indirect speech.`
          }
        ]
      }
    },
    {
      label: 'True or False',
      type: 'classifySentence',
      id: 'true-false',
      data: {
        title: 'Classify the following sentences as True or False',
        types: [
          {
            name: 'True',
            text: `Direct speech is always enclosed in inverted commas.
In indirect speech, inverted commas are not used.
In indirect speech, question marks and exclamation marks are not used.
Interrogative sentences are changed to statements in indirect speech.`
          },
          {
            name: 'False',
            text: `The first word of reported speech begins with a small letter.
The comma separating the verb from the reported speech is retained in indirect speech.
The tense of the verb is always changed in indirect speech.
In direct speech, the tense of the verb is always changed to present tense.`
          }
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
I shall say to him, “She will go to school.”`
          },
          {
            name: 'Indirect',
            text: `You say that she is a nurse.
I say that Mohan is a good boy.
I tell Sham that Ram is a student.
He tells me that the peon rings the bell.
I shall tell him that she will go to school.`
          }
        ]
      }
    },
    {
      id: 'mcq',
      label: 'Multiple Choice Questions',
      type: 'mcq',
      data: {
        title:
          'Choose the correct form of Indirect Speech for the sentence given in Direct Speech.',
        questions: [
          {
            qText: 'Rahul told me, “When are you leaving?”',
            options: `Rahul asked me when I will be leaving, Rahul asked me when I was leaving`
          },
          {
            qText: '“Where do you live?” the stranger asked Aladdin.',
            options: `The stranger asked Aladdin where he lived, Where do you live asked the stranger to Alladin`
          },
          {
            qText: 'The teacher said to Shelly, “Why are you laughing?”',
            options: `The teacher asks Shelly why she is laughing, The teacher asked Shelly why she was laughing`
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
            options: `Bruce said to me that he would do the work, Bruce said he can do all the work`
          }
        ]
      }
    },
    {
      type: 'makeSentence',
      label: 'Convert to Indirect Speech',
      id: 'make-sentence',
      commonData: {
        title:
          'Convert the Direct Speech to Indirect Speech. Drag & Drop the words from the bottom and construct the sentence.',
        extras: 'is because of an the them us'
      },
      data: [
        `My mother said to me, “You were wrong.”|  my mother told me that I was wrong
Raj said, “Alas! My pet died.” | Raj exclaimed sadly that his pet died
Ruchi said, “I may go there.” | Ruchi said that she might go there
Bucky said to Steve, “Do you hear me?” | Bucky asked Steve if he heard him
The boy said, “Let me come in.” | the boy asked to let him come in`,

        `Granny said to me, “May God bless you.” | granny prayed that God might bless me
"I am going to the store," said Mary. | Mary said that she was going to the store
"I have never been to Paris," said Tom. | Tom said that he had never been to Paris
"I want to be a doctor," said Sarah. | Sarah said that she wanted to be a doctor
"I am feeling sick," said Jack. | Jack said that he was feeling sick`,

        `"I need a break," said Rachel. | Rachel said that she needed a break
"I am going to the beach," said Peter. | Peter said that he was going to the beach
"I am proud of you," said the mother. | the mother said that she was proud of the person
"I love playing tennis," she said. | she said that she loved playing tennis
"I'm sorry I'm late," she said. | she apologized for being late `
      ]
    },
    {
      id: 'fillup-speech',
      label: 'Fill in the blanks',
      type: 'fillup',
      commonData: {
        noOptions: true,
        title:
          'Fill in the blanks with suitable words. Use the context from direct speech to complete the indirect speech.'
      },
      lockAfter: 1,
      data: [
        `"I am tired," said James.
James said that he *was* tired.
"I am happy," said Lisa.
Lisa said that she *was* happy.
"I do not like chocolate," she said.
She said that she *did* not like chocolate.
"I will be there at 2 pm," he said.
He said that he *would* be there at 2 pm.`,

        `"I have a headache," she said.
She said that she *had* a headache.
"I saw a movie last night," he said.
He said that he *had* seen a movie the *previous* night.
"I need to study for my exams," he said.
He said that he *needed* to study for his exams.
"I want to go on vacation," she said.
She said that she *wanted* to go on vacation.`,

        `"I have to leave now," he said.
He said that he *had* to leave *then*.
"I am excited about the party," she said.
She said that she was *excited* about the party.
"I am not feeling well," he said.
He said that he *was* not feeling well.
"I *do* not like spicy food," she said.
She said that she *did* not like spicy food.`,

        `"I can't swim," he said.
He said *that* he couldn't swim.
"I want to buy a new car," she said.
She said that she *wanted* to buy a new car.
"I am happy to be here," he said.
He said that he was happy to be *there*.
"I'm afraid of spiders," she said.
She said that she *was* afraid of spiders.`,

        `"I love my job," he said.
He said that he *loved* his job.
"I need some help," she said.
She said that she *needed* some help.
"I'm sorry for what I said," he said.
He *apologized* for what he had said.
"I can not eat gluten," she said.
She said that she *could* not eat gluten.`,

        `"I have to go to the dentist," he said.
He said that he *had* to go to the dentist.
"I don't like horror movies," she said.
She *said* that she didn't like horror movies.
"I am learning Spanish," he said.
He said that he *was* learning Spanish.
"I'm excited about the concert," she said.
She said that she *was* excited about the concert.`,

        `"I do not have any money," he said.
He said that he *did* not have any money.
"I am going to the store," said Tom.
Tom said that he *was* going to the store.
"I love chocolate," said Mary.
Mary said that she *loved* chocolate.
"I will be there at 3 o'clock," said John.
John said that he *would* be there at 3 o'clock.`,

        `"I can not come to the party," said Jane.
Jane said that she *could* not come to the party.
"I have finished my homework," said Susan.
Susan said that she *had* finished her homework.
"I do not like Biriyani," said Mark.
Mark said that he *did* not like Biriyani.
"I am studying for my exam," said Emily.
Emily said that she *was* studying for her exam.`,

        `"I want to go to the beach," said Peter.
Peter said that he *wanted* to go to the beach.
"I saw a movie last night," said Sarah.
Sarah said that she *had* seen a movie last night.
Mr. Richard *requested* me to *wait there* till he returned.
Mr. Richard said to me, “Please wait here till I return.
The captain *applauded* me, saying that I *had played* well.
The captain said to me, “Bravo! You have played well.”`,

        `Lisa said that she *couldn't* wait for the concert.
"I can't wait for the concert," said Lisa.
The teacher said that she *would* help with homework.
"I will help you with your homework," said the teacher.
David said that he *was* sorry for being late.
"I am sorry for being late," said David.
Jenny said that she *was* so happy for the *other* person.
"I am so happy for you," said Jenny.`,

        `Emily said that she *wanted* to learn how to cook.
"I want to learn how to cook," said Emily.
Mark said that he *was* tired of the job.
"I am tired of this job," said Mark.
Michael said that he *was* excited about the game *tonight*.
"I am excited about the game tonight," said Michael.
Susan *said* that she *had* a headache.
"I have a headache," said Susan.`,

        `Alex said that he *was* not sure if he *could* make it.
"I am not sure if I can make it," said Alex.
Jane said that she *couldn't* believe she *passed* the test.
"I can't believe I passed the test," said Jane.
"I do not understand the assignment," said Alex.
Alex said that he *did* not understand the assignment.
"I'm going to visit my grandparents," said David.
David said that he *was* going to visit his grandparents.`
      ]
    }
  ]
};
