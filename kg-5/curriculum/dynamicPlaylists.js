const vocabulary = [
  {
    label: 'Words related to Animals',
    id: 'animal-words',
    grade: 'g2, g3, g4'
  },
  {
    label: 'Rhyming Words',
    id: 'rhyming-words',
    grade: 'g2, g3, g4'
  },
  {
    label: '3 Letter Words',
    id: 'simple-words',
    grade: 'kg, g1, g2'
  },
  {
    label: 'Connect Letters',
    id: 'connect-letters',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Connect Letters - 2',
    id: 'connect-letters-2',
    grade: 'g3, g4, g5'
  },
  {
    label: '4 Letter Words',
    id: '4-letter-words',
    grade: 'g1, g2, g3, g4'
  },
  {
    label: '5 Letter Words',
    id: '5-letter-words',
    grade: 'g2, g3, g4, g5'
  },
  {
    label: 'Antonyms Collection 1',
    id: 'antonyms-1',
    grade: 'g2, g3, g4, g5'
  },
  {
    label: 'Antonyms Collection 2',
    id: 'antonyms-2',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Antonyms Collection 3',
    id: 'antonyms-3',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Synonyms Collection 1',
    id: 'synonyms-1',
    grade: 'g2, g3, g4, g5'
  },
  {
    label: 'Synonyms Collection 2',
    id: 'synonyms-2',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Synonyms Collection 3',
    id: 'synonyms-3',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Common Spelling',
    id: 'spelling-1',
    grade: 'kg, g1, g2'
  },
  {
    label: 'Common Spelling Mistakes',
    id: 'spelling-2',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Compound Words',
    id: 'compound-word',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Prefix and Suffix',
    id: 'prefix-suffix',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Confusing Words',
    id: 'confusing-words',
    grade: 'g2, g3, g4'
  },
  {
    label: 'Confusing Words - 2',
    id: 'confusing-words-2',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Words and Meaning',
    id: 'words-meaning',
    grade: 'g1, g2, g3'
  },
  {
    label: 'Crossword',
    id: 'crossword-1',
    grade: 'g3, g4, g5'
  },
  {
    label: 'New Words',
    id: 'new-words',
    grade: 'g3, g4, g5'
  }
];

