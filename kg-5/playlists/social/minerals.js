export default {
  label: 'Minerals - under our feet',
  id: 'minerals',
  list: [
    {
      label: 'Wealth under the Ground - Reading',
      type: 'passage',
      id: 'reading',
      data: {
        title: 'Wealth under the Ground',
        text: `Lot of things we use are extracted from ground and they are generally known as minerals. The activity of extracting minerals from earth is known as mining.
Minerals are of two kinds, namely metallic and non-metallic. Iron, copper and gold are the important metallic minerals. Petroleum and coal are the important non-metallic minerals.
India is rich in mineral wealth. Iron ore are present in large quantity and India is a major exporter of Iron. It is used in industries, and making machine parts.
Aluminium is light-weight in nature, and it is extracted from Bauxite ore. Aluminium is used in making aircraft, vessels, etc.
Copper was the first  metal used by human beings. It is widely used in electrical equipments.
Coal is primarily used as fuel and also used in generating electricity.
Petroleum is a natural resource. The by-products of petroleum are petrol, diesel and kerosene. They are mainly used as fuel and generating energy. In India petroleum is found under sea near Mumbai. But we majorly import petroleum from other countries.
Indians love gold ornaments and objects made of gold. India majorly imports gold.
# Conserving our minerals
Our minerals are being consumed so rapidly that there is a danger of their running out. We must save them and use them wisely.
Alternate sources of energy and fuel are being considered.  Chief among them are solar and wind energy. This aims at conserving the available mineral resources from being rapidly depleted.`
      }
    },
    {
      label: 'Minerals - MCQ',
      type: 'mcq',
      id: 'mcq',
      data: {
        title: 'Multiple Choice Question',
        questions: [
          {
            qText: 'Which metal is used in constucting bridges?',
            options: 'Iron, Copper, Gold, Aluminium'
          },
          {
            qText: 'Which mineral is found under sea, near Mumbai?',
            options: 'Petroleum, Goal, Coal, Iron'
          },
          {
            qText: 'Which of the following is a natural resourse?',
            options: 'Petroleum, Disel, Petrol, Kerosene'
          },
          {
            qText: 'Which metal was first discovered by human beings?',
            options: 'Copper, Stone, Iron, Aluminium'
          },
          {
            qText: 'Aircrafts are made using ________.',
            options: 'Aluminium, Steel, Iron, Plastic'
          },
          {
            qText: 'Which mineral is used in generating electricity? ',
            options: 'Coal, Petroleum, Iron, Wood'
          }
        ]
      }
    },
    {
      label: 'Minerals vs Non-minerals',
      type: 'group',
      id: 'classify',
      data: {
        label: 'Minerals vs Non-minerals',
        types: [
          {
            name: 'Minerals',
            text: 'petroleum, gold, copper, coal'
          },
          {
            name: 'Non-minerals',
            text: 'cotton, wool, leather, carrot'
          }
        ]
      }
    }
  ]
};
