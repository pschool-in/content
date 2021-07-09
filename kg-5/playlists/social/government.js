export default {
  label: 'Our Government',
  id: 'government',
  list: [
    {
      label: 'Our Government - Reading',
      id: '100',
      type: 'passage',
      data: {
        title: 'Our Government',
        text:
          'We need different facilities like roads, water, electricity, transport, schools and hospitals. A lot of people have to work together to provide these facilities. And we have lot of rules to follow for the facilities to work properly. Government makes common rules into laws. It is the responsibility of the government to make laws and ensure the laws are followed by people. The service what the government provides is known as governance. \n  India follows a democratic form of governance. It means, the people of the country cast their vote and select their representatives. There are different levels of governance. India is the largest democratic country in the world. \n  At country level, we select our Member of Parliament (MP), who goes to Parliament present in New Delhi to represent us. The selected MPs again vote among themselves and elect the Prime Minister. And the elected Prime Minister will pick other ministers. \n Though the President is considered as the head of the government, Prime Minister is the most important person in running the government. \n At state level, the people vote for their Member of Legislative Assembly (MLA), who goes to the Assembly present in their state capital to represent them. Just like how MPs select the Prime Minister of the country, MLAs select the Cheif Minister of the state. \n We also have Local Body election to select our representative at locality level. Children are not allowed to vote. Only people who are above 18 years are allowed to vote. '
      }
    },
    {
      label: 'Our Government - MCQ',
      id: '200',
      type: 'mcq',
      data: {
        title: 'Multiple Choice Question',
        questions: [
          {
            qText: 'Which is the largest democracy in the world?',
            options: 'India, China, Russia, USA'
          },
          {
            qText: 'Who is the head of the government?',
            options: 'President, Prime Minister, Chief Minister , Governor'
          },
          {
            qText: 'The Prime Minster is elected by __________.',
            options: 'Members of Parliament, President, People of the country'
          },
          {
            qText: 'We are a democratic country because ________.',
            options:
              'we select our representive, we select our Governor, we select our President'
          },
          {
            qText: 'Who can vote in election?',
            options: 'above 18 years old, everyone, who have passport'
          }
        ]
      }
    },
    {
      label: 'Responsibilities of Government',
      id: '300',
      type: 'group',
      data: {
        title:
          'Classify whether the government is responsible or not responsible for the below.',
        types: [
          {
            name: 'Responsible',
            text: 'school, hospital, roads, electricity'
          },
          {
            name: 'Not responsible',
            text: 'breakfast, homework, garden, picnic'
          }
        ]
      }
    }
  ]
};
