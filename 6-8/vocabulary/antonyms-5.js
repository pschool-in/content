export default {
  label: 'Antonyms Collection - 5',
  id: 'antonyms-5',
  defs: {
    data: [
      `bicker, concur
distress, pleasure
captivity, freedom
limp, stiff
substantial, insignificant
quench, parch`,

      `fiasco, triumph
utmost, minimal
infamous, glorious
inevitable, avoidable
onset, conclusion
concise, wordy`,

      `arrogant, modest
offbeat, regular
terminate, initiate
generate, demolish
conserve, squander
crude, refined`,

      `dominate, submit
efficient, unproductive
solitary, together
fatigue, liveliness
exhibit, conceal
squash, expand`,

      `agony, comfort
myriad, scarcity
gratify, disappoint
cultivate, neglect
admire, detest
persist, quit`,

      `absurd, sensible
dainty, clumsy
economise, waste
frosty, sweltering
yoke, release
wilt, revive`,

      `vicious, cordial
keen, insipid
subsequent, former
justify, invalidate
punishment, bounty
amnesty, blame`,

      `anxiety, relief
radical, conservative
charity, theft
abnormal, customary
famous, anonymous
diligent, lazy`,

      `fantastic, sober
preference, dislike
furious, calm
moderate, extreme
mischievous, well-behaved
militant, peaceful`,

      `migrant, immovable
coarse, fine
foe, friend
immaculate, dirty
gratitude, ungratefulness
gaunt, plump`
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
            text: `bicker× concur
distress× pleasure
captivity× freedom
limp× stiff
substantial× insignificant
quench× parch`
          },
          {
            type: 'hilight',
            text: `fiasco× triumph
utmost× minimal
infamous× glorious
inevitable× avoidable
onset× conclusion
concise× wordy`
          },
          {
            type: 'hilight',
            text: `arrogant× modest
offbeat× regular
terminate× initiate
generate× demolish
conserve× squander
crude× refined`
          },
          {
            type: 'hilight',
            text: `dominate× submit
efficient× unproductive
solitary× together
fatigue× liveliness
exhibit× conceal
squash× expand`
          },
          {
            type: 'hilight',
            text: `agony× comfort
myriad× scarcity
gratify× disappoint
cultivate× neglect
admire× detest
persist× quit`
          },
          {
            type: 'hilight',
            text: `absurd× sensible
dainty× clumsy
economise× waste
frosty× sweltering
yoke× release
wilt× revive`
          },
          {
            type: 'hilight',
            text: `vicious× cordial
keen× insipid
subsequent× former
justify× invalidate
punishment× bounty
amnesty× blame`
          },
          {
            type: 'hilight',
            text: `anxiety× relief
radical× conservative
charity× theft
abnormal× customary
famous× anonymous
diligent× lazy`
          },
          {
            type: 'hilight',
            text: `fantastic× sober
preference× dislike
furious× calm
moderate× extreme
mischievous× well-behaved
militant× peaceful`
          },
          {
            type: 'hilight',
            text: `migrant× immovable
coarse× fine
foe× friend
immaculate× dirty
gratitude× ungratefulness
gaunt× plump`
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
