# Frontend Mentor - Solução do formulário de detalhes do cartão


![Design do formulário de dados no cartão](./design/desktop-design.jpg)

# Esta é uma solução para o Desafio de formulário de detalhes interativos do cartão no [Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-card-details-form-XpS8cKZDWw). 

## 📖 Ìndice

- [Meu processo](#meu-processo)
- [O desafio](#o-desafio)
- [Recursos utilizados](#Recursos-utilizados)
- [Aprendizado](#Aprendizado)
- [Imagem Demonstração](#imagem_demosntracao)
- [Autor](#Autor)

# ⭐ Meu processo

- Utilizando o VS Code conectado a minha conta do GitHub, desenvolvi uma página em HTML, CSS e JavaScript, responsivo, para a visualização do desafio de criar um formulário interativo [Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-card-details-form-XpS8cKZDWw) e concluir o desafio de codificação criado.

# ⭐ O desafio
O desafio é criar um formulário interativo de detalhes do cartão e deixá-lo o mais próximo possível do design.
## Seus usuários devem ser capazes de:
Preencher o formulário e ver os detalhes do cartão atualizados em tempo real
Receba mensagens de erro quando o formulário for enviado se:
Qualquer campo de entrada está vazio
O número do cartão, a data de validade ou os campos CVC estão no formato errado

Visualize o layout ideal dependendo do tamanho da tela do dispositivo.


# ⭐ Recursos utilizados

![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

- Visual Studio Code
- Marcação semântica HTML5
- Propriedades personalizadas do CSS
- Modelos de caixa
- Flexbox
- Funções JavaScript
- Fluxo de trabalho que prioriza dispositivos móveis
- [Markdown Badges](https://github.com/Ileriayo/markdown-badges#markdown-badges)
- [Como escrever no GitHub](https://docs.github.com/pt/get-started/writing-on-github)

# ⭐ Aprendizado

Aprendi a adicionar códigos em JavaScript como constantes e funções.
```
const inputNome = document.getElementById("input-nome");
const inputNumero = document.getElementById("input-numero");
const inputMes = document.getElementById("input-mes");
const inputAno = document.getElementById("input-ano");
const inputCVC = document.getElementById("input-cvc");
```
```
  function enviar(e){
    e.preventDefault();
    if(!inputNome.value){
        inputNome.classList.add("error");
        inputNome.parentElement.classList.add("error-message");
    }
    else{
```

# 📌 Imagem Demonstração

![](design/mobile-design.jpg)


## 🌙⭐ Autor
[![LinkedIn](https://img.shields.io/badge/-laylafe-000?style=for-the-badge&logo=linkedin&logoColor=62b1d4&color:FFF)](https://www.linkedin.com/in/laylafe/)
[![github](https://img.shields.io/badge/-laylafe-000?style=for-the-badge&logo=github&)](https://github.com/laylafe)
- Website - [Missão de Amor](https://laylafe.github.io/missaodeamor/) - Site em desenvolvimento
- Frontend Mentor - [@LaylaFe](https://www.frontendmentor.io/profile/LaylaFe)

_____________________________

![Top Langs](https://github-readme-stats-git-masterrstaa-rickstaa.vercel.app/api/top-langs/?username=laylafe&layout=compact&bg_color=211452&border_color=00000000&title_color=E94D5F&text_color=FFF)

## GitHub Stats

![GitHub Stats](https://github-readme-stats.vercel.app/api?username=laylafe&theme=transparent&bg_color=211452&border_color=fff0&show_icons=true&icon_color=fff&title_color=fff&text_color=fff&hide_title=true&hide=stars)