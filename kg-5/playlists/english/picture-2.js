export default {
  label: 'Fruits and Vegetables',
  id: 'picture-2',
  list: [
    {
      type: 'completeWord',
      id: 'fruits',
      label: 'Fruits',
      lockAfter: 1,
      commonData: {
        images: 'fruits',
        title: 'Find the missing letter and complete the word'
      },
      data: [
        `apple | APPLE | _PPLE 
grapes | GRAPES | _RAPES
banana | BANANA | _ANANA
cherry | CHERRY | _HERRY
avocado | AVOCADO | _VOCADO
strawberry | STRAWBERRY | _TRAW_ERRY
guava | GUAVA | _UAVA
jackfruit | JACKFRUIT | _ACK_RUIT
mango | MANGO | _ANGO
orange | ORANGE | _RANGE`,

        `papaya | PAPAYA | _APAYA
pineapple | PINEAPPLE | _INE_PPLE
watermelon | WATERMELON | _ATER_ELON
pomegranate| POMEGRANATE | _OMEGRANATE
fig| FIG | _IG
custard-apple| CUSTARD APPLE | _USTARD APPLE
plum| PLUM | _LUM
dates| DATES | _ATES
muskmelon| MUSKMELON | _USKMELON`
      ]
    },
    {
      type: 'completeWord',
      id: 'vegetables',
      label: 'Vegetables',
      lockAfter: 1,
      commonData: {
        images: 'vegetables',
        title: 'Find the missing letter and complete the word'
      },
      data: [
        `carrot | CARROT | _ARROT
beetroot | BEETROOT | _EET_OOT
onion | ONION | _NION
tomato | TOMATO | _OMATO
potato | POTATO | _OTATO
cabbage | CABBAGE | _ABBAGE
corn | CORN | _ORN
cucumber |CUCUMBER |_UCUMBER
garlic|GARLIC |_ARLIC
ginger|GINGER |_INGER`,

        `cauliflower| CAULIFLOWER | _AULIFLOWER
pumpkin| PUMPKIN | _UMPKIN
almond| ALMOND | _LMOND
beans| BEANS | _EANS
bitter-gourd| BITTER GOURD | _ITTER GOURD
brinjal| BRINJAL | _RINJAL
capsicum| CAPSICUM | _APSICUM
cashewnut| CASHEWNUT | _ASHEWNUT
chilli| CHILLI | _HILLI
coconut | COCONUT | _OCONUT`,

        `corianderleaf | CORIANDER LEAF | _ORIANDER LEAF
curryleaf | CURRY LEAF | _URRY LEAF
drumstick| DRUMSTICK | _RUMSTICK
greenpeas| GREEN PEAS |  _REEN PEAS
ladies-finger | LADIES FINGER | _ADIES FINGER
mintleaf| MINT LEAF | _INT LEAF
peanut| PEANUT | _EANUT
radish| RADISH | _ADISH
spinach | SPINACH | _PINACH
vegetables | VEGETABLES | _EGETABLES`
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
        `A, apple
C, cherry
B, banana
G, grapes
S, strawberry
P, plum`,

        `A, avocado
G, guava
J, jackfruit
M, mango
O, orange
P, pomegranate`,

        `P, papaya
W, watermelon
F, fig
C, custard-apple
D, dates
P, pineapple
M, muskmelon`
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
        `C, carrot
B, beetroot
O, onion
T, tomato
P, potato`,

        `C, cabbage
G, garlic
P, pumpkin
A, almond
B, beans
D, drumstick`,

        `C, corn
G, ginger
L, ladies-finger
M, mintleaf
P, peanut`,

        `C, cucumber
B, brinjal
G, greenpeas
R, radish
S, spinach
V, vegetables`
      ]
    },
    {
      type: 'dragDropImgLabel',
      label: 'Fruits - Drag & Drop',
      id: 'dragdrop-fruits',
      commonData: {
        title: 'Drag and Drop the name on the images.'
      },
      data: [
        `apple | Apple 
grapes | Grapes
banana | Banana
cherry | Cherry
avocado | Avocado
strawberry | Strawberry`,

        `guava | Guava
jackfruit | Jackfruit
mango | Mango
orange | Orange
papaya | Papaya
pineapple | Pineapple`,

        `watermelon | Watermelon
pomegranate| Pomegranate
fig| Fig
custard-apple| Custard Apple
plum| Plum
dates| Dates
muskmelon| Muskmelon`
      ]
    },
    {
      type: 'dragDropImgLabel',
      label: 'Vegetables - Drag & Drop',
      id: 'dragDrop-vegetables',
      commonData: {
        title: 'Drag and Drop the name on the images.'
      },
      data: [
        `carrot | Carrot
beetroot | Beetroot
onion | Onion
tomato | Tomato
potato | Potato
cabbage | Cabbage`,

        `corn | Corn
cucumber |Cucumber
garlic|Garlic
ginger|Ginger
cauliflower| Cauliflower
pumpkin| Pumpkin`,

        `almond| Almond
beans| Beans
bitter-gourd| Bitter Gourd
brinjal| Brinjal
capsicum| Capsicum
cashewnut| Cashewnut`,

        `chilli| Chilli
coconut | Coconut
corianderleaf | Coriander Leaf
curryleaf | Curry Leaf
drumstick| Drumstick
greenpeas| Green Peas`,

        `ladies-finger | Ladies Finger
mintleaf| Mintleaf
peanut| Peanut
radish| Radish
spinach | Spinach
vegetables | Vegetables`
      ]
    }
  ]
};
