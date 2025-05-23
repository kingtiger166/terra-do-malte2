import { Ripple, initMDB } from "mdb-ui-kit";

initMDB({ Ripple });

document.querySelectorAll('[tabindex]').
forEach(el => {
    el.addEventListener('focus', () => {
        el.scrollIntoView({behavior:
'smooth', block: 'center'});
    });
});