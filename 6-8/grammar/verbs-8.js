export default {
  id: "verb-8",
  label: "Linking Verb",
  lockAfter: 3,
  list: [
    {
      label: "Notes",
      type: "passage",
      id: "passage",
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
Ben *is* the Vice Principal of a Girls High School.
The teacher *was* absent today.
My parents *were* tired after the long journey.
Kenny *seems to be* a great man.`,

        `All it took was one wrong word to make the situation *turn* ugly.
Based on the results of the experiment, her hypothesis *proved* true.
My daughter *acts* shy around strangers.
The dirty dog *smells* badly because his nose is clogged.
William,s mom *is* a doctor.`,
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
Ben *is* the Vice Principal of a Girls High School.
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
The dirty dog *smells* badly because his nose is clogged.
William's mom *is* a doctor.`,

        `Jessica *sings* in a rock band.
Dmitri *lives* in Russia.
The soup *tastes* delicious.
The king's brother *became* a monk.
The dirty dog *smells* bad.`,
      ],
    },
  ],
};
