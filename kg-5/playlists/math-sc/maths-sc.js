export default {
  id: 'maths-sc',
  label: 'Math Showcase',
  type: 'curriculumIcon',
  style: {
    fontSize: '0.9rem'
  },
  gradeFilter: [
    {
      value: 'kg',
      label: 'Kindergarten'
    },
    {
      value: 'g1',
      label: 'Class 1'
    },
    {
      value: 'g2',
      label: 'Class 2'
    },
    {
      value: 'g3',
      label: 'Class 3'
    },
    {
      value: 'g4',
      label: 'Class 4',
      default: true
    },
    {
      value: 'g5',
      label: 'Class 5'
    },
    {
      value: 'g6',
      label: 'Class 6'
    },
    {
      value: 'g7',
      label: 'Class 7'
    },
    {
      value: 'g8',
      label: 'Class 8'
    }
  ],
  //moreActivities: 'math-more',
  list: [
    {
      id: 'numbers-sc',
      label: 'Numbers Basics',
      img: 'numbers',
      grade: 'kg, g1, g2'
    },
    {
      id: 'numbers-3-sc',
      label: 'Numbers',
      img: 'numbers',
      grade: 'g3, g4, g5'
    },
    {
      id: 'numbers-6-sc',
      label: 'Numbers',
      img: 'numbers',
      grade: 'g6, g7, g8'
    },
    {
      id: 'arithmetic-sc',
      label: 'Arithmetic',
      img: 'quickMath',
      grade: 'kg, g1, g2'
    },
    {
      id: 'arithmetic-3-sc',
      label: 'Arithmetic',
      img: 'quickMath',
      grade: 'g3, g4, g5'
    },
    {
      id: 'arithmetic-6-sc',
      label: 'Arithmetic',
      img: 'quickMath',
      grade: 'g6, g7, g8'
    },
    {
      id: 'shapes',
      label: 'Shapes',
      img: 'shapes',
      grade: 'kg, g1, g2'
    },
    {
      id: 'area-perimeter',
      label: 'Shapes',
      img: 'shapes',
      grade: 'g3, g4, g5, g6, g7, g8'
    },
    {
      id: 'place-value-basic',
      label: 'Place Value',
      img: 'abacus',
      grade: 'kg, g1, g2'
    },
    {
      id: 'place-value-2',
      label: 'Place Value',
      img: 'abacus',
      grade: 'g3, g4, g5, g6, g7, g8'
    },
    {
      id: 'numberline',
      label: 'Number Line',
      img: 'numberline',
      grade: 'kg, g1, g2, g3'
    },
    {
      id: 'numberline-4',
      label: 'Number Line',
      img: 'numberline',
      grade: 'g4, g5'
    },
    {
      id: 'numberline-6',
      label: 'Number Line',
      img: 'numberline',
      grade: 'g6, g7, g8'
    },
    {
      id: 'clock-sc',
      label: 'Time',
      img: 'clock',
      grade: 'kg, g1, g2, g3, g4, g5, g6, g7, g8'
    },
    {
      id: 'games-sc',
      label: 'Games',
      img: 'brain',
      grade: 'kg, g1, g2, g3, g4, g5, g6, g7, g8'
    },
    {
      id: 'fraction-sc',
      label: 'Fraction',
      img: 'fraction',
      grade: 'kg, g1, g2'
    },
    {
      id: 'fraction-3-sc',
      label: 'Fraction',
      img: 'fraction',
      grade: 'g3, g4, g5'
    },
    {
      id: 'fraction-2',
      label: 'Fraction',
      img: 'fraction',
      grade: 'g6, g7, g8'
    },
    {
      id: 'math-puzzle-sc',
      label: 'Puzzle',
      img: 'puzzle',
      grade: 'kg, g1, g2'
    },
    {
      id: 'math-puzzle-3-sc',
      label: 'Puzzle',
      img: 'puzzle',
      grade: 'g3, g4, g5'
    },
    {
      id: 'math-puzzle-6-sc',
      label: 'Puzzle',
      img: 'puzzle',
      grade: 'g6, g7, g8'
    },
    {
      id: 'quick-math-3',
      label: 'Quick Math',
      img: 'quick',
      grade: 'kg, g1, g2'
    },
    {
      id: 'quick-math-4',
      label: 'Quick Math',
      img: 'quick',
      grade: 'g3, g4, g5'
    },
    {
      id: 'quick-math-5',
      label: 'Quick Math',
      img: 'quick',
      grade: 'g6, g7, g8'
    },
    {
      id: 'measurement',
      label: 'Measurement',
      img: 'scale',
      grade: 'g3, g4, g5, g6, g7, g8'
    },
    {
      id: 'algebra',
      label: 'Algebra',
      img: 'algebra',
      grade: 'g6, g7, g8'
    },
    {
      id: 'geometry-sc',
      label: 'Geometry',
      img: 'protractor',
      grade: 'kg, g1, g2'
    },
    {
      id: 'geometry',
      label: 'Geometry',
      img: 'protractor',
      grade: 'g3, g4, g5'
    },
    {
      id: 'geometry-2',
      label: 'Geometry',
      img: 'protractor',
      grade: 'g6, g7, g8'
    },
    {
      id: 'money-sc',
      label: 'Money for Kids',
      img: 'money',
      grade: 'kg, g1, g2'
    },
    {
      id: 'money',
      label: 'Money',
      img: 'money',
      grade: 'g3, g4, g5, g6, g7, g8'
    },
    {
      id: 'information-3',
      label: 'Chart',
      img: 'chart',
      grade: 'kg, g1, g2'
    },
    {
      id: 'information',
      label: 'Chart',
      img: 'chart',
      grade: 'g3, g4, g5, g6, g7, g8'
    },
    {
      label: 'Patterns',
      id: 'pattern-kid',
      img: 'pattern',
      grade: 'kg, g1, g2'
    },
    {
      label: 'Patterns',
      id: 'pattern',
      img: 'pattern',
      grade: 'g3, g4, g5, g6, g7, g8'
    },
    {
      id: 'word-problems-1',
      label: 'Word Problems',
      img: 'word-problem',
      grade: 'kg, g1, g2'
    },
    {
      id: 'word-problems',
      label: 'Word Problems',
      img: 'word-problem',
      grade: 'g3, g4, g5, g6, g7, g8'
    },
    {
      id: 'sudoku-sc',
      label: 'Sudoku',
      img: 'sudoku',
      grade: 'kg, g1, g2'
    },
    {
      id: 'sudoku-3-sc',
      label: 'Sudoku',
      img: 'sudoku',
      grade: 'g3, g4, g5, g6, g7, g8'
    },
    {
      id: 'math-workout',
      label: 'Workouts',
      img: 'solution-steps',
      grade: 'g3, g4, g5, g6, g7, g8'
    }
  ]
};
