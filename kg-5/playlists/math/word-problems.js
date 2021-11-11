export default {
  label: 'Word Problems',
  id: 'word-problems',
  list: [
    {
      label: 'Type of Problem',
      type: 'classifySentence',
      id: 'classify',
      lockAfter: 2,
      commonData: {
        title:
          'Classify the below problem as addition, subtraction, multiplication, division',
        types: ['+', '−', '×', '÷'],
        optionFontSize: '3rem'
      },
      data: [
        [
          `A school had 450 boys and 524 girls. Find the number of students in this school.
Dora got ₹ 325 from her father and ₹ 222 from her mother. How much does she have in total?
Gary played a car game and scored 453 points in first round and 523 points in second round. How many points did he have after two rounds?`,
          `A shopkeeper bought 240 eggs and sold 148 eggs. How many eggs were left unsold?
An animal care society tested 365 pet animals. 128 were found to have diseases. Find the number of healthy pet animals remaining.
In sports day function, 674 students participated. Out of them 345 were boys. Find the number of girls who participated.`,
          `There are 127 pencils in a box. How many pencils will be there in total in 9 boxes?
A basket of eggs contains 12 eggs. How many eggs will be there in 17 baskets?`,

          `Nila has 36 potatoes. She puts 6 potatoes in a basket. How many baskets will she need to put all the potatoes?
Jonah has  275 coins. One pencil cost 5 coins. How many pencils can Jonah buy?`
        ],
        [
          `Subbu got a new camera. She took 131 pictures of her friends. She took 68 pictures of her family. How many pictures did she take in all?
Jack spent 172 minutes in reading last week. He read for 111 minutes this week. How many minutes did he read in all?
Simbu collects stamps. He has 354 stamps in a box. He has 235 more stamps in a book. How many stamps does he have in all?`,
          `Rita has a book that has 750 pages. She read 567 pages. How many pages are left unread?
In a cricket match, Australia made 356 runs. India has made 268 runs. How many more runs does India need to win?
Selvi had ₹ 978 in her purse. She bought a book for ₹ 357. How much money is left in her purse?`,
          `The cost of one bat is ₹ 245. What is the total cost of 7 bats?
There are 25 fruits on a tree. How many fruits will be there on 16 trees?`,
          `There are 117 students going for a picnic in cars. 9 students can go in one car. How many cars will be required for all students?
Gagan has to sell 672 dolls. He sells 7 dolls in one day. How many days will he take to sell all the dolls?`
        ],
        [
          `The car dealer has 125 cars in the lot. The owner just ordered 142 new cars. When the new cars come, what will be the total number of cars in the lot?
        Kasim has 23 blue marbles and 17 red marbles in a box. How many marbles does he have all together?`,
          `A restaurant made 478 sandwiches. 367 sandwiches were served. How many sandwiches remain?
        There are 350 apple trees and 670 banana trees in Kumar's garden. How many less apple trees are there than the banana trees?`,
          `A box of chocolates has 46 chocolates. How many chocolates will be there in 16 boxes?
        Every classroom in a school has 35 students. How many students are there in 23 classrooms?
        The price of a plate is ₹ 114. What will be the total price of 8 plates?`,
          `A teacher has 342 notebooks. She has to make bundles of 3 notebooks. How many bundles can she make?
        One packet of pencils contains 8 pencils. If there are a total of 512 pencils, how many packets of pencils can we make?
        Richa has 84 erasers to give. If she gives 2 erasers to each of her class friends, how many class friends will get erasers?`
        ],
        [
          `Janis sings 12 songs on Monday and 20 songs on Tuesday. How many songs did she sing in all?
Pooja has 56 black balls and 77 blue balls. How many balls does she have in all?`,
          `Kayal had ₹ 789. She spent ₹ 399 on a bag. How much money is left with her?
Lalaji has to write 76 pages in a notebook. He writes 54 pages. How many more pages does he have to write?`,
          `One bus ticket from Pune to Mumbai costs ₹ 455. What will be the cost of 5 tickets from Pune to Mumbai?
A teacher gives 12 pencils to each student in a classroom. How many pencils will she give in total to 18 students?
Every girl in a house has 18 clothes. What is the total number of clothes 13 girls will have?`,
          `A teacher has 96 notebooks to give to 8 students. How many notebooks will each student get?
A mother gives ₹ 465 equally to her 5 sons. How much money does each son get?
On his birthday, Jagga buys 600 toffees for school. He wants to put them equally in 4 packets. How many toffees should he put in one packet?`
        ]
      ]
    },
    {
      type: 'numberInput',
      id: 'word-prob',
      label: 'Answer the Word Problem.',
      lockAfter: 2,
      commonData: {
        title: 'Answer the word problem.',
        type: 'word-problem'
      },
      data: [
        `A school had 450 boys and 500 girls. Find the number of students in this school. | 950
Dora got ₹ 333 from her father and ₹ 222 from her mother. How much does she have in total? | ₹ ?0 | 555
Gary played a car game and scored 400 points in first round and 600 points in second round. How many points did he have after two rounds? | 1000
A shopkeeper bought 250 eggs and sold 150 eggs. How many eggs were left unsold? | 100
An animal care society tested 365 pet animals. 165 were found to have diseases. Find the number of healthy pet animals remaining. | 200`,

        `In sports day function, 645 students participated. Out of them 345 were boys. Find the number of girls who participated. | 300
There are 200 pencils in a box. How many pencils will be there in total in 9 boxes? | 1800
A basket of eggs contains 12 eggs. How many eggs will be there in 8 baskets? | 96
Nila has 42 potatoes. She puts 6 potatoes in a basket. How many baskets will she need to put all the potatoes? | 7
Jonah has  300 coins. One pencil cost 10 coins. How many pencils can Jonah buy? | 30`,

        `Subbu got a new camera. She took 130 pictures of her friends. She took 70 pictures of her family. How many pictures did she take in all? | 200
Jack spent 180 minutes in reading last week. He read for 120 minutes this week. How many minutes did he read in all? | 300
Simbu collects stamps. He has 350 stamps in a box. He has 150 more stamps in a book. How many stamps does he have in all? | 500
Rita has a book that has 750 pages. She read 500 pages. How many pages are left unread? | 250
In a cricket match, Australia made 356 runs. India has made 256 runs. How many more runs does India need to win? | 101`,

        `Selvi had ₹ 1000 in her purse. She bought a book for ₹ 300. How much money is left in her purse? | ₹ ?0 | 700
The cost of one bat is ₹ 500. What is the total cost of 4 bats? | ₹ ?0 | 2000
There are 25 fruits on a tree. How many fruits will be there on 8 trees? | 200
There are 45 students going for a picnic in cars. 5 students can go in one car. How many cars will be required for all students? | 9
Gagan has to sell 500 dolls. He sells 10 dolls in one day. How many days will he take to sell all the dolls? | 50`,

        `The car dealer has 125 cars in the lot. The owner just ordered 100 new cars. When the new cars come, what will be the total number of cars in the lot? | 225
Kasim has 25 blue marbles and 15 red marbles in a box. How many marbles does he have all together? | 40
A restaurant made 400 sandwiches. 360 sandwiches were served. How many sandwiches remain? | 40
There are 350 apple trees and 600 banana trees in Kumar's garden. How many less apple trees are there than the banana trees? | 250
A box of chocolates has 40 chocolates. How many chocolates will be there in 5 boxes? | 200`,

        `Every classroom in a school has 35 students. How many students are there in 4 classrooms? | 140
The price of a plate is ₹ 50. What will be the total price of 8 plates? | ₹ ?0 | 400
A teacher has 300 notebooks. She has to make bundles of 15 notebooks. How many bundles can she make? | 20
One packet of pencils contains 10 pencils. If there are a total of 500 pencils, how many packets of pencils can we make? | 50
Richa has 80 erasers to give. If she gives 2 erasers to each of her class friends, how many class friends will get erasers? | 40`,

        `Janis sings 30 songs on Monday and 20 songs on Tuesday. How many songs did she sing in all? | 50
Pooja has 50 black balls and 75 blue balls. How many balls does she have in all? | 125
Kayal had ₹ 700. She spent ₹ 400 on a bag. How much money is left with her? | ₹ ?0 | 300
Lalaji has to write 75 pages in a notebook. He writes 55 pages. How many more pages does he have to write? | 20
One bus ticket from Pune to Mumbai costs ₹ 500. What will be the cost of 5 tickets from Pune to Mumbai? | ₹ ?0 | 2500`,

        `A teacher gives 10 pencils to each student in a classroom. How many pencils will she give in total to 18 students? | 180
Every girl in a house has 15 clothes. What is the total number of clothes 5 girls will have? | 75
A teacher has 96 notebooks to give to 8 students. How many notebooks will each student get? | 12
A mother gives ₹ 250 equally to her 5 sons. How much money does each son get? | ₹ ?0 | 50
On his birthday, Jaggu buys 600 toffees for school. He wants to put them equally in 4 packets. How many toffees should he put in one packet? | 150`
      ]
    },
    {
      type: 'numberInput',
      id: 'word-prob-2',
      label: 'Word Problem with steps',
      lockAfter: 1,
      commonData: {
        title: 'Answer the word problem.',
        type: 'word-problem'
      },
      data: [
        {
          list: [
            `The cost of 3 pens is ₹ 18. What is the cost of 5 pens?
solution:
The cost of 1 pen = ₹ ?0
The cost of 5 pens = ₹ ?1
6, 30`,

            `Sam had ₹ 100. He bought an ice-cream for ₹ 40 and candies for ₹ 20. How much does he have as balance?
solution:
Total spending = ₹ ?0
Balance in hand = ₹ ?1
60, 40`,

            `Sam's car can cover 150 km in 3 hr. How much time will it take to cover 500 km?
solution:
Distance covered in 1 hr = ?0 km
Time taken for 500 km = ?1 hr
50, 10`,

            `48 balls can be packed in 6 boxes. How many balls can be packed in 9 boxes?
solution:
No. of balls in 1 box = ?0
No. of balls in 9 boxes = ?1
8, 72`,

            `The cost of 5 notebooks is ₹ 150. What is the cost of 12 notebooks?
solution:
Cost of 1 notebook = ₹ ?0
Cost of 12 notebooks = ₹ ?1
30, 360`
          ]
        },

        {
          list: [
            `John had ₹ 1000. He bought a toy for ₹ 200, a book for ₹ 100 and a waterbottle for ₹ 50. How much does he have as balance?
solution:
Total spending = ₹ ?0
Balance in hand = ₹ ?1
350, 650`,

            `Geeta went for shopping by booking a taxi. She bought clothes for ₹ 1000 and snacks for ₹ 200 and returned home. She spent ₹ 1500 in total. How much she spent for taxi?
solution:
Total spending = ₹ ?0
Total spending minus taxi fare = ₹ ?1
Taxi fare = ₹ ?2
1500, 1200, 300`,

            `Sam's car can cover 100 km in 2 hr. How much time will it take to cover 250 km?
solution:
Distance covered in 1 hr = ?0 km
Time taken for 250 km = ?1 hr
50, 5`,

            `100 apples can be packed in 5 boxes. How many apples can be packed in 8 boxes?
solution:
No. of apples in 1 box = ?0
No. of apples in 8 boxes = ?1
20, 160`,

            `The cost of 5 apples is ₹ 150. What is the cost of 20 apples?
solution:
Cost of 1 apple = ₹ ?0
Cost of 20 apples = ₹ ?1
30, 600`
          ]
        },

        {
          list: [
            `Simon went to buy eggs. He gave ₹ 100 and got ₹ 20 as balance and bought 10 eggs. What is the cost of an egg?
solution:
Cost of 10 eggs = ₹ ?0
Cost of 1 egg = ₹ ?1
80, 8`,

            `You can buy 20 candies for ₹ 60. How many candies can you buy for ₹ 90.
solution:
Cost of 1 candy = ₹ ?0
No. of candies for  ₹ 90 = ?1
3, 30`,

            `Selvi's car needs 5 litre of petrol for 100 km. How many litre of petrol does she need to cover 240 km?
solution:
Distance covered by 1 litre = ?0 km
Petrol needed for 240 km = ?1 litre
20, 12`,

            `75 oranges can be packed in 5 boxes. How many oranges can be packed in 12 boxes?
solution:
No. of oranges in 1 box = ?0
No. of oranges in 12 boxes = ?1
15, 180`,

            `The cost of 25 candies is ₹ 50. What is the cost of 15 candies?
solution:
Cost of 1 candy = ₹ ?0
Cost of 15 candies = ₹ ?1
2, 30`
          ]
        }
      ]
    },
    {
      // word problem for class 5
      type: 'numberInput',
      id: 'word-prob-factors',
      label: 'Word Problem Factors',
      lockAfter: 10,
      commonData: {
        title: 'Answer the word problem.',
        type: 'word-problem'
      },
      data: [
        {
          list: [
            `Ramu has a 21 ft long cloth. He wants to cut the cloth into equal pieces of 3 ft length. How much cloth will be left?
            solution:
            Number of 3 ft cloth = ?0 ft
            Cloth left = ?1 ft
            7, 0`,

            `John has 2 clothes 12 ft and 15 ft long. What could be the length ruler scale in ft by which he can measure both the cloth? 
            solution:
            The smallest length of the ruler = ?0 ft
            The biggest length of the ruler = ?1 ft
            1, 3`,

            `There are 24 bangles. We need to put the bangles in 8 boxes. Can we put them equally without any bangles being left?
            solution:
            Number Bangles in each box = ?0
            Bangles left = ?1
            3, 0`,

            `Dave has 20 cookies. He wants to keep the cookies in a jar. He has 2 different types of Jars which can contain 4 cookies or 3 cookies.
            If he wants to keep an equal amount of cookies in each Jar, how many Jars will he require? Note - Dave can only use one type of Jar.
            solution:
            Number of Jars required = ?0
            Each Jar have = ?1 cookies
            5, 4`,

            `Teacher has 20 Pencils and 10 erasers. These can be divided equally to maximum how many students?
            solution:
            Each student will get = ?0 Pencils
            Each student will get = ?1 Erasers
            Number of Students = ?2
            2, 1, 10`
          ]
        },
        `A class had 90 pencils. If these pencils are divided among 15 students equally, how many pencils each student will get? | 6
        Kittu wants to buy chocolates. She has ₹ 18. If each chocolate cost ₹ 4, how many chocolates will she be able to buy? | 4
        I can put 30 balls equally in 10 buckets, each bucket will have 3 balls. If I have only 5 buckets, how many balls will be present in each bucket? | 6
        Neelu wants to give chocolates to his 4 friends. If he wants to give equally to his friends, how many should he buy, 20 or 30? | 20
        What is the least number of saplings which can be arranged in rows of 4, 5 and 6? | 60`,

        `Find the length of the rope in cm which can be cut into pieces of 10 cm, 15 cm, 20 cm? | 30
        A shopkeeper sells candles in packs of 8 and candle stands in packs of 6. What is the least number of candles and candle stands Chintu should buy so that each candle will have a candle stand? | 24
        To print a paper a printer takes 3 seconds. How long does the printer need to print 180 pages? Find the time in minutes. | 9
        Babar plays football every 3 days, runs every 5 days and cycles every 6 days. If he has done all together today, then after how many days will he do all the 3 activities together again? | 30
        John saves ₹ 6 each day. If he wants to get his savings converted to ₹ 100 denomination. How many days does he need to wait to convert the whole savings to ₹ 100 denomination? | 50`,

        `There are 18 bangles on the rod. Tina is trying to group them. She can put them in groups of 2,3,6,9 and 18 — without any bangle being left. If she puts them in groups of 3, how many groups of bangles will there be? | 6
Jai needs to put tiles on the wall. Each tile is 20 cm x 20 cm in dimension. The wall is  600 cm X 400 cm dimension. How many tiles will be required to complete the tiling of the wall. | 600
Dave has 42 blue pens & 70 black pens. He wants to distribute the pens among his friends. What could be the maximum number of friends among whom Dave can distribute the pens, so each one of them gets an equal number of blue pens and black pens. | 14
With a 200 gm paneer packet we can get 20 equal sizes of small paneer cubes. If there are 40 people to eat and each one has 5 small paneer cubes, how many packets of paneer are required to buy? | 10`


      ]
    },
    {
      // word problem for class 5
      type: 'numberInput',
      id: 'word-prob-fraction',
      label: 'Word Problem Fraction',
      lockAfter: 10,
      commonData: {
        title: 'Answer the word problem in simplified fraction.',
        type: 'word-problem'
      },
      data: [

        `A pizza is divided into 6 pieces. You are 1 piece. What is the fraction of pizza you ate? | ?0/?1 | 1, 6
        You had 8 balloons. You gifted your friends 5 balloons. What was the fraction of balloons you have gifted your friends? | ?0/?1 | 5, 8
        You had 10 marbles with you. You took 2 marbles to play. What is the fraction of marble you took to play? ?0/?1 | 1, 5
        Your school is 12 kms away from your home. You walk for 2 kms and the rest of the distance you take a bus. What is the fraction of the distance you walk? ?0/?1 | 1, 6
        It takes 1 hour to complete 10 tasks. You have completed 6 tasks. What is the fraction of tasks you have completed? ?0/?1 | 3, 5`,

        `Fida baked 12 cup cakes. He ate up to 3 cup cakes. What fraction of lemon tarts did Fida eat? | ?0/?1 | 1, 4
       Dan has a total of 25 marbles. He gives 10 marbles to his sister, Jane. What fraction of marbles did Jane receive? | ?0/?1 | 2, 5
       Rita travels a distance of 9 miles to reach home. The bus ride covers 5 miles. She then walks 4 miles to reach her home. What fraction of miles does Gina travel by bus? | ?0/?1 | 5, 9
       Amit owns a total of 10 pairs of socks of which 5 pairs are black and the rest are blue. What fraction of pairs of socks are blue? | ?0/?1 | 1, 2
       India won 4 matches out of 6 matches they played. What fraction of matches India won? | ?0/?1 | 2, 3`,

       `The Indian team has 11 players. There are a total 6 teams in the tournament with each team having 11 players. What is the fraction of Indian players in the tournament? | ?0/?1 | 1, 6
       Ram has 2 blue pens, 4 black pens and 6 red pens. What fraction of black pens can be found with Ram? | ?0/?1 | 1, 3
       There are a total of 52 building blocks in a bag. Alex uses 36 blocks to build a house. What fraction of building blocks remain unused? | ?0/?1 | 4, 13
       There were 50 chips in a chips packet. You ate 35 chips. What was the fraction of chips left with you? | ?0/?1 | 3, 10
       You had 14 toys with you. 4 toys broke while playing with your friends. What is the fraction of toys broken while playing? | ?0/?1 | 2, 7 `,

      ]
    },
    {
      // word problem for class 5
      type: 'numberInput',
      id: 'word-prob-area',
      label: 'Word Problem Area and boundary',
      lockAfter: 10,
      commonData: {
        title: 'Answer the word problem',
        type: 'word-problem'
      },
      data: [

        `A rectangle has an area of 48 square cm. If the length of the rectangle is 8 cm, then what is the breadth? | ?0 cm | 6
        A rectangle has an area of 12 square cm. If the length of the rectangle is 6 cm, then what is the breadth? | ?0 cm | 2
        A square has an area of 16 square cm. What is the length of one side? | ?0 cm | 4
        A rectangle has an area of 15 square cm. If the breadth of the rectangle is 3 cm, then what is the length? | ?0 cm | 5
        A square has an area of 9 square cm. What is the length of one side? | ?0 cm | 3`,

        `What is the perimeter of a rectangle with 4 cm length and 10 cm breadth? | ?0 cm | 28 
        What is the perimeter of a rectangle with 15 cm length and 25 cm breadth? | ?0 cm | 80
        What is the perimeter of a square with 8 cm length? | ?0 cm | 32
        What is the perimeter of a rectangle with 5 cm length and 30 cm breadth? | ?0 cm | 50
        What is the perimeter of a square with 2 cm length? | ?0 cm | 8 `,

        `A rectangle has an area of 48 square cm. If the length of the rectangle is 8 cm, then what is the perimeter of the rectangle? | ?0 cm | 28
        A rectangle has an area of 60 square cm. If the length of the rectangle is 10 cm, then what is the perimeter of the rectangle? | ?0 cm | 32
        A square has an area of 16 square cm. What is the perimeter of the square? | ?0 cm | 16
        A square has an area of 64 square cm. What is the perimeter of the square? | ?0 cm | 32
        The perimeter of a square is 60 cm. If the length of the rectangle is 10 cm, then what is the breadth of the rectangle? | ?0 cm | 20
        The perimeter of a square is 60 cm. If the length of the rectangle is 10 cm, then what is the area of the rectangle? | ?0 square cm | 200`,

        `A triangle has sides of length 3 cm, 4 cm, 5 cm. What is the perimeter of the triangle? ?0 cm | 12
        A triangle has sides of length 10 cm, 12 cm, 15 cm. What is the perimeter of the triangle? ?0 cm | 37
        An equilateral (a triangle with equal sides) triangle has sides of length 6 cm. What is the perimeter of the triangle? ?0 cm | 18
        An equilateral triangle (a triangle with equal sides) has sides of length 10 cm. What is the perimeter of the triangle? ?0 cm | 30
        A regular Pentagon (A pentagon with equal sides) has sides of length 6 cm. What is the perimeter of the Pentagon? ?0 cm | 30`,

        `Perimeter of a rectangle is 20 cm. The area of the rectangle is 21 square cm. If one of the sides is 7 cm, what is the length of the other side? | ?0 cm | 3 
        Perimeter of a rectangle is 36 cm. The area of the rectangle is 80 square cm. What is the length of the bigger side? | ?0 cm | 10
        Perimeter of a rectangle is 42 cm. The area of the rectangle is 20 square cm. What is the length of the smaller side? | ?0 cm | 1
        Perimeter of a square is 36 cm. What is the area of the square? | ?0 square cm | 81
        Perimeter of a square is 80 cm. What is the area of the square? | ?0 square cm | 400`,

      ]
    },
    {
      // word problem for class 5
      type: 'numberInput',
      id: 'word-prob-misc-ka',
      label: 'Word Problem miscellaneous',
      lockAfter: 10,
      commonData: {
        title: 'Answer the word problem',
        type: 'word-problem'
      },
      data: [
        // multiplication class 5 - ref Karnataka state book , chaper 1/2 unit-2
        `Mr. Sidhu is a fruit selling agent who exports oranges. One box contains 144 oranges. If he exports 250 boxes of oranges, find the total number of oranges exported. | 36000
        In a protected forest area, 160 trees are planted in each row and 128 trees in each column. Find the total number of trees planted in the forest area. | 20480
        A dealer buys 37 bicycles for his show room. Cost of each bicycle is ₹ 2,050. Find the total amount paid by the dealer. | 75850
        A farmer grew 43 quintals of wheat. He sold them for ₹ 1,935 per quintal. How much did the farmer get by selling wheat? | 83205`,

        // division class 5 - ref Karnataka state book , chaper 1/2 unit-2
        `A bike can cover 250 km with 5 litres of petrol. Find how many kilometres it covers with 1 litre of petrol. | 50
        Mr. Shankar purchased 13 toys of the same price for ₹ 793 from a toy shop. Find the cost of each toy. | 61
        The annual income of a person is ₹ 90,912. Find his monthly income. | 7576
        A car manufacturing company manufactures 14,820 cars in 12 months. Find the number of cars manufactured in one month. | 1235
        A tailor has 18 metres of cloth. He can stitch 9 shirts from this cloth. Find the length of cloth required to stitch one shirt. | ?0 metres | 2`,

        // mix of multiplication / division class 5 - ref Karnataka state book , chaper 1/2 unit-2
        `An orange garden has 72 orange plants. A farmer plucks 15 oranges from each plant and packs 12 oranges in each box. Calculate the number of boxes required to pack all oranges. | 90
        15 school children hire a cab for a day's excursion at ₹ 14 per km. If they travel a distance of 225 km, find the amount to be shared by each one of them. | 210
        Ananya has a cow which yields 8 litres of milk in a day. The selling price of one litre of milk is ₹ 18. She wants to divide the amount earned in one month (30 days) among her 4 sons. What amount does each one get? | 1080`,
      ]
    },
    {
      // word problem for class 5
      type: 'numberInput',
      id: 'word-prob-length',
      label: 'Word Problem Length',
      lockAfter: 10,
      commonData: {
        title: 'Answer the word problem',
        type: 'word-problem'
      },
      data: [
        // Length class 5 - ref Karnataka state book , chaper 8 unit-1
        `How many millimetres make one centimetre? | 10
        How many centimetres make one metre? | 100
        How many metres make one kilometre? | 1000
        How many metres make half a kilometre? | 500
        How many centimetres make 1⁄4 of a metre? | 25`,

        `Convert 573 cm into metres. | 5.73
        Convert 1575 m into kilometres. | 1.575
        Convert 2525 cm into millimetres. | 25250
        Your school is at a distance of 3,556 m from your house. Express this distance in km. | 3.556
        The length of a ground is 15 metres. Express the length in centimetres. | 1500`,

        `The length of a wire is 3 m. What is the total length of 5 such wires? | ?0 m | 15
        Out of a roll of cloth measuring 50 m, 27 m of cloth is sold. Find the length of remaining cloth. | ?0 m | 23
        32 m of coloured ribbon is distributed among 8 students equally. What is the length of ribbon that each one gets? | ?0 m | 4
        How many centimetres are there in 9 metres ? | ?0 cm | 900
        The length of a wooden log is 19 m. Out of this 4 pieces of 4 m each are cut off. Find the length of the remaining piece. | ?0 m | 3`,

        `The length of a line segment is 12 cm. Into how many line segments of 2 cm each, can it be divided? | 6
        Raju bought 3 m 60 cm length of pant cloth. He gave 1 m 20 cm of cloth to his younger brother. What is the length of the remaining cloth? | ?0 m ?1 cm| 2,40
        The length of cloth purchased by Joseph is as follows : 2m 30cm for shirt, 1m 10 cm for pants and 4m 80cm for coat. What is the total length of cloth purchased by Joseph? | ?0 m ?1 cm| 8,20 
        2m 80 cm of cloth is required to stitch a frock. What is the length of cloth required to stitch 12 such frocks? | ?0 m ?1 cm| 33,60
        Length of cloth required to stitch 6 pairs of Kurta and Pyjama is 33 m. What is the length of cloth required to stitch 1 pair of Kurta & Pyjama? | ?0 m ?1 cm| 5,50
        The total length of 8 bundles of wire is 210 m. Find the length of each bundle of wire. | ?0 m ?1 cm| 26,25
        The height of a table is 1m 25 cm and the height of a stool is 50 cm less than the height of the table. Find the height of the stool. | ?0 m ?1 cm| 0,75`,

        
      ]
    },
  ]
};
