export default {
  label: 'Kannada',
  lang: 'kn',
  pageBreaks: '',
  id: 'kannada',
  list: [
    {
      type: 'completeWord',
      label: 'Complete the word',
      id: 'complete-word',
      data: {
        images: 'custom',
        text: `peacock | ನ,ವಿ, ಲು | _,ವಿ, ಲು | ನ, ರು, ಒ, ಹ
onion| ಈ,ರು,ಳ್ಳಿ | _,ರು,ಳ್ಳಿ | ಈ, ನ, ರು, ಹ
camel|ಒಂ,ಟೆ |_, ಟೆ |ಒಂ, ರು, ಒ, ಹ
crab|ಏ, ಡಿ |_, ಡಿ |ಏ, ಒಂ, ರು, ಒ
bell|ಗಂ,ಟೆ |_, ಟೆ |ಗಂ, ಒಂ, ರು, ಒ
fruits|ಹ,ಣ್ಣು |_,ಣ್ಣು |ಹ, ಒಂ, ರು, ಹು
tiger|ಹು,ಲಿ |_,ಲಿ |ಹು, ಹ, ರು, ಇ`
      }
    },
    {
      type: 'match',
      label: 'Match Animals',
      data: {
        title: 'Match Animals with their first letter.',
        text: 'ಸಿಂ, lion \nಆ, elephant \nಕೋ, monkey \nಕ, bear \nಖ, rhino \nಮೊ, crocodile',
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
        text: 'ದ್ರಾ, grapes \nಬಾ, banana \nಸೀ, guava \nಮಾ, mango \nಪ, papaya \nಅ, pineapple',
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
        text: 'ಗು, rose \nಕ, lotus \nದಾ,hibiscus \nಸೂ, sunflower \nಮ, jasmine \n',
        rightImgType: 'fruits',
        big: true
      },
      id: 'match-flowers'
    },
    {
      data: {
        text: 'ಉ ಗು ರು, ಕ ಮ ಲ, ಚ ರ ಕ, ಫ ಲ ಕ, ಧ ನು ಸ್ಸು',
        title: 'Connect the blocks to form meaningful word.'
      },
      id: 'jumbled-word',
      label: 'Jumbled Word',
      type: 'sequence'
    }
  ]
};
