// end of ch 1 instructions 
import {createPlan} from "./plan.js"
import { plantSeeds } from "./tractor.js"
import {plants} from "./field.js"

const yearlyPlan = createPlan()

plantSeeds(yearlyPlan)

console.log(plants)