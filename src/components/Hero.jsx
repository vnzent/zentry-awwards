import React, { useRef, useState, useEffect} from "react";
import Button from "./Button";
import { TiLocationArrow } from "react-icons/ti";
import { useGSAP } from "@gsap/react";
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger)

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [hasClicked, setHasClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedVideos, setLoadedVideos] = useState(0);

  useGSAP(() => {
    if(hasClicked) {
      gsap.set("#next-video", { visibility: "visible"});
      gsap.to("#next-video", {
        transformOrigin: "center center",
        width: "100%",
        height: "100%",
        duration: 1,
        ease: "power1.inOut",
        onClick: () => nextVideoRef.current.play() // Bisa langsung pakai autoplay ga usa pakai onClick lagi
      })

      gsap.from("#next-video-preview", {
        transformOrigin: "center center",
        scale: 0,
        duration: 1.5,
        ease: "power1.inOut"
      })
    }
  }, {dependencies: [currentIndex], revertOnUpdate: true})

  useGSAP(() => {
    gsap.set("#video-frame", {
      clipPath: "polygon(14% 0%, 72% 0%, 90% 90%, 0% 100%)",
      borderRadius: "0 0 40% 10%"
    })

    gsap.from("#video-frame", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      borderRadius: "0 0 0 0",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#video-frame",
        start: "center center",
        end: "bottom center",
        scrub: true,
      }
    })
  })

  const totalVideos = 4;
  const nextVideoRef = useRef(null);
  const upcomingVideoIndex = (currentIndex % totalVideos) + 1;
  const getVideoSrc = (index) => `videos/hero-${index}.mp4`;

  useEffect(() => {
    if(loadedVideos === totalVideos - 1) {
      setIsLoading(false)
    }
  }, [loadedVideos]);

  const handleMiniVideoClick = () => {
    setHasClicked(true);

    // Index looping with modulo operation
    // Default Index = 1
    // 1 % 4 = 1 + 1 = 2
    // dst
    // 4 % 4 = 0 + 1 = 1
    setCurrentIndex(upcomingVideoIndex);
  };

  const handleVideoLoad = () => {
    setLoadedVideos((prev) => prev + 1);
  };

  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">

      {isLoading && (
        <div className="flex justify-center items-center absolute z-100 h-dvh w-screen overflow-hidden bg-violet-50">
            <div className="three-body">
              <div className="three-body__dot" />
              <div className="three-body__dot" />
              <div className="three-body__dot" />
            </div>
        </div>
      )}
        
      <div
        id="video-frame"
        className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75"
      >
        <div>
          <div className="mask-clip-path absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-50 size-64">
            <div
              onClick={handleMiniVideoClick}
              className="origin-center scale-50 opacity-0 transition-all duration-500 hover:opacity-100 hover:scale-100"
            >
              <video
                ref={nextVideoRef}
                src={getVideoSrc(upcomingVideoIndex)}
                autoPlay
                loop
                muted
                id="next-video-preview"
                className="size-64 origin-center scale-150 object-cover object-center"
                onLoadedData={handleVideoLoad}
              />
            </div>
          </div>
          <video
            ref={nextVideoRef}
            src={getVideoSrc(currentIndex)}
            loop
            muted
            id="next-video"
            className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-20 invisible size-64 object-cover object-center"
            onLoadedData={handleVideoLoad}
          />

          <video
            src={getVideoSrc(currentIndex)}
            autoPlay
            loop
            muted
            className="absolute left-0 top-0 size-full object-cover object-center"
            onLoadedData={handleVideoLoad}
          />
        </div>

        <h1 className="font-zentry uppercase font-black text-5xl sm:right-10 sm:text-7xl md:text-9xl lg:text-[12rem] absolute bottom-5 right-5 z-40 text-blue-75">
          GAMING
        </h1>
        <div className="absolute top-0 left-0 z-40 size-full">
          <div className="mt-24 px-5 sm:px-10">
            <h1 className="font-zentry uppercase font-black text-5xl sm:right-10 sm:text-7xl md:text-9xl lg:text-[12rem] text-blue-100">
              REDEFINE
            </h1>
            <p className="mb-5 max-w-64 font-robert-base text-blue-100">
              Enter the Metagame Layer <br /> Unleash the Play Economy
            </p>

            <Button
              id="watch-trailer"
              title="Watch Trailer"
              q
              leftIcon={<TiLocationArrow />}
              containerClass="!bg-yellow-300 flex justify-center items-center gap-1"
            />
          </div>
        </div>
      </div>
        <h1 className="font-zentry uppercase font-black text-5xl sm:right-10 sm:text-7xl md:text-9xl lg:text-[12rem] absolute bottom-5 right-5 text-black">
          GAMING
        </h1> 
    </div>
  );
};

export default Hero;
