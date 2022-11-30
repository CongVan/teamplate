import React from 'react';
import Reveal from "react-awesome-reveal";

import OwlCarousel from '~/components/features/owl-carousel';

import { serviceSlider } from '~/utils/data/carousel';
import { fadeInRightShorter } from '~/utils/data/keyframes';

function ServiceBox ( props ) {
    return (
        <div className="service-section mt-6">
            <div className="container">
                <div className="service-list">
                    <OwlCarousel adClass="service-carousel owl-theme" options={ serviceSlider }>
                        <Reveal keyframes={ fadeInRightShorter } delay={ 300 } duration={ 1200 } triggerOnce>
                            <div className="icon-box icon-box-side icon-box1">
                                <i className="icon-box-icon d-icon-truck" style={ { fontSize: "46px" } }></i>
                                <div className="icon-box-content">
                                    <h4 className="icon-box-title">Free Shipping &amp;
                                    Return
                                </h4>
                                    <p className="mb-0">Free shipping on orders over $99</p>
                                </div>
                            </div>
                        </Reveal>

                        <Reveal keyframes={ fadeInRightShorter } delay={ 400 } duration={ 1200 } triggerOnce>
                            <div className="icon-box icon-box-side icon-box2">
                                <i className="icon-box-icon d-icon-service"></i>
                                <div className="icon-box-content">
                                    <h4 className="icon-box-title">Customer Support 24/7
                                </h4>
                                    <p className="mb-0">Instant access to perfect support</p>
                                </div>
                            </div>
                        </Reveal>

                        <Reveal keyframes={ fadeInRightShorter } delay={ 500 } duration={ 1200 } triggerOnce>
                            <div className="icon-box icon-box-side icon-box3">
                                <i className="icon-box-icon d-icon-secure"></i>
                                <div className="icon-box-content">
                                    <h4 className="icon-box-title">100% Secure Payment
                                </h4>
                                    <p className="mb-0">We ensure secure payment!</p>
                                </div>
                            </div>
                        </Reveal>
                    </OwlCarousel>
                </div>
            </div>
        </div>
    )
}

export default React.memo( ServiceBox );