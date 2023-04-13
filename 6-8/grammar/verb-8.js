export default {
  id: 'verb-8',
  label: 'Verb and Its Types',
  lockAfter: 3,
  list: [
    {
      label: 'Notes',
      type: 'passage',
      id: 'linking-verb',
      data: {
        title: 'Linking Verb',
        text: [
          `Linking verbs are verbs that don't show an action but rather describe the subject. While verbs like walk or jump represent an action, linking verbs like be or seem add more details to the subject, such as 'he seems nice' or 'she is an architect'.
All basic forms of the 'to be' verb can be used as linking verbs to qualify the state of being of the subject.
All forms of the verb 'to seem' are used as linking verbs.
All forms of the verb 'to become' are used as linking verbs.`
        ]
      }
    },
    {
      type: 'selectWord',
      label: 'Linking Verb',
      id: 'select-word-2',
      lockAfter: 1,
      commonData: {
        title: 'Identify linking verbs from the following sentence.'
      },
      data: [
        `Neena *seems* to be very energetic today.
The dish *smells* delicious.
The dress you were wearing yesterday *looked* great on you.
Divya and Meera *remained* best friends even after all the fights they have had in the past.`,

        `The little boy *sounded* excited about the school trip.
Geetha *is* the new marketing manager
I *am* the class teacher of VII B.
Fathima and Hameeda *were* exhausted after cleaning every loft in the office.`,

        `This book on women and society *seems* to be interesting.
The tree *was* cut.
The child *looks* happy.
Your brother *sounds* really cool.`,

        `Ben *is* the Vice Principal of a Girl's High School.
The teacher *was* absent today.
My parents *were* tired after the long journey.
Kenny *seems* to be a great man.`,

        `All it took was one wrong word to make the situation *turn* ugly.
Based on the results of the experiment, her hypothesis *proved* true.
My daughter *acts* shy around strangers.
The dirty dog *smells* bad because his nose is clogged.
William's mom *is* a doctor.`
      ]
    },
    {
      label: 'Fill in the blanks',
      type: 'matchByDragDrop',
      id: 'fillup-drag',
      lockAfter: 1,
      commonData: {
        title: 'Fill in the blanks using linking verbs.',
        styles: {
          fontSize: '1rem',
          dashWidth: 70
        }
      },
      data: [
        `I *am* the class teacher of VII B.
Fathima and Hameeda *were* exhausted after cleaning every loft in the office.
This book on women and society *seems* to be interesting.
The tree *was* cut.
The child *looks* happy.`,

        `My favorite food *is* biriyani. 
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
The dirty dog *smells* bad.`
      ]
    },
    {
      label: 'Notes',
      type: 'passage',
      id: 'passage',
      data: {
        title: 'Modals',
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
            type: 'html',
            text: `They are: <b>dare</b> and <b>need</b>.`
          },
          `Verbs used after modals are always in their original form.
Conditional sentences, frequently use modal auxiliaries. `,
          {
            type: 'html',
            text: `The modals which are most commonly used are <b>can</b>, <b>could</b>, <b>may</b>, <b>might</b>, <b>must</b>, <b>should</b>, <b>will</b>, and <b>would</b>.`
          }
        ]
      }
    },
    {
      id: 'will-shall',
      label: 'Will or Shall',
      type: 'fillup',
      title: `Read the short paragraph. Fill in the blanks with a, an or the.`,
      data: [
        `They said that they *will (shall)* go to the park in the evening.
The warden thinks that I *shall (will)* finish the project soon.
The doctor *will (shall)* visit the patient at the alloted time.
My mother promised me that she *will (shall)* buy me a new dress.
The meeting *shall (will)* start at 10 am.`
      ]
    },
    {
      id: 'would-should',
      label: 'Would or Should',
      type: 'fillup',
      title: `Fill in the blanks using would or should.`,
      data: [
        `She *would (should)* sing her son to sleep every night.
We *should (would)* start preparing for the exams immediately.
I *would (should)* go for a red dress for the party.
I *would (should)* rather walk than a ride home.
One *should (would)* be kind to people.`
      ]
    },
    {
      id: 'fillup-1',
      label: 'Fill in the blanks',
      type: 'fillup',
      noOptions: true,
      title: 'Fill in the blanks with suitable auxiliary verbs.',
      data: [
        `All *will* go well if you are prepared.
They *will* lose their confidence if reproached constantly.
*Will* you lend me that book?
You *should* exercise regularly.
He felt that he *ought* to visit his village soon.
There *might* be red ants in those bushes.
Everyone *must* be in their seats before noon.
I *need* a beautiful garden.`
      ]
    },
    {
      label: 'Conditionals',
      type: 'matchByDragDrop',
      title: `Complete the conditional sentences using suitable modals.`,
      id: 'fillup-drag-drop-3',
      data: {
        styles: {
          fontSize: '1rem',
          dashWidth: 80
        },
        text: `If he *can* help, he does. 
If I *may* help, ask me.
If we *must* help, we do.
If you *should* need help, please ask us.
If he *will* help, he'll do a good job.
If I *could* leave work early today, I'd be very grateful.
If she *would* work harder, she'd succeed. `
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
            options: `would, will, won't, would'nt`
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
              'He ________ have negotiated with the landlord before the agreement was finalised.',
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
            qText: 'This _______ feel much better if you do some exercise.',
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
            options: `I could pass the exam. But I did not appear for it, I was able to pass the exam. But I could not appear for it, I was able to pass the exam. But I did not appeared for it, I was able to pass the exam. But I did not appear for it`
          },
          {
            qText:
              'Pick the correct sentences from the four sentences given below.',
            options: `Nobody knows his whereabouts. He might be there in Doha, Nobody knows his whereabouts. He may was there in Doha, Nobody knew his whereabouts. He may be there in Doha, Nobody knews his where abouts. He is there in Doha`
          },
          {
            qText:
              'Pick the correct sentences from the four sentences given below.',
            options: `The drug addicts must not be tortured but should be rehabilitated, The drug addicts may not be tortured but should be rehabilitated, The drug addicts can not be tortured but must be rehabilitated, The drug addicts should not be tortured but might be rehabilitated`
          },
          {
            qText:
              'Pick the correct sentences from the four sentences given below.',
            options: `You ought to help the blind to cross the road, You must to help the blind to cross the road, You ought to help the blind to crossing the road, You should help the blinds to cross the road`
          },
          {
            qText:
              'Pick the correct sentences from the four sentences given below.',
            options: `You need not worry at all. I will take care of your luggage, You need not worry at all. I am take care of your luggage, You need to not worry at all. I will taking care of your luggage, You need not worry at all. I will be take care of your luggage`
          },
          {
            qText:
              'Pick the correct sentences from the four sentences given below.',
            options: `Everyone should follow the path shown by his or her parents and teachers, Everyone may be follow the path shown by their parents and teachers, Every should be follow the path shown by his or her parents and teachers, Everyone might follow the path shown by his or her parents and teachers`
          },
          {
            qText:
              'Pick the correct sentences from the four sentences given below.',
            options: `Abhi can achieve his goal if has strong determination, Abhi can achieve his goal if they have strong determination, Abhi may achieve his goal if he had strong determination, Abhi can achieve his goal but he has strong determination`
          },
          {
            qText:
              'Pick the correct sentences from the four sentences given below.',
            options: `This seems to be difficult. But I will make this happen, This seemed to be difficult. But I may make this happen, This seems to be difficult. But I shall make this happen, This seemed to be difficult. But I should make this happen`
          },
          {
            qText:
              'Pick the correct sentences from the four sentences given below.',
            options: `One should not be too careful about what is good or what is bad, One should not too careful about what is good or what is bad, One may not be too careful about what is good or what is bad, One will not be too careful about what is good or what is bad`
          },
          {
            qText:
              'Pick the correct sentences from the four sentences given below.',
            options: `He must pass the exam in the first attempt, He might be pass the exam in the first attempt, He must be pass the exam in the first attempt, He should be pass the exam in the first attempt`
          }
        ]
      }
    },
    {
      label: 'Notes',
      type: 'passage',
      id: 'auxiliary-verb',
      data: {
        title: 'Auxiliary Verb',
        text: [
          `# Auxiliary Verb
Auxiliary verbs have no meaning on their own. They are necessary because they help the main verb to form the grammatical structure of a sentence. The main functions of auxiliary verbs are to form questions, short answers, question tags and to avoid repetition.
Auxiliary verbs fall into three basic groups:
1. primary or main auxiliary verbs: The primary auxiliary verbs are called so because they are the most used in forming tenses, negatives and questions. `,
          {
            type: 'html',
            text: `These are forms of the verbs <b>be</b>, <b>have</b> and <b>do</b>.`
          },
          `2. modals or modal auxiliary verbs: Modal auxiliary verbs are also helping verbs. They are used before main verbs to express a range of meanings such as ability, possibility, certainty, suggestion, permission, obligation and so on. In almost all cases, the modal verb does not change according to the subject of the sentence. This means that the modal verb need not agree with the subject in number and person.`,
          {
            type: 'html',
            text: `Examples include <b>can</b>, <b>could</b>, <b>may</b>, <b>might</b>, <b>shall</b>, <b>should</b>, <b>will</b>, <b>would</b>, <b>must</b>, etc.`
          },
          `3. other auxiliary verbs with the characteristics of modals: Some words do not always behave as modals. Such phrases are called semi-modals.`,
          {
            type: 'html',
            text: `Examples include <b>be about to</b>, <b>be able to</b>, <b>be likely to</b>, <b>had better</b>, <b>have to</b>, <b>ought to<b>, <b>used to</b>, <b>need to</b>, <b>dare</b> and <b>would rather</b>.`
          }
        ]
      }
    },
    {
      id: 'had-has',
      label: 'Has or Had',
      type: 'fillup',
      commonData: {
        noOptions: true,
        title: 'Fill in the blanks using has or had.'
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

        `He *has* a lot of experience in the field of finance.
She *has* written three novels and a collection of short stories.
The company *has* hired several new employees this month.
Our team *has* won every game this season.`,

        `She *had* a headache yesterday and stayed home from work.
The train *had* already left the station by the time we arrived.
He *had* finished his homework before his friends came over.
The restaurant *had* run out of their most popular dish by the time we got there.
She *had* been studying French for three years before she moved to France.`
      ]
    },
    {
      id: 'am-is-are',
      label: 'Am, Is or Are',
      type: 'fillup',
      commonData: {
        noOptions: true,
        title: 'Fill in the blanks using is, am and are.'
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

        `I *am* a student at the university.
She *is* an accomplished musician and composer.
They *are* planning a trip to Europe next summer.
He *is* always early for his appointments.
We *are* working on a new project at the office.`,

        `The weather *is* beautiful today.
You *are* doing a great job with your studies.
The book *is* on the shelf next to the window.
They *are* listening to music in the living room.
She *is* wearing a red dress to the party tonight.`
      ]
    },
    {
      id: 'yes-no',
      label: 'Yes or No',
      type: 'classifySentence',
      data: {
        title: 'Do the following sentences contain modal auxiliary verbs?',
        types: [
          {
            name: 'Yes',
            text: `Can you please help me?
Will you be able to finish the work by tomorrow?
You might regret doing this the next day.
He said I can use his mobile at any time.
Will you pick me up on Sunday also?`
          },
          {
            name: 'No',
            text: `My sister was able to read the alphabet when she was 18 months old.
Do not wash the car. The paint is still wet.
I am certain that they have left already.
I am sure he is over seventy.
It was not necessary to meet him but I met him.`
          }
        ]
      }
    },
    {
      id: 'modal',
      label: 'Modal Auxiliary Verbs',
      type: 'fillup',
      commonData: {
        noOptions: true,
        title:
          'Complete the following sentences using suitable modal auxiliary verbs.'
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

        `*May* you have a long life! Sweetheart.
Numair *could* speak two languages when he was eight.
You *should* watch Kriti's latest movies.
*Shall* we go on a long drive today?
You *might* want to try this recipe once you taste it.`,

        `*Will* you, please stop gossiping about Abdu.
He has lost your watch and he *dare* not to tell you.
I *used to* play cricket daily in the morning when I was ten.
Liya *may* go to the museum whenever she likes.
You *ought to* consult a Dentist.`
      ]
    },
    {
      id: 'mcq-modal-1',
      label: 'Choose the correct alternative',
      type: 'mcq',
      data: {
        title: 'Choose the correct alternative',
        questions: [
          {
            qText: 'I do not think I _____ be able to go.',
            options: `shall, should, can`
          },
          {
            qText: 'He ____ not pay unless he is compelled',
            options: `will, shall, dare`
          },
          {
            qText: 'You _____ be punctual.',
            options: `should, would, ought`
          },
          {
            qText: 'I wish you _____ tell me earlier.',
            options: `would, should, must `
          },
          {
            qText: '_____ I assist you?',
            options: `Shall, Will, Would`
          },
          {
            qText: '_____ you please help me with this?',
            options: `Would, Should, Shall`
          },
          {
            qText: 'You ______ to pay your debts.',
            options: `ought, should, must`
          },
          {
            qText: 'He said I ___ use his telephone at any time.',
            options: `might, could, can`
          },
          {
            qText: 'If you ______ see him, give him my regards',
            options: `should, would, shall`
          },
          {
            qText:
              'He ____ not ask for a raise, for the fear of losing his job.',
            options: `dare, need, would`
          }
        ]
      }
    },
    {
      label: 'Notes',
      type: 'passage',
      id: 'participle',
      data: {
        title: 'The Participles',
        text: [
          `# Participle
A participle is a word that is formed from a verb and takes the nature of both a verb and an adjective.`,
          {
            type: 'html',
            text: `Example - <b>Looking</b> at the snake, Maria screamed and sprang up out of his chair.`
          },
          `In this sentence, 'looking' is the present participle (look+ing) which qualifies the noun 'Maria.' Hence it acts like an adjective. It is formed from a verb and also denotes the action of looking. Hence it acts as a verb too.
1. Present Participle: It is formed by adding 'ing' to the original form of the main verb.
e.g. Knowing, following etc.
2. Perfect Participle: It shows that the action is complete, either at some time in the past or at present.
e.g.Having walked continuously, I am fully exhausted now.
Having lost his wallet, he had to ask others for help.
3. Past Participle: The third form of the verb is called a past participle.
e.g. Frozen, loaded etc.
Since the participle is a verb-adjective it must be attached to some noun or pronoun. It must always have a proper subject of reference.`
        ]
      }
    },
    {
      id: 'present-past',
      label: 'Present or Past',
      type: 'classifySentence',
      data: {
        title:
          'Classify the participle in the sentence as a present participle or past participle',
        types: [
          {
            name: 'Present',
            text: `*Being* fully satisfied, they did not want to eat anymore.
Reem felt quite ashamed on *getting* scolded by her favorite aunt.
*Deluding* yourself, you can be happy for a short period in your life.`
          },
          {
            name: 'Past',
            text: `Extremely *fascinated* by the view, Ram decided to settle there.
Jake has a habit of keeping her things well *organised* all the time.
Niki was highly *irritated* as Jake kept poking him.`
          }
        ]
      }
    },
    {
      id: 'fillup-participle',
      label: 'Fill in the blanks',
      type: 'fillup',
      commonData: {
        title:
          'Fill in the blanks in the following choosing the best alternative'
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

        `Everybody worships the *risisng (rise)*  idol Niki.
I saw the storm *approaching (approach)* .
The sun *having risen (rise)* , the birds began to chirp in joy.
*Hearing (Hear)*  a noise, I turned around.
*Placing (Place)*  the books on the table, Jake ran away.
*Considering (consider)*  the facts, he recieved scant justice.`,

        `A *broken (break)*  glass cannot hold water.
The rain came *pouring (pour)*  down.
*Hit (Hiting)*  by an arrow in the chest, the bird fell down dead.
*Having elected (elect)*  him President, the people gave him their loyal support.
*Having seen (See)*  the film once, I do not want to see it again.
*Having lost (Lose)*  my book, I reported the matter to the teacher.`,

        `*Seeing See)* the Principal, the students ran away. .
*Having worked (Work)*  hard, my sister got good marks.
*Starving (Starve)*  is better than *begging*(beg).
*Reaching (Reach)*  home, I asked my mother to make tea.`
      ]
    },
    {
      label: 'Notes',
      type: 'passage',
      id: 'gerund',
      data: {
        title: 'Gerund',
        text: [
          `A gerund is a word ending with 'ing' and has the force of a noun and a verb. It is also known as a verbal noun.`,
          {
            type: 'html',
            text: `<b>Example</b> - I learned <b>driving</b>.<br>
I like <b>watching</b> television.`
          }
        ]
      }
    },
    {
      type: 'selectWord',
      label: 'Identify Gerund',
      id: 'select-word-gerund',
      lockAfter: 1,
      commonData: {
        title: 'Identify the Gerunds from the following sentences.'
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
Have you postponed *going* to Delhi?`
      ]
    },
    {
      id: 'gerund-infinitive',
      label: 'Gerund or Infinitive',
      type: 'classifySentence',
      data: {
        title:
          'Classify the below sentences based on the use of Gerund or Infinitive.',
        types: [
          {
            name: 'Gerund',
            text: `Teach me speaking.
Advising is easier than practicing.
Reading is easier than writing.
Saving is earning.`
          },
          {
            name: 'Infinitive',
            text: ` Teach me to speak.
To advise is easier than to.
To read is easier than to write.
To save is to earn.`
          }
        ]
      }
    },
    {
      id: 'gerund-participle',
      label: 'Gerund or Participle',
      type: 'classifySentence',
      data: {
        title:
          'Classify the below sentences based on the use of Gerund or Participle.',
        types: [
          {
            name: 'Gerund',
            text: `She is tired of writing.
I was prevented from meeting Padma.
Respecting our parents is our duty.`
          },
          {
            name: 'Participle',
            text: ` Writing letters to her husband, she forgot everything.
Meeting Padma for the first time, I thought she was quite gullible.
Respecting my parents words, I never tried to slack again.`
          }
        ]
      }
    },
    {
      id: 'fill-up-gerund',
      label: 'Fill in the blanks',
      type: 'fillup',
      commonData: {
        title: `Fill in the blanks using gerunds.`
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
Have you postponed *going (to go)* to Delhi?`
      ]
    },
    {
      label: 'Correct or Incorrect',
      type: 'classifySentence',
      id: 'correct-incorrect-gerund',
      commonData: {
        title:
          'Classify the following sentences based on the correct usage of Gerunds.',
        types: ['Correct', 'Incorrect']
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
I was shocked at Rajiv Gandhi's being assassinated.`
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
Playing of chess is his passion.`
        ],
        [
          `I dislike cooking food and washing clothes.
The rapid reading of a book is useless.
Reading a book rapidly is useless.
He insisted on going there alone.`,

          `I dislike cooking food and the washing of clothes.
Rapid reading a book is useless.
He insisted to go there alone.`
        ],
        [
          `He prevented me from going here alone.
I dislike your going there.
The reading of a book rapidly is useless.`,

          `He prevented me to go there alone.
I dislike you going there.
Rapid reading of book useless`
        ],
        [
          `I do not mind Ram's attending the party.
He begged of me the favour of granting him leave.
The party was handicapped by one of their best players being ill.`,

          `I do not mind Ram attending the party.
He begged of my favour of granting him leave.
The party was handicapped by one's of their best players being ill.`
        ]
      ]
    },
    {
      label: 'Notes',
      type: 'passage',
      id: 'infinitive',
      data: {
        title: 'Infinitives',
        text: [
          `A gerund is a word ending with 'ing' and has the force of a noun and a verb. It is also known as a verbal noun. A word that is not limited by the person or number of the subject is known as an Infinitive. It is a kind of verb having certain features of a noun. So it is also treated as a verb-noun.
Infinitive = to + the base form of the verb, e.g., to sing, to dance, to run.`,
          {
            type: 'html',
            text: `<b>Example</b> - <b>To advise others</b> is easy.<br>
<b>To learn</b> English is difficult.`
          },
          `Infinitives don't have to stand alone. Infinitives can work with other words to form an infinitive phrase. To put it simply, infinitive phrases use additional words to modify or further describe the main infinitive.`,
          {
            type: 'html',
            text: `<b>Example</b> - My boss <b>told me to pay attention</b>, but I wasn't listening.<br>
I <b>need you to get me out of here</b>.`
          },
          `# Use of Infinitive 
1. As the subject of the a verb`,
          {
            type: 'html',
            text: `<b>Example</b> - <b>It is easy to advise</b> others.<br>
<b>To advise others</b> is easy.`
          },
          `2. As the object of a transitive verb`,
          {
            type: 'html',
            text: `<b>Example</b> - I wish <b>to become a poet</b>.`
          },
          `3. As the complement of a verb`,
          {
            type: 'html',
            text: `<b>Example</b> - Our greatest pleasure is ,b>to help the poor</b>.`
          },
          `4. As the object of a preposition`,
          {
            type: 'html',
            text: `<b>Example</b> - I had no choice <b>but to give up my hope</b>.`
          },
          `5. As an object complement`,
          {
            type: 'html',
            text: `<b>Example</b> - I noticed Madhavi <b>smile at me</b>.`
          },
          `6. To qualify a verb to express purpose`,
          {
            type: 'html',
            text: `<b>Example</b> - I read books <b>to increase my knowledge</b>.`
          },
          `7. To qualify an adjective`,
          {
            type: 'html',
            text: `<b>Example</b> - It is hard <b>to please Padma</b>. `
          },
          `8. To qualify a noun`,
          {
            type: 'html',
            text: `<b>Example</b> - It is not the time <b>to sleep</b>.`
          },
          `9. To qualify a sentence`,
          {
            type: 'html',
            text: `<b>Example</b> - <b>To tell the truth</b>, we have no problem with you.`
          },
          `Infinitives are of two types: bare infinitive and split infinitive. Bare Infinitives can be replaced by 'to' Infinitives.`,
          {
            type: 'html',
            text: `<b>Example</b> - I can <b>teach</b>. => I am <b>able to teach</b>.`
          },
          `It is generally treated wrong to split an Infinitive in the middle. The adverb can be used either before 'to' or after the Infinitive.`,
          {
            type: 'html',
            text: `I expect Madhavi to carefully read the letter. => <b>Incorrect</b><br>
I expect Madhavi to read the letter carefully.=> <b>Correct</b>`
          }
        ]
      }
    },
    {
      type: 'selectWord',
      label: 'Identify Infinitives',
      id: 'select-word-infinitive',
      lockAfter: 1,
      commonData: {
        title: 'Identify the Infinitives from the following sentences.',
        multiSelect: true
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
He *must return* the money.`
      ]
    },
    {
      label: 'Fill in the blanks',
      type: 'matchByDragDrop',
      id: 'drag-drop-infinitive',
      lockAfter: 1,
      commonData: {
        title: 'Fill in the blanks using the most suitable words.'
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

        `*To learn* a new language is on my bucket list.
I need *to buy* some groceries to make dinner tonight.
She decided *to take* a nap after finishing her homework.
It's important *to exercise* regularly for good health.
My goal is *to read* 50 books this year.`,

        `I would love *to travel* to Japan someday.
*To become* a doctor, one must attend medical school.
He promised *to call* his mother every week.
I'm trying *to save* money to buy a new car.
She loves *to sing* in the shower when no one is home.`
      ]
    },
    {
      label: 'Correct or Incorrect',
      type: 'classifySentence',
      id: 'correct-incorrect-infinitive',
      commonData: {
        title:
          'Classify the following sentences based on the correct usage of Infinitives.',
        types: ['Correct', 'Incorrect']
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
He did no more than to laugh.`
        ],
        [
          `I went there personally to see the situation.
I request you kindly to grant my application.
He helped me to progress and prosper.
It lies in my power to succeed or to fail.`,

          `I went there to personally see the situation.
I request you to kindly grant my application.
He helped me to progress and to prosper.
It lies in my power to succeed or fail.`
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
He has no paper to write.`
        ],
        [
          `I and my friends are planning to go to the beach next weekend.
          I want to lie down and take a nap.
          She needs to stop procrastinating and start studying. `,

          `Me and my friends are planning to went to the beach next weekend.
          I want to laid down and take a nap.
          She needs to stopped procrastinating and start studying. `
        ],
        [
          `He offered to give me a ride to the airport.
          They decided to go to the concert last minute.
          She wants to run a marathon next year. `,

          `He offered to gave me a ride to the airport.
          They decided to went to the concert last minute.
          She wants to ran a marathon next year. `
        ]
      ]
    },
    {
      id: 'mcq-infinitive',
      label: 'Multiple Choice Questions',
      type: 'mcq',
      commonData: {
        title: 'Multiple Choice Questions'
      },
      data: [
        {
          questions: [
            {
              qText:
                'Which of the following is the correct usage of infinitive?',
              options:
                'He knows how to read and write English, He knows to read and write English'
            },
            {
              qText:
                'Which of the following is the correct usage of infinitive?',
              options:
                'My father taught him how to drive a car, My father taught him to drive a car'
            },
            {
              qText:
                'Which of the following is the correct usage of infinitive?',
              options:
                'Rekha was punished for coming late, Rekha was punished to coming late'
            },
            {
              qText:
                'Which of the following is the correct usage of infinitive?',
              options:
                'The student was made to write an essay by me, The student was made by me to write an essay'
            },
            {
              qText:
                'Which of the following is the correct usage of infinitive?',
              options: 'I was let go by him, I was by him let go'
            }
          ]
        },
        {
          questions: [
            {
              qText:
                'Which of the following is the incorrect usage of infinitive?',
              options:
                'That way to behave is dangerous, That is a dangerous way to behave'
            },
            {
              qText:
                'Which of the following is the incorrect usage of infinitive?',
              options:
                'It is important to be patient for Jake to his little brother, It is important for Jake to be patient to his little brother'
            },
            {
              qText:
                'Which of the following is the incorrect usage of infinitive?',
              options:
                'To do this is the right thing, This is the right thing to do'
            },
            {
              qText:
                'Which of the following is the incorrect usage of infinitive?',
              options:
                'When to press the button tell me, Tell me when to press the button'
            },
            {
              qText:
                'Which of the following is the incorrect usage of infinitive?',
              options:
                'I request you to kindly grant my application, I request you kindly to grant my application.'
            }
          ]
        }
      ]
    }
  ]
};
