let btn = document.getElementById("btn");
let light = document.querySelector(".light");
let container = document.querySelector(".container");

btn.onclick = () => {
    btn.classList.toggle("active");
    light.classList.toggle("active");
    container.classList.toggle("active");
}