import React from 'react';
import Reveal from "react-awesome-reveal";
import { LazyLoadImage } from 'react-lazy-load-image-component';

// import Custom Components
import ALink from '~/components/features/custom-link';
import OwlCarousel from '~/components/features/owl-carousel';

import { introSlider } from '~/utils/data/carousel';
import { fadeInLeftShorter } from '~/utils/data/keyframes';


function IntroSection () {
    return (
        <div className="row">
            <div className="col-md-9">
                <OwlCarousel adClass="owl-theme owl-dot-inner intro-slider animation-slider mb-4" options={ introSlider }>
                    <div className="banner banner-fixed intro-slide1" style={ { backgroundColor: "#f0f2f1" } }>
                        <figure>
                            <LazyLoadImage
                                src="images/home/slides/1.jpg"
                                alt="intro-banner"
                                width={ 580 }
                                height={ 460 }
                            />
                        </figure>
                        <div className="banner-content w-100 y-50 text-left">
                            <Reveal keyframes={ fadeInLeftShorter } duration={ 1600 }>
                                <>
                                    <h4 className="banner-subtitle text-primary text-uppercase font-weight-semi-bold">Best Selling</h4>
                                    <Reveal keyframes={ fadeInLeftShorter } duration={ 1400 }>
                                        <h2 className="banner-title font-weight-bold">
                                            Baby Clothes
                                        </h2>
                                    </Reveal>
                                    <h3 className="text-body font-weight-normal"><span>*</span> Start Shopping
                                        Right Now <span>*</span></h3>
                                    <ALink href="/shop" className="btn btn-outline btn-rounded btn-primary">Shop Now</ALink>
                                </>
                            </Reveal>
                        </div>
                    </div>
                    <div className="banner banner-fixed intro-slide2" style={ { backgroundColor: "#f0f1f6" } }>
                        <figure>
                            <LazyLoadImage
                                src="images/home/slides/2.jpg"
                                alt="intro-banner"
                                width={ 580 }
                                height={ 460 }
                            />
                        </figure>
                        <div className="banner-content w-100 y-50 text-right">
                            <Reveal keyframes={ fadeInLeftShorter } duration={ 1600 }>
                                <>
                                    <h4 className="banner-subtitle text-dark text-uppercase font-weight-semi-bold">
                                        Up To 40% Off
                                    </h4>
                                    <Reveal keyframes={ fadeInLeftShorter } duration={ 1400 }>
                                        <h2 className="banner-title font-weight-bold">
                                            Summer Sale
                                        </h2>
                                    </Reveal>
                                    <h3 className="text-body font-weight-normal"><span>*</span> Start Shopping Right Now <span>*</span></h3>
                                    <ALink href="/shop" className="btn btn-outline btn-rounded btn-primary">Shop Now</ALink>
                                </>
                            </Reveal>
                        </div>
                    </div>
                </OwlCarousel >
            </div>
            <div className="col-md-3">
                <div className="row">
                    <div className="col-md-12 col-xs-6">
                        <div className="banner banner-fixed intro-banner1 mb-4" style={ { backgroundColor: "#f5f7f6" } }>
                            <figure>
                                <LazyLoadImage
                                    src="images/home/banners/1.jpg"
                                    alt="banner"
                                    width={ 280 }
                                    height={ 236 }
                                />
                            </figure>
                            <div className="banner-content">
                                <h4 className="banner-subtitle ls-s text-body text-uppercase font-weight-normal">New In</h4>
                                <h3 className="banner-title ls-m text-dark font-weight-normal">Kids Store</h3>
                                <ALink href="/shop" className="btn btn-underline btn-link">Shop now <i className="d-icon-arrow-right"></i></ALink>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12 col-xs-6">
                        <div className="banner banner-fixed intro-banner2 mb-4" style={ { backgroundColor: "#fadacb" } }>
                            <figure>
                                <LazyLoadImage
                                    src="images/home/banners/2.jpg"
                                    alt="banner"
                                    width={ 280 }
                                    height={ 236 }
                                />
                            </figure>
                            <div className="banner-content">
                                <h4 className="banner-subtitle ls-s text-body text-uppercase font-weight-normal">Popular</h4>
                                <h3 className="banner-title ls-m text-dark font-weight-normal">Hot Seller</h3>
                                <ALink href="/shop" className="btn btn-underline btn-link">Shop now <i className="d-icon-arrow-right"></i></ALink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default React.memo( IntroSection );