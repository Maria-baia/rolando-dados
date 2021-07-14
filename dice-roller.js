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
        if(soma === 2){
            count[0]++
        }
        if(soma === 3){
            count[1]++
        }
        if(soma === 4){
            count[2]++
        }
        if(soma === 5){
            count[3]++
        }
        if(soma === 6){
            count[4]++
        }
        if(soma === 7){
            count[5]++
        }
        if(soma === 8){
            count[6]++
        }
        if(soma === 9){
            count[7]++
        }
        if(soma === 10){
            count[8]++
        }
        if(soma === 11){
            count[9]++
        }
        if(soma === 12){
            count[10]++
        }
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
        minhaBarra.style.backgroundColor = "grey"
        minhaBarra.style.height = "20px"
        minhaBarra.style.width = count[i] + "px"
        const space = document.createElement("br")
        barras.appendChild(space)
    }
    return count
}
