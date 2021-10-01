const vocabulary = [
  {
    label: 'Letters',
    slug: 'letters',
    grade: 'kg, 1'
  },
  {
    label: 'Letters 2',
    slug: 'letters-2',
    grade: 'kg, 1'
  },
  {
    label: 'Words related to Animals',
    slug: 'animal-words',
    grade: 'g2, g3, g4'
  },
  {
    label: 'Rhyming Words',
    slug: 'rhyming-words',
    grade: 'g2, g3, g4'
  },
  {
    label: 'Picture Match',
    slug: 'match-picture',
    grade: 'kg, g1, g2, g3'
  },
  {
    label: 'Picture Match - 2',
    slug: 'match-picture-2',
    grade: 'kg, g1, g2, g3'
  },
  {
    label: 'Missing Letter',
    slug: 'picture',
    grade: 'kg, g1, g2, g3'
  },
  {
    label: 'Missing Letter - 2',
    slug: 'picture-2',
    grade: 'kg, g1, g2, g3'
  },
  {
    label: 'Word from Picture',
    slug: 'word-from-picture',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Word from Picture - 2',
    slug: 'word-from-picture-2',
    grade: 'g3, g4, g5'
  },
  {
    label: '3 Letter Words',
    slug: 'simple-words',
    grade: 'kg, g1, g2'
  },
  {
    label: 'Connect Letters',
    slug: 'connect-letters',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Connect Letters - 2',
    slug: 'connect-letters-2',
    grade: 'g3, g4, g5'
  },
  {
    label: '4 Letter Words',
    slug: '4-letter-words',
    grade: 'g1, g2, g3, g4'
  },
  {
    label: '5 Letter Words',
    slug: '5-letter-words',
    grade: 'g2, g3, g4, g5'
  },
  {
    label: 'Antonyms Collection 1',
    slug: 'antonyms-1',
    grade: 'g2, g3, g4, g5'
  },
  {
    label: 'Antonyms Collection 2',
    slug: 'antonyms-2',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Antonyms Collection 3',
    slug: 'antonyms-3',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Synonyms Collection 1',
    slug: 'synonyms-1',
    grade: 'g2, g3, g4, g5'
  },
  {
    label: 'Synonyms Collection 2',
    slug: 'synonyms-2',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Synonyms Collection 3',
    slug: 'synonyms-3',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Common Spelling',
    slug: 'spelling-1',
    grade: 'kg, g1, g2'
  },
  {
    label: 'Common Spelling Mistakes',
    slug: 'spelling-2',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Compound Words',
    slug: 'compound-word',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Prefix and Suffix',
    slug: 'prefix-suffix',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Confusing Words',
    slug: 'confusing-words',
    grade: 'g2, g3, g4'
  },
  {
    label: 'Confusing Words - 2',
    slug: 'confusing-words-2',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Compound Words',
    slug: 'compound-word',
    grade: 'g2, g3, g4'
  },
  {
    label: 'Pick Words by Sound',
    slug: 'pick-word',
    grade: 'g1, g2, g3'
  },
  {
    label: 'Pick Words by Sound - 2',
    slug: 'pick-word-2',
    grade: 'g1, g2, g3'
  },
  {
    label: 'Words and Meaning',
    slug: 'words-meaning',
    grade: 'g1, g2, g3'
  },
  {
    label: 'New Words',
    slug: 'new-words',
    grade: 'g3, g4, g5'
  }
];

