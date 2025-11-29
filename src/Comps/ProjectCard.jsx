import React, { useRef, useEffect, useState, useCallback } from 'react';
import useIsDesktop from '../hooks/useIsDesktop';

export default function ProjectCard({ project, height = "300px" }) {
    const isDesktop = useIsDesktop()
    const cardRef = useRef(null);
    const imageRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    // 🔍 Observer pour détecter la visibilité de la carte
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setIsVisible(entry.isIntersecting),
            { threshold: 0.3, rootMargin: '50px' }
        );

        if (cardRef.current) observer.observe(cardRef.current);
        return () => observer.disconnect();
    }, []);

    // 🎢 Effet Parallax (inspiré de CarouselParallax)
    const handleScroll = useCallback(() => {
        if (!isVisible || !cardRef.current || !imageRef.current || !isDesktop) return;

        const rect = cardRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Calcul de la progression de la carte dans la fenêtre
        const scrollPercent = Math.max(
            0,
            Math.min(1, (windowHeight - rect.top) / (windowHeight + rect.height))
        );

        // Effet parallax subtil : on part de -5% et on va vers +5%
        // Cela permet d'avoir un mouvement centré sans espace vide
        const parallaxOffset = (scrollPercent - 0.5) * 10;
        imageRef.current.style.transform = `translateY(${parallaxOffset}%) scale(1.1)`;
    }, [isVisible, isDesktop]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

    // 🎨 Styles
    const getCategoryBadgeClass = (category) => {
        const classes = {
            web: 'bg-primary',
            mobile: 'bg-success',
            ecommerce: 'bg-warning text-dark',
            dashboard: 'bg-info text-dark',
            design: 'bg-secondary',
            portfolio: 'bg-dark'
        };
        return classes[category] || 'bg-secondary';
    };

    const getStatusBadgeClass = (status) => {
        const classes = {
            'En développement': 'bg-warning text-dark',
            'Publié': 'bg-success text-white',
            'En pause': 'bg-secondary',
            'Nouveau': 'bg-primary'
        };
        return classes[status] || 'bg-secondary';
    };

    const styles = {
        projectCard: { transition: 'all 0.3s ease' },
        card: { transition: 'all 0.3s ease' },
        projectImage: {
            borderRadius: '12px 12px 0 0',
            transition: 'transform 0.5s ease-out',
            willChange: 'transform'
        },
        imageOverlay: {
            background:
                'linear-gradient(180deg, rgba(0,0,0,0.3) 0%, transparent 30%, transparent 70%, rgba(0,0,0,0.5) 100%)',
            opacity: '0',
            transition: 'all 0.3s ease'
        },
        projectIcon: {
            transform: 'scale(0.8)',
            transition: 'all 0.3s ease'
        },
        cardTitle: {
            
            color: '#2c3e50'
        },
        
    };

    return (
        <div ref={cardRef} className="h-100 mb-3" style={styles.projectCard}>
            <a href={`/projets/${project.slug || project.id}`} className="text-decoration-none">
                <div className="card rounded-0 border-0 h-100 overflow-hidden" style={styles.card}>
                    <div className="position-relative overflow-hidden">
                        <img
                            ref={imageRef}
                            src={project.image}
                            alt={project.title}
                            className="card-img-top rounded-0 project-image"
                            style={{
                                ...styles.projectImage,
                                height: height,
                                objectFit: 'cover',
                            }}
                        />

                        <div
                            className="image-overlay position-absolute top-0 start-0 w-100 h-100"
                            style={styles.imageOverlay}
                        >
                            <div className="d-flex justify-content-between p-3">
                                <span
                                    className={`badge ${getCategoryBadgeClass(project.category)} px-3 py-2`}
                                    style={styles.badge}
                                >
                                    {project.category?.toUpperCase()}
                                </span>
                                <div className="project-icon" style={styles.projectIcon}>
                                    <i className="bi bi-arrow-up-right-circle-fill text-white fs-4"></i>
                                </div>
                            </div>

                            {project.technologies && (
                                <div className="position-absolute bottom-0 start-0 w-100 p-3">
                                    <div className="d-flex flex-wrap gap-1">
                                        {project.technologies.slice(0, 3).map((tech, index) => (
                                            <span
                                                key={index}
                                                className="badge bg-dark bg-opacity-75 text-white small"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                        {project.technologies.length > 3 && (
                                            <span className="badge bg-dark bg-opacity-75 text-white small">
                                                +{project.technologies.length - 3}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="card-body container-fluid p-0">
                        <div className="row d-flex justify-content-between align-items-start mt-1">
                            <div className="col-6">
                                <h6 className="card-title fw-semibold mb-3" style={styles.cardTitle}>
                                    {project.title}
                                </h6>
                            </div>
                            <div className="col-6 d-flex justify-content-end align-items-center">
                                {project.status && (
                                    <span
                                        className={`rounded-1 tag-project-style text-uppercase ${getStatusBadgeClass(project.status)} raleway`}
                                        
                                    >
                                        {project.status}
                                    </span>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </a>
        </div>
    );
}
