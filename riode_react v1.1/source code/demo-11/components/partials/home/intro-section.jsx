import React from 'react';
import Reveal from "react-awesome-reveal";
import { LazyLoadImage } from 'react-lazy-load-image-component';

// import Custom Components
import ALink from '~/components/features/custom-link';
import OwlCarousel from '~/components/features/owl-carousel';

import { introSlider, serviceSlider } from '~/utils/data/carousel';
import { fadeInRightShorter, fadeIn, fadeInLeftShorter, blurIn } from '~/utils/data/keyframes';

function IntroSection() {
    return (
        <section className="intro-section">
            <div className="row">
                <div className="col-md-8">
                    <OwlCarousel adClass="owl-theme owl-dot-inner intro-slider animation-slider mb-4" options={ introSlider }>
                        <div className="banner banner-fixed intro-slide1">
                            <figure>
                                <LazyLoadImage threshold={ 500 } effect="opacity" src="./images/home/slides/1.jpg" alt="intro-banner" width="580"
                                    height="460" />
                            </figure>
                            <div className="banner-content w-100 y-50 text-left">
                                <Reveal keyframes={ fadeInLeftShorter } duration={ 1600 }>
                                    <h4
                                        className="banner-subtitle text-secondary text-uppercase font-weight-bolder">
                                        Up to 20% Off</h4>

                                    <Reveal keyframes={ fadeInLeftShorter } duration={ 1400 }>
                                        <h2 className="banner-title font-weight-bold text-white ls-m mb-7 ">
                                            Everything<br />For Your<br />Good Health.</h2>
                                    </Reveal>

                                    <ALink href="/shop"
                                        className="btn btn-dark btn-sm btn-outline ls-m">Shop Now</ALink>
                                </Reveal>
                            </div>
                        </div>
                        <div className="banner banner-fixed intro-slide2">
                            <figure>
                                <LazyLoadImage threshold={ 500 } effect="opacity" src="./images/home/slides/2.jpg" alt="intro-banner" width="580"
                                    height="460" />
                            </figure>
                            <div className="banner-content y-50 text-center">
                                <Reveal keyframes={ fadeIn } duration={ 1200 }>
                                    <h4 className="banner-subtitle  text-uppercase ls-normal">Best
                                    Sellers Store
                                </h4>
                                </Reveal>
                                <Reveal keyframes={ blurIn } duration={ 1200 } delay={ 800 }>
                                    <h2 className="banner-title  font-weight-bold">
                                        Our Greatest Hits<br /> For women
                                </h2>
                                </Reveal>
                                <Reveal keyframes={ fadeIn } duration={ 1400 } delay={ 1500 }>
                                    <p className=" ls-m text-uppercase text-dark">
                                        Starting at <span className="text-primary font-weight-semi-bold">$24.00</span></p>
                                </Reveal>
                                <Reveal keyframes={ fadeIn } duration={ 1400 } delay={ 2000 }>
                                    <ALink href="/shop" className="btn btn-outline btn-dark btn-sm ">Shop Now</ALink>
                                </Reveal>
                            </div>
                        </div>
                    </OwlCarousel>
                </div>
                <div className="col-md-4">
                    <div className="row">
                        <div className="col-md-12 col-xs-6">
                            <div className="banner banner-fixed intro-banner mb-4">
                                <figure>
                                    <LazyLoadImage threshold={ 500 } effect="opacity" src="./images/home/banners/1.jpg" alt="banner" width="280"
                                        height="220" />
                                </figure>
                                <div className="banner-content y-50">
                                    <Reveal keyframes={ fadeIn } triggerOnce>
                                        <h4 className="banner-subtitle font-weight-semi-bold text-uppercase">
                                            New In</h4>
                                        <h3 className="banner-title ls-s text-white font-weight-bold">Essentials
                                    </h3>
                                        <ALink href="/shop"
                                            className="btn btn-link btn-white btn-underline">Shop now <i
                                                className="d-icon-arrow-right"></i></ALink>
                                    </Reveal>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12 col-xs-6">
                            <div className="banner banner-fixed intro-banner mb-4">
                                <figure>
                                    <LazyLoadImage threshold={ 500 } effect="opacity" src="./images/home/banners/2.jpg" alt="banner" width="280"
                                        height="220" />
                                </figure>
                                <div className="banner-content mt-2 y-50">
                                    <Reveal keyframes={ fadeIn } triggerOnce>
                                        <h4 className="banner-subtitle text-uppercase font-weight-semi-bold">
                                            Popular
                                    </h4>
                                        <h3 className="banner-title ls-m text-white font-weight-bold">Electronics
                                    </h3>
                                        <ALink href="/shop"
                                            className="btn btn-link btn-white btn-underline">Shop now <i
                                                className="d-icon-arrow-right"></i></ALink>
                                    </Reveal>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <OwlCarousel adClass="service-list mt-4 owl-theme" options={ serviceSlider }>
                <Reveal keyframes={ fadeInRightShorter } delay={ 100 } triggerOnce>
                    <div className="icon-box icon-box-tiny text-center">
                        <div className="icon-box-content">
                            <h4 className="icon-box-title font-weight-bold">
                                <i className="icon-box-icon d-icon-layer"></i>Free Shipping
                        </h4>
                            <p>Free shipping on orders over $99.00</p>
                        </div>
                    </div>
                </Reveal>
                <Reveal keyframes={ fadeInRightShorter } delay={ 400 } triggerOnce>
                    <div className="icon-box icon-box-tiny text-center">
                        <div className="icon-box-content">
                            <h4 className="icon-box-title font-weight-bold">
                                <i className="icon-box-icon d-icon-database"></i>Customer Support
                        </h4>
                            <p>Contact us 24 hours a day, 7 days a week</p>
                        </div>
                    </div>
                </Reveal>
                <Reveal keyframes={ fadeInRightShorter } delay={ 700 } triggerOnce>
                    <div className="icon-box icon-box-tiny text-center">
                        <div className="icon-box-content">
                            <h4 className="icon-box-title font-weight-bold">
                                <i className="icon-box-icon d-icon-shoppingbag"></i>Return Guarantee
                        </h4>
                            <p>Any time back guarantee within 30 days</p>
                        </div>
                    </div>
                </Reveal>
            </OwlCarousel>
        </section>
    )
}

export default React.memo( IntroSection );