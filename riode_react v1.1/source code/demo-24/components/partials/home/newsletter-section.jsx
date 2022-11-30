import React from 'react';
import Reveal from 'react-awesome-reveal';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import ALink from '~/components/features/custom-link';

import { fadeIn, fadeInDown, fadeInUpShorter } from '~/utils/data/keyframes';

function NewsletterSection () {
    return (
        <Reveal keyframes={ fadeIn } delay={ 200 } duration={ 1200 } triggerOnce>
            <section className="banner-cta mt-9 pt-lg-8 pt-2">
                <Reveal keyframes={ fadeInDown } delay={ 100 } duration={ 1200 } triggerOnce>
                    <h2 className="title title-simple">Meet Us in Real life</h2>
                </Reveal>

                <div className="row">
                    <div className="col-md-6 mb-4">
                        <Reveal keyframes={ fadeInUpShorter } delay={ 400 } duration={ 1100 } triggerOnce>
                            <div className="banner banner3 banner-fixed overlay-effect-four">
                                <figure style={ { backgroundColor: "#272727" } }>
                                    <LazyLoadImage
                                        src="./images/home/banner/4.jpg"
                                        alt="banner"
                                        width="auto"
                                        height={ 330 }
                                        effect="opacity"
                                    />
                                </figure>

                                <div className="banner-content w-100 x-50 y-50 text-center">
                                    <h3 className="banner-title ls-m mb-2 text-white text-uppercase font-weight-bold">20% off</h3>
                                    <h4 className="banner-subtitle mb-2 font-weight-bold text-white">Riode Birthday Sale</h4>
                                    <p className="ls-s mb-5 text-white">Get all the latest information on <br />Events, Sales and Offers.</p>
                                    <ALink href="/shop" className="btn btn-solid btn-sm btn-rounded">Discover now <i className="d-icon-arrow-right"></i></ALink>
                                </div>
                            </div>
                        </Reveal>
                    </div>

                    <div className="col-md-6 mb-4">
                        <Reveal keyframes={ fadeInUpShorter } delay={ 500 } duration={ 1200 } triggerOnce>
                            <div className="banner banner4 banner-fixed overlay-effect-one">
                                <figure style={ { backgroundColor: "#dce5ea" } }>
                                    <LazyLoadImage
                                        src="./images/home/banner/5.jpg"
                                        alt="banner"
                                        width="auto"
                                        height={ 330 }
                                        effect="opacity"
                                    />
                                </figure>

                                <div className="banner-content x-50 y-50 text-center">
                                    <h3 className="banner-title ls-m font-weight-normal text-uppercase">Subscribe to our<strong className="d-block">Newsletter</strong></h3>
                                    <p className="text-dark mb-6">Start Shopping Right Now</p>
                                    <form action="#" method="get" className="input-wrapper">
                                        <input type="email" className="form-control mb-4 text-center text-dark" name="email" id="email" placeholder="Email address here..." required />
                                        <button className="btn btn-solid btn-ellipse" type="submit">Subscribe<i className="d-icon-arrow-right"></i></button>
                                    </form>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </section>
        </Reveal>
    )
}

export default React.memo( NewsletterSection );