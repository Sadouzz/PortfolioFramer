import React from 'react';
import { Link } from 'react-router-dom';

export default function ProjectCard1({ project, imageMap, height1 = "300px" }) {
    // Fonction pour obtenir la classe du badge selon la catégorie
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

    // Fonction pour obtenir la classe du badge selon le status
    const getStatusBadgeClass = (status) => {
        const classes = {
            'En cours': 'bg-warning text-dark',
            'Terminé': 'bg-success',
            'En pause': 'bg-secondary',
            'Nouveau': 'bg-primary'
        };
        return classes[status] || 'bg-secondary';
    };

    // Définir largeur/hauteur en fonction du type
    const getCardSize = () => {
        switch (project.type) {
            case "large": return { width: 2, height: 240 };
            case "haute": return { width: 1, height: 400 };
            case "large+haute": return { width: 2, height: 400 };
            case "courte": return { width: 1, height: 200 };
            default: return { width: 1, height: 300 }; // normale
        }
    };

    const { width, height } = getCardSize();

    return (
        <div className="project-card mb-5" data-width={width}>
            <Link
                to={`/projets/${project.slug || project.id}`}
                className="text-decoration-none"
            >
                <div className=" border-0  h-100 overflow-hidden">
                    {/* Image du projet */}
                    <div className="card-img-container position-relative overflow-hidden">
                        <img
                            src={imageMap[project.image] || project.image}
                            alt={project.title}
                            className="card-img-top project-image"
                            style={{
                                height: height1,
                                objectFit: 'cover',
                                transition: 'transform 0.5s ease'
                            }}
                        />

                        {/* Overlay avec gradient */}
                        <div className="image-overlay position-absolute top-0 start-0 w-100 h-100">
                            <div className="d-flex justify-content-between p-3">
                                {/* Badge catégorie */}
                                <span className={`badge ${getCategoryBadgeClass(project.category)} px-3 py-2`}>
                                    {project.category?.toUpperCase()}
                                </span>

                                {/* Icône d'ouverture */}
                                <div className="project-icon">
                                    <i className="bi bi-arrow-up-right-circle-fill text-white fs-4"></i>
                                </div>
                            </div>

                            {/* Technologies en bas */}
                            {project.technologies && (
                                <div className="position-absolute bottom-0 start-0 w-100 p-3">
                                    <div className="d-flex flex-wrap gap-1">
                                        {project.technologies.slice(0, 3).map((tech, index) => (
                                            <span key={index} className="badge bg-dark bg-opacity-75 text-white small">
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

                    {/* Contenu de la carte */}
                    <div className="mt-1">
                        <h6 className="card-title raleway text-dark ">
                            {project.title}
                        </h6>

                        <div className="d-flex justify-content-between align-items-center mt-auto">
                            <small className="text-muted">
                                {project.date || project.client || 'Récent'}
                            </small>
                            {project.status && (
                                <span className={`badge ${getStatusBadgeClass(project.status)} small`}>
                                    {project.status}
                                </span>
                            )}
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
}
