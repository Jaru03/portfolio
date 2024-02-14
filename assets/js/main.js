import parallax from "./components/parallax.js";
import activeMenu from "./components/selected_menu.js";
import updateCopyrightYear from "./helpers/date_updater.js";
import resetToHome from "./helpers/reload_page.js";
import sendEmail from "./helpers/send__form.js";

parallax()

activeMenu()

resetToHome()

updateCopyrightYear()

sendEmail()

/* ======================== Toggle Lenguaje ======================= */

const lenguaje = document.querySelector('.navbar__toggle--language-input')

lenguaje.addEventListener('click', changeLenguaje);

function changeLenguaje(){
    let id = lenguaje.checked
    if(id){
        location.href = 'assets/html/index.html';
    }else{
        location.href = '../../index.html'
    }
}

/* ======================== Toggle Dark-Mode ======================= */

const darkMode = document.querySelector('#darkmode-toggle')

darkMode.addEventListener('click', () => {
    document.body.classList.toggle('dark')
})