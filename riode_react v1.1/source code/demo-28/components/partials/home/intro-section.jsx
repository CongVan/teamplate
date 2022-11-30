import React from 'react';
import Reveal from "react-awesome-reveal";

// import Custom Components
import ALink from '~/components/features/custom-link';

import { fadeInUpShorter } from '~/utils/data/keyframes';

function IntroSection() {
    return (
        <section className="banner intro-banner"
            style={{ backgroundImage: 'url(images/home/banner/1.jpg)' }}>
            <div className="container">
                <div className="banner-content text-center">
                    <Reveal keyframes={fadeInUpShorter} delay={300} duration={1500}>
                        <h3 className="banner-subtitle text-white font-weight-normal mb-3">Denim Essentials</h3>
                    </Reveal>
                    <Reveal keyframes={fadeInUpShorter} delay={600} duration={1300}>
                        <h2 className="banner-title text-white ml-auto mr-auto ls-m">Find Your Trending Pink Style</h2>
                    </Reveal>
                    <Reveal keyframes={fadeInUpShorter} delay={900} duration={1200}>
                        <p className="text-white ls-s font-primary mb-5 ml-1">Get Free Shipping on all orders over $75 </p>
                    </Reveal>
                    <Reveal keyframes={fadeInUpShorter} delay={1200} duration={1000}>
                        <ALink href="/shop" className="btn btn-rounded btn-solid btn-primary">Shop now</ALink>
                    </Reveal>
                </div>
            </div>
        </section>
    )
}

export default React.memo(IntroSection);