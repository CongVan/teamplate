import React from 'react';
import Reveal from "react-awesome-reveal";
import { LazyLoadImage } from 'react-lazy-load-image-component';

// import Custom Components
import ALink from '~/components/features/custom-link';
import OwlCarousel from '~/components/features/owl-carousel';

import { fadeInRightShorter, blurIn, fadeInLeftShorter, fadeIn } from '~/utils/data/keyframes';
import { introSlider, serviceSlider } from '~/utils/data/carousel';

function IntroSection() {
    return (
        <>
            <section className="intro-section mb-4">
                <div className="row gutter-sm grid">
                    <div className="grid-item height-x3">
                        <OwlCarousel adClass="intro-slider owl-theme owl-dot-inner owl-dot-white owl-full-height animation-slider"
                            options={ introSlider }>
                            <div className="intro-slide1 banner banner-fixed" style={ { backgroundColor: "#eee" } }>
                                <figure>
                                    <LazyLoadImage effect="opacity" threshold={ 500 } src="./images/home/slides/1.jpg" width="580" height="460"
                                        alt="banner" />
                                </figure>
                                <div className="banner-content">
                                    <Reveal keyframes={ blurIn } duration={ 1400 }>
                                        <div>
                                            <h4 className="banner-subtitle font-weight-semi-bold mb-2">
                                                New Arrivals</h4>
                                            <h3 className="banner-title mb-2">
                                                Fashion Sale</h3>
                                            <p className="text-uppercase font-primary mb-5">
                                                Up To <span className="text-primary font-weight-bold">40%
                                            Off</span></p>
                                            <ALink href="/shop"
                                                className="btn btn-md btn-outline btn-dark mb-3">Shop
                                        now</ALink>
                                        </div>
                                    </Reveal>
                                </div>
                            </div>
                            <div className="intro-slide2 banner banner-fixed"
                                style={ { backgroundColor: "#eee" } }>
                                <figure>
                                    <LazyLoadImage effect="opacity" threshold={ 500 } src="./images/home/slides/2.jpg" width="580" height="460"
                                        alt="banner" />
                                </figure>
                                <div className="banner-content text-right">
                                    <Reveal keyframes={ fadeInRightShorter } duration={ 1600 }>
                                        <div>
                                            <span className="text-uppercase font-weight-semi-bold">Best Sellers Store</span>
                                            <h4 className="banner-subtitle text-uppercase mt-2 mb-0">for men
                                    </h4>
                                            <h3 className="banner-title mb-2">Clothes Sale</h3>
                                            <p className="text-uppercase mb-7">Starting at <strong
                                                className="text-primary">$48.00</strong></p>
                                            <ALink href="/shop"
                                                className="btn btn-md btn-white mb-3">Shop now</ALink>
                                        </div>
                                    </Reveal>
                                </div>
                            </div>
                        </OwlCarousel>
                    </div>
                    <div className="grid-item height-x1">
                        <div className="category category-banner category-absolute"
                            style={ { backgroundColor: "#edf1f2" } } >
                            <Reveal keyframes={ fadeInLeftShorter } delay={ 100 } triggerOnce>
                                <ALink href="/shop">
                                    <figure className="category-media">
                                        <LazyLoadImage effect="opacity" threshold={ 500 } src="./images/home/banner/1.jpg" alt="banner" width="290"
                                            height="147" />
                                    </figure>
                                </ALink>
                                <div className="category-content">
                                    <h4 className="category-name">Top Products</h4>
                                    <span className="category-count">
                                        <span>6</span> Products
                            </span>
                                    <ALink href="/shop" className="btn btn-underline btn-link">Shop
                                Now</ALink>
                                </div>
                            </Reveal>
                        </div>
                    </div>
                    <div className="grid-item height-x1">
                        <Reveal keyframes={ fadeInLeftShorter } delay={ 200 } triggerOnce>
                            <div className="intro-banner intro-banner2 banner banner-fixed"
                                style={ { backgroundColor: "#222" } }>
                                <figure>
                                    <LazyLoadImage effect="opacity" threshold={ 500 } src="./images/home/banner/2.jpg" alt="banner" width="290"
                                        height="147" />
                                </figure>
                                <div className="banner-content y-50 w-100 text-center">
                                    <h4 className="banner-subtitle text-uppercase text-white mb-1">Get Our Shop
                            </h4>
                                    <h3 className="banner-title text-white mb-0">Gift Ideas</h3>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                    <div className="grid-item height-x1 w-2">
                        <div className="category category-banner category-absolute text-white"
                            style={ { backgroundColor: "#a4a7a0" } } >
                            <Reveal keyframes={ fadeInLeftShorter } delay={ 300 } triggerOnce>
                                <ALink href="/shop">
                                    <figure className="category-media">
                                        <LazyLoadImage effect="opacity" threshold={ 500 } src="./images/home/banner/3.jpg" alt="banner" width="290"
                                            height="147" />
                                    </figure>
                                </ALink>
                                <div className="category-content">
                                    <h4 className="category-name" style={ { letterSpacing: "-.1px" } } > Best Seller
                            </h4>
                                    <span className="category-count text-white">
                                        <span>5</span> Products
                            </span>
                                    <ALink href="/shop" className="btn btn-underline btn-link">Shop
                                Now</ALink>
                                </div>
                            </Reveal>
                        </div>
                    </div>
                    <div className="grid-space col-1"></div>
                </div>
            </section>

            <section className="service-list">
                <Reveal keyframes={ fadeIn } triggerOnce>
                    <OwlCarousel adClass="owl-theme" options={ serviceSlider }>
                        <div className="icon-box text-center">
                            <div className="icon-box-content">
                                <h4 className="icon-box-title">Free shipping &amp; Return</h4>
                                <p>Free shipping on orders over $99</p>
                            </div>
                        </div>
                        <div className="icon-box text-center">
                            <div className="icon-box-content">
                                <h4 className="icon-box-title">Customer Support 24/7</h4>
                                <p>Instant access to perfect support</p>
                            </div>
                        </div>
                        <div className="icon-box text-center">
                            <div className="icon-box-content">
                                <h4 className="icon-box-title">100% Secure Payment</h4>
                                <p>We ensure secure payment!</p>
                            </div>
                        </div>
                    </OwlCarousel>
                </Reveal>
            </section>
        </>
    )
}

export default React.memo( IntroSection );