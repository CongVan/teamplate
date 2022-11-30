import React from 'react';
import Reveal from "react-awesome-reveal";
import { LazyLoadImage } from 'react-lazy-load-image-component';

// import Custom Components
import ALink from '~/components/features/custom-link';
import OwlCarousel from '~/components/features/owl-carousel';

import { introSlider } from '~/utils/data/carousel';
import { fadeIn, fadeInUp, fadeInDown, blurIn, fadeInLeftShorter } from '~/utils/data/keyframes';

function IntroSection() {
    return (
        <OwlCarousel adClass="intro-slider animation-slider owl-dot-inner owl-nav-fade owl-dot-white owl-theme mb-4" options={ introSlider }>
            <div className="intro-slide1 banner banner-fixed" style={ { backgroundColor: "#505052" } }>
                <figure>
                    <LazyLoadImage
                        src="./images/home/slides/1.jpg"
                        alt="Intro Slider"
                        effect="opacity"
                        width="auto"
                        height="auto"
                    />
                </figure>
                <div className="container">
                    <div className="banner-content x-50 y-50 text-center pt-3">
                        <Reveal keyframes={ fadeInDown } delay={ 200 } duration={ 1200 }>
                            <h4 className="banner-subtitle mb-4 text-white text-uppercase font-weight-normal">Create The Perfect Work Space</h4>
                        </Reveal>

                        <Reveal keyframes={ blurIn } delay={ 600 } duration={ 1200 }>
                            <h3 className="banner-title mb-8 ls-l text-white">Fashion <span className="text-uppercase text-primary">Dress & Tops</span> Collection</h3>
                        </Reveal>

                        <div className="d-xs-flex justify-content-center">
                            <Reveal keyframes={ fadeInUp } delay={ 1000 } duration={ 1200 }>
                                <ALink href={ { pathname: '/shop', query: { category: 'for-men-s' } } } className="mb-3 mr-0 mr-xs-3 btn-md btn btn-outline btn-white">shop men</ALink>
                            </Reveal>
                            <Reveal keyframes={ fadeInUp } delay={ 1200 } duration={ 1300 }>
                                <ALink href={ { pathname: '/shop', query: { category: 'for-women-s' } } } className="mb-3 mr-0 mr-xs-3 btn-md btn btn-outline btn-white">shop women</ALink>
                            </Reveal>
                            <Reveal keyframes={ fadeInUp } delay={ 1400 } duration={ 1400 }>
                                <ALink href="/shop" className="btn-md btn btn-outline btn-white">shop all</ALink>
                            </Reveal>
                        </div>
                    </div>
                </div>
            </div>

            <div className="intro-slide2 banner banner-fixed" style={ { backgroundColor: "#9e9e9e" } }>
                <figure>
                    <LazyLoadImage
                        src="./images/home/slides/2.jpg"
                        alt="Intro Slider"
                        effect="opacity"
                        width="auto"
                        height="auto"
                    />
                </figure>
                <div className="container">
                    <div className="banner-content y-50">
                        <Reveal keyframes={ fadeInLeftShorter } delay={ 0 } duration={ 1200 }>
                            <h4 className="banner-subtitle mb-1 text-white text-uppercase font-weight-normal">New Arrivals</h4>
                        </Reveal>

                        <Reveal keyframes={ fadeInLeftShorter } delay={ 200 } duration={ 1200 }>
                            <h3 className="banner-title mb-2 ls-m text-white text-uppercase">For Women’s fashion</h3>
                        </Reveal>

                        <Reveal keyframes={ fadeInLeftShorter } delay={ 400 } duration={ 1200 }>
                            <p className="text-white ls-s">Get Free Shipping on all orders over $75 </p>
                        </Reveal>

                        <Reveal keyframes={ fadeInLeftShorter } delay={ 600 } duration={ 1000 }>
                            <ALink href="/shop" className="btn btn-outline btn-white">shop now <i className="d-icon-arrow-right"></i></ALink>
                        </Reveal>
                    </div>
                </div>
            </div>

            <div className="intro-slide3 banner banner-fixed" style={ { backgroundColor: "#012837" } }>
                <figure>
                    <LazyLoadImage
                        src="./images/home/slides/3.jpg"
                        alt="Intro Slider"
                        effect="opacity"
                        width="auto"
                        height="auto"
                    />
                </figure>
                <div className="container">
                    <div className="banner-content y-50 text-center">
                        <Reveal keyframes={ fadeIn } delay={ 600 } duration={ 1200 }>
                            <h4 className="banner-subtitle mb-2 text-white text-uppercase">For Women’s</h4>
                            <h3 className="banner-title ls-md text-white text-uppercase">Accessories Sale</h3>
                            <p className="text-white ls-md mb-8 ml-auto mr-auto pl-1 pr-1" style={ { maxWidth: "366px" } }>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempt dolore magna aliqua...</p>
                            <ALink href="/shop" className="btn btn-primary">shop now <i className="d-icon-arrow-right"></i></ALink>
                        </Reveal>
                    </div>
                </div>
            </div>
        </OwlCarousel>
    )
}

export default React.memo( IntroSection );