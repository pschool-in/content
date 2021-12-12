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
        `mango, a, an
        igloo, an, a
        cat, a, an
        egg, an, a
        ball, a, an
        elephant, an, a
        cake, a, an
        zoo, a, an
        singer, a, an
        onion, an, a`,

        `inch, an, a
        plate, a, an
        tree, a, an
        eagle, an, a
        bench, a, an
        bat, a, an
        tiger, a, an
        ice-cream, an, a
        lemon, a, an
        house, a, an`,

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

        `fish, a, an
        doctor, a, an
        answer, an, a
        ball, a, an
        egg, an, a
        igloo, an, a
        tiger, a, an
        book, a, an
        octopus, an, a
        girl, a, an`,

        `flower, a, an
        inkpot, an, a
        parrot, a, an
        box, a, an
        elbow, an, a
        window, a, an
        football, a, an
        panda, a, an
        mouse, a, an
        ice-cream,an, a`
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
        an, eye, head`,

        `an, umbrella, cat
        an, ice-cream, pot
        an, engineer, pen
        a, toy, eagle
        an, accident, ring
        a, lion, elephant
        an, hour, clock
        an, honest man, bad man
        a, car, owl
        a, cherry, apple`
      ]
    },
    {
      type: 'selectWord',
      label: 'Identify the Article',
      id: 'select-word',
      commonData: {
        title: 'Select the article in the sentence.'
      },
      data: [
        `I had *an* egg for breakfast.
        My son wants to be *an* architect.
        Cheetah is *the* fastest land animal.
        My dad is *a* professor at the University.
        My son has *a* big world map in his room.
        There is *an* orange in the fridge.
        Did you read *the* book I gave you?
        Manish was *the* first to arrive in class.
        I have *a* little white kitten.
        Aladdin had *a* magic lamp.`,

        {
          title:
            'Select all the articles in the below sentence. There can be zero or more articles.',
          multiSelect: true,
          text: `*An* elephant is *a* mammal.
            Eating *an* apple every day can keep *the* doctor away.
            I bought *a* dozen bananas from *the* market.
            *The* music is playing on *the* TV.
            There is *a* dog in *the* yard.
            I saw *an* owl on *the* branch.
            The teacher read *a* story in *the* class.
            There is *a* beehive on *the* neem tree.
            He gave me *a* call in *the* evening.`
        }
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
        `Meera is *an* intelligent student.
          Dad wants me to wear *a* cap.
          Reema has *a* jewelry box.
          We put up *a* Christmas tree for the holidays.
          Grandma read *a* story to all my friends.
          I saw *an* ostrich in the zoo.
          There is *a* hospital near my home.
          I have *a* new pencil.
          There is *a* big window in my room.
          I have *a* box of chocolates in my bag.`,

        `I want to eat *an* apple.
          I bought *an* umbrella for my brother.
          Aladdin had *a* magic lantern.
          I saw *a* big lion at the zoo.
          She has written *a* story.
          I saw *a* Peacock in KBR park today.
          I have *an* inkpot on my study table.
          It is *an* ancient fort in Hyderabad.
          I am *a* pilot.
          Rajeev is reading *a* magazine.`,

        `Rakesh's father is *a* lawyer.
          This is *a* ball.
          I saw *an* old car.
          We have *a* red car.
          Saanvi is *an* honest girl.
          Do you like *an* apple?
          He can ride *a* bicycle.
          Sudheer is *a* doctor.
          My sister is *a* painter.
          My son is *a* good boy.`,

        `That's *an* easy question.
          She is *a* pretty girl. 
          Neil Armstrong was *an* American astronaut.
          Mahesh bought *a* new watch. 
          My sister wants to be *an* astronaut.`
      ]
    },
    {
      id: 'fillup-2',
      label: 'Article - Fill up',
      type: 'fillup',
      lockAfter: 2,
      commonData: {
        title: 'Click on the blanks and pick the correct Article.',
        options: 'a, an, the'
      },
      data: [
        `Picasso was *an* artist.
        He is *an* honest man.
        I study at *a* small university in London.
        We used to live in *the* city center.
        Are you *a* teacher?
        It takes me *an* hour to get to work.
        My cousin is *a* surgeon.
        It looks like it's going to rain. Do you have *an* umbrella?
        I have *a* one-year-old daughter.
        Singer Justin comes from *an* ordinary family.`,

        `These days Angel enjoys *the* life of *a* Hollywood film star.
        My brother lives in *an* apartment in *the* city center.
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
        There is *an* institution for *the* blind in this city.`,

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
        I saw *an* owl in the garden.
        I quickly ate *the* cookies.
        The egg has *an* oval shape.
        He carried *an* axe.`,

        `This is exactly *the* shirt I was looking for.
        Mr.Iyer is *an* honorary member of our council.
        My grandfather was *the* village chief.
        *The(A, An)* fruit market will be closed on Tuesday.`
      ]
    },
    {
      label: 'Drag and Drop',
      type: 'matchByDragDrop',
      id: 'drag-drop',
      commonData: {
        isPractice: false,
        title:
          'Fill in the blanks by dragging the options given at the bottom.',
        styles: {
          fontSize: '1rem',
          dashWidth: 80
        }
      },
      data: [
        `What's *the* capital of your country?
          I always have an *egg* for breakfast.
          I read *an* interesting story.
          I saw *a* rainbow in the sky.
          My friend has a *sore throat* due to a cold.`,

        `My grandmother told me *a* story.
          Can you pass me a *slice* of bread?
          There was *an* elephant in the field.
          Mahesh has an *interest* in painting.
          We saw a tiger in *the* zoo.`,

        `Please give me *a* copy of The Hindu.
          Manish brought a *cup* of coffee and gave it to his grandma.
          *The* earth moves around the sun.
          My friend's dad met with *an* accident yesterday night.
          Rahul saw a *snake* in the garden.`
      ]
    }
  ]
};
