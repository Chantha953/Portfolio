import { FaArrowRight, FaFacebookF, FaInstagram, FaTelegramPlane } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import profile from "../assets/images/profile.png";
const About = () => {
  return (
    <main>
      <section>
        <div className="row home">
          <article className="col-12 col-md-6 d-flex justify-content-start align-items-center info" style={{ height: "100vh" }}>
            <div>
              <section>
                <span className="shadow-item py-1 px-2 fs-5 fw-medium">About Me</span>
                <h1 className="my-2 fw-bold">I'm Rey Chantha</h1>
                <span className="text-primary fw-medium" style={{ fontSize: "18px" }}>Full-Stack Developer</span>
                <p className="mt-2" style={{ fontSize: "17px" }}>
                  I’m a dedicated IT student with a strong interest in software development and system technologies. I enjoy learning how applications work, solving technical challenges, and transforming concepts into functional projects. Through hands-on practice and continuous learning, I aim to strengthen my skills and build software that is useful, reliable, and user-friendly.
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
    </main>
  )
}
export default About;