const grammar = [
  {
    label: 'Sentence',
    id: 'sentence',
    grade: 'g1, g2, g3, g4'
  },
  {
    label: 'Types of Sentence',
    id: 'sentence-2',
    grade: 'g2, g3, g4, g5'
  },
  {
    label: 'Negative Sentence',
    id: 'negative-sentence',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Subject and Predicate',
    id: 'sentence-3',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Questions',
    id: 'questions',
    grade: 'g2, g3'
  },
  {
    label: 'Naming Word',
    id: 'noun-1',
    grade: 'g1, g2, g3'
  },
  {
    label: 'Proper and Common Noun',
    id: 'noun-2',
    grade: 'g1, g2, g3, g4'
  },
  {
    label: 'Introduction to Pronoun',
    id: 'pronoun-1',
    grade: 'g1, g2, g3, g4, g5'
  },
  {
    label: 'Personal and Demonstrative Pronoun',
    id: 'pronoun-2',
    grade: 'g2, g3, g4, g5'
  },
  {
    label: 'Article - Introduction',
    id: 'article-1',
    grade: 'g1, g2, g3, g4, g5'
  },
  {
    label: 'Definite and Indefinite Article',
    id: 'article-2',
    grade: 'g2, g3, g4, g5'
  },
  {
    label: 'No Article Rules',
    id: 'article-3',
    grade: 'g2, g3, g4, g5'
  },
  {
    label: 'Describing Words',
    id: 'adjective-1',
    grade: 'g1, g2, g3'
  },
  {
    label: 'Adjective - Introduction',
    id: 'adjective-2',
    grade: 'g1, g2, g3, g4'
  },
  {
    label: 'Joining Word',
    id: 'conjunction-1',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Conjunction',
    id: 'conjunction-2',
    grade: 'g3, g4, g5'
  },

  {
    label: 'Subject Verb Agreement',
    id: 'sentence-4',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Facts and Opinions',
    id: 'facts-opinions',
    grade: 'g4, g5'
  },
  {
    label: 'Parts of Speech',
    id: 'parts-of-speech',
    grade: 'g2, g3, g4, g5'
  },
  {
    label: 'Parts of Speech 2',
    id: 'parts-of-speech-2',
    grade: 'g2, g3, g4, g5'
  },
  /*
  {
    label: 'Parts of Speech 3',
    id: 'parts-of-speech-3',
    grade: 'g2, g3, g4'
  },*/

  {
    label: 'Types of Noun',
    id: 'noun-3',
    grade: 'g2, g3, g4, g5'
  },
  {
    label: 'Abstract and Concrete Noun',
    id: 'noun-4',
    grade: 'g2, g3, g4, g5'
  },
  {
    label: 'Gender Nouns',
    id: 'noun-5',
    grade: 'g2, g3, g4, g5'
  },
  {
    label: 'Countable Noun',
    id: 'countable-noun',
    grade: 'g2, g3, g4'
  },
  {
    label: 'Verb',
    id: 'verb',
    grade: 'g2, g3, g4, g5'
  },
  {
    label: 'Verb 2',
    id: 'verb-2',
    grade: 'g2, g3, g4, g5'
  },
  {
    label: 'Helping Verb',
    id: 'helping-verb',
    grade: 'g2, g3, g4, g5'
  },
  {
    label: 'Helping Verb 2',
    id: 'helping-verb-2',
    grade: 'g4, g5'
  },
  {
    label: 'Preposition',
    id: 'preposition',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Preposition 2',
    id: 'preposition-2',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Conjunction Pairs',
    id: 'conjunction-4',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Right Word',
    id: 'right-word',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Root Word',
    id: 'root-word-5',
    grade: 'g5'
  },
  {
    label: 'Phrase',
    id: 'phrase',
    grade: 'g5'
  },
  {
    label: 'Proverbs',
    id: 'proverb',
    grade: 'g4, g5'
  },
  {
    label: 'Introduction to Adverb',
    id: 'adverb-3',
    grade: 'g2, g3, g4'
  },
  {
    label: 'Adverb of Place, Time and Manner',
    id: 'adverb-4',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Adverb of Degree and Frequency',
    id: 'adverb-5',
    grade: 'g4, g5'
  },
  {
    label: 'Degrees of Comparison',
    id: 'degrees-comparison',
    grade: 'g4, g5'
  },
  {
    label: 'Sentence Pattern',
    id: 'sentence-pattern',
    grade: 'g4, g5'
  },
  // New Playlists
  {
    label: 'Alliteration',
    id: 'alliteration',
    grade: 'g3, g4, g5'
  },

  {
    label: 'Advanced Article',
    id: 'article-4',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Punctuation',
    id: 'punctuation',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Adjective of Quality and Quantity',
    id: 'adjective-3',
    grade: 'g2, g3, g4, g5'
  },
  {
    label: 'More on Adjective',
    id: 'adjective-4',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Order of Adjective',
    id: 'adjective-5',
    grade: 'g4, g5'
  },
  {
    label: 'Action Word',
    id: 'verb-1',
    grade: 'g3, g4, g5'
  },

  {
    label: 'Possessive pronoun',
    id: 'pronoun-3',
    grade: 'g2, g3, g4, g5'
  },
  {
    label: 'Reflexive Pronoun',
    id: 'pronoun-4',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Interrogative Pronoun',
    id: 'pronoun-5',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Modal',
    id: 'modal',
    grade: 'g3, g4, g5'
  },
  /*
  {
    label: 'Clause',
    id: 'clause',
    grade: 'g3, g4, g5'
  },
  */
  {
    label: 'Simile',
    id: 'simile',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Idiom',
    id: 'idiom',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Gerund and Infinitive',
    id: 'gerund-infinitive',
    grade: 'g3, g4, g5'
  }
];

