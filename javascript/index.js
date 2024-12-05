// let setadir = document.querySelector('#seta-dir')
// let setaesq = document.querySelector('#seta-esq')
// let container = document.querySelector('.container')
// let items = container.querySelectorAll('.list .item')
// let indicador = document.querySelector('.indicador')
// let pontoIndicador = indicador.querySelectorAll('ul li')
// let active = 0
// let PrimeiraPosicao = 0
// let ultimaPosicao = items.length - 1


// function proximo(){
//     let itemOld = container.querySelector('.list .active');
//     if (itemOld) {

//         itemOld.classList.remove('active');
//         itemOld.classList.add('item'); // Substitui por "item"
//     }

//     if (active + 1 > ultimaPosicao) {
//         active = 0;
//     } else {
//         active ++;
//     }

//     items[active].classList.remove('item');
//     items[active].classList.add('active');
// }

// function volta(){
//     let itemOld = container.querySelector('.list .active');
//     if (itemOld) {
//         itemOld.classList.remove('active');
//         itemOld.classList.add('item'); // Substitui por "item"
//     }

//     if (active - 1 < PrimeiraPosicao) {
//         active = ultimaPosicao;
//     } else {
//         active--;
//     }
//     items[active].classList.remove('item');
//     items[active].classList.add('active');
// }