import { FaFacebookF, FaInstagram, FaTelegramPlane } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { LiaCopyrightSolid } from "react-icons/lia";
const Footer = () => {
    return (
        <footer className="container" style={{transform :"", paddingBottom: "5rem"}}>
            <hr className="text-secondary" />
            <div className="row justify-content-between align-items-center mainFooter flex-wrap">
                <article className="col-12 col-md-6 d-flex align-items-center text-secondary">
                    <LiaCopyrightSolid />
                    <span>2026 Rey Chantha. All Rights Reserved.</span>
                </article>
                <article className="col-12 col-md-6">
                    <div className="mainSocial d-flex justify-content-end align-items-center gap-4">
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
                    </div>
                </article>
            </div>
        </footer>
    )
}
export default Footer;