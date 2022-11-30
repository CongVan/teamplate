import React from 'react';
import Reveal from 'react-awesome-reveal';
import { LazyLoadImage } from 'react-lazy-load-image-component';

// import Custom Components
import ALink from '~/components/features/custom-link';
import OwlCarousel from '~/components/features/owl-carousel';

import { introSlider } from '~/utils/data/carousel';
import { fadeInUp } from '~/utils/data/keyframes';

function IntroSection(props) {
    return (
        <div className="col-lg-9">
            <OwlCarousel adClass="intro-slider owl-dot-white owl-theme owl-dot-inner mb-4" options={introSlider}>
                <div className="banner banner-fixed intro-slide1" style={{ backgroundColor: "#f5f5f5" }}>
                    <figure>
                        <LazyLoadImage
                            src="./images/home/slides/1.jpg"
                            alt="Intro Slider"
                            effect="opacity"
                            width="880"
                            height="498"
                        />
                    </figure>
                    <div className="banner-content">
                        <Reveal keyframes={fadeInUp} delay={300} duration={1000}>
                            <h4 className="banner-subtitle text-uppercase text-primary font-weight-bold mb-1">
                                Best Sellers</h4>
                            <h3 className="banner-title mb-0">Air Powered Outdoor</h3>
                            <p className="banner-desc font-weight-normal text-uppercase mb-5">
                                <strong className="text-uppercase">Up To 10%</strong>
                            &nbsp;Discount
                                        </p>
                            <ALink href="/shop" className="btn btn-rounded btn-md btn-outline btn-dark text-uppercase mb-1">Shop now</ALink>
                        </Reveal>
                    </div>
                </div>

                <div className="banner banner-fixed intro-slide2" style={{ backgroundColor: "#dddee0" }}>
                    <figure>
                        <LazyLoadImage
                            src="./images/home/slides/2.jpg"
                            alt="Intro Slider"
                            effect="opacity"
                            width="880"
                            height="498"
                        />
                    </figure>
                    <div className="banner-content">
                        <Reveal keyframes={fadeInUp} delay={300} duration={1000}>
                            <h4 className="banner-subtitle text-uppercase font-weight-bold mb-1">New Arrivals
                                        </h4>
                            <h3 className="banner-title mb-0">Women Life Style</h3>
                            <p className="banner-desc font-weight-normal text-uppercase mb-5">
                                <strong className="text-primary text-uppercase">Up To 25%</strong>
                            &nbsp;Discount
                                        </p>
                            <ALink href="/shop"
                                className="btn btn-rounded btn-md btn-outline btn-dark text-uppercase mb-1">Shop now</ALink>
                        </Reveal>
                    </div>
                </div>
            </OwlCarousel >
        </div >
    )
}

export default React.memo(IntroSection);