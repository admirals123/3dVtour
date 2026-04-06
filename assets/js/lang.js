/*
	Language Toggle - EN/FR
	3D Virtual's Website
*/

(function() {

	var translations = {
		en: {
			// Nav
			"nav-home": "Home",
			"nav-services": "Services",
			"nav-technology": "Technology",
			"nav-contact": "Contact",

			// Banner
			"banner-title": "<strong>3D Virtual's:</strong> Virtual Tour for real estate",

			// Services Section
			"services-title": "OUR SERVICES",
			"services-subtitle": "Complete 3D imaging solutions for real estate professionals",
			"service-commercial-title": "COMMERCIAL DIGITAL TWINS",
			"service-commercial-desc": "Retail, office, and amenity space mapping. Enterprise-grade 3D documentation for commercial spaces. Perfect for property managers and facility planning.",
			"service-gsv-title": "GOOGLE STREET VIEW INTEGRATION",
			"service-gsv-desc": "One-click publishing to Google Maps. Boost local SEO and discoverability. Your virtual tours appear directly on Google Maps and Search results.",
			"service-floor-title": "SCHEMATIC FLOOR PLANS",
			"service-floor-desc": "99% accurate black-and-white floor plans generated from 3D data. AI-powered precision for accurate square footage. Professional architectural-style documentation.",
			"service-residential-title": "RESIDENTIAL TOURS",
			"service-residential-desc": "3D walkthroughs for condos and houses. Showcase properties with immersive 8K Matterport tours. Engage potential buyers with interactive floor plans and high-resolution imagery.",

			// Technology Section
			"tech-title": "THE 3D VISUALS TECHNOLOGY ADVANTAGE",
			"tech-subtitle": "State-of-the-art imaging technology for Montreal real estate",
			"tech-8k-title": "8K RESOLUTION",
			"tech-8k-desc": "Crystal-clear 8K Matterport digital twins provide unparalleled clarity and detail. Every corner, texture, and feature is captured with professional-grade precision for an immersive viewing experience.",
			"tech-privacy-title": "AI-POWERED PRIVACY",
			"tech-privacy-desc": "Advanced face blurring technology automatically protects occupant privacy. GDPR and privacy-compliant imaging ensures your properties shine without privacy concerns.",
			"tech-dollhouse-title": "DOLLHOUSE 3D VIEWING",
			"tech-dollhouse-desc": "Interactive dollhouse perspective allows viewers to explore properties from a bird's-eye view. Understand spatial relationships and flow instantly\u2014a competitive advantage for engaging buyers.",
			"tech-insta360-title": "INSTA360 X5 HARDWARE",
			"tech-insta360-desc": "Professional-grade Insta360 X5 captures perfect spherical imagery. Combined with Matterport processing, delivers unmatched virtual tour quality in Montreal market.",

			// Contact Section
			"contact-title": "REQUEST A QUOTE",
			"contact-subtitle": "Get started with your 3D Virtual Tour today",
			"contact-submit": "REQUEST QUOTE",
			"contact-info-title": "Contact Information",
			"contact-info-address-label": "Address",
			"contact-info-address": "6565 kildare C\u00f4te-Saint-Luc &amp; Montreal<br>Quebec, Canada",
			"contact-info-phone-label": "Phone",
			"contact-info-email-label": "Email",

			// Contact Form Placeholders
			"contact-name": "Your Name",
			"contact-email": "Your Email",
			"contact-phone": "Your Phone",
			"contact-company": "Company Name",
			"contact-address": "Property Address",
			"contact-sqft": "Square Footage (optional)",
			"contact-message": "Additional Details or Questions",

			// Contact Form Select Options
			"contact-service-default": "- Select Service Type -",
			"contact-service-residential": "Residential Tour",
			"contact-service-commercial": "Commercial Digital Twin",
			"contact-service-floor": "Schematic Floor Plan",
			"contact-service-gsv": "Google Street View Integration",

			// Footer
			"footer-about": "Professional 3D Virtual Tours &amp; Digital Twins for Montreal Real Estate. Serving the Montreal community with 8K Matterport imaging, Insta360 X5 technology, and AI-powered privacy solutions. We help realtors and property managers win more listings with immersive digital experiences.",
			"footer-services-btn": "VIEW SERVICES",
			"footer-links-title": "QUICK LINKS",
			"footer-home": "Home",
			"footer-services": "Our Services",
			"footer-technology": "Technology Advantage",
			"footer-contact": "Contact Us",
			"footer-copyright": "\u00a9 3D Visuals. All rights reserved",
			"footer-tagline": "Proudly serving the Montreal community. No GST/QST collected for small supplier services.",

			// Template pages
			"tpl-nav-dropdown": "Dropdown",
			"tpl-nav-left-sidebar": "Left Sidebar",
			"tpl-nav-right-sidebar": "Right Sidebar",
			"tpl-nav-no-sidebar": "No Sidebar",
			"tpl-left-title": "Left Sidebar",
			"tpl-left-subtitle": "Which means the sidebar is on the left",
			"tpl-right-title": "Right Sidebar",
			"tpl-right-subtitle": "Which means the sidebar is on the right",
			"tpl-no-title": "No Sidebar",
			"tpl-no-subtitle": "Sidebars are not welcome here",
			"tpl-subheading": "Subheading",
			"tpl-find-out-more": "Find out more",
			"tpl-do-something": "Do Something",
			"tpl-more-info": "More intriguing information",
			"tpl-recent-posts": "Recent Posts",
			"tpl-spotlight": "Spotlight",
			"tpl-continue-reading": "Continue Reading",
			"tpl-get-in-touch": "Get in touch",
			"tpl-learn-more": "Learn More",
			"tpl-filler-links": "Filler Links",
			"tpl-more-filler": "More Filler",
			"tpl-even-more-filler": "Even More Filler"
		},
		fr: {
			// Nav
			"nav-home": "Accueil",
			"nav-services": "Services",
			"nav-technology": "Technologie",
			"nav-contact": "Contact",

			// Banner
			"banner-title": "<strong>3D Virtual's :</strong> Visite virtuelle pour l\u2019immobilier",

			// Services Section
			"services-title": "NOS SERVICES",
			"services-subtitle": "Solutions compl\u00e8tes d\u2019imagerie 3D pour les professionnels de l\u2019immobilier",
			"service-commercial-title": "JUMEAUX NUM\u00c9RIQUES COMMERCIAUX",
			"service-commercial-desc": "Cartographie des espaces commerciaux, de bureaux et d\u2019agr\u00e9ment. Documentation 3D de qualit\u00e9 professionnelle pour les espaces commerciaux. Id\u00e9al pour les gestionnaires immobiliers et la planification des installations.",
			"service-gsv-title": "INT\u00c9GRATION GOOGLE STREET VIEW",
			"service-gsv-desc": "Publication en un clic sur Google Maps. Am\u00e9liorez votre r\u00e9f\u00e9rencement local et votre visibilit\u00e9. Vos visites virtuelles apparaissent directement sur Google Maps et dans les r\u00e9sultats de recherche.",
			"service-floor-title": "PLANS D\u2019\u00c9TAGE SCH\u00c9MATIQUES",
			"service-floor-desc": "Plans d\u2019\u00e9tage noir et blanc pr\u00e9cis \u00e0 99\u00a0%, g\u00e9n\u00e9r\u00e9s \u00e0 partir de donn\u00e9es 3D. Pr\u00e9cision propuls\u00e9e par l\u2019IA pour une superficie exacte. Documentation de style architectural professionnel.",
			"service-residential-title": "VISITES R\u00c9SIDENTIELLES",
			"service-residential-desc": "Visites 3D pour condos et maisons. Pr\u00e9sentez vos propri\u00e9t\u00e9s avec des visites immersives Matterport en 8K. Engagez les acheteurs potentiels avec des plans interactifs et une imagerie haute r\u00e9solution.",

			// Technology Section
			"tech-title": "L\u2019AVANTAGE TECHNOLOGIQUE 3D VISUALS",
			"tech-subtitle": "Technologie d\u2019imagerie de pointe pour l\u2019immobilier montr\u00e9alais",
			"tech-8k-title": "R\u00c9SOLUTION 8K",
			"tech-8k-desc": "Les jumeaux num\u00e9riques Matterport en 8K ultra-nets offrent une clart\u00e9 et un niveau de d\u00e9tail in\u00e9gal\u00e9s. Chaque coin, texture et caract\u00e9ristique est captur\u00e9 avec une pr\u00e9cision professionnelle pour une exp\u00e9rience de visualisation immersive.",
			"tech-privacy-title": "CONFIDENTIALIT\u00c9 PROPULS\u00c9E PAR L\u2019IA",
			"tech-privacy-desc": "La technologie avanc\u00e9e de floutage des visages prot\u00e8ge automatiquement la vie priv\u00e9e des occupants. L\u2019imagerie conforme au RGPD et \u00e0 la protection de la vie priv\u00e9e garantit que vos propri\u00e9t\u00e9s brillent sans soucis de confidentialit\u00e9.",
			"tech-dollhouse-title": "VUE 3D MAISON DE POUP\u00c9E",
			"tech-dollhouse-desc": "La perspective en maison de poup\u00e9e interactive permet aux visiteurs d\u2019explorer les propri\u00e9t\u00e9s \u00e0 vol d\u2019oiseau. Comprenez instantan\u00e9ment les relations spatiales et la circulation\u00a0\u2014\u00a0un avantage concurrentiel pour engager les acheteurs.",
			"tech-insta360-title": "\u00c9QUIPEMENT INSTA360 X5",
			"tech-insta360-desc": "L\u2019Insta360 X5 de qualit\u00e9 professionnelle capture une imagerie sph\u00e9rique parfaite. Combin\u00e9 au traitement Matterport, il offre une qualit\u00e9 de visite virtuelle in\u00e9gal\u00e9e sur le march\u00e9 montr\u00e9alais.",

			// Contact Section
			"contact-title": "DEMANDER UN DEVIS",
			"contact-subtitle": "Commencez votre visite virtuelle 3D aujourd\u2019hui",
			"contact-submit": "DEMANDER UN DEVIS",
			"contact-info-title": "Coordonn\u00e9es",
			"contact-info-address-label": "Adresse",
			"contact-info-address": "6565 kildare C\u00f4te-Saint-Luc et Montr\u00e9al<br>Qu\u00e9bec, Canada",
			"contact-info-phone-label": "T\u00e9l\u00e9phone",
			"contact-info-email-label": "Courriel",

			// Contact Form Placeholders
			"contact-name": "Votre nom",
			"contact-email": "Votre courriel",
			"contact-phone": "Votre t\u00e9l\u00e9phone",
			"contact-company": "Nom de l\u2019entreprise",
			"contact-address": "Adresse de la propri\u00e9t\u00e9",
			"contact-sqft": "Superficie en pieds carr\u00e9s (optionnel)",
			"contact-message": "D\u00e9tails suppl\u00e9mentaires ou questions",

			// Contact Form Select Options
			"contact-service-default": "- S\u00e9lectionnez le type de service -",
			"contact-service-residential": "Visite r\u00e9sidentielle",
			"contact-service-commercial": "Jumeau num\u00e9rique commercial",
			"contact-service-floor": "Plan d\u2019\u00e9tage sch\u00e9matique",
			"contact-service-gsv": "Int\u00e9gration Google Street View",

			// Footer
			"footer-about": "Visites virtuelles 3D professionnelles et jumeaux num\u00e9riques pour l\u2019immobilier montr\u00e9alais. Au service de la communaut\u00e9 montr\u00e9alaise avec l\u2019imagerie Matterport 8K, la technologie Insta360 X5 et les solutions de confidentialit\u00e9 propuls\u00e9es par l\u2019IA. Nous aidons les courtiers et gestionnaires immobiliers \u00e0 remporter plus de mandats gr\u00e2ce \u00e0 des exp\u00e9riences num\u00e9riques immersives.",
			"footer-services-btn": "VOIR LES SERVICES",
			"footer-links-title": "LIENS RAPIDES",
			"footer-home": "Accueil",
			"footer-services": "Nos services",
			"footer-technology": "Avantage technologique",
			"footer-contact": "Nous joindre",
			"footer-copyright": "\u00a9 3D Visuals. Tous droits r\u00e9serv\u00e9s",
			"footer-tagline": "Fi\u00e8rement au service de la communaut\u00e9 montr\u00e9alaise. Aucune TPS/TVQ per\u00e7ue pour les services de petit fournisseur.",

			// Template pages
			"tpl-nav-dropdown": "Menu d\u00e9roulant",
			"tpl-nav-left-sidebar": "Barre lat\u00e9rale gauche",
			"tpl-nav-right-sidebar": "Barre lat\u00e9rale droite",
			"tpl-nav-no-sidebar": "Sans barre lat\u00e9rale",
			"tpl-left-title": "Barre lat\u00e9rale gauche",
			"tpl-left-subtitle": "Ce qui signifie que la barre lat\u00e9rale est \u00e0 gauche",
			"tpl-right-title": "Barre lat\u00e9rale droite",
			"tpl-right-subtitle": "Ce qui signifie que la barre lat\u00e9rale est \u00e0 droite",
			"tpl-no-title": "Sans barre lat\u00e9rale",
			"tpl-no-subtitle": "Les barres lat\u00e9rales ne sont pas les bienvenues ici",
			"tpl-subheading": "Sous-titre",
			"tpl-find-out-more": "En savoir plus",
			"tpl-do-something": "Faire quelque chose",
			"tpl-more-info": "Informations plus int\u00e9ressantes",
			"tpl-recent-posts": "Articles r\u00e9cents",
			"tpl-spotlight": "En vedette",
			"tpl-continue-reading": "Continuer la lecture",
			"tpl-get-in-touch": "Nous contacter",
			"tpl-learn-more": "En savoir plus",
			"tpl-filler-links": "Liens utiles",
			"tpl-more-filler": "Plus de liens",
			"tpl-even-more-filler": "Encore plus de liens"
		}
	};

	var currentLang = localStorage.getItem('lang') || 'fr';

	function setLanguage(lang) {
		currentLang = lang;
		document.documentElement.lang = lang;
		localStorage.setItem('lang', lang);

		// Translate text content (innerHTML)
		var elements = document.querySelectorAll('[data-i18n]');
		for (var i = 0; i < elements.length; i++) {
			var key = elements[i].getAttribute('data-i18n');
			if (translations[lang] && translations[lang][key]) {
				elements[i].innerHTML = translations[lang][key];
			}
		}

		// Translate placeholders
		var placeholders = document.querySelectorAll('[data-i18n-placeholder]');
		for (var j = 0; j < placeholders.length; j++) {
			var pKey = placeholders[j].getAttribute('data-i18n-placeholder');
			if (translations[lang] && translations[lang][pKey]) {
				placeholders[j].placeholder = translations[lang][pKey];
			}
		}

		// Update language toggle button text
		var toggleBtn = document.getElementById('lang-toggle');
		if (toggleBtn) {
			toggleBtn.textContent = lang === 'en' ? 'FR' : 'EN';
		}

		// Update mobile nav panel if it exists (created by main.js)
		var navPanel = document.getElementById('navPanel');
		if (navPanel) {
			var panelLinks = navPanel.querySelectorAll('[data-i18n]');
			for (var k = 0; k < panelLinks.length; k++) {
				var nKey = panelLinks[k].getAttribute('data-i18n');
				if (translations[lang] && translations[lang][nKey]) {
					panelLinks[k].innerHTML = translations[lang][nKey];
				}
			}
		}
	}

	// Expose globally
	window.toggleLanguage = function() {
		setLanguage(currentLang === 'en' ? 'fr' : 'en');
	};

	window.setLanguage = setLanguage;

	// Initialize on DOM ready
	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', function() {
			setLanguage(currentLang);
		});
	} else {
		setLanguage(currentLang);
	}

})();
