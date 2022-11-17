let nome = document.querySelector('#nome')
let erroNome = document.querySelector('#erroNome')
let email = document.querySelector('#email')
let erroEmail = document.querySelector('#erroEmail')
let assunto = document.querySelector('#assunto')
let erroAssunto = document.querySelector('#erroAssunto')
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector('#mapa')

function validaNome() {
    if (nome.value.length < 3) {
        erroNome.innerHTML = 'nome invalido'
    } else {
        erroNome.innerHTML = ''
        nomeOk=true
    }
}

function validaEmail() {
    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        erroEmail.innerHTML = 'email invalido'
    } else {
        erroEmail.innerHTML = ''
       emailOk=true

    }
}
function validaAssunto() {
    if (assunto.value.length > 10) {
        erroAssunto.innerHTML = "Limite extendido (limite de 100 caracteres)"
    } else {
        erroAssunto.innerHTML = ''
    }
}
function enviar() {
    if (nomeOk && emailOk && assuntoOk) {
        alert('email enviado com sucesso')
    } else {
        alert('preencha as informacoes corretamente !')
    }
}
function mapaZoom() {
    mapa.style.width = '600px'
    mapa.style.heigth = '400px'
}

function mapaNormal() {
    mapa.style.width = '400px'
    mapa.style.heigth = '250px'
}



