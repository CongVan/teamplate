import React from 'react';
import Reveal from "react-awesome-reveal";

import OwlCarousel from '~/components/features/owl-carousel';

import { serviceSlider } from '~/utils/data/carousel';
import { fadeInRightShorter } from '~/utils/data/keyframes';

function ServiceBox () {
    return (
        <section className="service-list">
            <OwlCarousel adClass="owl-theme" options={ serviceSlider }>
                <Reveal keyframes={ fadeInRightShorter } delay={ 300 } duration={ 1200 } triggerOnce>
                    <div className="icon-box icon-box-side icon-inversed icon-box1">
                        <i className="icon-box-icon d-icon-butterfly2"></i>
                        <div className="icon-box-content">
                            <h4 className="icon-box-title text-capitalize">Free Shipping &amp; Return
                                </h4>
                            <p className="ls-s">Free shipping on orders over $99</p>
                        </div>
                    </div>
                </Reveal>

                <Reveal keyframes={ fadeInRightShorter } delay={ 400 } duration={ 1200 } triggerOnce>
                    <div className="icon-box icon-box-side icon-inversed icon-box2">
                        <i className="icon-box-icon d-icon-dinner-set"></i>
                        <div className="icon-box-content">
                            <h4 className="icon-box-title text-capitalize">High Quality Goods</h4>
                            <p className="ls-s">Instant access to perfect support</p>
                        </div>
                    </div>
                </Reveal>

                <Reveal keyframes={ fadeInRightShorter } delay={ 500 } duration={ 1200 } triggerOnce>
                    <div className="icon-box icon-box-side icon-inversed icon-box3">
                        <i className="icon-box-icon d-icon-birthday-cake2"></i>
                        <div className="icon-box-content">
                            <h4 className="icon-box-title text-capitalize">100% Secure Payment</h4>
                            <p className="ls-s">We ensure secure payment!</p>
                        </div>
                    </div>
                </Reveal>
            </OwlCarousel>
        </section>
    )
}

export default React.memo( ServiceBox );