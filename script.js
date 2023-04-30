var botonencriptar = document.querySelector(".boton-encriptar");
var botondesenciptar = document.querySelector(".boton-desenciptar");
var muneco = document.querySelector(".contenedor-muneco");
var contenedorparrafo = document.querySelector(".contenedor-parrafo");
var resultado = document.querySelector(".txt-resultado");

botonencriptar.onclick = encriptar;
botondesenciptar.onclick = desencriptar;

function encriptar(){    
    ocultarAdelante();
    var cajatexto = recuperartexto();
    resultado.textContent = encriptarTexto(cajatexto);

}

function desencriptar(){
    ocultarAdelante();
    var cajatexto = recuperartexto();
    resultado.textContent = desencriptarTexto(cajatexto);
    
}

function recuperartexto(){
    var cajatexto = document.querySelector(".cajatexto")
    return cajatexto.value
}

function ocultarAdelante(){
    muneco.classList.add("ocultar");
    contenedorparrafo.classList.add("ocultar");
      
}

function encriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";

    for (var i = 0; i < texto.length; i++){
        if (texto[i] == "a"){
            textoFinal = textoFinal + "ai"
        }
        else if (texto[i] == "e"){
            textoFinal = textoFinal + "enter"
        }
        else if (texto[i] == "i"){
            textoFinal = textoFinal + "imes"
        }
        else if (texto[i] == "o"){
            textoFinal = textoFinal + "ober"
        }
        else if (texto[i] == "u"){
            textoFinal = textoFinal + "utaf"
        }
        else{
            textoFinal = textoFinal + texto [i]
        }
        
    }
    return textoFinal;
}

function desencriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";

    for (var i = 0; i < texto.length; i++){
        if (texto[i] == "a"){
            textoFinal = textoFinal + "a"
            i = i+1;
        }
        else if (texto[i] == "e"){
            textoFinal = textoFinal + "er"
            i = i+4;
        }
        else if (texto[i] == "i"){
            textoFinal = textoFinal + "i"
            i = i+3;
        }
        else if (texto[i] == "o"){
            textoFinal = textoFinal + "o"
            i = i+3;
        }
        else if (texto[i] == "u"){
            textoFinal = textoFinal + "u"
            i = i+3;
        }
        else{
            textoFinal = textoFinal + texto [i]
        }
        
    }
    return textoFinal;
}

const boton_copiar = document.querySelector(".boton-copiar");
    boton_copiar.addEventListener("click", copiar = () => {
        var contenido  = document.querySelector(".txt-resultado").textContent;
        navigator.clipboard.writeText(contenido);
        console.log("hola");

    })