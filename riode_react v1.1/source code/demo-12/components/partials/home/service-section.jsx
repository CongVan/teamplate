import React from 'react';
import Reveal from "react-awesome-reveal";

import OwlCarousel from '~/components/features/owl-carousel';

import { serviceSlider } from '~/utils/data/carousel';
import { fadeInRightShorter } from '~/utils/data/keyframes';

function ServiceBox( props ) {
    return (
        <div className="service-list">
            <OwlCarousel adClass="owl-theme owl-middle" options={ serviceSlider }>
                <Reveal keyframes={ fadeInRightShorter } delay={ 300 } duration={ 1200 } triggerOnce>
                    <div className="icon-box icon-box-side">
                        <i className="icon-box-icon d-icon-truck"
                            style={ { fontSize: "5.4rem", marginRight: "18px" } }></i>
                        <div className="icon-box-content">
                            <h4 className="icon-box-title">Free Shipping &amp; Return</h4>
                            <p>Free shipping on orders over $99</p>
                        </div>
                    </div>
                </Reveal>

                <Reveal keyframes={ fadeInRightShorter } delay={ 400 } duration={ 1200 } triggerOnce>
                    <div className="icon-box icon-box-side">
                        <i className="icon-box-icon d-icon-service"
                            style={ { fontSize: "4.1rem", marginRight: "13px" } }></i>
                        <div className="icon-box-content">
                            <h4 className="icon-box-title">Customer Support</h4>
                            <p>We provide customer support of 24/7</p>
                        </div>
                    </div>
                </Reveal>

                <Reveal keyframes={ fadeInRightShorter } delay={ 500 } duration={ 1200 } triggerOnce>
                    <div className="icon-box icon-box-side">
                        <i className="icon-box-icon d-icon-money"
                            style={ { fontSize: "3.9rem", marginRight: "12px" } }></i>
                        <div className="icon-box-content">
                            <h4 className="icon-box-title">Moneyback Guarantee</h4>
                            <p>Return most items within 30 days</p>
                        </div>
                    </div>
                </Reveal>
            </OwlCarousel>
        </div >
    )
}

export default React.memo( ServiceBox );