export default {
    id: 'pronoun-3',
    label: 'Pronoun-3',
    pdf: '',
    list: [
    {
    label: 'Pronouns - Possessive',
    type: 'passage',
    id: 'pronouns-possessive-reading',
    data: {
    title: 'Pronouns - Possessive',
    text: `A pronoun that is used to indicate ownership or possession is called a possessive pronoun or in other words a possessive pronoun represents a noun and tells us who owns it. For example: his, yours, hers, mine, ours, theirs, etc.

Examples in sentences:

1. That is his car.
2. This notebook is mine.
3. The car is hers.
4. That book is yours.
5. This cat is ours.`
        }
      },
      {
        label: 'Group',
        id: 'drag-and-drop',
        type: 'group',
        data: {
          title:
            'Identify the possessive pronouns and not a possessive pronoun',
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

`My car is bigger than *yours*.
That book belongs to me. That book is *mine*.
This dress belongs to my sister Priya. This dress is *hers*.
This skate board belongs to my brother Jatin. This is *his*.
This bag belongs to me and my sister. This bag is *ours*.`
        ]
      },
      {
        label: 'Identify',
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
`It belongs to me. It is *mine(me)*. 
You have a new toy. It is *yours(us)*.
The water bottle belongs to her. It is *hers(mine)*.
He has a new phone. It is *his(her)*.
You have a cap. It is *yours(hers)*.`,

`Jack has a toy car. It is *his(her)*.
I have mittens. They are *mine(ours)*.
Sangamitra has a doll. It is *hers(ours)*.
Mannu and I have many dolls. They are *ours(yours)*.
Uncle and Aunt have a car. It is *theirs (mine)*.`,
        ]
      },
      {
        type: 'selectWord',
        label: 'Identify',
        id: 'select-word',
        commonData: {
        title: 'Select the possessive pronoun in the sentence.'
                      },
                      data: [
`My aunt Laksmi has a blue car. The blue car is *hers*.
Swati and I live in a big house. It is *ours*.
I am making a drawing. The drawing is *mine*.
I brought my violin. It is *mine*.
I own the bike. It is *mine*.`,
          
`Chandan has a small puppy. It is *his* puppy.
The house at the corner is *theirs*.
Are you sure this is *yours*?
Who owns this bat? Is it *yours*?
This dog is *ours*.`,
       ]
      }
    ]
  };
