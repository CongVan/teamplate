import React from 'react';
import Reveal from "react-awesome-reveal";
import { LazyLoadImage } from 'react-lazy-load-image-component';

// import Custom Components
import ALink from '~/components/features/custom-link';
import OwlCarousel from '~/components/features/owl-carousel';

import { introSlider } from '~/utils/data/carousel';
import { fadeInUpShorter, fadeInRightShorter, fadeInLeftShorter } from '~/utils/data/keyframes';

function IntroSection() {
    return (
        <section className="intro-section">
            <div className="container">
                <div className="grid">
                    <div className="grid-item height-x2">
                        <Reveal keyframes={ fadeInRightShorter } delay={ 300 } triggerOnce>
                            <OwlCarousel adClass="intro-slider owl-carousel owl-theme owl-full-height owl-dot-inner owl-dot-white owl-full-height animation-slider"
                                options={ introSlider }>
                                <div
                                    className="intro-slide intro-slide1 banner banner-radius banner-fixed">
                                    <figure>
                                        <LazyLoadImage effect="opacity" src="./images/home/slides/1.jpg" width="580" height="510"
                                            alt="banner" style={ { backgroundColor: "#232024" } } />
                                    </figure>
                                    <div className="banner-content y-50">
                                        <Reveal keyframes={ fadeInRightShorter } duration={ 1000 }>
                                            <h4 className="banner-subtitle font-weight-bold text-primary ls-1">New Arrivals</h4>
                                        </Reveal>

                                        <Reveal keyframes={ fadeInUpShorter } delay={ 500 } duration={ 1000 }>
                                            <h3 className="banner-title text-white ls-s font-weight-bold">Biometric<br />Fingerprints<br />Padlock</h3>
                                        </Reveal>

                                        <Reveal keyframes={ fadeInUpShorter } delay={ 1000 } duration={ 1000 }>
                                            <ALink href="/shop" className="btn btn-link btn-underline btn-white">Shop now<i className="d-icon-arrow-right"></i></ALink>
                                        </Reveal>
                                    </div>
                                </div>
                                <div className="intro-slide intro-slide2 banner banner-fixed banner-radius">
                                    <figure>
                                        <LazyLoadImage effect="opacity" src="./images/home/slides/2.jpg" width="580" height="510"
                                            alt="banner" style={ { backgroundColor: "#efefef" } } />
                                    </figure>
                                    <div className="banner-content y-50">
                                        <Reveal keyframes={ fadeInRightShorter }>
                                            <div>
                                                <h4 className="banner-subtitle  font-weight-bold text-primary text-uppercase ls-1">
                                                    New Collection </h4>

                                                <Reveal keyframes={ fadeInRightShorter }>
                                                    <h3 className="banner-title font-weight-bold mb-6">Fashionable<br />partner</h3>
                                                    <ALink className="btn btn-link btn-underline btn-dark" href="/shop">Shop now<i
                                                        className="d-icon-arrow-right"></i></ALink>
                                                </Reveal>
                                            </div>
                                        </Reveal>
                                    </div>
                                </div>
                            </OwlCarousel>
                        </Reveal>
                    </div>

                    <div className="grid-item height-x1">
                        <Reveal keyframes={ fadeInLeftShorter } delay={ 300 } triggerOnce>
                            <div className="category category-absolute text-dark overlay-zoom banner-radius" style={ { backgroundColor: "#fbfbfb" } }>
                                <ALink href={ { pathname: "/shop", query: { category: "for-fitness" } } }>
                                    <figure className="category-media">
                                        <LazyLoadImage effect="opacity" src="./images/home/categories/1.jpg" alt="category" width="280"
                                            height="245" />
                                    </figure>
                                </ALink>
                                <div className="category-content">
                                    <h4 className="category-name">For Fitness</h4>
                                </div>
                            </div>
                        </Reveal>
                    </div>

                    <div className="grid-item height-x1">
                        <Reveal keyframes={ fadeInLeftShorter } delay={ 300 } triggerOnce>
                            <div className="category category-absolute text-dark overlay-zoom banner-radius" style={ { backgroundColor: "#f5f5f5" } }>
                                <ALink href={ { pathname: "/shop", query: { category: "brand-sale" } } }>
                                    <figure className="category-media">
                                        <LazyLoadImage effect="opacity" src="./images/home/categories/2.jpg" alt="category" width="280"
                                            height="245" />
                                    </figure>
                                </ALink>
                                <div className="category-content">
                                    <h4 className="category-name">Brand Sale</h4>
                                </div>
                            </div>
                        </Reveal>
                    </div>

                    <div className="grid-item height-x1">
                        <Reveal keyframes={ fadeInLeftShorter } delay={ 300 } triggerOnce>
                            <div className="category category-absolute text-white overlay-zoom banner-radius" style={ { backgroundColor: "#191d25" } }>
                                <ALink href={ { pathname: "/shop", query: { category: "top-watches" } } }>
                                    <figure className="category-media">
                                        <LazyLoadImage effect="opacity" src="./images/home/categories/3.jpg" alt="category" width="280"
                                            height="245" />
                                    </figure>
                                </ALink>
                                <div className="category-content">
                                    <h4 className="category-name">Top Watches</h4>
                                </div>
                            </div>
                        </Reveal>
                    </div>

                    <div className="grid-item height-x1">
                        <Reveal keyframes={ fadeInLeftShorter } delay={ 300 } triggerOnce>
                            <div className="category category-absolute text-white overlay-zoom banner-radius" style={ { backgroundColor: "#cc8e70" } }>
                                <ALink href={ { pathname: "/shop", query: { category: "sneakers" } } }>
                                    <figure className="category-media">
                                        <LazyLoadImage effect="opacity" src="./images/home/categories/4.jpg" alt="category" width="280"
                                            height="245" />
                                    </figure>
                                </ALink>
                                <div className="category-content">
                                    <h4 className="category-name">Sneakers</h4>
                                </div>
                            </div>
                        </Reveal>
                    </div>

                    <div className="grid-item height-x1 w-2 order-lg-8">
                        <Reveal keyframes={ fadeInUpShorter } delay={ 300 } triggerOnce>
                            <div className="banner banner-fixed intro-banner1 overlay-zoom banner-radius" style={ { backgroundColor: "#f5f5f5" } }>
                                <figure>
                                    <LazyLoadImage effect="opacity" src="./images/home/categories/5.jpg" alt="category" width="580"
                                        height="245" />
                                </figure>
                                <div className="banner-content text-right y-50">
                                    <h4 className="banner-title mb-2 font-weight-bold text-dark">Springwear Sale</h4>
                                    <p className="mb-0 ls-m">Our vision is to supply the best<br />
                            equipment & expertise within the arb<br />
                                most importantly, to keep our<br />
                                    customers at the heart of all we do.</p>
                                </div>
                            </div>
                        </Reveal>
                    </div>

                    <div className="grid-item height-x1 order-md-9 w-sm-2">
                        <Reveal keyframes={ fadeInUpShorter } delay={ 300 } triggerOnce>
                            <div className="category category-absolute text-dark overlay-zoom banner-radius" style={ { backgroundColor: "#e2e7f1" } }>
                                <ALink href={ { pathname: "/shop", query: { category: "for-kids" } } }>
                                    <figure className="category-media">
                                        <LazyLoadImage effect="opacity" src="./images/home/categories/6.jpg" alt="category" width="280"
                                            height="245" />
                                    </figure>
                                </ALink>
                                <div className="category-content">
                                    <h4 className="category-name">For Kids</h4>
                                </div>
                            </div>
                        </Reveal>
                    </div>

                    <div className="grid-item height-x1 order-lg-10 w-sm-2">
                        <Reveal keyframes={ fadeInUpShorter } delay={ 300 } triggerOnce>
                            <div className="banner banner-fixed intro-banner2 banner-radius overlay-zoom banner-radius" style={ { backgroundColor: "#aa4722" } }>
                                <figure>
                                    <LazyLoadImage effect="opacity" src="./images/home/categories/7.jpg" alt="category" width="280"
                                        height="245" />
                                </figure>
                                <div className="banner-content w-100 x-50 y-50 text-center pl-2 pr-2">
                                    <h4 className="banner-title text-uppercase font-weight-bold text-white ls-s">
                                        Hey!</h4>
                                    <p className="text-white ls-s mb-0">Spend $60 and get FREE US<br />mainland
                                    delivery*<br />(Order under $60 only /$4.75)</p>
                                </div>
                            </div>
                        </Reveal>
                    </div >

                </div >
            </div >
        </section >
    )
}

export default React.memo( IntroSection );