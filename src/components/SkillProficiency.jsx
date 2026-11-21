import React, { useEffect, useRef, useState } from 'react';
import {
    FaCode,
    FaMobileAlt,
    FaDesktop,
    FaServer,
    FaDatabase,
} from 'react-icons/fa';
import { RiGraduationCapLine } from 'react-icons/ri';
import '../styles/Skill.css';

const skillsData = [
    {
        name: 'Web Development',
        percentage: 90,
        icon: FaCode,
    },
    {
        name: 'Mobile Development',
        percentage: 85,
        icon: FaMobileAlt,
    },
    {
        name: 'Desktop Development',
        percentage: 80,
        icon: FaDesktop,
    },
    {
        name: 'System & Server',
        percentage: 75,
        icon: FaServer,
    },
    {
        name: 'Database',
        percentage: 85,
        icon: FaDatabase,
    },
];

const AnimatedCounter = ({ target, start }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!start) return;

        let current = 0;
        const duration = 1200;
        const stepTime = Math.max(Math.floor(duration / target), 15);

        const timer = setInterval(() => {
            current += 1;
            setCount(current);
            if (current >= target) {
                clearInterval(timer);
            }
        }, stepTime);

        return () => clearInterval(timer);
    }, [start, target]);

    return <span>{count}%</span>;
};

const SkillProficiency = () => {
    const sectionRef = useRef(null);
    const [inView, setInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setInView(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} className="w-100 skill-section">
            {/* Section Header */}
            <div
                className={`d-flex align-items-center gap-2 gap-sm-3 mb-3 mb-md-4 fade-up ${inView ? 'visible' : ''
                    }`}
            >
                <span className="shadow-item rounded-3 p-2 d-flex justify-content-center align-items-center flex-shrink-0">
                    <RiGraduationCapLine className="text-primary" size={23} />
                </span>
                <h3 className="fw-bold mb-0 section-title fs-4 fs-md-3">
                    Skill Proficiency
                </h3>
            </div>

            {/* Main Card */}
            <div
                className={`w-100 border-0 rounded-4 p-3 p-sm-4 p-lg-5 shadow-item fade-up ${inView ? "visible" : ""
                    }`}
            >
                <div className="d-flex flex-column gap-4">
                    {skillsData.map((skill, index) => {
                        const IconComponent = skill.icon;

                        return (
                            <div
                                key={skill.name}
                                className={`row align-items-center g-2 g-md-3 skill-row ${inView ? "visible" : ""
                                    }`}
                                style={{ transitionDelay: `${index * 120}ms` }}
                            >
                                {/* Icon & Skill Name */}
                                <div className="col-12 col-md-4 col-lg-3">
                                    <div className="d-flex align-items-center gap-2 gap-sm-3">
                                        <div className="skill-icon-box d-flex align-items-center justify-content-center rounded-3 flex-shrink-0">
                                            <IconComponent size={24} className="text-primary" />
                                        </div>

                                        <span className="fw-bold skill-name">
                                            {skill.name}
                                        </span>
                                    </div>
                                </div>

                                {/* Progress Bar */}
                                <div className="col-9 col-md-6 col-lg-8">
                                    <div className="progress custom-progress">
                                        <div
                                            className="progress-bar custom-progress-bar"
                                            role="progressbar"
                                            style={{
                                                width: inView ? `${skill.percentage}%` : "0%",
                                                transitionDelay: `${index * 120 + 150}ms`,
                                            }}
                                            aria-valuenow={skill.percentage}
                                            aria-valuemin="0"
                                            aria-valuemax="100"
                                            aria-label={`${skill.name} proficiency`}
                                        />
                                    </div>
                                </div>

                                {/* Percentage */}
                                <div className="col-3 col-md-2 col-lg-1 text-end">
                                    <span className="fw-bold skill-percent">
                                        <AnimatedCounter
                                            target={skill.percentage}
                                            start={inView}
                                        />
                                    </span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

        </section>
    );
};

export default SkillProficiency;