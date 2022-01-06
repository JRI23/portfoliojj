import React from "react";
import Header from "../../components/header/header";
import './home.scss';

export default function Home() {
    return (
        <>
            <Header/>
            <div className="spacing">
                <div className="push-from-left">
                    <div className="d-flex flex-column gap-1">
                        <span>Hey there! My name is</span>
                        <h1>
                            <div className="text-trans-img">Jorai Jacobs</div>
                        </h1>
                        <h2>React front-end developer</h2>
                        <div className="d-flex gap-1">
                            <i className="fab fa-linkedin"/>
                            <i className="fab fa-github"/>
                            <i className="fab fa-gitlab"/>
                        </div>
                        <button className="btn btn-info customized-btn mt-2">Contact me</button>
                    </div>
                </div>
            </div>
        </>
    )
}