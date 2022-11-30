import React from 'react';
import Reveal from "react-awesome-reveal";

import OwlCarousel from '~/components/features/owl-carousel';

import { serviceSlider } from '~/utils/data/carousel';
import { fadeInRightShorter } from '~/utils/data/keyframes';

function ServiceBox() {
    return (
        <section className="icon-boxes-section mb-10 pb-6 pt-4">
            <div className="container">
                <OwlCarousel adClass="owl-theme mt-3" options={serviceSlider}>
                    <Reveal keyframes={fadeInRightShorter} delay={400} duration={1000} triggerOnce>
                        <div className="icon-box text-center">
                            <span className="icon-box-icon icon-truck">
                                <i className="d-icon-truck text-primary"></i>
                            </span>
                            <div className="icon-box-content">
                                <h4 className="icon-box-title">Free Shipping & Return</h4>
                                <p className="d-inline-block" style={{ maxWidth: '27rem' }}>Get free delivery of your orders
                        all over the world.</p>
                            </div>
                        </div>
                    </Reveal>
                    <Reveal keyframes={fadeInRightShorter} delay={600} duration={1000} triggerOnce>
                        <div className="icon-box text-center">
                            <span className="icon-box-icon icon-service">
                                <i className="d-icon-service text-primary"></i>
                            </span>
                            <div className="icon-box-content">
                                <h4 className="icon-box-title">Customer Support</h4>
                                <p className="d-inline-block" style={{ maxWidth: '27rem' }}>We provide convenient support of
                                        24/7 for our customers.</p>
                            </div>
                        </div>
                    </Reveal>
                    <Reveal keyframes={fadeInRightShorter} delay={800} duration={1000} triggerOnce>
                        <div className="icon-box text-center">
                            <span className="icon-box-icon icon-money">
                                <i className="d-icon-money text-primary"></i>
                            </span>
                            <div className="icon-box-content">
                                <h4 className="icon-box-title">Secured Payment</h4>
                                <p className="d-inline-block" style={{ maxWidth: '27rem' }}>We fully guarantee our money
                                back
                                        policy with no doubt.</p>
                            </div>
                        </div>
                    </Reveal>
                    <Reveal keyframes={fadeInRightShorter} delay={1000} duration={1000} triggerOnce>
                        <div className="icon-box text-center">
                            <span className="icon-box-icon icon-card">
                                <i className="d-icon-card text-primary"></i>
                            </span>
                            <div className="icon-box-content">
                                <h4 className="icon-box-title">Money Back Guarantee</h4>
                                <p className="d-inline-block" style={{ maxWidth: '30rem' }}>Get our first gift - 20% off for
                                        your first ordered product.</p>
                            </div>
                        </div>
                    </Reveal>
                </OwlCarousel>
            </div>
        </section >
    )
}

export default React.memo(ServiceBox);