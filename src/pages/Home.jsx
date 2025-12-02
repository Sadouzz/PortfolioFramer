import React, { useState, useEffect } from 'react';
import MiniTitleWithBar from '../Comps/MiniTitleWithBar';
import useIsDesktop from '../hooks/useIsDesktop';
import faceCard from '../assets/faceCard.png'
import overclutchRoyale from '../assets/overclutchRoyale.png'
import fcGHS1024x500 from '../assets/frenzychaseGHS1024x512.png'
import toubaCoutaMockup from '../assets/toubaCoutaMockup.png'
import StatsGrid from '../Comps/StatsGrid';
import ParallaxImage from '../Comps/ParallaxImage';

const Home = () => {
    const isDesktop = useIsDesktop();

    const projects = [
        {
            title: 'FrenzyChase',
            category: 'Jeu Mobile 3D',
            image: fcGHS1024x500,
            year: '2025',
            tags: ['Unity', 'C#', 'Mobile']
        },
        {
            title: 'ToubaCouta Evasion',
            category: 'Développement Web',
            image: toubaCoutaMockup,
            year: '2024',
            tags: ['React']
        },
        {
            title: 'Portfolio Web',
            category: 'Développement Web',
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
            year: '2025',
            tags: ['React', 'GSAP', 'Web']
        }
    ];

    const stats = [
        {
            title: '7',
            suffix: '+',
            content: 'projets réalisés',
            sublabel: '*et ce n’est que le début',
            marginTop: '0px'
        },
        {
            title: '6',
            suffix: 'mois',
            content: 'd’expérience moyenne concentrée sur le développement web et jeu vidéo.',
            marginTop: '60px'
        },
        {
            title: '75',
            suffix: '% +',
            content: 'de retours positifs de collaborateurs et clients.',
            marginTop: '0px'
        },
        {
            title: '5',
            content: 'compétences clés',
            sublabel: '(Game Dev, Web, UI/UX, Backend, Tools)',
            marginTop: '80px'
        },
        {
            title: '12',
            suffix: '+',
            content: 'technos & outils maîtrisés',
            highlight: {
                text: 'Unity, React, Spring, etc.'
            },
            marginTop: '40px'
        },
        {
            title: '150',
            suffix: '+',
            content: 'features et systèmes développés à travers mes projets.',
            highlight: {
                text: 'me poussant vers',
                accent: "une maîtrise technique continue"
            },
            marginTop: '0px',
            isWide: true,
            maxHeight: '200px'
        },
        {
            title: '3',
            suffix: '+ ans',
            content: 'à créer des expériences',
            sublabel: 'avec passion et constance',
            marginTop: '100px',
            maxHeight: '500px'
        }
    ];

    return (
        <>
            {/* Hero Section - Ne pas toucher */}
            <section id='hero' className='align-content-center'
                style={{
                    height: '100dvh',

                }}>
                <div className='ms-lg-5'
                    style={{
                        paddingLeft: isDesktop ? '' : "20px"
                    }}>
                    <h1 className="text-light poppins"
                        style={{
                            maxWidth: "500px"
                        }}>
                        Allier le génie logiciel à la créativité des jeux indépendants.
                    </h1>
                    <span className="text-light text-decoration-underline raleway">EXPLORE MY UNIVERSE</span>
                </div>
            </section>
            {/* <section style={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative'
            }}>
                <div className="container text-center">
                    <div className="row justify-content-center">
                        <div className="col-12 col-lg-10">
                            <h1 className="poppins" style={{
                                fontSize: isDesktop ? '5rem' : '2.5rem',
                                fontWeight: '700',
                                lineHeight: '1.1',
                                marginBottom: '2rem',
                                color: '#0e0e0e'
                            }}>
                                Allier le génie logiciel<br />
                                à la créativité des<br />
                                <span style={{ color: '#cc001e' }}>jeux indépendants</span>
                            </h1>
                        </div>
                    </div>
                </div>
            </section> */}

            {/* About Section */}
            <section className='bg-transparent py-5'>
                <div className={`${isDesktop ? "" : "padding-20"}`}>
                    <div className='m-lg-5 my-5'>
                        <div className="container-fluid">
                            <div className='row'>
                                <div className="col-12 col-md-7 text-white">
                                    {isDesktop && <MiniTitleWithBar content="À PROPOS" color="red" textColor="white" />}

                                    <h3 className="poppins mb-4">
                                        Créateur passionné transformant des idées en expériences numériques captivantes
                                    </h3>

                                    <p className='poppins mb-4'>
                                        Développeur de jeux indépendants et développeur web, je combine expertise technique et vision créative pour donner vie à des projets innovants.
                                    </p>
                                    <StatsGrid
                                        stats={stats}
                                        type='stats-home'
                                    />

                                </div>

                                <div className="col-12 col-md-5">
                                    <div style={{
                                        width: '100%',
                                        height: '100%',
                                        backgroundColor: '#0e0e0e',
                                        overflow: 'hidden',
                                        position: 'relative'
                                    }}>
                                        <ParallaxImage
                                            image={faceCard}
                                            height="350px"
                                            speed={150}
                                        />
                                        <div style={{
                                            position: 'absolute',
                                            top: '-20px',
                                            right: '-20px',
                                            width: '150px',
                                            height: '150px',
                                            border: '10px solid #cc001e',
                                            borderRadius: '50%'
                                        }}></div>
                                        <div style={{
                                            position: 'absolute',
                                            bottom: '-20px',
                                            left: '-20px',
                                            width: '150px',
                                            height: '150px',
                                            border: '3px solid #cc001e',
                                            borderRadius: '50%'
                                        }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section className='bg-white py-5'>
                <div className={`${isDesktop ? "" : "padding-20"}`}>
                    <div className='m-lg-5 my-5'>
                        <div className="mb-5">
                            {isDesktop && <MiniTitleWithBar content="PROJETS" color="red" textColor="black" />}

                            <h1 className="poppins" style={{ maxWidth: "600px" }}>
                                Mes créations
                            </h1>

                            <p className="poppins text-muted" style={{ maxWidth: "600px" }}>
                                Une sélection de projets qui allient technique et créativité
                            </p>
                        </div>

                        <div className="row g-4">
                            {projects.map((project, index) => (
                                <div key={index} className="col-12 col-md-6 col-lg-4">
                                    <div className="position-relative" style={{
                                        overflow: 'hidden',
                                        cursor: 'pointer',
                                        height: '450px',
                                        transition: 'transform 0.5s ease'
                                    }}
                                        onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
                                        onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                                        <div style={{
                                            width: '100%',
                                            height: '100%',
                                            backgroundColor: '#0e0e0e',
                                            overflow: 'hidden'
                                        }}>
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                style={{
                                                    width: '100%',
                                                    height: '100%',
                                                    objectFit: 'cover',
                                                    transition: 'transform 0.5s ease'
                                                }}
                                                onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
                                                onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                                            />
                                        </div>

                                        <div className="position-absolute bottom-0 start-0 end-0 p-4" style={{
                                            background: 'linear-gradient(to top, rgba(14, 14, 14, 0.9) 0%, transparent 100%)',
                                            color: '#fff'
                                        }}>
                                            <span className="rounded-1 text-uppercase tag-project-style mb-2 d-inline-block" style={{
                                                backgroundColor: '#ffae2e',
                                                color: '#0e0e0e'
                                            }}>
                                                {project.category}
                                            </span>

                                            <h3 className="poppins fw-bold mb-2">
                                                {project.title}
                                            </h3>

                                            <div className="d-flex flex-wrap gap-2">
                                                {project.tags.map((tag, i) => (
                                                    <span key={i} className="rounded-1 tag-project-style text-uppercase bg-red">
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="text-center mt-5">
                            <a href="/projects" className="naked-link">
                                Voir tous les projets →
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className='py-5' style={{ backgroundColor: '#f8f9fa' }}>
                <div className={`${isDesktop ? "" : "padding-20"}`}>
                    <div className='m-lg-5 my-5'>
                        <div className="row">
                            <div className="col-12 col-lg-6 mb-5 mb-lg-0">
                                {isDesktop && <MiniTitleWithBar content="SERVICES" color="red" textColor="black" />}

                                <h2 className="poppins mb-4" style={{
                                    fontSize: isDesktop ? '3rem' : '2rem',
                                    fontWeight: '700',
                                    color: '#0e0e0e'
                                }}>
                                    Ce que je peux<br />
                                    faire pour vous
                                </h2>

                                <p className="poppins text-muted">
                                    De la conception à la réalisation, je vous accompagne dans tous vos projets digitaux.
                                </p>
                            </div>

                            <div className="col-12 col-lg-6">
                                {[
                                    { title: 'Développement de Jeux', desc: 'Création de jeux mobiles et web immersifs' },
                                    { title: 'Développement Web', desc: 'Sites et applications web modernes' },
                                    { title: 'UI/UX Design', desc: 'Interfaces intuitives et attractives' },
                                    { title: 'Backend Development', desc: 'APIs robustes et performantes' }
                                ].map((service, index) => (
                                    <div key={index} className="mb-4 pb-4" style={{
                                        borderBottom: '1px solid rgba(14, 14, 14, 0.1)',
                                        transition: 'all 0.3s ease',
                                        cursor: 'pointer'
                                    }}
                                        onMouseEnter={(e) => e.currentTarget.style.paddingLeft = '20px'}
                                        onMouseLeave={(e) => e.currentTarget.style.paddingLeft = '0'}>
                                        <div className="d-flex align-items-start">
                                            <span className="poppins fw-bold me-3" style={{
                                                fontSize: '3rem',
                                                color: '#ffae2e',
                                                lineHeight: '1'
                                            }}>
                                                0{index + 1}
                                            </span>
                                            <div>
                                                <h4 className="poppins fw-semibold mb-2">
                                                    {service.title}
                                                </h4>
                                                <p className="text-muted mb-0">
                                                    {service.desc}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className='py-5' style={{ backgroundColor: '#0e0e0e', color: '#fff' }}>
                <div className="container text-center py-5">
                    <h2 className="poppins mb-4" style={{
                        fontSize: isDesktop ? '3.5rem' : '2rem',
                        fontWeight: '700'
                    }}>
                        Prêt à créer quelque chose<br />
                        d'extraordinaire ensemble ?
                    </h2>

                    <p className="poppins mb-4" style={{
                        fontSize: '1.2rem',
                        opacity: '0.8',
                        maxWidth: '600px',
                        margin: '0 auto 3rem'
                    }}>
                        Discutons de votre prochain projet et donnons vie à vos idées
                    </p>

                    <a href="/contact" className="btn btn-lg px-5 py-3" style={{
                        backgroundColor: '#cc001e',
                        color: '#fff',
                        border: 'none',
                        fontSize: '1rem',
                        fontWeight: '600',
                        textTransform: 'uppercase',
                        letterSpacing: '2px',
                        textDecoration: 'none',
                        transition: 'all 0.3s ease'
                    }}
                        onMouseEnter={(e) => {
                            e.target.style.backgroundColor = '#ffae2e';
                            e.target.style.color = '#0e0e0e';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.backgroundColor = '#cc001e';
                            e.target.style.color = '#fff';
                        }}>
                        Contactez-moi
                    </a>
                </div>
            </section>

            <style>{`
        .poppins {
          font-family: 'Poppins', sans-serif;
        }
      `}</style>
        </>
    );
};

export default Home;