const reading = [
  {
    label: 'Simple Reading',
    id: 'simple-reading',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Stories',
    id: 'stories',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Stories - 2',
    id: 'stories-2',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Stories - 3',
    id: 'stories-3',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Stories - 4',
    id: 'stories-4',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Animals',
    id: 'reading-animals',
    grade: 'g2, g3, g4'
  },

  {
    label: 'Kids Favourite Cartoons',
    id: 'kids-favourite-cartoons',
    grade: 'g4, g5'
  },
  {
    label: 'Small Passages',
    id: 'small-passages',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Small Passages - 2',
    id: 'small-passages-2',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Small Passages - 3',
    id: 'small-passages-3',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Small Passages - 4',
    id: 'small-passages-4',
    grade: 'g3, g4, g5'
  },

  {
    label: 'Reading Passages',
    id: 'passages',
    grade: 'g4, g5'
  },
  {
    label: 'Reading Lessons - 4',
    id: 'reading-4',
    grade: 'g4, g5'
  },
  {
    label: 'Poems Collection',
    id: 'poems-collection',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Poems Collection  - 2',
    id: 'poems-collection-2',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Poems Collection  - 3',
    id: 'poems-collection-3',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Poems Collection - 4',
    id: 'poems-collection-4',
    grade: 'g3, g4, g5'
  }
];

const math = [
  {
    label: 'KG Math',
    id: 'kg-math',
    grade: 'kg'
  },
  {
    label: 'Math - Shapes',
    id: 'shapes',
    grade: 'kg'
  },
  {
    label: 'Mixed Math',
    id: 'mixed-math',
    grade: 'kg, g1'
  },
  {
    label: 'Mixed Math 2',
    id: 'mixed-math-2',
    grade: 'g2, g3'
  },
  {
    label: 'Numbers',
    id: 'numbers',
    grade: 'kg, g1'
  },
  {
    label: 'Math Maze',
    id: 'math-maze',
    grade: 'kg, g1, g2'
  },
  {
    label: 'Maze - Multiples',
    id: 'math-maze-2',
    grade: 'g1,g2,g3'
  },
  {
    label: 'Numbers - 2',
    id: 'numbers-2',
    grade: 'g2, g3, g4'
  },
  {
    label: 'Tables: 2 to 5',
    id: 'tables',
    grade: 'kg, g1'
  },
  {
    label: 'Tables: 6 to 10',
    id: 'tables-2',
    grade: 'g1, g2, g3'
  },
  {
    label: 'Tables: 11 to 15',
    id: 'tables-3',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Arithmetic',
    id: 'arithmetic',
    grade: 'kg, g1'
  },
  {
    label: 'Arithmetic - 2',
    id: 'arithmetic-2',
    grade: 'g1, g2, g3'
  },
  {
    label: 'Arithmetic - 3',
    id: 'arithmetic-3',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Arithmetic - 4',
    id: 'arithmetic-4',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Arithmetic - 5',
    id: 'arithmetic-5',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Math - 1',
    id: 'math-1',
    grade: 'g1, g2'
  },
  {
    label: 'Math - 2',
    id: 'math-2',
    grade: 'g2, g3, g4'
  },
  {
    label: 'Balance Numbers',
    id: 'balance-numbers',
    grade: 'g2, g3, g4'
  },
  {
    label: 'Balance Numbers - 2',
    id: 'balance-numbers-2',
    grade: 'g4, g5'
  },
  {
    label: 'Math Puzzle - 3',
    id: 'math-puzzle-3',
    grade: 'g2, g3, g4, g5'
  },
  {
    label: 'Math Puzzle - 4',
    id: 'math-puzzle-4',
    grade: 'g2, g3, g4, g5'
  },
  {
    label: 'Math Puzzle - 5',
    id: 'math-puzzle-5',
    grade: 'g2, g3, g4, g5'
  },
  {
    label: 'Word Problems - 1',
    id: 'word-problems-1',
    grade: 'g1, g2'
  },
  {
    label: 'Word Problems',
    id: 'word-problems',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Money',
    id: 'money',
    grade: 'g4, g5'
  },
  {
    label: 'Fraction',
    id: 'fraction',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Fraction - 2',
    id: 'fraction-2',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Measurement',
    id: 'measurement',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Place Value',
    id: 'place-value',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Place Value - 2',
    id: 'place-value-2',
    grade: 'g4, g5'
  },
  {
    label: 'Geometry',
    id: 'geometry',
    grade: 'g2, g3'
  },
  {
    label: 'Geometry - 2',
    id: 'geometry-2',
    grade: 'g4, g5'
  },
  {
    label: 'Divisibility Test',
    id: 'divisibility-test',
    grade: 'g4, g5'
  },
  {
    label: 'Missing Workout',
    id: 'missing-workout',
    grade: 'g4, g5'
  },
  {
    label: 'Missing Workout - 2',
    id: 'missing-workout-2',
    grade: 'g4, g5'
  },
  {
    label: 'Missing Workout - 3',
    id: 'missing-workout',
    grade: 'g5'
  },
  {
    label: 'Area and Perimeter',
    id: 'area-perimeter',
    grade: 'g4, g5'
  },
  {
    label: 'Picture Puzzle',
    id: 'picture-puzzle',
    grade: 'g4, g5'
  },
  {
    label: 'Math Workout',
    id: 'math-workout',
    grade: 'g4, g5'
  },
  {
    label: 'Information Processing',
    id: 'information-3',
    grade: 'g2, g3, g4'
  },
  {
    label: 'Information Processing - 2',
    id: 'information',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Time Based Problems',
    id: 'time',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Quick Math - 3',
    id: 'quick-math-3',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Quick Math - 4',
    id: 'quick-math-4',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Quick Math - 5',
    id: 'quick-math-5',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Roman Number System',
    id: 'roman-number',
    grade: 'g4, g5'
  },
  {
    label: 'Factors',
    id: 'factors',
    grade: 'g5'
  },
  {
    label: 'Decimal Arithmetic',
    id: 'decimal-arithmetic',
    grade: 'g4, g5'
  },
  {
    label: 'Decimal Arithmetic - 2',
    id: 'decimal-arithmetic-2',
    grade: 'g4, g5'
  },
  {
    label: 'Ratio',
    id: 'ratio',
    grade: 'g4, g5'
  },
  {
    label: 'Algebra',
    id: 'algebra',
    grade: 'g4, g5'
  },
  {
    label: 'Profit and Loss',
    id: 'profit-loss',
    grade: 'g4, g5'
  },
  {
    label: 'Grade - 6: Word Problems',
    id: 'word-problems-new',
    grade: 'g5'
  }
  /*
  {
    label: 'Percentage',
    id: 'percentage',
    grade: 'g4, g5'
  },
  {
    label: 'Area of Closed Region',
    id: 'area',
    grade: 'g4, g5'
  },
  */
];

