import React, { useEffect, useRef } from 'react';
import Reveal from "react-awesome-reveal";
import { LazyLoadImage } from 'react-lazy-load-image-component';

import ALink from '~/components/features/custom-link';

import { fadeIn, fadeInUpShorter } from '~/utils/data/keyframes';

function BannerSection () {
    const ref = useRef( null );

    useEffect( () => {
        isotopeInit();
    }, [] );

    async function isotopeInit () {
        const Isotope = ( await import( 'isotope-layout' ) ).default;

        let iso = new Isotope( ref.current, {
            itemSelector: '.grid-item',
            masonry: {
                columnWidth: '.grid-space'
            }
        } );
    }

    return (
        <Reveal keyframes={ fadeIn } delay={ 200 } duration={ 1200 } triggerOnce>
            <section className="intro-banners">
                <div className="row grid" ref={ ref }>
                    <div className="grid-item col-lg-3 col-md-6 height-x1">
                        <div className="category category-absolute category-banner overlay-dark text-white" style={ { backgroundColor: "#141414" } }>
                            <ALink href="#">
                                <figure className="category-media">
                                    <LazyLoadImage
                                        src="./images/home/banner/1.jpg"
                                        alt="category"
                                        effect="opacity;"
                                        width="auto"
                                        height={ 257 }
                                    />
                                </figure>
                            </ALink>
                            <Reveal keyframes={ fadeIn } delay={ 200 } duration={ 1200 } triggerOnce>
                                <div className="category-content d-flex x-50 text-center align-items-center">
                                    <h4 className="category-name text-center">For Men’s</h4>
                                    <span className="category-count"><span>7</span> Products</span>
                                    <ALink href={ { pathname: '/shop', query: { category: 'for-men-s' } } } className="btn btn-underline btn-link">Shop Now</ALink>
                                </div>
                            </Reveal>
                        </div>
                    </div>

                    <div className="grid-item col-lg-3 col-md-6 height-x1">
                        <div className="category category-absolute category-banner overlay-dark text-white" style={ { backgroundColor: "#524b45" } }>
                            <ALink href="#">
                                <figure className="category-media">
                                    <LazyLoadImage
                                        src="./images/home/banner/2.jpg"
                                        alt="category"
                                        effect="opacity;"
                                        width="auto"
                                        height={ 257 }
                                    />
                                </figure>
                            </ALink>
                            <Reveal keyframes={ fadeIn } delay={ 200 } duration={ 1200 } triggerOnce>
                                <div className="category-content d-flex align-items-center x-50 text-center">
                                    <h4 className="category-name text-center">For Women’s</h4>
                                    <span className="category-count"><span>2</span> Products</span>
                                    <ALink href={ { pathname: '/shop', query: { category: 'for-women-s' } } } className="btn btn-underline btn-link">Shop Now</ALink>
                                </div>
                            </Reveal>
                        </div>
                    </div>

                    <div className="grid-item col-lg-6 height-x2">
                        <div className="intro-banner1 banner row gutter-no">
                            <figure className="col-sm-6" style={ { backgroundColor: "#aba8a1" } }>
                                <LazyLoadImage
                                    src="./images/home/banner/3.jpg"
                                    alt="category"
                                    effect="opacity;"
                                    width="auto"
                                    height={ 534 }
                                />
                            </figure>
                            <div className="col-sm-6">
                                <div className="banner-content  text-center pl-2 pr-2">
                                    <Reveal keyframes={ fadeInUpShorter } delay={ 300 } duration={ 1200 } triggerOnce>
                                        <h4 className="banner-subtitle mb-2 ls-normal text-uppercase text-secondary">For Kids</h4>
                                    </Reveal>

                                    <Reveal keyframes={ fadeInUpShorter } delay={ 400 } duration={ 1200 } triggerOnce>
                                        <h3 className="banner-title ls-3 mb-2 text-white">New Arrivals</h3>
                                    </Reveal>

                                    <Reveal keyframes={ fadeInUpShorter } delay={ 500 } duration={ 1200 } triggerOnce>
                                        <p className="text-grey">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.</p>
                                    </Reveal>

                                    <Reveal keyframes={ fadeInUpShorter } delay={ 600 } duration={ 1200 } triggerOnce>
                                        <ALink href="/shop" className="btn btn-primary btn-md ls-m">Shop now</ALink>
                                    </Reveal>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid-item col-lg-6 height-x1">
                        <div className="intro-banner2 banner banner-fixed overlay-dark" style={ { backgroundColor: "#252525" } }>
                            <figure>
                                <LazyLoadImage
                                    src="./images/home/banner/4.jpg"
                                    alt="category"
                                    effect="opacity;"
                                    width="auto"
                                    height={ 257 }
                                />
                            </figure>

                            <div className="banner-content y-50">
                                <Reveal keyframes={ fadeInUpShorter } delay={ 200 } duration={ 1600 } triggerOnce>
                                    <h4 className="banner-subtitle text-uppercase text-white font-weight-normal">Flash Sale 50% Off</h4>
                                    <h3 className="banner-title text-white mb-3 font-weight-bold">Classic Style <span className="text-secondary text-uppercase">ETT 02</span> Gunmetal</h3>
                                    <p className="text-grey font-primary">The Only Watches you’ll need...</p>
                                    <ALink href="/shop" className="btn btn-primary btn-md ls-m">Shop now</ALink>
                                </Reveal>
                            </div>
                        </div>
                    </div>

                    <div className="grid-space col-1"></div>
                </div>
            </section>
        </Reveal>
    )
}

export default React.memo( BannerSection );