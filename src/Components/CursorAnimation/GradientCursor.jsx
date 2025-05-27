import React, { useEffect, useRef, useMemo } from 'react';
import gsap from 'gsap';

const colors = [
    "#c32d27",
    "#f5c63f",
    "#457ec4",
    "#356fdb",
];

export default function GradientCursor({ isActive }) {
    const mouse = useRef({ x: 0, y: 0 });
    const delayedMouse = useRef({ x: 0, y: 0 });
    const rafId = useRef(null);
    const circles = useRef([]);

    const size = useMemo(() => (isActive ? 250 : 30), [isActive]);
    const delay = useMemo(() => (isActive ? 0.015 : 0.005), [isActive]);

    const lerp = (x, y, a) => x * (1 - a) + y * a;

    const manageMouseMove = (e) => {
        mouse.current = {
            x: e.clientX,
            y: e.clientY,
        };
    };

    const animate = () => {
        delayedMouse.current = {
            x: lerp(delayedMouse.current.x, mouse.current.x, 0.075),
            y: lerp(delayedMouse.current.y, mouse.current.y, 0.075),
        };

        moveCircles(delayedMouse.current.x, delayedMouse.current.y);
        rafId.current = requestAnimationFrame(animate);
    };

    const moveCircles = (x, y) => {
        circles.current.forEach((circle, i) => {
            if (!circle) return;
            gsap.set(circle, {
                x,
                y,
                xPercent: -50,
                yPercent: -50,
            });
        });
    };

    useEffect(() => {
        animate();
        window.addEventListener('mousemove', manageMouseMove);
        return () => {
            cancelAnimationFrame(rafId.current);
            window.removeEventListener('mousemove', manageMouseMove);
        };
    }, []);

    return (
        <div className="pointer-events-none fixed top-0 left-0 w-full h-full z-50">
            {[...Array(4)].map((_, i) => (
                <div
                    key={i}
                    ref={(ref) => (circles.current[i] = ref)}
                    className="rounded-full fixed top-0 left-0"
                    style={{
                        backgroundColor: colors[i],
                        width: size,
                        height: size,
                        opacity: 0.4, // Better visibility over text
                        filter: `blur(${isActive ? 20 : 4}px)`,
                        transition: `transform ${(4 - i) * delay}s linear, width 0.3s ease, height 0.3s ease, filter 0.3s ease`,
                        mixBlendMode: i === 0 ? 'exclusion' : 'normal', // Only first layer blends
                        pointerEvents: 'none',
                        zIndex: 50,
                    }}
                />
            ))}
        </div>
    );
}
