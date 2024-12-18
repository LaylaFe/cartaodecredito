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

function mostrarErro(input, mensagem) {
     input.classList.add("error"); 
     let errorMessage = input.parentElement.querySelector(".error-message");
     if (!errorMessage) {
        errorMessage = document.createElement("span"); 
        errorMessage.className = "error-message"; 
        errorMessage.textContent = mensagem; 
        input.parentElement.appendChild(errorMessage); 
    } 
    errorMessage.classList.remove("hidden"); 
} 
function removerErro(input) { 
    input.classList.remove("error"); 
    let errorMessage = input.parentElement.querySelector(".error-message"); 
    if (errorMessage) { 
        errorMessage.classList.add("hidden"); 
    } 
}

function enviar(e){
    e.preventDefault();
    let erro = false // Variável para rastrear se há algum erro


    // Verificação do nome 
    if (!inputNome.value) {
        mostrarErro(inputNome, "Nome inválido."); 
        erro = true; 
    } else {
        removerErro(inputNome); 
    } 
    
    // Verificação do número do cartão 
    if (!inputNumero.value || inputNumero.value.length !== 16) {
        mostrarErro(inputNumero, "NÚMERO inválido."); 
        erro = true; 
    } else { 
        removerErro(inputNumero); 
    } 
    
    // Verificação do mês 
    if (!inputMes.value || inputMes.value < 1 || inputMes.value > 12) {
        mostrarErro(inputMes, "MÊS inválido."); 
        erro = true; 
    } else { 
        removerErro(inputMes); 
    } 
    
    // Verificação do ano 
    if (!inputAno.value || inputAno.value.length !== 2) { 
        mostrarErro(inputAno, "ANO inválido."); 
        erro = true; 
    } else { 
        removerErro(inputAno); 
    } 
    
    // Verificação do CVC 
    if (!inputCVC.value || inputCVC.value.length !== 3) { 
        mostrarErro(inputCVC, "CVC inválido."); 
        erro = true; 
    } else { 
        removerErro(inputCVC); 
    } 
    
    // Se não houver erros, exibe a mensagem de agradecimento 
    if (!erro) { 
        done.classList.remove("hidden"); 
        form.classList.add("hidden"); 
    }
}
inputNome.addEventListener("keyup", function(e) { setCartaoNome(e); removerErro(inputNome); });
inputNumero.addEventListener("keyup", function(e) { setCartaoNumero(e); removerErro(inputNumero); });
inputMes.addEventListener("keyup", function(e) { setCartaoMes(e); removerErro(inputMes); });
inputAno.addEventListener("keyup", function(e) { setCartaoAno(e); removerErro(inputAno); });
inputCVC.addEventListener("keyup", function(e) { setCartaoCVC(e); removerErro(inputCVC); });

submitBotao.addEventListener("click", enviar);

document.querySelector(".agradecimento button").addEventListener("click", function() {
    location.reload(); // Isso irá atualizar a página
});


