import React, { useEffect } from 'react';
import ProjectCard1 from './ProjectCard1';
import ProjectCard from './ProjectCard';
import ProjectFlat from './ProjectFlat';
import useIsDesktop from '../hooks/useIsDesktop';

export default function ProjectGroup({ projects, imageMap, startIndex }) {
    const getProject = (index) => {
        const projectIndex = startIndex + index;
        return projects[projectIndex] || null;
    };

    const isDesktop = useIsDesktop()

    return (
        <div style={{}}>
            {/* Ligne 1: 1 projet sur 12 colonnes */}
            <div className="row mb-md-5 ">
                <div className="col-12">
                    {getProject(0) && (
                        <ProjectCard
                            project={getProject(0)}
                            imageMap={imageMap}
                            height={isDesktop ? "700px" : "250px"}
                        />
                    )}
                </div>
            </div>

            {/* Ligne 2: 1 projet sur 6 cols + 2 projets sur 3 cols */}
            <div className="row mb-md-5">
                <div className="col-md-6 col-12">
                    {getProject(1) && (
                        <ProjectCard
                            project={getProject(1)}
                            imageMap={imageMap}
                            height={isDesktop ? "400px" : "250px"}
                        />
                    )}
                </div>
                <div className="col-lg-3 col-md-6 col-12">
                    {getProject(2) && (
                        <ProjectCard
                            project={getProject(2)}
                            imageMap={imageMap}
                            height={isDesktop ? "250px" : "250px"}
                        />
                    )}
                </div>
                <div className="col-lg-3 col-md-6 col-12">
                    {getProject(3) && (
                        <ProjectCard
                            project={getProject(3)}
                            imageMap={imageMap}
                            height={isDesktop ? "250px" : "250px"}
                        />
                    )}
                </div>
            </div>

            {/* Ligne 3: 2 projets sur 3 cols + 1 projet sur 6 cols */}
            <div className="row mb-md-5">
                <div className="col-lg-3 col-md-6 col-12">
                    {getProject(4) && (
                        <ProjectCard
                            project={getProject(4)}
                            imageMap={imageMap}
                            height={isDesktop ? "250px" : "250px"}
                        />
                    )}
                </div>
                <div className="col-lg-3 col-md-6 col-12">
                    {getProject(5) && (
                        <ProjectCard
                            project={getProject(5)}
                            imageMap={imageMap}
                            height={isDesktop ? "250px" : "250px"}
                        />
                    )}
                </div>
                <div className="col-md-6 col-12">
                    {getProject(6) && (
                        <ProjectCard
                            project={getProject(6)}
                            imageMap={imageMap}
                            height={isDesktop ? "400px" : "250px"}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}
