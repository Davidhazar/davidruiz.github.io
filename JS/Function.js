const persona = '{"nombre":"Eden","apellido":"Hazard","edad":"30","nacionalidad":"Argentino"}';
const obj = JSON.parse(persona);

document.getElementById("demo").innerHTML = "nombre "+ obj.nombre+ " apellido "+ obj.apellido;