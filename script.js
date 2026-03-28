// SCROLL REVEAL
const panels = document.querySelectorAll(".panel");

window.addEventListener("scroll", () => {
  panels.forEach(panel => {
    const rect = panel.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      panel.classList.add("show");
    }
  });
});

// BUTTON INTERACTION
function showFuture() {
  document.getElementById("finalText").innerText =
    "AI + Humans = The Most Powerful Future 🌍🚀";
}