export default {
  id: 'fabric-6',
  label: 'Fabric',
  lockAfter: 4,
  list: [
    {
      id: 'notes',
      label: 'Fibre to Fabric - Reading',
      type: 'passage',
      data: {
        text: `# Variety in Fabrics
There is a lot of variety in fabrics. The clothing material or fabric can be made of cotton, jute, silk, wool, nylon or polyster.

# Fibre
The thin strands of thread are made up of even thinner strands called fibre. Fabrics are made of yarns and yarns are further made of fibres. The fibres of fabrics such as cotton, jute, silk and wool are obtained from plants and animals. They are called natural fibres. Fibres made from chemical substances are called synthetic fibres.Polyster, nylon and acrylic are synthetic fibres.

# Cotton 
Cotton is obtained from friut of cotton plant. The fibres are usually picked by hand and then separated from the seeds by combing. This process is called ginning.

# Jute
Jute is obtained from sttem of jute plant. The stems are immersed in water for a few days and then the fibres are separated by hand.

# Spinning Cotton Yarn
The process of making yarn from fibres is called spinning. In this process , fibres from a mass of cotton wool are drawn out and twisted to form yarn. Some spinning devices include hand spindle or takli and charkha which was popularised by Mahatma Gandhi. Clothes made of homespun yarn are called khadi.

# Weaving
The process of arranging two sets of yarns together to make a fabric is called weaving. Weaving of the fabric is done on looms which can be operated by power or by hand.

# Knitting
In knitting, a single yarn is used to make a piece of fabric. Socks and many other clothing items are made of knitted fabrics. It can be done by hand or on machines.`,
        title: 'Fibre to Fabric'
      }
    },
    {
      label: 'Fill in the blanks',
      type: 'matchByDragDrop',
      id: 'match-drag-drop-1',
      data: {
        styles: {
          fontSize: '1rem',
          dashWidth: 80
        },
        text: `Fabrics are made from *yarns*, which in turn are made from *fibres*.
Fibres are either *natural* or synthetic. 
Cotton, wool, silk and jute are some *natural* fibres. Nylon and polyester are some examples of *synthetic* fibres.
Fibres like cotton and jute are obtained from *plants*.
Wool and silk are obtained from *animals*.
The process of making yarn from fibres is called *spinning*.
Fabric from yarns is made by *weaving* and knitting.`
      }
    },
    {
      id: 'synthetic-natural',
      label: 'Synthetic or Natural',
      type: 'classifySentence',
      data: {
        title: 'Classify the fibres as synthetic or natural.',
        types: [
          {
            name: 'Synthetic',
            text: `Nylon
Polyester
Acrylic`
          },
          {
            name: 'Natural',
            text: `Cotton
Wool
Silk
Jute`
          }
        ]
      }
    },
    {
      id: 'cotton-wool',
      label: 'Cotton or Wool',
      type: 'classifySentence',
      data: {
        title:
          'Classify the given clothing items based on the fibre used to make them.',
        types: [
          {
            name: 'Cotton',
            text: `Shirts
Saree
Kurta`
          },
          {
            name: 'Wool',
            text: `Scarf
Sweater
Socks
Mittens`
          }
        ]
      }
    },
    {
      id: 'silk-synthetic',
      label: 'Silk or Synthetic',
      type: 'classifySentence',
      data: {
        title:
          'Classify the given clothing items based on the fibre used to make them.',
        types: [
          {
            name: 'Silk',
            text: `Satin gown
Banarsi saree
Chiffon skirt
Organza saree`
          },
          {
            name: 'Synthetic',
            text: `Polyster dress
Nylon T-shirt
Rayon blouse`
          }
        ]
      }
    },
    {
      id: 'true-false',
      label: 'True or False',
      type: 'classifySentence',
      data: {
        title: 'True or False',
        types: [
          {
            name: 'True',
            text: ` Yarn is made from fibres.
The process of removing seed from cotton is called ginning.
Weaving of yarn makes a peice of fabric.`
          },
          {
            name: 'False',
            text: `Spinning is the process of making fibres.
Jute is the outer covering of coconut.
Silk is obtained from the stem of a plant.
Polyester is a natural fibre.`
          }
        ]
      }
    },
    {
      label: 'Answer in one word',
      type: 'matchByDragDrop',
      id: 'match-drag-drop-2',
      data: {
        styles: {
          fontSize: '1rem',
          dashWidth: 80
        },
        text: `The process of making yarn from fibres is called: *spinning*
The process of arranging two sets of yarns together to make a fabric is called: *weaving*
The process of removing seed from cotton is called: *ginning*
The process by which a single yarn is used to make a peice of cloth is called: *knitting*`
      }
    },
    {
      id: 'match',
      label: 'Match the following',
      type: 'match',
      data: {
        text: `Wool, Sheep
Cotton, Fruit
Jute, Stem
Silk, Silkworm
Nylon, Synthetic`,
        title: 'Match the following.'
      }
    },
    {
      label: 'Steps in fabric making',
      type: 'sorting',
      data: {
        title: 'Arrange the steps in fabric making in correct order',
        text: 'Harvesting fibres, Separating Fibres, Spinning, Weaving'
      },
      id: 'sorting'
    },
    {
      id: 'mcq',
      label: 'Multiple Choice Questions - MCQ',
      type: 'mcq',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: 'Which of the following is not a synthetic fibre?',
            options: `Jute, Nylon, Polyster`
          },
          {
            qText: 'Which is the process used to make yarns?',
            options: `Spinning, Ginning, Knitting`
          },
          {
            qText: 'Which process uses a single yarn to make a peice of cloth?',
            options: `Knitting, Weaving, Ginning`
          },
          {
            qText: 'Which part of the cotton plant gives us cotton fbres?',
            options: `Fruit, Stem, Flower`
          },
          {
            qText: 'Which part of the jute plant is used to make jute fibres?',
            options: `Stem, Leaf, Fruit`
          }
        ]
      }
    },
    {
      id: 'notes-2',
      label: 'History of Clothing Material  - Reading',
      type: 'passage',
      data: {
        text: `# History 
In ancient times, people used bark, big leaves, animals skins and fur to cover themselves. After people began to settle in agricultural communities, they learnt to weave twigs and grass into mats and baskets. Vines, animal fleece or hair were twisted together into long strands. These were woven into fabrics. 
The early Indians wore fabrics made out of cotton that grew in the regions near the river Ganga. Flax is also a plant that gives natural fibres. 
In ancient Egypt, cotton as well as flax were cultivated near the river Nile and were used for making fabrics. In those days, stitching was not known. People simply draped the fabrics around different parts of their body. With the invention of the sewing needle, people started stitching fabrics to make clothes. `,
        title: 'History of Clothing Material '
      }
    },
    {
      id: 'fillup-2',
      label: 'Fill Up',
      type: 'fillup',
      data: {
        title: 'Click the blanks and fill it with the right word.',
        text: `The early Indians wore fabrics made out of *cotton (jute)* that grew in the regions near the river Ganga. 
Flax is also a plant that gives *natural (synthetic)* fibres. 
In ancient *Egypt (India)* , cotton as well as flax were cultivated near the river *Nile (Ganga)* and were used for making fabrics.
To popularise and promote khadi, the Government of *India (Egypt)* constituted a body called Khadi and Village Industries Commission in *1956 (1965)*.`
      }
    }
  ]
};
