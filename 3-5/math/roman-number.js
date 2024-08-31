export default {
  label: 'Roman Number',
  id: 'roman-number',
  list: [
    {
      label: 'Roman Numbers 1 to 100',
      type: 'passage',
      id: 'notes',
      data: {
        title: 'Quick Notes',
        text: [
          `Roman numerals represent a number system that uses letters to express numbers collectively. The ancient Romans used the letters I, V, X, L, C etc to write numbers.
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
XXXIII — 33
XXXIV — 34`,

              `XXXV — 35
XXXVI — 36
XXXVII — 37
XXXVIII — 38
XXXIX — 39
XLIV — 44
XLIX — 49
XCIII — 93
XCIX — 99
XCVII — 97`
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
        `II, 2
VII, 7
IV, 4
X, 10
V, 5`,

        `C, 100
L, 50
XL, 40
LX, 60
X, 10`,

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
LIX, 59
LIV, 54
XCV, 95
LXX,70`,

`XLII , 42
LV11 , 57
LXIII , 63
LXXXIX , 89
LXXVII , 77`,
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

        `C, XC, XCV, XCIX
XC, XL, LXXXIX, LV
XLIX, XXXV, XXVIII, XLIV
LXXXIX, LXXIX, LXV, LXXXVIII
XXX, XXIX, XXVIII, XXIV`
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

        `VI, XV, X, IX
X, XX, XI,XIX
III, XXIX, VIII, XVI
VI, XXIII, XII, XVII
IX, XXX, XXV, XIX`,

        ` XI, L, XL, XXXVIII
XXIX, XL, LX, L
XXXIX, LXVI, LVI, XLIX
XIV, LIX, L, XXIX
XXII, LXIII, LVI, XXVI`
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

        `X, XI, XVI, XXI, XXX
IX, XV, XXI, XXIX, XXXV
XVIII, XX, XXI, XL, XLI
X, XI, XXII, XXIX, XL
II, VIII, XV, XIX, XXII`,

        `XL, L, LX, LXXX, XCI
XXX, XLIX, LXXX, XCI, XCIX
XXV, XLVIII, LX, LXXXI, LXXXV
LX, LXXI, XC, XCI, C
LI, LX, LXII, LXXX, XCI`
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
        `LI, XLIV, XXXV, XIV, III
LXII, XLIX, XXV, XII, VIII
LXXI, LXIV, XLVI, XXIX, XIV
L, XLVI, XXXV, XXIV, XXI
XC, LXI, LI, XLI, XXX`,

        `XXX, XXI, XVI, XI, X
XXXV, XXIX, XXI, XV, IX
XLI, XL, XXI, XX, XVIII
XL, XXIX, XXII, XI, X
XXII, XIX, XV, VIII, II`,

        `XCI, LXXX, LX, L, XL
XCIX, XCI, LXXX, XLIX, XXX
LXXXV, LXXXI, LX, XLVIII, XXV
C, XCI, XC, LXXI, LX
XCI, LXXX, LXII, LX, LI`
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
        `XXX | 30
XL | 40
XXIV | 24
XIX | 19
VIII | 8`,

        `LXX | 70
LXXIX | 79
XLVII | 47
XIX | 19
VII | 7`,

        `IX | 9
XIII | 13
XXII | 22
XXXIV | 34
XLIX | 49`,

        `LXXV | 75
XC | 90
XCV | 95
XCIX | 99
XCIV | 94`,

`XLII | 42
LV11 | 57
LXIII | 63
LXXXIX | 89
LXXVII | 77`,

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
        `30 | XXX
40 | XL 
24 | XXIV
19 | XIX 
8 | VIII `,

        `70 | LXX
79 | LXXIX
47 | XLVII
19 | XIX
7 | VII`,

        `9 | IX
13 | XIII
22 | XXII
34 | XXXIV
49 | XLIX`,

        `75 | LXXV
90 | XC
95 | XCV
99 | XCIX
94 | XCIV`
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
          arr: ['II, XX, C, V, L', 'LL, VV, A, B, E']
        },
        {
          arr: ['XL, IV, VI, XXXV, XIX', 'IIV, VX, XXL, XXXX, IXI']
        },
        {
          arr: ['XCIX, XVIII, LXXX, XL, XLIX', 'XCXI, VXIII, LVX, XLXI, LVV']
        }
      ]
    }
  ]
};
