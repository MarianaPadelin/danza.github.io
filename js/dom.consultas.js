/* BUSCAR X NOMBRE*/
const agarroNombre = document.getElementById("nombre")
const agarroHorario = document.getElementById("horario")
const agarroEdad = document.getElementById("edad")


for (const elemento of nombreCursos){
    
    const agregoOpcion = document.createElement("option")
    agregoOpcion.innerHTML += `<option value="${elemento}">${elemento}</option>`
    agarroNombre.appendChild(agregoOpcion)
}

let buscarNombres = document.getElementById("botonNombre")
buscarNombres.addEventListener("click", filtrarNombre)

/*BUSCAR POR HORARIO*/

let buscarHorario = document.getElementById("botonHorario")
buscarHorario.addEventListener("click", filtrarHorario)

/*BUSCAR POR EDAD*/

let buscarEdad = document.getElementById("botonEdad")
buscarEdad.addEventListener("click", filtrarEdad)

/*FUNCIONES*/
const tabla = document.createElement('tbody')
const mostrarResultados = document.getElementById("resultados")
tabla.setAttribute("id", "IDtabla")
mostrarResultados.append(tabla)


function filtrarNombre(){    
    let elegirNombre = agarroNombre.value
    let eleccion = datosPublicos.filter((curso) => {return curso.nombre === elegirNombre}) 
    if (eleccion.length >0){
        
        const mostrarTabla = document.getElementById("IDtabla")
        mostrarTabla.innerHTML = ""
        
        eleccion.forEach(elemento => {       
        tabla.innerHTML += ` <tr>  
                                <td>${elemento.nombre}</td>
                                <td>${elemento.dificultad}</td>
                                <td>${elemento.edad}</td>
                                <td>${elemento.turno}</td>
                                <td>${elemento.horario}</td>
                            </tr>`
        })
        mostrarResultados.appendChild(tabla)
    }else{
        alert("Lo sentimos. No se encontró un curso con estos parámetros")
    }
}

function filtrarHorario(){
    let elegirHorario = agarroHorario.value
    let eleccion = datosPublicos.filter((curso)=> {return curso.turno == elegirHorario})
    if (eleccion.length >0){    
        const mostrarTabla = document.getElementById("IDtabla")
        mostrarTabla.innerHTML = ""

        eleccion.forEach(elemento => {
        tabla.innerHTML += ` <tr>  
                                <td>${elemento.nombre}</td>
                                <td>${elemento.dificultad}</td>
                                <td>${elemento.edad}</td>
                                <td>${elemento.turno}</td>
                                <td>${elemento.horario}</td>
                            </tr>`
        mostrarResultados.appendChild(tabla)})
        
        
    }else{
        alert("Lo sentimos. No se encontró un curso con estos parámetros")
    }
}

function filtrarEdad(){ 
    let edadFuncion = agarroEdad.value
    let eleccion = datosPublicos.filter((curso) => {return curso.edad === edadFuncion})

    if (eleccion.length > 0){
        const mostrarTabla = document.getElementById("IDtabla")
        mostrarTabla.innerHTML = ""

        eleccion.forEach(elemento => {
        tabla.innerHTML += ` <tr>  
                                <td>${elemento.nombre}</td>
                                <td>${elemento.dificultad}</td>
                                <td>${elemento.edad}</td>
                                <td>${elemento.turno}</td>
                                <td>${elemento.horario}</td>
                            </tr>`
        mostrarResultados.appendChild(tabla)})
    }else {
        alert("Lo sentimos. No se encontró un curso con estos parámetros")
    }
} 


/*ENVIAR FORMULARIO */

let enviar = document.getElementById("enviarmail")
enviar.addEventListener("click", mostrarMensaje)

function mostrarMensaje(){
    alert("Su consulta fue enviada. Nos comunicaremos a la brevedad.")
}