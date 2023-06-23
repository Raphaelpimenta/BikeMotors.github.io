export default function menuHamburguer(){
    const menuMobile = document.querySelector('#btn-mobile')

    function ativaMenu(event){

        if(event.type === 'touchstart'){
            event.preventDefault()
        }


        const nav = document.querySelector('nav')
        nav.classList.toggle('ativaMenu')
    }

    menuMobile.addEventListener('click', ativaMenu)
    menuMobile.addEventListener('touchstart', ativaMenu)
}