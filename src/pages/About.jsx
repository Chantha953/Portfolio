import React from "react";
import "../styles/About.css";
import {
  FaUser,
  FaMapMarkerAlt,
  FaGraduationCap,
  FaCalendarAlt,
} from "react-icons/fa";
import { FaCode, FaRegHeart } from "react-icons/fa6";
import { IoRocketOutline } from "react-icons/io5";
import { RiBrain2Line } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";
import profile from "../assets/images/profileAbt.png";
import MyInterests from "../components/MyInterests";
import Journey from "../components/Journey";
import WhatIDo from "../components/WhatIdo";
const About = () => {
  return (
    <React.Fragment>
      <section>
        <div className="row home">
          <article className="col-12 col-md-6 d-flex justify-content-start align-items-center info" style={{ height: "100vh" }}>
            <div>
              <section>
                <span className="fs-6 text-uppercase fw-medium text-primary" style={{ letterSpacing: "3px" }}>About Me</span>
                <div className="d-flex align-items-center mt-1">
                  <h1 className="fw-bold">Get to Know</h1>
                  <h1 className="fw-bold ms-2 text-primary">Me</h1>
                </div>
                <p style={{ fontSize: "17px" }}>
                  I’m Rey Chantha, a dedicated <span className="fw-bold">Full-Stack Developer</span> with a passion for building innovative and practical digital solutions. I enjoy creating seamless user experiences, exploring modern technologies, and continuously developing my skills to turn ideas into impactful applications.
                </p>
              </section>
              <section className="mainSocial d-flex align-items-center gap-4 mt-4 flex-wrap">
                <button className="btn border-0 d-flex align-items-center gap-2 shadow-item rounded-3 fw-medium"><FaCode className="text-primary" /> Developer</button>
                <button className="btn border-0 d-flex align-items-center gap-2 shadow-item rounded-3 fw-medium"><RiBrain2Line className="text-primary" />Problem Solver</button>
                <button className="btn border-0 d-flex align-items-center gap-2 shadow-item rounded-3 fw-medium"><IoRocketOutline className="text-primary" />Innovator</button>
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

      <section className="row personal-info-section">
        <div className="col-12 col-lg-6">
          <div className="d-flex align-items-center gap-3 mb-4">
            <span
              className="shadow-item rounded-3 p-2 d-flex justify-content-center align-items-center"
            >
              <FaRegUser className="text-primary" size={23} />
            </span>

            <h4 className="fw-bold mb-0">
              Personal Information
            </h4>
          </div>

          <div className="personal-info-card shadow-item rounded-4 p-3">
            {[
              {
                icon: FaUser,
                label: "Full Name",
                value: "Rey Chantha",
              },
              {
                icon: FaCode,
                label: "Role",
                value: "Full-Stack Developer",
              },
              {
                icon: FaMapMarkerAlt,
                label: "Location",
                value: "Phnom Penh, Cambodia",
              },
              {
                icon: FaGraduationCap,
                label: "Education",
                value: "Information Technology (IT)",
              },
              {
                icon: FaCalendarAlt,
                label: "Experience",
                value: "Learning & Building",
              },
            ].map((item, index, arr) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className={`personal-info-row ${index !== arr.length - 1
                    ? "personal-info-border"
                    : ""
                    }`}
                >
                  <span className="personal-info-icon">
                    <Icon />
                  </span>

                  <span className="personal-info-label">
                    {item.label}
                  </span>

                  <span className="personal-info-value">
                    {item.value}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
        <div className="col-12 col-lg-6">
          <div className="d-flex align-items-center gap-3 mb-4 ps-fav">
            <span
              className="shadow-item rounded-3 p-2 d-flex justify-content-center align-items-center"
            >
              <FaRegHeart className="text-primary" size={23} />
            </span>

            <h4 className="fw-bold mb-0">
              Personal Favorites
            </h4>
          </div>
          <MyInterests />
        </div>
      </section>
      <section>
        <Journey />
      </section>
      <section className="my-5">
        <WhatIDo />
      </section>
    </React.Fragment>
  )
}
export default About;