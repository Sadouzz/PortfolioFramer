import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


export default function ElementsFixed() {
    const location = useLocation(); // ← Hook pour détecter les changements de route

    useEffect(() => {
        // Nettoyer tous les ScrollTriggers existants
        //ScrollTrigger.getAll().forEach(trigger => trigger.kill());

        // Attendre un tick pour que le nouveau contenu soit rendu
        setTimeout(() => {
            //ScrollTrigger.refresh();

            // Créer la nouvelle animation
            const animation = gsap.to(".fixed-element-top", {
                color: "#07143F", // couleur dans la section
                scrollTrigger: {
                    trigger: ".section-trigger", // section à atteindre
                    start: "top top", // quand le top de la section arrive au centre du viewport
                    end: "bottom top", // quand le bas de la section arrive au centre
                    toggleActions: "play reverse play reverse", // play quand on entre, reverse quand on sort
                    markers: false,
                },
            });
            // return () => {
            //     // Cleanup uniquement celui que tu viens de créer
            //     animation.scrollTrigger?.kill();
            // };
            // Pas besoin de return cleanup ici car on kill tout au début
        }, 100);
        

    }, [location.pathname]);

    return (
        <div
            className="position-fixed my-3 mx-lg-5 d-flex justify-content-between align-items-center raleway z-3"
            style={{ left: "150px", right: 0 }}
        >
            <small className="fixed-element-top" style={{ color: "white" }}>
                DEVELOPER, GAME ARTIST & DESIGN ALCHEMIST
            </small>
            <span className="bg-info-subtle px-3 py-1 rounded-2 oo" style={{ color: "yellow" }}>
                ENG
            </span>
        </div>
    );
}
