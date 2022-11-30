import React from 'react';
import Reveal from "react-awesome-reveal";
import { LazyLoadImage } from 'react-lazy-load-image-component';

import ALink from '~/components/features/custom-link';

import { fadeInLeftShorter, fadeInRightShorter } from '~/utils/data/keyframes';

function CategorySection() {
    return (
        <div className="category-wrap row cols-lg-4 cols-sm-2 cols-1 gutter-sm">
            <Reveal keyframes={ fadeInLeftShorter } delay={ 400 } triggerOnce>
                <div className="category category-absolute category-banner mb-2">
                    <ALink href="#">
                        <figure className="category-media">
                            <LazyLoadImage effect="opacity" src="./images/home/categories/1.jpg" alt="category" width="468"
                                height="320" />
                        </figure>
                    </ALink>
                    <div className="category-content align-items-center x-50 w-100">
                        <h4 className="category-name text-uppercase">All Star Nike Shoes</h4>
                        <span className="category-count text-uppercase">
                            <span>10</span> Products
                    </span>
                        <ALink href={ { pathname: '/shop', query: { category: 'all-star-nike-shoes' } } } className="btn btn-underline btn-link">Shop Now</ALink>
                    </div>
                </div>
            </Reveal>

            <Reveal keyframes={ fadeInLeftShorter } delay={ 200 } triggerOnce>
                <div className="banner banner-fixed mb-2 overlay-effect-two">
                    <ALink href="#">
                        <figure className="category-media">
                            <img effect="opacity" src="./images/home/categories/2.jpg" alt="category" width="468"
                                height="320" style={ { backgroundColor: "#2b2b23" } } />
                        </figure>
                    </ALink>
                    <div className="banner-content text-center x-50 y-50 w-100">
                        <h4 className="banner-subtitle text-uppercase text-primary font-weight-bold">Seasonal</h4>
                        <h3 className="banner-title text-white ls-m">Clearance</h3>
                        <p className="font-weight-semi-bold">Top 5 trends From Riode</p>
                        <ALink href="/shop" className="btn btn-white btn-link btn-underline">Shop Now<i
                            className="d-icon-arrow-right"></i></ALink>
                    </div>
                </div>
            </Reveal>

            <Reveal keyframes={ fadeInRightShorter } delay={ 200 } triggerOnce>
                <div className="category category-absolute category-banner mb-2">
                    <ALink href="#">
                        <figure className="category-media">
                            <LazyLoadImage effect="opacity" src="./images/home/categories/3.jpg" alt="category" width="468"
                                height="320" />
                        </figure>
                    </ALink>
                    <div className="category-content align-items-center x-50 w-100">
                        <h4 className="category-name text-uppercase">All star Nike Shoes</h4>
                        <span className="category-count text-uppercase">
                            <span>10</span> Products
                    </span>
                        <ALink href={ { pathname: '/shop', query: { category: 'all-star-nike-shoes' } } } className="btn btn-underline btn-link x-50">Shop Now</ALink>
                    </div>
                </div>
            </Reveal>

            <Reveal keyframes={ fadeInRightShorter } delay={ 400 } triggerOnce>
                <div className="banner banner-fixed mb-2 overlay-effect-two">
                    <ALink href="#">
                        <figure className="category-media">
                            <img effect="opacity" src="./images/home/categories/4.jpg" alt="category" width="468"
                                height="320" style={ { backgroundColor: "#c48c5c" } } />
                        </figure>
                    </ALink>
                    <div className="banner-content text-center x-50 y-50 w-100">
                        <h4 className="banner-subtitle text-uppercase font-weight-bold">Seasonal</h4>
                        <h3 className="banner-title text-white ls-m">The Latest</h3>
                        <p className="font-weight-semi-bold text-white">Discover the new design</p>
                        <ALink href="/shop" className="btn btn-white btn-link btn-underline">Shop Now<i
                            className="d-icon-arrow-right"></i></ALink>
                    </div>
                </div>
            </Reveal>

        </div>
    )
}

export default React.memo( CategorySection );