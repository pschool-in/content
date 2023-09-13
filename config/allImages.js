const allImages = {
  animals: `cat
  dog
  goat
  sheep
  cow
  buffalo
  donkey
  horse
  pig
  elephant
  lion
  monkey
  tiger
  cheetah
  giraffe
  kangaroo
  leopard
  hippo
  rhino
  fox
  crocodile
  zebra
  bear
  camel
  shark
  whale
  dolphin
  dragonfly
  fish
  frog
  crab
  snake
  squirrel
  tortoise
  rat
  termite
  winged-termites
  ant
  fly
  bat
  butterfly
  mongoose
  mosquito
  octopus
  wolf
  cockroach
  garden-lizard
  lizard
  rabbit
  alligator
  boar
  cricket
  hyena
  polarbear
  antelope
  bug
  jackal
  prawn
  baboon
  bull
  dinosaur
  python
  bison
  chameleon
  porcupine
  bee
  goldfish
  jellyfish
  tigerfish
  ladybug
  seahorse
  hamster
  mole
  spider
  caterpillar
  panda
  starfish
  earthworm
  hedgehog
  stingray
  scorpion
centipede
millipede
salamander`,

  birds: `crow
  dove
  duck
  hen
  parrot
  peacock
  penguin
  sparrow
  chick
  crane
  eagle
  flamingo
  kingfisher
  myna
  ostrich
  owl
  rooster
  vulture
  woodpecker
  hornbill
  koel
  cuckoo
  pheasant
  falcon
  swan
  bulbul
  spotted-dove
  pelican
  hummingbird
  robin
  swallow
  blue-jay
  seagull
  canary
  goose
  turkey
  hawk
  cardinal
  parakeet
  macaw
  tailorbird
weaverbird`,
  fruits: `apple
  grapes
  banana
  cherry
  avocado
  strawberry
  guava
  jackfruit
  mango
  orange
  papaya
  pineapple
  pomegranate
  watermelon
  fig
  custard-apple
  plum
  dates
  muskmelon
  star-fruit
  dragon-fruit
  passion-fruit
  sugarcane
  peach
  sweet-potato
  jamun
  pear
  water-chestnut
  jujube
  sapotta
  tapioca
  blueberry
  wood-apple
  gooseberry
  lemon`,
  vegetables: `carrot
  beetroot
  onion
  tomato
  potato
  cabbage
  cauliflower
  corn
  cucumber
  garlic
  ginger
  pumpkin
  beans
  bitter-gourd
  brinjal
  capsicum
  chilli
  coconut
  corianderleaf
  curryleaf
  drumstick
  greenpeas
  ladies-finger
  mintleaf
  peanut
  radish
  spinach
  mustard-greens
  turmeric
  turnip
  fenugreek
  tamarind
  elephant-yam
  ashgourd
  broad-beans
  snake-gourd
  banana-flower
  cluster-beans
  kohlrabi
  spring-onion
  banana-stem
  drumstick-leaves
  raw-banana
  tulsi
  bottlegourd
  ivygourd
  ridgegourd
  narthankai`,
  ediables: `food
  milk
  fruits
  vegetables
  lollipop
  salad
  ice-cream
  sweets
  bread
  butter
  juice
  sandwich
  cake
  chocolate
  burger
  french-fry
  soft-drink
  pizza
  cheese
  egg
  chicken
  meat
  soup
  adirasam
  dosai
  idiyappam
  idly
  murukku
  pajji
  pongal
  porotta
  puttu-rice
  vadai
  ladoo
  ellumittai
  kadalai-mittai`,
  flowers: `rose
  lotus
  sunflower
  marigold
  hibiscus
  mogra
  tulip
  zinnia
  daffodil
  gulmohar
  lily
  pansy
  poppy
  daisy
  jasmine
  magnolia
  periwinkle
  water-lily
  aavarampoo
  bougainvillea
  december
  erukkampoo
  idlipoo
  kanagamaram
  kurinchipoo
  nandiyaavattampoo
  pichipoo
  poosanipoo
  poovarasampoo
  sangupoo
  thumbaipoo
  vaadamalli
  veepampoo`,
  vehicles: `aeroplane
  boat
  bus
  car
  cycle
  helicoptor
  motorbike
  ship
  yacht
  tractor
  train
  ambulance
  auto
  cart
  metro
  excavator
  fire-engine
  lorry
  van
  bulldozer
  crane2
  rocket
  submarine
  bullock-cart
  horse-carriage
  palanquin
  chariot
  tow-truck
  spaceship`,

  people: `boy
  girl
  man
  woman
  baby
  mother
  father
  grandma
  grandfather`,

  house: `house
  table
  bed
  mat
  mop
  mug
  lock
  key
  net
  rope
  teapot
  fan
  jug
  lightbulb
  candle
  chair
  shelf
  switchboard
  ball
  teddy
  glasses
  clock
  watch
  helmet
  flower-pot
  umbrella
  door
  broom
  window
  air-conditioner
  kettle
  sofa
  bucket
  toilet
  soap
  washing-machine
  backpack
  pillow
  basket
  dustbin
  bed-lamp
  handbag
  steps
  curtains
  watertank 
  flask
  carpet
  doormat
  opener
  walkingstick`,

  dress: `dress
  coat
  shoe
  sock
  boots
  cap
belt
uniform
raincoat
karchief
tie
towel
  pyjama
  gloves
  scarf
  sweater
  bib
  shirt
  jacket
  hat
  trousers
  vetti
  saree
  hanger
  anklet
bangle
chain
earring
comb
mirror
kumkum`,

  school: `eraser
  pen
  pencil
  ruler
  schoolbag
  chalk
  nib
  scissors
  sharpener
  waterbottle
  calculator
  book
  color-pencils
  crayons
  ink
  globe
  notebook
  writingpad
  literature
  clip
glue
magnet
stapler
idcard`,
  kitchen: `stove
  fork
  knife
  pan
  spoon
  pot
  plate
  tap
  lid
  blender
  grinder
  fridge
  bowl
  cup
  ammi
  dosaikal
  kudam
  sembu
  clay-stove
  stone-grinder
  arivaal
  arivaal-manai
  ladle
  anjarai-petti`,

  action: `eat
  drink
  bend
  climb
  jump
  kneel
  pull
  push
  sing
  dance
  running
  walking
  sit
  party
  skipping
  catch
  pass
  swim
  swing
  throw
  carry
  lifting
  mopping
  riding
  sweep
  cough
  sick
  sneeze
  yawn
  sleep`,

  sport: `bat2
  racket
  seesaw
  slide
  carrom
  chess
  cricket2
  tennis
  football
  hockey
  kabaddi
  archery
  basketball
  boxing
  table-tennis
  golf
  wrestling
  karate
  surfing
  jockey
  track
  bandage
  danger`,

  kitchen2: `sugar
  salt
  almond
  cashewnut
  mushroom
  flour
  chickpea
  lentils
  rice
  kadalai-paruppu
  malli
  pepper
  mustard
  mochai
  moong-dhal
  pattani
  seeragam
  sombu
  toor-dhal
  urad-dhal
  wheat
  paddy`,

  gadgets: `camera
  headphone
  pendrive
  remote
  smartphone
  speaker
  tablet
  torch
  web-camera
  radio
  tv
  laptop
  computer
  keyboard
  printer
telephone
typewriter  `,

  bodyParts: `ear
  eye
  face
  foot
  hair
  hand
  mouth
  nose
  tooth
  forehead
  mustache
  beard
  ankle
  elbow
  knee
  shoulder
  wrist
  thumb
  cheek
  chin
  nails`,
  tools: `geometrybox
  compass2
  divider
  protractor
  axe
  hammar
sewing-machine
  balance
  blackboard
  hose
  microscope
  needle
  syringe
  spanner
  oven
  plier
  plough
  saw
  spade
  stethoscope
  telescope
  test-tube
  thermometer
  trowel
  walkie-talkie
  anvil
  awl
  compass
  easel
  hacksaw
  scalpel
  screw
  screwdriver
  flute
  piano
  tabla
  violin
  guitar
  saxophone
  trumpet
  xylophone
  drums
  cymbals
  yazl
  damaru
  dhol
  mrithangam
  nadaswaram
  veenai
  conch`,
  jobs: `astronaut
  clown
  fisherman
  postman
  teacher
  blacksmith
  cobbler
  goldsmith
  potter
  weaver
  carpenter
  diver
  nurse
  sailor
  chef
  doctor
  police
  soldier
  barber
  washerman
  milkman
  shopkeeper
  businessman
  cashier
  electrician
  farmer
  mechanic
  pilot
  plumber
  scientist
  seller
  software-developer  `,

  nature: `sun
  moon
  rain
  star
  bird
  leaf
  grass
  stone
  pebbles
  bone
  web
  cloud
  lightning
  morning
night
flock-birds
  shell
  world
  nest
  dew
  waterfall
  rainbow
  tree
  log
  banyan
  coconut-tree
  palm-tree
  bamboo-tree
  banana-tree
  bananaleaf
  mangoleaf
  neemleaf
  coconutleaf
  touch-me-not`,
  others: `brick
  sculpture
  clay-lamp
  rooftile
  water-tower
  ring
  brush
  auvai
  bell
  five
  one
oneself
pandit
saint
stamp
  king
  kite
  ladder
  quill
  oar
  gun
  rishi
  wheel
  whistle
  salangai
  warrior
  knight
  park
  garden
  yagna
  yarn-ball
  bow
  arrow
  fountain
  pouch
  top
  hexagon
  trident
  trolley
  stick
  twig
  medicine
  balloon
  toothbrush
  toothpaste
  box
  flag
  kolam
  coin
  queen
  statue
  alien
  angel
  boomerang
bouquet
cage
nandi
shadow
bharani
gadha
para
scholar
uri
babywalker`,

  science: `heart
  brain
  lungs
  stomach
  liver
  kidney
  incisor
  canine
  premolar
  molar
  windmill
  solar-panel
  bridge
  dam
  electricpole`,

  social: `mountain
  seashore
  forest
  desert
  river
  grassland
  ocean
  polar
  valley
  volcano
  apartment
  bamboo-house
  hut
  igloo
  tent-house
  tree-house
  road
  railway
  well
  airport
  bank
  classroom
  factory
  fort
  gopuram
  harbour
  hospital
  library
  lighthouse
  map
  office
  palace
  parkinglot
  restaurant
  stage
  supermarket
  escalator
  lift
  petrolbunk
  footpath
  pillar
  swimmingpool
tunnel
postbox`
};

export default allImages;

/*
  traceAllImages();
  
  function traceAllImages() {
    let imgs = [];
    for (let i = 0; i < allImages.length; i++) {
      for (let j = 0; j < allImages[i].list.length; j++) {
        imgs.push({ url: allImages[i].list[j].img, revision: null });
      }
    }
  }
  */
