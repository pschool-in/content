export default {
  label: 'Picture',
  id: 'en-picture-basic',
  lang: 'en',
  img: 'image',
  grade: '0-2',
  lockAfter: 100,
  list: [
    {
      type: 'dragDropImgLabel',
      id: 'drag-simple',
      label: 'Drag & Drop: Simple Words',
      commonData: { title: 'Drag the names and drop on the images.' },
      data: [
        'ant|Ant\nbat2|Bat\ncat|Cat\ndog|Dog\neat|Eat\nfan|Fan',
        'gun|Gun\nhat|Hat\nink|Ink\njug|Jug\nkey|Key\nlog|Log',
        'mat|Mat\nnib|Nib\noar|Oar\npen|Pen\nquill|Quill\nrat|Rat',
        'sun|Sun\ntap|Tap\nvan|Van'
      ]
    },
    {
      type: 'dragDropImgLabel',
      id: 'drag-simple-2',
      label: 'Drag & Drop: Simple Words 2',
      commonData: { title: 'Drag the names and drop on the images.' },
      data: [
        'apple|Apple\nball|Ball\nclock|Clock\ndonkey|Donkey\nelephant|Elephant\nfrog|Frog',
        'girl|Girl\nhouse|House\nice-cream|Ice cream\njacket|Jacket\nknife|Knife\nlion|Lion',
        'monkey|Monkey\nnest|Nest\norange|Orange\nparrot|Parrot\nquill|Quill\nrope|Rope',
        'swan|Swan\ntrain|Train\numbrella|Umbrella\nvegetables|Vegetables\nwolf|Wolf',
        'xylophone|Xylophone\nyacht|Yacht\nzebra|Zebra'
      ]
    },
    {
      type: 'completeWord',
      label: 'Fill up: Simple Words',
      id: 'fill-simple',
      commonData: {
        images: 'stockImgs',
        lang: 'en',
        title: 'Find the missing letters and complete the word.'
      },
      data: [
        'ant|Ant|_nt\nbat2|Bat|_at\ncat|Cat|_at\ndog|Dog|_og\neat|Eat|_at\nfan|Fan|_an\ngun|Gun|_un\nhat|Hat|_at\nink|Ink|_nk\njug|Jug|_ug',
        'key|Key|_ey\nlog|Log|_og\nmat|Mat|_at\nnib|Nib|_ib\noar|Oar|_ar\npen|Pen|_en\nquill|Quill|_uill',
        'rat|Rat|_at\nsun|Sun|_un\ntap|Tap|_ap\nvan|Van|_an'
      ]
    },
    {
      type: 'completeWord',
      label: 'Fill up: Simple Words 2',
      id: 'fill-simple-2',
      commonData: {
        images: 'stockImgs',
        lang: 'en',
        title: 'Find the missing letters and complete the word.'
      },
      data: [
        'apple|Apple|_pple\nball|Ball|_all\nclock|Clock|_lock\ndonkey|Donkey|_onkey\nelephant|Elephant|_lephant\nfrog|Frog|_rog\ngirl|Girl|_irl\nhouse|House|_ouse\nice-cream|Ice cream|_ce cream\njacket|Jacket|_acket',
        'knife|Knife|_nife\nlion|Lion|_ion\nmonkey|Monkey|_onkey\nnest|Nest|_est\norange|Orange|_range\nparrot|Parrot|_arrot\nquill|Quill|_uill\nrope|Rope|_ope\nswan|Swan|_wan\ntrain|Train|_rain',
        'umbrella|Umbrella|_mbrella\nvegetables|Vegetables|_egetables\nwolf|Wolf|_olf\nxylophone|Xylophone|_ylophone\nyacht|Yacht|_acht\nzebra|Zebra|_ebra'
      ]
    },
    {
      type: 'match',
      label: 'Match: Simple Words',
      id: 'match-simple',
      commonData: {
        rightImgType: 'custom',
        big: true,
        title: 'Connect image with its first letter.'
      },
      data: [
        'V,van\nP,pen\nK,key\nF,fan\nA,ant',
        'T,tap\nO,oar\nJ,jug\nE,eat',
        'S,sun\nN,nib\nI,ink\nD,dog',
        'R,rat\nM,mat\nH,hat\nC,cat',
        'Q,quill\nL,log\nG,gun\nB,bat2'
      ]
    },
    {
      type: 'match',
      label: 'Match: Simple Words 2',
      id: 'match-simple-2',
      commonData: {
        rightImgType: 'custom',
        big: true,
        title: 'Connect image with its first letter.'
      },
      data: [
        'Z,zebra\nT,train\nN,nest\nH,house\nB,ball',
        'Y,yacht\nS,swan\nM,monkey\nG,girl\nA,apple',
        'X,xylophone\nR,rope\nL,lion\nF,frog',
        'W,wolf\nQ,quill\nK,knife\nE,elephant',
        'V,vegetables\nP,parrot\nJ,jacket\nD,donkey',
        'U,umbrella\nO,orange\nI,ice-cream\nC,clock'
      ]
    }
  ]
};
