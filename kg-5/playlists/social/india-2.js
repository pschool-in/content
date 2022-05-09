export default {
  label: 'My Country - India',
  id: 'india-2',
  lockAfter: 2,
  list: [
    {
      label: 'Notes',
      type: 'passage',
      id: 'notes',
      data: {
        title: 'My Country - India',
        text: `For many years our country - India, was ruled by another country called Britain.
We got Independence on August 15th, 1947. India celebrates this day as 'Independence Day' every year.  
Our own laws (Constitution of India) came into force on 26th January 1950. It is celebrated as 'Republic Day'. 
Many leaders worked hard to make India independent.
Mahatma Gandhi is affectionately remembered by all of us as 'Bapu' or the 'Father of our Nation'. He followed the path of non-violence. He led a simple life and always spoke the truth. His birth day, 2nd October, is celebrated as Gandhi Jayanthi. 
Jawaharlal Nehru was the first Prime Minister of India. He was very fond of children. He was lovingly known as 'Chacha Nehru'. His birth day, 14th November, is celebrated as Children's Day.
# National Flag 
Our National Flag called the Tricolour is rectangular in shape. It has three equal bands of different colours. 
The navy blue wheel in the centre of the white band is called the Ashoka Chakra. It has 24 spokes which stand for progress and values.
1. Saffron stands for sacrifice.
2. White stands for truth and peace.
3. Green stands for prosperity.
# National Symbols
National Animal - Tiger
National River - Ganges
National Bird - Peacock
National Tree - Banyan
National Flower - Lotus
National Fruit - Mango`
      }
    },
    {
      id: 'fillup',
      label: 'Fill Up',
      type: 'fillup',
      data: {
        text: `Our national tree is *banyan(neem, coconut)* tree.
Our national flower is *lotus (rose, jasmine)*.
Our national bird is *peacock (crow, parrot)*.
Our national animal is *tiger(lion, elephant)*.
Our national river is *Ganges (Narmada, Yamuna)*.
Our national fruit is *mango (banana, jackfruit)*. `
      }
    },
    {
      label: 'Multiple Choice Questions',
      id: 'mcq-plants',
      type: 'mcq',
      data: {
        questions: [
          {
            qText: 'Our national flag is also called as _______.',
            options: 'tricolor flag, four color flag, rectangular flag'
          },
          {
            qText:
              'What is the color of the Ashoka Chakra in our national flag?',
            options: 'Navy Blue, Sky Blue, Saffran, Green'
          },
          {
            qText: 'When did Constitution of India come into force?',
            options: `January 26th, 1950
August 15th, 1947
August 15th, 1950
January 26th, 1947`
          },
          {
            qText: 'Which of the following is not a national symbol?',
            options: 'Parrot, Tiger, Banyan, Mango'
          }
        ]
      }
    },
    {
      id: 'match',
      label: 'Match the Following',
      type: 'match',
      data: [
        `Independence Day, 15th August
Republic Day, 26th January
Gandhi Jayanthi, 2nd October
Children's Day, 14th November`,
        {
          title: 'Match the following based on our National flag.',
          text: `Saffron, Sacrifice
White, Truth and Peace
Green, Prosperity
Ashoka Chakra, 24 Spokes`
        }
      ]
    },
    {
      id: 'story',
      type: 'slides2',
      label: `Leaders`,
      commonData: {
        title: `Leaders`,
        displayType: 'steps',
        images: 'img/social/leaders'
      },
      data: [
        {
          steps: [
            {
              text:
                'Mahatma Gandhi is called the father of our nation. He led the country in our Freedom Struggle.',
              img: 'Mahatma Gandhi'
            },
            {
              text:
                'Jawaharlal Nehru was a freedom fighter and the first Prime Minister of India.',
              img: 'Jawaharlal Nehru'
            },
            {
              text:
                'Sardar Vallabhbhai Patel was a freedom fighter and the first Home Minister of India. He is known as Iron Man of India.',
              img: 'Sardar Vallabhbhai Patel'
            },
            {
              text:
                'Ambedkar was the first law minister of India. He headed the committee that wrote the constitution of India.',
              img: 'Ambedkar'
            },
            {
              text:
                'Rajendra Prasad was a freedom fighter and the first President of India.',
              img: 'Rajendra Prasad'
            },
            {
              text:
                'Subhas Chandra Bose is widely called as Netaji. He was a freedom fighter and found Indian National Army before independence.',
              img: 'Subhas Chandra Bose'
            }
          ]
        },
        {
          steps: [
            {
              text:
                'Abdul Kalam was an aerospace scientist. He is known as Missile Man of India. ',
              img: 'Abdul Kalam'
            },
            {
              text:
                'Rabindranath Tagore was a famous bengali poet. He is the author of our National Anthem.',
              img: 'Rabindranath Tagore'
            },
            {
              text:
                'Swami Vivekananda was a social reformer and philosopher. His birthday (12th Jan) is celebrated as National Youth Day.',
              img: 'Swami Vivekananda'
            },
            {
              text:
                'Mother Teresa founded the Missionaries of Charity and helped the homeless and sick people. She was given the Noble Prize for Peace.',
              img: 'Mother Teresa'
            },
            {
              text:
                'Atal Bihari Vajpayee was a former Prime Minister of India.',
              img: 'Atal Bihari Vajpayee'
            },
            {
              text: 'Indira Gandhi was the first lady Prime Minister of India.',
              img: 'Indira Gandhi'
            }
          ]
        }
      ]
    },
    {
      type: 'dragDropImgLabel',
      label: 'Drag and Drop',
      id: 'drag-fruits',
      commonData: {
        title: 'Drag the names and drop on the images.',
        path: 'img/social/leaders'
      },
      data: [
        `Mahatma Gandhi
Jawaharlal Nehru
Sardar Vallabhbhai Patel
Ambedkar
Rajendra Prasad
Subhas Chandra Bose`,

        `Abdul Kalam
Rabindranath Tagore
Swami Vivekananda
Mother Teresa
Atal Bihari Vajpayee
Indira Gandhi`
      ]
    },
    {
      label: 'Choose the best Answer',
      id: 'mcq',
      type: 'mcq',
      commonData: {
        optionImages: 'img/social/leaders'
      },
      data: [
        {
          questions: [
            {
              qText: 'Who was given the Nobel Prize for Peace?',
              options:
                'Mother Teresa, Atal Bihari Vajpayee, Swami Vivekananda, Rabindranath Tagore'
            },
            {
              qText: 'Whose birthday is celebrated as National Youth Day?',
              options:
                'Swami Vivekananda, Sardar Vallabhbhai Patel, Ambedkar, Jawaharlal Nehru'
            },
            {
              qText: 'Who is called the father of our nation?',
              options:
                'Mahatma Gandhi, Jawaharlal Nehru, Subhas Chandra Bose, Sardar Vallabhbhai Patel'
            },
            {
              qText: 'Who was the first President of India?',
              options:
                'Rajendra Prasad, Abdul Kalam, Atal Bihari Vajpayee, Jawaharlal Nehru'
            },
            {
              qText: 'Who was the first Prime Minister of India?',
              options:
                'Jawaharlal Nehru, Subhas Chandra Bose, Sardar Vallabhbhai Patel, Atal Bihari Vajpayee'
            }
          ]
        },
        {
          questions: [
            {
              qText: 'Who is called the Missile Man of India?',
              options:
                'Abdul Kalam, Atal Bihari Vajpayee, Mother Teresa, Jawaharlal Nehru'
            },
            {
              qText: 'Who is called the Iron Man of India?',
              options:
                'Sardar Vallabhbhai Patel, Atal Bihari Vajpayee, Ambedkar, Rajendra Prasad'
            },
            {
              qText:
                'Who headed the committee that wrote the constitution of India?',
              options:
                'Ambedkar, Mother Teresa, Indira Gandhi, Jawaharlal Nehru'
            },
            {
              qText: 'Who is called the Netaji?',
              options:
                'Subhas Chandra Bose, Indira Gandhi, Ambedkar, Rajendra Prasad'
            },
            {
              qText: 'Who wrote our National Anthem?',
              options:
                'Rabindranath Tagore, Mother Teresa, Indira Gandhi, Jawaharlal Nehru'
            }
          ]
        }
      ]
    }
  ]
};
