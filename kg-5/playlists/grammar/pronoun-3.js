export default {
  id: 'pronoun-3',
  label: 'Pronoun-3',
  pdf: '',
  list: [
    {
      label: 'Possessive Pronouns',
      type: 'passage',
      id: 'possessive-pronouns-reading',
      data: {
        title: 'Pronouns - Possessive',
        text: `A pronoun that is used to indicate ownership or possession is called a possessive pronoun. In other words a possessive pronoun represents a noun and tells us who owns it. For example: his, yours, hers, mine, ours, theirs, etc.
Examples in sentences:
1. That is his car.
2. This notebook is mine.
3. The car is hers.
4. That book is yours.
5. This cat is ours.`
      }
    },
    {
      label: 'Group the words',
      id: 'drag-and-drop',
      type: 'group',
      data: {
        title: 'Identify the possessive pronouns and not a possessive pronoun',
        types: [
          {
            name: 'possessive pronoun',
            text: 'his, hers, mine, yours, ours, theirs'
          },
          {
            name: 'Not a possessive pronoun',
            text: 'he, she, me, I, it, we, us'
          }
        ]
      }
    },
    {
      label: 'Addition of possessive pronoun',
      type: 'matchByDragDrop',
      id: 'drag-and-drop-1',
      commonData: {
        isPractice: false,
        title: 'Choose the right possessive pronoun to complete the sentence.',
        styles: {
          fontSize: '1rem',
          dashWidth: 80
        }
      },
      data: [
        `I have a new crayon box. It is *mine*. 
She has a new dog. It is *hers*.
Is this pencil *yours*?
My car is bigger than *his*.
This house is *ours*.`,

        `I paid for my book, so it is *mine*.
Pick any of these chocolates, the choice is *yours*.
The cricket bat belongs to Ram. It is *his*.
We bought this music player together. So it is *ours*.
All my cousins love criket. Playing cricket is a favourite passtime of *theirs*.`,

        `She bought a new bicycle. It is *hers* now.
That book is *mine*. He thought is was *his*.
We bought many new balls yesterday. All of them are *ours*.
That pen is not mine. It may be *yours*.
They go to the village in the car. It is *theirs*.`,

        `Varun kept his bag on the table. It is *his*.
Sheena likes games. That board is *hers*.
I bring lunch everyday. That lunchbox is *mine*.
You forgot your pen. This is *yours*.
The children play cricket. This bat is *theirs*.`,

        `My car is bigger than *yours*.
This book is not yours. This is *mine*.
This dress belongs to my sister Priya. This dress is *hers*.
This skate board belongs to my brother Jatin. This is *his*.
This bag belongs to me and my sister. This bag is *ours*.`
      ]
    },
    {
      label: 'Classify - possessive pronoun',
      id: 'yes-no',
      type: 'classifySentence',
      data: {
        title: 'Identify whether the sentence has a possessive pronoun or not.',
        types: [
          {
            name: 'Yes',
            text: `This notebook is mine.
              Those pens are hers.
              Those dressess are yours.`
          },
          {
            name: 'No',
            text: `Those gloves belong to him.
              Those pens belong to her. 
              Those dresses belong to you.`
          }
        ]
      }
    },
    {
      id: 'fill-up',
      label: 'Fill in the blanks',
      type: 'fillup',
      commonData: {
        title: `Click on the blank and fill in the correct possessive pronoun.`
      },
      data: [
        `This is my laptop. It's *mine(me)*. 
You have a new toy. It is *yours(us)*.
The water bottle belongs to her. It is *hers(mine)*.
He has a new phone. It is *his(her)*.
You have a cap. It is *yours(hers)*.
This was not my mistake. It was *yours (us)*.
My room is bigger than *yours (us)*.
Is this dress *hers (us)*?
I have a new watch. It is *mine (me)*.
We have new remote cars. They are *ours (yours)*.`,

        `Jack has a toy car. It is *his(her)*.
I have mittens. They are *mine(ours)*.
Sangamitra has a doll. It is *hers(ours)*.
Mannu and I have many dolls. They are *ours(yours)*.
Uncle and Aunt have a car. It is *theirs (mine)*.
This lunch box belongs to him. It is *his (hers)*.
Meera has boots. They are *hers (his)*.
Abhi has a diary. It is *his (yours)*.
My parents have a boat. It is *theirs (yours)*.
Pooja and saanvi have a kitchen set. It is *theirs (us)*.`
      ]
    },
    {
      type: 'selectWord',
      label: 'Identify - Possessive pronoun',
      id: 'select-word',
      commonData: {
        title: 'Select the possessive pronoun in the sentence.'
      },
      data: [
        `My aunt Laksmi has a blue car. The blue car is *hers*.
Swati and I live in a big house. It is *ours*.
I am making a drawing. The drawing is *mine*.
I brought my violin. It is *mine*.
I own the bike. It is *mine*.
This dog is *ours*.
Is this box *yours*?
This farm is *ours*.
The cricket bat is *mine*.
Look at *his* hat! It is so huge.`,

        `Chandan has a small puppy. It is *his* puppy.
The house at the corner is *theirs*.
Are you sure this is *yours*?
Who owns this bat? Is it *yours*?
This dog is *ours*.
These pens are *mine*. 
Is this blue coat *yours*?
The purse belongs to Meera. It is *hers*.
That headphone is *mine*.
This bangle is *hers*.`
      ]
    },
    {
      type: 'selectWord',
      label: 'Identify the pronouns',
      id: 'select-multi-pronoun',
      commonData: {
        title:
          'Tap on all the personal, demonstrative and possessive pronouns.',
        multiSelect: true
      },
      data: [
        `*She* tries to steal everyone's chocolates. *She* lies and says *they* are *hers*.
*Me* and my sister go to swimming. *Those* swimming glasses are *ours*.
The book is kept on the table. *It* is *ours*.
*I* borrowed *this* paper from Vidya. *This* is hers.
Sheena gave me *this* napkin. *This* is *hers*.`,

        `Rahul is my best friend. *We* go to school together. *This* bag is *his*.
*I* like my mother's kurti. *I* borrowed *this* for a party. *It* is *hers*.
*That* house is *theirs*. *It* is not in a good condition. *They* need to repair *it*.
*I* said to my friend, "What is *mine*, is *yours*. *He* was very happy to hear *this*.
My parents teach *me*, "What is rightfully *yours* will surely be *yours*.`
      ]
    }
  ]
};
