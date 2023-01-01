buttonEncrip = document.getElementById('buttonEncrip');
buttonDesencrip = document.getElementById('buttonDesencrip');
buttonCopy = document.getElementById('buttonCopy');

buttonEncrip.onclick= function btnEncriptar() {  // Esta función reemplaza ciertas letras en una entrada 
	input = document.getElementById("textInput");// de texto con sus reemplazos correspondientes en una matriz
	input = String(input.value);

	input = input.toLowerCase();
	let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

	for (let i = 0; i < matrizCodigo.length; ++i) {
		if (input.includes(matrizCodigo[i][0])) {
			input = input.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
		}
	}

	output = document.getElementById("textInputProcess");
	output.value = input;

	document.getElementById("textInputProcess").style.background = "white";
	document.getElementById("textInputProcess").click();

	window.getSelection().removeAllRanges();
}

buttonDesencrip.onclick = function btnDesencriptar() {// Esta función reemplaza ciertos reemplazos en una entrada de texto 
	output = document.getElementById("textInput"); //    con las letras originales correspondientes en una matriz
	output = String(output.value);

	output = output.toLowerCase();
	let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

	for (let i = 0; i < matrizCodigo.length; ++i) {
		if (output.includes(matrizCodigo[i][0])) {
			output = output.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
		}
	}

	input = document.getElementById("textInputProcess");
	input.value = output;
	document.getElementById("textInputProcess").style.background = "white";
}

buttonCopy.onclick = function copy() {  // Esta función copia el resultado del texto encriptado o desencriptado
    var aux = document.createElement("input");
    aux.setAttribute("value", document.getElementById('textInputProcess').value);

    document.body.appendChild(aux);
    aux.select();
  
    document.execCommand("copy");
    document.body.removeChild(aux);
    showAlert();
}

/*-------- Alert--------*/

function showAlert() {
    swal("Copiado", "El mensaje se ha copiado", "success", );
}

document.getElementById("textProcess").addEventListener("mouseover", () => {
	if (document.getElementById("textInputProcess").value == "") {
		document.getElementById("textInputProcess").value = "";
	}

    document.getElementById("textInputProcess").style.display = "inline";
    document.getElementById("imagen").style.display = "none";
	document.getElementById("buttonCopy").style.display = "inline";
});

document.getElementById("textProcess").addEventListener("mouseleave", () => {
    if (document.getElementById("textInputProcess").value == "") {
		document.getElementById("textInputProcess").value = "";
        document.getElementById("imagen").style.display = "inline";
        document.getElementById("textInputProcess").style.display = "none";
        document.getElementById("buttonCopy").style.display = "none";
	}
});

document.getElementById("textProcess").addEventListener("click", () => {
	if (document.getElementById("textInputProcess").value.length == 0) {
		document.getElementById("textInputProcess").value = "";
	}
    document.getElementById("textInputProcess").style.display = "inline";
    document.getElementById("imagen").style.display = "none";
    document.getElementById("buttonCopy").style.display = "inline";
});
