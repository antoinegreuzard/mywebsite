import React from 'react';
import loadable from '@loadable/component'
import {Head} from '@inertiajs/inertia-react';
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";
const Hero = loadable(() => import('@/Components/hero/Hero'))
const Index = loadable(() => import('@/Components/about/index'))
const Address = loadable(() => import('@/Components/Address'))
const Portfolio = loadable(() => import('@/Components/portfolio/Portfolio'))
const Contact = loadable(() => import('@/Components/Contact'))
const Social = loadable(() => import('@/Components/Social'))
const SwitchDark = loadable(() => import('@/Components/switch/SwitchDark'))
const CustomCursor = loadable(() => import('@/Components/CustomCursor'))

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faBriefcase, faEnvelope } from '@fortawesome/free-solid-svg-icons'

const menuItem = [{icon: faHome, menuName: "Accueil"}, {icon: faUser, menuName: "CV"}, {
    icon: faBriefcase,
    menuName: "Portfolio"
}, {icon: faEnvelope, menuName: "Contact"}];

export default function Welcome() {
    return (<>
            <CustomCursor />
            <Head title="Welcome"/>
            <div className="yellow">
                <SwitchDark/>
                <Tabs>
                    <div className="header">
                        <TabList className=" icon-menu  revealator-slideup revealator-once revealator-delay1">
                            {menuItem.map((item, i) => (<Tab className="icon-box" key={i}>
                                    <i><FontAwesomeIcon icon={item.icon}/></i>
                                </Tab>))}
                        </TabList>
                    </div>
                    {/* End Menu Content */}

                    <div className="tab-panel_list">
                        {/* Hero Content Starts */}
                        <TabPanel className="home ">
                            <div
                                className="container-fluid main-container container-home p-0"
                                data-aos="fade-up"
                                data-aos-duration="1200"
                            >
                                <div className="color-block d-none d-lg-block"></div>
                                <Hero/>
                            </div>
                        </TabPanel>
                        {/* Hero Content Ends */}

                        {/* About Content Starts */}
                        <TabPanel className="about">
                            <div data-aos="fade-up" data-aos-duration="1200">
                                <div className="title-section text-left text-sm-center">
                                    <h1>
                                        A <span>PROPOS</span>
                                    </h1>
                                    <span className="title-bg">CV</span>
                                </div>
                                {/* End title */}
                                <Index/>
                            </div>
                        </TabPanel>
                        {/* About Content Ends */}

                        {/* Portfolio Content Starts */}
                        <TabPanel className="portfolio professional">
                            <div
                                className="title-section text-left text-sm-center
										   "
                                data-aos="fade-up"
                                data-aos-duration="1200"
                            >
                                <h1>
                                    mon <span>portfolio</span>
                                </h1>
                                <span className="title-bg">projets</span>
                            </div>
                            {/* End title */}
                            <Portfolio/>
                        </TabPanel>
                        {/* Portfolio Content Ends */}

                        {/* Contact Content Starts */}
                        <TabPanel className="contact">
                            <div
                                className="title-section text-left text-sm-center"
                                data-aos="fade-up"
                                data-aos-duration="1200"
                            >
                                <h1>
                                    mes <span>coordonnées</span>
                                </h1>
                                <span className="title-bg">contact</span>
                            </div>
                            <div
                                className="container"
                                data-aos="fade-up"
                                data-aos-duration="1200"
                            >
                                <div className="row">
                                    {/*  Left Side Starts */}
                                    <div className="col-12 col-lg-4">
                                        <h2 className="text-uppercase custom-title mb-0 ft-wt-600 pb-3">
                                            Me contacter
                                        </h2>
                                        <Address/>
                                        {/* End Address */}

                                        <Social/>
                                        {/* End Social */}
                                    </div>
                                    {/* Left Side Ends */}

                                    {/*  Contact Form Starts  */}
                                    <div className="col-12 col-lg-8">
                                        <Contact/>
                                    </div>
                                    {/*  Contact Form Ends */}
                                </div>
                            </div>
                            {/* End .container */}
                        </TabPanel>
                        {/* Contact Content Ends */}
                    </div>
                </Tabs>
            </div>
        </>);
}
