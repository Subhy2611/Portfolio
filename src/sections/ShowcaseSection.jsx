import { use, useRef } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
    const sectionRef = useRef(null);
    const project1Ref = useRef(null);
    const project2Ref = useRef(null);
    const project3Ref = useRef(null);

    useGSAP(() => {
        const projects = [project1Ref.current, project2Ref.current, project3Ref.current];

        projects.forEach((card, index) => {
            gsap.fromTo(card,
                {
                    y: 50,
                    opacity: 0
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    delay: 0.2 * (index + 1),
                    scrollTrigger: {
                        trigger: card,
                        start: "top bottom-=100",
                    }
                }
            )
        });

        gsap.fromTo(sectionRef.current,
            { opacity: 0 },
            { opacity: 1, duration: 3 }
        );
    }, []);

    return (
        <section id="work" ref={sectionRef} className="app-showcase">
            <div className="w-full">
                <div className="showcase-layout flex flex-col md:flex-row gap-6">
                    {/* LEFT */}
                    <div className="first-project-wrapper w-full md:w-1/2" ref={project1Ref}>
                        <div className="image-wrapper">
                            <img src="/images/p1.jpg" alt="Restaurant" />
                        </div>
                        <div className="text-content">
                            <h2>Restaurant Booking application</h2>
                            <p className="text-white-50 md:text-xl">
                                A full-stack Restaurant Booking System with a responsive frontend built using HTML & CSS. The backend is powered by Node.js, Express.js, and MongoDB, featuring secure data storage & automated email confirmations via Nodemailer.
                            </p>
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div className="project-list-wrapper flex flex-col gap-6 w-full md:w-1/2">
                        <div className="project" ref={project2Ref}>
                            <div className="image-wrapper bg-[#ffefdb]">
                                <img src="/images/project2.png" alt="Library" />
                            </div>
                            <h2>Library Management Platform</h2>
                        </div>

                        <div className="project" ref={project3Ref}>
                            <div className="image-wrapper bg-[#ffe7eb]">
                                <img src="/images/p3.png" alt="Transaction" />
                            </div>
                            <h2>Transaction Support System</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ShowcaseSection;
