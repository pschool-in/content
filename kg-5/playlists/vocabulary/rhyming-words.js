export default {
  label: 'Rhyming Words',
  id: 'rhyming-words',
  lockAfter: 4,
  list: [
    {
      label: 'Drag and Drop',
      type: 'matchByDragDrop',
      id: 'drag-drop',
      lockAfter: 1,
      commonData: {
        fontSize: '1.3rem',
        dashWidth: 100
      },
      data: [
        `boat, coat, *goat*
park, dark, *shark*
hand, band, *stand*
bright, right, *light*
gave, cave, *save*
face, race, *place*`,

        `cub, club, *rub*
cap, map, *tap*
bun, run, *sun*
but, nut, *hut*
cook, look, *book*
right, bright, *light*`
      ]
    },
    {
      id: 'match',
      type: 'match',
      label: 'Match Rhyming Words',
      lockAfter: 1,
      commonData: {
        title: 'Match the rhyming words.'
      },
      data: [
        `three, tree
seven, heaven
pen, men
write, right
cook, look
ball, tall`,

        `sing, wing
cave, save
seed, feed
hot, not
skip, lip
kick, pick`,

        `blew, blue
days, daze
one, won
peace, piece
hero, zero
soon, moon`
      ]
    },
    {
      type: 'rightOne',
      id: 'odd-one',
      label: 'Odd One Out',
      lockAfter: 1,
      commonData: {
        title: "Pick the word that doesn't rhyme."
      },
      data: [
        `call, make, cake, bake
son, soon, moon, boon
fine, five, hive, live
bone, one, gun, fun
ant, bat, fat, cat
net, float, goat, boat`,

        `bin, will, bill, kill
kin, kid, lid, did
six, box, fox, ox
fat, fan, pan, man
plate, grade, blade, fade`
      ]
    },
    {
      label: 'Pick the rhyming word',
      id: 'complete',
      type: 'completePuzzle',
      lockAfter: 1,
      commonData: {
        type: 'rightOpen',
        title: 'Drag and drop the correct block to make the words rhyme.',
        printTitle: 'Fill up with the right option.'
      },
      data: [
        `dog, fog, bag
sun, fun, van
big, fig, bin
hit, sit, hot
light, night, kite
ball, wall, girl`,

        `display, replay, reply
place, grace, guess
purple, people, person
life, knife, live
bike, like, live
gold, bold, bone`
      ]
    },
    {
      id: 'match-2',
      type: 'match',
      label: 'Match Rhyming Words - 2',
      lockAfter: 2,
      commonData: {
        title: 'Match the rhyming words.'
      },
      data: [
        `blue, hue
daze, haze
row, mow
race, face
hoe, doe
tired, fired`,

        `wife, knife
bold, sold
fellow, bellow
sunny, funny
rat, mat
bite, mite`,

        `south, mouth
mare, hare
meat, seat
grace, trace
fine, nine
pin, tin`,

        `done, son
run, fun 
book, cook
boat, moat
dog, fog    
clay, play`,

        `boy, coy
wage, age
rust, bust
girl, whirl
matter, clatter`,

        `maid, raid
bake, cake
list, mist
win, sin
fail, mail`,

        `sail, tail
call, fall
post, most 
met, pet
dot, pot
bolt, dolt`,

        `roast, toast
shook, hook
frock, shock
shade, made
red, bed
rock, sock`,

        ` tick, pick
loot, root
power, shower
set, bet
coil, foil`,

        `salt, malt
rent, tent
beat, seat
sail, tail
boast, coast
truck, pluck`,

        `poke, coke
but, cut
mad, sad
wide, side
died, cried
trust, must`,

        `mark, park
cash, mash
stitch, pitch
screech, teach
page, sage`,

        `preach, reach
search, perch
rage, cage
glitch, hitch
much, such
pen, hen`,

        `sing, ring
mister, sister
tell, bell
sung, rung
bunk, dunk`,

        `pool, cool
rocket, pocket
bang, rang
soup, coop
care, bare
slurp, burp`,

        `dip, sip
mew, few
money, honey
cone, bone
rich, ditch`,

        `propose, suppose
sane, cane
may, say
tattle, prattle
plain, train`
      ]
    }
  ]
};
