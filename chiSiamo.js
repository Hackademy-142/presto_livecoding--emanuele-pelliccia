
let navBar = document.querySelector(".navbar")

window.addEventListener("scroll", ()=>{
    console.log(window.scrollY);
    if (window.scrollY > 0 && window.innerWidth > 800) {
        navbar.classList.add("margineNavbar")
    }else {
        navbar.classList.remove("margineNavbar")
    }
})
