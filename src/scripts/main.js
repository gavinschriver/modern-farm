import {createCorn} from "./seeds/corn.js"
import {createSoybean} from "./seeds/soybean.js"
import {addPlant, usePlants} from "./field.js"

const soybeanSeed = createSoybean()
const cornSeed = createCorn()

addPlant(cornSeed)
addPlant(soybeanSeed)

const arrayOfPlants = usePlants()

console.log(arrayOfPlants)

for (const plant of arrayOfPlants) {
    if (Array.isArray(plant)) {
      console.log(`You've got corn at row ${(arrayOfPlants.indexOf(plant) + 1)}`)
    }
  }



