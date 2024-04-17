function quitarAcentos(texto) {
    return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function mostrarTexto() {
    var texto = document.getElementById("mensaje-usuario").value.trim(); 
    document.getElementById("rectangulo-blanco").style.display = "none";

    if (texto === "") {
        document.getElementById("cuadroMensaje").style.display = "none";
    } else {
        document.getElementById("cuadroMensaje").style.display = "block";
        document.getElementById("cuadroMensaje").innerText = texto;
    }
}

function enviarInformacion1() {
    var textoOriginal = quitarAcentos(document.getElementById("mensaje-usuario").value);
    var textoEncriptado = textoOriginal.toLowerCase(); 


    if (!textoEncriptado.includes("enter") &&
        !textoEncriptado.includes("imes") &&
        !textoEncriptado.includes("ai") &&
        !textoEncriptado.includes("ober") &&
        !textoEncriptado.includes("ufat")) {

        textoEncriptado = textoEncriptado.replace(/e/g, "enter")
                                         .replace(/i/g, "imes")
                                         .replace(/a/g, "ai")
                                         .replace(/o/g, "ober")
                                         .replace(/u/g, "ufat");
    }
    
    document.getElementById("cuadroMensaje").innerText = textoEncriptado;

}

function enviarInformacion2() {
    let mensajeCifrado = quitarAcentos(document.getElementById("mensaje-usuario").value).toLowerCase();
    let mensajeDescifrado = mensajeCifrado
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");

    document.getElementById("cuadroMensaje").innerText = mensajeDescifrado;
}

