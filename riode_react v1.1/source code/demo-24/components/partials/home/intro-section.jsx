import React from 'react';
import Reveal from "react-awesome-reveal";
import { LazyLoadImage } from 'react-lazy-load-image-component';

// import Custom Components
import ALink from '~/components/features/custom-link';
import OwlCarousel from '~/components/features/owl-carousel';

import { introSlider } from '~/utils/data/carousel';
import { fadeInLeftShorter, blurIn, zoomIn, fadeInRightShorter } from '~/utils/data/keyframes';

function IntroSection() {
    return (
        <div className="intro-section pb-6">
            <div className="row">
                <div className="col-lg-8 mb-4">
                    <OwlCarousel adClass="intro-slider owl-theme owl-dot-inner owl-dot-white animation-slider" options={ introSlider }>
                        <div className="banner banner-fixed intro-slide1" style={ { backgroundColor: "#2a2a2a" } }>
                            <figure>
                                <LazyLoadImage
                                    src="./images/home/slides/1.jpg"
                                    alt="Intro Slider"
                                    effect="opacity"
                                    width="auto"
                                    height={ 528 }
                                />
                            </figure>

                            <div className="banner-content text-right y-50">
                                <Reveal keyframes={ fadeInRightShorter } delay={ 100 } duration={ 1600 }>
                                    <h4 className="banner-subtitle text-uppercase font-weight-bold">Best Sellers</h4>
                                    <Reveal keyframes={ fadeInRightShorter } delay={ 200 } duration={ 1600 }>
                                        <h3 className="banner-title mb-3 font-weight-normal">
                                            <strong className="d-block text-uppercase">NEW FASHION</strong>Collection
                                        </h3>
                                    </Reveal>
                                    <p className="text-body font-primary ">Free shipping on all over $99</p>
                                    <ALink href="/shop" className="btn btn-white btn-rounded">Shop now</ALink>
                                </Reveal>
                            </div>
                        </div>

                        <div className="banner banner-fixed intro-slide2" style={ { backgroundColor: "#eff0f4" } }>
                            <figure>
                                <LazyLoadImage
                                    src="./images/home/slides/2.jpg"
                                    alt="Intro Slider"
                                    effect="opacity"
                                    width="auto"
                                    height={ 528 }
                                />
                            </figure>

                            <div className="banner-content y-50">
                                <Reveal keyframes={ blurIn } delay={ 200 } duration={ 1000 }>
                                    <h4 className="banner-subtitle text-uppercase font-weight-normal">New Arrivals</h4>
                                    <h3 className="banner-title mb-1 ls-m text-uppercase">For  Women’s<br /><span>Lifestyle</span></h3>
                                    <p className="font-primary ls-m text-dark">Check out this week's hottest styles.</p>
                                    <ALink href="/shop" className="btn btn-dark btn-rounded">Shop now</ALink>
                                </Reveal>
                            </div>
                        </div>
                    </OwlCarousel >
                </div>

                <div className="col-lg-4 mb-4">
                    <Reveal keyframes={ fadeInLeftShorter } delay={ 100 } duration={ 1200 } triggerOnce className="h-100">
                        <div className="intro-banner banner banner-fixed overlay-zoom overlay-dark" style={ { backgroundColor: "#e9e8ed" } }>
                            <ALink href="/shop">
                                <figure>
                                    <LazyLoadImage
                                        src="./images/home/banner/1.jpg"
                                        alt="Intro Banner"
                                        effect="opacity, transform"
                                        width="auto"
                                        height={ 528 }
                                    />
                                </figure>
                            </ALink>
                            <div className="banner-content text-center x-50 w-100">
                                <Reveal keyframes={ zoomIn } delay={ 600 } duration={ 1200 } triggerOnce>
                                    <h4 className="banner-subtitle mb-2 text-uppercase font-weight-normal">New Collection</h4>
                                    <h3 className="banner-title text-uppercase font-weight-bold">Buy 2, Get 1 Free* on everything</h3>
                                    <p className="font-primary ls-m mb-0">Must add 3 products to cart.<br />Terms apply</p>
                                </Reveal>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </div>
        </div>
    )
}

export default React.memo( IntroSection );