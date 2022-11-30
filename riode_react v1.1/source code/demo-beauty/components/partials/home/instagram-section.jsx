import React from 'react';
import Reveal from 'react-awesome-reveal';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import ALink from '~/components/features/custom-link';
import OwlCarousel from '~/components/features/owl-carousel';

import { instagramSlider } from '~/utils/data/carousel';
import { fadeIn } from '~/utils/data/keyframes';

function InstagramSection () {
    return (
        <section className="instagram-section pt-10 pb-10">
            <Reveal keyframes={ fadeIn } delay={ 300 } duration={ 1200 } triggerOnce>
                <div className="container pb-8 pt-8">
                    <h2 className="title title-underline text-center">Instagram</h2>

                    <OwlCarousel adClass="owl-theme brand-carousel gutter-no" options={ instagramSlider }>
                        <figure className="instagram">
                            <ALink href="#"><LazyLoadImage src="images/home/instagram/1.jpg" alt="brand" width="280" height="280" /></ALink>
                        </figure>
                        <figure className="instagram">
                            <ALink href="#"><LazyLoadImage src="images/home/instagram/2.jpg" alt="brand" width="280" height="280" /></ALink>
                        </figure>
                        <figure className="instagram">
                            <ALink href="#"><LazyLoadImage src="images/home/instagram/3.jpg" alt="brand" width="280" height="280" /></ALink>
                        </figure>
                        <figure className="instagram">
                            <ALink href="#"><LazyLoadImage src="images/home/instagram/4.jpg" alt="brand" width="280" height="280" /></ALink>
                        </figure>
                    </OwlCarousel>
                </div>
            </Reveal>
        </section>
    )
}

export default React.memo( InstagramSection );