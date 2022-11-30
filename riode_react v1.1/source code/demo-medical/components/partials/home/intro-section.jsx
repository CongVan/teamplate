import React from 'react';
import Reveal from "react-awesome-reveal";
import { LazyLoadImage } from 'react-lazy-load-image-component';

// import Custom Components
import ALink from '~/components/features/custom-link';
import OwlCarousel from '~/components/features/owl-carousel';

import { introSlider } from '~/utils/data/carousel';
import { fadeInUpShorter, fadeInRightShorter } from '~/utils/data/keyframes';

function IntroSection ( props ) {
    return (
        <section className="intro-section">
            <OwlCarousel adClass="owl-theme owl-nav-fade intro-slider animation-slider" options={ introSlider }>
                <div className="intro-slide1 banner banner-fixed" style={ { backgroundColor: "#f6f6f6" } }>
                    <figure>
                        <LazyLoadImage
                            src="images/home/slides/1.jpg"
                            alt="intro-banner"
                            width="1903"
                            height="741"
                        />
                    </figure>
                    <div className="container">
                        <div className="banner-content pb-1">
                            <Reveal keyframes={ fadeInRightShorter } delay={ 200 } duration={ 1000 }>
                                <h2 className="banner-title mb-3 ls-m">
                                    <strong className="text-uppercase">Big Sale</strong> Medical Equips
                            </h2>
                            </Reveal>
                            <Reveal keyframes={ fadeInUpShorter } delay={ 1000 } duration={ 1200 }>
                                <h4 className="banner-subtitle text-uppercase mb-2">
                                    Up to <strong>50% off</strong>
                                </h4>
                            </Reveal>
                            <Reveal keyframes={ fadeInUpShorter } delay={ 1000 } duration={ 1200 }>
                                <p>
                                    Free Shipping on all Products over <span className="text-secondary font-weight-bold">$99.00</span>
                                </p>
                            </Reveal>
                            <Reveal keyframes={ fadeInUpShorter } delay={ 1800 } duration={ 1000 }>
                                <ALink href="/shop" className="btn btn-primary btn-rounded d-inline-flex align-items-center">Shop Now<i className="d-icon-arrow-right"></i></ALink>
                            </Reveal>
                        </div>
                    </div>
                </div>
                <div className="intro-slide2 banner banner-fixed " style={ { backgroundColor: "#f6f6f6" } }>
                    <figure>
                        <LazyLoadImage
                            src="images/home/slides/2.jpg"
                            alt="intro-banner"
                            width="1903"
                            height="741"
                        />
                    </figure>
                    <div className="container">
                        <div className="banner-content pb-1">
                            <Reveal keyframes={ fadeInRightShorter } delay={ 200 } duration={ 1000 }>
                                <h4 className="banner-subtitle mb-3 text-uppercase">
                                    Get up to <strong>30% off</strong>
                                </h4>
                            </Reveal>
                            <Reveal keyframes={ fadeInUpShorter } delay={ 1000 } duration={ 1200 }>
                                <h2 className="banner-title mb-3">
                                    Roentgenometer
                            </h2>
                            </Reveal>
                            <Reveal keyframes={ fadeInUpShorter } delay={ 1000 } duration={ 1200 }>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing <br />
                                ididunt ut labore et dolore magna aliqua.
                            </p>
                            </Reveal>
                            <Reveal keyframes={ fadeInUpShorter } delay={ 1800 } duration={ 1000 }>
                                <ALink href="/shop" className="btn btn-rounded btn-primary d-inline-flex align-items-center">Shop Now<i className="d-icon-arrow-right"></i></ALink>
                            </Reveal>
                        </div>
                    </div>
                </div>
            </OwlCarousel >
            <div className="shape-divider">
                <div className="shape shape1">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="-3.188 9.063 100 10.875" enableBackground="new -3.188 9.063 100 10.875">
                        <path fill="#231F20" d="M-3.188,11.513c0,0,29.888,2.44,42.861,6.364c12.973,3.922,35.721,0.281,43.613-2.004 c7.188-2.082,13.525-6.801,13.525-6.801v21.805l-100,0.676V11.513z"></path>
                    </svg>
                </div>
                <div className="shape shape2">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 100 7.938" enableBackground="new 0 0 100 7.938" >
                        <path fill="#ffffff" d="M100,29.986H0V1.836c0,0,5.66-0.597,22.239,1.458c10.008,1.24,26.036,4.428,43.959,4.428 C87.355,7.722,100,0.013,100,0.013V29.986z"></path>
                    </svg>
                </div>
            </div>
        </section>
    )
}

export default React.memo( IntroSection );