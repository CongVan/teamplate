import React from 'react';
import Reveal from "react-awesome-reveal";
import { LazyLoadImage } from 'react-lazy-load-image-component';

// import Custom Components
import ALink from '~/components/features/custom-link';
import OwlCarousel from '~/components/features/owl-carousel';

import { introSlider } from '~/utils/data/carousel';
import { fadeInUpShorter, fadeInUp, fadeInLeftShorter, blurIn, pencilAnimation } from '~/utils/data/keyframes';

function IntroSection() {
    return (
        <section className="intro-section">
            <OwlCarousel adClass="owl-theme owl-nav-bg owl-dot-inner owl-dot-white owl-nav-fade intro-slider animation-slider" options={ introSlider }>
                <div className="banner banner-fixed intro-slide1" style={ { backgroundColor: "#edecec" } }>
                    <figure>
                        <LazyLoadImage effect="opacity" src="./images/home/slides/1.jpg" alt="intro-banner" width="1903"
                            height="514" />
                    </figure>
                    <div className="container">
                        <div className="banner-content y-50">
                            <Reveal keyframes={ fadeInLeftShorter } delay={ 200 } duration={ 1200 }>
                                <h4 className="banner-subtitle font-weight-normal text-dark">Lifestyle Collection
                                </h4>
                                <Reveal keyframes={ fadeInLeftShorter } delay={ 100 } duration={ 1600 }>
                                    <h2 className="banner-title text-uppercase">For traveling</h2>
                                </Reveal>
                                <Reveal keyframes={ fadeInLeftShorter } delay={ 300 } duration={ 1000 }>
                                    <h3 className="banner-deco show-content">sale Up to <span className="text-primary ">30% Off</span></h3>
                                </Reveal>

                                <ALink className="btn btn-white btn-icon-right" href="/shop">Shop now <i
                                    className="d-icon-arrow-right"></i></ALink>
                            </Reveal>
                        </div>
                    </div>
                </div>
                <div className="banner banner-fixed intro-slide2" style={ { backgroundColor: "#edecec" } }>
                    <figure>
                        <LazyLoadImage effect="opacity" src="./images/home/slides/2.jpg" alt="intro-banner" width="1903"
                            height="514" />
                    </figure>
                    <div className="container">
                        <div className="banner-content y-50">
                            <Reveal keyframes={ fadeInUpShorter } delay={ 400 } duration={ 1400 }>
                                <h2 className="banner-title text-white font-weight-bold">
                                    Fashion Trends</h2>
                            </Reveal>

                            <Reveal keyframes={ fadeInUpShorter } delay={ 500 } duration={ 1400 }>
                                <p className="font-primary">
                                    Get Free Shipping on all orders over $75</p>
                            </Reveal>

                            <Reveal keyframes={ fadeInUpShorter } delay={ 600 } duration={ 1400 }>
                                <div className="banner-deco show-content">
                                    up to<span className="text-primary ls-normal">$100 off</span></div>
                            </Reveal>

                            <Reveal keyframes={ fadeInUp } delay={ 800 } duration={ 1300 }>
                                <ALink href="/shop" className="btn btn-white btn-icon-right">Shop
                                now <i className="d-icon-arrow-right"></i></ALink>
                            </Reveal>
                        </div>
                    </div>
                </div>
                <div className="banner banner-fixed intro-slide3" style={ { backgroundColor: "#ed711b" } }>
                    <figure>
                        <LazyLoadImage effect="opacity" src="./images/home/slides/3.jpg" alt="intro-banner" width="1903"
                            height="514" />
                    </figure>
                    <div className="container">
                        <div className="banner-content text-center x-50 y-50">
                            <Reveal keyframes={ blurIn } duration={ 1500 }>
                                <h2 className="banner-title d-inline-block ls-normal text-white text-uppercase font-weight-bolder">Lookbook 2021</h2>
                            </Reveal>

                            <Reveal keyframes={ fadeInUpShorter } duration={ 1200 } delay={ 500 }>
                                <p className="mb-7">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br />sed do eiusmod
                                tempor incididunt ut labore et dolore magna aliqua.</p>
                            </Reveal>

                            <Reveal keyframes={ fadeInUpShorter } duration={ 1200 } delay={ 700 }>
                                <ALink href="/shop" className="btn btn-outline btn-white">Go to shop</ALink>
                            </Reveal>
                        </div>
                    </div>
                </div>
            </OwlCarousel>
        </section >
    )
}

export default React.memo( IntroSection );