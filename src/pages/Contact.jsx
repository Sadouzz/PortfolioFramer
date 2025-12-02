import React, { useState, useEffect } from 'react';
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MiniTitleWithBar from '../Comps/MiniTitleWithBar';
import useIsDesktop from '../hooks/useIsDesktop';

gsap.registerPlugin(ScrollTrigger, SplitText);

const HeroSection = ({ contentMiniBar, firstTitle, secondTitle }) => {
    const isDesktop = useIsDesktop();
    return (
        <section className="bg-white py-5" style={{ minHeight: '50vh' }}>
            <div className={`${isDesktop ? "" : "padding-20"}`}>
                <div className='m-lg-5 my-5'>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12">
                                {isDesktop && <MiniTitleWithBar content={contentMiniBar} color='red' textColor='black' />}
                                <h1 className="poppins display-2 fw-semibold mb-4" style={{ maxWidth: "900px" }}>
                                    {firstTitle}
                                </h1>
                                <h2 className="raleway h3 text-muted" style={{ maxWidth: "700px" }}>
                                    {secondTitle}
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const Contact = () => {
    const isDesktop = useIsDesktop();
    const [formData, setFormData] = useState({
        service: '',
        budget: '',
        name: '',
        email: '',
        company: '',
        message: '',
        deadline: '',
        source: '',
        newsletter: false
    });

    const [errors, setErrors] = useState({});
    const [showError, setShowError] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            const splitElements = document.querySelectorAll(".split");
            if (splitElements.length > 0 && isDesktop) {
                let split = SplitText.create(".split", { type: "lines" });
                gsap.from(split.lines, {
                    yPercent: 100,
                    ease: "power3.in",
                    overflow: 'hidden',
                    stagger: .1,
                    scrollTrigger: {
                        trigger: ".section-trigger",
                        start: "top bottom-=300px",
                        end: "top center-=200px",
                        toggleActions: "play reverse play reverse",
                        scrub: true
                    }
                });
            }
        }, 100);
    }, [isDesktop]);

    const services = [
        'Développement de jeux vidéo',
        'Développement Web & Applications',
        'Jeux + Site Web',
        'UI/UX Design',
        'Développement Backend',
        'Landing Page',
        'Design d\'application mobile',
        'Motion Design & Animation',
        'Autres'
    ];

    const budgets = [
        '500 - 2 000 €',
        '2 000 - 5 000 €',
        '5 000 - 10 000 €',
        '10 000 - 20 000 €',
        '20 000 €+'
    ];

    const handleInputChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
        if (errors[field]) {
            setErrors(prev => ({ ...prev, [field]: false }));
        }
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.service) newErrors.service = true;
        if (!formData.budget) newErrors.budget = true;
        if (!formData.name) newErrors.name = true;
        if (!formData.email) newErrors.email = true;
        if (!formData.message) newErrors.message = true;

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log('Form submitted:', formData);
            alert('Message envoyé avec succès !');
        } else {
            setShowError(true);
            setTimeout(() => setShowError(false), 5000);
        }
    };

    return (
        <>
            <HeroSection
                contentMiniBar="CONTACT"
                firstTitle="Créons quelque chose ensemble,"
                secondTitle="transformons vos idées en réalité."
            />

            <section className="bg-white section-trigger py-5">
                <div className={`${isDesktop ? "" : "padding-20"}`}>
                    <div className='m-lg-5 my-5'>
                        <div>
                            {/* Section 1: Services */}
                            <div className="mb-5">
                                <div className="d-flex align-items-center justify-content-between mb-3 flex-wrap">
                                    <h4 className="poppins fw-semibold mb-2 mb-md-0">
                                        <span className="text-red me-2">{'/>'}</span> 1. Ce que nous allons créer ensemble...
                                        <span className="text-red">*</span>
                                    </h4>
                                    {errors.service && (
                                        <div className="text-red small d-flex align-items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-exclamation-circle me-2" viewBox="0 0 16 16">
                                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                                <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z" />
                                            </svg>
                                            Veuillez sélectionner une option
                                        </div>
                                    )}
                                </div>
                                <div className="row g-3">
                                    {services.map((service, index) => (
                                        <div key={index} className="col-12 col-md-6 col-lg-4">
                                            <div
                                                className={`p-3 border rounded cursor-pointer transition ${formData.service === service
                                                        ? 'border-success bg-success bg-opacity-10'
                                                        : 'border-secondary border-opacity-25'
                                                    }`}
                                                style={{ cursor: 'pointer' }}
                                                onClick={() => handleInputChange('service', service)}
                                            >
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <span className="small">{service}</span>
                                                    {formData.service === service && (
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#20E7B7" viewBox="0 0 16 16">
                                                            <circle cx="8" cy="8" r="8" fill="#20E7B7" />
                                                            <path stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 8.464 7.024 10.5 11 6.5" />
                                                        </svg>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Section 2: Budget */}
                            <div className="mb-5">
                                <div className="d-flex align-items-center justify-content-between mb-3 flex-wrap">
                                    <h4 className="poppins fw-semibold mb-2 mb-md-0">
                                        <span className="text-red me-2">{'/>'}</span> 2. Votre budget est...
                                        <span className="text-red">*</span>
                                    </h4>
                                    {errors.budget && (
                                        <div className="text-red small d-flex align-items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-exclamation-circle me-2" viewBox="0 0 16 16">
                                                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                                                <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z" />
                                            </svg>
                                            Veuillez sélectionner une option
                                        </div>
                                    )}
                                </div>
                                <div className="row g-3">
                                    {budgets.map((budget, index) => (
                                        <div key={index} className="col-12 col-md-6 col-lg-4">
                                            <div
                                                className={`p-3 border rounded cursor-pointer transition ${formData.budget === budget
                                                        ? 'border-success bg-success bg-opacity-10'
                                                        : 'border-secondary border-opacity-25'
                                                    }`}
                                                style={{
                                                    cursor: 'pointer',
                                                    opacity: !formData.service ? 0.5 : 1,
                                                    pointerEvents: !formData.service ? 'none' : 'auto'
                                                }}
                                                onClick={() => handleInputChange('budget', budget)}
                                            >
                                                <div className="d-flex align-items-center justify-content-between">
                                                    <span className="small">{budget}</span>
                                                    {formData.budget === budget && (
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#20E7B7" viewBox="0 0 16 16">
                                                            <circle cx="8" cy="8" r="8" fill="#20E7B7" />
                                                            <path stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 8.464 7.024 10.5 11 6.5" />
                                                        </svg>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Section 3: Informations */}
                            <div className="mb-5">
                                <h4 className="poppins fw-semibold mb-4">
                                    <span className="text-red me-2">{'/>'}</span> 3. Parlez-nous un peu de vous...
                                </h4>

                                <div className="row g-4 mb-4">
                                    <div className="col-12 col-md-4">
                                        <div className="position-relative">
                                            <input
                                                type="text"
                                                className={`w-100 py-3 px-3 border rounded ${errors.name ? 'border-red' : 'border-secondary'}`}
                                                placeholder="ex: Ousmane Sadjo"
                                                value={formData.name}
                                                onChange={(e) => handleInputChange('name', e.target.value)}
                                                style={{ outline: 'none' }}
                                            />
                                            <label className="position-absolute top-0 start-0 px-2 small text-muted" style={{ transform: 'translate(12px, -50%)', backgroundColor: 'white' }}>
                                                Votre Nom<span className="text-red">*</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="col-12 col-md-4">
                                        <div className="position-relative">
                                            <input
                                                type="email"
                                                className={`w-100 py-3 px-3 border rounded ${errors.email ? 'border-red' : 'border-secondary'}`}
                                                placeholder="ex: contact@exemple.com"
                                                value={formData.email}
                                                onChange={(e) => handleInputChange('email', e.target.value)}
                                                style={{ outline: 'none' }}
                                            />
                                            <label className="position-absolute top-0 start-0 px-2 small text-muted" style={{ transform: 'translate(12px, -50%)', backgroundColor: 'white' }}>
                                                Email<span className="text-red">*</span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="col-12 col-md-4">
                                        <div className="position-relative">
                                            <input
                                                type="text"
                                                className="w-100 py-3 px-3 border border-secondary rounded"
                                                placeholder="ex: Ma Super Entreprise"
                                                value={formData.company}
                                                onChange={(e) => handleInputChange('company', e.target.value)}
                                                style={{ outline: 'none' }}
                                            />
                                            <label className="position-absolute top-0 start-0 px-2 small text-muted" style={{ transform: 'translate(12px, -50%)', backgroundColor: 'white' }}>
                                                Entreprise
                                            </label>
                                        </div>
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <div className="position-relative">
                                        <textarea
                                            className={`w-100 py-3 px-3 border rounded ${errors.message ? 'border-red' : 'border-secondary'}`}
                                            rows="5"
                                            placeholder="ex: Je veux un nouveau site web. Pas juste un bon site—un site dont les gens se souviendront pour toujours."
                                            value={formData.message}
                                            onChange={(e) => handleInputChange('message', e.target.value)}
                                            maxLength={3000}
                                            style={{ outline: 'none', resize: 'vertical' }}
                                        ></textarea>
                                        <label className="position-absolute top-0 start-0 px-2 small text-muted" style={{ transform: 'translate(12px, -50%)', backgroundColor: 'white' }}>
                                            Qu'avez-vous en tête ?<span className="text-red">*</span>
                                        </label>
                                    </div>
                                </div>

                                <div className="row g-4">
                                    <div className="col-12 col-md-6">
                                        <select
                                            className="w-100 py-3 px-3 border border-secondary rounded"
                                            value={formData.deadline}
                                            onChange={(e) => handleInputChange('deadline', e.target.value)}
                                            style={{ outline: 'none' }}
                                        >
                                            <option value="">Avez-vous une deadline spécifique ?</option>
                                            <option value="2mois">2 mois</option>
                                            <option value="4mois">4 mois</option>
                                            <option value="6mois">6 mois</option>
                                            <option value="urgent">Le plus tôt possible</option>
                                            <option value="autre">Autre</option>
                                        </select>
                                    </div>

                                    <div className="col-12 col-md-6">
                                        <select
                                            className="w-100 py-3 px-3 border border-secondary rounded"
                                            value={formData.source}
                                            onChange={(e) => handleInputChange('source', e.target.value)}
                                            style={{ outline: 'none' }}
                                        >
                                            <option value="">Comment nous avez-vous connu ?</option>
                                            <option value="awards">Sites de récompenses</option>
                                            <option value="projet">Un projet que j'ai fait</option>
                                            <option value="article">Un article</option>
                                            <option value="social">Réseaux sociaux</option>
                                            <option value="recommandation">Recommandation d'un ami</option>
                                            <option value="google">Google</option>
                                            <option value="autre">Autre</option>
                                        </select>
                                    </div>
                                </div>
                            </div>

                            {/* Footer et bouton d'envoi */}
                            <div className="border-top pt-4">
                                <div className="row align-items-end">
                                    <div className="col-12 col-md-6 mb-4 mb-md-0">
                                        <p className="mb-2">Ou envoyez-nous un email</p>
                                        <a href="mailto:ousmansadjo0@gmail.com" className="text-decoration-none fw-bold text-dark">
                                            ousmansadjo0@gmail.com
                                        </a>
                                        <div className="d-flex align-items-center mt-3">
                                            <input
                                                className="me-2"
                                                type="checkbox"
                                                id="newsletter"
                                                checked={formData.newsletter}
                                                onChange={(e) => handleInputChange('newsletter', e.target.checked)}
                                                style={{ width: '18px', height: '18px', cursor: 'pointer' }}
                                            />
                                            <label htmlFor="newsletter" style={{ cursor: 'pointer' }}>
                                                Je veux m'abonner à la newsletter
                                            </label>
                                        </div>
                                    </div>

                                    <div className="col-12 col-md-6 text-md-end">
                                        {showError && (
                                            <div className="alert alert-red d-inline-flex align-items-center mb-3" role="alert">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-exclamation-triangle me-2" viewBox="0 0 16 16">
                                                    <path d="M7.938 2.016A.13.13 0 0 1 8.002 2a.13.13 0 0 1 .063.016.146.146 0 0 1 .054.057l6.857 11.667c.036.06.035.124.002.183a.163.163 0 0 1-.054.06.116.116 0 0 1-.066.017H1.146a.115.115 0 0 1-.066-.017.163.163 0 0 1-.054-.06.176.176 0 0 1 .002-.183L7.884 2.073a.147.147 0 0 1 .054-.057zm1.044-.45a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566z" />
                                                    <path d="M7.002 12a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 5.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995z" />
                                                </svg>
                                                <span>Oups ! Il semble que certains champs soient manquants.</span>
                                            </div>
                                        )}
                                        <button
                                            onClick={handleSubmit}
                                            className="btn btn-lg px-5 py-3 text-uppercase fw-bold border-0"
                                            style={{ backgroundColor: '#cc001e', color: 'white' }}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-send me-2" viewBox="0 0 16 16">
                                                <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />
                                            </svg>
                                            Envoyer
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <style>{`
        .cursor-pointer:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }
        .transition {
          transition: all 0.3s ease;
        }
        .padding-20 {
          padding: 0 20px;
        }
        .poppins {
          font-family: 'Poppins', sans-serif;
        }
        input:focus, textarea:focus, select:focus {
          border-color: #cc001e !important;
        }
      `}</style>
        </>
    );
};

export default Contact;