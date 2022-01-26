export default {
  id: 'proverb',
  label: 'Proverb',
  pdf: '',
  list: [
    {
      label: 'Notes',
      type: 'passage',
      id: 'proverbs-reading',
      data: {
        title: 'Proverbs',
        text: [
          `A proverb is a small saying that is generally used in a conversation to convey a general truth. It can be about a person or a situation. They are mostly used by adults in daily conversations. 
Below are a few commonly used proverbs:
# Collection-1
All that glitters is not gold.
Better late than never.
First come first served.
Honesty is the best policy.
Look before you leap.
He who hesitates is lost.
Fortune favors the brave.
A pen is mightier than a sword.
A penny saved is a penny earned.
Don't judge a book by its cover.
A bird in hand is worth two in the bush.
Where there is will there is a way.
The grass is always greener on the other side.
If you play with fire you get burned.
Practice makes a man perfect.
# Collection-2
The early bird gets the worm.
Let sleeping dogs lie.
Curiosity killed the cat.
Out of sight, out of mind.
Birds of a feather flock together.
Don't put the cart before the horse.
Necessity is the mother of invention.
Blood is thicker than water. 
Don't bite the hand that feeds.
No smoke without fire.
Actions speak louder than words.
Don't blow your own trumpet.
A friend in need is a friend indeed.
A journey of a thousand miles begins with a single step.
Two wrongs don't make a right.
# Collection-3
A watched pot never boils.
People who live in glass houses should not throw stones.
Don't count your chickens before they hatch.
Too many cooks spoil the broth.
Beggars can't be choosers.
All good things must come to an end.
When it rains it pours.
Make hay while the sun shines.
Hope for the best, prepare for the worst.
When the going gets tough, the tough gets going.
# Collection-4
You can lead a horse to water, but you can't make it drink.
A single swallow cannot make a summer.
Don't put all your eggs in one basket.
Every cloud has a silver lining.
It's no use crying over spilled milk.
When in Rome, do as Romans do.
It's no use crying over the spilled milk. 
Still water runs deep.
All's well that ends well.
All is fair in love and war.
Let bygones be bygones.`
        ]
      }
    },
    {
      id: 'match',
      label: 'Match the following',
      type: 'match',
      commonData: {
        title: 'Match the beginning of the proverb with the correct ending'
      },
      data: [
        `First come, first serve
All's well, that ends well
All is fair, in love and war
Let bygones, be bygones
Better late, than never`,

        `Like father, like son 
Let sleeping dogs, lie 
Curiosity killed, the cat
Out of sight, out of mind
Honesty is, the best policy`,

        `Look before, you leap
He who hesitates, is lost
Fortune favors, the brave
A pen, is mightier than a sword
A penny saved, is a penny earned`
      ]
    },
    {
      label: 'Complete the proverbs',
      type: 'matchByDragDrop',
      id: 'drag-and-drop',
      commonData: {
        isPractice: false,
        title:
          'Drag and drop the words at correct places to make a complete proverb',
        styles: {
          fontSize: '1rem',
          dashWidth: 80
        }
      },
      data: [
        `A watched pot never *boils*.
Birds of a *feather* flock together.
Don't put the cart before the *horse*.
The *pen* is mightier than the sword.
People who live in *glass* houses should not throw stones.`,

        `Don't judge a *book* by its cover.
If you play with *fire* you get burned.
*Practice* makes a man perfect.
The early bird gets the *worm*.
He who hesitates is *lost*.`,

        `The grass is always *greener* on the other side.
A *journey* of a thousand miles begins with a single step.
Keep your friends close and your *enemies* closer.
When in *Rome*, do as the Romans do.
Don't count your *chickens* before they hatch.`,

        `An apple a day keeps the *doctor* away.
Necessity is the *mother* of invention.
Blood is thicker than *water*. 
Don't bite the *hand* that feeds.
No smoke without *fire*.`,

        `Too many cooks spoil the *broth*.
*Beggars* can't be choosers.
A bird in hand is worth two in the *bush*.
All *good things* must come to an end.
Where there is *will* there is a way.`,

        `When it rains it *pours*.
Actions speak louder than *words*.
Don't blow your own *trumpet*.
A friend in need is a friend *indeed*.`,

        `Make hay while the sun *shines*.
Hope for the *best*, prepare for the worst.
Two wrongs don't make a *right*.
When the going gets *tough*, the tough gets going.
All that glitters is not *gold*.`,

        `A single swallow cannot make a *summer*.
Don't put all your eggs in one *basket*.
Every cloud has a *silver* lining.
It's no use crying over spilled *milk*.
You can lead a horse to water, but you can't make it *drink*.`
      ]
    },
    {
      type: 'sequence',
      label: 'Find the Sentence',
      id: 'find-sentence',
      lockAfter: 2,
      commonData: {
        printTitle: 'Rewrite the words and identify the proverb.'
      },
      data: [
        `better late than never
first come first served
honesty is the best policy
look before you leap
he who hesitates is lost
fortune favors the brave
A pen is mightier than a sword
practice makes a man perfect
the early bird gets the worm.
let sleeping dogs lie`,

        `curiosity killed the cat
blood is thicker than water
no smoke without fire
actions speak louder than words
don't blow your own trumpet
two wrongs don't make a right
a watched pot never boils.
too many cooks spoil the broth
beggars can't be choosers
when it rains it pours`,

        `make hay while the sun shines
every cloud has a silver lining
still water runs deep
all's well that ends well
let bygones be bygones`
      ]
    },
    {
      label: 'Notes: Quotes vs Proverb',
      type: 'passage',
      id: 'notes-2',
      data: {
        title: 'Quotes vs Proverb',
        text: [
          `Sometimes proverbs are confused with quotes. Proverbs usually have an indirect reference. For example, when we say 'look before you leap', it doesn't really mean that we should be careful while jumping. It means, we should consider the consequences before doing anything.
On the other hand, quotes usually have a direct meaning. eg:
1. An apple a day keeps the doctor away.
2. Laughter is the best medicine.
3. There's no place like home.
4. The best things in life are free.`
        ]
      }
    }
  ]
};
