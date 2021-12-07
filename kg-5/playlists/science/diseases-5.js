export default {
    id: 'diseases-5',
    label: 'Diseases',
    lockAfter: 4,
    list: [
      {
        id: 'notes',
        label: 'Diseases',
        type: 'passage',
        data: {
          text: `# Deficiency Diseases
          Food gives us energy to work and play. It helps us grow and gives our body strength to fight diseases. When people do not get the required amount of nutrition, they become weak and are unable to lead productive lives. Diseases which are caused by the lack of adequate amounts of essential nutrients in our food are called deficiency diseases.
          # Malnutrition
          There are many children who do not get enough food to eat. Such children suffer from malnutrition. They look pale and weak. Malnutrition occurs in children between the ages of 1 to 5. A child suffering from malnutrition may show all or some of the following symptoms: 
          1. develop a big stomach as the stomach is filled with water
          2. get sores on the skin
          3. have thin upper arms
          4. get tired easily
          5. show very slow growth
          6. have thin and light hair
          Malnourished children can become healthy if they receive sufficient quantity of nutritious food.
          # Anaemia
          Some fruits and green vegetables contain iron. Lack of iron leads to a condition called anaemia. A person suffering from anaemia has low haemoglobin content in the blood. Haemoglobin is a substance in the blood that carries oxygen. When the body is deprived of oxygen, it is not able to get enough energy from food to work and play. Anemic person feels tired easily and falls sick often. Spinach and other green leafy vegetables, fruits such as apple, guava and banana, pulses, jaggery, egg, meat and liver are all rich sources of iron.
          # Rickets
          Rickets is caused by the deficiency of Vitamin D in the diet. A person with rickets becomes bow legged because their bones become soft and can bend easily. Vitamin D along with minerals like calcium and phosphorous make the bones and teeth hard and strong. Milk and its products contain calcium. Vitamin D is also called the sunshine vitamin because it is produced in the body when the skin is exposed to sunlight.
          # Scurvy
          Scurvy is caused by the deficiency of Vitamin C in the diet. Scurvy causes bleeding and swelling of the gums, loose teeth, pain in the joints and red spots under the skin. The gums get easily infected. Eating foods that are rich in Vitamin C like oranges, grapes, lemon, amla, sprouted grams, green coriander, mint leaves and tomatoes can help prevent the disease.
          # Goitre 
          People suffering from a disease called goitre, have a swelling in the neck. This is caused due to the lack of a mineral called iodine in the diet. Iodine deficiency not only leads to goitre but also affects physical and mental development. Adding iodine to salt is the most common and effective method of preventing iodine deficiency.
          # Beriberi
          Beriberi is caused by the deficiency of Vitamin B. In those suffering from beriberi, there is loss of appetite, the tongue becomes sore, cracks appear at the corners of the mouth and the skin of the hands become rough, dry and scaly. The nervous system and the heart are also affected. A diet rich in Vitamin B with foods like cereals, sprouted pulses, green leafy vegetables, whole grains, gram, milk, liver and tomatoes help in preventing this disease.
          # Night blindness
          It is caused by the lack of Vitamin A in the diet. A person suffering from night blindness finds it difficult to see in dim light. The eyes become dull, triangular patches appear on the white portion of the eyes and the skin becomes dry and scaly. Vitamin A deficiency together with protein-energy malnutrition often affects pre-school children. It impairs their resistance to infection. A diet rich in green leafy vegetables, carrots, papaya, pumpkin, mango, milk, curd and liver will help prevent the disease.
          # Non-communicable diseases
          A non-communicable disease is a disease that is not transmissible directly from one person to another. They include strokes, most heart diseases, most cancers, diabetes, chronic kidney disease, cataracts, etc. Deficiency diseases are also non-communicable diseases.`,
          title: 'Diseases'
        }
      },
      {
        id: 'mcq',
        label: 'Multiple Choice Questions - MCQ',
        type: 'mcq',
        data: {
          title: 'Multiple Choice Questions',
          questions: [
            {
              qText: 'Which of these is not a deficiency disease?',
              options: `dengue, scurvy, goitre`
            },
            {
              qText: 'Which disease is caused by lack of Vitamin D?',
              options: `rickets, scurvy, beriberi`
            },
            {
              qText: 'Which of the following food is rich in Vitamin C?',
              options: `orange, milk, potato`
            }
          ]
        }
      }, 
      {
        id: 'true-false',
        label: 'True or False',
        type: 'classifySentence',
        data: {
          title: 'True or False',
          types: [
            {
              name: 'True',
              text: `Malnourished children do not get enough food.
              Rickets is a deficiency disease.`
            },
            {
              name: 'False',
              text: `Vitamin D is called moonlight vitamin.
              Spinach is bad for people with anaemia.`
            }
          ]
        }
      },
      {
        id: 'match',
        label: 'Match the following',
        type: 'match',
        data: {
          text: `anaemia, iron
          rickets, vitamin D
          scurvy, vitamin C
          goitre, iodine
          beriberi, vitamin B
          night blindness, vitamin A`,
          title: 'Match with appropriate choice'
        }
      },
      {
        label: 'Name the following',
        type: 'matchByDragDrop',
        id: 'drag-drop',
        data: {
          isPractice: false,
          title: 'Drag and drop the words at proper place.',
          styles: {
            fontSize: '1rem',
            dashWidth: 80
          },
          text: `Disease caused by iron deficiency - *anaemia*
          Disease caused by Vitamin C deficiency - *scurvy*
          Disease caused by Vitamin B deficiency - *beriberi*
          Disease caused by Vitamin D deficiency - *rickets*
          Disease caused by Vitamin A deficiency - *night blindness*
          Disease caused by iodine deficiency - *goitre*`
        }
      },
      {
        id: 'match',
        label: 'Match the following',
        type: 'match-2',
        data: {
          text: `orange, Vitamin C
          carrot , Vitamin A
          salt, iodine
          pulses, Vitamin B
          sunlight, Vitamin D`,
          title: 'Match with appropriate choice'
        }
      }
    ]
  };
  