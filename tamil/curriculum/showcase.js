/*
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

import letter from '../playlists/default/ta-letter.js';
import picture from '../playlists/default/ta-picture.js';
import grammar from '../playlists/default/ta-grammar.js';
import vocabulary from '../playlists/default/ta-word.js';
import wordsearch from '../playlists/default/ta-wordsearch.js';
import crossword from '../playlists/default/ta-crossword.js';
import reading from '../playlists/default/ta-reading.js';
import science from '../playlists/default/ta-science.js';
import social from '../playlists/default/ta-social.js';
import thirukkural from '../playlists/default/thirukkural.js';
import barathi from '../playlists/default/barathi.js';
import sound from '../playlists/default/ta-sound.js';

import sound1 from '../playlists/default/ta-sound-1.js';
import sound2 from '../playlists/more/ta-sound-2.js';
import letter2 from '../playlists/more/ta-letter-2.js';
import hindi from '../../hindi/playlists/default/hi-letter.js';

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
    letter,
    sound,
    picture,
    vocabulary,
    reading,
    grammar,
    science,
    social,
    wordsearch,
    crossword,
    thirukkural,
    barathi,
    sound1,
    sound2,
    letter2,
    hindi
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
