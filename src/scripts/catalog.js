export const Catalog = (harvestedFood) => {
  harvestedFood.forEach((food) => {
    const targetArea = document.querySelector(".container");

    targetArea.innerHTML += `<h2>${food.type}</h2>`;
  });
};
