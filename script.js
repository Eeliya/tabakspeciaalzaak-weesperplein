const translations = {
    en: {
        htmlLang: "en",
        aboutText: "For IQOS Iluma I, cigarettes, vapes, cigars, Toto & lottery",
        section3Title: "Contact Us",
        contactAddressLabel: "Address",
        contactPhoneLabel: "Phone",
        contactHoursLabel: "Opening Hours",
        hoursMf: "Monday - Friday: 7:00 AM - 9:00 PM",
        hoursSat: "Saturday: 8:00 AM - 9:00 PM",
        hoursSun: "Sunday: 9:00 AM - 9:00 PM",
        img1Alt: "Tobacco shop exterior",
        img2Alt: "Tobacco shop interior",
        img3Alt: "Tobacco shop exterior",
        img4Alt: "Tobacco shop interior",
        img5Alt: "Tobacco shop exterior",
        img6Alt: "Tobacco shop interior",
        weesperpleinTitle: "Tabakspeciaalzaak Weesperplein",
        haarlemTitle: "Tabakshuis Haarlem",
        almereTitle: "Tabakshuis Almere",
        houtenAlmereTitle: "Tabakshuis Houten, Almere",
        weesperplein_pageTitle: "Tabakspeciaalzaak Weesperplein - Premium Tobacco Shop",
        weesperplein_headerTitle: "Tabakspeciaalzaak Weesperplein",
        weesperplein_headerSubtitle: "Your trusted tobacco shop in Amsterdam",
        weesperplein_section1Title: "Our Stores",
        weesperplein_footerText: "© 2025 Tabakspeciaalzaak Weesperplein. All rights reserved.",
        haarlem_pageTitle: "Tabakshuis Haarlem - Premium Tobacco Shop",
        haarlem_headerTitle: "Tabakshuis Haarlem",
        haarlem_headerSubtitle: "Your trusted tobacco shop in Amsterdam",
        haarlem_section1Title: "Our Store",
        haarlem_footerText: "© 2025 Tabakshuis Haarlem. All rights reserved.",
        almere_pageTitle: "Tabakshuis Almere Stad - Premium Tobacco Shop",
        almere_headerTitle: "Tabakshuis Almere Stad",
        almere_headerSubtitle: "Your trusted tobacco shop in Almere Stad",
        almere_section1Title: "Our Store",
        almere_footerText: "© 2025 Tabakshuis Almere Stad. All rights reserved.",

        houten_pageTitle: "Tabakshuis Houten, Almere - Premium Tobacco Shop",
        houten_headerTitle: "Tabakshuis Houten, Almere",
        houten_headerSubtitle: "Your trusted tobacco in Houten, Almere",
        houten_section1Title: "Our Store",
        houten_footerText: "© 2025 Tabakshuis Houten, Almere. All rights reserved."
    },
    nl: {
        htmlLang: "nl",
        aboutText: "Voor IQOS Iluma I, sigaretten, vapes, sigaren, Toto & loterij",
        section3Title: "Contact",
        contactAddressLabel: "Adres",
        contactPhoneLabel: "Telefoon",
        contactHoursLabel: "Openingstijden",
        hoursMf: "Maandag - Vrijdag: 7:00 AM - 9:00 PM",
        hoursSat: "Zaterdag: 8:00 AM - 9:00 PM",
        hoursSun: "Zondag: 9:00 AM - 9:00 PM",
        img1Alt: "Tabakwinkel exterieur",
        img2Alt: "Tabakspeciaalzaak interieur",
        img3Alt: "Tabakwinkel exterieur",
        img4Alt: "Tabakspeciaalzaak interieur",
        img5Alt: "Tabakwinkel exterieur",
        img6Alt: "Tabakspeciaalzaak interieur",
        weesperpleinTitle: "Tabakspeciaalzaak Weesperplein",
        haarlemTitle: "Tabakshuis Haarlem",
        almereTitle: "Tabakshuis Almere",
        houtenAlmereTitle: "Tabakshuis Houten, Almere",
        weesperplein_pageTitle: "Tabakspeciaalzaak Weesperplein - Premium Tabakswinkel",
        weesperplein_headerTitle: "Tabakspeciaalzaak Weesperplein",
        weesperplein_headerSubtitle: "Uw vertrouwde tabakswinkel in Amsterdam",
        weesperplein_section1Title: "Onze Winkels",
        weesperplein_footerText: "© 2025 Tabakspeciaalzaak Weesperplein. Alle rechten voorbehouden.",
        haarlem_pageTitle: "Tabakshuis Haarlem - Premium Tabakswinkel",
        haarlem_headerTitle: "Tabakshuis Haarlem",
        haarlem_headerSubtitle: "Uw vertrouwde tabakswinkel in Amsterdam",
        haarlem_section1Title: "Onze Winkel",
        haarlem_footerText: "© 2025 Tabakshuis Haarlem. Alle rechten voorbehouden.",
        almere_pageTitle: "Tabakshuis Almere Stad - Premium Tabakswinkel",
        almere_headerTitle: "Tabakshuis Almere Stad",
        almere_headerSubtitle: "Uw vertrouwde tabakswinkel in Almere Stad",
        almere_section1Title: "Onze Winkel",
        almere_footerText: "© 2025 Tabakshuis Almere Stad. Alle rechten voorbehouden.",

        houten_pageTitle: "Tabakshuis Houten, Almere - Premium Tabakswinkel",
        houten_headerTitle: "Tabakshuis Houten, Almere",
        houten_headerSubtitle: "Uw vertrouwde tabakswinkel in Houten, Almere",
        houten_section1Title: "Onze Winkel",
        houten_footerText: "© 2025 Tabakshuis Houten, Almere. Alle rechten voorbehouden."
    }
};

function updateButtonStyles(lang) {
    const enButton = document.getElementById("lang-en");
    const nlButton = document.getElementById("lang-nl");
    if (lang === 'en') {
        enButton.classList.add('active');
        nlButton.classList.remove('active');
    } else {
        nlButton.classList.add('active');
        enButton.classList.remove('active');
    }
}

function switchLanguage(lang) {
    const t = translations[lang];

    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        const value = t[key];
        if (value) {
            if (element.tagName === 'HTML') {
                element.setAttribute('lang', value);
            } else if (element.tagName === 'IMG') {
                element.setAttribute('alt', value);
            } else {
                element.textContent = value;
            }
        }
    });

    updateButtonStyles(lang);
    history.pushState(null, '', `?lang=${lang}`);
}

// Initialize language based on URL parameter or default to English
const urlParams = new URLSearchParams(window.location.search);
const lang = urlParams.get('lang') === 'nl' ? 'nl' : 'en';
switchLanguage(lang);
