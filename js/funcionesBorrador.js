
while(continuar){          
    opciones()
    continuar = confirm ("¿Deseas hacer otra consulta?")   
    }  

/*    let continuar = confirm ("¿Deseas hacer otra consulta?") 
        if (continuar = false){
            console.log("El total de tu cuota es de" + item1.obtenerTotal() )            
        }else {
            opciones()
        }  
*/    

function opciones(){
    let tipoDeConsulta = prompt("Si desea saber qué clases hay para su edad, ingrese 1. \nSi desea saber qué clases hay según la dificultad, ingrese 2.\nSi desea buscar una clase en concreto, ingrese 3.\nSi desea averiguar el precio de las clases, ingrese 4.")
        
        switch (tipoDeConsulta){
            case "":                
                break;
            case null:                
                break;
            case "1": 
                filtrarEdad();
                break;
            case "2": 
                filtrarDificultad();
                break;
            case "3":
                filtrarNombre();
                break;
            case "4":
                precios();
                break;
            default: 
                alert("Valor ingresado incorrecto");
                break;
        }
    }
function filtrarEdad(){ 
    let ingresoEdad = parseInt(prompt("Por favor ingrese su edad"))
    
    function agruparEdad(){
        if (ingresoEdad >2 && ingresoEdad <= 5){
            return "inicial"
        } else if (ingresoEdad >5 && ingresoEdad <= 10) {
            return "infantil"
        } else if (ingresoEdad >10 && ingresoEdad <=14) {
            return "teen"
        } else if (ingresoEdad >14 && ingresoEdad <= 17) {
            return "juvenil"
        } else if (ingresoEdad > 17 && ingresoEdad <=40) {
            return "adulto"
        } else if (ingresoEdad >40) {
            return "mayor"           
        } else {
            alert("Error. Por favor ingrese un valor mayor a 3")
        }
    }


    let edadFiltrada = datosPublicos.filter((curso) => {return curso.edad === agruparEdad()})
    if (edadFiltrada.length > 0){
        alert("En la consola encontrarás las clases disponibles para esa edad")
        console.table(edadFiltrada)
    }else {
        alert("Lo sentimos. No se encontró un curso para esta edad.")
    }
    
} 


function filtrarNombre() {

    let elegirNombre = prompt("Por favor escribí el nombre del curso que te intresa:\n" + nombreCursos.join("-")).trim().toLowerCase()
    let eleccion = datosPublicos.filter((curso) => {return curso.nombre === elegirNombre}) 
    
    if (eleccion.length >0){
        alert("En la consola encontrarás las clases disponibles")
        console.table(eleccion)
    }else{
        console.error("Lo sentimos. No se encontró un curso con este nombre")
    }
}

function filtrarDificultad() {

    let elegirNivel = prompt("Por favor escribí el nivel que te intresa: principiante, intermedio o avanzado")
    let nivel = datosPublicos.filter((curso) => {return curso.dificultad === elegirNivel}) 
    
    if (nivel.length >0){
        alert("En la consola encontrarás las clases disponibles con ese nivel")
        console.table(nivel)
    }else{
        console.error("Lo sentimos. No se encontró un curso con este nivel de dificultad")
    }
}


function promocion(resultado){
        let descuento = prompt("LOS ALUMNOS NUEVOS TIENEN 10% DE DESCUENTO EN LA PRIMER CUOTA. \n¿Es usted un alumno nuevo?").trim().toLowerCase()        
        if (descuento === "si" || descuento === "sí"){
            alert("El valor de la primer cuota es de " + resultado * 0.9)
        } else if (descuento === "no"){
            alert("El valor de la primer cuota es de " + resultado)
        } else {
            alert("Por favor sólo indique sí/no")
        }
    }


function precios(){
        let clase = prompt("Indique a qué curso le interesa asistir.\n" + nombreCursos.join("-")).trim().toLowerCase()
        let resultadoPrecios =  cursos.find((curso)=> {return curso.nombre === clase})
   
        if (resultadoPrecios === undefined) {
        console.error("Lo sentimos. No se encontró este curso") 
        
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
            
            if (clase === "ballet" || clase === "contempo" || clase === "esferodinamia"){
                let frecuencia1 = parseInt(prompt("Indique si desea venir 1 o 2 veces por semana"))
                if (frecuencia1 === 1 || frecuencia1 === 2){
                let precioItem = calculo(frecuencia1)
                let nuevoItem = confirm("¿Desea agregar esta clase a su lista de deseos?")
                             
                    if (nuevoItem){
                        //const item1 = new Presupuesto(precioItem)
                        //item1
                        seleccionados.push(precioItem)                                                   
                    }
                }else {
                    alert("Valor incorrecto. Sólo puede indicar 1 o 2 veces por semana")
                }
            }else if (clase ==="strecthing" || clase ==="pilates" || clase ==="entrenamiento"){
                let frecuencia2 = parseInt(prompt("Indique si desea venir 1, 2 o 3 veces por semana"))
                calculo(frecuencia2)
            }else {
                calculo(1)
            }
        
        }
      
    }

    function verSeleccionados(){
        console.log("Las clases seleccionadas son")
        console.table(seleccionados)
        let verTotal = confirm("¿Desea ver el total de su cuota?")
            if (verTotal) {
                console.log(seleccionados.reduce((acc,elemento)=> acc + elemento, 0))
            }
    }   
    
    /*function seleccionar(){
        let elegirNombre = prompt("Por favor escribí el nombre del curso que te intresa:\n" + nombreCursos.join("-")).trim().toLowerCase()
        let eleccion = cursos.find((curso) => {return curso.nombre === elegirNombre})
        //probar poner seleccionar a partir de un nombre y edad y convertirlo a id
        //sino en la pestaña mis clases poner una tabla (con dom) para que el usuario seleccione el id
        if (eleccion === undefined){
            alert("Error en el código ingresado. Inténtelo nuevamente")
            seleccionar()            
        }else {
            //let claseElegida = buscar el objeto con ese id
            seleccionados.push(eleccion.precio)
            let respuesta = confirm("¿Desea seleccionar otro curso?")
                if (respuesta){seleccionar()
                }else{
                    //directamente meter el console.table acá
                    verSeleccionados()
                    const shopping = new Presupuesto(seleccionados)
                    shopping.obtenerTotal()
                }
        }
    }*/