const science = [
  {
    label: 'Science for Kids',
    id: 'kids-science',
    grade: 'g1, g2'
  },
  {
    label: 'Our Food',
    id: 'our-food',
    grade: 'g1, g2'
  },
  {
    label: 'Plants around Us',
    id: 'plants-2',
    grade: 'g1, g2'
  },
  {
    label: 'About Our Environment ',
    id: 'environment-2',
    grade: 'g1, g2'
  },
  {
    label: 'Materials',
    id: 'materials-2',
    grade: 'g1, g2'
  },
  {
    label: 'Animals',
    id: 'animals',
    grade: 'g2, g3'
  },
  {
    label: 'Day and Night',
    id: 'day-night',
    grade: 'g1, g2, g3'
  },
  {
    label: 'Human Body 2',
    id: 'humanbody-2',
    grade: 'g1, g2, g3'
  },
  {
    label: 'Living Things',
    id: 'living-things',
    grade: 'g1, g2, g3'
  },
  {
    label: 'Light 2',
    id: 'light-2',
    grade: 'g1, g2'
  },
  {
    label: 'Seasons',
    id: 'seasons',
    grade: 'g2, g3'
  },

  {
    label: 'States of Matter',
    id: 'matter-3',
    grade: 'g2, g3, g4'
  },
  {
    label: 'Matter and Materials',
    id: 'matter-4',
    grade: 'g2, g3, g4'
  },
  {
    label: 'Properties of Matter',
    id: 'matter-5',
    grade: 'g2, g3, g4'
  },
  {
    label: 'Force',
    id: 'force-3',
    grade: 'g2, g3, g4'
  },
  {
    label: 'Work',
    id: 'work-4',
    grade: 'g2, g3, g4'
  },
  {
    label: 'Energy',
    id: 'energy-5',
    grade: 'g4, g5'
  },
  {
    label: 'Plants',
    id: 'plants-3',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Plants Habitat',
    id: 'plants-4',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Reproduction in Plants',
    id: 'plants-5',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Nutrients',
    id: 'food-3',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Food and Hygine',
    id: 'food-4',
    grade: 'g4, g5'
  },
  {
    label: 'Food Preservatives',
    id: 'food-5',
    grade: 'g4, g5'
  },
  {
    label: 'Water',
    id: 'water-3',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Water Cycle',
    id: 'water-4',
    grade: 'g4, g5'
  },
  {
    label: 'Water Management',
    id: 'water-5',
    grade: 'g5'
  },
  {
    label: 'Science in Kitchen',
    id: 'everyday-science-3',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Gadgets',
    id: 'everyday-science-4',
    grade: 'g4, g5'
  },
  {
    label: 'Everyday Science',
    id: 'everyday-science-5',
    grade: 'g5'
  },
  {
    label: 'Air',
    id: 'air-3',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Air we Breathe',
    id: 'air-4',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Atmosphere',
    id: 'air-5',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Human Body',
    id: 'humanbody-3',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Human Body - 2',
    id: 'humanbody-4',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Human Body - 3',
    id: 'humanbody-5',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Solar System',
    id: 'solar-system',
    grade: 'g3, g4, g5'
  },

  // new addition
  {
    label: 'Domestic Animals',
    id: 'animals-3',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Life of Animals',
    id: 'animals-4',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Adaptation in Animals',
    id: 'animals-5',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Food Chain',
    id: 'food-chain',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Environment',
    id: 'environment-3',
    grade: 'g3, g4, g5'
  },
  /*
  Need to remove this
  {
    label: 'Our Environment',
    id: 'environment-5',
    grade: 'g3, g4, g5'
  },
  */
  /*
  Need to review this
  {
    label: 'Communication and Mass media',
    id: 'communication-5',
    grade: 'g4, g5'
  },
  */
  {
    label: 'Introduction to Computers',
    id: 'computer-3',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Computer: Input Devices',
    id: 'computer-4',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Computer System',
    id: 'computer-5',
    grade: 'g3, g4, g5'
  },
  /*
  {
    label: 'Science Misc - 4',
    id: 'science-4',
    grade: 'g3, g4, g5'
  },
  */
  // missing playlist

  {
    label: 'Light',
    id: 'light-3',
    grade: 'g2, g3, g4, g5'
  },
  {
    label: 'Sound',
    id: 'sound-science',
    grade: 'g2, g3, g4, g5'
  }
  /*
  {
    label: 'Pollution',
    id: 'pollution-4',
    grade: 'g4, g5'
  },
  {
    label: 'Measurement',
    id: 'measurement-4',
    grade: 'g4, g5'
  },

  {
    label: 'Diseases',
    id: 'diseases-5',
    grade: 'g5'
  },

  {
    label: 'Science Crosswords',
    id: 'crossword-science',
    grade: 'g3, g4, g5'
  }
  */
];

