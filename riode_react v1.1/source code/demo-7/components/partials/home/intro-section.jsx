import React from 'react';
import Reveal from "react-awesome-reveal";
import { LazyLoadImage } from 'react-lazy-load-image-component';

// import Custom Components
import ALink from '~/components/features/custom-link';
import OwlCarousel from '~/components/features/owl-carousel';

import { introSlider } from '~/utils/data/carousel';
import { fadeInLeftShorter, fadeInRightShorter } from '~/utils/data/keyframes';

function IntroSection() {
    return (
        <OwlCarousel adClass="owl-theme owl-nav-arrow owl-nav-fade intro-slider mb-2 animation-slider" options={ introSlider }
            style={ { backgroundColor: "#f3f3f3" } }>
            <div className="banner banner-fixed intro-slide1">
                <figure>
                    <LazyLoadImage effect="opacity" threshold={ 500 } src="./images/home/slides/1.jpg" alt="intro-banner" width="1903" height="912" />
                </figure>
                <div className="container">
                    <div className="banner-content y-50 d-block d-lg-flex align-items-center">
                        <div className="banner-content-left">
                            <Reveal keyframes={ fadeInLeftShorter } duration={ 1000 } delay={ 200 }>
                                <h4 className="banner-subtitle text-uppercase text-dark">The Riode Shoes Store</h4>
                                <h3 className="banner-title text-uppercase text-dark">Spring Crick</h3>
                            </Reveal>
                        </div>

                        <div className="banner-content-right ml-lg-auto">
                            <Reveal keyframes={ fadeInRightShorter } duration={ 1000 } delay={ 200 }>
                                <h4 className="banner-subtitle text-primary text-uppercase font-weight-bold">Best
                                Sellers</h4>
                                <h3 className="banner-title text-uppercase text-white font-weight-bold mb-6">Chooses
                                to extra comfort all around</h3>
                                <ALink href="/shop" className="btn btn-dark btn-rounded">Shop Now<i
                                    className="d-icon-arrow-right"></i></ALink>
                            </Reveal>
                        </div>
                    </div>
                </div>
            </div>
            <div className="banner banner-fixed intro-slide2"
                height="912" style={ { backgroundColor: "#f3f3f3" } }>
                <figure>
                    <LazyLoadImage effect="opacity" threshold={ 500 } src="./images/home/slides/2.jpg" alt="intro-banner" width="1903" />
                </figure>
                <div className="container">
                    <div className="banner-content y-50 pl-2">
                        <Reveal keyframes={ fadeInRightShorter } duration={ 1000 } delay={ 200 }>
                            <h4 className="banner-subtitle text-uppercase text-primary ls-s">From Online store
                            </h4>
                            <h3 className="banner-title text-dark ls-m">Originals Comper Star. Shoes</h3>
                            <p className="font-weight-semi-bold text-uppercase">f o r - M e n<br /><span>Product
                                    identifier: dD1160</span></p>
                            <ALink href="/shop" className="btn btn-dark btn-rounded">Shop Now<i
                                className="d-icon-arrow-right"></i></ALink>
                        </Reveal>
                    </div>
                </div>
            </div>
        </OwlCarousel>
    )
}

export default React.memo( IntroSection );