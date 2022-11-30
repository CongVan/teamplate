import React from 'react';
import Reveal from "react-awesome-reveal";
import { LazyLoadImage } from 'react-lazy-load-image-component';

// import Custom Components
import ALink from '~/components/features/custom-link';
import OwlCarousel from '~/components/features/owl-carousel';

import { introSlider } from '~/utils/data/carousel';
import { fadeInRightShorter, fadeInUpShorter } from '~/utils/data/keyframes';


function IntroSection () {
    return (
        <div className="intro-section">
            <OwlCarousel adClass="owl-theme owl-dot-inner owl-nav-fade intro-slider animation-slider" options={ introSlider }>
                <div className="intro-slide1 banner banner-fixed" style={ { backgroundColor: "#f6f6f6" } }>
                    <figure>
                        <LazyLoadImage
                            src="images/home/slides/1.jpg"
                            alt="intro-banner"
                            width={ 1903 }
                            height={ 530 }
                        />
                    </figure>
                    <div className="container">
                        <div className="banner-content y-50">
                            <Reveal keyframes={ fadeInRightShorter } duration={ 1000 } delay={ 200 }>
                                <h4 className="banner-subtitle mb-4">New Arrival </h4>
                            </Reveal>
                            <Reveal keyframes={ fadeInUpShorter } duration={ 1200 } delay={ 1000 }>
                                <h2 className="banner-title">Organic Cosmetics That Provide<br />Youth and Beauty</h2>
                            </Reveal>
                            <Reveal keyframes={ fadeInUpShorter } duration={ 1000 } delay={ 1800 }>
                                <ALink href="/" className="btn btn-dark btn-rounded">Shop Now<i className="d-icon-arrow-right"></i></ALink>
                            </Reveal>
                        </div>
                    </div>
                </div>
                <div className="banner banner-fixed intro-slide2" style={ { backgroundColor: "#f6f6f6" } }>
                    <figure>
                        <LazyLoadImage
                            src="images/home/slides/2.jpg"
                            alt="intro-banner"
                            width={ 1903 }
                            height={ 530 }
                        />
                    </figure>
                    <div className="container">
                        <div className="banner-content text-right y-50">
                            <Reveal keyframes={ fadeInRightShorter } duration={ 1000 } delay={ 200 }>
                                <h4 className="banner-subtitle mb-4 ls-normal"> Best Seller</h4>
                            </Reveal>
                            <Reveal keyframes={ fadeInUpShorter } duration={ 1200 } delay={ 1000 }>
                                <h2 className="banner-title">The Best Cosmetics <br /> for Your Hair and Skin</h2>
                            </Reveal>
                            <Reveal keyframes={ fadeInUpShorter } duration={ 1000 } delay={ 1800 }>
                                <ALink href="/" className="btn btn-dark btn-rounded">Shop Now<i className="d-icon-arrow-right"></i></ALink>
                            </Reveal>
                        </div>
                    </div>
                </div>
            </OwlCarousel >
        </div>
    )
}

export default React.memo( IntroSection );