const social = [
  {
    label: 'My Country - India',
    id: 'india-2',
    grade: 'g1, g2'
  },
  {
    label: 'Transport',
    id: 'transport',
    grade: 'g1, g2, g3'
  },
  {
    label: 'People and Jobs',
    id: 'people-jobs',
    grade: 'g1, g2'
  },
  {
    label: 'About Us',
    id: 'about-us',
    grade: 'g2, g3'
  },
  {
    label: 'People, Jobs, Tools',
    id: 'people-jobs-3',
    grade: 'g2, g3, g4'
  },
  {
    label: 'India',
    id: 'india',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Continents',
    id: 'continents',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Hydrosphere',
    id: 'hydrosphere',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Transportation',
    id: 'transport-4',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Green Environment',
    id: 'environment-4',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Health',
    id: 'health-3',
    grade: 'g3, g4'
  },
  {
    label: 'Health: Home Remedies',
    id: 'health-4',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Health: Diseases and Prevention',
    id: 'health-5',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Child Rights',
    id: 'child-rights-4',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Educational Rights',
    id: 'child-rights-5',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Early Humans',
    id: 'early-humans',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Good Citizen',
    id: 'good-citizen',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Universe',
    id: 'universe',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Our Government',
    id: 'government',
    grade: 'g4, g5'
  },
  {
    label: 'Forests in India',
    id: 'forests-india',
    grade: 'g4, g5'
  },
  {
    label: 'Minerals - under our feet',
    id: 'minerals',
    grade: 'g4, g5'
  },
  {
    label: 'The story of a seed',
    id: 'seed-story',
    grade: 'g4, g5'
  },
  {
    label: 'Food Facts',
    id: 'food-facts',
    grade: 'g4, g5'
  },

  {
    label: 'Types of Jobs',
    id: 'people-jobs-4',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Agriculture',
    id: 'agriculture',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Goods and Services',
    id: 'goods-services',
    grade: 'g4, g5'
  },
  {
    label: 'Festivals',
    id: 'festivals',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Road Manners',
    id: 'road-manners',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Houses',
    id: 'houses-4',
    grade: 'g3, g4, g5'
  },

  // new addition
  {
    label: 'Clothes',
    id: 'clothes-4',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Directions and Maps',
    id: 'maps-3',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Maps: Signs and Symbols',
    id: 'maps-5',
    grade: 'g3, g4, g5'
  },
  // new addition 2
  {
    label: 'Earth',
    id: 'earth-5',
    grade: 'g3, g4, g5'
  },
  {
    label: 'My Family',
    id: 'family-3',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Family Values',
    id: 'family-5',
    grade: 'g3, g4, g5'
  },

  {
    label: 'Understanding Time',
    id: 'time-3',
    grade: 'g3, g4, g5'
  },
  {
    label: 'My Upbringing',
    id: 'lifeskills-4',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Our Emotional World',
    id: 'lifeskills-5',
    grade: 'g3, g4, g5'
  }
  /*
  {
    label: 'Nature ',
    id: 'nature-4',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Nature - 2',
    id: 'nature-5',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Safety',
    id: 'safety-3',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Surroundings',
    id: 'surroundings-3',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Community Life',
    id: 'community-life-3',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Community Life 2',
    id: 'community-life-4',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Social Living',
    id: 'social-living-3',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Social Living - 2',
    id: 'social-living-4',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Social Living - 3',
    id: 'social-living-5',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Disaster Management',
    id: 'disaster-management-5',
    grade: 'g3, g4, g5'
  },
  {
    label: 'India - 5',
    id: 'india-5',
    grade: 'g3, g4, g5'
  },
  {
    label: 'First Aid',
    id: 'first-aid-3',
    grade: 'g3, g4, g5'
  },
  // missimg playlist
  {
    label: 'Safety 2',
    id: 'safety-2',
    grade: 'g2, g3, g4, g5'
  },
  {
    label: 'Communication',
    id: 'communication-3',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Games',
    id: 'games-5',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Social Crosswords',
    id: 'crossword-social',
    grade: 'g3, g4, g5'
  },
  //moved from science
  {
    label: 'Rock',
    id: 'rock-3',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Rock 2',
    id: 'rock-5',
    grade: 'g5'
  },
  {
    label: 'Soil',
    id: 'soil-5',
    grade: 'g5'
  }*/
];

