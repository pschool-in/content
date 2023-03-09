import vocabulary from './dynamic/vocabulary.js';
import grammar from './dynamic/grammar.js';
import reading from './dynamic/reading.js';
import english from './dynamic/english.js';
import math from './dynamic/math.js';
import science from './dynamic/science.js';
import social from './dynamic/social.js';
import gk from './dynamic/gk.js';
import general from './dynamic/general.js';

export default {
  id: 'more-playlists',
  label: 'More Playlists',
  type: 'curriculumList',
  grades: [
    {
      id: 'kg',
      label: 'Kindergarten'
    },
    {
      id: 'g1',
      label: 'Class 1'
    },
    {
      id: 'g2',
      label: 'Class 2'
    },
    {
      id: 'g3',
      label: 'Class 3'
    },
    {
      id: 'g4',
      label: 'Class 4'
    },
    {
      id: 'g5',
      label: 'Class 5'
    },
    {
      id: 'g6',
      label: 'Class 6'
    },
    {
      id: 'g7',
      label: 'Class 7'
    },
    {
      id: 'g8',
      label: 'Class 8'
    }
  ],
  list: [
    vocabulary,
    grammar,
    reading,
    english,
    math,
    science,
    social,
    gk,
    general
  ]
};
