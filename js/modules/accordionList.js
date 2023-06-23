export default function accordionList(){

    const accordion = document.querySelectorAll('.faq-list dt');
    const activeClass = 'ativo';

    if(accordion.length){
        accordion[0].classList.add(activeClass);
        accordion[0].nextElementSibling.classList.add(activeClass);

        function activeAccordion(){
            this.classList.toggle(activeClass);
            this.nextElementSibling.classList.toggle(activeClass);
        }

        accordion.forEach(function(item){
            item.addEventListener('click', activeAccordion)
        })
    }
    
}

