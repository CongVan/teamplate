import React from 'react';
import Reveal from "react-awesome-reveal";

// import Custom Components
import ALink from '~/components/features/custom-link';
import OwlCarousel from '~/components/features/owl-carousel';

import { fadeInUp } from '~/utils/data/keyframes';
import { introSlider } from '~/utils/data/carousel';

function IntroSection() {
    return (
        <OwlCarousel adClass="intro-slider animation-slider owl-nav-arrow owl-dot-inner owl-demo-dot owl-theme" options={ introSlider }>
            <div className="intro-slide1 banner banner-fixed"
                style={ { backgroundImage: `url(./images/home/slides/1.jpg)`, backgroundColor: "#4d4e52" } }>
                <div className="container">
                    <div className="banner-content">
                        <Reveal keyframes={ fadeInUp } duration={ 1300 }>
                            <h4 className="banner-subtitle mb-5 ls-m text-white font-weight-semi-bold text-uppercase">
                                FROM ONLINE STORE</h4>
                        </Reveal>

                        <Reveal keyframes={ fadeInUp } duration={ 1500 } delay={ 500 }>
                            <h3 className="banner-title font-weight-bold ls-m text-white">
                                Originals Comper<br />Star. Watches</h3>
                        </Reveal>

                        <Reveal keyframes={ fadeInUp } duration={ 1500 } delay={ 500 }>
                            <p className="banner-info text-white font-weight-semi-bold ls-normal mt-9 mb-7">
                                Free Shipping on all orders over $555.00</p>
                        </Reveal>

                        <Reveal keyframes={ fadeInUp } duration={ 1300 } delay={ 1000 }>
                            <ALink href="/shop"
                                className="btn btn-rounded btn-lg btn-outline btn-primary text-white">
                                Shop now<i className="d-icon-arrow-right"></i></ALink>
                        </Reveal>
                    </div>
                </div>
            </div>

            <div className="intro-slide2 banner banner-fixed"
                style={ { backgroundImage: `url(./images/home/slides/2.jpg)`, backgroundColor: "#3b3f42" } }>
                <div className="container">
                    <div className="banner-content text-center">
                        <Reveal keyframes={ fadeInUp } duration={ 1300 }>
                            <h4 className="banner-subtitle mt-1 mb-4 ls-0 text-primary font-weight-bold text-uppercase text-primary">Up to 50% Off</h4>
                        </Reveal>

                        <Reveal keyframes={ fadeInUp } duration={ 1500 } delay={ 500 }>
                            <h3 className="banner-title font-weight-bold ls-m pb-2 mb-10 text-white">
                                Discover our Fashion<br />Collections</h3>
                        </Reveal>

                        <Reveal keyframes={ fadeInUp } duration={ 1300 } delay={ 1000 }>
                            <ALink href="/shop"
                                className="btn btn-rounded btn-lg btn-outline btn-primary text-white">Shop
                            now<i className="d-icon-arrow-right"></i></ALink>
                        </Reveal>
                    </div>
                </div>
            </div>
        </OwlCarousel>
    )
}

export default React.memo( IntroSection );