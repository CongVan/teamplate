import React from 'react';
import Reveal from "react-awesome-reveal";
import { LazyLoadImage } from 'react-lazy-load-image-component';

// import Custom Components
import OwlCarousel from '~/components/features/owl-carousel';

import { mainSlider21 } from '~/utils/data/carousel';
import { fadeInUpShorter } from '~/utils/data/keyframes';

export default function Instagram() {
    return (
        <section className="grey-section pt-10 pb-10">
            <div className="container">
                <h2 className="title text-center d-block pt-3">Instagram</h2>
                <OwlCarousel adClass="owl-theme mb-4 pb-4" options={mainSlider21}>
                    <Reveal keyframes={fadeInUpShorter} delay={300} duration={800} triggerOnce>
                        <figure className="instagram">
                            <a href="#">
                                <LazyLoadImage
                                    src="./images/home/instagram/1.jpg"
                                    alt="Instagram"
                                    effect="opacity"
                                    width={213}
                                    height={213}
                                />
                            </a>
                        </figure>
                    </Reveal>
                    <Reveal keyframes={fadeInUpShorter} delay={300} duration={800} triggerOnce>
                        <figure className="instagram">
                            <a href="#">
                                <LazyLoadImage
                                    src="./images/home/instagram/2.jpg"
                                    alt="Instagram"
                                    effect="opacity"
                                    width={213}
                                    height={213}
                                />
                            </a>
                        </figure>
                    </Reveal>
                    <Reveal keyframes={fadeInUpShorter} delay={300} duration={800} triggerOnce>
                        <figure className="instagram">
                            <a href="#">
                                <LazyLoadImage
                                    src="./images/home/instagram/3.jpg"
                                    alt="Instagram"
                                    effect="opacity"
                                    width={213}
                                    height={213}
                                />
                            </a>
                        </figure>
                    </Reveal>
                    <Reveal keyframes={fadeInUpShorter} delay={300} duration={800} triggerOnce>
                        <figure className="instagram">
                            <a href="#">
                                <LazyLoadImage
                                    src="./images/home/instagram/4.jpg"
                                    alt="Instagram"
                                    effect="opacity"
                                    width={213}
                                    height={213}
                                />
                            </a>
                        </figure>
                    </Reveal>
                    <Reveal keyframes={fadeInUpShorter} delay={300} duration={800} triggerOnce>
                        <figure className="instagram">
                            <a href="#">
                                <LazyLoadImage
                                    src="./images/home/instagram/5.jpg"
                                    alt="Instagram"
                                    effect="opacity"
                                    width={213}
                                    height={213}
                                />
                            </a>
                        </figure>
                    </Reveal>
                    <Reveal keyframes={fadeInUpShorter} delay={300} duration={800} triggerOnce>
                        <figure className="instagram">
                            <a href="#">
                                <LazyLoadImage
                                    src="./images/home/instagram/6.jpg"
                                    alt="Instagram"
                                    effect="opacity"
                                    width={213}
                                    height={213}
                                />
                            </a>
                        </figure>
                    </Reveal>
                </OwlCarousel>
            </div>
        </section>
    )
}