import React from 'react'
import BentoCard from './BentoCard'
import { TiLocationArrow } from 'react-icons/ti'
import BentoTilt from './BentoTilt'

const Features = () => {
  return (
    <section className="bg-black pb-52">
        <div className="container mx-auto px-3 md:px-10">
            <div className="px-5 py-32">
                <p className="font-circular text-lg text-blue-50">Into the Metagame Layer</p>
                <p className="font-circular max-w-md text-lg text-blue-50 opacity-50">Immerse yourself in a rich and ever-expanding universe where a vibrant array of products converge into an interconnected overlay experience on your world.</p>
            </div>
            <BentoTilt className="border border-white/20 relative mb-7 h-96 md:h-[65vh] w-full overflow-hidden rounded-md">
                <BentoCard 
                    src="videos/feature-1.mp4"
                    title="radiant"
                    description="A cross-platform metagame app, turning your activities across Web2 and Web3 games into a rewarding adventure."
                    isComingSoon
                    />
            </BentoTilt>
            <div className="grid h-[135vh] grid-cols-2 grid-rows-3 gap-7">
                <BentoTilt className="relative col-span-2 overflow-hidden rounded-md transition-transform duration-300 ease-out row-span-1 md:col-span-1 md:row-span-2">
                    <BentoCard 
                        src="videos/feature-2.mp4"
                        title="zigma"
                        description="An anime and gaming-inspired NFT collection - the IP primed for expansion."
                    />
                </BentoTilt>
                <BentoTilt className="relative col-span-2 overflow-hidden rounded-md transition-transform duration-300 ease-out row-span-1 ms-32 md:col-span-1 md:ms-0">
                    <BentoCard 
                        src="videos/feature-3.mp4"
                        title="nexus"
                        description="A gamified social hub, adding a new dimension of play to social interaction for Web3 communities."
                    />
                </BentoTilt>
                <BentoTilt className="relative col-span-2 overflow-hidden rounded-md transition-transform duration-300 ease-out me-14 md:col-span-1 md:me-0">
                    <BentoCard 
                        src="videos/feature-4.mp4"
                        title="azul"
                        description="A cross-world AI Agent - elevating your gameplay to be more fun and productive."
                    />
                </BentoTilt>
                <BentoTilt className="relative col-span-1 overflow-hidden rounded-md transition-transform duration-300 ease-out">
                    <div className="flex flex-col size-full justify-between bg-violet-300 p-5">
                        <h1 className="uppercase font-black font-zentry text-4xl md:text-6xl max-w-64 text-black">more coming soon!</h1>
                        <TiLocationArrow className="m-5 scale-[5] self-end" />
                    </div>
                </BentoTilt>
                <BentoTilt className="relative col-span-1 overflow-hidden rounded-md transition-transform duration-300 ease-out">
                    <video 
                        src="videos/feature-5.mp4"
                        loop
                        muted
                        autoPlay
                        className="size-full object-cover object-center"
                    />
                </BentoTilt>
            </div>
        </div>
    </section>
  )
}

export default Features