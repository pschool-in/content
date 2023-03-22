export default {
  label: "Antonyms Collection - 6",
  id: "antonyms-6",
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
wary, negligent
recede, advance
irate, cheerful
resolute, indecisive`,

      `ajar, airtight
dowdy, fashionable
sullen, upbeat
chide, compliment
boisterous, quiet
deteriorate, upgrade`,

      `drastic, mild
consent, dissent
primitive, modern
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
adjunct, deduction`,

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
jubilant, depressed
impartial, biased
amateur, professional`,
    ],
  },
  list: [
    {
      id: "reading",
      type: "passage",
      label: "Words List",
      data: {
        title: "Antonyms",
        text: [
          //`Two words are said to be antonyms, if they have opposite meaning.`,
          {
            type: "hilight",
            text: `murky × luminous
nurture × neglect
astute × ignorant
lavish × economical
abrupt × gradual
abet × discourage`,
          },
          {
            type: "hilight",
            text: `abolition × establishment
feasible × impossible
wary × negligent
recede × advance
irate × cheerful
resolute × indecisive`,
          },
          {
            type: "hilight",
            text: `ajar × airtight
dowdy × fashionable
sullen × upbeat
chide × compliment
boisterous × quiet
deteriorate× upgrade`,
          },
          {
            type: "hilight",
            text: `drastic × mild
consent × dissent
primitive × modern
provoke × fickle
propel × retreat
desperate × hopeful`,
          },
          {
            type: "hilight",
            text: `hazardous × secure
novice × expert
callous × compassionate
zealous × indifferent
vestige × plethora
industrious × idle`,
          },
          {
            type: "hilight",
            text: `perish × revive
taunt × compliment
summit × bottom
athletic × frail
prosper × oppose
attic × cellar`,
          },
          {
            type: "hilight",
            text: `exclude × cherish
forbid × permit
elementary × advanced
remain × vanish
continue × interrupt
wondrous × commonplace`,
          },
          {
            type: "hilight",
            text: `pompous × humble
motley × uniform
flourish × dwindle
tyranny × democracy
bustle × inactivity
adjunct × deduction`,
          },
          {
            type: "hilight",
            text: `dictate × request
conceal × expose
sterile × fruitful
consecutive × interrupted
courteous × rude
monotonous × interesting`,
          },
          {
            type: "hilight",
            text: `momentous × unimportant
flippant × respectful
eternal × transient
ecstasy × misery
dormant × awake`,
          },
          {
            type: "hilight",
            text: `congested × clear
conflict × peace
jubilant × depressed
impartial × biased
amateur × professional`,
          },
        ],
      },
    },
    {
      type: "match",
      label: "Match Antonyms",
      id: "match",
      commonData: {
        title: "Match Antonyms",
      },
      data: [
        {
          refs: "data~0",
        },
        {
          refs: "data~1",
        },
        {
          refs: "data~2",
        },
        {
          refs: "data~3",
        },
        {
          refs: "data~4",
        },
        {
          refs: "data~5",
        },
        {
          refs: "data~6",
        },
        {
          refs: "data~7",
        },
        {
          refs: "data~8",
        },
        {
          refs: "data~9",
        },
        {
          refs: "data~10",
        },
      ],
    },
    {
      type: "completeWord",
      label: "Write the Antonym",
      id: "complete-word",
      commonData: {
        lang: "en",
        title: "Type the antonym of the given word.",
      },
      data: [
        `murky| luminous| l___n__s
nurture| neglect| n__l__t
astute| ignorant| i__o__nt
lavish| economical| e__n___c__
abrupt| gradual| g_a___l
abet| discourage| d_____r__e`,

        `abolition| establishment| e__a___s___nt
feasible| impossible| i___s____e
wary| negligent| n___ig__t
recede| advance| a_v___e
irate| cheerful| c__e___l
resolute| indecisive| i___c___ve`,

        `ajar| airtight| _i__i__t
dowdy| fashionable| f___i_____e
sullen| upbeat| __b__t
chide| compliment| c___l___nt
boisterous| quiet| _____
deteriorate| u____de`,

        `drastic| mild| ____
consent| dissent| d__s__t
primitive| modern| m____n
provoke| fickle| f_c__e
propel| retreat| r___e__
desperate| hopeful| h___f__`,

        `hazardous| secure| s_c__e
novice| expert| e__e__
callous| compassionate| c___a____n___
zealous| indifferent| i__i___r___
vestige| plethora| p___h___
industrious| idle| ____`,

        `perish| revive| r_v__e
taunt| compliment| c___l___n_
summit| bottom| ______
athletic| frail| _____
prosper| oppose| o_____
attic| cellar| c_____`,

        `exclude| cherish| c_____h
forbid| permit| p_____
elementary| advanced| a__a___d
remain| vanish| _____h
continue| interrupt| i___r___t
wondrous| commonplace| c__m___l__e`,

        `pompous| humble| ______
motley| uniform| _____rm
flourish| dwindle| d_____e
tyranny| democracy| d__o___cy
bustle| inactivity| i___t___ty
adjunct| deduction| d___c___n`,

        `dictate| request| r__u__t
conceal| expose| e_____
sterile| fruitful| fr__t__l
consecutive| interrupted| i___r___t__
courteous| rude| ____
monotonous| interesting| i___r___i__`,

        `momentous| unimportant| u___p___ant
flippant| respectful| r__p__t___
eternal| transient| t_____ent
ecstasy| misery| m__e_y
dormant| awake| _____`,

        `congested| clear| _____
conflict| peace| _____
jubilant| depressed| d___e___d
impartial| biased| b_____
amateur| professional| p___es_____l`,
      ],
    },
    {
      type: "connectLetters",
      label: "Pick the word",
      id: "connect-letters",
      commonData: {
        title:
          "Connect the letters from left to right to form the antonym for the below word.",
        clueFont: "big",
      },
      data: [
        {
          refs: "data~0",
        },
        {
          refs: "data~1",
        },
        {
          refs: "data~2",
        },
        {
          refs: "data~3",
        },
        {
          refs: "data~4",
        },
        {
          refs: "data~5",
        },
        {
          refs: "data~6",
        },
        {
          refs: "data~7",
        },
        {
          refs: "data~8",
        },
        {
          refs: "data~9",
        },
        {
          refs: "data~10",
        },
      ],
    },
  ],
};
