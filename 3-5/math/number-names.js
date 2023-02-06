export default {
  label: 'Number Names',
  id: 'number-names',
  list: [
    {
      type: 'rightOne',
      label: 'Identify Numbers',
      id: 'sound-numbers',
      commonData: {
        title: 'Listen to the sound and click on the number.',
        type: 'words',
        audio: 'math/no-1-50.mp3'
      },
      data: [
        {
          audioOffset: 0,
          words: 'one, two, three, four, five, six, seven, eight, nine, ten'
        },
        {
          audioOffset: 20,
          words:
            'eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen, twenty'
        },
        {
          audioOffset: 40,
          words:
            'twenty-one, twenty-two, twenty-three, twenty-four, twenty-five, twenty-six, twenty-seven, twenty-eight, twenty-nine, thirty'
        },
        {
          audioOffset: 60,
          words:
            'thirty-one, thirty-two, thirty-three, thirty-four, thirty-five, thirty-six, thirty-seven, thirty-eight, thirty-nine, forty'
        },
        {
          audioOffset: 80,
          words:
            'forty-one, forty-two, forty-three, forty-four, forty-five, forty-six, forty-seven, forty-eight, forty-nine, fifty'
        }
      ]
    },
    {
      type: 'rightOne',
      label: 'Identify Numbers - 2',
      id: 'sound-numbers-2',
      commonData: {
        title: 'Listen to the sound and click on the number.',
        type: 'words',
        audio: 'math/no-51-100.mp3'
      },
      data: [
        {
          audioOffset: 0,
          words:
            'fifty-one, fifty-two, fifty-three, fifty-four, fifty-five, fifty-six, fifty-seven, fifty-eight, fifty-nine, sixty'
        },
        {
          audioOffset: 20,
          words:
            'sixty-one , sixty-two , sixty-three, sixty-four , sixty-five , sixty-six , sixty-seven , sixty-eight , sixty-nine , seventy'
        },
        {
          audioOffset: 40,
          words:
            'seventy-one , seventy-two , seventy-three , seventy-four , seventy-five  , seventy-six , seventy-seven , seventy-eight , seventy-nine , eighty'
        },
        {
          audioOffset: 60,
          words:
            'eighty-one, eighty-two, eighty-three, eighty-four, eighty-five, eighty-six, eighty-seven , eighty-eight , eighty-nine ,  ninety'
        },
        {
          audioOffset: 80,
          words:
            'ninety-one, ninety-two, ninety-three, ninety-four, ninety-five, ninety-six, ninety-seven, ninety-eight, ninety-nine, hundred'
        }
      ]
    },
    {
      type: 'numberInput',
      id: 'number-names',
      label: 'Write the Number',
      commonData: {
        title: 'Write the Number',
        type: 'word-problem'
      },
      data: [
        `Hundred and five | 105
Hundred and fifty | 150
Hundred and twenty | 120
Hundred and seven | 107
Hundred and ninety nine | 199`,

        `Two hundred and fifty two | 252
Two hundred and nine | 209
Two hundred and two | 202
Two hundred and seventy seven | 277
Two hundred and ninety two | 292`,

        `Three hundred and one | 301
Three hundred and forty nine | 349
Three hundred and sixty two | 362
Three hundred and fifty seven | 357
Three hundred and thirty three | 333`,

        `Four hundred and forty | 440
Four hundred and seventy nine | 479
Four hundred and six | 406
Four hundred and ninety four | 494
Four hundred and fifty five | 455`,

        `Five hundred and sixty eight | 568
Five hundred and twenty nine | 529
Five hundred and fifty six | 556
Five hundred and eighty | 580
Five hundred and five | 505`
      ]
    }
  ]
};
