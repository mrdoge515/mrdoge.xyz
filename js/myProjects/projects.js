// Clearing all subText in html, so animations can take place
document.getElementById("aProject1").innerHTML = "";
document.getElementById("aProject2").innerHTML = "";
document.getElementById("aProject3").innerHTML = "";
document.getElementById("back").innerHTML = "";
document.getElementById("credits").innerHTML = "";

// Function to set text to links, and trigger fade animation
setTimeout(function text() {
    if(1 > 0) {
        document.getElementById("aProject1").innerHTML += "project1";
        document.getElementById("aProject2").innerHTML += "BreadBot";
        document.getElementById("aProject3").innerHTML += "project3";

        let background1 = document.getElementById('project1');
        let labels1 = document.getElementById('aProject1');
        let images1 = document.getElementById('pProject1');
        background1.classList.toggle('fade');
        labels1.classList.toggle('fade');
        images1.classList.toggle('fade');

        let background2 = document.getElementById('project2');
        let labels2 = document.getElementById('aProject2');
        let images2 = document.getElementById('pProject2');
        background2.classList.toggle('fade');
        labels2.classList.toggle('fade');
        images2.classList.toggle('fade');

        let background3 = document.getElementById('project3');
        let labels3 = document.getElementById('aProject3');
        let images3 = document.getElementById('pProject3');
        background3.classList.toggle('fade');
        labels3.classList.toggle('fade');
        images3.classList.toggle('fade');


        document.getElementById("back").innerHTML += "Take me back!";
        document.getElementById("credits").innerHTML += "\251 mrd0ge 2k22";
        let labels4 = document.getElementById('back');
        let labels5 = document.getElementById('credits');
        labels4.classList.toggle('fade');
        labels5.classList.toggle('fade');
    }
}, 1000)

// Function execution at load
window.onload = text();