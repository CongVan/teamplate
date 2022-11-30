import React from 'react';
import Reveal from "react-awesome-reveal";
import { LazyLoadImage } from 'react-lazy-load-image-component';

// import Custom Components
import ALink from '~/components/features/custom-link';
import OwlCarousel from '~/components/features/owl-carousel';

import { introSlider } from '~/utils/data/carousel';
import { fadeInRightShorter, fadeInLeftShorter, fadeInDownShorter } from '~/utils/data/keyframes';

function IntroSection ( props ) {
    return (
        <div className="intro-wrapper row">
            <div className="col-lg-9 mb-4">
                <OwlCarousel adClass="owl-theme owl-dot-inner intro-slider animation-slider" options={ introSlider }>
                    <div className="banner banner-fixed intro-slide intro-slide1 content-middle banner-radius" style={ { backgroundColor: "#e7e9e9" } }>
                        <figure>
                            <img
                                src="images/home/slide/1.jpg"
                                alt="Banner"
                                width="1030"
                                height="498"
                            />
                        </figure>
                        <div className="banner-content">
                            <Reveal keyframes={ fadeInLeftShorter } duration={ 1000 }>
                                <>
                                    <h4 className="banner-subtitle font-weight-semi-bold text-body text-uppercase">
                                        Sale up to <span className="text-secondary ls-l">20% OFF</span> Everything
                                </h4>
                                    <h3 className="banner-title font-secondary font-weight-bold mb-1">The Excellent Collection</h3>
                                    <p className="font-weight-normal text-body mb-5">Only until the end of the week </p>
                                    <ALink href="/shop" className="btn btn-dark btn-rounded">Shop Now<i className="d-icon-arrow-right"></i></ALink>
                                </>
                            </Reveal>
                        </div>
                    </div>
                    <div className="banner banner-fixed intro-slide intro-slide2 content-middle banner-radius text-right" style={ { backgroundColor: "#cdbbaf" } }>
                        <figure>
                            <img
                                src="images/home/slide/2.jpg"
                                alt="Banner"
                                width="1030"
                                height="498"
                            />
                        </figure>
                        <div className="banner-content">
                            <Reveal keyframes={ fadeInRightShorter } duration={ 1000 } delay={ 300 }>
                                <>
                                    <h4 className="banner-subtitle font-weight-semi-bold text-body">
                                        New Amazing Collection</h4>
                                    <h3 className="banner-title font-secondary">Diamond Ring Decoration</h3>
                                    <p className="font-weight-normal text-body ls-m">
                                        Discount <span className="text-secondary text-uppercase font-weight-semi-bold ls-l">30% Off</span> For Jewelry Store
                                </p>
                                    <ALink href="/shop" className="btn btn-dark btn-rounded">Shop Now<i className="d-icon-arrow-right"></i></ALink>
                                </>
                            </Reveal>
                        </div>
                    </div>
                    <div className="banner banner-fixed intro-slide intro-slide3 content-middle banner-radius" style={ { backgroundColor: "#ece8e4" } }>
                        <figure>
                            <img
                                src="images/home/slide/3.jpg"
                                alt="Banner"
                                width="1030"
                                height="498"
                            />
                        </figure>
                        <div className="banner-content">
                            <Reveal keyframes={ fadeInDownShorter } delay={ 200 } duration={ 1000 }>
                                <h4 className="banner-subtitle font-weight-semi-bold text-body text-uppercase">
                                    World Of Music WIth</h4>
                            </Reveal>
                            <Reveal keyframes={ fadeInDownShorter } delay={ 400 } duration={ 1000 }>
                                <h3 className="banner-title font-secondary">Heavy Definition
                                Smart Music</h3>
                            </Reveal>
                            <Reveal keyframes={ fadeInDownShorter } delay={ 600 } duration={ 1000 }>
                                <p className="font-weight-normal text-body ls-m mb-5">
                                    Provides <span className="text-secondary font-weight-semi-bold">High Tone</span> quality with murmuring</p>
                            </Reveal>
                            <Reveal keyframes={ fadeInDownShorter } delay={ 800 } duration={ 1000 }>
                                <ALink href="/shop" className="btn btn-white btn-rounded">Shop Now<i className="d-icon-arrow-right"></i></ALink>
                            </Reveal>
                        </div>
                    </div>
                </OwlCarousel >
            </div>
            <div className="col-lg-3">
                <div className="row cols-lg-1 cols-sm-2 cols-1">
                    <div className="banner-wrap">
                        <div className="banner banner-fixed intro-banner banner-radius mb-4" style={ { backgroundColor: "#e4e4e4" } }>
                            <figure>
                                <LazyLoadImage
                                    src="images/home/slide/4.jpg"
                                    alt="Banner"
                                    width="330"
                                    height="239"
                                />
                            </figure>
                            <div className="banner-content">
                                <h4 className="banner-subtitle text-uppercase font-weight-normal text-body ls-m">
                                    New Arrivals</h4>
                                <h3 className="banner-title font-secondary text-uppercase font-weight-semi-bold ls-m">
                                    Summer<br />
                                    Sale 20% Off</h3>
                                <ALink href="/shop" className="btn btn-dark btn-link btn-underline font-weight-normal">Shop Now<i className="d-icon-arrow-right" style={ { marginTop: "-2px" } }></i></ALink>
                            </div>
                        </div>
                    </div>
                    <div className="banner-wrap">
                        <div className="banner banner-fixed intro-banner banner-radius mb-4" style={ { backgroundColor: "#f0eae4" } }>
                            <figure>
                                <LazyLoadImage
                                    src="images/home/slide/5.jpg"
                                    alt="Banner"
                                    width="330"
                                    height="239"
                                />
                            </figure>
                            <div className="banner-content">
                                <h4 className="banner-subtitle text-uppercase font-weight-normal text-body ls-m">
                                    Gaming 4k</h4>
                                <h3 className="banner-title font-secondary text-uppercase font-weight-semi-bold ls-m">
                                    Desktops &amp;
                                    <br />laptops</h3>
                                <ALink href="/shop" className="btn btn-dark btn-link btn-underline font-weight-normal">Shop Now<i className="d-icon-arrow-right" style={ { marginTop: "-2px" } }></i></ALink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default React.memo( IntroSection );