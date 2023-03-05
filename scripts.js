//CALCULOS DE INSUMOS
    //ATRIBUINDO VARIÁVEIS
let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputHoras = document.getElementById("horas");
    
let resultado = document.getElementById("resultado");
    //FIM DA ATRIBUIÇÃO

console.log("dados coletados...")


function calcular(){
    console.log("calculando...");

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let horas = inputHoras.value;

    let qtdTotalCarnes = carnesPP(horas) * adultos + (carnesPP(horas) / 2 * criancas);
    let totAlcolicas = alcolicaPP(horas) * adultos;
    let totSemAlcool = SemAlcoolPP(horas) * adultos + (SemAlcoolPP(horas) / 2 * criancas);
//FIM DOS CALCULOS DE INSUMOS

//DADOS QUE SERÃO IMPRESSOS NO HTML
    resultado.innerHTML = `<p><br><b>Voce vai precisar de: </b></p>`
    resultado.innerHTML += `<div class="format">
        <img class="img_prod" src="imagens/carne.png" alt="">
        <p>${(qtdTotalCarnes/1000).toFixed(2)}Kg de carne</p>
        </div>
        `
    resultado.innerHTML += `<div class="format">
        <img class="img_prod" src="imagens/lata-de-cerveja.png" alt="">
        <p>${Math.ceil(totAlcolicas / 355)} Bebidas Alcoolicas</p>
        </div>
        `
    resultado.innerHTML += `<div class="format">
        <img class="img_prod" src="imagens/refrigerante.png" alt="">
        <p>${Math.ceil(totSemAlcool / 2000)} Bebidas Sem Alcool (2L)</p>
        </div>       
        `
    
    resultado.innerHTML += `<button onclick="mais()">mostrar mais</button>`

}
//FIM DOS DADOS QUE SERÃO IMPRESSOS NO HTML

//VERIFICAÇÃO DAS HORAS INFORMADAS PELO USUÁRIO
function carnesPP(horas){
    if(horas >= 6){
        return 650;
    }else{
        return 400;
    }
}

function alcolicaPP(horas){
    if(horas >= 6){
        return 2000;
    }else{
        return 1200;
    }
}

function SemAlcoolPP(horas){
    if(horas >= 6){
        return 1500;
    }else{
        return 1000;
    }
}
//FIM DA VERIFICAÇÃO DAS HORAS INFORMADAS PELO USUÁRIO



//FUNÇÃO PARA CALCULO DA DIVISÃO DOS INSUMOS
function mais(){

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let horas = inputHoras.value;
//DIVISAO DAS CARNES
    console.log("somando carnes...")
    let qtdTotalCarnes = carnesPP(horas) * adultos + (carnesPP(horas) / 2 * criancas);

    let vCarnes = qtdTotalCarnes.value;
    //50%, 20%, 30%
    let carneV = qtdTotalCarnes * 50 /100; 
    let frango = qtdTotalCarnes * 20 /100;
    let linguica = qtdTotalCarnes * 30 /100;

    resultado2.innerHTML =
    `<div  id="divChurras">
        <div class="format">
            <img class="img_prod" src="imagens/perna-de-porco.png" alt="">
            <p>${(carneV / 1000).toFixed(2)} Kg de carne vermelha</p>
        </div>
        <div class="format">
            <img class="img_prod" src="imagens/linguica.png" alt="">
            <p>${(linguica / 1000).toFixed(2)} Kg de linguiça</p>
        </div>
        <div class="format">
            <img class="img_prod" src="imagens/coxa-de-frango.png" alt="">
            <p>${(frango / 1000).toFixed(2)} Kg de frango</p>
        </div>
    </div>`
//FIM DIVISAO DAS CARNES

// DIVISAO DAS BEBIDAS ALCOOLICAS
    console.log("somando alcoolicas...")

    let totAlcolicas = alcolicaPP(horas) * adultos;
    // 30% shoop 40% cerveja 30% dinks
    let cerveja = totAlcolicas * 40 /100; 
    let shoop = totAlcolicas * 30 /100;
    let drinks = totAlcolicas * 30 /100;

    resultado2.innerHTML +=
    `<div  id="divAlcoolicas">
        <div class="format">
            <img class="img_prod" src="imagens/lata-de-cerveja2.png" alt="">
            <p>${Math.ceil(cerveja / 355)} cerveja</p>
        </div>
        <div class="format">
            <img class="img_prod" src="imagens/cerveja.png" alt="">
            <p>${Math.ceil(shoop / 355)} chopp</p>
        </div>
        <div class="format">
            <img class="img_prod" src="imagens/cocktail.png" alt="">
            <p>${Math.ceil(drinks / 355)} drinks</p>
        </div>
    </div>`
// DIVISAO DAS BEBIDAS ALCOOLICAS

//DIVISAO DAS BEBIDAS SEM ALCOOL
    console.log("somando sem alcool...")

    let totSemAlcool = SemAlcoolPP(horas) * adultos + (SemAlcoolPP(horas) / 2 * criancas);
    // 30% shoop 40% cerveja 30% dinks
    let refrigerante = totSemAlcool * 50 /100; 
    let suco = totSemAlcool * 30 /100;
    let agua = totSemAlcool * 20 /100;
//FIM DA DIVISAO DAS BEBIDAS SEM ALCOOL

//IMPRESSÃO DAS BEBIDAS SEM ALCOOL NO HTML
    resultado2.innerHTML +=
    `<div  id="divSemAlcool">
        <div class="format">
            <img class="img_prod" src="imagens/coca.png" alt="">
            <p>${Math.ceil(refrigerante / 2000)} refrigerante</p>
        </div>
        <div class="format">
            <img class="img_prod" src="imagens/suco.png" alt="">
            <p>${Math.ceil(suco / 2000)} suco</p>
        </div>
        <div class="format">
            <img class="img_prod" src="imagens/agua.png" alt="">
            <p>${Math.ceil(agua / 2000)} agua</p>
        </div>
    </div>`
//FIM IMPRESSÃO DAS BEBIDAS SEM ALCOOL NO HTML
}
//FUNÇÃO PARA CALCULO DA DIVISÃO DOS INSUMOS

//FUNÇÃO DO BOTAO "+info/-info" PARA FECHAR E ABRIR BALÃO DE INFORMAÇÃO
function toggle() {
    controle2 = document.getElementById("controle");
    novo = document.getElementById("novo");

    if(controle2.style.display == "block"){
    controle2.style.display = "none";
    } else {
    controle2.style.display = "block";
    }
}

//FIM FUNÇÃO DO BOTAO "+info/-info" PARA FECHAR E ABRIR BALÃO DE INFORMAÇÃO