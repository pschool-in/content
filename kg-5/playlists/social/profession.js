export default {
  id: 'profession',
  label: 'Profession',
  list: [
    {
      label: 'People and Professions',
      type: 'matchByDragDrop',
      id: 'profession',
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
I drive other people’s car for them, I am a *chauffeur*.
I look after a museum, I am a *curator*.
I represent people in a court of law, I am a *lawyer*.
I look after a library, I am a *librarian*.`
      ]
    },
    {
      id: 'match-tools',
      type: 'match',
      label: 'People and Tool',
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
    }
  ]
};
