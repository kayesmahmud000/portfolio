'use client';
import useIsMobile from '@/hook/useIsMobile';
import React, { useEffect, useRef } from 'react';

const ScrollProgressIndicator = () => {
    const scrollBarRef = useRef<HTMLDivElement>(null);
const isMobile = useIsMobile();
    useEffect(() => {
        const handleScroll = () => {
            if (scrollBarRef.current) {
                const { scrollHeight, clientHeight } = document.documentElement;
                const scrollableHeight = scrollHeight - clientHeight;
                const scrollY = window.scrollY;
                const scrollProgress = (scrollY / scrollableHeight) * 100;

                scrollBarRef.current.style.transform = `translateY(-${
                    100 - scrollProgress
                }%)`;
            }
        };

        handleScroll();

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    if(isMobile) return null
    return (
        <div className="fixed z-[99999] top-[50svh] right-[2%] -translate-y-1/2 w-1.5 h-[100px] rounded-full bg-gray-300 overflow-hidden">
            <div
                className="w-full bg-red-700 rounded-full h-full transition-transform duration-200"
                ref={scrollBarRef}
            ></div>
        </div>
    );
};

export default ScrollProgressIndicator;
