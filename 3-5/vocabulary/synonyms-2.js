export default {
  label: 'Synonyms Collection - 2',
  id: 'synonyms-2',
  defs: {
    data: [
      `magnify, expand
choose, pick
miniature, tiny
cordial, kind
immense, enormous
occur, happen`,
      `raw, uncooked
thief, burglar
mix,blend
middle, center
listen, hear
award, reward`,
      `synonym, same
woman, female
purchase, buy
intelligent, smart
roof, ceiling
eat, munch`,
      `stop, cease
grow, expand
allow, permit
hurt, injure
ache, pain
always, forever`,
      `broad, wide
care, concern
keep, hold
mistake, error
chase, follow
common, usual`,
      `hollow, hole
answer, reply
toss, throw
tale, story
yell, shout
remark, comment`,
      `admit, confess
dense, thick
odd, strange
defect, fault
forest, jungle
respect, honor`,
      `writer, author
yearly, annually
nearly, almost
gather, collect
close, nearby
buy, purchase`,
      `tasty, delicious
learn, study
approve, accept
arrive, reach
behave, act
help, aid`,
      `alike, same
fast, rapid
change, alter
brief, short
value, worth
soon, shortly`
    ]
  },
  list: [
    {
      id: 'reading',
      type: 'passage',
      label: 'Words List',
      data: {
        title: 'Synonyms',
        text: [
          // `Two words are said to be synonyms, if they have similar meaning.`,
          {
            type: 'hilight',
            text: `magnify − expand
choose − pick
miniature − tiny
cordial − kind
immense − enormous
occur − happen`
          },
          {
            type: 'hilight',
            text: `raw − uncooked
thief − burglar
mix - blend
middle − center
listen − hear
award − reward`
          },
          {
            type: 'hilight',
            text: `synonym − same
woman − female
purchase − buy
intelligent − smart
roof − ceiling
eat − munch`
          },
          {
            type: 'hilight',
            text: `stop − cease
grow − expand
allow − permit
hurt − injure
ache − pain
always − forever`
          },
          {
            type: 'hilight',
            text: `broad − wide
care − concern
keep − hold
mistake − error
chase − follow
common − usual`
          },
          {
            type: 'hilight',
            text: `hollow − hole
answer − reply
toss − throw
tale − story
yell − shout
remark − comment`
          },
          {
            type: 'hilight',
            text: `admit − confess
dense − thick
odd − strange
defect − fault
forest − jungle
respect − honor`
          },
          {
            type: 'hilight',
            text: `writer − author
yearly − annually
nearly − almost
gather − collect
close − nearby
buy − purchase`
          },
          {
            type: 'hilight',
            text: `tasty − delicious
learn − study
approve − accept
arrive − reach
behave − act
help − aid`
          },
          {
            type: 'hilight',
            text: `alike − same
fast − rapid
change − alter
brief − short
value − worth
soon − shortly`
          }
        ]
      }
    },
    {
      type: 'match',
      label: 'Match Synonyms',
      id: 'match',
      commonData: {
        title: 'Match Synonyms'
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
      label: 'Write the Synonyms',
      id: 'complete-word',
      commonData: {
        lang: 'en',
        title: 'Type the synonym of the given word.',
        hintFontSize: '2rem',
        lowerCase: true
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
          'Connect the letters from left to right to form the synonym for the below word.',
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
    },
    {
      type: 'rightOne',
      id: 'odd-one',
      label: 'Odd One Out',
      lockAfter: 1,
      commonData: {
        title: 'Which word does not belong in the group of synonyms?'
      },
      data: [
        `loose, get, acquire, obtain, secure, procure
came, go, recede, depart, fade, disappear
rotten, good, excellent, apt, marvelous, qualified
worthless, great, noteworthy, worthy, distinguished, remarkable
nice, improper, rude, coarse, indecent`,

        `unhappy, happy, pleased, contented, satisfied, delighted
like, hate, despise, loathe, detest, abhor
lost, have, acquire, gain, maintain, believe
injure, help, aid, assist, succor, encourage
reveal, hide, conceal, camouflage, shroud, veil`,

        `slow, hurry, hasten, urge, accelerate, bustle
cure, hurt, damage, distress, afflict, pain
thesis, idea, thought, concept, conception, notion
usual, important, necessary, vital, critical, indispensable
dull, interesting, fascinating, bright, intelligent`,

        `give, keep, hold, maintain, sustain, support
save, kill, slay, execute, assassinate, abolish
active, lazy, indolent, slothful, idle, inactive
macro, little, dinky, diminutive, miniature
unsee, look, scrutinize, inspect, survey, study`,

        `dislike, love, like, admire, esteem, fancy
destroy, make, design, fabricate, manufacture, produce
follow, mark, impress, effect, trace, imprint
silent, say, tell, recount, narrate, explain, reveal
stop, move, plod, go, creep, crawl`,

        `ugly, neat, trim, dapper, smart
old, new, novel, modern, current, recent
new, old, aged, used, worn, dilapidated
whole, part, portion, section, fraction, fragment
plead, place, space, area, spot, plot, region, location, spot`,

        `take, put, place, assign, keep, establish
loud, quiet, tranquil, peaceful, calm, restful
false, right, correct, accurate, factual, true
walk, run, race, sprint, dash, rush
fearless, scared, panicked, fearful, unnerved, insecure`,

        `hide, show, display, exhibit, present, note
dash, slow, unhurried, behind, tedious, slack
start, stop, cease, halt, stay, pause
talk, story, tale, yarn, account, narrative
familiar, strange, odd, peculiar, unusual, unfamiliar
throw, take, hold, catch, seize, grasp`
      ]
    }
  ]
};
