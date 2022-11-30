import { LazyLoadImage } from 'react-lazy-load-image-component';
import Reveal from 'react-awesome-reveal';

import ALink from '~/components/features/custom-link';

import { fadeInRightShorter, fadeInDownShorter, fadeInLeftShorter, fadeInUpShorter } from '~/utils/data/keyframes';

export default function BannerSection() {
    return (
        <section className="banner-group container pt-5">
            <div className="row grid">
                <div className="grid-item height-x1">
                    <Reveal keyframes={ fadeInRightShorter } delay={ 200 } triggerOnce>
                        <div className="banner1 banner banner-fixed overlay-zoom" style={ { backgroundColor: "#e4e4e4" } }>
                            <ALink href="/shop">
                                <figure>
                                    <LazyLoadImage src="./images/home/banners/1.jpg" alt="banner" width="280"
                                        height="230" />
                                </figure>
                            </ALink>
                            <div className="banner-content w-100 y-50 text-center">
                                <h3 className="banner-title mb-2 mt-2 text-uppercase font-weight-bold">Sporting goods
                        </h3>
                            </div>
                        </div>
                    </Reveal>
                </div>

                <div className="grid-item height-x1 w-2">
                    <Reveal keyframes={ fadeInDownShorter } triggerOnce>
                        <div className="banner2 banner banner-fixed overlay-zoom" style={ { backgroundColor: "#2b2d5e" } }>
                            <figure>
                                <LazyLoadImage src="./images/home/banners/2.jpg" alt="banner" width="480"
                                    height="230" />
                            </figure>
                            <div className="banner-content w-100 y-50 text-left">
                                <h4 className="banner-subtitle font-tertiary ls-s mb-1 text-white font-weight-normal">
                                    Clearance</h4>
                                <h3 className="banner-title mb-0 text-white text-capitalize font-weight-bold">for
                                fitness
                            classes</h3>
                                <p className="text-white">from $19.99</p>
                                <ALink href="/shop"
                                    className="btn btn-outline btn-primary text-white btn-md">Shop now</ALink>
                            </div>
                        </div>
                    </Reveal>
                </div>

                <div className="grid-item height-x2">
                    <Reveal keyframes={ fadeInLeftShorter } triggerOnce>
                        <div className="banner3 banner banner-fixed overlay-zoom" style={ { backgroundColor: "#5d5457" } }>
                            <figure>
                                <LazyLoadImage src="./images/home/banners/3.jpg" alt="banner" width="280"
                                    height="231" />
                            </figure>
                            <div className="banner-content w-100 text-left">
                                <h4
                                    className="banner-subtitle font-tertiary ls-normal mb-1 text-white font-weight-normal">
                                    On Sale</h4>
                                <h3 className="banner-title mb-0 text-white text-capitalize font-weight-bold">Transform
                            your life</h3>
                                <p className="text-white ls-s">from $39.00</p>
                                <ALink href="/shop" className="btn btn-outline btn-primary text-white">Discover
                            now</ALink>
                            </div>
                        </div>
                    </Reveal>
                </div>

                <div className="grid-item height-x1 w-2">
                    <Reveal keyframes={ fadeInRightShorter } triggerOnce>
                        <div className="banner4 banner banner-fixed overlay-zoom" style={ { backgroundColor: "#694932" } }>
                            <figure>
                                <LazyLoadImage src="./images/home/banners/4.jpg" alt="banner" width="280"
                                    height="231" />
                            </figure>
                            <div className="banner-content w-100 y-50 text-left">
                                <h4 className="banner-subtitle font-tertiary ls-s mb-1 text-white font-weight-normal">
                                    Clearance</h4>
                                <h3 className="banner-title mb-0 text-white text-capitalize font-weight-bold">build your
                            body</h3>
                                <p className="text-white">from $19.99</p>
                                <ALink href="/shop"
                                    className="btn btn-outline btn-primary text-white btn-md">Shop now</ALink>
                            </div>
                        </div>
                    </Reveal>
                </div>

                <div className="grid-item height-x1">
                    <Reveal keyframes={ fadeInUpShorter } triggerOnce>
                        <div className="banner5 banner banner-fixed overlay-zoom bg-primary">
                            <div className="banner-content w-100 y-50 text-center">
                                <h4 className="banner-subtitle font-tertiary mb-1 text-white font-weight-bold">
                                    Flash Sale</h4>
                                <h3 className="banner-title mb-3 text-white text-uppercase font-weight-bold">30% OFF</h3>
                                <ALink href="/shop" className="btn btn-outline btn-white btn-sm">Shop all sale</ALink>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    )
}