
const input = document.querySelector("input");
const sectionResultado = document.querySelector(".sec-resultado");

const button = document.querySelector(".button");

button.addEventListener("click", () => {
	let valor = input.value;
	const exRe = /[2-9]/;
	if (valor) {
		if (!exRe.test(valor)) {
			convertor(valor);
		} else {
			alert("has puesto un numero que no es binario");
		}
	} else {
		alert("el input esta vació");
	}
});

function resultado(arg) {
	if (document.querySelector(".resultado")) {
		document.querySelector(".resultado").textContent = arg;
	} else {
		const decimal =	document.createElement("h2");
		decimal.className = "resultado";
		decimal.textContent = arg;

		sectionResultado.appendChild(decimal);
	}
}

function convertor(valor) {
	let decimal = parseInt(valor, 2);

	resultado(decimal);
}