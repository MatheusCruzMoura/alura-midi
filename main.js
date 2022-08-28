
function tocarSom(idAudio) {
    document.querySelector(idAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let i = 0; i < listaDeTeclas.length; i++) {
    const tecla = listaDeTeclas[i];
    const somTecla = tecla.classList[1];
    const idAudio = `#som_${somTecla}`;

    tecla.onclick = function () {
        tocarSom(idAudio);
    }

    tecla.onkeydown = function (evento) {
        if (evento.code === "Enter" || evento.code === "Space") {
            tecla.classList.add('ativa');
        } else {
            if (evento.code === "Tab") {
                tecla.classList.remove('ativa');
            } else if (evento.code === "Tab" || evento.code === "ArrowRight") {
                if (i < listaDeTeclas.length - 1) {
                    tecla.classList.remove('ativa');
                    listaDeTeclas[i + 1].focus();
                }
            } else if (evento.code === "ArrowLeft") {
                if (i > 0) {
                    tecla.classList.remove('ativa');
                    listaDeTeclas[i - 1].focus();
                }
            } else if (evento.code === "ArrowDown") {
                if (i < listaDeTeclas.length - 3) {
                    tecla.classList.remove('ativa');
                    listaDeTeclas[i + 3].focus();
                }
            } else if (evento.code === "ArrowUp") {
                if (i > 2) {
                    tecla.classList.remove('ativa');
                    listaDeTeclas[i - 3].focus();
                }
            }
        }
    }

    tecla.onkeyup = function (evento) {
        if (evento.code === "Enter" || evento.code === "Space") {
            tecla.classList.remove('ativa');
        }
    }
}
