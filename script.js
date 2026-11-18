let btnTroca = document.querySelector("#btn-troca")
let visitante = document.querySelector("#nome-saida")
let nomeEntrada = document.querySelector("#nome-entrada")

btnTroca.addEventListener('mouseenter', () => visitante.style.fontSize = "1.6rem")

btnTroca.addEventListener('click', () => {
    visitante.textContent = nomeEntrada.value 
    visitante.style.color = "red"
})


btnTroca.addEventListener('keypress', function(){
    visitante.style.backgroundColor = "black"
})





let caixa = document.querySelector("#caixa")
let btnVerde = document.querySelector("#btn_verde")
let btnAmarelo = document.querySelector("#btn_amarelo")
let btnAzul = document.querySelector("#btn_azul")

btnAzul.addEventListener('click', () => { 
    caixa.style.backgroundColor = "blue"
    caixa.style.boxShadow = " 0 0 20px blue"
    caixa.style.color =  "white"
})
btnVerde.addEventListener('click', () => { 
    caixa.style.backgroundColor = "green"
    caixa.style.boxShadow = " 0 0 20px green"
    caixa.style.color =  "white"
})
btnAmarelo.addEventListener('click', () => { 
    caixa.style.backgroundColor = "yellow"
    caixa.style.boxShadow = " 0 0 20px yellow"
    caixa.style.color =  "white"
})

let btnSubtrair = document.querySelector("#btn_menos")
let valor = document.querySelector("#valor_real")
let btnSoma = document.querySelector("#btn_mais")

btnSubtrair.addEventListener('click',() => { 
    if(valor.textContent == 0){
        window.alert("N é possivel mais subtrair")


    }else{
        valor.textContent --
    }


})

btnSoma.addEventListener('click',() => valor.textContent ++)



const nomeLivro = document.querySelector("#nome_livro")
const adicionarLivro = document.querySelector("#adiciona_livro")

let listaLivros = document.querySelector("#lista_livros")

adicionarLivro.addEventListener('click',() => {
    let novoLivro = document.createElement("li").textContent = nomeLivro.value

    listaLivros.appendChild(novoLivro)

    nomeLivro.value = ""

})






/*

btnTroca.addEventListener('click', trocarNome)

function trocarNome(){
    visitante.textContent = nomeEntrada.value
}

*/
