import React, { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

//gsap.registerPlugin(ScrollTrigger);

export default function Header() {
    const headerRef = useRef(null);

    useEffect(() => {
        const el = headerRef.current;
        if (!el) return;
        gsap.set(".collapsed", {
            color: 'white',
        });

        setTimeout(() => {
            ScrollTrigger.create({
                trigger: el,
                start: "top 20px",
                end: "max",
                toggleActions: "play none none none",
                markers: false,
                onEnter: () => {
                    const rect = el.getBoundingClientRect();
                    const currentLeft = rect.left;

                    gsap.set(el, {
                        position: 'fixed',
                        top: '10px',
                        left: `${currentLeft}px`,
                        zIndex: 1000
                    });
                    gsap.set(".collapsed", {
                        color: '#0e0e0e',
                    });
                },
                onLeaveBack: () => {
                    gsap.set(el, {
                        color: 'white',
                        position: 'absolute',
                        top: 'calc(100vh - 100px)',
                        right: 'calc((100vw - 250px) / 2 - 300px)',
                        zIndex: 'auto'
                    });
                    gsap.set(".collapsed", {
                        color: 'white',
                    });
                }
            });
        }, 100);
    }, []);

    return (
        <header
            ref={headerRef}
            className="liquid-glass-header raleway"
            style={{
                position: 'absolute',
                width: '600px',
                maxWidth: 'calc(100vw - 270px)',
                top: 'calc(100vh - 100px)',
                right: 'calc((100vw - 150px) / 2 - 300px)',
                minWidth: '300px',
                borderRadius: '10px',
                padding: '6px 24px',
            }}
        >
            {/* Liquid bubble animations */}
            <div className="liquid-bubble bubble-1"></div>
            <div className="liquid-bubble bubble-2"></div>
            <div className="liquid-bubble bubble-3"></div>

            <nav className="nav justify-content-center fw-medium">
                <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? "active-link" : "collapsed"}`} >
                    <span>Accueil</span>
                </NavLink>
                <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? "active-link" : "collapsed"}`} >
                    <span>À propos</span>
                </NavLink>
                <NavLink to="/projects" className={({ isActive }) => `nav-link ${isActive ? "active-link" : "collapsed"}`} >
                    <span>Projets</span>
                </NavLink>
                <NavLink to="/services" className={({ isActive }) => `nav-link ${isActive ? "active-link" : "collapsed"}`} >
                    <span>Services</span>
                </NavLink>
                <NavLink to="/contact" className={({ isActive }) => `nav-link ${isActive ? "active-link" : "collapsed"}`} >
                    <span>Contact</span>
                </NavLink>
            </nav>
        </header>
    );
}