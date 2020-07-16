

export const plantSeeds = (plantingPlan) => {
    plantingPlan.forEach((row) => {
        row.forEach(plant) => {
            switch (plant) {
                case "asparagus":
                    return createAsparagus()
                case "corn":
                    return createCorn()
                    break 
                case "sunflower":
                    return createSunflow()
                    break
                case "wheat":
                    return createWheat()
                    break
                case "potato":
                    return createPotato()
                    break
                case "soybean":
                    return createSoybean()
            }
        }
    }
}