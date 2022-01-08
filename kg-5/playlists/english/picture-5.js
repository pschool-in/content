export default {
  label: 'More Animals and Birds',
  id: 'picture-5',
  list: [
    {
      type: 'completeWord',
      id: 'animals',
      label: 'Animals',
      lockAfter: 1,
      commonData: {
        images: 'animals',
        title: 'Find the missing letter and complete the word'
      },
      data: [
        `mongoose| MONGOOSE| _ONGOOSE
mosquito| MOSQUITO | _OSQUITO
octopus| OCTOPUS | _CTOPUS
wolf| WOLF | _OLF
lizard| LIZARD | _IZARD
cockroach| COCKROACH | _OCKROACH
garden-lizard| GARDEN LIZARD | _ARDEN LIZARD 
rabbit| RABBIT | _ABBIT
leopard| LEOPARD | _EOPARD`,

        `dragonfly |DRAGON FLY |_RAGON FLY
fly|HOUSEFLY |_OUSEFLY
squirrel|SQUIRREL |_QUIRREL
dinosaur | DINOSAUR| _INOSAUR
alligator | ALLIGATOR | _LLIGATOR
boar | BOAR | _OAR
cricket | CRICKET | _RICKET
hyena | HYENA | _YENA
polarbear | POLARBEAR | _OLARBEAR
antelope | ANTELOPE | _NTELOPE`,

        `bug | BUG | _UG
jackal | JACKAL | _ACKAL
prawn | PRAWN | _RAWN
baboon | BABOON | _ABOON
python | PYTHON | _YTHON
bison | BISON | _ISON
chameleon | CHAMELEON | _HAMELEON
porcupine | PORCUPINE | _ORCUPINE
tigerfish | TIGERFISH | _IGERFISH
ladybug | LADYBUG | _ADYBUG`,

        `seahorse | SEAHORSE | _EAHORSE
hamster | HAMSTER | _AMSTER
mole | MOLE | _OLE
caterpillar | CATERPILLAR | _ATERPILLAR 
earthworm | EARTHWORM | _ARTHWORM
hedgehog | HEDGEHOG | _EDGEHOG
stingray | STINGRAY | _TINGRAY
jellyfish | JELLY FISH | _ELLY FISH
starfish | STAR FISH | _TAR FISH`
      ]
    },
    {
      type: 'completeWord',
      id: 'birds',
      label: 'Birds',
      lockAfter: 1,
      commonData: {
        images: 'birds',
        title: 'Find the missing letter and complete the word'
      },
      data: [
        `hornbill | HORNBILL | _ORNBILL
cuckoo | CUCKOO | _UCKOO
pheasant | PHEASANT | _HEASANT
falcon | FALCON | _ALCON
swan | SWAN | _WAN
bulbul | BULBUL | _ULBUL
spotted-dove | SPOTTED DOVE | _POTTED DOVE
pelican | PELICAN | _ELICAN
hummingbird | HUMMING BIRD | _UMMING BIRD
robin | ROBIN | _OBIN`,

        `swallow | SWALLOW | _WALLOW
blue-jay | BLUE-JAY | _LUE-JAY
seagull | SEAGULL | _EAGULL
canary | CANARY | _ANARY
goose | GOOSE | _OOSE
turkey | TURKEY | _URKEY
hawk | HAWK | _AWK
cardinal | CARDINAL | _ARDINAL
parakeet | PARAKEET | _ARAKEET
macow | MACAW | _ACAW`
      ]
    },
    {
      type: 'match',
      id: 'match-animals',
      label: 'Match Animals',
      lockAfter: 4,
      commonData: {
        title: 'Connect image with its first letter.',
        rightImgType: 'custom',
        big: true
      },
      data: [
        `M, mongoose
O, octopus
W, wolf
L, lizard
C, cockroach
G, garden-lizard`,

        `R, rabbit
L, leopard
D, dragonfly 
S, squirrel
M, mosquito
A, alligator`,

        `B, boar 
C, cricket 
H, hyena 
P, polarbear 
A, antelope 
J, jackal`,

        `P, prawn 
B, baboon 
C, chameleon 
T, tigerfish
L, ladybug 
S, seahorse `,

        `H, hamster 
M, mole 
C, caterpillar 
E, earthworm  
J, jellyfish 
S, starfish `
      ]
    },
    {
      type: 'match',
      id: 'match-birds',
      label: 'Match Birds',
      lockAfter: 4,
      commonData: {
        title: 'Connect image with its first letter.',
        rightImgType: 'custom',
        big: true
      },
      data: [
        `H, hornbill 
C, cuckoo 
P, pheasant 
F, falcon 
S, swan 
B, bulbul`,

        `S, spotted-dove 
P, pelican 
H, hummingbird 
R, robin 
B, blue-jay 
C, canary `,

        `G, goose 
T, turkey 
H, hawk 
C, cardinal 
P, parakeet 
M, macow `
      ]
    },
    {
      type: 'dragDropImgLabel',
      label: 'Animals - Drag & Drop',
      id: 'dragDrop-animals',
      commonData: {
        title: 'Drag and Drop the name on the images.'
      },
      data: [
        `mongoose| Mongoose
mosquito| Mosquito
octopus| Octopus
wolf| Wolf
lizard| Lizard
cockroach| Cockroach`,

        `garden-lizard| Garden Lizard
rabbit| Rabbit
leopard| Leopard
dragonfly |Dragonfly
fly|Housefly
squirrel|Squirrel`,

        `dinosaur | Dinosaur
alligator | Alligator
boar | Boar
cricket | Cricket
hyena | Hyena
polarbear | Polar Bear`,

        `antelope | Antelope
bug | Bug
jackal | Jackal
prawn | Prawn
baboon | Baboon
python | Python`,

        `bison | Bison
chameleon | Chameleon
porcupine | Porcupine
tigerfish | Tigerfish
ladybug | Ladybug
seahorse | Seahorse`,

        `hamster | Hamster
mole | Mole
caterpillar | Caterpillar
earthworm | Earthworm`,

        `hedgehog | Hedgehog
stingray | Stingray
jellyfish | Jellyfish
starfish | Starfish`
      ]
    },
    {
      type: 'dragDropImgLabel',
      label: 'Birds - Drag & Drop',
      id: 'dragDrop-birds',
      commonData: {
        title: 'Drag and Drop the name on the images.'
      },
      data: [
        `hornbill | Hornbill
cuckoo | Cuckoo
pheasant | Pheasant
falcon | Falcon
swan | Swan
bulbul | Bulbul`,

        `spotted-dove | Spotted Dove
pelican | Pelican
hummingbird | Hummingbird
robin | Robin
swallow | Swallow
blue-jay | Blue jay`,

        `seagull | Seagull
canary | Canary
goose | Goose
turkey | Turkey`,

        `hawk | Hawk
cardinal | Cardinal
parakeet | Parakeet
macow | Macaw`
      ]
    }
  ]
};
