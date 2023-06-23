export default function initanimaNumeros(){
    
    function animaNumeros(){
        const numeros = document.querySelectorAll('[data-numero]')
    
        numeros.forEach(function(item){
            const total = +item.innerHTML
            const incremento = Math.floor(total / 100)
            let start = 0
            const timer = setInterval(function(){
                start = start + incremento
                item.innerHTML = start
                if(start > total) {
                    item.innerHTML = total
                    clearInterval(timer)
                }
            }, 50 * Math.random())
        })
    }
    
    function handleMutation(mutation){
        if(mutation[0].target.classList.contains('ativo')){
            observer.disconnect();
            animaNumeros();
        }
    }
    
    const observerTarget = document.querySelector('.numeros');
    const observer = new MutationObserver(handleMutation);
    
    observer.observe(observerTarget, {attributes: true})
}
