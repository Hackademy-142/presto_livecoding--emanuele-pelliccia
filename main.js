let navbar = document.querySelector(".navbar")

window.addEventListener("scroll", ()=>{
    console.log(window.scrollY);
    if (window.scrollY > 0) {
        navbar.classList.add("nav_scroll")
    }else {
        navbar.classList.remove("nav_scroll")
    }
})



let numArticle = document.querySelector("#numberArticle");
let numUtent = document.querySelector ("#numberUtent");
let numComment = document.querySelector("#numBerComment");

function creatInterval(elementId, finalNumber, frequency) {
    let counter = 0
    let intervallo = setInterval(()=>{
        if (counter < finalNumber) {
            counter++
            elementId.innerHTML = counter;
        } else {
            clearInterval(intervallo);
           }
    }, frequency);
    
}

creatInterval(numArticle, 500, 20)
creatInterval(numUtent, 1000, 10)
creatInterval(numComment, 300, 40)

