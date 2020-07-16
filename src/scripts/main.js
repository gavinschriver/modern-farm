import {createCorn} from "./seeds/corn.js"
import {createSoybean} from "./seeds/soybean.js"
import {addPlant, usePlants} from "./field.js"

const soybeanSeed = createSoybean()
const cornSeed = createCorn()

addPlant(cornSeed)
addPlant(soybeanSeed)

const arrayOfPlants = usePlants()

console.log(arrayOfPlants)



