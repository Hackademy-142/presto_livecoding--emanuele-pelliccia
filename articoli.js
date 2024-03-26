let navbar = document.querySelector(".navbar")

window.addEventListener("scroll", ()=>{
    console.log(window.scrollY);
    if (window.scrollY > 0 && window.innerWidth > 800) {
        navbar.classList.add("marginNavbar")
    }else {
        navbar.classList.remove("marginNavbar")
    }
})



fetch("./articoli.JSON").then((response)=> response.json()).then((data)=>{
// console.log(data);
let articles = document.querySelector("#articles")
// console.log(articles);

function createCards(array) {
    articles.innerHTML = ""
    array.forEach((articolo, i) => {
        let col = document.createElement("div")
        col.classList.add("col-11", "col-lg-3", "my-3", "mx-3")
        col.innerHTML = `
        <div class="card" ">
        <img src="https://picsum.photos/20${i}" class="card-img-top" alt="">
        <div class="card-body">
        <h4 class="card-title text-center fw-blod mb-3">${articolo.nome}</h4>
<p class" card-text ">categoria: <span class"fs-4 m-0">${articolo.categoria}</span></p>
<p class" card-text ">prezzo: <span class"fs-5">${articolo.prezzo}</span></p>
<div>
<i class="bi bi-heart fs-3"></i>
<a href="" class="btn btn-outline-secondary" >Visita</a>

</div>
        </div>
      </div>
     
        `
articles.appendChild(col)

        
    });
    
}
createCards(data)

// creazione categoria
let bottoni = document.querySelector("#bottoni")

function categories() {
    let categories = data.map((el)=> el.categoria)
    let uniquecategories = [];
    categories.forEach((category)=>{
        if (uniquecategories.includes(category) == false){
            uniquecategories.push(category)
        }

    })
    uniquecategories.sort().forEach((categoria)=>{
        let div = document.createElement("div")
        div.classList.add("form-check")
        div.innerHTML = `
        <input class="form-check-input" type="radio" name="flexRadioDefault" id="${categoria}">
        <label class="form-check-label" for="flexRadioDefault1">
          ${categoria}
        </label>
        `

        bottoni.appendChild(div)

    })
}
categories()

// creazione filtro
let checkInput = document.querySelectorAll(".form-check-input")

function filtroCategory(array) {
    let radiosBtn = Array.from(checkInput)
    // console.log(radiosBtn);
    let checked = radiosBtn.find( (el)=> el.checked)
    // console.log(checked);
    if(checked.id != "all"){
        // console.log(array);
        let filtered = array.filter((el)=> el.categoria == checked.id)
        articles.innerHTML =  ""
        // createCards(filtered)
        return filtered
        
        
    }else{
        
        return array
        // console.log(filtered);
    }
}

checkInput.forEach((input)=>{
    input.addEventListener("click", ()=>{
        
        globalFilter()

    })
})


// filtro prezzo
let inputprice = document.querySelector("#inputPrice")
let valuecurrent = document.querySelector("#valuecurrent")

function maxAndMinPrice() {
    let prices = data.map ((articolo)=> articolo.prezzo)
    let max = Math.max(...prices )
    // let min = Math.min(...prices )
    inputprice.max = max
    // inputprice.min = min
    inputprice.value = max
    valuecurrent.innerHTML = max


    
}
 maxAndMinPrice()
// globalFilter()


function filterPrice(array) {
    let filtered = array.filter((el)=> el.prezzo <= inputprice.value)
    console.log(filtered);
    return filtered
}


inputprice.addEventListener("input", ()=>{
    valuecurrent.innerHTML = inputprice.value
    globalFilter()
})

// filtro parola

let inputParola = document.querySelector("#inputParola")
function filterParola(array) {

    let filtered = array.filter((el)=> el.nome.toLowerCase().includes(inputParola.value))
    return filtered
}

inputParola.addEventListener("input", ()=>{
    globalFilter()
})

function globalFilter(){
    let filteredByCategory = filtroCategory(data)
    let filteredByPrice =  filterPrice(filteredByCategory)
    let filterByParola = filterParola(filteredByPrice)
    createCards(filterByParola)


}


})