const general = [
  {
    label: 'Coloring',
    id: 'coloring',
    grade: 'kg, g1, g2'
  },
  {
    label: 'Maze',
    id: 'maze',
    grade: 'kg, g1, g2'
  },
  {
    label: 'Drawing',
    id: 'drawing',
    grade: 'kg, g1, g2'
  },
  {
    label: 'Classify Images',
    id: 'classify-images',
    grade: 'kg, g1, g2'
  },
  /*
  {
    label: 'Picture Activities',
    id: 'kg-picture',
    grade: 'kg, g1'
  },*/
  {
    label: 'Match Colors',
    id: 'match-colors',
    grade: 'kg, g1'
  },
  {
    label: 'Easy Patterns',
    id: 'pattern-kid',
    grade: 'kg, g1, g2'
  },
  {
    label: 'Complete the Pattern',
    id: 'pattern',
    grade: 'g2, g3, g4, g5'
  },
  {
    label: 'What Comes Next?',
    id: 'what-next',
    grade: 'kg, g1, g2'
  },
  {
    label: 'Easy Sudoku 4x4',
    id: 'sudoku-4x4-easy',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Hard Sudoku 4x4',
    id: 'sudoku-4x4-hard',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Easy Sudoku 6x6',
    id: 'sudoku-6x6-easy',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Medium Sudoku 6x6',
    id: 'sudoku-6x6-medium',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Hard Sudoku 6x6',
    id: 'sudoku-6x6-hard',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Easy Sudoku 9x9',
    id: 'sudoku-9x9-easy',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Medium Sudoku 9x9',
    id: 'sudoku-9x9-medium',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Hard Sudoku 9x9',
    id: 'sudoku-9x9-hard',
    grade: 'g3, g4, g5'
  },
  {
    label: 'More Sudoku 4 x 4',
    id: 'sudoku4',
    grade: 'kg, g1, g2'
  },
  {
    label: 'More Sudoku 6 x 6',
    id: 'sudoku6',
    grade: 'g1, g2, g3, g4'
  },
  {
    label: 'More Sudoku 9 x 9',
    id: 'sudoku9',
    grade: 'g3, g4, g5'
  }
];

