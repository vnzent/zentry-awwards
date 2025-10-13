import React from 'react'
import BentoCard from './BentoCard'

const Features = () => {
  return (
    <section className="bg-black pb-52">
        <div className="container mx-auto px-3 md:px-10">
            <div className="px-5 py-32">
                <p className="font-circular text-lg text-blue-50">Into the Metagame Layer</p>
            </div>
            <p className="font-circular max-w-md text-lg text-blue-50 opacity-50">Immerse yourself in a rich and ever-expanding universe where a vibrant array of products converge into an interconnected overlay experience on your world.</p>
        </div>
        <div className="border border-white/20 relative mb-7 h-96 md:h-[65vh] w-full overflow-hidden rounded-md">
            <BentoCard 
                src="videos/feature-1.mp4"
                title="radiant"
                description="A cross-platform metagame app, turning your activities across Web2 and Web3 games into a rewarding adventure."
                isComingSoon
            />
        </div>
    </section>
  )
}

export default Features