import React from 'react';
import Reveal from "react-awesome-reveal";

import OwlCarousel from '~/components/features/owl-carousel';

import { serviceSlider } from '~/utils/data/carousel';
import { fadeInUpShorter } from '~/utils/data/keyframes';

function ServiceBox ( props ) {
    return (
        <section className="pb-8 service-list-section p-relative overflow-hidden">
            <div className="container">
                <div className="service-list service-list-lg">
                    <Reveal keyframes={ fadeInUpShorter } delay={ 200 } duration={ 1200 } triggerOnce>
                        <OwlCarousel adClass="owl-theme show-shadow" options={ serviceSlider }>
                            <div className="icon-box icon-box-side flex-column">
                                <i className="icon-box-icon d-icon-truck mr-0"></i>
                                <div className="icon-box-content mb-1 text-center">
                                    <h4 className="icon-box-title text-normal">Free Shipping &amp; Return</h4>
                                    <p className="text-grey">Get free delivery of your orders<br />
                                            all over the world.</p>
                                </div>
                            </div>
                            <div className="icon-box icon-box-side flex-column">
                                <i className="icon-box-icon d-icon-service mr-0"></i>
                                <div className="icon-box-content mb-1 text-center">
                                    <h4 className="icon-box-title text-normal">Customer Support</h4>
                                    <p className="text-grey">We provide convenient support of<br />24/7 for
                                            our customers.</p>
                                </div>
                            </div>
                            <div className="icon-box icon-box-side flex-column">
                                <i className="icon-box-icon d-icon-money mr-0"></i>
                                <div className="icon-box-content mb-1 text-center">
                                    <h4 className="icon-box-title text-normal">Moneyback Guarantee</h4>
                                    <p className="text-grey">We fully guarantee our money<br />
                                            back policy with no doubt.</p>
                                </div>
                            </div>
                            <div className="icon-box icon-box-side flex-column">
                                <i className="icon-box-icon d-icon-card mr-0"></i>
                                <div className="icon-box-content mb-1 text-center">
                                    <h4 className="icon-box-title text-normal">20% Off Your First Order</h4>
                                    <p className="text-grey">Get our first gift - 20% off for your<br />
                                            first ordered product.</p>
                                </div>
                            </div>
                        </OwlCarousel>
                    </Reveal>
                </div>
            </div>
        </section>
    )
}

export default React.memo( ServiceBox );