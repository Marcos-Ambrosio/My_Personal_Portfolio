const btnSend = document.querySelector(".btn-send")
const modal = document.querySelector(".modal-background")

btnSend.addEventListener("click" , (event)=>{
    event.preventDefault()
    modal.classList.remove("hide")
    setTimeout(()=>{
        modal.classList.add("hide")
    } , 9000)
})
