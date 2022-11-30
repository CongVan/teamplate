import React from 'react';
import Reveal from "react-awesome-reveal";
import { LazyLoadImage } from 'react-lazy-load-image-component';

import ALink from '~/components/features/custom-link';
import OwlCarousel from '~/components/features/owl-carousel';

import { fadeInRightShorter, fadeInLeftShorter } from '~/utils/data/keyframes';
import { categorySlider } from '~/utils/data/carousel';

function CategorySection() {
    return (
        <>
            <section className="categories-section pt-10 mt-10">
                <div className="title-wrapper container text-center mt-1">
                    <h2 className="title title-simple">Popular Categories</h2>
                    <p>Lorem quis bibendum auctor, nisi elit consequat ipsum</p>
                </div>
                <OwlCarousel adClass="owl-theme" options={ categorySlider }>
                    <Reveal keyframes={ fadeInRightShorter } delay={ 300 } triggerOnce>
                        <div className="category category-overlay category-absolute overlay-dark overlay-zoom text-white" style={ { backgroundColor: "#f0f0f0" } }>
                            <ALink href={ { pathname: '/shop', query: { category: 'bedspreads' } } }>
                                <figure className="category-media">
                                    <LazyLoadImage effect="opacity" threshold={ 300 } src="./images/home/categories/1.jpg" alt="category" width="480"
                                        height="480" />
                                </figure>
                            </ALink>
                            <div className="category-content x-50 y-50">
                                <h4 className="category-name font-secondary font-weight-bold ls-normal text-uppercase">
                                    Bedspreads</h4>
                            </div>
                        </div>
                    </Reveal>

                    <Reveal keyframes={ fadeInRightShorter } delay={ 400 } triggerOnce>
                        <div className="category category-overlay category-absolute overlay-dark overlay-zoom text-white" style={ { backgroundColor: "#554f48" } }>
                            <ALink href={ { pathname: '/shop', query: { category: 'gallery' } } }>
                                <figure className="category-media">
                                    <LazyLoadImage effect="opacity" threshold={ 300 } src="./images/home/categories/2.jpg" alt="category" width="480"
                                        height="480" />
                                </figure>
                            </ALink>
                            <div className="category-content x-50 y-50">
                                <h4 className="category-name font-secondary font-weight-bold ls-normal text-uppercase">
                                    Gallery</h4>
                            </div>
                        </div>
                    </Reveal>

                    <Reveal keyframes={ fadeInRightShorter } delay={ 500 } triggerOnce>
                        <div className="category category-overlay category-absolute overlay-dark overlay-zoom text-white" style={ { backgroundColor: "#c4c4c4" } }>
                            <ALink href={ { pathname: '/shop', query: { category: 'chair' } } }>
                                <figure className="category-media">
                                    <LazyLoadImage effect="opacity" threshold={ 300 } src="./images/home/categories/3.jpg" alt="category" width="480"
                                        height="480" />
                                </figure>
                            </ALink>
                            <div className="category-content x-50 y-50">
                                <h4 className="category-name font-secondary font-weight-bold ls-normal text-uppercase">Chair
                        </h4>
                            </div>
                        </div>
                    </Reveal>

                    <Reveal keyframes={ fadeInRightShorter } delay={ 600 } triggerOnce>
                        <div className="category category-overlay category-absolute overlay-dark overlay-zoom text-white" style={ { backgroundColor: "#9a9ca0" } }>
                            <ALink href={ { pathname: '/shop', query: { category: 'lamp' } } }>
                                <figure className="category-media">
                                    <LazyLoadImage effect="opacity" threshold={ 300 } src="./images/home/categories/4.jpg" alt="category" width="480"
                                        height="480" />
                                </figure>
                            </ALink>
                            <div className="category-content x-50 y-50">
                                <h4 className="category-name font-secondary font-weight-bold ls-normal text-uppercase">Lamp
                        </h4>
                            </div>
                        </div>
                    </Reveal>
                </OwlCarousel>
            </section>

            <section className="mt-10 pt-4 pb-4 mb-10">
                <div className="container">
                    <div className="banner banner-cta1 row">
                        <div className="col-lg-5">
                            <div className="banner-content">
                                <h4 className="banner-subtitle font-weight-bold ls-normal text-primary text-uppercase">
                                    New Collection</h4>
                                <h3 className="banner-title font-secondary font-weight-bold text-uppercase">Complete
                                your perfect set.
                                    </h3>
                                <p className="mb-7 font-primary text-body">
                                    Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin,
                                    lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id
                                    elit.
                                        Duis sed odio sit amet nibh.</p>
                                <ALink href="/shop" className="btn btn-outline">Shop now</ALink>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <Reveal keyframes={ fadeInLeftShorter } triggerOnce>
                                <figure className="d-flex align-items-center h-100">
                                    <LazyLoadImage effect="opacity" src="./images/home/banners/1.jpg" alt="banner" width="820" height="354" />
                                </figure>
                            </Reveal>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default React.memo( CategorySection );