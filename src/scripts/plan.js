const types = ["soybean", "corn", "asparagus", "wheat", "potato", "sunflower"]

export const createPlan = () => { // create a variable called createPlan, make it exportable, and assign it a  function that...
    const plan = [] //... decalres a a var called plan and sets it to an empty array; 

    for (let index = 0; index < 3; index++) { 
        const row = []
        for (let j = 0; j < 6; j++) {
            row.push(crop.next().value)
        }
        plan.push(row)
    }

    return plan //invoking createPlan will return the var "plan", which will be equal to an array with 3 sub-arrays, each holding 6 string values (randomly populated by that crazy thing below) 
}               //so wherever createPlan is invoked, the value will be an array (with sub subrays as its 3 index values) full of strings from the types array above




/*
    This is a generator function used to randomly
    generate crop types to plants in each plot. It
    is not relevant for you implementing your code
    for this project.
*/
const crop = function* () {
    while (true) {
        const typeIdx = Math.floor(Math.random() * types.length)
        yield types[typeIdx]
    }
}()

