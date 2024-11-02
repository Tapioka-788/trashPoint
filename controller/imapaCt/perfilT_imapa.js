let section = document.getElementById('section')
let banners = document.getElementById('banners')

section.appendChild(banners)

export function trocarBanner(numeroBanner) {

    banners.style.top = '-' + numeroBanner + '0vh';
    console.log('oi')
}