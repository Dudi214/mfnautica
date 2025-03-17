const form = document.getElementById('fale-conosco')
const botao = document.getElementById('btn')
const mascara = document.querySelector('#mascara-formulario')
const mascaraHeader = document.querySelector('#mascaraHeader')
const formHeader = document.querySelector('#fale-conosco-header')


function preLoadImage(url) {
    let img = new Image
    img.src = url
}


function clickButton() {
    form.style.left = "50%"
    form.style.transform = "translateX(-50%)"
    mascara.style.visibility = "visible"
    form.style.transition = "0.4s ease-in"

}

function clickButtonHeader() {
    formHeader.style.left = "50%"
    formHeader.style.transform = "translateX(-50%)"
    mascaraHeader.style.visibility = "visible"
    formHeader.style.transition = "0.4s ease-in"


}

function desligarMascara() {
    form.style.left = '-340px'
    mascara.style.visibility = "hidden"
    form.style.transform = 'translateX(0%)'
    mascara.style.transition = '0.4s ease-in'
}

function desligarMascaraHeader() {
    formHeader.style.left = '-340px'
    mascaraHeader.style.visibility = "hidden"
    formHeader.style.transform = 'translateX(0%)'
    mascaraHeader.style.transition = '0.4s ease-in'
}

window.onload = function () {
    verificarTamanhoJanela();
};
// Verifica o tamanho da janela quando ela é redimensionada
window.onresize = function () {
    verificarTamanhoJanela();
};

function verificarTamanhoJanela() {


    let larguraJanela = window.innerWidth
    const body = document.body
    if (larguraJanela < 1100) {

        // body.style.backgroundImage = "url('img/mobile-banner.jpg')"
        // body.style.backgroundColor = 'black'
        // body.style.backgroundSize = 'cover'
        // body.style.backgroundAttachment = 'fixed'
        // body.style.backgroundRepeat = 'norepeat'


    } else {

    }
}

function handlePhone(event) {

    let input = event.target
    input.value = formatarCelular(input.value)

}

function formatarCelular(value) {

    if (!value) return ''
    value = value.replace(/\D/g, '')
    value = value.replace(/(\d{2})(\d)/, "($1) $2")
    value = value.replace(/(\d)(\d{4})$/, "$1-$2")
    return value



}

function enviarForm() {


    const number = "5524993255064"
    const msg = "Olá, aqui abaixo estão as informações do seu agendamento, aguarde e você receberá o retorno aqui sobre seu pedido agendado."
    const name = document.querySelector('#name').value
    const tel = document.querySelector('#tel').value
    const order = document.querySelector('#order').value
    const price = document.querySelector('#price').value
    let day = document.querySelector('select').value

    const url = "https://wa.me/" + number + "?text="
        + "MF NÁUTICA: " + msg + "%0a%0a"
        + "Nome: " + name + "." + "%0a"
        + "Número: " + tel + "." + "%0a"
        + "Pedido: " + order + "." + "%0a"
        + "Valor: " + price + "." + "%0a"
        + "Dia: " + day + "." + "%0a"

    window.open(url, '_blank').focus()

}

function contactHeader() {

    const number = "5524993255064"
    const name = document.querySelector('#nameContact').value
    const tel = document.querySelector('#telContact').value
    const msg = document.querySelector('textarea').value


    const url = "https://wa.me/" + number + "?text="
        + "Nome: " + name + "." + "%0a"
        + "Número: " + tel + "." + "%0a"
        + "Dúvida: " + msg + "." + "%0a%0a"

    window.open(url, '_blank').focus()

}



const imgForm = document.querySelector('#orderForm')

function mudarImg1() {
    clickButton()
    imgForm.src = 'assents/caique2.jpg'
    order.value = "Caiaque"
    price.value = "R$ Valor: R$ 3,190"
}

function mudarImg2() {
    clickButton()
    imgForm.src = 'assents/canoaapache.jpg'
    order.value = "Canoa Apache"
    price.value = "R$ 4,700"
}

function mudarImg3() {
    clickButton()
    imgForm.src = 'assents/bote5.jpg'
    order.value = "Bote"
    price.value = "R$ 9,400"


}

function mudarImg4() {
    clickButton()
    imgForm.src = 'assents/bote1.jpg'
    order.value = "Bote"
    price.value = "R$ 6,100"
}



function mudarImg5() {
    clickButton()
    imgForm.src = './assents/canoacanadense.jpg'
    order.value = "Canoa Canadense"
    price.value = "R$ 4,400"

}



function mudarImg6() {
    clickButton()
    imgForm.src = 'assents/pedalinho.jpg'
     order.value = "Pedalinho"
     price.value = "R$ 9,500"

}

function mudarImg7() {
    clickButton()
    imgForm.src = 'assents/Canoacaiçara.jpg'
     order.value = " Canoa caiçara  "
     price.value = "R$ 6,100"

}

function mudarImg8() {
    clickButton()
    imgForm.src = 'assents/pedalinhoquadrado.png'
     order.value = " Pedalinho quadrado  "
     price.value = "R$ 12,300"

}

function mudarImg9() {
    clickButton()
    imgForm.src = 'assents/carreta.jpg'
     order.value = " Carreta  "
     price.value = "R$ 4,500"

}

function mudarImg10() {
    clickButton()
    imgForm.src = 'assents/deck bits.png'
     order.value = " Deck Bits  "
     price.value = "R$ 3,700"

}


function mudarImg11() {
    clickButton()
    imgForm.src = 'assents/Derrapante.png'
     order.value = "  Derrapante "
     price.value = "R$ 1,080"
}



let slideIndex = 0;

function mudarSlide(n) {
    const slides = document.getElementsByClassName("slide");
    slideIndex += n;

    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
    if (slideIndex < 0) {
        slideIndex = slides.length - 1;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex].style.display = "block";
}

// Exibir primeiro slide ao carregar
document.addEventListener("DOMContentLoaded", () => {
    mudarSlide(0);
});



