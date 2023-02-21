export default {
  label: 'Antonyms Collection - 4',
  id: 'antonyms-4',
  defs: {
    data: [
      `fix, break
resist, yield
lead, follow
arrest, release
concentrate, daydream
appropriate, improper`,

      `assist, prevent
grim, pleasant
support, contradict
magnificient, ugly
observe, glance
scheduled, unplanned`,

      `contain, exclude
cling, detach
predator, prey
victory, failure
trust, distrust
poised, anxious`,

      `corrupt, principled
deposit, withdraw
massive, miniature
constant, unstable
climax, letdown
detach, link`,

      `pedestrian, motorist
eligible, disqualified
debate, agree
criticize, praise
havoc, peace
excavate, bury`,

      `zig-zag, straight
accomplish, blunder
maximum, merest
available, unavailable
myth, truth
soar, plummet`,

      `multiply, lessen
misunderstand, grasp
manual, automated
impressive, insignificant
gigantic, tiny
minute, immense`,

      `bravery, cowardice
crooked, straight
stain, purify
ancestor, descendant
exposure,  cover,
cruel, kind`,

      `written, oral
master, servant
haste, delay
vague, clear
punish, reward
arrival, departure`,

      `attract, repel
common, uncommon
attack, defend
ability, inability
imperfect, perfect
flaw, perfection`
    ]
  },
  list: [
    {
      id: 'reading',
      type: 'passage',
      label: 'Words List',
      data: {
        title: 'Antonyms',
        text: [
          //`Two words are said to be antonyms, if they have opposite meaning.`,
          {
            type: 'hilight',
            text: `fix × break
resist × yield
lead × follow
arrest × release
concentrate × daydream
appropriate × improper`
          },
          {
            type: 'hilight',
            text: `assist × prevent
grim × pleasant
support  ×  contradict
steer × follow
magnificient × ugly
observe × glance
scheduled × unplanned`
          },
          {
            type: 'hilight',
            text: `contain × exclude
cling × detach
predator × prey
victory × failure
trust × distrust
poised × anxious`
          },
          {
            type: 'hilight',
            text: `corrupt ×principled
deposit × withdraw
massive × miniature
constant × unstable
climax × letdown
detach × link`
          },
          {
            type: 'hilight',
            text: `pedestrian × motorist
eligible × disqualified
debate × agree
criticize × praise
havoc × peace
excavate × bury`
          },
          {
            type: 'hilight',
            text: `zig-zag × straight
accomplish × blunder
maximum × merest
available × unavailable
myth × truth
soar × plummet`
          },
          {
            type: 'hilight',
            text: `multiply × lessen
misunderstand × grasp
manual × automated
impressive × insignificant
gigantic × tiny
minute × immense`
          },
          {
            type: 'hilight',
            text: `bravery × cowardice
crooked × straight
stain × purify
ancestor × descendant
exposure × cover,
cruel × kind`
          },
          {
            type: 'hilight',
            text: `written × oral
master × servant
haste × delay
vague × clear
punish × reward
arrival × departure`
          },
          {
            type: 'hilight',
            text: `attract × repel
common × uncommon
attack × defend
ability × inability
imperfect × perfect
flaw × perfection`
          }
        ]
      }
    },
    {
      type: 'match',
      label: 'Match Antonyms',
      id: 'match',
      commonData: {
        title: 'Match Antonyms'
      },
      data: [
        {
          refs: 'data~0'
        },
        {
          refs: 'data~1'
        },
        {
          refs: 'data~2'
        },
        {
          refs: 'data~3'
        },
        {
          refs: 'data~4'
        },
        {
          refs: 'data~5'
        },
        {
          refs: 'data~6'
        },
        {
          refs: 'data~7'
        },
        {
          refs: 'data~8'
        },
        {
          refs: 'data~9'
        }
      ]
    },
    {
      type: 'completeWord',
      label: 'Write the Antonym',
      id: 'complete-word',
      commonData: {
        lang: 'en',
        title: 'Type the antonym of the given word.'
      },
      data: [
        {
          refs: 'data~0'
        },
        {
          refs: 'data~1'
        },
        {
          refs: 'data~2'
        },
        {
          refs: 'data~3'
        },
        {
          refs: 'data~4'
        },
        {
          refs: 'data~5'
        },
        {
          refs: 'data~6'
        },
        {
          refs: 'data~7'
        },
        {
          refs: 'data~8'
        },
        {
          refs: 'data~9'
        }
      ]
    },
    {
      type: 'connectLetters',
      label: 'Pick the word',
      id: 'connect-letters',
      commonData: {
        title:
          'Connect the letters from left to right to form the antonym for the below word.',
        clueFont: 'big'
      },
      data: [
        {
          refs: 'data~0'
        },
        {
          refs: 'data~1'
        },
        {
          refs: 'data~2'
        },
        {
          refs: 'data~3'
        },
        {
          refs: 'data~4'
        },
        {
          refs: 'data~5'
        },
        {
          refs: 'data~6'
        },
        {
          refs: 'data~7'
        },
        {
          refs: 'data~8'
        },
        {
          refs: 'data~9'
        }
      ]
    }
  ]
};
