import React from 'react';
import Reveal from 'react-awesome-reveal';

import OwlCarousel from '~/components/features/owl-carousel';

import ProductTwo from '~/components/features/product/product-two';

import { productSlider2 } from '~/utils/data/carousel';
import { fadeInUpShorter, blurIn, fadeInLeftShorter } from '~/utils/data/keyframes';

export default function TestimonialSection() {
    return (
        <section className="mt-10 testimonials-section overflow-hidden">
            <div className="container">
                <div className="title-wrapper text-center">
                    <Reveal keyframes={fadeInUpShorter} delay={300} duration={1000} triggerOnce>
                        <h5 className="title-info text-grey font-weight-normal lh-1 ls-md">Why buy Riode</h5>
                    </Reveal>
                    <Reveal keyframes={blurIn} delay={400} duration={1000} triggerOnce>
                        <h3 className="title-md font-weight-bold lh-1 mb-5">Customers Reviews</h3>
                    </Reveal>
                </div>
                <OwlCarousel adClass="owl-theme" options={productSlider2}>
                    <div className="testimonial testimonial-centered">
                        <Reveal keyframes={fadeInLeftShorter} delay={500} duration={1000} triggerOnce>
                            <div className="testimonial-info">
                                <figure className="testimonial-author-thumbnail">
                                    <img src="images/home/agents/1.png" alt="user" width="70" height="70" />
                                </figure>
                                <blockquote>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus
                                hendrerit.
                                Pellentesque aliquet nibh nec urna. Lorem ipsum dolor sit amet, consectetuer
                                        adipiscing elit. Phasellus hendrerit.</blockquote>
                                <cite>
                                    Herman Beck
                                        <span>Investor</span>
                                </cite>
                            </div>
                        </Reveal>
                    </div>
                    <div className="testimonial testimonial-centered">
                        <Reveal keyframes={fadeInLeftShorter} delay={500} duration={1000} triggerOnce>
                            <div className="testimonial-info">
                                <figure className="testimonial-author-thumbnail">
                                    <img src="images/home/agents/2.png" alt="user" width="70" height="70" />
                                </figure>
                                <blockquote>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus
                                hendrerit.
                                Pellentesque aliquet nibh nec urna. Lorem ipsum dolor sit amet, consectetuer
                                        adipiscing elit. Phasellus hendrerit.</blockquote>
                                <cite>
                                    Herman Beck
                                        <span>Investor</span>
                                </cite>
                            </div>
                        </Reveal>
                    </div>
                    <div className="testimonial testimonial-centered">
                        <Reveal keyframes={fadeInLeftShorter} delay={500} duration={1000} triggerOnce>
                            <div className="testimonial-info">
                                <figure className="testimonial-author-thumbnail">
                                    <img src="images/home/agents/3.png" alt="user" width="70" height="70" />
                                </figure>
                                <blockquote>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus
                                hendrerit.
                                Pellentesque aliquet nibh nec urna. Lorem ipsum dolor sit amet, consectetuer
                                        adipiscing elit. Phasellus hendrerit. </blockquote>
                                <cite>
                                    Herman Beck
                                        <span>Investor</span>
                                </cite>
                            </div>
                        </Reveal>
                    </div>
                </OwlCarousel>
            </div>
        </section>
    )
}