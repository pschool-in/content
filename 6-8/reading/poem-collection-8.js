export default {
  label: 'Poems Collection',
  id: 'poems-collection',
  lockAfter: 2,
  list: [
    {
      id: 'ant',
      type: 'passage',
      label: `The Ant and the Cricket`,
      data: {
        title: `The Squirrel`,
        type: 'poem',
        text: `A silly young cricket, accustomed to sing
Through the warm, sunny months of gay summer and spring,
Began to complain when he found that, at home,
His cupboard was empty, and winter was come.

Not a crumb to be found
On the snow-covered ground;
Not a flower could he see,
Not a leaf on a tree.

“Oh! what will become,” says the cricket, “of me?”

At last by starvation and famine made bold,
All dripping with wet, and all trembling with cold,
Away he set off to a miserly ant,
To see if, to keep him alive, he would grant

Him shelter from rain,
And a mouthful of grain.
He wished only to borrow;
He'd repay it tomorrow;

If not, he must die of starvation and sorrow.

Says the ant to the
cricket, “I'm your servant
and friend,
But we ants never
borrow; we ants never
lend.
But tell me, dear cricket,
did you lay nothing by
When the weather was
warm?” Quoth the cricket,
“Not I!

My heart was so light
That I sang day and night,
For all nature looked gay.”
“You sang, Sir, you say?

Go then,” says the ant, “and dance the winter away.”

Thus ending, he hastily lifted the wicket,
And out of the door turned the poor little cricket.
Folks call this a fable. I'll warrant it true:
Some crickets have four legs, and some have two.`
      }
    },
    {
      label: 'Multiple Choice Questions',
      type: 'mcq',
      id: 'mcq-ant',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: `What does the cricket do when he finds out his cupboard is empty and winter has come?`,
            options: `He goes to see the ant for help
He goes to sleep and waits for spring
He complains to his friends and family`
          },
          {
            qText: `Why does the cricket go to see the ant?`,
            options: `To see if the ant can give him food and shelter
To sing a song for the ant
To play with the ant`
          },
          {
            qText: `How does the ant respond to the cricket's request?`,
            options: `The ant refuses to help the cricket
The ant suggests the cricket go to his family for help
The ant lends the cricket some food and shelter`
          },
          {
            qText: `Why does the ant refuse to help the cricket?`,
            options: `Because the cricket didn't save any food for the winter
Because the ant is too busy
Because the ant doesn't like the cricket's singing`
          },
          {
            qText: `What lesson can be learned from this fable?`,
            options: ` It's important to save for the future
It's important to sing and have fun all the time
It's important to borrow money from friends`
          }
        ]
      }
    }
  ]
};
