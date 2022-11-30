import React from 'react';
import Reveal from 'react-awesome-reveal';

import OwlCarousel from '~/components/features/owl-carousel';

import { brandSlider } from '~/utils/data/carousel';
import { fadeIn } from '~/utils/data/keyframes';

function BrandSection() {
    return (
        <Reveal keyframes={ fadeIn } duration={ 1200 } delay={ 300 } triggerOnce>
            <section className="brands-section mt-10 pt-5 mb-10 pb-2">
                <h2 className="title title-custom title-center border-no mb-6">Our Clients</h2>

                <div className="inner-wrap">
                    <div className="container">
                        <OwlCarousel adClass="owl-theme brand-carousel" options={ brandSlider }>
                            <figure>
                                <img src="./images/brands/1.png" alt="Brand" width="180" height="100" />
                            </figure>
                            <figure>
                                <img src="./images/brands/2.png" alt="Brand" width="180" height="100" />
                            </figure>
                            <figure>
                                <img src="./images/brands/3.png" alt="Brand" width="180" height="100" />
                            </figure>
                            <figure>
                                <img src="./images/brands/4.png" alt="Brand" width="180" height="100" />
                            </figure>
                            <figure>
                                <img src="./images/brands/5.png" alt="Brand" width="180" height="100" />
                            </figure>
                            <figure>
                                <img src="./images/brands/6.png" alt="Brand" width="180" height="100" />
                            </figure>
                        </OwlCarousel>
                    </div>
                </div>
            </section>
        </Reveal>
    )
}

export default React.memo( BrandSection );