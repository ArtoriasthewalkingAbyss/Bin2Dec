
const input = document.querySelector("input");

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

function convertor(valor) {
	let decimal = parseInt(valor, 2);

	alert(decimal);
}

