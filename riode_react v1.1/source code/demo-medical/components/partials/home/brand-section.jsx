import React from 'react';
import Reveal from 'react-awesome-reveal';

import OwlCarousel from '~/components/features/owl-carousel';

import { brandSlider } from '~/utils/data/carousel';
import { fadeIn } from '~/utils/data/keyframes';

function BrandSection () {
    return (
        <Reveal keyframes={ fadeIn } duration={ 1200 } triggerOnce>
            <section className="brand-section">
                <div className="title-wrapper">
                    <div className="container">
                        <h2 className="title">Shop By Brand</h2>
                        <span className="title-info">Our Brand</span>
                    </div>
                </div>

                <div className="container">
                    <OwlCarousel adClass="owl-theme owl-shadow-carousel pb-6" options={ brandSlider }>
                        <img
                            src="images/home/clients/1.jpg"
                            alt="brand"
                            width="180"
                            height="144"
                            effect="opacity"
                        />
                        <img
                            src="images/home/clients/2.jpg"
                            alt="brand"
                            width="180"
                            height="144"
                            effect="opacity"
                        />
                        <img
                            src="images/home/clients/3.jpg"
                            alt="brand"
                            width="180"
                            height="144"
                            effect="opacity"
                        />
                        <img
                            src="images/home/clients/4.jpg"
                            alt="brand"
                            width="180"
                            height="144"
                            effect="opacity"
                        />
                        <img
                            src="images/home/clients/5.jpg"
                            alt="brand"
                            width="180"
                            height="144"
                            effect="opacity"
                        />
                        <img
                            src="images/home/clients/6.jpg"
                            alt="brand"
                            width="180"
                            height="144"
                            effect="opacity"
                        />
                    </OwlCarousel>
                </div>
            </section>
        </Reveal>
    )
}

export default React.memo( BrandSection );