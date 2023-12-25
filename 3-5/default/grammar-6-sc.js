export default {
  label: 'Grammar',
  id: 'grammar-6-sc',
  img: 'grammar',
  grade: '6-8',
  list: [
    {
      label: 'Choose Right Prefix',
      id: 'complete-prefix',
      type: 'completePuzzle',
      commonData: {
        type: 'leftOpen',
        title: 'Drag and drop the correct prefix.',
        printTitle: 'Underline the right option.',
        leftWidth: 90,
        rightWidth: 210
      },
      data: [
        `visible, in, un
organised, dis, mis
polite, im, in
patient, im, un
responsible, ir, dis
common, un, in
cooked, un, non-
distinct, in, non-
final, semi-, half-
ordinary, extra, great`,

        `well, un, in
legal, il, un
satisfactory, un, in
accurate, in, un
possible, im, mis
polite, im, un
dependent, in, un
use, mis, un
prove, im, in
joint, dis, un`,

        `fold, un, dis
door, in, mis
balance, im, in
happy, un, in
literate, il, un
fit, mis, im
appear, dis, un
human, in, dis
spell, mis, dis
pure, im, mis`
      ]
    },
    {
      type: 'fillup',
      label: 'Homonyms',
      id: 'homonyms',
      data: {
        text: `I am not *allowed (aloud) * to drink soda. 
My *aunt (ant) * bought me a new bike! 
I was so hungry. I *ate (eight) * my entire dinner. 
I got a new bat and *ball (bowl) * last week. 
What do you want to *be (bee)*  when you grow up? 
Eat that last green *bean (been)* on your plate. 
I *beat (beet) * you in the race. I was first. 
I have a teddy *bear (bare)* at home. 
I was stung by a *bee (be) *. 
Where have you *been (bean) * all this time? `
      }
    },
    {
      type: 'fillup',
      label: 'Prepositions',
      id: 'prepositions',
      data: {
        text: `The key is *on (near, by) * the table. 
The fish is *inside  (outside, on) * the bowl.
I gave a present *to (for, by) * my mother. 
The cat is sitting *under (over, inside) * the table. 
Pick the flowers *from  ( to, by) * the plant.
Arrange your books *in (on, by) * your book shelf. 
The lion lives *in (on, near) * the forest. 
We go to school *by (on, to) * bus. 
The sun is *above (below, over) * the clouds. 
Be careful *with (in, on) * the glasses.`
      }
    },
    {
      type: 'match',
      label: 'Match Subjects and Predicates',
      id: 'subject-predicate',
      onlyBigScreen: true,
      commonData: {
        title: 'Match Subjects and Predicates.'
      },
      data: [
        `The two year old girl, cried when her mom took her toy.
The baby calf, mooed at its mother.
The crank old man, fussed at the bus driver.
The large Christmas tree, was decorated with ornaments.
The tiny wooden sailboat, rocked back and forth in the water.
The playful chimpanzee, swung from the jungle vines.
The cheerful pilot, welcomed passengers onto the plane.
The humongous spider, spun its web by my back door.
The patient teacher, taught her students how to multiply.`,

        `The energetic puppy, wagged its tail eagerly.
The beautiful sunrise, painted the sky with vibrant colors.
The curious child, explored the garden with excitement.
The brave firefighter, rescued the cat from the burning building.
The old oak tree, provided shade on hot summer days.
The mischievous kitten, chased after a ball of yarn.
The diligent student, studied late into the night for the exam.
The talented musician, played the piano with great skill.
The fluffy white clouds, drifted across the clear blue sky.
The dedicated doctor, cared for patients with compassion.`,

        `The colorful butterfly, fluttered among the flowers in the garden.
The rusty bicycle, leaned against the garage wall.
The experienced chef, prepared a delicious gourmet meal.
The buzzing bee, collected nectar from the blossoms.
The wise owl, hooted softly in the moonlight.
The busy beekeeper, tended to the beehives with care.
The majestic eagle, soared high above the mountains.
The determined athlete, trained hard for the upcoming race.
The shy child, hid behind their parent during the party.
The sweet aroma, filled the kitchen as the cookies baked in the oven.`,

        `The adventurous hiker, climbed to the top of the mountain.
The playful kittens, pounced and wrestled with each other.
The diligent worker, completed the project ahead of schedule.
The fragrant flowers, bloomed in the garden during spring.
The strong wind, blew the leaves off the trees.
The friendly neighbors, greeted each other with smiles.
The icy snow, covered the landscape in a winter blanket.
The graceful ballerina, performed a stunning pirouette.
The noisy construction, disrupted the peaceful neighborhood.
The talented artist, painted a beautiful landscape on the canvas.`,

        `The roaring thunder, shook the windows during the storm.
The skilled carpenter, crafted a sturdy wooden table.
The adorable baby, giggled and cooed in its crib.
The persistent rain, soaked everyone at the outdoor event.
The magnificent sunset, painted the sky with hues of orange and pink.
The strict teacher, enforced the classroom rules with authority.
The chirping birds, filled the air with their melodic songs.
The tall skyscraper, stood tall in the city skyline.
The clumsy waiter, spilled a tray of drinks at the restaurant.
The full moon, illuminated the night sky with its soft glow.`,

        `The sleepy cat, curled up on the cozy cushion.
The noisy traffic, congested the city streets during rush hour.
The athletic swimmer, glided through the water with ease.
The fresh breeze, rustled the leaves on the trees.
The skilled magician, amazed the audience with his tricks.
The bustling market, offered a variety of goods for sale.
The roaring lion, commanded attention in the zoo.
The busy streets, buzzed with activity during the festival.
The adorable toddler, took hesitant steps across the room.
The delicious aroma, wafted from the kitchen as dinner cooked.`,

        `The graceful ballerina, twirled across the stage.
The mischievous puppy, chewed on a slipper.
The talented artist, painted a breathtaking landscape.
The exhausted marathon runner, crossed the finish line.
The playful dolphin, leaped out of the water.
The grumpy cat, hissed at the approaching dog.
The noisy construction workers, hammered and drilled.
The inquisitive child, asked numerous questions.
The talented musician, played a soulful melody on the piano.
The patient doctor, carefully examined the patient's symptoms.`,

        `The majestic eagle, soared through the clear blue sky.
The sleepy bear, found a cozy spot to hibernate.
The hardworking bee, buzzed from flower to flower.
The skilled carpenter, crafted a sturdy wooden table.
The mischievous monkey, swung from branch to branch.
The determined detective, solved the mysterious crime.
The strong winds, howled through the night.
The friendly neighbor, offered a helping hand.
The careful driver, obeyed the traffic rules.
The hungry lion, roared loudly in the jungle.`,

        `The cheerful baby, giggled and cooed.
The ancient ruins, stood as a testament to history.
The dedicated teacher, inspired her students to learn.
The delicate butterfly, landed on a fragrant flower.
The busy ants, worked together to build their colony.
The patient gardener, nurtured the plants with care.
The powerful thunderstorm, shook the windows.
The excited child, opened a present on their birthday.
The skilled goalkeeper, made a spectacular save.
The fluffy snowflakes, fell gently from the sky.`,

        `The hungry cat, pounced on the mouse.
The tall basketball player, dunked the ball.
The fast cheetah, chased its prey.
The old oak tree, stood tall in the forest.
The powerful storm, raged across the city.
The loud thunder, echoed through the valley.
The cozy fireplace, crackled with warmth.
The wise professor, lectured on philosophy.
The rusty gate, creaked in the wind.
The sweet aroma, filled the kitchen.`,

        `The old book, sat on the dusty shelf.
The tiny ant, carried a large crumb.
The bright moon, illuminated the night sky.
The playful dolphin, jumped out of the water.
The cold wind, blew through the trees.
The majestic mountain, stood tall against the horizon.
The strong wind, knocked down the tree.
The mischievous child, hid behind the couch.
The soft pillow, provided comfort for sleeping.
The beautiful rainbow, arched across the sky.`
      ]
    },
    {
      type: 'classifySentence',
      label: 'Active and Passive Voice',
      id: 'classify-voice',
      data: {
        title: 'Classify the Voice of the sentence.',
        types: [
          {
            name: 'Active',
            text: `She helps me.
He teaches us.
She respects us.
He cut trees.
Someone has stolen my purse.`
          },
          {
            name: 'Passive',
            text: `I am helped by her.
We are taught by him.
We are respected by her.
Trees were cut by him.
My purse has been stolen.`
          }
        ]
      }
    },
    {
      type: 'makeSentence',
      label: 'Convert to Passive Voice',
      id: 'make-sentence',
      commonData: {
        title:
          'Convert the Active Voice to Passive Voice. Drag & Drop the words from the bottom and construct the sentence.',
        extras: 'is because of an the them us'
      },
      data: [
        `Jim wrote a letter. |  a letter was written by Jim
Lata sings lovely songs. | lovely songs are sung by Lata`,
        `Tom is building a house. | a house is being built by Tom
They will run a race. | a race will be run by them 
I am writing a letter. | a letter was being written by me`,

        `He ate an apple. | an apple was eaten by him
He is eating an apple. | an apple is being eaten by him
He eats an apple. | an apple is eaten by him
He helps me. | I am helped by him
He is helping me. | I am being helped by him`,

        `Mr John teaches poor people. | poor people are taught by Mr John
The doctor was examining him. | he was being examined by the doctor
Sita is planting new trees. | new trees are being planted by Sita
Our dog chased the cat. | the cat was chased by our dog
The company released a new product. | a new product was released by the company `
      ]
    },
    {
      type: 'makeSentence',
      label: 'Convert Direct Sentences to Indirect Sentences',
      id: 'convert-direct',
      commonData: {
        title:
          'Convert the given Direct Sentence to Indirect Sentence. Drag & Drop the words from the bottom and construct the sentence.',
        extras: 'is because of an the them us'
      },
      data: [
        `"I am going to the store", said John. |  John said that he was going to the store
"I love ice-cream", exclaimed Sarah. | Sarah exclaimed that she loved ice-cream
"The concert starts at 7 PM," announced the event organizer. | the event organizer announced that the concert will start at 7PM
"I enjoy reading books," confessed Ruby. | Ruby confessed that she enjoyed reading books
"I will be there on time," promised Emily. | Emily promised that she would be there on time`,

        `"I am sorry for being late," apologized Mike. | Mike apologized for being late
"I don't like carrot," declared Mark. | Mark declared that he didn't like carrot
"What's your favorite color?" asked Sita. | Sita asked what our favorite color was
"I'm really tired," said Peter. | Peter said that he was really tired
"I liked the movie," said Ravi. | Ravi said that he liked the movie`,

        `"I'll phone you tomorrow," he said. | he said he'd phone me the next day
"My father works in a bank," Priya said. | Priya said that her father worked in a bank
"The baby's sleeping!", she said. | She told that the baby is sleeping
"I've hurt my leg", he said. | He said that she'd hurt her leg
"It was raining all day", she said. | She told me it had been raining all day`
      ]
    },
    {
      label: 'Irregular Verbs',
      id: 'complete-prefix',
      type: 'completePuzzle',
      commonData: {
        type: 'rightOpen',
        fontSize: '1.2rem',
        title: 'Drag and drop the past tense verb for the given word.',
        printTitle: 'Underline the right option.',
        leftWidth: 150,
        rightWidth: 150
      },
      data: [
        `hide, hid, hidden
know, knew, known
lie, lay, lain
mistake, mistook, mistaken
ride, rode, ridden
ring, rang, rung
rise, rose, risen
see, saw, seen
shake, shook, shaken
show, showed, shown`,

        `shrink, shrank, shrunk
sing, sang, sung
sink, sank, sunk
speak, spoke, spoken
spring, sprang, sprung
steal, stole, stolen
stink, stank, stunk
swear, swore, sworn
swim, swam, swum
take, took, taken`,

        `tear, tore, torn
throw, threw, thrown
wake, woke, woken
wear, wore, worn
write, wrote, written`
      ]
    }
  ]
};
