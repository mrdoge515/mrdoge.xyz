// Clearing all subText in html, so animations can take place
document.getElementById("twitch").innerHTML = "";
document.getElementById("spacer1").innerHTML = "";
document.getElementById("youtube").innerHTML = "";
document.getElementById("spacer2").innerHTML = "";
document.getElementById("steam").innerHTML = "";

document.getElementById("github").innerHTML = "";
document.getElementById("spacer3").innerHTML = "";
document.getElementById("myProjects").innerHTML = "";
document.getElementById("spacer4").innerHTML = "";
document.getElementById("discord").innerHTML = "";

document.getElementById("credits").innerHTML = "";


// Function to set text to links, and trigger fade animation
setTimeout(function text() {
    if(1 > 0) {
        document.getElementById("twitch").innerHTML += "Twitch ";
        document.getElementById("spacer1").innerHTML += "|";
        document.getElementById("youtube").innerHTML += " YouTube ";
        document.getElementById("spacer2").innerHTML += "|";
        document.getElementById("steam").innerHTML += " Steam";

        document.getElementById("github").innerHTML += "Github ";
        document.getElementById("spacer3").innerHTML += "|";
        document.getElementById("myProjects").innerHTML += " MyProjects ";
        document.getElementById("spacer4").innerHTML += "|";
        document.getElementById("discord").innerHTML += " Discord";

        document.getElementById("credits").innerHTML += "\251 mrd0ge 2k22";

        let labels = document.getElementById('subText');
        labels.classList.toggle('fade');
    }
}, 1275)

// Function execution at load
window.onload = text();
