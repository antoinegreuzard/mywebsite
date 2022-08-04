import React from "react";
// import heroImg from "../../../img/hero/antoine-greuzard.jpg";
import heroImg from '../../../img/hero/antoine-greuzard.jpg';
import heroImgMobile from "../../../img/hero/antoine-greuzard-mobile.jpg";
import heroImgwebp from '../../../img/hero/antoine-greuzard.webp';
import heroImgMobilewebp from "../../../img/hero/antoine-greuzard-mobile.webp";
import cv from "../../../img/antoine-greuzard-CV.pdf";

const heroContent = {
    heroImage: heroImg,
    heroMobileImage: heroImgMobile,
    heroTitleName: "Antoine Greuzard",
    heroDesignation: "Développeur web",
    heroDescriptions: `Je me présente, je suis Antoine Greuzard, développeur web, principalement sur WordPress. Je me suis lancé très récemment dans le monde de l'entreprenariat, j'ai décidé alors de travailler en partenariat avec des agences web pour les épauler.`,
    heroBtn: "Mon cv",
};

const Hero = () => {
    return (
        <>
            <div className="row home-details-container align-items-center">
                <div
                    className="col-lg-4 bg position-fixed d-none d-lg-block"
                    style={{
                        backgroundImage: `url(https://antoinegreuzard.fr${
                            heroContent.heroImage
                        })`,
                    }}
                ></div>
                <div className="col-12 col-lg-8 offset-lg-4 home-details  text-center text-lg-start">
                    <div>
                        <picture>
                            <source srcSet={heroContent.heroImgMobilewebp} type="image/webp"/>
                            <img
                                src={heroContent.heroMobileImage}
                                className="img-fluid main-img-mobile d-sm-block d-lg-none"
                                alt="Antoine Greuzard" rel="preload" as="image"
                            />
                        </picture>
                        <h1 className="text-uppercase poppins-font">
                            {heroContent.heroTitleName}.
                            <span> {heroContent.heroDesignation}</span>
                        </h1>
                        <p className="open-sans-font">{heroContent.heroDescriptions}</p>
                        <a className="button" href={cv} download>
                            <span className="button-text">{heroContent.heroBtn}</span>
                            <span className="button-icon fa fa-download"></span>
                        </a>
                    </div>
                </div>
            </div>
            {/* End home-details-container */}
        </>
    );
};

export default Hero;
