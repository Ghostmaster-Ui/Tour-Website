const urlParams = new URLSearchParams(window.location.search);
const city = urlParams.get("city");
const pkg = urlParams.get("package");
let basePrice = parseInt(urlParams.get("price"));

document.getElementById("package-info").textContent = `City: ${city}, Package: ${pkg}`;
document.getElementById("base-price").textContent = `Base Price: $${basePrice}`;
const totalDisplay = document.getElementById("total-price");

function updateTotal() {
  let total = basePrice;
  document.querySelectorAll(".addon:checked").forEach(cb => {
    total += parseInt(cb.value);
  });
  totalDisplay.textContent = `$${total}`;
}

document.querySelectorAll(".addon").forEach(cb => {
  cb.addEventListener("change", updateTotal);
});
// Initialize total
document.getElementById("confirm-payment-btn").addEventListener("click", (e) => {
  e.preventDefault();

  const order = {
    city,
    pkg,
    basePrice,
    addOns: [],
    totalPrice: totalDisplay.textContent
  };

  document.querySelectorAll(".addon:checked").forEach(cb => {
    order.addOns.push(cb.parentElement.textContent.trim());
  });

  const existingOrders = JSON.parse(localStorage.getItem("userOrders") || "[]");
  existingOrders.push(order);
  localStorage.setItem("userOrders", JSON.stringify(existingOrders));

  window.location.href = "success.html";
});

  
  
updateTotal();
