import React from "react";
import { FaPhoneAlt, FaLinkedinIn, FaGithubAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import "./contact.scss";

const Contact = () => {
    return (
        <div id="contact">
            <ul>
                <li>
                    <a className="icon-wrap phone" href="tel:951-500-6991">
                        <FaPhoneAlt />
                    </a>
                </li>
                <li>
                    <a
                        className="icon-wrap mail"
                        href="mailto:stanley316868@gmail.com"
                        target="blank"
                    >
                        <IoMdMail />
                    </a>
                </li>
                <li>
                    <a
                        className="icon-wrap linkedin"
                        href="https://www.linkedin.com/in/youwei-yang-a49701156/"
                        target="blank"
                    >
                        <FaLinkedinIn />
                    </a>
                </li>
                <li>
                    <a
                        className="icon-wrap github"
                        href="https://github.com/yyang31"
                        target="blank"
                    >
                        <FaGithubAlt />
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Contact;
