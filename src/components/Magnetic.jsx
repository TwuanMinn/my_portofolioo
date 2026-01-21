import React, { useRef, useState } from 'react';

export default function Magnetic({ children }) {
    const ref = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const { width, height, left, top } = ref.current.getBoundingClientRect();
        const centerX = left + width / 2;
        const centerY = top + height / 2;
        const moveX = (clientX - centerX) * 0.4;
        const moveY = (clientY - centerY) * 0.4;
        setPosition({ x: moveX, y: moveY });
    };

    const handleMouseLeave = () => {
        setPosition({ x: 0, y: 0 });
    };

    const { x, y } = position;

    return (
        <div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                transform: `translate(${x}px, ${y}px)`,
                transition: 'transform 0.3s cubic-bezier(0.33, 1, 0.68, 1)',
                display: 'inline-block'
            }}
        >
            {children}
        </div>
    );
}
