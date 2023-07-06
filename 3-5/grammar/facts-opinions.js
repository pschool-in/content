export default {
  label: 'Facts vs Opinions',
  id: 'facts-opinions',
  list: [
    {
      id: 'reading',
      type: 'passage',
      label: 'Reading',
      data: {
        title: 'Facts vs Opinion',
        text: [
          `A declarative statement can be classified into Facts and Opinions
# Facts
Statements that can be verified are known as Facts. They can be proven true or false. Statements of fact are objective reality. It can be an event or information, based on real occurrences which can be tested.`,
          {
            type: 'hilight',
            text: `The cost of these chocolates is Rs 100.
Tomorrow is a holiday.
A week has seven days.`
          },
          `An opinion is an expression of a person’s feelings that cannot be proven. An opinion is an inconclusive statement, used in subjective matters, which cannot be proved true or false. It is what a person thinks or feels about something or someone. `,
          {
            type: 'hilight',
            text: `These chocolates are expensive.
I think it may rain tomorrow.
Strawberries are better than oranges.`
          }
        ]
      }
    },
    {
      type: 'classifySentence',
      label: 'Fact Vs Opinion',
      id: 'fact-opinion',
      lockAfter: 1,
      commonData: {
        title: 'Classify the below sentences as Facts and Opinions',
        types: ['Fact', 'Opinion']
      },
      data: [
        [
          `The Sun rises in the East.
Mr. Narendra Modi is the Prime Minister of India.
The Ganges is the longest river in India.
There are 60 seconds in a minute.
Christmas is celebrated in December.`,
          `Blue is a better color than red.
Balu is the best student in my class.
No one can hit six like Dhoni.
I think it will rain tomorrow.
I like dogs more than cats.`
        ],
        [
          `We saw a rainbow yesterday.
Our TV is not working.
Arun has done his college in the US.
Dogs are faithful animals.
We went to Delhi last summer.`,
          `I think the teacher doesn't like me.
Arun is the best math teacher in the whole world.
It may rain tomorrow.
He may be fifty years old.
Pizza tastes better than Burger.`
        ],
        [
          `She has won three medals.
It is raining hard.
I am eleven years old.
This is the tallest building in the city.
Earth has only one moon.`,
          `England will win the next world cup.
Our headmaster is the most intelligent man in our school.
I didn't like the food you bought.
The movie I saw yesterday was the most boring one.
Sometimes he behaves like a fool.`
        ],
        [
          `The national currency of India is Rupee.
The sun sets in the west.
Tomatoes are fruits.
Water covers 70% of our Earth.
Kangaroos can't walk backward.`,

          `The doll is pretty in a yellow dress.
It may rain heavily today.
Green apples are tasty.
Priya is the happiest girl in the world.
It’s better to buy a pencil than a pen.`
        ],
        [
          `A group of sheep is called a herd.
Octopus has blue blood.
Peanuts are grown in the roots.
The moon rotates around the Earth.
Fingernails grow faster than the toenails.`,

          `Maths is an easy subject.
Winter is the most beautiful season.
Turtles are the cutest aquatic animals.
The story was interesting at the beginning.
Rainbow is more beautiful than the sunset.`
        ],
        [
          `Penguins can't fly.
Spider has eight legs.
Owls can't move their eyeballs.
Virat Kohli is a cricketer.
The Taj Mahal is located in Agra.`,
          `Pizza is delicious in that shop.
The uniform of that school is not good. 
I think Geetha was not happy with her birthday gift.
Purple is the best color.
Kids like to read storybooks.`
        ],
        [
          `Kangaroo is the national animal of Australia.
Diwali is called the Festival of Lights.
The young one of a deer is called a fawn.
Ganga is the largest river in India.
The telephone was invented by Alexander Graham bell.`,

          `Roses are beautiful flowers.
I think Sheep are not smart animals.
Math is an easier subject than English.
Animals should not be kept in a zoo.
I think your handwriting is not legible.`
        ],
        [
          `The Earth orbits around the Sun.
Water boils at 100 degrees Celsius at sea level.
The capital of France is Paris.
The human body is composed of billions of cells.
The Great Wall of China is visible from space.`,

          `Biriyani is the most delicious food.
The Beatles were the greatest band of all time.
Summer is the best season.
Action movies are more exciting than romantic comedies.
Blue is the prettiest color.`
        ],
        [
          `Oxygen is necessary for human survival.
The Titanic sank on April 15, 1912.
The speed of light in a vacuum is approximately 299,792 kilometers per second.
The chemical formula for water is H2O.
The Earth's atmosphere is composed primarily of nitrogen and oxygen.`,

          `Traveling is a fulfilling and enriching experience.
The internet has revolutionized the way we communicate.
Exercise is essential for maintaining good health.
Books are better than movies because they stimulate the imagination.
The government should prioritize environmental protection.`
        ]
      ]
    },
    {
      type: 'classifySentence',
      label: 'Moods',
      id: 'happy-sad-angry-excited',
      lockAfter: 1,
      commonData: {
        title: 'Classify the below sentences based on the mood of the speaker',
        types: ['Happy', 'Sad', 'Angry', 'Excited']
      },
      data: [
        [
          `I just got a promotion at work!
Today is my birthday, and I feel so loved.`,
          `I lost my beloved pet today. I miss them deeply.
The news of the tragedy broke my heart.`,
          `I can't believe someone stole my bike!
This terrible customer service is making me furious.`,
          `I'm thrilled about the upcoming concert of my favorite band.
I got admission to my dream school! I'm ecstatic!`
        ],
        [
          `I won the lottery! I can't believe it!
I aced my exams! Time to celebrate!`,
          `I failed my driving test. I'm so disappointed.
I had an argument with my best friend, and it's making me sad.`,
          `That person cut me off in the queue. How rude!
I'm angry at myself for making such a foolish mistake.`,
          `I'm so excited to start my new job next week.
The new movie trailer looks amazing! I can't wait to see it.`
        ],
        [
          `The sun is shining, and it's such a beautiful day.
My best friend is coming to visit me this weekend.`,
          `The ending of that movie was really sad.
I'm feeling lonely tonight. I miss my family.`,
          `The unfairness of the situation is making me really angry.
I'm frustrated with the slow progress on this project.`,
          `I won a trip to an exotic island! I'm jumping with joy!
The roller coaster ride was exhilarating! I loved it.`
        ],
        [
          `I received an unexpected gift from a dear friend.
I'm going on vacation to my dream destination.`,
          `The farewell party made me realize how much I'll miss everyone.
I received a rejection letter from the job I really wanted.`,
          `The constant noise from my neighbors is driving me crazy.
I'm fed up with people who don't keep their promises.`,
          `I just got tickets to watch the Bruno Mars concert! I'm bursting with happiness.
I'm excited to meet my friends for a fun night out.`
        ],
        [
          `My favorite team won the championship!
I just finished reading an incredible book.`,
          `The loss of a loved one is a difficult thing to cope with.
Seeing others in pain makes me feel sad.`,
          `The way he treated her was absolutely unacceptable.
I'm outraged by the corruption in our government.`,
          `The anticipation of my vacation is making me so excited.
I'm enthusiastic about the new project I'm working on.`
        ]
      ]
    }
  ]
};
