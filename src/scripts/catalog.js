export const Catalog = (harvestedFood) => {
  const targetArea = document.querySelector(".container");

  let unsortedFoodItems = [];

  harvestedFood.forEach((foodObj) => unsortedFoodItems.push(foodObj.type));

  const sortedFoodItems = unsortedFoodItems.sort();

  sortedFoodItems.forEach(
    (sortedFoodItem) =>
      (targetArea.innerHTML += `<section class="foodItem">${sortedFoodItem}</section>
  `)
  );
};