const english = [
  {
    label: 'Letters',
    id: 'letters',
    grade: 'kg, 1'
  },
  {
    label: 'Letters 2',
    id: 'letters-2',
    grade: 'kg, 1'
  },
  {
    label: 'Vowels and Consonants',
    id: 'vowels',
    grade: 'kg, 1, 2'
  },
  {
    label: 'Word Search',
    id: 'wordsearch-1',
    grade: ' 1, 2,3'
  },
  {
    label: 'Sound: Animals and Birds',
    id: 'sound',
    grade: 'kg, g1'
  },
  {
    label: 'Sound: Fruits and Vegetables',
    id: 'sound-2',
    grade: 'kg, g1'
  },
  {
    label: 'Sound: Nature and Other',
    id: 'sound-3',
    grade: 'kg, g1'
  },
  {
    label: 'Sound: House and Other',
    id: 'sound-4',
    grade: 'kg, g1'
  },
  {
    label: 'Sound: More Animals and Birds',
    id: 'sound-5',
    grade: 'kg, g1'
  },
  {
    label: 'Sound: More Fruits and Vegetables',
    id: 'sound-6',
    grade: 'kg, g1'
  },
  {
    label: 'Sound: Vehicles and Jobs',
    id: 'sound-7',
    grade: 'kg, g1'
  },
  {
    label: 'Sound: More Images',
    id: 'sound-8',
    grade: 'kg, g1'
  },
  {
    label: 'Animals and Birds',
    id: 'picture',
    grade: 'kg, g1'
  },
  {
    label: 'Fruits and Vegetables',
    id: 'picture-2',
    grade: 'kg, g1'
  },
  {
    label: 'Nature and Other',
    id: 'picture-3',
    grade: 'kg, g1'
  },
  {
    label: 'House and Other',
    id: 'picture-4',
    grade: 'kg, g1'
  },
  {
    label: 'More Animals and Birds',
    id: 'picture-5',
    grade: 'g1, g2'
  },
  {
    label: 'More Fruits and Vegetables',
    id: 'picture-6',
    grade: 'g1, g2'
  },
  {
    label: 'Vehicles and Jobs',
    id: 'picture-7',
    grade: 'g1, g2'
  },
  {
    label: 'More Images',
    id: 'picture-8',
    grade: 'g1, g2'
  },
  {
    label: 'Dictation: Animals and Birds',
    id: 'word-sound',
    grade: 'kg, g1, g2, g3'
  },
  {
    label: 'Dictation: Fruits and Vegetables',
    id: 'word-sound-2',
    grade: 'kg, g1, g2, g3'
  },
  {
    label: 'Dictation: Nature and Other',
    id: 'word-sound-3',
    grade: 'kg, g1, g2, g3'
  },
  {
    label: 'Dictation: House and Other',
    id: 'word-sound-4',
    grade: 'kg, g1, g2, g3'
  },
  {
    label: 'Dictation: More Animals and Birds',
    id: 'word-sound-5',
    grade: 'kg, g1, g2, g3'
  },
  {
    label: 'Dictation: More Fruits and Vegetables',
    id: 'word-sound-6',
    grade: 'kg, g1, g2, g3'
  },
  {
    label: 'Dictation: Vehicles and Jobs',
    id: 'word-sound-7',
    grade: 'kg, g1, g2, g3'
  },
  {
    label: 'Dictation: More Images',
    id: 'word-sound-8',
    grade: 'kg, g1, g2, g3'
  },
  {
    label: 'Phonics',
    id: 'phonics',
    grade: 'kg, g1, g2, g3'
  }
];

