import React from "react";
import './header.scss';

const Header = () => {
    return (
        <>
            <nav>
                <ul className="d-flex topnav gap-2">
                    <li><a href="/">Home</a></li>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Work</a></li>
                </ul>
            </nav>
        </>
    )
}

export default Header;