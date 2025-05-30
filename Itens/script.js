import { Ripple, initMDB } from "mdb-ui-kit";

initMDB({ Ripple });

document.querySelectorAll('[tabindex]').
forEach(el => {
    el.addEventListener('focus', () => {
        el.scrollIntoView({behavior:
'smooth', block: 'center'});
    });
});

ScrollReveal().reveal('.intern-text');

function diminuirFonte() {
    let tamanhoAtual = parseFloat(getComputedStyle(document.body).fontSize);
    document.body.style.fontSize = (tamanhoAtual - 2) + "px";
}
