import React from 'react';
import Reveal from 'react-awesome-reveal';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import ALink from '~/components/features/custom-link';
import OwlCarousel from '~/components/features/owl-carousel';

import { brandSlider } from '~/utils/data/carousel';
import { fadeIn } from '~/utils/data/keyframes';

function BrandSection () {
    return (
        <section className="brand-section mt-lg-10 mb-10 pb-8">
            <Reveal keyframes={ fadeIn } duration={ 1200 } triggerOnce>
                <div className="title-wrapper">
                    <div className="container">
                        <h2 className="title">Our Instagram</h2>
                        <span className="title-info">@Riode ecommerce</span>
                    </div>
                </div>

                <div className="container">
                    <OwlCarousel adClass="owl-theme" options={ brandSlider }>
                        <figure className="instagram">
                            <ALink href="#">
                                <LazyLoadImage
                                    src="images/home/instagram/1.jpg"
                                    alt="brand"
                                    width="220"
                                    height="220"
                                />
                            </ALink>
                        </figure>
                        <figure className="instagram">
                            <ALink href="#">
                                <LazyLoadImage
                                    src="images/home/instagram/2.jpg"
                                    alt="brand"
                                    width="220"
                                    height="220"
                                />
                            </ALink>
                        </figure>
                        <figure className="instagram">
                            <ALink href="#">
                                <LazyLoadImage
                                    src="images/home/instagram/3.jpg"
                                    alt="brand"
                                    width="220"
                                    height="220"
                                />
                            </ALink>
                        </figure>
                        <figure className="instagram">
                            <ALink href="#">
                                <LazyLoadImage
                                    src="images/home/instagram/4.jpg"
                                    alt="brand"
                                    width="220"
                                    height="220"
                                />
                            </ALink>
                        </figure>
                        <figure className="instagram">
                            <ALink href="#">
                                <LazyLoadImage
                                    src="images/home/instagram/5.jpg"
                                    alt="brand"
                                    width="220"
                                    height="220"
                                />
                            </ALink>
                        </figure>
                    </OwlCarousel>
                </div>
            </Reveal>
        </section>
    )
}

export default React.memo( BrandSection );