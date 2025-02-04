import math2 from './math2.js';
export default {
  id: 'math',
  label: 'Maths',
  list: [
    {
      label: 'Math Showcase',
      id: 'maths-sc',
      grade: '0-8'
    },
    {
      label: 'KG Math',
      id: 'kg-math',
      grade: '0-0'
    },
    {
      label: 'Math - Shapes',
      id: 'shapes',
      grade: '0-0'
    },
    {
      label: 'Mixed Math',
      id: 'mixed-math',
      grade: '0-1'
    },
    {
      label: 'Mixed Math 2',
      id: 'mixed-math-2',
      grade: '2-3'
    },
    { label: 'Basic Numbers', id: 'kg-numbers', grade: '0-1' },
    {
      label: 'Compare Numbers',
      id: 'numbers',
      grade: '0-1'
    },
    { label: 'Number Names', id: 'number-names', grade: '0-2' },
    {
      label: 'Math Maze',
      id: 'math-maze',
      grade: '0-2'
    },
    {
      label: 'Maze - Multiples',
      id: 'math-maze-2',
      grade: '1-3'
    },
    {
      label: 'Numbers - 2',
      id: 'numbers-2',
      grade: '2-4'
    },
    {
      label: 'Tables: 2 to 5',
      id: 'tables',
      grade: '0-1'
    },
    {
      label: 'Tables: 6 to 10',
      id: 'tables-2',
      grade: '1-3'
    },
    {
      label: 'Tables: 11 to 15',
      id: 'tables-3',
      grade: '3-5'
    },
    {
      label: 'Arithmetic',
      id: 'arithmetic',
      grade: '0-1'
    },
    {
      label: 'Arithmetic - 2',
      id: 'arithmetic-2',
      grade: '1-3'
    },
    {
      label: 'Arithmetic - 3',
      id: 'arithmetic-3',
      grade: '3-5'
    },
    {
      label: 'Arithmetic - 4',
      id: 'arithmetic-4',
      grade: '3-5'
    },
    {
      label: 'Arithmetic - 5',
      id: 'arithmetic-5',
      grade: '4-6'
    },
    {
      label: 'Math - 1',
      id: 'math-1',
      grade: '1-2'
    },
    {
      label: 'Math - 2',
      id: 'math-2',
      grade: '2-4'
    },
    {
      label: 'Balance Numbers',
      id: 'balance-numbers',
      grade: '2-4'
    },
    {
      label: 'Balance Numbers - 2',
      id: 'balance-numbers-2',
      grade: '4-5'
    },
    {
      label: 'Math Puzzle - 3',
      id: 'math-puzzle-3',
      grade: '2-5'
    },
    {
      label: 'Math Puzzle - 4',
      id: 'math-puzzle-4',
      grade: '2-5'
    },
    {
      label: 'Math Puzzle - 5',
      id: 'math-puzzle-5',
      grade: '2-5'
    },
    {
      label: 'Word Problems - 1',
      id: 'word-problems-1',
      grade: '1-2'
    },
    {
      label: 'Word Problems',
      id: 'word-problems',
      grade: '3-5'
    },
    {
      label: 'Basic Money',
      id: 'money-2',
      grade: '1-4'
    },
    {
      label: 'Financial Literacy',
      id: 'money-4',
      grade: '3-5'
    },
    {
      label: 'Money',
      id: 'money',
      grade: '4-5'
    },
    {
      label: 'Money - 3',
      id: 'money-6',
      grade: '5-7'
    },
    {
      label: 'Big Numbers',
      id: 'big-num',
      grade: '4-7'
    },
    {
      label: 'Fraction',
      id: 'fraction',
      grade: '3-5'
    },
    {
      label: 'Compare Fraction',
      id: 'fraction-compare',
      grade: '5-6'
    },
    {
      label: 'Measurement',
      id: 'measurement',
      grade: '3-5'
    },
    {
      label: 'Area & Perimeter from Figure',
      id: 'area-perimeter-fig',
      grade: '4-5'
    },
    {
      label: 'Place Value',
      id: 'place-value',
      grade: '3-5'
    },
    {
      label: 'Place Value - 2',
      id: 'place-value-2',
      grade: '4-5'
    },
    {
      label: 'Geometry',
      id: 'geometry',
      grade: '2-3'
    },
    {
      label: 'Geometry - 2',
      id: 'geometry-2',
      grade: '4-5'
    },

    {
      label: 'Missing Workout',
      id: 'missing-workout',
      grade: '4-5'
    },
    {
      label: 'Missing Workout - 2',
      id: 'missing-workout-2',
      grade: '4-5'
    },
    {
      label: 'Missing Workout - 3',
      id: 'missing-workout-3',
      grade: '5'
    },
    {
      label: 'Area and Perimeter',
      id: 'area-perimeter',
      grade: '4-5'
    },
    {
      label: 'Picture Puzzle',
      id: 'picture-puzzle',
      grade: '4-5'
    },
    {
      label: 'Data Handling for Kids',
      id: 'data-handling-2',
      grade: '0-2'
    },
    {
      label: 'Information Processing',
      id: 'information-3',
      grade: '2-4'
    },
    {
      label: 'Information Processing - 2',
      id: 'information',
      grade: '3-5'
    },
    {
      label: 'Time Based Problems',
      id: 'time',
      grade: '3-5'
    },
    {
      label: 'Quick Math - 3',
      id: 'quick-math-3',
      grade: '3-5'
    },
    {
      label: 'Quick Math - 4',
      id: 'quick-math-4',
      grade: '3-5'
    },
    {
      label: 'Quick Math - 5',
      id: 'quick-math-5',
      grade: '3-5'
    },
    {
      label: 'Math Machine',
      id: 'math-machine',
      grade: '3-5'
    },
    {
      label: 'Number Series',
      id: 'number-series',
      grade: '0-3'
    },
    {
      label: 'Number Series - 2',
      id: 'number-series-2',
      grade: '2-5'
    },
    {
      label: 'Number Series - 3',
      id: 'number-series-3',
      grade: '5-8'
    },
    {
      label: 'Roman Number System',
      id: 'roman-number',
      grade: '4-5'
    },
    {
      label: 'Roman Number System - 2',
      id: 'roman-number-2',
      grade: '5-6'
    },
    {
      label: 'Least Common Multiple (LCM)',
      id: 'lcm',
      grade: '4-7'
    },
    {
      label: 'Highest Common Factor (HCF)',
      id: 'hcf',
      grade: '4-7'
    },

    {
      label: 'Percentage',
      id: 'percentage',
      grade: '4-6'
    },
    {
      label: 'Percentage - 7',
      id: 'percent-7',
      grade: '6-8'
    },
    {
      label: 'Ratio',
      id: 'ratio',
      grade: '4-6'
    },

    {
      label: 'Algebra',
      id: 'algebra',
      grade: '4-6'
    },
    {
      label: 'Profit and Loss',
      id: 'profit-loss',
      grade: '4-6'
    },

    {
      label: 'Prime Numbers',
      id: 'prime-numbers',
      grade: '5-8'
    },
    {
      label: 'Composite Numbers',
      id: 'composite-numbers',
      grade: '5-8'
    },
    {
      label: 'Square Numbers',
      id: 'square-numbers',
      grade: '5-8'
    },
    {
      label: 'Exponents and Powers',
      id: 'exponents-powers',
      grade: '6-8'
    },

    {
      label: 'Number Line - 1',
      id: 'numberline',
      grade: '1-3'
    },
    {
      label: 'Number Line - 2',
      id: 'numberline-4',
      grade: '4-6'
    },
    {
      label: 'Number Line - 3',
      id: 'numberline-6',
      grade: '5-8'
    },
    {
      label: 'Integers',
      id: 'integers',
      grade: '5-7'
    },
    {
      label: 'Place Value - Decimal',
      id: 'place-value-7',
      grade: '6-8'
    },
    {
      label: 'Math Workout',
      id: 'math-workout',
      grade: '4-8'
    },

    /*
      {
        label: 'Percentage',
        id: 'percentage',
        grade: '4-5'
      },
      {
        label: 'Area of Closed Region',
        id: 'area',
        grade: '4-5'
      },
      */
    ...math2.list
  ]
};
