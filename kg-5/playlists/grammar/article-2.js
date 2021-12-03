export default {
  label: 'Definite and Indefinite Article',
  id: 'article-2',
  list: [
    {
      label: 'Definite and Indefinite Article',
      type: 'passage',
      id: 'article-reading',
      data: {
        title: 'Definite and Indefinite Article',
        text: `Articles are of two types – the definite article (the) and the indefinite article (a/an).
  # Indefinite articles:
  The indefinite articles "a/an" are generally used to mention some person or thing.
  These articles do not specify a particular person or a thing.
  "A" and "An" are used to introduce noun or naming words and are also used to mention singular countable nouns.
  "a" is used before singular nouns beginning with consonant sounds.
  "an" is used before singular nouns beginning with vowel sounds.
  # Definite article:
  We use definite article "the" when we are talking about a specific person or a thing.
  "the" is used for countable and uncountable nouns/singular and plural nouns.`
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
        `year, a, an
Indian, an, a
umbrella, an, a
honest, an, a
hour, an, a
universe, a, an
university, a, an
x-ray, an, a
one, a, an
wonderful, a, an`,

        `inch, an, a
igloo, an, a
tree, a, an
eagle, an, a
bench, a, an
bat, a, an
tiger, a, an
ice-cream, an, a
lemon, a, an
house, a, an`,

        `banana, a, an
mango, a, an
igloo, an, a
cat, a, an
egg, an, a
ball, a, an
elephant, an, a
cake, a, an
zoo, a, an
singer, a, an`,

        `eye, an, a
oven, an, a
teacher, a, an
unicorn, a, an
pencil, a, an
useful, a, an
union, a, an
young, a, an
ox, an, a
eight, an, a`,

        `arrow, an, a
ugly, an, a
nice, a, an
oval, an, a
axe, an, a
pair, a, an
empty, an, a
ant, an, a
kite, a, an
european, a, an
engine, an, a`
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

        `an, inch, cm
a, kite, eagle
a, lemon, orange
a, mango, apple
an, oven, stove
a, nice, old
a, one, eight
an, oval, circle
a, pair, eye
a, pencil, eraser`,

        `an, umbrella, union
a, unicorn, ugly
a, union, hour
a, singer, artist
a, teacher, artist
an, ugly, duck
a, house, hour 
an, empty, full
an, Indian, French
an, honest, smart`,

        `a, useful, eager
a, young, old
a, wonderful, underground
an, x-ray, xerox
a, year, ear
a, zoo, animal
an, hour, house
an, eraser, pencil
an, engine, motor
an, eye, head`
      ]
    },
    {
      type: 'selectWord',
      label: 'Identify - Article',
      id: '200',
      commonData: {
        title: 'Select the article in the sentence.'
      },
      data: [
        `There is *a* snake. 
Mahi wants *an* iPad.
Tia has *a* cat.
I can see *a* blue car.
This is *an* easy question.
Piya is eating *an* apple.
Somnath is reading *a* book.
Karthik is sleeping on *the* sofa.
Mihir has *an* old bike.
My sister wants to be *an* astronaut.`,

        `I had *an* egg for breakfast.
My son wants to be *an* architect.
My cousin is *a* pilot. 
There is *an* orange in the fridge.
Did you read *the* book I gave you?
Swati is *a* nice girl.
Manish was *the* first to arrive in class.
I have *a* little white kitten.
There is *a* beehive on neem tree.
Aladdin had *a* magic lamp.`,

        `That's *an* easy question.
She is *a* pretty girl. 
Neil Armstrong was *an* American astronaut.
This is exactly *the* shirt I was looking for.
Mr.Iyer is *an* honorary member of our council.
My grandfather was *the* village chief.
*The* fruit market will be closed on Tuesday.
He gave me *a* call in the evening.
Reading is *a* good habit.
Mahesh bought *a* new watch.`
      ]
    },
    {
      id: 'fillup',
      label: 'Article - Fill up',
      type: 'fillupOptions',
      lockAfter: 2,
      commonData: {
        title: 'Click on the blanks and pick the correct Article.',
        options: 'a, an, the'
      },
      data: [
        `Picasso was *an* artist.
He is *an* honest man.
I study at *a* small university in London.
We used to live in *the* city centre.
Are you *a* teacher?
It takes me *an* hour to get to work.
My cousin is *a* surgeon.
It looks like it's going to rain. Do you have *an* umbrella?
I have *a* one year old daughter.
Singer Justin comes from *an* ordinary family.`,

        `These days Angel enjoys *the* life of *a* Hollywood film star.
My brother lives in *an* apartment in *the* city centre.
School children in *the* UK have to wear *a* uniform.
Is there *a* petrol station near here?
It is very near here. Go straight on and it is on *the* left.
Is France *a* European country?
I've got *a* spare ticket for tonight's program. Do you want to come?
Simon phoned *the* police.
Do you want to go to *the* cinema tonight?
I am reading *a* really good book.`,

        `I am *a* school student.
He is *the* best student in the class.
*the* camel is the ship of the desert.
This book has won *the* Noble Prize.
Please inform me about *the* next exam.
Gold is *a* precious metal.
She returned after *an* hour.
Please tell me *the* directions to the beach.
There is *an* instituiton for *the* blind in this city.`,

        `I want *an* apple from that basket.
The church on *the* corner is open.
Are you coming to *the* party next Saturday?
 I bought *a* new TV set yesterday
I think *the* man over there is very ill.
I watched *the* video you had sent me.
She was wearing *an* ugly dress when she met him.
She is *a* nice girl.
Do you want to go to *the* restaurant where we first met?
He is *an* engineer.`,

        `John wanted to read *a* comic book.
The class went on *a* field trip.
I met *a* boy in the store.
Lisa put *an* orange on her yogurt.
My mom likes making *the* cake from scratch.
The dog caught *a* stick.
I saw *an* owl at the garden.
I quickly ate *the* cookies.
Egg has *an* oval shape.
He carried *an* axe.`
        /*
        `My mom poured lemonade from *a* pitcher.
That cat is stuck in *a* tree.
An elephant has *a* long trunk.
The truck was driving down *a* dirt road.
There is a chair at *the* table.
Mary ate *an* egg for breakfast.
Tom runs as fast as *a* cheetah.
There is *an* inky spot on my pants.
I love to read *a* book.`,

        `Raj wants *a* new bag.
John tasted *the* cake made by his mother.
 *a* new dance teacher was appointed.
All *the* children need to obey their parents.
Uncle turned on *the* television.
I will buy *a* pen today.
She read *an* interesting story to us.
There was *a* huge crowd in the market.
Julie spoke for *an* hour about her school project.
*a* European expert was invited to our school annual day celebration.`,

        `We have *a* beautiful dressing room.
*the* garden is full of lillies.
Is hockey *a* popular sport in your school? 
I need *a* glass of water.
She needs *an* envelope.
They’re at *the* park near their house.
My brother is in *the* library.
What is *the* baby’s name?`,

        `John uses *the* Internet *a* lot.
What is *the* capital of your country?
He called me *an* hour ago.
Tamil nadu lies in *the* south of India.
She is on *a* diet.
Carol’s father works as *an* electrician.
We need *a* place to live.
I saw *an* old man working on *a* farm.`,

        `Jake took out *a* bottle of juice.
It started raining heavily and she lended us *an* umbrella. I returned *the* umbrella the next day.
I have *a* great idea.
He is *the* nice man whom i told you about. 
We had *a* delicious meal.
She wore *a* pretty pink dress.
I saw tigers in *a* zoo.
He is *a* pilot.
*An* apple *a* day builds immunity.
*The* boys have come to play.`,

        `Italy is *a* European country.
He gave *a* one rupee coin to her.
He says he always speaks *the* truth. But I don't believe him.
*The* Sahara is in *the* northern part of Africa.
Ant is *an* insect.
New York is *a* large city.
Blue whale is *the* largest animal.
I saw *a* one eyed person near *the* market.
He is *an* honest teacher. He don't give extra marks for his son.`*/
      ]
    }
  ]
};
