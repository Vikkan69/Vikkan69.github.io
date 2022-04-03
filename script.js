let box = document.getElementById("bajs");
window.onbeforeunload = () => {
  alert("forget it");
};

box.addEventListener("click", () => {
  alert("You have been Rick Rolled");
  console.log("Hej");

  let url = "https://www.youtube.com/watch?v=dQw4w9WgXcQ?autoplay=1";

  openTab();

  function openTab() {
    setTimeout(() => {
      window.open(url);
      console.log("Opening tab...");
      openTab();
    }, 100);
  }
});

console.log("Hej");
