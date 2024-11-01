let section = document.getElementById('section')
let menus = document.getElementById('menus')

section.appendChild(menus)

export function trocarMenu(numeroMenu) {

    menus.style.left = '-' + numeroMenu + '00vw';
    console.log('ola')
}