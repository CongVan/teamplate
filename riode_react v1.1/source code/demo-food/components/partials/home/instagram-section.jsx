import React from 'react';
import Reveal from 'react-awesome-reveal';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import ALink from '~/components/features/custom-link';
import OwlCarousel from '~/components/features/owl-carousel';

import { instagramSlider } from '~/utils/data/carousel';
import { fadeIn } from '~/utils/data/keyframes';

function InstagramSection () {
    return (
        <section className="instagram-section container pt-10 pb-10 mb-8">
            <Reveal keyframes={ fadeIn } duration={ 1200 } delay={ 300 } triggerOnce>
                <div className="title-wrapper mb-4">
                    <h2 className="title title-underline mb-0">Follow us on Instagram</h2>
                </div>

                <OwlCarousel adClass="owl-theme" options={ instagramSlider }>
                    <figure className="instagram">
                        <ALink href="#">
                            <LazyLoadImage
                                src="images/home/instagram/1.png"
                                alt="brand"
                                width="220"
                                height="220"
                            />
                        </ALink>
                    </figure>
                    <figure className="instagram">
                        <ALink href="#">
                            <LazyLoadImage
                                src="images/home/instagram/2.png"
                                alt="brand"
                                width="220"
                                height="220"
                            />
                        </ALink>
                    </figure>
                    <figure className="instagram">
                        <ALink href="#">
                            <LazyLoadImage
                                src="images/home/instagram/3.png"
                                alt="brand"
                                width="220"
                                height="220"
                            />
                        </ALink>
                    </figure>
                    <figure className="instagram">
                        <ALink href="#">
                            <LazyLoadImage
                                src="images/home/instagram/4.png"
                                alt="brand"
                                width="220"
                                height="220"
                            />
                        </ALink>
                    </figure>
                    <figure className="instagram">
                        <ALink href="#">
                            <LazyLoadImage
                                src="images/home/instagram/5.png"
                                alt="brand"
                                width="220"
                                height="220"
                            />
                        </ALink>
                    </figure>
                </OwlCarousel>
            </Reveal>
        </section>
    )
}

export default React.memo( InstagramSection );