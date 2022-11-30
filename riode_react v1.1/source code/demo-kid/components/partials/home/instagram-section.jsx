import React from 'react';
import Reveal from 'react-awesome-reveal';

import ALink from '~/components/features/custom-link';
import OwlCarousel from '~/components/features/owl-carousel';

import { instagramSlider } from '~/utils/data/carousel';
import { fadeIn } from '~/utils/data/keyframes';

function InstagramSection () {
    return (
        <Reveal keyframes={ fadeIn } duration={ 1200 } triggerOnce>
            <section className="pt-7 mb-10 pb-8" style={ { marginBottom: "-1px" } }>
                <h2 className="title title-underline with-link"><span>Our Instagram</span></h2>

                <OwlCarousel adClass="owl-theme brand-carousel gutter-no" options={ instagramSlider }>
                    <Reveal keyframes={ fadeIn } duration={ 1200 } triggerOnce>
                        <figure className="instagram">
                            <ALink href="#">
                                <img src="images/home/instagram/1.jpg" alt="Brand" width="220" height="220" />
                            </ALink>
                        </figure>
                    </Reveal>
                    <Reveal keyframes={ fadeIn } duration={ 1200 } triggerOnce>
                        <figure className="instagram">
                            <ALink href="#">
                                <img src="images/home/instagram/2.jpg" alt="Brand" width="220" height="220" />
                            </ALink>
                        </figure>
                    </Reveal>
                    <Reveal keyframes={ fadeIn } duration={ 1200 } triggerOnce>
                        <figure className="instagram">
                            <ALink href="#">
                                <img src="images/home/instagram/3.jpg" alt="Brand" width="220" height="220" />
                            </ALink>
                        </figure>
                    </Reveal>
                    <Reveal keyframes={ fadeIn } duration={ 1200 } triggerOnce>
                        <figure className="instagram">
                            <ALink href="#">
                                <img src="images/home/instagram/4.jpg" alt="Brand" width="220" height="220" />
                            </ALink>
                        </figure>
                    </Reveal>
                    <Reveal keyframes={ fadeIn } duration={ 1200 } triggerOnce>
                        <figure className="instagram">
                            <ALink href="#">
                                <img src="images/home/instagram/5.jpg" alt="Brand" width="220" height="220" />
                            </ALink>
                        </figure>
                    </Reveal>
                    <Reveal keyframes={ fadeIn } duration={ 1200 } triggerOnce>
                        <figure className="instagram">
                            <ALink href="#">
                                <img src="images/home/instagram/6.jpg" alt="Brand" width="220" height="220" />
                            </ALink>
                        </figure>
                    </Reveal>
                </OwlCarousel>
            </section>
        </Reveal>
    )
}

export default React.memo( InstagramSection );