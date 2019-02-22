var operandoa;
var operandob;
var operandon;

function init(){
	
	var resultado = document.getElementById("resultado");
	var cero = document.getElementById("cero");
	var uno = document.getElementById("uno");
	var dos = document.getElementById("dos");
	var tres = document.getElementById("tres");
	var cuatro = document.getElementById("cuatro");
	var cinco = document.getElementById("cinco");
	var seis = document.getElementById("seis");
	var siete = document.getElementById("siete");
	var ocho = document.getElementById("ocho");
	var nueve = document.getElementById("nueve");

	var sumar = document.getElementById("sumar");
	var restar = document.getElementById("restar");
	var multiplicar = document.getElementById("multiplicar");
	var dividir = document.getElementById("dividir");
	var punto = document.getElementById("punto");
	var ce = document.getElementById("ce");
	var igual = document.getElementById("igual");

	var bin = document.getElementById("bin");
	var dec = document.getElementById("dec");
	var hex = document.getElementById("hex");

	var parentesis1 = document.getElementById("parentesis1");
	var parentesis2 = document.getElementById("parentesis2");
	var potencia = document.getElementById("potencia");
	var raiz = document.getElementById("raiz");

	var euro = document.getElementById("euro");
	var libra = document.getElementById("libra");
	var dolar = document.getElementById("dolar");
	var dolarm = document.getElementById("dolarm");
	var yen = document.getElementById("yen");



	uno.onclick = function(e){
		resultado.textContent = resultado.textContent + "1";
	}
	dos.onclick = function(e){
		resultado.textContent = resultado.textContent + "2";
	}
	tres.onclick = function(e){
		resultado.textContent = resultado.textContent + "3";
	}
	cuatro.onclick = function(e){
		resultado.textContent = resultado.textContent + "4";
	}
	cinco.onclick = function(e){
		resultado.textContent = resultado.textContent + "5";
	}
	seis.onclick = function(e){
		resultado.textContent = resultado.textContent + "6";
	}
	siete.onclick = function(e){
		resultado.textContent = resultado.textContent + "7";
	}
	ocho.onclick = function(e){
		resultado.textContent = resultado.textContent + "8";
	}
	nueve.onclick = function(e){
		resultado.textContent = resultado.textContent + "9";
	}
	cero.onclick = function(e){
		resultado.textContent = resultado.textContent + "0";
	}
	reset.onclick = function(e){
		resetear();
	}
	sumar.onclick = function(e){
		operandoa = resultado.textContent;
		operandon = "+";
		limpiar();
	}
	restar.onclick = function(e){
		operandoa = resultado.textContent;
		operandon = "-";
		limpiar();
	}
	multiplicar.onclick = function(e){
		operandoa = resultado.textContent;
		operandon = "*";
		limpiar();
	}
	dividir.onclick = function(e){
		operandoa = resultado.textContent;
		operandon = "/";
		limpiar();
	}
	igual.onclick = function(e){
		operandob = resultado.textContent;
		resolver();
	}
}
function limpiar(){
	resultado.textContent = "";
}
function resetear(){
	resultado.textContent = "";
	operandoa = 0;
	operandob = 0;
	operandon = "";
}
function resolver(){
	var res = 0;
	switch(operandon){
		case "+":
		res = parseInt(operandoa) + parseInt(operandob);
		break;
		case "-":
		res = parseInt(operandoa) - parseInt(operandob);
		break;
		case "*":
		res = parseInt(operandoa) * parseInt(operandob);
		break;
		case "/":
		res = parseInt(operandoa) / parseInt(operandob);
		break;
	}
	resetear();
	resultado.textContent = res;
}