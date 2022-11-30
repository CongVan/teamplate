import React from 'react';
import Reveal from "react-awesome-reveal";
import { LazyLoadImage } from 'react-lazy-load-image-component';

// import Custom Components
import ALink from '~/components/features/custom-link';
import OwlCarousel from '~/components/features/owl-carousel';

import { introSlider } from '~/utils/data/carousel';
import { fadeInUpShorter, blurIn, fadeIn, fadeInDownShorter } from '~/utils/data/keyframes';

function IntroSection() {
    return (
        <OwlCarousel adClass="intro-slider animation-slider owl-theme owl-nav-arrow mb-4" options={ introSlider }>
            <div className="intro-slide1 banner banner-fixed" style={ { backgroundColor: "#f8f7f5" } }>
                <figure>
                    <LazyLoadImage threshold={ 500 } effect="opacity" src="./images/home/slides/1.jpg" alt="banner" width="1180" height="548" />
                </figure>
                <div className="banner-content">
                    <Reveal keyframes={ fadeInDownShorter } duration={ 1200 } delay={ 500 }>
                        <h4 className="banner-subtitle text-uppercase">
                            2021 new collection</h4>
                    </Reveal>
                    <Reveal keyframes={ blurIn } duration={ 1400 } delay={ 100 }>
                        <h3 className="banner-title text-uppercase mb-5">
                            <span className="text-white">Spring </span>Lifechic</h3>
                    </Reveal>
                    <Reveal keyframes={ fadeInUpShorter } duration={ 1200 } delay={ 700 }>
                        <ALink href="/shop" className="btn btn-link btn-underline btn-dark">Shop now<i className="d-icon-arrow-right"></i></ALink>
                    </Reveal>
                </div>
            </div>
            <div className="intro-slide2 banner banner-fixed" style={ { backgroundColor: "#f8f7f5" } }>
                <figure>
                    <LazyLoadImage threshold={ 500 } effect="opacity" src="./images/home/slides/2.jpg" alt="banner" width="1180" height="548" />
                </figure>
                <div className="banner-content y-50 text-center">
                    <Reveal keyframes={ fadeIn } duration={ 1700 }>
                        <h4 className="banner-subtitle text-primary text-uppercase">Happy Women's day
                    </h4>
                        <h3 className="banner-title">
                            Gift Collection
                    </h3>
                        <h4 className="banner-price-info text-uppercase font-weight-normal">Start At
                        $59.00</h4>
                        <ALink href="/shop" className="btn btn-solid btn-shadow btn-rounded btn-dark">Shop now <i className="d-icon-arrow-right"></i></ALink>
                    </Reveal>
                </div>
            </div>
        </OwlCarousel>
    )
}

export default React.memo( IntroSection );