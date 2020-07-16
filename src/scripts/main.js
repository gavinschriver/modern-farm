import {createCorn} from "./seeds/corn.js"
import {createSoybean} from "./seeds/soybean.js"
import {addPlant, usePlants} from "./field.js"

const soybeanSeed = createSoybean()
const cornSeed = createCorn()

addPlant(cornSeed)
addPlant(soybeanSeed)

const arrayOfPlants = usePlants()

console.log(arrayOfPlants)

arrayOfPlants.forEach((plant) => {
    if (Array.isArray(plant)) {
        console.log(`youve got corn at row ${(arrayOfPlants.indexOf(plant) + 1)}`)
        }
    }
)
