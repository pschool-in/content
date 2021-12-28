export default {
  id: 'pronoun-3',
  label: 'Possessive Pronoun',
  pdf: '',
  list: [
    {
      label: 'Notes',
      type: 'passage',
      id: 'notes',
      data: {
        title: 'Possessive Pronouns',
        text: [
          `These are used to indicate ownership or possession. 
          Eg: his, yours, hers, mine, ours, theirs`,
          {
            type: 'html',
            text: `This notebook is <b>mine</b>.<br>
The car is <b>hers</b>.<br>
That book is <b>yours</b>.<br>
This cat is <b>ours</b>.`
          }
        ]
      }
    },
    {
      label: 'Possessive Pronoun or Not',
      id: 'drag-and-drop',
      type: 'group',
      data: {
        title: 'Drag and drop the given words in the right boxes.',
        printTitle: 'Rewrite the words given at the bottom in the right boxes',
        types: [
          {
            name: 'possessive pronoun',
            text: 'His, Hers, Mine, Yours, Ours, Theirs'
          },
          {
            name: 'Not a possessive pronoun',
            text: 'He, She, Me, I, It, We, Us'
          }
        ]
      }
    },
    {
      label: 'Drag and Drop',
      type: 'matchByDragDrop',
      id: 'drag-and-drop-1',
      commonData: {
        isPractice: false,
        title: 'Choose the right possessive pronoun.',
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

        `I paid for this book, so it is *mine*.
Pick any of these chocolates, the choice is *yours*.
The cricket bat belongs to Ram. It is *his*.
We bought this music player together. So it is *ours*.
My cousins love cricket. These balls are *theirs*.`,

        `She bought a new bicycle. It is *hers* now.
That book is *mine*. He thought it was *his*.
We bought many toffees yesterday. All of them are *ours*.
That pen is not mine. It may be *yours*.
They go to the village in the car. It is *theirs*.`,

        `Varun kept his bag on the table. It is *his*.
Sheena likes games. That board is *hers*.
I bring lunch every day. That lunchbox is *mine*.
You forgot your pen. This is *yours*.
The children play cricket. This bat is *theirs*.`,

        `My car is bigger than *yours*.
This book is not yours. This is *mine*.
This dress belongs to my sister Priya. This dress is *hers*.
This skateboard belongs to my brother Jatin. This is *his*.
This bag belongs to me and my sister. This bag is *ours*.`
      ]
    },
    {
      label: 'True or False',
      id: 'yes-no',
      type: 'classifySentence',
      data: {
        title: 'True or False: The below sentences have possessive pronouns.',
        types: [
          {
            name: 'True',
            text: `This notebook is mine.
Those pens are hers.
That dress is yours.`
          },
          {
            name: 'False',
            text: `Those gloves belong to him.
Those pens belong to her.
That dress belongs to you.`
          }
        ]
      }
    },
    {
      id: 'fill-up',
      label: 'Fill in the blanks',
      type: 'fillup',
      commonData: {
        title: `Click on the blank and fill in the correct possessive pronoun.`,
        printTitle: `Fill up with the right pronoun.`
      },
      data: [
        `This is my laptop. It's *mine (me)*.
You have a new toy. It is *yours (us)*.
The water bottle belongs to her. It is *hers (mine)*.
He has a new phone. It is *his (her)*.
You have a cap. It is *yours (hers)*.
This was not my mistake. It was *yours (us)*.
My room is bigger than *yours (us)*.
Is this dress *hers (us)*?
I have a new watch. It is *mine (me)*.
We have new remote cars. They are *ours (yours)*.`,

        `Jack has a toy car. It is *his (her)*.
I have mittens. They are *mine (ours)*.
Sangamitra has a doll. It is *hers (ours)*.
Mannu and I have many dolls. They are *ours (yours)*.
Uncle and Aunt have a car. It is *theirs (mine)*.
This lunch box belongs to him. It is *his (hers)*.
Meera has boots. They are *hers (his)*.
Abhi has a diary. It is *his (yours)*.
My parents have a boat. It is *theirs (yours)*.
Pooja and Saanvi have a kitchen set. It is *theirs (us)*`
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
This dog is *ours*.
I own the bike. It is *mine*.
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
        title: 'Select all the pronouns present in the below text.',
        multiSelect: true
      },
      data: [
        `*She* tries to steal everyone's chocolates. *She* lies and says *they* are *hers*.
*Me* and my sister go swimming. *Those* swimming glasses are *ours*.
The book is kept on the table. *It* is *ours*.
*I* borrowed *this* paper from Vidya. *This* is *hers*.
Sheena gave me *this* napkin. *This* is *hers*.`,

        `Rahul is my best friend. *We* go to school together. *This* bag is *his*.
*I* like my mother's Kurti. *I* borrowed *this* for a party. *It* is *hers*.
*That* house is *theirs*. *It* is not in a good condition. *They* need to repair *it*.
*I* said to my friend, "What is *mine*, is *yours*. *He* was very happy to hear *this*.
My parents teach *me*, "What is rightfully *yours* will surely be *yours*.`
      ]
    }
  ]
};
