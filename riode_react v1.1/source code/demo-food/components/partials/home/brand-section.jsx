import React from 'react';
import Reveal from 'react-awesome-reveal';

import OwlCarousel from '~/components/features/owl-carousel';

import { brandSlider } from '~/utils/data/carousel';
import { fadeIn } from '~/utils/data/keyframes';

function BrandSection () {
    return (
        <section className="brand-section container pt-6 pb-10">
            <Reveal keyframes={ fadeIn } duration={ 1200 } delay={ 300 } triggerOnce>
                <div className="title-wrapper mb-4">
                    <h2 className="title title-underline mb-0">From Our Brands</h2>
                </div>

                <OwlCarousel adClass="owl-theme brand-carousel" options={ brandSlider }>
                    <figure><img src="images/brands/1.png" alt="brand" width="180" height="100" />
                    </figure>
                    <figure><img src="images/brands/2.png" alt="brand" width="180" height="100" />
                    </figure>
                    <figure><img src="images/brands/3.png" alt="brand" width="180" height="100" />
                    </figure>
                    <figure><img src="images/brands/4.png" alt="brand" width="180" height="100" />
                    </figure>
                    <figure><img src="images/brands/5.png" alt="brand" width="180" height="100" />
                    </figure>
                    <figure><img src="images/brands/6.png" alt="brand" width="180" height="100" />
                    </figure>
                </OwlCarousel>
            </Reveal>
        </section>
    )
}

export default React.memo( BrandSection );