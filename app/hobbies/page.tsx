/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";

const images = [
    { src: "/hike1.webp", width: 600, height: 450, alt: "hike" },
    { src: "/hike2.webp", width: 600, height: 651, alt: "hike2" },
    { src: "/bike1.webp", width: 600, height: 555, alt: "bike1" },
    { src: "/bike3.webp", width: 600, height: 450, alt: "bike3" },
    { src: "/ski1.webp", width: 600, height: 555, alt: "ski1" },
    { src: "/music1.webp", width: 600, height: 555, alt: "music1" },
];

export default function Hobbies() {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const openLightbox = (idx: number) => {
        setCurrentIndex(idx);
        setLightboxOpen(true);
    };

    const closeLightbox = () => setLightboxOpen(false);

    const showPrev = useCallback((e?: React.MouseEvent | KeyboardEvent) => {
        if (e && 'stopPropagation' in e) e.stopPropagation();
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    }, []);

    const showNext = useCallback((e?: React.MouseEvent | KeyboardEvent) => {
        if (e && 'stopPropagation' in e) e.stopPropagation();
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, []);

    useEffect(() => {
        if (!lightboxOpen) return;
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowLeft') showPrev(e);
            if (e.key === 'ArrowRight') showNext(e);
            if (e.key === 'Escape') closeLightbox();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [lightboxOpen, showPrev, showNext]);

    return (
        <main>
            <img
                className="bg-img"
                alt="fundusalm"
                src="/fundusalm.webp"
                srcSet="/fundusalm.webp 1920w, /fundusalm-900.webp 900w"
            />
            <div className='container'>
                <h1>What I do in my spare time</h1>
                <h2>Hiking</h2>
                <p>
                    <q>Blaue Lacke </q>- Stubai Alps (2.289m)
                </p>
                <span style={{ cursor: 'pointer' }} onClick={() => openLightbox(0)}>
                    <Image {...images[0]} />
                </span>
                <p>Ben Vrackie - Scotland (841m)</p>
                <span style={{ cursor: 'pointer' }} onClick={() => openLightbox(1)}>
                    <Image {...images[1]} />
                </span>
                <h2>Mountainbike</h2>
                <p>Stubai Alps - Tribulaun (2.369m)</p>
                <span style={{ cursor: 'pointer' }} onClick={() => openLightbox(2)}>
                    <Image {...images[2]} />
                </span>
                <p>Carnic Alps - On the way to the Sillianer Hut (2.447m)</p>
                <span style={{ cursor: 'pointer' }} onClick={() => openLightbox(3)}>
                    <Image {...images[3]} />
                </span>
                <h2>Skiing</h2>
                <p>Mieming Range - On the way to the <q>Wankspitze</q> </p>
                <span style={{ cursor: 'pointer' }} onClick={() => openLightbox(4)}>
                    <Image {...images[4]} />
                </span>
                <h2>Music</h2>
                <span style={{ cursor: 'pointer' }} onClick={() => openLightbox(5)}>
                    <Image {...images[5]} />
                </span>
            </div>

            {lightboxOpen && (
                <div style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100vw',
                    height: '100vh',
                    background: 'rgba(0,0,0,0.85)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 1000,
                }} onClick={closeLightbox}>
                    <button onClick={showPrev} style={{ position: 'absolute', left: 'calc(50% - 520px)', top: '50%', transform: 'translateY(-50%)', fontSize: 32, color: '#fff', background: 'none', border: 'none', cursor: 'pointer' }}>&#8592;</button>
                    <Image src={images[currentIndex].src} width={900} height={700} alt={images[currentIndex].alt} style={{ maxHeight: '80vh', maxWidth: '90vw', borderRadius: 8 }} />
                    <button onClick={showNext} style={{ position: 'absolute', right: 'calc(50% - 520px)', top: '50%', transform: 'translateY(-50%)', fontSize: 32, color: '#fff', background: 'none', border: 'none', cursor: 'pointer' }}>&#8594;</button>
                    <button onClick={closeLightbox} style={{ position: 'absolute', top: 30, right: 30, fontSize: 32, color: '#fff', background: 'none', border: 'none', cursor: 'pointer' }}>&#10005;</button>
                </div>
            )}

        </main>
    );
}