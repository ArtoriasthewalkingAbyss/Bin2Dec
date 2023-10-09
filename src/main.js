
const input = document.querySelector("input");
const sectionResultado = document.querySelector(".resultado");

const button = document.querySelector(".button");

button.addEventListener("click", () => {
	let valor = input.value;
	const exRe = /[2-9]/;

	if (!exRe.test(valor)) {
		convertor(valor);
	} else {
		alert("has puesto un numero que no es binario");
	}
});

function resultado(arg) {
	const decimal =	document.createElement("h2");
	decimal.className = "resultado";
	decimal.textContent = arg;
	console.log(decimal);

	sectionResultado.appendChild(decimal);
}

function convertor(valor) {
	let decimal = parseInt(valor, 2);

	resultado(decimal);
}