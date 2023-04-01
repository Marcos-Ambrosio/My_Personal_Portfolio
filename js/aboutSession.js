const links = document.querySelectorAll(".about .about-menu li")
const contents = document.querySelectorAll(".about .row .content")

links.forEach(link => {
    link.addEventListener("click" , ()=> {
        links.forEach(link => {
            link.classList.remove("active")
        })
    })
})

links.forEach(link => {
    link.addEventListener("click" , ()=> {
        link.classList.add("active")
        changeContent(link.id) 
    })
})


function changeContent(name){
    contents.forEach(content => {
        content.classList.remove("active")
    })

    contents.forEach(content => {
        if(content.id == name){
            content.classList.add("active")
        }
    })
}

