export default {
  label: 'Nature and Others',
  id: 'en-sound-3',
  lang: 'en',
  list: [
    {
      type: 'slides',
      label: 'Nature',
      id: 'nature',
      commonData: {
        title: 'Listen to the sound and watch the image and name.',
        audio: 'en/en-nature.mp3'
      },
      data: [
        {
          text: 'sun|Sun\nmoon|Moon\nstar|Star\nworld|World\nbird|Bird\nrain|Rain\nstone|Stone\npebbles|Pebbles\nleaf|Leaf\ngrass|Grass',
          audioOffset: 0
        },
        {
          text: 'tree|Tree\nlog|Log\nnest|Nest\ndew|Dew\nwaterfall|Waterfall\nrainbow|Rainbow\ncloud|Cloud\nlightning|Lightning\nmorning|Morning\nnight|Night',
          audioOffset: 20
        },
        {
          text: 'flock-birds|Flock\nweb|Web\nshell|Shell\nbanyan|Banyan Tree\nbamboo-tree|Bamboo Tree\nbanana-tree|Banana Tree\nbananaleaf|Banana Leaf',
          audioOffset: 40
        },
        {
          text: 'coconut-tree|Coconut Tree\ncoconutleaf|Coconut Leaf\nmangoleaf|Mango Leaf\npalm-tree|Palm Tree\nneemleaf|Neem Leaf',
          audioOffset: 54
        }
      ]
    },
    {
      type: 'slides',
      label: 'Body Parts',
      id: 'body-parts',
      commonData: {
        title: 'Listen to the sound and watch the image and name.',
        audio: 'en/en-body-parts.mp3'
      },
      data: [
        {
          text: 'ear|Ear\neye|Eye\nface|Face\nfoot|Foot\nhair|Hair\nhand|Hand\nmouth|Mouth\nnose|Nose\ntooth|Tooth\nforehead|Forehead',
          audioOffset: 0
        },
        {
          text: 'mustache|Mustache\nbeard|Beard\nankle|Ankle\nelbow|Elbow\nknee|Knee\nshoulder|Shoulder',
          audioOffset: 20
        },
        {
          text: 'wrist|Wrist\nthumb|Thumb\ncheek|Cheek\nchin|Chin\nnails|Nails',
          audioOffset: 32
        }
      ]
    },
    {
      type: 'slides',
      label: 'Flowers',
      id: 'flowers',
      data: {
        title: 'Listen to the sound and watch the image and name.',
        audio: 'en/en-flowers.mp3',
        text: 'rose|Rose\nlotus|Lotus\nsunflower|Sunflower\nmarigold|Marigold\nhibiscus|Hibiscus\njasmine|Jasmine\ntulip|Tulip\nzinnia|Zinnia',
        audioOffset: 0
      }
    },
    {
      type: 'slides',
      label: 'Others',
      id: 'others',
      commonData: {
        title: 'Listen to the sound and watch the image and name.',
        audio: 'en/en-others.mp3'
      },
      data: [
        {
          text: 'bell|Bell\nbrush|Brush\nbone|Bone\nbox|Box\ncoin|Coin\ntop|Top\nballoon|Balloon\nbrick|Brick\nrooftile|Roof Tile\nstick|Stick',
          audioOffset: 0
        },
        {
          text: 'ring|Ring\nfood|Food\nking|King\nqueen|Queen\nkite|Kite\nladder|Ladder\nquill|Quill\noar|Oar\ngun|Gun\nwheel|Wheel',
          audioOffset: 20
        },
        {
          text: 'park|Park\ngarden|Garden\nsculpture|Sculpture\nstatue|Statue\nclay-lamp|Clay Lamp\nclay-stove|Clay Stove\none|One\noneself|Myself\nstamp|Stamp',
          audioOffset: 40
        }
      ]
    },
    {
      type: 'rightOne',
      label: 'Select: Nature',
      id: 'find-nature',
      commonData: {
        type: 'image',
        title: 'Listen to the sound and click on the image.',
        audio: 'en/en-nature.mp3'
      },
      data: [
        {
          words: 'sun,moon,star,world,bird,rain,stone,pebbles,leaf,grass',
          audioOffset: 0
        },
        {
          words:
            'tree,log,nest,dew,waterfall,rainbow,cloud,lightning,morning,night',
          audioOffset: 20
        },
        {
          words:
            'flock-birds,web,shell,banyan,bamboo-tree,banana-tree,bananaleaf,coconut-tree',
          audioOffset: 40
        },
        { words: 'coconutleaf,mangoleaf,palm-tree,neemleaf', audioOffset: 56 }
      ]
    },
    {
      type: 'rightOne',
      label: 'Select: Body Parts',
      id: 'find-body-parts',
      commonData: {
        type: 'image',
        title: 'Listen to the sound and click on the image.',
        audio: 'en/en-body-parts.mp3'
      },
      data: [
        {
          words: 'ear,eye,face,foot,hair,hand,mouth,nose,tooth,forehead',
          audioOffset: 0
        },
        {
          words: 'mustache,beard,ankle,elbow,knee,shoulder,wrist',
          audioOffset: 20
        },
        { words: 'thumb,cheek,chin,nails', audioOffset: 34 }
      ]
    },
    {
      type: 'rightOne',
      label: 'Select: Flowers',
      id: 'find-flowers',
      data: {
        type: 'image',
        title: 'Listen to the sound and click on the image.',
        audio: 'en/en-flowers.mp3',
        words: 'rose,lotus,sunflower,marigold,hibiscus,jasmine,tulip,zinnia',
        audioOffset: 0
      }
    },
    {
      type: 'rightOne',
      label: 'Select: Others',
      id: 'find-others',
      commonData: {
        type: 'image',
        title: 'Listen to the sound and click on the image.',
        audio: 'en/en-others.mp3'
      },
      data: [
        {
          words: 'bell,brush,bone,box,coin,top,balloon,brick,rooftile,stick',
          audioOffset: 0
        },
        {
          words: 'ring,food,king,queen,kite,ladder,quill,oar,gun,wheel',
          audioOffset: 20
        },
        {
          words:
            'park,garden,sculpture,statue,clay-lamp,clay-stove,one,oneself,stamp',
          audioOffset: 40
        }
      ]
    }
  ]
};