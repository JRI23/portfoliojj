import React from "react";
import Header from "../../components/header/header";
import './home.scss';
import img from '../../assets/casual-life-3d-young-man-in-orange-headphones-sitting-at-green-table-and-using-computer.png';

export default function Home() {
    return (
        <>
            <Header/>
            <div className="spacing">
                <div className="d-flex flex-wrap justify-content-center">
                    <div>
                        <div className="d-flex flex-column gap-1 ms-5">
                            <span>Hey there! My name is</span>
                            <h1>
                                <div><span>Jorai</span> <span className="primary-green">Jacobs</span></div>
                            </h1>
                            <h2>React front-end developer</h2>
                            <div className="d-flex gap-1">
                                <i className="fab fa-linkedin"/>
                                <i className="fab fa-github"/>
                                <i className="fab fa-gitlab"/>
                            </div>
                            <button className="btn customized-btn mt-5">Contact me</button>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center">
                        <svg className="svg-background" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                            <path fill="#57BA98" d="M39.8,-77.7C46.4,-65.2,42.8,-43.9,47.7,-29.5C52.6,-15.1,66,-7.6,72,3.5C78,14.5,76.8,29,66.9,34.9C57,40.7,38.6,37.8,26,44.1C13.4,50.4,6.7,65.8,-2.4,70C-11.6,74.3,-23.2,67.3,-32.5,59.1C-41.8,50.9,-48.7,41.5,-49.3,31.5C-49.9,21.4,-44.2,10.7,-47.6,-2C-51,-14.6,-63.5,-29.3,-62.5,-38.7C-61.5,-48,-47,-52.2,-34.4,-61.2C-21.7,-70.1,-10.8,-83.8,2.9,-88.8C16.6,-93.9,33.3,-90.2,39.8,-77.7Z" transform="translate(100 100)" />
                        </svg>
                        <img className="boy-img" alt="3d-boy-on-pc" src={img}/>
                    </div>
                </div>
            </div>
        </>
    )
}