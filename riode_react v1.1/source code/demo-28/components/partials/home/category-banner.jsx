import React from 'react';
import Reveal from "react-awesome-reveal";
import { LazyLoadImage } from 'react-lazy-load-image-component';

import ALink from '~/components/features/custom-link';
import OwlCarousel from '~/components/features/owl-carousel';

import { productSlider2 } from '~/utils/data/carousel';
import { fadeInLeftShorter } from '~/utils/data/keyframes';

export default function CategoryBanner() {
    return (
        <section className="mt-10 category-banner-section ml-2 mr-2">
            <OwlCarousel adClass="owl-theme" options={productSlider2}>
                <Reveal keyframes={fadeInLeftShorter} delay={500} duration={1200} triggerOnce>
                    <div className="category overlay-zoom overlay-light">
                        <ALink href="/shop">
                            <figure className="category-media">
                                <LazyLoadImage
                                    src="./images/home/banner/2.jpg"
                                    alt="category"
                                    width="468"
                                    height="349"
                                    effect="opacity"
                                />
                            </figure>
                        </ALink>
                        <div className="category-content">
                            <h4 className="category-name"><ALink href="/shop">All Season Staples</ALink></h4>
                            <a href="#" className="btn btn-link" onClick={(e) => e.preventDefault()}>5 Products</a>
                        </div>
                    </div>
                </Reveal>
                <Reveal keyframes={fadeInLeftShorter} delay={300} duration={1200} triggerOnce>
                    <div className="category overlay-zoom overlay-light">
                        <ALink href="/shop">
                            <figure className="category-media">
                                <LazyLoadImage
                                    src="./images/home/banner/3.jpg"
                                    alt="category"
                                    width="468"
                                    height="349"
                                    effect="opacity"
                                />
                            </figure>
                        </ALink>
                        <div className="category-content">
                            <h4 className="category-name"><ALink href="/shop">Denim Essentials</ALink></h4>
                            <a href="#" className="btn btn-link" onClick={(e) => e.preventDefault()}>4 Products</a>
                        </div>
                    </div>
                </Reveal>
                <Reveal keyframes={fadeInLeftShorter} delay={300} duration={1200} triggerOnce>
                    <div className="category overlay-zoom overlay-light">
                        <ALink href="/shop">
                            <figure className="category-media">
                                <LazyLoadImage
                                    src="./images/home/banner/4.jpg"
                                    alt="category"
                                    width="468"
                                    height="349"
                                    effect="opacity"
                                />
                            </figure>
                        </ALink>
                        <div className="category-content">
                            <h4 className="category-name"><ALink href="/shop">Comfortable Knitwear</ALink></h4>
                            <a href="#" className="btn btn-link" onClick={(e) => e.preventDefault()}>2 Products</a>
                        </div>
                    </div>
                </Reveal>
                <Reveal keyframes={fadeInLeftShorter} delay={300} duration={1200} triggerOnce>
                    <div className="category overlay-zoom overlay-light">
                        <ALink href="/shop">
                            <figure className="category-media">
                                <LazyLoadImage
                                    src="./images/home/banner/5.jpg"
                                    alt="category"
                                    width="468"
                                    height="349"
                                    effect="opacity"
                                />
                            </figure>
                        </ALink>
                        <div className="category-content">
                            <h4 className="category-name"><ALink href="/shop">Flattering and easy to wear</ALink></h4>
                            <a href="#" className="btn btn-link" onClick={(e) => e.preventDefault()}>1 Products</a>
                        </div>
                    </div>
                </Reveal>
            </OwlCarousel>
        </section>
    )
}