export default {
  label: 'Compound Word',
  id: 'compound-word',
  list: [
    {
      id: 'reading',
      type: 'passage',
      label: 'Reading',
      data: {
        title: 'Compound Words',
        text: [
          `Compound words are made from two words put together.`,
          {
            type: 'sitewords',
            text: 'airplane, airport, another, anybody, anyhow, anymore, anyone, anything, anytime, anyway, background, backward, basketball, bathroom, became, because, bedroom, bedtime, blackmail, bookshelf, bookstore, breakfast, butterfly, buttermilk, cabdriver, candlelight, cannot, caretaker, checkup, classroom, comeback, copycat, courtroom, cowboy, cupboard, daydream, daylight, dishwasher, dragonfly, eardrop, earring, elsewhere, everything, eyeballs, eyesight, firecracker, firefighter, fireworks, football, footprint, footrest, forever, forget, forgive, goodbye, goodnight, grandchild, grandmother, grandson, haircut, handbag, handbook, handcuff, hereafter, hereby, herself, highway, homemade, hometown, homework, honeybee, houseboat, housekeeper, income, indoor, inside, jackfruit, jellyfish, keyboard, keyhole, keyword, landmark, landslide, lifeboat, lifelong, lifetime, lighthouse, mailbox, meanwhile, moonlight, moreover, motorcycle, nearby, newspaper, nightfall, nobody, nowhere, oneself, onetime, outside, overcoat, overflow, pancake, passport, paycheck, pickup, playback, playground, popcorn, postcard, railway, rainbow, raincoat, rainfall, rainwater, rubberband, schoolbus, seashore, sendoff, setback, shoelace, slowdown, somebody, someone, something, sometimes, somewhere, soundproof, spacewalk, starfish, steamboat, stonewall, subway, sunflower, sunshine, superman, tablecloth, tablespoon, teammate, teenage, textbook, themselves, therefore, timetable, together, toothpaste, underground, upgrade, uppercase, upside, waistcoat, wallpaper, washroom, wastepaper, watchman, waterfall, waterlog, watermelon, weatherman, welldone, wheelchair, whitewash, without',
            width: 120
          }
        ]
      }
    },
    {
      id: 'match',
      type: 'match',
      label: 'Match ',
      commonData: {
        title: 'Match the compound words'
      },
      data: [
        `no, body
cup, board
sea, shore
up, side
some, where`,

        `home, work
back, ward
rubber, band
book, shelf
any, how`,

        `there, fore
table, cloth
grand, son
jack, fruit
no, where`,

        `text, book
time, table
with, out
rain, bow
foot, rest`,

        `life, long
else, where
one, self
slow, down
for, give`,

        `shoe, lace
key, board
pan, cake
hand, book
water, fall`,

        `cow, boy
butter, fly
ear, drop
bed, room
waist, coat`,

        `cab, driver
them, selves
hair, cut
over, coat
land, slide`,

        `dragon, fly
come, back
check, up
book, mark
tooth, paste`,

        `up, grade
wheel, chair
day, dream
eye, sight
post, card`
      ]
    },
    {
      id: 'match-2',
      type: 'match',
      label: 'Match - 2',
      commonData: {
        title: 'Match the compound words'
      },
      data: [
        `key, hole
home, town
night, fall
eye, balls
here, after`,

        `dish, washer
rain, fall
water, log
in, door
send, off`,

        `star, fish
teen, age
mail, box
rain, coat
rail, way`,

        `honey, bee
white, wash
copy, cat
fire, cracker
pop, corn`,

        `any, time
grand, child
watch, man
water, melon
motor, cycle`,

        `mean, while
sun, flower
moon, light
high, way
every, thing`,

        `air, port
key, word
play, back
house, boat
care, taker`,

        `fire, works
any, one
stone, wall
in, side
set, back`,

        `an, other
can, not
light, house
grand, mother
here, by`,

        `upper, case
house, keeper
any, body
be, cause
wall, paper`
      ]
    },
    {
      id: 'match-3',
      type: 'match',
      label: 'Match - 3',
      commonData: {
        title: 'Match the compound words'
      },
      data: [
        `foot, ball
hand, cuff       
some, thing
life, boat
in, come
any, way`,

        `play, ground
near, by
pick, up
weather, man
class, room`,

        `good, bye
ear, ring
back, ground
for, get
book, store`,

        `good, night
rain, water
home, made
basket, ball
bath, room`,

        `steam, boat
day, light
for, ever
be, came
court, room`,

        `sun, shine
jelly, fish
some, times
candle, light
school, bus`,

        `fire, fighter
break, fast
news, paper
any, thing
team, mate`,

        `to, gether
sound, proof
foot, print
more, over
over, flow`,

        `air, plane
any, more
waste, paper
her, self
table, spoon`,

        `butter, milk
super, man
hand, bag
under, ground
pass, port`,

        `some, one
land, mark
life, time
sub, way
black, mail`,

        `wash, room
well, done
some, body
out, side
bed, time`
      ]
    },
    {
      id: 'match-image',
      type: 'match',
      label: 'Match Images ',
      data: {
        title: 'Match the images that form a compound word.',
        rightImgType: 'general',
        leftImgType: 'general',
        text: `wheel, chair
ear, ring
star, fish
butter, fly
marigold, pot`
      }
    },
    {
      id: 'match-image-2',
      type: 'match',
      label: 'Match Images - 2',
      data: {
        title: 'Match the images that form a compound word.',
        rightImgType: 'general',
        leftImgType: 'general',
        text: `rain, coat
tooth, brush
foot, ball
hand, schoolbag
sun, glasses`
      }
    },
    {
      label: 'Classify Compound words',
      type: 'group',
      id: 'classify',
      data: {
        title: 'Classify the below words as compound words or not',
        types: [
          {
            name: 'Compound Word',
            text: 'seahorse, raincoat, moonlight, cowboy, wheelchair'
          },
          {
            name: 'Not a Compound Word',
            text: 'teacher, building, school, whether, elephant'
          }
        ]
      }
    },
    {
      label: 'Pick right word',
      id: 'complete',
      type: 'completePuzzle',
      commonData: {
        type: 'rightOpen',
        title: 'Drag and drop the correct block to make a compound word.',
        printTitle: 'Underline the right option.'
      },
      data: [
        `no, body, side
else, where, wise
some, where, why
up, side, middle
sea, shore, beach
home, work, play
back, ward, while
rubber, band, play
book, shelf, show
any, how, what`,

        `there, fore, four
table, cloth, dress
grand, son, sun
jack, fruit, flower
no, where, why
text, book, pen
time, table, chair
with, out, all
rain, bow, bun
chair, man, all`,

        `foot, rest, read
life, long, lone
cup, board, pan
one, self, son
slow, down, done
for, give, live
shoe, lace, loss
key, board, bored
pan, cake, tea
hand, book, print`,

        `water, fall, fun
cow, boy, bat
over, coat, cool
ear, drop, fall
bed, room, run
waist, coat, cat
cab, driver, taxi
them, selves, ful
hair, cut, cane
butter, fly, fur`,

        `land, slide, ride
dragon, fly, walk
come, back, well
check, up, thing
tooth, paste, water
up, grade, class
wheel, chair, show
day, dream, think
eye, sight, view
post, card, cool`,

        `key, hole, whole
home, town, area
night, fall, rise
eye, balls, games
clock, wise, fool
here, after, all
dish, washer, water
rain, fall, fun
water, log, large
in, door, time`,

        `star, fish, floor
rain, coat, king
teen, age, anger
mail, box, pot
send, off, on
rail, way, van
honey, bee, be
white, wash, wall
copy, cat, dog
fire, cracker, chill`,

        `pop, corn, carrot
any, time, clock
grand, child, kid
watch, man, boy
water, melon, fruit
motor, cycle, ring
mean, while, way
sun, flower, floor
moon, light, site`,

        `high, way, win
every, thing, say
some, thing, far
key, word, letter
play, back, front`
      ]
    },
    {
      label: 'Pick right word',
      id: 'complete-2',
      type: 'completePuzzle',
      commonData: {
        type: 'leftOpen',
        title: 'Drag and drop the correct block to make a compound word.',
        printTitle: 'Underline the right option.'
      },
      data: [
        `house, boat, ship
taker, care, give
works, fire, air
one, any, both
dog, watch, mobile
wall, stone, sand
port, air, wind
back, set, sell
other, an, the
not, can, call`,

        `guard, body, back
house, light, lite
mother, grand, give
by, here, hear
bone, back, black
case, upper, all
keeper, house, town
body, any, all
cause, be, bee
paper, wall, wait`,

        `off, lay, lie
ball, foot, fun
side, in, ill
man, lay, lie
boat, life, look
come, in, give
ball, base, floor
house, ware, war
way, any, and
ground, play, place`,

        `by, near, neet
up, pick, pin
man, weather, with
room, class, school 
bye, good, bad
ring, ear, mouth
ground, back, bell
get, for, fore
arm, fire, fun
craft, air, wind`,

        `kick, side, slide
store, book, note
night, good, goal
found, new, now
water, rain, wind
made, home, hall
ball, basket, cup
room, bath, drink
boat, steam, sun
light, day, night`,

        `ever, for, fore 
came, be, bee
room, court, police
walk, space, air
shine, sun, son
fish, jelly, candy
times, some, sum
light, candle, call
bus, school, time
bolt, thunder, rain`,

        `fighter, fire, wind
fast, break, bill
paper, news, info
thing, any, sum
mate, team, tell
scraper, sky, cloud
gether, to, two
proof, sound, air
print, foot, leg
over, more, less`,

        `flow, over, un
goat, scape, slope
plane, air, wind
more, any, an
paper, waste, wash
place, common, got
one, some, sum
over, all, and
milk, butter, but
man, super, silver`,

        `bag, hand, leg
ground, under, upper
maker, law, crime
self, her, his
mark, land, earth
time, life, live
yard, ship, live
way, sub, sun
mail, black, white`,

        `check, pay, say
room, wash, wish
wreck, ship, sea
master, task, talk
cuff, hand, finger
body, some, sum
side, out, mid
time, bed, floor
spoon, table, chair
port, pass, fail
done, well, pond`
      ]
    }
  ]
};
