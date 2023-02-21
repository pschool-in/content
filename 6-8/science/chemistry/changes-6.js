export default {
    id: 'changes-6',
    label: 'Changes',
    lockAfter: 4,
    list: [
      {
        id: 'notes',
        label: 'Changes Around us - Reading',
        type: 'passage',
        data: {
          text: `# Can all changes be reversed?
          Some changes can be reversed and some cannot be reversed. Those changes which cannot be reversed are called irreversible changes.
          
          # Other ways to bring a change
          Iron structures are heated to fit them into wooden handle. Iron expands on heating. Metal rim is also mounted on wooden wheel with the same technique. Cold water is used to contract the metal and fit tightly onto the wheel. Water can be changed to vapour by heating. Candle melts on heating. A small quantity of curd is added to warm milk. The milk is stirred and is set aside for a few hours at a warm place. In a few hours, the milk changes into curd.  `,
          title: 'Changes Around Us'
        }
      },
      {
        label: 'Fill in the blanks',
        type: 'matchByDragDrop',
        id: 'match-drag-drop-1',
        data: {
          styles: {
            fontSize: '1rem',
            dashWidth: 80
          },
          text: `On heating iron it *expands*.
          Cold water is used to *contract* iron.
          Water turns to vapour by the process of *evapouration*.
          Souring of milk is an *irreversible* change.
          Streching of rubber band is a *reversible* change.`
        }
      },
      {
        id: 'fillup',
        label: 'Fill Up',
        type: 'fillup',
        data: {
          title: 'Click the blanks and fill it with the right word.',
          text: `Drying of clothes is an *reversible (irreversible)* process.
          Knitting of sweater from woollen yarn is an *reversible (irreversible)* process.
          The sawing of a peice of wood is an *irreversible (reversible)* process.
          The cooking of food is an *irreversible (reversible)* process.
          Ripening of mango is an *irreversible (reversible)* process.`
        }
      },
      {
        id: 'yes-no',
        label: 'Yes or No',
        type: 'classifySentence',
        data: {
          title: 'Are the following processes reversible?',
          types: [
            {
              name: 'Yes',
              text: ` Wet clothes to dry clothes.
              Woollen yarn to knitted sweater.
              Cold milk to hot milk.
              Straight sting to coiled string.
              Streched rubber band to its normal size.
              Ice cream to molten ice cream.`
            },
            {
              name: 'No',
              text: ` Raw egg to boiled egg.
              Batter to idli.
              Grain to flour.
              Bud to flower.
              Milk to paneer.
              Cow dung to biogas.`
            }
          ]
        }
      },
      {
        id: 'reversible-irreversible',
        label: 'Recycle or Reuse',
        type: 'classifySentence',
        data: {
          title: 'Classify based on the reversiblity of the process.',
          types: [
            {
              name: 'Reversible',
              text: ` Melting of ice into water.
              Drying of clothes.
              Streching of rubber band.`
            },
            {
              name: 'Irreversible',
              text: `The sawing of a peice of wood.
              The cooking of food.
              Ripening of mango.
              Souring of milk.`
            }
          ]
        }
      },
      {
        id: 'true-false',
        label: 'True or False',
        type: 'classifySentence',
        data: {
          title: 'True or False',
          types: [
            {
              name: 'True',
              text: ` Only some changes are reversible.
              Changes that cannot be reversed are said to be irreversible.`
            },
            {
              name: 'False',
              text: `All changes can be reversed.
              Iron has no changes on heating.
              Cooking of food is a reversible change.`
            }
          ]
        }
      },
      {
        label: 'Name the following',
        type: 'matchByDragDrop',
        id: 'match-drag-drop',
        data: {
          styles: {
            fontSize: '1rem',
            dashWidth: 80
          },
          text: `Procces that can be reversed - *Reversible*
          Process that cannot be reversed - *Irreversibled*
          Change in iron on heating - *Expansion*
          Change in ice or candle on heating - *Melting*
          Change of water into vapour - *Evapouration*`
        }
      },
      {
        id: 'fillup-2',
        label: 'Is it reversible or not?',
        type: 'fillup',
        data: {
          title: 'Click the blanks and fill it with the right word.',
          text: `Souring of milk is an *irreversible (reversible)* process.
          Heating of milk  is an *reversible (irreversible)* process.
          Coiling of a string  is an *reversible (irreversible)* process.
          Streching of rubber band  is an *reversible (irreversible)* process.
          Melting of ice cream  is an *reversible (irreversible)* process.`
        }
      },
      {
        id: 'mcq',
        label: 'Multiple Choice Questions',
        type: 'mcq',
        data: {
          title: 'Multiple Choice Questions',
          questions: [
            {
              qText: 'What are the changes that can be reversed called?',
              options: `Reversible changes, Irreversible changes, Contraction, Evaporation`
            },
            {
              qText: 'A process in which an object becomes smaller or shrinks is called',
              options: `Using contraction, chemical change, irreversible change, expansion`
            },
            {
              qText: 'Temperature at which a solid starts melting is called its',
              options: `melting point, boiling point, freezing point, slow change`
            },
            {
                qText: 'The change in which chemical properties of a substance change is called',
                options: `chemical change, physical change, heating, pressure`
            },
            {
                qText: 'Which is a way to make change happen?',
                options: `Heating a substance, Cooling a substance, Mixing a substance, *All of these`
            },
            {
                qText: 'The melting of gold is an example of:',
                options: `physical change, chemical change, both of these, none of these`
            },
            {
                qText: 'Which is not a sign of reversible change?',
                options: `Change in property, Change in state, Change in size, Change in appearance`
            }
          ]
        }
      },
      {
        id: 'mcq-2',
        label: 'Answer the following',
        type: 'mcq',
        data: {
          title: 'Multiple Choice Questions',
          questions: [
            {
              qText: 'Which of the following changes can be reversed?',
              options: `Wet clothes to dry clothes, Cow dung to biogas, Bud to flower, Raw egg to boiled egg`
            },
            {
              qText: 'A process in which liquid changes into vapour is called',
              options: `evaporation, melting, freezing, contraction`
            },
            {
              qText: 'Rusting of iron is an example of',
              options: `slow change, fast change, reversible change, physical change`
            },
            {
                qText: 'Which of the following changes cannot be reversed?',
                options: `Milk to paneer, Cold milk to hot milk, Yarn to knitted sweater, Wet clothes to dry clothes `
            },
            {
                qText: 'Melting of wax is',
                options: `physical change, chemical change, both of these, none of these`
            },
            {
                qText: 'Burning of paper is',
                options: `chemical change, physical change, reversible, all of these`
            }
          ]
        }
      }
    ]
  };
  