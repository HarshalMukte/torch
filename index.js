let btn = document.getElementById("btn");
let light = document.querySelector(".light");
let container = document.querySelector(".container");

btn.onclick = () => {
    btn.classList.toggle("active");
    light.classList.toggle("active");
    container.classList.toggle("active");

    if (btn.classList.contains("active")) {
        let audio = new Audio("audio/torch-on.mp3");
        audio.play();
    } else {
        let audio = new Audio("audio/torch-off.mp3");
        audio.play();
    }
}
