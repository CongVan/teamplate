import React from 'react';
import Reveal from "react-awesome-reveal";

import ALink from '~/components/features/custom-link';
import OwlCarousel from '~/components/features/owl-carousel';

import { fadeIn, fadeInLeftShorter, fadeInRightShorter } from '~/utils/data/keyframes';
import { categorySlider } from '~/utils/data/carousel';

function CategorySection () {
    return (
        <Reveal keyframes={ fadeIn } delay={ 200 } duration={ 1200 } triggerOnce>
            <section className="container mt-10 pt-7">
                <h2 className="title title-simple text-center">Browse Our Categories</h2>

                <OwlCarousel adClass="owl-theme" options={ categorySlider }>
                    <Reveal keyframes={ fadeInLeftShorter } delay={ 700 } duration={ 1200 } triggerOnce>
                        <div className="category category-icon">
                            <ALink href={ { pathname: '/shop', query: { category: 'fashion' } } }>
                                <figure className="category-media">
                                    <i className="d-icon-t-shirt2"></i>
                                </figure>
                                <div className="category-content">
                                    <h4 className="category-name">Fashion</h4>
                                </div>
                            </ALink>
                        </div>
                    </Reveal>

                    <Reveal keyframes={ fadeInLeftShorter } delay={ 500 } duration={ 1200 } triggerOnce>
                        <div className="category category-icon">
                            <ALink href={ { pathname: '/shop', query: { category: 'electronics' } } }>
                                <figure className="category-media">
                                    <i className="d-icon-camera2"></i>
                                </figure>
                                <div className="category-content">
                                    <h4 className="category-name">Electronics</h4>
                                </div>
                            </ALink>
                        </div>
                    </Reveal>

                    <Reveal keyframes={ fadeInLeftShorter } delay={ 300 } duration={ 1200 } triggerOnce>
                        <div className="category category-icon">
                            <ALink href={ { pathname: '/shop', query: { category: 'computer' } } }>
                                <figure className="category-media">
                                    <i className="d-icon-desktop"></i>
                                </figure>
                                <div className="category-content">
                                    <h4 className="category-name">Computer</h4>
                                </div>
                            </ALink>
                        </div>
                    </Reveal>

                    <Reveal keyframes={ fadeInRightShorter } delay={ 300 } duration={ 1200 } triggerOnce>
                        <div className="category category-icon">
                            <ALink href={ { pathname: '/shop', query: { category: 'bag-and-backpacks' } } }>
                                <figure className="category-media">
                                    <i className="d-icon-backpack"></i>
                                </figure>
                                <div className="category-content">
                                    <h4 className="category-name">Bag &amp; Backpacks</h4>
                                </div>
                            </ALink>
                        </div>
                    </Reveal>

                    <Reveal keyframes={ fadeInRightShorter } delay={ 500 } duration={ 1200 } triggerOnce>
                        <div className="category category-icon">
                            <ALink href={ { pathname: '/shop', query: { category: 'sports' } } }>
                                <figure className="category-media">
                                    <i className="d-icon-basketball1"></i>
                                </figure>
                                <div className="category-content">
                                    <h4 className="category-name">Sports</h4>
                                </div>
                            </ALink>
                        </div>
                    </Reveal>

                    <Reveal keyframes={ fadeInRightShorter } delay={ 700 } duration={ 1200 } triggerOnce>
                        <div className="category category-icon">
                            <ALink href={ { pathname: '/shop', query: { category: 'toys-and-babycare' } } }>
                                <figure className="category-media">
                                    <i className="d-icon-babycare"></i>
                                </figure>
                                <div className="category-content">
                                    <h4 className="category-name">Toys &amp; Babycare</h4>
                                </div>
                            </ALink>
                        </div>
                    </Reveal>
                </OwlCarousel>
            </section>
        </Reveal >
    )
}

export default React.memo( CategorySection );