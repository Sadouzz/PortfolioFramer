import React from 'react';
import useIsDesktop from '../hooks/useIsDesktop';

const StatsCard = ({
    prefix = '',
    title,
    suffix = '',
    content,
    sublabel = '',
    highlight = null,
    marginTop = '0px',
    isWide = false,
    maxHeight = '300px',
    type = "stats"
}) => {
    const isDesktop = useIsDesktop();
    return (
        <div
            className={`${isWide ? 'col-6 col-md-6 col-lg-6' : 'col-6 col-sm-6 col-md-4 col-lg-3'} mb-4 ps-0`}
            style={{ marginTop: isDesktop ? marginTop : 0 }}

        >
            <div
                className={`card bg-transparent rounded-3 border-0 shadow-sm overflow-hidden`}
                style={{
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,153,116,0.15)';
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
                }}
            >
                <div
                    className={`w-100 h-100 rounded-3 position-relative ${type}-card`}
                >

                    {/* Effet glow animé */}
                    <div
                        className="position-absolute w-100 h-100"
                        style={{
                            background: 'radial-gradient(circle at 50% 50%, rgba(178, 212, 204, 0.1) 0%, rgba(0, 153, 116, 0.05) 50%, transparent 70%)',
                            pointerEvents: 'none'
                        }}
                    />

                    <div className="card-body p-4 position-relative d-flex justify-content-between flex-column">
                        {/* Headline avec nombre */}
                        <div className="d-flex align-items-baseline mb-3">
                            {prefix && (
                                <span className="fs-4 fw-light me-2 text-muted">{prefix}</span>
                            )}

                            <h2 className="display-3 fw-light mb-0 text-yellow2">
                                {title}
                            </h2>

                            {suffix && (
                                <span
                                    className={`fs-4 fw-light ms-2 mb-2 ${type === "stats" ? "text-black" : "text-white"
                                        }`}
                                >
                                    {suffix}
                                </span>
                            )}
                        </div>


                        <div>
                            {/* Description */}
                            <p className={`mb-2 ${type === "stats" ? "text-black" : "text-white"}`} style={{ fontSize: '0.95rem', lineHeight: '1.5' }}>
                                {content}
                                {sublabel && (
                                    <span className={`mb-2 d-block  small mt-1 ${type === "stats" ? "text-black" : "text-white"}`} >{sublabel}</span>
                                )}
                            </p>

                            {/* Highlight optionnel */}
                            {highlight && (
                                <p className="mb-0 small">
                                    <span className={`mb-2 ${type === "stats" ? "text-black" : "text-white"}`}>{highlight.text}</span>{' '}
                                    <span className="fw-semibold text-yellow2">
                                        {highlight.accent}
                                    </span>
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StatsCard