/*function cargarCursos(){
    datosPublicos.forEach((curso)=>{
        tajreta.innerHTML += devolverTarjeta(curso)
    })
}*/

/*function devolverTarjeta(curso){`<img class="imagen-tarjeta"  style="width:200px" src="${curso.imagen}"></div>
                                <h4 class="nombre-tarjeta">NOMBRE: ${curso.nombre}</h4>
                                <p class="descripcion-tarjeta"></p>
                                <a class="video-tarjeta"></a>
                                <p class="dificultad-tarjeta">DIFICULTAD: ${curso.dificultad}</p>
                                <p class="edades-tarjeta">EDAD: ${curso.edad}</p>
                                <p class="horario-tarjeta">${curso.horario}</p>                            
                                <button class="agregarClase" id=${curso.id} >SELECCIONAR CLASE</button>
                                <br>` 
}*/

let tarjeta = document.getElementById("disponibles")
let carrito = JSON.parse(localStorage.getItem("contenedor")) || []
let total = document.getElementById("total")
total.addEventListener("click",obtenerTotal)

cursos.forEach(curso => {
    let contenedor = document.createElement('div')      
        contenedor.innerHTML += `<img class="imagen-tarjeta"  style="width:200px" src="${curso.imagen}"></div>
                                <h4 class="nombre-tarjeta">NOMBRE: ${curso.nombre}</h4>
                                <p class="dificultad-tarjeta">DIFICULTAD: ${curso.dificultad}</p>
                                <p class="edades-tarjeta">EDAD: ${curso.edad}</p>
                                <p class="horario-tarjeta">${curso.horario}</p>                            
                                <button class="agregarClase" id=${curso.id} >SELECCIONAR CLASE</button>
                                <br>`                              
        

        tarjeta.appendChild(contenedor)     
        
        let agregoClase = document.getElementById(`${curso.id}`)
                
        agregoClase.addEventListener("click", (e)=> {agruparSeleccionados(e.target.id)})
       
        function agruparSeleccionados(id){
            let resultado = cursos.find(curso => curso.id === parseInt(id))
            carrito.push(resultado)              
            
            alert("Se agregó esta clase a sus seleccionados.")
            guardarDatos(carrito)
        }
    })   

    


    
function guardarDatos(carrito){
            if (carrito.length > 0) {
                localStorage.setItem("contenedor", JSON.stringify(carrito))
            }
        }

        
function obtenerTotal(){ 
    if (carrito.length > 0) {
        
        let resultadoPrecios = carrito.reduce((acc, elemento)=>acc + elemento.precio, 0)
             
        promocion(resultadoPrecios)
    }else {
        alert("No se seleccionaron clases.")
    }
}

function promocion(resultado){
        let descuento = confirm("LOS ALUMNOS NUEVOS TIENEN 10% DE DESCUENTO EN LA PRIMER CUOTA. \n¿Es usted un alumno nuevo?")       
        if (descuento === true){
            alert("El valor de la cuota es de " + resultado * 0.9)
        }else{ 
            alert("El valor de la cuota es de " + resultado)
        } 
    }




        //agregoClase.forEach(elemento=>{elemento.addEventListener("click", guardarClase)})
        
      /*   agregoClase.addEventListener("click", ()=> {guardarClase(agregoClase)})
       
        function guardarClase(){
            
            localStorage.setItem("contenedor", enJSON)
            alert("Se agregó esta clase a sus seleccionados. Puede ver todos sus seleccionados en la pestaña 'mis clases'")
                
        }    */ 



//ESTO ES LO QUE ESTÁ EN DOM.MISCLASES

/*let tarjeta2 = document.getElementById("disponibles2")
const devolverTarjeta = json.parse(enJSON)

precios(devolverTarjeta)*/


/*let carritoenLS = localstorage.getItem("contenedor")

if (carritoenLS){
    carrito = carritoenLS
    rendercarrito()
}else {alert("No hay clases seleccionadas")}

function rendercarrito(){
    return json.parse(enJSON)
}*/
/* ESTO ANDA PERO NO GUARDA EN LOCALSTORAGE 
 */

/* ESTO NO ANDA
        let agregoClase = document.getElementsByClassName(`agregarClase`)
        for (boton of agregoClase){
            boton.addEventListener("click", () =>{console.log("hiciste click")})
        } let agregoClase = document.getElementsByClassName(`agregarClase`)
            for (boton of agregoClase){
                boton.addEventListener("click", () =>{console.log("hiciste click")})
            }       
/*for (i=0; i < agregoClase.length; i++){
            agregoClase[i].addEventListener("click", guardarClase, false)}*/

/*btnGuardar.addEventListener("click", ()=> {
            const historialCotizacion = {
                Propiedad: selectPropiedad[selectPropiedad.options.selectedIndex].textContent,
                Ubicacion: selectUbicacion[selectUbicacion.options.selectedIndex].textContent,
                metros2: inputMetros2.value,
                costoM2: costoM2
            }
            localStorage.setItem("HistorialCotizacion", JSON.stringify(historialCotizacion))
})*/


//en evento, cuando apreto seleccionar tarjeta, que me aparezca un alert diciendo que se agregó a "mis clases"

/*titulo.className = "probando2"
let parrafo = document.createElement("p")
parrafo.innerHTML = "<h1>probando</h1>"
document.body.append(parrafo)

                            <h4>NOMBRE: ${curso.nombre}</h4>
                            <p>DIFICULTAD: ${curso.dificultad}</p>
                            <p>EDAD: ${curso.edad}</p>
                            <p>HORARIO: ${curso.horario}</p>*/