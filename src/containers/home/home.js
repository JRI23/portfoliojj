import React from "react";
import Header from "../../components/header/header";
import './home.scss';

export default function Home() {
    return (
        <>
            <Header/>
            <div className="spacing">
                <div className="home-section">
                    <div className="push-from-left">
                        <h1>Hello my name is Jorai.</h1>
                        <h2>This is the start of your personal portfolio</h2>
                    </div>
                </div>
            </div>
        </>
    )
}