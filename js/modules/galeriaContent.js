export default function galeriaContent(){
    const tabGaleria = document.querySelectorAll('.js-galeria li');
    const tabContent = document.querySelectorAll(".js-content section")

    if(tabGaleria.length && tabContent.length){
        tabContent[0].classList.add('ativo');

        function ativaTab(index){
            tabContent.forEach(function(itemSection){
                itemSection.classList.remove('ativo');
            });
            tabContent[index].classList.add('ativo');
        }

        tabGaleria.forEach(function(item, index){
            item.addEventListener('click', function(){
                ativaTab(index);
            })
        })


    }
}

