import React from 'react';
import Reveal from "react-awesome-reveal";
import { LazyLoadImage } from 'react-lazy-load-image-component';

// import Custom Components
import ALink from '~/components/features/custom-link';
import OwlCarousel from '~/components/features/owl-carousel';

import { introSlider } from '~/utils/data/carousel';
import { fadeInUpShorter, fadeInRightShorter, fadeIn, blurIn } from '~/utils/data/keyframes';

function IntroSection() {
    return (
        <OwlCarousel adClass="intro-slider owl-theme owl-nav-bg owl-nav-arrow" options={introSlider}>
            <div className="banner banner-fixed intro-slide1" style={{ backgroundColor: "#fff" }}>
                <figure>
                    <LazyLoadImage
                        src="./images/home/slides/slide1.png"
                        alt="Intro Slider"
                        effect="opacity"
                        width="auto"
                        height="469"
                    />
                </figure>

                <div className="container">
                    <div className="banner-content">
                        <Reveal keyframes={fadeInUpShorter} delay={300} duration={1000}>
                            <h4 className="banner-subtitle text-uppercase mb-1">From Online Store</h4>
                        </Reveal>
                        <Reveal keyframes={blurIn} delay={500} duration={1000}>
                            <h3 className="banner-title font-weight-bold">Originals Comper<br />Star. Shoes</h3>
                        </Reveal>
                        <Reveal keyframes={fadeInRightShorter} delay={700} duration={1000}>
                            <p className="text-dark font-primary text-uppercase"><span className="ls-super font-weight-bold">For-Men</span>
                                <br />
                                Product Identifier: DD1160</p>
                        </Reveal>
                    </div>
                </div>
            </div>

            <div className="banner banner-fixed intro-slide2" style={{ backgroundColor: "#fff" }}>
                <figure>
                    <LazyLoadImage
                        src="./images/home/slides/slide2.png"
                        alt="Intro Slider"
                        effect="opacity"
                        width="auto"
                        height="469"
                    />
                </figure>

                <div className="container">
                    <div className="banner-content">
                        <Reveal keyframes={fadeInUpShorter} delay={300} duration={1000}>
                            <h4 className="banner-subtitle text-uppercase">From Online Store</h4>
                        </Reveal>
                        <Reveal keyframes={blurIn} delay={500} duration={1000}>
                            <h3 className="banner-title font-weight-normal">Recommend<br /><strong className="text-uppercase font-weight-bold">Springchic
                                            2021</strong></h3>
                        </Reveal>
                        <Reveal keyframes={fadeIn} delay={700} duration={1000}>
                            <p className="text-dark font-primary">Free Shipping on all orders over $555.00</p>
                        </Reveal>
                        <Reveal keyframes={fadeInRightShorter} delay={900} duration={1000}>
                            <ALink href="/shop" className="btn btn-dark">Shop now<i className="d-icon-arrow-right"></i></ALink>
                        </Reveal>
                    </div>
                </div>
            </div>
        </OwlCarousel >
    )
}

export default React.memo(IntroSection);