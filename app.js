const output = document.getElementById("output");

function getPrompt() {
  const text = document.getElementById("prompt").value.trim();
  if (!text) {
    alert("Please enter a description");
    return null;
  }
  return text;
}

function loading() {
  output.innerHTML = `
    <div class="text-center text-slate-500 animate-pulse">
      Generating UI...
    </div>
  `;
}

function generateLanding() {
  const prompt = getPrompt();
  if (!prompt) return;

  loading();

  setTimeout(() => {
    output.innerHTML = `
      <div class="border rounded-xl p-6">
        <h3 class="text-2xl font-bold">Generated Landing Page</h3>
        <p class="mt-2 text-slate-600">${prompt}</p>
        <button class="mt-4 bg-primary text-white px-5 py-2 rounded-lg">
          Get Started
        </button>
      </div>
    `;
  }, 700);
}

function generatePricing() {
  const prompt = getPrompt();
  if (!prompt) return;

  loading();

  setTimeout(() => {
    output.innerHTML = `
      <div class="border rounded-xl p-6">
        <h3 class="text-2xl font-bold">Generated Pricing Page</h3>
        <p class="mt-2 text-slate-600">${prompt}</p>
        <p class="mt-4 font-semibold">₹199 / month</p>
      </div>
    `;
  }, 700);
}

