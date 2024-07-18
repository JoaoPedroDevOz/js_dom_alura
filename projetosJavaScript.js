const html = document.querySelector('html')
const focoBt = document.querySelector('.app__card-button--foco')
const curtoBt = document.querySelector('.app__card-button--curto')
const longoBt = document.querySelector('.app__card-button--longo')
const temp = document.querySelector('.app__card-timer')
const img = document.querySelector('.app__image')
const titulo = document.querySelector('.app__title')
const subtitulo = document.querySelector('.app__title-strong')

//tempFoco = document.querySelector('.')
//constTempFoco = 1500    
//constTempDescansoLongo = 900
//constTempDescansoCurto = 300

function alterarContexto(contexto) {
    html.setAttribute('data-contexto', contexto)
    img.setAttribute('src', `/imagens/${contexto}.png`)
    switch (contexto) {
        case 'foco':
            titulo.innerHTML = `Otimize sua produtividade,<br>
                <strong class="app__title-strong">mergulhe no que importa.</strong>`
            break;
        case 'descanso-curto':
            titulo.innerHTML = `Que tal dar uma respirada? <br>
                <strong class="app__title-strong">Faça uma pausa curta.</strong>`
            break;
        case 'descanso-longo': 
            titulo.innerHTML = `Hora de voltar à superfície. <br>
                <strong class="app__title-strong">Faça uma pausa longa.</strong>`
        default:
            break;
    }
}

function alterarEstiloBt(btn) {
    switch (btn) {
        case 'focoBt':
            focoBt.classList.add('active')
            break;
        case 'descanso-curto':
            curtoBt.classList.add('active')
        case 'descanso-longo':
            longoBt.classList.add('active')
        default:
            break;
    }
}

focoBt.addEventListener('click', () => {
    alterarContexto('foco')
})
curtoBt.addEventListener('click', () => {
    alterarContexto('descanso-curto')
})
longoBt.addEventListener('click', () => {
    alterarContexto('descanso-longo')
})
