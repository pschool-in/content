export default {
  id: 'mr-picture-3',
  list: [
    {
      type: 'dragDropImgLabel',
      id: 'drag-nature',
      label: 'Drag & Drop: Nature',
      commonData: { title: 'Drag the names and drop on the images.' },
      data: [
        'sun|सूर्य\nmoon|चंद्र\nrain|पाऊस\nstar|तारा\nmilk|दूध\nbird|पक्षी',
        'fruits|फळे\nleaf|पान\nworld|जग\nnest|घरटे',
        'dew|दव\nwaterfall|धबधबा\nrainbow|इंद्रधनुष्य'
      ]
    },
    {
      type: 'dragDropImgLabel',
      id: 'drag-body-parts',
      label: 'Drag & Drop: Body Parts',
      commonData: { title: 'Drag the names and drop on the images.' },
      data: [
        'ear|कान\neye|डोळा\nfoot|पाऊल\nhair|केस\nhand|हात',
        'mouth|तोंड\nnose|नाक\ntooth|दात'
      ]
    },
    {
      type: 'dragDropImgLabel',
      id: 'drag-flowers',
      label: 'Drag & Drop: Flowers',
      commonData: { title: 'Drag the names and drop on the images.' },
      data: [
        'rose|गुलाब\nlotus|कमळ\nsunflower|सूर्यफूल\nmarigold|झेंडू\njasmine|चमेली'
      ]
    },
    {
      type: 'dragDropImgLabel',
      id: 'drag-others',
      label: 'Drag & Drop: Others',
      commonData: { title: 'Drag the names and drop on the images.' },
      data: [
        'bell|घंटा\nbone|हाड\ncoin|नाणे\ntop|शीर्ष\nstick|काठी\nring|अंगठी',
        'food|अन्न\nking|राजा\nkite|पतंग\nladder|शिडी\nwheel|चाक\ngarden|बाग'
      ]
    },
    {
      type: 'completeWord',
      label: 'Fill up: Nature',
      id: 'fill-nature',
      commonData: {
        images: 'stockImgs',
        lang: 'mr',
        title: 'Find the missing letters and complete the word.'
      },
      data: [
        'sun|सूर्य|_र्य|सू,जि,झी,का\nmoon|चंद्र|_द्र|चं,छा,झ,झी\nrain|पाऊस|_ऊस|पा,ख,त्रु,झी\nstar|तारा|_रा|ता,का,गा,छा\nmilk|दूध|_ध|दू,गा,छा,त्रु\nbird|पक्षी|_क्षी|प,ख,झ,झी\nfruits|फळे|_ळे|फ,गा,ख,जि\nleaf|पान|_न|पा,छा,गा,ख\nworld|जग|_ग|ज,छा,गा,च',
        'nest|घरटे|_रटे|घ,ख,गा,च\ndew|दव|_व|द,का,छा,जि\nwaterfall|धबधबा|_बधबा|ध,झी,का,ख\nrainbow|इंद्रधनुष्य|_द्रधनुष्य|इं,जि,गा,का'
      ]
    },
    {
      type: 'completeWord',
      label: 'Fill up: Body Parts',
      id: 'fill-body-parts',
      commonData: {
        images: 'stockImgs',
        lang: 'mr',
        title: 'Find the missing letters and complete the word.'
      },
      data: [
        'ear|कान|_न|का,घी,जि,त्रु\neye|डोळा|_ळा|डो,गा,झी,झ\nfoot|पाऊल|_ऊल|पा,घी,गा,झी\nhair|केस|_स|के,ख,च,त्रु\nhand|हात|_त|हा,घी,गा,ख\nmouth|तोंड|_ड|तों,जि,छा,झी\nnose|नाक|_क|ना,च,छा,गा\ntooth|दात|_त|दा,छा,घी,ख'
      ]
    },
    {
      type: 'completeWord',
      label: 'Fill up: Flowers',
      id: 'fill-flowers',
      commonData: {
        images: 'stockImgs',
        lang: 'mr',
        title: 'Find the missing letters and complete the word.'
      },
      data: [
        'rose|गुलाब|_लाब|गु,छा,घी,गा\nlotus|कमळ|_मळ|क,गा,च,झ\nsunflower|सूर्यफूल|_र्यफूल|सू,ख,त्रु,का\nmarigold|झेंडू|_डू|झें,जि,गा,झी\njasmine|चमेली|_मेली|च,त्रु,ख,गा'
      ]
    },
    {
      type: 'completeWord',
      label: 'Fill up: Others',
      id: 'fill-others',
      commonData: {
        images: 'stockImgs',
        lang: 'mr',
        title: 'Find the missing letters and complete the word.'
      },
      data: [
        'bell|घंटा|_टा|घं,घी,ख,जि\nbone|हाड|_ड|हा,का,ख,घी\ncoin|नाणे|_णे|ना,जि,गा,झी\ntop|शीर्ष|_र्ष|शी,छा,झी,त्रु\nstick|काठी|_ठी|का,झी,ख,गा\nring|अंगठी|_गठी|अं,झ,घी,जि\nfood|अन्न|_न्न|अ,च,झ,जि\nking|राजा|_जा|रा,जि,झी,च',
        'kite|पतंग|_तंग|प,झी,का,झ\nladder|शिडी|_डी|शि,जि,झी,का\nwheel|चाक|_क|चा,त्रु,छा,ख\ngarden|बाग|_ग|बा,का,गा,झी'
      ]
    },
    {
      type: 'match',
      label: 'Match: Nature',
      id: 'match-nature',
      commonData: {
        rightImgType: 'custom',
        big: true,
        title: 'Connect image with its first letter.'
      },
      data: [
        'सू,sun\nचं,moon\nपा,rain\nता,star\nदू,milk',
        'प,bird\nफ,fruits\nपा,leaf\nज,world\nघ,nest',
        'द,dew\nध,waterfall\nइं,rainbow'
      ]
    },
    {
      type: 'match',
      label: 'Match: Body Parts',
      id: 'match-body-parts',
      commonData: {
        rightImgType: 'custom',
        big: true,
        title: 'Connect image with its first letter.'
      },
      data: [
        'का,ear\nडो,eye\nपा,foot\nके,hair\nहा,hand',
        'तों,mouth\nना,nose\nदा,tooth'
      ]
    },
    {
      type: 'match',
      label: 'Match: Flowers',
      id: 'match-flowers',
      commonData: {
        rightImgType: 'custom',
        big: true,
        title: 'Connect image with its first letter.'
      },
      data: ['गु,rose\nक,lotus\nसू,sunflower\nझें,marigold\nच,jasmine']
    },
    {
      type: 'match',
      label: 'Match: Others',
      id: 'match-others',
      commonData: {
        rightImgType: 'custom',
        big: true,
        title: 'Connect image with its first letter.'
      },
      data: [
        'घं,bell\nहा,bone\nना,coin\nशी,top\nका,stick',
        'अं,ring\nअ,food\nरा,king\nप,kite',
        'शि,ladder\nचा,wheel\nबा,garden'
      ]
    }
  ]
};
