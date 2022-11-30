import React from 'react';
import Reveal from "react-awesome-reveal";
import { LazyLoadImage } from 'react-lazy-load-image-component';

import ALink from '~/components/features/custom-link';
import OwlCarousel from '~/components/features/owl-carousel';

import { fadeIn, zoomInShorter, fadeInRightShorter } from '~/utils/data/keyframes';
import { categorySlider } from '~/utils/data/carousel';

function CategorySection () {
    return (
        <Reveal keyframes={ fadeIn } delay={ 200 } duration={ 1200 } triggerOnce>
            <section className="banner-group container pt-4 mt-4 mt-sm-10 pt-sm-8">
                <h2 className="title title-simple">Summer Season’s</h2>

                <OwlCarousel adClass="owl-theme" options={ categorySlider }>
                    <Reveal keyframes={ zoomInShorter } delay={ 300 } duration={ 1200 } triggerOnce>
                        <div className="banner1">
                            <div className="banner banner-fixed overlay-zoom" style={ { backgroundColor: "#87b7df" } }>
                                <figure className="category-media">
                                    <ALink href={ { pathname: '/shop', query: { category: 'fashion-sunglasses' } } } >
                                        <LazyLoadImage
                                            src="./images/home/banner/1.jpg"
                                            alt="category banner"
                                            effect="opacity, transform"
                                            width="auto"
                                            height={ 331 }
                                        />
                                    </ALink>
                                </figure>

                                <div className="banner-content">
                                    <h3 className="banner-title ls-normal font-weight-semi-bold text-white">
                                        <span className="d-block mb-1">Fashion Sunglasses</span><span className="d-block font-weight-normal ls-m">Collection</span>
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </Reveal>

                    <Reveal keyframes={ zoomInShorter } delay={ 400 } duration={ 1200 } triggerOnce>
                        <div className="banner2">
                            <div className="banner banner-fixed overlay-zoom" style={ { backgroundColor: "#3b3b3b" } }>
                                <figure className="category-media">
                                    <LazyLoadImage
                                        src="./images/home/banner/2.jpg"
                                        alt="category banner"
                                        effect="opacity, transform"
                                        width="auto"
                                        height={ 331 }
                                    />
                                </figure>

                                <div className="banner-content w-100 x-50 y-50 text-center">
                                    <p className="text-white font-primary">Women’s</p>
                                    <h3 className="banner-title mb-2 ls-m text-white">Accessories</h3>
                                    <h4 className="banner-subtitle mb-7 text-primary text-uppercase font-weight-bold">Up To 25% Off</h4>
                                    <ALink href={ { pathname: '/shop', query: { category: 'women-s' } } } className="btn btn-outline btn-ellipse btn-primary text-white mb-1">Shop now</ALink>
                                </div>
                            </div>
                        </div>
                    </Reveal>

                    <Reveal keyframes={ zoomInShorter } delay={ 500 } duration={ 1200 } triggerOnce>
                        <div className="banner3">
                            <div className="banner banner-fixed overlay-zoom" style={ { backgroundColor: "#f3f3f3" } }>
                                <figure className="category-media">
                                    <ALink href={ { pathname: '/shop', query: { category: 'swim-and-beachwear' } } } >
                                        <LazyLoadImage
                                            src="./images/home/banner/3.jpg"
                                            alt="category banner"
                                            effect="opacity, transform"
                                            width="auto"
                                            height={ 331 }
                                        />
                                    </ALink>
                                </figure>

                                <div className="banner-content">
                                    <h3 className="banner-title ls-normal font-weight-bold text-dark">
                                        <span className="d-block mb-1">Swim & Beachwear</span><span className="d-block font-weight-normal ls-m pt-0">Collection</span>
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </Reveal>

                    <Reveal keyframes={ zoomInShorter } delay={ 600 } duration={ 1200 } triggerOnce>
                        <div className="banner4">
                            <div className="banner banner-fixed overlay-zoom" style={ { backgroundColor: "#1e1916" } }>
                                <figure className="category-media">
                                    <LazyLoadImage
                                        src="./images/home/banner/4.jpg"
                                        alt="category banner"
                                        effect="opacity, transform"
                                        width="auto"
                                        height={ 331 }
                                    />
                                </figure>

                                <div className="banner-content w-100 x-50 y-50 text-center">
                                    <h4 className="banner-subtitle text-white font-weight-normal ls-m">Mid Season Sale</h4>
                                    <h3 className="banner-title ls-m font-weight-bold text-primary">Up to 70% Off</h3>
                                    <p className="text-white ls-s mb-5">Spend $60 and get FREE US<br />mainland delivery*</p>
                                    <ALink href="/shop" className="btn btn-solid btn-ellipse btn-primary mb-1">Shop now</ALink>
                                </div>
                            </div>
                        </div>
                    </Reveal>
                </OwlCarousel>
            </section>
        </Reveal >
    )
}

export default React.memo( CategorySection );