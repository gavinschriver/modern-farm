export const harvestPlants = (plantsArray) => {

    const harvestOutput = [];

    for (var i = 0; i < plantsArray.length; i++) {
      if (Array.isArray(plantsArray[i])) {
        for (var k = 0; k < plantsArray[i].length; k++) {
          var aPropNumber = (plantsArray[i][k].output) / 2 ;
          for (var l = 0; l < aPropNumber; l++) {
            harvestOutput.push(plantsArray[i][k]);
          }
        }
      } else {
        var outputnumber = plantsArray[i].output;

        for (var j = 0; j < outputnumber; j++) {
          harvestOutput.push(plantsArray[i]);
        }
      }
    }

    return harvestOutput
  
  }