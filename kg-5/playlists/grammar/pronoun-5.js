export default {
  id: 'pronoun-5',
  label: 'Pronoun-5',
  pdf: '',
  list: [
    {
      label: 'Pronoun',
      type: 'passage',
      id: 'pronoun-reading',
      data: {
        title: 'Pronoun',
        text: `We know that pronouns are the words used to replace one or more nouns. Apart from Personal, Possessive, Demonstrative and reflexive pronouns, we have another type of pronoun called interrogative pronoun.
These are used to ask questions. The sentences with interrogative pronouns always end up with question marks. 

There are five different types of Interrogative pronouns:
1. What
2. Which
3. Who
4. Whom
5. Whose

Some examples of interrogative pronouns:
1. What is your name?
2. Which is your favourite food?
3. Who did this?
4. Whom did you meet yesterday?
5. Whose bike is this?`
      }
    },
    {
      label: 'Group',
      id: 'drag-and-drop',
      type: 'group',
      data: {
        title: 'Identify the interrogative pronoun and possessive pronoun',
        types: [
          {
            name: 'Interrogative pronoun',
            text: `What, who, whom, which, whose`
          },
          {
            name: 'Possessive pronoun',
            text: `his, her, mine, yours, ours`
          }
        ]
      }
    },
    {
      id: 'match',
      label: 'Match the following',
      type: 'match',
      data: {
        title:
          'Draw a line from the interrogative pronoun to complete the question.',
        fontSize: '1rem',
        text: `What, time is it?
        Who, did this?
        Whose, book is this?
        Which, car is yours?
        To whom, should I address this letter?`
      }
    },
    {
      id: 'fillup',
      label: 'Fill in the blanks',
      type: 'fillupOptions',
      data: {
        text: `*Why(what)* is the flight late?
          *Who(When)* left the door open?
          *Why(What)* are you sad?
          *What(Which)* is your brother's name?
          *Which(Whom)* car is yours?
          *Who(When)* is the new student in the class?
          *What(when)*do you like to wear tomorrow?
          *Which (What)* one of these burgers is made of meat?
          To *whom(who)* was the song dedicated?`,
        title:
          'Click on the blank and fill in the correct interrogative pronoun.'
      }
    },
    {
      type: 'classifySentence',
      label: 'Noun or Pronoun',
      id: 'identify-type',
      data: {
        title: 'Identify whether the underlined word is a noun or a pronoun.',
        types: [
          {
            name: 'Noun',
            text: `*Sita* runs fast.
              *Tigers* have stripes.
              These *flowers* are beautiful.
              Who likes *apples*?`
          },
          {
            name: 'Pronoun',
            text: `I learned French by *myself*.
              Can *I* have an ice cream?
              Will you help *me* with my homework.
              *We* will go shopping tomorrow.`
          }
        ]
      }
    },
    {
      id: 'classify-sentence',
      label: 'Identify',
      type: 'classifySentence',
      data: {
        title:
          'Identify whether the given sentence has a reflexive or possessive pronoun.',
        types: [
          {
            name: 'Reflexive pronoun',
            text: `I will do the job myself.
              She went to the park by herself.
              The dog hurt itself.
              Shaanvi sang quietly to herself.`
          },
          {
            name: 'Possessive pronoun',
            text: `This notebook is mine.
              That bike is theirs.
              Is this pencil yours?
              The lipstick is hers.`
          }
        ]
      }
    },
    {
      id: 'fillup-2',
      label: 'Fill in the blanks',
      type: 'fillupOptions',
      data: {
        text: `*Her(his)* name is Sita.
        *You (they)* are my best friend.
        This pen is *mine(theirs)*.
        *They(it)* are making a snowman.
        *He (they)* sings beautifully.
        I folded my clothes by *myself(themselves)*.
        *Who(what)* is the new teacher?
        *Which(who)* is your favourite food?`,
        title: 'Click on the blank and fill in the right pronoun.'
      }
    }
  ]
};
