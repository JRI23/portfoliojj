import React from "react";
import Header from "../layout/header";
import '../sass/containers/home.scss';
import img from '../assets/casual-life-3d-young-man-in-orange-headphones-sitting-at-green-table-and-using-computer.png';
import Footer from "../layout/footer";

export default function Home() {
    return (
        <>
            <Header />

            <div className="d-flex gap-5 gap-md-0 flex-wrap flex-lg-nowrap justify-content-center container">
                <div className="d-flex flex-column gap-1">
                    <h5>Hey there! My name is</h5>
                    <h1>Jorai</h1>
                    <h2>Front-end developer</h2>
                    <div className="d-flex gap-1">
                        <a className="lin-blue" href="https://www.linkedin.com/in/jorai-jacobs-06a509229"><i className="fab fa-linkedin" /></a>
                        <a className="ghub-black" href="https://github.com/JRI23"><i className="fab fa-github" /></a>
                        <a className="glab-orange" href="https://gitlab.com/StudentJorai"><i className="fab fa-gitlab" /></a>
                    </div>
                    <button className="btn customized-btn mt-4 mt-sm-5">Contact me</button>
                </div>
                <div className="d-flex justify-content-center">
                    <img className="boy-img" alt="3d-boy-on-pc" src={img} />
                </div>
            </div>

            <Footer />
        </>
    )
}