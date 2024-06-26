// NAV BAR

let navbar = document.querySelector(".navbar")

window.addEventListener("scroll", ()=>{
    if (window.scrollY > 0 && window.innerWidth > 800) {
        navbar.classList.add("marginNavbar")
    }else {
        navbar.classList.remove("marginNavbar")
    }
})


// NUMERI
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









// NUMERI
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








// CATEGORIA

let annunci = [
    {name : "articoli", categoria: "giochi", prezzo:"50€", img:"./immagini/giochi-misti.jpg"},
    {name : "accessori", categoria: "control, tastiere...", prezzo:"150€", img:"./immagini/accessori.jpg" },
    {name : "connessioni", categoria: "ultra-fibra", prezzo:"200€", img:"./immagini/wifi.jpg"}
    
    
]

let cardwrapper = document.querySelector("#cardwrapper")

annunci.forEach((annuncio)=>{
    
    let col = document.createElement("div")
    col.classList.add("col-12", "col-lg-4", )
    col.innerHTML = `
    <div class="card d-flex my-5 mx-3 position-relative justify-content-evenly bg-p text-white " data-aos="fade-up">
    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill ">
    NEW
    </span>
    <div class="overflow-hidden">
    <img src=${annuncio.img} class="img_card card-img-top" alt="">
    
    </div>
    <div class="card-body d-flex flex-column justify-content-between">
    <div>
    
    <h4 class="card-title text-center fw-blod mb-3">${annuncio.name}</h4>
    <p class" card-text ">categoria: <span class"fs-4 m-0">${annuncio.categoria}</span></p>
    <p class" card-text ">prezzo: <span class"fs-5">${annuncio.prezzo}</span></p>
    
    </div>
    <div>
    <i class="bi bi-heart fs-3"></i>
    <a href="" class="btn btn-outline-secondary" >Visita</a>
    
    </div>
    </div>
    </div>
    `
    cardwrapper.appendChild(col)

})





// SWIPER
const swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
  });