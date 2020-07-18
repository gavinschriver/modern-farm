export const plants = [] // will be an ARRAY of OBJECTS  (including SUB arrays of CORN)

export const addPlant = (seed) => { // create an exportable function called addPlant that accepts one parameter called "seed"
    plants.push(seed) // add the value of "seed" (the result of a createWhateverPlant function, so an OBJECT or if its corn ARRAY) to the
}


export const usePlants = () => {
    return plants.slice()
}


