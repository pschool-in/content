export default {
  label: 'Vehicles and Jobs',
  id: 'picture-7',
  list: [
    {
      type: 'dragDropImgLabel',
      label: 'Vehicles',
      id: 'drag-vehicles',
      lockAfter: 1,
      commonData: {
        title: 'Drag the names and drop on the images.'
      },
      data: [
        `aeroplane | Aeroplane
boat | Boat
bus | Bus
car | Car
cycle | Cycle
helicoptor | Helicopter`,

        `motorbike | Motorbike
ship | Ship
tractor | Tractor
lorry| Lorry
train | Train
ambulance| Ambulance`,

        `auto| Auto
cart| Cart
excavator| Excavator
fire-engine| Fire Engine`,

        `van| Van
bulldozer | Bulldozer
rocket | Rocket
submarine | Submarine`
      ]
    },
    {
      type: 'dragDropImgLabel',
      label: 'Jobs',
      id: 'drag-jobs',
      lockAfter: 1,
      commonData: {
        title: 'Drag the names and drop on the images.'
      },
      data: [
        `astronaut | Astronaut
clown | Clown
fisherman | Fisherman
postman | Postman
teacher | Teacher
blacksmith | Blacksmith`,

        `cobbler | Cobbler
goldsmith | Goldsmith
potter | Potter
weaver | Weaver
carpenter | Carpenter
diver | Diver`,

        `nurse | Nurse
sailor | Sailor
chef | Chef
doctor | Doctor`,

        `police | Police
soldier | Soldier
barber | Barber
washerman | Washerman`
      ]
    },
    {
      type: 'completeWord',
      id: 'vehicles',
      label: 'Vehicles',
      lockAfter: 1,
      commonData: {
        images: 'vehicles',
        title: 'Find the missing letter and complete the word'
      },
      data: [
        `aeroplane | AEROPLANE | _ERO_LANE
boat | BOAT | _OAT
bus | BUS | _US
car | CAR | _AR
cycle | CYCLE | _YCLE
helicoptor | HELICOPTOR | _ELI_OPTOR
motorbike | MOTORBIKE | _OTOR_IKE
ship | SHIP | _HIP
tractor | TRACTOR | _RACTOR
lorry| LORRY | _ORRY`,

        `train | TRAIN | _RAIN
ambulance| AMBULANCE | _MBULANCE
auto| AUTO | _UTO
cart| CART | _ART
excavator| EXCAVATOR | _XCAVATOR
fire-engine| FIRE ENGINE | _IRE ENGINE
van| VAN | _AN
bulldozer | BULLDOZER | _ULLDOZER
rocket | ROCKET | _OCKET
submarine | SUBMARINE | _UBMARINE`
      ]
    },
    {
      type: 'completeWord',
      id: 'job',
      label: 'Job',
      lockAfter: 1,
      commonData: {
        images: 'vehicles',
        title: 'Find the missing letter and complete the word'
      },
      data: [
        `astronaut | ASTRONAUT | _STRONAUT
clown | CLOWN | _LOWN
fisherman | FISHERMAN | _ISHERMAN
postman | POSTMAN | _OSTMAN
teacher | TEACHER | _EACHER
blacksmith | BLACKSMITH | _LACKSMITH
cobbler | COBBLER | _OBBLER
goldsmith | GOLDSMITH | _OLDSMITH
potter | POTTER | _OTTER
weaver | WEAVER | _EAVER`,

        `carpenter | CARPENTER | _ARPENTER
diver | DIVER | _IVER
nurse | NURSE | _URSE
sailor | SAILOR | _AILOR
chef | CHEF | _HEF
doctor | DOCTOR | _OCTOR
police | POLICE | _OLICE
soldier | SOLDIER | _OLDIER
barber | BARBER | _ARBER
washerman | WASHERMAN | _ASHERMAN`
      ]
    },
    {
      type: 'match',
      id: 'match-vehicles',
      label: 'Match Vehicles',
      lockAfter: 1,
      commonData: {
        title: 'Connect image with its first letter.',
        rightImgType: 'custom',
        big: true
      },
      data: [
        `A, aeroplane 
B, boat
C, cycle 
H, helicoptor
M, motorbike
S, ship `,

        `B, bus 
C, car 
T, tractor 
L, lorry
A, auto
E, excavator`,

        `F, fire-engine
V, van
B, bulldozer
T, train `,

        `C, cart
A, ambulance
R, rocket 
S, submarine`
      ]
    },
    {
      type: 'match',
      id: 'match-jobs',
      label: 'Match Jobs',
      lockAfter: 1,
      commonData: {
        title: 'Connect image with its first letter.',
        rightImgType: 'custom',
        big: true
      },
      data: [
        `A, astronaut 
C, clown 
F, fisherman 
P, postman 
T, teacher 
B, blacksmith`,

        `C, cobbler 
G, goldsmith 
P, potter 
W, weaver
D, diver 
N, nurse`,

        `S, sailor 
C, chef 
D, doctor 
P, police`,

        `S, soldier 
C, carpenter 
B, barber 
W, washerman`
      ]
    }
  ]
};