const grammar = [
  {
    label: 'Article',
    slug: 'article',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Sentence',
    slug: 'sentence',
    grade: 'g2, g3, g4'
  },
  {
    label: 'Sentence-2',
    slug: 'sentence-2',
    grade: 'g4, g5'
  },
  {
    label: 'Negative Sentence',
    slug: 'negative-sentence',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Questions',
    slug: 'questions',
    grade: 'g2, g3'
  },
  {
    label: 'Subject and Predicate',
    slug: 'subject-predicate',
    grade: 'g2, g3'
  },

  /*
  // The quality is not good
  {
    label: 'Fill Ups',
    slug: 'fill-ups',
    grade: 'g4, g5'
  },
  */
  {
    label: 'Facts and Opinions',
    slug: 'facts-opinions',
    grade: 'g4, g5'
  },
  {
    label: 'Parts of Speech',
    slug: 'parts-of-speech',
    grade: 'g2, g3, g4, g5'
  },
  {
    label: 'Parts of Speech 2',
    slug: 'parts-of-speech-2',
    grade: 'g2, g3, g4, g5'
  },
  {
    label: 'Noun',
    slug: 'noun',
    grade: 'g2, g3, g4, g5'
  },
  {
    label: 'Noun 2',
    slug: 'noun-2',
    grade: 'g2, g3, g4, g5'
  },
  {
    label: 'Countable Noun',
    slug: 'countable-noun',
    grade: 'g2, g3, g4'
  },
  {
    label: 'Verb',
    slug: 'verb',
    grade: 'g2, g3, g4, g5'
  },
  {
    label: 'Verb 2',
    slug: 'verb-2',
    grade: 'g2, g3, g4, g5'
  },
  {
    label: 'Helping Verb',
    slug: 'helping-verb',
    grade: 'g2, g3, g4, g5'
  },
  {
    label: 'Helping Verb 2',
    slug: 'helping-verb-2',
    grade: 'g4, g5'
  },
  {
    label: 'Adjective',
    slug: 'adjective',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Pronoun',
    slug: 'pronoun',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Preposition',
    slug: 'preposition',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Preposition 2',
    slug: 'preposition-2',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Conjunction',
    slug: 'conjunction',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Right Word',
    slug: 'right-word',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Root Word - 5',
    slug: 'root-word-5',
    grade: 'g5'
  },
  {
    label: 'Phrase',
    slug: 'phrase',
    grade: 'g5'
  },
  {
    label: 'Adverb',
    slug: 'adverb',
    grade: 'g4, g5'
  },
  {
    label: 'Degrees of Comparison',
    slug: 'degrees-comparison',
    grade: 'g4, g5'
  },
  {
    label: 'Sentence Pattern',
    slug: 'sentence-pattern',
    grade: 'g4, g5'
  }
];

const reading = [
  {
    label: 'Simple Reading',
    slug: 'simple-reading',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Stories',
    slug: 'stories',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Stories - 2',
    slug: 'stories-2',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Stories - 3',
    slug: 'stories-3',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Stories - 4',
    slug: 'stories-4',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Kids Favourite Cartoons',
    slug: 'kids-favourite-cartoons',
    grade: 'g4, g5'
  },
  {
    label: 'Small Passages',
    slug: 'small-passages',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Small Passages - 2',
    slug: 'small-passages-2',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Small Passages - 3',
    slug: 'small-passages-3',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Small Passages - 4',
    slug: 'small-passages-4',
    grade: 'g3, g4, g5'
  },

  {
    label: 'Reading Passages',
    slug: 'passages',
    grade: 'g4, g5'
  },
  {
    label: 'Reading Lessons - 4',
    slug: 'reading-4',
    grade: 'g4, g5'
  },
  {
    label: 'Poems Collection',
    slug: 'poems-collection',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Poems Collection  - 2',
    slug: 'poems-collection-2',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Poems Collection  - 3',
    slug: 'poems-collection-3',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Poems Collection - 4',
    slug: 'poems-collection-4',
    grade: 'g3, g4, g5'
  }
];

const math = [
  {
    label: 'KG Math',
    slug: 'kg-math',
    grade: 'kg'
  },
  {
    label: 'Mixed Math',
    slug: 'mixed-math',
    grade: 'kg, g1'
  },
  {
    label: 'Mixed Math 2',
    slug: 'mixed-math-2',
    grade: 'g2, g3'
  },
  {
    label: 'Numbers',
    slug: 'numbers',
    grade: 'kg, g1'
  },
  {
    label: 'Numbers - 2',
    slug: 'numbers-2',
    grade: 'g2, g3, g4'
  },
  {
    label: 'Tables: 2 to 5',
    slug: 'tables',
    grade: 'kg, g1'
  },
  {
    label: 'Tables: 6 to 10',
    slug: 'tables-2',
    grade: 'g1, g2, g3'
  },
  {
    label: 'Tables: 11 to 15',
    slug: 'tables-3',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Arithmetic',
    slug: 'arithmetic',
    grade: 'kg, g1'
  },
  {
    label: 'Arithmetic - 2',
    slug: 'arithmetic-2',
    grade: 'g1, g2, g3'
  },
  {
    label: 'Arithmetic - 3',
    slug: 'arithmetic-3',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Math - 1',
    slug: 'math-1',
    grade: 'g1, g2'
  },
  {
    label: 'Math - 2',
    slug: 'math-2',
    grade: 'g2, g3, g4'
  },
  {
    label: 'Balance Numbers',
    slug: 'balance-numbers',
    grade: 'g2, g3, g4'
  },
  {
    label: 'Balance Numbers - 2',
    slug: 'balance-numbers-2',
    grade: 'g4, g5'
  },
  {
    label: 'Word Problems',
    slug: 'word-problems',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Money',
    slug: 'money',
    grade: 'g4, g5'
  },
  {
    label: 'Fraction',
    slug: 'fraction',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Fraction - 2',
    slug: 'fraction-2',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Measurement',
    slug: 'measurement',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Place Value',
    slug: 'place-value',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Place Value - 2',
    slug: 'place-value-2',
    grade: 'g4, g5'
  },
  {
    label: 'Geometry',
    slug: 'geometry',
    grade: 'g2, g3'
  },
  {
    label: 'Geometry - 2',
    slug: 'geometry-2',
    grade: 'g4, g5'
  },
  {
    label: 'Divisibility Test',
    slug: 'divisibility-test',
    grade: 'g4, g5'
  },
  {
    label: 'Missing Workout',
    slug: 'missing-workout',
    grade: 'g4, g5'
  },
  {
    label: 'Area and Perimeter',
    slug: 'area-perimeter',
    grade: 'g4, g5'
  },
  {
    label: 'Picture Puzzle',
    slug: 'picture-puzzle',
    grade: 'g4, g5'
  },
  {
    label: 'Math Workout',
    slug: 'math-workout',
    grade: 'g4, g5'
  },
  {
    label: 'Information Processing',
    slug: 'information',
    grade: 'g3, g4, g5'
  }
];

