import React from 'react';
import Reveal from 'react-awesome-reveal';

import OwlCarousel from '~/components/features/owl-carousel';

import { brandSlider } from '~/utils/data/carousel';
import { fadeIn, fadeInUp } from '~/utils/data/keyframes';

function BrandSection () {
    return (
        <Reveal keyframes={ fadeIn } duration={ 1200 } delay={ 200 } triggerOnce>
            <section className="clients mt-8 pt-lg-6 pt-0 mb-10 pb-lg-10 pb-0">
                <Reveal keyframes={ fadeInUp } duration={ 1200 } delay={ 200 } triggerOnce>
                    <h2 className="title title-simple">The Best Clients</h2>
                </Reveal>

                <OwlCarousel adClass="owl-theme mb-3 pt-3" options={ brandSlider }>
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
            </section>
        </Reveal>
    )
}

export default React.memo( BrandSection );