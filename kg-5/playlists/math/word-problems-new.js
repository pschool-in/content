export default {
  label: 'Word Problems',
  id: 'word-problems-new',
  list: [
    {
      // word problem for class 5
      type: 'numberInput',
      id: 'word-prob-factors',
      label: 'Word Problems on Factors',
      lockAfter: 10,
      commonData: {
        title: 'Answer the word problem.',
        type: 'word-problem'
      },
      data: [
        {
          list: [
            //This set of questions are difficult
            `Ramu has a 21 ft long cloth. He wants to cut the cloth into equal pieces of 3 ft length. How much cloth will be left?
              solution:
              Number of 3 ft cloth = ?0 ft
              Cloth left = ?1 ft
              7, 0`,
            // This question might be too advanced for 5 graders
            /*
              `John has 2 clothes that are 12 ft and 15 ft long. What could be the length ruler scale in ft by which he can measure both the cloth? 
              solution:
              The smallest length of the ruler = ?0 ft
              The biggest length of the ruler = ?1 ft
              1, 3`,
              */
            `There are 24 bangles. We need to put the bangles in 8 boxes. Can we put them equally without any bangles being left?
              solution:
              Number Bangles in each box = ?0
              Bangles left = ?1
              3, 0`,

            `Dave has 20 cookies. He wants to keep the cookies in a jar. He has 2 different types of jars which can contain 4 cookies and 3 cookies. If he wants to keep an equal amount of cookies in each Jar, how many Jars will he require? Note - Dave can only use one type of Jar.
              solution:
              Number of jars required = ?0
              Each jar can contain = ?1 cookies
              5, 4`,

            `Teacher has 20 Pencils and 10 erasers. These can be divided equally to maximum how many students?
              solution:
              Each student will get = ?0 Pencils
              Each student will get = ?1 Erasers
              Number of Students = ?2
              2, 1, 10`
          ]
        },
        //This set of questions are easy
        `A class had 90 pencils. If these pencils are divided among 15 students equally, how many pencils each student will get? | 6
          Kittu wants to buy chocolates. She has ₹ 18. If each chocolate cost ₹ 4, how many chocolates will she be able to buy? | 4
          I can put 30 balls equally in 10 buckets, each bucket will have 3 balls. If I have only 5 buckets, how many balls will be present in each bucket? | 6
          Neelu wants to give chocolates to his 4 friends. If he wants to give equally to his friends, how many should he buy, 20 or 30? | 20
          What is the least number of saplings which can be arranged in rows of 4, 5 and 6? | 60`,
        //This set of questions are easy
        `Find the least length of the rope in cm which can be cut into pieces of 10 cm, 15 cm, 20 cm? | 60
          A shopkeeper sells candles in packs of 8 and candle stands in packs of 6. What is the least number of candles and candle stands Chintu should buy so that each candle will have a candle stand? | 24
          To print a paper a printer takes 3 seconds. How long does the printer need to print 180 pages? Find the time in minutes. | 9
          Babar plays football every 3 days, runs every 5 days and cycles every 6 days. If he has done all together today, then after how many days will he do all the 3 activities together again? | 30
          John saves ₹ 6 each day. If he wants to get his savings converted to exact ₹ 100 denominations. How many days does he need to wait to convert the whole savings to exact ₹ 100 denominations? | 50`,
        //This set of questions are of medium difficulty
        `There are 18 bangles on the rod. Tina is trying to group them. She can put them in groups of 2,3,6,9 and 18 — without any bangle being left. If she puts them in groups of 3, how many groups of bangles will there be? | 6
  Jai needs to put tiles on the wall. Each tile is 20 cm x 20 cm in dimension. The wall is  600 cm X 400 cm dimension. How many tiles will be required to complete the tiling of the wall. | 600
  Dave has 42 blue pens & 70 black pens. He wants to distribute the pens among his friends. What could be the maximum number of friends among whom Dave can distribute the pens, so each one of them gets an equal number of blue pens and black pens. | 14
  With a 200 gm paneer packet we can get 20 equal sizes of small paneer cubes. If there are 40 people to eat and each one has 5 small paneer cubes, how many packets of paneer are required to buy? | 10`
      ]
    },
    {
      // word problem for class 5
      type: 'numberInput',
      id: 'word-prob-misc-ka',
      label: 'Miscellaneous Word Problems ',
      lockAfter: 10,
      commonData: {
        title: 'Answer the word problem',
        type: 'word-problem'
      },
      data: [
        // multiplication class 5 - ref Karnataka state book , chaper 1/2 unit-2

        `Mr. Sidhu is a fruit selling agent who exports oranges. One box contains 144 oranges. If he exports 250 boxes of oranges, find the total number of oranges exported. | 36000
          In a protected forest area, 160 trees were planted in each row and 128 trees in each column. Find the total number of trees planted in the forest area. | 20480
          A dealer buys 37 bicycles for his show room. Cost of each bicycle is ₹ 2,050. Find the total amount paid by the dealer. | 75850
          A farmer grew 43 quintals of wheat. He sold them for ₹ 1,935 per quintal. How much did the farmer get by selling wheat? | 83205`,
        //This set of questions are easy
        // division class 5 - ref Karnataka state book , chaper 1/2 unit-2
        `A bike can cover 250 km with 5 litres of petrol. Find how many kilometres it covers with 1 litre of petrol. | 50
          Mr. Shankar purchased 13 toys of the same price for ₹ 793 from a toy shop. Find the cost of each toy. | 61
          The annual income of a person is ₹ 90,912. Find his monthly income. | 7576
          A car manufacturing company manufactures 14,820 cars in 12 months. Find the number of cars manufactured in one month. | 1235
          A tailor has 18 metres of cloth. He can stitch 9 shirts from this cloth. Find the length of cloth required to stitch one shirt. | ?0 metres | 2`,

        // mix of multiplication / division class 5 - ref Karnataka state book , chaper 1/2 unit-2
        `An orange garden has 72 orange plants. A farmer plucks 15 oranges from each plant and packs 12 oranges in each box. Calculate the number of boxes required to pack all oranges. | 90
          15 school children hire a cab for a day's excursion at ₹ 14 per km. If they travel a distance of 225 km, find the amount to be shared by each one of them. | 210
          Ananya has a cow which yields 8 litres of milk in a day. The selling price of one litre of milk is ₹ 18. She wants to divide the amount earned in one month (30 days) among her 4 sons. What amount does each one get? | 1080`
      ]
    },
    {
      // word problem for class 5
      type: 'numberInput',
      id: 'word-prob-length',
      label: 'Word Problems on Length',
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
          How many centimetres are there in 9 metres? | ?0 cm | 900
          The length of a wooden log is 19 m. Out of this 4 pieces of 4 m each are cut off. Find the length of the remaining piece. | ?0 m | 3`,

        `The length of a line segment is 12 cm. Into how many line segments of 2 cm each, can it be divided? | 6
          Raju bought 3 m 60 cm length of pant cloth. He gave 1 m 20 cm of cloth to his younger brother. What is the length of the remaining cloth? | ?0 m ?1 cm| 2,40
          The length of cloth purchased by Joseph is as follows : 2m 30cm for shirt, 1m 10 cm for pants and 4m 80cm for coat. What is the total length of cloth purchased by Joseph? | ?0 m ?1 cm| 8,20 
          2m 80 cm of cloth is required to stitch a frock. What is the length of cloth required to stitch 12 such frocks? | ?0 m ?1 cm| 33,60
          Length of cloth required to stitch 6 pairs of Kurta and Pyjama is 33 m. What is the length of cloth required to stitch 1 pair of Kurta & Pyjama? | ?0 m ?1 cm| 5,50
          The total length of 8 bundles of wire is 210 m. Find the length of each bundle of wire. | ?0 m ?1 cm| 26,25
          The height of a table is 1m 25 cm and the height of a stool is 50 cm less than the height of the table. Find the height of the stool. | ?0 m ?1 cm| 0,75`
      ]
    },
    {
      // word problem for class 5
      type: 'numberInput',
      id: 'word-prob-area',
      label: 'Word Problems on Area and boundary',
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
          What is the perimeter of a rectangle with 5 cm length and 30 cm breadth? | ?0 cm | 70
          What is the perimeter of a square with 2 cm length? | ?0 cm | 8 `,

        // class 5, Karnataka state board , chapter 9
        `A rectangular floor measures 5 m in length and 4 m in breadth. Find the perimeter of the floor. | ?0 m | 18
          A rectangular field has a length of 170 m and breadth 120 m. Find the perimeter of the field. | ?0 m | 580         
          A rectangular garden measures 70 m in length and 50 m in breadth. If the garden has to be fenced 5 rounds with barbed wire, what is the length of the wire required? | ?0 m | 1200
          Srija, during her morning walk, goes round a rectangular park 3 times. If the length and breadth of that park are 310 m and 190 m respectively, calculate the distance she has covered in km. | ?0 km | 3`,
        // First question is repetative
        `A rectangle has an area of 48 square cm. If the length of the rectangle is 8 cm, then what is the perimeter of the rectangle? | ?0 cm | 28
          A rectangle has an area of 60 square cm. If the length of the rectangle is 10 cm, then what is the perimeter of the rectangle? | ?0 cm | 32
          A square has an area of 16 square cm. What is the perimeter of the square? | ?0 cm | 16
          A square has an area of 64 square cm. What is the perimeter of the square? | ?0 cm | 32
          The perimeter of a rectangle is 60 cm. If the length of the rectangle is 10 cm, then what is the breadth of the rectangle? | ?0 cm | 20
          The perimeter of a rectangle is 60 cm. If the length of the rectangle is 10 cm, then what is the area of the rectangle? | ?0 square cm | 200`,

        // class 5, Karnataka state board , chapter 9
        `A farmer has a rectangular land of length 265 m and breadth 182 m. Find the area of the land. | ?0 sq m | 48230
          A carpet is needed to cover the entire area of a room. If the length of the room is 17 m and breadth 5m, find the area of the carpet required. | ?0 sq m | 85       
          An auditorium measures 27 m in length and 18 m in breadth. How many slabs of stones of 3m × 1m are required to cover the floor of the auditorium? | 162
          A rectangular plot's length is 24 m and its breadth is 18 m. If 1 square metre of the plot costs ₹ 250, what is the total value of the plot? | ₹ ?0 | 108000 
          A rectangular room's length is 20 m and its breadth is 9 m. How many tiles of 2m × 1m are required to cover the floor of the room? | 90`,

        `A triangle has sides of length 3 cm, 4 cm, 5 cm. What is the perimeter of the triangle? ?0 cm | 12
          A triangle has sides of length 10 cm, 12 cm, 15 cm. What is the perimeter of the triangle? ?0 cm | 37
          An equilateral (a triangle with equal sides) triangle has sides of length 6 cm. What is the perimeter of the triangle? ?0 cm | 18
          An equilateral triangle (a triangle with equal sides) has sides of length 10 cm. What is the perimeter of the triangle? ?0 cm | 30
          A regular Pentagon (A pentagon with equal sides) has sides of length 6 cm. What is the perimeter of the Pentagon? ?0 cm | 30`,
        // Might be too advanced
        `Perimeter of a rectangle is 20 cm. The area of the rectangle is 21 square cm. If one of the sides is 7 cm, what is the length of the other side? | ?0 cm | 3 
          Perimeter of a rectangle is 36 cm. The area of the rectangle is 80 square cm. What is the length of the bigger side? | ?0 cm | 10
          Perimeter of a rectangle is 42 cm. The area of the rectangle is 20 square cm. What is the length of the smaller side? | ?0 cm | 1
          Perimeter of a square is 36 cm. What is the area of the square? | ?0 square cm | 81
          Perimeter of a square is 80 cm. What is the area of the square? | ?0 square cm | 400`
      ]
    },
    {
      // word problem for class 5
      type: 'numberInput',
      id: 'word-prob-weightvol',
      label: 'Word Problems on Weight and Volume',
      lockAfter: 10,
      commonData: {
        title: 'Answer the word problem',
        type: 'word-problem'
      },
      data: [
        // class 5, Karnataka state board , chapter 6, unit-2
        `60 kg of rice was supplied to a school. If 15 kg of rice was used, find the quantity of rice remaining? | ?0 kg | 45
          Abrar buys 17 kg of jaggery and 16 kg of rice from a shop. He puts both the packets into one bag. What is the total weight of the bag? | ?0 kg | 33
          A bag can hold 30 kg of ragi. If 180 kg of ragi is to be filled equally, how many such bags are required? | 6
          A merchant has 7 packets of sugar, each packet weighing 15 kg of sugar. What is the total weight of 7 packets of sugar? | ?0 kg | 105`,

        `Yogita buys 4 kg 500 g of carrot, 2 kg 500 g of brinjal and 3 kg 250 g of tomatoes from a vegetable shop. Find the total weight of vegetables bought by her. | ?0 kg ?1 g | 10,250
          A merchant has 57 kg 250 g of wheat with him. He sells 15 kg 250 g of wheat to one customer and 13 kg 500 g to another customer. What is the weight of wheat remaining with him? | ?0 kg ?1 g | 28,500
          The yield of wheat per acre is 1 quintal 50 kg. Raju has 30 acres of field. What is the total yield of paddy? | ?0 quintals | 45
          18 kg 400 g of sugar is to be packed in 4 bags equally. What is the weight of each bag? | ?0 kg ?1 g | 4,600
          A farmer gets 60 kg 400 g of onion from one field and 66 kg 800 g from another field. If he sells 97 kg 200 g of onion, find the weight of onions left with him. | ?0 kg | 30`,

        `A glass contains 500 ml of water and another glass contains 250 ml of water. If water from both the glasses are poured into a jug, what is the quantity of water in the jug? | ?0 ml | 750
          A milkman has 6 l 700 ml of milk. Out of this he sells 1 l 150 ml of milk to one person and 2 l 550 ml to another person. Find the quantity of milk left with the milkman. | ?0 l | 3
          A bottle contains 250 ml of milk. What is the total quantity of milk (in litre) contained in 12 such bottles? | ?0 l | 3
          1 l of sugarcane juice is distributed among 4 friends equally. What quantity of sugarcane juice does each one get? | ?0 ml | 250`,

        `Shabina buys 4 l 250 ml of groundnut oil while returning from her office. Her mother also bought 2 l 500 ml of groundnut oil on the same day. What is the total quantity of groundnut oil bought by them? | ?0 l ?1 ml | 6,750
          A milkman has 27 l of milk. He sells 16 l 650 ml of it. Find the quantity of milk left with him. | ?0 l ?1 ml | 10,350
          A bottle contains 1 l 750 ml of mustard oil. It has to be filled into bottles of 250 ml each. How many bottles are required? | 7
          An oil can contains 15 l of Saffola oil. Out of this Rani uses 3 l 400 ml in the first month and 5 l 350 ml in the second month. Find the quantity of oil left in the oil can. | ?0 l ?1 ml | 6,250
          A vessel contains 3 l 300 ml of tea. It is poured into 12 glasses of the same size equally. What is the quantity of tea contained in each glass? | ?0 ml | 275`
      ]
    },
    {
      // word problem for class 5
      type: 'numberInput',
      id: 'word-prob-time',
      label: 'Word Problems on Time',
      commonData: {
        title: 'Answer the word problem',
        type: 'word-problem'
      },
      data: [
        // class 5, Karnataka state board , chapter 7, unit-2
        `Your school starts at 7 : 00 a.m and closes at 1 : 30 p.m. How many hours did the school work on that day? | ?0 hour ?1 minutes | 6,30
          Virat comes to his office at 8 : 00 a.m. He works 7 hours 30 minutes in his office. What time does he leave his office in the evening? | ?0 : ?1 p.m | 3,30
          Sanha studies for 5 hr. 10 min in her school. At home, she studies 2 hr. 50 min. What is the total number of hours she studied on that day? | 8
          Mahi spent his 15 days holiday in his uncle's place from 7 - 11 - 2021. On which date does he leave his uncle's place? | ?0 - ?1 - ?2 | 22,11,2021
          A school closes for mid-term vacation on October 3rd and reopens on October 21st. How many days has the school closed for mid term vacation? | 18
          A worker enters the factory at 7 : 45 a.m. He finishes his work and leaves the factory at 2 : 45 p.m. For how many hours has he worked in the factory? | 7`
      ]
    },
    {
      // word problem for class 5
      type: 'numberInput',
      id: 'word-prob-fraction',
      label: 'Word Problems on Fraction',
      lockAfter: 10,
      commonData: {
        title: 'Answer the word problem in simplified fraction.',
        type: 'word-problem'
      },
      data: [
        `A pizza is divided into 6 pieces. You ate 1 piece. What is the fraction of pizza you ate? | ?0/?1 | 1, 6
          You had 8 balloons. You gifted your friends 5 balloons. What was the fraction of balloons you have gifted your friends? | ?0/?1 | 5, 8
          You had 10 marbles with you. You took 2 marbles to play. What is the fraction of marble you took to play? | ?0/?1 | 1, 5
          Your school is 12 kms away from your home. You walk for 2 kms and the rest of the distance you take a bus. What is the fraction of the distance you walk? | ?0/?1 | 1, 6
          It takes 1 hour to complete 10 tasks. You have completed 6 tasks. What is the fraction of tasks you have completed? | ?0/?1 | 3, 5`,

        `Fida baked 12 cup cakes. He ate up to 3 cup cakes. What fraction of lemon tarts did Fida eat? | ?0/?1 | 1, 4
         Dan has a total of 25 marbles. He gives 10 marbles to his sister, Jane. What fraction of marbles did Jane receive? | ?0/?1 | 2, 5
         Rita travels a distance of 9 miles to reach home. The bus ride covers 5 miles. She then walks 4 miles to reach her home. What fraction of miles does Rita travel by bus? | ?0/?1 | 5, 9
         Amit owns a total of 10 pairs of socks of which 5 pairs are black and the rest are blue. What fraction of pairs of socks are blue? | ?0/?1 | 1, 2
         India won 4 matches out of 6 matches they played. What fraction of matches India won? | ?0/?1 | 2, 3`,

        `The Indian team has 11 players. There are a total 6 teams in the tournament with each team having 11 players. What is the fraction of Indian players in the tournament? | ?0/?1 | 1, 6
         Ram has 2 blue pens, 4 black pens and 6 red pens. What fraction of black pens can be found with Ram? | ?0/?1 | 1, 3
         There are a total of 52 building blocks in a bag. Alex uses 36 blocks to build a house. What fraction of building blocks remain unused? | ?0/?1 | 9, 13
         There were 50 chips in a chips packet. You ate 35 chips. What was the fraction of chips left with you? | ?0/?1 | 7, 10
         You had 14 toys with you. 4 toys broke while playing with your friends. What is the fraction of toys broken while playing? | ?0/?1 | 2, 7 `
      ]
    }
  ]
};
