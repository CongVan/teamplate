import React, { useEffect, useRef } from 'react';
import Reveal from "react-awesome-reveal";
import { LazyLoadImage } from 'react-lazy-load-image-component';

import ALink from '~/components/features/custom-link';

import { fadeIn, fadeInRightShorter, fadeInDownShorter, fadeInLeftShorter, fadeInUpShorter } from '~/utils/data/keyframes';

function CategorySection () {
    const ref = useRef( null );

    useEffect( () => {
        isotopeInit();
    }, [] );

    async function isotopeInit () {
        const Isotope = ( await import( 'isotope-layout' ) ).default;

        let iso = new Isotope( ref.current, {
            itemSelector: '.grid-item-1',
            masonry: {
                columnWidth: '.grid-space-1'
            }
        } );
    }

    return (
        <Reveal keyframes={ fadeIn } delay={ 200 } duration={ 1200 } triggerOnce>
            <section className="banner-group container mt-10 pt-8">
                <h2 className="title title-simple text-center">Browse products</h2>

                <div className="row grid" ref={ ref }>
                    <div className="grid-item-1 col-lg-6 col-md-8 height-x2">
                        <Reveal keyframes={ fadeInRightShorter } delay={ 300 } duration={ 1200 } triggerOnce className="h-100">
                            <div className="banner1 banner banner-fixed overlay-dark" style={ { backgroundColor: "#2f2e2c" } }>
                                <figure>
                                    <LazyLoadImage
                                        src="./images/home/banner/4.jpg"
                                        alt="category banner"
                                        effect="opacity;"
                                        width="auto"
                                        height={ 580 }
                                    />
                                </figure>
                                <div className="banner-content w-100">
                                    <h3 className="banner-title mb-2 text-white">
                                        Trending 2021<br />Collection</h3>
                                    <h4 className="banner-subtitle mb-2 text-light font-weight-normal">Take
                                        advantage of our latest</h4>
                                    <div className="banner-price-info ls-l font-weight-bold text-uppercase text-white">
                                        <span className="d-block text-primary ls-l">20%</span>Discount
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                    </div>

                    <div className="grid-item-1 col-lg-3 col-md-4 col-xs-6 height-x1">
                        <Reveal keyframes={ fadeInDownShorter } delay={ 300 } duration={ 1200 } triggerOnce className="h-100">
                            <div className="banner2 banner banner-fixed overlay-dark" style={ { backgroundColor: "#f3f3f3" } }>
                                <figure>
                                    <LazyLoadImage
                                        src="./images/home/banner/5.jpg"
                                        alt="category banner"
                                        effect="opacity;"
                                        width="auto"
                                        height={ 280 }
                                    />
                                </figure>
                                <div className="banner-content w-100 x-50 text-center">
                                    <h4 className="banner-subtitle mb-1 text-uppercase ls-normal">Check Out Now</h4>
                                    <h3 className="banner-title mb-0 font-weight-bold">Accessories &amp; Jewels</h3>
                                </div>
                            </div>
                        </Reveal>
                    </div>

                    <div className="grid-item-1 col-lg-3 col-md-4 col-xs-6 height-x1">
                        <Reveal keyframes={ fadeInLeftShorter } delay={ 300 } duration={ 1200 } triggerOnce className="h-100">
                            <div className="banner3 banner banner-fixed overlay-dark" style={ { backgroundColor: "#e2e2e2" } }>
                                <figure>
                                    <LazyLoadImage
                                        src="./images/home/banner/6.jpg"
                                        alt="category banner"
                                        effect="opacity;"
                                        width="auto"
                                        height={ 280 }
                                    />
                                </figure>
                                <div className="banner-content w-100 x-50 text-center">
                                    <h3 className="banner-title mb-1 font-weight-bold">Fresh Handbags</h3>
                                    <h4 className="banner-subtitle mb-0 font-weight-semi-bold text-uppercase ls-normal">Check Out Now</h4>
                                </div>
                            </div>
                        </Reveal>
                    </div>

                    <div className="grid-item-1 col-lg-3 col-xs-6 height-x1">
                        <Reveal keyframes={ fadeIn } delay={ 300 } duration={ 1200 } triggerOnce className="h-100">
                            <div className="banner4 banner banner-fixed overlay-dark" style={ { backgroundColor: "#f3f3f3" } }>
                                <figure>
                                    <LazyLoadImage
                                        src="./images/home/banner/7.jpg"
                                        alt="category banner"
                                        effect="opacity;"
                                        width="auto"
                                        height={ 280 }
                                    />
                                </figure>
                                <div className="banner-content w-100 x-50 text-center">
                                    <h4 className="banner-subtitle mb-1 text-uppercase ls-normal">Check Out Now</h4>
                                    <h3 className="banner-title mb-0 font-weight-bold">Classic Watches</h3>
                                </div>
                            </div>
                        </Reveal>
                    </div>

                    <div className="grid-item-1 col-lg-3 col-xs-6 height-x1">
                        <Reveal keyframes={ fadeInLeftShorter } delay={ 300 } duration={ 1200 } triggerOnce className="h-100">
                            <div className="banner5 banner banner-fixed overlay-dark" style={ { backgroundColor: "#5c5c5c" } }>
                                <figure>
                                    <LazyLoadImage
                                        src="./images/home/banner/8.jpg"
                                        alt="category banner"
                                        effect="opacity;"
                                        width="auto"
                                        height={ 280 }
                                    />
                                </figure>
                                <div className="banner-content w-100 x-50 text-center">
                                    <h3 className="banner-title mb-2 ls-m text-primary font-weight-bold">50% Off Sale!</h3>
                                    <h4 className="banner-subtitle mb-0 ls-m text-white text-uppercase">First Order</h4>
                                </div>
                            </div>
                        </Reveal>
                    </div>

                    <div className="grid-item-1 col-md-6 height-x1">
                        <Reveal keyframes={ fadeInUpShorter } delay={ 300 } duration={ 1200 } triggerOnce className="h-100">
                            <div className="banner6 banner row gutter-no">
                                <figure className="col-6" style={ { backgroundColor: "#323234" } }>
                                    <LazyLoadImage
                                        src="./images/home/banner/9.jpg"
                                        alt="category banner"
                                        effect="opacity;"
                                        width="auto"
                                        height={ 280 }
                                    />
                                </figure>
                                <div className="banner-content w-100 col-6 text-center">
                                    <h4 className="banner-subtitle text-uppercase">Special Offer</h4>
                                    <h3 className="banner-title font-weight-normal ls-l mb-0">
                                        <span className="d-block font-weight-bolder">All Watches &amp; Items</span>
                                    </h3>
                                    <h5 className="text-uppercase mb-1 mb-sm-5">Up to <span className="text-primary font-weight-bold">75% Off</span> Sale</h5>
                                    <ALink href={ { pathname: '/shop', query: { category: 'watches' } } } className="btn btn-md btn-outline btn-primary">Shop now</ALink>
                                </div>
                            </div>
                        </Reveal>
                    </div>

                    <div className="grid-item-1 col-md-6 height-x1">
                        <Reveal keyframes={ fadeInUpShorter } delay={ 500 } duration={ 1200 } triggerOnce className="h-100">
                            <div className="banner7 banner banner-fixed overlay-dark" style={ { backgroundColor: "#393438" } }>
                                <figure>
                                    <LazyLoadImage
                                        src="./images/home/banner/10.jpg"
                                        alt="category banner"
                                        effect="opacity;"
                                        width="auto"
                                        height={ 280 }
                                    />
                                </figure>
                                <div className="banner-content w-100 y-50">
                                    <h4 className="banner-subtitle ls-normal mb-3 font-weight-normal text-grey">This week we love...</h4>
                                    <h3 className="banner-title ls-m text-white">Shoes Collection</h3>
                                    <p className="font-primary ls-m mb-6 text-white">From <span className="text-primary font-weight-bold">$26.99</span></p>
                                    <ALink href={ { pathname: '/shop', query: { category: 'shoes' } } } className="btn btn-md btn-outline btn-primary">Shop now</ALink>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                    <div className="grid-space-1 col-1"></div>
                </div>
            </section>
        </Reveal>
    )
}

export default React.memo( CategorySection );