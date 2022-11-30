import React from 'react';
import Reveal from "react-awesome-reveal";
import { LazyLoadImage } from 'react-lazy-load-image-component';

// import Custom Components
import ALink from '~/components/features/custom-link';
import OwlCarousel from '~/components/features/owl-carousel';

import { introSlider } from '~/utils/data/carousel';
import { fadeInUpShorter, fadeInRightShorter, fadeInLeftShorter } from '~/utils/data/keyframes';

function IntroSection ( props ) {
    return (
        <div className="intro-section">
            <OwlCarousel adClass="owl-theme owl-nav-fade intro-slider animation-slider" options={ introSlider }>
                <div className="intro-slide1 banner banner-fixed" style={ { backgroundColor: "#b8cdce" } }>
                    <figure>
                        <LazyLoadImage
                            src="images/home/slides/1.jpg"
                            alt="intro-banner"
                            width={ 1903 }
                            height={ 800 }
                        />
                    </figure>
                    <div className="container">
                        <div className="banner-content text-center">
                            <Reveal keyframes={ fadeInUpShorter } delay={ 200 } duration={ 1200 }>
                                <h4 className="banner-subtitle text-uppercase">Women's Style</h4>
                            </Reveal>
                            <Reveal keyframes={ fadeInRightShorter } delay={ 1000 } duration={ 1000 }>
                                <h2 className="banner-title mb-2 font-weight-bold text-dark">Your perfect jewel ring</h2>
                            </Reveal>
                            <Reveal keyframes={ fadeInUpShorter } delay={ 1000 } duration={ 1200 }>
                                <p>
                                    Get Free Shipping on all order over $99.99
                            </p>
                            </Reveal>
                            <Reveal keyframes={ fadeInUpShorter } delay={ 1800 } duration={ 1000 }>
                                <ALink href="/shop" className="btn btn-dark btn-ellipse ls-m">View Collection</ALink>
                            </Reveal>
                        </div>
                    </div>
                </div>
                <div className="intro-slide2 banner banner-fixed " style={ { backgroundColor: "#f6f6f6" } }>
                    <figure>
                        <LazyLoadImage
                            src="images/home/slides/2.jpg"
                            alt="intro-banner"
                            width={ 1903 }
                            height={ 800 }
                        />
                    </figure>
                    <div className="container">
                        <div className="banner-content pb-1">
                            <Reveal keyframes={ fadeInUpShorter } delay={ 200 } duration={ 1200 }>
                                <p className="text-dark">Find the Boundaries. Push Through!</p>
                            </Reveal>
                            <Reveal keyframes={ fadeInRightShorter } delay={ 200 } duration={ 1000 }>
                                <h4 className="banner-title text-dark font-weight-bold text-uppercase">
                                    Up to <span className="text-primary">35% off</span>
                                </h4>
                            </Reveal>
                            <Reveal keyframes={ fadeInUpShorter } delay={ 1000 } duration={ 1200 }>
                                <h2 className="banner-subtitle">
                                    Earring Sale
                            </h2>
                            </Reveal>
                            <Reveal keyframes={ fadeInUpShorter } delay={ 1800 } duration={ 1000 }>
                                <ALink href="/shop" className="btn btn-ellipse btn-dark btn-outline ls-m" >View Collection</ALink>
                            </Reveal>
                        </div>
                        <div className="custom-single-image">
                            <Reveal keyframes={ fadeInLeftShorter } delay={ 800 } duration={ 1000 }>
                                <LazyLoadImage
                                    src="images/home/slides/2-1.png"
                                    alt="banner"
                                    width={ 638 }
                                    height={ 994 }
                                />
                            </Reveal>
                        </div>
                    </div>
                </div>
            </OwlCarousel >
            <div className="shape-divider">
                <div className="shape1">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="1920px"
                        height="317.318px" viewBox="0 0 1920 317.318" enableBackground="new 0 0 1920 317.318" preserveAspectRatio="none">
                        <path fillRule="evenodd" clipRule="evenodd" fill="#FFFFFF"
                            d="M1920.5,321.029L-0.493,319.064V188.854
                            c0,0,266.042,282.328,851.688,0C1483.531-115.985,1817.728,72.4,1920.5,153.396V321.029z" style={ { opacity: ".2" } }></path>
                        <path fillRule="evenodd" clipRule="evenodd" fill="#FFFFFF"
                            d="M-0.5,270.412V113.073
                            c98.208-70.839,407.683-228.759,985.305,29.007c593.667,264.928,935.688,0,935.688,0v128.332H-0.5z" style={ { opacity: ".2" } }></path>
                        <path fillRule="evenodd" clipRule="evenodd" fill="#FFFFFF" d="M1920.5,234.867c-401.555-0.201-766.128-0.385-766.128-0.385
                            s346.533-156.566,765.94-199.011c0.063-0.006,0.125-0.012,0.188-0.019V234.867z"
                            style={ { opacity: ".2" } }></path>
                        <path fillRule="evenodd" clipRule="evenodd" fill="#FFFFFF"
                            d="M-0.5,288.449V13.697
                            c163.401-0.867,337.865,32.776,510.441,125.717c160.954,86.684,317.758,63.473,422.06,59.639v88.85L-0.5,288.449z" style={ { opacity: ".2" } }></path>
                    </svg>
                </div>
                <div className="shape2">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="-0.6 23.7 100 6"
                        enableBackground="new -0.6 23.7 100 6">
                        <path fill="#FFFFFF" d="M99.4,24.5c0,0-8.7,3.7-16.1,4c-7.4,0.3-16.6-5-27.9-3.9c-8.7,0.8-9.5,4.4-23.4,4.9
                            c-7.8,0.3-17.4-4.6-23.7-5.5c-6.3-0.8-9,0.3-9,0.3v5.4h100V24.5z"></path>
                    </svg>
                </div>
            </div >
        </div >
    )
}

export default React.memo( IntroSection );