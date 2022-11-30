import React from 'react';
import Reveal from "react-awesome-reveal";
import { LazyLoadImage } from 'react-lazy-load-image-component';

import ALink from '~/components/features/custom-link';

import { fadeIn } from '~/utils/data/keyframes';

function CategorySection() {
    return (
        <Reveal keyframes={ fadeIn } delay={ 300 } duration={ 1200 } triggerOnce>
            <section className="category-section mt-10 pt-1">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-sm-6 mb-4">
                            <div className="category category-light category-absolute overlay-zoom"
                                style={ { backgroundColor: "#c0c4c8" } }>
                                <ALink href={ { pathname: '/shop', query: { category: 'for-men' } } } >
                                    <figure className="category-media">
                                        <LazyLoadImage effect="opacity" src="./images/home/categories/8.jpg" alt="category" width="280"
                                            height="245" />
                                    </figure>
                                </ALink>
                                <div className="category-content">
                                    <ALink href={ { pathname: '/shop', query: { category: 'for-men' } } } className="btn btn-white font-weight-semi-bold btn-rounded text-capitalize">Shop
                                            Men</ALink>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6 mb-4 order-lg-last">
                            <div className="category category-light category-absolute overlay-zoom"
                                style={ { backgroundColor: "#1e1e1e" } }>
                                <ALink href="/shop" >
                                    <figure className="category-media">
                                        <LazyLoadImage effect="opacity" src="./images/home/categories/10.jpg" alt="category" width="280"
                                            height="245" />
                                    </figure>
                                </ALink>
                                <div className="category-content">
                                    <ALink href={ { pathname: '/shop', query: { category: 'for-women' } } } className="btn btn-white font-weight-semi-bold btn-rounded text-capitalize">Shop
                                            Women</ALink>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6 mb-4">
                            <div className="banner banner-fixed category-banner text-center"
                                style={ { backgroundColor: "#e6e7e7" } }>
                                <figure>
                                    <LazyLoadImage effect="opacity" src="./images/home/categories/9.jpg" alt="category" width="280"
                                        height="245" />
                                </figure>
                                <div className="banner-content x-50 y-50 w-100">
                                    <h4 className="banner-subtitle text-white font-weight-bold mb-2">Black Friday Sale
                                        </h4>
                                    <h3 className="banner-title text-primary font-weight-bold text-uppercase">Up to 70%
                                            Off</h3>
                                    <h5 className="text-white font-weight-normal ls-normal text-uppercase">Everything
                                        </h5>
                                    <ALink href="/shop" className="btn btn-white btn-link btn-underline text-uppercase">shop
                                            now</ALink>
                                </div>
                            </div>
                        </div >
                    </div >
                </div >
            </section >
        </Reveal >
    )
}

export default React.memo( CategorySection );