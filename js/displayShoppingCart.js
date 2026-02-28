const cartList = document.getElementById("cart-items-list");

function displayCart() {
  let cart = JSON.parse(localStorage.getItem("shoppingCart")) || [];

  cartList.innerHTML = "";

  if (cart.length === 0) {
    cartList.innerHTML = "<p>Your cart is empty.</p>";
    return;
  }

  cart.forEach((item, index) => {
    const itemDiv = document.createElement("div");
    itemDiv.className = "cart-item";
    itemDiv.innerHTML = `
    <div class="cart-item-details">
<img src="${item.image}" width ="50">
<span>${item.name} - ${item.price} SEK</span>
</div>
      <img 
        src="images/deleteWhite.png" 
        class="delete-icon" 
        alt="Delete icon" 
        onclick="removeItem(${index})"
        />
`;
    cartList.appendChild(itemDiv);
  });
}

function removeItem(index) {
  let cart = JSON.parse(localStorage.getItem("shoppingCart")) || [];
  cart.splice(index, 1);
  localStorage.setItem("shoppingCart", JSON.stringify(cart));
  displayCart();
}
displayCart();
