const list = document.querySelectorAll(".navbar .nav-link a")
const header = document.querySelector(".header")

list.forEach(link => {
    link.addEventListener("click" , ()=>{
        menu.classList.remove("show")
    })
})


function scrollAnimation(){
    const height = window.pageYOffset 
    
    if(height >= 100) {
        header.style.background = "#000"
        header.querySelector(".container").style.borderBottom = "1px solid #0ffbfa"
    }
    if(height < 100) {
        header.style.background = "transparent"
        header.querySelector(".container").style.borderBottom = "none"
    }

    if(height < 558 && height >= 0) {
        clear()
        list[0].classList.add("active")
    } else if(height >= 558 && height < 1157) {
        clear()
        list[1].classList.add("active")
    } else if(height >= 1157 && height < 1757) {
        clear()
        list[2].classList.add("active")
    } else if(height >= 1757 && height < 2400) {
        clear()
        list[3].classList.add("active")
    } else if(height >= 2400 && height < 2800) {
        clear()
        list[4].classList.add("active")
    }

}

function clear(){
    list.forEach(item => {
        item.classList.remove("active")
    })
}
scrollAnimation()
window.addEventListener("scroll" , scrollAnimation)