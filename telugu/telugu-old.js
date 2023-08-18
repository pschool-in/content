export default {
  label: 'Telugu',
  lang: 'te',
  pageBreaks: '',
  id: 'telugu',
  list: [
 
    {
      type: 'completeWord',
      label: 'Complete the word',
      id: 'complete-words',
      data: {
        images: 'custom',
        text: `bell|గం,ట |_,ట | గం, లు, చ, ఒ
milk|పా,లు |పా,_ |లు, చ, ఒ, ఎ
leaf|ఆ,కు |_,కు |ఆ, లు, చ, ఒ
wheel|చ,క్రం |_,క్రం |చ, లు, ఒ, ఎ
five|ఐ,దు |_,దు |ఐ, రా, నె, ఎ
king|రా,జు |_,జు |రా, ఐ, నె, ఎ
peacock|నె,మ,లి |_,మ,లి |నె, ఐ, రా, ఎ
hen|కో,డి |_,డి |కో, ఐ, నె, ఎ`
      }
    },
    {
      type: 'match',
      label: 'Match Animals',
      data: {
        title: 'Match Animals with their first letter.',
        text:
          'సిం, lion \nఏ, elephant \nకో, monkey \nఎ, bear \nఖ, rhino \nమొ, crocodile',
        rightImgType: 'fruits',
        big: true
      },
      id: 'match-animals'
    },
    {
      type: 'match',
      label: 'Match Fruits',
      data: {
        title: 'Match Fruits with their first letter.',
        text:
          'ద్రా, grapes \nఅ, banana \nమా, mango \nబొ, papaya \nపు, watermelon\nదా, pomegranate',
        rightImgType: 'fruits',
        big: true
      },
      id: 'match-fruits'
    },
  
    {
      type: 'match',
      label: 'Match Flowers',
      data: {
        title: 'Match Flowers with their first letter.',
        text:
          'గు, rose \nక, lotus \nమం,hibiscus \nపొ, sunflower \nబం, marigold',
        rightImgType: 'fruits',
        big: true
      },
      id: 'match-flowers'
    },
    {
      data: {
        isWord: true,
        text: 'క మ లం\nప ల క\nత ల\nఎ లు క\nఅ మ్మ\nఊ య ల\nఊ య ల',
        title: 'Connect the blocks to form meaningful word.'
      },
      id: 'jumbled-word',
      label: 'Connect the word',
      type: 'sequence'
    },
    {
      data: {
        text:
          'నలుపు, Black\nతెలుపు, White\nఎరుపు, Red\n నారింజ, Orange\nనీలము, Blue',
        title: 'Match colors',
        rightImgType: 'colors'
      },
      id: 'match-colors',
      label: 'Colors',
      type: 'match'
    },
 
    
  ]
};
