export default {
  label: 'Vocabulary',
  id: 'vocabulary-6-sc',
  img: 'vocabulary',
  grade: '6-8',
  list: [
    {
      type: 'match',
      label: 'Match Antonyms',
      id: 'antonyms',
      commonData: {
        title: 'Match words with opposite meaning.'
      },
      data: [
        `bold, timid
appear, vanish
straight, crooked
feeble, strong
contract, expand`,

        `cheap, expensive
ancient, modern
clumsy, graceful
despair, hope
guilty, innocent
humble, proud`,

        `build, destroy
antonym, synonym
combine, separate
dawn, dusk
grow, shrink
horizontal, vertical`
      ]
    },
    {
      type: 'match',
      label: 'Match Synonyms',
      id: 'synonyms',
      commonData: {
        title: 'Match words with same meaning.'
      },
      data: [
        `bag, sack
bravery, courage
grasp, absorb
enlarge, grow
honest, trustworthy
important, essential`,

        `need, necessity
opportunity, chance
question, query
weak, fragile
magnify, expand
miniature, tiny`,

        `fake,artificial
close, shut
more, additional
ancient, old
find, discover
steady, constant`
      ]
    },
    {
      type: 'match',
      label: 'More Accurate Words',
      id: 'accurate-words',
      commonData: {
        title: 'Match words.'
      },
      data: [
        `very noisy, deafening
very often, frequently
very old, ancient
very open, transparent
very painful, excruciating`,

        `very perfect, flawless
very poor, destitute
very powerful, dominant
very pretty, gorgeous	
very quick, rapid`,

        `very quiet, reserved
very rainy, pouring
very rich, affluent
very sad, sorrowful
very scared, terrified`,

        `very serious, grave
very sharp, keen
very shiny, gleaming
very short, brief
very shy, timid`,

        `very simple, plain
very angry, furious
very bad, awful
very cute, adorable
very complete, comprehensive`,

        `very easy, effortless
very big, massive
very dangerous, perilous
very bright, dazzling
very careful, cautious`
      ]
    },
    {
      type: 'sequence',
      id: '5-letter-word',
      label: 'Find the word',
      data: [
        'about, write, apple, actor, again, ahead, paint, right, small, cream', //alert
        'argue, brown, empty, forty, human, party, rough, solve, smile, carry',
        'beach, buyer, crowd, enter, fresh, level, mount, place, scene, plant',
        'bench, cycle, error, great, limit, sense, speak, dream'
      ]
    },
    {
      label: 'Types of Doctors',
      type: 'matchByDragDrop',
      id: '3-water-ice-vapor',
      commonData: {
        styles: {
          dashWidth: 100,
          fontSize: '1rem'
        }
      },
      data: [
        `*Pediatrician* - Takes care of babies and children.
*Cardiologist* - Takes care of heart and blood vessels.
*Oncologist* - treats cancer patients.
*Psychiatrist* - takes care of mental health
*Neurologist* - takes care of brain, spine & nerves.`,

        `*Gastroenterologist* - Treats the functions and diseases of the digestive system.
*Pulmonologist* - Treats lungs and respiratory system.
*Nephrologist* - Treats kidney function and diseases.
*Ophthalmologist* - Treats eyes and cure diseases like cateracts and glaucoma.
*Dermatologist* - treats skin and hair`
      ]
    },
    {
      type: 'sequence',
      id: '6-letter-word',
      label: 'Find the word-2',
      data: [
        'active, forget, silver, degree, bottle, minute, update, middle, twenty',
        'afraid, future, single, device, repair, branch, mother, volume, recent, author',
        'animal, health, speech, report, bright, myself, window, select, damage',
        'anyone, lesson, street, driver, result, burden, normal, member, talent, follow'
      ]
    },
    {
      id: 'confusing-words',
      label: 'Confusing Words',
      type: 'fillup',
      data: [
        {
          title: 'lie vs lay',
          text: `I am unwell. I am going to *lie* down for some time.
Monica and her friend *lay* their keys on the shelf.
They *lie* on the ground and look at the stars.
Please *lay* the bag on the table.
Today we will *lay* the carpet in the hall`,
          options: 'lie, lay'
        },
        {
          title: 'Lose vs Loose',
          text: `Ben has a *loose* tooth.
The hamster is so cute. Don't *lose* her now.
There are *loose* papers in the bag.
Don't *lose* your temper!
Our mothers *lose* their car keys a lot of times.
The boy is wearing *loose* pants.
The dog is *loose* in the neighborhood.`,
          options: 'loose, lose'
        },
        {
          title: 'borrow vs burrow',
          text: `Meena was forced to *borrow* ten rupees from Sarita for her bus fare.
Moles *burrow* under the soil.
The chipmunk retreated into its *burrow* to feed the babies.
May I *borrow* your pen, please?
Sujit had to *borrow* a compass during the Math exam.`,
          options: 'borrow, burrow'
        }
      ]
    },
    {
      label: 'Select Correct Prefix & suffix',
      id: 'prefix',
      type: 'completePuzzle',
      commonData: {
        type: 'bothOpen',
        title: 'Drag and drop the correct prefix and suffix.',
        leftWidth: 60,
        rightWidth: 110,
        midWidth: 160
      },
      data: [
        `success, un, in, ful, ness
prove, im, un, ment, ful
product, un, in, ive, ion
fresh, re, de, ment, ness
collect, re, un, ion, ment`,

        `invest, re, de, ment, ness
cover, re, de, ing, ful
doubted, un, in, ly, ness
loyal, dis, de, ty, ness
activa, de, di, tion, ly`,

        `lik, un,in, able, ty
place, re, ir, ment, tion
measur, im, in, able, ment
courage, en, in, ment, tion
believ, un, en, able, ness`
      ]
    },
    {
      type: 'rightOne',
      label: 'Pick Correct Spelling',
      id: 'correct-spelling',
      commonData: {
        title: 'Identify the correct spelling.'
      },
      data: [
        `acknowledge , acknowlege, aknowledge
acquire, aquire, acquaire
argument, arguement, arguemant
congratulate, congradulate
rhyme, rime
rhythm, rythm, rythem
committed, commited
comparison, comparsion
controversy, contraversy
deceive, decieve`,

        `definite, definate
desperate, desparate
dilemma, dilema
category, catagory, cetagory
colleague, collaegue, colligue
acceptable, acceptible
accidentally, accidentaly, accidentelly
accommodate, accomodate, acommodate
vacuum, vaccuum, vaccum
equipment, equiptment`,

        `exceed, excede
secretary, secratary, secretery
restaurant, restarant, restaraunt
occurrence, occurreance, occureance
license, lisence, lisense
privilege, previlege, previlage, privilage
relevant, relevent, revelant
separate, seperate
embarrass, embarass
imitate, immitate`
      ]
    },
    {
      type: 'wordle',
      id: 'wordle',
      label: 'Wordle',
      data: [
        { word: 'SOUND' },
        { word: 'MOUTH' },
        { word: 'CROWD' },
        { word: 'QUIET' },
        { word: 'GREAT' },
        { word: 'EIGHT' },
        { word: 'TASTE' },
        { word: 'ACTOR' },
        { word: 'CLOSE' },
        { word: 'DREAM' }
      ]
    }
  ]
};
