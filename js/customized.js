document.getElementById('generatePlanBtn').addEventListener('click', async () => {
  const prompt = document.getElementById('userPrompt').value.trim();
  const outputDiv = document.getElementById('aiResponse');

  if (!prompt) {
    outputDiv.innerHTML = "<span style='color:red;'>Please enter your travel preferences first!</span>";
    return;
  }

  outputDiv.textContent = "Generating plan... please wait ⏳";

  try {
    const response = await fetch("https://tour-website-5tt6.onrender.com/generate-plan", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ prompt })
    });

    const data = await response.json();

    if (data.plan) {
      outputDiv.innerHTML = data.plan.replace(/\n/g, "<br>");

      const encodedPlan = encodeURIComponent(data.plan);
      const encodedPrompt = encodeURIComponent(prompt);
      const priceEstimate = Math.floor(Math.random() * 400) + 400;

      const checkoutUrl = `checkout.html?plan=${encodedPlan}&prompt=${encodedPrompt}&price=${priceEstimate}`;

      const checkoutBtn = document.createElement("a");
      checkoutBtn.textContent = "Proceed to Checkout";
      checkoutBtn.href = checkoutUrl;
      checkoutBtn.className = "checkout-btn";
      checkoutBtn.style.display = "inline-block";
      checkoutBtn.style.marginTop = "20px";
      checkoutBtn.style.background = "#00bfff";
      checkoutBtn.style.color = "#fff";
      checkoutBtn.style.padding = "10px 20px";
      checkoutBtn.style.borderRadius = "8px";
      checkoutBtn.style.textDecoration = "none";
      checkoutBtn.style.fontWeight = "600";

      outputDiv.appendChild(checkoutBtn);
    } else {
      outputDiv.innerHTML = "<span style='color:red;'>No plan received. Try again later.</span>";
    }
  } catch (err) {
    console.error("Fetch error:", err);
    outputDiv.innerHTML = "<span style='color:red;'>Failed to fetch plan. Please try again.</span>";
  }
});
