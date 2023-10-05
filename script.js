var lightOn = false;
var lightImage = document.getElementById("lightImage");

function toggleLight() {
  lightOn = !lightOn;
  if (lightOn) {
    lightImage.classList.add("glow");
  } else {
    lightImage.classList.remove("glow");
  }
}

document.getElementById("buyButton").addEventListener("click", function() {
  alert("Thank you for your purchase!");
});

document.getElementById("lightImage").addEventListener("click", toggleLight);