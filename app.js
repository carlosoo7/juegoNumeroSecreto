let NumeroSecreto=0;
let intentos=1;
let numeroSorteados=[];
let numeroMaximo=30;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML =texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario=parseInt(document.getElementById("valorUsuario").value);
    if(numeroDeUsuario===NumeroSecreto){
    asignarTextoElemento("p",`Acertaste el numero secreto ${NumeroSecreto} lo lograste en ${intentos} ${intentos==1 ? "intento" : "intentos" }`);
    document.getElementById("reiniciar").removeAttribute("disabled");
    }else{
        if(numeroDeUsuario>NumeroSecreto){
            asignarTextoElemento("p","El numero secreto es menor");
        }else if(numeroDeUsuario<NumeroSecreto){
        asignarTextoElemento("p","El numero secreto es mayor");}
        intentos++;
        limpiarCaja();
    }
    return;
}

function generarNumeroSecreto(){
    let numeroGenerado=Math.floor(Math.random()*numeroMaximo)+1;
    // si ya sorteamos todos los numeros
    if(numeroSorteados.length==numeroMaximo){
        asignarTextoElemento('p', 'ya se sortearon todos los números posibles');
        return null; // Retornar null para indicar que no se pudo generar un número
    }
    while (numeroSorteados.includes(numeroGenerado)) {
        numeroGenerado=Math.floor(Math.random()*numeroMaximo)+1;
    }
    numeroSorteados.push(numeroGenerado);
    return numeroGenerado;
}

function limpiarCaja() {
    document.querySelector("#valorUsuario").value="";    
}

function condicionesIniciales() {
    asignarTextoElemento("h1", "Juego de numero secreto!");
    asignarTextoElemento("p", `Indica un número del 1 al ${numeroMaximo}`);
    intentos=1;
    NumeroSecreto=generarNumeroSecreto();
}

function reiniciarJuego() {    
    limpiarCaja();    
    condicionesIniciales();
    document.getElementById("reiniciar").setAttribute("disabled","true");
}
condicionesIniciales();

