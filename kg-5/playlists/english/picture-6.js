export default {
  label: 'More Fruits and Vegetables',
  id: 'picture-6',
  lockAfter: 4,
  list: [
    {
      type: 'dragDropImgLabel',
      label: 'Fruits',
      id: 'drag-fruits',
      commonData: {
        title: 'Drag the names and drop on the images.'
      },
      data: [
        `star-fruit | Star fruit
dragon-fruit | Dragon fruit
sugarcane | Sugarcane
peach | Peach
sweet-potato | Sweet potato
jamun | Jamun`,

        `pear | Pear
water-chestnut | Water chestnut
jujube | Jujube
sapotta | Sapotta
tapioca | Tapioca
blueberry | Blueberry
passion-fruit | Passion fruit`
      ]
    },
    {
      type: 'dragDropImgLabel',
      label: 'Vegetables',
      id: 'drag-vegetables',
      commonData: {
        title: 'Drag the names and drop on the images.'
      },
      data: [
        `chickpea | Chickpea
mustard-greens | Mustard greens
turmeric | Turmeric
turnip | Turnip
fenugreek | Fenugreek
tamarind | Tamarind`,

        `elephant-yam | Elephant Yam
ashgourd | Ashgourd
broad-beans | Broad beans
snake-gourd | Snake gourd
banana-flower | Banana flower
cluster-beans | Cluster beans`,

        `kohlrabi | Kohlrabi
spring-onion | Spring onion
banana-stem | Banana stem
drumstick-leaves | Drumstick leaves
raw-banana | Raw banana`,

        `tulsi | Tulsi
bottlegourd | Bottlegourd
ivygourd | Ivygourd
ridgegourd | Ridgegourd`
      ]
    },
    {
      type: 'completeWord',
      id: 'fruits',
      label: 'Fruits',
      commonData: {
        images: 'fruits',
        title: 'Find the missing letter and complete the word'
      },
      data: [
        `star-fruit | STAR-FRUIT | _TAR-FRUIT
dragon-fruit | DRAGON-FRUIT | _RAGON-FRUIT
sugarcane | SUGARCANE | _UGARCANE
peach | PEACH | _EACH
sweet-potato | SWEET-POTATO | _WEET-POTATO
jamun | JAMUN | _AMUN
pear | PEAR | _EAR`,

        `water-chestnut | WATER-CHESTNUT | _ATER-CHESTNUT
jujube | JUJUBE | _UJUBE
sapotta | SAPOTTA | _APOTTA
tapioca | TAPIOCA | _APIOCA
blueberry | BLUEBERRY | _LUEBERRY
passion-fruit | PASSION-FRUIT | _ASSION-FRUIT`
      ]
    },

    {
      type: 'completeWord',
      id: 'vegetables',
      label: 'Vegetables',
      commonData: {
        images: 'vegetables',
        title: 'Find the missing letter and complete the word'
      },
      data: [
        `chickpea | CHICKPEA | _HICKPEA
mustard-greens | MUSTARD-GREENS | _USTARD-GREENS
turmeric | TURMERIC | _URMERIC
turnip | TURNIP | _URNIP
fenugreek | FENUGREEK | _ENUGREEK
tamarind | TAMARIND | _AMARIND
elephant-yam | ELEPHANT-YAM | _LEPHANT-YAM
ashgourd | ASHGOURD | _SHGOURD
broad-beans | BROAD-BEANS | _ROAD-BEANS
snake-gourd | SNAKE-GOURD | _NAKE-GOURD`,

        `banana-flower | BANANA-FLOWER | _ANANA-FLOWER
cluster-beans | CLUSTER-BEANS | _LUSTER-BEANS
kohlrabi | KOHLRABI | _OHLRABI
spring-onion | SPRING-ONION | _PRING-ONION
banana-stem | BANANA-STEM | _ANANA-STEM
drumstick-leaves | DRUMSTICK-LEAVES | _RUMSTICK-LEAVES
raw-banana | RAW-BANANA | _AW-BANANA
tulsi | TULSI | _ULSI
bottlegourd | BOTTLEGOURD | _OTTLEGOURD
ivygourd | IVYGOURD | _VYGOURD
ridgegourd | RIDGEGOURD | _IDGEGOURD`
      ]
    },
    {
      type: 'match',
      id: 'match-fruits',
      label: 'Match Fruits',
      lockAfter: 4,
      commonData: {
        title: 'Connect image with its first letter.',
        rightImgType: 'custom',
        big: true
      },
      data: [
        `S, star-fruit 
D, dragon-fruit 
P, peach 
J, jamun
W, water-chestnut `,

        `J, jujube 
S, sapotta 
T, tapioca 
B, blueberry 
P, passion-fruit `
      ]
    },
    {
      type: 'match',
      id: 'match-vegetables',
      label: 'Match Vegetables',
      lockAfter: 4,
      commonData: {
        title: 'Connect image with its first letter.',
        rightImgType: 'custom',
        big: true
      },
      data: [
        `C, chickpea 
M, mustard-greens
T, turmeric 
F, fenugreek 
E, elephant-yam 
A, ashgourd `,

        `B, broad-beans 
S, snake-gourd 
C, cluster-beans 
K, kohlrabi 
T, turnip`,

        `D, drumstick-leaves
R, raw-banana 
T, tulsi 
B, bottlegourd 
I, ivygourd`
      ]
    }
  ]
};
