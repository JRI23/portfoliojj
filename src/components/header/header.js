import React from "react";
import './header.scss';
import 'hamburgers/_sass/hamburgers/hamburgers.scss';

const Header = () => {


    // // Look for .hamburger
    // const hamburger = document.querySelector(".hamburger");
    // // On click
    // hamburger.addEventListener("click", function () {
    //     // Toggle class "is-active"
    //     hamburger.classList.toggle("is-active");
    //     // Do something else, like open/close menu
    // });


    return (
        <>
            <nav className="custom-navbar">
                <div className="max-width d-flex align-items-center justify-content-between">
                    <div className="logojorai"><a href="/">J<span>JDesign.</span></a></div>
                    <ul className="link-list d-flex justify-content-around align-items-center gap-3 mb-0">
                        <li className="d-none d-sm-inline-block"><a href="/">Home</a></li>
                        <li className="d-none d-sm-inline-block"><a href="/">About</a></li>
                        <li className="d-none d-sm-inline-block"><a href="/">Work</a></li>
                        <li className="d-none d-sm-inline-block"><a href="/">Skills</a></li>
                        <li className="d-none d-sm-inline-block"><a href="/">Contact</a></li>
                        <li className="d-sm-none">
                            <button className="hamburger hamburger--elastic" type="button">
                              <span className="hamburger-box">
                                <span className="hamburger-inner"/>
                              </span>
                            </button>
                        </li>
                    </ul>
                </div>
            </nav>

        </>
    )
}

export default Header;