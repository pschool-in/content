export default {
  id: 'article-1',
  label: 'Article - Introduction',
  pdf: '',
  list: [
    {
      label: 'Articles',
      type: 'passage',
      id: 'reading',
      data: {
        title: 'Articles ',
        text: [
          {
            type: 'html',
            text: `<b>a</b>, <b>an</b> and <b>the</b> are known as articles. They are used in front on naming words (nouns).<br><br>
<b>an</b> is used with the word that begins with a vowel sound. We already know that <b>a</b>, <b>e</b>, <b>i</b>, <b>o</b> and <b>u</b> are called vowels. The remaining 21 letters are called consonants.`
          },
          {
            type: 'hilight',
            text:
              'an apple, an animal, an egg, an eagle, an ice cream, an owl, an umbrella'
          },
          {
            type: 'html',
            text:
              '<b>a</b> is used with the word that begins with a consonant sound.'
          },
          {
            type: 'hilight',
            text: 'a bag, a bird, a cat, a cup, a dog, a pen, a tree'
          },

          `Though the below words begin with 'u', the beginning sound is 'you'. So it is not considered as a vowel sound.`,
          { type: 'hilight', text: 'a universe, a uniform' },
          `Though the below words begin with 'h', the first letter is silent. So the initial sound of the word is a vowel.`,
          { type: 'hilight', text: 'an hour, an honest' },
          {
            type: 'html',
            text: `<b>a</b> and <b>an</b> are used to refer any one of the things. But <b>the</b> is used to refer to a specific thing.<br>
I went to a doctor. The doctor was very kind.<br>
In the first sentence, we use <b>a</b> before the word <b>doctor</b> because she is one of the many doctors. But in the second sentence we use <b>the</b> because we are speaking about a particular doctor whom we visited.`
          }
        ]
      }
    },
    {
      label: 'Pick the Right Article',
      id: 'complete',
      type: 'completePuzzle',
      lockAfter: 2,
      commonData: {
        type: 'leftOpen',
        title: 'Drag and drop the correct Article.',
        printTitle: 'Pick the correct Article',
        leftWidth: 75,
        rightWidth: 245
      },

      data: [
        `pot, a, an
gun, a, an
ant, an, a
pan, a, an
nose, a, an
cup, a, an
can, a, an
cap, a, an
hen, a, an
bed, a, an`,

        `pen, a, an
car, a, an
bat, a, an
axe, an, a
ear, an, a
hat, a, an
table, a, an
insect, an, a
banana, a, an
paper, a, an`,

        `ant, an, a
mat, a, an
bag, a, an
dog, a, an
owl, an, a
bench, a, an
ballon, a, an
aeroplane, an, a
engine, an, a
kite, a, an`,

        `eye, an, a
bus, a, an
sheep, a, an
lemon, a, an
eraser, an, a
farmer, a, an
lion, a, an
orange, an, a
peacock, a, an
tailor, a, an`,

        `bulb, a, an
rose, a, an
frog, a, an
door, a, an
pear, a, an
peach, a, an
shoe, a, an
horse, a, an
brush, a, an
pin, a, an`
      ]
    },
    {
      label: 'Pick the Right Word',
      id: 'complete-2',
      type: 'completePuzzle',
      lockAfter: 2,
      commonData: {
        type: 'rightOpen',
        title: 'Drag and drop the right word to match the article.',
        printTitle: 'Pick the right word that goes with the article.',
        leftWidth: 75,
        rightWidth: 245
      },
      data: [
        `a, cow, ox
an, owl, bat
an, eagle, parrot
a, cherry, orange
a, nose, eye
an, ear, teeth
a, nine, eight
an, elder, younger
a, new, old
a, bow, arrow`,

        `an, ox, cow
a, bat, owl
a, parrot, eagle
an, orange, cherry
an, eye, nose
a, teeth, ear
an, eight, nine
a, younger, elder
an, old, new
an, arrow, bow`,

        `an, inch, cm
a, kite, eagle
a, lemon, orange
a, mango, apple
an, oven, stove
a, nice, old
a, one, eight
an, oval, circle
a, pair, eye
a, pencil, eraser`
      ]
    },
    {
      type: 'selectWord',
      label: 'Identify the Articles',
      id: 'select-word',
      commonData: {
        title: 'Select the article in the sentence.'
      },
      data: [
        `Ravi is *a* boy.
He is *a* doctor.
I saw *an* elephant.
I have *an* umbrella.
We have *a* pet dog.
Preethi is *an* honest student.
Ram is *a* very smart boy.
I want *a* burger for dinner.
There is *a* snake.
Tia has *a* cat.`,

        `Mahi wants *an* iPad.
I can see *a* blue car.
This is *an* easy question.
Piya is eating *an* apple.
Somnath is reading *a* book.
Karthik is sleeping on *the* sofa.
Mihir has *an* old bike.
My uncle is *a* pilot.
Swati is *a* nice girl.
Reading is *a* good habit.`
      ]
    },
    {
      id: 'fill-up',
      label: 'Fill in the blanks',
      type: 'fillup',
      commonData: {
        title: `Click on the blanks and choose the right article.`,
        options: 'a, an'
      },
      data: [
        `That is *a* pot.
I saw *an* ant hill in my garden.
I have *an* exam tomorrow morning.
We went to *a* movie yesterday evening.
I and my brother had *a* chocolate cake.
I need *a* bowl of soup.
I have *a* bag of chocolates.
I want to eat *a* mango.
I have *an* idea for our project work.`,

        `The tiger is *a* wild animal.
Kavya is *a* hardworking student.
Is that *an* old dress you are wearing?
This is *an* eraser.
M.S.Dhoni is *a* cricketer.
Mr. Ramesh is *a* teacher.
Ginger is *a* lazy dog.
He can ride *a* bike.
There is *an* insect under the pillow.
I bought *a* new lunch box today.`,

        `There is *a* dog in the backyard.
I see *an* owl on the tree!
Mom has *a* blue dress.
There is *a* cup on the table.
Manish eats *an* orange for breakfast.
There is *a* ball.
My aunt is *a* lawyer.
Aditya wants *a* pair of jeans.
Nitya is *an* Indian classical singer.
He is sitting on *a* sofa.`,

        `There is *a* beehive.
Pass me *an* apple.
Mohan has *a* bike.
Ritu is *an* Indian.
Krishna wants *an* orange.
My mom is baking *a* cake.
My neighbor has *a* BMW car.
Nandita is *a* classical dancer.
Mohit has *an* umbrella.
Rohita is *an* intelligent girl.`
      ]
    },
    {
      label: 'Presence of Article',
      id: '300',
      type: 'classifySentence',
      commonData: {
        title: 'Identify whether the sentences have articles or not.',
        types: ['Has article', `Doesn't Have`]
      },
      data: [
        [
          `I would like to have an orange.
A donkey is an animal.
I bought an umbrella.`,

          `I could see stars at night.
Do you speak Bengali?
She arrived in Mumbai yesterday.`
        ],
        [
          `I ate an apple pie yesterday.
My mother is a doctor.
Shannu is a nice boy.`,

          `I eat chapatis every day.
December is quite cold.
I go to school by car every day.`
        ]
      ]
    }
  ]
};
