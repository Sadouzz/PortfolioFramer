import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLocation } from 'react-router-dom';
import SidebarBootstrap from "./SidebarBootstrap";
import logo from '../assets/Logo.png'

export default function Sidebar() {
    const location = useLocation();
    const [sidebarOpen, setSidebarOpen] = useState(false);
    useEffect(() => {

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
                className="text-white w-100 position-fixed d-flex  justify-content-between align-items-center padding-20 py-3"
                style={{

                    zIndex: 2000,

                }}
            >
                <img src={logo} alt="" className='img-fluid'
                    style={{
                        maxWidth: '40px',
                    }}
                />
                <div
                    className="bg-white rounded-circle p-1 d-flex justify-content-center align-items-center shadow"
                    style={{ width: "50px", height: "50px" }}
                >
                    <i
                        className="bi bi-list fs-2 text-red mobile-nav-toggle d-lg-none"
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                        style={{ cursor: "pointer" }}
                    ></i>
                </div>

            </aside>
            <div className={sidebarOpen ? '' : 'toggle-sidebar'}>
                <SidebarBootstrap
                    isOpen={sidebarOpen}
                    closeSidebar={() => setSidebarOpen(!sidebarOpen)}
                />
            </div>
        </>
    )
}