const iconesSkills = document.querySelectorAll(".skills i")
const texts = document.querySelectorAll(".texts p")

iconesSkills.forEach(icone=>{
    icone.addEventListener("click" , ()=>{
        cleanAll()
        icone.classList.add("active")
        showText(icone)
    })
})

function cleanAll(){
    texts.forEach(text=>{
        text.style.display = "none"
    })
    iconesSkills.forEach(icone=>{
        icone.classList.remove("active")
    })
}

function showText(icone){
    texts.forEach(text=>{
        if(text.className == icone.id){
            text.style.display = "block"
        }
    })
}
    