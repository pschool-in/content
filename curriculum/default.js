/*
import coloring from '../playlists/default/coloring';
import writing from '../playlists/default/writing';
import grammar from '../playlists/default/grammar';
import vocabulary from '../playlists/default/vocabulary';
import math from '../playlists/default/math';
import science from '../playlists/default/science';
import social from '../playlists/default/social';
import dragdrop from '../playlists/default/dragdrop';
import wordsearch from '../playlists/default/wordsearch';
import crossword from '../playlists/default/crossword';
import reading from '../playlists/default/reading';
import sudoku from '../playlists/default/sudoku';
import clock from '../playlists/default/clock';
import games from '../playlists/default/games';
*/

import fun from '../3-5/default/fun.js';
import alphabets from '../3-5/default/alphabets.js';
import grammar from '../3-5/default/grammar.js';
import grammar3 from '../3-5/default/grammar-3-sc.js';
import grammar6 from '../3-5/default/grammar-6-sc.js';
import vocabulary from '../3-5/default/vocabulary.js';
import vocabulary3 from '../3-5/default/vocabulary-3-sc.js';
import vocabulary6 from '../3-5/default/vocabulary-6-sc.js';
import math from '../3-5/default/math.js';
import math3 from '../3-5/default/math-3-sc.js';
import math6 from '../3-5/default/math-6-sc.js';
import science from '../3-5/default/science.js';
import science3 from '../3-5/default/science-3-sc.js';
import science6 from '../3-5/default/science-6-sc.js';
import social from '../3-5/default/social.js';
import social6 from '../3-5/default/social-6-sc.js';
import sound from '../3-5/default/en-sound-basic.js';
import picture from '../3-5/default/en-picture-basic.js';

import wordsearch from '../3-5/default/wordsearch.js';
import wordsearch6 from '../3-5/default/wordsearch-6.js';
import crossword from '../3-5/default/crossword.js';
import reading from '../3-5/default/reading.js';
import readingKg from '../3-5/default/reading-sc.js';
import sudoku from '../3-5/default/sudoku.js';
import sudoku4 from '../3-5/default/sudoku-4-sc.js';
import clock from '../3-5/default/clock.js';
import clock4 from '../3-5/default/clock-4-sc.js';
import games from '../3-5/default/games.js';
import gk3 from '../3-5/default/gk-3.js';
import gk6 from '../3-5/default/gk-6.js';

let mainMenu = {
  id: 'pschool',
  label: 'Showcase',
  style: {},
  type: 'curriculumIcon',
  appLink: {
    label:
      'Download PSchool app from Google Play Store and practice offline. It has more activities too.',
    androidLink:
      'https://play.google.com/store/apps/details?id=com.gotowisdom.pschool'
  },
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
      label: 'Class 4',
      default: true
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
    fun,
    alphabets,
    math,
    math3,
    math6,
    grammar,
    grammar3,
    grammar6,
    vocabulary,
    vocabulary3,
    vocabulary6,
    reading,
    readingKg,
    clock,
    clock4,
    picture,
    sound,
    science,
    science3,
    science6,
    social,
    social6,
    sudoku,
    sudoku4,
    wordsearch,
    wordsearch6,
    crossword,
    games,
    gk3,
    gk6,
    {
      label: 'Tamil',
      id: 'tamil',
      img: 'tamil',
      dynamic: true,
      grade: '0-8'
    },
    /*
    {
      label: 'Tamil',
      id: 'tamil',
      img: 'tamil',
      alt: 'tamil icon',
      desc: 'Tamil group',
      separateApp: {
        url: 'https://www.palagutamil.in',
        label: 'www.palagutamil.in'
      },
      dynamic: true
    },*/
    {
      label: 'Hindi',
      id: 'hindi',
      img: 'hindi',
      grade: '0-8',
      dynamic: true
    },
    {
      label: 'Marathi',
      id: 'marathi',
      img: 'marathi',
      grade: '0-8',
      dynamic: true
    },
    /*
    {
      label: 'Hindi',
      id: 'hindi',
      img: 'hindi',
      alt: 'hindi icon',
      desc: 'Hindi group',
      separateApp: {
        url: 'https://hi.pschool.in',
        label: 'hi.pschool.in'
      },
      dynamic: true
    },*/
    {
      label: 'Telugu',
      id: 'telugu',
      img: 'telugu',
      alt: 'telugu icon',
      desc: 'Telugu group',
      grade: '0-8',
      dynamic: true
    },
    {
      label: 'Kannada',
      id: 'kannada',
      img: 'kannada',
      alt: 'kannada icon',
      desc: 'Kannada group',
      grade: '0-8',
      dynamic: true
    },
    {
      label: 'Malayalam',
      id: 'malayalam',
      img: 'malayalam',
      alt: 'malayalam icon',
      desc: 'Malayalam group',
      grade: '0-8',
      dynamic: true
    },
    {
      label: 'Bengali',
      id: 'bengali',
      img: 'bengali',
      grade: '0-8',
      dynamic: true
    }
    /*
    {
      label: 'Bengali',
      id: 'bengali',
      img: 'bengali',
      alt: 'bengali icon',
      desc: 'bengali group',
      separateApp: {
        url: 'https://bn.pschool.in',
        label: 'bn.pschool.in'
      },
      dynamic: true
    }
    */
  ]
};
//Rethna: The below code is used to detect the number of activites
/*
let total = 0;
mainMenu.forEach((playlist) => {
  if (playlist.list) {
    let count = playlist.list.reduce(
      (accu, item) =>
        Array.isArray(item.data) ? accu + item.data.length : accu + 1,
      0
    );
    total += count;
  }
});
*/
export default mainMenu;