const gk = [
  {
    label: 'Largest, Tallest, Longest etc',
    id: 'largest',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Inventions and Discovery',
    id: 'inventions',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Countries in the World',
    id: 'countries',
    grade: 'g3, g4, g5'
  },
  {
    label: 'States of India',
    id: 'states',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Leaders',
    id: 'leaders',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Brands, Companies & People',
    id: 'brands',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Cities',
    id: 'gk-cities',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Culture',
    id: 'gk-culture',
    grade: 'g3, g4, g5'
  },
  {
    label: 'History',
    id: 'gk-history',
    grade: 'g3, g4, g5'
  },
  {
    label: 'India',
    id: 'gk-india',
    grade: 'g3, g4, g5'
  },
  {
    label: 'Sports',
    id: 'gk-sports',
    grade: 'g3, g4, g5'
  },
  {
    label: 'World',
    id: 'gk-world',
    grade: 'g3, g4, g5'
  },
  //missing playlist
  {
    label: 'General Knowledge Crosswords',
    id: 'gk-crossword',
    grade: 'g3, g4, g5'
  }
];

const mathSc = [
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
    id: 'games-sc',
    label: 'Games',
    img: 'brain',
    grade: 'kg, g1, g2, g3, g4, g5, g6, g7, g8'
  },
  {
    id: 'place-value-basic',
    label: 'Place Value',
    img: 'abacus',
    grade: 'kg, g1, g2'
  },
  {
    id: 'numberline',
    label: 'Number Line',
    img: 'numberline',
    grade: 'kg, g1, g2'
  },
  {
    id: 'numberline-6-sc',
    label: 'Number Line',
    img: 'numberline',
    grade: 'g3, g4, g5, g6, g7, g8'
  },
  {
    id: 'clock-sc',
    label: 'Time',
    img: 'clock',
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
    id: 'geometry-sc',
    label: 'Geometry',
    img: 'protractor',
    grade: 'kg, g1, g2'
  },
  {
    id: 'money-sc',
    label: 'Money',
    img: 'money',
    grade: 'kg, g1, g2'
  }
];

export default {
  id: 'more-playlists',
  label: 'More Playlists',
  list: [
    {
      id: 'vocabulary',
      list: vocabulary
    },
    {
      id: 'grammar',
      list: grammar
    },
    {
      id: 'reading',
      list: reading
    },
    {
      id: 'english',
      list: english
    },
    {
      id: 'math',
      list: math
    },
    {
      id: 'science',
      list: science
    },
    {
      id: 'social',
      list: social
    },
    {
      id: 'gk',
      list: gk
    },
    {
      id: 'general',
      list: general
    },
    {
      id: 'test',
      list: mathSc
    }
  ]
};
