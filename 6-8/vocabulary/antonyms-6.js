export default {
  label: 'Antonyms Collection - 6',
  id: 'antonyms-6',
  defs: {
    data: [
      `murky, luminous
nurture, neglect
astute, ignorant
lavish, economical
abrupt, gradual
abet, discourage`,

      `abolition, establishment
feasible, impossible
wary, rash
recede, advance
irate, content
resolute, indecisive`,

      `ajar, airtight
dowdy, fashionable
sullen, upbeat
chide, compliment
boisterous, quiet
deteriorate, upgrade`,

      `drastic, mild
consent, dissent
primitive, soothe
provoke, fickle
propel, retreat
desperate, hopeful`,

      `hazardous, secure
novice, expert
callous, compassionate
zealous, indifferent
vestige, plethora
industrious, idle`,

      `perish, revive
taunt, compliment
summit, bottom
athletic, frail
prosper, oppose
attic, cellar`,

      `exclude, cherish
forbid, permit
elementary, advanced
remain, vanish
continue, interrupt
wondrous, commonplace`,

      `pompous, humble
motley, uniform
flourish, dwindle
tyranny, democracy
bustle, inactivity
adjunct, principal`,

      `dictate, request
conceal, expose
sterile, fruitful
consecutive, interrupted
courteous, rude
monotonous, interesting`,

      `momentous, unimportant
flippant, respectful
eternal, transient
ecstasy, misery
dormant, awake`,

      `congested, clear
conflict, peace
jubilant, dejected
impartial, partial
amateur, professional`
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
            text: `murky × luminous
nurture × neglect
astute × ignorant
lavish × economical
abrupt × gradual
abet × discourage`
          },
          {
            type: 'hilight',
            text: `abolition × establishment
feasible × impossible
wary × rash
recede × advance
irate × content
resolute × indecisive`
          },
          {
            type: 'hilight',
            text: `ajar × airtight
dowdy × fashionable
sullen × upbeat
chide × compliment
boisterous × quiet
deteriorate× upgrade`
          },
          {
            type: 'hilight',
            text: `drastic × mild
consent × dissent
primitive × soothe
provoke × fickle
propel × retreat
desperate × hopeful`
          },
          {
            type: 'hilight',
            text: `hazardous × secure
novice × expert
callous × compassionate
zealous × indifferent
vestige × plethora
industrious × idle`
          },
          {
            type: 'hilight',
            text: `perish × revive
taunt × compliment
summit × bottom
athletic × frail
prosper × oppose
attic × cellar`
          },
          {
            type: 'hilight',
            text: `exclude × cherish
forbid × permit
elementary × advanced
remain × vanish
continue × interrupt
wondrous × commonplace`
          },
          {
            type: 'hilight',
            text: `pompous × humble
motley × uniform
flourish × dwindle
tyranny × democracy
bustle × inactivity
adjunct × principal`
          },
          {
            type: 'hilight',
            text: `dictate × request
conceal × expose
sterile × fruitful
consecutive × interrupted
courteous × rude
monotonous × interesting`
          },
          {
            type: 'hilight',
            text: `momentous × unimportant
flippant × respectful
eternal × transient
ecstasy × misery
dormant × awake`
          },
          {
            type: 'hilight',
            text: `congested × clear
conflict × peace
jubilant × dejected
impartial × partial
amateur × professional`
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
        },
        {
          refs: 'data~10'
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
        },
        {
          refs: 'data~10'
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
        },
        {
          refs: 'data~10'
        }
      ]
    }
  ]
};
