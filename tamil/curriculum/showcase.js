import writing from '../playlists/ta-writing';
import picture from '../playlists/ta-picture';
import grammar from '../playlists/ta-grammar';
import vocabulary from '../playlists/ta-word';
import sentence from '../playlists/ta-sentence';
import wordsearch from '../playlists/ta-wordsearch';
import crossword from '../playlists/ta-crossword';
import reading from '../playlists/ta-reading';
import science from '../playlists/ta-science';
import social from '../playlists/ta-social';
import thirukkural from '../playlists/thirukkural';
import barathi from '../playlists/barathi';

export default {
  label: 'Tamil',
  style: {
    fontSize: '0.9rem'
  },
  list: [
    writing,
    picture,
    vocabulary,
    sentence,
    reading,
    grammar,
    science,
    social,
    wordsearch,
    crossword,
    thirukkural,
    barathi
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
