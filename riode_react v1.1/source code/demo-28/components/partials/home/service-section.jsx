import React from 'react';
import Reveal from "react-awesome-reveal";

import OwlCarousel from '~/components/features/owl-carousel';

import { serviceSlider } from '~/utils/data/carousel';
import { fadeInRightShorter } from '~/utils/data/keyframes';

function ServiceBox() {
    return (
        <section className="mt-10 pt-lg-4 icon-boxes-section">
            <OwlCarousel adClass="owl-theme" options={serviceSlider}>
                <Reveal keyframes={fadeInRightShorter} delay={400} duration={1200} triggerOnce>
                    <div className="icon-box text-center">
                        <i className="icon-box-icon d-icon-truck text-primary" style={{ fontSize: '4.6rem' }}></i>

                        <div className="icon-box-content">
                            <h4 className="icon-box-title">Free Shipping &amp; Return</h4>

                            <p className="d-inline-block" style={{ maxWidth: '27rem' }}>Free shipping on orders over $99</p>
                        </div>
                    </div>
                </Reveal>

                <Reveal keyframes={fadeInRightShorter} delay={600} duration={1200} triggerOnce>
                    <div className="icon-box text-center">
                        <i className="icon-box-icon d-icon-headphone text-primary"></i>

                        <div className="icon-box-content">
                            <h4 className="icon-box-title">Customer Support 24/7</h4>

                            <p className="d-inline-block" style={{ maxWidth: '27rem' }}>Instant access to perfect support</p>
                        </div>
                    </div>
                </Reveal>

                <Reveal keyframes={fadeInRightShorter} delay={800} duration={1200} triggerOnce>
                    <div className="icon-box text-center">
                        <i className="icon-box-icon d-icon-secure text-primary"></i>

                        <div className="icon-box-content">
                            <h4 className="icon-box-title">100% Secure Payment</h4>

                            <p className="d-inline-block" style={{ maxWidth: '27rem' }}>We ensure secure payment!</p>
                        </div>
                    </div>
                </Reveal>

                <Reveal keyframes={fadeInRightShorter} delay={100} duration={1200} triggerOnce>
                    <div className="icon-box text-center">
                        <i className="icon-box-icon d-icon-money text-primary"></i>

                        <div className="icon-box-content">
                            <h4 className="icon-box-title">Money Back Guarantee</h4>

                            <p className="d-inline-block" style={{ maxWidth: '30rem' }}>Any back within 30days</p>
                        </div>
                    </div>
                </Reveal>
            </OwlCarousel>
        </section>
    )
}

export default React.memo(ServiceBox);