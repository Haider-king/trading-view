

const languageSelector = document.querySelector('select');
languageSelector.addEventListener("change", (event) => {
    setLanguage(event.target.value);
    localStorage.setItem('lang', event.target.value);
});

document.addEventListener("DOMContentLoaded", () => {
    setLanguage(localStorage.getItem('lang'));
    languageSelector.value = localStorage.getItem('lang');
});

const setLanguage = (language) => {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach((element) => {
        const translationKey = element.getAttribute('data-i18n');
        element.textContent = translations[language][translationKey];
    });
    if (language === 'ar') {
        document.body.dir = 'rtl';
    } else {
        document.body.dir = 'ltr';
    }
}

