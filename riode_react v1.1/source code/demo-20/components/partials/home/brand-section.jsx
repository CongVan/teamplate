import React from 'react';
import Reveal from 'react-awesome-reveal';

import OwlCarousel from '~/components/features/owl-carousel';

import { brandSlider } from '~/utils/data/carousel';
import { fadeIn, blurIn } from '~/utils/data/keyframes';

function BrandSection () {
    return (
        <Reveal keyframes={ fadeIn } duration={ 1200 } delay={ 300 } triggerOnce>
            <section className="brand-section container pb-10">
                <Reveal keyframes={ blurIn } duration={ 1200 } delay={ 300 } triggerOnce>
                    <h2 className="title title-underline text-center">Our Brands</h2>
                </Reveal>

                <Reveal keyframes={ fadeIn } delay={ 600 } duration={ 1200 } triggerOnce>
                    <div className="mb-6 mt-6">
                        <OwlCarousel adClass="mt-4 mb-4 owl-theme brand-carousel" options={ brandSlider }>
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
                </Reveal>
            </section>
        </Reveal>
    )
}

export default React.memo( BrandSection );