import { FaTelegramPlane } from "react-icons/fa";
import { FaArrowRight, FaFacebookF, FaInstagram, FaCode, FaHeart } from "react-icons/fa6";
import { HiLightBulb } from "react-icons/hi";
import { IoIosRocket, IoMdHeart } from "react-icons/io";
import { TiHeartFullOutline } from "react-icons/ti";
import { FiGithub } from "react-icons/fi";
import profile from "../assets/images/profile.png";
import CardabtMe from "../components/CardabtMe";
import CardTechnologies from "../components/CardTechnologies";
import html from "../assets/images/html.png"
import css from "../assets/images/css.png";
import bootstrap from "../assets/images/bootstrap.png";
import js from "../assets/images/js.png";
import react from "../assets/images/react.png"
import nextJS from "../assets/images/nextJS.png"
import php from "../assets/images/php.png"
import laravel from "../assets/images/laravel.png"
import nodejs from "../assets/images/nodejs.png"
import java from "../assets/images/java.png"
import cShape from "../assets/images/cShape.png"
import sql from "../assets/images/sql.png"
import flutter from "../assets/images/flutter.png"
import figma from "../assets/images/figma.png"
import git from "../assets/images/git.png"
import github from "../assets/images/github.png"
import CardProject from "../components/CardProject";
import contact from "../assets/images/contact.png";
const Home = () => {
    return (
        <main>
            <section>
                <div className="row home">
                    <article className="col-12 col-md-6 d-flex justify-content-start align-items-center info" style={{ height: "100vh" }}>
                        <div>
                            <section>
                                <span className="fw-medium fs-5">Hello, I'm</span>
                                <h1 className="text-uppercase my-1 fw-bold">Rey Chantha</h1>
                                <span className="text-primary fw-medium" style={{ fontSize: "18px" }}>Full-Stack Developer</span>
                                <p className="mt-3" style={{ fontSize: "17px" }}>
                                    A passionate and motivated developer who enjoys creating innovative solutions, exploring different areas of technology,
                                    and continuously expanding my knowledge. My goal is to turn ideas into practical digital experiences while growing both personally and professionally.
                                </p>
                            </section>
                            <section className="mainSocial d-flex align-items-center gap-4 mt-4">
                                <a
                                    href="https://www.facebook.com/rey.chantha.2025"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btnSocial text-black shadow-item d-flex justify-content-center align-items-center"
                                    data-tooltip="Facebook"
                                    aria-label="Facebook"
                                >
                                    <FaFacebookF className="iconSocail" size={18} />
                                </a>

                                <a
                                    href="https://t.me/Rey_Chantha"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btnSocial text-black shadow-item d-flex justify-content-center align-items-center"
                                    data-tooltip="Telegram"
                                    aria-label="Telegram"
                                >
                                    <FaTelegramPlane className="iconSocail" size={20} />
                                </a>

                                <a
                                    href="https://www.instagram.com/rey_chantha/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btnSocial text-black shadow-item d-flex justify-content-center align-items-center"
                                    data-tooltip="Instagram"
                                    aria-label="Instagram"
                                >
                                    <FaInstagram className="iconSocail" size={20} />
                                </a>

                                <a
                                    href="https://github.com/Chantha953"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btnSocial text-black shadow-item d-flex justify-content-center align-items-center"
                                    data-tooltip="GitHub"
                                    aria-label="GitHub"
                                >
                                    <FiGithub className="iconSocail" size={20} />
                                </a>

                                <span
                                    style={{
                                        width: "1px",
                                        height: "30px",
                                        backgroundColor: "#d8d8d8"
                                    }}
                                />

                                <button className="btn btnNav px-4 py-1 shadow-item border-0 rounded-5">
                                    <span className="text d-flex justify-content-center align-items-center gap-1 text-primary">
                                        Hire Me <FaArrowRight className="icon" size={13} />
                                    </span>
                                </button>
                            </section>
                        </div>
                    </article>
                    <article className="col-12 col-md-6 d-flex justify-content-end align-items-center bg-pfp">
                        <div
                            className="profile shadow-item d-flex justify-content-center align-items-center rounded-circle overflow-hidden"
                            style={{
                                width: "100%",
                                maxWidth: "400px",
                                aspectRatio: "1 / 1",
                                flexShrink: 0
                            }}
                        >
                            <img
                                src={profile}
                                alt="Profile"
                                className="rounded-circle object-fit-cover"
                                style={{
                                    width: "96%",
                                    height: "96%"
                                }}
                            />
                        </div>
                    </article>
                </div>
            </section>
            <section>
                <div className="row">
                    <article className="col-12 col-md-6 sectionAbtMe">
                        <span className="fw-medium fs-5 text-primary">About Me</span>
                        <h1 className="fw-bold mt-3">Turning Ideas</h1>
                        <div className="d-flex align-items-center">
                            <h1 className="fw-bold">Into</h1>
                            <h1 className="ms-2 fw-bold text-primary">Inovation</h1>
                        </div>
                        <p>
                            I'm Rey Chantha, a Computer Science student who loves building web and mobile applications. I enjoy learning new technologies and solving challenging problems.
                        </p>
                        <button className="btn btnNav px-4 py-1 shadow-item border-0 rounded-5">
                            <span className="text d-flex justify-content-center align-items-center gap-1 text-primary">
                                View More <FaArrowRight className="icon" size={13} />
                            </span>
                        </button>
                    </article>

                    <article className="col-12 col-md-6 mainCardabtMe">
                        <div className="cardGridabtMe">
                            <CardabtMe icon={IoIosRocket} title="Build" subtitle="Modern App" />
                            <CardabtMe icon={FaCode} title="Keep" subtitle="Learning" />
                            <CardabtMe icon={HiLightBulb} title="Solve" subtitle="Problems" />
                            <CardabtMe icon={TiHeartFullOutline} title="Grow" subtitle="Together" />
                        </div>
                    </article>

                </div>
            </section>
            <section className="mainSkill">
                <article className="text-center my-5">
                    <span className="fw-medium text-primary fs-5">My Skill</span>
                    <div className="d-flex align-items-center justify-content-center mt-2">
                        <h2 className="fw-bold">Technologies I</h2>
                        <h2 className="text-primary ms-2 fw-bold">Work With</h2>
                    </div>
                    <p className="text-secondary" style={{ fontSize: "18px" }}>Modern tool and technologies to build amazing thing</p>
                </article>
                <article
                    className="technologies-container d-flex justify-content-center align-items-center gap-3 flex-wrap"
                >
                    <CardTechnologies name="HTML" img={html} />
                    <CardTechnologies name="CSS" img={css} />
                    <CardTechnologies name="Bootstrap" img={bootstrap} />
                    <CardTechnologies name="JavaScript" img={js} />
                    <CardTechnologies name="React" img={react} />
                    <CardTechnologies name="Next Js" img={nextJS} />
                    <CardTechnologies name="PHP" img={php} />
                    <CardTechnologies name="Laravel" img={laravel} />
                    <CardTechnologies name="Node Js" img={nodejs} />
                    <CardTechnologies name="Java" img={java} />
                    <CardTechnologies name="C#" img={cShape} />
                    <CardTechnologies name="Flutter" img={flutter} />
                    <CardTechnologies name="MySQL" img={sql} />
                    <CardTechnologies name="Figma" img={figma} />
                    <CardTechnologies name="Git" img={git} />
                    <CardTechnologies name="GitHub" img={github} />
                </article>
            </section>
            <section className="row align-items-center" style={{ transform: "translateY(4rem)", height: "240px" }}>
                <article className="col-12 col-md-6">
                    <span className="fw-medium text-primary fs-5">My Project</span>
                    <h2 className="fw-bold mt-3">Featured Projects</h2>
                    <p>Explore a selection of my software development work, featuring practical applications, coursework implementations, and system designs.</p>
                    <button className="btn btnNav px-4 py-1 shadow-item border-0 rounded-5">
                        <span className="text d-flex justify-content-center align-items-center gap-1 text-primary">
                            View All Project <FaArrowRight className="icon" size={13} />
                        </span>
                    </button>
                </article>
                <article className="col-12 col-md-6 d-flex justify-content-end">
                    <CardProject />
                </article>
            </section>
            <section className="row align-items-center pb-5 mainContact" style={{ transform: "translateY(12rem)" }}>
                <article className="col-12 col-md-6">
                    <img src={contact} alt="" style={{ width: "70%" }} />
                </article>
                <article className="col-12 col-md-6 text-start">
                    <span className="fw-medium text-primary fs-5">Get in Touch</span>
                    <div className="d-flex align-items-center mt-2">
                        <h2 className="fw-bold">Let's Create</h2>
                        <h2 className="fw-bold ms-2 text-primary">Something Great</h2>
                    </div>
                    <p>Have an idea or project in mind? Let's collaborate and turn your vision into a real, impactful solution.</p>
                    <button className="btn btnNav px-4 py-1 shadow-item border-0 rounded-5">
                        <span className="text d-flex justify-content-center align-items-center gap-1 text-primary">
                            Contact Me <FaArrowRight className="icon" size={13} />
                        </span>
                    </button>
                </article>
            </section>
        </main>
    )
}
export default Home;