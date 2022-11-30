import React from 'react';
import Reveal from "react-awesome-reveal";
import { useRef, useEffect } from "react";
import { LazyLoadImage } from 'react-lazy-load-image-component';

// import Custom Components
import ALink from '~/components/features/custom-link';

import { fadeInRightShorter, fadeInDownShorter, fadeInLeftShorter, fadeInUpShorter } from '~/utils/data/keyframes';

export default function BannerSection() {
    const ref = useRef();
    let iso;

    useEffect(() => {
        isotopeLoad();
    }, [])

    async function isotopeLoad() {
        const Isotope = (await import('isotope-layout')).default;
        iso = new Isotope(ref.current, {
            itemSelector: '.grid-item',
            layoutMode: 'masonry',
            masonry: {
                columnWidth: '.grid-space'
            }
        });
    }

    return (
        <section className="banners-grid pt-10 mt-6 pb-6">
            <h2 className="title title-simple">Special Offers</h2>
            <div className="row grid" ref={ref}>
                <div className="grid-item col-lg-6 height-x2">
                    <Reveal keyframes={fadeInRightShorter} delay={300} duration={1500} className="h-100" triggerOnce>
                        <div className="banner banner1 banner-fixed overlay-light">
                            <figure>
                                <LazyLoadImage
                                    src="./images/home/banner/2.jpg"
                                    alt="banner image"
                                    effect="opacity"
                                    width="680"
                                    height="508"
                                />
                            </figure>
                            <div className="banner-content top w-100 text-center">
                                <h4 className="banner-subtitle text-uppercase mb-2">
                                    Deals and Promotion</h4>
                                <h3 className="banner-title font-weight-bold text-uppercase">Camera &amp; Lens</h3>
                                <h5 className="text-uppercase">Start at <span className="text-primary">$250.00</span>
                                </h5>
                            </div>
                            <div className="banner-content bottom w-100 text-center">
                                <ALink href="/shop"
                                    className="btn btn-rounded btn-outline btn-dark mb-4">Shop Now<i
                                        className="d-icon-arrow-right"></i></ALink>
                            </div>
                        </div>
                    </Reveal>
                </div>
                <div className="grid-item col-lg-3 col-xs-6 height-x1">
                    <Reveal keyframes={fadeInDownShorter} delay={300} duration={1500} className="h-100" triggerOnce>
                        <div className="banner banner2 banner-fixed overlay-light content-middle">
                            <figure>
                                <LazyLoadImage
                                    src="./images/home/banner/3.jpg"
                                    alt="banner image"
                                    effect="opacity"
                                    width="280"
                                    height="207"
                                />
                            </figure>
                            <div className="banner-content">
                                <h5 className="ls-l mb-1 opacity-8">Featured Event</h5>
                                <h4 className="banner-subtitle text-uppercase ls-s mb-0">Black Friday</h4>
                                <h3 className="banner-title text-primary font-weight-bold ls-s">Sale</h3>
                                <ALink href="/shop" className="btn btn-link btn-underline btn-dark">Shop
                                            Now<i className="d-icon-arrow-right"></i></ALink>
                            </div>
                        </div>
                    </Reveal>
                </div>
                <div className="grid-item col-lg-3 col-xs-6 height-x2">
                    <Reveal keyframes={fadeInLeftShorter} delay={300} duration={1500} className="h-100" triggerOnce>
                        <div className="banner banner4 banner-fixed overlay-dark">
                            <figure>
                                <LazyLoadImage
                                    src="./images/home/banner/5.jpg"
                                    alt="banner image"
                                    effect="opacity"
                                    width="280"
                                    height="434"
                                />
                            </figure>
                            <div className="banner-content top w-100 text-center">
                                <p className="banner-date text-right text-white font-weight-bold">
                                    18-25<sup>TH</sup>MAY</p>
                                <h5 className="banner-subtitle text-uppercase text-white">
                                    The Season To Play</h5>
                                <h3 className="banner-title font-weight-bold text-white text-uppercase">Up To 50%
                                        </h3>
                                <h4 className="text-white text-uppercase font-weight-normal">Xbox one wireless
                                            controller</h4>
                            </div>
                        </div>
                    </Reveal>
                </div>
                <div className="grid-item col-lg-3 col-xs-6 height-x1">
                    <Reveal keyframes={fadeInUpShorter} delay={300} duration={1500} className="h-100" triggerOnce>
                        <div className="banner banner3 banner-fixed overlay-dark content-middle">
                            <figure>
                                <LazyLoadImage
                                    src="./images/home/banner/4.jpg"
                                    alt="banner image"
                                    effect="opacity"
                                    width="280"
                                    height="207"
                                />
                            </figure>
                            <div className="banner-content">
                                <h5 className="ls-l text-white mb-1 opacity-8">Best Seller</h5>
                                <h4 className="banner-subtitle text-uppercase ls-s text-white mb-1">Electronic</h4>
                                <h3 className="banner-title font-weight-bold text-white ls-s ">20% Off</h3>
                                <ALink href="/shop" className="btn btn-link btn-underline btn-white">Shop
                                            Now<i className="d-icon-arrow-right"></i></ALink>
                            </div>
                        </div>
                    </Reveal>
                </div>
                <div className="grid-space col-lg-3 col-xs-6"></div>
            </div>
        </section>
    )
}