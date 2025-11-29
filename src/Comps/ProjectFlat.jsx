import React from 'react';
import { Link } from 'react-router-dom';

export default function ProjectFlat({ project, imageMap, height = "260px" }) {

    return (
        <Link
            to={`/projets/${project.slug || project.id}`}
            className="text-decoration-none"
            style={{

            }}
            //onMouseEnter={handleMouseEnter}
            //onMouseLeave={handleMouseLeave}
        >
            <div style={{

            }}>
                <img src={imageMap} alt={project.title} style={{

                }} />

                {project.technologies && project.technologies.length > 0 && (
                    <div style={{

                    }}>
                        {project.technologies.map((tech, index) => (
                            <span key={index} style={{

                            }}>
                                {tech}
                            </span>
                        ))}
                    </div>
                )}
            </div>

            <div style={{

            }}>
                <span style={{

                }} className="raleway">{project.title}</span>
                {project.category && (
                    <span style={{

                    }}>{project.category}</span>
                )}
            </div>
        </Link>
    );
}
