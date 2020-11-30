var fruits=[];
var cantidad;
function cargarfrutas(){
    document.getElementById("fruits").innerHTML=fruits;
}
function myfuncion(){
    var fruit=prompt("tu favorita");
    fruits[fruits.length]=fruit;
    document.getElementById("fruits").innerHTML=fruits;
}
function sabercantidad(){
    cantidad=fruits.length;
    document.getElementById("cantidad").innerHTML=cantidad;
}