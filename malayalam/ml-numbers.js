export default {
  label: 'Numbers',
  id: 'ml-numbers',
  lockAfter: 100,
  list: [
    {
      id: 'match',
      type: 'match',
      label: 'Match the Numbers',
      commonData: {
        title: 'Match the Numbers',
        fontSize: '1.5rem'
      },
      data: [
        `ഒന്ന്, 1
രണ്ട്, 2
മൂന്ന്, 3
നാല്, 4
അഞ്ച്, 5 `,

        `ആറ്, 6
ഏഴ്, 7
എട്ട്, 8
ഒമ്പത്, 9
പത്ത്, 10`,

        `പതിനൊന്ന്, 11
പന്ത്രണ്ട്, 12
പതിമൂന്ന്, 13
പതിനാല്, 14
പതിനഞ്ച്, 15`,

        `പതിനാറ്, 16
പതിനേഴു, 17
പതിനെട്ട്, 18
പത്തൊൻപത്, 19
ഇരുപത്, 20`,

        `പത്ത്, 10
ഇരുപത്, 20
മുപ്പത്, 30
നാല്പത്, 40
അമ്പത്, 50`,

        `അറുപത്, 60
എഴുപത്, 70
എൺപത്, 80
തൊണ്ണൂറ്, 90
നൂറ്, 100`
      ]
    },
    {
      id: 'connect',
      type: 'sequence',
      label: 'Connect Letters',
      lockAfter: 2,
      commonData: {
        title: 'Connect letters and find the number.',
        lang: 'ml'
      },
      data: [
        'ഒന്ന്, രണ്ട്, മൂന്ന്, നാല്, അഞ്ച്',

        'ആറ്, ഏഴ്, എട്ട്, ഒമ്പത്, പത്ത്',

        'പതിനൊന്ന്, പന്ത്രണ്ട്, പതിമൂന്ന്, പതിനാല്, പതിനഞ്ച്',

        'പതിനാറ്, പതിനേഴു, പതിനെട്ട്, ഇരുപത്തൊമ്പത്, ഇരുപത്',

        'പത്ത്, ഇരുപത്, മുപ്പത്, നാല്പത്, അമ്പത്',

        'അറുപത്, എഴുപത്, എൺപത്, തൊണ്ണൂറ്, നൂറ്'
      ]
    },
    {
      label: 'Arrange Numbers ',
      type: 'sorting',
      id: 'sort',
      commonData: {
        title: 'Arrange Numbers from the Smallest to the Biggest'
      },
      data: [
        'ഒന്ന്, രണ്ട്, മൂന്ന്, നാല്, അഞ്ച്',

        'ആറ്, ഏഴ്, എട്ട്, ഒമ്പത്, പത്ത്',

        'പതിനൊന്ന്, പന്ത്രണ്ട്, പതിമൂന്ന്, പതിനാല്, പതിനഞ്ച്',

        'പതിനാറ്, പതിനേഴു, പതിനെട്ട്, ഇരുപത്തൊമ്പത്, ഇരുപത്',

        'പത്ത്, ഇരുപത്, മുപ്പത്, നാല്പത്, അമ്പത്',

        'അറുപത്, എഴുപത്, എൺപത്, തൊണ്ണൂറ്, നൂറ്'
      ]
    },
    {
      id: 'match-2',
      type: 'match',
      label: 'Match Numbers - 2',
      commonData: {
        title: 'Match Numbers',
        fontSize: '1.5rem'
      },
      data: [
        `ഇരുപത്തിയൊന്ന്, 21
ഇരുപത്തിരണ്ട്, 22
ഇരുപത്തി മൂന്ന്, 23
ഇരുപത്തിനാല്, 24
ഇരുപത്തഞ്ച്, 25`,

        `മുപ്പത്തിയഞ്ച്, 35
മുപ്പത്തിയാറ്, 36
മുപ്പത്തിയേഴ്, 37
മുപ്പത്തി എട്ട്, 38
മുപ്പത്തി ഒമ്പത്, 39`,

        `നാല്പത്തി ഒന്ന്, 41
നാല്പത്തി രണ്ട്, 42
നാല്പത്തി മൂന്ന്, 43
നാല്പത്തിനാല്, 44
നാൽപ്പത്തിയഞ്ച്, 45`,

        `അമ്പത്തി അഞ്ച്, 55
അമ്പത്തിയാറ്, 56
അമ്പത്തി ഏഴ്, 57
അമ്പത്തി എട്ട്, 58
അമ്പത്തി ഒമ്പത്, 59`,

        `അറുപത്തിയൊന്ന്, 61
അറുപത്തി രണ്ട്, 62
അറുപത്തി മൂന്ന്, 63
അറുപത്തിനാല്, 64
അറുപത്തി അഞ്ച്, 65`,

        `എഴുപത്തിയഞ്ച്, 75
        എഴുപത്തിത്താർ, 76
        എഴുപത്തി ഏഴ്, 77
എഴുപത്തി എട്ട്, 78
എഴുപത്തി ഒമ്പത്, 79`,

        `എൺപത്തി ഒന്ന്, 81
എൺപത്തി രണ്ട്, 82
എൺപത്തിമൂന്ന്, 83
എൺപത്തിനാല്, 84
എൺപത്തിയഞ്ച്, 85`,

        `തൊണ്ണൂറ്റഞ്ച്, 95
തൊണ്ണൂറ്റി ആറ് , 96
തൊണ്ണൂറ്റി ഏഴ് , 97
തൊണ്ണൂറ്റി എട്ട്, 98		
തൊണ്ണൂറ്റി ഒമ്പത്, 99`,

        `മുപ്പത്തിയേഴ്, 37
നാല്പത്തിയേഴ്, 47
അമ്പത്തി ഏഴ്, 57
അറുപത്തി ഏഴ്, 67
എഴുപത്തി ഏഴ്, 77`,

        `നാല്പത്തി ഒന്ന്, 41
അമ്പത്തിയൊന്ന്, 51
അറുപത്തിയൊന്ന്, 61
എഴുപത്തി ഒന്ന്, 71
എൺപത്തി ഒന്ന്, 81`,

        `അമ്പത്തി ഒമ്പത്, 59
അറുപത്തി ഒമ്പത്, 69
എഴുപത്തി ഒമ്പത്, 79
എൺപത്തി ഒമ്പത്, 89
തൊണ്ണൂറ്റി ഒമ്പത്, 99`,

        `നാല്പത്തിനാല്, 44
അമ്പത്തിനാല്, 54
അറുപത്തിനാല്, 64
നാല്പത്തിയേഴ്, 47
എൺപത്തി നാല്, 84`
      ]
    },
    {
      label: 'Arrange Numbers - 2',
      type: 'sorting',
      id: 'sort-2',
      commonData: {
        title: 'Arrange Numbers from the Smallest to the Biggest'
      },
      data: [
        'ഇരുപത്തിയൊന്ന്, ഇരുപത്തിരണ്ട്, ഇരുപത്തി മൂന്ന്, ഇരുപത്തിനാല്, ഇരുപത്തിയഞ്ച്',

        'മുപ്പത്തിയഞ്ച്, മുപ്പത്തിയാറ്, മുപ്പത്തിയേഴ്, മുപ്പത്തിയെട്ട്, നാൽപ്പത്തി ഒമ്പത്',

        'നാൽപ്പത്തി ഒന്ന്, നാല്പത്തി രണ്ട്, നാല്പത്തി മൂന്ന്, നാല്പത്തിനാല്, നാല്പത്തിയഞ്ച്',

        'ഇരുപത്തിയെട്ട്, അമ്പത്, അമ്പത്താറ്, അമ്പത് ഏഴ്, അറുപത്തി ഒമ്പത്',

        'അറുപത്തി ഒന്ന്, അറുപത്തി രണ്ട്, അറുപത്തി മൂന്ന്, അറുപത്തിനാല്, അറുപത്തി അഞ്ച്',

        'എഴുപത്തിയഞ്ച്, എഴുപത്തിയാറ്, എഴുപത്തി ഏഴ്, എഴുപത്തി എട്ട്, എഴുപത്തി ഒമ്പത്',

        'എൺപത്തി ഒന്ന്, എൺപത്തി രണ്ട്, എൺപത്തി മൂന്ന്, എൺപത്തിനാല്, എൺപത്തി അഞ്ച്',

        'മുപ്പത്തിയേഴു, നാല്പത്തിയേഴു, അൻപത്തിയേഴു, അറുപത്തിയാറു, എഴുപത്തിയേഴു',

        'നാൽപ്പത്തിയൊന്ന്, അമ്പത്തിയൊന്ന്, അറുപത്തിയൊന്ന്, എഴുപത്തിയൊന്ന്, എൺപത്തിയൊന്ന്',

        'നാൽപ്പത്തി നാല്, അമ്പത്തിനാല്, അറുപത്തിനാല്, എഴുപത്തിനാല്, എൺപത്തിനാല്'
      ]
    },
    {
      type: 'numberInput',
      id: 'number-names',
      label: 'Write the Number',
      commonData: {
        title: 'Write the Number',
        fontSize: '1.6rem',
        type: 'word-problem'
      },
      data: [
        `പതിനാറ് | 16
നാല്പത് | 40
മുപ്പത്തി ഒമ്പത് | 39
നൂറ് | 100
പതിമൂന്ന് | 13`,

        `അമ്പത്തിനാല് | 54
നാല്പത്തിയഞ്ച് | 45
അറുപത്തി രണ്ടു| 62
എഴുപത്തി എട്ട് | 78
തൊണ്ണൂറ്റി ആറ്| 96`,

        `തൊണ്ണൂറ്റി ഒമ്പത് | 99
എൺപത്തിനാല് | 84
എഴുപത്തി ഏഴ് | 77
മുപ്പത്തിയേഴ് | 37
അമ്പത്തി അഞ്ച് | 55`,

        `എൺപത്തിയെട്ട് | 88
മുപ്പത്തിമൂന്ന് | 33
എഴുപത്തിയാറ് | 76
അറുപത്തിയൊന്ന് | 61
എഴുപത്തി ഒമ്പത് | 79`,

        `തൊണ്ണൂറ്റി ഏഴ് | 97
എൺപത്തി രണ്ട് | 82
എഴുപത്തിയഞ്ച് | 75
അറുപത്തിയഞ്ച് | 65
അമ്പത്തി എട്ട് | 58`,

        `എൺപത്തിയഞ്ച് | 85
എഴുപത്തിരണ്ട് | 72
അറുപത്തിയാറ് | 66
തൊണ്ണൂറ്റി അഞ്ച് | 95
അമ്പത്തിയൊന്ന് | 51`
      ]
    }
  ]
};
