import letter from '../playlists/default/hi-letter.js';
import picture from '../playlists/default/hi-picture.js';
import sound from '../playlists/default/hi-sound.js';
import grammar from '../playlists/default/hi-grammar-5.js';
import word from '../playlists/default/hi-word-2.js';
import sentence from '../playlists/default/hi-sentence-5.js';
import wordsearch from '../playlists/default/hi-wordsearch.js';
import crossword from '../playlists/default/hi-crossword.js';
import reading from '../playlists/default/hi-reading-3.js';
import science from '../playlists/default/hi-science.js';
import social from '../playlists/default/hi-social.js';
import poem from '../playlists/default/hi-poem.js';
// import essay from '../playlists/default/hi-essay.js';

export default {
  //label: 'हिंदी',
  contactInfo:
    'यदि आपको किसी विषय में कोई समस्या मिलती है या आप हमारे साथ बात  करना चाहते हैं, तो कृपया info@pschool.in पर एक ईमेल लिखें।',
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
    poem,
    // essay
  ]
};
