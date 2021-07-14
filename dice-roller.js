const conteudo = document.getElementById("conteudo")
const tabela = document.getElementById("tabela")
const barras = document.getElementById("barras")
let dado1 = 0
let dado2 = 0
let soma = 0
let count = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
function rolar(){
    for(i=0; i<1000; i++){
        dado1 = Math.floor(Math.random() * 6 + 1)
        dado2 = Math.floor(Math.random() * 6 + 1)
        soma = dado1 + dado2
        count[soma-2]++
    }
    for(i=0; i<11; i++){
        const div = document.createTextNode( i+2 + ": " + count[i] )
        tabela.appendChild(div)
        const br = document.createElement("br")
        tabela.appendChild(br)
    }
    for(i=0; i<11; i++){
        const minhaBarra = document.createElement("div")
        barras.appendChild(minhaBarra)
        minhaBarra.style.backgroundColor = "#2E8B57"
        minhaBarra.style.height = "20px"
        minhaBarra.style.width = count[i] + "px"
        const space = document.createElement("br")
        barras.appendChild(space)
    }
    return count
}
document.getElementById("botao").addEventListener("click", function(event){
    rolar()
}, false);
