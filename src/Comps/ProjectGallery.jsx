import React, { useState } from 'react';
import ProjectFilters from './ProjectFilters';
import ProjectGroup from './ProjectGroup';

export default function ProjectGallery({ projects = [], imageMap = 'https://ousmansadjo.com/assets/img/portfolio/frenzyChase/portfolioImage3.png' }) {
    const [activeFilter, setActiveFilter] = useState('all');

    // Configuration des filtres
    const filters = [
        { key: 'all', label: 'TOUS', count: projects.length },
        { key: 'web', label: 'WEB APPS', count: projects.filter(p => p.category === 'web').length },
        { key: 'mobile', label: 'MOBILE', count: projects.filter(p => p.category === 'mobile').length },
        { key: 'design', label: 'DESIGN', count: projects.filter(p => p.category === 'design').length },
        { key: 'game', label: 'GAME', count: projects.filter(p => p.category === 'game').length }
    ];

    // Filtrer les projets
    const filteredProjects = activeFilter === 'all'
        ? projects
        : projects.filter(project => project.category === activeFilter);

    const handleFilterClick = (filterKey) => {
        setActiveFilter(filterKey);
    };

    // Calculer le nombre de groupes nécessaires
    const numberOfGroups = Math.ceil(filteredProjects.length / 7); // 7 projets par groupe


    return (
        <div className="px-lg-5" >
            {/* Section Header */}
            <div className='container-fluid '>
                <ProjectFilters
                    filters={filters}
                    activeFilter={activeFilter}
                    onFilterClick={handleFilterClick}
                />
            </div>

            {/* Grille des projets avec layout fixe */}
            <div className=''>
                <div className='container-fluid p-0'>
                    {filteredProjects.length > 0 ? (
                        Array.from({ length: numberOfGroups }, (_, groupIndex) => (
                            <ProjectGroup
                                key={groupIndex}
                                projects={filteredProjects}
                                imageMap={imageMap}
                                startIndex={groupIndex * 7}
                            />
                        ))
                    ) : (
                        <div className="text-center py-5">
                            <div className="mb-4">
                                <i className="bi bi-folder-x text-muted" style={{ fontSize: '4rem' }}></i>
                            </div>
                            <h4 className="text-muted mb-3">Aucun projet trouvé</h4>
                            <p className="text-muted">Essayez un autre filtre pour voir plus de projets</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}