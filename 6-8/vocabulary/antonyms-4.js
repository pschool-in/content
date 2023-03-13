export default {
  label: "Antonyms Collection - 4",
  id: "antonyms-4",
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

      `corrupt, honest
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
accomplish, giveup 
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
flaw, perfection`,
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
            text: `fix × break
resist × yield
lead × follow
arrest × release
concentrate × daydream
appropriate × improper`,
          },
          {
            type: "hilight",
            text: `assist × prevent
grim × pleasant
support  ×  contradict
steer × follow
magnificient × ugly
observe × glance
scheduled × unplanned`,
          },
          {
            type: "hilight",
            text: `contain × exclude
cling × detach
predator × prey
victory × failure
trust × distrust
poised × anxious`,
          },
          {
            type: "hilight",
            text: `corrupt ×honest
deposit × withdraw
massive × miniature
constant × unstable
climax × letdown
detach × link`,
          },
          {
            type: "hilight",
            text: `pedestrian × motorist
eligible × disqualified
debate × agree
criticize × praise
havoc × peace
excavate × bury`,
          },
          {
            type: "hilight",
            text: `zig-zag × straight
accomplish × giveup
maximum × merest
available × unavailable
myth × truth
soar × plummet`,
          },
          {
            type: "hilight",
            text: `multiply × lessen
misunderstand × grasp
manual × automated
impressive × insignificant
gigantic × tiny
minute × immense`,
          },
          {
            type: "hilight",
            text: `bravery × cowardice
crooked × straight
stain × purify
ancestor × descendant
exposure × cover,
cruel × kind`,
          },
          {
            type: "hilight",
            text: `written × oral
master × servant
haste × delay
vague × clear
punish × reward
arrival × departure`,
          },
          {
            type: "hilight",
            text: `attract × repel
common × uncommon
attack × defend
ability × inability
imperfect × perfect
flaw × perfection`,
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
        `fix| break| _____
        resist| yield| _____
        lead| follow| ______
        arrest| release| __le__e
        concentrate| daydream| d__dr__m
        appropriate| improper| i_p___er`,

        `assist| prevent| p_____t
        grim| pleasant| p__as__t
        support| contradict| co__r__ict
        magnificient| ugly| ____
        observe| glance| g__nce
        scheduled| unplanned| un__a__ed`,

        `contain| exclude| e_c_u_e
        cling| detach| d____h
        predator| prey| ____
        victory| failure| _______
        trust| distrust| _i__r__t
        poised| anxious| a__i__s`,

        `corrupt| honest| h____t
        deposit| withdraw| _i_h_r__
        massive| miniature| m__i__u_e
        constant| unstable| u_s__b_e
        climax| letdown| l__d_wn
        detach| link| ____`,

        `pedestrian| motorist| m__o__s_
        eligible| disqualified| d__q__l__i_d
        debate| agree| ___ee
        criticize| praise| p_a_s_
        havoc| peace| p___e
        excavate| bury| ____`,

        `zig-zag| straight| s_r__g_t
        accomplish| giveup | g__e__
        maximum| merest| m___st
        available| unavailable| __a__ila__e
        myth| truth| _____
        soar| plummet| p__m__t`,

        `multiply| lessen| l_____
        misunderstand| grasp| _____
        manual| automated| au___a___
        impressive| insignificant| _n_i__i_ic__t
        gigantic| tiny| ____
        minute| immense| i__e__e`,

        `bravery| cowardice| c__a__i_e
        crooked| straight| st__i__t
        stain| purify| p_r__y
        ancestor| descendant| d__cen__nt
        exposure|  cover|  _____
        cruel| kind| ____`,

        `written| oral| ____
        master| servant| s__v__t
        haste| delay| _____
        vague| clear| _____
        punish| reward| r_____
        arrival| departure| d___r__re`,

        `attract| repel| _____
        common| uncommon| _n___m_n
        attack| defend| _____d
        ability| inability| _n_b_l_t_
        imperfect| perfect| p_rf__t
        flaw| perfection| pe___c___n`,
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
      ],
    },
  ],
};
