/*function mostrarElementos(){
    const tabla = document.createElement('tbody')        
        //no funciona el remove
    eleccion.forEach(elemento => {
        tabla.innerHTML += ` <tr>  
                                <td>${elemento.nombre}</td>
                                <td>${elemento.dificultad}</td>
                                <td>${elemento.edad}</td>
                                <td>${elemento.turno}</td>
                                <td>${elemento.horario}</td>
                            </tr>`
        mostrarResultados.appendChild(tabla)})
}*/




/*
function juntarBusquedas(){
    if (agarroNombre.value ==! null){
        if (agarroHorario.value ==! null){
            if (agarroEdad.value ==! null){
                filtrarEdad(filtrarHorario(filtrarNombre))
            } filtrarHorario(FiltrarNombre)
        } else {
            filtrarNombre()
        }
    } else if (agarroHorario.value ==! null) {
        if (agarroEdad.value ==! null){
            filtrarEdad(filtrarHorario)
        } else {filtrarhorario()}
    } else if (agarroEdad.value ==! null){
        filtrarEdad()
    } else {
        alert("Debe seleccionar algún parámetro de búsqueda")
    }

}*/



function precios(){
    let resultadoPrecios =  cursos.find((curso)=> {return curso.nombre === carrito.precio})

    if (resultadoPrecios === undefined) {
    alert("Lo sentimos. No se encontró este curso") 
    
    } else {       

        let valor = resultadoPrecios.precio

        function calculo(frecuencia){
            switch (frecuencia){
                case 1: 
                    let resultado1 = valor
                    promocion(resultado1)
                    break;
                case 2: 
                    let resultado2 = valor * 1.8
                    promocion(resultado2)
                    break;
                case 3:
                    let resultado3 = valor * 2.5
                    promocion(resultado3)
                    break;
                default: 
                    alert("Valor ingresado incorrecto")
                    break;   
            }
        }
        
        if (carrito.nombre === "ballet" || carrito.nombre === "contempo" || carrito.nombre === "esferodinamia"){
            let frecuencia1 = parseInt(prompt("Indique si desea venir 1 o 2 veces por semana"))
            if (frecuencia1 === 1 || frecuencia1 === 2){
                calculo(frecuencia1)                
            }else {
                alert("Valor incorrecto. Sólo puede indicar 1 o 2 veces por semana")
            }
        }else if (carrito.nombre ==="strecthing" || carrito.nombre ==="pilates" || carrito.nombre ==="entrenamiento"){
            let frecuencia2 = parseInt(prompt("Indique si desea venir 1, 2 o 3 veces por semana"))
            calculo(frecuencia2)
        }else {
            calculo(1)
        }
    
    }
    
}
