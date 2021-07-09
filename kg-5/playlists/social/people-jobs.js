export default {
  label: 'People and Jobs',
  id: 'people-jobs',
  list: [
    {
      label: 'People and Jobs - Match',
      type: 'matchByDragDrop',
      id: '100',
      data: {
        isPractice: false,
        title: 'Drag and drop to match People and Jobs.',
        styles: {
          fontSize: '1rem',
          dashWidth: 60
        },
        text:
          'A *fireman* puts out fire. \n A *butcher* cuts meat and sell. \n A *policeman* prevents crime. \n A *veterinary doctor* looks after sick animal. \n A *postman* delivers letter to our house. \n A *tailor* makes clothes'
      }
    },
    {
      label: 'People and Workplace',
      type: 'matchByDragDrop',
      id: '200',
      data: {
        isPractice: false,
        title: 'Drag and drop to match People and workplace.',
        styles: {
          fontSize: '1rem',
          dashWidth: 80
        },
        text:
          'Doctor → *Hospital* \n  Teacher → *School* \n Cashier → *Bank* \n Chef → *Restaurant* \n Lawyer → *Court* \n  Photographer → *Studio*'
      }
    },
    {
      label: 'People and Tools',
      type: 'matchByDragDrop',
      id: '300',
      data: {
        isPractice: false,
        title: 'Drag and drop to match People and the tools they use.',
        styles: {
          fontSize: '1rem',
          dashWidth: 80
        },
        text:
          'Doctor → *Stethoscope* \n  Painter → *Brush* \n Fisherman → *Net*  \n Photographer → *Camera* \n Butcher → *Knife* \n  Farmer → *Plough* \n  Woodcutter → *Axe*'
      }
    },
    {
      label: 'Profession - MCQ',
      type: 'mcq',
      id: '400',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: '________ cuts the meat and sells it in their shop.',
            options: 'Butcher,Barber,Plumber,Chef'
          },
          {
            qText: '_________ makes wooden doors, windows and furnitures.',
            options: 'Carpenter,Mechanic,Waiter,Mason'
          },
          {
            qText: 'We go to _________ when we have toothache.',
            options: 'Dentist,Doctor,Nurse, Chemist'
          },
          {
            qText: '__________ prevents crime.',
            options: 'Police, Lawyer, Fireman'
          },
          {
            qText: '__________ drives a bus.',
            options: 'Driver, Pilot, Captain'
          },
          {
            qText: 'Who is the backbone of our country?',
            options: 'Farmer, Lawyer, Scientist, Police'
          },
          {
            qText: 'Sherlock Holmes is a famous _________ in stories.',
            options: 'Detective, Actor , Teacher, Police'
          }
        ]
      }
    },
    {
      label: 'Profession - MCQ - 2',
      id: '500',
      type: 'mcq',
      data: {
        title: 'Multiple Choice Questions',
        questions: [
          {
            qText: 'Where can we buy a bouquet ?',
            options: 'florists, toy shop, bakery'
          },
          {
            qText: 'Where can we buy a book ?',
            options: 'book stall, chemist, green grocers'
          },
          {
            qText: 'Where can we buy a plane ticket ?',
            options: 'travel agency, book stall, dairy'
          },
          {
            qText:
              'Whom would your father approach when he has to get his car repaired?',
            options: 'mechanic, cobbler, plumber'
          },
          {
            qText:
              'Whom would your father approach if there is a leaking pipe?',
            options: 'plumber, mechanic, cobbler, carpenter'
          }
        ]
      }
    }
  ]
};
