export default {
  label: 'Compound Word 2',
  id: 'compound-word-2',
  list: [
    {
      id: 'reading',
      type: 'passage',
      label: 'Reading',
      data: {
        title: 'Compound Words',
        text: [
          `Compound words are made from two words put together.`,
          {
            type: 'sitewords',
            text: 'aircraft, allover, baseball, scapegoat, scarecrow, paycheck, shipyard, spacewalk, taskmaster, thunderbolt, wardroom, warehouse, warmhearted, watchdog, shipwreck, alongside, armchair, backbone, backdrop, blueprint, bodyguard, bookmark, brainwash, carefree, caveman, chairman, clockwise, commonplace, eyewitness, firearm, forecast, forefather, fortnight, earthquake, lawmaker, meantime, newfound, sidekick, skyscraper, layman, layoff',
            width: 120
          }
        ]
      }
    },
    {
      id: 'match',
      type: 'match',
      label: 'Match ',
      commonData: {
        title: 'Match the compound words'
      },
      data: [
        `air, craft
all, over
base, ball
scape, goat
scare, crow
lay, off`,

        `pay, check
ship, yard
space, walk
task, master
thunder, bolt`,

        `ward, room
ware, house
warm, hearted
watch, dog
ship, wreck`,

        `along, side
arm, chair
back, bone
back, drop
blue, print`,

        `body, guard
book, mark
brain, wash
care, free
cave, man`,

        `chair, man
clock, wise
common, place
eye, witness
fire, arm`,

        `fore, cast
fore, father
fort, night
earth, quake
law, maker`,

        `mean, time
new, found
side, kick
sky, scraper
lay, man`
      ]
    },
    {
      label: 'Pick right word',
      id: 'complete',
      type: 'completePuzzle',
      commonData: {
        type: 'rightOpen',
        title: 'Drag and drop the correct block to make a compound word.',
        printTitle: 'Underline the right option.'
      },
      data: [
        `air, craft, cave
all, over, up
base, ball, bat
scape, goat, got
scare, crow, cow
pay, check, cheat
ship, yard, junk
space, walk, moon
task, master, matter
thunder, bolt, screw
lay, off, see`,

        `ward, room, house
ware, house, room
warm, hearted, cold
watch, dog, cat
ship, wreck, sink
along, side, way
arm, chair, chin
back, bone, blade
back, drop, high
blue, print, paint`,

        `body, guard, gold
book, mark, scar
brain, wash, fish
care, free, fall
cave, man, hen
chair, man, den
clock, wise, along
common, place, palace
eye, witness, see
fire, arm, leg`,

        `fore, cast, bid
fore, father, fight
fort, night, might
earth, quake, shake
law, maker, side
mean, time, lamp
new, found, lost
side, kick, move
sky, scraper, man
lay, man, rest`
      ]
    }
  ]
};
