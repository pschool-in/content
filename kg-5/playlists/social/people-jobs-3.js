export default {
  id: 'people-jobs-3',
  label: 'People, Jobs, Tools',
  list: [
    {
      type: 'slides',
      id: 'tools-slide',
      label: 'Tools',
      commonData: {
        audio: 'kg-5/tools.mp3'
      },
      data: [
        {
          audioOffset: 0,
          text:
            'axe, balance, blackboard, hose, microscope, needle, oven, plier'
        },
        {
          audioOffset: 16,
          text:
            'plough, saw, spade, stethoscope, telescope, test-tube, thermometer'
        },
        {
          audioOffset: 30,
          text:
            'trowel, walkie-talkie|walkie talkie, awl, compass, easel, hacksaw, scalpel'
        }
      ]
    },
    {
      type: 'dragDropImgLabel',
      label: 'Drag and Drop - Tools',
      id: 'drag-nature',
      commonData: {
        title: 'Drag the names and drop on the images.'
      },
      data: [
        `axe | Axe
balance | Balance
blackboard | Blackboard
hose | Hose
microscope | Microscope
needle | Needle`,

        `oven | Oven
plier | Plier
plough | Plough
saw | Saw
spade | Spade
stethoscope | Stethoscope`,

        `telescope | Telescope
test-tube | Test tube
thermometer | Thermometer
trowel | Trowel
walkie-talkie|Walkie Talkie`,

        `awl | Awl
compass | Compass
easel | Easel
hacksaw | Hacksaw
scalpel | Scalpel`
      ]
    },
    {
      type: 'rightOne',
      label: 'Identify the Tools',
      id: 'pick-nature',
      lockAfter: 2,
      commonData: {
        title: 'Listen to the sound and click on the element of nature.',
        type: 'image',
        audio: 'kg-5/tools.mp3'
      },
      data: [
        {
          audioOffset: 0,
          text:
            'axe, balance, blackboard, hose, microscope, needle, oven, plier'
        },
        {
          audioOffset: 16,
          text:
            'plough, saw, spade, stethoscope, telescope, test-tube, thermometer'
        },
        {
          audioOffset: 30,
          text: 'trowel, walkie-talkie, awl, compass, easel, hacksaw, scalpel'
        }
      ]
    },
    {
      type: 'completeWord',
      id: 'tools',
      label: 'Write the Names',
      lockAfter: 1,
      commonData: {
        images: 'custom'
      },
      data: [
        `axe | AXE
balance | BALANCE
blackboard | BLACKBOARD
hose | HOSE
microscope | MICROSCOPE
needle | NEEDLE
oven | OVEN
plier | PLIER
plough | PLOUGH
saw | SAW`,

        `spade| SPADE
stethoscope | STETHOSCOPE
telescope | TELESCOPE
test-tube | TESTTUBE
thermometer | THERMOMETER
trowel | TROWEL
walkie-talkie | WALKIETALKIE`,

        `awl | AWL
compass | COMPASS
easel | EASEL
hacksaw | HACKSAW
scalpel | SCALPEL`
      ]
    },
    {
      id: 'match-image',
      type: 'match',
      label: 'Match Images ',
      commonData: {
        rightImgType: 'general',
        leftImgType: 'general'
      },
      data: [
        `astronaut, rocket
teacher, blackboard
chef, knife
doctor, stethoscope
barber, scissors`,

        `sailor, compass
potter, wheel
carpenter, saw
police, walkie-talkie
nurse, thermometer`,

        `goldsmith, ring
shopkeeper, balance
cobbler, awl
weaver, shirt
fire-engine,  hose`
      ]
    },
    {
      label: 'People and Professions',
      type: 'matchByDragDrop',
      id: 'profession',
      lockAfter: 1,
      commonData: {
        title: 'Match the given words at the right blanks.',
        styles: {
          fontSize: '1rem',
          dashWidth: 70
        }
      },
      data: [
        `I look after sick people in the hospital, I am a *nurse*.
I take care of young children and babies, I am a *babysitter*.
I make furniture, I am a *carpenter*.
I sell fruit and vegetables, I am a *greengrocer*.
I grow the food you eat, I am a *farmer*.
I study about plants, I am a *botanist*.`,

        `I take care of animals in a zoo, I am a *zookeeper*.
I study about birds, I am an *ornithologist*.
I paint and draw very well, I am an *artist*.
I teach in a college, I am a *lecturer*.
I perform operations to cure people, I am a *surgeon*.
I stitch clothes, I am a *tailor*.`,

        `I fly planes, I am a *pilot*.
I practice medicine, I am a *doctor*.
I drive other people's car for them, I am a *chauffeur*.
I look after a museum, I am a *curator*.
I represent people in a court of law, I am a *lawyer*.
I look after a library, I am a *librarian*.`
      ]
    },
    {
      id: 'match-tools',
      type: 'match',
      label: 'People and Tool',
      lockAfter: 1,
      commonData: {
        title: 'Match the people with their  tools of trade.'
      },
      data: [
        `gardener, spade
mason, trowel
doctor, stethoscope
nurse, thermometer
sailor, compass`,

        `surgeon, scalpel
artist, easel
chemist, test tube
electrician, pliers
plumber, hacksaw`,

        `carpenter, saw
tailor, needle
baker, oven
fireman, hose
cobbler, awl`,

        `fishmonger, dry ice
barber, comb
greengrocer, weighing scale
shepherd, staff
fisherman, net`
      ]
    },
    {
      id: 'match',
      label: 'Match the following',
      type: 'match',
      commonData: {
        title: 'Match the pairs'
      },

      data: [
        `Doctor, Hospital
Shopkeeper, Shop
Fisherman, Sea
Driver, Vehicles
Teacher, School`,

        `Blacksmith, Scrap
Salesman, Sells
Writer, Books
Baker, Bakery
Electrician, Wires`,

        `Carpenter, Wood
Cobbler, Shoes
Police, Safety
Shepherd, Flock
Plumber, Pipes`,

        `Nurse, Hospital
Singer, Melody
Goldsmith, Gold
Barber, Haircut
Tailor, Clothes`,

        `Engineer, Software
Mechanic, Machines
Photographer, Camera
Shephard, Sheep
Fisherman, Sea shore`,

        `Weaver, Weaving
Gardner, Lawns
Potter, Clay
Farmer, Field
Dancer, Performance`
      ]
    },
    {
      label: 'True or False',
      id: 'tf',
      type: 'classifySentence',
      commonData: {
        title: 'State whether these statements are true or false.',
        types: ['True', 'False']
      },
      data: [
        [
          `A cobbler is a person who repairs shoes.
Shepherd is one of the oldest occupations.
A singer has a melodious voice.`,
          `Dancers work in hospitals.
Shopkeeper helps the patients.
An actor is an expert in dancing.`
        ],
        [
          `A farmer is the most important unit of agriculture.
We have no threat of robbery if we have a watchman.
A potter makes pottery on a spinning wheel.`,
          `Gardner takes care of the law.
A weaver sews our clothes as per our demands.
Goldsmith makes things out of scrap.`
        ],
        [
          `A driver is a person who drives cars.
An electrician is an expert of wires and electricity.
A nurse takes care of patients in the hospital.`,
          `A salesman helps us in shops.
A writer is a person who helps us in completing our homework.
Police protects the theives.`
        ],
        [
          `Blacksmith moulds the scrap into usable products.
A tailor sews our clothes as per our demands.
Barber styles our hair.`,
          `A carpenter works with shoes.
A baker serves people at a restaurant.
A plumber helps to repair vehicles.`
        ]
      ]
    },
    {
      label: 'Multiple Choice Questions',
      id: 'mcq-3',
      type: 'mcq',
      data: {
        title: 'Choose the correct answer.',
        questions: [
          {
            qText: 'Who assists patients in the hospital?',
            options: 'Nurse, Teacher, Watchman'
          },
          {
            qText: 'Who is an expert in jewellery-making?',
            options: 'Goldsmith, Blacksmith, Cobbler'
          },
          {
            qText: 'Who is skilled with the wooden frameworks?',
            options: `Carpenter, Blacksmith, Cobbler`
          },
          {
            qText: 'Who makes cakes and pastries?',
            options: 'Baker, Nurse, Teacher'
          },
          {
            qText: 'Who maintains law and order?',
            options: 'Police, Conductor, Salesman'
          }
        ]
      }
    },
    {
      id: 'jumbled-words',
      type: 'sequence',
      label: 'Jumbled Words',
      commonData: {
        title: 'Identify these occupations.'
      },
      data: [
        'Police, Doctor, Driver, Tailor, Barber',
        'Weaver, Baker, Nurse, Writer, Actor'
      ]
    },
    {
      label: 'Fill in the blanks',
      type: 'matchByDragDrop',
      id: 'drag-and-drop',
      commonData: {
        isPractice: false,
        title: 'Drag the correct option in each blank to form an alliteration.',
        styles: {
          fontSize: '1rem',
          dashWidth: 80
        }
      },
      data: [
        `A *teacher* works in schools.
A *singer* has a melodious voice.
A *writer* is very creative.
A *barber* styles our hair.
A *salesman* sells products and services.`,

        `An *electrician* is an expert of electricity.
A *nurse* takes care of the patients.
A *doctor* takes care of our health.
A *policeman* punishes the culprit.
A *dancer* is an entertainer.`,

        `A *blacksmith* works with the metals.
A *farmer* works in agriculture.
An *actor* works in Tv shows and movies.
A *cobbler* repairs shoes.
A *baker* makes cakes and pastries.`,

        `A *weaver* works in clothing industries.
A *potter* makes things of clay.
A *photographer* can work in many areas, including wildlife.
A *fisherman* catches fish and collects shells.
A *tailor* sews clothes.`,

        `A *shephard* has a lot of sheep.
A *plumber* can fix running and leaking taps.
A *driver* drives vehicles.
A *carpenter* makes furniture.
A *shopkeeper* has a shop.`
      ]
    },
    {
      id: 'fillup',
      label: 'Fill up with options',
      type: 'fillup',
      data: {
        text: `A *blacksmith (goldsmith)* works with scrap.
A *doctor (nurse)* prescribes medicines.
A *teacher (dancer)* teaches values.
A *shopkeeper (salesman)* sells products in a shop.
An *electrician (plumber)* deals with wires.`,
        title: 'Tap on each blank to view options.'
      }
    },
    {
      type: 'rightOne',
      label: 'Correct Spelling',
      id: 'correct-spelling',
      commonData: {
        title: 'Identify the correct spelling.'
      },
      data: [
        `Police, Poliece
Dancer, Danser
Barber, Barbar
Writer, Riter
Cobbler, Cobblar`,

        `Electrician, Electricean
Salesman, Saleman
Blacksmith, Blacksmit
Singer, Singur
Dancer, Dancur`,

        `Doctor, Docter
Shopkeeper, Shopkeper
Fisherman, Fishman
Driver, Driiver
Teacher, Teecher`,

        `Baker, Bakeir
Carpenter, Carpent
Shepherd, Shefard
Plumber, Pumber
Nurse, Nusze`,

        `Goldsmith, Goldsmit
Tailor, Taylor
Weaver, Weavar
Gardner, Gardnar
Potter, Pottar`
      ]
    }
  ]
};
