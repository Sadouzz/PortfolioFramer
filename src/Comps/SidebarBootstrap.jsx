import { Link, NavLink } from "react-router-dom";
import logo from '../assets/Logo.png';
import MiniTitleWithBar from "./MiniTitleWithBar";

function SidebarBootstrap({ setHeaderOnHomePosition, unSetHeaderOnHomePosition, boolHeader, closeSidebar, isOpen }) {

    // Fonction pour gérer les clics sur les liens
    const handleLinkClick = (callback) => {
        return () => {
            // Fermer le sidebar sur mobile
            if (window.innerWidth < 992) {
                closeSidebar();
            }
            // Exécuter le callback s'il existe
            if (callback) {
                callback();
            }
        };
    };

    return (
        <>
            {/* Overlay quand le sidebar est ouvert */}
            {isOpen && (
                <div
                    className="sidebar-overlay"
                    onClick={closeSidebar}
                    style={{
                        position: "fixed",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        backgroundColor: "rgba(0,0,0,0.5)",
                        zIndex: 998
                    }}
                />
            )}
            <aside id="sidebar" className="sidebar">
                <ul className="sidebar-nav m-5" id="sidebar-nav">
                    <div>
                        <MiniTitleWithBar content={"Explorer"} />
                    </div>
                    <div className="px-3">
                        <li className="nav-item mb-1">
                            <NavLink
                                to="/"
                                className={({ isActive }) => `nav-link ${isActive ? "" : "collapsed"}`}
                                onClick={handleLinkClick()}
                            >
                                <span>Accueil</span>
                            </NavLink>
                        </li>
                        <li className="nav-item mb-1">
                            <NavLink
                                to="/about"
                                className={({ isActive }) => `nav-link ${isActive ? "" : "collapsed"}`}
                                onClick={handleLinkClick()}
                            >
                                <span>À propos</span>
                            </NavLink>
                        </li>
                        <li className="nav-item mb-1">
                            <NavLink
                                to="/projects"
                                className={({ isActive }) => `nav-link ${isActive ? "active-link" : "collapsed"}`}
                                onClick={handleLinkClick()}
                            >
                                <span>Projets</span>
                            </NavLink>
                        </li>

                        <li className="nav-item mb-1">
                            <NavLink
                                to="/services"
                                className={({ isActive }) => `nav-link ${isActive ? "active-link" : "collapsed"}`}
                                onClick={handleLinkClick()}
                            >
                                <span>Services</span>
                            </NavLink>
                        </li>
                        <li className="nav-item mb-1">
                            <NavLink
                                to="/contact"
                                className={({ isActive }) => `nav-link ${isActive ? "active-link" : "collapsed"}`}
                                onClick={handleLinkClick()}
                            >
                                <span>Contact</span>
                            </NavLink>
                        </li>
                    </div>
                </ul>
            </aside>
        </>
    );
}

export default SidebarBootstrap;