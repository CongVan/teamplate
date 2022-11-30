import React from 'react';
import Reveal from "react-awesome-reveal";

// import Custom Components
import ALink from '~/components/features/custom-link';
import OwlCarousel from '~/components/features/owl-carousel';

import { fadeInUp, fadeInDownShorter, blurIn, fadeIn, fadeInLeftShorter, fadeInRightShorter } from '~/utils/data/keyframes';
import { introSlider } from '~/utils/data/carousel';

function IntroSection() {
    return (
        <OwlCarousel adClass="intro-slider animation-slider owl-nav-arrow owl-nav-fade owl-theme" options={ introSlider }>
            <div className="intro-slide1 banner banner-fixed"
                style={ { backgroundImage: `url(./images/home/slides/1.jpg)`, backgroundColor: "#212629" } }>
                <div className="container">
                    <div className="banner-content">
                        <Reveal keyframes={ fadeInDownShorter } duration={ 1200 } fraction={ .6 }>
                            <h4 className="banner-subtitle mb-1 text-primary font-weight-normal">Fashion
                            Trending 2021</h4>
                        </Reveal>
                        <Reveal keyframes={ fadeInDownShorter } duration={ 1200 } delay={ 200 } fraction={ .6 }>
                            <h3 className="banner-title mb-2 text-uppercase text-white">
                                LookBook</h3>
                        </Reveal>
                        <Reveal keyframes={ fadeInDownShorter } duration={ 1200 } delay={ 400 } fraction={ .6 }>
                            <p className="font-primary mb-4 text-white text-uppercase font-weight-bold">
                                Men’s Collection</p>
                        </Reveal>
                        <Reveal keyframes={ fadeInDownShorter } duration={ 1200 } delay={ 600 } fraction={ .6 }>
                            <ALink href="/shop" className="btn btn-rounded btn-outline btn-white">Shop
                            now<i className="d-icon-arrow-right"></i></ALink>
                        </Reveal>
                    </div>
                </div>
            </div>
            <div className="intro-slide2 banner banner-fixed"
                style={ { backgroundImage: `url(./images/home/slides/2.jpg)`, backgroundColor: "#abacb1" } }>
                <div className="container">
                    <div className="banner-content y-50 text-center">
                        <Reveal keyframes={ fadeIn } duration={ 1200 } fraction={ .6 }>
                            <h4 className="banner-subtitle d-inline-block mb-2 text-uppercase font-weight-bold">Yoga Clothing</h4>
                        </Reveal>
                        <Reveal keyframes={ fadeInLeftShorter } duration={ 1200 } delay={ 800 } fraction={ .6 }>
                            <h3 className="banner-title mb-3 text-white font-weight-bolder">
                                convenient wear <br /> to be flexible &amp; elastic</h3>
                        </Reveal>
                        <Reveal keyframes={ fadeInRightShorter } duration={ 1200 } delay={ 800 } fraction={ .6 }>
                            <p className="mb-9 font-weight-semi-bold">
                                FREE SHIPPING & 60-DAY FREE RETURNS</p>
                        </Reveal>
                        <Reveal keyframes={ fadeInUp } duration={ 1200 } delay={ 1300 } fraction={ .6 }>
                            <ALink href="/shop" className="btn btn-rounded btn-dark">Shop
                            now<i className="d-icon-arrow-right"></i></ALink>
                        </Reveal>
                    </div>
                </div>
            </div>
            <div className="intro-slide3 banner banner-fixed"
                style={ { backgroundImage: `url(./images/home/slides/3.jpg)`, backgroundColor: "#423d3a" } }>
                <div className="container">
                    <div className="banner-content x-50 y-50 text-center">
                        <Reveal keyframes={ fadeIn } duration={ 1200 } fraction={ .6 }>
                            <h4 className="banner-subtitle mb-5 text-primary font-tertiary font-weight-bold">New Arrivals</h4>
                        </Reveal>
                        <Reveal keyframes={ blurIn } duration={ 1500 } delay={ 800 } fraction={ .6 }>
                            <h3 className="banner-title text-white">
                                Essentials for all the<br />ways you move</h3>
                        </Reveal>
                        <Reveal keyframes={ fadeInUp } duration={ 1200 } delay={ 1100 } fraction={ .6 }>
                            <p className="mx-auto font-primary text-grey">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore.</p>
                        </Reveal>
                        <Reveal keyframes={ fadeInUp } duration={ 1200 } delay={ 1100 } fraction={ .6 }>
                            <ALink href="/shop" className="btn btn-primary"
                                data-animation-options="{'name': 'fadeInUp', 'duration': '1.2s', 'delay': '1.3s'}">Shop
                            now</ALink>
                        </Reveal>
                    </div>
                </div>
            </div>
        </OwlCarousel>
    )
}

export default React.memo( IntroSection );