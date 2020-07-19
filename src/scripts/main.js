// end of ch 1 instructions 
import {createPlan} from "./plan.js"
import { plantSeeds } from "./tractor.js"
import {plants} from "./field.js"
import {harvestPlants} from "./harvester.js"
import {Catalog} from "./catalog.js"

const yearlyPlan = createPlan()

plantSeeds(yearlyPlan)

console.log(harvestPlants(plants)) 
Catalog(harvestPlants(plants))

