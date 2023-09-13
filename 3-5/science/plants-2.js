export default {
  label: 'Plants around Us',
  id: 'plants-2',
  lockAfter: 2,
  list: [
    {
      type: 'dragDropImgLabel',
      label: 'Match the Leaves',
      id: 'dragdrop-leaves',
      lockAfter: 1,
      commonData: {
        title: 'Drag the names and drop on the images.'
      },
      data: [
        `bananaleaf | Banana leaf 
mangoleaf | Mango leaf
neemleaf | Neem leaf
coconutleaf | Coconut leaf
tulsi | Tulsi
drumstick-leaves | Moringa`,

        `mintleaf | Mint leaf
spinach | Spinach
fenugreek | Fenugreek
corianderleaf | Coriander leaf
curryleaf | Curry leaf
spring-onion | Onion Spring`
      ]
    },
    {
      type: 'sequence',
      id: 'fruits-jumbled',
      label: 'Find the Fruits',
      data: {
        title: 'Connect the letters and form a fruit.',
        text: `grapes, banana, apple, orange, mango, papaya, fig, dates, cherry, plum`
      }
    },
    {
      type: 'sequence',
      id: 'vegetables-jumbled',
      label: 'Find the Vegetables',
      data: {
        title: 'Connect the letters and form a vegetable.',
        text: `carrot, potato, corn, beans, onion, radish, pumpkin, brinjal, turnip, yam`
      }
    },
    {
      type: 'sequence',
      id: 'flowers-jumbled',
      label: 'Find the Flowers',
      data: {
        title: 'Connect the letters and form a flower.',
        text: `rose, lotus, tulip, lily, jasmine`
      }
    },
    {
      id: 'notes',
      type: 'passage',
      label: 'Passage',
      data: {
        title: 'Notes',
        text: `Every plant has a root and a shoot system. The part of the plant that grows under the ground is called the root system. The part of the plant that grows above the ground is called the shoot system. It consists of stem, leaf, flower and fruit. 
# Herbs
Herbs are small plants with thin and soft stems. Most of them live for a few months. eg: mint, coriander, grass
# Shrubs
Shrubs are smaller than trees. Their stems are thin and hard. Shrubs live for many years. eg: shoe flower, jasmine
# Climbers
Climbers have weak stems and they need support to climb and grow. eg: snake gourd, ridge gourd
# Creepers
Creepers have weak stem and grow along the ground and bear large and heavy fruits. eg: pumpkin, watermelon
# Trees
Trees are big and tall plants.They have hard and thick stem called trunk. They live for many years. Eg: neem, banyan, coconut
# Benefits of Plants
We get most of our foods from plants in the form of vegetables, fruits, cereals, pulses, spices and oils.
Coconut oil is used both as cooking oil and hair oil.
Many plants has medicinal value. Eg: eucalyptus, neem, tulsi.
Plants are also used as cosmetics. Eg: henna, shikakai, aloe vera.`
      }
    },
    {
      label: 'Drag and Drop',
      id: 'drag-drop',
      type: 'matchByDragDrop',
      data: {
        text: `*Leaf* grows from the stem.
*Flower* has special smell and colour.
*Fruit* has seeds.
*Stem* supports the plant.
*Root* fixes the plant in the soil.`
      }
    },
    {
      id: 'match',
      type: 'match',
      data: [
        `Herb, Grass
Shrub, Shoe Flower
Climber, Snake Gourd
Creeper, Pumpkin
Tree, Banyan`,

        `Herb, Mint
Shrub, Jasmine
Climber, Snake gourd
Creeper, Watermelon
Tree, Coconut`,

        `Henna, Hands
Shikakai, Hair
Aloe vera, Face
Tulsi, Health`
      ]
    },
    {
      id: 'fillup',
      label: 'Fill Up',
      type: 'fillup',
      data: {
        text: `The part of the plant that grows *above (below)* the soil is called shoot system, and *below (above)* the soil is called root system.
The *leaves (stems)* are the green parts of the plant.
Flowers grow from *buds (fruits)*.
*Banana (Neem)* leaves are used as plates. *Neem (Banana)* leaves are used as medicines.`
      }
    },
    {
      id: 'story',
      type: 'slides2',
      label: `The Story of a Mango`,
      data: {
        title: `The Story of a Mango`,
        displayType: 'steps',
        autoPlay: false,
        audio: 'science/mango-story.mp3',
        images: 'img/science/mango-story',
        audioOffsets: [4.5, 12.5, 17.5, 23, 29, 35, 40.5, 46.5],
        steps: [
          `The farmer picks the mangoes from the tree.
          The farmer uses a net to pluck the mangoes, to avoid getting damaged.
The plucked mangoes are loaded in a truck.
The truck moves the mangoes from the village to the city.
A big merchant buys all the mangoes in the city.
Many fruit sellers buy mangoes from the merchant.
Fruit sellers weigh the mangoes and pay the merchant.
Finally, we buy the mangoes from the local fruit seller.`
        ]
      }
    },
    {
      id: 'tomato-plant',
      type: 'passage',
      label: 'Selvi and a Tomato Plant',
      data: {
        title: 'Selvi and a Tomato Plant',
        text: `Selvi went to a garden. She saw a yellow flower on the tomato plant. She went to pluck it. A bee came and said, 'Please, leave it for me. It is my food'.
She saw a red tomato on the tomato plant. She went to pluck it. A parrot came and said, 'Please, leave it for me. It is my food'.
She saw a green leaf on the tomato plant. A grasshopper came and said, 'Please don't pluck the leaf. It is my food'. 
Watering the plant, Selvi said, 'You provide food for all of us. Thank you very much'.`
      }
    },
    {
      label: 'Drag and Drop',
      id: 'drag-drop-2',
      type: 'matchByDragDrop',
      data: {
        text: `*Yellow* flower provides food for a *bee*.
*Green* leaf is the food for a *grasshopper*.
*Red* tomato is the food for a *parrot*.`
      }
    }
  ]
};
