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

export default {
  label: 'বাংলা',
  style: {
    fontSize: '0.9rem'
  },
  list: [
    letter,
    sound,
    picture,
    word,
    sentence,
    reading,
    grammar,
    science,
    social,
    wordsearch,
    crossword,
    poem
  ]
  /*
  list: [
     বর্ণ,
    শব্দ,
    ছবি,
    শব্দভাণ্ডার,
    বাক্য,
    পাঠ,
    ব্যাকরণ,
    বিজ্ঞান,
    সমাজবিজ্ঞান,
    শব্দ খোজা,
    শব্দদ্বন্দ,
    কবিতা
  ]*/
};
