const inputNome = document.getElementById("input-nome");
const inputNumero = document.getElementById("input-numero");
const inputMes = document.getElementById("input-mes");
const inputAno = document.getElementById("input-ano");
const inputCVC = document.getElementById("input-cvc");

const cartaoNome = document.getElementById("nome");
const cartaoNumero = document.getElementById("number");
const cartaoMes = document.getElementById("mes");
const cartaoAno = document.getElementById("ano");
const cartaoCVC = document.getElementById("cvc");

const submitBotao = document.getElementById("submit");
const form = document.querySelector("form");
const done = document.querySelector(".agradecimento");

function setCartaoNome(e){
    cartaoNome.innerText = format(e.target.value);
}

function setCartaoNumero(e){
    cartaoNumero.innerText = format(e.target.value);
}

function setCartaoMes(e){
    cartaoMes.innerText = format(e.target.value);
}

function setCartaoAno(e){
    cartaoAno.innerText = format(e.target.value);
}

function setCartaoCVC(e){
    cartaoCVC.innerText = format(e.target.value);
}

function format(s){
    return s.toString().replace(/\d{4}(?=.)/g, "$&");
}

function enviar(e){
    e.preventDefault();
    if(!inputNome.value){
        inputNome.classList.add("error");
        inputNome.parentElement.classList.add("error-message");
    }
    else{
        inputNome.classList.remove("error");
        inputNome.parentElement.classList.remove("error-message");
    }

    if(!inputNumero.value){
        inputNumero.classList.add("error");
        inputNumero.parentElement.classList.add("error-message");
    }
    else if(inputNumero.value.length !== 16){
        inputNumero.classList.add("error");
    }
    else{
        inputNumero.classList.remove("error");
        inputNumero.parentElement.classList.remove("error-message");
    }

    if(!inputMes.value || inputMes.value < 1 || inputMes.value > 12){
        inputMes.classList.add("error");
        inputMes.parentElement.classList.add("error-message");
    }
    else{
        inputMes.classList.remove("error");
        inputMes.parentElement.classList.remove("error-message");
    }

    if(!inputAno.value || inputAno.value.length !==2){
        inputAno.classList.add("error");
        inputAno.parentElement.classList.add("error-message");
    }
    else{
        inputAno.classList.remove("error");
        inputAno.parentElement.classList.remove("error-message");
    }

    if(!inputCVC.value){
        inputCVC.classList.add("error");
        inputCVC.parentElement.classList.add("error-message");
    }
    else{
        inputCVC.classList.remove("error");
        inputCVC.parentElement.classList.remove("error-message");
    }

    if(
        inputNome.value &&
        inputNumero.value &&
        inputMes.value &&
        inputAno.value &&
        inputCVC.value &&
        inputNumero.value.length == 16
    ){
        done.classList.remove("hidden");
        form.classList.add("hidden");
    }
}
inputNome.addEventListener("keyup", setCartaoNome);
inputNumero.addEventListener("keyup", setCartaoNumero);
inputMes.addEventListener("keyup", setCartaoMes);
inputAno.addEventListener("keyup", setCartaoAno);
inputCVC.addEventListener("keyup", setCartaoCVC);

submitBotao.addEventListener("click", enviar);

document.querySelector(".agradecimento button").addEventListener("click", function() {
    document.querySelector(".agradecimento").classList.add("hidden");
    form.classList.remove("hidden");
    form.reset(); // Isso irá resetar o formulário
});
