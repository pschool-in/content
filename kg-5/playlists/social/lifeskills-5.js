export default {
    id: 'lifeskills-5',
    label: 'Life Skills - 5',
    pdf: '',
    lockAfter: 4,
    list: [
      {
        label: 'Our Emotional World - Reading',
        type: 'passage',
        id: 'emotionalworld',
        data: {
          title: 'Our Emotional World',
          text: `#Emotions
          Emotions are also called as feelings that one experiences and processes in themselves. It should be expressed, but we should handle the emotions accordingly to the situation. Anger, sadness, excitment, fear, confused are the examples of the emotions.          
          #Emotional balance is good to life          
         1. Coping up with emotions helps in balancing and shape the personality. It also increases the ability to understand others. Handling emotions in the right way helps us to lead a better life.          
         2. If we are aware of the flaws in the construct of our nature, then we should try to correct ourselves. Moreover, we should help each other to get rid of the flaws. We should stop identifying negative qualities people have and rather seek positive ones.          
         3. Too much of anger will lead to adverse effects on mental and physical health. Sometimes, it also leads to violence. Being stubborn is a sign of ego and pride and it will lead to many problems.So, we should try to tolerate things and must not lose the temper. One can have desire in their life, but should not be greedy about it.          
         4. Sometimes we get hurt by others, intentionally or unintentionally. Some people take revenge in hurting us back, which is very bad quality. Controlling our emotions is the important aspect in our life. It is best way to express the emotions in a reasonable manner.`
        }
      },
      {
        label: 'Happy Vs Powerful',
        id: 'emotionalworldgroup',
        type: 'group',
        data: {
          title: 'Classify the below things based on the category of happy and powerful emotions.',
          types: [
            {
              name: 'Happy',
              text: 'Cheerful, Delighted, Pleased, Ecstatic'
            },
            {
              name: 'Powerful',
              text: 'Determined, Ambitious, Empowered, Mighty'
            }
          ]
        }
      },
      {
        id: 'emotionalworldmatch',
        label: 'Match the following',
        type: 'match',
        data: {
          text: `Happy, Glad
          Angry, Irritated
          Sad, Blue
          Jumbled, Confused
          Excited, Enthusiatic`,
          title: 'Match the following with its correct one'
        }
      },
      {
        label: 'Multiple Choice Questions',
        id: 'emotionalworldmcq',
        type: 'mcq',
        data: {
          title: 'Multiple Choice Questions',
          questions: [
            {
              qText: 'One should try to control the __________.',
              options:
                'emotions, tears, Sweat'
            },
            {
              qText: 'We should always think about our friends __________ first.',
              options: 'virtues, iniquity, sin, dream'
            },
            {
              qText: 'Too much of _______, will lead to adverse effects on mental health.',
              options: 'anger, blue, curious, furious'
            },
            {
              qText: 'one can have desire in their life, but should not be____ about it.',
              options:
                'greedy, unsatisfied, discontent, ascetic'
            },
            {
              qText: 'Undestand and act according to other’s ____________.',
              options: 'emotions, hunger, tiredness, money'
            }
          ]
        }
      },
      {
        label: 'Fill in the blanks -1',
        type: 'matchByDragDrop',
        id: 'emotionalworlddrag-1',
        data: {
          isPractice: false,
          title: 'Drag and drop the given words at the right blanks.',
          styles: {
            fontSize: '1.3rem',
            dashWidth: 80
          },
          text: `We must know well about our talents and also our *flaws*.
          Handling *emotions* in the right way will help us lead a happy life.
          If we know our flaws in our nature, then we should try to *correct* ourselves.
          Being *stubborn* always, will lead to the problem. 
          We should able to do *balance* between the thoughts and emotions.`
      }
    },
    {
        id: 'emotionalworldfill-1',
        label: 'Fill in the blanks -2',
        type: 'fillupOptions',
        data: {
          title: 'Click the blanks and fill it with the right word.',
          text: `If you get angry, then you should not revert in a *bad (good)* way to others.
          We should help each other, to get rid of the *flaws(talent)*.
          Sometimes being *patient (impatient)* in life, is the best emotional intelligence.
          *Society (Food)*influences one’s emotion.
          *Hunger (Anger)* is not a type of emotion.`
        }
      },
      {
        label: 'True or False',
        id: 'emotionalworldTF',
        type: 'classifySentence',
        data: {
          title: 'Classify the below sentences as true and false',
          types: [
            {
              name: 'True',
              text: `Ram used to sing a song, whenever he feels happy.
              Rahim’s parents were so happy, because she won the swimming race.
              Robert was so happy yesterday, because he cent percent in all subjects. 
              `
            },
            {
              name: 'False',
              text: `Alex is a chess champion, but chess is a boring game for him.
              During festival, people are lethargic.
              Not having a sense of lack-luster is a good quality.`
            }
          ]
        }
      },
      {
        label: 'Growth and personality development - Reading',
        type: 'passage',
        id: 'personality',
        data: {
          title: 'Growth and personality development',
          text: `#Growth and development
          All living things have the ability to grow. Humans have slow growth and development from birth to adulthood. Infants cannot do any activity by themselves. Slowly they get the coordination and control of the movements. They grow in weight and height slowly according till adulthood. A balanced diet and regular exercise are the major factors that support growth and development for humans.          
          #Skills development          
          When we grow, our physical strength increases. At the same time, learning and practicing new skills rapidly leads to personality development. Animals learn from their mother how to protect themselves from their enemies, weather, etc. They learn and begin to live independently. Animals learn only a limited number of skills in their life, however, humans learn more things throughout their life. Developing skills helps one to live independently and enrich life.           
          #Heredity          
          The characteristics and features of parents or ancestors that are being passed to their children is called heredity. This is the reason, where many family members look similar to each other, but even then every person is unique. Everyone has their unique character traits and personality. Talents and inherent qualities differ from person to person.`
        }
      },
      {
        label: 'Animal activities Vs Human activities',
        id: 'personalitygroup',
        type: 'group',
        data: {
          title: 'Classify the below things based on the category of Animal and Human activities.',
          types: [
            {
              name: 'Animal activities',
              text: 'Hunting, Sixth sense, Climbing the tree'
            },
            {
              name: 'Human activities',
              text: 'Skipping, Cycling, Playing games'
            }
          ]
        }
      },
      {
        id: 'personalitymatch',
        label: 'Match the following',
        type: 'match',
        data: {
          text: `Heredity, Family
          Physical growth, Development
          Imbalanced diet, Malnutrition
          Good Values, Good character
          Infants, Slow co-ordination`,
          title: 'Match the following with its correct one'
        }
      },
      {
        label: 'Multiple Choice Questions',
        id: 'personalitymcq',
        type: 'mcq',
        data: {
          title: 'Multiple Choice Questions',
          questions: [
            {
              qText: '______ learn only a limited number of skills in their life.',
              options:
                'Animals, Human, Alien, Trees'
            },
            {
              qText: '__________ learn more things throughout their life.',
              options: 'Human, Alien, Animals, Trees'
            },
            {
              qText: 'Physical and mental strength are good enough for ________.',
              options: 'adults, children, Old people'
            },
            {
              qText: 'Due to heredity, __________ looks more similar to each other.',
              options:
                'family members, friends, students, teachers'
            },
            {
              qText: '______________ has slow development and controlling the co-ordination movement.',
              options: 'Infants, Adults, Plants, None of the above'
            }
          ]
        }
      },
      {
        label: 'Fill in the blanks -1',
        type: 'matchByDragDrop',
        id: 'personalitydrag-1',
        data: {
          isPractice: false,
          title: 'Drag and drop the given words at the right blanks.',
          styles: {
            fontSize: '1.3rem',
            dashWidth: 80
          },
          text: `Learning more *skills*, gives you better advantages.
          *Infants* learn the various skills day by day.
          We learn many skills from our parents and *teachers*.
          Our *personality* develops through our efforts and interests.
          Heredity mainly passes through the characters from *ancestors* to the younger generation in the family.`
      }
    },
    {
        id: 'personalityfill-1',
        label: 'Fill in the blanks -2',
        type: 'fillupOptions',
        data: {
          title: 'Click the blanks and fill it with the right word.',
          text: `We have physical body growth until we reach *18 (25)* years.
          Learning many skills will help one to be less *dependent (independent)* on others.
          Doing *regular (irregular)* exercises helps to keep the body fit.
          Each one has a *unique (similar)* personality.
          It is more important to reflect the *good (bad)* values in our behavior.`
        }
      },
      {
        label: 'True or False',
        id: 'personalityTF',
        type: 'classifySentence',
        data: {
          title: 'Classify the below sentences as true and false',
          types: [
            {
              name: 'True',
              text: `Intake of proper nutritious food is necessary for growth and development.
              Animals learn from their mother how to protect themselves from their enemies.
              Lack of physical activity and exercise affect the overall growth adversely.`
            },
            {
              name: 'False',
              text: `Food is not required for physical and mental growth.
              Infants feed themselves.`
            }
          ]
        }
      },   
    ]
  };
