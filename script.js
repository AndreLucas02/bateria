function tocarSom(event) {
    if (event.code === 'KeyQ') {
        let div = document.querySelector('.keyq');
        let audio = document.querySelector('#s_keyq');
        div.classList.add('active');
        audio.currentTime = 0;
        audio.play();

    }

    if (event.code === 'KeyW') {
        let div = document.querySelector('.keyw');
        let audio = document.querySelector('#s_keyw');
        div.classList.add('active');
        audio.currentTime = 0;
        audio.play();
    }

    if (event.code === 'KeyE') {
        let div = document.querySelector('.keye');
        let audio = document.querySelector('#s_keye');
        div.classList.add('active');
        audio.currentTime = 0;
        audio.play();
    }

    if (event.code === 'KeyA') {
        let div = document.querySelector('.keya');
        let audio = document.querySelector('#s_keya');
        div.classList.add('active');
        audio.currentTime = 0;
        audio.play();
    }

    if (event.code === 'KeyS') {
        let div = document.querySelector('.key_s');
        let audio = document.querySelector('#s_keys');
        div.classList.add('active');
        audio.currentTime = 0;
        audio.play();
    }

    if (event.code === 'KeyD') {
        let div = document.querySelector('.keyd');
        let audio = document.querySelector('#s_keyd');
        div.classList.add('active');
        audio.currentTime = 0;
        audio.play();
    }

    if (event.code === 'KeyZ') {
        let div = document.querySelector('.keyz');
        let audio = document.querySelector('#s_keyz');
        div.classList.add('active');
        audio.currentTime = 0;
        audio.play();
    }

    if (event.code === 'KeyX') {
        let div = document.querySelector('.keyx');
        let audio = document.querySelector('#s_keyx');
        div.classList.add('active');
        audio.currentTime = 0;
        audio.play();
    }

    if (event.code === 'KeyC') {
        let div = document.querySelector('.keyc');
        let audio = document.querySelector('#s_keyc');
        div.classList.add('active');
        audio.currentTime = 0;
        audio.play();
    }



}

function limpar() {

    const elements = document.querySelectorAll('.active');

    elements.forEach((element) => {
        element.classList.remove('active');

    });

}



document.body.addEventListener('keydown', tocarSom);
document.body.addEventListener('keyup', limpar);