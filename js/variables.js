const cursos = [{id: 0, imagen: "../media/tarjetaBallet.jpg", nombre:"Ballet", dificultad: "principiante",precio: 5000, edad: "inicial",turno:"Tarde", horario: "Lunes y miércoles 16 hs"},
                {id: 1, imagen: "../media/tarjetaBallet.jpg", nombre:"Ballet", dificultad: "intermedio",precio: 5000, edad: "infantil",turno:"Tarde", horario: "Lunes y miércoles 17 hs"},
                {id: 2, imagen: "../media/tarjetaBallet.jpg",nombre:"Ballet", dificultad: "intermedio",precio: 5000, edad: "teen",   turno:"Tarde", horario: "Lunes y miércoles 18 hs"},
                {id: 3, imagen: "../media/tarjetaBallet.jpg", nombre:"Ballet", dificultad: "intermedio",precio: 5000, edad: "juvenil",turno:"Noche", horario: "Lunes y miércoles 19 hs"},
                {id: 4, imagen: "../media/tarjetaBallet.jpg", nombre:"Ballet", dificultad: "intermedio",precio: 5000, edad: "adulto",turno:"Noche", horario: "Lunes y miércoles 20 hs"},
                {id: 5, imagen: "../media/tarjetaStretching.jpg", nombre:"Stretching", dificultad: "principiante", precio: 3500, edad: "adulto",turno:"Mañana", horario: "Lunes, miércoles y viernes 10 hs"},
                {id: 6, imagen: "../media/tarjetaStretching.jpg", nombre:"Stretching", dificultad: "principiante", precio: 3500, edad: "mayor",turno:"Mañana", horario: "Lunes, miércoles y viernes 10 hs"},
                {id: 7, imagen: "../media/tarjetaKpop.jpg", nombre:"Kpop", dificultad: "intermedio", precio: 4000, edad: "infantil",turno:"Tarde", horario: "Jueves 18 hs"},
                {id: 8, imagen: "../media/tarjetaKpop.jpg", nombre:"Kpop", dificultad: "intermedio", precio: 4000, edad: "teen",turno:"Noche", horario: "Jueves 19 hs"},
                {id: 9, imagen: "../media/tarjetaContempo.jpg", nombre:"Contempo", dificultad: "avanzado", precio:5000, edad: "teen",turno:"Tarde", horario: "Martes y jueves 16 hs"},
                {id: 10, imagen: "../media/tarjetaContempo.jpg", nombre:"Contempo", dificultad: "avanzado", precio:5000, edad: "juvenil",turno:"Tarde", horario: "Martes y jueves 17 hs"},
                {id: 11, imagen: "../media/tarjetaEsferodinamia.avif", nombre:"Esferodinamia", dificultad: "principiante", precio: 4000, edad: "adulto",turno:"Mañana", horario: "Martes y jueves 10 hs"},
                {id: 12, imagen: "../media/tarjetaEsferodinamia.avif", nombre:"Esferodinamia", dificultad: "principiante", precio: 4000, edad: "mayor",turno:"Mañana", horario: "Martes y jueves 10 hs"},
                {id: 13, imagen: "../media/tarjetaPilates.png", nombre:"Pilates", dificultad: "principiante", precio: 4500, edad: "juvenil",turno:"Mañana", horario: "Lunes, miércoles y viernes 8 hs"},
                {id: 14, imagen: "../media/tarjetaPilates.png", nombre:"Pilates", dificultad: "principiante", precio: 4500, edad: "adulto",turno:"Mañana", horario: "Lunes, miércoles y viernes 8 hs"},
                {id: 15, imagen: "../media/tarjetaPilates.png", nombre:"Pilates", dificultad: "principiante", precio: 4500, edad: "mayor",turno:"Mañana", horario: "Lunes, miércoles y viernes 8 hs"},
                {id: 16, imagen: "../media/tarjetaEntrenamiento.avif", nombre:"Entrenamiento", dificultad: "avanzado", precio: 6000, edad: "adulto",turno:"Mañana", horario: "Lunes a viernes 9 hs"}]

let nombreCursos = ["Ballet", "Stretching", "Kpop", "Contempo", "Esferodinamia", "Pilates", "Entrenamiento"]

const datosPublicos = cursos.map((curso)=>{
    return {nombre: curso.nombre,
            dificultad: curso.dificultad,
            edad: curso.edad,
            turno: curso.turno,
            horario: curso.horario
    }
})

/*descripcion: "Danza que exige el control complieto del cuerpo. Trabaja sobre la flexibilidad, la postura, la musicalidad y  la fuerza."
descripcion : "Estas clases trabajan sobre la flexibilidad de manera progresiva, para prevenir lesiones y lograr el mejor resultado posible."
descripcion: "Estilo de baile que usa las coreografías más populares del kpop para desarrollar la musicalidad, el trabajo en equipo y la coordinacion."
descripcion: "Técnica de danza de alto rendimiento físico, que trabaja en las entradas y salidas al piso, los movimientos orgánicos y la expresividad en escena."
descripcion: "Estas clases trabajan la fuerza, flexibilidad y postura. Utiliza como principal elemento las pelotas Fitball, que al ser inestables trabajan sobre la activación muscular del core."
descripcion: "Técnica que trabaja la postura, fuerza y flexibilidad utilizando los Reformers, camas adaptadas para una infinidad de ejercicios. Se trabaja en base a la biomecánica y el control corporal."
descripcion: "Clases particulares para trabajar los objetivos específicos del alumno, utiliizando una variedad de técnicas y elementos."
*/


