
// let reciepe = { flour: 500, sugar: 200, eggs: 1 };
// let ingredients = { flour: 1200, sugar: 1200, eggs: 5, milk: 200 };
// console.log("This is answer of 2nd assignment -------> ");
// console.log(dishes(reciepe, ingredients));

let reciepe = {apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100};
let ingredients = {sugar: 500, flour: 2000, milk: 2000};
console.log("This is answer of 2nd assignment -------> ");
console.log(dishes(reciepe, ingredients));

function dishes(recipe, ingredients) {
    let maxDishes = null;
    for (let ingredient in recipe) {
        let requiredAmount = recipe[ingredient];
        let availableAmount = ingredients[ingredient] || 0;
        let possibleDishes = availableAmount / requiredAmount;
        if (maxDishes === null || possibleDishes < maxDishes) {
            maxDishes = Math.floor(possibleDishes);
        }
    }
    return maxDishes === null ? 0 : maxDishes;
}

