export default {
  id: 'verb-7',
  label: 'Verb',
  lockAfter: 3,
  list: [
    {
      label: 'Notes',
      type: 'passage',
      id: 'verb',
      data: {
        title: 'Verb',
        text: [
          `The verb is a word that expresses some action, feeling or existence. It tells us something about the subject.`,
          {
            type: 'html',
            text: `<b>Examples</b>: Lions <b>roar</b>. (<b>action</b>); Boys <b>fly</b> kites. (<b>action</b>); I <b>feel</b> sorry. (<b>feeling</b>); Ashoka was a <b>great</b> king. (<b>existence</b>)`
          },
          `Verbs are divided into two parts; Main Verbs and Helping Verbs.
Main verbs are also of two kinds:

1. Finite Verb: They change their forms according to the person and number of the subject and the tense also.`,
          {
            type: 'html',
            text: `<b>Examples</b>: He <b>reads</b>. I <b>read</b>.`
          },
          `2. Non-finite Verb: They do not change their forms according to the number, person or tense of the subject. The infinitives, gerunds and participles are called non-finite verbs.`
        ]
      }
    },
    {
      label: 'Multiple Choice Questions',
      type: 'mcq',
      id: 'mcq-vrb',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: `Which type of verb changes its form according to the person and number of the subject and the tense also?`,
            options: `Finite verb, Helping verb, Non-finite verb`
          },
          {
            qText: `Which of the following is a non-finite verb?`,
            options: `Running, runs, ran, run`
          },
          {
            qText: `What is the difference between finite and non-finite verbs?`,
            options: `Finite verbs change their form while non-finite verbs do not, Non-finite verbs change their form while finite verbs do not, Finite verbs do not express actions while non-finite verbs do, Non-finite verbs are used for singular subjects, while finite verbs are used for plural subjects.`
          }
        ]
      }
    },
    {
      id: 'helping-verb',
      label: 'Helping Verbs',
      type: 'fillup',
      commonData: {
        noOptions: true,
        title:
          'Fill in the blanks with the correct form of helping verbs (is/am/are).'
      },
      lockAfter: 1,
      data: [
        `Priya *is* my sister.
I *am* very interested in the new project.
We *are* best friends.
Vishnu *is* my friend since kindergarten.
*Are* you happy here?`,

        `*Is* this your book?
I *am* going to meet my granny today.
*Are* you aware of this poem written by William Shakespeare?
India *is* a secular country.
The children *are* studying for their exams.`,

        `She *is* studying for her exam.
I *am* feeling tired after a long day at work.
They *are* planning a trip to Europe.
He *is* the CEO of the company.
We *are* going to the park this afternoon.`,

        `The sky *is* blue on a clear day.
You *are* my best friend.
The flowers *are* blooming in the garden.
I *am* not sure what to wear to the party.
The children *are* playing in the yard.`,

        `The boy *is* very mischievous.
I *am* feeling very sleepy.
The dog *is* barking at the stranger.
The cats *are* fighting for food.
*Are* you sure what you said is true?`
      ]
    },
    {
      id: 'has-have-had',
      label: 'Has/Have/Had',
      type: 'fillup',
      commonData: {
        noOptions: true,
        title: 'Fill in the blanks using has/have/had.'
      },
      lockAfter: 1,
      data: [
        `Beena *had* a meeting yesterday.
Do you want to *have* an ice cream?
The lion *has* a big mane.
My parents *had* gone to a party a few days back.
*Have* you seen Reem?`,

        `*Had* he not moved to a new city he wouldn't be sick.
All the members of the committee *have* arrived now.
*Have* you seen my new scooter?
Raj *had* to go back home.
My sister *has* her final exam tomorrow.`,

        `She *has* a lot of experience in her field.
They *have* been friends since childhood.
He *had* breakfast before leaving for work.
We *have* a meeting at 2 p.m. today.
The cat *has* caught a mouse.`,

        `I *have* never been to Paris before.
She *had* a headache last night.
They *have* lived in this city for five years.
He *has* forgotten his password again.
We *had* a great time at the party last weekend.`,

        `I *have* a Husky.
They do not *have* a bicycle.
We *have* not visited the new park yet.
Lady Macbeth *had* a lust for power.
Rita *had* a seminar before.`
      ]
    },
    {
      label: 'Notes',
      type: 'passage',
      id: 'regular-irregular-verb',
      data: {
        title: 'Verb',
        text: [
          `Regular verbs from their past and past participle forms by adding -ed.`,
          {
            type: 'html',
            text: `<b>Examples</b>: walk-walk<b>ed</b>-walk<b>ed</b><br>
dance-danc<b>ed</b>-danc<b>ed</b>`
          },
          `Irregular verbs form their past and past participle forms in different ways. There are mainly three types of irregular verbs.

1. Verbs in which all the three forms are the same.`,
          {
            type: 'html',
            text: `<b>Example</b>: put-<b>put</b>-<b>put</b>`
          },
          `2. Verbs in which two of the three forms are the same.`,
          {
            type: 'html',
            text: `<b>Example</b>: sit-<b>sat</b>-<b>sat</b>`
          },
          `3. Verbs in which all three forms are different.`,
          {
            type: 'html',
            text: `<b>Example</b>: drink-<b>drank</b>-<b>drunk</b>`
          },
          `=> Some verbs can be both regular and irregular.`,
          {
            type: 'html',
            text: `<b>Examples</b>: Burn-burn<b>t</b>-burn<b>t</b> (<b>irregular</b>); Burn-burn<b>ed</b>-burn<b>ed</b> (<b>regular</b>)<br>
Dream-dream<b>t</b>-dream<b>t</b> (<b>irregular</b>); Dream-dream<b>ed</b>-dream<b>ed</b> (<b>regular</b>)`
          }
        ]
      }
    },
    {
      label: 'Multiple Choice Questions',
      type: 'mcq',
      id: 'mcq-reg-irr',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: `Which type of verb forms its past and past participle forms by adding -ed?`,
            options: ` Regular verbs, Irregular verbs, Both regular and irregular verbs, None of the above`
          },
          {
            qText: `Which of the following is an example of a verb that can be both regular and irregular?`,
            options: `Burn, sit, put, drink`
          },
          {
            qText: `What is the past participle form of the irregular verb "dream" in the regular form?`,
            options: `Dreamed, Dreamt, Dreamed or dreamt, None of the above`
          }
        ]
      }
    },
    {
      label: 'Simple Past',
      id: 'complete',
      type: 'completePuzzle',
      lockAfter: 1,
      commonData: {
        type: 'rightOpen',
        fontSize: '1rem',
        title:
          'Drag and drop the simple past form of the following irregular verbs.',
        printTitle:
          'Pick the simple past form of the following irregular verbs.',
        leftWidth: 75,
        rightWidth: 245
      },
      data: [
        `Seek, Sought, Soght
Choose, Chose, Chosen
Think, Thought, Thoght
Catch, Caught, Catched
Wear, Wore, Worn`,

        `Tear, Tore, Torn
Bear, Bore, Borne
Buy,  Bought, Buyed
Fight, Fought, Fright
Break, Broke, Broken`,

        `Speak, Spoke, Spoken
Take, Took, Taken
Shake, Shook, Shaken
Sink, Sank, Sunk
Drink, Drank, Drunk`,

        `Sing, Sang, Sung
Ride, Rode, Ridden
Write, Wrote, Written
Get, Got, Gotten
Strive, Strove, Striven`,

        `Give, Gave, Given
Arise, Arose, Arisen
Know, Knew, Known
Grow, Grew, Grown
Lay, Laid, Laid`,

        `Keep, Kept, Keped
Cut, Cut, Cuted
Swing, Swung, Swunged
Draw, Drew, Drawn
Rise, Rose, Risen`,

        `Forgive, Forgave, Forgiven
Forget, Forgot, Forgotten
Bite, Bit, Bitten
Hide, Hid, Hidden
Ring, Rang, Rung`,

        `Spring, Sprang, Sprung
Begin, Began, Begun
Mistake, Mistook, Mistaken
Wake, Woke, Woken
Steal, Stole, Stolen`,

        `Light, Lit, Light
Bring, Brought, Bringed
Teach, Taught, Teached
Put, Put, Puted
Shut, Shut, Shuted`
      ]
    },
    {
      label: 'Past Participle',
      id: 'complete',
      type: 'completePuzzle',
      lockAfter: 1,
      commonData: {
        type: 'rightOpen',
        fontSize: '1rem',
        title:
          'Drag and drop the past participle form of the following irregular verbs.',
        printTitle:
          'Pick the past participle form of the following irregular verbs.',
        leftWidth: 75,
        rightWidth: 245
      },
      data: [
        `Seek, Sought, Sight
Choose, Chosen, Chose
Think, Thought, Think
Catch, Caught, Catch
Wear, Worn, Wore`,

        `Tear, Torn, Tore
Bear, Borne, Bore
Buy, Bought,  Bought
Fight, Fought, Fought
Break, Broken, Broke`,

        `Speak, Spoken, Spoke
Take, Taken, Took
Shake, Shaken, Shook
Sink, Sunk, Sank
Drink, Drunk, Drank`,

        `Sing, Sung, Sang
Ride, Ridden, Rode
Write, Written, Wrote
Get, Gotten, Got
Strive, Striven, Strove`,

        `Give, Given, Gave
Arise, Arisen, Arose
Know, Known, Knew
Grow, Grown, Grew
Lay, Laid, Lay`,

        `Keep, Kept, Keep
Cut, Cut, Cuted
Swing, Swung, Swunged
Draw, Drawn, Drew
Rise, Risen, Rose`,

        `Forgive, Forgiven, Forgave
Forget, Forgotten, Forgot
Bite, Bitten, Bit
Hide, Hidden, Hid
Ring, Rung, Rang`,

        `Spring, Sprung, Sprang
Begin, Begun, Began
Mistake, Mistaken, Mistook
Wake, Woken, Woke
Steal, Stolen, Stole`,

        `Light, Lit, Lite
Bring, Brought, Bring
Teach, Taught, Teach
Put, Put, Puted
Shut, Shut, Shuted`
      ]
    },
    {
      id: 'irregular-verb',
      label: 'Irregular Verb',
      type: 'fillup',
      commonData: {
        noOptions: true,
        title:
          'Find out the simple past form and the past participle form of the following irregular verbs.'
      },
      lockAfter: 1,
      data: [
        `Seek - *Sought* - Sought
Choose - Chose - *Chosen*
Think - *Thought* - Thought
Catch - Caught - *Caught*
Wear - *Wore* - Worn`,

        `Tear - Tore - *Torn*
Bear - *Bore* - Borne
Buy - Bought - *Bought*
Fight - *Fought* - Fought
Break - Broke - *Broken*`,

        `Speak - *Spoke* - Spoken
Take - Took - *Taken*
Shake - *Shook* - Shaken
Sink - Sank - *Sunk*
Drink - *Drank* - Drunk`,

        `Sing - Sang - *Sung*
Ride - *Rode* - Ridden
Write - Wrote - *Written*
Get - *Got* - Gotten
Strive - Strove - *Striven*`,

        `Give - *Gave* - Given
Arise - Arose - *Arisen*
Know - *Knew* - Known
Grow - Grew - *Grown*
Lay - *Laid* - Laid`,

        `Keep - Kept - *Kept*
Cut - *Cut* - Cut
Swing - Swung - *Swung*
Draw - *Drew* - Drawn
Rise - Rose - *Risen*`,

        `Forgive - *Forgave* - Forgiven
Forget - Forgot - *Forgotten*
Bite - *Bit* - Bitten
Hide - Hid - *Hidden*
Ring - *Rang* - Rung`,

        `Spring - Sprang - *Sprung*
Begin - *Began* - Begun
Mistake - Mistook - *Mistaken*
Wake - *Woke* - Woken
Steal - Stole - *Stolen*`,

        `Light - *Lit* - Lit
Bring - Brought - *Brought*
Teach - *Taught* - Taught
Put - Put - *Put*
Shut - *Shut* - Shut`
      ]
    },
    {
      id: 'irregular-verb-fillup',
      label: 'Fill in the blanks',
      type: 'fillup',
      commonData: {
        noOptions: true,
        title: 'Fill in the blanks with the appropriate tense form of the verb.'
      },
      lockAfter: 1,
      data: [
        `Our teacher said, "Please, do not forget to bring your workbook tomorrow." But Riya still *forgot* to bring her textbook the next day. I would have *forgotten* to bring it if Reem had not reminded me.
Why is no one opening the door? Did you ring the bell? Yes, I *rang* it several times but no one came to the door.`,

        `I asked my sister to wake me at 6 a.m. But she did not *wake* me. I *woke* up at 8 a.m. and missed my bus. If she had *woken* me up I would have reached the school on time.
I had cast my rod and was waiting for the fish to bite the bait. I reeled in the rod as soon as the fish *bit* on the bait. But in that short while the clever fish had already *bitten* off the bait from the hook and successfully escaped.`,

        `The teacher suddenly asked me to speak in the morning assembly. I started to panic but I managed to gather some courage and *spoke* about the "Ill effects of Technology" for five minutes. After I had *spoken*, my teacher called me aside and praised me for speaking well.`,

        `My mother asked me to water the plants in the garden while she was away. I *watered* the plants every day for a week until my mother returned. She was happy to see that the plants were healthy and thanked me for taking care of them. If I had not *watered* the plants, they would have withered away.`,

        `The coach instructed the players, "Don't forget to wear your team uniform for the game." However, John *forgot* to bring his jersey to the match. If it wasn't for his teammate, Jake, who lent him an extra uniform, he would not have been able to play.`
      ]
    },
    {
      label: 'Notes',
      type: 'passage',
      id: 'transitive-intransitive',
      data: {
        title: 'Transitive and Intransitive Verb',
        text: [
          `A transitive verb is a type of verb that needs an object to make complete sense of the action being performed by the subject.`,
          {
            type: 'html',
            text: `<b>Example</b>: The teacher gave me a new notebook.`
          },
          `An intransitive verb is a verb that does not necessarily require an object to make sense of the action being performed by the subject in a sentence or context.`,
          {
            type: 'html',
            text: `<b>Example</b>: The baby is sleeping.`
          }
        ]
      }
    },
    {
      label: 'Multiple Choice Questions',
      type: 'mcq',
      id: 'mcq-tra-int',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: `What is a transitive verb?`,
            options: `A verb that needs an object to make complete sense of the action being performed by the subject, A verb that does not require an object to make complete sense, A verb that expresses an action without a subject`
          },
          {
            qText: `Which of the following is an example of a transitive verb?`,
            options: `They ate candy, She laughed, He cried, The dog barked loudly`
          },
          {
            qText: `What is an intransitive verb?`,
            options: `A verb that does not necessarily require an object to make sense of the action being performed by the subject in a sentence or context, A verb that requires an object to make complete sense, A verb that does not express an action`
          },
          {
            qText: `Which of the following is an example of an intransitive verb?`,
            options: `The flowers bloomed, She cooked dinner, He kicked the ball, They sang a song`
          }
        ]
      }
    },
    {
      label: 'Transitive or Intransitive',
      type: 'classifySentence',
      id: 'transitive-or-intransitive',
      commonData: {
        title: 'Classify as a transitive or intransitive verb.',
        types: ['Transitive', 'Intransitive']
      },
      data: [
        [
          `Dave bought a new bicycle.
The children passed the books around.
Can you bring me some mangoes?`,

          `Firoz laughed so hard.
I studied in California.`
        ],
        [
          `Eliza found the kittens on the corner of the street.
Roshan met his best friend at the park.
Javed loved his new bike.`,

          `Jack came home in the evening.
The car stopped suddenly, in the middle of the road.`
        ],
        [
          `She read the book in one sitting. 
  They baked a cake for the party.
  He painted the fence white. `,

          `The sun rose early this morning. 
  The flowers bloomed in the garden. `
        ],
        [
          `I opened the door to let the cat in. 
  She played the piano beautifully.`,

          `The children laughed and played in the park.
  The dog barked loudly at the mailman. 
The leaves fell from the trees in the autumn breeze. `
        ],
        [
          `I am eating an apple. 
  She painted the entire room. 
  They bought a new car last week. `,

          `The sun is shining brightly. 
  They are running in the park. `
        ]
      ]
    },
    {
      id: 'fillup',
      label: 'Fill in the blanks',
      type: 'fillup',
      commonData: {
        title: `Fill in the blanks using appropriate forms of verbs.`
      },
      data: [
        `Riya *runs (run)* a mile every day.
The dogs *bark (barks)* all night.
The cat *caught (catch)* the snake.
We *play (plays)* in the park in the evenings.
Mira *went (go)* school yesterday.`,

        `Sheema *wants (want)* to be a Police Officer when she grows up.
Mahir *ran (run)* back to his mother.
Anna *walks (walk)* very fast.
You can *come (came)* with us.
They *went (go)* to a picnic together.`,

        `Have you *seen (see)* the baby?
Harry Styles *sung (sing)* so well.
The bird *flew (flown)* away from the cage.
I *wrote (write)* a letter for my friend.
The friends *drove (drive)* back from the trip.`,

        `Did you *do (done)* anything?
They *played (plays)* till late evening.
Can you *swim (swam)* well?
Cheetahs *run (ran)* very fast.
My brother and I *talk (talks)* every day.`,

        `I *run (ran)* five miles every morning to stay in shape.
They *studied (study)* for their exams all day yesterday.
She *plays (play)* the piano beautifully.
He *was watching (watch)* his favorite TV show when I called.
We *are planning (plan)* to go on vacation next month.`
      ]
    },
    {
      label: 'Multiple Choice Questions',
      type: 'mcq',
      data: {
        title: 'Identify the underlined part and choose the correct option.',
        questions: [
          {
            qText: `The storm *caught* the sailor.`,
            options: `Transitive verb, Intransitive verb, Helping verb, Modals`
          },
          {
            qText: `His friend told him not to pluck *the flowers*.`,
            options: `Object, Complement, Pronoun, Linker`
          },
          {
            qText: `According to me, she *should* work hard.`,
            options: `Modals, Object, Complement, Auxiliary`
          },
          {
            qText: `The gardener *trimmed* the plants in the garden.`,
            options: `Transitive verb, Object, Complement, Intransitive verb`
          },
          {
            qText: `The athlete *has* broken his own record.`,
            options: `Helping verb, Transitive verb, Intransitive verb, Modal`
          }
        ]
      }
    },
    {
      label: 'Complete the paragraph',
      type: 'fillup',
      id: 'fillup',
      data: {
        noOptions: true,
        title: `Use the correct form of the verb given in the brackets to complete the following paragraph.`,
        text: `Mr Koch, the mathematics teacher *gave* (give) Albert the reference he *wanted* (want).
Albert *got* (get) summoned to the head teacher's room. The head teacher told Albert that his work *was* (be) terrible and he *would* (will) be punished if he *continued* (continue) the same way. Albert was *tempted* (tempt) to say a few words, then thought otherwise.`
      }
    },
    {
      label: 'Notes',
      type: 'passage',
      id: 'modal-auxiliaries',
      data: {
        title: 'Modal Auxiliaries',
        text: [
          `Modals are auxiliary verbs that express the mode of action denoted by the main verb.`,
          {
            type: 'html',
            text: `The modal auxiliary includes <b>can</b>, <b>could</b>, <b>may</b>, <b>might</b>, <b>would</b>, <b>should</b>, <b>must</b>, <b>shall</b>, <b>will</b>, <b>need</b>, <b>dare</b>, <b>ought to</b>, <b>used to</b>, etc.`
          },
          `# Uses of 'Can' 
1. To express ability or power.`,
          {
            type: 'html',
            text: `<b>Examples</b>: He <b>can</b> read this language.<br>
He <b>can</b> lift this heavy box.`
          },
          `2. To express permission.`,
          {
            type: 'html',
            text: `<b>Examples</b>: You <b>can</b> eat this chocolate.<br>
She <b>can</b> never enter this house.`
          },
          `# Uses of 'Could'
1. To show power or ability in past.`,
          {
            type: 'html',
            text: `<b>Examples</b>: She <b>could</b> dance well in her youth.<br>
We <b>could</b> complete this task.`
          },
          `2. To show possibility in past.`,
          {
            type: 'html',
            text: `<b>Examples</b>: She <b>could</b> buy a pen if she had money.<br>
Ramu <b>could</b> play cricket if there had been no rain.`
          },
          `3. To make a polite request.`,
          {
            type: 'html',
            text: `<b>Examples</b>: <b>Could</b> you help me now?<br>
<b>Could</b> they spare that meat?`
          },
          `4. To show condition.`,
          {
            type: 'html',
            text: `<b>Examples</b>: If we had got up earlier, we <b>could</b> have completed this.<br>
We <b>could</b> have seen the match if there had been an electricity supply.`
          },
          `# Uses of 'May'
1. To express permission, possibility.`,
          {
            type: 'html',
            text: `<b>Examples</b>: <b>May</b> I go there? 
It <b>may</b> rain heavily.`
          },
          `2. To express wish, prayer.`,
          {
            type: 'html',
            text: `<b>Examples</b>: <b>May</b> you live long!<br>
<b>May</b> God bless you with fortune!`
          },
          `3. To express purpose.`,
          {
            type: 'html',
            text: `<b>Examples</b>: She works so that she <b>may</b> prosper.<br>
We study so that we <b>may</b> pass the exam.`
          },
          `# Uses of 'Might'
1. To show permission, possibility in the past.`,
          {
            type: 'html',
            text: `<b>Example</b>: I <b>might</b> be sent to the hostel.`
          },
          `2. To express purpose in the past.`,
          {
            type: 'html',
            text: `<b>Examples</b>: He wore a scarf so that he <b>might</b> not burn his skin.<br>
We rushed so that we <b>might</b> not miss our train.`
          },
          `3. To make a request.`,
          {
            type: 'html',
            text: `<b>Examples</b>: If possible, you <b>might</b> bring me a glass of water.<br>
Condition allowing, they <b>might</b> be seeking favor from me.`
          },
          `4. To make suggestions or criticism.`,
          {
            type: 'html',
            text: `<b>Example</b>: She <b>might</b> have picked other issues.`
          },
          `3. To make a polite request.`,
          {
            type: 'html',
            text: `<b>Examples</b>: <b>Could</b> you help me now?<br>
<b>Could</b> they spare that meat?`
          },
          `4. To show condition.`,
          {
            type: 'html',
            text: `<b>Examples</b>: If we had got up earlier, we <b>could</b> have completed this.<br>
We <b>could</b> have seen the match if there had been an electricity supply.`
          },
          `# Uses of 'Would'
1. To show past habit and unreal condition.`,
          {
            type: 'html',
            text: `<b>Examples</b>: He <b>would</b> rise at 5 o'Clock. 
What <b>would</b> you like to have? Tea or coffee.`
          },
          `2. To make a polite request.`,
          {
            type: 'html',
            text: `<b>Examples</b>: <b>Would</b> you lend me your pen?<br>
<b>Would</b> you give me your scooter?`
          },
          `# Uses of 'Should'
1. To express duty and obligation.`,
          {
            type: 'html',
            text: `<b>Examples</b>: The police <b>should</b> protect us.<br>
You <b>should</b> respect your parents.`
          },
          `2. To show advice, suggestion.`,
          {
            type: 'html',
            text: `<b>Examples</b>: They <b>should</b> follow the rules.<br> 
You <b>should</b> take medicine.`
          },
          `3. To express imagination.`,
          {
            type: 'html',
            text: `<b>Examples</b>: <b>Should</b> you lose your money, go to ATM.<br>
<b>Should</b> you forget the password, retry then.`
          },
          `4. To express probability, polite command.`,
          {
            type: 'html',
            text: `<b>Examples</b>: She <b>should</b> be in the library.<br> 
You <b>should</b> play the game fairly.`
          },
          `# Uses of 'Must'
1. To show prohibition, compulsion.`,
          {
            type: 'html',
            text: `<b>Examples</b>: You <b>must</b> not touch this.<br>
She <b>must</b> feel sorry for you.`
          },
          `2. To show necessity or obligation.`,
          {
            type: 'html',
            text: `<b>Examples</b>: Team <b>must</b> win the game.<br>
You <b>must</b> pay your bill on time.`
          },
          `3. To show strong advice.`,
          {
            type: 'html',
            text: `<b>Examples</b>: Police <b>must</b> take care of emotions of the criminals.<br>
Leaders <b>must</b> promise what is viable to them.`
          },
          `# Uses of 'Shall/Will'
1. Shall is used for 1st person subject - I, We
2. Will is used for 2nd and 3rd person subject - You, he, she, it, they.
But, to show the emphasis, they can be interchanged with each other. Therefore, when one needs to show determination then the usage with the auxiliary would be:
=> Will 1st person subject-I, we
=> Shall 2nd and 3rd person subject - You, he, she, it, they.`,
          {
            type: 'html',
            text: `<b>Examples</b>: I <b>shall</b> go. (<b>Simple future</b>)<br>
I <b>will</b> go. (<b>Determination</b>)<br>
She <b>will</b> win. (<b>Simple future</b>)<br>
She <b>shall</b> win. (<b>Emphasized act</b>)`
          },
          `# Uses of 'Need'
1. To express prohibition.`,
          {
            type: 'html',
            text: `<b>Examples</b>: <b>Need</b> I go there.<br>
<b>Need</b> we plan in advance.`
          },
          `# Uses of 'Dare'
1. To express a negation with interrogation.`,
          {
            type: 'html',
            text: `<b>Examples</b>: How <b>dare</b> you touch my pen?<br>
She <b>dare</b> not play tennis with me.`
          },
          `## Uses of 'Used to'
1. To express a past habit.`,
          {
            type: 'html',
            text: `<b>Examples</b>: She <b>used to</b> go to perform in movies or dramas.<br>
I <b>used to</b> play cricket in 2005.`
          },
          `2. To express a habit of present that has its roots in the past.`,
          {
            type: 'html',
            text: `<b>Examples</b>: My grandfather is not <b>used to</b> sweets.<br>
I am <b>used to</b> a life full of struggle.`
          }
        ]
      }
    },
    {
      label: 'Multiple Choice Questions',
      type: 'mcq',
      id: 'mcq-mdl',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: `Which of the following modal auxiliary verbs expresses the ability or power of the subject?`,
            options: `can, may, could, should `
          },
          {
            qText: `Which of the following modal auxiliary verbs is used to express a polite request?`,
            options: `could, might, should, must`
          },
          {
            qText: `Which of the following modal auxiliary verbs is used to show prohibition or compulsion?`,
            options: `must, shall, would, need`
          },
          {
            qText: `Which of the following modal auxiliary verbs is used to express past habit or unreal condition?`,
            options: `would, shall, will, might`
          },
          {
            qText: `Which of the following modal auxiliary verbs is used to express obligation or duty?`,
            options: `must, need, may, need`
          }
        ]
      }
    },
    {
      label: 'Choose the Correct Answer',
      id: 'mcq-modal',
      type: 'mcq',
      commonData: {
        title: 'Choose the most suitable answer to fill in the blank.'
      },
      data: [
        {
          questions: [
            {
              qText: 'You are late. You ____ hurry.',
              options: 'must, will, may, can'
            },
            {
              qText: '“____ I have a piece of cake, please?” I asked.',
              options: 'May, Will, Must, Shall'
            },
            {
              qText: 'The little boy ___ speak very well.',
              options: 'can, shall, need, would'
            },
            {
              qText:
                "We didn't have a car before. Now that we have a car, we ___ drive to many places.",
              options: 'can, need, may, might'
            },
            {
              qText: `You ______ keep the scissors away from the baby.`,
              options: 'should, will, need, may'
            }
          ]
        },
        {
          questions: [
            {
              qText: 'You _____ go home if you have completed your work.',
              options: 'may, shall, need, might'
            },
            {
              qText: 'That plug is faulty. You _____ touch it.',
              options: "mustn't, needn't, couldn't, won't"
            },
            {
              qText: 'That man ____ be Mr Bo. Mr Bo is overseas.',
              options: "can't, shan't, needn't, won't"
            },
            {
              qText: "Don't listen to everything he says. He ___ be wrong.",
              options: 'can, shall, must, need'
            },
            {
              qText: 'I wish I _____ be as intelligent as Einstein.',
              options: 'could, must, should, shall'
            }
          ]
        },
        {
          questions: [
            {
              qText: 'We ______ bring any money because admission is free.',
              options: "needn't, mustn't, couldn't, can't"
            },
            {
              qText: 'This ____ be your book. It has your name on it.',
              options: 'must, can, shall, need'
            },
            {
              qText: 'You ______ sleep early so you can wake up early.',
              options: 'should, might, will, need'
            },
            {
              qText: 'He ___ run very fast. He wins competitions easily.',
              options: 'can, would, shall, may'
            },
            {
              qText:
                'Please lower your voices so that the baby ___ not  be awakened.',
              options: 'may, ought, must, could'
            }
          ]
        },
        {
          questions: [
            {
              qText:
                'Which modal verb indicates that something is necessary or required?',
              options: 'must, ought, can, shall'
            },
            {
              qText:
                'Which of the following is a correct use of the modal verb "can"?',
              options:
                'They can`t come to the party tonight, I can like to play soccer, She can sings beautifully.'
            },
            {
              qText:
                'Which modal verb is used to express possibility or likelihood in the present or future?',
              options: 'will, could, ought, may'
            }
          ]
        },
        {
          questions: [
            {
              qText:
                'The dog _____ have eaten the food! I saw it near the food a while ago.',
              options: 'must, ought, can, shall'
            },
            {
              qText: 'You ______ to knock before you enter.',
              options: 'ought, shall, may, would'
            },
            {
              qText: 'She ___ most certainly help you if you ask her.',
              options: 'will, could, ought, may'
            }
          ]
        }
      ]
    },
    {
      id: 'fill-up-option',
      label: 'Fill in the blanks',
      type: 'fillup',
      commonData: {
        title: `Fill in the blanks using suitable modals.`
      },
      data: [
        `My teacher *can (must)* speak four languages.
*May (Should)* I use your mobile to call my mother?
You *must (could)* not speak loudly in the hospital.
I *could (must)* use a little help in packing all these clothes.
Madam *could (may)* you repeat what you said?`,

        `I *might (can)* not be able to make it tonight.
Sheldon *must (ought to)* study more if he wants to pass the test.
*Can (May)* you come to the prom with me?
My parents *shall (ought to)* arrive soon.
I *could (must)* be late as I have a lot on my plate.`,

        `She *could (should)* finish her project by the end of the week.
We *must(should)* leave now if we want to catch the train.
He *may (might)* be able to come to the party later tonight.
They *will (would)* have to work on the weekend to meet the deadline.
You *ought to (might)* be more careful when crossing the street.`,

        `I am not sure if I *can (could)* come to the party tonight.
They *might (may)* have already left for the airport by now.
You *should (must)* take an umbrella with you, it might rain later.
She *must (should)* finish her project by tomorrow.
We *ought to (will)* start preparing for the exam as soon as possible.`,

        `Leonard *can (may)* easily solve the problem.
It *might (should)* rain tomorrow.
*May (might)* all your wishes come true in life.
I *could (might)* not be any happier.`
      ]
    },
    {
      id: 'fill-up-modal',
      label: 'Fill in the blanks',
      type: 'fillup',
      commonData: {
        noOptions: true,
        title:
          'Use appropriate modals of probability, permission, obligation etc to fill in the blanks.'
      },
      lockAfter: 1,
      data: [
        `Everybody *must* fulfill his or her duties towards the country.
The computer is not working. The supervisor *might* call an engineer, today.
The work is completed. *May* I leave now?
I am not the right person to give you permission to go. You *may* ask the Manager.`,

        `Vibha is not home today. She *must* have gone for dance practice.
*May* I request you show me this file?
It is raining cats and dogs. This *can* cause floods in many areas.
*Could* I, please, make a call from your phone?`,

        `You *should* take your umbrella with you, it looks like it's going to rain.
Students *must* not bring their phones to the exam.
She *might* stay up late to finish her project tonight.
I *might* have left my phone at home.`,

        `You *must* take your medicine three times a day.
He *might* be at the meeting, but I'm not sure.
They *have* to clean up the kitchen before they go to bed.
I *could* have lost my phone somewhere in the house.`,

        `Sugandha sings so beautifully. She *must* have taken classes of music.
He is not in his cabin. You *can* check if he is there in the lobby.
He *has* to be at work by 9 AM every day.
She *can* leave work early if she finishes her tasks.`
      ]
    },
    {
      id: 'fill-up-modal-2',
      label: 'Fill in the blanks',
      type: 'fillup',
      commonData: {
        noOptions: true,
        title:
          'Use appropriate modals of desire, determination, necessity, prohibition etc to fill in the blanks.'
      },
      lockAfter: 1,
      data: [
        `I *would* like to go boating as well as diving.
How *dare* he enter my room?
We focus on our studies so that we *may* not fail in our examinations.
Let whatever hardships may come our way. One day, we *will* overcome.`,

        `His goggles are kept in the cupboard, but nobody *dares* to touch them.
Sheveta is a little snobbish and naughty girl. We *need* not prank at her. She will get angry.
Don't challenge me. If I try, she *shall* come and talk to me politely.
*Would* you like to try your hand at chess, madam?`,

        `You *should* come to the party with me.
She *will* run five miles every day to prepare for the marathon.
We *have* to finish this project by the end of the week.
You *must* not park your car in this area.`,

        `They *need* to take extra precautions when working with dangerous chemicals.
Shipra applies sunscreen lotion every day so that she *may* not get her skin tanned.
He *would* never allow anybody to wear them.
You *must* not use your cell phone while driving.`,

        `She *would* like to visit the museum this weekend.
We *will* have to finish this project before the deadline.
You *need* to submit your application by tomorrow.
They *should* not smoke in this area.`
      ]
    }
  ]
};
