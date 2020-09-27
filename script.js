class Productos {
    constructor(imagen, nombre, precio, cantidad) {
        this.imagen = imagen
        this.nombre = nombre
        this.precio = precio
        this.cantidad = cantidad
    }
}

var producto1 = new Productos (
    "trisho.jpg",
    "Alfajor Tri Shot",
    "$70"
)

var producto2 = new Productos (
    "cadburyFrutilla.jpg",
    "Chocolate Cadbury Yoghurt Frutilla",
    "$110"
)

var producto3 = new Productos (
    "Franui.jpg",
    "Fra-Nui -Frambuesas Cubiertas Con Chocolate",
    "$300"
)

let listaProductos = [];
listaProductos.push(producto1,producto2,producto3)

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
    img_card.src = "./img/" + Productos.imagen
    div_card.appendChild(img_card)
    let p_card = document.createElement("p")
    p_card.textCoxtent = `${Productos.nombre}, ${Productos.precio}, ${Productos.cantidad} `
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
    let producto = listaProductos.find(x=> x.id.toString() === btn.target.id)
    addItemCarrito(producto)
}

function addItemCarrito(producto){
    let listCarrito = document.getElementById("list-carrito")
    let liCarrito = document.createElement("li")
    liCarrito.textCoxtent = `${Productos.nombre}, ${Productos.precio}, ${Productos.cantidad} `
    listCarrito.appendChild(liCarrito)
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
    let filtro = document.getElementById('filtroTipo')
    let listFiltrada = listProductos.filter(x=> x.nombre.toUpperCase().includes(filtro.value.toUpperCase()))
    let containerProductos = document.getElementById("container-productos")
    containerProductos.innerHTML =''
    listFiltrada.forEach(x=>{
        createCard(x)
    })
}