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
 
function agruparEdad(){
    let resultado;
    let ingresoEdad = parseInt(prompt("Por favor ingrese su edad"))
    console.log(ingresoEdad)
    while(ingresoEdad != null){
        if (ingresoEdad >2 && ingresoEdad <= 5){
            resultado = "inicial"
            break
        } else if (ingresoEdad >5 && ingresoEdad <= 10) {
            resultado = "infantil"
            break
        } else if (ingresoEdad >10 && ingresoEdad <=14) {
            resultado = "teen"
            break
        } else if (ingresoEdad >14 && ingresoEdad <= 17) {
            resultado = "juvenil"
            break
        } else if (ingresoEdad > 17 && ingresoEdad <=40) {
            resultado = "adulto"
            break
        } else if (ingresoEdad >40) {
            resultado = "mayor"      
            break     
        } else {
            alert("Error. Por favor ingrese un valor mayor a 3")
            ingresoEdad = parseInt(prompt("Por favor ingrese su edad nuevamente."))                       
        }
    }
    return resultado
}

function filtrarEdad(){ 
    let edadFuncion = agruparEdad()
    let edadFiltrada = datosPublicos.filter((curso) => {return curso.edad === edadFuncion})
    if (edadFiltrada.length > 0){
        alert("En la consola encontrarás las clases disponibles para esa edad")
        console.table(edadFiltrada)
    }else {
        alert("Lo sentimos. No se encontró un curso para esa edad.")
    }
} 

function filtrarDificultad() {

    let elegirNivel = prompt("Por favor escribí el nivel que te intresa: principiante, intermedio o avanzado").trim().toLowerCase()
    let nivel = datosPublicos.filter((curso) => {return curso.dificultad === elegirNivel}) 
    
    if (nivel.length >0){
        alert("En la consola encontrarás las clases disponibles con ese nivel")
        console.table(nivel)
    }else{
        alert("Lo sentimos. No se encontró un curso con este nivel de dificultad")
    }
}

function filtrarNombre() {

    let elegirNombre = prompt("Por favor escribí el nombre del curso que te intresa:\n" + nombreCursos.join("-")).trim().toLowerCase()
    let eleccion = datosPublicos.filter((curso) => {return curso.nombre === elegirNombre}) 
    
    if (eleccion.length >0){
        alert("En la consola encontrarás las clases disponibles")
        console.table(eleccion)
    }else{
        alert("Lo sentimos. No se encontró un curso con este nombre")
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
        
        if (clase === "ballet" || clase === "contempo" || clase === "esferodinamia"){
            let frecuencia1 = parseInt(prompt("Indique si desea venir 1 o 2 veces por semana"))
            if (frecuencia1 === 1 || frecuencia1 === 2){
                calculo(frecuencia1)                
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

while(continuar){          
    opciones()
    continuar = confirm ("¿Deseas hacer otra consulta?")   
}  