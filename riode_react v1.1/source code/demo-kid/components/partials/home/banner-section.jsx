import React from 'react';
import Reveal from 'react-awesome-reveal';
import { LazyLoadImage } from 'react-lazy-load-image-component';

// import Custom Components
import ALink from '~/components/features/custom-link';

import { fadeInLeftShorter, fadeInRightShorter } from '~/utils/data/keyframes';

export default function BannerSection () {
    return (
        <section className="banner-group mt-8">
            <div className="row">
                <div className="col-md-6 mb-4">
                    <Reveal keyframes={ fadeInRightShorter } delay={ 200 } duration={ 1200 } triggerOnce>
                        <div className="banner banner-fixed banner1 overlay-zoom" style={ { backgroundColor: "#fba9c0" } }>
                            <figure>
                                <LazyLoadImage
                                    src="images/home/banners/3.jpg"
                                    width={ 580 }
                                    height={ 240 }
                                    alt="banner"
                                />
                            </figure>
                            <div className="banner-content y-50">
                                <h3 className="banner-title text-white font-weight-bold">For Girl's</h3>
                                <h4 className="banner-subtitle text-uppercase text-white mb-4">Starting at $29</h4>
                                <hr className="banner-divider" />
                                <ALink href="/shop" className="btn btn-white btn-link btn-underline font-weight-bold">Shop Now<i className="d-icon-arrow-right"></i></ALink>
                            </div>
                        </div>
                    </Reveal>
                </div>
                <div className="col-md-6 mb-4">
                    <Reveal keyframes={ fadeInLeftShorter } delay={ 200 } duration={ 1200 } triggerOnce>
                        <div className="banner banner-fixed banner2 overlay-zoom" style={ { backgroundColor: "#42a3e8" } }>
                            <figure>
                                <LazyLoadImage
                                    src="images/home/banners/4.jpg"
                                    width={ 580 }
                                    height={ 240 }
                                    alt="banner"
                                />
                            </figure>
                            <div className="banner-content y-50">
                                <h3 className="banner-title text-white font-weight-bold">For Boy's</h3>
                                <h4 className="banner-subtitle text-uppercase text-white mb-4">Starting at $29</h4>
                                <hr className="banner-divider" />
                                <ALink href="/shop" className="btn btn-white btn-link btn-underline font-weight-bold">Shop Now<i className="d-icon-arrow-right"></i></ALink>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>

    )
}