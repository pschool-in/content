export default {
  label: 'Roman Number - 2',
  id: 'roman-number-2',
  list: [
    {
      label: 'Roman Numbers - Notes',
      type: 'passage',
      id: 'notes',
      data: {
        title: 'Quick Notes',
        text: [
          `Earlier we have learned Roman numbers till 100. Now let know some bigger numbers.`,
          {
            type: 'table',
            text: [
              `C — 100
CC — 200
CCC — 300
CD — 400
D — 500
DC — 600
DCC — 700
DCCC — 800
CM — 900
M — 1000`,

              `CI — 101
CV — 105
CX — 110
CL — 150
CIV — 104
CIX — 109
CXL — 140
CVI — 106
CXXX — 130
CLXXX — 180`
            ]
          },

          `Bigger Numbers`,
          {
            type: 'table',
            text: [
              `MI — 1001
MV — 1005
MMM — 3000
MMMI — 3001
MMMIII — 3003
MMMX — 3010
MMMXXX — 3030
CML — 950
CDXL — 440
CDXC — 490`,

              `MMMCDXLIV — 3444
CCCXXXIII — 333
CCCLXXXVIII — 388
MMMXXXIII — 3033
MMMCCCXXX — 3330
CCCXCIX — 399
CMXCIX — 999
CDLXIX — 469
MMCCXXII — 2222
CCCXXXIX — 339`
            ]
          }
        ]
      }
    },
    {
      type: 'match',
      id: 'match',
      label: 'Match Equals',
      commonData: {
        title: 'Match Roman and Decimal.'
      },
      data: [
        `M, 1000
C, 100
CD, 400
CM, 900
D, 500`,

        `CCC, 300
MMM, 3000
DCCC, 800
MMMD, 3500
MDC, 1600`,

        `MDCLVI, 1656
CMXCIX, 999
CCCXLIV, 344
CXXX , 130
CLXXX , 180`,

        `MI , 1001
MV , 1005
MMM , 3000
MMMI , 3001
MMMIII , 3003`,

        `MMMX , 3010
MMMXXX , 3030
CML , 950
CDXL , 440
CDXC , 490`,

        `MMMCDXLIV , 3444
CCCXXXIII , 333
CCCLXXXVIII , 388
MMMXXXIII , 3033
MMMCCCXXX , 3330`,

        `CCCXCIX , 399
CMXCIX , 999
CDLXIX , 469
MMCCXXII , 2222
CCCXXXIX , 339`
      ]
    },
    {
      type: 'rightOne',
      label: 'Biggest Number',
      id: 'biggest',
      commonData: {
        title: `Pick the biggest number.`,
        printTitle: 'Circle the biggest number.',
        fontSize: '1.3rem'
      },
      data: [
        `D, XCI, CD, CL
DC, DL, CCCL, CDL
M, CML, DC, CL
DCCCL, DCL, CDL, XC
DCC, CCCL, LXXX, LX`,

        `CML, C, XC, LX
XCIX, LXXX, LIII, XLIX
CM, DCC, CCCL, XC
DCC, DL, CCL, XC
CD, XC, C, CL`,

        ` M, DCCL, CML, CM
DC, LIV, LXIV, XC
DCCCL, XLIX, LXXI,  XC
DC, XCIII, C, CL
XCIX, XXXVI, XCI, LV`,

        `MI, DC, CML, DCL, 
DL, CCCL, D, CD
CM, C, CL, DCL
CDL, XCV, XCIX, CL
M, XC, DL, C`
      ]
    },
    {
      type: 'rightOne',
      label: 'Smallest Roman Number',
      id: 'smallest',
      commonData: {
        title: `Pick the smallest roman number.`,
        printTitle: 'Circle the smallest number.',
        fontSize: '1.3rem'
      },
      data: [
        `L, C, CML, D
LXX, XCI, XC, LXXIX
XCI, XCIX, M, DC
XXX, XL, XLV, LXI
XXXI, XLIV, LXII, XC`,

        `LX, CML, C, XC
XLIX, XCIX, LXXX, LIII
XC, CM, DCC, CCCL
XC, DCC, DL, CCL
XC, CD, C, CL`,

        `DCCL, M, CML, CM
LIV, LXIV, XC, DC
XLIX, LXXI, DCCCL, XC
XCIII, C, CL, DC
XXXVI, XCI, LV, XCIX`,

        `DC, CML, M, DCL
CCCL, D, DL, CD
C, CL, CM, DCL
XCV, XCIX, CL, CDL
XC, DL, C, M`
      ]
    },
    {
      label: 'Ascending Order',
      type: 'sorting',
      id: 'ascending',
      commonData: {
        title:
          'Ascending Order: Drag and drop and reorder the numbers. The smallest number should come at the top.',
        printTitle: 'Ascending Order',
        allowFrac: true,
        multiple: true,
        fontSize: '1.3rem'
      },
      data: [
        `XXV, XXXVI, XLV, LIV, LXV
L, LX, XC, XCIX, CDL
XLV, LI, LXIX, LXXI, XC
XLI, LI, LXXIV, XCI, CL
LXXXV, XCII, CL, D, CM`,

        `XCI, CL, DC, CM, M
XLVI, LIV, LXXI, XCI, CL
LIV, LXXV, XCI, CL, DC
XXIX, XL, LXXI, XCI, CL
LXX, XCI, C, CL, CD`,

        `LXVI, XCI, XCIX, CL, DC
XL, XCIV, C, CCL, DCC
XXXVIII, L, XCIII, CC, DCL
LVI, XCI, CL, DC, CM
LXIV, LXXXV, CC, DCL, CML`,

        `CL, CCL, CDL, DL, DC
CD, D, DC, CML, M
LXXX, XC, C, CL, CC
C, CC, CD, DL, DC
LIX, C, DL, CM, CML`
      ]
    },
    {
      label: 'Descending Order',
      type: 'sorting',
      id: 'descending',
      commonData: {
        title:
          'Descending Order: Drag and drop and reorder the numbers. The biggest number should come at the top.',
        printTitle: 'Descending Order',
        multiple: true,
        fontSize: '1.3rem'
      },
      data: [
        `LX, XLIX, XL, XXX, XIX
CCC, XCIX, LXXXI, LXV, LIX
CCCL, LXXXIX, LIX, XLIX, XXIX
XCI, LXXXI, LXXIX, LXV, LIX
LXI, LIX, XLIX, XXXI, XX `,

        `CL, XCIX, LXXI, LI, L
CML, DCCCL, DC, DL, CDL
DCC, CD, CL, XC, LXI
XCIX, XC, LXI, L, XXX
LXXV, LXX, LIII, L, XL`,

        `M, DCCL, D, CL, C
DCCCL, D, CDL, XC, LX
DC, CDL, LXXIX, LXV, LV
CM, DL, CCL, CC, XC
CDL, XC, LV, L, XL`,

        `DC, DL, CDL, CCL, CL
M, CML, DC, D, CD
CC, CL, C, XC, LXXX
DC, DL, CD, CC, C
CML, CM, DL, C, LIX`
      ]
    },
    {
      type: 'numberInput',
      id: 'number-names',
      label: 'Write the Decimal Numbers',
      commonData: {
        title: 'Convert Roman numbers to Decimal numbers',
        type: 'word-problem',
        firstLineFontSize: '2.5rem',
        isSentence: false
      },
      data: [
        `DCL | 650
DCCCL | 850 
M | 1000
XCVIII | 98 
LXXXVIII | 88 `,

        `DCCL | 750
D | 500
DCCC  | 800
CML | 950
LXXXVI | 86 `,

        ` MMM | 3000
MCCLXXXVIII | 1288
MMMCCLIV | 3254
MMDCCCXCVII | 2897
MCCCXXX | 1330 `,

        `CMXCIX | 999
MMMCMLXXXVII | 3987
MMCMLXXXVI | 2986
MCCLXXXVII | 1287
MCMXCV | 1995 `,

        `MMMCMLXXX | 3980
MMCMXCIX | 2999
MMMDCCCLXXVI | 3876
MMMDXLI | 3541 
MCCVII | 1207 `
      ]
    },
    {
      type: 'numberInput',
      id: 'number-names-2',
      label: 'Write the Roman Numbers',
      commonData: {
        title: 'Convert Decimal numbers to Roman numbers',
        type: 'word-problem',
        firstLineFontSize: '2.5rem',
        customKeys: 'I,V,X,L,C,D,M',
        numberInput: false,
        isSentence: false
      },
      data: [
        `650 | DCL
850 | DCCCL
1000 | M
98 | XCVIII
88 | LXXXVIII`,

        `750 | DCCL
500 | D
800 | DCCC
950 | CML
86 | LXXXVI`,

        `3000 | MMM
1288 | MCCLXXXVIII
3254 | MMMCCLIV
2897 | MMDCCCXCVII
1330 | MCCCXXX`,

        `999 | CMXCIX
3987 | MMMCMLXXXVII
2986 | MMCMLXXXVI
1287 | MCCLXXXVII
1995 | MCMXCV`,

        `3980 | MMMCMLXXX
2999 | MMCMXCIX
3876 | MMMDCCCLXXVI
3541 | MMMDXLI
1207 | MCCVII`
      ]
    },
    {
      id: 'group',
      label: 'Valid or Invalid Number',
      type: 'group',
      commonData: {
        fontSize: '2rem',
        types: ['Valid', 'Invalid'],
        title: 'Classify the below numbers as valid and invalid roman numbers.'
      },
      data: [
        {
          arr: ['MM, MDC, MCC, MI, MV, MCD', 'DD, MLL, MLC, MVX']
        },
        {
          fontSize: '1.2rem',
          arr: [
            'DCCCL, MD, MMMCCC, CCCXXX, CCCXXIX',
            'DLCCC, DM, MMMLD, CCCXXL, CCVV'
          ]
        },
        {
          fontSize: '1.2rem',
          arr: [
            'MCCLXXXVIII, MMDCCCXCVII, MCCCXXX, MMMCMLXXXVII, ',
            'MCCLLXXX, MMMCCCDXVII, MMCCDD, MMCMLVIIX, MDCMXCV'
          ]
        }
      ]
    }
  ]
};
