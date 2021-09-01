import letter from '../playlists/hi-letter.js';
import picture from '../playlists/hi-picture.js';
import sound from '../playlists/hi-sound.js';
import grammar from '../playlists/hi-grammar.js';
import word from '../playlists/hi-word.js';
import sentence from '../playlists/hi-sentence.js';
import wordsearch from '../playlists/hi-wordsearch.js';
import crossword from '../playlists/hi-crossword.js';
import reading from '../playlists/hi-reading.js';
import science from '../playlists/hi-science.js';
import social from '../playlists/hi-social.js';
import poem from '../playlists/hi-poem.js';
import essay from '../playlists/hi-essay.js';

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
    essay
  ]
};
