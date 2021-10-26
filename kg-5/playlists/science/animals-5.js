export default {
  id: 'animals-5',
  label: 'Animals 5',
  lockAfter: 4,
  list: [
    {
      label: 'Conservation of Animals- Reading',
      type: 'passage',
      id: '3700',
      data: {
        title: 'Conservation of Animals',
        text: `Due to increasing exploitation of animals, it is important to understand reproduction in animals, extinction of animals and the ways to preserve them.
    # Reproduction in Animals
    Reproduction is the biological process by which an organism gives rise to a new organism. There are two types of reproduction in animals: sexual reproduction and asexual reproduction.              
    Sexual reproduction consists of the following stages:
    1. Pre-fertilization 
    2. Fertilization 
    3. Post-fertilization              
    Animals in which embryo develops outside the body are called oviparous animals, ex: Butterfly and Frogs. Animals in which the embryo develops inside the body are called viviparous animals. Humans, cows, deer and dogs are some examples.
    The type of reproduction in which only a single parent, gets divided into two new offspring, is known as asexual reproduction. There are four primary ways of asexual reproduction in animals: Fission, Budding, Fragmentation and Spore formation.
    # Conservation of Animals
    A National park is an area which is strictly reserved for the betterment of the wild life. The national parks cover an area of 100 – 500 square kilometers. In these areas, private ownership rights are not allowed.              
    A sanctuary is a protected area which is reserved for the conservation of animals only. Harvesting of timber, collection of forest products and private ownership rights are allowed here.`
      }
    },
    {
      label: 'Oviparous Vs Viviparous',
      id: '3800',
      type: 'group',
      data: {
        title: 'Classify the below animals on whether they lay eggs or not',
        types: [
          {
            name: 'Oviparous',
            text: 'Duck, Frog, Sparrow, Butterfly, Eagle'
          },
          {
            name: 'Viviparous',
            text: 'Human, Deer, Lion, Tiger, Elephant'
          }
        ]
      }
    },
    {
      label: 'Endangered Vs Not Endangered',
      id: '3900',
      type: 'group',
      data: {
        title: 'Classify the below animals',
        types: [
          {
            name: 'Endangered',
            text:
              'Umbrella Tree, Malabar Lily, Rafflesia Flower, Indian Mallo, Musli Plant'
          },
          {
            name: 'Not Endangered',
            text: 'Lotus, Rose, Marigold, Jasmine, Water Lily'
          }
        ]
      }
    },
    {
      label: 'National Parks Vs Wildlife Sanctuaries',
      id: '4000',
      type: 'group',
      data: {
        title: 'Classify as per National Parks Vs Wildlife Sanctuaries',
        types: [
          {
            name: 'National Park',
            text: 'Jim Corbett, Gir Forest, Kaziranga, Sundarban, Periyar'
          },
          {
            name: 'Wildlife Santuary',
            text: 'Kalakkad, Mudumalai, Mundanthrai, Anaimalai, Vedanthangal'
          }
        ]
      }
    },
    {
      id: '4101',
      label: 'Match the following',
      type: 'match',
      data: {
        text: `Black, confirmed extinct
            Red, endangered species
            White, rare species
            Green, formerly endangered`,
        title: 'Match the with appropriate choice'
      }
    },
    {
      label: 'Choose the best Answer - Animal Facts',
      id: '4200',
      type: 'mcq',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText:
              ' Which of the following location has Viralimalai Bird Sanctury?',
            options: 'Trichi, Mumbai, Patna, Dehradun'
          },
          {
            qText:
              'Which of the following is not associated with asexual reproduction?',
            options: 'Zygote, Fission, Budding, Fragmentation'
          },
          {
            qText: '_____ is not a Viviparous animal.',
            options: 'Crow, Tiger, Zebra, Cow'
          },
          {
            qText: '______ is the first stage of butterfly formation.',
            options: 'Egg, Zygote, Pupa, Larva'
          },
          {
            qText: 'The fusion of gametes (sex cells) is known as _________.',
            options: 'Fertilisation, Ovulation, Fission, Fragmentation'
          }
        ]
      }
    },
    {
      label: 'Drag and Drop - Animals facts',
      type: 'matchByDragDrop',
      id: '4300',
      data: {
        isPractice: false,
        title: 'Drag and drop the given words at the right blanks.',
        styles: {
          fontSize: '1.3rem',
          dashWidth: 80
        },
        text: `Reproduction in animals are of two types, *sexual* and asexual. 
                  Pupa is also known as *Chrysalis*.
                  *Fission* is the process of reproduction in flatworms.
                  Budding takes place in animals like *Hydras* and corals.
                  *Asiatic Lion* is an example of endangered animal.`
      }
    },
    {
      id: '4400',
      label: 'Animal Facts - Fill Up',
      type: 'fillupOptions',
      data: {
        title: 'Click the blanks and fill it with the right word.',
        text: `Project Tiger was initiated in India in *1972 (1975)* to protect the Bengal Tiger.
                  In the Red Data Book, *Red (Black)* color is used to denote endangered species.
                  *Kaziranga (Gir)* national park is famous for one horned Rhino.
                  *Blue Cross (Red Data Book)* of India was founded by Captain V. Sundaram of Chennai.
                  *Amoeba (Sea Stars)* reproduces through Fission.`
      }
    },
    {
      label: 'Animal Facts ',
      id: '4500',
      type: 'classifySentence',
      data: {
        title:
          'Classify the below sentence as characteristics of oviparous or viviparous.',
        types: [
          {
            name: 'Oviparous',
            text: `The development of the embryo takes place outside the animal.
                      They produce their young ones by laying eggs.
                      The embryo receives the nutrients from the egg yolk. `
          },
          {
            name: 'Viviparous',
            text: `The development of the embryo takes place inside the animal.
                      They directly give birth to the young ones.
                      The embryo receives the nutrients from the mother.`
          }
        ]
      }
    },
    {
      label: 'Animal Facts - True or False',
      id: '4600',
      type: 'classifySentence',
      data: {
        title: 'Classify the below sentences as true and false',
        types: [
          {
            name: 'True',
            text: `The third stage of butterfly growth is pupa.
                      Dogs are an example of Vivparous animals.
                      Endangered species have population less than 50 or less than 250 for the past three years.`
          },
          {
            name: 'False',
            text: `Rafflesia Flower is not an endangered species.
                      Sea Anemone reproduces through budding process.
                      UNESCO has declared Gir National Park as a World Heritage Site.`
          }
        ]
      }
    }
  ]
};
