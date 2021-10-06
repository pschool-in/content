/*
import letter from '../playlists/bn-letter';
import picture from '../playlists/bn-picture';
import sound from '../playlists/bn-sound';
import grammar from '../playlists/bn-grammar';
import word from '../playlists/bn-word';
import sentence from '../playlists/bn-sentence';
import wordsearch from '../playlists/bn-wordsearch';
import crossword from '../playlists/bn-crossword';
import reading from '../playlists/bn-reading';
import science from '../playlists/bn-science';
import social from '../playlists/bn-social';
import poem from '../playlists/bn-poem';
*/

import letter from '../playlists/default/bn-letter.js';
import sound from '../playlists/default/bn-sound.js';
import picture from '../playlists/default/bn-picture.js';
import word from '../playlists/default/bn-word.js';
import grammar from '../playlists/default/bn-grammar-5.js';
import sentence from '../playlists/default/bn-sentence.js';
import reading from '../playlists/default/bn-reading-3.js';
//import poem from '../playlists/default/bn-poem-1.js';
import science from '../playlists/default/bn-science.js';
import social from '../playlists/default/bn-social.js';
import wordsearch from '../playlists/default/bn-wordsearch.js';
import crossword from '../playlists/default/bn-crossword.js';
import sukumar from '../playlists/default/bn-sukumar-poem.js';

export default {
  //label: 'বাংলা',
  contactInfo:
    'বিষয়বস্তুতে কোন সমস্যা খুঁজে পেলে, আপনি আমাদের সাথে সরাসরি যোগাযোগ করতে পারেন। দয়া করে ইমেল লিখুন এই ঠিকানায় info@pschool.in',
  style: {
    fontSize: '0.9rem'
  },
  list: [
    letter,
    sound,
    picture,
    word,
    sentence,
    grammar,
    reading,
    //poem,
    sukumar,
    wordsearch,
    crossword,
    social,
    science
  ]
};
