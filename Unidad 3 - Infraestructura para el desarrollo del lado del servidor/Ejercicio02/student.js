let create = (student, students) => { 
  students.push(student);
  return students;
};

/* Imprimir valores de la lista resiviendo un parametro */
function list (s) {
  console.log(`Nombre: ${s.name}`);
  console.log(`Numero de control: ${s.controlNumber}`);
  console.log(`Email: ${s.email}`);
  console.log(`Calificacion: ${s.grade}`);
}

/* Leemos el arreglo students */
let read = (students) => {
  students.forEach((s) => {
    list(s);
    console.log("-");
  });
};

/* Funcion Eliminar a partir del NC */
let erase = (students,Nc) => {
  for(var i = 0; i < students.length; i++){
    if(students[i].controlNumber == Nc){
      students.splice(i,1);
    }
  }
  return students;
};

/* Consultar Arreglo a partir del NC */
let consult = (students, Nc) => {
  students.forEach((c) =>{
    if( c.controlNumber == Nc){
      list(c);
    }
  });
};

/*Funcion Actualizar dato a partir del NC */
let update = (students, Nc, pos, newData) => {
    students.forEach((d) =>{
      if( d.controlNumber == Nc){
        if(pos == 0 || pos == "name" ){
          d.name = newData;
        }else if(pos == 1 || pos == "controlNumber" ){
          d.controlNumber = newData;
        }else if(pos == 2 || pos == "email" ){
          d.email = newData;
        }else if(pos == 3 || pos == "grade" ){
          d.grade = newData;
        }//fin de IFs
      }
  });
};

/* Listar alumnos con calificacion aprobatoria */
let ok = (students) =>{
  students.forEach((a) =>{
    if(a.grade >= 70){
      list(a);
    }
  });
};

module.exports.create = create; //Crear arreglo de alumnos
module.exports.read = read; // Consultar todo el arreglo
module.exports.erase = erase; //Eliminar alumnos por numero de control
module.exports.update = update; //Actualizar alumno por numero de control
module.exports.consult = consult; //Consultar alumnos por numero de control
module.exports.ok = ok; //Consultar alumnos con calificacion aprobatoria