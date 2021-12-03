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
          `We need different facilities like roads, water, electricity, transport, schools and hospitals. A lot of people have to work together to provide these facilities. And we have lot of rules to follow for the facilities to work properly. Government makes common rules into laws. It is the responsibility of the government to make laws and ensure the laws are followed by people. The service what the government provides is known as governance. \n  India follows a democratic form of governance. It means, the people of the country cast their vote and select their representatives. There are different levels of governance. India is the largest democratic country in the world. \n  At country level, we select our Member of Parliament (MP), who goes to Parliament present in New Delhi to represent us. The selected MPs again vote among themselves and elect the Prime Minister. And the elected Prime Minister will pick other ministers. \n Though the President is considered as the head of the government, Prime Minister is the most important person in running the government. \n At state level, the people vote for their Member of Legislative Assembly (MLA), who goes to the Assembly present in their state capital to represent them. Just like how MPs select the Prime Minister of the country, MLAs select the Cheif Minister of the state. \n We also have Local Body election to select our representative at locality level. Children are not allowed to vote. Only people who are above 18 years are allowed to vote. 
          # What is the government?
The government is a group of people who control and make decisions for a country. The government makes laws or rules according to which the country is run. It also ensures that everyone follows these rules A government must function based on a set of rules and guidelines that are laid down in the constitution.
# Branches of the government.
The government has three branches the legislature, the executive and the judiciary. The legislature makes the laws, the executives carries out and enforces the laws, and the judiciary evaluates the laws. The judiciary also punishes those who break the law.
# Levels of government
It is not possible for a single government to look after the entire country. Therefore, there are three levels of govenment in India, local government, state government and the central government.
# Types of government
Democracy: It is the people who give the government the power to take decesions and enforce laws. They do this through elections.
Monarchy: It is the rule of kings and queens. A rulers position in a monarchy is hereditary, that is after the parent,m the child becomes the ruler. All the power is in the hands of the ruler.
Dictatorship: A dictatorship is a government where one person makes all the rules and takes the decisions without consulting anyone. This one person has total control over the administration of the country.`
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
    },
    {
      label: 'Fill in the blanks',
      type: 'matchByDragDrop',
      id: 'drag-drop',
      data: {
        isPractice: false,
        title: 'Drag and drop the words at proper place.',
        styles: {
          fontSize: '1rem',
          dashWidth: 80
        },
        text: `In monarchy, the rulers position is *heriditary*.
        The branch of government that makes the laws is the *legislature*.
        *Monarchy* is the rule of kings and queens.
        The *Supreme* court is the highest court in the land.
        To vote, one must be over *18* yaers old.`
      }
    }
  ]
};
