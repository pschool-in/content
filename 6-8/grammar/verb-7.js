export default {
  id: "verb-7-8",
  label: "Verb",
  lockAfter: 3,
  list: [
    {
      label: "Notes",
      type: "passage",
      id: "verb",
      data: {
        title: "Verb",
        text: [
          `The verb is a word that expresses some action, feeling or existence. It tells us something about the subject.`,
          {
            type: "html",
            text: `<b>Examples</b>: Lions <b>roar</b>. (<b>action</b>); Boys <b>fly</b> kites. (<b>action</b>); I <b>feel</b> sorry. (<b>feeling</b>); Ashoka was a <b>great</b> king. (<b>existence</b>)`,
          },
          `Verbs are divided into two parts; Main Verbs and Helping Verbs.
Main verbs are also of two kinds:

1. Finite Verb: They change their forms according to the person and number of the subject and the tense also.`,
          {
            type: "html",
            text: `<b>Examples</b>: He <b>reads</b>. I <b>read</b>.`,
          },
          `2. Non-finite Verb: They do not change their forms according to the number, person or tense of the subject. The infinitives, gerunds and participles are called non-finite verbs.`,
        ],
      },
    },
    {
      id: "helping-verb",
      label: "Helping Verbs",
      type: "fillup",
      commonData: {
        noOptions: true,
        title:
          "Fill in the blanks with the correct form of helping verbs (is/am/are).",
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

        `The boy *is* very mischievous.
I *am* feeling very sleepy.
The dog *is* barking at the stranger.
The cats *are* fighting for food.
*Are* you sure what you said is true?`,
      ],
    },
    {
      id: "has-have-had",
      label: "Has/Have/Had",
      type: "fillup",
      commonData: {
        noOptions: true,
        title: "Fill in the blanks using has/have/had.",
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

        `I *have* a Husky.
They do not *have* a bicycle.
We *have* not visited the new park yet.
Lady Macbeth *had* a lust for power.
Rita *had* a seminar before.`,
      ],
    },
    {
      label: "Notes",
      type: "passage",
      id: "regular-irregular-verb",
      data: {
        title: "Verb",
        text: [
          `Regular verbs from their past and past participle forms by adding -ed.`,
          {
            type: "html",
            text: `<b>Examples</b>: walk-walk<b>ed</b>-walk<b>ed</b><br>
dance-danc<b>ed</b>-danc<b>ed</b>`,
          },
          `Irregular verbs form their past and past participle forms in different ways. There are mainly three types of irregular verbs.

1. Verbs in which all the three forms are the same.`,
          {
            type: "html",
            text: `<b>Example</b>: put-<b>put</b>-<b>put</b>`,
          },
          `2. Verbs in which two of the three forms are the same.`,
          {
            type: "html",
            text: `<b>Example</b>: sit-<b>sat</b>-<b>sat</b>`,
          },
          `3. Verbs in which all three forms are different.`,
          {
            type: "html",
            text: `<b>Example</b>: drink-<b>drank</b>-<b>drunk</b>`,
          },
          `=> Some verbs can be both regular and irregular.`,
          {
            type: "html",
            text: `<b>Examples</b>: Burn-burn<b>t</b>-burn<b>t</b> (<b>irregular</b>); Burn-burn<b>ed</b>-burn<b>ed</b> (<b>regular</b>)<br>
Dream-dream<b>t</b>-dream<b>t</b> (<b>irregular</b>); Dream-dream<b>ed</b>-dream<b>ed</b> (<b>regular</b>)`,
          },
        ],
      },
    },
    {
      id: "irregular-verb",
      label: "Irregular Verb",
      type: "fillup",
      commonData: {
        noOptions: true,
        title:
          "Find out the simple past form and the past participle form of the following irregular verbs.",
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
Shut - *Shut* - Shut`,
      ],
    },
    {
      id: "irregular-verb-fillup",
      label: "Fill in the blanks",
      type: "fillup",
      commonData: {
        noOptions: true,
        title:
          "Fill in the blanks with the appropriate tense form of the verb.",
      },
      lockAfter: 1,
      data: [
        `Our teacher said, "Please, do not forget to bring your workbook tomorrow." But Riya still *forgot* to bring her textbook the next day. I would have *forgotten* to bring it if Reem had not reminded me.
Why is no one opening the door? Did you ring the bell? Yes, I *rang* it several times but no one came to the door.`,

        `I asked my sister to wake me at 6 a.m. But she did not *wake* me. I *woke* up at 8 a.m. and missed my bus. If she had *woken* me up I would have reached the school on time.
I had cast my rod and was waiting for the fish to bite the bait. I reeled in the rod as soon as the fish *bit* on the bait. But in that short while the clever fish had already *bitten* off the bait from the hook and successfully escaped.`,

        `The teacher suddenly asked me to speak in the morning assembly. I started to panic but I managed to gather some courage and *spoke* about the "Ill effects of Technology" for five minutes. After I had *spoken*, my teacher called me aside and praised me for speaking well.`,
      ],
    },
    {
      label: "Notes",
      type: "passage",
      id: "transitive-intransitive",
      data: {
        title: "Transitive and Intransitive Verb",
        text: [
          `A transitive verb is a type of verb that needs an object to make complete sense of the action being performed by the subject.`,
          {
            type: "html",
            text: `<b>Example</b>: The teacher gave me a new notebook.`,
          },
          `An intransitive verb is a verb that does not necessarily require an object to make sense of the action being performed by the subject in a sentence or context.`,
          {
            type: "html",
            text: `<b>Example</b>: The baby is sleeping.`,
          },
        ],
      },
    },
    {
      label: "Transitive or Intransitive",
      type: "classifySentence",
      id: "transitive-or-intransitive",
      commonData: {
        title: "Classify as a transitive or intransitive verb.",
        types: ["Transitive", "Intransitive"],
      },
      data: [
        [
          `Dave bought a new bicycle.
The children passed the books around.
Can you bring me some mangoes?`,

          `Firoz laughed so hard.
I studied in California.`,
        ],
        [
          `Eliza found the kittens on the corner of the street.
Roshan met his best friend at the park.
Javed loved his new bike.`,

          `Jack came home in the evening.
The car stopped suddenly, in the middle of the road.`,
        ],
      ],
    },
    {
      id: "fillup",
      label: "Fill in the blanks",
      type: "fillup",
      commonData: {
        title: `Fill in the blanks using appropriate forms of verbs.`,
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
      ],
    },
    {
      label: "Multiple Choice Questions",
      type: "mcq",
      data: {
        title: "Identify the underlined part and choose the correct option.",
        questions: [
          {
            qText: `The storm *caught* the sailor.`,
            options: `Transitive verb, Intransitive verb, Helping verb, Modals`,
          },
          {
            qText: `His friend told him not to pluck *the flowers*.`,
            options: `Object, Complement, Pronoun, Linker`,
          },
          {
            qText: `According to me, she *should* work hard.`,
            options: `Modals, Object, Complement, Auxiliary`,
          },
          {
            qText: `The gardener *trimmed* the plants in the garden.`,
            options: `Transitive verb, Object, Complement, Intransitive verb`,
          },
          {
            qText: `The athlete *has* broken his own record.`,
            options: `Helping verb, Transitive verb, Intransitive verb, Modal`,
          },
        ],
      },
    },
    {
      label: "Complete the paragraph",
      type: "fillup",
      id: "fillup",
      data: {
        noOptions: true,
        title: `Use the correct form of the verb given in the brackets to complete the following paragraph.`,
        text: `Mr Koch, the mathematics teacher *gave* (give) Albert the reference he *wanted* (want).
Albert *got* (get) summoned to the head teacher's room. The head teacher told Albert that his work *was* (be) terrible and he *would* (will) be punished if he *continued* (continue) the same way. Albert was *tempted* (tempt) to say a few words, then thought otherwise.`,
      },
    },
    {
      label: "Notes",
      type: "passage",
      id: "linking-verb",
      data: {
        title: "Linking Verb",
        text: [
          `Linking verbs are verbs that don't show an action but rather describe the subject. While verbs like walk or jump represent an action, linking verbs like be or seem add more details to the subject, such as 'he seems nice' or 'she is an architect'.
All basic forms of the 'to be' verb can be used as linking verbs to qualify the state of being of the subject.
All forms of the verb 'to seem' are used as linking verbs.
All forms of the verb 'to become' are used as linking verbs.`,
        ],
      },
    },
    {
      type: "selectWord",
      label: "Linking Verb",
      id: "select-word-2",
      lockAfter: 1,
      commonData: {
        title: "Identify linking verbs from the following sentence.",
      },
      data: [
        `Neena *seems* to be very energetic today.
The dish *smells* delicious.
The dress you were wearing yesterday *looked* great on you.
Divya and Meera *remained* best friends even after all the fights they have had in the past.
The little boy *sounded* excited about the school trip.
Geetha *is* the new marketing manager`,

        `I *am* the class teacher of VII B.
Fathima and Hameeda *were* exhausted after cleaning every loft in the office.
This book on women and society *seems* to be interesting.
The tree *was* cut.
The child *looks* happy.`,

        `Your brother *sounds* really cool.
Ben *is* the Vice Principal of a Girl's High School.
The teacher *was* absent today.
My parents *were* tired after the long journey.
Kenny *seems* to be a great man.`,

        `All it took was one wrong word to make the situation *turn* ugly.
Based on the results of the experiment, her hypothesis *proved* true.
My daughter *acts* shy around strangers.
The dirty dog *smells* bad because his nose is clogged.
William's mom *is* a doctor.`,
      ],
    },
    {
      label: "Fill in the blanks",
      type: "matchByDragDrop",
      id: "fillup-drag",
      lockAfter: 1,
      commonData: {
        title: "Fill in the blanks using linking verbs.",
        styles: {
          fontSize: "1rem",
          dashWidth: 70,
        },
      },
      data: [
        `I *am* the class teacher of VII B.
Fathima and Hameeda *were* exhausted after cleaning every loft in the office.
This book on women and society *seems* to be interesting.
The tree *was* cut.
The child *looks* happy.`,

        `My favorite food *is* pizza. 
She *looks* pale. 
He *was* a man on a mission.
It *smelled* stinkier than a skunk. 
The soda *tasted* like oranges. 
It *seems* as if it might rain any moment.  `,

        `Your brother *sounds* really cool.
Ben *is* the Vice Principal of a Girl's High School.
The teacher *was* absent today.
My parents *were* tired after the long journey.
Kenny *seems to be* a great man.`,

        `My grandfather *was* a mischievous boy when he was my age.
We *became* very scared after the bridge started to wobble.
If you ask me, the friendly man's offer *seems* suspicious.
The audience *grew* silent when the actors took the stage.
This mushy bread *tastes* terrible.`,

        `All it took was one wrong word to make the situation *turn* ugly.
Based on the results of the experiment, her hypothesis *proved* true.
My daughter *acts* shy around strangers.
The dirty dog *smells* bad because his nose is clogged.
William's mom *is* a doctor.`,

        `Jessica *sings* in a rock band.
Dmitri *lives* in Russia.
The soup *tastes* delicious.
The king's brother *became* a monk.
The dirty dog *smells* bad.`,
      ],
    },
    {
      label: "Notes",
      type: "passage",
      id: "modal-auxiliaries",
      data: {
        title: "Modal Auxiliaries",
        text: [
          `Modals are auxiliary verbs that express the mode of action denoted by the main verb.`,
          {
            type: "html",
            text: `The modal auxiliary includes <b>can</b>, <b>could</b>, <b>may</b>, <b>might</b>, <b>would</b>, <b>should</b>, <b>must</b>, <b>shall</b>, <b>will</b>, <b>need</b>, <b>dare</b>, <b>ought to</b>, <b>used to</b>, etc.`,
          },
          `# Uses of 'Can' 
1. To express ability or power.`,
          {
            type: "html",
            text: `<b>Examples</b>: He <b>can</b> read this language.<br>
He <b>can</b> lift this heavy box.`,
          },
          `2. To express permission.`,
          {
            type: "html",
            text: `<b>Examples</b>: You <b>can</b> eat this chocolate.<br>
She <b>can</b> never enter this house.`,
          },
          `# Uses of 'Could'
1. To show power or ability in past.`,
          {
            type: "html",
            text: `<b>Examples</b>: She <b>could</b> dance well in her youth.<br>
We <b>could</b> complete this task.`,
          },
          `2. To show possibility in past.`,
          {
            type: "html",
            text: `<b>Examples</b>: She <b>could</b> buy a pen if she had money.<br>
Ramu <b>could</b> play cricket if there had been no rain.`,
          },
          `3. To make a polite request.`,
          {
            type: "html",
            text: `<b>Examples</b>: <b>Could</b> you help me now?<br>
<b>Could</b> they spare that meat?`,
          },
          `4. To show condition.`,
          {
            type: "html",
            text: `<b>Examples</b>: If we had got up earlier, we <b>could</b> have completed this.<br>
We <b>could</b> have seen the match if there had been an electricity supply.`,
          },
          `# Uses of 'May'
1. To express permission, possibility.`,
          {
            type: "html",
            text: `<b>Examples</b>: <b>May</b> I go there? 
It <b>may</b> rain heavily.`,
          },
          `2. To express wish, prayer.`,
          {
            type: "html",
            text: `<b>Examples</b>: <b>May</b> you live long!<br>
<b>May</b> God bless you with fortune!`,
          },
          `3. To express purpose.`,
          {
            type: "html",
            text: `<b>Examples</b>: She works so that she <b>may</b> prosper.<br>
We study so that we <b>may</b> pass the exam.`,
          },
          `# Uses of 'Might'
1. To show permission, possibility in the past.`,
          {
            type: "html",
            text: `<b>Examples</b>: The leader told us that we <b>might</b> spend this amount.<br> 
I <b>might</b> be sent to the hostel.`,
          },
          `2. To express purpose in the past.`,
          {
            type: "html",
            text: `<b>Examples</b>: He wore a scarf so that he <b>might</b> not burn his skin.<br>
We rushed so that we <b>might</b> not miss our train.`,
          },
          `3. To make a request.`,
          {
            type: "html",
            text: `<b>Examples</b>: If possible, you <b>might</b> bring me a glass of water.<br>
Condition allowing, they <b>might</b> be seeking a favor from me.`,
          },
          `4. To make suggestions or criticism.`,
          {
            type: "html",
            text: `<b>Examples</b>: They <b>might</b> look for other venues.<br>
She <b>might</b> have picked other issues.`,
          },
          `3. To make a polite request.`,
          {
            type: "html",
            text: `<b>Examples</b>: <b>Could</b> you help me now?<br>
<b>Could</b> they spare that meat?`,
          },
          `4. To show condition.`,
          {
            type: "html",
            text: `<b>Examples</b>: If we had got up earlier, we <b>could</b> have completed this.<br>
We <b>could</b> have seen the match if there had been an electricity supply.`,
          },
          `# Uses of 'Would'
1. To show past habit and unreal condition.`,
          {
            type: "html",
            text: `<b>Examples</b>: He <b>would</b> rise at 5 o'Clock. 
What <b>would</b> you like to have? Tea or coffee.`,
          },
          `2. To make a polite request.`,
          {
            type: "html",
            text: `<b>Examples</b>: <b>Would</b> you lend me your pen?<br>
<b>Would</b> you give me your scooter?`,
          },
          `# Uses of 'Should'
1. To express duty and obligation.`,
          {
            type: "html",
            text: `<b>Examples</b>: The police <b>should</b> protect us.<br>
You <b>should</b> respect your parents.`,
          },
          `2. To show advice, suggestion.`,
          {
            type: "html",
            text: `<b>Examples</b>: They <b>should</b> follow the rules.<br> 
You <b>should</b> take medicine.`,
          },
          `3. To express imagination.`,
          {
            type: "html",
            text: `<b>Examples</b>: <b>Should</b> you lose your money, go to ATM.<br>
<b>Should</b> you forget the password, retry then.`,
          },
          `4. To express probability, polite command.`,
          {
            type: "html",
            text: `<b>Examples</b>: She <b>should</b> be in the library.<br> 
You <b>should</b> play the game fairly.`,
          },
          `# Uses of 'Must'
1. To show prohibition, compulsion.`,
          {
            type: "html",
            text: `<b>Examples</b>: You <b>must</b> not touch this.<br>
She <b>must</b> feel sorry for you.`,
          },
          `2. To show necessity or obligation.`,
          {
            type: "html",
            text: `<b>Examples</b>: Team <b>must</b> win the game.<br>
You <b>must</b> pay your bill on time.`,
          },
          `3. To show strong advice.`,
          {
            type: "html",
            text: `<b>Examples</b>: Police <b>must</b> take care of emotions of the criminals.<br>
Leaders <b>must</b> promise what is viable to them.`,
          },
          `# Uses of 'Shall/Will'
1. Shall is used for 1st person subject - I, We
2. Will is used for 2nd and 3rd person subject - You, he, she, it, they.
But, to show the emphasis, they can be interchanged with each other. Therefore, when one needs to show determination then the usage with the auxiliary would be:
=> Will 1st person subject-I, we
=> Shall 2nd and 3rd person subject - You, he, she, it, they.`,
          {
            type: "html",
            text: `<b>Examples</b>: I <b>shall</b> go. (<b>Simple future</b>)<br>
I <b>will</b> go. (<b>Determination</b>)<br>
She <b>will</b> win. (<b>Simple future</b>)<br>
She <b>shall</b> win. (<b>Emphasized act</b>)`,
          },
          `# Uses of 'Need'
1. To express prohibition.`,
          {
            type: "html",
            text: `<b>Examples</b>: <b>Need</b> I go there.<br>
<b>Need</b> we plan in advance.`,
          },
          `# Uses of 'Dare'
1. To express a negation with interrogation.`,
          {
            type: "html",
            text: `<b>Examples</b>: How <b>dare</b> you touch my pen?<br>
She <b>dare</b> not play tennis with me.`,
          },
          `## Uses of 'Used to'
1. To express a past habit.`,
          {
            type: "html",
            text: `<b>Examples</b>: She <b>used to</b> go to perform in movies or dramas.<br>
I <b>used to</b> play cricket in 2005.`,
          },
          `2. To express a habit of present that has its roots in the past.`,
          {
            type: "html",
            text: `<b>Examples</b>: My grandfather is not <b>used to</b> sweets.<br>
I am <b>used to</b> a life full of struggle.`,
          },
        ],
      },
    },
    {
      label: "Choose the Correct Answer",
      id: "mcq-modal",
      type: "mcq",
      commonData: {
        title: "Choose the most suitable answer to fill in the blank.",
      },
      data: [
        {
          questions: [
            {
              qText: "You are late. You ____ hurry.",
              options: "must, will, may, can",
            },
            {
              qText: "“____ I have a piece of cake, please?” I asked.",
              options: "May, Will, Must, Shall",
            },
            {
              qText: "The little boy ___ speak very well.",
              options: "can, shall, need, would",
            },
            {
              qText:
                "We didn't have a car before. Now that we have a car, we ___ drive to many places.",
              options: "can, need, may, might",
            },
            {
              qText: `You ______ keep the scissors away from the baby.`,
              options: "should, will, need, may",
            },
          ],
        },
        {
          questions: [
            {
              qText: "You _____ go home if you have completed your work.",
              options: "may, shall, need, might",
            },
            {
              qText: "That plug is faulty. You _____ touch it.",
              options: "mustn't, needn't, couldn't, won't",
            },
            {
              qText: "That man ____ be Mr Bo. Mr Bo is overseas.",
              options: "can't, shan't, needn't, won't",
            },
            {
              qText: "Don't listen to everything he says. He ___ be wrong.",
              options: "can, shall, must, need",
            },
            {
              qText: "I wish I _____ be as intelligent as Einstein.",
              options: "could, must, should, shall",
            },
          ],
        },
        {
          questions: [
            {
              qText: "We ______ bring any money because admission is free.",
              options: "needn't, mustn't, couldn't, can't",
            },
            {
              qText: "This ____ be your book. It has your name on it.",
              options: "must, can, shall, need",
            },
            {
              qText: "You ______ sleep early so you can wake up early.",
              options: "should, might, will, need",
            },
            {
              qText: "He ___ run very fast. He wins competitions easily.",
              options: "can, would, shall, may",
            },
            {
              qText:
                "Please lower your voices so that the baby ___ not  be awakened.",
              options: "may, ought, must, could",
            },
          ],
        },
        {
          questions: [
            {
              qText:
                "The dog _____ have eaten the food! I saw it near the food a while ago.",
              options: "must, ought, can, shall",
            },
            {
              qText: "You ______ to knock before you enter.",
              options: "ought, shall, may, would",
            },
            {
              qText: "She ___ most certainly help you if you ask her.",
              options: "will, could, ought, may",
            },
          ],
        },
      ],
    },
    {
      id: "fill-up-option",
      label: "Fill in the blanks",
      type: "fillup",
      commonData: {
        title: `Fill in the blanks using suitable modals.`,
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

        `Leonard *can (may)* easily solve the problem.
It *might (should)* rain tomorrow.
*May (might)* all your wishes come true in life.
I *could (might)* not be any happier.`,
      ],
    },
    {
      id: "fill-up-modal",
      label: "Fill in the blanks",
      type: "fillup",
      commonData: {
        noOptions: true,
        title:
          "Use appropriate modals of probability, permission, obligation etc to fill in the blanks.",
      },
      lockAfter: 1,
      data: [
        `Everybody *must* fulfill his or her duties towards the country.
The computer is not working. The supervisor *might* call an engineer, today.
The work is completed. *May* I leave now?
Sugandha sings so beautifully. She *must* have taken classes of music.
I am not the right person to give you permission to go. You *may* ask the Manager.`,

        `Vibha is not home today. She *must* have gone for dance practice.
*May* I request you show me this file?
It is raining cats and dogs. This *can* cause floods in many areas.
He is not in his cabin. You *can* check if he is there in the lobby.
*Could* I, please, make a call from your phone?`,
      ],
    },
    {
      id: "fill-up-modal-2",
      label: "Fill in the blanks",
      type: "fillup",
      commonData: {
        noOptions: true,
        title:
          "Use appropriate modals of desire, determination, necessity, prohibition etc to fill in the blanks.",
      },
      lockAfter: 1,
      data: [
        `I *would* like to go boating as well as diving.
How *dare* he enter my room?
Shipra applies sunscreen lotion every day so that she *may* not get her skin tanned.
We focus on our studies so that we *may* not fail in our examinations.
Let whatever hardships may come our way. One day, we *will* overcome.`,

        `His goggles are kept in the cupboard, but nobody *dares* to touch them.
He *would* never allow anybody to wear them.
Sheveta is a little snobbish and naughty girl. We *need* not prank at her. She will get angry.
Don't challenge me. If I try, she *shall* come and talk to me politely.
*Would* you like to try your hand at chess, madam?`,
      ],
    },
    {
      label: "Notes",
      type: "passage",
      id: "passage",
      data: {
        title: "Modals",
        text: [
          `# Modals
Auxiliary verbs provide additional and specific meanings to the main verb. Usually used to indicate probability/possibility, ability, permission, obligation/advice, offers, etc
1. should/ought to - indicate obligation, probability
2. must - indicate logical conclusion, necessity
3. will/would - indicate willingness, likelihood, certainity, habits
4. may/might/can/could - indicate possibility, future, plan, ability, permission, offer
5. need/needn't - As a modal verb, it is commonly used in negative sentences. It indicates something unnecessary
There are two modals that serve as the main verb as well.`,
          {
            type: "html",
            text: `They are: <b>dare</b> and <b>need</b>.`,
          },
          `Verbs used after modals are always in their original form.
Conditional sentences, frequently use modal auxiliaries. `,
          {
            type: "html",
            text: `The modals which are most commonly used are <b>can</b>, <b>could</b>, <b>may</b>, <b>might</b>, <b>must</b>, <b>should</b>, <b>will</b>, and <b>would</b>.`,
          },
        ],
      },
    },
    {
      id: "will-shall",
      label: "Will or Shall",
      type: "fillup",
      title: `Read the short paragraph. Fill in the blanks with a, an or the.`,
      data: [
        `They said that they *will (shall)* go to the park in the evening.
The warden thinks that I *shall (will)* finish the project soon.
The doctor *will (shall)* visit the patient at the alloted time.
My mother promised me that she *will (shall)* buy me a new dress.
The meeting *shall (will)* start at 10 am.`,
      ],
    },
    {
      id: "would-should",
      label: "Would or Should",
      type: "fillup",
      title: `Fill in the blanks using would or should.`,
      data: [
        `She *would (should)* sing her son to sleep every night.
We *should (would)* start preparing for the exams immediately.
I *would (should)* go for a red dress for the party.
I *would (should)* rather walk than a ride home.
One *should (would)* be kind to people.`,
      ],
    },
    {
      id: "fillup-1",
      label: "Fill in the blanks",
      type: "fillup",
      noOptions: true,
      title: "Fill in the blanks with suitable auxiliary verbs.",
      data: [
        `All *will* go well if you are prepared.
They *will* lose their confidence if reproached constantly.
*Will* you lend me that book?
You *should* exercise regularly.
He felt that he *ought* to visit his village soon.
There *might* be red ants in those bushes.
Everyone *must* be in their seats before noon.
I *need* a beautiful garden.`,
      ],
    },
    {
      label: "Conditionals",
      type: "matchByDragDrop",
      title: `Complete the conditional sentences using suitable modals.`,
      id: "fillup-drag-drop-3",
      data: {
        styles: {
          fontSize: "1rem",
          dashWidth: 80,
        },
        text: `If he *can* help, he does. 
If I *may* help, ask me.
If we *must* help, we do.
If you *should* need help, please ask us.
If he *will* help, he'll do a good job.
If I *could* leave work early today, I'd be very grateful.
If she *would* work harder, she'd succeed. `,
      },
    },
    {
      id: "mcq-modal-auxiliary",
      label: "Choose the correct option",
      type: "mcq",
      data: {
        title: "Fill in the blanks by choosing the correct modal auxiliary.",
        questions: [
          {
            qText:
              "If I hadn't worked hard, I _____ never have been able to pass the examination.",
            options: `would, will, won't, would'nt`,
          },
          {
            qText: "_______ I help myself to some hot coffee?",
            options: `Should, Cannot, Will, May`,
          },
          {
            qText:
              "I ____ immediately make out from her accent that she was from France.",
            options: `could, would, should, can`,
          },
          {
            qText:
              "He ________ have negotiated with the landlord before the agreement was finalised.",
            options: `ought to, need, may, can`,
          },
          {
            qText:
              "________ it be better if we go by car instead of taking the bus?",
            options: `Wouldn't, Mustn't, Can't, Should`,
          },
          {
            qText:
              "Veena cannot join us as she ______ pick up her son from school.",
            options: `needs to, ought to, will, might`,
          },
          {
            qText: "You _______ spend more time with your children.",
            options: `ought to, will, would, need`,
          },
          {
            qText: "This _______ feel much better if you do some exercise.",
            options: `will, must, should, can`,
          },
          {
            qText: "He ________ have informed me before going there.",
            options: `should, ought, must, can`,
          },
        ],
      },
    },
    {
      id: "mcq-2",
      label: "Correct Choice",
      type: "mcq",
      data: {
        title:
          "Pick out the correct sentence from among the four sentences in each of the following examples.",
        questions: [
          {
            qText:
              "Pick the correct sentences from the four sentences given below.",
            options: `I could pass the exam. But I did not appear for it, I was able to pass the exam. But I could not appear for it, I was able to pass the exam. But I did not appeared for it, I was able to pass the exam. But I did not appear for it`,
          },
          {
            qText:
              "Pick the correct sentences from the four sentences given below.",
            options: `Nobody knows his whereabouts. He might be there in Doha, Nobody knows his whereabouts. He may was there in Doha, Nobody knew his whereabouts. He may be there in Doha, Nobody knews his where abouts. He is there in Doha`,
          },
          {
            qText:
              "Pick the correct sentences from the four sentences given below.",
            options: `The drug addicts must not be tortured but should be rehabilitated, The drug addicts may not be tortured but should be rehabilitated, The drug addicts can not be tortured but must be rehabilitated, The drug addicts should not be tortured but might be rehabilitated`,
          },
          {
            qText:
              "Pick the correct sentences from the four sentences given below.",
            options: `You ought to help the blind to cross the road, You must to help the blind to cross the road, You ought to help the blind to crossing the road, You should help the blinds to cross the road`,
          },
          {
            qText:
              "Pick the correct sentences from the four sentences given below.",
            options: `You need not worry at all. I will take care of your luggage, You need not worry at all. I am take care of your luggage, You need to not worry at all. I will taking care of your luggage, You need not worry at all. I will be take care of your luggage`,
          },
          {
            qText:
              "Pick the correct sentences from the four sentences given below.",
            options: `Everyone should follow the path shown by his or her parents and teachers, Everyone may be follow the path shown by their parents and teachers, Every should be follow the path shown by his or her parents and teachers, Everyone might follow the path shown by his or her parents and teachers`,
          },
          {
            qText:
              "Pick the correct sentences from the four sentences given below.",
            options: `Abhi can achieve his goal if has strong determination, Abhi can achieve his goal if they have strong determination, Abhi may achieve his goal if he had strong determination, Abhi can achieve his goal but he has strong determination`,
          },
          {
            qText:
              "Pick the correct sentences from the four sentences given below.",
            options: `This seems to be difficult. But I will make this happen, This seemed to be difficult. But I may make this happen, This seems to be difficult. But I shall make this happen, This seemed to be difficult. But I should make this happen`,
          },
          {
            qText:
              "Pick the correct sentences from the four sentences given below.",
            options: `One should not be too careful about what is good or what is bad, One should not too careful about what is good or what is bad, One may not be too careful about what is good or what is bad, One will not be too careful about what is good or what is bad`,
          },
          {
            qText:
              "Pick the correct sentences from the four sentences given below.",
            options: `He must pass the exam in the first attempt, He might be pass the exam in the first attempt, He must be pass the exam in the first attempt, He should be pass the exam in the first attempt`,
          },
        ],
      },
    },
    {
      label: "Notes",
      type: "passage",
      id: "auxiliary-verb",
      data: {
        title: "Auxiliary Verb",
        text: [
          `# Auxiliary Verb
Auxiliary verbs have no meaning on their own. They are necessary because they help the main verb to form the grammatical structure of a sentence. The main functions of auxiliary verbs are to form questions, short answers, question tags and to avoid repetition.
Auxiliary verbs fall into three basic groups:
1. primary or main auxiliary verbs: The primary auxiliary verbs are called so because they are the most used in forming tenses, negatives and questions. `,
          {
            type: "html",
            text: `These are forms of the verbs <b>be</b>, <b>have</b> and <b>do</b>.`,
          },
          `2. modals or modal auxiliary verbs: Modal auxiliary verbs are also helping verbs. They are used before main verbs to express a range of meanings such as ability, possibility, certainty, suggestion, permission, obligation and so on. In almost all cases, the modal verb does not change according to the subject of the sentence. This means that the modal verb need not agree with the subject in number and person.`,
          {
            type: "html",
            text: `Examples include <b>can</b>, <b>could</b>, <b>may</b>, <b>might</b>, <b>shall</b>, <b>should</b>, <b>will</b>, <b>would</b>, <b>must</b>, etc.`,
          },
          `3. other auxiliary verbs with the characteristics of modals: Some words do not always behave as modals. Such phrases are called semi-modals.`,
          {
            type: "html",
            text: `Examples include <b>be about to</b>, <b>be able to</b>, <b>be likely to</b>, <b>had better</b>, <b>have to</b>, <b>ought to<b>, <b>used to</b>, <b>need to</b>, <b>dare</b> and <b>would rather</b>.`,
          },
        ],
      },
    },
    {
      id: "fill-up-aux",
      label: "Fill in the blanks",
      type: "fillup",
      commonData: {
        title: `Fill in the blanks with the most suitable option`,
      },
      data: [
        `*May (Can)* you have a long life! Sweetheart.
Numair *could (may)* speak two languages when he was eight.
You *should (would)* watch Kriti's latest movies.
*Shall (Will)* we go on a long drive today?
You *might (may)* want to try this recipe once you taste it.`,

        `*Will (Should)* you, please stop gossiping about Abdu.
He has lost your watch and he *dare (must)* not to tell you.
I *used to (need to)* play cricket daily in the morning when I was ten.
Liya *may (should)* go to the museum whenever she likes.
You *ought to (dare to)* consult a Dentist.`,
      ],
    },
    {
      id: "had-has",
      label: "Has or Had",
      type: "fillup",
      commonData: {
        noOptions: true,
        title: "Fill in the blanks using has or had.",
      },
      lockAfter: 2,
      data: [
        `Jake and Niki *had* a fight yesterday.
Charlie *has* a blanket.
Mike *had* an injury, but now he's fine.
I *had* rabbits when I was 8 years old.
Tina *has* an ear infection.`,

        `India *has* many states.
My dad *had* a white coat that he used to wear.
The lion *has* sharp claws.
Niya *had* broken her leg a few months ago.
Natalie *has* a sweet smile.`,

        `The children *had* a lot of fun last night.
Her grandparents *had* passed away a long time ago.
William Shakespeare *has* written many plays.
*Has* the baby fallen asleep?
Renu *has* a purple dress.`,
      ],
    },
    {
      id: "am-is-are",
      label: "Am, Is or Are",
      type: "fillup",
      commonData: {
        noOptions: true,
        title: "Fill in the blanks using is, am and are.",
      },
      lockAfter: 2,
      data: [
        `The children *are* playing cricket.
Mahi *is* going to the market.
The moon *is* shining brightly.
Strong winds *are* blowing.
I *am* playing with toy trucks.`,

        `Richa *is* drawing a landscape.
*Are* you going somewhere?
Sunny *is* mowing the lawn.
I *am* doing my homework.
The ducks *are* in the pond.`,

        `Tom and Saira *are* enacting Romeo and Juliet on stage.
Thunder *is* rumbling.
People *are* jogging in the park nearby.
Mike *is* coming back from New York.
I *am* studying for a teaching eligibility exam.`,
      ],
    },
    {
      id: "yes-no",
      label: "Yes or No",
      type: "classifySentence",
      data: {
        title: "Do the following sentences contain modal auxiliary verbs?",
        types: [
          {
            name: "Yes",
            text: `Can you please help me?
Will you be able to finish the work by tomorrow?
You might regret doing this the next day.
He said I can use his mobile at any time.
Will you pick me up on Sunday also?`,
          },
          {
            name: "No",
            text: `My sister was able to read the alphabet when she was 18 months old.
Do not wash the car. The paint is still wet.
I am certain that they have left already.
I am sure he is over seventy.
It was not necessary to meet him but I met him.`,
          },
        ],
      },
    },
    {
      id: "modal",
      label: "Modal Auxiliary Verbs",
      type: "fillup",
      commonData: {
        noOptions: true,
        title:
          "Complete the following sentences using suitable modal auxiliary verbs.",
      },
      lockAfter: 2,
      data: [
        `*Will* Shaleen come with me to the hospital?
It *could* be what you wished for. 
*Should* I submit all the documents on Monday?
There *might* be some problem with the computer software.
All students *must* wear their uniforms every day.`,

        `*May* I come in?
*Can* you help me with this math problem?
My phone *would* be out of charge by the time we reached the destination.
Roshini *could* not make it to the reception as she missed the flight.
Everyone *must* follow traffic rules to ensure the safety of all.`,

        `You *might* get tickets for the concert if you are lucky.
Rahul *will* not like this for sure.
Amrita said that she *would* be on leave the next day.
*Should* everyone fill out the scholarship forms?
Fathima *can* finish this in an hour.`,
      ],
    },
    {
      id: "mcq-modal-1",
      label: "Choose the correct alternative",
      type: "mcq",
      data: {
        title: "Choose the correct alternative",
        questions: [
          {
            qText: "I do not think I _____ be able to go.",
            options: `shall, should, can`,
          },
          {
            qText: "He ____ not pay unless he is compelled",
            options: `will, shall, dare`,
          },
          {
            qText: "You _____ be punctual.",
            options: `should, would, ought`,
          },
          {
            qText: "I wish you _____ tell me earlier.",
            options: `would, should, must `,
          },
          {
            qText: "_____ I assist you?",
            options: `Shall, Will, Would`,
          },
          {
            qText: "_____ you please help me with this?",
            options: `Would, Should, Shall`,
          },
          {
            qText: "You ______ to pay your debts.",
            options: `ought, should, must`,
          },
          {
            qText: "He said I ___ use his telephone at any time.",
            options: `might, could, can`,
          },
          {
            qText: "If you ______ see him, give him my regards",
            options: `should, would, shall`,
          },
          {
            qText:
              "He ____ not ask for a raise, for the fear of losing his job.",
            options: `dare, need, would`,
          },
        ],
      },
    },
    {
      label: "Notes",
      type: "passage",
      id: "participle",
      data: {
        title: "The Participles",
        text: [
          `# Participle
A participle is a word that is formed from a verb and takes the nature of both a verb and an adjective.`,
          {
            type: "html",
            text: `Example - <b>Looking</b> at the snake, Maria screamed and sprang up out of his chair.`,
          },
          `In this sentence, 'looking' is the present participle (look+ing) which qualifies the noun 'Maria.' Hence it acts like an adjective. It is formed from a verb and also denotes the action of looking. Hence it acts as a verb too.
1. Present Participle: It is formed by adding 'ing' to the original form of the main verb.
e.g. Knowing, following etc.
2. Perfect Participle: It shows that the action is complete, either at some time in the past or at present.
e.g.Having walked continuously, I am fully exhausted now.
Having lost his wallet, he had to ask others for help.
3. Past Participle: The third form of the verb is called a past participle.
e.g. Frozen, loaded etc.
Since the participle is a verb-adjective it must be attached to some noun or pronoun. It must always have a proper subject of reference.`,
        ],
      },
    },
    {
      id: "present-past",
      label: "Present or Past",
      type: "classifySentence",
      data: {
        title:
          "Classify the participle in the sentence as a present participle or past participle",
        types: [
          {
            name: "Present",
            text: `*Being* fully satisfied, they did not want to eat anymore.
Reem felt quite ashamed on *getting* scolded by her favorite aunt.
*Deluding* yourself, you can be happy for a short period in your life.`,
          },
          {
            name: "Past",
            text: `Extremely *fascinated* by the view, Ram decided to settle there.
Jake has a habit of keeping her things well *organised* all the time.
Niki was highly *irritated* as Jake kept poking him.`,
          },
        ],
      },
    },
    {
      id: "fillup-participle",
      label: "Fill in the blanks",
      type: "fillup",
      commonData: {
        title:
          "Fill in the blanks in the following choosing the best alternative",
      },
      lockAfter: 1,
      data: [
        `Remya came *to see(for seeing, seeing, having seen)* you.
The sun *having risen (rise, to rise, rising)* the birds began to chirp.
Everybody worships the *rising (rise, having risen, to rise)* idol Jake.
*Placing (Place, Having placed, To place)* the books on the table Jay ran away.
I saw a woman *cross (having crossed, to cross, crossing)* the road.`,

        `A *broken (break, breaking, to break)* glass cannot hold water.
*Hit (Being hit, Having hit, Hitting)* by an arrow, the bird fell dead.
I found him *drinking (drink, to drink, having drunk)*.
The marriage *have been fixed (fixed, fixing, to fix)*, no change is possible now.
You better *leave (to leave, leaving, having left) before Tarun arrives.`,
      ],
    },
    {
      id: "fill-up-participle-2",
      label: "Participles",
      type: "fillup",
      commonData: {
        noOptions: true,
        title: `Fill in the blanks using a suitable form of the participle of the verbs given in brackets.`,
      },
      data: [
        `Everybody worships the *risisng* (rise) idol Niki.
I saw the storm *approaching* (approach).
The sun *having risen* (rise), the birds began to chirp in joy.
*Hearing* (hear) a noise, I turned around.
*Placing* (Place) the books on the table, Jake ran away.
*Considering* (consider) the facts, he recieved scant justice.`,

        `A *broken* (break) glass cannot hold water.
The rain came *pouring* (pour) down.
*Hit* (Hit) by an arrow in the chest, the bird fell down dead.
*Having elected* (elect) him President, the people gave him their loyal support.
*Having seen* (See) the film once, I do not want to see it again.
*Having lost* (Lose) my book, I reported the matter to the teacher.`,

        `*Seeing* (See) the Principal, the students ran away. .
*Having worked* (Work) hard, my sister got good marks.
*Starving* (Starve) is better than *begging*(beg).
*Reaching* (Reach) home, I asked my mother to make tea.`,
      ],
    },
    {
      label: "Notes",
      type: "passage",
      id: "gerund",
      data: {
        title: "Gerund",
        text: [
          `A gerund is a word ending with 'ing' and has the force of a noun and a verb. It is also known as a verbal noun.`,
          {
            type: "html",
            text: `<b>Example</b> - I learned <b>driving</b>.<br>
I like <b>watching</b> television.`,
          },
        ],
      },
    },
    {
      type: "selectWord",
      label: "Identify Gerund",
      id: "select-word-gerund",
      lockAfter: 1,
      commonData: {
        title: "Identify the Gerunds from the following sentences.",
      },
      data: [
        `*Swimming* is a good exercise.
I learnt *driving*.
I like *watching* television.
I am looking forward to *meeting* you.
He was used to *driving* on the right when he was in London.`,

        `*Writing* is my profession.
*Celebrating* various festivals is a common feature of the Hindu culture.
I enjoy *teaching* English.
*Walking* is a good exercise for health.
*Reading* books increases our knowledge.`,

        `*Working* hard makes you successful.
He dislikes *sleeping* long.
She hates *worrying* about the future.
I prefer *studying* computer science.`,

        `He is afraid of *telling* the truth.
My aim in life is *becoming* a writer.
Her objective is *starting* a home for parentless children.
What I want to do in life is *achieving* something useful for all.`,

        `I do not mind *having* a cup of tea.
I enjoy *reading* English novels.
Have you postponed *going* to Delhi?`,
      ],
    },
    {
      id: "gerund-infinitive",
      label: "Gerund or Infinitive",
      type: "classifySentence",
      data: {
        title:
          "Classify the below sentences based on the use of Gerund or Infinitive.",
        types: [
          {
            name: "Gerund",
            text: `Teach me speaking.
Advising is easier than practicing.
Reading is easier than writing.
Saving is earning.`,
          },
          {
            name: "Infinitive",
            text: ` Teach me to speak.
To advise is easier than to.
To read is easier than to write.
To save is to earn.`,
          },
        ],
      },
    },
    {
      id: "gerund-participle",
      label: "Gerund or Participle",
      type: "classifySentence",
      data: {
        title:
          "Classify the below sentences based on the use of Gerund or Participle.",
        types: [
          {
            name: "Gerund",
            text: `She is tired of writing.
I was prevented from meeting Padma.
Respecting our parents is our duty.`,
          },
          {
            name: "Participle",
            text: ` Writing letters to her husband, she forgot everything.
Meeting Padma for the first time, I thought she was quite gullible.
Respecting my parents words, I never tried to slack again.`,
          },
        ],
      },
    },
    {
      id: "fill-up-gerund",
      label: "Fill in the blanks",
      type: "fillup",
      commonData: {
        title: `Fill in the blanks using gerunds.`,
      },
      data: [
        `*Swimming (To swim)* is a good exercise.
I learnt *driving (to drive)*.
I like *watching (to watch)* television.
I am looking forward to *meeting (meet)* you.
He was used to *driving (drive)* on the right when he was in London.`,

        `*Writing (To write)* is my profession.
*Celebrating (To celebrate)* various festivals is a common feature of the Hindu culture.
I enjoy *teaching (to teach)* English.
*Walking (To walk)* is a good exercise for health.
*Reading (To read)* books increases our knowledge.`,

        `*Working (To work)* hard makes you successful.
He dislikes *sleeping (to sleep)* long.
She hates *worrying (to worry)* about the future.
I prefer *studying (to study)* computer science.`,

        `He is afraid of *telling (to tell)* the truth.
My aim in life is *becoming (to become)* a writer.
Her objective is *starting (to start)* a home for parentless children.
What I want to do in life is *achieving (to acheive)* something useful for all.`,

        `I do not mind *having (to have)* a cup of tea.
I enjoy *reading (to read)* English novels.
Have you postponed *going (to go)* to Delhi?`,
      ],
    },
    {
      label: "Correct or Incorrect",
      type: "classifySentence",
      id: "correct-incorrect-gerund",
      commonData: {
        title:
          "Classify the following sentences based on the correct usage of Gerunds.",
        types: ["Correct", "Incorrect"],
      },
      data: [
        [
          `She insisted on my paying the money.
Padma objective to Vijaya's talking like that.
I am sorry for his having spent life uselessly.
I was shocked at Rajiv Gandhi being assassinated.`,

          `She insisted on me paying the money.
Padma objected to Vijaya talking like that.
I am sorry for him having spent life uselessly.
I was shocked at Rajiv Gandhi's being assassinated.`,
        ],
        [
          `We were delighted at Mother Teresa being awarded Noble Peace Prize.
There is no chance of the snow falling.
There is possibility of the election taking place.
Playing chess is his passion.`,

          `We were delighted at Mother Teresa's being awarded Noble Peace Prize.
There is no chance of the snow's falling.
There is possibility of the election's talking place.
The playing chess is his passion.
Playing of chess is his passion.`,
        ],
        [
          `I dislike cooking food and washing clothes.
The rapid reading of a book is useless.
Reading a book rapidly is useless.
He insisted on going there alone.`,

          `I dislike cooking food and the washing of clothes.
Rapid reading a book is useless.
He insisted to go there alone.`,
        ],
        [
          `He prevented me from going here alone.
I dislike your going there.
The reading of a book rapidly is useless.`,

          `He prevented me to go there alone.
I dislike you going there.
Rapid reading of book useless`,
        ],
        [
          `I do not mind Ram's attending the party.
He begged of me the favour of granting him leave.
The party was handicapped by one of their best players being ill.`,

          `I do not mind Ram attending the party.
He begged of my favour of granting him leave.
The party was handicapped by one's of their best players being ill.`,
        ],
      ],
    },
    {
      label: "Notes",
      type: "passage",
      id: "infinitive",
      data: {
        title: "Infinitives",
        text: [
          `A gerund is a word ending with 'ing' and has the force of a noun and a verb. It is also known as a verbal noun. A word that is not limited by the person or number of the subject is known as an Infinitive. It is a kind of verb having certain features of a noun. So it is also treated as a verb-noun.
Infinitive = to + the base form of the verb, e.g., to sing, to dance, to run.`,
          {
            type: "html",
            text: `<b>Example</b> - <b>To advise others</b> is easy.<br>
<b>To learn</b> English is difficult.`,
          },
          `Infinitives don't have to stand alone. Infinitives can work with other words to form an infinitive phrase. To put it simply, infinitive phrases use additional words to modify or further describe the main infinitive.`,
          {
            type: "html",
            text: `<b>Example</b> - My boss <b>told me to pay attention</b>, but I wasn't listening.<br>
I <b>need you to get me out of here</b>.`,
          },
          `# Use of Infinitive 
1. As the subject of the a verb`,
          {
            type: "html",
            text: `<b>Example</b> - <b>It is easy to advise</b> others.<br>
<b>To advise others</b> is easy.`,
          },
          `2. As the object of a transitive verb`,
          {
            type: "html",
            text: `<b>Example</b> - I wish <b>to become a poet</b>.`,
          },
          `3. As the complement of a verb`,
          {
            type: "html",
            text: `<b>Example</b> - Our greatest pleasure is ,b>to help the poor</b>.`,
          },
          `4. As the object of a preposition`,
          {
            type: "html",
            text: `<b>Example</b> - I had no choice <b>but to give up my hope</b>.`,
          },
          `5. As an object complement`,
          {
            type: "html",
            text: `<b>Example</b> - I noticed Madhavi <b>smile at me</b>.`,
          },
          `6. To qualify a verb to express purpose`,
          {
            type: "html",
            text: `<b>Example</b> - I read books <b>to increase my knowledge</b>.`,
          },
          `7. To qualify an adjective`,
          {
            type: "html",
            text: `<b>Example</b> - It is hard <b>to please Padma</b>. `,
          },
          `8. To qualify a noun`,
          {
            type: "html",
            text: `<b>Example</b> - It is not the time <b>to sleep</b>.`,
          },
          `9. To qualify a sentence`,
          {
            type: "html",
            text: `<b>Example</b> - <b>To tell the truth</b>, we have no problem with you.`,
          },
          `Infinitives are of two types: bare infinitive and split infinitive. Bare Infinitives can be replaced by 'to' Infinitives.`,
          {
            type: "html",
            text: `<b>Example</b> - I can <b>teach</b>. => I am <b>able to teach</b>.`,
          },
          `It is generally treated wrong to split an Infinitive in the middle. The adverb can be used either before 'to' or after the Infinitive.`,
          {
            type: "html",
            text: `I expect Madhavi to carefully read the letter. => <b>Incorrect</b><br>
I expect Madhavi to read the letter carefully.=> <b>Correct</b>`,
          },
        ],
      },
    },
    {
      type: "selectWord",
      label: "Identify Infinitives",
      id: "select-word-infinitive",
      lockAfter: 1,
      commonData: {
        title: "Identify the Infinitives from the following sentences.",
        multiSelect: true,
      },
      data: [
        `I love *to speak* English.
She likes *to swim*.
*To advise others* is easy.
*To learn English* is difficult.
*To please Padma* is hard.`,

        `*It is easy to advise* others.
*It is difficult to learn* English.
*It is hard to please* Padma.
I wish *to become a poet*.
He likes *to read books*.`,

        `We propose *to visit Agra*.
Our greatest pleasure is *to help the poor*.
Her plan is *to settle in Australia*.
I had no choice *but to give up my hope*.
We are *about to begin our work*.`,

        `We heard him *speak to his father*.
We found her *open the door*.
I noticed Madhavi *smile at me*.
We have come *to see Madhavi*.
I read books *to increase my knowledge*.`,

        `It is hard *to please Padma*.
English is difficult *to learn*.
It is not the time *to sleep*.
I have the letters *to post*.
She has a child *to look after*.`,

        `*To tell the truth*, we have no problem with you.
*To explain bluntly*, we are in need of money.
*To tell you frankly*, I am not able to help you.
She *made* me *understand* life.
I *helped* her *learn* English.`,

        `I *heard* Madhavi *tell* her friend about me.
You *need* not *worry* about it.
She *dared* not *speak* with her father.
I *shall go* there.
You *should know* that.`,

        `She *will pay* the money.
They *would help* me.
You *may do* it tomorrow.
You *might tell* me the truth.`,

        `You *can* wait here.
She *could explain* the poem to me.
He *did* it well.
He *must return* the money.`,
      ],
    },
    {
      label: "Fill in the blanks",
      type: "matchByDragDrop",
      id: "drag-drop-infinitive",
      lockAfter: 1,
      commonData: {
        title: "Fill in the blanks using the most suitable words.",
      },
      data: [
        `You *should do* your work.
He *can win* this match.
You *must abide* by law.
You *ought to* respect your elders.
I *shall go* there.`,

        `You *should know* that.
She *will pay* the money.
They *would help* me.
You *may do* it tomorrow.
You *might tell* me the truth.`,

        `You *can wait* here.
She *could explain* the poem to me.
He *did* it well.
He *must return* the money.`,
      ],
    },
    {
      label: "Correct or Incorrect",
      type: "classifySentence",
      id: "correct-incorrect-infinitive",
      commonData: {
        title:
          "Classify the following sentences based on the correct usage of Infinitives.",
        types: ["Correct", "Incorrect"],
      },
      data: [
        [
          `I expect Madhavi to read the letter carefully.
She tried to explain clearly the situation.
He did nothing but laugh.
He did no more than laugh.`,

          `I expect Madhavi to carefully read the letter.
She tried to clearly explain the situation.
He did nothing but to laugh.
He did no more than to laugh.`,
        ],
        [
          `I went there personally to see the situation.
I request you kindly to grant my application.
He helped me to progress and prosper.
It lies in my power to succeed or to fail.`,

          `I went there to personally see the situation.
I request you to kindly grant my application.
He helped me to progress and to prosper.
It lies in my power to succeed or fail.`,
        ],
        [
          `We are advised to rejoice and to weep with others.
I should have like to go.
He seemed to have enjoyed his stay in Mumbai.
I gave him a pen to write with.
He has no paper to write on.`,

          `We are advised to rejoice and weep with others.
I should have liked to have gone.
He seemed to enjoy his stay in Mumbai.
I gave him a pen to write.
He has no paper to write.`,
        ],
      ],
    },
    {
      id: "mcq-infinitive",
      label: "Multiple Choice Questions",
      type: "mcq",
      commonData: {
        title: "Multiple Choice Questions",
      },
      data: [
        {
          questions: [
            {
              qText:
                "Which of the following is the correct usage of infinitive?",
              options:
                "He knows how to read and write English, He knows to read and write English",
            },
            {
              qText:
                "Which of the following is the correct usage of infinitive?",
              options:
                "My father taught him how to drive a car, My father taught him to drive a car",
            },
            {
              qText:
                "Which of the following is the correct usage of infinitive?",
              options:
                "Rekha was punished for coming late, Rekha was punished to coming late",
            },
            {
              qText:
                "Which of the following is the correct usage of infinitive?",
              options:
                "The student was made to write an essay by me, The student was made by me to write an essay",
            },
            {
              qText:
                "Which of the following is the correct usage of infinitive?",
              options: "I was let go by him, I was by him let go",
            },
          ],
        },
        {
          questions: [
            {
              qText:
                "Which of the following is the incorrect usage of infinitive?",
              options:
                "That way to behave is dangerous, That is a dangerous way to behave",
            },
            {
              qText:
                "Which of the following is the incorrect usage of infinitive?",
              options:
                "It is important to be patient for Jake to his little brother, It is important for Jake to be patient to his little brother",
            },
            {
              qText:
                "Which of the following is the incorrect usage of infinitive?",
              options:
                "To do this is the right thing, This is the right thing to do",
            },
            {
              qText:
                "Which of the following is the incorrect usage of infinitive?",
              options:
                "When to press the button tell me, Tell me when to press the button",
            },
            {
              qText:
                "Which of the following is the incorrect usage of infinitive?",
              options:
                "I request you to kindly grant my application, I request you kindly to grant my application.",
            },
          ],
        },
      ],
    },
  ],
};
