// function promedio(a, b, c) {
// 	var calculo;
// 	calculo = (+a + +b + +c) / 3;
// 	return calculo;
// }
// var a = prompt("nota 1°", "");
// var b = prompt("nota 2°", "");
// var c = prompt("nota 3°", "");
// calculo = promedio(a, b, c);

// if (calculo >= 6) {
// 	alert("aprueba");
// } else {
// 	alert("reprobado");
// }

// function numero_mayor (x, y){
// 	var numeroMayor;
// 	if (+x > +y){
// 		numeroMayor = +x;
// 	}else{
// 		numeroMayor = +y;
// 	}
// 	return numeroMayor;
// }
// var x = prompt("ingrese el numero", "");
// var y = prompt("ingrese el segundo numero", "");
// var numeroMayor = numero_mayor(x, y);
// alert("el numero mayor es..." + numeroMayor);

// function positivo_negativo (a){
// 	var identificando;
// 	if (+a < 0){
// 		alert("tu numero es negativo");
// 	}else{
// 		alert("tu numero es positivo");
// 	}
// 	return identificando;
// }
// var a = prompt("ingrese su numero", "");
// identificando = positivo_negativo(a);

function vestimenta(valorVestimenta){
	var descuento;
	descuento = 1.25;
	var descuentoMenor;
	descuentoMenor = 1.08;
	var valor;
	if (+valorVestimenta >= 2500){
		valorVestimenta = +valorVestimenta / descuento;
	}else{
		valorVestimenta = +valorVestimenta / descuentoMenor;
	}
	return valor;
}
var valorVestimenta = prompt("ingrese el valor de la prenda");
valor = vestimenta(valorVestimenta);
alert("precio final del producto es " + valor);







 
