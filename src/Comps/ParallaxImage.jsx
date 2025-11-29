import React, { useEffect, useRef, useState, useCallback } from 'react';

export default function ParallaxImage({ image, height = '400px', h100 = true, speed = 40 }) {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    // Observer pour activer le parallax seulement quand visible
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.2 }
        );

        if (ref.current) observer.observe(ref.current);

        return () => {
            if (ref.current) observer.unobserve(ref.current);
        };
    }, []);

    const handleScroll = useCallback(() => {
        if (!isVisible || !ref.current) return;

        const wrapper = ref.current;
        const imageEl = wrapper.querySelector('.parallax-img');

        const rect = wrapper.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        const percent = Math.max(
            0,
            Math.min(1, (windowHeight - rect.top) / (windowHeight + rect.height))
        );

        const offset = percent * speed;

        imageEl.style.transform = `translate3d(0, -${offset}px, 0)`;
    }, [isVisible, speed]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

    return (
        <div
            ref={ref}
            style={{
                position: 'relative',
                width: '100%',
                height: h100 ? '100%' : height,
                overflow: 'hidden',
            }}

        >
            <div
                className="parallax-img"
                style={{
                    backgroundImage: `url(${image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    width: '100%',
                    height: '120%', // permet un vrai parallax sans trou
                    transform: 'translate3d(0,0,0)',
                    willChange: 'transform',
                    transition: 'transform 0.15s linear'
                }}
            ></div>
        </div>
    );
}
