import React from 'react';
import Reveal from "react-awesome-reveal";
import { LazyLoadImage } from 'react-lazy-load-image-component';

import ALink from '~/components/features/custom-link';

import { fadeInRightShorter, fadeInLeftShorter } from '~/utils/data/keyframes';

function CategorySection() {
    return (
        <section className="banner-group mt-10 pt-2">
            <div className="row">
                <div className="col-md-6 mb-4">
                    <Reveal keyframes={ fadeInRightShorter } delay={ 200 } triggerOnce>
                        <div className="banner banner-fixed banner1">
                            <figure>
                                <LazyLoadImage src="./images/home/banners/3.jpg" threshold={ 300 } effect="opacity" width="580" height="240"
                                    alt="banner" />
                            </figure>
                            <div className="banner-content">
                                <h4 className="banner-subtitle font-weight-bold text-primary">For Women's</h4>
                                <h3 className="banner-title ls-m font-weight-bolder">New Bra &amp; Tight<br />
                                Pairings
                            </h3>
                                <ALink href={ { pathname: '/shop', query: { category: 'for-women-s' } } } className="btn btn-link btn-underline">Shop now
                                <i className="d-icon-arrow-right"></i></ALink>
                            </div>
                        </div>
                    </Reveal>
                </div>

                <div className="col-md-6 mb-4">
                    <Reveal keyframes={ fadeInLeftShorter } delay={ 200 } triggerOnce>
                        <div className="banner banner-fixed banner2">
                            <figure>
                                <LazyLoadImage src="./images/home/banners/4.jpg" threshold={ 300 } effect="opacity" width="580" height="240"
                                    alt="banner" />
                            </figure>
                            <div className="banner-content">
                                <h4 className="banner-subtitle font-weight-bold text-primary">For Men's</h4>
                                <h3 className="banner-title ls-m font-weight-bolder text-white">M7 Mid Season<br />
                                Collection
                            </h3>
                                <ALink href={ { pathname: '/shop', query: { category: 'for-men-s' } } } className="btn btn-link btn-underline btn-white">Shop now
                                <i className="d-icon-arrow-right"></i></ALink>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    )
}

export default React.memo( CategorySection );