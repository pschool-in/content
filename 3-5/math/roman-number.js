export default {
  label: 'Roman Number',
  id: 'roman-number',
  list: [
    {
      label: 'Roman Numbers 1 to 50',
      type: 'passage',
      id: 'notes-1',
      data: {
        title: 'Quick Notes',
        text: [
          `Roman numerals represent a number system that uses letters to express numbers collectively. The ancient Romans used the letters I, V, X, L, C, D, and M to write numbers.
The first 20 Roman Numbers are given below.`,
          {
            type: 'table',
            text: [
              `I — 1
II — 2
III — 3
IV — 4
V — 5
VI — 6
VII — 7
VIII — 8
IX — 9
X — 10`,

              `XI — 11
XII — 12
XIII — 13
XIV — 14
XV — 15
XVI — 16
XVII — 17
XVIII — 18
XIX — 19
XX — 20`
            ]
          },
          `Some more Roman numbers.`,
          {
            type: 'table',
            text: [
              `XXX — 30
XL — 40
L — 50
LX — 60
LXX — 70
LXXX — 80
XC — 90
C — 100
CC — 200
CCC — 300`,

              `CCCXXXIII — 333
CCCLXXXVIII — 388
CD — 400
D — 500
DCCC — 800
CM — 900
M — 1000
MI — 1001
MMM — 3000
MMMCDXLIV — 3444`
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
        `C, 100
L, 50
D, 500
M, 1000
X, 10`,

        `II, 2
VII, 7
IV, 4
X, 10
V, 5`,

        `XI, 11
XIII, 13
XIX, 19
XVI, 16
XX, 20`,

        `XXVIII, 28
XXI, 21
XXX, 30
XLVIII, 48
LXX, 70`,

        `XC, 90
L, 50
XLI, 41
CL, 150
LX,60`,

        `M, 1000
DCL, 650
CCC, 300
CML, 950
D, 500`
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
        `XV, X, IX, VI
XX, XI, X, XIX
XXIX, VIII, III, XVI
XXIII, XII, VI, XVII
XXX, XXV, XIX, IX`,

        `L, XL, XXXVIII, XI
LX, L, XL, XXIX
LXVI, LVI, XLIX, XXXIX
LIX, L, XXIX, XIV
LXIII, LVI, XXVI, XXII`,

        `LXXXIX, LXXV, LVII, XLIX
LXXV, LXIX, LIV, XLIX
LXXXVII, LVI, XXXVI, XL
XC, LXXX,LX, XL
LXX, XL, L, XX`,

        `D, XCI, CD, CL
DC, DL, CCCL, CDL
M, CML, DC, CL
DCCCL, DCL, CDL, XC
DCC, CCCL, LXXX, LX`,

        `CML, C, XC, LX
XCIX, LXXX, LIII, XLIX
CM, DCC, CCCL, XC
DCC, DL, CCL, XC
CD, XC, C, CL`
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
        `IX, XIX, XXI, XXX
II, XIV, XX, VIII
XV, XX, XL, L
VIII, XXVIII, XLV, LI
X, XXXI, XLIII, LXXX`,

        `XI, XXXVIII, XLIX, L
XLI, L, LXX, XCVII
LXXXV, XCV, CC, DC
XX, XLIX, XC, LXXX
LI, LXX, XCVI, LXXXV`,

        `L, C, CML, D
LXX, XCI, XC, LXXIX
XCI, XCIX, M, DC
XXX, XL, XLV, LXI
XXXI, XLIV, LXII, XC`,

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
        `III, XIV, XXXV, XLIV, LI
VIII, XII, XXV, XLIX, LXII
XIV, XXIX, XLVI, LXIV, LXXI
XXI, XXIV, XXXV, XLVI, L
XXX, XLI, LI, LXI, XC`,

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
        `XXX, XXI, XVI, XI, X
XXXV, XXIX, XXI, XV, IX
XLI, XL, XXI, XX, XVIII
XL, XXIX, XXII, XI, X
XXII, XIX, XV, VIII, II`,

        `XCI, LXXX, LX, L, XL
CCC, XCI, LXXX, XLIX, XXX
DL, LXXXI, LX, XLVIII, XXV
C, XCI, XC, LXXI, LX
XCI, LXXX, LXII, LX, LI`,

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
CDL, XC, LV, L, XL`
      ]
    },
    {
      type: 'numberInput',
      id: 'number-names',
      label: 'Write the Numbers',
      commonData: {
        title: 'Convert Roman numbers to Decimal numbers',
        type: 'word-problem',
        firstLineFontSize: '2.5rem'
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
    }
  ]
};
