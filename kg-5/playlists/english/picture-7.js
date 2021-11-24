export default {
  label: 'Vehicles and Jobs',
  id: 'picture-7',
  list: [
    {
      type: 'completeWord',
      id: 'vehicles',
      label: 'Vehicles',
      lockAfter: 1,
      commonData: {
        images: 'vehicles'
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
    }
  ]
};
