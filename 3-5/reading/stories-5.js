export default {
  label: 'Bedtime Stories',
  id: 'stories-5',
  pdf: 'stories.pdf',
  lockAfter: 3,
  list: [
    {
      id: 'kid',
      type: 'passage',
      label: 'The Wolf, the Kid, and the Goat',
      style: 'big',
      data: {
        title: 'The Wolf, the Kid, and the Goat',
        text: `Mother Goat was going to market one morning to get provisions for her household, which consisted of but one little Kid and herself.
"Take good care of the house, my son," she said to the Kid, as she carefully latched the door. "Do not let anyone in, unless he gives you this password: 'Down with the Wolf and all his race!'"
Strangely enough, a Wolf was lurking near and heard what the Goat had said. So, as soon as Mother Goat was out of sight, up he trotted to the door and knocked.
"Down with the Wolf and all his race," said the Wolf softly.
It was the right password, but when the Kid peeped through a crack in the door and saw the shadowy figure outside, he did not feel at all easy.
"Show me a white paw," he said, "or I won't let you in."
A white paw, of course, is a feature few Wolves can show, and so Master Wolf had to go away as hungry as he had come.
"You can never be too sure," said the Kid, when he saw the Wolf making off to the woods.`,
        moral: 'Moral: Two sureties are better than one.'
      }
    },
    {
      id: 'mcq-kid',
      label: 'Multiple Choice Questions',
      type: 'mcq',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: 'What was the purpose of Mother Goat going to the market?',
            options: `To buy provisions for her household
To visit her neighbors
To meet a friend
To sell her goods`
          },
          {
            qText: 'What was the password given by Mother Goat to her Kid?',
            options: `"Down with the Wolf and all his race!"
"Beware of strangers"
"Let no one enter"`
          },
          {
            qText: 'How did the Wolf know the password?',
            options: ` He overheard Mother Goat telling it to her Kid.
He guessed it correctly.
He saw it written on the door.`
          },
          {
            qText:
              'What did the Kid ask the Wolf to show before letting him in?',
            options: 'A white paw, A golden coin, A secret sign, A red hat'
          },
          {
            qText: 'Why did the Kid ask for a white paw?',
            options: `To check if the visitor was a wolf
To test the visitor's loyalty
To identify a friendly animal
To verify the visitor's identity`
          },
          {
            qText: 'What did the Kid say when he saw the Wolf leaving?',
            options: `"You can never be too sure."
"Come back, I made a mistake."
"Next time, show a white paw."
"I knew you were a wolf."`
          }
        ]
      }
    },
    {
      id: 'order-kid',
      label: 'Order the sentences',
      type: 'sorting',
      data: {
        title: 'Order the sentences based on the story.',
        text: `Mother Goat told not to let anyone in unless they give you a password.
The wolf overheard the password and used it.
The kid asked him to show a white paw.
The wolf went back hungry.
The kid said that you can never be too sure.`
      }
    },
    {
      id: 'cat',
      type: 'passage',
      label: 'The Cat and the Old Rat',
      style: 'big',
      data: {
        title: 'The Cat and the Old Rat',
        text: `There was once a Cat who was so watchful, that a Mouse hardly dared show the tip of his whiskers for fear of being eaten alive. That Cat seemed to be everywhere at once with his claws all ready for a pounce. At last the Mice kept so closely to their dens, that the Cat saw he would have to use his wits well to catch one. So one day he climbed up on a shelf and hung from it, head downward, as if he were dead, holding himself up by clinging to some ropes with one paw.
When the Mice peeped out and saw him in that position, they thought he had been hung up there in punishment for some misdeed. Very timidly at first they stuck out their heads and sniffed about carefully. But as nothing stirred, all trooped joyfully out to celebrate the death of the Cat.
Just then the Cat let go his hold, and before the Mice recovered from their surprise, he had made an end of three or four.
Now the Mice kept more strictly at home than ever. But the Cat, who was still hungry for Mice, knew more tricks than one. Rolling himself in flour until he was covered completely, he lay down in the flour bin, with one eye open for the Mice.
Sure enough, the Mice soon began to come out. To the Cat it was almost as if he already had a plump young Mouse under his claws, when an old Rat, who had had much experience with Cats and traps, and had even lost a part of his tail to pay for it, sat up at a safe distance from a hole in the wall where he lived.
"Take care!" he cried. "That may be a heap of meal, but it looks to me very much like the Cat. Whatever it is, it is wisest to keep at a safe distance."`,
        moral: 'Moral: The wise do not let themselves be tricked a second time.'
      }
    },
    {
      id: 'mcq-cat',
      label: 'Multiple Choice Questions',
      type: 'mcq',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: 'Why did the Mice fear the Cat?',
            options: `*The Cat was known for being watchful.
The Cat had sharp claws.
*The Cat had a reputation for eating Mice.`
          },
          {
            qText:
              'How did the Cat trick the Mice into coming out of their dens?',
            options: `By pretending to be dead.
By hiding in a flour bin.
By making loud noises.`
          },
          {
            qText: 'What happened when the Mice thought the Cat was dead?',
            options: `*They celebrated his death.
They cautiously came out of their dens.
*The Cat pounced on them and caught a few.`
          },
          {
            qText: 'How did the Cat deceive the Mice a second time?',
            options: `By rolling in flour.
By imitating a Rat.
By climbing up on a shelf.`
          },
          {
            qText: `Who warned the Mice about the Cat's trickery?`,
            options: 'An old Rat, Another Cat, A wise Owl'
          }
        ]
      }
    },
    {
      id: 'order-cat',
      label: 'Order the sentences',
      type: 'sorting',
      data: {
        title: 'Order the sentences based on the story.',
        text: `Cat pretended to be dead.
Mice started celebrating.
Cat pounced on them.
The cat hid in the flour bin.
The wise old rat warned them of the danger.`
      }
    },
    {
      id: 'lion',
      type: 'passage',
      label: 'The Shepherd and the Lion',
      style: 'big',
      data: {
        title: 'The Shepherd and the Lion',
        text: `A Shepherd, counting his Sheep one day, discovered that a number of them were missing.
Much irritated, he very loudly and boastfully declared that he would catch the thief and punish him as he deserved. The Shepherd suspected a Wolf of the deed and so set out toward a rocky region among the hills, where there were caves infested by Wolves. But before starting out he made a vow to Jupiter that if he would help him find the thief he would offer a fat Calf as a sacrifice.
The Shepherd searched a long time without finding any Wolves, but just as he was passing near a large cave on the mountain side, a huge Lion stalked out, carrying a Sheep. In great terror the Shepherd fell on his knees.
"Alas, O Jupiter, man does not know what he asks! To find the thief I offered to sacrifice a fat Calf. Now I promise you a full-grown Bull, if you but make the thief go away!"`,
        moral: `Moral: We are often not so eager for what we seek, after we have found it.
Do not foolishly ask for things that would bring ruin if they were granted.`
      }
    },
    {
      id: 'mcq-lion',
      label: 'Multiple Choice Questions - MCQ',
      type: 'mcq',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: 'Who did the Shepherd suspect of stealing his sheep?',
            options: 'A Wolf, A Lion, A thief'
          },
          {
            qText: 'Where did the Shepherd go to search for the thief?',
            options: 'The rocky region among the hills, The village, The forest'
          },
          {
            qText:
              'Whom did the Shepherd make a vow to before starting his search?',
            options: 'Jupiter, Apollo, Hermes, Zeus'
          },
          {
            qText:
              'What did the Shepherd promise to sacrifice if Jupiter helped him find the thief?',
            options: `A fat Calf, A full-grown Bull, A Lamb, A Goat`
          },
          {
            qText:
              'How did the Shepherd react when he saw the Lion carrying a Sheep?',
            options: `He fell on his knees in great terror.
He called for help from other shepherds.
He ran away in fear.`
          }
        ]
      }
    },
    {
      id: 'order-lion',
      label: 'Order the sentences',
      type: 'sorting',
      data: {
        title: 'Order the sentences based on the story.',
        text: `Shepherd realized some of his sheep were missing.
The shepherd suspected a wolf of the deed.
He made a vow to Jupiter to offer a fat calf as a sacrifice.
The shepherd found out that the thief was a lion.
The shepherd promised to offer a full-grown bull to make the lion go away.`
      }
    },
    {
      id: 'lark',
      type: 'passage',
      label: 'The Lark and Her Young Ones',
      style: 'big',
      data: {
        title: 'The Lark and Her Young Ones',
        text: `A Lark made her nest in a field of young wheat. As the days passed, the wheat stalks grew tall and the young birds, too, grew in strength. Then one day, when the ripe golden grain waved in the breeze, the Farmer and his son came into the field.
"This wheat is now ready for reaping," said the Farmer. "We must call in our neighbors and friends to help us harvest it."
The young Larks in their nest close by were much frightened, for they knew they would be in great danger if they did not leave the nest before the reapers came. When the Mother Lark returned with food for them, they told her what they had heard.
"Do not be frightened, children," said the Mother Lark. "If the Farmer said he would call in his neighbors and friends to help him do his work, this -wheat will not be reaped for a while yet."
A few days later, the wheat was so ripe, that when the wind shook the stalks, a hail of wheat grains came rustling down on the young Larks' heads.
"If this wheat is not harvested at once," said the Farmer, "we shall lose half the crop. We cannot wait any longer for help from our friends. Tomorrow we must set to work, ourselves."
When the young Larks told their mother what they had heard that day, she said:
"Then we must be off at once. When a man decides to do his own work and not depend on any one else, then you may be sure there will be no more delay."
There was much fluttering and trying out of wings that afternoon, and at sunrise next day, when the Farmer and his son cut down the grain, they found an empty nest.`,
        moral: 'Moral: Self-help is the best help.'
      }
    },
    {
      id: 'mcq-lark',
      label: 'Multiple Choice Questions',
      type: 'mcq',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: 'What did the Lark make her nest in?',
            options: `A field of young wheat
A tree branch
A meadow of wildflowers
A rocky hillside`
          },
          {
            qText:
              'Why were the young Larks frightened when the Farmer and his son came into the field?',
            options: `They knew they would be in danger if they didn't leave the nest.
They were scared of the tall wheat stalks.
They didn't like the sound of the reapers.`
          },
          {
            qText:
              "What did the Mother Lark say when the young Larks told her about the Farmer's plans?",
            options: `"Do not be frightened, children."
"Let's fly away to a different field."
"We should stay here and hide."
"We should ask the Farmer for help."`
          },
          {
            qText: 'Why did the Farmer decide to harvest the wheat himself?',
            options: `The ripe wheat was in danger of being lost.
The Farmer's friends were busy with their own work.
The Farmer wanted to prove his independence.`
          },
          {
            qText: 'What did the farmer find the next day?',
            options: `An empty nest.
Another Lark family taking over their nest.
A note from their mother.`
          }
        ]
      }
    },
    {
      id: 'order-lark',
      label: 'Order the Sentences',
      type: 'sorting',
      data: {
        title: 'Order the sentences based on the story.',
        text: `A Lark made her nest in a field of young wheat.
The farmer decided to harvest the wheat with help from friends and neighbors.
"Do not be frightened, children," said the Mother Lark. 
The farmer decided to harvest the wheat himself.
Farmer and his son found an empty nest.`
      }
    },
    {
      id: 'wasp',
      type: 'passage',
      label: 'The Bees and Wasps, and the Hornet',
      style: 'big',
      data: {
        title: 'The Bees and Wasps, and the Hornet',
        text: `A store of honey had been found in a hollow tree, and the Wasps declared positively that it belonged to them. The Bees were just as sure that the treasure was theirs. The argument grew very pointed, and it looked as if the affair could not be settled without a battle, when at last, with much good sense, they agreed to let a judge decide the matter. So they brought the case before the Hornet, justice of the peace in that part of the woods.
When the Judge called the case, witnesses declared that they had seen certain winged creatures in the neighborhood of the hollow tree, who hummed loudly, and whose bodies were striped, yellow and black, like Bees.
Counsel for the Wasps immediately insisted that this description fitted his clients exactly.
Such evidence did not help Judge Hornet to any decision, so he adjourned court for six weeks to give him time to think it over. When the case came up again, both sides had a large number of witnesses. An Ant was first to take the stand, and was about to be cross-examined, when a wise old Bee addressed the Court.
"Your honor," he said, "the case has now been pending for six weeks. If it is not decided soon, the honey will not be fit for anything. I move that the Bees and the Wasps be both instructed to build a honey comb. Then we shall soon see to whom the honey really belongs."
The Wasps protested loudly. Wise Judge Hornet quickly understood why they did so: They knew they could not build a honey comb and fill it with honey.
"It is clear," said the Judge, "who made the comb and who could not have made it. The honey belongs to the Bees."`,
        moral: 'Moral: Ability proves itself by deeds.'
      }
    },
    {
      id: 'mcq-wasp',
      label: 'Multiple Choice Questions',
      type: 'mcq',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: 'Who claimed that the honey belonged to them?',
            options: `Wasps, Ants, Hornets`
          },
          {
            qText: 'What was the dispute about?',
            options: `Ownership of honey
Ownership of a hive
Ownership of a hollow tree
Ownership of a treasure`
          },
          {
            qText: 'Who was the judge in the case?',
            options: `Hornet, Ant, Wasp, Bee`
          },
          {
            qText: 'How did the judge decide to settle the matter?',
            options: `By asking the parties to build a honeycomb
By calling more witnesses
By examining the hollow tree
By adjourning court for six weeks`
          },
          {
            qText: 'Why did the Wasps protest when asked to build a honeycomb?',
            options: `They didn't know how to build a honeycomb
They believed the honey belonged to the Bees
They wanted to keep the honey for themselves`
          }
        ]
      }
    },
    {
      id: 'order-wasp',
      label: 'Order the Sentences',
      type: 'sorting',
      data: {
        title: 'Order the sentences based on the story.',
        text: `A store of honey had been found in a hollow tree. 
Disputes emerged between the wasps and the bees.
They brought the case before the Hornet.
Judge asked them to build a honeycomb.
The wasps protested loudly.
Judge Hornet said the honey belong to the bees.`
      }
    }
  ]
};
