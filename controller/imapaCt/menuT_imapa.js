let section = document.getElementById('section')
let menus = document.getElementById('menus')

section.appendChild(menus)

export function trocarMenu(numeroMenu) {

    menus.style.top = '-' + numeroMenu + '0vh';
    console.log('ola')
}