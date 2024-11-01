let section = document.getElementById('section')
let banners = document.getElementById('banners')

section.appendChild(banners)

export function trocarBanner(numeroBanner) {

    banners.style.left = '-' + numeroBanner + '00vw';
    console.log('oi')
}