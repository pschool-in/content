/*
import writing from '../playlists/ta-writing';
import picture from '../playlists/ta-picture';
import picture2 from '../playlists/ta-picture-2';
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
import sound from '../playlists/ta-sound';
*/

import writing from '../playlists/ta-writing.js';
import picture from '../playlists/ta-picture.js';
import picture2 from '../playlists/ta-picture-2.js';
import grammar from '../playlists/ta-grammar.js';
import vocabulary from '../playlists/ta-word.js';
import sentence from '../playlists/ta-sentence.js';
import wordsearch from '../playlists/ta-wordsearch.js';
import crossword from '../playlists/ta-crossword.js';
import reading from '../playlists/ta-reading.js';
import science from '../playlists/ta-science.js';
import social from '../playlists/ta-social.js';
import thirukkural from '../playlists/thirukkural.js';
import thirukkural2 from '../playlists/thirukkural-2.js';
import thirukkural3 from '../playlists/thirukkural-3.js';
import thirukkural4 from '../playlists/thirukkural-4.js';
import thirukkural5 from '../playlists/thirukkural-5.js';
import barathi from '../playlists/barathi.js';
import sound from '../playlists/ta-sound.js';
import word2 from '../playlists/ta-word-2.js';
import spelling from '../playlists/ta-spell.js';
import kidsPoem from '../playlists/ta-kid-poems.js';
import poems from '../playlists/ta-poems.js';
/*
ta-kid-poems, ta-la-words, ta-na-words, ta-ra-words
ta-poems, thirukkural-2
*/

export default {
  //label: 'Tamil',
  contactInfo:
    'இந்த செயலியில் ஏதேனும் தவறு இருந்தால், அல்லது எங்களுடன் தகவல் பகிர்வு செய்ய info@pschool.in க்கு மின் அஞ்சல் அனுப்புக.',
  style: {
    fontSize: '0.9rem'
  },
  list: [
    writing,
    sound,
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
    thirukkural2,
    /* thirukkural3,
    thirukkural4,
    thirukkural5,*/
    barathi,
    picture2,
    word2,
    spelling,
    kidsPoem,
    poems
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
