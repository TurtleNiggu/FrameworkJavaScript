var nombre = "Angel";
var apellido = "Montanez";
var concatenar = nombre + " " + apellido;
var altura = 180;

/*document.write(concatenar);

 var altura = 1.8;
 if(altura >= 1.7){
    datos.innerHTML += `<h1>Eres una persona alta</h1>`
 }else{
    datos.innerHTML += `<h1>Eres una persona bajita</h1>`
 }

 for(var i=2010; i<=2022; i++){
    datos.innerHTML += `<h2>Es el anio: ${i}</h2>`
 }

 function MuestraNombre(nombre, apellido){
    var datos = document.getElementById("datos");
    datos.innerHTML = `
    <h2>Mi nombre es: ${nombre}</h2>
    <h2>Mi apellido es: ${apellido}</h2>
 `;
 }

 MuestraNombre("Carlos", " Samchez")

 if(altura >= 190){
    datos.innerHTML += `<h1>Eres una persona alta</h1>`
 }else{
    datos.innerHTML += `<h1>Eres una persona bajita</h1>`
 } 

 for(var i = 2010; i <=2020; i++){
    datos.innerHTML += `<h3>Estamos en el anio</h3>` + i;
 }

 function MuestraNombre(nombre, altura){
    var misDatos = `
    <h1>Mi nombre es : ${nombre}</h1>
    <h2>Mido : ${altura}</h2> `;
    return misDatos;
 }

function Imprimir(){
    var datos = document.getElementById("datos");
    datos.innerHTML = MuestraNombre("Carlos Suarez", 190);
}

Imprimir();

var nombres = ['Victor', 'Antonio', 'Joaquin'];
/*alert(nombres[2]);

for(i=0; i<nombres.length; i++){
    document.write(nombres[i] + '</br>');
}

nombres.forEach((nombre) =>         {
    document.write(nombre + '</br>');
})
*/

var coche = {
    modelo: 'Mercedes clase A',
    maxima: 500,
    antiguedad: 2019,
    mostrarDatos(){
        console.log(this.modelo, this.maxima, this.antiguedad);
    },
    propiedad1: "valor aleatorio"
};

document.write("<h1>" + coche.antiguedad + "</h1>");
coche.mostrarDatos();