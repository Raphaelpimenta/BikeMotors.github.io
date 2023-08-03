export default function galeriaImage(){
    const containerGaleria = document.querySelector('.bikes-img')
    const galeria = document.querySelectorAll('.bikes-img li')

    function changeImage(event){
        const img = event.currentTarget
        const media = matchMedia('(min-width: 460px)').matches
        if(media){
            containerGaleria.prepend(img)
        }
    }

    function eventGaleria(img){
        img.addEventListener('click', changeImage)
    }


    galeria.forEach(eventGaleria);

}