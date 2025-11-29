import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLocation } from 'react-router-dom'; // ← Ajouter cet import
import logo from '../assets/Logo.png'

export default function Sidebar() {
    const location = useLocation(); // ← Hook pour détecter les changements de route

    useEffect(() => {
        // Nettoyer tous les ScrollTriggers existants
        //ScrollTrigger.getAll().forEach(trigger => trigger.kill());

        // Attendre un tick pour que le nouveau contenu soit rendu
        setTimeout(() => {
            //ScrollTrigger.refresh();

            // Créer la nouvelle animation
            const animationd = gsap.to(".fixed-element-bottom", {
                color: "#07143F",
                scrollTrigger: {
                    trigger: ".section-trigger",
                    start: "top bottom-=10",
                    end: "bottom 99%",
                    toggleActions: "play reverse play reverse",
                    //markers: true,
                },
            });
            // return () => {
            //     // Cleanup uniquement celui que tu viens de créer
            //     animationd.scrollTrigger?.kill();
            // };
            // Pas besoin de return cleanup ici car on kill tout au début
        }, 100);
        
    }, [location.pathname]); // ← Se déclenche à chaque changement de route

    return (
        <>
            <aside
                className="border-danger border-end border-opacity-25 text-white p-3 vh-100 position-fixed d-flex flex-column justify-content-between align-items-center"
                style={{
                    width: "150px",
                    zIndex: 2000,
                }}
            >
                <img src={logo} alt="" className='img-fluid'
                    style={{
                        maxWidth: '100px',
                    }}
                />
                <small className='raleway fixed-element-bottom'>Ousman SADJO</small>
            </aside>
        </>
    )
}