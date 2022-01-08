export default {
  label: 'Satellites',
  id: 'satellites',
  list: [
    {
      label: 'Satellites - Reading',
      type: 'passage',
      id: 'notes',
      data: {
        title: 'Satellites',
        text: `Moon is called the natural satellite of Earth, because it revolves around the earth. Apart from moon, there are many man-made satellites that revolve around the earth. Satellites are send to space and put it on an orbit with the help of rockets. 
Man-made satellites helps us in many ways. 
1. Satellites help in predicting weather. We get forecast about rains and storms because of them. 
2. They guide us in transportation. They take photos of Earth from high distance and help us in preparing maps. 
3. They are helpful in information and communication technology. 
4. They are helpful in studying the resources in ocean. 
In India, ISRO is responsible for sending rockets and satellites to space. ISRO stands for Indian Space Research Organization. Usually rockets are launched from Sriharikota in Andhra Pradesh. 
There are some man-made satellites, in which human beings live, to conduct scientific experiments. They are called space stations. Life in space station is very different from Earth, because there is no gravity in space. So people will keep floating in the space.`
      }
    },

    {
      label: 'Satellites - MCQ',
      id: 'mcq',
      type: 'mcq',
      data: {
        title: 'Multiple Choice Question',
        questions: [
          {
            qText: "_________ is the Earth's natural satellite.",
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
      id: 'true-false',
      label: 'True or False',
      type: 'classifySentence',
      data: {
        title: 'True or False',
        types: [
          {
            name: 'True',
            text: `Satellites help in predicting weather.
Satellites help in preparing the map for our earth.
Satellites helps in Information Technology and communication.`
          },
          {
            name: 'False',
            text: `Satellites transport people from one place to another.
Satellites helps in controlling weather.
Satellites prevents pollution.`
          }
        ]
      }
    },
    {
      id: 'match',
      label: 'Match the following',
      type: 'match',
      data: {
        fontSize: '1rem',
        text: `Rocket, Launch
Scientists, Experiments
Space, No Gravity
Moon, Nature
Predicting, Weather
Information, Technology`,
        title: 'Match the related words.'
      }
    },
    {
      label: 'Drag and Drop',
      type: 'matchByDragDrop',
      id: 'drag-drop',
      data: {
        isPractice: false,
        title: 'Drag and drop the given words at the right blanks.',
        styles: {
          dashWidth: 100
        },
        text: `Moon is a *natural* satellite. It *revolves* around the Earth.
There is no *gravity* in space.
Satellites are send through a *rocket*. They are helpful in studying *weather*.`
      }
    }
  ]
};