const science = [
  {
    label: 'Science for Kids',
    slug: 'kids-science',
    grade: 'g1, g2'
  },
  {
    label: 'Seasons',
    slug: 'seasons',
    grade: 'g2, g3'
  },
  {
    label: 'States of Matter',
    slug: 'matter-3',
    grade: 'g2, g3, g4'
  },
  {
    label: 'Matter and Materials',
    slug: 'matter-4',
    grade: 'g2, g3, g4'
  },
  {
    label: 'Matter and Materials 2',
    slug: 'matter-5',
    grade: 'g2, g3, g4'
  },
  {
    label: 'Force',
    slug: 'force-3',
    grade: 'g2, g3, g4'
  },
  {
    label: 'Work',
    slug: 'work-4',
    grade: 'g2, g3, g4'
  },
  {
    label: 'Energy',
    slug: 'energy-5',
    grade: 'g4, g5'
  },
  {
    label: 'Plants',
    slug: 'plants-3',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Plants - 2',
    slug: 'plants-4',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Plants - 3',
    slug: 'plants-5',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Nutrients',
    slug: 'food-3',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Food and Hygine',
    slug: 'food-4',
    grade: 'g4, g5'
  },
  {
    label: 'Food - 5',
    slug: 'food-5',
    grade: 'g4, g5'
  },
  {
    label: 'Water',
    slug: 'water-3',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Water Cycle',
    slug: 'water-4',
    grade: 'g4, g5'
  },
  {
    label: 'Water Management',
    slug: 'water-5',
    grade: 'g5'
  },
  {
    label: 'Science in Kitchen',
    slug: 'everyday-science-3',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Gadgets',
    slug: 'everyday-science-4',
    grade: 'g4, g5'
  },
  {
    label: 'Everyday Science',
    slug: 'everyday-science-5',
    grade: 'g5'
  },
  {
    label: 'Air',
    slug: 'air-3',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Air we Breathe',
    slug: 'air-4',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Atmosphere',
    slug: 'air-5',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Human Body 3',
    slug: 'humanbody-3',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Human Body 4',
    slug: 'humanbody-4',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Human Body 2',
    slug: 'humanbody-5',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Solar System',
    slug: 'solar-system',
    grade: 'g4, g5'
  },
  {
    label: 'Satellites',
    slug: 'satellites',
    grade: 'g4, g5'
  },

  // new addition
  {
    label: 'Animals',
    slug: 'animals-3',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Animals 2',
    slug: 'animals-4',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Reproduction in Animals',
    slug: 'animals-5',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Environment',
    slug: 'environment-3',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Green Environment',
    slug: 'environment-4',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Our Environment',
    slug: 'environment-5',
    grade: 'g3, g4, g5'
  }
  /*
  {
    label: 'Science Misc - 4',
    slug: 'science-4',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Computers',
    slug: 'computer',
    grade: 'g3, g4, g5'
  }*/
];

