
import React from 'react';
import Reveal from "react-awesome-reveal";
import { LazyLoadImage } from 'react-lazy-load-image-component';

// import Custom Components
import ALink from '~/components/features/custom-link';
import OwlCarousel from '~/components/features/owl-carousel';

import { introSlider } from '~/utils/data/carousel';
import { fadeInUp } from '~/utils/data/keyframes';

function IntroSection() {
    return (
        <OwlCarousel adClass="intro-slider animation-slider owl-nav-fade owl-dot-inner owl-theme" options={ introSlider }>
            <div className="intro-slide1 banner banner-fixed" style={ { backgroundColor: "#122228" } }>
                <figure>
                    <LazyLoadImage
                        src="./images/home/slides/1.jpg"
                        alt="Intro Slider"
                        effect="opacity"
                        width="auto"
                        height={ 606 }
                    />
                </figure>

                <div className="container" style={ { transformOrigin: "11%" } }>
                    <div className="banner-content y-50">
                        <Reveal keyframes={ fadeInUp } delay={ 200 } duration={ 1500 }>
                            <h4 className="banner-subtitle mb-1">Riode Birthday</h4>
                        </Reveal>

                        <Reveal keyframes={ fadeInUp } delay={ 300 } duration={ 1300 }>
                            <h3 className="banner-title font-weight-bolder ls-m">Flash Sale</h3>
                        </Reveal>

                        <Reveal keyframes={ fadeInUp } delay={ 600 } duration={ 1200 }>
                            <p className="text-dark ls-s mb-8 font-primary">
                                <span className="d-inline-block text-white text-uppercase ls-m label-star">Up to <span className="text-secondary font-weight-bolder">15% OFF</span></span>
                            </p>
                        </Reveal>

                        <Reveal keyframes={ fadeInUp } delay={ 900 } duration={ 1000 }>
                            <ALink href={ { pathname: '/shop', query: { category: 'for-men-s' } } } className="btn btn-outline btn-primary mb-1">Shop now <i className="d-icon-arrow-right"></i></ALink>
                        </Reveal>
                    </div>
                </div>
            </div>

            <div className="intro-slide2 banner banner-fixed" style={ { backgroundColor: "#122228" } }>
                <figure>
                    <LazyLoadImage
                        src="./images/home/slides/2.jpg"
                        alt="Intro Slider"
                        effect="opacity"
                        width="auto"
                        height={ 606 }
                    />
                </figure>
                <div className="container">
                    <div className="banner-content y-50 text-center">
                        <Reveal keyframes={ fadeInUp } delay={ 200 } duration={ 1500 }>
                            <h4 className="banner-subtitle mb-1 text-white text-uppercase">24 hours only</h4>
                        </Reveal>

                        <Reveal keyframes={ fadeInUp } delay={ 300 } duration={ 1300 }>
                            <h3 className="banner-title mb-2 text-white text-uppercase">big Sale</h3>
                        </Reveal>

                        <Reveal keyframes={ fadeInUp } delay={ 400 } duration={ 1200 }>
                            <div className="banner-price-info d-inline-block text-uppercase text-white bg-dark pl-2 pr-2"><span className="text-secondary">Up to <strong>30%</strong></span> Discount</div>
                        </Reveal>

                        <Reveal keyframes={ fadeInUp } delay={ 700 } duration={ 1200 }>
                            <p className="font-primary">Get Free Shipping on all orders over $99.00</p>
                        </Reveal>

                        <Reveal keyframes={ fadeInUp } delay={ 900 } duration={ 1000 }>
                            <ALink href="/shop" className="btn btn-dark mb-1">Shop now <i className="d-icon-arrow-right"></i></ALink>
                        </Reveal>
                    </div>
                </div>
            </div>
        </OwlCarousel>
    )
}

export default React.memo( IntroSection );