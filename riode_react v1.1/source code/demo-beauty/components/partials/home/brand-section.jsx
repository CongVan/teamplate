import React from 'react';
import Reveal from 'react-awesome-reveal';

import OwlCarousel from '~/components/features/owl-carousel';

import { brandSlider } from '~/utils/data/carousel';
import { fadeIn } from '~/utils/data/keyframes';

function BrandSection () {
    return (
        <section className="brand-section container pt-10 pb-10">
            <Reveal keyframes={ fadeIn } delay={ 300 } duration={ 1200 } triggerOnce>
                <div className="with-border mb-6 mt-6">
                    <OwlCarousel adClass="owl-theme brand-carousel mt-4 mb-4" options={ brandSlider }>
                        <figure><img src="images/brands/1.png" alt="brand" width="180" height="100" /></figure>
                        <figure><img src="images/brands/2.png" alt="brand" width="180" height="100" /></figure>
                        <figure><img src="images/brands/3.png" alt="brand" width="180" height="100" /></figure>
                        <figure><img src="images/brands/4.png" alt="brand" width="180" height="100" /></figure>
                        <figure><img src="images/brands/5.png" alt="brand" width="180" height="100" /></figure>
                        <figure><img src="images/brands/6.png" alt="brand" width="180" height="100" /></figure>
                    </OwlCarousel>
                </div>
            </Reveal>
        </section>
    )
}

export default React.memo( BrandSection );