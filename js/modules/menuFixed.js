export default function menuFixed(){
    const menu = document.querySelector('.header-bg');
    
    function menuScroll(){
        const posicao = window.pageYOffset;
    
        if(posicao > 100){
            menu.classList.add('ativo')
        } else if (posicao <= 100) {
            menu.classList.remove('ativo')
        }
        
    }

    
    window.addEventListener('scroll', menuScroll)
}