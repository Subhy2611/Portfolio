import React from 'react'
import TitleHeader from '../components/TitleHeader'
import { techStackIcons } from '../constants'
import TechIcon from '../components/Models/TechLogos/TechIcon'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const TechStack = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".tech-card",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.inOut",
        stagger: 0.2,
        scrollTrigger: {
          trigger: "#skills",
          start: "top center",
        },
      }
    )
  })

  return (
    <div id='skills' className='flex-center section-padding'>
      <div className='w-full h-full md:px-10 px-5'>
        <TitleHeader 
          title="My Preferred Tech Stack"
          sub="The Skills I bring to the table"
        />

        <div className='tech-grid'>
          {techStackIcons.map((icon) => (
            <div 
              key={icon.name} 
              className='tech-card card-border overflow-hidden group xl:rounded-full rounded-lg relative'
            >
              {/* Hover background fill effect */}
              <div className='tech-card-animated absolute bottom-0 left-0 w-full h-0 bg-gray-800 transition-all duration-500 ease-in-out group-hover:h-full z-0' />

              {/* Content above the fill */}
              <div className='tech-card-content relative z-10 flex flex-col items-center justify-center p-5'>
                <div className='tech-icon-wrapper'>
                  <TechIcon model={icon} />
                </div>

                <div className='padding-x w-full text-center mt-3'>
                  <p className="text-white font-medium">{icon.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TechStack
