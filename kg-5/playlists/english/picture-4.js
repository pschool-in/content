export default {
  label: 'House and Other',
  id: 'picture-4',
  lockAfter: 2,
  list: [
    {
      type: 'completeWord',
      id: 'house',
      label: 'House',
      lockAfter: 2,
      commonData: {
        images: 'custom'
      },
      data: [
        `man| MAN |_AN
woman | WOMAN |_OMAN
boy|BOY |_OY
girl | GIRL |_IRL
baby | BABY | _ABY
house| HOUSE|_OUSE
table|TABLE |_ABLE
bed|BED |_ED
candle|CANDLE |_ANDLE
chair|CHAIR |_HAIR`,

        `shelf|SHELF |_HELF
ball|BALL |_ALL
coat|COAT |_OAT
glasses|GLASSES |_LASSES
clock | CLOCK | _LOCK
watch | WATCH | _ATCH
flower-pot | FLOWER POT | _LOWER POT
umbrella | UMBRELLA | _MBRELLA
door | DOOR | _OOR
broom | BROOM | _ROOM`,

        `window | WINDOW | _INDOW
sofa | SOFA | _OFA
bucket | BUCKET | _UCKET
toilet | TOILET | _OILET
soap | SOAP | _OAP
backpack | BACKPACK | _ACKPACK`,

        `pillow | PILLOW | _ILLOW
basket | BASKET | _ASKET
dustbin | DUSTBIN | _USTBIN
bed-lamp | BED LAMP | _ED LAMP
handbag | HANDBAG | _ANDBAG
air-conditioner | AIR CONDITIONER | _IR CONDITIONER
washing-machine | WASHING MACHINE | _ASHING MACHINE`
      ]
    },
    {
      type: 'completeWord',
      id: 'dress',
      label: 'Dress',
      commonData: {
        images: 'custom'
      },
      data: [
        `dress | DRESS | _RESS
coat | COAT | _OAT
shoe | SHOE | _HOE
sock | SOCK | _OCK
boots | BOOTS | _OOTS
pyjama | PYJAMA | _YJAMA
gloves | GLOVES | _LOVES
scarf | SCARF | _CARF`,

        `sweater | SWEATER | _WEATER
bib | BIB | _IB
shirt | SHIRT | _HIRT
jacket | JACKET | _ACKET
hat | HAT | _AT
trousers | TROUSERS | _ROUSERS`
      ]
    },
    {
      type: 'completeWord',
      id: 'school',
      label: 'School',
      commonData: {
        images: 'custom'
      },
      data: [
        `pen |PEN |_EN
pencil|PENCIL |_ENCIL
ruler|RULER |_ULER
eraser|ERASER |_RASER
scissors|SCISSORS |_CISSORS
sharpener|SHARPENER |_HARPENER
calculator| CALCULATOR | _ALCULATOR`,

        `book| BOOK | _OOK
ink | INK | _NK
schoolbag| SCHOOL BAG | _CHOOL BAG
waterbottle| WATER BOTTLE | _ATER BOTTLE
color-pencils| COLOR PENCILS | _OLOR PENCILS
crayons | CRAYONS | _RAYONS`
      ]
    },
    {
      type: 'completeWord',
      id: 'kitchen',
      label: 'Kitchen',
      lockAfter: 2,
      data: [
        `stove |STOVE |_TOVE
fork|FORK |_ORK
knife|KNIFE |_NIFE
pan|PAN |_AN
spoon|SPOON |_POON
pot|POT |_OT
butter|BUTTER |_UTTER`,

        `plate | PLATE | _LATE
tap | TAP | _AP
lid | LID | _ID
blender | BLENDER | _LENDER
cheese | CHEESE | _HEESE
fridge | FRIDGE | _RIDGE
lollipop | LOLLIPOP | _OLLIPOP
salad | SALAD | _ALAD
sugar | SUGAR | _UGAR
bowl | BOWL | _OWL`,

        `chicken | CHICKEN | _HICKEN
ice-cream | ICE CREAM | _CE CREAM
meat | MEAT | _EAT
salt | SALT | _ALT
sweets | SWEETS | _WEETS
bread | BREAD | _READ
cup | CUP | _UP
juice | JUICE | _UICE
mushroom | MUSHROOM | _USHROOM
sandwich | SANDWICH | _ANDWICH`,

        `cake | CAKE | _AKE
flour | FLOUR | _LOUR
lentils | LENTILS | _ENTILS
rice | RICE | _ICE
soup | SOUP | _OUP`
      ]
    },
  {
    type: 'match',
    id: 'match-house',
    label: 'Match House',
    lockAfter: 4,
    commonData: {
      title: 'Connect image with its first letter.',
      rightImgType: 'custom',
      big: true
    },
    data: [
      `M, man
      W, woman 
      B, boy
      G, girl 
      B, baby`,

      `H, house
      T, table
      B, bed
      C, candle
      S, shelf`,

      `B, ball
      C, coat
      G, glasses
      W, watch 
      F, flower-pot`,

      `U, umbrella 
      D, door 
      B, broom 
      W, window 
      S, sofa`,

      `B, bucket 
      T, toilet 
      S, soap 
      P, pillow 
      D, dustbin`,

      `B, bed-lamp 
      H, handbag 
      A, air-conditioner 
      W, washing-machine `
    ]
  },
  {
    type: 'match',
    id: 'match-dress',
    label: 'Match Dress',
    lockAfter: 4,
    commonData: {
      title: 'Connect image with its first letter.',
      rightImgType: 'custom',
      big: true
    },
    data: [
      `D, dress 
C, coat
S, shoe 
B, boots 
P, pyjama 
G, gloves`,

`S, sweater 
B, bib 
J, jacket 
H, hat 
T, trousers`
    ]
  },
  {
    type: 'match',
    id: 'match-school',
    label: 'Match School',
    lockAfter: 4,
    commonData: {
      title: 'Connect image with its first letter.',
      rightImgType: 'custom',
      big: true
    },
    data: [
`P, pen 
R, ruler
E, eraser
S, scissors
C, calculator`,

`B, book
P, pencil
I, ink 
S, schoolbag
W, waterbottle
C, crayons `
    ]
  },
  {
    type: 'match',
    id: 'match-kitchen',
    label: 'Match Kitchen',
    lockAfter: 4,
    commonData: {
      title: 'Connect image with its first letter.',
      rightImgType: 'custom',
      big: true
    },
    data: [
      `S, stove 
      F, fork
      K, knife
      P, pan
      P, pot`,
      
      `B, butter
      P, plate 
      T, tap
      L, lid 
      C, cheese`,

      `F, fridge 
      L, lollipop 
      S, salad 
      B, bowl
      C, chicken 
      I,ice-cream `,

      `M, meat 
      S, salt 
      B, bread 
      C, cup 
      J, juice 
      M, mushroom`,

      `S, sandwich 
      C, cake 
      F, flour 
      L, lentils 
      R, rice `
    ]
  },
  {
    type: 'dragDropImgLabel',
    label: 'House - Drag & Drop',
    id: 'dragDrop-house',
    commonData: {
      title: 'Drag and Drop the name on the images.'
    },
    data: [
      `man| Man
      woman | Woman
      boy|Boy
      girl | Girl
      baby | Baby
      house| House`,

      `table|Table
      bed|Bed
      candle|Candle
      chair|Chair
      shelf|Shelf
      coat|Coat`,

      `glasses|Glasses
      clock | Clock
      watch | Watch
      flower-pot | Flower Pot
      umbrella | Umbrella
      door | Door`,

      `broom | Broom
      window | Window
      sofa | Sofa
      bucket | Bucket
      toilet | Toilet
      soap | Soap`,

      `backpack | Backpack
      pillow | Pillow
      basket | Basket
      dustbin | Dustbin`,

      `bed-lamp | Bed Lamp
      handbag | Handbag
      air-conditioner | Air Conditioner
      washing-machine | Washing Machine`
    ]
  },
  {
    type: 'dragDropImgLabel',
    label: 'Dress - Drag & Drop',
    id: 'dragDrop-dress',
    commonData: {
      title: 'Drag and Drop the name on the images.'
    },
    data: [
`dress | Dress
coat | Coat
shoe | Shoe
sock | Sock
boots | Boots
pyjama | Pyjama`,

`gloves | Gloves
scarf | Scarf
sweater | Sweater
bib | Bib`,

`shirt | Shirt
jacket | Jacket
hat | Hat
trousers | Trousers`
    ]
  },
  {
    type: 'dragDropImgLabel',
    label: 'School - Drag & Drop',
    id: 'dragDrop-school',
    commonData: {
      title: 'Drag and Drop the name on the images.'
    },
    data: [
      `pen |Pen
      pencil|Pencil
      ruler|Ruler
      eraser|Eraser
      scissors|Scissors
      sharpener|Sharpener`,

      `calculator| Calculator
      book| Book
      ink | Ink
      schoolbag| Schoolbag`,

      `waterbottle| Waterbottle
      color-pencils| Color Pencils
      crayons | Crayons`
    ]
  },
  {
    type: 'dragDropImgLabel',
    label: 'Kitchen - Drag & Drop',
    id: 'dragDrop-kitchen',
    commonData: {
      title: 'Drag and Drop the name on the images.'
    },
    data: [
      `stove |Stove
      fork|Fork
      knife|Knife
      pan|Pan
      spoon|Spoon
      pot|Pot`,

      `butter|Butter
      plate | Plate
      tap | Tap
      lid | Lid
      blender | Blender
      cheese | Cheese`,

      `fridge | Fridge
      lollipop | Lollipop
      salad | Salad
      sugar | Sugar
      bowl | Bowl
      chicken | Chicken`,

      `ice-cream | Ice cream
      meat | Meat
      salt | Salt
      sweets | Sweets
      bread | Bread
      cup | Cup`,

      `juice | Juice
      mushroom | Mushroom
      sandwich | Sandwich
      cake | Cake`,

      `flour | Flour
      lentils | Lentils
      rice | Rice
      soup | Soup`
    ]
  }
  ]
};
