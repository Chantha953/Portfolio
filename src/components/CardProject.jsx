import { useState } from "react";
import project1 from "../assets/images/project1.png";
import project2 from "../assets/images/project2.png";
import project3 from "../assets/images/project3.png";
import project4 from "../assets/images/project4.png";
import project5 from "../assets/images/project5.png";
import project6 from "../assets/images/project6.png";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const projects = [project1, project5, project3,project4,project2,project6];

const CardProject = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState("next");

    const handleSlide = (step) => {
        setDirection(step > 0 ? "next" : "prev");

        setCurrentIndex((prev) =>
            (prev + step + projects.length) % projects.length
        );
    };

    return (
        <article className="project-slider d-flex justify-content-center align-items-center shadow-item rounded-4 p-3 gap-2 w-100">

            <button
                type="button"
                className="project-arrow btn border-0 d-flex justify-content-center align-items-center p-1 shadow-item rounded-circle"
                onClick={() => handleSlide(-1)}
                aria-label="Previous project"
            >
                <IoIosArrowBack className="text-secondary" size={20} />
            </button>

            <div className="project-image-wrapper">
                <div
                    key={currentIndex}
                    className={`project-slide ${direction}`}
                >
                    <img
                        src={projects[currentIndex]}
                        alt={`Project ${currentIndex + 1}`}
                        className="project-image"
                    />
                </div>
            </div>

            <button
                type="button"
                className="project-arrow btn border-0 d-flex justify-content-center align-items-center p-1 shadow-item rounded-circle"
                onClick={() => handleSlide(1)}
                aria-label="Next project"
            >
                <IoIosArrowForward className="text-secondary" size={20} />
            </button>

        </article>
    );
};

export default CardProject;