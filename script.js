// Lightweight interaction script for better performance

document.addEventListener("DOMContentLoaded", () => {

  // Smooth button click effect
  document.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", () => {
      button.classList.add("clicked");
      setTimeout(() => {
        button.classList.remove("clicked");
      }, 120);
    });
  });

});
