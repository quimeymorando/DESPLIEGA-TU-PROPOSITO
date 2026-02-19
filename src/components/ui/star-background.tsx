"use client";
import React, { useState, useEffect } from "react";

export const StarBackground = () => {
    const [stars, setStars] = useState<{ id: number; top: string; left: string; size: string; opacity: number; duration: string }[]>([]);

    useEffect(() => {
        const newStars = Array.from({ length: 50 }).map((_, i) => ({
            id: i,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            size: `${Math.random() * 2 + 1}px`, // 1px to 3px
            opacity: Math.random() * 0.7 + 0.3, // 0.3 to 1.0
            duration: `${Math.random() * 3 + 2}s`, // 2s to 5s
        }));
        setStars(newStars);
    }, []);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {stars.map((star) => (
                <div
                    key={star.id}
                    className="absolute rounded-full bg-white animate-pulse"
                    style={{
                        top: star.top,
                        left: star.left,
                        width: star.size,
                        height: star.size,
                        opacity: star.opacity,
                        animationDuration: star.duration,
                    }}
                />
            ))}
            {/* Optional: Add a subtle gradient overlay to soften it */}
            <div className="absolute inset-0 bg-gradient-to-t from-celestial-deep via-transparent to-transparent opacity-40"></div>
        </div>
    );
};
