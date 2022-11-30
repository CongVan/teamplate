import React from 'react';
import Reveal from "react-awesome-reveal";

import OwlCarousel from '~/components/features/owl-carousel';

import { serviceSlider } from '~/utils/data/carousel';
import { fadeInUpShorter } from '~/utils/data/keyframes';

function ServiceBox(props) {
    return (
        <section className="pb-8 service-list-section p-relative overflow-hidden">
            <div className="container">
                <div className="service-list service-list-lg">
                    <OwlCarousel adClass="owl-theme show-shadow" options={serviceSlider}>
                        <Reveal keyframes={fadeInUpShorter} delay={200} duration={1000} triggerOnce>
                            <div className="icon-box icon-box-side icon-box-side-1 flex-column">
                                <i className="icon-box-icon d-icon-truck mr-0" style={{ fontSize: '5rem' }}></i>
                                <div className="icon-box-content mb-1 text-center">
                                    <h4 className="icon-box-title mb-1 text-normal">Free Shipping &amp; Return</h4>
                                    <p className="font-primary text-grey">Sed egestas, ante et vulputate volutpat, ros
                                            pede sempe vitae</p>
                                </div>
                            </div>
                        </Reveal>
                        <Reveal keyframes={fadeInUpShorter} delay={200} duration={1000} triggerOnce>
                            <div className="icon-box icon-box-side icon-box-side-1 flex-column">
                                <i className="icon-box-icon d-icon-service mr-0"></i>
                                <div className="icon-box-content mb-1 text-center">
                                    <h4 className="icon-box-title mb-1 text-normal">Customer support</h4>
                                    <p className="font-primary text-grey">Sed egestas, ante et vulputate volutpat, ros
                                            pede sempe vitae</p>
                                </div>
                            </div>
                        </Reveal>
                        <Reveal keyframes={fadeInUpShorter} delay={200} duration={1000} triggerOnce>
                            <div className="icon-box icon-box-side icon-box-side-1 flex-column">
                                <i className="icon-box-icon d-icon-money mr-0"></i>
                                <div className="icon-box-content mb-1 text-center">
                                    <h4 className="icon-box-title mb-1 text-normal">Moneyback Guarantee</h4>
                                    <p className="font-primary text-grey">Sed egestas, ante et vulputate volutpat, ros
                                            pede sempe vitae</p>
                                </div>
                            </div>
                        </Reveal>
                        <Reveal keyframes={fadeInUpShorter} delay={200} duration={1000} triggerOnce>
                            <div className="icon-box icon-box-side icon-box-side-1 flex-column">
                                <i className="icon-box-icon d-icon-card mr-0" style={{ fontSize: '48px' }}></i>
                                <div className="icon-box-content mb-1 text-center">
                                    <h4 className="icon-box-title mb-1 text-normal">20% Off Your first order</h4>
                                    <p className="font-primary text-grey">Sed egestas, ante et vulputate volutpat, ros
                                            pede sempe vitae</p>
                                </div>
                            </div>
                        </Reveal>
                    </OwlCarousel>
                </div>
            </div>
        </section>
    )
}

export default React.memo(ServiceBox);