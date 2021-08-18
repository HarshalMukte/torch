const btn = document.getElementById("btn");
let light = document.querySelector(".light");
btn.onclick = () => {
    btn.classList.toggle("active");
    light.classList.toggle("active");
    document.querySelector(".container").classList.toggle("active");
}