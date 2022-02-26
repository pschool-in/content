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

import fun from '../playlists/default/fun.js';
import alphabets from '../playlists/default/alphabets.js';
import grammar from '../playlists/default/grammar.js';
import vocabulary from '../playlists/default/vocabulary.js';
import math from '../playlists/default/math.js';
import science from '../playlists/default/science.js';
import social from '../playlists/default/social.js';
import dragdrop from '../playlists/default/dragdrop.js';
import wordsearch from '../playlists/default/wordsearch.js';
import crossword from '../playlists/default/crossword.js';
import reading from '../playlists/default/reading.js';
import sudoku from '../playlists/default/sudoku.js';
import clock from '../playlists/default/clock.js';
import games from '../playlists/default/games.js';

let mainMenu = {
  label: 'Showcase',
  style: {},
  list: [
    fun,
    alphabets,
    reading,
    grammar,
    vocabulary,
    math,
    clock,
    science,
    social,
    dragdrop,
    sudoku,
    wordsearch,
    crossword,
    games,
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
    },
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
    },
    {
      label: 'Telugu',
      id: 'telugu',
      img: 'telugu',
      alt: 'telugu icon',
      desc: 'Telugu group',
      dynamic: true
    },
    {
      label: 'Kannada',
      id: 'kannada',
      img: 'kannada',
      alt: 'kannada icon',
      desc: 'Kannada group',
      dynamic: true
    },
    {
      label: 'Malayalam',
      id: 'malayalam',
      img: 'malayalam',
      alt: 'malayalam icon',
      desc: 'Malayalam group',
      dynamic: true
    },
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
    console.log(playlist.label, count);
    total += count;
  }
});
console.log('total activities', total);
*/
export default mainMenu;
