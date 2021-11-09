export default {
  label: 'Solar System',
  id: 'solar-system',
  list: [
    {
      label: 'Solar System - Reading',
      type: 'passage',
      data: {
        title: 'Solar System',
        text:
          'We  can  see  numerous  stars  in  a  clear  sky at night.  The  sun  we  see  everyday  is  also a star and it is the  nearest  star  to  the earth.  The planets  revolve  around  the  sun  at  different  distances  in different orbits.  This  is  called solar system. \n The sun is a ball of fire. It is very  hot.  Living  organisms  cannot  exist  on the earth  in the absence  of  the  sun. \n 1. Mercury is the smallest and the nearest planet to the sun. \n 2. Venus is the second planet. It is  very hot.  It  is  the  brightest  planet. \n 3. Earth is the third  planet and it  has  air  and  water.  It  supports  life and we all live here. \n 4. Mars  is  the  fourth  planet. It  is  red  in  colour. \n 5. Jupiter  is the fifth planet. It is the largest planet in the  solar  system. \n 6. Saturn is the sixth planet. There are big rings around it. \n 7. Uranus  is the seventh planet. It is made up of gases. It  also  has  rings. It  is  the  coldest  planet. \n 8. Neptune is  the  eighth  planet. It  is  bluish  green in  colour  and  it  is  surrounded  by  clouds. \n 9. Upto 2006, Pluto was considered as the ninth planet. Since  it does not have the  properties of a  planet,  it  is  now  regarded  as  a  dwarf  planet. '
      },
      id: '100'
    },
    {
      label: 'Planets',
      type: 'sorting',
      data: {
        title:
          'Sort the planets based on its distance from sun. (Nearest planet at top)',
        text: 'Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune'
      },
      id: '200'
    },
    {
      label: 'Solar System - Fillup',
      type: 'matchByDragDrop',
      data: {
        isPractice: false,
        title: 'Drag and drop the words at proper places.',
        styles: {
          fontSize: '1rem',
          dashWidth: 70
        },
        text:
          '*Sun* is the center of solar system. \n *Jupiter* is the biggest planet. \n *Saturn* has a big ring around it. \n *Venus* is the bright and hottest planet. \n *Uranus* is the coldest planet. \n *Pluto* is a dwarf planet.'
      },
      id: '300'
    }
  ]
};
