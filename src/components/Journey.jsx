
import { Fragment, useRef } from "react";
import {
    motion,
    useScroll,
    useTransform
} from "framer-motion";

import { PiGraduationCap } from "react-icons/pi";
import { FaLaptopCode, FaCode } from "react-icons/fa6";
import { RiGraduationCapLine } from "react-icons/ri";

// Timeline Point Component
const JourneyPoint = ({ progress, index, total }) => {
    const start = index / total;
    const end = (index + 1) / total;

    const scale = useTransform(
        progress,
        [start, end],
        [0.6, 1]
    );

    const opacity = useTransform(
        progress,
        [start, end],
        [0.4, 1]
    );

    return (
        <motion.span
            className="journey-point"
            style={{
                scale,
                opacity
            }}
        />
    );
};

const Journey = () => {
    const journeyRef = useRef(null);

    const journeyItems = [
        {
            date: "2022 - Present",
            title: "University Student",
            description:
                "Studying Information Technology (IT) and building real-world projects.",
            icon: PiGraduationCap
        },
        {
            date: "2023 - Present",
            title: "Self-Learning & Practice",
            description:
                "Improving skills in web, mobile, desktop development, and system administration.",
            icon: FaLaptopCode
        },
        {
            date: "2024 - Present",
            title: "Project Development",
            description:
                "Building personal and academic projects using Laravel, Flutter, C#, and more.",
            icon: FaCode
        },
    ];

    // Scroll animation
    const { scrollYProgress } = useScroll({
        target: journeyRef,
        offset: ["start 65%", "end 50%"]
    });

    const lineProgress = useTransform(
        scrollYProgress,
        [0, 1],
        [0, 1]
    );

    return (
        <div className="my-5">

            {/* Heading */}
            <div className="d-flex align-items-center gap-3 mb-4">
                <span className="shadow-item rounded-3 p-2 d-flex justify-content-center align-items-center">
                    <RiGraduationCapLine
                        className="text-primary"
                        size={23}
                    />
                </span>

                <h4 className="fw-bold mb-0">
                    My Journey
                </h4>
            </div>

            <div
                className="journey-timeline"
                ref={journeyRef}
                style={{
                    "--journey-count": journeyItems.length
                }}
            >

                {/* Background Line */}
                <div className="journey-line" />

                {/* Animated Blue Line */}
                <motion.div
                    className="journey-line-progress"
                    style={{
                        scaleY: lineProgress
                    }}
                />

                {/* Timeline Items */}
                {journeyItems.map((item, index) => {
                    const Icon = item.icon;
                    const start = index / journeyItems.length;
                    const end = (index + 1) / journeyItems.length;

                    const cardOpacity = useTransform(
                        scrollYProgress,
                        [start, end],
                        [0.2, 1]
                    );

                    const cardY = useTransform(
                        scrollYProgress,
                        [start, end],
                        [15, 0]
                    );
                    return (
                        <Fragment key={item.title}>

                            {/* Left: Point */}
                            <div
                                className="journey-point-wrapper"
                                style={{
                                    gridColumn: 1,
                                    gridRow: index + 1
                                }}
                            >
                                <JourneyPoint
                                    progress={scrollYProgress}
                                    index={index}
                                    total={journeyItems.length}
                                />
                            </div>

                            {/* Right: Card */}
                            <motion.article
                                className="journey-card shadow-item rounded-3 d-flex align-items-center"
                                style={{
                                    gridColumn: 2,
                                    gridRow: index + 1,
                                    opacity: cardOpacity,
                                    y: cardY
                                }}
                            >
                                <div className="p-4">
                                    <Icon
                                        className="text-primary"
                                        size={30}
                                    />
                                </div>

                                <div className="pe-3">
                                    <p className="m-0 fw-bold text-primary">
                                        {item.date}
                                    </p>

                                    <p className="m-0 fw-bold">
                                        {item.title}
                                    </p>

                                    <p className="m-0 text-secondary">
                                        {item.description}
                                    </p>
                                </div>
                            </motion.article>

                        </Fragment>
                    );
                })}

            </div>
        </div>
    );
};

export default Journey;
