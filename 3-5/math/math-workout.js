export default {
  label: 'Math Workouts',
  id: 'math-workout',
  list: [
    /*
    {
      type: 'workouts',
      id: 'decimal-to-binary',
      label: 'Decimal To Binary',
      data: {
        type: 'decimalToBinary',
        label: 'Decimal To Binary',
        problem: 2020
      }
    },
    */
    {
      type: 'workouts',
      id: 'add',
      label: 'Addition',
      data: {
        type: 'addition',
        label: 'Addition',
        samples: [
          '545+739',
          '222+333',
          '5437000+5437',
          '43324+54345+54332',
          '40.43+34.93',
          '74.5+108+95.05',
          '1004+1.004'
        ]
      }
    },
    {
      type: 'workouts',
      id: 'sub',
      label: 'Subtraction',
      data: {
        type: 'subtraction',
        label: 'Subtraction',
        samples: [
          '3454-2529',
          '77-45',
          '32-19',
          '1000-199',
          '65443-44323',
          '45643-29191'
        ]
      }
    },
    {
      type: 'workouts',
      id: 'multiply',
      label: 'Multiplication',
      data: {
        type: 'multiply',
        label: 'Multiplication',
        samples: [
          '239*23',
          '125*5',
          '55*65',
          '70*45',
          '111*122',
          '248*125',
          '333*333',
          '121*134',
          '2048*1048',
          '245*242',
          '1234*1234',
          '43*1234'
        ]
      }
    },
    {
      type: 'workouts',
      id: 'divide',
      label: 'Divide',
      data: {
        type: 'divide',
        label: 'Divide',
        samples: [
          '1234/2',
          '789/3',
          '453368/4',
          '5405/5',
          '1096/12',
          '1298/12',
          '2432/143',
          '4321/24',
          '6543/25',
          '1525/15',
          '1020/10',
          '1850/18',
          '2342/35',
          '1234/11'
        ]
      }
    },
    {
      type: 'workouts',
      id: 'primeFactors',
      label: 'Prime Factors',
      data: {
        type: 'primeFactors',
        label: 'Prime Factors',
        samples: ['100', '24', '32', '1000', '72', '81', '18']
      }
    },
    {
      type: 'workouts',
      id: 'lcm',
      label: 'LCM',
      data: {
        type: 'lcm',
        label: 'LCM',
        samples: [
          '100,50,80',
          '30,40,80',
          '100,250,500',
          '120,35,86',
          '135,25,120',
          '25,35,45',
          '20,30,50',
          '240,345,560',
          '100,200,300',
          '800,560,780'
        ]
      }
    },
    {
      type: 'workouts',
      id: 'hcf',
      label: 'HCF',
      data: {
        type: 'hcf',
        label: 'HCF',
        samples: [
          '100,50,80',
          '30,40,80',
          '100,250,500',
          '120,35,86',
          '135,25,120',
          '25,35,45',
          '20,30,50',
          '100,200,300',
          '240,345,560',
          '120,230,450'
        ]
      }
    },
    {
      type: 'workouts',
      id: 'divideDecimal',
      label: 'Divide Decimal',
      data: {
        type: 'divideDecimal',
        label: 'Divide Decimal',
        samples: [
          '1096/12',
          '1298/12',
          '2432/143',
          '4321/24',
          '6543/25',
          '1525/15',
          '1020/10',
          '1850/18',
          '2342/35',
          '1234/11'
        ]
      }
    },
    {
      type: 'workouts',
      id: 'square-root',
      label: 'Square Root',
      data: {
        type: 'squareRoot',
        label: 'Square Root',
        samples: [
          '552049',
          '100',
          '256',
          '14400',
          '5625',
          '3025',
          '2048',
          '65536',
          '117649',
          '49284'
        ]
      }
    },
    {
      type: 'workouts',
      id: 'decimal-to-binary',
      label: 'Decimal To Binary',
      data: {
        type: 'decimalToBinary',
        label: 'Decimal To Binary',
        samples: [
          '100',
          '1000',
          '1024',
          '1111',
          '1038',
          '1126',
          '484',
          '786',
          '2020',
          '2048'
        ]
      }
    },
    {
      type: 'workouts',
      id: 'decimal-To-hex',
      label: 'Decimal To Hexadecimal',
      data: {
        type: 'decimalToHex',
        label: 'Decimal To Hexadecimal',
        samples: [
          '90003169',
          '146',
          '482',
          '1784',
          '984',
          '2048',
          '2030',
          '2842',
          '3000',
          '3212'
        ]
      }
    },
    {
      type: 'workouts',
      id: 'binary-to-decimal',
      label: 'Binary To Decimal',
      data: {
        type: 'binaryToDecimal',
        label: 'Binary To Decimal',
        samples: [
          '100',
          '111111',
          '1111100',
          '101010',
          '11001100',
          '00110011',
          '10001110',
          '00011',
          '11100011',
          '00001111'
        ]
      }
    },
    {
      type: 'workouts',
      id: 'hex-to-decimal',
      label: 'Hexadecimal To Decimal',
      data: {
        type: 'hexToDecimal',
        label: 'Hexadecimal To Decimal',
        samples: [
          '100',
          'ff',
          'ff00',
          '7dea',
          'abcdedf',
          'abf200',
          '1ed2',
          'ff111ab',
          '111adca',
          'ffff'
        ]
      }
    }
  ]
};
