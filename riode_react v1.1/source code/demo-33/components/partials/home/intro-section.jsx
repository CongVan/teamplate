import React from 'react';
import Reveal from "react-awesome-reveal";
import { LazyLoadImage } from 'react-lazy-load-image-component';

// import Custom Components
import ALink from '~/components/features/custom-link';
import OwlCarousel from '~/components/features/owl-carousel';

import { introSlider } from '~/utils/data/carousel';
import { fadeIn, fadeInUp } from '~/utils/data/keyframes';

function IntroSection() {
    return (
        <OwlCarousel adClass="owl-theme owl-nav-fade owl-dot-white intro-slider" options={introSlider}>
            <div className="banner banner-fixed intro-slide1" style={{ backgroundColor: "#666" }}>
                <figure>
                    <LazyLoadImage
                        src="./images/home/slides/1.jpg"
                        alt="Intro Slider"
                        effect="opacity"
                        width="auto"
                        height="599"
                    />
                </figure>
                <div className="banner-content x-50 y-50 text-center">
                    <Reveal keyframes={fadeIn} delay={200} duration={1200}>
                        <h4 className="banner-subtitle mb-2 text-uppercase text-white">Riode Online Store</h4>
                    </Reveal>
                    <Reveal keyframes={fadeInUp} delay={800} duration={1200}>
                        <h3 className="banner-title font-weight-bolder text-white mb-8 btn-rounded"> Ladies Clothing</h3>
                    </Reveal>
                    <Reveal keyframes={fadeInUp} delay={1300} duration={1200}>
                        <ALink href="/shop" className="btn btn-outline btn-white">Shop Now <i className="d-icon-arrow-right"></i></ALink>
                    </Reveal>
                </div>
            </div>

            <div className="banner banner-fixed intro-slide1" style={{ backgroundColor: "#666" }}>
                <figure>
                    <LazyLoadImage
                        src="./images/home/slides/2.jpg"
                        alt="Intro Slider"
                        effect="opacity"
                        width="auto"
                        height="599"
                    />
                </figure>
                <div className="banner-content x-50 y-50 text-center">
                    <Reveal keyframes={fadeIn} delay={200} duration={1200}>
                        <h4 className="banner-subtitle mb-2 text-uppercase text-white">Riode Online Store</h4>
                    </Reveal>
                    <Reveal keyframes={fadeInUp} delay={800} duration={1200}>
                        <h3 className="banner-title font-weight-bolder text-white mb-8 btn-rounded">Lifestyle Collection</h3>
                    </Reveal>
                    <Reveal keyframes={fadeInUp} delay={1300} duration={1200}>
                        <ALink href="/shop" className="btn btn-outline btn-white">Shop Now <i className="d-icon-arrow-right"></i></ALink>
                    </Reveal>
                </div>
            </div>
        </OwlCarousel >
    )
}

export default React.memo(IntroSection);