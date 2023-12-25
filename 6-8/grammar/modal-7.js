export default {
  id: 'modal-7',
  label: 'Modals',
  lockAfter: 3,
  list: [
    {
      label: 'Modal Auxiliaries',
      type: 'passage',
      id: 'modal-auxiliaries',
      data: {
        title: 'Modal Auxiliaries',
        text: [
          `Modals are auxiliary verbs that express the mode of action denoted by the main verb.`,
          {
            type: 'html',
            text: `The modal auxiliary includes <i>can</i>, <i>could</i>, <i>may</i>, <i>might</i>, <i>would</i>, <i>should</i>, <i>must</i>, <i>shall</i>, <i>will</i>, <i>need</i>, <i>dare</i>, <i>ought to</i>, <i>used to</i>, etc.`
          },
          `# Uses of 'Can' 
1. To express ability or power.`,
          {
            type: 'html',
            text: `Eg: He <i>can</i> read this language.<br>
He <i>can</i> lift this heavy box.`
          },
          `2. To express permission.`,
          {
            type: 'html',
            text: `Eg: You <i>can</i> eat this chocolate.<br>
She <i>can</i> never enter this house.`
          },
          `# Uses of 'Could'
1. To show power or ability in past.`,
          {
            type: 'html',
            text: `Eg: She <i>could</i> dance well in her youth.<br>
We <i>could</i> complete this task.`
          },
          `2. To show possibility in past.`,
          {
            type: 'html',
            text: `Eg: She <i>could</i> buy a pen if she had money.<br>
Ramu <i>could</i> play cricket if there had been no rain.`
          },
          `3. To make a polite request.`,
          {
            type: 'html',
            text: `Eg: <i>Could</i> you help me now?<br>
<i>Could</i> they spare that meat?`
          },
          `4. To show condition.`,
          {
            type: 'html',
            text: `Eg: If we had got up earlier, we <i>could</i> have completed this.<br>
We <i>could</i> have seen the match if there had been an electricity supply.`
          }
        ]
      }
    },
    {
      id: 'can-could',
      label: 'Fillup: Can or Could',
      type: 'fillup',
      data: {
        title: `Fill in the blanks using can or could.`,
        text: `*Can (Could)* you please pass the salt?
We *can (could)* finish the project by the end of the week.
*Could (Can)* you help me with this math problem?
He *could (can)* run faster when he was younger.
She *could (can)* play the piano when she was a child.
We *could (can)* go to the beach if the weather is good.
*Can (Could)* you believe it's already May?
I *can (could)* speak French fluently.`
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
            text: `The modal verb "should" is used to express strong advice. 
The modal verb "can" is used to express ability or permission. 
Modal verbs can be used in both formal and informal language. 
Modal verbs can be used to express obligation or duty.`
          },
          {
            name: 'False',
            text: `Modal verbs are only used to indicate past actions. 
Modal verbs can never be used to express present ability. `
          }
        ]
      }
    },
    {
      label: 'Uses of May and Might',
      type: 'passage',
      id: 'may-might',
      data: {
        title: 'May and Might',
        text: [
          `# Uses of 'May'
1. To express permission, possibility.`,
          {
            type: 'html',
            text: `Eg: <i>May</i> I go there? 
It <i>may</i> rain heavily.`
          },
          `2. To express wish, prayer.`,
          {
            type: 'html',
            text: `Eg: <i>May</i> you live long!<br>
<i>May</i> God bless you with fortune!`
          },
          `3. To express purpose.`,
          {
            type: 'html',
            text: `Eg: She works so that she <i>may</i> prosper.<br>
We study so that we <i>may</i> pass the exam.`
          },
          `# Uses of 'Might'
1. To show permission, possibility in the past.`,
          {
            type: 'html',
            text: `Eg: I <i>might</i> be sent to the hostel.`
          },
          `2. To express purpose in the past.`,
          {
            type: 'html',
            text: `Eg: He wore a scarf so that he <i>might</i> not burn his skin.<br>
We rushed so that we <i>might</i> not miss our train.`
          },
          `3. To make a request.`,
          {
            type: 'html',
            text: `Eg: If possible, you <i>might</i> bring me a glass of water.<br>
Condition allowing, they <i>might</i> be seeking favor from me.`
          },
          `4. To make suggestions or criticism.`,
          {
            type: 'html',
            text: `Eg: She <i>might</i> have picked other issues.`
          }
        ]
      }
    },
    {
      id: 'may-might-fillup',
      label: 'Fillup: May or Might',
      type: 'fillup',
      data: {
        title: `Fill in the blanks using may or might.`,
        text: `I *may (might)* go to the beach tomorrow if the weather is good.
She *might (may)* be running late because of traffic.
It *may (might)* rain later today, so don't forget your umbrella.
He *might (may)* have forgotten his keys at home.
We *may (might)* not be able to finish the project on time.
The new restaurant *might (may)* be worth checking out.
She *may (might)* have already left by the time we get there.
He *might (may)* not be interested in joining us for the movie.
It *may (might)* take a while to get used to the new software.
They *might (may)* have to cancel the event due to low attendance.`
      }
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
Madam, *could (may)* you repeat what you said?`,

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
      label: 'Uses of Would, Should and Must',
      type: 'passage',
      id: 'would-should-must',
      data: {
        title: 'Would, Should and Must',
        text: [
          `# Uses of 'Would'
1. To show past habit and unreal condition.`,
          {
            type: 'html',
            text: `Eg: He <i>would</i> rise at 5 o'Clock. 
What <i>would</i> you like to have? Tea or coffee.`
          },
          `2. To make a polite request.`,
          {
            type: 'html',
            text: `Eg: <i>Would</i> you lend me your pen?<br>
<i>Would</i> you give me your scooter?`
          },
          `# Uses of 'Should'
1. To express duty and obligation.`,
          {
            type: 'html',
            text: `Eg: The police <i>should</i> protect us.<br>
You <i>should</i> respect your parents.`
          },
          `2. To show advice, suggestion.`,
          {
            type: 'html',
            text: `Eg: They <i>should</i> follow the rules.<br> 
You <i>should</i> take medicine.`
          },
          `3. To express imagination.`,
          {
            type: 'html',
            text: `Eg: <i>Should</i> you lose your money, go to ATM.<br>
<i>Should</i> you forget the password, retry then.`
          },
          `4. To express probability, polite command.`,
          {
            type: 'html',
            text: `Eg: She <i>should</i> be in the library.<br> 
You <i>should</i> play the game fairly.`
          },
          `# Uses of 'Must'
1. To show prohibition, compulsion.`,
          {
            type: 'html',
            text: `Eg: You <i>must</i> not touch this.<br>
She <i>must</i> feel sorry for you.`
          },
          `2. To show necessity or obligation.`,
          {
            type: 'html',
            text: `Eg: Team <i>must</i> win the game.<br>
You <i>must</i> pay your bill on time.`
          },
          `3. To show strong advice.`,
          {
            type: 'html',
            text: `Eg: Police <i>must</i> take care of emotions of the criminals.<br>
Leaders <i>must</i> promise what is viable to them.`
          }
        ]
      }
    },
    {
      id: 'would-should-must-fillup',
      label: 'Fillup: Would, Should or Must',
      type: 'fillup',
      data: {
        title: `Fill in the blanks using would, should or must.`,
        text: `She *would (should, must)* sing her son to sleep every night.
We *should (would)* start preparing for the exams immediately.
You *must (would, should)* be at the airport at least two hours before your flight.
I *must (would, should)* finish this project before the deadline.
I *would (should)* rather walk than ride home.
One *should (would)* be kind to people.
We *must (would, should)* follow the safety guidelines to prevent accidents.`
      }
    },
    {
      id: 'mcq-modal-auxiliary',
      label: 'Choose the correct option',
      type: 'mcq',
      data: {
        title: 'Fill in the blanks by choosing the correct modal auxiliary.',
        questions: [
          {
            qText:
              "If I hadn't worked hard, I _____ never have been able to pass the examination.",
            options: `would, will, won't, wouldn't`
          },
          {
            qText: '_______ I help myself to some hot coffee?',
            options: `Should, Cannot, Will, May`
          },
          {
            qText:
              'I ____ immediately make out from her accent that she was from France.',
            options: `could, would, should, can`
          },
          {
            qText:
              'He ________ have negotiated with the landlord before the agreement was finalized.',
            options: `ought to, need, may, can`
          },
          {
            qText:
              '________ it be better if we go by car instead of taking the bus?',
            options: `Wouldn't, Mustn't, Can't, Should`
          },
          {
            qText:
              'Veena cannot join us as she ______ pick up her son from school.',
            options: `needs to, ought to, will, might`
          },
          {
            qText: 'You _______ spend more time with your children.',
            options: `ought to, will, would, need`
          },
          {
            qText: 'You _______ feel much better if you do some exercise.',
            options: `will, must, should, can`
          },
          {
            qText: 'He ________ have informed me before going there.',
            options: `should, ought, must, can`
          }
        ]
      }
    },
    {
      label: 'Uses of Shall/Will, Need, Dare and Used to',
      type: 'passage',
      id: 'modal-auxiliaries-2',
      data: {
        title: 'Shall/Will, Need, Dare and Used to',
        text: [
          `# Uses of 'Shall/Will'
1. Shall is used for 1st person subject - I, We
2. Will is used for 2nd and 3rd person subject - You, he, she, it, they.
But, to show the emphasis, they can be interchanged with each other. Therefore, when one needs to show determination then the usage with the auxiliary would be:
=> Will 1st person subject - I, we
=> Shall 2nd and 3rd person subject - You, he, she, it, they.`,
          {
            type: 'html',
            text: `Eg: I <i>shall</i> go. (<i>Simple future</i>)<br>
I <i>will</i> go. (<i>Determination</i>)<br>
She <i>will</i> win. (<i>Simple future</i>)<br>
She <i>shall</i> win. (<i>Emphasized act</i>)`
          },
          `# Uses of 'Need'
1. To express prohibition.`,
          {
            type: 'html',
            text: `Eg: <i>Need</i> I go there.<br>
<i>Need</i> we plan in advance.`
          },
          `# Uses of 'Dare'
1. To express a negation with interrogation.`,
          {
            type: 'html',
            text: `Eg: How <i>dare</i> you touch my pen?<br>
She <i>dare</i> not play tennis with me.`
          },
          `# Uses of 'Used to'
1. To express a past habit.`,
          {
            type: 'html',
            text: `Eg: She <i>used to</i> go to perform in movies or dramas.<br>
I <i>used to</i> play cricket in 2005.`
          },
          `2. To express a habit of present that has its roots in the past.`,
          {
            type: 'html',
            text: `Eg: My grandfather is not <i>used to</i> sweets.<br>
I am <i>used to</i> a life full of struggle.`
          }
        ]
      }
    },
    {
      id: 'will-shall',
      label: 'Fillup: Will or Shall',
      type: 'fillup',
      data: {
        title: `Fill in the blanks with the correct option`,
        text: `They said that they *will (shall)* go to the park in the evening.
The warden thinks that I *shall (will)* finish the project soon.
The doctor *will (shall)* visit the patient at the allotted time.
My mother promised me that she *will (shall)* buy me a new dress.
The meeting *shall (will)* start at 10 am.
I *will (shall)* attend the meeting tomorrow.
*Shall (Will)* we go to the cinema tonight?
She *will (shall)* be arriving later this evening.
*Shall (Will)* I bring some snacks to the party?
I *will (shall)* help you with your homework tonight.`
      }
    },
    {
      id: 'need-dare-usd-to',
      label: 'Fillup: Need, Dare or Used to',
      type: 'fillup',
      data: {
        title: `Fill in the blanks with the correct option`,
        text: `I *need (dare, used to)* to finish this project by tomorrow.
How *dare (need, used to)* you speak to me like that!
When I was a child, I *used to (dare, need)* love playing with Legos.
I *need (dare, used to)* to go to the grocery store and buy some food.
I *dare (need, used to)* you to eat that entire spicy pepper in one bite.
He *used to (dare, need)* live in this city, but he moved away a few years ago.
We *need (dare, used to)* to find a solution to this problem before it gets worse.
How *dare (need, used to)* you accuse me of something I didn't do!
I *used to (dare, need)* be afraid of heights, but I've since conquered that fear.
He *needs (dares, used)* to study more if he wants to pass his exams.`
      }
    },
    {
      id: 'fillup-1',
      label: 'Fill in the blanks',
      type: 'fillup',
      data: {
        title: 'Fill in the blanks with suitable auxiliary verbs.',
        text: `All *will (shall)* go well if you are prepared.
They *might (can)* lose their confidence if reproached constantly.
*Could (Will)* you lend me that book?
You *should (would)* exercise regularly.
He felt that he *needs (must)* to visit his village soon.
There *might (can)* be red ants in those bushes.
Everyone *must (should)* be in their seats before the examiner arrives.
I *need (used to)* a beautiful garden filled with roses.`
      }
    },
    {
      label: 'Modals',
      type: 'passage',
      id: 'passage',
      data: {
        title: 'Modals',
        text: [
          `1. should/ought to - indicate obligation, probability
2. must - indicate logical conclusion, necessity
3. will/would - indicate willingness, likelihood, certainity, habits
4. may/might/can/could - indicate possibility, future, plan, ability, permission, offer
5. need/needn't - As a modal verb, it is commonly used in negative sentences. It indicates something unnecessary
There are two modals that serve as the main verb as well.`,
          {
            type: 'html',
            text: `They are: <i>dare</i> and <i>need</i>.`
          },
          `Verbs used after modals are always in their original form.
Conditional sentences, frequently use modal auxiliaries. `,
          {
            type: 'html',
            text: `The modals which are most commonly used are <i>can</i>, <i>could</i>, <i>may</i>, <i>might</i>, <i>must</i>, <i>should</i>, <i>will</i>, and <i>would</i>.`
          }
        ]
      }
    },
    {
      label: 'Multiple Choice Questions',
      type: 'mcq',
      id: 'mcq-mdl-2',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: `Which of the following is NOT a function of modal verbs?`,
            options: ` Describing the action performed by the subject
Indicating permission, obligation or advice
Offering help or assistance
Indicating probability or possibility `
          },
          {
            qText: `Which modal verb indicates obligation and probability?`,
            options: `Should or Ought to, Must, May or Might, Will or Would`
          },
          {
            qText: `Which modal verb indicates logical conclusion and necessity?`,
            options: `must, shall, would, need`
          },
          {
            qText: `Which two modal verbs can serve as the main verb as well?`,
            options: `dare and need, should and must, may and can, will and would`
          },
          {
            qText:
              'Which of the following is a correct use of the modal verb "can"?',
            options: `They can't come to the party tonight, I can like to play soccer, She can sings beautifully.`
          },
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
            options: `must, need, may, should`
          }
        ]
      }
    },
    /*{
      id: 'fill-up-modal',
      label: 'Fill in the blanks',
      type: 'matchByDragDrop',
      commonData: {
        title: 'Use appropriate modals to fill in the blanks.'
      },
      lockAfter: 1,
      data: [
        `Everybody *must* fulfill his or her duties towards the country.
The computer is not working. The supervisor *might* call an engineer, today.
The work is completed. *May* I leave now?
It is raining cats and dogs. This *can* cause floods in many areas.
*Could* I, please, make a call from your phone?`,

        `Vibha is not home today. She *must* have gone for dance practice.
*May* I request you show me this file?
They *have* to clean up the kitchen before they go to bed.
You *should* take your umbrella with you, it looks like it's going to rain.
I *might* have left my phone at home.`,

        `Students *must* not bring their phones to the exam.
She *might* stay up late to finish her project tonight.
She *can* leave work early if she finishes her tasks.
I *could* have lost my phone somewhere in the house.
I am not the right person to give you permission to go. You *may* ask the Manager.`,

        `I *would* like to go boating as well as diving.
How *dare* he enter my room?
We focus on our studies so that we *may* not fail in our examinations.
Let whatever hardships may come our way. One day, we *will* overcome.
His goggles are kept in the cupboard, but nobody *dares* to touch them.`,

        `Sheveta is a little snobbish and naughty girl. We *need* not prank her. She will get angry.
Don't challenge me. If I try, she *shall* come and talk to me politely.
*Would* you like to try your hand at chess, madam?
You *should* come to the party with me.
She *will* run five miles every day to prepare for the marathon.`,

        `We *have* to finish this project by the end of the week.
You *must* not park your car in this area.
They *need* to take extra precautions when working with dangerous chemicals.
Shipra applies sunscreen lotion every day so that she *may* not get her skin tanned.
He *would* never allow anybody to wear them.`,

        `You *must* not use your cell phone while driving.
She *would* like to visit the museum this weekend.
We *will* have to finish this project before the deadline.
You *need* to submit your application by tomorrow.`,

        `You *must* take your medicine three times a day.
He *might* be at the meeting, but I'm not sure.
He is not in his cabin. You *can* check if he is there in the lobby.
He *has* to be at work by 9 AM every day.`
      ]
    },*/
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
      label: 'Fillup - Conditionals',
      type: 'fillup',
      title: `Complete the conditional sentences using suitable modals.`,
      id: 'fillup-drag-drop-3',
      data: {
        fontSize: '1rem',
        text: `If I see him, I *will (can)* tell him you called. 
If he had studied harder, he *would (must)* have passed the exam
If you had arrived earlier, we *could (can)* have gone to the concert. 
If I *could (may)* leave work early today, I'd be very grateful.
If she *would (could)* work harder, she'd succeed.
If it rains, I *will (can)* stay at home.
If I had more time, I *would (must)* travel the world. 
If she were taller, she *could (can)* reach the top shelf.`
      }
    },
    {
      id: 'mcq-2',
      label: 'Correct Choice',
      type: 'mcq',
      data: {
        title:
          'Pick out the correct sentence from among the four sentences in each of the following examples.',
        questions: [
          {
            qText:
              'Pick the correct sentences from the four sentences given below.',
            options: `I could pass the exam. But I did not appear for it.
I was able to pass the exam. But I could not appear for it.
I was able to pass the exam. But I did not appeared for it.
I was able to pass the exam. But I did not appear for it.`
          },
          {
            qText:
              'Pick the correct sentences from the four sentences given below.',
            options: `Nobody knows his whereabouts. He might be there in Doha.
Nobody knows his whereabouts. He may was there in Doha.
Nobody knew his whereabouts. He may be there in Doha.
Nobody knews his where abouts. He is there in Doha.`
          },
          {
            qText:
              'Pick the correct sentences from the four sentences given below.',
            options: `The drug addicts must not be tortured but should be rehabilitated.
The drug addicts may not be tortured but should be rehabilitated.
The drug addicts can not be tortured but must be rehabilitated.
The drug addicts should not be tortured but might be rehabilitated.`
          },
          {
            qText:
              'Pick the correct sentences from the four sentences given below.',
            options: `You ought to help the blind to cross the road.
You must to help the blind to cross the road.
You ought to help the blind to crossing the road.
You should help the blinds to cross the road.`
          },
          {
            qText:
              'Pick the correct sentences from the four sentences given below.',
            options: `You need not worry at all. I will take care of your luggage.
You need not worry at all. I am take care of your luggage.
You need to not worry at all. I will taking care of your luggage.
You need not worry at all. I will be take care of your luggage.`
          },
          {
            qText:
              'Pick the correct sentences from the four sentences given below.',
            options: `Everyone should follow the path shown by his or her parents and teachers. 
Everyone may be follow the path shown by their parents and teachers.
Every should be follow the path shown by his or her parents and teachers.
Everyone might follow the path shown by his or her parents and teachers.`
          },
          {
            qText:
              'Pick the correct sentences from the four sentences given below.',
            options: `Abhi can achieve his goal if has strong determination. 
Abhi can achieve his goal if they have strong determination. 
Abhi may achieve his goal if he had strong determination.
Abhi can achieve his goal but he has strong determination.`
          },
          {
            qText:
              'Pick the correct sentences from the four sentences given below.',
            options: `This seems to be a difficult task. But I will make this happen.
This seemed to be difficult task. But I may make this happen.
This seems to be difficult task. But I shall make this happen.
This seemed to be a difficult task. But I should make this happen.`
          },
          {
            qText:
              'Pick the correct sentences from the four sentences given below.',
            options: `One should not be too careful about what is good or what is bad.
One should not too careful about what is good or what is bad.
One may not be too careful about what is good or what is bad.
One will not be too careful about what is good or what is bad.`
          },
          {
            qText:
              'Pick the correct sentences from the four sentences given below.',
            options: `He must pass the exam on the first attempt.
He might be pass the exam in the first attempt.
He must be pass the exam in the first attempt.
He should be pass the exam in the first attempt.`
          }
        ]
      }
    },
    {
      id: 'fill-up-option-para',
      label: 'Complete: Paragraph',
      type: 'fillup',
      commonData: {
        title: `Fill in the blanks using suitable modals.`
      },
      data: [
        `If I *could (should)* turn back time, I *would (can)* definitely visit ancient civilizations like Egypt and Rome. The opportunity to witness their grandeur and understand their cultural heritage *would (must)* be absolutely fascinating. Moreover, if I *had (have)* the chance to explore these historical wonders, I *would (should)* eagerly immerse myself in their rich history, admiring the architectural marvels and unraveling the mysteries of the past. Alas, such a journey remains a mere dream for now, but the allure of these ancient civilizations continues to captivate my imagination.`,

        `If I were to go to the beach tomorrow, I *would (can)* definitely take my sunscreen and sunglasses. The weather forecast suggests that it might be sunny, and I *wouldn't (shouldn't)* want to get sunburned. Plus, sunglasses *would (could)* protect my eyes from the bright sunlight. If the temperature rises above 30 degrees Celsius, I *might (may)* also consider bringing a hat to shield my face from the intense heat. Planning ahead and being prepared for different scenarios is essential when making decisions based on potential conditions.`,

        `If I *had (have)* more time, I *would (should)* definitely travel to exotic destinations around the world. I *could (can)* explore the ancient ruins of Machu Picchu in Peru, or *maybe (can)* witness the breathtaking beauty of the Northern Lights in Iceland. With ample time on my hands, I *might (may)* even consider volunteering for a meaningful cause in a remote village. The possibilities are endless, and if circumstances were different, I *would (must)* eagerly embark on these incredible adventures.`,

        `If I *could (can)* choose any superpower, I *would (shall)* want the ability to teleport. Imagine the convenience of instantly traveling to any destination in the blink of an eye. I *would (can)* never have to worry about long and tiring journeys or being stuck in traffic again. With this incredible power, I *could (must)* explore the world effortlessly, visiting exotic locations and experiencing different cultures. However, with great power comes great responsibility, and I *would (may)* use my teleportation ability wisely, ensuring I respect the laws of physics and the rights of others.`,

        `If I were to win the lottery, I *would (shall)* travel around the world and experience different cultures. I *might (can)* visit exotic destinations like Bali or the Maldives, or explore historical sites like the Great Wall of China or the Pyramids of Egypt. I *could (need to)* indulge in gourmet cuisine, stay at luxurious hotels, and immerse myself in breathtaking landscapes. However, if I *didn't (can't)* win the lottery, I *would (may)* still find ways to satisfy my wanderlust by planning budget-friendly trips to nearby destinations or exploring hidden gems within my own country.`,

        `If I *had (have)* more time, I *would (might)* definitely attend the music concert tomorrow. The opportunity to see my favorite band perform live is truly tempting. However, due to my hectic schedule, it seems unlikely that I *will (should)* be able to make it. If only I *could (might)* rearrange my commitments, I *would (shall)* gladly seize this chance to enjoy an unforgettable evening filled with captivating melodies and energetic performances.`,

        `If I *had (have)* more time, I *would (will)* definitely visit my grandmother this weekend. I *should (must)* have planned ahead and made the necessary arrangements. However, if my schedule permits, I *will (may)* try my best to pay her a visit and spend some quality time together. I *might (could)* also bring her favorite book as a small gift. Although the circumstances are uncertain, I remain hopeful and determined to make it happen.`,

        `If I *had (have)* known about the event earlier, I *would (shall)* have definitely attended it. The excitement of the occasion and the chance to connect with like-minded individuals *would (ought to)* have been incredible. However, since I *wasn't (musn't)* aware of it until now, I *cannot (couldn't)* change the past. Nevertheless, I *will (shall)* make sure to keep an eye out for future events and seize the opportunity to participate.`
      ]
    }
  ]
};
