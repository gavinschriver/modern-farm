import {createSoybean} from "./seeds/soybean.js"
import {createCorn} from "./seeds/corn.js"
import {createSunflower} from "./seeds/sunflower.js"
import {createAsparagus} from "./seeds/asparagus.js"
import {createWheat} from "./seeds/wheat.js"
import {createPotato} from "./seeds/potato.js"

const soybeanSeed = createSoybean()
const cornSeed = createCorn()
const sunflowerSeed = createSunflower()
const asparagusSeed = createAsparagus()
const wheatSeed = createWheat()
const potatoSeed = createPotato()

console.log(soybeanSeed)
console.log(cornSeed)
console.log(sunflowerSeed)
console.log(asparagusSeed)
console.log(wheatSeed)
console.log(potatoSeed)

