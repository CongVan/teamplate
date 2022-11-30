import React from 'react';
import Reveal from "react-awesome-reveal";
import { LazyLoadImage } from 'react-lazy-load-image-component';

import ALink from '~/components/features/custom-link';
import OwlCarousel from '~/components/features/owl-carousel';

import { instagramSlider } from '~/utils/data/carousel';
import { fadeIn } from '~/utils/data/keyframes';

function InstagramSection () {
    return (
        <Reveal keyframes={ fadeIn } delay={ 300 } duration={ 1200 } triggerOnce>
            <div className="instagram-section pt-10 pb-10">
                <div className="container pb-8 pt-8">
                    <h2 className="title title-underline text-center">Our Instagram</h2>

                    <OwlCarousel adClass="owl-theme" options={ instagramSlider }>
                        <figure className="instagram">
                            <ALink href="#">
                                <LazyLoadImage
                                    src="./images/home/instagram/1.jpg"
                                    alt="instagram"
                                    effect="opacity, transform"
                                    width={ 100 }
                                    height={ 180 }
                                />
                            </ALink>
                        </figure>
                        <figure className="instagram">
                            <ALink href="#">
                                <LazyLoadImage
                                    src="./images/home/instagram/2.jpg"
                                    alt="instagram"
                                    effect="opacity, transform"
                                    width={ 100 }
                                    height={ 180 }
                                />
                            </ALink>
                        </figure>
                        <figure className="instagram">
                            <ALink href="#">
                                <LazyLoadImage
                                    src="./images/home/instagram/3.jpg"
                                    alt="instagram"
                                    effect="opacity, transform"
                                    width={ 100 }
                                    height={ 180 }
                                />
                            </ALink>
                        </figure>
                        <figure className="instagram">
                            <ALink href="#">
                                <LazyLoadImage
                                    src="./images/home/instagram/4.jpg"
                                    alt="instagram"
                                    effect="opacity, transform"
                                    width={ 100 }
                                    height={ 180 }
                                />
                            </ALink>
                        </figure>
                        <figure className="instagram">
                            <ALink href="#">
                                <LazyLoadImage
                                    src="./images/home/instagram/5.jpg"
                                    alt="instagram"
                                    effect="opacity, transform"
                                    width={ 100 }
                                    height={ 180 }
                                />
                            </ALink>
                        </figure>
                        <figure className="instagram">
                            <ALink href="#">
                                <LazyLoadImage
                                    src="./images/home/instagram/6.jpg"
                                    alt="instagram"
                                    effect="opacity, transform"
                                    width={ 100 }
                                    height={ 180 }
                                />
                            </ALink>
                        </figure>
                    </OwlCarousel>
                </div>

            </div>
        </Reveal>
    )
}

export default React.memo( InstagramSection );