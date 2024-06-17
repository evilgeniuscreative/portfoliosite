import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import AllDesigns from "../components/designs/allDesigns";

import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/designs.css";

const Designs = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const currentSEO = SEO.find((item) => item.page === "designs");

    return (
        <React.Fragment>
            <Helmet>
                <title>{`Designs | ${INFO.main.title}`}</title>
                <meta name="description" content={currentSEO.description} />
                <meta
                    name="keywords"
                    content={currentSEO.keywords.join(", ")}
                />
            </Helmet>

            <div className="page-content">
                <NavBar active="designs" />
                <div className="content-wrapper">
                    <div className="designs-logo-container">
                        <div className="designs-logo">
                            <Logo width={46} />
                        </div>
                    </div>
                    <div className="designs-container">
                        <div className="title designs-title">
                            Things I’ve made trying to put my dent in the
                            universe.
                        </div>

                        <div className="subtitle designs-subtitle">
                            I've worked on a variety of designs over the years
                            and I'm proud of everything I've shared here. Please
                            take a look at some of my work below.
                        </div>

                        <div className="designs-list">
                            <AllDesigns />
                        </div>
                    </div>
                    <div className="page-footer">
                        <Footer />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Designs;
