export default {
  id: 'community-life-4',
  label: 'Community Life-2',
  pdf: '',
  lockAfter: 4,
  list: [
    {
      label: 'Municipalities and Corporation',
      type: 'passage',
      id: 'municipalities-corporation',
      data: {
        title: 'Municipalities and Corporation',
        text: `# Municipalities and Corporation
Municipality is a form of local government in a small town where 50,000 to 1,00,000 people live. This is divided into several wards. The head of the municipality is called the President. The President and the members of the Municipalities are elected by the people directly. The tenure of the members is five years. One of the members of the municipality is selected as Vice-president.
The following also comes under Municipalities:
1.	Townships
2.	Cantonment Boards 
3.	Notified area committee.
# Duties of Municipality
1.	Constructing library and its maintenance.
2.	Maintaining local market.
3.	Providing drinking water facilities.
4.	Constructing roads.
5.	Providing street lamps.
6.	Removing garbage dumps.
# Income of Municipality
Central government and State government provide the money. People also pay in the form of house tax, professional tax, drinking water tax, shop tax, road tax and drainage tax. It also forms the income of Municipality.
# Corporation
Certain Municipalities will be declared by the Government as Corporation based on high population and high revenue.
# Duties of Corporation
The head and the members of Corporation is elected by the people directly. The chairperson of the corporation is called Mayor. He is also called as the father of the Corporation. The Tenure of the members of the Corporation is 5 years. The Indian administrative service officers and similar rank holders are appointed by the government to the Corporation. Most of the Urban areas have Corporation.`
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
            text: `Municipality is divided into wards.
Main income of municipality is from tax.`
          },
          {
            name: 'False',
            text: `President is the chairperson of a corporation.
Mayor is the head of municipality.`
          }
        ]
      }
    },
    {
      label: 'Fill in the blanks',
      type: 'matchByDragDrop',
      id: 'drag-drop2',
      data: {
        title: 'Drag and drop the given words at the right blanks.',
        text: `*Municipality* is a form of local government in a small town where 50,000 to 1,00,000 people live.
The head of the municipality is called the *President*.
The chairperson of the corporation is called *Mayor*.
Certain Municipalities will be declared by the Government as *Corporation* based on high population and high revenue.
One of the members of the municipality is selected as *Vice-president*.`
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
            qText: 'Who is the head of the municipality?',
            options: 'President, Mayor, Collector'
          },
          {
            qText: 'Who is the chairperson of the corporation?',
            options: 'Mayor, President, Collector'
          },
          {
            qText: 'What is the tenure of the members of the Corporation?',
            options: '5 years, 10 years, 7 years'
          }
        ]
      }
    }
  ]
};
