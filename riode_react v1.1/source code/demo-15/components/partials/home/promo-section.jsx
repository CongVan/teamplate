import React from 'react';
import Reveal from 'react-awesome-reveal';

import ALink from '~/components/features/custom-link';
import OwlCarousel from '~/components/features/owl-carousel';

import { fadeInLeftShorter, fadeInRightShorter } from '~/utils/data/keyframes';
import { promoSlider } from '~/utils/data/carousel';

export default function PromoSection( props ) {
    return (
        <section className="container pt-4 mt-10">
            <div className="banner banner-cta"
                style={ { backgroundImage: `url(./images/home/cta.jpg)`, backgroundColor: "#0b0b0d" } }>
                <div className="banner-content row align-items-center">
                    <div className="col-xl-9 col-lg-8 col-md-7 mb-6 mb-md-0">
                        <Reveal keyframes={ fadeInLeftShorter } delay={ 200 } triggerOnce>
                            <h3 className="banner-title ls-normal mb-2 text-white text-uppercase font-weight-bold">Get
                            our Perfect Gift</h3>
                            <p className="text-white ls-normal mb-6">Special Offer Collection</p>
                            <ALink href="/shop" className="btn btn-link btn-underline btn-primary btn-ellipse p-0">View All
                            Collection<i className="d-icon-arrow-right"></i></ALink>
                        </Reveal>
                    </div>

                    <div className="col-xl-3 col-lg-4 col-md-5">
                        <Reveal keyframes={ fadeInRightShorter } delay={ 200 } triggerOnce>
                            <OwlCarousel adClass="gift-slider owl-theme" options={ promoSlider }>
                                <div className="gift-slide text-center">
                                    <h5 className="text-uppercase text-white font-weight-bold mb-2">On Shoes
                                </h5>
                                    <h3 className="text-primary mb-5">Up to 20% Off</h3>
                                    <ALink href="/shop" className="btn btn-link btn-underline btn-white">Shop
                                    Now<i className="d-icon-arrow-right"></i></ALink>
                                </div>
                                <div className="gift-slide text-center">
                                    <h5 className="text-uppercase text-white font-weight-bold mb-2">On Shoes
                                </h5>
                                    <h3 className="text-primary mb-5">Up to 20% Off</h3>
                                    <ALink href="/shop" className="btn btn-link btn-underline btn-white">Shop
                                    Now<i className="d-icon-arrow-right"></i></ALink>
                                </div>
                            </OwlCarousel>
                        </Reveal>
                    </div>
                </div>
            </div>
        </section>
    )
}