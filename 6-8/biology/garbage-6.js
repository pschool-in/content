export default {
  id: 'garbage-6',
  label: 'Garbage',
  lockAfter: 4,
  list: [
    {
      id: 'notes',
      label: 'Garbage in, Garbage out - Reading',
      type: 'passage',
      data: {
        text: `# Dealing with garbage
Safai karamcharis collect the garbage in trucks and take it to a low lying open area called landfill. The part of the garbage that can be reused is separated out from the one that cannot be used as such. The non-useful component is separated out. It is then spread over the landfill and covered with a layer of soil. Once the landfill is completely full, it is converted to a park or playground. Useful components are used to make compost.

# Vermicomposting
The method of preparing compost with the help of redworms is called vermicomposting.

# Steps in vermicomposting
1. Spread a net or sand at bottom of a pit.
2. Spread vegetable waste.
3. Sprinkle some water.
4. Add redworms.
5. Cover loosely with gunny bag, old cloth or grass.
6. Vermicompost ready within 3-4 weeks.

# Redworms
Redworms do not have teeth. They have a structure called gizzard, which helps them in grinding their food. Powdered egg shells or sea shells could be mixed with the wastes. This would help redworms in grinding their food. A redworm can eat food equal to its own weight, in a day. Redworms do not survive in very hot or very cold surroundings. They also need moisture around them. If you take good care of your worms, in a month’s time their number will double.

# Think and Throw
The garbage can be sorted before it is disposed off. Things that can be recycled like paper and things that can be reused needs to be separated out to reduce the bulk of garbage.

# Recycling of Paper
Old newspapers, magazines, used envelopes, notebooks and any other paper materials can be recycled to obtain useful products. The paper can be torn, made into a paste by submerging in water for a day and then spread on wire mesh and dried in the sun to form recycled paper.

# Plastics
Some plastics can be recycled but not all. Consuming food packed in reused plastic is harmful for our health. All kind of plastics give out harmful gases, upon heating or burning. These gases may cause many health problems, including cancer, in humans. Stray animals may swallow plastics bags and sometimes die due to this. Plastics may enter sewer system and block drains. `,
        title: 'Garbage in, Garbage out'
      }
    },
    {
      label: 'Fill in the blanks',
      type: 'matchByDragDrop',
      id: 'match-drag-drop-1',
      data: {
        styles: {
          fontSize: '1rem',
          dashWidth: 80
        },
        text: `*Landfill* is an area where the garbage collected from a city or town is dumped. 
The area  used as a landfill is later converted into a *park*.
Converting plant and animal waste including that from kitchen, into manure, is called *composting*.
The method of making compost from kitchen garbage using redworms is called *vermicomposting*.`
      }
    },
    {
      id: 'fillup',
      label: 'Fill Up',
      type: 'fillup',
      data: {
        title: 'Click the blanks and fill it with the right word.',
        text: `Paper can be *recycled (reused)* to get useful products.
*Plastics (Paper)* cannot be converted into less harmful substances by the process of composting.
We need to generate *less (more)* waste and find ways of dealing with the increasing amount of garbage in our surroundings.
Converting plant and animal waste into manure is called *composting (vermicomposting)*.`
      }
    },
    {
      id: 'yes-no',
      label: 'Yes or No',
      type: 'classifySentence',
      data: {
        title: 'Can the suggested method reduce use of plastic?',
        types: [
          {
            name: 'Yes',
            text: ` Using banana leaves at a party.
Using steel and glass tumblers.
Using tiffin and bottles made of steel.`
          },
          {
            name: 'No',
            text: `Using plastic containers to store food.
Using plastic plates at a large party.
Using plastic carry bags to dispose waste.`
          }
        ]
      }
    },
    {
      id: 'recycle-reuse',
      label: 'Recycle or Reuse',
      type: 'classifySentence',
      data: {
        title: 'Classify the items as recyclable or reusable.',
        types: [
          {
            name: 'Recycle',
            text: ` Paper
Cardboards
Backpacks
Batteries
Aluminium cans`
          },
          {
            name: 'Reuse',
            text: `Jute carrybags
Handkercheif
Steel mugs
Cotton wipes
Glass jars`
          }
        ]
      }
    },
    {
      id: 'true-false',
      label: 'True or False',
      type: 'classifySentence',
      data: {
        title: 'True or False',
        types: [
          {
            name: 'True',
            text: ` Redworms are used for vermicomposting.
Not all plastics can be recycled.
Paper can be easily recycled.`
          },
          {
            name: 'False',
            text: `Plastics possess more benefits than harmful effects.
Plastics are biodegradable.
Plastics are not a hazard to health.`
          }
        ]
      }
    },
    {
      label: 'Answer in one word',
      type: 'matchByDragDrop',
      id: 'match-drag-drop',
      data: {
        styles: {
          fontSize: '1rem',
          dashWidth: 80
        },
        text: `Process by which plant and animals waste is converted to manure - *Composting*
Structure that earthworms used to grind food - *Gizzard*
Low lying open area uesd to dump garbage - *Landfill*
Earthworm used in vermicomposting -*Redworm*`
      }
    },
    {
      label: 'Steps in vermicomposting',
      type: 'sorting',
      data: {
        title: 'Arrange the steps in vermicomposting in correct order',
        text: 'Spread a net at bottom of a pit, Spread vegetable waste, Sprinkle some water, Add redworms, Cover loosely, Leave for 3-4 weeks.'
      },
      id: 'sorting'
    },
    {
      label: 'Steps in recycling paper',
      type: 'sorting',
      data: {
        title: 'Arrange the steps in recycling paper in correct order.',
        text: 'Tear into bits, Submerge overnight in water, Pound to thick paste, Spread of wire mesh, Even it out, Wait till water drains, Remove from mesh, Dry in sunlight.'
      },
      id: 'sorting-2'
    },
    {
      id: 'mcq',
      label: 'Better Alternative',
      type: 'mcq',
      data: {
        title: 'Pick the better alternative from the two.',
        questions: [
          {
            qText: 'Which of the following is the better alternative?',
            options: `Using banana leaves, Using plastic plates`
          },
          {
            qText: 'Which of the following is the better alternative?',
            options: `Using biodegradable bags for waste disposal, Using polythene bags for waste disposal`
          },
          {
            qText: 'Which of the following is the better alternative?',
            options: `Using jute or cotton carry bags, Using disposable plastic bags.`
          },
          {
            qText: 'Which of the following is the better alternative?',
            options: `Using steel tiffin boxes and water bottles, Using Plastic containers and botteles.`
          },
          {
            qText: 'Which of the following is the better alternative?',
            options: `Using cotton bags to store vegetables, Using plastics bags to store vegetbles.`
          }
        ]
      }
    },
    {
      id: 'mcq-2',
      label: 'Multiple Choice Questions - MCQ',
      type: 'mcq',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: 'Who collect garbage in garbage trucks?',
            options: `Safai karamcharis, Saf karamcharis, Safai charis`
          },
          {
            qText: 'What is done with the useful garbage?',
            options: `Use to make compost, Dumped in landfill, Disposed in water bodies.`
          },
          {
            qText: 'What to plastics give out on burning?',
            options: `Harmful gases, Oxygen`
          },
          {
            qText:
              'When plastic enters a sewer system what damage can it cause?',
            options: `It can block drains, Allow water to pass freely `
          },
          {
            qText: 'What can be used to substitute plastic carry bags?',
            options: `Jute or cotton carry bags, Polythene bags, Disposable plastics`
          }
        ]
      }
    }
  ]
};
