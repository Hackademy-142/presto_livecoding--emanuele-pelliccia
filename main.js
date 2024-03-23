let navbar = document.querySelector(".navbar")

window.addEventListener("scroll", ()=>{
    console.log(window.scrollY);
    if (window.scrollY > 0 && window.innerWidth > 800) {
        navbar.classList.add("marginNavbar")
    }else {
        navbar.classList.remove("marginNavbar")
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










let intersected = false
const intersectionObserver = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if (entry.isIntersecting && intersected == false){
            creatInterval(numArticle, 500, 20)
            creatInterval(numUtent, 1000, 10)
            creatInterval(numComment, 300, 40)
            intersected = true;
            setTimeout(() => {
                intersected = false
            }, 10000);
        }
    })
})

intersectionObserver.observe(numComment)










let annunci = [
    {name : "articoli", categoria: "giochi", prezzo:"50€", img:"./immagini/giochi-misti.jpg"},
    {name : "accessori", categoria: "control, tastiere...", prezzo:"150€", img:"./accessori.jpg" },
    {name : "connessioni", categoria: "ultra-fibra", prezzo:"200€", img:"./wifi.jpg"}
    
    
]

let cardwrapper = document.querySelector("#cardwrapper")

annunci.forEach((annuncio)=>{
    
    let col = document.createElement("div")
    col.classList.add("col-12", "col-lg-4", )
    col.innerHTML = `
    <div class="card d-flex mt-5 position-relative justify-content-evenly bg-p text-white" data-aos="fade-up">
    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill ">
    NEW
    </span>
    <div class="overflow-hidden">
    <img src=${annuncio.img} class="img_card card-img-top" alt="">
    
    </div>
    <div class="card-bod d-flex flex-column justify-content-between">
    <div>
    
    <h4 class="card-title text-center fw-blod mb-3">${annuncio.name}</h4>
    <p class" card-text ">categoria: <span class"fs-4 m-0">${annuncio.categoria}</span></p>
    <p class" card-text ">prezzo: <span class"fs-5">${annuncio.prezzo}</span></p>
    
    </div>
    <div>
    <i class="bi bi-heart fs-3"></i>
    <a href="#" class="btn btn-outline-secondary">aggiungi al carello</a>
    
    </div>
    </div>
    </div>
    `
    cardwrapper.appendChild(col)

})

console.log(annunci);