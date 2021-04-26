let model = require("./student");

students = [];

let student = {
  name: "Daniel Ayala",
  controlNumber: "16400887",
  email: "daalayalara@iitepic.edu.mx",
  grade: 85,
};

let student00 = {
  name: "Alejandro Ayala",
  controlNumber: "16400456",
  email: "AlejandroAyala@iitepic.edu.mx",
  grade: 100,
};

/* INSERTAR */ 
students = model.create(student, students);
students = model.create(student00, students);
console.log("---(I) Despues de insertar:\n");
model.read(students);

/* BORRAR */ 
students = model.erase(students,"16400456");
console.log("\n---(E) Despues de borrar el alumno 16400456:\n");
model.read(students);

/* INSERTAR nuevo Alumno */ 
let student01 = {
  name: "Jonatan Campos",
  controlNumber: "16400123",
  email: "jonaCampos@iitepic.edu.mx",
  grade: 20,
};

let student02 = {
  name: "Luis Rivera",
  controlNumber: "16400987",
  email: "LuisR@iitepic.edu.mx",
  grade: 50,
};

/* Insertamos alumno */
students = model.create(student01, students);
students = model.create(student02, students);
console.log("\n---(I) Despues de insertar por Segunda vez:\n");
model.read(students);

/* Consultas de Alumnos */
console.log("\n---(C) Consultar por numero de control (16400987):\n");
model.consult(students,"16400987");

/* Actualizar Alumno 16400887 con calificacion de 65 */

/*
Actualizar datos de un Alumno
  0 o "name"
  1 o "controlNumber"
  2 o "email"
  3 o "grade"
*/
console.log("\n---(U) Actualizamos alumno 16400123 calificacion 20 a 70:\n");
model.update(students,"16400123","grade",70);

console.log("\n---(C) Despues de Consultar por Segunda vez:\n");
model.consult(students,"16400123");

console.log("\n---(CA) Consultar Alumnos aprobados:\n");
model.ok(students);
