const output = document.getElementById("output");

function getPrompt() {
  const text = document.getElementById("prompt").value.trim();
  if (!text) {
    alert("Please describe your page idea");
    return null;
  }
  return text;
}

/* ---------------- LANDING PAGE ---------------- */

function generateLanding() {
  const prompt = getPrompt();
  if (!prompt) return;

  output.innerHTML = `
    <div class="border rounded-2xl overflow-hidden">

      <!-- HERO -->
      <section class="px-8 py-20 text-center bg-white">
        <h2 class="text-4xl font-bold text-gray-900">
          Build Faster. Launch Smarter.
        </h2>
        <p class="mt-4 text-gray-600 max-w-xl mx-auto">
          ${prompt}
        </p>
        <button class="mt-6 bg-black text-white px-8 py-3 rounded-xl">
          Get Started
        </button>
      </section>

      <!-- FEATURES -->
      <section class="bg-gray-50 px-8 py-16 grid md:grid-cols-3 gap-6">
        ${featureCard("Clean UI", "Modern layouts built with UX best practices")}
        ${featureCard("Production Ready", "Real Tailwind CSS code ready to use")}
        ${featureCard("Fast Decisions", "No more guessing layouts")}
      </section>

      <!-- CTA -->
      <section class="bg-black text-white px-8 py-16 text-center">
        <h3 class="text-2xl font-semibold">
          Ready to turn ideas into UI?
        </h3>
        <button class="mt-4 bg-white text-black px-8 py-3 rounded-xl">
          Start Now
        </button>
      </section>

    </div>
  `;
}

/* ---------------- PRICING PAGE ---------------- */

function generatePricing() {
  const prompt = getPrompt();
  if (!prompt) return;

  output.innerHTML = `
    <div class="border rounded-2xl overflow-hidden bg-white px-8 py-16">

      <h2 class="text-4xl font-bold text-center text-gray-900">
        Simple Pricing
      </h2>
      <p class="text-center text-gray-600 mt-3">
        ${prompt}
      </p>

      <div class="grid md:grid-cols-3 gap-6 mt-12">

        ${pricingCard("Free", "₹0", ["Basic UI", "Limited usage"])}
        ${pricingCard("Pro", "₹199", ["Unlimited UI", "Export code", "No watermark"], true)}
        ${pricingCard("Agency", "₹999", ["Client usage", "Unlimited exports"])}

      </div>
    </div>
  `;
}

/* ---------------- COMPONENT HELPERS ---------------- */

function featureCard(title, desc) {
  return `
    <div class="bg-white p-6 rounded-xl shadow-sm">
      <h4 class="font-semibold text-lg">${title}</h4>
      <p class="text-gray-600 mt-2">${desc}</p>
    </div>
  `;
}

function pricingCard(title, price, features, highlight = false) {
  return `
    <div class="p-6 rounded-xl border ${highlight ? "border-black" : ""}">
      <h4 class="font-semibold text-xl">${title}</h4>
      <p class="text-3xl font-bold mt-2">${price}</p>
      <ul class="mt-4 text-gray-600 space-y-2">
        ${features.map(f => `<li>• ${f}</li>`).join("")}
      </ul>
      <button class="mt-6 w-full py-2 rounded-lg ${
        highlight ? "bg-black text-white" : "border border-black"
      }">
        Choose Plan
      </button>
    </div>
  `;
}
