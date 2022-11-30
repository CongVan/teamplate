import React from 'react';
import Reveal from 'react-awesome-reveal';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import ALink from '~/components/features/custom-link';

import { fadeInLeftShorter, fadeInRightShorter } from '~/utils/data/keyframes'

function BannerSection () {

    return (
        <section className="banners-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-7">
                        <Reveal keyframes={ fadeInRightShorter } delay={ 200 } duration={ 1200 } triggerOnce>
                            <div className="banner banner1 banner-fixed overlay-zoom mb-4" style={ { backgroundColor: "#F7F7F7" } }>
                                <figure>
                                    <LazyLoadImage
                                        src="images/home/banners/1.jpg"
                                        alt="banner"
                                        width="680"
                                        height="305"
                                    />
                                </figure>
                                <div className="banner-content y-50">
                                    <h4 className="banner-subtitle">Featured Collection</h4>
                                    <h3 className="banner-title text-uppercase mb-6">Mellow Nectar</h3>
                                    <ALink href="/shop" className="btn btn-sm btn-rounded btn-outline btn-primary">Shop now</ALink>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                    <div className="col-md-5">
                        <Reveal keyframes={ fadeInRightShorter } duration={ 1200 } triggerOnce>
                            <div className="banner banner2 banner-fixed overlay-zoom mb-4" style={ { backgroundColor: "#EAEBF0" } }>
                                <figure>
                                    <LazyLoadImage
                                        src="images/home/banners/2.jpg"
                                        alt="banner"
                                        width="480"
                                        height="305"
                                    />
                                </figure>
                                <div className="banner-content y-50">
                                    <h4 className="banner-subtitle">Best Selling</h4>
                                    <h3 className="banner-title text-uppercase mb-6">Fruit Drink</h3>
                                    <ALink href="/shop" className="btn btn-sm btn-rounded btn-dark">Shop now</ALink>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                    <div className="col-md-5">
                        <Reveal keyframes={ fadeInLeftShorter } duration={ 1200 } triggerOnce>
                            <div className="banner banner3 banner-fixed mb-4">
                                <div className="banner-content x-50 y-50 text-center w-100 pr-2 pl-2">
                                    <h3 className="banner-title text-uppercase mb-0">
                                        Subscribe to our<strong className="d-block">Newsletter</strong></h3>
                                    <p className="">Start Shopping Right Now</p>
                                    <form action="#" method="get" className="input-wrapper">
                                        <input type="email" className="form-control text-center" name="email" id="email" placeholder="Email address here..." required />
                                        <button className="btn btn-dark btn-md" type="submit">Subscribe<i className="d-icon-arrow-right"></i></button>
                                    </form>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                    <div className="col-md-7">
                        <Reveal keyframes={ fadeInLeftShorter } delay={ 200 } duration={ 1200 } triggerOnce>
                            <div className="banner banner4 banner-fixed overlay-zoom mb-4" style={ { backgroundColor: "#E5EDEF" } }>
                                <figure>
                                    <LazyLoadImage
                                        src="images/home/banners/3.jpg"
                                        alt="banner"
                                        width="680"
                                        height="305"
                                    />
                                </figure>
                                <div className="banner-content y-50">
                                    <h4 className="banner-subtitle">New Arrivals</h4>
                                    <h3 className="banner-title text-uppercase mb-6">Fresh Crop</h3>
                                    <ALink href="/shop" className="btn btn-sm btn-rounded btn-outline btn-primary">Shop now</ALink>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default React.memo( BannerSection );