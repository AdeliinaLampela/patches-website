function addToCart(name, price, image) {
  let cart = JSON.parse(localStorage.getItem("shoppingCart")) || [];

  const product = { name, price, image, id: Date.now() };

  cart.push(product);
  localStorage.setItem("shoppingCart", JSON.stringify(cart));

  alert(name + " added to cart!");
}

const addButton = document.getElementById("add-to-cart");
if (addButton) {
  addButton.addEventListener("click", () => {
    addToCart("Scout Patch", 30, "images/patch1.img");
  });
}
