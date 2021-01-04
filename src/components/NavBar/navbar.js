import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { RiHome2Line } from "react-icons/ri";
import { CgWorkAlt } from "react-icons/cg";
import { IoSchoolOutline } from "react-icons/io5";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import "./navbar.scss";

const NavBar = () => {
    const location = useLocation();

    return (
        <div id="navbar">
            <ul>
                <li className={location.pathname === "/Home" ? "active" : ""}>
                    <Link to="/Home">
                        <RiHome2Line />
                    </Link>
                </li>
                <li
                    className={
                        location.pathname === "/Education" ? "active" : ""
                    }
                >
                    <Link to="/Education">
                        <IoSchoolOutline />
                    </Link>
                </li>
                <li
                    className={
                        location.pathname === "/Experience" ? "active" : ""
                    }
                >
                    <Link to="/Experience">
                        <CgWorkAlt />
                    </Link>
                </li>
                <li
                    className={location.pathname === "/Project" ? "active" : ""}
                >
                    <Link to="/Project">
                        <AiOutlineFundProjectionScreen />
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default NavBar;
