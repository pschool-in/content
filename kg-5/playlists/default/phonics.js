export default {
  label: 'Phonics',
  id: 'phonics',
  img: 'vocabulary',
  list: [
    {
      id: '100',
      type: 'maze',
      label: 'க - வரிசை',
      data: {
        title:
          'க - வரிசை எழுத்துக்களை இணைத்து  நமது குரங்கு நண்பருக்கு வாழைபழத்தை  அடைய வழி காட்டுக.',
        start: 'monkey',
        target: 'banana',
        color: '#c05252',
        startPt: {
          x: 0,
          y: 5
        },
        endPt: {
          x: 3,
          y: 0
        },
        size: 50,
        fills: `ஞ,கி,கே,க,தெ,லா
சி,கு,சே,சு,டெ,பி
லா,க,கூ,கே,வா,மீ
டெ,சு,த,கோ,ழெ,ஙெ
சே,வா,மீ,கொ,பி,சி
கா,கெ,க,கு,ஞே,தெ`,
        table: `0,1,1,1,0,0
0,1,0,0,0,0
0,1,1,1,0,0
0,0,0,1,0,0
0,0,0,1,0,0
1,1,1,1,0,0`
      }
    },
    {
      id: '200',
      type: 'maze',
      label: 'ச - வரிசை',
      data: {
        title:
          'ச-வரிசை எழுத்துக்களை இணைத்து  நமது நாய் நண்பருக்கு எலும்புத்துண்டை அடைய வழி காட்டுக.',
        start: 'dog',
        target: 'bone',
        color: '#c05252',
        startPt: {
          x: 5,
          y: 5
        },
        endPt: {
          x: 0,
          y: 0
        },
        size: 50,
        fills: `ச,டெ,லா,ளி,னி,யா	
        ச்,க்,யா,வு,கை	,டெ
        சு,கீ,செ,சூ,சி,கீ
        சி,க்,சை,லா,சு,வு
        செ,சூ,சே,ளி,செ,சி
        டெ,வு,னி,லா,கீ,ச்`,

        table: `1,0,0,0,0,0
1,0,0,0,0,0
1,0,1,1,1,0
1,0,1,0,1,0
1,1,1,0,1,1
0,0,0,0,0,1`
      }
    },
    {
      id: '300',
      type: 'maze',
      label: 'ப - வரிசை',
      data: {
        title:
          'ப-வரிசை எழுத்துக்களை இணைத்து  நமது நரி நண்பருக்கு திராச்சை பழத்தை அடைய வழி காட்டுக.',
        start: 'fox',
        target: 'grapes',
        color: '#ffc000',
        startPt: {
          x: 0,
          y: 5
        },
        endPt: {
          x: 5,
          y: 0
        },
        size: 50,
        fills: `ரு,தூ,மெ,யெ,பி,பை
யு,வி,ய,ஙி,ப,ரு
யெ,லா,தீ,மெ	,பு,பெ
பு,பெ,பொ,ண,ய,ப
ப,யு,பை,மா,வி,பொ
பி,ரு,பு,பீ,பூ,பி`,
        table: `0,0,0,0,1,1
0,0,0,0,1,0
0,0,0,0,1,1
1,1,1,0,0,1
1,0,1,0,0,1
1,0,1,1,1,1`
      }
    },
    {
      id: '400',
      type: 'maze',
      label: 'ம - வரிசை',
      data: {
        title:
          'ம-வரிசை எழுத்துக்களை இணைத்து  நமது குரங்கு நண்பருக்கு வாழைபழத்தை  அடைய வழி காட்டுக.',
        start: 'monkey',
        target: 'banana',
        color: '#c05252',
        startPt: {
          x: 0,
          y: 5
        },
        endPt: {
          x: 0,
          y: 0
        },
        size: 50,
        fills: `மீ,ம்,மு,மெ,ழா,பே
        ணி,செ,ஞா,மா,மூ,ழு
மு,மி,ம்,பீ,மீ,யூ
மா,ழா,மூ,மி,மு,டூ
மெ,ழு,பே,யூ,ணி,செ
மீ,ழா,பீ,டூ,ஞா,ழு`,
        table: `1,1,1,1,0,0
0,0,0,1,1,0
1,1,1,0,1,0
1,0,1,1,1,0
1,0,0,0,0,0
1,0,0,0,0,0`
      }
    },
    {
      id: '500',
      type: 'maze',
      label: 'த - வரிசை',
      data: {
        title:
          'த-வரிசை எழுத்துக்களை இணைத்து  நமது பூனை நண்பருக்கு பாலை  அடைய வழி காட்டுக.',
        start: 'cat',
        target: 'milk',
        color: '#c05252',
        startPt: {
          x: 0,
          y: 5
        },
        endPt: {
          x: 2,
          y: 0
        },
        size: 50,
        fills: `ரூ,ளு,தை,தி,தெ,த்
        ந,நீ,நூ,வெ,றூ,தை
        0,0,0,0,து,தி
        நூ,ளு,யி,தெ,தே,ந
        த்,து,தே,தை,றா,றூ
        தி,ந,வெ,ளி,ஞ,நீ`,
        table: `0,0,1,1,1,1
0,0,0,0,0,1
0,0,0,0,1,1
0,0,0,1,1,0
1,1,1,1,0,0
1,0,0,0,0,0`
      }
    },
    {
      id: '600',
      type: 'maze',
      label: 'ன - வரிசை',
      data: {
        title:
          'ன-வரிசை எழுத்துக்களை இணைத்து  நமது நரி நண்பருக்கு திராச்சை பழத்தை அடைய வழி காட்டுக ',
        start: 'fox',
        target: 'grapes',
        color: '#c05252',
        startPt: {
          x: 0,
          y: 5
        },
        endPt: {
          x: 5,
          y: 0
        },
        size: 50,
        fills: `லு,ண,னா,னு,ன,னா
        கா,மே,னே,ணு,ந,ண
        மே,ணு,னை,னு,னூ,ன
        ணு,கா,ண்,மே,லு,னூ
        மே,லு,ளி,னே,ன்,னை
ன்,னே,னெ,னொ,ந,கா`,
        table: `0,0,1,1,1,1
0,0,1,0,0,0
0,0,1,1,1,1
0,0,0,0,0,1
0,0,0,1,1,1
1,1,1,1,0,0`
      }
    },
    {
      label: 'Phonics Collection - 1',
      type: 'phonics',
      id: 'phonics-sound',
      commonData: {
        audio: 'kg-5/phonicsWords.mp3'
      },
      data: [
        {
          microLabel: 's',
          examples:
            'sun, soon, sat, sock, safe, small, set, seven, soft, sauce',
          pos: 0
        },
        {
          microLabel: 'a',
          examples: 'ant, act, and, axe, apple, at, ate, ask, am, any',
          pos: 10
        },
        {
          microLabel: 't',
          examples: 'table, ten, tool, tail, tax, top, toys, tall, ton, two',
          pos: 20
        },
        {
          microLabel: 'i',
          examples: 'it, if, ink, igloo, insect, inch, in, index, ill,ice',
          pos: 30
        },
        {
          microLabel: 'p',
          examples: 'pot, pen, pet, puff, pin, peg, pig, police, pan, put',
          pos: 40
        },
        {
          microLabel: 'n',
          examples: 'net, nill, nip, nib, not, nut, next, nest, nine, nice',
          pos: 50
        }
      ]
    },
    {
      label: 'Phonics Collection - 2',
      type: 'phonics',
      id: 'phonics-microLabel',
      commonData: {
        audio: 'kg-5/phonicsWords-2.mp3'
      },
      data: [
        {
          microLabel: 'c',
          examples: 'cat, cup, cap, can, car coat carrot,crow, call, cut',
          pos: 0
        },
        {
          microLabel: 'e',
          examples:
            'eat, egg, end, east, ear, eel, eleven, enter, extra, elephant',
          pos: 10
        },
        {
          microLabel: 'h',
          examples: 'hot, hen, hat, her, hid, hip, harm, ham, hard, hand,',
          pos: 20
        },
        {
          microLabel: 'r',
          examples: 'rat, red, rest, rod, ring, rip, ram, ran, roll, road',
          pos: 30
        },
        {
          microLabel: 'm',
          examples: 'mat, mad, man, mix, mug, milk, met, mail, map, match',
          pos: 40
        },
        {
          microLabel: 'd',
          examples: 'den, desk, dog, dot, dam, deed, dash, data, dwan, defend',
          pos: 50
        }
      ]
    },
    {
      label: 'Phonics Collection - 3',
      type: 'phonics',
      id: 'phonics-microLabel-1',
      commonData: {
        audio: 'kg-5/phonicsWords-3.mp3'
      },
      data: [
        {
          microLabel: 'g',
          examples: 'goat, get, glow, grow, grass, green, go, gap, gun, gate',
          pos: 0
        },
        {
          microLabel: 'o',
          examples: 'on, old, open, oven, oath, object, offer, oat, off, out',
          pos: 10
        },
        {
          microLabel: 'u',
          examples: 'up, under, fun, but, butter, run, mug, cup, rug, jug',
          pos: 20
        },
        {
          microLabel: 'l',
          examples: 'lot, leg, lap, let, lab, lace, lack, lade, lad, lady',
          pos: 30
        },
        {
          microLabel: 'f',
          examples: 'face, fate, fact, fads, fade, fail, fain, fair, fox, fan',
          pos: 40
        },
        {
          microLabel: 'b',
          examples: 'bag, box, bat, bet, bone, butter, bun, bed, bad, but',
          pos: 50
        }
      ]
    },
    {
      label: 'Phonics Collection - 4',
      type: 'phonics',
      id: 'phonics-microLabel-2',
      commonData: {
        audio: 'kg-5/phonicsWords-4.mp3'
      },
      data: [
        {
          microLabel: 'ai',
          examples: 'paid, laid, said, maid, aim, pain, tail, fail, sail, hail',
          pos: 0
        },
        {
          microLabel: 'j',
          examples: 'jam, jug, jar, jet, jump, jack, jail, jaw, junk, joke',
          pos: 10
        },
        {
          microLabel: 'oa',
          examples:
            'coat, boat, oat, goat, bloat, roar, goal, throat, coach, load ',
          pos: 20
        },
        {
          microLabel: 'ie',
          examples:
            'tie, flie, die, pie, cried, dried, fries, piep, tries, lie',
          pos: 30
        },
        {
          microLabel: 'ee',
          examples: 'beet, feet, meet, see, seed, feed, jeep, free, tree, need',
          pos: 40
        },
        {
          microLabel: 'or',
          examples:
            'born, horn, corn, thorn, for, torch, more, cord, sort, port',
          pos: 50
        }
      ]
    },
    {
      label: 'Phonics Collection - 5',
      type: 'phonics',
      id: 'phonics-microLabel-3',
      commonData: {
        audio: 'kg-5/phonicsWords-5.mp3'
      },
      data: [
        {
          microLabel: 'z',
          examples:
            'zip, zoo, zone, zap, zig-zag, zoom, zest, zinc,  zen, zombie',
          pos: 0
        },
        {
          microLabel: 'w',
          examples: 'wet, win, was, work, wok, worm, web, woke, whale, which',
          pos: 10
        },
        {
          microLabel: 'ng',
          examples:
            'ring, king, sing, ping, wing, long, fang, gang, sting, hung',
          pos: 20
        },
        {
          microLabel: 'v',
          examples:
            'van, vet, vest, vote, village, vase, volcano, very, violet, vamp',
          pos: 30
        },
        {
          microLabel: 'oo',
          examples: 'zoo, book, hook, took, look, good, foot, boot, wool, cook',
          pos: 40
        },
        {
          microLabel: 'OO',
          examples:
            'pool, tool, shoot, bloom, tooth, mood, school, moon, balloon, proof',
          pos: 50
        }
      ]
    },
    {
      label: 'Phonics Collection - 6',
      type: 'phonics',
      id: 'phonics-microLabel-4',
      commonData: {
        audio: 'kg-5/phonicsWords-6.mp3'
      },
      data: [
        {
          microLabel: 'y',
          examples: 'boy, yes, yet, my, york, yo-yo, toy, you, yuck, youth',
          pos: 0
        },
        {
          microLabel: 'x',
          examples: 'six, mix, fix, fox,  ox, box, flex, tax, tux, wax,',
          pos: 10
        },
        {
          microLabel: 'ch',
          examples:
            'chop, cheese, chest, chain, chant, chips, chair, chess, patch, teach',
          pos: 20
        },
        {
          microLabel: 'sh',
          examples:
            'shed, ship, show, shout, shrink, shut, shop, crush, crash, shirt',
          pos: 30
        },
        {
          microLabel: 'th',
          examples:
            'thank, think, bath, path, thin, math, myth, third, thief, thorn',
          pos: 40
        },
        {
          microLabel: 'TH',
          examples:
            'that, they, then, them, this, though, their, these, those, father',
          pos: 50
        }
      ]
    },
    {
      label: 'Phonics Collection - 7',
      type: 'phonics',
      id: 'phonics-microLabel-5',
      commonData: {
        audio: 'kg-5/phonicsWords-7.mp3'
      },
      data: [
        {
          microLabel: 'qu',
          examples:
            'quiz, quilt, question, queen, quiet, quill, quack, quick, squirell, liquid ',
          pos: 0
        },
        {
          microLabel: 'ou',
          examples:
            'loud, count, found, cloud, mountain, ground, round, mouth, proud sound,',
          pos: 10
        },
        {
          microLabel: 'oi',
          examples:
            'oil, boil, foil, coil, soil, join, point, noise, choice, voice',
          pos: 20
        },
        {
          microLabel: 'ue',
          examples:
            'true, clue, blue, rescue, tissue, argue, value, statue, venue, issue',
          pos: 30
        },
        {
          microLabel: 'er',
          examples:
            'her, after, baker, worker, tower, river, mixer, fixer, herd, fern',
          pos: 40
        },
        {
          microLabel: 'ar',
          examples:
            'farmer, bar, tar,  jar, car, carpet, market, artist,  harm, charm',
          pos: 50
        }
      ]
    },
    {
      id: 'story',
      type: 'slides2',
      label: `Thirsty Crow`,
      data: {
        title: `Thirsty Crow`,
        disType: 'highlight',
        audio: 'kg-5/reading/thirsty-crow.mp3',
        audioOffsets4: [3.5, 7.2, 11, 14.4, 18, 21.4, 24.8, 28, 100],
        audioOffsets: [
          5.5,
          8.5,
          12,
          15.5,
          20,
          23.5,
          26.5,
          30.5,
          36.5,
          38.5,
          42,
          44,
          49,
          54,
          57,
          58.5,
          64
        ],
        steps: [
          `One hot day, a thirsty crow flew all over the fields looking for water. 
For a long time, he could not find any. 
He felt very weak, almost lost all hope.
Suddenly, he saw a water jug below the tree. 
He flew straight down to see if there was any water inside. 
Yes, he could see some water inside the jug!
The crow tried to push his head into the jug. 
Sadly, he found that the neck of the jug was too narrow. 
Then he tried to push the jug to tilt for the water to flow out, but the jug was too heavy.
The crow thought hard for a while. 
Then, looking around it, he saw some pebbles. 
He suddenly had a good idea. 
He started picking up the pebbles one by one, dropping each into the jug. 
As more and more pebbles filled the jug, the water level kept rising. 
Soon it was high enough for the crow to drink. 
His plan had worked! 
The crow drank the water happily and flew in the sky singing his favorite song.`
        ]
      }
    },
    {
      label: 'The Lone Developer ',
      type: 'video',
      id: 'video-1-1',
      data: {
        src: 'agileForOne/01_01_theLoneDeveloper.mp4'
      }
    },
    {
      label: 'Choosing Your Process',
      type: 'video',
      id: 'video-1-2',
      data: {
        src: 'agileForOne/01_02_choosingYourProcess.mp4'
      }
    },
    {
      label: 'Getting Started with Personal Kanban',
      type: 'video',
      id: 'video-1-3',
      data: {
        src: 'agileForOne/01_03_gettingStartedPersonalKanbon.mp4'
      }
    },
    {
      label: 'Meet Trello',
      type: 'video',
      id: 'video-1-4',

      data: {
        src: 'agileForOne/01_04_meetTrello.mp4'
      }
    },
    {
      label: 'Building Your Trello Board',
      type: 'video',
      id: 'video-1-5',

      data: {
        src: 'agileForOne/01_05_buildingYourTrelloBoard.mp4'
      }
    },
    {
      label: 'Setting Priorities',
      type: 'video',
      id: 'video-1-6',

      data: {
        src: 'agileForOne/01_06_settingPriorities.mp4'
      }
    },
    {
      label: 'Comparing Value to Effort',
      type: 'video',
      id: 'video-1-7',
      data: {
        src: 'agileForOne/01_07_comparinValueToEffort.mp4'
      }
    },
    {
      label: 'Filling Your Matrix',
      type: 'video',
      id: 'video-1-8',
      data: {
        src: 'agileForOne/01_08_fillingYourMatrix.mp4'
      }
    },
    {
      label: 'Moving On',
      type: 'video',
      id: 'video-1-9',
      data: {
        src: 'agileForOne/01_09_movingOn.mp4'
      }
    },
    {
      label: 'Meet the Pomodoro',
      type: 'video',
      id: 'video-2-1',
      data: {
        src: 'agileForOne/02_01_meetThePomodoro.mp4'
      }
    },
    {
      label: 'Planning Your Pomodoros',
      type: 'video',
      id: 'video-2-2',
      data: {
        src: 'agileForOne/02_02_planningPomodoro.mp4'
      }
    },
    {
      label: 'Tracking Estimates in Trello',
      type: 'video',
      id: 'video-2-3',
      data: {
        src: 'agileForOne/02_03_trackingEstimates.mp4'
      }
    },
    {
      label: 'Adding Estimates to Tasks',
      type: 'video',
      id: 'video-2-4',
      data: {
        src: 'agileForOne/02_04_addingEstimates.mp4'
      }
    },
    {
      label: 'Estimating the Unknown',
      type: 'video',
      id: 'video-2-5',
      data: {
        src: 'agileForOne/02_05_estimatingUnknown.mp4'
      }
    },
    {
      label: 'Moving On',
      type: 'video',
      id: 'video-2-6',
      data: {
        src: 'agileForOne/02_06_movingOn.mp4'
      }
    },
    {
      label: 'Something Is Not Quite Right',
      type: 'video',
      id: 'video-3-1',
      data: {
        src: 'agileForOne/03_01_somethingNotRight.mp4'
      }
    },
    {
      label: 'Adding Work in Progress Limits',
      type: 'video',
      id: 'video-3-2',
      data: {
        src: 'agileForOne/03_02_addingWIPLimits.mp4'
      }
    },
    {
      label: 'Using Work in Progress Limits with the Pomodoro Technique',
      type: 'video',
      id: 'video-3-3',
      data: {
        src: 'agileForOne/03_03_usingWIPLimitsPomodoroTechnique.mp4'
      }
    },
    {
      label: 'Refining the Backlog',
      type: 'video',
      id: 'video-3-4',
      data: {
        src: 'agileForOne/03_04_refiningTheBacklog.mp4'
      }
    },
    {
      label: 'Describing the Goal',
      type: 'video',
      id: 'video-3-5',
      data: {
        src: 'agileForOne/03_05_describingGoal.mp4'
      }
    },
    {
      label: 'Sizing the Tasks',
      type: 'video',
      id: 'video-3-6',
      data: {
        src: 'agileForOne/03_06_sizingTasks.mp4'
      }
    },
    {
      label: 'Moving On',
      type: 'video',
      id: 'video-3-7',
      data: {
        src: 'agileForOne/03_07_movingOn.mp4'
      }
    },
    {
      label: 'Setting a Goal for the Week',
      type: 'video',
      id: 'video-4-1',
      data: {
        src: 'agileForOne/04_01_settingGoalWeek.mp4'
      }
    },
    {
      label: 'Planning Your Work for the Day with the Daily Standup',
      type: 'video',
      id: 'video-4-2',
      data: {
        src: 'agileForOne/04_02_planningWorkDailyStandup.mp4'
      }
    },
    {
      label: 'Improving Continuously with Retrospectives',
      type: 'video',
      id: 'video-4-3',
      data: {
        src: 'agileForOne/04_03_improvingContinuously.mp4'
      }
    },
    {
      label: 'Moving On',
      type: 'video',
      id: 'video-4-4',
      data: {
        src: 'agileForOne/04_04_movingOn.mp4'
      }
    },
    {
      label: 'Building a Weekly Plan',
      type: 'video',
      id: 'video-5-1',
      data: {
        src: 'agileForOne/05_01_buildingWeeklyPlan.mp4'
      }
    },
    {
      label: 'Moving to Story Points',
      type: 'video',
      id: 'video-5-2',
      data: {
        src: 'agileForOne/05_02_movingToStoryPoints.mp4'
      }
    },
    {
      label: 'Projecting Release Dates',
      type: 'video',
      id: 'video-5-3',
      data: {
        src: 'agileForOne/05_03_projectingReleaseDates.mp4'
      }
    },
    {
      label: 'Adjusting Your Release Plan',
      type: 'video',
      id: 'video-5-4',
      data: {
        src: 'agileForOne/05_04_adjustingReleasePlan.mp4'
      }
    },
    {
      label: 'Planning for Your Release',
      type: 'video',
      id: 'video-5-5',
      data: {
        src: 'agileForOne/05_05_planningYourRelease.mp4'
      }
    },
    {
      label: 'Getting the Most from Your Release Plan',
      type: 'video',
      id: 'video-5-6',
      data: {
        src: 'agileForOne/05_06_gettingMostFromReleasePlan.mp4'
      }
    },
    {
      label: 'Wrapping Up',
      type: 'video',
      id: 'video-5-7',
      data: {
        src: 'agileForOne/05_07_wrappingUp.mp4'
      }
    }
  ]
};
