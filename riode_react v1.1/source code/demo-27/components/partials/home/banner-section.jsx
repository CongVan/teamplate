import React from 'react';
import Reveal from 'react-awesome-reveal';

import ALink from '~/components/features/custom-link';

import { fadeInLeft, blurIn, fadeInRight } from '~/utils/data/keyframes';

export default function BannerSection() {
    return (
        <section className="banner3 banner mt-10"
            style={{ backgroundImage: ' url(images/home/banner/7.jpg)' }}>
            <div className="container">
                <div className="banner-content d-block d-lg-flex justify-content-between align-items-center">
                    <Reveal keyframes={fadeInLeft} delay={300} duration={1200} triggerOnce>
                        <h3 className="banner-title mb-lg-0 mr-8 ls-normal text-white text-uppercase font-weight-normal"><strong>Black</strong>
                                &nbsp;Friday Sale</h3>
                    </Reveal>
                    <Reveal keyframes={blurIn} delay={300} duration={1200} triggerOnce>
                        <h4 className="banner-subtitle mb-lg-0 mr-8 ls-normal font-italic text-white text-uppercase font-weight-normal">
                            Only Pay for <strong>Electronics you love</strong></h4>
                    </Reveal>
                    <Reveal keyframes={fadeInRight} delay={300} duration={1200} triggerOnce>
                        <ALink href="/shop" className="btn btn-primary btn-rounded">Shop now</ALink>
                    </Reveal>
                </div>
            </div>
        </section>
    )
}