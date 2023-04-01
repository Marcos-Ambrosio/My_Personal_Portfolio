const projects = document.querySelectorAll(".projects .card .btn")

projects.forEach(btn => {
    btn.addEventListener("mouseover" , ()=>{
        const cardText = btn.parentElement
        cardText.querySelector("h4").style.color = "#f802ca"
        cardText.style.border = "1px solid #f802ca"
    })
    btn.addEventListener("mouseout" , ()=>{
        const cardText = btn.parentElement
        cardText.querySelector("h4").style.color = "#0ffbfa"
        cardText.style.border = "1px solid #0ffbfa"
    })
})