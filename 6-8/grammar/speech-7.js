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
            options: `The comma separating the Reporting Verb from the Reported Speech is always used, Inverted Commas (“ ”) are used in Reported Speech, The Tense of the Reporting Verb is always changed`
          },
          {
            qText: `What is the rule of changing tense while converting Direct Speech into Indirect Speech?`,
            options: `The rule of Sequence of Tenses is followed, The tense of the verb in the Reported Speech is always changed, The tense of the Reporting Verb is always changed`
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

Mr. Richard *requested* me to *wait there* till he returned.
Mr. Richard said to me, “Please wait here till I return.”`,

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

Michael said that he *was* excited about the game *tonight*.
"I am excited about the game tonight," said Michael.`,

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
          `Active Voice: When the Subject of a Verb acts, the Verb is said to be in the Active Voice.
Example - I made a mistake.
Passive Voice: When the object of the Active Voice becomes the Subject, the Verb is said to be in the Passive Voice.
Example - A mistake was made by me.
# Rules (Active to Passive)
1. The object of the Active Verb is made the Subject of the Passive Verb.
2. The Subject of the Active Verb is made the object of some Preposition.
3. The Verb of the Active Voice gets the Past Participle form of the Finite Verb and some form of the verb 'to be' will be used before it in the passive voice.
4. Some vague and indefinite subjects like 'everyone', 'they', 'people', 'someone', 'somebody', 'everybody', 'anybody', etc. are dropped if they are the subjects of the active voice. If so, the preposition 'by' is also not used.
5. The Tense of the Verb does not change.
=> The following four types of sentences cannot be changed into passive voice: Present Perfect Continuous, Past Perfect Continuous, Future Continuous and Future Perfect Continuous.`
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
      id: 'fill-up-voice',
      label: 'Fill in the blanks',
      type: 'fillup',
      commonData: {
        title: `Complete the following sentences putting the Verbs in the appropriate Passive Voice form.`,
        noOptions: true
      },
      data: [
        `She *was brought* up by her aunt. (bring) 
Invitation cards *have been sent* to all her friends. (send) 
You *will be invited* to the feast. (invite)
The result *was declared* last Monday. (declare)`,

        `They *were alarmed* at the report of the gun. (alarm) 
We *were shocked* at his failure. (shock) 
A mistake *was made* by me. (made)
His work *has been done* by him. (do) `,

        `The package *was delivered* by the postman. (deliver)
The letter *was written* by the secretary. (write)
The glass *was broken* by the child. (broke)
The mistake *was made* by the employee. (make)
The concert *was enjoyed* by the audience. (enjoy)`,

        `The game *was won* by the team. (win)
The song *was sung* by the singer. (sing)
The food *was cooked* by the chef. (cook)
The decision *was made* by the committee. (make)
The lesson *was taught* by the teacher. (teach)`,

        `The garden *was tended* by the gardener. (tend)
The report *was prepared* by the analyst. (prepare)
The project *was completed* by the team. (complete)
The question *was answered* by the expert. (answer)
The medicine *was prescribed* by the doctor. (prescribe)
The contract *was signed* by the parties. (sign)`
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
            name: 'Passive',
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
      id: 'mcq-2',
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
      label: 'Notes',
      type: 'passage',
      id: 'idioms',
      data: {
        title: 'Idioms',
        text: [
          `Examples of some idioms are given below: 
1. Eat humble pie - to apologize humbly; to yield under humiliating circumstances
2. Eat your words - to take back what you have said 
3. Meet you halfway - come to a compromise with you
4. Put me on my mettle - roused me to do my best
5. Not worth his salt - quite worthless
6. Set his face against - sternly opposed
7. Won his laurels - acquired distinction or glory
8. Turned a deaf ear - disregarded
9. By hook or by crook - by any means; by fair means or foul
10. Strained every nerve - used his utmost efforts `
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
            options: `To criticize someone, To sow seeds in a pot, To praise someone`
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
            options: `To suspect a trick, To detect a bad smell, To misunderstand, To see the hidden meaning`
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
        title: 'Complete the sentences by completing the idioms.',
        styles: {
          fontSize: '1rem',
          dashWidth: 70
        }
      },
      data: [
        `I was feeling a bit *under the weather*.
It was her chance to speak and she was *getting cold feet*.
My younger brother is the *apple of my eye*.`,

        `In order to set the *record straight*, the umpires checked the camera.
None of us understood that he was trying to kill two birds *with a stone* when he joined the military forces.
My brother seems to have been *snowed under* for the last few weeks.`,

        `Gareema just *broke my bubble* when he said that he was a part of it.
Talking to my mom about my grades made me feel like I was walking *on eggshells*.
Danny decided to *bite the bullet* and talk to the manager today about the financial situation.`,

        `They were finding it really difficult to make *two ends meet*.
Jerry's parents seem to be *at loggerheads* over something or the other all the time.
The dress she wants for her birthday will cost *a pretty penny*.`,

        `The teacher asked us to *break a leg* at the annual day dance.
My friends are always there for me through *thick and thin*.
Jamies neighbor kept beating *around the bush* and did not give a direct answer.`,

        `*Hang in there*! Everything will be okay before you know it.
I often *cut corners* in order to buy something for my brother.
She claimed that Rony tried to *steal her thunder*.`,

        `After the movie, we had planned to go to the beach, but we decided to *call it a day* as everyone was tired.
Well, we thought it was better *late than never*, but where are the others?
The lawyer asked Ricky to *stick to his guns* if he wants to win the case.`,

        `The police were determined not to leave *any stone unturned*.
Vikram sensed that there were multiple clouds *on the horizon*.
My catching a cold was a blessing *in disguise*.`,

        `Umar looked *blue in the face* after the marathon.
We decided to cut the *long story short* and tell them what actually happened.
Cooking has never been Ron's *cup of tea*.`,

        `She was just beating *a dead horse* in thinking she could change his mind.
*Speak of the devil*! Here he comes.
The police had warned us to *let sleeping dogs* lie and move ahead with our lives.`,

        `Ameer just let the cat out *of the bag* by announcing that he is dropping out of college.
We had to identify the elephant *in the room* before we made a decision.
The teacher asked us to quote the findings *in a nutshell*.`,

        `Every word of what you say is worth its *weight in gold*.
My mom taught me how to stand strong and *weather the storm*.
Solving the Wordle every day was just *a piece of cake*.`,

        `It is time you get *your act together* and do something useful.
I think it will cost *an arm and a leg* to get the car my brother wants.
Nimisha seemed to be on *top of the world* since she heard the news of her son's promotion.`,

        `The manager encouraged the employees to realize that *time is money* and work harder.
The situation has gotten *out of hand* and there is nothing anyone here can do to help.
My cousin and I are always like *two peas in a pod*.`,

        `As a detective, you are always obliged to learn which way *the wind blows* and then make a statement.
Harry hit the nail *on the head* with his decision to buy this piece of land.
If you ask politely, you may be able to catch more flies with honey than you can *with vinegar*.`,

        `The court decided to let the guy *off the hook* as there was no evidence proving his crime.
Learning a language is like *riding a bicycle*; you will never forget it.
When he understood he had no way out of the problem, he *blamed his tools*.`,

        `Cooking risotto is easy; I will figure it out. After all, it is *not rocket science*.
Renu *spilled the beans* about her sister coming to her mom.
The circus company had completed its trial run and was ready to get the show *on the road*.`,

        `Sheema decided to pull *the last straw* and inform the manager about what was happening in the office.
Niki said that she won't be performing live anymore as she announced to the press, “*That ship has sailed*”.
Do not be worried about what is going on in your life right now; it is always the *darkest before dawn*.`,

        `I knew that you had your head *in the clouds* throughout the ceremony. What happened to you?
Zeeshan was *on thin ice*; he had to figure out a way to help his brother.
Nobody knows why Devi gave Riya a *cold shoulder*.`,

        `You just have to understand that you cannot make an omelet without *breaking some eggs*.
Neeraj has been extremely careful with making new friends. After all, once bitten, *twice shy* right?
They not only left home late but also got stuck in traffic. When it rains, *it pours*.`,

        `You will *miss the boat* if you wait any longer.
Kevin's friends kept *pulling his leg* all evening.
You should start learning now. It will be difficult but no pain, *no gain*.`,

        `It is highly required that you both *see eye to eye* if you want this resolved.
Diya wears her *heart on her sleeve*; she tends to get hurt very often.
It is not possible Sammy is the only one involved. After all, it takes *two to tango*.`,

        `*Come rain or shine*, I will be there for you.
Everything so far has *been so good*.
Comparing a doctor's profession to a teacher's profession is like comparing *apples to oranges*.`,

        `*Pigs would fly* if you cooked.
We shouldn't dig more into this case; *curiosity killed the cat*.
Having my best friend is the best of *both worlds*.`,

        `Susan did not realize she would be *burning bridges* when she took up the job.
He has to sell the *whole nine yards* if he wants to buy that house.
For her, grass is always greener *on the other side*.`,

        `Do not worry about it. *Every dog has his day*. Today, it is his.
She started counting her chickens *before they hatched*. That will only disappoint her; I hope she understands.
Everything went *down in flames* when we lost the lottery.`,

        `She was just adding *fuel to the fire* telling Tom's mom about his health.
My mom was finding it hard to wrap her head *around the fact* that I am getting married tomorrow.
The police *cut the mustard* in finding the gang that robbed the bank.`,

        `He did not know he was jumping off the frying pan *into the fire* when he decided to speak about the problems at work.
There is no use crying over *spilled milk*; you just have to move on with your life.
Everyone thinks he is crazy, but he sure has a method *to his madness*.`,

        `He can plan a whole trip at the *drop of a hat*.
It is so hard to *get wind of* what is going on here.
We finally heard it from the *horse's mouth*.`,

        `My great grandmother is surprisingly *fit as a fiddle*.
My mom always asks to believe everyone with *a pinch of salt*.
Rasheeda was a constant *pain in the neck*.`,

        `The smartphone is the best thing since *sliced bread*.
You will not understand unless you *walk in their shoes*.
The communication trainer conducted an activity to *break the ice*.`,

        `Not completing my degree is a monkey *on my back*.
Finding the red and black dress I saw online felt like going on a *wild goose chase*.
It has been raining *cats and dogs* since yesterday.`,

        `We met each other only once in a *blue moon*.
He did not know he was barking up the *wrong tree*.
Rocky finally had the *ball in his court*.`,

        `Mephistopheles speaking about going to heaven is like *the devil* quoting the Bible.
Haven't you heard the devil's *in the details*?
My father told me not to worry about the competition as there would be other *fish in the sea*.`,

        `You will require a snowball's chance *in hell* to clear this exam.
For all we know, this will not end until the *fat lady sings*.
The children were bouncing *off the walls* the moment they heard about going to an amusement park this weekend.`,

        `I don't know about the others, but I feel that your decision is as *right as rain*.
My cousins have been *bent out of shape* since my uncle passed away.
Do not be worried about your current situation; after all, every cloud has a *silver lining*.`,

        `We had no idea why he was playing the *devil's advocate* when he knew what had happened.
I know there are decisions to be made about the selling of the house but we will cross that bridge when *we get to it*.
James threw caution *to the wind* in trying to save me from the accident.`,

        `I would like to give you a penny for *your thoughts*.
My mom thinks that my brother is biting off more *than he can chew* by taking up a night job and a day job.
People are known to always judge a book *by its cover*.`,

        `Reem did not think she was raining on *someone's parade* when she announced her new job.
The doctors said that Manu had escaped serious injuries by the skin *of his teeth*.
Rounak's parents think that he is putting all his eggs *in one basket*.`,

        `We decided to put *the case on ice* until we had some clue of what had happened.
It is not at all that you have the cake *and eat it too*.`
      ]
    },
    {
      label: 'Notes',
      type: 'passage',
      id: 'word-formn',
      data: {
        title: 'Word Formation',
        text: [
          `Compound words are formed by combining two or more words to create a new word that has a different meaning. Compound words are mainly of three types.
1. Closed Compounds: These are compound words that are written as one word without any space or hyphens.`,
          {
            type: 'sitewords',
            text: 'anybody, everybody, nobody, somebody, anyone, everyone, someone, anything, everything, nothing, something, anywhere, everywhere, nowhere, somewhere, babysit, background, barefoot, baseball, basketball, football, bathroom, bedroom, blackberry, blueberry, breakfast, cannot, checkout, cowboy, daylight, desktop, fingerprint, firefly, forever, gentleman, grandmother, grandfather, granddaughter, grapefruit, grasshopper, headquarters, handshake, inside, keyboard, lipstick, mailbox, nevertheless, nonetheless, notebook, outside, payday, railroad, rainbow, raincoat, skateboard, smartphone, snowball, sometimes, sunflower, toothbrush, turntable, undercover, upstream, waterfall, watermelon, weekend, within, without',
            width: 120
          },
          `2. Open Compounds: These are compound words that are written as two separate words.`,
          {
            type: 'sitewords',
            text: 'book store, black eye, cell phone, close call, common sense, cotton candy, dining room, first aid, full moon, French fry, heart attack, high school, hot dog, ice cream, life jacket, living room, no one, peanut butter, post office, prime minister, real estate, remote control, report card, rib cage, role model, roller coaster, salad dressing, search engine, slam dunk, sleeping bag, time capsule, vacuum cleaner, vending machine, video game, waiting room, washing machine, web page',
            width: 120
          },
          `3. Hyphenated Compounds: These are compound words that are written with a hyphen in between the words.`,
          {
            type: 'sitewords',
            text: 'check-in, clean-cut, editor-in-chief, empty-handed, far-fetched, father-in-law, mother-in-law, sister-in-law, free-for-all, know-how, know-it-all, life-size, merry-go-round, long-distance, long-term, mind-blowing, nitty-gritty, one-sided, one-dimensional, two-dimensional, over-the-counter, run-in, runner-up, strong-arm, topsy-turvy, toss-up, up-to-date, well-being, word-of-mouth',
            width: 120
          },
          `=> Compounds words can also be classified as the following:
1. Compound nouns: These are nouns formed by combining two or more words.
Examples: toothbrush, sunglasses, teapot, birthday.
2. Compound adjectives: These are adjectives formed by combining two or more words.
Examples: red-hot, well-known, high-speed, open-minded.
3. Compound verbs: These are verbs formed by combining two or more words.
Examples: drive-in, break up, turn off, pick up.
4. Compound prepositions: These are prepositions formed by combining two or more words.
Examples: according to, because of, in spite of, out of.`
        ]
      }
    },
    {
      type: 'completeWord',
      id: 'complete-word-cmp',
      label: 'Complete Word - Compound Words',
      title: 'Answer the riddles with compound words.',
      data: [
        `I can be high or low, but I'm always full of energy. What am I? |Power surge| P____ surge
I'm something you can hold in your hand, but I'm not solid. What am I?| Air pocket| A__ pocket
I'm a tool that can be used to cut, but I'm not a knife. What am I?| Wire cutter| W___ cutter
I'm something you can wear on your head, but I'm not a hat. What am I?| Headband| H___band`,

        `I'm something you can use to light up a room, but I'm not a lamp. What am I? |Light bulb| L____ bulb
I'm something you can use to clean your teeth, but I'm not toothpaste. What am I? |Dental floss| D_____ floss
I'm a machine that can be used to lift heavy objects, but I'm not a crane. What am I? |Hydraulic jack| H________ jack
I'm something you use to hold two things together, but I'm not glue. What am I? |Paperclip| P____clip`,

        `I'm a container that you can carry around, but I'm not a bag. What am I? |Lunchbox| L____box
I'm something you use to make a call, but I'm not a mobile. What am I? |Telephone| T___phone
I'm something you can use to write, but I'm not a pen. What am I? |Chalkboard| C____board
I'm a machine that can be used to cook food, but I'm not an oven. What am I? |Microwave| M____wave`,

        `I'm a tool that can be used to cut down trees, but I'm not an ax. What am I? |Chainsaw| C____saw
I'm something you can use to make coffee, but I'm not a coffee maker. What am I? |Coffee grounds| C_____ grounds
I can be opened and closed, and I keep your food fresh. What am I? |Ziplock| Z__lock
I'm something you use to write on a chalkboard. What am I? |Chalk stick| C____ stick`,

        `I'm something you tie before you go outside. What am I? |Shoe lace| S___ lace
I'm the type of ball that you bounce. What am I? |Rubber ball| R_____ ball
I'm something you use to clean the dishes. What am I? |Dish soap| D___ soap
I'm something you wear on your head to keep warm. What am I? |Winter hat| W_____ hat`,

        `I'm a type of cheese that is yellow and has holes in it. What am I? |Swiss cheese| S____ cheese
I'm something you use to brush your hair. What am I? |Hair brush| H___ brush
I'm something you wear on your feet to go swimming. What am I? |Swim fin| S___ fin
I'm something you use to clean your teeth, but I'm not toothpaste. What am I? |Toothbrush| T____brush`,

        `I'm something you use to carry your things, but I'm not a backpack. What am I? |Handbag| H___bag
I'm something you use to keep food fresh, but I'm not a fridge. What am I? |Tupperware| T_____ware
I'm something you can use to clean the floor, but I'm not a broom. What am I? |Dustpan| D___pan`
      ]
    },
    {
      type: 'group',
      label: 'Closed or Open',
      id: 'closed-open',
      lockAfter: 1,
      commonData: {
        title: 'Classify the following words as closed or open compound words',
        types: ['Closed compound word', 'Open compound word']
      },
      data: [
        [
          `anybody, everybody, nobody, somebody, anyone`,
          `book store, black eye, cell phone`
        ],
        [
          `everyone, someone, anything, everything, nothing`,
          `close call, common sense, cotton candy`
        ],
        [
          `something, anywhere, everywhere, nowhere, somewhere`,
          `dining room, first aid, full moon`
        ],
        [
          `babysit, background, barefoot, baseball, basketball`,
          `French fry, heart attack, high school`
        ],
        [
          `football, bathroom, bedroom, blackberry, blueberry`,
          `hot dog, ice cream, life jacket`
        ],
        [
          `breakfast, cannot, checkout, cowboy, daylight`,
          `living room, no one, peanut butter`
        ],
        [
          `desktop, fingerprint, firefly, forever, gentleman`,
          `post office, prime minister, real estate`
        ],
        [
          `grandmother, grandfather, granddaughter, grapefruit, grasshopper`,
          `remote control, report card, rib cage`
        ],
        [
          `headquarters, handshake, inside, keyboard, lipstick`,
          `role model, roller coaster, salad dressing`
        ],
        [
          `mailbox, nevertheless, nonetheless, notebook, outside`,
          `search engine, slam dunk, sleeping bag`
        ],
        [
          `payday, railroad, rainbow, raincoat, skateboard`,
          `time capsule, vacuum cleaner, vending machine`
        ],
        [
          `smartphone, snowball, sometimes, sunflower, toothbrush`,
          `video game, waiting room, washing machine, web page.`
        ]
      ]
    },
    {
      label: 'Noun or Adjective',
      type: 'group',
      id: 'noun-adj',
      data: {
        title: 'Classify the following as compound noun or compound adjective.',
        types: [
          {
            name: 'Noun',
            text: 'toothbrush, sunglasses, teapot, birthday'
          },
          {
            name: 'Adjective',
            text: 'red-hot, well-known, high-speed, open-minded'
          }
        ]
      }
    },
    {
      label: 'Verb or Preposition',
      type: 'group',
      id: 'verb-pre',
      data: {
        title:
          'Classify the following as compound verb or compound preposition.',
        types: [
          {
            name: 'Verb',
            text: 'drive-in, break up, turn off, pick up'
          },
          {
            name: 'Preposition',
            text: 'according to, because of, in spite of, out of'
          }
        ]
      }
    },
    {
      label: 'Notes',
      type: 'passage',
      id: 'affixation',
      data: {
        title: 'Affixation',
        text: [
          `An affix is a word element of English grammar used to alter the meaning or form of a word and comes in the form of either a prefix or a suffix. 
# Affixation in Comparative and Superlative Degree
1. Most comparative and superlative degrees are made by adding -er and -est. If the adjective ends in -e, only then -r and -st are added.`,
          {
            type: 'html',
            text: `<b>Examples</b>: sweet -> sweet<b>er</b> -> sweet<b>est</b>; safe -> saf<b>er</b> -> saf<b>est</b>; dark -> dark<b>er</b> -> dark<b>est</b>`
          },
          `2. Adjectives ending in y, drop the -y and take -ier and -iest.`,
          {
            type: 'html',
            text: `<b>Examples</b>: crazy -> craz<b>ier</b> -> craz<b>iest</b>; early  -> earl<b>ier</b> -> earl<b>iest</b>; happy -> happ<b><ier</b> -> happ<b>iest</b>`
          },
          `3. In some adjectives that have just one syllable, the last consonant is doubled.`,
          {
            type: 'html',
            text: `<b>Examples</b>: thin —> thi<b>nner</b> —> thi<b>nnest</b>; sad —> sa<b>dder</b> -> sa<b>ddest</b>; dim -> di<b>mmer</b> -> di<b>mmest</b>`
          },
          `4. Adjectives that have more than two or three syllables take more and most to make comparative and superlative degrees. These include adjectives that end in -ed, -ful, -less, -ing, etc.`,
          {
            type: 'html',
            text: `<b>Examples</b>: excited -> <b>more</b> excited —> <b>most</b> excited; useful —> <b>more</b> useful -> <b>most</b> useful`
          }
        ]
      }
    },
    {
      label: 'Multiple Choice Questions',
      type: 'mcq',
      id: 'mcq-affix',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: `What is an affix in English grammar?`,
            options: `A word element used to alter the meaning or form of a word, A grammatical construction that changes the tense of a verb, A type of adverb used to modify a verb`
          },
          {
            qText: `What are the two forms of affixes in English?`,
            options: `Prefixes and suffixes, Adjectives and adverbs, Nouns and verbs, Conjunctions and prepositions`
          },
          {
            qText: `How are most comparative and superlative degrees formed?`,
            options: `By adding -er and -est, By adding -ed and -ing, By adding -ly, By adding -able and -ible`
          },
          {
            qText: `What happens to adjectives ending in -y when forming comparative and superlative degrees?`,
            options: `The -y is dropped and -er/-est is added, The -y is doubled, The -y is changed to -ly`
          },
          {
            qText: `What happens to some adjectives with just one syllable when forming comparative and superlative degrees?`,
            options: `The last consonant is doubled, The last vowel is doubled, The adjective is shortened, The adjective is lengthened`
          }
        ]
      }
    },
    {
      id: 'fill-up-comparisson',
      label: 'Fill in the blanks',
      type: 'fillup',
      commonData: {
        title: `Fill in the blanks with the most appropriate degree of comparison in the following sentences.`
      },
      data: [
        `Athiya is *smarter (smartest)* than most of her friends.
Nobody is as *good (best)* as you.
Priya was the *most elegant (more elegant)* of all.
Harminder is *taller (tallest)* than her brother.
The most recent movie was *excellent (excellenter)*.`,

        `Mount Everest is the *highest (higher)* peak.
Woody is the *most watched (watched more)* series.
Sreya is *happier (happy)* than Tina.
Arhan is a *patient (patienter)* kid.
These maths problems are *easy (easiest)*.`,

        `This flower is *prettier (pretty)* than that one.
My sister is *more intelligent (intelligent)* than me.
Who is the *tallest (most tall)* in your class?
She is the *best (most good)* of all the singers in the competition.
This is the *most expensive (expensive)* restaurant I have ever been to.`,

        `My uncle's house is *bigger (big)* than mine.
That was the *most surprising (most surprised)* news I had ever heard.
This dress is *more beautiful (beautiful)* than the one I saw yesterday.
The *best (better)* players in the team are my brother and John.
The *best (good)* time to plant a tree was twenty years ago.`,

        `This problem is *more complicated (complicated)* than I thought.
This laptop is *faster (more fast)* than my old one.
She is *shorter (short)* than him.
She is *better (more good)* at singing than her sister.
He is *more skilled (more skill)* at math than me.`
      ]
    },
    {
      id: 'comparisson-2',
      label: 'Degrees of Comparisson',
      type: 'fillup',
      commonData: {
        noOptions: true,
        title:
          'Fill in the missing blanks with the most appropriate degree of comparison.'
      },
      lockAfter: 2,
      data: [
        `Big, *Bigger*, Biggest
Thin, Thinner, *Thinnest*
Fat, *Fatter*, Fattest
Dim, Dimmer, *Dimmest*
Hot, *Hotter*, Hottest`,

        `Sad, Sadder, *Saddest*
Slim, *Slimmer*, Slimmest
Red, Redder, *Reddest*
Bright, *Brighter*, Brightest
Short, Shorter, *Shortest*
Weak, *Weaker*, Weakest`,

        `Long, Longer, *Longest*
Smart, *Smarter*, Smartest
Cool, Cooler, *Coolest*
Dark, *Darker*, Darkest
Small, Smaller, *Smallest*`,

        `Bold, *Bolder*, Boldest
Humble, Humbler, *Humblest*
Simple, *Simpler*, Simplest
Fine, Finer, *Finest*
Noble, *Nobler*, Noblest`,

        `Brave, Braver, *Bravest*
Wealthy, *Wealthier*, Wealthiest
*Healthy*, Healthier, Healthiest
Costly, *Costlier*, Costliest`,

        `Busy, Busier, *Busiest*
*Cosy*, Cosier, Cosiest
Little, *Less*, *Least*
Many, *More*, Most`
      ]
    },
    {
      id: 'fillup-comp-2',
      label: 'Fill in the blanks',
      type: 'fillup',
      commonData: {
        noOptions: true,
        title:
          'Fill in the blanks with the most appropriate degree of comparison in the following sentences.'
      },
      lockAfter: 2,
      data: [
        `Mira works hard. Her sister works *harder*. Her brother works the *hardest*.
You should do well on your test. It should be *better* than last time. In fact, you should do the *best* this time.
Ben is crazy. Zen is *crazier* than Ben. But Ron is the *craziest* of them all.`,

        `Rabab is thin. Her sister Rehab is *thinner*. But Rhea is the *thinnest* of them.
Kartik did badly in his entrance test. Hemant did *worse* than him. Sachin did the *worst*.
Sangita draws sketches as good as Sanchi does. Sanjay does *better* than his sister. But their mother can draw pictures the *best*.`,

        `Shilpa is tall.	Sheena is *taller* than Shilpa.	Samira is the *tallest* of all the girls.
She is pretty. Reem is *prettier* than her sister. Riya is the *prettiest* of them.
Sam is intelligent.	Sam is *more intelligent* than Tina. Sam is the *most intelligent* kid in class.`,

        `He is smart. He is *smarter* than Geetha. He is the *smartest* among them.
Rinita has a big house.	Rinita has a *bigger* house than Seena.	Roshini has the *biggest* house among them.
My friend, Bindhu looks happy. Bindhu looks *happier* than my other friends. Bindhu, looks the *happiest* while playing.`,

        `This cake is delicious. That cake is *more delicious* than this one. The chocolate cake is the *most delicious* of all.
Mary is smart. Jane is *smarter* than Mary. Sara is the *smartest* person I know.
This book is interesting. That book is *more interesting* than this one. The other book is the *most interesting* of all.`
      ]
    },
    {
      label: 'Notes',
      type: 'passage',
      id: 'br-am-notes',
      data: {
        title: 'British and American English',
        text: [
          `# British and American English
1. Pronunciation: British English and American sound noticeably different. The most obvious difference is the way the letter r is pronounced. In British English, when r comes after a vowel in the same syllable (as in car, hard, or market), the r is not pronounced. In American English, the r is pronounced.
2. Vocabulary: There are many differences between American and British English vocabulary. Here are 10 common words in American English followed by their British English equivalents:
American - British
antenna - aerial; mad - angry
anyplace - anywhere; fall - autumn
bill - bank note; attorney - barrister
cookie - biscuit; hood - bonnet
trunk - boot; movies - cinema
patrolman - constable; stove - cooker
crib - cot; wreck - crash
intersection - crossroads; drapes - curtains
thumbtack - drawing pin; generator - dynamo
movie - film; apartment - flat
overpass - flyover; yard - garden
boiler - grill; purse - handbag
billboard - hoarding; vacation - holiday
vacuum cleaner - hoover; sick - ill
intermission - interval; sweater - jumper
pitcher - jug; elevator - lift
truck - lorry; baggage - luggage
raincoat - mackintosh; highway - main road
corn - maize; diaper - nappy
vicious - nasty; noplace - nowhere
optometrist - optician; sidewalk - pavement
peek - peep; mail - post
mailbox - postbox; mailman - postman
baby carriage - pram; restroom - public toilet
blow-out - puncture; line - queue
traffic circle - roundabout; eraser - rubber
Scotch tape - cellotape; store - shop
wrench - spanner; faculty - staff 
candy - sweets; faucet - tap
cab - taxi; dish-towel - tea-towel
semester - term; schedule - timetable
can - tin; flashlight - torch
pants - trousers; vest - waistcoat
closet - wardrobe; windshield - windscreen
fender - wing; zipper - zip 
3. Spelling: Below are three rules you can follow.
a) Most words ending in -our in British English are spelled without the u in American English `,
          {
            type: 'html',
            text: `arbo<b>u</b>r/arbor; ardo<b>u</b>r/arbor <br>
armo<b>u</b>r/armor; behavio<b>u</b>r/behavior <br>
cando<b>u</b>r/candor; clamo<b>u</b>r/clamor <br>
colo<b>u</b>r/color; demeano<b>u</b>r/demeanor <br>
endeavo<b>u</b>r/endeavor; favo<b>u</b>r/favor <br>
flavo<b>u</b>r/flavor; harbo<b>u</b>r/habor <br>
hono<b>u</b>r/honor; humo<b>u</b>r/humor <br>
labo<b>u</b>r/labor; neighbo<b>u</b>r/neighbor <br>
odo<b>u</b>r/odor; parlo<b>u</b>r/parlor <br>
ranco<b>u</b>r/rancor; rigo<b>u</b>r/rigor <br>
rumo<b>u</b>r/rumor; savio<b>u</b>r/savior <br>
savo<b>u</b>r/savor; splendo<b>u</b>r/splendor <br>
tumo<b>u</b>r/tumor; valo<b>u</b>r/valor <br>
vigo<b>u</b>r/vigor`
          },
          `b) Most words ending in -re in British English are spelled with -er in American English`,
          {
            type: 'html',
            text: `calib<b>re</b>/calib<b>er</b>; cent<b>re</b>/cent<b>er</b> <br>
fib<b>re</b>/fib<b>er</b>; lit<b>re</b>/lit<b>er</b> <br>
lust<b>re</b>/lust<b>er</b>; meag<b>re</b>/meag<b>er</b> <br>
met<b>re</b>/met<b>er</b>; sab<b>re</b>/sab<b>er</b> <br>
scept<b>re</b>/scept<b>er</b>; sepulch<b>re</b>/sepulch<b>er</b> <br>
somb<b>re</b>/somb<b>er</b>; theat<b>re</b>/theat<b>er</b>`
          },
          `c) Many British English verbs ending in -ise are spelled with -ize in American English `,
          {
            type: 'html',
            text: `reali<b>s</b>e/reali<b>z</b>e, organi<b>s</b>e/organi<b>z</b>e, etc.`
          }
        ]
      }
    },
    {
      label: 'Multiple Choice Questions',
      type: 'mcq',
      id: 'mcq-brt-ame',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: `What is the most noticeable difference between the pronunciation of British and American English?`,
            options: `The way the letter "r" is pronounced, The way the letter "t" is pronounced, The way the letter "a" is pronounced, The way the letter "o" is pronounced`
          },
          {
            qText: `Which of the following words is an American English equivalent of the British English word "lift"?`,
            options: `elevator, pickup, truck, ride`
          },
          {
            qText: `Which of the following spelling rules is followed in American English for most words ending in -re in British English?`,
            options: `They are spelled with -er, They are spelled without the u, They are spelled with -ize, They are spelled with -our`
          }
        ]
      }
    },
    {
      id: 'match-am-br',
      label: 'Match the following',
      type: 'match',
      lockAfter: 1,
      commonData: {
        title:
          'Match the word used in American English with it British English alternative.'
      },
      data: [
        `antenna, aerial
mad, angry
anyplace, anywhere
fall, autumn
bill, bank note`,

        `cookie, biscuit
hood, bonnet
trunk, boot
movies, cinema
patrolman, constable`,

        `stove, cooker
crib, cot
wreck, crash
drapes, curtains
movie, film`,

        `apartment, flat
overpass, flyover
yard, garden
boiler, grill
purse, handbag`,

        `sick, ill
sweater, jumper
pitcher, jug
elevator, lift
truck, lorry`,

        `baggage, luggage
raincoat, mackintosh
highway, main road
corn, maize
diaper, nappy`,

        `vicious, nasty
noplace, nowhere
optometrist, optician
peek, peep
mail, post`,

        `mailbox, postbox
mailman, postman
baby carriage, pram
restroom, public toilet
blow-out, puncture`,

        `line, queue
eraser, rubber
Scotch tape, cellotape
store, shop
wrench, spanner`,

        `faculty, staff 
candy, sweets
faucet, tap
cab, taxi
dish-towel, tea-towel`,

        `semester, term
schedule, timetable
can, tin
flashlight, torch
zipper, zip`,

        `pants, trousers
vest, waistcoat
closet, wardrobe
windshield, windscreen
fender, wing`,

        `attorney, barrister
intersection, crossroads
traffic circle, roundabout
thumbtack, drawing pin
generator, dynamo`,

        `sidewalk, pavement
billboard, hoarding
intermission, interval
vacation, holiday
vacuum cleaner, hoover`
      ]
    },
    {
      label: 'British or American',
      id: 'british-american-3',
      type: 'group',
      commonData: {
        title: 'Classify the below words as American or British English'
      },
      data: [
        {
          types: [
            {
              name: 'American',
              text: 'antenna, mad, anyplace, fall, bill'
            },
            {
              name: 'British',
              text: 'aerial, angry, anywhere, autumn, bank note'
            }
          ]
        },
        {
          types: [
            {
              name: 'American',
              text: 'attorney, cookie, hood, trunk, movies'
            },
            {
              name: 'British',
              text: 'barrister, biscuit, bonnet, boot, cinema'
            }
          ]
        },
        {
          types: [
            {
              name: 'American',
              text: 'patrolman, stove, crib, wreck'
            },
            {
              name: 'British',
              text: 'constable, cooker, cot, crash'
            }
          ]
        },
        {
          types: [
            {
              name: 'American',
              text: 'intersection, drapes, thumbtack, generator'
            },
            {
              name: 'British',
              text: 'crossroads, curtains, drawing pin, dynamo'
            }
          ]
        },
        {
          types: [
            {
              name: 'American',
              text: 'movie, apartment, overpass, yard'
            },
            {
              name: 'British',
              text: 'film, flat, flyover, garden'
            }
          ]
        }
      ]
    },
    {
      id: 'fill-up-am',
      label: 'American English',
      type: 'fillup',
      commonData: {
        title: `Fill in the blanks using words in American English`
      },
      data: [
        `I'd like to hang the *drapes (curtains)* tonight. Do you have time?
We took the *elevator (lift)* to the 10th floor.
Would you like to see a *movie (film)* tonight?
Have you seen Tom's new *apartment (flat)* yet? It's very nice.`,

        `I'll take the *garbage (rubbish)* out before I leave tomorrow morning.
Take the second exit at the *traffic circle (roundabout)*.
Let's get have some *potato chips (crisps)* with lunch. 
Could you hand me the *flashlight (torch)* so I can take a look in the closet?`,

        `Peter wore a pair of slim fitting *pants (trousers)* to the party.
She opened the *tap (spigot)* and watered the garden.
Have you ever worn a *vest (waistcoat)* with a suit?
I'll pick up the *mail (post)* on the way home from work.`
      ]
    },
    {
      id: 'fill-up-2',
      label: 'British English',
      type: 'fillup',
      commonData: {
        title: `Fill in the blanks using words in British English`
      },
      data: [
        `We need to find a *public toilet (restroom)* soon.
Let's get the *pram (baby carriage)* and take a walk with Jennifer. 
I'm afraid I had a *puncture (blow-out)* and had to get it fixed.
Could you bring in that *tin (can)* of tuna over there?`,

        `She's very *mean (stingy)* with her money. Don't ask her for any help.
I generally don't wear a suit with a *waistcoat (vest)*.
We should ask a *constable (patrolman)* for help. 
Get on *queue (line)* and I'll get us something to eat.`,

        `Grab a *tea-towel (dish towel)* and clean that up.
Look at the *schedule (time table)* and see when the train leaves.
The car has a dent in the *wing (fender)*.
Choose a *jumper (sweater)* from the *wardrobe (closet)* and let's get going.
The lights have gone out, and we'll need a *torch (flashlight)*.`
      ]
    },
    {
      label: 'Notes',
      type: 'passage',
      id: 'br-am',
      data: {
        title: 'British and American English Grammar',
        text: [
          `# Grammar Rules
1. Collective nouns are singular in American English Grammar. British English usually treats collective nouns as plural nouns, so the verb must agree with the plural form. 
British English: The staff are taking the day off.
American English: The staff is taking the day off.
British English: The committee are making the decision today.
American English: The committee is making the decision today.

2. Americans don't use the present perfect tense much. However, British speakers sometimes use the present perfect tense instead of the simple past.
American English: He ate his lunch.
British English: He has eaten his lunch.
American English: I went to the store.
British English: I have gone to the store.

3. Transitive and Intransitive verbs flip in American and British English.
British English: He appealed against the decision. (Intransitive)
American English: He appealed the decision. (Transitive)

4. American English verbs simply need an “-ed” at the end in order to transform them into the past tense. However, British English often adds a “-t” at the end instead of the “-ed.”
British English: learnt, dreamt, dwelt
American English: learned, dreamed, dwelled

5. The use of “have” vs “have got” varies in American and British English.
British English: I have got a dog.
American English: I have a dog.
British English: My job has got better.
American English: My job has gotten better.

6. The usage of modal verbs differs between British and American English. For example, shall and shan’t are almost exclusively used by British speakers, as American speakers find these words extremely formal. Americans use will and won’t instead.
British English: I shall go.
American English: I will go.
British English: I shan't attend.
American English: I won't attend.

7. American English changes the position of adverbs quite easily, sometimes placing them before the verb and sometimes after it. On the other hand, British speakers usually place the adverb after the verb.
American English: She drank quickly./She quickly drank.
British English: She drank quickly.

8. In American English grammar, the word “well” is only used as an adverb to mean “good.”
However, in British English, the word “well” can also be used to mean “very.”
British English: I'm well sleepy.
American English: I'm very sleepy.`
        ]
      }
    },
    {
      label: 'British or American',
      type: 'classifySentence',
      id: 'british-american-2',
      commonData: {
        title:
          'Classify the sentences as British English or American English based on the grammar usage.',
        types: ['British', 'American']
      },
      data: [
        [
          `The staff are taking the day off.
The committee are making the decision today.
He has eaten his lunch.
I have gone to the store.`,

          `The staff is taking the day off.
The committee is making the decision today.
He ate his lunch.
I went to the store.`
        ],
        [
          `He appealed against the decision.
I have got a dog.
My job has got better.
I'm well sleepy.`,

          `He appealed the decision.
I have a dog.
My job has gotten better.
I'm very sleepy.`
        ],
        [
          `I live in a flat in London.
The lorry is blocking the road.
I need to buy a new torch for camping.`,

          `I live in an apartment in New York.
The truck is blocking the road.
I need to buy a new flashlight for camping.`
        ],
        [
          `Would you like a biscuit with your tea?
I had to wait in a long queue to get my passport renewed.
I need to fill up my car with petrol.`,

          `Would you like a cookie with your coffee?
I had to wait in a long line to buy concert tickets.
I need to fill up my car with gasoline.`
        ],
        [
          `I need to buy a new pair of trousers for work.
It's cold outside, so I'm wearing my favorite jumper.
I put my shopping bags in the boot of the car.`,

          `I need to buy a new pair of pants for work.
It's cold outside, so I'm wearing my favorite sweater.
I put my shopping bags in the trunk of the car.`
        ]
      ]
    },
    {
      id: 'spelling',
      label: 'Spelling',
      type: 'match',
      lockAfter: 1,
      commonData: {
        title: 'Match the British spelling with the American counterpart.'
      },
      data: [
        `aeon, eon
aesthetic, esthetic
appal, appall
carburettor, carburetor
counsellor, counselor`,

        `dishevelled, disheveled
distil, distill
enrol, enroll
fulfil, fufill
instalment, installment`,

        `instil, instill
skilful, skillful
programme, program
tonne, ton
colour, color`,

        `demeanour, demeanor
endeavour, endeavor
favour, favor
flavour, flavor
harbour, habor`,

        `honour, honor
humour, humor
labour, labor
neighbour, neighbor
odour, odor`,

        `parlour, parlor
rancour, rancor
rigour, rigor
rumour ,rumor
saviour, savior`,

        `savour, savor
splendour, splendor
tumour, tumor
valour, valor
vigour, vigor`,

        `calibre, caliber
centre, center
fibre, fiber
litre, liter
lustre, luster`,

        `meagre, meager
metre, meter
sabre, saber
sceptre, scepter
sepulchre, sepulcher`,

        `sombre, somber
theatre, theater
aeroplane, airplane
artefact, artifact
grey, gray`,

        `jewellery, jewelry
kerb, curb
plough, plow
sceptical, skeptical
sulphur, sulfur`,

        `chequered, checkered
cosy, cozy
doughnut, donut
draught, draft
gaol, jail`
      ]
    },
    {
      type: 'rightOne',
      label: 'British English',
      id: 'biggest',
      commonData: {
        title: `Pick the british spelling.`,
        printTitle: 'Circle the british spelling.',
        fontSize: '1.3rem'
      },
      data: [
        `arbour, arbor
ardour, ardor
armour, armor
behaviour, behavior
candour, candor`,

        `clamour, clamor
colour, color
demeanour, demeanor
endeavour, endeavor
favour, favor`,

        `flavour, flavor
harbour, habor
honour, honor
humour, humor
labour, labor`,

        `neighbour, neighbor
odour, odor
parlour, parlor
rancour, rancor
rigour, rigor`,

        `rumour, rumor
saviour, savior
savour, savor
splendour, splendor
tumour, tumor`,

        `valour, valor
vigour, vigor
calibre, caliber
centre, center
fibre, fiber`,

        `litre, liter
lustre, luster
meagre, meager
metre, meter`,

        `sabre, saber
sceptre, scepter
sepulchre, sepulcher
sombre, somber
theatre, theater`
      ]
    },
    {
      label: 'British or American',
      id: 'british-american',
      type: 'group',
      commonData: {
        title: 'Classify the below spellings as American or British English'
      },
      data: [
        {
          types: [
            {
              name: 'American',
              text: 'arbor, ardor, armor, behavior, candor'
            },
            {
              name: 'British',
              text: 'arbour, ardour, armour, behaviour, candour'
            }
          ]
        },
        {
          types: [
            {
              name: 'American',
              text: 'clamor, color, demeanor, endeavor, favor'
            },
            {
              name: 'British',
              text: 'clamour, colour, demeanour, endeavour, favour'
            }
          ]
        },
        {
          types: [
            {
              name: 'American',
              text: 'flavor, habor, honor, humor'
            },
            {
              name: 'British',
              text: 'flavour, harbour, honour, humour'
            }
          ]
        },
        {
          types: [
            {
              name: 'American',
              text: 'rumor, savior, savor, splendor, tumor'
            },
            {
              name: 'British',
              text: 'rumour, saviour, savour, splendour, tumour'
            }
          ]
        },
        {
          types: [
            {
              name: 'American',
              text: 'liter, luster, meager, meter, saber'
            },
            {
              name: 'British',
              text: 'litre, lustre, meagre, metre, sabre'
            }
          ]
        }
      ]
    }
  ]
};
