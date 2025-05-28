

function enviarWhats(event){
    event.preventDefault()



const nome = document.getElementById('nome')

const mensagem = document.getElementById('mensagem')

const telefone = '5569992308825';
const texto = `Olá! Me chamo ${nome}, ${mensagem}`

const msgFormatada = encodeURIComponent(texto)

const url = `https://wa.me/${telefone}?text=${msgFormatada}`

window.open(url, '_blank')
}