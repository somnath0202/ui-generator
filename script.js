function generateUI() {
  const prompt = document.getElementById("prompt").value;

  if (!prompt) {
    alert("Please write something");
    return;
  }

  document.getElementById("output").innerHTML = `
    <h2>Generated Landing Page</h2>
    <p><strong>${prompt}</strong></p>
    <button>Get Started</button>
  `;
}
