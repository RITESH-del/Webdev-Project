
// incrementing cart-btn on click
document.addEventListener("DOMContentLoaded", () => {
  const cartBtn = document.querySelector(".cart-btn");

  let count = 0;

  cartBtn.addEventListener("click", () => {
    count++; // Increment count
    cartBtn.textContent = `🛒 ${count}`; // Update the button text
  });
});