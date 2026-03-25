// Language translation functionality
function changeLanguage(lang) {
    // Save language preference to localStorage
    localStorage.setItem('language', lang);

    // Update all elements with data-en and data-fr attributes
    const elements = document.querySelectorAll('[data-en][data-fr]');
    elements.forEach(element => {
        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
            // Handle form inputs with placeholder
            const placeholderAttr = element.getAttribute(`data-${lang}-placeholder`);
            if (placeholderAttr) {
                element.setAttribute('placeholder', placeholderAttr);
            }
        } else {
            // Handle regular elements
            element.textContent = element.getAttribute(`data-${lang}`);
        }
    });

    // Handle footer copyright separately (with HTML entities)
    const footerP = document.querySelector('[data-en="&copy; 2026 Emerson HTML Lab. All rights reserved."]');
    if (footerP) {
        if (lang === 'en') {
            footerP.innerHTML = '&copy; 2026 Emerson HTML Lab. All rights reserved.';
        } else if (lang === 'fr') {
            footerP.innerHTML = '&copy; 2026 Laboratoire HTML Emerson. Tous droits réservés.';
        }
    }

    // Update active language button
    const langBtns = document.querySelectorAll('.lang-btn');
    langBtns.forEach(btn => btn.classList.remove('active'));
    const activeBtn = document.querySelector(`.lang-btn[onclick="changeLanguage('${lang}')"]`);
    if (activeBtn) {
        activeBtn.classList.add('active');
    }

    // Update HTML lang attribute
    document.documentElement.lang = lang;
}
