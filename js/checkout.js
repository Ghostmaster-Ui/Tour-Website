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
    
    window.location.href = "success.html";
  });
  window.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const plan = decodeURIComponent(params.get("plan") || "N/A");
    const prompt = decodeURIComponent(params.get("prompt") || "N/A");
    const price = params.get("price") || "TBD";
  
    document.getElementById("aiPlan").innerHTML = plan.replace(/\n/g, "<br>");
    document.getElementById("estimatedPrice").textContent = `$${price}`;
    document.getElementById("travelRequest").textContent = prompt;
  });
  
updateTotal();
