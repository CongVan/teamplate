import React from 'react';
import Reveal from "react-awesome-reveal";
import { LazyLoadImage } from 'react-lazy-load-image-component';

// import Custom Components
import ALink from '~/components/features/custom-link';
import OwlCarousel from '~/components/features/owl-carousel';

import { introSlider } from '~/utils/data/carousel';
import { fadeInRightShorter, fadeInLeftShorter, fadeIn, fadeInUpShorter } from '~/utils/data/keyframes';

function IntroSection() {
    return (
        <section className="intro-section container mb-lg-4">
            <div className="row pb-4">
                <OwlCarousel adClass="intro-slider owl-dot-white owl-theme owl-dot-inner mb-4" options={introSlider}>
                    <div className="intro-slide1 banner banner-fixed" style={{ backgroundColor: '#e8e6eb' }}>
                        <figure>
                            <LazyLoadImage
                                src="./images/home/slides/1.jpg"
                                alt="Intro Slider"
                                effect="opacity"
                                width="1180"
                                height="547"
                            />
                        </figure>
                        <div className="banner-content y-50">
                            <Reveal keyframes={fadeInRightShorter} delay={200} duration={1000}>
                                <h4 className="banner-subtitle text-uppercase mb-3">From online Store</h4>
                            </Reveal>
                            <Reveal keyframes={fadeInRightShorter} delay={400} duration={1000}>
                                <h3 className="banner-title font-weight-bold lh-1 ls-m mb-4">Highly Recommend <br /> Mid season's </h3>
                            </Reveal>
                            <Reveal keyframes={fadeInRightShorter} delay={200} duration={1000}>
                                <p className="banner-desc font-weight-normal lh-1 mb-8">
                                    <strong className="text-primary text-uppercase">Up To 10% Off</strong>
                                        &nbsp;For Men's Collection
                                    </p>
                                <ALink href="/shop" className="btn btn-rounded btn-dark">Shop now<i className="d-icon-arrow-right"></i></ALink>
                            </Reveal>
                        </div>
                    </div>
                    <div className="intro-slide2 banner banner-fixed" style={{ backgroundColor: '#e8e6eb' }}>
                        <figure>
                            <LazyLoadImage
                                src="./images/home/slides/2.jpg"
                                alt="Intro Slider"
                                effect="opacity"
                                width="1180"
                                height="547"
                            />
                        </figure>
                        <div className="banner-content y-50">
                            <Reveal keyframes={fadeInLeftShorter} delay={200} duration={1000}>
                                <h4 className="banner-subtitle text-uppercase mb-3">From online Store</h4>
                            </Reveal>
                            <Reveal keyframes={fadeInLeftShorter} delay={400} duration={1000}>
                                <h3 className="banner-title font-weight-bold lh-1 ls-m mb-4">Mid season Sale <br /> For Women's</h3>
                            </Reveal>
                            <Reveal keyframes={fadeInLeftShorter} delay={400} duration={1000}>
                                <p className="banner-desc font-weight-normal lh-1 mb-8">
                                    <strong className="text-primary text-uppercase">Up To 10% Off</strong>
                                </p>
                                <ALink href="/shop" className="btn btn-rounded btn-dark">Shop now<i
                                    className="d-icon-arrow-right"></i></ALink>
                            </Reveal>
                        </div>
                    </div>
                </OwlCarousel>
                <div className="col-lg-6 col-md-12 mb-4">
                    <div className="banner category-banner overlay-dark" style={{ backgroundColor: '#222' }}>
                        <figure>
                            <LazyLoadImage
                                src="./images/home/banners/1.jpg"
                                alt="banner"
                                effect="opacity"
                                width="580"
                                height="268"
                            />
                        </figure>
                        <div className="banner-content y-50">
                            <Reveal keyframes={fadeIn} delay={300} duration={1000} triggerOnce>
                                <h4 className="banner-subtitle text-uppercase font-weight-normal lh-1 text-white">New Collection</h4>
                                <h3 className="banner-title font-weight-bold lh-1 text-white mb-5">Summer Sale</h3>
                            </Reveal>
                            <Reveal keyframes={fadeInUpShorter} delay={300} duration={1000} triggerOnce>
                                <ALink href="/shop"
                                    className="btn btn-link btn-white btn-underline text-uppercase">Shop now<i className="d-icon-arrow-right"></i></ALink>
                            </Reveal>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-12 mb-4">
                    <div className="banner category-banner overlay-dark" style={{ backgroundColor: '#E5E6E8' }}>
                        <figure>
                            <LazyLoadImage
                                src="./images/home/banners/2.jpg"
                                alt="banner"
                                effect="opacity"
                                width="580"
                                height="268"
                            />
                        </figure>
                        <div className="banner-content y-50">
                            <Reveal keyframes={fadeIn} delay={300} duration={1000} triggerOnce>
                                <h4 className="banner-subtitle text-uppercase font-weight-normal lh-1">Trending</h4>
                                <h3 className="banner-title font-weight-bold lh-1 mb-5">Fashion Bags</h3>
                            </Reveal>
                            <Reveal keyframes={fadeInUpShorter} delay={300} duration={1000} triggerOnce>
                                <ALink href="/shop" className="btn btn-link btn-underline text-uppercase">Shop now<i className="d-icon-arrow-right"></i></ALink>
                            </Reveal>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default React.memo(IntroSection);