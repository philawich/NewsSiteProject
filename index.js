document.addEventListener("DOMContentLoaded", ()=> {
    let toggleDark = document.querySelector("#moon")
    
    toggleDark.addEventListener("click", (e) => {
        e.preventDefault()
        document.body.style.background = "#080808";
        document.body.style.color = "white";


        
        // if (img.value === "Day") {
        //     body.style.background = "black"
        //     img.src = "./sun.png" 
        // } else {
        //     // opposite
        // }

    })
    

})



