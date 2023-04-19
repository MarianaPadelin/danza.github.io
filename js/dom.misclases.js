/*let tarjeta2 = document.getElementById("disponibles2")
const devolverTarjeta = json.parse(enJSON)

precios(devolverTarjeta)*/

let carrito = []
let carritoenLS = localstorage.getItem("contenedor")

if (carritoenLS){
    carrito = carritoenLS
    rendercarrito()
}else {alert("No hay clases seleccionadas")}

function rendercarrito(){
    return json.parse(enJSON)
}