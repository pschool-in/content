export default {
  label: 'शब्द खोज',
  id: 'hi-wordsearch',
  img: 'wordsearch',
  list: [
    {
      id: '100',
      label: 'शब्द खोज 1',
      type: 'wordsearch',
      data: {
        lang: 'hi',
        showWords: true,
        table: [
          ['र', 'वि', 'वा', 'र', 'ऊ', 'अ', 'त', 'सो'],
          ['ड', 'गु', 'ऊ', 'ज', 'ञ', 'ढ', 'द', 'म'],
          ['ऐ', 'ड', 'रु', 'ज्ञ', 'थ', 'द', 'ब', 'वा'],
          ['म', 'श', 'प', 'वा', 'त', 'ज', 'अ', 'र'],
          ['बु', 'ऊ', 'नि', 'य', 'र', 'ऊ', 'ङ', 'ल'],
          ['ध', 'घ', 'र', 'वा', 'शु', 'क्र', 'वा', 'र'],
          ['वा', 'झ', 'ड', 'ई', 'र', 'आ', 'ध', 'स'],
          ['र', 'ठ', 'ड', 'मं', 'ग', 'ल', 'वा', 'र']
        ],
        title: 'Find the given words from the table.',
        words: [
          {
            marker: [0, 0, 3, 0],
            word: 'रविवार'
          },
          {
            marker: [7, 0, 7, 3],
            word: 'सोमवार'
          },
          {
            marker: [3, 7, 7, 7],
            word: 'मंगलवार'
          },
          {
            marker: [0, 4, 0, 7],
            word: 'बुधवार'
          },
          {
            marker: [1, 1, 4, 4],
            word: 'गुरुवार'
          },
          {
            marker: [1, 3, 4, 6],
            word: 'शनिवार'
          },
          {
            marker: [4, 5, 7, 5],
            word: ['शु', 'क्र', 'वा', 'र']
          }
        ]
      }
    },
    {
      id: '200',
      type: 'wordsearch',
      label: 'शब्द खोज - दिन',
      data: {
        title: 'दिनों का पता लगाएं',
        words: [
          {
            word: ['र', 'बि', 'वा', 'र'],
            marker: [0, 0, 3, 3]
          },
          {
            word: ['सो', 'म', 'वा', 'र'],
            marker: [7, 0, 7, 3]
          },
          {
            word: ['मं', 'ग', 'ल', 'वा', 'र'],
            marker: [0, 4, 4, 4]
          },
          {
            word: ['बु', 'ध', 'वा', 'र'],
            marker: [5, 0, 5, 3]
          },
          {
            word: ['गु', 'रु', 'वा', 'र'],
            marker: [0, 6, 3, 6]
          },
          {
            word: ['शु', 'क्', 'र', 'वा', 'र'],
            marker: [3, 7, 7, 7]
          },
          {
            word: ['श', 'नि', 'वा', 'र'],
            marker: [7, 4, 7, 7]
          }
        ],
        table: [
          ['र', 'त', 'ढ', 'ज्ञ', 'ञ', 'बु', 'ज्ञ', 'सो'],
          ['ध', 'बि', 'ष', 'ख', 'ई', 'ध', 'अः', 'म'],
          ['ष', 'स', 'वा', 'व', 'अ', 'वा', 'औ', 'वा'],
          ['ब', 'स', 'थ', 'र', 'अं', 'र', 'अः', 'र'],
          ['मं', 'ग', 'ल', 'वा', 'र', 'ख', 'ए', 'श'],
          ['ळ', 'भ', 'ज', 'आ', 'ह', 'ऋ', 'ट', 'नि'],
          ['गु', 'रु', 'वा', 'र', 'न', 'ण', 'य', 'वा'],
          ['ग', 'ऋ', 'औ', 'शु', 'क्', 'र', 'वा', 'र']
        ],
        lang: 'hi',
        showWords: false
      }
    },
    {
      id: '300',
      type: 'wordsearch',
      label: 'शब्द खोज - फल',
      data: {
        title: 'फलों का पता लगाएं',
        words: [
          {
            word: ['आ', 'म'],
            marker: [0, 0, 1, 1]
          },
          {
            word: ['के', 'ला'],
            marker: [0, 2, 1, 2]
          },
          {
            word: ['सं', 'त', 'रा'],
            marker: [3, 0, 3, 2]
          },
          {
            word: ['ख', 'र', 'बू', 'जा'],
            marker: [0, 3, 3, 6]
          },
          {
            word: ['अ', 'ना', 'र'],
            marker: [7, 0, 7, 2]
          },
          {
            word: ['अं', 'गू', 'र'],
            marker: [4, 3, 6, 5]
          },
          {
            word: ['ली', 'ची'],
            marker: [0, 7, 1, 7]
          },
          {
            word: ['त', 'र', 'बू', 'ज'],
            marker: [3, 4, 6, 7]
          },
          {
            word: ['ना', 'श', 'पा', 'ती'],
            marker: [7, 4, 7, 7]
          }
        ],
        table: [
          ['आ', 'म', 'व', 'सं', 'ई', 'ल', 'त', 'अ'],
          ['ख', 'म', 'क', 'त', 'ङ', 'ड', 'न', 'ना'],
          ['के', 'ला', 'ढ', 'रा', 'ऊ', 'अं', 'श', 'र'],
          ['ख', 'ग', 'ण', 'ऐ', 'अं', 'ख', 'त', 'थ'],
          ['छ', 'र', 'द', 'त', 'ख', 'गू', 'अः', 'ना'],
          ['अं', 'ट', 'बू', 'प', 'र', 'त', 'र', 'श'],
          ['ध', 'ओ', 'ट', 'जा', 'थ', 'बू', 'प', 'पा'],
          ['ली', 'ची', 'झ', 'ठ', 'थ', 'प', 'ज', 'ती']
        ],
        lang: 'hi',
        showWords: false
      }
    },
    {
      id: '400',
      type: 'wordsearch',
      label: 'शब्द खोज - पशु',
      data: {
        title: 'जानवरों का पता लगाएं',
        words: [
          {
            word: ['शे', 'र'],
            marker: [5, 0, 5, 1]
          },
          {
            word: ['ख', 'र', 'गो', 'श'],
            marker: [0, 0, 3, 3]
          },
          {
            word: ['घो', 'डा'],
            marker: [0, 2, 0, 3]
          },
          {
            word: ['हा', 'थी'],
            marker: [3, 0, 3, 1]
          },
          {
            word: ['गा', 'य'],
            marker: [4, 5, 5, 5]
          },
          {
            word: ['कु', 'त्', 'ता'],
            marker: [0, 5, 2, 5]
          },
          {
            word: ['ब', 'क', 'री'],
            marker: [0, 4, 2, 4]
          }
        ],
        table: [
          ['ख', 'ल', 'ए', 'हा', 'न', 'शे'],
          ['क', 'र', 'घ', 'थी', 'ड', 'र'],
          ['घो', 'ऋ', 'गो', 'ख', 'झ', 'ध'],
          ['डा', 'स', 'ल', 'श', 'छ', 'न'],
          ['ब', 'क', 'री', 'ओ', 'ह', 'य'],
          ['कु', 'त्', 'ता', 'ळ', 'गा', 'य']
        ],
        lang: 'hi',
        showWords: true
      }
    },
    {
      id: '500',
      type: 'wordsearch',
      label: 'शब्द खोज - फूल',
      data: {
        title: 'फूलों का पता लगाएं',
        words: [
          {
            word: ['गु', 'ला', 'ब'],
            marker: [0, 0, 2, 2]
          },
          {
            word: ['क', 'म', 'ल'],
            marker: [3, 0, 3, 2]
          },
          {
            word: ['च', 'मे', 'ली'],
            marker: [0, 3, 2, 3]
          },
          {
            word: ['गें', 'दा'],
            marker: [0, 4, 1, 5]
          },
          {
            word: ['सू', 'र', 'ज', 'मु', 'खी'],
            marker: [5, 0, 5, 4]
          }
        ],
        table: [
          ['गु', 'उ', 'उ', 'क', 'न', 'सू'],
          ['ङ', 'ला', 'ण', 'म', 'औ', 'र'],
          ['व', 'क्ष', 'ब', 'ल', 'ए', 'ज'],
          ['च', 'मे', 'ली', 'ड', 'त', 'मु'],
          ['गें', 'घ', 'त', 'ञ', 'फ', 'खी'],
          ['ड', 'दा', 'त', 'स', 'ठ', 'ओ']
        ],
        lang: 'hi',
        showWords: true
      }
    },
    {
      id: '600',
      type: 'wordsearch',
      label: 'शब्द खोज - पक्षी',
      data: {
        title: 'पक्षियों का पता लगाएं',
        words: [
          {
            word: ['कौ', 'वा'],
            marker: [0, 0, 1, 1]
          },
          {
            word: ['सा', 'र', 'स'],
            marker: [3, 0, 5, 2]
          },
          {
            word: ['क', 'बू', 'त', 'र'],
            marker: [0, 2, 3, 2]
          },
          {
            word: ['को', 'य', 'ल'],
            marker: [0, 3, 2, 5]
          },
          {
            word: ['ब', 'त', 'ख़'],
            marker: [5, 3, 5, 5]
          },
          {
            word: ['गौ', 'रे', 'या'],
            marker: [2, 3, 4, 5]
          },
          {
            word: ['मै', 'ना'],
            marker: [0, 5, 1, 5]
          }
        ],
        table: [
          ['कौ', 'छ', 'ढ', 'सा', 'ञ', 'छ'],
          ['औ', 'वा', 'य', 'औ', 'र', 'ऐ'],
          ['क', 'बू', 'त', 'र', 'र', 'स'],
          ['को', 'च', 'गौ', 'ऐ', 'क', 'ब'],
          ['ठ', 'य', 'ञ', 'रे', 'ऐ', 'त'],
          ['मै', 'ना', 'ल', 'इ', 'या', 'ख़']
        ],
        lang: 'hi',
        showWords: false
      }
    },
    {
      id: '700',
      type: 'wordsearch',
      label: 'शब्द खोज - पक्षी',
      data: {
        title: 'पक्षियों का पता लगाएं',
        words: [
          {
            word: ['मो', 'र'],
            marker: [0, 0, 1, 0]
          },
          {
            word: ['हं', 'स'],
            marker: [0, 1, 0, 2]
          },
          {
            word: ['ब', 'गु', 'ला'],
            marker: [5, 0, 5, 2]
          },
          {
            word: ['ती', 'त', 'र'],
            marker: [2, 2, 4, 4]
          },
          {
            word: ['नी', 'ल', 'कं', 'ठ'],
            marker: [0, 5, 3, 5]
          },
          {
            word: ['मै', 'ना'],
            marker: [0, 3, 1, 4]
          }
        ],
        table: [
          ['मो', 'र', 'ध', 'आ', 'इ', 'ब'],
          ['हं', 'ड', 'ण', 'त', 'अ', 'गु'],
          ['स', 'ञ', 'ती', 'ध', 'ए', 'ला'],
          ['मै', 'ध', 'ध', 'त', 'ऋ', 'आ'],
          ['ह', 'ना', 'अं', 'ई', 'र', 'ल'],
          ['नी', 'ल', 'कं', 'ठ', 'घ', 'ष']
        ],
        lang: 'hi',
        showWords: true
      }
    },
    {
      id: '800',
      type: 'wordsearch',
      label: 'शब्द खोज - महीनो के नाम',
      data: {
        title: 'महीनो के नाम खोजें',
        words: [
          {
            word: ['ज', 'न', 'व', 'री'],
            marker: [0, 0, 3, 0]
          },
          {
            word: ['मा', 'र्', 'च'],
            marker: [0, 1, 2, 3]
          },
          {
            word: ['फ', 'र', 'व', 'री'],
            marker: [4, 2, 4, 5]
          },
          {
            word: ['अ', 'प्', 'रै', 'ल'],
            marker: [0, 7, 3, 7]
          },
          {
            word: ['म', 'ई'],
            marker: [7, 0, 7, 1]
          },
          {
            word: ['जू', 'न'],
            marker: [0, 3, 1, 4]
          },
          {
            word: ['जु', 'ला', 'ई'],
            marker: [7, 3, 7, 5]
          },
          {
            word: ['अ', 'ग', 'स्', 'त'],
            marker: [4, 6, 7, 6]
          },
          {
            word: ['सि', 'त', 'म्', 'ब', 'र'],
            marker: [3, 1, 3, 5]
          },
          {
            word: ['अ', 'क्', 'टू', 'ब', 'र'],
            marker: [5, 0, 5, 4]
          },
          {
            word: ['न', 'वं', 'ब', 'र'],
            marker: [0, 6, 3, 6]
          },
          {
            word: ['दि', 'सं', 'ब', 'र'],
            marker: [6, 1, 6, 4]
          }
        ],
        table: [
          ['ज', 'न', 'व', 'री', 'क', 'अ', 'व', 'म'],
          ['मा', 'ङ', 'झ', 'सि', 'क्ष', 'क्', 'दि', 'ई'],
          ['ण', 'र्', 'ट', 'त', 'फ', 'टू', 'सं', 'ड'],
          ['जू', 'ऊ', 'च', 'म्', 'र', 'ब', 'ब', 'जु'],
          ['अ', 'न', 'ल', 'ब', 'व', 'र', 'र', 'ला'],
          ['औ', 'क्ष', 'अः', 'र', 'री', 'ख', 'य', 'ई'],
          ['न', 'वं', 'ब', 'र', 'अ', 'ग', 'स्', 'त'],
          ['अ', 'प्', 'रै', 'ल', 'त', 'उ', 'झ', 'ख']
        ],
        lang: 'hi',
        showWords: true
      }
    },
    {
      id: '900',
      type: 'wordsearch',
      label: 'शब्द खोज - रंग',
      data: {
        title: 'रंग खोजें',
        words: [
          {
            word: ['स', 'फे', 'द'],
            marker: [0, 0, 2, 2]
          },
          {
            word: ['का', 'ला'],
            marker: [5, 0, 5, 1]
          },
          {
            word: ['नी', 'ला'],
            marker: [0, 2, 1, 3]
          },
          {
            word: ['पी', 'ला'],
            marker: [0, 4, 1, 4]
          },
          {
            word: ['ला', 'ल'],
            marker: [5, 3, 5, 4]
          },
          {
            word: ['ह', 'रा'],
            marker: [3, 4, 3, 5]
          },
          {
            word: ['गु', 'ला', 'बी'],
            marker: [3, 0, 3, 2]
          },
          {
            word: ['भू', 'रा'],
            marker: [0, 5, 1, 5]
          }
        ],
        table: [
          ['स', 'ऊ', 'ङ', 'गु', 'ण', 'का'],
          ['फ', 'फे', 'इ', 'ला', 'र', 'ला'],
          ['नी', 'थ', 'द', 'बी', 'ञ', 'ड'],
          ['ण', 'ला', 'उ', 'अः', 'आ', 'ला'],
          ['पी', 'ला', 'ळ', 'ह', 'अं', 'ल'],
          ['भू', 'रा', 'आ', 'रा', 'ज', 'औ']
        ],
        lang: 'hi',
        showWords: false
      }
    },
    {
      id: '1000',
      type: 'wordsearch',
      label: 'शब्द खोज - सब्जियां',
      data: {
        title: 'सब्जियां खोजें',
        words: [
          {
            word: ['पा', 'ल', 'क'],
            marker: [0, 0, 2, 2]
          },
          {
            word: ['आ', 'लू'],
            marker: [5, 0, 5, 1]
          },
          {
            word: ['बैं', 'ग', 'न'],
            marker: [0, 3, 2, 3]
          },
          {
            word: ['ट', 'मा', 'ट', 'र'],
            marker: [5, 2, 5, 5]
          },
          {
            word: ['भिं', 'डी'],
            marker: [0, 4, 1, 5]
          },
          {
            word: ['म', 'ट', 'र'],
            marker: [3, 3, 3, 5]
          },
          {
            word: ['ध', 'नि', 'या'],
            marker: [2, 0, 4, 2]
          },
          {
            word: ['गो', 'भी'],
            marker: [4, 4, 4, 5]
          }
        ],
        table: [
          ['पा', 'ह', 'ध', 'श', 'स', 'आ'],
          ['ज्ञ', 'ल', 'झ', 'नि', 'क', 'लू'],
          ['ज', 'र', 'क', 'अं', 'या', 'ट'],
          ['बैं', 'ग', 'न', 'म', 'च', 'मा'],
          ['भिं', 'इ', 'भ', 'ट', 'गो', 'ट'],
          ['च', 'डी', 'थ', 'र', 'भी', 'र']
        ],
        lang: 'hi',
        showWords: false
      }
    },
    {
      id: '1100',
      type: 'wordsearch',
      label: 'शब्द खोज - शहर',
      data: {
        title: 'शहरों का पता लगाएं',
        words: [
          {
            word: ['दि', 'ल्', 'ली'],
            marker: [0, 0, 2, 0]
          },
          {
            word: ['मुं', 'ब', 'ई'],
            marker: [0, 1, 2, 3]
          },
          {
            word: ['को', 'ल', 'का', 'ता'],
            marker: [5, 0, 5, 3]
          },
          {
            word: ['ज', 'य', 'पु', 'र'],
            marker: [2, 5, 5, 5]
          },
          {
            word: ['आ', 'ग', 'रा'],
            marker: [0, 3, 0, 5]
          },
          {
            word: ['गो', 'वा'],
            marker: [3, 2, 4, 3]
          },
          {
            word: ['इं', 'दौ', 'र'],
            marker: [3, 4, 5, 4]
          },
          {
            word: ['मे', 'र', 'ठ'],
            marker: [4, 0, 4, 2]
          }
        ],
        table: [
          ['दि', 'ल्', 'ली', 'ज्ञ', 'मे', 'को'],
          ['मुं', 'ष', 'ङ', 'च', 'र', 'ल'],
          ['ळ', 'ब', 'अं', 'गो', 'ठ', 'का'],
          ['आ', 'ठ', 'ई', 'अं', 'वा', 'ता'],
          ['ग', 'क', 'ए', 'इं', 'दौ', 'र'],
          ['रा', 'ञ', 'ज', 'य', 'पु', 'र']
        ],
        lang: 'hi',
        showWords: false
      }
    },
    {
      id: '1200',
      type: 'wordsearch',
      label: 'शब्द खोज - रिश्तेदार',
      data: {
        title: 'रिश्तेदारों को खोजें',
        words: [
          {
            word: ['मा', 'मा'],
            marker: [0, 0, 1, 1]
          },
          {
            word: ['चा', 'चा'],
            marker: [5, 0, 5, 1]
          },
          {
            word: ['ब', 'ह', 'न'],
            marker: [0, 2, 0, 4]
          },
          {
            word: ['भा', 'भी'],
            marker: [3, 1, 3, 2]
          },
          {
            word: ['पा', 'पा'],
            marker: [1, 3, 2, 4]
          },
          {
            word: ['भा', 'ई'],
            marker: [5, 3, 5, 4]
          },
          {
            word: ['बु', 'आ'],
            marker: [1, 5, 2, 5]
          },
          {
            word: ['फू', 'फा'],
            marker: [4, 5, 5, 5]
          }
        ],
        table: [
          ['मा', 'झ', 'प', 'झ', 'ह', 'चा'],
          ['स', 'मा', 'द', 'भा', 'इ', 'चा'],
          ['ब', 'ट', 'क्ष', 'भी', 'अः', 'श'],
          ['ह', 'पा', 'श', 'ई', 'म', 'भा'],
          ['न', 'क्ष', 'पा', 'अः', 'ष', 'ई'],
          ['छ', 'बु', 'आ', 'ण', 'फू', 'फा']
        ],
        lang: 'hi',
        showWords: false
      }
    },
    {
      id: '1300',
      type: 'wordsearch',
      label: 'शब्द खोज - वाहन',
      data: {
        title: 'वाहनों का पता लगाएं',
        words: [
          {
            word: ['ब', 'स'],
            marker: [0, 0, 0, 1]
          },
          {
            word: ['का', 'र'],
            marker: [2, 0, 3, 0]
          },
          {
            word: ['ट्', 'र', 'क'],
            marker: [0, 5, 2, 5]
          },
          {
            word: ['जी', 'प'],
            marker: [4, 0, 5, 1]
          },
          {
            word: ['ज', 'हा', 'ज'],
            marker: [1, 2, 3, 4]
          },
          {
            word: ['बै', 'ल', 'गा', 'ड़ी'],
            marker: [5, 2, 5, 5]
          },
          {
            word: ['स्', 'कू', 'ट', 'र'],
            marker: [4, 2, 4, 5]
          },
          {
            word: ['ना', 'व'],
            marker: [0, 4, 1, 4]
          }
        ],
        table: [
          ['ब', 'ऐ', 'का', 'र', 'जी', 'ष'],
          ['स', 'झ', 'ड', 'क', 'प', 'प'],
          ['ओ', 'ज', 'ज्ञ', 'ल', 'स्', 'बै'],
          ['ऐ', 'अं', 'हा', 'क', 'कू', 'ल'],
          ['ना', 'व', 'म', 'ज', 'ट', 'गा'],
          ['ट्', 'र', 'क', 'ख', 'र', 'ड़ी']
        ],
        lang: 'hi',
        showWords: true
      }
    },
    {
      id: '1400',
      type: 'wordsearch',
      label: 'शब्द खोज - घरेलू सामान',
      data: {
        title: 'घरेलू सामान खोजें',
        words: [
          {
            word: ['अ', 'ल', 'मा', 'री'],
            marker: [0, 0, 0, 3]
          },
          {
            word: ['छा', 'ता'],
            marker: [1, 0, 2, 1]
          },
          {
            word: ['चि', 'म', 'टा'],
            marker: [0, 5, 2, 5]
          },
          {
            word: ['न', 'ल', 'का'],
            marker: [3, 0, 5, 2]
          },
          {
            word: ['पा', 'य', 'दा', 'न'],
            marker: [1, 3, 4, 3]
          },
          {
            word: ['बो', 'त', 'ल'],
            marker: [3, 4, 5, 4]
          },
          {
            word: ['चा', 'भी'],
            marker: [5, 0, 5, 1]
          },
          {
            word: ['छ', 'ल', 'नी'],
            marker: [1, 2, 3, 2]
          }
        ],
        table: [
          ['अ', 'छा', 'ठ', 'न', 'ष', 'चा'],
          ['ल', 'भ', 'ता', 'व', 'ल', 'भी'],
          ['मा', 'छ', 'ल', 'नी', 'ई', 'का'],
          ['री', 'पा', 'य', 'दा', 'न', 'ज'],
          ['फ', 'त', 'छ', 'बो', 'त', 'ल'],
          ['चि', 'म', 'टा', 'ळ', 'ढ', 'व']
        ],
        lang: 'hi',
        showWords: true
      }
    },
    {
      id: '1500',
      type: 'wordsearch',
      label: 'शब्द खोज - घरेलू 2',
      data: {
        title: 'घरेलू सामान खोजें',
        words: [
          {
            word: ['धू', 'प', 'दा', 'न'],
            marker: [0, 0, 3, 0]
          },
          {
            word: ['टो', 'क', 'री'],
            marker: [2, 1, 4, 3]
          },
          {
            word: ['म', 'थ', 'नी'],
            marker: [0, 2, 0, 4]
          },
          {
            word: ['चा', 'द', 'र'],
            marker: [5, 1, 5, 3]
          },
          {
            word: ['धा', 'गा'],
            marker: [1, 3, 2, 4]
          },
          {
            word: ['त', 'कि', 'या'],
            marker: [1, 5, 3, 5]
          },
          {
            word: ['रा', 'ख'],
            marker: [4, 4, 5, 5]
          },
          {
            word: ['झू', 'ला'],
            marker: [1, 1, 2, 2]
          }
        ],
        table: [
          ['धू', 'प', 'दा', 'न', 'ज', 'ष'],
          ['द', 'झू', 'टो', 'ल', 'ब', 'चा'],
          ['म', 'ष', 'ला', 'क', 'ई', 'द'],
          ['थ', 'धा', 'ह', 'क', 'री', 'र'],
          ['नी', 'ज', 'गा', 'ज', 'रा', 'ठ'],
          ['ऋ', 'त', 'कि', 'या', 'र', 'ख']
        ],
        lang: 'hi',
        showWords: true
      }
    },
    {
      id: '1600',
      type: 'wordsearch',
      label: 'शब्द खोज - नदियाँ',
      data: {
        title: 'नदियों का पता लगाएं',
        words: [
          {
            word: ['गं', 'गा'],
            marker: [0, 0, 1, 0]
          },
          {
            word: ['स', 'त', 'लु', 'ज'],
            marker: [5, 0, 5, 3]
          },
          {
            word: ['सिं', 'धु'],
            marker: [0, 1, 1, 2]
          },
          {
            word: ['झे', 'ल', 'म'],
            marker: [0, 3, 2, 3]
          },
          {
            word: ['य', 'मु', 'ना'],
            marker: [3, 0, 3, 2]
          },
          {
            word: ['चं', 'ब', 'ल'],
            marker: [0, 5, 2, 5]
          },
          {
            word: ['घा', 'घ', 'रा'],
            marker: [3, 3, 5, 5]
          },
          {
            word: ['को', 'सी'],
            marker: [1, 4, 2, 4]
          }
        ],
        table: [
          ['गं', 'गा', 'अं', 'य', 'उ', 'स'],
          ['सिं', 'थ', 'म', 'मु', 'ठ', 'त'],
          ['ष', 'धु', 'य', 'ना', 'स', 'लु'],
          ['झे', 'ल', 'म', 'घा', 'य', 'ज'],
          ['ऐ', 'को', 'सी', 'ध', 'घ', 'श'],
          ['चं', 'ब', 'ल', 'ओ', 'झ', 'रा']
        ],
        lang: 'hi',
        showWords: false
      }
    },
    {
      id: '1700',
      type: 'wordsearch',
      label: 'शब्द खोज - स्मारक',
      data: {
        title: 'स्मारक खोजें',
        words: [
          {
            word: ['ता', 'ज', 'म', 'ह', 'ल'],
            marker: [0, 0, 4, 0]
          },
          {
            word: ['ला', 'ल', 'कि', 'ला'],
            marker: [7, 0, 7, 3]
          },
          {
            word: ['कु', 'तु', 'ब', 'मी', 'ना', 'र'],
            marker: [0, 2, 0, 7]
          },
          {
            word: ['इं', 'डि', 'या', 'गे', 'ट'],
            marker: [2, 3, 6, 7]
          },
          {
            word: ['ह', 'वा', 'म', 'ह', 'ल'],
            marker: [5, 0, 5, 4]
          },
          {
            word: ['जं', 'त', 'र', 'मं', 'त', 'र'],
            marker: [1, 2, 1, 7]
          },
          {
            word: ['चा', 'र', 'मी', 'ना', 'र'],
            marker: [6, 1, 6, 5]
          }
        ],
        table: [
          ['ता', 'ज', 'म', 'ह', 'ल', 'ह', 'ऐ', 'ला'],
          ['ढ', 'औ', 'ध', 'अः', 'ई', 'वा', 'चा', 'ल'],
          ['कु', 'जं', 'ग', 'अ', 'आ', 'म', 'र', 'कि'],
          ['तु', 'त', 'इं', 'ठ', 'अः', 'ह', 'मी', 'ला'],
          ['ब', 'र', 'थ', 'डि', 'ए', 'ल', 'ना', 'ष'],
          ['मी', 'मं', 'श', 'ई', 'या', 'ए', 'र', 'ग'],
          ['ना', 'त', 'ज्ञ', 'च', 'आ', 'गे', 'द', 'फ'],
          ['र', 'र', 'व', 'र', 'ड', 'ङ', 'ट', 'ऋ']
        ],
        lang: 'hi',
        showWords: false
      }
    },
    {
      id: '1800',
      type: 'wordsearch',
      label: 'शब्द खोज - मिठाई',
      data: {
        title: 'मिठाई खोजें',
        words: [
          {
            word: ['ज', 'ले', 'बी'],
            marker: [0, 0, 2, 0]
          },
          {
            word: ['खी', 'र'],
            marker: [5, 0, 5, 1]
          },
          {
            word: ['ह', 'ल', 'वा'],
            marker: [0, 1, 2, 3]
          },
          {
            word: ['गु', 'जि', 'या'],
            marker: [3, 2, 5, 2]
          },
          {
            word: ['गु', 'ला', 'ब', 'जा', 'मु', 'न'],
            marker: [0, 5, 5, 5]
          },
          {
            word: ['घे', 'व', 'र'],
            marker: [3, 1, 5, 1]
          },
          {
            word: ['का', 'जू', 'क', 'त', 'ली'],
            marker: [1, 4, 5, 4]
          }
        ],
        table: [
          ['ज', 'ले', 'बी', 'औ', 'द', 'खी'],
          ['ह', 'ग', 'ङ', 'घे', 'व', 'र'],
          ['ड', 'ल', 'म', 'गु', 'जि', 'या'],
          ['श', 'अ', 'वा', 'श', 'आ', 'आ'],
          ['द', 'का', 'जू', 'क', 'त', 'ली'],
          ['गु', 'ला', 'ब', 'जा', 'मु', 'न']
        ],
        lang: 'hi',
        showWords: false
      }
    },
    {
      id: '1900',
      type: 'wordsearch',
      label: 'शब्द खोज - शरीर के अंग',
      data: {
        title: 'शरीर के अंगों का पता लगाएं',
        words: [
          {
            word: ['बा', 'ल'],
            marker: [1, 0, 2, 0]
          },
          {
            word: ['भु', 'जा'],
            marker: [4, 0, 5, 1]
          },
          {
            word: ['क', 'म', 'र'],
            marker: [0, 1, 2, 1]
          },
          {
            word: ['पे', 'ट'],
            marker: [3, 2, 3, 3]
          },
          {
            word: ['घु', 'ट', 'ना'],
            marker: [2, 3, 4, 3]
          },
          {
            word: ['ग', 'ला'],
            marker: [0, 3, 0, 4]
          },
          {
            word: ['हा', 'थ'],
            marker: [5, 3, 5, 4]
          },
          {
            word: ['ना', 'क'],
            marker: [1, 5, 2, 5]
          },
          {
            word: ['का', 'न'],
            marker: [4, 4, 4, 5]
          },
          {
            word: ['पै', 'र'],
            marker: [0, 2, 1, 2]
          }
        ],
        table: [
          ['आ', 'बा', 'ल', 'क्ष', 'भु', 'ड'],
          ['क', 'म', 'र', 'ष', 'ण', 'जा'],
          ['पै', 'र', 'श', 'पे', 'त', 'व'],
          ['ग', 'प', 'घु', 'ट', 'ना', 'हा'],
          ['ला', 'इ', 'ण', 'म', 'का', 'थ'],
          ['र', 'ना', 'क', 'ड', 'न', 'ई']
        ],
        lang: 'hi',
        showWords: true
      }
    }
  ]
};