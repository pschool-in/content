export default {
  label: 'Suffix',
  id: 'suffix',
  list: [
    {
      id: 'reading-suffix',
      type: 'passage',
      label: 'Words List - Suffix',
      data: {
        title: 'Suffix',
        text: [
          'A suffix is a group of letters added to the ending of words, and it changes the meaning of the word slightly.',
          '# -ful words',
          {
            type: 'sitewords',
            text: 'playful, thankful, hopeful, handful, skilful, respectful, successful, unsuccessful, powerful, resourceful,  beautiful, wonderful, meaningful, thoughtful, eventful, stressful, colorful, doubtful, careful, helpful, harmful, useful',
            width: 120
          },
          '# -ous words',
          {
            type: 'sitewords',
            text: 'famous, jealous, religious, rediculous, various, obvious, serious, curious, previous, numerous, generous, precious, dangerous, ferocious, injurious, continuous, suspicious, courageous, prestigious',
            width: 120
          },
          '# -al words',
          {
            type: 'sitewords',
            text: 'fictional, regional, musical, accidental, logical, national, official, personal, approval, cultural, festival, optional, seasonal, marginal, parental, habitual, financial, technical, emotional, individual, industrial, historical',
            width: 120
          },
          '# -ty words',
          {
            type: 'sitewords',
            text: 'security, validity, quality, ability, society, reality, cruelty, thirsty, activity, priority, humanity, inability, sincerity, stupidity, difficulty, popularity, visibility, honesty, opportunity, nationality',
            width: 120
          },
          '# -ment words',
          {
            type: 'sitewords',
            text: 'argument, achievement, encouragement, excitement, payment, movement, argument, judgment, basement, pavement, agreement, equipment, statement, treatment, placement, enjoyment, management, government, employment, retirement, attachment, development, environment, improvement, appointment',
            width: 120
          },
          '# -ion words',
          {
            type: 'sitewords',
            text: 'promotion, addition, election, relation, duration, rotation, donation, education, operation, direction, selection, pollution, animation, digestion, production, population, discussion, opposition, limitation, suggestion, correction, estimation, information, application, preparation',
            width: 120
          },
          '# -ive words',
          {
            type: 'sitewords',
            text: 'attentive, active, expensive, objective, exclusive, sensitive, intensive, talkative, respective, attractive, initiative, aggressive, productive, supportive, decorative, alternative, progressive',
            width: 120
          },
          '# -less words',
          {
            type: 'sitewords',
            text: 'meaningless, hopeless, homeless, mindless, endless, useless, jobless, ageless, wireless, homeless, careless, fearless, powerless, pointless, paperless, toothless, regardless, effortless',
            width: 120
          },
          '# -ly words',
          {
            type: 'sitewords',
            text: 'softly, slowly, happily, crazily, madly, largely, monthly, heavily, readily, actually, directly, friendly, honestly, famously, generally, certainly, perfectly, naturally, frequently, originally, especially, relatively, immediately, accordingly, effectively',
            width: 120
          },
          '# -ship words',
          {
            type: 'sitewords',
            text: 'friendship, membership, citizenship, hardship, leadership, fellowship, readership, ownership',
            width: 120
          },
          '# -wards words',
          {
            type: 'sitewords',
            text: 'towards, afterwards, backwards, inwards, outwards',
            width: 120
          },
          '# -age words',
          {
            type: 'sitewords',
            text: 'marriage, orphanage, outage, drainage, storage, teenage, mileage, encourage, percentage, discourage, pilgrimage',
            width: 120
          },
          '# -wise words',
          {
            type: 'sitewords',
            text: 'otherwise, likewise, clockwise, weatherwise',
            width: 120
          },
          '# -ness words',
          {
            type: 'sitewords',
            text: 'heaviness, highness, sickness, rudeness, happiness, fitness, illness, sadness, weakness, kindness, laziness, thickness, brightness',
            width: 120
          },
          '# -ate words',
          {
            type: 'sitewords',
            text: 'collaborate, mediate, create, eradicate, detonate, passionate, fortunate, approximate, negotiate, interrogate, congratulate, discriminate, differentiate, estimate',
            width: 120
          },
          '# -cal words',
          {
            type: 'sitewords',
            text: 'musical, technical, practical, logical, periodical, electrical, historical, grammatical',
            width: 120
          }
        ]
      }
    },
    {
      type: 'match',
      label: 'Match Suffix',
      id: 'match-suffix',
      commonData: {
        title: 'Match Suffix with the word.'
      },
      data: [
        `play, ful  
soft, ly  
fiction, al 
securi, ty  
argu, ment  
promot, ion`,

        `thank, ful 
slow, ly  
region, al  
validi, ty  
achieve, ment 
addit, ion`,

        `hope, ful  
happi, ly 
music, al 
quali, ty 
encourage, ment 
elect, ion`,

        `hand, ful  
crazi, ly 
accident, al  
abili, ty 
excite, ment  
relat, ion`,

        `skil, ful  
mad, ly 
logic, al 
socie, ty 
pay, ment 
durat, ion`,

        `respect,ful  
large,ly  
nation,al 
reali,ty  
move,ment 
rotat,ion`,

        `success, ful 
month, ly 
offici, al  
cruel, ty 
argu, ment  
donat, ion`,

        `unsuccess, ful 
heavi, ly 
person, al  
thirs, ty 
judg, ment  
educat, ion`,

        `power, ful 
readi, ly 
approv, al  
activi, ty  
base, ment  
operat, ion`,

        `resource, ful  
actual, ly  
cultur, al  
priori, ty  
pave, ment  
direct, ion`
      ]
    },
    {
      type: 'match',
      label: 'Match Suffix - 2',
      id: 'match-suffix-2',
      commonData: {
        title: 'Match Suffix with the word.'
      },
      data: [
        `beauti, ful  
direct, ly  
festiv, al  
humani, ty  
agree, ment 
select, ion`,

        `wonder, ful  
friend, ly  
option, al  
inabili, ty 
equip, ment 
pollut, ion`,

        `meaning, ful 
honest, ly  
season, al  
sinceri, ty 
state, ment 
animat, ion`,

        `thought, ful 
famous, ly  
margin, al  
stupidi, ty 
treat, ment 
digest, ion`,

        `event, ful 
general, ly 
parent, al  
difficul, ty  
place, ment 
product, ion`,

        `stress, ful  
certain, ly 
habitu, al  
populari, ty  
enjoy, ment 
populat, ion`,

        `color, ful 
perfect, ly 
financi, al 
visibili, ty  
manage, ment  
discuss, ion`,

        `doubt, ful 
natural, ly 
technic, al 
hones, ty 
govern, ment  
opposit, ion`,

        `care, ful  
frequent, ly  
emotion, al 
opportuni, ty 
employ, ment  
limitat, ion`,

        `help, ful  
original, ly  
individu, al  
nationali, ty 
retire, ment  
suggest, ion`
      ]
    },
    {
      type: 'match',
      label: 'Match Suffix - 3',
      id: 'match-suffix-3',
      commonData: {
        title: 'Match Suffix with the word.'
      },
      data: [
        `attent, ive
especial, ly
drain, age
meaning, less
correct, ion
collabor, ate`,

        `act, ive
relative, ly
stor, age
hope, less
estimat, ion
medi, ate`,

        `expens, ive
immediate, ly
teen, age
home, less
informat, ion
cre, ate`,

        `object, ive
according, ly
fam, ous
mind, less
applicat, ion
eradic, ate`,

        `exclus, ive
effective, ly
jeal, ous
end, less
harm, ful
deton, ate`,

        `sensit, ive
preparat, ion
religi, ous
use, less
out, wards
passion, ate`,

        `intens, ive
use, ful
ridicul, ous
job, less
marri, age
fortun, ate`,

        `talkat, ive
industri, al
vari, ous
age, less
orphan, age
approxim, ate`,

        `respect, ive
historic, al
obvi, ous
wire, less
out, age
negoti, ate`,

        `attract, ive
friend, ship
seri, ous
home, less
heavi, ness
interrog, ate`
      ]
    },
    {
      type: 'match',
      label: 'Match Suffix - 4',
      id: 'match-suffix-4',
      commonData: {
        title: 'Match Suffix with the word.'
      },
      data: [
        `initiat, ive
member, ship
curi, ous
care, less
high, ness
congratul, ate`,

        `aggress, ive
citizen, ship
previ, ous
fear, less
sick, ness
discrimin, ate`,

        `product, ive
hard, ship
numer, ous
power, less
rude, ness
differenti, ate`,

        `support, ive
leader, ship
gener, ous
point, less
happi, ness
estim, ate`,

        `decorat, ive
fellow, ship
preci, ous
paper, less
fit, ness
music, al`,

        `alternat, ive
reader, ship
danger, ous
tooth, less
ill, ness
technic, al`,

        `progress, ive
owner, ship
feroci, ous
regard, less
sad, ness
practic, al`,

        `attach, ment
other, wise
injuri, ous
effort, less
weak, ness
logic, al`,

        `develop, ment
like, wise
continu, ous
to, wards
kind, ness
periodic, al`,

        `environ, ment
clock, wise
suspici, ous
after, wards
lazi, ness
electric, al`,

        `improve, ment
weather, wise
courage, ous
back, wards
thick, ness
historic, al`,

        `appoint, ment
encour, age
prestigi, ous
in, wards
bright, ness
grammatic, al`
      ]
    },
    {
      label: 'Choose Right Suffix',
      id: 'complete-suffix',
      type: 'completePuzzle',
      commonData: {
        type: 'rightOpen',
        title: 'Drag and drop the correct suffix.',
        printTitle: 'Underline the right options.',
        leftWidth: 180,
        rightWidth: 140
      },
      data: [
        `attent, ive, ate
care, less, ness
courage, ous, ive
ill, ness, ful
friend, ship, ness
marri, age, ate
hand, ful, ness
manage, ment, ful
back, wards, less
interrog, ate, ive`,

        `seri, ous, ate
hope, ful, ness
medi, ate, ous
previ, ous, ate
move, ment, ness
doubt, ful, ment
respect, ful, ness
relative, ly, ty
fortun, ate, ous
thank, ful, ness`,

        `job, less, ness
jeal, ous, ate
crazi, ly, ty
activi, ty, ly
abili, ty, ly
preci, ous, ate
applicat, ion, ing
person, al, ly
resource, ful, ness
fellow, ship, ment`,

        `injuri, ous, ate
securi, ty, ly
redicul, ous, ness
sad, ness, ous
vari, ous, ness
color, ful, ness
kind, ness, ment
argu, ment, ness
fiction, al, ly
region, al, ness`,

        `festiv, al, ly
priori, ty, al
treat, ment, ness
home, less, ment
stor, age, ous
improve, ment, ness
state, ment, ness
weak, ness, ment
humani, ty, ly
orphan, age, ous`,

        `season, al, ous
music, al, ly
fear, less, ment
respect, ive, age
care, ful, ment
mind, less, ly
correct, ion, less
develop, ment, ion
excite, ment, less
meaning, less, ment`,

        `logic, al, ly
perfect, ly, al
socie, ty, ly
gener, ous, age
hope, less, ness
achieve, ment, ion
prestigi, ous, age
hones, ty, ly
sick, ness, ment
quali, ty, ly`,

        `bright, ness, ment
inabili, ty, ly
offici, al, ty
approv, al, ous
environ, ment, ness
alternat, ive, ly
informat, ion, ment
enjoy, ment, ion
equip, ment, ive
use, ful, ness`,

        `durat, ion, ous
talkat, ive, ion
parent, al, ly
govern, ment, ness
help, ful, ion
preparat, ion, ate
passion, ate, ness
argu, ment, ous
relat, ion, ment
technic, al, ly`,

        `cruel, ty, ous
wonder, ful, ness
progress, ive, ness
thick, ness, ous
nationali, ty, ly
direct, ion, ous
heavi, ness, ty
educat, ion, ness
natural, ly, ty
effective, ly, ty`
      ]
    },
    {
      label: 'Choose Right Suffix - 2',
      id: 'complete-suffix-2',
      type: 'completePuzzle',
      commonData: {
        type: 'rightOpen',
        title: 'Drag and drop the correct suffix.',
        printTitle: 'Underline the right options.',
        leftWidth: 180,
        rightWidth: 140
      },
      data: [
        `digest, ion, ness
limitat, ion, ing
animat, ion, ous
deton, ate, ion
leader, ship, ness
percent, age, ous
thought, ful, ness
estimat, ion, ous
electric, al, ty
point, less, ful`,

        `success, ful, ness
suspici, ous, ly
elect, ion, ment
reader, ship, ment
like, wise, ship
immediate, ly, ship
retire, ment, wise
object, ive, ous
teen, age, ness
continu, ous, ate`,

        `music, al, ly
happi, ness, ship
clock, wise, ment
aggress, ive, ate
product, ion, ment
out, wards, wise
after, wards, ment
effort, less, ship
emotion, al, ly
stress, ful, ness`,

        `sinceri, ty, ly
opportuni, ty, ly
promot, ion, ous
populari, ty, ate
to, wards, ment
select, ion, ous
individu, al, ly
tooth, less, wise
practic, al, ly
opposit, ion, ly`,

        `especial, ly, ty
eradic, ate, age
exclus, ive, ous
industri, al, age
play, ful, ness
heavi, ly, ty
actual, ly, ty
home, less, ment
agree, ment, less
initiat, ive, age`,

        `rude, ness, ful
other, wise, ship
skil, ful, ment
out, age, ous
attract, ive, wise
original, ly, ty
soft, ly, ful
unsuccess, ful, ly
power, less, ment
nation, al, ly`,

        `mile, age, ful
appoint, ment, age
certain, ly, age
historic, al, ly
beauti, ful, age
accident, al, ly
fit, ness, less
discrimin, ate, ous
habitu, al, ly
regard, less, ness`,

        `slow, ly, al
congratul, ate, al
event, ful, ment
validi, ty, ly
populat, ion, ly
reali, ty, al
general, ly, ion
stupidi, ty, ly
drain, age, ous
direct, ly, al`,

        `addit, ion, al
member, ship, ment
place, ment, wise
suggest, ion, ment
end, less, ness
donat, ion, al
harm, ful, ment
periodic, al, ous
obvi, ous, al
cultur, al, ous`,

        `thirs, ty, ly
financ, ial, ate
differenti, ate, ial
estim, ate, ly
curi, ous, ate
logic, al, ous
encourage, ment, ly
religi, ous, ment
encour, age, ous
fam, ous, age`
      ]
    },
    {
      label: 'Choose Right Suffix - 3',
      id: 'complete-suffix-3',
      type: 'completePuzzle',
      commonData: {
        type: 'rightOpen',
        title: 'Drag and drop the correct suffix.',
        printTitle: 'Underline the right options.',
        leftWidth: 180,
        rightWidth: 140
      },
      data: [
        `use, less, ness
historic, al, ly
grammatic, al, ty
approxim, ate, ous
friend, ly, al
act, ive, ate
base, ment, ate
negoti, ate, ment
power, ful, ly
sensit, ive, ful`,

        `owner, ship, wise
famous, ly, al
danger, ous, ly
technic, al, ness
difficul, ty, ly
high, ness, less
discuss, ion, ous
rotat, ion, ous
lazi, ness, ful`,

        `pilgrim, age, ness
pave, ment, ous
collabor, ate, ness
citizen, ship, wise
frequent, ly, ty
honest, ly, ty
discour, age, ous
option, al, ly
wire, less, ness
readi, ly, ty`,

        `meaning, ful, ness
weather, wise, ness
in, wards, ship
visibili, ty, al
pollut, ion, ness
hard, ship, ment
employ, ment, ship
numer, ous, ate
paper, less, ous
large, ly, al`,

        `expens, ive, ous
decorat, ive, ous
according, ly, ty
operat, ion, ous
happi, ly, ty
pay, ment, ness
mad, ly, al
margin, al, ly
judg, ment, ness
month, ly, al`,

        `intens, ive, ly
feroci, ous, ive
support, ive, ous
product, ive, ous
age, less, ness
attach, ment, ness`
      ]
    },
    {
      id: 'wordlist-both',
      type: 'passage',
      label: 'Reading',
      data: {
        title: 'Prefix and Suffix',
        text: [
          'There are many words that have both prefix and suffix. Find below some words list. Get familiar with them.',
          {
            type: 'sitewords',
            text: 'deactivation,  deforestation,  disability,  disappointment,  discovering,  dishonestly,  disloyalty,  disqualified,  empowerment,  encouragement,  enjoyment,  fulfillment,  illegally,  immaturity,  immeasurable,  improvement,  investment,  irregularly,  irresponsible,  irreversible,  misbehavior,  misleading,  misspelling, overcoming,  overcooked,  precautious,  preplaning,  reappearance,  rearrangement,  recalled,  recollection,  recovering,  refreshment,  replacement,  representation,  reproductive,  returning,  unbelievable,  unbreakable,  understanding,  undoubtedly,  unfortunately,  unfriendly,  unhappiness,  unlikable,  unmistakeable,  unpredictable,  unproductive,  unselfishly,  unsuccessful,  unwilling',
            width: 120
          }
        ]
      }
    },
    {
      label: 'Choose Both Prefix and Suffix',
      id: 'prefix-suffix',
      type: 'completePuzzle',
      commonData: {
        type: 'bothOpen',
        title: 'Drag and drop the correct prefix and suffix.',
        printTitle: 'Underline the right options.',
        leftWidth: 60,
        rightWidth: 110,
        midWidth: 160
      },
      data: [
        `success, un, in, ful, ness
prove, im, un, ment, ful
product, un, in, ive, ion
fresh, re, de, ment, ness
collect, re, un, ion, ment
invest, re, de, ment, ness
cover, re, de, ing, ful
doubted, un, in, ly, ness
loyal, dis, de, ty, ness
activa, de, di, tion, ly`,

        `lik, un,in, able, ty
place, re, ir, ment, tion
measur, im, in, able, ment
courage, en, in, ment, tion
believ, un, en, able, ness
selfish, un, dis, ly, ty
arrange, re, ir, ment, ness
appear, re, de, ance, ness
honest, dis, un, ly, ment
product, re, ill, ive, ly`,

        `present, re, de, ation, ly
break, un, dis, able, tion
legal, il, un, ly, ty
regular, ir, dis, ly, ed
revers, ir, un, ible, able
respons, ir, un, ible, able
abili, dis, un, ty, ting
friend, un, in, ly, ty
joy, en, fun, ment, tion
behavi, mis, dis, or, er`,

        `cover, dis, in, ing, tion
appoint, dis, im, ment, ive
happi, un, in, ness, tive
fortunate, un, in, ly, ty
qualifi, dis, in, ed, tion
maturi, im, in, ty, ly
spell, mis, un, ing, ion
plan, pre, bi, ning, tion
cauti, pre, bi, ous, tion
turn, re, un, ing, ous`,

        `call, re, un, ed, ness
cook, over, in, ed, ful
com, over, un, ing, ed
predict, un, in, able, ing
fill, ful, fun, ment, ing
forestat, de, un, ion, ness
power, em, un, ment, ing
mistake, un, im, able, ble
lead, mis, dis, ing, ness
will, un, in, ing, able`
      ]
    }
  ]
};
