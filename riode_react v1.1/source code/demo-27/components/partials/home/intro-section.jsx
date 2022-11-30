import React from 'react';
import Reveal from "react-awesome-reveal";
import { LazyLoadImage } from 'react-lazy-load-image-component';

// import Custom Components
import ALink from '~/components/features/custom-link';
import OwlCarousel from '~/components/features/owl-carousel';

import { introSlider } from '~/utils/data/carousel';
import { fadeInUpShorter, fadeInRightShorter, fadeInDownShorter, fadeInLeftShorter } from '~/utils/data/keyframes';

function IntroSection() {
    return (
        <section className="intro-section container">
            <div className="row grid">
                <div className="grid-item col-lg-8 col-sm-6 height-x2">
                    <Reveal keyframes={fadeInRightShorter} delay={400} duration={1000} className="h-100">
                        <OwlCarousel adClass="intro-slider animation-slider owl-carousel owl-theme owl-dot-inner row cols-1 gutter-no" options={introSlider}>
                            <div className="intro-slide1 banner banner-fixed" style={{ backgroundColor: '#1f1f1f' }}>
                                <figure>
                                    <LazyLoadImage
                                        src="./images/home/slides/1.jpg"
                                        alt="Intro Slider"
                                        effect="opacity"
                                        width="100%"   //785
                                        height="auto"   //433
                                    />
                                </figure>
                                <div className="banner-content y-50">
                                    <h4 className="banner-subtitle mb-0">Over 200 Products
                                            with discounts</h4>
                                    <h3 className="banner-title text-uppercase">Camera Sale
                                        </h3>
                                    <p className="banner-price text-uppercase mb-5">starting at&nbsp;
                                            <span><sup>$</sup>299.<sup>99</sup></span></p>
                                    <ALink href="/shop" className="btn btn-outline btn-white btn-md mb-2 btn-rounded">Shop
                                            now</ALink>
                                </div>
                            </div>
                            <div className="intro-slide2 banner banner-fixed" style={{ backgroundColor: '#f5f6f8' }}>
                                <figure>
                                    <LazyLoadImage
                                        src="./images/home/slides/1-1.jpg"
                                        alt="Intro Slider"
                                        effect="opacity"
                                        width="100%"   //785
                                        height="auto"   //433
                                    />
                                </figure>
                                <div className="banner-content w-100 x-50 text-center">
                                    <h3 className="banner-title ls-m">iPhone X.</h3>
                                    <h4 className="banner-subtitle mb-5 font-weight-normal text-body">Find the best
                                            super powerful for you!</h4>
                                </div>
                            </div>
                        </OwlCarousel>
                    </Reveal>
                </div>
                <div className="grid-item col-lg-4 col-sm-6 height-x2">
                    <Reveal keyframes={fadeInDownShorter} delay={400} duration={1000} className="h-100">
                        <div className="intro-banner1 banner banner-fixed" style={{ backgroundColor: '#f1f1f1' }}>
                            <ALink href="/shop">
                                <figure>
                                    <LazyLoadImage
                                        src="./images/home/banner/2.jpg"
                                        alt="banner"
                                        effect="opacity"
                                        width="100%"   //385
                                        height="auto"   //433
                                    />
                                </figure>
                            </ALink>
                            <div className="banner-content w-100 x-50 text-center">
                                <h4 className="banner-subtitle mb-3">Trade-in your phone
                                        for up to $30</h4>
                                <h3 className="banner-title mb-0 font-weight-bold">New Galaxy S9</h3>
                            </div>
                        </div>
                    </Reveal>
                </div>
                <div className="grid-item col-sm-6 height-x1">
                    <Reveal keyframes={fadeInUpShorter} delay={400} duration={1000} className="h-100">
                        <div className="intro-banner2 banner banner-fixed overlay-light" style={{ backgroundColor: '#fff296' }}>
                            <figure>
                                <LazyLoadImage
                                    src="./images/home/banner/3.jpg"
                                    alt="banner"
                                    effect="opacity"
                                    width="100%"   //585
                                    height="auto"   //213
                                />
                            </figure>
                            <div className="banner-content w-100 y-50">
                                <h3 className="banner-title mb-2 ls-m text-uppercase">Nikon 850<span
                                    className="d-block text-normal">Launch Party</span></h3>
                                <h4 className="banner-subtitle font-secondary">Free Event</h4>
                                <div className="banner-price-info ls-m font-weight-semi-bold text-dark"><ins
                                    className="mr-2">$299.99</ins><del>$400.99</del></div>
                            </div>
                        </div>
                    </Reveal>
                </div>
                <div className="grid-item col-sm-6 height-x1">
                    <Reveal keyframes={fadeInLeftShorter} delay={400} duration={1000} className="h-100">
                        <div className="intro-banner3 banner banner-fixed overlay-dark" style={{ backgroundColor: '#4b484f' }}>
                            <figure>
                                <LazyLoadImage
                                    src="./images/home/banner/4.jpg"
                                    alt="banner"
                                    effect="opacity"
                                    width="100%"   //585
                                    height="auto"   //213
                                />
                            </figure>
                            <div className="banner-content w-100 y-50">
                                <h4 className="banner-subtitle mb-1 text-white">New Arrivals</h4>
                                <h3 className="banner-title ls-m text-white">Airpod Collection</h3>
                                <p className="font-weight-semi-bold text-white ls-m">Wireless, Effortiess, Magical</p>
                                <h4 className="banner-desc text-white mb-0">Discount <span className="text-secondary">20% Off</span></h4>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    )
}

export default React.memo(IntroSection);