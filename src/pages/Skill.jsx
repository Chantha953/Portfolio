import React from "react"
import { FaLaptopCode } from "react-icons/fa";
import skills from "../assets/images/skills.png";
import SkillProficiency from "../components/SkillProficiency";
import TechnologiesSkill from "../components/TechnologiesSkill";
const Skill = () => {
    return (
        <React.Fragment>
            <section>
                <div className="row home">
                    <article className="col-12 col-md-6 d-flex justify-content-start align-items-center info" style={{ height: "100vh" }}>
                        <div>
                            <section>
                                <span className="fs-6 text-uppercase fw-medium text-primary" style={{ letterSpacing: "3px" }}>My Skills</span>
                                <div className="mt-1">
                                    <h1 className="fw-bold">Technical Skills</h1>
                                </div>
                                <p style={{ fontSize: "17px" }}>
                                    Here are the technologies, frameworks, and development tools I work with, along with my current level of proficiency in each area, reflecting my practical experience, continuous learning, and growth as a developer.
                                </p>
                            </section>
                        </div>
                    </article>
                    <article className="col-12 col-md-6 d-flex justify-content-end align-items-center bg-pfp">
                        <img
                            src={skills}
                            alt="Skills"
                            className="w-100 skill"
                        />
                    </article>
                </div>
            </section>
            <section>
                <SkillProficiency />
            </section>
            <section>
                <div
                    className="d-flex align-items-center gap-2 gap-sm-3 mb-3 mb-md-4 mt-4"
                >
                    <span className="shadow-item rounded-3 p-2 d-flex justify-content-center align-items-center flex-shrink-0">
                        <FaLaptopCode  className="text-primary" size={23} />
                    </span>
                    <h3 className="fw-bold mb-0 section-title fs-4 fs-md-3">
                        Technologies & Tools
                    </h3>
                </div>
                <TechnologiesSkill/>
            </section>
        </React.Fragment>
    )
}
export default Skill;