import React from "react";
import './header.scss';

const Header = () => {
    return (
        <>
            <nav className="custom-navbar">
                <div className="max-width d-flex align-items-center justify-content-between">
                    <div className="logojorai"><a href="/">J<span>JDesign.</span></a></div>
                    <ul className="link-list d-flex justify-content-around gap-3 mb-0">
                        <li><a href="/">Home</a></li>
                        <li><a href="/">About</a></li>
                        <li><a href="/">Work</a></li>
                        <li><a href="/">Skills</a></li>
                        <li><a href="/">Contact</a></li>
                    </ul>
                </div>
            </nav>

        </>
    )
}

export default Header;