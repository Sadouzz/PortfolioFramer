import { useEffect, useLayoutEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MiniTitleWithBar from "./MiniTitleWithBar";
import CarouselParallax from "./CarouselParallax";
import useIsDesktop from "../hooks/useIsDesktop";

gsap.registerPlugin(SplitText, ScrollTrigger);

export default function ServiceElement({ id, title, subtitle, content, keys, img, miniTitleWithBar, projects }) {
    const isDesktop = useIsDesktop()

    const sectionRef = useRef(null);
    const compRef = useRef(null);
    const headerWrapper = useRef(null);
    const sectionHeader = useRef(null);
    const keysRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            document.fonts.ready.then(() => {
                const el = sectionRef.current;
                const compRefEl = compRef.current;
                const header = sectionHeader.current;
                const headerWrap = headerWrapper.current;
                const image = el.nextElementSibling?.querySelector("img");
                const keysContainer = keysRef.current;

                if (!el || !header || !headerWrap || !image || !keysContainer) return;

                // Nettoyer les ScrollTriggers existants pour cet élément
                ScrollTrigger.getAll().forEach(trigger => {
                    if (trigger.trigger === el || trigger.trigger === headerWrap ||
                        (trigger.id && trigger.id.includes(id))) {
                        trigger.kill();
                    }
                });

                // Split texts - AJOUT DES SPLIT POUR TITRE ET SOUS-TITRE
                const contentDiv = el.querySelector(".content");
                const splitContent = new SplitText(contentDiv, { type: "lines" });
                //const titleElement = el.querySelector(".title");
                //const subtitleElement = el.querySelector(".subtitle");

                let splitTitle, splitSubtitle;

                // Créer les SplitText pour titre et sous-titre
                /*if (titleElement) {
                    splitTitle = new SplitText(titleElement, { type: "lines" });
                }
                if (subtitleElement) {
                    splitSubtitle = new SplitText(subtitleElement, { type: "lines" });
                }*/

                // CORRECTION : SplitText pour les keys
                let splitKeys;
                try {
                    splitKeys = new SplitText(keysContainer.querySelectorAll(".keys"), {
                        type: "lines"
                    });
                } catch (error) {
                    console.warn("SplitText keys error:", error);
                    return;
                }

                const headerWrapHeight = headerWrap.offsetHeight;
                const endValue = `bottom top+=${-20 + headerWrapHeight}px`;

                const compRefWrapHeight = compRefEl.offsetHeight;
                const endCompRefValue = `bottom top+=${100 + compRefWrapHeight}px`;

                // 1. CRÉER LE PIN EN PREMIER
                const pinTrigger = ScrollTrigger.create({
                    trigger: headerWrap,
                    start: "top top",
                    endTrigger: image,
                    end: endValue,
                    pin: true,
                    pinSpacing: false,
                    anticipatePin: 1,
                    //markers: true,
                    id: "pin-" + id
                });

                // 2. ANIMATION TITRE - DÉCOMMENTÉE ET CORRIGÉE
                /*if (splitTitle && splitTitle.lines) {
                    gsap.from(splitTitle.lines, {
                        yPercent: 100,
                        autoAlpha: 0,
                        stagger: 0.1,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: el,
                            start: "top 85%",
                            end: "top 60%",
                            toggleActions: "play reverse play reverse",
                            scrub: true,
                            id: "title-" + id
                        }
                    });
                }

                // 3. ANIMATION SOUS-TITRE - DÉCOMMENTÉE ET CORRIGÉE
                if (splitSubtitle && splitSubtitle.lines) {
                    gsap.from(splitSubtitle.lines, {
                        yPercent: 150,
                        autoAlpha: 0,
                        stagger: 0.05,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: el,
                            start: "top 90%",
                            end: "top 70%",
                            toggleActions: "play reverse play reverse",
                            scrub: true,
                            id: "subtitle-" + id
                        }
                    });
                }*/

                // 4. ANIMATION CONTENU (version fromTo corrigée)
                // Calculer le pourcentage basé sur la hauteur du contentDiv
                const contentHeight = contentDiv.offsetHeight;
                const containerHeight = el.offsetHeight;
                const scrollDistance = contentHeight - containerHeight;
                const yPercentValue = -(scrollDistance / contentHeight) * 100;

                if (isDesktop) {

                    gsap.fromTo(contentDiv,
                        {
                            y: 0,
                            autoAlpha: 1
                        },
                        {
                            //yPercent: yPercentValue,
                            yPercent: 100,
                            ease: "none",
                            scrollTrigger: {
                                trigger: el,
                                start: "top bottom-=300px",
                                end: "bottom bottom",
                                scrub: 1,
                                //markers: true,
                                id: "content-scroll-" + id
                            }
                        }
                    );

                    // 5. ANIMATION LIGNES DU CONTENU
                    gsap.from(splitContent.lines, {
                        yPercent: 100,
                        stagger: 0.1,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: el,
                            start: "top 85%",
                            end: "top 60%",
                            toggleActions: "play reverse play reverse",
                            scrub: true,
                            id: "content-lines-" + id
                        }
                    });

                }
                // 6. ANIMATION KEYS - VERSION CORRIGÉE
                if (splitKeys && splitKeys.lines && splitKeys.lines.length > 0 && isDesktop) {
                    gsap.from(splitKeys.lines, {
                        yPercent: 150,
                        autoAlpha: 0,
                        stagger: 0.05,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: keysContainer,
                            start: "top bottom-=200px",
                            end: "bottom center",
                            toggleActions: "play reverse play reverse",
                            scrub: true,
                            //markers: true, // Gardez pour debug
                            id: "keys-" + id
                        }
                    });
                } else {
                    console.warn("No keys lines found for animation");
                }

                // Forcer un refresh après création
                setTimeout(() => {
                    ScrollTrigger.refresh();
                }, 150);

            });
        }, sectionRef);

        return () => {
            ctx.revert();
            // Nettoyage spécifique
            ScrollTrigger.getAll().forEach(trigger => {
                if (trigger.id && trigger.id.includes(id)) {
                    trigger.kill();
                }
            });
        };
    }, [id]);

    const [spacerHeight, setSpacerHeight] = useState(0);

    useLayoutEffect(() => {
        if (!compRef.current) return;

        const comp = compRef.current;

        // Récupérer le padding-top réel de compRef
        const compPaddingTop = parseFloat(
            window.getComputedStyle(comp).paddingTop
        );

        setSpacerHeight(compPaddingTop);
    }, []);

    return (
        <div ref={compRef} className="px-lg-5 pb-5 border-top" id={id}>
            <div ref={sectionRef} className=''>
                <div ref={headerWrapper} className="pin-wrapper z-1 container-fluid ">
                    {/* <div
                        className="row bg-white w-100"
                        style={{
                            height: `${spacerHeight}px`,
                        }}
                    ></div> */}
                    <div
                        ref={sectionHeader}
                        className={`row pt-5 bg-white ${isDesktop ? "" : "padding-20"}`}
                    >
                        <div className="col-12 ps-0 col-md-6">
                            <div className="">
                                <small className='tag rounded-1 text-uppercase subtitle raleway'>{subtitle}</small>
                            </div>
                            <h1 className='mt-3 mb-0 title'>
                                <span className='poppins text-red'>{"/> "}</span>
                                {title}
                            </h1>
                        </div>
                        <div className="col-6"></div>
                    </div>
                    <div className="row bg-white-to-transparent" style={{
                        height: '20px'
                    }}>

                    </div>
                </div>

                <div className="container-fluid ">
                    <div className={`row d-flex justify-content-between position-relative ${isDesktop ? "" : "padding-20"}`}>
                        <div className='col-12 col-md-6 position-relative ps-0'>
                            <p
                                className='content '
                                style={{
                                    maxWidth: '400px'
                                }}
                            >
                                {content}
                            </p>
                        </div>
                        <div ref={keysRef} className='col-12 col-md-6 ps-0 d-flex flex-column'>
                            <div className="raleway">
                                {keys && keys.length > 0 ? (
                                    keys.map((key, index) => (
                                        <h3 key={index} className="fw-semibold keys">
                                            {key}
                                        </h3>
                                    ))
                                ) : (
                                    <h3 className="fw-semibold keys text-muted">
                                        No keys provided
                                    </h3>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='image-section' style={{
                margin: '20px 0'
            }}>
                <img className="img" src={img} alt="" style={{
                    width: '100%',
                }} />
            </div>
            <div className={`${isDesktop ? "" : "padding-20"}`}>
                <MiniTitleWithBar content={miniTitleWithBar} />
                <div className="" style={{
                    marginTop: '20px'
                }}>

                    <CarouselParallax projects={projects} />
                </div>
            </div>
        </div>
    );
}