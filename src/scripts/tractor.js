// import addPlant and create functions
import { addPlant } from "./field.js"; // grab addPlant function
import { createAsparagus } from "./seeds/asparagus.js";
import { createCorn } from "./seeds/corn.js";
import { createSunflower } from "./seeds/sunflower.js";
import { createWheat } from "./seeds/wheat.js";
import { createPotato } from "./seeds/potato.js";
import { createSoybean } from "./seeds/soybean.js";


export const plantSeeds = (plantingPlan) => { //define a function assigned to the var name plantSeeds which takes 1 parameter, named plantingPlan, which will be an array 
  plantingPlan.forEach( //for each array found in a plantingPlan argument...
    (row) => { // name each of those sub-arrays "row", and then
      row.forEach( // for each of each of those sub-arrays called "row"...
        (plant) => { // name each index item "plant", and then..
          switch (plant) {    
            case "asparagus":   //if "plant" is equal to "asparagus"...
              addPlant(createAsparagus()); //invoke the addplant 
              break;
            case "corn":
              addPlant(createCorn());
              break;
            case "sunflower":
              addPlant(createSunflower());
              break;
            case "wheat":
              addPlant(createWheat());
              break;
            case "potato":
              addPlant(createPotato());
              break;
            case "soybean":
              addPlant(createSoybean());
              break;  
          } //end switch statement
        } // end plant.forEach function parameter
      ); //end row.forEach statement
    } // end plantingPlan function parameter
  ); //end plantingPlan forEach statement
}; // end plantSeeds function


// this whole function is a LOOP that will step through every single individual plant string in the plan and 1) invoke its createFunction, which RETURNS AN OBJECT (or array, if its corn), then passes 
// object into the addPLant function