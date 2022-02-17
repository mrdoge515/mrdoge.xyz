var i = 0;
var txt = "My recent projects";
var speed = 50;

// Clearing all text in html, so animations can take place
document.getElementById("mainText").innerHTML = "";

// Function for main text animation
function typeWriter() {
  if (i < txt.length) {
    document.getElementById("mainText").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  } 
}

// Function execution at load
window.onload = typeWriter();