import React from 'react';
import Reveal from 'react-awesome-reveal';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import ALink from '~/components/features/custom-link';

import { fadeInRightShorter, fadeInLeftShorter, blurIn } from '~/utils/data/keyframes';

function CtaSection () {
    return (
        <section className="banner-group mt-8">
            <div className="row">
                <div className="col-md-6 mb-4">
                    <Reveal keyframes={ fadeInRightShorter } delay={ 200 } duration={ 1200 } triggerOnce>
                        <div className="banner1 banner row gutter-no align-items-center">
                            <div className="col-xs-6">
                                <div className="banner-content order-first text-center">
                                    <Reveal keyframes={ blurIn } delay={ 300 } duration={ 1400 } triggerOnce>
                                        <h3 className="banner-title text-white text-uppercase">LookBook <span className="text-primary">2021</span></h3>
                                        <p className="text-grey font-primary ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incid</p>
                                        <ALink href="/shop" className="btn btn-md btn-outline btn-white">Shop now</ALink>
                                    </Reveal>
                                </div>
                            </div>

                            <figure className="col-xs-6" style={ { backgroundColor: "#a28778" } }>
                                <LazyLoadImage
                                    src="./images/home/banner/5.jpg"
                                    alt="category"
                                    effect="opacity;"
                                    width="auto"
                                    height={ 341 }
                                />
                            </figure>
                        </div>
                    </Reveal>
                </div>

                <div className="col-md-6 mb-4">
                    <Reveal keyframes={ fadeInLeftShorter } delay={ 200 } duration={ 1200 } triggerOnce>
                        <div className="banner2 banner banner-fixed" style={ { backgroundColor: "#1c1c1e" } }>
                            <figure>
                                <LazyLoadImage
                                    src="./images/home/banner/6.jpg"
                                    alt="category"
                                    effect="opacity;"
                                    width="auto"
                                    height={ 341 }
                                />
                            </figure>
                            <div className="banner-content y-50">
                                <Reveal keyframes={ blurIn } delay={ 300 } duration={ 1400 } triggerOnce>
                                    <h4 className="banner-subtitle text-white text-uppercase ls-md">Flash Sale <span className="text-secondary">50% Off</span></h4>
                                    <h3 className="banner-title text-white font-weight-bold">Lifestyle Collection</h3>
                                    <p className="text-white ls-l text-uppercase mb-5">From <span className="font-weight-bold">$16.00</span></p>
                                    <ALink href="/shop" className="btn btn-primary btn-md">Shop now</ALink>
                                </Reveal>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    )
}

export default React.memo( CtaSection );