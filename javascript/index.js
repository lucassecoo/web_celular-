let voltaBtn = document.getElementById('seta-dir')
let proxBtn = document.getElementById('seta-esq')
let container = document.querySelector('.container')
let itens = container.querySelectorAll('.list .item')
let indicador = document.querySelector('.indicador')
let dots = indicador.querySelectorAll('ul li')
let number =indicador.querySelector('.number')
let list = document.querySelector('.list')

let active = 0
let primeiraPos = 0
let ultimaPos = 2


voltaBtn.onclick = () => {
    let itemOld = container.querySelector('.list .item.active')
    itemOld.classList.remove('active')
    
    active = active - 1 < primeiraPos ? ultimaPos : active - 1
    itens[active].classList.add('active')

    let dotsOld = indicador.querySelector('ul li.active')
    dotsOld.classList.remove('active')
    dots[active].classList.add('active')

    indicador.querySelector('.number').innerHTML = `0${active + 1}`
}

proxBtn.onclick = () => {
    let itemOld = container.querySelector('.list .item.active')
    itemOld.classList.remove('active')
    
    active = active + 1 > ultimaPos ? 0 : active + 1
    itens[active].classList.add('active')

    let dotsOld = indicador.querySelector('ul li.active')
    dotsOld.classList.remove('active')
    dots[active].classList.add('active')

    indicador.querySelector('.number').innerHTML = `0${active + 1}`
}