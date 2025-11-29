import logo from '../assets/Logo.png'
import useIsDesktop from '../hooks/useIsDesktop'
import fc1024x500 from '../assets/FrenzyChase1024x500.png'
import toubaCoutaMockup from '../assets/toubaCoutaMockup.png'
import MiniTitleWithBar from '../Comps/MiniTitleWithBar'
import HeroSection from '../Comps/HeroSection'
import ServiceElement from '../Comps/ServiceElement'
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger"; // ← Ajouter cet import
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom'; // ← Ajouter pour la cohérence

//gsap.registerPlugin(ScrollTrigger); // ← S'assurer que c'est enregistré

export default function Services() {
    const location = useLocation(); // ← Pour la cohérence avec les autres composants
    const isDesktop = useIsDesktop();
    useEffect(() => {
        // Attendre que le DOM soit rendu
        setTimeout(() => {
            const splitElements = document.querySelectorAll(".split");
            /*const dfElements = document.querySelectorAll(".df");
            const brandingElements = document.querySelectorAll(".branding-keys");*/

            if (splitElements.length > 0 && isDesktop) {

                let split = SplitText.create(".split", { type: "lines" });


                // now animate the lines in a staggered fashion
                const animation = gsap.from(split.lines, {

                    yPercent: 100,   // ← fait sortir d'en bas
                    ease: "power3.in",
                    overflow: 'hidden',
                    stagger: .1,
                    scrollTrigger: {
                        trigger: ".section-trigger",
                        start: "top bottom-=300px",
                        end: "top center-=200px",
                        toggleActions: "play reverse play reverse",
                        markers: false,
                        scrub: true
                    }
                });

            }
        }, 100);

    }, [location.pathname]); // ← Même logique que les autres composants

    return (
        <>
            <HeroSection
                contentMiniBar="SERVICES"
                firstTitle="De la vision à l'exécution immersive,"
                secondTitle="je donne vie aux projets en leur conférant sens et impact."
            />
            <section className='bg-white section-trigger py-3'
                style={{
                }}>
                <div className={`${isDesktop ? "" : "padding-20"}`}>
                    <div className='m-lg-5 my-5'>
                        <div className="">
                            <h1 className="poppins split" style={{ maxWidth: "500px" }}>
                                Explorer la prochaine frontière digitale
                            </h1>
                        </div>

                        <div className='container-fluid'>
                            <div className='row d-flex justify-content-between align-items-end position-relative'>
                                {
                                    isDesktop
                                        ?
                                        <div className='col-6 position-relative ps-0'>
                                            <MiniTitleWithBar content={"CE QUE JE FAIS"} />
                                        </div>
                                        :
                                        <>
                                        </>
                                }

                                <div className='col-12 col-md-6 p-0 d-flex flex-column'>
                                    <div className="raleway">
                                        <h4 className="fw-semibold mb-3 split" style={{ maxWidth: isDesktop ? "300px" : "" }}>
                                            Au-delà des limites, vers l'extraordinaire.
                                        </h4>
                                    </div>
                                    <div className="raleway">
                                        <p className="split m-0" style={{ maxWidth: "600px" }}>
                                            Je crée et développe des projets numériques pour transformer des idées en expériences concrètes. Pour moi, le design et la technologie servent à raconter des histoires et à connecter les gens. Grâce à ma créativité et à ma curiosité, j'apprends à construire des projets qui se démarquent et qui peuvent inspirer les autres.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <ServiceElement
                    id="websites"
                    title="Sites Internet"
                    subtitle="DESIGN THE PRESENCE"
                    content="Création de sites vitrines et professionnels, pensés pour captiver, convertir et refléter l’identité visuelle des marques."
                    keys={[
                        "Sites responsives & rapides",
                        "Optimisation SEO",
                        "Accessibilité",
                        "WordPress",
                        "Animations interactives",
                        "Performances",
                        "Sécurité Web",
                        "Design cohérent avec l’image de marque",
                        "UI/UX Design",
                        "Prototypage sur Figma",
                    ]}
                    miniTitleWithBar={'PROJETS DE SITES INTERNET EN VEDETTE'}
                    img={toubaCoutaMockup}
                    projects={[
                        {
                            id: 1,
                            title: "ToubaCouta Evasion",
                            tags: ["Site Internet", "Digital"],
                            image: toubaCoutaMockup,
                            link: "/work/asterie/"
                        }
                    ]}
                />

                <ServiceElement
                    id="web-app"
                    title="Application Web"
                    subtitle="CODE THE FUTURE"
                    content="Création d’applications web intuitives et performantes, alliant design épuré, rapidité et expérience utilisateur fluide."
                    keys={[
                        "Front-end moderne",
                        "Back-end robuste",
                        "API REST",
                        "Authentification sécurisée",
                        "Base de données optimisée",
                        "Déploiement cloud",
                        "CI/CD",
                        "UX/UI centrée sur l’utilisateur"
                    ]}
                    miniTitleWithBar={"PROJETS D'APPLICATION WEB EN VEDETTE"}
                    img={fc1024x500}
                    projects={[
                        {
                            id: 1,
                            title: "Hudur",
                            tags: ["Application Web"],
                            image: "https://images.prismic.io/estudio-nk/aJZBR6Tt2nPbaFhX_Asterie6.jpg?auto=format%2Ccompress&fit=max&w=1080",
                            link: "/work/asterie/"
                        },
                        {
                            id: 2,
                            title: "SnelType - Blob Game",
                            tags: ["Application Web", "Jeu Vidéo"],
                            image: "https://images.prismic.io/estudio-nk/aH7-vEMqNJQqIL46_DC11.jpg?auto=format%2Ccompress&fit=max&w=1080",
                            link: "/work/dc/"
                        },
                    ]}
                />

                <ServiceElement
                    id="graphic-design"
                    title="Conception Graphique"
                    subtitle="CREATE THE VISION"
                    content="Amateur passionné de design, je crée des visuels inspirants et percutants, au service d’une communication moderne et cohérente."
                    keys={[
                        "Création d’identités visuelles",
                        "Design de logos",
                        "Affiches",
                        "UI/UX Design",
                        "Prototypage sur Figma",
                        "Montage photo et retouche",
                        "Sens du détail et de la composition"
                    ]}
                    miniTitleWithBar={'PROJETS DE CONCEPTION GRAPHIQUE EN VEDETTE'}
                    img={fc1024x500}
                />

                <ServiceElement
                    id="game-dev"
                    title="Jeu Vidéo"
                    subtitle="BUILD THE EXPERIENCE"
                    content="Maîtrise exceptionnelle du développement de jeux vidéo, de la conception au déploiement. J’unis gameplay fluide, graphismes optimisés et expérience utilisateur captivante."
                    keys={[
                        "Conception du gameplay",
                        "Programmation Unity / C#",
                        "Optimisation mobile",
                        "Performance",
                        "Effets visuels",
                        "Audio immersifs",
                        "Intégration des publicités",
                        "Services en ligne",
                        "Design de niveaux et IA"
                    ]}
                    miniTitleWithBar={'PROJETS DE JEU VIDEO EN VEDETTE'}
                    img={fc1024x500}
                    projects={[
                        {
                            id: 1,
                            title: "FrenzyChase",
                            tags: ["Jeu Vidéo"],
                            image: fc1024x500,
                            link: "/work/asterie/"
                        },
                        {
                            id: 2,
                            title: "SnelType - Blob Game",
                            tags: ["Application Web", "Jeu Vidéo"],
                            image: "https://images.prismic.io/estudio-nk/aH7-vEMqNJQqIL46_DC11.jpg?auto=format%2Ccompress&fit=max&w=1080",
                            link: "/work/dc/"
                        },
                    ]}
                />


            </section>
        </>
    )
}