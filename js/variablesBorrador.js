const cursos = [{id: 0, nombre:"ballet", dificultad: "intermedio",precio: 5000, edad: "inicial", horario: "Lunes y miércoles 16 hs"},
                {id: 1, nombre:"ballet", dificultad: "intermedio",precio: 5000, edad: "infantil", horario: "Lunes y miércoles 17 hs"},
                {id: 2, nombre:"ballet", dificultad: "intermedio",precio: 5000, edad: "teen", horario: "Lunes y miércoles 18 hs"},
                {id: 3, nombre:"ballet", dificultad: "intermedio",precio: 5000, edad: "juvenil", horario: "Lunes y miércoles 19 hs"},
                {id: 4, nombre:"ballet", dificultad: "intermedio",precio: 5000, edad: "adulto", horario: "Lunes y miércoles 20 hs"},
                {id: 5, nombre:"stretching", dificultad: "principiante", precio: 3500, edad: "adulto", horario: "Lunes, miércoles y viernes 10 hs"},
                {id: 6, nombre:"stretching", dificultad: "principiante", precio: 3500, edad: "mayor", horario: "Lunes, miércoles y viernes 10 hs"},
                {id: 7, nombre:"kpop", dificultad: "intermedio", precio: 4000, edad: "infantil", horario: "Jueves 18 hs"},
                {id: 8, nombre:"kpop", dificultad: "intermedio", precio: 4000, edad: "teen", horario: "Jueves 19 hs"},
                {id: 9, nombre:"contempo", dificultad: "avanzado", precio:5000, edad: "teen", horario: "Martes y jueves 16 hs"},
                {id: 10, nombre:"contempo", dificultad: "avanzado", precio:5000, edad: "juvenil", horario: "Martes y jueves 17 hs"},
                {id: 11, nombre:"esferodinamia", dificultad: "principiante", precio: 4000, edad: "adulto", horario: "Martes y jueves 10 hs"},
                {id: 12, nombre:"esferodinamia", dificultad: "principiante", precio: 4000, edad: "mayor", horario: "Martes y jueves 10 hs"},
                {id: 13, nombre:"pilates", dificultad: "principiante", precio: 4500, edad: "juvenil", horario: "Lunes, miércoles y viernes 8 hs"},
                {id: 14, nombre:"pilates", dificultad: "principiante", precio: 4500, edad: "adulto", horario: "Lunes, miércoles y viernes 8 hs"},
                {id: 15, nombre:"pilates", dificultad: "principiante", precio: 4500, edad: "mayor", horario: "Lunes, miércoles y viernes 8 hs"},
                {id: 16, nombre:"entrenamiento", dificultad: "avanzado", precio: 6000, edad: "adulto",  horario: "Lunes a viernes 9 hs"}]

let nombreCursos = ["Ballet", "Stretching", "Kpop", "Contempo", "Esferodinamia", "Pilates", "Entrenamiento"]

const datosPublicos = cursos.map((curso)=>{
    return {nombre: curso.nombre,
            dificultad: curso.dificultad,
            edad: curso.edad,
            horario: curso.horario
    }
})

let continuar = true

const seleccionados= []

/*class Presupuesto{
    constructor(seleccionados){
        this.seleccionados = seleccionados               
    }
    obtenerSubtotal(){
        return this.seleccionados.reduce((acc, curso)=> acc + curso, 0)
            
        
    }

    generarDescuento(){
        if (seleccionados.length >=3){
            return this.obtenerSubtotal()*0.85
        }else if (seleccionados.length =0){
            return "Todavía no hay clases seleccionadas."
        }else{
            return this.obtenerSubtotal()
        }
        //con 3 o + clases hay un 15% de descuento adicional
    }
    obtenerTotal(){
        return `el total es de $ ${this.generarDescuento()}`
        //ponerlo como alert?
    }
}




function verSeleccionados(){
    console.log("Las clases seleccionadas son")
    console.table(seleccionados)
}   

function seleccionar(){
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
}


 */