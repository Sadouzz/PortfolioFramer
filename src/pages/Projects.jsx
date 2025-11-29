import logo from '../assets/Logo.png'
import fc1024x500 from '../assets/FrenzyChase1024x500.png'
import overclutchRoyale from '../assets/overclutchRoyale.png'
import fcGHS1024x500 from '../assets/frenzychaseGHS1024x512.png'
import toubaCoutaMockup from '../assets/toubaCoutaMockup.png'
import logoCrazyMerge from '../assets/LogoCrazyMerge.png'
import MiniTitleWithBar from '../Comps/MiniTitleWithBar'
import ProjectGallery from '../Comps/ProjectGallery'
import ProjectCard from '../Comps/ProjectCard'
import ProjectCard1 from '../Comps/ProjectCard1'
import ProjectFilters from '../Comps/ProjectFilters'
import HeroSection from '../Comps/HeroSection'
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger"; // ← Ajouter cet import
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom'; // ← Ajouter pour la cohérence
import useIsDesktop from '../hooks/useIsDesktop'

//gsap.registerPlugin(ScrollTrigger); // ← S'assurer que c'est enregistré

export default function Projects() {
    const location = useLocation(); // ← Pour la cohérence avec les autres composants
    const isDesktop = useIsDesktop()
    useEffect(() => {
        // Attendre que le DOM soit rendu
        setTimeout(() => {
            const splitElements = document.querySelectorAll(".split");

            if (splitElements.length > 0 && isDesktop) {
                // split elements with the class "split" into words and characters
                let split = SplitText.create(".split", { type: "lines" });
                // now animate the lines in a staggered fashion
                const animation = gsap.from(split.lines, {
                    //transform: 'translateY(120%)',
                    //duration: 1,
                    yPercent: 100,   // ← fait sortir d'en bas
                    ease: "power3.in",
                    overflow: 'hidden',
                    stagger: .1,
                    scrollTrigger: {
                        trigger: ".section-trigger",
                        start: "top bottom-=300px",
                        end: "top center-=200px",
                        toggleActions: "play reverse play reverse",
                        //markers: true,
                        scrub: true
                    }
                });

                // Cleanup proper
                /*return () => {
                    if (animation.scrollTrigger) {
                        animation.scrollTrigger.kill();
                    }
                    split.revert();
                };*/
            }
        }, 100);

    }, [location.pathname]); // ← Même logique que les autres composants


    const projects = [
        {
            id: 1,
            slug: 'frenzychase',
            title: 'FrenzyChase',
            description: 'Un jeu mobile 3D développé avec Unity, intégrant des pubs et génération procédurale.',
            category: 'game',
            image: fcGHS1024x500,
            technologies: ['Unity', 'C#', 'UnityAds'],
            date: '2025',
            status: 'Publié',
            demoUrl: 'https://demo.com/frenzychase',
            githubUrl: 'https://github.com/...',
            type: 'large+haute'
        },
        {
            id: 2,
            slug: 'toubacoutaEvasion',
            title: 'ToubaCouta Evasion',
            description: 'Jeu éducatif où il faut taper rapidement des mots pour survivre.',
            category: 'web',
            image: toubaCoutaMockup,
            technologies: ['Unity', 'C#'],
            date: '2024',
            status: 'Publié',
            demoUrl: 'https://demo.com/spaceshooter',
            githubUrl: 'https://github.com/...',
            type: Math.random() > 0.5 ? 'large' : 'normal'
        },
        {
            id: 3,
            slug: 'snelType',
            title: 'SnelType - Blob Game',
            description: 'Un jeu de course multijoueur inspiré de Toybox Turbos, avec PlayFab.',
            category: 'game',
            image: 'https://ousmansadjo.com/assets/img/portfolio/snelType/SnelType.jpg',
            technologies: ['Unity', 'C#', 'PlayFab'],
            date: '2025',
            status: 'En développement',
            demoUrl: 'https://demo.com/toybox',
            githubUrl: 'https://github.com/...',
            type: 'courte'
        },
        {
            id: 4,
            slug: 'crazyMerge',
            title: 'CrazyMerge',
            description: 'Un puzzle mobile fluide et optimisé, inspiré de Merge Wood.',
            category: 'game',
            image: logoCrazyMerge,
            technologies: ['Unity', 'C#'],
            date: '2025',
            status: 'En développement',
            demoUrl: 'https://demo.com/merge',
            githubUrl: 'https://github.com/...',
            type: 'normal'
        },
        {
            id: 5,
            slug: 'portfolio',
            title: 'Ce portfolio',
            description: 'Mon portfolio interactif développé avec React et animations modernes.',
            category: 'web',
            image: 'https://ousmansadjo.com/assets/img/portfolio/frenzyChase/portfolioImage3.png',
            technologies: ['React', 'GSAP', 'SCSS'],
            date: '2025',
            status: 'Publié',
            demoUrl: 'https://ousmansadjo.com',
            githubUrl: 'https://github.com/...',
            type: Math.random() > 0.5 ? 'large' : 'normal'
        },
        {
            id: 6,
            slug: 'overclutchRoyale',
            title: 'OverClutch Royale',
            description: 'Un tableau de bord pour la gestion des étudiants, classes et événements.',
            category: 'game',
            image: overclutchRoyale,
            technologies: ['React', 'Spring Boot', 'MySQL'],
            date: '2025',
            status: 'En développement',
            demoUrl: 'https://demo.com/dashboard',
            githubUrl: 'https://github.com/...',
            type: Math.random() > 0.5 ? 'large' : 'normal'
        },
        {
            id: 7,
            slug: 'hudur',
            title: 'Hudur',
            description: 'Application web pour marquer la présence des étudiants via QR Code.',
            category: 'web',
            image: 'https://ousmansadjo.com/assets/img/portfolio/frenzyChase/portfolioImage3.png',
            technologies: ['Spring', 'React', 'PostgreSQL'],
            date: '2024',
            status: 'En développement',
            demoUrl: 'https://demo.com/attendance',
            githubUrl: 'https://github.com/...',
            type: 'courte'
        },

    ];

    return (
        <>
            <HeroSection
                contentMiniBar="PROJETS"
                firstTitle="Concevoir des expériences numériques,"
                secondTitle="peindre sur la toile de la réalité."
            />

            <section className={`bg-white section-trigger py-3 ${isDesktop ? "" : "padding-20"}`}
                style={{
                }}>
                <div className=''>
                    <div className='m-lg-5 my-5'>
                        <div className="">
                            {
                                isDesktop ?
                                    <MiniTitleWithBar content={"PROJETS EN VEDETTE"} />
                                    :
                                    <></>
                            }
                            <h1 className="poppins split m-0" style={{ maxWidth: "800px" }}>
                                Mes projets naissent d’un mix de curiosité, de créativité et surtout de passion.
                            </h1>
                        </div>
                    </div>
                </div>

                <ProjectGallery projects={projects} />
            </section>

        </>
    )
}