export default {
  label: 'Satellites',
  id: 'satellites',
  list: [
    {
      label: 'Satellites - Reading',
      type: 'passage',
      id: '100',
      data: {
        title: 'Satellites',
        text:
          'Moon is called the natural satellite of Earth, because it revolves around the earth. Apart from moon, there are many man-made satellites that revolve around the earth. Satellites are send to space and put it on an orbit with the help of rockets. \n Man-made satellites helps us in many ways. \n 1. Satellites help in predicting weather. We get forecast about rains and storms because of them. \n 2. They guide us in transportation. They take photos of Earth from high distance and help us in preparing maps. \n 3. They are helpful in information and communication technology. \n 4. They are helpful in studying the resources in ocean. \n In India, ISRO is responsible for sending rockets and satellites to space. ISRO stands for Indian Space Research Organization. Usually rockets are launched from Sriharikota in Andhra Pradesh. \n There are some man-made satellites, in which human beings live, to conduct scientific experiments. They are called space stations. Life in space station is very different from Earth, because there is no gravity in space. So people will keep floating in the space.'
      }
    },
    {
      label: 'Satellites - MCQ',
      id: '200',
      type: 'mcq',
      data: {
        title: 'Multiple Choice Question',
        questions: [
          {
            qText: "_________ is the earth's natural satellite.",
            options: 'Moon, Sun, Space Station'
          },
          {
            qText: 'Satellites of earth orbits around the ________.',
            options: 'Earth, Moon, Sun, Solar System'
          },
          {
            qText:
              'Life in space station is very different from earth, because of lack of ___________.',
            options: 'gravity, food, light, electricity'
          },
          {
            qText: 'People go to space _____________',
            options:
              'to do scientific experiments, for fun and adventure , to collect things from space'
          },
          {
            qText: 'People go to space with the help of a ________. ',
            options: 'rocket, satellite, airplane, hot air balloon'
          }
        ]
      }
    },
    {
      id: '300',
      label: 'True or False',
      type: 'classifySentence',
      data: {
        title: 'True or False',
        types: [
          {
            name: 'True',
            text:
              'Satellites help in predicting weather.\nSatellites help in preparing the map for our earth.\nSatellites helps in Information Technology and communication.'
          },
          {
            name: 'False',
            text:
              'Satellites transport people from one place to another.\nSatellites helps in controlling weather.\nSatellites prevents pollution.'
          }
        ]
      }
    }
  ]
};
