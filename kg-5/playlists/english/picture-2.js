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
        images: 'fruits'
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
        images: 'vegetables'
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
raddish| RADDISH | _ADDISH
spinach | SPINACH | _PINACH
vegetables | VEGETABLES | _EGETABLES`
      ]
    }
  ]
};
