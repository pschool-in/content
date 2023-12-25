export default {
  label: 'Words and meaning - 6',
  id: 'word-meaning-6-2',
  lockAfter: 2,
  list: [
    {
      id: 'notes',
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
          }
        ]
      }
    },
    {
      label: 'Match word and meaning',
      type: 'matchByDragDrop',
      id: 'match',
      lockAfter: 1,
      commonData: {
        title: 'Drag and drop the words at appropriate places',
        fontSize: '1rem'
      },

      data: [
        `*tragedy* - A play that ends in death
*simultaneous* -Happening at the same time 
*manuscript* - A piece of writing before it is published
*biography* - The life history of a person written by another
*fortnight* - A period of two weeks`,

        `*amateur*- One who plays for pleasure
*anniversary* - The yearly return of a date 
*audience*- An assembly of listeners
*orator* - One who makes a powerful public speech 
*catalogue* - A list of books`,

        `*century* -A period of hundred years 
*botany* - The science of plant life
*dictatorship* - Government carried on by an absolute ruler 
*theist* - One who believes in the existence of God
*contemporary* - A person who lives at the same time as an other`,

        `*autobiography*- The life history of a person written by himself
*monarchy* - Government by a king
*democracy* - Government formed by the representatives of the people
*zoology* - Science of the life of animals 
*illegal* - Contrary to law
*spokesman* - One who speaks for others`
      ]
    },
    {
      label: 'Fillup - Words',
      type: 'matchByDragDrop',
      id: 'fillup',
      lockAfter: 1,
      commonData: {
        title: 'Drag and drop the words at appropriate places',
        fontSize: '1rem'
      },
      data: [
        `He cancelled many unnecessary words in his *manuscript*
        There will be *simultaneous* transmission of the concert on TV and radio
        *Dictatorship* stands for the denial of individual freedom
        The telephone and the gramophone were *contemporary*
        KidzWorld offers a *biography* on Walt Disney`,

        `The *catalogue* gives a full description of each product
        *Theists* say that God is eternally existent
         Living standards have improved over the last *century*
        The *spokesman* finally disclosed the facts to the press
        In his *autobiography*  Mandela describes his life during captivity`,

        `I am studying about insects in *zoology*
        He moulded a talented *amateur* into a brilliant actor.
         I prefer comedy to *tragedy*
        It's *illegal* to drive through a red light
        They were also allowed to report to police once every *fortnight*`,

        `The *monarchy* in England plays an important role in British culture
        A free press is fundamental to *democracy*
        The *orator* put forth his views by fits and starts
        During his travels, he developed a keen interest in *botany*        
        The *audience* began clapping and cheering
        The bank celebrates its 100th *anniversary* in December`
      ]
    },

    {
      id: 'notes-2',
      type: 'passage',
      label: 'Words Collection-2',
      data: {
        title: 'Words Collection',
        text: [
          {
            type: 'html',
            text: `
<b>honorary</b> - Performing work without pay <br>
<b>illiterate</b> - One who does not know how to read and write <br>
<b>orphan</b> - A child whose parents are dead<br>
<b>widower</b> - A man whose wife is dead <br>
<b>widow</b> -A woman whose husband is dead <hr>`
          },
          {
            type: 'html',
            text: `<b>fatalist</b> - One who believes in fate<br>
<b> atheist</b> -One who does not believe in the existence of God <br>
<b>library</b> - A room containing many books <br>
<b>cemetery</b> - A place for burial of dead bodies <br>
<b>extempore</b> - Done without any preparation <hr>`
          },
          {
            type: 'html',
            text: `
<b>pessimist</b> - One who takes a dark view of things <br>
<b>optimist</b> - One who takes a bright view of things<br>
<b>alien</b>-One who resides in a country of which he is not a citizen<br>
<b>cannibal</b> -One who eats human flesh <br>
<b>vegetarian</b> - One who lives on vegetables or plant food <hr>`
          },
          {
            type: 'html',
            text: `<b>thermometer</b>-An instrument for measuring temperature <br>
<b>mortal</b> - Subject to death <br>
<b> parasite</b> - That which lives on another <br>
<b>fatal</b> - Resulting in death <br>
<b>panacea</b> -A cure of all diseases <hr>`
          }
        ]
      }
    },
    {
      label: 'Match word and meaning',
      type: 'matchByDragDrop',
      id: 'match-2',
      lockAfter: 1,
      commonData: {
        title: 'Drag and drop the words at appropriate places',
        fontSize: '1rem',
        dashWidth: 70
      },
      data: [
        `
*honorary* - Performing work without pay 
*illiterate* - One who does not know how to read and write
*orphan* - A child whose parents are dead
*widower* - A man whose wife is dead
*widow* -A woman whose husband is dead`,

        `*fatalist* - One who believes in fate
* atheist* -One who does not believe in the existence of God
*library* - A room containing many books
*cemetery* - A place for burial of dead bodies
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
      type: 'matchByDragDrop',
      id: 'fillup-2',
      lockAfter: 1,
      commonData: {
        title: 'Drag and drop the words at appropriate places',
        fontSize: '1rem',
        dashWidth: 70
      },
      data: [
        `The *cemetery* is surrounded by indigenous plants and trees
        An *optimist* is someone who is hopeful about the future
        An *atheist* is a person who believes that there is no God
        As a *fatalist*, the woman refused to believe that luck
        Many diseases are caused by *parasites*`,

        `At the audition, the actors were asked to perform *extempore*
A *pessimist* is someone who thinks that bad things are going to happen
Technology is not a *panacea* for all our problems
The *thermometer* shows the temperature in Celsius and Fahrenheit
If your wife dies, they call you a *widower*`,

        `I have heard the *cannibal* tribe in stories
She received an *honorary* degree from Harvard
Hepatitis is a potentially *fatal* disease
His father was an *illiterate* farm worker
The professor donated his books to the *library*`,

        `He was an *orphan* and lived with his uncle 
A *widow* pursues her dream of becoming a singer
When I first went to New York, it all felt very *alien* to me
*vegetarians* are people who don't eat meat, poultry, or seafood
He received a *mortal* wound soon after the battle began`
      ]
    },
    {
      id: 'notes-3',
      type: 'passage',
      label: 'Words Collection-3',
      data: {
        title: 'Words Collection',
        text: [
          {
            type: 'html',
            text: `
<b>invincible</b>-That which cannot be conquered<br>
<b>audible</b>-Loud enough to be heard<br>
<b>inaudible</b>-Not distinct enough to be heard<br>
<b>edible</b>-Fit to be eaten<br>
<b>inedible</b>- Unfit for human consumption<hr>`
          },
          {
            type: 'html',
            text: `<b>eligible</b>-Fit to be chosen or selected<br>
<b>ineligible</b>-Not having the qualities of being chosen<br>
<b>legible</b>-Writing that is easy to read<br>
<b>illegible</b>-Writing that is easy to decipher<br>
<b>ineffaceable</b>-That which cannot be rubbed out or blotted out<hr>`
          },
          {
            type: 'html',
            text: `<b>literate</b>-Able to read<br>
<b>legitimate</b>-Born of married parents<br>
<b>illegitimate</b>-Born of unmarried parents<br>
<b>incorrigible</b>-Incapable of being redeemed from evil, i.e., beyond correction<hr>
`
          },
          {
            type: 'html',
            text: `<b>cosmopolitan</b> - of or from all parts of the world <br>
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
      id: 'match-3',
      lockAfter: 1,
      commonData: {
        title: 'Drag and drop the words at appropriate places',
        fontSize: '1rem',
        dashWidth: 70
      },
      data: [
        `
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
      type: 'matchByDragDrop',
      id: 'fillup-3',
      lockAfter: 1,
      commonData: {
        title: 'Drag and drop the words at appropriate places',
        fontSize: '1rem',
        dashWidth: 70
      },
      data: [
        `Everyone makes mistakes, but few are *incorrigible*
        Temporary workers are *ineligible* for the pension scheme
        *Edible* wild herbs kept us from dying of starvation
        The election was dismissed as *illegitimate* by the opposition
        Some players see injuring their opponent as a *legitimate* tactic`,

        `The shot was clearly *audible* in the silence
        Only 40% of *eligible* voters cast their ballots
There is an *ineffaceable* mark on my skirt
Both parents were *literate* in English
People *migrate* to find work`,

        `Her handwriting was clearly *legible*
The *emigrant* found his livelihood almost immediately on arrival
The writer is an *expatriate* artist living in Singapore
London has always been a *cosmopolitan* city
An agreement between the countries enables companies to *repatriate* their profits freely`,

        `Many teachers are clueless about the needs of *immigrant*  students
They took an *invincible* lead in the chase for the championship
The noise of the wind made her cries *inaudible*
These chemicals make the fruit *inedible*
Your handwriting is so *illegible* that nobody can read it`
      ]
    }
  ]
};
