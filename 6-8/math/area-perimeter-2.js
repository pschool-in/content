export default {
  id: 'area-perimeter-2',
  label: 'Area and Perimeter',
  list: [
    {
      type: 'numberInput',
      id: 'perimeter',
      label: 'Find the Perimeter',
      data: {
        title: 'Find the perimeter of the below figure.',
        type: 'word-problem',
        answerBox: false,
        list: [
          {
            title:
              'Two regular pentagons are joint together as shown below. Find its perimeter.',
            svg: {
              width: 250,
              height: 200,
              paths: [
                'M 80 16 L 131 54 L 110 113 L 48 112 L 30 52 L 80 16 M 131 54 L 194 56 L 211 116 L 161 151 L 110 114 '
              ],
              texts: [{ str: '5 m', x: 198, y: 70, rot: 71 }]
            },
            text: `No. of sides at the boundary = ?0
            Length of each side = ?1 m
            Perimeter = ?2 m
            8, 5, 40`
          },
          {
            title:
              'Two regular hexagons of sides measuring 6 cm are joint together as shown below. Find its perimeter.',
            svg: {
              width: 250,
              height: 150,
              paths: [
                'M 84 11 L 131 33 L 133 83 L 84 111 L 35 86 L 33 35 L 84 11 M 182 9 L 229 31 L 231 81 L 182 109 L 133 84 L 131 33 L 182 9'
              ]
            },
            text: `No. of sides at the boundary = ?0
            Length of each side = ?1 cm
            Perimeter = ?2 cm
            10, 6, 60`
          },
          {
            title:
              'Three regular hexagons of sides measuring 4 cm are joint together as shown below. Find its perimeter.',
            svg: {
              width: 250,
              height: 200,
              paths: [
                'M 84 11 L 131 33 L 133 83 L 84 111 L 35 86 L 33 35 L 84 11 M 182 9 L 229 31 L 231 81 L 182 109 L 133 84 L 131 33 L 182 9 M 182 109 L 185 160 L 136 188 L 87 163 L 84 111 '
              ]
            },
            text: `No. of sides at the boundary = ?0
            Length of each side = ?1 cm
            Perimeter = ?2 cm
            12, 4, 48`
          },
          {
            title:
              'The shape shown is a square with four equilateral triangles drawn on its four sides. If the side of the square is 8 cm, find the perimeter of the figure.',
            svg: {
              width: 250,
              height: 240,
              paths: [
                'M 101 19 L 138 76 H 65 Z M 197 113 L 138 150 L 138 76 Z M 102 209 L 65 151 L 138 150 Z M 7 114 L 65 77 L 65 151 Z '
              ]
            },
            text: `No. of sides at the boundary = ?0
            Length of each side = ?1 cm
            Perimeter = ?2 cm
            8, 8, 64`
          },
          {
            title:
              'Five equilateral triangles of side length 6 cm are combined to form a figure as given below. Find its perimeter.',
            svg: {
              width: 300,
              height: 160,
              paths: [
                'M 54 24 L 98 99 H 13 Z M 139 24 L 183 99 H 98 Z M 224 24 L 268 99 H 183 Z M 224 24 L 54 24'
              ]
            },
            text: `No. of sides at the boundary = ?0
            Length of each side = ?1 cm
            Perimeter = ?2 cm
            7, 6, 42`
          },
          {
            title:
              'In below figure find the change in perimeter if side length of each smaller square is 2 cm. (Olympiad)',
            svg: {
              width: 320,
              height: 150,
              paths: [
                'M 15 15 H 115 V 115 H 15 Z M 40 15 V 115 M 65 15 V 115 M 90 15 V 115 M 15 40 H 115 M 15 65 H 115 M 15 90 H 115',
                'M 200 40 H 300 V 90 H 200 Z M 225 40 V 90 M 250 40 V 90 M 275 40 V 90 M 200 65 H 300',
                'M 136 60 H 158 V 52 L 173 64 L 158 77 V 68 H 136 V 68 Z'
              ]
            },
            text: `For the first figure,
            No. of small square sides at the boundary = ?0
            For the second figure,
            No. of small square sides at the boundary = ?1
            Difference in the no. of sides = ?2
            Length of each side = ?3 cm
            Difference in perimeter = ?4 cm
            16, 10, 6, 2, 12`
          },
          {
            title:
              'Find the change in perimeter from first figure to second figure if the side length of each small square is 4 cm (Olympiad).',
            svg: {
              width: 320,
              height: 150,
              paths: [
                'M 15 15 H 115 V 115 H 15 Z M 40 15 V 115 M 65 15 V 115 M 90 15 V 115 M 15 40 H 115 M 15 65 H 115 M 15 90 H 115',
                'M 200 40 H 300 V 90 H 200 Z M 225 40 V 90 M 250 40 V 90 M 275 40 V 90 M 200 65 H 300',
                'M 275 15 L 275 115 L 225 115 L 225 15 Z M 275 40 L 225 40 M 275 65 L 225 65 M 275 90 L 225 90 M 250 15 L 250 115',
                'M 136 60 H 158 V 52 L 173 64 L 158 77 V 68 H 136 V 68 Z'
              ]
            },
            text: `For the first figure,
            No. of small square sides at the boundary = ?0
            For the second figure,
            No. of small square sides at the boundary = ?1
            Difference in the no. of sides = ?2
            Length of each side = ?3 cm
            Difference in perimeter = ?4 cm
            16, 16, 0, 4, 0`
          }
        ]
      }
    },
   
    {
      id: 'mcq',
      label: 'Find the right option',
      type: 'mcq',
      data: {
        title: 'Find the right option.',
        questions: [
          {
            qText: 'Perimeter of a regular pentagon = ',
            options: `5 x Length of a side
            6 x Length of a side
            4 x Length of a side
            3 x Length of a side`
          },
          {
            qText:
              'Side length of square is the first multiple of 3. Find its perimeter.',
            options: `12 units, 24 units, 36 units, 9 units`
          }
        ]
      }
    }
  ]
};
