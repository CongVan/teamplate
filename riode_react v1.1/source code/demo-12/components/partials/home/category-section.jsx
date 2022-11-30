import React from 'react';
import Reveal from "react-awesome-reveal";
import { LazyLoadImage } from 'react-lazy-load-image-component';

import ALink from '~/components/features/custom-link';
import OwlCarousel from '~/components/features/owl-carousel';

import { fadeInLeftShorter, fadeIn } from '~/utils/data/keyframes';
import { categorySlider } from '~/utils/data/carousel';

function CategorySection() {
    return (
        <Reveal keyframes={ fadeIn } triggerOnce>
            <section className="container mt-10 pt-3 pb-5">
                <h2 className="title title-simple text-center mb-8">Popular Categories</h2>

                <OwlCarousel adClass="owl-theme" options={ categorySlider } data-owl-options={ categorySlider }>
                    <Reveal keyframes={ fadeInLeftShorter } delay={ 300 } triggerOnce>
                        <div className="category category-circle overlay-zoom">
                            <ALink href={ { pathname: '/shop', query: { category: 'clothing' } } }>
                                <figure className="category-media">
                                    <LazyLoadImage effect="opacity" threshold={ 300 } src="images/home/categories/1.jpg" alt="category" width="300"
                                        height="280" />
                                </figure>
                            </ALink>
                            <div className="category-content">
                                <h4 className="category-name"><ALink href={ { pathname: '/shop', query: { category: 'clothing' } } }>Clothing</ALink></h4>
                            </div>
                        </div>
                    </Reveal>

                    <Reveal keyframes={ fadeInLeftShorter } delay={ 400 } triggerOnce>
                        <div className="category category-circle overlay-zoom">
                            <ALink href={ { pathname: '/shop', query: { category: 'bags' } } }>
                                <figure className="category-media">
                                    <LazyLoadImage effect="opacity" threshold={ 300 } src="images/home/categories/2.jpg" alt="category" width="300"
                                        height="280" />
                                </figure>
                            </ALink>
                            <div className="category-content">
                                <h4 className="category-name"><ALink href={ { pathname: '/shop', query: { category: 'bags' } } }>Bags</ALink></h4>
                            </div>
                        </div>
                    </Reveal>

                    <Reveal keyframes={ fadeInLeftShorter } delay={ 500 } triggerOnce>
                        <div className="category category-circle overlay-zoom">
                            <ALink href={ { pathname: '/shop', query: { category: 'shoes-and-boots' } } }>
                                <figure className="category-media">
                                    <LazyLoadImage effect="opacity" threshold={ 300 } src="images/home/categories/3.jpg" alt="category" width="300"
                                        height="280" />
                                </figure>
                            </ALink>
                            <div className="category-content">
                                <h4 className="category-name"><ALink href={ { pathname: '/shop', query: { category: 'shoes-and-boots' } } }>Shoes &amp; Boots</ALink></h4>
                            </div>
                        </div>
                    </Reveal>

                    <Reveal keyframes={ fadeInLeftShorter } delay={ 600 } triggerOnce>
                        <div className="category category-circle overlay-zoom">
                            <ALink href={ { pathname: '/shop', query: { category: 'tops' } } }>
                                <figure className="category-media">
                                    <LazyLoadImage effect="opacity" threshold={ 300 } src="images/home/categories/4.jpg" alt="category" width="300"
                                        height="280" />
                                </figure>
                            </ALink>
                            <div className="category-content">
                                <h4 className="category-name"><ALink href={ { pathname: '/shop', query: { category: 'tops' } } }>Tops</ALink></h4>
                            </div>
                        </div>
                    </Reveal>
                </OwlCarousel>
            </section>
        </Reveal>
    )
}

export default React.memo( CategorySection );