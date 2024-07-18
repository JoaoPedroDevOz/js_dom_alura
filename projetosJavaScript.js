const html = document.querySelector('html')

//Botões
const focoBt = document.querySelector('.app__card-button--foco')
const curtoBt = document.querySelector('.app__card-button--curto')
const longoBt = document.querySelector('.app__card-button--longo')
const buttons = document.querySelectorAll('.app__card-button')
const startPauseBt = document.querySelector('.app__card-primary-button')

//Imagens
const temp = document.querySelector('.app__card-timer')
const img = document.querySelector('.app__image')
const iconPlayPause = document.querySelector('.app__card-primary-butto-icon')

//Textos
const titulo = document.querySelector('.app__title')
const subtitulo = document.querySelector('.app__title-strong')
const iniciarOuPausarBt = document.querySelector('#start-pause span')

//Música
const musicaFocoInput = document.querySelector('.toggle-checkbox')
const musica = new Audio('/sons/luna-rise-part-one.mp3')
musica.loop = true
musica.volume = 0.3
musica.currentTime = 10
const soundPlay = new Audio('/sons/play.wav')
const soundPause = new Audio('/sons/pause.mp3')
const soundFinish = new Audio('/sons/beep.mp3')

//Temporizador
let temporizador = 1500
let intervaloId = null
const timerScreen = document.querySelector('.app__card-timer')

musicaFocoInput.addEventListener('change', () => {
    if (musica.paused) {
        musica.play()
    } else {
        musica.pause()
    }
}) 

function alterarContexto(contexto) {
    showTime()
    buttons.forEach(function (contexto) {
      contexto.classList.remove('active')  
    })
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
        case 'foco':
            focoBt.classList.add('active')
            break;
        case 'descanso-curto':
            curtoBt.classList.add('active')
            break;
        case 'descanso-longo':
            longoBt.classList.add('active')
            break;
        default:
            break;
    }
}

focoBt.addEventListener('click', () => {
    temporizador = 1500
    alterarContexto('foco')
    alterarEstiloBt('foco')
})
curtoBt.addEventListener('click', () => {
    temporizador = 300
    alterarContexto('descanso-curto')
    alterarEstiloBt('descanso-curto')
})
longoBt.addEventListener('click', () => {
    temporizador = 900
    alterarContexto('descanso-longo')
    alterarEstiloBt('descanso-longo')
})


const contagemRegressiva = () => {
    if (temporizador <= 0) {
        zerar()
        soundFinish.play()
        alert("Tempo Finalizado!")
        soundFinish.pause()
        return
    }
    temporizador -= 1
    showTime()
}

function iniciarOuPausar() {
    if (intervaloId) {
        soundPause.play()
        zerar()
        return
    } 
    soundPlay.play()
    intervaloId = setInterval(contagemRegressiva, 1000)
    iniciarOuPausarBt.innerHTML = '<strong>Pausar</strong>'
    iconPlayPause.setAttribute('src', '/imagens/pause.png')
}

function zerar() {
    clearInterval(intervaloId)
    iniciarOuPausarBt.innerHTML = '<strong>Começar</strong>'
    iconPlayPause.setAttribute('src', '/imagens/play_arrow.png')

    intervaloId = null
}

startPauseBt.addEventListener('click', iniciarOuPausar)

function showTime() {
    const time = new Date(temporizador * 1000)
    const tempoFormatado = time.toLocaleString('pt-Br', {minute: '2-digit', second: '2-digit'})
    timerScreen.innerHTML = `${tempoFormatado}`
}
showTime()
