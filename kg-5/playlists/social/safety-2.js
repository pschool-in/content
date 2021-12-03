export default {
    id: 'safety-2',
    label: 'Safety 2',
    lockAfter: 4,
    list: [
      {
        id: 'notes',
        label: 'Safety',
        type: 'passage',
        data: {
          text: `# Safety while using electricity
          1. Never put your fingers or anything into a plug socket
          2. Never fly kites near power lines, always find open space
          3. If you see a broken wire, don’t touch it and tell a parent
          4. Never leave devices plugged in and charging while you sleep
          5. Don't climb on power poles
          6. Obey warning signs
          7. Don’t overload sockets or extension plugs or cables (you could start a fire!).
          8. Don’t put electrical objects on a wobbly surface.
          9. Make sure there aren’t any cables where people walk.
          10. Turn off electrical objects by the switch and then unplug.
          11. Make sure cables are not caught or knotted on furniture or chair legs.
          12. Keep water, juice, or any other types of liquid away from electronics.
          13. Don’t touch electrical objects with wet hands.
          14. Don’t use electrical objects in the bathroom.
          # Safety on playground
1. Inform your parents before going outdoors to play.
2. Land on your feet while jumping. Avoid falling on the knees.
3. Wear comfortable clothes that can not get stuck or trapped in slides and swings.
4. Never push other children or cause any harm.
5. If there are many children playing on the same slide or swing, wait patiently for your turn.
6. Do not go too close to the swing when someone is using it.
7. Never jump of a moving swing and hold onto the chains with both hands.
8. If you are playing in the school ground, do not leave the area without teachers permission.`,
          title: 'Electric Safety'
        }
      },
      {
        label: 'Electric Safety - Fillup',
        type: 'matchByDragDrop',
        id: 'drag-drop',
        data: {
          isPractice: false,
          title: 'Drag and drop the words at proper place.',
          styles: {
            fontSize: '1rem',
            dashWidth: 80
          },
          text: `Make sure there aren’t any *cables* where people walk.
          Turn *off* electrical objects by the switch and then unplug.
          Keep water, juice, or any other types of *liquid* away from electronics.
          Don’t touch electrical objects with *wet* hands.
          Don’t use electrical objects in the *bathroom*.`
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
              text: `Don’t touch electrical objects with wet hands.
              Don’t use electrical objects in the bathroom.
              Never put your fingers or anything into a plug socket.`
            },
            {
              name: 'False',
              text: `Don't obey warning signs.
              If you see a broken wire, handle it yourself.
              We can leave devices charging overnight.`
            }
          ]
        }
      },
      {
        label: 'Fill in the blanks',
        type: 'matchByDragDrop',
        id: 'drag-drop2',
        data: {
          isPractice: false,
          title: 'Drag and drop the words at proper place.',
          styles: {
            fontSize: '1rem',
            dashWidth: 80
          },
          text: `Never *push* other children or cause any harm.
          Do not go too *close* to the swing when someone is using it.
          Inform your *parents* before going outdoors to play.
          Land on your *feet* while jumping.`
        }
      }
    ]
  };
  