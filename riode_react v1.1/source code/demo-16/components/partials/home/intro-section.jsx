
import React, { useEffect, useRef } from 'react';
import Reveal from "react-awesome-reveal";
import { LazyLoadImage } from 'react-lazy-load-image-component';

// import Custom Components
import ALink from '~/components/features/custom-link';
import OwlCarousel from '~/components/features/owl-carousel';

import { introSlider } from '~/utils/data/carousel';
import { fadeIn, fadeInUp, fadeInDown, blurIn } from '~/utils/data/keyframes';

function IntroSection () {
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
        <div className="intro-section container mb-4">
            <div className="row grid" ref={ ref }>
                <div className="grid-item col-7-xl col-md-8 height-x3">
                    <OwlCarousel adClass="intro-slider owl-theme owl-dot-inner owl-dot-white owl-full-height animation-slider" options={ introSlider }>
                        <div className="banner banner-fixed intro-slide1" style={ { backgroundColor: "#1b1b1b" } }>
                            <figure>
                                <LazyLoadImage
                                    src="./images/home/slides/1.jpg"
                                    alt="Intro Slider"
                                    effect="opacity"
                                    width="auto"
                                    height={ 460 }
                                />
                            </figure>

                            <div className="banner-content w-100">
                                <Reveal keyframes={ fadeInUp } delay={ 200 } duration={ 1200 }>
                                    <h4 className="banner-subtitle mb-1 ls-l font-weight-normal text-uppercase text-white">Classic Clothes</h4>
                                </Reveal>

                                <Reveal keyframes={ fadeInUp } delay={ 300 } duration={ 1200 }>
                                    <h3 className="banner-title mb-1 text-white">
                                        <span className="text-primary text-uppercase">ETT 02</span> Gunmetal
                                        </h3>
                                </Reveal>

                                <Reveal keyframes={ fadeInUp } delay={ 600 } duration={ 1200 }>
                                    <p className="font-primary text-grey mb-5">The Only Watches you’ll need...</p>
                                </Reveal>

                                <Reveal keyframes={ fadeInUp } delay={ 900 } duration={ 1200 }>
                                    <ALink href="/shop" className="btn btn-md btn-outline btn-primary text-white" >Shop Now</ALink>
                                </Reveal>
                            </div>
                        </div>

                        <div className="banner banner-fixed intro-slide2" style={ { backgroundColor: "#dcdbd6" } }>
                            <figure>
                                <LazyLoadImage
                                    src="./images/home/slides/2.jpg"
                                    alt="Intro Slider"
                                    effect="opacity"
                                    width="auto"
                                    height={ 460 }
                                />
                            </figure>

                            <div className="banner-content w-100 y-50">
                                <Reveal keyframes={ blurIn } delay={ 200 } duration={ 1400 }>
                                    <h4 className="banner-subtitle mb-2 text-primary font-weight-bold">New Arrivals</h4>
                                    <h3 className="banner-title mb-2 ls-l">For Women’s</h3>
                                    <p className="mb-7 ls-l font-primary text-dark font-weight-semi-bold">Start at $12.00</p>
                                    <ALink className="btn btn-md btn-dark btn-outline" href="/shop">Shop now</ALink>
                                </Reveal>
                            </div>
                        </div>

                        <div className="banner banner-fixed intro-slide3" style={ { backgroundColor: "#cfd3d4" } }>
                            <figure>
                                <LazyLoadImage
                                    src="./images/home/slides/3.jpg"
                                    alt="Intro Slider"
                                    effect="opacity"
                                    width="auto"
                                    height={ 460 }
                                />
                            </figure>

                            <div className="banner-content w-100 y-50 text-right">
                                <Reveal keyframes={ fadeIn } delay={ 200 } duration={ 1000 }>
                                    <h4 className="banner-subtitle mb-0 text-uppercase font-weight-normal">Comfortable</h4>
                                </Reveal>

                                <Reveal keyframes={ fadeInDown } delay={ 500 } duration={ 1200 }>
                                    <h3 className="banner-title ls-m font-weight-bolder">Sportswear</h3>
                                </Reveal>

                                <Reveal keyframes={ fadeInDown } delay={ 900 } duration={ 1200 }>
                                    <p className="font-primary mb-1 ls-m text-uppercase">up to</p>
                                </Reveal>

                                <Reveal keyframes={ fadeInDown } delay={ 1200 } duration={ 1200 }>
                                    <div className="banner-price-info ls-m mb-6 text-primary text-uppercase font-weight-bold">30% Off</div>
                                </Reveal>

                                <Reveal keyframes={ fadeInDown } delay={ 1500 } duration={ 1200 }>
                                    <ALink href="/shop" className="btn btn-md btn-outline btn-dark">Shop Now</ALink>
                                </Reveal>
                            </div>
                        </div>
                    </OwlCarousel >
                </div>

                <div className="grid-item col-3-xl col-md-4 col-xs-6 height-x1">
                    <div className="intro-banner1 banner overlay-zoom banner-fixed overlay-dark" style={ { backgroundColor: "#1e1e1e" } }>
                        <ALink href={ { pathname: '/shop', query: { category: 'women-s' } } }>
                            <figure>
                                <LazyLoadImage
                                    src="./images/home/banner/1.jpg"
                                    alt="Intro Banner"
                                    effect="opacity, transform"
                                    width="auto"
                                    height={ 147 }
                                />
                            </figure>
                        </ALink>
                        <div className="banner-content w-100">
                            <h4 className="banner-subtitle mb-1 font-weight-normal text-white">FOR WOMEN</h4>
                            <h3 className="banner-title mb-0 text-white font-weight-bold">New Trending 2021</h3>
                        </div>
                    </div>
                </div>

                <div className="grid-item col-3-xl col-md-4 col-xs-6 height-x1">
                    <div className="intro-banner2 banner banner-fixed overlay-dark" style={ { backgroundColor: "#4b525a" } }>
                        <ALink href={ { pathname: '/shop', query: { category: 'men-s' } } }>
                            <figure>
                                <LazyLoadImage
                                    src="./images/home/banner/2.jpg"
                                    alt="Intro Banner"
                                    effect="opacity"
                                    width="auto"
                                    height={ 147 }
                                />
                            </figure>
                        </ALink>
                        <div className="banner-content text-right w-100">
                            <h4 className="banner-subtitle font-weight-normal text-uppercase">For Men’s</h4>
                            <h3 className="banner-title mb-0 font-weight-bold">For Winter</h3>
                        </div>
                    </div>
                </div>

                <div className="grid-item col-3-xl col-md-4 height-x1">
                    <div className="intro-banner3 banner banner-fixed overlay-dark" style={ { backgroundColor: "#1e1e1e" } }>
                        <ALink href="#">
                            <figure>
                                <LazyLoadImage
                                    src="./images/home/banner/3.jpg"
                                    alt="Intro Banner"
                                    effect="opacity"
                                    width="auto"
                                    height={ 147 }
                                />
                            </figure>
                        </ALink>
                        <div className="banner-content w-100 y-50">
                            <h4 className="banner-subtitle text-uppercase text-primary">50% Off</h4>
                            <h3 className="banner-title ls-m text-uppercase text-white font-weight-normal">On Sale  This Week’s</h3>
                            <ALink href="/shop" className="btn btn-link btn-white btn-underline">Shop now <i className="d-icon-arrow-right"></i></ALink>
                        </div>
                    </div>
                </div>

                <div className="grid-space col-1-xl col-1"></div>
            </div>
        </div>
    )
}

export default React.memo( IntroSection );