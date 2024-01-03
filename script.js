const display = document.getElementById ('display');
const numeros = document.querySelectorAll ('[id*=tecla');
const operadores = document.querySelectorAll ('[id*=operador]');
const igual = document.getElementById ('igual');
const limparDisplay = document.getElementById ('limparDisplay');
const limparCalculo = document.getElementById ('limparCalculo');
const inverter = document.getElementById ('inverter');
const decimal = document.getElementById ('decimal');

let novoNumero = true;
let operador;
let numeroAnterior;


const inserirNumero = (evento) => atualizarDisplay(evento.target.textContent);

const atualizarDisplay = (texto) => {
    if(novoNumero){
        display.textContent = texto.toLocaleString('BR');
        novoNumero = false;
    }else {
        display.textContent += texto.toLocaleString('BR');
    }
}

const selecionarOperador = (evento) => {
    if(!novoNumero){
        calcular();
        novoNumero = true;
        operador = evento.target.textContent;
        numeroAnterior = parseFloat(display.textContent.replace (',','.'));   
    }
}    

const operacaoPendente = () => operador != undefined;

const calcular = () => {
    if (operacaoPendente()) {
        novoNumero = true;
        const numeroAtual = parseFloat(display.textContent.replace(',', '.'));
        let resultado;
        switch (operador) {4
            case '+':
                resultado = numeroAnterior + numeroAtual;
                break;
            case '-':
                resultado = numeroAnterior - numeroAtual;
                break;
            case '*':
                resultado = numeroAnterior * numeroAtual;
                break;
            case '÷':
                resultado = numeroAnterior / numeroAtual;
                break;
            default:
                return;
        }
        atualizarDisplay(resultado.toLocaleString('BR'));
    }
};


const ativarIgual = () => {
    calcular();
    operador = undefined;
}

const limpaDisplay = () => display.textContent = '';

const limpaCalculo = () => {
    operador = undefined;
    numeroAnterior = undefined;
    novoNumero = true;
    display.textContent = '';
}

const inverterSinal = () => {
    novoNumero = true;
    atualizarDisplay (display.textContent * -1);
}

const existeNumero = () => display.textContent.length > 0;
const existeDecimal = () => display.textContent.indexOf (',') !== -1;

const inserirDecimal = () => {
    if(!existeDecimal()){
        if(existeNumero()){
         atualizarDisplay (',');
        }else {
         atualizarDisplay ('0,');
        }
    }
}


numeros.forEach(numero => numero.addEventListener ('click', inserirNumero));
operadores.forEach(operador => operador.addEventListener ('click', selecionarOperador));
igual.addEventListener ('click', ativarIgual);
limparDisplay.addEventListener ('click', limpaDisplay);
limparCalculo.addEventListener ('click', limpaCalculo);
inverter.addEventListener ('click', inverterSinal);
decimal.addEventListener ('click', inserirDecimal);