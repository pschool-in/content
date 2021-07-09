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

let mainMenu = {
  style: {},
  list: [
    coloring,
    writing,
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
      slug: 'tamil',
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
      slug: 'hindi',
      id: 'hindi',
      img: 'hindi',
      alt: 'hindi icon',
      desc: 'Hindi group',
      dynamic: true
    },
    {
      label: 'Telugu',
      slug: 'telugu',
      id: 'telugu',
      img: 'telugu',
      alt: 'telugu icon',
      desc: 'Telugu group',
      dynamic: true
    },
    {
      label: 'Kannada',
      slug: 'kannada',
      id: 'kannada',
      img: 'kannada',
      alt: 'kannada icon',
      desc: 'Kannada group',
      dynamic: true
    },
    {
      label: 'Malayalam',
      slug: 'malayalam',
      id: 'malayalam',
      img: 'malayalam',
      alt: 'malayalam icon',
      desc: 'Malayalam group',
      dynamic: true
    },
    {
      label: 'Bengali',
      slug: 'bengali',
      id: 'bengali',
      img: 'bengali',
      alt: 'bengali icon',
      desc: 'bengali group',
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
