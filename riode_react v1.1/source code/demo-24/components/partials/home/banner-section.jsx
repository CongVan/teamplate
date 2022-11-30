import React from 'react';
import Reveal from "react-awesome-reveal";
import { LazyLoadImage } from 'react-lazy-load-image-component';

import ALink from '~/components/features/custom-link';
import OwlCarousel from '~/components/features/owl-carousel';

import { fadeIn, fadeInRightShorter, fadeInLeftShorter, fadeInUp, fadeInUpShorter } from '~/utils/data/keyframes';
import { mainSlider6 } from '~/utils/data/carousel';

function BannerSection() {
    return (
        <Reveal keyframes={ fadeIn } delay={ 200 } duration={ 1200 } triggerOnce>
            <section className="banner-group mt-10 pt-7 pb-10">
                <div className="title-wrapper text-center mb-7">
                    <Reveal keyframes={ fadeInUp } delay={ 1000 } duration={ 1200 } triggerOnce>
                        <h2 className="title title-simple mb-2">End of Summer Sale</h2>
                    </Reveal>

                    <Reveal keyframes={ fadeInUp } delay={ 1300 } duration={ 1200 } triggerOnce>
                        <p className="text-body" >Get 30% off full price and sale items, with promo code SPORT30 through 9/3. Exclusions apply</p>
                    </Reveal>

                    <div className="row">
                        <div className="col-xs-6 text-right mb-4">
                            <Reveal keyframes={ fadeInUp } delay={ 1400 } duration={ 1200 } triggerOnce>
                                <ALink href={ { pathname: "/shop", query: { category: 'shoes' } } } className="btn btn-md btn-dark btn-slide-right font-weight-bold btn-infinite btn-rounded">Shop shoes<i className="d-icon-arrow-right"></i></ALink>
                            </Reveal>
                        </div>
                        <div className="col-xs-6 text-left mb-4">
                            <Reveal keyframes={ fadeInUp } delay={ 1500 } duration={ 1200 } triggerOnce>
                                <ALink href={ { pathname: "/shop", query: { category: 'bags' } } } className="btn btn-md btn-dark btn-slide-right font-weight-bold btn-infinite btn-rounded" >Shop apparel<i className="d-icon-arrow-right"></i></ALink>
                            </Reveal>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6 mb-4">
                        <Reveal keyframes={ fadeInRightShorter } delay={ 1000 } duration={ 1200 } triggerOnce>
                            <div className="banner banner-fixed overlay-dark" style={ { backgroundColor: "#eff0f4" } }>
                                <figure>
                                    <LazyLoadImage
                                        src="./images/home/banner/2.jpg"
                                        alt="banner"
                                        effect="opacity, transform"
                                        width={ 100 }
                                        height={ 380 }
                                    />
                                </figure>
                                <div className="banner-content y-50 w-100">
                                    <h4 className="banner-subtitle ls-normal text-uppercase font-weight-normal">This week we love...</h4>
                                    <h3 className="banner-title mb-5 text-uppercase">
                                        Women’s Accessories<span className="d-block font-weight-normal ls-m text-body">Sale Up to <b className="ls-normal">30% off</b></span>
                                    </h3>
                                    <ALink href={ { pathname: '/shop', query: { category: 'women' } } } className="btn btn-md btn-solid btn-rounded font-weight-bold">Shop now<i className="d-icon-arrow-right"></i></ALink>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                    <div className="col-md-6 mb-4">
                        <Reveal keyframes={ fadeInLeftShorter } delay={ 1000 } duration={ 1200 } triggerOnce>
                            <div className="banner banner-fixed overlay-dark" style={ { backgroundColor: "#eff0f4" } }>
                                <figure>
                                    <LazyLoadImage
                                        src="./images/home/banner/3.jpg"
                                        alt="banner"
                                        effect="opacity, transform"
                                        width={ 100 }
                                        height={ 380 }
                                    />
                                </figure>
                                <div className="banner-content y-50 w-100">
                                    <h4 className="banner-subtitle ls-normal text-uppercase font-weight-normal">Fragrance offers</h4>
                                    <h3 className="banner-title mb-5 text-uppercase">
                                        For Men’s Collection<span className="d-block font-weight-normal ls-m text-body">Sale Up to <b className="ls-normal">70% off</b></span>
                                    </h3>
                                    <ALink href={ { pathname: '/shop', query: { category: 'men' } } } className="btn btn-md btn-solid btn-rounded font-weight-bold">Shop now<i className="d-icon-arrow-right"></i></ALink>
                                </div>
                            </div>
                        </Reveal>
                    </div>
                </div>

                <Reveal keyframes={ fadeInUpShorter } delay={ 400 } duration={ 1200 } triggerOnce>
                    <OwlCarousel adClass="categories owl-carousel owl-nav-full owl-theme mb-4" options={ mainSlider6 }>
                        <div className="category">
                            <ALink href={ { pathname: '/shop', query: { category: 'clothing' } } }>
                                <figure className="category-media">
                                    <img src="./images/home/categories/1.jpg" alt="category" width="380" height="193" />
                                </figure>
                            </ALink>

                            <div className="category-content">
                                <h4 className="category-name text-uppercase"><ALink href={ { pathname: '/shop', query: { category: 'clothing' } } }>Jackets &amp; Coats</ALink></h4>
                                <span className="category-count">
                                    <span>5</span> Products
                                </span>
                            </div>
                        </div>

                        <div className="category">
                            <ALink href={ { pathname: '/shop', query: { category: 'bags' } } }>
                                <figure className="category-media">
                                    <img src="./images/home/categories/2.jpg" alt="category" width="380" height="193" />
                                </figure>
                            </ALink>

                            <div className="category-content">
                                <h4 className="category-name text-uppercase"><ALink href={ { pathname: '/shop', query: { category: 'bags' } } }>Bag &amp; Backpacks</ALink></h4>
                                <span className="category-count">
                                    <span>5</span> Products
                                </span>
                            </div>
                        </div>

                        <div className="category">
                            <ALink href={ { pathname: '/shop', query: { category: 'shoes' } } }>
                                <figure className="category-media">
                                    <img src="./images/home/categories/3.jpg" alt="category" width="380" height="193" />
                                </figure>
                            </ALink>

                            <div className="category-content">
                                <h4 className="category-name text-uppercase"><ALink href={ { pathname: '/shop', query: { category: 'shoes' } } }>Sandal styles</ALink></h4>
                                <span className="category-count">
                                    <span>6</span> Products
                                </span>
                            </div>
                        </div>
                    </OwlCarousel>
                </Reveal>
            </section>
        </Reveal>
    )
}

export default React.memo( BannerSection );