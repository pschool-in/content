export default {
  id: 'article-1',
  label: 'Article - Introduction',
  pdf: '',
  list: [
    {
      label: 'Articles',
      type: 'passage',
      id: 'articles-reading',
      data: {
        title: 'Articles ',
        text: [
          {
            type: 'html',
            text: `<b>a</b>, <b>an</b> and <b>the</b> are known as articles. They are used in front on naming words (nouns).<br>
          <b>an</b> is used with the word that begins with a vowel sound. We already know that <b>a</b>, <b>e</b>, <b>i</b>, <b>o</b> and <b>u</b> are called vowels. The remaining 21 letters are called consonants. <br>
          <b>a</b> is used with the word that begins with a consonant sound.`
          },
          {
            type: 'hilight',
            text:
              'an apple, an animal, an egg, an eagle, an ice-cream, an owl, an umbrella'
          },
          {
            type: 'hilight',
            text: 'a bag, a bird, a cat, a cup, a dog, a pen, a tree'
          },

          `Though the below words begin with 'u', the beginning sound is 'you'.`,
          { type: 'hilight', text: 'a universe, a uniform' },
          `Though the below words begin with 'h', the first letter is silent.`,
          { type: 'hilight', text: 'an hour, an honest' },

          {
            type: 'html',
            text: `<b>a</b> and <b>an</b> are used to refer any one of the things. But <b>the</b> is used to refer to a specific thing.<br>
            I went to a doctor. The doctor was very kind.<br>
            In the first sentence we use <b>a<b> before the word <b>doctor</b> because she is one of the many doctor. But in the second sentence we use <b>the</b> because we are speaking about a particular doctor whom we visited.`
          }
        ]
      }
    },
    {
      id: 'fill-up-1',
      label: 'Addition of Articles',
      type: 'fillup',
      commonData: {
        title: `Click on the blank and choose a or an before the following naming words`
      },
      data: [
        `*a(an)* lion
*an(a)* orange
*a(an)* peacock
*a(an)* tailor 
*an(a)* eye
*a(an)* bus
*a(an)* sheep
*a(an)* lemon
*an(a)* eraser
*a(an)* farmer`,

        `*a(an)* fish
*a(an)* docotor
*an(a)* engine
*a(an)* ball
*an(a)* egg
*an(a)* igloo
*a(an)* tiger
*a(an)* book
*an(a)* octopus
*a(an)* girl`,

        `*a(an)* ballon
*an(a)* ant
*an(a)* aeroplane
*a(an)* mat
*an(a)* engine
*a(an)* kite
*a(an)* bag
*a(an)* dog
*an(a)* owl
*a(an)* bench`,

        `*a(an)* banana
*a(an)* car
*a(an)* paper
*a(an)* bat
*an(a)* axe
*an(a)* ear
*a(an)* hat
*a(an)* table
*an(a)* insect
*a(an)* pen`,

        `*a(an)* flower
*an(a)* inkpot
*a(an)* parrot
*a(an)* box
*an(a)* elbow
*a(an)* window
*a(an)* football
*a(an)* panda
*a(an)* mouse
*an(a)* ice-cream`,

        `*a(an)* woman
*an(a)* officer
*a(an)* bottle
*a(an)* baby
*an(a)* urn
*an(a)* old carpet
*a(an)* beehive
*a(an)* gun
*a(an)* pot
*a(an)* hospital`,

        `*a (an)* guitar
*a (an)* pony tail
*an (a)* apple
*a (an)* pencil
*an (a)* elastic
*an (a)* animal
*a (an)* biscuit
*an (a)* ostrich
*a (an)* board
*a (an)* sofa`
      ]
    },
    {
      id: 'fill-up-2',
      label: 'Addition of naming words',
      type: 'fillup',
      commonData: {
        title: `Click on the blank and add the correct naming word in front of the articles.`
      },
      data: [
        `an *umbrella (cat)*
          an *ice-cream (pot)*
          an *engineer (pen)*
          a *toy (eagle)*
          an *accident(ring)*`,

        `a *lion (elephant)*
          an *hour(clock)*
          an *honest man(bad man)*
          a *car(owl)*
          a *cherry(apple)*`,

        `an *Eagle (crow)*
         an *honour(dishonour)*
         an *apron(coat)*
         a *lamp (inkpot)*
         an *egg (hen)*`
      ]
    },
    {
      type: 'selectWord',
      label: 'Select - Article -1',
      id: 'select-word',
      commonData: {
        title: 'Select the article in the sentence.'
      },
      data: [
        `*An* elephant is a mammal.
          Eating *an* apple everyday can keep a doctor away.
          Yesterday, I bought *a* white umbrella.
          *The* music is playing on the TV.
          I bought dozen bananas from *the* market.`,

        `Cheetah is *the* fastest land animal.
          My dad is *a* professor in Osmania University.
          My son has *a* big world map in his room.
          There is *a* dog in the yard.
          I saw *an* owl on the branch.`,

        `The teacher read *a* story in the class.
         I want *a* burger for dinner.
         Ram is *a* very smart boy.
         We have *a* black dog.
         Preethi is *an* honest student.`
      ]
    },
    {
      id: 'fill-up-3',
      label: 'Fill in the blanks',
      type: 'fillup',
      commonData: {
        title: `Click on the blank and choose the correct article in the sentence`
      },
      data: [
        `There is *a (an)* dog in the backyard.
I see *an (a)* owl on the tree!
Mom has *a (an)* blue dress.
There is *a(an)* cup on the table.
Manish eats *an (a)* orange for breakfast.
There is *a (an)* ball.
My aunt is *a (an)* lawyer.
Aditya wants *a (an)* pair of jeans.
Nitya is *an (a)* Indian classical singer.
He is sitting on *a (an)* sofa.`,

        `Meera is *an (a)* intelligent student.
Dad wants me to wear *a (an)* cap.
Reema has *a(an)* jewelry box.
We put up *a (an)* Christmas tree for holidays.
Grandma read *a (an)* story to all my friends.
I saw *an (a)* ostrich in zoo.
There is *a (an)* hospital near my home.
I have *a (an)* new pencil.
There is *a (an)* big window in my room.
I have *a (an)* box of chocolates in my bag.`,

        `I want to eat *an (a)* apple.
I bought *an (a)* umbrella for my brother.
Aladdin had *a (an)* magic lantern.
I saw *a (an)* big lion at the zoo.
She has written *a (an)* story.
I saw *a (an)* Peacock in KBR park today.
I have *an (a)* inkpot on my study table.
It is *an (a)* ancient fort in Hyderabad.
I am *a (an)* pilot.
Rajeev is reading *a (an)* magazine.`,

        `Rakesh's father is *a (an)* lawyer.
This is *a (an)* ball.
I saw *an (a)* old carpet.
We have *a (an)* red car.
Saanvi is *an(a)* honest girl.
Do you like *an (a)* apple?
He can ride *a (an)* bicycle.
Sudheer is *a (an)* doctor.
My sister is *a (an)* painter.
My son is *a (an)* good boy.`,

        `There is *a (an)* beehive.
Pass me *an(a)* apple.
Mohan has *a (an)* bike.
Ritu is *an (a)* Indian.
Krishna wants *an(a)* orange.
My mom is baking *a (an)* cake.
My neighbor has *a (an)* BMW car.
Nandita is *a (an)* classical dancer.
Mohit has *an(a)* umbrella.
Rohita is *an(a)* intelligent girl.`,

        `Mayukha bought *a (an)* flower.
They live in *a(an)* small hut.
She is not *an(a)* old lady.
My dad works in *a(an)* factory.
My brother has *a (an)* toy laptop.
*An (A)* elephant is a huge animal.
Meera is *a (an)* nice girl.
My uncle is *an (a)* engineer.
I bought *a (an)* pair of gloves.
Gold is *a (an)* precious ornament.`
      ]
    }
  ]
};
