export default {
  id: 'speech-7',
  label: 'Improve your Speech',
  lockAfter: 3,
  list: [
    {
      label: 'Notes',
      type: 'passage',
      id: 'speech',
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
      id: 'fillup-speech',
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
Granny said to me, “May God bless you.”`,

        `Mary said *that* she *was* going to the store.
"I am going to the store," said Mary.`,

        `Tom *said* that he *had* never been to Paris.
"I have never been to Paris," said Tom.

Sarah said *that* she *wanted* to be a doctor.
"I want to be a doctor," said Sarah.`,

        `Jack *said* that he *was* feeling sick.
"I am feeling sick," said Jack.

Rachel said that she *needed* a break.
"I need a break," said Rachel.`,

        `Peter *said* that he *was* going to the beach.
"I am going to the beach," said Peter.

Lisa said that she *couldn't* wait for the concert.
"I can't wait for the concert," said Lisa.`,

        `The teacher said that she *would* help with homework.
"I will help you with your homework," said the teacher.

David said that he *was* sorry for being late.
"I am sorry for being late," said David.`,

        `Jenny said that she *was* so happy for the *other* person.
"I am so happy for you," said Jenny.

James said that he *was* not feeling well.
"I am not feeling well," said James.`,

        `Emily said that she *wanted* to learn how to cook.
"I want to learn how to cook," said Emily.

Mark said that he *was* tired of the job.
"I am tired of this job," said Mark.

Michael said that he *was* excited for the game *tonight*.
"I am excited for the game tonight," said Michael.`,

        `Susan *said* that she *had* a headache.
"I have a headache," said Susan.

Alex said that he *was* not sure if he *could* make it.
"I am not sure if I can make it," said Alex.`,

        `The mother said that she *was* proud of the *person*.
"I am proud of you," said the mother.

Jane said that she *couldn't* believe she *passed* the test.
"I can't believe I passed the test," said Jane.`
      ]
    },
    {
      label: 'Notes',
      type: 'passage',
      id: 'voice',
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
      id: 'fill-up-voice',
      label: 'Fill in the blanks',
      type: 'fillup',
      commonData: {
        title: `Complete the following sentences putting the Verbs in the appropriate Passive Voice form.`,
        noOptions: true
      },
      data: [
        `She *was brought* up by her aunt.(bring) 
Invitation cards *have been sent* to all her friends.(send) 
You *will be invited* to the feast. (invite)
The result *was declared* on last Monday.(declare)`,

        `They *were alarmed* at the report of the gun.(alarm) 
We *were shocked* at his failure.(shock) 
A mistake *was made* by me. (made)
His work *has been done* by him.(do) `,

        `The package *was delivered* by the postman.(deliver)
The letter *was written* by the secretary.(write)
The glass *was broken* by the child.(broke)
The mistake *was made* by the employee.(make)
The concert *was enjoyed* by the audience.(enjoy)`,

        `The game *was won* by the team.(win)
The song *was sung* by the singer.(sing)
The food *was cooked* by the chef.(cook)
The decision *was made* by the committee.(make)
The lesson *was taught* by the teacher.(teach)`,

        `The garden *was tended* by the gardener.(tend)
The report *was prepared* by the analyst.(prepare)
The project *was completed* by the team.(complete)
The question *was answered* by the expert.(answer)
The medicine *was prescribed* by the doctor.(prescribe)
The contract *was signed* by the parties.(sign)`
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
    },
    {
      label: 'Notes',
      type: 'passage',
      id: 'idioms',
      data: {
        title: 'Idioms',
        text: [
          `Examples of some idioms are given below: 
1. Eat humble pie - to apologize humbly; to yeild under humiliating circumstances
2. Eat your words - to take back what you have said 
3. Meet you half-way - come to a compromise with you
4. Put me on my mettle - roused me to do my best
5. Not worth his salt - quite worthless
6. Set his face against - sternly opposed
7. Won his laurels - acquired distinction or glory
8. Turned a deaf ear - disregarded
9. By hook or by crook - by any means; by fair means or foul
10. Strained every nerve - used his atmost efforts `
        ]
      }
    },
    {
      id: 'mcq-idioms',
      label: 'Choose the correct option',
      type: 'mcq',
      data: {
        title: 'Choose the correct meaning of the following Idioms.',
        questions: [
          {
            qText: 'To have a dig at',
            options: `To criticise someone, To sow seeds in a pot, To praise someone`
          },
          {
            qText: 'By fits and starts',
            options: `Irregularly, Annoyingly, Angrily, Feverishly`
          },
          {
            qText: 'To come to light',
            options: `To reveal, To lighten, To show hidden anger, To erase differences`
          },
          {
            qText: 'To brush up',
            options: `Renew, To remove dust, To wash with soap, To hide`
          },
          {
            qText: 'To smell a rat means',
            options: `To suspect a trick, To detect bad smell, To misunderstand, To see the hidden meaning`
          },
          {
            qText: "'Achilles heel' means",
            options: `A fatal weakness, A big hill, A folk dance`
          },
          {
            qText: "'Salad days' means",
            options: `Days of one's youthful inexperience, Days of one's old age experiences, Days of abstaining from vices`
          },
          {
            qText: "'At one's fingertips' means",
            options: `Readily available knowledge, To take revenge, Matter of shame, Balancing on fingers`
          },
          {
            qText: "'Break the ice' means",
            options: `Removing the initial hesitation, Removing the dust, Clearing the dew, Insulting someone`
          },
          {
            qText: "'To chew the cud' correctly means",
            options: `To meditate, To contrive against someone, To die on duty, To inculcate virtues`
          },
          {
            qText: "'To pull through' means",
            options: `To recover, To pull with strength, To use a lot of energy, To control`
          },
          {
            qText: 'A fish out of water ',
            options: `In a strange situation, In want of a house, Determined to live`
          },
          {
            qText: "'A wild goose chase' is",
            options: `A useless enterprise, A violent chase, A pleasurable hunt, A harsh gesture`
          },
          {
            qText: 'Make hay while the sun shines',
            options: `Make maximum use of a given opportunity, Be active during the day, Be merry during the summer`
          },
          {
            qText: 'To bank upon',
            options: `To depend, To hope, To harness, To invest`
          }
        ]
      }
    },
    {
      label: 'Fill in the blanks',
      type: 'matchByDragDrop',
      id: 'fillup-drag',
      lockAfter: 1,
      commonData: {
        title: 'Complete the sentences using suitable idioms.',
        styles: {
          fontSize: '1rem',
          dashWidth: 70
        }
      },
      data: [
        `I was feeling a bit *under the weather*.
It was her chance to speak and she was *getting cold feet*.
My younger brother is *the apple of my eye*.
In order *to set the record straight*, the umpires checked the camera.
None of us understood that he was trying *to kill two birds with a stone* when he joined the military forces.`,

        `My brother seems to have been *snowed under* for the last few weeks.
Gareema just *broke my bubble* when he said that he was a part of it.
Talking to my mom about my grades made me feel like I was *walking on eggshells*.
Danny decided *to bite the bullet* and talk to the manager today about the financial situation.`,

        `They were finding it really difficult to *make two ends meet*.
Jerry's parents seem to be *at loggerheads* over something or the other all the time.
The dress she wants for her birthday will *cost a pretty penny*.
The teacher asked us to *break a leg* at the annual day dance.
My friends are always there for me *through thick and thin*.`,

        `Jamies neighbour kept *beating around the bush* and did not give a direct answer.
*Hang in there*! Everything will be okay before you know it.
I often *cut corners* in order to buy something for my brother.
She claimed that Rony tried to *steal her thunder*.
After the movie, we had planned to go to the beach, but we decided to *call it a day* as everyone was tired.`,

        `Well, we thought it was *better late than never*, but where are the others?
The lawyer asked Ricky to *stick to his guns* if he wants to win the case.
The police were determined not to *leave any stone unturned*.
Vikram sensed that there were multiple *clouds on the horizon*.
Me catching a cold was *a blessing in disguise*.`,

        `Umar looked *blue in the face* after the marathon.
We decided to *cut the long story short* and tell them what actually happened.
Cooking has never been Ron's *cup of tea*.
She was just *beating a dead horse* in thinking she could change his mind.
*Speak of the devil*! Here he comes.`,

        `The police had warned us to *let sleeping dogs lie* and move ahead with our lives.
Ameer just let the *cat out of the bag* by announcing that he is dropping out of college.
We had to identify the *elephant in the room* before we made a decision.
The teacher asked us to quote the findings *in a nutshell*.
Every word of what you say is worth its *weight in gold*.`,

        `My mom taught me how to stand strong and *weather the storm*.
Solving the Wordle everyday was just *a piece of cake*.
It is time you *get your act together* and do something useful.
I think it will *cost an arm and a leg* to get the car my brother wants.
Nimisha seemed to be *on top of the world* since she heard the news of her son's promotion.`,

        `The manager encouraged the employees to realise that *time is money* and work harder.
The situation has gotten *out of hand* and there is nothing anyone here can do to help.
My cousin and I are always like *two peas in a pod*.
As a detective, you are always obliged to learn which way *the wind blows* and then make a statement.`,

        `Harry *hit the nail on the head* with his decision to buy this piece of land.
If you ask politely, you may be able to catch more flies with honey *than you can with vinegar*.
The court decided to let the guy *off the hook* as there was no evidence proving his crime.
Learning a language is like *riding a bicycle*; you will never forget it.
When he understood he had no way out of the problem, *he blamed his tools*.`,

        `Cooking risotto is easy; I will figure it out. After all, it is *not rocket science*.
Renu *spilled the beans* about her sister coming to her mom.
The circus company had completed its trail run and was ready to *get the show on the road*.
Sheema decided to *pull the last straw* and inform the manager about what was happening in the office.`,

        `Niki said that she won't be performing live anymore as she announced to the press, “*That ship has sailed*”.
Do not be worried about what is going on in your life right now; it is always the *darkest before dawn*.
I knew that you had your head in the clouds throughout the ceremony. What happened to you?
Zeeshan was *on thin ice*; he had to figure out a way to help his brother.`,

        `Nobody knows why Devi gave Riya a *cold shoulder*.
You just have to understand that you cannot make an omelette without *breaking some eggs*.
Neeraj has been extremely careful with making new friends. After all, *once bitten, twice shy* right?
They not only left home late but also got stuck in traffic. *When it rains, it pours*.`,

        `You will *miss the boat* if you wait any longer.
Kevin's friends kept *pulling his leg* all evening.
It is better you start learning now. It will be difficult but *no pain, no gain*.
It is highly required that you both *see eye to eye* if you want this resolved.
Diya wears her *heart on her sleeve*; she tends to get hurt very often.`,

        `It is not possible Sammy is the only one involved. After all, it takes *two to tango*.
*Come rain or shine*, I will be there for you.
Everything *so far has been so good*.
Comparing a doctor's profession to a teacher's profession is like *comparing apples to oranges*.
*Pigs would fly* if you cooked.`,

        `It is better we don't dig more into this case; *curiosity killed the cat*.
Having my best friend is the best of *both worlds*.
Susan did not realise she would be *burning bridges* when she took up the job.
He has to *sell the whole nine yards* if he wants to buy that house.
For her, grass is always greener *on the other side*.`,

        `Do not worry about it. *Every dog has his day*. Today, it is his.
She started counting her chickens *before they hatched*. That will only disappoint her; I hope she understands.
Everything *went down in flames* when we lost the lottery.
She was just *adding fuel to the fire* telling Tom's mom about his health.`,

        `My mom was finding it hard to *wrap her head around the fact* that I am getting married tomorrow.
The police *cut the mustard* in finding the gang that robbed the bank.
He did not know he was jumping off the frying pan *into the fire* when he decided to speak about the problems at work.
There is no use *crying over spilt milk*; you just have to move on with your life.`,

        `Everyone thinks he is crazy, but he sure has *a method to his madness*.
He can plan a whole trip at *the drop of a hat*.
It is so hard to *get wind of* what is going on here.
We finally heard it from the *horse's mouth*.
My great grandmother is surprisingly *fit as a fiddle*.`,

        `My mom always asks to believe everyone with *a pinch of salt*.
Rasheeda was a constant *pain in the neck*.
The smartphone is the best thing since *sliced bread*.
You will not understand unless you *walk in their shoes*.
The communication trainer conducted an activity to *break the ice*.`,

        `Not completing my degree is *a monkey on my back*.
Finding the red and black dress I saw online felt like going on *a wild goose chase*.
It has been *raining cats and dogs* since yesterday.
We met each other only *once in a blue moon*.
He did not know he was *barking up the wrong tree*.`,

        `Rocky finally had the *ball in his court*.
Mephistopheles speaking about going to heaven is like *the devil* quoting the Bible.
Haven't you heard the devil's *in the details*?
My father told me not to worry about the competition as there would be other *fish in the sea*.
You will require a snowball's chance *in hell* to clear this exam.`,

        `For all we know, this will not end *until the fat lady sings*.
The children were *bouncing off the walls* the moment they heard about going to an amusement park this weekend.
I don't know about the others, but I feel that your decision *is as right as rain*.
My cousins have been *bent out of shape* after my uncle passed away.`,

        `Do not be worried about your current situation; after all, every cloud has a *silver lining*.
We had no idea why he was playing the *devil's advocate* when he knew what had happened.
I know there are decisions to be made about the selling of the house but we will cross that bridge when *we get to it*.`,

        `James *threw caution to the wind* in trying to save me from the accident.
I would like to give *a penny for your thoughts*.
My mom thinks that my brother is biting off more *than he can chew* by taking up a night job and a day job.
People are known to always *judge a book by its cover*.`,

        `Reem did not really think she was *raining on someones parade* when she announced about her new job.
The doctors said that Manu had escaped serious injuries by *the skin of his teeth*.
Rounak's parents think that he is putting all his eggs *in one basket*.
We decided to *put the case on ice* until we had some clue of what had happened.
It is not at all that you have *the cake and eat it too*.`
      ]
    }
  ]
};
