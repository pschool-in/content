export default {
  label: 'Prefix',
  id: 'prefix',
  list: [
    {
      id: 'reading',
      type: 'passage',
      label: 'Words List - Prefix',
      data: {
        title: 'Prefix',
        text: [
          'A prefix is a group of letters placed before the root word. The opposite word for a lot of words are formed by adding a prefix. Find below, some of the common prefixes.',
          '# in- words',
          {
            type: 'sitewords',
            text: 'inaccurate, incapable, incorrect, indefinite, injustice, insecure, invisible, independent, indecent,  inhuman, ineffective, indirectly, inequality, indoor',
            width: 120
          },
          '# ir- words',
          {
            type: 'sitewords',
            text: 'irregular, irresponsible, irreplaceable, irrational, irresistable',
            width: 120
          },
          '# il- words',
          {
            type: 'sitewords',
            text: 'illegal, illegible, illogical, illiterate',
            width: 120
          },
          '# dis- words',
          {
            type: 'sitewords',
            text: 'disobey, disclose, disadvantage, dishonest, disagree, disappear, disapprove, discomfort, disloyal, disobedient, dislike, disappoint, disinvest, disable, discover, disjoint, distrust, disown',
            width: 120
          },
          '# un- words',
          {
            type: 'sitewords',
            text: 'unkind, unhappy, unwell, unable, untrained, unfit, unfair, untidy, unlucky, unseen, unusual, unbound, unfold, unfortunate, unjust, unknown, unlikely, unqualified, unsatisfactory, unzip, unlock, unhook, untrue, unsafe, unclear,  uncooked, unpaid, unpack',
            width: 120
          },
          '# im- words',
          {
            type: 'sitewords',
            text: 'immature, impatient, impolite, impossible, impure, imperfect, improve, improper, immaterial, imbalance, imprison',
            width: 120
          },
          '# mis- words',
          {
            type: 'sitewords',
            text: 'misunderstand, mismatch, misbehave, mislead, misspell, mistreat, misfield, misfit, misgive,  misplace, misuse',
            width: 120
          },
          '# de- words',
          {
            type: 'sitewords',
            text: 'degrade, deactivate, dehydrate, depart, demoralize, dehumanize, desalinate, deselect, defame',
            width: 120
          },
          `Not all words starting with these letters are prefixes. The below words are not considered as having as a prefix.`,
          {
            type: 'sitewords',
            text: 'increase, include, industry, initial, intelligent, incident, involve, irritate, irony, illness, illustrate, discord, discussion, discipline, disgust, uncle, understand, under, underline, image, important, immediate, imagine, misty, misery, mister, missile, mission, missed, delicious, develop, deliver, decline, destiny',
            width: 120
          },
          `Prefix is not just used to create opposite words. It is used in other cases too. For example, 'pre' in the word 'prefix' itself is a prefix.`,
          '# pre- words',
          {
            type: 'sitewords',
            text: 'prefix, preview, predetermine, preoccupied, preposition, predominant, predefined, precaution, preplan',
            width: 120
          },
          '# re- words',
          {
            type: 'sitewords',
            text: 'return, reunite, recall, rehabit, reorganize, recover, reconsider, republish, reproduce, recalculate, rediscover, refresh, recollect, redirect, reinvest, replay, review, refund, rename, rewrite, relocate, reaction, reload, remix, renew, recharge, rebuild, refill,  restore',
            width: 120
          },
          '# over- words',
          {
            type: 'sitewords',
            text: 'overdue, overpower, overnight, overprice, overseas, overcome, overcoat, overcooked, overdo',
            width: 120
          },
          '# other common prefixes',
          {
            type: 'sitewords',
            text: 'extracurricular, homophone, microscope, triangle, tricycle, bicycle, unicycle',
            width: 120
          },
          `The following words are usually not considered as prefixes.`,
          {
            type: 'sitewords',
            text: 'predict, preferable, presentation, president, precious, pressure, prepare, repeat, response, reasonable, revolution, replicate, delicious, develop, deliver, decline, destiny',
            width: 120
          }
        ]
      }
    },
    {
      type: 'match',
      label: 'Match Prefix',
      id: 'match-prefix',
      commonData: {
        title: 'Match Prefix with the word.'
      },
      data: [
        `in, accurate
ir, regular
dis, obey
un, kind
im, mature
mis, understand`,

        `in, capable
ir, responsible
dis, advantage
un, happy
im, patient
mis, match`,

        `in, correct  
ir, replaceable 
dis, honest 
un, well  
im, polite  
mis, behave`,

        `in, definite 
ir, rational  
dis, agree  
un, able  
im, possible  
mis, lead`,

        `in, justice  
ir, resistible  
dis, appear 
un, trained 
im, pure  
mis, spell`,

        `in, secure 
il, legal 
dis, approve  
un, fit 
im, perfect 
mis, treat`,

        `in, visible
il, legible
re, consider
un, fair
im, prove
mis, place`,

        `in, dependent
il, logical
dis, loyal
un, lucky
im, proper
mis, field`,

        `in, decent 
il, literate  
re, produce        
un, seen  
im, material  
mis, fit`,

        `in, human  
ir, rational  
re, publish        
un, usual 
im, prison  
mis, use`
      ]
    },
    {
      type: 'match',
      label: 'Match Prefix - 2',
      id: 'match-prefix-2',
      commonData: {
        title: 'Match Prefix with the word.'
      },
      data: [
        `pre, fix 
de, grade 
re, turn  
over, due 
un, bound
extra, curricular`,

        `pre, view  
de, activate  
re, unite 
over, power 
un, fold  
dis, able`,

        `pre, occupied
de, part  
re, habit 
over, price 
tri, angle  
un, just`,

        `pre, position  
de, moralize  
dis, cover    
over, seas  
tri, cycle  
un, known`,

        `pre, dominant  
de, humanize  
re, cover 
over, come  
bi, cycle 
un, likely`,

        `pre, defined 
de, salinate  
dis, comfort
over, coat  
uni, cycle  
un, qualified`,

        `pre, caution 
de, select  
dis, like        
over, cooked  
homo, phone
un, satisfactory`,

        `pre, plan  
de, fame  
dis, obedient
over, do  
re, organise
un, zip`
      ]
    },
    {
      label: 'Choose Right Prefix',
      id: 'complete-prefix',
      type: 'completePuzzle',
      commonData: {
        type: 'leftOpen',
        title: 'Drag and drop the correct prefix.',
        printTitle: 'Underline the right option.',
        leftWidth: 90,
        rightWidth: 210
      },
      data: [
        `well, un, in
legal, il, un
satisfactory, un, in
accurate, in, un
possible, im, mis
polite, im, un
dependent, in, un
use, mis, un
prove, im, in
joint, dis, un`,

        `fold, un, dis
door, in, mis
balance, im, in
happy, un, in
literate, il, un
fit, mis, im
appear, dis, un
human, in, dis
spell, mis, dis
pure, im, mis`,

        `resistible, ir, in
likely, un, mis
approve, dis, in
justice, in, un
known, un, mis
effective, in, un
definite, in, un
mature, im, in
behave, mis, dis
kind, un, mis`,

        `zip, un, in
fit, un, in
visible, in, un
fair, un, mis
capable, in, un
field, mis, dis
give, mis, un
honest, dis, in
invest, dis, mis
appoint, dis, mis`,

        `replaceable, ir, il
usual, un, in
fortunate, un, in
directly, in, un
comfort, dis, mis
agree, dis, mis
qualified, un, in
place, mis, un
correct, in, dis
able, un, in`,

        `regular, ir, il
trained, un, il
bound, un, mis
match, mis, dis
proper, im, in
rational, ir, il
perfect, im, in
understand, mis, un
just, un, in
obey, dis, mis`,

        `logical, il, ir
decent, in, il
cover, dis, in
material, im, un
secure, in, mis
lead, mis, un
seen, un, mis
responsible, ir, in
able, dis, mis
advantage, dis, mis`,

        `loyal, dis, mis
lucky, un, dis
prison, im, in
equality, in, im
obedient, dis, mis
like, dis, mis
treat, mis, dis
patient, im, in
legible, il, ir
use, mis, in`,

        `kind, un, dis
appear, dis, un
agree, dis, un
fit, un, dis
obey, dis, un
fair, un, dis
honest, dis, un
loyal, dis, un
happy, un, dis
well, un, dis`,

        `determine, pre, dis
habit, re, in
collect, re, dis
produce, re, ir
hydrate, de, dis
curricular, extra, over
unite, re, over
fame, de, dis
due, over, re
come, over, re`
      ]
    },
    {
      label: 'Choose Right Prefix - 2',
      id: 'complete-prefix-2',
      type: 'completePuzzle',
      commonData: {
        type: 'leftOpen',
        title: 'Drag and drop the correct prefix.',
        printTitle: 'Underline the right options.',
        leftWidth: 90,
        rightWidth: 210
      },
      data: [
        `power, over, un
plan, pre, de
view, re, dis
grade, de, un
moralize, de, re
calculate, re, de
caution, pre, over
call, re, pre
consider, re, un
name, re, in`,

        `view, pre, un
invest, re, ir
fresh, re, dis
do, over, pre
cover, re, pre
part, de, di
fund, re, de
select, de, dis
cycle, tri, over
cycle, bi, by`,

        `phone, homo, over
play, re, un
night, over, pre
turn, re, un
dominant, pre, re
cycle, uni, un
salinate, de, un
humanize, de, un
price, over, pre
scope, micro, over
tidy, un, in`,

        `cooked, over, pre
defined, pre, over
position, pre, over
direct, re, pre
fix, pre, un
discover, re, pre
activate, de, micro
seas, over, de
occupied, pre, dis
angle, tri, bi`,

        `publish, re, dis
organize, re, pre
coat, over, pre
pack, un, en
paid, un, im
own, dis, in
cooked, un, dis
action, re, dis
trust, dis, en
store, re, in`,

        `close, dis, in
load, re, in
build, re, en
clear, un, dis
true, un, re
write, re, en
tidy, un, en
new, re, en
lock, un, dis
locate, re, un`,

        `charge, re, ir
hook, un, en
fill, re, en
mix, re, un
safe, un, re`
      ]
    },
    {
      type: 'rightOne',
      label: 'Not a Prefix',
      id: 'non-prefix',
      commonData: {
        title:
          'Which of the following word is usually not considered as having a prefix',
        noCaps: true
      },
      data: [
        `presentation, preplan, preposition, preview
deliver, defame, deselect, degrade
under, unfit, unlikely, unjust
revolution, return, recall, replay
underline, unfit, unlikely, unjust
delicious, depart, deactivate, dehumanize
destiny, defame, deselect, degrade
discord, discover, disable, dislike
decline, depart, deactivate, dehumanize
president, predominant, predetermine, precaution`,

        `incident, indoor, inequality, indirectly
precious, preplan, preposition, preview
imagine, immature, impure, imprison
deliver, depart, deactivate, dehumanize
repeat, return, recall, replay
develop, defame, deselect, degrade
mission, misfit, mistreat, mislead
mister, misfit, mistreat, mislead
include, indoor, inequality, indirectly
replicate, return, recall, replay`,

        `preferable, predominant, predetermine, precaution
misty, misplace, mismatch, misfield
image, immature, impure, imprison
irony, irrational, irreplaceable, preplan
disgust, discover, disable, dislike
involve, insecure, injustice, incorrect
reasonable, return, recall, replay
decline, defame, deselect, degrade
missed, misplace, mismatch, misfield
understand, unfit, unlikely, unjust`,

        `irritate, irrational, irreplaceable, preplan
prepare, preplan, preposition, preview
initial, indoor, inequality, indirectly
discipline, discover, disable, dislike
important, immature, impure, imprison
destiny, depart, deactivate, dehumanize
develop, defame, deselect, degrade
intelligent, insecure, injustice, incorrect
misery, misfit, mistreat, mislead
illustrate, illegal, illegible, illogical`,

        `delicious, depart, deactivate, dehumanize
increase, indoor, inequality, indirectly
predict, predominant, predetermine, precaution
immediate, immature, impure, imprison
pressure, preplan, preposition, preview
industry, insecure, injustice, incorrect
missile, misplace, mismatch, misfield
response, return, recall, replay
illness, illegal, illegible, illogical
uncle, unfit, unlikely, unjust
discussion, discover, disable, dislike`
      ]
    }
  ]
};
