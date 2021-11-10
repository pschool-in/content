export default {
  id: 'humanbody-5',
  label: 'Humanbody-5',
  pdf: '',
  lockAfter: 4,
  list: [
    {
      label: 'Internal Organs - Reading',
      type: 'passage',
      id: '100',
      data: {
        title: 'Our Internal Organs',
        text: `# Organ system.

          1. A group of organs that together carry out some function of the body is called a system.
          2. The nose, trachea, lungs and diaphragm are organs of the respiratory system.
          3. The mouth, oesophagus, stomach, small intestine, large intestine, rectum, anus and certain glands outside the alimentary canal are the organs of the digestive system.
          4. Other systems like the circulatory system, the skeletal system, the excretory system also take care of other important functions of our body.
          5. The nervous system co-ordinates all the functions of the body.
          6. For us to lead a healthy life, all our systems must function smoothly.`
      }
    },
    {
      label: 'Digestion',
      type: 'matchByDragDrop',
      id: '600',
      data: {
        isPractice: false,
        title: 'Drag and drop the given words at the right blanks.',
        styles: {
          fontSize: '1.3rem',
          dashWidth: 80
        },
        text: `The process of digestion *begins* as soon as food is taken into the mouth.
          The teeth, tongue and *saliva* all help to convert food into a soft moist ball called a *bolus*.
          The bolus passes through the *oesophagus* into the stomach.
          The *stomach* is shaped like a bag.
          The food is *churned* in the stomach. 
          The digestive *juices* in the stomach bring about some digestive processes.`
      }
    },
    {
      label: 'Small Intestine',
      type: 'matchByDragDrop',
      id: '601',
      data: {
        isPractice: false,
        title: 'Drag and drop the given words at the right blanks.',
        styles: {
          fontSize: '1.3rem',
          dashWidth: 80
        },
        text: `The food changes into a thin *slurry* in the stomach. 
          Then it passes into the *small* intestine.
          The small intestine of an adult is about *7* metres long. 
          The digestive juices in the *intestine* bring about several digestive processes.  
          In the small intestine, they are absorbed into the *blood*. 
          The remaining substances pass into the *large* intestine.`
      }
    },
    {
      label: 'Large Intestine',
      type: 'matchByDragDrop',
      id: '602',
      data: {
        isPractice: false,
        title: 'Drag and drop the given words at the right blanks.',
        styles: {
          fontSize: '1.3rem',
          dashWidth: 80
        },
        text: `The large intestine of an adult is about *one* and a half metres long. 
          Here, much of the *water* in the remaining substances is absorbed into the body.
          The *faeces* collect in the rectum for some time. 
          Later, they are expelled from the body through the *anus*.`
      }
    },
    {
      label: 'Alimentary Canal',
      type: 'matchByDragDrop',
      id: '603',
      data: {
        isPractice: false,
        title: 'Drag and drop the given words at the right blanks.',
        styles: {
          fontSize: '1.3rem',
          dashWidth: 80
        },
        text: `*Digestion* takes place in different parts of a long and flexible tube called the *alimentary* canal. 
          The upper end of this tube is the *mouth* and the lower end is called the *anus*.
          The *shape* of this tube is not the same in all its parts.`
      }
    },
    {
      label: 'Respiration',
      type: 'matchByDragDrop',
      id: '604',
      data: {
        isPractice: false,
        title: 'Drag and drop the given words at the right blanks.',
        styles: {
          fontSize: '1.3rem',
          dashWidth: 80
        },
        text: `When we inhale, the air from outside goes into the trachea and through its branches, into the *lungs*.
          In the lungs, these *branches* divide further into smaller and smaller branches. 
          At the end of the last branches, there are air sacs or *alveoli*.
          Between the thoracic cavity and the abdominal cavity, there is an organ like a flexible sheet called the *diaphragm*.
          When the diaphragm moves *downward*, we breathe in.
          When the diaphragm moves *upwards*,air in the lungs is pushed out.`
      }
    },
    {
      label: 'Exchange of gases',
      type: 'matchByDragDrop',
      id: '605',
      data: {
        isPractice: false,
        title: 'Drag and drop the given words at the right blanks.',
        styles: {
          fontSize: '1.3rem',
          dashWidth: 80
        },
        text: `When the outside air reaches the alveoli, the *oxygen* in it passes into the thin *blood* vessels.
          The *carbon dioxide* that is brought by the blood from all parts of the body enters the *air* in the alveoli. 
          When we *exhale*, the carbon dioxide is also given out with the air.`
      }
    },
    {
      label: 'Nervous System',
      type: 'matchByDragDrop',
      id: '606',
      data: {
        isPractice: false,
        title: 'Drag and drop the given words at the right blanks.',
        styles: {
          fontSize: '1.3rem',
          dashWidth: 80
        },
        text: `There is a *network* that connects the brain with all the different parts of the body. 
          This is a network of *nerves* that carry messages to and fro between the brain and the parts of the body.
          The brain and the network of nerves are together called the *nervous* system. 
          The nervous system functions to *co-ordinate* all our bodily functions.`
      }
    },
    {
      label: 'True or False',
      id: '200',
      type: 'classifySentence',
      data: {
        title: 'Classify the below sentences as true and false',
        types: [
          {
            name: 'True',
            text: `Brain controls the entire body.
              Heart pumps blood.
              Alcohol affect liver and kidney.`
          },
          {
            name: 'False',
            text: `Oxygenated blood flows through veins.
              Beating of heart is voluntary action.
              Excretory system cleans air.`
          }
        ]
      }
    },
    {
      id: 'fillup-1',
      label: 'Fill in the blanks',
      type: 'fillupOptions',
      data: {
        title: 'Click the blanks and fill it with the right word.',
        text: `A sufficient quantity of *water (energy)* is necessary for the processes of digestion to take place properly.
          The inner lining of the respiratory organs has fine hairlike structures called *cilia (villi)*.
          The *skeletal (nervous)* system gives support and shape to the body and protects the important organs inside it.
          The *excretory (respiratory)* system expels the waste substances that are formed in the body.
          If one keeps drinking alcohol for a long period of time, it causes *ulcers (cyst)* on the inner lining of the digestive organs.`
      }
    },
    {
      label: 'Choose the best Answer',
      id: 'mcq',
      type: 'mcq',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText:
              ' A group of organs that together carry out some function of the body is called a ____________.',
            options: 'system, organ, function'
          },
          {
            qText:
              'The nose, trachea, lungs and diaphragm are organs of the ___________ system.',
            options: 'respiratory, nervous, digestive'
          },
          {
            qText:
              'The mouth, oesophagus, stomach etc are the organs of the _____________ system.',
            options: 'digestive, excretory, nervous'
          },
          {
            qText:
              'The _________ system co-ordinates all the functions of the body.',
            options: 'nervous, respiratory, excretory'
          },
          {
            qText:
              'For us to lead a healthy life, all our _________ must function smoothly.',
            options: 'system, organ, function'
          }
        ]
      }
    },
    {
      id: 'match',
      label: 'Match the following',
      type: 'match',
      data: {
        text: `Lungs, respiration
          Stomach, digestion 
          Heart, circulation 
          Brain, co-ordination
          Kidney, excretion `,
        title: 'Match the following'
      }
    },
    {
      label: 'Name the following',
      type: 'matchByDragDrop',
      id: 'drag-drop-1 ',
      data: {
        isPractice: false,
        title: 'Drag and drop the given words at the right blanks.',
        styles: {
          fontSize: '1.3rem',
          dashWidth: 80
        },
        text: `An organ that secretes a certain substance. - *gland* 
          An organ that helps in circulation of blood - *heart* 
          An organ that helps in digestion of food - *stomach* 
          An organ that helps to remove waste from our body - *kidney* `
      }
    },
    {
      label: 'Organ Systems - Reading',
      type: 'passage',
      id: '400',
      data: {
        title: 'Organ Systems',
        text: `# Digestive system

          The process of conversion of complex food molecules into simpler molecules is called digestion. The digestive system can be divided into two.
          1. Digestive tract 
          2. Digestive glands
          
          # Respiratory system
          
          The respiratory system provides oxygen to the tissues of the body and removes carbon dioxide from the tissues. There are three major parts forming the respiratory system.
          
          1. Airway 
          2. Lungs 
          3. Muscles of respiration
          
          # Circulatory system
          
          In this system blood is circulated to transport oxygen and nutrients to every part of the body. Circulatory system consists of the following:
          1. Heart 
          2. Blood vessels 
          3. Blood
          
          # Excretory system
          
          Excretory system removes the waste products from the body. It also regulates water and electrolyte balance. Kidneys, lungs, liver and skin together function as excretory organs. Excretory system consists of the following.
          1. Kidneys 
          2. Ureters 
          3. Urinary bladder
          
          # Nervous system

          Nervous system is an integration of nerves and they are composed of specialized cells called Neurons. The human nervous system is divided into the following.
          1. Central Nervous System (CNS)
          2. Peripheral Nervous System (PNS)`
      }
    },
    {
      label: 'Digestion',
      type: 'sorting',
      data: {
        title: 'Arrange the organs in the sequence they occur.',
        text:
          'Mouth, Buccal cavity, Pharynx, Esophagus, Stomach, Small intestine, Large intestine, Anus'
      },
      id: 'sorting-1'
    },
    {
      id: 'fillup-2',
      label: 'Fill in the blanks',
      type: 'fillupOptions',
      data: {
        title: 'Click the blanks and fill it with the right word.',
        text: `Smoke contains large amount of carbon *monoxide (dioxide)* a toxic gas.
          People when engulfed in smoke on fire die due to *suffocation (allergy)*.
          Muscles of respiration include diaphram and *intercostal (inrtravein)* muscles. 
          Blood vessels consist of arteries, veins and *capillaries (lymph)*.`
      }
    },
    {
      id: 'fillup',
      label: 'Fill in the blanks',
      type: 'fillupOptions',
      data: {
        title: 'Click the blanks and fill it with the right word.',
        text: `The volume of blood in human adults is *4-5 (6-7)*litres.
          *Spinal cord (Vertebra)* is along a tube like structure which extends from the brain.
          The brain loses the ability to function when it does not get oxygen for more than *4 (5)* minutes.
          Enough sleep and healthy food increases the efficiency of our *brain (kidney)*.`
      }
    },
    {
      label: 'True or False',
      id: '700',
      type: 'classifySentence',
      data: {
        title: 'Classify the below sentences as true and false',
        types: [
          {
            name: 'True',
            text: `The circulatory system is made up of the heart, blood and blood vessels.
              Important function of the heart is to transport blood with nutrients, oxygen, waste and hormones.
              We have 2 kidneys.`
          },
          {
            name: 'False',
            text: `The brain is protected by the rib cage.
              The functional unit of kidney is neuron.
              Heart has 5 chambers.`
          }
        ]
      }
    },
    {
      label: 'Digestive Glands-1',
      type: 'matchByDragDrop',
      id: 'drag-drop-2',
      data: {
        isPractice: false,
        title: 'Drag and drop the given words at the right blanks.',
        styles: {
          fontSize: '1.3rem',
          dashWidth: 80
        },
        text: `Salivary glands secrete *saliva* which moistens food. 
          Saliva contains enzymes which break down complex molecules into *simple* molecules. 
          Pancreas produces *pancreatic* juice which contains digestive enzymes for digesting *fats*, proteins and carbohydrates.
          Liver produces *bile* for the digestion of fat.`
      }
    },
    {
      label: 'Digestive Glands-2',
      type: 'matchByDragDrop',
      id: 'drag-drop',
      data: {
        isPractice: false,
        title: 'Drag and drop the given words at the right blanks.',
        styles: {
          fontSize: '1.3rem',
          dashWidth: 80
        },
        text: `There are some organisms which *live* in the digestive systems of animals.  
          *Tape worm* lives in the human intestine.
          The three pairs of salivary glands parotid,*sublingual* and submandibular gland secrete *1.5* litres of saliva every day.`
      }
    },
    {
      label: 'Respiration',
      type: 'sorting',
      data: {
        title: 'Arrange the organs in the sequence they occur.',
        text:
          'Nostrils, Nasal cavity, Pharynx, Larynx, Trachea, Bronchi, Bronchioles, Alveoli'
      },
      id: 'sorting-2'
    },
    {
      label: 'Heart-1',
      type: 'matchByDragDrop',
      id: 'drag-drop-3',
      data: {
        isPractice: false,
        title: 'Drag and drop the given words at the right blanks.',
        styles: {
          fontSize: '1.3rem',
          dashWidth: 80
        },
        text: `The heart is a *hollow*, muscular organ.
          Heart is covered with double walled membrane called *pericardium*. 
          The space between the membranes is filled with *pericardial* fluid.
          The pericardial fluid protects the heart from *shock*. 
          The heart is divided into *four* chambers. `
      }
    },
    {
      label: 'Heart-2',
      type: 'matchByDragDrop',
      id: 'drag-drop-4',
      data: {
        isPractice: false,
        title: 'Drag and drop the given words at the right blanks.',
        styles: {
          fontSize: '1.3rem',
          dashWidth: 80
        },
        text: ` Two upper chambers are called *atria*. 
          Two lower chambers are called *ventricles*. 
          The chambers of the heart are separated by *auriculo-ventricular* septum of the heart. 
          The right side of the heart receives *deoxygenated* blood.
          The left side of the heart receives *oxygenated* blood. `
      }
    },
    {
      label: 'Kidney',
      type: 'matchByDragDrop',
      id: 'drag-drop-5',
      data: {
        isPractice: false,
        title: 'Drag and drop the given words at the right blanks.',
        styles: {
          fontSize: '1.3rem',
          dashWidth: 80
        },
        text: `The kidneys filter the *blood* to remove waste and produce *urine*. 
          The kidneys are a pair of dark red, *bean* shaped organs. 
          *Right* kidney is slightly *lower* than the left kidney. 
          Each kidney is covered by a fibrous membrane called *capsule*.
          The kidneys are made up of millions of excretory units, called *Nephrons*.
          Nephrons are the structural and *functional* units of the kidneys.`
      }
    },
    {
      label: 'Urinary Bladder',
      type: 'matchByDragDrop',
      id: 'drag-drop-6',
      data: {
        isPractice: false,
        title: 'Drag and drop the given words at the right blanks.',
        styles: {
          fontSize: '1.3rem',
          dashWidth: 80
        },
        text: `It is sac-like in shape and acts as a temporary storage organ of *urine*. 
          Urine entering the urinary bladder from the ureters fill the *bladder*.
          Urine is expelled from the body through the *urethra*.
          Every minute, kidneys receive approximately *1.250* litre of blood.`
      }
    },
    {
      label: 'Brain',
      type: 'matchByDragDrop',
      id: 'drag-drop-7',
      data: {
        isPractice: false,
        title: 'Drag and drop the given words at the right blanks.',
        styles: {
          fontSize: '1.3rem',
          dashWidth: 80
        },
        text: `The *fore brain* consists of cerebrum, thalamus and hypothalamus.
          Fore brain is the centre of human *memory*.
          Fore brain is responsible for intelligence, *imagination* and reasoning.
          *Mid brain* co-ordinates the movements of the muscles of the body.
          *Hind brain* connects the brain to the spinal cord.`
      }
    },
    {
      label: 'PNS',
      type: 'matchByDragDrop',
      id: 'drag-drp-8',
      data: {
        isPractice: false,
        title: 'Drag and drop the given words at the right blanks.',
        styles: {
          fontSize: '1.3rem',
          dashWidth: 80
        },
        text: `Peripheral nervous system consists of nerves extending from the *spinal cord* to all parts of the body. 
          Somatic nervous system carries *sensations* from the organs to the brain. 
          Somatic nervous system take *messages* from the brain to the organs for movements. 
          Autonomous nervous system controls the *nerves* of the inner organs of the body.`
      }
    },
    {
      label: 'Name the following',
      type: 'matchByDragDrop',
      id: '1500',
      data: {
        isPractice: false,
        title: 'Drag and drop the given words at the right blanks.',
        styles: {
          fontSize: '1.3rem',
          dashWidth: 80
        },
        text: `An animal with blue blood - *lobster*
          An animal with colourless blood - *cockroach*
          Only artery that carries deoxygenated blood - *pulmonary artery*
          Only vein that carries oxygenated blood - *pulmonary vein*
          Largest part of brain - *fore brain*
          Part of brain controlling temperature - *mid brain*
          Part of brain also known as vital knot - *hind brain*`
      }
    },
    {
      type: 'rightOne',
      id: 'oddoneout',
      label: 'Odd one out',
      data: {
        title: 'Odd one out',
        fontSize: '1.3rem',
        noCaps: true,
        text: `Lung, Mouth,  Buccal cavity,  Pharynx  
          Stomach, Nostrils, Nasal cavity,  Pharynx   
          Kidney, Mouth,  Esophagus,  Stomach
          Think,  Smell, Taste, Hear
          Nephron, Cerebrum , Cerebellum, Medulla Oblongata`
      }
    },
    {
      label: 'Choose the best Answer ',
      id: '1000',
      type: 'mcq',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: ' What is the length of the alimentary canal?',
            options: '9-11 m, 3-5 m, 5-6 m,  6-9 m'
          },
          {
            qText: 'Which organ is involved in respiration?',
            options: 'Lungs,  Heart,  Brain'
          },
          {
            qText: 'How many kidneys do we have?',
            options: '2, 3, 1, 4 '
          },
          {
            qText: 'Functional unit of brain is __________.',
            options: 'Neuron, Nephron, Brain stem, Nerves'
          },
          {
            qText: 'Blood is pumped by ___________.',
            options: 'Heart, Kidneys,  Bones'
          }
        ]
      }
    }
  ]
};
