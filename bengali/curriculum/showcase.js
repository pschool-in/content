import writing from '../playlists/bn-writing';
import picture from '../playlists/bn-picture';
import sound from '../playlists/bn-sound';
import grammar from '../playlists/bn-grammar';
import vocabulary from '../playlists/bn-word';
import sentence from '../playlists/bn-sentence';
import wordsearch from '../playlists/bn-wordsearch';
import crossword from '../playlists/bn-crossword';
import reading from '../playlists/bn-reading';
import science from '../playlists/bn-science';
import social from '../playlists/bn-social';
import poem from '../playlists/bn-poem';

export default {
  label: 'Bengali',
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
    poem
  ]
};