const social = [
  {
    label: 'India',
    slug: 'india',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Profession',
    slug: 'profession',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Continents',
    slug: 'continents',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Hydrosphere',
    slug: 'hydrosphere',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Transportation',
    slug: 'transportation',
    grade: 'g3, g4'
  },
  {
    label: 'Health',
    slug: 'health',
    grade: 'g3, g4'
  },
  {
    label: 'Child Rights',
    slug: 'child-rights',
    grade: 'g3, g4'
  },
  {
    label: 'Early Humans',
    slug: 'early-humans',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Good Citizen',
    slug: 'good-citizen',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Universe',
    slug: 'universe',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Our Government',
    slug: 'government',
    grade: 'g4, g5'
  },
  {
    label: 'Forests in India',
    slug: 'forests-india',
    grade: 'g4, g5'
  },
  {
    label: 'Minerals - under our feet',
    slug: 'minerals',
    grade: 'g4, g5'
  },
  {
    label: 'The story of a seed',
    slug: 'seed-story',
    grade: 'g4, g5'
  },
  {
    label: 'Food Facts',
    slug: 'food-facts',
    grade: 'g4, g5'
  },
  {
    label: 'People and Jobs',
    slug: 'people-jobs',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Goods and Services',
    slug: 'goods-services',
    grade: 'g4, g5'
  },
  {
    label: 'Festivals',
    slug: 'festivals',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Road Manners',
    slug: 'road-manners',
    grade: 'g3, g4, g5'
  },
  {
    label: 'About Us',
    slug: 'about-us',
    grade: 'g2, g3'
  },
  {
    label: 'Transport',
    slug: 'transport',
    grade: 'g2, g3'
  },
  {
    label: 'Houses',
    slug: 'houses-4',
    grade: 'g3, g4, g5'
  },

  // new addition
  {
    label: 'Clothes',
    slug: 'clothes-4',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Directions and Maps',
    slug: 'maps-4',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Maps 3',
    slug: 'maps-5',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Surroundings',
    slug: 'surroundings',
    grade: 'g3, g4, g5'
  },
  // new addition 2
  {
    label: 'Earth',
    slug: 'earth-5',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Family',
    slug: 'family-3',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Family - 2',
    slug: 'family-5',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Job',
    slug: 'job-3',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Job 2',
    slug: 'job-5',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Life Skills',
    slug: 'lifeskills-3',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Life Skills - 2',
    slug: 'lifeskills-4',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Life Skills - 3',
    slug: 'lifeskills-5',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Nature ',
    slug: 'nature-4',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Nature - 2',
    slug: 'nature-5',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Safety',
    slug: 'safety-3',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Surroundings',
    slug: 'surroundings-3',
    grade: 'g3, g4, g5'
  }
];

const misc = [
  {
    label: 'Coloring',
    slug: 'coloring',
    grade: 'kg, g1, g2'
  },
  {
    label: 'Maze',
    slug: 'maze',
    grade: 'kg, g1, g2'
  },
  {
    label: 'Drawing',
    slug: 'drawing',
    grade: 'kg, g1, g2'
  },
  {
    label: 'Classify Images',
    slug: 'classify-images',
    grade: 'kg, g1, g2'
  },
  {
    label: 'Picture Activities',
    slug: 'kg-picture',
    grade: 'kg, g1'
  },
  {
    label: 'Match Colors',
    slug: 'match-colors',
    grade: 'kg, g1'
  },
  {
    label: 'Complete the Pattern',
    slug: 'pattern',
    grade: 'kg, g1, g2'
  },
  {
    label: 'What Comes Next?',
    slug: 'what-next',
    grade: 'kg, g1, g2'
  },
  {
    label: 'More Sudoku 4 x 4',
    slug: 'sudoku4',
    grade: 'kg, g1, g2'
  },
  {
    label: 'More Sudoku 6 x 6',
    slug: 'sudoku6',
    grade: 'g1, g2, g3, g4'
  },
  {
    label: 'More Sudoku 9 x 9',
    slug: 'sudoku9',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Sound Based',
    slug: 'audio',
    grade: 'kg, g1, g2'
  },
  {
    label: 'Sound Based 2',
    slug: 'audio-2',
    grade: 'kg, g1, g2'
  }
];

const gk = [
  {
    label: 'Largest, Tallest, Longest etc',
    slug: 'largest',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Inventions and Discovery',
    slug: 'inventions',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Countries in the World',
    slug: 'countries',
    grade: 'g3, g4, g5'
  },
  {
    label: 'States of India',
    slug: 'states',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Leaders',
    slug: 'leaders',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Brands, Companies & People',
    slug: 'brands',
    grade: 'g3, g4, g5'
  }
  /*
  {
    label: 'History',
    slug: 'history',
    grade: 'g3, g4, g5'
  }*/
];

const tamil = [
  {
    label: 'தமிழ் எழுத்துக்கள் ',
    slug: 'tamil-letters',
    grade: 'kg, g1'
  },
  {
    label: 'தமிழ் எழுத்துக்கள் - 2',
    slug: 'tamil-letters2',
    grade: 'kg, g1'
  },
  {
    label: 'தமிழ் வார்த்தைகள் ',
    slug: 'tamil-words',
    grade: 'kg, g1'
  },
  {
    label: 'பழகு தமிழ் - 2',
    slug: 'tamil-2',
    grade: 'g2, g3'
  },
  {
    label: 'பழகு தமிழ் - 4',
    slug: 'tamil-4',
    grade: 'g4, g5'
  },
  {
    label: 'தமிழ்நாடு',
    slug: 'தமிழ்நாடு',
    grade: 'g3, g4, g5'
  }
];

const others = [];

export default {
  vocabulary,
  grammar,
  reading,
  math,
  science,
  social,
  gk,
  misc
};
