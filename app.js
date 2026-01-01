const output = document.getElementById("output");

function getPrompt() {
  const text = document.getElementById("prompt").value.trim();
  if (!text) {
    alert("Please enter a description");
    return null;
  }
  return text;
}

function generateLanding() {
  const prompt = getPrompt();
  if (!prompt) return;

  output.innerHTML = `
    <div class="border rounded-2xl overflow-hidden bg-white">

      <section class="px-8 py-16 text-center">
        <h2 class="text-4xl font-bold text-slate-900">
          Build Better Products Faster
        </h2>
        <p class="mt-4 text-slate-600 max-w-xl mx-auto">
          ${prompt}
        </p>
        <button class="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg">
          Get Started
        </button>
      </section>

      <section class="bg-slate-50 px-8 py-14 grid md:grid-cols-3 gap-6">
        ${feature("Clean UI", "Modern layouts with professional spacing")}
        ${feature("Production Ready", "Tailwind CSS code you can use directly")}
        ${feature("Fast Setup", "Skip design confusion and start building")}
      </section>

      <section class="bg-slate-900 text-white px-8 py-14 text-center">
        <h3 class="text-2xl font-semibold">
          Ready to ship your idea?
        </h3>
        <button class="mt-4 bg-white text-slate-900 px-6 py-3 rounded-lg">
          Start Building
        </button>
      </section>

    </div>
  `;
}

function generatePricing() {
  const prompt = getPrompt();
  if (!prompt) return;

  output.innerHTML = `
    <div class="bg-white border rounded-2xl px-8 py-16">
      <h2 class="text-4xl font-bold text-center text-slate-900">
        Simple Pricing
      </h2>
      <p class="text-center text-slate-600 mt-3">${prompt}</p>

      <div class="grid md:grid-cols-3 gap-6 mt-12">
        ${pricing("Free", "₹0", ["Basic UI", "Limited usage"])}
        ${pricing("Pro", "₹199", ["Unlimited UI", "Export code"], true)}
        ${pricing("Agency", "₹999", ["Client projects", "Unlimited exports"])}
      </div>
    </div>
  `;
}

function feature(title, desc) {
  return `
    <div class="bg-white p-6 rounded-xl shadow-sm">
      <h4 class="font-semibold text-lg">${title}</h4>
      <p class="text-slate-600 mt-2">${desc}</p>
    </div>
  `;
}

function pricing(title, price, features, highlight = false) {
  return `
    <div class="p-6 rounded-xl border ${highlight ? "border-blue-600" : ""}">
      <h4 class="font-semibold text-xl">${title}</h4>
      <p class="text-3xl font-bold mt-2">${price}</p>
      <ul class="mt-4 space-y-2 text-slate-600">
        ${features.map(f => `<li>• ${f}</li>`).join("")}
      </ul>
      <button class="mt-6 w-full py-2 rounded-lg ${
        highlight ? "bg-blue-600 text-white" : "border border-blue-600 text-blue-600"
      }">
        Choose Plan
      </button>
    </div>
  `;
}

