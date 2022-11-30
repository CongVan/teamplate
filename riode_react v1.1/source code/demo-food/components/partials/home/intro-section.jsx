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
        <div className="intro-section">
            <OwlCarousel adClass="owl-theme owl-nav-fade intro-slider animation-slider" options={ introSlider }>
                <div className="intro-slide1 banner banner-fixed" style={ { backgroundColor: "#f6f6f6" } }>
                    <figure>
                        <LazyLoadImage
                            src="images/home/slides/1.jpg"
                            alt="intro-banner"
                            width="1903"
                            height="530"
                        />
                    </figure>
                    <div className="container">
                        <div className="banner-content y-50">
                            <Reveal keyframes={ fadeInRightShorter } delay={ 200 } duration={ 1000 }>
                                <h4 className="banner-subtitle">New Arrivals</h4>
                            </Reveal>
                            <Reveal keyframes={ fadeInUpShorter } delay={ 1000 } duration={ 1200 }>
                                <h2 className="banner-title mb-1"><strong className="d-block text-uppercase">Fresh Vegetable</strong>Collection!</h2>
                            </Reveal>
                            <Reveal keyframes={ fadeInUpShorter } delay={ 1000 } duration={ 1200 }>
                                <p>
                                    Get Free Shipping on all orders over <span className="text-secondary">$99.00</span>
                                </p>
                            </Reveal>
                            <Reveal keyframes={ fadeInUpShorter } delay={ 1800 } duration={ 1000 }>
                                <ALink href="/shop" className="btn btn-primary btn-rounded">Shop Now<i className="d-icon-arrow-right"></i></ALink>
                            </Reveal>
                        </div>
                    </div>
                </div>
                <div className="banner banner-fixed intro-slide2" style={ { backgroundColor: "#f6f6f6" } }>
                    <figure>
                        <LazyLoadImage
                            src="images/home/slides/2.jpg"
                            alt="intro-banner"
                            width="1903"
                            height="530"
                        />
                    </figure>
                    <div className="container">
                        <div className="banner-content y-50">
                            <Reveal keyframes={ fadeInRightShorter } delay={ 200 } duration={ 1000 }>
                                <h4 className="banner-subtitle">New Arrived Exclusive Product</h4>
                            </Reveal>
                            <Reveal keyframes={ fadeInUpShorter } delay={ 1000 } duration={ 1200 }>
                                <h2 className="banner-title mb-2 font-weight-bold">
                                    Food In Great Demand <br /> Mango Syrup
                            </h2>
                            </Reveal>
                            <Reveal keyframes={ fadeInUpShorter } delay={ 1000 } duration={ 1200 } >
                                <p className="mb-6">
                                    Get Free Shipping on all orders over $99.00
                            </p>
                            </Reveal>
                            <Reveal keyframes={ fadeInUpShorter } delay={ 1800 } duration={ 1000 }>
                                <ALink href="/shop" className="btn btn-rounded btn-outline btn-dark">Shop Now<i className="d-icon-arrow-right"></i></ALink>
                            </Reveal>
                        </div>
                    </div>
                </div>
                <div className="banner banner-fixed intro-slide3" style={ { backgroundColor: "#f6f6f6" } }>
                    <figure>
                        <LazyLoadImage
                            src="images/home/slides/3.jpg"
                            alt="intro-banner"
                            width="1903"
                            height="530"
                        />
                    </figure>
                    <div className="container">
                        <div className="banner-content y-50">
                            <Reveal keyframes={ fadeInRightShorter } delay={ 200 } duration={ 1000 }>
                                <h4 className="banner-subtitle">New Arrivals 2021</h4>
                            </Reveal>
                            <Reveal keyframes={ fadeInUpShorter } delay={ 1000 } duration={ 1200 }>
                                <h2 className="banner-title font-weight-bold mb-1">
                                    Tasty And Nutrious <br /> Chocolate Cake
                            </h2>
                            </Reveal>
                            <Reveal keyframes={ fadeInUpShorter } delay={ 1000 } duration={ 1200 }>
                                <p>
                                    Free returns extended to 30 days after delivery
                                </p>
                            </Reveal>
                            <Reveal keyframes={ fadeInUpShorter } delay={ 1800 } duration={ 1000 }>
                                <ALink href="/shop" className="btn btn-rounded btn-dark">Shop Now<i className="d-icon-arrow-right"></i></ALink>
                            </Reveal>
                        </div>
                    </div>
                </div>
            </OwlCarousel >
        </div>
    )
}

export default React.memo( IntroSection );