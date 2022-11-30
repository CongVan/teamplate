import React from 'react';
import Reveal from "react-awesome-reveal";
import { LazyLoadImage } from 'react-lazy-load-image-component';

import FloatSVG from '~/components/features/float-svg';

import { fadeInLeftShorter, fadeInRightShorter } from '~/utils/data/keyframes';

function BannerSection () {

    return (
        <section className="banner-section banner pt-9">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <Reveal keyframes={ fadeInLeftShorter } delay={ 300 } duration={ 1000 } triggerOnce>
                            <div className="banner-image-wrapper">
                                <figure className="banner-image1">
                                    <FloatSVG options={ { delta: 10, speed: 1, size: 30 } }>
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                            style={ { width: "559px", height: "535px" } } id="Layer_1" x="0px" y="0px"
                                            viewBox="0 -10 559 536"
                                        >
                                            <path fill="#F5F5F5"
                                                d="M406.3,13.734C469.300,-15.404,609.500,26.578,540.400,122.146C471.200,206.945,379.900,280.319,406.300,386.934c26.400,69.533,-72.000,252.857,-269.200,-3.701C-60.100,163.135,-30.700,-5.634,137.100,0.033C304.900,5.611,337.800,14.086,406.300,13.734z">
                                            </path>
                                        </svg>
                                    </FloatSVG>
                                </figure>
                                <figure className="banner-image2">
                                    <FloatSVG options={ { delta: 15, speed: 5, size: 1 } }>
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                            style={ { width: "107px", height: "130px" } } x="0px" y="0px" viewBox="0 -15 107 137"
                                        >
                                            <path fill="#F5F5F5"
                                                d="M53,-14.414c27.600,19.279,53.300,51.276,53.300,78.876c0.000,27.600,-25.600,47.486,-53.200,28.148S0,81.1,0,53.5C0.000,40.186,25.400,-3.427,53.000,-14.414z">
                                            </path>
                                        </svg>
                                    </FloatSVG>
                                </figure>
                                <figure className="banner-image3">
                                    <LazyLoadImage
                                        src="images/home/banner/6.png"
                                        alt="banner"
                                        width={ 584 }
                                        height={ 438 }
                                    />
                                </figure>
                            </div>
                        </Reveal>
                    </div>
                    <div className="col-lg-6">
                        <Reveal keyframes={ fadeInRightShorter } delay={ 300 } duration={ 1000 } triggerOnce>
                            <div className="banner-content pr-lg-10 mr-2 ml-2 ml-lg-8 pt-7">
                                <h4 className="banner-subtitle text-uppercase">
                                    New Fashion Style
                            </h4>
                                <h2 className="banner-title font-weight-bold">
                                    We guarantee high quality of our products.
                            </h2>
                                <div className="banner-desc">
                                    <div className="textwidget mb-6">
                                        <h3 className="text-primary font-weight-bold mb-0">01.</h3>
                                        <div>
                                            <h5 className="ml-4 mb-0 ls-0">Natural Jewel</h5>
                                            <p className="font-weight-normal mb-0 ml-4">Lorem ipsum dolor sit amet,
                                            consect<br /> labore et dolore magna aliqua.</p>
                                        </div>
                                    </div>
                                    <div className="textwidget mb-6">
                                        <h3 className="text-primary font-weight-bold mb-0">02.</h3>
                                        <div>
                                            <h5 className="ml-4 mb-0 ls-0">Careful Cutting</h5>
                                            <p className="font-weight-normal mb-0 ml-4">Lorem ipsum dolor sit amet,
                                            consect<br /> labore et dolore magna aliqua.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default React.memo( BannerSection );