export default {
  label: 'Animal Related Words',
  id: 'animal-words',
  list: [
    {
      id: 'match-sounds',
      type: 'match',
      label: 'Match Sounds ',
      commonData: {
        title: 'Match the animals with the sounds they make.'
      },
      data: [
        `dog, bark
cat,  meow
donkey, bray
cow,  moo
hen, cluck
crow, caw`,

        `horse, neigh
duck, quack
monkey, chatter
goat, bleat
snake, hiss
pig, grunt`,

        `rat, squeak
wolf, howl
owl, hoot
elephant, trumpet
lion, roar
bee, buzz`,

        `frog, croak
sheep, bleat
tiger, growl
cuckoo, sing
sparrow, tweet`
      ]
    },
    {
      id: 'match-place',
      type: 'match',
      label: 'Match Animals and their home',
      commonData: {
        title: 'Match the animals with their home.'
      },
      data: [
        `bees, hive
birds, nest
cow, shed
dog, kennel
horse, stable
human beings, house`,

        `lion, den
pig, sty
rabbit, burrow
sheep, pen
spider, web`,

        `hen, coop
monkey, tree
goat, pen
ant, anthill
fish, aquarium`
      ]
    },
    {
      id: 'match-place-3',
      type: 'match',
      label: 'People and living place',
      data: {
        title: 'Match the people with their living place.',
        text: `man, house
hermit, hermitage
king, palace
nomad, tent
peasant, cottage
soldier, camp`
      }
    },
    {
      id: 'match-little-ones',
      type: 'match',
      label: 'Little Ones',
      commonData: {
        title: 'Match the Animals and their little ones.'
      },
      data: [
        `cat, kitten
lion, cub
cow, calf
pig, piglet
deer, fawn
human, child`,

        `dog, pup
goat, calf
sheep, lamb
horse, foal
gorilla, infant
bear, cub`,

        `duck, duckling
elephant, calf
donkey, foal
Hen, chick
owl, owlet
tiger, cub`
      ]
    },
    {
      id: 'match-group',
      type: 'match',
      label: 'Animals and their group',
      commonData: {
        title: 'Match the Animals and their group. '
      },
      data: [
        `bats, colony
bees, swarm
birds, flock
buffalo, herd
cattle, mob
dogs, pack`,

        `elephant, herd
fish, school
goats, flock
hens, brood
lions, pride
wolf, pack`
      ]
    },
    {
      label: 'Collective Nouns',
      type: 'matchByDragDrop',
      data: {
        isPractice: false,
        title: 'Drag and drop the collective nouns at proper places.',
        styles: {
          fontSize: '1rem',
          dashWidth: 70
        },
        text: `a *herd* of cattle
a *flock* of birds
a *school* of fish
a *pack* of wolves
a * swarm* of bees
a *choir* of singers
a *troupe* of dancers`
      },
      id: 'collective-noun'
    }
  ]
};
