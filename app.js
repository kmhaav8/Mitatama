const analyzeBtn = document.getElementById("analyzeBtn");
const resetBtn = document.getElementById("resetBtn");
const result = document.getElementById("result");

analyzeBtn.addEventListener("click", () => {
  const text = document.getElementById("inputText").value.trim();
  if (!text) {
    alert("Kirjoita ensin aihe tai uutinen.");
    return;
  }
  result.classList.remove("hidden");
  result.scrollIntoView({ behavior: "smooth" });
});

resetBtn.addEventListener("click", () => {
  document.getElementById("inputText").value = "";
  result.classList.add("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
});
