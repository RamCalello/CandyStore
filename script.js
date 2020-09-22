class Productos {
    constructor(imagen, nombre, precio, cantidad, id) {
        this.imagen = imagen
        this.nombre = nombre
        this.precio = precio
        this.cantidad = cantidad
        this.id = id
    }
}

var producto1 = new Productos (
    "trisho.jpg"
    , "Alfajor Tri Shot"
    , "70"
    , "60gr"
    , 1
)

var producto2 = new Productos (
    "cadburyFrutilla.jpg"
    , "Chocolate Cadbury Yoghurt Frutilla"
    , "70"
    , "25g"
    , 2
)

var producto3 = new Productos (
    "Franui.jpg"
    , "Fra-Nui -Frambuesas Cubiertas Con Chocolate"
    , "300"
    , "150gr"
    , 3
)

let listaProductos = [];
listaProductos.push(producto1,producto2,producto3)
recorrerProductos()

function recorrerProductos(){
    let containerProductos = document.getElementById("container-productos")
    containerProductos.innerHTML=''
    listaProductos.forEach(x=>{
        createCard(x)
    })
}

function createCard(producto){
    
    let containerProductos = document.getElementById("container-productos")
    
    let div_card = document.createElement("div")

    div_card.classList.add("card")

    let img_card = document.createElement("img")
    img_card.classList.add("img-card")
    img_card.src = "./img/" + producto.imagen
    div_card.appendChild(img_card)

    let p_card = document.createElement("p")
    p_card.textContent = `${producto.nombre}, $${producto.precio}, ${producto.cantidad} `
    p_card.classList.add("card-text")
    div_card.appendChild(p_card)

    let button_card = document.createElement("button")
    button_card.classList.add("btn-card")
    button_card.textContent = "Comprar"
    button_card.addEventListener('click', clickButton)
    button_card.setAttribute("id", producto.id)
    div_card.appendChild(button_card)

    containerProductos.appendChild(div_card)
}

function clickButton(btn){
    let producto = listaProductos.find(x=>x.id.toString() === btn.target.id)
    addItemCarrito(producto)
}

function addItemCarrito(prdto) {
    let listCarrito = document.getElementById("list-carrito");
    let liCarrito = document.createElement("li");
    liCarrito.textContent = `${prdto.nombre}, $${prdto.precio}, ${prdto.cantidad} `;
    listCarrito.appendChild(liCarrito);
}

function ordenarPorPrecio(){
    listaProductos.sort(sortValues)
    recorrerProductos()
}

function sortValues(a,b){
    if(a.precio < b.precio)
        return -1
    else if (a.precio > b.precio)
        return 1
    else 
        return 0
}

function filtrarTipo(){
    let filtro = document.getElementById("filtroTipo")
    //OJO ACA, USABAN EN FILTER UNA PROPIEDADAD TIPO QUE EN EL OBJETO NO EXISTE, LA CAMBIE POR NOMBRE (x.nombre)
    let listFiltrada = listaProductos.filter(x=> x.nombre.toUpperCase().includes(filtro.value.toUpperCase()))
    let containerProductos = document.getElementById("container-productos")
    containerProductos.innerHTML =''
    listFiltrada.forEach(x=>{
        createCard(x);
    })
}
