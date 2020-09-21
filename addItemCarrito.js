function addItemCarrito(prdto) {
    let listCarrito = document.getElementById("list-carrito");
    let liCarrito = document.createElement("li");
    liCarrito.textContent = `${prdto.nombre}, $${prdto.precio}, ${prdto.cantidad} `;
    listCarrito.appendChild(liCarrito);
}
