export default {
  label: "Antonyms Collection - 5",
  id: "antonyms-5",
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
keen, reluctant
subsequent, former
justify, deny
punishment, reward
amnesty, punishment`,

      `anxiety, relief
radical, conservative
charity, unkindness
abnormal, regular
famous, anonymous
diligent, lazy`,

      `fantastic, sober
preference, dislike
furious, calm
moderate, extreme
mischievous, well-behaved
militant, pacifist`,

      `migrant, immovable
coarse, fine
foe, friend
immaculate, dirty
gratitude, ungratefulness
gaunt, plump`,
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
            text: `bicker× concur
distress× pleasure
captivity× freedom
limp× stiff
substantial× insignificant
quench× parch`,
          },
          {
            type: "hilight",
            text: `fiasco× triumph
utmost× minimal
infamous× glorious
inevitable× avoidable
onset× conclusion
concise× wordy`,
          },
          {
            type: "hilight",
            text: `arrogant× modest
offbeat× regular
terminate× initiate
generate× demolish
conserve× squander
crude× refined`,
          },
          {
            type: "hilight",
            text: `dominate× submit
efficient× unproductive
solitary× together
fatigue× liveliness
exhibit× conceal
squash× expand`,
          },
          {
            type: "hilight",
            text: `agony× comfort
myriad× scarcity
gratify× disappoint
cultivate× neglect
admire× detest
persist× quit`,
          },
          {
            type: "hilight",
            text: `absurd× sensible
dainty× clumsy
economise× waste
frosty× sweltering
yoke× release
wilt× revive`,
          },
          {
            type: "hilight",
            text: `vicious× cordial
keen× reluctant
subsequent× former
justify× deny
punishment× reward
amnesty× punishment`,
          },
          {
            type: "hilight",
            text: `anxiety× relief
radical× conservative
charity× unkindness
abnormal× regular
famous× anonymous
diligent× lazy`,
          },
          {
            type: "hilight",
            text: `fantastic× sober
preference× dislike
furious× calm
moderate× extreme
mischievous× well-behaved
militant× pacifist`,
          },
          {
            type: "hilight",
            text: `migrant× immovable
coarse× fine
foe× friend
immaculate× dirty
gratitude× ungratefulness
gaunt× plump`,
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
        `bicker| concur| co___r
      distress| pleasure| pl__s___
      captivity| freedom| f__e__m
      limp| stiff| st___
      substantial| insignificant| i___g____cant
      quench| parch| _____`,

        `fiasco| triumph| t__u__h
      utmost| minimal| m_n_m_l
      infamous| glorious| gl__i__s
      inevitable| avoidable| a___d___e
      onset| conclusion| co___u___n
      concise| wordy| w___y`,

        `arrogant| modest| m__e__
      offbeat| regular| r__u___
      terminate| initiate| i___i__e
      generate| demolish| de__l__h
      conserve| squander| s__a___r
      crude| refined| r___n__`,

        `dominate| submit| _____t
      efficient| unproductive| un___d___i__
      solitary| together| t__e___r
      fatigue| liveliness| l__el__e__
      exhibit| conceal| c__c__l
      squash| expand| __p___`,

        `agony| comfort| c__f___
      myriad| scarcity| _c__c__y
      gratify| disappoint| d_s___o__t
      cultivate| neglect| n_g_e_t
      admire| detest| d__e__
      persist| quit| ____`,

        `absurd| sensible| sensible
      dainty| clumsy| __u__y
      economise| waste| wa___
      frosty| sweltering| _w___e__ng
      yoke| release| r__e__e
      wilt| revive| _e_iv_`,

        `vicious| cordial| ___d_a_
      keen| reluctant| _el__t__t
      subsequent| former| _o_m__
      justify| deny| ____
      punishment| reward| r_w__d
      amnesty| punishment| p___s___nt`,

        `anxiety| relief| r_l__f
      radical| conservative| c__s___a___e
      charity| unkindness| u___n___s_
      abnormal| regular| r__u___
      famous| anonymous| a___y__us
      diligent| lazy| ____`,

        `fantastic| sober| _____
      preference| dislike| d__l__e
      furious| calm| ____
      moderate| extreme| ex___m_
      mischievous| well-behaved| w__l-b__a___
      militant| pacifist| pa__f__t`,

        `migrant| immovable| i__o___l_
      coarse| fine| ____
      foe| friend| ______
      immaculate| dirty| _____
      gratitude| ungratefulness| u_g__te___n__s
      gaunt| plump| p___p`,
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
