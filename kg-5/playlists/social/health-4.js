export default {
  id: 'health-4',
  label: 'Health-2',
  pdf: '',
  lockAfter: 4,
  list: [
    {
      label: 'Home Remedies',
      type: 'passage',
      id: 'home-remedies',
      data: {
        title: 'Home Remedies',
        text: ` # Illness
When we are well, we feel hungry at the right times. We sleep well at night. We have no complaints about digestion. And most importantly, we feel refreshed on getting up in the morning. We do not feel tired even if we have been at work. But sometimes, for some reason, we fall ill.
Seema had a slightly sore throat. Still, she had some ice cream. The next day, her throat hurt and she found it difficult to swallow. Mother made her gargle with warm salt water before and after school for two days. On the third day, Seema's throat had stopped hurting. This was a simple illness and she soon felt better again.
A fortnight later, Seema's aunt fell ill. She was running a temperature. Her eyes had become yellow. She did not feel like eating anything. Mother took her to the doctor. The doctor said that her aunt had jaundice. The doctor advised her to take complete rest for three weeks. She also told her to eat as little as possible of things that contain oil, ghee or butter. This was not an illness that could be cured easily.
# Home Remedies
Home remedies are good for minor illness, but we should visit a doctor for non-minor illness.
Elderly, experienced people in the family sometimes suggest such cures. If we have a cold we can inhale steam at bedtime or take hot fomentations on the chest.
If someone is vomiting as a result of fever or indigestion, it is better not to insist on having a meal. At most, they should be given a cool lemon juice or curd rice.
If someone has a cut, bruise or a small wound, it should be washed with clean water and dabbed dry. A tincture of iodine may be applied to it. Then it should be covered with clean cotton and bandaged.
Even if an illness appears to be minor, it should never be neglected. Remember, home remedies have limits. If a person does not recover in a day or two or if the illness worsens, one must go to a doctor.
Without a doctor's advice, one should never take any medicine that must be swallowed.
# Society Health Service
A service that takes care of the health of the people and provides treatment for those who are ill is called a health service or medical service.
Big towns and cities have doctors' clinics and hospitals. But, in most cities and rural areas there are Government Hospitals and Primary Health Centres too. Patients can get treatment for free or at concessional rates.
# Points to remember
1. Some illnesses are cured quickly. But, some do not get cured easily.
2. Minor illnesses can be cured with home remedies. 
3. Experienced, elderly people in the family know of such home remedies.
4. For common cold, one can inhale steam or take hot fomentations.
5. Mantras, incantations, magic spells and charms do not cure any diseases or illnesses.`
      }
    },
    {
      label: 'Home Remedy vs Doctor',
      id: 'cured-not-cured',
      type: 'group',
      data: {
        title: 'Home Remedy vs Doctor',
        types: [
          {
            name: 'Home Remedy',
            text: 'common cold, bruise, stomach upset, headache, sore throat'
          },
          {
            name: 'Doctor',
            text: 'typhoid, malaria, chickenpox, measles, snake bite'
          }
        ]
      }
    },
    {
      id: 'fillup',
      label: 'Fill in the blanks',
      type: 'fillup',
      data: {
        title: 'Click the blanks and fill it with the right word.',
        text: `Without a *doctor's (elders)* advice, one should never take any medicine that must be swallowed.
A service that takes care of the health of the people and provides treatment for those who are ill is called a *health (society)* service.
Patients can get *treatment (medicines)* free or at concessional rate in Government Hospitals and Primary Health Centres.
The municipal corporations of big cities run *hospitals (health services)* that provide medical treatment.`
      }
    },
    {
      label: 'True or False',
      id: 'true-false',
      type: 'classifySentence',
      data: {
        title: 'Classify the below sentences as true or false',
        types: [
          {
            name: 'True',
            text: `If someone has a cut, bruise or a small wound, it should be washed with clean water and dabbed dry.  
A service that takes care of the health of the people and provides treatment for those who are ill is called a health service or medical service.
Even if an illness appears to be minor, it should never be neglected. `
          },
          {
            name: 'False',
            text: `We are allowed to take medication without consulting a doctor.
We should directly bandage an open wound without cleaning it.`
          }
        ]
      }
    },
    {
      label: 'Fill in the Blanks',
      type: 'matchByDragDrop',
      id: 'drag-drop ',
      data: {
        isPractice: false,
        title: 'Drag and drop the given words at the right blanks.',
        styles: {
          fontSize: '1.3rem',
          dashWidth: 80
        },
        text: `Some illnesses are cured *quickly*. But, some do not get *cured* easily.
Minor illnesses can be cured with *home remedies*. 
Experienced, *elderly* people in the family know of such home remedies.
For a cold, one can *inhale steam* or take hot fomentations.
A lemon juice is good for someone who is *vomiting*.
Incantations, *mantras*, magic spells and charms do not cure any diseases or illnesses.`
      }
    },
    {
      label: 'Right or Wrong',
      id: 'right-wrong',
      type: 'classifySentence',
      data: {
        title: 'Classify the activities as right or wrong.',
        types: [
          {
            name: 'Right',
            text: `Offer lemon juice to someone who is vomiting.
Gargle with warm water to get rid of a sore throat.
Inhale steam to get relief from a cold.`
          },
          {
            name: 'Wrong',
            text: `Take one to a Tantrik in case of snakebite.
In case of a fracture, just rest at home. There is no need to visit a doctor.`
          }
        ]
      }
    },
    {
      label: 'Choose the correct Answer',
      id: 'mcq',
      type: 'mcq',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: ' What are the signs that tell you someone has a cold?',
            options: 'runny nose, sneezing, cough, sore throat, *all'
          },
          {
            qText: 'What is the home remedy for a cold?',
            options: 'inhale steam, using hot water, using cold water'
          },
          {
            qText:
              'What tells you that the temperature of someone who had a fever is coming down?',
            options: 'thermometer, stethoscope, barometer'
          },
          {
            qText: 'What should one do if an illness persists?',
            options: 'consult doctor, continue home remedies, consult a Tantrik'
          }
        ]
      }
    },
    {
      label: 'First Aid',
      type: 'sorting',
      data: {
        title: 'Arrange in order the steps in treating a wound.',
        text:
          'wash with clean water, dab it dry, apply tincture of iodine, cover with clean cotton, bandage the wound'
      },
      id: 'first-aid'
    }
  ]
};
