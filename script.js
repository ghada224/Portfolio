function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

const translations = {
    en: {
        "nav-about": "About",
        "nav-exp": "Experience",
        "nav-projects": "Projects",
        "nav-contact": "Contact",
        "lang-toggle": "FR",
        
        "hero-greeting": "Hello, I'm",
        "hero-title": "Software Engineer | IoT & Embedded Systems",
        "btn-cv": "Download CV",
        "btn-contact": "Contact Info",
        
        "about-sub": "Get To Know More",
        "about-title": "About Me",
        "edu-title": "Education",
        "edu-desc": "Bachelor's degree in Computer Systems Engineering<br />ISIGK, Tunisia (2023 - 2026)",
        "cert-title": "Certifications",
        "cert-desc": "Cisco IoT, 365DataScience, HP LIFE (x2), Google Ads Apps",
        "lang-title": "Languages",
        "lang-desc": "Arabic (Native)<br />French & English (Professional)",
        "about-text": "Graduated in Computer Systems Engineering, specializing in Software, IoT, and Embedded Systems. Passionate about developing complete intelligent systems combining backend, connected objects, real-time monitoring, and AI integration. Currently seeking a junior opportunity, internship, or work-study in Software Engineering, IoT, or Intelligent Systems.",
        
        "work-sub": "My Professional",
        "work-title": "Experience",
        "sagemcom-role": "Intern - Embedded Systems",
        "sagemcom-desc": "Observation of manufacturing flows and industrial tests of embedded systems. Learning industrial quality processes and hardware validation.",
        "cims-role": "Intern",
        "cims-desc": "Study of the interoperability of medical data systems and network infrastructure. Exploration of digital health systems and secure information exchange.",
        "robotics-role": "Active Member",
        "robotics-desc": "Participation in embedded AI and robotics development projects. Collaboration on intelligent robotic systems for competitions.",
        
        "exp-sub": "Explore My",
        "exp-title": "Experience & Skills",
        "cat-web": "Web Development",
        "cat-mob": "Mobile Development",
        "cat-brd": "Electronic Boards",
        "cat-prg": "Programming Languages",
        "cat-db": "Databases",
        "cat-cld": "Clouds",
        "cat-lib": "Libraries",
        "cat-os": "Operating Systems",
        "cat-net": "Network",
        "cat-des": "Design",
        "lvl-exp": "Experienced",
        "lvl-int": "Intermediate",
        "lvl-bsc": "Basic",
        
        "proj-sub": "Browse My Recent",
        "proj-title": "Projects",
        "proj-ind-desc": "End-to-end predictive maintenance system for smart factories using ESP32, MQTT, and Grafana.",
        "proj-medibot-desc": "Autonomous medical triage nurse robot (PFE) equipped with AI (Random Forest, BlazeFace, Llama 3.2), IoT vital sensors, and Twilio SMS alerts.",
        "proj-agri-desc": "Full-stack smart agriculture ecosystem to optimize water usage. React dashboard & Android app.",
        "proj-iot-desc": "IoT monitoring dashboard built with Streamlit, integrating AI prediction modules for real-time analytics.",
        "proj-traf-desc": "Smart traffic management system built with ESP32 to optimize traffic flow based on real-time data.",
        
        "test-sub": "What they say",
        "test-title": "Testimonials",
        "test-quote": "\"Ghada is an exceptional engineer. Her dedication to the Robotics Club and her ability to integrate complex AI models into embedded systems is truly inspiring.\"",
        
        "contact-sub": "Get in Touch",
        "contact-title": "Contact Me"
    },
    fr: {
        "nav-about": "À Propos",
        "nav-exp": "Expérience",
        "nav-projects": "Projets",
        "nav-contact": "Contact",
        "lang-toggle": "EN",
        
        "hero-greeting": "Bonjour, je suis",
        "hero-title": "Ingénieure Logiciel | IoT & Systèmes Embarqués",
        "btn-cv": "Télécharger CV",
        "btn-contact": "Contactez-moi",
        
        "about-sub": "En Savoir Plus",
        "about-title": "À Propos de Moi",
        "edu-title": "Éducation",
        "edu-desc": "Licence en Ingénierie des Systèmes Informatiques<br />ISIGK, Tunisie (2023 - 2026)",
        "cert-title": "Certifications",
        "cert-desc": "Cisco IoT, 365DataScience, HP LIFE (x2), Google Ads Apps",
        "lang-title": "Langues",
        "lang-desc": "Arabe (Maternelle)<br />Français & Anglais (Professionnel)",
        "about-text": "Diplômée en Ingénierie des Systèmes Informatiques, spécialisée en Logiciels, IoT et Systèmes Embarqués. Passionnée par le développement de systèmes intelligents complets combinant backend, objets connectés, monitoring en temps réel et intégration de l'IA. Actuellement à la recherche d'une opportunité junior, d'un stage ou d'une alternance en Ingénierie Logicielle, IoT ou Systèmes Intelligents.",
        
        "work-sub": "Mon Parcours",
        "work-title": "Expérience Professionnelle",
        "sagemcom-role": "Stagiaire - Systèmes Embarqués",
        "sagemcom-desc": "Observation des flux de fabrication et des tests industriels des systèmes embarqués. Apprentissage des processus de qualité industrielle et validation matérielle.",
        "cims-role": "Stagiaire",
        "cims-desc": "Étude de l'interopérabilité des systèmes de données médicales et de l'infrastructure réseau. Exploration des systèmes de santé numérique et de l'échange sécurisé d'informations.",
        "robotics-role": "Membre Actif",
        "robotics-desc": "Participation à des projets de développement en IA embarquée et robotique. Collaboration sur des systèmes robotiques intelligents pour des compétitions.",
        
        "exp-sub": "Découvrir Mon",
        "exp-title": "Expérience & Compétences",
        "cat-web": "Développement Web",
        "cat-mob": "Développement Mobile",
        "cat-brd": "Cartes Électroniques",
        "cat-prg": "Langages de Programmation",
        "cat-db": "Bases de Données",
        "cat-cld": "Cloud",
        "cat-lib": "Bibliothèques",
        "cat-os": "Systèmes d'Exploitation",
        "cat-net": "Réseaux",
        "cat-des": "Design",
        "lvl-exp": "Expérimenté",
        "lvl-int": "Intermédiaire",
        "lvl-bsc": "Basique",
        
        "proj-sub": "Mes Récents",
        "proj-title": "Projets",
        "proj-ind-desc": "Système de maintenance prédictive complet pour usines intelligentes via ESP32, MQTT et Grafana.",
        "proj-medibot-desc": "Robot infirmier autonome de triage médical (PFE) équipé d'IA (Random Forest, BlazeFace, Llama 3.2), capteurs IoT et alertes SMS Twilio.",
        "proj-agri-desc": "Écosystème agricole full-stack pour optimiser l'irrigation. Dashboard React & Appli Android.",
        "proj-iot-desc": "Dashboard de monitoring IoT avec Streamlit et modules de prédiction IA pour des analyses en temps réel.",
        "proj-traf-desc": "Système intelligent de feux de signalisation basé sur ESP32 pour optimiser le flux de circulation.",
        
        "test-sub": "Ce qu'ils disent",
        "test-title": "Témoignages",
        "test-quote": "\"Ghada est une ingénieure exceptionnelle. Son dévouement et sa capacité à intégrer des modèles d'IA complexes sont inspirants.\"",
        
        "contact-sub": "Entrer en contact",
        "contact-title": "Contactez-Moi"
    }
};

let currentLang = 'en';

function applyLanguage() {
    const elements = document.querySelectorAll('.tr');
    elements.forEach(el => {
        const key = el.getAttribute('data-tr');
        if (translations[currentLang][key]) {
            el.innerHTML = translations[currentLang][key];
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const btnDesktop = document.getElementById('lang-toggle');
    const btnMob = document.getElementById('lang-toggle-mob');
    
    function handleToggle() {
        currentLang = currentLang === 'en' ? 'fr' : 'en';
        applyLanguage();
    }
    
    if (btnDesktop) btnDesktop.addEventListener('click', handleToggle);
    if (btnMob) btnMob.addEventListener('click', handleToggle);
    
    applyLanguage(); // init
});
