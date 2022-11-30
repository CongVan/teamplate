import React from 'react';
import Reveal from 'react-awesome-reveal'
import { LazyLoadImage } from 'react-lazy-load-image-component';

import ALink from '~/components/features/custom-link';

import { blurIn, tada } from '~/utils/data/keyframes';

function BigBannerSection () {

    return (
        <section className="banner-big-section mt-6" style={ { backgroundImage: "url(images/home/banners/bg.jpg)", backgroundColor: "#444" } }>
            <div className="container">
                <div className="row">
                    <div className="col-lg-7">
                        <Reveal keyframes={ tada } delay={ 50 } duration={ 1200 } triggerOnce>
                            <figure className="banner-media">
                                <LazyLoadImage
                                    src="images/home/banners/dish.png"
                                    alt="Dish"
                                    width="627"
                                    height="342"
                                />
                            </figure>
                        </Reveal>
                    </div>
                    <div className="col-lg-5">
                        <div className="banner-content">
                            <Reveal keyframes={ blurIn } delay={ 300 } duration={ 1200 } triggerOnce>
                                <>
                                    <h4 className="banner-subtitle text-uppercase text-white">Big Sale</h4>
                                    <h3 className="banner-title text-uppercase text-white mb-2">Precooked Food<span className="text-normal d-block font-weight-normal">Up To 50% Off</span></h3>
                                    <p className="text-white mb-5">Free Shipping on all Products over <span className="text-secondary">$99.00</span></p>
                                    <ALink href="/shop" className="btn btn-rounded btn-primary mb-4">shop now<i className="d-icon-arrow-right"></i></ALink>
                                </>
                            </Reveal>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default React.memo( BigBannerSection );