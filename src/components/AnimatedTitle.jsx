import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger)

const AnimatedTitle = ({title, containerClass}) => {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const titleAnimation = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "100 bottom",
                    end: "center bottom",
                    toggleActions: "play none none reverse"
                }
            })

            titleAnimation.to(".animated-word", {
                opacity: 1,
                transform: "translate3d(0,0,0) rotateY(0deg) rotateX(0deg)",
                ease: "power2.inOut",
                stagger: 0.05,
            })
        }, containerRef)

        return () =>  ctx.revert();
    }, [])
  return (
    <div 
        ref={containerRef}
        className={`flex flex-col gap-1 text-7xl uppercase leading-[.8] mt-5 text-center text-white sm:px-32 md:text-[6rem] ${containerClass}`}>
        {title.split('<br />').map((line, index) => (
            <div key={index} className="flex justify-center items-center max-w-full flex-wrap gap-2 px-10 md:gap-3">
                {line.split(" ").map((word, i) => (
                    <span key={i} className="animated-word" dangerouslySetInnerHTML={{ __html: word }}/>
                ))}
            </div>
        ))}
    </div>
  );
}

export default AnimatedTitle