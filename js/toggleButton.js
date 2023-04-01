const openButton = document.querySelector(".open")
const closeButton = document.querySelector(".close")
const menu = document.querySelector(".header .navbar ul")

openButton.addEventListener("click" , ()=>{
    menu.classList.add("show")
})

closeButton.addEventListener("click" , ()=>{
    menu.classList.remove("show")
})