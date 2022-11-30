import React from 'react';
import Reveal from 'react-awesome-reveal';

import OwlCarousel from '~/components/features/owl-carousel';

import { brandSlider } from '~/utils/data/carousel';
import { fadeIn, fadeInUpShorter } from '~/utils/data/keyframes';

function BrandSection () {
    return (
        <Reveal keyframes={ fadeIn } duration={ 1200 } delay={ 300 } triggerOnce>
            <section className="container mt-9 mb-0 mb-sm-10 pt-4 pb-sm-10 pb-6">
                <Reveal keyframes={ fadeInUpShorter } duration={ 1200 } delay={ 200 } triggerOnce>
                    <h2 className="title title-simple mb-6">Our Client</h2>
                </Reveal>

                <Reveal keyframes={ fadeInUpShorter } duration={ 1200 } delay={ 400 } triggerOnce>
                    <OwlCarousel adClass="owl-theme brand-carousel mb-2" options={ brandSlider }>
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
                </Reveal>
            </section>
        </Reveal>
    )
}

export default React.memo( BrandSection );