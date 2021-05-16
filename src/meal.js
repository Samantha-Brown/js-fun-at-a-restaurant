
function nameMenuItem(name) {
  return `Delicious ${name}`
}


function createMenuItem(name, price, type) {
  return {
  name: name,
  price: price,
  type: type
  }
}


function addIngredients(ingredientName, ingredientsArray) {
  if (ingredientsArray.includes(ingredientName)) {
    return ingredientsArray;
  } else {
    return ingredientsArray.push(ingredientName);
  }
}

function formatPrice(initialPrice) {
  return `$${initialPrice}`;
}

function decreasePrice(initialPrice) {
  return initialPrice - (initialPrice * 0.1);
}


function createRecipe(title, ingredients, type) {
  return {
    title:title,
    ingredients:ingredients,
    type:type,
  }
}

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
