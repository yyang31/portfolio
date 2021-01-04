import React from "react";
import { FaPhoneAlt, FaLinkedinIn, FaGithubAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import "./contact.scss";

const Contact = () => {
    return (
        <div id="contact">
            <ul>
                <li className="phone">
                    <FaPhoneAlt />
                </li>
                <li className="mail">
                    <IoMdMail />
                </li>
                <li className="linkedin">
                    <FaLinkedinIn />
                </li>
                <li className="github">
                    <FaGithubAlt />
                </li>
            </ul>
        </div>
    );
};

export default Contact;
