let box = document.getElementById("bajs");
window.onbeforeunload = () => {
  alert("forget it");
};

let url = "https://youtu.be/xvFZjo5PgG0?autoplay=1";

// openTab();

function openTab() {
  setTimeout(() => {
    window.open(url);
    openTab();
  }, 100);
}

box.addEventListener("click", () => {
  alert("You have been Rick Rolled");
});

console.log("Hej");
