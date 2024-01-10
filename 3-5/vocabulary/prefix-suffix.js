export default {
  label: 'Prefix and Suffix',
  id: 'prefix-suffix',
  list: [
    {
      id: 'wordlist-both',
      type: 'passage',
      label: 'Reading',
      data: {
        title: 'Prefix and Suffix',
        text: [
          'There are many words that have both prefix and suffix. Find below some words list. Get familiar with them.',
          {
            type: 'sitewords',
            text: 'deactivation,  deforestation,  disability,  disappointment,  discovering,  dishonestly,  disloyalty,  disqualified,  empowerment,  encouragement,  enjoyment,  fulfillment,  illegally,  immaturity,  immeasurable,  improvement,  investment,  irregularly,  irresponsible,  irreversible,  misbehavior,  misleading,  misspelling, overcoming,  overcooked,  precautious,  preplaning,  reappearance,  rearrangement,  recalled,  recollection,  recovering,  refreshment,  replacement,  representation,  reproductive,  returning,  unbelievable,  unbreakable,  understanding,  undoubtedly,  unfortunately,  unfriendly,  unhappiness,  unlikable,  unmistakeable,  unpredictable,  unproductive,  unselfishly,  unsuccessful,  unwilling',
            width: 120
          }
        ]
      }
    },
    {
      label: 'Choose Both Prefix and Suffix',
      id: 'prefix-suffix',
      type: 'completePuzzle',
      commonData: {
        type: 'bothOpen',
        title: 'Drag and drop the correct prefix and suffix.',
        printTitle: 'Underline the right options.',
        leftWidth: 60,
        rightWidth: 110,
        midWidth: 160
      },
      data: [
        `success, un, in, ful, ness
prove, im, un, ment, ful
product, un, in, ive, ion
fresh, re, de, ment, ness
collect, re, un, ion, ment
invest, re, de, ment, ness
cover, re, de, ing, ful
doubted, un, in, ly, ness
loyal, dis, de, ty, ness
activa, de, di, tion, ly`,

        `lik, un,in, able, ty
place, re, ir, ment, tion
measur, im, in, able, ment
courage, en, in, ment, tion
believ, un, en, able, ness
selfish, un, dis, ly, ty
arrange, re, ir, ment, ness
appear, re, de, ance, ness
honest, dis, un, ly, ment
product, re, ill, ive, ly`,

        `present, re, de, ation, ly
break, un, dis, able, tion
legal, il, un, ly, ty
regular, ir, dis, ly, ed
revers, ir, un, ible, able
respons, ir, un, ible, able
abili, dis, un, ty, ting
friend, un, in, ly, ty
joy, en, fun, ment, tion
behavi, mis, dis, or, er`,

        `cover, dis, in, ing, tion
appoint, dis, im, ment, ive
happi, un, in, ness, tive
fortunate, un, in, ly, ty
qualifi, dis, in, ed, tion
maturi, im, in, ty, ly
spell, mis, un, ing, ion
plan, pre, bi, ning, tion
cauti, pre, bi, ous, tion
turn, re, un, ing, ous`,

        `call, re, un, ed, ness
cook, over, in, ed, ful
com, over, un, ing, ed
predict, un, in, able, ing
fill, ful, fun, ment, ing
forestat, de, un, ion, ness
power, em, un, ment, ness
mistake, un, im, able, ble
lead, mis, dis, ing, ness
will, un, in, ing, able`
      ]
    }
  ]
};
