/* Esta funcion es para mover las cosas */
function moverPosicionRandom(element) {
    element.style.position = 'absolute'; /* posicion absoluta para q´se pueda mover */
    element.style.top = Math.random() * (window.innerHeight - element.offsetHeight) + 'px';
    element.style.left = Math.random() * (window.innerWidth - element.offsetWidth) + 'px';
}

let btnSi = document.getElementById("btn_si");
let btnNo =  document.getElementById("btn_no");
let divModLove = document.getElementsByClassName("mod_love")[0];
let video = document.getElementById("video_options");

/* Es un escucha cuando pase algo */
btnNo.addEventListener('mouseenter', function(e) {moverPosicionRandom(e.target)});

/* Es para el escucha del boton SI */
btnSi.addEventListener('click', function(e) {
    alert('Sabia que dirias que sí... I Love You! 😍')

    divModLove.style.display = 'block';
    const cancion = new Audio('images\\img_modo_hot.mp3');
    cancion.play();
    stopVideo();
})


/* funcion pausar video */
function stopVideo(){
    video.pause();
}



/*
Existen 3 tipos de display
    none: desaparece el eleemento
    hidden: Esconde el elemento pero ahi sigue
    block: aparece y existe

*/