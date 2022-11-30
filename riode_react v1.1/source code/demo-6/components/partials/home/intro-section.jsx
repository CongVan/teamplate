import React from 'react';
import Reveal from "react-awesome-reveal";
import { LazyLoadImage } from 'react-lazy-load-image-component';

// import Custom Components
import ALink from '~/components/features/custom-link';
import OwlCarousel from '~/components/features/owl-carousel';

import { introSlider } from '~/utils/data/carousel';
import { fadeInUpShorter, fadeInRightShorter, fadeIn } from '~/utils/data/keyframes';

function IntroSection( props ) {
    return (
        <OwlCarousel adClass="intro-slider owl-theme owl-dot-inner animation-slider owl-nav-arrow" options={ introSlider }>
            <div className="intro-slide1 banner banner-fixed" style={ { backgroundColor: "#f6f6f6" } }>
                <figure>
                    <LazyLoadImage effect="opacity" threshold={ 500 } src="./images/home/slides/1.jpg" alt="slide" width="1903" height="650" />
                </figure>
                <div className="container">
                    <div className="banner-content y-50">
                        <Reveal keyframes={ fadeInUpShorter } duration={ 1000 }>
                            <h4 className="banner-subtitle text-uppercase text-grey mb-2">Best Seller</h4>
                            <h3 className="banner-title font-weight-bold ls-m">Power bank with built in wireless
                            charge</h3>
                            <ALink href="/" className="btn btn-primary btn-link btn-underline">Shop Electronics<i
                                className="d-icon-arrow-right"></i></ALink>
                        </Reveal>
                    </div>
                </div>
            </div>
            <div className="intro-slide2 banner banner-fixed" style={ { backgroundColor: "#5A5957" } }>
                <figure className="intro-slide2-image" >
                    <Reveal keyframes={ fadeIn } duration={ 1000 }>
                        <LazyLoadImage effect="opacity" threshold={ 500 } src="./images/home/slides/2.png" alt="Clock" width="391" height="401" />
                    </Reveal>
                </figure>
                <div className="container">
                    <div className="banner-content y-50 ml-lg-auto">
                        <Reveal keyframes={ fadeInRightShorter } duration={ 1000 }>
                            <div className="show-content">
                                <h4 className="banner-subtitle text-primary text-uppercase">New Design</h4>
                                <h3 className="banner-title text-white font-weight-bold ls-m">Stunning original design
                            new wooden clock</h3>
                                <ALink href="/" className="btn btn-white btn-link btn-underline">Shop Essentials<i
                                    className="d-icon-arrow-right"></i></ALink>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </div>
        </OwlCarousel >
    )
}

export default React.memo( IntroSection );