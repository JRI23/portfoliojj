import React from "react";
import '../sass/containers/home.scss';

import Header from "../layout/header";
import Socials from "../components/socials";
import Footer from "../layout/footer";

export default function Home() {
    return (
        <>
            <Header />

            <h1>J<span>J</span></h1>

            <Socials />
            <Footer />
        </>
    )
}