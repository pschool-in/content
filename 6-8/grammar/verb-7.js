export default {
  id: 'verb-7',
  label: 'Different Types of Verbs',
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
            text: `Eg: Lions <i>roar</i>. (<i>action</i>); Boys <i>fly</i> kites. (<i>action</i>); I <i>feel</i> sorry. (<i>feeling</i>); Ashoka was a <i>great</i> king. (<i>existence</i>)`
          },
          `Verbs are divided into two parts; Main Verbs and Helping Verbs.
Main verbs are also of two kinds:

1. Finite Verb: They change their forms according to the person and number of the subject and the tense also.`,
          {
            type: 'html',
            text: `Eg: He <i>reads</i>. I <i>read</i>.`
          },
          `2. Non-finite Verb: They do not change their forms according to the number, person or tense of the subject. The infinitives, gerunds and participles are called non-finite verbs.`,
          {
            type: 'html',
            text: `Eg: <i>To swim</i> in the ocean is my favorite activity. (<i>infinitive</i>)<br>
She enjoys <i>running</i> every morning before work. (<i>gerund</i>)`
          }
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
            options: `Finite verbs change their form while non-finite verbs do not.
Non-finite verbs change their form while finite verbs do not.
Finite verbs do not express actions while non-finite verbs do.
Non-finite verbs are used for singular subjects, while finite verbs are used for plural subjects.`
          },
          {
            qText: `What is the main verb in the following sentence: "She is studying for her exam."?`,
            options: `studying, for, her, is`
          },
          {
            qText: `What is the helping verb in the following sentence: "They have been waiting for an hour."?`,
            options: `have, been, waiting, for`
          }
        ]
      }
    },
    {
      id: 'helping-verb',
      label: 'Fillup: Helping Verbs',
      type: 'fillup',
      commonData: {
        title:
          'Fill in the blanks with the correct form of helping verbs (is/am/are).'
      },
      lockAfter: 1,
      data: [
        `Priya *is (am, are)* my sister.
I *am (are, is)* very interested in the new project.
We *are (is, am)* best friends.
Vishnu *is (am, are)* my friend since kindergarten.
*Are (Is, Am)* you happy here?
*Is (Am, Are)* this your book?
I *am (are, is)* going to meet my granny today.
*Are (Is, Am)* you aware of this poem written by William Shakespeare?
India *is (am, are)* a secular country.
The children *are (is, am)* studying for their exams.`,

        `The sky *is (am, are)* blue on a clear day.
You *are (is, am)* my best friend.
The flowers *are (is, am)* blooming in the garden.
I *am (are, is)* not sure what to wear to the party.
The children *are (is, am)* playing in the yard.
Niki *is (am, are)* very mischievous.
I *am (are, is)* feeling very sleepy.
The dog *is (am, are)* barking at a stranger.
The cats *are (is, am)* fighting for food.
*Are (Is, Am)* you sure what you said is true?`,

        `The children *are (am, is)* playing cricket.
Mahi *is (am, are)* going to the market.
The moon *is (am, are)* shining brightly.
Strong winds *are (am, is)* blowing.
I *am (is, are)* playing with toy trucks.
Richa *is (am, are)* drawing a landscape.
*Are (Am, Is)* you going somewhere?
Sunny *is (am, are)* mowing the lawn.
I *am (is, are)* doing my homework.
The ducks *are (am, is)* in the pond.`,

        `Tom and Saira *are (am, is)* enacting Romeo and Juliet on stage.
Thunder *is (am, are)* rumbling.
People *are (am, is)* jogging in the park nearby.
Mike *is (am, are)* coming back from New York.
I *am (is, are)* studying for a teaching eligibility exam.
I *am (is, are)* a student at the university.
She *is (am, are)* an accomplished musician and composer.
They *are (am, is)* planning a trip to Europe next summer.
He *is (am, are)* always early for his appointments.
We *are (am, is)* working on a new project at the office.`,

        `The weather *is (am, are)* beautiful today.
You *are (am, is)*doing a great job with your studies.
The book *is (am, are)* on the shelf next to the window.
They *are (am, is)* listening to music in the living room.
She *is (am, are)* wearing a red dress to the party tonight.
She *is (am, are)* studying for her exam.
I *am (are, is)* feeling tired after a long day at work.
They *are (is, am)* planning a trip to Europe.
He *is (am, are)* the CEO of the company.
We *are (is, am)* going to the park this afternoon.`
      ]
    },
    {
      id: 'has-have-had',
      label: 'Fillup: Has/Have/Had',
      type: 'fillup',
      commonData: {
        title: 'Fill in the blanks using has/have/had.'
      },
      lockAfter: 1,
      data: [
        `Beena *had (has, have)* a meeting yesterday.
Do you want to *have (has, had)* an ice cream?
The lion *has (have)* a big mane.
My parents *had (has, have)* gone to a party a few days back.
*Have (Has)* you seen Reem?
*Had (Has, Have)* he not moved to a new city he wouldn't be sick.
All the members of the committee *have (had)* arrived now.
*Have (Has)* you seen my new scooter?
Raj *had (has, have)* to go back home.
My sister *has (had)* her final exam tomorrow.`,

        `She *has (have)* a lot of experience in her field.
They *have (has)* been friends since childhood.
He *had (has, have)* breakfast before leaving for work.
We *have (has)* a meeting at 2 p.m. today.
The cat *has (have)* caught a mouse.
I *have (has)* never been to Paris before.
She *had (has, have)* a headache last night.
They *have (has)* lived in this city for five years.
He *has (have)* forgotten his password again.
We *had (has, have)* a great time at the party last weekend.`,

        `I *have (has)* a Husky.
They do not *have (has, had)* a bicycle.
We *have (has)* not visited the new park yet.
Lady Macbeth *had (have)* a lust for power.
Rita *had (have)* a seminar before.
Jake and Niki *had (has)* a fight yesterday.
Mike *had (has)* an injury, but now he's fine.
I *had (has)* rabbits when I was 8 years old.
Tina *has (had)* an ear infection and therefore she will not come to practice today.
India *has (had)* many states.`,

        `My dad *had (has)* a white coat that he used to wear always. But we lost it during the move.
The lion *has (had)* sharp claws to catch its prey.
Niya *had (has)* broken her leg a few months ago.
The children *had (has)* a lot of fun last night.
Her grandparents *had (has)* passed away a long time ago.
The company *has (had)* hired several new employees this month.
Our team *has (had)* won every game this season
She *had (has)* a headache yesterday and stayed home from work.
The train *had (has)* already left the station by the time we arrived.`,

        `He *had (has)* finished his homework before his friends came over.
The restaurant *had (has)* run out of their most popular dish by the time we got there.
She *had (has)* been studying French for three years before she moved to France.`
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
            text: `Eg: walk-walk<b>ed</b>-walk<b>ed</b><br>
dance-danc<b>ed</b>-danc<b>ed</b>`
          },
          `Irregular verbs form their past and past participle forms in different ways. There are mainly three types of irregular verbs.

1. Verbs in which all the three forms are the same.`,
          {
            type: 'html',
            text: `Eg: put-<i>put</i>-<i>put</i>`
          },
          `2. Verbs in which two of the three forms are the same.`,
          {
            type: 'html',
            text: `Eg: sit-<i>sat</i>-<i>sat</i>`
          },
          `3. Verbs in which all three forms are different.`,
          {
            type: 'html',
            text: `Eg: drink-<i>drank</i>-<i>drunk</i>`
          },
          `⇒ Some verbs can be both regular and irregular.`,
          {
            type: 'html',
            text: `Eg: Burn-burn<b>t</b>-burn<b>t</b> (<i>irregular</i>); Burn-burn<b>ed</b>-burn<b>ed</b> (<i>regular</i>)<br>
Dream-dream<b>t</b>-dream<b>t</b> (<i>irregular</i>); Dream-dream<b>ed</b>-dream<b>ed</b> (<i>regular</i>)`
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
            options: `burn, sit, put, drink`
          },
          {
            qText: `What is the past participle form of the irregular verb "dream" in the regular form?`,
            options: `Dreamed, Dreamt, Dreamed or dreamt`
          },
          {
            qText: `Which of the following is an example of an irregular verb that has the same base form, past tense, and past participle?`,
            options: `Run, Sing, Drink, Tell`
          },
          {
            qText: `Which of the following is a correct past tense form of the verb "ride"?`,
            options: `Ridden, rid, rided, riding`
          }
        ]
      }
    },
    {
      label: 'Puzzle: Simple Past',
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
Lay, Laid, Layed`,

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
      label: 'Puzzle: Past Participle',
      id: 'complete-past',
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
Buy, Bought, Brought
Fight, Fought, Fouht
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
      label: 'Fillup: Irregular Verb',
      type: 'fillup',
      commonData: {
        noOptions: true,
        title:
          'Find out the simple past form and the past participle form of the following irregular verbs.'
      },
      lockAfter: 1,
      data: [
        `Seek ⇒ *Sought* ⇒ Sought
Choose ⇒ Chose ⇒ *Chosen*
Think ⇒ *Thought* ⇒ Thought
Catch ⇒ Caught ⇒ *Caught*
Wear ⇒ *Wore* ⇒ Worn`,

        `Tear ⇒ Tore ⇒ *Torn*
Bear ⇒ *Bore* ⇒ Borne
Buy ⇒ Bought ⇒ *Bought*
Fight ⇒ *Fought* ⇒ Fought
Break ⇒ Broke ⇒ *Broken*`,

        `Speak ⇒ *Spoke* ⇒ Spoken
Take ⇒ Took ⇒ *Taken*
Shake ⇒ *Shook* ⇒ Shaken
Sink ⇒ Sank ⇒ *Sunk*
Drink ⇒ *Drank* ⇒ Drunk`,

        `Sing ⇒ Sang ⇒ *Sung*
Ride ⇒ *Rode* ⇒ Ridden
Write ⇒ Wrote ⇒ *Written*
Get ⇒ *Got* ⇒ Gotten
Strive ⇒ Strove ⇒ *Striven*`,

        `Give ⇒ *Gave* ⇒ Given
Arise ⇒ Arose ⇒ *Arisen*
Know ⇒ *Knew* ⇒ Known
Grow ⇒ Grew ⇒ *Grown*
Lay ⇒ *Laid* ⇒ Laid`,

        `Keep ⇒ Kept ⇒ *Kept*
Cut ⇒ *Cut* ⇒ Cut
Swing ⇒ Swung ⇒ *Swung*
Draw ⇒ *Drew* ⇒ Drawn
Rise ⇒ Rose ⇒ *Risen*`,

        `Forgive ⇒ *Forgave* ⇒ Forgiven
Forget ⇒ Forgot ⇒ *Forgotten*
Bite ⇒ *Bit* ⇒ Bitten
Hide ⇒ Hid ⇒ *Hidden*
Ring ⇒ *Rang* ⇒ Rung`,

        `Spring ⇒ Sprang ⇒ *Sprung*
Begin ⇒ *Began* ⇒ Begun
Mistake ⇒ Mistook ⇒ *Mistaken*
Wake ⇒ *Woke* ⇒ Woken
Steal ⇒ Stole ⇒ *Stolen*`,

        `Light ⇒ *Lit* ⇒ Lit
Bring ⇒ Brought ⇒ *Brought*
Teach ⇒ *Taught* ⇒ Taught
Put ⇒ Put ⇒ *Put*
Shut ⇒ *Shut* ⇒ Shut`
      ]
    },
    {
      id: 'irregular-verb-fillup',
      label: 'Fill in the blanks',
      type: 'matchByDragDrop',
      commonData: {
        title: 'Fill in the blanks with the appropriate tense form of the verb.'
      },
      lockAfter: 1,
      data: [
        `Our teacher said, "Please, do not *forget* to bring your workbook tomorrow." But Riya still *forgot* to bring her textbook the next day. I would have *forgotten* to bring it if Reem had not reminded me.
Why is no one opening the door? Did you *ring* the bell? Yes, I *rang* it several times but no one came to the door.`,

        `I asked my sister to wake me at 6 a.m. But she did not *wake* me. I *woke* up at 8 a.m. and missed my bus. If she had *woken* me up I would have reached the school on time.
I had cast my rod and was waiting for the fish to *bite* the bait. I reeled in the rod as soon as the fish *bit* on the bait. But in that short while the clever fish had already *bitten* off the bait from the hook and successfully escaped.`,

        `The teacher suddenly asked me to *speak* in the morning assembly. I started to panic but I managed to gather some courage and *spoke* about the "Ill effects of Technology" for five minutes. After I had *spoken*, my teacher called me aside and praised me for speaking well.
The coach instructed the players, "Don't *forget* to wear your team uniform for the game." However, John *forgot* to bring his jersey to the match. If it wasn't for his teammate, Jake, who lent him an extra uniform, he would not have been able to play.`,

        `Mr Koch, the mathematics teacher *gave* Albert the reference he *wanted*.
Albert *got* summoned to the head teacher's room. The headteacher told Albert that his work *was* terrible and he *would* be punished if he *continued* the same way. 
Albert was *tempted* to say a few words, then thought otherwise.`,

        `John loves to *swim* in the pool every day. Yesterday, he *swam* laps for an hour and felt *exhausted* afterward. He has also *swum* competitively in several tournaments in the past. *Swimming* is not only a hobby for him but also a form of exercise. He *enjoys* the present moment while swimming, cherishes the memories of the past races, and relishes the satisfaction of having swum well in the past competitions.`,

        `I *wake* up early every morning and start my day with a cup of coffee. Yesterday, I *woke* up late and rushed to catch the bus. Today, I have *woken* up feeling refreshed after a good night's sleep. I *eat* a healthy breakfast consisting of fruits and yogurt. Last week, I *ate* a delicious homemade biriyani for dinner. I have *eaten* at many different restaurants around the world.`,

        `I *go* to work by car, but sometimes I prefer to walk. Last month, I *went* on a vacation to the beach and had a great time. I have *gone* on many adventures throughout my life. I read books to relax in the evenings. Yesterday, I *read* a captivating novel until late at night. I *have read* hundreds of books in my lifetime.`
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
            text: `Eg: The teacher gave me a new notebook.`
          },
          `An intransitive verb is a verb that does not necessarily require an object to make sense of the action being performed by the subject in a sentence or context.`,
          {
            type: 'html',
            text: `Eg: The baby is sleeping.`
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
          },
          {
            qText: `Which of the following is an example of a transitive verb?`,
            options: `I wrote a letter, The cat meowed, The child slept, The flowers bloomed`
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
Mira *went (go)* to school yesterday.`,

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
      id: 'mcq-tr',
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
      label: 'Notes',
      type: 'passage',
      id: 'linking-verb',
      data: {
        title: 'Linking Verb',
        text: [
          `Linking verbs are verbs that don't show an action but rather describe the subject. While verbs like walk or jump represent an action, linking verbs like 'be' or 'seem' add more details to the subject, such as "he seems nice" or "she is an architect".
All basic forms of the 'be' verb can be used as linking verbs to qualify the state of being of the subject.
All forms of the verb 'seem' are used as linking verbs.
All forms of the verb 'become' are used as linking verbs.`
        ]
      }
    },
    {
      label: 'Multiple Choice Questions',
      type: 'mcq',
      id: 'mcq-linking',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: `Which of the following is a characteristic of linking verbs?`,
            options: `They add more details to the subject, They are always in the present tense, They are always followed by an object`
          },
          {
            qText: `Which of the following is an example of a linking verb?`,
            options: `They seem tired after the long journey, She ran a marathon, He cooked dinner for his family, The dog barked loudly`
          },
          {
            qText: `Which of the following verbs can be used as a linking verb?`,
            options: `to be, to jump, to sing, to eat`
          },
          {
            qText: `Which of the following verbs can be used as a linking verb?`,
            options: `to become, to dance, to run, to write`
          },
          {
            qText: `What is the purpose of using a linking verb in a sentence?`,
            options: `To add more details to the subject, To indicate the future tense, To indicate a negative statement, To show an action performed by the subject`
          }
        ]
      }
    },
    {
      type: 'selectWord',
      label: 'Identify: Linking Verb',
      id: 'select-word-2',
      lockAfter: 1,
      commonData: {
        title: 'Identify linking verbs from the following sentence.'
      },
      data: [
        `Neena *seems* to be very energetic today.
The dish *smells* delicious.
The dress you were wearing yesterday *looked* great on you.
Divya and Meera *remained* best friends even after all the fights they have had in the past.
The little boy *sounded* excited about the school trip.`,

        `Geetha *is* the new marketing manager
I *am* the class teacher of VII B.
Fathima and Hameeda *were* exhausted after cleaning every loft in the office.
This book on women and society *seems* to be interesting.
The tree *was* cut.`,

        `The child *looks* happy.
Your brother *sounds* really cool.
Ben *is* the Vice Principal of a Girl's High School.
The teacher *was* absent today.
My parents *were* tired after the long journey.`,

        `Kenny *seems* to be a great man.
Based on the results of the experiment, her hypothesis *proved* true.
My daughter *acts* shy around strangers.
William's mom *is* a doctor.
The house *appears* empty.`,

        `The flower *smells* lovely.
They *feel* tired. 
The cake *looks* delicious.
I *am* happy. 
The dog *seems* friendly. `
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
It *seems* as if it might rain any moment.  `,

        `Your brother *sounds* really cool.
Ben *is* the Vice Principal of a Girl's High School.
The teacher *was* absent today.
My parents *were* tired after the long journey.
Kenny *seems to be* a great man.`,

        `The dirty dog *smells* bad.
We *became* very scared after the bridge started to wobble.
If you ask me, the friendly man's offer *seems* suspicious.
The audience *grew* silent when the actors took the stage.
This mushy bread *tastes* terrible.`,

        `All it took was one wrong word to make the situation *turn* ugly.
Based on the results of the experiment, her hypothesis *proved* true.
My daughter *acts* shy around strangers.
The soda *tasted* like oranges. 
William's mom *is* a doctor.`,

        `Jessica *sings* in a rock band.
Dmitri *lives* in Russia.
The soup *tastes* delicious.
The king's brother *became* a monk.
My grandfather *was* a mischievous boy when he was my age.`
      ]
    },
    {
      label: 'Notes',
      type: 'passage',
      id: 'auxiliary-verb',
      data: {
        title: 'Auxiliary Verb',
        text: [
          `Auxiliary verbs have no meaning on their own. They are necessary because they help the main verb to form the grammatical structure of a sentence. The main functions of auxiliary verbs are to form questions, short answers, question tags and to avoid repetition.
Auxiliary verbs fall into three basic groups:
1. Primary or Main Auxiliary verbs: The primary auxiliary verbs are called so because they are the most used in forming tenses, negatives and questions. `,
          {
            type: 'html',
            text: `These are forms of the verbs <i>be</i>, <i>have</i> and <i>do</i>.`
          },
          `2. Modals or Modal auxiliary verbs: Modal auxiliary verbs are also helping verbs. They are used before main verbs to express a range of meanings such as ability, possibility, certainty, suggestion, permission, obligation and so on. In almost all cases, the modal verb does not change according to the subject of the sentence. This means that the modal verb need not agree with the subject in number and person.`,
          {
            type: 'html',
            text: `Examples include <i>can</i>, <i>could</i>, <i>may</i>, <i>might</i>, <i>shall</i>, <i>should</i>, <i>will</i>, <i>would</i>, <i>must</i>, etc.`
          },
          `3. Other Auxiliary verbs with the characteristics of Modals: Some words do not always behave as modals. Such phrases are called semi-modals.`,
          {
            type: 'html',
            text: `Examples include <i>be about to</i>, <i>be able to</i>, <i>be likely to</i>, <i>had better</i>, <i>have to</i>, <i>ought to<i>, <i>used to</i>, <i>need to</i>, <i>dare</i> and <i>would rather</i>.`
          }
        ]
      }
    },
    {
      label: 'Multiple Choice Questions',
      type: 'mcq',
      id: 'mcq-aux',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: `What is the main function of auxiliary verbs?`,
            options: `To form the grammatical structure of a sentence, To provide meaning to the main verb, To indicate an action or state of being`
          },
          {
            qText: `Which group of auxiliary verbs are the most used in forming tenses, negatives, and questions?`,
            options: `Primary or main auxiliary verbs, Modals or modal auxiliary verbs, Other auxiliary verbs with the characteristics of modals, All of the above`
          },
          {
            qText: `Which of the following is an example of a modal auxiliary verb?`,
            options: `might, be about to, have to`
          },
          {
            qText: `What is a semi-modal?`,
            options: `A word that sometimes behaves as a modal, A type of verb that indicates an action or state of being, A type of noun that names a person, place, or thing`
          },
          {
            qText: `Which of the following is NOT a modal auxiliary verb?`,
            options: `be, must, can, will`
          }
        ]
      }
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
      label: 'Fillup: Modal Auxiliary Verbs',
      type: 'matchByDragDrop',
      commonData: {
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
He has lost your watch and he *dares* not to tell you.
I *used to* play cricket daily when I was ten.
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
            qText: 'He ____ not pay unless he is compelled.',
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
            qText: 'If you ______ see him, give him my regards.',
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
      id: 'modal-2',
      label: 'Complete: Paragraph',
      type: 'matchByDragDrop',
      commonData: {
        title: 'Complete the paragraph using suitable modal auxiliary verbs.'
      },
      lockAfter: 2,
      data: [
        `I *could* have gone to the party last night, but I decided to stay home and study instead. I *should* have finished my assignment by now, but I procrastinated and *will* have to work on it tomorrow. I *might* go for a run in the morning if the weather is nice. I *must* remember to buy groceries on my way back from work. I *would* love to visit Paris someday and experience its rich culture. `,

        `I *should* have studied harder for the exam, but I *might* have underestimated the difficulty level. Now, I *must* accept the consequences and strive to improve in the future. I *will* dedicate more time and effort to my studies so that I *can* achieve better results.`,

        `I *should* have completed my assignment yesterday, but I *couldn't* find the necessary resources. Now, I *must* work extra hard to finish it by tomorrow. I *might* ask my teacher for an extension, but I *ought to* have a valid reason. If I *can't* get an extension, I *will* definitely have to prioritize my time and stay focused to meet the deadline.`,

        `I *should* go to the gym today to work on my fitness goals. I *must* admit, I *haven't* been very active lately, so it's important for me to make an effort. I *could* also consider joining a fitness class or hiring a personal trainer for extra motivation. By incorporating regular exercise into my routine, I *will* be able to improve my overall health and feel more energized. Taking these steps will help me achieve my fitness objectives and lead a healthier lifestyle.`,

        `Sarah *should* study for her upcoming exam. She *must* review all the key concepts and practice solving sample questions. She *could* ask her classmates for help if she doesn't understand something. Sarah *ought to* prioritize her studies and avoid distractions. She *might* need to sacrifice some leisure time to ensure she is fully prepared. By using effective study strategies, Sarah *can* increase her chances of success in the exam.`,

        `I *should* wake up early tomorrow to catch my flight. I *must* pack my bags tonight and make sure I *have* all the necessary documents. I *might* need to call a taxi in the morning if there's no public transportation available. I *could* also ask a friend to give me a ride to the airport. I *will* definitely double-check the departure time before leaving the house. I *can't* afford to miss my flight.`,

        `Tom *should* visit the doctor tomorrow to get his persistent cough checked out. He *might* be coming down with something more serious, so it's important for him to get a professional opinion. If necessary, the doctor *can* prescribe medication to help alleviate his symptoms. Tom *must* take care of his health and not ignore any warning signs.`,

        `I *have* been moving across the globe; however, I feel I *may* not be doing so in the coming days. Recently I acquired a new office position that *would* demand most of my time. I *shall*, however, delegate most of my works. After a year or so, I *will* think of continuing with my travel business since I *might* have covered most of the work that I *need to* cover at the moment.`,

        `Covid-19 *ought to* have been halted in its path at the end of November 2019 when it may have first appeared but the first reported case was in December 2019, to the WHO by Chinese authorities. Covid-19 *may* be the most destructive virus to surface since the Spanish flu of 1918. From my research the Covid-19 virus *must* have first cross-contaminated from animals to humans in a popular and busy chinese meat market. It *could* be an advanced version of influenza.`
      ]
    }
  ]
};
