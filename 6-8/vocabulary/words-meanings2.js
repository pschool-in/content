export default {
    label: 'Words and meaning',
    id: 'words-meaning2',
    lockAfter: 2,
    list: [
        {
            id: 'reading',
            type: 'passage',
            label: 'Words Collection-1',
            data: {
              title: 'Words Collection',
              text: [
                {
                  type: 'html',
                  text: `<b>orator</b> - One who makes a powerful public speech <br>
                  <b>spokesman</b> - One who speaks for others<br>
                  <b> theist</b> : One who believes in the existence of God<br>
                  <b>audience</b>: An assembly of listeners <br>
                  <b>amateur</b>: One who plays for pleasure <hr>`
                 },
                {
                  type: 'html',
                  text: `<b>botany</b> - The science of plant life <br>
                  <b>zoology</b> - Science of the life of animals <br>
                  <b>biography</b> - The life history of a person written by another <br>
                  <b>autobiography</b>: The life history of a person written by himself <br>
                  <b>manuscript</b> - A piece of writing before it is published<br>
                  <b>catalogue</b> - A list of books <hr>`
                },
                
                 {
                  type: 'html',
                  text: ` <b>century</b> -A period of hundred years <br>
                  <b>anniversary</b> : The yearly return of a date <br>
                  <b>fortnight</b> - A period of two weeks <br>
                  <b> simultaneous</b> -Happening at the same time <br>
                  <b>contemporary</b> - A person who lives at the same time as an other <hr>`
                },
                {
                  type: 'html',
                  text: ` <b> monarchy</b> - Government by a king <br>
                  <b>democracy</b> - Government formed by the representatives of the people<br>
                  <b>dictatorship</b> - Government carried on by an absolute ruler<br>
                  <b>illegal</b> - Contrary to law <br>
                  <b>tragedy</b> - A play that ends in death<hr>` 
              },
            ]
            }
          },
          {
            label: 'Match word and meaning',
            type: 'matchByDragDrop',
            id: 'match-meaning1',
            lockAfter: 1,
            commonData: {
              title: 'Drag and drop the words at appropriate places',
              styles: {
                fontSize: '1rem',
                dashWidth: 70
              }
            },
            data: [ 
              `*orator* - One who makes a powerful public speech 
              *tragedy* - A play that ends in death
              * simultaneous* -Happening at the same time 
              *manuscript* - A piece of writing before it is published
              *biography* - The life history of a person written by another
              *amateur*- One who plays for pleasure`,
             
              `*botany* - The science of plant life
               *zoology* - Science of the life of animals 
                *autobiography*- The life history of a person written by himself
                  *audience*- An assembly of listeners
                  *catalogue* - A list of books`,

                 ` *century* -A period of hundred years 
                  *anniversary* - The yearly return of a date 
                  *fortnight* - A period of two weeks
                  * theist* - One who believes in the existence of God
                  *contemporary* - A person who lives at the same time as an other`,

                  ` * monarchy* - Government by a king
                  *democracy* - Government formed by the representatives of the people
                  *dictatorship* - Government carried on by an absolute ruler
                  *illegal* - Contrary to law
                  *spokesman* - One who speaks for others`
            ]
          },
          {
            label: 'Fillup - Words',
            type: 'fillup',
            id: 'meaning1',
            lockAfter: 1,
            commonData: {
              title: 'Drag and drop the words at appropriate places',
              styles: {
                fontSize: '1rem',
                dashWidth: 70
              }
            },
            data: [
              `*orator ()*  One who makes a powerful public speech 
              *spokesman ()* One who speaks for others
              * theist ()* One who believes in the existence of God
              *audience ()* An assembly of listeners 
              *amateur ()* One who plays for pleasure`,
             
              `*botany ()* The science of plant life
                  *zoology ()* Science of the life of animals 
                  *biography ()* The life history of a person written by another
                  *autobiography ()* The life history of a person written by himself
                  *manuscript ()* A piece of writing before it is published
                  *catalogue ()* A list of books`,

                 ` *century ()* A period of hundred years 
                  *anniversary ()* The yearly return of a date 
                  *fortnight ()* A period of two weeks
                  * simultaneous ()* Happening at the same time 
                  *contemporary ()* A person who lives at the same time as an other`,

                  ` * monarchy ()*  Government by a king
                  *democracy ()* Government formed by the representatives of the people
                  *dictatorship ()* Government carried on by an absolute ruler
                  *illegal ()* Contrary to law
                  *tragedy ()* A play that ends in death`
  ]
        },
          {
            id: 'reading',
            type: 'passage',
            label: 'Words Collection-2',
            data: {
              title: 'Words Collection',
              text: [
                {
                  type: 'html',
                  text:`
                  <b>honorary</b> - Performing work without pay <br>
                  <b>illiterate</b> - One who does not know how to read and write <br>
                  <b>orphan</b> - A child whose parents are dead<br>
                  <b>widower</b> - A man whose wife is dead <br>
                  <b>widow</b> -A woman whose husband is dead <hr>`
                },
                {
                  type: 'html',
                text:`<b>fatalist</b> - One who believes in fate<br>
                <b> atheist</b> -One who does not believe in the existence of God <br>
                  <b>library</b> - A room containing many books <br>
                  <b>cemetery</b> - A place for burial of dead bodies <br>
                  <b>extempore</b> - Done without any preparation <hr>`
                },
                {
                  type: 'html',
                text:`
                <b>pessimist</b> - One who takes a dark view of things <br>
                 <b>optimist</b> - One who takes a bright view of things<br>
                 <b>alien</b>-One who resides in a country of which he is not a citizen<br>
                 <b>cannibal</b> -One who eats human flesh <br>
                <b>vegetarian</b> - One who lives on vegetables or plant food <hr>`
                },
                {
                  type: 'html',
                  text:`<b>thermometer</b>-An instrument for measuring temperature <br>
                  <b>mortal</b> - Subject to death <br>
                  <b> parasite</b> - That which lives on another <br>
                  <b>fatal</b> - Resulting in death <br>
                  <b>panacea</b> -A cure of all diseases <hr>`
                },
                ]
              }
            },
            {
              label: 'Match word and meaning',
              type: 'matchByDragDrop',
              id: 'match-meaning2',
              lockAfter: 1,
              commonData: {
                title: 'Drag and drop the words at appropriate places',
                styles: {
                  fontSize: '1rem',
                  dashWidth: 70
                }
              },
              data: [`
              *honorary* - Performing work without pay 
              *illiterate* - One who does not know how to read and write
              *orphan* - A child whose parents are dead
              *widower* - A man whose wife is dead
              *widow* -A woman whose husband is dead`,
              
              `*fatalist* - One who believes in fate
                * atheist* -One who does not believe in the existence of God
                  *library* - A room containing many books
                  *cemetry* - A place for burial of dead bodies
                  *extempore* - Done without any preparation`,
                  `
                *pessimist* - One who takes a dark view of things
                 *optimist* - One who takes a bright view of things
                 *alien*-One who resides in a country of which he is not a citizen
                 *cannibal* -One who eats human flesh
                *vegetarian* - One who lives on vegetables or plant food`,
               
                `*thermometer*-An instrument for measuring temperature
                  *mortal* - Subject to death
                  * parasite* - That which lives on another
                  *fatal* - Resulting in death
                  *panacea* -A cure of all diseases`
              ]
            },
            {
              label: 'Fillup - Words',
              type: 'fillup',
              id: 'meanings2',
              lockAfter: 1,
              commonData: {
                title: 'Drag and drop the words at appropriate places',
                styles: {
                  fontSize: '1rem',
                  dashWidth: 70
                }
              },
              data: [
                `*honorary ()* Performing work without pay 
                *illiterate ()* One who does not know how to read and write
                *orphan ()* A child whose parents are dead
                *widower ()* A man whose wife is dead
                *widow ()* A woman whose husband is dead`,
                
                `*fatalist ()* One who believes in fate
                  * atheist ()* One who does not believe in the existence of God
                    *library ()* A room containing many books
                    *cemetry ()* A place for burial of dead bodies
                    *extempore ()* Done without any preparation`,
                    `
                  *pessimist ()* One who takes a dark view of things
                   *optimist ()* One who takes a bright view of things
                   *alien ()* One who resides in a country of which he is not a citizen
                   *cannibal ()* One who eats human flesh
                  *vegetarian ()* One who lives on vegetables or plant food`,
                 
                  `*thermometer ()* An instrument for measuring temperature
                    *mortal ()* Subject to death
                    * parasite ()* That which lives on another
                    *fatal ()* Resulting in death
                    *panacea ()* A cure of all diseases`
    ]
          },
            {
              id: 'reading',
              type: 'passage',
              label: 'Words Collection-3',
              data: {
                title: 'Words Collection',
                text: [
                  {
                    type: 'html',
                    text:`
                    <b>invincible</b>-That which cannot be conquered<br>
                    <b>audible</b>-Loud enough to be heard<br>
                    <b>inaudible</b>-Not distinct enough to be heard<br>
                    <b>edible</b>-Fit to be eaten<br>
                    <b>inedible</b>- Unfit for human consumption<hr>`
                  },
                  {
                    type: 'html',
                    text:`<b>eligible</b>-Fit to be chosen or selected<br>
                    <b>ineligible</b>-Not having the qualities of being chosen<br>
                    <b>legible</b>-Writing that is easy to read<br>
                    <b>illegible</b>-Writing that is easy to decipher<br>
                    <b>ineffaceable</b>-That which cannot be rubbed out or blotted out<hr>`
                  },
                  {
                    type: 'html',
                    text:`<b>literate</b>-Able to read<br>
                    <b>illiterate</b>-Unable to read<br>
                    <b>legitimate</b>-Born of married parents<br>
                    <b>illegitimate</b>-Born of unmarried parents<br>
                    <b>incorrigible</b>-Incapable of being redeemed from evil, i.e., beyond correction<hr>
                    `
                  },
                  {
                    type: 'html',
                    text:`<b>cosmopolitan</b> - of or from all parts of the world <br>
                    <b>migrate</b>-To move from one country to another<br>
                    <b>expatriate</b>-To banish from one's country<br>
                    <b>repatriate</b>-To send back a person to his own country<br>
                    <b>Emigrant</b>-One who leaves his country to settle in another<br>
                    <b>immigrant</b>-One who comes into a foreign country to settle there<hr>`
                  }
                  ]
                }
              },  
              {
                label: 'Match word and meaning',
                type: 'matchByDragDrop',
                id: 'match-meaning3',
                lockAfter: 1,
                commonData: {
                  title: 'Drag and drop the words at appropriate places',
                  styles: {
                    fontSize: '1rem',
                    dashWidth: 70
                  }
                },
                data: [`
                *invincible*-That which cannot be conquered
                *audible*-Loud enough to be heard
                *inaudible*-Not distinct enough to be heard
                *edible*-Fit to be eaten
                *inedible*- Unfit for human consumption`,
                
                `*eligible*-Fit to be chosen or selected
                    *ineligible*-Not having the qualities of being chosen
                    *legible*-Writing that is easy to read
                    *illegible*-Writing that is easy to decipher
                    *ineffaceable*-That which cannot be rubbed out or blotted out`,

                    `*literate*-Able to read
                    *illiterate*-Unable to read
                    *legitimate*-Born of married parents
                    *illegitimate*-Born of unmarried parents
                    *incorrigible*-Incapable of being redeemed from evil, i.e., beyond correction`,

                    `*cosmopolitan* - of or from all parts of the world
                    *migrate*-To move from one country to another
                    *expatriate*-To banish from one's country
                    *repatriate*-To send back a person to his own country
                    *Emigrant*-One who leaves his country to settle in another
                    *immigrant*-One who comes into a foreign country to settle there`
  
                ]
              },
              {
                  label: 'Fillup - Words',
                  type: 'fillup',
                  id: 'meanings3',
                  lockAfter: 1,
                  commonData: {
                    title: 'Drag and drop the words at appropriate places',
                    styles: {
                      fontSize: '1rem',
                      dashWidth: 70
                    }
                  },
                  data: [
                   ` *invincible ()* That which cannot be conquered
                    *audible  ()* Loud enough to be heard
                    *inaudible ()* Not distinct enough to be heard
                    *edible ()* Fit to be eaten
                    *inedible ()* Unfit for human consumption`,
                    
                    `*eligible ()* Fit to be chosen or selected
                        *ineligible ()* Not having the qualities of being chosen
                        *legible ()* Writing that is easy to read
                        *illegible ()* Writing that is easy to decipher
                        *ineffaceable ()* That which cannot be rubbed out or blotted out`,
    
                        `*literate ()* Able to read
                        *illiterate ()* Unable to read
                        *legitimate ()* Born of married parents
                        *illegitimate ()* Born of unmarried parents
                        *incorrigible ()* Incapable of being redeemed from evil, i.e., beyond correction`,
    
                        `*cosmopolitan ()* of or from all parts of the world
                        *migrate ()* To move from one country to another
                        *expatriate ()* To banish from one's country
                        *repatriate ()* To send back a person to his own country
                        *Emigrant ()* One who leaves his country to settle in another
                        *immigrant ()* One who comes into a foreign country to settle there`
        ]
              },
        ]
      };
  
