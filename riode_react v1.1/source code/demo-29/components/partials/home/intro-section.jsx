import React from 'react';
import Reveal from "react-awesome-reveal";
import { LazyLoadImage } from 'react-lazy-load-image-component';

// import Custom Components
import ALink from '~/components/features/custom-link';
import OwlCarousel from '~/components/features/owl-carousel';

import { introSlider } from '~/utils/data/carousel';
import { fadeInUpShorter, blurIn } from '~/utils/data/keyframes';

function IntroSection() {
    return (
        <OwlCarousel adClass="intro-slider owl-theme gutter-no" options={introSlider}>
            <div className="intro-slide1 banner banner-fixed" style={{ backgroundColor: "#e6e8e9" }}>
                <figure>
                    <LazyLoadImage
                        src="./images/home/slides/1.jpg"
                        alt="Intro Slider"
                        effect="opacity"
                        width="auto"
                        height={469}
                    />
                </figure>

                <div className="container">
                    <div className="banner-content y-50">
                        <Reveal keyframes={fadeInUpShorter} delay={300} duration={1500}>
                            <h3 className="banner-subtitle d-inline-block text-uppercase">From Online Store</h3>
                        </Reveal>
                        <Reveal keyframes={fadeInUpShorter} delay={400} duration={1300}>
                            <h2 className="banner-title">Originals Comper Star. Xbox</h2>
                        </Reveal>
                        <Reveal keyframes={fadeInUpShorter} delay={500} duration={1200}>
                            <p className="font-primary mb-6">Free Shipping on all orders over $320.00</p>
                        </Reveal>
                        <Reveal keyframes={fadeInUpShorter} delay={600} duration={1000}>
                            <ALink href="/shop" className="btn btn-rounded btn-dark btn-outline mb-1">Shop Now<i className="d-icon-arrow-right"></i></ALink>
                        </Reveal>
                    </div>
                </div>
            </div>

            <div className="banner banner-fixed intro-slide2" style={{ backgroundColor: "#e6e8e9" }}>
                <figure>
                    <LazyLoadImage
                        src="./images/home/slides/2.jpg"
                        alt="Intro Slider"
                        effect="opacity"
                        width="auto"
                        height={469}
                    />
                </figure>

                <div className="container">
                    <div className="banner-content y-50 ml-auto text-right">
                        <Reveal keyframes={blurIn} delay={200} duration={800}>
                            <h4 className="banner-subtitle text-uppercase">Lifestyle Collection</h4>
                            <h2 className="banner-title"><b className="text-primary">Sophisticated</b>Domestic Electric
                                        Machines</h2>
                            <ALink href="/shop" className="btn btn-rounded btn-outline btn-dark">Shop now<i
                                className="d-icon-arrow-right"></i></ALink>
                        </Reveal>
                    </div>
                </div>
            </div>
        </OwlCarousel >
    )
}

export default React.memo(IntroSection);